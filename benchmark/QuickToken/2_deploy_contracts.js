 const QuickToken = artifacts.require("QuickToken");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(QuickToken, accounts[0], accounts[1]);
 };