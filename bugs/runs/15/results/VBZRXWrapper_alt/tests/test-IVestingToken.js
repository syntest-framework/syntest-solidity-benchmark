const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractKWQ0D35 = await IVestingToken.new({from: accounts[3]});
		const _ownerIZO74UJ = accounts[3]
		const _ownerWSdbP8F = accounts[2]
		const nullct6Iq2P = await contractKWQ0D35.vestedBalanceOf.call(_ownerIZO74UJ, {from: accounts[4]});
		const nullgjRnyUS = await contractKWQ0D35.claimedBalanceOf.call(_ownerWSdbP8F, {from: accounts[1]});
	});
})