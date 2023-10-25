const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressVbnVli = accounts[3]
		const BAEjflnrgW = await BAE.new(addressVbnVli, {from: "0x0000000000000000000000000000000000000001"});
		const uintj7DkKKP = BigInt("2042")
		const uintZrdk9W = BigInt("1454")
		const uintg0baHXn = BigInt("1335")
		const uintozSWZff = BigInt("1559")
		const uintLCnoR2Z = BigInt("1814")
		const uintyPT823O = BigInt("691")
		const uintrgGPl3p = BigInt("1129")
		const uintlQR9cwQ = BigInt("919")
		const uintYz3WF1t = BigInt("1481")
		const uintg5HdpaJ = BigInt("1161")
		const uintUePgFnv = BigInt("1916")
		const uintd42U2cu = BigInt("374")
		const uintEiedAVZ = BigInt("1770")
		const uinthdXL09Z = BigInt("348")
		const uinteQabW7 = BigInt("1379")
		const uint256UPXoVB = await BAEjflnrgW.resetAuction.call(uintg0baHXn, uintZrdk9W, uintj7DkKKP, {from: accounts[1]});
		const uint256Q3bVdS = await BAEjflnrgW.resetAuction.call(uintyPT823O, uintLCnoR2Z, uintozSWZff, {from: accounts[2]});
		const uint256yjezaO7 = await BAEjflnrgW.changePrintFee.call(uintrgGPl3p, {from: "0x0000000000000000000000000000000000000001"});
		const uint256o64Mks = await BAEjflnrgW.createAuction.call(uintUePgFnv, uintg5HdpaJ, uintYz3WF1t, uintlQR9cwQ, {from: accounts[0]});
		const uint256cb3Orvi = await BAEjflnrgW.createAuction.call(uinteQabW7, uinthdXL09Z, uintEiedAVZ, uintd42U2cu, {from: accounts[5]});
	});

	it('test for BAE', async () => {
		const addressxLbpveZ = accounts[2]
		const BAEsx3mfJ = await BAE.new(addressxLbpveZ, {from: accounts[1]});
		const uintQI2XYv = BigInt("1182")
		const uintt5RGL9C = BigInt("1101")
		const uintCTZ515 = BigInt("1432")
		const uintw3FpCDU = BigInt("78")
		const uintW3lMapH = BigInt("1535")
		const uinttTsdLi0 = BigInt("2037")
//		const uint256msnqTWx = await BAEsx3mfJ.changePrintFee.call(uintQI2XYv, {from: accounts[4]});
//		const uint256BCgzoU = await BAEsx3mfJ.resetAuction.call(uintw3FpCDU, uintCTZ515, uintt5RGL9C, {from: accounts[2]});
//		const uint256uJEAWSr = await BAEsx3mfJ.buy.call(uintW3lMapH, {from: accounts[2]});
//		const uint256DvMZhNa = await BAEsx3mfJ.changePrintFee.call(uinttTsdLi0, {from: accounts[4]});

		await expect(BAEsx3mfJ.changePrintFee.call(uintQI2XYv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresshCI2CJy = accounts[1]
		const BAEFMImObP = await BAE.new(addresshCI2CJy, {from: accounts[4]});
		const uintfq5KF1 = BigInt("1877")
		const uintk69K9vV = BigInt("1238")
		const uintKkkNFBk = BigInt("1544")
		const uintnnPpbaM = BigInt("84")
//		const uint256T1J0Lma = await BAEFMImObP.buy.call(uintfq5KF1, {from: accounts[3]});
//		const uint256uK6izqT = await BAEFMImObP.buy.call(uintk69K9vV, {from: accounts[5]});
//		const uint256DrdDZcw = await BAEFMImObP.setAuctionFee.call(uintKkkNFBk, {from: accounts[3]});
//		const uint256e9quYwb = await BAEFMImObP.bid.call(uintnnPpbaM, {from: accounts[5]});

		await expect(BAEFMImObP.buy.call(uintfq5KF1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressFipjQn = accounts[0]
		const BAEbGM1Ym = await BAE.new(addressFipjQn, {from: accounts[0]});
		const uintpEuMNxh = BigInt("1649")
		const uintXtCvPr = BigInt("1433")
		const uintYVK4lSP = BigInt("157")
		const uintWjHhQ4 = BigInt("793")
//		const uint256fkkUPWz = await BAEbGM1Ym.resetAuction.call(uintYVK4lSP, uintXtCvPr, uintpEuMNxh, {from: accounts[2]});
//		const uint256KTE7n3V = await BAEbGM1Ym.buy.call(uintWjHhQ4, {from: accounts[1]});

		await expect(BAEbGM1Ym.resetAuction.call(uintYVK4lSP, uintXtCvPr, uintpEuMNxh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressURoz6xH = accounts[3]
		const BAEJFXL2fe = await BAE.new(addressURoz6xH, {from: accounts[2]});
		const uintibirSbr = BigInt("1516")
		const uintq0QjOpm = BigInt("966")
		const uintQx1ocGR = BigInt("1122")
		const uintNerOLjA = BigInt("1327")
		const uintDSo8pLX = BigInt("1983")
		const uintFXAVbFB = BigInt("592")
		const uintJCxhA0m = BigInt("25")
		const uintoEMMhJG = BigInt("1694")
		const uintzwk48PA = BigInt("1929")
		const uintYQ9pddL = BigInt("1435")
		const uintVvgPvoD = BigInt("736")
		const uintsdRJ58 = BigInt("242")
		const uintZWAdHA = BigInt("225")
		const uint8YzGKt = BigInt("491")
//		const uint256W48dMN6 = await BAEJFXL2fe.createAuction.call(uintNerOLjA, uintQx1ocGR, uintq0QjOpm, uintibirSbr, {from: accounts[1]});
//		const uint256atFd3Rl = await BAEJFXL2fe.buy.call(uintDSo8pLX, {from: accounts[4]});
//		const uint256YPFe0ZJ = await BAEJFXL2fe.createAuction.call(uintzwk48PA, uintoEMMhJG, uintJCxhA0m, uintFXAVbFB, {from: accounts[2]});
//		const uint256fqyWLjU = await BAEJFXL2fe.buy.call(uintYQ9pddL, {from: accounts[0]});
//		const uint256MLTJyzJ = await BAEJFXL2fe.createAuction.call(uint8YzGKt, uintZWAdHA, uintsdRJ58, uintVvgPvoD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEJFXL2fe.createAuction.call(uintNerOLjA, uintQx1ocGR, uintq0QjOpm, uintibirSbr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressCYL8lZs = accounts[2]
		const BAEcxm25Ws = await BAE.new(addressCYL8lZs, {from: accounts[1]});
		const uintbVOaOV = BigInt("255")
		const uintbm6FkBM = BigInt("1653")
		const uintNic2gzg = BigInt("845")
		const uintMLbNMn = BigInt("1110")
		const uintI5pLHtQ = BigInt("660")
		const uintgYr0Sp = BigInt("322")
		const uintP3ZLTpE = BigInt("696")
//		const uint256vfo7Z0u = await BAEcxm25Ws.bid.call(uintbVOaOV, {from: accounts[1]});
//		const uint256FyTdyLv = await BAEcxm25Ws.setAuctionFee.call(uintbm6FkBM, {from: accounts[2]});
//		const uint256HdhqCP = await BAEcxm25Ws.setAuctionFee.call(uintNic2gzg, {from: accounts[3]});
//		const uint256Wlhv4Q8 = await BAEcxm25Ws.resetAuction.call(uintgYr0Sp, uintI5pLHtQ, uintMLbNMn, {from: accounts[1]});
//		const uint256JIeCti = await BAEcxm25Ws.setAuctionFee.call(uintP3ZLTpE, {from: accounts[3]});

		await expect(BAEcxm25Ws.bid.call(uintbVOaOV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const address48qjg9 = accounts[3]
		const BAEbsumM2f = await BAE.new(address48qjg9, {from: accounts[3]});
		const uintq9bEYuu = BigInt("29")
		const uintxh45VfX = BigInt("1447")
		const uintsU4zHDA = BigInt("1655")
		const uintIGKPLxA = BigInt("1276")
		const uintuxjvbjK = BigInt("1010")
		const uintGYawGd = BigInt("1386")
		const uintvYt7NKF = BigInt("873")
//		const uint256ThFpceC = await BAEbsumM2f.concludeAuction.call(uintq9bEYuu, {from: accounts[1]});
//		const uint256jI0e2AG = await BAEbsumM2f.setAuctionFee.call(uintxh45VfX, {from: accounts[0]});
//		const uint256V52yp6k = await BAEbsumM2f.bid.call(uintsU4zHDA, {from: accounts[1]});
//		const uint256DDpeRGg = await BAEbsumM2f.createAuction.call(uintvYt7NKF, uintGYawGd, uintuxjvbjK, uintIGKPLxA, {from: accounts[4]});

		await expect(BAEbsumM2f.concludeAuction.call(uintq9bEYuu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})