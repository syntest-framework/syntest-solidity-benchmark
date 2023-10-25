const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX38Mxd8z = await YRX3.new({from: accounts[1]});
		const addressrH1IfIO = "0x0000000000000000000000000000000000000001"
		const uintQsZjsW4 = BigInt("208")
//		const addressYyVcE8F = await YRX38Mxd8z.emergencyDrain.call(addressrH1IfIO, {from: accounts[5]});
//		await YRX38Mxd8z.onlyOwner.call({from: accounts[0]});
//		const uint256zWZNQto = await YRX38Mxd8z.rewardPerToken.call({from: accounts[1]});
//		await YRX38Mxd8z.checkStart.call({from: accounts[2]});
//		await YRX38Mxd8z.exit.call({from: accounts[4]});
//		const uint256U5fs0nL = await YRX38Mxd8z.withdraw.call(uintQsZjsW4, {from: accounts[0]});

		await expect(YRX38Mxd8z.emergencyDrain.call(addressrH1IfIO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Bd3jqt9 = await YRX3.new({from: accounts[0]});
		const uintiDP9rc0 = BigInt("1477")
//		await YRX3Bd3jqt9.exit.call({from: accounts[3]});
//		const uint256RvpZWQj = await YRX3Bd3jqt9.stake.call(uintiDP9rc0, {from: accounts[0]});
//		await YRX3Bd3jqt9.checkNextEpoch.call({from: accounts[2]});

		await expect(YRX3Bd3jqt9.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3PLYDnGD = await YRX3.new({from: accounts[5]});
		const addresskdWyscO = accounts[1]
		const addressqflI129 = accounts[2]
		const addressbXllSj6 = accounts[0]
//		const address0CjaVa = await YRX3PLYDnGD.updateReward.call(addresskdWyscO, {from: accounts[1]});
//		const addresscsIZrRD = await YRX3PLYDnGD.toPayable.call(addressqflI129, {from: accounts[3]});
//		await YRX3PLYDnGD.exit.call({from: accounts[3]});
//		const addressMrxsRBb = await YRX3PLYDnGD.setRewardDistribution.call(addressbXllSj6, {from: accounts[1]});

		await expect(YRX3PLYDnGD.updateReward.call(addresskdWyscO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3SqZgqY = await YRX3.new({from: accounts[0]});
		const uintczZ6Ity = BigInt("617")
		const uintFQSo6T6 = BigInt("1728")
//		const uint256emIUT0n = await YRX3SqZgqY.stake.call(uintczZ6Ity, {from: accounts[2]});
//		const uint256DglLHBk = await YRX3SqZgqY.stake.call(uintFQSo6T6, {from: accounts[4]});
//		await YRX3SqZgqY.checkStart.call({from: accounts[3]});

		await expect(YRX3SqZgqY.stake.call(uintczZ6Ity, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3hoEDn85 = await YRX3.new({from: accounts[1]});
		const uintUf05DEO = BigInt("757")
		const addressLrO8VAw = accounts[3]
		const uintUIaq7T5 = BigInt("630")
		const addressUfdwC4P = accounts[3]
//		const uint256yhnwB4E = await YRX3hoEDn85.withdraw.call(uintUf05DEO, {from: accounts[5]});
//		const address7k38hO = await YRX3hoEDn85.toPayable.call(addressLrO8VAw, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3hoEDn85.renounceOwnership.call({from: accounts[2]});
//		const uint256Ml7D6yP = await YRX3hoEDn85.stake.call(uintUIaq7T5, {from: accounts[4]});
//		const addresst7AI63G = await YRX3hoEDn85.updateReward.call(addressUfdwC4P, {from: accounts[0]});

		await expect(YRX3hoEDn85.withdraw.call(uintUf05DEO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3gNi7Th1 = await YRX3.new({from: accounts[0]});
		const uintW748Gj = BigInt("605")
//		await YRX3gNi7Th1.renounceOwnership.call({from: accounts[3]});
//		const uint256TlAh4I3 = await YRX3gNi7Th1.stake.call(uintW748Gj, {from: accounts[3]});
//		const uint256oLTfBU1 = await YRX3gNi7Th1.rewardPerToken.call({from: accounts[4]});

		await expect(YRX3gNi7Th1.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3WvSOMk = await YRX3.new({from: accounts[5]});
		const uint256Wkey5Ku = await YRX3WvSOMk.lastTimeRewardApplicable.call({from: accounts[0]});
//		await YRX3WvSOMk.getReward.call({from: accounts[3]});

		assert.equal(uint256Wkey5Ku, BigInt("0"))
		await expect(YRX3WvSOMk.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3fe3YfmH = await YRX3.new({from: accounts[0]});
//		await YRX3fe3YfmH.renounceOwnership.call({from: accounts[0]});
//		const uint256Anj9QTG = await YRX3fe3YfmH.lastTimeRewardApplicable.call({from: accounts[4]});
//		await YRX3fe3YfmH.exit.call({from: accounts[2]});

		await expect(YRX3fe3YfmH.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3SqZgqY = await YRX3.new({from: accounts[0]});
		const addressCFkz6yY = accounts[4]
		const uintb6JQOet = BigInt("374")
		const addressDghpSSd = await YRX3SqZgqY.setRewardDistribution.call(addressCFkz6yY, {from: accounts[0]});
//		await YRX3SqZgqY.onlyRewardDistribution.call({from: accounts[4]});
//		const uint256emIUT0n = await YRX3SqZgqY.stake.call(uintb6JQOet, {from: accounts[2]});

		await expect(YRX3SqZgqY.onlyRewardDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3mRyzr75 = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfpXSLG = BigInt("578")
		const uint256kj9DEXN = await YRX3mRyzr75.withdraw.call(uintfpXSLG, {from: accounts[5]});
		const boolbo0mssN = await YRX3mRyzr75.isOwner.call({from: accounts[5]});
		await YRX3mRyzr75.checkNextEpoch.call({from: accounts[0]});
		const uint256QVSS7wX = await YRX3mRyzr75.totalSupply.call({from: accounts[3]});
	});

	it('test for YRX3', async () => {
		const YRX3SqZgqY = await YRX3.new({from: accounts[0]});
		const uintD0Q1EbY = BigInt("1728")
		const addressYER8sWu = await YRX3SqZgqY.owner.call({from: accounts[1]});
//		const uint256DglLHBk = await YRX3SqZgqY.stake.call(uintD0Q1EbY, {from: accounts[4]});

		assert.equal(addressYER8sWu, 0x790C58e0f00ca1f43b77ED6EC480AD7a3df78A8B)
		await expect(YRX3SqZgqY.stake.call(uintD0Q1EbY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3SqZgqY = await YRX3.new({from: accounts[0]});
		const addressopeGBE = accounts[0]
		const uintNMu6gj8 = BigInt("347")
		const addressBL0SRrh = await YRX3SqZgqY.transferOwnership.call(addressopeGBE, {from: accounts[0]});
//		const uint256emIUT0n = await YRX3SqZgqY.stake.call(uintNMu6gj8, {from: accounts[2]});

		await expect(YRX3SqZgqY.stake.call(uintNMu6gj8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})