const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");

  module.exports = async function (deployer) {
      deployer.deploy(REXUNIFINANCE);
 };