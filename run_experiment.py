import subprocess
import os

runs_path = "./experiment/runs"
runs_directories = [f for f in os.listdir(runs_path)]

for i in range(0, len(runs_directories)):
    subprocess.check_output(['docker', 'run', '-d', '-v', "./experiment/runs/" + runs_directories[i] + ':/app/syntest-solidity-benchmark'], '-v', './node_modules:/app/syntest-solidity-benchmark/node_modules', 'syntest:experiment')
