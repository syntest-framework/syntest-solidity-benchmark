 const TetherToken = artifacts.require("TetherToken");

  module.exports = async function (deployer) {
     deployer.deploy(TetherToken, 1, "", "", 1);
 };