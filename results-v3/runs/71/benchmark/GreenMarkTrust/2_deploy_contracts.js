 const GreenMarkTrust = artifacts.require("GreenMarkTrust");

  module.exports = async function (deployer) {
      deployer.deploy(GreenMarkTrust, 1, "", "");
 };