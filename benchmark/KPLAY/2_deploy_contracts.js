 const KPLAY = artifacts.require("KPLAY");

  module.exports = async function (deployer) {
      deployer.deploy(KPLAY);
 };