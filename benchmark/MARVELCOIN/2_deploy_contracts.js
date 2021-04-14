  const MARVELCOIN = artifacts.require("MARVELCOIN");

  module.exports = async function (deployer) {
      deployer.deploy(MARVELCOIN, 1, "", "");
 };