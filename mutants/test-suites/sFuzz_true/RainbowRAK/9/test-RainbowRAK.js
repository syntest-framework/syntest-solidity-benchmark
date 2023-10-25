const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKiA5Zz8u = await RainbowRAK.new({from: accounts[5]});
		const addressiZKuGhj = accounts[5]
		const addresspUFuCfJ = accounts[3]
//		const addressFMawznJ = await RainbowRAKiA5Zz8u.updateReward.call(addressiZKuGhj, {from: accounts[3]});
//		const addressarrayTIDCLT5 = await RainbowRAKiA5Zz8u.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressn052e8Y = await RainbowRAKiA5Zz8u.updateReward.call(addresspUFuCfJ, {from: accounts[4]});

		await expect(RainbowRAKiA5Zz8u.updateReward.call(addressiZKuGhj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKMOal24 = await RainbowRAK.new({from: accounts[3]});
		const uintzNPHeag = BigInt("95")
		const addressV8BcLOB = accounts[2]
		const uint256KH68Dnk = await RainbowRAKKMOal24.rewardPerToken.call({from: accounts[4]});
//		await RainbowRAKKMOal24.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256pfJAjg = await RainbowRAKKMOal24.notifyRewardAmount.call(uintzNPHeag, {from: accounts[0]});
//		await RainbowRAKKMOal24.renounceOwnership.call({from: accounts[1]});
//		const addressT7nlCL3 = await RainbowRAKKMOal24.updateReward.call(addressV8BcLOB, {from: accounts[0]});

		assert.equal(uint256KH68Dnk, BigInt("0"))
		await expect(RainbowRAKKMOal24.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKt3ZJfgF = await RainbowRAK.new({from: accounts[1]});
		const uintRR9z2I9 = BigInt("1326")
		const uint256xD5OHam = await RainbowRAKt3ZJfgF.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256trKPIo = await RainbowRAKt3ZJfgF.unstake.call(uintRR9z2I9, {from: accounts[2]});

		assert.equal(uint256xD5OHam, BigInt("0"))
		await expect(RainbowRAKt3ZJfgF.unstake.call(uintRR9z2I9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKCHShJUd = await RainbowRAK.new({from: accounts[3]});
		const addressoDTq4d3 = accounts[2]
		const uintjuGcvbe = BigInt("548")
		const addressnrYTyV3 = accounts[5]
//		await RainbowRAKCHShJUd.claimRewards.call({from: accounts[4]});
//		const uint256cKA1NC = await RainbowRAKCHShJUd.earned.call(addressoDTq4d3, {from: accounts[5]});
//		const uint256E2xblfP = await RainbowRAKCHShJUd.notifyRewardAmount.call(uintjuGcvbe, {from: accounts[2]});
//		await RainbowRAKCHShJUd.exit.call({from: accounts[2]});
//		await RainbowRAKCHShJUd.renounceOwnership.call({from: accounts[4]});
//		const addressrvVJup8 = await RainbowRAKCHShJUd.transferOwnership.call(addressnrYTyV3, {from: accounts[4]});

		await expect(RainbowRAKCHShJUd.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKUvP8Nvw = await RainbowRAK.new({from: accounts[0]});
		const addressjsJ9vgP = accounts[2]
		const addressJvxpPV9 = accounts[2]
//		const address820oBn = await RainbowRAKUvP8Nvw.transferOwnership.call(addressjsJ9vgP, {from: accounts[3]});
//		const uint256XeWAJ7 = await RainbowRAKUvP8Nvw.earned.call(addressJvxpPV9, {from: accounts[2]});
//		const addressYKlhuYb = await RainbowRAKUvP8Nvw.owner.call({from: accounts[1]});

		await expect(RainbowRAKUvP8Nvw.transferOwnership.call(addressjsJ9vgP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKQzHOWWQ = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgjIFnsv = BigInt("361")
		const uintOJCOpPh = BigInt("1760")
		const uintb92nE5u = BigInt("698")
		const uint256EHnqTjP = await RainbowRAKQzHOWWQ.notifyRewardAmount.call(uintgjIFnsv, {from: accounts[5]});
		const uint256pp3mx8v = await RainbowRAKQzHOWWQ.unstake.call(uintOJCOpPh, {from: accounts[4]});
		const uint256Rmp8JnH = await RainbowRAKQzHOWWQ.unstake.call(uintb92nE5u, {from: accounts[0]});
		const boolVwJNYDI = await RainbowRAKQzHOWWQ.isOwner.call({from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKIV6RCs = await RainbowRAK.new({from: accounts[2]});
		const uintK128xNZ = BigInt("968")
		const uint256BztkS2f = await RainbowRAKIV6RCs.getCurrentRewardReserve.call({from: accounts[4]});
//		const uint256aa01xiu = await RainbowRAKIV6RCs.stake.call(uintK128xNZ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tGRX9C = await RainbowRAKIV6RCs.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256BztkS2f, BigInt("0"))
		await expect(RainbowRAKIV6RCs.stake.call(uintK128xNZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKIV6RCs = await RainbowRAK.new({from: accounts[2]});
		const uinttYD5KB1 = BigInt("968")
		const uint256BztkS2f = await RainbowRAKIV6RCs.getCurrentRewardReserve.call({from: accounts[4]});
		const addressarraydz6hHNg = await RainbowRAKIV6RCs.getCommunity.call({from: accounts[3]});
//		const uint256aa01xiu = await RainbowRAKIV6RCs.stake.call(uinttYD5KB1, {from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKIV6RCs.renounceOwnership.call({from: accounts[4]});
//		const uint256tGRX9C = await RainbowRAKIV6RCs.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(addressarraydz6hHNg, )
		assert.equal(uint256BztkS2f, BigInt("0"))
		await expect(RainbowRAKIV6RCs.stake.call(uinttYD5KB1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKFRvh2V = await RainbowRAK.new({from: accounts[3]});
		const addressnzugq3T = accounts[3]
		const addressXpQk28G = accounts[1]
		const addressarrayc4QfJRm = await RainbowRAKFRvh2V.getCommunity.call({from: accounts[2]});
		const addressS82b4pG = await RainbowRAKFRvh2V.owner.call({from: accounts[0]});
//		await RainbowRAKFRvh2V.claimRewards.call({from: accounts[5]});
//		const addressjCoWRk1 = await RainbowRAKFRvh2V.updateReward.call(addressnzugq3T, {from: accounts[4]});
//		const uint256XGKcIQg = await RainbowRAKFRvh2V.earned.call(addressXpQk28G, {from: accounts[2]});

		assert.equal(addressS82b4pG, 0xF1a20990d5BDaf651DC2F03983572d809c6d0F83)
		assert.equal(addressarrayc4QfJRm, )
		await expect(RainbowRAKFRvh2V.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKt3ZJfgF = await RainbowRAK.new({from: accounts[1]});
		const addressbeHiHmS = accounts[4]
		const uintDCnU6MS = BigInt("1326")
		const uint256xD5OHam = await RainbowRAKt3ZJfgF.lastTimeRewardApplicable.call({from: accounts[1]});
//		await RainbowRAKt3ZJfgF.exit.call({from: accounts[1]});
//		const addressHWd2qbH = await RainbowRAKt3ZJfgF.updateReward.call(addressbeHiHmS, {from: accounts[4]});
//		const uint256trKPIo = await RainbowRAKt3ZJfgF.unstake.call(uintDCnU6MS, {from: accounts[2]});
//		const uint256eT9BG1x = await RainbowRAKt3ZJfgF.rewardPerToken.call({from: accounts[5]});

		assert.equal(uint256xD5OHam, BigInt("0"))
		await expect(RainbowRAKt3ZJfgF.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKysc9vD1 = await RainbowRAK.new({from: accounts[2]});
		const uintiaW39Df = BigInt("1793")
		const uintgXLipc4 = BigInt("369")
//		const uint256ojXD2AG = await RainbowRAKysc9vD1.notifyRewardAmount.call(uintiaW39Df, {from: accounts[2]});
//		const uint256QzemOIM = await RainbowRAKysc9vD1.stake.call(uintgXLipc4, {from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKysc9vD1.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKysc9vD1.notifyRewardAmount.call(uintiaW39Df, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKFRvh2V = await RainbowRAK.new({from: accounts[3]});
		const uintKRqYDwJ = BigInt("32")
//		await RainbowRAKFRvh2V.renounceOwnership.call({from: accounts[3]});
//		const uint256rSvfEsm = await RainbowRAKFRvh2V.unstake.call(uintKRqYDwJ, {from: accounts[0]});
//		const addressDjCYuHH = await RainbowRAKFRvh2V.owner.call({from: accounts[4]});

		await expect(RainbowRAKFRvh2V.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKFRvh2V = await RainbowRAK.new({from: accounts[3]});
		const addressCAOWfjB = accounts[1]
		const addresse1tXwqr = await RainbowRAKFRvh2V.transferOwnership.call(addressCAOWfjB, {from: accounts[3]});
//		await RainbowRAKFRvh2V.claimRewards.call({from: accounts[5]});

		await expect(RainbowRAKFRvh2V.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})