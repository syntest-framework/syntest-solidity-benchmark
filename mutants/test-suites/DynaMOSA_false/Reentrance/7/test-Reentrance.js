const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentrancendW5wxt = await Reentrance.new({from: accounts[2]});
		const addressNiezQX2 = accounts[1]
		const addressoLTKHZZ = accounts[4]
		const addressnx7rndw = accounts[4]
		const addresstZR1y7i = "0x0000000000000000000000000000000000000001"
		const uintQ0Mv4a = await ReentrancendW5wxt.balanceOf.call(addressNiezQX2, {from: accounts[2]});
		const uintZ1ERXoM = await ReentrancendW5wxt.balanceOf.call(addressoLTKHZZ, {from: accounts[3]});
//		await ReentrancendW5wxt.topup.call({from: accounts[3]});
//		const uintFieWfgt = await ReentrancendW5wxt.balanceOf.call(addressnx7rndw, {from: accounts[0]});
//		const uintsvDtZSR = await ReentrancendW5wxt.balanceOf.call(addresstZR1y7i, {from: accounts[1]});
//		await ReentrancendW5wxt.topup.call({from: accounts[2]});

		assert.equal(uintQ0Mv4a, BigInt("0"))
		assert.equal(uintZ1ERXoM, BigInt("0"))
		await expect(ReentrancendW5wxt.topup.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceWVit86B = await Reentrance.new({from: accounts[3]});
		const addressOQYV5v = "0x0000000000000000000000000000000000000001"
		const uintKsNDKXh = BigInt("1266")
		const uintJmflWVq = BigInt("640")
		const uintPAh82ZS = BigInt("808")
		const addressFP47E0e = accounts[0]
		const uintlk6lP4I = BigInt("1014")
		const uintA627Bd = await ReentranceWVit86B.balanceOf.call(addressOQYV5v, {from: accounts[5]});
		const uintRGaVHeM = await ReentranceWVit86B.withdraw.call(uintKsNDKXh, {from: accounts[0]});
		const uintxBiuo7x = await ReentranceWVit86B.withdraw.call(uintJmflWVq, {from: accounts[3]});
		const uintW3IP9Gs = await ReentranceWVit86B.withdraw.call(uintPAh82ZS, {from: accounts[2]});
		const uinttxJ1U2G = await ReentranceWVit86B.balanceOf.call(addressFP47E0e, {from: accounts[4]});
		const uintZeRenEW = await ReentranceWVit86B.withdraw.call(uintlk6lP4I, {from: accounts[1]});

		assert.equal(uintA627Bd, BigInt("0"))
		assert.equal(uinttxJ1U2G, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentrancezkAvTm = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnUsuLoz = accounts[4]
		const uintkgvHZdo = BigInt("533")
		const uinttHxuTtz = BigInt("1224")
		const addressy6be2lU = accounts[2]
		const uintE0shY9F = await ReentrancezkAvTm.balanceOf.call(addressnUsuLoz, {from: accounts[1]});
		const uintwasbM6 = await ReentrancezkAvTm.withdraw.call(uintkgvHZdo, {from: accounts[5]});
		const uintoGkmVkO = await ReentrancezkAvTm.withdraw.call(uinttHxuTtz, {from: accounts[0]});
		const uintKiWf2us = await ReentrancezkAvTm.balanceOf.call(addressy6be2lU, {from: accounts[1]});
	});
})