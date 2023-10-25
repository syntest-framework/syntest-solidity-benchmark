const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contract1YXaIf = await IERC20.new({from: accounts[3]});
		const whogmDjs8D = accounts[3]
		const spenderuPRJAGm = "0x0000000000000000000000000000000000000001"
		const ownerFJ1hDdC = accounts[3]
		const whoccmtnx = accounts[4]
		const nullrgBddbR = await contract1YXaIf.balanceOf.call(whogmDjs8D, {from: "0x0000000000000000000000000000000000000001"});
		const nullfclf4FM = await contract1YXaIf.allowance.call(ownerFJ1hDdC, spenderuPRJAGm, {from: accounts[2]});
		const nullIOX7GNv = await contract1YXaIf.balanceOf.call(whoccmtnx, {from: accounts[1]});
	});
})