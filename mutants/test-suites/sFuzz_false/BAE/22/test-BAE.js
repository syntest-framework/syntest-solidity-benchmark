const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressg0aXGh = accounts[4]
		const BAEcgcLIIp = await BAE.new(addressg0aXGh, {from: accounts[3]});
		const uintieqKfPL = BigInt("277")
		const uintAdlpcEX = BigInt("1135")
		const uintNvsbXp8 = BigInt("1399")
		const uintgAdh6Cz = BigInt("43")
		const uintwHDB5K = BigInt("433")
		const uintsk8McZ3 = BigInt("260")
		const uintW825tE = BigInt("1704")
		const uintgg0NscD = BigInt("403")
//		const uint256IgPTqVz = await BAEcgcLIIp.createAuction.call(uintgAdh6Cz, uintNvsbXp8, uintAdlpcEX, uintieqKfPL, {from: accounts[0]});
//		const uint256vY5dcOu = await BAEcgcLIIp.resetAuction.call(uintW825tE, uintsk8McZ3, uintwHDB5K, {from: accounts[4]});
//		const uint256ltkv4G4 = await BAEcgcLIIp.buy.call(uintgg0NscD, {from: accounts[2]});

		await expect(BAEcgcLIIp.createAuction.call(uintgAdh6Cz, uintNvsbXp8, uintAdlpcEX, uintieqKfPL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressqfYbZm = accounts[3]
		const BAEIhRtYox = await BAE.new(addressqfYbZm, {from: accounts[1]});
		const uintzGtULoJ = BigInt("971")
		const uintD2QoMAj = BigInt("1016")
		const uinttE6l3Uu = BigInt("22")
		const uinte5UpknP = BigInt("675")
		const uintvIjvZS = BigInt("1032")
		const uintS2IKNdV = BigInt("1895")
//		const uint256KmhS5Sc = await BAEIhRtYox.bid.call(uintzGtULoJ, {from: accounts[4]});
//		const uint256L9srBIm = await BAEIhRtYox.buy.call(uintD2QoMAj, {from: accounts[5]});
//		const uint256TBUSbUW = await BAEIhRtYox.bid.call(uinttE6l3Uu, {from: accounts[2]});
//		const uint256wb7yIi9 = await BAEIhRtYox.resetAuction.call(uintS2IKNdV, uintvIjvZS, uinte5UpknP, {from: accounts[1]});

		await expect(BAEIhRtYox.bid.call(uintzGtULoJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressGbyhG4l = accounts[4]
		const BAEc6qOq4j = await BAE.new(addressGbyhG4l, {from: "0x0000000000000000000000000000000000000001"});
		const uintit8Wu2P = BigInt("1267")
		const uintAVHy8yH = BigInt("1053")
		const uintS5j16xe = BigInt("1460")
		const uintim3XTkQ = BigInt("1073")
		const uintm2HoRn = BigInt("68")
		const uintVbCgYkZ = BigInt("1573")
		const uintkRRFgeH = BigInt("2009")
		const uintAIJYUxa = BigInt("297")
		const uintCdjTYjg = BigInt("142")
		const uintlmPAW93 = BigInt("2021")
		const uint256h5wf5Kk = await BAEc6qOq4j.createAuction.call(uintim3XTkQ, uintS5j16xe, uintAVHy8yH, uintit8Wu2P, {from: accounts[2]});
		const uint256obKhOh = await BAEc6qOq4j.setAuctionFee.call(uintm2HoRn, {from: accounts[4]});
		const uint256VxzAWy = await BAEc6qOq4j.concludeAuction.call(uintVbCgYkZ, {from: accounts[0]});
		const uint256dN39p5e = await BAEc6qOq4j.resetAuction.call(uintCdjTYjg, uintAIJYUxa, uintkRRFgeH, {from: accounts[1]});
		const uint256UiQsyNZ = await BAEc6qOq4j.concludeAuction.call(uintlmPAW93, {from: accounts[3]});
	});

	it('test for BAE', async () => {
		const addressAVjqiR = accounts[1]
		const BAEXJr8oGT = await BAE.new(addressAVjqiR, {from: accounts[5]});
		const uintoDx5PLg = BigInt("306")
		const uintntZJzL = BigInt("1151")
		const uintqtcWIG6 = BigInt("1837")
		const uintXSz3pka = BigInt("1650")
		const uintLBnQqpH = BigInt("1470")
		const uintknX7X2 = BigInt("1119")
		const uintaY9EobT = BigInt("1304")
//		const uint256ZUtZQxq = await BAEXJr8oGT.buy.call(uintoDx5PLg, {from: accounts[1]});
//		const uint256XXVcKbg = await BAEXJr8oGT.createAuction.call(uintLBnQqpH, uintXSz3pka, uintqtcWIG6, uintntZJzL, {from: accounts[0]});
//		const uint256AbvaChX = await BAEXJr8oGT.changePrintFee.call(uintknX7X2, {from: accounts[4]});
//		const uint256vDvplxy = await BAEXJr8oGT.setAuctionFee.call(uintaY9EobT, {from: accounts[3]});

		await expect(BAEXJr8oGT.buy.call(uintoDx5PLg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressNm0C2mJ = accounts[1]
		const BAEyeBsA0Y = await BAE.new(addressNm0C2mJ, {from: accounts[2]});
		const uintWL1Hj7 = BigInt("231")
		const uintvjb2541 = BigInt("182")
		const uintMGIgZUo = BigInt("1479")
		const uinthTSXbsN = BigInt("469")
		const uintBYTavFy = BigInt("634")
		const uintS8GaPmr = BigInt("1321")
		const uintQnHWITT = BigInt("1806")
		const uintBr26rTw = BigInt("774")
//		const uint256bsh38W7 = await BAEyeBsA0Y.setAuctionFee.call(uintWL1Hj7, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256EPVw79b = await BAEyeBsA0Y.createAuction.call(uintBYTavFy, uinthTSXbsN, uintMGIgZUo, uintvjb2541, {from: accounts[3]});
//		const uint256fx0PVln = await BAEyeBsA0Y.bid.call(uintS8GaPmr, {from: accounts[0]});
//		const uint256w0josii = await BAEyeBsA0Y.buy.call(uintQnHWITT, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256SL2PN24 = await BAEyeBsA0Y.bid.call(uintBr26rTw, {from: accounts[2]});

		await expect(BAEyeBsA0Y.setAuctionFee.call(uintWL1Hj7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressc6lvl20 = accounts[3]
		const BAEUVrvJdz = await BAE.new(addressc6lvl20, {from: accounts[4]});
		const uintHsvICu2 = BigInt("1611")
		const uinthoRi2DY = BigInt("345")
		const uintp4ntfrK = BigInt("1006")
		const uints11FqIS = BigInt("1551")
		const uintQlSuUoX = BigInt("780")
		const uintHms8tSt = BigInt("1192")
		const uintzfQNEQ6 = BigInt("2032")
		const uintJdkOv47 = BigInt("1699")
		const uintgdYsm7Y = BigInt("472")
		const uintam8EToX = BigInt("739")
		const uintAoHzZx4 = BigInt("259")
		const uintEDaqSOA = BigInt("1660")
//		const uint256c19qcyL = await BAEUVrvJdz.resetAuction.call(uintp4ntfrK, uinthoRi2DY, uintHsvICu2, {from: accounts[2]});
//		const uint256NlBRbPI = await BAEUVrvJdz.createAuction.call(uintzfQNEQ6, uintHms8tSt, uintQlSuUoX, uints11FqIS, {from: accounts[0]});
//		const uint256y0JIwcp = await BAEUVrvJdz.buy.call(uintJdkOv47, {from: accounts[1]});
//		const uint256pR3035d = await BAEUVrvJdz.createAuction.call(uintEDaqSOA, uintAoHzZx4, uintam8EToX, uintgdYsm7Y, {from: accounts[3]});

		await expect(BAEUVrvJdz.resetAuction.call(uintp4ntfrK, uinthoRi2DY, uintHsvICu2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const address3HL3Ch = accounts[4]
		const BAEcgcLIIp = await BAE.new(address3HL3Ch, {from: accounts[3]});
		const uintagPH2r = BigInt("1404")
		const uintVHtM2Fo = BigInt("772")
		const uintQn91mV6 = BigInt("718")
		const uintv1JS6ER = BigInt("264")
		const uintx5xuxxl = BigInt("435")
//		const uint256pY8Seta = await BAEcgcLIIp.concludeAuction.call(uintagPH2r, {from: accounts[5]});
//		const uint256wFdZeDd = await BAEcgcLIIp.resetAuction.call(uintv1JS6ER, uintQn91mV6, uintVHtM2Fo, {from: accounts[0]});
//		const uint256ltkv4G4 = await BAEcgcLIIp.buy.call(uintx5xuxxl, {from: accounts[2]});

		await expect(BAEcgcLIIp.concludeAuction.call(uintagPH2r, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})