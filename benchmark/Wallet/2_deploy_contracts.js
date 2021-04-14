 const Wallet = artifacts.require("Wallet");

  module.exports = async function (deployer) {
     deployer.deploy(Wallet);
 };