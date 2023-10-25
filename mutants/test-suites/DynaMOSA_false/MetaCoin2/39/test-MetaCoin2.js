const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2IM3i04T = await MetaCoin2.new({from: accounts[2]});
		const uintYZrhRAf = BigInt("1166")
		const addressXFZMLzk = accounts[5]
		const uintu1A4Oc = BigInt("1426")
		const addressIF6555N = accounts[2]
		const addressD47b9d8 = accounts[0]
		const addressz1ixN4 = accounts[2]
		const uintf6GtyL = BigInt("1475")
		const addressgNjmxdm = accounts[4]
		const uintNtWPviX = BigInt("1237")
		const addressBBZqTo0 = accounts[2]
		const booltFiBItf = await MetaCoin2IM3i04T.sendCoin.call(addressXFZMLzk, uintYZrhRAf, {from: accounts[3]});
		const booltQD22M5 = await MetaCoin2IM3i04T.sendCoin.call(addressIF6555N, uintu1A4Oc, {from: accounts[1]});
		const uintsz5WsN1 = await MetaCoin2IM3i04T.getBalanceInEth.call(addressD47b9d8, {from: accounts[4]});
		const uintDBda2RI = await MetaCoin2IM3i04T.getBalanceInEth.call(addressz1ixN4, {from: accounts[2]});
		const boolaQHiKki = await MetaCoin2IM3i04T.sendCoin.call(addressgNjmxdm, uintf6GtyL, {from: accounts[1]});
		const booltkHi2o = await MetaCoin2IM3i04T.sendCoin.call(addressBBZqTo0, uintNtWPviX, {from: accounts[0]});

		assert.equal(boolaQHiKki, false)
		assert.equal(booltFiBItf, false)
		assert.equal(booltQD22M5, false)
		assert.equal(booltkHi2o, false)
		assert.equal(uintDBda2RI, BigInt("20000"))
		assert.equal(uintsz5WsN1, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2tcWTi7z = await MetaCoin2.new({from: accounts[0]});
		const addressJ32NyD5 = accounts[2]
		const uintb9F8vzr = BigInt("852")
		const addressea6zOur = accounts[3]
		const uintrRE0LZ3 = BigInt("65")
		const addresstaVxJ9 = accounts[3]
		const uintg7K1Wsr = BigInt("1226")
		const addressYYi7Atr = "0x0000000000000000000000000000000000000001"
		const addressUbd0Asq = accounts[0]
		const addressUwlmG1 = accounts[5]
		const uintJT0qIQz = await MetaCoin2tcWTi7z.getBalanceInEth.call(addressJ32NyD5, {from: accounts[4]});
		const boolaMmPjzi = await MetaCoin2tcWTi7z.sendCoin.call(addressea6zOur, uintb9F8vzr, {from: accounts[2]});
		const boolFo0uXJk = await MetaCoin2tcWTi7z.sendCoin.call(addresstaVxJ9, uintrRE0LZ3, {from: accounts[3]});
		const boolb4qhbkg = await MetaCoin2tcWTi7z.sendCoin.call(addressYYi7Atr, uintg7K1Wsr, {from: accounts[0]});
		const uintA5PjNmw = await MetaCoin2tcWTi7z.getBalance.call(addressUbd0Asq, {from: accounts[4]});
		const uintRC8wD8m = await MetaCoin2tcWTi7z.getBalanceInEth.call(addressUwlmG1, {from: accounts[2]});

		assert.equal(boolFo0uXJk, false)
		assert.equal(boolaMmPjzi, false)
		assert.equal(boolb4qhbkg, true)
		assert.equal(uintA5PjNmw, BigInt("10000"))
		assert.equal(uintJT0qIQz, BigInt("0"))
		assert.equal(uintRC8wD8m, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2ILBSIHW = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintS9RoYvU = BigInt("377")
		const addressjNel26U = accounts[1]
		const addressnzcMW2 = accounts[4]
		const addresslNRMHeW = "0x0000000000000000000000000000000000000001"
		const boolprQAVQW = await MetaCoin2ILBSIHW.sendCoin.call(addressjNel26U, uintS9RoYvU, {from: accounts[3]});
		const uintWJuFnlt = await MetaCoin2ILBSIHW.getBalanceInEth.call(addressnzcMW2, {from: accounts[5]});
		const uintjwJVbrs = await MetaCoin2ILBSIHW.getBalanceInEth.call(addresslNRMHeW, {from: accounts[3]});
	});
})