 const Rexona = artifacts.require("Rexona");

  module.exports = async function (deployer) {
      deployer.deploy(Rexona, "", "", 1);
 };