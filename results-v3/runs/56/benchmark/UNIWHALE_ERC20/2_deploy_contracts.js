 const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");

  module.exports = async function (deployer) {
      deployer.deploy(UNIWHALE_ERC20);
 };