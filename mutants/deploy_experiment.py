import os, shutil

def copytree(src, dst, symlinks=False, ignore=None):
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, symlinks, ignore)
        else:
            shutil.copy2(s, d)

benchmark_path = "./mutants"
benchmark_contracts = [f for f in os.listdir(benchmark_path)]

for contract in benchmark_contracts:
    run_directory = "./runs/" + contract
    os.makedirs(run_directory)
    shutil.copyfile("runner.js", run_directory + "/runner.js")
    shutil.copyfile("truffle-config.js", run_directory + "/truffle-config.js")
    shutil.copyfile("package.json", run_directory + "/package.json")
    os.makedirs(run_directory + "/contracts")
    os.makedirs(run_directory + "/tests")
    os.makedirs(run_directory + "/results")

    os.makedirs(run_directory + "/baseline")
    os.makedirs(run_directory + "/mutants")
    os.makedirs(run_directory + "/test-suites")
    os.makedirs(run_directory + "/baseline/" + contract)
    os.makedirs(run_directory + "/mutants/" + contract)
    copytree("baseline/" + contract, run_directory + "/baseline/" + contract)
    copytree("mutants/" + contract, run_directory + "/mutants/" + contract)

    configurations = [f for f in os.listdir("test-suites/")]
    for configuration in configurations:
        copytree("test-suites/" + configuration + "/" + contract, run_directory + "/test-suites/" + configuration + "/" + contract)
