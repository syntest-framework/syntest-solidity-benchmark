const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsZMeEZCm = await DMONDETHRewards.new({from: accounts[1]});
		const addressSMJHiNI = accounts[2]
		const addressB8txEID = accounts[1]
		const boolvlMG3in = await DMONDETHRewardsZMeEZCm.isOwner.call({from: accounts[1]});
		const addressY3KWtcd = await DMONDETHRewardsZMeEZCm.transferOwnership.call(addressSMJHiNI, {from: accounts[1]});
		const uint256X92QhI = await DMONDETHRewardsZMeEZCm.earned.call(addressB8txEID, {from: accounts[0]});

		assert.equal(boolvlMG3in, true)
		assert.equal(uint256X92QhI, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsb9wNLFK = await DMONDETHRewards.new({from: accounts[2]});
		const addressV8Ej8L = accounts[1]
		await DMONDETHRewardsb9wNLFK.onlyOwner.call({from: accounts[5]});
		const addressecXo0k4 = await DMONDETHRewardsb9wNLFK.updateReward.call(addressV8Ej8L, {from: accounts[2]});

		await expect(DMONDETHRewardsb9wNLFK.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsn7ikyGh = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintx6KUWdJ = BigInt("1483")
		const addressceBKWxz = accounts[0]
		await DMONDETHRewardsn7ikyGh.checkStart.call({from: accounts[0]});
		const uint256V1b0Vks = await DMONDETHRewardsn7ikyGh.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256OOLitBW = await DMONDETHRewardsn7ikyGh.stake.call(uintx6KUWdJ, {from: accounts[1]});
		const addressIzotpjD = await DMONDETHRewardsn7ikyGh.transferOwnership.call(addressceBKWxz, {from: accounts[4]});
		const uint256S2SQf4M = await DMONDETHRewardsn7ikyGh.remainingReward.call({from: accounts[2]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsLSWsGlS = await DMONDETHRewards.new({from: accounts[1]});
		const uint256Z1jK5V2 = await DMONDETHRewardsLSWsGlS.remainingReward.call({from: accounts[2]});
		await DMONDETHRewardsLSWsGlS.exit.call({from: accounts[0]});

		await expect(DMONDETHRewardsLSWsGlS.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsqZg61HD = await DMONDETHRewards.new({from: accounts[2]});
		const uintkpWH2bj = BigInt("1290")
		await DMONDETHRewardsqZg61HD.getReward.call({from: accounts[4]});
		const uint256ZccF6i = await DMONDETHRewardsqZg61HD.withdraw.call(uintkpWH2bj, {from: accounts[4]});
		const uint256MPmLgjV = await DMONDETHRewardsqZg61HD.totalSupply.call({from: accounts[2]});

		await expect(DMONDETHRewardsqZg61HD.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsULlZUP0 = await DMONDETHRewards.new({from: accounts[1]});
		const uintSN9b5p = BigInt("1410")
		const address6qS38b = accounts[4]
		const boolYPJhkUu = await DMONDETHRewardsULlZUP0.isOwner.call({from: accounts[5]});
		const uint256YAxRSii = await DMONDETHRewardsULlZUP0.stake.call(uintSN9b5p, {from: accounts[4]});
		const uint256LJfcPd = await DMONDETHRewardsULlZUP0.rewardPerToken.call({from: accounts[4]});
		const uint256qTIDo17 = await DMONDETHRewardsULlZUP0.remainingReward.call({from: accounts[1]});
		const addressgRpSaO1 = await DMONDETHRewardsULlZUP0.updateReward.call(address6qS38b, {from: accounts[0]});
		await DMONDETHRewardsULlZUP0.checkStart.call({from: accounts[3]});

		assert.equal(boolYPJhkUu, false)
		await expect(DMONDETHRewardsULlZUP0.stake.call(uintSN9b5p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsHnuVTjV = await DMONDETHRewards.new({from: accounts[1]});
		const addressAuUdUOG = accounts[5]
		const addressU5X6gIu = accounts[3]
		const addressd786g3q = await DMONDETHRewardsHnuVTjV.setStakeAddress.call(addressAuUdUOG, {from: accounts[5]});
		await DMONDETHRewardsHnuVTjV.checkStart.call({from: accounts[3]});
		const addressNrvAzz1 = await DMONDETHRewardsHnuVTjV.transferOwnership.call(addressU5X6gIu, {from: accounts[0]});
		await DMONDETHRewardsHnuVTjV.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsHnuVTjV.onlyRewardDistribution.call({from: accounts[0]});

		await expect(DMONDETHRewardsHnuVTjV.setStakeAddress.call(addressAuUdUOG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsULlZUP0 = await DMONDETHRewards.new({from: accounts[1]});
		const uintgyBGqVN = BigInt("1433")
		const uintEhNZrwC = BigInt("1410")
		const addressZBS3KVZ = accounts[4]
		const boolYPJhkUu = await DMONDETHRewardsULlZUP0.isOwner.call({from: accounts[5]});
		const uint256rHbbA8V = await DMONDETHRewardsULlZUP0.notifyRewardAmount.call(uintgyBGqVN, {from: accounts[4]});
		const uint256YAxRSii = await DMONDETHRewardsULlZUP0.stake.call(uintEhNZrwC, {from: accounts[4]});
		const uint256LJfcPd = await DMONDETHRewardsULlZUP0.rewardPerToken.call({from: accounts[4]});
		const uint256qTIDo17 = await DMONDETHRewardsULlZUP0.remainingReward.call({from: accounts[1]});
		const addressgRpSaO1 = await DMONDETHRewardsULlZUP0.updateReward.call(addressZBS3KVZ, {from: accounts[0]});
		await DMONDETHRewardsULlZUP0.checkStart.call({from: accounts[3]});

		assert.equal(boolYPJhkUu, false)
		await expect(DMONDETHRewardsULlZUP0.notifyRewardAmount.call(uintgyBGqVN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsloAEIsN = await DMONDETHRewards.new({from: accounts[0]});
		const uintyEH4xe2 = BigInt("426")
		const addressIgYD16 = accounts[1]
		const addressfUwLSMB = accounts[1]
		const uint256y6ZyYfH = await DMONDETHRewardsloAEIsN.notifyRewardAmount.call(uintyEH4xe2, {from: accounts[0]});
		const addressYouNKmj = await DMONDETHRewardsloAEIsN.updateReward.call(addressIgYD16, {from: accounts[3]});
		const uint256bTZsK8 = await DMONDETHRewardsloAEIsN.remainingReward.call({from: accounts[3]});
		const addressZkhyTt6 = await DMONDETHRewardsloAEIsN.setRewardDistribution.call(addressfUwLSMB, {from: accounts[1]});

		await expect(DMONDETHRewardsloAEIsN.updateReward.call(addressIgYD16, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsF3GrZg = await DMONDETHRewards.new({from: accounts[3]});
		const uintd7VA4Zo = BigInt("1622")
		await DMONDETHRewardsF3GrZg.renounceOwnership.call({from: accounts[3]});
		const uint256FAG1yvQ = await DMONDETHRewardsF3GrZg.remainingReward.call({from: accounts[5]});
		await DMONDETHRewardsF3GrZg.exit.call({from: accounts[1]});
		const uint256EJAWHxj = await DMONDETHRewardsF3GrZg.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256FcI4BLf = await DMONDETHRewardsF3GrZg.withdraw.call(uintd7VA4Zo, {from: accounts[1]});

		await expect(DMONDETHRewardsF3GrZg.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfQkJdkc = await DMONDETHRewards.new({from: accounts[3]});
		const addressNtx6duc = accounts[1]
		const uintIOwG3I = BigInt("43")
		const uintXHHk5kL = BigInt("1199")
		const addresszAVvpTa = await DMONDETHRewardsfQkJdkc.setRewardDistribution.call(addressNtx6duc, {from: accounts[3]});
		await DMONDETHRewardsfQkJdkc.checkStart.call({from: accounts[3]});
		await DMONDETHRewardsfQkJdkc.getReward.call({from: accounts[5]});
		await DMONDETHRewardsfQkJdkc.checkStart.call({from: accounts[2]});
		const uint256MXQlJmr = await DMONDETHRewardsfQkJdkc.stake.call(uintIOwG3I, {from: accounts[1]});
		const uint256OvFOv55 = await DMONDETHRewardsfQkJdkc.withdraw.call(uintXHHk5kL, {from: accounts[3]});

		await expect(DMONDETHRewardsfQkJdkc.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsqZg61HD = await DMONDETHRewards.new({from: accounts[2]});
		await DMONDETHRewardsqZg61HD.renounceOwnership.call({from: accounts[2]});
		await DMONDETHRewardsqZg61HD.getReward.call({from: accounts[4]});
		await DMONDETHRewardsqZg61HD.exit.call({from: accounts[3]});

		await expect(DMONDETHRewardsqZg61HD.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardszxbxwhj = await DMONDETHRewards.new({from: accounts[2]});
		const uintg2FUJJl = BigInt("676")
		const uintJclqsXd = BigInt("144")
		const addresscgLAarK = await DMONDETHRewardszxbxwhj.owner.call({from: accounts[1]});
		const uint256chCRqVT = await DMONDETHRewardszxbxwhj.remainingReward.call({from: accounts[4]});
		const uint256REkvNjf = await DMONDETHRewardszxbxwhj.withdraw.call(uintg2FUJJl, {from: accounts[3]});
		await DMONDETHRewardszxbxwhj.checkStart.call({from: accounts[4]});
		const uint256JZgHew = await DMONDETHRewardszxbxwhj.setStartTime.call(uintJclqsXd, {from: accounts[5]});

		assert.equal(addresscgLAarK, 0x1b5840D38F6876C18e1E3c77D0e8f61ec343d52B)
		await expect(DMONDETHRewardszxbxwhj.remainingReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsloAEIsN = await DMONDETHRewards.new({from: accounts[0]});
		const uintAasM6vM = BigInt("438")
		const uinteUIDl4T = BigInt("1689")
		const uintwLZVCFj = BigInt("325")
		const addressRx5OzgC = accounts[2]
		const uint256y6ZyYfH = await DMONDETHRewardsloAEIsN.notifyRewardAmount.call(uintAasM6vM, {from: accounts[0]});
		const uint256FA9slzV = await DMONDETHRewardsloAEIsN.totalSupply.call({from: accounts[2]});
		const uint256qeTcUL0 = await DMONDETHRewardsloAEIsN.setStartTime.call(uinteUIDl4T, {from: accounts[0]});
		const uint256QM7cXHm = await DMONDETHRewardsloAEIsN.withdraw.call(uintwLZVCFj, {from: accounts[4]});
		const addressYouNKmj = await DMONDETHRewardsloAEIsN.updateReward.call(addressRx5OzgC, {from: accounts[3]});
		const uint256bTZsK8 = await DMONDETHRewardsloAEIsN.remainingReward.call({from: accounts[3]});

		assert.equal(uint256FA9slzV, BigInt("0"))
		await expect(DMONDETHRewardsloAEIsN.withdraw.call(uintwLZVCFj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXAS0U8U = await DMONDETHRewards.new({from: accounts[4]});
		const addressIqwFuSn = accounts[2]
		const boolUH7oTPk = await DMONDETHRewardsXAS0U8U.isOwner.call({from: accounts[0]});
		const addressiAl5TGZ = await DMONDETHRewardsXAS0U8U.setStakeAddress.call(addressIqwFuSn, {from: accounts[4]});
		await DMONDETHRewardsXAS0U8U.getReward.call({from: accounts[3]});

		assert.equal(boolUH7oTPk, false)
		await expect(DMONDETHRewardsXAS0U8U.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsKh32MB = await DMONDETHRewards.new({from: accounts[3]});
		const uintoJSGlH0 = BigInt("0")
		const addresskrxouck = accounts[1]
		const addressOBYDeP4 = accounts[5]
		const uint256hcEs7zr = await DMONDETHRewardsKh32MB.stake.call(uintoJSGlH0, {from: accounts[5]});
		const uint256XPKFATJ = await DMONDETHRewardsKh32MB.remainingReward.call({from: accounts[4]});
		const addressZPX0G7g = await DMONDETHRewardsKh32MB.setStakeAddress.call(addresskrxouck, {from: "0x0000000000000000000000000000000000000001"});
		const addressROXYpsW = await DMONDETHRewardsKh32MB.setStakeAddress.call(addressOBYDeP4, {from: "0x0000000000000000000000000000000000000001"});
		const boolfBb1rjR = await DMONDETHRewardsKh32MB.isOwner.call({from: accounts[4]});
		await DMONDETHRewardsKh32MB.checkStart.call({from: accounts[2]});

		await expect(DMONDETHRewardsKh32MB.stake.call(uintoJSGlH0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})