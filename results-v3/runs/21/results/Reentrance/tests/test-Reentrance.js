const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentrancenH4khl = await Reentrance.new({from: accounts[1]});
		const addressJvn7Ddg = accounts[5]
		const uintHgw1nEp = BigInt("594")
		const uint4NP7Oa = await ReentrancenH4khl.balanceOf.call(addressJvn7Ddg, {from: accounts[2]});
		const uintgN1YvIT = await ReentrancenH4khl.withdraw.call(uintHgw1nEp, {from: accounts[4]});

		assert.equal(uint4NP7Oa, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const Reentrancej5rwg6 = await Reentrance.new({from: accounts[4]});
		const addressjZ2mr4r = "0x0000000000000000000000000000000000000001"
		const uintrmsYNZR = BigInt("255")
		const addressxf5ooJf = accounts[2]
		const address7mgWJN = accounts[2]
		const uintpPvR8wN = await Reentrancej5rwg6.balanceOf.call(addressjZ2mr4r, {from: accounts[0]});
		await Reentrancej5rwg6.topup.call({from: accounts[3]});
		const uintT37wULX = await Reentrancej5rwg6.withdraw.call(uintrmsYNZR, {from: accounts[0]});
		await Reentrancej5rwg6.topup.call({from: accounts[1]});
		const uintAMX9znJ = await Reentrancej5rwg6.balanceOf.call(addressxf5ooJf, {from: accounts[5]});
		const uintQywJJYa = await Reentrancej5rwg6.balanceOf.call(address7mgWJN, {from: accounts[2]});

		assert.equal(uintpPvR8wN, BigInt("0"))
		await expect(Reentrancej5rwg6.topup.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceO8edHga = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressG0fZzC = accounts[5]
		const addressunSVtDN = accounts[0]
		const uintKGVD12i = BigInt("483")
		const addressQi7gdNs = accounts[3]
		const uinteE6rxz = await ReentranceO8edHga.balanceOf.call(addressG0fZzC, {from: accounts[5]});
		const uintVUmiTkM = await ReentranceO8edHga.balanceOf.call(addressunSVtDN, {from: accounts[0]});
		await ReentranceO8edHga.topup.call({from: accounts[3]});
		const uintzCpyP5Y = await ReentranceO8edHga.withdraw.call(uintKGVD12i, {from: "0x0000000000000000000000000000000000000001"});
		const uint4AAujv = await ReentranceO8edHga.balanceOf.call(addressQi7gdNs, {from: accounts[2]});
	});

	it('test for Reentrance', async () => {
		const ReentrancenH4khl = await Reentrance.new({from: accounts[1]});
		const uintVWsoi1L = BigInt("0")
		const uintgN1YvIT = await ReentrancenH4khl.withdraw.call(uintVWsoi1L, {from: accounts[4]});
	});
})