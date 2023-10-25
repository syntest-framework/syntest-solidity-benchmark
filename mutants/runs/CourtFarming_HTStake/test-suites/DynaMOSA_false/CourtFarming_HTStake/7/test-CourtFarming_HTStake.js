const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezCH8KQa = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressXwDfqCW = accounts[2]
		const addressCuBRJPO = accounts[4]
		const addresscGn3i1d = accounts[4]
		const addressDXo2jTW = accounts[4]
		const addresssb758Or = await CourtFarming_HTStakezCH8KQa.setCourtStake.call(addressXwDfqCW, {from: accounts[1]});
		const uint256wYKZ7uZ = await CourtFarming_HTStakezCH8KQa.incvRewardInfo.call({from: accounts[4]});
		const addresspSJyM4j = await CourtFarming_HTStakezCH8KQa.updateReward.call(addressCuBRJPO, {from: "0x0000000000000000000000000000000000000001"});
		const addressr0AjPQl = await CourtFarming_HTStakezCH8KQa.setCourtStake.call(addresscGn3i1d, {from: accounts[2]});
		const addressHwprYgB = await CourtFarming_HTStakezCH8KQa.setCourtStake.call(addressDXo2jTW, {from: accounts[1]});
		const uint256XOCiR7d = await CourtFarming_HTStakezCH8KQa.incvRewardClaim.call({from: accounts[3]});

		await expect(CourtFarming_HTStakezCH8KQa.setCourtStake.call(addressXwDfqCW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVX6cMGx = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressz7kmkFz = accounts[2]
		const addressy3oiQ4d = accounts[1]
		const uintpYrEAs7 = BigInt("1838")
		const uintJMZ1svv = BigInt("1743")
		const uintPVGowWZ = BigInt("428")
		const uintLJwAeJ7 = BigInt("1037")
		const uintmr0P6qX = BigInt("470")
		const uintdP5ofQ4 = BigInt("605")
		const uint256DOYdUvU = await CourtFarming_HTStakeVX6cMGx.rewards.call(addressz7kmkFz, {from: accounts[3]});
		const uint256dUb9cSc = await CourtFarming_HTStakeVX6cMGx.lastUpdateBlock.call({from: accounts[4]});
		const addressK3slnRN = await CourtFarming_HTStakeVX6cMGx.updateReward.call(addressy3oiQ4d, {from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_HTStakeVX6cMGx.changeStakeParameters.call(uintPVGowWZ, uintJMZ1svv, uintpYrEAs7, {from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_HTStakeVX6cMGx.changeStakeParameters.call(uintdP5ofQ4, uintmr0P6qX, uintLJwAeJ7, {from: accounts[2]});

		assert.equal(uint256dUb9cSc, BigInt("1745"))
		await expect(CourtFarming_HTStakeVX6cMGx.changeStakeParameters.call(uintPVGowWZ, uintJMZ1svv, uintpYrEAs7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeDYJ3q0W = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressrXXVXT = accounts[3]
		const addresslzSDP4z = accounts[0]
		const addressujYFpp7 = accounts[2]
		const uintsQ2SiII = BigInt("1218")
		const uintvqVHTJy = BigInt("915")
		const uintHlrrXnI = BigInt("867")
		const uintJbJ6KK = BigInt("1265")
		const uint256jOzmQYt = await CourtFarming_HTStakeDYJ3q0W.rewards.call(addressrXXVXT, {from: accounts[2]});
		const addresshR0f7Lk = await CourtFarming_HTStakeDYJ3q0W.setCourtStake.call(addresslzSDP4z, {from: accounts[4]});
		const addressKr7lCUm = await CourtFarming_HTStakeDYJ3q0W.updateReward.call(addressujYFpp7, {from: accounts[4]});
		const uint256f20Dv7J = await CourtFarming_HTStakeDYJ3q0W.expectedRewardsToday.call(uintsQ2SiII, {from: accounts[4]});
		await CourtFarming_HTStakeDYJ3q0W.changeStakeParameters.call(uintJbJ6KK, uintHlrrXnI, uintvqVHTJy, {from: accounts[2]});
		const uint256YD2ca1 = await CourtFarming_HTStakeDYJ3q0W.totalStaked.call({from: accounts[5]});

		await expect(CourtFarming_HTStakeDYJ3q0W.setCourtStake.call(addresslzSDP4z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeEXklVgd = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressGI0mv1X = accounts[3]
		const boolojRIk3o = false
		const uintsmDLLVV = BigInt("470")
		const uintHF45if = BigInt("1198")
		const addressF7EjH8 = accounts[3]
		const uintJMjH3Vk = BigInt("1817")
		const uint256VLFWAaf = await CourtFarming_HTStakeEXklVgd.rewards.call(addressGI0mv1X, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mc2NT65 = await CourtFarming_HTStakeEXklVgd.unstake.call(uintsmDLLVV, boolojRIk3o, {from: accounts[1]});
		const uint256cHj6GO1 = await CourtFarming_HTStakeEXklVgd.incvRewardInfo.call({from: accounts[2]});
		const uint256iCMcngr = await CourtFarming_HTStakeEXklVgd.expectedRewardsToday.call(uintHF45if, {from: accounts[5]});
		const addressMQjUYLN = await CourtFarming_HTStakeEXklVgd.setCourtStake.call(addressF7EjH8, {from: accounts[3]});
		const uint2561NFaJd = await CourtFarming_HTStakeEXklVgd.expectedRewardsToday.call(uintJMjH3Vk, {from: accounts[0]});

		await expect(CourtFarming_HTStakeEXklVgd.unstake.call(uintsmDLLVV, boolojRIk3o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakePtIJ5xs = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressRQ5mnib = accounts[2]
		const addressWcN8SMm = accounts[3]
		const uint8JGWsS = BigInt("816")
		const addressqbaypzJ = accounts[0]
		const addressRPjtVxZ = await CourtFarming_HTStakePtIJ5xs.getBeneficiaryInfo.call(addressRQ5mnib, {from: accounts[2]});
		const uint256H5LEqMn = await CourtFarming_HTStakePtIJ5xs.incvRewardInfo.call({from: accounts[5]});
		const addressvIU81At = await CourtFarming_HTStakePtIJ5xs.updateReward.call(addressWcN8SMm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wLalC1G = await CourtFarming_HTStakePtIJ5xs.stake.call(uint8JGWsS, {from: accounts[5]});
		const uint256I9HYg9d = await CourtFarming_HTStakePtIJ5xs.incvRewardInfo.call({from: accounts[1]});
		const uint256By0oWFU = await CourtFarming_HTStakePtIJ5xs.rewards.call(addressqbaypzJ, {from: accounts[1]});

		await expect(CourtFarming_HTStakePtIJ5xs.stake.call(uint8JGWsS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakef6b3STJ = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressSXdoC2v = accounts[2]
		const uintvxG9x2r = BigInt("1640")
		const uintapEKblR = BigInt("566")
		const uintLN8esoc = BigInt("1357")
		const uint256YuQUI99 = await CourtFarming_HTStakef6b3STJ.rewards.call(addressSXdoC2v, {from: accounts[5]});
		const uint256q4xnv06 = await CourtFarming_HTStakef6b3STJ.blockNumber.call({from: accounts[1]});
		const uint256a9mJtcH = await CourtFarming_HTStakef6b3STJ.incvRewardClaim.call({from: accounts[1]});
		const uint256tTm33st = await CourtFarming_HTStakef6b3STJ.lastUpdateBlock.call({from: accounts[5]});
		await CourtFarming_HTStakef6b3STJ.changeStakeParameters.call(uintLN8esoc, uintapEKblR, uintvxG9x2r, {from: accounts[1]});

		assert.equal(uint256a9mJtcH, BigInt("0"))
		assert.equal(uint256q4xnv06, BigInt("1745"))
		assert.equal(uint256tTm33st, BigInt("1745"))
		await expect(CourtFarming_HTStakef6b3STJ.changeStakeParameters.call(uintLN8esoc, uintapEKblR, uintvxG9x2r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeCt23u6f = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressClSgUL = accounts[2]
		const addressJ1cJ1qx = accounts[1]
		const addresstDc8XWL = accounts[5]
		const uintYulHgfM = BigInt("118")
		const uint256Pa3Yv9X = await CourtFarming_HTStakeCt23u6f.getCurrentTime.call({from: accounts[1]});
		const addressrrRGuC = await CourtFarming_HTStakeCt23u6f.setCourtStake.call(addressClSgUL, {from: accounts[4]});
		const addressKERVPR = await CourtFarming_HTStakeCt23u6f.setCourtStake.call(addressJ1cJ1qx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256juN2Caq = await CourtFarming_HTStakeCt23u6f.balanceOf.call(addresstDc8XWL, {from: accounts[0]});
		const uint256GKyMOkJ = await CourtFarming_HTStakeCt23u6f.stake.call(uintYulHgfM, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVX6cMGx = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressywAunVP = accounts[2]
		const addressCzznDDN = accounts[1]
		const addresshGym7z = accounts[1]
		const uintx7NNMVz = BigInt("1838")
		const uintcdQ4SAP = BigInt("1743")
		const uintQLgIDJ = BigInt("428")
		const uintnem9g5M = BigInt("1037")
		const uintOjDFkSM = BigInt("470")
		const uintoxrwiVG = BigInt("605")
		const uint256DOYdUvU = await CourtFarming_HTStakeVX6cMGx.rewards.call(addressywAunVP, {from: accounts[3]});
		const uint256dUb9cSc = await CourtFarming_HTStakeVX6cMGx.lastUpdateBlock.call({from: accounts[4]});
		const addressK3slnRN = await CourtFarming_HTStakeVX6cMGx.updateReward.call(addressCzznDDN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oihUEH2 = await CourtFarming_HTStakeVX6cMGx.balanceOf.call(addresshGym7z, {from: accounts[5]});
		await CourtFarming_HTStakeVX6cMGx.changeStakeParameters.call(uintQLgIDJ, uintcdQ4SAP, uintx7NNMVz, {from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_HTStakeVX6cMGx.changeStakeParameters.call(uintoxrwiVG, uintOjDFkSM, uintnem9g5M, {from: accounts[2]});

		assert.equal(uint256dUb9cSc, BigInt("1745"))
		assert.equal(uint256oihUEH2, BigInt("0"))
		await expect(CourtFarming_HTStakeVX6cMGx.changeStakeParameters.call(uintQLgIDJ, uintcdQ4SAP, uintx7NNMVz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakef6b3STJ = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressXWmuxL = accounts[2]
		const uintvfwh9BB = BigInt("1640")
		const uintmvAYIM4 = BigInt("566")
		const uintQ3Ndzro = BigInt("1357")
		const uint256fJMEm0Z = await CourtFarming_HTStakef6b3STJ.lastUpdateBlock.call({from: accounts[0]});
		const uint256sdxUFK4 = await CourtFarming_HTStakef6b3STJ.totalStaked.call({from: accounts[3]});
		const uint256YuQUI99 = await CourtFarming_HTStakef6b3STJ.rewards.call(addressXWmuxL, {from: accounts[5]});
		const uint256q4xnv06 = await CourtFarming_HTStakef6b3STJ.blockNumber.call({from: accounts[1]});
		const uint256a9mJtcH = await CourtFarming_HTStakef6b3STJ.incvRewardClaim.call({from: accounts[1]});
		const uint256tTm33st = await CourtFarming_HTStakef6b3STJ.lastUpdateBlock.call({from: accounts[5]});
		await CourtFarming_HTStakef6b3STJ.changeStakeParameters.call(uintQ3Ndzro, uintmvAYIM4, uintvfwh9BB, {from: accounts[1]});

		assert.equal(uint256a9mJtcH, BigInt("0"))
		assert.equal(uint256fJMEm0Z, BigInt("1745"))
		assert.equal(uint256q4xnv06, BigInt("1745"))
		assert.equal(uint256sdxUFK4, BigInt("0"))
		assert.equal(uint256tTm33st, BigInt("1745"))
		await expect(CourtFarming_HTStakef6b3STJ.changeStakeParameters.call(uintQ3Ndzro, uintmvAYIM4, uintvfwh9BB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakePtIJ5xs = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressPxjMGX = accounts[2]
		const uintqhNgbNL = BigInt("585")
		const addresspoQuO3A = accounts[4]
		const uintS0Nk34 = BigInt("816")
		const uintVa16bS = BigInt("312")
		const uintCCvTDOj = BigInt("1240")
		const uintpKQxwpV = BigInt("1209")
		const addressDwppYaQ = accounts[0]
		const addressRPjtVxZ = await CourtFarming_HTStakePtIJ5xs.getBeneficiaryInfo.call(addressPxjMGX, {from: accounts[2]});
		const uint256H5LEqMn = await CourtFarming_HTStakePtIJ5xs.incvRewardInfo.call({from: accounts[5]});
		const uint256ES4eYCX = await CourtFarming_HTStakePtIJ5xs.expectedRewardsToday.call(uintqhNgbNL, {from: accounts[3]});
		const addressvIU81At = await CourtFarming_HTStakePtIJ5xs.updateReward.call(addresspoQuO3A, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wLalC1G = await CourtFarming_HTStakePtIJ5xs.stake.call(uintS0Nk34, {from: accounts[5]});
		const uint256ZkrkJRl = await CourtFarming_HTStakePtIJ5xs.totalStaked.call({from: accounts[3]});
		await CourtFarming_HTStakePtIJ5xs.changeStakeParameters.call(uintpKQxwpV, uintCCvTDOj, uintVa16bS, {from: accounts[1]});
		const uint256I9HYg9d = await CourtFarming_HTStakePtIJ5xs.incvRewardInfo.call({from: accounts[1]});
		const uint256By0oWFU = await CourtFarming_HTStakePtIJ5xs.rewards.call(addressDwppYaQ, {from: accounts[1]});

		await expect(CourtFarming_HTStakePtIJ5xs.stake.call(uintS0Nk34, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakef6b3STJ = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressEjMmBw = accounts[2]
		const uinteKaGAgY = BigInt("729")
		const uintuX2Wzkg = BigInt("1640")
		const uintJeQfSIs = BigInt("566")
		const uintlfR4IaH = BigInt("1357")
		const uintF5bVgV8 = BigInt("356")
		const uintl9BW6Pe = BigInt("1553")
		const uintAyTB08x = BigInt("30")
		const uint256YuQUI99 = await CourtFarming_HTStakef6b3STJ.rewards.call(addressEjMmBw, {from: accounts[5]});
		const boolgjAMVlJ = await CourtFarming_HTStakef6b3STJ.stakeIncvRewards.call(uinteKaGAgY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256q4xnv06 = await CourtFarming_HTStakef6b3STJ.blockNumber.call({from: accounts[1]});
		const uint256a9mJtcH = await CourtFarming_HTStakef6b3STJ.incvRewardClaim.call({from: accounts[1]});
		const uint256tTm33st = await CourtFarming_HTStakef6b3STJ.lastUpdateBlock.call({from: accounts[5]});
		await CourtFarming_HTStakef6b3STJ.changeStakeParameters.call(uintlfR4IaH, uintJeQfSIs, uintuX2Wzkg, {from: accounts[1]});
		const uint256mN62f1i = await CourtFarming_HTStakef6b3STJ._stakeParametrsCalculation.call(uintAyTB08x, uintl9BW6Pe, uintF5bVgV8, {from: accounts[3]});

		assert.equal(boolgjAMVlJ, false)
		assert.equal(uint256a9mJtcH, BigInt("0"))
		assert.equal(uint256q4xnv06, BigInt("1745"))
		assert.equal(uint256tTm33st, BigInt("1745"))
		await expect(CourtFarming_HTStakef6b3STJ.changeStakeParameters.call(uintlfR4IaH, uintJeQfSIs, uintuX2Wzkg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeDTrIA1 = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintoFbAVrZ = BigInt("0")
		const addressN5h0NV4 = accounts[1]
		const addressbkZCkqC = accounts[5]
		const uintTk48z0P = BigInt("1947")
		const boolbc6ecce = true
		const uintV2vRIs = BigInt("188")
		const boolZrlNdx4 = await CourtFarming_HTStakeDTrIA1.stakeIncvRewards.call(uintoFbAVrZ, {from: accounts[4]});
		const uint256cta95tE = await CourtFarming_HTStakeDTrIA1.balanceOf.call(addressN5h0NV4, {from: accounts[3]});
		const uint256q9ETHn = await CourtFarming_HTStakeDTrIA1.rewards.call(addressbkZCkqC, {from: accounts[0]});
		const boolsgBhRev = await CourtFarming_HTStakeDTrIA1.stakeIncvRewards.call(uintTk48z0P, {from: accounts[3]});
		const uint256XX2JOEA = await CourtFarming_HTStakeDTrIA1.unstake.call(uintV2vRIs, boolbc6ecce, {from: accounts[4]});

		assert.equal(boolZrlNdx4, false)
		assert.equal(boolsgBhRev, false)
		assert.equal(uint256cta95tE, BigInt("0"))
		await expect(CourtFarming_HTStakeDTrIA1.unstake.call(uintV2vRIs, boolbc6ecce, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakehqHGQu4 = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintuLLm3u1 = BigInt("0")
		const uintJXTgSCB = BigInt("2050")
		const boollD7eb5K = true
		const uintIhJ4kbN = BigInt("1937")
		const uintlmN8lCJ = BigInt("1196")
		const uintcH2mgUB = BigInt("728")
		const uint256KQwezp7 = await CourtFarming_HTStakehqHGQu4.stake.call(uintuLLm3u1, {from: accounts[2]});
		const uint256QbjGLAF = await CourtFarming_HTStakehqHGQu4.stake.call(uintJXTgSCB, {from: accounts[3]});
		const uint256fbAnXP0 = await CourtFarming_HTStakehqHGQu4.unstake.call(uintIhJ4kbN, boollD7eb5K, {from: accounts[2]});
		const uint256mY02Kl = await CourtFarming_HTStakehqHGQu4.stake.call(uintlmN8lCJ, {from: accounts[1]});
		const uint256MpvMA3 = await CourtFarming_HTStakehqHGQu4.stake.call(uintcH2mgUB, {from: accounts[3]});

		await expect(CourtFarming_HTStakehqHGQu4.stake.call(uintJXTgSCB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBtrLlDQ = await CourtFarming_HTStake.new({from: accounts[0]});
		const boolYdVnzcB = false
		const uintPGLjzt = BigInt("0")
		const addresspve9wQI = accounts[2]
		const uintz9EcgFs = BigInt("148")
		const uintBrfDDI1 = BigInt("942")
		const uintt6arxW = BigInt("792")
		const uintKQI1VTs = BigInt("1096")
		const uintICCTtmo = BigInt("1352")
		const addresslaQCd0p = accounts[0]
		const uintSp2esY = BigInt("426")
		const uint256gFFlc1Q = await CourtFarming_HTStakeBtrLlDQ.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256t93kRtR = await CourtFarming_HTStakeBtrLlDQ.unstake.call(uintPGLjzt, boolYdVnzcB, {from: accounts[3]});
		const addressMXR9Tg9 = await CourtFarming_HTStakeBtrLlDQ.getBeneficiaryInfo.call(addresspve9wQI, {from: accounts[0]});
		const uint256LSMJRdb = await CourtFarming_HTStakeBtrLlDQ.stake.call(uintz9EcgFs, {from: accounts[0]});
		const uint256RXEA1Bj = await CourtFarming_HTStakeBtrLlDQ.stake.call(uintBrfDDI1, {from: accounts[4]});
		await CourtFarming_HTStakeBtrLlDQ.changeStakeParameters.call(uintICCTtmo, uintKQI1VTs, uintt6arxW, {from: accounts[0]});
		const uint256uhicm5 = await CourtFarming_HTStakeBtrLlDQ.rewards.call(addresslaQCd0p, {from: accounts[2]});
		const uint256yMr2z7l = await CourtFarming_HTStakeBtrLlDQ.expectedRewardsToday.call(uintSp2esY, {from: accounts[2]});

		assert.equal(uint256gFFlc1Q, BigInt("0"))
		await expect(CourtFarming_HTStakeBtrLlDQ.stake.call(uintz9EcgFs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})