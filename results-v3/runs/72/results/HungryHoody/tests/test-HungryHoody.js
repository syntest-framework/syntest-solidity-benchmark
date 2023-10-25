const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyWvJEk44 = await HungryHoody.new({from: accounts[3]});
		const uintt5ntiv9 = BigInt("947")
		const uintioqGj35 = BigInt("420")
		const uintGsOHNOS = BigInt("975")
		const addresssQ0JHf = accounts[1]
		const uintErvToH = await HungryHoodyWvJEk44.safeAdd.call(uintioqGj35, uintt5ntiv9, {from: accounts[4]});
		const boolX9B9oYd = await HungryHoodyWvJEk44.approve.call(addresssQ0JHf, uintGsOHNOS, {from: accounts[0]});
		const uintqp5yUSW = await HungryHoodyWvJEk44.totalSupply.call({from: accounts[1]});

		assert.equal(boolX9B9oYd, true)
		assert.equal(uintErvToH, BigInt("1367"))
		assert.equal(uintqp5yUSW, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyqV8zlP9 = await HungryHoody.new({from: accounts[3]});
		const uintntFHgEk = BigInt("348")
		const addresse91CT96 = accounts[2]
		const uintSMhcUdo = BigInt("1015")
		const uintntVZDin = BigInt("1183")
		const uintShtFoUz = BigInt("1797")
		const addresshHjX4g1 = accounts[1]
		const addressjlfs3cC = "0x0000000000000000000000000000000000000001"
		const addressMUu2N6n = accounts[2]
		const addressTqydEXC = accounts[0]
		const boolhs489sa = await HungryHoodyqV8zlP9.transfer.call(addresse91CT96, uintntFHgEk, {from: accounts[2]});
		const uintZHbkt6s = await HungryHoodyqV8zlP9.safeDiv.call(uintntVZDin, uintSMhcUdo, {from: accounts[1]});
		const boolJSNk9Co = await HungryHoodyqV8zlP9.transferFrom.call(addressjlfs3cC, addresshHjX4g1, uintShtFoUz, {from: "0x0000000000000000000000000000000000000001"});
		const uintbfAONoF = await HungryHoodyqV8zlP9.allowance.call(addressTqydEXC, addressMUu2N6n, {from: accounts[4]});

		await expect(HungryHoodyqV8zlP9.transfer.call(addresse91CT96, uintntFHgEk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyE1g4Pj = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsO5fJZF = BigInt("1580")
		const addresssYjmuV = "0x0000000000000000000000000000000000000001"
		const uintoxmLKt6 = BigInt("1067")
		const addressoyPgR9 = accounts[0]
		const uintAg3ZD1b = BigInt("883")
		const uintNmfPxCW = BigInt("1236")
		const boolZHGeGKB = await HungryHoodyE1g4Pj.approve.call(addresssYjmuV, uintsO5fJZF, {from: accounts[3]});
		const boolpsOwR9Y = await HungryHoodyE1g4Pj.approve.call(addressoyPgR9, uintoxmLKt6, {from: accounts[1]});
		const uintNBcsG11 = await HungryHoodyE1g4Pj.safeMul.call(uintNmfPxCW, uintAg3ZD1b, {from: accounts[3]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyxr3deQy = await HungryHoody.new({from: accounts[0]});
		const uintJIbvYvb = BigInt("269")
		const addressFI6Ynao = accounts[3]
		const addressl8UIv4T = accounts[3]
		const uintGCqCOq = BigInt("156")
		const uintXK9dhRL = BigInt("1188")
		const uintQ3gdH4N = BigInt("1577")
		const addressHd97ASn = accounts[0]
		const addresszPp5JQL = accounts[3]
		const boolSYakKGm = await HungryHoodyxr3deQy.transferFrom.call(addressl8UIv4T, addressFI6Ynao, uintJIbvYvb, {from: accounts[0]});
		const uintRfWLRK9 = await HungryHoodyxr3deQy.safeSub.call(uintXK9dhRL, uintGCqCOq, {from: accounts[5]});
		const boolBab33o6 = await HungryHoodyxr3deQy.transfer.call(addressHd97ASn, uintQ3gdH4N, {from: "0x0000000000000000000000000000000000000001"});
		const uintddTtusH = await HungryHoodyxr3deQy.balanceOf.call(addresszPp5JQL, {from: accounts[2]});

		await expect(HungryHoodyxr3deQy.transferFrom.call(addressl8UIv4T, addressFI6Ynao, uintJIbvYvb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyipPeEOE = await HungryHoody.new({from: accounts[0]});
		const uintJW5IPFL = BigInt("1599")
		const addressbMh5M24 = accounts[0]
		const uintUfJLjle = BigInt("756")
		const uintKZJ8pw0 = BigInt("885")
		const addressi60wQFV = accounts[1]
		const boolD2kLpVx = await HungryHoodyipPeEOE.approve.call(addressbMh5M24, uintJW5IPFL, {from: accounts[1]});
		const uintuYwl9SL = await HungryHoodyipPeEOE.safeDiv.call(uintKZJ8pw0, uintUfJLjle, {from: accounts[4]});
		const uintqsfR4z = await HungryHoodyipPeEOE.balanceOf.call(addressi60wQFV, {from: accounts[3]});

		assert.equal(boolD2kLpVx, true)
		assert.equal(uintqsfR4z, BigInt("0"))
		assert.equal(uintuYwl9SL, BigInt("1"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyWvJEk44 = await HungryHoody.new({from: accounts[3]});
		const uintdoZYTd = BigInt("947")
		const uintJxAHLtC = BigInt("420")
		const uintWv9j43i = BigInt("975")
		const addressXxMplzU = accounts[1]
		const addressaDfWAIi = accounts[0]
		const addressQKd3A7X = accounts[3]
		const uintErvToH = await HungryHoodyWvJEk44.safeAdd.call(uintJxAHLtC, uintdoZYTd, {from: accounts[4]});
		const boolX9B9oYd = await HungryHoodyWvJEk44.approve.call(addressXxMplzU, uintWv9j43i, {from: accounts[0]});
		const uintqp5yUSW = await HungryHoodyWvJEk44.totalSupply.call({from: accounts[1]});
		const uintX6jWGh = await HungryHoodyWvJEk44.allowance.call(addressQKd3A7X, addressaDfWAIi, {from: accounts[3]});

		assert.equal(boolX9B9oYd, true)
		assert.equal(uintErvToH, BigInt("1367"))
		assert.equal(uintX6jWGh, BigInt("0"))
		assert.equal(uintqp5yUSW, BigInt("25000000000000000000"))
	});
})