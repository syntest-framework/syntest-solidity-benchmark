const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractkAFS1Q0 = await SafeMath.new({from: accounts[0]});
		const bpIOyrwB = BigInt("2038")
		const ao1D9fkW = BigInt("668")
		const bmbaN47n = BigInt("27")
		const aKuKocP = BigInt("364")
		const b3ZZHDz = BigInt("1333")
		const awtR9RJH = BigInt("733")
		const bqMddoRe = BigInt("1546")
		const aQ175VaR = BigInt("168")
		const cLCklPSv = await contractkAFS1Q0.safeMul.call(ao1D9fkW, bpIOyrwB, {from: accounts[1]});
		const ck5zEEt = await contractkAFS1Q0.safeMul.call(aKuKocP, bmbaN47n, {from: accounts[2]});
		const crJ3Yyj2 = await contractkAFS1Q0.safeSub.call(awtR9RJH, b3ZZHDz, {from: "0x0000000000000000000000000000000000000001"});
		const cW1qg4p9 = await contractkAFS1Q0.safeAdd.call(aQ175VaR, bqMddoRe, {from: accounts[2]});

		assert.equal(cLCklPSv, 1361384)
		assert.equal(ck5zEEt, 9828)
		await expect(contractkAFS1Q0.safeSub.call(awtR9RJH, b3ZZHDz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractpNWOfMt = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bAR77QSm = BigInt("1875")
		const awTr7BeM = BigInt("762")
		const bEKyYDry = BigInt("1044")
		const aTrwG0Mt = BigInt("1493")
		const bZDqvECZ = BigInt("518")
		const adHD1NrN = BigInt("437")
		const bxqT7di = BigInt("939")
		const aN2b71XQ = BigInt("851")
		const cg1dlXLt = await contractpNWOfMt.safeMul.call(awTr7BeM, bAR77QSm, {from: accounts[2]});
		const cS6OaqFT = await contractpNWOfMt.safeSub.call(aTrwG0Mt, bEKyYDry, {from: accounts[1]});
		const cp2k8fgc = await contractpNWOfMt.safeMul.call(adHD1NrN, bZDqvECZ, {from: accounts[4]});
		const cjsy46mT = await contractpNWOfMt.safeDiv.call(aN2b71XQ, bxqT7di, {from: "0x0000000000000000000000000000000000000001"});
	});
})