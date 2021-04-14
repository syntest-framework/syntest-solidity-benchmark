 const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");

  module.exports = async function (deployer) {
      deployer.deploy(Straight_Fire_Finance);
 };