 const OnXFinance = artifacts.require("OnXFinance");

  module.exports = async function (deployer) {
      deployer.deploy(OnXFinance, "", "", 1);
 };