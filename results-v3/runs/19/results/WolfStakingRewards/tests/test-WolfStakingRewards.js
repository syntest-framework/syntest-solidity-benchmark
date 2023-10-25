const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringSg64rNW = "LjYXQqKMiIcsWqOLpljFVSJ1Tpx2F4Qtmndh6sofOlIW4RIkti6mzTfTpq8FPIWDx5aMsFwYQS3wOUdUgXBY6PXI6"
		const stringoYPHiOn = "KqX8cNaQaKkDX5WtvyAi4U2lHUnHZERSfHr6USh2g7Hjuj13Co9QjQHuzT8BrDM2GX4qOCP09fsMGLU"
		const uintioAz1Ob = BigInt("4")
		const WolfStakingRewardskK4w9sH = await WolfStakingRewards.new(stringSg64rNW, stringoYPHiOn, uintioAz1Ob, {from: accounts[3]});
		const uintdeBKxwa = BigInt("1501")
		const uint8h2ilg2o = await WolfStakingRewardskK4w9sH.decimals.call({from: accounts[4]});
		const uint256arrayigNZFGm = await WolfStakingRewardskK4w9sH.updateNotifyRewardAmount.call(uintdeBKxwa, {from: accounts[0]});
		await WolfStakingRewardskK4w9sH.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringePLYOv1 = "SGz"
		const stringR6M6d4H = "iFdVMbGqrTFpvnvJqD4UtQXYXh"
		const uintej2rZy = BigInt("246")
		const WolfStakingRewardsyz9pRIY = await WolfStakingRewards.new(stringePLYOv1, stringR6M6d4H, uintej2rZy, {from: accounts[3]});
		const uintV5zuXx = BigInt("581")
		const addressLeS8ZUW = "0x0000000000000000000000000000000000000001"
		const uintfswD1gT = BigInt("669")
		const uintByOp7Ij = BigInt("918")
		const uintPc2Juze = BigInt("1835")
		const addressFvBiBGG = accounts[4]
		const addressO6FOvAl = await WolfStakingRewardsyz9pRIY.updateReward.call(addressLeS8ZUW, uintV5zuXx, {from: accounts[2]});
		const uint8wGUBTjp = await WolfStakingRewardsyz9pRIY.decimals.call({from: accounts[1]});
		const uint256rpjN12c = await WolfStakingRewardsyz9pRIY.stake.call(uintByOp7Ij, uintfswD1gT, {from: accounts[5]});
		const stringm8DuXL4 = await WolfStakingRewardsyz9pRIY.name.call({from: accounts[0]});
		const uint256mmfR4A = await WolfStakingRewardsyz9pRIY.earned.call(addressFvBiBGG, uintPc2Juze, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresssSh4SkT = accounts[0]
		const addressz5vYxjb = accounts[4]
		const addressgSNgGK3 = accounts[4]
		const WolfStakingRewards3FgSwY = await WolfStakingRewards.new(addresssSh4SkT, addressz5vYxjb, addressgSNgGK3, {from: accounts[1]});
		const uinth7DbVfJ = BigInt("1026")
		const uintC3SW2J1 = BigInt("923")
		const uintESGX7wr = BigInt("1363")
		const uint256ikrgTiq = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uinth7DbVfJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MV9gZ22 = await WolfStakingRewards3FgSwY.totalSupplyPerPool.call(uintC3SW2J1, {from: accounts[1]});
		await WolfStakingRewards3FgSwY.nonReentrant.call({from: accounts[3]});
		await WolfStakingRewards3FgSwY.nonReentrant.call({from: accounts[5]});
		const uint256vFsA4a = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uintESGX7wr, {from: accounts[1]});

		assert.equal(uint256MV9gZ22, BigInt("0"))
		assert.equal(uint256ikrgTiq, BigInt("0"))
		await expect(WolfStakingRewards3FgSwY.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringHZK3r5s = "o2Bdw8ld6CK6"
		const stringwSswDPF = "EkckJxEPzMOSsHL"
		const uintA3LNcdw = BigInt("195")
		const WolfStakingRewardsqzZUvRG = await WolfStakingRewards.new(stringHZK3r5s, stringwSswDPF, uintA3LNcdw, {from: accounts[1]});
		const uintYxOGkO6 = BigInt("2")
		const addresskbNC8b = accounts[4]
		const uintfEDEwBA = BigInt("1126")
		const addressw90awIf = accounts[0]
		const uinteIakHmr = BigInt("1397")
		await WolfStakingRewardsqzZUvRG.onlyRewardsDistribution.call({from: accounts[2]});
		await WolfStakingRewardsqzZUvRG.onlyOwner.call({from: accounts[1]});
		const uint256RTvGwDt = await WolfStakingRewardsqzZUvRG.balanceOfPerPool.call(addresskbNC8b, uintYxOGkO6, {from: accounts[2]});
		const uint256dwiJLsx = await WolfStakingRewardsqzZUvRG.earned.call(addressw90awIf, uintfEDEwBA, {from: accounts[4]});
		const uint256arraypNA9DX2 = await WolfStakingRewardsqzZUvRG.updateNotifyRewardAmount.call(uinteIakHmr, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyNb2p1 = "UX4XP3XR1iXxJIbyrHJu9GUzTxAbyniLaqHmaj9fQ39dT97UDaw"
		const stringXE5YHOR = "1bXrTpcjP6v"
		const uintbsYY6J = BigInt("100")
		const WolfStakingRewardsVduPpSF = await WolfStakingRewards.new(stringyNb2p1, stringXE5YHOR, uintbsYY6J, {from: accounts[5]});
		const uintFpMitT3 = BigInt("485")
		const uintku58gD = BigInt("733")
		const uint8klBgKkN = await WolfStakingRewardsVduPpSF.decimals.call({from: accounts[5]});
		const uint256gcbflC1 = await WolfStakingRewardsVduPpSF.lastTimeRewardApplicable.call(uintFpMitT3, {from: accounts[4]});
		const uint256v1XD8Wa = await WolfStakingRewardsVduPpSF.totalSupplyPerPool.call(uintku58gD, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressBMDc10L = accounts[3]
		const addresspkmLuNm = accounts[2]
		const addresszjnVqwD = accounts[0]
		const WolfStakingRewards76uewk = await WolfStakingRewards.new(addressBMDc10L, addresspkmLuNm, addresszjnVqwD, {from: accounts[0]});
		const uintexVjAid = BigInt("629")
		const uintkFoq4t6 = BigInt("1057")
		const uint256xBIjOF = await WolfStakingRewards76uewk.rewardPerToken.call(uintexVjAid, {from: accounts[3]});
		const stringwBEqba2 = await WolfStakingRewards76uewk.symbol.call({from: accounts[1]});
		const uint256W9sUiv2 = await WolfStakingRewards76uewk.getRewardForDuration.call(uintkFoq4t6, {from: accounts[0]});

		assert.equal(uint256xBIjOF, BigInt("0"))
		await expect(WolfStakingRewards76uewk.symbol.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringTzBNMPC = "z1NWkMmQKDYclf8cp2AAeY5BOb5JMpTIfihwVWi7ovxjutHdEDGHwJXpP46IpbUJIcjluuAIg"
		const stringkSSXZeM = "qI2KJmlIKhpNOwDototeN92EqQkko24AvowpJDVLsuadF3P1kix3YzybcinSEnYr9t49HGmrS3nnQ5Ul6b0QwiRx3SRkmG080R"
		const uint3nAW8A = BigInt("37")
		const WolfStakingRewardsJn3dS06 = await WolfStakingRewards.new(stringTzBNMPC, stringkSSXZeM, uint3nAW8A, {from: "0x0000000000000000000000000000000000000001"});
		const uintno85HsK = BigInt("633")
		const uintM9IZMpm = BigInt("14")
		const uint256NOCL6Ka = await WolfStakingRewardsJn3dS06.totalSupplyPerPool.call(uintno85HsK, {from: accounts[0]});
		const stringRCjWR4d = await WolfStakingRewardsJn3dS06.name.call({from: accounts[4]});
		const uint256P3WQ2kq = await WolfStakingRewardsJn3dS06.exit.call(uintM9IZMpm, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkZhoAsI = "HXkELryzlmHzM1noRAckqDRXUSMhlSzlrmQApMuJ1plT96owCBO8rGuHDRc"
		const stringKNF3mut = "IwgcoHHHp687xNHCB"
		const uintoBD9xMm = BigInt("168")
		const WolfStakingRewardsw7hskq2 = await WolfStakingRewards.new(stringkZhoAsI, stringKNF3mut, uintoBD9xMm, {from: accounts[2]});
		const uintl7Mmpeg = BigInt("1158")
		const addressDjqsVua = "0x0000000000000000000000000000000000000001"
		const uintlXpZoH5 = BigInt("1923")
		const addressQiUR26d = accounts[3]
		const uint256NNgOBSq = await WolfStakingRewardsw7hskq2.balanceOfPerPool.call(addressDjqsVua, uintl7Mmpeg, {from: accounts[2]});
		const uint256TAyWIXl = await WolfStakingRewardsw7hskq2.balanceOfPerPool.call(addressQiUR26d, uintlXpZoH5, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPnVQAAj = "Wl2ktanlkPQsbrFPdtrCp2N"
		const stringXOeu8Wl = "8pGICUrvg9qSKVd4NWGAzGHcVqpAULdfMl4LHJRdw7wWk7Fd1heLYsYLDwmydUlPm0Uvtmxt9gJ99xYKvk3JVV"
		const uintDe3n1BK = BigInt("72")
		const WolfStakingRewards3I2Zxi = await WolfStakingRewards.new(stringPnVQAAj, stringXOeu8Wl, uintDe3n1BK, {from: accounts[1]});
		const uintVkkkUk = BigInt("1188")
		const uintGmwt1bd = BigInt("416")
		const uintNJSrssZ = BigInt("1342")
		const addressh0GTtmK = accounts[4]
		const uint256SUMp677 = await WolfStakingRewards3I2Zxi.withdrawRemainingBalance.call(uintGmwt1bd, uintVkkkUk, {from: accounts[0]});
		const addressWtv8rTG = await WolfStakingRewards3I2Zxi.updateReward.call(addressh0GTtmK, uintNJSrssZ, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKBN2byX = "usTw0Po4isyiDxDc3URzoqF8PAsPw94lwnqcI2GvIvH7MnOVGh8VHagxJEnqR3nZBxHUDLtxDuaCcLxfFJ1"
		const stringEOCaFf0 = "Et2bmu0eQEe1TUpNECiA4IeXLHKoJski8UhdG"
		const uintJM9nAKN = BigInt("141")
		const WolfStakingRewardsIrEuxvk = await WolfStakingRewards.new(stringKBN2byX, stringEOCaFf0, uintJM9nAKN, {from: accounts[1]});
		const uintXmbyTfG = BigInt("735")
		const uintBCe8vom = BigInt("668")
		const uint256FxHYn5T = await WolfStakingRewardsIrEuxvk.exit.call(uintXmbyTfG, {from: accounts[5]});
		const uint8VQoKMeO = await WolfStakingRewardsIrEuxvk.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256arraynrPy0O1 = await WolfStakingRewardsIrEuxvk.updateNotifyRewardAmount.call(uintBCe8vom, {from: accounts[4]});
		const uint8NHcOlTc = await WolfStakingRewardsIrEuxvk.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressTadbl7b = accounts[0]
		const addressMGFUhlp = accounts[4]
		const addressOtK6uGK = accounts[4]
		const WolfStakingRewards3FgSwY = await WolfStakingRewards.new(addressTadbl7b, addressMGFUhlp, addressOtK6uGK, {from: accounts[1]});
		const uintytFCLyu = BigInt("1026")
		const uintym1J7Ho = BigInt("158")
		const addressiW8zBt9 = accounts[0]
		const uint87ZTS1 = BigInt("923")
		const uintugWxv2l = BigInt("1363")
		const uint256ikrgTiq = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uintytFCLyu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vdpeXKO = await WolfStakingRewards3FgSwY.earned.call(addressiW8zBt9, uintym1J7Ho, {from: accounts[5]});
		const uint256MV9gZ22 = await WolfStakingRewards3FgSwY.totalSupplyPerPool.call(uint87ZTS1, {from: accounts[1]});
		await WolfStakingRewards3FgSwY.nonReentrant.call({from: accounts[3]});
		await WolfStakingRewards3FgSwY.nonReentrant.call({from: accounts[5]});
		const uint256vFsA4a = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uintugWxv2l, {from: accounts[1]});

		assert.equal(uint256MV9gZ22, BigInt("0"))
		assert.equal(uint256ikrgTiq, BigInt("0"))
		assert.equal(uint256vdpeXKO, BigInt("0"))
		await expect(WolfStakingRewards3FgSwY.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringhbA3p0Y = "h6cHtPqPsB5TpbJqk7B5q3SY7ITMyD6TSTz"
		const stringJjq8d1m = "GwR7fXJadtHT4cB3WA4i863"
		const uintiIKtJ9Q = BigInt("147")
		const WolfStakingRewardsk6Hr3cU = await WolfStakingRewards.new(stringhbA3p0Y, stringJjq8d1m, uintiIKtJ9Q, {from: "0x0000000000000000000000000000000000000001"});
		const uintfm0z0es = BigInt("1190")
		const uintVnWPZQ = BigInt("1160")
		const uintY01ic4B = BigInt("412")
		const addressVW2Expj = accounts[3]
		const uintcsYSbp0 = BigInt("738")
		const uintyVvFxnI = BigInt("707")
		const uint256Wc9NUId = await WolfStakingRewardsk6Hr3cU.withdraw.call(uintVnWPZQ, uintfm0z0es, {from: accounts[1]});
		const uint256MMEefX9 = await WolfStakingRewardsk6Hr3cU.earned.call(addressVW2Expj, uintY01ic4B, {from: accounts[2]});
		const uint256Ty7mVzi = await WolfStakingRewardsk6Hr3cU.lastTimeRewardApplicable.call(uintcsYSbp0, {from: accounts[1]});
		const stringuFU0IiZ = await WolfStakingRewardsk6Hr3cU.name.call({from: accounts[3]});
		await WolfStakingRewardsk6Hr3cU.onlyOwner.call({from: accounts[3]});
		const uint256arrayFnfo6nR = await WolfStakingRewardsk6Hr3cU.updateNotifyRewardAmount.call(uintyVvFxnI, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressvVZdqu = accounts[0]
		const addressVILfkbP = accounts[4]
		const addressFDP3ncr = accounts[4]
		const WolfStakingRewards3FgSwY = await WolfStakingRewards.new(addressvVZdqu, addressVILfkbP, addressFDP3ncr, {from: accounts[1]});
		const uintREOMQ0i = BigInt("325")
		const uintOkz0FMZ = BigInt("1026")
		const uintceXFjpy = BigInt("158")
		const addressOVvmT6D = accounts[4]
		const uintnUVkXz = BigInt("923")
		const uintIHx0GZF = BigInt("827")
		const uintKvQtUM = BigInt("1570")
		const uintW4KtyLt = BigInt("1363")
		const uintGaqTneN = BigInt("74")
		const uintKo2K7kx = BigInt("334")
		const uint256O0iJGxn = await WolfStakingRewards3FgSwY.exit.call(uintREOMQ0i, {from: accounts[2]});
		const uint256ikrgTiq = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uintOkz0FMZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vdpeXKO = await WolfStakingRewards3FgSwY.earned.call(addressOVvmT6D, uintceXFjpy, {from: accounts[5]});
		const uint256MV9gZ22 = await WolfStakingRewards3FgSwY.totalSupplyPerPool.call(uintnUVkXz, {from: accounts[1]});
		await WolfStakingRewards3FgSwY.nonReentrant.call({from: accounts[3]});
		const uint2564Jzi3H = await WolfStakingRewards3FgSwY.withdrawRemainingBalance.call(uintKvQtUM, uintIHx0GZF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vFsA4a = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uintW4KtyLt, {from: accounts[1]});
		await WolfStakingRewards3FgSwY.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256M9BXLrI = await WolfStakingRewards3FgSwY.withdraw.call(uintKo2K7kx, uintGaqTneN, {from: accounts[2]});

		await expect(WolfStakingRewards3FgSwY.exit.call(uintREOMQ0i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresseeAmceO = accounts[0]
		const addresse0Tghxu = accounts[4]
		const addressotAUjnw = accounts[4]
		const WolfStakingRewards3FgSwY = await WolfStakingRewards.new(addresseeAmceO, addresse0Tghxu, addressotAUjnw, {from: accounts[1]});
		const uinthq8hb7g = BigInt("1026")
		const uintcEJ4O8T = BigInt("1197")
		const addressWvH45dL = accounts[2]
		const uintWTGp8be = BigInt("158")
		const addressjoWjmlZ = accounts[0]
		const uintREd3Qi3 = BigInt("923")
		const uintqn67WG8 = BigInt("827")
		const uintWHwmbJ0 = BigInt("1570")
		const uintqHdF0dy = BigInt("1363")
		const uint256ikrgTiq = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uinthq8hb7g, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FdrYuFW = await WolfStakingRewards3FgSwY.earned.call(addressWvH45dL, uintcEJ4O8T, {from: accounts[0]});
		const uint256vdpeXKO = await WolfStakingRewards3FgSwY.earned.call(addressjoWjmlZ, uintWTGp8be, {from: accounts[5]});
		const uint256MV9gZ22 = await WolfStakingRewards3FgSwY.totalSupplyPerPool.call(uintREd3Qi3, {from: accounts[1]});
		const uint2564Jzi3H = await WolfStakingRewards3FgSwY.withdrawRemainingBalance.call(uintWHwmbJ0, uintqn67WG8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vFsA4a = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uintqHdF0dy, {from: accounts[1]});
		await WolfStakingRewards3FgSwY.onlyRewardsDistribution.call({from: accounts[4]});

		assert.equal(uint256FdrYuFW, BigInt("0"))
		assert.equal(uint256MV9gZ22, BigInt("0"))
		assert.equal(uint256ikrgTiq, BigInt("0"))
		assert.equal(uint256vdpeXKO, BigInt("0"))
		await expect(WolfStakingRewards3FgSwY.withdrawRemainingBalance.call(uintWHwmbJ0, uintqn67WG8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringVCahpWp = "32enCRo4d5nBWT3ahSIdO6nuG52towA7E6j2figtKtcjJN7TsZL4BO5XJBSmJuOPmN8hvcv29JBmypjaJe5PtCeZ2MuQCK"
		const stringhYwMOL = "oJ27Ie47zkq0pykkQI81XWpDl2xEnmbJQ1XrBmBmpEpUDYswgZ2daEajRfWiGx5jIDys3gS"
		const uintbQ62Ugg = BigInt("190")
		const WolfStakingRewardsKeCP0fn = await WolfStakingRewards.new(stringVCahpWp, stringhYwMOL, uintbQ62Ugg, {from: accounts[3]});
		const uintmE3krcc = BigInt("585")
		const uinttuVSGT = BigInt("63")
		const uintWQg2jh = BigInt("1331")
		const uint256yKviFhQ = await WolfStakingRewardsKeCP0fn.lastTimeRewardApplicable.call(uintmE3krcc, {from: accounts[0]});
		const uint256hkwqPnX = await WolfStakingRewardsKeCP0fn.totalSupplyPerPool.call(uinttuVSGT, {from: accounts[4]});
		const stringGQEW2d = await WolfStakingRewardsKeCP0fn.symbol.call({from: accounts[0]});
		const uint256arraycKIpcLD = await WolfStakingRewardsKeCP0fn.updateNotifyRewardAmount.call(uintWQg2jh, {from: accounts[3]});
		await WolfStakingRewardsKeCP0fn.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressIXL8UkM = accounts[3]
		const addressaj45h15 = accounts[2]
		const addressDAUVAy = accounts[0]
		const WolfStakingRewards76uewk = await WolfStakingRewards.new(addressIXL8UkM, addressaj45h15, addressDAUVAy, {from: accounts[0]});
		const uintgic2arv = BigInt("629")
		const uintXLCfBHl = BigInt("1057")
		const uint256xBIjOF = await WolfStakingRewards76uewk.rewardPerToken.call(uintgic2arv, {from: accounts[3]});
		const uint256W9sUiv2 = await WolfStakingRewards76uewk.getRewardForDuration.call(uintXLCfBHl, {from: accounts[0]});

		assert.equal(uint256xBIjOF, BigInt("0"))
		await expect(WolfStakingRewards76uewk.getRewardForDuration.call(uintXLCfBHl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringe2fDyPx = "u6vD4SMTidIdRSkfZKUWUUtdyasQ613SDxnB2gInL6MJyTK"
		const stringWkwVBFN = "a1ZyAS"
		const uintIqolUsj = BigInt("228")
		const WolfStakingRewardssuNpP0G = await WolfStakingRewards.new(stringe2fDyPx, stringWkwVBFN, uintIqolUsj, {from: accounts[0]});
		const uintqJ98PYp = BigInt("853")
		const uintgZ55Sp = BigInt("1991")
		await WolfStakingRewardssuNpP0G.nonReentrant.call({from: accounts[2]});
		const stringsybCuC7 = await WolfStakingRewardssuNpP0G.symbol.call({from: accounts[5]});
		const uint256TNhn2b = await WolfStakingRewardssuNpP0G.stake.call(uintgZ55Sp, uintqJ98PYp, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressN4zxXqy = accounts[3]
		const addresszDnUTqn = accounts[2]
		const addressZroqB7z = accounts[0]
		const WolfStakingRewards76uewk = await WolfStakingRewards.new(addressN4zxXqy, addresszDnUTqn, addressZroqB7z, {from: accounts[0]});
		const uintKqHx94H = BigInt("97")
		const uintjDoxRqZ = BigInt("800")
		const uinthK1IGYd = BigInt("1057")
		const uint256arrayNOWIhBp = await WolfStakingRewards76uewk.updateNotifyRewardAmount.call(uintKqHx94H, {from: accounts[3]});
		const uint256xBIjOF = await WolfStakingRewards76uewk.rewardPerToken.call(uintjDoxRqZ, {from: accounts[3]});
		const uint256W9sUiv2 = await WolfStakingRewards76uewk.getRewardForDuration.call(uinthK1IGYd, {from: accounts[0]});

		await expect(WolfStakingRewards76uewk.updateNotifyRewardAmount.call(uintKqHx94H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresstUilA0u = accounts[5]
		const addresse0v3Qlc = accounts[3]
		const addressC9VOMFx = accounts[0]
		const WolfStakingRewardsgsJl31B = await WolfStakingRewards.new(addresstUilA0u, addresse0v3Qlc, addressC9VOMFx, {from: "0x0000000000000000000000000000000000000001"});
		const uintdeY3JVT = BigInt("132")
		const uintqq2oFjP = BigInt("831")
		const uintYwkJCVI = BigInt("1894")
		const uintjrJASEt = BigInt("1716")
		const uint256b6uMmjs = await WolfStakingRewardsgsJl31B.stake.call(uintqq2oFjP, uintdeY3JVT, {from: accounts[1]});
		const uint256llr3glI = await WolfStakingRewardsgsJl31B.lastTimeRewardApplicable.call(uintYwkJCVI, {from: accounts[2]});
		const uint256xSFSl7P = await WolfStakingRewardsgsJl31B.rewardPerToken.call(uintjrJASEt, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsgsJl31B.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressTm8VCBe = accounts[0]
		const addressp5g76aL = accounts[4]
		const addressLVi9N6P = accounts[4]
		const WolfStakingRewards3FgSwY = await WolfStakingRewards.new(addressTm8VCBe, addressp5g76aL, addressLVi9N6P, {from: accounts[1]});
		const uintul3PJMC = BigInt("1026")
		const uintIxPU1WZ = BigInt("158")
		const addressoMevbH = accounts[0]
		const uintf2eCngf = BigInt("438")
		const uintSYVtteb = BigInt("1300")
		const uintZUwWWaw = BigInt("923")
		const uintImfqMke = BigInt("1578")
		const uintu3dMIJG = BigInt("827")
		const uintm8jWJfM = BigInt("1570")
		const uintybdrUoq = BigInt("1363")
		const uint256ikrgTiq = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uintul3PJMC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vdpeXKO = await WolfStakingRewards3FgSwY.earned.call(addressoMevbH, uintIxPU1WZ, {from: accounts[5]});
		const uint256avjqlE = await WolfStakingRewards3FgSwY.withdraw.call(uintSYVtteb, uintf2eCngf, {from: accounts[1]});
		const stringPIum2KY = await WolfStakingRewards3FgSwY.symbol.call({from: accounts[5]});
		const uint256MV9gZ22 = await WolfStakingRewards3FgSwY.totalSupplyPerPool.call(uintZUwWWaw, {from: accounts[1]});
		const uintjvbHQBi = await WolfStakingRewards3FgSwY.getReward.call(uintImfqMke, {from: accounts[5]});
		await WolfStakingRewards3FgSwY.nonReentrant.call({from: accounts[3]});
		const uint2564Jzi3H = await WolfStakingRewards3FgSwY.withdrawRemainingBalance.call(uintm8jWJfM, uintu3dMIJG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vFsA4a = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uintybdrUoq, {from: accounts[1]});
		await WolfStakingRewards3FgSwY.onlyRewardsDistribution.call({from: accounts[4]});

		assert.equal(uint256ikrgTiq, BigInt("0"))
		assert.equal(uint256vdpeXKO, BigInt("0"))
		await expect(WolfStakingRewards3FgSwY.withdraw.call(uintSYVtteb, uintf2eCngf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringM6KZU0A = "57TaRublaX7fxHc"
		const stringGo4OdvU = "trcVvEyiDsUvgvBKEsMH6edHU3TPtS22cX"
		const uintbhX1f1o = BigInt("44")
		const WolfStakingRewardsl1NMcge = await WolfStakingRewards.new(stringM6KZU0A, stringGo4OdvU, uintbhX1f1o, {from: accounts[0]});
		const uintPEdjMV = BigInt("1607")
		const uintbZj5KeC = BigInt("314")
		const addressIKcz8HP = accounts[1]
		const uint256LHftiQE = await WolfStakingRewardsl1NMcge.rewardPerToken.call(uintPEdjMV, {from: accounts[0]});
		const stringC3vfIMR = await WolfStakingRewardsl1NMcge.symbol.call({from: accounts[2]});
		const uint256EAXW0hN = await WolfStakingRewardsl1NMcge.earned.call(addressIKcz8HP, uintbZj5KeC, {from: accounts[1]});
		const stringOrR7l69 = await WolfStakingRewardsl1NMcge.name.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressTod7nts = accounts[0]
		const addresstkIBOad = accounts[4]
		const addressHkZU8bl = accounts[4]
		const WolfStakingRewards3FgSwY = await WolfStakingRewards.new(addressTod7nts, addresstkIBOad, addressHkZU8bl, {from: accounts[1]});
		const uintkNxqXd = BigInt("1026")
		const uinthCCJXVm = BigInt("158")
		const addressejNRAx = accounts[0]
		const uintyaVGlqt = BigInt("1951")
		const addressyHXG9xW = accounts[4]
		const uintTj4YKq3 = BigInt("923")
		const uinteuEHEAi = BigInt("827")
		const uintJXLmwqa = BigInt("1570")
		const uintSYAeH1 = BigInt("1363")
		const uintfik5344 = BigInt("900")
		const uintmELyxVl = BigInt("221")
		const uint256ikrgTiq = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uintkNxqXd, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vdpeXKO = await WolfStakingRewards3FgSwY.earned.call(addressejNRAx, uinthCCJXVm, {from: accounts[5]});
		const uint256C3TsJjr = await WolfStakingRewards3FgSwY.balanceOfPerPool.call(addressyHXG9xW, uintyaVGlqt, {from: accounts[5]});
		const uint256MV9gZ22 = await WolfStakingRewards3FgSwY.totalSupplyPerPool.call(uintTj4YKq3, {from: accounts[1]});
		await WolfStakingRewards3FgSwY.nonReentrant.call({from: accounts[3]});
		const uint2564Jzi3H = await WolfStakingRewards3FgSwY.withdrawRemainingBalance.call(uintJXLmwqa, uinteuEHEAi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vFsA4a = await WolfStakingRewards3FgSwY.lastTimeRewardApplicable.call(uintSYAeH1, {from: accounts[1]});
		await WolfStakingRewards3FgSwY.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256AcxYWeM = await WolfStakingRewards3FgSwY.stake.call(uintmELyxVl, uintfik5344, {from: accounts[4]});

		assert.equal(uint256C3TsJjr, BigInt("0"))
		assert.equal(uint256MV9gZ22, BigInt("0"))
		assert.equal(uint256ikrgTiq, BigInt("0"))
		assert.equal(uint256vdpeXKO, BigInt("0"))
		await expect(WolfStakingRewards3FgSwY.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressZaPyVtH = accounts[3]
		const addressVMsqekW = accounts[2]
		const addressk2c3JC3 = accounts[0]
		const WolfStakingRewards76uewk = await WolfStakingRewards.new(addressZaPyVtH, addressVMsqekW, addressk2c3JC3, {from: accounts[0]});
		const uintX59jBW = BigInt("629")
		const uintJIzZ9M = BigInt("1410")
		const uintpmKe0IF = BigInt("1120")
		const uintjPhZyq = BigInt("1057")
		const uint256xBIjOF = await WolfStakingRewards76uewk.rewardPerToken.call(uintX59jBW, {from: accounts[3]});
		const uint256up59GSD = await WolfStakingRewards76uewk.stake.call(uintpmKe0IF, uintJIzZ9M, {from: accounts[2]});
		const uint256W9sUiv2 = await WolfStakingRewards76uewk.getRewardForDuration.call(uintjPhZyq, {from: accounts[0]});

		assert.equal(uint256xBIjOF, BigInt("0"))
		await expect(WolfStakingRewards76uewk.stake.call(uintpmKe0IF, uintJIzZ9M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringPbWx0v5 = "NmyBoKDxDFnJy7utx7m5I3VuCckXamKEoxkrJbG5"
		const stringSmIovmM = "DRGw05U8osAX3umfXCqTNevRPpsdJQV6zgaeY3TG31DZ4n1ISacEpwQXHIH1o8j4vjbdthJqmC3RMQft76APiJCranJ"
		const uintlzVLtf = BigInt("231")
		const WolfStakingRewardsb1IHED2 = await WolfStakingRewards.new(stringPbWx0v5, stringSmIovmM, uintlzVLtf, {from: "0x0000000000000000000000000000000000000001"});
		const uintsdSMLxk = BigInt("73")
		const addressli5J4xw = "0x0000000000000000000000000000000000000001"
		const uintNKi7Vr2 = BigInt("222")
		const addressCDH5UuY = accounts[2]
		const uintXuY1dxJ = BigInt("785")
		const uintz1Z5C4L = BigInt("1722")
		const uintu1xfifH = BigInt("151")
		const addressP66U3pB = accounts[2]
		const addressGYCN6BW = await WolfStakingRewardsb1IHED2.updateReward.call(addressli5J4xw, uintsdSMLxk, {from: "0x0000000000000000000000000000000000000001"});
		const addressBurgZ1I = await WolfStakingRewardsb1IHED2.updateReward.call(addressCDH5UuY, uintNKi7Vr2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RfYRaYF = await WolfStakingRewardsb1IHED2.getRewardForDuration.call(uintXuY1dxJ, {from: accounts[3]});
		const uintVx5PS1p = await WolfStakingRewardsb1IHED2.getReward.call(uintz1Z5C4L, {from: accounts[1]});
		const uint256vUImBAE = await WolfStakingRewardsb1IHED2.balanceOfPerPool.call(addressP66U3pB, uintu1xfifH, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvQ9HNFQ = "TGI9N6WeN7HiL4kqvyPeEfyk6i2mFLk6ajrZ3"
		const stringYvUsBz9 = "GN3RBuKo5BAmT"
		const uintqADb2u3 = BigInt("61")
		const WolfStakingRewardsmyAqgLA = await WolfStakingRewards.new(stringvQ9HNFQ, stringYvUsBz9, uintqADb2u3, {from: accounts[4]});
		const uintCEEwKyy = BigInt("672")
		const addresskt8qllW = accounts[3]
		const uintIdXFZg = BigInt("1759")
		const uintJ74wqOY = BigInt("693")
		const uintzjjPEi = BigInt("1288")
		const addresskr52IXI = await WolfStakingRewardsmyAqgLA.updateReward.call(addresskt8qllW, uintCEEwKyy, {from: accounts[5]});
		const uint256EK2PdVu = await WolfStakingRewardsmyAqgLA.withdrawRemainingBalance.call(uintJ74wqOY, uintIdXFZg, {from: accounts[1]});
		const uintxbthgBR = await WolfStakingRewardsmyAqgLA.getReward.call(uintzjjPEi, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxCSfAM = "I3scguLIpPKRy9Mdh3fp6LUAQepNk9hf69kfoJINllkGDGHHUY6BSRvE"
		const stringcLgJ2Jj = "NMWcgh2qT2x5wsosw6uAdz63JzUEO3uJRSkkWF6tmpwgFtPHsLVcITyoCOsjsuhzf1q5SiZNcOHK2dkAi2A"
		const uintQutZLgH = BigInt("202")
		const WolfStakingRewardswaWWyE4 = await WolfStakingRewards.new(stringxCSfAM, stringcLgJ2Jj, uintQutZLgH, {from: accounts[5]});
		const uintXtLoG1r = BigInt("1706")
		const uintSaATyDy = BigInt("1998")
		const uinto35GeMX = BigInt("1247")
		const addresss3NghRD = accounts[5]
		const uint8ttv3LYf = await WolfStakingRewardswaWWyE4.decimals.call({from: accounts[2]});
		const uint256on7Mhf = await WolfStakingRewardswaWWyE4.lastTimeRewardApplicable.call(uintXtLoG1r, {from: accounts[1]});
		await WolfStakingRewardswaWWyE4.nonReentrant.call({from: accounts[4]});
		const uint256uB7V8ub = await WolfStakingRewardswaWWyE4.totalSupplyPerPool.call(uintSaATyDy, {from: accounts[0]});
		const uint256h4p6Wcx = await WolfStakingRewardswaWWyE4.earned.call(addresss3NghRD, uinto35GeMX, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYSRhsyr = "q7N6Vx2XBl7s6WawecQwCn294BH5KBETW57EuugYIBVdrKECCkANurwTWjFuu8h0djYBEDWIR8Z1KQM5nIArfglKQ"
		const string0OpdQK = "3xISAPZYaJO8M1KJRE3EHwrKN23PorxsBkL"
		const uintCx2H9Qd = BigInt("225")
		const WolfStakingRewardspnVEeN = await WolfStakingRewards.new(stringYSRhsyr, string0OpdQK, uintCx2H9Qd, {from: accounts[2]});
		const uintHR9DXIx = BigInt("622")
		const uint484Slh = BigInt("1603")
		const addressRQxRQPB = "0x0000000000000000000000000000000000000001"
		const uint256eqSpr3P = await WolfStakingRewardspnVEeN.rewardPerToken.call(uintHR9DXIx, {from: accounts[1]});
		const uint256Ta8NIC2 = await WolfStakingRewardspnVEeN.balanceOfPerPool.call(addressRQxRQPB, uint484Slh, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresslVvpKP = accounts[3]
		const addressoBDuUHK = accounts[2]
		const addressarvPYGd = accounts[0]
		const WolfStakingRewards76uewk = await WolfStakingRewards.new(addresslVvpKP, addressoBDuUHK, addressarvPYGd, {from: accounts[0]});
		const uintHVAkjXI = BigInt("721")
		const uintU6UcB4o = BigInt("515")
		const uintggNAflr = BigInt("1254")
		const uintzvCZEDt = BigInt("1120")
		const uintt0deU8 = BigInt("1057")
		const uint256xBIjOF = await WolfStakingRewards76uewk.rewardPerToken.call(uintHVAkjXI, {from: accounts[3]});
		const uintGWvgwlc = await WolfStakingRewards76uewk.getReward.call(uintU6UcB4o, {from: accounts[3]});
		const uint256up59GSD = await WolfStakingRewards76uewk.stake.call(uintzvCZEDt, uintggNAflr, {from: accounts[2]});
		const uint256W9sUiv2 = await WolfStakingRewards76uewk.getRewardForDuration.call(uintt0deU8, {from: accounts[0]});

		assert.equal(uint256xBIjOF, BigInt("0"))
		await expect(WolfStakingRewards76uewk.stake.call(uintzvCZEDt, uintggNAflr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringTUSqgSU = "nscirKLMs6yYbINjdVAAIQxcYX3wP8duCxIjfY14QUFadvJcYoKjDT2pJrZmhk6NkbCu"
		const stringIlpJFR1 = "2mLNAOykOYSmPPAwDXWjcK"
		const uintdhoKaA = BigInt("8")
		const WolfStakingRewardsMpB54mn = await WolfStakingRewards.new(stringTUSqgSU, stringIlpJFR1, uintdhoKaA, {from: accounts[2]});
		const uintBsrgYS = BigInt("1912")
		const uintswpzUxK = BigInt("1041")
		const uintnuVC1XZ = BigInt("1358")
		const uint8wzHcfG = await WolfStakingRewardsMpB54mn.decimals.call({from: accounts[0]});
		const uint256mMVhrhW = await WolfStakingRewardsMpB54mn.lastTimeRewardApplicable.call(uintBsrgYS, {from: accounts[1]});
		const uint256daWa62T = await WolfStakingRewardsMpB54mn.rewardPerToken.call(uintswpzUxK, {from: "0x0000000000000000000000000000000000000001"});
		const stringkoPvYOW = await WolfStakingRewardsMpB54mn.symbol.call({from: accounts[2]});
		const uint256pIcFBtM = await WolfStakingRewardsMpB54mn.exit.call(uintnuVC1XZ, {from: accounts[4]});
		await WolfStakingRewardsMpB54mn.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringL5oFTmd = "DulPSkX7qPERhnP0MsXH5CENdXNGtmsBRWr8tr8s7q6pM1YciKcVIiPRYWXdcntFpccn68Zn"
		const stringvXjApBu = "us9OKIXaqScM1nTYSkxWcRhlkYCJ2FYjJ2YXevSDjSJqIr16DOyt4JMDhN7iU33Iiira8irM9XwbrWFYRpqCB6feR2f9NvDE"
		const uintBJ8hatv = BigInt("229")
		const WolfStakingRewardsmDtcoPB = await WolfStakingRewards.new(stringL5oFTmd, stringvXjApBu, uintBJ8hatv, {from: accounts[4]});
		const uintCaEOasM = BigInt("448")
		const uintGeUbQJa = BigInt("509")
		const uintg4CGJE = BigInt("486")
		const uintwrrHn4L = BigInt("528")
		const addressdHtfdM = accounts[4]
		const uintxfqHj0l = BigInt("919")
		const uintcal0XJK = BigInt("1525")
		const uint256BdfuME = await WolfStakingRewardsmDtcoPB.stake.call(uintGeUbQJa, uintCaEOasM, {from: accounts[2]});
		const uint256wojjBUU = await WolfStakingRewardsmDtcoPB.rewardPerToken.call(uintg4CGJE, {from: accounts[4]});
		const addressYKxkxl3 = await WolfStakingRewardsmDtcoPB.updateReward.call(addressdHtfdM, uintwrrHn4L, {from: accounts[2]});
		const uint256OLaZmap = await WolfStakingRewardsmDtcoPB.stake.call(uintcal0XJK, uintxfqHj0l, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCcShK0T = "ooM"
		const stringl1wJNq5 = "KKpok2e7g2iJuMtkpmYtwt1LJshl1hEXdC2cqV6jNNqs6jaWlXlS4IIGVsJbU5i"
		const uintHRTjUTV = BigInt("144")
		const WolfStakingRewardshwQq2qH = await WolfStakingRewards.new(stringCcShK0T, stringl1wJNq5, uintHRTjUTV, {from: accounts[1]});
		const uintc99XaYV = BigInt("1113")
		const uintd0bG0Ee = BigInt("726")
		const addressA0m7CTI = accounts[4]
		const uintPid3b2s = BigInt("438")
		const uintaggLV8b = BigInt("1226")
		const uint256arrayH6RFaEj = await WolfStakingRewardshwQq2qH.updateNotifyRewardAmount.call(uintc99XaYV, {from: "0x0000000000000000000000000000000000000001"});
		const addressrNOCk8s = await WolfStakingRewardshwQq2qH.updateReward.call(addressA0m7CTI, uintd0bG0Ee, {from: accounts[4]});
		const uint256VsNIKCd = await WolfStakingRewardshwQq2qH.getRewardForDuration.call(uintPid3b2s, {from: accounts[3]});
		const uint256XahWDZT = await WolfStakingRewardshwQq2qH.exit.call(uintaggLV8b, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGRE0RsD = "nRNllR70SXwn429pjZ6ay5qihyoLf3vKds6o4hHnIpUfidiipp8jLMVWShtDXVw2q1h6r3CohWjMFeKF"
		const string1lrFW3 = "DauCgqWPUZdSPNpFI9eXEl43K2KcAtvF429qhaD16QyUlGPpbMl5wYyzQl3Zr0Nh7ikufrgNQMx9qRQeh3WTom"
		const uintsOZmxcO = BigInt("105")
		const WolfStakingRewardshEXlG5u = await WolfStakingRewards.new(stringGRE0RsD, string1lrFW3, uintsOZmxcO, {from: accounts[1]});
		const uintcajiUV9 = BigInt("223")
		const addressvNtde8 = accounts[2]
		const uintkNNVatA = BigInt("787")
		const uintSp81qPX = BigInt("519")
		const uintAaIneFS = BigInt("1852")
		const uintLW994aP = BigInt("1304")
		await WolfStakingRewardshEXlG5u.onlyRewardsDistribution.call({from: accounts[0]});
		const addresska1HMmk = await WolfStakingRewardshEXlG5u.updateReward.call(addressvNtde8, uintcajiUV9, {from: accounts[0]});
		const uint256iNFEo5t = await WolfStakingRewardshEXlG5u.withdraw.call(uintSp81qPX, uintkNNVatA, {from: accounts[1]});
		const uint256cL8Zk1t = await WolfStakingRewardshEXlG5u.withdrawRemainingBalance.call(uintLW994aP, uintAaIneFS, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKd2KnSc = "dC9G9eOVfFmMOEPeVC6vzxQ8sfc5FuTzdUt"
		const stringxi296jd = "rQ1yNtaci5FvcjqN27jyJwwmsdvJW4SAggiur69Vqv21M6v8SoiQhs"
		const uintcJ2r7VY = BigInt("149")
		const WolfStakingRewards0okljb = await WolfStakingRewards.new(stringKd2KnSc, stringxi296jd, uintcJ2r7VY, {from: accounts[3]});
		const uint00p7As = BigInt("1864")
		const addressrbxX4AJ = accounts[2]
		const uintAyEB07W = BigInt("208")
		const uinttxyn9E6 = BigInt("585")
		const uintLarnD67 = BigInt("1190")
		const uintqlCCzW = BigInt("702")
		const uint256ZjHPHBT = await WolfStakingRewards0okljb.balanceOfPerPool.call(addressrbxX4AJ, uint00p7As, {from: accounts[2]});
		const uint256sooKqUX = await WolfStakingRewards0okljb.withdraw.call(uinttxyn9E6, uintAyEB07W, {from: accounts[4]});
		const uint256fNvLMOB = await WolfStakingRewards0okljb.stake.call(uintqlCCzW, uintLarnD67, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressRMDi88 = accounts[3]
		const addressbbJSzKg = accounts[2]
		const addressKRGvbL = accounts[0]
		const WolfStakingRewards76uewk = await WolfStakingRewards.new(addressRMDi88, addressbbJSzKg, addressKRGvbL, {from: accounts[0]});
		const uintbtW1X3R = BigInt("763")
		const uintiFS3kfH = BigInt("1109")
		const uintrHjkCTO = BigInt("12")
		const uint3ZAngt = BigInt("1410")
		const uintaJqQpxc = BigInt("1120")
		const uint256LViFe4f = await WolfStakingRewards76uewk.withdrawRemainingBalance.call(uintiFS3kfH, uintbtW1X3R, {from: accounts[0]});
		const uint256ePvP6rF = await WolfStakingRewards76uewk.getRewardForDuration.call(uintrHjkCTO, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewards76uewk.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256up59GSD = await WolfStakingRewards76uewk.stake.call(uintaJqQpxc, uint3ZAngt, {from: accounts[2]});

		await expect(WolfStakingRewards76uewk.withdrawRemainingBalance.call(uintiFS3kfH, uintbtW1X3R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringaw0esyZ = "W5zejIggF6kjAJBnOnZh7xr0hvtXXEb7Sn8D9z64URghiFbybrZvMIbwUq1A2"
		const stringghyl24A = "2pwOEQ93oHbbwWreYu"
		const uintf2hsKS1 = BigInt("60")
		const WolfStakingRewardsCuVWIJM = await WolfStakingRewards.new(stringaw0esyZ, stringghyl24A, uintf2hsKS1, {from: accounts[0]});
		const uintM0nq2tR = BigInt("975")
		const address7HC0EI = accounts[1]
		const uint4cXQGY = BigInt("1408")
		const uintXgKMn0W = BigInt("50")
		const uintB5QUJuP = BigInt("150")
		const uintZhY8xS5 = BigInt("2008")
		const addressZNaFuRa = accounts[1]
		const uint256M1SEsjo = await WolfStakingRewardsCuVWIJM.balanceOfPerPool.call(address7HC0EI, uintM0nq2tR, {from: accounts[4]});
		const uint256vHe4jAt = await WolfStakingRewardsCuVWIJM.stake.call(uintXgKMn0W, uint4cXQGY, {from: accounts[2]});
		const uint256pKdSr4J = await WolfStakingRewardsCuVWIJM.totalSupplyPerPool.call(uintB5QUJuP, {from: accounts[4]});
		const uint256OS6Cyw = await WolfStakingRewardsCuVWIJM.balanceOfPerPool.call(addressZNaFuRa, uintZhY8xS5, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPoEP4Up = "ylOTUniNKWuZCkpd7W6KKBr"
		const stringryPKLQy = "UsIGaUFyMhD3MXoPUtCmeUa0gbKElonciS3VnodCZWxO21"
		const uintoPoXzQe = BigInt("57")
		const WolfStakingRewardsLpj75E = await WolfStakingRewards.new(stringPoEP4Up, stringryPKLQy, uintoPoXzQe, {from: accounts[5]});
		const uintBrDmkrs = BigInt("1732")
		const uintrlUcY4 = BigInt("1772")
		const addressDlwFd48 = accounts[5]
		const uint256LtvLh7x = await WolfStakingRewardsLpj75E.exit.call(uintBrDmkrs, {from: accounts[0]});
		const uint8hGEqS2 = await WolfStakingRewardsLpj75E.decimals.call({from: accounts[2]});
		const uint256H3o48i = await WolfStakingRewardsLpj75E.earned.call(addressDlwFd48, uintrlUcY4, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkPam0GH = "WqKWvwgjFPXcnHQees1AU8occMhHQ46SdaWcgn9LrcttEg1HNk6YRYRfGK9XL9Y"
		const stringU8KeLII = "xtz7sfjtbliZBXbKyFtMPIozSEH4lM2cwpoxOyvuzIGkGKICAv8O9CC2vDTcOSLGLX0SxK8dFzDtc4IncYBXluw71QIk"
		const uintH8Qw9nr = BigInt("120")
		const WolfStakingRewardsOeXJmY3 = await WolfStakingRewards.new(stringkPam0GH, stringU8KeLII, uintH8Qw9nr, {from: accounts[4]});
		const uintmIeUQT = BigInt("814")
		const uintzp2MBb = BigInt("812")
		const uintuBgXJb = BigInt("1113")
		const uintW0RuTmj = BigInt("1519")
		const uintZ375cj = BigInt("1146")
		const uint256aHVPhoz = await WolfStakingRewardsOeXJmY3.rewardPerToken.call(uintmIeUQT, {from: accounts[5]});
		const uint256NowE41v = await WolfStakingRewardsOeXJmY3.getRewardForDuration.call(uintzp2MBb, {from: accounts[2]});
		const uint256arrayXSGiyEL = await WolfStakingRewardsOeXJmY3.updateNotifyRewardAmount.call(uintuBgXJb, {from: accounts[5]});
		const uint8GfhudDF = await WolfStakingRewardsOeXJmY3.decimals.call({from: accounts[2]});
		const uint256uhc3cvD = await WolfStakingRewardsOeXJmY3.rewardPerToken.call(uintW0RuTmj, {from: accounts[4]});
		const uint256NCJfSZS = await WolfStakingRewardsOeXJmY3.lastTimeRewardApplicable.call(uintZ375cj, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMhsFVHy = "GIuqJgswcnP087QgxTZz3DHqOGgEx8XriQ2JWhAC"
		const stringNCCBuQn = "SIz1KoDGRAad79uKTpRFCLRyGjO3Uln44ur5"
		const uintJiisozF = BigInt("231")
		const WolfStakingRewardso4PSmT0 = await WolfStakingRewards.new(stringMhsFVHy, stringNCCBuQn, uintJiisozF, {from: "0x0000000000000000000000000000000000000001"});
		const uintDMDc2GE = BigInt("1057")
		const uintIuQCB8Q = BigInt("1858")
		const uinty5yKpgK = BigInt("156")
		const uintyljNXID = BigInt("457")
		const uint256CKdDUPP = await WolfStakingRewardso4PSmT0.stake.call(uintIuQCB8Q, uintDMDc2GE, {from: accounts[0]});
		const uint256pSsjPo = await WolfStakingRewardso4PSmT0.withdraw.call(uintyljNXID, uinty5yKpgK, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxA2SRaP = "S9fm26Gqe6"
		const stringqzNngak = "eHNA3PHacK6MkS03LiPKKKBO6frElkVXUF4qTsoPA4FVKAu0WPHplw7ayGc9DihgP5B"
		const uinta3aHqcM = BigInt("79")
		const WolfStakingRewardsYci9RWp = await WolfStakingRewards.new(stringxA2SRaP, stringqzNngak, uinta3aHqcM, {from: accounts[0]});
		const uintjST2bOf = BigInt("1801")
		const uint256arrayy6AOWkt = await WolfStakingRewardsYci9RWp.updateNotifyRewardAmount.call(uintjST2bOf, {from: accounts[5]});
		await WolfStakingRewardsYci9RWp.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyxOhil2 = "E4irNahQuL3mksLdyCsS3ApCtHFQ624UeqUfKC1Yz"
		const stringnzNcX4L = "x7s2YjZhJvTIFxd"
		const uintj21ZpW7 = BigInt("246")
		const WolfStakingRewardsmBrRTOQ = await WolfStakingRewards.new(stringyxOhil2, stringnzNcX4L, uintj21ZpW7, {from: accounts[5]});
		const uintCjucBtc = BigInt("190")
		const addressaebPc62 = accounts[4]
		const uintRcaQ7eG = BigInt("1094")
		const uintMwEMBLe = BigInt("1473")
		const addresszUc9O0y = "0x0000000000000000000000000000000000000001"
		await WolfStakingRewardsmBrRTOQ.nonReentrant.call({from: accounts[0]});
		const uint256l9JMchq = await WolfStakingRewardsmBrRTOQ.earned.call(addressaebPc62, uintCjucBtc, {from: accounts[4]});
		const uint256zeoR6yk = await WolfStakingRewardsmBrRTOQ.rewardPerToken.call(uintRcaQ7eG, {from: accounts[0]});
		const uint256cmu32d4 = await WolfStakingRewardsmBrRTOQ.earned.call(addresszUc9O0y, uintMwEMBLe, {from: accounts[1]});
		await WolfStakingRewardsmBrRTOQ.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPw0Viqn = "Hgf8Wt62hRqycGl5syc"
		const stringSEdupdA = "R1PU6PvaATtIJtty2fmGGIBzBkXGpAM73EbIvmSu3Jeyab5iF2o4dCUpbVw0vofGOqmnxyXy"
		const uintmrX53Vr = BigInt("94")
		const WolfStakingRewardsJxIt5aV = await WolfStakingRewards.new(stringPw0Viqn, stringSEdupdA, uintmrX53Vr, {from: accounts[1]});
		const uintgf5joD2 = BigInt("89")
		const uintRk1o1aN = BigInt("2015")
		await WolfStakingRewardsJxIt5aV.onlyRewardsDistribution.call({from: accounts[4]});
		await WolfStakingRewardsJxIt5aV.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CDpK3vI = await WolfStakingRewardsJxIt5aV.exit.call(uintgf5joD2, {from: accounts[0]});
		const uint256HnrRT8y = await WolfStakingRewardsJxIt5aV.totalSupplyPerPool.call(uintRk1o1aN, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqEKG4PG = "PxKzRJ3qEW6fJrupEERG26P4le7Op1XFKY8BvVJgUBclUpvGLdc3zSyUjJWHCxH4R2W846wW"
		const stringZnfFSkC = "gtSGoa5NPzDqxGRTI5LyP3H"
		const uintXflfJVr = BigInt("217")
		const WolfStakingRewardsy7TsnUV = await WolfStakingRewards.new(stringqEKG4PG, stringZnfFSkC, uintXflfJVr, {from: accounts[1]});
		const string5caxjj = await WolfStakingRewardsy7TsnUV.symbol.call({from: accounts[3]});
		const uint8fKP7lN6 = await WolfStakingRewardsy7TsnUV.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringi0cy3mi = "qzZNzOuIY7keWPXplUMNWKToujcg8NIuXMOB7IYbK7g32y7qUXocwujyEY2Zq86sSvRUEo8bXld1v7GNNi933T8OItpxTtLYr"
		const stringrphPXH = "neHqRXkGNG9WuSXK1s63tE3F6eBk"
		const uintuoncE6 = BigInt("67")
		const WolfStakingRewardsSF7DVSe = await WolfStakingRewards.new(stringi0cy3mi, stringrphPXH, uintuoncE6, {from: accounts[0]});
		const uintV2nrnmY = BigInt("2027")
		const uintUdNrIja = BigInt("614")
		const uintdM8Fhsv = BigInt("1003")
		const addressw47KpN = accounts[1]
		const uint256sumIgES = await WolfStakingRewardsSF7DVSe.withdraw.call(uintUdNrIja, uintV2nrnmY, {from: accounts[4]});
		const uint256M3ixPSm = await WolfStakingRewardsSF7DVSe.earned.call(addressw47KpN, uintdM8Fhsv, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvBcsIDD = "0Qhj38XUP52zzGp4wmUE7AEkCGyveSOkydWsIkbuARQncwrWuOIBWT1N2J7NocmRbgiAV9PzDaPepspg65KLSYwqApHQBw3NW"
		const stringqYhNr69 = "FonIxu8cHzQhjy4DM4Z8snP"
		const uintFxxvmG0 = BigInt("214")
		const WolfStakingRewardsyxCb9qm = await WolfStakingRewards.new(stringvBcsIDD, stringqYhNr69, uintFxxvmG0, {from: "0x0000000000000000000000000000000000000001"});
		const uintHNIYpGY = BigInt("1920")
		const uintRITrDeR = BigInt("1544")
		const uintfQp7X61 = BigInt("733")
		const addressBni0jiV = accounts[3]
		const uint256IRB8vaw = await WolfStakingRewardsyxCb9qm.rewardPerToken.call(uintHNIYpGY, {from: accounts[1]});
		const uint256jd0bkw2 = await WolfStakingRewardsyxCb9qm.rewardPerToken.call(uintRITrDeR, {from: accounts[4]});
		const uint256sRnIVxZ = await WolfStakingRewardsyxCb9qm.balanceOfPerPool.call(addressBni0jiV, uintfQp7X61, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUJPr8I2 = "FyqDczIwBYj7TecR8Uq3vQcMfPgwuN7sU7nbTZjdKhR8yIJ"
		const stringKvLNHDo = "jHDex5eY8gUitA"
		const uintIzDgmo0 = BigInt("166")
		const WolfStakingRewardsta4HBb3 = await WolfStakingRewards.new(stringUJPr8I2, stringKvLNHDo, uintIzDgmo0, {from: accounts[3]});
		const uintHR1cgb5 = BigInt("1909")
		const uintTFio2X1 = BigInt("1034")
		const uintUgWfP00 = BigInt("1222")
		const addressrFIirti = accounts[2]
		const uint256PfwlFY = await WolfStakingRewardsta4HBb3.withdraw.call(uintTFio2X1, uintHR1cgb5, {from: accounts[3]});
		await WolfStakingRewardsta4HBb3.onlyOwner.call({from: accounts[2]});
		const uint256BWKb8ri = await WolfStakingRewardsta4HBb3.earned.call(addressrFIirti, uintUgWfP00, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrETnnjN = "89XFBmjmR9XFdwkX1GgrSKLGehaHuvqIQlmMsy5095iEL5v8VDo2LEqcGPufhNg"
		const stringx49JX4Z = "JSK2EXknUzvZnDUr7qorsYhoJkYala"
		const uintAXsbm5h = BigInt("88")
		const WolfStakingRewardsusebpZS = await WolfStakingRewards.new(stringrETnnjN, stringx49JX4Z, uintAXsbm5h, {from: accounts[4]});
		const uintS2niahb = BigInt("1494")
		const uintSQYbM8a = BigInt("581")
		const uintDUSmLog = BigInt("1778")
		const uintIcahG5d = BigInt("1648")
		const uintTaIY55Y = await WolfStakingRewardsusebpZS.getReward.call(uintS2niahb, {from: accounts[2]});
		const uint256d3ljSA7 = await WolfStakingRewardsusebpZS.lastTimeRewardApplicable.call(uintSQYbM8a, {from: accounts[3]});
		await WolfStakingRewardsusebpZS.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256eXA7TQ = await WolfStakingRewardsusebpZS.stake.call(uintIcahG5d, uintDUSmLog, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringigE6MKC = "W55OEMYGIJ58uE2Vno6SjXHr93rO2TDPxGaRt52b1"
		const stringVkovge = "qYJ6rzJSM9KjnCpmtavQQDCqHfVUFkpU"
		const uinttU8dXKI = BigInt("253")
		const WolfStakingRewardsUe0B4VH = await WolfStakingRewards.new(stringigE6MKC, stringVkovge, uinttU8dXKI, {from: accounts[3]});
		await WolfStakingRewardsUe0B4VH.onlyRewardsDistribution.call({from: accounts[4]});
		await WolfStakingRewardsUe0B4VH.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVhgjMx0 = "1HtocBTMw6CSoE4VNrNFKeKBhPqbkZhnRGMxwUOBtHNne1yNZW1IoQHCEsti77sysX8OKvbkY4Fw"
		const stringkjeW5U = "N"
		const uintfjvfyh0 = BigInt("28")
		const WolfStakingRewardsbFjINAZ = await WolfStakingRewards.new(stringVhgjMx0, stringkjeW5U, uintfjvfyh0, {from: accounts[4]});
		const uinthwE006 = BigInt("1909")
		const addressTNljtvd = "0x0000000000000000000000000000000000000001"
		const uintCAeidyA = BigInt("1394")
		const uintNqsJ33N = BigInt("1591")
		const uintr0gYHye = BigInt("305")
		const addressSbM4zHe = accounts[5]
		const uintc6JHKz = BigInt("50")
		const uintAr2GOvn = BigInt("1886")
		const uintTIRka0A = BigInt("2013")
		await WolfStakingRewardsbFjINAZ.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256hwsjV4a = await WolfStakingRewardsbFjINAZ.earned.call(addressTNljtvd, uinthwE006, {from: accounts[1]});
		const uint256jHXjmmU = await WolfStakingRewardsbFjINAZ.withdraw.call(uintNqsJ33N, uintCAeidyA, {from: accounts[2]});
		const addressU9puaZX = await WolfStakingRewardsbFjINAZ.updateReward.call(addressSbM4zHe, uintr0gYHye, {from: accounts[1]});
		const uint2567qNTtL = await WolfStakingRewardsbFjINAZ.totalSupplyPerPool.call(uintc6JHKz, {from: accounts[4]});
		const uint256EiH0gcr = await WolfStakingRewardsbFjINAZ.withdrawRemainingBalance.call(uintTIRka0A, uintAr2GOvn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQWddzeZ = "tIvY1KTHisykvTdiOcvGwucw1cRKCYd3EPdigMVN5VrNkCIemcy3JsMp1"
		const stringJtc4L4H = "jfR2hLQ9fBr1Xk2nTOclJCy0hNwvuFRzUz2596XIkARjs"
		const uintImjZQTK = BigInt("40")
		const WolfStakingRewardsCCSBNwy = await WolfStakingRewards.new(stringQWddzeZ, stringJtc4L4H, uintImjZQTK, {from: accounts[4]});
		const uintAs2hfzX = BigInt("1123")
		const stringeQM7IJ = await WolfStakingRewardsCCSBNwy.symbol.call({from: accounts[1]});
		await WolfStakingRewardsCCSBNwy.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const stringj8AoOvz = await WolfStakingRewardsCCSBNwy.name.call({from: accounts[3]});
		await WolfStakingRewardsCCSBNwy.onlyRewardsDistribution.call({from: accounts[1]});
		const stringbzFnSCM = await WolfStakingRewardsCCSBNwy.name.call({from: accounts[5]});
		const uint256dRv4NwL = await WolfStakingRewardsCCSBNwy.rewardPerToken.call(uintAs2hfzX, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringowsCNlU = "CO7IyHnbq9OVbdeUmDCDVwjAVtL9YtYQK0BQi3KDUMKShdG46Jp"
		const stringjAHVkoi = "WImocKVrYnjzx5UphzHFz5M6DuF82r2HW9FBFiy3JYH8KDSaM7wSwXhUTbv4egOOTmd3WmBmr5sFSOsBDSJxd4oqD1wK5KL"
		const uintm90aAY = BigInt("22")
		const WolfStakingRewardsjylbOzR = await WolfStakingRewards.new(stringowsCNlU, stringjAHVkoi, uintm90aAY, {from: accounts[4]});
		const uintFA27QAZ = BigInt("1393")
		const uintTDWgfxO = BigInt("735")
		const addressosAdE9n = accounts[0]
		const uint0IPVGD = BigInt("1878")
		const addressYlrZzet = "0x0000000000000000000000000000000000000001"
		const uintO0Ey9CD = BigInt("237")
		const uint256hQQ5mK = await WolfStakingRewardsjylbOzR.getRewardForDuration.call(uintFA27QAZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IsUoqsz = await WolfStakingRewardsjylbOzR.balanceOfPerPool.call(addressosAdE9n, uintTDWgfxO, {from: accounts[0]});
		const uint256zVWDB0o = await WolfStakingRewardsjylbOzR.earned.call(addressYlrZzet, uint0IPVGD, {from: accounts[3]});
		const uint256biDFwgA = await WolfStakingRewardsjylbOzR.rewardPerToken.call(uintO0Ey9CD, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJpyaITB = "m6X9A5kvu7COcU8AzG6qoFmlgIxoM7IAUacokjuuSA7O36fFJF2Mvjah65h2qg8GHudoIPX"
		const stringpQGEMMF = "CP4MIvIXgrfbiWrxSQUnYhV3pYTPg6qymWcLgBUuilrPBcaXcNrCPdCY9pqBD5"
		const uintcZ5dRNI = BigInt("148")
		const WolfStakingRewardss7CYrZS = await WolfStakingRewards.new(stringJpyaITB, stringpQGEMMF, uintcZ5dRNI, {from: accounts[0]});
		const uinthmydUX = BigInt("497")
		const uintJQxu20h = BigInt("1669")
		const uinti8ywh8 = BigInt("710")
		const uint256dckGrw8 = await WolfStakingRewardss7CYrZS.rewardPerToken.call(uinthmydUX, {from: accounts[4]});
		const stringFD8sULL = await WolfStakingRewardss7CYrZS.name.call({from: accounts[0]});
		const uint256j81jkUm = await WolfStakingRewardss7CYrZS.exit.call(uintJQxu20h, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Ipa6Sqv = await WolfStakingRewardss7CYrZS.lastTimeRewardApplicable.call(uinti8ywh8, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZTPfh6o = "QPpa5xE5cmC9vFn0a8w5t2sMKofh2ARDKEPm8lk9knYYYt5zFxeJqNYyrOHiG4wU"
		const stringHXNGR6 = "B5NMrv81B"
		const uintrCboPSy = BigInt("237")
		const WolfStakingRewardssLtand = await WolfStakingRewards.new(stringZTPfh6o, stringHXNGR6, uintrCboPSy, {from: accounts[0]});
		const uinto6wSPcb = BigInt("523")
		const uintt3zPbR = BigInt("373")
		const uintzhip5w6 = BigInt("306")
		const uintNpCzkNa = BigInt("1915")
		const uintj8zE3uB = BigInt("1337")
		const uint256nk3XBVc = await WolfStakingRewardssLtand.totalSupplyPerPool.call(uinto6wSPcb, {from: accounts[0]});
		const uintperIuD8 = await WolfStakingRewardssLtand.getReward.call(uintt3zPbR, {from: accounts[4]});
		const uint256BxftPFa = await WolfStakingRewardssLtand.withdraw.call(uintNpCzkNa, uintzhip5w6, {from: accounts[1]});
		const uint256UFQrAT6 = await WolfStakingRewardssLtand.exit.call(uintj8zE3uB, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNLBlLV5 = "2"
		const stringZ28JFqI = "87Gbmf8ny7yUgctaTP437IOtwopTkJNGXVPWCoJLPVOGjSKlesym5VSuMHuZaBajYbTs0DX1nVb7E97B59Bk"
		const uintdnGzHlp = BigInt("236")
		const WolfStakingRewardsDjcVSYu = await WolfStakingRewards.new(stringNLBlLV5, stringZ28JFqI, uintdnGzHlp, {from: accounts[3]});
		const uintyhdb8rB = BigInt("1439")
		const uintuEPIOyb = BigInt("1835")
		const uintX1em71b = BigInt("1207")
		const uintCvGfTzG = await WolfStakingRewardsDjcVSYu.getReward.call(uintyhdb8rB, {from: accounts[3]});
		const uint256xx4D3D = await WolfStakingRewardsDjcVSYu.rewardPerToken.call(uintuEPIOyb, {from: accounts[2]});
		const uint256k7N0e4z = await WolfStakingRewardsDjcVSYu.rewardPerToken.call(uintX1em71b, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyWw9apE = "YC8bOxDrdCb9cgr8QxcMv7KS7c9j917HlvmTw2nI3MXKQST2KxN5EVFhFlPKioivouecYOy6ID5viMBEN5D"
		const stringHt7vTOC = "NJjJ1HrqHPTj083s6DxYWenVQt4W6U7fTpEgUJtAu64KM48KJzfqnSKcqHow1tzjNcwEJbAnBU6nUb"
		const uintHgdZA8F = BigInt("75")
		const WolfStakingRewardsvgrbAkD = await WolfStakingRewards.new(stringyWw9apE, stringHt7vTOC, uintHgdZA8F, {from: accounts[2]});
		const uintQdi0yWw = BigInt("848")
		const uintVSZ21uw = BigInt("981")
		const uintBLZhkfZ = BigInt("237")
		const uintcfZ8TRa = BigInt("929")
		const uinthl9Z2mZ = BigInt("1907")
		const uintK3SnyYt = BigInt("870")
		const uintpDPyqvM = BigInt("548")
		const uintdVKtcKR = BigInt("1386")
		const uint256SK2jCgl = await WolfStakingRewardsvgrbAkD.withdrawRemainingBalance.call(uintVSZ21uw, uintQdi0yWw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vE1S3uF = await WolfStakingRewardsvgrbAkD.exit.call(uintBLZhkfZ, {from: accounts[4]});
		const uint256arrayGgnJWSP = await WolfStakingRewardsvgrbAkD.updateNotifyRewardAmount.call(uintcfZ8TRa, {from: accounts[5]});
		const uint256dPbg5G = await WolfStakingRewardsvgrbAkD.withdraw.call(uintK3SnyYt, uinthl9Z2mZ, {from: accounts[4]});
		const uint256DJr2zaf = await WolfStakingRewardsvgrbAkD.getRewardForDuration.call(uintpDPyqvM, {from: accounts[3]});
		const uint256oAEXhpO = await WolfStakingRewardsvgrbAkD.getRewardForDuration.call(uintdVKtcKR, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringx4bEc77 = "oo2LdtZ8HrWAeqMO3VIHxsSTtr5PKYzlXVLj8UYkEzeHGYDX5HmkioJ7gmtH3gac9XjfTtDdCWXrOnPrF1"
		const stringPjfHCqL = "TYywYGGdnbhh3xK7AnkyHb0sjD2QCS25iW9UFfRog9b8scpXj6tDWy6FpPwhkxcf9zLr5"
		const uintUTq5exv = BigInt("217")
		const WolfStakingRewardsyTN8Mp0 = await WolfStakingRewards.new(stringx4bEc77, stringPjfHCqL, uintUTq5exv, {from: accounts[4]});
		const uintVRX74LY = BigInt("415")
		const addressU2qEpFd = accounts[2]
		const uinthoIwiy = BigInt("1305")
		const uintyU0slvk = BigInt("1702")
		const uintpZFbbkk = BigInt("1594")
		const uintbFcmxUO = BigInt("312")
		const uint256RnFm5l6 = await WolfStakingRewardsyTN8Mp0.balanceOfPerPool.call(addressU2qEpFd, uintVRX74LY, {from: accounts[0]});
		const uint256NFxkdGz = await WolfStakingRewardsyTN8Mp0.stake.call(uintyU0slvk, uinthoIwiy, {from: accounts[3]});
		await WolfStakingRewardsyTN8Mp0.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256pbaB0Wb = await WolfStakingRewardsyTN8Mp0.withdraw.call(uintbFcmxUO, uintpZFbbkk, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYf5Hpf = "grjt0X14x52hnBYZRvXtCwLwNCNvO3gSeYij8GdvC733kAeug"
		const stringOWFaqpG = "2A0SQMmQKbMLtI1Uwde3BBWTbku2YK7HlqZma52DAcHNmEBaiqBstMTxpgKRDjJpwqjVGQ1q4nejm9I481rkLMIy"
		const uintaji1Ak = BigInt("36")
		const WolfStakingRewardsk6ARwJm = await WolfStakingRewards.new(stringYf5Hpf, stringOWFaqpG, uintaji1Ak, {from: accounts[2]});
		const uintWfdJe5K = BigInt("91")
		const uintfwPRTd = BigInt("170")
		const uint256ZUuDfT = await WolfStakingRewardsk6ARwJm.withdraw.call(uintfwPRTd, uintWfdJe5K, {from: accounts[0]});
		await WolfStakingRewardsk6ARwJm.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const stringsaO3J6N = await WolfStakingRewardsk6ARwJm.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvArEQlN = "AB1a78JqPvfO5JyrpMKguBpXu"
		const stringXlvPAh = "XP7PKeR9c8JPQZnrESePYWpWV93xOxlyd5HxSczWh2"
		const uintOmHk5d = BigInt("92")
		const WolfStakingRewardscLLwg7 = await WolfStakingRewards.new(stringvArEQlN, stringXlvPAh, uintOmHk5d, {from: accounts[3]});
		const uintMGFlxs = BigInt("272")
		const uintiWMLUrb = BigInt("1706")
		const uintQ6MR0F8 = BigInt("726")
		const uintoCdU6vA = BigInt("378")
		const uintqvZlcAv = BigInt("1412")
		const uintZS7k4J = BigInt("2008")
		const uintz7fui5E = BigInt("2022")
		const uint256arrayplTmQCP = await WolfStakingRewardscLLwg7.updateNotifyRewardAmount.call(uintMGFlxs, {from: accounts[1]});
		const uint256WKm0kW = await WolfStakingRewardscLLwg7.withdraw.call(uintQ6MR0F8, uintiWMLUrb, {from: accounts[3]});
		const uint256Tzzo2Sb = await WolfStakingRewardscLLwg7.getRewardForDuration.call(uintoCdU6vA, {from: accounts[0]});
		const uint256rj7GBMv = await WolfStakingRewardscLLwg7.exit.call(uintqvZlcAv, {from: accounts[3]});
		const uint256v7LCfG9 = await WolfStakingRewardscLLwg7.withdrawRemainingBalance.call(uintz7fui5E, uintZS7k4J, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSekm4Jd = "FdDx0Iij6NPWm06BmiRRpBzqHowjkCB6g8XXosnzSRV30DsDDoNQViP8xUq42r"
		const stringcZMsnAx = "bq"
		const uintr6p6e2J = BigInt("246")
		const WolfStakingRewardsrdsiqf = await WolfStakingRewards.new(stringSekm4Jd, stringcZMsnAx, uintr6p6e2J, {from: accounts[5]});
		const uintEUwJsY = BigInt("1656")
		const uintl0y1mI = BigInt("1861")
		const stringrDSJDAq = await WolfStakingRewardsrdsiqf.symbol.call({from: accounts[4]});
		const uint256o4Oi0q3 = await WolfStakingRewardsrdsiqf.stake.call(uintl0y1mI, uintEUwJsY, {from: accounts[5]});
		const uint89rthK2 = await WolfStakingRewardsrdsiqf.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkmoVKt = "fJhaBOdkdqueL4ymqGg6WNjHSR8FDnKTx0npVoVDCiStS9bnHcXML9THDx39YRzW2GeeYJKKZoKucJPoYAm"
		const stringjFk6zR6 = "cezTPrh2UGJ6HefDlOLW5nRyflA"
		const uintL1XH9il = BigInt("92")
		const WolfStakingRewardsrh1GxtE = await WolfStakingRewards.new(stringkmoVKt, stringjFk6zR6, uintL1XH9il, {from: accounts[5]});
		const uintzN1nnII = BigInt("489")
		const addressbxerB0j = accounts[1]
		const uint3ueMMg = BigInt("1100")
		const uintOn9fYO3 = BigInt("1711")
		const addressWJRj3CU = accounts[3]
		const uintKJsCfqH = BigInt("1503")
		const uintokUvzH9 = BigInt("211")
		const uint256fXTxHvr = await WolfStakingRewardsrh1GxtE.earned.call(addressbxerB0j, uintzN1nnII, {from: accounts[1]});
		const uint256kPf8kVN = await WolfStakingRewardsrh1GxtE.totalSupplyPerPool.call(uint3ueMMg, {from: accounts[2]});
		const addresssGUisUK = await WolfStakingRewardsrh1GxtE.updateReward.call(addressWJRj3CU, uintOn9fYO3, {from: accounts[3]});
		const uint256BkUAlGG = await WolfStakingRewardsrh1GxtE.withdrawRemainingBalance.call(uintokUvzH9, uintKJsCfqH, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwh98lXC = "8F6wpi2DPDAJmnnFXaXQJUKJf7zPUWSw5zwFxhl2KrXl"
		const stringBPlrKFf = "Z0HQnRBsQnqlkcTSTwBKxoeqFmG2bHHUmjjfHDJ1oCjNYyjeLU3zTGQV"
		const uintX1iRxC = BigInt("10")
		const WolfStakingRewardsxvFTF5V = await WolfStakingRewards.new(stringwh98lXC, stringBPlrKFf, uintX1iRxC, {from: "0x0000000000000000000000000000000000000001"});
		const uintlVuQmSm = BigInt("1764")
		const uintacipBBj = BigInt("1827")
		const uintC3RC5fY = BigInt("1814")
		const uint8LpffD86 = await WolfStakingRewardsxvFTF5V.decimals.call({from: accounts[1]});
		const uint256KaG9iEx = await WolfStakingRewardsxvFTF5V.stake.call(uintacipBBj, uintlVuQmSm, {from: accounts[5]});
		const uint256ko6i5H = await WolfStakingRewardsxvFTF5V.getRewardForDuration.call(uintC3RC5fY, {from: accounts[4]});
	});
})