const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsGXfy7fn = await JGNRewards.new({from: accounts[4]});
		const uintBjTTZvj = BigInt("24")
		await JGNRewardsGXfy7fn.getReward.call({from: accounts[1]});
		const uint256niQuozs = await JGNRewardsGXfy7fn.stake.call(uintBjTTZvj, {from: accounts[5]});
		const uint256ih5JF3t = await JGNRewardsGXfy7fn.rewardPerToken.call({from: accounts[1]});
		await JGNRewardsGXfy7fn.exit.call({from: accounts[5]});

		await expect(JGNRewardsGXfy7fn.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsWBzgZ0O = await JGNRewards.new({from: accounts[4]});
		const uintmq2hozm = BigInt("494")
		const addressitWCejy = accounts[5]
		const uintxaiBio = BigInt("520")
		const uint256rMRj3Wh = await JGNRewardsWBzgZ0O.withdraw.call(uintmq2hozm, {from: accounts[2]});
		const uint256fNsz7mi = await JGNRewardsWBzgZ0O.totalSupply.call({from: accounts[4]});
		await JGNRewardsWBzgZ0O.checkStart.call({from: accounts[1]});
		const uint256yI6aKPW = await JGNRewardsWBzgZ0O.earned.call(addressitWCejy, {from: accounts[1]});
		const uint256WhRNsdV = await JGNRewardsWBzgZ0O.withdraw.call(uintxaiBio, {from: accounts[4]});
		const uint256PyrwlGv = await JGNRewardsWBzgZ0O.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(JGNRewardsWBzgZ0O.withdraw.call(uintmq2hozm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsYowoT1i = await JGNRewards.new({from: accounts[3]});
		const addressEkQSr7E = accounts[1]
		const uint256ST4iNqW = await JGNRewardsYowoT1i.rewardPerToken.call({from: accounts[2]});
		const addressdDmv4vJ = await JGNRewardsYowoT1i.updateReward.call(addressEkQSr7E, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ST4iNqW, BigInt("0"))
		await expect(JGNRewardsYowoT1i.updateReward.call(addressEkQSr7E, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsdQYSGvv = await JGNRewards.new({from: accounts[1]});
		await JGNRewardsdQYSGvv.exit.call({from: accounts[0]});
		await JGNRewardsdQYSGvv.getReward.call({from: accounts[3]});
		await JGNRewardsdQYSGvv.getReward.call({from: accounts[4]});

		await expect(JGNRewardsdQYSGvv.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsGXfy7fn = await JGNRewards.new({from: accounts[4]});
		const uintIFtsfpo = BigInt("0")
		const uintEFvbqkm = BigInt("1929")
		await JGNRewardsGXfy7fn.getReward.call({from: accounts[1]});
		const uint256niQuozs = await JGNRewardsGXfy7fn.stake.call(uintIFtsfpo, {from: accounts[5]});
		const uint256RmoztBY = await JGNRewardsGXfy7fn.withdraw.call(uintEFvbqkm, {from: accounts[4]});
		const uint256ih5JF3t = await JGNRewardsGXfy7fn.rewardPerToken.call({from: accounts[1]});
		await JGNRewardsGXfy7fn.exit.call({from: accounts[5]});

		await expect(JGNRewardsGXfy7fn.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardscfu82Ib = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDo23P4N = accounts[1]
		const addressOZ9rh0H = accounts[0]
		const uint256PWyp8G = await JGNRewardscfu82Ib.balanceOf.call(addressDo23P4N, {from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardscfu82Ib.getReward.call({from: accounts[1]});
		const uint256UloJHNR = await JGNRewardscfu82Ib.rewardPerToken.call({from: accounts[4]});
		await JGNRewardscfu82Ib.exit.call({from: accounts[5]});
		const uint256le9QXK = await JGNRewardscfu82Ib.earned.call(addressOZ9rh0H, {from: accounts[1]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsstKYl3b = await JGNRewards.new({from: accounts[2]});
		const uintpzqvUUG = BigInt("681")
		const uintXxxp2qA = BigInt("1558")
		const addresslrce64t = accounts[2]
		const uintp7vVHTN = BigInt("250")
		await JGNRewardsstKYl3b.getReward.call({from: accounts[3]});
		const uint256NvIk3G = await JGNRewardsstKYl3b.notifyRewardAmount.call(uintpzqvUUG, {from: accounts[3]});
		const uint256Zi8GriX = await JGNRewardsstKYl3b.rewardPerToken.call({from: accounts[0]});
		await JGNRewardsstKYl3b.getReward.call({from: accounts[3]});
		const uint256sD5uPME = await JGNRewardsstKYl3b.withdraw.call(uintXxxp2qA, {from: accounts[2]});
		const uint256Cc8nD11 = await JGNRewardsstKYl3b.earned.call(addresslrce64t, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EBysDm = await JGNRewardsstKYl3b.stake.call(uintp7vVHTN, {from: accounts[0]});

		await expect(JGNRewardsstKYl3b.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})