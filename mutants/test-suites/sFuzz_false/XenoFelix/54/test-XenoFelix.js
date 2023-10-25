const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const XenoFelixyWPFEjw = await XenoFelix.new({from: accounts[4]});
		const uintZ5xrqdC = BigInt("600")
		const addressyNzTL61 = "0x0000000000000000000000000000000000000001"
		const addressH12dFoy = accounts[4]
		const addressXzZG8My = "0x0000000000000000000000000000000000000001"
		const addresspi6yJfY = accounts[4]
		await XenoFelixyWPFEjw.onlyPauser.call({from: accounts[2]});
		const boolyvytEdF = await XenoFelixyWPFEjw.transferFrom.call(addressH12dFoy, addressyNzTL61, uintZ5xrqdC, {from: accounts[1]});
		const addressatYi3I0 = await XenoFelixyWPFEjw.addPauser.call(addressXzZG8My, {from: accounts[0]});
		const addresszKysyNI = await XenoFelixyWPFEjw.transferOwnership.call(addresspi6yJfY, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringsvhMDw = "S8"
		const stringFW2TYKk = "jPj"
		const uintp8TCaJX = BigInt("123")
		const XenoFelixvTYh59u = await XenoFelix.new(stringsvhMDw, stringFW2TYKk, uintp8TCaJX, {from: accounts[2]});
		const uintNSRhAVB = BigInt("1076")
		const addressU6YzWq4 = accounts[3]
		const boolAazQTrW = await XenoFelixvTYh59u.approve.call(addressU6YzWq4, uintNSRhAVB, {from: accounts[1]});
		const uint256atwPWIz = await XenoFelixvTYh59u.totalSupply.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringVibfZ3j = "qp61qaItprIy6eIUD2GiV2ZYNT"
		const stringjmfMVcm = "qUPmh3EoEuczZyrm1LGhEaoVciEoYQMacaycw21Ub5RJXQhKH2VIoquS1Yn9qTdW6uW9q4SkhTLOSrPF1vIEidXop"
		const uintd4n5WXd = BigInt("183")
		const XenoFelixekVeQtA = await XenoFelix.new(stringVibfZ3j, stringjmfMVcm, uintd4n5WXd, {from: accounts[4]});
		const addressB54XA6u = accounts[1]
		const uintxM5cits = BigInt("1847")
		const addressCa6Hx5o = accounts[4]
		const uintS8fcxel = BigInt("1347")
		const addressz6lvnG2 = accounts[4]
		const addressEyMLpkx = "0x0000000000000000000000000000000000000001"
		const addresswoSGuVY = await XenoFelixekVeQtA.notFrozen.call(addressB54XA6u, {from: accounts[3]});
		const booluwpfiLk = await XenoFelixekVeQtA.approve.call(addressCa6Hx5o, uintxM5cits, {from: accounts[2]});
		const addressCqDgnJ = await XenoFelixekVeQtA.burnFrom.call(addressz6lvnG2, uintS8fcxel, {from: accounts[1]});
		const addressdwbHRLt = await XenoFelixekVeQtA.addPauser.call(addressEyMLpkx, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringtKZUyiw = "RTlqN9s19YypuP1dwF2E6fRJBf2063bkiN8Qy6DBFbZp6dT3Ame0jKCfxiFiIXp5GbcSThhS8OEhjSMyeSxwfjpaugaArfMi6zc"
		const stringpSAiUjF = "VeTVDH1TyknyWUb1MqQJqTBjAUhL98C3lhzS9zgOtWP8tH8qIduyc2XVchPtNoi86Rwgdu0sdRh3g2KeQoHw"
		const uint1G7H5h = BigInt("346")
		const uintw9gs57n = BigInt("110")
		const XenoFelixQdXJl0V = await XenoFelix.new(stringtKZUyiw, stringpSAiUjF, uint1G7H5h, uintw9gs57n, {from: accounts[2]});
		const uintq3lHACU = BigInt("239")
		const uintZSoB1N6 = BigInt("1120")
		const addressMCQQBy4 = accounts[0]
		const addresszpZtrWo = accounts[3]
//		const uint256tHpbuSE = await XenoFelixQdXJl0V.burn.call(uintq3lHACU, {from: accounts[0]});
//		const boolHJwx30I = await XenoFelixQdXJl0V.transferFrom.call(addresszpZtrWo, addressMCQQBy4, uintZSoB1N6, {from: accounts[3]});

		await expect(XenoFelixQdXJl0V.burn.call(uintq3lHACU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZKiZPek = "gniST6EbXDF2LUpdMdMY41qaXQGMHqHbKDp8XA0OcQogkGto9lbTrxGujVRLToFAaLwnbKF2i7rprEweSIWf"
		const stringrryDUqH = "UfYahI21FfRDsCHh7U7rMJdaG"
		const uintpLm9BrM = BigInt("319")
		const uintR8kBFyG = BigInt("148")
		const XenoFelixiyikp4 = await XenoFelix.new(stringZKiZPek, stringrryDUqH, uintpLm9BrM, uintR8kBFyG, {from: accounts[1]});
		const addressNrF37XO = accounts[2]
		const stringOS58lf = await XenoFelixiyikp4.name.call({from: accounts[1]});
		const uint8nVH1eXm = await XenoFelixiyikp4.decimals.call({from: accounts[3]});
		const addressSwcXeg1 = await XenoFelixiyikp4.addPauser.call(addressNrF37XO, {from: accounts[1]});
		const uint256rZPBQj2 = await XenoFelixiyikp4.totalSupply.call({from: accounts[2]});
		const stringoRsOdmO = await XenoFelixiyikp4.symbol.call({from: accounts[1]});

		assert.equal(stringOS58lf, "gniST6EbXDF2LUpdMdMY41qaXQGMHqHbKDp8XA0OcQogkGto9lbTrxGujVRLToFAaLwnbKF2i7rprEweSIWf")
		assert.equal(stringoRsOdmO, "UfYahI21FfRDsCHh7U7rMJdaG")
		assert.equal(uint256rZPBQj2, BigInt("10206182795855009451679268095393326940045556413003502608182283994183686422528"))
		assert.equal(uint8nVH1eXm, BigInt("148"))
	});

	it('test for XenoFelix', async () => {
		const stringPCUGjaB = "jV77"
		const stringtNblKPn = "mTGDd6p36S427ipZHD1n9mrBQDxyGK9HKAXHoNNqtHE0B5JcB"
		const uintrIQw3e = BigInt("130")
		const XenoFelixDShLii = await XenoFelix.new(stringPCUGjaB, stringtNblKPn, uintrIQw3e, {from: accounts[1]});
		const uintR7kLKXZ = BigInt("35")
		const addressG65OftY = accounts[3]
		const addresseEv1EN = accounts[2]
		const addressXyYamX = accounts[2]
		const uintDPgjBJk = BigInt("1060")
		const addressTRE7iVA = accounts[0]
		await XenoFelixDShLii.onlyNewOwner.call({from: accounts[0]});
		const boolKWEn0R5 = await XenoFelixDShLii.unlock.call(addressG65OftY, uintR7kLKXZ, {from: accounts[4]});
		const boolkLhCpex = await XenoFelixDShLii.isPauser.call(addresseEv1EN, {from: accounts[0]});
		const boolv4AsI98 = await XenoFelixDShLii.unfreezeAccount.call(addressXyYamX, {from: accounts[5]});
		const boolFMqWMwl = await XenoFelixDShLii.approve.call(addressTRE7iVA, uintDPgjBJk, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintc1TyA1 = BigInt("498")
		const uintRgXatkL = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintc1TyA1, uintRgXatkL, {from: accounts[3]});
		const addressSeknjIr = accounts[5]
		const addresswKRXapn = accounts[0]
		const uintlLgH0QZ = BigInt("207")
		const addressPgNBPrY = accounts[1]
		const addressQ5EtJBU = accounts[4]
		const uintFT8QH4B = BigInt("543")
		const address2OOfyO = "0x0000000000000000000000000000000000000001"
		const uint256YIrJoYs = await XenoFelixuEkGs1d.allowance.call(addresswKRXapn, addressSeknjIr, {from: accounts[0]});
//		const boolsJZQ8Y = await XenoFelixuEkGs1d.transferFrom.call(addressQ5EtJBU, addressPgNBPrY, uintlLgH0QZ, {from: accounts[1]});
//		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(address2OOfyO, uintFT8QH4B, {from: accounts[3]});

		assert.equal(uint256YIrJoYs, BigInt("0"))
		await expect(XenoFelixuEkGs1d.transferFrom.call(addressQ5EtJBU, addressPgNBPrY, uintlLgH0QZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintG3CyJF5 = BigInt("498")
		const uint7r3oEL = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintG3CyJF5, uint7r3oEL, {from: accounts[3]});
		const addressBwfsXkS = accounts[6]
		const addresswPGe5Kw = accounts[0]
		const uintrZIBDUm = BigInt("543")
		const addressVfxNNfl = "0x0000000000000000000000000000000000000001"
		const uint256YIrJoYs = await XenoFelixuEkGs1d.allowance.call(addresswPGe5Kw, addressBwfsXkS, {from: accounts[0]});
		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(addressVfxNNfl, uintrZIBDUm, {from: accounts[3]});

		assert.equal(boolTD0x08n, true)
		assert.equal(uint256YIrJoYs, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintZUWgRUg = BigInt("498")
		const uintJtXkban = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintZUWgRUg, uintJtXkban, {from: accounts[3]});
		const addressuoGPH9 = accounts[6]
		const addressTAZzt4w = accounts[0]
		const addressuVP7cer = accounts[3]
		const uintHEZ74ZH = BigInt("207")
		const addressnLT25u2 = accounts[1]
		const addressOTPTEIi = accounts[4]
		const uintn4lJq4V = BigInt("543")
		const addressiVZ2HHW = "0x0000000000000000000000000000000000000001"
		const uint256YIrJoYs = await XenoFelixuEkGs1d.allowance.call(addressTAZzt4w, addressuoGPH9, {from: accounts[0]});
		const uint256p5QxQoa = await XenoFelixuEkGs1d.balanceOf.call(addressuVP7cer, {from: accounts[1]});
//		const boolsJZQ8Y = await XenoFelixuEkGs1d.transferFrom.call(addressOTPTEIi, addressnLT25u2, uintHEZ74ZH, {from: accounts[1]});
//		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(addressiVZ2HHW, uintn4lJq4V, {from: accounts[3]});

		assert.equal(uint256YIrJoYs, BigInt("0"))
		assert.equal(uint256p5QxQoa, BigInt("39823167635445836852398897201510748354625913235028656874016211440358632980480"))
		await expect(XenoFelixuEkGs1d.transferFrom.call(addressOTPTEIi, addressnLT25u2, uintHEZ74ZH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZB9OQLo = "H6VCNP4zrZfyx66nA6oVguBUWJA5N4RFn"
		const stringEzZy3y5 = "M0nwGD5cagISRxHhp3df6jg87LQO8SLiSz5LpdP9hua6rKxhPXhEEkKqda"
		const uintuhMRtY3 = BigInt("1497")
		const uintfuj4a2u = BigInt("29")
		const XenoFelixWq04MLT = await XenoFelix.new(stringZB9OQLo, stringEzZy3y5, uintuhMRtY3, uintfuj4a2u, {from: accounts[5]});
		const addressZjUuMSi = accounts[2]
		const addressscBVJVq = accounts[2]
//		await XenoFelixWq04MLT.whenNotPaused.call({from: accounts[2]});
//		const boolQY4U1C9 = await XenoFelixWq04MLT.unfreezeAccount.call(addressZjUuMSi, {from: accounts[1]});
//		const uint256iRFcoCl = await XenoFelixWq04MLT.totalSupply.call({from: accounts[1]});
//		const boolRDyp1HE = await XenoFelixWq04MLT.freezeAccount.call(addressscBVJVq, {from: accounts[1]});

		await expect(XenoFelixWq04MLT.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintw5yC2oY = BigInt("498")
		const uinttHokmkx = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintw5yC2oY, uinttHokmkx, {from: accounts[3]});
		const addressIv1EL4Q = accounts[3]
		const addressV2dkgVW = accounts[7]
		const addressGfvOd6 = accounts[0]
		const uintTjmKPXU = BigInt("1079")
		const uintq2Wclny = BigInt("329")
		const addressx3AdIKb = accounts[2]
		const uinttwoctl = BigInt("543")
		const addressYXkD91Q = "0x0000000000000000000000000000000000000001"
		const boolMSCddMA = await XenoFelixuEkGs1d.isPauser.call(addressIv1EL4Q, {from: accounts[4]});
		const uint256YIrJoYs = await XenoFelixuEkGs1d.allowance.call(addressGfvOd6, addressV2dkgVW, {from: accounts[0]});
//		const booljDv1TcM = await XenoFelixuEkGs1d.transferWithLock.call(addressx3AdIKb, uintq2Wclny, uintTjmKPXU, {from: accounts[1]});
//		const uint8cUs06GD = await XenoFelixuEkGs1d.decimals.call({from: accounts[0]});
//		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(addressYXkD91Q, uinttwoctl, {from: accounts[3]});

		assert.equal(boolMSCddMA, true)
		assert.equal(uint256YIrJoYs, BigInt("0"))
		await expect(XenoFelixuEkGs1d.transferWithLock.call(addressx3AdIKb, uintq2Wclny, uintTjmKPXU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZGwkIw = "1"
		const stringxeyqJ7a = "dxvyK8fDmwizULHSYdscKv91"
		const uintcCQc6S3 = BigInt("97")
		const XenoFelixrvKXLqo = await XenoFelix.new(stringZGwkIw, stringxeyqJ7a, uintcCQc6S3, {from: accounts[0]});
		const uintKNW2Fsh = BigInt("1945")
		const uintrd8nm8Z = BigInt("49")
		const addressqBXlsOt = "0x0000000000000000000000000000000000000001"
		const uint256TLwq3C0 = await XenoFelixrvKXLqo.burn.call(uintKNW2Fsh, {from: accounts[0]});
		const addressJzAvnG = await XenoFelixrvKXLqo.burnFrom.call(addressqBXlsOt, uintrd8nm8Z, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintHd92aDp = BigInt("498")
		const uintiTOSMBw = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintHd92aDp, uintiTOSMBw, {from: accounts[3]});
		const uintmuoJDs4 = BigInt("544")
		const addressnzgZCrh = "0x0000000000000000000000000000000000000001"
		const uintucg1Soo = BigInt("1435")
		const addressbmv4Tq6 = accounts[4]
		const uintBL2gHcj = BigInt("1767")
		const addresszXpBV5r = accounts[3]
		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(addressnzgZCrh, uintmuoJDs4, {from: accounts[3]});
//		const addresslyhHadQ = await XenoFelixuEkGs1d.burnFrom.call(addressbmv4Tq6, uintucg1Soo, {from: accounts[3]});
//		const bool0115AB = await XenoFelixuEkGs1d.paused.call({from: accounts[2]});
//		const bool15hWc9 = await XenoFelixuEkGs1d.transfer.call(addresszXpBV5r, uintBL2gHcj, {from: accounts[3]});

		assert.equal(boolTD0x08n, true)
		await expect(XenoFelixuEkGs1d.burnFrom.call(addressbmv4Tq6, uintucg1Soo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintfIjBrll = BigInt("498")
		const uintVLdDkJn = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintfIjBrll, uintVLdDkJn, {from: accounts[3]});
		const addressuYTKy4 = accounts[3]
		const uintX4oCDEj = BigInt("222")
		const addressEKyZEW = accounts[1]
		const addressKe4f3Yf = accounts[4]
		const uintXobKZxH = BigInt("543")
		const addressJyCsb8I = "0x0000000000000000000000000000000000000002"
		const boolQxf3QY4 = await XenoFelixuEkGs1d.paused.call({from: accounts[4]});
		const uint256ii4L7R = await XenoFelixuEkGs1d.totalSupply.call({from: accounts[4]});
		const boolwTzbNNv = await XenoFelixuEkGs1d.paused.call({from: accounts[3]});
		const uint256p5QxQoa = await XenoFelixuEkGs1d.balanceOf.call(addressuYTKy4, {from: accounts[1]});
//		const boolsJZQ8Y = await XenoFelixuEkGs1d.transferFrom.call(addressKe4f3Yf, addressEKyZEW, uintX4oCDEj, {from: accounts[1]});
//		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(addressJyCsb8I, uintXobKZxH, {from: accounts[3]});

		assert.equal(boolQxf3QY4, false)
		assert.equal(boolwTzbNNv, false)
		assert.equal(uint256ii4L7R, BigInt("39823167635445836852398897201510748354625913235028656874016211440358632980480"))
		assert.equal(uint256p5QxQoa, BigInt("39823167635445836852398897201510748354625913235028656874016211440358632980480"))
		await expect(XenoFelixuEkGs1d.transferFrom.call(addressKe4f3Yf, addressEKyZEW, uintX4oCDEj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintTmhZmWh = BigInt("498")
		const uintuzEcj2W = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintTmhZmWh, uintuzEcj2W, {from: accounts[3]});
		const uinteBzSpOO = BigInt("560")
		const address9XRQoq = "0x0000000000000000000000000000000000000001"
		const addressDtG4rUZ = accounts[3]
		const addressRssMVGf = accounts[3]
		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(address9XRQoq, uinteBzSpOO, {from: accounts[3]});
		const boolLcHIZ7Q = await XenoFelixuEkGs1d.isPauser.call(addressDtG4rUZ, {from: accounts[1]});
		const booltl8dT2G = await XenoFelixuEkGs1d.isOwner.call(addressRssMVGf, {from: accounts[4]});

		assert.equal(boolLcHIZ7Q, true)
		assert.equal(boolTD0x08n, true)
		assert.equal(booltl8dT2G, true)
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintWuGGyT2 = BigInt("498")
		const uintSolRAtL = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintWuGGyT2, uintSolRAtL, {from: accounts[3]});
		const addressHzRy9m = accounts[0]
		const addressjMQKzsH = accounts[3]
		const uint0koreq = BigInt("207")
		const addressnfw6XoC = accounts[1]
		const addressujBi1ds = accounts[4]
		const uintRwwAmRy = BigInt("517")
		const addressPwuvdWH = "0x0000000000000000000000000000000000000002"
//		const boolfplRKgZ = await XenoFelixuEkGs1d.unfreezeAccount.call(addressHzRy9m, {from: accounts[3]});
//		const uint256p5QxQoa = await XenoFelixuEkGs1d.balanceOf.call(addressjMQKzsH, {from: accounts[1]});
//		const boolsJZQ8Y = await XenoFelixuEkGs1d.transferFrom.call(addressujBi1ds, addressnfw6XoC, uint0koreq, {from: accounts[1]});
//		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(addressPwuvdWH, uintRwwAmRy, {from: accounts[3]});

		await expect(XenoFelixuEkGs1d.unfreezeAccount.call(addressHzRy9m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringlPG4oip = "hkhXMfff3naLXqxrsIA4W5QsCDp11EtQbpQzf4Bvv8LfgRAyiout4BcGhG08pkfr1gT0hDlPlEsiuI79m7cTe4"
		const stringAfVCHYd = "UIv58SIgn2xzpxoK02cfzNSfHIbGoTcZudTPYHx1aBgYlLfxhZHJD1JdHc6TF3BAXc3WuU5NDFuwq1aEVXT"
		const uintcEfcV98 = BigInt("34")
		const XenoFelixo2E8Ukx = await XenoFelix.new(stringlPG4oip, stringAfVCHYd, uintcEfcV98, {from: accounts[5]});
		const addressc3wQAjU = accounts[1]
		const addresscIgPv9D = accounts[2]
		const booltbSLqJX = await XenoFelixo2E8Ukx.freezeAccount.call(addressc3wQAjU, {from: accounts[3]});
		await XenoFelixo2E8Ukx.unpause.call({from: accounts[1]});
		const addressypnYu0e = await XenoFelixo2E8Ukx.addPauser.call(addresscIgPv9D, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uint6xuiYv = BigInt("498")
		const uintIhVoSf = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uint6xuiYv, uintIhVoSf, {from: accounts[3]});
		const uintKx7n5JX = BigInt("574")
		const addressLx8xbCm = "0x0000000000000000000000000000000000000001"
		const addressAvykLJi = accounts[0]
		const uintYFZGdYe = BigInt("1074")
		const uintrf0a3oo = BigInt("175")
		const addresstEmC0k5 = accounts[4]
		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(addressLx8xbCm, uintKx7n5JX, {from: accounts[3]});
		const uint256x6JTXH6 = await XenoFelixuEkGs1d.balanceOf.call(addressAvykLJi, {from: accounts[0]});
//		const boolnloejHv = await XenoFelixuEkGs1d.lock.call(addresstEmC0k5, uintrf0a3oo, uintYFZGdYe, {from: accounts[3]});

		assert.equal(boolTD0x08n, true)
		assert.equal(uint256x6JTXH6, BigInt("0"))
		await expect(XenoFelixuEkGs1d.lock.call(addresstEmC0k5, uintrf0a3oo, uintYFZGdYe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintuBnjf9T = BigInt("498")
		const uintHAoz6s4 = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintuBnjf9T, uintHAoz6s4, {from: accounts[3]});
		const uintb4G9gZK = BigInt("1501")
		const addresszb6gCwe = accounts[1]
		const uintPLL0DvY = BigInt("543")
		const addressJpPfnGa = "0x0000000000000000000000000000000000000001"
		const boolV2oTcAo = await XenoFelixuEkGs1d.approve.call(addresszb6gCwe, uintb4G9gZK, {from: accounts[4]});
		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(addressJpPfnGa, uintPLL0DvY, {from: accounts[3]});

		assert.equal(boolTD0x08n, true)
		assert.equal(boolV2oTcAo, true)
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintumNX4qt = BigInt("498")
		const uintKaFbfh6 = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintumNX4qt, uintKaFbfh6, {from: accounts[3]});
		const addressPT0Fxmx = accounts[2]
		const addressrlm6xPf = accounts[3]
		const uintW1UiSEs = BigInt("764")
		const addressV8uHGNV = accounts[4]
//		await XenoFelixuEkGs1d.renouncePauser.call({from: accounts[0]});
//		const uint256fp6xfL3 = await XenoFelixuEkGs1d.allowance.call(addressrlm6xPf, addressPT0Fxmx, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mZeRNKs = await XenoFelixuEkGs1d.burn.call(uintW1UiSEs, {from: accounts[0]});
//		const uint256p5QxQoa = await XenoFelixuEkGs1d.balanceOf.call(addressV8uHGNV, {from: accounts[1]});

		await expect(XenoFelixuEkGs1d.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintTKb2OkO = BigInt("498")
		const uintENdVkQ = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintTKb2OkO, uintENdVkQ, {from: accounts[3]});
		const addressAgqKlk1 = accounts[5]
		const uintzRd1mLX = BigInt("543")
		const addressRzW8Lh = "0x0000000000000000000000000000000000000002"
		const uintDoycKJk = BigInt("336")
		const uintQ8zqH2g = BigInt("1460")
		const addressyuS2bQO = "0x0000000000000000000000000000000000000001"
		const uint256p5QxQoa = await XenoFelixuEkGs1d.balanceOf.call(addressAgqKlk1, {from: accounts[1]});
//		await XenoFelixuEkGs1d.pause.call({from: accounts[3]});
//		const boolTD0x08n = await XenoFelixuEkGs1d.transfer.call(addressRzW8Lh, uintzRd1mLX, {from: accounts[3]});
//		const boolHbdYoZ = await XenoFelixuEkGs1d.transferWithLock.call(addressyuS2bQO, uintQ8zqH2g, uintDoycKJk, {from: accounts[1]});

		assert.equal(uint256p5QxQoa, BigInt("0"))
		await expect(XenoFelixuEkGs1d.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintvWxs4qZ = BigInt("498")
		const uinttueY05 = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintvWxs4qZ, uinttueY05, {from: accounts[3]});
		const uintUj2IAUa = BigInt("58")
		const addressbzWEVoB = accounts[1]
		const uintJg6dIk9 = BigInt("1410")
		const addressgdOeaMW = accounts[1]
		const uintxtycm2 = BigInt("195")
		const addressNiJz5W3 = accounts[1]
		const addressl1oIcK = accounts[5]
//		const boolnzYmyoM = await XenoFelixuEkGs1d.decreaseAllowance.call(addressbzWEVoB, uintUj2IAUa, {from: accounts[1]});
//		const booliguPGLc = await XenoFelixuEkGs1d.increaseAllowance.call(addressgdOeaMW, uintJg6dIk9, {from: accounts[2]});
//		const boolsJZQ8Y = await XenoFelixuEkGs1d.transferFrom.call(addressl1oIcK, addressNiJz5W3, uintxtycm2, {from: accounts[1]});

		await expect(XenoFelixuEkGs1d.decreaseAllowance.call(addressbzWEVoB, uintUj2IAUa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringTHJsOv = "BEb3SKTK8kpIgOUMFQblAyTiK8DObmdwxDcaQkpKaeAESkFqBm77iPVWL1OOwLik7yjuiUvwfonjW5HVXt481bMN28kgoSeWpEi"
		const stringfH9teXf = "tdjiuAMpAvQVpyyu8sJ9G5jhQqKXFJigFFnuYmg7yO"
		const uintHbJDP0z = BigInt("252")
		const XenoFelixerD0H30 = await XenoFelix.new(stringTHJsOv, stringfH9teXf, uintHbJDP0z, {from: accounts[3]});
		const addressCZ7YI30 = accounts[2]
		const uinttSsyDYP = BigInt("1412")
		const addressWW9YqXf = accounts[1]
		await XenoFelixerD0H30.unpause.call({from: accounts[0]});
		await XenoFelixerD0H30.onlyPauser.call({from: accounts[5]});
		await XenoFelixerD0H30.pause.call({from: accounts[5]});
		const addressLKtuuAC = await XenoFelixerD0H30.notFrozen.call(addressCZ7YI30, {from: accounts[4]});
		const addressXIjlb0v = await XenoFelixerD0H30.burnFrom.call(addressWW9YqXf, uinttSsyDYP, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringZ0vOsZ = "96Sk6f2qBfafruYN5v6MHoVhaB3EFGkgzVrV6n4ruT"
		const stringjDfmYX = "xtUKvCErZvalWVtHTJLTqbybEP2xX1tj1P"
		const uintM0UKIm = BigInt("219")
		const XenoFelixnrdT6x9 = await XenoFelix.new(stringZ0vOsZ, stringjDfmYX, uintM0UKIm, {from: "0x0000000000000000000000000000000000000001"});
		const uintARQ8MhQ = BigInt("1909")
		const addressuiRmWfa = accounts[5]
		const addressnyaMJak = accounts[3]
		const addresszjPtNfY = accounts[0]
		await XenoFelixnrdT6x9.onlyPauser.call({from: accounts[4]});
		await XenoFelixnrdT6x9.whenNotPaused.call({from: accounts[1]});
		const boolVopOrL = await XenoFelixnrdT6x9.unlock.call(addressuiRmWfa, uintARQ8MhQ, {from: accounts[2]});
		const addressGsSDlZb = await XenoFelixnrdT6x9.notFrozenAndTransaction.call(addresszjPtNfY, addressnyaMJak, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uinti8uBMIF = BigInt("498")
		const uintZtMqR0T = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uinti8uBMIF, uintZtMqR0T, {from: accounts[3]});
		const addressMDRSel2 = accounts[3]
		const addressVbUDoqA = accounts[1]
		const addressaEBNn2h = accounts[6]
		const uintVsx9NHB = BigInt("1440")
		const addressOxzCawT = accounts[0]
		const uint256HbX1Rk = await XenoFelixuEkGs1d.balanceOf.call(addressMDRSel2, {from: accounts[3]});
		const uint256iXvCxQt = await XenoFelixuEkGs1d.balanceOf.call(addressVbUDoqA, {from: accounts[3]});
		const uint256p5QxQoa = await XenoFelixuEkGs1d.balanceOf.call(addressaEBNn2h, {from: accounts[1]});
		const boolkf4PVlo = await XenoFelixuEkGs1d.increaseAllowance.call(addressOxzCawT, uintVsx9NHB, {from: accounts[1]});

		assert.equal(boolkf4PVlo, true)
		assert.equal(uint256HbX1Rk, BigInt("39823167635445836852398897201510748354625913235028656874016211440358632980480"))
		assert.equal(uint256iXvCxQt, BigInt("0"))
		assert.equal(uint256p5QxQoa, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintSE66EHe = BigInt("498")
		const uintcn1FCLs = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintSE66EHe, uintcn1FCLs, {from: accounts[3]});
		const addressMdmwx5q = accounts[2]
		const uintnFOz3p5 = BigInt("195")
		const addresstbRvQip = accounts[1]
		const addressM9idDjN = accounts[4]
//		const addressHoeu5o = await XenoFelixuEkGs1d.removePauser.call(addressMdmwx5q, {from: accounts[3]});
//		const boolsJZQ8Y = await XenoFelixuEkGs1d.transferFrom.call(addressM9idDjN, addresstbRvQip, uintnFOz3p5, {from: accounts[1]});

		await expect(XenoFelixuEkGs1d.removePauser.call(addressMdmwx5q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnjaZpik = "DfQhjFPnu4ERmTLG1Ek54jlx9Eyb5DuGgA373NySnxLeYfRuOeVlHbW"
		const stringjqZ7dUD = "lA0TIr6DdVbdvgZ3EwuY7l6uVO99j3fdqRlo67oSwnL3jfJ"
		const uintu67qKdA = BigInt("1547")
		const uintW4BUv7R = BigInt("233")
		const XenoFelixqerRKm = await XenoFelix.new(stringnjaZpik, stringjqZ7dUD, uintu67qKdA, uintW4BUv7R, {from: "0x0000000000000000000000000000000000000001"});
		const addressXN4EuAR = accounts[1]
		const uintypajBc7 = BigInt("1422")
		const uintZUlRvMr = BigInt("1211")
		const addressywj3cRF = accounts[2]
		const addresspz9P3v = accounts[4]
		const addresseEdiPy = accounts[4]
		const addressvFQiouV = accounts[4]
		const addressLxnPaKY = await XenoFelixqerRKm.removePauser.call(addressXN4EuAR, {from: accounts[1]});
		const boolz5t2WTR = await XenoFelixqerRKm.paused.call({from: accounts[1]});
		const boolfWzplu = await XenoFelixqerRKm.lock.call(addressywj3cRF, uintZUlRvMr, uintypajBc7, {from: accounts[2]});
		const addressofluriH = await XenoFelixqerRKm.removePauser.call(addresspz9P3v, {from: accounts[0]});
		await XenoFelixqerRKm.renouncePauser.call({from: accounts[3]});
		const address5WJkgD = await XenoFelixqerRKm.notFrozenAndTransaction.call(addressvFQiouV, addresseEdiPy, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringKHNm6vG = "1bnnst6ySw7dDNKtnzAgSOPlwkiq"
		const stringyOQBQnt = "ktkyMMAmyDgiZOf3tcUp6L6vr3hqdXpk0lJPVYB1DNVyyj20KMBLTBGUCE43f"
		const uintsGHbhvn = BigInt("498")
		const uintHbmsOeZ = BigInt("212")
		const XenoFelixuEkGs1d = await XenoFelix.new(stringKHNm6vG, stringyOQBQnt, uintsGHbhvn, uintHbmsOeZ, {from: accounts[3]});
		const addresspBl9I2U = accounts[4]
		const uintvgT8Gim = BigInt("195")
		const addressKXgzAMD = accounts[1]
		const addressNgjLHzt = accounts[5]
		const addresswI6Cme = await XenoFelixuEkGs1d.transferOwnership.call(addresspBl9I2U, {from: accounts[3]});
//		await XenoFelixuEkGs1d.whenPaused.call({from: accounts[3]});
//		const boolsJZQ8Y = await XenoFelixuEkGs1d.transferFrom.call(addressNgjLHzt, addressKXgzAMD, uintvgT8Gim, {from: accounts[1]});

		await expect(XenoFelixuEkGs1d.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})