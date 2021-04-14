 const BlueICE = artifacts.require("BlueICE");

  module.exports = async function (deployer) {
      deployer.deploy(BlueICE);
 };