const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contracttVQIgmy = await IVestingToken.new({from: accounts[5]});
		const _ownerIR8w3C4 = accounts[1]
		const _ownerj6S2zHs = "0x0000000000000000000000000000000000000001"
		await contracttVQIgmy.claim.call({from: accounts[1]});
		await contracttVQIgmy.claim.call({from: accounts[5]});
		const nullfoUdSZ = await contracttVQIgmy.claimedBalanceOf.call(_ownerIR8w3C4, {from: accounts[2]});
		const nullNln3KNz = await contracttVQIgmy.vestedBalanceOf.call(_ownerj6S2zHs, {from: accounts[3]});
	});
})