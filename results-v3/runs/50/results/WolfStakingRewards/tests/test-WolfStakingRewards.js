const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressEDiy2hT = accounts[1]
		const addressewV2vHp = accounts[2]
		const addresssy7UmRx = accounts[3]
		const WolfStakingRewardsVjfFI2J = await WolfStakingRewards.new(addressEDiy2hT, addressewV2vHp, addresssy7UmRx, {from: accounts[1]});
		const uintv2aZNmn = BigInt("642")
		const uintrlcmGeW = BigInt("760")
		const uintHkUjsDn = BigInt("1608")
		const uintOvFX0x1 = BigInt("1100")
		const uint256fChf3MD = await WolfStakingRewardsVjfFI2J.withdraw.call(uintrlcmGeW, uintv2aZNmn, {from: accounts[2]});
		await WolfStakingRewardsVjfFI2J.nonReentrant.call({from: accounts[5]});
		const uint256W3Ygsbx = await WolfStakingRewardsVjfFI2J.withdraw.call(uintOvFX0x1, uintHkUjsDn, {from: accounts[4]});
		const stringW4E9Gfx = await WolfStakingRewardsVjfFI2J.symbol.call({from: accounts[1]});

		await expect(WolfStakingRewardsVjfFI2J.withdraw.call(uintrlcmGeW, uintv2aZNmn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringY3TA1in = "tpeVJeBLH7lsPoyeO80tJcRQH7QedDoQxRWy2p1m6RP3aWAq2f5HmPWyHfvU6Jt2ZFHLZqS3"
		const stringATjYB8W = "pestJQ1llFe7AsGyMzcKMQXqbULgGgEhmQhqKtK5aE0Udxklq5152APBSEKGikT66u"
		const uintbRvPI7Y = BigInt("66")
		const WolfStakingRewardsu3Sivca = await WolfStakingRewards.new(stringY3TA1in, stringATjYB8W, uintbRvPI7Y, {from: accounts[0]});
		const uintixqkCGk = BigInt("1281")
		const addressrQ9gkMd = accounts[1]
		const uintpQyvvFX = BigInt("654")
		const addresszOgLg9u = accounts[0]
		const uintqJQpAR = BigInt("1701")
		const addressgWt6wf = accounts[3]
		const uintAbme87a = BigInt("1738")
		const uintQsB5GxV = BigInt("1763")
		const uintgcdiKIS = BigInt("1269")
		const uint256JhxBvs2 = await WolfStakingRewardsu3Sivca.balanceOfPerPool.call(addressrQ9gkMd, uintixqkCGk, {from: accounts[2]});
		const addressT9oTnYe = await WolfStakingRewardsu3Sivca.updateReward.call(addresszOgLg9u, uintpQyvvFX, {from: accounts[0]});
		const addressn16QLKt = await WolfStakingRewardsu3Sivca.updateReward.call(addressgWt6wf, uintqJQpAR, {from: accounts[4]});
		const uint87HoqNJ = await WolfStakingRewardsu3Sivca.decimals.call({from: accounts[1]});
		const uint256MKjPE4y = await WolfStakingRewardsu3Sivca.rewardPerToken.call(uintAbme87a, {from: accounts[4]});
		const uint256TScymru = await WolfStakingRewardsu3Sivca.withdraw.call(uintgcdiKIS, uintQsB5GxV, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringU1BlRrJ = "TETSbtsRx98lgRXidsfMhczbSoOgzIo7suACChsgtBc8DrrmuoUMg9Tbp"
		const stringlsc0anp = "4Q"
		const uintAyU7eMQ = BigInt("65")
		const WolfStakingRewardsr3gmv9w = await WolfStakingRewards.new(stringU1BlRrJ, stringlsc0anp, uintAyU7eMQ, {from: accounts[0]});
		const uintk8gi3nX = BigInt("182")
		const uintOdmYGSx = BigInt("902")
		const uintrWM0IoV = BigInt("704")
		const uintBJK4q7n = BigInt("1337")
		const addressejogpG1 = accounts[1]
		const uint4SuWwR = BigInt("134")
		const uint256AulgQCQ = await WolfStakingRewardsr3gmv9w.lastTimeRewardApplicable.call(uintk8gi3nX, {from: accounts[0]});
		const uint256arrayb3sXikA = await WolfStakingRewardsr3gmv9w.updateNotifyRewardAmount.call(uintOdmYGSx, {from: accounts[0]});
		const uint256h0pIcBu = await WolfStakingRewardsr3gmv9w.exit.call(uintrWM0IoV, {from: accounts[2]});
		const addressww1uXO = await WolfStakingRewardsr3gmv9w.updateReward.call(addressejogpG1, uintBJK4q7n, {from: accounts[1]});
		const uint256mQ170s9 = await WolfStakingRewardsr3gmv9w.rewardPerToken.call(uint4SuWwR, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvz5VmF = "GUVd3H8wuD4kjntarYBMPOyIXHyA5aEB9whRuOeroqrFGhMeWEcPdjjroUbngh4"
		const stringGy2pQr = "GLh7hmWYPhY5h1vF9RfdAmeZnMWXJdbFWUCIvlEuIuOXTPKhZXp0bYoGo6tDKKBCJw7q"
		const uinteTxqmeH = BigInt("139")
		const WolfStakingRewardszzt5nis = await WolfStakingRewards.new(stringvz5VmF, stringGy2pQr, uinteTxqmeH, {from: "0x0000000000000000000000000000000000000001"});
		const uintIfbxAvg = BigInt("1944")
		const uintvjhwYpf = BigInt("1925")
		const uint256cbYfVjD = await WolfStakingRewardszzt5nis.withdrawRemainingBalance.call(uintvjhwYpf, uintIfbxAvg, {from: accounts[4]});
		const stringJJx6de7 = await WolfStakingRewardszzt5nis.name.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressHpINYSy = accounts[4]
		const addressl3sAGTE = accounts[4]
		const addressw7U5MiV = accounts[4]
		const WolfStakingRewardsQUn7P1h = await WolfStakingRewards.new(addressHpINYSy, addressl3sAGTE, addressw7U5MiV, {from: accounts[0]});
		const uintmBoYfi = BigInt("57")
		const uintQmdDMT3 = BigInt("1383")
		const uintfli1L7z = BigInt("1588")
		const stringXq8Jcu0 = await WolfStakingRewardsQUn7P1h.symbol.call({from: accounts[0]});
		const uint256gPx1aMQ = await WolfStakingRewardsQUn7P1h.withdrawRemainingBalance.call(uintQmdDMT3, uintmBoYfi, {from: accounts[2]});
		const uint256YQWwJB6 = await WolfStakingRewardsQUn7P1h.getRewardForDuration.call(uintfli1L7z, {from: accounts[5]});

		await expect(WolfStakingRewardsQUn7P1h.symbol.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringUHRQePG = "3SXiq4I4dvGc4whlgPWKJKgCjKnFjdoYSe14WynW3ZsP"
		const stringb4vdtIW = "DpeNUaQw7eqWBgYagKdVaEcOhsxGAoSHiNrCdzbsMa3YBk8nph1ySD4o1"
		const uinteJfJHdz = BigInt("210")
		const WolfStakingRewardsLhzlUuv = await WolfStakingRewards.new(stringUHRQePG, stringb4vdtIW, uinteJfJHdz, {from: "0x0000000000000000000000000000000000000001"});
		const uintfBxe1DL = BigInt("1921")
		const uintVwVAlCw = BigInt("506")
		const uintbtPmzqE = BigInt("1873")
		const uintMEg5UHN = BigInt("159")
		const addressjCGKQ1s = accounts[0]
		const uint256Ej93Gq4 = await WolfStakingRewardsLhzlUuv.stake.call(uintVwVAlCw, uintfBxe1DL, {from: accounts[3]});
		const uintmEaQcrx = await WolfStakingRewardsLhzlUuv.getReward.call(uintbtPmzqE, {from: accounts[3]});
		const addressQRj2O3u = await WolfStakingRewardsLhzlUuv.updateReward.call(addressjCGKQ1s, uintMEg5UHN, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressYbaaf6t = accounts[0]
		const addressR4MdDc = accounts[4]
		const addressu7EbqmO = accounts[1]
		const WolfStakingRewardskly1zJ = await WolfStakingRewards.new(addressYbaaf6t, addressR4MdDc, addressu7EbqmO, {from: accounts[1]});
		const uintPldQuny = BigInt("1518")
		const uintkD2576l = BigInt("1722")
		const uint0DQWkN = BigInt("414")
		const uint0SEh21 = BigInt("788")
		const uintio4crSz = BigInt("1312")
		const uintLsf7TlK = BigInt("1295")
		const uintJSl12Lo = BigInt("1651")
		const uintWBRu9ok = BigInt("547")
		const uint256wI0U3ID = await WolfStakingRewardskly1zJ.lastTimeRewardApplicable.call(uintPldQuny, {from: accounts[1]});
		const uint256heCH96 = await WolfStakingRewardskly1zJ.getRewardForDuration.call(uintkD2576l, {from: accounts[1]});
		const uint256iwcGIgC = await WolfStakingRewardskly1zJ.withdraw.call(uint0SEh21, uint0DQWkN, {from: accounts[2]});
		const uint256d0ogwu2 = await WolfStakingRewardskly1zJ.stake.call(uintLsf7TlK, uintio4crSz, {from: accounts[2]});
		const uint256EAJlEcl = await WolfStakingRewardskly1zJ.getRewardForDuration.call(uintJSl12Lo, {from: accounts[4]});
		const uint256WFPKDh = await WolfStakingRewardskly1zJ.exit.call(uintWBRu9ok, {from: accounts[0]});

		assert.equal(uint256wI0U3ID, BigInt("0"))
		await expect(WolfStakingRewardskly1zJ.getRewardForDuration.call(uintkD2576l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringpE2RB3d = "tdjKkYLZVRB27mRqb2avcSpBOgPj3vCojFH9qsb22o97PEVCknug8Lfw97pnRd3u6Xo8i8UFS12RHc8MFA6"
		const stringC2n5uva = "f2gVK1"
		const uintNOdJesd = BigInt("220")
		const WolfStakingRewardsk6E4bY = await WolfStakingRewards.new(stringpE2RB3d, stringC2n5uva, uintNOdJesd, {from: accounts[0]});
		const uintomlVfQ = BigInt("557")
		const uintVJe942c = BigInt("1588")
		const uintKqXtUmp = BigInt("1698")
		const uint256CN6HcWU = await WolfStakingRewardsk6E4bY.withdraw.call(uintVJe942c, uintomlVfQ, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsk6E4bY.nonReentrant.call({from: accounts[4]});
		const uint256UqSwzy2 = await WolfStakingRewardsk6E4bY.exit.call(uintKqXtUmp, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwNafaxF = "HWo0m5sbHYUe"
		const stringkrBy5XU = "8ndb6Q292gFSRG4o6PBsifkGfbPIeupwlOiq"
		const uintgtkLdft = BigInt("104")
		const WolfStakingRewardsjdMMoNc = await WolfStakingRewards.new(stringwNafaxF, stringkrBy5XU, uintgtkLdft, {from: accounts[2]});
		const uintrUAao8p = BigInt("580")
		const uinttaFJZuj = BigInt("568")
		const uintf7I7yzv = BigInt("1810")
		const stringmkIoZip = await WolfStakingRewardsjdMMoNc.symbol.call({from: accounts[2]});
		const uint256Id3OCUs = await WolfStakingRewardsjdMMoNc.totalSupplyPerPool.call(uintrUAao8p, {from: accounts[0]});
		const uint256cOPreN4 = await WolfStakingRewardsjdMMoNc.stake.call(uintf7I7yzv, uinttaFJZuj, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressWDz1yDt = accounts[5]
		const addressIcZOBnA = accounts[3]
		const addressW5FXnan = accounts[2]
		const WolfStakingRewardsbSEy6VF = await WolfStakingRewards.new(addressWDz1yDt, addressIcZOBnA, addressW5FXnan, {from: accounts[3]});
		const uintVpeNQcN = BigInt("738")
		const uintRyDYn7n = BigInt("1421")
		const addressyJH2mAo = accounts[1]
		const uintLyy9XWk = BigInt("1948")
		const uintV4ftZMe = BigInt("776")
		const uintrYH7CzR = BigInt("1132")
		const addressRoKOKTu = accounts[1]
		const uints47B314 = BigInt("889")
		const uint256StiJsE6 = await WolfStakingRewardsbSEy6VF.rewardPerToken.call(uintVpeNQcN, {from: accounts[4]});
		const uint256YEu8gGY = await WolfStakingRewardsbSEy6VF.balanceOfPerPool.call(addressyJH2mAo, uintRyDYn7n, {from: accounts[2]});
		const uint256LJ7ilY2 = await WolfStakingRewardsbSEy6VF.withdraw.call(uintV4ftZMe, uintLyy9XWk, {from: accounts[1]});
		const addressfocT3kG = await WolfStakingRewardsbSEy6VF.updateReward.call(addressRoKOKTu, uintrYH7CzR, {from: accounts[0]});
		const uint256JdSJQn = await WolfStakingRewardsbSEy6VF.getRewardForDuration.call(uints47B314, {from: accounts[3]});

		assert.equal(uint256StiJsE6, BigInt("0"))
		assert.equal(uint256YEu8gGY, BigInt("0"))
		await expect(WolfStakingRewardsbSEy6VF.withdraw.call(uintV4ftZMe, uintLyy9XWk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringgCaPnCv = "aQL4z6C0rIGC6QpDH2rxXPEINZssFXeHWn9gMhgno2UcXLF2KPuphDnsMo4MARDZ"
		const stringKz2BrC1 = "6IIWPvmUHquck6h2kTJhbHx4vbOgVjWXLd9L7"
		const uintbB5U6ih = BigInt("4")
		const WolfStakingRewardsW3bRba = await WolfStakingRewards.new(stringgCaPnCv, stringKz2BrC1, uintbB5U6ih, {from: accounts[1]});
		const uintL5jKw7J = BigInt("1036")
		const uintFJJlDc = BigInt("1260")
		const uintQi2Uql = BigInt("756")
		const uintW9CZD55 = BigInt("1792")
		const uintKeLELru = BigInt("436")
		const uintbc8rycN = BigInt("1852")
		const uintxYbvju = BigInt("218")
		const uintLOqsrgA = await WolfStakingRewardsW3bRba.getReward.call(uintL5jKw7J, {from: accounts[0]});
		const uint256KbaKK1k = await WolfStakingRewardsW3bRba.withdrawRemainingBalance.call(uintQi2Uql, uintFJJlDc, {from: accounts[0]});
		const uint256fNzjSUc = await WolfStakingRewardsW3bRba.exit.call(uintW9CZD55, {from: accounts[0]});
		const uint256fcLyMcA = await WolfStakingRewardsW3bRba.exit.call(uintKeLELru, {from: accounts[1]});
		const uint256e0KH5v5 = await WolfStakingRewardsW3bRba.withdrawRemainingBalance.call(uintxYbvju, uintbc8rycN, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const address5yZ55k = accounts[5]
		const addresscOOzluP = accounts[3]
		const addressnDSWR3Z = accounts[2]
		const WolfStakingRewardsbSEy6VF = await WolfStakingRewards.new(address5yZ55k, addresscOOzluP, addressnDSWR3Z, {from: accounts[3]});
		const uint8PYeaq = BigInt("965")
		const uintIwC6mPU = BigInt("1953")
		const uinte7RxKj = BigInt("776")
		const uintjniicJ9 = BigInt("866")
		const uint256XwPkyz5 = await WolfStakingRewardsbSEy6VF.exit.call(uint8PYeaq, {from: accounts[0]});
		const uint256LJ7ilY2 = await WolfStakingRewardsbSEy6VF.withdraw.call(uinte7RxKj, uintIwC6mPU, {from: accounts[1]});
		const uint256JdSJQn = await WolfStakingRewardsbSEy6VF.getRewardForDuration.call(uintjniicJ9, {from: accounts[3]});
		const uint8PIK5x65 = await WolfStakingRewardsbSEy6VF.decimals.call({from: accounts[3]});

		await expect(WolfStakingRewardsbSEy6VF.exit.call(uint8PYeaq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressc87pedi = accounts[5]
		const addressdzOX4FR = accounts[3]
		const addressDzAmiA = accounts[2]
		const WolfStakingRewardsbSEy6VF = await WolfStakingRewards.new(addressc87pedi, addressdzOX4FR, addressDzAmiA, {from: accounts[3]});
		const uintD2yWwGj = BigInt("1346")
		const uints8Y13ie = BigInt("1953")
		const uintpO4OOSy = BigInt("776")
		const uintTVcbQqf = BigInt("1426")
		const addressViBJMU6 = accounts[5]
		const uintiaaKY8i = BigInt("866")
		const uint256arrayLPwvpN9 = await WolfStakingRewardsbSEy6VF.updateNotifyRewardAmount.call(uintD2yWwGj, {from: accounts[3]});
		const uint256LJ7ilY2 = await WolfStakingRewardsbSEy6VF.withdraw.call(uintpO4OOSy, uints8Y13ie, {from: accounts[1]});
		const uint256zZX4XLb = await WolfStakingRewardsbSEy6VF.earned.call(addressViBJMU6, uintTVcbQqf, {from: accounts[3]});
		const uint256JdSJQn = await WolfStakingRewardsbSEy6VF.getRewardForDuration.call(uintiaaKY8i, {from: accounts[3]});

		await expect(WolfStakingRewardsbSEy6VF.updateNotifyRewardAmount.call(uintD2yWwGj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressZHYlHg = accounts[4]
		const addressL3GebzZ = accounts[1]
		const addressMT3tXPg = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardskEKnt7 = await WolfStakingRewards.new(addressZHYlHg, addressL3GebzZ, addressMT3tXPg, {from: accounts[1]});
		const uintGFOzAW7 = BigInt("1900")
		const uintqqxeQCR = BigInt("1661")
		const uintNu39B06 = BigInt("1561")
		const uintZrpRdF = BigInt("1962")
		const uint256kFHLDxM = await WolfStakingRewardskEKnt7.withdrawRemainingBalance.call(uintqqxeQCR, uintGFOzAW7, {from: accounts[1]});
		const uint256Q2J7h8N = await WolfStakingRewardskEKnt7.stake.call(uintZrpRdF, uintNu39B06, {from: accounts[4]});
		await WolfStakingRewardskEKnt7.onlyRewardsDistribution.call({from: accounts[3]});

		await expect(WolfStakingRewardskEKnt7.withdrawRemainingBalance.call(uintqqxeQCR, uintGFOzAW7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressgWpN78I = accounts[5]
		const addressf7pnqAZ = accounts[3]
		const addressPjBMFes = accounts[2]
		const WolfStakingRewardsbSEy6VF = await WolfStakingRewards.new(addressgWpN78I, addressf7pnqAZ, addressPjBMFes, {from: accounts[3]});
		const uintF3Y4xq0 = BigInt("1525")
		const uintBEpmy4 = BigInt("866")
		const uintABZC10N = BigInt("399")
		const uintFHIIzr = await WolfStakingRewardsbSEy6VF.getReward.call(uintF3Y4xq0, {from: accounts[2]});
		const stringlYNLvSS = await WolfStakingRewardsbSEy6VF.symbol.call({from: accounts[4]});
		const uint256JdSJQn = await WolfStakingRewardsbSEy6VF.getRewardForDuration.call(uintBEpmy4, {from: accounts[3]});
		const uint256f1974al = await WolfStakingRewardsbSEy6VF.getRewardForDuration.call(uintABZC10N, {from: accounts[1]});

		await expect(WolfStakingRewardsbSEy6VF.symbol.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressnpmAPRk = accounts[5]
		const addressJD6Umhg = accounts[3]
		const addressAOX0kP = accounts[2]
		const WolfStakingRewardsbSEy6VF = await WolfStakingRewards.new(addressnpmAPRk, addressJD6Umhg, addressAOX0kP, {from: accounts[3]});
		const uintUib0x5I = BigInt("464")
		const uintXV7BXux = BigInt("726")
		const uintJIfPb3Y = BigInt("850")
		const uint256ZuCCVRS = await WolfStakingRewardsbSEy6VF.stake.call(uintXV7BXux, uintUib0x5I, {from: accounts[3]});
		const uint256JdSJQn = await WolfStakingRewardsbSEy6VF.getRewardForDuration.call(uintJIfPb3Y, {from: accounts[3]});
		const uint8cSZMn9h = await WolfStakingRewardsbSEy6VF.decimals.call({from: accounts[3]});
		const stringYkEbVx2 = await WolfStakingRewardsbSEy6VF.name.call({from: accounts[5]});

		await expect(WolfStakingRewardsbSEy6VF.stake.call(uintXV7BXux, uintUib0x5I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringcrNUdcG = "nYDmsjbbyTzi10hs4HaAiYoEm4ibxdXwNzIKdxFiO9jQV7iBiwyJkW5Q4Jv5BsJX5nIevYnqyo7VCjtewr1weTp9uLlC"
		const stringoZexsGn = "14NpX3E6lV4b1Kj4rIwhmk2oNUJW8DFKKz35ouEa7XLXawnsJOHy7KR2wrzQ"
		const uintlt4TByP = BigInt("152")
		const WolfStakingRewardsnEJohsj = await WolfStakingRewards.new(stringcrNUdcG, stringoZexsGn, uintlt4TByP, {from: accounts[3]});
		const uintR0Xvu06 = BigInt("2012")
		const uintCQu41So = BigInt("1321")
		const uintlbC1fkP = BigInt("1552")
		const uint256g0WlTC = await WolfStakingRewardsnEJohsj.totalSupplyPerPool.call(uintR0Xvu06, {from: accounts[0]});
		const uint256jK4NxFM = await WolfStakingRewardsnEJohsj.lastTimeRewardApplicable.call(uintCQu41So, {from: accounts[4]});
		const uint256meuoEyw = await WolfStakingRewardsnEJohsj.rewardPerToken.call(uintlbC1fkP, {from: accounts[2]});
		await WolfStakingRewardsnEJohsj.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressGUYoYTg = accounts[4]
		const addresssYf2Iqr = accounts[3]
		const addressW0hfImK = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardstYcyxNF = await WolfStakingRewards.new(addressGUYoYTg, addresssYf2Iqr, addressW0hfImK, {from: "0x0000000000000000000000000000000000000001"});
		const uintoqfC05S = BigInt("1752")
		const uintBxhLAoJ = BigInt("1786")
		const uinth7gtSDS = BigInt("1835")
		const uintdntTT0b = BigInt("350")
		const uintcx9L0Bg = BigInt("149")
		const uint256u8e2JeG = await WolfStakingRewardstYcyxNF.rewardPerToken.call(uintoqfC05S, {from: accounts[3]});
		const uint256Qxw6nhm = await WolfStakingRewardstYcyxNF.lastTimeRewardApplicable.call(uintBxhLAoJ, {from: accounts[0]});
		const uint256kNtXtSC = await WolfStakingRewardstYcyxNF.rewardPerToken.call(uinth7gtSDS, {from: accounts[5]});
		const uint256WMsuWV7 = await WolfStakingRewardstYcyxNF.rewardPerToken.call(uintdntTT0b, {from: accounts[3]});
		const uint256Q202QS = await WolfStakingRewardstYcyxNF.lastTimeRewardApplicable.call(uintcx9L0Bg, {from: accounts[5]});
		const uint8jYeKoGJ = await WolfStakingRewardstYcyxNF.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressidfd2lh = accounts[5]
		const addresscbPRKX2 = accounts[3]
		const addressFykdu9 = accounts[2]
		const WolfStakingRewardsbSEy6VF = await WolfStakingRewards.new(addressidfd2lh, addresscbPRKX2, addressFykdu9, {from: accounts[3]});
		const uintERP5VGr = BigInt("824")
		const uintrhE4jlJ = BigInt("106")
		const uintCpBIuIl = BigInt("586")
		const uintRBcbVWS = BigInt("1778")
		const uintIaVBqq = BigInt("1953")
		const uintKdMnHj0 = BigInt("776")
		const uintbRHO0LX = BigInt("459")
		const uint256jquGkX7 = await WolfStakingRewardsbSEy6VF.withdrawRemainingBalance.call(uintrhE4jlJ, uintERP5VGr, {from: accounts[1]});
		const uint256RZsb22W = await WolfStakingRewardsbSEy6VF.totalSupplyPerPool.call(uintCpBIuIl, {from: accounts[3]});
		const uintgT83FTC = await WolfStakingRewardsbSEy6VF.getReward.call(uintRBcbVWS, {from: accounts[4]});
		const uint256LJ7ilY2 = await WolfStakingRewardsbSEy6VF.withdraw.call(uintKdMnHj0, uintIaVBqq, {from: accounts[1]});
		const uint3WJEhO = await WolfStakingRewardsbSEy6VF.getReward.call(uintbRHO0LX, {from: accounts[4]});

		await expect(WolfStakingRewardsbSEy6VF.withdrawRemainingBalance.call(uintrhE4jlJ, uintERP5VGr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringxWE9ZJX = "yzGE21myrEdnPpAKdVdKA8mIpBHGxS9rAYQT5EvHHPfi89zACWImx2bU7Ms4dGOJcOL"
		const stringLNI4He1 = "E75dVVtCJnWVfKmIctpOvEwcakRIW6mNnn8SwKgNbdPVhoYRpqXlDPtDHI1gMdAI"
		const uintJHwcGMr = BigInt("224")
		const WolfStakingRewardsuH5Pksi = await WolfStakingRewards.new(stringxWE9ZJX, stringLNI4He1, uintJHwcGMr, {from: accounts[0]});
		const uintjpeZeH1 = BigInt("1685")
		const uintaIY7TJz = BigInt("1512")
		const uintKSlsbgC = BigInt("790")
		const uintPF8VfwF = BigInt("1895")
		const uintcp9eDOp = BigInt("56")
		const uintH7ipVVU = BigInt("851")
		const uintozkqR13 = BigInt("369")
		const uint256THdFVpd = await WolfStakingRewardsuH5Pksi.rewardPerToken.call(uintjpeZeH1, {from: accounts[1]});
		const uint256fi1unNo = await WolfStakingRewardsuH5Pksi.withdrawRemainingBalance.call(uintKSlsbgC, uintaIY7TJz, {from: accounts[2]});
		await WolfStakingRewardsuH5Pksi.onlyOwner.call({from: accounts[0]});
		const uint256UAojBU = await WolfStakingRewardsuH5Pksi.withdrawRemainingBalance.call(uintcp9eDOp, uintPF8VfwF, {from: accounts[2]});
		const uint256sBNNyvG = await WolfStakingRewardsuH5Pksi.withdrawRemainingBalance.call(uintozkqR13, uintH7ipVVU, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpDaD7zg = "m3bSRt8R"
		const stringuA79lx3 = "v7"
		const uintjsmFVX = BigInt("42")
		const WolfStakingRewardscVQscx8 = await WolfStakingRewards.new(stringpDaD7zg, stringuA79lx3, uintjsmFVX, {from: "0x0000000000000000000000000000000000000001"});
		const uintmKp6TdU = BigInt("720")
		const uint256a4MAxVz = await WolfStakingRewardscVQscx8.lastTimeRewardApplicable.call(uintmKp6TdU, {from: accounts[0]});
		await WolfStakingRewardscVQscx8.nonReentrant.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresslpLQahH = accounts[5]
		const addressThvWfrd = accounts[3]
		const addressVoKFml8 = accounts[2]
		const WolfStakingRewardsbSEy6VF = await WolfStakingRewards.new(addresslpLQahH, addressThvWfrd, addressVoKFml8, {from: accounts[3]});
		const uintnKjFHuD = BigInt("1208")
		const uintVXcUyjr = BigInt("866")
		const uint256VPzUhE = await WolfStakingRewardsbSEy6VF.totalSupplyPerPool.call(uintnKjFHuD, {from: accounts[3]});
		const uint256JdSJQn = await WolfStakingRewardsbSEy6VF.getRewardForDuration.call(uintVXcUyjr, {from: accounts[3]});

		assert.equal(uint256VPzUhE, BigInt("0"))
		await expect(WolfStakingRewardsbSEy6VF.getRewardForDuration.call(uintVXcUyjr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringHFLpcwm = "tPrshWdSHpppUs"
		const stringT0H6RJF = "BLHhfmUYLFSGIoLoSB24PDUgyeJT6zv5j7IrxYOhTs4k"
		const uintYyZE8Om = BigInt("16")
		const WolfStakingRewardsHc5nkf5 = await WolfStakingRewards.new(stringHFLpcwm, stringT0H6RJF, uintYyZE8Om, {from: accounts[2]});
		const uintxxDnrLT = BigInt("1353")
		await WolfStakingRewardsHc5nkf5.onlyOwner.call({from: accounts[5]});
		await WolfStakingRewardsHc5nkf5.onlyOwner.call({from: accounts[5]});
		const uint256arrayq0o1wmS = await WolfStakingRewardsHc5nkf5.updateNotifyRewardAmount.call(uintxxDnrLT, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringW0nfs4W = "Q"
		const stringOfSxAPx = "TWI21GMhzvWGrjJ"
		const uintktAHiPm = BigInt("225")
		const WolfStakingRewardsmWlrJ10 = await WolfStakingRewards.new(stringW0nfs4W, stringOfSxAPx, uintktAHiPm, {from: accounts[1]});
		const uintSgHqaUf = BigInt("564")
		const uintKQvsIgj = BigInt("1400")
		const uintVa6QMaA = BigInt("1130")
		const uintI9q7V0s = BigInt("662")
		const uintSZqU1Uh = BigInt("838")
		const addressySmCiZK = accounts[2]
		const uintfDTrNND = BigInt("387")
		const uintlydGCo4 = BigInt("698")
		const uintTAmw0DA = BigInt("388")
		const addresslS7mdW2 = accounts[3]
		const uintxEg7L0Y = BigInt("121")
		const address28AvBG = accounts[0]
		const uint256Y7NMS5h = await WolfStakingRewardsmWlrJ10.withdraw.call(uintKQvsIgj, uintSgHqaUf, {from: accounts[1]});
		const uint256VXZz3Y0 = await WolfStakingRewardsmWlrJ10.withdrawRemainingBalance.call(uintI9q7V0s, uintVa6QMaA, {from: "0x0000000000000000000000000000000000000001"});
		const addressVKocKYY = await WolfStakingRewardsmWlrJ10.updateReward.call(addressySmCiZK, uintSZqU1Uh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fX9FTAp = await WolfStakingRewardsmWlrJ10.withdrawRemainingBalance.call(uintlydGCo4, uintfDTrNND, {from: accounts[4]});
		const addressA2uoPVA = await WolfStakingRewardsmWlrJ10.updateReward.call(addresslS7mdW2, uintTAmw0DA, {from: accounts[2]});
		const uint256LGLI5XH = await WolfStakingRewardsmWlrJ10.balanceOfPerPool.call(address28AvBG, uintxEg7L0Y, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringD4KKgsc = "nvG0ere8rmFOxfg7WSZLw7FshcXOHfmLi2Sh"
		const stringJvGl5g0 = "BMvhG"
		const uintFFa1JPR = BigInt("245")
		const WolfStakingRewardshhPbaNm = await WolfStakingRewards.new(stringD4KKgsc, stringJvGl5g0, uintFFa1JPR, {from: accounts[1]});
		const uintc9p9NZo = BigInt("5")
		const uintbE2h3lt = BigInt("1324")
		const uints1VYoow = BigInt("1703")
		const uintl5Pvc8p = BigInt("466")
		const uint7bSpuz = BigInt("1222")
		const uintkcNCnNN = BigInt("689")
		const uint256DeRzJ17 = await WolfStakingRewardshhPbaNm.exit.call(uintc9p9NZo, {from: accounts[2]});
		const uint256M9tts42 = await WolfStakingRewardshhPbaNm.lastTimeRewardApplicable.call(uintbE2h3lt, {from: accounts[4]});
		const uint256WLRu06E = await WolfStakingRewardshhPbaNm.totalSupplyPerPool.call(uints1VYoow, {from: accounts[4]});
		const uint256yYg5Can = await WolfStakingRewardshhPbaNm.withdraw.call(uint7bSpuz, uintl5Pvc8p, {from: accounts[4]});
		const uint256oLJcIiF = await WolfStakingRewardshhPbaNm.exit.call(uintkcNCnNN, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringt4O0rGq = "H2L"
		const stringHjeci89 = "llkCJDOS9xJ6LCFpmm71lHqFKDzPNXO5w61E2E5cOk9iFPG"
		const uintSrOnNk = BigInt("190")
		const WolfStakingRewardsp3v3isT = await WolfStakingRewards.new(stringt4O0rGq, stringHjeci89, uintSrOnNk, {from: accounts[3]});
		const uintq42e9JS = BigInt("643")
		const uintjRW3jSp = BigInt("8")
		const uintxcUlAr = BigInt("281")
		const uintejB25Fa = await WolfStakingRewardsp3v3isT.getReward.call(uintq42e9JS, {from: accounts[2]});
		const uint256k0JoRbL = await WolfStakingRewardsp3v3isT.getRewardForDuration.call(uintjRW3jSp, {from: accounts[2]});
		await WolfStakingRewardsp3v3isT.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256NBF4zqK = await WolfStakingRewardsp3v3isT.getRewardForDuration.call(uintxcUlAr, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaFBDpm = "JbRLGvmVYAyrwl3oGO10B6IxMlDvtDgcG90X57hfbyOQutDHzR"
		const stringWrYZTUX = "InibAsNGiHv3BAtoIbKEvak0T8dnuxiCn0NtdDBjl"
		const uintYxHDGIe = BigInt("37")
		const WolfStakingRewardsEVPJ1xP = await WolfStakingRewards.new(stringaFBDpm, stringWrYZTUX, uintYxHDGIe, {from: accounts[0]});
		const uintgaWQ2tF = BigInt("2015")
		const addressOCu7TiM = accounts[0]
		const addressF2jenzE = await WolfStakingRewardsEVPJ1xP.updateReward.call(addressOCu7TiM, uintgaWQ2tF, {from: accounts[2]});
		await WolfStakingRewardsEVPJ1xP.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzvqeiFD = "HvJdyQV9dGcsrqvlslwh7tAZmHGqBTET1ac0bXXB5v4UJU"
		const stringghusKuM = "XVAdiBG8LvKQEs9JyM6uHa4nfGOyPv8RHlc5PpE8FkFreelX9ay9ludBnFwwPWIa6z8e7hbtSQ71v0244LX0jia4MIX"
		const uintCayyFmT = BigInt("100")
		const WolfStakingRewardsvGllDEx = await WolfStakingRewards.new(stringzvqeiFD, stringghusKuM, uintCayyFmT, {from: accounts[4]});
		const uintFLrxvF4 = BigInt("907")
		const uinty3OlZtJ = BigInt("1917")
		const addressdDHIQBK = accounts[3]
		const uintKhXHVF = BigInt("719")
		const uintZu3rCCK = BigInt("1250")
		const uintUBrKvBz = BigInt("1514")
		const uintSA7bjDY = BigInt("421")
		const uint256KDXTLt1 = await WolfStakingRewardsvGllDEx.exit.call(uintFLrxvF4, {from: accounts[3]});
		const uint256ixoLUM0 = await WolfStakingRewardsvGllDEx.balanceOfPerPool.call(addressdDHIQBK, uinty3OlZtJ, {from: accounts[5]});
		const uint256hhJHDYj = await WolfStakingRewardsvGllDEx.stake.call(uintZu3rCCK, uintKhXHVF, {from: accounts[2]});
		const uint256T3TicqX = await WolfStakingRewardsvGllDEx.withdraw.call(uintSA7bjDY, uintUBrKvBz, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnAkYGU3 = "wGpnFZRq53aE5qDWEbvjWa4k7TwsuC2a9KGhFCvuiyLr1oPTMN73WdoRXNoB7HLFkqnWi3uBB1zKVwzNtWIGT5zt1LZPULV8K"
		const stringZyv00E = "dm"
		const uintNFIfhjT = BigInt("238")
		const WolfStakingRewardsheGXbW5 = await WolfStakingRewards.new(stringnAkYGU3, stringZyv00E, uintNFIfhjT, {from: accounts[0]});
		const uintLFPkII5 = BigInt("1354")
		const uintdMfSVkw = BigInt("1773")
		const addressCT82TV2 = "0x0000000000000000000000000000000000000001"
		const uintDbCFff4 = BigInt("1524")
		const uintD7Nqrs2 = BigInt("1771")
		const uintr9jAcNQ = BigInt("400")
		const uintfEwiScz = BigInt("2035")
		const uint256arrayjmy014h = await WolfStakingRewardsheGXbW5.updateNotifyRewardAmount.call(uintLFPkII5, {from: accounts[4]});
		const uint256mdF5ERu = await WolfStakingRewardsheGXbW5.balanceOfPerPool.call(addressCT82TV2, uintdMfSVkw, {from: accounts[2]});
		await WolfStakingRewardsheGXbW5.nonReentrant.call({from: accounts[2]});
		const uint256K0g6Grg = await WolfStakingRewardsheGXbW5.rewardPerToken.call(uintDbCFff4, {from: accounts[3]});
		const uint256arraytDKk6k3 = await WolfStakingRewardsheGXbW5.updateNotifyRewardAmount.call(uintD7Nqrs2, {from: accounts[2]});
		const uint256jTkLXLh = await WolfStakingRewardsheGXbW5.withdraw.call(uintfEwiScz, uintr9jAcNQ, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringu6R5gXw = "oAdLRtkhQo4KqtNhdSmXQ"
		const stringdiFjEih = "Oc3sL7LutSnUuzNf23v9Epguu2fu6laqF7uUlLviIxilp2h1Bu7pGRgLwKMxNIHdLGSeY8AYyAvBboDSZExM5V9ff7ja4Az"
		const uintWd0WJ6y = BigInt("225")
		const WolfStakingRewardsUTgjJ1T = await WolfStakingRewards.new(stringu6R5gXw, stringdiFjEih, uintWd0WJ6y, {from: accounts[3]});
		const uintA7FL2H = BigInt("4")
		const addressY5YkUVo = "0x0000000000000000000000000000000000000001"
		const uint256T89O1Oh = await WolfStakingRewardsUTgjJ1T.balanceOfPerPool.call(addressY5YkUVo, uintA7FL2H, {from: accounts[3]});
		const stringizknSPk = await WolfStakingRewardsUTgjJ1T.name.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeqKCoLo = "61NNLUx2HM5fqv0FwKQxp94acJluxpU6esP9feyEsxhOchaq3rKsmpfUhQp"
		const stringl19aWhp = "phf6n3Xq9AIJpTD93KK6mw4tMT5O3GtH5N55oMaJaETvmD56xiCkdoF59DVyap8cK8"
		const uintvS4kMGd = BigInt("210")
		const WolfStakingRewardsqYNrVhs = await WolfStakingRewards.new(stringeqKCoLo, stringl19aWhp, uintvS4kMGd, {from: accounts[3]});
		const uintlT13lhu = BigInt("1325")
		const uintQ5HcyBW = BigInt("825")
		const uintnRuMWH = BigInt("1075")
		const addressbRJWp2B = "0x0000000000000000000000000000000000000001"
		const uint256arrayhZIbsaM = await WolfStakingRewardsqYNrVhs.updateNotifyRewardAmount.call(uintlT13lhu, {from: accounts[2]});
		const uint256JUY4KU = await WolfStakingRewardsqYNrVhs.getRewardForDuration.call(uintQ5HcyBW, {from: accounts[1]});
		const uint256LarjxMA = await WolfStakingRewardsqYNrVhs.balanceOfPerPool.call(addressbRJWp2B, uintnRuMWH, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcRDO2fR = "NOI14ScCyjMcmg3mftjZgmXTdUutNbkMlclUNVZlFgGIB5bE7yl7Va1bJQzplGonsgX2L0HuJraQTwUUFzNH"
		const stringT2nZr1 = "wZPfMqHbcEOHpbmg2hFvCo9nz9sPyKvbFqcoGmjxtTYjegwA1pSBiUzh7MTYWrRr36aksTkmqDfhwsAz1AvYbjAlam"
		const uintE9pM3k1 = BigInt("62")
		const WolfStakingRewardsLJt4Tac = await WolfStakingRewards.new(stringcRDO2fR, stringT2nZr1, uintE9pM3k1, {from: accounts[3]});
		const uintdB2ysCt = BigInt("1298")
		const addressBo0nkoH = accounts[2]
		const uinthJPmHnm = BigInt("981")
		const addressvA9agGv = accounts[2]
		const uintvu0gMTD = BigInt("1560")
		const addressl5WY8Wa = accounts[4]
		await WolfStakingRewardsLJt4Tac.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256XPaTW8c = await WolfStakingRewardsLJt4Tac.balanceOfPerPool.call(addressBo0nkoH, uintdB2ysCt, {from: accounts[2]});
		await WolfStakingRewardsLJt4Tac.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256vEbwBG = await WolfStakingRewardsLJt4Tac.earned.call(addressvA9agGv, uinthJPmHnm, {from: accounts[1]});
		const uint256fRoddKA = await WolfStakingRewardsLJt4Tac.earned.call(addressl5WY8Wa, uintvu0gMTD, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringobdAikO = "sR805FXoaCtlYrJKS1AGLACKeUVMJGFOKFnbETK5Q6G9QaPvxqEzgq9upJWWvYGf8xwIP7gV945g"
		const stringRDMgXY = "h75Ig65kW7gi471v4g4JSNFSjIu3s73tP7DB5CiiY7qTvBnc10LD8iMsl849lh2XMJBF2sgBcWWGmpgDoWuG3MK780tIFJAWYLE"
		const uintQ1jItT2 = BigInt("1")
		const WolfStakingRewardsMMEZMvd = await WolfStakingRewards.new(stringobdAikO, stringRDMgXY, uintQ1jItT2, {from: accounts[3]});
		const uintQRN427p = BigInt("221")
		const uintsmDAj0a = BigInt("1053")
		const uintEtPJ75 = BigInt("1967")
		const addressCuSERKg = "0x0000000000000000000000000000000000000001"
		const uintX2m28o9 = BigInt("344")
		const uintShvQKau = BigInt("1689")
		const uint256wm2bWXF = await WolfStakingRewardsMMEZMvd.withdraw.call(uintsmDAj0a, uintQRN427p, {from: accounts[5]});
		const uint256XviX5FQ = await WolfStakingRewardsMMEZMvd.earned.call(addressCuSERKg, uintEtPJ75, {from: accounts[0]});
		const uint256f5VG6lf = await WolfStakingRewardsMMEZMvd.lastTimeRewardApplicable.call(uintX2m28o9, {from: accounts[3]});
		const uint256bq9PBlU = await WolfStakingRewardsMMEZMvd.lastTimeRewardApplicable.call(uintShvQKau, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGcQ9Lxu = "Gds4bHBYKVuxALo"
		const stringkGwze6C = ""
		const uintpHwFEn = BigInt("195")
		const WolfStakingRewardspXVoXB7 = await WolfStakingRewards.new(stringGcQ9Lxu, stringkGwze6C, uintpHwFEn, {from: accounts[1]});
		const uintYC3nBxs = BigInt("125")
		const address4Pw7OG = accounts[1]
		const stringXw3keqT = await WolfStakingRewardspXVoXB7.symbol.call({from: accounts[4]});
		const addressCncaZdC = await WolfStakingRewardspXVoXB7.updateReward.call(address4Pw7OG, uintYC3nBxs, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeNV9cFS = "NAJ5BmRJpN3UOfzS1"
		const stringWn07OrM = "wlgoEenD045QUTXBblAixMMX7KUY0rsAnFBqMXBTD9MJGipPPuOeqWG6xlVTTTpNrQc"
		const uintwa1azn = BigInt("171")
		const WolfStakingRewardstZSWb4N = await WolfStakingRewards.new(stringeNV9cFS, stringWn07OrM, uintwa1azn, {from: accounts[4]});
		const uinti8oYw6j = BigInt("1738")
		const uintVpK8zU8 = BigInt("1660")
		const uintbSMFsF8 = BigInt("1903")
		const uint8ikiMpw = await WolfStakingRewardstZSWb4N.decimals.call({from: accounts[2]});
		const uint256pYnD2dJ = await WolfStakingRewardstZSWb4N.lastTimeRewardApplicable.call(uinti8oYw6j, {from: accounts[0]});
		const uint256OHAsovu = await WolfStakingRewardstZSWb4N.stake.call(uintbSMFsF8, uintVpK8zU8, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressWIVc31P = accounts[5]
		const addressQqEgSHK = accounts[3]
		const addressZfRZ4W8 = accounts[2]
		const WolfStakingRewardsbSEy6VF = await WolfStakingRewards.new(addressWIVc31P, addressQqEgSHK, addressZfRZ4W8, {from: accounts[3]});
		const uintj5XGGg8 = BigInt("0")
		const uintril3ZDT = BigInt("1479")
		const uintJxUMuX = BigInt("1955")
		const uintPqFZlMq = BigInt("776")
		const uint256TDQgZH8 = await WolfStakingRewardsbSEy6VF.withdraw.call(uintril3ZDT, uintj5XGGg8, {from: accounts[3]});
		const uint256LJ7ilY2 = await WolfStakingRewardsbSEy6VF.withdraw.call(uintPqFZlMq, uintJxUMuX, {from: accounts[1]});
		const uint8y7X8vQO = await WolfStakingRewardsbSEy6VF.decimals.call({from: accounts[5]});

		await expect(WolfStakingRewardsbSEy6VF.withdraw.call(uintril3ZDT, uintj5XGGg8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringmXiJKg0 = "VDLuBq4RpBEkBy9gFrjqpdlgHbQW5RQRoH3Ufyqeq"
		const stringFqDUqgI = "VjvOvRBlWFHWYUyAqUntj4mqTcFIWweCa9cIvQpUgiDpuiKNRya4w37WEKKspRht5WyuJEpymtm"
		const uintT28Bfsp = BigInt("15")
		const WolfStakingRewardsfdDXxq = await WolfStakingRewards.new(stringmXiJKg0, stringFqDUqgI, uintT28Bfsp, {from: accounts[3]});
		const uintQFCo3vD = BigInt("362")
		const uintVfcgYqv = BigInt("874")
		const addressH9QakGE = accounts[1]
		const uintEu23U7J = BigInt("1964")
		const uint256yjgBPdv = await WolfStakingRewardsfdDXxq.totalSupplyPerPool.call(uintQFCo3vD, {from: accounts[1]});
		const uint8ZwaJN2 = await WolfStakingRewardsfdDXxq.decimals.call({from: accounts[1]});
		const addressZ900X8 = await WolfStakingRewardsfdDXxq.updateReward.call(addressH9QakGE, uintVfcgYqv, {from: accounts[4]});
		const uint256arrayYoEX2bZ = await WolfStakingRewardsfdDXxq.updateNotifyRewardAmount.call(uintEu23U7J, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringG7dfu4R = "8yhcayMXn3sOe43IajPccuH66YyQCmYebIeqFyH4MJVkexYqUudjvEkL386oTA"
		const stringRk4fgEx = "lyubxu96wN9H9OF33oD2LHIIgl"
		const uintjgsohbV = BigInt("203")
		const WolfStakingRewardsXI7bZ69 = await WolfStakingRewards.new(stringG7dfu4R, stringRk4fgEx, uintjgsohbV, {from: accounts[2]});
		const uintN2Gbjul = BigInt("789")
		const uintw5hN6t5 = BigInt("63")
		const uinthvEqU2L = BigInt("1707")
		const uintchPsFWJ = BigInt("1991")
		const uinttTLcoBC = BigInt("862")
		const addressZBmgQvx = accounts[4]
		const uintUvL06CN = BigInt("2021")
		const uinte6Uj7KA = BigInt("1799")
		const uint256CD6gVb = await WolfStakingRewardsXI7bZ69.stake.call(uintw5hN6t5, uintN2Gbjul, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VG8cbqD = await WolfStakingRewardsXI7bZ69.stake.call(uintchPsFWJ, uinthvEqU2L, {from: accounts[1]});
		const uint256CM9TruU = await WolfStakingRewardsXI7bZ69.earned.call(addressZBmgQvx, uinttTLcoBC, {from: accounts[0]});
		const uint256AeDz0GM = await WolfStakingRewardsXI7bZ69.withdrawRemainingBalance.call(uinte6Uj7KA, uintUvL06CN, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUVPmIEt = "r1"
		const stringQbNtNJF = "6VRPzzswT7Pp6TGnfwyGzY2C5SmUGgrdVJ9XxhFdsixjDmdOhQcohHPtEhOe6qfExVDMgWramp1nk3HUbIFp9fRse6lF"
		const uintF1dUtdf = BigInt("127")
		const WolfStakingRewardsWtJNZN0 = await WolfStakingRewards.new(stringUVPmIEt, stringQbNtNJF, uintF1dUtdf, {from: accounts[5]});
		const uintZWhC9NS = BigInt("1159")
		const uintljsGm1 = BigInt("1468")
		const uintj02bQGO = BigInt("1116")
		await WolfStakingRewardsWtJNZN0.onlyOwner.call({from: accounts[3]});
		const uint256ZAVsuC2 = await WolfStakingRewardsWtJNZN0.withdrawRemainingBalance.call(uintljsGm1, uintZWhC9NS, {from: accounts[5]});
		const uint256qp0etJa = await WolfStakingRewardsWtJNZN0.getRewardForDuration.call(uintj02bQGO, {from: accounts[3]});
		const uint8K6ornuA = await WolfStakingRewardsWtJNZN0.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const string5fsWmD = "YONC4UZmtGOXjoaIh5rEiGLp6s"
		const stringdZc2xcr = "Lq7l2HxhuPiFxsO9LSF8DB6sI2vJJfzuDkHXxU4xR6QhWnrTUEROl8Gbc3m8nVdiwIXe4oM6ASRHXtI95xCBAwkSuWHch"
		const uintWlo3Paw = BigInt("1")
		const WolfStakingRewardss0b4ihB = await WolfStakingRewards.new(string5fsWmD, stringdZc2xcr, uintWlo3Paw, {from: accounts[2]});
		const uintZ1YuGpm = BigInt("904")
		const uintfsggKc8 = BigInt("838")
		const addressH2RlKBJ = accounts[2]
		const uintJaMUR2G = BigInt("987")
		const uinteO7u2H0 = BigInt("264")
		const uint256arrayGJIzDs1 = await WolfStakingRewardss0b4ihB.updateNotifyRewardAmount.call(uintZ1YuGpm, {from: accounts[4]});
		const stringJiF87uH = await WolfStakingRewardss0b4ihB.symbol.call({from: accounts[2]});
		const uint256AyyEZS5 = await WolfStakingRewardss0b4ihB.balanceOfPerPool.call(addressH2RlKBJ, uintfsggKc8, {from: accounts[3]});
		const uint256Dr1aSTH = await WolfStakingRewardss0b4ihB.getRewardForDuration.call(uintJaMUR2G, {from: accounts[5]});
		const uint8qnhPNtc = await WolfStakingRewardss0b4ihB.decimals.call({from: accounts[0]});
		const uint256pgeoRr1 = await WolfStakingRewardss0b4ihB.lastTimeRewardApplicable.call(uinteO7u2H0, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUmDSJQ4 = "lu2lrHBd"
		const stringS6Zdnyl = "aKSPJAuNmxUFUxWfy05ERixLgTHhnnwLSBv6kyhXsn"
		const uintUGHp0Q3 = BigInt("193")
		const WolfStakingRewardsrLP641W = await WolfStakingRewards.new(stringUmDSJQ4, stringS6Zdnyl, uintUGHp0Q3, {from: accounts[1]});
		const uintpY7WkHB = BigInt("244")
		const uintuMzOcN = BigInt("589")
		const addressvbrJYWE = accounts[0]
		const uint256MG0RqOh = await WolfStakingRewardsrLP641W.rewardPerToken.call(uintpY7WkHB, {from: accounts[0]});
		const uint256rUJNv9h = await WolfStakingRewardsrLP641W.earned.call(addressvbrJYWE, uintuMzOcN, {from: accounts[0]});
		const uint8s4VyRC = await WolfStakingRewardsrLP641W.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbwcvkUi = "mipECfXcPRWnuP4Jv"
		const string57asfj = "tG9MKWghgVjB7nTA8AD49RhkxSjMU1i7lkggzci2hN7HFixBLDYpXsMD37fRJAxzQtRRf2JL1uV19uBhiATm"
		const uintO5oPhuX = BigInt("174")
		const WolfStakingRewardspdUhVVw = await WolfStakingRewards.new(stringbwcvkUi, string57asfj, uintO5oPhuX, {from: accounts[0]});
		const uintj3V1YII = BigInt("383")
		const uintDgvUxj1 = BigInt("1182")
		const uintycaxS2t = BigInt("693")
		const stringOpzWDC = await WolfStakingRewardspdUhVVw.symbol.call({from: accounts[5]});
		const uint256HSihrfq = await WolfStakingRewardspdUhVVw.stake.call(uintDgvUxj1, uintj3V1YII, {from: accounts[3]});
		const uint256NCfs5gJ = await WolfStakingRewardspdUhVVw.lastTimeRewardApplicable.call(uintycaxS2t, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtOcttSF = "D5Y4i80dUzIIIT9b"
		const stringVlYZXG = "JoPZjpJQpX6Xnx"
		const uintG5mmQ2W = BigInt("24")
		const WolfStakingRewardsknsXaC = await WolfStakingRewards.new(stringtOcttSF, stringVlYZXG, uintG5mmQ2W, {from: accounts[5]});
		const uints8ux001 = BigInt("1272")
		const uintu0ffXhw = BigInt("1978")
		const uintsQU72sG = BigInt("202")
		const addressxMUduk = accounts[3]
		const uinthMPaU7b = BigInt("1064")
		const uint256PAYFadA = await WolfStakingRewardsknsXaC.rewardPerToken.call(uints8ux001, {from: accounts[4]});
		const uint256CnixIW = await WolfStakingRewardsknsXaC.totalSupplyPerPool.call(uintu0ffXhw, {from: accounts[1]});
		const uint256O3lX1Cw = await WolfStakingRewardsknsXaC.earned.call(addressxMUduk, uintsQU72sG, {from: accounts[0]});
		await WolfStakingRewardsknsXaC.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256arrayhm6DIBx = await WolfStakingRewardsknsXaC.updateNotifyRewardAmount.call(uinthMPaU7b, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGRUm0J = "q3iwH7u0d08QIDxbBZKISW3jFnpS7o1GbGMhJzmDMrA0nUFAAfUB2BnBNlSDEfz3iKIcxx"
		const stringfKyOH0S = "XIwAz5xrIXYcm4FyMaxeuacJx4mwYWAhwNqVrX5FxozKD9Cma9sFn2hgeYbklmsvvCvaH3qvKa3M54ijN8UA9JbMGaPuvoJx"
		const uintXQN9OF2 = BigInt("1")
		const WolfStakingRewardslEXr8ZL = await WolfStakingRewards.new(stringGRUm0J, stringfKyOH0S, uintXQN9OF2, {from: accounts[3]});
		const uintxrfWyi8 = BigInt("22")
		const uintCA9Pvl = BigInt("1670")
		const addressQFDNGwd = accounts[0]
		const uintpwXTJM5 = BigInt("417")
		const uintE83s6Jh = BigInt("223")
		const uintbb3Xcx = await WolfStakingRewardslEXr8ZL.getReward.call(uintxrfWyi8, {from: accounts[2]});
		const uint256uJX8jeC = await WolfStakingRewardslEXr8ZL.balanceOfPerPool.call(addressQFDNGwd, uintCA9Pvl, {from: accounts[0]});
		const uint256cklNkC = await WolfStakingRewardslEXr8ZL.getRewardForDuration.call(uintpwXTJM5, {from: accounts[1]});
		const uint256CbeZlYv = await WolfStakingRewardslEXr8ZL.rewardPerToken.call(uintE83s6Jh, {from: accounts[1]});
		await WolfStakingRewardslEXr8ZL.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBAAlDJS = "TggsniJY3B4ab99l8aCWTY6PmfpcGAVs95pnuCbvp2khYxdvFjV3eFUeSpXRmOXSrEbg6TEMXk0VU"
		const stringeDj3bUN = "KsDTMB"
		const uintNPkD1PU = BigInt("202")
		const WolfStakingRewardsFxU7OI = await WolfStakingRewards.new(stringBAAlDJS, stringeDj3bUN, uintNPkD1PU, {from: accounts[2]});
		const uintXQ50z2z = BigInt("681")
		const uintQt3tL0q = BigInt("1020")
		const addressRfjU0Pr = accounts[5]
		const uint256df9aMbx = await WolfStakingRewardsFxU7OI.exit.call(uintXQ50z2z, {from: accounts[1]});
		const uint8XJfRBpl = await WolfStakingRewardsFxU7OI.decimals.call({from: accounts[1]});
		const uint8yuo0bhU = await WolfStakingRewardsFxU7OI.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256L36bBm0 = await WolfStakingRewardsFxU7OI.balanceOfPerPool.call(addressRfjU0Pr, uintQt3tL0q, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmFnOMc5 = "YGB8TlRqRFODxEK5wLWOAj2ti19OJsK9BD8HdWiEUeioVVRcCHXn8Q4h7YbqYWAo7MVIzVsRL"
		const stringUIUA5bi = "lqXDOew3evRirjIBsHqJwacRISMH21if9QFaqpDYLxK5SB2CcVdbDs4nUhz9VOuAs"
		const uinttJbj9hE = BigInt("129")
		const WolfStakingRewardsUk9sp58 = await WolfStakingRewards.new(stringmFnOMc5, stringUIUA5bi, uinttJbj9hE, {from: accounts[0]});
		const uintVp0iCm = BigInt("1792")
		const uintWtXV9Ak = BigInt("2012")
		const uintiBi9q3L = BigInt("1821")
		const uint256V2HIZBa = await WolfStakingRewardsUk9sp58.exit.call(uintVp0iCm, {from: accounts[1]});
		const uint256Qcg05HN = await WolfStakingRewardsUk9sp58.exit.call(uintWtXV9Ak, {from: accounts[2]});
		const uintpokevse = await WolfStakingRewardsUk9sp58.getReward.call(uintiBi9q3L, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDa4R3T = "tAKzBOlyJG4NvsRRAKZxXkElg37sG"
		const stringij17OP = "W6rEo7bJg52lPx7A6gnBODIU4vXbQLlp5X3atAElaKf8Xz4MyjAYK4mJKDmXo718Fy9"
		const uintUMYJdzX = BigInt("250")
		const WolfStakingRewardswXI0h3v = await WolfStakingRewards.new(stringDa4R3T, stringij17OP, uintUMYJdzX, {from: accounts[3]});
		const uintb6CdpXV = BigInt("1306")
		await WolfStakingRewardswXI0h3v.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256fPHMHGe = await WolfStakingRewardswXI0h3v.rewardPerToken.call(uintb6CdpXV, {from: accounts[4]});
		await WolfStakingRewardswXI0h3v.nonReentrant.call({from: accounts[4]});
		const stringLFrWeDs = await WolfStakingRewardswXI0h3v.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringko6XHid = "fUoqHshMupBDjff3xu2lpp0QIgIQ1EDZoO7j7wmOj1Ud1mHOPM4CXV"
		const stringDj0hn0N = "EYVOYg8TEe6uVWpmR39m7h6UoPPnkt7hs3i6YOpQqJpDiPU23vLjWvgv5znGJFMgT27s"
		const uintF1rcgYs = BigInt("174")
		const WolfStakingRewardsKqaBcu = await WolfStakingRewards.new(stringko6XHid, stringDj0hn0N, uintF1rcgYs, {from: accounts[4]});
		const uintxbzVnKW = BigInt("361")
		const uintv5TGtp = BigInt("2001")
		const uint8P9mbAM4 = await WolfStakingRewardsKqaBcu.decimals.call({from: accounts[4]});
		const uint256KE2WV01 = await WolfStakingRewardsKqaBcu.stake.call(uintv5TGtp, uintxbzVnKW, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringltDZh5 = "FIFv7hlatw98AbgGwsQSVl2SSXiFHVYUJSdtVn0WSa"
		const stringtcYvz5L = "TMOeHWr4bAHoe8hn2UO8DlRNI"
		const uintT28utf4 = BigInt("58")
		const WolfStakingRewardsNXBoAAY = await WolfStakingRewards.new(stringltDZh5, stringtcYvz5L, uintT28utf4, {from: accounts[2]});
		const uintztqvpWN = BigInt("1240")
		const addresslLDRyB3 = accounts[1]
		const uintua7tte5 = BigInt("903")
		const uintU9ESSfO = BigInt("1831")
		const uintP6a5mOx = BigInt("1609")
		const uintIJSFQPf = BigInt("830")
		const addressR3PCgn0 = await WolfStakingRewardsNXBoAAY.updateReward.call(addresslLDRyB3, uintztqvpWN, {from: accounts[0]});
		const uint2568PgL15 = await WolfStakingRewardsNXBoAAY.withdrawRemainingBalance.call(uintU9ESSfO, uintua7tte5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayNpo5IT1 = await WolfStakingRewardsNXBoAAY.updateNotifyRewardAmount.call(uintP6a5mOx, {from: accounts[1]});
		const uint256QVeoe7Q = await WolfStakingRewardsNXBoAAY.lastTimeRewardApplicable.call(uintIJSFQPf, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfSZ3yk = "d8N4Bq12L1gWQYdyTkk5AWqOAlBBEriOlKexnSsGgq6go8knfAPw8f31YpcxrIHN"
		const stringFy67196 = "kyyUqPn2zU"
		const uintEoF9I1i = BigInt("84")
		const WolfStakingRewardsAVQ0uxa = await WolfStakingRewards.new(stringfSZ3yk, stringFy67196, uintEoF9I1i, {from: "0x0000000000000000000000000000000000000001"});
		const uintgFPEdjo = BigInt("604")
		const uintivDwxvA = BigInt("1741")
		const uintiH8L8y5 = BigInt("2013")
		const uintWhzDDY1 = BigInt("749")
		const uintPmjBS7 = BigInt("1901")
		const addressHFw9rC = accounts[1]
		const uint256hFGc74X = await WolfStakingRewardsAVQ0uxa.totalSupplyPerPool.call(uintgFPEdjo, {from: accounts[3]});
		const uint256xwUxme = await WolfStakingRewardsAVQ0uxa.withdrawRemainingBalance.call(uintiH8L8y5, uintivDwxvA, {from: accounts[2]});
		const uint8ApSYMt9 = await WolfStakingRewardsAVQ0uxa.decimals.call({from: accounts[1]});
		const uint256arrayNQiYSJq = await WolfStakingRewardsAVQ0uxa.updateNotifyRewardAmount.call(uintWhzDDY1, {from: accounts[4]});
		const uint256WPMF69 = await WolfStakingRewardsAVQ0uxa.earned.call(addressHFw9rC, uintPmjBS7, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringA5d2HPl = "v0IovjmrNLH2GWfl4vrHotg9ATbHpGNsJlw1"
		const stringjH43zQG = "Db4TUpZh87X1C8NEqkBMwx9zToNoSKFvYCnz3dqu0z"
		const uintK3vblTm = BigInt("251")
		const WolfStakingRewardsrYlRstE = await WolfStakingRewards.new(stringA5d2HPl, stringjH43zQG, uintK3vblTm, {from: accounts[0]});
		const uintjghBlf = BigInt("1679")
		const uintgL0glAf = BigInt("1958")
		const addressVz8pejL = accounts[4]
		const uint256AECjHK4 = await WolfStakingRewardsrYlRstE.getRewardForDuration.call(uintjghBlf, {from: accounts[4]});
		const addressh8V2C9F = await WolfStakingRewardsrYlRstE.updateReward.call(addressVz8pejL, uintgL0glAf, {from: accounts[2]});
	});
})