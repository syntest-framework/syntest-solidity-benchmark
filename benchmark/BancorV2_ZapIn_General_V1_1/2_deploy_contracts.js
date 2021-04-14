 const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");

  module.exports = async function (deployer) {
      deployer.deploy(BancorV2_ZapIn_General_V1_1, 1);
 };