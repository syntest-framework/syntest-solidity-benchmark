const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKqYEoLXA = await RainbowRAK.new({from: accounts[0]});
		const addressRoo45D7 = accounts[4]
		const addressbmFXiGp = accounts[1]
		await RainbowRAKqYEoLXA.onlyOwner.call({from: accounts[1]});
		const uint256zGMeGu = await RainbowRAKqYEoLXA.rewardPerToken.call({from: accounts[2]});
		const uint256dCiXzGZ = await RainbowRAKqYEoLXA.rewardPerToken.call({from: accounts[0]});
		const uint256ddMTCzT = await RainbowRAKqYEoLXA.earned.call(addressRoo45D7, {from: accounts[3]});
		const addressRSudavA = await RainbowRAKqYEoLXA.updateReward.call(addressbmFXiGp, {from: accounts[1]});

		await expect(RainbowRAKqYEoLXA.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKYfXFe1c = await RainbowRAK.new({from: accounts[0]});
		const boolPstyI0P = await RainbowRAKYfXFe1c.isOwner.call({from: accounts[0]});
		const uint2565ZfMYi = await RainbowRAKYfXFe1c.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Oiwii7q = await RainbowRAKYfXFe1c.rewardPerToken.call({from: accounts[2]});

		assert.equal(boolPstyI0P, true)
		assert.equal(uint2565ZfMYi, BigInt("0"))
		assert.equal(uint256Oiwii7q, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKMbFDiJM = await RainbowRAK.new({from: accounts[0]});
		const uint00Jdie = BigInt("1815")
		const uint256A4yFJD = await RainbowRAKMbFDiJM.getCurrentRewardReserve.call({from: accounts[2]});
		const addressarrayPa9JBr = await RainbowRAKMbFDiJM.getCommunity.call({from: accounts[2]});
		await RainbowRAKMbFDiJM.claimRewards.call({from: accounts[4]});
		const uint256Tr81i6B = await RainbowRAKMbFDiJM.notifyRewardAmount.call(uint00Jdie, {from: accounts[4]});
		await RainbowRAKMbFDiJM.renounceOwnership.call({from: accounts[1]});

		assert.equal(addressarrayPa9JBr, )
		assert.equal(uint256A4yFJD, BigInt("0"))
		await expect(RainbowRAKMbFDiJM.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKNeXVjTc = await RainbowRAK.new({from: accounts[1]});
		const uintvX6glo5 = BigInt("432")
		const addresssj67y5U = "0x0000000000000000000000000000000000000001"
		const addressFbIuzjz = accounts[2]
		const uint256EG00yo3 = await RainbowRAKNeXVjTc.notifyRewardAmount.call(uintvX6glo5, {from: accounts[0]});
		await RainbowRAKNeXVjTc.renounceOwnership.call({from: accounts[3]});
		const addressrgT4PU9 = await RainbowRAKNeXVjTc.updateReward.call(addresssj67y5U, {from: accounts[5]});
		await RainbowRAKNeXVjTc.onlyOwner.call({from: accounts[4]});
		const addressPYSCqgr = await RainbowRAKNeXVjTc.transferOwnership.call(addressFbIuzjz, {from: accounts[3]});

		await expect(RainbowRAKNeXVjTc.notifyRewardAmount.call(uintvX6glo5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKS0nvoE9 = await RainbowRAK.new({from: accounts[5]});
		const uintoKP3TOG = BigInt("702")
		const addressueNo4On = accounts[2]
		const uint256TzsdAhX = await RainbowRAKS0nvoE9.stake.call(uintoKP3TOG, {from: accounts[1]});
		const uint256xF9Rcf = await RainbowRAKS0nvoE9.rewardPerToken.call({from: accounts[1]});
		const addresse2qYKbV = await RainbowRAKS0nvoE9.transferOwnership.call(addressueNo4On, {from: accounts[4]});
		await RainbowRAKS0nvoE9.onlyOwner.call({from: accounts[1]});
		await RainbowRAKS0nvoE9.claimRewards.call({from: accounts[1]});
		const uint256TPuUTu = await RainbowRAKS0nvoE9.rewardPerToken.call({from: accounts[0]});

		await expect(RainbowRAKS0nvoE9.stake.call(uintoKP3TOG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKIXbyo81 = await RainbowRAK.new({from: accounts[3]});
		const uintqa16HR = BigInt("1295")
		const uint2569W9a6t = await RainbowRAKIXbyo81.rewardPerToken.call({from: accounts[2]});
		const addressfSyMupj = await RainbowRAKIXbyo81.owner.call({from: accounts[2]});
		const uint256lp0khVz = await RainbowRAKIXbyo81.notifyRewardAmount.call(uintqa16HR, {from: accounts[1]});

		assert.equal(addressfSyMupj, 0x90c362A096a9aD18846eCf3F57D4EF8Df49b2c4a)
		assert.equal(uint2569W9a6t, BigInt("0"))
		await expect(RainbowRAKIXbyo81.notifyRewardAmount.call(uintqa16HR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKllGBDFn = await RainbowRAK.new({from: accounts[0]});
		const uintOHIhvGS = BigInt("575")
		const uintzBw7zXu = BigInt("1031")
		const uint256Vkcwlv1 = await RainbowRAKllGBDFn.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256hyf4pq = await RainbowRAKllGBDFn.unstake.call(uintOHIhvGS, {from: accounts[1]});
		const uint256Ue0fIP = await RainbowRAKllGBDFn.getCurrentRewardReserve.call({from: accounts[1]});
		const uint256qp0ZWQX = await RainbowRAKllGBDFn.stake.call(uintzBw7zXu, {from: accounts[3]});
		await RainbowRAKllGBDFn.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256Vkcwlv1, BigInt("0"))
		await expect(RainbowRAKllGBDFn.unstake.call(uintOHIhvGS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKllGBDFn = await RainbowRAK.new({from: accounts[0]});
		const uintM3EW4yw = BigInt("1031")
		const uint256Vkcwlv1 = await RainbowRAKllGBDFn.getCurrentRewardReserve.call({from: accounts[4]});
		await RainbowRAKllGBDFn.exit.call({from: accounts[3]});
		const uint256Ue0fIP = await RainbowRAKllGBDFn.getCurrentRewardReserve.call({from: accounts[1]});
		const uint256qp0ZWQX = await RainbowRAKllGBDFn.stake.call(uintM3EW4yw, {from: accounts[3]});
		await RainbowRAKllGBDFn.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256Vkcwlv1, BigInt("0"))
		await expect(RainbowRAKllGBDFn.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKQLhjw7h = await RainbowRAK.new({from: accounts[1]});
		const addressgWgwnNd = "0x0000000000000000000000000000000000000001"
		const uintavojnDi = BigInt("48")
		const addressfC3VfZL = accounts[3]
		const addressqCQol85 = await RainbowRAKQLhjw7h.transferOwnership.call(addressgWgwnNd, {from: accounts[1]});
		const uint256D7CvRCa = await RainbowRAKQLhjw7h.stake.call(uintavojnDi, {from: accounts[4]});
		await RainbowRAKQLhjw7h.exit.call({from: accounts[3]});
		await RainbowRAKQLhjw7h.exit.call({from: accounts[0]});
		const addresswvnqoXo = await RainbowRAKQLhjw7h.transferOwnership.call(addressfC3VfZL, {from: accounts[0]});
		const boolJrjuPXB = await RainbowRAKQLhjw7h.isOwner.call({from: accounts[4]});

		await expect(RainbowRAKQLhjw7h.stake.call(uintavojnDi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWAJhKD = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256CYzdfOJ = await RainbowRAKWAJhKD.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256W26YBXz = await RainbowRAKWAJhKD.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256kVRGpx5 = await RainbowRAKWAJhKD.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKWAJhKD.exit.call({from: accounts[2]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKgj9mmYF = await RainbowRAK.new({from: accounts[4]});
		const uintKwrHTc5 = BigInt("853")
		const addressl7QRZUD = accounts[5]
		const uint256inpmqgf = await RainbowRAKgj9mmYF.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256MALrU69 = await RainbowRAKgj9mmYF.notifyRewardAmount.call(uintKwrHTc5, {from: accounts[4]});
		const uint256QLDuP4G = await RainbowRAKgj9mmYF.lastTimeRewardApplicable.call({from: accounts[3]});
		await RainbowRAKgj9mmYF.exit.call({from: accounts[2]});
		const addressXweXGiM = await RainbowRAKgj9mmYF.updateReward.call(addressl7QRZUD, {from: accounts[4]});

		assert.equal(uint256inpmqgf, BigInt("0"))
		await expect(RainbowRAKgj9mmYF.notifyRewardAmount.call(uintKwrHTc5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKYfXFe1c = await RainbowRAK.new({from: accounts[0]});
		await RainbowRAKYfXFe1c.renounceOwnership.call({from: accounts[0]});
		await RainbowRAKYfXFe1c.claimRewards.call({from: accounts[3]});
		const uint256Oiwii7q = await RainbowRAKYfXFe1c.rewardPerToken.call({from: accounts[2]});

		await expect(RainbowRAKYfXFe1c.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})