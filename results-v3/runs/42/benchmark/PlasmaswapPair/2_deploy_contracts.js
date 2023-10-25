 const PlasmaswapPair = artifacts.require("PlasmaswapPair");

  module.exports = async function (deployer) {
     deployer.deploy(PlasmaswapPair);
 };