const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractwRaB9L7 = await SafeMath.new({from: accounts[5]});
		const bH0k75Zv = BigInt("35")
		const aSN4sVMM = BigInt("356")
		const bkJW3wJu = BigInt("1372")
		const aHKxjfV = BigInt("1301")
		const bpg4InIF = BigInt("58")
		const aILsompr = BigInt("736")
		const bSCY8tH = BigInt("815")
		const aMY1Hn2K = BigInt("720")
		const bpNCBKC = BigInt("1970")
		const ayU7TY2C = BigInt("1425")
		const bGuv6xhz = BigInt("1918")
		const aZarQIXq = BigInt("1239")
		const cT7efAA6 = await contractwRaB9L7.safeMul.call(aSN4sVMM, bH0k75Zv, {from: accounts[0]});
		const cAWYP6F5 = await contractwRaB9L7.safeSub.call(aHKxjfV, bkJW3wJu, {from: "0x0000000000000000000000000000000000000001"});
		const conYpM9X = await contractwRaB9L7.safeMul.call(aILsompr, bpg4InIF, {from: accounts[0]});
		const cG2qzp4o = await contractwRaB9L7.safeSub.call(aMY1Hn2K, bSCY8tH, {from: accounts[0]});
		const cFvK0O7H = await contractwRaB9L7.safeMul.call(ayU7TY2C, bpNCBKC, {from: "0x0000000000000000000000000000000000000001"});
		const chXF09r = await contractwRaB9L7.safeDiv.call(aZarQIXq, bGuv6xhz, {from: accounts[0]});

		assert.equal(cT7efAA6, 12460)
		await expect(contractwRaB9L7.safeSub.call(aHKxjfV, bkJW3wJu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractssoMskp = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bcVIWP7C = BigInt("2")
		const awH5szo2 = BigInt("1346")
		const bQsb983A = BigInt("1431")
		const aiGEoSJY = BigInt("1833")
		const bwgMgChx = BigInt("685")
		const aKyCrYa7 = BigInt("234")
		const ckrTXMgm = await contractssoMskp.safeSub.call(awH5szo2, bcVIWP7C, {from: accounts[3]});
		const cMJygdnX = await contractssoMskp.safeAdd.call(aiGEoSJY, bQsb983A, {from: "0x0000000000000000000000000000000000000001"});
		const cm7sYCxd = await contractssoMskp.safeSub.call(aKyCrYa7, bwgMgChx, {from: accounts[0]});
	});
})