 const GardenContractV2 = artifacts.require("GardenContractV2");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(GardenContractV2, accounts[0], accounts[1], accounts[2]);
 };