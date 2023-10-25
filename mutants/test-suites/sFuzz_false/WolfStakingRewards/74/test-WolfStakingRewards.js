const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressyG8Ai0X = accounts[4]
		const addressaVjZIOY = accounts[0]
		const addresss1CoCFO = accounts[5]
		const WolfStakingRewardsY1VP8dF = await WolfStakingRewards.new(addressyG8Ai0X, addressaVjZIOY, addresss1CoCFO, {from: accounts[3]});
		const uintNcDZh9s = BigInt("538")
		const uintB3nD3GC = BigInt("173")
		const uintJ8bvlsU = BigInt("1237")
		const addresstHvlcY0 = accounts[4]
		const uintoLfmoRT = BigInt("329")
		const uintjBusL7F = BigInt("1084")
//		const uint256arrayd1FuGyP = await WolfStakingRewardsY1VP8dF.updateNotifyRewardAmount.call(uintNcDZh9s, {from: accounts[2]});
//		const uint256QnDszHt = await WolfStakingRewardsY1VP8dF.totalSupplyPerPool.call(uintB3nD3GC, {from: accounts[3]});
//		const uint256R99kqNB = await WolfStakingRewardsY1VP8dF.earned.call(addresstHvlcY0, uintJ8bvlsU, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256fgLAdWj = await WolfStakingRewardsY1VP8dF.withdraw.call(uintjBusL7F, uintoLfmoRT, {from: accounts[0]});

		await expect(WolfStakingRewardsY1VP8dF.updateNotifyRewardAmount.call(uintNcDZh9s, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressQOvUHQ = accounts[4]
		const addressUvwCNqM = accounts[0]
		const addressryVLzAZ = accounts[4]
		const WolfStakingRewardstMX9Lur = await WolfStakingRewards.new(addressQOvUHQ, addressUvwCNqM, addressryVLzAZ, {from: accounts[0]});
		const uintvKPznqU = BigInt("1104")
		const uintza8W8iz = BigInt("1341")
		const uintQlBc57f = BigInt("489")
		const addresss5zTcH2 = accounts[3]
		const uintyT0ufiV = BigInt("1123")
		const addressQ7v6JLq = "0x0000000000000000000000000000000000000001"
		const uintD6JdC0F = BigInt("173")
//		const stringbeca3YL = await WolfStakingRewardstMX9Lur.name.call({from: accounts[2]});
//		const uint256vdNBBRX = await WolfStakingRewardstMX9Lur.stake.call(uintza8W8iz, uintvKPznqU, {from: accounts[5]});
//		const addressSj7dGZn = await WolfStakingRewardstMX9Lur.updateReward.call(addresss5zTcH2, uintQlBc57f, {from: accounts[3]});
//		const uint256fdXfiRk = await WolfStakingRewardstMX9Lur.balanceOfPerPool.call(addressQ7v6JLq, uintyT0ufiV, {from: accounts[4]});
//		const uint256bf35gt = await WolfStakingRewardstMX9Lur.getRewardForDuration.call(uintD6JdC0F, {from: accounts[4]});
//		await WolfStakingRewardstMX9Lur.onlyRewardsDistribution.call({from: accounts[4]});

		await expect(WolfStakingRewardstMX9Lur.name.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringEF9Oarg = "yqe3EL5DUiphmjbKyA8mZJtVYUzeTNYpkF9ViKocXfKQynmx2w"
		const stringWKNJHsS = "YuRDHNXmD1ODzx46L7zA"
		const uintzlbH4xX = BigInt("134")
		const WolfStakingRewardsSCCTs6 = await WolfStakingRewards.new(stringEF9Oarg, stringWKNJHsS, uintzlbH4xX, {from: accounts[5]});
		const uintmsZOdNN = BigInt("1416")
		const uintEXTJHQI = BigInt("1981")
		const uintSmFI1sR = BigInt("864")
		const uint256t41sUxs = await WolfStakingRewardsSCCTs6.rewardPerToken.call(uintmsZOdNN, {from: accounts[4]});
		const uint256E68VQO = await WolfStakingRewardsSCCTs6.withdrawRemainingBalance.call(uintSmFI1sR, uintEXTJHQI, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const string1mnYzx = "B4TexUtdfiAhd4AcjWpBhq9R6KtMrmcZHGWY8DlE5xCNVtjhFw7ZxyWtu2eSonsDAxXF1"
		const stringxOSaNy = "apk4g9Rdz9KiGEwWj42lpGb6K5q3GC6Rxu4nght6zMIkV3QbDp4UbLZvKaFTpNMbCFB0zTZO8A"
		const uintOXXF7VJ = BigInt("221")
		const WolfStakingRewardsY7NRfu = await WolfStakingRewards.new(string1mnYzx, stringxOSaNy, uintOXXF7VJ, {from: accounts[3]});
		const uintEvZjDx3 = BigInt("1946")
		const uintvMLPkc = BigInt("1693")
		const uintU2JFQGH = BigInt("1494")
		const addressudWw9E = accounts[1]
		const uintzcNoGBE = BigInt("1220")
		const uintrw1W2lO = BigInt("894")
		const uintwahEwWa = BigInt("772")
		const uint28FEVf = BigInt("426")
		const uint256sLPp3Lt = await WolfStakingRewardsY7NRfu.withdrawRemainingBalance.call(uintvMLPkc, uintEvZjDx3, {from: accounts[4]});
		const uint256Er1uZOQ = await WolfStakingRewardsY7NRfu.earned.call(addressudWw9E, uintU2JFQGH, {from: accounts[0]});
		const uint2569aZVfP = await WolfStakingRewardsY7NRfu.rewardPerToken.call(uintzcNoGBE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PLj6M8C = await WolfStakingRewardsY7NRfu.withdrawRemainingBalance.call(uintwahEwWa, uintrw1W2lO, {from: accounts[4]});
		const uint256arrayeU7AIZ = await WolfStakingRewardsY7NRfu.updateNotifyRewardAmount.call(uint28FEVf, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressYrOCfod = accounts[3]
		const addressokGQhFx = accounts[2]
		const addressfa7jNi3 = accounts[4]
		const WolfStakingRewardsG0HxSc0 = await WolfStakingRewards.new(addressYrOCfod, addressokGQhFx, addressfa7jNi3, {from: accounts[4]});
		const uintkH9tTto = BigInt("905")
		const addressdMYWyME = accounts[1]
		const uintjaNRukE = BigInt("1700")
		const addressXBY9xiq = accounts[4]
		const uintukZJC7 = BigInt("1177")
		const addressydP7ULT = accounts[5]
		const uint256RyoQoMf = await WolfStakingRewardsG0HxSc0.balanceOfPerPool.call(addressdMYWyME, uintkH9tTto, {from: accounts[5]});
		const uint256ktJGq4y = await WolfStakingRewardsG0HxSc0.earned.call(addressXBY9xiq, uintjaNRukE, {from: accounts[0]});
//		const addressY94qIgO = await WolfStakingRewardsG0HxSc0.updateReward.call(addressydP7ULT, uintukZJC7, {from: accounts[1]});
//		const uint8KxGw9SR = await WolfStakingRewardsG0HxSc0.decimals.call({from: accounts[3]});
//		await WolfStakingRewardsG0HxSc0.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256RyoQoMf, BigInt("0"))
		assert.equal(uint256ktJGq4y, BigInt("0"))
		await expect(WolfStakingRewardsG0HxSc0.updateReward.call(addressydP7ULT, uintukZJC7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressYXMsVUY = "0x0000000000000000000000000000000000000001"
		const addressgBUjWt = "0x0000000000000000000000000000000000000001"
		const addressB3wlaQt = accounts[5]
		const WolfStakingRewardscJDclvD = await WolfStakingRewards.new(addressYXMsVUY, addressgBUjWt, addressB3wlaQt, {from: accounts[5]});
		const uintsa3g9t = BigInt("445")
		const uinth4idU85 = BigInt("1526")
		const uintcKuFEnm = BigInt("94")
		const uintJ8N2nkQ = BigInt("511")
		const uintWuN1kP = BigInt("1939")
		const addressHBcaEvO = accounts[1]
		const uint256djMxtsY = await WolfStakingRewardscJDclvD.lastTimeRewardApplicable.call(uintsa3g9t, {from: accounts[1]});
//		const uint256tzKHw98 = await WolfStakingRewardscJDclvD.withdraw.call(uintcKuFEnm, uinth4idU85, {from: accounts[3]});
//		await WolfStakingRewardscJDclvD.nonReentrant.call({from: accounts[5]});
//		const uint256jDnyEEr = await WolfStakingRewardscJDclvD.rewardPerToken.call(uintJ8N2nkQ, {from: accounts[1]});
//		const stringXX6uu6I = await WolfStakingRewardscJDclvD.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256BVUJXaV = await WolfStakingRewardscJDclvD.balanceOfPerPool.call(addressHBcaEvO, uintWuN1kP, {from: accounts[3]});

		assert.equal(uint256djMxtsY, BigInt("0"))
		await expect(WolfStakingRewardscJDclvD.withdraw.call(uintcKuFEnm, uinth4idU85, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringl2QttkP = "833hmWflMKikdAJk"
		const stringBkfMadM = "g8jqwkfW2kzAvImePaHUdi7FbIVguH9buvY8eGJ6a4Wqr2rShaBIzjuNxFbc6t3lYptmPfE53PSXTv42FKRyZVzzCzq5s"
		const uintAUvjHXh = BigInt("147")
		const WolfStakingRewardsFRA2vf = await WolfStakingRewards.new(stringl2QttkP, stringBkfMadM, uintAUvjHXh, {from: accounts[4]});
		const uintkfc51jT = BigInt("690")
		await WolfStakingRewardsFRA2vf.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EswYLr = await WolfStakingRewardsFRA2vf.totalSupplyPerPool.call(uintkfc51jT, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsFRA2vf.nonReentrant.call({from: accounts[4]});
		const stringhuFLiml = await WolfStakingRewardsFRA2vf.name.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressNmxQUt = accounts[3]
		const addressqrkawh6 = accounts[2]
		const addressWHc00g = accounts[4]
		const WolfStakingRewardsG0HxSc0 = await WolfStakingRewards.new(addressNmxQUt, addressqrkawh6, addressWHc00g, {from: accounts[4]});
		const uintvitCVt9 = BigInt("905")
		const addressAC7VYSK = accounts[1]
		const uintclmT29W = BigInt("1700")
		const addresswJIpCxb = accounts[4]
		const uintyDZrH0z = BigInt("218")
		const uintBSyCHw = BigInt("1177")
		const addressemxnThN = accounts[5]
		const uint256RyoQoMf = await WolfStakingRewardsG0HxSc0.balanceOfPerPool.call(addressAC7VYSK, uintvitCVt9, {from: accounts[5]});
		const uint256ktJGq4y = await WolfStakingRewardsG0HxSc0.earned.call(addresswJIpCxb, uintclmT29W, {from: accounts[0]});
		const uint256UvBIDjY = await WolfStakingRewardsG0HxSc0.totalSupplyPerPool.call(uintyDZrH0z, {from: accounts[4]});
//		const addressY94qIgO = await WolfStakingRewardsG0HxSc0.updateReward.call(addressemxnThN, uintBSyCHw, {from: accounts[1]});
//		await WolfStakingRewardsG0HxSc0.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256RyoQoMf, BigInt("0"))
		assert.equal(uint256UvBIDjY, BigInt("0"))
		assert.equal(uint256ktJGq4y, BigInt("0"))
		await expect(WolfStakingRewardsG0HxSc0.updateReward.call(addressemxnThN, uintBSyCHw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressIid8eTw = accounts[3]
		const addressP3VhJ78 = accounts[2]
		const addressiIpnJ9Y = accounts[4]
		const WolfStakingRewardsG0HxSc0 = await WolfStakingRewards.new(addressIid8eTw, addressP3VhJ78, addressiIpnJ9Y, {from: accounts[4]});
		const uintTqY71B4 = BigInt("905")
		const addressil2PB1c = accounts[1]
		const uintB4MxnXH = BigInt("906")
		const uintLHH0MYe = BigInt("1700")
		const addressfHOuq0Q = accounts[4]
		const uintXt5c53S = BigInt("1177")
		const addressvusSPj = accounts[6]
		const uint256RyoQoMf = await WolfStakingRewardsG0HxSc0.balanceOfPerPool.call(addressil2PB1c, uintTqY71B4, {from: accounts[5]});
		const uintXT4PeLN = await WolfStakingRewardsG0HxSc0.getReward.call(uintB4MxnXH, {from: accounts[4]});
		const uint256ktJGq4y = await WolfStakingRewardsG0HxSc0.earned.call(addressfHOuq0Q, uintLHH0MYe, {from: accounts[0]});
//		const addressY94qIgO = await WolfStakingRewardsG0HxSc0.updateReward.call(addressvusSPj, uintXt5c53S, {from: accounts[1]});
//		const uint8KxGw9SR = await WolfStakingRewardsG0HxSc0.decimals.call({from: accounts[3]});
//		await WolfStakingRewardsG0HxSc0.onlyOwner.call({from: accounts[0]});
//		await WolfStakingRewardsG0HxSc0.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256RyoQoMf, BigInt("0"))
		assert.equal(uint256ktJGq4y, BigInt("0"))
		await expect(WolfStakingRewardsG0HxSc0.updateReward.call(addressvusSPj, uintXt5c53S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringinCJRgX = "UlkZ1sfPl2PCKw23fV2uCeDxw6P9h6cduhn7dMbEbqB6iaEt8LkWU4aKtdma"
		const stringaNjCm4 = "b5BXyPaZbKCV"
		const uintdFBuV1N = BigInt("112")
		const WolfStakingRewardsKgDbXxU = await WolfStakingRewards.new(stringinCJRgX, stringaNjCm4, uintdFBuV1N, {from: accounts[0]});
		const uintnE8eUyU = BigInt("1613")
		const uintYPmwIQO = BigInt("1585")
		const uint256cAfARCy = await WolfStakingRewardsKgDbXxU.exit.call(uintnE8eUyU, {from: accounts[2]});
		await WolfStakingRewardsKgDbXxU.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256EDwajkA = await WolfStakingRewardsKgDbXxU.getRewardForDuration.call(uintYPmwIQO, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresspJ8Lmk4 = accounts[4]
		const addressDVxPZ3v = accounts[0]
		const addressr2e4Fyl = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsBIiPeA3 = await WolfStakingRewards.new(addresspJ8Lmk4, addressDVxPZ3v, addressr2e4Fyl, {from: accounts[1]});
		const uintJ9BBWN6 = BigInt("637")
		const addressxi3Na3B = accounts[3]
		const uintMz9dyQk = BigInt("709")
		const addresshQHqgAk = accounts[0]
		const uintkkbURj = BigInt("641")
		const uintcdW3HBE = BigInt("137")
		const uintZtUEMr3 = BigInt("1337")
		const addressrR6IxQT = accounts[1]
		const uint256bk1gR0Y = await WolfStakingRewardsBIiPeA3.earned.call(addressxi3Na3B, uintJ9BBWN6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MIdbmoX = await WolfStakingRewardsBIiPeA3.balanceOfPerPool.call(addresshQHqgAk, uintMz9dyQk, {from: accounts[4]});
//		const uint256AvLm5J5 = await WolfStakingRewardsBIiPeA3.stake.call(uintcdW3HBE, uintkkbURj, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256LhzxXYn = await WolfStakingRewardsBIiPeA3.earned.call(addressrR6IxQT, uintZtUEMr3, {from: accounts[5]});

		assert.equal(uint256MIdbmoX, BigInt("0"))
		assert.equal(uint256bk1gR0Y, BigInt("0"))
		await expect(WolfStakingRewardsBIiPeA3.stake.call(uintcdW3HBE, uintkkbURj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressh9QTep = accounts[3]
		const addressFxFk2sE = accounts[2]
		const addressPa7wyu9 = accounts[4]
		const WolfStakingRewardsG0HxSc0 = await WolfStakingRewards.new(addressh9QTep, addressFxFk2sE, addressPa7wyu9, {from: accounts[4]});
		const uintKi46bab = BigInt("53")
		const uintbY1V9RL = BigInt("1700")
		const addresshQgrnOL = accounts[5]
		const uintEOjMUwv = BigInt("701")
		const uintKUHpul = BigInt("376")
		const uintrNXuW9x = BigInt("1245")
		const uintW9lcmy5 = BigInt("1177")
		const addresslXPE65r = accounts[5]
		const uintu6965UI = await WolfStakingRewardsG0HxSc0.getReward.call(uintKi46bab, {from: accounts[1]});
		const uint256ktJGq4y = await WolfStakingRewardsG0HxSc0.earned.call(addresshQgrnOL, uintbY1V9RL, {from: accounts[0]});
//		const uint256mJogfCE = await WolfStakingRewardsG0HxSc0.exit.call(uintEOjMUwv, {from: accounts[4]});
//		const uint256GGzIlR = await WolfStakingRewardsG0HxSc0.withdrawRemainingBalance.call(uintrNXuW9x, uintKUHpul, {from: accounts[0]});
//		const addressY94qIgO = await WolfStakingRewardsG0HxSc0.updateReward.call(addresslXPE65r, uintW9lcmy5, {from: accounts[1]});
//		await WolfStakingRewardsG0HxSc0.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256ktJGq4y, BigInt("0"))
		await expect(WolfStakingRewardsG0HxSc0.exit.call(uintEOjMUwv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressxYdtiZy = accounts[2]
		const addressBOsss8x = accounts[1]
		const addresssMuQ3da = accounts[5]
		const WolfStakingRewardsgAQyQQg = await WolfStakingRewards.new(addressxYdtiZy, addressBOsss8x, addresssMuQ3da, {from: "0x0000000000000000000000000000000000000001"});
		const uintfUx4CxO = BigInt("2018")
		const uintfvUus0 = BigInt("660")
		const uintaqkzfXV = BigInt("255")
		const uintp6m1G07 = BigInt("1672")
		await WolfStakingRewardsgAQyQQg.nonReentrant.call({from: accounts[3]});
		const uint256arraysRKU7G = await WolfStakingRewardsgAQyQQg.updateNotifyRewardAmount.call(uintfUx4CxO, {from: accounts[3]});
		const uint256zKO2XYk = await WolfStakingRewardsgAQyQQg.withdrawRemainingBalance.call(uintaqkzfXV, uintfvUus0, {from: accounts[3]});
		const uint256NYn5gRC = await WolfStakingRewardsgAQyQQg.getRewardForDuration.call(uintp6m1G07, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressfT86ocQ = accounts[3]
		const address4ARPvM = accounts[2]
		const addressExrYlGo = accounts[4]
		const WolfStakingRewardsG0HxSc0 = await WolfStakingRewards.new(addressfT86ocQ, address4ARPvM, addressExrYlGo, {from: accounts[4]});
		const uintE161uFz = BigInt("775")
		const uint3uJm6r = BigInt("1700")
		const addressm6gLPCo = accounts[4]
//		const uint256XBxfV9S = await WolfStakingRewardsG0HxSc0.getRewardForDuration.call(uintE161uFz, {from: accounts[2]});
//		const uint256ktJGq4y = await WolfStakingRewardsG0HxSc0.earned.call(addressm6gLPCo, uint3uJm6r, {from: accounts[0]});
//		await WolfStakingRewardsG0HxSc0.onlyRewardsDistribution.call({from: accounts[2]});

		await expect(WolfStakingRewardsG0HxSc0.getRewardForDuration.call(uintE161uFz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressOi5UbhZ = accounts[3]
		const addresssFHgShM = accounts[2]
		const addressJ7oJgz = accounts[4]
		const WolfStakingRewardsG0HxSc0 = await WolfStakingRewards.new(addressOi5UbhZ, addresssFHgShM, addressJ7oJgz, {from: accounts[4]});
		const uintRR2y0wZ = BigInt("1074")
		const uintqaODRg8 = BigInt("668")
		const uintRUGNpxd = BigInt("1243")
		const uintIYp7O1j = BigInt("1211")
		const uintJU0rLOE = BigInt("1700")
		const addressvJACDyO = accounts[5]
//		const uint256hXinsE = await WolfStakingRewardsG0HxSc0.withdrawRemainingBalance.call(uintqaODRg8, uintRR2y0wZ, {from: accounts[3]});
//		const uint256jEWOKQD = await WolfStakingRewardsG0HxSc0.withdrawRemainingBalance.call(uintIYp7O1j, uintRUGNpxd, {from: accounts[3]});
//		const uint256ktJGq4y = await WolfStakingRewardsG0HxSc0.earned.call(addressvJACDyO, uintJU0rLOE, {from: accounts[0]});
//		await WolfStakingRewardsG0HxSc0.onlyRewardsDistribution.call({from: accounts[2]});

		await expect(WolfStakingRewardsG0HxSc0.withdrawRemainingBalance.call(uintqaODRg8, uintRR2y0wZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringyo3pErP = "TmfnExYHKbxo9oUXnUcEEJouzjioVz5rqSizWQubcNRn6Txf"
		const stringJmXWHxK = "INZARrSyqlABXAxM6"
		const uintEmX3sOG = BigInt("25")
		const WolfStakingRewardsa8MoO13 = await WolfStakingRewards.new(stringyo3pErP, stringJmXWHxK, uintEmX3sOG, {from: accounts[1]});
		const uintAPwuoWQ = BigInt("264")
		const addressQqbrdz = accounts[2]
		const uint2bnUnX = BigInt("1019")
		const uintiyHqvrH = BigInt("1279")
		const stringi9ygIml = await WolfStakingRewardsa8MoO13.symbol.call({from: accounts[0]});
		const uint256uvQ4j2x = await WolfStakingRewardsa8MoO13.balanceOfPerPool.call(addressQqbrdz, uintAPwuoWQ, {from: accounts[0]});
		const uint256hD9agH2 = await WolfStakingRewardsa8MoO13.exit.call(uint2bnUnX, {from: accounts[2]});
		const uint256MBZKoXI = await WolfStakingRewardsa8MoO13.exit.call(uintiyHqvrH, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXyEnE21 = "NXMjNruRRn4vAuz3xqtMqQ6ciN8iUVdim1rINYmSFCMf7IjxfL"
		const stringVsuEJSQ = "LsWNOhbjzc6IN0ELFMws9SrN2HDuvI41qIpplYJdN1BSJgRkawwJ9M6xIcxtmbp5L"
		const uintk5tAPhG = BigInt("94")
		const WolfStakingRewardstryX1yV = await WolfStakingRewards.new(stringXyEnE21, stringVsuEJSQ, uintk5tAPhG, {from: accounts[2]});
		const uintFCU5VIl = BigInt("269")
		const uintsf4MfeO = BigInt("741")
		const addressoGRVUsW = accounts[0]
		const uintNx9flxR = BigInt("1899")
		const uintihIXE96 = BigInt("217")
		const uintMt2Bx1N = BigInt("1052")
		const addressconkol5 = accounts[1]
		const uint256C36JAP9 = await WolfStakingRewardstryX1yV.getRewardForDuration.call(uintFCU5VIl, {from: accounts[1]});
		const stringGrNti3A = await WolfStakingRewardstryX1yV.symbol.call({from: accounts[0]});
		const uint256Q5xyPul = await WolfStakingRewardstryX1yV.earned.call(addressoGRVUsW, uintsf4MfeO, {from: accounts[3]});
		const uint256UJ7IU0R = await WolfStakingRewardstryX1yV.withdrawRemainingBalance.call(uintihIXE96, uintNx9flxR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wZei7z1 = await WolfStakingRewardstryX1yV.earned.call(addressconkol5, uintMt2Bx1N, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtmmXZ9X = "RMZ3mna7euXEXfwU9RX5n34Ium5kSQ6oV62jTWrk5NtrgYx2OGSxFdvzwCuboSHXBJXGPATNsxu5jtIY8sq0QQdyTTrBMIL"
		const stringJNOZhjZ = "et21BcyjPFJfjjpyuSAv5OcfksHFY4bRCGYAMNOqOQMVSQvi"
		const uintWXpoFe = BigInt("71")
		const WolfStakingRewardsIN6WaGK = await WolfStakingRewards.new(stringtmmXZ9X, stringJNOZhjZ, uintWXpoFe, {from: accounts[4]});
		const uinte8Sdthd = BigInt("1867")
		const uintKLDl9jz = BigInt("97")
		const uintQJ7fHF8 = BigInt("259")
		const uintNA2H3nm = BigInt("282")
		const uintFHXAFPR = BigInt("267")
		const uintU59mjn8 = BigInt("1319")
		const uintfxVxbr = BigInt("2042")
		const uintTH4A8Ht = BigInt("7")
		const uintHfFf3To = BigInt("1677")
		const uint256vfjNgG = await WolfStakingRewardsIN6WaGK.stake.call(uintKLDl9jz, uinte8Sdthd, {from: accounts[3]});
		const uint256FtLg5GR = await WolfStakingRewardsIN6WaGK.withdrawRemainingBalance.call(uintNA2H3nm, uintQJ7fHF8, {from: accounts[1]});
		const uint256XTAlpby = await WolfStakingRewardsIN6WaGK.getRewardForDuration.call(uintFHXAFPR, {from: accounts[2]});
		const uint256lsGhlc0 = await WolfStakingRewardsIN6WaGK.withdraw.call(uintfxVxbr, uintU59mjn8, {from: accounts[4]});
		const uint256t1kiGB7 = await WolfStakingRewardsIN6WaGK.withdrawRemainingBalance.call(uintHfFf3To, uintTH4A8Ht, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressBbbpNV = accounts[3]
		const addressRMP8V7 = accounts[2]
		const addressgewwlWu = accounts[4]
		const WolfStakingRewardsG0HxSc0 = await WolfStakingRewards.new(addressBbbpNV, addressRMP8V7, addressgewwlWu, {from: accounts[4]});
		const uintKfV33mn = BigInt("512")
		const uintstHDjni = BigInt("2046")
		const uintc30ICIL = BigInt("33")
//		const uint256Ru7Lxaw = await WolfStakingRewardsG0HxSc0.withdrawRemainingBalance.call(uintstHDjni, uintKfV33mn, {from: accounts[4]});
//		const uintu6965UI = await WolfStakingRewardsG0HxSc0.getReward.call(uintc30ICIL, {from: accounts[1]});
//		await WolfStakingRewardsG0HxSc0.onlyRewardsDistribution.call({from: accounts[2]});

		await expect(WolfStakingRewardsG0HxSc0.withdrawRemainingBalance.call(uintstHDjni, uintKfV33mn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringyY2vtiw = "H4zgK4OJMb9a"
		const stringbLvSPbQ = "u8M2P9nccxxcxCs32pOqzNe2oLJlc9pdKxyfYQULYhAsX2yN4I4AEj3hLDsdLDb34vNr"
		const uintMXQ03w1 = BigInt("168")
		const WolfStakingRewardsIfQwXd5 = await WolfStakingRewards.new(stringyY2vtiw, stringbLvSPbQ, uintMXQ03w1, {from: accounts[4]});
		const uintwclgujY = BigInt("761")
		const uintAalUNqa = BigInt("71")
		const uintEdchKLq = BigInt("1632")
		await WolfStakingRewardsIfQwXd5.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256OM5HvSV = await WolfStakingRewardsIfQwXd5.totalSupplyPerPool.call(uintwclgujY, {from: accounts[3]});
		const uint256oaXJiH = await WolfStakingRewardsIfQwXd5.stake.call(uintEdchKLq, uintAalUNqa, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGqlERS6 = "kLoLw1NoFolS4qKHakjLloEpKlbmWPjWv8qOagaF"
		const stringEouA2Sm = "6teY58sgQvNWl6lbjCOs"
		const uintbcDMB84 = BigInt("9")
		const WolfStakingRewardsg0ieEvc = await WolfStakingRewards.new(stringGqlERS6, stringEouA2Sm, uintbcDMB84, {from: accounts[3]});
		const uintnQkNyoh = BigInt("1432")
		const uintbhsbSNY = BigInt("750")
		const uintUkZi9sG = BigInt("1176")
		const uint256sDSvgV = await WolfStakingRewardsg0ieEvc.stake.call(uintbhsbSNY, uintnQkNyoh, {from: accounts[0]});
		const uint256gxviWXV = await WolfStakingRewardsg0ieEvc.rewardPerToken.call(uintUkZi9sG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKQZrCh4 = "sNfHdZd79hj863VFXrkxcvk5D2r91telkZWgKtxR6DXpE3AQua4i6V3YHMWK9lApapwuggfERqLzPHmjHI04wM3cb"
		const stringIRgxqu = "bcp2D81fvSyXXnzAv4NkqCNUVfItdxpFFBNg7qB9KEl1nFE69wGnL8qp2pasY9"
		const uintJ6Jaft7 = BigInt("69")
		const WolfStakingRewardsvpx6ndj = await WolfStakingRewards.new(stringKQZrCh4, stringIRgxqu, uintJ6Jaft7, {from: accounts[2]});
		const uintT9PuP2R = BigInt("892")
		const addressLXHmrN = accounts[0]
		const uintby80JQq = BigInt("1527")
		const uintZhd2ARr = BigInt("896")
		const uintiDjCHR5 = BigInt("1158")
		const uintkrorYQm = BigInt("578")
		const uint256vorlqzp = await WolfStakingRewardsvpx6ndj.earned.call(addressLXHmrN, uintT9PuP2R, {from: accounts[2]});
		const stringOKUbTnV = await WolfStakingRewardsvpx6ndj.symbol.call({from: accounts[0]});
		await WolfStakingRewardsvpx6ndj.nonReentrant.call({from: accounts[4]});
		const uint256h5fandv = await WolfStakingRewardsvpx6ndj.lastTimeRewardApplicable.call(uintby80JQq, {from: accounts[4]});
		const uint256xq9EICv = await WolfStakingRewardsvpx6ndj.stake.call(uintiDjCHR5, uintZhd2ARr, {from: accounts[3]});
		const uint256pIpmWUB = await WolfStakingRewardsvpx6ndj.exit.call(uintkrorYQm, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhO7zME = "9RtA3N8eTnJaliNLMEUdiII5WWXapY2r0amB5FtEh3AMRbJhS1xwPjjeUMBZjmIST33LhtDrWzWuqMNLD2Ses2sw"
		const stringzDlqkYb = "7AvVrxI3JwHttvqk5tVjx0kFDfcXw4kX8t1iYaJOh2WJmuMKMWtUDEv"
		const uintuWPIrIC = BigInt("160")
		const WolfStakingRewardswQWYLA1 = await WolfStakingRewards.new(stringhO7zME, stringzDlqkYb, uintuWPIrIC, {from: accounts[0]});
		const uintqFYWO1 = BigInt("1766")
		const uintI3kDS4R = BigInt("1035")
		const uint256arrayaHg5Ms = await WolfStakingRewardswQWYLA1.updateNotifyRewardAmount.call(uintqFYWO1, {from: accounts[4]});
		const stringAjfR3b1 = await WolfStakingRewardswQWYLA1.name.call({from: accounts[0]});
		const uint256oOb5tLc = await WolfStakingRewardswQWYLA1.getRewardForDuration.call(uintI3kDS4R, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTXvuvuX = "qoKIP3FS83kjKIi6E2TBxJEWACDBq"
		const stringP8MVBW4 = "V9Jki1yaeR8XB6mnQcnLdTH0nElkTMk52y5i8eWV1szT4Vs2DRvCSwbI2LvDHxprjLNEEbmAuTVxvOzoroVJtSCl9N"
		const uintHfrHofF = BigInt("203")
		const WolfStakingRewardsGAyStO4 = await WolfStakingRewards.new(stringTXvuvuX, stringP8MVBW4, uintHfrHofF, {from: accounts[3]});
		const uintwTUym8Y = BigInt("1743")
		const uintnTANkxJ = BigInt("1532")
		const uintwnwlUnv = BigInt("1002")
		const uintA1pJDla = BigInt("825")
		const uintztvpZW = BigInt("194")
		const uintjA1wIlt = BigInt("671")
		const uint256NgSsEWn = await WolfStakingRewardsGAyStO4.withdrawRemainingBalance.call(uintnTANkxJ, uintwTUym8Y, {from: accounts[0]});
		await WolfStakingRewardsGAyStO4.nonReentrant.call({from: accounts[2]});
		await WolfStakingRewardsGAyStO4.nonReentrant.call({from: accounts[3]});
		const uint256W8etDwZ = await WolfStakingRewardsGAyStO4.exit.call(uintwnwlUnv, {from: accounts[1]});
		const uint256VrENLpR = await WolfStakingRewardsGAyStO4.stake.call(uintztvpZW, uintA1pJDla, {from: accounts[2]});
		const uint256arrayggDR2i = await WolfStakingRewardsGAyStO4.updateNotifyRewardAmount.call(uintjA1wIlt, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringb8fzOHU = "vEU4DHVUyUVhKoKdmmGj8AJS"
		const stringLkfmRKj = "w738boFHLqh857itG22OOEthcy93uR07BpHxM7wULRebQelMa72M35KEUm4oBLTBWl16qXOrlcQlM8uCIHq37g0MxNFRr"
		const uintLcM2qEW = BigInt("242")
		const WolfStakingRewardsdSqSftr = await WolfStakingRewards.new(stringb8fzOHU, stringLkfmRKj, uintLcM2qEW, {from: "0x0000000000000000000000000000000000000001"});
		const uintlDXiAoX = BigInt("788")
		const uintEC8x6of = BigInt("145")
		const uintnJ9MifL = BigInt("339")
		const addressCYoI373 = accounts[3]
		const uint256pBZK2aX = await WolfStakingRewardsdSqSftr.withdraw.call(uintEC8x6of, uintlDXiAoX, {from: accounts[1]});
		const addressjUHr2c8 = await WolfStakingRewardsdSqSftr.updateReward.call(addressCYoI373, uintnJ9MifL, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringciWlW1Q = "mFA1XtK4GD4Z4vYX1NT13dCjQymfoj"
		const stringaxMvjmd = "i1iHCrmJhmKh0EEeIJcKlXu6uoG3MsJWqPF19sx4jkl2N0j"
		const uintIDoldEX = BigInt("18")
		const WolfStakingRewardsXDEEHji = await WolfStakingRewards.new(stringciWlW1Q, stringaxMvjmd, uintIDoldEX, {from: accounts[3]});
		const uintmDaA6RN = BigInt("1302")
		const uintHO2vsD1 = BigInt("691")
		const uintJU5gD56 = BigInt("241")
		const uintVROZWY = BigInt("882")
		const uint256T6W2Jo0 = await WolfStakingRewardsXDEEHji.withdraw.call(uintHO2vsD1, uintmDaA6RN, {from: accounts[4]});
		const uint256gIVFe99 = await WolfStakingRewardsXDEEHji.withdrawRemainingBalance.call(uintVROZWY, uintJU5gD56, {from: accounts[1]});
		const stringvUctw5A = await WolfStakingRewardsXDEEHji.symbol.call({from: accounts[5]});
		const uint8Fk5r1Mj = await WolfStakingRewardsXDEEHji.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjG48OSQ = "BOsMbIsrrbVyEspDmHIAWhHXfMoXDov0"
		const stringTNMLDjG = "aNoJl6bKeq"
		const uintgBgZbO = BigInt("102")
		const WolfStakingRewardsTr74ABl = await WolfStakingRewards.new(stringjG48OSQ, stringTNMLDjG, uintgBgZbO, {from: accounts[0]});
		const uintLXTogOk = BigInt("1935")
		await WolfStakingRewardsTr74ABl.nonReentrant.call({from: accounts[2]});
		const uint3oTVrq = await WolfStakingRewardsTr74ABl.getReward.call(uintLXTogOk, {from: accounts[2]});
		await WolfStakingRewardsTr74ABl.nonReentrant.call({from: accounts[2]});
		const stringD0zgrQb = await WolfStakingRewardsTr74ABl.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNq2Fv6m = "TO7w"
		const stringzxL4Gn0 = "lzbrHYGT"
		const uintQ9JJ7Qr = BigInt("139")
		const WolfStakingRewardsJwGxOeq = await WolfStakingRewards.new(stringNq2Fv6m, stringzxL4Gn0, uintQ9JJ7Qr, {from: accounts[3]});
		const uintZ3QnkAB = BigInt("1401")
		const uintTjptWCR = BigInt("149")
		const uintN0FoFqA = BigInt("1145")
		const uintcFykG5 = BigInt("33")
		const uintNv7aPb3 = BigInt("925")
		const uint8pLErA = BigInt("237")
		const uintnW6fsWf = BigInt("79")
		const addresslrKHYzX = accounts[0]
		const uint256Af31O5 = await WolfStakingRewardsJwGxOeq.stake.call(uintTjptWCR, uintZ3QnkAB, {from: accounts[3]});
		const uint256Uy4trcX = await WolfStakingRewardsJwGxOeq.rewardPerToken.call(uintN0FoFqA, {from: accounts[5]});
		const uint256GZ8N5UI = await WolfStakingRewardsJwGxOeq.getRewardForDuration.call(uintcFykG5, {from: accounts[4]});
		const uint256uKfFEG = await WolfStakingRewardsJwGxOeq.withdrawRemainingBalance.call(uint8pLErA, uintNv7aPb3, {from: accounts[2]});
		const uint256lhvfhn = await WolfStakingRewardsJwGxOeq.earned.call(addresslrKHYzX, uintnW6fsWf, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBRm65ji = "SMERdzvsRktdodYAy8x9YL"
		const stringrjliZLS = "WnMeDsJr1AagIjQYKMTxHDF2Cff3o9B6A9g5S56Q0VB3JsTnnIZ14OP9qDptJfeGGwq9w7hdC253zdQOpzc9PUVFwrGk"
		const uint7tCRIl = BigInt("244")
		const WolfStakingRewardsp7cblWv = await WolfStakingRewards.new(stringBRm65ji, stringrjliZLS, uint7tCRIl, {from: accounts[4]});
		const uintKfZjvgB = BigInt("517")
		const uintfmG3mt = BigInt("1309")
		await WolfStakingRewardsp7cblWv.nonReentrant.call({from: accounts[4]});
		const uintheTCMh = await WolfStakingRewardsp7cblWv.getReward.call(uintKfZjvgB, {from: accounts[2]});
		const uint256ixBHIR7 = await WolfStakingRewardsp7cblWv.getRewardForDuration.call(uintfmG3mt, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const string0m1TRW = "oBME7C4QRdKfUXzJWfwlzK6bZOEVmIwmSjyJ3o"
		const stringTUQesmZ = "Vh"
		const uintMKl5qgC = BigInt("45")
		const WolfStakingRewardspfDgeJi = await WolfStakingRewards.new(string0m1TRW, stringTUQesmZ, uintMKl5qgC, {from: accounts[3]});
		const uintZCdVXis = BigInt("1781")
		const uintTJrKaZE = BigInt("884")
		const uint256zLV4tf9 = await WolfStakingRewardspfDgeJi.totalSupplyPerPool.call(uintZCdVXis, {from: accounts[4]});
		const uint256kdGd8w6 = await WolfStakingRewardspfDgeJi.exit.call(uintTJrKaZE, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtut1qae = "BsEAurx7Pv1AyDiRjWn4xj4VhNbaIluVECgAuUZkliYOPCyQLW6gH9SXbTk1rdpXvJr5Nw8FT3udZYVSE"
		const stringLtaJOgB = "Q9V2zZ1eS7cJlVMyqvzyWRaAt34D2W7bQjYiwz9xNz"
		const uintc6zx70F = BigInt("32")
		const WolfStakingRewardsSkUA9ye = await WolfStakingRewards.new(stringtut1qae, stringLtaJOgB, uintc6zx70F, {from: accounts[5]});
		const uintuYvk6ny = BigInt("929")
		const addresssFSdSrB = accounts[1]
		const uintKFyXMNL = BigInt("167")
		const uintacVE0pV = BigInt("1037")
		const uint256EUV66WL = await WolfStakingRewardsSkUA9ye.balanceOfPerPool.call(addresssFSdSrB, uintuYvk6ny, {from: accounts[0]});
		const uint256L2u6TPf = await WolfStakingRewardsSkUA9ye.withdrawRemainingBalance.call(uintacVE0pV, uintKFyXMNL, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmbc521t = "DNxYlblJyWCkxt8A7heYoHoXOorRyomzwYuHwyz0E7ili5wg5r1Y3U8C2Gc3Jshg4jg"
		const stringFgkrJrb = "R7JmCbqT2eHlBInOzH4EycfYCy7JvNcMBHGvWJkRG5aLiJx68OpgqhYahKvxMwLz3PqHEO"
		const uintrYqpBSa = BigInt("90")
		const WolfStakingRewardsIlMlMqq = await WolfStakingRewards.new(stringmbc521t, stringFgkrJrb, uintrYqpBSa, {from: accounts[1]});
		const uintbMlw5bI = BigInt("742")
		const uintdPwajZH = BigInt("897")
		const uintmNlmmxW = BigInt("641")
		const uintlKZVb4o = BigInt("531")
		const uint256WYcaiP9 = await WolfStakingRewardsIlMlMqq.getRewardForDuration.call(uintbMlw5bI, {from: accounts[5]});
		const uint256A4Tlf2b = await WolfStakingRewardsIlMlMqq.rewardPerToken.call(uintdPwajZH, {from: accounts[5]});
		const uint256FLy65cM = await WolfStakingRewardsIlMlMqq.withdraw.call(uintlKZVb4o, uintmNlmmxW, {from: accounts[4]});
		const stringx86GYzL = await WolfStakingRewardsIlMlMqq.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpCo9In = "52HNB6c729g1gSMgiD"
		const stringJckBGTt = "FkUgXAgfiyBz6AezKv4tMks7GbH1SpAS6wamVLiX4R1r7eJWF4qo0jpdcvZyK4LVFSylyBoys"
		const uintC7uD61O = BigInt("189")
		const WolfStakingRewardsQl790YW = await WolfStakingRewards.new(stringpCo9In, stringJckBGTt, uintC7uD61O, {from: accounts[1]});
		const uintkEnUUKN = BigInt("593")
		const uintd9LMIhy = BigInt("1567")
		const uint256qH09k4 = await WolfStakingRewardsQl790YW.totalSupplyPerPool.call(uintkEnUUKN, {from: accounts[0]});
		const uint8Wx9Qvhi = await WolfStakingRewardsQl790YW.decimals.call({from: accounts[2]});
		const uint256RRWS0Dj = await WolfStakingRewardsQl790YW.getRewardForDuration.call(uintd9LMIhy, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringICdZK45 = "BYw2PMoL2voXtqaPPIFPQznpilEDGB3jNrud1wxHj4pMEu5ZeNkJ0n5HwFgkSe"
		const stringCL5BpIi = "eMOdbdEy"
		const uintPSkYfzr = BigInt("37")
		const WolfStakingRewardsh33h9fx = await WolfStakingRewards.new(stringICdZK45, stringCL5BpIi, uintPSkYfzr, {from: accounts[4]});
		const uintxOGHCM7 = BigInt("1013")
		const uintUJZbBL = BigInt("641")
		const uintmLrrrq = BigInt("160")
		const uintadOzmHh = BigInt("588")
		const uintcw1n4ZK = BigInt("823")
		const uintPmsxneY = await WolfStakingRewardsh33h9fx.getReward.call(uintxOGHCM7, {from: accounts[3]});
		const uint256OuBy9Ws = await WolfStakingRewardsh33h9fx.totalSupplyPerPool.call(uintUJZbBL, {from: accounts[3]});
		const uint256CI4D9M8 = await WolfStakingRewardsh33h9fx.lastTimeRewardApplicable.call(uintmLrrrq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uGcqkKC = await WolfStakingRewardsh33h9fx.lastTimeRewardApplicable.call(uintadOzmHh, {from: accounts[1]});
		const uint256YblSb9 = await WolfStakingRewardsh33h9fx.getRewardForDuration.call(uintcw1n4ZK, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnsrZgGw = "4bK4CXbaqjXtwUzA2fd7R1iRzsmaYGuR2mIA7gYYc9SVdpVi3VTtv0BQbEkK3C3t32EpdyWYYElGEo3tu"
		const stringMWafzgk = "Hx6X2ft"
		const uintNpqrvrW = BigInt("196")
		const WolfStakingRewardsycKIhzw = await WolfStakingRewards.new(stringnsrZgGw, stringMWafzgk, uintNpqrvrW, {from: accounts[4]});
		const uintyqyykCg = BigInt("1162")
		const uintrDCBfga = BigInt("1781")
		const uintXPZgt4q = BigInt("1864")
		const uint256MTL5WZ = await WolfStakingRewardsycKIhzw.getRewardForDuration.call(uintyqyykCg, {from: accounts[0]});
		const uint256ICS2lP8 = await WolfStakingRewardsycKIhzw.exit.call(uintrDCBfga, {from: accounts[3]});
		const uint8uKjraoW = await WolfStakingRewardsycKIhzw.decimals.call({from: accounts[0]});
		const uint256x9jLwE = await WolfStakingRewardsycKIhzw.rewardPerToken.call(uintXPZgt4q, {from: accounts[3]});
		const stringayFpvj7 = await WolfStakingRewardsycKIhzw.symbol.call({from: accounts[3]});
		await WolfStakingRewardsycKIhzw.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringETpnP5R = "vnx7IcroYt3aivhnppH8O99s2nd7NUiaE8mtsRhRGIb7b"
		const stringIAUDGcq = "oaoAiz1UBIR2KAiWoW53DHAxokXcXmICq5n8cM"
		const uintsIznOQG = BigInt("234")
		const WolfStakingRewardsB9mDiT = await WolfStakingRewards.new(stringETpnP5R, stringIAUDGcq, uintsIznOQG, {from: accounts[2]});
		const uinttZdJm7A = BigInt("1356")
		const uintr2XbqPk = BigInt("1273")
		const uintr45UU66 = BigInt("78")
		const uintuXXQcta = BigInt("1705")
		const uintK0xFqgC = BigInt("469")
		const addressQeGFhp = accounts[0]
		const uint256Ievvyd = await WolfStakingRewardsB9mDiT.withdrawRemainingBalance.call(uintr2XbqPk, uinttZdJm7A, {from: accounts[4]});
		await WolfStakingRewardsB9mDiT.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256VKIAfyW = await WolfStakingRewardsB9mDiT.withdrawRemainingBalance.call(uintuXXQcta, uintr45UU66, {from: accounts[4]});
		const uint256JHvZYAE = await WolfStakingRewardsB9mDiT.balanceOfPerPool.call(addressQeGFhp, uintK0xFqgC, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWTNpyJ2 = "yrGCetyUvffjibxDmpFZlziLxr8YuraVzvDixf1mRj4OW4U9SN3K6uURl34bVGrS5KTIfBImXrZr6Yhe9yTgQ"
		const stringSTn1Ikl = "Sfw8eXgcZm6iW6x46iR5meqAfY24db1bL1NM"
		const uintDgnmAla = BigInt("78")
		const WolfStakingRewardssgWXGJg = await WolfStakingRewards.new(stringWTNpyJ2, stringSTn1Ikl, uintDgnmAla, {from: accounts[0]});
		const uintsfrx65Z = BigInt("1605")
		const addressItisEn0 = accounts[0]
		const uintuYjSLY = BigInt("580")
		const uintYPJdWx4 = BigInt("1199")
		await WolfStakingRewardssgWXGJg.nonReentrant.call({from: accounts[3]});
		const addressiFDWuW9 = await WolfStakingRewardssgWXGJg.updateReward.call(addressItisEn0, uintsfrx65Z, {from: accounts[1]});
		const uint2565Q1F9J = await WolfStakingRewardssgWXGJg.withdraw.call(uintYPJdWx4, uintuYjSLY, {from: accounts[3]});
		const stringNtJtN6q = await WolfStakingRewardssgWXGJg.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmD5o0AO = "1dmk9PTcGOXxCQTrBt4EWwrM4Fyepv2sYfgI24DR3jL8JYkoW"
		const stringldCFYg9 = "Y9BSIj2MrUhZH5q3QBmcNWrDCAceI3rSSb5hPK6fsYWP5dg3rcIoV2FCICfIDS"
		const uintJPEGARM = BigInt("134")
		const WolfStakingRewardsqYvL60r = await WolfStakingRewards.new(stringmD5o0AO, stringldCFYg9, uintJPEGARM, {from: accounts[3]});
		const uintXYeDuky = BigInt("1309")
		const uintVLGyRX = BigInt("427")
		const stringER3ZGIS = await WolfStakingRewardsqYvL60r.name.call({from: accounts[0]});
		const uint256WFygDlk = await WolfStakingRewardsqYvL60r.getRewardForDuration.call(uintXYeDuky, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Gzw5eFq = await WolfStakingRewardsqYvL60r.totalSupplyPerPool.call(uintVLGyRX, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHoILD6l = "V6wbuFCX2AxXL1v2QN9b1pqrlgnXncPHoQMbDxKCth"
		const string2aGhjj = "kL6UT2eb8F5k3qqKRoB4WiswcUuzPQr9OnZnk43pbLdeJ4wnHSABQoRNl"
		const uintxZTdVZN = BigInt("39")
		const WolfStakingRewardsRPLIJIf = await WolfStakingRewards.new(stringHoILD6l, string2aGhjj, uintxZTdVZN, {from: "0x0000000000000000000000000000000000000001"});
		const uintcHKbILQ = BigInt("1108")
		const uinthiD8B4A = BigInt("625")
		const uint256wVvn6En = await WolfStakingRewardsRPLIJIf.lastTimeRewardApplicable.call(uintcHKbILQ, {from: accounts[5]});
		const uint256StYfl1c = await WolfStakingRewardsRPLIJIf.getRewardForDuration.call(uinthiD8B4A, {from: accounts[4]});
		const stringt91V2J = await WolfStakingRewardsRPLIJIf.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyXWtoWs = "Ir6bJeCzOyH0Yox9MLnngmQlBhA2kutKfDUDG4whrRxaId2EWslkmhowMQNn2NpojuLxGWjlCh08"
		const stringh48NSU2 = "66giWGQxctXr1T7QGa8wicVj7pAFRqo3PaAU3UlTBTVIr0p1gt3fhkVnbWRr8JMaBjXJAlf52pq5ldQwiWpyuchIXzupX"
		const uintOV8KTWf = BigInt("171")
		const WolfStakingRewardsmxj3nxI = await WolfStakingRewards.new(stringyXWtoWs, stringh48NSU2, uintOV8KTWf, {from: accounts[0]});
		const uintC0DbrAS = BigInt("426")
		const addresssNJ4sgi = accounts[3]
		await WolfStakingRewardsmxj3nxI.onlyOwner.call({from: accounts[0]});
		const uint256ge3eVTG = await WolfStakingRewardsmxj3nxI.earned.call(addresssNJ4sgi, uintC0DbrAS, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringluCwBQb = "XDlK2vz4POT"
		const stringLDQyGWK = "UhcU2obmq4DJTY85bCONVn4SgCYzPmeRGP3YgSj4kBoPvwgJWdhPyVSzuiH6l0iXbs"
		const uintTEHZ0bI = BigInt("53")
		const WolfStakingRewardscLlSB7l = await WolfStakingRewards.new(stringluCwBQb, stringLDQyGWK, uintTEHZ0bI, {from: accounts[0]});
		const uintJFPamAV = BigInt("1473")
		const uintEryio5G = BigInt("1483")
		await WolfStakingRewardscLlSB7l.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256y13WM5T = await WolfStakingRewardscLlSB7l.lastTimeRewardApplicable.call(uintJFPamAV, {from: "0x0000000000000000000000000000000000000001"});
		const stringYJPKOP4 = await WolfStakingRewardscLlSB7l.symbol.call({from: accounts[3]});
		const uint256OeMOZW6 = await WolfStakingRewardscLlSB7l.getRewardForDuration.call(uintEryio5G, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeJRvn66 = "tsYha8VPEtV6vEzXxVjYdhxRAdaerRVR2NwBEvpcTxj23F2p0xhFATYn9dKCH4h8rBHW1bzYy9kohv4PivyIlRXJ8MjT"
		const stringdKa9htM = "KsZEjdwa7LOvsDYhLCVCiagrQ57g2qoGpMWd9WzB5dCeDFJ5AVGvmUoD1yQFFOu6wL"
		const uintjfwU5Ip = BigInt("190")
		const WolfStakingRewardsrBjYlKa = await WolfStakingRewards.new(stringeJRvn66, stringdKa9htM, uintjfwU5Ip, {from: accounts[3]});
		const uintSXHVJDw = BigInt("626")
		const uintrCwYoEd = BigInt("605")
		const uintsOHIpg7 = BigInt("422")
		const addresszjvy8uo = accounts[1]
		const uintoMaZAtu = BigInt("1250")
		const uintiM5BEyq = BigInt("380")
		const addressDWkdsmv = accounts[1]
		const uintzo6o196 = BigInt("1426")
		const uint256pVXoNNV = await WolfStakingRewardsrBjYlKa.withdraw.call(uintrCwYoEd, uintSXHVJDw, {from: accounts[0]});
		const uint256duk30Kt = await WolfStakingRewardsrBjYlKa.balanceOfPerPool.call(addresszjvy8uo, uintsOHIpg7, {from: accounts[2]});
		const uint256z1HwbTq = await WolfStakingRewardsrBjYlKa.lastTimeRewardApplicable.call(uintoMaZAtu, {from: "0x0000000000000000000000000000000000000001"});
		const addressdjxbNKV = await WolfStakingRewardsrBjYlKa.updateReward.call(addressDWkdsmv, uintiM5BEyq, {from: accounts[3]});
		const uintAg34CI8 = await WolfStakingRewardsrBjYlKa.getReward.call(uintzo6o196, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringx0sWmz = "Ad7jxZKx9od6apdHUzB1N2AmcYaAM5LLxqdX9v7CedABtDP7OdzddQj"
		const stringQwc3sci = "peoHWSshDAVcMl"
		const uintN8Hd4Z = BigInt("202")
		const WolfStakingRewardsE8GZOmH = await WolfStakingRewards.new(stringx0sWmz, stringQwc3sci, uintN8Hd4Z, {from: accounts[1]});
		const uintLCr8NO = BigInt("348")
		const addressGP1cz0S = accounts[2]
		const uinta4u1qSB = BigInt("618")
		const uintjCJ0Zzb = BigInt("1748")
		const uintrmZT54J = BigInt("2028")
		const addressHHovQSP = await WolfStakingRewardsE8GZOmH.updateReward.call(addressGP1cz0S, uintLCr8NO, {from: accounts[3]});
		const stringK8hgDES = await WolfStakingRewardsE8GZOmH.symbol.call({from: accounts[3]});
		await WolfStakingRewardsE8GZOmH.nonReentrant.call({from: accounts[2]});
		const uint256QHPMUir = await WolfStakingRewardsE8GZOmH.totalSupplyPerPool.call(uinta4u1qSB, {from: accounts[2]});
		const uint256arrayd0N9dfc = await WolfStakingRewardsE8GZOmH.updateNotifyRewardAmount.call(uintjCJ0Zzb, {from: accounts[2]});
		const uint256arrayaYgZSb4 = await WolfStakingRewardsE8GZOmH.updateNotifyRewardAmount.call(uintrmZT54J, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoLHXiU2 = "yCpqroRMNT8NkEnzAYT2B7LiWHW5bwbbKJxjypvRut6uCztVjY0UeA1JT4R"
		const stringFPQaZ6S = "aDe4wE1sCHUcXh85HDg9RSWFceGivpDENKhookOfyAVCnvySMy8heacqgzncW5ieAj9k"
		const uint6YsLh1 = BigInt("221")
		const WolfStakingRewardsWZjejWu = await WolfStakingRewards.new(stringoLHXiU2, stringFPQaZ6S, uint6YsLh1, {from: accounts[1]});
		const uinttyR8GC = BigInt("1194")
		const addressND0Wtht = accounts[2]
		const stringr7OhLEG = await WolfStakingRewardsWZjejWu.symbol.call({from: accounts[2]});
		const uint256hr40juB = await WolfStakingRewardsWZjejWu.earned.call(addressND0Wtht, uinttyR8GC, {from: accounts[2]});
		const stringsIdnGeJ = await WolfStakingRewardsWZjejWu.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringR1q1rJi = "ihBjHap05AGcXtx"
		const stringUvJn4Fg = "IFBeLw3xtymI2yj3ivB2EURnaG4ziRJKAvDVSuwSP4duabyOg"
		const uinteNlFYLP = BigInt("187")
		const WolfStakingRewardsyEyd9E0 = await WolfStakingRewards.new(stringR1q1rJi, stringUvJn4Fg, uinteNlFYLP, {from: accounts[2]});
		const uintWSrvyoP = BigInt("1683")
		const uintSeWkCle = BigInt("938")
		const uintKRqnPbq = BigInt("1400")
		const uintPidm135 = BigInt("104")
		const uint256ekwPtDs = await WolfStakingRewardsyEyd9E0.stake.call(uintSeWkCle, uintWSrvyoP, {from: accounts[1]});
		const uint256arrayBY4PDaB = await WolfStakingRewardsyEyd9E0.updateNotifyRewardAmount.call(uintKRqnPbq, {from: accounts[4]});
		const uint256nOsfTKv = await WolfStakingRewardsyEyd9E0.rewardPerToken.call(uintPidm135, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringL7yy2S = "dWFz"
		const stringVyTlEjD = "fkYR4519jJ3qkZbmhxnQdvwT3rbe8AXPUyk2u9FaoIqpcpRaC"
		const uintbgEZiXA = BigInt("126")
		const WolfStakingRewardsY9STDUM = await WolfStakingRewards.new(stringL7yy2S, stringVyTlEjD, uintbgEZiXA, {from: accounts[1]});
		const uintkQAYQrO = BigInt("1799")
		await WolfStakingRewardsY9STDUM.onlyOwner.call({from: accounts[0]});
		await WolfStakingRewardsY9STDUM.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256BVJMKxx = await WolfStakingRewardsY9STDUM.totalSupplyPerPool.call(uintkQAYQrO, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUlFNFoF = "VNVB7QfPv2RQKgp"
		const stringgMpepdB = "AvSH3lJUvwRS3CcqOGqM3a2RCgb8mwGwAuLsUJxYHL5JMlFlSvqjmvrybsIoSh7NyVw34B5"
		const uintGNWRRvu = BigInt("139")
		const WolfStakingRewardsAAC4jSn = await WolfStakingRewards.new(stringUlFNFoF, stringgMpepdB, uintGNWRRvu, {from: accounts[4]});
		const uinty1F5Abc = BigInt("1876")
		const uinty8gxdh = BigInt("1478")
		const uintmbC7qIM = BigInt("286")
		const uintZRtKwxo = BigInt("307")
		const uintAsTthEn = BigInt("497")
		const uintTupgrp1 = BigInt("612")
		const uint256lSwxIXW = await WolfStakingRewardsAAC4jSn.getRewardForDuration.call(uinty1F5Abc, {from: accounts[2]});
		const uint256yVDvjFF = await WolfStakingRewardsAAC4jSn.stake.call(uintmbC7qIM, uinty8gxdh, {from: accounts[5]});
		const uint256arrayHFHFNKb = await WolfStakingRewardsAAC4jSn.updateNotifyRewardAmount.call(uintZRtKwxo, {from: accounts[3]});
		const uint256exLt37u = await WolfStakingRewardsAAC4jSn.exit.call(uintAsTthEn, {from: accounts[5]});
		const uint256Xpa4SiU = await WolfStakingRewardsAAC4jSn.rewardPerToken.call(uintTupgrp1, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLoZTZv5 = "j7X3anmzzbXH1UCV63L9ENi5Lhgwg0k4G2f7"
		const stringvUJ2LCa = "JdW9i2g6MrddtGTe3bYBKPZR76HEO9kB2q8mamQKsCtKYsmSzB7b9JoEqGM8LDBcsfxedClaYHAsQb"
		const uintOxy9Six = BigInt("35")
		const WolfStakingRewardsjxkZbw8 = await WolfStakingRewards.new(stringLoZTZv5, stringvUJ2LCa, uintOxy9Six, {from: accounts[3]});
		const uintqu3jzn2 = BigInt("486")
		const uintLyS8zUL = BigInt("191")
		const uintUF63Xt6 = BigInt("469")
		const uintyI0skPP = BigInt("1049")
		const uint256e2iVZX = await WolfStakingRewardsjxkZbw8.withdraw.call(uintLyS8zUL, uintqu3jzn2, {from: accounts[2]});
		const uint256mdDK3Z = await WolfStakingRewardsjxkZbw8.withdraw.call(uintyI0skPP, uintUF63Xt6, {from: accounts[4]});
	});
})