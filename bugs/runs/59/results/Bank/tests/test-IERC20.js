const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractqvAKVWb = await IERC20.new({from: accounts[0]});
		const whoo3VNAMQ = accounts[2]
		const valueavjb8uk = BigInt("1531")
		const spender4I92u9 = accounts[0]
		const whoFlxuB5x = accounts[0]
		const nullZDbmpwI = await contractqvAKVWb.balanceOf.call(whoo3VNAMQ, {from: accounts[1]});
		const nullYQFrN1I = await contractqvAKVWb.approve.call(spender4I92u9, valueavjb8uk, {from: accounts[1]});
		const nulliyhBvIJ = await contractqvAKVWb.balanceOf.call(whoFlxuB5x, {from: accounts[0]});
	});
})