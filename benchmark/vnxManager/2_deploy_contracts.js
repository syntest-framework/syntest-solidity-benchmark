 const vnxManager = artifacts.require("vnxManager");

  module.exports = async function (deployer) {
      deployer.deploy(vnxManager);
 };