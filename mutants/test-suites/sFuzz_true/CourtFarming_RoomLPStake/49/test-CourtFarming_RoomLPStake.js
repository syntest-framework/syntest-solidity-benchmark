const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekaVWcaM = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressPqvey2 = accounts[1]
//		const addressMXAw4Ri = await CourtFarming_RoomLPStakekaVWcaM.setCourtStake.call(addressPqvey2, {from: accounts[5]});
//		const uint256p1nkz3H = await CourtFarming_RoomLPStakekaVWcaM.lastUpdateBlock.call({from: accounts[5]});
//		const uint256o5hW2Sx = await CourtFarming_RoomLPStakekaVWcaM.lastUpdateBlock.call({from: accounts[1]});

		await expect(CourtFarming_RoomLPStakekaVWcaM.setCourtStake.call(addressPqvey2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakemDcUZCL = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const boolKnFjnaH = true
		const uintoeSFqEn = BigInt("1513")
		const addressotkhL7 = accounts[2]
		const uinto2S7f0J = BigInt("769")
		const uint256bkJ6gz0 = await CourtFarming_RoomLPStakemDcUZCL.totalStaked.call({from: accounts[4]});
//		const uint256pcpJjOQ = await CourtFarming_RoomLPStakemDcUZCL.unstake.call(uintoeSFqEn, boolKnFjnaH, {from: accounts[4]});
//		const uint256kc9Al0g = await CourtFarming_RoomLPStakemDcUZCL.balanceOf.call(addressotkhL7, {from: accounts[0]});
//		const uint256ilg1owU = await CourtFarming_RoomLPStakemDcUZCL.expectedRewardsToday.call(uinto2S7f0J, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256bkJ6gz0, BigInt("0"))
		await expect(CourtFarming_RoomLPStakemDcUZCL.unstake.call(uintoeSFqEn, boolKnFjnaH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKyohh59 = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addresseqyI1pe = accounts[3]
		const uintLFXjGkr = BigInt("1724")
		const addressNPAKvWG = accounts[1]
		const uintV7t7VIl = BigInt("829")
		const uint256E8PpgCR = await CourtFarming_RoomLPStakeKyohh59.rewards.call(addresseqyI1pe, {from: accounts[3]});
		const uint256E0qCKWd = await CourtFarming_RoomLPStakeKyohh59.expectedRewardsToday.call(uintLFXjGkr, {from: accounts[2]});
		const uint256WGZEnBy = await CourtFarming_RoomLPStakeKyohh59.blockNumber.call({from: accounts[1]});
		const addressNrgYZPE = await CourtFarming_RoomLPStakeKyohh59.getBeneficiaryInfo.call(addressNPAKvWG, {from: accounts[3]});
		const boolqfCpMm = await CourtFarming_RoomLPStakeKyohh59.stakeIncvRewards.call(uintV7t7VIl, {from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekI9qvay = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addresszjmGc4r = accounts[0]
		const uintylGc4MZ = BigInt("1575")
		const uint256HYbt5Qh = await CourtFarming_RoomLPStakekI9qvay.blockNumber.call({from: accounts[5]});
		const addressZYCx07v = await CourtFarming_RoomLPStakekI9qvay.updateReward.call(addresszjmGc4r, {from: accounts[0]});
		const uint256jBbPkaT = await CourtFarming_RoomLPStakekI9qvay.getCurrentTime.call({from: accounts[2]});
		const boolssFSu6 = await CourtFarming_RoomLPStakekI9qvay.stakeIncvRewards.call(uintylGc4MZ, {from: accounts[1]});
		const uint256rs8Olf0 = await CourtFarming_RoomLPStakekI9qvay.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256niXJb86 = await CourtFarming_RoomLPStakekI9qvay.getCurrentTime.call({from: accounts[1]});

		assert.equal(boolssFSu6, false)
		assert.equal(uint256HYbt5Qh, BigInt("1254"))
		assert.equal(uint256jBbPkaT, BigInt("1630199883"))
		assert.equal(uint256niXJb86, BigInt("1630199883"))
		assert.equal(uint256rs8Olf0, BigInt("1254"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeo6tLP95 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressMq3ZKX0 = "0x0000000000000000000000000000000000000001"
		const boolNxuc4j2 = true
		const uintGVq4ydM = BigInt("174")
		const addressME9i3jS = accounts[0]
		const uint256rDtxTXj = await CourtFarming_RoomLPStakeo6tLP95.balanceOf.call(addressMq3ZKX0, {from: accounts[0]});
//		const uint256BwPQwNC = await CourtFarming_RoomLPStakeo6tLP95.unstake.call(uintGVq4ydM, boolNxuc4j2, {from: accounts[3]});
//		const uint256Wk8VEEB = await CourtFarming_RoomLPStakeo6tLP95.balanceOf.call(addressME9i3jS, {from: accounts[1]});

		assert.equal(uint256rDtxTXj, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeo6tLP95.unstake.call(uintGVq4ydM, boolNxuc4j2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFOFscPk = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintB6tDomk = BigInt("205")
		const uintCuLGwZi = BigInt("1707")
		const uintNpouKBO = BigInt("383")
		const uintnZUJ9zt = BigInt("1342")
		const uintAXWiHHp = BigInt("1739")
		const uintufjJ8jR = BigInt("1153")
		const uint9Kh8Zw = BigInt("1497")
//		await CourtFarming_RoomLPStakeFOFscPk.changeStakeParameters.call(uintNpouKBO, uintCuLGwZi, uintB6tDomk, {from: accounts[4]});
//		const uint256wSWnl2 = await CourtFarming_RoomLPStakeFOFscPk.totalStaked.call({from: accounts[2]});
//		const uint256e4B9tTg = await CourtFarming_RoomLPStakeFOFscPk.stake.call(uintnZUJ9zt, {from: accounts[4]});
//		await CourtFarming_RoomLPStakeFOFscPk.changeStakeParameters.call(uint9Kh8Zw, uintufjJ8jR, uintAXWiHHp, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeFOFscPk.changeStakeParameters.call(uintNpouKBO, uintCuLGwZi, uintB6tDomk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakePZzNrqe = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintNTHIal = BigInt("844")
		const uintI53994Z = BigInt("446")
		const uint256zHP7Nb6 = await CourtFarming_RoomLPStakePZzNrqe.incvRewardClaim.call({from: accounts[0]});
		const uint256ufalmWC = await CourtFarming_RoomLPStakePZzNrqe.expectedRewardsToday.call(uintNTHIal, {from: accounts[5]});
		const uint256yMowjz8 = await CourtFarming_RoomLPStakePZzNrqe.expectedRewardsToday.call(uintI53994Z, {from: accounts[4]});

		assert.equal(uint256zHP7Nb6, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeo6tLP95 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addresskrlCVgB = "0x0000000000000000000000000000000000000001"
		const boolNxuc4j2 = true
		const uintavET6IO = BigInt("174")
		const addresswyvxxgU = accounts[0]
		const uint256ai8W4Yn = await CourtFarming_RoomLPStakeo6tLP95.incvRewardInfo.call({from: accounts[1]});
		const uint256rDtxTXj = await CourtFarming_RoomLPStakeo6tLP95.balanceOf.call(addresskrlCVgB, {from: accounts[0]});
//		const uint256BwPQwNC = await CourtFarming_RoomLPStakeo6tLP95.unstake.call(uintavET6IO, boolNxuc4j2, {from: accounts[3]});
//		const uint256Wk8VEEB = await CourtFarming_RoomLPStakeo6tLP95.balanceOf.call(addresswyvxxgU, {from: accounts[1]});

		assert.equal(uint256rDtxTXj, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeo6tLP95.unstake.call(uintavET6IO, boolNxuc4j2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFOFscPk = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintrVoHRGl = BigInt("1307")
		const uintTWmJz1 = BigInt("1739")
		const uintVTF7Vty = BigInt("1153")
		const uintZIr0Lgf = BigInt("1497")
//		const uint256e4B9tTg = await CourtFarming_RoomLPStakeFOFscPk.stake.call(uintrVoHRGl, {from: accounts[4]});
//		await CourtFarming_RoomLPStakeFOFscPk.changeStakeParameters.call(uintZIr0Lgf, uintVTF7Vty, uintTWmJz1, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeFOFscPk.stake.call(uintrVoHRGl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakePZzNrqe = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressvLKVphg = accounts[2]
		const uintdtnLiwi = BigInt("844")
		const uintrBgf1f1 = BigInt("459")
		const uint256zHP7Nb6 = await CourtFarming_RoomLPStakePZzNrqe.incvRewardClaim.call({from: accounts[0]});
		const uint256PIfzYTa = await CourtFarming_RoomLPStakePZzNrqe.rewards.call(addressvLKVphg, {from: accounts[3]});
		const uint256ufalmWC = await CourtFarming_RoomLPStakePZzNrqe.expectedRewardsToday.call(uintdtnLiwi, {from: accounts[5]});
		const uint256yMowjz8 = await CourtFarming_RoomLPStakePZzNrqe.expectedRewardsToday.call(uintrBgf1f1, {from: accounts[4]});

		assert.equal(uint256zHP7Nb6, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekaVWcaM = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressCTq3Pmv = accounts[0]
		const addressQpJolru = accounts[1]
		const addressAjXsMn7 = await CourtFarming_RoomLPStakekaVWcaM.getBeneficiaryInfo.call(addressCTq3Pmv, {from: accounts[0]});
		const uint256QvZrKBB = await CourtFarming_RoomLPStakekaVWcaM.totalStaked.call({from: accounts[1]});
//		const addressMXAw4Ri = await CourtFarming_RoomLPStakekaVWcaM.setCourtStake.call(addressQpJolru, {from: accounts[5]});
//		const uint256o5hW2Sx = await CourtFarming_RoomLPStakekaVWcaM.lastUpdateBlock.call({from: accounts[1]});

		assert.equal(uint256QvZrKBB, BigInt("0"))
		await expect(CourtFarming_RoomLPStakekaVWcaM.setCourtStake.call(addressQpJolru, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakePZzNrqe = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressgnL5UQ0 = accounts[5]
//		const addressHDY2siC = await CourtFarming_RoomLPStakePZzNrqe.setCourtStake.call(addressgnL5UQ0, {from: accounts[0]});
//		const uint256zHP7Nb6 = await CourtFarming_RoomLPStakePZzNrqe.incvRewardClaim.call({from: accounts[0]});
//		const uint256AptgXTq = await CourtFarming_RoomLPStakePZzNrqe.incvRewardClaim.call({from: accounts[1]});

		await expect(CourtFarming_RoomLPStakePZzNrqe.setCourtStake.call(addressgnL5UQ0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeo3vja3h = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintZc1xfzd = BigInt("2022")
		const uintmU8O1qS = BigInt("645")
		const uintUjyIraP = BigInt("528")
		const uintaCFgaX = BigInt("1936")
		const addressDQqG0d8 = accounts[0]
		const addressEOKYYHs = accounts[0]
		const uint256dADq46Z = await CourtFarming_RoomLPStakeo3vja3h.lastUpdateBlock.call({from: accounts[2]});
//		await CourtFarming_RoomLPStakeo3vja3h.changeStakeParameters.call(uintUjyIraP, uintmU8O1qS, uintZc1xfzd, {from: accounts[1]});
//		const uint256nfYaAah = await CourtFarming_RoomLPStakeo3vja3h.expectedRewardsToday.call(uintaCFgaX, {from: accounts[1]});
//		const uint256AKslq0o = await CourtFarming_RoomLPStakeo3vja3h.rewards.call(addressDQqG0d8, {from: accounts[4]});
//		const uint256RUQQcmr = await CourtFarming_RoomLPStakeo3vja3h.balanceOf.call(addressEOKYYHs, {from: accounts[3]});

		assert.equal(uint256dADq46Z, BigInt("1254"))
		await expect(CourtFarming_RoomLPStakeo3vja3h.changeStakeParameters.call(uintUjyIraP, uintmU8O1qS, uintZc1xfzd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekaVWcaM = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressxv1C468 = accounts[1]
		const uintqNPQlCS = BigInt("0")
		const uintTlfOOZ = BigInt("843")
		const uint256PG38hO2 = await CourtFarming_RoomLPStakekaVWcaM.totalStaked.call({from: accounts[1]});
		const addressAjXsMn7 = await CourtFarming_RoomLPStakekaVWcaM.getBeneficiaryInfo.call(addressxv1C468, {from: accounts[0]});
		const uint256GgoTuNi = await CourtFarming_RoomLPStakekaVWcaM.stake.call(uintqNPQlCS, {from: accounts[4]});
		const uint256BsOc4YM = await CourtFarming_RoomLPStakekaVWcaM.blockNumber.call({from: accounts[5]});
		const uint256zjf6SFA = await CourtFarming_RoomLPStakekaVWcaM.incvRewardInfo.call({from: accounts[2]});
		const uint256Hmny4r = await CourtFarming_RoomLPStakekaVWcaM.expectedRewardsToday.call(uintTlfOOZ, {from: accounts[4]});
		const uint256o5hW2Sx = await CourtFarming_RoomLPStakekaVWcaM.lastUpdateBlock.call({from: accounts[1]});

		assert.equal(uint256BsOc4YM, BigInt("1254"))
		assert.equal(uint256PG38hO2, BigInt("0"))
		assert.equal(uint256o5hW2Sx, BigInt("1254"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekI9qvay = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolarC0Vvs = false
		const uintWfAABw8 = BigInt("0")
		const uintw81pEQ = BigInt("1230")
		const uint256Hs8Q7pp = await CourtFarming_RoomLPStakekI9qvay.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256RAnx6ca = await CourtFarming_RoomLPStakekI9qvay.totalStaked.call({from: accounts[2]});
		const uint256bGghPF = await CourtFarming_RoomLPStakekI9qvay.unstake.call(uintWfAABw8, boolarC0Vvs, {from: accounts[4]});
		const uint256bGPTPyV = await CourtFarming_RoomLPStakekI9qvay.expectedRewardsToday.call(uintw81pEQ, {from: accounts[0]});

		assert.equal(uint256RAnx6ca, BigInt("0"))
	});
})