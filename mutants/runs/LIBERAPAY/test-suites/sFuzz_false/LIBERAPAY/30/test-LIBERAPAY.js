const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYHy8hfm3 = await LIBERAPAY.new({from: accounts[0]});
		const uintDR0fAkL = BigInt("401")
		const uintvcyL5XE = BigInt("1313")
		const addresswJ6QMq5 = accounts[2]
		const uintD1h3a7x = BigInt("1524")
		const addressxlDrnE = accounts[4]
		const addressDTFB0wu = "0x0000000000000000000000000000000000000001"
		const boolxsP4oWF = await LIBERAPAYHy8hfm3.acceptOwnership.call({from: accounts[2]});
		const boolNKqFB3y = await LIBERAPAYHy8hfm3.lock.call(addresswJ6QMq5, uintvcyL5XE, uintDR0fAkL, {from: accounts[5]});
		await LIBERAPAYHy8hfm3.onlyOwner.call({from: accounts[4]});
		const boolfWBoAya = await LIBERAPAYHy8hfm3.transferFrom.call(addressDTFB0wu, addressxlDrnE, uintD1h3a7x, {from: accounts[0]});

		await expect(LIBERAPAYHy8hfm3.acceptOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYmRoiLw = await LIBERAPAY.new({from: accounts[2]});
		const uintUeKA844 = BigInt("266")
		const addressF54fgwU = accounts[2]
		await LIBERAPAYmRoiLw.whenPaused.call({from: accounts[0]});
		const boolbMsxpSD = await LIBERAPAYmRoiLw.burnFrom.call(addressF54fgwU, uintUeKA844, {from: accounts[4]});
		await LIBERAPAYmRoiLw.whenNotPaused.call({from: accounts[3]});
		const boolqN5NDEe = await LIBERAPAYmRoiLw.acceptOwnership.call({from: accounts[1]});

		await expect(LIBERAPAYmRoiLw.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpEGc4F3 = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUFMaN3 = BigInt("1680")
		const addressrwr1rc = accounts[1]
		const addressXKMVOCY = accounts[1]
		const booletYPYns = await LIBERAPAYpEGc4F3.burnFrom.call(addressrwr1rc, uintUFMaN3, {from: accounts[4]});
		const uint256WfsQSdP = await LIBERAPAYpEGc4F3.currentBalanceOf.call(addressXKMVOCY, {from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintWi4VYK5 = BigInt("1162")
		const addressCkGijH = accounts[0]
		const addressb2pVdH6 = "0x0000000000000000000000000000000000000001"
		const uintW5GJY36 = BigInt("346")
		const addresszeWs82W = accounts[2]
		const uintypQTDt = BigInt("985")
		const addressMXpb0pl = accounts[4]
		const boolBkKfcx = await LIBERAPAYfl9yGbx.transferFrom.call(addressb2pVdH6, addressCkGijH, uintWi4VYK5, {from: accounts[0]});
		const boolJ6QjO8o = await LIBERAPAYfl9yGbx.transfer.call(addresszeWs82W, uintW5GJY36, {from: accounts[1]});
		const boolyXl1PvC = await LIBERAPAYfl9yGbx.burnFrom.call(addressMXpb0pl, uintypQTDt, {from: accounts[3]});

		await expect(LIBERAPAYfl9yGbx.transferFrom.call(addressb2pVdH6, addressCkGijH, uintWi4VYK5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYLSAY07L = await LIBERAPAY.new({from: accounts[2]});
		const uintAcUY8qn = BigInt("1291")
		const addressuAhUtaR = accounts[4]
		const uintm0H20i = BigInt("774")
		const address6SMdwq = accounts[5]
		const uintH0d6MMA = BigInt("531")
		const addresslIvQKXC = "0x0000000000000000000000000000000000000001"
		const boolxo0WuTd = await LIBERAPAYLSAY07L.transfer.call(addressuAhUtaR, uintAcUY8qn, {from: accounts[0]});
		const boolyJjv7V3 = await LIBERAPAYLSAY07L.distribute.call(address6SMdwq, uintm0H20i, {from: accounts[1]});
		await LIBERAPAYLSAY07L.onlyNewOwner.call({from: accounts[3]});
		const uint256AWRlIMA = await LIBERAPAYLSAY07L.getNowTime.call({from: accounts[0]});
		const boolkbH31Gs = await LIBERAPAYLSAY07L.burnFrom.call(addresslIvQKXC, uintH0d6MMA, {from: accounts[2]});

		await expect(LIBERAPAYLSAY07L.transfer.call(addressuAhUtaR, uintAcUY8qn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintPFCJoPM = BigInt("1789")
		const addressywhAsP = accounts[3]
		const uintBhJ7pdt = BigInt("1162")
		const addressNwQwkDD = accounts[0]
		const addressYnTyin = "0x0000000000000000000000000000000000000001"
		const uintNDitTOK = BigInt("346")
		const addressAc27GIi = accounts[2]
		const uintYDu0JPx = BigInt("985")
		const addressoWz2aaB = accounts[4]
		const boolCWfAlRA = await LIBERAPAYfl9yGbx.decreaseAllowance.call(addressywhAsP, uintPFCJoPM, {from: accounts[5]});
		await LIBERAPAYfl9yGbx.f.call({from: accounts[0]});
		const boolBkKfcx = await LIBERAPAYfl9yGbx.transferFrom.call(addressYnTyin, addressNwQwkDD, uintBhJ7pdt, {from: accounts[0]});
		const boolJ6QjO8o = await LIBERAPAYfl9yGbx.transfer.call(addressAc27GIi, uintNDitTOK, {from: accounts[1]});
		const boolyXl1PvC = await LIBERAPAYfl9yGbx.burnFrom.call(addressoWz2aaB, uintYDu0JPx, {from: accounts[3]});

		await expect(LIBERAPAYfl9yGbx.decreaseAllowance.call(addressywhAsP, uintPFCJoPM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintR5G7lwG = BigInt("1035")
		const addressksaKQIG = accounts[2]
		const addressvw4zBFv = accounts[1]
		const uinttQtbxsd = BigInt("1162")
		const addressregiTvP = accounts[0]
		const addressw9vthzg = "0x0000000000000000000000000000000000000001"
		const uinttqa2out = BigInt("322")
		const addressOHn1waB = accounts[2]
		const uintc5rk9Co = BigInt("422")
		const uintcyOXdmN = BigInt("985")
		const addresseC8PH3O = accounts[4]
		const boolQk3joiN = await LIBERAPAYfl9yGbx.distribute.call(addressksaKQIG, uintR5G7lwG, {from: accounts[2]});
		const addressxvYLLSH = await LIBERAPAYfl9yGbx.transferOwnership.call(addressvw4zBFv, {from: accounts[1]});
		const boolBkKfcx = await LIBERAPAYfl9yGbx.transferFrom.call(addressw9vthzg, addressregiTvP, uinttQtbxsd, {from: accounts[0]});
		const boolJ6QjO8o = await LIBERAPAYfl9yGbx.transfer.call(addressOHn1waB, uinttqa2out, {from: accounts[1]});
		const booloCmbbWj = await LIBERAPAYfl9yGbx.burn.call(uintc5rk9Co, {from: accounts[2]});
		const boolyXl1PvC = await LIBERAPAYfl9yGbx.burnFrom.call(addresseC8PH3O, uintcyOXdmN, {from: accounts[3]});

		assert.equal(boolQk3joiN, true)
		await expect(LIBERAPAYfl9yGbx.transferOwnership.call(addressvw4zBFv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const addressnKDeCIi = accounts[0]
		const addressDsxvpWP = accounts[0]
		const uintSu7fqRn = BigInt("1162")
		const addressPKwzDpL = accounts[0]
		const addressgiITaTa = "0x0000000000000000000000000000000000000000"
		const uintM6VxtCY = BigInt("505")
		const addressgsLUNGW = accounts[0]
		const uintdVaxGs9 = BigInt("346")
		const addressV04kWaS = accounts[2]
		const uint256OjXTHiK = await LIBERAPAYfl9yGbx.allowance.call(addressDsxvpWP, addressnKDeCIi, {from: accounts[4]});
		const boolBkKfcx = await LIBERAPAYfl9yGbx.transferFrom.call(addressgiITaTa, addressPKwzDpL, uintSu7fqRn, {from: accounts[0]});
		const boolomyo2GY = await LIBERAPAYfl9yGbx.burn.call(uintM6VxtCY, {from: accounts[2]});
		const addresswTvr3SC = await LIBERAPAYfl9yGbx.upgradeTo.call(addressgsLUNGW, {from: accounts[1]});
		const boolJ6QjO8o = await LIBERAPAYfl9yGbx.transfer.call(addressV04kWaS, uintdVaxGs9, {from: accounts[1]});

		assert.equal(uint256OjXTHiK, BigInt("0"))
		await expect(LIBERAPAYfl9yGbx.transferFrom.call(addressgiITaTa, addressPKwzDpL, uintSu7fqRn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintv70C8l = BigInt("1938")
		const addressa5Q1lwY = accounts[3]
		const uintxDrebxr = BigInt("1352")
		const addressPS1GEfU = accounts[3]
		const uinttYjfgIA = BigInt("1561")
		const addresszLaGa9I = accounts[0]
		const addresszTTHfj = "0x0000000000000000000000000000000000000001"
		const uintHyN07wm = BigInt("346")
		const addresshCruuTo = accounts[2]
		const boolsRSNYel = await LIBERAPAYfl9yGbx.transfer.call(addressa5Q1lwY, uintv70C8l, {from: accounts[2]});
		const boolzxPXynU = await LIBERAPAYfl9yGbx.burnFrom.call(addressPS1GEfU, uintxDrebxr, {from: accounts[2]});
		const boolBkKfcx = await LIBERAPAYfl9yGbx.transferFrom.call(addresszTTHfj, addresszLaGa9I, uinttYjfgIA, {from: accounts[0]});
		const boolJ6QjO8o = await LIBERAPAYfl9yGbx.transfer.call(addresshCruuTo, uintHyN07wm, {from: accounts[1]});

		assert.equal(boolsRSNYel, true)
		await expect(LIBERAPAYfl9yGbx.burnFrom.call(addressPS1GEfU, uintxDrebxr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintFWvw1r1 = BigInt("346")
		const addressObovPnM = accounts[4]
		const address3B237v = accounts[4]
		await LIBERAPAYfl9yGbx.f.call({from: accounts[3]});
		const boolJ6QjO8o = await LIBERAPAYfl9yGbx.transfer.call(addressObovPnM, uintFWvw1r1, {from: accounts[1]});
		const uint256M8dINNZ = await LIBERAPAYfl9yGbx.currentBalanceOf.call(address3B237v, {from: accounts[2]});

		await expect(LIBERAPAYfl9yGbx.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYoxYGHp = await LIBERAPAY.new({from: accounts[5]});
		const uinttYqOTU3 = BigInt("1999")
		const addressLLrSI55 = accounts[1]
		const uintwa7GH4y = BigInt("497")
		const addressLkJtRN3 = accounts[4]
		const addressY46Lvv = accounts[5]
		const addresscU4unMZ = accounts[3]
		const booloNJ0j8S = await LIBERAPAYoxYGHp.increaseAllowance.call(addressLLrSI55, uinttYqOTU3, {from: accounts[5]});
		const boolKSW0drz = await LIBERAPAYoxYGHp.transfer.call(addressLkJtRN3, uintwa7GH4y, {from: accounts[4]});
		const uint256P8LwLd = await LIBERAPAYoxYGHp.allowance.call(addresscU4unMZ, addressY46Lvv, {from: accounts[1]});

		assert.equal(booloNJ0j8S, true)
		await expect(LIBERAPAYoxYGHp.transfer.call(addressLkJtRN3, uintwa7GH4y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const addressrK7rzJ3 = accounts[1]
		const uintPQUy7ZG = BigInt("1050")
		const addressQSlbM1n = accounts[2]
		const uintL3mbZkl = BigInt("1162")
		const addresslm2lcEZ = accounts[1]
		const address6TNkSy = "0x0000000000000000000000000000000000000000"
		const boolbfonHgs = await LIBERAPAYfl9yGbx.unfreezeAccount.call(addressrK7rzJ3, {from: accounts[2]});
		const boolLjCRZhn = await LIBERAPAYfl9yGbx.distribute.call(addressQSlbM1n, uintPQUy7ZG, {from: accounts[3]});
		const boolBkKfcx = await LIBERAPAYfl9yGbx.transferFrom.call(address6TNkSy, addresslm2lcEZ, uintL3mbZkl, {from: accounts[0]});

		await expect(LIBERAPAYfl9yGbx.unfreezeAccount.call(addressrK7rzJ3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintTooZfwq = BigInt("1162")
		const addressewD2B0R = accounts[0]
		const addressZsmJXQ6 = "0x00000000000000000000000000000000000000-1"
		const boolBkKfcx = await LIBERAPAYfl9yGbx.transferFrom.call(addressZsmJXQ6, addressewD2B0R, uintTooZfwq, {from: accounts[0]});

		await expect(LIBERAPAYfl9yGbx.transferFrom.call(addressZsmJXQ6, addressewD2B0R, uintTooZfwq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const addressuIxCBqT = accounts[1]
		const addresstAlzCKB = accounts[3]
		const uintqIe39fu = BigInt("1162")
		const addressS0GGqT = accounts[1]
		const addresspvEoO8A = "0x0000000000000000000000000000000000000000"
		const addressJAUD95i = await LIBERAPAYfl9yGbx.upgradeTo.call(addressuIxCBqT, {from: accounts[2]});
		const boolq2vcNTf = await LIBERAPAYfl9yGbx.freezeAccount.call(addresstAlzCKB, {from: accounts[5]});
		const boolBkKfcx = await LIBERAPAYfl9yGbx.transferFrom.call(addresspvEoO8A, addressS0GGqT, uintqIe39fu, {from: accounts[0]});

		await expect(LIBERAPAYfl9yGbx.freezeAccount.call(addresstAlzCKB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintQxfWJjs = BigInt("329")
		const addresseETPuYF = accounts[3]
		await LIBERAPAYfl9yGbx.pause.call({from: accounts[2]});
		const boolJ6QjO8o = await LIBERAPAYfl9yGbx.transfer.call(addresseETPuYF, uintQxfWJjs, {from: accounts[1]});

		await expect(LIBERAPAYfl9yGbx.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintuZeG1K = BigInt("393")
		const addressdW0rwUe = accounts[4]
		const uintgp5PuzC = BigInt("1162")
		const addressWNkxUhK = accounts[0]
		const addressfqtcMv = "0x0000000000000000000000000000000000000000"
		const boolSFpqZ2s = await LIBERAPAYfl9yGbx.approve.call(addressdW0rwUe, uintuZeG1K, {from: accounts[4]});
		const boolBkKfcx = await LIBERAPAYfl9yGbx.transferFrom.call(addressfqtcMv, addressWNkxUhK, uintgp5PuzC, {from: accounts[0]});

		assert.equal(boolSFpqZ2s, true)
		await expect(LIBERAPAYfl9yGbx.transferFrom.call(addressfqtcMv, addressWNkxUhK, uintgp5PuzC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintMgTmRAW = BigInt("1380")
		const addressgq9lRpv = accounts[0]
		const uintinsSq0 = BigInt("1162")
		const addresspv0QWV4 = accounts[0]
		const addressKbPEPqk = "0x0000000000000000000000000000000000000001"
		await LIBERAPAYfl9yGbx.showLockState.call(addressgq9lRpv, uintMgTmRAW, {from: accounts[0]});
		await LIBERAPAYfl9yGbx.f.call({from: accounts[1]});
		const boolBkKfcx = await LIBERAPAYfl9yGbx.transferFrom.call(addressKbPEPqk, addresspv0QWV4, uintinsSq0, {from: accounts[0]});

		await expect(LIBERAPAYfl9yGbx.showLockState.call(addressgq9lRpv, uintMgTmRAW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAnK5Ydv = await LIBERAPAY.new({from: accounts[1]});
		const addressXsuJrYk = accounts[2]
		const uint256GYVqyJ = await LIBERAPAYAnK5Ydv.currentBalanceOf.call(addressXsuJrYk, {from: accounts[3]});
		const uint256UuXjuyQ = await LIBERAPAYAnK5Ydv.totalSupply.call({from: accounts[5]});

		assert.equal(uint256GYVqyJ, BigInt("0"))
		assert.equal(uint256UuXjuyQ, BigInt("3000000000000000000000000000"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintUBP0DPc = BigInt("1380")
		const addressIaBOycD = accounts[0]
		await LIBERAPAYfl9yGbx.showLockState.call(addressIaBOycD, uintUBP0DPc, {from: accounts[0]});
		const uint256pdLPAV = await LIBERAPAYfl9yGbx.getNowTime.call({from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYfl9yGbx.f.call({from: accounts[1]});

		await expect(LIBERAPAYfl9yGbx.showLockState.call(addressIaBOycD, uintUBP0DPc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAnK5Ydv = await LIBERAPAY.new({from: accounts[1]});
		const addressLpbn0jq = accounts[3]
		const addressDOoSFXJ = accounts[3]
		const uint256oRExdHE = await LIBERAPAYAnK5Ydv.balanceOf.call(addressLpbn0jq, {from: accounts[0]});
		const uint256GYVqyJ = await LIBERAPAYAnK5Ydv.currentBalanceOf.call(addressDOoSFXJ, {from: accounts[3]});
		const uint256UuXjuyQ = await LIBERAPAYAnK5Ydv.totalSupply.call({from: accounts[5]});

		assert.equal(uint256GYVqyJ, BigInt("0"))
		assert.equal(uint256UuXjuyQ, BigInt("3000000000000000000000000000"))
		assert.equal(uint256oRExdHE, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfl9yGbx = await LIBERAPAY.new({from: accounts[2]});
		const uintQ0hgyHy = BigInt("1337")
		const addresscbX5id6 = accounts[0]
		const addressGSnSdNk = accounts[3]
		const address9lVWQ6 = accounts[5]
		await LIBERAPAYfl9yGbx.showLockState.call(addresscbX5id6, uintQ0hgyHy, {from: accounts[0]});
		const boolj2rAjHd = await LIBERAPAYfl9yGbx.freezeAccount.call(addressGSnSdNk, {from: accounts[2]});
		const uint256Dv8mXV = await LIBERAPAYfl9yGbx.balanceOf.call(address9lVWQ6, {from: accounts[2]});
		await LIBERAPAYfl9yGbx.f.call({from: accounts[1]});

		await expect(LIBERAPAYfl9yGbx.showLockState.call(addresscbX5id6, uintQ0hgyHy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYH7UvVHH = await LIBERAPAY.new({from: accounts[0]});
		const uintBy25Rq = BigInt("1459")
		const addressQq6ByDx = accounts[2]
		const uintIOFXNJN = BigInt("1048")
		const addressHABIxPR = accounts[5]
		const addressSHTM20k = accounts[4]
		const addressMcHfyYO = accounts[4]
		const bool88MlVn = await LIBERAPAYH7UvVHH.approve.call(addressQq6ByDx, uintBy25Rq, {from: accounts[1]});
		const boolMMg0hpq = await LIBERAPAYH7UvVHH.unlock.call(addressHABIxPR, uintIOFXNJN, {from: accounts[0]});
		const uint256wo8l1Eu = await LIBERAPAYH7UvVHH.currentBalanceOf.call(addressSHTM20k, {from: accounts[2]});
		const uint256f6f0Mj9 = await LIBERAPAYH7UvVHH.balanceOf.call(addressMcHfyYO, {from: accounts[3]});

		assert.equal(bool88MlVn, true)
		await expect(LIBERAPAYH7UvVHH.unlock.call(addressHABIxPR, uintIOFXNJN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFLMAC9n = await LIBERAPAY.new({from: accounts[4]});
		const uintzPjS3UJ = BigInt("1452")
		const uintB4z9MDI = BigInt("851")
		const addressXnDx6Y0 = "0x0000000000000000000000000000000000000001"
		const addressodzqFKq = accounts[2]
		const boolHrpgxNu = await LIBERAPAYFLMAC9n.burn.call(uintzPjS3UJ, {from: accounts[4]});
		const boolOZsz624 = await LIBERAPAYFLMAC9n.transferFrom.call(addressodzqFKq, addressXnDx6Y0, uintB4z9MDI, {from: accounts[3]});

		assert.equal(boolHrpgxNu, true)
		await expect(LIBERAPAYFLMAC9n.transferFrom.call(addressodzqFKq, addressXnDx6Y0, uintB4z9MDI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY4PTX4X = await LIBERAPAY.new({from: accounts[1]});
		const addressUEgc7Bm = accounts[2]
		const uinti3BMgXF = BigInt("620")
		const addresscBTPYT1 = accounts[2]
		const uintefLRiZq = BigInt("1531")
		const addressbOnvFtC = accounts[1]
		const addressHjAtXk = await LIBERAPAY4PTX4X.transferOwnership.call(addressUEgc7Bm, {from: accounts[1]});
		await LIBERAPAY4PTX4X.f.call({from: accounts[0]});
		const booljYL3Q6c = await LIBERAPAY4PTX4X.transfer.call(addresscBTPYT1, uinti3BMgXF, {from: accounts[2]});
		const boolai1Umu0 = await LIBERAPAY4PTX4X.unlock.call(addressbOnvFtC, uintefLRiZq, {from: accounts[3]});
		await LIBERAPAY4PTX4X.onlyNewOwner.call({from: accounts[3]});

		await expect(LIBERAPAY4PTX4X.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYAnK5Ydv = await LIBERAPAY.new({from: accounts[1]});
		const address4KXjCu = accounts[3]
		const uintxdLpEGa = BigInt("16")
		const uintKjk12Io = BigInt("1506")
		const addressSafxPaz = accounts[4]
		const uint256oRExdHE = await LIBERAPAYAnK5Ydv.balanceOf.call(address4KXjCu, {from: accounts[0]});
		const boolx6uSd7r = await LIBERAPAYAnK5Ydv.lock.call(addressSafxPaz, uintKjk12Io, uintxdLpEGa, {from: accounts[1]});
		const uint256UuXjuyQ = await LIBERAPAYAnK5Ydv.totalSupply.call({from: accounts[5]});

		assert.equal(uint256oRExdHE, BigInt("0"))
		await expect(LIBERAPAYAnK5Ydv.lock.call(addressSafxPaz, uintKjk12Io, uintxdLpEGa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})