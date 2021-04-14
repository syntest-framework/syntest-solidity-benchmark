 const HTDD_contract = artifacts.require("HTDD_contract");

  module.exports = async function (deployer) {
    deployer.deploy(HTDD_contract);
 };