const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTHy7XsJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresscRMgzjT = accounts[1]
		const addressdgrDRGs = accounts[0]
		const addresszBUmkB = await CryptoSecureBankTokenTHy7XsJ.setOwner2.call(addresscRMgzjT, {from: accounts[0]});
		await CryptoSecureBankTokenTHy7XsJ.unpause.call({from: accounts[4]});
		const addressbBhIKtv = await CryptoSecureBankTokenTHy7XsJ.removeBlackList.call(addressdgrDRGs, {from: accounts[3]});

		await expect(CryptoSecureBankTokenTHy7XsJ.setOwner2.call(addresscRMgzjT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengrSoOWb = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressSLQOW1 = accounts[5]
		const addressrea3pq1 = accounts[3]
		const addresshq9BJR = accounts[4]
		const uintYh8HPRP = BigInt("1174")
		const addressgg5TGMu = accounts[2]
		const addresswxaVe8 = accounts[4]
		const addressmt5aFiW = await CryptoSecureBankTokengrSoOWb.transferOwnership.call(addressSLQOW1, {from: accounts[0]});
		const addressovgcsY5 = await CryptoSecureBankTokengrSoOWb.setOwner2.call(addressrea3pq1, {from: accounts[4]});
		const boolCA2CxDe = await CryptoSecureBankTokengrSoOWb.deprecate.call(addresshq9BJR, {from: accounts[0]});
		const boole77SCDv = await CryptoSecureBankTokengrSoOWb.transferFrom.call(addresswxaVe8, addressgg5TGMu, uintYh8HPRP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokengrSoOWb.setOwner2.call(addressrea3pq1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvUVGBY = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintdoGGIWy = BigInt("1526")
		const addressPsBjAyD = accounts[1]
		const addressr4tllNI = accounts[4]
		const addressmUkyj1f = accounts[4]
		const addressFizSOD0 = accounts[3]
		const addresseoWh71j = accounts[2]
		const boolB0zsEYr = await CryptoSecureBankTokenvUVGBY.transfer.call(addressPsBjAyD, uintdoGGIWy, {from: "0x0000000000000000000000000000000000000001"});
		const uintGUKQvPj = await CryptoSecureBankTokenvUVGBY.balanceOf.call(addressr4tllNI, {from: accounts[4]});
		const uintZMEAZdc = await CryptoSecureBankTokenvUVGBY.allowance.call(addressFizSOD0, addressmUkyj1f, {from: "0x0000000000000000000000000000000000000001"});
		const boolVkMS8Qx = await CryptoSecureBankTokenvUVGBY.deprecate.call(addresseoWh71j, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenvUVGBY.transfer.call(addressPsBjAyD, uintdoGGIWy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenrnn0dJC = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressppY83Vr = accounts[0]
		const uintYWlQOH2 = await CryptoSecureBankTokenrnn0dJC.totalSupply.call({from: accounts[1]});
		const addressGTTQnT4 = await CryptoSecureBankTokenrnn0dJC.setOwner2.call(addressppY83Vr, {from: accounts[2]});
		await CryptoSecureBankTokenrnn0dJC.onlyOwner.call({from: accounts[1]});

		assert.equal(uintYWlQOH2, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenrnn0dJC.setOwner2.call(addressppY83Vr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenE9WrCBF = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintf384U8 = BigInt("1973")
		const addressoqsP27v = "0x0000000000000000000000000000000000000001"
		const uintjQHCPDd = await CryptoSecureBankTokenE9WrCBF.onlyPayloadSize.call(uintf384U8, {from: accounts[2]});
		const uintOtZiT28 = await CryptoSecureBankTokenE9WrCBF.balanceOf.call(addressoqsP27v, {from: accounts[1]});

		await expect(CryptoSecureBankTokenE9WrCBF.onlyPayloadSize.call(uintf384U8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintRyN71pw = BigInt("162")
		const addresskEHnpX8 = accounts[3]
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addresskEHnpX8, uintRyN71pw, {from: accounts[3]});

		assert.equal(boolfN2YTpO, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressmWw5MMe = accounts[5]
		const uintmvaekc6 = BigInt("317")
		const addressJiMg4gD = accounts[5]
		const uint7i6aWz = BigInt("162")
		const addressMI5Dzfm = accounts[3]
		const uintouJ5eS = await CryptoSecureBankTokenCuvRgue.balanceOf.call(addressmWw5MMe, {from: accounts[4]});
		const boolbeLwjew = await CryptoSecureBankTokenCuvRgue.transfer.call(addressJiMg4gD, uintmvaekc6, {from: accounts[2]});
		const addressDodth0v = await CryptoSecureBankTokenCuvRgue.getOwner.call({from: accounts[3]});
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addressMI5Dzfm, uint7i6aWz, {from: accounts[3]});

		assert.equal(uintouJ5eS, BigInt("0"))
		await expect(CryptoSecureBankTokenCuvRgue.transfer.call(addressJiMg4gD, uintmvaekc6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintkusjkkw = BigInt("162")
		const addresspJoyF8X = accounts[3]
		const uintRAzPMAK = BigInt("273")
		const addressLaj26u = accounts[3]
		const addressAqcZ2Si = accounts[3]
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addresspJoyF8X, uintkusjkkw, {from: accounts[3]});
		const boolRrhWTJ = await CryptoSecureBankTokenCuvRgue.transferFrom.call(addressAqcZ2Si, addressLaj26u, uintRAzPMAK, {from: accounts[3]});
		const addressqqEpkj = await CryptoSecureBankTokenCuvRgue.getOwner.call({from: accounts[2]});

		assert.equal(boolfN2YTpO, true)
		await expect(CryptoSecureBankTokenCuvRgue.transferFrom.call(addressAqcZ2Si, addressLaj26u, uintRAzPMAK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenUpB5fyp = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintHuFNtr6 = BigInt("1800")
		const addressKJziotI = accounts[2]
		const addressoJ3Rn1v = accounts[1]
		const addressmPCY1mg = accounts[3]
		const uintwfaqDh = BigInt("1067")
		const boolEIewZn4 = await CryptoSecureBankTokenUpB5fyp.approve.call(addressKJziotI, uintHuFNtr6, {from: accounts[2]});
		const boolvdbgren = await CryptoSecureBankTokenUpB5fyp.deprecate.call(addressoJ3Rn1v, {from: accounts[4]});
		const uintMVSu5Px = await CryptoSecureBankTokenUpB5fyp.balanceOf.call(addressmPCY1mg, {from: accounts[2]});
		const boolNuK2Y8t = await CryptoSecureBankTokenUpB5fyp.redeem.call(uintwfaqDh, {from: accounts[0]});

		assert.equal(boolEIewZn4, true)
		assert.equal(boolvdbgren, true)
		assert.equal(uintMVSu5Px, BigInt("0"))
		await expect(CryptoSecureBankTokenUpB5fyp.redeem.call(uintwfaqDh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintOpbI5lY = BigInt("317")
		const addressLR2rQYC = accounts[4]
		const addressR5m968e = accounts[3]
		const uintuktVwsj = BigInt("132")
		const addressXiHrHoO = accounts[3]
		const address7zTiuo = await CryptoSecureBankTokenCuvRgue.getOwner.call({from: accounts[1]});
		const boolbeLwjew = await CryptoSecureBankTokenCuvRgue.transfer.call(addressLR2rQYC, uintOpbI5lY, {from: accounts[2]});
		const addressMGoqdQo = await CryptoSecureBankTokenCuvRgue.destroyBlackFunds.call(addressR5m968e, {from: accounts[1]});
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addressXiHrHoO, uintuktVwsj, {from: accounts[3]});

		assert.equal(address7zTiuo, 0x507C3DE10CCff5377c19b9c5d800704e5E939478)
		await expect(CryptoSecureBankTokenCuvRgue.transfer.call(addressLR2rQYC, uintOpbI5lY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressxJExG2L = accounts[1]
		const addressNbAUkz = accounts[1]
		const uintdAwOM7g = BigInt("1491")
		const addressYGAvee = accounts[3]
		const uintDc7GzEJ = await CryptoSecureBankTokenCuvRgue.allowance.call(addressNbAUkz, addressxJExG2L, {from: accounts[2]});
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addressYGAvee, uintdAwOM7g, {from: accounts[3]});

		assert.equal(boolfN2YTpO, true)
		assert.equal(uintDc7GzEJ, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintKHyeQHt = BigInt("1305")
		const uintJG3zztX = BigInt("565")
		const uintbYsm5c = BigInt("317")
		const addresshvZI7tO = accounts[4]
		const addressgouMFd1 = accounts[5]
		const uintG3a041T = BigInt("162")
		const addressu8bKonA = accounts[5]
		const uintfIOhXWz = await CryptoSecureBankTokenCuvRgue.setParams.call(uintJG3zztX, uintKHyeQHt, {from: accounts[0]});
		const boolbeLwjew = await CryptoSecureBankTokenCuvRgue.transfer.call(addresshvZI7tO, uintbYsm5c, {from: accounts[2]});
		const addressmoupn0h = await CryptoSecureBankTokenCuvRgue.setOwner2.call(addressgouMFd1, {from: accounts[0]});
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addressu8bKonA, uintG3a041T, {from: accounts[3]});

		await expect(CryptoSecureBankTokenCuvRgue.setParams.call(uintJG3zztX, uintKHyeQHt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintg1Ztk2 = BigInt("1572")
		const addressxfjGJY2 = accounts[0]
		const uintTOVhD7z = BigInt("317")
		const addressXXkcSkA = accounts[4]
		const uintEJliKxe = BigInt("162")
		const addresscB8vYyr = accounts[3]
		const boolEDVcKx = await CryptoSecureBankTokenCuvRgue.redeem.call(uintg1Ztk2, {from: accounts[0]});
		const uintaTTBkAN = await CryptoSecureBankTokenCuvRgue.balanceOf.call(addressxfjGJY2, {from: accounts[3]});
		const boolbeLwjew = await CryptoSecureBankTokenCuvRgue.transfer.call(addressXXkcSkA, uintTOVhD7z, {from: accounts[2]});
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addresscB8vYyr, uintEJliKxe, {from: accounts[3]});

		assert.equal(boolEDVcKx, true)
		assert.equal(uintaTTBkAN, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenCuvRgue.transfer.call(addressXXkcSkA, uintTOVhD7z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuy2mQWm = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressmPFyMcm = accounts[3]
		const uintBdzkjjJ = BigInt("1963")
		const addressUGFwFwC = "0x0000000000000000000000000000000000000001"
		const addressGmeLkMl = accounts[4]
		const uinteuUBT0T = BigInt("1801")
		const addressxjE9nWE = accounts[1]
		const boolZtao7mw = await CryptoSecureBankTokenuy2mQWm.getBlackListStatus.call(addressmPFyMcm, {from: accounts[1]});
		const boolEnnaBVD = await CryptoSecureBankTokenuy2mQWm.transferFrom.call(addressGmeLkMl, addressUGFwFwC, uintBdzkjjJ, {from: accounts[2]});
		const boolvKbBGhJ = await CryptoSecureBankTokenuy2mQWm.approve.call(addressxjE9nWE, uinteuUBT0T, {from: accounts[4]});

		assert.equal(boolZtao7mw, false)
		await expect(CryptoSecureBankTokenuy2mQWm.transferFrom.call(addressGmeLkMl, addressUGFwFwC, uintBdzkjjJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressCIPKRSV = accounts[6]
		const uintgH2A6L9 = BigInt("208")
		const addresszYsshl = accounts[2]
		const uintEZUvGGj = BigInt("162")
		const addressalnsen = accounts[3]
		const uintouJ5eS = await CryptoSecureBankTokenCuvRgue.balanceOf.call(addressCIPKRSV, {from: accounts[4]});
		const addressDodth0v = await CryptoSecureBankTokenCuvRgue.getOwner.call({from: accounts[3]});
		const boolmt1lCIg = await CryptoSecureBankTokenCuvRgue.transfer.call(addresszYsshl, uintgH2A6L9, {from: accounts[0]});
		await CryptoSecureBankTokenCuvRgue.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addressalnsen, uintEZUvGGj, {from: accounts[3]});

		assert.equal(addressDodth0v, 0x507C3DE10CCff5377c19b9c5d800704e5E939478)
		assert.equal(boolmt1lCIg, true)
		assert.equal(uintouJ5eS, BigInt("0"))
		await expect(CryptoSecureBankTokenCuvRgue.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuy2mQWm = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintf3ndgHa = BigInt("0")
		const addressQ42ZJLr = accounts[1]
		const addressMJwnFTQ = accounts[0]
		const addressJYVgPpM = accounts[3]
		const uintyemRQQC = BigInt("1801")
		const addresswDP3NkS = accounts[1]
		const uintZJRlaX4 = BigInt("335")
		const address3MUhib = accounts[3]
		const boolceLBExo = await CryptoSecureBankTokenuy2mQWm.transferFrom.call(addressMJwnFTQ, addressQ42ZJLr, uintf3ndgHa, {from: accounts[4]});
		await CryptoSecureBankTokenuy2mQWm.whenPaused.call({from: accounts[4]});
		const boolZtao7mw = await CryptoSecureBankTokenuy2mQWm.getBlackListStatus.call(addressJYVgPpM, {from: accounts[1]});
		const boolvKbBGhJ = await CryptoSecureBankTokenuy2mQWm.approve.call(addresswDP3NkS, uintyemRQQC, {from: accounts[4]});
		const boolWstult = await CryptoSecureBankTokenuy2mQWm.approve.call(address3MUhib, uintZJRlaX4, {from: accounts[0]});

		assert.equal(boolceLBExo, true)
		await expect(CryptoSecureBankTokenuy2mQWm.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFML3PtM = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvsmPGCg = accounts[4]
		const addressScYd6x = accounts[5]
		await CryptoSecureBankTokenFML3PtM.whenNotPaused.call({from: accounts[5]});
		const addressG7HCf8D = await CryptoSecureBankTokenFML3PtM.addBlackList.call(addressvsmPGCg, {from: accounts[0]});
		const uintn0iDbsp = await CryptoSecureBankTokenFML3PtM.balanceOf.call(addressScYd6x, {from: accounts[0]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVidDZAJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressgMqQWAA = accounts[4]
		const uintgbEl2Yb = BigInt("798")
		const addressknxPGYp = "0x0000000000000000000000000000000000000001"
		const addressD1u3Wz4 = accounts[2]
		const addressynkP2xD = accounts[5]
		const addressKylAmP = accounts[2]
		const addressjErMhaK = accounts[2]
		const addresseT40GSP = await CryptoSecureBankTokenVidDZAJ.removeBlackList.call(addressgMqQWAA, {from: accounts[4]});
		const booldyYGuuA = await CryptoSecureBankTokenVidDZAJ.transferFrom.call(addressD1u3Wz4, addressknxPGYp, uintgbEl2Yb, {from: accounts[1]});
		const addressOaKs4j = await CryptoSecureBankTokenVidDZAJ.setOwner2.call(addressynkP2xD, {from: accounts[2]});
		const addresszbeE8Er = await CryptoSecureBankTokenVidDZAJ.transferOwnership.call(addressKylAmP, {from: accounts[0]});
		const addresseQahmy2 = await CryptoSecureBankTokenVidDZAJ.setOwner2.call(addressjErMhaK, {from: accounts[1]});

		await expect(CryptoSecureBankTokenVidDZAJ.transferFrom.call(addressD1u3Wz4, addressknxPGYp, uintgbEl2Yb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintQmXYWoo = BigInt("131")
		const addressjEcGg2 = accounts[3]
		const addresshUGHzoQ = accounts[1]
		const addressSb9M0G = "0x0000000000000000000000000000000000000001"
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addressjEcGg2, uintQmXYWoo, {from: accounts[3]});
		const addressRWjIyhS = await CryptoSecureBankTokenCuvRgue.destroyBlackFunds.call(addresshUGHzoQ, {from: accounts[0]});
		const uintOKEinIp = await CryptoSecureBankTokenCuvRgue.balanceOf.call(addressSb9M0G, {from: accounts[3]});

		assert.equal(boolfN2YTpO, true)
		await expect(CryptoSecureBankTokenCuvRgue.destroyBlackFunds.call(addresshUGHzoQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressXm655CW = accounts[2]
		const uintl9Kdxfb = BigInt("162")
		const addresskeQHfVj = accounts[4]
		const addressVoMMW78 = accounts[4]
		const boolbLqzfo7 = await CryptoSecureBankTokenCuvRgue.getBlackListStatus.call(addressXm655CW, {from: accounts[1]});
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addresskeQHfVj, uintl9Kdxfb, {from: accounts[3]});
		const addressA5dXhA = await CryptoSecureBankTokenCuvRgue.setOwner2.call(addressVoMMW78, {from: accounts[0]});

		assert.equal(boolbLqzfo7, false)
		assert.equal(boolfN2YTpO, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintq8MbmNG = BigInt("162")
		const addressf4ICcBl = accounts[3]
		const addressQFkpXtt = accounts[2]
		const addressosGC1Lp = accounts[1]
		const addressvfOKQYU = "0x0000000000000000000000000000000000000001"
		const boolfN2YTpO = await CryptoSecureBankTokenCuvRgue.approve.call(addressf4ICcBl, uintq8MbmNG, {from: accounts[3]});
		const addressd8b11OR = await CryptoSecureBankTokenCuvRgue.addBlackList.call(addressQFkpXtt, {from: accounts[0]});
		const boolvWbcHX = await CryptoSecureBankTokenCuvRgue.getBlackListStatus.call(addressosGC1Lp, {from: accounts[0]});
		const addressl4A7B9B = await CryptoSecureBankTokenCuvRgue.addBlackList.call(addressvfOKQYU, {from: accounts[3]});

		assert.equal(boolfN2YTpO, true)
		assert.equal(boolvWbcHX, false)
		await expect(CryptoSecureBankTokenCuvRgue.addBlackList.call(addressvfOKQYU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCuvRgue = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintrJbMAJy = BigInt("782")
		const addressTwJnSi2 = accounts[2]
		const addressrD9QXF = accounts[3]
		const boolVvJhcZ = await CryptoSecureBankTokenCuvRgue.approve.call(addressTwJnSi2, uintrJbMAJy, {from: accounts[3]});
		const uinthRIygdx = await CryptoSecureBankTokenCuvRgue.balanceOf.call(addressrD9QXF, {from: accounts[1]});
		await CryptoSecureBankTokenCuvRgue.pause.call({from: accounts[0]});

		assert.equal(boolVvJhcZ, true)
		assert.equal(uinthRIygdx, BigInt("0"))
		await expect(CryptoSecureBankTokenCuvRgue.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})