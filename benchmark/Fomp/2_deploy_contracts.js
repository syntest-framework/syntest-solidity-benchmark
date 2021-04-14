 const Fomp = artifacts.require("Fomp");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(Fomp, accounts[0]);
 };