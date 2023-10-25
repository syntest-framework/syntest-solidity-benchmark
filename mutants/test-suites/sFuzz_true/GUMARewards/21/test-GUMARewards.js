const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardseGPzQoW = await GUMARewards.new({from: accounts[1]});
		const uintPu1zdDR = BigInt("402")
		const addressROmPeYh = accounts[1]
//		await GUMARewardseGPzQoW.onlyOwner.call({from: accounts[0]});
//		const uint256ulIil6n = await GUMARewardseGPzQoW.stake.call(uintPu1zdDR, {from: accounts[3]});
//		const addressZI0n4h9 = await GUMARewardseGPzQoW.transferOwnership.call(addressROmPeYh, {from: accounts[1]});

		await expect(GUMARewardseGPzQoW.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsL5Gpar = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHcLrWGZ = accounts[3]
		const addressM4qBjhK = accounts[2]
		const addressAexz7w = accounts[2]
		const addressXKGtp4 = "0x0000000000000000000000000000000000000001"
		const uint256LcCQgDK = await GUMARewardsL5Gpar.balanceOf.call(addressHcLrWGZ, {from: accounts[3]});
		const addressfzJijs4 = await GUMARewardsL5Gpar.setGUMA.call(addressAexz7w, addressM4qBjhK, {from: accounts[5]});
		await GUMARewardsL5Gpar.getReward.call({from: accounts[4]});
		const addressdu7Lhti = await GUMARewardsL5Gpar.updateReward.call(addressXKGtp4, {from: accounts[2]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsFE7ZPS9 = await GUMARewards.new({from: accounts[2]});
		const uint256EgVEgXK = await GUMARewardsFE7ZPS9.totalSupply.call({from: accounts[5]});
		const uint256HOk6lP2 = await GUMARewardsFE7ZPS9.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256EgVEgXK, BigInt("0"))
		assert.equal(uint256HOk6lP2, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsJ8y6N49 = await GUMARewards.new({from: accounts[5]});
		const uintm0jPDO7 = BigInt("502")
		const uintlvPZoVJ = BigInt("1417")
		const uint256DCUYTG = await GUMARewardsJ8y6N49.lastTimeRewardApplicable.call({from: accounts[0]});
//		await GUMARewardsJ8y6N49.getReward.call({from: accounts[5]});
//		await GUMARewardsJ8y6N49.getReward.call({from: accounts[1]});
//		const uint256pARcPtM = await GUMARewardsJ8y6N49.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256BIuDHyh = await GUMARewardsJ8y6N49.stake.call(uintm0jPDO7, {from: accounts[2]});
//		const uint256yWHPhDp = await GUMARewardsJ8y6N49.notifyRewardAmount.call(uintlvPZoVJ, {from: accounts[0]});

		assert.equal(uint256DCUYTG, BigInt("0"))
		await expect(GUMARewardsJ8y6N49.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsRDyAbJo = await GUMARewards.new({from: accounts[0]});
		const addresskTDWvn = accounts[3]
		const addressymXAfwz = accounts[0]
		const addressVFxmYBR = await GUMARewardsRDyAbJo.owner.call({from: accounts[1]});
		const addressHUWWwRm = await GUMARewardsRDyAbJo.owner.call({from: accounts[4]});
//		const addressKoqeQUX = await GUMARewardsRDyAbJo.setGUMA.call(addressymXAfwz, addresskTDWvn, {from: accounts[4]});
//		const uint256RGsXV6L = await GUMARewardsRDyAbJo.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(addressHUWWwRm, 0x368723826A80139AFD768d5221312300365AdD4D)
		assert.equal(addressVFxmYBR, 0x368723826A80139AFD768d5221312300365AdD4D)
		await expect(GUMARewardsRDyAbJo.setGUMA.call(addressymXAfwz, addresskTDWvn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfjlAZ4U = await GUMARewards.new({from: accounts[3]});
		const addresslKBYdGo = accounts[2]
//		await GUMARewardsfjlAZ4U.getReward.call({from: accounts[0]});
//		const boolZkJ6ccr = await GUMARewardsfjlAZ4U.isOwner.call({from: accounts[1]});
//		const uint256e29K5QW = await GUMARewardsfjlAZ4U.earned.call(addresslKBYdGo, {from: accounts[3]});

		await expect(GUMARewardsfjlAZ4U.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfjlAZ4U = await GUMARewards.new({from: accounts[3]});
		const addresskA6osco = accounts[1]
		const addressbcM59Td = accounts[3]
//		const addressd2VNpzr = await GUMARewardsfjlAZ4U.transferOwnership.call(addresskA6osco, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256e29K5QW = await GUMARewardsfjlAZ4U.earned.call(addressbcM59Td, {from: accounts[3]});

		await expect(GUMARewardsfjlAZ4U.transferOwnership.call(addresskA6osco, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfjlAZ4U = await GUMARewards.new({from: accounts[3]});
		const address18DlNr = accounts[2]
		const addressyzKmgb8 = accounts[3]
		const addresswKR7C9r = accounts[0]
		const addressPOPn7rO = await GUMARewardsfjlAZ4U.setRewardDistribution.call(address18DlNr, {from: accounts[3]});
		const uint256e29K5QW = await GUMARewardsfjlAZ4U.earned.call(addressyzKmgb8, {from: accounts[3]});
//		const addressNll5YY = await GUMARewardsfjlAZ4U.updateReward.call(addresswKR7C9r, {from: accounts[3]});

		assert.equal(uint256e29K5QW, BigInt("0"))
		await expect(GUMARewardsfjlAZ4U.updateReward.call(addresswKR7C9r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsFE7ZPS9 = await GUMARewards.new({from: accounts[2]});
		const addresstjWb2QB = accounts[4]
		const uint256HOk6lP2 = await GUMARewardsFE7ZPS9.lastTimeRewardApplicable.call({from: accounts[3]});
		const boolbEysLLs = await GUMARewardsFE7ZPS9.isOwner.call({from: accounts[5]});
		const addressiGBI2Vd = await GUMARewardsFE7ZPS9.transferOwnership.call(addresstjWb2QB, {from: accounts[2]});
		const uint256YQIT98Z = await GUMARewardsFE7ZPS9.totalSupply.call({from: accounts[4]});

		assert.equal(boolbEysLLs, false)
		assert.equal(uint256HOk6lP2, BigInt("0"))
		assert.equal(uint256YQIT98Z, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfjlAZ4U = await GUMARewards.new({from: accounts[3]});
		const addressOffhePJ = accounts[2]
//		await GUMARewardsfjlAZ4U.getReward.call({from: accounts[0]});
//		await GUMARewardsfjlAZ4U.renounceOwnership.call({from: accounts[3]});
//		const uint256IL8JB8i = await GUMARewardsfjlAZ4U.balanceOf.call(addressOffhePJ, {from: accounts[3]});

		await expect(GUMARewardsfjlAZ4U.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfjlAZ4U = await GUMARewards.new({from: accounts[3]});
		const uintRAOrOq4 = BigInt("0")
		const addresss0ZzU8N = accounts[3]
//		const uint256rgepZhX = await GUMARewardsfjlAZ4U.stake.call(uintRAOrOq4, {from: accounts[2]});
//		const uint256e29K5QW = await GUMARewardsfjlAZ4U.earned.call(addresss0ZzU8N, {from: accounts[3]});

		await expect(GUMARewardsfjlAZ4U.stake.call(uintRAOrOq4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})