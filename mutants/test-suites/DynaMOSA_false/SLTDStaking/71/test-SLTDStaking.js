const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingXp2fHm = await SLTDStaking.new({from: accounts[3]});
		const addressBmj0t7W = accounts[5]
//		await SLTDStakingXp2fHm.getReward.call({from: accounts[3]});
//		const uint256ObpJFUQ = await SLTDStakingXp2fHm.totalSupply.call({from: accounts[0]});
//		const uint256rzQTv98 = await SLTDStakingXp2fHm.earned.call(addressBmj0t7W, {from: accounts[1]});

		await expect(SLTDStakingXp2fHm.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingG8fLCuu = await SLTDStaking.new({from: accounts[1]});
		const addressJ6zx1L = accounts[1]
		const addressGSiOvPR = "0x0000000000000000000000000000000000000001"
		const addressFSmVnuK = accounts[2]
//		await SLTDStakingG8fLCuu.onlyRewardDistribution.call({from: accounts[4]});
//		await SLTDStakingG8fLCuu.onlyOwner.call({from: accounts[2]});
//		await SLTDStakingG8fLCuu.exit.call({from: accounts[3]});
//		await SLTDStakingG8fLCuu.renounceOwnership.call({from: accounts[2]});
//		const uint256tw0yZOM = await SLTDStakingG8fLCuu.earned.call(addressJ6zx1L, {from: accounts[2]});
//		const addressIUj3NCQ = await SLTDStakingG8fLCuu.setSLTD.call(addressFSmVnuK, addressGSiOvPR, {from: accounts[2]});

		await expect(SLTDStakingG8fLCuu.onlyRewardDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingfvfNiUP = await SLTDStaking.new({from: accounts[1]});
		const addressIko9N5F = accounts[1]
		const uint256rG8pAV = await SLTDStakingfvfNiUP.earned.call(addressIko9N5F, {from: accounts[0]});
		const uint256zWtluPG = await SLTDStakingfvfNiUP.rewardPerToken.call({from: accounts[0]});
//		await SLTDStakingfvfNiUP.renounceOwnership.call({from: accounts[1]});
//		const uint2560HjgG4 = await SLTDStakingfvfNiUP.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256rG8pAV, BigInt("0"))
		assert.equal(uint256zWtluPG, BigInt("0"))
		await expect(SLTDStakingfvfNiUP.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinglRD2ys = await SLTDStaking.new({from: accounts[1]});
		const addressolvq1Cl = "0x0000000000000000000000000000000000000001"
		const addressXoz4Ws = accounts[2]
		const addressSPEPoY8 = await SLTDStakinglRD2ys.transferOwnership.call(addressolvq1Cl, {from: accounts[1]});
//		const addressDAhNobC = await SLTDStakinglRD2ys.updateReward.call(addressXoz4Ws, {from: accounts[1]});
//		await SLTDStakinglRD2ys.renounceOwnership.call({from: accounts[1]});
//		const addressqHmcEep = await SLTDStakinglRD2ys.owner.call({from: accounts[0]});

		await expect(SLTDStakinglRD2ys.updateReward.call(addressXoz4Ws, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingTk64ZNY = await SLTDStaking.new({from: accounts[2]});
		const uintRXP3zZo = BigInt("1810")
		const uintz9V6zM = BigInt("519")
		const uint256EJluS3V = await SLTDStakingTk64ZNY.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256rjdfma = await SLTDStakingTk64ZNY.withdraw.call(uintRXP3zZo, {from: accounts[1]});
//		const uint256aqT78BZ = await SLTDStakingTk64ZNY.stake.call(uintz9V6zM, {from: accounts[1]});
//		await SLTDStakingTk64ZNY.onlyRewardDistribution.call({from: accounts[2]});
//		await SLTDStakingTk64ZNY.onlyRewardDistribution.call({from: accounts[0]});

		assert.equal(uint256EJluS3V, BigInt("0"))
		await expect(SLTDStakingTk64ZNY.withdraw.call(uintRXP3zZo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingXx1D6nx = await SLTDStaking.new({from: accounts[5]});
		const addressxT1AfPL = accounts[1]
		const uintRw3ymps = BigInt("1603")
		const addressPCoelzQ = await SLTDStakingXx1D6nx.owner.call({from: accounts[0]});
		const uint256p9q2xWx = await SLTDStakingXx1D6nx.balanceOf.call(addressxT1AfPL, {from: accounts[4]});
//		await SLTDStakingXx1D6nx.exit.call({from: accounts[3]});
//		const uint256lcWyPHJ = await SLTDStakingXx1D6nx.withdraw.call(uintRw3ymps, {from: accounts[3]});
//		await SLTDStakingXx1D6nx.exit.call({from: accounts[2]});

		assert.equal(addressPCoelzQ, 0x5d7417311d21a1996702c9B36F08F226CB9825cC)
		assert.equal(uint256p9q2xWx, BigInt("0"))
		await expect(SLTDStakingXx1D6nx.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingskxhaie = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingskxhaie.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BKe6tAP = await SLTDStakingskxhaie.rewardPerToken.call({from: accounts[1]});
		const uint256Gzm6nXo = await SLTDStakingskxhaie.rewardPerToken.call({from: accounts[0]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingXp2fHm = await SLTDStaking.new({from: accounts[3]});
		const addressn4yafFd = accounts[2]
		const addressOUnVxdF = accounts[4]
		const addressiM3gOu = accounts[5]
//		await SLTDStakingXp2fHm.getReward.call({from: accounts[3]});
//		const uint256ObpJFUQ = await SLTDStakingXp2fHm.totalSupply.call({from: accounts[0]});
//		const addressa72jms = await SLTDStakingXp2fHm.setSLTD.call(addressOUnVxdF, addressn4yafFd, {from: accounts[0]});
//		const uint256rzQTv98 = await SLTDStakingXp2fHm.earned.call(addressiM3gOu, {from: accounts[1]});

		await expect(SLTDStakingXp2fHm.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingIeXql9J = await SLTDStaking.new({from: accounts[2]});
		const uintE7lZksz = BigInt("1164")
		const addresszRzGlG = accounts[2]
//		const uint256mOYe0Yc = await SLTDStakingIeXql9J.stake.call(uintE7lZksz, {from: accounts[3]});
//		const uint256x23vtlj = await SLTDStakingIeXql9J.rewardPerToken.call({from: accounts[3]});
//		const addressTyxUzoh = await SLTDStakingIeXql9J.transferOwnership.call(addresszRzGlG, {from: accounts[5]});

		await expect(SLTDStakingIeXql9J.stake.call(uintE7lZksz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingXp2fHm = await SLTDStaking.new({from: accounts[3]});
		const addressqUTWHY0 = accounts[4]
		const addressG8tDupC = accounts[2]
		const addressbWFt7bF = accounts[5]
		const addressy9vgCBn = accounts[2]
		const uintghEOjUP = BigInt("390")
		const addressZM5ih27 = accounts[5]
//		await SLTDStakingXp2fHm.getReward.call({from: accounts[3]});
//		const addresszcWhtK2 = await SLTDStakingXp2fHm.transferOwnership.call(addressqUTWHY0, {from: accounts[1]});
//		const uint256ObpJFUQ = await SLTDStakingXp2fHm.totalSupply.call({from: accounts[0]});
//		const addressa72jms = await SLTDStakingXp2fHm.setSLTD.call(addressbWFt7bF, addressG8tDupC, {from: accounts[0]});
//		const addressQK5x5Ka = await SLTDStakingXp2fHm.updateReward.call(addressy9vgCBn, {from: accounts[4]});
//		const uint256bqANNVX = await SLTDStakingXp2fHm.withdraw.call(uintghEOjUP, {from: accounts[3]});
//		const uint256rzQTv98 = await SLTDStakingXp2fHm.earned.call(addressZM5ih27, {from: accounts[1]});

		await expect(SLTDStakingXp2fHm.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingXp2fHm = await SLTDStaking.new({from: accounts[3]});
		const addressGMdBjmG = accounts[3]
		const uintj3UtGE1 = BigInt("909")
		const addresscGkRH3q = accounts[2]
		const addressUKkst8s = accounts[5]
		const addresskgursnl = accounts[5]
//		await SLTDStakingXp2fHm.getReward.call({from: accounts[3]});
//		const addresssChhYp = await SLTDStakingXp2fHm.setRewardDistribution.call(addressGMdBjmG, {from: accounts[3]});
//		const uint256z0t2Kkp = await SLTDStakingXp2fHm.stake.call(uintj3UtGE1, {from: accounts[2]});
//		const addressa72jms = await SLTDStakingXp2fHm.setSLTD.call(addressUKkst8s, addresscGkRH3q, {from: accounts[0]});
//		const uint256rzQTv98 = await SLTDStakingXp2fHm.earned.call(addresskgursnl, {from: accounts[1]});

		await expect(SLTDStakingXp2fHm.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})