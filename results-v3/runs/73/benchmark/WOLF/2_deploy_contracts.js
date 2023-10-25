 const WOLF = artifacts.require("WOLF");

  module.exports = async function (deployer) {
      deployer.deploy(WOLF, "", "", 1);
 };