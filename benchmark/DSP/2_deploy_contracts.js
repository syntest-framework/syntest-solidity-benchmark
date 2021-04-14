 const DSP = artifacts.require("DSP");

  module.exports = async function (deployer) {
    deployer.deploy(DSP);
 };