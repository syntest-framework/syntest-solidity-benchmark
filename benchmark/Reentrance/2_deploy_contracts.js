 const Reentrance = artifacts.require("Reentrance");

  module.exports = async function (deployer) {
     deployer.deploy(Reentrance);
 };