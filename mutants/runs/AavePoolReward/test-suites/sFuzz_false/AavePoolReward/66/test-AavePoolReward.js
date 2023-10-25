const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardQ2PhguN = await AavePoolReward.new({from: accounts[2]});
		const uintirzOUZA = BigInt("32")
		const uintdYsNGev = BigInt("1313")
		const uint256EuWOia = await AavePoolRewardQ2PhguN.notifyRewardAmount.call(uintirzOUZA, {from: accounts[1]});
		await AavePoolRewardQ2PhguN.exit.call({from: accounts[1]});
		const uint256j8sIQO = await AavePoolRewardQ2PhguN.rewardPerToken.call({from: accounts[1]});
		const uint256MdTGlB1 = await AavePoolRewardQ2PhguN.notifyRewardAmount.call(uintdYsNGev, {from: accounts[3]});
		await AavePoolRewardQ2PhguN.exit.call({from: accounts[0]});
		await AavePoolRewardQ2PhguN.exit.call({from: accounts[4]});

		await expect(AavePoolRewardQ2PhguN.notifyRewardAmount.call(uintirzOUZA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardOM18jIY = await AavePoolReward.new({from: accounts[2]});
		const addressW2KtXgR = accounts[1]
		const uintB3ZkdEI = BigInt("561")
		const address6gQIv0 = accounts[2]
		const uintesTY6ob = BigInt("1179")
		await AavePoolRewardOM18jIY.getReward.call({from: accounts[3]});
		const uint2562Acyqw = await AavePoolRewardOM18jIY.earned.call(addressW2KtXgR, {from: accounts[1]});
		const uint256WjIwYyu = await AavePoolRewardOM18jIY.notifyRewardAmount.call(uintB3ZkdEI, {from: accounts[2]});
		const addressHyMLOGD = await AavePoolRewardOM18jIY.dev.call(address6gQIv0, {from: accounts[0]});
		const uint256fZQf0Ea = await AavePoolRewardOM18jIY.stake.call(uintesTY6ob, {from: accounts[1]});

		await expect(AavePoolRewardOM18jIY.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardAD596L = await AavePoolReward.new({from: accounts[3]});
		const uintaigGZlN = BigInt("1526")
		const uintl7y0dlr = BigInt("1485")
		const uint256IobXZcQ = await AavePoolRewardAD596L.stake.call(uintaigGZlN, {from: accounts[3]});
		await AavePoolRewardAD596L.exit.call({from: accounts[4]});
		const uint256Jh0paOq = await AavePoolRewardAD596L.notifyRewardAmount.call(uintl7y0dlr, {from: accounts[3]});
		const uint256LB5DNvU = await AavePoolRewardAD596L.lastTimeRewardApplicable.call({from: accounts[2]});
		await AavePoolRewardAD596L.getReward.call({from: accounts[5]});

		await expect(AavePoolRewardAD596L.stake.call(uintaigGZlN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardGUt7D6 = await AavePoolReward.new({from: accounts[0]});
		const uintOGI2wy5 = BigInt("1277")
		await AavePoolRewardGUt7D6.exit.call({from: accounts[0]});
		await AavePoolRewardGUt7D6.exit.call({from: accounts[1]});
		const uint256Jzp07Oo = await AavePoolRewardGUt7D6.notifyRewardAmount.call(uintOGI2wy5, {from: accounts[2]});
		await AavePoolRewardGUt7D6.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardGUt7D6.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardOM18jIY = await AavePoolReward.new({from: accounts[2]});
		const addressa7kLrZK = accounts[1]
		const addressyGnBK2M = accounts[1]
		const addresseYQXRlL = accounts[3]
		const uintnwyPQv9 = BigInt("1179")
		await AavePoolRewardOM18jIY.getReward.call({from: accounts[3]});
		const uint2562Acyqw = await AavePoolRewardOM18jIY.earned.call(addressa7kLrZK, {from: accounts[1]});
		const addressZkJqLJQ = await AavePoolRewardOM18jIY.updateReward.call(addressyGnBK2M, {from: accounts[2]});
		const addressHyMLOGD = await AavePoolRewardOM18jIY.dev.call(addresseYQXRlL, {from: accounts[0]});
		const uint256fZQf0Ea = await AavePoolRewardOM18jIY.stake.call(uintnwyPQv9, {from: accounts[1]});

		await expect(AavePoolRewardOM18jIY.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardR7Y9mVY = await AavePoolReward.new({from: accounts[1]});
		const addressb4QdhT2 = accounts[3]
		const uintvAiqNn7 = BigInt("103")
		const uint256flxtsrF = await AavePoolRewardR7Y9mVY.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256jAI8VdW = await AavePoolRewardR7Y9mVY.rewardPerToken.call({from: accounts[3]});
		await AavePoolRewardR7Y9mVY.getReward.call({from: accounts[0]});
		const uint256AD6Nd50 = await AavePoolRewardR7Y9mVY.earned.call(addressb4QdhT2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Z0sUpcj = await AavePoolRewardR7Y9mVY.withdraw.call(uintvAiqNn7, {from: accounts[2]});
		await AavePoolRewardR7Y9mVY.getReward.call({from: accounts[4]});

		assert.equal(uint256flxtsrF, BigInt("0"))
		assert.equal(uint256jAI8VdW, BigInt("0"))
		await expect(AavePoolRewardR7Y9mVY.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardsew1tYa = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUTRdLNJ = BigInt("278")
		const uintgfX2rYm = BigInt("902")
		const addressRWvsPoo = "0x0000000000000000000000000000000000000001"
		const uint256hzuqTC = await AavePoolRewardsew1tYa.lastTimeRewardApplicable.call({from: accounts[1]});
		await AavePoolRewardsew1tYa.exit.call({from: accounts[1]});
		const uint256YrnJjWD = await AavePoolRewardsew1tYa.withdraw.call(uintUTRdLNJ, {from: accounts[3]});
		const uint256W9Q3d4e = await AavePoolRewardsew1tYa.withdraw.call(uintgfX2rYm, {from: accounts[4]});
		const uint256OA3z5e = await AavePoolRewardsew1tYa.earned.call(addressRWvsPoo, {from: accounts[5]});
		await AavePoolRewardsew1tYa.exit.call({from: accounts[3]});
	});
})