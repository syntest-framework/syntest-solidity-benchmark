 const Core_Fi_V3 = artifacts.require("Core_Fi_V3");

  module.exports = async function (deployer) {
    deployer.deploy(Core_Fi_V3);
 };