  const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");

  module.exports = async function (deployer) {
      deployer.deploy(SLTDETHlpReward);
 };