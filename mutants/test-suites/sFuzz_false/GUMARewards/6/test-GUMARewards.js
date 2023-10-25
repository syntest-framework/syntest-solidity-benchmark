const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsFFJsLoL = await GUMARewards.new({from: accounts[3]});
		const uinttbAj4iJ = BigInt("471")
		const uint256D0KR5gj = await GUMARewardsFFJsLoL.totalSupply.call({from: accounts[4]});
		const uint256f0IgTiI = await GUMARewardsFFJsLoL.rewardPerToken.call({from: accounts[2]});
//		const uint256OnITJj = await GUMARewardsFFJsLoL.stake.call(uinttbAj4iJ, {from: accounts[3]});

		assert.equal(uint256D0KR5gj, BigInt("0"))
		assert.equal(uint256f0IgTiI, BigInt("0"))
		await expect(GUMARewardsFFJsLoL.stake.call(uinttbAj4iJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsEhdpDMq = await GUMARewards.new({from: accounts[2]});
//		await GUMARewardsEhdpDMq.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		await GUMARewardsEhdpDMq.onlyOwner.call({from: accounts[3]});

		await expect(GUMARewardsEhdpDMq.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardskXsl6K5 = await GUMARewards.new({from: accounts[4]});
		const addressvVrUsBv = accounts[1]
		const addressPi9dVzV = accounts[5]
//		const addressfS1xWsO = await GUMARewardskXsl6K5.transferOwnership.call(addressvVrUsBv, {from: accounts[5]});
//		const uint256Y2zxCtY = await GUMARewardskXsl6K5.balanceOf.call(addressPi9dVzV, {from: accounts[4]});
//		await GUMARewardskXsl6K5.renounceOwnership.call({from: accounts[1]});

		await expect(GUMARewardskXsl6K5.transferOwnership.call(addressvVrUsBv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsEGuIJ0T = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPm3NlcO = accounts[0]
		await GUMARewardsEGuIJ0T.renounceOwnership.call({from: accounts[3]});
		await GUMARewardsEGuIJ0T.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const addressE8KU3W9 = await GUMARewardsEGuIJ0T.setRewardDistribution.call(addressPm3NlcO, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsrKx0VvZ = await GUMARewards.new({from: accounts[2]});
		const addressY6yuM89 = "0x0000000000000000000000000000000000000001"
		const addressudOvhWD = accounts[0]
		const uintH70h3d4 = BigInt("1267")
		const uint256Rr8X3dT = await GUMARewardsrKx0VvZ.rewardPerToken.call({from: accounts[1]});
		const uint256Zuv6Dly = await GUMARewardsrKx0VvZ.balanceOf.call(addressY6yuM89, {from: accounts[0]});
		const uint256kEHeYbo = await GUMARewardsrKx0VvZ.earned.call(addressudOvhWD, {from: accounts[2]});
		const boolUlOr5KC = await GUMARewardsrKx0VvZ.isOwner.call({from: accounts[2]});
//		const uint256Oj79pWd = await GUMARewardsrKx0VvZ.notifyRewardAmount.call(uintH70h3d4, {from: accounts[0]});

		assert.equal(boolUlOr5KC, true)
		assert.equal(uint256Rr8X3dT, BigInt("0"))
		assert.equal(uint256Zuv6Dly, BigInt("0"))
		assert.equal(uint256kEHeYbo, BigInt("0"))
		await expect(GUMARewardsrKx0VvZ.notifyRewardAmount.call(uintH70h3d4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsFFJsLoL = await GUMARewards.new({from: accounts[3]});
		const uintU8lhFeA = BigInt("471")
		const uint256D0KR5gj = await GUMARewardsFFJsLoL.totalSupply.call({from: accounts[4]});
//		await GUMARewardsFFJsLoL.getReward.call({from: accounts[2]});
//		const uint256f0IgTiI = await GUMARewardsFFJsLoL.rewardPerToken.call({from: accounts[2]});
//		const uint256OnITJj = await GUMARewardsFFJsLoL.stake.call(uintU8lhFeA, {from: accounts[3]});

		assert.equal(uint256D0KR5gj, BigInt("0"))
		await expect(GUMARewardsFFJsLoL.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardshZ2QWTP = await GUMARewards.new({from: accounts[0]});
//		await GUMARewardshZ2QWTP.getReward.call({from: accounts[2]});
//		const uint256BJM060A = await GUMARewardshZ2QWTP.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await GUMARewardshZ2QWTP.renounceOwnership.call({from: accounts[0]});

		await expect(GUMARewardshZ2QWTP.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsEhdpDMq = await GUMARewards.new({from: accounts[2]});
		const addressxouon3z = accounts[1]
		const address8JL6dg = await GUMARewardsEhdpDMq.owner.call({from: accounts[0]});
		const uint256kceYkuw = await GUMARewardsEhdpDMq.earned.call(addressxouon3z, {from: accounts[1]});
		const uint256mdcNp8H = await GUMARewardsEhdpDMq.lastTimeRewardApplicable.call({from: accounts[4]});
//		await GUMARewardsEhdpDMq.onlyOwner.call({from: accounts[3]});

		assert.equal(address8JL6dg, 0x3DA9c5DC3E83B55ee5e10a1a087d06EB1a23B8a8)
		assert.equal(uint256kceYkuw, BigInt("0"))
		assert.equal(uint256mdcNp8H, BigInt("0"))
		await expect(GUMARewardsEhdpDMq.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardshZ2QWTP = await GUMARewards.new({from: accounts[0]});
		const addressg7U0Rb3 = accounts[2]
		const addressZqs6eve = await GUMARewardshZ2QWTP.transferOwnership.call(addressg7U0Rb3, {from: accounts[0]});
//		await GUMARewardshZ2QWTP.getReward.call({from: accounts[2]});

		await expect(GUMARewardshZ2QWTP.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardshZ2QWTP = await GUMARewards.new({from: accounts[0]});
		const addressXekEJp0 = accounts[3]
		const addressiMxDDi = accounts[3]
		const addressvIKxq87 = await GUMARewardshZ2QWTP.setRewardDistribution.call(addressXekEJp0, {from: accounts[0]});
//		await GUMARewardshZ2QWTP.getReward.call({from: accounts[2]});
//		const uint256yreIgNx = await GUMARewardshZ2QWTP.earned.call(addressiMxDDi, {from: accounts[1]});

		await expect(GUMARewardshZ2QWTP.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})