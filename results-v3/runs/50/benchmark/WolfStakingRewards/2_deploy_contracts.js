 const WolfStakingRewards = artifacts.require("WolfStakingRewards");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(WolfStakingRewards, accounts[0], accounts[1], accounts[2]);
 };