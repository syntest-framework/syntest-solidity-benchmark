 const Vat = artifacts.require("Vat");

  module.exports = async function (deployer) {
       deployer.deploy(Vat);
 };