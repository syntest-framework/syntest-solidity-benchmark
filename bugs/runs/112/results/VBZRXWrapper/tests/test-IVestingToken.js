const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractS8OskKu = await IVestingToken.new({from: accounts[0]});
		const _ownerU6uN8uk = "0x0000000000000000000000000000000000000001"
		const _ownerF1V5FFD = accounts[0]
		const _owner2CMYG0 = accounts[0]
		const nullbSw4l86 = await contractS8OskKu.vestedBalanceOf.call(_ownerU6uN8uk, {from: accounts[2]});
		const nullpk0z0JH = await contractS8OskKu.claimedBalanceOf.call(_ownerF1V5FFD, {from: accounts[1]});
		const nullfv5Pvon = await contractS8OskKu.vestedBalanceOf.call(_owner2CMYG0, {from: accounts[1]});
	});
})