const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsxgBKdSt = await SSTRewards.new({from: accounts[3]});
		const uintIwelZF1 = BigInt("1309")
		const addressUYgIWz = accounts[1]
		const uintLlmzdRi = BigInt("1362")
		const uintBXjUvQk = BigInt("448")
//		const uint256ER9Akqp = await SSTRewardsxgBKdSt.stake.call(uintIwelZF1, {from: accounts[5]});
//		const uint256tL0AQ3i = await SSTRewardsxgBKdSt.earned.call(addressUYgIWz, {from: accounts[1]});
//		await SSTRewardsxgBKdSt.getReward.call({from: accounts[2]});
//		await SSTRewardsxgBKdSt.checkStart.call({from: accounts[2]});
//		const uint256pMzcWvo = await SSTRewardsxgBKdSt.stake.call(uintLlmzdRi, {from: accounts[4]});
//		const uint256H0qGiuf = await SSTRewardsxgBKdSt.withdraw.call(uintBXjUvQk, {from: accounts[5]});

		await expect(SSTRewardsxgBKdSt.stake.call(uintIwelZF1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsKIoa4Z = await SSTRewards.new({from: accounts[3]});
		const uint256XMLq3MY = await SSTRewardsKIoa4Z.rewardPerToken.call({from: accounts[2]});
		const uint256DyRXp5 = await SSTRewardsKIoa4Z.rewardPerToken.call({from: accounts[1]});
//		await SSTRewardsKIoa4Z.checkStart.call({from: accounts[1]});

		assert.equal(uint256DyRXp5, BigInt("0"))
		assert.equal(uint256XMLq3MY, BigInt("0"))
		await expect(SSTRewardsKIoa4Z.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsR1YOs7A = await SSTRewards.new({from: accounts[2]});
		const addressPi7iZ6c = accounts[3]
		const uintLrD0fof = BigInt("1371")
		const uint256G6CkR4K = await SSTRewardsR1YOs7A.earned.call(addressPi7iZ6c, {from: accounts[2]});
		const uint256kXa4aqV = await SSTRewardsR1YOs7A.totalSupply.call({from: accounts[3]});
//		const uint256l6D9LhY = await SSTRewardsR1YOs7A.withdraw.call(uintLrD0fof, {from: accounts[4]});

		assert.equal(uint256G6CkR4K, BigInt("0"))
		assert.equal(uint256kXa4aqV, BigInt("0"))
		await expect(SSTRewardsR1YOs7A.withdraw.call(uintLrD0fof, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsmDB6GDj = await SSTRewards.new({from: accounts[2]});
		const addressfH6Qfs8 = accounts[4]
		const uintjCSBQsL = BigInt("460")
		const addressb2V9Iv = accounts[2]
		const uintO5hSc1 = BigInt("911")
//		await SSTRewardsmDB6GDj.getReward.call({from: accounts[4]});
//		const addressgroAa3t = await SSTRewardsmDB6GDj.updateReward.call(addressfH6Qfs8, {from: accounts[0]});
//		const uint256tBv81t3 = await SSTRewardsmDB6GDj.stake.call(uintjCSBQsL, {from: accounts[1]});
//		const uint256UhOXCoh = await SSTRewardsmDB6GDj.earned.call(addressb2V9Iv, {from: accounts[4]});
//		const uint256udVwzn = await SSTRewardsmDB6GDj.withdraw.call(uintO5hSc1, {from: accounts[2]});
//		await SSTRewardsmDB6GDj.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsmDB6GDj.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsiwntl65 = await SSTRewards.new({from: accounts[4]});
		const uintLwI7s7c = BigInt("941")
//		await SSTRewardsiwntl65.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardsiwntl65.exit.call({from: accounts[3]});
//		const uint256aEn6yVy = await SSTRewardsiwntl65.stake.call(uintLwI7s7c, {from: accounts[2]});
//		const uint256sl4CB0m = await SSTRewardsiwntl65.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256ic4p3HI = await SSTRewardsiwntl65.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsiwntl65.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsiwntl65 = await SSTRewards.new({from: accounts[4]});
		const uintJLG9LT = BigInt("1537")
		const uint256sl4CB0m = await SSTRewardsiwntl65.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256tJ9IqZR = await SSTRewardsiwntl65.notifyRewardAmount.call(uintJLG9LT, {from: accounts[4]});

		assert.equal(uint256sl4CB0m, BigInt("0"))
		await expect(SSTRewardsiwntl65.notifyRewardAmount.call(uintJLG9LT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsXEFgXcG = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256xeRHtx3 = await SSTRewardsXEFgXcG.lastTimeRewardApplicable.call({from: accounts[2]});
		await SSTRewardsXEFgXcG.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await SSTRewardsXEFgXcG.getReward.call({from: accounts[4]});
		await SSTRewardsXEFgXcG.exit.call({from: accounts[4]});
		const uint256OA4QN73 = await SSTRewardsXEFgXcG.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});
})