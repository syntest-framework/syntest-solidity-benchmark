import subprocess
import os

subprocess.check_output(['docker', 'run', '-d', '-v', os.getcwd() + ':/app', 'syntest-framework/fault-detection:baseline'])
#subprocess.check_output(['docker', 'run', '-d', '-v', os.getcwd() + ':/app', 'syntest-framework/fault-detection:mutants'])
