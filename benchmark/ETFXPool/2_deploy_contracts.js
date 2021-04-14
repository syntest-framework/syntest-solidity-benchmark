 const ETFXPool = artifacts.require("ETFXPool");

  module.exports = async function (deployer) {
      deployer.deploy(ETFXPool);
      deployer.deploy(GFC, 1, "","");
 };