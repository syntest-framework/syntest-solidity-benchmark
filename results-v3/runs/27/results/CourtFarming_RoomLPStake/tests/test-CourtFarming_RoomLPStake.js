const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakenuEZNA5 = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const boolFKVuds = true
		const uints24CtLc = BigInt("1561")
		const uintDMXP2f = BigInt("1704")
		const boolgQs55zO = true
		const uintLDvopsr = BigInt("1078")
		const uint256HhovUQ5 = await CourtFarming_RoomLPStakenuEZNA5.unstake.call(uints24CtLc, boolFKVuds, {from: accounts[3]});
		const uint256u4gZIhG = await CourtFarming_RoomLPStakenuEZNA5.getCurrentTime.call({from: accounts[2]});
		const uint256htifuPM = await CourtFarming_RoomLPStakenuEZNA5.expectedRewardsToday.call(uintDMXP2f, {from: accounts[1]});
		const uint256JKUF2Bl = await CourtFarming_RoomLPStakenuEZNA5.unstake.call(uintLDvopsr, boolgQs55zO, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakenuEZNA5.unstake.call(uints24CtLc, boolFKVuds, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeCkK3wXV = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintV2FPrMa = BigInt("225")
		const uintoBkj4gE = BigInt("936")
		const uintiHZM3G = BigInt("752")
		const addressDyzwBEu = accounts[1]
		const uinte9PSRHe = BigInt("1941")
		const uintWFaWo3H = BigInt("420")
		const uinthqrMPaf = BigInt("1885")
		await CourtFarming_RoomLPStakeCkK3wXV.changeStakeParameters.call(uintiHZM3G, uintoBkj4gE, uintV2FPrMa, {from: accounts[1]});
		const uint256DCCSNlk = await CourtFarming_RoomLPStakeCkK3wXV.incvRewardInfo.call({from: accounts[1]});
		const uint256dq4Abqj = await CourtFarming_RoomLPStakeCkK3wXV.balanceOf.call(addressDyzwBEu, {from: accounts[0]});
		await CourtFarming_RoomLPStakeCkK3wXV.changeStakeParameters.call(uinthqrMPaf, uintWFaWo3H, uinte9PSRHe, {from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeA7oNgVE = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addresssXbHUfO = accounts[1]
		const addresspwB5wez = accounts[2]
		const addressJdD04l = "0x0000000000000000000000000000000000000001"
		const addressmBmwQ2z = "0x0000000000000000000000000000000000000001"
		const uint256bRQZsKh = await CourtFarming_RoomLPStakeA7oNgVE.rewards.call(addresssXbHUfO, {from: accounts[4]});
		const addressbWa5Iba = await CourtFarming_RoomLPStakeA7oNgVE.updateReward.call(addresspwB5wez, {from: accounts[0]});
		const uint256oBrCVFl = await CourtFarming_RoomLPStakeA7oNgVE.balanceOf.call(addressJdD04l, {from: accounts[5]});
		const uint256K60yBQ = await CourtFarming_RoomLPStakeA7oNgVE.rewards.call(addressmBmwQ2z, {from: accounts[4]});

		assert.equal(uint256oBrCVFl, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeh11kDe = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressweEs4eW = accounts[3]
		const addressBbI04IJ = accounts[3]
		const uint256NgbXsIw = await CourtFarming_RoomLPStakeh11kDe.balanceOf.call(addressweEs4eW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oEOkGOg = await CourtFarming_RoomLPStakeh11kDe.balanceOf.call(addressBbI04IJ, {from: accounts[5]});
		const uint256v1DZ24 = await CourtFarming_RoomLPStakeh11kDe.lastUpdateBlock.call({from: accounts[4]});

		assert.equal(uint256NgbXsIw, BigInt("0"))
		assert.equal(uint256oEOkGOg, BigInt("0"))
		assert.equal(uint256v1DZ24, BigInt("1555"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHIwwzjJ = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressGqpmYQb = accounts[5]
		const addresslB7QiHU = accounts[0]
		const uintcpyszs = BigInt("1919")
		const uintFc1UrGw = BigInt("1962")
		const uintuvAIQDq = BigInt("1882")
		const uintNsziIjV = BigInt("1866")
		const uint256wsHjew1 = await CourtFarming_RoomLPStakeHIwwzjJ.totalStaked.call({from: accounts[2]});
		const uint256ucEhGAn = await CourtFarming_RoomLPStakeHIwwzjJ.balanceOf.call(addressGqpmYQb, {from: accounts[4]});
		const uint256K7nOewE = await CourtFarming_RoomLPStakeHIwwzjJ.rewards.call(addresslB7QiHU, {from: accounts[2]});
		await CourtFarming_RoomLPStakeHIwwzjJ.changeStakeParameters.call(uintuvAIQDq, uintFc1UrGw, uintcpyszs, {from: accounts[1]});
		const uint256JDKM9Ls = await CourtFarming_RoomLPStakeHIwwzjJ.expectedRewardsToday.call(uintNsziIjV, {from: accounts[4]});

		assert.equal(uint256ucEhGAn, BigInt("0"))
		assert.equal(uint256wsHjew1, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeHIwwzjJ.changeStakeParameters.call(uintuvAIQDq, uintFc1UrGw, uintcpyszs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakephblAZb = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uinthv0ycCq = BigInt("1732")
		const uintZAqeg0f = BigInt("913")
		const uint256tQjeTBZ = await CourtFarming_RoomLPStakephblAZb.stake.call(uinthv0ycCq, {from: accounts[1]});
		const uint256f3i0OR2 = await CourtFarming_RoomLPStakephblAZb.expectedRewardsToday.call(uintZAqeg0f, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakephblAZb.stake.call(uinthv0ycCq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakegJ7wbdn = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressW0TrB3Y = accounts[2]
		const boolYKg7Q4g = false
		const uintySoKtP4 = BigInt("1649")
		const addressqVaASxb = await CourtFarming_RoomLPStakegJ7wbdn.setCourtStake.call(addressW0TrB3Y, {from: accounts[1]});
		const uint256zhqZOEt = await CourtFarming_RoomLPStakegJ7wbdn.unstake.call(uintySoKtP4, boolYKg7Q4g, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakegJ7wbdn.setCourtStake.call(addressW0TrB3Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeA7oNgVE = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressQd9icnp = accounts[1]
		const addresshv7Dxis = accounts[2]
		const addressyOHeMk = "0x0000000000000000000000000000000000000001"
		const addressoOSnu8A = "0x0000000000000000000000000000000000000002"
		const uintsDXcS0d = BigInt("721")
		const uint256bRQZsKh = await CourtFarming_RoomLPStakeA7oNgVE.rewards.call(addressQd9icnp, {from: accounts[4]});
		const addressbWa5Iba = await CourtFarming_RoomLPStakeA7oNgVE.updateReward.call(addresshv7Dxis, {from: accounts[0]});
		const uint256BpGTq07 = await CourtFarming_RoomLPStakeA7oNgVE.getCurrentTime.call({from: accounts[3]});
		const uint256oBrCVFl = await CourtFarming_RoomLPStakeA7oNgVE.balanceOf.call(addressyOHeMk, {from: accounts[5]});
		const uint256K60yBQ = await CourtFarming_RoomLPStakeA7oNgVE.rewards.call(addressoOSnu8A, {from: accounts[4]});
		const uint256Uzab6x4 = await CourtFarming_RoomLPStakeA7oNgVE.stake.call(uintsDXcS0d, {from: accounts[4]});

		assert.equal(uint256BpGTq07, BigInt("1630201075"))
		assert.equal(uint256oBrCVFl, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeA7oNgVE.stake.call(uintsDXcS0d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeA7oNgVE = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressV7DokJn = accounts[2]
		const addressnxQjce2 = accounts[2]
		const addressIK8hGod = accounts[0]
		const addresssXQoY3 = "0x0000000000000000000000000000000000000001"
		const addressVd5l77t = "0x0000000000000000000000000000000000000002"
		const uintoAQozIn = BigInt("721")
		const uint256bRQZsKh = await CourtFarming_RoomLPStakeA7oNgVE.rewards.call(addressV7DokJn, {from: accounts[4]});
		const uint2565DEDA0 = await CourtFarming_RoomLPStakeA7oNgVE.incvRewardInfo.call({from: accounts[2]});
		const addressbWa5Iba = await CourtFarming_RoomLPStakeA7oNgVE.updateReward.call(addressnxQjce2, {from: accounts[0]});
		const uint256BpGTq07 = await CourtFarming_RoomLPStakeA7oNgVE.getCurrentTime.call({from: accounts[3]});
		const addressRHKackI = await CourtFarming_RoomLPStakeA7oNgVE.updateReward.call(addressIK8hGod, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oBrCVFl = await CourtFarming_RoomLPStakeA7oNgVE.balanceOf.call(addresssXQoY3, {from: accounts[5]});
		const uint256K60yBQ = await CourtFarming_RoomLPStakeA7oNgVE.rewards.call(addressVd5l77t, {from: accounts[4]});
		const uint256ttlGvFT = await CourtFarming_RoomLPStakeA7oNgVE.getCurrentTime.call({from: accounts[3]});
		const uint256Uzab6x4 = await CourtFarming_RoomLPStakeA7oNgVE.stake.call(uintoAQozIn, {from: accounts[4]});

		assert.equal(uint256BpGTq07, BigInt("1630201079"))
		assert.equal(uint256oBrCVFl, BigInt("0"))
		assert.equal(uint256ttlGvFT, BigInt("1630201079"))
		await expect(CourtFarming_RoomLPStakeA7oNgVE.stake.call(uintoAQozIn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeA7oNgVE = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressv6c9te5 = accounts[1]
		const addressSXyiLN = accounts[2]
		const addressZTHA0sz = "0x0000000000000000000000000000000000000001"
		const addressahvmnZ = accounts[2]
		const addressOHCbtaQ = "0x0000000000000000000000000000000000000002"
		const uintmL9m4k = BigInt("721")
		const uint256bRQZsKh = await CourtFarming_RoomLPStakeA7oNgVE.rewards.call(addressv6c9te5, {from: accounts[4]});
		const addressbWa5Iba = await CourtFarming_RoomLPStakeA7oNgVE.updateReward.call(addressSXyiLN, {from: accounts[0]});
		const uint256BpGTq07 = await CourtFarming_RoomLPStakeA7oNgVE.getCurrentTime.call({from: accounts[3]});
		const uint256WHkgpMw = await CourtFarming_RoomLPStakeA7oNgVE.totalStaked.call({from: accounts[0]});
		const uint256oBrCVFl = await CourtFarming_RoomLPStakeA7oNgVE.balanceOf.call(addressZTHA0sz, {from: accounts[5]});
		const addressCS8vaJz = await CourtFarming_RoomLPStakeA7oNgVE.setCourtStake.call(addressahvmnZ, {from: accounts[1]});
		const uint256K60yBQ = await CourtFarming_RoomLPStakeA7oNgVE.rewards.call(addressOHCbtaQ, {from: accounts[4]});
		const uint256Uzab6x4 = await CourtFarming_RoomLPStakeA7oNgVE.stake.call(uintmL9m4k, {from: accounts[4]});

		assert.equal(uint256BpGTq07, BigInt("1630201088"))
		assert.equal(uint256WHkgpMw, BigInt("0"))
		assert.equal(uint256oBrCVFl, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeA7oNgVE.setCourtStake.call(addressahvmnZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoa3UCa = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressdX6RXo = accounts[2]
		const addresszVI78eN = accounts[4]
		const uint256WDOXJYx = await CourtFarming_RoomLPStakeoa3UCa.incvRewardClaim.call({from: accounts[4]});
		const uint256Rau82vJ = await CourtFarming_RoomLPStakeoa3UCa.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256NYsEyTx = await CourtFarming_RoomLPStakeoa3UCa.balanceOf.call(addressdX6RXo, {from: accounts[0]});
		const uint256l28UOvk = await CourtFarming_RoomLPStakeoa3UCa.rewards.call(addresszVI78eN, {from: accounts[1]});
		const uint256GYm11P6 = await CourtFarming_RoomLPStakeoa3UCa.incvRewardClaim.call({from: accounts[1]});

		assert.equal(uint256GYm11P6, BigInt("0"))
		assert.equal(uint256NYsEyTx, BigInt("0"))
		assert.equal(uint256Rau82vJ, BigInt("1630201082"))
		assert.equal(uint256WDOXJYx, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoa3UCa = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressEW2K5np = accounts[2]
		const uintmzENxfS = BigInt("111")
		const addressAbh0cM8 = accounts[5]
		const boolvxQbmhF = false
		const uintYex1m4P = BigInt("1001")
		const uint256WKjwt4v = await CourtFarming_RoomLPStakeoa3UCa.incvRewardInfo.call({from: accounts[4]});
		const uint256WDOXJYx = await CourtFarming_RoomLPStakeoa3UCa.incvRewardClaim.call({from: accounts[4]});
		const uint256Rau82vJ = await CourtFarming_RoomLPStakeoa3UCa.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256j3GkpP7 = await CourtFarming_RoomLPStakeoa3UCa.totalStaked.call({from: accounts[4]});
		const uint256njrbnET = await CourtFarming_RoomLPStakeoa3UCa.incvRewardInfo.call({from: accounts[0]});
		const uint256NYsEyTx = await CourtFarming_RoomLPStakeoa3UCa.balanceOf.call(addressEW2K5np, {from: accounts[0]});
		const uint256yXlDeaP = await CourtFarming_RoomLPStakeoa3UCa.incvRewardClaim.call({from: accounts[2]});
		const boolzDAL2i9 = await CourtFarming_RoomLPStakeoa3UCa.stakeIncvRewards.call(uintmzENxfS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256l28UOvk = await CourtFarming_RoomLPStakeoa3UCa.rewards.call(addressAbh0cM8, {from: accounts[1]});
		const uint256CsFLx6J = await CourtFarming_RoomLPStakeoa3UCa.unstake.call(uintYex1m4P, boolvxQbmhF, {from: accounts[2]});
		const uint256GYm11P6 = await CourtFarming_RoomLPStakeoa3UCa.incvRewardClaim.call({from: accounts[1]});

		assert.equal(boolzDAL2i9, false)
		assert.equal(uint256NYsEyTx, BigInt("0"))
		assert.equal(uint256Rau82vJ, BigInt("1630201085"))
		assert.equal(uint256WDOXJYx, BigInt("0"))
		assert.equal(uint256j3GkpP7, BigInt("0"))
		assert.equal(uint256yXlDeaP, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeoa3UCa.unstake.call(uintYex1m4P, boolvxQbmhF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoa3UCa = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressgF2qcU2 = accounts[2]
		const uintST0QmVP = BigInt("1116")
		const uintSpcefyP = BigInt("111")
		const addressEjUmugD = accounts[5]
		const boolvxQbmhF = false
		const uintTFdWcpv = BigInt("1001")
		const uint256WKjwt4v = await CourtFarming_RoomLPStakeoa3UCa.incvRewardInfo.call({from: accounts[4]});
		const uint256WDOXJYx = await CourtFarming_RoomLPStakeoa3UCa.incvRewardClaim.call({from: accounts[4]});
		const uint256Rau82vJ = await CourtFarming_RoomLPStakeoa3UCa.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256j3GkpP7 = await CourtFarming_RoomLPStakeoa3UCa.totalStaked.call({from: accounts[4]});
		const uint256njrbnET = await CourtFarming_RoomLPStakeoa3UCa.incvRewardInfo.call({from: accounts[0]});
		const uint256NYsEyTx = await CourtFarming_RoomLPStakeoa3UCa.balanceOf.call(addressgF2qcU2, {from: accounts[0]});
		const uint256yXlDeaP = await CourtFarming_RoomLPStakeoa3UCa.incvRewardClaim.call({from: accounts[2]});
		const uint256sCgI1Fx = await CourtFarming_RoomLPStakeoa3UCa.expectedRewardsToday.call(uintST0QmVP, {from: "0x0000000000000000000000000000000000000001"});
		const boolzDAL2i9 = await CourtFarming_RoomLPStakeoa3UCa.stakeIncvRewards.call(uintSpcefyP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NtMCRtA = await CourtFarming_RoomLPStakeoa3UCa.totalStaked.call({from: accounts[5]});
		const uint256l28UOvk = await CourtFarming_RoomLPStakeoa3UCa.rewards.call(addressEjUmugD, {from: accounts[1]});
		const uint256CsFLx6J = await CourtFarming_RoomLPStakeoa3UCa.unstake.call(uintTFdWcpv, boolvxQbmhF, {from: accounts[2]});
		const uint256GYm11P6 = await CourtFarming_RoomLPStakeoa3UCa.incvRewardClaim.call({from: accounts[1]});

		assert.equal(boolzDAL2i9, false)
		assert.equal(uint256NYsEyTx, BigInt("0"))
		assert.equal(uint256NtMCRtA, BigInt("0"))
		assert.equal(uint256Rau82vJ, BigInt("1630201078"))
		assert.equal(uint256WDOXJYx, BigInt("0"))
		assert.equal(uint256j3GkpP7, BigInt("0"))
		assert.equal(uint256yXlDeaP, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeoa3UCa.unstake.call(uintTFdWcpv, boolvxQbmhF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakevAMO9nh = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintchg6uLS = BigInt("114")
		const addressV7o6u7 = accounts[3]
		const addressAd9HbbU = accounts[4]
		const addressFw8xueB = accounts[4]
		const uint256CG3QIOQ = await CourtFarming_RoomLPStakevAMO9nh.expectedRewardsToday.call(uintchg6uLS, {from: accounts[0]});
		const uint256zXsMNN5 = await CourtFarming_RoomLPStakevAMO9nh.rewards.call(addressV7o6u7, {from: accounts[3]});
		const addressF21FW2 = await CourtFarming_RoomLPStakevAMO9nh.getBeneficiaryInfo.call(addressAd9HbbU, {from: "0x0000000000000000000000000000000000000001"});
		const addressBIt8wF = await CourtFarming_RoomLPStakevAMO9nh.setCourtStake.call(addressFw8xueB, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakevAMO9nh.setCourtStake.call(addressFw8xueB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoa3UCa = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addresstnoSd97 = accounts[3]
		const uintvsFonC = BigInt("0")
		const uintuh6614l = BigInt("697")
		const addresskynRiFV = accounts[2]
		const uint256EGS9Erv = await CourtFarming_RoomLPStakeoa3UCa.balanceOf.call(addresstnoSd97, {from: accounts[5]});
		const boolEpl0gAM = await CourtFarming_RoomLPStakeoa3UCa.stakeIncvRewards.call(uintvsFonC, {from: "0x0000000000000000000000000000000000000001"});
		const boolTPj9Ctk = await CourtFarming_RoomLPStakeoa3UCa.stakeIncvRewards.call(uintuh6614l, {from: accounts[2]});
		const addressHUdIDlh = await CourtFarming_RoomLPStakeoa3UCa.updateReward.call(addresskynRiFV, {from: accounts[4]});

		assert.equal(boolEpl0gAM, false)
		assert.equal(boolTPj9Ctk, false)
		assert.equal(uint256EGS9Erv, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoa3UCa = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const boolxplq3M9 = true
		const uintnhwnAO1 = BigInt("0")
		const uintz2f1suo = BigInt("1096")
		const uint256hf8D6cE = await CourtFarming_RoomLPStakeoa3UCa.unstake.call(uintnhwnAO1, boolxplq3M9, {from: accounts[4]});
		const uint256vBzi0EM = await CourtFarming_RoomLPStakeoa3UCa.stake.call(uintz2f1suo, {from: accounts[5]});

		await expect(CourtFarming_RoomLPStakeoa3UCa.stake.call(uintz2f1suo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoa3UCa = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintPWMuJGm = BigInt("1126")
		const uintSooqiuq = BigInt("0")
		const addressp4BOJL0 = accounts[1]
		const boolXog5Vdj = await CourtFarming_RoomLPStakeoa3UCa.stakeIncvRewards.call(uintPWMuJGm, {from: accounts[4]});
		const uint256H6XAED = await CourtFarming_RoomLPStakeoa3UCa.stake.call(uintSooqiuq, {from: accounts[3]});
		const uint256YDXjiTr = await CourtFarming_RoomLPStakeoa3UCa.rewards.call(addressp4BOJL0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXog5Vdj, false)
	});
})