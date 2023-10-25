const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringI0OZb04 = "IYpcNptTOIJedZikBypBO9xWjWl4uYlQObsfSu1GHt7OlCFLUz8CdqLHBXIVA"
		const stringnkO32Jm = "SD6BAYr7QLSFLas5E66LUysKkQTKSeJqQUIRT8SRR4ge8BXGe6kc5CJAQBCJx"
		const uintwrgzolg = BigInt("88")
		const WolfStakingRewardsYPILBr = await WolfStakingRewards.new(stringI0OZb04, stringnkO32Jm, uintwrgzolg, {from: accounts[1]});
		const uintcIPoooy = BigInt("1511")
		const uintbASZwG1 = BigInt("450")
		const uintfDqBr3 = BigInt("1912")
		const uint5zKY0q = BigInt("1705")
		const addressPKl756 = accounts[3]
		const uintj99990d = BigInt("1915")
		const uintXALGstG = BigInt("1542")
		const addressn9Mh9Wv = accounts[3]
		const uint256gQIarg = await WolfStakingRewardsYPILBr.withdraw.call(uintbASZwG1, uintcIPoooy, {from: accounts[3]});
		const uint8iVIQIrh = await WolfStakingRewardsYPILBr.decimals.call({from: accounts[3]});
		const uint256sUJn48a = await WolfStakingRewardsYPILBr.lastTimeRewardApplicable.call(uintfDqBr3, {from: accounts[2]});
		const uint256rCqcHnD = await WolfStakingRewardsYPILBr.balanceOfPerPool.call(addressPKl756, uint5zKY0q, {from: accounts[2]});
		const uint256E1QMnDZ = await WolfStakingRewardsYPILBr.rewardPerToken.call(uintj99990d, {from: accounts[3]});
		const uint256hsZY4IH = await WolfStakingRewardsYPILBr.earned.call(addressn9Mh9Wv, uintXALGstG, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressfYVHQTg = accounts[1]
		const addressCMNGRhI = accounts[3]
		const addressr6VNe3D = accounts[2]
		const WolfStakingRewardsTXMRqr7 = await WolfStakingRewards.new(addressfYVHQTg, addressCMNGRhI, addressr6VNe3D, {from: accounts[2]});
		const uintuGBkAgn = BigInt("347")
		const uintn8dM6MK = BigInt("585")
		const uintgCzJCfS = BigInt("1723")
		const addressN9qPl3K = accounts[3]
		const uintgUWbAby = BigInt("2025")
		const uintMTjyKVb = BigInt("843")
		const uint256eEFne6i = await WolfStakingRewardsTXMRqr7.getRewardForDuration.call(uintuGBkAgn, {from: accounts[1]});
		const uint256dL1FSZ8 = await WolfStakingRewardsTXMRqr7.exit.call(uintn8dM6MK, {from: accounts[4]});
		const uint256lCxylFU = await WolfStakingRewardsTXMRqr7.balanceOfPerPool.call(addressN9qPl3K, uintgCzJCfS, {from: accounts[4]});
		const uint256arrayeq2WN1z = await WolfStakingRewardsTXMRqr7.updateNotifyRewardAmount.call(uintgUWbAby, {from: "0x0000000000000000000000000000000000000001"});
		const uint256D6cLVss = await WolfStakingRewardsTXMRqr7.rewardPerToken.call(uintMTjyKVb, {from: accounts[2]});

		await expect(WolfStakingRewardsTXMRqr7.getRewardForDuration.call(uintuGBkAgn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringKAiwhqi = "tP6qmtkWnWYrGgdG7Y3cR"
		const stringqyNa9CR = "vqJytGykoo7atGgqcJNf8u1yIB8rkhjELiwE0KR2wCgMfzfkgYuWWPPSWMd8DQZwCRIo92D5iVZU7jyqJrUZDH8DhJ"
		const uintYlN4CFQ = BigInt("55")
		const WolfStakingRewardsActgfbG = await WolfStakingRewards.new(stringKAiwhqi, stringqyNa9CR, uintYlN4CFQ, {from: accounts[1]});
		const uintkh6MLyU = BigInt("1032")
		const uintswsMMok = BigInt("1605")
		await WolfStakingRewardsActgfbG.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256oa4Pu4W = await WolfStakingRewardsActgfbG.stake.call(uintswsMMok, uintkh6MLyU, {from: accounts[4]});
		await WolfStakingRewardsActgfbG.nonReentrant.call({from: accounts[5]});
		const stringzBDZ0E5 = await WolfStakingRewardsActgfbG.name.call({from: accounts[4]});
		await WolfStakingRewardsActgfbG.onlyOwner.call({from: accounts[3]});
		await WolfStakingRewardsActgfbG.onlyOwner.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtxuhoVj = "ICXke58EUxlfiUAMSlHoxdOJemcuJzlKauXjb3EJq47oa3dXORySNKsiLhvC1L"
		const stringR1J9a3h = "mVgfgIas9FJQD293g2Py18zfUG29jpwufPGYVfAsCAwEfvVhrQdKxzHtpEVEG0BOBGPWUkUdrD9kbaQ5s97uqtsr39J4"
		const uintpAfva3I = BigInt("43")
		const WolfStakingRewardsgbYrWg6 = await WolfStakingRewards.new(stringtxuhoVj, stringR1J9a3h, uintpAfva3I, {from: accounts[4]});
		const uintT7Xp6Qo = BigInt("1124")
		const addressPtNEcEe = accounts[2]
		const uintHRl1vQB = BigInt("1981")
		const uinthqLksCr = BigInt("230")
		const uintYpHyCO = BigInt("1175")
		const uintfvfdisi = BigInt("975")
		const uintK5n7Z96 = BigInt("1532")
		const uint256Cu1k4A = await WolfStakingRewardsgbYrWg6.earned.call(addressPtNEcEe, uintT7Xp6Qo, {from: accounts[0]});
		const uint256aKbKJnS = await WolfStakingRewardsgbYrWg6.totalSupplyPerPool.call(uintHRl1vQB, {from: accounts[3]});
		const uint256cePNxaw = await WolfStakingRewardsgbYrWg6.stake.call(uintYpHyCO, uinthqLksCr, {from: accounts[2]});
		const uint256YkkTgy = await WolfStakingRewardsgbYrWg6.stake.call(uintK5n7Z96, uintfvfdisi, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSNtgt4H = "fmls72ogDP0viOyE7KrWXi5GdRHEDdK4U"
		const stringpsnVqE0 = "469bVjouAJAMpmz3Go51TaoHvfk9DRRYIRQ9JeOS0lSLufCzj2o5iFt2"
		const uintP0Nx1sK = BigInt("80")
		const WolfStakingRewardsmVpvaU = await WolfStakingRewards.new(stringSNtgt4H, stringpsnVqE0, uintP0Nx1sK, {from: accounts[0]});
		const uintNZfAsa = BigInt("1461")
		const uint256UWgjjuC = await WolfStakingRewardsmVpvaU.totalSupplyPerPool.call(uintNZfAsa, {from: accounts[4]});
		await WolfStakingRewardsmVpvaU.nonReentrant.call({from: accounts[1]});
		const stringZGJWUAs = await WolfStakingRewardsmVpvaU.name.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressHRgnWpi = "0x0000000000000000000000000000000000000001"
		const addressY7lrDRm = accounts[0]
		const addressUvjEVfS = accounts[1]
		const WolfStakingRewardspYs7RCn = await WolfStakingRewards.new(addressHRgnWpi, addressY7lrDRm, addressUvjEVfS, {from: "0x0000000000000000000000000000000000000001"});
		const uintkKx9lDf = BigInt("1635")
		const uintKDYf4Tx = BigInt("57")
		const uintis0Aeep = BigInt("175")
		const uintntWBquV = BigInt("392")
		const uintF3YDODQ = BigInt("1526")
		const uint256bOCk7Oi = await WolfStakingRewardspYs7RCn.getRewardForDuration.call(uintkKx9lDf, {from: accounts[2]});
		const uint256INbhS0 = await WolfStakingRewardspYs7RCn.withdraw.call(uintis0Aeep, uintKDYf4Tx, {from: accounts[0]});
		const uint256Pj3GKXK = await WolfStakingRewardspYs7RCn.stake.call(uintF3YDODQ, uintntWBquV, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHubW53W = "OEjeyR9Uq"
		const stringVZqptaq = "jD1h9CPpluEJME3EsEKQsXPnbXYYwJGRM7RVeWXl9"
		const uintoKqa0w8 = BigInt("19")
		const WolfStakingRewardsGuEMvTf = await WolfStakingRewards.new(stringHubW53W, stringVZqptaq, uintoKqa0w8, {from: accounts[1]});
		const uinthNRIb4U = BigInt("1332")
		const uintYb6HAmY = BigInt("456")
		const uintGF1a0eK = BigInt("850")
		const uintE5M6o3J = BigInt("742")
		const uintesbXzBG = BigInt("1091")
		const uintdt5IOF3 = BigInt("1846")
		const uintXO4W7jI = BigInt("1560")
		const uint256GKdxT8 = await WolfStakingRewardsGuEMvTf.rewardPerToken.call(uinthNRIb4U, {from: accounts[2]});
		const uint256arraylEx4Bsz = await WolfStakingRewardsGuEMvTf.updateNotifyRewardAmount.call(uintYb6HAmY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dHpsrTH = await WolfStakingRewardsGuEMvTf.withdraw.call(uintE5M6o3J, uintGF1a0eK, {from: accounts[0]});
		const uint256LP2ZKdL = await WolfStakingRewardsGuEMvTf.totalSupplyPerPool.call(uintesbXzBG, {from: accounts[2]});
		await WolfStakingRewardsGuEMvTf.nonReentrant.call({from: accounts[0]});
		const uint256lxCUwD = await WolfStakingRewardsGuEMvTf.withdraw.call(uintXO4W7jI, uintdt5IOF3, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressxhCHu3 = accounts[5]
		const addressCqwFW36 = accounts[1]
		const addressq6yhNun = accounts[0]
		const WolfStakingRewardsZuqgMk5 = await WolfStakingRewards.new(addressxhCHu3, addressCqwFW36, addressq6yhNun, {from: accounts[2]});
		const uintupLVDEU = BigInt("325")
		const uintA5Rj3Em = BigInt("629")
		const uintPYPg585 = BigInt("1358")
		const addressqnnIvlZ = accounts[5]
		const uintvIRfzxD = BigInt("737")
		const addressUR9VHD7 = accounts[4]
		const uint256OjvuwyG = await WolfStakingRewardsZuqgMk5.lastTimeRewardApplicable.call(uintupLVDEU, {from: accounts[4]});
		const stringXADNhug = await WolfStakingRewardsZuqgMk5.symbol.call({from: accounts[4]});
		const uint256nxTGz41 = await WolfStakingRewardsZuqgMk5.getRewardForDuration.call(uintA5Rj3Em, {from: accounts[2]});
		const uint256XjoinfZ = await WolfStakingRewardsZuqgMk5.earned.call(addressqnnIvlZ, uintPYPg585, {from: accounts[2]});
		const uint256nrqrlSB = await WolfStakingRewardsZuqgMk5.balanceOfPerPool.call(addressUR9VHD7, uintvIRfzxD, {from: accounts[2]});
		await WolfStakingRewardsZuqgMk5.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256OjvuwyG, BigInt("0"))
		await expect(WolfStakingRewardsZuqgMk5.symbol.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresssVJGOhw = accounts[0]
		const addressSlhwUb6 = accounts[3]
		const addresswRKBuA6 = accounts[2]
		const WolfStakingRewardszIaEVlI = await WolfStakingRewards.new(addresssVJGOhw, addressSlhwUb6, addresswRKBuA6, {from: accounts[5]});
		const uintrlSbvfD = BigInt("1656")
		const uintRK2Qfhv = BigInt("2033")
		const uintE4ekw9v = BigInt("1294")
		const uinteqIAUHm = BigInt("49")
		const uint256fCsVXmp = await WolfStakingRewardszIaEVlI.totalSupplyPerPool.call(uintrlSbvfD, {from: accounts[4]});
		const stringGo9W78e = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]});
		const string6m6TLJ = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]});
		const uint256EjpEqKt = await WolfStakingRewardszIaEVlI.withdrawRemainingBalance.call(uintE4ekw9v, uintRK2Qfhv, {from: accounts[1]});
		const uint8XyJ2hAb = await WolfStakingRewardszIaEVlI.decimals.call({from: accounts[1]});
		const uint256WnM7beG = await WolfStakingRewardszIaEVlI.rewardPerToken.call(uinteqIAUHm, {from: accounts[0]});

		assert.equal(uint256fCsVXmp, BigInt("0"))
		await expect(WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const address3EpYiI = accounts[0]
		const addressyYnoU5d = accounts[3]
		const addressDEIYdBD = accounts[2]
		const WolfStakingRewardszIaEVlI = await WolfStakingRewards.new(address3EpYiI, addressyYnoU5d, addressDEIYdBD, {from: accounts[5]});
		const uints5yGh6e = BigInt("1656")
		const uintK8abF6w = BigInt("2021")
		const uintBZP3NhE = BigInt("2033")
		const uintf44ZFrK = BigInt("1294")
		const uinttzOzqzg = BigInt("41")
		const uint256fCsVXmp = await WolfStakingRewardszIaEVlI.totalSupplyPerPool.call(uints5yGh6e, {from: accounts[4]});
		const uint256E6tZHYD = await WolfStakingRewardszIaEVlI.exit.call(uintK8abF6w, {from: accounts[3]});
		const stringGo9W78e = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]});
		const string6m6TLJ = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]});
		const uint256EjpEqKt = await WolfStakingRewardszIaEVlI.withdrawRemainingBalance.call(uintf44ZFrK, uintBZP3NhE, {from: accounts[1]});
		const uint8XyJ2hAb = await WolfStakingRewardszIaEVlI.decimals.call({from: accounts[1]});
		const uint256WnM7beG = await WolfStakingRewardszIaEVlI.rewardPerToken.call(uinttzOzqzg, {from: accounts[0]});

		assert.equal(uint256fCsVXmp, BigInt("0"))
		await expect(WolfStakingRewardszIaEVlI.exit.call(uintK8abF6w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringur2aEm2 = "084o3qA"
		const stringyu3uv1B = "ctXp6rcn8KbbaACz8qX1gNaa5TaRgZb"
		const uintBAx7cs9 = BigInt("108")
		const WolfStakingRewardsmmeXIVP = await WolfStakingRewards.new(stringur2aEm2, stringyu3uv1B, uintBAx7cs9, {from: accounts[0]});
		const uintNc3q763 = BigInt("1214")
		const uintDgsp7K = BigInt("270")
		await WolfStakingRewardsmmeXIVP.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256IYAtjmu = await WolfStakingRewardsmmeXIVP.exit.call(uintNc3q763, {from: accounts[5]});
		const uintrWKN50H = await WolfStakingRewardsmmeXIVP.getReward.call(uintDgsp7K, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXMX3NeP = "1JLoq7W13aXKOGEN9s"
		const stringAydckEa = "hwjzSSbnRp3O8vzz2Tr9USGQ8j1aC8l8nCot5OIStt3AQUDloayPtqz8S2in"
		const uintVZkMULL = BigInt("95")
		const WolfStakingRewardsYHAr93d = await WolfStakingRewards.new(stringXMX3NeP, stringAydckEa, uintVZkMULL, {from: "0x0000000000000000000000000000000000000001"});
		const uintXiqWWJ = BigInt("902")
		const uintVXorZU = BigInt("145")
		const uintOYdRUXH = BigInt("345")
		const uintsahdxzN = BigInt("810")
		const uintRFzZLBx = BigInt("1326")
		const addresslEio08r = accounts[0]
		const stringOX7MCbn = await WolfStakingRewardsYHAr93d.name.call({from: accounts[5]});
		const uint256nr046oA = await WolfStakingRewardsYHAr93d.lastTimeRewardApplicable.call(uintXiqWWJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256array9DSJ0g = await WolfStakingRewardsYHAr93d.updateNotifyRewardAmount.call(uintVXorZU, {from: "0x0000000000000000000000000000000000000001"});
		const stringLNbkNQm = await WolfStakingRewardsYHAr93d.symbol.call({from: accounts[1]});
		const uint256WE4Rtz = await WolfStakingRewardsYHAr93d.stake.call(uintsahdxzN, uintOYdRUXH, {from: accounts[0]});
		const uint256zY0TeuH = await WolfStakingRewardsYHAr93d.earned.call(addresslEio08r, uintRFzZLBx, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressZCakIah = accounts[0]
		const addressTdzX41E = accounts[3]
		const addressTGwX3bt = accounts[2]
		const WolfStakingRewardszIaEVlI = await WolfStakingRewards.new(addressZCakIah, addressTdzX41E, addressTGwX3bt, {from: accounts[5]});
		const uinte6imA6d = BigInt("149")
		const uintoRZsFoU = BigInt("164")
		const uintYyrTmBH = BigInt("1656")
		const uintJUhzzz9 = BigInt("2021")
		const uintDouwHDf = BigInt("414")
		const addressCf1yaE8 = accounts[2]
		const uintIY4jxnu = BigInt("2033")
		const uintPplDrxj = BigInt("1294")
		const uint9RcCPB = BigInt("1329")
		const uintLyoLJtL = BigInt("1215")
		const uintbSXgEOK = BigInt("1855")
		const uintICXleCT = BigInt("41")
		const uintaCkNW9K = BigInt("1272")
		const uint256Ev0XU1X = await WolfStakingRewardszIaEVlI.stake.call(uintoRZsFoU, uinte6imA6d, {from: accounts[3]});
		const uint256fCsVXmp = await WolfStakingRewardszIaEVlI.totalSupplyPerPool.call(uintYyrTmBH, {from: accounts[4]});
		const uint256E6tZHYD = await WolfStakingRewardszIaEVlI.exit.call(uintJUhzzz9, {from: accounts[3]});
		const uint256Vf15SCf = await WolfStakingRewardszIaEVlI.balanceOfPerPool.call(addressCf1yaE8, uintDouwHDf, {from: accounts[4]});
		const stringGo9W78e = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]});
		const string6m6TLJ = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]});
		const uint256EjpEqKt = await WolfStakingRewardszIaEVlI.withdrawRemainingBalance.call(uintPplDrxj, uintIY4jxnu, {from: accounts[1]});
		const uint256rLl8X6j = await WolfStakingRewardszIaEVlI.totalSupplyPerPool.call(uint9RcCPB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K87Nt8x = await WolfStakingRewardszIaEVlI.withdrawRemainingBalance.call(uintbSXgEOK, uintLyoLJtL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WnM7beG = await WolfStakingRewardszIaEVlI.rewardPerToken.call(uintICXleCT, {from: accounts[0]});
		const uint256arrayNajBmmD = await WolfStakingRewardszIaEVlI.updateNotifyRewardAmount.call(uintaCkNW9K, {from: accounts[3]});

		await expect(WolfStakingRewardszIaEVlI.stake.call(uintoRZsFoU, uinte6imA6d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressKcvlJOA = "0x0000000000000000000000000000000000000001"
		const addressaZ9agGq = "0x0000000000000000000000000000000000000001"
		const addressHSuDVEC = accounts[0]
		const WolfStakingRewardseNibjbW = await WolfStakingRewards.new(addressKcvlJOA, addressaZ9agGq, addressHSuDVEC, {from: accounts[0]});
		const uintlQ0taL = BigInt("56")
		const addressjTOPXET = accounts[5]
		const uintoI25img = BigInt("1369")
		const uinthhxhBYm = BigInt("911")
		const uintmMN9nNN = BigInt("1320")
		const uintqERY1qk = BigInt("1007")
		const uintyO4CYyP = BigInt("38")
		const uint256ouizZMq = await WolfStakingRewardseNibjbW.balanceOfPerPool.call(addressjTOPXET, uintlQ0taL, {from: accounts[0]});
		const uint256F3A0uob = await WolfStakingRewardseNibjbW.exit.call(uintoI25img, {from: accounts[1]});
		const uint256F5CzwzW = await WolfStakingRewardseNibjbW.exit.call(uinthhxhBYm, {from: accounts[4]});
		const uint256gyn7yzd = await WolfStakingRewardseNibjbW.stake.call(uintqERY1qk, uintmMN9nNN, {from: accounts[4]});
		const uint256Q1N0SC = await WolfStakingRewardseNibjbW.totalSupplyPerPool.call(uintyO4CYyP, {from: accounts[0]});

		assert.equal(uint256ouizZMq, BigInt("0"))
		await expect(WolfStakingRewardseNibjbW.exit.call(uintoI25img, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringSBnH8SH = "BHNRLXbxDcSvk7Of2qQ2zy7EdANRKiCwSCFqMGOHQsoKCrdYioHtXqS64llPkOsSKTLwhqngHRgQn3pCds4henmBSEKr"
		const stringohKENJ = "tp7T1EwWqojYNBIYqqfacFlkLZ1GWGAX77EX6zzZFwyvvhNON"
		const uintF2qiI3I = BigInt("248")
		const WolfStakingRewardsp2mOrT = await WolfStakingRewards.new(stringSBnH8SH, stringohKENJ, uintF2qiI3I, {from: accounts[5]});
		const uintMOCSRw = BigInt("1281")
		const addressPp8yWH4 = accounts[0]
		const uintEhulcdY = BigInt("449")
		await WolfStakingRewardsp2mOrT.onlyOwner.call({from: accounts[3]});
		const addressQNIXmP0 = await WolfStakingRewardsp2mOrT.updateReward.call(addressPp8yWH4, uintMOCSRw, {from: accounts[2]});
		const uint256rNLPxss = await WolfStakingRewardsp2mOrT.getRewardForDuration.call(uintEhulcdY, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbzIPtD4 = "THhIZ4MnCjQN1kU1N5ROLDrrMHeyTjea5tEtkqiekyet9op9rFi3LhVIcQ1ZFDUfJkEhui"
		const stringBzXIscV = "vXnPwOShlmjfMvXs8S"
		const uintn4n9iPR = BigInt("79")
		const WolfStakingRewardsfJhteN = await WolfStakingRewards.new(stringbzIPtD4, stringBzXIscV, uintn4n9iPR, {from: "0x0000000000000000000000000000000000000001"});
		const uintRH7pZ5z = BigInt("1706")
		const address0dQe3p = accounts[5]
		const uintIVlfkan = BigInt("862")
		const addressK9ShpJ = await WolfStakingRewardsfJhteN.updateReward.call(address0dQe3p, uintRH7pZ5z, {from: accounts[0]});
		await WolfStakingRewardsfJhteN.nonReentrant.call({from: accounts[4]});
		const uint256DR5Hi4D = await WolfStakingRewardsfJhteN.totalSupplyPerPool.call(uintIVlfkan, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringE4wRYbY = "re8ub60KktujyJYyVn"
		const stringV6uiYGY = "RS7rGmFrWAlAYqu"
		const uintFTmTOGI = BigInt("24")
		const WolfStakingRewardsPHVviqx = await WolfStakingRewards.new(stringE4wRYbY, stringV6uiYGY, uintFTmTOGI, {from: accounts[0]});
		const uintvOUitAP = BigInt("306")
		const addressZEK6id5 = accounts[4]
		const uint256AkjPULc = await WolfStakingRewardsPHVviqx.balanceOfPerPool.call(addressZEK6id5, uintvOUitAP, {from: accounts[0]});
		await WolfStakingRewardsPHVviqx.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressuSNNtwN = accounts[0]
		const addressBzxwPSo = accounts[3]
		const addresszLqVU4j = accounts[2]
		const WolfStakingRewardszIaEVlI = await WolfStakingRewards.new(addressuSNNtwN, addressBzxwPSo, addresszLqVU4j, {from: accounts[5]});
		const uinto1vEo2i = BigInt("1656")
		const uintedwZ2X = BigInt("1075")
		const uintLdEBoLK = BigInt("1882")
		const uintafHMVUF = BigInt("2033")
		const uintnBsOcBv = BigInt("1294")
		const uintfQeMhC0 = BigInt("182")
		const uintT2DJFwi = BigInt("76")
		const uintKkQ79WU = BigInt("291")
		const uint256fCsVXmp = await WolfStakingRewardszIaEVlI.totalSupplyPerPool.call(uinto1vEo2i, {from: accounts[4]});
		const uintMjeZwgC = await WolfStakingRewardszIaEVlI.getReward.call(uintedwZ2X, {from: accounts[1]});
		const uint256E6tZHYD = await WolfStakingRewardszIaEVlI.exit.call(uintLdEBoLK, {from: accounts[3]});
		const string6m6TLJ = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]});
		const uint256EjpEqKt = await WolfStakingRewardszIaEVlI.withdrawRemainingBalance.call(uintnBsOcBv, uintafHMVUF, {from: accounts[1]});
		const stringNHDoXlM = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[1]});
		const uint256TBfYgC0 = await WolfStakingRewardszIaEVlI.stake.call(uintT2DJFwi, uintfQeMhC0, {from: accounts[1]});
		const uint8XyJ2hAb = await WolfStakingRewardszIaEVlI.decimals.call({from: accounts[1]});
		const uint256WnM7beG = await WolfStakingRewardszIaEVlI.rewardPerToken.call(uintKkQ79WU, {from: accounts[0]});

		assert.equal(uint256fCsVXmp, BigInt("0"))
		await expect(WolfStakingRewardszIaEVlI.exit.call(uintLdEBoLK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const address6Zarnb = accounts[0]
		const addressgdzhiu0 = accounts[3]
		const addresskM746Uj = accounts[2]
		const WolfStakingRewardszIaEVlI = await WolfStakingRewards.new(address6Zarnb, addressgdzhiu0, addresskM746Uj, {from: accounts[5]});
		const uintrRRvH2W = BigInt("149")
		const uintRY3DRDM = BigInt("164")
		const uintettHb9G = BigInt("1656")
		const uintbyfGD8z = BigInt("1594")
		const uintsrVqLzp = BigInt("2021")
		const uintaDHapT5 = BigInt("414")
		const uintcvev3YE = BigInt("1294")
		const uintxG1oYtK = BigInt("1329")
		const uintCGdIFSG = BigInt("1215")
		const uintVREurj = BigInt("1855")
		const uinto2e0dsn = BigInt("41")
		const uintdlMp07d = BigInt("1272")
		const uint256Ev0XU1X = await WolfStakingRewardszIaEVlI.stake.call(uintRY3DRDM, uintrRRvH2W, {from: accounts[3]});
		const uint256fCsVXmp = await WolfStakingRewardszIaEVlI.totalSupplyPerPool.call(uintettHb9G, {from: accounts[4]});
		const uint256qKfGb1Q = await WolfStakingRewardszIaEVlI.rewardPerToken.call(uintbyfGD8z, {from: accounts[0]});
		const uint256E6tZHYD = await WolfStakingRewardszIaEVlI.exit.call(uintsrVqLzp, {from: accounts[3]});
		const stringGo9W78e = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]});
		const string6m6TLJ = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]});
		const uint256EjpEqKt = await WolfStakingRewardszIaEVlI.withdrawRemainingBalance.call(uintcvev3YE, uintaDHapT5, {from: accounts[1]});
		const uint256rLl8X6j = await WolfStakingRewardszIaEVlI.totalSupplyPerPool.call(uintxG1oYtK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K87Nt8x = await WolfStakingRewardszIaEVlI.withdrawRemainingBalance.call(uintVREurj, uintCGdIFSG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WnM7beG = await WolfStakingRewardszIaEVlI.rewardPerToken.call(uinto2e0dsn, {from: accounts[0]});
		const uint256arrayNajBmmD = await WolfStakingRewardszIaEVlI.updateNotifyRewardAmount.call(uintdlMp07d, {from: accounts[3]});

		await expect(WolfStakingRewardszIaEVlI.stake.call(uintRY3DRDM, uintrRRvH2W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressxkKqWYz = accounts[0]
		const addressGV09LNz = accounts[3]
		const addresskLZJ75L = accounts[2]
		const WolfStakingRewardszIaEVlI = await WolfStakingRewards.new(addressxkKqWYz, addressGV09LNz, addresskLZJ75L, {from: accounts[5]});
		const uintWI4V9dv = BigInt("1029")
		const uintwspkBuY = BigInt("1674")
		const uintr8thxKB = BigInt("1856")
		const uintXxSsCJr = BigInt("1434")
		const uintWehMdLi = BigInt("2053")
		const uintdfv7Vaf = BigInt("2033")
		const uintKdd2Z9b = BigInt("1294")
		const uintFci6ACl = BigInt("41")
		const uintq6SNGn6 = BigInt("1093")
		const uint256arraySO2kjb = await WolfStakingRewardszIaEVlI.updateNotifyRewardAmount.call(uintWI4V9dv, {from: accounts[1]});
		const uint256fCsVXmp = await WolfStakingRewardszIaEVlI.totalSupplyPerPool.call(uintwspkBuY, {from: accounts[4]});
		const uint256NP8uru = await WolfStakingRewardszIaEVlI.stake.call(uintXxSsCJr, uintr8thxKB, {from: accounts[3]});
		const uint256E6tZHYD = await WolfStakingRewardszIaEVlI.exit.call(uintWehMdLi, {from: accounts[3]});
		const string6m6TLJ = await WolfStakingRewardszIaEVlI.symbol.call({from: accounts[2]});
		const uint256EjpEqKt = await WolfStakingRewardszIaEVlI.withdrawRemainingBalance.call(uintKdd2Z9b, uintdfv7Vaf, {from: accounts[1]});
		const uint8XyJ2hAb = await WolfStakingRewardszIaEVlI.decimals.call({from: accounts[1]});
		const uint256WnM7beG = await WolfStakingRewardszIaEVlI.rewardPerToken.call(uintFci6ACl, {from: accounts[0]});
		const uint8opRbFQx = await WolfStakingRewardszIaEVlI.decimals.call({from: accounts[5]});
		const uint256zJ3KYDY = await WolfStakingRewardszIaEVlI.totalSupplyPerPool.call(uintq6SNGn6, {from: accounts[0]});

		await expect(WolfStakingRewardszIaEVlI.updateNotifyRewardAmount.call(uintWI4V9dv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringLRVmKI3 = "boRiAiROczZOm8hVGO82XXBTx6w3nRUq2oLc3Yf0ZUMmDk3agy"
		const stringAhJhNeV = "yjO3M3YJsD96gZDwIoCOdKySOmztS5FNz3qEaVoivYUsf55xHm9QnkYgkZrai9CIPvOxu6FW3MqYgXiIVEfV5z6"
		const uintE4AbDZZ = BigInt("193")
		const WolfStakingRewardsjfQ9OeY = await WolfStakingRewards.new(stringLRVmKI3, stringAhJhNeV, uintE4AbDZZ, {from: accounts[4]});
		const uintxs37ulv = BigInt("1286")
		const uintDZWjiu3 = BigInt("1118")
		const uint256arrayk5nc1Su = await WolfStakingRewardsjfQ9OeY.updateNotifyRewardAmount.call(uintxs37ulv, {from: accounts[1]});
		const uint256Tw2LZBJ = await WolfStakingRewardsjfQ9OeY.totalSupplyPerPool.call(uintDZWjiu3, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringG06lnQZ = "Ax2seP2rT89pU8ebGcpucsBf"
		const stringpbw4UNb = "KQqxU2F44TcTiKuDLruU7wJOdvvDUruUZj4uKyscr34P1erEOfQJd3UxwhjcdKMSAtpOu"
		const uintQPh1AXD = BigInt("53")
		const WolfStakingRewardsM1gvMMD = await WolfStakingRewards.new(stringG06lnQZ, stringpbw4UNb, uintQPh1AXD, {from: accounts[3]});
		const uintXvw0gvS = BigInt("513")
		const uintiABJw6i = BigInt("650")
		const uintP1Lr2FG = BigInt("462")
		const uintrzwyxMa = BigInt("1650")
		await WolfStakingRewardsM1gvMMD.nonReentrant.call({from: accounts[4]});
		const uint256Ckl4iWR = await WolfStakingRewardsM1gvMMD.withdrawRemainingBalance.call(uintiABJw6i, uintXvw0gvS, {from: accounts[2]});
		const uintHKbp3xq = await WolfStakingRewardsM1gvMMD.getReward.call(uintP1Lr2FG, {from: accounts[2]});
		const uint256arrayVZYWDY0 = await WolfStakingRewardsM1gvMMD.updateNotifyRewardAmount.call(uintrzwyxMa, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDaECDR2 = "xoj7L4WyQVwialqkkH8YSilNFV5l16QMGvtW4f2sOrmMhQ6cUpMc8UgabLLLHupmNGEXxP3Sy35cTEOB"
		const stringCms61e = "qVLwpn7O7cD"
		const uintfqXtCs = BigInt("159")
		const WolfStakingRewardsAP4kUQC = await WolfStakingRewards.new(stringDaECDR2, stringCms61e, uintfqXtCs, {from: accounts[2]});
		const uintAK0NHbX = BigInt("863")
		const addresst4lXKxl = accounts[3]
		const uintUAbviLa = BigInt("1089")
		const uintD5ZGJ7 = BigInt("1337")
		const uint256HAE1b2R = await WolfStakingRewardsAP4kUQC.earned.call(addresst4lXKxl, uintAK0NHbX, {from: accounts[2]});
		const uint256nguK62f = await WolfStakingRewardsAP4kUQC.totalSupplyPerPool.call(uintUAbviLa, {from: accounts[2]});
		const uintOH1rVcq = await WolfStakingRewardsAP4kUQC.getReward.call(uintD5ZGJ7, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressa3RUiL = "0x0000000000000000000000000000000000000001"
		const addressqKAt3ys = "0x0000000000000000000000000000000000000001"
		const addressZ8NmZKV = accounts[0]
		const WolfStakingRewardseNibjbW = await WolfStakingRewards.new(addressa3RUiL, addressqKAt3ys, addressZ8NmZKV, {from: accounts[0]});
		const uintPG4lY3 = BigInt("417")
		const addresst7bFehk = accounts[0]
		const uintj5WDnMU = BigInt("951")
		const uintcz0sBvb = BigInt("1778")
		const uintWpcRX7o = BigInt("1410")
		const uintgBmvSb4 = BigInt("656")
		const uintxNiYeHa = BigInt("1203")
		const addressGP49L4y = "0x0000000000000000000000000000000000000001"
		const uintXOwxdnm = BigInt("38")
		const uintipizEBm = BigInt("1469")
		const uintlI0Xj9t = BigInt("689")
		const uint256D7Wn1RO = await WolfStakingRewardseNibjbW.earned.call(addresst7bFehk, uintPG4lY3, {from: accounts[1]});
		const uint2561jLZZY = await WolfStakingRewardseNibjbW.withdrawRemainingBalance.call(uintcz0sBvb, uintj5WDnMU, {from: accounts[1]});
		const uint256F3A0uob = await WolfStakingRewardseNibjbW.exit.call(uintWpcRX7o, {from: accounts[1]});
		const stringjZ7fe8x = await WolfStakingRewardseNibjbW.symbol.call({from: accounts[5]});
		const uintb3i35TP = await WolfStakingRewardseNibjbW.getReward.call(uintgBmvSb4, {from: "0x0000000000000000000000000000000000000001"});
		const addressPjiULf = await WolfStakingRewardseNibjbW.updateReward.call(addressGP49L4y, uintxNiYeHa, {from: accounts[4]});
		const uint256Q1N0SC = await WolfStakingRewardseNibjbW.totalSupplyPerPool.call(uintXOwxdnm, {from: accounts[0]});
		const uint256K9kTFmJ = await WolfStakingRewardseNibjbW.stake.call(uintlI0Xj9t, uintipizEBm, {from: accounts[4]});

		assert.equal(uint256D7Wn1RO, BigInt("0"))
		await expect(WolfStakingRewardseNibjbW.withdrawRemainingBalance.call(uintcz0sBvb, uintj5WDnMU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringAnv9zFR = "x1kFDAWsCW6mb0k3P8qmYFfAUI6PdP1ZWrJtxmYCghg3eg7V1fafSkMUTDN5ENGwnp0gKEz4OG"
		const stringzNAzV1l = "Rorpd"
		const uintq80Zxxy = BigInt("95")
		const WolfStakingRewardsdfXSprt = await WolfStakingRewards.new(stringAnv9zFR, stringzNAzV1l, uintq80Zxxy, {from: accounts[1]});
		const uintGRaaMdD = BigInt("1706")
		const addressnGuhdKq = accounts[4]
		const uintQpuIDc = BigInt("933")
		const addressJdBUVhA = accounts[2]
		const uintR4xmSkL = BigInt("1484")
		const uintNnboxE9 = BigInt("1478")
		const uintufWxAU7 = BigInt("1348")
		const uintoYqsNUF = BigInt("1290")
		const addressTWTJVA = accounts[2]
		const uint256xhfZJpi = await WolfStakingRewardsdfXSprt.balanceOfPerPool.call(addressnGuhdKq, uintGRaaMdD, {from: accounts[2]});
		const addressE5COdsG = await WolfStakingRewardsdfXSprt.updateReward.call(addressJdBUVhA, uintQpuIDc, {from: accounts[4]});
		const uinttmoMPhR = await WolfStakingRewardsdfXSprt.getReward.call(uintR4xmSkL, {from: accounts[3]});
		const uint256asznF0J = await WolfStakingRewardsdfXSprt.exit.call(uintNnboxE9, {from: accounts[0]});
		const uintZswhA6 = await WolfStakingRewardsdfXSprt.getReward.call(uintufWxAU7, {from: "0x0000000000000000000000000000000000000001"});
		const addressLskPGhD = await WolfStakingRewardsdfXSprt.updateReward.call(addressTWTJVA, uintoYqsNUF, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCyA0ikt = "R8pkdjthavr5gmm2UeYPI7Wb0t1gReCxJK82D9bI4DgcWQfcqULurXhbxFWE8qtPnrmrgrnEEbNZwOeCW3vClXcQG"
		const string8fhgra = "Ojzu8CV1dc60EZMfMrf9nTMB1ri5sQUyCB9EUh2GBHNgiyE2CtZPH6YqHHlRA0MhDMqsBplAupBbK6Ywkp"
		const uintR9kHaHH = BigInt("80")
		const WolfStakingRewardsigBrB2Q = await WolfStakingRewards.new(stringCyA0ikt, string8fhgra, uintR9kHaHH, {from: accounts[5]});
		const uintmUlJ63O = BigInt("425")
		const uintrmFFEys = BigInt("252")
		const addressQ3TDms = accounts[2]
		const uintEcvjOPh = BigInt("363")
		const uint256BkdpmNd = await WolfStakingRewardsigBrB2Q.getRewardForDuration.call(uintmUlJ63O, {from: accounts[5]});
		const addressG1eQcS = await WolfStakingRewardsigBrB2Q.updateReward.call(addressQ3TDms, uintrmFFEys, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gNt3WED = await WolfStakingRewardsigBrB2Q.rewardPerToken.call(uintEcvjOPh, {from: accounts[2]});
		await WolfStakingRewardsigBrB2Q.onlyRewardsDistribution.call({from: accounts[4]});
		await WolfStakingRewardsigBrB2Q.onlyOwner.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbkYda29 = "SvHJosEnmXp0D"
		const stringXoRY1m = "GsfdkYLVvgKkQY1Iz99y1"
		const uintbd6pbRU = BigInt("65")
		const WolfStakingRewardsn676uT = await WolfStakingRewards.new(stringbkYda29, stringXoRY1m, uintbd6pbRU, {from: accounts[2]});
		const uintWtwoy3g = BigInt("415")
		await WolfStakingRewardsn676uT.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uinthe9yGdr = await WolfStakingRewardsn676uT.getReward.call(uintWtwoy3g, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvn403N = "SwthjUYO9FjsRXRN1cR4a6zt26dqA"
		const stringWgci24I = "bkC62WwrDAe2X7qshYS2cqrKDHsJAkvwk8n5G"
		const uintp4oQfPQ = BigInt("249")
		const WolfStakingRewardsqQObtqE = await WolfStakingRewards.new(stringvn403N, stringWgci24I, uintp4oQfPQ, {from: accounts[3]});
		const uintPzrjQZF = BigInt("1481")
		const addressXZhcImr = accounts[2]
		const uintAlZmN6e = BigInt("1411")
		const uintLZRMhvQ = BigInt("623")
		const uint2562Sek1a = await WolfStakingRewardsqQObtqE.balanceOfPerPool.call(addressXZhcImr, uintPzrjQZF, {from: accounts[1]});
		await WolfStakingRewardsqQObtqE.nonReentrant.call({from: accounts[4]});
		const uint8E9QmTDX = await WolfStakingRewardsqQObtqE.decimals.call({from: accounts[1]});
		const uint256S6f86Mw = await WolfStakingRewardsqQObtqE.withdraw.call(uintLZRMhvQ, uintAlZmN6e, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringceLXSeu = "5y7o5SG29V5n9gXoeTBdSp3fSVYBCSMqFclnyDMq9bFmpoiH7w8BGYIs1Ksul9a7qNT95qG"
		const stringDNhEQ55 = "sql35nHSCqk3PwZ12DNsbSSMDbdWR3A3pC4rCkOmHYDeH4O80ae3jbYY"
		const uintVXlcOQe = BigInt("245")
		const WolfStakingRewardsNWSfHG5 = await WolfStakingRewards.new(stringceLXSeu, stringDNhEQ55, uintVXlcOQe, {from: accounts[1]});
		const uintnCg1k4M = BigInt("2024")
		const uintF125fjw = BigInt("1345")
		const uintusgdtef = BigInt("1926")
		const addressGhG1xEP = accounts[1]
		const uint256mkBdbTP = await WolfStakingRewardsNWSfHG5.stake.call(uintF125fjw, uintnCg1k4M, {from: accounts[1]});
		await WolfStakingRewardsNWSfHG5.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256iX9n5EN = await WolfStakingRewardsNWSfHG5.earned.call(addressGhG1xEP, uintusgdtef, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnNVV4oh = "5PnnQGMGk9gjUlApMPIDunqjZU32jPiQWx1h9mnjuCRf4hFA7uMzAL0uxsBzAKqMsgv1IbTGp6ib7ECBMWIYWkPzy"
		const string07ct7Q = "G4EjRJetsu5NIVrExZPYJlwyjvmSDdyBCDTO8SXdxN5F7DVdiVAhAAnkP6wobUhlS8BufOxpAov5PgW67Hx4aqzxET5H6ATJl5"
		const uintwxlCXnz = BigInt("193")
		const WolfStakingRewardsyQNepQ = await WolfStakingRewards.new(stringnNVV4oh, string07ct7Q, uintwxlCXnz, {from: accounts[4]});
		const uintCSAWhFb = BigInt("289")
		const uint01rhKg = BigInt("613")
		const uinti7KtlZC = BigInt("1036")
		const uintxnxwhm = BigInt("471")
		const uint256Xnd86Q = await WolfStakingRewardsyQNepQ.rewardPerToken.call(uintCSAWhFb, {from: accounts[1]});
		const uint256PR4kdwQ = await WolfStakingRewardsyQNepQ.withdraw.call(uinti7KtlZC, uint01rhKg, {from: accounts[1]});
		const uint256pIbWN08 = await WolfStakingRewardsyQNepQ.exit.call(uintxnxwhm, {from: accounts[0]});
		const uint8oDi11iX = await WolfStakingRewardsyQNepQ.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWndkfW = "OIQFbUBpOpzrsJKQUQZA1QWu4I4dyrmKHlZdffbCbDKAZMBHT8mmg3q5DN1ObhY"
		const stringWqBWjrP = "zVBS8HEkxUVxxdILhy7W"
		const uintSMpMpLg = BigInt("5")
		const WolfStakingRewardsYb5wWge = await WolfStakingRewards.new(stringWndkfW, stringWqBWjrP, uintSMpMpLg, {from: accounts[0]});
		const uintpMA3cjB = BigInt("84")
		const uintGGu2SB = BigInt("108")
		const uintZWWievs = BigInt("644")
		const uint256vGJ3c2 = await WolfStakingRewardsYb5wWge.rewardPerToken.call(uintpMA3cjB, {from: accounts[1]});
		const uint256VvJJbpO = await WolfStakingRewardsYb5wWge.totalSupplyPerPool.call(uintGGu2SB, {from: accounts[2]});
		const uint256arrayEvbENiY = await WolfStakingRewardsYb5wWge.updateNotifyRewardAmount.call(uintZWWievs, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresshmm7pn = accounts[3]
		const addressFpegdbX = accounts[3]
		const addressLLBpbK7 = accounts[2]
		const WolfStakingRewardsqvUJaGF = await WolfStakingRewards.new(addresshmm7pn, addressFpegdbX, addressLLBpbK7, {from: accounts[0]});
		const uintFj2T5vv = BigInt("2039")
		const uintyDuLRw = BigInt("486")
		const uintTbImvaa = BigInt("489")
		const uintTMcMtut = await WolfStakingRewardsqvUJaGF.getReward.call(uintFj2T5vv, {from: accounts[2]});
		const uint256Dj1Kn80 = await WolfStakingRewardsqvUJaGF.withdraw.call(uintTbImvaa, uintyDuLRw, {from: accounts[4]});

		await expect(WolfStakingRewardsqvUJaGF.withdraw.call(uintTbImvaa, uintyDuLRw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringfDCkBSY = "ec6pSPYiSj1FBvVoUBlDQLDBbLODrBKlTHtBh0eLjN3mivCrd0"
		const stringeJPl78r = "i0h1Q1g6u84QEYEDKckbOmMS4rd4v6HbpJo3PrVf9mGLKgZ83vlFYJ2eBYUk7VYTaRNpASHxKuvoGr"
		const uintATSKC8G = BigInt("189")
		const WolfStakingRewards6r0yF5 = await WolfStakingRewards.new(stringfDCkBSY, stringeJPl78r, uintATSKC8G, {from: accounts[4]});
		const uintfqFOFl = BigInt("481")
		const stringSndT03H = await WolfStakingRewards6r0yF5.name.call({from: accounts[2]});
		await WolfStakingRewards6r0yF5.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256QoIqmzh = await WolfStakingRewards6r0yF5.lastTimeRewardApplicable.call(uintfqFOFl, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWyUgnXm = "AvNPVs6Vaaafwo4UoZmiTCw4EbVGtpBeR6iVle5dmT1YNKn69IsdfViVtAS4Spp6tRVXgHLVjlVzWulxy"
		const stringt542cxt = "WwVeRSa8gsjfRAvrJry1v70p43qGllniOE0J7boNZxFmBnuyvesKCfwV"
		const uintLUJXCvO = BigInt("178")
		const WolfStakingRewardsusfs2Ej = await WolfStakingRewards.new(stringWyUgnXm, stringt542cxt, uintLUJXCvO, {from: accounts[1]});
		const uintc5YWjR0 = BigInt("1062")
		const uintfUExz9b = BigInt("1529")
		const uinteScz5SL = BigInt("688")
		const uintClzSsHK = BigInt("1822")
		const uintRuTmqGD = BigInt("2034")
		const addressujhvpD = accounts[4]
		const uint256TloLvMp = await WolfStakingRewardsusfs2Ej.withdrawRemainingBalance.call(uintfUExz9b, uintc5YWjR0, {from: accounts[4]});
		const uint256ieI7E2J = await WolfStakingRewardsusfs2Ej.withdrawRemainingBalance.call(uintClzSsHK, uinteScz5SL, {from: accounts[3]});
		const uint256gV6aAK7 = await WolfStakingRewardsusfs2Ej.balanceOfPerPool.call(addressujhvpD, uintRuTmqGD, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWK3sE8C = "Vn6GUTzbrYMgGTEpDmFqdqHC18iQBuBJtGPDbWE1v53MJJeEXoS2GWHNFYaTFW0nLMMidE6d1"
		const stringK0NmRea = "OTDtoh7GvF5WdKnBXAXCzUnjgn1YWGK7IHpWdqBzlxI7jABszN4KZJ4P"
		const uintS13IEys = BigInt("191")
		const WolfStakingRewardsBUO392E = await WolfStakingRewards.new(stringWK3sE8C, stringK0NmRea, uintS13IEys, {from: accounts[4]});
		const uinth8VYAOt = BigInt("1524")
		const uintAxn1gy = BigInt("2037")
		const uintXqR0C81 = BigInt("1136")
		const uint256n7Z3yKk = await WolfStakingRewardsBUO392E.rewardPerToken.call(uinth8VYAOt, {from: accounts[5]});
		const uintBv1gSKK = await WolfStakingRewardsBUO392E.getReward.call(uintAxn1gy, {from: accounts[5]});
		const stringGvrjiFE = await WolfStakingRewardsBUO392E.symbol.call({from: accounts[4]});
		const uint256hxKtVO4 = await WolfStakingRewardsBUO392E.totalSupplyPerPool.call(uintXqR0C81, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJvQCNJN = "h9bGJyveFw17zdK2nEWciWQMUkcT579LFqDV9zmbSE36Lzob91K12I5dUejg7JUo9sY6jB7mFQN1F2K"
		const stringe8Twr2e = "IEqLZcdVJicRcw1WqZcsChDNLFRiL5tfwRA7AsQzwCjOjxld6laVYfr2qeL2dIKx8i7g5"
		const uinti6FD2pC = BigInt("132")
		const WolfStakingRewardsDW5tNrf = await WolfStakingRewards.new(stringJvQCNJN, stringe8Twr2e, uinti6FD2pC, {from: accounts[2]});
		const uintDpxmWYa = BigInt("96")
		const uintmwHHUdZ = BigInt("1565")
		const uintMBqSeWQ = BigInt("420")
		const addressMDF71mi = accounts[1]
		const uintI9AReCc = BigInt("795")
		const uint256WMB13eH = await WolfStakingRewardsDW5tNrf.stake.call(uintmwHHUdZ, uintDpxmWYa, {from: accounts[0]});
		const addressc6C4emv = await WolfStakingRewardsDW5tNrf.updateReward.call(addressMDF71mi, uintMBqSeWQ, {from: accounts[3]});
		const uint8RBsH6r = await WolfStakingRewardsDW5tNrf.decimals.call({from: accounts[4]});
		const uint256wnCgGvP = await WolfStakingRewardsDW5tNrf.exit.call(uintI9AReCc, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaERyW7 = "yvscOY41z0X8K5aeGFi8kDKhomViCXkMIw6UroXNebWrzXsVzogN"
		const stringMyF2HZs = "yONw2oikyvsam3mWABinSAWUJtBAvafsxhjda4Cu"
		const uintQehEndd = BigInt("198")
		const WolfStakingRewardsx2PhPS9 = await WolfStakingRewards.new(stringaERyW7, stringMyF2HZs, uintQehEndd, {from: accounts[2]});
		const uintAKnzqpB = BigInt("1693")
		const uintseJduHm = BigInt("1217")
		const uintGxDkeZC = BigInt("1435")
		const uintQyIFG46 = BigInt("895")
		const addressTRQygx5 = accounts[0]
		const uint256fFBGOt = await WolfStakingRewardsx2PhPS9.exit.call(uintAKnzqpB, {from: accounts[1]});
		const uint256QfoPG4C = await WolfStakingRewardsx2PhPS9.withdrawRemainingBalance.call(uintGxDkeZC, uintseJduHm, {from: accounts[4]});
		const uint256ykq0dNZ = await WolfStakingRewardsx2PhPS9.balanceOfPerPool.call(addressTRQygx5, uintQyIFG46, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringa5H4Y3 = "quEOaup0k"
		const stringm41l3YU = "nlxqe5L6l95aJPIbDPicWtpbl1lTio"
		const uintdFh5RmR = BigInt("237")
		const WolfStakingRewardsmu6vOap = await WolfStakingRewards.new(stringa5H4Y3, stringm41l3YU, uintdFh5RmR, {from: accounts[0]});
		const uintcACygJH = BigInt("673")
		const addressCWJulgw = accounts[3]
		const uintO4gB3lq = BigInt("34")
		const addressiIKwYci = "0x0000000000000000000000000000000000000001"
		const uintD7fpXDG = BigInt("896")
		const addressYuqMPST = accounts[0]
		const uint256KP1h8dv = await WolfStakingRewardsmu6vOap.earned.call(addressCWJulgw, uintcACygJH, {from: accounts[4]});
		const uint256Ei6UGq3 = await WolfStakingRewardsmu6vOap.earned.call(addressiIKwYci, uintO4gB3lq, {from: accounts[4]});
		const uint256tTYhO49 = await WolfStakingRewardsmu6vOap.earned.call(addressYuqMPST, uintD7fpXDG, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressxN7PAKW = accounts[3]
		const addressIs1zj5v = accounts[3]
		const addressPMi4FjO = accounts[2]
		const WolfStakingRewardsqvUJaGF = await WolfStakingRewards.new(addressxN7PAKW, addressIs1zj5v, addressPMi4FjO, {from: accounts[0]});
		const uintPbopY6U = BigInt("1614")
		const uintQJrWYze = BigInt("3")
		const uintuJW2gh = BigInt("1201")
		const uintXQ76bks = BigInt("450")
		const uintcekHl1 = BigInt("2036")
		const uintEMByKp3 = BigInt("2022")
		const uint256VuBLBjo = await WolfStakingRewardsqvUJaGF.withdrawRemainingBalance.call(uintQJrWYze, uintPbopY6U, {from: accounts[0]});
		const uint256YhbP5m = await WolfStakingRewardsqvUJaGF.stake.call(uintXQ76bks, uintuJW2gh, {from: accounts[1]});
		const uint256arrayYbNcbgf = await WolfStakingRewardsqvUJaGF.updateNotifyRewardAmount.call(uintcekHl1, {from: accounts[1]});
		const uintTMcMtut = await WolfStakingRewardsqvUJaGF.getReward.call(uintEMByKp3, {from: accounts[2]});

		await expect(WolfStakingRewardsqvUJaGF.withdrawRemainingBalance.call(uintQJrWYze, uintPbopY6U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringGz5cr6w = "8zIoYVyAXrLBaII77NCeKnZ2KYkyl"
		const string66ORSs = "9qU9o3hLEYXfh5XloRFElNKj5F7cw79z1jH9BkWpg9s2INH4EYBHtN4ei19ae5nqdVJgc25d1d1NgPimY3GLf"
		const uintYmvKTYj = BigInt("211")
		const WolfStakingRewardsbf5W6q5 = await WolfStakingRewards.new(stringGz5cr6w, string66ORSs, uintYmvKTYj, {from: accounts[5]});
		const uintpD5vR6Y = BigInt("1356")
		const uintimK9SJH = BigInt("1833")
		const addressbma0od = accounts[0]
		const uintyE04EHv = BigInt("1686")
		const uint1HLogl = BigInt("568")
		const addressgAsd1Fz = accounts[4]
		const uintSsj771G = BigInt("1305")
		const uintGRGTOHx = BigInt("1418")
		const uint256SF757bM = await WolfStakingRewardsbf5W6q5.lastTimeRewardApplicable.call(uintpD5vR6Y, {from: accounts[4]});
		const uint256fhz8EV = await WolfStakingRewardsbf5W6q5.balanceOfPerPool.call(addressbma0od, uintimK9SJH, {from: accounts[2]});
		const uint256K56yZ55 = await WolfStakingRewardsbf5W6q5.totalSupplyPerPool.call(uintyE04EHv, {from: accounts[4]});
		const addressvREzVfr = await WolfStakingRewardsbf5W6q5.updateReward.call(addressgAsd1Fz, uint1HLogl, {from: accounts[2]});
		const uint2566GyMKo = await WolfStakingRewardsbf5W6q5.withdrawRemainingBalance.call(uintGRGTOHx, uintSsj771G, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZv1ULD = "lL5hAfshCh6kvixrMUlFs5xvBuAK01j80CnNTNUpwyf"
		const stringzU6Cw4Q = "28ilWhwb1Omg19WX1a82JFLfK22IXxuvrxKzLLDqsOixlDn9N"
		const uintL00rDJh = BigInt("196")
		const WolfStakingRewardsDBpAbVC = await WolfStakingRewards.new(stringZv1ULD, stringzU6Cw4Q, uintL00rDJh, {from: accounts[3]});
		const uintuhjpwmw = BigInt("1940")
		const uintWrzwkwA = BigInt("1544")
		const uintFyrDlHQ = BigInt("691")
		const uintOnvwql = BigInt("1257")
		const addressRPN4BNG = accounts[3]
		const uint256pTCO5wi = await WolfStakingRewardsDBpAbVC.rewardPerToken.call(uintuhjpwmw, {from: accounts[4]});
		const uint256MPpKFRV = await WolfStakingRewardsDBpAbVC.withdraw.call(uintFyrDlHQ, uintWrzwkwA, {from: accounts[2]});
		const uint256VMXxktV = await WolfStakingRewardsDBpAbVC.earned.call(addressRPN4BNG, uintOnvwql, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRGNZ7b = "NJdOwSoI5TBjgpF5duTmv34IQF1pyqNnxl6QROSUQaDgM"
		const stringcObqMJA = "62w2"
		const uintz9X7Khb = BigInt("50")
		const WolfStakingRewardsmh2vLf5 = await WolfStakingRewards.new(stringRGNZ7b, stringcObqMJA, uintz9X7Khb, {from: accounts[1]});
		const uintiuUYQT3 = BigInt("286")
		const stringcm99YS2 = await WolfStakingRewardsmh2vLf5.symbol.call({from: accounts[5]});
		await WolfStakingRewardsmh2vLf5.onlyOwner.call({from: accounts[1]});
		const uint256Rl9GnnI = await WolfStakingRewardsmh2vLf5.totalSupplyPerPool.call(uintiuUYQT3, {from: accounts[1]});
		await WolfStakingRewardsmh2vLf5.nonReentrant.call({from: accounts[2]});
		const stringH0zTZS = await WolfStakingRewardsmh2vLf5.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQazFyO = "llzVy2csyTcVK1XuR98tT901NDdRMBz3BA8ITobTSh7qoFFce8hEFJoM4ThroQGssXJotXWaC8qb"
		const stringrvH5L7c = "2C3AvQPGff3VJppcVswBEtrdhi7UBnGdskDdEoTG5V3p4w1up3PLs1OuWE"
		const uintSb69Hst = BigInt("247")
		const WolfStakingRewardsYT1Nasy = await WolfStakingRewards.new(stringQazFyO, stringrvH5L7c, uintSb69Hst, {from: "0x0000000000000000000000000000000000000001"});
		const uintvtQiZoa = BigInt("452")
		const addresszfIg0x = accounts[0]
		const uintNkjdljw = BigInt("1894")
		const uintJzHOzjc = BigInt("670")
		const uintIwzX6YT = BigInt("717")
		const addressuPKWoY8 = await WolfStakingRewardsYT1Nasy.updateReward.call(addresszfIg0x, uintvtQiZoa, {from: accounts[2]});
		const uint256uNLkxFy = await WolfStakingRewardsYT1Nasy.getRewardForDuration.call(uintNkjdljw, {from: accounts[4]});
		const stringkq6ClYb = await WolfStakingRewardsYT1Nasy.symbol.call({from: accounts[2]});
		await WolfStakingRewardsYT1Nasy.onlyOwner.call({from: accounts[3]});
		const uint256kuDnCo6 = await WolfStakingRewardsYT1Nasy.withdrawRemainingBalance.call(uintIwzX6YT, uintJzHOzjc, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringum1w8vg = "qo3VVnT3G98gbInFs1Q9kBS2eh1Uy1UH7XiglQsHlYK9QtJchBrBlVOyBE2KMiCQ46Bq3R"
		const stringgg0EQ3Z = "krXU58gwg9n5EGIJR5ABZX7dEglPSp54EFPPCESqNhHwb65MUWgKA4zgRlKvieqB6pYRN3CMCrjoqp6Nk2Pl24"
		const uintwoTBhUj = BigInt("222")
		const WolfStakingRewardsmbHq1UL = await WolfStakingRewards.new(stringum1w8vg, stringgg0EQ3Z, uintwoTBhUj, {from: accounts[5]});
		const uinthoiAorB = BigInt("223")
		const uintDd76lkA = BigInt("1173")
		const uintOPE9fzB = BigInt("1039")
		const addressWjbuYiZ = accounts[0]
		const uintbNLmd3X = BigInt("192")
		const uintr3PrS96 = BigInt("1694")
		const uint256oRyyJp = await WolfStakingRewardsmbHq1UL.withdraw.call(uintDd76lkA, uinthoiAorB, {from: accounts[0]});
		const uint256WADjK9v = await WolfStakingRewardsmbHq1UL.balanceOfPerPool.call(addressWjbuYiZ, uintOPE9fzB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZkR3PId = await WolfStakingRewardsmbHq1UL.withdrawRemainingBalance.call(uintr3PrS96, uintbNLmd3X, {from: accounts[5]});
		const stringymGaect = await WolfStakingRewardsmbHq1UL.name.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSMC8UMW = "qAfS3yfIsd27TFPyHnJzx8aXKmm6RV"
		const stringIxSPOUn = "XqmHuihPamNDLMf"
		const uintYk8SE1F = BigInt("51")
		const WolfStakingRewardsCGTS1aQ = await WolfStakingRewards.new(stringSMC8UMW, stringIxSPOUn, uintYk8SE1F, {from: accounts[4]});
		const uintdX7HkX1 = BigInt("1915")
		const uintEAh16Wk = BigInt("384")
		const uintdrPCu6t = BigInt("548")
		const addressIyvk2D = accounts[0]
		await WolfStakingRewardsCGTS1aQ.nonReentrant.call({from: accounts[0]});
		const uint256orwc4ga = await WolfStakingRewardsCGTS1aQ.lastTimeRewardApplicable.call(uintdX7HkX1, {from: accounts[1]});
		const uint256cvEvmZ = await WolfStakingRewardsCGTS1aQ.totalSupplyPerPool.call(uintEAh16Wk, {from: accounts[4]});
		const uint8ot6IBc = await WolfStakingRewardsCGTS1aQ.decimals.call({from: accounts[1]});
		const uint256hsa5T4O = await WolfStakingRewardsCGTS1aQ.earned.call(addressIyvk2D, uintdrPCu6t, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZi9Map = "5AxbDEwtsSRMgfIRtwHmkKf09D4fub9DglEyQrQtPwx9TRwHRHpmYamAcwliUCpc2I1"
		const stringNMBaLkv = "VeNiKUEvmPzjiRuLpAilfoj"
		const uintfvYtGey = BigInt("229")
		const WolfStakingRewardsk7zqxiO = await WolfStakingRewards.new(stringZi9Map, stringNMBaLkv, uintfvYtGey, {from: accounts[4]});
		const uintVsVh5X3 = BigInt("290")
		const addressq5nKZd = accounts[0]
		const uintnmO2lim = BigInt("93")
		const uintgZidaCi = BigInt("49")
		const uinttIh6ZCj = BigInt("1251")
		const addressfOnX5xk = accounts[3]
		const uintVLd5poh = BigInt("511")
		const addressp52X3HB = accounts[1]
		const addressl1W0CoD = await WolfStakingRewardsk7zqxiO.updateReward.call(addressq5nKZd, uintVsVh5X3, {from: accounts[4]});
		const uint256fdW4uBN = await WolfStakingRewardsk7zqxiO.withdraw.call(uintgZidaCi, uintnmO2lim, {from: "0x0000000000000000000000000000000000000001"});
		const addressUBmDs44 = await WolfStakingRewardsk7zqxiO.updateReward.call(addressfOnX5xk, uinttIh6ZCj, {from: accounts[3]});
		const uint256uUbLD70 = await WolfStakingRewardsk7zqxiO.balanceOfPerPool.call(addressp52X3HB, uintVLd5poh, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringecxFUl4 = "cViy6NtH2k4nv7V9LbYdmx21ECyeYQUXogtbLi7I1B"
		const stringtmbJzUr = "lnabmq492WIQzt9cipY8lYz8D7sUuDkvyIPHBSbbtaW3b6VAXqEUUzObU7kmdb21Nd4xdPscx"
		const uintSq4KkNJ = BigInt("171")
		const WolfStakingRewardsnkTpHrt = await WolfStakingRewards.new(stringecxFUl4, stringtmbJzUr, uintSq4KkNJ, {from: accounts[4]});
		const uintkjBlxB5 = BigInt("2043")
		const uintUBb1Jn = BigInt("319")
		const stringcThmrAr = await WolfStakingRewardsnkTpHrt.symbol.call({from: accounts[4]});
		await WolfStakingRewardsnkTpHrt.onlyRewardsDistribution.call({from: accounts[3]});
		const stringdzTQJvn = await WolfStakingRewardsnkTpHrt.symbol.call({from: accounts[4]});
		const uint256ZbBSOY = await WolfStakingRewardsnkTpHrt.stake.call(uintUBb1Jn, uintkjBlxB5, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringR3M86b = "x16E9VTcoEY8hUmiZbQYn6OjeXeDFDQ8GtMT7lPFDo3h9uz8GjBhgS6hPzdA0n5nRv"
		const stringaCnH9Fx = "q4qLG6thHDlbPSsKhif1NkuImdW7gw1u9I9IYZ4HaXNjQmnWitoZLjLUEKRotSBDbDwH6fDQmhLv"
		const uintM0G9QcU = BigInt("220")
		const WolfStakingRewardsvhx5Mof = await WolfStakingRewards.new(stringR3M86b, stringaCnH9Fx, uintM0G9QcU, {from: accounts[2]});
		const uint8PLHjAi9 = await WolfStakingRewardsvhx5Mof.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsvhx5Mof.nonReentrant.call({from: accounts[1]});
		const stringGBx0bRv = await WolfStakingRewardsvhx5Mof.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkMn6BL = "ktywCyCppGK5GDfHmS"
		const stringIoScyTx = "5FGKcGXqBdQXu7iB28Ka4zLAHTb6RYKNldyJZtXDEIlNw1FVxyCXpkJx5u3Osy2"
		const uintC7UOBZJ = BigInt("89")
		const WolfStakingRewardsQpZtyG5 = await WolfStakingRewards.new(stringkMn6BL, stringIoScyTx, uintC7UOBZJ, {from: accounts[0]});
		const stringa3D2cFy = await WolfStakingRewardsQpZtyG5.name.call({from: accounts[1]});
		await WolfStakingRewardsQpZtyG5.nonReentrant.call({from: accounts[4]});
		await WolfStakingRewardsQpZtyG5.nonReentrant.call({from: accounts[4]});
		const stringJWTXC8e = await WolfStakingRewardsQpZtyG5.symbol.call({from: accounts[3]});
		const stringQvslxYg = await WolfStakingRewardsQpZtyG5.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringO9QbgmG = "iKcUkUOtBoyW55zBGDuqY4KNO6x3VMJMdsrCOmlhIgUSpI1e6W0qWfMXiez3lfu28y9UCzvzX6aIRZwjruXX"
		const stringcs6xFC = "v8nqjrdgwvIYgNhcvxoVaEzRpXNd4BBUf0dwIlXU7N2aMdVOc"
		const uintdksKsX = BigInt("190")
		const WolfStakingRewardskzK4Hp5 = await WolfStakingRewards.new(stringO9QbgmG, stringcs6xFC, uintdksKsX, {from: accounts[5]});
		const uintKl7xdWr = BigInt("1622")
		const uintD08Qt3O = BigInt("1417")
		const stringp7xRwY = await WolfStakingRewardskzK4Hp5.symbol.call({from: accounts[0]});
		const uint256arrayvTw6URF = await WolfStakingRewardskzK4Hp5.updateNotifyRewardAmount.call(uintKl7xdWr, {from: accounts[0]});
		const uint256E9DDXkq = await WolfStakingRewardskzK4Hp5.exit.call(uintD08Qt3O, {from: accounts[2]});
		const stringnVb7hfF = await WolfStakingRewardskzK4Hp5.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUXXAUZ3 = "p"
		const stringNp45UNm = "Gbky0VwabzdHd5wFikK0aFgb35cRJMXbsGD9wAyU2J2t"
		const uintjRyytWj = BigInt("192")
		const WolfStakingRewardszRq48Vn = await WolfStakingRewards.new(stringUXXAUZ3, stringNp45UNm, uintjRyytWj, {from: accounts[3]});
		const uint6PElny = BigInt("1975")
		const uintmP99s7 = BigInt("1006")
		const uint8EaaW9mP = await WolfStakingRewardszRq48Vn.decimals.call({from: accounts[4]});
		const uint256Z4MFWOP = await WolfStakingRewardszRq48Vn.getRewardForDuration.call(uint6PElny, {from: accounts[1]});
		await WolfStakingRewardszRq48Vn.nonReentrant.call({from: accounts[3]});
		const uint256n1sbpcw = await WolfStakingRewardszRq48Vn.totalSupplyPerPool.call(uintmP99s7, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFgPQC4Y = "7MitX8bSmueMoMbeM20NhXGzzIawyNUkxaag4Y6IihZLZaiEm5sCQjBrKJVJ6m59jxGCUhJgBzpLjSan2qyPAkNslnIR1hFUj"
		const stringnWAehZV = "Eoyf1aHXTOUCx69CptHFOPYnheQEHUGvORZUMITPgHVCENcxkjYNBM"
		const uintKwCGLoL = BigInt("169")
		const WolfStakingRewardsHrVp8x = await WolfStakingRewards.new(stringFgPQC4Y, stringnWAehZV, uintKwCGLoL, {from: accounts[3]});
		const uintxTz2Sgx = BigInt("1155")
		const uintzjS2HRT = BigInt("850")
		const stringmrwNzTn = await WolfStakingRewardsHrVp8x.symbol.call({from: accounts[3]});
		const uint256Dzh3wv = await WolfStakingRewardsHrVp8x.withdrawRemainingBalance.call(uintzjS2HRT, uintxTz2Sgx, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringB6b3y4 = "dReIYmDERavG2MwOLTTZSWisRa2bDdJDBpFvQ6S4R20uDRbKO5W"
		const stringH6NjXji = "tGL6QIPsG2ohnCguScKc8z"
		const uintYXEu6zP = BigInt("21")
		const WolfStakingRewardseCqriDG = await WolfStakingRewards.new(stringB6b3y4, stringH6NjXji, uintYXEu6zP, {from: accounts[2]});
		const uintCsCoj3C = BigInt("1544")
		const uintDcDhXfR = BigInt("1251")
		const uint256DgnjS60 = await WolfStakingRewardseCqriDG.lastTimeRewardApplicable.call(uintCsCoj3C, {from: accounts[1]});
		const uint256tYbwm1R = await WolfStakingRewardseCqriDG.exit.call(uintDcDhXfR, {from: accounts[1]});
		const string9qaY15 = await WolfStakingRewardseCqriDG.symbol.call({from: accounts[3]});
		await WolfStakingRewardseCqriDG.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringI0zfWEf = "7sOSM2kgtrI"
		const stringMVKpPmS = "rtROXHpbceezUELi5S5X9jyK12TlMwx7PSh6f5b3je2M5rMOkHTkwQx6TkdagAsyElybe"
		const uintkv2xaMG = BigInt("214")
		const WolfStakingRewardsWKH9D0s = await WolfStakingRewards.new(stringI0zfWEf, stringMVKpPmS, uintkv2xaMG, {from: accounts[5]});
		const uintDwbyGkq = BigInt("916")
		const uintDK1cb59 = BigInt("1043")
		const uint256oB06l5Z = await WolfStakingRewardsWKH9D0s.getRewardForDuration.call(uintDwbyGkq, {from: accounts[5]});
		const uint256Ry4vVs8 = await WolfStakingRewardsWKH9D0s.rewardPerToken.call(uintDK1cb59, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringiERqF0q = "Oslm99TK4UiE7yyvT3ZwI9Nel3lWx88AwEEp8DuV7okEAcAMvjZQ"
		const stringHTT3MUy = "alRtwsKwtvpOzxLUgZvtKyelSnbdeTi0zEFwjLcF611E7tMXlW3BYHneQwvxyoKiHd"
		const uintmZjjozt = BigInt("180")
		const WolfStakingRewardsedtNL30 = await WolfStakingRewards.new(stringiERqF0q, stringHTT3MUy, uintmZjjozt, {from: accounts[5]});
		const uinti2AEX9h = BigInt("708")
		const uintG3KEkzs = BigInt("312")
		const uinta8juZsi = BigInt("1115")
		const uint256KcIRBeV = await WolfStakingRewardsedtNL30.rewardPerToken.call(uinti2AEX9h, {from: accounts[3]});
		const uint256cCK6hGk = await WolfStakingRewardsedtNL30.stake.call(uinta8juZsi, uintG3KEkzs, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhcrY8UU = "G"
		const stringBIf7hLv = "UIfeTmteQRh9qwmpx9N6YUimiFnkdZAVNQkaVgF4if1tWmOenyDnrfM4VgwRHGC9AMrPBGgrWqegvaDFECFsUH"
		const uintD5pIOm = BigInt("247")
		const WolfStakingRewardsW9PQkJB = await WolfStakingRewards.new(stringhcrY8UU, stringBIf7hLv, uintD5pIOm, {from: accounts[3]});
		const uintvSB8QJm = BigInt("255")
		const uintOoBREng = BigInt("1615")
		const addressX9ffD2u = accounts[0]
		const uintNCP7JO = BigInt("93")
		const addressavF72RL = accounts[4]
		const uintn2xkir = BigInt("567")
		const uintu1Iblx3 = BigInt("898")
		const stringvC0wSS6 = await WolfStakingRewardsW9PQkJB.symbol.call({from: accounts[1]});
		const uint256E1MZCpI = await WolfStakingRewardsW9PQkJB.lastTimeRewardApplicable.call(uintvSB8QJm, {from: accounts[2]});
		const uint256IXJvxl = await WolfStakingRewardsW9PQkJB.balanceOfPerPool.call(addressX9ffD2u, uintOoBREng, {from: accounts[4]});
		const addressHUAvC7a = await WolfStakingRewardsW9PQkJB.updateReward.call(addressavF72RL, uintNCP7JO, {from: accounts[4]});
		const uint256xXUSpjH = await WolfStakingRewardsW9PQkJB.stake.call(uintu1Iblx3, uintn2xkir, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXc5wJ37 = "Ihy7F2y4IcSjUlBPMhtXIjGns22UfjLTZGCXlnTircfU16snEMhbpSoqkSXHIu7EGTmW6"
		const stringTWYfMiL = "DDOl1Y7R7zWDOVct0oHcbEWYPdhjpih2u0KEyTMr871WKWA6eCbARGSJGd6pASh8fRIFXWieQuWOyagnm2sjI73QWZySU"
		const uintweo39LN = BigInt("78")
		const WolfStakingRewardsqme1amw = await WolfStakingRewards.new(stringXc5wJ37, stringTWYfMiL, uintweo39LN, {from: accounts[5]});
		const uintXRTga7g = BigInt("1837")
		const uintErfVPCi = BigInt("885")
		const addressGvN47Fk = accounts[1]
		const uintWVH3AmI = BigInt("1714")
		const addressjJOLhOR = accounts[4]
		const uint256arraySzOSSrn = await WolfStakingRewardsqme1amw.updateNotifyRewardAmount.call(uintXRTga7g, {from: accounts[4]});
		const addressGqNOsHh = await WolfStakingRewardsqme1amw.updateReward.call(addressGvN47Fk, uintErfVPCi, {from: accounts[3]});
		const uint2565kfY7u = await WolfStakingRewardsqme1amw.balanceOfPerPool.call(addressjJOLhOR, uintWVH3AmI, {from: accounts[2]});
		await WolfStakingRewardsqme1amw.onlyRewardsDistribution.call({from: accounts[4]});
		const stringRwWhD1x = await WolfStakingRewardsqme1amw.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringt1UzvG9 = "RqssnLB4jmsf8A8WO3zUo4g4CMoiwrdKzXVnhC5fERm6qRM9YovD4F8Bey"
		const stringuGNqCe = "6BXzdoypvOWGe1iJA6hJ1VVhcjPFtkxctqg1hvBY8VL5M3k8IFWXwapQghyypV6JYXt3m4KxreJ5xSj6"
		const uintqyr3wKm = BigInt("156")
		const WolfStakingRewardsYWTjUpA = await WolfStakingRewards.new(stringt1UzvG9, stringuGNqCe, uintqyr3wKm, {from: accounts[3]});
		const uintF2edd0s = BigInt("913")
		const uintv5Non9 = BigInt("1582")
		const uintGq9xyor = BigInt("1791")
		const uintXaNFwF = BigInt("1603")
		const uinteoDVjgb = BigInt("1829")
		const uintcaePy3y = BigInt("297")
		const uint256lWHQtg = await WolfStakingRewardsYWTjUpA.getRewardForDuration.call(uintF2edd0s, {from: accounts[0]});
		const uint256kyOKK8u = await WolfStakingRewardsYWTjUpA.rewardPerToken.call(uintv5Non9, {from: accounts[3]});
		const uint256Y1oMWJF = await WolfStakingRewardsYWTjUpA.withdrawRemainingBalance.call(uintXaNFwF, uintGq9xyor, {from: accounts[2]});
		const uint256O8VgB8v = await WolfStakingRewardsYWTjUpA.lastTimeRewardApplicable.call(uinteoDVjgb, {from: accounts[0]});
		const uint256BSvKOI = await WolfStakingRewardsYWTjUpA.rewardPerToken.call(uintcaePy3y, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdTKvfg = "HOaCVEz7th24Hq9HlEdll72PSzzdbHYVEOqHa"
		const stringNnwYp0R = "LfUMPfdG5SQe1wu51rjyIxQmf3UjeXhpqRD3h2VCsAMY5AgsL19addXythEB10"
		const uintLx0L2M = BigInt("235")
		const WolfStakingRewardsSfpOWCq = await WolfStakingRewards.new(stringdTKvfg, stringNnwYp0R, uintLx0L2M, {from: accounts[4]});
		const uintDHudq9h = BigInt("1978")
		const uintci49zo3 = BigInt("640")
		const uinthJLHPQ4 = BigInt("299")
		const uintKZRDDeV = BigInt("1350")
		const uintTWEuSWr = BigInt("320")
		const uint4Rznfk = BigInt("1599")
		const uinttaoUaOy = await WolfStakingRewardsSfpOWCq.getReward.call(uintDHudq9h, {from: accounts[0]});
		const uintEnP2hYn = await WolfStakingRewardsSfpOWCq.getReward.call(uintci49zo3, {from: accounts[3]});
		const uint256arrayP3UAsPO = await WolfStakingRewardsSfpOWCq.updateNotifyRewardAmount.call(uinthJLHPQ4, {from: accounts[2]});
		const uint256wvz42Hk = await WolfStakingRewardsSfpOWCq.rewardPerToken.call(uintKZRDDeV, {from: accounts[4]});
		const uint256sIKjDjB = await WolfStakingRewardsSfpOWCq.withdrawRemainingBalance.call(uint4Rznfk, uintTWEuSWr, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwg4ixcJ = "Wuq7pTy5hE4UGzqOpmNQ4S23e8SslsIvCFSbQb1D"
		const stringrRpjowY = "ScIimQOFhEbKqjuL5v1ozSUXPUV8s3b"
		const uintrNdiwgn = BigInt("92")
		const WolfStakingRewardsHWxz6F1 = await WolfStakingRewards.new(stringwg4ixcJ, stringrRpjowY, uintrNdiwgn, {from: accounts[3]});
		const uintyA1Uj6i = BigInt("787")
		const uintddwPSh7 = BigInt("195")
		const uint256IlywjAP = await WolfStakingRewardsHWxz6F1.exit.call(uintyA1Uj6i, {from: accounts[1]});
		const uint256ataCvFX = await WolfStakingRewardsHWxz6F1.getRewardForDuration.call(uintddwPSh7, {from: accounts[0]});
	});
})