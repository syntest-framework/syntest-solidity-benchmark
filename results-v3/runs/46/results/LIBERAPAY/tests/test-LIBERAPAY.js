const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYLodrQM = await LIBERAPAY.new({from: accounts[4]});
		const uintO6obZg = BigInt("267")
		const addressEEplhdu = accounts[0]
		const addressy274djN = accounts[3]
		const addressP9sYiIo = accounts[1]
		const addressbZN1NnU = accounts[1]
		const addressqU1fuJ6 = accounts[0]
		const boolbGQDUeg = await LIBERAPAYLodrQM.distribute.call(addressEEplhdu, uintO6obZg, {from: accounts[2]});
		const uint256ZAmgXw0 = await LIBERAPAYLodrQM.balanceOf.call(addressy274djN, {from: accounts[4]});
		const uint256DctNa0r = await LIBERAPAYLodrQM.balanceOf.call(addressP9sYiIo, {from: accounts[1]});
		await LIBERAPAYLodrQM.onlyNewOwner.call({from: accounts[4]});
		const boolCTAnKRC = await LIBERAPAYLodrQM.freezeAccount.call(addressbZN1NnU, {from: accounts[3]});
		const uint256M0z7uqw = await LIBERAPAYLodrQM.currentBalanceOf.call(addressqU1fuJ6, {from: accounts[2]});

		await expect(LIBERAPAYLodrQM.distribute.call(addressEEplhdu, uintO6obZg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYo1FMoya = await LIBERAPAY.new({from: accounts[1]});
		const addressFMPV78i = accounts[1]
		const uintMIiG3R = BigInt("1332")
		const addressDWzYH5z = accounts[0]
		const uintG54rWmf = BigInt("1712")
		const addressl43h0pC = accounts[1]
		const addresssOI9qCD = accounts[0]
		const addresskw9i6Pn = accounts[3]
		const addresscMd9hJ = await LIBERAPAYo1FMoya.notFrozen.call(addressFMPV78i, {from: accounts[3]});
		const boolBMkrrC = await LIBERAPAYo1FMoya.transfer.call(addressDWzYH5z, uintMIiG3R, {from: accounts[3]});
		const boolGL0LBG = await LIBERAPAYo1FMoya.transferFrom.call(addresssOI9qCD, addressl43h0pC, uintG54rWmf, {from: accounts[0]});
		const uint256TYqPUfR = await LIBERAPAYo1FMoya.balanceOf.call(addresskw9i6Pn, {from: accounts[5]});
		await LIBERAPAYo1FMoya.onlyOwner.call({from: accounts[2]});

		await expect(LIBERAPAYo1FMoya.notFrozen.call(addressFMPV78i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const addressW9H2Uea = accounts[0]
		const uintj40Hq51 = BigInt("422")
		const addressuEzh3V2 = accounts[2]
		const uintId9GpNU = BigInt("176")
		const uint69il5Y = BigInt("1784")
		const addressRGdzhOF = accounts[3]
		const uint256cRBwSv8 = await LIBERAPAYTRkYyd.balanceOf.call(addressW9H2Uea, {from: accounts[4]});
		await LIBERAPAYTRkYyd.showLockState.call(addressuEzh3V2, uintj40Hq51, {from: accounts[5]});
		const boolOb2BkOb = await LIBERAPAYTRkYyd.lock.call(addressRGdzhOF, uint69il5Y, uintId9GpNU, {from: accounts[1]});

		assert.equal(uint256cRBwSv8, BigInt("0"))
		await expect(LIBERAPAYTRkYyd.showLockState.call(addressuEzh3V2, uintj40Hq51, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfG7AkvJ = await LIBERAPAY.new({from: accounts[0]});
		const addressi4jg494 = accounts[4]
		const uintnyMUkQK = BigInt("1866")
		const addressBqQaWF6 = accounts[3]
		const addressdQ9W8g5 = accounts[1]
		const uint256bktTmtL = await LIBERAPAYfG7AkvJ.currentBalanceOf.call(addressi4jg494, {from: accounts[4]});
		await LIBERAPAYfG7AkvJ.onlyOwner.call({from: accounts[2]});
		const boolrc1Q3QD = await LIBERAPAYfG7AkvJ.mint.call(addressBqQaWF6, uintnyMUkQK, {from: accounts[3]});
		const uint256G482zKi = await LIBERAPAYfG7AkvJ.balanceOf.call(addressdQ9W8g5, {from: accounts[5]});

		assert.equal(uint256bktTmtL, BigInt("0"))
		await expect(LIBERAPAYfG7AkvJ.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtbMFBh4 = await LIBERAPAY.new({from: accounts[3]});
		const addressfeyGChb = accounts[3]
		const addressOALrSCZ = accounts[0]
		const addressE63GhYG = accounts[4]
		const addressqXIy1rX = accounts[5]
		const uint256GSUTBf9 = await LIBERAPAYtbMFBh4.allowance.call(addressOALrSCZ, addressfeyGChb, {from: accounts[0]});
		const addressw965FmK = await LIBERAPAYtbMFBh4.notFrozen.call(addressE63GhYG, {from: accounts[0]});
		const addressDjsVSXB = await LIBERAPAYtbMFBh4.transferOwnership.call(addressqXIy1rX, {from: accounts[1]});

		assert.equal(uint256GSUTBf9, BigInt("0"))
		await expect(LIBERAPAYtbMFBh4.notFrozen.call(addressE63GhYG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYnDCMDEM = await LIBERAPAY.new({from: accounts[0]});
		const uintVDUCWPp = BigInt("884")
		const addressFZiAmw3 = accounts[2]
		const addressIr0GqGe = accounts[2]
		const addressPpqpbv = accounts[2]
		const uintcIrsgu = BigInt("259")
		const addressHpoJXL = accounts[4]
		const boolKwBovgz = await LIBERAPAYnDCMDEM.transferFrom.call(addressIr0GqGe, addressFZiAmw3, uintVDUCWPp, {from: accounts[4]});
		const boolDv9uX0u = await LIBERAPAYnDCMDEM.freezeAccount.call(addressPpqpbv, {from: accounts[0]});
		const uint256m339H4A = await LIBERAPAYnDCMDEM.getNowTime.call({from: accounts[4]});
		await LIBERAPAYnDCMDEM.showLockState.call(addressHpoJXL, uintcIrsgu, {from: accounts[3]});
		const uint256EDwRnjk = await LIBERAPAYnDCMDEM.getNowTime.call({from: accounts[5]});

		await expect(LIBERAPAYnDCMDEM.transferFrom.call(addressIr0GqGe, addressFZiAmw3, uintVDUCWPp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfG7AkvJ = await LIBERAPAY.new({from: accounts[0]});
		const addresstoW5apn = accounts[4]
		const uintPY4E9f = BigInt("1866")
		const addressPftfv0J = accounts[4]
		const uintm5C08t = BigInt("1098")
		const uintjr6ejCi = BigInt("609")
		const addressIVIALMK = accounts[4]
		const addresssLpHxFk = accounts[1]
		const uint256tobRMAX = await LIBERAPAYfG7AkvJ.getNowTime.call({from: accounts[0]});
		await LIBERAPAYfG7AkvJ.unpause.call({from: accounts[3]});
		const uint256bktTmtL = await LIBERAPAYfG7AkvJ.currentBalanceOf.call(addresstoW5apn, {from: accounts[4]});
		await LIBERAPAYfG7AkvJ.onlyOwner.call({from: accounts[2]});
		const boolrc1Q3QD = await LIBERAPAYfG7AkvJ.mint.call(addressPftfv0J, uintPY4E9f, {from: accounts[3]});
		const boolhDZ1Qo6 = await LIBERAPAYfG7AkvJ.lock.call(addressIVIALMK, uintjr6ejCi, uintm5C08t, {from: accounts[2]});
		const uint256G482zKi = await LIBERAPAYfG7AkvJ.balanceOf.call(addresssLpHxFk, {from: accounts[5]});

		assert.equal(uint256tobRMAX, BigInt("1630230072"))
		await expect(LIBERAPAYfG7AkvJ.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfG7AkvJ = await LIBERAPAY.new({from: accounts[0]});
		const addressOdvGtFD = accounts[4]
		const uintgqKssRi = BigInt("979")
		const addressYXDlNcb = accounts[2]
		const uinttn0ZMa1 = BigInt("1866")
		const addressd79BQMC = accounts[3]
		const addressySkqOh4 = accounts[1]
		const uint256bktTmtL = await LIBERAPAYfG7AkvJ.currentBalanceOf.call(addressOdvGtFD, {from: accounts[4]});
		const boolldu4b1P = await LIBERAPAYfG7AkvJ.increaseAllowance.call(addressYXDlNcb, uintgqKssRi, {from: accounts[3]});
		await LIBERAPAYfG7AkvJ.onlyOwner.call({from: accounts[2]});
		const boolrc1Q3QD = await LIBERAPAYfG7AkvJ.mint.call(addressd79BQMC, uinttn0ZMa1, {from: accounts[3]});
		const uint256G482zKi = await LIBERAPAYfG7AkvJ.balanceOf.call(addressySkqOh4, {from: accounts[5]});

		assert.equal(boolldu4b1P, true)
		assert.equal(uint256bktTmtL, BigInt("0"))
		await expect(LIBERAPAYfG7AkvJ.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvoP2FF = await LIBERAPAY.new({from: accounts[0]});
		const uintN5dmHCx = BigInt("1074")
		const addressKqf3omq = accounts[0]
		const uintIO0i6T = BigInt("249")
		const addressozt56as = accounts[2]
		const boolmgxMeVK = await LIBERAPAYvoP2FF.increaseAllowance.call(addressKqf3omq, uintN5dmHCx, {from: accounts[4]});
		const boolF69ABeA = await LIBERAPAYvoP2FF.unlock.call(addressozt56as, uintIO0i6T, {from: accounts[0]});

		assert.equal(boolmgxMeVK, true)
		await expect(LIBERAPAYvoP2FF.unlock.call(addressozt56as, uintIO0i6T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfG7AkvJ = await LIBERAPAY.new({from: accounts[0]});
		const addressg3rQ5T9 = accounts[4]
		const uintTZxdOue = BigInt("1419")
		const addresskFwknX9 = accounts[3]
		const uintU0TqrnT = BigInt("800")
		const addressDsBvYRr = accounts[0]
		const uintOjQOmX = BigInt("1866")
		const addresspFLPgIF = accounts[3]
		const addressevXesfP = accounts[1]
		const uint256bktTmtL = await LIBERAPAYfG7AkvJ.currentBalanceOf.call(addressg3rQ5T9, {from: accounts[4]});
		const boolzXpWE6X = await LIBERAPAYfG7AkvJ.increaseAllowance.call(addresskFwknX9, uintTZxdOue, {from: accounts[2]});
		const boolvnlhewv = await LIBERAPAYfG7AkvJ.burnFrom.call(addressDsBvYRr, uintU0TqrnT, {from: accounts[2]});
		await LIBERAPAYfG7AkvJ.onlyOwner.call({from: accounts[2]});
		const boolrc1Q3QD = await LIBERAPAYfG7AkvJ.mint.call(addresspFLPgIF, uintOjQOmX, {from: accounts[3]});
		const uint256G482zKi = await LIBERAPAYfG7AkvJ.balanceOf.call(addressevXesfP, {from: accounts[5]});

		assert.equal(boolzXpWE6X, true)
		assert.equal(uint256bktTmtL, BigInt("0"))
		await expect(LIBERAPAYfG7AkvJ.burnFrom.call(addressDsBvYRr, uintU0TqrnT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const uintsljeiC = BigInt("430")
		const addressicJUEZz = accounts[2]
		const uintQ27aUxT = BigInt("398")
		const addressyIzkIyx = accounts[0]
		const addressZL3Yeo = accounts[4]
		await LIBERAPAYTRkYyd.showLockState.call(addressicJUEZz, uintsljeiC, {from: accounts[5]});
		const boolVGp3GOu = await LIBERAPAYTRkYyd.decreaseAllowance.call(addressyIzkIyx, uintQ27aUxT, {from: accounts[1]});
		const addresszl6B8Zt = await LIBERAPAYTRkYyd.transferOwnership.call(addressZL3Yeo, {from: accounts[4]});

		await expect(LIBERAPAYTRkYyd.showLockState.call(addressicJUEZz, uintsljeiC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const uintrCiSlu = BigInt("1177")
		const addressJSrF1cN = accounts[5]
		const uintoslV9Nz = BigInt("891")
		const addressVxKBt88 = accounts[2]
		const boolgiJ9nBi = await LIBERAPAYTRkYyd.transfer.call(addressJSrF1cN, uintrCiSlu, {from: accounts[2]});
		await LIBERAPAYTRkYyd.showLockState.call(addressVxKBt88, uintoslV9Nz, {from: accounts[5]});

		assert.equal(boolgiJ9nBi, true)
		await expect(LIBERAPAYTRkYyd.showLockState.call(addressVxKBt88, uintoslV9Nz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYiKoLlXc = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbpCJFzk = BigInt("1876")
		const addressXkXSPTE = accounts[1]
		const uintGno36Fd = BigInt("1914")
		const addressP81Tl9J = accounts[3]
		const uintuOVtnTX = BigInt("1034")
		const addressPchSShy = accounts[4]
		const boolSJ3EcjP = await LIBERAPAYiKoLlXc.increaseAllowance.call(addressXkXSPTE, uintbpCJFzk, {from: accounts[2]});
		const boolg5fK9i = await LIBERAPAYiKoLlXc.burnFrom.call(addressP81Tl9J, uintGno36Fd, {from: accounts[5]});
		const boolXjarrkK = await LIBERAPAYiKoLlXc.increaseAllowance.call(addressPchSShy, uintuOVtnTX, {from: accounts[2]});
		await LIBERAPAYiKoLlXc.pause.call({from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const uintNxXanmI = BigInt("1387")
		const addressV8RlnH2 = accounts[3]
		const uintQy8RWYE = BigInt("53")
		const addressfmoj9g0 = accounts[1]
		const addressC7lSa3H = accounts[4]
		const addressF6pj7Yt = accounts[0]
		const uintwhS9OvV = BigInt("1805")
		const uintAXnzbnd = BigInt("1819")
		const addressmcv0IaT = "0x0000000000000000000000000000000000000001"
		const boolfZit7e = await LIBERAPAYTRkYyd.approve.call(addressV8RlnH2, uintNxXanmI, {from: accounts[0]});
		const boolARemkKc = await LIBERAPAYTRkYyd.transferFrom.call(addressC7lSa3H, addressfmoj9g0, uintQy8RWYE, {from: accounts[3]});
		const uint256cRBwSv8 = await LIBERAPAYTRkYyd.balanceOf.call(addressF6pj7Yt, {from: accounts[4]});
		const boolA9fvJN0 = await LIBERAPAYTRkYyd.lock.call(addressmcv0IaT, uintAXnzbnd, uintwhS9OvV, {from: accounts[4]});

		assert.equal(boolfZit7e, true)
		await expect(LIBERAPAYTRkYyd.transferFrom.call(addressC7lSa3H, addressfmoj9g0, uintQy8RWYE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYgYd6rwi = await LIBERAPAY.new({from: accounts[3]});
		const addressAKHxff7 = accounts[0]
		const uintRNieG1z = BigInt("1442")
		const addressZdtItJY = accounts[4]
		const addresslQWSstK = accounts[1]
		const addressrGqiXAT = await LIBERAPAYgYd6rwi.transferOwnership.call(addressAKHxff7, {from: accounts[3]});
		const boolzToGOR = await LIBERAPAYgYd6rwi.unlock.call(addressZdtItJY, uintRNieG1z, {from: accounts[2]});
		const uint256nHqnoov = await LIBERAPAYgYd6rwi.currentBalanceOf.call(addresslQWSstK, {from: accounts[2]});

		await expect(LIBERAPAYgYd6rwi.unlock.call(addressZdtItJY, uintRNieG1z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const uintgqUWZy = BigInt("509")
		const uintynnSL2d = BigInt("1177")
		const addressvzfJeHP = accounts[6]
		const uintcTjwL1o = BigInt("421")
		const boolPSr2ANx = await LIBERAPAYTRkYyd.burn.call(uintgqUWZy, {from: accounts[2]});
		const boolgiJ9nBi = await LIBERAPAYTRkYyd.transfer.call(addressvzfJeHP, uintynnSL2d, {from: accounts[2]});
		const boolbi5ywxI = await LIBERAPAYTRkYyd.burn.call(uintcTjwL1o, {from: accounts[4]});

		assert.equal(boolPSr2ANx, true)
		assert.equal(boolgiJ9nBi, true)
		await expect(LIBERAPAYTRkYyd.burn.call(uintcTjwL1o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const addressuhvRq1i = accounts[1]
		const uintKLPmfxa = BigInt("887")
		const addressmwiPpNZ = accounts[2]
		await LIBERAPAYTRkYyd.f.call({from: accounts[4]});
		const addressfEu2SAZ = await LIBERAPAYTRkYyd.transferOwnership.call(addressuhvRq1i, {from: accounts[2]});
		await LIBERAPAYTRkYyd.showLockState.call(addressmwiPpNZ, uintKLPmfxa, {from: accounts[5]});

		await expect(LIBERAPAYTRkYyd.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const uintRKvFyC9 = BigInt("1177")
		const addressAp2hMXN = accounts[5]
		const uints5STcL = BigInt("1992")
		const addressvPwdM3k = accounts[4]
		const addressUaauvV = accounts[4]
		const boolgiJ9nBi = await LIBERAPAYTRkYyd.transfer.call(addressAp2hMXN, uintRKvFyC9, {from: accounts[2]});
		await LIBERAPAYTRkYyd.showLockState.call(addressvPwdM3k, uints5STcL, {from: accounts[1]});
		const boolGTGA5hX = await LIBERAPAYTRkYyd.freezeAccount.call(addressUaauvV, {from: accounts[2]});

		assert.equal(boolgiJ9nBi, true)
		await expect(LIBERAPAYTRkYyd.showLockState.call(addressvPwdM3k, uints5STcL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const uintG8UixkK = BigInt("886")
		const addressTtldbx1 = accounts[2]
		const uint256Bmgx9G = await LIBERAPAYTRkYyd.getNowTime.call({from: accounts[2]});
		const uint256UkNmhuI = await LIBERAPAYTRkYyd.totalSupply.call({from: accounts[0]});
		await LIBERAPAYTRkYyd.showLockState.call(addressTtldbx1, uintG8UixkK, {from: accounts[5]});

		assert.equal(uint256Bmgx9G, BigInt("1630230069"))
		assert.equal(uint256UkNmhuI, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYTRkYyd.showLockState.call(addressTtldbx1, uintG8UixkK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const uintrsvP8e = BigInt("932")
		const addresszB0ext = accounts[0]
		const boolwKvJa6X = await LIBERAPAYTRkYyd.mint.call(addresszB0ext, uintrsvP8e, {from: accounts[2]});
		const boolhjoPMGj = await LIBERAPAYTRkYyd.acceptOwnership.call({from: accounts[1]});

		await expect(LIBERAPAYTRkYyd.mint.call(addresszB0ext, uintrsvP8e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const addresse7ZETuu = "0x0000000000000000000000000000000000000001"
		const uintUiZbjHW = BigInt("1177")
		const addressxPAeTDv = accounts[5]
		const uintoPvPSm5 = BigInt("971")
		const addressrJuAPd2 = accounts[0]
		const addressnUeoFtO = await LIBERAPAYTRkYyd.upgradeTo.call(addresse7ZETuu, {from: accounts[2]});
		const boolgiJ9nBi = await LIBERAPAYTRkYyd.transfer.call(addressxPAeTDv, uintUiZbjHW, {from: accounts[2]});
		await LIBERAPAYTRkYyd.showLockState.call(addressrJuAPd2, uintoPvPSm5, {from: accounts[1]});

		assert.equal(boolgiJ9nBi, true)
		await expect(LIBERAPAYTRkYyd.showLockState.call(addressrJuAPd2, uintoPvPSm5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const addressaH1NwEf = accounts[0]
		const addressOYryFU4 = accounts[0]
		await LIBERAPAYTRkYyd.pause.call({from: accounts[2]});
		const uint256MUe8tQf = await LIBERAPAYTRkYyd.currentBalanceOf.call(addressaH1NwEf, {from: accounts[5]});
		const uint256cRBwSv8 = await LIBERAPAYTRkYyd.balanceOf.call(addressOYryFU4, {from: accounts[4]});

		await expect(LIBERAPAYTRkYyd.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const addressPHnDNQY = accounts[1]
		const addressZ4AtA8a = accounts[0]
		const boolSXUgXsn = await LIBERAPAYTRkYyd.unfreezeAccount.call(addressPHnDNQY, {from: accounts[2]});
		const boolk1BN7bU = await LIBERAPAYTRkYyd.acceptOwnership.call({from: accounts[4]});
		const uint256cRBwSv8 = await LIBERAPAYTRkYyd.balanceOf.call(addressZ4AtA8a, {from: accounts[4]});

		await expect(LIBERAPAYTRkYyd.unfreezeAccount.call(addressPHnDNQY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTRkYyd = await LIBERAPAY.new({from: accounts[2]});
		const uintTcn973v = BigInt("1545")
		const addressgOIUXgm = accounts[0]
		const addressJbQ5vf = accounts[1]
		const boolAfBqR0 = await LIBERAPAYTRkYyd.distribute.call(addressgOIUXgm, uintTcn973v, {from: accounts[2]});
		const uint256cRBwSv8 = await LIBERAPAYTRkYyd.balanceOf.call(addressJbQ5vf, {from: accounts[4]});

		assert.equal(boolAfBqR0, true)
		assert.equal(uint256cRBwSv8, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYq0agSov = await LIBERAPAY.new({from: accounts[4]});
		const uintatadLY7 = BigInt("941")
		const uintiKI6bPb = BigInt("1428")
		const addressPBGZIY = accounts[5]
		const uintMXGHhRp = BigInt("229")
		const addressyt3Fb3K = accounts[1]
		const uintCAHePHx = BigInt("1411")
		const addressRkEdSX = accounts[3]
		const addressQdWmfa = accounts[1]
		const addressATYvKUk = "0x0000000000000000000000000000000000000001"
		const boolvcOH9Av = await LIBERAPAYq0agSov.lock.call(addressPBGZIY, uintiKI6bPb, uintatadLY7, {from: accounts[4]});
		const boolyc34rce = await LIBERAPAYq0agSov.transfer.call(addressyt3Fb3K, uintMXGHhRp, {from: accounts[0]});
		const boolpPeQ2iB = await LIBERAPAYq0agSov.transferFrom.call(addressQdWmfa, addressRkEdSX, uintCAHePHx, {from: accounts[3]});
		const uint2568aaKWT = await LIBERAPAYq0agSov.currentBalanceOf.call(addressATYvKUk, {from: accounts[1]});

		await expect(LIBERAPAYq0agSov.lock.call(addressPBGZIY, uintiKI6bPb, uintatadLY7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})