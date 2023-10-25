const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringydi2dQt = "K2VpJsoT5Q2pAzYO5Ic9GRA44CnPu9qfTdIYpLPUJlTcC16DylXTH8S4wU4ZbjKiYNCfntQ8g"
		const stringiMOWTAd = "eC0rI1ExBd4nQ6rCflwrRmoEha6jJz"
		const uintk3a4FyJ = BigInt("137")
		const NALWfIcE3Y = await NAL.new(stringydi2dQt, stringiMOWTAd, uintk3a4FyJ, {from: accounts[2]});
		const uintEMh4HDs = BigInt("365")
		const addressdq2V4vt = accounts[4]
		const addresslM1xeme = accounts[3]
		const uintwWDhlZQ = BigInt("270")
		const addressAMJCZBp = accounts[0]
		const boolEYgko3M = await NALWfIcE3Y.transferFrom.call(addresslM1xeme, addressdq2V4vt, uintEMh4HDs, {from: accounts[3]});
		const boolByDmerj = await NALWfIcE3Y.increaseAllowance.call(addressAMJCZBp, uintwWDhlZQ, {from: accounts[4]});
		await NALWfIcE3Y.pause.call({from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressXu9JOKb = accounts[3]
		const addressvRzoW7T = accounts[1]
		const uintzwqkLMD = BigInt("845")
		const addresshrE3qDQ = accounts[4]
		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressXu9JOKb, {from: accounts[4]});
		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addressvRzoW7T, {from: accounts[1]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addresshrE3qDQ, uintzwqkLMD, {from: accounts[1]});

		assert.equal(boolX0FcKbE, true)
		assert.equal(uint256sPwW8eZ, BigInt("0"))
		await expect(NALyIBSUQ.decreaseAllowance.call(addresshrE3qDQ, uintzwqkLMD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALSXVeoZ = await NAL.new({from: accounts[1]});
		const uintPm7X1MA = BigInt("2031")
		const addressxYOWLLg = accounts[3]
		const uintxnAGS6Y = BigInt("1067")
		const addressEUU8bji = accounts[5]
		const uintIycOAV = BigInt("1101")
		const addressEaqdPyN = accounts[2]
		const boolvdeSvPA = await NALSXVeoZ.increaseAllowance.call(addressxYOWLLg, uintPm7X1MA, {from: accounts[1]});
//		const boolW4z6PIi = await NALSXVeoZ.unlock.call(addressEUU8bji, uintxnAGS6Y, {from: accounts[0]});
//		const boolsnxx2h = await NALSXVeoZ.transfer.call(addressEaqdPyN, uintIycOAV, {from: accounts[3]});

		assert.equal(boolvdeSvPA, true)
		await expect(NALSXVeoZ.unlock.call(addressEUU8bji, uintxnAGS6Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALprNYsF = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQC0eOan = BigInt("1121")
		const addressm0u5QeA = accounts[1]
		const addresseoimGxT = accounts[3]
		const boolTLHlLtJ = await NALprNYsF.decreaseAllowance.call(addressm0u5QeA, uintQC0eOan, {from: accounts[4]});
		const boolOlZadLm = await NALprNYsF.isAdmin.call(addresseoimGxT, {from: accounts[3]});
		const boolbJ3CjCn = await NALprNYsF.paused.call({from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALV1G2O5 = await NAL.new({from: accounts[0]});
		const uintblYQNgd = BigInt("1190")
		const addressrmcQW2t = accounts[3]
		const addressF9ZBsGC = accounts[2]
		const uintUUwqeu6 = BigInt("581")
		const uintSbTQzJo = BigInt("1698")
		const addressHZ4EnBU = accounts[1]
		const addressUlIwcKU = accounts[5]
//		const boolixpMx7e = await NALV1G2O5.transfer.call(addressrmcQW2t, uintblYQNgd, {from: accounts[3]});
//		const boolMT1Yr02 = await NALV1G2O5.isOwner.call(addressF9ZBsGC, {from: accounts[4]});
//		const uint256MtP9RBQ = await NALV1G2O5.burn.call(uintUUwqeu6, {from: accounts[2]});
//		const boolznyLtzh = await NALV1G2O5.paused.call({from: accounts[0]});
//		const boolHcgZgxo = await NALV1G2O5.unlock.call(addressHZ4EnBU, uintSbTQzJo, {from: accounts[0]});
//		const addressLwESioT = await NALV1G2O5.transferOwnership.call(addressUlIwcKU, {from: accounts[1]});

		await expect(NALV1G2O5.transfer.call(addressrmcQW2t, uintblYQNgd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressjZdatXa = accounts[3]
		const addressXD5t3u = accounts[4]
		const addressieRVh8 = accounts[2]
		const uintLFiHx7a = BigInt("1948")
		const addressotebHg4 = accounts[4]
		const addressewCPo0Z = accounts[1]
		const uintXJZxovr = BigInt("799")
		const addressV83Mp1X = accounts[4]
		const addressAtFKXM = accounts[4]
		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressjZdatXa, {from: accounts[4]});
		const uint256x9DFXsX = await NALyIBSUQ.balanceOf.call(addressXD5t3u, {from: accounts[1]});
		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addressieRVh8, {from: accounts[1]});
		const boolAEvkTWS = await NALyIBSUQ.transfer.call(addressotebHg4, uintLFiHx7a, {from: accounts[3]});
//		const addresszUfDRwI = await NALyIBSUQ.transferOwnership.call(addressewCPo0Z, {from: accounts[2]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addressV83Mp1X, uintXJZxovr, {from: accounts[1]});
//		const uint256zmDluqY = await NALyIBSUQ.balanceOf.call(addressAtFKXM, {from: accounts[0]});

		assert.equal(boolAEvkTWS, true)
		assert.equal(boolX0FcKbE, true)
		assert.equal(uint256sPwW8eZ, BigInt("0"))
		assert.equal(uint256x9DFXsX, BigInt("0"))
		await expect(NALyIBSUQ.transferOwnership.call(addressewCPo0Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addresszvm5P4O = accounts[3]
		const addressjB2ClJ = accounts[2]
		const addressgudRRcs = accounts[2]
		const uintXbqRnMQ = BigInt("799")
		const addressRS6hiR = accounts[4]
		const addressMP7t13A = accounts[4]
		const uintvLed3ZH = BigInt("485")
		const addressMJ6fP7Y = accounts[1]
		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addresszvm5P4O, {from: accounts[4]});
		const boolxjKoOe = await NALyIBSUQ.paused.call({from: accounts[0]});
		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addressjB2ClJ, {from: accounts[1]});
//		const addresszUfDRwI = await NALyIBSUQ.transferOwnership.call(addressgudRRcs, {from: accounts[2]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addressRS6hiR, uintXbqRnMQ, {from: accounts[1]});
//		const uint256zmDluqY = await NALyIBSUQ.balanceOf.call(addressMP7t13A, {from: accounts[0]});
//		const boolpzt0dbX = await NALyIBSUQ.transfer.call(addressMJ6fP7Y, uintvLed3ZH, {from: accounts[1]});
//		await NALyIBSUQ.whenPaused.call({from: accounts[3]});

		assert.equal(boolX0FcKbE, true)
		assert.equal(boolxjKoOe, false)
		assert.equal(uint256sPwW8eZ, BigInt("0"))
		await expect(NALyIBSUQ.transferOwnership.call(addressgudRRcs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf78Cosa = await NAL.new({from: accounts[3]});
		const uintvrYor3a = BigInt("234")
		const addressa4ogPX = accounts[1]
		const uintNpZfGUw = BigInt("1241")
		const addressiMqztu7 = accounts[4]
		const booljgtgV64 = await NALf78Cosa.approve.call(addressa4ogPX, uintvrYor3a, {from: accounts[2]});
		const boolHL5GvMG = await NALf78Cosa.increaseAllowance.call(addressiMqztu7, uintNpZfGUw, {from: accounts[0]});

		assert.equal(boolHL5GvMG, true)
		assert.equal(booljgtgV64, true)
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressY9soOzx = accounts[3]
		const uintQrQQYi5 = BigInt("492")
		const addressqKbYYMA = accounts[5]
		const uintguO8Z1p = BigInt("1947")
		const uintAoFIMmB = BigInt("117")
		const addresss1ZbfsO = accounts[1]
		const addressx6777s = accounts[1]
		const uintgqjEr96 = BigInt("837")
		const addressDQ75EmR = accounts[4]
		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressY9soOzx, {from: accounts[4]});
		const boolTnMqHAM = await NALyIBSUQ.increaseAllowance.call(addressqKbYYMA, uintQrQQYi5, {from: accounts[0]});
//		const boolBWaCerq = await NALyIBSUQ.lock.call(addresss1ZbfsO, uintAoFIMmB, uintguO8Z1p, {from: accounts[3]});
//		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addressx6777s, {from: accounts[1]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addressDQ75EmR, uintgqjEr96, {from: accounts[1]});

		assert.equal(boolTnMqHAM, true)
		assert.equal(boolX0FcKbE, true)
		await expect(NALyIBSUQ.lock.call(addresss1ZbfsO, uintAoFIMmB, uintguO8Z1p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressFsbDloP = accounts[3]
		const address7ry7p1 = accounts[2]
		const uintiNVZkav = BigInt("845")
		const addressuBL0jO = accounts[4]
		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressFsbDloP, {from: accounts[4]});
		const uint8Ys1vLPY = await NALyIBSUQ.decimals.call({from: accounts[1]});
		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(address7ry7p1, {from: accounts[1]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addressuBL0jO, uintiNVZkav, {from: accounts[1]});
//		const string6UroGX = await NALyIBSUQ.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolX0FcKbE, true)
		assert.equal(uint256sPwW8eZ, BigInt("0"))
		assert.equal(uint8Ys1vLPY, BigInt("18"))
		await expect(NALyIBSUQ.decreaseAllowance.call(addressuBL0jO, uintiNVZkav, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressh28pB7d = accounts[4]
		const addressFj8m7u = accounts[1]
		const addresszIa34ja = accounts[1]
		const uintB9tzXO = BigInt("799")
		const addressV8L1qjr = accounts[4]
//		await NALyIBSUQ.onlyAdmin.call({from: accounts[4]});
//		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressh28pB7d, {from: accounts[4]});
//		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addressFj8m7u, {from: accounts[1]});
//		const addresszUfDRwI = await NALyIBSUQ.transferOwnership.call(addresszIa34ja, {from: accounts[2]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addressV8L1qjr, uintB9tzXO, {from: accounts[1]});

		await expect(NALyIBSUQ.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressVXPAQvv = accounts[3]
		const addressw30EnUZ = accounts[3]
		const addresstCv6XeA = accounts[2]
		const addressDmO9TUb = accounts[2]
		const uintttItwSw = BigInt("845")
		const address0MHBcy = accounts[4]
		const addressMpUxfc9 = accounts[1]
		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressVXPAQvv, {from: accounts[4]});
		const uint256aVMnZI = await NALyIBSUQ.allowance.call(addresstCv6XeA, addressw30EnUZ, {from: accounts[4]});
		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addressDmO9TUb, {from: accounts[1]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(address0MHBcy, uintttItwSw, {from: accounts[1]});
//		const uint256BmU4yvw = await NALyIBSUQ.balanceOf.call(addressMpUxfc9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolX0FcKbE, true)
		assert.equal(uint256aVMnZI, BigInt("0"))
		assert.equal(uint256sPwW8eZ, BigInt("0"))
		await expect(NALyIBSUQ.decreaseAllowance.call(address0MHBcy, uintttItwSw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressNa8l2Z2 = accounts[3]
		const addresszX9HLnX = accounts[4]
		const addresszdDLEIX = accounts[2]
		const addressDjV2MCD = accounts[1]
		const uintsM0gvFb = BigInt("799")
		const addressnzOyRbT = accounts[4]
		const addressYsw9P0 = accounts[4]
		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressNa8l2Z2, {from: accounts[4]});
		const stringVnCv8Wu = await NALyIBSUQ.name.call({from: accounts[3]});
		const uint256x9DFXsX = await NALyIBSUQ.balanceOf.call(addresszX9HLnX, {from: accounts[1]});
		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addresszdDLEIX, {from: accounts[1]});
//		const addresszUfDRwI = await NALyIBSUQ.transferOwnership.call(addressDjV2MCD, {from: accounts[2]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addressnzOyRbT, uintsM0gvFb, {from: accounts[1]});
//		const uint256zmDluqY = await NALyIBSUQ.balanceOf.call(addressYsw9P0, {from: accounts[0]});

		assert.equal(boolX0FcKbE, true)
		assert.equal(stringVnCv8Wu, "Personal Token")
		assert.equal(uint256sPwW8eZ, BigInt("0"))
		assert.equal(uint256x9DFXsX, BigInt("0"))
		await expect(NALyIBSUQ.transferOwnership.call(addressDjV2MCD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressd1n1iz0 = accounts[4]
		const uintCOvPGzS = BigInt("2035")
		const addressezw96J5 = accounts[3]
		const addressiDcZq9h = accounts[2]
		const addressmo6DTZk = accounts[3]
		const uintBzJy6A = BigInt("64")
		const addressYrhzuaY = accounts[0]
		const addressQIK6Tkj = accounts[2]
		const addressEzI9nda = accounts[4]
		const uint256hR0h1nu = await NALyIBSUQ.totalSupply.call({from: accounts[3]});
		const boolIso3Inp = await NALyIBSUQ.isAdmin.call(addressd1n1iz0, {from: accounts[2]});
//		const boolvCWVXz7 = await NALyIBSUQ.transferFrom.call(addressiDcZq9h, addressezw96J5, uintCOvPGzS, {from: accounts[1]});
//		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressmo6DTZk, {from: accounts[4]});
//		const boolm50ZfOR = await NALyIBSUQ.transfer.call(addressYrhzuaY, uintBzJy6A, {from: accounts[1]});
//		const addresszUfDRwI = await NALyIBSUQ.transferOwnership.call(addressQIK6Tkj, {from: accounts[2]});
//		const uint256zmDluqY = await NALyIBSUQ.balanceOf.call(addressEzI9nda, {from: accounts[0]});

		assert.equal(boolIso3Inp, false)
		assert.equal(uint256hR0h1nu, BigInt("2000000000000000000000000000"))
		await expect(NALyIBSUQ.transferFrom.call(addressiDcZq9h, addressezw96J5, uintCOvPGzS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressRzfaGP = accounts[3]
		const uinthV6m4DT = BigInt("595")
		const addressS3PhZ5H = accounts[5]
		const uinthAcd5jI = BigInt("252")
		const addressnwHpW2g = "0x0000000000000000000000000000000000000001"
		const addressgw4kHUD = accounts[3]
		const uintA90teQ8 = BigInt("492")
		const addressoeju8nn = accounts[5]
		const addressvfDEWC = accounts[1]
		const uintsCL216M = BigInt("837")
		const addressm67unQg = accounts[4]
		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressRzfaGP, {from: accounts[4]});
//		const addressStPCCt = await NALyIBSUQ.burnFrom.call(addressS3PhZ5H, uinthV6m4DT, {from: accounts[0]});
//		const boolHRoEjkG = await NALyIBSUQ.approve.call(addressnwHpW2g, uinthAcd5jI, {from: accounts[5]});
//		const addressXXcrTOc = await NALyIBSUQ.notFrozen.call(addressgw4kHUD, {from: accounts[1]});
//		const boolTnMqHAM = await NALyIBSUQ.increaseAllowance.call(addressoeju8nn, uintA90teQ8, {from: accounts[0]});
//		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addressvfDEWC, {from: accounts[1]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addressm67unQg, uintsCL216M, {from: accounts[1]});

		assert.equal(boolX0FcKbE, true)
		await expect(NALyIBSUQ.burnFrom.call(addressS3PhZ5H, uinthV6m4DT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressgB3FECm = accounts[4]
		const uintxPO2YP0 = BigInt("1718")
		const uintOX0OMgR = BigInt("2035")
		const addresslML2I1a = accounts[3]
		const addresstnH5iSb = accounts[2]
		const addressefre7ja = accounts[3]
		const uintsiKBWia = BigInt("64")
		const addressmB4WuaC = accounts[0]
		const addresswcVW2Dn = accounts[2]
		const addressxfG7Ti9 = accounts[4]
		const uint256hR0h1nu = await NALyIBSUQ.totalSupply.call({from: accounts[3]});
		const boolIso3Inp = await NALyIBSUQ.isAdmin.call(addressgB3FECm, {from: accounts[2]});
//		const uint256D80kyW = await NALyIBSUQ.burn.call(uintxPO2YP0, {from: accounts[5]});
//		const boolvCWVXz7 = await NALyIBSUQ.transferFrom.call(addresstnH5iSb, addresslML2I1a, uintOX0OMgR, {from: accounts[1]});
//		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressefre7ja, {from: accounts[4]});
//		const boolm50ZfOR = await NALyIBSUQ.transfer.call(addressmB4WuaC, uintsiKBWia, {from: accounts[1]});
//		const addresszUfDRwI = await NALyIBSUQ.transferOwnership.call(addresswcVW2Dn, {from: accounts[2]});
//		const uint256zmDluqY = await NALyIBSUQ.balanceOf.call(addressxfG7Ti9, {from: accounts[0]});

		assert.equal(boolIso3Inp, false)
		assert.equal(uint256hR0h1nu, BigInt("2000000000000000000000000000"))
		await expect(NALyIBSUQ.burn.call(uintxPO2YP0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressapwYiaV = accounts[5]
		const uintBlgWbbi = BigInt("175")
		const addresswa2HSEX = accounts[3]
		const addressUFNGiqo = accounts[1]
		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressapwYiaV, {from: accounts[4]});
		const boolaaYZU8x = await NALyIBSUQ.increaseAllowance.call(addresswa2HSEX, uintBlgWbbi, {from: accounts[2]});
		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addressUFNGiqo, {from: accounts[1]});
//		await NALyIBSUQ.renounceAdmin.call({from: accounts[3]});

		assert.equal(boolX0FcKbE, false)
		assert.equal(boolaaYZU8x, true)
		assert.equal(uint256sPwW8eZ, BigInt("0"))
		await expect(NALyIBSUQ.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const uintMBVZkmp = BigInt("181")
		const addressnuIUyO = accounts[0]
		const addressPkDeqS = "0x0000000000000000000000000000000000000000"
		const uintXCtAUQ2 = BigInt("1400")
		const addressuRybjE1 = accounts[1]
		const addressd5nVpg = accounts[3]
		const addressz8ISGQZ = accounts[3]
		const stringmUrec48 = await NALyIBSUQ.symbol.call({from: accounts[4]});
		const boolIpTiwoq = await NALyIBSUQ.transfer.call(addressnuIUyO, uintMBVZkmp, {from: accounts[3]});
		const boolVC0aTYe = await NALyIBSUQ.isOwner.call(addressPkDeqS, {from: accounts[0]});
		const boolL3hYJi7 = await NALyIBSUQ.increaseAllowance.call(addressuRybjE1, uintXCtAUQ2, {from: accounts[4]});
		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addressd5nVpg, {from: accounts[1]});
		const uint256xfTZkKY = await NALyIBSUQ.balanceOf.call(addressz8ISGQZ, {from: accounts[3]});

		assert.equal(boolIpTiwoq, true)
		assert.equal(boolL3hYJi7, true)
		assert.equal(boolVC0aTYe, false)
		assert.equal(stringmUrec48, "NAL")
		assert.equal(uint256sPwW8eZ, BigInt("2000000000000000000000000000"))
		assert.equal(uint256xfTZkKY, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addresshvpAjIf = accounts[3]
		const addresspoL8AYi = accounts[2]
		const addresscn6QTfz = accounts[3]
		const uintzNt7cGg = BigInt("839")
		const addressAS8sVaN = accounts[4]
		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addresshvpAjIf, {from: accounts[4]});
		const boolzvFX4f = await NALyIBSUQ.isOwner.call(addresspoL8AYi, {from: accounts[4]});
		const addresscMSMOvg = await NALyIBSUQ.transferOwnership.call(addresscn6QTfz, {from: accounts[3]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addressAS8sVaN, uintzNt7cGg, {from: accounts[1]});

		assert.equal(boolX0FcKbE, true)
		assert.equal(boolzvFX4f, false)
		await expect(NALyIBSUQ.decreaseAllowance.call(addressAS8sVaN, uintzNt7cGg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressDmzShM7 = accounts[2]
		const addressR9kKBfF = accounts[0]
		const addresslWm7RoS = accounts[2]
		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addressDmzShM7, {from: accounts[1]});
		const booljfJtbdr = await NALyIBSUQ.isAdmin.call(addressR9kKBfF, {from: "0x0000000000000000000000000000000000000001"});
		const boolo8gK5fa = await NALyIBSUQ.freezeAccount.call(addresslWm7RoS, {from: accounts[3]});

		assert.equal(booljfJtbdr, false)
		assert.equal(boolo8gK5fa, true)
		assert.equal(uint256sPwW8eZ, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const addressR3zm4I = accounts[2]
		const uintZZNRKWV = BigInt("510")
		const addressfiYKamH = accounts[2]
		const uintZZmSF8F = BigInt("336")
		const addressab73MjW = accounts[0]
		const addressCYK2E6A = accounts[3]
		const addressWFi0uEF = accounts[2]
		const addressLyPH0Kv = accounts[4]
		const addressIc4G5EH = accounts[5]
		const uinte85Kgzd = BigInt("492")
		const addressTTvEAu = accounts[5]
		const uintgqFsvm = BigInt("1947")
		const uintOgNoGV4 = BigInt("2013")
		const address7eMMVh = accounts[1]
		const uintJUSgEZm = BigInt("1004")
		const uintHHwqFAj = BigInt("1605")
		const uintkVu7pL = BigInt("837")
		const addressqGSsrV2 = accounts[4]
		const addressQBsiUDV = accounts[5]
		const uint256IAnoHbg = await NALyIBSUQ.balanceOf.call(addressR3zm4I, {from: accounts[4]});
//		const boolzSHEFGE = await NALyIBSUQ.unlock.call(addressfiYKamH, uintZZNRKWV, {from: accounts[3]});
//		const boolvlEf56d = await NALyIBSUQ.transferFrom.call(addressCYK2E6A, addressab73MjW, uintZZmSF8F, {from: accounts[2]});
//		const addressyXL1CG = await NALyIBSUQ.addAdmin.call(addressWFi0uEF, {from: accounts[4]});
//		const boolX0FcKbE = await NALyIBSUQ.isOwner.call(addressLyPH0Kv, {from: accounts[4]});
//		const uint256SqZvaRW = await NALyIBSUQ.balanceOf.call(addressIc4G5EH, {from: accounts[1]});
//		const boolTnMqHAM = await NALyIBSUQ.increaseAllowance.call(addressTTvEAu, uinte85Kgzd, {from: accounts[0]});
//		const boolBWaCerq = await NALyIBSUQ.lock.call(address7eMMVh, uintOgNoGV4, uintgqFsvm, {from: accounts[3]});
//		const uint256MQd3EL4 = await NALyIBSUQ.burn.call(uintJUSgEZm, {from: accounts[4]});
//		const uint256pyKLuam = await NALyIBSUQ.burn.call(uintHHwqFAj, {from: accounts[4]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addressqGSsrV2, uintkVu7pL, {from: accounts[1]});
//		const addressDjVmr3 = await NALyIBSUQ.addAdmin.call(addressQBsiUDV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256IAnoHbg, BigInt("0"))
		await expect(NALyIBSUQ.unlock.call(addressfiYKamH, uintZZNRKWV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const uintXNTj0Nd = BigInt("181")
		const addressOTsZ4cQ = accounts[0]
		const addressCaXSK2I = accounts[4]
		const addresshzZehR0 = accounts[3]
		const addressf4y8OCa = accounts[2]
		const boolIpTiwoq = await NALyIBSUQ.transfer.call(addressOTsZ4cQ, uintXNTj0Nd, {from: accounts[3]});
//		const addressSOplmTR = await NALyIBSUQ.removeAdmin.call(addressCaXSK2I, {from: accounts[3]});
//		const uint256sPwW8eZ = await NALyIBSUQ.balanceOf.call(addresshzZehR0, {from: accounts[1]});
//		const boolNEGr0Z8 = await NALyIBSUQ.freezeAccount.call(addressf4y8OCa, {from: accounts[2]});

		assert.equal(boolIpTiwoq, true)
		await expect(NALyIBSUQ.removeAdmin.call(addressCaXSK2I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyIBSUQ = await NAL.new({from: accounts[3]});
		const uintZct3Zp6 = BigInt("1947")
		const uintYKa7pZn = BigInt("122")
		const addressacoHSve = accounts[3]
		const uinttIzNNp = BigInt("837")
		const addressyjwj1c9 = accounts[4]
		const boolBWaCerq = await NALyIBSUQ.lock.call(addressacoHSve, uintYKa7pZn, uintZct3Zp6, {from: accounts[3]});
//		const boolFOLhchx = await NALyIBSUQ.decreaseAllowance.call(addressyjwj1c9, uinttIzNNp, {from: accounts[1]});

		assert.equal(boolBWaCerq, true)
		await expect(NALyIBSUQ.decreaseAllowance.call(addressyjwj1c9, uinttIzNNp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})