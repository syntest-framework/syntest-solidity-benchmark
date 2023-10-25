const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringVRV3QPa = "pzFORJl9gCYqkfzm6b52ynoR0jXxjBs3QbYnRKiAcQNnirELhuyytF"
		const stringluNS1In = "orz7PK9auAEd1np6bUwkZROq3QoIhBPDnl5SDHQhiH"
		const uintdWS2Rgz = BigInt("1481")
		const WOLFYGLT13F = await WOLF.new(stringVRV3QPa, stringluNS1In, uintdWS2Rgz, {from: accounts[5]});
		const uintizfJkiq = BigInt("1078")
		const address07RayA = accounts[5]
		const uinta9FHWs = BigInt("93")
		const addresspchkmBp = accounts[1]
		const uintTv2J2Z = BigInt("1198")
		const addressiJhuuSt = accounts[2]
		const uints1mu8fh = BigInt("929")
		const addressuFeLrmA = accounts[1]
		const uintlzQCKb = BigInt("337")
		const addressyIfg8V1 = accounts[1]
		const addresscftfQs7 = accounts[0]
//		const boolf3IYuqQ = await WOLFYGLT13F.approveAndCall.call(address07RayA, uintizfJkiq, {from: accounts[2]});
//		const boolzUForFn = await WOLFYGLT13F.approveAndCall.call(addresspchkmBp, uinta9FHWs, {from: accounts[4]});
//		const boolgovMlCL = await WOLFYGLT13F.transfer.call(addressiJhuuSt, uintTv2J2Z, {from: accounts[3]});
//		const boolxj3eTVk = await WOLFYGLT13F.approveAndCall.call(addressuFeLrmA, uints1mu8fh, {from: accounts[5]});
//		const boolZGAk8di = await WOLFYGLT13F.transferFrom.call(addresscftfQs7, addressyIfg8V1, uintlzQCKb, {from: accounts[0]});

		await expect(WOLFYGLT13F.approveAndCall.call(address07RayA, uintizfJkiq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringBYrOP6g = "712yeBl7XwRzl77csrF35bii"
		const stringwkgvtoY = "KsTMCRiiLxsEzAdkx8"
		const uintoAYA22o = BigInt("1843")
		const WOLFlnbhibU = await WOLF.new(stringBYrOP6g, stringwkgvtoY, uintoAYA22o, {from: accounts[2]});
		const uintEmZCRP = BigInt("1037")
		const addressRjOC2Wz = "0x0000000000000000000000000000000000000001"
		const uintt80hDJi = BigInt("1334")
		const addressIggZOC = accounts[5]
		const addressLu7mu9j = accounts[0]
		const uintZmgiM84 = BigInt("131")
		const address8tdyY2 = accounts[0]
		const boolDUU8INc = await WOLFlnbhibU.approve.call(addressRjOC2Wz, uintEmZCRP, {from: accounts[0]});
//		const boolLd4OU7Y = await WOLFlnbhibU.approveAndCall.call(addressIggZOC, uintt80hDJi, {from: accounts[5]});
//		const boolBv4JrBo = await WOLFlnbhibU.transferownership.call(addressLu7mu9j, {from: accounts[2]});
//		const boolDuGSsLu = await WOLFlnbhibU.approveAndCall.call(address8tdyY2, uintZmgiM84, {from: accounts[1]});

		assert.equal(boolDUU8INc, true)
		await expect(WOLFlnbhibU.approveAndCall.call(addressIggZOC, uintt80hDJi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringRBwifWV = "ZV5RNPVi824z6378Yk1Sfw7DTFDY9w1n3XggakLqaIJeJpYXrYoeizYRn87nJP0BiS1MOTag2hZJue1JNGi7Kf4SpK5C"
		const stringc06TG91 = "TyzNF3TvY237Irv962XWNC5Z5z1CsaKx9rBRRdtVKIiYdtrR"
		const uintWv2iZkJ = BigInt("433")
		const WOLFzNU0KZi = await WOLF.new(stringRBwifWV, stringc06TG91, uintWv2iZkJ, {from: accounts[2]});
		const addressuvQRBLp = accounts[4]
		const uintk6RKFef = BigInt("1453")
		const addressZF0URfm = accounts[1]
		const addressz0UyAvc = accounts[2]
		const uintVt2W6WH = BigInt("1449")
		const addressPnEX7Yp = accounts[3]
		const uintg5PkpK = BigInt("1737")
		const addressuZuUnDS = accounts[3]
		const uintLmBVHLc = BigInt("755")
		const addressYuGzNv9 = accounts[2]
		const uintWppNpUy = BigInt("1194")
		const addressek9j7vN = accounts[5]
//		const booljGgGEmG = await WOLFzNU0KZi.transferownership.call(addressuvQRBLp, {from: accounts[0]});
//		const booluNxAOaJ = await WOLFzNU0KZi.transferFrom.call(addressz0UyAvc, addressZF0URfm, uintk6RKFef, {from: accounts[5]});
//		const boolpEdjdC7 = await WOLFzNU0KZi.approve.call(addressPnEX7Yp, uintVt2W6WH, {from: accounts[1]});
//		const boolpT41LM9 = await WOLFzNU0KZi.approveAndCall.call(addressuZuUnDS, uintg5PkpK, {from: accounts[2]});
//		const boolfFb77Go = await WOLFzNU0KZi.approve.call(addressYuGzNv9, uintLmBVHLc, {from: accounts[3]});
//		const boolZcbInF = await WOLFzNU0KZi.approve.call(addressek9j7vN, uintWppNpUy, {from: accounts[5]});

		await expect(WOLFzNU0KZi.transferownership.call(addressuvQRBLp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringVQatBbE = "fH4eaFexWse6Lsqh1MkYVEx50PiAvTYsphjcWcu51XflPOzDp55QLQ7ngU"
		const stringQyg35jb = "rzozllHimC894basuqioFD5yVGYIubwmX"
		const uintVnTo0r = BigInt("1234")
		const WOLFKpITcJz = await WOLF.new(stringVQatBbE, stringQyg35jb, uintVnTo0r, {from: accounts[5]});
		const uintTXUyeAh = BigInt("1582")
		const addressoKeDulW = accounts[5]
		const addresszRtrqIG = accounts[2]
		const uintH62UUiS = BigInt("1108")
		const addressrMavM4o = accounts[3]
		const uintEI20xLO = BigInt("135")
		const addressBtalLGv = accounts[4]
//		const boolE8JhLV = await WOLFKpITcJz.transferFrom.call(addresszRtrqIG, addressoKeDulW, uintTXUyeAh, {from: accounts[0]});
//		const boolCIGNcV0 = await WOLFKpITcJz.transfer.call(addressrMavM4o, uintH62UUiS, {from: accounts[2]});
//		const boolp5dchYR = await WOLFKpITcJz.approve.call(addressBtalLGv, uintEI20xLO, {from: accounts[5]});

		await expect(WOLFKpITcJz.transferFrom.call(addresszRtrqIG, addressoKeDulW, uintTXUyeAh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringRvFba3H = "kNY95TyokaUdk23rkpXOX3LMXONIOpD4V4TMv5LXRGUzU2bxDmEaMNoJijU9ADeSwBjULPUWKm78NbDOXVyV"
		const string9CmGg1 = "FzIBRsZsa6ff0ythCatDldsbbkewns9ImvL1ZlQT"
		const uintN5hfB4t = BigInt("1324")
		const WOLFOqFXRs = await WOLF.new(stringRvFba3H, string9CmGg1, uintN5hfB4t, {from: "0x0000000000000000000000000000000000000001"});
		const uintubOYco = BigInt("1306")
		const addressiwGSsoZ = accounts[3]
		const uintFXEXFHY = BigInt("1095")
		const addressF3gtf2C = accounts[1]
		const addressvwA6UQ2 = accounts[3]
		const uintbMJRA4b = BigInt("2040")
		const addressQ4Zh8P = accounts[1]
		const uintrw6LCA5 = BigInt("1949")
		const addressx58XGmy = accounts[4]
		const addressJAhEaJo = accounts[2]
		const addressnoX63go = accounts[2]
		const uintl5Tlqt = BigInt("636")
		const addressau3pbAz = accounts[5]
		const boolPNkYiUo = await WOLFOqFXRs.approve.call(addressiwGSsoZ, uintubOYco, {from: accounts[1]});
		const boolMfccvEn = await WOLFOqFXRs.transferFrom.call(addressvwA6UQ2, addressF3gtf2C, uintFXEXFHY, {from: accounts[2]});
		const boolXDTe9Ya = await WOLFOqFXRs.approveAndCall.call(addressQ4Zh8P, uintbMJRA4b, {from: accounts[1]});
		const boolXLPJ4EK = await WOLFOqFXRs.transferFrom.call(addressJAhEaJo, addressx58XGmy, uintrw6LCA5, {from: accounts[2]});
		const boolynMjDG = await WOLFOqFXRs.transferownership.call(addressnoX63go, {from: accounts[5]});
		const boolawtGJ1l = await WOLFOqFXRs.approve.call(addressau3pbAz, uintl5Tlqt, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WOLF', async () => {
		const stringtW3DiIB = "61zbhO8JnD1o5YDCq53fmRRqzYPfbukt2Da8HD0bbtADF9Q"
		const stringC5RBTN = "jJpKOQnwRQKReuSVqjSEArTd"
		const uintxiD0SxO = BigInt("975")
		const WOLFLZTxy7u = await WOLF.new(stringtW3DiIB, stringC5RBTN, uintxiD0SxO, {from: accounts[1]});
		const uintshidqio = BigInt("35")
		const addressiKEIU5E = accounts[4]
		const uinttRMIEVw = BigInt("967")
		const addressWi2GA4K = accounts[2]
		const addressXLR31E4 = accounts[2]
		const uintnlbIYWE = BigInt("842")
		const addressLPsGX2 = accounts[3]
		const uintaUVhO0i = BigInt("1422")
		const addressEMGW6VH = "0x0000000000000000000000000000000000000001"
		const addresssRPkFKN = accounts[1]
		const booltGHrRJy = await WOLFLZTxy7u.transfer.call(addressiKEIU5E, uintshidqio, {from: accounts[1]});
//		const boolOodDk7W = await WOLFLZTxy7u.transferFrom.call(addressXLR31E4, addressWi2GA4K, uinttRMIEVw, {from: accounts[4]});
//		const boolO1uu4Xw = await WOLFLZTxy7u.transfer.call(addressLPsGX2, uintnlbIYWE, {from: accounts[3]});
//		const booleUvx5Gw = await WOLFLZTxy7u.transferFrom.call(addresssRPkFKN, addressEMGW6VH, uintaUVhO0i, {from: accounts[1]});

		assert.equal(booltGHrRJy, true)
		await expect(WOLFLZTxy7u.transferFrom.call(addressXLR31E4, addressWi2GA4K, uinttRMIEVw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringXzbdhbe = "QcRIe7ssIf8yu7fOYyASrbDNAU75wdSHNR1RnEgaIwolu7"
		const stringbN6CPXC = "GhFqIp73dSCHEQpcoxq012HFa8tXFgmJTqcj4PTwOsvoIXtrs1W8OnHCqSL9ksXo736TrYI"
		const uintk5hOkQV = BigInt("1058")
		const WOLFnXFBzo = await WOLF.new(stringXzbdhbe, stringbN6CPXC, uintk5hOkQV, {from: accounts[0]});
		const uintFiJfo1q = BigInt("1656")
		const addressxw2E0o2 = accounts[1]
		const uintC6whMRT = BigInt("1937")
		const addressahoEqYY = accounts[0]
		const addressJIvUiJj = accounts[4]
		const uintzNsggqu = BigInt("1790")
		const addressDRcEm1 = accounts[1]
		const addressEmp6axw = accounts[2]
		const uintbppXhPQ = BigInt("194")
		const addressm1ocbvL = accounts[0]
		const addressKsCDNJk = accounts[3]
		const uintHAvfIkr = BigInt("1874")
		const addressjpD8Mqs = "0x0000000000000000000000000000000000000001"
//		const boolfNbaguD = await WOLFnXFBzo.transfer.call(addressxw2E0o2, uintFiJfo1q, {from: accounts[5]});
//		const boolPVLoQQg = await WOLFnXFBzo.transferFrom.call(addressJIvUiJj, addressahoEqYY, uintC6whMRT, {from: accounts[0]});
//		const boolac1619x = await WOLFnXFBzo.transferFrom.call(addressEmp6axw, addressDRcEm1, uintzNsggqu, {from: accounts[5]});
//		const boolAo06ni8 = await WOLFnXFBzo.transferFrom.call(addressKsCDNJk, addressm1ocbvL, uintbppXhPQ, {from: accounts[3]});
//		const boolETSXVxM = await WOLFnXFBzo.approve.call(addressjpD8Mqs, uintHAvfIkr, {from: accounts[4]});

		await expect(WOLFnXFBzo.transfer.call(addressxw2E0o2, uintFiJfo1q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringtW3DiIB = "61zbhO8JnD1o5YDCq53fmRRqzYPfbukt2Da8HD0bbtADF9Q"
		const stringC5RBTN = "jJpKOQnwRQKReuSVqjSEArTd"
		const uintBV2RuN = BigInt("975")
		const WOLFLZTxy7u = await WOLF.new(stringtW3DiIB, stringC5RBTN, uintBV2RuN, {from: accounts[1]});
		const uintMBA8XAr = BigInt("1301")
		const addressgCOiLR = accounts[0]
		const uints5sQNYG = BigInt("35")
		const addressxLVnwL0 = accounts[4]
		const uintosgzt6N = BigInt("365")
		const addresswbMpEc = accounts[1]
		const uint4qTL6M = BigInt("967")
		const addressPXJXaCv = accounts[2]
		const addresso1WlE33 = accounts[2]
		const boolMwlUkS = await WOLFLZTxy7u.approve.call(addressgCOiLR, uintMBA8XAr, {from: accounts[2]});
		const booltGHrRJy = await WOLFLZTxy7u.transfer.call(addressxLVnwL0, uints5sQNYG, {from: accounts[1]});
		const boolYlLnwmi = await WOLFLZTxy7u.approveAndCall.call(addresswbMpEc, uintosgzt6N, {from: accounts[1]});
//		const boolOodDk7W = await WOLFLZTxy7u.transferFrom.call(addresso1WlE33, addressPXJXaCv, uint4qTL6M, {from: accounts[4]});

		assert.equal(boolMwlUkS, true)
		assert.equal(boolYlLnwmi, true)
		assert.equal(booltGHrRJy, true)
		await expect(WOLFLZTxy7u.transferFrom.call(addresso1WlE33, addressPXJXaCv, uint4qTL6M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringtW3DiIB = "61zbhO8JnD1o5YDCq53fmRRqzYPfbukt2Da8HD0bbtADF9Q"
		const stringC5RBTN = "jJpKOQnwRQKReuSVqjSEArTd"
		const uintHW3MINF = BigInt("975")
		const WOLFLZTxy7u = await WOLF.new(stringtW3DiIB, stringC5RBTN, uintHW3MINF, {from: accounts[1]});
		const uintJ6yhAaG = BigInt("0")
		const addressuQ4ukPu = accounts[4]
		const uintM4E3U3p = BigInt("48")
		const addressDaSt8Am = accounts[1]
		const uinttts4MYO = BigInt("803")
		const addressWQLcEZ = accounts[0]
		const addressl9a1dyJ = accounts[5]
		const addressox5jmF = accounts[1]
		const booltGHrRJy = await WOLFLZTxy7u.transfer.call(addressuQ4ukPu, uintJ6yhAaG, {from: accounts[1]});
		const boolJUra4BI = await WOLFLZTxy7u.approveAndCall.call(addressDaSt8Am, uintM4E3U3p, {from: accounts[1]});
//		const boolF2x1Fn = await WOLFLZTxy7u.transferFrom.call(addressl9a1dyJ, addressWQLcEZ, uinttts4MYO, {from: accounts[2]});
//		const boolxhbqPqu = await WOLFLZTxy7u.transferownership.call(addressox5jmF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJUra4BI, true)
		assert.equal(booltGHrRJy, true)
		await expect(WOLFLZTxy7u.transferFrom.call(addressl9a1dyJ, addressWQLcEZ, uinttts4MYO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringtW3DiIB = "61zbhO8JnD1o5YDCq53fmRRqzYPfbukt2Da8HD0bbtADF9Q"
		const stringC5RBTN = "jJpKOQnwRQKReuSVqjSEArTd"
		const uintLuzr859 = BigInt("975")
		const WOLFLZTxy7u = await WOLF.new(stringtW3DiIB, stringC5RBTN, uintLuzr859, {from: accounts[1]});
		const uintdsQRKTv = BigInt("0")
		const addressqM1tkwz = accounts[2]
		const addressJGfK9PT = accounts[3]
		const uintnfAA50 = BigInt("1993")
		const addressVJcNSvg = accounts[2]
		const uintQXa8Nv = BigInt("1660")
		const addressXIUF9KI = accounts[2]
		const uintJS2AOHQ = BigInt("857")
		const addressxpyKfGE = accounts[2]
		const boolJUra4BI = await WOLFLZTxy7u.approveAndCall.call(addressqM1tkwz, uintdsQRKTv, {from: accounts[1]});
//		const boolrOYwFGh = await WOLFLZTxy7u.transferownership.call(addressJGfK9PT, {from: accounts[5]});
//		const boolgNvJTDW = await WOLFLZTxy7u.approveAndCall.call(addressVJcNSvg, uintnfAA50, {from: accounts[4]});
//		const boolN6qZUS = await WOLFLZTxy7u.approveAndCall.call(addressXIUF9KI, uintQXa8Nv, {from: accounts[4]});
//		const boolpIA1GNt = await WOLFLZTxy7u.approveAndCall.call(addressxpyKfGE, uintJS2AOHQ, {from: accounts[3]});

		assert.equal(boolJUra4BI, true)
		await expect(WOLFLZTxy7u.transferownership.call(addressJGfK9PT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})