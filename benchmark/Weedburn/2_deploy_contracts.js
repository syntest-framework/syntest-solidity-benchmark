 const Weedburn = artifacts.require("Weedburn");

  module.exports = async function (deployer) {
      deployer.deploy(Weedburn);
 };