const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardscmwXABJ = await GUMARewards.new({from: accounts[1]});
		const addressOWPCan = accounts[2]
		const addressyLWcyuB = accounts[3]
//		const addressUbwNTzr = await GUMARewardscmwXABJ.updateReward.call(addressOWPCan, {from: accounts[2]});
//		const addressfskybZ5 = await GUMARewardscmwXABJ.updateReward.call(addressyLWcyuB, {from: accounts[2]});

		await expect(GUMARewardscmwXABJ.updateReward.call(addressOWPCan, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsXiEThuG = await GUMARewards.new({from: accounts[1]});
		const addressgK6ileF = accounts[3]
		const addresskqMbOcC = accounts[0]
//		const addressUPm2dTc = await GUMARewardsXiEThuG.setRewardDistribution.call(addressgK6ileF, {from: accounts[5]});
//		const addresscqGoLZF = await GUMARewardsXiEThuG.setRewardDistribution.call(addresskqMbOcC, {from: accounts[4]});
//		const uint256VrfoNFJ = await GUMARewardsXiEThuG.totalSupply.call({from: accounts[3]});

		await expect(GUMARewardsXiEThuG.setRewardDistribution.call(addressgK6ileF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsOY63UY = await GUMARewards.new({from: accounts[0]});
		const addressYof4sa = accounts[5]
		const uint256xCHgzc4 = await GUMARewardsOY63UY.rewardPerToken.call({from: accounts[1]});
//		const addressvQ76Nh = await GUMARewardsOY63UY.updateReward.call(addressYof4sa, {from: "0x0000000000000000000000000000000000000001"});
//		await GUMARewardsOY63UY.onlyRewardDistribution.call({from: accounts[4]});

		assert.equal(uint256xCHgzc4, BigInt("0"))
		await expect(GUMARewardsOY63UY.updateReward.call(addressYof4sa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsyam4iM8 = await GUMARewards.new({from: accounts[4]});
		const addressO6xEvno = accounts[1]
		const addresso91K9c4 = accounts[4]
		const uintzkZLrB = BigInt("746")
		const addressQjxJCqE = accounts[4]
//		const addressLcJojSu = await GUMARewardsyam4iM8.setGUMA.call(addresso91K9c4, addressO6xEvno, {from: accounts[4]});
//		await GUMARewardsyam4iM8.onlyRewardDistribution.call({from: accounts[1]});
//		const uint256G5fFPK = await GUMARewardsyam4iM8.stake.call(uintzkZLrB, {from: accounts[4]});
//		const uint2562BQqZF = await GUMARewardsyam4iM8.earned.call(addressQjxJCqE, {from: accounts[3]});

		await expect(GUMARewardsyam4iM8.setGUMA.call(addresso91K9c4, addressO6xEvno, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardscNTbXMF = await GUMARewards.new({from: accounts[0]});
		const uintr6J62ya = BigInt("1129")
		const addressfpzjUAa = accounts[3]
//		const uint256ezKikWh = await GUMARewardscNTbXMF.stake.call(uintr6J62ya, {from: accounts[0]});
//		const addressS7asNYr = await GUMARewardscNTbXMF.transferOwnership.call(addressfpzjUAa, {from: accounts[1]});

		await expect(GUMARewardscNTbXMF.stake.call(uintr6J62ya, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsKp7yPRj = await GUMARewards.new({from: accounts[1]});
		const addresstZQo9HR = await GUMARewardsKp7yPRj.owner.call({from: accounts[4]});
		const uint256Zg0uJx = await GUMARewardsKp7yPRj.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(addresstZQo9HR, 0xC67F8D2148a34D469A5e9f3D480Fe49d85C523Bf)
		assert.equal(uint256Zg0uJx, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardslOZ3mSq = await GUMARewards.new({from: accounts[2]});
		const addressLG0okBk = "0x0000000000000000000000000000000000000001"
		const addressTwYxAS = accounts[2]
		const addressRvZEi49 = accounts[5]
//		await GUMARewardslOZ3mSq.getReward.call({from: accounts[1]});
//		const address5qIGTd = await GUMARewardslOZ3mSq.setGUMA.call(addressTwYxAS, addressLG0okBk, {from: "0x0000000000000000000000000000000000000001"});
//		const addressnUTKF63 = await GUMARewardslOZ3mSq.updateReward.call(addressRvZEi49, {from: accounts[4]});
//		const uint256eEyzUlh = await GUMARewardslOZ3mSq.rewardPerToken.call({from: accounts[3]});

		await expect(GUMARewardslOZ3mSq.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsi13eWZc = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjpcO6Dp = "0x0000000000000000000000000000000000000001"
		const uint256n629GS = await GUMARewardsi13eWZc.totalSupply.call({from: accounts[5]});
		await GUMARewardsi13eWZc.onlyOwner.call({from: accounts[2]});
		const addressZhkVXdA = await GUMARewardsi13eWZc.owner.call({from: accounts[3]});
		const uint256wPgjw63 = await GUMARewardsi13eWZc.earned.call(addressjpcO6Dp, {from: accounts[2]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardslOZ3mSq = await GUMARewards.new({from: accounts[2]});
		const uintP0ybh79 = BigInt("1254")
		const uintftODz1J = BigInt("646")
		const addressdf4SnVm = "0x0000000000000000000000000000000000000001"
		const addressaSlseDY = accounts[2]
		const addressN7cACB5 = accounts[5]
		const uint2561Tjrxt = await GUMARewardslOZ3mSq.totalSupply.call({from: accounts[1]});
//		await GUMARewardslOZ3mSq.renounceOwnership.call({from: accounts[2]});
//		const uint256tgnwEyr = await GUMARewardslOZ3mSq.stake.call(uintP0ybh79, {from: accounts[4]});
//		await GUMARewardslOZ3mSq.getReward.call({from: accounts[1]});
//		const uint256c9Ilwy = await GUMARewardslOZ3mSq.stake.call(uintftODz1J, {from: accounts[2]});
//		await GUMARewardslOZ3mSq.renounceOwnership.call({from: accounts[0]});
//		const address5qIGTd = await GUMARewardslOZ3mSq.setGUMA.call(addressaSlseDY, addressdf4SnVm, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zKlFKek = await GUMARewardslOZ3mSq.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await GUMARewardslOZ3mSq.onlyOwner.call({from: accounts[0]});
//		const addressemKPDMk = await GUMARewardslOZ3mSq.updateReward.call(addressN7cACB5, {from: accounts[3]});
//		const uint256eEyzUlh = await GUMARewardslOZ3mSq.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint2561Tjrxt, BigInt("0"))
		await expect(GUMARewardslOZ3mSq.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardslOZ3mSq = await GUMARewards.new({from: accounts[2]});
		const addressCjZd14 = accounts[0]
		const addresskbiPilV = await GUMARewardslOZ3mSq.transferOwnership.call(addressCjZd14, {from: accounts[2]});
		const uint2566UyJBX = await GUMARewardslOZ3mSq.lastTimeRewardApplicable.call({from: accounts[3]});
//		await GUMARewardslOZ3mSq.getReward.call({from: accounts[1]});

		assert.equal(uint2566UyJBX, BigInt("0"))
		await expect(GUMARewardslOZ3mSq.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardslOZ3mSq = await GUMARewards.new({from: accounts[2]});
		const addressHOwIQiU = accounts[2]
		const uintMR6RC0B = BigInt("934")
		const addressqrbA9vS = "0x0000000000000000000000000000000000000001"
		const addresstTC7nPp = accounts[2]
		const uintjQs6fY = BigInt("1171")
		const addresstw0xKZA = accounts[5]
		const uint2561Tjrxt = await GUMARewardslOZ3mSq.totalSupply.call({from: accounts[1]});
//		await GUMARewardslOZ3mSq.getReward.call({from: accounts[1]});
//		const addressXhLWgjl = await GUMARewardslOZ3mSq.setRewardDistribution.call(addressHOwIQiU, {from: accounts[2]});
//		const uint256c9Ilwy = await GUMARewardslOZ3mSq.stake.call(uintMR6RC0B, {from: accounts[2]});
//		const address5qIGTd = await GUMARewardslOZ3mSq.setGUMA.call(addresstTC7nPp, addressqrbA9vS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zKlFKek = await GUMARewardslOZ3mSq.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256msHfGVu = await GUMARewardslOZ3mSq.stake.call(uintjQs6fY, {from: accounts[4]});
//		await GUMARewardslOZ3mSq.renounceOwnership.call({from: accounts[1]});
//		const addressemKPDMk = await GUMARewardslOZ3mSq.updateReward.call(addresstw0xKZA, {from: accounts[3]});
//		const uint256eEyzUlh = await GUMARewardslOZ3mSq.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint2561Tjrxt, BigInt("0"))
		await expect(GUMARewardslOZ3mSq.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})