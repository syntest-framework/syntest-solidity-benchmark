const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractm2gySH5 = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bxKAcoYk = BigInt("316")
		const ajFVf3ik = BigInt("867")
		const buoJItZn = BigInt("724")
		const aRGDlVAV = BigInt("5")
		const cl2bom8Z = await contractm2gySH5.safeAdd.call(ajFVf3ik, bxKAcoYk, {from: accounts[4]});
		const cypGkkAH = await contractm2gySH5.safeDiv.call(aRGDlVAV, buoJItZn, {from: accounts[3]});
	});

	it('test for SafeMath', async () => {
		const contractkE8oAa0 = await SafeMath.new({from: accounts[2]});
		const bPkuitUT = BigInt("987")
		const aMZzbbBV = BigInt("1510")
		const bqt9LF2M = BigInt("1822")
		const axYkvfW = BigInt("1431")
		const b3XvDQR = BigInt("176")
		const ahNRTBDm = BigInt("1392")
		const biiPYvHV = BigInt("920")
		const aOPXoWcQ = BigInt("1327")
		const buaubPTR = BigInt("1973")
		const aMEH87hM = BigInt("477")
		const cJbHM1yg = await contractkE8oAa0.safeSub.call(aMZzbbBV, bPkuitUT, {from: accounts[0]});
		const cJt85Yrt = await contractkE8oAa0.safeAdd.call(axYkvfW, bqt9LF2M, {from: accounts[1]});
		const cjLymSd2 = await contractkE8oAa0.safeDiv.call(ahNRTBDm, b3XvDQR, {from: accounts[2]});
		const cGG8PRkC = await contractkE8oAa0.safeAdd.call(aOPXoWcQ, biiPYvHV, {from: accounts[2]});
		const cZScis4 = await contractkE8oAa0.safeSub.call(aMEH87hM, buaubPTR, {from: accounts[1]});

		assert.equal(cGG8PRkC, 2247)
		assert.equal(cJbHM1yg, 523)
		assert.equal(cJt85Yrt, 3253)
		assert.equal(cjLymSd2, 7)
		await expect(contractkE8oAa0.safeSub.call(aMEH87hM, buaubPTR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})