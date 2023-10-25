 const MisesLegacyPool = artifacts.require("MisesLegacyPool");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(MisesLegacyPool, accounts[0], accounts[1], 1, 2);
 };