const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractr9yOFTZ = await IUSDT.new({from: accounts[4]});
		const spenderAtaeMSu = accounts[2]
		const ownerZx9RSRx = accounts[0]
		const spenderfQXwNgf = accounts[5]
		const ownersZviP4G = accounts[4]
		const amountxH00PlB = BigInt("1773")
		const recipientTnNc6S = accounts[1]
		const senderuqaMBCa = accounts[4]
		const nullaJM8uRl = await contractr9yOFTZ.allowance.call(ownerZx9RSRx, spenderAtaeMSu, {from: accounts[2]});
		const nulljJcBydd = await contractr9yOFTZ.allowance.call(ownersZviP4G, spenderfQXwNgf, {from: accounts[0]});
		await contractr9yOFTZ.transferFrom.call(senderuqaMBCa, recipientTnNc6S, amountxH00PlB, {from: accounts[2]});
	});
})