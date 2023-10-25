const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractBpNDSHB = await IVestingToken.new({from: accounts[0]});
		const _ownereXrNJ54 = accounts[0]
		const _ownerjLrxg2 = accounts[3]
		const _ownerNJjTwDq = accounts[4]
		const _ownerxGvvpQa = "0x0000000000000000000000000000000000000001"
		const _ownerMSm0n4C = accounts[5]
		const nullUeYmnGd = await contractBpNDSHB.claimedBalanceOf.call(_ownereXrNJ54, {from: accounts[0]});
		const nullZZkzQCi = await contractBpNDSHB.vestedBalanceOf.call(_ownerjLrxg2, {from: accounts[1]});
		const nullTAGCehk = await contractBpNDSHB.claimedBalanceOf.call(_ownerNJjTwDq, {from: accounts[4]});
		const nullP63R6Bw = await contractBpNDSHB.vestedBalanceOf.call(_ownerxGvvpQa, {from: accounts[0]});
		const nullgUJW7Du = await contractBpNDSHB.vestedBalanceOf.call(_ownerMSm0n4C, {from: accounts[4]});
	});
})