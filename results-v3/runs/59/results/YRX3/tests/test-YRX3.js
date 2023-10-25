const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3lZNrbr2 = await YRX3.new({from: accounts[2]});
		const addresssF0PlrY = accounts[4]
		const addressxWWexfd = await YRX3lZNrbr2.setRewardDistribution.call(addresssF0PlrY, {from: accounts[1]});
		await YRX3lZNrbr2.checkNextEpoch.call({from: accounts[2]});
		await YRX3lZNrbr2.notifyRewardAmount.call({from: accounts[0]});

		await expect(YRX3lZNrbr2.setRewardDistribution.call(addresssF0PlrY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Ow21PXl = await YRX3.new({from: accounts[3]});
		const uintwiFkQxP = BigInt("161")
		const addressC8UoV1g = accounts[3]
		const uint256BgAXEta = await YRX3Ow21PXl.withdraw.call(uintwiFkQxP, {from: accounts[0]});
		await YRX3Ow21PXl.checkStart.call({from: accounts[4]});
		const addressAh0rO6H = await YRX3Ow21PXl.owner.call({from: accounts[1]});
		const addressUXXmhRe = await YRX3Ow21PXl.transferOwnership.call(addressC8UoV1g, {from: accounts[3]});

		await expect(YRX3Ow21PXl.withdraw.call(uintwiFkQxP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3X9qQaTQ = await YRX3.new({from: accounts[3]});
		const uintB0mlO6U = BigInt("1691")
		await YRX3X9qQaTQ.onlyRewardDistribution.call({from: accounts[0]});
		await YRX3X9qQaTQ.getReward.call({from: accounts[3]});
		const uint256fRsK8KL = await YRX3X9qQaTQ.withdraw.call(uintB0mlO6U, {from: accounts[0]});
		await YRX3X9qQaTQ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3X9qQaTQ.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3yLZdZXU = await YRX3.new({from: accounts[2]});
		const addressL4IGSQg = accounts[2]
		const uint256dKqX2Ba = await YRX3yLZdZXU.earned.call(addressL4IGSQg, {from: accounts[2]});
		await YRX3yLZdZXU.exit.call({from: accounts[2]});

		assert.equal(uint256dKqX2Ba, BigInt("0"))
		await expect(YRX3yLZdZXU.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vU0YsV = await YRX3.new({from: accounts[5]});
		const addressFafVdfJ = accounts[4]
		const addressoVLogLq = accounts[3]
		const addressAOlRErt = await YRX3vU0YsV.emergencyDrain.call(addressFafVdfJ, {from: accounts[4]});
		const uint256wp8ems6 = await YRX3vU0YsV.rewardPerToken.call({from: accounts[2]});
		await YRX3vU0YsV.onlyRewardDistribution.call({from: accounts[4]});
		const addressaD5V0oX = await YRX3vU0YsV.setRewardDistribution.call(addressoVLogLq, {from: accounts[4]});
		const uint256ccGavl8 = await YRX3vU0YsV.totalSupply.call({from: accounts[2]});
		await YRX3vU0YsV.exit.call({from: accounts[2]});

		await expect(YRX3vU0YsV.emergencyDrain.call(addressFafVdfJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3yLZdZXU = await YRX3.new({from: accounts[2]});
		const addressWIv9gaq = accounts[3]
		const uint256dKqX2Ba = await YRX3yLZdZXU.earned.call(addressWIv9gaq, {from: accounts[2]});
		await YRX3yLZdZXU.getReward.call({from: accounts[0]});

		assert.equal(uint256dKqX2Ba, BigInt("0"))
		await expect(YRX3yLZdZXU.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3yLZdZXU = await YRX3.new({from: accounts[2]});
		const addresskrCLV01 = accounts[4]
		const uintWSdT1Zm = BigInt("1170")
		await YRX3yLZdZXU.getReward.call({from: accounts[2]});
		const uint256dKqX2Ba = await YRX3yLZdZXU.earned.call(addresskrCLV01, {from: accounts[2]});
		const uint256GnzebUj = await YRX3yLZdZXU.stake.call(uintWSdT1Zm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PWiUwtA = await YRX3yLZdZXU.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3yLZdZXU.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3dtjfoVd = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJ8NkKG5 = accounts[4]
		await YRX3dtjfoVd.onlyOwner.call({from: accounts[3]});
		const addressdKF7Qu = await YRX3dtjfoVd.transferOwnership.call(addressJ8NkKG5, {from: accounts[3]});
	});

	it('test for YRX3', async () => {
		const YRX3yLZdZXU = await YRX3.new({from: accounts[2]});
		const addressTwSVetS = accounts[4]
		const addressdPRpP5J = accounts[4]
		const uint256dKqX2Ba = await YRX3yLZdZXU.earned.call(addressTwSVetS, {from: accounts[2]});
		await YRX3yLZdZXU.renounceOwnership.call({from: accounts[2]});
		const addressvEjYHjh = await YRX3yLZdZXU.toPayable.call(addressdPRpP5J, {from: accounts[3]});
		await YRX3yLZdZXU.getReward.call({from: accounts[0]});

		assert.equal(uint256dKqX2Ba, BigInt("0"))
		await expect(YRX3yLZdZXU.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3yLZdZXU = await YRX3.new({from: accounts[2]});
		const addressficYWzS = accounts[5]
		const uintH3GwGPU = BigInt("1170")
		const uint256dKqX2Ba = await YRX3yLZdZXU.earned.call(addressficYWzS, {from: accounts[2]});
		const addressyKmRrP7 = await YRX3yLZdZXU.owner.call({from: accounts[1]});
		const uint256GnzebUj = await YRX3yLZdZXU.stake.call(uintH3GwGPU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PWiUwtA = await YRX3yLZdZXU.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressyKmRrP7, 0x56a01A07B85B6bE559F9F201f7f3f7B0C1EC12c2)
		assert.equal(uint256dKqX2Ba, BigInt("0"))
		await expect(YRX3yLZdZXU.stake.call(uintH3GwGPU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3yLZdZXU = await YRX3.new({from: accounts[2]});
		const address99PtDd = accounts[5]
		const addressu42mry4 = accounts[0]
		const uintfVMjx3F = BigInt("1192")
		await YRX3yLZdZXU.getReward.call({from: accounts[2]});
		const uint256dKqX2Ba = await YRX3yLZdZXU.earned.call(address99PtDd, {from: accounts[2]});
		const uint256qnj4Gdo = await YRX3yLZdZXU.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressKezBdRd = await YRX3yLZdZXU.transferOwnership.call(addressu42mry4, {from: accounts[2]});
		const uint256Q7Ru35N = await YRX3yLZdZXU.rewardPerToken.call({from: accounts[3]});
		const uint256GnzebUj = await YRX3yLZdZXU.stake.call(uintfVMjx3F, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3yLZdZXU.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3yLZdZXU = await YRX3.new({from: accounts[2]});
		const addressGbD2f6f = accounts[4]
		const uintw9JCBQR = BigInt("1170")
		const addressq6TtTxX = await YRX3yLZdZXU.setRewardDistribution.call(addressGbD2f6f, {from: accounts[2]});
		await YRX3yLZdZXU.getReward.call({from: accounts[2]});
		const uint256GnzebUj = await YRX3yLZdZXU.stake.call(uintw9JCBQR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3yLZdZXU.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})