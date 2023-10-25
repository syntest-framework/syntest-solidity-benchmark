const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintoieicsV = BigInt("446")
		const stringhZSP9Cd = "7Hz8ysi2LEkuG3s2V2PLCt9y4j4Dq9YhBWw8NRUP5t5B3WsMYhfB7Hpfu0"
		const stringwUyeNsj = "PObo8N2y9wF7yG9u4gGpHrvDglBx3ZI167bjIpWMpokouPtLz5niWhIFBQjLke5s4kFMWaqtOui"
		const uintHy93OW = BigInt("398")
		const TetherTokenFQhr7su = await TetherToken.new(uintoieicsV, stringhZSP9Cd, stringwUyeNsj, uintHy93OW, {from: accounts[4]});
		const uintIdA5nRa = BigInt("1740")
		const addresseSl73Li = accounts[1]
		const uintakAEwhI = BigInt("467")
		const addressLW6Hjj3 = accounts[1]
		const uint0uWsEU = BigInt("416")
		const addressyyPp4DJ = accounts[2]
		const addressp81FMmT = accounts[1]
		const uintnMA0aFA = BigInt("1116")
		const addressQfyWCbk = accounts[2]
		const addressrTHrJt9 = await TetherTokenFQhr7su.approve.call(addresseSl73Li, uintIdA5nRa, {from: accounts[2]});
		const addressb9lDJT = await TetherTokenFQhr7su.transfer.call(addressLW6Hjj3, uintakAEwhI, {from: accounts[0]});
		const addressrEfuXGH = await TetherTokenFQhr7su.transferFrom.call(addressp81FMmT, addressyyPp4DJ, uint0uWsEU, {from: accounts[3]});
		const addressrRVdbqv = await TetherTokenFQhr7su.approve.call(addressQfyWCbk, uintnMA0aFA, {from: accounts[2]});

		await expect(TetherTokenFQhr7su.transfer.call(addressLW6Hjj3, uintakAEwhI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintPipjqs1 = BigInt("303")
		const stringMnquBYF = "yTbF18fPbnkXAmznUXKaDQXuUi3rVMkBWtXGm9djvClnhTvEKyVmc77sHiJng9oJG"
		const stringGJOh02R = "4m3rkL9pW0zmNLHtjpqwhB3ftPvyWSUnljeCvZo3hA8Pdqn7IGRowhON88NqKlYiUjbqR9aeXaX"
		const uintd1fekI = BigInt("1471")
		const TetherTokentntfsZW = await TetherToken.new(uintPipjqs1, stringMnquBYF, stringGJOh02R, uintd1fekI, {from: accounts[0]});
		const uintkHu1JVJ = BigInt("1224")
		const uintqGUuapR = BigInt("1242")
		const addressUUrp6LY = accounts[3]
		const uintEsTnPzX = BigInt("11")
		const uintBAoiF2r = await TetherTokentntfsZW.redeem.call(uintkHu1JVJ, {from: accounts[2]});
		const uintlCTomfv = await TetherTokentntfsZW.totalSupply.call({from: accounts[2]});
		const addresssKnUfdt = await TetherTokentntfsZW.approve.call(addressUUrp6LY, uintqGUuapR, {from: accounts[3]});
		const uintM9bhovt = await TetherTokentntfsZW.redeem.call(uintEsTnPzX, {from: accounts[0]});

		await expect(TetherTokentntfsZW.redeem.call(uintkHu1JVJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintKV4XZ21 = BigInt("1224")
		const stringxlcSeJD = "2OVTLDlPGfIBFj2yzFcLJlL3JcqUOYPBf5Wlqv3ddOB2Fu5BebiWjVRXuhqBECI5oIgjPk"
		const stringfR6hYZo = "SPr1wHYE66prLPYlcoMKRUv4Y"
		const uintg0ozU5X = BigInt("1455")
		const TetherTokenqBtgLVR = await TetherToken.new(uintKV4XZ21, stringxlcSeJD, stringfR6hYZo, uintg0ozU5X, {from: accounts[5]});
		const addressD8yimar = accounts[4]
		const uintEAsDuls = BigInt("1577")
		const uintENYJj8f = BigInt("320")
		const uintEKwueXg = BigInt("2030")
		const addresswfB7Rdb = accounts[0]
		const addressbyMq2y4 = await TetherTokenqBtgLVR.deprecate.call(addressD8yimar, {from: accounts[4]});
		const uintcN2miKk = await TetherTokenqBtgLVR.redeem.call(uintEAsDuls, {from: accounts[0]});
		const uintoLbA4Da = await TetherTokenqBtgLVR.redeem.call(uintENYJj8f, {from: accounts[2]});
		const uintcpStWNx = await TetherTokenqBtgLVR.issue.call(uintEKwueXg, {from: accounts[3]});
		const uintfu3Sa4C = await TetherTokenqBtgLVR.balanceOf.call(addresswfB7Rdb, {from: accounts[0]});

		await expect(TetherTokenqBtgLVR.deprecate.call(addressD8yimar, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintKm049ZZ = BigInt("1821")
		const stringZMx7LTp = "aiYw2gxjz6dzUmpVb67UjBDhFgy5c9ngMzUbS1addaTR98PI66hDWnuOCaqhRLSoz3irKe1TRd7ETB"
		const stringiK1TJot = "GK8XPg5kKjOwvzCvg5ShFcUHzvGMRbHVh1m97MAL5ezVnjoYUGmpBKR9nvOO8ih8k9p1b0fj"
		const uintnHtPXLJ = BigInt("212")
		const TetherTokena9rKDR = await TetherToken.new(uintKm049ZZ, stringZMx7LTp, stringiK1TJot, uintnHtPXLJ, {from: accounts[2]});
		const uintl5He5WL = BigInt("2036")
		const uintDwbZbZ = BigInt("1601")
		const addressUUeO5dR = accounts[3]
		const addressUUfG9iF = "0x0000000000000000000000000000000000000001"
		const uintXWCAx7B = BigInt("1364")
		const addresswNSk2u9 = accounts[5]
		const addressNZ1qqW9 = accounts[4]
		const uinthvqDcAM = await TetherTokena9rKDR.totalSupply.call({from: accounts[2]});
		const uintKaNSzb8 = await TetherTokena9rKDR.totalSupply.call({from: accounts[2]});
		const uintTsrnKt = await TetherTokena9rKDR.redeem.call(uintl5He5WL, {from: accounts[2]});
		const addressTHgghR = await TetherTokena9rKDR.transfer.call(addressUUeO5dR, uintDwbZbZ, {from: accounts[3]});
		const addressD4DDLTq = await TetherTokena9rKDR.deprecate.call(addressUUfG9iF, {from: accounts[4]});
		const addresstyZJOz = await TetherTokena9rKDR.transferFrom.call(addressNZ1qqW9, addresswNSk2u9, uintXWCAx7B, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintKaNSzb8, BigInt("1821"))
		assert.equal(uinthvqDcAM, BigInt("1821"))
		await expect(TetherTokena9rKDR.redeem.call(uintl5He5WL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintN42Ful8 = BigInt("1450")
		const stringSAyJvCZ = "MneuCufPDVy68NYOqFChlzBeBAl36BkxfIcncOu"
		const stringewFYbz = "F3pIWE9g6rMVapfpv2Bxplceo4z9aIPDgcQsTrxGKvG8OmSCLGyVLd3uCE1AuoFfKUqchYiOs9QGu"
		const uintkcIQY8d = BigInt("1253")
		const TetherTokenjYIlxNW = await TetherToken.new(uintN42Ful8, stringSAyJvCZ, stringewFYbz, uintkcIQY8d, {from: accounts[1]});
		const uintgGB48V1 = BigInt("760")
		const uintQBZhWXV = BigInt("1977")
		const addressNl4eYA = accounts[2]
		const addressBJCzqH = accounts[4]
		const uintMqvArzc = BigInt("140")
		const uintnLtX2CZ = BigInt("221")
		const addressk1eVhod = accounts[5]
		const uintuPs01qk = BigInt("1599")
		const addressoV6L8I6 = accounts[4]
		const addressbxzAfUb = accounts[5]
		const uintrd4rQY7 = BigInt("494")
		const addressJyFOUTN = accounts[4]
		const uintQlVZHns = await TetherTokenjYIlxNW.redeem.call(uintgGB48V1, {from: accounts[1]});
		const addressbQnaOk5 = await TetherTokenjYIlxNW.transferFrom.call(addressBJCzqH, addressNl4eYA, uintQBZhWXV, {from: accounts[5]});
		const uintatxsc0h = await TetherTokenjYIlxNW.issue.call(uintMqvArzc, {from: accounts[1]});
		const addressNVrbpVm = await TetherTokenjYIlxNW.approve.call(addressk1eVhod, uintnLtX2CZ, {from: accounts[3]});
		const addressTMo1ojN = await TetherTokenjYIlxNW.transferFrom.call(addressbxzAfUb, addressoV6L8I6, uintuPs01qk, {from: accounts[3]});
		const addressZbymQG = await TetherTokenjYIlxNW.approve.call(addressJyFOUTN, uintrd4rQY7, {from: accounts[3]});

		await expect(TetherTokenjYIlxNW.transferFrom.call(addressBJCzqH, addressNl4eYA, uintQBZhWXV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinte5ku6gR = BigInt("1365")
		const stringTNR0b8x = "1H3UHtmDXIKt0dpVQcZlvKE5d8Y"
		const stringgsRiXB3 = "TOIxhQFCVLmyg39eOYLaCDsI"
		const uintK8ZVEQ9 = BigInt("335")
		const TetherTokenWIUIpmL = await TetherToken.new(uinte5ku6gR, stringTNR0b8x, stringgsRiXB3, uintK8ZVEQ9, {from: accounts[2]});
		const addressmVe5p1J = accounts[5]
		const uintFeAx40C = BigInt("1638")
		const uintRkEXfPg = BigInt("1618")
		const uintzYoF2e7 = BigInt("1631")
		const addressnvbL8fx = accounts[1]
		const uintqklsfm = await TetherTokenWIUIpmL.balanceOf.call(addressmVe5p1J, {from: accounts[5]});
		const uintSqbEndp = await TetherTokenWIUIpmL.setParams.call(uintRkEXfPg, uintFeAx40C, {from: accounts[4]});
		const uinttVGuWlu = await TetherTokenWIUIpmL.issue.call(uintzYoF2e7, {from: accounts[2]});
		const uintt5RtCbP = await TetherTokenWIUIpmL.balanceOf.call(addressnvbL8fx, {from: accounts[2]});

		assert.equal(uintqklsfm, BigInt("0"))
		await expect(TetherTokenWIUIpmL.setParams.call(uintRkEXfPg, uintFeAx40C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintLvnUZtb = BigInt("1215")
		const stringiufQ0oK = "Yu8SuyuysptICO7q1nkam5DztsWVwFMIO6a6yeM9PN43CIxIeti"
		const stringK9e8qRB = "MOdwG7sjk4xH"
		const uintDP0xBkk = BigInt("1597")
		const TetherTokenHmZVWKa = await TetherToken.new(uintLvnUZtb, stringiufQ0oK, stringK9e8qRB, uintDP0xBkk, {from: accounts[4]});
		const uintdecjFHP = BigInt("1690")
		const uintNZi5SX9 = await TetherTokenHmZVWKa.issue.call(uintdecjFHP, {from: accounts[0]});
		const uinttz9pb8I = await TetherTokenHmZVWKa.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenHmZVWKa.issue.call(uintdecjFHP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintTh3A5mS = BigInt("474")
		const stringlWjO8er = "UwmGeQEbkVgvLwajK44upKmFOAVHn9RmRbidqFLUkUu6CxEihOhODN5Bm8aC"
		const stringIquE8bR = "QCstxR2XLAJZX19u5IidFbun9r4Ki6EHRjSKSArsk7FMGMe"
		const uintbu7XijO = BigInt("317")
		const TetherTokenjtd457z = await TetherToken.new(uintTh3A5mS, stringlWjO8er, stringIquE8bR, uintbu7XijO, {from: accounts[2]});
		const addressIcbtQt5 = accounts[0]
		const addressbTKlnFB = accounts[0]
		const uintsIN9P7k = BigInt("546")
		const addressubgS0Wf = accounts[4]
		const addressyEGXBS = accounts[4]
		const addressqUJ3AEw = accounts[3]
		const addressS0SyUl = "0x0000000000000000000000000000000000000001"
		const uintokLveYB = await TetherTokenjtd457z.allowance.call(addressbTKlnFB, addressIcbtQt5, {from: accounts[3]});
		const uintEBVW221 = await TetherTokenjtd457z.redeem.call(uintsIN9P7k, {from: accounts[5]});
		const uintfRA5HhM = await TetherTokenjtd457z.balanceOf.call(addressubgS0Wf, {from: accounts[1]});
		const uintkFmLgs = await TetherTokenjtd457z.allowance.call(addressqUJ3AEw, addressyEGXBS, {from: accounts[2]});
		const uintMvYz64L = await TetherTokenjtd457z.balanceOf.call(addressS0SyUl, {from: accounts[2]});

		assert.equal(uintokLveYB, BigInt("0"))
		await expect(TetherTokenjtd457z.redeem.call(uintsIN9P7k, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintxpbwBbX = BigInt("964")
		const stringrqG137V = "iptT3lwinWckMF6lPitWUKSIYUponx0Ls8VKJqc5jLIswGvbnpWAzH9fPAzRwoEw1u9wOjejonVmwFenITfBWNa"
		const stringb0illAr = "qiq4JaJMJhEE2BcNp0ysa8wlcDMNC"
		const uintBFiL9KC = BigInt("1232")
		const TetherTokensLGP1Vd = await TetherToken.new(uintxpbwBbX, stringrqG137V, stringb0illAr, uintBFiL9KC, {from: "0x0000000000000000000000000000000000000001"});
		const uintvQu5lCu = BigInt("1065")
		const addressgi9lRW9 = accounts[1]
		const uintq1QSsjX = BigInt("242")
		const uintc2lKT9P = BigInt("1690")
		const addressM57gTW = accounts[3]
		const uintdzh46Pb = BigInt("1770")
		const addressixrHbSc = await TetherTokensLGP1Vd.approve.call(addressgi9lRW9, uintvQu5lCu, {from: accounts[4]});
		const uintwurJErH = await TetherTokensLGP1Vd.totalSupply.call({from: accounts[0]});
		const uintFxMoVdm = await TetherTokensLGP1Vd.redeem.call(uintq1QSsjX, {from: accounts[1]});
		const addressyDQ6Ei = await TetherTokensLGP1Vd.transfer.call(addressM57gTW, uintc2lKT9P, {from: "0x0000000000000000000000000000000000000001"});
		const uintLB6Zczb = await TetherTokensLGP1Vd.redeem.call(uintdzh46Pb, {from: accounts[2]});
	});
})