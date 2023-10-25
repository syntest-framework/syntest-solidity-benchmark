import subprocess
import os

runs_path = os.path.join(os.getcwd(), "runs")
run_directories = [f for f in os.listdir(runs_path)]

for run_directory in run_directories:
    print("Running " + run_directory)
    subprocess.check_output(['docker', 'run', '-d', '-v', os.path.join(runs_path, run_directory, "v1") + ':/app/v1', '-v', os.path.join(runs_path, run_directory, "v2") + ':/app/v2', '-v', os.path.join(runs_path, run_directory, "test-suites") + ':/app/test-suites', '-v', os.path.join(runs_path, run_directory, "results") + ':/app/results', 'syntest-framework/fault-detection:baseline'])
    #subprocess.check_output(['docker', 'run', '-d', '-v', os.path.join(runs_path, run_directory, "baseline") + ':/app/baseline', '-v', os.path.join(runs_path, run_directory, "mutants") + ':/app/mutants', '-v', os.path.join(runs_path, run_directory, "test-suites") + ':/app/test-suites', '-v', os.path.join(runs_path, run_directory, "results") + ':/app/results', 'syntest-framework/fault-detection:mutants'])
