const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractANeqMOQ = await IVestingToken.new({from: accounts[3]});
		const _ownereEmWe22 = accounts[5]
		const _ownerNN9C8S = accounts[4]
		const nullQKbkCY = await contractANeqMOQ.vestedBalanceOf.call(_ownereEmWe22, {from: accounts[4]});
		const nullPWV3ocN = await contractANeqMOQ.vestedBalanceOf.call(_ownerNN9C8S, {from: accounts[5]});
		await contractANeqMOQ.claim.call({from: accounts[2]});
		await contractANeqMOQ.claim.call({from: accounts[4]});
		await contractANeqMOQ.claim.call({from: accounts[0]});
	});
})