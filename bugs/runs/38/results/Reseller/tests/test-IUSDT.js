const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractU0xue5 = await IUSDT.new({from: accounts[0]});
		const amounteUIppzv = BigInt("25")
		const spenderZ3dvRLP = accounts[2]
		const amountduppgga = BigInt("1583")
		const spenderiKLSn07 = accounts[2]
		await contractU0xue5.approve.call(spenderZ3dvRLP, amounteUIppzv, {from: accounts[2]});
		const nullh5zXPxI = await contractU0xue5.decimals.call({from: accounts[2]});
		await contractU0xue5.approve.call(spenderiKLSn07, amountduppgga, {from: accounts[3]});
	});
})