const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractrBu8XGb = await IERC20.new({from: accounts[0]});
		const valuemJzqvLw = BigInt("1248")
		const spenderMwns68v = "0x0000000000000000000000000000000000000001"
		const spenderiCqAuw = "0x0000000000000000000000000000000000000001"
		const ownerFWgm6ii = accounts[3]
		const nullWpp10VD = await contractrBu8XGb.approve.call(spenderMwns68v, valuemJzqvLw, {from: accounts[4]});
		const nullE63enQO = await contractrBu8XGb.allowance.call(ownerFWgm6ii, spenderiCqAuw, {from: accounts[5]});
	});
})