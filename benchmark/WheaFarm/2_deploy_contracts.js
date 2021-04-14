 const WheatFarm = artifacts.require("WheatFarm");

  module.exports = async function (deployer) {
      deployer.deploy(WheatFarm, "", "", 1);
 };