import os
import string

tests_path = "./test-suites"
configurations = [f for f in os.listdir(tests_path)]

def read_test(filename: string):
    f = open(filename, 'r')
    contract_lines = f.readlines()
    f.close()
    return contract_lines

for configuration in configurations:
    configuration_directory = os.path.join(tests_path, configuration)
    contracts = [f for f in os.listdir(configuration_directory)]

    for contract in contracts:
        contract_directory = os.path.join(configuration_directory, contract)
        runs = [f for f in os.listdir(contract_directory)]

        for run in runs:
            runs_directory = os.path.join(contract_directory, run)
            files = [f for f in os.listdir(runs_directory)]

            for file in files:
                solidity_test = read_test(os.path.join(tests_path, configuration, contract, run, file))

                print(os.path.join(tests_path, configuration, contract, run, file))

                start_points = []
                for index in range(0, len(solidity_test)):
                    if "it('test for" in solidity_test[index]:
                        start_points.append(index)

                for index in range(0, len(start_points)):
                    start_index = start_points[index]

                    if index == len(start_points)-1:
                        end_index = len(solidity_test)
                    else:
                        end_index = start_points[index+1]

                    error_line = ""
                    for line_index in range(start_index, end_index):
                         # find the line with error (if any)
                        if ".to.be.rejectedWith"  in solidity_test[line_index]:
                            error_line = solidity_test[line_index]

                    # extract the internal call the triggers the error
                    if error_line != "":
                        method_call = error_line.lstrip()\
                            .rstrip()\
                            .replace("await expect(", "")\
                            .replace(").to.be.rejectedWith(Error);", "")

                        found = False
                        for line_index in range(start_index, end_index):
                            if method_call in solidity_test[line_index] and not found:
                                found = True
                                solidity_test[line_index] = "//" + solidity_test[line_index]
                                continue

                            if method_call in solidity_test[line_index] and found:
                                continue

                            if found and "await" in solidity_test[line_index]:
                                solidity_test[line_index] = "//" + solidity_test[line_index]

                with open(os.path.join(tests_path, configuration, contract, run, file), 'w') as temp_file:
                    temp_file.writelines(solidity_test)

