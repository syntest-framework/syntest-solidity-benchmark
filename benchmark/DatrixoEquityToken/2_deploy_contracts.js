 const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");

  module.exports = async function (deployer) {
      const accounts = await web3.eth.getAccounts();
      deployer.deploy(DatrixoEquityToken, accounts[0], accounts[1]);
 };