 const EqFinanceStaking = artifacts.require("EqFinanceStaking");

  module.exports = async function (deployer) {
     deployer.deploy(EqFinanceStaking);
 };