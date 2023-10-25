const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsFD9WHCg = await GUMARewards.new({from: accounts[1]});
		const addressnZhnjTC = accounts[4]
		const addressPmYocGT = accounts[1]
		const uintQH9YA1h = BigInt("1622")
		const uintRoau61X = BigInt("366")
//		const addressnvrJ51L = await GUMARewardsFD9WHCg.setGUMA.call(addressPmYocGT, addressnZhnjTC, {from: accounts[3]});
//		const addressB6qFpCb = await GUMARewardsFD9WHCg.owner.call({from: accounts[1]});
//		const uint256ZvwHiw = await GUMARewardsFD9WHCg.stake.call(uintQH9YA1h, {from: accounts[0]});
//		await GUMARewardsFD9WHCg.onlyRewardDistribution.call({from: accounts[1]});
//		await GUMARewardsFD9WHCg.onlyOwner.call({from: accounts[1]});
//		const uint256o2yLqK = await GUMARewardsFD9WHCg.notifyRewardAmount.call(uintRoau61X, {from: accounts[0]});

		await expect(GUMARewardsFD9WHCg.setGUMA.call(addressPmYocGT, addressnZhnjTC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWoIoktn = await GUMARewards.new({from: accounts[0]});
		const addressOZPq4Jq = accounts[3]
		const addressiw2GHka = accounts[2]
		const addressQGSt8J5 = accounts[4]
		const uint256VNc5phK = await GUMARewardsWoIoktn.earned.call(addressOZPq4Jq, {from: accounts[4]});
//		const addressBKbNro4 = await GUMARewardsWoIoktn.setRewardDistribution.call(addressiw2GHka, {from: accounts[3]});
//		const boolgyzEWv = await GUMARewardsWoIoktn.isOwner.call({from: accounts[0]});
//		const uint256ScNpRhu = await GUMARewardsWoIoktn.lastTimeRewardApplicable.call({from: accounts[2]});
//		const address15pq3p = await GUMARewardsWoIoktn.setRewardDistribution.call(addressQGSt8J5, {from: accounts[2]});

		assert.equal(uint256VNc5phK, BigInt("0"))
		await expect(GUMARewardsWoIoktn.setRewardDistribution.call(addressiw2GHka, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsLkfBugy = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256l7MUvMU = await GUMARewardsLkfBugy.lastTimeRewardApplicable.call({from: accounts[2]});
		await GUMARewardsLkfBugy.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardstkBOHl = await GUMARewards.new({from: accounts[4]});
		const addressn6xyPzL = accounts[5]
		const addressHJIVNcX = accounts[2]
		const uint256Cs1jBF5 = await GUMARewardstkBOHl.balanceOf.call(addressn6xyPzL, {from: accounts[4]});
		const uint256J1zjirz = await GUMARewardstkBOHl.lastTimeRewardApplicable.call({from: accounts[1]});
//		await GUMARewardstkBOHl.onlyRewardDistribution.call({from: accounts[4]});
//		const uint256FzBFGww = await GUMARewardstkBOHl.totalSupply.call({from: accounts[2]});
//		const uint256OtUDTyZ = await GUMARewardstkBOHl.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256HegB082 = await GUMARewardstkBOHl.earned.call(addressHJIVNcX, {from: accounts[0]});

		assert.equal(uint256Cs1jBF5, BigInt("0"))
		assert.equal(uint256J1zjirz, BigInt("0"))
		await expect(GUMARewardstkBOHl.onlyRewardDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfhzi2wM = await GUMARewards.new({from: accounts[0]});
		const uintcQIcXu = BigInt("1695")
		const addressRsrCUNc = "0x0000000000000000000000000000000000000001"
//		const uint256VSlUFW = await GUMARewardsfhzi2wM.stake.call(uintcQIcXu, {from: "0x0000000000000000000000000000000000000001"});
//		await GUMARewardsfhzi2wM.getReward.call({from: accounts[1]});
//		const addressunHlCIQ = await GUMARewardsfhzi2wM.updateReward.call(addressRsrCUNc, {from: accounts[1]});
//		const boolzwhVxQg = await GUMARewardsfhzi2wM.isOwner.call({from: accounts[2]});
//		const addressThi8ZdI = await GUMARewardsfhzi2wM.owner.call({from: accounts[0]});

		await expect(GUMARewardsfhzi2wM.stake.call(uintcQIcXu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdMiFdQ = await GUMARewards.new({from: accounts[0]});
		const uint256PgT9T9Z = await GUMARewardsdMiFdQ.totalSupply.call({from: accounts[4]});
		const uint256NZ87pEo = await GUMARewardsdMiFdQ.totalSupply.call({from: accounts[2]});
//		await GUMARewardsdMiFdQ.getReward.call({from: accounts[3]});
//		const addressMkUSiEb = await GUMARewardsdMiFdQ.owner.call({from: accounts[1]});

		assert.equal(uint256NZ87pEo, BigInt("0"))
		assert.equal(uint256PgT9T9Z, BigInt("0"))
		await expect(GUMARewardsdMiFdQ.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsX5IYsxU = await GUMARewards.new({from: accounts[4]});
		const addressu2LVcFX = accounts[1]
		const addressWEPk1Cg = accounts[2]
		const addressgf2Ttpj = await GUMARewardsX5IYsxU.owner.call({from: accounts[1]});
//		await GUMARewardsX5IYsxU.renounceOwnership.call({from: accounts[4]});
//		const addresscn40k33 = await GUMARewardsX5IYsxU.setGUMA.call(addressWEPk1Cg, addressu2LVcFX, {from: accounts[4]});

		assert.equal(addressgf2Ttpj, 0x8f90cA11623C9799bE9CB884f28f980c002cEE58)
		await expect(GUMARewardsX5IYsxU.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdMiFdQ = await GUMARewards.new({from: accounts[0]});
		const addressDhP1e1l = accounts[4]
		const uint256PgT9T9Z = await GUMARewardsdMiFdQ.totalSupply.call({from: accounts[4]});
		const uint256NZ87pEo = await GUMARewardsdMiFdQ.totalSupply.call({from: accounts[2]});
//		await GUMARewardsdMiFdQ.getReward.call({from: accounts[3]});
//		const addressl9KGTUy = await GUMARewardsdMiFdQ.setRewardDistribution.call(addressDhP1e1l, {from: accounts[0]});
//		const addressMkUSiEb = await GUMARewardsdMiFdQ.owner.call({from: accounts[1]});

		assert.equal(uint256NZ87pEo, BigInt("0"))
		assert.equal(uint256PgT9T9Z, BigInt("0"))
		await expect(GUMARewardsdMiFdQ.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdMiFdQ = await GUMARewards.new({from: accounts[0]});
		const addressjsFJLgA = accounts[0]
		const addressgsjqj8 = await GUMARewardsdMiFdQ.transferOwnership.call(addressjsFJLgA, {from: accounts[0]});
//		await GUMARewardsdMiFdQ.onlyRewardDistribution.call({from: accounts[3]});
//		await GUMARewardsdMiFdQ.getReward.call({from: accounts[3]});

		await expect(GUMARewardsdMiFdQ.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})