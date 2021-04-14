 const StakingDextoken = artifacts.require("StakingDextoken");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(StakingDextoken, accounts[0], accounts[1]);
 };