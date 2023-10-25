const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractTmKcAR1 = await IUSDT.new({from: "0x0000000000000000000000000000000000000001"});
		const amounteZ5Cpl = BigInt("539")
		const spenderBL62Yrq = accounts[0]
		const spenderWllKSp9 = accounts[4]
		const ownerWxDDtEl = accounts[2]
		const nulllZBfJX1 = await contractTmKcAR1.decimals.call({from: accounts[4]});
		await contractTmKcAR1.approve.call(spenderBL62Yrq, amounteZ5Cpl, {from: accounts[2]});
		const nullDos77x = await contractTmKcAR1.allowance.call(ownerWxDDtEl, spenderWllKSp9, {from: accounts[4]});
	});
})