 const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");

  module.exports = async function (deployer) {
      deployer.deploy(CourtFarming_HTStake);
 };