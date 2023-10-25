const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALs0hB19A = await NAL.new({from: accounts[5]});
		const uinthestb6C = BigInt("909")
		const addressoZSwFln = accounts[1]
		const boolEqH1YpU = await NALs0hB19A.transfer.call(addressoZSwFln, uinthestb6C, {from: accounts[2]});
		const uint256sr01iu = await NALs0hB19A.totalSupply.call({from: accounts[5]});

		await expect(NALs0hB19A.transfer.call(addressoZSwFln, uinthestb6C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZeJM3Zl = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCC1U7Ru = BigInt("564")
		const addressBMfsMWN = accounts[2]
		const addressGA8ShXl = "0x0000000000000000000000000000000000000001"
		const addressaVlp9Lm = accounts[3]
		const boolyMiCkX = await NALZeJM3Zl.transferFrom.call(addressGA8ShXl, addressBMfsMWN, uintCC1U7Ru, {from: accounts[0]});
		const address8Urwoa = await NALZeJM3Zl.notFrozen.call(addressaVlp9Lm, {from: accounts[1]});
		await NALZeJM3Zl.pause.call({from: accounts[2]});
	});

	it('test for NAL', async () => {
		const stringxyZjis1 = "TaACmpQfTu6T"
		const stringXuXtKW = "EBQWF6hOcGz1zyqRTDUhuSeVl1Xe2QOKx96diB6Tw1V3cNJejyLkdHgXh1iPwnYR5gQdHQfKCeL"
		const uintgGL3fAc = BigInt("225")
		const NALCWb0YaD = await NAL.new(stringxyZjis1, stringXuXtKW, uintgGL3fAc, {from: accounts[0]});
		const uintiy7V5zM = BigInt("759")
		const addressqvnuYfk = accounts[5]
		const address8bxVsT = accounts[4]
		const uintc2FXvGF = BigInt("1988")
		const addressPDh8gUO = accounts[2]
		const addressc6GOLX = accounts[1]
		const boolrPtkaBc = await NALCWb0YaD.decreaseAllowance.call(addressqvnuYfk, uintiy7V5zM, {from: "0x0000000000000000000000000000000000000001"});
		const addressOproBjQ = await NALCWb0YaD.removeAdmin.call(address8bxVsT, {from: accounts[1]});
		const boolAtRqw9 = await NALCWb0YaD.transferFrom.call(addressc6GOLX, addressPDh8gUO, uintc2FXvGF, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALZsoYq7B = await NAL.new({from: accounts[4]});
		const uintVSazWuu = BigInt("94")
		const addresspkLwmag = accounts[3]
		const addressXuq90s = accounts[5]
		const uintpyZbAme = BigInt("799")
		const addressLhvPFHq = accounts[4]
		const uintR9pdshP = BigInt("55")
		const addressZUNooyr = "0x0000000000000000000000000000000000000001"
		const uintHc2qvlX = BigInt("1903")
		const uintRp4wki = BigInt("749")
		const address1q2XQI = accounts[0]
		const boolXmJnBmp = await NALZsoYq7B.transferFrom.call(addressXuq90s, addresspkLwmag, uintVSazWuu, {from: accounts[3]});
		const boolafETCWQ = await NALZsoYq7B.increaseAllowance.call(addressLhvPFHq, uintpyZbAme, {from: accounts[4]});
		const addressXuquF68 = await NALZsoYq7B.burnFrom.call(addressZUNooyr, uintR9pdshP, {from: accounts[4]});
		await NALZsoYq7B.onlyAdmin.call({from: accounts[1]});
		const booloBzL5eI = await NALZsoYq7B.lock.call(address1q2XQI, uintRp4wki, uintHc2qvlX, {from: accounts[5]});

		await expect(NALZsoYq7B.transferFrom.call(addressXuq90s, addresspkLwmag, uintVSazWuu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdkplwCv = await NAL.new({from: accounts[0]});
		await NALdkplwCv.onlyOwner.call({from: accounts[4]});
		await NALdkplwCv.pause.call({from: "0x0000000000000000000000000000000000000001"});
		await NALdkplwCv.whenPaused.call({from: accounts[4]});
		const boolJvJNY5W = await NALdkplwCv.paused.call({from: accounts[3]});

		await expect(NALdkplwCv.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZWY95b = await NAL.new({from: accounts[0]});
		const uintWO3fH3g = BigInt("984")
		const addressy3mXNi4 = accounts[4]
		const addressUvcH4zV = accounts[2]
		const addressqOF9pK2 = accounts[0]
		const addressnJxtWbD = accounts[4]
		const uint8c9rKWHh = await NALZWY95b.decimals.call({from: accounts[4]});
		const bool2ZHVG1 = await NALZWY95b.transferFrom.call(addressUvcH4zV, addressy3mXNi4, uintWO3fH3g, {from: accounts[3]});
		const uint256MFsOfYA = await NALZWY95b.allowance.call(addressnJxtWbD, addressqOF9pK2, {from: accounts[5]});

		assert.equal(uint8c9rKWHh, BigInt("18"))
		await expect(NALZWY95b.transferFrom.call(addressUvcH4zV, addressy3mXNi4, uintWO3fH3g, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALeMc55D9 = await NAL.new({from: accounts[3]});
		const uintcUnyh2E = BigInt("1689")
		const uintnfqTf3T = BigInt("1477")
		const addressHsGTGC = accounts[3]
		const boolnIIGJ23 = await NALeMc55D9.paused.call({from: accounts[2]});
		await NALeMc55D9.unpause.call({from: accounts[4]});
		const boolUcRHRs = await NALeMc55D9.lock.call(addressHsGTGC, uintnfqTf3T, uintcUnyh2E, {from: accounts[0]});

		assert.equal(boolnIIGJ23, false)
		await expect(NALeMc55D9.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs0hB19A = await NAL.new({from: accounts[5]});
		const uintSr6ezfM = BigInt("510")
		const addressFXQtbkJ = accounts[4]
		const uintlVOUE1n = BigInt("909")
		const addresslQtY3Qf = accounts[2]
		const addressnZPuQP8 = "0x0000000000000000000000000000000000000001"
		const addressu64Ge55 = accounts[4]
		const addressAjLHTPu = accounts[1]
		const bool1plPWq = await NALs0hB19A.approve.call(addressFXQtbkJ, uintSr6ezfM, {from: accounts[4]});
		const boolEqH1YpU = await NALs0hB19A.transfer.call(addresslQtY3Qf, uintlVOUE1n, {from: accounts[2]});
		const uint256XslaMnE = await NALs0hB19A.allowance.call(addressu64Ge55, addressnZPuQP8, {from: accounts[3]});
		const uint256sr01iu = await NALs0hB19A.totalSupply.call({from: accounts[5]});
		const addressqiAVT5H = await NALs0hB19A.removeAdmin.call(addressAjLHTPu, {from: accounts[0]});

		assert.equal(bool1plPWq, true)
		await expect(NALs0hB19A.transfer.call(addresslQtY3Qf, uintlVOUE1n, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs0hB19A = await NAL.new({from: accounts[5]});
		const uint256sr01iu = await NALs0hB19A.totalSupply.call({from: accounts[5]});

		assert.equal(uint256sr01iu, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALs0hB19A = await NAL.new({from: accounts[5]});
		const uintnFWZmsX = BigInt("1795")
		const addressC7Kh5Q4 = accounts[0]
		const uintPJPlMzq = BigInt("889")
		const addressyk1Ied = accounts[2]
		const addressSkpAxGZ = "0x0000000000000000000000000000000000000001"
		const addresshycKNhm = accounts[4]
		const boolWzDXNHt = await NALs0hB19A.decreaseAllowance.call(addressC7Kh5Q4, uintnFWZmsX, {from: accounts[5]});
		const boolEqH1YpU = await NALs0hB19A.transfer.call(addressyk1Ied, uintPJPlMzq, {from: accounts[2]});
		const uint256XslaMnE = await NALs0hB19A.allowance.call(addresshycKNhm, addressSkpAxGZ, {from: accounts[3]});
		const uint256sr01iu = await NALs0hB19A.totalSupply.call({from: accounts[5]});

		await expect(NALs0hB19A.decreaseAllowance.call(addressC7Kh5Q4, uintnFWZmsX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZWY95b = await NAL.new({from: accounts[0]});
		const uintiQQBBWT = BigInt("2036")
		const uintpVfTxwr = BigInt("1429")
		const address4lsOrg = accounts[1]
		const uintdFmQV5D = BigInt("984")
		const addressDxxKPYL = accounts[5]
		const addressNDlMyP0 = accounts[2]
		const uintpCsZgdG = BigInt("3")
		const addressiAIPzBR = accounts[3]
		const addressS50qdw4 = accounts[0]
		const addressQ6X9J7a = accounts[4]
		const uintvD9pa16 = BigInt("1493")
		const addressgdtg2Ge = accounts[1]
		const uint8c9rKWHh = await NALZWY95b.decimals.call({from: accounts[4]});
		const boolMSU5gbw = await NALZWY95b.transferWithLock.call(address4lsOrg, uintpVfTxwr, uintiQQBBWT, {from: accounts[0]});
		const bool2ZHVG1 = await NALZWY95b.transferFrom.call(addressNDlMyP0, addressDxxKPYL, uintdFmQV5D, {from: accounts[3]});
		const boolWgjvEm = await NALZWY95b.increaseAllowance.call(addressiAIPzBR, uintpCsZgdG, {from: accounts[5]});
		const uint256MFsOfYA = await NALZWY95b.allowance.call(addressQ6X9J7a, addressS50qdw4, {from: accounts[5]});
		const boolMPvliKp = await NALZWY95b.unlock.call(addressgdtg2Ge, uintvD9pa16, {from: accounts[3]});

		assert.equal(boolMSU5gbw, true)
		assert.equal(uint8c9rKWHh, BigInt("18"))
		await expect(NALZWY95b.transferFrom.call(addressNDlMyP0, addressDxxKPYL, uintdFmQV5D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs0hB19A = await NAL.new({from: accounts[5]});
		const addresso8OBpYn = accounts[3]
		const uintNa4xGXu = BigInt("1367")
		const addressNja0Cem = accounts[1]
		const uint256MlzHpyX = await NALs0hB19A.balanceOf.call(addresso8OBpYn, {from: accounts[1]});
		const boolEqH1YpU = await NALs0hB19A.transfer.call(addressNja0Cem, uintNa4xGXu, {from: accounts[2]});
		const uint256sr01iu = await NALs0hB19A.totalSupply.call({from: accounts[5]});

		assert.equal(uint256MlzHpyX, BigInt("0"))
		await expect(NALs0hB19A.transfer.call(addressNja0Cem, uintNa4xGXu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZWY95b = await NAL.new({from: accounts[0]});
		const uintFThKjC0 = BigInt("780")
		const addressSWykUwl = accounts[4]
		const addressyrLJM31 = accounts[0]
		const addressJ1Md9Ay = accounts[4]
		const uint8c9rKWHh = await NALZWY95b.decimals.call({from: accounts[4]});
		const uint256ecuz2sW = await NALZWY95b.burn.call(uintFThKjC0, {from: accounts[1]});
		const boolOqP3zuY = await NALZWY95b.freezeAccount.call(addressSWykUwl, {from: accounts[3]});
		await NALZWY95b.renounceAdmin.call({from: accounts[3]});
		const uint256MFsOfYA = await NALZWY95b.allowance.call(addressJ1Md9Ay, addressyrLJM31, {from: accounts[5]});

		assert.equal(uint8c9rKWHh, BigInt("18"))
		await expect(NALZWY95b.burn.call(uintFThKjC0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALeMc55D9 = await NAL.new({from: accounts[3]});
		const uintwWjko0 = BigInt("1703")
		const uinteP9j9M4 = BigInt("1477")
		const addressw00kUts = accounts[3]
		const stringpov0EkR = await NALeMc55D9.symbol.call({from: accounts[2]});
		const boolnIIGJ23 = await NALeMc55D9.paused.call({from: accounts[2]});
		await NALeMc55D9.unpause.call({from: accounts[4]});
		const boolUcRHRs = await NALeMc55D9.lock.call(addressw00kUts, uinteP9j9M4, uintwWjko0, {from: accounts[0]});

		assert.equal(boolnIIGJ23, false)
		assert.equal(stringpov0EkR, "NAL")
		await expect(NALeMc55D9.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs0hB19A = await NAL.new({from: accounts[5]});
		const uintJ6VO7t = BigInt("1008")
		const addressXeZnrkv = accounts[4]
		const uintqnih173 = BigInt("1737")
		const addressUo3Z0E4 = accounts[2]
		const uintokS1wRq = BigInt("909")
		const addressqXdh8WB = accounts[2]
		const boolV5GRRrB = await NALs0hB19A.increaseAllowance.call(addressXeZnrkv, uintJ6VO7t, {from: accounts[5]});
		const boolV0b7UBV = await NALs0hB19A.decreaseAllowance.call(addressUo3Z0E4, uintqnih173, {from: accounts[0]});
		const boolEqH1YpU = await NALs0hB19A.transfer.call(addressqXdh8WB, uintokS1wRq, {from: accounts[2]});
		const uint256sr01iu = await NALs0hB19A.totalSupply.call({from: accounts[5]});

		assert.equal(boolV5GRRrB, true)
		await expect(NALs0hB19A.decreaseAllowance.call(addressUo3Z0E4, uintqnih173, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs0hB19A = await NAL.new({from: accounts[5]});
		const uintbL6mKIP = BigInt("641")
		const addressYIyGgyd = accounts[0]
		await NALs0hB19A.pause.call({from: accounts[5]});
		const addresspu3o8vz = await NALs0hB19A.burnFrom.call(addressYIyGgyd, uintbL6mKIP, {from: accounts[3]});
		const uint256sr01iu = await NALs0hB19A.totalSupply.call({from: accounts[5]});

		await expect(NALs0hB19A.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZWY95b = await NAL.new({from: accounts[0]});
		const addressqjiY5e5 = accounts[0]
		const addressrcmNdZ = accounts[0]
		const addressStZOIEu = accounts[4]
		const boolc6znNnu = await NALZWY95b.isOwner.call(addressqjiY5e5, {from: accounts[3]});
		const uint8c9rKWHh = await NALZWY95b.decimals.call({from: accounts[4]});
		const uint256MFsOfYA = await NALZWY95b.allowance.call(addressStZOIEu, addressrcmNdZ, {from: accounts[5]});

		assert.equal(boolc6znNnu, true)
		assert.equal(uint256MFsOfYA, BigInt("0"))
		assert.equal(uint8c9rKWHh, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALWxu2arY = await NAL.new({from: accounts[0]});
		const addressFq9DepX = accounts[1]
		const uintXL5vQCE = BigInt("344")
		const addressRwSNSPs = accounts[4]
		const addressmsa2BSj = accounts[0]
		const uintKMaey7g = BigInt("1403")
		const uintd0FlMKb = BigInt("550")
		const addresszJWKNzM = accounts[0]
		const boolkTKg1tP = await NALWxu2arY.isOwner.call(addressFq9DepX, {from: accounts[3]});
		const boolCTczDDL = await NALWxu2arY.unlock.call(addressRwSNSPs, uintXL5vQCE, {from: accounts[0]});
		const boolT1ec7FW = await NALWxu2arY.freezeAccount.call(addressmsa2BSj, {from: "0x0000000000000000000000000000000000000001"});
		await NALWxu2arY.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const booljFY3ODe = await NALWxu2arY.lock.call(addresszJWKNzM, uintd0FlMKb, uintKMaey7g, {from: accounts[0]});
		const uint8lBNSDp = await NALWxu2arY.decimals.call({from: accounts[0]});

		assert.equal(boolkTKg1tP, false)
		await expect(NALWxu2arY.unlock.call(addressRwSNSPs, uintXL5vQCE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs0hB19A = await NAL.new({from: accounts[5]});
		const addresskmvoXFK = accounts[3]
		const uintregZSQb = BigInt("629")
		const addressm18xywK = accounts[2]
		const address52Etj7 = accounts[4]
		const addressRZhmls3 = accounts[2]
		await NALs0hB19A.renounceAdmin.call({from: accounts[3]});
		const uint256MlzHpyX = await NALs0hB19A.balanceOf.call(addresskmvoXFK, {from: accounts[1]});
		const boolCuajh7 = await NALs0hB19A.transferFrom.call(address52Etj7, addressm18xywK, uintregZSQb, {from: accounts[0]});
		const uint256sr01iu = await NALs0hB19A.totalSupply.call({from: accounts[5]});
		const uint256mVJK2t1 = await NALs0hB19A.balanceOf.call(addressRZhmls3, {from: accounts[2]});
		await NALs0hB19A.unpause.call({from: accounts[4]});

		await expect(NALs0hB19A.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALQYdABK1 = await NAL.new({from: accounts[0]});
		const uintg5ps6b0 = BigInt("1509")
		const uintVlRBcO = BigInt("730")
		const addressl0D3mll = accounts[1]
		const uintacWvYTL = BigInt("1742")
		const addressPL4yPRh = accounts[0]
		const addressQYcev4 = accounts[2]
		const stringDasgVAd = await NALQYdABK1.name.call({from: accounts[2]});
		const boolexZ8oGg = await NALQYdABK1.transferWithLock.call(addressl0D3mll, uintVlRBcO, uintg5ps6b0, {from: accounts[2]});
		const boolCA6RWxj = await NALQYdABK1.transferFrom.call(addressQYcev4, addressPL4yPRh, uintacWvYTL, {from: accounts[0]});

		assert.equal(stringDasgVAd, "Personal Token")
		await expect(NALQYdABK1.transferWithLock.call(addressl0D3mll, uintVlRBcO, uintg5ps6b0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs0hB19A = await NAL.new({from: accounts[5]});
		const addresst9m6lgW = accounts[5]
		const address2SBNAU = "0x0000000000000000000000000000000000000001"
		const uint256MlzHpyX = await NALs0hB19A.balanceOf.call(addresst9m6lgW, {from: accounts[1]});
		const addressKTuFuDt = await NALs0hB19A.removeAdmin.call(address2SBNAU, {from: accounts[5]});

		assert.equal(uint256MlzHpyX, BigInt("2000000000000000000000000000"))
		await expect(NALs0hB19A.removeAdmin.call(address2SBNAU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZgVDuga = await NAL.new({from: accounts[3]});
		const uintD5RwQG = BigInt("603")
		const uintxR6n08o = BigInt("918")
		const addressmu0KV2 = accounts[3]
		const uintBbbCSMl = BigInt("1252")
		const uintupiSYp = BigInt("1096")
		const addressXAV2azI = accounts[4]
		const stringAb8Ily = await NALZgVDuga.name.call({from: accounts[2]});
		const boolkkFj6B6 = await NALZgVDuga.lock.call(addressmu0KV2, uintxR6n08o, uintD5RwQG, {from: accounts[3]});
		const boolAMjm40D = await NALZgVDuga.transferWithLock.call(addressXAV2azI, uintupiSYp, uintBbbCSMl, {from: accounts[0]});

		assert.equal(boolkkFj6B6, true)
		assert.equal(stringAb8Ily, "Personal Token")
		await expect(NALZgVDuga.transferWithLock.call(addressXAV2azI, uintupiSYp, uintBbbCSMl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})