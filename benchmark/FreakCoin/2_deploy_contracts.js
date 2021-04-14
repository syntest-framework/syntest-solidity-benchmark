 const FreakCoin = artifacts.require("FreakCoin");

  module.exports = async function (deployer) {
      deployer.deploy(FreakCoin);
 };