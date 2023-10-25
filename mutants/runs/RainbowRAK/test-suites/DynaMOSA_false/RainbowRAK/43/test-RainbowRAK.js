const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKA9DpDmB = await RainbowRAK.new({from: accounts[0]});
		const addressjcpB1Oc = accounts[4]
		const addressiULCqdq = await RainbowRAKA9DpDmB.updateReward.call(addressjcpB1Oc, {from: accounts[2]});
		const boolRbW06v7 = await RainbowRAKA9DpDmB.isOwner.call({from: accounts[2]});
		await RainbowRAKA9DpDmB.onlyOwner.call({from: accounts[0]});

		await expect(RainbowRAKA9DpDmB.updateReward.call(addressjcpB1Oc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKy1x19jH = await RainbowRAK.new({from: accounts[2]});
		const uintSetiFoc = BigInt("611")
		const uint256GpsREb0 = await RainbowRAKy1x19jH.notifyRewardAmount.call(uintSetiFoc, {from: accounts[3]});
		const addressarrayr1nrloF = await RainbowRAKy1x19jH.getCommunity.call({from: accounts[2]});

		await expect(RainbowRAKy1x19jH.notifyRewardAmount.call(uintSetiFoc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKaGSJvJf = await RainbowRAK.new({from: accounts[1]});
		const addressOzXid60 = accounts[0]
		const uint256g9PVgO = await RainbowRAKaGSJvJf.lastTimeRewardApplicable.call({from: accounts[0]});
		await RainbowRAKaGSJvJf.claimRewards.call({from: accounts[5]});
		await RainbowRAKaGSJvJf.onlyOwner.call({from: accounts[5]});
		const uint256PEOkrJ5 = await RainbowRAKaGSJvJf.rewardPerToken.call({from: accounts[3]});
		const uint256p4giBh5 = await RainbowRAKaGSJvJf.earned.call(addressOzXid60, {from: accounts[1]});

		assert.equal(uint256g9PVgO, BigInt("0"))
		await expect(RainbowRAKaGSJvJf.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKIjGwcBp = await RainbowRAK.new({from: accounts[1]});
		await RainbowRAKIjGwcBp.exit.call({from: accounts[4]});
		await RainbowRAKIjGwcBp.exit.call({from: accounts[2]});
		const uint256J2vBtdU = await RainbowRAKIjGwcBp.getCurrentRewardReserve.call({from: accounts[2]});

		await expect(RainbowRAKIjGwcBp.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKJBe1Rt = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJKGsoe = accounts[3]
		const uinthLHDOLW = BigInt("1831")
		const addressbVzjZsE = await RainbowRAKJBe1Rt.updateReward.call(addressJKGsoe, {from: accounts[4]});
		await RainbowRAKJBe1Rt.renounceOwnership.call({from: accounts[2]});
		await RainbowRAKJBe1Rt.renounceOwnership.call({from: accounts[4]});
		const uint256gsADngM = await RainbowRAKJBe1Rt.unstake.call(uinthLHDOLW, {from: accounts[3]});
		await RainbowRAKJBe1Rt.exit.call({from: accounts[2]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOYi0Biw = await RainbowRAK.new({from: accounts[4]});
		const uintomaFcZv = BigInt("261")
		const uintGym2xb = BigInt("270")
		const uint256VWWFV5r = await RainbowRAKOYi0Biw.stake.call(uintomaFcZv, {from: accounts[3]});
		const uint256z1Y05bV = await RainbowRAKOYi0Biw.stake.call(uintGym2xb, {from: accounts[5]});

		await expect(RainbowRAKOYi0Biw.stake.call(uintomaFcZv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKkC92v0 = await RainbowRAK.new({from: accounts[0]});
		const addressi2wkcx7 = await RainbowRAKkC92v0.owner.call({from: accounts[1]});
		const uint256AubPS9h = await RainbowRAKkC92v0.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(addressi2wkcx7, 0xA8355D3061F0473B50889E943B758B7883Aed683)
		assert.equal(uint256AubPS9h, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKY3CRADt = await RainbowRAK.new({from: accounts[0]});
		const uint256FyT1Ffy = await RainbowRAKY3CRADt.getCurrentRewardReserve.call({from: accounts[5]});
		const uint256dyPnzQ = await RainbowRAKY3CRADt.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256FyT1Ffy, BigInt("0"))
		assert.equal(uint256dyPnzQ, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKy1x19jH = await RainbowRAK.new({from: accounts[2]});
		const uint256pT2tH5C = await RainbowRAKy1x19jH.rewardPerToken.call({from: accounts[4]});
		const addressarrayr1nrloF = await RainbowRAKy1x19jH.getCommunity.call({from: accounts[2]});

		assert.equal(addressarrayr1nrloF, )
		assert.equal(uint256pT2tH5C, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKC7auQA9 = await RainbowRAK.new({from: accounts[2]});
		const uintTU9fxLf = BigInt("77")
		const uintSy8WPfi = BigInt("21")
		const uintEamdJGN = BigInt("1818")
		const uintZgho5f2 = BigInt("736")
		const uint256zFyEQht = await RainbowRAKC7auQA9.unstake.call(uintTU9fxLf, {from: accounts[1]});
		const uint256fWxUP6y = await RainbowRAKC7auQA9.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Fm74oGd = await RainbowRAKC7auQA9.stake.call(uintSy8WPfi, {from: accounts[4]});
		const addressarray49SCCx = await RainbowRAKC7auQA9.getCommunity.call({from: accounts[2]});
		const boolRGbZX5m = await RainbowRAKC7auQA9.isOwner.call({from: accounts[3]});
		const uint256JUJWAhq = await RainbowRAKC7auQA9.stake.call(uintEamdJGN, {from: accounts[2]});
		const uint256FruBMIm = await RainbowRAKC7auQA9.notifyRewardAmount.call(uintZgho5f2, {from: accounts[4]});

		await expect(RainbowRAKC7auQA9.unstake.call(uintTU9fxLf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKC7auQA9 = await RainbowRAK.new({from: accounts[2]});
		const uintY4FP6BB = BigInt("1188")
		const uintJhekR0i = BigInt("4")
		const addressa9dFdn6 = "0x0000000000000000000000000000000000000001"
		const uintx6x3hkg = BigInt("1818")
		const uint256aXgmMom = await RainbowRAKC7auQA9.notifyRewardAmount.call(uintY4FP6BB, {from: accounts[2]});
		const uint256Zn9YKB1 = await RainbowRAKC7auQA9.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256Fm74oGd = await RainbowRAKC7auQA9.stake.call(uintJhekR0i, {from: accounts[4]});
		const uint256WnPdwGG = await RainbowRAKC7auQA9.getCurrentRewardReserve.call({from: accounts[0]});
		const addressPofjgMa = await RainbowRAKC7auQA9.transferOwnership.call(addressa9dFdn6, {from: accounts[3]});
		const addressarray49SCCx = await RainbowRAKC7auQA9.getCommunity.call({from: accounts[2]});
		const uint256ygoiNY = await RainbowRAKC7auQA9.rewardPerToken.call({from: accounts[4]});
		const boolRGbZX5m = await RainbowRAKC7auQA9.isOwner.call({from: accounts[3]});
		const addressarraystrghQn = await RainbowRAKC7auQA9.getCommunity.call({from: accounts[4]});
		const uint256JUJWAhq = await RainbowRAKC7auQA9.stake.call(uintx6x3hkg, {from: accounts[2]});

		await expect(RainbowRAKC7auQA9.notifyRewardAmount.call(uintY4FP6BB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKTNSnZmG = await RainbowRAK.new({from: accounts[3]});
		const addressNXulIfy = accounts[1]
		await RainbowRAKTNSnZmG.renounceOwnership.call({from: accounts[3]});
		const addressTTeeaqp = await RainbowRAKTNSnZmG.updateReward.call(addressNXulIfy, {from: accounts[1]});
		await RainbowRAKTNSnZmG.claimRewards.call({from: accounts[4]});

		await expect(RainbowRAKTNSnZmG.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKdCxfzGB = await RainbowRAK.new({from: accounts[0]});
		const addressvdXy8pE = accounts[0]
		const uintg34Ed6a = BigInt("1463")
		const addressTPAUl6Z = await RainbowRAKdCxfzGB.transferOwnership.call(addressvdXy8pE, {from: accounts[0]});
		const uint256ZbLysxg = await RainbowRAKdCxfzGB.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256MosRqRP = await RainbowRAKdCxfzGB.notifyRewardAmount.call(uintg34Ed6a, {from: accounts[0]});

		assert.equal(uint256ZbLysxg, BigInt("0"))
		await expect(RainbowRAKdCxfzGB.notifyRewardAmount.call(uintg34Ed6a, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})