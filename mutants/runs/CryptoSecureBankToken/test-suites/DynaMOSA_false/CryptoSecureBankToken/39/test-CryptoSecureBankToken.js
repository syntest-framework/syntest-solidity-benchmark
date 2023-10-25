const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhn6TpT6 = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintOgXZto = BigInt("667")
		const uint1Y94Ak = BigInt("1921")
		const addressxiAlJ7I = accounts[0]
		const addresscvloas = accounts[0]
		await CryptoSecureBankTokenhn6TpT6.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const uintaCvwl4 = await CryptoSecureBankTokenhn6TpT6.onlyPayloadSize.call(uintOgXZto, {from: accounts[3]});
		const uintTcicaa = await CryptoSecureBankTokenhn6TpT6.onlyPayloadSize.call(uint1Y94Ak, {from: accounts[3]});
		const addressQQsoQwp = await CryptoSecureBankTokenhn6TpT6.addBlackList.call(addressxiAlJ7I, {from: accounts[5]});
		const boolwLtqguJ = await CryptoSecureBankTokenhn6TpT6.getBlackListStatus.call(addresscvloas, {from: accounts[3]});

		await expect(CryptoSecureBankTokenhn6TpT6.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenpOidbEJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintldQRrKP = BigInt("1866")
		const addressLu61sde = accounts[4]
		const uintTRMGDkS = BigInt("1306")
		const boolFAatuGm = await CryptoSecureBankTokenpOidbEJ.approve.call(addressLu61sde, uintldQRrKP, {from: accounts[0]});
		const boolLonIinB = await CryptoSecureBankTokenpOidbEJ.redeem.call(uintTRMGDkS, {from: accounts[1]});

		assert.equal(boolFAatuGm, true)
		await expect(CryptoSecureBankTokenpOidbEJ.redeem.call(uintTRMGDkS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvPVvwIJ = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintZOQ1DKQ = BigInt("237")
		const addresswhYVA2g = accounts[1]
		const addressbarjmyt = accounts[0]
		const uintnZlBueZ = BigInt("1568")
		const addressh9iThDv = accounts[1]
		const addresstxBw5Js = accounts[0]
		const addressQsR5HKj = accounts[2]
		const addressTQHkkDL = accounts[0]
		const addressW0K9pCJ = accounts[4]
		const boolzQkr9J = await CryptoSecureBankTokenvPVvwIJ.transfer.call(addresswhYVA2g, uintZOQ1DKQ, {from: "0x0000000000000000000000000000000000000001"});
		const addressslp6pGn = await CryptoSecureBankTokenvPVvwIJ.transferOwnership.call(addressbarjmyt, {from: accounts[3]});
		const boolAAVmj6s = await CryptoSecureBankTokenvPVvwIJ.transferFrom.call(addresstxBw5Js, addressh9iThDv, uintnZlBueZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintDTbV42 = await CryptoSecureBankTokenvPVvwIJ.balanceOf.call(addressQsR5HKj, {from: accounts[1]});
		const uintYgePkEG = await CryptoSecureBankTokenvPVvwIJ.allowance.call(addressW0K9pCJ, addressTQHkkDL, {from: accounts[4]});

		await expect(CryptoSecureBankTokenvPVvwIJ.transfer.call(addresswhYVA2g, uintZOQ1DKQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenWDU3uEm = await CryptoSecureBankToken.new({from: accounts[4]});
		const uint7biBUZ = BigInt("1054")
		const address14Htr4 = accounts[0]
		const addressjUg51jE = accounts[1]
		const boolG2VrbWG = await CryptoSecureBankTokenWDU3uEm.approve.call(address14Htr4, uint7biBUZ, {from: accounts[1]});
		const boolpWUmWL3 = await CryptoSecureBankTokenWDU3uEm.getBlackListStatus.call(addressjUg51jE, {from: accounts[3]});

		assert.equal(boolG2VrbWG, true)
		assert.equal(boolpWUmWL3, false)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenG5v1uHb = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVMcuIc = BigInt("1580")
		const uintrD5SjZw = BigInt("1721")
		const addressU1f8Rb = "0x0000000000000000000000000000000000000001"
		const addressfEiJQgH = accounts[2]
		const addressg5soMJd = accounts[4]
		const boolmYnKkc5 = await CryptoSecureBankTokenG5v1uHb.redeem.call(uintVMcuIc, {from: accounts[0]});
		const bool8pRwPn = await CryptoSecureBankTokenG5v1uHb.transferFrom.call(addressfEiJQgH, addressU1f8Rb, uintrD5SjZw, {from: "0x0000000000000000000000000000000000000001"});
		const addressdzdrt5r = await CryptoSecureBankTokenG5v1uHb.transferOwnership.call(addressg5soMJd, {from: accounts[0]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFaYsY67 = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressRgZQ8ly = accounts[4]
		const addresstUScOyB = accounts[1]
		const addresspD24pyd = accounts[1]
		const addressyAQR2Fn = accounts[1]
		const uintGnyehCb = await CryptoSecureBankTokenFaYsY67.balanceOf.call(addressRgZQ8ly, {from: accounts[2]});
		const boolhFf7DK = await CryptoSecureBankTokenFaYsY67.getBlackListStatus.call(addresstUScOyB, {from: accounts[2]});
		const uintQPkd4pa = await CryptoSecureBankTokenFaYsY67.balanceOf.call(addresspD24pyd, {from: accounts[4]});
		const uintUHKsgzO = await CryptoSecureBankTokenFaYsY67.balanceOf.call(addressyAQR2Fn, {from: accounts[3]});
		const uintmtTttD4 = await CryptoSecureBankTokenFaYsY67.totalSupply.call({from: accounts[5]});

		assert.equal(boolhFf7DK, false)
		assert.equal(uintGnyehCb, BigInt("0"))
		assert.equal(uintQPkd4pa, BigInt("100000000000000000000000000"))
		assert.equal(uintUHKsgzO, BigInt("100000000000000000000000000"))
		assert.equal(uintmtTttD4, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvPVvwIJ = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressFAE6qkL = accounts[0]
		const uintQUD6ZSd = BigInt("1568")
		const addresszFcsjB0 = accounts[1]
		const addressjGd0TYj = accounts[0]
		const addressJ7WSjlP = accounts[2]
		const addressGdWFfL = accounts[0]
		const address5NZ0op = accounts[4]
		const addressslp6pGn = await CryptoSecureBankTokenvPVvwIJ.transferOwnership.call(addressFAE6qkL, {from: accounts[3]});
		const boolAAVmj6s = await CryptoSecureBankTokenvPVvwIJ.transferFrom.call(addressjGd0TYj, addresszFcsjB0, uintQUD6ZSd, {from: "0x0000000000000000000000000000000000000001"});
		const uintDTbV42 = await CryptoSecureBankTokenvPVvwIJ.balanceOf.call(addressJ7WSjlP, {from: accounts[1]});
		const uintYgePkEG = await CryptoSecureBankTokenvPVvwIJ.allowance.call(address5NZ0op, addressGdWFfL, {from: accounts[4]});

		await expect(CryptoSecureBankTokenvPVvwIJ.transferOwnership.call(addressFAE6qkL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenpOidbEJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintzzWVUpZ = BigInt("1866")
		const addressYM4jbcQ = accounts[4]
		const uintwlrIy7V = BigInt("456")
		const addresskNsQvxv = accounts[4]
		const addressOTvuQtf = accounts[0]
		const addressztVGUcw = accounts[4]
		const uintK5LecJp = BigInt("1306")
		const addressRTBsyD6 = accounts[4]
		const boolFAatuGm = await CryptoSecureBankTokenpOidbEJ.approve.call(addressYM4jbcQ, uintzzWVUpZ, {from: accounts[0]});
		const boolSD9d894 = await CryptoSecureBankTokenpOidbEJ.transferFrom.call(addressOTvuQtf, addresskNsQvxv, uintwlrIy7V, {from: accounts[2]});
		const addressbslF9Uf = await CryptoSecureBankTokenpOidbEJ.destroyBlackFunds.call(addressztVGUcw, {from: accounts[5]});
		const boolLonIinB = await CryptoSecureBankTokenpOidbEJ.redeem.call(uintK5LecJp, {from: accounts[1]});
		const boolzwbJXDY = await CryptoSecureBankTokenpOidbEJ.deprecate.call(addressRTBsyD6, {from: accounts[0]});

		assert.equal(boolFAatuGm, true)
		await expect(CryptoSecureBankTokenpOidbEJ.transferFrom.call(addressOTvuQtf, addresskNsQvxv, uintwlrIy7V, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenWDU3uEm = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressXptUB9u = accounts[2]
		const addressjCQEsHp = accounts[3]
		const addressxJlULuL = accounts[0]
		const addressJa9TaRQ = accounts[5]
		const boolpWUmWL3 = await CryptoSecureBankTokenWDU3uEm.getBlackListStatus.call(addressXptUB9u, {from: accounts[3]});
		const uintdMvO6Zl = await CryptoSecureBankTokenWDU3uEm.allowance.call(addressxJlULuL, addressjCQEsHp, {from: accounts[2]});
		const addressuS4PzN0 = await CryptoSecureBankTokenWDU3uEm.destroyBlackFunds.call(addressJa9TaRQ, {from: accounts[2]});

		assert.equal(boolpWUmWL3, false)
		assert.equal(uintdMvO6Zl, BigInt("0"))
		await expect(CryptoSecureBankTokenWDU3uEm.destroyBlackFunds.call(addressJa9TaRQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenWDU3uEm = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressvqeanBE = accounts[2]
		const addressmtJTVdM = await CryptoSecureBankTokenWDU3uEm.getOwner.call({from: accounts[4]});
		const boolpWUmWL3 = await CryptoSecureBankTokenWDU3uEm.getBlackListStatus.call(addressvqeanBE, {from: accounts[3]});

		assert.equal(addressmtJTVdM, 0x030a6a95CF74220dC01dC5c7Fc843660E8c7CE0A)
		assert.equal(boolpWUmWL3, false)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZAbDaDB = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressCREqE0w = "0x0000000000000000000000000000000000000001"
		const uintCc7ZKfF = BigInt("885")
		const boolEhqbRlY = await CryptoSecureBankTokenZAbDaDB.getBlackListStatus.call(addressCREqE0w, {from: accounts[4]});
		const boolnkz2ywr = await CryptoSecureBankTokenZAbDaDB.redeem.call(uintCc7ZKfF, {from: accounts[0]});
		await CryptoSecureBankTokenZAbDaDB.unpause.call({from: accounts[3]});

		assert.equal(boolEhqbRlY, false)
		assert.equal(boolnkz2ywr, true)
		await expect(CryptoSecureBankTokenZAbDaDB.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenpOidbEJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresspjEBems = accounts[1]
		const addresshQij39g = accounts[5]
		const addressOklIcNI = accounts[5]
		const addressUgGJSKT = accounts[0]
		const uintOmExdx4 = await CryptoSecureBankTokenpOidbEJ.allowance.call(addresshQij39g, addresspjEBems, {from: accounts[5]});
		const boolbeRn3wq = await CryptoSecureBankTokenpOidbEJ.deprecate.call(addressOklIcNI, {from: accounts[3]});
		const addressT2Y3CvM = await CryptoSecureBankTokenpOidbEJ.transferOwnership.call(addressUgGJSKT, {from: accounts[1]});

		assert.equal(boolbeRn3wq, true)
		assert.equal(uintOmExdx4, BigInt("0"))
		await expect(CryptoSecureBankTokenpOidbEJ.transferOwnership.call(addressUgGJSKT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenpOidbEJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintx2qNmcQ = BigInt("1850")
		const addresskudARum = accounts[4]
		const addressx66i52g = accounts[0]
		const addressDcZhFks = accounts[4]
		const boolFAatuGm = await CryptoSecureBankTokenpOidbEJ.approve.call(addresskudARum, uintx2qNmcQ, {from: accounts[0]});
		const uinttnmMesr = await CryptoSecureBankTokenpOidbEJ.balanceOf.call(addressx66i52g, {from: accounts[1]});
		const addresstM5p3PA = await CryptoSecureBankTokenpOidbEJ.removeBlackList.call(addressDcZhFks, {from: accounts[3]});

		assert.equal(boolFAatuGm, true)
		assert.equal(uinttnmMesr, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenWNbFCer = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintKxfbVd = BigInt("0")
		const addressjEGANX9 = accounts[1]
		const boolT7Rfqkk = await CryptoSecureBankTokenWNbFCer.transfer.call(addressjEGANX9, uintKxfbVd, {from: accounts[2]});

		assert.equal(boolT7Rfqkk, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenWNbFCer = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintCpSFUJV = BigInt("0")
		const addressW7kttut = accounts[2]
		const addressYJiwNIi = accounts[4]
		const addresscOZej4w = accounts[2]
		const boolT7Rfqkk = await CryptoSecureBankTokenWNbFCer.transfer.call(addressW7kttut, uintCpSFUJV, {from: accounts[2]});
		const addresslSbjsWc = await CryptoSecureBankTokenWNbFCer.setOwner2.call(addressYJiwNIi, {from: accounts[0]});
		const addressy6i9LC8 = await CryptoSecureBankTokenWNbFCer.setOwner2.call(addresscOZej4w, {from: accounts[1]});

		assert.equal(boolT7Rfqkk, true)
		await expect(CryptoSecureBankTokenWNbFCer.setOwner2.call(addresscOZej4w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzT5htkf = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressR9V5q42 = "0x0000000000000000000000000000000000000001"
		const uintlLFy427 = BigInt("1355")
		const addressviypvPE = "0x0000000000000000000000000000000000000001"
		const addressJfLZSeC = accounts[2]
		const uintIgwCltB = BigInt("1511")
		const addressd9Fvyng = await CryptoSecureBankTokenzT5htkf.destroyBlackFunds.call(addressR9V5q42, {from: accounts[5]});
		await CryptoSecureBankTokenzT5htkf.pause.call({from: accounts[0]});
		const boolJWUDxFM = await CryptoSecureBankTokenzT5htkf.transferFrom.call(addressJfLZSeC, addressviypvPE, uintlLFy427, {from: "0x0000000000000000000000000000000000000001"});
		const uinti6uuTxO = await CryptoSecureBankTokenzT5htkf.onlyPayloadSize.call(uintIgwCltB, {from: accounts[1]});

		await expect(CryptoSecureBankTokenzT5htkf.destroyBlackFunds.call(addressR9V5q42, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenpOidbEJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresseuj7m4p = accounts[2]
		const addressEwUh4HT = accounts[6]
		const addressKbQ4PD = accounts[4]
		const addressNboCWz = accounts[0]
		const uintOmExdx4 = await CryptoSecureBankTokenpOidbEJ.allowance.call(addressEwUh4HT, addresseuj7m4p, {from: accounts[5]});
		const addressCT9RH2n = await CryptoSecureBankTokenpOidbEJ.addBlackList.call(addressKbQ4PD, {from: accounts[3]});
		const addressbdhG0gl = await CryptoSecureBankTokenpOidbEJ.transferOwnership.call(addressNboCWz, {from: accounts[4]});

		assert.equal(uintOmExdx4, BigInt("0"))
		await expect(CryptoSecureBankTokenpOidbEJ.transferOwnership.call(addressNboCWz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenpOidbEJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressQTueq9e = accounts[2]
		const addressP6UgLF = accounts[0]
		const addressWgZpzlB = accounts[2]
		const addressEZMfnqW = accounts[6]
		const uintGppTflw = await CryptoSecureBankTokenpOidbEJ.allowance.call(addressP6UgLF, addressQTueq9e, {from: accounts[2]});
		const uintOmExdx4 = await CryptoSecureBankTokenpOidbEJ.allowance.call(addressEZMfnqW, addressWgZpzlB, {from: accounts[5]});
		await CryptoSecureBankTokenpOidbEJ.pause.call({from: accounts[3]});

		assert.equal(uintGppTflw, BigInt("0"))
		assert.equal(uintOmExdx4, BigInt("0"))
		await expect(CryptoSecureBankTokenpOidbEJ.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenpOidbEJ = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressjRG7mzG = accounts[1]
		const uintOBjYorS = BigInt("1812")
		const addressXcfwzIv = accounts[4]
		const addressv5Rw7kr = accounts[1]
		const addresslHgSjDY = await CryptoSecureBankTokenpOidbEJ.transferOwnership.call(addressjRG7mzG, {from: accounts[3]});
		const boolMFAXLJk = await CryptoSecureBankTokenpOidbEJ.approve.call(addressXcfwzIv, uintOBjYorS, {from: accounts[2]});
		const addressT2Y3CvM = await CryptoSecureBankTokenpOidbEJ.transferOwnership.call(addressv5Rw7kr, {from: accounts[1]});

		assert.equal(boolMFAXLJk, true)
		await expect(CryptoSecureBankTokenpOidbEJ.transferOwnership.call(addressv5Rw7kr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenWNbFCer = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintujgBp5 = BigInt("0")
		const addresssQHfUTM = accounts[1]
		const uintgOGNKZY = BigInt("1444")
		const uintiohhFaS = BigInt("1342")
		const uintetkArjU = BigInt("167")
		const addressWyz5yR0 = accounts[3]
		const boolT7Rfqkk = await CryptoSecureBankTokenWNbFCer.transfer.call(addresssQHfUTM, uintujgBp5, {from: accounts[2]});
		const uintARvP8r0 = await CryptoSecureBankTokenWNbFCer.setParams.call(uintiohhFaS, uintgOGNKZY, {from: accounts[0]});
		const boolsOyRrGf = await CryptoSecureBankTokenWNbFCer.transfer.call(addressWyz5yR0, uintetkArjU, {from: accounts[5]});

		assert.equal(boolT7Rfqkk, true)
		await expect(CryptoSecureBankTokenWNbFCer.setParams.call(uintiohhFaS, uintgOGNKZY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})