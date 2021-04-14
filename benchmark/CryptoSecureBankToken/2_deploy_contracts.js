 const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");

  module.exports = async function (deployer) {
      deployer.deploy(CryptoSecureBankToken);
 };