const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractkrgnZBa = await IVestingToken.new({from: accounts[2]});
		const _ownerOHXbGLV = accounts[4]
		const _ownerCjTS9Cb = accounts[4]
		const nullXpf9F4v = await contractkrgnZBa.vestedBalanceOf.call(_ownerOHXbGLV, {from: accounts[1]});
		await contractkrgnZBa.claim.call({from: accounts[1]});
		const nullAjwudy7 = await contractkrgnZBa.claimedBalanceOf.call(_ownerCjTS9Cb, {from: accounts[2]});
	});
})