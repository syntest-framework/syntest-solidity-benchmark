const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsqIDeUza = await GUMARewards.new({from: accounts[3]});
		const uintQPIhnE5 = BigInt("1602")
		const uintdHK1tDT = BigInt("64")
		const addressTNOa0z5 = accounts[1]
		const uint256cW6Hby4 = await GUMARewardsqIDeUza.stake.call(uintQPIhnE5, {from: accounts[1]});
		const uint256br6sjDk = await GUMARewardsqIDeUza.stake.call(uintdHK1tDT, {from: accounts[4]});
		const addressNemyegR = await GUMARewardsqIDeUza.setRewardDistribution.call(addressTNOa0z5, {from: accounts[4]});
		const addresszkszIeA = await GUMARewardsqIDeUza.owner.call({from: accounts[0]});

		await expect(GUMARewardsqIDeUza.stake.call(uintQPIhnE5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsJT2gmRv = await GUMARewards.new({from: accounts[1]});
		const addressAYMxfch = accounts[2]
		const uintVym3HA0 = BigInt("78")
		const uint256gATaKcc = await GUMARewardsJT2gmRv.rewardPerToken.call({from: accounts[2]});
		const addressm22iEpG = await GUMARewardsJT2gmRv.setRewardDistribution.call(addressAYMxfch, {from: accounts[2]});
		const booljIPRB9k = await GUMARewardsJT2gmRv.isOwner.call({from: accounts[4]});
		const uint256E8URF0c = await GUMARewardsJT2gmRv.stake.call(uintVym3HA0, {from: accounts[4]});

		assert.equal(uint256gATaKcc, BigInt("0"))
		await expect(GUMARewardsJT2gmRv.setRewardDistribution.call(addressAYMxfch, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardstrNdF6 = await GUMARewards.new({from: accounts[2]});
		const address8Y2teF = accounts[3]
		await GUMARewardstrNdF6.onlyRewardDistribution.call({from: accounts[2]});
		const addressD7btWZb = await GUMARewardstrNdF6.setRewardDistribution.call(address8Y2teF, {from: accounts[5]});
		await GUMARewardstrNdF6.getReward.call({from: accounts[2]});

		await expect(GUMARewardstrNdF6.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsunwKIpm = await GUMARewards.new({from: accounts[0]});
		const uintZh6hgR1 = BigInt("766")
		const uint256GOGwgj5 = await GUMARewardsunwKIpm.notifyRewardAmount.call(uintZh6hgR1, {from: accounts[5]});
		await GUMARewardsunwKIpm.onlyRewardDistribution.call({from: accounts[4]});

		await expect(GUMARewardsunwKIpm.notifyRewardAmount.call(uintZh6hgR1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsojCYZZ = await GUMARewards.new({from: accounts[3]});
		const boollctz1S7 = await GUMARewardsojCYZZ.isOwner.call({from: accounts[1]});
		const bool5qlWPV = await GUMARewardsojCYZZ.isOwner.call({from: accounts[4]});
		await GUMARewardsojCYZZ.getReward.call({from: accounts[0]});

		assert.equal(bool5qlWPV, false)
		assert.equal(boollctz1S7, false)
		await expect(GUMARewardsojCYZZ.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsojCYZZ = await GUMARewards.new({from: accounts[3]});
		const addresslJdfcLW = accounts[5]
		const addresshSg6pfo = await GUMARewardsojCYZZ.transferOwnership.call(addresslJdfcLW, {from: accounts[3]});
		const bool5qlWPV = await GUMARewardsojCYZZ.isOwner.call({from: accounts[4]});

		assert.equal(bool5qlWPV, false)
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsDvCu0lC = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqFWu9Ti = accounts[2]
		const uintUSRjQhC = BigInt("1548")
		const uint256MoQ4VF0 = await GUMARewardsDvCu0lC.earned.call(addressqFWu9Ti, {from: accounts[4]});
		const uint256TqgkS8p = await GUMARewardsDvCu0lC.stake.call(uintUSRjQhC, {from: accounts[2]});
		const addressjL8WZt1 = await GUMARewardsDvCu0lC.owner.call({from: accounts[3]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsojCYZZ = await GUMARewards.new({from: accounts[3]});
		const bool5qlWPV = await GUMARewardsojCYZZ.isOwner.call({from: accounts[4]});
		await GUMARewardsojCYZZ.renounceOwnership.call({from: accounts[3]});
		await GUMARewardsojCYZZ.onlyRewardDistribution.call({from: accounts[0]});

		assert.equal(bool5qlWPV, false)
		await expect(GUMARewardsojCYZZ.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqIDeUza = await GUMARewards.new({from: accounts[3]});
		const addresszkszIeA = await GUMARewardsqIDeUza.owner.call({from: accounts[0]});

		assert.equal(addresszkszIeA, 0x4C99500a9a83d672afd913460666BeeE32205919)
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsojCYZZ = await GUMARewards.new({from: accounts[3]});
		const addressEK1QtVp = accounts[0]
		const addressvQe2Ie8 = accounts[0]
		const boollctz1S7 = await GUMARewardsojCYZZ.isOwner.call({from: accounts[1]});
		const addressM3B20K6 = await GUMARewardsojCYZZ.setRewardDistribution.call(addressEK1QtVp, {from: accounts[3]});
		const bool5qlWPV = await GUMARewardsojCYZZ.isOwner.call({from: accounts[4]});
		const uint256aveM0m = await GUMARewardsojCYZZ.balanceOf.call(addressvQe2Ie8, {from: accounts[4]});
		await GUMARewardsojCYZZ.getReward.call({from: accounts[0]});
		await GUMARewardsojCYZZ.renounceOwnership.call({from: accounts[3]});

		assert.equal(bool5qlWPV, false)
		assert.equal(boollctz1S7, false)
		assert.equal(uint256aveM0m, BigInt("0"))
		await expect(GUMARewardsojCYZZ.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})