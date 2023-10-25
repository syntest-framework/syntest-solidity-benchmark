const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractWnOExGa = await IVestingToken.new({from: "0x0000000000000000000000000000000000000001"});
		const _ownercdXfCiH = accounts[2]
		const _ownerYTRakHm = accounts[0]
		const _ownerZ0f1slO = "0x0000000000000000000000000000000000000001"
		const _ownerFujya6B = accounts[3]
		const nullzGvWIuO = await contractWnOExGa.vestedBalanceOf.call(_ownercdXfCiH, {from: accounts[4]});
		await contractWnOExGa.claim.call({from: accounts[2]});
		const nullPSC7sZZ = await contractWnOExGa.claimedBalanceOf.call(_ownerYTRakHm, {from: accounts[2]});
		const nulls5dVAJ0 = await contractWnOExGa.claimedBalanceOf.call(_ownerZ0f1slO, {from: accounts[1]});
		const nullfq0vLu1 = await contractWnOExGa.vestedBalanceOf.call(_ownerFujya6B, {from: accounts[4]});
	});
})