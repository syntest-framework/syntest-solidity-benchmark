const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardS0wxOtg = await SLTDETHlpReward.new({from: accounts[3]});
		const addressvhtuQO = accounts[0]
		const addressKx2pBKq = accounts[1]
		const uintQLnhCxq = BigInt("102")
//		const addressFLMWgIM = await SLTDETHlpRewardS0wxOtg.transferOwnership.call(addressvhtuQO, {from: accounts[2]});
//		const uint256NTmEDNA = await SLTDETHlpRewardS0wxOtg.earned.call(addressKx2pBKq, {from: accounts[0]});
//		const uint256OhESijY = await SLTDETHlpRewardS0wxOtg.stake.call(uintQLnhCxq, {from: accounts[5]});

		await expect(SLTDETHlpRewardS0wxOtg.transferOwnership.call(addressvhtuQO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardrzANoey = await SLTDETHlpReward.new({from: accounts[2]});
		const uintFjQ53m7 = BigInt("818")
		const addressPXlOBUK = accounts[2]
//		const uint256tMPzVF = await SLTDETHlpRewardrzANoey.withdraw.call(uintFjQ53m7, {from: accounts[1]});
//		await SLTDETHlpRewardrzANoey.checkStart.call({from: accounts[1]});
//		const uint256U4Z8SC9 = await SLTDETHlpRewardrzANoey.totalSupply.call({from: accounts[4]});
//		await SLTDETHlpRewardrzANoey.onlyRewardDistribution.call({from: accounts[0]});
//		const uint256kmoxhC = await SLTDETHlpRewardrzANoey.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addressEBbOkJn = await SLTDETHlpRewardrzANoey.setStakeAddress.call(addressPXlOBUK, {from: accounts[2]});

		await expect(SLTDETHlpRewardrzANoey.withdraw.call(uintFjQ53m7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTyDPMg0 = await SLTDETHlpReward.new({from: accounts[3]});
		const addressLXVcKFM = accounts[0]
//		const uint256vZzOfNC = await SLTDETHlpRewardTyDPMg0.remainingReward.call({from: accounts[3]});
//		const uint256vPoKR5s = await SLTDETHlpRewardTyDPMg0.totalSupply.call({from: accounts[0]});
//		const addressouawI3S = await SLTDETHlpRewardTyDPMg0.updateReward.call(addressLXVcKFM, {from: accounts[0]});

		await expect(SLTDETHlpRewardTyDPMg0.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarda1Ymlz9 = await SLTDETHlpReward.new({from: accounts[1]});
		const addressvA33cd = accounts[1]
//		await SLTDETHlpRewarda1Ymlz9.checkStart.call({from: accounts[1]});
//		const addressNUqxk6O = await SLTDETHlpRewarda1Ymlz9.updateReward.call(addressvA33cd, {from: accounts[2]});
//		await SLTDETHlpRewarda1Ymlz9.getReward.call({from: accounts[2]});
//		const uint256ISk4l87 = await SLTDETHlpRewarda1Ymlz9.remainingReward.call({from: accounts[3]});
		await SLTDETHlpRewarda1Ymlz9.checkStart.call({from: accounts[1]});

		await expect(SLTDETHlpRewarda1Ymlz9.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardV6DxB27 = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnyrL8R = accounts[0]
		const uintFuthaUM = BigInt("1798")
		const addresszhnyQRh = await SLTDETHlpRewardV6DxB27.transferOwnership.call(addressnyrL8R, {from: accounts[2]});
		const uint2566ckeyT = await SLTDETHlpRewardV6DxB27.withdraw.call(uintFuthaUM, {from: accounts[0]});
		const uint256MYKECjI = await SLTDETHlpRewardV6DxB27.remainingReward.call({from: accounts[3]});
		await SLTDETHlpRewardV6DxB27.onlyOwner.call({from: accounts[3]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardOZHkWFx = await SLTDETHlpReward.new({from: accounts[2]});
		const uint0LCWIZ = BigInt("992")
		const addressjapkKL0 = accounts[3]
		const uintTmyQceI = BigInt("725")
//		await SLTDETHlpRewardOZHkWFx.exit.call({from: accounts[3]});
//		const uint256ounhyuz = await SLTDETHlpRewardOZHkWFx.withdraw.call(uint0LCWIZ, {from: accounts[0]});
//		const addressMHPlm1q = await SLTDETHlpRewardOZHkWFx.setStakeAddress.call(addressjapkKL0, {from: accounts[0]});
//		await SLTDETHlpRewardOZHkWFx.getReward.call({from: accounts[2]});
//		const uint256F86vfVV = await SLTDETHlpRewardOZHkWFx.withdraw.call(uintTmyQceI, {from: accounts[1]});

		await expect(SLTDETHlpRewardOZHkWFx.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardUco86Bv = await SLTDETHlpReward.new({from: accounts[0]});
		const uintlykRq9q = BigInt("964")
		const addressr2LByNC = accounts[1]
		const addressd8beD3H = accounts[0]
//		const uint256z3aSmVG = await SLTDETHlpRewardUco86Bv.stake.call(uintlykRq9q, {from: accounts[1]});
//		const addressbcXoX6F = await SLTDETHlpRewardUco86Bv.setRewardDistribution.call(addressr2LByNC, {from: accounts[0]});
//		await SLTDETHlpRewardUco86Bv.renounceOwnership.call({from: accounts[1]});
//		const uint256rQcHAzQ = await SLTDETHlpRewardUco86Bv.earned.call(addressd8beD3H, {from: accounts[2]});

		await expect(SLTDETHlpRewardUco86Bv.stake.call(uintlykRq9q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardS0wxOtg = await SLTDETHlpReward.new({from: accounts[3]});
		const addressCQc9OWG = accounts[1]
		const uintIiCZbnT = BigInt("126")
//		await SLTDETHlpRewardS0wxOtg.getReward.call({from: accounts[3]});
//		const uint256NTmEDNA = await SLTDETHlpRewardS0wxOtg.earned.call(addressCQc9OWG, {from: accounts[0]});
//		const uint256OhESijY = await SLTDETHlpRewardS0wxOtg.stake.call(uintIiCZbnT, {from: accounts[5]});

		await expect(SLTDETHlpRewardS0wxOtg.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardS0wxOtg = await SLTDETHlpReward.new({from: accounts[3]});
		const addressE28cxZv = accounts[1]
		const addressg4pPPT0 = "0x0000000000000000000000000000000000000001"
		const uintwiDESUi = BigInt("126")
//		await SLTDETHlpRewardS0wxOtg.getReward.call({from: accounts[3]});
//		const uint256NTmEDNA = await SLTDETHlpRewardS0wxOtg.earned.call(addressE28cxZv, {from: accounts[0]});
		await SLTDETHlpRewardS0wxOtg.getReward.call({from: accounts[3]});
//		const addressDQ0LFkk = await SLTDETHlpRewardS0wxOtg.owner.call({from: accounts[0]});
//		const uint256yhKHPR = await SLTDETHlpRewardS0wxOtg.balanceOf.call(addressg4pPPT0, {from: accounts[4]});
//		const uint256OhESijY = await SLTDETHlpRewardS0wxOtg.stake.call(uintwiDESUi, {from: accounts[5]});

		await expect(SLTDETHlpRewardS0wxOtg.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardS0wxOtg = await SLTDETHlpReward.new({from: accounts[3]});
		const uintlZ3Vjw3 = BigInt("1185")
		const uintohXE4Kf = BigInt("107")
//		const uint256TJXiXfQ = await SLTDETHlpRewardS0wxOtg.notifyRewardAmount.call(uintlZ3Vjw3, {from: accounts[1]});
//		const uint256OhESijY = await SLTDETHlpRewardS0wxOtg.stake.call(uintohXE4Kf, {from: accounts[5]});

		await expect(SLTDETHlpRewardS0wxOtg.notifyRewardAmount.call(uintlZ3Vjw3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTWCK741 = await SLTDETHlpReward.new({from: accounts[1]});
		const addressQBFynPN = "0x0000000000000000000000000000000000000001"
		const addresswejQF4G = await SLTDETHlpRewardTWCK741.setRewardDistribution.call(addressQBFynPN, {from: accounts[1]});
		const uint256g1zS3Fb = await SLTDETHlpRewardTWCK741.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256g1zS3Fb, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardS0wxOtg = await SLTDETHlpReward.new({from: accounts[3]});
		const uintlg5gAzA = BigInt("758")
		const uintOcHvrv = BigInt("115")
		const uint256ntVk5ou = await SLTDETHlpRewardS0wxOtg.notifyRewardAmount.call(uintlg5gAzA, {from: accounts[3]});
//		const uint256OhESijY = await SLTDETHlpRewardS0wxOtg.stake.call(uintOcHvrv, {from: accounts[5]});

		await expect(SLTDETHlpRewardS0wxOtg.stake.call(uintOcHvrv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardS0wxOtg = await SLTDETHlpReward.new({from: accounts[3]});
		const addressgQ9iN0Y = "0x0000000000000000000000000000000000000001"
		const uintXFRtf3E = BigInt("758")
		const addressdR90qSu = accounts[4]
		const addresshVSPElT = await SLTDETHlpRewardS0wxOtg.transferOwnership.call(addressgQ9iN0Y, {from: accounts[3]});
		const uint256ntVk5ou = await SLTDETHlpRewardS0wxOtg.notifyRewardAmount.call(uintXFRtf3E, {from: accounts[3]});
//		const addresslm6XtOR = await SLTDETHlpRewardS0wxOtg.updateReward.call(addressdR90qSu, {from: accounts[5]});

		await expect(SLTDETHlpRewardS0wxOtg.updateReward.call(addressdR90qSu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardlBF7bND = await SLTDETHlpReward.new({from: accounts[4]});
		const uintt6nilKt = BigInt("1973")
		const uintKZVdat = BigInt("1162")
//		await SLTDETHlpRewardlBF7bND.renounceOwnership.call({from: accounts[4]});
//		const uint256zaovTq = await SLTDETHlpRewardlBF7bND.withdraw.call(uintt6nilKt, {from: accounts[1]});
//		const uint256ZIdpegw = await SLTDETHlpRewardlBF7bND.withdraw.call(uintKZVdat, {from: accounts[3]});

		await expect(SLTDETHlpRewardlBF7bND.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardS0wxOtg = await SLTDETHlpReward.new({from: accounts[3]});
		const uintcPXhAnw = BigInt("922")
		const uint256T4XtNxz = await SLTDETHlpRewardS0wxOtg.setStartTime.call(uintcPXhAnw, {from: accounts[3]});
//		await SLTDETHlpRewardS0wxOtg.getReward.call({from: accounts[3]});

		await expect(SLTDETHlpRewardS0wxOtg.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardS0wxOtg = await SLTDETHlpReward.new({from: accounts[3]});
		const addressDMzXNS = "0x0000000000000000000000000000000000000001"
		const uintsBnG4ds = BigInt("741")
		const addressPWrqqnH = accounts[5]
		const addressZYO2YS4 = await SLTDETHlpRewardS0wxOtg.setStakeAddress.call(addressDMzXNS, {from: accounts[3]});
//		await SLTDETHlpRewardS0wxOtg.getReward.call({from: accounts[3]});
//		const uint256ntVk5ou = await SLTDETHlpRewardS0wxOtg.notifyRewardAmount.call(uintsBnG4ds, {from: accounts[3]});
//		const addressH4ek3kX = await SLTDETHlpRewardS0wxOtg.setStakeAddress.call(addressPWrqqnH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardS0wxOtg.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})