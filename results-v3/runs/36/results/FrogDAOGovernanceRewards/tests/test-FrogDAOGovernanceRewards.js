const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressFMBnOLU = accounts[5]
		const FrogDAOGovernanceRewardsI9jMaqd = await FrogDAOGovernanceRewards.new(addressFMBnOLU, {from: accounts[5]});
		const uintCwPvKk = BigInt("2016")
		const addressVlxJWdJ = accounts[3]
		const uint256rgra2D = await FrogDAOGovernanceRewardsI9jMaqd.stake.call(uintCwPvKk, {from: accounts[2]});
		const uint256el99amj = await FrogDAOGovernanceRewardsI9jMaqd.devFundAvailable.call({from: accounts[5]});
		const addressSe2KGEz = await FrogDAOGovernanceRewardsI9jMaqd.updateReward.call(addressVlxJWdJ, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsI9jMaqd.stake.call(uintCwPvKk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresslukdvFX = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsvMosXiW = await FrogDAOGovernanceRewards.new(addresslukdvFX, {from: accounts[2]});
		const uintDwlAv4k = BigInt("243")
		const addressM9qec6J = accounts[1]
		const uintPwGPgRA = BigInt("1937")
		const addresswa659Y = accounts[2]
		const uint256J37PqC9 = await FrogDAOGovernanceRewardsvMosXiW.withdraw.call(uintDwlAv4k, {from: accounts[3]});
		const addressWCaCMGV = await FrogDAOGovernanceRewardsvMosXiW.updateReward.call(addressM9qec6J, {from: accounts[5]});
		const uint256YEiqhRI = await FrogDAOGovernanceRewardsvMosXiW.notifyRewardAmount.call(uintPwGPgRA, {from: accounts[4]});
		const uint256heLZAGG = await FrogDAOGovernanceRewardsvMosXiW.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressblzRvDh = await FrogDAOGovernanceRewardsvMosXiW.transferDevAddr.call(addresswa659Y, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsvMosXiW.withdraw.call(uintDwlAv4k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressSkzQ684 = accounts[0]
		const FrogDAOGovernanceRewardsWBEHVow = await FrogDAOGovernanceRewards.new(addressSkzQ684, {from: accounts[4]});
		const addressmi7SzNQ = accounts[1]
		const uintKs1sdfR = BigInt("1407")
		const uintLY0yTky = BigInt("2033")
		const addressIYYPPbG = "0x0000000000000000000000000000000000000001"
		const addressvyXxz6 = await FrogDAOGovernanceRewardsWBEHVow.updateReward.call(addressmi7SzNQ, {from: accounts[3]});
		const uint256EhDlv5q = await FrogDAOGovernanceRewardsWBEHVow.notifyRewardAmount.call(uintKs1sdfR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rurlqo = await FrogDAOGovernanceRewardsWBEHVow.withdrawDevFund.call(uintLY0yTky, {from: accounts[0]});
		const uint256OnoCMdS = await FrogDAOGovernanceRewardsWBEHVow.rewardPerToken.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsWBEHVow.exit.call({from: accounts[0]});
		const uint256EwLgAz = await FrogDAOGovernanceRewardsWBEHVow.earned.call(addressIYYPPbG, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsWBEHVow.updateReward.call(addressmi7SzNQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTqPXF4 = accounts[2]
		const FrogDAOGovernanceRewardshwOyxeg = await FrogDAOGovernanceRewards.new(addressTqPXF4, {from: accounts[2]});
		const uintvp4PNl = BigInt("180")
		const uint256q6Hik9 = await FrogDAOGovernanceRewardshwOyxeg.devFundAvailable.call({from: accounts[1]});
		const uint256PQejQwn = await FrogDAOGovernanceRewardshwOyxeg.notifyRewardAmount.call(uintvp4PNl, {from: accounts[3]});

		assert.equal(uint256q6Hik9, BigInt("0"))
		await expect(FrogDAOGovernanceRewardshwOyxeg.notifyRewardAmount.call(uintvp4PNl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressnfQh5Qb = accounts[0]
		const FrogDAOGovernanceRewardsPRcVL71 = await FrogDAOGovernanceRewards.new(addressnfQh5Qb, {from: accounts[2]});
		const addressc9xffLh = accounts[0]
		await FrogDAOGovernanceRewardsPRcVL71.renounceDevAddr.call({from: accounts[1]});
		const addressHcMdGg4 = await FrogDAOGovernanceRewardsPRcVL71.updateReward.call(addressc9xffLh, {from: accounts[2]});
		const uint256iw22jRH = await FrogDAOGovernanceRewardsPRcVL71.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256GFvkFu = await FrogDAOGovernanceRewardsPRcVL71.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256j0NLlev = await FrogDAOGovernanceRewardsPRcVL71.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsPRcVL71.renounceDevAddr.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressYHPhjKS = accounts[4]
		const FrogDAOGovernanceRewardsnb0K2C = await FrogDAOGovernanceRewards.new(addressYHPhjKS, {from: "0x0000000000000000000000000000000000000001"});
		const uintRTHmfLb = BigInt("1236")
		const addressQVsjcie = accounts[4]
		const uintBBrme3D = BigInt("535")
		const addresssn0IwO1 = accounts[0]
		const uint256d8ohB8r = await FrogDAOGovernanceRewardsnb0K2C.stake.call(uintRTHmfLb, {from: accounts[2]});
		const uint2564dWcWu = await FrogDAOGovernanceRewardsnb0K2C.earned.call(addressQVsjcie, {from: accounts[0]});
		const uint256QWEnyGY = await FrogDAOGovernanceRewardsnb0K2C.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256OJcksbo = await FrogDAOGovernanceRewardsnb0K2C.withdraw.call(uintBBrme3D, {from: accounts[5]});
		const uint256ACGUp6E = await FrogDAOGovernanceRewardsnb0K2C.earned.call(addresssn0IwO1, {from: accounts[2]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressvbDEkxV = accounts[1]
		const FrogDAOGovernanceRewardsgPYxcz9 = await FrogDAOGovernanceRewards.new(addressvbDEkxV, {from: accounts[0]});
		const uintqamDRvi = BigInt("1701")
		await FrogDAOGovernanceRewardsgPYxcz9.exit.call({from: accounts[4]});
		const uint256ZQ4c36l = await FrogDAOGovernanceRewardsgPYxcz9.withdraw.call(uintqamDRvi, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsgPYxcz9.checkStart.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsgPYxcz9.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdANzfTt = accounts[5]
		const FrogDAOGovernanceRewardsI9jMaqd = await FrogDAOGovernanceRewards.new(addressdANzfTt, {from: accounts[5]});
		const address6BXpbm = accounts[4]
		const addressbcYirKt = accounts[3]
		const addressULUueJv = accounts[1]
		const addressMnxLyhx = accounts[5]
		const uintED9kmjV = BigInt("2014")
		const uint256jmcM8r0 = await FrogDAOGovernanceRewardsI9jMaqd.earned.call(address6BXpbm, {from: accounts[4]});
		const addressTKH4ouw = await FrogDAOGovernanceRewardsI9jMaqd.transferDevAddr.call(addressbcYirKt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lw1jeAv = await FrogDAOGovernanceRewardsI9jMaqd.earned.call(addressULUueJv, {from: accounts[3]});
		const uint256MKyz5VF = await FrogDAOGovernanceRewardsI9jMaqd.earned.call(addressMnxLyhx, {from: accounts[3]});
		const uint256rgra2D = await FrogDAOGovernanceRewardsI9jMaqd.stake.call(uintED9kmjV, {from: accounts[2]});
		const uint256el99amj = await FrogDAOGovernanceRewardsI9jMaqd.devFundAvailable.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsI9jMaqd.checkStart.call({from: accounts[4]});

		assert.equal(uint256jmcM8r0, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsI9jMaqd.transferDevAddr.call(addressbcYirKt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgZxT9ZS = accounts[5]
		const FrogDAOGovernanceRewardsI9jMaqd = await FrogDAOGovernanceRewards.new(addressgZxT9ZS, {from: accounts[5]});
		const addressYyT9j9X = accounts[4]
		const uintjdRJElY = BigInt("1879")
		const addresswdmFhI2 = accounts[3]
		const addresssGQk56K = "0x0000000000000000000000000000000000000001"
		const addresssqvEZhq = accounts[5]
		const uintmcVnm8N = BigInt("2014")
		const uint256jmcM8r0 = await FrogDAOGovernanceRewardsI9jMaqd.earned.call(addressYyT9j9X, {from: accounts[4]});
		const uint256qtb7RZF = await FrogDAOGovernanceRewardsI9jMaqd.withdrawDevFund.call(uintjdRJElY, {from: accounts[0]});
		const addressTKH4ouw = await FrogDAOGovernanceRewardsI9jMaqd.transferDevAddr.call(addresswdmFhI2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lw1jeAv = await FrogDAOGovernanceRewardsI9jMaqd.earned.call(addresssGQk56K, {from: accounts[3]});
		const uint256MKyz5VF = await FrogDAOGovernanceRewardsI9jMaqd.earned.call(addresssqvEZhq, {from: accounts[3]});
		await FrogDAOGovernanceRewardsI9jMaqd.renounceDevAddr.call({from: accounts[3]});
		const uint256rgra2D = await FrogDAOGovernanceRewardsI9jMaqd.stake.call(uintmcVnm8N, {from: accounts[2]});
		const uint256el99amj = await FrogDAOGovernanceRewardsI9jMaqd.devFundAvailable.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsI9jMaqd.checkStart.call({from: accounts[4]});

		assert.equal(uint256jmcM8r0, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsI9jMaqd.withdrawDevFund.call(uintjdRJElY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressd5cdXwt = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsT3glBY6 = await FrogDAOGovernanceRewards.new(addressd5cdXwt, {from: accounts[3]});
		const addressnAbemwy = "0x0000000000000000000000000000000000000001"
		const uintqJApbjj = BigInt("198")
		const addresspCA4laR = await FrogDAOGovernanceRewardsT3glBY6.transferDevAddr.call(addressnAbemwy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256j1Gi2xS = await FrogDAOGovernanceRewardsT3glBY6.notifyRewardAmount.call(uintqJApbjj, {from: accounts[3]});
		await FrogDAOGovernanceRewardsT3glBY6.checkStart.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsT3glBY6.getReward.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsT3glBY6.notifyRewardAmount.call(uintqJApbjj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstB9OjpD = accounts[3]
		const FrogDAOGovernanceRewardspskgyN = await FrogDAOGovernanceRewards.new(addresstB9OjpD, {from: accounts[5]});
		const uintmLG0aat = BigInt("505")
		const addressGY5YqLu = "0x0000000000000000000000000000000000000001"
		const addressxb589k3 = accounts[5]
		const uintlzJOgdM = BigInt("1898")
		const uintopagC3F = BigInt("802")
		const uint256hW9w2rR = await FrogDAOGovernanceRewardspskgyN.withdrawDevFund.call(uintmLG0aat, {from: accounts[3]});
		const addressXSXcVm2 = await FrogDAOGovernanceRewardspskgyN.updateReward.call(addressGY5YqLu, {from: accounts[3]});
		const addressmG22Mnt = await FrogDAOGovernanceRewardspskgyN.updateReward.call(addressxb589k3, {from: accounts[1]});
		const uint256x8Y2Rqd = await FrogDAOGovernanceRewardspskgyN.stake.call(uintlzJOgdM, {from: accounts[2]});
		const uint256WmGUqT = await FrogDAOGovernanceRewardspskgyN.stake.call(uintopagC3F, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardspskgyN.withdrawDevFund.call(uintmLG0aat, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})