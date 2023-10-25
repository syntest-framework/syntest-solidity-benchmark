const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractfc9AYn6 = await IERC20.new({from: accounts[4]});
		const spenderw1hi71q = accounts[0]
		const ownervQ6oIg = accounts[0]
		const valueJRs1HkZ = BigInt("1085")
		const toIJZYov7 = accounts[4]
		const whodzC7qdf = accounts[1]
		const valueN4c3lEY = BigInt("1578")
		const spenderGTdblBr = accounts[5]
		const nullhu33jIP = await contractfc9AYn6.allowance.call(ownervQ6oIg, spenderw1hi71q, {from: accounts[4]});
		const nullXradcb8 = await contractfc9AYn6.mint.call(toIJZYov7, valueJRs1HkZ, {from: accounts[3]});
		const nullGocd2oa = await contractfc9AYn6.balanceOf.call(whodzC7qdf, {from: accounts[0]});
		const nullYbBAm9x = await contractfc9AYn6.approve.call(spenderGTdblBr, valueN4c3lEY, {from: accounts[2]});
	});
})