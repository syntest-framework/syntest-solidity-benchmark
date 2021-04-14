 const Voting = artifacts.require("Voting");

  module.exports = async function (deployer) {
     const accounts = await web3.eth.getAccounts();
     deployer.deploy(Voting, accounts[0]);
 };