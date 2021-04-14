const ANRXToken = artifacts.require("ANRXToken");

  module.exports = async function (deployer) {
        deployer.deploy(ANRXToken, 1, "", "", 1);
 };