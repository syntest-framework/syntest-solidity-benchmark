const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressiHKL2eC = accounts[3]
		const BAEzH4MH3 = await BAE.new(addressiHKL2eC, {from: accounts[4]});
		const uinthlPwx68 = BigInt("246")
		const uintf3Yygi7 = BigInt("145")
		const uintzgq9mf4 = BigInt("1317")
		const uintoVXOqZJ = BigInt("209")
		const uintjDqR7a = BigInt("1638")
		const uint256e3FtI0g = await BAEzH4MH3.bid.call(uinthlPwx68, {from: accounts[3]});
		const uint256ULLS5S4 = await BAEzH4MH3.createAuction.call(uintjDqR7a, uintoVXOqZJ, uintzgq9mf4, uintf3Yygi7, {from: accounts[1]});

		await expect(BAEzH4MH3.bid.call(uinthlPwx68, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressjDhL4Xt = accounts[0]
		const BAEUbJ8ZIb = await BAE.new(addressjDhL4Xt, {from: "0x0000000000000000000000000000000000000001"});
		const uintlmfqfjL = BigInt("981")
		const uintsbZvRCJ = BigInt("1616")
		const uint256plCZi4X = await BAEUbJ8ZIb.setAuctionFee.call(uintlmfqfjL, {from: accounts[1]});
		const uint256rKWOgD = await BAEUbJ8ZIb.buy.call(uintsbZvRCJ, {from: accounts[0]});
	});

	it('test for BAE', async () => {
		const addressMd7S8hk = accounts[2]
		const BAEutzL6Vl = await BAE.new(addressMd7S8hk, {from: accounts[1]});
		const uintiSBShHT = BigInt("638")
		const uintdCtlvv9 = BigInt("992")
		const uintYpFCBNA = BigInt("1217")
		const uint7RTaRv = BigInt("1837")
		const uintoZfUbG = BigInt("1447")
		const uintL2KwO1y = BigInt("146")
		const uintcThCpcx = BigInt("1709")
		const uinttUKN1qS = BigInt("1824")
		const uintXXYVNJr = BigInt("171")
		const uintp8opBpG = BigInt("590")
		const uint256Uoz19ax = await BAEutzL6Vl.buy.call(uintiSBShHT, {from: accounts[1]});
		const uint256aPpRYhP = await BAEutzL6Vl.setAuctionFee.call(uintdCtlvv9, {from: accounts[3]});
		const uint256dkeIsm3 = await BAEutzL6Vl.resetAuction.call(uintoZfUbG, uint7RTaRv, uintYpFCBNA, {from: accounts[1]});
		const uint256z2cuHoS = await BAEutzL6Vl.createAuction.call(uintXXYVNJr, uinttUKN1qS, uintcThCpcx, uintL2KwO1y, {from: accounts[4]});
		const uint256vF8k6Fe = await BAEutzL6Vl.concludeAuction.call(uintp8opBpG, {from: accounts[3]});

		await expect(BAEutzL6Vl.buy.call(uintiSBShHT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressRaDp43Z = accounts[0]
		const BAEQWkplfg = await BAE.new(addressRaDp43Z, {from: accounts[2]});
		const uintQ1xuMcq = BigInt("1425")
		const uintluOpMbF = BigInt("582")
		const uintt7PRbH = BigInt("1830")
		const uintJnJHMrP = BigInt("1476")
		const uintMmFILYb = BigInt("1497")
		const uint256RXDLWFg = await BAEQWkplfg.changePrintFee.call(uintQ1xuMcq, {from: accounts[3]});
		const uint256Yod4RtO = await BAEQWkplfg.changePrintFee.call(uintluOpMbF, {from: accounts[2]});
		const uint256srQaObB = await BAEQWkplfg.changePrintFee.call(uintt7PRbH, {from: accounts[4]});
		const uint256IQ1TBOt = await BAEQWkplfg.concludeAuction.call(uintJnJHMrP, {from: accounts[3]});
		const uint256kAV6y1l = await BAEQWkplfg.buy.call(uintMmFILYb, {from: accounts[0]});

		await expect(BAEQWkplfg.changePrintFee.call(uintQ1xuMcq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressOuD0agN = accounts[4]
		const BAENIvDBtr = await BAE.new(addressOuD0agN, {from: accounts[1]});
		const uintWuapBWx = BigInt("680")
		const uint8BiOEx = BigInt("300")
		const uintRLObuRD = BigInt("482")
		const uintEKBazv7 = BigInt("1421")
		const uintYy2ycq = BigInt("131")
		const uintUY9cqFs = BigInt("1881")
		const uintMsZlmjP = BigInt("1543")
		const uintiafVAd = BigInt("1911")
		const uintcE44GEO = BigInt("1364")
		const uint256fgSdpN0 = await BAENIvDBtr.createAuction.call(uintEKBazv7, uintRLObuRD, uint8BiOEx, uintWuapBWx, {from: accounts[0]});
		const uint256sXsoWEH = await BAENIvDBtr.concludeAuction.call(uintYy2ycq, {from: accounts[3]});
		const uint256uIUalh = await BAENIvDBtr.buy.call(uintUY9cqFs, {from: accounts[3]});
		const uint256T8tPFgj = await BAENIvDBtr.resetAuction.call(uintcE44GEO, uintiafVAd, uintMsZlmjP, {from: accounts[5]});

		await expect(BAENIvDBtr.createAuction.call(uintEKBazv7, uintRLObuRD, uint8BiOEx, uintWuapBWx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressYg942gf = accounts[3]
		const BAEC8WkNl = await BAE.new(addressYg942gf, {from: accounts[2]});
		const uintHxVdwrY = BigInt("1960")
		const uintdiiOWeW = BigInt("204")
		const uintTMGiC9W = BigInt("784")
		const uintiroFb3a = BigInt("1707")
		const uintNTbQEcx = BigInt("460")
		const uint5E5f7c = BigInt("1387")
		const uintyR5xdBp = BigInt("1040")
		const uint8i82re = BigInt("1743")
		const uintv1qIxX = BigInt("660")
		const uint256EBnbDL = await BAEC8WkNl.resetAuction.call(uintTMGiC9W, uintdiiOWeW, uintHxVdwrY, {from: accounts[1]});
		const uint256M79NSoT = await BAEC8WkNl.changePrintFee.call(uintiroFb3a, {from: accounts[5]});
		const uint256GFrOvOM = await BAEC8WkNl.buy.call(uintNTbQEcx, {from: accounts[5]});
		const uint256SJG4Ucs = await BAEC8WkNl.createAuction.call(uintv1qIxX, uint8i82re, uintyR5xdBp, uint5E5f7c, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEC8WkNl.resetAuction.call(uintTMGiC9W, uintdiiOWeW, uintHxVdwrY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressE5trt6G = accounts[3]
		const BAEzH4MH3 = await BAE.new(addressE5trt6G, {from: accounts[4]});
		const uintrgzIU1K = BigInt("1917")
		const uintA3taNGB = BigInt("156")
		const uintHCOflNR = BigInt("1317")
		const uintlHZFG8e = BigInt("209")
		const uintGepKHGq = BigInt("1638")
		const uintDgTGcfO = BigInt("1156")
		const uintdhkjpYB = BigInt("772")
		const uintH7DEjIG = BigInt("206")
		const uintLR0a76D = BigInt("1311")
		const uint256uh7XL20 = await BAEzH4MH3.concludeAuction.call(uintrgzIU1K, {from: accounts[4]});
		const uint256ULLS5S4 = await BAEzH4MH3.createAuction.call(uintGepKHGq, uintlHZFG8e, uintHCOflNR, uintA3taNGB, {from: accounts[1]});
		const uint256G8xYZfn = await BAEzH4MH3.resetAuction.call(uintH7DEjIG, uintdhkjpYB, uintDgTGcfO, {from: accounts[3]});
		const uint256d8xtTls = await BAEzH4MH3.bid.call(uintLR0a76D, {from: accounts[0]});

		await expect(BAEzH4MH3.concludeAuction.call(uintrgzIU1K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})