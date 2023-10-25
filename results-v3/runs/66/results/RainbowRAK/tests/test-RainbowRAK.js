const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKDPTZc5V = await RainbowRAK.new({from: accounts[2]});
		await RainbowRAKDPTZc5V.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKDPTZc5V.exit.call({from: accounts[3]});
		const uint256OU1gQUv = await RainbowRAKDPTZc5V.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256Ub3mQoq = await RainbowRAKDPTZc5V.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(RainbowRAKDPTZc5V.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKf5g5hum = await RainbowRAK.new({from: accounts[0]});
		const uintaVYg6Hm = BigInt("1955")
		await RainbowRAKf5g5hum.onlyOwner.call({from: accounts[3]});
		await RainbowRAKf5g5hum.claimRewards.call({from: accounts[5]});
		const uint256RNbQc7O = await RainbowRAKf5g5hum.lastTimeRewardApplicable.call({from: accounts[3]});
		await RainbowRAKf5g5hum.claimRewards.call({from: accounts[4]});
		const uint256ebq3s2K = await RainbowRAKf5g5hum.stake.call(uintaVYg6Hm, {from: accounts[5]});

		await expect(RainbowRAKf5g5hum.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKTCO4Vbo = await RainbowRAK.new({from: accounts[5]});
		const uintUEWhaf6 = BigInt("1685")
		const uint256xP16Kj0 = await RainbowRAKTCO4Vbo.rewardPerToken.call({from: accounts[2]});
		const uint256en8KxNh = await RainbowRAKTCO4Vbo.lastTimeRewardApplicable.call({from: accounts[4]});
		await RainbowRAKTCO4Vbo.claimRewards.call({from: accounts[0]});
		const uint256E6NBjtY = await RainbowRAKTCO4Vbo.stake.call(uintUEWhaf6, {from: accounts[0]});
		await RainbowRAKTCO4Vbo.claimRewards.call({from: accounts[4]});

		assert.equal(uint256en8KxNh, BigInt("0"))
		assert.equal(uint256xP16Kj0, BigInt("0"))
		await expect(RainbowRAKTCO4Vbo.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKYKhBNI4 = await RainbowRAK.new({from: accounts[4]});
		const uintlZ9jXIU = BigInt("1641")
		await RainbowRAKYKhBNI4.exit.call({from: accounts[3]});
		const uint256bkteH8O = await RainbowRAKYKhBNI4.stake.call(uintlZ9jXIU, {from: accounts[3]});
		const uint256hMoeGc0 = await RainbowRAKYKhBNI4.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressarrayKqa1sH3 = await RainbowRAKYKhBNI4.getCommunity.call({from: accounts[5]});

		await expect(RainbowRAKYKhBNI4.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKRDbbwXk = await RainbowRAK.new({from: accounts[1]});
		const uintJD1v4s8 = BigInt("82")
		const uint256KLS7fFT = await RainbowRAKRDbbwXk.unstake.call(uintJD1v4s8, {from: accounts[4]});
		const boolMJ1E30K = await RainbowRAKRDbbwXk.isOwner.call({from: accounts[4]});
		await RainbowRAKRDbbwXk.onlyOwner.call({from: accounts[3]});
		await RainbowRAKRDbbwXk.onlyOwner.call({from: accounts[4]});
		const uint256Flcq4dY = await RainbowRAKRDbbwXk.getCurrentRewardReserve.call({from: accounts[3]});

		await expect(RainbowRAKRDbbwXk.unstake.call(uintJD1v4s8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK2hb6gP = await RainbowRAK.new({from: accounts[4]});
		const uintCyeF3tP = BigInt("352")
		const uint256cmFFYU = await RainbowRAK2hb6gP.getCurrentRewardReserve.call({from: accounts[3]});
		const uint256SOisK3y = await RainbowRAK2hb6gP.stake.call(uintCyeF3tP, {from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAK2hb6gP.exit.call({from: accounts[1]});
		const boolIDnV6ZE = await RainbowRAK2hb6gP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256cmFFYU, BigInt("0"))
		await expect(RainbowRAK2hb6gP.stake.call(uintCyeF3tP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKIUKmSJj = await RainbowRAK.new({from: accounts[2]});
		const uint256Ko8Xvhp = await RainbowRAKIUKmSJj.getCurrentRewardReserve.call({from: accounts[2]});
		await RainbowRAKIUKmSJj.renounceOwnership.call({from: accounts[2]});
		const uint256qHP3Crv = await RainbowRAKIUKmSJj.rewardPerToken.call({from: accounts[5]});
		const uint256LOXfuRE = await RainbowRAKIUKmSJj.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256Ko8Xvhp, BigInt("0"))
		await expect(RainbowRAKIUKmSJj.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK2hb6gP = await RainbowRAK.new({from: accounts[4]});
		const uinthsFWnG = BigInt("878")
		const addressh3zhn5n = await RainbowRAK2hb6gP.owner.call({from: accounts[0]});
		await RainbowRAK2hb6gP.claimRewards.call({from: accounts[4]});
		const uint256PMIQRm = await RainbowRAK2hb6gP.unstake.call(uinthsFWnG, {from: accounts[1]});
		const boolIDnV6ZE = await RainbowRAK2hb6gP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressh3zhn5n, 0x1dA7Cd1742BbB7Dc4f39daA861e6CffDD0c19b53)
		await expect(RainbowRAK2hb6gP.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK2hb6gP = await RainbowRAK.new({from: accounts[4]});
		const uintQPOyQol = BigInt("383")
		const uintTwAdTO = BigInt("878")
		const uint256Mao5tWA = await RainbowRAK2hb6gP.notifyRewardAmount.call(uintQPOyQol, {from: accounts[4]});
		const uint256PMIQRm = await RainbowRAK2hb6gP.unstake.call(uintTwAdTO, {from: accounts[1]});
		const addressvwiPFoe = await RainbowRAK2hb6gP.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolIDnV6ZE = await RainbowRAK2hb6gP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAK2hb6gP.notifyRewardAmount.call(uintQPOyQol, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKJ4oFCe = await RainbowRAK.new({from: accounts[3]});
		const addressQG8maUx = accounts[5]
		const addressOSDq98 = accounts[3]
		const address5YzSpA = await RainbowRAKJ4oFCe.transferOwnership.call(addressQG8maUx, {from: accounts[3]});
		const boolc3r6RFG = await RainbowRAKJ4oFCe.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressocdlBpb = await RainbowRAKJ4oFCe.updateReward.call(addressOSDq98, {from: accounts[2]});

		assert.equal(boolc3r6RFG, false)
		await expect(RainbowRAKJ4oFCe.updateReward.call(addressOSDq98, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK2hb6gP = await RainbowRAK.new({from: accounts[4]});
		const boolIDnV6ZE = await RainbowRAK2hb6gP.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayL6UGPOh = await RainbowRAK2hb6gP.getCommunity.call({from: accounts[1]});

		assert.equal(addressarrayL6UGPOh, )
		assert.equal(boolIDnV6ZE, false)
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKF6av2QN = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const boolwgXFqHE = await RainbowRAKF6av2QN.isOwner.call({from: accounts[4]});
		const boolwmn06hi = await RainbowRAKF6av2QN.isOwner.call({from: accounts[3]});
		const boolz27aIKf = await RainbowRAKF6av2QN.isOwner.call({from: accounts[4]});
		await RainbowRAKF6av2QN.exit.call({from: accounts[5]});
	});
})