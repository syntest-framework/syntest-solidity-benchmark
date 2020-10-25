# syntest-solidity-benchmark
Provides a benchmarking environment for testing SynTest-Solidity

# How to use
Since there is no npm package yet:

* Create a folder
* Clone the syntest-framework and syntest-solidity and syntest-solidity-benchmark in the folder
    * `git clone git@github.com:syntest-framework/syntest-framework.git`
    * `git clone git@github.com:syntest-framework/syntest-solidity.git`
    * `git clone git@github.com:syntest-framework/syntest-solidity-benchmark.git`

* Install dependencies for syntest-framework
    * `cd syntest-framework`
    * `npm install`
    * `npm run tsc:w`
* Install dependencies for syntest-solidity
    * `cd ../syntest-solidity`
    * `npm install`
    * `npm run tsc:w`
* Install dependencies for syntest-solidity-benchmark
    * `cd ../syntest-solidity-benchmark`
    * `npm install`
    
* [OPTIONAL] configure `.syntest.js` to your liking

* Now you can run the project
    * `truffle run syntest-solidity`


# Contributors

- Dimitri Stallenberg
- Mitchell Olsthoorn
- Annibale Panichella
