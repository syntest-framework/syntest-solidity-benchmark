const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractm2NgnXk = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bglJCLtR = BigInt("133")
		const a9I81GI = BigInt("939")
		const bqgIjT7 = BigInt("1173")
		const aBWxsnVQ = BigInt("1251")
		const cRFN6F9B = await contractm2NgnXk.safeMul.call(a9I81GI, bglJCLtR, {from: accounts[2]});
		const cOO5bhv3 = await contractm2NgnXk.safeSub.call(aBWxsnVQ, bqgIjT7, {from: accounts[1]});
	});

	it('test for SafeMath', async () => {
		const contracthuavByQ = await SafeMath.new({from: accounts[1]});
		const bDk43j6y = BigInt("928")
		const aZfBbwt = BigInt("1626")
		const bD4MDY6P = BigInt("1099")
		const aASAfiv9 = BigInt("306")
		const bSw1oISX = BigInt("1100")
		const aRoRQpDt = BigInt("1602")
		const bSQdrmZ = BigInt("1321")
		const ajo2oDyl = BigInt("1340")
		const bHawKGG9 = BigInt("2028")
		const aBe6cppP = BigInt("1852")
		const cFJuyUKx = await contracthuavByQ.safeSub.call(aZfBbwt, bDk43j6y, {from: accounts[1]});
		const cXaegyDt = await contracthuavByQ.safeSub.call(aASAfiv9, bD4MDY6P, {from: accounts[2]});
		const cjs1naPf = await contracthuavByQ.safeDiv.call(aRoRQpDt, bSw1oISX, {from: accounts[4]});
		const cjg8aBO = await contracthuavByQ.safeMul.call(ajo2oDyl, bSQdrmZ, {from: accounts[0]});
		const cKk10XZn = await contracthuavByQ.safeSub.call(aBe6cppP, bHawKGG9, {from: accounts[2]});

		assert.equal(cFJuyUKx, 698)
		await expect(contracthuavByQ.safeSub.call(aASAfiv9, bD4MDY6P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})