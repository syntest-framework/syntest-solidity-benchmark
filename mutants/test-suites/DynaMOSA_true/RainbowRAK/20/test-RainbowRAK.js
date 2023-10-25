const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKa8oY0mg = await RainbowRAK.new({from: accounts[3]});
		const uintIkXvDM = BigInt("1092")
		const addresswEjC2Sl = accounts[4]
//		await RainbowRAKa8oY0mg.claimRewards.call({from: accounts[4]});
//		const uint256EBiYkZS = await RainbowRAKa8oY0mg.unstake.call(uintIkXvDM, {from: accounts[3]});
//		const uint256x24173l = await RainbowRAKa8oY0mg.earned.call(addresswEjC2Sl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKa8oY0mg.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKYbNkDdt = await RainbowRAK.new({from: accounts[2]});
		const uintybEeVGx = BigInt("1503")
		const addressWHdWmW5 = accounts[3]
//		await RainbowRAKYbNkDdt.renounceOwnership.call({from: accounts[0]});
//		const uint256Q4sw3VX = await RainbowRAKYbNkDdt.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256qcVgAJF = await RainbowRAKYbNkDdt.getCurrentRewardReserve.call({from: accounts[4]});
//		const uint256ourN2S5 = await RainbowRAKYbNkDdt.stake.call(uintybEeVGx, {from: accounts[1]});
//		const addressNHkUOJ = await RainbowRAKYbNkDdt.updateReward.call(addressWHdWmW5, {from: accounts[0]});

		await expect(RainbowRAKYbNkDdt.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKdC7hFPT = await RainbowRAK.new({from: accounts[0]});
//		await RainbowRAKdC7hFPT.exit.call({from: accounts[4]});
//		await RainbowRAKdC7hFPT.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKdC7hFPT.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKozALZj = await RainbowRAK.new({from: accounts[0]});
		const addressULfuPR = await RainbowRAKozALZj.owner.call({from: accounts[1]});
		const addressarrayyuGfvo = await RainbowRAKozALZj.getCommunity.call({from: accounts[5]});
//		await RainbowRAKozALZj.onlyOwner.call({from: accounts[1]});

		assert.equal(addressULfuPR, 0x28d6db2FfCE7F2FbE9Ac84F2f7A80e0D2EbD0553)
		assert.equal(addressarrayyuGfvo, )
		await expect(RainbowRAKozALZj.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKMS7p9o = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressn2wsJM = accounts[1]
		const addressarrayN57n6zl = await RainbowRAKMS7p9o.getCommunity.call({from: accounts[0]});
		const uint256HlzfprH = await RainbowRAKMS7p9o.getCurrentRewardReserve.call({from: accounts[3]});
		await RainbowRAKMS7p9o.renounceOwnership.call({from: accounts[1]});
		const addressO7zH0LQ = await RainbowRAKMS7p9o.transferOwnership.call(addressn2wsJM, {from: accounts[3]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKuh2wmLm = await RainbowRAK.new({from: accounts[2]});
		const uintBgeEf01 = BigInt("743")
		const uint256SdGW7Zz = await RainbowRAKuh2wmLm.getCurrentRewardReserve.call({from: accounts[1]});
		const uint256cd7lyn6 = await RainbowRAKuh2wmLm.rewardPerToken.call({from: accounts[2]});
		const boolhXZ7EOE = await RainbowRAKuh2wmLm.isOwner.call({from: accounts[3]});
		const uint256gU2qwDD = await RainbowRAKuh2wmLm.getCurrentRewardReserve.call({from: accounts[3]});
//		const uint256ED0Fjvn = await RainbowRAKuh2wmLm.stake.call(uintBgeEf01, {from: accounts[2]});
//		const boolym8CzEv = await RainbowRAKuh2wmLm.isOwner.call({from: accounts[2]});

		assert.equal(boolhXZ7EOE, false)
		assert.equal(uint256SdGW7Zz, BigInt("0"))
		assert.equal(uint256cd7lyn6, BigInt("0"))
		assert.equal(uint256gU2qwDD, BigInt("0"))
		await expect(RainbowRAKuh2wmLm.stake.call(uintBgeEf01, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKozALZj = await RainbowRAK.new({from: accounts[0]});
		const uintlBXkk7v = BigInt("1907")
		const addressXKhABRK = accounts[2]
		const addressPSJKwOz = accounts[1]
//		const uint256Hb1cGA8 = await RainbowRAKozALZj.unstake.call(uintlBXkk7v, {from: accounts[0]});
//		const uint256KFpXu4x = await RainbowRAKozALZj.earned.call(addressXKhABRK, {from: accounts[0]});
//		const uint256vf7Fuzc = await RainbowRAKozALZj.getCurrentRewardReserve.call({from: accounts[4]});
//		const uint256HHCiVGj = await RainbowRAKozALZj.earned.call(addressPSJKwOz, {from: accounts[1]});
//		const addressULfuPR = await RainbowRAKozALZj.owner.call({from: accounts[1]});
//		const addressarrayyuGfvo = await RainbowRAKozALZj.getCommunity.call({from: accounts[5]});
//		await RainbowRAKozALZj.onlyOwner.call({from: accounts[1]});

		await expect(RainbowRAKozALZj.unstake.call(uintlBXkk7v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKic4eGZt = await RainbowRAK.new({from: accounts[3]});
		const uintz98Qe6i = BigInt("996")
//		const uint256HZ9kFbD = await RainbowRAKic4eGZt.notifyRewardAmount.call(uintz98Qe6i, {from: accounts[3]});
//		const uint256zulrH0n = await RainbowRAKic4eGZt.getCurrentRewardReserve.call({from: accounts[1]});

		await expect(RainbowRAKic4eGZt.notifyRewardAmount.call(uintz98Qe6i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKuh2wmLm = await RainbowRAK.new({from: accounts[2]});
		const uintx3ZDySB = BigInt("447")
		const uintckSDaX = BigInt("935")
		const uintzsTrqSK = BigInt("743")
		const addressarrayrUVyIHT = await RainbowRAKuh2wmLm.getCommunity.call({from: accounts[4]});
		const uint256SdGW7Zz = await RainbowRAKuh2wmLm.getCurrentRewardReserve.call({from: accounts[1]});
//		await RainbowRAKuh2wmLm.renounceOwnership.call({from: accounts[2]});
//		const uint256NSCzj72 = await RainbowRAKuh2wmLm.stake.call(uintx3ZDySB, {from: accounts[0]});
//		const uint256aZ9pUMv = await RainbowRAKuh2wmLm.unstake.call(uintckSDaX, {from: accounts[1]});
//		const uint256Czvp5AG = await RainbowRAKuh2wmLm.getCurrentRewardReserve.call({from: accounts[3]});
//		const uint256ED0Fjvn = await RainbowRAKuh2wmLm.stake.call(uintzsTrqSK, {from: accounts[2]});
//		const uint256AWh7HAk = await RainbowRAKuh2wmLm.getCurrentRewardReserve.call({from: accounts[3]});
//		await RainbowRAKuh2wmLm.claimRewards.call({from: accounts[0]});
//		const boolym8CzEv = await RainbowRAKuh2wmLm.isOwner.call({from: accounts[2]});

		assert.equal(addressarrayrUVyIHT, )
		assert.equal(uint256SdGW7Zz, BigInt("0"))
		await expect(RainbowRAKuh2wmLm.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKa8oY0mg = await RainbowRAK.new({from: accounts[3]});
		const addressfGoTsgM = accounts[4]
		const uinti1yrhwf = BigInt("1377")
		const addresspvTU19M = await RainbowRAKa8oY0mg.transferOwnership.call(addressfGoTsgM, {from: accounts[3]});
//		await RainbowRAKa8oY0mg.claimRewards.call({from: accounts[4]});
//		const uint256gnqBmZz = await RainbowRAKa8oY0mg.stake.call(uinti1yrhwf, {from: accounts[2]});

		await expect(RainbowRAKa8oY0mg.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})