 const Revive = artifacts.require("Revive");

  module.exports = async function (deployer) {
      deployer.deploy(Revive);
 };