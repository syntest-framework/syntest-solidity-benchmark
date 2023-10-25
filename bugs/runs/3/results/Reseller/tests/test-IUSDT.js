const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractexDKNvJ = await IUSDT.new({from: accounts[0]});
		const amountrDM1RD2 = BigInt("1081")
		const recipientvjIZ20B = "0x0000000000000000000000000000000000000001"
		const senderibWMG2b = accounts[2]
		const amountOAnwgF = BigInt("1129")
		const spenderOOGgndQ = accounts[4]
		await contractexDKNvJ.transferFrom.call(senderibWMG2b, recipientvjIZ20B, amountrDM1RD2, {from: accounts[0]});
		await contractexDKNvJ.approve.call(spenderOOGgndQ, amountOAnwgF, {from: accounts[5]});
	});
})