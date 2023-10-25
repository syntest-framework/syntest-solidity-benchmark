const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractuWC6itV = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const amountAirnqpI = BigInt("81")
		const spenderoGBF8nP = accounts[1]
		const amountuTuRICQ = BigInt("125")
		const spenderCwEIGtb = accounts[0]
		const amountmy0ecJy = BigInt("1787")
		const spenderdAQjrF = accounts[1]
		const nullMpc14vr = await contractuWC6itV.approve.call(spenderoGBF8nP, amountAirnqpI, {from: accounts[0]});
		const nullQ2wTLAW = await contractuWC6itV.approve.call(spenderCwEIGtb, amountuTuRICQ, {from: accounts[0]});
		const nullBScm2Yn = await contractuWC6itV.approve.call(spenderdAQjrF, amountmy0ecJy, {from: accounts[3]});
	});
})