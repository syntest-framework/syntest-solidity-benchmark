const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKIODiy2h = await RainbowRAK.new({from: accounts[1]});
		const uintkrFdUi = BigInt("1353")
		const uintW3Ygsbx = BigInt("1797")
		const uintsy7UmRx = BigInt("1050")
		const uint256rlcmGeW = await RainbowRAKIODiy2h.notifyRewardAmount.call(uintkrFdUi, {from: accounts[1]});
		const uint256FkYVvUW = await RainbowRAKIODiy2h.unstake.call(uintW3Ygsbx, {from: accounts[0]});
		const addressarrayOvFX0x1 = await RainbowRAKIODiy2h.getCommunity.call({from: accounts[2]});
		const addressW4E9Gfx = await RainbowRAKIODiy2h.owner.call({from: accounts[1]});
		const uint256ZfFI2JX = await RainbowRAKIODiy2h.stake.call(uintsy7UmRx, {from: accounts[1]});

		await expect(RainbowRAKIODiy2h.notifyRewardAmount.call(uintkrFdUi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKm5k109C = await RainbowRAK.new({from: accounts[2]});
		const addressrzDK7ka = accounts[0]
		const uintTZO5tOl = BigInt("1582")
		const addressPFrW06 = await RainbowRAKm5k109C.updateReward.call(addressrzDK7ka, {from: accounts[2]});
		await RainbowRAKm5k109C.claimRewards.call({from: accounts[4]});
		const uint256hGVczYi = await RainbowRAKm5k109C.stake.call(uintTZO5tOl, {from: accounts[0]});

		await expect(RainbowRAKm5k109C.updateReward.call(addressrzDK7ka, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKj1BVUqO = await RainbowRAK.new({from: accounts[0]});
		const addresstGGeKTj = accounts[1]
		const uintr8aK4wQ = BigInt("1394")
		const uint256YKISmas = await RainbowRAKj1BVUqO.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lcaIxmN = await RainbowRAKj1BVUqO.rewardPerToken.call({from: accounts[5]});
		const addressOB8WlRv = await RainbowRAKj1BVUqO.transferOwnership.call(addresstGGeKTj, {from: accounts[1]});
		await RainbowRAKj1BVUqO.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GoRW1Qa = await RainbowRAKj1BVUqO.unstake.call(uintr8aK4wQ, {from: accounts[4]});

		assert.equal(uint256YKISmas, BigInt("0"))
		assert.equal(uint256lcaIxmN, BigInt("0"))
		await expect(RainbowRAKj1BVUqO.transferOwnership.call(addresstGGeKTj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKkwcP8Ts = await RainbowRAK.new({from: accounts[0]});
		const addressbMHnabW = accounts[2]
		const boolE1vsc0 = await RainbowRAKkwcP8Ts.isOwner.call({from: accounts[2]});
		const addressUY5wPI4 = await RainbowRAKkwcP8Ts.transferOwnership.call(addressbMHnabW, {from: accounts[0]});
		await RainbowRAKkwcP8Ts.renounceOwnership.call({from: accounts[0]});
		await RainbowRAKkwcP8Ts.claimRewards.call({from: accounts[1]});

		assert.equal(boolE1vsc0, false)
		await expect(RainbowRAKkwcP8Ts.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOWYAvg = await RainbowRAK.new({from: accounts[0]});
		const uintZkFJolJ = BigInt("1075")
		const uint256H1eyObY = await RainbowRAKOWYAvg.stake.call(uintZkFJolJ, {from: accounts[2]});
		const addressarrayUTWdKb = await RainbowRAKOWYAvg.getCommunity.call({from: accounts[5]});
		await RainbowRAKOWYAvg.exit.call({from: accounts[5]});
		const uint256QMtHTK = await RainbowRAKOWYAvg.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KulgQC = await RainbowRAKOWYAvg.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(RainbowRAKOWYAvg.stake.call(uintZkFJolJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKkwcP8Ts = await RainbowRAK.new({from: accounts[0]});
		const uintP3FbC27 = BigInt("605")
		const addressSYSys1a = accounts[2]
		const boolE1vsc0 = await RainbowRAKkwcP8Ts.isOwner.call({from: accounts[2]});
		const uint256QDtDNfr = await RainbowRAKkwcP8Ts.unstake.call(uintP3FbC27, {from: accounts[0]});
		const addressUY5wPI4 = await RainbowRAKkwcP8Ts.transferOwnership.call(addressSYSys1a, {from: accounts[0]});
		await RainbowRAKkwcP8Ts.renounceOwnership.call({from: accounts[0]});
		await RainbowRAKkwcP8Ts.claimRewards.call({from: accounts[1]});

		assert.equal(boolE1vsc0, false)
		await expect(RainbowRAKkwcP8Ts.unstake.call(uintP3FbC27, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDEQWtXr = await RainbowRAK.new({from: accounts[4]});
		const uinti8jF7gZ = BigInt("599")
		const uint256lHvhuIC = await RainbowRAKDEQWtXr.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressGN9f0VH = await RainbowRAKDEQWtXr.owner.call({from: accounts[3]});
		const uint256QnrroF = await RainbowRAKDEQWtXr.stake.call(uinti8jF7gZ, {from: accounts[3]});
		await RainbowRAKDEQWtXr.exit.call({from: accounts[1]});
		await RainbowRAKDEQWtXr.claimRewards.call({from: accounts[3]});
		await RainbowRAKDEQWtXr.claimRewards.call({from: accounts[4]});
		await RainbowRAKDEQWtXr.exit.call({from: accounts[2]});
		await RainbowRAKDEQWtXr.exit.call({from: accounts[1]});

		assert.equal(addressGN9f0VH, 0x5b97265FCDc58470bc00458F095860dE64506Be3)
		assert.equal(uint256lHvhuIC, BigInt("0"))
		await expect(RainbowRAKDEQWtXr.stake.call(uinti8jF7gZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKSV80HmW = await RainbowRAK.new({from: accounts[0]});
		const addressQGwZlSU = accounts[4]
		const addressarrayhFxqGQ = await RainbowRAKSV80HmW.getCommunity.call({from: accounts[4]});
		const uint256J1tmEQt = await RainbowRAKSV80HmW.earned.call(addressQGwZlSU, {from: accounts[1]});

		assert.equal(addressarrayhFxqGQ, )
		assert.equal(uint256J1tmEQt, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfxTSrd = await RainbowRAK.new({from: accounts[2]});
		const addressp5UnVFg = accounts[3]
		await RainbowRAKfxTSrd.exit.call({from: accounts[3]});
		const address3Yamo7 = await RainbowRAKfxTSrd.updateReward.call(addressp5UnVFg, {from: accounts[3]});
		await RainbowRAKfxTSrd.claimRewards.call({from: accounts[3]});

		await expect(RainbowRAKfxTSrd.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfbVOW9s = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKfbVOW9s.claimRewards.call({from: accounts[3]});
		const uint256oiRDpNa = await RainbowRAKfbVOW9s.rewardPerToken.call({from: accounts[4]});
		await RainbowRAKfbVOW9s.exit.call({from: accounts[0]});
		await RainbowRAKfbVOW9s.onlyOwner.call({from: accounts[3]});
	});
})