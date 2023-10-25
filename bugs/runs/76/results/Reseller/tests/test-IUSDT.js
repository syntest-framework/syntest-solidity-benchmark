const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractcp75PK1 = await IUSDT.new({from: accounts[1]});
		const amountgUIzpi = BigInt("1804")
		const recipienth2X7tF = accounts[5]
		await contractcp75PK1.transfer.call(recipienth2X7tF, amountgUIzpi, {from: accounts[3]});
		const nullOTqD03L = await contractcp75PK1.totalSupply.call({from: accounts[3]});
	});
})