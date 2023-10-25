const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressC9xBaJb = accounts[3]
		const addressIVN9KOg = accounts[0]
		const SpiritCoinCBLlD0 = await SpiritCoin.new(addressC9xBaJb, addressIVN9KOg, {from: accounts[1]});
		const uintPMSnRF = BigInt("247")
		const addressroLS2aY = "0x0000000000000000000000000000000000000001"
		const uintaUOT0Gz = BigInt("1914")
		const addressOfMmcD = "0x0000000000000000000000000000000000000001"
		const uintCyeaBgw = BigInt("1858")
		const addressqlIT74v = accounts[2]
		const addressgX68CCM = accounts[0]
		const uintuCQnfZy = BigInt("2002")
		const addressYsaaWSF = accounts[4]
//		const addressOXKFJVz = await SpiritCoinCBLlD0.mint.call(addressroLS2aY, uintPMSnRF, {from: accounts[2]});
//		const boolnjVEU2u = await SpiritCoinCBLlD0.approve.call(addressOfMmcD, uintaUOT0Gz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolweeOoaU = await SpiritCoinCBLlD0.approve.call(addressqlIT74v, uintCyeaBgw, {from: accounts[3]});
//		const uintOifqsGN = await SpiritCoinCBLlD0.balanceOf.call(addressgX68CCM, {from: accounts[3]});
//		const addressUCVn4Gb = await SpiritCoinCBLlD0.mint.call(addressYsaaWSF, uintuCQnfZy, {from: accounts[4]});

		await expect(SpiritCoinCBLlD0.mint.call(addressroLS2aY, uintPMSnRF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresshY8X43F = accounts[2]
		const addressLvmAahY = accounts[2]
		const SpiritCoinRM4DRVO = await SpiritCoin.new(addresshY8X43F, addressLvmAahY, {from: accounts[3]});
		const addressrTlLpGr = accounts[3]
		const addressmKyjiu0 = accounts[3]
		const uintrfaOXi1 = BigInt("10")
		const addressw7cC2fq = accounts[3]
		const uintKI70ZY = BigInt("1688")
		const addressgHEf2We = accounts[3]
		const uintVJpJbrV = BigInt("159")
		const addresscRdt6cH = "0x0000000000000000000000000000000000000001"
		const addresssWSKX4N = accounts[0]
		const addressiqpX43o = accounts[0]
		const addressVnOKmb7 = accounts[3]
		const uintGXzH28D = await SpiritCoinRM4DRVO.allowance.call(addressmKyjiu0, addressrTlLpGr, {from: accounts[2]});
		const boolzRSbNkv = await SpiritCoinRM4DRVO.approve.call(addressw7cC2fq, uintrfaOXi1, {from: accounts[1]});
//		const boolKZMtmFd = await SpiritCoinRM4DRVO.transfer.call(addressgHEf2We, uintKI70ZY, {from: accounts[1]});
//		const addressjqAEFr5 = await SpiritCoinRM4DRVO.mint.call(addresscRdt6cH, uintVJpJbrV, {from: accounts[5]});
//		const uintxZKcbU = await SpiritCoinRM4DRVO.balanceOf.call(addresssWSKX4N, {from: accounts[1]});
//		const uintiW1imlT = await SpiritCoinRM4DRVO.allowance.call(addressVnOKmb7, addressiqpX43o, {from: accounts[2]});

		assert.equal(boolzRSbNkv, true)
		assert.equal(uintGXzH28D, BigInt("0"))
		await expect(SpiritCoinRM4DRVO.transfer.call(addressgHEf2We, uintKI70ZY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresswQ72zw = accounts[1]
		const addressBmrxkIB = accounts[0]
		const SpiritCoinvvhPcyA = await SpiritCoin.new(addresswQ72zw, addressBmrxkIB, {from: accounts[2]});
		const addressjQf9M34 = accounts[4]
		const addresspwsrg5 = accounts[3]
		const uinthxv9Wbm = BigInt("547")
		const addressjuJ3nnX = accounts[2]
		const addresszmo1zXs = accounts[3]
		const addressqN6Py1h = accounts[2]
		const uintdSCkqrN = BigInt("603")
		const addressZT90UjE = accounts[0]
		const addressY1KjrNx = accounts[4]
		const uintF6hxdvl = await SpiritCoinvvhPcyA.balanceOf.call(addressjQf9M34, {from: accounts[4]});
		const uint4r8Rmn = await SpiritCoinvvhPcyA.balanceOf.call(addresspwsrg5, {from: accounts[4]});
		const boolO0JFABG = await SpiritCoinvvhPcyA.approve.call(addressjuJ3nnX, uinthxv9Wbm, {from: accounts[1]});
//		const addressat0XZFp = await SpiritCoinvvhPcyA.setMinter.call(addresszmo1zXs, {from: "0x0000000000000000000000000000000000000001"});
//		const addressCWnFAET = await SpiritCoinvvhPcyA.setMinter.call(addressqN6Py1h, {from: accounts[4]});
//		const boolEEQ3sQq = await SpiritCoinvvhPcyA.transferFrom.call(addressY1KjrNx, addressZT90UjE, uintdSCkqrN, {from: accounts[5]});

		assert.equal(boolO0JFABG, true)
		assert.equal(uint4r8Rmn, BigInt("0"))
		assert.equal(uintF6hxdvl, BigInt("0"))
		await expect(SpiritCoinvvhPcyA.setMinter.call(addresszmo1zXs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressNCY5GPp = accounts[4]
		const addressLVgcGxY = accounts[4]
		const SpiritCoinilXwUB = await SpiritCoin.new(addressNCY5GPp, addressLVgcGxY, {from: "0x0000000000000000000000000000000000000001"});
		const uintiGOks0l = BigInt("221")
		const addressXD0KuEn = accounts[5]
		const uintBSkliZ = BigInt("2001")
		const addressyEmyqSr = accounts[1]
		const boolyR4SZd = await SpiritCoinilXwUB.transfer.call(addressXD0KuEn, uintiGOks0l, {from: accounts[3]});
		const boolc7a7BaX = await SpiritCoinilXwUB.transfer.call(addressyEmyqSr, uintBSkliZ, {from: accounts[2]});
	});

	it('test for SpiritCoin', async () => {
		const addressWLarCIP = accounts[1]
		const addressubvyibR = accounts[0]
		const SpiritCoinvvhPcyA = await SpiritCoin.new(addressWLarCIP, addressubvyibR, {from: accounts[2]});
		const addressuxLzoWS = accounts[4]
		const addressoMRp7bv = accounts[3]
		const uintqFifC9E = BigInt("384")
		const addressP2TRSVx = accounts[2]
		const addressltiOk7y = accounts[0]
		const uintgod1R3e = BigInt("547")
		const addressfmmw1Nq = accounts[2]
		const addresskHnKatx = accounts[3]
		const address8Hx6en = accounts[5]
		const uintEHfLQ96 = BigInt("1767")
		const address2UGPEw = accounts[1]
		const uints3eq5eG = BigInt("603")
		const addressGiuIvbI = accounts[0]
		const addresstIJm39 = accounts[4]
		const uintMtJhbYz = BigInt("1864")
		const addressF01LFb = accounts[1]
		const uintF6hxdvl = await SpiritCoinvvhPcyA.balanceOf.call(addressuxLzoWS, {from: accounts[4]});
		const uint4r8Rmn = await SpiritCoinvvhPcyA.balanceOf.call(addressoMRp7bv, {from: accounts[4]});
//		const booltcI6Bta = await SpiritCoinvvhPcyA.transferFrom.call(addressltiOk7y, addressP2TRSVx, uintqFifC9E, {from: accounts[4]});
//		const boolO0JFABG = await SpiritCoinvvhPcyA.approve.call(addressfmmw1Nq, uintgod1R3e, {from: accounts[1]});
//		const addressat0XZFp = await SpiritCoinvvhPcyA.setMinter.call(addresskHnKatx, {from: "0x0000000000000000000000000000000000000001"});
//		const addressCWnFAET = await SpiritCoinvvhPcyA.setMinter.call(address8Hx6en, {from: accounts[4]});
//		const boolctGmS6n = await SpiritCoinvvhPcyA.approve.call(address2UGPEw, uintEHfLQ96, {from: accounts[3]});
//		const boolEEQ3sQq = await SpiritCoinvvhPcyA.transferFrom.call(addresstIJm39, addressGiuIvbI, uints3eq5eG, {from: accounts[5]});
//		const addressyl5YFPw = await SpiritCoinvvhPcyA.mint.call(addressF01LFb, uintMtJhbYz, {from: accounts[1]});

		assert.equal(uint4r8Rmn, BigInt("0"))
		assert.equal(uintF6hxdvl, BigInt("0"))
		await expect(SpiritCoinvvhPcyA.transferFrom.call(addressltiOk7y, addressP2TRSVx, uintqFifC9E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressd9uIXv = accounts[2]
		const addressYOikl65 = accounts[2]
		const SpiritCoinRM4DRVO = await SpiritCoin.new(addressd9uIXv, addressYOikl65, {from: accounts[3]});
		const addressANho0R4 = accounts[3]
		const addressct2Jo85 = accounts[3]
		const uintKVI4cAz = BigInt("0")
		const addressfQFbybS = accounts[3]
		const uintentpw3Q = BigInt("699")
		const addressFWreAxu = accounts[5]
		const uintOYRvaOM = BigInt("1695")
		const addressyd79TyI = accounts[4]
		const uintQyi346g = BigInt("1936")
		const addressUIWfClw = accounts[1]
		const uintamiMSC5 = BigInt("159")
		const addressEUnB5r5 = "0x0000000000000000000000000000000000000001"
		const uintZZGUmuY = BigInt("1272")
		const addressymXiBqo = accounts[2]
		const addressrh5zZZm = accounts[5]
		const addressIxCoH4D = accounts[1]
		const uintGXzH28D = await SpiritCoinRM4DRVO.allowance.call(addressct2Jo85, addressANho0R4, {from: accounts[2]});
		const boolzRSbNkv = await SpiritCoinRM4DRVO.approve.call(addressfQFbybS, uintKVI4cAz, {from: accounts[1]});
		const booluHhDuow = await SpiritCoinRM4DRVO.transfer.call(addressFWreAxu, uintentpw3Q, {from: accounts[2]});
//		const boolKZMtmFd = await SpiritCoinRM4DRVO.transfer.call(addressyd79TyI, uintOYRvaOM, {from: accounts[1]});
//		const boolNjSa6L1 = await SpiritCoinRM4DRVO.transfer.call(addressUIWfClw, uintQyi346g, {from: accounts[1]});
//		const addressjqAEFr5 = await SpiritCoinRM4DRVO.mint.call(addressEUnB5r5, uintamiMSC5, {from: accounts[5]});
//		const boolOk5jRGu = await SpiritCoinRM4DRVO.transferFrom.call(addressrh5zZZm, addressymXiBqo, uintZZGUmuY, {from: accounts[4]});
//		const uintxZKcbU = await SpiritCoinRM4DRVO.balanceOf.call(addressIxCoH4D, {from: accounts[1]});

		assert.equal(booluHhDuow, true)
		assert.equal(boolzRSbNkv, true)
		assert.equal(uintGXzH28D, BigInt("0"))
		await expect(SpiritCoinRM4DRVO.transfer.call(addressyd79TyI, uintOYRvaOM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressnyFEffu = accounts[2]
		const addressNjN6Xz6 = accounts[2]
		const SpiritCoinRM4DRVO = await SpiritCoin.new(addressnyFEffu, addressNjN6Xz6, {from: accounts[3]});
		const addressdlCjQp = accounts[4]
		const addressNkrTSUV = accounts[3]
		const uintL5L0FyW = BigInt("0")
		const addressEukEnMb = accounts[4]
		const uintvG9x6k = BigInt("432")
		const addressb4gvqX9 = accounts[4]
		const uintkt5gtYZ = BigInt("1774")
		const addressgCZSQ7y = "0x0000000000000000000000000000000000000001"
		const uint1pWA7C = BigInt("1688")
		const addressbbXYsRb = accounts[5]
		const uintvlknNQ6 = BigInt("159")
		const addressTLIWqpW = "0x0000000000000000000000000000000000000001"
		const addressW3S0rpO = accounts[1]
		const uintGXzH28D = await SpiritCoinRM4DRVO.allowance.call(addressNkrTSUV, addressdlCjQp, {from: accounts[2]});
		const boolzRSbNkv = await SpiritCoinRM4DRVO.approve.call(addressEukEnMb, uintL5L0FyW, {from: accounts[1]});
		const addressdjTh2WZ = await SpiritCoinRM4DRVO.mint.call(addressb4gvqX9, uintvG9x6k, {from: accounts[2]});
//		const addressnKFp6E = await SpiritCoinRM4DRVO.mint.call(addressgCZSQ7y, uintkt5gtYZ, {from: accounts[4]});
//		const boolKZMtmFd = await SpiritCoinRM4DRVO.transfer.call(addressbbXYsRb, uint1pWA7C, {from: accounts[1]});
//		const addressjqAEFr5 = await SpiritCoinRM4DRVO.mint.call(addressTLIWqpW, uintvlknNQ6, {from: accounts[5]});
//		const uintxZKcbU = await SpiritCoinRM4DRVO.balanceOf.call(addressW3S0rpO, {from: accounts[1]});

		assert.equal(boolzRSbNkv, true)
		assert.equal(uintGXzH28D, BigInt("0"))
		await expect(SpiritCoinRM4DRVO.mint.call(addressgCZSQ7y, uintkt5gtYZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})