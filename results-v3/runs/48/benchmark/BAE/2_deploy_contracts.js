const BAE = artifacts.require("BAE");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(BAE, accounts[0]);
 };