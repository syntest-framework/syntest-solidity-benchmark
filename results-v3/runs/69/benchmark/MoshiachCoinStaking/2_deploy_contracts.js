 const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");

  module.exports = async function (deployer) {
       const accounts = await web3.eth.getAccounts();
       deployer.deploy(MoshiachCoinStaking);
 };