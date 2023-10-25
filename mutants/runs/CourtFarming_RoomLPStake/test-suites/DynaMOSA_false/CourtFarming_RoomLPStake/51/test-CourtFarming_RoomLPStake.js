const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZsB32mR = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressgqfFxdt = accounts[1]
		const uint256ELsL9hw = await CourtFarming_RoomLPStakeZsB32mR.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLs8lyh = await CourtFarming_RoomLPStakeZsB32mR.getBeneficiaryInfo.call(addressgqfFxdt, {from: accounts[1]});
		const uint256AuEKKs8 = await CourtFarming_RoomLPStakeZsB32mR.totalStaked.call({from: accounts[0]});
		const uint256Hemt9d1 = await CourtFarming_RoomLPStakeZsB32mR.incvRewardInfo.call({from: accounts[3]});
		const uint256taHG0Jy = await CourtFarming_RoomLPStakeZsB32mR.incvRewardClaim.call({from: accounts[4]});
		const uint256Pe0U8zP = await CourtFarming_RoomLPStakeZsB32mR.incvRewardInfo.call({from: accounts[1]});

		assert.equal(uint256AuEKKs8, BigInt("0"))
		assert.equal(uint256ELsL9hw, BigInt("0"))
		assert.equal(uint256taHG0Jy, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTDR5Mwd = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uint256GPRh6GR = await CourtFarming_RoomLPStakeTDR5Mwd.lastUpdateBlock.call({from: accounts[2]});
		const uint256wbCPyTB = await CourtFarming_RoomLPStakeTDR5Mwd.totalStaked.call({from: accounts[4]});

		assert.equal(uint256GPRh6GR, BigInt("1102"))
		assert.equal(uint256wbCPyTB, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelQTbXni = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressTRPrxLc = accounts[5]
		const uintsHXh8Hd = BigInt("1726")
		const uint256S7qEgPt = await CourtFarming_RoomLPStakelQTbXni.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const addressnfGkNW7 = await CourtFarming_RoomLPStakelQTbXni.updateReward.call(addressTRPrxLc, {from: accounts[1]});
		const uint256QMT71uh = await CourtFarming_RoomLPStakelQTbXni.expectedRewardsToday.call(uintsHXh8Hd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256S7qEgPt, BigInt("1630199794"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeX43BUvw = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintR8OTYr8 = BigInt("37")
		const addresscoRJaZn = accounts[0]
		const uint256x9q6R6 = await CourtFarming_RoomLPStakeX43BUvw.blockNumber.call({from: accounts[3]});
		const uint256583QM7 = await CourtFarming_RoomLPStakeX43BUvw.stake.call(uintR8OTYr8, {from: accounts[4]});
		const addressaRqqyF2 = await CourtFarming_RoomLPStakeX43BUvw.updateReward.call(addresscoRJaZn, {from: accounts[0]});
		const uint2567UjOXJ = await CourtFarming_RoomLPStakeX43BUvw.getCurrentTime.call({from: accounts[3]});
		const uint256rvr80g4 = await CourtFarming_RoomLPStakeX43BUvw.blockNumber.call({from: accounts[4]});

		assert.equal(uint256x9q6R6, BigInt("1102"))
		await expect(CourtFarming_RoomLPStakeX43BUvw.stake.call(uintR8OTYr8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeL7CM8XB = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintOCbxaxW = BigInt("636")
		const addressiX06UyU = accounts[1]
		const uint256p5VdiNv = await CourtFarming_RoomLPStakeL7CM8XB.expectedRewardsToday.call(uintOCbxaxW, {from: accounts[3]});
		const uint256hEdJ994 = await CourtFarming_RoomLPStakeL7CM8XB.blockNumber.call({from: accounts[2]});
		const uint256ArFvEI1 = await CourtFarming_RoomLPStakeL7CM8XB.balanceOf.call(addressiX06UyU, {from: accounts[3]});
		const uint256BUWu0ER = await CourtFarming_RoomLPStakeL7CM8XB.totalStaked.call({from: accounts[3]});
		const uint256STAvME = await CourtFarming_RoomLPStakeL7CM8XB.totalStaked.call({from: accounts[3]});

		assert.equal(uint256ArFvEI1, BigInt("0"))
		assert.equal(uint256BUWu0ER, BigInt("0"))
		assert.equal(uint256STAvME, BigInt("0"))
		assert.equal(uint256hEdJ994, BigInt("1102"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeWdUxU2J = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const boolECsNxs = false
		const uintbCwM98e = BigInt("1655")
		const uint256wVfxD3n = await CourtFarming_RoomLPStakeWdUxU2J.unstake.call(uintbCwM98e, boolECsNxs, {from: accounts[1]});
		const uint256gkrHfq5 = await CourtFarming_RoomLPStakeWdUxU2J.incvRewardClaim.call({from: accounts[3]});
		const uint256X5vHUuG = await CourtFarming_RoomLPStakeWdUxU2J.incvRewardInfo.call({from: accounts[2]});

		await expect(CourtFarming_RoomLPStakeWdUxU2J.unstake.call(uintbCwM98e, boolECsNxs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeUvCm7F4 = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbSoo3vF = "0x0000000000000000000000000000000000000001"
		const boolJIpgvUU = false
		const uinttNxLwIv = BigInt("1786")
		const uint256uJJ7Kmn = await CourtFarming_RoomLPStakeUvCm7F4.rewards.call(addressbSoo3vF, {from: accounts[2]});
		const uint256D5uXfMQ = await CourtFarming_RoomLPStakeUvCm7F4.unstake.call(uinttNxLwIv, boolJIpgvUU, {from: accounts[2]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejXzAmOS = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintd4o1A54 = BigInt("1297")
		const addressTawQwVZ = accounts[1]
		const boolkf7MxY0 = await CourtFarming_RoomLPStakejXzAmOS.stakeIncvRewards.call(uintd4o1A54, {from: accounts[0]});
		const uint256hkasnj = await CourtFarming_RoomLPStakejXzAmOS.blockNumber.call({from: accounts[3]});
		const addressKZpMldR = await CourtFarming_RoomLPStakejXzAmOS.updateReward.call(addressTawQwVZ, {from: accounts[4]});

		assert.equal(boolkf7MxY0, false)
		assert.equal(uint256hkasnj, BigInt("1102"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelQTbXni = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressKNgEbV8 = accounts[3]
		const addressN6KdEE = accounts[3]
		const uintR3JGRTT = BigInt("1726")
		const uint256EKPh8dt = await CourtFarming_RoomLPStakelQTbXni.rewards.call(addressKNgEbV8, {from: accounts[5]});
		const uint256S7qEgPt = await CourtFarming_RoomLPStakelQTbXni.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const addressFOwtpp = await CourtFarming_RoomLPStakelQTbXni.setCourtStake.call(addressN6KdEE, {from: accounts[0]});
		const uint256QMT71uh = await CourtFarming_RoomLPStakelQTbXni.expectedRewardsToday.call(uintR3JGRTT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256S7qEgPt, BigInt("1630199803"))
		await expect(CourtFarming_RoomLPStakelQTbXni.setCourtStake.call(addressN6KdEE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejnjeuq1 = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintoBXuHSi = BigInt("1070")
		const uintHuZRc2U = BigInt("1080")
		const uintBTYrOay = BigInt("1400")
		await CourtFarming_RoomLPStakejnjeuq1.changeStakeParameters.call(uintBTYrOay, uintHuZRc2U, uintoBXuHSi, {from: accounts[2]});
		const uint256x20T7zP = await CourtFarming_RoomLPStakejnjeuq1.totalStaked.call({from: accounts[3]});
		const uint256zLWOmlx = await CourtFarming_RoomLPStakejnjeuq1.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakejnjeuq1.changeStakeParameters.call(uintBTYrOay, uintHuZRc2U, uintoBXuHSi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZsB32mR = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressj7n5cPA = accounts[4]
		const addressZqCBsbX = accounts[2]
		const uintZLaN6yS = BigInt("1044")
		const uint256ELsL9hw = await CourtFarming_RoomLPStakeZsB32mR.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const addressI8Yw3D8 = await CourtFarming_RoomLPStakeZsB32mR.setCourtStake.call(addressj7n5cPA, {from: accounts[4]});
		const addressLs8lyh = await CourtFarming_RoomLPStakeZsB32mR.getBeneficiaryInfo.call(addressZqCBsbX, {from: accounts[1]});
		const uint256AuEKKs8 = await CourtFarming_RoomLPStakeZsB32mR.totalStaked.call({from: accounts[0]});
		const uint256Hemt9d1 = await CourtFarming_RoomLPStakeZsB32mR.incvRewardInfo.call({from: accounts[3]});
		const uint256taHG0Jy = await CourtFarming_RoomLPStakeZsB32mR.incvRewardClaim.call({from: accounts[4]});
		const uint256BANYBS8 = await CourtFarming_RoomLPStakeZsB32mR.stake.call(uintZLaN6yS, {from: accounts[3]});
		const uint256ViIZEnQ = await CourtFarming_RoomLPStakeZsB32mR.lastUpdateBlock.call({from: accounts[1]});
		const uint256Pe0U8zP = await CourtFarming_RoomLPStakeZsB32mR.incvRewardInfo.call({from: accounts[1]});

		assert.equal(uint256ELsL9hw, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeZsB32mR.setCourtStake.call(addressj7n5cPA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeX43BUvw = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintjjpl49m = BigInt("0")
		const uint256583QM7 = await CourtFarming_RoomLPStakeX43BUvw.stake.call(uintjjpl49m, {from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerszLicF = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolc4zEx1D = true
		const uintMlbqNZa = BigInt("0")
		const boolZzlF1Ym = false
		const uintZtkenuA = BigInt("1264")
		const uint256OKLI1jf = await CourtFarming_RoomLPStakerszLicF.unstake.call(uintMlbqNZa, boolc4zEx1D, {from: accounts[0]});
		const uint256pWv48YB = await CourtFarming_RoomLPStakerszLicF.blockNumber.call({from: accounts[0]});
		const uint256FN0mQPb = await CourtFarming_RoomLPStakerszLicF.unstake.call(uintZtkenuA, boolZzlF1Ym, {from: accounts[0]});
		const uint256I5e4aCW = await CourtFarming_RoomLPStakerszLicF.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256pWv48YB, BigInt("1102"))
		await expect(CourtFarming_RoomLPStakerszLicF.unstake.call(uintZtkenuA, boolZzlF1Ym, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZsB32mR = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addresscGApZk3 = accounts[1]
		const uintxNKtjbi = BigInt("713")
		const uinthtk0jn8 = BigInt("0")
		const uint256ELsL9hw = await CourtFarming_RoomLPStakeZsB32mR.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLs8lyh = await CourtFarming_RoomLPStakeZsB32mR.getBeneficiaryInfo.call(addresscGApZk3, {from: accounts[1]});
		const uint256eHxMhVh = await CourtFarming_RoomLPStakeZsB32mR.blockNumber.call({from: accounts[4]});
		const uint256AuEKKs8 = await CourtFarming_RoomLPStakeZsB32mR.totalStaked.call({from: accounts[0]});
		const uint256Hemt9d1 = await CourtFarming_RoomLPStakeZsB32mR.incvRewardInfo.call({from: accounts[3]});
		const boolqcjpTD7 = await CourtFarming_RoomLPStakeZsB32mR.stakeIncvRewards.call(uintxNKtjbi, {from: accounts[1]});
		const uint256G1ajbJq = await CourtFarming_RoomLPStakeZsB32mR.getCurrentTime.call({from: accounts[3]});
		const boolRvorxJn = await CourtFarming_RoomLPStakeZsB32mR.stakeIncvRewards.call(uinthtk0jn8, {from: accounts[0]});
		const uint256Pe0U8zP = await CourtFarming_RoomLPStakeZsB32mR.incvRewardInfo.call({from: accounts[1]});

		assert.equal(boolRvorxJn, false)
		assert.equal(boolqcjpTD7, false)
		assert.equal(uint256AuEKKs8, BigInt("0"))
		assert.equal(uint256ELsL9hw, BigInt("0"))
		assert.equal(uint256G1ajbJq, BigInt("1630199797"))
		assert.equal(uint256eHxMhVh, BigInt("1102"))
	});
})