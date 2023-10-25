const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractWGlrqVy = await IERC20.new({from: accounts[5]});
		const amountfowUTuh = BigInt("1799")
		const recipientgsBLr2C = accounts[3]
		const spenderGfCzDbQ = accounts[3]
		const ownergCIH7cT = accounts[4]
		const amountNyNY2k7 = BigInt("1483")
		const recipientxLyzceU = accounts[2]
		const amountnWivIxN = BigInt("649")
		const spenderDBhM95B = accounts[4]
		const amountgRAqP3n = BigInt("1442")
		const recipientrBSnpYl = accounts[1]
		const nullvqZDUUC = await contractWGlrqVy.transfer.call(recipientgsBLr2C, amountfowUTuh, {from: accounts[4]});
		const nullXP1bwS = await contractWGlrqVy.allowance.call(ownergCIH7cT, spenderGfCzDbQ, {from: accounts[4]});
		const nullQdK8X7 = await contractWGlrqVy.transfer.call(recipientxLyzceU, amountNyNY2k7, {from: accounts[1]});
		const nullzSdc1jj = await contractWGlrqVy.approve.call(spenderDBhM95B, amountnWivIxN, {from: accounts[2]});
		const nullGbilrSN = await contractWGlrqVy.transfer.call(recipientrBSnpYl, amountgRAqP3n, {from: accounts[4]});
	});
})