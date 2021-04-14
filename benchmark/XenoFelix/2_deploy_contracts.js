 const XenoFelix = artifacts.require("XenoFelix");

  module.exports = async function (deployer) {
      deployer.deploy(XenoFelix, "", "", 1, 1);
 };