const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financepHxf4n4 = await Rootkit_finance.new({from: accounts[0]});
		const uintFmL1KjU = BigInt("864")
		const addressCRGEyQv = accounts[3]
		const uintMyswS71 = BigInt("416")
		const addressGuxVfMF = accounts[0]
		const addressgBx8sdj = accounts[0]
		const boolKiWmZR = await Rootkit_financepHxf4n4.transfer.call(addressCRGEyQv, uintFmL1KjU, {from: accounts[2]});
		const booljrML1Gk = await Rootkit_financepHxf4n4.transferFrom.call(addressgBx8sdj, addressGuxVfMF, uintMyswS71, {from: accounts[3]});

		assert.equal(boolKiWmZR, false)
		assert.equal(booljrML1Gk, false)
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financex5Mq6mh = await Rootkit_finance.new({from: accounts[4]});
		const uintXozejAe = BigInt("1347")
		const addressVxLtwfA = accounts[0]
		const uintqmTy4bj = BigInt("1831")
		const addressv2gdKVU = accounts[0]
		const addressjzoKCGy = accounts[4]
		const boolhOXclmV = await Rootkit_financex5Mq6mh.transfer.call(addressVxLtwfA, uintXozejAe, {from: accounts[4]});
		const boolN9pe2Ek = await Rootkit_financex5Mq6mh.transferFrom.call(addressjzoKCGy, addressv2gdKVU, uintqmTy4bj, {from: accounts[5]});
		const uint256yOz1G2w = await Rootkit_financex5Mq6mh.totalSupply.call({from: accounts[4]});

		assert.equal(boolN9pe2Ek, false)
		assert.equal(boolhOXclmV, true)
		assert.equal(uint256yOz1G2w, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financedaWargC = await Rootkit_finance.new({from: accounts[3]});
		const uintvBzbqhW = BigInt("380")
		const addresswXOwuF8 = accounts[3]
		const uintLyJiqjk = BigInt("1691")
		const addressrce7LFi = "0x0000000000000000000000000000000000000001"
		const addressFVrkErb = accounts[1]
		const boolY2FiU4 = await Rootkit_financedaWargC.approve.call(addresswXOwuF8, uintvBzbqhW, {from: accounts[2]});
		const booltkBXnpm = await Rootkit_financedaWargC.transferFrom.call(addressFVrkErb, addressrce7LFi, uintLyJiqjk, {from: accounts[1]});

		assert.equal(boolY2FiU4, true)
		assert.equal(booltkBXnpm, false)
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financelEgyX5 = await Rootkit_finance.new({from: accounts[2]});
		const addressv9FzfPx = accounts[4]
		const uintOkzGfU = BigInt("1926")
		const addressmnQYnsu = accounts[2]
		const addressG82uKlv = accounts[3]
		const uintAWvg5Y8 = BigInt("223")
		const addressGsR9Y79 = accounts[3]
		const addresst1Bvls3 = accounts[0]
		const uintqiB8Ov9 = BigInt("1290")
		const addressPsj80oW = accounts[0]
		const address111Ihv = accounts[4]
		const uint256QfrFQct = await Rootkit_financelEgyX5.balanceOf.call(addressv9FzfPx, {from: accounts[2]});
		const boolH70U6sL = await Rootkit_financelEgyX5.transferFrom.call(addressG82uKlv, addressmnQYnsu, uintOkzGfU, {from: accounts[2]});
		const boolIfxIWd = await Rootkit_financelEgyX5.transfer.call(addressGsR9Y79, uintAWvg5Y8, {from: accounts[5]});
		const uint256gJZ7m5u = await Rootkit_financelEgyX5.balanceOf.call(addresst1Bvls3, {from: accounts[0]});
		const boolkegrN4E = await Rootkit_financelEgyX5.transferFrom.call(address111Ihv, addressPsj80oW, uintqiB8Ov9, {from: accounts[1]});

		assert.equal(boolH70U6sL, false)
		assert.equal(boolIfxIWd, false)
		assert.equal(boolkegrN4E, false)
		assert.equal(uint256QfrFQct, BigInt("0"))
		assert.equal(uint256gJZ7m5u, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeA4mAkEY = await Rootkit_finance.new({from: accounts[4]});
		const uintfHFPeWw = BigInt("800")
		const addressEtX4vtm = accounts[2]
		const addressltduNrX = accounts[1]
		const addresslKZ4rwF = accounts[1]
		const uintfgF4w3A = BigInt("2041")
		const addressaPuTTDs = accounts[4]
		const uintpxaCcok = BigInt("4")
		const addressbOVwfA = accounts[0]
		const boolOxzDkvH = await Rootkit_financeA4mAkEY.transfer.call(addressEtX4vtm, uintfHFPeWw, {from: accounts[0]});
		const uintaK9ojf = await Rootkit_financeA4mAkEY.allowance.call(addresslKZ4rwF, addressltduNrX, {from: accounts[1]});
		const uint256mHjMyX8 = await Rootkit_financeA4mAkEY.totalSupply.call({from: accounts[2]});
		const boologtDd4G = await Rootkit_financeA4mAkEY.transfer.call(addressaPuTTDs, uintfgF4w3A, {from: accounts[1]});
		const boolf45uBmh = await Rootkit_financeA4mAkEY.approve.call(addressbOVwfA, uintpxaCcok, {from: accounts[1]});

		assert.equal(boolOxzDkvH, false)
		assert.equal(boolf45uBmh, true)
		assert.equal(boologtDd4G, false)
		assert.equal(uint256mHjMyX8, BigInt("10000000000000000000000"))
		assert.equal(uintaK9ojf, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeqJNmzpw = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfaXWHZR = accounts[0]
		const addressgfoOM1s = accounts[1]
		const addressYyZwyDW = accounts[4]
		const addressyyfnyVA = accounts[3]
		const addresstEhyspg = accounts[1]
		const addressR2tjbhe = accounts[4]
		const addressr8a5Cc9 = accounts[2]
		const uinto1fvd9B = BigInt("406")
		const addressx1X4paO = accounts[2]
		const uintzr1qMEL = await Rootkit_financeqJNmzpw.allowance.call(addressgfoOM1s, addressfaXWHZR, {from: accounts[2]});
		const uinttN6LH6O = await Rootkit_financeqJNmzpw.allowance.call(addressyyfnyVA, addressYyZwyDW, {from: accounts[2]});
		const uintVt9XupU = await Rootkit_financeqJNmzpw.allowance.call(addressR2tjbhe, addresstEhyspg, {from: accounts[2]});
		const uint256WzEuY1l = await Rootkit_financeqJNmzpw.balanceOf.call(addressr8a5Cc9, {from: accounts[3]});
		const boolIuWUGCH = await Rootkit_financeqJNmzpw.transfer.call(addressx1X4paO, uinto1fvd9B, {from: accounts[2]});
	});
})