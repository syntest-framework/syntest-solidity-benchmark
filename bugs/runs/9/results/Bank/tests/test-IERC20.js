const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractQAJR3nb = await IERC20.new({from: accounts[3]});
		const whoYRtUILv = accounts[5]
		const spenderfSMP5d9 = accounts[4]
		const ownerweRYaE8 = accounts[3]
		const nullfSl9SG = await contractQAJR3nb.balanceOf.call(whoYRtUILv, {from: accounts[4]});
		const nullmkX5qHQ = await contractQAJR3nb.allowance.call(ownerweRYaE8, spenderfSMP5d9, {from: accounts[2]});
	});
})