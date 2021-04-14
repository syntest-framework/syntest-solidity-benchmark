 const TimeMiner = artifacts.require("TimeMiner");

  module.exports = async function (deployer) {
      deployer.deploy(TimeMiner);
 };