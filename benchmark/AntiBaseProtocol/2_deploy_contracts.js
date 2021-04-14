const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");

  module.exports = async function (deployer) {
      deployer.deploy(AntiBaseProtocol);
 };