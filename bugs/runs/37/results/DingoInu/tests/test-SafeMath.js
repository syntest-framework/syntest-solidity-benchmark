const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractWdnVaNZ = await SafeMath.new({from: accounts[3]});
		const bkgN7Cc8 = BigInt("1919")
		const agj3FziJ = BigInt("1602")
		const bVYecBHs = BigInt("881")
		const awqxboen = BigInt("587")
		const bpmZR8eI = BigInt("1858")
		const ajfzOCuR = BigInt("2001")
		const cdskuByr = await contractWdnVaNZ.safeSub.call(agj3FziJ, bkgN7Cc8, {from: accounts[2]});
		const cBuNN6Fu = await contractWdnVaNZ.safeMul.call(awqxboen, bVYecBHs, {from: accounts[1]});
		const cE8WT27S = await contractWdnVaNZ.safeMul.call(ajfzOCuR, bpmZR8eI, {from: accounts[3]});

		await expect(contractWdnVaNZ.safeSub.call(agj3FziJ, bkgN7Cc8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractm4pCt7T = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bqwZuBl3 = BigInt("225")
		const amfpRrD3 = BigInt("1438")
		const bjEydyS6 = BigInt("1234")
		const a9B7dsf = BigInt("631")
		const bVjeHfPL = BigInt("51")
		const aWjcCFdX = BigInt("527")
		const bDLtXzWM = BigInt("161")
		const aIYRTcIj = BigInt("456")
		const cyfdqXj = await contractm4pCt7T.safeMul.call(amfpRrD3, bqwZuBl3, {from: accounts[2]});
		const cyYtlxHN = await contractm4pCt7T.safeSub.call(a9B7dsf, bjEydyS6, {from: accounts[3]});
		const cCcgaOWM = await contractm4pCt7T.safeMul.call(aWjcCFdX, bVjeHfPL, {from: accounts[5]});
		const cm661E7 = await contractm4pCt7T.safeDiv.call(aIYRTcIj, bDLtXzWM, {from: accounts[1]});
	});
})