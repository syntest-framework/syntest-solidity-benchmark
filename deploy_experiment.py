import os, shutil

def copytree(src, dst, symlinks=False, ignore=None):
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, symlinks, ignore)
        else:
            shutil.copy2(s, d)


configuration_path = "./experiment/configurations"
configuration_files = [f for f in os.listdir(configuration_path) if os.path.isfile(os.path.join(configuration_path, f))]

repetitions = 10
parallel = 2

num_of_configurations = repetitions * parallel * len(configuration_files)

print(num_of_configurations)

benchmark_path = "./benchmark"
benchmark_contracts = [f for f in os.listdir(benchmark_path)]

counter = 1
for i in range(1, repetitions + 1):
    for j in range(1, parallel + 1):
        for k in range(1, len(configuration_files) + 1):
            print ("configuration: " + str(k) + " parallel: " + str(j) + " repetition: " + str(i))

            run_directory = "./experiment/runs/" + str(counter)
            os.makedirs(run_directory)
            shutil.copyfile("runner.js", run_directory + "/runner.js")
            shutil.copyfile("truffle-config.js", run_directory + "/truffle-config.js")
            shutil.copyfile("package.json", run_directory + "/package.json")
            #shutil.copyfile("Migrations.sol", run_directory + "/Migrations.sol")
            shutil.copyfile(".syntest.js", run_directory + "/.syntest.js")
            #os.makedirs(run_directory + "/migrations")
            #shutil.copyfile("migrations/1_initial_migration.js", run_directory + "/migrations/1_initial_migration.js")
            os.makedirs(run_directory + "/contracts")
            os.makedirs(run_directory + "/benchmark")

            shutil.copyfile("./experiment/configurations/" + configuration_files[k - 1], run_directory + "/configurations.json")

            for l in range(0, len(benchmark_contracts)):
                if (l % parallel == (j - 1)):
                    os.makedirs(run_directory + "/benchmark/" + benchmark_contracts[l])
                    copytree("benchmark/" + benchmark_contracts[l], run_directory + "/benchmark/" + benchmark_contracts[l])


            counter += 1
