const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingo6UZpF1 = await SLTDStaking.new({from: accounts[3]});
		const addresskVhg0W0 = accounts[3]
		const addressbVTv7SU = accounts[4]
		await SLTDStakingo6UZpF1.onlyOwner.call({from: accounts[4]});
		await SLTDStakingo6UZpF1.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressn4q1klL = await SLTDStakingo6UZpF1.transferOwnership.call(addresskVhg0W0, {from: accounts[4]});
		await SLTDStakingo6UZpF1.onlyRewardDistribution.call({from: accounts[1]});
		await SLTDStakingo6UZpF1.exit.call({from: accounts[0]});
		const addressqxaKyiT = await SLTDStakingo6UZpF1.transferOwnership.call(addressbVTv7SU, {from: accounts[0]});

		await expect(SLTDStakingo6UZpF1.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingbEmOxE2 = await SLTDStaking.new({from: accounts[5]});
		const uinteY3SI0P = BigInt("1460")
		const addressZN7HYw7 = accounts[1]
		const addressAiF5zdB = accounts[2]
		const addressNrytTgN = accounts[4]
		const uint256w7CWFGi = await SLTDStakingbEmOxE2.withdraw.call(uinteY3SI0P, {from: accounts[0]});
		const addressugr2CPH = await SLTDStakingbEmOxE2.setRewardDistribution.call(addressZN7HYw7, {from: accounts[0]});
		const addressZ3RZ0FD = await SLTDStakingbEmOxE2.setSLTD.call(addressNrytTgN, addressAiF5zdB, {from: accounts[2]});

		await expect(SLTDStakingbEmOxE2.withdraw.call(uinteY3SI0P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingcJ1xNyL = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSxy1QSD = accounts[2]
		await SLTDStakingcJ1xNyL.getReward.call({from: accounts[0]});
		const addressreve9M = await SLTDStakingcJ1xNyL.owner.call({from: accounts[3]});
		const addressdz9Oxu = await SLTDStakingcJ1xNyL.transferOwnership.call(addressSxy1QSD, {from: accounts[4]});
		const uint256nWfgdDI = await SLTDStakingcJ1xNyL.rewardPerToken.call({from: accounts[5]});
		await SLTDStakingcJ1xNyL.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingcXJy4RC = await SLTDStaking.new({from: accounts[5]});
		const addressxhzDjOo = accounts[5]
		const addressVpHwNWM = accounts[0]
		await SLTDStakingcXJy4RC.renounceOwnership.call({from: accounts[1]});
		await SLTDStakingcXJy4RC.exit.call({from: accounts[2]});
		const addressl1UJ68H = await SLTDStakingcXJy4RC.setRewardDistribution.call(addressxhzDjOo, {from: accounts[3]});
		const addresseBEUmI0 = await SLTDStakingcXJy4RC.setRewardDistribution.call(addressVpHwNWM, {from: accounts[3]});

		await expect(SLTDStakingcXJy4RC.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOB4WXpu = await SLTDStaking.new({from: accounts[4]});
		const addressc0dnvXI = "0x0000000000000000000000000000000000000001"
		const uintuLLaSwS = BigInt("700")
		const uintcEVwG1l = BigInt("673")
		await SLTDStakingOB4WXpu.exit.call({from: accounts[2]});
		const uint256SGkoDmB = await SLTDStakingOB4WXpu.balanceOf.call(addressc0dnvXI, {from: accounts[0]});
		const uint256quxhtxE = await SLTDStakingOB4WXpu.totalSupply.call({from: accounts[4]});
		const uint256qP69pbK = await SLTDStakingOB4WXpu.stake.call(uintuLLaSwS, {from: accounts[4]});
		const uint256hHB7bTM = await SLTDStakingOB4WXpu.withdraw.call(uintcEVwG1l, {from: accounts[2]});

		await expect(SLTDStakingOB4WXpu.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingl0ChcG7 = await SLTDStaking.new({from: accounts[5]});
		const uintxaJeFK = BigInt("1469")
		const uintilj1tLI = BigInt("51")
		const addressnan7kw = await SLTDStakingl0ChcG7.owner.call({from: accounts[4]});
		const uint256UKiew3 = await SLTDStakingl0ChcG7.stake.call(uintxaJeFK, {from: accounts[3]});
		const uint256Dcffy76 = await SLTDStakingl0ChcG7.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Qu5cA5b = await SLTDStakingl0ChcG7.notifyRewardAmount.call(uintilj1tLI, {from: accounts[4]});

		assert.equal(addressnan7kw, 0xE63122F84E6b332232B4E1621bb79723146015B5)
		await expect(SLTDStakingl0ChcG7.stake.call(uintxaJeFK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingFPHeQ6S = await SLTDStaking.new({from: accounts[2]});
		const addressS63np2s = "0x0000000000000000000000000000000000000001"
		const addressHfgAz8e = accounts[0]
		const uintkZuHxRP = BigInt("140")
		const addressflbAWv = accounts[2]
		const addressmuBttl2 = await SLTDStakingFPHeQ6S.setSLTD.call(addressHfgAz8e, addressS63np2s, {from: accounts[2]});
		const uint256unGUnu = await SLTDStakingFPHeQ6S.withdraw.call(uintkZuHxRP, {from: accounts[3]});
		const addressgXCe0sb = await SLTDStakingFPHeQ6S.updateReward.call(addressflbAWv, {from: accounts[0]});

		await expect(SLTDStakingFPHeQ6S.setSLTD.call(addressHfgAz8e, addressS63np2s, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingBNGIpqF = await SLTDStaking.new({from: accounts[2]});
		const uintroRnCsT = BigInt("1861")
		await SLTDStakingBNGIpqF.getReward.call({from: accounts[4]});
		const uint256axYaeFX = await SLTDStakingBNGIpqF.stake.call(uintroRnCsT, {from: accounts[2]});
		const addressGR00Zdz = await SLTDStakingBNGIpqF.owner.call({from: accounts[2]});

		await expect(SLTDStakingBNGIpqF.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingI3Jow3 = await SLTDStaking.new({from: accounts[2]});
		const uintqWo0q4P = BigInt("0")
		const addressWoxFp7 = accounts[1]
		const uintIvfYCON = BigInt("446")
		const uint256dopoAoi = await SLTDStakingI3Jow3.stake.call(uintqWo0q4P, {from: accounts[1]});
		const addressfZknXs6 = await SLTDStakingI3Jow3.setRewardDistribution.call(addressWoxFp7, {from: accounts[0]});
		const uint256LqvA0Fg = await SLTDStakingI3Jow3.withdraw.call(uintIvfYCON, {from: accounts[2]});

		await expect(SLTDStakingI3Jow3.stake.call(uintqWo0q4P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingBNGIpqF = await SLTDStaking.new({from: accounts[2]});
		await SLTDStakingBNGIpqF.renounceOwnership.call({from: accounts[2]});
		await SLTDStakingBNGIpqF.getReward.call({from: accounts[4]});
		const addressGR00Zdz = await SLTDStakingBNGIpqF.owner.call({from: accounts[2]});

		await expect(SLTDStakingBNGIpqF.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingBNGIpqF = await SLTDStaking.new({from: accounts[2]});
		const addressiRarH39 = accounts[0]
		const uintDzKOzMx = BigInt("1861")
		await SLTDStakingBNGIpqF.getReward.call({from: accounts[4]});
		const addresshJKqqPK = await SLTDStakingBNGIpqF.transferOwnership.call(addressiRarH39, {from: accounts[2]});
		const uint256axYaeFX = await SLTDStakingBNGIpqF.stake.call(uintDzKOzMx, {from: accounts[2]});
		const uint256ryUSEyN = await SLTDStakingBNGIpqF.totalSupply.call({from: accounts[0]});

		await expect(SLTDStakingBNGIpqF.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingd0p0ECJ = await SLTDStaking.new({from: accounts[2]});
		const addressij6aNGE = accounts[5]
		const addressOsXGlVq = accounts[2]
		const uint256t3qBph8 = await SLTDStakingd0p0ECJ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRK8nwhT = await SLTDStakingd0p0ECJ.setRewardDistribution.call(addressij6aNGE, {from: accounts[2]});
		const addressTT6q46o = await SLTDStakingd0p0ECJ.updateReward.call(addressOsXGlVq, {from: accounts[4]});

		assert.equal(uint256t3qBph8, BigInt("0"))
		await expect(SLTDStakingd0p0ECJ.updateReward.call(addressOsXGlVq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})