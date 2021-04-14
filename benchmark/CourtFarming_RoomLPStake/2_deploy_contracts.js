 const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");

  module.exports = async function (deployer) {
     deployer.deploy(CourtFarming_RoomLPStake);
 };