 const POWToken = artifacts.require("POWToken");

  module.exports = async function (deployer) {
      deployer.deploy(POWToken);
 };