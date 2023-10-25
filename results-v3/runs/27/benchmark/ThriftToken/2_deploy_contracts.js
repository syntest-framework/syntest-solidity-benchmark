 const ThriftToken = artifacts.require("ThriftToken");

  module.exports = async function (deployer) {
      deployer.deploy(ThriftToken);
 };