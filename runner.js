const { exec } = require('child_process');
const fs = require('fs');
const data = require("./configurations.json");

let waiting_processes = [];
let running_processes = new Set();

function runContract() {
  if (waiting_processes.length === 0)
    return

  const data = waiting_processes.shift();
  const configuration = data.configuration;
  const contract = data.contract;
  const command = data.command;

  // Delete old files
  console.log("Deleting old files")
  const runFiles = fs.readdirSync("contracts");
  for (let file of runFiles) {
    fs.unlinkSync(`contracts/${file}`);
  }
  if (fs.existsSync("migrations/2_deploy_contracts.js")) {
    fs.unlinkSync("migrations/2_deploy_contracts.js");
  }
  fs.rmSync("syntest", { recursive: true, force: true });
  fs.rmSync(".syntest", { recursive: true, force: true });

  // Copy in new files
  console.log("Copying in new files");
  fs.copyFileSync("Migrations.sol", "contracts/Migrations.sol");

  const files = fs.readdirSync(`benchmark/${contract}`);
  for (let file of files) {
    const extParts = file.split(".");

    switch (extParts[extParts.length - 1]) {
      case "sol":
        fs.copyFileSync(`benchmark/${contract}/${file}`, `contracts/${file}`)
        break;
      case "js":
        if (file === "2_deploy_contracts.js")
          fs.copyFileSync(`benchmark/${contract}/${file}`, `migrations/${file}`)
        break;
    }
  }

  // Run contract
  const child = exec(command, {cwd: "./"}, (error, stdout, stderr) => {
    const pid = child.pid;

    console.log(`stopping ${pid}`);
    running_processes.delete(pid);

    if (error) {
      console.error(`${pid} error: ${error}`);
    }
    //console.log(`${pid} stdout: ${stdout}`);
    //console.error(`${pid} stderr: ${stderr}`);

    // Create results dir
    fs.mkdirSync(`results/${contract}`);
    fs.mkdirSync(`results/${contract}/tests`);

    fs.writeFileSync(`results/${contract}/stdout.txt`, stdout)
    fs.writeFileSync(`results/${contract}/stderr.txt`, stderr)

    // Copy results
    if (fs.existsSync("syntest")) {
      if (fs.existsSync("syntest/statistics/statistics.csv")) {
        fs.copyFileSync("syntest/statistics/statistics.csv", `results/${contract}/statistics.csv`);
      }

      if (fs.existsSync("syntest/tests")) {
        const testFiles = fs.readdirSync("syntest/tests");
        for (let file of testFiles) {
          fs.copyFileSync(`syntest/tests/${file}`, `results/${contract}/tests/${file}`);
        }
      }
    }

    // Repeat
    setTimeout(runContract, 10 * 1000);
  });

  const pid = child.pid;
  console.log(`starting ${pid} with command: ${command}`);
  running_processes.add(pid);
}

if (!fs.existsSync("contracts")) {
  fs.mkdirSync("contracts");
}

fs.mkdirSync("results");

const contracts = fs.readdirSync("benchmark");

for (let configuration of data.configurations) {
  for (let contract of contracts) {
    let data = {};
    data['configuration'] = configuration;
    data['contract'] = contract;

    const seed = Math.floor(Math.random() * 1000);
    const arguments = ` --algorithm ${configuration.algorithm} --seed ${seed} --probe_objective ${configuration.probe_objective} --search_time ${configuration.search_time} --total_time ${configuration.total_time}`;

    data['command'] = "truffle run syntest-solidity".concat(arguments);
    waiting_processes.push(data);
  }
}

runContract();

function trackProgress() {
  if (waiting_processes.length > 0) {
    console.log(`Waiting on ${running_processes.size} processes to finish:`);
    console.log(running_processes);
    console.log(`${waiting_processes.length} configurations still to go`);
    setTimeout(trackProgress, 10 * 1000);
  }
}

trackProgress();
