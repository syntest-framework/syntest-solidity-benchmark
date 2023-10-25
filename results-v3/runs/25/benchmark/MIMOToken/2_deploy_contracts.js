 const MIMOToken = artifacts.require("MIMOToken");

  module.exports = async function (deployer) {
     deployer.deploy(MIMOToken);
 };