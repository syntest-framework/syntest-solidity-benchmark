const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractmEu4Yln = await IERC20.new({from: accounts[4]});
		const valueKHxO68 = BigInt("2001")
		const fromJVdkQVK = accounts[1]
		const whorqpUTli = accounts[3]
		const whoQ1d8YA = accounts[0]
		const whoTMCTjYW = accounts[3]
		const nullge8ZqsM = await contractmEu4Yln.totalSupply.call({from: accounts[3]});
		const nullv4Oa8Sd = await contractmEu4Yln.totalSupply.call({from: accounts[1]});
		await contractmEu4Yln.burnFrom.call(fromJVdkQVK, valueKHxO68, {from: accounts[3]});
		const nullJWxCt1u = await contractmEu4Yln.balanceOf.call(whorqpUTli, {from: accounts[3]});
		const null9HYjhC = await contractmEu4Yln.balanceOf.call(whoQ1d8YA, {from: accounts[0]});
		const nulldMvlGah = await contractmEu4Yln.balanceOf.call(whoTMCTjYW, {from: accounts[3]});
	});
})