const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressf3izMKV = "0x0000000000000000000000000000000000000001"
		const addressWVChQyi = accounts[2]
		const SpiritCoinWhCKcSo = await SpiritCoin.new(addressf3izMKV, addressWVChQyi, {from: accounts[2]});
		const uintLzfAdKP = BigInt("480")
		const addressxCDzEu = accounts[5]
		const address7qTS3Y = accounts[4]
		const uintryB1baD = BigInt("722")
		const addressmzMVbFX = accounts[0]
		const uintoR7VEcs = BigInt("199")
		const addressqP1i3tn = accounts[3]
		const boolOWYN4e = await SpiritCoinWhCKcSo.transferFrom.call(address7qTS3Y, addressxCDzEu, uintLzfAdKP, {from: accounts[0]});
		const addresszqbuGOY = await SpiritCoinWhCKcSo.mint.call(addressmzMVbFX, uintryB1baD, {from: accounts[1]});
		const addressJ3sgsC = await SpiritCoinWhCKcSo.mint.call(addressqP1i3tn, uintoR7VEcs, {from: accounts[3]});

		await expect(SpiritCoinWhCKcSo.transferFrom.call(address7qTS3Y, addressxCDzEu, uintLzfAdKP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressdUoytoC = accounts[5]
		const addressVxjzurC = "0x0000000000000000000000000000000000000001"
		const SpiritCoinfBPrRDU = await SpiritCoin.new(addressdUoytoC, addressVxjzurC, {from: accounts[0]});
		const addressYH1JL6 = "0x0000000000000000000000000000000000000001"
		const addressCO3X5I3 = accounts[5]
		const uintX14aFWy = BigInt("1974")
		const addressSK0pSsb = accounts[3]
		const uintmBKb1uj = BigInt("694")
		const addressPs1U5c9 = accounts[2]
		const uintvK8cPWt = BigInt("183")
		const addressKHDPrsU = accounts[5]
		const uintGUwm1GX = BigInt("1584")
		const addressxBsjjv = accounts[3]
		const addressbMQ8H3K = accounts[4]
		const uintGYF9TNv = BigInt("242")
		const addressQO3FdFt = accounts[3]
		const uintqlrQudi = await SpiritCoinfBPrRDU.allowance.call(addressCO3X5I3, addressYH1JL6, {from: accounts[0]});
		const boolsK2JcNk = await SpiritCoinfBPrRDU.transfer.call(addressSK0pSsb, uintX14aFWy, {from: accounts[4]});
		const boolejq4FQy = await SpiritCoinfBPrRDU.approve.call(addressPs1U5c9, uintmBKb1uj, {from: accounts[4]});
		const addressY0KPFog = await SpiritCoinfBPrRDU.mint.call(addressKHDPrsU, uintvK8cPWt, {from: accounts[1]});
		const boolCdfz4CD = await SpiritCoinfBPrRDU.transferFrom.call(addressbMQ8H3K, addressxBsjjv, uintGUwm1GX, {from: accounts[0]});
		const addressNZwFqB8 = await SpiritCoinfBPrRDU.mint.call(addressQO3FdFt, uintGYF9TNv, {from: accounts[1]});

		assert.equal(uintqlrQudi, BigInt("0"))
		await expect(SpiritCoinfBPrRDU.transfer.call(addressSK0pSsb, uintX14aFWy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresse3j9yLj = accounts[3]
		const addressSshWZ6 = accounts[2]
		const SpiritCoinObEUpQe = await SpiritCoin.new(addresse3j9yLj, addressSshWZ6, {from: accounts[1]});
		const uintWx4iu6 = BigInt("745")
		const addressUe8bGl = accounts[5]
		const uintjMi9hbA = BigInt("227")
		const addressFCeNiL5 = accounts[3]
		const addressBR45t54 = accounts[5]
		const uintEb6RCO8 = BigInt("343")
		const addressyh0AI5x = accounts[2]
		const uintzd32hP7 = BigInt("421")
		const addressMw5Rfvy = accounts[2]
		const addresspwueh88 = accounts[1]
		const addressYiYaNJS = accounts[4]
		const addressb0Uocky = accounts[2]
		const addressfHSPop = await SpiritCoinObEUpQe.mint.call(addressUe8bGl, uintWx4iu6, {from: accounts[4]});
		const bool8SqGiS = await SpiritCoinObEUpQe.transferFrom.call(addressBR45t54, addressFCeNiL5, uintjMi9hbA, {from: "0x0000000000000000000000000000000000000001"});
		const addressYiR1Xvf = await SpiritCoinObEUpQe.mint.call(addressyh0AI5x, uintEb6RCO8, {from: accounts[4]});
		const boolYXxVqyR = await SpiritCoinObEUpQe.transferFrom.call(addresspwueh88, addressMw5Rfvy, uintzd32hP7, {from: accounts[2]});
		const uintx8UKvfg = await SpiritCoinObEUpQe.allowance.call(addressb0Uocky, addressYiYaNJS, {from: accounts[2]});

		await expect(SpiritCoinObEUpQe.mint.call(addressUe8bGl, uintWx4iu6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressat2PQHk = "0x0000000000000000000000000000000000000001"
		const addressY0GYR1c = accounts[2]
		const SpiritCoinyWrBYBL = await SpiritCoin.new(addressat2PQHk, addressY0GYR1c, {from: accounts[0]});
		const addresseCTa2d1 = accounts[3]
		const addressz7hI1Nc = accounts[4]
		const addressM1dEMk = accounts[4]
		const uintI8gKaF1 = BigInt("1105")
		const addressO9vxCa3 = accounts[0]
		const addresssqI7JZe = accounts[4]
		const uint8fDWQn = BigInt("326")
		const addresslezv8Uj = accounts[3]
		const uintXmGPwBz = await SpiritCoinyWrBYBL.allowance.call(addressz7hI1Nc, addresseCTa2d1, {from: accounts[4]});
		const addressyBrOEOJ = await SpiritCoinyWrBYBL.setMinter.call(addressM1dEMk, {from: accounts[3]});
		const boolCEinVE = await SpiritCoinyWrBYBL.transferFrom.call(addresssqI7JZe, addressO9vxCa3, uintI8gKaF1, {from: accounts[0]});
		const boolAdyb2o1 = await SpiritCoinyWrBYBL.transfer.call(addresslezv8Uj, uint8fDWQn, {from: accounts[4]});

		assert.equal(uintXmGPwBz, BigInt("0"))
		await expect(SpiritCoinyWrBYBL.setMinter.call(addressM1dEMk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressTJTW75M = accounts[3]
		const addressvgj2CoX = accounts[0]
		const SpiritCoinzl7kKjs = await SpiritCoin.new(addressTJTW75M, addressvgj2CoX, {from: "0x0000000000000000000000000000000000000001"});
		const uintSQ3YqoX = BigInt("311")
		const addressOYqoQhr = accounts[2]
		const uintRsRsTC6 = BigInt("1028")
		const addressh78ZkY1 = accounts[0]
		const uintiifWPXe = BigInt("519")
		const addressaeohx9z = accounts[0]
		const uintgfJbRLl = BigInt("1895")
		const addressT6oCRVh = accounts[2]
		const booldcTdM8o = await SpiritCoinzl7kKjs.transfer.call(addressOYqoQhr, uintSQ3YqoX, {from: accounts[5]});
		const bool5YRsMF = await SpiritCoinzl7kKjs.transfer.call(addressh78ZkY1, uintRsRsTC6, {from: accounts[0]});
		const boolpudMp1S = await SpiritCoinzl7kKjs.approve.call(addressaeohx9z, uintiifWPXe, {from: accounts[4]});
		const boolBoWoCKG = await SpiritCoinzl7kKjs.approve.call(addressT6oCRVh, uintgfJbRLl, {from: accounts[1]});
	});

	it('test for SpiritCoin', async () => {
		const addressZlK8NQr = "0x0000000000000000000000000000000000000001"
		const addressVEZEbzW = accounts[2]
		const SpiritCoinWhCKcSo = await SpiritCoin.new(addressZlK8NQr, addressVEZEbzW, {from: accounts[2]});
		const addressVeRpPmq = "0x0000000000000000000000000000000000000001"
		const addresssbnMYRw = accounts[4]
		const addressJKJku7y = accounts[5]
		const uintJSs1iDi = BigInt("480")
		const addresscNi6lWq = accounts[5]
		const addressEbNFTaO = accounts[4]
		const uintokI4Eq0 = BigInt("722")
		const addressT6Y4bdU = accounts[0]
		const uintinNi4AI = BigInt("198")
		const addresswN9fBGl = accounts[3]
		const uintcEcZUPv = await SpiritCoinWhCKcSo.allowance.call(addresssbnMYRw, addressVeRpPmq, {from: accounts[1]});
		const uintlTJFIR4 = await SpiritCoinWhCKcSo.balanceOf.call(addressJKJku7y, {from: accounts[1]});
		const boolOWYN4e = await SpiritCoinWhCKcSo.transferFrom.call(addressEbNFTaO, addresscNi6lWq, uintJSs1iDi, {from: accounts[0]});
		const addresszqbuGOY = await SpiritCoinWhCKcSo.mint.call(addressT6Y4bdU, uintokI4Eq0, {from: accounts[1]});
		const addressJ3sgsC = await SpiritCoinWhCKcSo.mint.call(addresswN9fBGl, uintinNi4AI, {from: accounts[3]});

		assert.equal(uintcEcZUPv, BigInt("0"))
		assert.equal(uintlTJFIR4, BigInt("0"))
		await expect(SpiritCoinWhCKcSo.transferFrom.call(addressEbNFTaO, addresscNi6lWq, uintJSs1iDi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressqalqGJ6 = accounts[1]
		const addressvbFfqYs = accounts[3]
		const SpiritCoinQZeVNfL = await SpiritCoin.new(addressqalqGJ6, addressvbFfqYs, {from: accounts[5]});
		const uintDqyqeH7 = BigInt("609")
		const addressALMxrc6 = accounts[3]
		const addressyKoIFZM = accounts[5]
		const addressOK1u7Se = accounts[1]
		const uintatUKU2E = BigInt("1810")
		const addresscrPBp86 = accounts[3]
		const addresssL95IZs = accounts[5]
		const addressRa0RakV = accounts[4]
		const boollSfhYcD = await SpiritCoinQZeVNfL.approve.call(addressALMxrc6, uintDqyqeH7, {from: accounts[4]});
		const addressFIdxy8 = await SpiritCoinQZeVNfL.setMinter.call(addressyKoIFZM, {from: accounts[0]});
		const uint4sJjyL = await SpiritCoinQZeVNfL.balanceOf.call(addressOK1u7Se, {from: accounts[5]});
		const boolqkjKajr = await SpiritCoinQZeVNfL.transfer.call(addresscrPBp86, uintatUKU2E, {from: "0x0000000000000000000000000000000000000001"});
		const uintsTYlpXi = await SpiritCoinQZeVNfL.allowance.call(addressRa0RakV, addresssL95IZs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boollSfhYcD, true)
		await expect(SpiritCoinQZeVNfL.setMinter.call(addressyKoIFZM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresspbay8UB = accounts[2]
		const addressSVK6o5 = accounts[3]
		const SpiritCoiniiY3RN6 = await SpiritCoin.new(addresspbay8UB, addressSVK6o5, {from: accounts[0]});
		const uintCPDAsbo = BigInt("1505")
		const addressSISPRQ2 = accounts[3]
		const addressLtxyTB4 = accounts[2]
		const uintGrf8O4j = BigInt("559")
		const addressjOTQMM5 = accounts[2]
		const uintZ1oPhL = BigInt("238")
		const addressQffPr3y = accounts[0]
		const boolvYUb1i = await SpiritCoiniiY3RN6.transferFrom.call(addressLtxyTB4, addressSISPRQ2, uintCPDAsbo, {from: accounts[2]});
		const boolGi0CVSl = await SpiritCoiniiY3RN6.transfer.call(addressjOTQMM5, uintGrf8O4j, {from: accounts[0]});
		const boolUu9mPpV = await SpiritCoiniiY3RN6.transfer.call(addressQffPr3y, uintZ1oPhL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolvYUb1i, true)
		await expect(SpiritCoiniiY3RN6.transfer.call(addressjOTQMM5, uintGrf8O4j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressPRGBRo6 = "0x0000000000000000000000000000000000000001"
		const addressjIbi2lT = accounts[2]
		const SpiritCoinWhCKcSo = await SpiritCoin.new(addressPRGBRo6, addressjIbi2lT, {from: accounts[2]});
		const uintfrTUkgH = BigInt("361")
		const addresslKOzYFv = accounts[2]
		const uintMHooE70 = BigInt("894")
		const addressrlDVpSt = "0x0000000000000000000000000000000000000001"
		const uintbkTVcAU = BigInt("480")
		const addresslAK3duM = accounts[5]
		const addressrwA1YoN = accounts[4]
		const addressXT5NZIT = await SpiritCoinWhCKcSo.mint.call(addresslKOzYFv, uintfrTUkgH, {from: accounts[2]});
		const boolFOo4YRj = await SpiritCoinWhCKcSo.approve.call(addressrlDVpSt, uintMHooE70, {from: accounts[0]});
		const boolOWYN4e = await SpiritCoinWhCKcSo.transferFrom.call(addressrwA1YoN, addresslAK3duM, uintbkTVcAU, {from: accounts[0]});

		assert.equal(boolFOo4YRj, true)
		await expect(SpiritCoinWhCKcSo.transferFrom.call(addressrwA1YoN, addresslAK3duM, uintbkTVcAU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressX8n4qrt = accounts[4]
		const addresscJxpRBc = accounts[2]
		const SpiritCoinGxSJkTG = await SpiritCoin.new(addressX8n4qrt, addresscJxpRBc, {from: accounts[3]});
		const addressgHXV9jP = accounts[1]
		const addressP6fvZf = accounts[1]
		const addressmtcOuj3 = accounts[1]
		const addressttzQLn = accounts[2]
		const addressNunfhOF = await SpiritCoinGxSJkTG.setMinter.call(addressgHXV9jP, {from: accounts[2]});
		const uintEWt0aUv = await SpiritCoinGxSJkTG.balanceOf.call(addressP6fvZf, {from: accounts[4]});
		const uintVPnExSE = await SpiritCoinGxSJkTG.allowance.call(addressttzQLn, addressmtcOuj3, {from: accounts[1]});

		assert.equal(uintEWt0aUv, BigInt("0"))
		assert.equal(uintVPnExSE, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressyJcu3j = "0x0000000000000000000000000000000000000001"
		const address856XOb = accounts[2]
		const SpiritCoinWhCKcSo = await SpiritCoin.new(addressyJcu3j, address856XOb, {from: accounts[2]});
		const addressLYYWMQ = accounts[5]
		const addressYMBJTH9 = accounts[2]
		const uint0usOKI = BigInt("27")
		const addressen07Yf3 = "0x0000000000000000000000000000000000000001"
		const addressriucaEB = accounts[0]
		const addressBI66Q6h = accounts[3]
		const uintZuvQ4Fq = BigInt("1384")
		const addressDRbRSC9 = "0x0000000000000000000000000000000000000000"
		const uintxu4ox2x = BigInt("340")
		const addressjMlsnsX = accounts[0]
		const uintrWIOuTg = BigInt("419")
		const addressSkVVVZ = accounts[2]
		const uintq8At0vG = await SpiritCoinWhCKcSo.balanceOf.call(addressLYYWMQ, {from: accounts[1]});
		const addressDEWBA9v = await SpiritCoinWhCKcSo.setMinter.call(addressYMBJTH9, {from: accounts[2]});
		const booltKhV3B = await SpiritCoinWhCKcSo.approve.call(addressen07Yf3, uint0usOKI, {from: accounts[1]});
		const uintj9sHfaY = await SpiritCoinWhCKcSo.allowance.call(addressBI66Q6h, addressriucaEB, {from: accounts[3]});
		const addressHBfLjzj = await SpiritCoinWhCKcSo.mint.call(addressDRbRSC9, uintZuvQ4Fq, {from: accounts[2]});
		const addressXT5NZIT = await SpiritCoinWhCKcSo.mint.call(addressjMlsnsX, uintxu4ox2x, {from: accounts[2]});
		const booloWaaUUX = await SpiritCoinWhCKcSo.approve.call(addressSkVVVZ, uintrWIOuTg, {from: accounts[1]});

		assert.equal(booltKhV3B, true)
		assert.equal(uintj9sHfaY, BigInt("0"))
		assert.equal(uintq8At0vG, BigInt("0"))
		await expect(SpiritCoinWhCKcSo.mint.call(addressDRbRSC9, uintZuvQ4Fq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressaxs129G = "0x0000000000000000000000000000000000000001"
		const addressqoXlt7C = accounts[2]
		const SpiritCoinWhCKcSo = await SpiritCoin.new(addressaxs129G, addressqoXlt7C, {from: accounts[2]});
		const addresszeYCFLy = accounts[4]
		const uint9uUGaB = BigInt("23")
		const addressTf6WbwM = "0x00000000000000000000000000000000000000-1"
		const uintc3wuwob = BigInt("1384")
		const addresswMi1O51 = "0x0000000000000000000000000000000000000001"
		const uintwyuwmSv = BigInt("340")
		const addresscxkwlOo = accounts[4]
		const uintq8At0vG = await SpiritCoinWhCKcSo.balanceOf.call(addresszeYCFLy, {from: accounts[1]});
		const booltKhV3B = await SpiritCoinWhCKcSo.approve.call(addressTf6WbwM, uint9uUGaB, {from: accounts[1]});
		const addressHBfLjzj = await SpiritCoinWhCKcSo.mint.call(addresswMi1O51, uintc3wuwob, {from: accounts[2]});
		const addressXT5NZIT = await SpiritCoinWhCKcSo.mint.call(addresscxkwlOo, uintwyuwmSv, {from: accounts[2]});

		assert.equal(uintq8At0vG, BigInt("0"))
		await expect(SpiritCoinWhCKcSo.approve.call(addressTf6WbwM, uint9uUGaB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})