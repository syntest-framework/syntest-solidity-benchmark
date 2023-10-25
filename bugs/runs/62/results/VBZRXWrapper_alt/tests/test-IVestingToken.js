const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractxsEt7SK = await IVestingToken.new({from: accounts[2]});
		const _ownerypXZjLa = accounts[1]
		const _ownervOxS67K = accounts[0]
		const _ownerjg4GWqe = "0x0000000000000000000000000000000000000001"
		const _ownerxqNNYDq = accounts[1]
		const _ownerySzHtp = accounts[5]
		const nullyF9NTRs = await contractxsEt7SK.vestedBalanceOf.call(_ownerypXZjLa, {from: accounts[4]});
		const nullYlcojFG = await contractxsEt7SK.claimedBalanceOf.call(_ownervOxS67K, {from: accounts[1]});
		const nullbNRSQWT = await contractxsEt7SK.vestedBalanceOf.call(_ownerjg4GWqe, {from: accounts[4]});
		const nullmFm4Ajh = await contractxsEt7SK.claimedBalanceOf.call(_ownerxqNNYDq, {from: accounts[1]});
		const nullOvjjbso = await contractxsEt7SK.claimedBalanceOf.call(_ownerySzHtp, {from: accounts[1]});
	});
})