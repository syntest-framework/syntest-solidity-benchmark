import os

baseline_path = "./results/baseline"
mutants_path = "./results/mutants"
configurations = [f for f in os.listdir(mutants_path)]

for configuration in configurations:
    print(configuration)
    configuration_directory = os.path.join(mutants_path, configuration)
    contract = "INS"
    contract_directory = os.path.join(configuration_directory, contract)
    strategy_runs = [f for f in os.listdir(contract_directory)]

    for strategy_run in strategy_runs:
        baseline_contract_directory = os.path.join(baseline_path, configuration, contract)
        baseline_runs = [f for f in os.listdir(baseline_contract_directory)]

        for baseline_run in baseline_runs:
            run_directory = os.path.join(contract_directory, strategy_run)
            versions = [f for f in os.listdir(run_directory)]

            kills = 0

            for version in versions:
                print(version)
                errors_baseline = []
                errors_strategy = []

                killed = False

                with open(os.path.join(baseline_path, configuration, contract, baseline_run, "stdout.txt")) as baseline_file:
                    for line in baseline_file:
                        if "Error:" in line and not "Error: ❌" in line:
                            errors_baseline.append(line.rstrip().lstrip())

                with open(os.path.join(mutants_path, configuration, contract, strategy_run, version, "stdout.txt")) as mutant_file:
                    for line in mutant_file:
                        if "Error:" in line and not "Error: ❌" in line:
                            errors_strategy.append(line.rstrip().lstrip())

                if len(errors_baseline) != len(errors_strategy):
                    killed = True
                else:
                    for i in range(0, len(errors_baseline)):
                        if "AssertionError" in errors_baseline[i]:
                            continue
                        if errors_baseline[i] != errors_strategy[i]:
                            killed = True

                if killed:
                    print(killed)
                    kills = kills + 1

            print(kills)
