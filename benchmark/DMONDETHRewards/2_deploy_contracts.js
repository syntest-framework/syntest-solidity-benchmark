 const DMONDETHRewards = artifacts.require("DMONDETHRewards");

  module.exports = async function (deployer) {
     deployer.deploy(DMONDETHRewards);
 };