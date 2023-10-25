const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

let waiting_processes = [];
let running_processes = new Set();

function runBaseline() {
  if (waiting_processes.length === 0)
    return

  const data = waiting_processes.shift();
  const configuration = data.configuration;
  const contract = data.contract;
  const run = data.run;
  const command = data.command;

  // Delete old files
  console.log("Deleting old files")
  const runContractFiles = fs.readdirSync("contracts");
  for (let file of runContractFiles) {
    fs.unlinkSync(`contracts/${file}`);
  }
  const runTestFiles = fs.readdirSync("tests");
  for (let file of runTestFiles) {
    fs.unlinkSync(`tests/${file}`);
  }

  // Copy in new files
  console.log("Copying in new files");
  const contractFiles = fs.readdirSync(`baseline/${contract}`);
  for (let file of contractFiles) {
    fs.copyFileSync(`baseline/${contract}/${file}`, `contracts/${file}`)
  }
  const testFiles = fs.readdirSync(`test-suites/${configuration}/${contract}/${run}`);
  for (let file of testFiles) {
    fs.copyFileSync(`test-suites/${configuration}/${contract}/${run}/${file}`, `tests/${file}`)
  }

  // Run contract
  const child = exec(command, {cwd: "./"}, (error, stdout, stderr) => {
    const pid = child.pid;

    console.log(`stopping ${pid}`);
    running_processes.delete(pid);

    if (error) {
      console.error(`${pid} error: ${error}`);
    }

    // Create results dir
    fs.mkdirSync(`results/baseline_${configuration}/${contract}/${run}`, { recursive: true });

    fs.writeFileSync(`results/baseline_${configuration}/${contract}/${run}/stdout.txt`, stdout)
    fs.writeFileSync(`results/baseline_${configuration}/${contract}/${run}/stderr.txt`, stderr)

    const tmpFiles = fs.readdirSync("/tmp");
    for (let file of tmpFiles) {
      if (file.startsWith("tmp-")) {
        fs.rmSync(`/tmp/${file}`, { recursive: true, force: true });
        console.log("Deleting tmp directory");
      }

    }

    // Repeat
    setTimeout(runBaseline, 10 * 1000);
  });

  const pid = child.pid;
  console.log(`starting ${pid} with command: ${command}`);
  running_processes.add(pid);
}

if (!fs.existsSync("contracts")) {
  fs.mkdirSync("contracts");
}

if (!fs.existsSync("tests")) {
  fs.mkdirSync("tests");
}

if (!fs.existsSync("results")) {
  fs.mkdirSync("results");
}

const contracts = fs.readdirSync("mutants");
const configurations = fs.readdirSync("test-suites");

// Run baseline
for (let configuration of configurations) {
  for (let contract of contracts) {
    const runs = fs.readdirSync(path.join("test-suites", configuration, contract));

    // for (let run of runs) {
    let data = {};
    data['configuration'] = configuration;
    data['contract'] = contract;
    data['run'] = runs[0];
    data['command'] = "truffle run coverage";
    waiting_processes.push(data);
    //}
  }
}

runBaseline();

function trackProgress() {
  if (waiting_processes.length > 0) {
    console.log(`Waiting on ${running_processes.size} processes to finish:`);
    console.log(running_processes);
    console.log(`${waiting_processes.length} configurations still to go`);
    setTimeout(trackProgress, 10 * 1000);
  }
}

trackProgress();
