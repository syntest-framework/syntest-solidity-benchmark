const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const MetaCoin2 = artifacts.require("MetaCoin2");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.link(ConvertLib, MetaCoin2);
  deployer.deploy(MetaCoin2);
};
