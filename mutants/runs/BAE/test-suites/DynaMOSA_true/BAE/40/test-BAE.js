const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addresshvQETVb = accounts[3]
		const BAEkwdCFf1 = await BAE.new(addresshvQETVb, {from: accounts[1]});
		const uintJ2BojLF = BigInt("917")
		const uintBhrxpX6 = BigInt("1197")
		const uintJX5J6nj = BigInt("1603")
		const uintdBzbsi = BigInt("894")
		const uintOsGNsTu = BigInt("1451")
		const uintpAMb2H = BigInt("628")
		const uintAeyQlYu = BigInt("347")
		const uint6xFCVe = BigInt("685")
		const uintt2vM1vy = BigInt("617")
		const uint256MWalSO4 = await BAEkwdCFf1.bid.call(uintJ2BojLF, {from: accounts[4]});
		const uint256ibsvO6Z = await BAEkwdCFf1.resetAuction.call(uintdBzbsi, uintJX5J6nj, uintBhrxpX6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vpPfP2 = await BAEkwdCFf1.bid.call(uintOsGNsTu, {from: accounts[0]});
		const uint256HBAJkX0 = await BAEkwdCFf1.resetAuction.call(uint6xFCVe, uintAeyQlYu, uintpAMb2H, {from: accounts[1]});
		const uint256PseZhPX = await BAEkwdCFf1.changePrintFee.call(uintt2vM1vy, {from: accounts[5]});

		await expect(BAEkwdCFf1.bid.call(uintJ2BojLF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressp4J9cge = accounts[4]
		const BAEfh5Jytw = await BAE.new(addressp4J9cge, {from: accounts[2]});
		const uintM08XrF3 = BigInt("808")
		const uintzuEOAah = BigInt("615")
		const uintkjgtxpd = BigInt("1308")
		const uinttQLWMHw = BigInt("455")
		const uintqDuIyT = BigInt("214")
		const uintII4BcVD = BigInt("258")
		const uint256BwlB64m = await BAEfh5Jytw.setAuctionFee.call(uintM08XrF3, {from: accounts[4]});
		const uint256B7tpQdJ = await BAEfh5Jytw.changePrintFee.call(uintzuEOAah, {from: accounts[1]});
		const uint256b810ZFg = await BAEfh5Jytw.setAuctionFee.call(uintkjgtxpd, {from: accounts[1]});
		const uint256R29078k = await BAEfh5Jytw.bid.call(uinttQLWMHw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sW6LWpu = await BAEfh5Jytw.setAuctionFee.call(uintqDuIyT, {from: accounts[2]});
		const uint256deWCu5N = await BAEfh5Jytw.buy.call(uintII4BcVD, {from: accounts[2]});

		await expect(BAEfh5Jytw.setAuctionFee.call(uintM08XrF3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresszdcdvd4 = accounts[3]
		const BAEXdBtLxz = await BAE.new(addresszdcdvd4, {from: accounts[0]});
		const uintG73WYJx = BigInt("1936")
		const uintFryOQpS = BigInt("2006")
		const uint256XDrPbTn = await BAEXdBtLxz.concludeAuction.call(uintG73WYJx, {from: accounts[5]});
		const uint256aFRr1B = await BAEXdBtLxz.setAuctionFee.call(uintFryOQpS, {from: accounts[3]});

		await expect(BAEXdBtLxz.concludeAuction.call(uintG73WYJx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressbrh1pgI = accounts[2]
		const BAEWTmtbxu = await BAE.new(addressbrh1pgI, {from: accounts[2]});
		const uintxN8jGaA = BigInt("640")
		const uintQCgvcEA = BigInt("1191")
		const uintnq68qww = BigInt("454")
		const uintj239VcT = BigInt("1584")
		const uintYYEjUoO = BigInt("1647")
		const uintyRhWixa = BigInt("1860")
		const uintCap20K = BigInt("841")
		const uintqUF0Vg0 = BigInt("604")
		const uintxDBUL1 = BigInt("1044")
		const uintwyxeTif = BigInt("1227")
		const uintBuVut7e = BigInt("540")
		const uint256E2VA19B = await BAEWTmtbxu.createAuction.call(uintj239VcT, uintnq68qww, uintQCgvcEA, uintxN8jGaA, {from: accounts[0]});
		const uint256fn9bn9H = await BAEWTmtbxu.concludeAuction.call(uintYYEjUoO, {from: accounts[4]});
		const uint256uvdD6Ii = await BAEWTmtbxu.concludeAuction.call(uintyRhWixa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cIbHkKr = await BAEWTmtbxu.createAuction.call(uintwyxeTif, uintxDBUL1, uintqUF0Vg0, uintCap20K, {from: accounts[1]});
		const uint256Ci7Ygl4 = await BAEWTmtbxu.setAuctionFee.call(uintBuVut7e, {from: accounts[2]});

		await expect(BAEWTmtbxu.createAuction.call(uintj239VcT, uintnq68qww, uintQCgvcEA, uintxN8jGaA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressK98A4nk = accounts[1]
		const BAE7ZP5K7 = await BAE.new(addressK98A4nk, {from: accounts[2]});
		const uintiB1jfGa = BigInt("899")
		const uintdbI5Fp = BigInt("1627")
		const uintRjXxb77 = BigInt("734")
		const uintsfw49ME = BigInt("2007")
		const uintUlZQGeN = BigInt("121")
		const uint256mxErXOO = await BAE7ZP5K7.buy.call(uintiB1jfGa, {from: accounts[2]});
		const uint256sXsHSvh = await BAE7ZP5K7.changePrintFee.call(uintdbI5Fp, {from: accounts[2]});
		const uint256ZEN2lbf = await BAE7ZP5K7.bid.call(uintRjXxb77, {from: accounts[4]});
		const uint256GCaPaB2 = await BAE7ZP5K7.concludeAuction.call(uintsfw49ME, {from: accounts[0]});
		const uint256kGiD3pI = await BAE7ZP5K7.bid.call(uintUlZQGeN, {from: accounts[2]});

		await expect(BAE7ZP5K7.buy.call(uintiB1jfGa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressoG0wEiy = accounts[3]
		const BAEkwdCFf1 = await BAE.new(addressoG0wEiy, {from: accounts[1]});
		const uintCfYjqZW = BigInt("1197")
		const uintLsfDKAb = BigInt("1603")
		const uinty73Vd5H = BigInt("894")
		const uintEF7jCOs = BigInt("1451")
		const uintOcByce = BigInt("1115")
		const uintd3LLfsj = BigInt("628")
		const uintYMG65m = BigInt("347")
		const uintkqV5Tk = BigInt("685")
		const uintLDanCca = BigInt("617")
		const uint256ibsvO6Z = await BAEkwdCFf1.resetAuction.call(uinty73Vd5H, uintLsfDKAb, uintCfYjqZW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vpPfP2 = await BAEkwdCFf1.bid.call(uintEF7jCOs, {from: accounts[0]});
		const uint256G00SNdE = await BAEkwdCFf1.changePrintFee.call(uintOcByce, {from: accounts[2]});
		const uint256HBAJkX0 = await BAEkwdCFf1.resetAuction.call(uintkqV5Tk, uintYMG65m, uintd3LLfsj, {from: accounts[1]});
		const uint256PseZhPX = await BAEkwdCFf1.changePrintFee.call(uintLDanCca, {from: accounts[5]});

		await expect(BAEkwdCFf1.resetAuction.call(uinty73Vd5H, uintLsfDKAb, uintCfYjqZW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressgCPbeG3 = accounts[0]
		const BAELIPeSH = await BAE.new(addressgCPbeG3, {from: "0x0000000000000000000000000000000000000001"});
		const uintMhYlEWv = BigInt("1370")
		const uintOhC1Z0l = BigInt("445")
		const uintENKXCa9 = BigInt("830")
		const uintA9QF3QZ = BigInt("1947")
		const uintmLtdziv = BigInt("739")
		const uinttJlF54j = BigInt("1066")
		const uintw8pEUqx = BigInt("1825")
		const uintbRkp9Fu = BigInt("256")
		const uintDez2Ury = BigInt("1449")
		const uintp7M2YCM = BigInt("2039")
		const uintvGrveWT = BigInt("910")
		const uint256xpRHHo = await BAELIPeSH.resetAuction.call(uintENKXCa9, uintOhC1Z0l, uintMhYlEWv, {from: accounts[2]});
		const uint256snhtYZf = await BAELIPeSH.resetAuction.call(uinttJlF54j, uintmLtdziv, uintA9QF3QZ, {from: accounts[3]});
		const uint256Ld9VMZz = await BAELIPeSH.createAuction.call(uintp7M2YCM, uintDez2Ury, uintbRkp9Fu, uintw8pEUqx, {from: accounts[1]});
		const uint256pkg5um = await BAELIPeSH.setAuctionFee.call(uintvGrveWT, {from: accounts[2]});
	});
})