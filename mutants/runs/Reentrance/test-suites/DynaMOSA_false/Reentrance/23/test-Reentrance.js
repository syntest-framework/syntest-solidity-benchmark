const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceTOfnuk7 = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBClAFLD = accounts[4]
		const addressHJ2TYyA = accounts[2]
		const uintfhYPpbv = BigInt("1101")
		const uintqtJ3tWY = await ReentranceTOfnuk7.balanceOf.call(addressBClAFLD, {from: accounts[2]});
		await ReentranceTOfnuk7.topup.call({from: accounts[3]});
		await ReentranceTOfnuk7.topup.call({from: accounts[1]});
		const uintanp0fmR = await ReentranceTOfnuk7.balanceOf.call(addressHJ2TYyA, {from: "0x0000000000000000000000000000000000000001"});
		const uintlhOZOL = await ReentranceTOfnuk7.withdraw.call(uintfhYPpbv, {from: accounts[4]});
	});

	it('test for Reentrance', async () => {
		const ReentranceWzu621s = await Reentrance.new({from: accounts[1]});
		const uintx1H0k2U = BigInt("318")
		const addressDjnE1Ai = accounts[0]
		const uintpdNu3tk = BigInt("432")
		const uintQhbnNI = BigInt("113")
		const addresslATXNu = accounts[5]
		const uintFWHtaGO = await ReentranceWzu621s.withdraw.call(uintx1H0k2U, {from: accounts[3]});
		const uintd1XYTLP = await ReentranceWzu621s.balanceOf.call(addressDjnE1Ai, {from: accounts[0]});
		const uintN3GL14W = await ReentranceWzu621s.withdraw.call(uintpdNu3tk, {from: accounts[2]});
		const uintxwFdyU5 = await ReentranceWzu621s.withdraw.call(uintQhbnNI, {from: "0x0000000000000000000000000000000000000001"});
		const uintH3gyqr = await ReentranceWzu621s.balanceOf.call(addresslATXNu, {from: accounts[0]});

		assert.equal(uintH3gyqr, BigInt("0"))
		assert.equal(uintd1XYTLP, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentrancelbOJpCV = await Reentrance.new({from: accounts[2]});
		const addressG9pMxj4 = accounts[4]
		const addressiqOpgq1 = accounts[5]
		const addressvCrX01 = accounts[0]
		const addressCsJFdMi = accounts[5]
		const uintRUY08ey = await ReentrancelbOJpCV.balanceOf.call(addressG9pMxj4, {from: accounts[4]});
		const uintXGHKwU = await ReentrancelbOJpCV.balanceOf.call(addressiqOpgq1, {from: "0x0000000000000000000000000000000000000001"});
		await ReentrancelbOJpCV.topup.call({from: accounts[1]});
		await ReentrancelbOJpCV.topup.call({from: accounts[0]});
		const uintOos6i0B = await ReentrancelbOJpCV.balanceOf.call(addressvCrX01, {from: accounts[4]});
		const uintODhxEiu = await ReentrancelbOJpCV.balanceOf.call(addressCsJFdMi, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintRUY08ey, BigInt("0"))
		assert.equal(uintXGHKwU, BigInt("0"))
		await expect(ReentrancelbOJpCV.topup.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})