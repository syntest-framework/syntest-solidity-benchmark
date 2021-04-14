const Liquidity_v8 = artifacts.require("Liquidity_v8");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(Liquidity_v8, "", accounts[0],  accounts[1], 1, 1);
 };