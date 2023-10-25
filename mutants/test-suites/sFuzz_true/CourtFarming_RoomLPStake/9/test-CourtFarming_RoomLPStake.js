const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStaketFJhrbG = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressOb5Zkys = accounts[5]
		const addressd76aT44 = accounts[1]
		const addresszAXcNR9 = await CourtFarming_RoomLPStaketFJhrbG.updateReward.call(addressOb5Zkys, {from: accounts[0]});
		const uint256B0hlxU = await CourtFarming_RoomLPStaketFJhrbG.rewards.call(addressd76aT44, {from: accounts[0]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeEUFod3x = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintE5sXML3 = BigInt("2047")
		const boolMidoevl = true
		const uintFnEroGV = BigInt("1568")
//		const uint256dOL7ZUy = await CourtFarming_RoomLPStakeEUFod3x.stake.call(uintE5sXML3, {from: accounts[1]});
//		const uint256hfDvbO = await CourtFarming_RoomLPStakeEUFod3x.unstake.call(uintFnEroGV, boolMidoevl, {from: accounts[0]});
//		const uint256zDRf8B3 = await CourtFarming_RoomLPStakeEUFod3x.totalStaked.call({from: accounts[2]});
//		const uint256JUfPykW = await CourtFarming_RoomLPStakeEUFod3x.lastUpdateBlock.call({from: accounts[0]});
//		const uint256OFyHs5r = await CourtFarming_RoomLPStakeEUFod3x.incvRewardInfo.call({from: accounts[5]});

		await expect(CourtFarming_RoomLPStakeEUFod3x.stake.call(uintE5sXML3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeDcdHs9t = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressvCC9N81 = accounts[3]
		const uintYJa4Ve4 = BigInt("1388")
		const uint256zPhWezj = await CourtFarming_RoomLPStakeDcdHs9t.balanceOf.call(addressvCC9N81, {from: accounts[4]});
		const uint256x0aZJNy = await CourtFarming_RoomLPStakeDcdHs9t.incvRewardInfo.call({from: accounts[1]});
		const uint256omhMx2j = await CourtFarming_RoomLPStakeDcdHs9t.lastUpdateBlock.call({from: accounts[3]});
		const uint256PKQc2xz = await CourtFarming_RoomLPStakeDcdHs9t.expectedRewardsToday.call(uintYJa4Ve4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vTsmoFQ = await CourtFarming_RoomLPStakeDcdHs9t.getCurrentTime.call({from: accounts[3]});
		const uint256pHFbBct = await CourtFarming_RoomLPStakeDcdHs9t.getCurrentTime.call({from: accounts[4]});

		assert.equal(uint256omhMx2j, BigInt("1297"))
		assert.equal(uint256pHFbBct, BigInt("1630200116"))
		assert.equal(uint256vTsmoFQ, BigInt("1630200116"))
		assert.equal(uint256zPhWezj, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerDZgiLw = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const boolF9IU1sw = true
		const uintNAxwWxl = BigInt("93")
		const uint256Ktx6AoZ = await CourtFarming_RoomLPStakerDZgiLw.getCurrentTime.call({from: accounts[1]});
		const uint256jui1Xx6 = await CourtFarming_RoomLPStakerDZgiLw.getCurrentTime.call({from: accounts[4]});
//		const uint256it6sLd1 = await CourtFarming_RoomLPStakerDZgiLw.unstake.call(uintNAxwWxl, boolF9IU1sw, {from: accounts[3]});

		assert.equal(uint256Ktx6AoZ, BigInt("1630200118"))
		assert.equal(uint256jui1Xx6, BigInt("1630200118"))
		await expect(CourtFarming_RoomLPStakerDZgiLw.unstake.call(uintNAxwWxl, boolF9IU1sw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake67Q0Mw = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressrwNBmDg = accounts[0]
		const addressqZTNtNJ = accounts[0]
		const addressYCbS8vQ = "0x0000000000000000000000000000000000000001"
		const addresszxKhlnO = accounts[2]
		const addressYtL61ao = await CourtFarming_RoomLPStake67Q0Mw.getBeneficiaryInfo.call(addressrwNBmDg, {from: accounts[1]});
		const uint256EPW2MM7 = await CourtFarming_RoomLPStake67Q0Mw.balanceOf.call(addressqZTNtNJ, {from: accounts[1]});
		const uint256sm1R3LW = await CourtFarming_RoomLPStake67Q0Mw.balanceOf.call(addressYCbS8vQ, {from: accounts[3]});
		const uint256bgivRuZ = await CourtFarming_RoomLPStake67Q0Mw.rewards.call(addresszxKhlnO, {from: accounts[0]});

		assert.equal(uint256EPW2MM7, BigInt("0"))
		assert.equal(uint256sm1R3LW, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakesP4pdXx = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKNbqL4 = BigInt("1157")
		const boolKkoPLA5 = true
		const uintNfpkqPV = BigInt("656")
		const uint256FqTFIjE = await CourtFarming_RoomLPStakesP4pdXx.expectedRewardsToday.call(uintKNbqL4, {from: accounts[2]});
		const uint256KoqAY9q = await CourtFarming_RoomLPStakesP4pdXx.unstake.call(uintNfpkqPV, boolKkoPLA5, {from: accounts[5]});
		const uint256MPBTftA = await CourtFarming_RoomLPStakesP4pdXx.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256j7tf8oE = await CourtFarming_RoomLPStakesP4pdXx.lastUpdateBlock.call({from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHjI8A9M = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressldWJpiv = accounts[0]
		const boolhCzsSQ = false
		const uintBNqxJY1 = BigInt("2046")
		const boolRDN94N2 = false
		const uintQnvYF3H = BigInt("1725")
//		const addressMpa6MWB = await CourtFarming_RoomLPStakeHjI8A9M.setCourtStake.call(addressldWJpiv, {from: accounts[1]});
//		const uint256eVgXzHA = await CourtFarming_RoomLPStakeHjI8A9M.unstake.call(uintBNqxJY1, boolhCzsSQ, {from: accounts[0]});
//		const uint256Up6j2R = await CourtFarming_RoomLPStakeHjI8A9M.unstake.call(uintQnvYF3H, boolRDN94N2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakeHjI8A9M.setCourtStake.call(addressldWJpiv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeMct3sEQ = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addresslBooOUO = accounts[2]
		const uintyc9Dves = BigInt("161")
		const uintseXM319 = BigInt("1356")
		const uintNUZqV1D = BigInt("1955")
		const uint256NHsZxhp = await CourtFarming_RoomLPStakeMct3sEQ.incvRewardInfo.call({from: accounts[0]});
		const addressj7OSQGB = await CourtFarming_RoomLPStakeMct3sEQ.updateReward.call(addresslBooOUO, {from: accounts[4]});
//		await CourtFarming_RoomLPStakeMct3sEQ.changeStakeParameters.call(uintNUZqV1D, uintseXM319, uintyc9Dves, {from: accounts[0]});
//		const uint256SHW2Hui = await CourtFarming_RoomLPStakeMct3sEQ.lastUpdateBlock.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeMct3sEQ.changeStakeParameters.call(uintNUZqV1D, uintseXM319, uintyc9Dves, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeRkSV87H = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintOfh05m = BigInt("1193")
		const uintUbPQcEJ = BigInt("337")
		const addressu5IVZxX = accounts[0]
		const uint256Vd3vilF = await CourtFarming_RoomLPStakeRkSV87H.expectedRewardsToday.call(uintOfh05m, {from: accounts[0]});
		const uint256Pnf6hOb = await CourtFarming_RoomLPStakeRkSV87H.getCurrentTime.call({from: accounts[3]});
		const boolPPgOM0I = await CourtFarming_RoomLPStakeRkSV87H.stakeIncvRewards.call(uintUbPQcEJ, {from: accounts[1]});
//		const addressQanmmq = await CourtFarming_RoomLPStakeRkSV87H.setCourtStake.call(addressu5IVZxX, {from: accounts[0]});
//		const uint256wMCwUmp = await CourtFarming_RoomLPStakeRkSV87H.getCurrentTime.call({from: accounts[2]});

		assert.equal(boolPPgOM0I, false)
		assert.equal(uint256Pnf6hOb, BigInt("1630200118"))
		await expect(CourtFarming_RoomLPStakeRkSV87H.setCourtStake.call(addressu5IVZxX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake67Q0Mw = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const address4ZKpcA = accounts[1]
		const addressUIWTsBX = accounts[0]
		const addressUrfSBp2 = "0x0000000000000000000000000000000000000001"
		const addresskjzN8h = accounts[2]
		const addressYtL61ao = await CourtFarming_RoomLPStake67Q0Mw.getBeneficiaryInfo.call(address4ZKpcA, {from: accounts[1]});
		const uint256EPW2MM7 = await CourtFarming_RoomLPStake67Q0Mw.balanceOf.call(addressUIWTsBX, {from: accounts[1]});
		const uint256rBTif1n = await CourtFarming_RoomLPStake67Q0Mw.incvRewardInfo.call({from: accounts[0]});
		const uint256sm1R3LW = await CourtFarming_RoomLPStake67Q0Mw.balanceOf.call(addressUrfSBp2, {from: accounts[3]});
		const uint256TwE5GNO = await CourtFarming_RoomLPStake67Q0Mw.incvRewardClaim.call({from: accounts[1]});
		const uint256bgivRuZ = await CourtFarming_RoomLPStake67Q0Mw.rewards.call(addresskjzN8h, {from: accounts[0]});

		assert.equal(uint256EPW2MM7, BigInt("0"))
		assert.equal(uint256TwE5GNO, BigInt("0"))
		assert.equal(uint256sm1R3LW, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerLRAhKZ = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addresszF4EGnE = accounts[5]
		const addressNGj1Oq = accounts[0]
		const addressHseBMsQ = accounts[1]
		const uintXVOWsoH = BigInt("1239")
		const addressKAdoSjg = accounts[1]
		const uint256oGAQClM = await CourtFarming_RoomLPStakerLRAhKZ.balanceOf.call(addresszF4EGnE, {from: accounts[2]});
		const uint256qBp0zQ2 = await CourtFarming_RoomLPStakerLRAhKZ.balanceOf.call(addressNGj1Oq, {from: accounts[4]});
		const uint256jKuKvEa = await CourtFarming_RoomLPStakerLRAhKZ.totalStaked.call({from: accounts[3]});
		const uint256psmD0Ep = await CourtFarming_RoomLPStakerLRAhKZ.balanceOf.call(addressHseBMsQ, {from: accounts[5]});
//		const uint256RJWlf0X = await CourtFarming_RoomLPStakerLRAhKZ.stake.call(uintXVOWsoH, {from: accounts[5]});
//		const addressGnOLspd = await CourtFarming_RoomLPStakerLRAhKZ.setCourtStake.call(addressKAdoSjg, {from: accounts[3]});

		assert.equal(uint256jKuKvEa, BigInt("0"))
		assert.equal(uint256oGAQClM, BigInt("0"))
		assert.equal(uint256psmD0Ep, BigInt("0"))
		assert.equal(uint256qBp0zQ2, BigInt("0"))
		await expect(CourtFarming_RoomLPStakerLRAhKZ.stake.call(uintXVOWsoH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake67Q0Mw = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addresswVp1iNf = accounts[0]
		const uintRsBCFMt = BigInt("215")
		const uintzQ8JSh = BigInt("1109")
		const uintVJ3S3o = BigInt("1630")
		const addressCGAXJSz = "0x0000000000000000000000000000000000000001"
		const addresspkfX0dN = accounts[2]
		const addressYtL61ao = await CourtFarming_RoomLPStake67Q0Mw.getBeneficiaryInfo.call(addresswVp1iNf, {from: accounts[1]});
//		await CourtFarming_RoomLPStake67Q0Mw.changeStakeParameters.call(uintVJ3S3o, uintzQ8JSh, uintRsBCFMt, {from: accounts[3]});
//		const uint256sm1R3LW = await CourtFarming_RoomLPStake67Q0Mw.balanceOf.call(addressCGAXJSz, {from: accounts[3]});
//		const uint256bgivRuZ = await CourtFarming_RoomLPStake67Q0Mw.rewards.call(addresspkfX0dN, {from: accounts[0]});

		await expect(CourtFarming_RoomLPStake67Q0Mw.changeStakeParameters.call(uintVJ3S3o, uintzQ8JSh, uintRsBCFMt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerDZgiLw = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintZmuR8h1 = BigInt("1532")
		const uintyWw8Nx = BigInt("0")
		const boolLggT28P = await CourtFarming_RoomLPStakerDZgiLw.stakeIncvRewards.call(uintZmuR8h1, {from: accounts[1]});
		const uint256fRoLICW = await CourtFarming_RoomLPStakerDZgiLw.lastUpdateBlock.call({from: accounts[2]});
		const boolSDZExjH = await CourtFarming_RoomLPStakerDZgiLw.stakeIncvRewards.call(uintyWw8Nx, {from: accounts[3]});
		const uint256xyD2jGC = await CourtFarming_RoomLPStakerDZgiLw.incvRewardInfo.call({from: accounts[2]});

		assert.equal(boolLggT28P, false)
		assert.equal(boolSDZExjH, false)
		assert.equal(uint256fRoLICW, BigInt("1297"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerDZgiLw = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const boolF9IU1sw = false
		const uintRdaLA5C = BigInt("0")
		const uint256it6sLd1 = await CourtFarming_RoomLPStakerDZgiLw.unstake.call(uintRdaLA5C, boolF9IU1sw, {from: accounts[3]});
		const uint256N7Ah2qJ = await CourtFarming_RoomLPStakerDZgiLw.getCurrentTime.call({from: accounts[2]});

		assert.equal(uint256N7Ah2qJ, BigInt("1630200120"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStaketFJhrbG = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressFcuEB4w = accounts[7]
		const uintS5T51BV = BigInt("0")
		const uint256ocKsvGQ = await CourtFarming_RoomLPStaketFJhrbG.totalStaked.call({from: accounts[1]});
		const addresszAXcNR9 = await CourtFarming_RoomLPStaketFJhrbG.updateReward.call(addressFcuEB4w, {from: accounts[0]});
		const uint256KRSi3jE = await CourtFarming_RoomLPStaketFJhrbG.stake.call(uintS5T51BV, {from: accounts[0]});

		assert.equal(uint256ocKsvGQ, BigInt("0"))
	});
})