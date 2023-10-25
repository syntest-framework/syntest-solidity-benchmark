 const SALESCONTRACT = artifacts.require("SALESCONTRACT");

  module.exports = async function (deployer) {
      deployer.deploy(SALESCONTRACT);
 };