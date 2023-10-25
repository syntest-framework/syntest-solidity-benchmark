const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintsBKRyhx = BigInt("72")
		const stringMzLI0I2 = "CAGAIrT22dKKZqXzsjlDJNB3NsaQBWxBE6xxVA5d4KXyRIqx3cOhdVfDo9z1jUEdjBsIKUPG6S"
		const stringycUXJtE = "TKSUTyfKU9Ttl9lyFVTReP0zjMcBLY403Xu4otvVmBydFwod2YFrK8FEP1qqA7UCcjU9Gw"
		const GFC8vl6mD = await GFC.new(uintsBKRyhx, stringMzLI0I2, stringycUXJtE, {from: accounts[2]});
		const uinthOKpWkY = BigInt("1668")
		const uinte7puoQp = BigInt("2042")
		const addressKg5Yzfc = accounts[1]
		const addressHuQYY11 = accounts[3]
		const uintzeHVVv = BigInt("1981")
		const addressFylAhL5 = accounts[2]
		const uintjnJkIY = BigInt("750")
		const uintq5S0HGo = BigInt("420")
		const addressdSCHjVy = accounts[2]
		const boolHKSTVS = await GFC8vl6mD.burn.call(uinthOKpWkY, {from: accounts[2]});
//		const boolCnHgsvW = await GFC8vl6mD.transferFrom.call(addressHuQYY11, addressKg5Yzfc, uinte7puoQp, {from: accounts[4]});
//		const boolErZM0Tc = await GFC8vl6mD.transfer.call(addressFylAhL5, uintzeHVVv, {from: accounts[0]});
//		const boolxP4lvjB = await GFC8vl6mD.burn.call(uintjnJkIY, {from: accounts[0]});
//		const bool8HxZqY = await GFC8vl6mD.approve.call(addressdSCHjVy, uintq5S0HGo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHKSTVS, true)
		await expect(GFC8vl6mD.transferFrom.call(addressHuQYY11, addressKg5Yzfc, uinte7puoQp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintRBct1md = BigInt("425")
		const stringrujML6x = "W2D9BJLlmTPJx5773AFReYTMlyKjK"
		const stringdccv6W2 = "Y0nc6VMgPzjwiW7yJn5MvEelYXVTD"
		const GFCghVy74 = await GFC.new(uintRBct1md, stringrujML6x, stringdccv6W2, {from: accounts[1]});
		const uintSCqsiaV = BigInt("1369")
		const addressgnsgbrK = accounts[2]
		const byteINNYaoU = "0x1a0214101f13180714021c0309"
		const uintFIAr3Si = BigInt("875")
		const addressU5KIKSe = accounts[4]
		const uintHLGPGmu = BigInt("290")
		const addressFpzchbk = accounts[1]
//		const boollemTFhU = await GFCghVy74.burnFrom.call(addressgnsgbrK, uintSCqsiaV, {from: accounts[0]});
//		const boolfRsguaV = await GFCghVy74.approveAndCall.call(addressU5KIKSe, uintFIAr3Si, byteINNYaoU, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkvGM8cR = await GFCghVy74.approve.call(addressFpzchbk, uintHLGPGmu, {from: accounts[0]});

		await expect(GFCghVy74.burnFrom.call(addressgnsgbrK, uintSCqsiaV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintlJIB5g1 = BigInt("1539")
		const stringjxDSBbn = "TmAAgsCuxX4pDf0j0r2luFIw15NLLsOeV6W8P2SWbNnWxLRnnTkGyCAT5OvEJldDaR5lXNaDSN6HL5T20"
		const stringhmCQhc4 = "2tQ3uxck3k2feI8inahPuPkqNgbHii4GU"
		const GFCdWuR132 = await GFC.new(uintlJIB5g1, stringjxDSBbn, stringhmCQhc4, {from: accounts[3]});
		const byteBq5RGIw = "0x1d1b090e200f0a04190612050d0a141413050702111e0e060c021a14"
		const uintH36nL7 = BigInt("1528")
		const addressJEOOQRT = accounts[0]
		const uintMRRCqqZ = BigInt("623")
		const addressoQbZ7L = accounts[0]
		const addresswsLIUIa = accounts[2]
		const uinta74TeVX = BigInt("515")
		const addressE75QCC = accounts[3]
		const addressgLFeXKG = accounts[4]
		const uintCDA76OI = BigInt("384")
		const addressFUMKZx5 = "0x0000000000000000000000000000000000000001"
		const uintgZxsbH = BigInt("1411")
		const addressX6fUPMy = accounts[3]
//		const booleRdWOF3 = await GFCdWuR132.approveAndCall.call(addressJEOOQRT, uintH36nL7, byteBq5RGIw, {from: accounts[3]});
//		const boolQW2s4Ko = await GFCdWuR132.transferFrom.call(addresswsLIUIa, addressoQbZ7L, uintMRRCqqZ, {from: accounts[1]});
//		const boolfwKBV54 = await GFCdWuR132.transferFrom.call(addressgLFeXKG, addressE75QCC, uinta74TeVX, {from: accounts[0]});
//		const boolthdbNmB = await GFCdWuR132.burnFrom.call(addressFUMKZx5, uintCDA76OI, {from: accounts[1]});
//		const boolUYUOUr4 = await GFCdWuR132.burnFrom.call(addressX6fUPMy, uintgZxsbH, {from: accounts[1]});

		await expect(GFCdWuR132.approveAndCall.call(addressJEOOQRT, uintH36nL7, byteBq5RGIw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintyzmcz2d = BigInt("1395")
		const stringPG3Rwq = "YJ7wFJ5fqxyD7gNB8NMef80tSeuBMenYzN3hLLsmHh1"
		const stringphTwkL1 = "YTgFntW"
		const GFCltP4bEa = await GFC.new(uintyzmcz2d, stringPG3Rwq, stringphTwkL1, {from: "0x0000000000000000000000000000000000000001"});
		const uintRTVtyaG = BigInt("1562")
		const addressmYBSK9 = accounts[4]
		const uintGcDzGHj = BigInt("222")
		const addressyoLSfBs = accounts[4]
		const addressZFZci3l = accounts[3]
		const uintxsraLdH = BigInt("1749")
		const addressQ1YKt3u = accounts[0]
		const uintp1gAuDP = BigInt("1505")
		const addressxBAh3Ln = "0x0000000000000000000000000000000000000001"
		const boolZ8MjXc4 = await GFCltP4bEa.approve.call(addressmYBSK9, uintRTVtyaG, {from: accounts[3]});
		const boolTs4ugM8 = await GFCltP4bEa.transferFrom.call(addressZFZci3l, addressyoLSfBs, uintGcDzGHj, {from: accounts[3]});
		const boolBcFo5sA = await GFCltP4bEa.approve.call(addressQ1YKt3u, uintxsraLdH, {from: accounts[4]});
		const boolgYEhYRg = await GFCltP4bEa.approve.call(addressxBAh3Ln, uintp1gAuDP, {from: accounts[5]});
	});

	it('test for GFC', async () => {
		const uintXpMLsAm = BigInt("1566")
		const stringDG9HsU4 = "wjWJNT9L7DAhoLBip4Dl2rfsTHIEy9CqovuyGKvzXpKeZBwissOxmCVWJQkKKlySOKO52YM5AOJFJ4RY"
		const stringrjQicIY = "Y14cdaVoc"
		const GFCvEN3alx = await GFC.new(uintXpMLsAm, stringDG9HsU4, stringrjQicIY, {from: accounts[1]});
		const uintVAwlSyR = BigInt("1361")
		const addresswhokKtV = accounts[1]
		const uintrVkNaXX = BigInt("915")
		const addresssBldnmB = accounts[0]
		const addressPb0Azu = accounts[4]
		const uintOnFFr1c = BigInt("601")
		const addressBp42xhd = accounts[1]
		const addressAOPCE6 = accounts[5]
//		const booleJYqzka = await GFCvEN3alx.transfer.call(addresswhokKtV, uintVAwlSyR, {from: accounts[4]});
//		const boolMLkkrei = await GFCvEN3alx.transferFrom.call(addressPb0Azu, addresssBldnmB, uintrVkNaXX, {from: accounts[3]});
//		const booluqimOCG = await GFCvEN3alx.transferFrom.call(addressAOPCE6, addressBp42xhd, uintOnFFr1c, {from: accounts[0]});

		await expect(GFCvEN3alx.transfer.call(addresswhokKtV, uintVAwlSyR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintrjwHkVm = BigInt("924")
		const stringSbq5224 = "JpVlnKLHHRET3Pvx5XqgE"
		const stringrj1fXc6 = "dkInS"
		const GFChJ2AwZb = await GFC.new(uintrjwHkVm, stringSbq5224, stringrj1fXc6, {from: accounts[1]});
		const uintRfUUtif = BigInt("767")
		const addresskR0nLr7 = accounts[1]
		const uintRUaELY5 = BigInt("1287")
		const addresstMaRoc = accounts[4]
		const uintrTNENRX = BigInt("273")
		const addressudvrwks = accounts[0]
		const addressdDbzJC = accounts[2]
		const uintuvrA97w = BigInt("368")
		const addressWalQlcM = accounts[4]
		const addressKf5mDeE = accounts[0]
		const uintxUaoJHL = BigInt("1806")
		const addressVx5nLfp = accounts[2]
//		const boolVgLtia = await GFChJ2AwZb.burnFrom.call(addresskR0nLr7, uintRfUUtif, {from: accounts[0]});
//		const boolujOymOz = await GFChJ2AwZb.approve.call(addresstMaRoc, uintRUaELY5, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTM2qPoM = await GFChJ2AwZb.transferFrom.call(addressdDbzJC, addressudvrwks, uintrTNENRX, {from: accounts[1]});
//		const boolCLqyPIt = await GFChJ2AwZb.transferFrom.call(addressKf5mDeE, addressWalQlcM, uintuvrA97w, {from: accounts[4]});
//		const boolfdNaAqT = await GFChJ2AwZb.burnFrom.call(addressVx5nLfp, uintxUaoJHL, {from: accounts[0]});

		await expect(GFChJ2AwZb.burnFrom.call(addresskR0nLr7, uintRfUUtif, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintrB2qQk3 = BigInt("1566")
		const stringDG9HsU4 = "wjWJNT9L7DAhoLBip4Dl2rfsTHIEy9CqovuyGKvzXpKeZBwissOxmCVWJQkKKlySOKO52YM5AOJFJ4RY"
		const stringrjQicIY = "Y14cdaVoc"
		const GFCvEN3alx = await GFC.new(uintrB2qQk3, stringDG9HsU4, stringrjQicIY, {from: accounts[1]});
		const uintuVy34uu = BigInt("837")
		const addresshuA4mqD = accounts[3]
		const uintcRxdFgA = BigInt("779")
		const addressEHKNTHN = "0x0000000000000000000000000000000000000001"
		const addressJD5jzJM = "0x0000000000000000000000000000000000000001"
		const uintTmB1dT8 = BigInt("601")
		const addressgtjJbSP = accounts[0]
		const addresspEfjCrN = accounts[5]
		const boolsMXZenj = await GFCvEN3alx.transfer.call(addresshuA4mqD, uintuVy34uu, {from: accounts[1]});
//		const boolCJr3iUu = await GFCvEN3alx.transferFrom.call(addressJD5jzJM, addressEHKNTHN, uintcRxdFgA, {from: accounts[3]});
//		const booluqimOCG = await GFCvEN3alx.transferFrom.call(addresspEfjCrN, addressgtjJbSP, uintTmB1dT8, {from: accounts[0]});

		assert.equal(boolsMXZenj, true)
		await expect(GFCvEN3alx.transferFrom.call(addressJD5jzJM, addressEHKNTHN, uintcRxdFgA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})