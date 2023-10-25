const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKDTxNwP = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintrM3CIeW = BigInt("808")
		const addresssRctq3V = accounts[2]
		const uintPeMdMmn = BigInt("1707")
		const addresscBASN1 = accounts[1]
		const addressvt7w5hP = accounts[3]
		const uintij2IHU = BigInt("267")
//		const uintYbfWV5J = await CryptoSecureBankTokenKDTxNwP.onlyPayloadSize.call(uintrM3CIeW, {from: accounts[2]});
//		await CryptoSecureBankTokenKDTxNwP.whenPaused.call({from: accounts[4]});
//		const addressZQBbwht = await CryptoSecureBankTokenKDTxNwP.destroyBlackFunds.call(addresssRctq3V, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSrDBebi = await CryptoSecureBankTokenKDTxNwP.transfer.call(addresscBASN1, uintPeMdMmn, {from: "0x0000000000000000000000000000000000000001"});
//		const uintSk3oSR = await CryptoSecureBankTokenKDTxNwP.balanceOf.call(addressvt7w5hP, {from: accounts[5]});
//		const boolqJtV8qE = await CryptoSecureBankTokenKDTxNwP.redeem.call(uintij2IHU, {from: accounts[1]});

		await expect(CryptoSecureBankTokenKDTxNwP.onlyPayloadSize.call(uintrM3CIeW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCnZbDaO = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressaKBRPAv = accounts[4]
		const uintQtDeCmS = BigInt("818")
		const addressW7Ptltu = accounts[2]
//		const boolXSMznsF = await CryptoSecureBankTokenCnZbDaO.deprecate.call(addressaKBRPAv, {from: accounts[3]});
//		await CryptoSecureBankTokenCnZbDaO.whenPaused.call({from: accounts[1]});
//		const boolvpg207l = await CryptoSecureBankTokenCnZbDaO.approve.call(addressW7Ptltu, uintQtDeCmS, {from: accounts[3]});

		await expect(CryptoSecureBankTokenCnZbDaO.deprecate.call(addressaKBRPAv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengysEiOz = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressPdcGsiL = accounts[2]
//		await CryptoSecureBankTokengysEiOz.pause.call({from: accounts[4]});
//		await CryptoSecureBankTokengysEiOz.unpause.call({from: accounts[2]});
//		const addressZhHtEU8 = await CryptoSecureBankTokengysEiOz.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressRbmAeZr = await CryptoSecureBankTokengysEiOz.setOwner2.call(addressPdcGsiL, {from: accounts[1]});
//		await CryptoSecureBankTokengysEiOz.whenPaused.call({from: accounts[3]});

		await expect(CryptoSecureBankTokengysEiOz.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbE5wGL = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressXPHPW0g = "0x0000000000000000000000000000000000000001"
		const addressDIfNB63 = accounts[4]
		const addressdI5SlJs = accounts[1]
		const addressDYYBYL3 = accounts[4]
		const uintB5XW4YH = BigInt("836")
		const addressZeE0lvp = "0x0000000000000000000000000000000000000001"
		const uinttTRq8ji = await CryptoSecureBankTokenbE5wGL.allowance.call(addressDIfNB63, addressXPHPW0g, {from: "0x0000000000000000000000000000000000000001"});
		const boolltvdNaZ = await CryptoSecureBankTokenbE5wGL.getBlackListStatus.call(addressdI5SlJs, {from: accounts[4]});
//		const addressdKBm8en = await CryptoSecureBankTokenbE5wGL.transferOwnership.call(addressDYYBYL3, {from: accounts[0]});
//		const boolABY952F = await CryptoSecureBankTokenbE5wGL.transfer.call(addressZeE0lvp, uintB5XW4YH, {from: accounts[3]});

		assert.equal(boolltvdNaZ, false)
		assert.equal(uinttTRq8ji, BigInt("0"))
		await expect(CryptoSecureBankTokenbE5wGL.transferOwnership.call(addressDYYBYL3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEyZfFWz = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintnx4uvhD = BigInt("1129")
		const addressEds4rnT = "0x0000000000000000000000000000000000000001"
		const addressFfSR3OY = accounts[0]
		const uinty3MtXj3 = BigInt("826")
		const addressRNzIcg = "0x0000000000000000000000000000000000000001"
//		const boolIUMV3Z = await CryptoSecureBankTokenEyZfFWz.transfer.call(addressEds4rnT, uintnx4uvhD, {from: accounts[0]});
//		const uintpyPJYMR = await CryptoSecureBankTokenEyZfFWz.balanceOf.call(addressFfSR3OY, {from: accounts[0]});
//		const boolhZw8a3 = await CryptoSecureBankTokenEyZfFWz.transfer.call(addressRNzIcg, uinty3MtXj3, {from: accounts[4]});

		await expect(CryptoSecureBankTokenEyZfFWz.transfer.call(addressEds4rnT, uintnx4uvhD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEyZfFWz = await CryptoSecureBankToken.new({from: accounts[4]});
		const uint9aJL7M = BigInt("1129")
		const addressdLYM3kn = "0x0000000000000000000000000000000000000001"
		const addressUJWjRCf = accounts[1]
		const uintSGdtxO5 = BigInt("826")
		const addresssyyfX6Q = "0x0000000000000000000000000000000000000001"
		const uintqC2QnmP = BigInt("388")
		const uintlfKZq60 = BigInt("1602")
		const addressH9FBZO6 = await CryptoSecureBankTokenEyZfFWz.getOwner.call({from: accounts[1]});
//		const boolIUMV3Z = await CryptoSecureBankTokenEyZfFWz.transfer.call(addressdLYM3kn, uint9aJL7M, {from: accounts[0]});
//		const uintpyPJYMR = await CryptoSecureBankTokenEyZfFWz.balanceOf.call(addressUJWjRCf, {from: accounts[0]});
//		const boolhZw8a3 = await CryptoSecureBankTokenEyZfFWz.transfer.call(addresssyyfX6Q, uintSGdtxO5, {from: accounts[4]});
//		const uintfv0upZA = await CryptoSecureBankTokenEyZfFWz.setParams.call(uintlfKZq60, uintqC2QnmP, {from: accounts[0]});

		assert.equal(addressH9FBZO6, 0x9F9a4C9d4cb9B72dB33372222B6edCDf2BA3e09d)
		await expect(CryptoSecureBankTokenEyZfFWz.transfer.call(addressdLYM3kn, uint9aJL7M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEyZfFWz = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintUWFFlNa = BigInt("1")
		const address9UpKUn = accounts[0]
		const uintHh5uhq = BigInt("1129")
		const addressn7IXqXl = "0x0000000000000000000000000000000000000001"
		const addressG5gTbpj = accounts[1]
		const uinthCUBacb = BigInt("826")
		const addresssq343ed = "0x0000000000000000000000000000000000000001"
		const uintaGzrKny = BigInt("388")
		const uintyyGhOwK = BigInt("1602")
		const addressH9FBZO6 = await CryptoSecureBankTokenEyZfFWz.getOwner.call({from: accounts[1]});
		const uintpmQjtGh = await CryptoSecureBankTokenEyZfFWz.totalSupply.call({from: accounts[2]});
//		const boolsY8MUWa = await CryptoSecureBankTokenEyZfFWz.transfer.call(address9UpKUn, uintUWFFlNa, {from: accounts[5]});
//		const boolIUMV3Z = await CryptoSecureBankTokenEyZfFWz.transfer.call(addressn7IXqXl, uintHh5uhq, {from: accounts[0]});
//		const uintpyPJYMR = await CryptoSecureBankTokenEyZfFWz.balanceOf.call(addressG5gTbpj, {from: accounts[0]});
//		const boolhZw8a3 = await CryptoSecureBankTokenEyZfFWz.transfer.call(addresssq343ed, uinthCUBacb, {from: accounts[4]});
//		const uintfv0upZA = await CryptoSecureBankTokenEyZfFWz.setParams.call(uintyyGhOwK, uintaGzrKny, {from: accounts[0]});

		assert.equal(addressH9FBZO6, 0x9F9a4C9d4cb9B72dB33372222B6edCDf2BA3e09d)
		assert.equal(uintpmQjtGh, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenEyZfFWz.transfer.call(address9UpKUn, uintUWFFlNa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEyZfFWz = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintehbZiHm = BigInt("999")
		const addressTs8dTIc = accounts[0]
		const uintnLh3VNv = BigInt("1")
		const addressn0DaTT8 = accounts[0]
		const uintzaF8UL4 = BigInt("1129")
		const addressPjqljoS = "0x0000000000000000000000000000000000000001"
		const addressip8jz3J = accounts[1]
		const addressTdcLLW6 = accounts[2]
		const uintwIMkoKR = BigInt("826")
		const addressqavP7CS = "0x0000000000000000000000000000000000000001"
		const boolSFuqQ07 = await CryptoSecureBankTokenEyZfFWz.approve.call(addressTs8dTIc, uintehbZiHm, {from: accounts[1]});
		const addressH9FBZO6 = await CryptoSecureBankTokenEyZfFWz.getOwner.call({from: accounts[1]});
		const uintpmQjtGh = await CryptoSecureBankTokenEyZfFWz.totalSupply.call({from: accounts[2]});
//		const boolsY8MUWa = await CryptoSecureBankTokenEyZfFWz.transfer.call(addressn0DaTT8, uintnLh3VNv, {from: accounts[5]});
//		const boolIUMV3Z = await CryptoSecureBankTokenEyZfFWz.transfer.call(addressPjqljoS, uintzaF8UL4, {from: accounts[0]});
//		const uintpyPJYMR = await CryptoSecureBankTokenEyZfFWz.balanceOf.call(addressip8jz3J, {from: accounts[0]});
//		const uintLoEdNBi = await CryptoSecureBankTokenEyZfFWz.balanceOf.call(addressTdcLLW6, {from: accounts[4]});
//		const boolhZw8a3 = await CryptoSecureBankTokenEyZfFWz.transfer.call(addressqavP7CS, uintwIMkoKR, {from: accounts[4]});

		assert.equal(addressH9FBZO6, 0x9F9a4C9d4cb9B72dB33372222B6edCDf2BA3e09d)
		assert.equal(boolSFuqQ07, true)
		assert.equal(uintpmQjtGh, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenEyZfFWz.transfer.call(addressn0DaTT8, uintnLh3VNv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbE5wGL = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressiEo0zZ = "0x0000000000000000000000000000000000000001"
		const addressdVpsELr = accounts[4]
		const uintz68dwdT = BigInt("733")
		const addressQplmJNo = accounts[4]
		const addresskDT2h8z = accounts[1]
		const uintecqepk = BigInt("2028")
		const addressAJmHln = "0x0000000000000000000000000000000000000001"
		const uinttTRq8ji = await CryptoSecureBankTokenbE5wGL.allowance.call(addressdVpsELr, addressiEo0zZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolqomkK9C = await CryptoSecureBankTokenbE5wGL.transfer.call(addressQplmJNo, uintz68dwdT, {from: accounts[5]});
		const uintJ5mcdxr = await CryptoSecureBankTokenbE5wGL.balanceOf.call(addresskDT2h8z, {from: accounts[3]});
//		const boolABY952F = await CryptoSecureBankTokenbE5wGL.transfer.call(addressAJmHln, uintecqepk, {from: accounts[3]});

		assert.equal(boolqomkK9C, true)
		assert.equal(uintJ5mcdxr, BigInt("0"))
		assert.equal(uinttTRq8ji, BigInt("0"))
		await expect(CryptoSecureBankTokenbE5wGL.transfer.call(addressAJmHln, uintecqepk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbE5wGL = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressQ13pPqf = "0x0000000000000000000000000000000000000001"
		const addressS05JPeq = accounts[4]
		const uintOTc5utD = BigInt("195")
		const addressRpg3rdW = accounts[0]
		const addressuFhjzj = accounts[1]
		const uinttGfdWp6 = BigInt("669")
		const addressmsGrt6Q = accounts[2]
		const addressKgG93B = accounts[4]
		const addressDAG5PUK = accounts[2]
		const uinttTRq8ji = await CryptoSecureBankTokenbE5wGL.allowance.call(addressS05JPeq, addressQ13pPqf, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAwR3JPm = await CryptoSecureBankTokenbE5wGL.transferFrom.call(addressuFhjzj, addressRpg3rdW, uintOTc5utD, {from: accounts[2]});
//		const boolK2EvyBG = await CryptoSecureBankTokenbE5wGL.transferFrom.call(addressKgG93B, addressmsGrt6Q, uinttGfdWp6, {from: accounts[2]});
//		const boolltvdNaZ = await CryptoSecureBankTokenbE5wGL.getBlackListStatus.call(addressDAG5PUK, {from: accounts[4]});

		assert.equal(uinttTRq8ji, BigInt("0"))
		await expect(CryptoSecureBankTokenbE5wGL.transferFrom.call(addressuFhjzj, addressRpg3rdW, uintOTc5utD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKN4FI1c = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintnyVd9sU = BigInt("1492")
		const addresscBI2m0H = accounts[0]
		const uinttCCf5uo = BigInt("1218")
		const uintls1r8V6 = BigInt("1560")
		const addressxQklEq = accounts[1]
		const addresss5rSvtb = accounts[2]
		const boolQ0YEoqE = await CryptoSecureBankTokenKN4FI1c.approve.call(addresscBI2m0H, uintnyVd9sU, {from: accounts[0]});
		const boolvTp6SJ5 = await CryptoSecureBankTokenKN4FI1c.redeem.call(uinttCCf5uo, {from: accounts[0]});
//		await CryptoSecureBankTokenKN4FI1c.pause.call({from: accounts[2]});
//		const boolbhZczVb = await CryptoSecureBankTokenKN4FI1c.approve.call(addressxQklEq, uintls1r8V6, {from: accounts[3]});
//		const uintFzMsvQW = await CryptoSecureBankTokenKN4FI1c.balanceOf.call(addresss5rSvtb, {from: accounts[3]});

		assert.equal(boolQ0YEoqE, true)
		assert.equal(boolvTp6SJ5, true)
		await expect(CryptoSecureBankTokenKN4FI1c.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenBGsXO6I = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintfUN0zU = BigInt("277")
		const uintM0fSr9 = BigInt("1191")
		const uintimClvbZ = BigInt("2042")
		const uintiQ11kdo = BigInt("413")
		const addressiH6h9Gu = accounts[1]
//		const uint646eV9 = await CryptoSecureBankTokenBGsXO6I.setParams.call(uintM0fSr9, uintfUN0zU, {from: accounts[4]});
//		await CryptoSecureBankTokenBGsXO6I.pause.call({from: accounts[2]});
//		await CryptoSecureBankTokenBGsXO6I.whenNotPaused.call({from: accounts[4]});
//		const boolmzNqOs = await CryptoSecureBankTokenBGsXO6I.redeem.call(uintimClvbZ, {from: accounts[0]});
//		const booluGdZQv = await CryptoSecureBankTokenBGsXO6I.transfer.call(addressiH6h9Gu, uintiQ11kdo, {from: accounts[3]});

		await expect(CryptoSecureBankTokenBGsXO6I.setParams.call(uintM0fSr9, uintfUN0zU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbE5wGL = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressj79mUwH = accounts[5]
		const addressDsSe6A1 = "0x0000000000000000000000000000000000000001"
		const addressMQ7APo = accounts[4]
		const uintScECi29 = BigInt("761")
		const addressKAzK5U = accounts[4]
		const addressGtafBwo = accounts[1]
		const uintVI8D8SN = BigInt("2028")
		const addressqRbjX9A = "0x0000000000000000000000000000000000000001"
		const uintKvD10E = await CryptoSecureBankTokenbE5wGL.totalSupply.call({from: accounts[1]});
		const addressZ2gTJk = await CryptoSecureBankTokenbE5wGL.transferOwnership.call(addressj79mUwH, {from: accounts[5]});
		const uinttTRq8ji = await CryptoSecureBankTokenbE5wGL.allowance.call(addressMQ7APo, addressDsSe6A1, {from: "0x0000000000000000000000000000000000000001"});
		const boolqomkK9C = await CryptoSecureBankTokenbE5wGL.transfer.call(addressKAzK5U, uintScECi29, {from: accounts[5]});
		const uintJ5mcdxr = await CryptoSecureBankTokenbE5wGL.balanceOf.call(addressGtafBwo, {from: accounts[3]});
//		const boolABY952F = await CryptoSecureBankTokenbE5wGL.transfer.call(addressqRbjX9A, uintVI8D8SN, {from: accounts[3]});

		assert.equal(boolqomkK9C, true)
		assert.equal(uintJ5mcdxr, BigInt("0"))
		assert.equal(uintKvD10E, BigInt("100000000000000000000000000"))
		assert.equal(uinttTRq8ji, BigInt("0"))
		await expect(CryptoSecureBankTokenbE5wGL.transfer.call(addressqRbjX9A, uintVI8D8SN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenrpVDifC = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressl9NJNJm = accounts[4]
		const addresssYpBlBq = "0x0000000000000000000000000000000000000001"
		const addressHYrwsaf = accounts[2]
		const addressm9NVaRS = await CryptoSecureBankTokenrpVDifC.getOwner.call({from: accounts[4]});
		const addressUvea0iZ = await CryptoSecureBankTokenrpVDifC.removeBlackList.call(addressl9NJNJm, {from: accounts[3]});
//		const addressFVNbUKO = await CryptoSecureBankTokenrpVDifC.transferOwnership.call(addresssYpBlBq, {from: accounts[4]});
//		const uintXoEu2rI = await CryptoSecureBankTokenrpVDifC.balanceOf.call(addressHYrwsaf, {from: accounts[4]});

		assert.equal(addressm9NVaRS, 0xc43861a98e46E95138C7a310f0fEF7470452fcc4)
		await expect(CryptoSecureBankTokenrpVDifC.transferOwnership.call(addresssYpBlBq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVDSPYTI = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintXeIfE6F = BigInt("1824")
		const addressKtI2lob = accounts[0]
		const addressQRdzHa1 = accounts[0]
		const boolqo04Aht = await CryptoSecureBankTokenVDSPYTI.approve.call(addressKtI2lob, uintXeIfE6F, {from: accounts[2]});
//		const addressCpoDjlm = await CryptoSecureBankTokenVDSPYTI.destroyBlackFunds.call(addressQRdzHa1, {from: accounts[0]});

		assert.equal(boolqo04Aht, true)
		await expect(CryptoSecureBankTokenVDSPYTI.destroyBlackFunds.call(addressQRdzHa1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKN4FI1c = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressIpaZmbh = accounts[3]
		const addressHw0Zdb1 = accounts[2]
		const addresssWnaHvi = "0x0000000000000000000000000000000000000001"
		const uintFzMsvQW = await CryptoSecureBankTokenKN4FI1c.balanceOf.call(addressIpaZmbh, {from: accounts[3]});
		const boolwdpdlIW = await CryptoSecureBankTokenKN4FI1c.deprecate.call(addressHw0Zdb1, {from: accounts[0]});
//		const boolvU1rLjq = await CryptoSecureBankTokenKN4FI1c.deprecate.call(addresssWnaHvi, {from: accounts[2]});

		assert.equal(boolwdpdlIW, true)
		assert.equal(uintFzMsvQW, BigInt("0"))
		await expect(CryptoSecureBankTokenKN4FI1c.deprecate.call(addresssWnaHvi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEyZfFWz = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintRIcJyko = BigInt("0")
		const addressDPYur79 = accounts[0]
		const addresseNbNA9I = accounts[4]
		const uintt9yl2yX = BigInt("1129")
		const addressDPfeEbA = "0x0000000000000000000000000000000000000001"
		const addressMPU6vLO = accounts[2]
		const uintO8weY5G = BigInt("388")
		const uinthJ4Aplg = BigInt("1602")
		const addressH9FBZO6 = await CryptoSecureBankTokenEyZfFWz.getOwner.call({from: accounts[1]});
		const boolsY8MUWa = await CryptoSecureBankTokenEyZfFWz.transfer.call(addressDPYur79, uintRIcJyko, {from: accounts[5]});
		const uintttXPip = await CryptoSecureBankTokenEyZfFWz.balanceOf.call(addresseNbNA9I, {from: accounts[3]});
//		const boolIUMV3Z = await CryptoSecureBankTokenEyZfFWz.transfer.call(addressDPfeEbA, uintt9yl2yX, {from: accounts[0]});
//		const uintpyPJYMR = await CryptoSecureBankTokenEyZfFWz.balanceOf.call(addressMPU6vLO, {from: accounts[0]});
//		const uintfv0upZA = await CryptoSecureBankTokenEyZfFWz.setParams.call(uinthJ4Aplg, uintO8weY5G, {from: accounts[0]});

		assert.equal(addressH9FBZO6, 0x9F9a4C9d4cb9B72dB33372222B6edCDf2BA3e09d)
		assert.equal(boolsY8MUWa, true)
		assert.equal(uintttXPip, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenEyZfFWz.transfer.call(addressDPfeEbA, uintt9yl2yX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhfEaIFU = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswHQuix = accounts[0]
		const address5PZqGH = accounts[3]
		const addressiPD9I88 = "0x0000000000000000000000000000000000000001"
		const uintDJZpZHk = await CryptoSecureBankTokenhfEaIFU.totalSupply.call({from: accounts[4]});
		const uintDavG1qI = await CryptoSecureBankTokenhfEaIFU.allowance.call(address5PZqGH, addresswHQuix, {from: accounts[2]});
		const uintvTeCoro = await CryptoSecureBankTokenhfEaIFU.balanceOf.call(addressiPD9I88, {from: accounts[3]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbE5wGL = await CryptoSecureBankToken.new({from: accounts[5]});
		const addresseNxr5Pi = accounts[3]
		const addressFqEf9VX = "0x0000000000000000000000000000000000000001"
		const addressxHjbObo = accounts[4]
		const addressz9UnGG = accounts[0]
		const addressKmcXjZ = accounts[2]
		const addressc2tSGwR = accounts[4]
		const uintpeDBlOM = BigInt("1966")
		const addressBwgLF56 = accounts[4]
		const uintPgpAIeS = BigInt("53")
		const addressEysCPW5 = accounts[4]
		const addressEKvDiQJ = accounts[4]
		const addresswz61TO = accounts[1]
		const uintWSzDv2w = BigInt("2027")
		const addressQ7EfcJ = "0x0000000000000000000000000000000000000001"
		const addressEYtkLVf = await CryptoSecureBankTokenbE5wGL.setOwner2.call(addresseNxr5Pi, {from: accounts[5]});
		const uinttTRq8ji = await CryptoSecureBankTokenbE5wGL.allowance.call(addressxHjbObo, addressFqEf9VX, {from: "0x0000000000000000000000000000000000000001"});
		const uintdSp2Ksl = await CryptoSecureBankTokenbE5wGL.balanceOf.call(addressz9UnGG, {from: accounts[2]});
		const uintICEwxE = await CryptoSecureBankTokenbE5wGL.allowance.call(addressc2tSGwR, addressKmcXjZ, {from: accounts[3]});
		const boolqomkK9C = await CryptoSecureBankTokenbE5wGL.transfer.call(addressBwgLF56, uintpeDBlOM, {from: accounts[5]});
//		const bool4imW6d = await CryptoSecureBankTokenbE5wGL.transferFrom.call(addressEKvDiQJ, addressEysCPW5, uintPgpAIeS, {from: accounts[2]});
//		const uintJ5mcdxr = await CryptoSecureBankTokenbE5wGL.balanceOf.call(addresswz61TO, {from: accounts[3]});
//		const boolABY952F = await CryptoSecureBankTokenbE5wGL.transfer.call(addressQ7EfcJ, uintWSzDv2w, {from: accounts[3]});
//		await CryptoSecureBankTokenbE5wGL.pause.call({from: accounts[0]});

		assert.equal(boolqomkK9C, true)
		assert.equal(uintICEwxE, BigInt("0"))
		assert.equal(uintdSp2Ksl, BigInt("0"))
		assert.equal(uinttTRq8ji, BigInt("0"))
		await expect(CryptoSecureBankTokenbE5wGL.transferFrom.call(addressEKvDiQJ, addressEysCPW5, uintPgpAIeS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKN4FI1c = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresssDh7cIB = accounts[2]
		const addressUWvhlJj = accounts[5]
		const uintkuuQlDB = BigInt("650")
		const uintFzMsvQW = await CryptoSecureBankTokenKN4FI1c.balanceOf.call(addresssDh7cIB, {from: accounts[3]});
		const addressrKmymiS = await CryptoSecureBankTokenKN4FI1c.addBlackList.call(addressUWvhlJj, {from: accounts[0]});
//		const uintfKf2KdG = await CryptoSecureBankTokenKN4FI1c.onlyPayloadSize.call(uintkuuQlDB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintFzMsvQW, BigInt("0"))
		await expect(CryptoSecureBankTokenKN4FI1c.onlyPayloadSize.call(uintkuuQlDB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})