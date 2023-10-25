const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsASUFNm = await GUMARewards.new({from: accounts[0]});
		const uintSVWsDoq = BigInt("131")
		const addresstKAbqEu = accounts[1]
		const uint256fZzLLzO = await GUMARewardsASUFNm.stake.call(uintSVWsDoq, {from: accounts[1]});
		const uint256PdH3Vz1 = await GUMARewardsASUFNm.balanceOf.call(addresstKAbqEu, {from: accounts[3]});

		await expect(GUMARewardsASUFNm.stake.call(uintSVWsDoq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsFLpzZ61 = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKWckvL1 = "0x0000000000000000000000000000000000000001"
		await GUMARewardsFLpzZ61.renounceOwnership.call({from: accounts[0]});
		const uint256lvLLOQ = await GUMARewardsFLpzZ61.totalSupply.call({from: accounts[1]});
		const addressytRiTmx = await GUMARewardsFLpzZ61.setRewardDistribution.call(addressKWckvL1, {from: accounts[5]});
		await GUMARewardsFLpzZ61.onlyRewardDistribution.call({from: accounts[3]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfnAO6Wt = await GUMARewards.new({from: accounts[4]});
		const addressGYopoMM = accounts[5]
		const uint2562VZRyU = await GUMARewardsfnAO6Wt.totalSupply.call({from: accounts[0]});
		const uint256D3h1bJv = await GUMARewardsfnAO6Wt.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressIKx5Nxm = await GUMARewardsfnAO6Wt.transferOwnership.call(addressGYopoMM, {from: accounts[3]});
		const uint256buz3Os = await GUMARewardsfnAO6Wt.rewardPerToken.call({from: accounts[0]});
		const uint256lj8nGez = await GUMARewardsfnAO6Wt.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint2562VZRyU, BigInt("0"))
		assert.equal(uint256D3h1bJv, BigInt("0"))
		await expect(GUMARewardsfnAO6Wt.transferOwnership.call(addressGYopoMM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardslff4mx = await GUMARewards.new({from: accounts[4]});
		const addressSWflaed = accounts[4]
		const addressgsAu5aS = accounts[2]
		const addressjpl7R5j = "0x0000000000000000000000000000000000000001"
		const addressNYBErUF = accounts[4]
		const addressH5m63Ea = accounts[2]
		const addressKGmrCcl = await GUMARewardslff4mx.updateReward.call(addressSWflaed, {from: accounts[4]});
		const addressRV5xIQf = await GUMARewardslff4mx.setGUMA.call(addressjpl7R5j, addressgsAu5aS, {from: accounts[2]});
		const boolWTAktpA = await GUMARewardslff4mx.isOwner.call({from: accounts[2]});
		const addresswqboVO = await GUMARewardslff4mx.setGUMA.call(addressH5m63Ea, addressNYBErUF, {from: accounts[0]});
		await GUMARewardslff4mx.renounceOwnership.call({from: accounts[1]});

		await expect(GUMARewardslff4mx.updateReward.call(addressSWflaed, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsmFXJSSn = await GUMARewards.new({from: accounts[2]});
		const addressl1ORFo4 = accounts[1]
		const addressU58Ek9I = accounts[4]
		const uintzRWWgAh = BigInt("96")
		const addressAH6kZW = accounts[0]
		const addressQ1FO79j = accounts[5]
		const addressJI30R4H = await GUMARewardsmFXJSSn.setGUMA.call(addressU58Ek9I, addressl1ORFo4, {from: accounts[2]});
		const boolKl0IMYw = await GUMARewardsmFXJSSn.isOwner.call({from: accounts[2]});
		const uint256ROHXaQT = await GUMARewardsmFXJSSn.stake.call(uintzRWWgAh, {from: "0x0000000000000000000000000000000000000001"});
		const addressPqTO7sI = await GUMARewardsmFXJSSn.setGUMA.call(addressQ1FO79j, addressAH6kZW, {from: accounts[4]});
		await GUMARewardsmFXJSSn.onlyRewardDistribution.call({from: accounts[0]});

		await expect(GUMARewardsmFXJSSn.setGUMA.call(addressU58Ek9I, addressl1ORFo4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfnAO6Wt = await GUMARewards.new({from: accounts[4]});
		const addressjtV2OpK = "0x0000000000000000000000000000000000000001"
		const addressyqijKaE = accounts[5]
		const uint2562VZRyU = await GUMARewardsfnAO6Wt.totalSupply.call({from: accounts[0]});
		const addressfnfs22p = await GUMARewardsfnAO6Wt.setRewardDistribution.call(addressjtV2OpK, {from: accounts[4]});
		const uint256D3h1bJv = await GUMARewardsfnAO6Wt.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressIKx5Nxm = await GUMARewardsfnAO6Wt.transferOwnership.call(addressyqijKaE, {from: accounts[3]});
		const uint256buz3Os = await GUMARewardsfnAO6Wt.rewardPerToken.call({from: accounts[0]});
		const uint256lj8nGez = await GUMARewardsfnAO6Wt.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint2562VZRyU, BigInt("0"))
		assert.equal(uint256D3h1bJv, BigInt("0"))
		await expect(GUMARewardsfnAO6Wt.transferOwnership.call(addressyqijKaE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsU8nJKRD = await GUMARewards.new({from: accounts[1]});
		const addresswriLcME = accounts[1]
		const addressF4Wcj0S = await GUMARewardsU8nJKRD.owner.call({from: accounts[3]});
		const addressLNGoVRM = await GUMARewardsU8nJKRD.updateReward.call(addresswriLcME, {from: accounts[2]});

		assert.equal(addressF4Wcj0S, 0x8Bd57443fFaa83B50eDb649dF8CB872E8f94966b)
		await expect(GUMARewardsU8nJKRD.updateReward.call(addresswriLcME, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsASUFNm = await GUMARewards.new({from: accounts[0]});
		const addressyFgyBF9 = accounts[1]
		await GUMARewardsASUFNm.renounceOwnership.call({from: accounts[0]});
		await GUMARewardsASUFNm.getReward.call({from: accounts[1]});
		const uint256oQsVDSu = await GUMARewardsASUFNm.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256PdH3Vz1 = await GUMARewardsASUFNm.balanceOf.call(addressyFgyBF9, {from: accounts[3]});

		await expect(GUMARewardsASUFNm.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsASUFNm = await GUMARewards.new({from: accounts[0]});
		const addressNSaYGwu = accounts[1]
		await GUMARewardsASUFNm.getReward.call({from: accounts[1]});
		const addressycqPvKG = await GUMARewardsASUFNm.transferOwnership.call(addressNSaYGwu, {from: accounts[0]});
		await GUMARewardsASUFNm.getReward.call({from: accounts[2]});

		await expect(GUMARewardsASUFNm.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})