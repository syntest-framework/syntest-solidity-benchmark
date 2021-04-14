 const INS = artifacts.require("INS");

  module.exports = async function (deployer) {
      deployer.deploy(INS, 1, "", "");
 };