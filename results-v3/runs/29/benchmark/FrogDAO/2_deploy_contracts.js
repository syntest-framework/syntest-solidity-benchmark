 const FrogDAO = artifacts.require("FrogDAO");

  module.exports = async function (deployer) {
      deployer.deploy(FrogDAO);
 };