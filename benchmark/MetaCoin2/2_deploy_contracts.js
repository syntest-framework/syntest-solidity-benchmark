const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin2 = artifacts.require("MetaCoin2");

module.exports = async function (deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin2);
  deployer.deploy(MetaCoin2);
};