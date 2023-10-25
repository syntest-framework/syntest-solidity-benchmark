const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceVkGSfCM = await Reentrance.new({from: accounts[3]});
		const addressTiUd4w6 = accounts[1]
		const addressa482PGF = "0x0000000000000000000000000000000000000001"
		const addressl7abgBg = accounts[1]
		const addressDUMQ36i = accounts[2]
		const uintmWOJVbT = await ReentranceVkGSfCM.balanceOf.call(addressTiUd4w6, {from: accounts[1]});
		const uintbt9rxWZ = await ReentranceVkGSfCM.balanceOf.call(addressa482PGF, {from: accounts[4]});
		const uintlui0RFZ = await ReentranceVkGSfCM.balanceOf.call(addressl7abgBg, {from: accounts[1]});
		const uintREWy9lx = await ReentranceVkGSfCM.balanceOf.call(addressDUMQ36i, {from: accounts[0]});

		assert.equal(uintREWy9lx, BigInt("0"))
		assert.equal(uintbt9rxWZ, BigInt("0"))
		assert.equal(uintlui0RFZ, BigInt("0"))
		assert.equal(uintmWOJVbT, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceGlDtwOd = await Reentrance.new({from: accounts[2]});
		const addressD91Ea2a = accounts[1]
		const uintyfa8Oh2 = BigInt("1670")
		const addressBPn3oV0 = accounts[4]
		const uintjYhu2FN = BigInt("46")
		const addressZIggPWw = "0x0000000000000000000000000000000000000001"
		const addressgehqPQO = accounts[3]
		const uinttG4O4H = await ReentranceGlDtwOd.balanceOf.call(addressD91Ea2a, {from: accounts[4]});
		const uintd792iIo = await ReentranceGlDtwOd.withdraw.call(uintyfa8Oh2, {from: accounts[5]});
		const uinthPukLlq = await ReentranceGlDtwOd.balanceOf.call(addressBPn3oV0, {from: accounts[2]});
		const uintHTZzdR = await ReentranceGlDtwOd.withdraw.call(uintjYhu2FN, {from: accounts[5]});
		const uintFmXcF6C = await ReentranceGlDtwOd.balanceOf.call(addressZIggPWw, {from: accounts[5]});
		const uintWvVV9R = await ReentranceGlDtwOd.balanceOf.call(addressgehqPQO, {from: accounts[5]});

		assert.equal(uintFmXcF6C, BigInt("0"))
		assert.equal(uintWvVV9R, BigInt("0"))
		assert.equal(uinthPukLlq, BigInt("0"))
		assert.equal(uinttG4O4H, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceiYBvkQi = await Reentrance.new({from: accounts[1]});
		const addressZ7RPz2f = accounts[4]
		const uintuUDS5MX = await ReentranceiYBvkQi.balanceOf.call(addressZ7RPz2f, {from: accounts[3]});
//		await ReentranceiYBvkQi.topup.call({from: accounts[2]});

		assert.equal(uintuUDS5MX, BigInt("0"))
		await expect(ReentranceiYBvkQi.topup.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceF63P5F4 = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMpDPe8I = accounts[3]
		await ReentranceF63P5F4.topup.call({from: accounts[3]});
		const uintSu6jX9l = await ReentranceF63P5F4.balanceOf.call(addressMpDPe8I, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Reentrance', async () => {
		const ReentranceiYBvkQi = await Reentrance.new({from: accounts[1]});
		const uintEKrDU8h = BigInt("0")
		const addressXqr25ew = accounts[5]
		const addressBi0r8Lq = accounts[1]
		const uint26v2gu = await ReentranceiYBvkQi.withdraw.call(uintEKrDU8h, {from: accounts[2]});
		const uintuUDS5MX = await ReentranceiYBvkQi.balanceOf.call(addressXqr25ew, {from: accounts[3]});
		const uintDopOY8f = await ReentranceiYBvkQi.balanceOf.call(addressBi0r8Lq, {from: accounts[2]});

		assert.equal(uintDopOY8f, BigInt("0"))
		assert.equal(uintuUDS5MX, BigInt("0"))
	});
})