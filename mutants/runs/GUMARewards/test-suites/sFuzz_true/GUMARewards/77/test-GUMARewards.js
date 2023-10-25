const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsVRy8hfm = await GUMARewards.new({from: accounts[4]});
		const addressfWBoAya = accounts[3]
		const addressD1h3a7x = "0x0000000000000000000000000000000000000001"
		const addressCdADlqF = await GUMARewardsVRy8hfm.setGUMA.call(addressD1h3a7x, addressfWBoAya, {from: accounts[0]});
		const uint256VBNTFB0 = await GUMARewardsVRy8hfm.totalSupply.call({from: accounts[4]});

		await expect(GUMARewardsVRy8hfm.setGUMA.call(addressD1h3a7x, addressfWBoAya, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsEAP4888 = await GUMARewards.new({from: accounts[2]});
		const uintf6zEGc4 = BigInt("192")
		const address844IlM = accounts[0]
		const uint256tCmAQk7 = await GUMARewardsEAP4888.stake.call(uintf6zEGc4, {from: accounts[4]});
		await GUMARewardsEAP4888.renounceOwnership.call({from: accounts[4]});
		const uint256Aik3vKX = await GUMARewardsEAP4888.rewardPerToken.call({from: accounts[3]});
		const uint256ixpSDvH = await GUMARewardsEAP4888.balanceOf.call(address844IlM, {from: accounts[0]});

		await expect(GUMARewardsEAP4888.stake.call(uintf6zEGc4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsPFrwr1r = await GUMARewards.new({from: accounts[2]});
		const addresskxrQ5X4 = accounts[2]
		const addressOPYnsyL = accounts[3]
		await GUMARewardsPFrwr1r.renounceOwnership.call({from: accounts[1]});
		await GUMARewardsPFrwr1r.onlyRewardDistribution.call({from: accounts[4]});
		const boolcpQ61WX = await GUMARewardsPFrwr1r.isOwner.call({from: accounts[3]});
		await GUMARewardsPFrwr1r.onlyOwner.call({from: accounts[0]});
		const addresshKV5jSw = await GUMARewardsPFrwr1r.setGUMA.call(addressOPYnsyL, addresskxrQ5X4, {from: accounts[2]});

		await expect(GUMARewardsPFrwr1r.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWZaCqLY = await GUMARewards.new({from: accounts[1]});
		const addressQl1M0mM = accounts[3]
		const address4APmN9 = accounts[4]
		const uint256Q9pnTzr = await GUMARewardsWZaCqLY.balanceOf.call(addressQl1M0mM, {from: accounts[3]});
		const addressea6kpTQ = await GUMARewardsWZaCqLY.transferOwnership.call(address4APmN9, {from: accounts[1]});

		assert.equal(uint256Q9pnTzr, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardswVw1sS = await GUMARewards.new({from: accounts[2]});
		const addressgVF4x7x = accounts[2]
		const boolyDYSByq = await GUMARewardswVw1sS.isOwner.call({from: accounts[1]});
		const addressaicsJIZ = await GUMARewardswVw1sS.owner.call({from: accounts[0]});
		const uint256XclTjmF = await GUMARewardswVw1sS.balanceOf.call(addressgVF4x7x, {from: accounts[1]});
		await GUMARewardswVw1sS.getReward.call({from: accounts[0]});
		await GUMARewardswVw1sS.onlyRewardDistribution.call({from: accounts[3]});

		assert.equal(addressaicsJIZ, 0x3E4e899755970f50c00F8c21e141aDEb90C89e54)
		assert.equal(boolyDYSByq, false)
		assert.equal(uint256XclTjmF, BigInt("0"))
		await expect(GUMARewardswVw1sS.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsR0d6MM = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwB6SMdw = BigInt("1411")
		const addressS7e0FB = accounts[5]
		await GUMARewardsR0d6MM.onlyRewardDistribution.call({from: accounts[3]});
		await GUMARewardsR0d6MM.onlyRewardDistribution.call({from: accounts[2]});
		const uint256m0H20i = await GUMARewardsR0d6MM.stake.call(uintwB6SMdw, {from: accounts[1]});
		const addressPHx0dC = await GUMARewardsR0d6MM.transferOwnership.call(addressS7e0FB, {from: accounts[3]});
		const uint256A3Es5Pl = await GUMARewardsR0d6MM.totalSupply.call({from: accounts[4]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardspvgsu5r = await GUMARewards.new({from: accounts[1]});
		const addressjcoe26b = accounts[3]
		const addressef4Jdxo = accounts[0]
		await GUMARewardspvgsu5r.getReward.call({from: accounts[3]});
		const addressErL7Oj7 = await GUMARewardspvgsu5r.setRewardDistribution.call(addressjcoe26b, {from: accounts[1]});
		const addressPYkl8iJ = await GUMARewardspvgsu5r.transferOwnership.call(addressef4Jdxo, {from: accounts[5]});

		await expect(GUMARewardspvgsu5r.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardswVw1sS = await GUMARewards.new({from: accounts[2]});
		const addressCCcVI0H = accounts[3]
		await GUMARewardswVw1sS.renounceOwnership.call({from: accounts[2]});
		await GUMARewardswVw1sS.onlyRewardDistribution.call({from: accounts[0]});
		await GUMARewardswVw1sS.getReward.call({from: accounts[0]});
		const addressSQlYw7L = await GUMARewardswVw1sS.setRewardDistribution.call(addressCCcVI0H, {from: accounts[0]});

		await expect(GUMARewardswVw1sS.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})