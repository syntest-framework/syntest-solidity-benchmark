 const Layerx = artifacts.require("Layerx");

  module.exports = async function (deployer) {
      deployer.deploy(Layerx, accounts[0]);
 };