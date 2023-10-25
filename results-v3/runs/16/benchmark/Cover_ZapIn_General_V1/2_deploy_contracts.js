 const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");

  module.exports = async function (deployer) {
      deployer.deploy(Cover_ZapIn_General_V1, 1);
 };