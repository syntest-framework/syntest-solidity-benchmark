const afiController = artifacts.require("afiController");

  module.exports = async function (deployer) {
      const accounts = await web3.eth.getAccounts();
      deployer.deploy(afiController, accounts[0]);
 };