const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractDYB0vKP = await IVestingToken.new({from: accounts[4]});
		const _ownerhfYkvlx = accounts[4]
		const nullq3ki4ob = await contractDYB0vKP.vestedBalanceOf.call(_ownerhfYkvlx, {from: accounts[4]});
		await contractDYB0vKP.claim.call({from: accounts[0]});
		await contractDYB0vKP.claim.call({from: accounts[1]});
	});
})