const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractNKrnXFb = await IUSDT.new({from: accounts[1]});
		const amountxnDGhW = BigInt("1914")
		const spenderK2NfpwT = accounts[4]
		const amountQDjF63n = BigInt("288")
		const spenderI0BUoFY = accounts[0]
		const amounts4rCcB3 = BigInt("361")
		const spenderV9cjm8t = accounts[4]
		const amountfOFtJYK = BigInt("1405")
		const recipientZKWEKVl = accounts[1]
		await contractNKrnXFb.approve.call(spenderK2NfpwT, amountxnDGhW, {from: accounts[2]});
		await contractNKrnXFb.approve.call(spenderI0BUoFY, amountQDjF63n, {from: accounts[1]});
		await contractNKrnXFb.approve.call(spenderV9cjm8t, amounts4rCcB3, {from: "0x0000000000000000000000000000000000000001"});
		await contractNKrnXFb.transfer.call(recipientZKWEKVl, amountfOFtJYK, {from: accounts[1]});
	});
})