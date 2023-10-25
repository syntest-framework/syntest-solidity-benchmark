const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsKwvZZ8t = await GUMARewards.new({from: accounts[1]});
		const addresssGsc1vP = accounts[3]
		const addresswlKcsAZ = await GUMARewardsKwvZZ8t.owner.call({from: accounts[5]});
		const addressiUCMoXl = await GUMARewardsKwvZZ8t.transferOwnership.call(addresssGsc1vP, {from: accounts[3]});
		const uint256Qu2BXKN = await GUMARewardsKwvZZ8t.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256uYWim7 = await GUMARewardsKwvZZ8t.lastTimeRewardApplicable.call({from: accounts[0]});
		await GUMARewardsKwvZZ8t.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresswlKcsAZ, 0x706614f90BE5fA4d9F08Fec29Ea7Bb9b2B80166E)
		await expect(GUMARewardsKwvZZ8t.transferOwnership.call(addresssGsc1vP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsoTZWuVU = await GUMARewards.new({from: accounts[3]});
		const addressvteBil = accounts[3]
		const addressWz1QRMP = accounts[2]
		const addressrvLFOw = accounts[1]
		const addressmuEVNMo = accounts[3]
		const booltpn0ztB = await GUMARewardsoTZWuVU.isOwner.call({from: accounts[0]});
		const addressA1jSqJ = await GUMARewardsoTZWuVU.setGUMA.call(addressWz1QRMP, addressvteBil, {from: accounts[1]});
		const addressUzZ4W35 = await GUMARewardsoTZWuVU.setRewardDistribution.call(addressrvLFOw, {from: accounts[0]});
		const addresszMITNkK = await GUMARewardsoTZWuVU.setRewardDistribution.call(addressmuEVNMo, {from: accounts[2]});

		assert.equal(booltpn0ztB, false)
		await expect(GUMARewardsoTZWuVU.setGUMA.call(addressWz1QRMP, addressvteBil, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsackJh9x = await GUMARewards.new({from: accounts[2]});
		const addressb9vW7xN = accounts[2]
		const addresscr86AoQ = accounts[2]
		const addressKUdkWS = accounts[3]
		const uintr30uRP4 = BigInt("2005")
		const addressVOaJfqT = await GUMARewardsackJh9x.updateReward.call(addressb9vW7xN, {from: accounts[0]});
		const addressfVQRqlK = await GUMARewardsackJh9x.setGUMA.call(addressKUdkWS, addresscr86AoQ, {from: accounts[2]});
		const uint256LeQxPrl = await GUMARewardsackJh9x.stake.call(uintr30uRP4, {from: accounts[1]});
		const uint25680LnQ9 = await GUMARewardsackJh9x.totalSupply.call({from: accounts[1]});
		const booljWCZZku = await GUMARewardsackJh9x.isOwner.call({from: accounts[1]});

		await expect(GUMARewardsackJh9x.updateReward.call(addressb9vW7xN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsYe0f1L7 = await GUMARewards.new({from: accounts[0]});
		const uint256vQmXvem = await GUMARewardsYe0f1L7.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTFOXjQd = await GUMARewardsYe0f1L7.isOwner.call({from: accounts[1]});
		const boolyLd9AkB = await GUMARewardsYe0f1L7.isOwner.call({from: accounts[4]});
		const boolllhWHkq = await GUMARewardsYe0f1L7.isOwner.call({from: accounts[1]});

		assert.equal(boolTFOXjQd, false)
		assert.equal(boolllhWHkq, false)
		assert.equal(boolyLd9AkB, false)
		assert.equal(uint256vQmXvem, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardszlCQS29 = await GUMARewards.new({from: accounts[3]});
		const uint256OEkxB9s = await GUMARewardszlCQS29.rewardPerToken.call({from: accounts[4]});
		await GUMARewardszlCQS29.onlyRewardDistribution.call({from: accounts[0]});

		assert.equal(uint256OEkxB9s, BigInt("0"))
		await expect(GUMARewardszlCQS29.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsUOF0kD4 = await GUMARewards.new({from: accounts[3]});
		await GUMARewardsUOF0kD4.getReward.call({from: accounts[0]});
		await GUMARewardsUOF0kD4.onlyRewardDistribution.call({from: accounts[2]});

		await expect(GUMARewardsUOF0kD4.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsC2kx5UU = await GUMARewards.new({from: accounts[5]});
		const uintQnhC0tc = BigInt("322")
		const addressAK2aZ2H = accounts[3]
		const uintAVx5Qij = BigInt("5")
		const uint256cIskjI = await GUMARewardsC2kx5UU.stake.call(uintQnhC0tc, {from: accounts[0]});
		const address1KUtmn = await GUMARewardsC2kx5UU.transferOwnership.call(addressAK2aZ2H, {from: accounts[4]});
		await GUMARewardsC2kx5UU.renounceOwnership.call({from: accounts[0]});
		const uint256fOkHZKi = await GUMARewardsC2kx5UU.notifyRewardAmount.call(uintAVx5Qij, {from: accounts[5]});

		await expect(GUMARewardsC2kx5UU.stake.call(uintQnhC0tc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsDWKQ4YD = await GUMARewards.new({from: accounts[4]});
		const addressdOX7YtJ = accounts[3]
		const addresstZtS4Z = accounts[3]
		const uintPxZpYf = BigInt("1467")
		const addresspr9J7Hg = await GUMARewardsDWKQ4YD.transferOwnership.call(addressdOX7YtJ, {from: accounts[4]});
		const addressuIa3kM = await GUMARewardsDWKQ4YD.setRewardDistribution.call(addresstZtS4Z, {from: accounts[4]});
		const uint256bxfsujg = await GUMARewardsDWKQ4YD.stake.call(uintPxZpYf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GUMARewardsDWKQ4YD.stake.call(uintPxZpYf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsDWKQ4YD = await GUMARewards.new({from: accounts[4]});
		const addressjGfUwHM = accounts[3]
		const addresspoAlgGd = accounts[3]
		const uintOadUKrF = BigInt("1467")
		await GUMARewardsDWKQ4YD.renounceOwnership.call({from: accounts[4]});
		const addressZeJSL8D = await GUMARewardsDWKQ4YD.owner.call({from: accounts[1]});
		const addresspr9J7Hg = await GUMARewardsDWKQ4YD.transferOwnership.call(addressjGfUwHM, {from: accounts[4]});
		const addressuIa3kM = await GUMARewardsDWKQ4YD.setRewardDistribution.call(addresspoAlgGd, {from: accounts[4]});
		const uint256bxfsujg = await GUMARewardsDWKQ4YD.stake.call(uintOadUKrF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GUMARewardsDWKQ4YD.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsJdYKzfE = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256TT7CI9A = await GUMARewardsJdYKzfE.totalSupply.call({from: accounts[1]});
		const uint256xP1S5nB = await GUMARewardsJdYKzfE.lastTimeRewardApplicable.call({from: accounts[0]});
		await GUMARewardsJdYKzfE.onlyOwner.call({from: accounts[0]});
	});
})