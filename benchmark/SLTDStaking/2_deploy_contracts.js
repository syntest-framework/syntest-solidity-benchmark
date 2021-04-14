 const SLTDStaking = artifacts.require("SLTDStaking");

  module.exports = async function (deployer) {
      deployer.deploy(SLTDStaking);
 };