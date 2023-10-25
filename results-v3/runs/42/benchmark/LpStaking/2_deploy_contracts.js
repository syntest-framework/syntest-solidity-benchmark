 const LpStaking = artifacts.require("LpStaking");

  module.exports = async function (deployer) {
      deployer.deploy(LpStaking);
 };