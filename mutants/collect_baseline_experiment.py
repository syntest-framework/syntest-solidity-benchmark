import os, shutil

runs_path = "./runs"
contracts = [f for f in os.listdir(runs_path)]

for contract in contracts:
    results_directory = os.path.join(runs_path, contract, "results")
    configurations = [f for f in os.listdir(results_directory)]

    for configuration in configurations:
        contract_directory = os.path.join(results_directory, configuration, contract)
        runs = [f for f in os.listdir(contract_directory)]

        for run in runs:
            storage_path = os.path.join("results", "baseline", configuration, contract, run)
            os.makedirs(storage_path, exist_ok=True)
            shutil.copy(os.path.join(contract_directory, run, "stderr.txt"), storage_path)
            shutil.copy(os.path.join(contract_directory, run, "stdout.txt"), storage_path)
