  const MarsStakingRewards = artifacts.require("MarsStakingRewards");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
      deployer.deploy(MarsStakingRewards, accounts[0], accounts[1], accounts[2]);
 };