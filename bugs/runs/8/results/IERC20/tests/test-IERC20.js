const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractMY7Hjgm = await IERC20.new({from: accounts[1]});
		const valueFo6m3VJ = BigInt("896")
		const toVffesaH = accounts[5]
		const valuewUExnVk = BigInt("142")
		const spendergq1UIGF = accounts[4]
		const valueijtRUX = BigInt("210")
		const toG4KAvb = accounts[2]
		const valueuUVsRcG = BigInt("1284")
		const to05tGly = "0x0000000000000000000000000000000000000001"
		const nullJE0vJOf = await contractMY7Hjgm.transfer.call(toVffesaH, valueFo6m3VJ, {from: accounts[1]});
		const nulliyH3R3L = await contractMY7Hjgm.approve.call(spendergq1UIGF, valuewUExnVk, {from: "0x0000000000000000000000000000000000000001"});
		const nullm99yCue = await contractMY7Hjgm.transfer.call(toG4KAvb, valueijtRUX, {from: accounts[0]});
		const nulltnKTVVk = await contractMY7Hjgm.transfer.call(to05tGly, valueuUVsRcG, {from: accounts[1]});
	});
})