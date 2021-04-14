 const Cryptoz = artifacts.require("Cryptoz");

  module.exports = async function (deployer) {
      deployer.deploy(Cryptoz);
 };