const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(BACMARSLPTOKENPool, accounts[0], accounts[1], accounts[2]);
 };