 const Dipex = artifacts.require("Dipex");

  module.exports = async function (deployer) {
      deployer.deploy(Dipex, "", "", 1);
 };