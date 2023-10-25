 const Controller = artifacts.require("Controller");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(Controller, accounts[0]);
 };