 const Final = artifacts.require("Final");

  module.exports = async function (deployer) {
     deployer.deploy(Final, "", "", 1);
 };