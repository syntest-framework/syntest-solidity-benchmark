const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractdZgfC9n = await IVestingToken.new({from: accounts[0]});
		const _ownerqOC5xQ9 = accounts[0]
		const _ownernnUEPWZ = accounts[4]
		const _ownerGXXJT2v = accounts[0]
		const nullAjXqVvq = await contractdZgfC9n.vestedBalanceOf.call(_ownerqOC5xQ9, {from: accounts[4]});
		const nullOcefnSD = await contractdZgfC9n.claimedBalanceOf.call(_ownernnUEPWZ, {from: accounts[3]});
		const nullD5hlqY = await contractdZgfC9n.claimedBalanceOf.call(_ownerGXXJT2v, {from: accounts[5]});
	});
})