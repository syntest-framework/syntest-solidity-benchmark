 const SpiritCoin = artifacts.require("UMAFarmingMar");

  module.exports = async function (deployer) {
      const accounts = await web3.eth.getAccounts();
      deployer.deploy(SpiritCoin,  accounts[0],  accounts[1]);
 };