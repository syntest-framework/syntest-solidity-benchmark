const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebIN1xSd = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintb8huXtl = BigInt("702")
		const addressgITEZj = accounts[2]
		const addressZWyIWwC = accounts[4]
		const addressaBzjnqR = accounts[5]
		const uint256Ke49kob = await CourtFarming_HTStakebIN1xSd.stake.call(uintb8huXtl, {from: accounts[3]});
		const addresssbBz402 = await CourtFarming_HTStakebIN1xSd.setCourtStake.call(addressgITEZj, {from: accounts[3]});
		const uint256rKunAaI = await CourtFarming_HTStakebIN1xSd.balanceOf.call(addressZWyIWwC, {from: accounts[1]});
		const uint256OXFGI4H = await CourtFarming_HTStakebIN1xSd.balanceOf.call(addressaBzjnqR, {from: accounts[4]});

		await expect(CourtFarming_HTStakebIN1xSd.stake.call(uintb8huXtl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakesBBVGsp = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintEAfbYo4 = BigInt("2008")
		const uintgZkebb0 = BigInt("1420")
		const boolvfL9sub = false
		const uintwNQ0vFT = BigInt("1426")
		const uint256JIlRdzE = await CourtFarming_HTStakesBBVGsp.lastUpdateBlock.call({from: accounts[3]});
		const uint256RkDFAYL = await CourtFarming_HTStakesBBVGsp.stake.call(uintEAfbYo4, {from: accounts[3]});
		const uint256YEqmcX = await CourtFarming_HTStakesBBVGsp.incvRewardClaim.call({from: accounts[0]});
		const uint256iIAd6yQ = await CourtFarming_HTStakesBBVGsp.blockNumber.call({from: accounts[0]});
		const uint256FnkgSsx = await CourtFarming_HTStakesBBVGsp.expectedRewardsToday.call(uintgZkebb0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Sx7F390 = await CourtFarming_HTStakesBBVGsp.unstake.call(uintwNQ0vFT, boolvfL9sub, {from: accounts[4]});

		assert.equal(uint256JIlRdzE, BigInt("1772"))
		await expect(CourtFarming_HTStakesBBVGsp.stake.call(uintEAfbYo4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyGh53Y0 = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresskK0wz4 = accounts[5]
		const boolrzsiLJz = false
		const uintwvtALgp = BigInt("1880")
		const uintnLy6hWj = BigInt("1057")
		const uintdad4a0F = BigInt("582")
		const uintfJd4haV = BigInt("552")
		const addresspJnt3WC = accounts[0]
		const addressJwBTwVR = await CourtFarming_HTStakeyGh53Y0.updateReward.call(addresskK0wz4, {from: accounts[0]});
		const uint256Dlgfjqw = await CourtFarming_HTStakeyGh53Y0.unstake.call(uintwvtALgp, boolrzsiLJz, {from: accounts[2]});
		await CourtFarming_HTStakeyGh53Y0.changeStakeParameters.call(uintfJd4haV, uintdad4a0F, uintnLy6hWj, {from: accounts[4]});
		const addressoK30hdz = await CourtFarming_HTStakeyGh53Y0.updateReward.call(addresspJnt3WC, {from: accounts[4]});

		await expect(CourtFarming_HTStakeyGh53Y0.unstake.call(uintwvtALgp, boolrzsiLJz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexvyjP5O = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresslkNThKl = accounts[0]
		const uinthUCs1z4 = BigInt("280")
		const uintqGjabMM = BigInt("1800")
		const uintHLEjxc4 = BigInt("744")
		const uints51IpVw = BigInt("544")
		const uintRGdoAP = BigInt("524")
		const addresswDHQHd6 = await CourtFarming_HTStakexvyjP5O.setCourtStake.call(addresslkNThKl, {from: accounts[4]});
		await CourtFarming_HTStakexvyjP5O.changeStakeParameters.call(uintHLEjxc4, uintqGjabMM, uinthUCs1z4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qYz20g8 = await CourtFarming_HTStakexvyjP5O.stake.call(uints51IpVw, {from: accounts[3]});
		const boolqf47OA = await CourtFarming_HTStakexvyjP5O.stakeIncvRewards.call(uintRGdoAP, {from: accounts[3]});

		await expect(CourtFarming_HTStakexvyjP5O.setCourtStake.call(addresslkNThKl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakep5nPdUn = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintbX3DstJ = BigInt("1570")
		const uinthdEWhKF = BigInt("1383")
		const uintMkmrsiU = BigInt("1764")
		const uintrFGZULw = BigInt("230")
		const addressyocXFkP = accounts[3]
		const uint256cUMTYyO = await CourtFarming_HTStakep5nPdUn.totalStaked.call({from: accounts[2]});
		const uint256Gwt6lhh = await CourtFarming_HTStakep5nPdUn.expectedRewardsToday.call(uintbX3DstJ, {from: accounts[2]});
		const uint256bgVLHxJ = await CourtFarming_HTStakep5nPdUn._stakeParametrsCalculation.call(uintrFGZULw, uintMkmrsiU, uinthdEWhKF, {from: accounts[2]});
		const uint256ydPbdhA = await CourtFarming_HTStakep5nPdUn.getCurrentTime.call({from: accounts[4]});
		const addressp8noEjC = await CourtFarming_HTStakep5nPdUn.setCourtStake.call(addressyocXFkP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256cUMTYyO, BigInt("0"))
		await expect(CourtFarming_HTStakep5nPdUn._stakeParametrsCalculation.call(uintrFGZULw, uintMkmrsiU, uinthdEWhKF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeZwnQik4 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressqcjD0cl = accounts[5]
		const uintPdgqoR6 = BigInt("423")
		const boolvbyEL4 = true
		const uintsmQcmfG = BigInt("727")
		const uint256CrFhnnp = await CourtFarming_HTStakeZwnQik4.balanceOf.call(addressqcjD0cl, {from: accounts[0]});
		const uint256TLTz5Ia = await CourtFarming_HTStakeZwnQik4.stake.call(uintPdgqoR6, {from: accounts[0]});
		const uint256e7maxds = await CourtFarming_HTStakeZwnQik4.blockNumber.call({from: accounts[0]});
		const uint256pzQx8jP = await CourtFarming_HTStakeZwnQik4.unstake.call(uintsmQcmfG, boolvbyEL4, {from: accounts[2]});

		assert.equal(uint256CrFhnnp, BigInt("0"))
		await expect(CourtFarming_HTStakeZwnQik4.stake.call(uintPdgqoR6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqcTYywi = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintkeppWqC = BigInt("1604")
		const uintLPPwlh7 = BigInt("656")
		const uintZlmdakY = BigInt("936")
		const uintoz7mWcu = BigInt("394")
		await CourtFarming_HTStakeqcTYywi.changeStakeParameters.call(uintZlmdakY, uintLPPwlh7, uintkeppWqC, {from: accounts[4]});
		const uint256RgFjdN = await CourtFarming_HTStakeqcTYywi.totalStaked.call({from: accounts[2]});
		const uint256JI2HiPL = await CourtFarming_HTStakeqcTYywi.stake.call(uintoz7mWcu, {from: accounts[1]});

		await expect(CourtFarming_HTStakeqcTYywi.changeStakeParameters.call(uintZlmdakY, uintLPPwlh7, uintkeppWqC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGvzvEDH = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintAi09QEQ = BigInt("83")
		const addressKjQATyj = accounts[3]
		const uint256jZ8csQn = await CourtFarming_HTStakeGvzvEDH.incvRewardClaim.call({from: accounts[2]});
		const uint256pNjTVli = await CourtFarming_HTStakeGvzvEDH.stake.call(uintAi09QEQ, {from: accounts[5]});
		const addressDzUGPbb = await CourtFarming_HTStakeGvzvEDH.updateReward.call(addressKjQATyj, {from: accounts[4]});
		const uint256z35xnqn = await CourtFarming_HTStakeGvzvEDH.incvRewardInfo.call({from: accounts[2]});
		const uint256TvKGWJ = await CourtFarming_HTStakeGvzvEDH.blockNumber.call({from: accounts[1]});

		assert.equal(uint256jZ8csQn, BigInt("0"))
		await expect(CourtFarming_HTStakeGvzvEDH.stake.call(uintAi09QEQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeZdRxM1n = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintrIZWY0c = BigInt("259")
		const uintVFGoDhf = BigInt("925")
		const uintDmJvN8R = BigInt("717")
		const boolWaGO9Sx = false
		const uintELYFIrT = BigInt("1130")
		const uint256PLs9bIO = await CourtFarming_HTStakeZdRxM1n.incvRewardInfo.call({from: accounts[2]});
		const uint256d2c3rc = await CourtFarming_HTStakeZdRxM1n.totalStaked.call({from: accounts[4]});
		await CourtFarming_HTStakeZdRxM1n.changeStakeParameters.call(uintDmJvN8R, uintVFGoDhf, uintrIZWY0c, {from: accounts[3]});
		const uint256A2q5kR = await CourtFarming_HTStakeZdRxM1n.blockNumber.call({from: accounts[0]});
		const uint256CEnhzTd = await CourtFarming_HTStakeZdRxM1n.unstake.call(uintELYFIrT, boolWaGO9Sx, {from: accounts[2]});
		const uint256M8pKy1 = await CourtFarming_HTStakeZdRxM1n.totalStaked.call({from: accounts[1]});

		assert.equal(uint256d2c3rc, BigInt("0"))
		await expect(CourtFarming_HTStakeZdRxM1n.changeStakeParameters.call(uintDmJvN8R, uintVFGoDhf, uintrIZWY0c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXlMoPau = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintVfxHw72 = BigInt("974")
		const uintmZ09iHM = BigInt("1370")
		const uintcp0w007 = BigInt("1933")
		const address61sqyB = accounts[3]
		await CourtFarming_HTStakeXlMoPau.changeStakeParameters.call(uintcp0w007, uintmZ09iHM, uintVfxHw72, {from: accounts[2]});
		const addressJvMVQ7F = await CourtFarming_HTStakeXlMoPau.getBeneficiaryInfo.call(address61sqyB, {from: accounts[4]});
		const uint256cHTt8xe = await CourtFarming_HTStakeXlMoPau.incvRewardClaim.call({from: accounts[4]});

		await expect(CourtFarming_HTStakeXlMoPau.changeStakeParameters.call(uintcp0w007, uintmZ09iHM, uintVfxHw72, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexvyjP5O = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintPEidCJO = BigInt("524")
		const addressTfG8GZd = accounts[2]
		const boolqf47OA = await CourtFarming_HTStakexvyjP5O.stakeIncvRewards.call(uintPEidCJO, {from: accounts[3]});
		const addressoHi57XV = await CourtFarming_HTStakexvyjP5O.setCourtStake.call(addressTfG8GZd, {from: accounts[2]});

		assert.equal(boolqf47OA, false)
		await expect(CourtFarming_HTStakexvyjP5O.setCourtStake.call(addressTfG8GZd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGvzvEDH = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintoHCUUwG = BigInt("0")
		const uintbRLrkmo = BigInt("1339")
		const uint256i4u4jbS = await CourtFarming_HTStakeGvzvEDH.lastUpdateBlock.call({from: accounts[4]});
		const uint256pNjTVli = await CourtFarming_HTStakeGvzvEDH.stake.call(uintoHCUUwG, {from: accounts[5]});
		const uint256acNfPk7 = await CourtFarming_HTStakeGvzvEDH.stake.call(uintbRLrkmo, {from: accounts[0]});
		const uint256z35xnqn = await CourtFarming_HTStakeGvzvEDH.incvRewardInfo.call({from: accounts[2]});
		const uint256TvKGWJ = await CourtFarming_HTStakeGvzvEDH.blockNumber.call({from: accounts[1]});

		assert.equal(uint256i4u4jbS, BigInt("1772"))
		await expect(CourtFarming_HTStakeGvzvEDH.stake.call(uintbRLrkmo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXlMoPau = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressFxByPIl = accounts[3]
		const uintjs3w2so = BigInt("974")
		const uintj2hWC9Q = BigInt("1358")
		const uintAAkURyL = BigInt("1929")
		const uintD2wPVkQ = BigInt("781")
		const uinti5zyuj = BigInt("1004")
		const uintoL2pXG6 = BigInt("1286")
		const addressUBefB0Y = await CourtFarming_HTStakeXlMoPau.setCourtStake.call(addressFxByPIl, {from: accounts[2]});
		const uint256vOWtPZ = await CourtFarming_HTStakeXlMoPau.blockNumber.call({from: accounts[4]});
		await CourtFarming_HTStakeXlMoPau.changeStakeParameters.call(uintAAkURyL, uintj2hWC9Q, uintjs3w2so, {from: accounts[2]});
		await CourtFarming_HTStakeXlMoPau.changeStakeParameters.call(uintoL2pXG6, uinti5zyuj, uintD2wPVkQ, {from: accounts[5]});

		await expect(CourtFarming_HTStakeXlMoPau.setCourtStake.call(addressFxByPIl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeASlEsyg = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCDRK2uZ = BigInt("1200")
		const uintkWPhYX6 = BigInt("1857")
		const uintdoOUjxV = BigInt("1551")
		const addressA38iQ1X = accounts[0]
		const addressqAOPG6C = accounts[2]
		const uintQ1RoU5i = BigInt("1399")
		const uint256cXOQt6o = await CourtFarming_HTStakeASlEsyg.lastUpdateBlock.call({from: accounts[1]});
		const uint256Zx08VVA = await CourtFarming_HTStakeASlEsyg.incvRewardInfo.call({from: accounts[3]});
		await CourtFarming_HTStakeASlEsyg.changeStakeParameters.call(uintdoOUjxV, uintkWPhYX6, uintCDRK2uZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sP3HQxx = await CourtFarming_HTStakeASlEsyg.rewards.call(addressA38iQ1X, {from: accounts[0]});
		const addressGzRyCl = await CourtFarming_HTStakeASlEsyg.setCourtStake.call(addressqAOPG6C, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dIpfSUD = await CourtFarming_HTStakeASlEsyg.expectedRewardsToday.call(uintQ1RoU5i, {from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXlMoPau = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolK7ATD5 = false
		const uintCtAtmo = BigInt("0")
		const boolHspBBXx = true
		const uintpvYXus = BigInt("1986")
		const uint256vxwKkvY = await CourtFarming_HTStakeXlMoPau.unstake.call(uintCtAtmo, boolK7ATD5, {from: accounts[0]});
		const uint256RsjHwP4 = await CourtFarming_HTStakeXlMoPau.unstake.call(uintpvYXus, boolHspBBXx, {from: accounts[2]});

		await expect(CourtFarming_HTStakeXlMoPau.unstake.call(uintpvYXus, boolHspBBXx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXlMoPau = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintrpyyfQa = BigInt("0")
		const addresshtPP8s = accounts[4]
		const uintM5y3wE1 = BigInt("1959")
		const uintdp2NhqA = BigInt("1747")
		const uint256zjDYLv = await CourtFarming_HTStakeXlMoPau.getCurrentTime.call({from: accounts[0]});
		const boolGLzTRM9 = await CourtFarming_HTStakeXlMoPau.stakeIncvRewards.call(uintrpyyfQa, {from: accounts[5]});
		const uint256a2330wt = await CourtFarming_HTStakeXlMoPau.balanceOf.call(addresshtPP8s, {from: accounts[5]});
		const boolTN5Otq = await CourtFarming_HTStakeXlMoPau.stakeIncvRewards.call(uintM5y3wE1, {from: accounts[2]});
		const uint256h7sVom = await CourtFarming_HTStakeXlMoPau.stake.call(uintdp2NhqA, {from: accounts[4]});

		assert.equal(boolGLzTRM9, false)
		assert.equal(boolTN5Otq, false)
		assert.equal(uint256a2330wt, BigInt("0"))
		assert.equal(uint256zjDYLv, BigInt("1630201265"))
		await expect(CourtFarming_HTStakeXlMoPau.stake.call(uintdp2NhqA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})