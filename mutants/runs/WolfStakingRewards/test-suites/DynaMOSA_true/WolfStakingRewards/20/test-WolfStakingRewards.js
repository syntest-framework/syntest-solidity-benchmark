const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringZRwIwiD = "wt8Ito7bc4eJObPRjNDRJXbqqF1sJbzlnlxDG1h65LFd2vv3dX8fUNPIQ"
		const stringHHjiORG = "ylXVMSr4s46CjcKqHD52SQTpizLEg91IcphaarTgHt4kB2Deawk4mA3aXvfkt0kiHE6vRyrL"
		const uintLohMLG6 = BigInt("244")
		const WolfStakingRewardsUTneAAX = await WolfStakingRewards.new(stringZRwIwiD, stringHHjiORG, uintLohMLG6, {from: accounts[0]});
		const uintjzOXXRC = BigInt("1815")
		const uintaFjL7n8 = BigInt("1321")
		const uint256x0TVBCq = await WolfStakingRewardsUTneAAX.withdraw.call(uintaFjL7n8, uintjzOXXRC, {from: accounts[5]});
		const uint8JFqd5Vt = await WolfStakingRewardsUTneAAX.decimals.call({from: accounts[0]});
		await WolfStakingRewardsUTneAAX.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressnyfh2hI = accounts[4]
		const addressi6dVNy = accounts[1]
		const addressun1OLQh = accounts[1]
		const WolfStakingRewardsgiSZyL6 = await WolfStakingRewards.new(addressnyfh2hI, addressi6dVNy, addressun1OLQh, {from: accounts[2]});
		const uintxcjtr84 = BigInt("484")
		const addressjyljFml = accounts[4]
		const uintwscZcHz = BigInt("642")
		const uintYgjb5Kk = BigInt("1039")
		const addressmo2ixAs = await WolfStakingRewardsgiSZyL6.updateReward.call(addressjyljFml, uintxcjtr84, {from: accounts[4]});
		const uint256Qz0Rang = await WolfStakingRewardsgiSZyL6.withdrawRemainingBalance.call(uintYgjb5Kk, uintwscZcHz, {from: accounts[5]});

		await expect(WolfStakingRewardsgiSZyL6.updateReward.call(addressjyljFml, uintxcjtr84, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressNHILO0k = accounts[0]
		const addressCRgcPe3 = accounts[4]
		const addressgIu9isk = accounts[4]
		const WolfStakingRewardslhTNAME = await WolfStakingRewards.new(addressNHILO0k, addressCRgcPe3, addressgIu9isk, {from: accounts[4]});
		const uintILD9qPr = BigInt("492")
		const uintlBMzYDu = BigInt("362")
		const uintlZFidX8 = BigInt("1070")
		const addressbNNYB2F = accounts[4]
		const uint256FF2CQn1 = await WolfStakingRewardslhTNAME.withdrawRemainingBalance.call(uintlBMzYDu, uintILD9qPr, {from: accounts[4]});
		const uint256xmRRXQo = await WolfStakingRewardslhTNAME.earned.call(addressbNNYB2F, uintlZFidX8, {from: accounts[3]});
		const stringfgdNqZ9 = await WolfStakingRewardslhTNAME.symbol.call({from: accounts[5]});

		await expect(WolfStakingRewardslhTNAME.withdrawRemainingBalance.call(uintlBMzYDu, uintILD9qPr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringMtih3fA = "eUlwDYUBQY1VljmF6du8rT"
		const stringsarnDn = "JiIO2K8tyUlgvJgOoXfFg4VAR6Gsg7IdtVcM0P"
		const uintDY11MSv = BigInt("144")
		const WolfStakingRewardsOUR7l7 = await WolfStakingRewards.new(stringMtih3fA, stringsarnDn, uintDY11MSv, {from: accounts[4]});
		const uintMO5YzH = BigInt("135")
		const uintZd4r2ky = BigInt("644")
		const uintyUj5MJE = BigInt("2004")
		const uintNhf6jws = BigInt("1531")
		await WolfStakingRewardsOUR7l7.onlyOwner.call({from: accounts[2]});
		const uint256Hrcey3m = await WolfStakingRewardsOUR7l7.getRewardForDuration.call(uintMO5YzH, {from: accounts[4]});
		await WolfStakingRewardsOUR7l7.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256B7RHDf = await WolfStakingRewardsOUR7l7.withdrawRemainingBalance.call(uintyUj5MJE, uintZd4r2ky, {from: accounts[5]});
		const uint7Xmlo1 = await WolfStakingRewardsOUR7l7.getReward.call(uintNhf6jws, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressl4SVqKk = accounts[3]
		const addressXSH6Mu = accounts[4]
		const addressiffEiDS = accounts[5]
		const WolfStakingRewardsHkHtTfm = await WolfStakingRewards.new(addressl4SVqKk, addressXSH6Mu, addressiffEiDS, {from: accounts[4]});
		const uintZdpqbU6 = BigInt("758")
		const uintDrpoXfz = BigInt("1771")
		const uintYIuHCTo = BigInt("750")
		const uint256pWcxUzi = await WolfStakingRewardsHkHtTfm.getRewardForDuration.call(uintZdpqbU6, {from: accounts[0]});
		const uint256AxyYhks = await WolfStakingRewardsHkHtTfm.withdraw.call(uintYIuHCTo, uintDrpoXfz, {from: accounts[1]});
		await WolfStakingRewardsHkHtTfm.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsHkHtTfm.getRewardForDuration.call(uintZdpqbU6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringGpSM4Tm = "ArW51RUW1YUSZ3Z2JNSdE3KKdtrnsjP3DSLdUaFBYPeE1"
		const stringN6tEKVp = "5o2ZY8651ejAmRPWYjaBm7dGJF7repbbXOuJ4sYc1dP9Lmb74YRlrr4F6vJh1pk71LGWw1UonOGExWnd1BaaPM1hi"
		const uintdgODePJ = BigInt("135")
		const WolfStakingRewardsK5Htd5E = await WolfStakingRewards.new(stringGpSM4Tm, stringN6tEKVp, uintdgODePJ, {from: accounts[3]});
		const uintGiSyF9n = BigInt("1299")
		const addresssZMxf68 = accounts[3]
		const uint94YiiB = BigInt("1293")
		const uintGqvHvyG = BigInt("14")
		const uint8kUJzXH = await WolfStakingRewardsK5Htd5E.decimals.call({from: accounts[3]});
		const uint256yNGfxOE = await WolfStakingRewardsK5Htd5E.balanceOfPerPool.call(addresssZMxf68, uintGiSyF9n, {from: accounts[2]});
		const stringAB4hKQK = await WolfStakingRewardsK5Htd5E.symbol.call({from: accounts[2]});
		const uint256ovfowFt = await WolfStakingRewardsK5Htd5E.withdrawRemainingBalance.call(uintGqvHvyG, uint94YiiB, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPxrk31 = "RbUmr4rHtI4AtC8glV6h0W3rx"
		const stringxc5AzaE = "3m1At9mQ1E4LFQ8oL"
		const uintUob3edt = BigInt("134")
		const WolfStakingRewardsd9JzoQW = await WolfStakingRewards.new(stringPxrk31, stringxc5AzaE, uintUob3edt, {from: accounts[2]});
		const uintsSNtvbY = BigInt("1464")
		const addressUiRR5qV = accounts[1]
		const uintgQWWiLQ = BigInt("599")
		const uintlJYfgiT = BigInt("245")
		const stringv9k2xGT = await WolfStakingRewardsd9JzoQW.name.call({from: accounts[3]});
		const uint256RU0m6a6 = await WolfStakingRewardsd9JzoQW.balanceOfPerPool.call(addressUiRR5qV, uintsSNtvbY, {from: accounts[5]});
		const stringt0LOjY2 = await WolfStakingRewardsd9JzoQW.name.call({from: accounts[3]});
		const uint256WubJG5r = await WolfStakingRewardsd9JzoQW.totalSupplyPerPool.call(uintgQWWiLQ, {from: accounts[4]});
		const uint256WcY5NGY = await WolfStakingRewardsd9JzoQW.getRewardForDuration.call(uintlJYfgiT, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresscu1NW9x = accounts[4]
		const addressd8V4kkn = accounts[2]
		const addressi7tg0oS = accounts[1]
		const WolfStakingRewardsLAECECR = await WolfStakingRewards.new(addresscu1NW9x, addressd8V4kkn, addressi7tg0oS, {from: accounts[1]});
		const uinthWTIaAX = BigInt("136")
		const uintiRZC7x5 = BigInt("164")
		const uint256f1Ju3eW = await WolfStakingRewardsLAECECR.withdraw.call(uintiRZC7x5, uinthWTIaAX, {from: accounts[4]});
		const stringe0ux4E = await WolfStakingRewardsLAECECR.name.call({from: accounts[1]});

		await expect(WolfStakingRewardsLAECECR.withdraw.call(uintiRZC7x5, uinthWTIaAX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresstmYZyIy = accounts[4]
		const addressgaC4qX8 = accounts[1]
		const addressQhYILkt = accounts[1]
		const WolfStakingRewardsgiSZyL6 = await WolfStakingRewards.new(addresstmYZyIy, addressgaC4qX8, addressQhYILkt, {from: accounts[2]});
		const uintkq3dX7g = BigInt("1906")
		const uintZVtpinz = BigInt("644")
		const uintU1g4xBh = BigInt("1039")
		const uintOPhISXr = await WolfStakingRewardsgiSZyL6.getReward.call(uintkq3dX7g, {from: accounts[4]});
		const uint256Qz0Rang = await WolfStakingRewardsgiSZyL6.withdrawRemainingBalance.call(uintU1g4xBh, uintZVtpinz, {from: accounts[5]});

		await expect(WolfStakingRewardsgiSZyL6.withdrawRemainingBalance.call(uintU1g4xBh, uintZVtpinz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressl498iB8 = accounts[4]
		const addressPNObmZ = accounts[2]
		const addressivBFrFK = accounts[1]
		const WolfStakingRewardsLAECECR = await WolfStakingRewards.new(addressl498iB8, addressPNObmZ, addressivBFrFK, {from: accounts[1]});
		const uintNWhHwji = BigInt("136")
		const uints15bb3O = BigInt("164")
		const uintJwbcoHk = BigInt("2045")
		const uintCstdWAd = BigInt("632")
		const uint256f1Ju3eW = await WolfStakingRewardsLAECECR.withdraw.call(uints15bb3O, uintNWhHwji, {from: accounts[4]});
		const stringe0ux4E = await WolfStakingRewardsLAECECR.name.call({from: accounts[1]});
		const uint256HiKX5gi = await WolfStakingRewardsLAECECR.stake.call(uintCstdWAd, uintJwbcoHk, {from: accounts[4]});

		await expect(WolfStakingRewardsLAECECR.withdraw.call(uints15bb3O, uintNWhHwji, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressWXSwKop = accounts[4]
		const addressaWZXc4U = accounts[1]
		const address9NJsdv = accounts[2]
		const WolfStakingRewardsd7NYuly = await WolfStakingRewards.new(addressWXSwKop, addressaWZXc4U, address9NJsdv, {from: accounts[5]});
		const uintIvOz7Pt = BigInt("1243")
		const uintY3PB4Xy = BigInt("786")
		const uintBiUrT6c = BigInt("68")
		const uintcfDWoKc = BigInt("888")
		const uinttQlD3dA = BigInt("996")
		const uintBvrmdIk = BigInt("94")
		const uintXM0wQB9 = BigInt("666")
		const addressO6yEYFt = accounts[1]
		const uint256HewAcW6 = await WolfStakingRewardsd7NYuly.totalSupplyPerPool.call(uintIvOz7Pt, {from: accounts[4]});
		const uint2568kyhOI = await WolfStakingRewardsd7NYuly.rewardPerToken.call(uintY3PB4Xy, {from: accounts[3]});
		const uint256yNRCIIM = await WolfStakingRewardsd7NYuly.getRewardForDuration.call(uintBiUrT6c, {from: accounts[1]});
		const uint256TJOAuw4 = await WolfStakingRewardsd7NYuly.lastTimeRewardApplicable.call(uintcfDWoKc, {from: accounts[4]});
		const uint256FOLPPVJ = await WolfStakingRewardsd7NYuly.withdraw.call(uintBvrmdIk, uinttQlD3dA, {from: accounts[0]});
		const addressQeZRlOX = await WolfStakingRewardsd7NYuly.updateReward.call(addressO6yEYFt, uintXM0wQB9, {from: accounts[1]});

		assert.equal(uint2568kyhOI, BigInt("0"))
		assert.equal(uint256HewAcW6, BigInt("0"))
		await expect(WolfStakingRewardsd7NYuly.getRewardForDuration.call(uintBiUrT6c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressfZ4NVS2 = accounts[2]
		const addresspWSWMl = accounts[1]
		const addressC4DrpD = accounts[0]
		const WolfStakingRewardsAfUSIz0 = await WolfStakingRewards.new(addressfZ4NVS2, addresspWSWMl, addressC4DrpD, {from: "0x0000000000000000000000000000000000000001"});
		const uintlvxXGpa = BigInt("770")
		const addressLNF3H8U = "0x0000000000000000000000000000000000000001"
		const uintf2Vkitm = BigInt("238")
		const uint256q7RyHLP = await WolfStakingRewardsAfUSIz0.balanceOfPerPool.call(addressLNF3H8U, uintlvxXGpa, {from: accounts[0]});
		const uint256aRds2N1 = await WolfStakingRewardsAfUSIz0.exit.call(uintf2Vkitm, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressk3xrljM = accounts[4]
		const addressBovEBqE = accounts[1]
		const addressDzIIs3 = accounts[1]
		const WolfStakingRewardsgiSZyL6 = await WolfStakingRewards.new(addressk3xrljM, addressBovEBqE, addressDzIIs3, {from: accounts[2]});
		const uinttNWjKoG = BigInt("134")
		const uintUNSCJ9n = BigInt("1895")
		const uintLp1jcCp = BigInt("1855")
		const uintaBvIdei = BigInt("617")
		const uintfTraKbK = BigInt("1039")
		const uint256To4XWAe = await WolfStakingRewardsgiSZyL6.exit.call(uinttNWjKoG, {from: accounts[2]});
		const uintOPhISXr = await WolfStakingRewardsgiSZyL6.getReward.call(uintUNSCJ9n, {from: accounts[4]});
		const uint256arrayzm7K7av = await WolfStakingRewardsgiSZyL6.updateNotifyRewardAmount.call(uintLp1jcCp, {from: accounts[2]});
		const uint256Qz0Rang = await WolfStakingRewardsgiSZyL6.withdrawRemainingBalance.call(uintfTraKbK, uintaBvIdei, {from: accounts[5]});

		await expect(WolfStakingRewardsgiSZyL6.exit.call(uinttNWjKoG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressTmStP3z = accounts[4]
		const addressPSDKaQu = accounts[1]
		const addressX3wLi7g = accounts[1]
		const WolfStakingRewardsgiSZyL6 = await WolfStakingRewards.new(addressTmStP3z, addressPSDKaQu, addressX3wLi7g, {from: accounts[2]});
		const uintUJCtJct = BigInt("1517")
		const uintYHVECPe = BigInt("401")
		const uintPNntPAa = BigInt("1895")
		const uinteP98tCX = BigInt("644")
		const uintvKUkEUi = BigInt("1039")
		const uint256kA77jiQ = await WolfStakingRewardsgiSZyL6.stake.call(uintYHVECPe, uintUJCtJct, {from: accounts[1]});
		const uintOPhISXr = await WolfStakingRewardsgiSZyL6.getReward.call(uintPNntPAa, {from: accounts[4]});
		const uint256Qz0Rang = await WolfStakingRewardsgiSZyL6.withdrawRemainingBalance.call(uintvKUkEUi, uinteP98tCX, {from: accounts[5]});
		await WolfStakingRewardsgiSZyL6.nonReentrant.call({from: accounts[3]});
		const stringJQ3jRB9 = await WolfStakingRewardsgiSZyL6.name.call({from: accounts[1]});

		await expect(WolfStakingRewardsgiSZyL6.stake.call(uintYHVECPe, uintUJCtJct, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressHXiiYZj = accounts[4]
		const addresssUcCw1 = accounts[2]
		const addressY62pi07 = accounts[1]
		const WolfStakingRewardsLAECECR = await WolfStakingRewards.new(addressHXiiYZj, addresssUcCw1, addressY62pi07, {from: accounts[1]});
		const uintLj1Xves = BigInt("896")
		const uintHbn7kMh = BigInt("136")
		const uintJ8D6E5R = BigInt("65")
		const uinteWfLwPr = BigInt("1667")
		const uintBVKfvzc = BigInt("780")
		const uintl37PWn = BigInt("2003")
		const uintH4PF4Qe = BigInt("740")
		const uintSjhp0Co = await WolfStakingRewardsLAECECR.getReward.call(uintLj1Xves, {from: accounts[3]});
		const uint256f1Ju3eW = await WolfStakingRewardsLAECECR.withdraw.call(uintJ8D6E5R, uintHbn7kMh, {from: accounts[4]});
		const uint256yWJHXI9 = await WolfStakingRewardsLAECECR.rewardPerToken.call(uinteWfLwPr, {from: accounts[2]});
		const uint256TXUNyUs = await WolfStakingRewardsLAECECR.exit.call(uintBVKfvzc, {from: accounts[0]});
		const uint256KGXknvr = await WolfStakingRewardsLAECECR.stake.call(uintH4PF4Qe, uintl37PWn, {from: accounts[1]});

		await expect(WolfStakingRewardsLAECECR.withdraw.call(uintJ8D6E5R, uintHbn7kMh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressE3kvk6M = accounts[5]
		const addressQxGSUu1 = accounts[3]
		const addressHLNYpkq = accounts[1]
		const WolfStakingRewardsWFYwPiZ = await WolfStakingRewards.new(addressE3kvk6M, addressQxGSUu1, addressHLNYpkq, {from: accounts[3]});
		const uintI0iqoQw = BigInt("1580")
		const addressePbV4W = accounts[1]
		const uintyoh6A2z = BigInt("1716")
		const addresse3fqSz6 = accounts[2]
		const uintFPo0tnt = BigInt("1253")
		const uintpojW182 = BigInt("354")
		const addressDcr4KZu = accounts[0]
		const uint256AFabkLT = await WolfStakingRewardsWFYwPiZ.balanceOfPerPool.call(addressePbV4W, uintI0iqoQw, {from: accounts[0]});
		const stringiWBDNF = await WolfStakingRewardsWFYwPiZ.symbol.call({from: accounts[0]});
		const uint256TZ7JkKf = await WolfStakingRewardsWFYwPiZ.earned.call(addresse3fqSz6, uintyoh6A2z, {from: accounts[0]});
		const uint256C6h1WL9 = await WolfStakingRewardsWFYwPiZ.exit.call(uintFPo0tnt, {from: accounts[0]});
		const address0LQsHr = await WolfStakingRewardsWFYwPiZ.updateReward.call(addressDcr4KZu, uintpojW182, {from: accounts[0]});
		const stringQ3n3tT6 = await WolfStakingRewardsWFYwPiZ.symbol.call({from: accounts[4]});

		assert.equal(uint256AFabkLT, BigInt("0"))
		await expect(WolfStakingRewardsWFYwPiZ.symbol.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringNtSsxQY = "KErT3YpNszm2WMA4nE9NpszaiD4tMaPVElcLkyyK1IC5FJxOhoOHCUlZLFINwyacmb0"
		const stringhdhOLg2 = "GiVWIo3rgkcP3h38R4wM4FuTeBheJeG2BEp4Zot2rOSYb9gJlutmOO8RQ3rzDvfaX1dLoUaO2I5Ub7EA6q7bG6"
		const uintwpXVHZW = BigInt("245")
		const WolfStakingRewardsEE7Ba5J = await WolfStakingRewards.new(stringNtSsxQY, stringhdhOLg2, uintwpXVHZW, {from: accounts[3]});
		const uintVx4v0aK = BigInt("757")
		const uintPye0snH = BigInt("1655")
		const uintwu2cfwy = BigInt("842")
		const uintVVIYPvQ = BigInt("1119")
		const uint256SXtqg76 = await WolfStakingRewardsEE7Ba5J.lastTimeRewardApplicable.call(uintVx4v0aK, {from: accounts[3]});
		const stringlHrw4Vx = await WolfStakingRewardsEE7Ba5J.symbol.call({from: accounts[1]});
		await WolfStakingRewardsEE7Ba5J.onlyRewardsDistribution.call({from: accounts[3]});
		const uintUmJ2mf = await WolfStakingRewardsEE7Ba5J.getReward.call(uintPye0snH, {from: accounts[0]});
		const uint256K4K1P5M = await WolfStakingRewardsEE7Ba5J.withdrawRemainingBalance.call(uintVVIYPvQ, uintwu2cfwy, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressBCPI4zh = accounts[4]
		const addressUAHTMI9 = accounts[1]
		const addresswQHWY4q = accounts[1]
		const WolfStakingRewardsgiSZyL6 = await WolfStakingRewards.new(addressBCPI4zh, addressUAHTMI9, addresswQHWY4q, {from: accounts[2]});
		const uintqjECmBs = BigInt("1517")
		const uintX5jmCxm = BigInt("401")
		const uintxpCJpAR = BigInt("1895")
		const uintaW6F0Qt = BigInt("644")
		const uintLPwrmM4 = BigInt("1039")
		const uintyeHXVp4 = BigInt("2008")
		const uint256kA77jiQ = await WolfStakingRewardsgiSZyL6.stake.call(uintX5jmCxm, uintqjECmBs, {from: accounts[1]});
		const uintOPhISXr = await WolfStakingRewardsgiSZyL6.getReward.call(uintxpCJpAR, {from: accounts[4]});
		const uint256Qz0Rang = await WolfStakingRewardsgiSZyL6.withdrawRemainingBalance.call(uintLPwrmM4, uintaW6F0Qt, {from: accounts[5]});
		const uint256vRpTm8q = await WolfStakingRewardsgiSZyL6.rewardPerToken.call(uintyeHXVp4, {from: accounts[0]});
		await WolfStakingRewardsgiSZyL6.nonReentrant.call({from: accounts[3]});
		const stringJQ3jRB9 = await WolfStakingRewardsgiSZyL6.name.call({from: accounts[1]});

		await expect(WolfStakingRewardsgiSZyL6.stake.call(uintX5jmCxm, uintqjECmBs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringSDU5IWn = "YN8pMO1G0M3"
		const stringNg6zoE = "9sBM6vClLMRn3tXGQAOD5atltKCQ46jCX5YpU9Ha7hRfLJh2PjjX"
		const uintxYVAEcm = BigInt("166")
		const WolfStakingRewardsHwjf2zf = await WolfStakingRewards.new(stringSDU5IWn, stringNg6zoE, uintxYVAEcm, {from: accounts[2]});
		const uintxZdEVV3 = BigInt("146")
		const uintMvZdb9M = BigInt("211")
		const uint256iWTCagQ = await WolfStakingRewardsHwjf2zf.withdraw.call(uintMvZdb9M, uintxZdEVV3, {from: accounts[3]});
		await WolfStakingRewardsHwjf2zf.nonReentrant.call({from: accounts[0]});
		await WolfStakingRewardsHwjf2zf.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressAT15pg = accounts[4]
		const addressneIIST = accounts[2]
		const addressLCrH69o = accounts[1]
		const WolfStakingRewardsLAECECR = await WolfStakingRewards.new(addressAT15pg, addressneIIST, addressLCrH69o, {from: accounts[1]});
		const uintiUWPk59 = BigInt("1210")
		const uintyYrAjBj = BigInt("810")
		const uintnM3PoD = BigInt("5")
		const uintFE96Mx9 = BigInt("147")
		const uintEA2IhuL = BigInt("164")
		const uintQZeJBc8 = BigInt("265")
		const addressLT31BDZ = accounts[2]
		const uintToQmRSf = BigInt("486")
		const uint256arraycXQXyyA = await WolfStakingRewardsLAECECR.updateNotifyRewardAmount.call(uintiUWPk59, {from: accounts[4]});
		const uint256kQRFCnU = await WolfStakingRewardsLAECECR.withdraw.call(uintnM3PoD, uintyYrAjBj, {from: accounts[1]});
		const uint256f1Ju3eW = await WolfStakingRewardsLAECECR.withdraw.call(uintEA2IhuL, uintFE96Mx9, {from: accounts[4]});
		const uint256wTwLKIo = await WolfStakingRewardsLAECECR.balanceOfPerPool.call(addressLT31BDZ, uintQZeJBc8, {from: accounts[0]});
		const uint8wiQpYqr = await WolfStakingRewardsLAECECR.decimals.call({from: accounts[1]});
		const uint256KGteWNF = await WolfStakingRewardsLAECECR.getRewardForDuration.call(uintToQmRSf, {from: accounts[2]});

		await expect(WolfStakingRewardsLAECECR.updateNotifyRewardAmount.call(uintiUWPk59, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringmQ99iU1 = "DLhprO1Q2"
		const stringucbiSfM = "eP3iOlX17VubFxBaUWlhRpRn9YG0TH"
		const uintbH7Y4xF = BigInt("69")
		const WolfStakingRewardsbFjngC4 = await WolfStakingRewards.new(stringmQ99iU1, stringucbiSfM, uintbH7Y4xF, {from: accounts[4]});
		const uintLlClaz = BigInt("87")
		const uintvOJ61ng = BigInt("391")
		const uintQRU2sh = BigInt("1935")
		const uintA3TEVXW = BigInt("106")
		const uintgXK7yZT = BigInt("1310")
		const uintzoqvkQm = await WolfStakingRewardsbFjngC4.getReward.call(uintLlClaz, {from: accounts[4]});
		const uint256DNwYZ6c = await WolfStakingRewardsbFjngC4.getRewardForDuration.call(uintvOJ61ng, {from: accounts[5]});
		const uint256arrayGOXjMyL = await WolfStakingRewardsbFjngC4.updateNotifyRewardAmount.call(uintQRU2sh, {from: accounts[5]});
		const uint256gJvbMMS = await WolfStakingRewardsbFjngC4.withdrawRemainingBalance.call(uintgXK7yZT, uintA3TEVXW, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringo1TxIdl = "fJhHkYF3VUzx1iyZacFcb2hnVrIoORTi7mx2jLac3A9ZF6SE7NiqcyJ5sfWXved"
		const stringkefI1sL = "N5CTpIJRVF8rn8iP3ezWy"
		const uintzOMOF6g = BigInt("212")
		const WolfStakingRewardsLHBE2Ya = await WolfStakingRewards.new(stringo1TxIdl, stringkefI1sL, uintzOMOF6g, {from: accounts[3]});
		const uintkkbLSz = BigInt("1345")
		const uint8P0aOdnU = await WolfStakingRewardsLHBE2Ya.decimals.call({from: accounts[1]});
		const uint256aBcvi7U = await WolfStakingRewardsLHBE2Ya.rewardPerToken.call(uintkkbLSz, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressNwSbvBn = accounts[4]
		const addressLyJ6VPf = accounts[2]
		const addressrmFXpZl = accounts[1]
		const WolfStakingRewardsLAECECR = await WolfStakingRewards.new(addressNwSbvBn, addressLyJ6VPf, addressrmFXpZl, {from: accounts[1]});
		const uintp5ubzNc = BigInt("810")
		const uintF7EyyPb = BigInt("0")
		const uintwzL9ttc = BigInt("281")
		const addressQN5ztF5 = accounts[4]
		const uintKMZIknb = BigInt("641")
		const uintcsWe1y5 = BigInt("1901")
		const uintT8z05AX = BigInt("486")
		const uint256kQRFCnU = await WolfStakingRewardsLAECECR.withdraw.call(uintF7EyyPb, uintp5ubzNc, {from: accounts[1]});
		const uint256wTwLKIo = await WolfStakingRewardsLAECECR.balanceOfPerPool.call(addressQN5ztF5, uintwzL9ttc, {from: accounts[0]});
		const uint256W9jMqUO = await WolfStakingRewardsLAECECR.exit.call(uintKMZIknb, {from: accounts[0]});
		const uint256wxZMyBE = await WolfStakingRewardsLAECECR.totalSupplyPerPool.call(uintcsWe1y5, {from: accounts[3]});
		const uint256KGteWNF = await WolfStakingRewardsLAECECR.getRewardForDuration.call(uintT8z05AX, {from: accounts[2]});

		await expect(WolfStakingRewardsLAECECR.withdraw.call(uintF7EyyPb, uintp5ubzNc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringHxLVuW5 = "UWGlka6KJnrIJLRvKGAFPsXXEb8lwBV7Es20HQIDfM14GD4YxuWeitwS4sJzXqTKVuI4x4FljiaAe"
		const stringEfQr2xj = "Mr9okfv8ntOXe6M6JOo91"
		const uint5r5VQt = BigInt("120")
		const WolfStakingRewardsvczXfpW = await WolfStakingRewards.new(stringHxLVuW5, stringEfQr2xj, uint5r5VQt, {from: accounts[4]});
		const uintPMTWqNl = BigInt("242")
		const uintEEtPzOw = BigInt("1302")
		const addresscYRVW5N = accounts[4]
		const uint256Ym6ifN9 = await WolfStakingRewardsvczXfpW.rewardPerToken.call(uintPMTWqNl, {from: accounts[4]});
		const uint256QM0ghsO = await WolfStakingRewardsvczXfpW.balanceOfPerPool.call(addresscYRVW5N, uintEEtPzOw, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfG24n4s = "rHjgQZFbfUn58BjoSGt1iDD2hztWWfybstSDFGHw4GCARNeds2ey"
		const stringlaKCV8x = "z9dxg4AjNIihvLiSk4WLQW2tSEP3Edtrxw5EoQX85oh6Ar56XUcOGeWND85KM9XcL7dRGekBpd59bWKAVFT0PUB"
		const uintz03Qp0P = BigInt("48")
		const WolfStakingRewardsKMtYT3B = await WolfStakingRewards.new(stringfG24n4s, stringlaKCV8x, uintz03Qp0P, {from: accounts[2]});
		const uintHTtlXZ7 = BigInt("1051")
		const uintF6BFV1e = BigInt("1683")
		const uint8Jxwj30D = await WolfStakingRewardsKMtYT3B.decimals.call({from: accounts[4]});
		const uint256FXIy5wu = await WolfStakingRewardsKMtYT3B.lastTimeRewardApplicable.call(uintHTtlXZ7, {from: accounts[3]});
		const uint256hu20lUe = await WolfStakingRewardsKMtYT3B.rewardPerToken.call(uintF6BFV1e, {from: accounts[2]});
		await WolfStakingRewardsKMtYT3B.onlyOwner.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringevgCJAU = "AbAoVT9MxFFv9uuJ5cTnEdkxDYxEGaqIiKbHXqwl1fla9KyIYDYgfkiXFnRxSBcF5nWmfSrFVwb4UUD"
		const stringVMpK2o = "gFQ4uAumWTbtKPkAcpAnzODyFWA4PiuRbE"
		const uintsCaDYQE = BigInt("212")
		const WolfStakingRewardsAKqvwW9 = await WolfStakingRewards.new(stringevgCJAU, stringVMpK2o, uintsCaDYQE, {from: accounts[2]});
		const uints0Wi6en = BigInt("1887")
		const uint256YH3IJr = await WolfStakingRewardsAKqvwW9.exit.call(uints0Wi6en, {from: accounts[3]});
		await WolfStakingRewardsAKqvwW9.onlyOwner.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTeGiXw = "bbs26FDpOyGAboec9YcmxYUt2cAMY5bjndY"
		const stringi8LAUfV = "GCthj54yNfO7LlCqWcoxkJNAkXq2EhIWN1VPPqj"
		const uintePD5W1Y = BigInt("126")
		const WolfStakingRewardszimJiA = await WolfStakingRewards.new(stringTeGiXw, stringi8LAUfV, uintePD5W1Y, {from: accounts[4]});
		const uintRT6mCLA = BigInt("955")
		const addressH3H7fxO = accounts[3]
		const uinttIOFTrT = BigInt("873")
		const uintxbKG3X8 = BigInt("83")
		const addressUCi4zL5 = accounts[3]
		const uint8Ihy39iX = await WolfStakingRewardszimJiA.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256T719jzQ = await WolfStakingRewardszimJiA.balanceOfPerPool.call(addressH3H7fxO, uintRT6mCLA, {from: accounts[5]});
		const uint256RLPmhb = await WolfStakingRewardszimJiA.rewardPerToken.call(uinttIOFTrT, {from: "0x0000000000000000000000000000000000000001"});
		const addressE370rEK = await WolfStakingRewardszimJiA.updateReward.call(addressUCi4zL5, uintxbKG3X8, {from: accounts[1]});
		await WolfStakingRewardszimJiA.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhUOw78C = "Ckm488wQjsLBm4xjAAHRyJg9vM4phC9KwTXNNV7dvLP4kyBjIx6hoItPkI9lwIbp"
		const stringCpi4a6d = "TFB9RbKfCnGfoDLEnRjDfg3feGy4ER4B7Co9tDwENiYw8Pyl2fWhTt0kP"
		const uinta1cGAYt = BigInt("126")
		const WolfStakingRewardsIwa7L7N = await WolfStakingRewards.new(stringhUOw78C, stringCpi4a6d, uinta1cGAYt, {from: accounts[1]});
		const uintZVPWZMZ = BigInt("680")
		const addressVO4JEuw = accounts[4]
		const uintNHVlEoD = BigInt("1601")
		const uintlf0WFK7 = BigInt("1449")
		const uintPTJ1Yw = BigInt("189")
		const uintlBJm1NO = BigInt("992")
		await WolfStakingRewardsIwa7L7N.nonReentrant.call({from: accounts[3]});
		await WolfStakingRewardsIwa7L7N.nonReentrant.call({from: accounts[0]});
		const uint256u0o6mXN = await WolfStakingRewardsIwa7L7N.earned.call(addressVO4JEuw, uintZVPWZMZ, {from: accounts[4]});
		const uintv5Mvrn1 = await WolfStakingRewardsIwa7L7N.getReward.call(uintNHVlEoD, {from: accounts[3]});
		const uint256xFAPOCo = await WolfStakingRewardsIwa7L7N.rewardPerToken.call(uintlf0WFK7, {from: accounts[2]});
		const uint256xikkJ6J = await WolfStakingRewardsIwa7L7N.withdrawRemainingBalance.call(uintlBJm1NO, uintPTJ1Yw, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringds3a6lE = "UUAFYUcRDkhVnh9giDNevMKgBGFcNKY"
		const stringN6W8eWe = "ETgll2PUC1fq"
		const uintHenKYzT = BigInt("45")
		const WolfStakingRewardsSQzkuT = await WolfStakingRewards.new(stringds3a6lE, stringN6W8eWe, uintHenKYzT, {from: accounts[4]});
		const uintrWIASIG = BigInt("1271")
		const uintRxc48aw = BigInt("728")
		const uintQpfC4rW = BigInt("1424")
		const uint256W9ALHSO = await WolfStakingRewardsSQzkuT.withdrawRemainingBalance.call(uintRxc48aw, uintrWIASIG, {from: accounts[0]});
		const uint256arrayAWiCQcO = await WolfStakingRewardsSQzkuT.updateNotifyRewardAmount.call(uintQpfC4rW, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringl3cNat = "aht4B7whyzv44czFeWK2sii0quJTzkkVjaR2nOntfo6D5DGqrUl2496k0s7xfIUyG3G4eb33lWWayzbHRiNzXUSO55bY"
		const stringKlCPvsd = "EGGZOX5Oh9b4VZhkfIlg"
		const uintSeezHUW = BigInt("195")
		const WolfStakingRewardsOqw9b8y = await WolfStakingRewards.new(stringl3cNat, stringKlCPvsd, uintSeezHUW, {from: accounts[5]});
		const uintxFPwPgz = BigInt("2020")
		const address7rEAj9 = accounts[2]
		const uintMJ5vvSB = BigInt("842")
		const addressFO9r3SA = accounts[2]
		const uintoTBE4G = BigInt("1878")
		const addressMOwoqbE = accounts[2]
		const uintB7vo4h4 = BigInt("570")
		const addresssT1BtVH = accounts[4]
		const addressqTPru7j = await WolfStakingRewardsOqw9b8y.updateReward.call(address7rEAj9, uintxFPwPgz, {from: accounts[3]});
		const stringHJg3qxr = await WolfStakingRewardsOqw9b8y.symbol.call({from: accounts[2]});
		const address4CTGvr = await WolfStakingRewardsOqw9b8y.updateReward.call(addressFO9r3SA, uintMJ5vvSB, {from: accounts[3]});
		const uint256Kgbktb = await WolfStakingRewardsOqw9b8y.earned.call(addressMOwoqbE, uintoTBE4G, {from: accounts[1]});
		const uint256RHnE1jw = await WolfStakingRewardsOqw9b8y.balanceOfPerPool.call(addresssT1BtVH, uintB7vo4h4, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringm3zkBIQ = "afkkOapdTYiL9IB1aJeGr0EjQN5QMPR4JOJCzhVE7eB4BQr5xqSmXwpeVIM3gbAyUBzzmV"
		const stringvWx5K6 = "q7FZSMuNuhxVYzWB2M7GUhJxU2bf9fwCSBGAk4Osw3hDIvN8Glmyez"
		const uintLN6zO0w = BigInt("160")
		const WolfStakingRewardsX0wMzpj = await WolfStakingRewards.new(stringm3zkBIQ, stringvWx5K6, uintLN6zO0w, {from: accounts[3]});
		const uintgoomyAN = BigInt("847")
		const addressWfujpIN = accounts[5]
		await WolfStakingRewardsX0wMzpj.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256lQotOGN = await WolfStakingRewardsX0wMzpj.balanceOfPerPool.call(addressWfujpIN, uintgoomyAN, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsX0wMzpj.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNo2WPME = "URzyWXmDiXnfFE9DKofhc41jl3kBl89"
		const stringOOhzJqa = "j"
		const uinttQKgxyl = BigInt("164")
		const WolfStakingRewardskNN1rEs = await WolfStakingRewards.new(stringNo2WPME, stringOOhzJqa, uinttQKgxyl, {from: accounts[3]});
		const uint4wBoKL = BigInt("1802")
		const uintboBTJNv = BigInt("1364")
		const uinteUWmcLE = BigInt("956")
		const uint256kuEmAHI = await WolfStakingRewardskNN1rEs.lastTimeRewardApplicable.call(uint4wBoKL, {from: accounts[1]});
		const uint256kODkFJa = await WolfStakingRewardskNN1rEs.stake.call(uinteUWmcLE, uintboBTJNv, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const string0kSAom = "xZUDQLjmgySy0m5TGUXWncODjpvBFBIn"
		const stringzTgCyrK = "YZPaK4YDgejBzKztdsr2G9uvYrmO"
		const uintvSUCcOY = BigInt("211")
		const WolfStakingRewardsGo1rKwx = await WolfStakingRewards.new(string0kSAom, stringzTgCyrK, uintvSUCcOY, {from: accounts[2]});
		const uintan2U2gN = BigInt("409")
		const addressfy8QhXo = accounts[0]
		const uintBujSJOs = BigInt("532")
		const uint256WaANsS2 = await WolfStakingRewardsGo1rKwx.earned.call(addressfy8QhXo, uintan2U2gN, {from: accounts[1]});
		const uintSE83DKK = await WolfStakingRewardsGo1rKwx.getReward.call(uintBujSJOs, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIlhYZLD = "MO2egSqO6aUA1AMyl1xHI1JP9HK2GNLDQe8acIQ8QAEF2gNYW3gltkgvh1N53uMVAiKnBKcDp8DFztcAnCAQ5A1RSeatp"
		const stringOepfEQD = "2T1yCnch6JlsacdfEeOAkBD6tLBW8SbnwcbbxfBCS1YBqQZ4uxaOiLY8fBzFV0MJlYtsUz154AAY25Nw3ZS"
		const uintyQo7Ejj = BigInt("11")
		const WolfStakingRewardsNQ0M34V = await WolfStakingRewards.new(stringIlhYZLD, stringOepfEQD, uintyQo7Ejj, {from: accounts[1]});
		const uintAI3Br0d = BigInt("1888")
		await WolfStakingRewardsNQ0M34V.onlyRewardsDistribution.call({from: accounts[2]});
		const uintTDIqaAy = await WolfStakingRewardsNQ0M34V.getReward.call(uintAI3Br0d, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxyhNXjc = "5FSGJ0u43zgw4jxAHvVIvoXtK4XIamsUw1BfPn6Cg7N3Pv7a6lzSDySqROEaAhduKY9cixQlyhnTXSYZ"
		const stringf2QkVeY = "MN7Wdbi60P2HhNE54pGCjNLbogvXv8AtIq04yBLPxCrSvSwHrZoen9UBDqb70Yo47hKjiLkeM"
		const uintH7eashZ = BigInt("228")
		const WolfStakingRewardscofmWpJ = await WolfStakingRewards.new(stringxyhNXjc, stringf2QkVeY, uintH7eashZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintC47mOtu = BigInt("1994")
		const addresskKFxDTT = accounts[2]
		const uintNEviW3q = BigInt("371")
		const uintdH1qWhe = BigInt("1187")
		const uintN9wGzc4 = BigInt("677")
		const uintiEHGI21 = BigInt("1793")
		const addressEa56o29 = await WolfStakingRewardscofmWpJ.updateReward.call(addresskKFxDTT, uintC47mOtu, {from: "0x0000000000000000000000000000000000000001"});
		const uint2561yjZPz = await WolfStakingRewardscofmWpJ.stake.call(uintdH1qWhe, uintNEviW3q, {from: accounts[3]});
		const uint256pfmIUI = await WolfStakingRewardscofmWpJ.withdrawRemainingBalance.call(uintiEHGI21, uintN9wGzc4, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUheBbyY = "NdT71KLWVczqsbIFVN1kHlvpx8xkpGZW2awGyuxbGRdo1hgDXv1wAE"
		const stringQBcbwH7 = "1WR4lNw2VcRFfVxIxfMIKknOreP9"
		const uintsytDeUh = BigInt("135")
		const WolfStakingRewardsuo1kDuZ = await WolfStakingRewards.new(stringUheBbyY, stringQBcbwH7, uintsytDeUh, {from: accounts[2]});
		const uintRc0BjeF = BigInt("607")
		const uintCunSXMJ = BigInt("995")
		const uintLlBnJwV = BigInt("1586")
		const addressdJIpTig = accounts[2]
		const uintus3Vmaq = BigInt("1942")
		const uint256YqIUZ5c = await WolfStakingRewardsuo1kDuZ.stake.call(uintCunSXMJ, uintRc0BjeF, {from: accounts[3]});
		await WolfStakingRewardsuo1kDuZ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wFsMAot = await WolfStakingRewardsuo1kDuZ.balanceOfPerPool.call(addressdJIpTig, uintLlBnJwV, {from: accounts[2]});
		const uint256Q9NYyxg = await WolfStakingRewardsuo1kDuZ.exit.call(uintus3Vmaq, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringf4W6GxQ = "CH2W6xFvbcMGrwT0XFJEgeQDCUjSSwM9OjCC2QrckzRjEqjFfDbQYHMYO66WMPNF2RMkXHbKk"
		const stringDcAPSFC = "7ru3pzWbjPakgp3tdBKbqC9SpvUm4LWjp1FLwWELEUOfkBhbdPWojmZ7ySC6XlJ6R34qKLOBEkMWGW"
		const uintR44RUyV = BigInt("11")
		const WolfStakingRewards68z9Bc = await WolfStakingRewards.new(stringf4W6GxQ, stringDcAPSFC, uintR44RUyV, {from: accounts[3]});
		const uintsEgjleB = BigInt("340")
		const uintwhzjLb = BigInt("1436")
		const uintA1XyAFg = BigInt("829")
		const addressUYwHC88 = accounts[3]
		const uinthAsI8FX = BigInt("1150")
		const uintnnxmAR0 = BigInt("1620")
		const uintEYQl7jr = BigInt("288")
		const uint256O48dYIn = await WolfStakingRewards68z9Bc.stake.call(uintwhzjLb, uintsEgjleB, {from: accounts[4]});
		const uint256yLMrb5o = await WolfStakingRewards68z9Bc.balanceOfPerPool.call(addressUYwHC88, uintA1XyAFg, {from: accounts[0]});
		const uint256arrayHB20jst = await WolfStakingRewards68z9Bc.updateNotifyRewardAmount.call(uinthAsI8FX, {from: accounts[0]});
		const uint256A9HSYrN = await WolfStakingRewards68z9Bc.lastTimeRewardApplicable.call(uintnnxmAR0, {from: accounts[0]});
		const uint256THXfQUy = await WolfStakingRewards68z9Bc.totalSupplyPerPool.call(uintEYQl7jr, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpOATQiz = "i31UUY7d6iHTQaQXxgtLVhuHyJirWY7Rd4UEMzF3vUloWd7YDrBpm28SE1"
		const stringLfK3sDT = "edRzGsZLy"
		const uintbYf1We = BigInt("155")
		const WolfStakingRewardsSxOhWsX = await WolfStakingRewards.new(stringpOATQiz, stringLfK3sDT, uintbYf1We, {from: accounts[4]});
		const uintqxQrCjE = BigInt("1940")
		const uinte5lXXtN = BigInt("253")
		const uintfmxxSPi = BigInt("1991")
		const uintVkt1mkM = BigInt("527")
		const uint256HxtNSic = await WolfStakingRewardsSxOhWsX.totalSupplyPerPool.call(uintqxQrCjE, {from: accounts[2]});
		const uint256jMnqwhB = await WolfStakingRewardsSxOhWsX.totalSupplyPerPool.call(uinte5lXXtN, {from: accounts[2]});
		const uint256hq9yzKn = await WolfStakingRewardsSxOhWsX.stake.call(uintVkt1mkM, uintfmxxSPi, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcpf3DJ = "UV2ibq6iur1TcdaFjsOeeNPtbZFialQcd"
		const stringuMkDSDj = "9bMzNaHyztdxEyKv7TMX9UZ5TQJSInwj9t6LWjB3X5rwihxFrzKrfO7XZHagDzRzPFvjds1iqLjKFYXd"
		const uintNiNosZo = BigInt("82")
		const WolfStakingRewardsBshWq9G = await WolfStakingRewards.new(stringcpf3DJ, stringuMkDSDj, uintNiNosZo, {from: accounts[2]});
		const uintY7gOnKD = BigInt("1455")
		const uintyCZFqxZ = BigInt("1588")
		const uintUzjY93Y = BigInt("1296")
		const uint256xJMJTrs = await WolfStakingRewardsBshWq9G.rewardPerToken.call(uintY7gOnKD, {from: accounts[0]});
		const uint256Cdq70B0 = await WolfStakingRewardsBshWq9G.withdraw.call(uintUzjY93Y, uintyCZFqxZ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringw4YHfUR = "fy32qjYw2c28OOMcVAw"
		const stringM1Vi1Oi = "YhmszVrQ4zn8MlX7ntJYD8KyxOf7"
		const uintZUuO4QU = BigInt("220")
		const WolfStakingRewardssM2lkJ = await WolfStakingRewards.new(stringw4YHfUR, stringM1Vi1Oi, uintZUuO4QU, {from: accounts[1]});
		const uintU46H8m9 = BigInt("339")
		const uintnGSAMYJ = BigInt("1542")
		const uintigATNZB = BigInt("1075")
		const addressRwczcOg = accounts[3]
		const uintv15wKvf = BigInt("875")
		const uint256CyIQ2Rc = await WolfStakingRewardssM2lkJ.totalSupplyPerPool.call(uintU46H8m9, {from: accounts[1]});
		const uint256UyzD0Gb = await WolfStakingRewardssM2lkJ.rewardPerToken.call(uintnGSAMYJ, {from: accounts[2]});
		const uint8jWhmbf = await WolfStakingRewardssM2lkJ.decimals.call({from: accounts[4]});
		const uint8RZXo2Ae = await WolfStakingRewardssM2lkJ.decimals.call({from: accounts[2]});
		const uint256nNR5Zny = await WolfStakingRewardssM2lkJ.earned.call(addressRwczcOg, uintigATNZB, {from: accounts[1]});
		const uint256Nv4Hp0g = await WolfStakingRewardssM2lkJ.totalSupplyPerPool.call(uintv15wKvf, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzAAVNFV = "PxlfHksVqSnQlunEwEhiE3J"
		const stringBeTNiLS = "iViJMGqkcWmrce53w43vGK"
		const uintOqANc9z = BigInt("236")
		const WolfStakingRewardsD3HxbsC = await WolfStakingRewards.new(stringzAAVNFV, stringBeTNiLS, uintOqANc9z, {from: accounts[0]});
		const uintd5fseyI = BigInt("508")
		const uintoPQaPJ8 = BigInt("1537")
		const uint256LIDtSct = await WolfStakingRewardsD3HxbsC.exit.call(uintd5fseyI, {from: accounts[1]});
		const stringTPEaliv = await WolfStakingRewardsD3HxbsC.name.call({from: accounts[2]});
		const uint256FffyRuU = await WolfStakingRewardsD3HxbsC.getRewardForDuration.call(uintoPQaPJ8, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUON36dX = "SOiti"
		const stringYAAyDe6 = "ijAYeCqkpgaHQbufL3Nadswp2MJ7yUk2WTuTYVrn"
		const uintKQVuYs7 = BigInt("246")
		const WolfStakingRewardsaMCKBSL = await WolfStakingRewards.new(stringUON36dX, stringYAAyDe6, uintKQVuYs7, {from: accounts[4]});
		const uintZNbW6aS = BigInt("1344")
		const addressSm6hTTC = accounts[3]
		const uintmiEIwY = BigInt("1581")
		const uintwMNyGka = BigInt("1743")
		const uintqWNRydR = BigInt("1905")
		const uint256L6nXThW = await WolfStakingRewardsaMCKBSL.earned.call(addressSm6hTTC, uintZNbW6aS, {from: accounts[1]});
		await WolfStakingRewardsaMCKBSL.nonReentrant.call({from: accounts[3]});
		const uint256JVjcC8X = await WolfStakingRewardsaMCKBSL.exit.call(uintmiEIwY, {from: accounts[5]});
		const uint256Ahu7AV = await WolfStakingRewardsaMCKBSL.exit.call(uintwMNyGka, {from: accounts[1]});
		const uint256iWMXVFn = await WolfStakingRewardsaMCKBSL.exit.call(uintqWNRydR, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringovrBSde = "RF4g51HSmWMpoRZtcw3i"
		const string3JGhwP = "xEzdt19NgqAnxF19uogaRm3RnmsJCTLsTadnj3D5UiLSxBQZmOA28HIZF4iunbRP9"
		const uintCyZidId = BigInt("103")
		const WolfStakingRewardsmT6NEu = await WolfStakingRewards.new(stringovrBSde, string3JGhwP, uintCyZidId, {from: accounts[4]});
		const uintgjnUULr = BigInt("1006")
		const uintd6tpIjO = BigInt("1819")
		const uintNV1LBkP = BigInt("781")
		const uintakoVqgK = BigInt("1265")
		const uintmA0meQ3 = BigInt("495")
		const uintiaFZxCO = BigInt("1298")
		const addressgulx9fF = accounts[3]
		const uint256j7JOyvj = await WolfStakingRewardsmT6NEu.totalSupplyPerPool.call(uintgjnUULr, {from: accounts[0]});
		const uinty88Sl4 = await WolfStakingRewardsmT6NEu.getReward.call(uintd6tpIjO, {from: accounts[0]});
		const uint256arraytY5G2To = await WolfStakingRewardsmT6NEu.updateNotifyRewardAmount.call(uintNV1LBkP, {from: accounts[3]});
		const uint256driSgfL = await WolfStakingRewardsmT6NEu.lastTimeRewardApplicable.call(uintakoVqgK, {from: accounts[0]});
		const uintWAIt1uP = await WolfStakingRewardsmT6NEu.getReward.call(uintmA0meQ3, {from: accounts[4]});
		const uint256v4Z7Gn3 = await WolfStakingRewardsmT6NEu.earned.call(addressgulx9fF, uintiaFZxCO, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZNunIRm = "3wBjeVzqGl7fRC5o15wafa8u2l"
		const stringYhR2A8S = "Tg8kfaqyyejU4VgnbGTiHXyOjKVt1S35cbdwrRhEtWit0Hz4fj748wlU6Fo"
		const uintmiSDgsA = BigInt("169")
		const WolfStakingRewards3y39GN = await WolfStakingRewards.new(stringZNunIRm, stringYhR2A8S, uintmiSDgsA, {from: accounts[1]});
		const uintF3Qq1SR = BigInt("1323")
		const addressSqBRabI = accounts[1]
		const uintQAzFKWo = BigInt("508")
		const uintgqmmeaf = BigInt("670")
		const uintsfEnAQ = BigInt("1501")
		const uint256pNwKvI = await WolfStakingRewards3y39GN.earned.call(addressSqBRabI, uintF3Qq1SR, {from: accounts[0]});
		const uint256UgVX2q2 = await WolfStakingRewards3y39GN.withdraw.call(uintgqmmeaf, uintQAzFKWo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kPEG02 = await WolfStakingRewards3y39GN.getRewardForDuration.call(uintsfEnAQ, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYaufNrR = "kjzezEeYvlYO28NkV9qrppdvZ8hV1KR6bSkCTjgN4FMs4pzfMa49sH6RIunwLKGQFD"
		const stringAGNC8C = "3Tlqdw2LgdF7TMjtnbgpdVvEKIURF6UyVmE1glcOb5ajKEZFABuzqom8HDxyhwsg8ddwaG6r5TLkjl5KM"
		const uintgnxOQjf = BigInt("100")
		const WolfStakingRewardsymINK3x = await WolfStakingRewards.new(stringYaufNrR, stringAGNC8C, uintgnxOQjf, {from: accounts[0]});
		const uintsxulCm0 = BigInt("289")
		const uintr1gL2EN = BigInt("1600")
		const uintwoqckNj = BigInt("1611")
		const addressXhIh2Qk = accounts[0]
		const uintorx1CWc = BigInt("1470")
		const uintKi3oy3k = BigInt("1346")
		const addressOBkkYPG = accounts[2]
		const uintryUjDJW = BigInt("231")
		const addressCm90KU4 = accounts[5]
		const uintq4Cm8Ok = BigInt("1797")
		const uint256CM4skS2 = await WolfStakingRewardsymINK3x.stake.call(uintr1gL2EN, uintsxulCm0, {from: accounts[2]});
		const addressw9MDZNo = await WolfStakingRewardsymINK3x.updateReward.call(addressXhIh2Qk, uintwoqckNj, {from: accounts[1]});
		const uint256HypDQNZ = await WolfStakingRewardsymINK3x.exit.call(uintorx1CWc, {from: accounts[1]});
		const addressbOasoZ9 = await WolfStakingRewardsymINK3x.updateReward.call(addressOBkkYPG, uintKi3oy3k, {from: accounts[4]});
		const uint256Ex5X6ve = await WolfStakingRewardsymINK3x.earned.call(addressCm90KU4, uintryUjDJW, {from: accounts[4]});
		const uint256eDLoqX1 = await WolfStakingRewardsymINK3x.exit.call(uintq4Cm8Ok, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAFUmt78 = "fyPSF1J7Ww0i8BpFPZgHtcyII9PlnJWLhu1oHQQWhzGaaEQTKBfvwjgBKlF7tvC"
		const stringmwnPjSr = "3jautr3JrHDAWJQ82qVYDctPYv1fpHOb4f1"
		const uintOjSrzPD = BigInt("222")
		const WolfStakingRewardsW5kaviW = await WolfStakingRewards.new(stringAFUmt78, stringmwnPjSr, uintOjSrzPD, {from: "0x0000000000000000000000000000000000000001"});
		const uint586kQJ = BigInt("2020")
		const addressNSf8WLN = accounts[1]
		const uintrt9LxTW = BigInt("1453")
		const addressAcGSHdp = "0x0000000000000000000000000000000000000001"
		const uintXfF4Mw = BigInt("1565")
		const uintgUWgnOY = BigInt("80")
		const uintiQC72Sd = BigInt("1270")
		const uintThDhh89 = BigInt("809")
		const uintW9Zf4Ea = BigInt("1594")
		const uint25638HDQq = await WolfStakingRewardsW5kaviW.balanceOfPerPool.call(addressNSf8WLN, uint586kQJ, {from: accounts[1]});
		const addressNQknhqV = await WolfStakingRewardsW5kaviW.updateReward.call(addressAcGSHdp, uintrt9LxTW, {from: accounts[5]});
		const uintUiqKMlL = await WolfStakingRewardsW5kaviW.getReward.call(uintXfF4Mw, {from: accounts[3]});
		const stringlYNudU = await WolfStakingRewardsW5kaviW.symbol.call({from: accounts[4]});
		const uint256RHeD1dh = await WolfStakingRewardsW5kaviW.withdraw.call(uintiQC72Sd, uintgUWgnOY, {from: accounts[1]});
		const uint256LQsEUZA = await WolfStakingRewardsW5kaviW.stake.call(uintW9Zf4Ea, uintThDhh89, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbfXfuDc = "TbmGUQDA83nAQeRhDTYnr5lum5PFmiELpKmwfdaWhqiTIAcuPZOF"
		const stringQGTE85M = "QrtEw"
		const uinttINObp0 = BigInt("67")
		const WolfStakingRewardsitgAd3n = await WolfStakingRewards.new(stringbfXfuDc, stringQGTE85M, uinttINObp0, {from: accounts[5]});
		const uintznzh28w = BigInt("1502")
		const addressX8oqztw = accounts[4]
		const uintLDdEc59 = BigInt("1538")
		const uintInlwTDP = BigInt("306")
		const uintIx6x8y3 = BigInt("123")
		const uint256jBte0iH = await WolfStakingRewardsitgAd3n.balanceOfPerPool.call(addressX8oqztw, uintznzh28w, {from: accounts[2]});
		await WolfStakingRewardsitgAd3n.nonReentrant.call({from: accounts[5]});
		const uint256TU3H9Wg = await WolfStakingRewardsitgAd3n.getRewardForDuration.call(uintLDdEc59, {from: accounts[1]});
		const uintyI723JN = await WolfStakingRewardsitgAd3n.getReward.call(uintInlwTDP, {from: accounts[0]});
		const stringan8MeXQ = await WolfStakingRewardsitgAd3n.symbol.call({from: accounts[5]});
		const uint256BsVHVEB = await WolfStakingRewardsitgAd3n.totalSupplyPerPool.call(uintIx6x8y3, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLxLKo2 = "wzYy2VdfFcJa991H989rDelssWVbY7wVUyRBr1webEGSMB4TwcCIG6rQiLCFEzL1U3fvRd5IvNcyb6y2pqcs"
		const stringz2sa8tG = "cm2f"
		const uintvgP48wq = BigInt("81")
		const WolfStakingRewardshYeaFtP = await WolfStakingRewards.new(stringLxLKo2, stringz2sa8tG, uintvgP48wq, {from: accounts[3]});
		const uintNjSN9yL = BigInt("1159")
		const uintehMriuc = BigInt("831")
		const uinthdx3hOQ = BigInt("1131")
		const uintMJI3Y8 = BigInt("1161")
		const uintFElTNVV = BigInt("1356")
		const uintRpiAb5Z = BigInt("1375")
		const uintwnzGq3R = BigInt("1590")
		await WolfStakingRewardshYeaFtP.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256BvQlpQ0 = await WolfStakingRewardshYeaFtP.withdraw.call(uintehMriuc, uintNjSN9yL, {from: accounts[4]});
		const uint256arrayOSXepGP = await WolfStakingRewardshYeaFtP.updateNotifyRewardAmount.call(uinthdx3hOQ, {from: accounts[1]});
		const uint256PFW0hp = await WolfStakingRewardshYeaFtP.withdraw.call(uintFElTNVV, uintMJI3Y8, {from: accounts[4]});
		const uint256rrTXdlR = await WolfStakingRewardshYeaFtP.withdrawRemainingBalance.call(uintwnzGq3R, uintRpiAb5Z, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresswwoKc5o = accounts[4]
		const addressiEU53AZ = accounts[1]
		const addressW5t66m = accounts[1]
		const WolfStakingRewardsgiSZyL6 = await WolfStakingRewards.new(addresswwoKc5o, addressiEU53AZ, addressW5t66m, {from: accounts[2]});
		const uintNA7crqv = BigInt("11")
		const uintlLT9McK = BigInt("471")
		const uintiCf6wbh = BigInt("1756")
		const uintKJRkGsf = BigInt("1902")
		const uint256Rp4sYcG = await WolfStakingRewardsgiSZyL6.withdraw.call(uintlLT9McK, uintNA7crqv, {from: accounts[3]});
		const uint256ZWQ0WZx = await WolfStakingRewardsgiSZyL6.exit.call(uintiCf6wbh, {from: accounts[4]});
		const uintOPhISXr = await WolfStakingRewardsgiSZyL6.getReward.call(uintKJRkGsf, {from: accounts[4]});

		await expect(WolfStakingRewardsgiSZyL6.withdraw.call(uintlLT9McK, uintNA7crqv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringtSCOfua = "BAjP9XbRHFBzlWHzWQH8O37mX5Oy"
		const stringWyKg4YT = "b3DSxJdxJhN7QmSANJgMi5VEbsYbIARQ1QVdt8lkIA"
		const uintvrdWulU = BigInt("39")
		const WolfStakingRewardscuN9t5 = await WolfStakingRewards.new(stringtSCOfua, stringWyKg4YT, uintvrdWulU, {from: accounts[3]});
		const uintoww0lFj = BigInt("1210")
		const uint0hq3Ia = BigInt("1095")
		const addressQpRIlS = accounts[3]
		const uintEbjxEJ5 = BigInt("895")
		const addressajJDbxg = accounts[3]
		const uint8SxzQMis = await WolfStakingRewardscuN9t5.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vg0rqNf = await WolfStakingRewardscuN9t5.rewardPerToken.call(uintoww0lFj, {from: accounts[4]});
		const uint256CUun6W = await WolfStakingRewardscuN9t5.balanceOfPerPool.call(addressQpRIlS, uint0hq3Ia, {from: accounts[0]});
		const uint256S2ciEki = await WolfStakingRewardscuN9t5.earned.call(addressajJDbxg, uintEbjxEJ5, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringloD5C5A = "fHNPVVbRnLvq9C4wNArUsk3QtxQWvQ3M9HIOBX7lwicv7RDb6hufhcGAo8QqSeYdYP7553rlgul3ohHdZp"
		const stringXUnXlFP = "NVvfX5Of9KhdHsljAI7Jn8Fhpt0BNaUy4JoKp92EsLyyNuYD8nELIKZv4HOWMv"
		const uintQZBSmwo = BigInt("201")
		const WolfStakingRewardscFGD0Qt = await WolfStakingRewards.new(stringloD5C5A, stringXUnXlFP, uintQZBSmwo, {from: accounts[5]});
		const uintqaLdpH = BigInt("2037")
		const addressT0K4tPl = accounts[4]
		const uintoj57Vai = BigInt("1535")
		const addresssIFXY5z = accounts[1]
		const uintYXDPGsB = BigInt("12")
		const uintXfdu1td = BigInt("210")
		const uintdIPKtSn = BigInt("1485")
		const addressYQWwZ12 = accounts[3]
		const uint256WyY5nH = await WolfStakingRewardscFGD0Qt.earned.call(addressT0K4tPl, uintqaLdpH, {from: accounts[3]});
		const uint256qNtIO1y = await WolfStakingRewardscFGD0Qt.balanceOfPerPool.call(addresssIFXY5z, uintoj57Vai, {from: accounts[3]});
		const uint256W7Hg30x = await WolfStakingRewardscFGD0Qt.stake.call(uintXfdu1td, uintYXDPGsB, {from: accounts[1]});
		const uint256hwhTOsL = await WolfStakingRewardscFGD0Qt.balanceOfPerPool.call(addressYQWwZ12, uintdIPKtSn, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkvEigrK = "MNaE1dS5irYtlOGNq5"
		const stringNk72mpQ = "SE7go72d9kNMYMFpvchjQS03sH"
		const uintbJIEK85 = BigInt("122")
		const WolfStakingRewardseDHGAgf = await WolfStakingRewards.new(stringkvEigrK, stringNk72mpQ, uintbJIEK85, {from: accounts[0]});
		const uintWkHTExY = BigInt("484")
		const addressbXuZA4 = accounts[1]
		const uintBKb6iQt = BigInt("2")
		const uint256XFoyq8C = await WolfStakingRewardseDHGAgf.balanceOfPerPool.call(addressbXuZA4, uintWkHTExY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayy8hApFE = await WolfStakingRewardseDHGAgf.updateNotifyRewardAmount.call(uintBKb6iQt, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMEGb5oR = "DB4dzurJLsd4ITdBLWKx9SRAAl7MM9UJDtOMUoh3KS81ifOxor1u7kHUsiyCts5UUQnPsSNgM7nKBIy"
		const string5v5AGi = "z1jqg5J1l7rHW50eu6Y9qMPUByKiDZPp5h4cOT7l6EFEdvNE1BAhstSnpZQ8St9DChEs2lfDviHGKAI51NUxr7G5uO"
		const uintnXO1LIU = BigInt("215")
		const WolfStakingRewardsnHnzH8 = await WolfStakingRewards.new(stringMEGb5oR, string5v5AGi, uintnXO1LIU, {from: accounts[3]});
		const uintp38482I = BigInt("1497")
		const uintUlcI6Pu = BigInt("1523")
		const uintEQRQ4St = BigInt("345")
		const uintmrovgrF = BigInt("93")
		const addressfJO3GV = accounts[1]
		const uintl8I8QsR = await WolfStakingRewardsnHnzH8.getReward.call(uintp38482I, {from: accounts[3]});
		const uintQGwtNeg = await WolfStakingRewardsnHnzH8.getReward.call(uintUlcI6Pu, {from: accounts[4]});
		const uintAbCAfSc = await WolfStakingRewardsnHnzH8.getReward.call(uintEQRQ4St, {from: accounts[3]});
		const uint256x3bcIg = await WolfStakingRewardsnHnzH8.earned.call(addressfJO3GV, uintmrovgrF, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringla0ZnIO = "6IX9ql4iimJO7onqF1xesHKfcSnSa8A9bk"
		const stringVlLWDCi = "hC8Zo63LtCNVeniMwn6UGPRqSImPoiUTdVLicBnZlFBJrYIAPAKE8dc6"
		const uintheoeHB4 = BigInt("172")
		const WolfStakingRewardsq3BAwZf = await WolfStakingRewards.new(stringla0ZnIO, stringVlLWDCi, uintheoeHB4, {from: accounts[3]});
		const uintgw9fcpY = BigInt("1945")
		const stringxs39tJ = await WolfStakingRewardsq3BAwZf.name.call({from: accounts[5]});
		const uint8jajh9UD = await WolfStakingRewardsq3BAwZf.decimals.call({from: accounts[2]});
		const uint256FDodVIF = await WolfStakingRewardsq3BAwZf.rewardPerToken.call(uintgw9fcpY, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwQIE29y = "STwxjbZCbvtpFPghiG6mAQsZ9MFMUKT"
		const stringEUznflA = "d4CXjjmusto7OJ4djlCbrU57W2lLTL8a7wFUdOx4AgDP8CagBApfM75f5A51u5Fc12N9M1xfX4ge1d8Rukuf"
		const uintOnNbZL = BigInt("11")
		const WolfStakingRewardsYxerLzL = await WolfStakingRewards.new(stringwQIE29y, stringEUznflA, uintOnNbZL, {from: accounts[0]});
		const uintuuPyxxc = BigInt("303")
		const uinteySDF9L = BigInt("734")
		const uintnMFRdD = BigInt("302")
		const addressI5tLimN = accounts[4]
		const uintjd2pF8v = BigInt("256")
		const uintTnvzcZq = BigInt("1151")
		const uint4fbN4m = BigInt("1972")
		const uintFc4Q5U = BigInt("1927")
		const uintehOe2ha = BigInt("1452")
		const uint256Za5HUO = await WolfStakingRewardsYxerLzL.exit.call(uintuuPyxxc, {from: accounts[2]});
		const uint256L8D9Dqa = await WolfStakingRewardsYxerLzL.rewardPerToken.call(uinteySDF9L, {from: accounts[3]});
		const uint256VcBwbmf = await WolfStakingRewardsYxerLzL.balanceOfPerPool.call(addressI5tLimN, uintnMFRdD, {from: accounts[2]});
		const uint256jQCkidP = await WolfStakingRewardsYxerLzL.stake.call(uintTnvzcZq, uintjd2pF8v, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PFyR6EY = await WolfStakingRewardsYxerLzL.withdrawRemainingBalance.call(uintFc4Q5U, uint4fbN4m, {from: accounts[5]});
		const uint256ayCTab8 = await WolfStakingRewardsYxerLzL.lastTimeRewardApplicable.call(uintehOe2ha, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgYdwAqX = "Dv3E1Pi3vf1uGPQkW5vQbf2S0ixeByW0SBhu7AqwNcJeDdInC9mzGSzWbVDYdNFauIv"
		const stringDkWnxT6 = "dX7y3Iw2W2k0syoFvbvzy0HmeFGG4BuljfTVyPXMqDWdrNA2Ut97EYhi"
		const uintcyvYoqN = BigInt("219")
		const WolfStakingRewardsDYzV9oG = await WolfStakingRewards.new(stringgYdwAqX, stringDkWnxT6, uintcyvYoqN, {from: "0x0000000000000000000000000000000000000001"});
		const uintW1XAgdj = BigInt("497")
		const uintoOynjlK = BigInt("127")
		const uintJaw2Vvm = BigInt("1773")
		const uintmRleQoP = BigInt("1272")
		const addressXUQfPm5 = accounts[4]
		const uint256SrPoyal = await WolfStakingRewardsDYzV9oG.withdraw.call(uintoOynjlK, uintW1XAgdj, {from: accounts[2]});
		const uint256HoqhhkG = await WolfStakingRewardsDYzV9oG.rewardPerToken.call(uintJaw2Vvm, {from: accounts[4]});
		const uint256j81v0kG = await WolfStakingRewardsDYzV9oG.balanceOfPerPool.call(addressXUQfPm5, uintmRleQoP, {from: accounts[1]});
	});
})