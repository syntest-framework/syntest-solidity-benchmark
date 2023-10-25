const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractXM3P9Hu = await IERC20.new({from: accounts[2]});
		const valueEyvx0o = BigInt("148")
		const spenderMjEM3uF = accounts[1]
		const whoMOm7XYW = accounts[1]
		const whoEvfs3gZ = accounts[3]
		const valueWGkU4Kl = BigInt("283")
		const spenderbGVwweV = accounts[1]
		const spendery1FVWo = accounts[4]
		const ownerKJ2dPL6 = accounts[3]
		const null0YHUBy = await contractXM3P9Hu.approve.call(spenderMjEM3uF, valueEyvx0o, {from: accounts[3]});
		const nullKZSB9v2 = await contractXM3P9Hu.balanceOf.call(whoMOm7XYW, {from: "0x0000000000000000000000000000000000000001"});
		const nullwvGlmNe = await contractXM3P9Hu.balanceOf.call(whoEvfs3gZ, {from: accounts[4]});
		const nullwWUAcq = await contractXM3P9Hu.approve.call(spenderbGVwweV, valueWGkU4Kl, {from: accounts[2]});
		const nullrZEcoK = await contractXM3P9Hu.allowance.call(ownerKJ2dPL6, spendery1FVWo, {from: accounts[2]});
	});
})