 const BirdOracle = artifacts.require("BirdOracle");

  module.exports = async function (deployer) {
      deployer.deploy(BirdOracle);
 };