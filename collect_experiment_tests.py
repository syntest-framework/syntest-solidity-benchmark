import os, shutil

runs_path = "./results-v3/runs"
runs_directories = [f for f in os.listdir(runs_path)]

for runs_directory in runs_directories:
    results_directory = runs_path + "/" + runs_directory + "/results"
    contract_directories = [f for f in os.listdir(results_directory)]

    for contract_directory in contract_directories:
        statistics_path = results_directory + "/" + contract_directory + "/statistics.csv"
        test_suite_path = results_directory + "/" + contract_directory + "/tests"

        if (os.path.isfile(statistics_path) and os.path.isdir(test_suite_path)):
            with open(statistics_path) as statistics_file:
                lines = [line.rstrip() for line in statistics_file]
                parts = lines[len(lines) - 1].split(",")
                conf = parts[1]
                alg = parts[3]
                probe = parts[4]

                storage_path = "test-suites/" + alg + "_" + probe + "/" + contract_directory + "/" + runs_directory
                os.makedirs(storage_path, exist_ok=True)
                test_files = [f for f in os.listdir(test_suite_path)]
                for test_file in test_files:
                    shutil.copy(os.path.join(test_suite_path, test_file), storage_path)
