const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsKaHBKD = await JGNRewards.new({from: accounts[1]});
		const addresslBCz46c = accounts[0]
		const uintyJ6bKjd = BigInt("425")
		const uint256BtEqF6x = await JGNRewardsKaHBKD.rewardPerToken.call({from: accounts[1]});
		const uint256he3QvEI = await JGNRewardsKaHBKD.balanceOf.call(addresslBCz46c, {from: accounts[1]});
//		await JGNRewardsKaHBKD.checkStart.call({from: accounts[5]});
//		await JGNRewardsKaHBKD.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256qxjzpsk = await JGNRewardsKaHBKD.stake.call(uintyJ6bKjd, {from: accounts[2]});

		assert.equal(uint256BtEqF6x, BigInt("0"))
		assert.equal(uint256he3QvEI, BigInt("0"))
		await expect(JGNRewardsKaHBKD.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsYBeJj0r = await JGNRewards.new({from: accounts[2]});
		const uintiwUj9Nc = BigInt("998")
		const addresspYctnFR = accounts[2]
		const uintWUeiQIU = BigInt("513")
//		await JGNRewardsYBeJj0r.getReward.call({from: accounts[3]});
//		const uint256VJX3Cr9 = await JGNRewardsYBeJj0r.stake.call(uintiwUj9Nc, {from: accounts[2]});
//		await JGNRewardsYBeJj0r.getReward.call({from: accounts[5]});
//		const addressqSBwhcs = await JGNRewardsYBeJj0r.updateReward.call(addresspYctnFR, {from: accounts[3]});
//		const uint256nsEwEVA = await JGNRewardsYBeJj0r.stake.call(uintWUeiQIU, {from: accounts[3]});

		await expect(JGNRewardsYBeJj0r.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsZq0I76p = await JGNRewards.new({from: accounts[4]});
		const uintXYjGbHH = BigInt("1502")
//		const uint256nKAow5p = await JGNRewardsZq0I76p.notifyRewardAmount.call(uintXYjGbHH, {from: accounts[4]});
//		const uint256lbfgOUF = await JGNRewardsZq0I76p.rewardPerToken.call({from: accounts[2]});
//		await JGNRewardsZq0I76p.checkStart.call({from: accounts[1]});

		await expect(JGNRewardsZq0I76p.notifyRewardAmount.call(uintXYjGbHH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsSWK4vDQ = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEZSC0gA = accounts[2]
		const uint256cDTNcso = await JGNRewardsSWK4vDQ.earned.call(addressEZSC0gA, {from: accounts[4]});
		await JGNRewardsSWK4vDQ.exit.call({from: accounts[1]});
		await JGNRewardsSWK4vDQ.checkStart.call({from: accounts[4]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsdZ2rQW2 = await JGNRewards.new({from: accounts[1]});
		const addresskQOoBtM = accounts[2]
		const uint3CnLY7 = BigInt("1221")
		const uint256g6tQki5 = await JGNRewardsdZ2rQW2.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256azl4Lwn = await JGNRewardsdZ2rQW2.balanceOf.call(addresskQOoBtM, {from: accounts[3]});
//		const uint256M3CQbCC = await JGNRewardsdZ2rQW2.withdraw.call(uint3CnLY7, {from: accounts[5]});

		assert.equal(uint256azl4Lwn, BigInt("0"))
		assert.equal(uint256g6tQki5, BigInt("0"))
		await expect(JGNRewardsdZ2rQW2.withdraw.call(uint3CnLY7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsrM7YhW = await JGNRewards.new({from: accounts[1]});
		const addressWA9Avbd = accounts[1]
		const addresso6AhpVv = accounts[3]
//		await JGNRewardsrM7YhW.exit.call({from: accounts[3]});
//		await JGNRewardsrM7YhW.checkStart.call({from: accounts[2]});
//		await JGNRewardsrM7YhW.exit.call({from: accounts[0]});
//		await JGNRewardsrM7YhW.checkStart.call({from: accounts[4]});
//		const uint256EmQXjYc = await JGNRewardsrM7YhW.earned.call(addressWA9Avbd, {from: accounts[2]});
//		const uint256SfZ5cVz = await JGNRewardsrM7YhW.balanceOf.call(addresso6AhpVv, {from: accounts[5]});

		await expect(JGNRewardsrM7YhW.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})