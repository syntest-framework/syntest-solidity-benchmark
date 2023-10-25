const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsBePmsU8 = await GUMARewards.new({from: accounts[5]});
		const uintrmIokUz = BigInt("1239")
		const uintHPmc5Um = BigInt("1646")
		const uint256CH7YqvO = await GUMARewardsBePmsU8.notifyRewardAmount.call(uintrmIokUz, {from: accounts[1]});
		const uint256JgSCOHW = await GUMARewardsBePmsU8.stake.call(uintHPmc5Um, {from: accounts[1]});

		await expect(GUMARewardsBePmsU8.notifyRewardAmount.call(uintrmIokUz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardss87nIef = await GUMARewards.new({from: accounts[5]});
		const addressF5dmN5S = accounts[2]
		const uintocITkuQ = BigInt("1270")
		const addressoOR7zy = accounts[0]
		const addressDwELS4 = accounts[2]
		const uintouzXXdM = BigInt("1129")
		const addressjLoGi1w = await GUMARewardss87nIef.setRewardDistribution.call(addressF5dmN5S, {from: accounts[1]});
		const uint256ibEXKJt = await GUMARewardss87nIef.stake.call(uintocITkuQ, {from: accounts[3]});
		const addressqL7g3vd = await GUMARewardss87nIef.setRewardDistribution.call(addressoOR7zy, {from: accounts[5]});
		const uint256frLt6x1 = await GUMARewardss87nIef.balanceOf.call(addressDwELS4, {from: accounts[3]});
		const uint256cBBshLu = await GUMARewardss87nIef.stake.call(uintouzXXdM, {from: accounts[2]});

		await expect(GUMARewardss87nIef.setRewardDistribution.call(addressF5dmN5S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardspzgsU5Q = await GUMARewards.new({from: accounts[1]});
		const addressbzTPkon = "0x0000000000000000000000000000000000000001"
		const uintWCk7ERZ = BigInt("1600")
		const uintxmn5dyL = BigInt("1961")
		const addressHVd9pvE = accounts[2]
		await GUMARewardspzgsU5Q.onlyOwner.call({from: accounts[2]});
		const addressmtLkTNQ = await GUMARewardspzgsU5Q.setRewardDistribution.call(addressbzTPkon, {from: accounts[0]});
		const uint256mXtou0f = await GUMARewardspzgsU5Q.stake.call(uintWCk7ERZ, {from: accounts[3]});
		const uint256vyT3zLj = await GUMARewardspzgsU5Q.stake.call(uintxmn5dyL, {from: accounts[1]});
		const uint256DEQMCor = await GUMARewardspzgsU5Q.balanceOf.call(addressHVd9pvE, {from: accounts[5]});

		await expect(GUMARewardspzgsU5Q.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsyWEqCIT = await GUMARewards.new({from: accounts[1]});
		const addressgFWP7I2 = accounts[3]
		const addressnbTQfR7 = await GUMARewardsyWEqCIT.owner.call({from: accounts[2]});
		const uint256BJYZveP = await GUMARewardsyWEqCIT.earned.call(addressgFWP7I2, {from: accounts[5]});
		await GUMARewardsyWEqCIT.getReward.call({from: accounts[3]});

		assert.equal(addressnbTQfR7, 0x68269955A22BF3ad928801e08daDa700a9881365)
		assert.equal(uint256BJYZveP, BigInt("0"))
		await expect(GUMARewardsyWEqCIT.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsvhpn9qK = await GUMARewards.new({from: accounts[3]});
		const uintcoQEH7M = BigInt("919")
		const uint256I1TyYE3 = await GUMARewardsvhpn9qK.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256p8cXZOn = await GUMARewardsvhpn9qK.totalSupply.call({from: accounts[3]});
		const booleoiFCPR = await GUMARewardsvhpn9qK.isOwner.call({from: accounts[1]});
		const uint256HVBF6t = await GUMARewardsvhpn9qK.stake.call(uintcoQEH7M, {from: accounts[5]});
		await GUMARewardsvhpn9qK.onlyRewardDistribution.call({from: accounts[4]});

		assert.equal(booleoiFCPR, false)
		assert.equal(uint256I1TyYE3, BigInt("0"))
		assert.equal(uint256p8cXZOn, BigInt("0"))
		await expect(GUMARewardsvhpn9qK.stake.call(uintcoQEH7M, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsyWEqCIT = await GUMARewards.new({from: accounts[1]});
		const addresso96sv7D = accounts[3]
		const addressFP7rdfk = accounts[0]
		const addressnbTQfR7 = await GUMARewardsyWEqCIT.owner.call({from: accounts[2]});
		const uint256BJYZveP = await GUMARewardsyWEqCIT.earned.call(addresso96sv7D, {from: accounts[5]});
		const addressJAycVpk = await GUMARewardsyWEqCIT.transferOwnership.call(addressFP7rdfk, {from: accounts[1]});
		await GUMARewardsyWEqCIT.renounceOwnership.call({from: accounts[0]});
		await GUMARewardsyWEqCIT.getReward.call({from: accounts[3]});

		assert.equal(addressnbTQfR7, 0x68269955A22BF3ad928801e08daDa700a9881365)
		assert.equal(uint256BJYZveP, BigInt("0"))
		await expect(GUMARewardsyWEqCIT.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsQYVpyvp = await GUMARewards.new({from: accounts[1]});
		const addressXG9Sy7X = accounts[3]
		const addressRt8HGUq = "0x0000000000000000000000000000000000000001"
		const uint256c7sKtmx = await GUMARewardsQYVpyvp.balanceOf.call(addressXG9Sy7X, {from: accounts[1]});
		const uint256ILwqCT3 = await GUMARewardsQYVpyvp.totalSupply.call({from: accounts[1]});
		const addressqU405jj = await GUMARewardsQYVpyvp.setRewardDistribution.call(addressRt8HGUq, {from: accounts[1]});

		assert.equal(uint256ILwqCT3, BigInt("0"))
		assert.equal(uint256c7sKtmx, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsyWEqCIT = await GUMARewards.new({from: accounts[1]});
		await GUMARewardsyWEqCIT.renounceOwnership.call({from: accounts[1]});
		await GUMARewardsyWEqCIT.onlyOwner.call({from: accounts[1]});
		await GUMARewardsyWEqCIT.getReward.call({from: accounts[3]});

		await expect(GUMARewardsyWEqCIT.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsNuRcKd = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnudDwqd = BigInt("2023")
		const uint256xrucYTn = await GUMARewardsNuRcKd.stake.call(uintnudDwqd, {from: accounts[0]});
		const uint256PZCEutK = await GUMARewardsNuRcKd.totalSupply.call({from: accounts[5]});
		const uint256QyTv1MJ = await GUMARewardsNuRcKd.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});
})