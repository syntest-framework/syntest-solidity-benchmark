const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3Q6KnmJu = await YRX3.new({from: accounts[2]});
		const addressq1PXfo = accounts[3]
		const uintgSmqFo2 = BigInt("316")
		const addressLIhwyQh = accounts[3]
//		await YRX3Q6KnmJu.onlyOwner.call({from: accounts[1]});
//		const addressD6dlFk7 = await YRX3Q6KnmJu.emergencyDrain.call(addressq1PXfo, {from: accounts[0]});
//		const uint256MX446dn = await YRX3Q6KnmJu.withdraw.call(uintgSmqFo2, {from: accounts[1]});
//		const addressMfcmpAu = await YRX3Q6KnmJu.toPayable.call(addressLIhwyQh, {from: accounts[1]});

		await expect(YRX3Q6KnmJu.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Kp1ViF = await YRX3.new({from: accounts[1]});
		const uintCRVL1hh = BigInt("838")
		const addressbWVkVbH = "0x0000000000000000000000000000000000000001"
		const addressC0qKxlw = accounts[1]
		const addressuCRsTRI = accounts[1]
//		const uint256gVeOca0 = await YRX3Kp1ViF.withdraw.call(uintCRVL1hh, {from: accounts[1]});
//		const addressO162sd = await YRX3Kp1ViF.toPayable.call(addressbWVkVbH, {from: accounts[3]});
//		const uint256ZANLY5 = await YRX3Kp1ViF.earned.call(addressC0qKxlw, {from: accounts[4]});
//		const uint256fV8EGLR = await YRX3Kp1ViF.balanceOf.call(addressuCRsTRI, {from: accounts[1]});
//		const uint256HRdJpWJ = await YRX3Kp1ViF.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3Kp1ViF.withdraw.call(uintCRVL1hh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3udLifO0 = await YRX3.new({from: accounts[0]});
		const addressxJqk0Rr = accounts[5]
		const uint256jI5PbpQ = await YRX3udLifO0.earned.call(addressxJqk0Rr, {from: accounts[3]});
//		await YRX3udLifO0.renounceOwnership.call({from: accounts[3]});
//		await YRX3udLifO0.exit.call({from: accounts[2]});
//		const uint256k28P4vc = await YRX3udLifO0.rewardPerToken.call({from: accounts[2]});
//		await YRX3udLifO0.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256jI5PbpQ, BigInt("0"))
		await expect(YRX3udLifO0.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3T7hK5rw = await YRX3.new({from: accounts[3]});
		const uinttiqyJZz = BigInt("988")
		const addressMmWsToy = accounts[0]
//		const uint256ro5TqYT = await YRX3T7hK5rw.stake.call(uinttiqyJZz, {from: accounts[1]});
//		const address2e6yg7 = await YRX3T7hK5rw.toPayable.call(addressMmWsToy, {from: accounts[0]});
//		const uint256SJ9ZZl3 = await YRX3T7hK5rw.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3T7hK5rw.stake.call(uinttiqyJZz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jBZ0Nu5 = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMipnCBQ = accounts[0]
		const uint256EJVLjIz = await YRX3jBZ0Nu5.earned.call(addressMipnCBQ, {from: accounts[2]});
		await YRX3jBZ0Nu5.checkStart.call({from: accounts[2]});
		const uint256n4n0oL = await YRX3jBZ0Nu5.totalSupply.call({from: accounts[1]});
	});

	it('test for YRX3', async () => {
		const YRX3Z8chTpU = await YRX3.new({from: accounts[2]});
		const addressSupDfP7 = accounts[2]
		const addressTP51NS = accounts[0]
//		await YRX3Z8chTpU.notifyRewardAmount.call({from: accounts[0]});
//		const uint256sGlmzr = await YRX3Z8chTpU.balanceOf.call(addressSupDfP7, {from: "0x0000000000000000000000000000000000000001"});
//		const address9Zfldu = await YRX3Z8chTpU.setRewardDistribution.call(addressTP51NS, {from: accounts[3]});
//		const boolyY9HVZf = await YRX3Z8chTpU.isOwner.call({from: accounts[2]});

		await expect(YRX3Z8chTpU.notifyRewardAmount.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3udLifO0 = await YRX3.new({from: accounts[0]});
		const addressZhEB0gF = accounts[5]
		const uint256jI5PbpQ = await YRX3udLifO0.earned.call(addressZhEB0gF, {from: accounts[3]});
//		await YRX3udLifO0.exit.call({from: accounts[2]});
//		const uint256k28P4vc = await YRX3udLifO0.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256jI5PbpQ, BigInt("0"))
		await expect(YRX3udLifO0.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3T7hK5rw = await YRX3.new({from: accounts[3]});
		const uintJjjzmJ0 = BigInt("988")
		const addresskp9fkhg = accounts[2]
		const addresseCO38v = accounts[0]
//		await YRX3T7hK5rw.getReward.call({from: accounts[2]});
//		const uint256ro5TqYT = await YRX3T7hK5rw.stake.call(uintJjjzmJ0, {from: accounts[1]});
//		const address2e6yg7 = await YRX3T7hK5rw.toPayable.call(addresskp9fkhg, {from: accounts[0]});
//		await YRX3T7hK5rw.checkStart.call({from: accounts[5]});
//		const uint256SJ9ZZl3 = await YRX3T7hK5rw.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256lVuObKT = await YRX3T7hK5rw.balanceOf.call(addresseCO38v, {from: accounts[0]});
//		const addressgAbnslD = await YRX3T7hK5rw.owner.call({from: accounts[2]});
//		await YRX3T7hK5rw.onlyRewardDistribution.call({from: accounts[0]});

		await expect(YRX3T7hK5rw.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3LG7bXjr = await YRX3.new({from: accounts[2]});
		const addressqI8GSbb = accounts[0]
		const addressKRAqdNf = accounts[4]
//		await YRX3LG7bXjr.renounceOwnership.call({from: accounts[2]});
//		const addressAF4uDbr = await YRX3LG7bXjr.emergencyDrain.call(addressqI8GSbb, {from: accounts[4]});
//		const uint256AAbFNiI = await YRX3LG7bXjr.balanceOf.call(addressKRAqdNf, {from: accounts[2]});

		await expect(YRX3LG7bXjr.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3muzmZPM = await YRX3.new({from: accounts[4]});
		const uint256OsP6Lp9 = await YRX3muzmZPM.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressaJH9hCu = await YRX3muzmZPM.owner.call({from: accounts[1]});

		assert.equal(addressaJH9hCu, 0xd1fF8C976B4604D13daEd695110b38f9A81Abc53)
		assert.equal(uint256OsP6Lp9, BigInt("0"))
	});

	it('test for YRX3', async () => {
		const YRX3HdEObFu = await YRX3.new({from: accounts[4]});
		const addresssNynvwr = accounts[2]
		const addressUXxnGv = await YRX3HdEObFu.setRewardDistribution.call(addresssNynvwr, {from: accounts[4]});
//		await YRX3HdEObFu.onlyRewardDistribution.call({from: accounts[5]});
//		await YRX3HdEObFu.checkNextEpoch.call({from: accounts[1]});

		await expect(YRX3HdEObFu.onlyRewardDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})