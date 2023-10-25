const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uinthh9ljiq = BigInt("502")
		const stringyckbH5X = "jFvsM"
		const stringaR2GZTL = "XplO7GbGH5nOW5KNhfznGnpVVNm4yFszi3PTFDsqPjrshUx4sJ"
		const GreenMarkTrustQlfghND = await GreenMarkTrust.new(uinthh9ljiq, stringyckbH5X, stringaR2GZTL, {from: accounts[1]});
		const uintEooiKzJ = BigInt("1814")
		const addressBuZwE5 = accounts[2]
		const uintIoDSwW = BigInt("1706")
		const addressmnKNjHS = accounts[2]
		const uintjI02Em = BigInt("648")
		const addressXs08Pgz = accounts[4]
		const byteMeuLS1g = "0x1a06181b001e101e131703191f0108190c0e05181b1f"
		const uintevLVz1j = BigInt("795")
		const addressKOT0rCf = accounts[4]
		const uintszPIrN = BigInt("287")
		const addressoNCvpRV = accounts[0]
		const bool5k5CQn = await GreenMarkTrustQlfghND.transfer.call(addressBuZwE5, uintEooiKzJ, {from: accounts[1]});
		const boolYi4LhkC = await GreenMarkTrustQlfghND.approve.call(addressmnKNjHS, uintIoDSwW, {from: accounts[0]});
		const boolZi0Ueg2 = await GreenMarkTrustQlfghND.burnFrom.call(addressXs08Pgz, uintjI02Em, {from: accounts[4]});
		const boolaopAlIL = await GreenMarkTrustQlfghND.approveAndCall.call(addressKOT0rCf, uintevLVz1j, byteMeuLS1g, {from: accounts[2]});
		const boolRdY8Mzx = await GreenMarkTrustQlfghND.transfer.call(addressoNCvpRV, uintszPIrN, {from: accounts[0]});

		assert.equal(bool5k5CQn, true)
		assert.equal(boolYi4LhkC, true)
		await expect(GreenMarkTrustQlfghND.burnFrom.call(addressXs08Pgz, uintjI02Em, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintQC9uFGC = BigInt("1415")
		const string3topUg = "kZfa4yiOmsNMzfyaAERDWAzGQp0DkAnIGpY6zxb7UIPptHIxqXsN"
		const stringKxXWRwX = ""
		const GreenMarkTrustcvEwCPH = await GreenMarkTrust.new(uintQC9uFGC, string3topUg, stringKxXWRwX, {from: accounts[4]});
		const uintS2LaDWd = BigInt("1574")
		const addressi7hWuW = accounts[0]
		const byteFSoFb0Y = "0x15"
		const uintEs4w5dN = BigInt("605")
		const addressOTDrCFq = accounts[1]
		const uintkiM7aXv = BigInt("1903")
		const address7H7qdc = accounts[5]
		const uintrxTDBE4 = BigInt("194")
		const addressrtxtUXL = accounts[4]
		const boolRbFO17X = await GreenMarkTrustcvEwCPH.approve.call(addressi7hWuW, uintS2LaDWd, {from: "0x0000000000000000000000000000000000000001"});
		const boolfP49AU = await GreenMarkTrustcvEwCPH.approveAndCall.call(addressOTDrCFq, uintEs4w5dN, byteFSoFb0Y, {from: "0x0000000000000000000000000000000000000001"});
		const boolP0FEJS9 = await GreenMarkTrustcvEwCPH.approve.call(address7H7qdc, uintkiM7aXv, {from: "0x0000000000000000000000000000000000000001"});
		const boolDQr0sue = await GreenMarkTrustcvEwCPH.approve.call(addressrtxtUXL, uintrxTDBE4, {from: accounts[0]});

		assert.equal(boolRbFO17X, true)
		await expect(GreenMarkTrustcvEwCPH.approveAndCall.call(addressOTDrCFq, uintEs4w5dN, byteFSoFb0Y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintfOAvAwD = BigInt("1051")
		const stringytH8Yyd = "OgM2dppnDh6ynkksJhdc6ajxLa"
		const stringQ9znSCJ = "tlUkx8kIls36su6Yo"
		const GreenMarkTruste7nhfcH = await GreenMarkTrust.new(uintfOAvAwD, stringytH8Yyd, stringQ9znSCJ, {from: "0x0000000000000000000000000000000000000001"});
		const uinthPmpYl8 = BigInt("968")
		const uintOZ6A6sI = BigInt("395")
		const uinte8RodBW = BigInt("2026")
		const addressDxOklU = "0x0000000000000000000000000000000000000001"
		const byteA4hm3M = "0x1b01011f0e07070407120a1d1b0c1a05020f0e180e07071005050a0a0406"
		const uintUMQ8SuM = BigInt("182")
		const addressUwN2Xfj = accounts[2]
		const boold1OINAE = await GreenMarkTruste7nhfcH.burn.call(uinthPmpYl8, {from: accounts[0]});
		const boolnp8Kx76 = await GreenMarkTruste7nhfcH.burn.call(uintOZ6A6sI, {from: accounts[4]});
		const boolBdkKaTr = await GreenMarkTruste7nhfcH.transfer.call(addressDxOklU, uinte8RodBW, {from: accounts[0]});
		const boolvS9Yudf = await GreenMarkTruste7nhfcH.approveAndCall.call(addressUwN2Xfj, uintUMQ8SuM, byteA4hm3M, {from: accounts[1]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintPHLutjq = BigInt("1731")
		const stringvI7usbS = "xIwJtBcQ0kxW1fcyb8wQQtAwBeyo5z52YUpROhHEqXSNOd2of128W9k8Mo"
		const stringKZPkJs = "SzGgp60WP0pkEFDswdV5zJe3D3dUNCCbPPHrdSFACHk9zAHfMYinXJBZXYLVDPXubEPBYNOC9zPd"
		const GreenMarkTrusttyq7J21 = await GreenMarkTrust.new(uintPHLutjq, stringvI7usbS, stringKZPkJs, {from: accounts[5]});
		const uintaiwdJg8 = BigInt("1809")
		const addressSyIhEPt = accounts[2]
		const addressS5DGq6 = accounts[2]
		const byteZbKm3go = "0x1b141a02"
		const uintcH4Adk = BigInt("1868")
		const addressPziCkr = accounts[1]
		const uintm6aNU7W = BigInt("347")
		const addresstTTsJUY = "0x0000000000000000000000000000000000000001"
		const uintlquDdme = BigInt("1172")
		const addresslSIVDni = accounts[0]
		const uintyiIUp8h = BigInt("67")
		const addresskHlHWKF = accounts[4]
		const boolqztKLNR = await GreenMarkTrusttyq7J21.transferFrom.call(addressS5DGq6, addressSyIhEPt, uintaiwdJg8, {from: accounts[4]});
		const boolNWwDCoK = await GreenMarkTrusttyq7J21.approveAndCall.call(addressPziCkr, uintcH4Adk, byteZbKm3go, {from: "0x0000000000000000000000000000000000000001"});
		const boolXOTUZQ0 = await GreenMarkTrusttyq7J21.approve.call(addresstTTsJUY, uintm6aNU7W, {from: accounts[1]});
		const boolh5gdkhm = await GreenMarkTrusttyq7J21.approve.call(addresslSIVDni, uintlquDdme, {from: accounts[4]});
		const boolxJVOQlj = await GreenMarkTrusttyq7J21.transfer.call(addresskHlHWKF, uintyiIUp8h, {from: accounts[1]});

		await expect(GreenMarkTrusttyq7J21.transferFrom.call(addressS5DGq6, addressSyIhEPt, uintaiwdJg8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintS3VaYhE = BigInt("502")
		const stringyckbH5X = "jFvsM"
		const stringaR2GZTL = "XplO7GbGH5nOW5KNhfznGnpVVNm4yFszi3PTFDsqPjrshUx4sJ"
		const GreenMarkTrustQlfghND = await GreenMarkTrust.new(uintS3VaYhE, stringyckbH5X, stringaR2GZTL, {from: accounts[1]});
		const uintOuusbbn = BigInt("1814")
		const addressK20bI89 = accounts[2]
		const uintsGTkPx = BigInt("1706")
		const addressjNeIat8 = accounts[2]
		const uintDmrKrnb = BigInt("1124")
		const uint3XTrfa = BigInt("648")
		const addressvQNYsRG = accounts[4]
		const byteFttsZSk = "0x010a07041e1b05171c100f100b1d0c1f19"
		const uintgOPhdxb = BigInt("1745")
		const addressn1ShrUX = accounts[5]
		const byteAccKhUV = "0x1a06181b001e101e131703191f0108190c0e05181b1f"
		const uintpbTPTng = BigInt("795")
		const addresscX2CnDx = accounts[5]
		const uintArbWuS = BigInt("287")
		const addressPHDIWc = accounts[0]
		const bool5k5CQn = await GreenMarkTrustQlfghND.transfer.call(addressK20bI89, uintOuusbbn, {from: accounts[1]});
		const boolYi4LhkC = await GreenMarkTrustQlfghND.approve.call(addressjNeIat8, uintsGTkPx, {from: accounts[0]});
		const boolG5ow42 = await GreenMarkTrustQlfghND.burn.call(uintDmrKrnb, {from: accounts[0]});
		const boolZi0Ueg2 = await GreenMarkTrustQlfghND.burnFrom.call(addressvQNYsRG, uint3XTrfa, {from: accounts[4]});
		const boolnNyPFwb = await GreenMarkTrustQlfghND.approveAndCall.call(addressn1ShrUX, uintgOPhdxb, byteFttsZSk, {from: accounts[3]});
		const boolaopAlIL = await GreenMarkTrustQlfghND.approveAndCall.call(addresscX2CnDx, uintpbTPTng, byteAccKhUV, {from: accounts[2]});
		const boolRdY8Mzx = await GreenMarkTrustQlfghND.transfer.call(addressPHDIWc, uintArbWuS, {from: accounts[0]});

		assert.equal(bool5k5CQn, true)
		assert.equal(boolYi4LhkC, true)
		await expect(GreenMarkTrustQlfghND.burn.call(uintDmrKrnb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintUAxk7S7 = BigInt("817")
		const stringSbflqHN = "sULiwbAJX8pdTLnMY"
		const stringqqurmcy = "Uz9OAE8xD2xYRcgheuJjPMt91Ay4SwEefNTO39j"
		const GreenMarkTrustRkjPprU = await GreenMarkTrust.new(uintUAxk7S7, stringSbflqHN, stringqqurmcy, {from: accounts[3]});
		const uinta9Ujy6v = BigInt("701")
		const addressjslJBtp = accounts[3]
		const uintPgk0BXw = BigInt("815")
		const boolJMwTCXI = await GreenMarkTrustRkjPprU.burnFrom.call(addressjslJBtp, uinta9Ujy6v, {from: accounts[2]});
		const boolKGq3Rfv = await GreenMarkTrustRkjPprU.burn.call(uintPgk0BXw, {from: accounts[1]});

		await expect(GreenMarkTrustRkjPprU.burnFrom.call(addressjslJBtp, uinta9Ujy6v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintNsoVin = BigInt("348")
		const stringfaR1OPN = "kzxbrxeai3FV1XBYM1PM8rtKsI8nxRdHOlXLKAx2X337WudNwSGihi87tofownJFm9vaOTsNh7yujczymnm"
		const stringwYVcHAh = "7FjHNCW6Kff5w6CuxscTSnWRpx6Gmh6P6gratMmtczKGWCBwwwlTMThIAzH6F0iC3v4yY"
		const GreenMarkTrusthgqz65i = await GreenMarkTrust.new(uintNsoVin, stringfaR1OPN, stringwYVcHAh, {from: accounts[1]});
		const uintHpj8YB8 = BigInt("1880")
		const addressHa8642 = accounts[2]
		const uintN122H24 = BigInt("516")
		const uintZ2tyAZ7 = BigInt("909")
		const addressNkCmo1l = "0x0000000000000000000000000000000000000001"
		const boolbo2XKcY = await GreenMarkTrusthgqz65i.approve.call(addressHa8642, uintHpj8YB8, {from: accounts[0]});
		const boolnL89IBB = await GreenMarkTrusthgqz65i.burn.call(uintN122H24, {from: accounts[1]});
		const boolijO1cv3 = await GreenMarkTrusthgqz65i.approve.call(addressNkCmo1l, uintZ2tyAZ7, {from: accounts[4]});

		assert.equal(boolbo2XKcY, true)
		assert.equal(boolijO1cv3, true)
		assert.equal(boolnL89IBB, true)
	});
})