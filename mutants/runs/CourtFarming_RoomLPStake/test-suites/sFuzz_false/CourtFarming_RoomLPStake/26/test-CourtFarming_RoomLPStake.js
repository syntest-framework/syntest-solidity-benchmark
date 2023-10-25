const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelll48sK = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOMPUR7A = accounts[4]
		const uintt8jLHrw = BigInt("466")
		const uint256lykphH = await CourtFarming_RoomLPStakelll48sK.incvRewardInfo.call({from: accounts[4]});
		const uint256cI6YBEV = await CourtFarming_RoomLPStakelll48sK.incvRewardInfo.call({from: accounts[1]});
		const addressn1vcgeS = await CourtFarming_RoomLPStakelll48sK.setCourtStake.call(addressOMPUR7A, {from: accounts[5]});
		const boolfwhWfOY = await CourtFarming_RoomLPStakelll48sK.stakeIncvRewards.call(uintt8jLHrw, {from: accounts[0]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakevMrvZJ = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressoFkKfR7 = accounts[0]
		const uintYHewHJL = BigInt("327")
		const addressFSVZUaT = await CourtFarming_RoomLPStakevMrvZJ.getBeneficiaryInfo.call(addressoFkKfR7, {from: accounts[1]});
		const uint256CDTbXjq = await CourtFarming_RoomLPStakevMrvZJ.incvRewardClaim.call({from: accounts[0]});
		const uint256QuhT9eq = await CourtFarming_RoomLPStakevMrvZJ.incvRewardClaim.call({from: accounts[2]});
		const boolX66w67T = await CourtFarming_RoomLPStakevMrvZJ.stakeIncvRewards.call(uintYHewHJL, {from: accounts[4]});
		const uint256GkFX8pW = await CourtFarming_RoomLPStakevMrvZJ.incvRewardClaim.call({from: accounts[2]});

		assert.equal(boolX66w67T, false)
		assert.equal(uint256CDTbXjq, BigInt("0"))
		assert.equal(uint256GkFX8pW, BigInt("0"))
		assert.equal(uint256QuhT9eq, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakewZ9uaEx = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintJsRpkoh = BigInt("1990")
		const uintiB61Ysa = BigInt("91")
		const uintVUnsR9c = BigInt("43")
		const uintLRrPAPt = BigInt("1487")
		const uint256pqwiBOx = await CourtFarming_RoomLPStakewZ9uaEx.incvRewardClaim.call({from: accounts[3]});
		const uint256CPuu818 = await CourtFarming_RoomLPStakewZ9uaEx.stake.call(uintJsRpkoh, {from: accounts[2]});
		const uint256y5bZCqf = await CourtFarming_RoomLPStakewZ9uaEx.stake.call(uintiB61Ysa, {from: accounts[0]});
		const boolptctkIj = await CourtFarming_RoomLPStakewZ9uaEx.stakeIncvRewards.call(uintVUnsR9c, {from: accounts[3]});
		const uint256NQlKjrO = await CourtFarming_RoomLPStakewZ9uaEx.stake.call(uintLRrPAPt, {from: accounts[0]});

		assert.equal(uint256pqwiBOx, BigInt("0"))
		await expect(CourtFarming_RoomLPStakewZ9uaEx.stake.call(uintJsRpkoh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakemULZ1OI = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintdcBCeZ = BigInt("1588")
		const uintGuzlzZ1 = BigInt("34")
		const uint256NDv19vK = await CourtFarming_RoomLPStakemULZ1OI.expectedRewardsToday.call(uintdcBCeZ, {from: accounts[2]});
		const boolOE0iwYo = await CourtFarming_RoomLPStakemULZ1OI.stakeIncvRewards.call(uintGuzlzZ1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RfA79gN = await CourtFarming_RoomLPStakemULZ1OI.getCurrentTime.call({from: accounts[1]});

		assert.equal(boolOE0iwYo, false)
		assert.equal(uint256RfA79gN, BigInt("1630199966"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeMhDLPjo = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressPm8uvik = accounts[3]
		const addressjDIvIGb = accounts[3]
		const addressI8T8k61 = accounts[0]
		const addressLZBkHS = accounts[0]
		const addressQXnXuw = "0x0000000000000000000000000000000000000001"
		const uint256ekGXKBp = await CourtFarming_RoomLPStakeMhDLPjo.lastUpdateBlock.call({from: accounts[2]});
		const addressg7KTL59 = await CourtFarming_RoomLPStakeMhDLPjo.updateReward.call(addressPm8uvik, {from: accounts[3]});
		const uint256DUboJFk = await CourtFarming_RoomLPStakeMhDLPjo.balanceOf.call(addressjDIvIGb, {from: "0x0000000000000000000000000000000000000001"});
		const addressYhwscRs = await CourtFarming_RoomLPStakeMhDLPjo.updateReward.call(addressI8T8k61, {from: accounts[3]});
		const addressmRwjoM = await CourtFarming_RoomLPStakeMhDLPjo.setCourtStake.call(addressLZBkHS, {from: accounts[5]});
		const uint256QDTMBG = await CourtFarming_RoomLPStakeMhDLPjo.balanceOf.call(addressQXnXuw, {from: accounts[2]});

		assert.equal(uint256DUboJFk, BigInt("0"))
		assert.equal(uint256ekGXKBp, BigInt("1249"))
		await expect(CourtFarming_RoomLPStakeMhDLPjo.setCourtStake.call(addressLZBkHS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHIpqUOT = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressrbDTtg = accounts[0]
		const boolx8berv8 = false
		const uintiM7V7WG = BigInt("1794")
		const uintdr4YNxB = BigInt("1648")
		const uintuQIoaUK = BigInt("2014")
		const uintdB0KXeS = BigInt("221")
		const uintzAndzNM = BigInt("599")
		const uint256QGolf1Y = await CourtFarming_RoomLPStakeHIpqUOT.balanceOf.call(addressrbDTtg, {from: accounts[1]});
		const uint256sPVgwh5 = await CourtFarming_RoomLPStakeHIpqUOT.unstake.call(uintiM7V7WG, boolx8berv8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xrbyTTe = await CourtFarming_RoomLPStakeHIpqUOT.totalStaked.call({from: accounts[1]});
		await CourtFarming_RoomLPStakeHIpqUOT.changeStakeParameters.call(uintdB0KXeS, uintuQIoaUK, uintdr4YNxB, {from: accounts[2]});
		const boolkOBDQ70 = await CourtFarming_RoomLPStakeHIpqUOT.stakeIncvRewards.call(uintzAndzNM, {from: accounts[0]});

		assert.equal(uint256QGolf1Y, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeHIpqUOT.unstake.call(uintiM7V7WG, boolx8berv8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFItltcO = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addresscc8BMnC = accounts[3]
		const addresssZVERFi = accounts[2]
		const uint256DYzWSzp = await CourtFarming_RoomLPStakeFItltcO.incvRewardClaim.call({from: accounts[3]});
		const uint256qV1zmhB = await CourtFarming_RoomLPStakeFItltcO.totalStaked.call({from: accounts[3]});
		const addressXCXZ4Vf = await CourtFarming_RoomLPStakeFItltcO.setCourtStake.call(addresscc8BMnC, {from: accounts[0]});
		const uint256aRmke9l = await CourtFarming_RoomLPStakeFItltcO.incvRewardClaim.call({from: accounts[3]});
		const uint256GXxbbzq = await CourtFarming_RoomLPStakeFItltcO.balanceOf.call(addresssZVERFi, {from: accounts[5]});

		assert.equal(uint256DYzWSzp, BigInt("0"))
		assert.equal(uint256qV1zmhB, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeFItltcO.setCourtStake.call(addresscc8BMnC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeyrkCEdR = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintN4ozIXS = BigInt("1845")
		const addressLpNV6FU = accounts[2]
		const boolKrXo7yc = await CourtFarming_RoomLPStakeyrkCEdR.stakeIncvRewards.call(uintN4ozIXS, {from: accounts[3]});
		const uint256kMPh9qX = await CourtFarming_RoomLPStakeyrkCEdR.rewards.call(addressLpNV6FU, {from: accounts[2]});
		const uint256mIQ6pyN = await CourtFarming_RoomLPStakeyrkCEdR.incvRewardInfo.call({from: accounts[4]});

		assert.equal(boolKrXo7yc, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakemULZ1OI = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addresscO89lOd = accounts[5]
		const uinthD1oBsY = BigInt("824")
		const uintVIF9oDn = BigInt("100")
		const uinthJTUxTT = BigInt("1143")
		const uint7Bsmka = BigInt("2007")
		const uint256QIw2QHJ = await CourtFarming_RoomLPStakemULZ1OI.rewards.call(addresscO89lOd, {from: accounts[2]});
		await CourtFarming_RoomLPStakemULZ1OI.changeStakeParameters.call(uinthJTUxTT, uintVIF9oDn, uinthD1oBsY, {from: accounts[2]});
		const boolOE0iwYo = await CourtFarming_RoomLPStakemULZ1OI.stakeIncvRewards.call(uint7Bsmka, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakemULZ1OI.changeStakeParameters.call(uinthJTUxTT, uintVIF9oDn, uinthD1oBsY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakevMrvZJ = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressHG9hzn0 = accounts[3]
		const addressRtDaWAY = accounts[0]
		const uintwQp72k1 = BigInt("327")
		const addressDAYlq3E = await CourtFarming_RoomLPStakevMrvZJ.setCourtStake.call(addressHG9hzn0, {from: accounts[0]});
		const addressFSVZUaT = await CourtFarming_RoomLPStakevMrvZJ.getBeneficiaryInfo.call(addressRtDaWAY, {from: accounts[1]});
		const uint256CDTbXjq = await CourtFarming_RoomLPStakevMrvZJ.incvRewardClaim.call({from: accounts[0]});
		const uint256QuhT9eq = await CourtFarming_RoomLPStakevMrvZJ.incvRewardClaim.call({from: accounts[2]});
		const uint256kv9u8Fx = await CourtFarming_RoomLPStakevMrvZJ.lastUpdateBlock.call({from: accounts[4]});
		const boolX66w67T = await CourtFarming_RoomLPStakevMrvZJ.stakeIncvRewards.call(uintwQp72k1, {from: accounts[4]});
		const uint256GkFX8pW = await CourtFarming_RoomLPStakevMrvZJ.incvRewardClaim.call({from: accounts[2]});

		await expect(CourtFarming_RoomLPStakevMrvZJ.setCourtStake.call(addressHG9hzn0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakemULZ1OI = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uinthd5TXmV = BigInt("291")
		const uintxAS33tl = BigInt("0")
		const bool7SIA1F = await CourtFarming_RoomLPStakemULZ1OI.stakeIncvRewards.call(uinthd5TXmV, {from: accounts[4]});
		const uint256CKvjFI3 = await CourtFarming_RoomLPStakemULZ1OI.blockNumber.call({from: accounts[4]});
		const boolOE0iwYo = await CourtFarming_RoomLPStakemULZ1OI.stakeIncvRewards.call(uintxAS33tl, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool7SIA1F, false)
		assert.equal(boolOE0iwYo, false)
		assert.equal(uint256CKvjFI3, BigInt("1249"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeMijnWD = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintFUcWJcY = BigInt("0")
		const addressuq6x9yq = "0x0000000000000000000000000000000000000001"
		const uint256ZFljbVw = await CourtFarming_RoomLPStakeMijnWD.stake.call(uintFUcWJcY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ULPscss = await CourtFarming_RoomLPStakeMijnWD.balanceOf.call(addressuq6x9yq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ULPscss, BigInt("0"))
	});
})