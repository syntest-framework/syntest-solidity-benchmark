const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressKrZQzW = accounts[5]
		const addressEmCH9Z = accounts[4]
		const SpiritCoinuw9jsAn = await SpiritCoin.new(addressKrZQzW, addressEmCH9Z, {from: accounts[1]});
		const addressBXbV3nc = accounts[3]
		const addressb9ML1DY = accounts[3]
		const addressb5o2rt = accounts[1]
		const addressWywCzxg = accounts[3]
		const uintfccLpeI = BigInt("1138")
		const addressPQ5JbHx = accounts[0]
		const uintGkvkqCH = BigInt("214")
		const addresszMWNryz = accounts[0]
		const addressFLTczd1 = accounts[4]
		const addressRI8SbBE = accounts[1]
		const uintAew0QmA = await SpiritCoinuw9jsAn.allowance.call(addressb9ML1DY, addressBXbV3nc, {from: accounts[4]});
		const uintjm5YMKg = await SpiritCoinuw9jsAn.allowance.call(addressWywCzxg, addressb5o2rt, {from: accounts[1]});
		const address9nrI1f = await SpiritCoinuw9jsAn.mint.call(addressPQ5JbHx, uintfccLpeI, {from: accounts[1]});
		const booltx8Ewvv = await SpiritCoinuw9jsAn.approve.call(addresszMWNryz, uintGkvkqCH, {from: accounts[1]});
		const uintfbbZUWM = await SpiritCoinuw9jsAn.allowance.call(addressRI8SbBE, addressFLTczd1, {from: accounts[1]});

		assert.equal(uintAew0QmA, BigInt("0"))
		assert.equal(uintjm5YMKg, BigInt("0"))
		await expect(SpiritCoinuw9jsAn.mint.call(addressPQ5JbHx, uintfccLpeI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressbYASQ1j = accounts[1]
		const addressm5k1LH = "0x0000000000000000000000000000000000000001"
		const SpiritCoinEKgMFhU = await SpiritCoin.new(addressbYASQ1j, addressm5k1LH, {from: accounts[2]});
		const addresslWnM80 = accounts[1]
		const uintZClFNtK = BigInt("1101")
		const addressx6FPPBd = accounts[2]
		const uintucFl7Wg = await SpiritCoinEKgMFhU.balanceOf.call(addresslWnM80, {from: "0x0000000000000000000000000000000000000001"});
		const addresssXcoCGZ = await SpiritCoinEKgMFhU.mint.call(addressx6FPPBd, uintZClFNtK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintucFl7Wg, BigInt("10000000000000000000000000"))
	});

	it('test for SpiritCoin', async () => {
		const addressCjnVFhm = accounts[4]
		const addressdRCN609 = accounts[3]
		const SpiritCoinAmp7XY = await SpiritCoin.new(addressCjnVFhm, addressdRCN609, {from: accounts[4]});
		const uintttlP4G = BigInt("1500")
		const addressOTqTQjx = "0x0000000000000000000000000000000000000001"
		const uintIiToU2t = BigInt("562")
		const addressRcqracq = accounts[2]
		const uintrfiUbTm = BigInt("1793")
		const addressooG29OV = accounts[2]
		const boolSvWeFw1 = await SpiritCoinAmp7XY.approve.call(addressOTqTQjx, uintttlP4G, {from: accounts[2]});
		const boolojvtxtb = await SpiritCoinAmp7XY.approve.call(addressRcqracq, uintIiToU2t, {from: accounts[4]});
		const boolrfnaG3c = await SpiritCoinAmp7XY.approve.call(addressooG29OV, uintrfiUbTm, {from: accounts[4]});

		assert.equal(boolSvWeFw1, true)
		assert.equal(boolojvtxtb, true)
		assert.equal(boolrfnaG3c, true)
	});

	it('test for SpiritCoin', async () => {
		const addressclhsV4r = accounts[2]
		const addresso9OGjWA = accounts[1]
		const SpiritCoinMSfATy = await SpiritCoin.new(addressclhsV4r, addresso9OGjWA, {from: "0x0000000000000000000000000000000000000001"});
		const uintQQP7jpN = BigInt("1298")
		const addressCLeYMou = accounts[5]
		const addresstpkqxzB = accounts[5]
		const uintPB4mUee = BigInt("1729")
		const addressPVswTWL = accounts[3]
		const addressMkQm2SV = accounts[0]
		const uintopnm1G = BigInt("1811")
		const addresspxmNXf8 = accounts[0]
		const addressyrPsWj = accounts[3]
		const uintinuWJYD = BigInt("1077")
		const addressNvLT8uo = accounts[2]
		const uintBLE5DET = BigInt("1855")
		const addressBtvkxfg = accounts[1]
		const boolaNeN1Sl = await SpiritCoinMSfATy.transferFrom.call(addresstpkqxzB, addressCLeYMou, uintQQP7jpN, {from: accounts[3]});
		const boolqHlIydk = await SpiritCoinMSfATy.transfer.call(addressPVswTWL, uintPB4mUee, {from: accounts[1]});
		const uintiysLdnS = await SpiritCoinMSfATy.balanceOf.call(addressMkQm2SV, {from: accounts[0]});
		const booldgWokbP = await SpiritCoinMSfATy.transferFrom.call(addressyrPsWj, addresspxmNXf8, uintopnm1G, {from: accounts[5]});
		const addresswfjAeek = await SpiritCoinMSfATy.mint.call(addressNvLT8uo, uintinuWJYD, {from: accounts[2]});
		const addressbcGYaFj = await SpiritCoinMSfATy.mint.call(addressBtvkxfg, uintBLE5DET, {from: accounts[3]});
	});

	it('test for SpiritCoin', async () => {
		const addressbP0mny5 = accounts[1]
		const addresst0nlHJP = accounts[4]
		const SpiritCoinIHJdaLE = await SpiritCoin.new(addressbP0mny5, addresst0nlHJP, {from: accounts[4]});
		const uintB78l6Pr = BigInt("1013")
		const addressxhttLqD = accounts[2]
		const uintU4mMxsG = BigInt("642")
		const addressCHnalxi = accounts[3]
		const addressqo48o04 = accounts[2]
		const addressPhj62Ub = accounts[0]
		const boolFCVFTu = await SpiritCoinIHJdaLE.transfer.call(addressxhttLqD, uintB78l6Pr, {from: "0x0000000000000000000000000000000000000001"});
		const boolQ6Hcnuw = await SpiritCoinIHJdaLE.transfer.call(addressCHnalxi, uintU4mMxsG, {from: accounts[0]});
		const uintgwCRaIZ = await SpiritCoinIHJdaLE.allowance.call(addressPhj62Ub, addressqo48o04, {from: accounts[3]});

		await expect(SpiritCoinIHJdaLE.transfer.call(addressxhttLqD, uintB78l6Pr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressH5Ad9Cu = accounts[4]
		const addressOUvNxmJ = accounts[0]
		const SpiritCoinp5kOlN2 = await SpiritCoin.new(addressH5Ad9Cu, addressOUvNxmJ, {from: accounts[4]});
		const addresslVerUvq = accounts[4]
		const addressyNZYL6t = accounts[0]
		const addressfJBviUE = accounts[3]
		const addressKocSrK = accounts[4]
		const addressf3Ea0Ip = "0x0000000000000000000000000000000000000001"
		const addressgBlq5ss = accounts[4]
		const addressdlLnIkX = accounts[2]
		const addressogsGoeq = await SpiritCoinp5kOlN2.setMinter.call(addresslVerUvq, {from: "0x0000000000000000000000000000000000000001"});
		const uintasuDec = await SpiritCoinp5kOlN2.allowance.call(addressfJBviUE, addressyNZYL6t, {from: accounts[2]});
		const uintXYLipi2 = await SpiritCoinp5kOlN2.allowance.call(addressf3Ea0Ip, addressKocSrK, {from: accounts[2]});
		const uintasV8FWX = await SpiritCoinp5kOlN2.allowance.call(addressdlLnIkX, addressgBlq5ss, {from: accounts[3]});

		await expect(SpiritCoinp5kOlN2.setMinter.call(addresslVerUvq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressYtWi9iG = accounts[4]
		const addresswlG7Gmk = accounts[3]
		const SpiritCoinAmp7XY = await SpiritCoin.new(addressYtWi9iG, addresswlG7Gmk, {from: accounts[4]});
		const addresspZHm1by = accounts[2]
		const uintakdgr4P = BigInt("1500")
		const addressYow3Wiy = "0x0000000000000000000000000000000000000001"
		const uintcGPLGpP = BigInt("562")
		const addressI58JAG = accounts[3]
		const uintkLh6XDg = BigInt("1694")
		const addressQY0hAxj = accounts[2]
		const addressAaMMh8l = accounts[2]
		const uintYWQ5qfl = BigInt("1793")
		const addressD0TjEyV = accounts[2]
		const addressW5KZou = accounts[0]
		const uintMehWMo9 = BigInt("1750")
		const addressmL3mZ0c = accounts[4]
		const addressahmWaM6 = accounts[3]
		const uintukI3aOM = await SpiritCoinAmp7XY.balanceOf.call(addresspZHm1by, {from: accounts[4]});
		const boolSvWeFw1 = await SpiritCoinAmp7XY.approve.call(addressYow3Wiy, uintakdgr4P, {from: accounts[2]});
		const boolojvtxtb = await SpiritCoinAmp7XY.approve.call(addressI58JAG, uintcGPLGpP, {from: accounts[4]});
		const booljzfNyJS = await SpiritCoinAmp7XY.transferFrom.call(addressAaMMh8l, addressQY0hAxj, uintkLh6XDg, {from: accounts[0]});
		const boolrfnaG3c = await SpiritCoinAmp7XY.approve.call(addressD0TjEyV, uintYWQ5qfl, {from: accounts[4]});
		const uint8x40tD = await SpiritCoinAmp7XY.balanceOf.call(addressW5KZou, {from: accounts[4]});
		const boolW3OQYEu = await SpiritCoinAmp7XY.transferFrom.call(addressahmWaM6, addressmL3mZ0c, uintMehWMo9, {from: accounts[1]});

		assert.equal(boolSvWeFw1, true)
		assert.equal(boolojvtxtb, true)
		assert.equal(uintukI3aOM, BigInt("0"))
		await expect(SpiritCoinAmp7XY.transferFrom.call(addressAaMMh8l, addressQY0hAxj, uintkLh6XDg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresss3Pqmht = accounts[0]
		const addressAIFscF = "0x0000000000000000000000000000000000000001"
		const SpiritCoinMx3NGi = await SpiritCoin.new(addresss3Pqmht, addressAIFscF, {from: accounts[2]});
		const addressrfrHSZ5 = accounts[3]
		const address7WXBVG = accounts[2]
		const uintDlxrbRV = BigInt("1853")
		const addresslL0MQ3Y = accounts[0]
		const uintioMNHYp = BigInt("2")
		const addressSTfqFTZ = accounts[5]
		const addressaUOTTC = accounts[4]
		const uinthlljNUU = BigInt("927")
		const addressGhyu2w = accounts[2]
		const addressHXYi6Fz = accounts[5]
		const uintblPwa3l = await SpiritCoinMx3NGi.allowance.call(address7WXBVG, addressrfrHSZ5, {from: accounts[0]});
		const boolu0ZqF5i = await SpiritCoinMx3NGi.transfer.call(addresslL0MQ3Y, uintDlxrbRV, {from: accounts[0]});
		const boolHIN1YRz = await SpiritCoinMx3NGi.transferFrom.call(addressaUOTTC, addressSTfqFTZ, uintioMNHYp, {from: accounts[3]});
		const boolssGmRXl = await SpiritCoinMx3NGi.transferFrom.call(addressHXYi6Fz, addressGhyu2w, uinthlljNUU, {from: accounts[4]});

		assert.equal(boolu0ZqF5i, true)
		assert.equal(uintblPwa3l, BigInt("0"))
		await expect(SpiritCoinMx3NGi.transferFrom.call(addressaUOTTC, addressSTfqFTZ, uintioMNHYp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressqe6Fs4b = accounts[0]
		const address7NpEk2 = accounts[4]
		const SpiritCoinuD2RTW8 = await SpiritCoin.new(addressqe6Fs4b, address7NpEk2, {from: accounts[1]});
		const uintJxSPIVo = BigInt("823")
		const addressIq1ib98 = "0x0000000000000000000000000000000000000001"
		const addresspBwxSP = "0x0000000000000000000000000000000000000001"
		const uintlkp8WNa = BigInt("1672")
		const addressyVfgDbK = accounts[4]
		const addressMDpbwdx = accounts[0]
		const addressa030J9o = "0x0000000000000000000000000000000000000001"
		const uintl59YJ2Y = BigInt("1830")
		const addressfVP9Qx = accounts[0]
		const addressaYqGhky = await SpiritCoinuD2RTW8.mint.call(addressIq1ib98, uintJxSPIVo, {from: accounts[4]});
		const addressniXOFz2 = await SpiritCoinuD2RTW8.setMinter.call(addresspBwxSP, {from: accounts[4]});
		const boolMry3bqu = await SpiritCoinuD2RTW8.transferFrom.call(addressMDpbwdx, addressyVfgDbK, uintlkp8WNa, {from: accounts[2]});
		const uintFDmHy38 = await SpiritCoinuD2RTW8.balanceOf.call(addressa030J9o, {from: "0x0000000000000000000000000000000000000001"});
		const boolKXpNNNl = await SpiritCoinuD2RTW8.approve.call(addressfVP9Qx, uintl59YJ2Y, {from: accounts[0]});

		await expect(SpiritCoinuD2RTW8.transferFrom.call(addressMDpbwdx, addressyVfgDbK, uintlkp8WNa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressVXJz2nY = accounts[1]
		const addressflm0V2U = "0x0000000000000000000000000000000000000001"
		const SpiritCoinEKgMFhU = await SpiritCoin.new(addressVXJz2nY, addressflm0V2U, {from: accounts[2]});
		const uintJoUsnO5 = BigInt("1101")
		const addressQqMUFJb = "0x0000000000000000000000000000000000000000"
		const addresssXcoCGZ = await SpiritCoinEKgMFhU.mint.call(addressQqMUFJb, uintJoUsnO5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SpiritCoinEKgMFhU.mint.call(addressQqMUFJb, uintJoUsnO5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})