const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewards9ZmYiW = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressotozCTm = accounts[1]
		const uintg00AYLb = BigInt("1999")
		const uint256wmiYDCZ = await GUMARewards9ZmYiW.balanceOf.call(addressotozCTm, {from: accounts[2]});
		const uint256x1z0rhM = await GUMARewards9ZmYiW.notifyRewardAmount.call(uintg00AYLb, {from: accounts[4]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsQkEXGLU = await GUMARewards.new({from: accounts[1]});
		const addressRn0S9Er = accounts[1]
		const addresse4HSl9P = accounts[3]
		const addressHkDa8Y = accounts[3]
		const addressCNc4Nlk = accounts[1]
//		await GUMARewardsQkEXGLU.onlyOwner.call({from: accounts[3]});
//		const addressITRqFUa = await GUMARewardsQkEXGLU.setGUMA.call(addresse4HSl9P, addressRn0S9Er, {from: accounts[2]});
//		const addressNcXUdYX = await GUMARewardsQkEXGLU.setRewardDistribution.call(addressHkDa8Y, {from: accounts[2]});
//		const addressqfM3Z5D = await GUMARewardsQkEXGLU.updateReward.call(addressCNc4Nlk, {from: accounts[0]});

		await expect(GUMARewardsQkEXGLU.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsvZWqg1f = await GUMARewards.new({from: accounts[4]});
		const addressLsahJ9K = accounts[0]
		const uintNDdv08n = BigInt("1039")
		const addresszSU09z2 = accounts[3]
		const addressBqK5pN4 = await GUMARewardsvZWqg1f.setRewardDistribution.call(addressLsahJ9K, {from: accounts[4]});
		const uint256kYTTJYv = await GUMARewardsvZWqg1f.totalSupply.call({from: accounts[1]});
		const uint256tpU9VVh = await GUMARewardsvZWqg1f.totalSupply.call({from: accounts[5]});
//		const uint256x2CTQxg = await GUMARewardsvZWqg1f.stake.call(uintNDdv08n, {from: accounts[5]});
//		const addressOlqC0if = await GUMARewardsvZWqg1f.setRewardDistribution.call(addresszSU09z2, {from: accounts[0]});

		assert.equal(uint256kYTTJYv, BigInt("0"))
		assert.equal(uint256tpU9VVh, BigInt("0"))
		await expect(GUMARewardsvZWqg1f.stake.call(uintNDdv08n, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWiRyRiu = await GUMARewards.new({from: accounts[2]});
		const addressN2TUVUF = accounts[0]
		const addressJYnG0z7 = accounts[2]
//		const addressmqw6MLV = await GUMARewardsWiRyRiu.setGUMA.call(addressJYnG0z7, addressN2TUVUF, {from: accounts[3]});
//		const uint256ruXqPfs = await GUMARewardsWiRyRiu.totalSupply.call({from: accounts[2]});
//		await GUMARewardsWiRyRiu.renounceOwnership.call({from: accounts[4]});

		await expect(GUMARewardsWiRyRiu.setGUMA.call(addressJYnG0z7, addressN2TUVUF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsOHWzW1O = await GUMARewards.new({from: accounts[0]});
		const uintgGjtXcU = BigInt("1532")
		const uintRuiRAuv = BigInt("933")
//		await GUMARewardsOHWzW1O.getReward.call({from: accounts[4]});
//		const uint256js8LeOk = await GUMARewardsOHWzW1O.notifyRewardAmount.call(uintgGjtXcU, {from: accounts[0]});
//		const boolwtF4XQX = await GUMARewardsOHWzW1O.isOwner.call({from: accounts[2]});
//		const uint256B0GrWHS = await GUMARewardsOHWzW1O.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await GUMARewardsOHWzW1O.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256CW8ug6O = await GUMARewardsOHWzW1O.notifyRewardAmount.call(uintRuiRAuv, {from: accounts[2]});

		await expect(GUMARewardsOHWzW1O.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsB0sJtrN = await GUMARewards.new({from: accounts[0]});
		const uintdwYzo8 = BigInt("1899")
		const addressTEOv9tD = accounts[1]
//		await GUMARewardsB0sJtrN.renounceOwnership.call({from: accounts[1]});
//		const uint256KG5jHBE = await GUMARewardsB0sJtrN.stake.call(uintdwYzo8, {from: accounts[5]});
//		const uint256PLxW31Q = await GUMARewardsB0sJtrN.earned.call(addressTEOv9tD, {from: accounts[4]});

		await expect(GUMARewardsB0sJtrN.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsOHWzW1O = await GUMARewards.new({from: accounts[0]});
		const uintnMhSO21 = BigInt("1532")
		const addressFGCe8oM = accounts[1]
		const uintswQ1yGE = BigInt("933")
		const addressEW2ALuE = await GUMARewardsOHWzW1O.owner.call({from: accounts[3]});
//		await GUMARewardsOHWzW1O.getReward.call({from: accounts[4]});
//		const uint256js8LeOk = await GUMARewardsOHWzW1O.notifyRewardAmount.call(uintnMhSO21, {from: accounts[0]});
//		const boolwtF4XQX = await GUMARewardsOHWzW1O.isOwner.call({from: accounts[2]});
//		const uint256B0GrWHS = await GUMARewardsOHWzW1O.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressx52diZ3 = await GUMARewardsOHWzW1O.updateReward.call(addressFGCe8oM, {from: accounts[4]});
//		await GUMARewardsOHWzW1O.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256CW8ug6O = await GUMARewardsOHWzW1O.notifyRewardAmount.call(uintswQ1yGE, {from: accounts[2]});

		assert.equal(addressEW2ALuE, 0x115510726da96978adC9571A82e5ffDb4C803668)
		await expect(GUMARewardsOHWzW1O.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsrLJYTp2 = await GUMARewards.new({from: accounts[3]});
		const addressZ7JXI7 = accounts[2]
		const uintWJNXSM6 = BigInt("409")
		const uintVqyiKe = BigInt("771")
		const addresst26ET4c = "0x0000000000000000000000000000000000000001"
		const addressdayIqEJ = accounts[5]
		const addressNP7ZZj9 = await GUMARewardsrLJYTp2.transferOwnership.call(addressZ7JXI7, {from: accounts[3]});
//		await GUMARewardsrLJYTp2.getReward.call({from: accounts[3]});
//		const uint256MjM69jH = await GUMARewardsrLJYTp2.stake.call(uintWJNXSM6, {from: accounts[4]});
//		const uint256YeDV55H = await GUMARewardsrLJYTp2.stake.call(uintVqyiKe, {from: accounts[0]});
//		const uint256lfErqvZ = await GUMARewardsrLJYTp2.rewardPerToken.call({from: accounts[0]});
//		const addresslhSbiDy = await GUMARewardsrLJYTp2.setGUMA.call(addressdayIqEJ, addresst26ET4c, {from: accounts[2]});

		await expect(GUMARewardsrLJYTp2.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsmed4g5x = await GUMARewards.new({from: accounts[0]});
		const addressUHhI2L3 = accounts[1]
		const addressiDamA37 = accounts[0]
		const uintzTaESL = BigInt("1300")
		const uintnFNrM3w = BigInt("1088")
		const addressbMZDIxd = await GUMARewardsmed4g5x.setRewardDistribution.call(addressUHhI2L3, {from: accounts[0]});
//		await GUMARewardsmed4g5x.renounceOwnership.call({from: accounts[0]});
//		await GUMARewardsmed4g5x.getReward.call({from: accounts[1]});
//		const uint256RJp2b5N = await GUMARewardsmed4g5x.earned.call(addressiDamA37, {from: accounts[4]});
//		const uint256RwVvyZN = await GUMARewardsmed4g5x.stake.call(uintzTaESL, {from: accounts[5]});
//		await GUMARewardsmed4g5x.getReward.call({from: accounts[3]});
//		const uint256TE5qwgB = await GUMARewardsmed4g5x.stake.call(uintnFNrM3w, {from: accounts[1]});

		await expect(GUMARewardsmed4g5x.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})