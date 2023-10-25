const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringwvjxU8F = "s"
		const stringXezBNy = "1Cp7uOLbk5tstbuEOW43dX85lSuNa2Lqo6wlbXUzoy3nkO3jrZ"
		const uintU84cKp8 = BigInt("191")
		const LUPm1qyvms = await LUP.new(stringwvjxU8F, stringXezBNy, uintU84cKp8, {from: accounts[3]});
		const addressxVxwaHO = accounts[1]
		const boolXowiBBS = false
		const addressUnZGaYm = accounts[1]
		const stringoTyRIud = await LUPm1qyvms.symbol.call({from: accounts[4]});
		const stringjmkxnVN = await LUPm1qyvms.symbol.call({from: accounts[1]});
		const uint256qSAjGfg = await LUPm1qyvms.balanceOf.call(addressxVxwaHO, {from: accounts[5]});
		const boolYByFrx7 = await LUPm1qyvms.freezeAccount.call(addressUnZGaYm, boolXowiBBS, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPr2ysf3f = await LUP.new({from: accounts[1]});
		const boollYr0ISl = true
		const addressKSwthXb = accounts[1]
		const boolYzP9oI6 = true
		const addresslMz4l4v = accounts[4]
		const uint8FZLP0W = await LUPr2ysf3f.decimals.call({from: accounts[2]});
//		const boolYxLQCC = await LUPr2ysf3f.freezeAccount.call(addressKSwthXb, boollYr0ISl, {from: accounts[0]});
//		const boolRE6YKLY = await LUPr2ysf3f.freezeAccount.call(addresslMz4l4v, boolYzP9oI6, {from: accounts[1]});

		assert.equal(uint8FZLP0W, BigInt("18"))
		await expect(LUPr2ysf3f.freezeAccount.call(addressKSwthXb, boollYr0ISl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPzOlGvdZ = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const boolGsBD9Sn = true
		const addressstUgMbA = accounts[1]
		const uints4Lgto = BigInt("1497")
		const uintj4GecWK = BigInt("1500")
		const addressiOt1D0l = accounts[1]
		const boolTTuakux = await LUPzOlGvdZ.freezeAccount.call(addressstUgMbA, boolGsBD9Sn, {from: accounts[1]});
		const uint8HkXhB6 = await LUPzOlGvdZ.decimals.call({from: accounts[2]});
		const boolRwtONSQ = await LUPzOlGvdZ.transferWithLock.call(addressiOt1D0l, uintj4GecWK, uints4Lgto, {from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPim78HNV = await LUP.new({from: accounts[0]});
		const uintLvCbl8P = BigInt("1989")
		const addresskLE9rBg = accounts[2]
		const uintuBfahe = BigInt("910")
		const uintN2fljbK = BigInt("1739")
		const addressQ09RoN = accounts[0]
		const stringPHrHPnO = await LUPim78HNV.name.call({from: accounts[2]});
		const stringCoPA3R = await LUPim78HNV.symbol.call({from: accounts[0]});
//		const boolPin8GAO = await LUPim78HNV.transfer.call(addresskLE9rBg, uintLvCbl8P, {from: accounts[4]});
//		const boolHpXIrgg = await LUPim78HNV.lock.call(addressQ09RoN, uintN2fljbK, uintuBfahe, {from: accounts[1]});

		assert.equal(stringCoPA3R, "LUP")
		assert.equal(stringPHrHPnO, "LINKUP Token")
		await expect(LUPim78HNV.transfer.call(addresskLE9rBg, uintLvCbl8P, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPim78HNV = await LUP.new({from: accounts[0]});
		const addressLzMmSl1 = accounts[2]
		const uintRcrhcCA = BigInt("1989")
		const addresscJNb8L = accounts[3]
		const uintNYv0Wn = BigInt("910")
		const uintfzEidRQ = BigInt("1739")
		const addressf8BmCm = accounts[0]
		const addressD4ExIv6 = accounts[0]
		const stringPHrHPnO = await LUPim78HNV.name.call({from: accounts[2]});
		const stringCoPA3R = await LUPim78HNV.symbol.call({from: accounts[0]});
		const uint256iLRHVJI = await LUPim78HNV.balanceOf.call(addressLzMmSl1, {from: accounts[1]});
//		const boolPin8GAO = await LUPim78HNV.transfer.call(addresscJNb8L, uintRcrhcCA, {from: accounts[4]});
//		const boolHpXIrgg = await LUPim78HNV.lock.call(addressf8BmCm, uintfzEidRQ, uintNYv0Wn, {from: accounts[1]});
//		const addressx6ECP5W = await LUPim78HNV.notFrozen.call(addressD4ExIv6, {from: accounts[0]});

		assert.equal(stringCoPA3R, "LUP")
		assert.equal(stringPHrHPnO, "LINKUP Token")
		assert.equal(uint256iLRHVJI, BigInt("0"))
		await expect(LUPim78HNV.transfer.call(addresscJNb8L, uintRcrhcCA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPim78HNV = await LUP.new({from: accounts[0]});
		const addressSG1NLl = accounts[4]
		const uintieWuOB5 = BigInt("1093")
		const uintNdc1eXx = BigInt("1579")
		const addressOX3auBL = accounts[3]
		const uinteQ6mhdZ = BigInt("183")
		const uintBNVHIM = BigInt("1521")
		const addressF6UiS2Q = accounts[3]
		const uintpZr9M2A = BigInt("1989")
		const addresslpoo58v = accounts[2]
		const addressGq6Hk6y = accounts[4]
		const boolp2EFu0q = false
		const addressn1HRZYY = accounts[4]
		const uintkMpENcb = BigInt("927")
		const uintu3GrqBI = BigInt("1739")
		const addressj2s8AzM = accounts[0]
		const uintE4eBOuS = BigInt("1249")
		const addressMCgV4NL = accounts[2]
		const stringPHrHPnO = await LUPim78HNV.name.call({from: accounts[2]});
		const uint256aPblXAD = await LUPim78HNV.balanceOf.call(addressSG1NLl, {from: accounts[2]});
		const stringCoPA3R = await LUPim78HNV.symbol.call({from: accounts[0]});
//		const booltjXM1Ia = await LUPim78HNV.lock.call(addressOX3auBL, uintNdc1eXx, uintieWuOB5, {from: accounts[0]});
//		const boolfbFcxMQ = await LUPim78HNV.lock.call(addressF6UiS2Q, uintBNVHIM, uinteQ6mhdZ, {from: accounts[1]});
//		const boolPin8GAO = await LUPim78HNV.transfer.call(addresslpoo58v, uintpZr9M2A, {from: accounts[4]});
//		const addresszQ4DxFH = await LUPim78HNV.upgradeTo.call(addressGq6Hk6y, {from: accounts[2]});
//		const boolTCNQRD3 = await LUPim78HNV.freezeAccount.call(addressn1HRZYY, boolp2EFu0q, {from: accounts[0]});
//		const boolHpXIrgg = await LUPim78HNV.lock.call(addressj2s8AzM, uintu3GrqBI, uintkMpENcb, {from: accounts[1]});
//		const boolEnHKk3p = await LUPim78HNV.unlock.call(addressMCgV4NL, uintE4eBOuS, {from: accounts[0]});

		assert.equal(stringCoPA3R, "LUP")
		assert.equal(stringPHrHPnO, "LINKUP Token")
		assert.equal(uint256aPblXAD, BigInt("0"))
		await expect(LUPim78HNV.lock.call(addressOX3auBL, uintNdc1eXx, uintieWuOB5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPWGtabHJ = await LUP.new({from: accounts[0]});
		const addressPKpM3Oc = accounts[4]
		const addressMtkelRP = accounts[4]
//		const addressbMqV3I = await LUPWGtabHJ.notFrozen.call(addressPKpM3Oc, {from: accounts[3]});
//		const addressV0K2Hx = await LUPWGtabHJ.notFrozen.call(addressMtkelRP, {from: accounts[1]});
//		const stringuAzBQpj = await LUPWGtabHJ.symbol.call({from: accounts[0]});

		await expect(LUPWGtabHJ.notFrozen.call(addressPKpM3Oc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPim78HNV = await LUP.new({from: accounts[0]});
		const addresshF4veTV = accounts[1]
		const booldWoQ7pl = true
		const addressYJDx2UJ = accounts[5]
		const uintMJ0CjSv = BigInt("2035")
		const addressZT2N0pk = accounts[3]
		const uintOiS4uP = BigInt("910")
		const uintrHZCsX0 = BigInt("1739")
		const addresskzWipll = accounts[0]
		const stringPHrHPnO = await LUPim78HNV.name.call({from: accounts[2]});
		const stringCoPA3R = await LUPim78HNV.symbol.call({from: accounts[0]});
		const uint256pO6f7Qq = await LUPim78HNV.balanceOf.call(addresshF4veTV, {from: accounts[1]});
		const boolL7AFFYH = await LUPim78HNV.freezeAccount.call(addressYJDx2UJ, booldWoQ7pl, {from: accounts[0]});
//		const boolPin8GAO = await LUPim78HNV.transfer.call(addressZT2N0pk, uintMJ0CjSv, {from: accounts[4]});
//		const boolHpXIrgg = await LUPim78HNV.lock.call(addresskzWipll, uintrHZCsX0, uintOiS4uP, {from: accounts[1]});

		assert.equal(boolL7AFFYH, true)
		assert.equal(stringCoPA3R, "LUP")
		assert.equal(stringPHrHPnO, "LINKUP Token")
		assert.equal(uint256pO6f7Qq, BigInt("0"))
		await expect(LUPim78HNV.transfer.call(addressZT2N0pk, uintMJ0CjSv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPim78HNV = await LUP.new({from: accounts[0]});
		const addressFX4aKQX = accounts[2]
		const addressHi5MILq = accounts[5]
		const uintUNDqrAh = BigInt("1093")
		const uintBL6xFlL = BigInt("1579")
		const address9k3XUl = accounts[3]
		const uintzklmiUu = BigInt("183")
		const uintyUKn7g8 = BigInt("1521")
		const addressk28jWGM = accounts[3]
		const addresscHHMQL1 = accounts[4]
		const uintJSxhJVE = BigInt("804")
		const addressoGE5tqK = "0x0000000000000000000000000000000000000001"
		const boolp2EFu0q = false
		const addressshsqm6R = accounts[4]
		const uintRTjFQit = BigInt("927")
		const uintU3myu8 = BigInt("1739")
		const addressc8g9D0i = accounts[0]
		const uintIKtNlw = BigInt("1249")
		const addressqAg1bIg = accounts[2]
//		const addressGNP64Af = await LUPim78HNV.upgradeTo.call(addressFX4aKQX, {from: accounts[4]});
//		const stringPHrHPnO = await LUPim78HNV.name.call({from: accounts[2]});
//		const uint256aPblXAD = await LUPim78HNV.balanceOf.call(addressHi5MILq, {from: accounts[2]});
//		const stringmx6orFr = await LUPim78HNV.name.call({from: accounts[5]});
//		const stringCoPA3R = await LUPim78HNV.symbol.call({from: accounts[0]});
//		const booltjXM1Ia = await LUPim78HNV.lock.call(address9k3XUl, uintBL6xFlL, uintUNDqrAh, {from: accounts[0]});
//		const boolfbFcxMQ = await LUPim78HNV.lock.call(addressk28jWGM, uintyUKn7g8, uintzklmiUu, {from: accounts[1]});
//		const addresszQ4DxFH = await LUPim78HNV.upgradeTo.call(addresscHHMQL1, {from: accounts[2]});
//		const boolxCBaiF = await LUPim78HNV.transfer.call(addressoGE5tqK, uintJSxhJVE, {from: accounts[0]});
//		const boolTCNQRD3 = await LUPim78HNV.freezeAccount.call(addressshsqm6R, boolp2EFu0q, {from: accounts[0]});
//		const boolHpXIrgg = await LUPim78HNV.lock.call(addressc8g9D0i, uintU3myu8, uintRTjFQit, {from: accounts[1]});
//		const boolEnHKk3p = await LUPim78HNV.unlock.call(addressqAg1bIg, uintIKtNlw, {from: accounts[0]});

		await expect(LUPim78HNV.upgradeTo.call(addressFX4aKQX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPim78HNV = await LUP.new({from: accounts[0]});
		const uintRKvugy7 = BigInt("559")
		const addresscnKfMZV = accounts[4]
		const uint4Yss9r = BigInt("2045")
		const addressPA6lWq = accounts[0]
		const addressFckpAjS = accounts[1]
		const uintTqf2ond = BigInt("2028")
		const addressYC2bMHh = accounts[3]
		const stringPHrHPnO = await LUPim78HNV.name.call({from: accounts[2]});
//		const boolPSdbhod = await LUPim78HNV.unlock.call(addresscnKfMZV, uintRKvugy7, {from: accounts[0]});
//		const boolH8ZYZN7 = await LUPim78HNV.unlock.call(addressPA6lWq, uint4Yss9r, {from: accounts[1]});
//		const uint256pO6f7Qq = await LUPim78HNV.balanceOf.call(addressFckpAjS, {from: accounts[1]});
//		const boolPin8GAO = await LUPim78HNV.transfer.call(addressYC2bMHh, uintTqf2ond, {from: accounts[4]});

		assert.equal(stringPHrHPnO, "LINKUP Token")
		await expect(LUPim78HNV.unlock.call(addresscnKfMZV, uintRKvugy7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPim78HNV = await LUP.new({from: accounts[0]});
		const uintff5pJa = BigInt("1137")
		const uintsb2kBEK = BigInt("484")
		const address4W6hzw = accounts[0]
		const uintNKGfMXb = BigInt("1980")
		const addressGMKnYU0 = accounts[2]
		const boolAjaPGkX = await LUPim78HNV.lock.call(address4W6hzw, uintsb2kBEK, uintff5pJa, {from: accounts[0]});
//		const boolPin8GAO = await LUPim78HNV.transfer.call(addressGMKnYU0, uintNKGfMXb, {from: accounts[4]});

		assert.equal(boolAjaPGkX, true)
		await expect(LUPim78HNV.transfer.call(addressGMKnYU0, uintNKGfMXb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPim78HNV = await LUP.new({from: accounts[0]});
		const addressH3Zv9VI = accounts[4]
		const uintRYJezX = BigInt("139")
		const uintj9g3Bz5 = BigInt("548")
		const addressoN41yfS = accounts[2]
		const uintdqmEIi7 = BigInt("2028")
		const addressH5vC4dv = accounts[3]
		const uint256AUTuqu6 = await LUPim78HNV.balanceOf.call(addressH3Zv9VI, {from: accounts[3]});
		const boolrOpzSx = await LUPim78HNV.transferWithLock.call(addressoN41yfS, uintj9g3Bz5, uintRYJezX, {from: accounts[0]});
//		const boolPin8GAO = await LUPim78HNV.transfer.call(addressH5vC4dv, uintdqmEIi7, {from: accounts[4]});

		assert.equal(boolrOpzSx, true)
		assert.equal(uint256AUTuqu6, BigInt("0"))
		await expect(LUPim78HNV.transfer.call(addressH5vC4dv, uintdqmEIi7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPHKpTFEO = await LUP.new({from: accounts[2]});
		const addressHpgWBcg = accounts[0]
		const uintKGo7jqx = BigInt("377")
		const uintAuXuZMX = BigInt("410")
		const addresswGQLjx2 = accounts[0]
		const uintXjqYwTW = BigInt("295")
		const uintvuejp44 = BigInt("928")
		const addressmSasLH = accounts[1]
		const addressd7N3wgn = await LUPHKpTFEO.upgradeTo.call(addressHpgWBcg, {from: accounts[2]});
//		const boolQ687sel = await LUPHKpTFEO.transferWithLock.call(addresswGQLjx2, uintAuXuZMX, uintKGo7jqx, {from: accounts[1]});
//		const booluPhu4T = await LUPHKpTFEO.transferWithLock.call(addressmSasLH, uintvuejp44, uintXjqYwTW, {from: accounts[4]});

		await expect(LUPHKpTFEO.transferWithLock.call(addresswGQLjx2, uintAuXuZMX, uintKGo7jqx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})