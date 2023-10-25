const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractDSKZfuB = await IVestingToken.new({from: accounts[0]});
		const _ownerj2xMfna = accounts[2]
		const _ownerGGMhJR6 = "0x0000000000000000000000000000000000000001"
		const nullrpjSOh = await contractDSKZfuB.claimedBalanceOf.call(_ownerj2xMfna, {from: accounts[1]});
		const nullJHVAJpw = await contractDSKZfuB.claimedBalanceOf.call(_ownerGGMhJR6, {from: "0x0000000000000000000000000000000000000001"});
		await contractDSKZfuB.claim.call({from: accounts[4]});
	});
})