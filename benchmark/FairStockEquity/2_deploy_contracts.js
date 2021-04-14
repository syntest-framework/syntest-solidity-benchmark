 const FairStockEquity = artifacts.require("FairStockEquity");

  module.exports = async function (deployer) {
      const accounts = await web3.eth.getAccounts();
      deployer.deploy(FairStockEquity, accounts[0], accounts[1], accounts[2], accounts[3], 1);
 };