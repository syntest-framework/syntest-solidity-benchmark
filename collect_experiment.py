import os

runs_path = "./experiment/runs"
runs_directories = [f for f in os.listdir(runs_path)]

with open("statistics.csv", "a") as g:
    for i in runs_directories:
        contract_path = runs_path + "/" + i + "/results"
        contract_directories = [f for f in os.listdir(contract_path)]

        for j in contract_directories:
            statistics_path = contract_path + "/" + j + "/statistics.csv"

            if (os.path.isfile(statistics_path)):
                with open(statistics_path) as f:
                    lines = [line.rstrip() for line in f]
                    g.write(lines[len(lines) - 1] + "," + str(i) + "\n")
