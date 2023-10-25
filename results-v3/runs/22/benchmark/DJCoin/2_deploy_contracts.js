 const DJCoin = artifacts.require("DJCoin");

  module.exports = async function (deployer) {
      deployer.deploy(DJCoin);
 };