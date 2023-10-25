const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringu0yhV0d = "p3X"
		const stringzLfnLIG = "a"
		const uintAG8Vjxf = BigInt("4")
		const WolfStakingRewardsAVP0Lb = await WolfStakingRewards.new(stringu0yhV0d, stringzLfnLIG, uintAG8Vjxf, {from: accounts[4]});
		await WolfStakingRewardsAVP0Lb.onlyOwner.call({from: accounts[0]});
		await WolfStakingRewardsAVP0Lb.onlyRewardsDistribution.call({from: accounts[4]});
		const uint8VGSNb5u = await WolfStakingRewardsAVP0Lb.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyRehkHb = "q41735Zu5mCttIxfK3vDNPzxQx"
		const stringTkGkg0l = "lfPYjFbtNbrCw5xS0tSRicrPu"
		const uintMQ5FLH3 = BigInt("53")
		const WolfStakingRewardshOj8t0Z = await WolfStakingRewards.new(stringyRehkHb, stringTkGkg0l, uintMQ5FLH3, {from: accounts[5]});
		const uintIdb8W1y = BigInt("1101")
		const uintARcjrZ0 = BigInt("751")
		const addressTiquLw = accounts[1]
		const uintla5GOMm = BigInt("1804")
		const uintfD4DTQ3 = BigInt("396")
		const uint256lhfjJMw = await WolfStakingRewardshOj8t0Z.rewardPerToken.call(uintIdb8W1y, {from: accounts[0]});
		const addressrTwfc5 = await WolfStakingRewardshOj8t0Z.updateReward.call(addressTiquLw, uintARcjrZ0, {from: accounts[1]});
		const uint256arrayomiyNQ3 = await WolfStakingRewardshOj8t0Z.updateNotifyRewardAmount.call(uintla5GOMm, {from: accounts[2]});
		const uint256arrayvPPfsCA = await WolfStakingRewardshOj8t0Z.updateNotifyRewardAmount.call(uintfD4DTQ3, {from: accounts[4]});
		const stringlHAHQXh = await WolfStakingRewardshOj8t0Z.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressgdNbW6n = accounts[2]
		const addressuzgXzir = accounts[1]
		const addressdCgRGE = accounts[2]
		const WolfStakingRewardsp3ilbOl = await WolfStakingRewards.new(addressgdNbW6n, addressuzgXzir, addressdCgRGE, {from: accounts[1]});
//		await WolfStakingRewardsp3ilbOl.nonReentrant.call({from: accounts[4]});
//		await WolfStakingRewardsp3ilbOl.onlyRewardsDistribution.call({from: accounts[4]});

		await expect(WolfStakingRewardsp3ilbOl.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJ00Hfci = "cWCvbi5358LFO3AEkU9nHbLu2Fw0EH7P0GqYLxPpSKAQrEqBTXX5x3LDxw"
		const stringmUn75dn = "mrtWy0KqhWLJawpSHEs1UoyyGdfNU3fayB9b9qwHLeYwnYlQRYhNuvKSsMC"
		const uintN6qpFp7 = BigInt("81")
		const WolfStakingRewardspb26QIf = await WolfStakingRewards.new(stringJ00Hfci, stringmUn75dn, uintN6qpFp7, {from: accounts[1]});
		const uintQTueeh0 = BigInt("218")
		const addressggkAgX0 = accounts[3]
		const uintCAXOhh = BigInt("216")
		const uintxfaU8aj = BigInt("218")
		const uinta18uWXO = BigInt("1933")
		const uintuQorvMq = BigInt("621")
		const uintlg2lyDX = BigInt("87")
		const stringWYorVqi = await WolfStakingRewardspb26QIf.symbol.call({from: accounts[2]});
		const addressf6QcqPt = await WolfStakingRewardspb26QIf.updateReward.call(addressggkAgX0, uintQTueeh0, {from: accounts[2]});
		const uint256Mg5sn0D = await WolfStakingRewardspb26QIf.stake.call(uintxfaU8aj, uintCAXOhh, {from: accounts[2]});
		const uint256IqG1ez = await WolfStakingRewardspb26QIf.getRewardForDuration.call(uinta18uWXO, {from: accounts[1]});
		const uint256uSSCTli = await WolfStakingRewardspb26QIf.withdrawRemainingBalance.call(uintlg2lyDX, uintuQorvMq, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const string1LbSVZ = "oLo0DzCpxLvOxbp2AQdqrukSfLamshBH69repl0A1x4oQToT4"
		const stringSHicJx9 = "biFJIDqcBCSP1szWP"
		const uintfbyaYzM = BigInt("86")
		const WolfStakingRewardsoO5xCcC = await WolfStakingRewards.new(string1LbSVZ, stringSHicJx9, uintfbyaYzM, {from: accounts[3]});
		const uintQbbelTQ = BigInt("758")
		const addressak91Rc = accounts[1]
		const uintvtZO8Fk = BigInt("1693")
		const addressIeu2MTl = accounts[0]
		const uint256tYMSqBi = await WolfStakingRewardsoO5xCcC.balanceOfPerPool.call(addressak91Rc, uintQbbelTQ, {from: accounts[3]});
		const uint8JpY62GW = await WolfStakingRewardsoO5xCcC.decimals.call({from: accounts[1]});
		const addressCDRDjmS = await WolfStakingRewardsoO5xCcC.updateReward.call(addressIeu2MTl, uintvtZO8Fk, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjgc54WQ = "jX6IwjkhNdiveebgE2ZVosGjnFSKx4u5j6fbhkMWYTRBRVDwuN6sAnLRMKkNRJzKnJd5ffDuGrhPC4xEGXB2iBRn3zrS5"
		const stringnq2ed7e = "4H21t2bvCJ99jGgnAXh7NPRtyiyqXSdsMztPLKP"
		const uintBrWNVGi = BigInt("190")
		const WolfStakingRewardsbuZtCjs = await WolfStakingRewards.new(stringjgc54WQ, stringnq2ed7e, uintBrWNVGi, {from: accounts[1]});
		const uintEZ3NGHz = BigInt("1546")
		const uintioZ0SNX = BigInt("307")
		const uintk8R8cqW = BigInt("1022")
		const stringghO7k6h = await WolfStakingRewardsbuZtCjs.name.call({from: accounts[3]});
		const uint256h10qtXI = await WolfStakingRewardsbuZtCjs.getRewardForDuration.call(uintEZ3NGHz, {from: accounts[4]});
		const stringidM0OrQ = await WolfStakingRewardsbuZtCjs.symbol.call({from: accounts[1]});
		const uint256arrayskADZPG = await WolfStakingRewardsbuZtCjs.updateNotifyRewardAmount.call(uintioZ0SNX, {from: accounts[1]});
		const uint256u1ihZji = await WolfStakingRewardsbuZtCjs.exit.call(uintk8R8cqW, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresshHqH6hp = accounts[0]
		const addressBiiWWKA = accounts[1]
		const addresszuSzRKC = accounts[3]
		const WolfStakingRewardsKPWgWfL = await WolfStakingRewards.new(addresshHqH6hp, addressBiiWWKA, addresszuSzRKC, {from: accounts[3]});
		const uintMQXpF2J = BigInt("1110")
		const uintOYHzacZ = BigInt("881")
		const uintXI1nUdX = BigInt("1652")
		const uintIse78Kk = BigInt("298")
		const uint256kjWV6Sn = await WolfStakingRewardsKPWgWfL.rewardPerToken.call(uintMQXpF2J, {from: accounts[2]});
		const uintISaaLlJ = await WolfStakingRewardsKPWgWfL.getReward.call(uintOYHzacZ, {from: accounts[4]});
//		const uint256arraywZlCtnC = await WolfStakingRewardsKPWgWfL.updateNotifyRewardAmount.call(uintXI1nUdX, {from: accounts[2]});
//		const uint8dkEyFa = await WolfStakingRewardsKPWgWfL.decimals.call({from: accounts[5]});
//		const uint256ZSCISpW = await WolfStakingRewardsKPWgWfL.lastTimeRewardApplicable.call(uintIse78Kk, {from: accounts[3]});

		assert.equal(uint256kjWV6Sn, BigInt("0"))
		await expect(WolfStakingRewardsKPWgWfL.updateNotifyRewardAmount.call(uintXI1nUdX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringKfPcGM5 = "nglszJX2CvNP7iHmMS4dGbL65sOqTGzvQuO5T9yWPNHsAFElnGWRhcsMxi"
		const stringme8PApy = "2tLrm5me3WOQXn5aPGjfr15pOvluIVsq03C9tiOd4tugWSQcM9ksdmOH"
		const uintSTSdmTG = BigInt("94")
		const WolfStakingRewardseRWWxMX = await WolfStakingRewards.new(stringKfPcGM5, stringme8PApy, uintSTSdmTG, {from: "0x0000000000000000000000000000000000000001"});
		const uintLlzy5TB = BigInt("1542")
		const uintahT7Qfy = BigInt("1788")
		const uintnAF3GQZ = BigInt("179")
		const uintpAvmsir = BigInt("1547")
		const addressWOf6Ox8 = accounts[4]
		const uintBKyoAJM = BigInt("1775")
		const addressCsfFgDq = accounts[1]
		const uint256ktqSXCy = await WolfStakingRewardseRWWxMX.withdraw.call(uintahT7Qfy, uintLlzy5TB, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardseRWWxMX.onlyOwner.call({from: accounts[4]});
		const uintqqpivah = await WolfStakingRewardseRWWxMX.getReward.call(uintnAF3GQZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ueOpjD = await WolfStakingRewardseRWWxMX.balanceOfPerPool.call(addressWOf6Ox8, uintpAvmsir, {from: accounts[1]});
		const uint256KQJhadn = await WolfStakingRewardseRWWxMX.earned.call(addressCsfFgDq, uintBKyoAJM, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringo2RxkFV = "lL4pJqABsvsYXZObAMG80LM1D0eauLTWN3pRIYMvPDMRxf6lpOnjnJkUsoVGFrnQ5akv9eUJoxppfS8PzuOYQXylUJPtr26A"
		const stringfMYKCq = "lRYiMSl979RnLzH2cikWwUoUv3yIvKQQXy10Yjc2UkcIFGKpdQNACOCH3FVnPKr15Z85pHAmglr37aqk"
		const uintXZ2x8NK = BigInt("30")
		const WolfStakingRewardsDtHY3qj = await WolfStakingRewards.new(stringo2RxkFV, stringfMYKCq, uintXZ2x8NK, {from: accounts[0]});
		const uintdcZk88S = BigInt("1935")
		const addressQxGp0UK = accounts[4]
		const uintu26qIyX = BigInt("1408")
		const uintsxbKw0d = BigInt("737")
		await WolfStakingRewardsDtHY3qj.onlyRewardsDistribution.call({from: accounts[2]});
		const addressMGp4n9j = await WolfStakingRewardsDtHY3qj.updateReward.call(addressQxGp0UK, uintdcZk88S, {from: accounts[1]});
		const uint256qazMZEB = await WolfStakingRewardsDtHY3qj.withdraw.call(uintsxbKw0d, uintu26qIyX, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresshxWU1eF = accounts[2]
		const addresswyTg87H = accounts[5]
		const addressxILu1wN = accounts[1]
		const WolfStakingRewardslOb2ets = await WolfStakingRewards.new(addresshxWU1eF, addresswyTg87H, addressxILu1wN, {from: accounts[5]});
		const uintoZDYuKU = BigInt("1242")
		const uintjGzIKQ0 = BigInt("1807")
		const uintqOmILy9 = BigInt("230")
		const uint256PKJTQo3 = await WolfStakingRewardslOb2ets.lastTimeRewardApplicable.call(uintoZDYuKU, {from: accounts[0]});
//		const uint256Crr53ke = await WolfStakingRewardslOb2ets.exit.call(uintjGzIKQ0, {from: accounts[5]});
//		const uint256XsyUW4y = await WolfStakingRewardslOb2ets.exit.call(uintqOmILy9, {from: accounts[1]});

		assert.equal(uint256PKJTQo3, BigInt("0"))
		await expect(WolfStakingRewardslOb2ets.exit.call(uintjGzIKQ0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressOm5XrK = accounts[0]
		const addressv9kg11B = accounts[1]
		const addressdh6RDfg = accounts[3]
		const WolfStakingRewardsKPWgWfL = await WolfStakingRewards.new(addressOm5XrK, addressv9kg11B, addressdh6RDfg, {from: accounts[3]});
		const uintmhpipHU = BigInt("1110")
		const uintFHGDvhz = BigInt("1771")
		const uintFtyEVNS = BigInt("86")
		const uintSNuKCOw = BigInt("881")
		const uintNDfjSeH = BigInt("1652")
		const uintJOfaaUm = BigInt("17")
		const addressox5XTVz = accounts[4]
		const uintbUrMYtH = BigInt("298")
		const uint256kjWV6Sn = await WolfStakingRewardsKPWgWfL.rewardPerToken.call(uintmhpipHU, {from: accounts[2]});
//		const uint256rdEmiSH = await WolfStakingRewardsKPWgWfL.stake.call(uintFtyEVNS, uintFHGDvhz, {from: accounts[4]});
//		const uintISaaLlJ = await WolfStakingRewardsKPWgWfL.getReward.call(uintSNuKCOw, {from: accounts[4]});
//		const uint256arraywZlCtnC = await WolfStakingRewardsKPWgWfL.updateNotifyRewardAmount.call(uintNDfjSeH, {from: accounts[2]});
//		const uint256Kl5GUdf = await WolfStakingRewardsKPWgWfL.balanceOfPerPool.call(addressox5XTVz, uintJOfaaUm, {from: accounts[3]});
//		const uint8dkEyFa = await WolfStakingRewardsKPWgWfL.decimals.call({from: accounts[5]});
//		const uint256ZSCISpW = await WolfStakingRewardsKPWgWfL.lastTimeRewardApplicable.call(uintbUrMYtH, {from: accounts[3]});

		assert.equal(uint256kjWV6Sn, BigInt("0"))
		await expect(WolfStakingRewardsKPWgWfL.stake.call(uintFtyEVNS, uintFHGDvhz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressqM9p8d9 = accounts[2]
		const addressRBQHWF2 = accounts[1]
		const addresscQoMS0C = accounts[2]
		const WolfStakingRewardsp3ilbOl = await WolfStakingRewards.new(addressqM9p8d9, addressRBQHWF2, addresscQoMS0C, {from: accounts[1]});
		const uintEZmdqB6 = BigInt("1322")
		const uintos0LhgD = BigInt("1152")
		const uintslJyHYZ = BigInt("1762")
		const uint256MwwP30o = await WolfStakingRewardsp3ilbOl.totalSupplyPerPool.call(uintEZmdqB6, {from: accounts[2]});
//		const uint256UIiiP4O = await WolfStakingRewardsp3ilbOl.withdrawRemainingBalance.call(uintslJyHYZ, uintos0LhgD, {from: accounts[0]});
//		await WolfStakingRewardsp3ilbOl.onlyRewardsDistribution.call({from: accounts[4]});

		assert.equal(uint256MwwP30o, BigInt("0"))
		await expect(WolfStakingRewardsp3ilbOl.withdrawRemainingBalance.call(uintslJyHYZ, uintos0LhgD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringKT1bgAX = "dLinJ2U6LtaiM9DJxXpPf7KK"
		const stringflhlaYD = "aTlScM723qg39D5Qx3OwQUN19qAtY99bgbkgPc0YLwO1JjOGadLW72g3m3aYHMTpM52"
		const uinti7F6auw = BigInt("47")
		const WolfStakingRewardsUm20j4O = await WolfStakingRewards.new(stringKT1bgAX, stringflhlaYD, uinti7F6auw, {from: accounts[5]});
		const uintD7My7BZ = BigInt("311")
		const uintgL65LUV = BigInt("1343")
		const uintFYrIlHv = BigInt("1630")
		const addressQFK0hR5 = accounts[3]
		const uintep7a3NY = BigInt("1731")
		const uintrP7nzGk = BigInt("221")
		const uint8jJKC3tf = await WolfStakingRewardsUm20j4O.decimals.call({from: accounts[0]});
		const uint256hKWMLJm = await WolfStakingRewardsUm20j4O.stake.call(uintgL65LUV, uintD7My7BZ, {from: accounts[0]});
		const uint256xEoWLST = await WolfStakingRewardsUm20j4O.balanceOfPerPool.call(addressQFK0hR5, uintFYrIlHv, {from: accounts[5]});
		const uint256pLzRWvI = await WolfStakingRewardsUm20j4O.stake.call(uintrP7nzGk, uintep7a3NY, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresshv9ZOT7 = accounts[2]
		const addressjen2DzI = accounts[1]
		const addressuzk7IIG = accounts[2]
		const WolfStakingRewardsp3ilbOl = await WolfStakingRewards.new(addresshv9ZOT7, addressjen2DzI, addressuzk7IIG, {from: accounts[1]});
		const uintODpDCJ = BigInt("539")
		const uintpRtKY9 = BigInt("921")
		const uintQDVwiBK = BigInt("1055")
		const uintrsXlGq = BigInt("615")
		const uint5Tzurt = BigInt("1828")
		const uintrtrj6Th = BigInt("1448")
		const uintqWkZpE8 = await WolfStakingRewardsp3ilbOl.getReward.call(uintODpDCJ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Scp4WCq = await WolfStakingRewardsp3ilbOl.getRewardForDuration.call(uintpRtKY9, {from: accounts[4]});
//		await WolfStakingRewardsp3ilbOl.onlyRewardsDistribution.call({from: accounts[4]});
//		const uint256Dhw6hEG = await WolfStakingRewardsp3ilbOl.stake.call(uintrsXlGq, uintQDVwiBK, {from: accounts[1]});
//		const uint8OlXdyq5 = await WolfStakingRewardsp3ilbOl.decimals.call({from: accounts[0]});
//		const uint256t9Gv4Mm = await WolfStakingRewardsp3ilbOl.withdraw.call(uintrtrj6Th, uint5Tzurt, {from: accounts[4]});

		await expect(WolfStakingRewardsp3ilbOl.getRewardForDuration.call(uintpRtKY9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringgK4i3Cf = "f3UUhMesfxDDP4JErGrJnEt6SjnNcfCfhBFo84bRdDUCLoWsppXyHrIAUASfEeM5vP3gkCqr8u4tYQZSJL1nrKv"
		const stringGDPKHK4 = "3hwIxUBHuxSpir61XyFXJgy3s3atSMaArndv8WiJxvj7B2DLXHXxlNmncpRpALmgNBGriYMZAt"
		const uintsvzUKSq = BigInt("220")
		const WolfStakingRewardscYxhWTN = await WolfStakingRewards.new(stringgK4i3Cf, stringGDPKHK4, uintsvzUKSq, {from: accounts[2]});
		const uintGFKL8m0 = BigInt("307")
		const addresseUG79mW = accounts[2]
		const uintd9mWVun = BigInt("1207")
		const uintIut0Zd0 = BigInt("914")
		const uint256NcuYD4t = await WolfStakingRewardscYxhWTN.earned.call(addresseUG79mW, uintGFKL8m0, {from: accounts[0]});
		const uint256jNJ7Hh = await WolfStakingRewardscYxhWTN.withdrawRemainingBalance.call(uintIut0Zd0, uintd9mWVun, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressAv50dpS = accounts[2]
		const addressYEYv8Z = accounts[1]
		const addressUdXckR = accounts[2]
		const WolfStakingRewardsp3ilbOl = await WolfStakingRewards.new(addressAv50dpS, addressYEYv8Z, addressUdXckR, {from: accounts[1]});
		const uintsOe0fB = BigInt("539")
		const uintn7lBDOL = BigInt("1805")
		const uintfWHssOS = BigInt("1424")
		const uintqWkZpE8 = await WolfStakingRewardsp3ilbOl.getReward.call(uintsOe0fB, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256t9Gv4Mm = await WolfStakingRewardsp3ilbOl.withdraw.call(uintfWHssOS, uintn7lBDOL, {from: accounts[4]});

		await expect(WolfStakingRewardsp3ilbOl.withdraw.call(uintfWHssOS, uintn7lBDOL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresszbrb59X = accounts[0]
		const addressLAlZ1E4 = accounts[3]
		const addressaEPl1vy = accounts[0]
		const WolfStakingRewardsQUq28di = await WolfStakingRewards.new(addresszbrb59X, addressLAlZ1E4, addressaEPl1vy, {from: "0x0000000000000000000000000000000000000001"});
		const uintfpnG0KM = BigInt("1448")
		const uintCPPIWME = BigInt("1673")
		const uintW9lI1nf = BigInt("1918")
		const uintuAKokNU = BigInt("1921")
		const uint7Yv4ju = BigInt("1956")
		const uintuqy6UBI = BigInt("30")
		const uintg8Ce15c = BigInt("679")
		const addressf7TjZ7E = accounts[4]
		const uint256oIOv2dO = await WolfStakingRewardsQUq28di.exit.call(uintfpnG0KM, {from: accounts[2]});
		const uint256ZhB7oiL = await WolfStakingRewardsQUq28di.totalSupplyPerPool.call(uintCPPIWME, {from: accounts[1]});
		const uint256GD5G2Gr = await WolfStakingRewardsQUq28di.withdrawRemainingBalance.call(uintuAKokNU, uintW9lI1nf, {from: accounts[4]});
		const uint256AYP0WKL = await WolfStakingRewardsQUq28di.withdraw.call(uintuqy6UBI, uint7Yv4ju, {from: accounts[3]});
		const uint256SlTDbh = await WolfStakingRewardsQUq28di.earned.call(addressf7TjZ7E, uintg8Ce15c, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHQkvLDY = "UGvNODLNDcP2dcUJnFqcc6bTyOQ6O8PMFgQ5Wl2xCip3dC83CPoC1yivExO9wYk6B9p2g7PUCqACcPYh45yjP8T"
		const stringb5i51Ic = "QKC"
		const uintMWSmwKI = BigInt("194")
		const WolfStakingRewards8wPsE0 = await WolfStakingRewards.new(stringHQkvLDY, stringb5i51Ic, uintMWSmwKI, {from: accounts[5]});
		const uintvHQDsA = BigInt("1003")
		const uintFIA3e6H = BigInt("912")
		const uinthSvz7Nb = BigInt("1650")
		const uintHRiPDl0 = BigInt("1135")
		const uintUgr7MLZ = BigInt("318")
		const uintdJxyU9h = BigInt("630")
		const uintbc6ZHkN = BigInt("1518")
		const uint256arrayddjkwrl = await WolfStakingRewards8wPsE0.updateNotifyRewardAmount.call(uintvHQDsA, {from: accounts[0]});
		const uint256arrayKza9pkG = await WolfStakingRewards8wPsE0.updateNotifyRewardAmount.call(uintFIA3e6H, {from: accounts[0]});
		const uint256c2t8upe = await WolfStakingRewards8wPsE0.stake.call(uintHRiPDl0, uinthSvz7Nb, {from: accounts[5]});
		const uint256arraybVbBzWH = await WolfStakingRewards8wPsE0.updateNotifyRewardAmount.call(uintUgr7MLZ, {from: accounts[2]});
		const uint256PUKRonP = await WolfStakingRewards8wPsE0.stake.call(uintbc6ZHkN, uintdJxyU9h, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringq3l8EM = "54H95GnU7SmSyC4F5TD5a1tJk0inAUhCvazj8woOBU1otmki4ckTSU5xAauVxzPL"
		const stringkIW5bkG = "vl94MpMZ2t1JqZtXSrsjoek6xzFehOB83Yvb3FNBcz3uhqo8fSBaqmTn6oHH362TdB1eqddniqTIayE21qQWykXk"
		const uintrAPQrmS = BigInt("169")
		const WolfStakingRewardsl4bH5v5 = await WolfStakingRewards.new(stringq3l8EM, stringkIW5bkG, uintrAPQrmS, {from: accounts[3]});
		const uintzmDVtfQ = BigInt("1968")
		const addressr5vr2rP = accounts[2]
		const addressKrgsbdw = await WolfStakingRewardsl4bH5v5.updateReward.call(addressr5vr2rP, uintzmDVtfQ, {from: accounts[3]});
		const stringeGsJfBR = await WolfStakingRewardsl4bH5v5.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuN1nTUJ = "mxwC8tQHKgvTg2trAjlj7osT8p76SXs40Rz3RQ3IMKCiGKWDSjhyo7VJmyj3ERKVTB0OJlPdxQUv29dtvSjXRLwzu3FA4O"
		const stringoqAd5R5 = "idQdfE76fQ71rYpRBc7xKUnw6WfpHJsaGGsuwvD9a65vsQXk8ul2"
		const uintIxH1J77 = BigInt("106")
		const WolfStakingRewardszuvyxzB = await WolfStakingRewards.new(stringuN1nTUJ, stringoqAd5R5, uintIxH1J77, {from: accounts[4]});
		const uintVLblIQ1 = BigInt("288")
		const uintbEv9kok = BigInt("866")
		const uintHFmciz = BigInt("1196")
		const uint256VVZX8yv = await WolfStakingRewardszuvyxzB.getRewardForDuration.call(uintVLblIQ1, {from: accounts[5]});
		const uint256u3FKX1O = await WolfStakingRewardszuvyxzB.withdrawRemainingBalance.call(uintHFmciz, uintbEv9kok, {from: accounts[1]});
		await WolfStakingRewardszuvyxzB.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringz8TdWeb = "X2AKetaAYAr"
		const stringFEafTBx = "VXus20wVQc3BeR6phNaDtU7mQNdx9heC4iMj2CIb"
		const uintla61D70 = BigInt("203")
		const WolfStakingRewardsJM9Q7Qa = await WolfStakingRewards.new(stringz8TdWeb, stringFEafTBx, uintla61D70, {from: accounts[4]});
		const uintrNY4HXH = BigInt("160")
		const uintDOKlyex = BigInt("388")
		const uintMwJLBYv = BigInt("1958")
		const uintT9JhObk = BigInt("1214")
		const uintfEkO7sR = BigInt("704")
		const uint256dbSJvlP = await WolfStakingRewardsJM9Q7Qa.withdrawRemainingBalance.call(uintDOKlyex, uintrNY4HXH, {from: accounts[2]});
		await WolfStakingRewardsJM9Q7Qa.onlyOwner.call({from: accounts[0]});
		const stringm7hEUlB = await WolfStakingRewardsJM9Q7Qa.name.call({from: accounts[1]});
		await WolfStakingRewardsJM9Q7Qa.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256wGfUnP = await WolfStakingRewardsJM9Q7Qa.stake.call(uintT9JhObk, uintMwJLBYv, {from: accounts[1]});
		const uint256enQf6XH = await WolfStakingRewardsJM9Q7Qa.rewardPerToken.call(uintfEkO7sR, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressl9C3Z9g = accounts[0]
		const addressoP8DbWO = accounts[0]
		const addressQnaT2qg = accounts[4]
		const WolfStakingRewardsaP8MXw = await WolfStakingRewards.new(addressl9C3Z9g, addressoP8DbWO, addressQnaT2qg, {from: accounts[3]});
		const uintPUTfNUe = BigInt("1278")
		const uinttJch4Py = BigInt("430")
		const addressLoiUwVN = accounts[4]
		const uintZ0iECa = BigInt("1629")
		const uintqfqtQvz = BigInt("1044")
		const uintooSqm11 = BigInt("754")
		const uintvgXxqDW = BigInt("1422")
		const uintZWHRZSa = BigInt("1691")
		const uintXOC2mBp = await WolfStakingRewardsaP8MXw.getReward.call(uintPUTfNUe, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yQCzGur = await WolfStakingRewardsaP8MXw.balanceOfPerPool.call(addressLoiUwVN, uinttJch4Py, {from: accounts[2]});
//		const uint256MR3qsS3 = await WolfStakingRewardsaP8MXw.stake.call(uintqfqtQvz, uintZ0iECa, {from: accounts[1]});
//		const uint8srHjk6V = await WolfStakingRewardsaP8MXw.decimals.call({from: accounts[0]});
//		const uint8WLdQS6F = await WolfStakingRewardsaP8MXw.decimals.call({from: accounts[2]});
//		const stringktTQCBI = await WolfStakingRewardsaP8MXw.symbol.call({from: accounts[2]});
//		const uint256K8PiBwD = await WolfStakingRewardsaP8MXw.withdrawRemainingBalance.call(uintvgXxqDW, uintooSqm11, {from: accounts[2]});
//		const uintro5CNRV = await WolfStakingRewardsaP8MXw.getReward.call(uintZWHRZSa, {from: accounts[3]});

		assert.equal(uint256yQCzGur, BigInt("0"))
		await expect(WolfStakingRewardsaP8MXw.stake.call(uintqfqtQvz, uintZ0iECa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringRKCScJ = "sOQGrtCTHMy6mvI6QXA"
		const stringLgH1O9v = "dwnJ4fEmOov1dDeE4JVZcRNcamW2fCVpHo3IQfM1zOQ5hlxGX"
		const uintNPP28Bi = BigInt("69")
		const WolfStakingRewardsrgVh4zJ = await WolfStakingRewards.new(stringRKCScJ, stringLgH1O9v, uintNPP28Bi, {from: accounts[2]});
		const uintd6mZClP = BigInt("1952")
		const uintOiVh0pY = BigInt("806")
		const uintjvvuyxI = BigInt("1831")
		const stringxtIs76l = await WolfStakingRewardsrgVh4zJ.symbol.call({from: accounts[4]});
		const uint256ORr0KkL = await WolfStakingRewardsrgVh4zJ.rewardPerToken.call(uintd6mZClP, {from: "0x0000000000000000000000000000000000000001"});
		const uintmSsAD98 = await WolfStakingRewardsrgVh4zJ.getReward.call(uintOiVh0pY, {from: accounts[2]});
		await WolfStakingRewardsrgVh4zJ.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Z9NoOsD = await WolfStakingRewardsrgVh4zJ.lastTimeRewardApplicable.call(uintjvvuyxI, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTfEXTx = "QwGN0O6aOAAJwl8qIAkxMjcuFTa8q9CpkAPkuHcEiF1AoX1aSIOEqHQj"
		const stringyWeoNe = "4VSKwaVixLgyNNX3Yvmut0jbGvfqeIaLOoevxmK64ONCNyAQ4sEw8thkCZ"
		const uintoaexgkS = BigInt("213")
		const WolfStakingRewardsu6KiUa4 = await WolfStakingRewards.new(stringTfEXTx, stringyWeoNe, uintoaexgkS, {from: accounts[0]});
		const uintdctNhQF = BigInt("1870")
		const uintFs8xZRq = BigInt("616")
		const uintrsHk2xv = BigInt("1625")
		const uint256zG4K5z = await WolfStakingRewardsu6KiUa4.withdraw.call(uintFs8xZRq, uintdctNhQF, {from: accounts[4]});
		const uint8dqk2i9N = await WolfStakingRewardsu6KiUa4.decimals.call({from: accounts[3]});
		const uint2Hi9LG = await WolfStakingRewardsu6KiUa4.getReward.call(uintrsHk2xv, {from: accounts[5]});
		await WolfStakingRewardsu6KiUa4.nonReentrant.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUDT3srm = "obkzsRGT16oWGezPsth"
		const stringcwOAzzI = "nppq4wg"
		const uintwsV951F = BigInt("104")
		const WolfStakingRewardsinIA5Pn = await WolfStakingRewards.new(stringUDT3srm, stringcwOAzzI, uintwsV951F, {from: accounts[3]});
		const uintKTPMwfA = BigInt("1638")
		const addressFfJ1dwA = accounts[4]
		const uintYLswCuw = BigInt("692")
		const addressTyRfA0v = accounts[3]
		const uintrrbiNKZ = BigInt("321")
		const uintBPOMAeC = BigInt("116")
		const uintb3Nzcw = BigInt("1826")
		const uintJqBg4zG = BigInt("1261")
		const uintTz2iM8w = BigInt("1447")
		const uint256Ev8Kue = await WolfStakingRewardsinIA5Pn.earned.call(addressFfJ1dwA, uintKTPMwfA, {from: accounts[2]});
		const addressshlQhP9 = await WolfStakingRewardsinIA5Pn.updateReward.call(addressTyRfA0v, uintYLswCuw, {from: accounts[4]});
		const uint256yuxLvJc = await WolfStakingRewardsinIA5Pn.lastTimeRewardApplicable.call(uintrrbiNKZ, {from: accounts[2]});
		const uint256FMlY6Ua = await WolfStakingRewardsinIA5Pn.rewardPerToken.call(uintBPOMAeC, {from: accounts[1]});
		const uint256DbOsgzG = await WolfStakingRewardsinIA5Pn.stake.call(uintJqBg4zG, uintb3Nzcw, {from: accounts[3]});
		const uint256Q43nHFZ = await WolfStakingRewardsinIA5Pn.totalSupplyPerPool.call(uintTz2iM8w, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresswF8EzAl = accounts[2]
		const address0DY2vA = accounts[1]
		const addressav3b1E = accounts[2]
		const WolfStakingRewardsp3ilbOl = await WolfStakingRewards.new(addresswF8EzAl, address0DY2vA, addressav3b1E, {from: accounts[1]});
		const uintUoVK6RX = BigInt("539")
		const uintU4yGdwA = BigInt("1588")
		const uinttjIWwHp = BigInt("1360")
		const uintqWkZpE8 = await WolfStakingRewardsp3ilbOl.getReward.call(uintUoVK6RX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256D3TxD36 = await WolfStakingRewardsp3ilbOl.withdrawRemainingBalance.call(uinttjIWwHp, uintU4yGdwA, {from: accounts[1]});

		await expect(WolfStakingRewardsp3ilbOl.withdrawRemainingBalance.call(uinttjIWwHp, uintU4yGdwA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringIroslTo = "Vgqea7feJ22kJa4cj1qAuknjmY6tFKNGPzHkrgnrZv83ZDQ0SuoC9NhKUXrELILF5BqzK0TyATW53E"
		const stringf4oTM5t = "h17NqIcMwmESFDUcgHfhpG4LO65NxpWDumTmL3oIGkBUzWfvEbnoIqNm8xueqa"
		const uintaIEVwS9 = BigInt("116")
		const WolfStakingRewardsr7AhKd = await WolfStakingRewards.new(stringIroslTo, stringf4oTM5t, uintaIEVwS9, {from: accounts[4]});
		const uintNylzauK = BigInt("1686")
		await WolfStakingRewardsr7AhKd.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256arrays1KU0ec = await WolfStakingRewardsr7AhKd.updateNotifyRewardAmount.call(uintNylzauK, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPQZ93aM = "55fvZ7ibWb7kombK3S5zU9dhqLGuBNpPH89CHKP46Ur5xIMTMgbDPCub17OWq3OgJnPxdspFzPVQNTYO7NSrJwSY"
		const stringuAyTKLV = "YF4KZ7QPjxSdmixlhsNSm4lRr"
		const uintWiZA4Oa = BigInt("130")
		const WolfStakingRewardszWGkQtj = await WolfStakingRewards.new(stringPQZ93aM, stringuAyTKLV, uintWiZA4Oa, {from: accounts[2]});
		const uintVKdH3Ow = BigInt("1753")
		const uintJdxQphw = BigInt("193")
		const uintFcfKSa8 = BigInt("327")
		const uintdIyu37 = BigInt("1258")
		const addresshQGwH1J = accounts[2]
		const uint256hT812Ln = await WolfStakingRewardszWGkQtj.getRewardForDuration.call(uintVKdH3Ow, {from: accounts[3]});
		const uint256xYl8p1z = await WolfStakingRewardszWGkQtj.getRewardForDuration.call(uintJdxQphw, {from: accounts[5]});
		const uint256UswNhkb = await WolfStakingRewardszWGkQtj.totalSupplyPerPool.call(uintFcfKSa8, {from: accounts[2]});
		const addressL9wTkYg = await WolfStakingRewardszWGkQtj.updateReward.call(addresshQGwH1J, uintdIyu37, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvVfshLh = "18q1wCiy15Dh0vS2B2L7P2QSxEGzQNcNj4UQwD3Wl"
		const stringhg7umlp = "22gxhVHtnbbDRTQHDCr7UGXBboF7VVPPvoMcn7EtbTJRlOWOLYXZ2rkQgINcA7zD4xXXeMUSD9aEvdGvswE"
		const uintI4PJ0K = BigInt("125")
		const WolfStakingRewardsvUSqv7 = await WolfStakingRewards.new(stringvVfshLh, stringhg7umlp, uintI4PJ0K, {from: accounts[0]});
		const uintBdCr5pZ = BigInt("977")
		const uintcj3nMZN = BigInt("1711")
		const uinttk8BY3E = BigInt("1497")
		const uint256arrayIHkMDzm = await WolfStakingRewardsvUSqv7.updateNotifyRewardAmount.call(uintBdCr5pZ, {from: accounts[4]});
		const uint256JSmiVjF = await WolfStakingRewardsvUSqv7.withdrawRemainingBalance.call(uinttk8BY3E, uintcj3nMZN, {from: accounts[0]});
		const uint8IANUWsL = await WolfStakingRewardsvUSqv7.decimals.call({from: accounts[3]});
		await WolfStakingRewardsvUSqv7.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMJzSfoB = "eGQDOQCydC"
		const stringJgYWu1X = "8rwe93kluYoWWFLsM6k2CyvM0JRYXqYfOpRLHYokPcdgedcgf96asyT3HOP"
		const uintCieEvTu = BigInt("234")
		const WolfStakingRewardspjpBkYL = await WolfStakingRewards.new(stringMJzSfoB, stringJgYWu1X, uintCieEvTu, {from: accounts[0]});
		const uintgGfhWc8 = BigInt("1571")
		const addressRUOJ1Jd = "0x0000000000000000000000000000000000000001"
		await WolfStakingRewardspjpBkYL.nonReentrant.call({from: accounts[3]});
		const uint256bhoP95C = await WolfStakingRewardspjpBkYL.earned.call(addressRUOJ1Jd, uintgGfhWc8, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhFMBjO5 = "oBRJa40FqWQpyiMwdSAhBYq9E4rfBcRgeeOi9RQ3DSFi6VrBu578erB8kfvT5"
		const stringpLAqYeo = "CXVvK96tdH7rhv7Cp2"
		const uintSck00rn = BigInt("68")
		const WolfStakingRewardspsPWxdG = await WolfStakingRewards.new(stringhFMBjO5, stringpLAqYeo, uintSck00rn, {from: accounts[2]});
		const uintTF5R7Rx = BigInt("414")
		const uinto2nC1l = BigInt("659")
		const uintL6bzpU5 = BigInt("742")
		const uintyhWvL9t = BigInt("1606")
		await WolfStakingRewardspsPWxdG.onlyOwner.call({from: accounts[0]});
		const uint256arrayxSGW7LI = await WolfStakingRewardspsPWxdG.updateNotifyRewardAmount.call(uintTF5R7Rx, {from: accounts[1]});
		const uint256vImfRWg = await WolfStakingRewardspsPWxdG.stake.call(uintL6bzpU5, uinto2nC1l, {from: accounts[5]});
		const uint256gGybNy1 = await WolfStakingRewardspsPWxdG.rewardPerToken.call(uintyhWvL9t, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbVqSn4I = "zr68xaYtpnua5apznNuBT"
		const stringcmT3nV3 = "hBV9MF1gosg30zlDClWAys"
		const uintM5vOK10 = BigInt("134")
		const WolfStakingRewardsSRjW8uR = await WolfStakingRewards.new(stringbVqSn4I, stringcmT3nV3, uintM5vOK10, {from: accounts[3]});
		const uintHx81uC = BigInt("1729")
		const addressukkMy1i = accounts[4]
		const uintPZkSZP5 = BigInt("1496")
		const uintUwiS4wQ = BigInt("649")
		const uint256PMCWbln = await WolfStakingRewardsSRjW8uR.earned.call(addressukkMy1i, uintHx81uC, {from: "0x0000000000000000000000000000000000000001"});
		const uint8yVp7GNu = await WolfStakingRewardsSRjW8uR.decimals.call({from: accounts[4]});
		const uint256fiSeuCV = await WolfStakingRewardsSRjW8uR.withdrawRemainingBalance.call(uintUwiS4wQ, uintPZkSZP5, {from: accounts[2]});
		await WolfStakingRewardsSRjW8uR.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTjNKKo3 = "TYIGKBURWxS7HDnlnAV7qP7T8le6TUwTGG1Y0qaPgr6u6vNG9Vwf4LlX9Qre7"
		const stringc6yTIB8 = "ZVInvHTnzvRhNKOMFXwqC5it2jyqIFL24B4ThUGvnhnPh3xsfxJGfEl9uxgKIiwVn62nF0zeO5Mu"
		const uintZsMTZwd = BigInt("127")
		const WolfStakingRewardsjRYu13p = await WolfStakingRewards.new(stringTjNKKo3, stringc6yTIB8, uintZsMTZwd, {from: accounts[1]});
		const uintEHyMCj2 = BigInt("299")
		const uintw5t8MGU = BigInt("506")
		const uintTcXymgv = BigInt("1387")
		const uintnsGIYhs = BigInt("267")
		const uintU4z7Fg = BigInt("1950")
		const uintMLKUqg0 = BigInt("148")
		const uintCsHp7ZY = BigInt("691")
		const uint8E7tF4P8 = await WolfStakingRewardsjRYu13p.decimals.call({from: accounts[3]});
		const uint256zM9EC96 = await WolfStakingRewardsjRYu13p.stake.call(uintw5t8MGU, uintEHyMCj2, {from: accounts[3]});
		const uint8C4JT6V = await WolfStakingRewardsjRYu13p.decimals.call({from: accounts[1]});
		const uint256mglyYCT = await WolfStakingRewardsjRYu13p.exit.call(uintTcXymgv, {from: accounts[1]});
		const uint256dqzn08x = await WolfStakingRewardsjRYu13p.withdrawRemainingBalance.call(uintU4z7Fg, uintnsGIYhs, {from: accounts[1]});
		const uint256ZpX7E5W = await WolfStakingRewardsjRYu13p.stake.call(uintCsHp7ZY, uintMLKUqg0, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTDaaSv = "yJMYcGyyroJxWpFT7K2Dx51WtFk3iXx2fVpyJUTsQxMEH9fUlGtqUkzjOhnt7rSBHU9tHPjJsnCu28mEJrA3ipVYs4vr"
		const stringWQ9SG7K = "Wo7QqpKYCJdDioclpXAfEkbiw1CbtgvIbt8RvWRtoMau7cVmhz2OOtxmgOiDRsj61Zue5dMwNkxA4Wu1r2ubr4kovXcPCsA7"
		const uintcBb7fp7 = BigInt("97")
		const WolfStakingRewardsCD4lW7 = await WolfStakingRewards.new(stringTDaaSv, stringWQ9SG7K, uintcBb7fp7, {from: accounts[0]});
		const uintxzghXVJ = BigInt("327")
		const addressuO4u8Xr = accounts[5]
		const uintYbGW1cZ = BigInt("943")
		const addressld7ZUOT = "0x0000000000000000000000000000000000000001"
		const uintgrCx5fm = BigInt("28")
		const addresso6p99K8 = accounts[0]
		const uint3ej0c2 = BigInt("2013")
		const addresshELh7wG = "0x0000000000000000000000000000000000000001"
		const uintA1UxwMn = BigInt("1621")
		const uint256jRKpoJv = await WolfStakingRewardsCD4lW7.earned.call(addressuO4u8Xr, uintxzghXVJ, {from: accounts[2]});
		const addressHnnrH3A = await WolfStakingRewardsCD4lW7.updateReward.call(addressld7ZUOT, uintYbGW1cZ, {from: accounts[2]});
		const uint256HQuZ5mo = await WolfStakingRewardsCD4lW7.balanceOfPerPool.call(addresso6p99K8, uintgrCx5fm, {from: accounts[2]});
		const addressbmH3frg = await WolfStakingRewardsCD4lW7.updateReward.call(addresshELh7wG, uint3ej0c2, {from: accounts[3]});
		const uint256YVpFoou = await WolfStakingRewardsCD4lW7.getRewardForDuration.call(uintA1UxwMn, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYM64WZH = "pOT9EenBpnVytv9TRHnJt0liBmGhC2pEoWZXBUyEYAo7Nj6B3Z687HbqmLGKC82PJMLyK"
		const stringpA5pjLf = "ngQkVy2I3n4dhNfzmwEbOAauxRAz9QJHmmtmire82JhUcB6Wxuy1j8BFvM5toLf3uxwOHI4MrUv2CmdBGXJxuvXwUA"
		const uintOErAJrP = BigInt("19")
		const WolfStakingRewardsX8Xji8m = await WolfStakingRewards.new(stringYM64WZH, stringpA5pjLf, uintOErAJrP, {from: accounts[0]});
		const uintamEuYz3 = BigInt("1372")
		const uint256arraytLBta0u = await WolfStakingRewardsX8Xji8m.updateNotifyRewardAmount.call(uintamEuYz3, {from: accounts[5]});
		const stringG3SNGld = await WolfStakingRewardsX8Xji8m.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringC00fy9e = "9L4udaEFhPiKNhqscDbNG9CK4OITqk5mm"
		const stringSq4pYMI = "zWPs6yYQI3CLYTQxxw3fJ1xjYIhTyGyb54M0PpHGA49b3bEzkJKzpzRSu9Vu3Th0pOfzPj50LdixqqoXMOfU1mBAVd"
		const uintKFBiTJ6 = BigInt("133")
		const WolfStakingRewardsCZN8TOl = await WolfStakingRewards.new(stringC00fy9e, stringSq4pYMI, uintKFBiTJ6, {from: accounts[0]});
		const uintvVtWtU7 = BigInt("896")
		const addressG4djfoU = accounts[4]
		const uintpqRrVmo = BigInt("295")
		const uintR50FZe = BigInt("1238")
		const uint256YMoNrAK = await WolfStakingRewardsCZN8TOl.earned.call(addressG4djfoU, uintvVtWtU7, {from: accounts[3]});
		const uintDVCmJl = await WolfStakingRewardsCZN8TOl.getReward.call(uintpqRrVmo, {from: accounts[3]});
		const uintINH2m5G = await WolfStakingRewardsCZN8TOl.getReward.call(uintR50FZe, {from: accounts[0]});
		const stringL5CWSMj = await WolfStakingRewardsCZN8TOl.name.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwCpvqO5 = "C5AbeFDNyA262IO99Me"
		const stringcyJaNSl = "k9553RVkJTs1T"
		const uintGswVzY = BigInt("188")
		const WolfStakingRewardsXcUtnyO = await WolfStakingRewards.new(stringwCpvqO5, stringcyJaNSl, uintGswVzY, {from: accounts[0]});
		const uintQQpmYLQ = BigInt("504")
		const uintYbDkBw = BigInt("1403")
		const addressWj8zgu = accounts[3]
		const uintAi8QZbZ = BigInt("1628")
		const uint256arraySBZjUJm = await WolfStakingRewardsXcUtnyO.updateNotifyRewardAmount.call(uintQQpmYLQ, {from: accounts[3]});
		const uint8PeVFYF9 = await WolfStakingRewardsXcUtnyO.decimals.call({from: accounts[0]});
		const addressA7xC97d = await WolfStakingRewardsXcUtnyO.updateReward.call(addressWj8zgu, uintYbDkBw, {from: accounts[5]});
		const uint256inyTAMj = await WolfStakingRewardsXcUtnyO.exit.call(uintAi8QZbZ, {from: accounts[4]});
		const uint8qqfTdHh = await WolfStakingRewardsXcUtnyO.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHLWXDS = "nk6nlv7m9Ny1ohEA8zaxRgJaeGtD"
		const stringNSs8ALQ = "t1HtpUjy"
		const uintzugn0Mj = BigInt("92")
		const WolfStakingRewardsLpDo8oj = await WolfStakingRewards.new(stringHLWXDS, stringNSs8ALQ, uintzugn0Mj, {from: accounts[2]});
		const uinthmX7K7q = BigInt("734")
		const uintvR0idF3 = BigInt("237")
		const uintP1ul8kx = BigInt("1597")
		const addressg0xatFL = accounts[3]
		const uintBdGV4GY = BigInt("1033")
		const uinteSnecf = BigInt("1368")
		const addressyypJY7x = accounts[2]
		const uint256o7ClPP5 = await WolfStakingRewardsLpDo8oj.rewardPerToken.call(uinthmX7K7q, {from: accounts[1]});
		const uint256F7UPKnA = await WolfStakingRewardsLpDo8oj.getRewardForDuration.call(uintvR0idF3, {from: accounts[1]});
		const addresss6kErHW = await WolfStakingRewardsLpDo8oj.updateReward.call(addressg0xatFL, uintP1ul8kx, {from: accounts[4]});
		const uintrUjcoG4 = await WolfStakingRewardsLpDo8oj.getReward.call(uintBdGV4GY, {from: accounts[5]});
		const uint256g2ys9C3 = await WolfStakingRewardsLpDo8oj.earned.call(addressyypJY7x, uinteSnecf, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKf19Nd = "LF9r2cGtEIKzBca97XAfC7har9X1WVEnvyEvcAjWXdG95qR45vYyAVE4WlvIuhSXGOyOYx9W1eDccUK6D9GVmIh3FyQii4MFK0"
		const stringw45ggy8 = "SlA2uT4jo0pAHYhI7vbIaWW8MvKptndLqUoTp2KPA37GkTG"
		const uintA13OiL7 = BigInt("168")
		const WolfStakingRewardsX87gEBS = await WolfStakingRewards.new(stringKf19Nd, stringw45ggy8, uintA13OiL7, {from: "0x0000000000000000000000000000000000000001"});
		const uintsy58IT = BigInt("9")
		const uintOi4o6gU = BigInt("173")
		const uintvHn2diH = BigInt("281")
		const addressOcnMmhw = "0x0000000000000000000000000000000000000001"
		const uintuw7y0rK = BigInt("59")
		await WolfStakingRewardsX87gEBS.nonReentrant.call({from: accounts[2]});
		const uint256yur86SZ = await WolfStakingRewardsX87gEBS.withdraw.call(uintOi4o6gU, uintsy58IT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iZafP7I = await WolfStakingRewardsX87gEBS.earned.call(addressOcnMmhw, uintvHn2diH, {from: accounts[0]});
		const uint256MlJnuaz = await WolfStakingRewardsX87gEBS.rewardPerToken.call(uintuw7y0rK, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEWOcpF2 = "FLFpP2Sod1vR7rcsjMX1gs7O79LGYaXkaQ53rhah9gVsodlVXWVOv6hp9NVimN4rSXIXmAl2CUyAPrB08WqVcbGDC"
		const stringCWbGqX7 = "bkmYhcd4UHmPlNAl5j1ZtboOerJHi"
		const uintnJqX1Ta = BigInt("60")
		const WolfStakingRewardsdDrNfDU = await WolfStakingRewards.new(stringEWOcpF2, stringCWbGqX7, uintnJqX1Ta, {from: accounts[1]});
		const uintVHMrRTz = BigInt("1471")
		const uint256WZLdGYV = await WolfStakingRewardsdDrNfDU.lastTimeRewardApplicable.call(uintVHMrRTz, {from: accounts[0]});
		await WolfStakingRewardsdDrNfDU.onlyRewardsDistribution.call({from: accounts[5]});
	});
})