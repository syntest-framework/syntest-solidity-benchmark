 const Layerx = artifacts.require("Layerx");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(Layerx, accounts[0]);
 };