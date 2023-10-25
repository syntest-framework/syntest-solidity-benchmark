 const GAZ_ERC20 = artifacts.require("GAZ_ERC20");

  module.exports = async function (deployer) {
      deployer.deploy(GAZ_ERC20);
 };