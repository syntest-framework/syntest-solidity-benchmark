const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressBPa47H2 = accounts[1]
		const addressER2SuEW = accounts[0]
		const addressDnipL2I = accounts[3]
		const WolfStakingRewardsfTsOXui = await WolfStakingRewards.new(addressBPa47H2, addressER2SuEW, addressDnipL2I, {from: accounts[0]});
		const uintFfQLBKb = BigInt("2026")
		const uintuwj2WlX = BigInt("1643")
		const uintuwNunqv = BigInt("892")
		const addressjBORnY7 = accounts[3]
		const uintvCyfzrj = BigInt("779")
		const addressF8dVCM7 = "0x0000000000000000000000000000000000000001"
		const uintNmbCQNt = BigInt("676")
		const uintglltUbM = BigInt("16")
		const addressJ5i6as = accounts[2]
//		const uint256mnjd7Zh = await WolfStakingRewardsfTsOXui.withdrawRemainingBalance.call(uintuwj2WlX, uintFfQLBKb, {from: "0x0000000000000000000000000000000000000001"});
//		const addressNDDJAMl = await WolfStakingRewardsfTsOXui.updateReward.call(addressjBORnY7, uintuwNunqv, {from: accounts[1]});
//		const uint256tdT8fxW = await WolfStakingRewardsfTsOXui.balanceOfPerPool.call(addressF8dVCM7, uintvCyfzrj, {from: accounts[2]});
//		await WolfStakingRewardsfTsOXui.onlyOwner.call({from: accounts[4]});
//		const uint256array1Sb4YH = await WolfStakingRewardsfTsOXui.updateNotifyRewardAmount.call(uintNmbCQNt, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256FO7R9D8 = await WolfStakingRewardsfTsOXui.balanceOfPerPool.call(addressJ5i6as, uintglltUbM, {from: accounts[5]});

		await expect(WolfStakingRewardsfTsOXui.withdrawRemainingBalance.call(uintuwj2WlX, uintFfQLBKb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressvph02AN = accounts[0]
		const addressNnfED3E = accounts[5]
		const address0G9yyk = accounts[2]
		const WolfStakingRewardsUiD2Tz0 = await WolfStakingRewards.new(addressvph02AN, addressNnfED3E, address0G9yyk, {from: accounts[3]});
		const uintVl4Pt5I = BigInt("1911")
//		await WolfStakingRewardsUiD2Tz0.onlyRewardsDistribution.call({from: accounts[4]});
//		const uint8Bc7eher = await WolfStakingRewardsUiD2Tz0.decimals.call({from: accounts[4]});
//		const uint256KZAoito = await WolfStakingRewardsUiD2Tz0.lastTimeRewardApplicable.call(uintVl4Pt5I, {from: accounts[1]});

		await expect(WolfStakingRewardsUiD2Tz0.onlyRewardsDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressVOnY2h8 = accounts[0]
		const addressHxUPZYs = "0x0000000000000000000000000000000000000001"
		const addressAtSjvf2 = accounts[3]
		const WolfStakingRewardsm8FFz63 = await WolfStakingRewards.new(addressVOnY2h8, addressHxUPZYs, addressAtSjvf2, {from: accounts[1]});
		const uintlWECnHx = BigInt("865")
		const uintom32bZL = BigInt("1594")
		const uintvF14ZIB = BigInt("601")
		const uintM7ZIRm = BigInt("490")
		const uintB2g9k0 = BigInt("503")
		const uinteIZusu0 = BigInt("608")
		const uintaHQMx61 = BigInt("74")
		const uintwcZdKQU = BigInt("1871")
//		const uint256Y6a2DHd = await WolfStakingRewardsm8FFz63.withdraw.call(uintom32bZL, uintlWECnHx, {from: accounts[4]});
//		const uint256PXS3Ztf = await WolfStakingRewardsm8FFz63.withdraw.call(uintM7ZIRm, uintvF14ZIB, {from: accounts[4]});
//		const uintY7ZxOYr = await WolfStakingRewardsm8FFz63.getReward.call(uintB2g9k0, {from: accounts[0]});
//		const uint256AI69LVl = await WolfStakingRewardsm8FFz63.rewardPerToken.call(uinteIZusu0, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256b8xFEw0 = await WolfStakingRewardsm8FFz63.exit.call(uintaHQMx61, {from: accounts[0]});
//		const uint256LzGnpqj = await WolfStakingRewardsm8FFz63.totalSupplyPerPool.call(uintwcZdKQU, {from: accounts[4]});

		await expect(WolfStakingRewardsm8FFz63.withdraw.call(uintom32bZL, uintlWECnHx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressNvd0kSX = "0x0000000000000000000000000000000000000001"
		const addressf7lP3da = accounts[1]
		const addresswBK4tT4 = accounts[1]
		const WolfStakingRewardsqGGbsWS = await WolfStakingRewards.new(addressNvd0kSX, addressf7lP3da, addresswBK4tT4, {from: accounts[3]});
		const uintvy6dIsV = BigInt("38")
		const addressR9CzEk = accounts[3]
		const uintnhiuDId = BigInt("724")
		const uintNZp0o0R = BigInt("1085")
		const uintTWraEzL = BigInt("2022")
		const uintqV7DqBG = BigInt("117")
		const uint256wlEuSs5 = await WolfStakingRewardsqGGbsWS.balanceOfPerPool.call(addressR9CzEk, uintvy6dIsV, {from: accounts[4]});
		const uint256XR3BItm = await WolfStakingRewardsqGGbsWS.lastTimeRewardApplicable.call(uintnhiuDId, {from: accounts[5]});
//		const uint256arrayxXGVUn = await WolfStakingRewardsqGGbsWS.updateNotifyRewardAmount.call(uintNZp0o0R, {from: accounts[1]});
//		const uint256HHMN3J = await WolfStakingRewardsqGGbsWS.withdraw.call(uintqV7DqBG, uintTWraEzL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256XR3BItm, BigInt("0"))
		assert.equal(uint256wlEuSs5, BigInt("0"))
		await expect(WolfStakingRewardsqGGbsWS.updateNotifyRewardAmount.call(uintNZp0o0R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringd9XZxxl = "Ie3ybdKwrVsqLfxVQ7pOO5nDrwLizA6RPurChS4m"
		const stringUCjcAoQ = "rKKG7QCONEArvxaF8xYgCH90b0FWBue0dEqntB6hwAfbr9PF2hCaIGq6x467jNpxoGupANkK6ysT"
		const uintA4GKpLM = BigInt("197")
		const WolfStakingRewardsIDcANec = await WolfStakingRewards.new(stringd9XZxxl, stringUCjcAoQ, uintA4GKpLM, {from: accounts[2]});
		const uintWKWAtGQ = BigInt("859")
		await WolfStakingRewardsIDcANec.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256arraydtPUHXx = await WolfStakingRewardsIDcANec.updateNotifyRewardAmount.call(uintWKWAtGQ, {from: accounts[0]});
		await WolfStakingRewardsIDcANec.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrqXFExm = "rkg8xP"
		const stringG1aKj0B = "mTho8uLSrU5oluwShTb8PhsneoK7KFHXVO58I58QFOZ6mXZAkn"
		const uintnHqPou3 = BigInt("230")
		const WolfStakingRewardsbnfupQu = await WolfStakingRewards.new(stringrqXFExm, stringG1aKj0B, uintnHqPou3, {from: "0x0000000000000000000000000000000000000001"});
		const uintjLdRGaY = BigInt("424")
		const uintsdChQ8B = BigInt("250")
		const uintuWQF9Ga = BigInt("748")
		const uint256tZ4GLal = await WolfStakingRewardsbnfupQu.stake.call(uintsdChQ8B, uintjLdRGaY, {from: accounts[2]});
		const uintlN8nDYD = await WolfStakingRewardsbnfupQu.getReward.call(uintuWQF9Ga, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressf422Ah = accounts[0]
		const addressUQBZDAd = accounts[0]
		const addresskUKbv8r = accounts[0]
		const WolfStakingRewardsBtQbDt = await WolfStakingRewards.new(addressf422Ah, addressUQBZDAd, addresskUKbv8r, {from: accounts[4]});
		const uintbpJJVF9 = BigInt("1884")
		const uintlpJ543X = BigInt("501")
//		const uint256BKGMjNt = await WolfStakingRewardsBtQbDt.getRewardForDuration.call(uintbpJJVF9, {from: accounts[5]});
//		const stringcKeRLbW = await WolfStakingRewardsBtQbDt.name.call({from: accounts[4]});
//		const uintg8Iqf2 = await WolfStakingRewardsBtQbDt.getReward.call(uintlpJ543X, {from: accounts[1]});

		await expect(WolfStakingRewardsBtQbDt.getRewardForDuration.call(uintbpJJVF9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresstgFBSbP = accounts[0]
		const addressZuC8gKD = accounts[0]
		const addressd79AwRu = accounts[0]
		const WolfStakingRewardsBtQbDt = await WolfStakingRewards.new(addresstgFBSbP, addressZuC8gKD, addressd79AwRu, {from: accounts[4]});
		const uintQrDgjHZ = BigInt("1841")
		const uintzpwvOT0 = BigInt("3")
		const uintE3wWqWN = BigInt("1884")
		const uintOlvBRd = BigInt("501")
//		const uint256v4blOGj = await WolfStakingRewardsBtQbDt.stake.call(uintzpwvOT0, uintQrDgjHZ, {from: accounts[4]});
//		const uint256BKGMjNt = await WolfStakingRewardsBtQbDt.getRewardForDuration.call(uintE3wWqWN, {from: accounts[5]});
//		const stringcKeRLbW = await WolfStakingRewardsBtQbDt.name.call({from: accounts[4]});
//		const uintg8Iqf2 = await WolfStakingRewardsBtQbDt.getReward.call(uintOlvBRd, {from: accounts[1]});
//		const stringRakEf7q = await WolfStakingRewardsBtQbDt.name.call({from: accounts[1]});
//		const uint8kJSxtO = await WolfStakingRewardsBtQbDt.decimals.call({from: accounts[1]});
//		await WolfStakingRewardsBtQbDt.onlyRewardsDistribution.call({from: accounts[2]});

		await expect(WolfStakingRewardsBtQbDt.stake.call(uintzpwvOT0, uintQrDgjHZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringpMW1bsn = "iUmMQT2cAoZseflXnCoHGfjXFETLWWQM3FzH9Clv"
		const stringK54BE2C = "t63ZEyAvRfURx2"
		const uintMkr1Ahe = BigInt("165")
		const WolfStakingRewardslVQZyuv = await WolfStakingRewards.new(stringpMW1bsn, stringK54BE2C, uintMkr1Ahe, {from: accounts[1]});
		const uintjAfi1YR = BigInt("1591")
		const uintZyl2fZA = BigInt("1708")
		const uintBZRCKkT = BigInt("1444")
		const uintG40paT2 = BigInt("749")
		const uintwFKf5iW = BigInt("49")
		const addressmyPEEwd = accounts[0]
		const uintNq39aL9 = await WolfStakingRewardslVQZyuv.getReward.call(uintjAfi1YR, {from: accounts[5]});
		const uint256ybX6klU = await WolfStakingRewardslVQZyuv.rewardPerToken.call(uintZyl2fZA, {from: accounts[2]});
		const uint256xSSIm8D = await WolfStakingRewardslVQZyuv.withdraw.call(uintG40paT2, uintBZRCKkT, {from: accounts[0]});
		const uint256CwW7H02 = await WolfStakingRewardslVQZyuv.earned.call(addressmyPEEwd, uintwFKf5iW, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfTieQPX = "FDy2bsRzbNGhtCrNwxJExnAng5GxzkmfenpzlYMAL4uXdFTc2M56VrSPaWelW7KRa0jC2xCxx265yLdNuFC8qWSQ"
		const stringgxdWgb5 = "bm3p6pPtlVhk6Nclx3BWpch3aTK6VHW6yp"
		const uintYZVFak = BigInt("182")
		const WolfStakingRewards3XAzF6 = await WolfStakingRewards.new(stringfTieQPX, stringgxdWgb5, uintYZVFak, {from: accounts[4]});
		const uintD0VBQRF = BigInt("991")
		const uintRrj8sr = BigInt("1229")
		const uintfVwsDFG = BigInt("1281")
		const uinttO7KlKd = BigInt("400")
		const addressdTcFV2c = accounts[2]
		const uintL6BgSzs = BigInt("1243")
		const uint256N47jRFF = await WolfStakingRewards3XAzF6.lastTimeRewardApplicable.call(uintD0VBQRF, {from: accounts[3]});
		const uint256scJXUw = await WolfStakingRewards3XAzF6.rewardPerToken.call(uintRrj8sr, {from: accounts[3]});
		const uintqzkEAB3 = await WolfStakingRewards3XAzF6.getReward.call(uintfVwsDFG, {from: accounts[1]});
		const addressA0AyvyY = await WolfStakingRewards3XAzF6.updateReward.call(addressdTcFV2c, uinttO7KlKd, {from: accounts[3]});
		const uintyOzl6KN = await WolfStakingRewards3XAzF6.getReward.call(uintL6BgSzs, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringD8hrxmn = "nC4AbzDa46FpgvRKyrQUlPcwC8KA9GoGD3o7ghaer2hjmbKHg"
		const stringepInMWY = "48XsdwCcp1LzxfaIouAKib"
		const uintfg5q6YQ = BigInt("97")
		const WolfStakingRewardsx3ZIP3h = await WolfStakingRewards.new(stringD8hrxmn, stringepInMWY, uintfg5q6YQ, {from: accounts[4]});
		const uintnAxuhhQ = BigInt("1055")
		const uintL42bxfx = BigInt("1766")
		const uintGC9LZVl = BigInt("1548")
		const uintaWQhUjs = await WolfStakingRewardsx3ZIP3h.getReward.call(uintnAxuhhQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arraywjTlFQD = await WolfStakingRewardsx3ZIP3h.updateNotifyRewardAmount.call(uintL42bxfx, {from: accounts[4]});
		const uint256ER7wOWF = await WolfStakingRewardsx3ZIP3h.rewardPerToken.call(uintGC9LZVl, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRpVTgXv = "kHSHfLhCb"
		const stringJpoNsDp = "27UQiJb3Kg6T2kK0"
		const uintdYF5ivJ = BigInt("171")
		const WolfStakingRewardscuhLut = await WolfStakingRewards.new(stringRpVTgXv, stringJpoNsDp, uintdYF5ivJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintHyTPT17 = BigInt("654")
		const uintX2pOgoN = BigInt("412")
		const uintYzZuFH2 = BigInt("219")
		const uintQOmA9iw = BigInt("1748")
		const uint256l9xM2dE = await WolfStakingRewardscuhLut.withdraw.call(uintX2pOgoN, uintHyTPT17, {from: accounts[4]});
		const uint256x2xflnF = await WolfStakingRewardscuhLut.totalSupplyPerPool.call(uintYzZuFH2, {from: accounts[1]});
		const uint256Xd5BVWl = await WolfStakingRewardscuhLut.rewardPerToken.call(uintQOmA9iw, {from: accounts[4]});
		const uint8lmu2pT = await WolfStakingRewardscuhLut.decimals.call({from: accounts[0]});
		const uint8RSx9L0 = await WolfStakingRewardscuhLut.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressQYi8WNt = accounts[0]
		const addressopQW7ZF = accounts[0]
		const addressyiIMiX4 = accounts[0]
		const WolfStakingRewardsBtQbDt = await WolfStakingRewards.new(addressQYi8WNt, addressopQW7ZF, addressyiIMiX4, {from: accounts[4]});
		const uintgaqKBwS = BigInt("1841")
		const uintYc7lKrb = BigInt("0")
		const uintxZQbb2b = BigInt("1256")
		const uintrxhP3Go = BigInt("25")
		const uintDvpa1yK = BigInt("1128")
//		const uint256v4blOGj = await WolfStakingRewardsBtQbDt.stake.call(uintYc7lKrb, uintgaqKBwS, {from: accounts[4]});
//		const uintYswsyBM = await WolfStakingRewardsBtQbDt.getReward.call(uintxZQbb2b, {from: accounts[4]});
//		const uint256V6E98CO = await WolfStakingRewardsBtQbDt.stake.call(uintDvpa1yK, uintrxhP3Go, {from: accounts[4]});
//		const stringcKeRLbW = await WolfStakingRewardsBtQbDt.name.call({from: accounts[4]});
//		await WolfStakingRewardsBtQbDt.onlyRewardsDistribution.call({from: accounts[1]});
//		const stringRakEf7q = await WolfStakingRewardsBtQbDt.name.call({from: accounts[1]});

		await expect(WolfStakingRewardsBtQbDt.stake.call(uintYc7lKrb, uintgaqKBwS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringfQwMgjk = "nOgc18Y"
		const stringuqza9S = "UPn4OEYrqJ3v9Jqv8WMXksxLHFVLbzAPSaXk7JAg"
		const uintG7dh0vp = BigInt("51")
		const WolfStakingRewardsWAITf41 = await WolfStakingRewards.new(stringfQwMgjk, stringuqza9S, uintG7dh0vp, {from: accounts[5]});
		const uintwviBjSi = BigInt("1536")
		const uinttNDoxQ = BigInt("412")
		const uintVp1crq7 = BigInt("297")
		const uintTjrVZSq = BigInt("1252")
		const addresscQ6jGI0 = accounts[0]
		const uint256arrayMngyLWh = await WolfStakingRewardsWAITf41.updateNotifyRewardAmount.call(uintwviBjSi, {from: accounts[1]});
		const uint256u5LWsLW = await WolfStakingRewardsWAITf41.stake.call(uintVp1crq7, uinttNDoxQ, {from: accounts[1]});
		const uint256wxk1lm5 = await WolfStakingRewardsWAITf41.balanceOfPerPool.call(addresscQ6jGI0, uintTjrVZSq, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzAiBsWP = "FpG"
		const string1l2uqT = "QAj5GwUtcufI4aGh51Bc2BPvosLWGlyy"
		const uintdMmSdzB = BigInt("16")
		const WolfStakingRewardsocgEECQ = await WolfStakingRewards.new(stringzAiBsWP, string1l2uqT, uintdMmSdzB, {from: accounts[1]});
		const uintm8KxBFx = BigInt("558")
		const uintmzKKbn = BigInt("1688")
		const address7yic65 = accounts[5]
		const uint2562sfEiC = await WolfStakingRewardsocgEECQ.exit.call(uintm8KxBFx, {from: accounts[2]});
		const uint256PKFmJqZ = await WolfStakingRewardsocgEECQ.balanceOfPerPool.call(address7yic65, uintmzKKbn, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressB5kFBN0 = accounts[0]
		const addressbXYD1uT = accounts[0]
		const addressVyqTmJp = accounts[0]
		const WolfStakingRewardsBtQbDt = await WolfStakingRewards.new(addressB5kFBN0, addressbXYD1uT, addressVyqTmJp, {from: accounts[4]});
		const uintgTqucc = BigInt("1965")
		const uintpGuTFWF = BigInt("1841")
		const uintmJOdfAf = BigInt("3")
		const uint256BA46fwg = await WolfStakingRewardsBtQbDt.totalSupplyPerPool.call(uintgTqucc, {from: accounts[1]});
//		const uint256v4blOGj = await WolfStakingRewardsBtQbDt.stake.call(uintmJOdfAf, uintpGuTFWF, {from: accounts[4]});
//		const stringcKeRLbW = await WolfStakingRewardsBtQbDt.name.call({from: accounts[4]});
//		const stringRakEf7q = await WolfStakingRewardsBtQbDt.name.call({from: accounts[1]});

		assert.equal(uint256BA46fwg, BigInt("0"))
		await expect(WolfStakingRewardsBtQbDt.stake.call(uintmJOdfAf, uintpGuTFWF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressmku4cEK = accounts[0]
		const addressamsCTR4 = accounts[0]
		const addresskQeBGRv = accounts[0]
		const WolfStakingRewardsBtQbDt = await WolfStakingRewards.new(addressmku4cEK, addressamsCTR4, addresskQeBGRv, {from: accounts[4]});
		const uintiPI68Rd = BigInt("597")
		const uintg8Iqf2 = await WolfStakingRewardsBtQbDt.getReward.call(uintiPI68Rd, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const address7glptV = accounts[0]
		const addresstKBXjWt = accounts[0]
		const addressJh8SMRP = accounts[0]
		const WolfStakingRewardsBtQbDt = await WolfStakingRewards.new(address7glptV, addresstKBXjWt, addressJh8SMRP, {from: accounts[4]});
		const uintnvVShbM = BigInt("1841")
		const uintpBv9s4a = BigInt("0")
		const uintkv1KYOf = BigInt("1256")
		const uintfwiRo4y = BigInt("394")
//		const uint256v4blOGj = await WolfStakingRewardsBtQbDt.stake.call(uintpBv9s4a, uintnvVShbM, {from: accounts[4]});
//		const uintYswsyBM = await WolfStakingRewardsBtQbDt.getReward.call(uintkv1KYOf, {from: accounts[4]});
//		const stringcKeRLbW = await WolfStakingRewardsBtQbDt.name.call({from: accounts[4]});
//		const uint256VaDIrZ = await WolfStakingRewardsBtQbDt.rewardPerToken.call(uintfwiRo4y, {from: accounts[3]});
//		await WolfStakingRewardsBtQbDt.onlyRewardsDistribution.call({from: accounts[1]});
//		const stringRakEf7q = await WolfStakingRewardsBtQbDt.name.call({from: accounts[1]});

		await expect(WolfStakingRewardsBtQbDt.stake.call(uintpBv9s4a, uintnvVShbM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressA14DF4k = accounts[0]
		const addressF00tTsC = accounts[0]
		const addressRc7sPUE = accounts[0]
		const WolfStakingRewardsBtQbDt = await WolfStakingRewards.new(addressA14DF4k, addressF00tTsC, addressRc7sPUE, {from: accounts[4]});
		const uintdIYK73y = BigInt("1826")
		const uintZOX2YRh = BigInt("3")
//		const uint256v4blOGj = await WolfStakingRewardsBtQbDt.stake.call(uintZOX2YRh, uintdIYK73y, {from: accounts[4]});
//		const stringRakEf7q = await WolfStakingRewardsBtQbDt.name.call({from: accounts[1]});

		await expect(WolfStakingRewardsBtQbDt.stake.call(uintZOX2YRh, uintdIYK73y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressnJXVsX = accounts[0]
		const addressYCwgm5V = accounts[0]
		const addressPqAQhdj = accounts[0]
		const WolfStakingRewardsBtQbDt = await WolfStakingRewards.new(addressnJXVsX, addressYCwgm5V, addressPqAQhdj, {from: accounts[4]});
		const uint2oafMu = BigInt("1285")
		const uintcPIfN6J = BigInt("1482")
		const uintOmShbdU = BigInt("933")
		const uintfYQZYO0 = BigInt("1945")
		const uinth1G6TnP = BigInt("151")
//		const uint256FTWXXz = await WolfStakingRewardsBtQbDt.withdraw.call(uintcPIfN6J, uint2oafMu, {from: accounts[3]});
//		const uint256tNzDIDq = await WolfStakingRewardsBtQbDt.totalSupplyPerPool.call(uintOmShbdU, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ydiCOU2 = await WolfStakingRewardsBtQbDt.exit.call(uintfYQZYO0, {from: accounts[2]});
//		const uintg8Iqf2 = await WolfStakingRewardsBtQbDt.getReward.call(uinth1G6TnP, {from: accounts[1]});

		await expect(WolfStakingRewardsBtQbDt.withdraw.call(uintcPIfN6J, uint2oafMu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringYWm6uDr = "uc8"
		const stringyAY4UIB = "KXJUe15WGKIxJuyjMgK4qU86oVMfcCgTA2QUMgeRNl6LcngDiI3Q"
		const uintoMq0kkN = BigInt("234")
		const WolfStakingRewardsCd0nN24 = await WolfStakingRewards.new(stringYWm6uDr, stringyAY4UIB, uintoMq0kkN, {from: accounts[3]});
		const uintgiLhtLF = BigInt("1212")
		const addressp6yaL3u = accounts[2]
		const stringk9fIpHZ = await WolfStakingRewardsCd0nN24.name.call({from: accounts[3]});
		const stringbFrVRtw = await WolfStakingRewardsCd0nN24.symbol.call({from: accounts[3]});
		const uint256UBm2B7U = await WolfStakingRewardsCd0nN24.earned.call(addressp6yaL3u, uintgiLhtLF, {from: accounts[0]});
		const uint8KjGoX1 = await WolfStakingRewardsCd0nN24.decimals.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const string2ApY2u = "GeZmQ479wPhn2b3X8FTJaaCSLSXXuwTwSKUnbmNlwmVWjVZ0ZNC2J464jIPH"
		const stringpQonuSb = "u5zf9KNkCbTx8TnKlEnGghLkmrWi6I4ke3w09GiWnaFH5NZyTIL3zCGftFJAX9eBoNmWOdXa3sWIj0mqu"
		const uintBOQz5d = BigInt("146")
		const WolfStakingRewardsirqHoAf = await WolfStakingRewards.new(string2ApY2u, stringpQonuSb, uintBOQz5d, {from: "0x0000000000000000000000000000000000000001"});
		const uintYXGoS7n = BigInt("728")
		const uintkKMUfdg = BigInt("1695")
		const uintWCRArTa = BigInt("109")
		const uintoebEJ4M = BigInt("1243")
		const uintMkj0Ls9 = BigInt("1542")
		const uint256PYmzPG = await WolfStakingRewardsirqHoAf.stake.call(uintkKMUfdg, uintYXGoS7n, {from: accounts[4]});
		const uint256GbRaJUv = await WolfStakingRewardsirqHoAf.lastTimeRewardApplicable.call(uintWCRArTa, {from: accounts[0]});
		const uint256xpfWXpE = await WolfStakingRewardsirqHoAf.rewardPerToken.call(uintoebEJ4M, {from: accounts[2]});
		const uint256arrayFHNrJHo = await WolfStakingRewardsirqHoAf.updateNotifyRewardAmount.call(uintMkj0Ls9, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressyzY24X = accounts[0]
		const addressjm8aZss = accounts[0]
		const addressmrOMswM = accounts[0]
		const WolfStakingRewardsBtQbDt = await WolfStakingRewards.new(addressyzY24X, addressjm8aZss, addressmrOMswM, {from: accounts[4]});
		const uintEmfXzEv = BigInt("597")
		const uintQyQe31k = BigInt("1185")
		const uintktR7q3t = BigInt("1266")
		const uintg8Iqf2 = await WolfStakingRewardsBtQbDt.getReward.call(uintEmfXzEv, {from: accounts[1]});
//		const uint256NIXRd6K = await WolfStakingRewardsBtQbDt.withdrawRemainingBalance.call(uintktR7q3t, uintQyQe31k, {from: accounts[4]});

		await expect(WolfStakingRewardsBtQbDt.withdrawRemainingBalance.call(uintktR7q3t, uintQyQe31k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressEe46CyG = accounts[3]
		const addressiErE5CB = accounts[1]
		const addressGRfL2Ul = accounts[4]
		const WolfStakingRewardsVClKkV1 = await WolfStakingRewards.new(addressEe46CyG, addressiErE5CB, addressGRfL2Ul, {from: "0x0000000000000000000000000000000000000001"});
		const uintpgHmtZ = BigInt("530")
		const uintPLrYp6S = BigInt("499")
		const uinth0iWG6v = BigInt("2039")
		const uintGIrmTx = BigInt("1348")
		const uint256PhP8104 = await WolfStakingRewardsVClKkV1.stake.call(uintPLrYp6S, uintpgHmtZ, {from: accounts[1]});
		const uint256Lp4Jgj = await WolfStakingRewardsVClKkV1.exit.call(uinth0iWG6v, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayac2IR47 = await WolfStakingRewardsVClKkV1.updateNotifyRewardAmount.call(uintGIrmTx, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressyTCWBKD = accounts[0]
		const addressbNCqtsy = accounts[0]
		const addresslXGOZTP = accounts[0]
		const WolfStakingRewardsBtQbDt = await WolfStakingRewards.new(addressyTCWBKD, addressbNCqtsy, addresslXGOZTP, {from: accounts[4]});
		const uintKL46ADQ = BigInt("630")
		const uintWJtgRn = BigInt("847")
		const uintCp8MWKe = BigInt("1409")
		const uintg8Iqf2 = await WolfStakingRewardsBtQbDt.getReward.call(uintKL46ADQ, {from: accounts[1]});
//		const uint256UBh3YBS = await WolfStakingRewardsBtQbDt.exit.call(uintWJtgRn, {from: accounts[0]});
//		const uint256f9iYTsk = await WolfStakingRewardsBtQbDt.rewardPerToken.call(uintCp8MWKe, {from: accounts[2]});

		await expect(WolfStakingRewardsBtQbDt.exit.call(uintWJtgRn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringAL8qdwp = "ty5PCbKoG3FJH5M5Y7hTpAo7CJww"
		const stringmry4rwN = "NyBBsHhnbQrUCqJ6qgQxERKUgd20veAzVlLVgTlC2K7wdAO578S2HPgWgvKAcYx31pimUWtg2tT2TqUJ510vKlGnr"
		const uintCLk0EoU = BigInt("18")
		const WolfStakingRewardsPmBBh5 = await WolfStakingRewards.new(stringAL8qdwp, stringmry4rwN, uintCLk0EoU, {from: accounts[4]});
		const uintpzjS8R = BigInt("1671")
		const uintiBHEFO = BigInt("617")
		const uintKt7idZf = BigInt("115")
		await WolfStakingRewardsPmBBh5.nonReentrant.call({from: accounts[0]});
		const uint256N9J3eAz = await WolfStakingRewardsPmBBh5.exit.call(uintpzjS8R, {from: accounts[1]});
		const uint256MG0IgKK = await WolfStakingRewardsPmBBh5.withdrawRemainingBalance.call(uintKt7idZf, uintiBHEFO, {from: accounts[4]});
		const uint8pWlEayY = await WolfStakingRewardsPmBBh5.decimals.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGeBanmv = "OaPVyq2kqmGch9gZi1o6mgYVK1y1ye2"
		const stringeXWyezc = "2KM1lL48Dl32htf69MIjDWtMtkDtjS9sHXFkuok2Brpohae9VODnh41uSf4cNfU5TU4fATMZbs"
		const uintACCBq4 = BigInt("246")
		const WolfStakingRewardsOnCgMCV = await WolfStakingRewards.new(stringGeBanmv, stringeXWyezc, uintACCBq4, {from: accounts[0]});
		const uintTdWGqQ9 = BigInt("1877")
		const uintyMAFvxm = BigInt("1464")
		await WolfStakingRewardsOnCgMCV.nonReentrant.call({from: accounts[5]});
		const uint256yNmcXn = await WolfStakingRewardsOnCgMCV.getRewardForDuration.call(uintTdWGqQ9, {from: accounts[5]});
		const uint256Gu0GFJM = await WolfStakingRewardsOnCgMCV.lastTimeRewardApplicable.call(uintyMAFvxm, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpVSiPna = "FYfTvTzVMX1Ob4IIENFe5hDilDuAdg50yVLufiFnktLyAq6zTSpeIXDZ9ybcVVhLRG8eT3J0NUvsn"
		const stringffOGBLp = "VcM"
		const uintojBN0AU = BigInt("142")
		const WolfStakingRewardsBG5sinN = await WolfStakingRewards.new(stringpVSiPna, stringffOGBLp, uintojBN0AU, {from: "0x0000000000000000000000000000000000000001"});
		const uintJ2AjRC3 = BigInt("1911")
		const uintkEy4orE = BigInt("296")
		const uintqo7d4yB = BigInt("905")
		const uint256FoVyCg = await WolfStakingRewardsBG5sinN.rewardPerToken.call(uintJ2AjRC3, {from: accounts[0]});
		const uint256qsQ01XD = await WolfStakingRewardsBG5sinN.getRewardForDuration.call(uintkEy4orE, {from: accounts[2]});
		const uint256bjDsz2b = await WolfStakingRewardsBG5sinN.rewardPerToken.call(uintqo7d4yB, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZu5iRIA = "kwaXW5R1XvGg67UzWIl3i8bXyui7kChM9"
		const stringIl6OfC = "ZFBWZlxXdkP4nt1naJP4Wz2uIq4BvV4xrKevJEeSkBGi7"
		const uintzdJPVjk = BigInt("39")
		const WolfStakingRewardsYlmgCGf = await WolfStakingRewards.new(stringZu5iRIA, stringIl6OfC, uintzdJPVjk, {from: accounts[5]});
		const uintDdDObg = BigInt("1550")
		const uintgF13JkC = BigInt("1525")
		const uintpUqaZU7 = BigInt("113")
		const addressWjHLMIt = accounts[4]
		const uint256R41AL88 = await WolfStakingRewardsYlmgCGf.rewardPerToken.call(uintDdDObg, {from: accounts[3]});
		const uint256s1tdeIV = await WolfStakingRewardsYlmgCGf.getRewardForDuration.call(uintgF13JkC, {from: accounts[4]});
		const uint256H8k2hGf = await WolfStakingRewardsYlmgCGf.earned.call(addressWjHLMIt, uintpUqaZU7, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHeaNPKh = "7d"
		const stringnR7LT4R = "KcCPgHoDFC6RLScioOeBMkRaquWTYIBNSpktImpQXRY4Khy4NDUtxhDsXNcsY6eMJoAyJLPYpwNG"
		const uintxzFxexE = BigInt("58")
		const WolfStakingRewardsdEYQgxR = await WolfStakingRewards.new(stringHeaNPKh, stringnR7LT4R, uintxzFxexE, {from: accounts[5]});
		const uintgchIKOr = BigInt("1656")
		const uintGxHLOzP = BigInt("916")
		await WolfStakingRewardsdEYQgxR.onlyOwner.call({from: accounts[2]});
		const uint256PNwj636 = await WolfStakingRewardsdEYQgxR.getRewardForDuration.call(uintgchIKOr, {from: accounts[2]});
		const uint256KOviqY = await WolfStakingRewardsdEYQgxR.getRewardForDuration.call(uintGxHLOzP, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPLAzT0 = "cHM2BHA4fCD6sJ7ak9DnmNWBUfr2d0m3"
		const stringPUcZP83 = "yBbJtKjpRnusafLbHCJXywCjx0idwqv2Wz1bnXq"
		const uintTIBcjA6 = BigInt("34")
		const WolfStakingRewardspyJRXsL = await WolfStakingRewards.new(stringPLAzT0, stringPUcZP83, uintTIBcjA6, {from: accounts[1]});
		const uintDv2QmTU = BigInt("334")
		const uintYJsOtGc = BigInt("1130")
		const uintczttn4 = BigInt("509")
		const uintmapJiLU = BigInt("688")
		const uintSB7myAM = BigInt("159")
		const stringGPDDCKn = await WolfStakingRewardspyJRXsL.symbol.call({from: accounts[0]});
		await WolfStakingRewardspyJRXsL.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256mHPSy8Z = await WolfStakingRewardspyJRXsL.withdraw.call(uintYJsOtGc, uintDv2QmTU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256omVUxRP = await WolfStakingRewardspyJRXsL.exit.call(uintczttn4, {from: accounts[3]});
		const uint256HMiQWR = await WolfStakingRewardspyJRXsL.withdrawRemainingBalance.call(uintSB7myAM, uintmapJiLU, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringT1B3OE = "h7yt9AoYV4qFOc42LPmHvhpY7j5jT2TIeitGfpPEpz4z6ik"
		const stringkXFURvc = "tKmrcYyeunZURYlMSO74aAwQAAok5YYhHQyyr8YsSboa3VioqjiyKrHSd2FVCokXmd2"
		const uintum0y7V = BigInt("36")
		const WolfStakingRewardsgxrMdUY = await WolfStakingRewards.new(stringT1B3OE, stringkXFURvc, uintum0y7V, {from: accounts[1]});
		const uinttzXH0H7 = BigInt("634")
		const uintC71STCN = BigInt("676")
		const uintbsYijlU = BigInt("1776")
		const uintUhmXqPH = BigInt("484")
		const uintQkn6eHb = BigInt("1213")
		const address2IPKzg = accounts[1]
		const uint256HJBROo0 = await WolfStakingRewardsgxrMdUY.stake.call(uintC71STCN, uinttzXH0H7, {from: accounts[4]});
		const uint256O3yMPQq = await WolfStakingRewardsgxrMdUY.rewardPerToken.call(uintbsYijlU, {from: accounts[0]});
		const stringyNw1Ct = await WolfStakingRewardsgxrMdUY.symbol.call({from: accounts[3]});
		const uint256K30SIZD = await WolfStakingRewardsgxrMdUY.totalSupplyPerPool.call(uintUhmXqPH, {from: accounts[4]});
		const addressKZ1MbYg = await WolfStakingRewardsgxrMdUY.updateReward.call(address2IPKzg, uintQkn6eHb, {from: "0x0000000000000000000000000000000000000001"});
		const stringRVpWaCP = await WolfStakingRewardsgxrMdUY.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuMOqqH = "Z6TUd5oOBngpDiASXRkkYtRlcZjP1ONa8NtGSY140e7JrnHdMEm3BlixbWnmJwq"
		const stringlzdsyGG = "vcIbp1UGhahDxxMjylk5vD16zkKtJIUeLZVIAiLoc7e1CBrjY"
		const uintSnxlozT = BigInt("48")
		const WolfStakingRewardsjbIFSf = await WolfStakingRewards.new(stringuMOqqH, stringlzdsyGG, uintSnxlozT, {from: accounts[4]});
		const uintbZRMJmi = BigInt("831")
		const stringPUDng2d = await WolfStakingRewardsjbIFSf.symbol.call({from: accounts[1]});
		const stringGlZPT4l = await WolfStakingRewardsjbIFSf.symbol.call({from: accounts[4]});
		const stringpw6NY0J = await WolfStakingRewardsjbIFSf.symbol.call({from: accounts[4]});
		const uint256arrayrRIGkU = await WolfStakingRewardsjbIFSf.updateNotifyRewardAmount.call(uintbZRMJmi, {from: accounts[3]});
		await WolfStakingRewardsjbIFSf.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqSfmaHS = "s1YCPaksPmb27pvD8OOwhwWfbjrNpIu6Qa3YsrozySAMu7d2st0i"
		const stringqrJTLuW = "aw810v58i7gsXQfhLRR0IARcVNPS6pHdHp4hpDTgFKiPukPp3v5oRbDV4NaW7eJ7Ie0rMOHMSurkbSE"
		const uintDDWUcSa = BigInt("71")
		const WolfStakingRewardsChK8oW = await WolfStakingRewards.new(stringqSfmaHS, stringqrJTLuW, uintDDWUcSa, {from: accounts[1]});
		const uintSqP0MUq = BigInt("1510")
		const addressjb2hq2E = accounts[2]
		const string3xeOxK = await WolfStakingRewardsChK8oW.symbol.call({from: accounts[1]});
		const uint256jm8x6h8 = await WolfStakingRewardsChK8oW.earned.call(addressjb2hq2E, uintSqP0MUq, {from: accounts[4]});
		await WolfStakingRewardsChK8oW.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHuhJRM4 = "yg"
		const stringGMjlBkj = "6zb79lDL1J"
		const uintxPY0IvX = BigInt("117")
		const WolfStakingRewardsR14Ebau = await WolfStakingRewards.new(stringHuhJRM4, stringGMjlBkj, uintxPY0IvX, {from: accounts[2]});
		const uintEEy29G5 = BigInt("111")
		const uintAooOji = BigInt("155")
		const uintgbhM5ld = BigInt("1267")
		const uintWRgEVlV = BigInt("271")
		const uint256vwhxU41 = await WolfStakingRewardsR14Ebau.exit.call(uintEEy29G5, {from: accounts[4]});
		const stringrt1fWH = await WolfStakingRewardsR14Ebau.symbol.call({from: accounts[5]});
		const uint8P8nr96k = await WolfStakingRewardsR14Ebau.decimals.call({from: accounts[3]});
		const uint256U3bSh6 = await WolfStakingRewardsR14Ebau.rewardPerToken.call(uintAooOji, {from: accounts[1]});
		const uint256m52rHBa = await WolfStakingRewardsR14Ebau.withdraw.call(uintWRgEVlV, uintgbhM5ld, {from: "0x0000000000000000000000000000000000000001"});
		const uint8WtWEOiL = await WolfStakingRewardsR14Ebau.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringj1Q1aYO = "hZbK1UKTqejyhYUdvm1X9aEBN5rkP5ROwp"
		const stringxzFnwvF = "fRlmMH6FfK8G23"
		const uintUHGjwR = BigInt("155")
		const WolfStakingRewardswGlSBas = await WolfStakingRewards.new(stringj1Q1aYO, stringxzFnwvF, uintUHGjwR, {from: accounts[0]});
		const uintshRRfaa = BigInt("2014")
		const addressWcJ3qk4 = accounts[0]
		await WolfStakingRewardswGlSBas.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardswGlSBas.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256XotiLDO = await WolfStakingRewardswGlSBas.earned.call(addressWcJ3qk4, uintshRRfaa, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXjuqnjo = "xGGuBaB8M6w2RMzMy5eEbEK74RMVkzRCU8FvBh"
		const stringCo7Chw = "p1egQJ9zLvKmffzcbC9"
		const uintKnglejO = BigInt("38")
		const WolfStakingRewardsv4GhYCe = await WolfStakingRewards.new(stringXjuqnjo, stringCo7Chw, uintKnglejO, {from: "0x0000000000000000000000000000000000000001"});
		const uintVdTRwr = BigInt("1102")
		const uintrnUogg = BigInt("1139")
		const uintXYXgL8E = BigInt("1445")
		const uintH0bZnYk = BigInt("1946")
		const addressraUcncT = accounts[2]
		const uint256j9mmCwz = await WolfStakingRewardsv4GhYCe.totalSupplyPerPool.call(uintVdTRwr, {from: accounts[3]});
		const uint8ldqLoiZ = await WolfStakingRewardsv4GhYCe.decimals.call({from: accounts[0]});
		const uint256dLlOszI = await WolfStakingRewardsv4GhYCe.withdraw.call(uintXYXgL8E, uintrnUogg, {from: accounts[2]});
		const stringYuqP90Y = await WolfStakingRewardsv4GhYCe.symbol.call({from: accounts[0]});
		const uint256pkY8A9H = await WolfStakingRewardsv4GhYCe.earned.call(addressraUcncT, uintH0bZnYk, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsv4GhYCe.onlyOwner.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringq6OS1oA = "HuafUFvkJYGINLd1hWX0Yt3RYhxVqssjm08Cdm3HUDa9R1Kmdtm4azQ9tGfpjdrxnPjAF"
		const stringTIa7PpR = "xdiw6W3byLqcmyQY7DgtTcr7cwbpQ7cThc3NGPCpSxfaESnp9xIBauHD111JmJ22Xvg"
		const uintZIATzAz = BigInt("83")
		const WolfStakingRewardsFBEOodo = await WolfStakingRewards.new(stringq6OS1oA, stringTIa7PpR, uintZIATzAz, {from: accounts[5]});
		const uintDHFyO7x = BigInt("1764")
		const uintM1OtT9k = BigInt("329")
		const uintMGgNi2Y = BigInt("740")
		const uintlYuX7r4 = BigInt("1779")
		const addresswiiaFi8 = "0x0000000000000000000000000000000000000001"
		const uint256M02HZBK = await WolfStakingRewardsFBEOodo.withdraw.call(uintM1OtT9k, uintDHFyO7x, {from: accounts[3]});
		const uint256QFoi5L = await WolfStakingRewardsFBEOodo.exit.call(uintMGgNi2Y, {from: accounts[4]});
		await WolfStakingRewardsFBEOodo.nonReentrant.call({from: accounts[1]});
		const uint256la2KeB2 = await WolfStakingRewardsFBEOodo.earned.call(addresswiiaFi8, uintlYuX7r4, {from: accounts[0]});
		await WolfStakingRewardsFBEOodo.onlyOwner.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFbKAF1a = "Moa"
		const stringYz9FjJ0 = "e3n"
		const uint5BnA9X = BigInt("125")
		const WolfStakingRewardsb4EiYU8 = await WolfStakingRewards.new(stringFbKAF1a, stringYz9FjJ0, uint5BnA9X, {from: accounts[4]});
		const uintvMlUBOt = BigInt("1315")
		const uint0ap0eU = BigInt("1924")
		const uint256OoUDrc = await WolfStakingRewardsb4EiYU8.exit.call(uintvMlUBOt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayDCDFEfZ = await WolfStakingRewardsb4EiYU8.updateNotifyRewardAmount.call(uint0ap0eU, {from: accounts[2]});
		await WolfStakingRewardsb4EiYU8.onlyRewardsDistribution.call({from: accounts[2]});
		await WolfStakingRewardsb4EiYU8.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwD9XmJH = "9Itpva1efi0howr3Jbv8abz50LlPl8rnEIsTMtgKTMsYglli"
		const stringuHRa1Xi = "Dkk6H5wYwgVRm0Ytx3Eix6DgxpiPNs5Ms5uxVBFVtOmhSCu6r4E6kf3nqBtXKWtmO6QA6d72ehh4"
		const uintfl4Uq13 = BigInt("49")
		const WolfStakingRewardsJejSqPF = await WolfStakingRewards.new(stringwD9XmJH, stringuHRa1Xi, uintfl4Uq13, {from: accounts[1]});
		const uintjU5mogG = BigInt("531")
		const uintsCyWH3G = BigInt("40")
		const uintwRV9mRQ = BigInt("409")
		const uint256m5VBDq = await WolfStakingRewardsJejSqPF.stake.call(uintsCyWH3G, uintjU5mogG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iNa2TUn = await WolfStakingRewardsJejSqPF.totalSupplyPerPool.call(uintwRV9mRQ, {from: accounts[0]});
		await WolfStakingRewardsJejSqPF.nonReentrant.call({from: accounts[4]});
		const uint87DPZ25 = await WolfStakingRewardsJejSqPF.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringiMFwkHH = "7Ea02FuRVhIkPvLHlhk7rgDhP9AQHKjApGr3riIg1PzJGHo4yxEFEaQkF"
		const stringu8TXSLV = "8wWfX71EI5rtLWTWceakHgLjJM8RCIrJmjkj9sQT5Bs7kv1OU0oxKcxVWr5SXqgrMJPXwA366QV1MSxYHv5xgpv"
		const uintvztrfwv = BigInt("247")
		const WolfStakingRewardsCJl4g6x = await WolfStakingRewards.new(stringiMFwkHH, stringu8TXSLV, uintvztrfwv, {from: accounts[5]});
		const uintsAazsBN = BigInt("1493")
		const uintMs3q9wt = BigInt("1901")
		const addressbX6DoYT = accounts[2]
		await WolfStakingRewardsCJl4g6x.nonReentrant.call({from: accounts[1]});
		await WolfStakingRewardsCJl4g6x.nonReentrant.call({from: accounts[2]});
		const uint256u5et0HK = await WolfStakingRewardsCJl4g6x.exit.call(uintsAazsBN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hAkSOya = await WolfStakingRewardsCJl4g6x.balanceOfPerPool.call(addressbX6DoYT, uintMs3q9wt, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrICnvGW = "6Zy7Bfr8fBWJFoMQrs7SWwuIcqQS"
		const stringjs6Diay = "zAINICjsHNg5I8HjIuFfyIxp5"
		const uintx5obkx9 = BigInt("39")
		const WolfStakingRewardscPIbJrA = await WolfStakingRewards.new(stringrICnvGW, stringjs6Diay, uintx5obkx9, {from: accounts[4]});
		const uintvOfrXWL = BigInt("1991")
		const uintC2A7AjX = BigInt("1453")
		const uintoX67M3z = BigInt("109")
		const uintmHENM3h = BigInt("1636")
		const uintf5OomSj = BigInt("356")
		const uintsYohUwq = BigInt("1465")
		const uint256BMTWS5A = await WolfStakingRewardscPIbJrA.lastTimeRewardApplicable.call(uintvOfrXWL, {from: accounts[4]});
		const uint256sER6e1J = await WolfStakingRewardscPIbJrA.withdrawRemainingBalance.call(uintoX67M3z, uintC2A7AjX, {from: accounts[1]});
		const uint256AKnnorS = await WolfStakingRewardscPIbJrA.exit.call(uintmHENM3h, {from: accounts[1]});
		const uint256YZpxK8Q = await WolfStakingRewardscPIbJrA.withdraw.call(uintsYohUwq, uintf5OomSj, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJuE95cO = "FueaJNh37o9NimI7xwm8R"
		const stringvyxn3Y2 = "UzOpEQf0uLYxjjd2S48e4pt8S5hJ7LFP9bAU253BZZxwv4KzdXrpmVTLhBpZjjnKgBi97iq9xQcG4udzcWKizAtiLgt4vk1oeT"
		const uintsY3cOUe = BigInt("124")
		const WolfStakingRewardslCaa6Cl = await WolfStakingRewards.new(stringJuE95cO, stringvyxn3Y2, uintsY3cOUe, {from: accounts[0]});
		const uintSFExvXy = BigInt("1052")
		const addressbGrIDQs = accounts[4]
		const uintiDINqT7 = BigInt("166")
		const uintaTtn7ze = BigInt("89")
		const uintTepLyNb = BigInt("349")
		const addressK06FKEb = accounts[4]
		const uint256v5jdPVn = await WolfStakingRewardslCaa6Cl.balanceOfPerPool.call(addressbGrIDQs, uintSFExvXy, {from: accounts[1]});
		const uint256arrayy8uWBwA = await WolfStakingRewardslCaa6Cl.updateNotifyRewardAmount.call(uintiDINqT7, {from: accounts[1]});
		const uint256LaNkbeK = await WolfStakingRewardslCaa6Cl.getRewardForDuration.call(uintaTtn7ze, {from: accounts[1]});
		const uint256rHw5Inc = await WolfStakingRewardslCaa6Cl.balanceOfPerPool.call(addressK06FKEb, uintTepLyNb, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGx6HLbF = "ccJxDNmYhF56NuWgIXpQltTvQfPHURFhmJtWibcuS169gXSS0x6yGcBV3Hc8ppkNG18L6QqwcsDVLU6JLsRbJjY43fuJ"
		const stringDXPfVp = "81J4z3rzDRvELZbylXrm7ZNqiJJS5m5a9sjMy1LBKpOR4xzPMuXIedRGPOLUDxztrc9MAhQaqnT2NoI47U278wwsQcXmTMAtQ"
		const uintS6Ay1Ne = BigInt("136")
		const WolfStakingRewardsnJ3Xt5J = await WolfStakingRewards.new(stringGx6HLbF, stringDXPfVp, uintS6Ay1Ne, {from: accounts[2]});
		const uintMYV9oRA = BigInt("847")
		const uintwa5FV9l = BigInt("1109")
		const uintOru26nF = BigInt("1516")
		const uintevvS4Ay = BigInt("1966")
		const uintgxcrc9h = BigInt("976")
		const uint256VcCJKib = await WolfStakingRewardsnJ3Xt5J.stake.call(uintwa5FV9l, uintMYV9oRA, {from: accounts[0]});
		const uint256oZtveu = await WolfStakingRewardsnJ3Xt5J.lastTimeRewardApplicable.call(uintOru26nF, {from: accounts[5]});
		const uint256zCrFNx = await WolfStakingRewardsnJ3Xt5J.stake.call(uintgxcrc9h, uintevvS4Ay, {from: accounts[5]});
		const uint8Rpwshd2 = await WolfStakingRewardsnJ3Xt5J.decimals.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUT55QlC = "acF2T3m0U8TkHeTOix"
		const stringKOSAdoj = "xTexgJLB7R14DWk13oNNST1ybxX95dRnvUGT5kB"
		const uintj7KnfI = BigInt("230")
		const WolfStakingRewardst4pNcVr = await WolfStakingRewards.new(stringUT55QlC, stringKOSAdoj, uintj7KnfI, {from: accounts[2]});
		const uintelVJCLz = BigInt("957")
		const uintnv6hIRW = BigInt("132")
		const uintbA40Nja = BigInt("1022")
		const uintZKIZJBa = BigInt("747")
		const uint256dg94uaR = await WolfStakingRewardst4pNcVr.getRewardForDuration.call(uintelVJCLz, {from: accounts[0]});
		const uint25671PdzV = await WolfStakingRewardst4pNcVr.withdrawRemainingBalance.call(uintbA40Nja, uintnv6hIRW, {from: "0x0000000000000000000000000000000000000001"});
		const uintXkVcPY7 = await WolfStakingRewardst4pNcVr.getReward.call(uintZKIZJBa, {from: accounts[1]});
		await WolfStakingRewardst4pNcVr.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringiqVFXUK = "Wcf7DSFrbvls"
		const stringBAzPb6O = "kdbrn1h1fvMXZnh6VDhAfoweVvFOy4Xga9TPBaTcbQuvcMQOw"
		const uintBuLDbI = BigInt("82")
		const WolfStakingRewardsPQsveUZ = await WolfStakingRewards.new(stringiqVFXUK, stringBAzPb6O, uintBuLDbI, {from: accounts[2]});
		const uintr4MF5bq = BigInt("1207")
		const uintJ62kqZM = BigInt("660")
		const uintfc2HAJd = BigInt("1806")
		const uint256MqAV5dx = await WolfStakingRewardsPQsveUZ.rewardPerToken.call(uintr4MF5bq, {from: accounts[3]});
		const uint256kA4ox0 = await WolfStakingRewardsPQsveUZ.lastTimeRewardApplicable.call(uintJ62kqZM, {from: "0x0000000000000000000000000000000000000001"});
		const uint8ugwa9VI = await WolfStakingRewardsPQsveUZ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256MH3nTs = await WolfStakingRewardsPQsveUZ.lastTimeRewardApplicable.call(uintfc2HAJd, {from: accounts[5]});
		await WolfStakingRewardsPQsveUZ.nonReentrant.call({from: accounts[2]});
		const stringq2tTVU = await WolfStakingRewardsPQsveUZ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTwdx3lY = "VOF2rrAz7Y1utL1YucqKTbmYqyFO4PwRuabRzk2"
		const stringmNDJHt = "hGwi6Gd12PohVXGDMOO7PGvCHv3tCSfWa0U93SHgAAUg"
		const uinthAPru0z = BigInt("65")
		const WolfStakingRewardspo2At3 = await WolfStakingRewards.new(stringTwdx3lY, stringmNDJHt, uinthAPru0z, {from: accounts[1]});
		const uintOiJFQQz = BigInt("1216")
		const uintViblTW = BigInt("1723")
		const uintga0xE9I = BigInt("2014")
		await WolfStakingRewardspo2At3.nonReentrant.call({from: accounts[3]});
		const uint256uwf3h3X = await WolfStakingRewardspo2At3.lastTimeRewardApplicable.call(uintOiJFQQz, {from: accounts[2]});
		const uint256VmevOQ = await WolfStakingRewardspo2At3.stake.call(uintga0xE9I, uintViblTW, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGOKndys = "NxCj8fGpVJYapbCtPz5Hx3RBL6EAhSxOU2xwjjPubh4YpiaWG"
		const stringxZCSq2L = "tDoyiFbp9KReJiGW2jakKJu8MAVCixbGk9DoTpfAh8olvTL9lxVcLKzfO9TRm"
		const uinttmmEp5S = BigInt("3")
		const WolfStakingRewardsaVPZ7Dm = await WolfStakingRewards.new(stringGOKndys, stringxZCSq2L, uinttmmEp5S, {from: accounts[1]});
		const uintgdFGcZO = BigInt("1489")
		const addressP5xvsts = accounts[4]
		const uint8wBRt76 = await WolfStakingRewardsaVPZ7Dm.decimals.call({from: accounts[2]});
		const uint256aMNevpk = await WolfStakingRewardsaVPZ7Dm.balanceOfPerPool.call(addressP5xvsts, uintgdFGcZO, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJPMgVoG = "PRVffzT5YggyqPna7wjeuYzLEWEJneDxS76G"
		const stringaz9TLPF = "VzTUIY4Tcaz9URdAEHUdMoJBaTF9n9f7RAJqq3Pou589aEWnbA7hJ7l1AlyOJqPveK8"
		const uintMXVPows = BigInt("119")
		const WolfStakingRewardscscEexM = await WolfStakingRewards.new(stringJPMgVoG, stringaz9TLPF, uintMXVPows, {from: accounts[4]});
		const uintfwuSlne = BigInt("1404")
		const uintTPPaLi2 = BigInt("64")
		const uintUpBkebq = BigInt("1165")
		const uintVZnHVnj = BigInt("482")
		const uint256JfKcIa1 = await WolfStakingRewardscscEexM.rewardPerToken.call(uintfwuSlne, {from: accounts[0]});
		const uint256xMIpXIq = await WolfStakingRewardscscEexM.withdraw.call(uintUpBkebq, uintTPPaLi2, {from: accounts[1]});
		const uint256xYbUhKZ = await WolfStakingRewardscscEexM.getRewardForDuration.call(uintVZnHVnj, {from: accounts[0]});
		const uint8HMfRUS = await WolfStakingRewardscscEexM.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVXlPsDd = "h9gxTB8vNKGfDLdgWCkrCNJKkqLExvDPdcxW5Et6je3q9TIgFKoAIewyiE4E3NTYFgYGvHTLbBlCprx2qXkguGZeukMSS"
		const stringqUeuHbe = "emmmtD"
		const uintMBQeo6j = BigInt("23")
		const WolfStakingRewardsK9c6Pj8 = await WolfStakingRewards.new(stringVXlPsDd, stringqUeuHbe, uintMBQeo6j, {from: accounts[3]});
		const uintjOj6gt = BigInt("1440")
		const uintvJXxt1g = BigInt("74")
		const uintDEZxPgX = BigInt("57")
		const uint256FLJmsZ5 = await WolfStakingRewardsK9c6Pj8.exit.call(uintjOj6gt, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsK9c6Pj8.onlyOwner.call({from: accounts[5]});
		const uint256arrayp5EOVzb = await WolfStakingRewardsK9c6Pj8.updateNotifyRewardAmount.call(uintvJXxt1g, {from: accounts[1]});
		const uint256oSPd6Bj = await WolfStakingRewardsK9c6Pj8.rewardPerToken.call(uintDEZxPgX, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJNF5Cfu = "MBMkhM2JdjW5fVgAfB8Zx2blQvV98rtn8zb7dkIeT6wi6stdf4x8tIEOHWW4cfmEWdrhD2hu"
		const stringJABOD1r = "57mNUFQTcAeK8EN2LoXxPmsXsmYP5RxPg1vufB3HGLCPS9S"
		const uintfE1Kxmb = BigInt("222")
		const WolfStakingRewardsEj9TCRG = await WolfStakingRewards.new(stringJNF5Cfu, stringJABOD1r, uintfE1Kxmb, {from: "0x0000000000000000000000000000000000000001"});
		const uintjCMHjp = BigInt("616")
		const uintbvCDVsu = BigInt("1592")
		const uintzqbNB6b = BigInt("155")
		const uinti8xYbKh = BigInt("1011")
		const uintrBbgSo3 = BigInt("2")
		const uint256fUs5K3l = await WolfStakingRewardsEj9TCRG.stake.call(uintbvCDVsu, uintjCMHjp, {from: accounts[1]});
		const uint256hj2UaVc = await WolfStakingRewardsEj9TCRG.stake.call(uinti8xYbKh, uintzqbNB6b, {from: accounts[5]});
		const uint256IlZ3C5i = await WolfStakingRewardsEj9TCRG.totalSupplyPerPool.call(uintrBbgSo3, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyJMhfKC = "Iaz3gukgKuRGJBTNWA6bbDfRbNNYt4dQprPAqRe6tgctpFjwydEGnxxJmColAe"
		const stringHd6SWxn = "fkVXGTBYNwIPkc7BTK5fa"
		const uintupDpxZe = BigInt("172")
		const WolfStakingRewardsiZy8ev5 = await WolfStakingRewards.new(stringyJMhfKC, stringHd6SWxn, uintupDpxZe, {from: "0x0000000000000000000000000000000000000001"});
		const uintDIz2bZg = BigInt("2")
		const addressEBQyFI8 = accounts[2]
		const uintrlSBJnu = BigInt("751")
		const uintDfdfSvT = BigInt("1902")
		const uintq8JZCK2 = BigInt("99")
		const uint256zbXHwBz = await WolfStakingRewardsiZy8ev5.earned.call(addressEBQyFI8, uintDIz2bZg, {from: accounts[3]});
		const uint256vX6XBja = await WolfStakingRewardsiZy8ev5.getRewardForDuration.call(uintrlSBJnu, {from: accounts[2]});
		const uint256W1RBk3Q = await WolfStakingRewardsiZy8ev5.lastTimeRewardApplicable.call(uintDfdfSvT, {from: accounts[1]});
		const uint256CICDiFD = await WolfStakingRewardsiZy8ev5.rewardPerToken.call(uintq8JZCK2, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwZmHqvT = "YzfNjvoQybZaSLPJcn39nazWi0fvq6IHSMOtGtusAbtxH1PmVxQAliV88bJLoQuhUNZRn9me"
		const stringEFdZVcw = "pDpOqcw"
		const uintPj4o4ZK = BigInt("104")
		const WolfStakingRewardsCJbecTN = await WolfStakingRewards.new(stringwZmHqvT, stringEFdZVcw, uintPj4o4ZK, {from: accounts[1]});
		const uintuT1tqVu = BigInt("22")
		const uintUQ367Ib = BigInt("1019")
		const stringXAFo1yu = await WolfStakingRewardsCJbecTN.symbol.call({from: accounts[2]});
		const uint256paAzamy = await WolfStakingRewardsCJbecTN.withdrawRemainingBalance.call(uintUQ367Ib, uintuT1tqVu, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLmag5Y7 = "lZSCNjpDWL5Wq3w0HoBiQnwHP3yBNSN5Z4QFXdGgHPrtU72THaSwhC61flwegwVujjTmhqI6IxYFvEXn485bt5sRBeS"
		const stringBvu2tcf = "wOnMuCYvrkmb1iUIdFEBrhUYRUlXjtuqXZJLAjbAgE2BNzIFxOCKzOwzmU"
		const uintuVcyfrW = BigInt("227")
		const WolfStakingRewardsmsH4Edw = await WolfStakingRewards.new(stringLmag5Y7, stringBvu2tcf, uintuVcyfrW, {from: accounts[2]});
		const uinto6FSBcI = BigInt("1767")
		const uint8AVOjYK9 = await WolfStakingRewardsmsH4Edw.decimals.call({from: accounts[0]});
		await WolfStakingRewardsmsH4Edw.onlyOwner.call({from: accounts[4]});
		const uint256uzuNkw6 = await WolfStakingRewardsmsH4Edw.exit.call(uinto6FSBcI, {from: accounts[2]});
		await WolfStakingRewardsmsH4Edw.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringb01mBnQ = "qXcm5xJURe5kg1IrUCxykNLVELYYRwXUBwulHOCeBd42"
		const stringkrYU888 = "lqkwoujzpEHkDKGehUdta3VmM18qAue4HgcsggRDIqIZtH5NdRw3nHf3YUjoDZM1eym2pnSepFQN3VZ9tWFItu6dG"
		const uintUjMLYR = BigInt("161")
		const WolfStakingRewardsjmrQzdB = await WolfStakingRewards.new(stringb01mBnQ, stringkrYU888, uintUjMLYR, {from: accounts[3]});
		const uintq2j1cry = BigInt("2")
		const uintm3JYuk = BigInt("1969")
		const uint256OKIrRlY = await WolfStakingRewardsjmrQzdB.withdrawRemainingBalance.call(uintm3JYuk, uintq2j1cry, {from: accounts[4]});
		const uint8DJoWpa9 = await WolfStakingRewardsjmrQzdB.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbsWJyB = "rhtGlQHnU5qbcq5vZJ9vb9rZ52jKI17zz5jHvlyGgSQTCXrJJlvKUPP36rptL5OmTUVD3znNYE512kpk9kp"
		const stringCOelemz = "lButWrMszj6RsK1g0WIulXzShbxrF7z76Wbkx9oPFKFbTVvIg8ZWBbBf4"
		const uintDQUvllb = BigInt("31")
		const WolfStakingRewardsDdfIdS = await WolfStakingRewards.new(stringbsWJyB, stringCOelemz, uintDQUvllb, {from: accounts[0]});
		const uintqhH5bug = BigInt("1976")
		const uintV2Jgd4e = BigInt("972")
		const uinthgLReIK = BigInt("807")
		const uintHZxcd2N = BigInt("355")
		const uintqW5yWjz = BigInt("631")
		const uint256RrXaR0p = await WolfStakingRewardsDdfIdS.totalSupplyPerPool.call(uintqhH5bug, {from: accounts[0]});
		const uint256o8BsLj = await WolfStakingRewardsDdfIdS.exit.call(uintV2Jgd4e, {from: accounts[5]});
		const stringewaUXTB = await WolfStakingRewardsDdfIdS.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iKcphTS = await WolfStakingRewardsDdfIdS.withdraw.call(uintHZxcd2N, uinthgLReIK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IYDQjfK = await WolfStakingRewardsDdfIdS.rewardPerToken.call(uintqW5yWjz, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeoHhnLD = "deFqP4nswQPYkWo524UxOsTzaGVIXGovqpwcIf8bVt3fYxanXfVQMFIHFHV5mKoT2EBBe"
		const stringJzL4nF2 = "yjBeCppsDROA6EqKQdDnUgKNt9LkdJpVTQuwqce6YSaAS3lmACTlQeGr939oxffIAe2179rdrO5tJS6vxHncqxckT2Ur"
		const uintPBAVQ95 = BigInt("91")
		const WolfStakingRewardsjS0bNV = await WolfStakingRewards.new(stringeoHhnLD, stringJzL4nF2, uintPBAVQ95, {from: accounts[1]});
		const uintjWdmBJn = BigInt("1415")
		const uintaIbnhuX = BigInt("569")
		const uintnAAgnYn = BigInt("1586")
		const uintoGy8J1d = BigInt("1613")
		const uintQluzbMB = BigInt("496")
		const uintuvs4zVI = BigInt("1988")
		const addressZOaWhhy = accounts[1]
		const uintrHhuIzv = BigInt("787")
		const addressiYupFEn = accounts[3]
		const uint256ZNpHcNi = await WolfStakingRewardsjS0bNV.rewardPerToken.call(uintjWdmBJn, {from: accounts[1]});
		const uint256dmlqLQ = await WolfStakingRewardsjS0bNV.lastTimeRewardApplicable.call(uintaIbnhuX, {from: accounts[0]});
		const uint256G21NaIn = await WolfStakingRewardsjS0bNV.exit.call(uintnAAgnYn, {from: accounts[4]});
		const uint256nXLfgxR = await WolfStakingRewardsjS0bNV.withdraw.call(uintQluzbMB, uintoGy8J1d, {from: accounts[1]});
		const uint256gxEYrge = await WolfStakingRewardsjS0bNV.balanceOfPerPool.call(addressZOaWhhy, uintuvs4zVI, {from: accounts[4]});
		const addressf76SiZe = await WolfStakingRewardsjS0bNV.updateReward.call(addressiYupFEn, uintrHhuIzv, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCiQlip = "anzTcL8nEUHEN4xQGYylQ17j4p0r9p3EKJYiTh2zpDYYkp3fP3638BAy8dAHqlku480hAIARcvIwxNCf4"
		const stringfOURdk = "fGiS5kNJoVkW6wWvahJXWHjxjlwVdbYBJecvIokKQkg6njD5UoVsGE4yk1mjukvPTtNLdkOHZxFITG2TAU9KmIZ"
		const uintnPhQ3JT = BigInt("39")
		const WolfStakingRewardsZGyurj = await WolfStakingRewards.new(stringCiQlip, stringfOURdk, uintnPhQ3JT, {from: accounts[4]});
		const uintY12X0Bn = BigInt("1910")
		const addressuAKu0m = accounts[2]
		const uintFVENULo = BigInt("241")
		const addressY26sKpm = accounts[1]
		await WolfStakingRewardsZGyurj.nonReentrant.call({from: accounts[0]});
		const addressmyDjSgQ = await WolfStakingRewardsZGyurj.updateReward.call(addressuAKu0m, uintY12X0Bn, {from: accounts[3]});
		await WolfStakingRewardsZGyurj.nonReentrant.call({from: accounts[0]});
		const uint256t4bdfSO = await WolfStakingRewardsZGyurj.balanceOfPerPool.call(addressY26sKpm, uintFVENULo, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringK7PNJw5 = "VO3SpUsfHYojEPjfS4hEmXKwIhJ2RuDdfUANF"
		const stringFFFGp3h = "EVVpVPCwY45TpnbtPb3kKYOmShfq1x2ZwFQVYc3iGXZydXmKFqBzgULCxosYb6ooqXBF"
		const uintpefymcD = BigInt("235")
		const WolfStakingRewardsYuVZVT = await WolfStakingRewards.new(stringK7PNJw5, stringFFFGp3h, uintpefymcD, {from: accounts[3]});
		const uintDMV11N3 = BigInt("506")
		const uintjWAj15 = BigInt("1531")
		const uintcK5eaHy = BigInt("1228")
		const uintfK6IjUT = BigInt("771")
		const uint256qzRFAHp = await WolfStakingRewardsYuVZVT.withdrawRemainingBalance.call(uintjWAj15, uintDMV11N3, {from: accounts[1]});
		const uint256iYNX1rC = await WolfStakingRewardsYuVZVT.stake.call(uintfK6IjUT, uintcK5eaHy, {from: accounts[3]});
		const uint8EhXqbPQ = await WolfStakingRewardsYuVZVT.decimals.call({from: accounts[3]});
	});
})