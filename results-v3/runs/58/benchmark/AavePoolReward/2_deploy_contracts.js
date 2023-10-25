  const AavePoolReward = artifacts.require("AavePoolReward");

  module.exports = async function (deployer) {
    deployer.deploy(AavePoolReward);
 };