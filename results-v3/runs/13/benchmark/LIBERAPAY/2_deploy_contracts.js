 const LIBERAPAY = artifacts.require("LIBERAPAY");

  module.exports = async function (deployer) {
      deployer.deploy(LIBERAPAY);
 };