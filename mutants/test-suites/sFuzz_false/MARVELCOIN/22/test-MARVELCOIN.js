const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintxeNbaRh = BigInt("68")
		const stringcAFwLZf = "BhPp036DNpcDaO7Ekn89UjRjfzmHR16xsN38HGMzGHQ2zusCSYoQ91NWwepoQIOPNnGSpdwFc4KZ"
		const stringyHVamM = "3geUk9m6kKuPri6ZczBv2xhiCju7aQMsalpRBVk0KkwIAVIjH7l6SQLXisFr02"
		const MARVELCOINqoM4UGe = await MARVELCOIN.new(uintxeNbaRh, stringcAFwLZf, stringyHVamM, {from: accounts[1]});
		const uintzEjfLxm = BigInt("1133")
		const uintGDyA1D = BigInt("1177")
		const addressQsKr06Q = accounts[4]
		const uintjbbzcaJ = BigInt("1203")
		const addressM5pHPKD = accounts[2]
		const uintrWSuh8Q = BigInt("1788")
		const addresstEZ9r9J = accounts[4]
		const uintaH8TI7e = BigInt("985")
		const addressQGcatD = accounts[1]
		const addressgomrKBs = accounts[4]
		const boolvulA7DB = await MARVELCOINqoM4UGe.burn.call(uintzEjfLxm, {from: accounts[1]});
		const boolV49tT1d = await MARVELCOINqoM4UGe.approve.call(addressQsKr06Q, uintGDyA1D, {from: accounts[3]});
//		const boolhto0Ins = await MARVELCOINqoM4UGe.transfer.call(addressM5pHPKD, uintjbbzcaJ, {from: accounts[0]});
//		const boolBr8DDGS = await MARVELCOINqoM4UGe.approve.call(addresstEZ9r9J, uintrWSuh8Q, {from: accounts[2]});
//		const booltVAihCF = await MARVELCOINqoM4UGe.transferFrom.call(addressgomrKBs, addressQGcatD, uintaH8TI7e, {from: accounts[0]});

		assert.equal(boolV49tT1d, true)
		assert.equal(boolvulA7DB, true)
		await expect(MARVELCOINqoM4UGe.transfer.call(addressM5pHPKD, uintjbbzcaJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintZw4HRxu = BigInt("1488")
		const stringT8ztT8J = "L6zG4DmO8dh4KbrWJLFL1nVLqN7ENHIwtGE3YbiqJX64xC4DQ3QfdVuRtiTFEz91DnT96rr"
		const stringL2Owh3N = "vljUO6t5Zhva7N0zokV8YqT09VOfikRM3kvc8M2Y44WnVD7KTYB432UMAneTHSecVTVgFZav4tCOv"
		const MARVELCOINajwkFW = await MARVELCOIN.new(uintZw4HRxu, stringT8ztT8J, stringL2Owh3N, {from: accounts[0]});
		const byte7HOd2d = "0x1707160b0806071f04170c1f12031b1e1001"
		const uintjSGH4Dj = BigInt("1421")
		const addressFPsFeDE = accounts[2]
		const uintNkt7n2 = BigInt("560")
		const byteSFrDnw1 = "0x041f03070a101a02111601090a0a17160216"
		const uintJimNZOv = BigInt("1094")
		const addressNjBqJiV = accounts[2]
		const uintMxbCzeC = BigInt("58")
		const addressDmFnH4A = accounts[3]
		const uintI5OcgIT = BigInt("1350")
//		const boolfjKC2h = await MARVELCOINajwkFW.approveAndCall.call(addressFPsFeDE, uintjSGH4Dj, byte7HOd2d, {from: accounts[3]});
//		const boolRqy4TSi = await MARVELCOINajwkFW.burn.call(uintNkt7n2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIBaUiyA = await MARVELCOINajwkFW.approveAndCall.call(addressNjBqJiV, uintJimNZOv, byteSFrDnw1, {from: accounts[0]});
//		const boolxXg4pwP = await MARVELCOINajwkFW.transfer.call(addressDmFnH4A, uintMxbCzeC, {from: accounts[4]});
//		const boolHF7Alfw = await MARVELCOINajwkFW.burn.call(uintI5OcgIT, {from: accounts[1]});

		await expect(MARVELCOINajwkFW.approveAndCall.call(addressFPsFeDE, uintjSGH4Dj, byte7HOd2d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintzsQGCWu = BigInt("715")
		const stringa6vIB0d = "bW7Qo97Cdkmfih94R55qrdozD9LKun3dOr4h3KZSh"
		const stringSSxCuN8 = "qCaboBqDi"
		const MARVELCOINCbx7iAv = await MARVELCOIN.new(uintzsQGCWu, stringa6vIB0d, stringSSxCuN8, {from: "0x0000000000000000000000000000000000000001"});
		const uintMn63zQP = BigInt("1614")
		const addressUnU5KBs = accounts[2]
		const uintBDlCKvJ = BigInt("1240")
		const uintpHWp7aT = BigInt("1474")
		const addressJyPChEz = accounts[1]
		const addresszI8wdcX = accounts[4]
		const boolhRXS49c = await MARVELCOINCbx7iAv.transfer.call(addressUnU5KBs, uintMn63zQP, {from: accounts[2]});
		const boolMDbDiNG = await MARVELCOINCbx7iAv.burn.call(uintBDlCKvJ, {from: accounts[3]});
		const boolwZ1y6L1 = await MARVELCOINCbx7iAv.transferFrom.call(addresszI8wdcX, addressJyPChEz, uintpHWp7aT, {from: accounts[0]});
	});

	it('test for MARVELCOIN', async () => {
		const uintJwjmbGC = BigInt("1587")
		const stringnMyMkFq = "WdGEtefLtiwrrK6ReuEdVfIv9aEenzi8r7d5AyXOtsQ5qOnPD5kA6RRsL8YbudEpk5JzYGo"
		const stringYVPBap4 = "8GSh3rAiXVlwsRa289Jv8CNBu0YbIIEAP3ZJD7wxuDgQkqBBEzENVsLG7FMbEqUyQgM"
		const MARVELCOINsvxfB3d = await MARVELCOIN.new(uintJwjmbGC, stringnMyMkFq, stringYVPBap4, {from: accounts[4]});
		const uintsGccank = BigInt("260")
		const addressJS9YhOy = accounts[3]
		const uintUnAYc9t = BigInt("603")
		const addresstvRjobM = accounts[5]
		const addressX9IgtCg = accounts[3]
		const byteRCWVWTh = "0x1e061b0a1a1b020c1e03140d1c1c0e2003120e070113"
		const uintpg8SJpY = BigInt("791")
		const addressblrDW5k = accounts[4]
		const bytefJIV8ZT = "0x1c091b0710121b0b10170b1e130b0e191f0f151d010c"
		const uintoambyPC = BigInt("1202")
		const addressPnjIvWK = accounts[0]
		const booluX8F3Kh = await MARVELCOINsvxfB3d.approve.call(addressJS9YhOy, uintsGccank, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqSGY11Q = await MARVELCOINsvxfB3d.transferFrom.call(addressX9IgtCg, addresstvRjobM, uintUnAYc9t, {from: accounts[0]});
//		const boolQI4X96v = await MARVELCOINsvxfB3d.approveAndCall.call(addressblrDW5k, uintpg8SJpY, byteRCWVWTh, {from: accounts[3]});
//		const boolJGzcziw = await MARVELCOINsvxfB3d.approveAndCall.call(addressPnjIvWK, uintoambyPC, bytefJIV8ZT, {from: accounts[1]});

		assert.equal(booluX8F3Kh, true)
		await expect(MARVELCOINsvxfB3d.transferFrom.call(addressX9IgtCg, addresstvRjobM, uintUnAYc9t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintrf4gNrh = BigInt("1225")
		const stringPY2jkLN = "U8wdwi8qi7IECJEjFHfAoCTvDqgv8DAYizcLltGqVU1GvXZzy2sqBrBVhRVp57Xr33zVItHsfGhp04sk5o"
		const stringcYrYpBY = "UF7cBUn"
		const MARVELCOINn9uRfkR = await MARVELCOIN.new(uintrf4gNrh, stringPY2jkLN, stringcYrYpBY, {from: accounts[3]});
		const uintuO9GnrI = BigInt("788")
		const addressNyz0POT = accounts[1]
		const uintQ7mBKen = BigInt("447")
		const addresssII9nrq = accounts[0]
		const addressVK05UvP = accounts[4]
		const uintgLq8OPP = BigInt("690")
		const addressUzyI58t = accounts[1]
		const uintUy1Sk3U = BigInt("1964")
		const addressWAmlx5 = "0x0000000000000000000000000000000000000001"
		const uintqAIQmF = BigInt("982")
		const addresscNFE1tX = accounts[2]
//		const booloYXvm9L = await MARVELCOINn9uRfkR.burnFrom.call(addressNyz0POT, uintuO9GnrI, {from: accounts[0]});
//		const booltHvSDZx = await MARVELCOINn9uRfkR.transferFrom.call(addressVK05UvP, addresssII9nrq, uintQ7mBKen, {from: accounts[1]});
//		const boolbrYezcY = await MARVELCOINn9uRfkR.transfer.call(addressUzyI58t, uintgLq8OPP, {from: accounts[4]});
//		const boolNeqJl9s = await MARVELCOINn9uRfkR.approve.call(addressWAmlx5, uintUy1Sk3U, {from: accounts[2]});
//		const boolARRYEk = await MARVELCOINn9uRfkR.approve.call(addresscNFE1tX, uintqAIQmF, {from: accounts[3]});

		await expect(MARVELCOINn9uRfkR.burnFrom.call(addressNyz0POT, uintuO9GnrI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})