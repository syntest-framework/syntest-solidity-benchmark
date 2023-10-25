const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardztwCovM = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmguZ6O5 = accounts[5]
		const uintpSZ83QN = BigInt("1952")
		const uintLR4TDl = BigInt("2015")
		const addressDqrntyr = accounts[0]
		await SLTDETHlpRewardztwCovM.onlyOwner.call({from: accounts[2]});
		const addressEAGFQSh = await SLTDETHlpRewardztwCovM.updateReward.call(addressmguZ6O5, {from: accounts[0]});
		const uint256Vc2ekEc = await SLTDETHlpRewardztwCovM.stake.call(uintpSZ83QN, {from: accounts[2]});
		const uint256QrSMnJ9 = await SLTDETHlpRewardztwCovM.withdraw.call(uintLR4TDl, {from: accounts[3]});
		const addresszjSexhp = await SLTDETHlpRewardztwCovM.setStakeAddress.call(addressDqrntyr, {from: accounts[5]});
		await SLTDETHlpRewardztwCovM.checkStart.call({from: accounts[2]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKzsanlU = await SLTDETHlpReward.new({from: accounts[1]});
		const uintdU0q8Bp = BigInt("29")
		const addressnyEW6mu = accounts[4]
//		const uint256zeAb4N = await SLTDETHlpRewardKzsanlU.withdraw.call(uintdU0q8Bp, {from: accounts[1]});
//		const addressUtAhUY = await SLTDETHlpRewardKzsanlU.setRewardDistribution.call(addressnyEW6mu, {from: accounts[1]});

		await expect(SLTDETHlpRewardKzsanlU.withdraw.call(uintdU0q8Bp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfC2vJHm = await SLTDETHlpReward.new({from: accounts[3]});
//		await SLTDETHlpRewardfC2vJHm.onlyRewardDistribution.call({from: accounts[3]});
//		await SLTDETHlpRewardfC2vJHm.exit.call({from: accounts[0]});
//		const uint256m6ZQi1f = await SLTDETHlpRewardfC2vJHm.rewardPerToken.call({from: accounts[4]});
//		await SLTDETHlpRewardfC2vJHm.onlyRewardDistribution.call({from: accounts[5]});

		await expect(SLTDETHlpRewardfC2vJHm.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardk9R4z96 = await SLTDETHlpReward.new({from: accounts[5]});
		const uintpzoNqAU = BigInt("1435")
		const addressN6py8FO = accounts[0]
		const uintl3DgSAY = BigInt("1811")
		const uint256UCoQLp = await SLTDETHlpRewardk9R4z96.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256qK7EVYb = await SLTDETHlpRewardk9R4z96.stake.call(uintpzoNqAU, {from: accounts[2]});
//		const uint256n5VV8MF = await SLTDETHlpRewardk9R4z96.earned.call(addressN6py8FO, {from: accounts[0]});
//		const uint256mAPVAIO = await SLTDETHlpRewardk9R4z96.stake.call(uintl3DgSAY, {from: accounts[0]});

		assert.equal(uint256UCoQLp, BigInt("0"))
		await expect(SLTDETHlpRewardk9R4z96.stake.call(uintpzoNqAU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardIE58SgA = await SLTDETHlpReward.new({from: accounts[5]});
		const addresss37vh9G = accounts[4]
		const uintlNIJMGU = BigInt("916")
//		const addressfbdYWNn = await SLTDETHlpRewardIE58SgA.transferOwnership.call(addresss37vh9G, {from: accounts[1]});
//		const uint256EFE0FDq = await SLTDETHlpRewardIE58SgA.stake.call(uintlNIJMGU, {from: accounts[3]});
//		const booleVm8eVt = await SLTDETHlpRewardIE58SgA.isOwner.call({from: accounts[0]});

		await expect(SLTDETHlpRewardIE58SgA.transferOwnership.call(addresss37vh9G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKzsanlU = await SLTDETHlpReward.new({from: accounts[1]});
		const addressfBzdj6i = accounts[5]
		const addressUtAhUY = await SLTDETHlpRewardKzsanlU.setRewardDistribution.call(addressfBzdj6i, {from: accounts[1]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardsbwegZC = await SLTDETHlpReward.new({from: accounts[4]});
//		const uint256AO8SIT = await SLTDETHlpRewardsbwegZC.remainingReward.call({from: accounts[4]});
//		await SLTDETHlpRewardsbwegZC.getReward.call({from: accounts[3]});
//		await SLTDETHlpRewardsbwegZC.exit.call({from: accounts[4]});
//		const uint256mbGkRLY = await SLTDETHlpRewardsbwegZC.totalSupply.call({from: accounts[5]});

		await expect(SLTDETHlpRewardsbwegZC.remainingReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKzsanlU = await SLTDETHlpReward.new({from: accounts[1]});
		const addressNdt3v5G = accounts[6]
		const addressUtAhUY = await SLTDETHlpRewardKzsanlU.setRewardDistribution.call(addressNdt3v5G, {from: accounts[1]});
//		await SLTDETHlpRewardKzsanlU.exit.call({from: accounts[1]});

		await expect(SLTDETHlpRewardKzsanlU.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardehuceSl = await SLTDETHlpReward.new({from: accounts[2]});
		const addressoQjUlPP = accounts[0]
		const addresshiXfFz = "0x0000000000000000000000000000000000000001"
		const addressCKUzeIm = accounts[0]
		const addressNuvRypP = await SLTDETHlpRewardehuceSl.setStakeAddress.call(addressoQjUlPP, {from: accounts[2]});
		const uint256lSlCco = await SLTDETHlpRewardehuceSl.earned.call(addresshiXfFz, {from: accounts[2]});
		const booldfNflqn = await SLTDETHlpRewardehuceSl.isOwner.call({from: accounts[3]});
		const uint256D2usy5T = await SLTDETHlpRewardehuceSl.balanceOf.call(addressCKUzeIm, {from: accounts[2]});

		assert.equal(booldfNflqn, false)
		assert.equal(uint256D2usy5T, BigInt("0"))
		assert.equal(uint256lSlCco, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKzsanlU = await SLTDETHlpReward.new({from: accounts[1]});
		const uintnkEpo4k = BigInt("1741")
		const addressN71lMd = accounts[6]
		const uintxywlXJN = BigInt("556")
//		const uint256ZWKsszU = await SLTDETHlpRewardKzsanlU.notifyRewardAmount.call(uintnkEpo4k, {from: accounts[0]});
//		const addressUtAhUY = await SLTDETHlpRewardKzsanlU.setRewardDistribution.call(addressN71lMd, {from: accounts[1]});
//		const uint256Jie5F66 = await SLTDETHlpRewardKzsanlU.notifyRewardAmount.call(uintxywlXJN, {from: accounts[2]});

		await expect(SLTDETHlpRewardKzsanlU.notifyRewardAmount.call(uintnkEpo4k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKzsanlU = await SLTDETHlpReward.new({from: accounts[1]});
		const addresscjwjpWw = accounts[6]
		const addressD1owA0 = accounts[2]
		const uintbNCoAcR = BigInt("686")
		const addressVuYNPKG = await SLTDETHlpRewardKzsanlU.owner.call({from: accounts[0]});
		const addressUtAhUY = await SLTDETHlpRewardKzsanlU.setRewardDistribution.call(addresscjwjpWw, {from: accounts[1]});
//		const addressw5c8h9 = await SLTDETHlpRewardKzsanlU.setRewardDistribution.call(addressD1owA0, {from: accounts[2]});
//		const uint256bZ5g0CB = await SLTDETHlpRewardKzsanlU.stake.call(uintbNCoAcR, {from: accounts[2]});

		assert.equal(addressVuYNPKG, 0xA531262720b68dB712d344553b6E0c246858Fce9)
		await expect(SLTDETHlpRewardKzsanlU.setRewardDistribution.call(addressD1owA0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKzsanlU = await SLTDETHlpReward.new({from: accounts[1]});
		const addressv2lZRQ9 = accounts[6]
		const addressUtAhUY = await SLTDETHlpRewardKzsanlU.setRewardDistribution.call(addressv2lZRQ9, {from: accounts[1]});
//		await SLTDETHlpRewardKzsanlU.getReward.call({from: accounts[4]});

		await expect(SLTDETHlpRewardKzsanlU.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKzsanlU = await SLTDETHlpReward.new({from: accounts[1]});
		const addressP1ZI6mZ = accounts[6]
		const addressOmANwen = accounts[5]
		const addressUtAhUY = await SLTDETHlpRewardKzsanlU.setRewardDistribution.call(addressP1ZI6mZ, {from: accounts[1]});
		const addressvBgPvtj = await SLTDETHlpRewardKzsanlU.transferOwnership.call(addressOmANwen, {from: accounts[1]});
		const uint256dLAoEO8 = await SLTDETHlpRewardKzsanlU.rewardPerToken.call({from: accounts[1]});
//		await SLTDETHlpRewardKzsanlU.getReward.call({from: accounts[4]});

		assert.equal(uint256dLAoEO8, BigInt("0"))
		await expect(SLTDETHlpRewardKzsanlU.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKzsanlU = await SLTDETHlpReward.new({from: accounts[1]});
		const uintsz2fhw0 = BigInt("584")
		const addressKnxfDt = accounts[6]
		const uint256Au3YLbK = await SLTDETHlpRewardKzsanlU.notifyRewardAmount.call(uintsz2fhw0, {from: accounts[1]});
//		await SLTDETHlpRewardKzsanlU.checkStart.call({from: accounts[2]});
//		const addressUtAhUY = await SLTDETHlpRewardKzsanlU.setRewardDistribution.call(addressKnxfDt, {from: accounts[1]});

		await expect(SLTDETHlpRewardKzsanlU.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKzsanlU = await SLTDETHlpReward.new({from: accounts[1]});
//		await SLTDETHlpRewardKzsanlU.renounceOwnership.call({from: accounts[1]});
//		await SLTDETHlpRewardKzsanlU.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardKzsanlU.getReward.call({from: accounts[4]});

		await expect(SLTDETHlpRewardKzsanlU.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})