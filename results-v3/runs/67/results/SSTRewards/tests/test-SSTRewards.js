const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardssdHy7Xs = await SSTRewards.new({from: accounts[0]});
		const addresszBTWsFT = accounts[4]
		const addresszBUmkB = accounts[1]
		const uintTYULfTl = BigInt("1302")
		const uintcKngrDR = BigInt("226")
		const uint256kEpY3qr = await SSTRewardssdHy7Xs.balanceOf.call(addresszBTWsFT, {from: accounts[1]});
		const uint256PJ6EWn = await SSTRewardssdHy7Xs.earned.call(addresszBUmkB, {from: accounts[1]});
		const uint256mw5Nubo = await SSTRewardssdHy7Xs.notifyRewardAmount.call(uintTYULfTl, {from: accounts[2]});
		const uint256ilBhIKt = await SSTRewardssdHy7Xs.stake.call(uintcKngrDR, {from: accounts[4]});

		assert.equal(uint256PJ6EWn, BigInt("0"))
		assert.equal(uint256kEpY3qr, BigInt("0"))
		await expect(SSTRewardssdHy7Xs.notifyRewardAmount.call(uintTYULfTl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsj5aFiWJ = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintk3jooW = BigInt("1100")
		const uint256xW0pPiz = await SSTRewardsj5aFiWJ.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256x1jfkMS = await SSTRewardsj5aFiWJ.withdraw.call(uintk3jooW, {from: accounts[5]});
		await SSTRewardsj5aFiWJ.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await SSTRewardsj5aFiWJ.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsl14tllN = await SSTRewards.new({from: accounts[0]});
		const addressJ4dzmUE = accounts[3]
		const addressZiwXxiO = accounts[0]
		const uintqzsEYrA = BigInt("1350")
		const addressgsKOFrU = accounts[1]
		const addressiOX4iWl = await SSTRewardsl14tllN.updateReward.call(addressJ4dzmUE, {from: accounts[1]});
		const uint256KeCFIzp = await SSTRewardsl14tllN.totalSupply.call({from: accounts[1]});
		const uint2566UARz7 = await SSTRewardsl14tllN.rewardPerToken.call({from: accounts[2]});
		const uint256c0U1nn0 = await SSTRewardsl14tllN.earned.call(addressZiwXxiO, {from: accounts[2]});
		const uint256aHpB3z1 = await SSTRewardsl14tllN.stake.call(uintqzsEYrA, {from: accounts[1]});
		const addressPsBjAyD = await SSTRewardsl14tllN.updateReward.call(addressgsKOFrU, {from: accounts[3]});

		await expect(SSTRewardsl14tllN.updateReward.call(addressJ4dzmUE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsvOklCMu = await SSTRewards.new({from: accounts[4]});
		const uintiuZCztW = BigInt("1000")
		await SSTRewardsvOklCMu.getReward.call({from: accounts[4]});
		const uint256Tm1nYOa = await SSTRewardsvOklCMu.withdraw.call(uintiuZCztW, {from: accounts[0]});

		await expect(SSTRewardsvOklCMu.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardssdHy7Xs = await SSTRewards.new({from: accounts[0]});
		const addresscJg9Cq1 = accounts[4]
		const addressSk5sXfP = accounts[1]
		const uintWvG4LD = BigInt("919")
		const uintK194IH = BigInt("226")
		const uint256kEpY3qr = await SSTRewardssdHy7Xs.balanceOf.call(addresscJg9Cq1, {from: accounts[1]});
		const uint256PJ6EWn = await SSTRewardssdHy7Xs.earned.call(addressSk5sXfP, {from: accounts[1]});
		await SSTRewardssdHy7Xs.exit.call({from: accounts[3]});
		const uint256mw5Nubo = await SSTRewardssdHy7Xs.notifyRewardAmount.call(uintWvG4LD, {from: accounts[2]});
		const uint256ilBhIKt = await SSTRewardssdHy7Xs.stake.call(uintK194IH, {from: accounts[4]});

		assert.equal(uint256PJ6EWn, BigInt("0"))
		assert.equal(uint256kEpY3qr, BigInt("0"))
		await expect(SSTRewardssdHy7Xs.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsMuih8H = await SSTRewards.new({from: accounts[0]});
		const uintKEMUTr8 = BigInt("1380")
		const addressGBy8DqT = accounts[2]
		const uint256LvIYE0G = await SSTRewardsMuih8H.rewardPerToken.call({from: accounts[4]});
		const uint2567ylQfI = await SSTRewardsMuih8H.stake.call(uintKEMUTr8, {from: accounts[3]});
		const uint256iFl1ea3 = await SSTRewardsMuih8H.balanceOf.call(addressGBy8DqT, {from: accounts[3]});

		assert.equal(uint256LvIYE0G, BigInt("0"))
		await expect(SSTRewardsMuih8H.stake.call(uintKEMUTr8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})