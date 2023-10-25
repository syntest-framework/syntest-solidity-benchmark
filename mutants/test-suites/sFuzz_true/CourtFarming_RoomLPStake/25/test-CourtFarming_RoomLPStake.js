const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakepq8Iso3 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintenGc9PK = BigInt("1395")
		const uintCgAMRHV = BigInt("1765")
		const addressMCt4csh = "0x0000000000000000000000000000000000000001"
		const uint256xxpOZhW = await CourtFarming_RoomLPStakepq8Iso3.expectedRewardsToday.call(uintenGc9PK, {from: accounts[4]});
		const boolevgQc4C = await CourtFarming_RoomLPStakepq8Iso3.stakeIncvRewards.call(uintCgAMRHV, {from: accounts[0]});
		const addressCevrorb = await CourtFarming_RoomLPStakepq8Iso3.updateReward.call(addressMCt4csh, {from: accounts[0]});

		assert.equal(boolevgQc4C, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakem1ezPu = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintq31lWM = BigInt("20")
		const uintH7j9wmA = BigInt("1241")
		const uint256hFqcBq4 = await CourtFarming_RoomLPStakem1ezPu.expectedRewardsToday.call(uintq31lWM, {from: accounts[2]});
//		const uint256jN1LrB8 = await CourtFarming_RoomLPStakem1ezPu.stake.call(uintH7j9wmA, {from: accounts[1]});
//		const uint256mci9Qco = await CourtFarming_RoomLPStakem1ezPu.incvRewardInfo.call({from: accounts[2]});

		await expect(CourtFarming_RoomLPStakem1ezPu.stake.call(uintH7j9wmA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeihAaKDw = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressPwtGabG = accounts[2]
		const boolkfJeCFN = false
		const uinttvgpWCC = BigInt("1669")
		const boolj7oT28N = false
		const uintu2CQfvI = BigInt("1170")
		const addressF7CFV26 = accounts[2]
		const uint256A8e3V3a = await CourtFarming_RoomLPStakeihAaKDw.rewards.call(addressPwtGabG, {from: accounts[1]});
//		const uint256uIZDwkH = await CourtFarming_RoomLPStakeihAaKDw.unstake.call(uinttvgpWCC, boolkfJeCFN, {from: accounts[0]});
//		const uint256Z2s7vZ = await CourtFarming_RoomLPStakeihAaKDw.incvRewardInfo.call({from: accounts[2]});
//		const uint256SVomZJ6 = await CourtFarming_RoomLPStakeihAaKDw.unstake.call(uintu2CQfvI, boolj7oT28N, {from: accounts[2]});
//		const uint256wMiwoAQ = await CourtFarming_RoomLPStakeihAaKDw.rewards.call(addressF7CFV26, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeihAaKDw.unstake.call(uinttvgpWCC, boolkfJeCFN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQLcUUxK = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintXNihj3F = BigInt("394")
		const uintcrwb422 = BigInt("358")
		const addressbIKeKJa = "0x0000000000000000000000000000000000000001"
		const uint256MfkDYlb = await CourtFarming_RoomLPStakeQLcUUxK.incvRewardClaim.call({from: accounts[0]});
		const boollwJXvfi = await CourtFarming_RoomLPStakeQLcUUxK.stakeIncvRewards.call(uintXNihj3F, {from: accounts[1]});
		const uint256PcyXsZd = await CourtFarming_RoomLPStakeQLcUUxK.getCurrentTime.call({from: accounts[2]});
		const uint256vafjMH = await CourtFarming_RoomLPStakeQLcUUxK.expectedRewardsToday.call(uintcrwb422, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ESfJVcS = await CourtFarming_RoomLPStakeQLcUUxK.rewards.call(addressbIKeKJa, {from: accounts[2]});

		assert.equal(boollwJXvfi, false)
		assert.equal(uint256MfkDYlb, BigInt("0"))
		assert.equal(uint256PcyXsZd, BigInt("1630199753"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerXyEaxt = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressxq8kLlL = accounts[3]
		const addressXoT8anD = accounts[2]
		const uintSuWaGZ8 = BigInt("766")
		const uintsc5EGF2 = BigInt("478")
		const uint256ZqJJeAC = await CourtFarming_RoomLPStakerXyEaxt.balanceOf.call(addressxq8kLlL, {from: accounts[5]});
		const addresseRSynm1 = await CourtFarming_RoomLPStakerXyEaxt.updateReward.call(addressXoT8anD, {from: accounts[2]});
		const uint256mHcyVqX = await CourtFarming_RoomLPStakerXyEaxt.expectedRewardsToday.call(uintSuWaGZ8, {from: accounts[1]});
		const uint256UeKl07D = await CourtFarming_RoomLPStakerXyEaxt.expectedRewardsToday.call(uintsc5EGF2, {from: accounts[1]});

		assert.equal(uint256ZqJJeAC, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeCppCooF = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressYXI82f9 = accounts[2]
		const uintvdZvnbB = BigInt("1867")
		const boolYdNeQdS = true
		const uintusuvyN = BigInt("501")
		const addresseGu0xxE = accounts[3]
		const uint256qfKToe4 = await CourtFarming_RoomLPStakeCppCooF.totalStaked.call({from: accounts[1]});
//		const addressuZA9zWC = await CourtFarming_RoomLPStakeCppCooF.setCourtStake.call(addressYXI82f9, {from: accounts[1]});
//		const boolNmiBlos = await CourtFarming_RoomLPStakeCppCooF.stakeIncvRewards.call(uintvdZvnbB, {from: accounts[0]});
//		const uint256e4JrnZP = await CourtFarming_RoomLPStakeCppCooF.unstake.call(uintusuvyN, boolYdNeQdS, {from: accounts[3]});
//		const addressCaoDqAb = await CourtFarming_RoomLPStakeCppCooF.updateReward.call(addresseGu0xxE, {from: accounts[2]});

		assert.equal(uint256qfKToe4, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeCppCooF.setCourtStake.call(addressYXI82f9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerXyEaxt = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressShtKdiG = accounts[3]
		const addressfJW3kTq = accounts[2]
		const uintAOyEorq = BigInt("791")
		const uintNvNFOb = BigInt("478")
		const addressKyiuyzI = accounts[1]
		const uint256ZqJJeAC = await CourtFarming_RoomLPStakerXyEaxt.balanceOf.call(addressShtKdiG, {from: accounts[5]});
		const uint256C6cMFAR = await CourtFarming_RoomLPStakerXyEaxt.incvRewardInfo.call({from: accounts[3]});
		const addresseRSynm1 = await CourtFarming_RoomLPStakerXyEaxt.updateReward.call(addressfJW3kTq, {from: accounts[2]});
		const uint256mHcyVqX = await CourtFarming_RoomLPStakerXyEaxt.expectedRewardsToday.call(uintAOyEorq, {from: accounts[1]});
		const uint256UeKl07D = await CourtFarming_RoomLPStakerXyEaxt.expectedRewardsToday.call(uintNvNFOb, {from: accounts[1]});
		const addressN6eIpwT = await CourtFarming_RoomLPStakerXyEaxt.updateReward.call(addressKyiuyzI, {from: accounts[2]});

		assert.equal(uint256ZqJJeAC, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQLcUUxK = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintpNmNFNK = BigInt("607")
		const uintji2TLlI = BigInt("394")
		const uintPDeUEzM = BigInt("358")
		const addressiYRv37m = "0x0000000000000000000000000000000000000001"
		const uint256Oi7nvaA = await CourtFarming_RoomLPStakeQLcUUxK.expectedRewardsToday.call(uintpNmNFNK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MfkDYlb = await CourtFarming_RoomLPStakeQLcUUxK.incvRewardClaim.call({from: accounts[0]});
		const uint256X4tNuwW = await CourtFarming_RoomLPStakeQLcUUxK.blockNumber.call({from: accounts[1]});
		const uint256jKpyBmO = await CourtFarming_RoomLPStakeQLcUUxK.getCurrentTime.call({from: accounts[4]});
		const uint25652bRtS = await CourtFarming_RoomLPStakeQLcUUxK.lastUpdateBlock.call({from: accounts[3]});
		const boollwJXvfi = await CourtFarming_RoomLPStakeQLcUUxK.stakeIncvRewards.call(uintji2TLlI, {from: accounts[1]});
		const uint256PcyXsZd = await CourtFarming_RoomLPStakeQLcUUxK.getCurrentTime.call({from: accounts[2]});
		const uint256vafjMH = await CourtFarming_RoomLPStakeQLcUUxK.expectedRewardsToday.call(uintPDeUEzM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ESfJVcS = await CourtFarming_RoomLPStakeQLcUUxK.rewards.call(addressiYRv37m, {from: accounts[2]});

		assert.equal(boollwJXvfi, false)
		assert.equal(uint25652bRtS, BigInt("1211"))
		assert.equal(uint256MfkDYlb, BigInt("0"))
		assert.equal(uint256PcyXsZd, BigInt("1630199751"))
		assert.equal(uint256X4tNuwW, BigInt("1211"))
		assert.equal(uint256jKpyBmO, BigInt("1630199751"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeaRXyta = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressb5vbYq = accounts[4]
		const addressfWIoIDx = accounts[2]
		const addressgrGJvfy = accounts[3]
		const addressiTEHueg = accounts[3]
		const addressq2sHvl = await CourtFarming_RoomLPStakeaRXyta.getBeneficiaryInfo.call(addressb5vbYq, {from: accounts[0]});
		const addresszbJzwH4 = await CourtFarming_RoomLPStakeaRXyta.updateReward.call(addressfWIoIDx, {from: accounts[1]});
		const uint256bukB0uU = await CourtFarming_RoomLPStakeaRXyta.rewards.call(addressgrGJvfy, {from: accounts[0]});
		const uint256tgo6FCP = await CourtFarming_RoomLPStakeaRXyta.blockNumber.call({from: accounts[4]});
		const uint256Wsv69Xy = await CourtFarming_RoomLPStakeaRXyta.rewards.call(addressiTEHueg, {from: accounts[1]});

		assert.equal(uint256tgo6FCP, BigInt("1211"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQLcUUxK = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintnh7HKH = BigInt("394")
		const uintdZNHUM0 = BigInt("358")
		const uintvGxH8Yl = BigInt("758")
		const uintifvvj9t = BigInt("862")
		const uintRsyiyZk = BigInt("661")
		const addressfE9x6HN = "0x0000000000000000000000000000000000000000"
		const boollwJXvfi = await CourtFarming_RoomLPStakeQLcUUxK.stakeIncvRewards.call(uintnh7HKH, {from: accounts[1]});
		const uint256PcyXsZd = await CourtFarming_RoomLPStakeQLcUUxK.getCurrentTime.call({from: accounts[2]});
		const uint256vafjMH = await CourtFarming_RoomLPStakeQLcUUxK.expectedRewardsToday.call(uintdZNHUM0, {from: "0x0000000000000000000000000000000000000001"});
//		await CourtFarming_RoomLPStakeQLcUUxK.changeStakeParameters.call(uintRsyiyZk, uintifvvj9t, uintvGxH8Yl, {from: accounts[2]});
//		const uint256ESfJVcS = await CourtFarming_RoomLPStakeQLcUUxK.rewards.call(addressfE9x6HN, {from: accounts[2]});

		assert.equal(boollwJXvfi, false)
		assert.equal(uint256PcyXsZd, BigInt("1630199748"))
		await expect(CourtFarming_RoomLPStakeQLcUUxK.changeStakeParameters.call(uintRsyiyZk, uintifvvj9t, uintvGxH8Yl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeaRXyta = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressFjI87Xt = accounts[4]
		const addressNdU03BX = accounts[4]
		const boolKOlxwOP = false
		const uinttWoyOY = BigInt("266")
		const addressSC1yZBX = accounts[3]
		const addresslbbGBWK = accounts[3]
		const addressTl2iCsu = accounts[3]
		const addressq2sHvl = await CourtFarming_RoomLPStakeaRXyta.getBeneficiaryInfo.call(addressFjI87Xt, {from: accounts[0]});
//		const addresstY335qA = await CourtFarming_RoomLPStakeaRXyta.setCourtStake.call(addressNdU03BX, {from: accounts[4]});
//		const uint256gYwACcv = await CourtFarming_RoomLPStakeaRXyta.unstake.call(uinttWoyOY, boolKOlxwOP, {from: accounts[2]});
//		const uint256bukB0uU = await CourtFarming_RoomLPStakeaRXyta.rewards.call(addressSC1yZBX, {from: accounts[0]});
//		const uint256tgo6FCP = await CourtFarming_RoomLPStakeaRXyta.blockNumber.call({from: accounts[4]});
//		const uint256Wsv69Xy = await CourtFarming_RoomLPStakeaRXyta.rewards.call(addresslbbGBWK, {from: accounts[1]});
//		const uint256OM5iiSM = await CourtFarming_RoomLPStakeaRXyta.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressPnPp2F9 = await CourtFarming_RoomLPStakeaRXyta.setCourtStake.call(addressTl2iCsu, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeaRXyta.setCourtStake.call(addressNdU03BX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakewy3M5hU = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCOq2zIS = "0x0000000000000000000000000000000000000001"
		const addressfYLzgP4 = await CourtFarming_RoomLPStakewy3M5hU.updateReward.call(addressCOq2zIS, {from: accounts[4]});
		const uint25649kRei = await CourtFarming_RoomLPStakewy3M5hU.lastUpdateBlock.call({from: accounts[2]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQLcUUxK = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressj2uJAaY = "0x00000000000000000000000000000000000000-1"
		const boolNhfAaO3 = true
		const uintr3nUMVz = BigInt("1077")
//		const uint256ESfJVcS = await CourtFarming_RoomLPStakeQLcUUxK.rewards.call(addressj2uJAaY, {from: accounts[2]});
//		const uint256oFkS9to = await CourtFarming_RoomLPStakeQLcUUxK.unstake.call(uintr3nUMVz, boolNhfAaO3, {from: accounts[2]});
//		const uint256NqUZGNR = await CourtFarming_RoomLPStakeQLcUUxK.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakeQLcUUxK.rewards.call(addressj2uJAaY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQLcUUxK = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintk11Hj7 = BigInt("2017")
		const uintpIBxYRX = BigInt("284")
		const uintKw5Hl9B = BigInt("1035")
		const addresswnfLsJi = "0x0000000000000000000000000000000000000001"
//		await CourtFarming_RoomLPStakeQLcUUxK.changeStakeParameters.call(uintKw5Hl9B, uintpIBxYRX, uintk11Hj7, {from: accounts[3]});
//		const uint256ESfJVcS = await CourtFarming_RoomLPStakeQLcUUxK.rewards.call(addresswnfLsJi, {from: accounts[2]});

		await expect(CourtFarming_RoomLPStakeQLcUUxK.changeStakeParameters.call(uintKw5Hl9B, uintpIBxYRX, uintk11Hj7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakellCCaKq = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintuiqkGFY = BigInt("0")
		const uintUBwndfh = BigInt("870")
		const uint256x4u2sdo = await CourtFarming_RoomLPStakellCCaKq.blockNumber.call({from: accounts[2]});
		const uint256V4Nh0IM = await CourtFarming_RoomLPStakellCCaKq.stake.call(uintuiqkGFY, {from: accounts[2]});
		const boolKtyR8J = await CourtFarming_RoomLPStakellCCaKq.stakeIncvRewards.call(uintUBwndfh, {from: accounts[4]});

		assert.equal(boolKtyR8J, false)
		assert.equal(uint256x4u2sdo, BigInt("1211"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQLcUUxK = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uinteWU1vpQ = BigInt("1480")
		const uintPa2By0r = BigInt("0")
		const boolaBVSAWO = await CourtFarming_RoomLPStakeQLcUUxK.stakeIncvRewards.call(uinteWU1vpQ, {from: accounts[0]});
		const boollwJXvfi = await CourtFarming_RoomLPStakeQLcUUxK.stakeIncvRewards.call(uintPa2By0r, {from: accounts[1]});

		assert.equal(boolaBVSAWO, false)
		assert.equal(boollwJXvfi, false)
	});
})