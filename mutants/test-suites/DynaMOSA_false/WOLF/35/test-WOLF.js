const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringLkspC9B = "ziXof3wwJGQvu8IJd3ptVkgQlurNhWgjkdsIYNdv0vkKsuWPPDW7NuUB3o3kE"
		const stringhHWH2b1 = "HKA"
		const uintVfJG7VM = BigInt("1857")
		const WOLFzHyl0wA = await WOLF.new(stringLkspC9B, stringhHWH2b1, uintVfJG7VM, {from: accounts[0]});
		const uintLJG36oE = BigInt("1358")
		const addresszr0B778 = accounts[2]
		const addressrMYEaJb = accounts[4]
		const uintcHU5x9b = BigInt("1210")
		const addressndqsNEr = accounts[5]
		const uintlVxXFoD = BigInt("830")
		const addressrN3DdKC = accounts[3]
		const uintCDNV9y1 = BigInt("710")
		const addressDWcZiu1 = accounts[0]
		const uintEMJtlT3 = BigInt("1653")
		const addressPWRZu5C = accounts[2]
		const addressgLIJrER = accounts[0]
//		const boolRp0xmoU = await WOLFzHyl0wA.transferFrom.call(addressrMYEaJb, addresszr0B778, uintLJG36oE, {from: accounts[1]});
//		const boolMOu3Q1n = await WOLFzHyl0wA.approveAndCall.call(addressndqsNEr, uintcHU5x9b, {from: accounts[1]});
//		const boolQQ42wu = await WOLFzHyl0wA.approve.call(addressrN3DdKC, uintlVxXFoD, {from: accounts[5]});
//		const boolA7ykuGY = await WOLFzHyl0wA.approve.call(addressDWcZiu1, uintCDNV9y1, {from: accounts[3]});
//		const boolyp9NVW = await WOLFzHyl0wA.transferFrom.call(addressgLIJrER, addressPWRZu5C, uintEMJtlT3, {from: accounts[3]});

		await expect(WOLFzHyl0wA.transferFrom.call(addressrMYEaJb, addresszr0B778, uintLJG36oE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringDLGJUvL = "nIYEM5Jki8jAATyoY2lwpZu6n8DPTatIgURlYDQJty8bCWGoj8"
		const stringXIdxwrg = "FhQnMVRLky59wbka2zUavXCIEu"
		const uintZ2IJ5yG = BigInt("359")
		const WOLFwb3yz4o = await WOLF.new(stringDLGJUvL, stringXIdxwrg, uintZ2IJ5yG, {from: accounts[4]});
		const addressGCxWUlh = accounts[0]
		const uintOPP2A0z = BigInt("679")
		const address2ovUzU = accounts[1]
		const uintu77k4P = BigInt("1228")
		const addressR4ddOS = accounts[4]
		const address7PHFIk = accounts[1]
//		const boolY57Kk6R = await WOLFwb3yz4o.transferownership.call(addressGCxWUlh, {from: accounts[2]});
//		const boolPIgFYji = await WOLFwb3yz4o.approve.call(address2ovUzU, uintOPP2A0z, {from: accounts[4]});
//		const boolWwJa38F = await WOLFwb3yz4o.transferFrom.call(address7PHFIk, addressR4ddOS, uintu77k4P, {from: accounts[4]});

		await expect(WOLFwb3yz4o.transferownership.call(addressGCxWUlh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringUkb4GLZ = "2TlJ5eHNfeQ8qOBXje1ACV9ApblCGELtubWiS9Q9jjSWzmQ4Ng"
		const stringhJWmWxW = "9Zt6mBrP0S6Ki8PUJm8YQkuUX"
		const uintThOwL3a = BigInt("1612")
		const WOLFdDTYdk = await WOLF.new(stringUkb4GLZ, stringhJWmWxW, uintThOwL3a, {from: accounts[2]});
		const uintoKaSjvw = BigInt("631")
		const addressdCH4ryC = accounts[3]
		const uintr25r5Ja = BigInt("400")
		const addressf3jcGsR = accounts[2]
//		const boolNRHaxWu = await WOLFdDTYdk.approveAndCall.call(addressdCH4ryC, uintoKaSjvw, {from: accounts[1]});
//		const boolGJMLG2 = await WOLFdDTYdk.approveAndCall.call(addressf3jcGsR, uintr25r5Ja, {from: accounts[3]});

		await expect(WOLFdDTYdk.approveAndCall.call(addressdCH4ryC, uintoKaSjvw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringicZJLE8 = "X9sUMfH"
		const stringMI5CeIK = "MBipGkH3Kzcx4dnYHDJwPPhFFlqrSCsj9OT9"
		const uintLpQHD8s = BigInt("566")
		const WOLFBEDjWOh = await WOLF.new(stringicZJLE8, stringMI5CeIK, uintLpQHD8s, {from: accounts[2]});
		const uintfFcIq5l = BigInt("1902")
		const addressIqR9FiL = accounts[5]
		const uintFPbnGSh = BigInt("406")
		const addressSbYqAld = accounts[0]
		const uintYItk0KO = BigInt("113")
		const addressuGSicP = accounts[3]
		const uintINUeHB4 = BigInt("798")
		const addressdYCGAfB = accounts[1]
		const addressqlEC1CI = accounts[0]
		const uintSgU1Ch1 = BigInt("1921")
		const addressWHtSsjJ = accounts[1]
		const uintcXG4er = BigInt("634")
		const addressRmJNOMn = accounts[4]
//		const boolpNKCzz8 = await WOLFBEDjWOh.transfer.call(addressIqR9FiL, uintfFcIq5l, {from: accounts[4]});
//		const boolHaVWZN = await WOLFBEDjWOh.approveAndCall.call(addressSbYqAld, uintFPbnGSh, {from: accounts[1]});
//		const boolUdT73io = await WOLFBEDjWOh.approveAndCall.call(addressuGSicP, uintYItk0KO, {from: accounts[5]});
//		const boolkNzGEo4 = await WOLFBEDjWOh.transferFrom.call(addressqlEC1CI, addressdYCGAfB, uintINUeHB4, {from: accounts[0]});
//		const boolOdGQAo = await WOLFBEDjWOh.approve.call(addressWHtSsjJ, uintSgU1Ch1, {from: "0x0000000000000000000000000000000000000001"});
//		const booldhV94FY = await WOLFBEDjWOh.approveAndCall.call(addressRmJNOMn, uintcXG4er, {from: accounts[3]});

		await expect(WOLFBEDjWOh.transfer.call(addressIqR9FiL, uintfFcIq5l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringz18Jpyh = "3tS8kwNfhotMYIev9MgHtl9b4XbUWtRO9Y27CSAUhd"
		const string4OQFFq = "orOZK5jb9txOCizphSuOYv7LlNWtKZfhVUOATJMMyHIFdWlTzMRRMKSSWl1P5WLJrj0dfflPM7tYrJ9f6NGJBqpbKTXxJ2Hc"
		const uintSZ3gdA6 = BigInt("555")
		const WOLFocN2uUf = await WOLF.new(stringz18Jpyh, string4OQFFq, uintSZ3gdA6, {from: accounts[4]});
		const uintmVDRObX = BigInt("1963")
		const addressgAUm55G = accounts[0]
		const uintFMKYsa = BigInt("405")
		const addressLs5bRBE = "0x0000000000000000000000000000000000000001"
		const uintbIQKO2I = BigInt("113")
		const addressL3Wyq77 = accounts[2]
		const uintpigy56h = BigInt("1632")
		const addressZcVr1z = accounts[3]
		const uintSOiMbeO = BigInt("1102")
		const addressDthk99E = accounts[2]
		const boolluDW4C6 = await WOLFocN2uUf.approve.call(addressgAUm55G, uintmVDRObX, {from: accounts[4]});
		const boolid8KPZ6 = await WOLFocN2uUf.approve.call(addressLs5bRBE, uintFMKYsa, {from: accounts[0]});
//		const boolwrO9XhN = await WOLFocN2uUf.approveAndCall.call(addressL3Wyq77, uintbIQKO2I, {from: accounts[3]});
//		const booljB6HF6r = await WOLFocN2uUf.approveAndCall.call(addressZcVr1z, uintpigy56h, {from: accounts[0]});
//		const boolD2kF64h = await WOLFocN2uUf.approve.call(addressDthk99E, uintSOiMbeO, {from: accounts[2]});

		assert.equal(boolid8KPZ6, true)
		assert.equal(boolluDW4C6, true)
		await expect(WOLFocN2uUf.approveAndCall.call(addressL3Wyq77, uintbIQKO2I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringVjtuHMf = "jAgGxTPbJtNTyGfXSQGCQx3c3iLSnq5Z7u1EKvI7kUst6RstI4lUX8dd8RnIUmle"
		const stringzIAVDwI = "BfKcbXkiWiBYS5Km0ua4KMTzwORaTwJyB2oFlHKL5E"
		const uintZzfPmaV = BigInt("1345")
		const WOLFWq5nVtl = await WOLF.new(stringVjtuHMf, stringzIAVDwI, uintZzfPmaV, {from: "0x0000000000000000000000000000000000000001"});
		const uintVIrEd6K = BigInt("1438")
		const addressNB6ZXu = accounts[4]
		const uintmxuxne = BigInt("177")
		const addressHd5WHoR = accounts[2]
		const uintqhtK8nA = BigInt("363")
		const addressd71JJZt = accounts[2]
		const addressyfZARca = accounts[0]
		const uintFJhKMpc = BigInt("418")
		const addressmcmsQrD = accounts[2]
		const uintWOQ5x2C = BigInt("1369")
		const addressizHxKEZ = accounts[4]
		const addressOnnoTYh = accounts[5]
		const boolp0QmwzS = await WOLFWq5nVtl.approve.call(addressNB6ZXu, uintVIrEd6K, {from: accounts[1]});
		const boolxK0GHGx = await WOLFWq5nVtl.approveAndCall.call(addressHd5WHoR, uintmxuxne, {from: accounts[5]});
		const boolobhVa6H = await WOLFWq5nVtl.transferFrom.call(addressyfZARca, addressd71JJZt, uintqhtK8nA, {from: accounts[5]});
		const boolVt2P2Dt = await WOLFWq5nVtl.approveAndCall.call(addressmcmsQrD, uintFJhKMpc, {from: accounts[4]});
		const boolDYCPuxr = await WOLFWq5nVtl.transferFrom.call(addressOnnoTYh, addressizHxKEZ, uintWOQ5x2C, {from: accounts[0]});
	});

	it('test for WOLF', async () => {
		const stringFIt1Vq = "1ogAM7y6874BMBLICW3q8sO8HvXAETz58EWs"
		const stringCeUH3Hy = "U4ghcllpuom6E4UWqf4HoQaiEVhIMVze3i"
		const uintH2zyu15 = BigInt("693")
		const WOLFkRFsRQJ = await WOLF.new(stringFIt1Vq, stringCeUH3Hy, uintH2zyu15, {from: accounts[2]});
		const uintewyTcKz = BigInt("1029")
		const addresshSj7Gs = accounts[2]
		const uintwcMOVSg = BigInt("214")
		const addressmSi8Bzy = accounts[4]
		const uintD3hADLy = BigInt("190")
		const addressrA2frt = "0x0000000000000000000000000000000000000001"
		const uintTohLCx3 = BigInt("476")
		const addressfFpclXf = accounts[2]
		const uint5NZU5P = BigInt("1057")
		const addressJ718pWQ = accounts[0]
		const uintQ0qWTb9 = BigInt("1317")
		const addressfd6MGK = accounts[2]
		const addresslPKQopN = accounts[4]
		const boolusUcmWI = await WOLFkRFsRQJ.transfer.call(addresshSj7Gs, uintewyTcKz, {from: accounts[2]});
		const boolKgbPdnn = await WOLFkRFsRQJ.approve.call(addressmSi8Bzy, uintwcMOVSg, {from: accounts[2]});
		const booliKMNve2 = await WOLFkRFsRQJ.approve.call(addressrA2frt, uintD3hADLy, {from: accounts[4]});
//		const boolDAH0XP = await WOLFkRFsRQJ.approveAndCall.call(addressfFpclXf, uintTohLCx3, {from: accounts[1]});
//		const boollh0ZgDd = await WOLFkRFsRQJ.approve.call(addressJ718pWQ, uint5NZU5P, {from: accounts[1]});
//		const boolt5WJgXk = await WOLFkRFsRQJ.transferFrom.call(addresslPKQopN, addressfd6MGK, uintQ0qWTb9, {from: accounts[1]});

		assert.equal(boolKgbPdnn, true)
		assert.equal(booliKMNve2, true)
		assert.equal(boolusUcmWI, true)
		await expect(WOLFkRFsRQJ.approveAndCall.call(addressfFpclXf, uintTohLCx3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const string0v7hAi = "YVqBmdRYqt7baJGBsa4YRjU4nveQ8pCTYu1RiKiQfMDNqzdik4f0H4XhB5ornI2POSObukqvRE3lTyHhT84ZAd"
		const stringn06ce3p = "w3Pp375FTOiIy5Zi88TvoaWqk5WRfyfUNGLn1wte7xjLIA2kOYPQCRs0HSxnidrVII6kSwzRoJcFyEE"
		const uintqjZPMVW = BigInt("879")
		const WOLFoeA2f6a = await WOLF.new(string0v7hAi, stringn06ce3p, uintqjZPMVW, {from: accounts[5]});
		const uintkMbuDrY = BigInt("1511")
		const addresse10sePw = accounts[1]
		const uinti5Qlnrd = BigInt("1942")
		const addressip3RFJL = accounts[2]
		const uintB4YMTtT = BigInt("1068")
		const addressSqNQWXR = accounts[3]
		const uintUgqgc4Q = BigInt("1298")
		const addressUHOfT1X = accounts[5]
		const uintVEiofRL = BigInt("0")
		const addressYyNBWy5 = accounts[3]
		const addressMwPPiD = accounts[2]
		const uintsC9L7np = BigInt("1325")
		const addressKxeE3H4 = accounts[5]
		const uint93peaY = BigInt("670")
		const addressULygP0q = "0x0000000000000000000000000000000000000001"
		const uintPR8tnvc = BigInt("492")
		const addressE2pUi8 = accounts[2]
		const boolw2jNzbF = await WOLFoeA2f6a.approve.call(addresse10sePw, uintkMbuDrY, {from: "0x0000000000000000000000000000000000000001"});
		const boolHgFS6Bn = await WOLFoeA2f6a.approve.call(addressip3RFJL, uinti5Qlnrd, {from: accounts[1]});
		const boolzYgVEWk = await WOLFoeA2f6a.approve.call(addressSqNQWXR, uintB4YMTtT, {from: accounts[1]});
		const booltgykf5 = await WOLFoeA2f6a.approve.call(addressUHOfT1X, uintUgqgc4Q, {from: accounts[4]});
		const boolt7uj73 = await WOLFoeA2f6a.transferFrom.call(addressMwPPiD, addressYyNBWy5, uintVEiofRL, {from: accounts[2]});
//		const boolwjPmjCF = await WOLFoeA2f6a.approveAndCall.call(addressKxeE3H4, uintsC9L7np, {from: accounts[3]});
//		const boolosvTHTP = await WOLFoeA2f6a.approve.call(addressULygP0q, uint93peaY, {from: accounts[3]});
//		const boolmNoHi7y = await WOLFoeA2f6a.transfer.call(addressE2pUi8, uintPR8tnvc, {from: accounts[0]});

		assert.equal(boolHgFS6Bn, true)
		assert.equal(boolt7uj73, true)
		assert.equal(booltgykf5, true)
		assert.equal(boolw2jNzbF, true)
		assert.equal(boolzYgVEWk, true)
		await expect(WOLFoeA2f6a.approveAndCall.call(addressKxeE3H4, uintsC9L7np, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFIt1Vq = "1ogAM7y6874BMBLICW3q8sO8HvXAETz58EWs"
		const stringCeUH3Hy = "U4ghcllpuom6E4UWqf4HoQaiEVhIMVze3i"
		const uintQMktHV = BigInt("693")
		const WOLFkRFsRQJ = await WOLF.new(stringFIt1Vq, stringCeUH3Hy, uintQMktHV, {from: accounts[2]});
		const uintfeEnpIF = BigInt("1029")
		const addresseOnLe23 = accounts[2]
		const uintTbvCcv7 = BigInt("214")
		const addressLNbf8Wl = accounts[4]
		const uintXy1ljd8 = BigInt("761")
		const addressof7tz4f = accounts[3]
		const uintuAXker = BigInt("896")
		const addressI9atlzj = accounts[0]
		const addressTdVnA8z = "0x0000000000000000000000000000000000000001"
		const uintn5tO7X = BigInt("190")
		const addressBSksP0P = "0x0000000000000000000000000000000000000000"
		const uintUiSTuS0 = BigInt("1250")
		const addressI63pabJ = accounts[0]
		const uintPXKD60Z = BigInt("476")
		const addressIlQLGD9 = accounts[2]
		const uintbBUSkIW = BigInt("1057")
		const addressVGbLmsr = accounts[0]
		const uintj8QQ6B = BigInt("1317")
		const addressVlsWyo = accounts[2]
		const addresssD6Xh1G = accounts[4]
		const boolusUcmWI = await WOLFkRFsRQJ.transfer.call(addresseOnLe23, uintfeEnpIF, {from: accounts[2]});
		const boolKgbPdnn = await WOLFkRFsRQJ.approve.call(addressLNbf8Wl, uintTbvCcv7, {from: accounts[2]});
		const boolVh8ZHf = await WOLFkRFsRQJ.approveAndCall.call(addressof7tz4f, uintXy1ljd8, {from: accounts[2]});
//		const bool9YDPHu = await WOLFkRFsRQJ.transferFrom.call(addressTdVnA8z, addressI9atlzj, uintuAXker, {from: accounts[3]});
//		const booliKMNve2 = await WOLFkRFsRQJ.approve.call(addressBSksP0P, uintn5tO7X, {from: accounts[4]});
//		const boolh2q6kdL = await WOLFkRFsRQJ.approveAndCall.call(addressI63pabJ, uintUiSTuS0, {from: accounts[3]});
//		const boolDAH0XP = await WOLFkRFsRQJ.approveAndCall.call(addressIlQLGD9, uintPXKD60Z, {from: accounts[1]});
//		const boollh0ZgDd = await WOLFkRFsRQJ.approve.call(addressVGbLmsr, uintbBUSkIW, {from: accounts[1]});
//		const boolt5WJgXk = await WOLFkRFsRQJ.transferFrom.call(addresssD6Xh1G, addressVlsWyo, uintj8QQ6B, {from: accounts[1]});

		assert.equal(boolKgbPdnn, true)
		assert.equal(boolVh8ZHf, true)
		assert.equal(boolusUcmWI, true)
		await expect(WOLFkRFsRQJ.transferFrom.call(addressTdVnA8z, addressI9atlzj, uintuAXker, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFbNAnN3 = "QqSXyRHKTAhIKc451fhkjyKEDTxyaEdZr4ctZ3fXWob9BKDT6Azk8KMEjK7Ma7FEs3EHrkqLHtlYdCb"
		const stringVsK9bU8 = "lHaAOVt5t7"
		const uintxDNsJN = BigInt("731")
		const WOLFCi0y0g = await WOLF.new(stringFbNAnN3, stringVsK9bU8, uintxDNsJN, {from: accounts[1]});
		const uintuZzLw6 = BigInt("0")
		const addressSO97zc5 = accounts[6]
		const uintI88oNDx = BigInt("680")
		const address88hUgq = accounts[4]
		const uints8WQiRe = BigInt("757")
		const addressYrUJK4b = "0x0000000000000000000000000000000000000001"
		const addressFCfRlzW = accounts[3]
		const boolfE5rWp9 = await WOLFCi0y0g.approveAndCall.call(addressSO97zc5, uintuZzLw6, {from: accounts[1]});
//		const boolUzFSha0 = await WOLFCi0y0g.transfer.call(address88hUgq, uintI88oNDx, {from: accounts[5]});
//		const bool2S0lNY = await WOLFCi0y0g.transferFrom.call(addressFCfRlzW, addressYrUJK4b, uints8WQiRe, {from: accounts[3]});

		assert.equal(boolfE5rWp9, true)
		await expect(WOLFCi0y0g.transfer.call(address88hUgq, uintI88oNDx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFbNAnN3 = "QqSXyRHKTAhIKc451fhkjyKEDTxyaEdZr4ctZ3fXWob9BKDT6Azk8KMEjK7Ma7FEs3EHrkqLHtlYdCb"
		const stringVsK9bU8 = "lHaAOVt5t7"
		const uintOn9HLn = BigInt("731")
		const WOLFCi0y0g = await WOLF.new(stringFbNAnN3, stringVsK9bU8, uintOn9HLn, {from: accounts[1]});
		const uintzJrb9bX = BigInt("12")
		const addressy3LWZvZ = accounts[5]
		const uintCciKrES = BigInt("1113")
		const addressUzWxWtl = "0x00000000000000000000000000000000000000-1"
		const uintp8Vkqm = BigInt("1749")
		const addressDfx0387 = accounts[4]
		const addressVQKmv4V = accounts[2]
		const uintGwNRT48 = BigInt("1295")
		const addressfmy9GZ = accounts[1]
		const boolfE5rWp9 = await WOLFCi0y0g.approveAndCall.call(addressy3LWZvZ, uintzJrb9bX, {from: accounts[1]});
//		const boolJCyEmPo = await WOLFCi0y0g.approve.call(addressUzWxWtl, uintCciKrES, {from: accounts[3]});
//		const boolbXwTPJb = await WOLFCi0y0g.transferFrom.call(addressVQKmv4V, addressDfx0387, uintp8Vkqm, {from: accounts[2]});
//		const boolQU7aZB5 = await WOLFCi0y0g.approve.call(addressfmy9GZ, uintGwNRT48, {from: accounts[3]});

		assert.equal(boolfE5rWp9, true)
		await expect(WOLFCi0y0g.approve.call(addressUzWxWtl, uintCciKrES, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})