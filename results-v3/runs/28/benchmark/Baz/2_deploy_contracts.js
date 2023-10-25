 const Baz = artifacts.require("Baz");

  module.exports = async function (deployer) {
      deployer.deploy(Baz);
 };