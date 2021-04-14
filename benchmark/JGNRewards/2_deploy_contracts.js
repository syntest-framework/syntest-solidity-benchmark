 const JGNRewards = artifacts.require("JGNRewards");

  module.exports = async function (deployer) {
     deployer.deploy(JGNRewards);
 };