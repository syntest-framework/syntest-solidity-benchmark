const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmPzfTPG = await DMONDETHRewards.new({from: accounts[3]});
		const addressmpbKqiV = accounts[4]
		const addressGXeWrVg = accounts[0]
		const addressaDMaRgX = "0x0000000000000000000000000000000000000001"
		const addressvV5vIXb = accounts[0]
//		const addressrED0H8v = await DMONDETHRewardsmPzfTPG.setRewardDistribution.call(addressmpbKqiV, {from: accounts[1]});
//		const addressB0ZPhXQ = await DMONDETHRewardsmPzfTPG.setRewardDistribution.call(addressGXeWrVg, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Gylfofm = await DMONDETHRewardsmPzfTPG.earned.call(addressaDMaRgX, {from: accounts[0]});
//		const addressxHouI0I = await DMONDETHRewardsmPzfTPG.transferOwnership.call(addressvV5vIXb, {from: accounts[3]});

		await expect(DMONDETHRewardsmPzfTPG.setRewardDistribution.call(addressmpbKqiV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPssRcT4 = await DMONDETHRewards.new({from: accounts[1]});
		const uintlnzFoN9 = BigInt("89")
		const uintkssWen1 = BigInt("876")
		const uintiR2QRrs = BigInt("1968")
//		await DMONDETHRewardsPssRcT4.onlyOwner.call({from: accounts[4]});
//		const uint256RYCdHwG = await DMONDETHRewardsPssRcT4.notifyRewardAmount.call(uintlnzFoN9, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Q7vwU1 = await DMONDETHRewardsPssRcT4.withdraw.call(uintkssWen1, {from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsPssRcT4.getReward.call({from: accounts[3]});
//		const uint256F9kFfqo = await DMONDETHRewardsPssRcT4.withdraw.call(uintiR2QRrs, {from: accounts[4]});

		await expect(DMONDETHRewardsPssRcT4.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbzJvhdW = await DMONDETHRewards.new({from: accounts[2]});
//		await DMONDETHRewardsbzJvhdW.exit.call({from: accounts[3]});
//		const uint256PXspKUk = await DMONDETHRewardsbzJvhdW.rewardPerToken.call({from: accounts[4]});
//		await DMONDETHRewardsbzJvhdW.checkStart.call({from: accounts[3]});

		await expect(DMONDETHRewardsbzJvhdW.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsALeIYz = await DMONDETHRewards.new({from: accounts[0]});
		const uintYexFQ0F = BigInt("1970")
		const boolPDiGJh = await DMONDETHRewardsALeIYz.isOwner.call({from: accounts[2]});
		const boolUEc03V1 = await DMONDETHRewardsALeIYz.isOwner.call({from: accounts[4]});
//		const uint256EyfWoZz = await DMONDETHRewardsALeIYz.withdraw.call(uintYexFQ0F, {from: accounts[1]});
//		await DMONDETHRewardsALeIYz.getReward.call({from: accounts[3]});

		assert.equal(boolPDiGJh, false)
		assert.equal(boolUEc03V1, false)
		await expect(DMONDETHRewardsALeIYz.withdraw.call(uintYexFQ0F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsyrH89wc = await DMONDETHRewards.new({from: accounts[1]});
		const uintiKXRvHL = BigInt("392")
		const addressJV6wLwc = accounts[0]
//		const uint256cZstw8 = await DMONDETHRewardsyrH89wc.stake.call(uintiKXRvHL, {from: accounts[2]});
//		const uint256j6UjDOO = await DMONDETHRewardsyrH89wc.rewardPerToken.call({from: accounts[4]});
//		const address9mt6AZ = await DMONDETHRewardsyrH89wc.transferOwnership.call(addressJV6wLwc, {from: accounts[1]});

		await expect(DMONDETHRewardsyrH89wc.stake.call(uintiKXRvHL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsOZlge9L = await DMONDETHRewards.new({from: accounts[1]});
		const addressoUvBWfo = accounts[4]
		const uintxYZGwF9 = BigInt("1091")
		const uint256P4LVwUa = await DMONDETHRewardsOZlge9L.balanceOf.call(addressoUvBWfo, {from: accounts[0]});
//		await DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]});
//		const uint256BNRKDyn = await DMONDETHRewardsOZlge9L.rewardPerToken.call({from: accounts[4]});
//		const uint256xLeNadL = await DMONDETHRewardsOZlge9L.stake.call(uintxYZGwF9, {from: accounts[2]});

		assert.equal(uint256P4LVwUa, BigInt("0"))
		await expect(DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsyrH89wc = await DMONDETHRewards.new({from: accounts[1]});
		const addressUGqSOMy = accounts[1]
		const addressBkcgmjh = accounts[1]
		const uint256cWF1srw = await DMONDETHRewardsyrH89wc.balanceOf.call(addressUGqSOMy, {from: accounts[4]});
		const uint256j6UjDOO = await DMONDETHRewardsyrH89wc.rewardPerToken.call({from: accounts[4]});
		const address9mt6AZ = await DMONDETHRewardsyrH89wc.transferOwnership.call(addressBkcgmjh, {from: accounts[1]});

		assert.equal(uint256cWF1srw, BigInt("0"))
		assert.equal(uint256j6UjDOO, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAJhqpmJ = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshOAIo3J = accounts[0]
		const addressu8Orlr = accounts[1]
		await DMONDETHRewardsAJhqpmJ.onlyRewardDistribution.call({from: accounts[4]});
		const addressoVSmxSJ = await DMONDETHRewardsAJhqpmJ.transferOwnership.call(addresshOAIo3J, {from: accounts[2]});
		await DMONDETHRewardsAJhqpmJ.onlyOwner.call({from: accounts[3]});
		const addressDdbBz5f = await DMONDETHRewardsAJhqpmJ.transferOwnership.call(addressu8Orlr, {from: accounts[4]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsMqWTVud = await DMONDETHRewards.new({from: accounts[3]});
		const uintEI6rwi9 = BigInt("916")
		const uintwYKiKDq = BigInt("1508")
		const addressDf4e6jx = accounts[2]
//		const uint256K4t6mJw = await DMONDETHRewardsMqWTVud.notifyRewardAmount.call(uintEI6rwi9, {from: accounts[1]});
//		await DMONDETHRewardsMqWTVud.exit.call({from: accounts[2]});
//		const uint256Y1c19V2 = await DMONDETHRewardsMqWTVud.withdraw.call(uintwYKiKDq, {from: accounts[1]});
//		const boolC3NlmO = await DMONDETHRewardsMqWTVud.isOwner.call({from: accounts[1]});
//		const uint256At7ABVK = await DMONDETHRewardsMqWTVud.earned.call(addressDf4e6jx, {from: accounts[0]});

		await expect(DMONDETHRewardsMqWTVud.notifyRewardAmount.call(uintEI6rwi9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsOZlge9L = await DMONDETHRewards.new({from: accounts[1]});
		const addressjZXtt5R = accounts[3]
		const addressiXgr69 = accounts[4]
		const uintUcdR7f8 = BigInt("1091")
//		await DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]});
//		const uint256NJ82A3 = await DMONDETHRewardsOZlge9L.balanceOf.call(addressjZXtt5R, {from: accounts[1]});
//		const addressESjZMpS = await DMONDETHRewardsOZlge9L.setRewardDistribution.call(addressiXgr69, {from: accounts[1]});
//		const uint256xLeNadL = await DMONDETHRewardsOZlge9L.stake.call(uintUcdR7f8, {from: accounts[2]});

		await expect(DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsOZlge9L = await DMONDETHRewards.new({from: accounts[1]});
//		await DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]});
//		await DMONDETHRewardsOZlge9L.renounceOwnership.call({from: accounts[1]});

		await expect(DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsOZlge9L = await DMONDETHRewards.new({from: accounts[1]});
		const addressukKoAP0 = accounts[5]
		const addressxQgZSiU = "0x0000000000000000000000000000000000000001"
		const uintHEnNeFL = BigInt("1091")
		const uint256P4LVwUa = await DMONDETHRewardsOZlge9L.balanceOf.call(addressukKoAP0, {from: accounts[0]});
//		const uint256TN8wutP = await DMONDETHRewardsOZlge9L.remainingReward.call({from: accounts[2]});
//		await DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]});
//		const uint256eNFjRUJ = await DMONDETHRewardsOZlge9L.balanceOf.call(addressxQgZSiU, {from: accounts[4]});
//		const uint256BNRKDyn = await DMONDETHRewardsOZlge9L.rewardPerToken.call({from: accounts[4]});
//		const uint256ZCoGvpS = await DMONDETHRewardsOZlge9L.rewardPerToken.call({from: accounts[5]});
//		const uint256xLeNadL = await DMONDETHRewardsOZlge9L.stake.call(uintHEnNeFL, {from: accounts[2]});
//		await DMONDETHRewardsOZlge9L.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256P4LVwUa, BigInt("0"))
		await expect(DMONDETHRewardsOZlge9L.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsD5HZ2O0 = await DMONDETHRewards.new({from: accounts[2]});
//		await DMONDETHRewardsD5HZ2O0.getReward.call({from: accounts[3]});
//		const uint256LT1WZ3d = await DMONDETHRewardsD5HZ2O0.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addressFhWvJFL = await DMONDETHRewardsD5HZ2O0.owner.call({from: accounts[1]});
//		await DMONDETHRewardsD5HZ2O0.exit.call({from: accounts[2]});
//		const uint256ugZ5Kd2 = await DMONDETHRewardsD5HZ2O0.lastTimeRewardApplicable.call({from: accounts[0]});
//		const boolAtUIewW = await DMONDETHRewardsD5HZ2O0.isOwner.call({from: accounts[3]});

		await expect(DMONDETHRewardsD5HZ2O0.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsOZlge9L = await DMONDETHRewards.new({from: accounts[1]});
		const uintlLc7T9j = BigInt("1481")
		const uintpOgX5QP = BigInt("1091")
		const uint2569Upbof = await DMONDETHRewardsOZlge9L.setStartTime.call(uintlLc7T9j, {from: accounts[1]});
//		await DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]});
//		await DMONDETHRewardsOZlge9L.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256xLeNadL = await DMONDETHRewardsOZlge9L.stake.call(uintpOgX5QP, {from: accounts[2]});

		await expect(DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsOZlge9L = await DMONDETHRewards.new({from: accounts[1]});
		const addressoSlsteV = accounts[6]
		const addressRJ9BE5E = accounts[0]
		const uintsanCzQD = BigInt("1091")
		const uint256P4LVwUa = await DMONDETHRewardsOZlge9L.balanceOf.call(addressoSlsteV, {from: accounts[0]});
		const addressQQg3x4 = await DMONDETHRewardsOZlge9L.setStakeAddress.call(addressRJ9BE5E, {from: accounts[1]});
//		await DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]});
//		const uint256xLeNadL = await DMONDETHRewardsOZlge9L.stake.call(uintsanCzQD, {from: accounts[2]});

		assert.equal(uint256P4LVwUa, BigInt("0"))
		await expect(DMONDETHRewardsOZlge9L.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewards5eZAQy = await DMONDETHRewards.new({from: accounts[4]});
		const uintRTy338k = BigInt("1037")
		const uint256GNU6Q5c = await DMONDETHRewards5eZAQy.notifyRewardAmount.call(uintRTy338k, {from: accounts[4]});
		const uint256ZENUy12 = await DMONDETHRewards5eZAQy.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256ZENUy12, BigInt("0"))
	});
})