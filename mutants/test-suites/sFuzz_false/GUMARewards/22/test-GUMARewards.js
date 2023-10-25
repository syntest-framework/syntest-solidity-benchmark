const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsuAFP5Tk = await GUMARewards.new({from: accounts[0]});
//		await GUMARewardsuAFP5Tk.onlyRewardDistribution.call({from: accounts[5]});
//		const uint256nufJTF = await GUMARewardsuAFP5Tk.totalSupply.call({from: accounts[4]});

		await expect(GUMARewardsuAFP5Tk.onlyRewardDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsYzW7BWC = await GUMARewards.new({from: accounts[4]});
		const addressxqXbrja = accounts[0]
//		await GUMARewardsYzW7BWC.renounceOwnership.call({from: accounts[3]});
//		const uint2565nVPGy = await GUMARewardsYzW7BWC.rewardPerToken.call({from: accounts[0]});
//		const address9YWKj1 = await GUMARewardsYzW7BWC.updateReward.call(addressxqXbrja, {from: accounts[0]});
//		await GUMARewardsYzW7BWC.renounceOwnership.call({from: accounts[2]});
//		const uint256SPV9Ug = await GUMARewardsYzW7BWC.totalSupply.call({from: accounts[4]});

		await expect(GUMARewardsYzW7BWC.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsmh4enXW = await GUMARewards.new({from: accounts[4]});
		const uintHXC9D68 = BigInt("136")
		const uinttN9yryH = BigInt("1463")
		const addressqV2vMZ = accounts[2]
		const boolV1Z6SNd = await GUMARewardsmh4enXW.isOwner.call({from: accounts[4]});
//		const uint256p4wV541 = await GUMARewardsmh4enXW.notifyRewardAmount.call(uintHXC9D68, {from: accounts[2]});
//		const uint256KUlZi1Z = await GUMARewardsmh4enXW.stake.call(uinttN9yryH, {from: accounts[5]});
//		await GUMARewardsmh4enXW.renounceOwnership.call({from: accounts[3]});
//		const addressNPS3ie = await GUMARewardsmh4enXW.transferOwnership.call(addressqV2vMZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolV1Z6SNd, true)
		await expect(GUMARewardsmh4enXW.notifyRewardAmount.call(uintHXC9D68, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsQwjCHXx = await GUMARewards.new({from: accounts[2]});
		const uinttZGKXFV = BigInt("1274")
		const uint256GOTNMzf = await GUMARewardsQwjCHXx.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256lp3gPj0 = await GUMARewardsQwjCHXx.stake.call(uinttZGKXFV, {from: accounts[3]});
//		await GUMARewardsQwjCHXx.getReward.call({from: accounts[3]});
//		const uint256wA4iCkd = await GUMARewardsQwjCHXx.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256GOTNMzf, BigInt("0"))
		await expect(GUMARewardsQwjCHXx.stake.call(uinttZGKXFV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfOMthO = await GUMARewards.new({from: accounts[3]});
		const uintajoF78x = BigInt("482")
//		await GUMARewardsfOMthO.getReward.call({from: accounts[3]});
//		const uint256z0SFC8q = await GUMARewardsfOMthO.totalSupply.call({from: accounts[4]});
//		const uint256K14AY2H = await GUMARewardsfOMthO.stake.call(uintajoF78x, {from: accounts[4]});
//		await GUMARewardsfOMthO.getReward.call({from: accounts[4]});
		await GUMARewardsfOMthO.getReward.call({from: accounts[3]});

		await expect(GUMARewardsfOMthO.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsV5d1wPe = await GUMARewards.new({from: accounts[3]});
		const addressJxMshwr = accounts[4]
		const addresskPlr2k5 = accounts[0]
		const boolNUW3cbU = await GUMARewardsV5d1wPe.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Laf2yhh = await GUMARewardsV5d1wPe.earned.call(addressJxMshwr, {from: accounts[1]});
		const addressFFP9Q1c = await GUMARewardsV5d1wPe.owner.call({from: accounts[1]});
//		await GUMARewardsV5d1wPe.getReward.call({from: accounts[0]});
//		const addressiu1BDy8 = await GUMARewardsV5d1wPe.transferOwnership.call(addresskPlr2k5, {from: accounts[0]});

		assert.equal(addressFFP9Q1c, 0x38f4b20BC95B54B535A11B9415E9b880eC9B6e7d)
		assert.equal(boolNUW3cbU, false)
		assert.equal(uint256Laf2yhh, BigInt("0"))
		await expect(GUMARewardsV5d1wPe.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsuAFP5Tk = await GUMARewards.new({from: accounts[0]});
		const addressFxj7LS = accounts[4]
		const addressLcn1QVz = await GUMARewardsuAFP5Tk.transferOwnership.call(addressFxj7LS, {from: accounts[0]});
		const uint256EZvA4nf = await GUMARewardsuAFP5Tk.rewardPerToken.call({from: accounts[5]});
		const uint256nufJTF = await GUMARewardsuAFP5Tk.totalSupply.call({from: accounts[4]});

		assert.equal(uint256EZvA4nf, BigInt("0"))
		assert.equal(uint256nufJTF, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsPAknMQ = await GUMARewards.new({from: accounts[1]});
		const addressPVLLa3U = accounts[3]
		const addressEj9r9aY = accounts[0]
		const uintyWqhcmW = BigInt("1155")
//		await GUMARewardsPAknMQ.getReward.call({from: accounts[2]});
//		await GUMARewardsPAknMQ.renounceOwnership.call({from: accounts[1]});
//		const addressOPqbMYc = await GUMARewardsPAknMQ.setGUMA.call(addressEj9r9aY, addressPVLLa3U, {from: accounts[2]});
//		const uint256qCBABCI = await GUMARewardsPAknMQ.notifyRewardAmount.call(uintyWqhcmW, {from: accounts[3]});

		await expect(GUMARewardsPAknMQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsmeWHyNX = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256mBRfz9k = await GUMARewardsmeWHyNX.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsmeWHyNX.onlyOwner.call({from: accounts[1]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsPAknMQ = await GUMARewards.new({from: accounts[1]});
		const addresshvtFn0C = accounts[2]
		const addressngArvUt = await GUMARewardsPAknMQ.setRewardDistribution.call(addresshvtFn0C, {from: accounts[1]});
//		await GUMARewardsPAknMQ.getReward.call({from: accounts[2]});

		await expect(GUMARewardsPAknMQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})