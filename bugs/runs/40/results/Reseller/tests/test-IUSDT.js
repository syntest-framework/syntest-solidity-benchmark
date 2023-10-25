const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractxAWle01 = await IUSDT.new({from: accounts[5]});
		const amountey0vXwU = BigInt("110")
		const spenderyb256vS = accounts[3]
		const amountDBwUzFv = BigInt("1847")
		const spenderS2qxu2A = accounts[4]
		const amountBBsXRW = BigInt("1288")
		const spenderHpZfKW = accounts[0]
		await contractxAWle01.approve.call(spenderyb256vS, amountey0vXwU, {from: accounts[5]});
		await contractxAWle01.approve.call(spenderS2qxu2A, amountDBwUzFv, {from: accounts[3]});
		await contractxAWle01.approve.call(spenderHpZfKW, amountBBsXRW, {from: accounts[5]});
	});
})