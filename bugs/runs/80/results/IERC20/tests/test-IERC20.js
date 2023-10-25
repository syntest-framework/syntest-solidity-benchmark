const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractQevJy4Y = await IERC20.new({from: accounts[4]});
		const valuep0VwRZj = BigInt("9")
		const toiRGUct0 = accounts[0]
		const fromuzHeVrD = accounts[5]
		const whoJ0KfWul = accounts[2]
		const spenderfuYbYJL = accounts[5]
		const owner4EYgKU = accounts[3]
		const nullBlPtrRP = await contractQevJy4Y.totalSupply.call({from: accounts[3]});
		const nullLftnI5Y = await contractQevJy4Y.transferFrom.call(fromuzHeVrD, toiRGUct0, valuep0VwRZj, {from: accounts[1]});
		const nullPFyX2F1 = await contractQevJy4Y.balanceOf.call(whoJ0KfWul, {from: accounts[0]});
		const nullikdqdc = await contractQevJy4Y.allowance.call(owner4EYgKU, spenderfuYbYJL, {from: accounts[2]});
	});
})