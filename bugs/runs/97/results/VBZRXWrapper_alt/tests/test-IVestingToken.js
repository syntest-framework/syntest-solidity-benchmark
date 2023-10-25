const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractSegPaMA = await IVestingToken.new({from: accounts[4]});
		const _ownerK4xQ5OV = accounts[1]
		const _ownerJRMomy = accounts[4]
		await contractSegPaMA.claim.call({from: accounts[3]});
		const nullSvQxAGB = await contractSegPaMA.vestedBalanceOf.call(_ownerK4xQ5OV, {from: "0x0000000000000000000000000000000000000001"});
		const nullbNAr0nb = await contractSegPaMA.vestedBalanceOf.call(_ownerJRMomy, {from: accounts[2]});
	});
})