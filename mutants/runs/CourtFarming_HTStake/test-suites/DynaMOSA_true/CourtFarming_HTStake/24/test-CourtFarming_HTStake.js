const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeU3EG2d5 = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintY8SPpSn = BigInt("113")
		const uinteqLhBuu = BigInt("30")
		const uintJOfIR2I = BigInt("1130")
		const uint256yOzTZme = await CourtFarming_HTStakeU3EG2d5.incvRewardInfo.call({from: accounts[0]});
		await CourtFarming_HTStakeU3EG2d5.changeStakeParameters.call(uintJOfIR2I, uinteqLhBuu, uintY8SPpSn, {from: accounts[2]});

		await expect(CourtFarming_HTStakeU3EG2d5.changeStakeParameters.call(uintJOfIR2I, uinteqLhBuu, uintY8SPpSn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeiYrq0XH = await CourtFarming_HTStake.new({from: accounts[5]});
		const addresscITzJr0 = accounts[4]
		const uintfuEsq41 = BigInt("1000")
		const uintXfSwTC4 = BigInt("118")
		const uintv3UaMef = BigInt("1754")
		const uint256sSY0pZg = await CourtFarming_HTStakeiYrq0XH.incvRewardInfo.call({from: accounts[4]});
		const uint256N2m3nTo = await CourtFarming_HTStakeiYrq0XH.lastUpdateBlock.call({from: accounts[1]});
		const addressBoZkND = await CourtFarming_HTStakeiYrq0XH.updateReward.call(addresscITzJr0, {from: accounts[2]});
		await CourtFarming_HTStakeiYrq0XH.changeStakeParameters.call(uintv3UaMef, uintXfSwTC4, uintfuEsq41, {from: accounts[2]});

		assert.equal(uint256N2m3nTo, BigInt("1692"))
		await expect(CourtFarming_HTStakeiYrq0XH.changeStakeParameters.call(uintv3UaMef, uintXfSwTC4, uintfuEsq41, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeaWGDV44 = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintGw5jxi0 = BigInt("1256")
		const addressxJAdZWk = accounts[1]
		const addressoccj8Lw = accounts[3]
		const boolhw2BzBj = await CourtFarming_HTStakeaWGDV44.stakeIncvRewards.call(uintGw5jxi0, {from: accounts[3]});
		const addressVdk6zNP = await CourtFarming_HTStakeaWGDV44.updateReward.call(addressxJAdZWk, {from: accounts[0]});
		const addressvg7ry0r = await CourtFarming_HTStakeaWGDV44.updateReward.call(addressoccj8Lw, {from: accounts[2]});

		assert.equal(boolhw2BzBj, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekrAqwFb = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintHNk4IO8 = BigInt("1816")
		const uintM6tBd97 = BigInt("384")
		const addressWdhQ5KT = accounts[2]
		const boolicEyKy = await CourtFarming_HTStakekrAqwFb.stakeIncvRewards.call(uintHNk4IO8, {from: accounts[3]});
		const uint256xxhRd6O = await CourtFarming_HTStakekrAqwFb.totalStaked.call({from: accounts[4]});
		const uint256JDoDdpd = await CourtFarming_HTStakekrAqwFb.lastUpdateBlock.call({from: accounts[5]});
		const boolnTLTe6p = await CourtFarming_HTStakekrAqwFb.stakeIncvRewards.call(uintM6tBd97, {from: accounts[0]});
		const addressZid2ZGB = await CourtFarming_HTStakekrAqwFb.getBeneficiaryInfo.call(addressWdhQ5KT, {from: accounts[5]});
		const uint256c8NBw6m = await CourtFarming_HTStakekrAqwFb.incvRewardInfo.call({from: accounts[0]});

		assert.equal(boolicEyKy, false)
		assert.equal(boolnTLTe6p, false)
		assert.equal(uint256JDoDdpd, BigInt("1692"))
		assert.equal(uint256xxhRd6O, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeLElnQy = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressNzsy4nk = accounts[1]
		const uintcRgWFon = BigInt("2023")
		const uintPUnjLXq = BigInt("1452")
		const addressCb1IZSO = await CourtFarming_HTStakeLElnQy.setCourtStake.call(addressNzsy4nk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ydpH1Tv = await CourtFarming_HTStakeLElnQy.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256aBHjdtI = await CourtFarming_HTStakeLElnQy.stake.call(uintcRgWFon, {from: accounts[4]});
		const uint256a08qJI = await CourtFarming_HTStakeLElnQy.stake.call(uintPUnjLXq, {from: accounts[3]});

		await expect(CourtFarming_HTStakeLElnQy.setCourtStake.call(addressNzsy4nk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeouNsyZ = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintp7ayb4E = BigInt("580")
		const uinthXk5ElB = BigInt("1364")
		const uintcK2uE7s = BigInt("2009")
		const uintJ4nb1m6 = BigInt("869")
		const uintBgWxw84 = BigInt("213")
		const uintCbEvcjN = BigInt("1248")
		const boolSm6oh6V = await CourtFarming_HTStakeouNsyZ.stakeIncvRewards.call(uintp7ayb4E, {from: accounts[0]});
		const uint256OHoJwB = await CourtFarming_HTStakeouNsyZ.incvRewardClaim.call({from: accounts[2]});
		const boolTimqC6R = await CourtFarming_HTStakeouNsyZ.stakeIncvRewards.call(uinthXk5ElB, {from: accounts[5]});
		const uint256syjBIAN = await CourtFarming_HTStakeouNsyZ.blockNumber.call({from: accounts[2]});
		const uint256I9gzDbi = await CourtFarming_HTStakeouNsyZ.stake.call(uintcK2uE7s, {from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_HTStakeouNsyZ.changeStakeParameters.call(uintCbEvcjN, uintBgWxw84, uintJ4nb1m6, {from: accounts[2]});

		assert.equal(boolSm6oh6V, false)
		assert.equal(boolTimqC6R, false)
		assert.equal(uint256OHoJwB, BigInt("0"))
		assert.equal(uint256syjBIAN, BigInt("1692"))
		await expect(CourtFarming_HTStakeouNsyZ.stake.call(uintcK2uE7s, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake9n0w6r = await CourtFarming_HTStake.new({from: accounts[4]});
		const boolpThPzK5 = true
		const uintyOhX0TX = BigInt("1299")
		const addresst7Tq9Rr = accounts[2]
		const uintVF65Yw = BigInt("1614")
		const address11a1yE = accounts[5]
		const uinteNQQR0M = BigInt("1384")
		const uint256bmvsXm8 = await CourtFarming_HTStake9n0w6r.unstake.call(uintyOhX0TX, boolpThPzK5, {from: accounts[0]});
		const uint256sbOdxE = await CourtFarming_HTStake9n0w6r.rewards.call(addresst7Tq9Rr, {from: accounts[1]});
		const uint256RDagEmU = await CourtFarming_HTStake9n0w6r.expectedRewardsToday.call(uintVF65Yw, {from: accounts[5]});
		const addressjidE6wl = await CourtFarming_HTStake9n0w6r.updateReward.call(address11a1yE, {from: accounts[4]});
		const uint256FJTHxQ = await CourtFarming_HTStake9n0w6r.incvRewardInfo.call({from: accounts[2]});
		const uint256VrFFQvB = await CourtFarming_HTStake9n0w6r.expectedRewardsToday.call(uinteNQQR0M, {from: accounts[4]});

		await expect(CourtFarming_HTStake9n0w6r.unstake.call(uintyOhX0TX, boolpThPzK5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqf9hWUj = await CourtFarming_HTStake.new({from: accounts[4]});
		const addresspn5b1at = accounts[4]
		const addressp8kz63y = accounts[3]
		const addressUHB5fxL = "0x0000000000000000000000000000000000000001"
		const uint256QKg9sh8 = await CourtFarming_HTStakeqf9hWUj.balanceOf.call(addresspn5b1at, {from: accounts[4]});
		const uint256jsPhOgK = await CourtFarming_HTStakeqf9hWUj.balanceOf.call(addressp8kz63y, {from: accounts[5]});
		const uint256tnXzvi = await CourtFarming_HTStakeqf9hWUj.incvRewardInfo.call({from: accounts[2]});
		const addressjDQVKBl = await CourtFarming_HTStakeqf9hWUj.getBeneficiaryInfo.call(addressUHB5fxL, {from: accounts[4]});
		const uint256owCzEv4 = await CourtFarming_HTStakeqf9hWUj.totalStaked.call({from: accounts[0]});

		assert.equal(uint256QKg9sh8, BigInt("0"))
		assert.equal(uint256jsPhOgK, BigInt("0"))
		assert.equal(uint256owCzEv4, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeHsZ0g6f = await CourtFarming_HTStake.new({from: accounts[3]});
		const addresswkYUxTK = "0x0000000000000000000000000000000000000001"
		const uintvm9ozAT = BigInt("878")
		const uintjgOfAlM = BigInt("654")
		const uintur6qvDB = BigInt("1461")
		const addressEumQCsN = await CourtFarming_HTStakeHsZ0g6f.updateReward.call(addresswkYUxTK, {from: accounts[4]});
		const uint256hl6S6X = await CourtFarming_HTStakeHsZ0g6f.expectedRewardsToday.call(uintvm9ozAT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ISMcowE = await CourtFarming_HTStakeHsZ0g6f.stake.call(uintjgOfAlM, {from: accounts[1]});
		const uint256EZeAUe7 = await CourtFarming_HTStakeHsZ0g6f.expectedRewardsToday.call(uintur6qvDB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeHsZ0g6f.stake.call(uintjgOfAlM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekrAqwFb = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintz6NOUia = BigInt("1816")
		const uintbT42O0S = BigInt("241")
		const uintkZY3rhj = BigInt("465")
		const uintHPJn9bk = BigInt("1666")
		const uintMRFfx0d = BigInt("384")
		const addressmcWmBux = accounts[2]
		const uintjbRyCJj = BigInt("732")
		const uintl5P7RC = BigInt("1100")
		const uintaykyKpz = BigInt("47")
		const boolicEyKy = await CourtFarming_HTStakekrAqwFb.stakeIncvRewards.call(uintz6NOUia, {from: accounts[3]});
		const uint256NAp9EY1 = await CourtFarming_HTStakekrAqwFb._stakeParametrsCalculation.call(uintHPJn9bk, uintkZY3rhj, uintbT42O0S, {from: accounts[1]});
		const uint256xxhRd6O = await CourtFarming_HTStakekrAqwFb.totalStaked.call({from: accounts[4]});
		const uint256JDoDdpd = await CourtFarming_HTStakekrAqwFb.lastUpdateBlock.call({from: accounts[5]});
		const boolnTLTe6p = await CourtFarming_HTStakekrAqwFb.stakeIncvRewards.call(uintMRFfx0d, {from: accounts[0]});
		const addressZid2ZGB = await CourtFarming_HTStakekrAqwFb.getBeneficiaryInfo.call(addressmcWmBux, {from: accounts[5]});
		await CourtFarming_HTStakekrAqwFb.changeStakeParameters.call(uintaykyKpz, uintl5P7RC, uintjbRyCJj, {from: accounts[4]});
		const uint256c8NBw6m = await CourtFarming_HTStakekrAqwFb.incvRewardInfo.call({from: accounts[0]});

		assert.equal(boolicEyKy, false)
		await expect(CourtFarming_HTStakekrAqwFb._stakeParametrsCalculation.call(uintHPJn9bk, uintkZY3rhj, uintbT42O0S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake9n0w6r = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressrdFU7rt = accounts[2]
		const addresshXKTGzf = accounts[6]
		const uintZlPQyt7 = BigInt("1662")
		const uintriAgQKX = BigInt("819")
		const uintMbRiIJB = BigInt("1328")
		const uint256sbOdxE = await CourtFarming_HTStake9n0w6r.rewards.call(addressrdFU7rt, {from: accounts[1]});
		const addressjidE6wl = await CourtFarming_HTStake9n0w6r.updateReward.call(addresshXKTGzf, {from: accounts[4]});
		const uint256FJTHxQ = await CourtFarming_HTStake9n0w6r.incvRewardInfo.call({from: accounts[2]});
		await CourtFarming_HTStake9n0w6r.changeStakeParameters.call(uintMbRiIJB, uintriAgQKX, uintZlPQyt7, {from: accounts[4]});

		await expect(CourtFarming_HTStake9n0w6r.changeStakeParameters.call(uintMbRiIJB, uintriAgQKX, uintZlPQyt7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeU3EG2d5 = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressYulNN9v = accounts[5]
		const addressH03cpuQ = await CourtFarming_HTStakeU3EG2d5.setCourtStake.call(addressYulNN9v, {from: accounts[3]});
		const uint256bNi1b3r = await CourtFarming_HTStakeU3EG2d5.getCurrentTime.call({from: accounts[4]});
		const uint256yOzTZme = await CourtFarming_HTStakeU3EG2d5.incvRewardInfo.call({from: accounts[0]});

		await expect(CourtFarming_HTStakeU3EG2d5.setCourtStake.call(addressYulNN9v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeaZrL9Au = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxg0STpI = accounts[1]
		const addressayUrgWJ = accounts[3]
		const uintbWyM7IR = BigInt("723")
		const uint256w2BHCh = await CourtFarming_HTStakeaZrL9Au.lastUpdateBlock.call({from: accounts[2]});
		const addressKtEwTOI = await CourtFarming_HTStakeaZrL9Au.setCourtStake.call(addressxg0STpI, {from: accounts[0]});
		const addressPDP2udX = await CourtFarming_HTStakeaZrL9Au.getBeneficiaryInfo.call(addressayUrgWJ, {from: accounts[5]});
		const uint256UurlDcg = await CourtFarming_HTStakeaZrL9Au.expectedRewardsToday.call(uintbWyM7IR, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeU3EG2d5 = await CourtFarming_HTStake.new({from: accounts[3]});
		const boolllY87jT = true
		const uintldZqQGg = BigInt("0")
		const addressQJEHTWA = accounts[4]
		const uint256rX9QGsP = await CourtFarming_HTStakeU3EG2d5.unstake.call(uintldZqQGg, boolllY87jT, {from: accounts[3]});
		const addressocUekQ1 = await CourtFarming_HTStakeU3EG2d5.setCourtStake.call(addressQJEHTWA, {from: accounts[2]});

		await expect(CourtFarming_HTStakeU3EG2d5.setCourtStake.call(addressQJEHTWA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekrAqwFb = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintmSSVg6K = BigInt("1816")
		const addresspZXWUAK = accounts[0]
		const uintvH5J8zh = BigInt("386")
		const uintS2bcrt = BigInt("0")
		const uintDJYSaCl = BigInt("1092")
		const boolicEyKy = await CourtFarming_HTStakekrAqwFb.stakeIncvRewards.call(uintmSSVg6K, {from: accounts[3]});
		const addressX6a0k30 = await CourtFarming_HTStakekrAqwFb.getBeneficiaryInfo.call(addresspZXWUAK, {from: accounts[5]});
		const uint256JDoDdpd = await CourtFarming_HTStakekrAqwFb.lastUpdateBlock.call({from: accounts[5]});
		const boolnTLTe6p = await CourtFarming_HTStakekrAqwFb.stakeIncvRewards.call(uintvH5J8zh, {from: accounts[0]});
		const uint256vKqwMIx = await CourtFarming_HTStakekrAqwFb.stake.call(uintS2bcrt, {from: accounts[2]});
		const uint256VK8km5s = await CourtFarming_HTStakekrAqwFb.expectedRewardsToday.call(uintDJYSaCl, {from: accounts[2]});

		assert.equal(boolicEyKy, false)
		assert.equal(boolnTLTe6p, false)
		assert.equal(uint256JDoDdpd, BigInt("1692"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekxC4bnB = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintT2HW9MY = BigInt("76")
		const uintetjtQQc = BigInt("0")
		const uintTXWfwKH = BigInt("1631")
		const addresszWn86zY = accounts[1]
		const uint256Owbo3v = await CourtFarming_HTStakekxC4bnB.expectedRewardsToday.call(uintT2HW9MY, {from: accounts[4]});
		const boolxule8f3 = await CourtFarming_HTStakekxC4bnB.stakeIncvRewards.call(uintetjtQQc, {from: accounts[4]});
		const boolfDqmkC3 = await CourtFarming_HTStakekxC4bnB.stakeIncvRewards.call(uintTXWfwKH, {from: accounts[0]});
		const addressfmfVxP8 = await CourtFarming_HTStakekxC4bnB.setCourtStake.call(addresszWn86zY, {from: accounts[5]});

		assert.equal(boolfDqmkC3, false)
		assert.equal(boolxule8f3, false)
		await expect(CourtFarming_HTStakekxC4bnB.setCourtStake.call(addresszWn86zY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})