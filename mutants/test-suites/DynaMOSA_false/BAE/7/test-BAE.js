const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressuCiNG0p = accounts[3]
		const BAEvhSkNqL = await BAE.new(addressuCiNG0p, {from: accounts[0]});
		const uintnlahMs9 = BigInt("374")
		const uintPHsMSL = BigInt("838")
		const uintcZRJmFJ = BigInt("223")
		const uintjSP7p32 = BigInt("1593")
		const uintbO8fWE1 = BigInt("1887")
		const uintOKrnokW = BigInt("964")
		const uintuQR6zqI = BigInt("1448")
		const uintnKdHneL = BigInt("1925")
		const uintMm24t0 = BigInt("1089")
		const uintX6oksaa = BigInt("534")
		const uintLnMvif7 = BigInt("2011")
		const uintKWPGf9i = BigInt("68")
		const uintkCp5saQ = BigInt("549")
		const uinthXzxxhD = BigInt("1223")
//		const uint256amD4xBm = await BAEvhSkNqL.createAuction.call(uintjSP7p32, uintcZRJmFJ, uintPHsMSL, uintnlahMs9, {from: accounts[4]});
//		const uint256NlpEpbN = await BAEvhSkNqL.buy.call(uintbO8fWE1, {from: accounts[2]});
//		const uint256Wd4tR4g = await BAEvhSkNqL.resetAuction.call(uintnKdHneL, uintuQR6zqI, uintOKrnokW, {from: accounts[5]});
//		const uint256WA2AusZ = await BAEvhSkNqL.resetAuction.call(uintLnMvif7, uintX6oksaa, uintMm24t0, {from: accounts[3]});
//		const uint256whBDOG = await BAEvhSkNqL.resetAuction.call(uinthXzxxhD, uintkCp5saQ, uintKWPGf9i, {from: accounts[3]});

		await expect(BAEvhSkNqL.createAuction.call(uintjSP7p32, uintcZRJmFJ, uintPHsMSL, uintnlahMs9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressww0Oy0d = accounts[4]
		const BAEjO47tRu = await BAE.new(addressww0Oy0d, {from: accounts[3]});
		const uinthID5B4S = BigInt("1849")
		const uintiLH0Jp8 = BigInt("901")
		const uinteBhvUfB = BigInt("451")
//		const uint2569Gb4X5 = await BAEjO47tRu.concludeAuction.call(uinthID5B4S, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256GZlgK0F = await BAEjO47tRu.setAuctionFee.call(uintiLH0Jp8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rqYbrYo = await BAEjO47tRu.changePrintFee.call(uinteBhvUfB, {from: accounts[3]});

		await expect(BAEjO47tRu.concludeAuction.call(uinthID5B4S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressg1c7JyW = accounts[2]
		const BAEm8Eipcw = await BAE.new(addressg1c7JyW, {from: accounts[2]});
		const uintWApyPj6 = BigInt("320")
		const uintMbZVDZy = BigInt("140")
//		const uint256dnDVM1J = await BAEm8Eipcw.buy.call(uintWApyPj6, {from: accounts[1]});
//		const uint256UqiipMM = await BAEm8Eipcw.bid.call(uintMbZVDZy, {from: accounts[3]});

		await expect(BAEm8Eipcw.buy.call(uintWApyPj6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressycp09wn = "0x0000000000000000000000000000000000000001"
		const BAEZ7WpbjI = await BAE.new(addressycp09wn, {from: "0x0000000000000000000000000000000000000001"});
		const uintfVGQBJF = BigInt("1419")
		const uintz5kdrf2 = BigInt("294")
		const uintWOg2uQc = BigInt("301")
		const uintmyH3PIh = BigInt("1112")
		const uintIwswrZo = BigInt("383")
		const uintgBOZZrA = BigInt("1473")
		const uintu5wBUr7 = BigInt("131")
		const uintXqgrOAt = BigInt("1538")
		const uintv9AFU74 = BigInt("491")
		const uintbCvZPfA = BigInt("666")
		const uintXMldQCp = BigInt("1516")
		const uint256Umym8rS = await BAEZ7WpbjI.createAuction.call(uintmyH3PIh, uintWOg2uQc, uintz5kdrf2, uintfVGQBJF, {from: accounts[2]});
		const uint256sK4Buz = await BAEZ7WpbjI.createAuction.call(uintXqgrOAt, uintu5wBUr7, uintgBOZZrA, uintIwswrZo, {from: accounts[5]});
		const uint256s2VaurD = await BAEZ7WpbjI.setAuctionFee.call(uintv9AFU74, {from: accounts[0]});
		const uint256ebA96Ac = await BAEZ7WpbjI.setAuctionFee.call(uintbCvZPfA, {from: accounts[5]});
		const uint256vB2Tp3D = await BAEZ7WpbjI.changePrintFee.call(uintXMldQCp, {from: accounts[1]});
	});

	it('test for BAE', async () => {
		const addressShHIYGu = accounts[1]
		const BAEqp42Udw = await BAE.new(addressShHIYGu, {from: accounts[3]});
		const uintOGwLtdN = BigInt("248")
		const uintLELYrHn = BigInt("1716")
		const uinthrIXcbH = BigInt("1545")
		const uintIZtUHuB = BigInt("687")
		const uintzTNtCtV = BigInt("1977")
		const uintyQBY3kk = BigInt("1301")
		const uintIhKhPKL = BigInt("14")
//		const uint256i6qPjDC = await BAEqp42Udw.setAuctionFee.call(uintOGwLtdN, {from: accounts[4]});
//		const uint256yKzmga8 = await BAEqp42Udw.createAuction.call(uintzTNtCtV, uintIZtUHuB, uinthrIXcbH, uintLELYrHn, {from: accounts[4]});
//		const uint256Rx9V37d = await BAEqp42Udw.bid.call(uintyQBY3kk, {from: accounts[0]});
//		const uint256H5UXfjt = await BAEqp42Udw.setAuctionFee.call(uintIhKhPKL, {from: accounts[4]});

		await expect(BAEqp42Udw.setAuctionFee.call(uintOGwLtdN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressL8BOFdM = accounts[0]
		const BAEjkEUMp = await BAE.new(addressL8BOFdM, {from: accounts[5]});
		const uintOlTD1bG = BigInt("1778")
		const uintN9eo6M4 = BigInt("1896")
		const uintU1UIeLd = BigInt("428")
		const uintyLoyiXb = BigInt("262")
		const uintoFpuwku = BigInt("78")
		const uintfm1pK96 = BigInt("1220")
		const uintgy79Nds = BigInt("323")
//		const uint256OrPHFgD = await BAEjkEUMp.resetAuction.call(uintU1UIeLd, uintN9eo6M4, uintOlTD1bG, {from: accounts[4]});
//		const uint256BeS2GaH = await BAEjkEUMp.createAuction.call(uintgy79Nds, uintfm1pK96, uintoFpuwku, uintyLoyiXb, {from: accounts[5]});

		await expect(BAEjkEUMp.resetAuction.call(uintU1UIeLd, uintN9eo6M4, uintOlTD1bG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressuXkP50D = accounts[0]
		const BAEJH4KaAS = await BAE.new(addressuXkP50D, {from: accounts[3]});
		const uintWe3yz8A = BigInt("1612")
		const uintddQcyFO = BigInt("1231")
		const uintPgM6dRU = BigInt("1401")
		const uintFjDczx3 = BigInt("539")
		const uintA4GLv4R = BigInt("310")
		const uintUxhKkbX = BigInt("1306")
		const uintiCB0xSa = BigInt("406")
		const uintgb3kRNx = BigInt("52")
		const uintfB6tWiK = BigInt("1049")
		const uintHXfVyax = BigInt("1084")
		const uintTTZGEZh = BigInt("1356")
//		const uint256oo3bczR = await BAEJH4KaAS.bid.call(uintWe3yz8A, {from: accounts[5]});
//		const uint256bWAVPgH = await BAEJH4KaAS.concludeAuction.call(uintddQcyFO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256xFYhq0L = await BAEJH4KaAS.changePrintFee.call(uintPgM6dRU, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256T9Elxux = await BAEJH4KaAS.setAuctionFee.call(uintFjDczx3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256OoePJvA = await BAEJH4KaAS.createAuction.call(uintgb3kRNx, uintiCB0xSa, uintUxhKkbX, uintA4GLv4R, {from: accounts[3]});
//		const uint256D8FAVWD = await BAEJH4KaAS.resetAuction.call(uintTTZGEZh, uintHXfVyax, uintfB6tWiK, {from: accounts[1]});

		await expect(BAEJH4KaAS.bid.call(uintWe3yz8A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})