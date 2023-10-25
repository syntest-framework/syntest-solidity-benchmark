import os

with open("mutation.csv", "a") as mutation_file:
    baseline_path = "./results/v1"
    mutants_path = "./results/v2"
    configurations = [f for f in os.listdir(mutants_path)]

    mutation_file.write("SUBJECT,CONFIGURATION,BASELINE_RUN,STRATEGY_RUN,KILLED_MUTANTS,TOTAL_MUTANTS,MUTATION_SCORE\n")

    for configuration in configurations:
        configuration_directory = os.path.join(mutants_path, configuration)
        contracts = [f for f in os.listdir(configuration_directory)]

        for contract in contracts:
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

                                if "Error: Returned error: sender account not recognized" in errors_baseline[i]:
                                    continue

                                if "TypeError: Cannot read property 'call' of undefined" in errors_baseline[i]:
                                    continue

                                if "Error: Invalid number of parameters for" in errors_baseline[i]:
                                    continue

                                if errors_baseline[i] != errors_strategy[i]:
                                    killed = True

                        if killed:
                            kills = kills + 1

                    mutation_file.write(contract + "," + configuration + "," + baseline_run + "," + strategy_run + "," + str(kills) + "," + str(len(versions)) + "," + str(kills/len(versions)) + "\n")
