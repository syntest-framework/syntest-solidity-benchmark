const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsajFrGKH = await GUMARewards.new({from: accounts[4]});
		await GUMARewardsajFrGKH.onlyOwner.call({from: accounts[1]});
		const booldWmesUP = await GUMARewardsajFrGKH.isOwner.call({from: accounts[3]});
		await GUMARewardsajFrGKH.onlyRewardDistribution.call({from: accounts[4]});

		await expect(GUMARewardsajFrGKH.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsA9zDYp7 = await GUMARewards.new({from: accounts[3]});
		const uint2564gJruc = await GUMARewardsA9zDYp7.totalSupply.call({from: accounts[5]});
		await GUMARewardsA9zDYp7.onlyOwner.call({from: accounts[3]});
		const uint256MuA6ORT = await GUMARewardsA9zDYp7.totalSupply.call({from: accounts[0]});

		assert.equal(uint2564gJruc, BigInt("0"))
		await expect(GUMARewardsA9zDYp7.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqiTnng1 = await GUMARewards.new({from: accounts[3]});
		const uintb9eC8Vv = BigInt("1663")
		const addressoZZYA5 = accounts[1]
		const addressZi5WpKe = accounts[3]
		const addressXICHwu = accounts[1]
		const uint256wNh2GoD = await GUMARewardsqiTnng1.totalSupply.call({from: accounts[5]});
		const uint256Jpq1p8l = await GUMARewardsqiTnng1.stake.call(uintb9eC8Vv, {from: accounts[0]});
		const uint256w1v5sVw = await GUMARewardsqiTnng1.earned.call(addressoZZYA5, {from: accounts[5]});
		const uint256dBG9UaX = await GUMARewardsqiTnng1.earned.call(addressZi5WpKe, {from: accounts[2]});
		const addressgEUBs59 = await GUMARewardsqiTnng1.updateReward.call(addressXICHwu, {from: accounts[2]});
		await GUMARewardsqiTnng1.onlyRewardDistribution.call({from: accounts[1]});

		assert.equal(uint256wNh2GoD, BigInt("0"))
		await expect(GUMARewardsqiTnng1.stake.call(uintb9eC8Vv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsAQLzu28 = await GUMARewards.new({from: accounts[3]});
		const addressVpzgz6 = "0x0000000000000000000000000000000000000001"
		const uintF6W2W9m = BigInt("1346")
		const uint256z850iem = await GUMARewardsAQLzu28.lastTimeRewardApplicable.call({from: accounts[2]});
		await GUMARewardsAQLzu28.renounceOwnership.call({from: accounts[3]});
		const addressMPgriFh = await GUMARewardsAQLzu28.transferOwnership.call(addressVpzgz6, {from: accounts[1]});
		const uint256wm4JtM = await GUMARewardsAQLzu28.stake.call(uintF6W2W9m, {from: accounts[4]});
		const uint256O0zal8 = await GUMARewardsAQLzu28.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256z850iem, BigInt("0"))
		await expect(GUMARewardsAQLzu28.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsAQLzu28 = await GUMARewards.new({from: accounts[3]});
		const addressqTfxilm = accounts[1]
		const addressRpsegKq = "0x0000000000000000000000000000000000000001"
		const addressKxeG55E = "0x0000000000000000000000000000000000000001"
		const uintqztF0hM = BigInt("1356")
		const uint256z850iem = await GUMARewardsAQLzu28.lastTimeRewardApplicable.call({from: accounts[2]});
		const address95QaQw = await GUMARewardsAQLzu28.setGUMA.call(addressRpsegKq, addressqTfxilm, {from: accounts[2]});
		await GUMARewardsAQLzu28.renounceOwnership.call({from: accounts[3]});
		const addressMPgriFh = await GUMARewardsAQLzu28.transferOwnership.call(addressKxeG55E, {from: accounts[1]});
		const uint256wm4JtM = await GUMARewardsAQLzu28.stake.call(uintqztF0hM, {from: accounts[4]});
		const uint256O0zal8 = await GUMARewardsAQLzu28.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256z850iem, BigInt("0"))
		await expect(GUMARewardsAQLzu28.setGUMA.call(addressRpsegKq, addressqTfxilm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardssxEIpvv = await GUMARewards.new({from: accounts[1]});
		const addresseYuF9ro = accounts[0]
		await GUMARewardssxEIpvv.renounceOwnership.call({from: accounts[1]});
		const uint256hFP6E0n = await GUMARewardssxEIpvv.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardssxEIpvv.getReward.call({from: accounts[0]});
		const addressnFjZgVE = await GUMARewardssxEIpvv.updateReward.call(addresseYuF9ro, {from: accounts[3]});
		await GUMARewardssxEIpvv.onlyRewardDistribution.call({from: accounts[5]});

		await expect(GUMARewardssxEIpvv.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsJIBgP9X = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJROWfa3 = accounts[3]
		const addressAeQQc3N = accounts[3]
		const addressOV5IIN0 = accounts[2]
		const addresseK1dK8L = accounts[2]
		const addressrreLZMj = await GUMARewardsJIBgP9X.setGUMA.call(addressAeQQc3N, addressJROWfa3, {from: accounts[1]});
		const addresstydjSjn = await GUMARewardsJIBgP9X.setGUMA.call(addresseK1dK8L, addressOV5IIN0, {from: accounts[2]});
		await GUMARewardsJIBgP9X.onlyOwner.call({from: accounts[2]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqiTnng1 = await GUMARewards.new({from: accounts[3]});
		const addressNhPmvfC = accounts[3]
		const uintxmuq8N4 = BigInt("1663")
		const addressQOVNlD0 = accounts[2]
		await GUMARewardsqiTnng1.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsqiTnng1.getReward.call({from: accounts[0]});
		const addressViOjOn = await GUMARewardsqiTnng1.transferOwnership.call(addressNhPmvfC, {from: accounts[3]});
		const uint256Jpq1p8l = await GUMARewardsqiTnng1.stake.call(uintxmuq8N4, {from: accounts[0]});
		const addressgEUBs59 = await GUMARewardsqiTnng1.updateReward.call(addressQOVNlD0, {from: accounts[2]});
		await GUMARewardsqiTnng1.onlyRewardDistribution.call({from: accounts[1]});

		await expect(GUMARewardsqiTnng1.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqiTnng1 = await GUMARewards.new({from: accounts[3]});
		const uintJKE7oi6 = BigInt("1663")
		const addressREhfAGm = accounts[1]
		const addressafZXk7Z = accounts[2]
		const addressJ9cAQOH = await GUMARewardsqiTnng1.owner.call({from: accounts[5]});
		const uint256wNh2GoD = await GUMARewardsqiTnng1.totalSupply.call({from: accounts[5]});
		await GUMARewardsqiTnng1.getReward.call({from: accounts[0]});
		const uint256Jpq1p8l = await GUMARewardsqiTnng1.stake.call(uintJKE7oi6, {from: accounts[0]});
		const uint256w1v5sVw = await GUMARewardsqiTnng1.earned.call(addressREhfAGm, {from: accounts[5]});
		const addressgEUBs59 = await GUMARewardsqiTnng1.updateReward.call(addressafZXk7Z, {from: accounts[2]});
		await GUMARewardsqiTnng1.onlyRewardDistribution.call({from: accounts[1]});

		assert.equal(addressJ9cAQOH, 0x5259D99bD008DCDc8FF295f926699479D79988Bd)
		assert.equal(uint256wNh2GoD, BigInt("0"))
		await expect(GUMARewardsqiTnng1.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqiTnng1 = await GUMARewards.new({from: accounts[3]});
		const addressS8qCIr = accounts[1]
		const uintq6r9XnO = BigInt("726")
		const addressXKM0E55 = accounts[1]
		const uintDSEle99 = BigInt("1744")
		const addressrexAvx7 = accounts[2]
		await GUMARewardsqiTnng1.getReward.call({from: accounts[0]});
		const addresskK3qkRD = await GUMARewardsqiTnng1.setRewardDistribution.call(addressS8qCIr, {from: accounts[3]});
		const uint256Jpq1p8l = await GUMARewardsqiTnng1.stake.call(uintq6r9XnO, {from: accounts[0]});
		const uint256M8DgVpg = await GUMARewardsqiTnng1.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256w1v5sVw = await GUMARewardsqiTnng1.earned.call(addressXKM0E55, {from: accounts[5]});
		const uint256GkX9wKw = await GUMARewardsqiTnng1.stake.call(uintDSEle99, {from: accounts[2]});
		const addressgEUBs59 = await GUMARewardsqiTnng1.updateReward.call(addressrexAvx7, {from: accounts[2]});
		await GUMARewardsqiTnng1.onlyRewardDistribution.call({from: accounts[1]});

		await expect(GUMARewardsqiTnng1.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})