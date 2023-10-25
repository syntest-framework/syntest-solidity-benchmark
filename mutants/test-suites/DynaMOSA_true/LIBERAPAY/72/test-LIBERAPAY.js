const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkLuW1Kf = await LIBERAPAY.new({from: accounts[5]});
		const uintUAjhLtP = BigInt("677")
		const addresslNqa5u = accounts[3]
		const uintoFzQowK = BigInt("1952")
		const uintQw04N3N = BigInt("492")
		const addressLqdevY9 = accounts[3]
//		await LIBERAPAYkLuW1Kf.f.call({from: accounts[3]});
//		const boolgbhuW8T = await LIBERAPAYkLuW1Kf.unlock.call(addresslNqa5u, uintUAjhLtP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcIuTMPz = await LIBERAPAYkLuW1Kf.lock.call(addressLqdevY9, uintQw04N3N, uintoFzQowK, {from: accounts[5]});

		await expect(LIBERAPAYkLuW1Kf.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkU5BuOj = await LIBERAPAY.new({from: accounts[1]});
		const uintm9QViG2 = BigInt("233")
		const addressHysXtND = accounts[2]
		const uintA1DQHWI = BigInt("735")
		const uintXAaJr5r = BigInt("1318")
		const uintiV3Y003 = BigInt("159")
		const addressEZ9BUxs = accounts[0]
		const uint256ivmVPc4 = await LIBERAPAYkU5BuOj.totalSupply.call({from: accounts[0]});
//		const boolZZwaRV9 = await LIBERAPAYkU5BuOj.decreaseAllowance.call(addressHysXtND, uintm9QViG2, {from: accounts[2]});
//		const boolNlIcKCZ = await LIBERAPAYkU5BuOj.burn.call(uintA1DQHWI, {from: accounts[1]});
//		const boolAfUoOTd = await LIBERAPAYkU5BuOj.lock.call(addressEZ9BUxs, uintiV3Y003, uintXAaJr5r, {from: accounts[5]});
//		const uint256HPc11O = await LIBERAPAYkU5BuOj.getNowTime.call({from: accounts[3]});

		assert.equal(uint256ivmVPc4, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYkU5BuOj.decreaseAllowance.call(addressHysXtND, uintm9QViG2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQ5DsJOn = await LIBERAPAY.new({from: accounts[2]});
		const uintKWZdafM = BigInt("1965")
		const addressGUQVxkW = accounts[1]
//		await LIBERAPAYQ5DsJOn.onlyNewOwner.call({from: accounts[5]});
//		const boolgbOBg3H = await LIBERAPAYQ5DsJOn.unlock.call(addressGUQVxkW, uintKWZdafM, {from: accounts[2]});

		await expect(LIBERAPAYQ5DsJOn.onlyNewOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuSgMkGw = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshNmgfJF = accounts[0]
		const addressiF0ePM = accounts[2]
		const boolP2oWSTK = await LIBERAPAYuSgMkGw.unfreezeAccount.call(addresshNmgfJF, {from: accounts[0]});
		const uint256JRsTjlv = await LIBERAPAYuSgMkGw.getNowTime.call({from: accounts[4]});
		const addressIuF6n3 = await LIBERAPAYuSgMkGw.transferOwnership.call(addressiF0ePM, {from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqEPdaqV = await LIBERAPAY.new({from: accounts[1]});
		const uintMTr01J2 = BigInt("1232")
		const addresskAjKhE = accounts[3]
		const addressqGrkOyA = accounts[5]
		const uintEwzjUX7 = BigInt("324")
		const addressMkFzu9k = accounts[1]
		const uinta7gBpt2 = BigInt("779")
		const addressuYsLxSE = accounts[1]
//		const boolgO1MJqy = await LIBERAPAYqEPdaqV.transferFrom.call(addressqGrkOyA, addresskAjKhE, uintMTr01J2, {from: accounts[2]});
//		const boolQ5NGSJQ = await LIBERAPAYqEPdaqV.distribute.call(addressMkFzu9k, uintEwzjUX7, {from: accounts[3]});
//		const bool1E6ypM = await LIBERAPAYqEPdaqV.increaseAllowance.call(addressuYsLxSE, uinta7gBpt2, {from: accounts[1]});

		await expect(LIBERAPAYqEPdaqV.transferFrom.call(addressqGrkOyA, addresskAjKhE, uintMTr01J2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQ5DsJOn = await LIBERAPAY.new({from: accounts[2]});
		const uintpmEZsE = BigInt("446")
		const addressi5SAueA = accounts[3]
		const uintQjNaInN = BigInt("1965")
		const addressfrGLxWo = accounts[2]
		const boolg1WkEh = await LIBERAPAYQ5DsJOn.increaseAllowance.call(addressi5SAueA, uintpmEZsE, {from: accounts[1]});
//		await LIBERAPAYQ5DsJOn.onlyNewOwner.call({from: accounts[5]});
//		const boolgbOBg3H = await LIBERAPAYQ5DsJOn.unlock.call(addressfrGLxWo, uintQjNaInN, {from: accounts[2]});

		assert.equal(boolg1WkEh, true)
		await expect(LIBERAPAYQ5DsJOn.onlyNewOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeEuWb7d = await LIBERAPAY.new({from: accounts[1]});
		const addressejeP5S1 = accounts[5]
		const uintWaCpGry = BigInt("1532")
		const addressayucxaS = accounts[0]
		const addressTE4XoRe = accounts[1]
		const uint2562ZOfvX = await LIBERAPAYeEuWb7d.currentBalanceOf.call(addressejeP5S1, {from: accounts[0]});
//		const boolYmvZ3wv = await LIBERAPAYeEuWb7d.unlock.call(addressayucxaS, uintWaCpGry, {from: accounts[1]});
//		const uint256copU98 = await LIBERAPAYeEuWb7d.balanceOf.call(addressTE4XoRe, {from: accounts[3]});
//		const uint256akf0grj = await LIBERAPAYeEuWb7d.totalSupply.call({from: accounts[4]});

		assert.equal(uint2562ZOfvX, BigInt("0"))
		await expect(LIBERAPAYeEuWb7d.unlock.call(addressayucxaS, uintWaCpGry, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqEPdaqV = await LIBERAPAY.new({from: accounts[1]});
		const uintm67Kcwl = BigInt("846")
		const addressG5jfgpU = accounts[2]
		const uintbc3Df9N = BigInt("1232")
		const addressGRzSrY9 = accounts[3]
		const addressUTlqtnn = accounts[5]
		const uintPmlaoIC = BigInt("324")
		const addressOUskJJI = accounts[1]
		const uintfBh4DJt = BigInt("779")
		const addressc3J0j2i = accounts[2]
		const boolioHoFe3 = await LIBERAPAYqEPdaqV.approve.call(addressG5jfgpU, uintm67Kcwl, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgO1MJqy = await LIBERAPAYqEPdaqV.transferFrom.call(addressUTlqtnn, addressGRzSrY9, uintbc3Df9N, {from: accounts[2]});
//		const uint256G70nGk = await LIBERAPAYqEPdaqV.totalSupply.call({from: accounts[1]});
//		const boolQ5NGSJQ = await LIBERAPAYqEPdaqV.distribute.call(addressOUskJJI, uintPmlaoIC, {from: accounts[3]});
//		const bool1E6ypM = await LIBERAPAYqEPdaqV.increaseAllowance.call(addressc3J0j2i, uintfBh4DJt, {from: accounts[1]});

		assert.equal(boolioHoFe3, true)
		await expect(LIBERAPAYqEPdaqV.transferFrom.call(addressUTlqtnn, addressGRzSrY9, uintbc3Df9N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqEPdaqV = await LIBERAPAY.new({from: accounts[1]});
		const uintnN2tqaY = BigInt("1267")
		const addressdSu9wwi = accounts[0]
		const uintxSXabWo = BigInt("1232")
		const addressgDnecfB = accounts[3]
		const addressEcBCKdK = accounts[5]
		const uintqoWGrIc = BigInt("330")
		const addresstQgnOa4 = accounts[0]
		const uintP5Rdj6w = BigInt("324")
		const addressye7edNu = accounts[2]
		const uintdxdQCls = BigInt("779")
		const addressubRfio = accounts[1]
//		const boolrKPeHQ = await LIBERAPAYqEPdaqV.burnFrom.call(addressdSu9wwi, uintnN2tqaY, {from: accounts[0]});
//		const boolgO1MJqy = await LIBERAPAYqEPdaqV.transferFrom.call(addressEcBCKdK, addressgDnecfB, uintxSXabWo, {from: accounts[2]});
//		await LIBERAPAYqEPdaqV.f.call({from: accounts[4]});
//		await LIBERAPAYqEPdaqV.showLockState.call(addresstQgnOa4, uintqoWGrIc, {from: accounts[2]});
//		const boolQ5NGSJQ = await LIBERAPAYqEPdaqV.distribute.call(addressye7edNu, uintP5Rdj6w, {from: accounts[3]});
//		const bool1E6ypM = await LIBERAPAYqEPdaqV.increaseAllowance.call(addressubRfio, uintdxdQCls, {from: accounts[1]});

		await expect(LIBERAPAYqEPdaqV.burnFrom.call(addressdSu9wwi, uintnN2tqaY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeEuWb7d = await LIBERAPAY.new({from: accounts[1]});
		const addressGgjpbk = accounts[5]
		const addressTN7BQi = accounts[2]
		const uint2562ZOfvX = await LIBERAPAYeEuWb7d.currentBalanceOf.call(addressGgjpbk, {from: accounts[0]});
		const uint256copU98 = await LIBERAPAYeEuWb7d.balanceOf.call(addressTN7BQi, {from: accounts[3]});

		assert.equal(uint2562ZOfvX, BigInt("0"))
		assert.equal(uint256copU98, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYDNKavbQ = await LIBERAPAY.new({from: accounts[3]});
		const uintymJustZ = BigInt("1580")
		const addressTdQ6VI9 = accounts[4]
		const addressR0QUHYg = accounts[5]
		const uint256Bbyziur = await LIBERAPAYDNKavbQ.getNowTime.call({from: accounts[3]});
//		const boolmvo4y7T = await LIBERAPAYDNKavbQ.burnFrom.call(addressTdQ6VI9, uintymJustZ, {from: accounts[0]});
//		const booliQ63px8 = await LIBERAPAYDNKavbQ.freezeAccount.call(addressR0QUHYg, {from: accounts[5]});

		assert.equal(uint256Bbyziur, BigInt("1630230943"))
		await expect(LIBERAPAYDNKavbQ.burnFrom.call(addressTdQ6VI9, uintymJustZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYaR1xpmj = await LIBERAPAY.new({from: accounts[4]});
		const addresshQi8P9J = accounts[3]
		const uintXcHK3EM = BigInt("265")
		const addresslvnPkce = accounts[4]
		const uintCzzPxbg = BigInt("1655")
		const addressdOIZmV2 = accounts[0]
		const uint256pz9Rc5J = await LIBERAPAYaR1xpmj.currentBalanceOf.call(addresshQi8P9J, {from: accounts[2]});
//		await LIBERAPAYaR1xpmj.pause.call({from: accounts[4]});
//		const boolnCDtmLt = await LIBERAPAYaR1xpmj.approve.call(addresslvnPkce, uintXcHK3EM, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDpV2mpq = await LIBERAPAYaR1xpmj.mint.call(addressdOIZmV2, uintCzzPxbg, {from: accounts[4]});
//		await LIBERAPAYaR1xpmj.onlyNewOwner.call({from: accounts[3]});
//		await LIBERAPAYaR1xpmj.onlyNewOwner.call({from: accounts[2]});

		assert.equal(uint256pz9Rc5J, BigInt("0"))
		await expect(LIBERAPAYaR1xpmj.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYU9bK32L = await LIBERAPAY.new({from: accounts[1]});
		const uintve6BgWA = BigInt("1633")
		const addressElpNrwg = accounts[1]
		const addressBd4MNIb = accounts[4]
		const addresspArIiNj = accounts[3]
		const addressU1JEm4V = accounts[2]
		const addressSUYJEq6 = accounts[4]
//		const boolH8u8lEp = await LIBERAPAYU9bK32L.transfer.call(addressElpNrwg, uintve6BgWA, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256XEUstjZ = await LIBERAPAYU9bK32L.currentBalanceOf.call(addressBd4MNIb, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256CzmS59u = await LIBERAPAYU9bK32L.allowance.call(addressU1JEm4V, addresspArIiNj, {from: "0x0000000000000000000000000000000000000001"});
//		const addressNdNhgkI = await LIBERAPAYU9bK32L.transferOwnership.call(addressSUYJEq6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYU9bK32L.transfer.call(addressElpNrwg, uintve6BgWA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUjUdw64 = await LIBERAPAY.new({from: accounts[2]});
		const uintgR9Q395 = BigInt("481")
		const addressLrZnRyn = accounts[3]
		const uintkS4SpKH = BigInt("1780")
		const addresslBwsKI = accounts[0]
//		await LIBERAPAYUjUdw64.showLockState.call(addressLrZnRyn, uintgR9Q395, {from: accounts[3]});
//		await LIBERAPAYUjUdw64.showLockState.call(addresslBwsKI, uintkS4SpKH, {from: accounts[3]});

		await expect(LIBERAPAYUjUdw64.showLockState.call(addressLrZnRyn, uintgR9Q395, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeEuWb7d = await LIBERAPAY.new({from: accounts[1]});
		const addresstIEHdgi = accounts[6]
		const addressvpegrc8 = accounts[4]
		const uintTr6urnb = BigInt("2031")
		const addressULW6LU = accounts[1]
		const uint2562ZOfvX = await LIBERAPAYeEuWb7d.currentBalanceOf.call(addresstIEHdgi, {from: accounts[0]});
		const uint256fW0WwIT = await LIBERAPAYeEuWb7d.balanceOf.call(addressvpegrc8, {from: accounts[5]});
		const boolRX6Evdm = await LIBERAPAYeEuWb7d.transfer.call(addressULW6LU, uintTr6urnb, {from: accounts[1]});

		assert.equal(boolRX6Evdm, true)
		assert.equal(uint2562ZOfvX, BigInt("0"))
		assert.equal(uint256fW0WwIT, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYCrZ75wn = await LIBERAPAY.new({from: accounts[1]});
		const addressyrJsLQy = accounts[4]
		const uintG8Z8EZM = BigInt("1563")
		const addressBMdXJPw = "0x0000000000000000000000000000000000000001"
		const boolnSeDAVX = await LIBERAPAYCrZ75wn.freezeAccount.call(addressyrJsLQy, {from: accounts[1]});
//		await LIBERAPAYCrZ75wn.whenPaused.call({from: accounts[0]});
//		const boolQgx9Qu = await LIBERAPAYCrZ75wn.decreaseAllowance.call(addressBMdXJPw, uintG8Z8EZM, {from: accounts[1]});
//		await LIBERAPAYCrZ75wn.onlyNewOwner.call({from: accounts[2]});
//		await LIBERAPAYCrZ75wn.pause.call({from: accounts[2]});

		assert.equal(boolnSeDAVX, true)
		await expect(LIBERAPAYCrZ75wn.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUjUdw64 = await LIBERAPAY.new({from: accounts[2]});
		const addressEu290l5 = accounts[4]
		const uintH3a7SYG = BigInt("1210")
		const addressZpe0MAi = accounts[3]
		const addressqdHCdBk = await LIBERAPAYUjUdw64.transferOwnership.call(addressEu290l5, {from: accounts[2]});
//		await LIBERAPAYUjUdw64.showLockState.call(addressZpe0MAi, uintH3a7SYG, {from: accounts[3]});

		await expect(LIBERAPAYUjUdw64.showLockState.call(addressZpe0MAi, uintH3a7SYG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeEuWb7d = await LIBERAPAY.new({from: accounts[1]});
		const addressut8sTEo = accounts[6]
		const uintU6KHMFX = BigInt("1604")
		const addressAeXJDf6 = accounts[0]
		const addresshFpsVa1 = accounts[1]
		const addressUubqxDF = accounts[3]
		const addressao0NtZ1 = accounts[1]
		const addressajofNEL = accounts[2]
		const uint2562ZOfvX = await LIBERAPAYeEuWb7d.currentBalanceOf.call(addressut8sTEo, {from: accounts[0]});
//		const boolYQTOTMk = await LIBERAPAYeEuWb7d.transferFrom.call(addresshFpsVa1, addressAeXJDf6, uintU6KHMFX, {from: accounts[1]});
//		const uint256uOVeGw3 = await LIBERAPAYeEuWb7d.allowance.call(addressao0NtZ1, addressUubqxDF, {from: accounts[4]});
//		const uint256copU98 = await LIBERAPAYeEuWb7d.balanceOf.call(addressajofNEL, {from: accounts[3]});

		assert.equal(uint2562ZOfvX, BigInt("0"))
		await expect(LIBERAPAYeEuWb7d.transferFrom.call(addresshFpsVa1, addressAeXJDf6, uintU6KHMFX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeEuWb7d = await LIBERAPAY.new({from: accounts[1]});
		const uintcLOPq5G = BigInt("1192")
		const uint8vmjEs = BigInt("1174")
		const addressbGq4Ysz = accounts[1]
		const addressA3vcGKp = accounts[4]
		const addressAQB4CWc = accounts[3]
		const boolmVOqa3w = await LIBERAPAYeEuWb7d.lock.call(addressbGq4Ysz, uint8vmjEs, uintcLOPq5G, {from: accounts[1]});
		const uint256IHLQDjD = await LIBERAPAYeEuWb7d.balanceOf.call(addressA3vcGKp, {from: accounts[3]});
		const uint256copU98 = await LIBERAPAYeEuWb7d.balanceOf.call(addressAQB4CWc, {from: accounts[3]});
		const uint256Y1Lq4qi = await LIBERAPAYeEuWb7d.totalSupply.call({from: accounts[2]});

		assert.equal(boolmVOqa3w, true)
		assert.equal(uint256IHLQDjD, BigInt("0"))
		assert.equal(uint256Y1Lq4qi, BigInt("3000000000000000000000000000"))
		assert.equal(uint256copU98, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqEPdaqV = await LIBERAPAY.new({from: accounts[1]});
		const addressHcIdwq7 = accounts[1]
		const uinthJXDNuY = BigInt("762")
		const addressNVmn5Sf = accounts[0]
		const addresstI8rYh = accounts[1]
		const uintwkaKUk = BigInt("855")
		const addressJ9trWU3 = "0x0000000000000000000000000000000000000001"
		const addressfb20dZV = accounts[5]
		const uint256nJS4iOq = await LIBERAPAYqEPdaqV.balanceOf.call(addressHcIdwq7, {from: accounts[2]});
		const boolRMwI8Xx = await LIBERAPAYqEPdaqV.distribute.call(addressNVmn5Sf, uinthJXDNuY, {from: accounts[1]});
		const uint256Q4qACF = await LIBERAPAYqEPdaqV.currentBalanceOf.call(addresstI8rYh, {from: accounts[2]});
//		const boolhR4V16b = await LIBERAPAYqEPdaqV.transferFrom.call(addressfb20dZV, addressJ9trWU3, uintwkaKUk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRMwI8Xx, true)
		assert.equal(uint256Q4qACF, BigInt("3000000000000000000000000000"))
		assert.equal(uint256nJS4iOq, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYqEPdaqV.transferFrom.call(addressfb20dZV, addressJ9trWU3, uintwkaKUk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqEPdaqV = await LIBERAPAY.new({from: accounts[1]});
		const addressqSelpK8 = accounts[5]
		const addresso6aTxD0 = accounts[0]
		const uintjjWuTzm = BigInt("48")
		const addresszsbPUf = accounts[5]
//		const boolDYDoxJO = await LIBERAPAYqEPdaqV.unfreezeAccount.call(addressqSelpK8, {from: accounts[1]});
//		const addresslMcfPfs = await LIBERAPAYqEPdaqV.transferOwnership.call(addresso6aTxD0, {from: accounts[2]});
//		const boolSWtVYJZ = await LIBERAPAYqEPdaqV.mint.call(addresszsbPUf, uintjjWuTzm, {from: accounts[1]});

		await expect(LIBERAPAYqEPdaqV.unfreezeAccount.call(addressqSelpK8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeEuWb7d = await LIBERAPAY.new({from: accounts[1]});
		const uintuMHppt = BigInt("275")
		const addressOl7GA1D = accounts[6]
		const boolcJXJQYF = await LIBERAPAYeEuWb7d.burn.call(uintuMHppt, {from: accounts[1]});
		const uint2562ZOfvX = await LIBERAPAYeEuWb7d.currentBalanceOf.call(addressOl7GA1D, {from: accounts[0]});

		assert.equal(boolcJXJQYF, true)
		assert.equal(uint2562ZOfvX, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqEPdaqV = await LIBERAPAY.new({from: accounts[1]});
		const addressIqKVcS = accounts[3]
		const uintaP8G0G4 = BigInt("365")
		const addressvJxgx8K = "0x0000000000000000000000000000000000000001"
		const addressjoMBH7 = accounts[5]
		const uintBg1Pi3g = BigInt("788")
		const addressT4M6GI2 = accounts[0]
		const addressMqGVeAe = await LIBERAPAYqEPdaqV.upgradeTo.call(addressIqKVcS, {from: accounts[1]});
//		const boolhR4V16b = await LIBERAPAYqEPdaqV.transferFrom.call(addressjoMBH7, addressvJxgx8K, uintaP8G0G4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolXMoPm6 = await LIBERAPAYqEPdaqV.distribute.call(addressT4M6GI2, uintBg1Pi3g, {from: accounts[2]});
//		await LIBERAPAYqEPdaqV.whenPaused.call({from: accounts[4]});

		await expect(LIBERAPAYqEPdaqV.transferFrom.call(addressjoMBH7, addressvJxgx8K, uintaP8G0G4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})