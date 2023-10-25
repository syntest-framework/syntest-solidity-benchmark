const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100lxeH2r = await Token50X100.new({from: accounts[0]});
		const uinteUiB7o = BigInt("1279")
		const addressEvZlv2F = accounts[4]
		const addressdDEsSO0 = accounts[4]
		const uintzWGhpa = BigInt("1674")
		const addressHMX9wts = accounts[0]
		const addresstWLNrLs = accounts[4]
		const uintJSiFwq4 = BigInt("338")
		const uintu5Fwk2t = BigInt("1082")
		const addressNg4SOw9 = accounts[4]
		const addresslslSxP8 = accounts[5]
		const uintB02RFM8 = BigInt("963")
		const uintPmhb1f7 = BigInt("1911")
//		const boolb87csQF = await Token50X100lxeH2r.transferFrom.call(addressdDEsSO0, addressEvZlv2F, uinteUiB7o, {from: accounts[1]});
//		const boolociOpRj = await Token50X100lxeH2r.issueTokens.call(addresstWLNrLs, addressHMX9wts, uintzWGhpa, {from: accounts[3]});
//		const boolLhEpvgc = await Token50X100lxeH2r._transfer.call(addresslslSxP8, addressNg4SOw9, uintu5Fwk2t, uintJSiFwq4, {from: accounts[4]});
//		const boolH2ucGn = await Token50X100lxeH2r.safeLock.call(uintPmhb1f7, uintB02RFM8, {from: accounts[3]});

		await expect(Token50X100lxeH2r.transferFrom.call(addressdDEsSO0, addressEvZlv2F, uinteUiB7o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100dgdfHU4 = await Token50X100.new({from: accounts[0]});
		const addressQfonoB = accounts[4]
		const uintHoW17TS = BigInt("36")
		const stringIOp6bhr = "ehzrv9q5djC9FpHL4soamCQocGSNo1WIQ03Mmiu9nmOuxTBsWQYg2q2XDQg0eGUPhsioUk232fP1"
		const stringxtwsuOd = "mjVtwutad84Jj4IpMY4XSTM56w5z5qpQJtPONHQnRZibRH"
		const uint256qnu2i5a = await Token50X100dgdfHU4.balanceOf.call(addressQfonoB, {from: accounts[1]});
//		await Token50X100dgdfHU4.onlyOwner.call({from: accounts[3]});
//		await Token50X100dgdfHU4.setSymbolNameDecimals.call(stringxtwsuOd, stringIOp6bhr, uintHoW17TS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256qnu2i5a, BigInt("0"))
		await expect(Token50X100dgdfHU4.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100v4upm6 = await Token50X100.new({from: accounts[0]});
		const addressgwrmJcR = accounts[1]
		const uintHIK48n = BigInt("733")
		const address1Qxh6o = accounts[4]
		const uintVaaKD5s = BigInt("1581")
		const addressmVqnx0 = accounts[0]
		const uintvE2F0ew = BigInt("1604")
		const uintIVTPrwz = BigInt("1455")
		const addressj13TZxL = accounts[0]
		const addressssmBPXS = accounts[2]
		const uintQLdnosm = BigInt("672")
		const addressDJaYKKm = accounts[4]
		const uint256iWx7Xfq = await Token50X100v4upm6.balanceOf.call(addressgwrmJcR, {from: accounts[0]});
		const booluCn8WAO = await Token50X100v4upm6.decreaseApproval.call(address1Qxh6o, uintHIK48n, {from: accounts[1]});
//		const boolcx3ptCt = await Token50X100v4upm6.transfer.call(addressmVqnx0, uintVaaKD5s, {from: accounts[5]});
//		const boolNrscnpW = await Token50X100v4upm6._transfer.call(addressssmBPXS, addressj13TZxL, uintIVTPrwz, uintvE2F0ew, {from: accounts[5]});
//		const boolzSvidr = await Token50X100v4upm6.transfer.call(addressDJaYKKm, uintQLdnosm, {from: accounts[4]});

		assert.equal(booluCn8WAO, true)
		assert.equal(uint256iWx7Xfq, BigInt("0"))
		await expect(Token50X100v4upm6.transfer.call(addressmVqnx0, uintVaaKD5s, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100DCqOtPs = await Token50X100.new({from: accounts[4]});
		const addressza3VLgU = accounts[4]
		const addressKExlSk2 = accounts[0]
		const boolvzpqLsl = true
		const addressUt15U5 = accounts[4]
		const uintKNBMRZx = BigInt("308")
		const addresstfE6OYh = "0x0000000000000000000000000000000000000001"
		const addressRAPZvmZ = accounts[3]
		const uint256RvOVFk = await Token50X100DCqOtPs.allowance.call(addressKExlSk2, addressza3VLgU, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100DCqOtPs.setWhiteList.call(addressUt15U5, boolvzpqLsl, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWhTh8Xf = await Token50X100DCqOtPs.transfer.call(addresstfE6OYh, uintKNBMRZx, {from: accounts[1]});
//		const uint256ZTBggvG = await Token50X100DCqOtPs.balanceOf.call(addressRAPZvmZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256RvOVFk, BigInt("0"))
		await expect(Token50X100DCqOtPs.setWhiteList.call(addressUt15U5, boolvzpqLsl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Jl8WatM = await Token50X100.new({from: accounts[5]});
		const uintHHIxK42 = BigInt("881")
		const addressv3uuK35 = accounts[4]
		const uintRVFVIEx = BigInt("2004")
		const uintMa60j7w = BigInt("82")
		const addressbxB5ck9 = accounts[2]
		const addressDBPzkwz = accounts[1]
		const boolspaQzS = await Token50X100Jl8WatM.increaseApproval.call(addressv3uuK35, uintHHIxK42, {from: accounts[0]});
//		const boolzGg6752 = await Token50X100Jl8WatM._transfer.call(addressDBPzkwz, addressbxB5ck9, uintMa60j7w, uintRVFVIEx, {from: accounts[3]});

		assert.equal(boolspaQzS, true)
		await expect(Token50X100Jl8WatM._transfer.call(addressDBPzkwz, addressbxB5ck9, uintMa60j7w, uintRVFVIEx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100F355pyq = await Token50X100.new({from: accounts[0]});
		const uinthQn2oHB = BigInt("1567")
		const uintrjjquJQ = BigInt("1318")
		const uintZzperfp = BigInt("255")
		const uintFNHvW98 = BigInt("1235")
		const addressOfdfrff = accounts[4]
		const addressd0Ex7JF = accounts[4]
		const uintUI443z9 = BigInt("2031")
		const uintVRCizp5 = BigInt("295")
		const addressAfpEtXQ = accounts[4]
		const uintLJzUau1 = BigInt("524")
		const addressaD0s47P = "0x0000000000000000000000000000000000000001"
		const addressCy8AzNF = accounts[5]
//		const boolSHYPQvF = await Token50X100F355pyq.safeLock.call(uintrjjquJQ, uinthQn2oHB, {from: accounts[3]});
//		const boolmSi5qAb = await Token50X100F355pyq._transfer.call(addressd0Ex7JF, addressOfdfrff, uintFNHvW98, uintZzperfp, {from: accounts[2]});
//		const boolvEQ0GeA = await Token50X100F355pyq.setVesting.call(addressAfpEtXQ, uintVRCizp5, uintUI443z9, {from: accounts[1]});
//		await Token50X100F355pyq.lock.call({from: accounts[2]});
//		await Token50X100F355pyq.lock.call({from: accounts[4]});
//		const boolYy1fS1s = await Token50X100F355pyq.issueTokens.call(addressCy8AzNF, addressaD0s47P, uintLJzUau1, {from: accounts[3]});

		await expect(Token50X100F355pyq.safeLock.call(uintrjjquJQ, uinthQn2oHB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100v4upm6 = await Token50X100.new({from: accounts[0]});
		const addressal8I8Jp = accounts[1]
		const uintUyD69zz = BigInt("747")
		const uintAps068 = BigInt("733")
		const addressmdAkP3Z = accounts[4]
		const uintsaX5ls5 = BigInt("598")
		const addressLNV9gpC = accounts[5]
		const uintFSY4Yb = BigInt("1581")
		const addresswUYogxc = accounts[0]
		const uintYzxbbJe = BigInt("1604")
		const uintoRsmHLT = BigInt("1455")
		const addressczdWg0r = accounts[0]
		const addressFijkmiX = accounts[2]
		const uintpSmd34s = BigInt("1938")
		const addressAQEmN0 = accounts[4]
		const uint256iWx7Xfq = await Token50X100v4upm6.balanceOf.call(addressal8I8Jp, {from: accounts[0]});
		const boolzUcF9TJ = await Token50X100v4upm6.setMaxLockPeriod.call(uintUyD69zz, {from: accounts[3]});
		const booluCn8WAO = await Token50X100v4upm6.decreaseApproval.call(addressmdAkP3Z, uintAps068, {from: accounts[1]});
		const boolkpWieqJ = await Token50X100v4upm6.increaseApproval.call(addressLNV9gpC, uintsaX5ls5, {from: accounts[0]});
//		const boolcx3ptCt = await Token50X100v4upm6.transfer.call(addresswUYogxc, uintFSY4Yb, {from: accounts[5]});
//		const boolNrscnpW = await Token50X100v4upm6._transfer.call(addressFijkmiX, addressczdWg0r, uintoRsmHLT, uintYzxbbJe, {from: accounts[5]});
//		await Token50X100v4upm6.onlyOwner.call({from: accounts[4]});
//		const boolzSvidr = await Token50X100v4upm6.transfer.call(addressAQEmN0, uintpSmd34s, {from: accounts[4]});

		assert.equal(boolkpWieqJ, true)
		assert.equal(booluCn8WAO, true)
		assert.equal(boolzUcF9TJ, false)
		assert.equal(uint256iWx7Xfq, BigInt("0"))
		await expect(Token50X100v4upm6.transfer.call(addresswUYogxc, uintFSY4Yb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100v4upm6 = await Token50X100.new({from: accounts[0]});
		const addresszJZsYQx = accounts[1]
		const uintyZBH8H = BigInt("1613")
		const addresscvhCH9 = accounts[3]
		const uinthSOToHr = BigInt("733")
		const addressmjF5uFE = accounts[4]
		const addressDDGGAWr = accounts[4]
		const addressgh8CRRi = accounts[3]
		const uintLmCmPM = BigInt("1569")
		const addressO8QMQlW = accounts[0]
		const uintunWvCkg = BigInt("1613")
		const uintz82Sk1 = BigInt("1455")
		const addressK5VOxFz = accounts[0]
		const addressMavQviv = accounts[2]
		const uintmz2KDCq = BigInt("672")
		const addressBxNgzWI = accounts[4]
		const uint256iWx7Xfq = await Token50X100v4upm6.balanceOf.call(addresszJZsYQx, {from: accounts[0]});
		const boolefMZHVE = await Token50X100v4upm6.approve.call(addresscvhCH9, uintyZBH8H, {from: accounts[1]});
		const booluCn8WAO = await Token50X100v4upm6.decreaseApproval.call(addressmjF5uFE, uinthSOToHr, {from: accounts[1]});
//		await Token50X100v4upm6.onlyOwner.call({from: accounts[1]});
//		await Token50X100v4upm6.setLinkingAddresses.call(addressgh8CRRi, addressDDGGAWr, {from: accounts[1]});
//		const boolcx3ptCt = await Token50X100v4upm6.transfer.call(addressO8QMQlW, uintLmCmPM, {from: accounts[5]});
//		const boolNrscnpW = await Token50X100v4upm6._transfer.call(addressMavQviv, addressK5VOxFz, uintz82Sk1, uintunWvCkg, {from: accounts[5]});
//		const boolzSvidr = await Token50X100v4upm6.transfer.call(addressBxNgzWI, uintmz2KDCq, {from: accounts[4]});

		assert.equal(boolefMZHVE, true)
		assert.equal(booluCn8WAO, true)
		assert.equal(uint256iWx7Xfq, BigInt("0"))
		await expect(Token50X100v4upm6.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100q3Y3DSN = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressefhHEVE = accounts[1]
		const boolHhFuO0q = true
		const addressSulXUqR = accounts[5]
		await Token50X100q3Y3DSN.onlyOwner.call({from: accounts[4]});
		await Token50X100q3Y3DSN.lock.call({from: accounts[3]});
		const addressRoTxlC = await Token50X100q3Y3DSN.transferOwnership.call(addressefhHEVE, {from: accounts[4]});
		await Token50X100q3Y3DSN.setWhiteListReceivers.call(addressSulXUqR, boolHhFuO0q, {from: accounts[3]});
	});

	it('test for Token50X100', async () => {
		const Token50X100Jl8WatM = await Token50X100.new({from: accounts[5]});
		const uintQ2POJPz = BigInt("2004")
		const uintr68Q9M9 = BigInt("82")
		const address8fw2Of = accounts[2]
		const addressOF6kTrO = accounts[1]
		const uintucIgeN3 = BigInt("176")
		const uintnfGiQ9L = BigInt("826")
		const addressuqPt4jE = accounts[1]
		const uint2560174Nc = await Token50X100Jl8WatM.totalSupply.call({from: accounts[1]});
//		const boolzGg6752 = await Token50X100Jl8WatM._transfer.call(addressOF6kTrO, address8fw2Of, uintr68Q9M9, uintQ2POJPz, {from: accounts[3]});
//		const boolUUAWts6 = await Token50X100Jl8WatM.safeLock.call(uintnfGiQ9L, uintucIgeN3, {from: accounts[3]});
//		const uint256EEZjPO8 = await Token50X100Jl8WatM.balanceOf.call(addressuqPt4jE, {from: accounts[1]});

		assert.equal(uint2560174Nc, BigInt("4714285714285710"))
		await expect(Token50X100Jl8WatM._transfer.call(addressOF6kTrO, address8fw2Of, uintr68Q9M9, uintQ2POJPz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YRKDN2h = await Token50X100.new({from: accounts[4]});
		const boollHWAs2o = true
		const addressL8siRIg = "0x0000000000000000000000000000000000000001"
		const addressKN3T8E = accounts[0]
		const uintMIjZeEG = BigInt("170")
		const stringZXteEhY = "m2hHAwwAd3tC1NLoLm6Az"
		const stringXUMx20s = "iD7zWhaSLMsSu3cxiEeBE69IhgIv3iVERYJXUF8XqAm2qS6Myr1IYgQGTbqUVQrXLkkAhoriX5DsKfS7YodCGIE"
//		await Token50X100YRKDN2h.setWhiteListReceivers.call(addressL8siRIg, boollHWAs2o, {from: accounts[4]});
//		await Token50X100YRKDN2h.setTokenContract.call(addressKN3T8E, {from: accounts[4]});
//		const boolZsN59bX = await Token50X100YRKDN2h.setSymbolNameDecimals.call(stringXUMx20s, stringZXteEhY, uintMIjZeEG, {from: accounts[0]});

		await expect(Token50X100YRKDN2h.setWhiteListReceivers.call(addressL8siRIg, boollHWAs2o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Jl8WatM = await Token50X100.new({from: accounts[5]});
		const uintn7Ydr6f = BigInt("198")
		const addressZrgkyn = accounts[0]
		const addressMoNDRPO = accounts[2]
		const addressgoGydxu = accounts[1]
		const addressnOehaut = accounts[0]
		const uintFUYxh5r = BigInt("1495")
		const uintYgNS5tU = BigInt("82")
		const addressmQ7xXuF = accounts[2]
		const addressfuB7mgL = accounts[1]
		const boolMrY70kS = await Token50X100Jl8WatM.decreaseApproval.call(addressZrgkyn, uintn7Ydr6f, {from: accounts[2]});
		const uint256GXUBytq = await Token50X100Jl8WatM.balanceOf.call(addressMoNDRPO, {from: accounts[5]});
//		await Token50X100Jl8WatM.release.call({from: accounts[5]});
//		await Token50X100Jl8WatM.lock.call({from: accounts[0]});
//		await Token50X100Jl8WatM.setLinkingAddresses.call(addressnOehaut, addressgoGydxu, {from: accounts[5]});
//		const boolzGg6752 = await Token50X100Jl8WatM._transfer.call(addressfuB7mgL, addressmQ7xXuF, uintYgNS5tU, uintFUYxh5r, {from: accounts[3]});

		assert.equal(boolMrY70kS, true)
		assert.equal(uint256GXUBytq, BigInt("0"))
		await expect(Token50X100Jl8WatM.release.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Z9b80c = await Token50X100.new({from: accounts[5]});
		const boolUUvyFgD = false
		const addressfanxfRS = accounts[4]
		const addresspQNwpIc = accounts[1]
//		await Token50X100Z9b80c.setWhiteList.call(addressfanxfRS, boolUUvyFgD, {from: accounts[5]});
//		const uint256aM21ny6 = await Token50X100Z9b80c.balanceOf.call(addresspQNwpIc, {from: accounts[3]});

		await expect(Token50X100Z9b80c.setWhiteList.call(addressfanxfRS, boolUUvyFgD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X1001nNmwo = await Token50X100.new({from: accounts[2]});
		const uintafTQRaX = BigInt("309")
		const addresss3hi9E8 = accounts[0]
		const uintDBIs1Go = BigInt("1840")
		const addressWOAydxt = "0x0000000000000000000000000000000000000001"
		const uintB4W3d8J = BigInt("52")
		const stringQZXS63j = "P8otd5sGZhXuoS"
		const stringNhgKybZ = "6XVSr5sxm3"
		const uintUnhV4Yw = BigInt("1294")
		const uintT4ZaTe5 = BigInt("1742")
		const addressNhuwh73 = accounts[0]
		const boolsF6FRmE = await Token50X1001nNmwo.approve.call(addresss3hi9E8, uintafTQRaX, {from: accounts[4]});
		const booliZWVQpl = await Token50X1001nNmwo.decreaseApproval.call(addressWOAydxt, uintDBIs1Go, {from: accounts[4]});
//		await Token50X1001nNmwo.setSymbolNameDecimals.call(stringNhgKybZ, stringQZXS63j, uintB4W3d8J, {from: accounts[2]});
//		await Token50X1001nNmwo.release.call({from: accounts[0]});
//		const boolAD231Eh = await Token50X1001nNmwo.setVesting.call(addressNhuwh73, uintT4ZaTe5, uintUnhV4Yw, {from: accounts[3]});

		assert.equal(booliZWVQpl, true)
		assert.equal(boolsF6FRmE, true)
		await expect(Token50X1001nNmwo.setSymbolNameDecimals.call(stringNhgKybZ, stringQZXS63j, uintB4W3d8J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Jl8WatM = await Token50X100.new({from: accounts[5]});
		const uinthHoFC36 = BigInt("192")
		const addressdGh9CsC = accounts[0]
		const addresspjxRYI0 = accounts[0]
		const addressMQySbxF = accounts[0]
		const uintBnmhXJ = BigInt("397")
		const addressky0y0TG = accounts[3]
//		await Token50X100Jl8WatM.lock.call({from: accounts[5]});
//		const boolMrY70kS = await Token50X100Jl8WatM.decreaseApproval.call(addressdGh9CsC, uinthHoFC36, {from: accounts[2]});
//		const uint256cGPOLu5 = await Token50X100Jl8WatM.allowance.call(addressMQySbxF, addresspjxRYI0, {from: accounts[5]});
//		const booltaZieR6 = await Token50X100Jl8WatM.transfer.call(addressky0y0TG, uintBnmhXJ, {from: accounts[3]});

		await expect(Token50X100Jl8WatM.lock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Jl8WatM = await Token50X100.new({from: accounts[5]});
		const uintTONvBzu = BigInt("393")
		const uintHVL9y3b = BigInt("486")
		const addressEnQmnCN = accounts[0]
		const addresswGv9nF5 = accounts[0]
		const uintLsj2dLj = BigInt("1208")
		const addressdr2lpM = accounts[0]
//		const boolIa4sTmx = await Token50X100Jl8WatM._transfer.call(addresswGv9nF5, addressEnQmnCN, uintHVL9y3b, uintTONvBzu, {from: accounts[5]});
//		const boolBsHCEAL = await Token50X100Jl8WatM.transfer.call(addressdr2lpM, uintLsj2dLj, {from: accounts[4]});

		await expect(Token50X100Jl8WatM._transfer.call(addresswGv9nF5, addressEnQmnCN, uintHVL9y3b, uintTONvBzu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100qjXTEOC = await Token50X100.new({from: accounts[2]});
		const addressqM4Ne67 = accounts[3]
		const boolhxC2sXR = true
		const addressOwPFIft = accounts[2]
		const uintGMZS3BQ = BigInt("1108")
		const uintqKg6jk6 = BigInt("1944")
		const addressvbdGP5K = accounts[1]
		const addressH0GRJv = await Token50X100qjXTEOC.transferOwnership.call(addressqM4Ne67, {from: accounts[2]});
//		await Token50X100qjXTEOC.setWhiteListReceivers.call(addressOwPFIft, boolhxC2sXR, {from: accounts[0]});
//		const boolXqxh5l2 = await Token50X100qjXTEOC.setVesting.call(addressvbdGP5K, uintqKg6jk6, uintGMZS3BQ, {from: accounts[0]});

		await expect(Token50X100qjXTEOC.setWhiteListReceivers.call(addressOwPFIft, boolhxC2sXR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Jl8WatM = await Token50X100.new({from: accounts[5]});
		const uintbUx1uRT = BigInt("1208")
		const addressJ3aspHM = "0x0000000000000000000000000000000000000000"
//		const boolBsHCEAL = await Token50X100Jl8WatM.transfer.call(addressJ3aspHM, uintbUx1uRT, {from: accounts[4]});

		await expect(Token50X100Jl8WatM.transfer.call(addressJ3aspHM, uintbUx1uRT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Jl8WatM = await Token50X100.new({from: accounts[5]});
		const uintiptFout = BigInt("485")
		const uintz7s6idR = BigInt("1730")
		const addressSQAVPJE = accounts[0]
		const uintY7urUR = BigInt("139")
		const uintOV84Q8E = BigInt("486")
		const addressFgUHy6D = accounts[0]
		const addressIrPZ9sR = accounts[0]
		const boolUZLML9v = await Token50X100Jl8WatM.setVesting.call(addressSQAVPJE, uintz7s6idR, uintiptFout, {from: accounts[5]});
//		const boolIa4sTmx = await Token50X100Jl8WatM._transfer.call(addressIrPZ9sR, addressFgUHy6D, uintOV84Q8E, uintY7urUR, {from: accounts[5]});

		assert.equal(boolUZLML9v, true)
		await expect(Token50X100Jl8WatM._transfer.call(addressIrPZ9sR, addressFgUHy6D, uintOV84Q8E, uintY7urUR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})