const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKiqkTCx7 = await RainbowRAK.new({from: accounts[3]});
		const addresswr1K9Tj = accounts[5]
		const addresswseGi7u = accounts[4]
		const uint256b7ejEPM = await RainbowRAKiqkTCx7.getCurrentRewardReserve.call({from: accounts[2]});
		const addressT7H3hUx = await RainbowRAKiqkTCx7.owner.call({from: accounts[3]});
		const addressarrayfUvkvIi = await RainbowRAKiqkTCx7.getCommunity.call({from: accounts[2]});
		const uint256ZWxVnjG = await RainbowRAKiqkTCx7.earned.call(addresswr1K9Tj, {from: accounts[4]});
		const addressarrayBaGajU = await RainbowRAKiqkTCx7.getCommunity.call({from: accounts[1]});
//		const addressFuprPn = await RainbowRAKiqkTCx7.updateReward.call(addresswseGi7u, {from: accounts[0]});

		assert.equal(addressT7H3hUx, 0xD4E5dEd796C405CF306C9Dcf5C69FB97277f3bDC)
		assert.equal(addressarrayBaGajU, )
		assert.equal(addressarrayfUvkvIi, )
		assert.equal(uint256ZWxVnjG, BigInt("0"))
		assert.equal(uint256b7ejEPM, BigInt("0"))
		await expect(RainbowRAKiqkTCx7.updateReward.call(addresswseGi7u, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKUK6H3Rr = await RainbowRAK.new({from: accounts[1]});
		const uintpNHoJR5 = BigInt("1440")
		const addressDTaQfLe = accounts[5]
//		const uint256UJk5xM3 = await RainbowRAKUK6H3Rr.unstake.call(uintpNHoJR5, {from: "0x0000000000000000000000000000000000000001"});
//		const addressqYhtGub = await RainbowRAKUK6H3Rr.updateReward.call(addressDTaQfLe, {from: accounts[4]});

		await expect(RainbowRAKUK6H3Rr.unstake.call(uintpNHoJR5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKSpJqV6j = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256nAKUlM8 = await RainbowRAKSpJqV6j.getCurrentRewardReserve.call({from: accounts[5]});
		const boolLBhwtQ = await RainbowRAKSpJqV6j.isOwner.call({from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKNdkbHpQ = await RainbowRAK.new({from: accounts[4]});
		const addressarrayGFZVjTR = await RainbowRAKNdkbHpQ.getCommunity.call({from: accounts[1]});
		const boolKRBMv84 = await RainbowRAKNdkbHpQ.isOwner.call({from: accounts[5]});
//		await RainbowRAKNdkbHpQ.onlyOwner.call({from: accounts[2]});
//		await RainbowRAKNdkbHpQ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayGFZVjTR, )
		assert.equal(boolKRBMv84, false)
		await expect(RainbowRAKNdkbHpQ.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKd5OGgNe = await RainbowRAK.new({from: accounts[5]});
//		await RainbowRAKd5OGgNe.claimRewards.call({from: accounts[0]});
//		const uint256uKpxpuk = await RainbowRAKd5OGgNe.rewardPerToken.call({from: accounts[3]});
//		await RainbowRAKd5OGgNe.renounceOwnership.call({from: accounts[2]});

		await expect(RainbowRAKd5OGgNe.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKUerv13g = await RainbowRAK.new({from: accounts[1]});
		const addressiYFJmqU = accounts[1]
		const uintQp937NY = BigInt("1047")
		const uintU9KY3jN = BigInt("53")
		const addressHqeWle = accounts[0]
//		const address2GHk5q = await RainbowRAKUerv13g.transferOwnership.call(addressiYFJmqU, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZjDNODX = await RainbowRAKUerv13g.owner.call({from: accounts[5]});
//		const uint256XrIkK8J = await RainbowRAKUerv13g.stake.call(uintQp937NY, {from: accounts[4]});
//		const uint256zLx44NH = await RainbowRAKUerv13g.stake.call(uintU9KY3jN, {from: accounts[1]});
//		const addressOMjaRRI = await RainbowRAKUerv13g.updateReward.call(addressHqeWle, {from: accounts[1]});
//		const addressMPtY6aU = await RainbowRAKUerv13g.owner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKUerv13g.transferOwnership.call(addressiYFJmqU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKUK6H3Rr = await RainbowRAK.new({from: accounts[1]});
		const uintMM3xM4F = BigInt("1191")
		const uintGDAWtRJ = BigInt("1428")
//		const uint256EVaxLTX = await RainbowRAKUK6H3Rr.stake.call(uintMM3xM4F, {from: accounts[5]});
//		await RainbowRAKUK6H3Rr.renounceOwnership.call({from: accounts[1]});
//		const uint256UJk5xM3 = await RainbowRAKUK6H3Rr.unstake.call(uintGDAWtRJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKUK6H3Rr.stake.call(uintMM3xM4F, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKUK6H3Rr = await RainbowRAK.new({from: accounts[1]});
		const uintuuUrPSe = BigInt("1404")
//		await RainbowRAKUK6H3Rr.exit.call({from: accounts[1]});
//		const uint256UJk5xM3 = await RainbowRAKUK6H3Rr.unstake.call(uintuuUrPSe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKUK6H3Rr.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKUK6H3Rr = await RainbowRAK.new({from: accounts[1]});
		const uintbQsZaH = BigInt("1401")
		const addressbG5Zncn = accounts[2]
//		await RainbowRAKUK6H3Rr.renounceOwnership.call({from: accounts[1]});
//		const uint256UJk5xM3 = await RainbowRAKUK6H3Rr.unstake.call(uintbQsZaH, {from: "0x0000000000000000000000000000000000000001"});
//		const addressk4D6TJ = await RainbowRAKUK6H3Rr.updateReward.call(addressbG5Zncn, {from: accounts[2]});

		await expect(RainbowRAKUK6H3Rr.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKUK6H3Rr = await RainbowRAK.new({from: accounts[1]});
		const uintSNHOPDD = BigInt("1187")
		const uintSeJFAFd = BigInt("1430")
//		const uint256PB5x29V = await RainbowRAKUK6H3Rr.notifyRewardAmount.call(uintSNHOPDD, {from: accounts[1]});
//		const uint256UJk5xM3 = await RainbowRAKUK6H3Rr.unstake.call(uintSeJFAFd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKUK6H3Rr.notifyRewardAmount.call(uintSNHOPDD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKUK6H3Rr = await RainbowRAK.new({from: accounts[1]});
		const addressRmPk8XD = accounts[1]
		const uintGxbBV0W = BigInt("1435")
		const addressbPproOT = await RainbowRAKUK6H3Rr.transferOwnership.call(addressRmPk8XD, {from: accounts[1]});
//		const uint256UJk5xM3 = await RainbowRAKUK6H3Rr.unstake.call(uintGxbBV0W, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKUK6H3Rr.unstake.call(uintGxbBV0W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})