const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsxKsBk06 = await GUMARewards.new({from: accounts[3]});
		const uintRG0I7GV = BigInt("1126")
		const addressTANqSlb = accounts[0]
		const uintgLUY9sG = BigInt("348")
		const addresscbdi3ZA = accounts[5]
		const uintWdxKmKa = BigInt("1105")
		const uint256p2Zk0VI = await GUMARewardsxKsBk06.stake.call(uintRG0I7GV, {from: accounts[3]});
		const addressHRDgL9j = await GUMARewardsxKsBk06.transferOwnership.call(addressTANqSlb, {from: accounts[4]});
		const uint256Ava4ZyN = await GUMARewardsxKsBk06.notifyRewardAmount.call(uintgLUY9sG, {from: accounts[4]});
		const uint256pVSJnj = await GUMARewardsxKsBk06.earned.call(addresscbdi3ZA, {from: accounts[5]});
		const uint256OZ6wR57 = await GUMARewardsxKsBk06.notifyRewardAmount.call(uintWdxKmKa, {from: accounts[0]});

		await expect(GUMARewardsxKsBk06.stake.call(uintRG0I7GV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsGBMAYD9 = await GUMARewards.new({from: accounts[3]});
		const addressQamiQCC = "0x0000000000000000000000000000000000000001"
		const addressQpOGF8y = await GUMARewardsGBMAYD9.setRewardDistribution.call(addressQamiQCC, {from: accounts[1]});
		const uint256fgHu7ap = await GUMARewardsGBMAYD9.rewardPerToken.call({from: accounts[1]});
		await GUMARewardsGBMAYD9.renounceOwnership.call({from: accounts[4]});
		const uint256d5JAXoh = await GUMARewardsGBMAYD9.lastTimeRewardApplicable.call({from: accounts[2]});
		await GUMARewardsGBMAYD9.renounceOwnership.call({from: accounts[2]});

		await expect(GUMARewardsGBMAYD9.setRewardDistribution.call(addressQamiQCC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardszyc69c9 = await GUMARewards.new({from: accounts[3]});
		const addressmT7WfMs = accounts[1]
		const addressZQMh8f = accounts[3]
		const addressCspudie = accounts[4]
		const uint256BfBzENq = await GUMARewardszyc69c9.totalSupply.call({from: accounts[3]});
		const addressoWctjm = await GUMARewardszyc69c9.setGUMA.call(addressZQMh8f, addressmT7WfMs, {from: accounts[2]});
		const uint256bHBb6rq = await GUMARewardszyc69c9.balanceOf.call(addressCspudie, {from: accounts[2]});

		assert.equal(uint256BfBzENq, BigInt("0"))
		await expect(GUMARewardszyc69c9.setGUMA.call(addressZQMh8f, addressmT7WfMs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsisHyzQr = await GUMARewards.new({from: accounts[3]});
		const addressnpKGNQ = await GUMARewardsisHyzQr.owner.call({from: accounts[0]});
		await GUMARewardsisHyzQr.getReward.call({from: accounts[4]});
		await GUMARewardsisHyzQr.getReward.call({from: accounts[4]});

		assert.equal(addressnpKGNQ, 0x70aFA0cAFE90d28DeE79761D17B341283B5c8680)
		await expect(GUMARewardsisHyzQr.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsYn5SPb = await GUMARewards.new({from: accounts[4]});
		const addressKeC3mdW = accounts[3]
		await GUMARewardsYn5SPb.getReward.call({from: accounts[2]});
		await GUMARewardsYn5SPb.onlyOwner.call({from: accounts[3]});
		const addressglL5tF2 = await GUMARewardsYn5SPb.transferOwnership.call(addressKeC3mdW, {from: accounts[5]});

		await expect(GUMARewardsYn5SPb.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsisHyzQr = await GUMARewards.new({from: accounts[3]});
		const addresslvcTHn5 = accounts[5]
		const uint2wBwW1 = BigInt("471")
		const addressnpKGNQ = await GUMARewardsisHyzQr.owner.call({from: accounts[0]});
		await GUMARewardsisHyzQr.getReward.call({from: accounts[4]});
		await GUMARewardsisHyzQr.getReward.call({from: accounts[4]});
		const addressc28CDEz = await GUMARewardsisHyzQr.transferOwnership.call(addresslvcTHn5, {from: accounts[3]});
		const uint256gRN4qhF = await GUMARewardsisHyzQr.stake.call(uint2wBwW1, {from: accounts[4]});

		assert.equal(addressnpKGNQ, 0x70aFA0cAFE90d28DeE79761D17B341283B5c8680)
		await expect(GUMARewardsisHyzQr.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewards22o8j7 = await GUMARewards.new({from: accounts[4]});
		const uintSQvi3KX = BigInt("67")
		const boolmXEE50S = await GUMARewards22o8j7.isOwner.call({from: accounts[4]});
		const uint256QUHcOq = await GUMARewards22o8j7.totalSupply.call({from: accounts[2]});
		await GUMARewards22o8j7.renounceOwnership.call({from: accounts[4]});
		const boolD8Y1Fir = await GUMARewards22o8j7.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mBPllGn = await GUMARewards22o8j7.totalSupply.call({from: accounts[2]});
		const uint256CGtZF7g = await GUMARewards22o8j7.stake.call(uintSQvi3KX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolmXEE50S, true)
		assert.equal(uint256QUHcOq, BigInt("0"))
		await expect(GUMARewards22o8j7.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsisHyzQr = await GUMARewards.new({from: accounts[3]});
		const addressxFoPlU = accounts[1]
		const addressRVVYa6A = accounts[5]
		const uintNErn7Xk = BigInt("1830")
		const addressnpKGNQ = await GUMARewardsisHyzQr.owner.call({from: accounts[0]});
		const addressZQvK67S = await GUMARewardsisHyzQr.setRewardDistribution.call(addressxFoPlU, {from: accounts[3]});
		await GUMARewardsisHyzQr.getReward.call({from: accounts[4]});
		await GUMARewardsisHyzQr.getReward.call({from: accounts[4]});
		const addressc28CDEz = await GUMARewardsisHyzQr.transferOwnership.call(addressRVVYa6A, {from: accounts[3]});
		const uint256gRN4qhF = await GUMARewardsisHyzQr.stake.call(uintNErn7Xk, {from: accounts[4]});

		assert.equal(addressnpKGNQ, 0x70aFA0cAFE90d28DeE79761D17B341283B5c8680)
		await expect(GUMARewardsisHyzQr.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsePlOlFW = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOh3zsgS = accounts[3]
		const addressJaEMkL3 = await GUMARewardsePlOlFW.transferOwnership.call(addressOh3zsgS, {from: accounts[2]});
		const boolVIwkMS = await GUMARewardsePlOlFW.isOwner.call({from: accounts[3]});
		const uint256YdT17Yu = await GUMARewardsePlOlFW.rewardPerToken.call({from: accounts[2]});
	});
})