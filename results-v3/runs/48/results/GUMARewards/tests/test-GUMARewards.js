const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardscPCOt9 = await GUMARewards.new({from: accounts[1]});
		const uintezXJhg0 = BigInt("1599")
		const uint256o10bD20 = await GUMARewardscPCOt9.stake.call(uintezXJhg0, {from: accounts[2]});
		await GUMARewardscPCOt9.onlyOwner.call({from: accounts[0]});
		await GUMARewardscPCOt9.getReward.call({from: accounts[4]});
		const uint256az2KcJ2 = await GUMARewardscPCOt9.rewardPerToken.call({from: accounts[3]});

		await expect(GUMARewardscPCOt9.stake.call(uintezXJhg0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsYxq2rEv = await GUMARewards.new({from: accounts[4]});
		const addressZhC4gxQ = accounts[1]
		await GUMARewardsYxq2rEv.onlyRewardDistribution.call({from: accounts[4]});
		const addressUJ4HKtx = await GUMARewardsYxq2rEv.owner.call({from: accounts[4]});
		const uint256zV8RDza = await GUMARewardsYxq2rEv.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const addressooJcRx4 = await GUMARewardsYxq2rEv.updateReward.call(addressZhC4gxQ, {from: accounts[1]});

		await expect(GUMARewardsYxq2rEv.onlyRewardDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsYt3sXN = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressC8Lzce5 = accounts[4]
		const addresspvEH88a = accounts[4]
		const uintLAoSjTt = BigInt("1067")
		const addresssWwRyVw = await GUMARewardsYt3sXN.setRewardDistribution.call(addressC8Lzce5, {from: accounts[4]});
		const address5vvqFV = await GUMARewardsYt3sXN.transferOwnership.call(addresspvEH88a, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hnpFOPL = await GUMARewardsYt3sXN.totalSupply.call({from: accounts[4]});
		const uint256Glj7ioI = await GUMARewardsYt3sXN.stake.call(uintLAoSjTt, {from: accounts[5]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsuOw6E2m = await GUMARewards.new({from: accounts[4]});
		const addressvvmLjBO = accounts[0]
		const addressGXdovD = "0x0000000000000000000000000000000000000001"
		const addressJOeBfhY = await GUMARewardsuOw6E2m.setGUMA.call(addressGXdovD, addressvvmLjBO, {from: accounts[3]});
		await GUMARewardsuOw6E2m.onlyOwner.call({from: accounts[3]});

		await expect(GUMARewardsuOw6E2m.setGUMA.call(addressGXdovD, addressvvmLjBO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsW9psGm7 = await GUMARewards.new({from: accounts[3]});
		const addressMRbcbJN = accounts[3]
		await GUMARewardsW9psGm7.renounceOwnership.call({from: accounts[3]});
		await GUMARewardsW9psGm7.onlyRewardDistribution.call({from: accounts[3]});
		const addressMw16at = await GUMARewardsW9psGm7.transferOwnership.call(addressMRbcbJN, {from: accounts[4]});
		const uint256tXKnw1C = await GUMARewardsW9psGm7.totalSupply.call({from: accounts[2]});
		const uint256o6Furbj = await GUMARewardsW9psGm7.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CtZFBg7 = await GUMARewardsW9psGm7.totalSupply.call({from: accounts[4]});

		await expect(GUMARewardsW9psGm7.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsTzrHOg = await GUMARewards.new({from: accounts[1]});
		const addressYp829lQ = accounts[1]
		const addressfwaXODA = "0x0000000000000000000000000000000000000001"
		const addressByC6zdI = accounts[2]
		const addressccDZv8x = accounts[2]
		const addressKIaUbR3 = accounts[3]
		const uint256b8JoX1g = await GUMARewardsTzrHOg.earned.call(addressYp829lQ, {from: accounts[4]});
		const addressfQEKltc = await GUMARewardsTzrHOg.transferOwnership.call(addressfwaXODA, {from: accounts[1]});
		await GUMARewardsTzrHOg.renounceOwnership.call({from: accounts[3]});
		const addressQtRrc2O = await GUMARewardsTzrHOg.owner.call({from: accounts[3]});
		const addresszDlVRE3 = await GUMARewardsTzrHOg.updateReward.call(addressByC6zdI, {from: accounts[2]});
		const addressZgC9FcM = await GUMARewardsTzrHOg.setGUMA.call(addressKIaUbR3, addressccDZv8x, {from: accounts[0]});

		assert.equal(uint256b8JoX1g, BigInt("0"))
		await expect(GUMARewardsTzrHOg.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdLDMc6I = await GUMARewards.new({from: accounts[0]});
		const addresshiKux5C = accounts[2]
		const addressc26MNeD = await GUMARewardsdLDMc6I.owner.call({from: accounts[3]});
		const uint256eD2iFXk = await GUMARewardsdLDMc6I.earned.call(addresshiKux5C, {from: accounts[1]});
		const uint256pGi1UX3 = await GUMARewardsdLDMc6I.totalSupply.call({from: accounts[1]});
		await GUMARewardsdLDMc6I.renounceOwnership.call({from: accounts[2]});

		assert.equal(addressc26MNeD, 0xBD80b379b1580C327357CC0d874974E884AE6d8A)
		assert.equal(uint256eD2iFXk, BigInt("0"))
		assert.equal(uint256pGi1UX3, BigInt("0"))
		await expect(GUMARewardsdLDMc6I.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsTzrHOg = await GUMARewards.new({from: accounts[1]});
		const addresszzqepTA = accounts[1]
		const addressnEiNgqW = "0x0000000000000000000000000000000000000002"
		const addressz4TRFn0 = accounts[2]
		const addressPvIUuk9 = accounts[2]
		const addresssLhUPwD = accounts[3]
		const uint256b8JoX1g = await GUMARewardsTzrHOg.earned.call(addresszzqepTA, {from: accounts[4]});
		const addressfQEKltc = await GUMARewardsTzrHOg.transferOwnership.call(addressnEiNgqW, {from: accounts[1]});
		await GUMARewardsTzrHOg.getReward.call({from: accounts[1]});
		await GUMARewardsTzrHOg.renounceOwnership.call({from: accounts[3]});
		await GUMARewardsTzrHOg.renounceOwnership.call({from: accounts[0]});
		const addresszDlVRE3 = await GUMARewardsTzrHOg.updateReward.call(addressz4TRFn0, {from: accounts[2]});
		const addressZgC9FcM = await GUMARewardsTzrHOg.setGUMA.call(addresssLhUPwD, addressPvIUuk9, {from: accounts[0]});
		await GUMARewardsTzrHOg.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256b8JoX1g, BigInt("0"))
		await expect(GUMARewardsTzrHOg.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardse52kN1 = await GUMARewards.new({from: accounts[2]});
		const addressdAgCGJi = accounts[0]
		await GUMARewardse52kN1.getReward.call({from: accounts[2]});
		await GUMARewardse52kN1.getReward.call({from: accounts[2]});
		const addressMbwzppY = await GUMARewardse52kN1.setRewardDistribution.call(addressdAgCGJi, {from: accounts[2]});

		await expect(GUMARewardse52kN1.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})