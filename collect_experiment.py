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

with open("coverage.csv", "a") as g:
    for i in runs_directories:
        contract_path = runs_path + "/" + i + "/results"
        contract_directories = [f for f in os.listdir(contract_path)]

        for j in contract_directories:
            statistics_path = contract_path + "/" + j + "/statistics.csv"
            coverage_path = contract_path + "/" + j + "/coverage.csv"

            if (os.path.isfile(statistics_path) and os.path.isfile(coverage_path)):
                with open(statistics_path) as f, open(coverage_path) as h:
                    lines = [line.rstrip() for line in f]
                    parts = lines[len(lines) - 1].split(",")
                    conf = parts[1]
                    alg = parts[3]
                    probe = parts[4]

                    header = True
                    for line in h:
                        if not header:
                            g.write(line.rstrip() + "," + conf + "," + alg + "," + probe + "," + str(i) + "\n")
                        header = False
