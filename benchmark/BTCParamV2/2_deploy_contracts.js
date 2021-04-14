 const BTCParamV2 = artifacts.require("BTCParamV2");

  module.exports = async function (deployer) {
    deployer.deploy(BTCParamV2);
 };