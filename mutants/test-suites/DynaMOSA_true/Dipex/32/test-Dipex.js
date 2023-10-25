const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringj2ToJEK = "fpPGKfJjCXHItL5bSAhss0wUbgXNwLN4EvtX"
		const stringzAZrpT9 = "tOSEPuHKsmx3mmcFXCmSqWdVrBmSGrJocjKfpwFTtC9Ftam3yBdmMirFK38C3Q7Ba8wCTrNoyd5Q2y"
		const uintfyFisYu = BigInt("409")
		const DipexhvrmFaq = await Dipex.new(stringj2ToJEK, stringzAZrpT9, uintfyFisYu, {from: accounts[1]});
		const uintOw0ZhSR = BigInt("1733")
		const addressIrtBkB = accounts[2]
		const uintrHwhdBn = BigInt("1988")
		const addressaFFKwq = accounts[1]
		const uintYAMwB6N = BigInt("137")
		const addressTBYLe5 = accounts[3]
		const uinttu6dGWN = BigInt("1384")
		const addressDOqBrqq = accounts[2]
		const addresssWnev2q = accounts[4]
		const boolVZ8DeZ = await DipexhvrmFaq.approve.call(addressIrtBkB, uintOw0ZhSR, {from: accounts[3]});
		const boolOWMzbWL = await DipexhvrmFaq.approve.call(addressaFFKwq, uintrHwhdBn, {from: accounts[0]});
		const boolBIKmSlC = await DipexhvrmFaq.approve.call(addressTBYLe5, uintYAMwB6N, {from: accounts[4]});
//		const boolcg6ydvO = await DipexhvrmFaq.transferFrom.call(addresssWnev2q, addressDOqBrqq, uinttu6dGWN, {from: accounts[1]});

		assert.equal(boolBIKmSlC, true)
		assert.equal(boolOWMzbWL, true)
		assert.equal(boolVZ8DeZ, true)
		await expect(DipexhvrmFaq.transferFrom.call(addresssWnev2q, addressDOqBrqq, uinttu6dGWN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringEgvNpQH = "RTx3wK0rPSgqMTzfgl7WsVoHJLNI5jLkXJQltZQIXPn9nxs8a7QOZbg14uGzyowoSKPeUES9M0R69fjnv0l6V8nTEeMv"
		const stringxotbf3C = "YFTBP2cYUIMlUf5gcsUEQG5j08TzfFTDUL49H"
		const uintkwzOBl6 = BigInt("638")
		const DipexhT5yFp0 = await Dipex.new(stringEgvNpQH, stringxotbf3C, uintkwzOBl6, {from: accounts[0]});
		const uintwP2WpMk = BigInt("1497")
		const addresszL4aTU0 = accounts[0]
		const uintfidXr3N = BigInt("1623")
		const addresst0bpvWO = accounts[3]
		const addressqerlRvG = accounts[3]
		const uintsGbH6m = BigInt("1038")
		const addressJnDOj7b = accounts[1]
		const addresso3BxXj = accounts[4]
//		const boolBvmOBSA = await DipexhT5yFp0.transfer.call(addresszL4aTU0, uintwP2WpMk, {from: accounts[1]});
//		const boolquFe2pN = await DipexhT5yFp0.approve.call(addresst0bpvWO, uintfidXr3N, {from: accounts[5]});
//		const boolRXn3Zcs = await DipexhT5yFp0.transferownership.call(addressqerlRvG, {from: accounts[2]});
//		const boolpVqynA0 = await DipexhT5yFp0.transferFrom.call(addresso3BxXj, addressJnDOj7b, uintsGbH6m, {from: accounts[1]});

		await expect(DipexhT5yFp0.transfer.call(addresszL4aTU0, uintwP2WpMk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringZlRy2Z0 = "6sA8ExktLjj6OBmrfaKO1St3jCzY5KniVeTa"
		const stringOf0ydF = "65aNAc0XLUIYn2fc3RNBrq9uidIE"
		const uintVRKdpQl = BigInt("859")
		const DipexnNjL00p = await Dipex.new(stringZlRy2Z0, stringOf0ydF, uintVRKdpQl, {from: accounts[2]});
		const uintibWnzXZ = BigInt("1874")
		const addressYrJDocZ = accounts[2]
		const uintXJWWVWV = BigInt("816")
		const addressa9xvac1 = accounts[3]
		const uintfpx7Mrj = BigInt("333")
		const addresseyz0I7O = accounts[3]
//		const boolqMEw9nl = await DipexnNjL00p.approveAndCall.call(addressYrJDocZ, uintibWnzXZ, {from: accounts[3]});
//		const booloSrTkoE = await DipexnNjL00p.approve.call(addressa9xvac1, uintXJWWVWV, {from: accounts[2]});
//		const boolbuVx8O5 = await DipexnNjL00p.approveAndCall.call(addresseyz0I7O, uintfpx7Mrj, {from: accounts[0]});

		await expect(DipexnNjL00p.approveAndCall.call(addressYrJDocZ, uintibWnzXZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringyMA2fT = "Ugfda36wjOMnciGb441BlsVJXNHpXGbsmzEliN"
		const stringa0x7Me5 = "JKEigv7inQ3PETOFD2KafyzZAf5f7rGtfjxpL6YO0pD4Su5gq"
		const uinttpTLLpJ = BigInt("280")
		const DipexykXseWX = await Dipex.new(stringyMA2fT, stringa0x7Me5, uinttpTLLpJ, {from: accounts[5]});
		const addressjXy58Hv = accounts[1]
		const uintwLroS5Q = BigInt("656")
		const addresswpPRWIN = accounts[3]
		const addressujksf1Y = accounts[3]
		const uintJ7zC2Ua = BigInt("1719")
		const addresswcZ6e1 = accounts[0]
		const addressXOEloB = accounts[3]
		const uintOUVZJzO = BigInt("503")
		const addressDiDQM3X = "0x0000000000000000000000000000000000000001"
		const uintuzYylI9 = BigInt("937")
		const addressddHjrW9 = "0x0000000000000000000000000000000000000001"
		const addressI9wAYvE = accounts[3]
		const uintG0Uwcm = BigInt("322")
		const addressLjfrr5k = accounts[1]
		const uintf2DOand = BigInt("1877")
		const addresssGgZgj8 = accounts[2]
//		const boolMViYwiY = await DipexykXseWX.transferownership.call(addressjXy58Hv, {from: accounts[2]});
//		const boolANnLSF = await DipexykXseWX.transferFrom.call(addressujksf1Y, addresswpPRWIN, uintwLroS5Q, {from: accounts[0]});
//		const boolE5Yj8BY = await DipexykXseWX.transferFrom.call(addressXOEloB, addresswcZ6e1, uintJ7zC2Ua, {from: accounts[3]});
//		const boolDG1EBag = await DipexykXseWX.approve.call(addressDiDQM3X, uintOUVZJzO, {from: accounts[5]});
//		const boolcKpq0J6 = await DipexykXseWX.transferFrom.call(addressI9wAYvE, addressddHjrW9, uintuzYylI9, {from: accounts[2]});
//		const boolDpMEZRc = await DipexykXseWX.approveAndCall.call(addressLjfrr5k, uintG0Uwcm, {from: accounts[0]});
//		const boolb3uUbFA = await DipexykXseWX.transfer.call(addresssGgZgj8, uintf2DOand, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DipexykXseWX.transferownership.call(addressjXy58Hv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringmb25NE6 = "tllC603CDfWzRcznaxRI4hQyFhmMkXMQjv5srJEVSVEpIsFptx76PJfPSLiyBXm3K"
		const stringQewNOeR = "olAXmMlXW92H2QJER1CchlGlRfslHFj2MUAb9pWN1SyDYtEscXLe"
		const uintVNCKX7L = BigInt("1612")
		const Dipexrr8zWrS = await Dipex.new(stringmb25NE6, stringQewNOeR, uintVNCKX7L, {from: accounts[2]});
		const uintejuUs7E = BigInt("414")
		const addressZ0TyT1T = accounts[5]
		const uintjINqwqK = BigInt("433")
		const addressd8QOvvx = accounts[5]
		const addressJORPc86 = accounts[4]
		const uintx07oQW = BigInt("375")
		const addressbLLAVr = accounts[2]
		const addressBn8JEo0 = accounts[1]
		const uintGf5H8X = BigInt("1903")
		const addressiOCvJlN = accounts[1]
		const uinth4BvW3O = BigInt("331")
		const addressseRHxS = accounts[2]
		const addressYoTXqVb = accounts[4]
		const uintKfmjOdV = BigInt("1555")
		const addressODwP2Mr = accounts[2]
		const addressCt0lgm9 = accounts[4]
		const uintCOJqGx = BigInt("544")
		const addresstMWsTzO = "0x0000000000000000000000000000000000000001"
		const addressnrULYxh = accounts[3]
		const booloEz6EAY = await Dipexrr8zWrS.approve.call(addressZ0TyT1T, uintejuUs7E, {from: accounts[4]});
//		const boolSgBP1Ve = await Dipexrr8zWrS.transferFrom.call(addressJORPc86, addressd8QOvvx, uintjINqwqK, {from: accounts[4]});
//		const boolZe7aoLp = await Dipexrr8zWrS.transferFrom.call(addressBn8JEo0, addressbLLAVr, uintx07oQW, {from: accounts[5]});
//		const booliDIMdkZ = await Dipexrr8zWrS.approve.call(addressiOCvJlN, uintGf5H8X, {from: accounts[0]});
//		const boolKSnte9F = await Dipexrr8zWrS.transferFrom.call(addressYoTXqVb, addressseRHxS, uinth4BvW3O, {from: accounts[3]});
//		const boolzD2Ek0u = await Dipexrr8zWrS.transferFrom.call(addressCt0lgm9, addressODwP2Mr, uintKfmjOdV, {from: accounts[3]});
//		const boolzHs9Sbr = await Dipexrr8zWrS.transferFrom.call(addressnrULYxh, addresstMWsTzO, uintCOJqGx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booloEz6EAY, true)
		await expect(Dipexrr8zWrS.transferFrom.call(addressJORPc86, addressd8QOvvx, uintjINqwqK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringQu3kO6d = "ncDd3NWZhoc2j8qUF3b6xGlPi2T1yUhAxXFt1CqO3slvFuFbhSryqyU9FWcVuFnjXqepmQ9l4R5ebnmHYKVqpdWcozKxi"
		const stringMiEIE7d = "4FiLxFE2Ld4hvhC66XqAOhVrppE2wRFMQTinT"
		const uintlusD8ja = BigInt("549")
		const DipexAupqR07 = await Dipex.new(stringQu3kO6d, stringMiEIE7d, uintlusD8ja, {from: accounts[1]});
		const addressXXhG9FW = accounts[1]
		const uintDDex8q = BigInt("1124")
		const addressyWTZu8w = accounts[2]
		const addressHpXh8WZ = accounts[2]
		const addresszPQind3 = accounts[1]
		const boolIpsOl31 = await DipexAupqR07.transferownership.call(addressXXhG9FW, {from: accounts[1]});
//		const bool0Ac1Fr = await DipexAupqR07.transferFrom.call(addressHpXh8WZ, addressyWTZu8w, uintDDex8q, {from: accounts[0]});
//		const booli4pbCPJ = await DipexAupqR07.transferownership.call(addresszPQind3, {from: accounts[1]});

		assert.equal(boolIpsOl31, true)
		await expect(DipexAupqR07.transferFrom.call(addressHpXh8WZ, addressyWTZu8w, uintDDex8q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringfgCVYqY = "vOlM1BmU7YvyvXS1319u5G9ka52Y71fggMd4Od8SGzQE7imrlHg"
		const stringk7v8cY = "mu6obIwRUldriXpXLNEWQrMMqXsn6vKkTwU5pJFtn1nXaLw2BfPn0lcYI8Np4RSld"
		const uintwVQ2Ly = BigInt("1238")
		const DipexupJm4V0 = await Dipex.new(stringfgCVYqY, stringk7v8cY, uintwVQ2Ly, {from: accounts[3]});
		const uintgQbuzjB = BigInt("881")
		const addresshSGJZ1z = accounts[5]
		const uinttE4cYBI = BigInt("1184")
		const addressImmJYN = accounts[4]
		const addressVVZ1LVJ = accounts[1]
		const uintNzS6aIF = BigInt("181")
		const addressy4OQ73R = accounts[3]
		const boolOzBWU0 = await DipexupJm4V0.approveAndCall.call(addresshSGJZ1z, uintgQbuzjB, {from: accounts[3]});
//		const boolIKgyESh = await DipexupJm4V0.transferFrom.call(addressVVZ1LVJ, addressImmJYN, uinttE4cYBI, {from: accounts[5]});
//		const boolgeePCIJ = await DipexupJm4V0.approve.call(addressy4OQ73R, uintNzS6aIF, {from: accounts[4]});

		assert.equal(boolOzBWU0, true)
		await expect(DipexupJm4V0.transferFrom.call(addressVVZ1LVJ, addressImmJYN, uinttE4cYBI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringHFxyHcI = "7RsYNghTuSbO9uJaobvDLF9fVFKxsTkpRYbWB3XCgZmjIUrlfJJobKkbf50SnjKF3X"
		const stringLIEN8lj = "dS7GXHLK9j5vbYbwZQtAqEEJhILw38nn7r0FzWzvJqiaLX3OY30r"
		const uintygFb8nD = BigInt("1486")
		const DipexyWzJHRC = await Dipex.new(stringHFxyHcI, stringLIEN8lj, uintygFb8nD, {from: "0x0000000000000000000000000000000000000001"});
		const uintK0VMbJH = BigInt("1919")
		const addressW4FulZu = accounts[5]
		const addressIJtwiBM = accounts[3]
		const uintNLS500y = BigInt("1871")
		const addresss0vhmLk = accounts[0]
		const addressfrMZjAY = accounts[4]
		const uintNZqyKkG = BigInt("1788")
		const addresshfMTuXg = accounts[3]
		const boolXuItDlN = await DipexyWzJHRC.transfer.call(addressW4FulZu, uintK0VMbJH, {from: accounts[1]});
		const bool5tVSGW = await DipexyWzJHRC.transferownership.call(addressIJtwiBM, {from: accounts[3]});
		const booljfmZi3r = await DipexyWzJHRC.transferFrom.call(addressfrMZjAY, addresss0vhmLk, uintNLS500y, {from: accounts[1]});
		const booldmeO9Bk = await DipexyWzJHRC.approveAndCall.call(addresshfMTuXg, uintNZqyKkG, {from: accounts[5]});
	});

	it('test for Dipex', async () => {
		const stringjhmXtu = "5ThVm"
		const stringFEH5tFn = "PrBJOixFKy5EPOc9KF6HLChY7y8bulTMDEdc69aHykGdqhRC"
		const uintiY83y9t = BigInt("565")
		const DipexkI6hP7g = await Dipex.new(stringjhmXtu, stringFEH5tFn, uintiY83y9t, {from: accounts[3]});
		const uintIFRzsT = BigInt("316")
		const addressqeoSsAY = accounts[4]
		const uinthTtEJ33 = BigInt("465")
		const addressx457ZSe = accounts[0]
		const uintcWZLySP = BigInt("0")
		const addressEFZeHKM = accounts[1]
		const addressgah0nIt = accounts[2]
		const uintMtIOPuO = BigInt("1201")
		const addressNgtpsbE = accounts[1]
		const booluDmAsHd = await DipexkI6hP7g.approve.call(addressqeoSsAY, uintIFRzsT, {from: accounts[2]});
		const booleFSAOR3 = await DipexkI6hP7g.transfer.call(addressx457ZSe, uinthTtEJ33, {from: accounts[3]});
		const boolO8jYsoU = await DipexkI6hP7g.transferFrom.call(addressgah0nIt, addressEFZeHKM, uintcWZLySP, {from: accounts[2]});
//		const boolLy1cSax = await DipexkI6hP7g.approveAndCall.call(addressNgtpsbE, uintMtIOPuO, {from: accounts[4]});

		assert.equal(boolO8jYsoU, true)
		assert.equal(booleFSAOR3, true)
		assert.equal(booluDmAsHd, true)
		await expect(DipexkI6hP7g.approveAndCall.call(addressNgtpsbE, uintMtIOPuO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})