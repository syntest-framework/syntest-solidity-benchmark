 const GUMARewards = artifacts.require("GUMARewards");

  module.exports = async function (deployer) {
       deployer.deploy(GUMARewards);
 };