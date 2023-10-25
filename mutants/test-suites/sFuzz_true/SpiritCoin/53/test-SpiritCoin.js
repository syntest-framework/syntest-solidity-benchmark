const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressOEoLXAF = accounts[4]
		const addressx5U1Bx = accounts[1]
		const SpiritCoinJXlmFXi = await SpiritCoin.new(addressOEoLXAF, addressx5U1Bx, {from: accounts[0]});
		const uintZQI8Lc6 = BigInt("1036")
		const addressiXzGZM = accounts[3]
		const addressRoo45D7 = accounts[4]
		const addressgyhmdpj = accounts[1]
		const boolzGMeGu = await SpiritCoinJXlmFXi.approve.call(addressiXzGZM, uintZQI8Lc6, {from: accounts[2]});
		const uintddMTCzT = await SpiritCoinJXlmFXi.allowance.call(addressgyhmdpj, addressRoo45D7, {from: accounts[3]});

		assert.equal(boolzGMeGu, true)
		assert.equal(uintddMTCzT, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addresso5TQC6P = accounts[2]
		const addressCIN88bH = accounts[4]
		const SpiritCoinYfXFe1c = await SpiritCoin.new(addresso5TQC6P, addressCIN88bH, {from: accounts[0]});
		const uintIweY9Wc = BigInt("107")
		const addressTxhxI9f = accounts[2]
		const uintIMZjYY = BigInt("383")
		const addressityI0PG = accounts[1]
		const uintIeUUoDc = BigInt("953")
		const addressYwii7qe = accounts[1]
		const booldbHTdW = await SpiritCoinYfXFe1c.approve.call(addressTxhxI9f, uintIweY9Wc, {from: accounts[3]});
//		const addressGDpjGOo = await SpiritCoinYfXFe1c.mint.call(addressityI0PG, uintIMZjYY, {from: accounts[1]});
//		const bool5ZfMYi = await SpiritCoinYfXFe1c.approve.call(addressYwii7qe, uintIeUUoDc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldbHTdW, true)
		await expect(SpiritCoinYfXFe1c.mint.call(addressityI0PG, uintIMZjYY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressH9gqIo = accounts[2]
		const addressiMBOG0P = accounts[3]
		const SpiritCoinyCdVBiy = await SpiritCoin.new(addressH9gqIo, addressiMBOG0P, {from: accounts[4]});
		const addresspm5aJgz = accounts[2]
		const uintoFJDkjx = BigInt("340")
		const addressOopcEA4 = accounts[3]
		const uintE04x3f = BigInt("1169")
		const addressRF0Vbp = accounts[5]
		const addressjgc8C00 = accounts[4]
		const addressK3vYvPa = accounts[3]
		const addresszP4WbFD = accounts[2]
		const uintAXeXVjT = await SpiritCoinyCdVBiy.balanceOf.call(addresspm5aJgz, {from: accounts[2]});
		const boolpJss01A = await SpiritCoinyCdVBiy.transfer.call(addressOopcEA4, uintoFJDkjx, {from: accounts[2]});
		const boolPvdnAP = await SpiritCoinyCdVBiy.transfer.call(addressRF0Vbp, uintE04x3f, {from: accounts[2]});
		const uintdie2dr = await SpiritCoinyCdVBiy.allowance.call(addressK3vYvPa, addressjgc8C00, {from: accounts[5]});
		const uintYJMOaAr = await SpiritCoinyCdVBiy.balanceOf.call(addresszP4WbFD, {from: accounts[0]});

		assert.equal(boolPvdnAP, true)
		assert.equal(boolpJss01A, true)
		assert.equal(uintAXeXVjT, BigInt("10000000000000000000000000"))
		assert.equal(uintYJMOaAr, BigInt("10000000000000000000000000"))
		assert.equal(uintdie2dr, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressLDkvC5M = accounts[5]
		const addressvqNKvTU = accounts[2]
		const SpiritCoingQxGIUC = await SpiritCoin.new(addressLDkvC5M, addressvqNKvTU, {from: accounts[4]});
		const uintBVxJEjo = BigInt("1564")
		const addressr7Hpzwt = accounts[1]
		const uintzYXBi1Q = BigInt("904")
		const addressS0nvoE9 = accounts[3]
		const uintV18OrZZ = BigInt("1565")
		const addressoo3LjP0 = accounts[4]
		const addressbo5NOG0 = accounts[2]
		const addressXR9KWBL = accounts[4]
		const addressFU96844 = accounts[4]
		const addressvDgceKG = await SpiritCoingQxGIUC.mint.call(addressr7Hpzwt, uintBVxJEjo, {from: accounts[2]});
//		const addresssiDTPuU = await SpiritCoingQxGIUC.mint.call(addressS0nvoE9, uintzYXBi1Q, {from: accounts[1]});
//		const boolJ0k6rA = await SpiritCoingQxGIUC.transferFrom.call(addressbo5NOG0, addressoo3LjP0, uintV18OrZZ, {from: accounts[4]});
//		const uintwuf1to1 = await SpiritCoingQxGIUC.allowance.call(addressFU96844, addressXR9KWBL, {from: accounts[0]});

		await expect(SpiritCoingQxGIUC.mint.call(addressS0nvoE9, uintzYXBi1Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresslajXwKq = accounts[2]
		const address3fcoty = accounts[3]
		const SpiritCoinkLqdr9n = await SpiritCoin.new(addresslajXwKq, address3fcoty, {from: accounts[3]});
		const uintimUG994 = BigInt("634")
		const addressNT9C3ry = accounts[3]
		const uintUjRm2a = BigInt("792")
		const addressxGrz880 = accounts[1]
		const uintnS7h2ai = BigInt("1045")
		const addressvVS4Vm = accounts[5]
//		const booljqDbWN = await SpiritCoinkLqdr9n.transfer.call(addressNT9C3ry, uintimUG994, {from: accounts[3]});
//		const addressZGJJZSd = await SpiritCoinkLqdr9n.mint.call(addressxGrz880, uintUjRm2a, {from: accounts[2]});
//		const boolkfHK6R = await SpiritCoinkLqdr9n.approve.call(addressvVS4Vm, uintnS7h2ai, {from: accounts[3]});

		await expect(SpiritCoinkLqdr9n.transfer.call(addressNT9C3ry, uintimUG994, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresspZtkgu = accounts[2]
		const addressf3FTSu = accounts[0]
		const SpiritCoinJ8jOq4 = await SpiritCoin.new(addresspZtkgu, addressf3FTSu, {from: accounts[2]});
		const uintRXP0ReP = BigInt("1498")
		const addressNMThukZ = accounts[5]
		const uinthsvgEl6 = BigInt("1902")
		const addressa5XA7RP = accounts[3]
		const addressvDB0g8p = accounts[4]
		const uintlJhhMyE = BigInt("87")
		const addressKTemTZ9 = "0x0000000000000000000000000000000000000001"
		const boolxaf1La6 = await SpiritCoinJ8jOq4.approve.call(addressNMThukZ, uintRXP0ReP, {from: accounts[1]});
		const boolvySWxHZ = await SpiritCoinJ8jOq4.approve.call(addressa5XA7RP, uinthsvgEl6, {from: accounts[4]});
//		const addresslv1uJJ = await SpiritCoinJ8jOq4.setMinter.call(addressvDB0g8p, {from: accounts[2]});
//		const boolR33YyBc = await SpiritCoinJ8jOq4.approve.call(addressKTemTZ9, uintlJhhMyE, {from: accounts[3]});

		assert.equal(boolvySWxHZ, true)
		assert.equal(boolxaf1La6, true)
		await expect(SpiritCoinJ8jOq4.setMinter.call(addressvDB0g8p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressKzfnufo = accounts[4]
		const addressEYjTW1w = accounts[1]
		const SpiritCoinJXlmFXi = await SpiritCoin.new(addressKzfnufo, addressEYjTW1w, {from: accounts[0]});
		const addressPtWqhOO = "0x0000000000000000000000000000000000000001"
		const uintUQUe2UL = BigInt("1036")
		const addressGRLMUCL = accounts[3]
		const addressVxDkiCg = accounts[5]
		const addressYZ62e7G = accounts[4]
		const addressd0i94aa = accounts[1]
		const addressWaZdLR = await SpiritCoinJXlmFXi.setMinter.call(addressPtWqhOO, {from: accounts[1]});
		const boolzGMeGu = await SpiritCoinJXlmFXi.approve.call(addressGRLMUCL, uintUQUe2UL, {from: accounts[2]});
//		const addressOyjbDG5 = await SpiritCoinJXlmFXi.setMinter.call(addressVxDkiCg, {from: accounts[3]});
//		const uintddMTCzT = await SpiritCoinJXlmFXi.allowance.call(addressd0i94aa, addressYZ62e7G, {from: accounts[3]});

		assert.equal(boolzGMeGu, true)
		await expect(SpiritCoinJXlmFXi.setMinter.call(addressVxDkiCg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressYZlbqoc = accounts[1]
		const addressMpAWuYT = accounts[1]
		const SpiritCoinhtFBJOM = await SpiritCoin.new(addressYZlbqoc, addressMpAWuYT, {from: accounts[5]});
		const uintpf7ra8f = BigInt("1193")
		const addressHBcFKV9 = accounts[4]
		const addressjjAFtAM = "0x0000000000000000000000000000000000000001"
		const uintNh7tUbT = BigInt("51")
		const addresspspe9ka = accounts[0]
		const addressCHYhzlB = accounts[5]
		const addressG43DPW8 = accounts[4]
//		const boolMRcf8nD = await SpiritCoinhtFBJOM.transferFrom.call(addressjjAFtAM, addressHBcFKV9, uintpf7ra8f, {from: accounts[4]});
//		const boolzTZqFsV = await SpiritCoinhtFBJOM.transfer.call(addresspspe9ka, uintNh7tUbT, {from: accounts[4]});
//		const uintuotXNTs = await SpiritCoinhtFBJOM.allowance.call(addressG43DPW8, addressCHYhzlB, {from: accounts[2]});

		await expect(SpiritCoinhtFBJOM.transferFrom.call(addressjjAFtAM, addressHBcFKV9, uintpf7ra8f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresseAsM2xM = "0x0000000000000000000000000000000000000001"
		const addressGFj1jAA = "0x0000000000000000000000000000000000000001"
		const SpiritCoinYJbPr3u = await SpiritCoin.new(addresseAsM2xM, addressGFj1jAA, {from: "0x0000000000000000000000000000000000000001"});
		const uintDjpQi6e = BigInt("1409")
		const addressK2Dl0vm = accounts[0]
		const addressU4NN7HR = accounts[4]
		const uintNM2aKE = BigInt("1747")
		const address9SLPfv = accounts[3]
		const uintN1y2MlT = BigInt("850")
		const addressczYNjXP = accounts[3]
		const uintu0UFggX = BigInt("1051")
		const addressOVuPYju = accounts[3]
		const boolbWxjjxj = await SpiritCoinYJbPr3u.transferFrom.call(addressU4NN7HR, addressK2Dl0vm, uintDjpQi6e, {from: accounts[2]});
		const boolKd0fqh0 = await SpiritCoinYJbPr3u.approve.call(address9SLPfv, uintNM2aKE, {from: "0x0000000000000000000000000000000000000001"});
		const boolwi13ZAc = await SpiritCoinYJbPr3u.approve.call(addressczYNjXP, uintN1y2MlT, {from: accounts[2]});
		const boolGS8Hrwb = await SpiritCoinYJbPr3u.approve.call(addressOVuPYju, uintu0UFggX, {from: accounts[0]});
	});
})