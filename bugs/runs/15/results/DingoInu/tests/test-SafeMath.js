const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractGrU2J29 = await SafeMath.new({from: accounts[2]});
		const bMAY4ab0 = BigInt("1727")
		const aHYSMyC4 = BigInt("2008")
		const bmRq4WNl = BigInt("622")
		const asd8b7IS = BigInt("1525")
		const bKVN9gH6 = BigInt("927")
		const acT2kKj2 = BigInt("1023")
		const byYggl6N = BigInt("1793")
		const aOXGKSqg = BigInt("160")
		const bXjS0tr = BigInt("1959")
		const awbh4blP = BigInt("1360")
		const chV9CQts = await contractGrU2J29.safeDiv.call(aHYSMyC4, bMAY4ab0, {from: accounts[2]});
		const cv3dxGff = await contractGrU2J29.safeMul.call(asd8b7IS, bmRq4WNl, {from: accounts[0]});
		const cBcjstlX = await contractGrU2J29.safeMul.call(acT2kKj2, bKVN9gH6, {from: accounts[0]});
		const chM5yzlS = await contractGrU2J29.safeSub.call(aOXGKSqg, byYggl6N, {from: accounts[1]});
		const cPV21frI = await contractGrU2J29.safeDiv.call(awbh4blP, bXjS0tr, {from: accounts[4]});

		assert.equal(cBcjstlX, 948321)
		assert.equal(chV9CQts, 1)
		assert.equal(cv3dxGff, 948550)
		await expect(contractGrU2J29.safeSub.call(aOXGKSqg, byYggl6N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractDJlqNGM = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bITBbynU = BigInt("70")
		const aXe6VyxG = BigInt("842")
		const bbxUIizR = BigInt("1032")
		const axYldjma = BigInt("998")
		const bRMPlHLO = BigInt("307")
		const aPY0XT1 = BigInt("1002")
		const bHMBops = BigInt("734")
		const azF66BP = BigInt("554")
		const b7ZvOQU = BigInt("55")
		const ahiXO4ED = BigInt("948")
		const bajm5t2l = BigInt("1095")
		const aHGOSQWY = BigInt("2036")
		const cytFFcu = await contractDJlqNGM.safeDiv.call(aXe6VyxG, bITBbynU, {from: accounts[5]});
		const citrh3mD = await contractDJlqNGM.safeMul.call(axYldjma, bbxUIizR, {from: accounts[1]});
		const ctfLmWuM = await contractDJlqNGM.safeSub.call(aPY0XT1, bRMPlHLO, {from: accounts[4]});
		const cwy3GFMP = await contractDJlqNGM.safeSub.call(azF66BP, bHMBops, {from: accounts[3]});
		const cSW9U1wB = await contractDJlqNGM.safeMul.call(ahiXO4ED, b7ZvOQU, {from: "0x0000000000000000000000000000000000000001"});
		const cbrV8g9d = await contractDJlqNGM.safeSub.call(aHGOSQWY, bajm5t2l, {from: accounts[0]});
	});
})