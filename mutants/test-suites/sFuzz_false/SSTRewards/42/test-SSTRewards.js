const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsjT9ek0f = await SSTRewards.new({from: accounts[0]});
		const addressjURnbX5 = accounts[4]
		const uint256WGcutq7 = await SSTRewardsjT9ek0f.lastTimeRewardApplicable.call({from: accounts[2]});
//		await SSTRewardsjT9ek0f.exit.call({from: accounts[4]});
//		const uint256YJtnDsl = await SSTRewardsjT9ek0f.earned.call(addressjURnbX5, {from: accounts[0]});
//		const uint256WRaqwgy = await SSTRewardsjT9ek0f.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256WGcutq7, BigInt("0"))
		await expect(SSTRewardsjT9ek0f.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsdDyQrVA = await SSTRewards.new({from: accounts[3]});
		const addressI7H0oU = "0x0000000000000000000000000000000000000001"
		const addressvmSV7jI = accounts[1]
		const uintaSkMx99 = BigInt("1113")
		const uint256uSZFaEJ = await SSTRewardsdDyQrVA.earned.call(addressI7H0oU, {from: accounts[2]});
		const uint256vYfkbQ1 = await SSTRewardsdDyQrVA.balanceOf.call(addressvmSV7jI, {from: accounts[1]});
//		await SSTRewardsdDyQrVA.getReward.call({from: accounts[1]});
//		await SSTRewardsdDyQrVA.getReward.call({from: accounts[0]});
//		const uint256CxHqZG = await SSTRewardsdDyQrVA.stake.call(uintaSkMx99, {from: accounts[3]});
//		await SSTRewardsdDyQrVA.checkStart.call({from: accounts[1]});

		assert.equal(uint256uSZFaEJ, BigInt("0"))
		assert.equal(uint256vYfkbQ1, BigInt("0"))
		await expect(SSTRewardsdDyQrVA.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsEjeR45J = await SSTRewards.new({from: accounts[4]});
		const uintsemq7pC = BigInt("1670")
		const addressl4zZPVa = accounts[3]
		const uintZB6b4Kw = BigInt("176")
//		const uint256xWg9nHp = await SSTRewardsEjeR45J.withdraw.call(uintsemq7pC, {from: accounts[2]});
//		const uint256zx1463f = await SSTRewardsEjeR45J.earned.call(addressl4zZPVa, {from: accounts[1]});
//		const uint256N2mB3Um = await SSTRewardsEjeR45J.stake.call(uintZB6b4Kw, {from: accounts[2]});
//		await SSTRewardsEjeR45J.getReward.call({from: accounts[3]});
//		const uint256EluZPnD = await SSTRewardsEjeR45J.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(SSTRewardsEjeR45J.withdraw.call(uintsemq7pC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsxJgM0ZR = await SSTRewards.new({from: accounts[3]});
		const addressVCuoIB8 = accounts[3]
		const uintWgxaLUT = BigInt("1655")
//		const addressnFrNvHy = await SSTRewardsxJgM0ZR.updateReward.call(addressVCuoIB8, {from: accounts[1]});
//		await SSTRewardsxJgM0ZR.checkStart.call({from: accounts[3]});
//		const uint256n6m2kUM = await SSTRewardsxJgM0ZR.withdraw.call(uintWgxaLUT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsxJgM0ZR.updateReward.call(addressVCuoIB8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsqvkzJdp = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEKyflm = accounts[0]
		await SSTRewardsqvkzJdp.exit.call({from: accounts[1]});
		const uint256Afbf15y = await SSTRewardsqvkzJdp.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLVAsY4L = await SSTRewardsqvkzJdp.updateReward.call(addressEKyflm, {from: accounts[2]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsCMf3P6z = await SSTRewards.new({from: accounts[1]});
		const uintvecJte = BigInt("1448")
		const addresstzpGlbb = accounts[3]
//		const uint256YSY8uSd = await SSTRewardsCMf3P6z.notifyRewardAmount.call(uintvecJte, {from: accounts[4]});
//		const uint256uKrytXt = await SSTRewardsCMf3P6z.balanceOf.call(addresstzpGlbb, {from: accounts[3]});
//		const uint256QEd5EE3 = await SSTRewardsCMf3P6z.rewardPerToken.call({from: accounts[3]});

		await expect(SSTRewardsCMf3P6z.notifyRewardAmount.call(uintvecJte, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})