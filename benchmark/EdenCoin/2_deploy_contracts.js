 const EdenCoin = artifacts.require("EdenCoin");

  module.exports = async function (deployer) {
      deployer.deploy(EdenCoin);
 };