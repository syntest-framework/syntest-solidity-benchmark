 const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");

  module.exports = async function (deployer) {
      const accounts = await web3.eth.getAccounts();
     deployer.deploy(FrogDAOGovernanceRewards, accounts[0]);
 };