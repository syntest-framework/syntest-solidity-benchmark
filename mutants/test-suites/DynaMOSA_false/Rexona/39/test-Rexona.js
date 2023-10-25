const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringLNmdxSi = "u3LBiOog2kXFhtL1ibLayYWlVcsQa9VufCn9DG4ccE9WAAIp7gQAaBItUAeOpQSkXH3nEEvbsHniH2xkxNtgbkWoxCjE"
		const stringCvHTrar = "Y0L6EoKVQhiPB8itQnqs1GmSn4Jt6XXhyGORtZNy52PTs0HE0qd1BLUAAYCOpCGCwTMM2HtXqFDpP"
		const uintuDJw27I = BigInt("1318")
		const RexonaId9kmac = await Rexona.new(stringLNmdxSi, stringCvHTrar, uintuDJw27I, {from: accounts[2]});
		const uinthY9zXm2 = BigInt("1099")
		const addressVHsDv9r = accounts[5]
		const addressMF1FQ7y = accounts[1]
		const uintnSrWycr = BigInt("1227")
		const addresspH7GxB0 = accounts[4]
		const uinthI9aKyT = BigInt("1996")
		const addressDrOQVaF = "0x0000000000000000000000000000000000000001"
		const addressty9y8Wg = accounts[0]
//		const boolOBVmTSf = await RexonaId9kmac.transferFrom.call(addressMF1FQ7y, addressVHsDv9r, uinthY9zXm2, {from: accounts[4]});
//		const boolohf0fea = await RexonaId9kmac.transfer.call(addresspH7GxB0, uintnSrWycr, {from: accounts[3]});
//		const boolvKDvBpx = await RexonaId9kmac.transferFrom.call(addressty9y8Wg, addressDrOQVaF, uinthI9aKyT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RexonaId9kmac.transferFrom.call(addressMF1FQ7y, addressVHsDv9r, uinthY9zXm2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringn4JOton = "VJEKxeLsirLW4uQZLkgvxWId3AUPc7xsCOfI7hT8drCs9VFyi3UVoy"
		const stringPSP45zA = "txz7MXvHa3VJ"
		const uintHHvIGGK = BigInt("285")
		const RexonaoacL0qX = await Rexona.new(stringn4JOton, stringPSP45zA, uintHHvIGGK, {from: accounts[1]});
		const uintwlJh5Tz = BigInt("1931")
		const addressfNvzoVt = accounts[0]
		const uintTzlNodO = BigInt("1060")
		const addressdK8wjBs = accounts[1]
		const addressfp9tARV = accounts[1]
		const uintSyo3HAD = BigInt("428")
		const addressISBppYS = accounts[1]
		const addressO6Tm0sx = accounts[0]
		const uintXHCRQAB = BigInt("298")
		const addressD0YdU9V = "0x0000000000000000000000000000000000000001"
		const uintpwG9AjH = BigInt("1060")
		const addresslSIQILR = accounts[0]
		const boolrf4MUmD = await RexonaoacL0qX.approve.call(addressfNvzoVt, uintwlJh5Tz, {from: accounts[0]});
		const boolG4TsTjP = await RexonaoacL0qX.transferFrom.call(addressfp9tARV, addressdK8wjBs, uintTzlNodO, {from: accounts[1]});
		const boolPBaNP5Z = await RexonaoacL0qX.approve.call(addressISBppYS, uintSyo3HAD, {from: "0x0000000000000000000000000000000000000001"});
//		const bool4SCISA = await RexonaoacL0qX.transferownership.call(addressO6Tm0sx, {from: accounts[4]});
//		const boolYxOMfPP = await RexonaoacL0qX.transfer.call(addressD0YdU9V, uintXHCRQAB, {from: accounts[0]});
//		const booly3J7KZb = await RexonaoacL0qX.approve.call(addresslSIQILR, uintpwG9AjH, {from: accounts[1]});

		assert.equal(boolG4TsTjP, true)
		assert.equal(boolPBaNP5Z, true)
		assert.equal(boolrf4MUmD, true)
		await expect(RexonaoacL0qX.transferownership.call(addressO6Tm0sx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringWDynPOz = "S37Ly2U"
		const stringn7pCBtx = "jIjgXFjHpftIKHwsJiA9xadTXf1l2nGBlcAEkd99Lm8kmJEJxNfUB11622TzefN"
		const uintZGwvW01 = BigInt("710")
		const RexonawtoniaB = await Rexona.new(stringWDynPOz, stringn7pCBtx, uintZGwvW01, {from: "0x0000000000000000000000000000000000000001"});
		const addressGPJMO2f = accounts[2]
		const uintQbzWnRJ = BigInt("1902")
		const addressQFEydyg = "0x0000000000000000000000000000000000000001"
		const uintPp6yS2r = BigInt("570")
		const addressARduQP = accounts[2]
		const uintUvlFhyy = BigInt("474")
		const addressOYDewxx = accounts[5]
		const addressPvxhyzO = "0x0000000000000000000000000000000000000001"
		const uintWq1ZU0g = BigInt("1809")
		const addressGo6MXAg = accounts[4]
		const address2MSDzB = accounts[1]
		const bool9h1t5z = await RexonawtoniaB.transferownership.call(addressGPJMO2f, {from: accounts[0]});
		const boolZ62YijV = await RexonawtoniaB.transfer.call(addressQFEydyg, uintQbzWnRJ, {from: accounts[4]});
		const boolAzVBjYp = await RexonawtoniaB.approveAndCall.call(addressARduQP, uintPp6yS2r, {from: accounts[3]});
		const boolKcMBJaD = await RexonawtoniaB.transferFrom.call(addressPvxhyzO, addressOYDewxx, uintUvlFhyy, {from: accounts[4]});
		const boolqQFcavd = await RexonawtoniaB.transferFrom.call(address2MSDzB, addressGo6MXAg, uintWq1ZU0g, {from: accounts[2]});
	});

	it('test for Rexona', async () => {
		const stringgQC8VoL = "2IfrKQzJKlQzEKhpRzmPUOC63hCh3pKT3l7enQGxZLsanHtogSQtCmrp1aM"
		const stringv4vSxR = "N744bC7SblEqgHCYRBVEOFBXl5KLGBI8K2WNy2PDWUe2gbiRYPYEPX"
		const uintnRfFsez = BigInt("1992")
		const Rexonah9UxX0s = await Rexona.new(stringgQC8VoL, stringv4vSxR, uintnRfFsez, {from: accounts[5]});
		const uintSNoqXzV = BigInt("1530")
		const addresshMZIbyS = accounts[1]
		const uinturIt1DF = BigInt("1498")
		const addressoKtTgdy = accounts[4]
		const uintGOaU3Fu = BigInt("1750")
		const addressX9FHFT7 = accounts[0]
		const uintxKijyHb = BigInt("1966")
		const addressEtmeE5O = "0x0000000000000000000000000000000000000001"
		const addressG39mX2H = accounts[1]
		const addresse2L5GxY = accounts[2]
		const boolUkAmRTg = await Rexonah9UxX0s.approve.call(addresshMZIbyS, uintSNoqXzV, {from: accounts[2]});
		const boolfkqz5lD = await Rexonah9UxX0s.approve.call(addressoKtTgdy, uinturIt1DF, {from: accounts[3]});
//		const boolMyhzVVB = await Rexonah9UxX0s.approveAndCall.call(addressX9FHFT7, uintGOaU3Fu, {from: accounts[0]});
//		const boolJUhK5c0 = await Rexonah9UxX0s.transferFrom.call(addressG39mX2H, addressEtmeE5O, uintxKijyHb, {from: accounts[0]});
//		const booly09NdDX = await Rexonah9UxX0s.transferownership.call(addresse2L5GxY, {from: accounts[2]});

		assert.equal(boolUkAmRTg, true)
		assert.equal(boolfkqz5lD, true)
		await expect(Rexonah9UxX0s.approveAndCall.call(addressX9FHFT7, uintGOaU3Fu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringlvmrzQj = "tmVMAEPWhwjXIOwMSL7OAJzWSxMe4usTOYYIjOqaynFcplbCxpXenA"
		const stringGjgTAdr = "BFJmWW8NYxWMqWBFVQpyZvLyhwntY6Qh940TzAOdvQE4eaE76"
		const uintYjv84HZ = BigInt("1413")
		const Rexona6lvxzT = await Rexona.new(stringlvmrzQj, stringGjgTAdr, uintYjv84HZ, {from: accounts[1]});
		const uintbwY71Is = BigInt("1514")
		const addresspgpDKVr = accounts[0]
		const uint2PwtP6 = BigInt("1790")
		const addressPOHOs8 = accounts[1]
		const addressVaBgfHh = accounts[4]
		const uintsP2rdlB = BigInt("855")
		const addresstzcENHp = accounts[3]
		const addressNnm3pI = accounts[1]
		const boolQI13oaS = await Rexona6lvxzT.approveAndCall.call(addresspgpDKVr, uintbwY71Is, {from: accounts[1]});
//		const boolLTrcAi8 = await Rexona6lvxzT.transferFrom.call(addressVaBgfHh, addressPOHOs8, uint2PwtP6, {from: accounts[3]});
//		const boolAZAO6Qy = await Rexona6lvxzT.transferFrom.call(addressNnm3pI, addresstzcENHp, uintsP2rdlB, {from: accounts[0]});

		assert.equal(boolQI13oaS, true)
		await expect(Rexona6lvxzT.transferFrom.call(addressVaBgfHh, addressPOHOs8, uint2PwtP6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringaCuiN2 = "UvTJ6RHj2ezLTx3R75HbEDrh9J7I274qQKggvc7Wu19UknIC8A6Y3d2T6XbzZalOJUp13s6gR1djK1zeK4hSj2HUl"
		const stringF8C1JKd = "AuReJe7SWnjPETqI0UfuL5kdrGfg49WscF"
		const uintsuGFxZ = BigInt("1803")
		const RexonaIpydarq = await Rexona.new(stringaCuiN2, stringF8C1JKd, uintsuGFxZ, {from: accounts[1]});
		const uintx1QQ1GD = BigInt("13")
		const addressnw8xJw = accounts[5]
		const uintuXPOsk9 = BigInt("855")
		const addressKyjoRkt = accounts[4]
		const uintatEccQw = BigInt("579")
		const addressdqHPwMb = accounts[3]
		const addressJWwmyIx = accounts[5]
		const addressIhVkX46 = accounts[2]
		const uintwIkUOl4 = BigInt("1216")
		const addressOKpojm7 = accounts[0]
		const addressTgwEDYP = "0x0000000000000000000000000000000000000001"
//		const booldCR2kAH = await RexonaIpydarq.transfer.call(addressnw8xJw, uintx1QQ1GD, {from: accounts[3]});
//		const boolbXmvqIq = await RexonaIpydarq.approveAndCall.call(addressKyjoRkt, uintuXPOsk9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDJypXLU = await RexonaIpydarq.transferFrom.call(addressJWwmyIx, addressdqHPwMb, uintatEccQw, {from: accounts[3]});
//		const boolsddSEfo = await RexonaIpydarq.transferownership.call(addressIhVkX46, {from: accounts[0]});
//		const boolEW5V8vr = await RexonaIpydarq.approve.call(addressOKpojm7, uintwIkUOl4, {from: accounts[3]});
//		const boolD4w1tAx = await RexonaIpydarq.transferownership.call(addressTgwEDYP, {from: accounts[3]});

		await expect(RexonaIpydarq.transfer.call(addressnw8xJw, uintx1QQ1GD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringaCuiN2 = "UvTJ6RHj2ezLTx3R75HbEDrh9J7I274qQKggvc7Wu19UknIC8A6Y3d2T6XbzZalOJUp13s6gR1djK1zeK4hSj2HUl"
		const stringF8C1JKd = "AuReJe7SWnjPETqI0UfuL5kdrGfg49WscF"
		const uintRVftCVR = BigInt("1803")
		const RexonaIpydarq = await Rexona.new(stringaCuiN2, stringF8C1JKd, uintRVftCVR, {from: accounts[1]});
		const uintoI6CLyt = BigInt("0")
		const addressSBpsHoT = accounts[5]
		const uintlLaHrxJ = BigInt("976")
		const addresshqAeoK5 = accounts[1]
		const uintdVK9cPI = BigInt("855")
		const addresspBcDGq = accounts[4]
		const uintovc3ubS = BigInt("579")
		const addressecofZxu = accounts[3]
		const addressT1kenV2 = accounts[5]
		const uintGws9QDm = BigInt("1263")
		const addressm1soGFR = "0x0000000000000000000000000000000000000001"
		const addressT1rwd7b = accounts[2]
		const uintrEZyxly = BigInt("1216")
		const addressPr8UnOI = accounts[0]
		const addressRuMbPLA = "0x0000000000000000000000000000000000000001"
		const booldCR2kAH = await RexonaIpydarq.transfer.call(addressSBpsHoT, uintoI6CLyt, {from: accounts[3]});
		const boolid2KXZS = await RexonaIpydarq.approve.call(addresshqAeoK5, uintlLaHrxJ, {from: accounts[4]});
//		const boolbXmvqIq = await RexonaIpydarq.approveAndCall.call(addresspBcDGq, uintdVK9cPI, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDJypXLU = await RexonaIpydarq.transferFrom.call(addressT1kenV2, addressecofZxu, uintovc3ubS, {from: accounts[3]});
//		const boolTd5n0EU = await RexonaIpydarq.approve.call(addressm1soGFR, uintGws9QDm, {from: "0x0000000000000000000000000000000000000001"});
//		const boolsddSEfo = await RexonaIpydarq.transferownership.call(addressT1rwd7b, {from: accounts[0]});
//		const boolEW5V8vr = await RexonaIpydarq.approve.call(addressPr8UnOI, uintrEZyxly, {from: accounts[3]});
//		const boolD4w1tAx = await RexonaIpydarq.transferownership.call(addressRuMbPLA, {from: accounts[3]});

		assert.equal(booldCR2kAH, true)
		assert.equal(boolid2KXZS, true)
		await expect(RexonaIpydarq.approveAndCall.call(addresspBcDGq, uintdVK9cPI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringeV6qU2F = "gFqfA8"
		const stringhPF24qk = "thAeYZjLWNKatWWrSq6iKoMDJsyCxH3D5373"
		const uintKWCfZ0L = BigInt("571")
		const RexonacQmTycZ = await Rexona.new(stringeV6qU2F, stringhPF24qk, uintKWCfZ0L, {from: accounts[0]});
		const uintcHmz14J = BigInt("29")
		const addressIPgKYd = accounts[4]
		const uinttTQrOy = BigInt("1052")
		const addressVEzmPbO = accounts[4]
		const uint8Cdggz = BigInt("1726")
		const addressOZhpMu = accounts[3]
		const uintEmN4opO = BigInt("1273")
		const addresszrrzlzS = "0x00000000000000000000000000000000000000-1"
		const addressUH4gMj = accounts[1]
		const uintVGkMxA0 = BigInt("138")
		const addressmV7ymfp = accounts[5]
		const addressLxFjwlf = accounts[1]
		const boolSy1y3lY = await RexonacQmTycZ.approveAndCall.call(addressIPgKYd, uintcHmz14J, {from: accounts[0]});
		const booljnNzlHY = await RexonacQmTycZ.approveAndCall.call(addressVEzmPbO, uinttTQrOy, {from: accounts[0]});
		const boolIXsrwYA = await RexonacQmTycZ.approve.call(addressOZhpMu, uint8Cdggz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZ4pz1ch = await RexonacQmTycZ.transferFrom.call(addressUH4gMj, addresszrrzlzS, uintEmN4opO, {from: accounts[1]});
//		const boolyjWCXiR = await RexonacQmTycZ.transferFrom.call(addressLxFjwlf, addressmV7ymfp, uintVGkMxA0, {from: accounts[3]});

		assert.equal(boolIXsrwYA, true)
		assert.equal(boolSy1y3lY, true)
		assert.equal(booljnNzlHY, true)
		await expect(RexonacQmTycZ.transferFrom.call(addressUH4gMj, addresszrrzlzS, uintEmN4opO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringeV6qU2F = "gFqfA8"
		const stringhPF24qk = "thAeYZjLWNKatWWrSq6iKoMDJsyCxH3D5373"
		const uintf0s6H7D = BigInt("571")
		const RexonacQmTycZ = await Rexona.new(stringeV6qU2F, stringhPF24qk, uintf0s6H7D, {from: accounts[0]});
		const uintOGC8Z14 = BigInt("0")
		const addressLodFV9u = accounts[4]
		const uintVHUoF5M = BigInt("1273")
		const addresskKisBlt = "0x0000000000000000000000000000000000000001"
		const addressD9JuUl = accounts[1]
		const uintY9b4AL4 = BigInt("138")
		const addressVWg23a2 = accounts[5]
		const addressJNBaUsT = accounts[1]
		const boolSy1y3lY = await RexonacQmTycZ.approveAndCall.call(addressLodFV9u, uintOGC8Z14, {from: accounts[0]});
//		const boolZ4pz1ch = await RexonacQmTycZ.transferFrom.call(addressD9JuUl, addresskKisBlt, uintVHUoF5M, {from: accounts[1]});
//		const boolyjWCXiR = await RexonacQmTycZ.transferFrom.call(addressJNBaUsT, addressVWg23a2, uintY9b4AL4, {from: accounts[3]});

		assert.equal(boolSy1y3lY, true)
		await expect(RexonacQmTycZ.transferFrom.call(addressD9JuUl, addresskKisBlt, uintVHUoF5M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})