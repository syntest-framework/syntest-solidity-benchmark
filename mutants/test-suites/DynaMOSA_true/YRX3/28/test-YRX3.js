const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3UHld6Z6 = await YRX3.new({from: accounts[4]});
		const addressQu9Uww = accounts[4]
		const addressYU5GdLE = accounts[1]
//		const addressjvzQGVP = await YRX3UHld6Z6.updateReward.call(addressQu9Uww, {from: accounts[0]});
//		await YRX3UHld6Z6.onlyRewardDistribution.call({from: accounts[4]});
//		const addressXcMVDLd = await YRX3UHld6Z6.transferOwnership.call(addressYU5GdLE, {from: accounts[2]});

		await expect(YRX3UHld6Z6.updateReward.call(addressQu9Uww, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vwAHIL8 = await YRX3.new({from: accounts[5]});
		const addressxXp45fP = accounts[4]
		const addressUSoBziv = accounts[4]
		const addresskcxV3G5 = "0x0000000000000000000000000000000000000001"
//		await YRX3vwAHIL8.renounceOwnership.call({from: accounts[1]});
//		await YRX3vwAHIL8.checkStart.call({from: accounts[1]});
//		const uint256gDyn6Ry = await YRX3vwAHIL8.balanceOf.call(addressxXp45fP, {from: accounts[3]});
//		const addressGYYp6Y = await YRX3vwAHIL8.setRewardDistribution.call(addressUSoBziv, {from: accounts[4]});
//		const addresskjTS6xf = await YRX3vwAHIL8.setRewardDistribution.call(addresskcxV3G5, {from: accounts[2]});

		await expect(YRX3vwAHIL8.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rHCKXsm = await YRX3.new({from: accounts[0]});
		const addressN7jBxdV = accounts[1]
		const addressbYOSE5Y = accounts[0]
		const uint256mHIrQJ = await YRX3rHCKXsm.earned.call(addressN7jBxdV, {from: accounts[0]});
//		await YRX3rHCKXsm.onlyRewardDistribution.call({from: accounts[3]});
//		await YRX3rHCKXsm.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresspIOcw9 = await YRX3rHCKXsm.emergencyDrain.call(addressbYOSE5Y, {from: accounts[0]});

		assert.equal(uint256mHIrQJ, BigInt("0"))
		await expect(YRX3rHCKXsm.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3MdD7iAS = await YRX3.new({from: accounts[4]});
		const addressCneXrhT = accounts[1]
		const addresspAxL7S = accounts[0]
		const addressJAeRwT = await YRX3MdD7iAS.owner.call({from: accounts[1]});
//		await YRX3MdD7iAS.notifyRewardAmount.call({from: accounts[4]});
//		const addressdGotEra = await YRX3MdD7iAS.setRewardDistribution.call(addressCneXrhT, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3MdD7iAS.onlyRewardDistribution.call({from: accounts[0]});
//		const addresseDPV9X0 = await YRX3MdD7iAS.setRewardDistribution.call(addresspAxL7S, {from: accounts[3]});

		assert.equal(addressJAeRwT, 0x6503f49B84204e972C60a62EEF083a44b6B46450)
		await expect(YRX3MdD7iAS.notifyRewardAmount.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tdObNM = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addresst6GArqW = accounts[1]
		const addressGLY2sXN = accounts[3]
		const uintz3G4pMZ = BigInt("1102")
		const uintXT8fXDl = BigInt("587")
		const addressjXm1P4b = await YRX3tdObNM.updateReward.call(addresst6GArqW, {from: accounts[4]});
		const addressXFTCtZt = await YRX3tdObNM.updateReward.call(addressGLY2sXN, {from: accounts[4]});
		const uint256hK2UVvO = await YRX3tdObNM.withdraw.call(uintz3G4pMZ, {from: accounts[3]});
		const uint256nvgQTVg = await YRX3tdObNM.withdraw.call(uintXT8fXDl, {from: accounts[2]});
		await YRX3tdObNM.checkStart.call({from: accounts[2]});
	});

	it('test for YRX3', async () => {
		const YRX3AefgkLB = await YRX3.new({from: accounts[3]});
		const uintQWXvmLO = BigInt("1758")
		const uint256Tex8E5Y = await YRX3AefgkLB.rewardPerToken.call({from: accounts[0]});
		const uint256LIDFoQE = await YRX3AefgkLB.lastTimeRewardApplicable.call({from: accounts[4]});
//		await YRX3AefgkLB.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await YRX3AefgkLB.checkStart.call({from: accounts[2]});
//		const uint256jmf9sm4 = await YRX3AefgkLB.stake.call(uintQWXvmLO, {from: accounts[4]});

		assert.equal(uint256LIDFoQE, BigInt("0"))
		assert.equal(uint256Tex8E5Y, BigInt("0"))
		await expect(YRX3AefgkLB.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3twwYjFu = await YRX3.new({from: accounts[2]});
		const addressKFCFeef = accounts[3]
		const uintuu1BiXf = BigInt("52")
		const uintiCBoQxv = BigInt("773")
		const uint256ifBZDCz = await YRX3twwYjFu.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressPZvzdF0 = await YRX3twwYjFu.owner.call({from: accounts[1]});
		const uint256pYn72W8 = await YRX3twwYjFu.earned.call(addressKFCFeef, {from: accounts[3]});
//		const uint256JLH3yJC = await YRX3twwYjFu.withdraw.call(uintuu1BiXf, {from: accounts[5]});
//		const addresstx7hyDU = await YRX3twwYjFu.owner.call({from: accounts[1]});
//		await YRX3twwYjFu.checkStart.call({from: accounts[3]});
//		const uint256T8wvoEo = await YRX3twwYjFu.stake.call(uintiCBoQxv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressPZvzdF0, 0x02C2322c3450Df5410730a43A4ACEfb79587027B)
		assert.equal(uint256ifBZDCz, BigInt("0"))
		assert.equal(uint256pYn72W8, BigInt("0"))
		await expect(YRX3twwYjFu.withdraw.call(uintuu1BiXf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3AefgkLB = await YRX3.new({from: accounts[3]});
		const addresshMnMSSf = accounts[5]
		const uintgQ5hG6v = BigInt("1772")
		const uint256Tex8E5Y = await YRX3AefgkLB.rewardPerToken.call({from: accounts[0]});
		const uint256LIDFoQE = await YRX3AefgkLB.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256f9uJUtp = await YRX3AefgkLB.earned.call(addresshMnMSSf, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3AefgkLB.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256jmf9sm4 = await YRX3AefgkLB.stake.call(uintgQ5hG6v, {from: accounts[4]});

		assert.equal(uint256LIDFoQE, BigInt("0"))
		assert.equal(uint256Tex8E5Y, BigInt("0"))
		assert.equal(uint256f9uJUtp, BigInt("0"))
		await expect(YRX3AefgkLB.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rHCKXsm = await YRX3.new({from: accounts[0]});
		const addressmx1IT8 = accounts[1]
		const addresswdHxA4n = accounts[0]
		const uint256mHIrQJ = await YRX3rHCKXsm.earned.call(addressmx1IT8, {from: accounts[0]});
//		await YRX3rHCKXsm.exit.call({from: accounts[1]});
//		await YRX3rHCKXsm.onlyRewardDistribution.call({from: accounts[3]});
//		const boolSsRHGp = await YRX3rHCKXsm.isOwner.call({from: accounts[2]});
//		const addresspIOcw9 = await YRX3rHCKXsm.emergencyDrain.call(addresswdHxA4n, {from: accounts[0]});

		assert.equal(uint256mHIrQJ, BigInt("0"))
		await expect(YRX3rHCKXsm.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3UHld6Z6 = await YRX3.new({from: accounts[4]});
		const addressfnsNSfR = accounts[0]
		const addressJL0nYT = accounts[6]
//		await YRX3UHld6Z6.getReward.call({from: accounts[1]});
//		await YRX3UHld6Z6.renounceOwnership.call({from: accounts[4]});
//		const addressH97EteZ = await YRX3UHld6Z6.emergencyDrain.call(addressfnsNSfR, {from: accounts[1]});
//		const addressjvzQGVP = await YRX3UHld6Z6.updateReward.call(addressJL0nYT, {from: accounts[0]});

		await expect(YRX3UHld6Z6.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3UHld6Z6 = await YRX3.new({from: accounts[4]});
		const addressa1AQIra = "0x0000000000000000000000000000000000000001"
		const addressYeV4yV7 = accounts[6]
//		await YRX3UHld6Z6.getReward.call({from: accounts[4]});
//		const addressQHIw9QA = await YRX3UHld6Z6.setRewardDistribution.call(addressa1AQIra, {from: accounts[4]});
//		const addressjvzQGVP = await YRX3UHld6Z6.updateReward.call(addressYeV4yV7, {from: accounts[0]});

		await expect(YRX3UHld6Z6.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3AefgkLB = await YRX3.new({from: accounts[3]});
		const addressdN8qPxK = accounts[6]
		const addressDsSlW6L = accounts[3]
		const addressHS9vT8c = accounts[1]
		const addressHlh50aB = "0x0000000000000000000000000000000000000001"
		const uintA93I07c = BigInt("1325")
		const uint256Tex8E5Y = await YRX3AefgkLB.rewardPerToken.call({from: accounts[0]});
		const uint256LIDFoQE = await YRX3AefgkLB.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256f9uJUtp = await YRX3AefgkLB.earned.call(addressdN8qPxK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y7m1QSx = await YRX3AefgkLB.balanceOf.call(addressDsSlW6L, {from: accounts[0]});
		const addresssMmpKC = await YRX3AefgkLB.transferOwnership.call(addressHS9vT8c, {from: accounts[3]});
//		await YRX3AefgkLB.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressVLHdzoW = await YRX3AefgkLB.toPayable.call(addressHlh50aB, {from: accounts[4]});
//		const uint256jmf9sm4 = await YRX3AefgkLB.stake.call(uintA93I07c, {from: accounts[4]});

		assert.equal(uint256LIDFoQE, BigInt("0"))
		assert.equal(uint256Tex8E5Y, BigInt("0"))
		assert.equal(uint256f9uJUtp, BigInt("0"))
		assert.equal(uint256y7m1QSx, BigInt("0"))
		await expect(YRX3AefgkLB.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})