 const DmmControllerV2 = artifacts.require("DmmControllerV2");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(DmmControllerV2, accounts[0], accounts[1], accounts[2], accounts[3], accounts[4], accounts[5], accounts[6], accounts[7], accounts[8], 1, 1, accounts[9]);

 };