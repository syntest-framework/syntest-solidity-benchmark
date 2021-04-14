  const PACT = artifacts.require("PACT");

  module.exports = async function (deployer) {
      deployer.deploy(PACT);
 };