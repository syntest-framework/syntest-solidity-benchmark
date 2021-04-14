 const SSTRewards = artifacts.require("SSTRewards");

  module.exports = async function (deployer) {
      deployer.deploy(SSTRewards);
 };