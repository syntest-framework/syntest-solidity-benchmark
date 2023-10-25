const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractnuRS1Co = await IERC20.new({from: accounts[1]});
		const spenderpNkLHHu = accounts[1]
		const owneryRTTtdU = accounts[1]
		const nullyp5FFAg = await contractnuRS1Co.allowance.call(owneryRTTtdU, spenderpNkLHHu, {from: accounts[4]});
		const nullIEjpTV7 = await contractnuRS1Co.totalSupply.call({from: accounts[2]});
	});
})