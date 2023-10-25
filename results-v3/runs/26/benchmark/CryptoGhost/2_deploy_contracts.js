 const CryptoGhost = artifacts.require("CryptoGhost");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(CryptoGhost, accounts[0]);
 };