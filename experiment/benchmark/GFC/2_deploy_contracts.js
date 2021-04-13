  const GFC = artifacts.require("GFC");

  module.exports = async function (deployer) {
      deployer.deploy(GFC, 1, "","");
 };