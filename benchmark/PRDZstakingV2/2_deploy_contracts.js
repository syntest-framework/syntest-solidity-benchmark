 const PRDZstakingV2 = artifacts.require("PRDZstakingV2");

  module.exports = async function (deployer) {
      deployer.deploy(PRDZstakingV2);
 };