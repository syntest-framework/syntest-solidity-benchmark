 const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(NasiLiquidityPoolFactory, accounts[0], accounts[1], 1, 1 );
 };