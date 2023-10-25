const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractBuB2MOY = await SafeMath.new({from: accounts[3]});
		const bsi4Lxvp = BigInt("913")
		const acg5tMC = BigInt("882")
		const bDbr5iqV = BigInt("1945")
		const aruAbVj = BigInt("1813")
		const bZvBXZvr = BigInt("1093")
		const aeqtnghP = BigInt("930")
		const bP5RRFDc = BigInt("919")
		const apGVAmJM = BigInt("1819")
		const cYyPMlm3 = await contractBuB2MOY.safeAdd.call(acg5tMC, bsi4Lxvp, {from: accounts[0]});
		const c28AF8q = await contractBuB2MOY.safeSub.call(aruAbVj, bDbr5iqV, {from: accounts[3]});
		const cjdxENiH = await contractBuB2MOY.safeSub.call(aeqtnghP, bZvBXZvr, {from: accounts[1]});
		const cQRyBEbi = await contractBuB2MOY.safeSub.call(apGVAmJM, bP5RRFDc, {from: accounts[3]});

		assert.equal(cYyPMlm3, 1795)
		await expect(contractBuB2MOY.safeSub.call(aruAbVj, bDbr5iqV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractbDLyefo = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bAl1d5oA = BigInt("1263")
		const aaws6EDa = BigInt("1873")
		const bVq8oKPl = BigInt("547")
		const aRO1BoU = BigInt("1164")
		const btcUtf6L = BigInt("124")
		const aH6tRfqn = BigInt("1876")
		const cDFOkcSR = await contractbDLyefo.safeSub.call(aaws6EDa, bAl1d5oA, {from: accounts[2]});
		const ceW1OaLz = await contractbDLyefo.safeMul.call(aRO1BoU, bVq8oKPl, {from: accounts[0]});
		const cdQUVjt = await contractbDLyefo.safeSub.call(aH6tRfqn, btcUtf6L, {from: "0x0000000000000000000000000000000000000001"});
	});
})