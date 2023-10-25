 const TokenDispatch = artifacts.require("TokenDispatch");

  module.exports = async function (deployer) {
    deployer.deploy(TokenDispatch);
 };