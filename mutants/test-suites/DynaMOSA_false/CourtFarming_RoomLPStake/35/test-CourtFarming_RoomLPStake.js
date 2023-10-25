const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekNGYVX = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uint256AYK3Hhn = await CourtFarming_RoomLPStakekNGYVX.lastUpdateBlock.call({from: accounts[4]});
		const uint256m2nqfVg = await CourtFarming_RoomLPStakekNGYVX.incvRewardInfo.call({from: accounts[2]});
		const uint256VmHYkC8 = await CourtFarming_RoomLPStakekNGYVX.incvRewardInfo.call({from: accounts[3]});

		assert.equal(uint256AYK3Hhn, BigInt("1748"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiYo5QNs = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintvNLo7Z = BigInt("1806")
		const uintvCdngNv = BigInt("833")
		const uintuibtB6q = BigInt("589")
		const uinteDwWq80 = BigInt("370")
		const uintRSyy8vb = BigInt("1262")
		const uintsJNSp6j = BigInt("1019")
		const uintiJQty5B = BigInt("793")
		const uint256gOrQyrb = await CourtFarming_RoomLPStakeiYo5QNs.incvRewardInfo.call({from: accounts[3]});
//		await CourtFarming_RoomLPStakeiYo5QNs.changeStakeParameters.call(uintuibtB6q, uintvCdngNv, uintvNLo7Z, {from: accounts[1]});
//		const uint256qkAZ92v = await CourtFarming_RoomLPStakeiYo5QNs.totalStaked.call({from: accounts[4]});
//		const uint256ZV1I0ra = await CourtFarming_RoomLPStakeiYo5QNs.blockNumber.call({from: accounts[1]});
//		await CourtFarming_RoomLPStakeiYo5QNs.changeStakeParameters.call(uintsJNSp6j, uintRSyy8vb, uinteDwWq80, {from: accounts[0]});
//		const uint256Tz0sZXt = await CourtFarming_RoomLPStakeiYo5QNs.stake.call(uintiJQty5B, {from: accounts[5]});

		await expect(CourtFarming_RoomLPStakeiYo5QNs.changeStakeParameters.call(uintuibtB6q, uintvCdngNv, uintvNLo7Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake88AabW = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintCRhFi5f = BigInt("200")
		const addressg6qjKm0 = accounts[3]
		const uintEKzqIY4 = BigInt("233")
		const boolStKKpj = await CourtFarming_RoomLPStake88AabW.stakeIncvRewards.call(uintCRhFi5f, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hBcOBfR = await CourtFarming_RoomLPStake88AabW.balanceOf.call(addressg6qjKm0, {from: accounts[2]});
//		const uint256KJHG4JG = await CourtFarming_RoomLPStake88AabW.stake.call(uintEKzqIY4, {from: accounts[2]});

		assert.equal(boolStKKpj, false)
		assert.equal(uint256hBcOBfR, BigInt("0"))
		await expect(CourtFarming_RoomLPStake88AabW.stake.call(uintEKzqIY4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeyVfL4Jm = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressxXea2lf = "0x0000000000000000000000000000000000000001"
		const uintay4YUEX = BigInt("932")
		const uintCnDglgu = BigInt("1733")
		const uint256bJWd2CA = await CourtFarming_RoomLPStakeyVfL4Jm.rewards.call(addressxXea2lf, {from: accounts[0]});
//		const uint256IlJaNog = await CourtFarming_RoomLPStakeyVfL4Jm.stake.call(uintay4YUEX, {from: accounts[5]});
//		const uint256rjXHPbt = await CourtFarming_RoomLPStakeyVfL4Jm.lastUpdateBlock.call({from: accounts[2]});
//		const uint256DnDESDJ = await CourtFarming_RoomLPStakeyVfL4Jm.stake.call(uintCnDglgu, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YMJH3R4 = await CourtFarming_RoomLPStakeyVfL4Jm.blockNumber.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeyVfL4Jm.stake.call(uintay4YUEX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeUx7p6yX = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintTJuM3LC = BigInt("1256")
		const addressBsvoekV = accounts[1]
		const addressQ4gVL4 = accounts[4]
		const uint256dspzcpY = await CourtFarming_RoomLPStakeUx7p6yX.expectedRewardsToday.call(uintTJuM3LC, {from: accounts[3]});
		const uint256P0GsWCQ = await CourtFarming_RoomLPStakeUx7p6yX.getCurrentTime.call({from: accounts[3]});
		const uint256pGin5tI = await CourtFarming_RoomLPStakeUx7p6yX.balanceOf.call(addressBsvoekV, {from: accounts[0]});
		const uint256tBkWT2A = await CourtFarming_RoomLPStakeUx7p6yX.getCurrentTime.call({from: accounts[1]});
		const addressSArpIsx = await CourtFarming_RoomLPStakeUx7p6yX.updateReward.call(addressQ4gVL4, {from: accounts[2]});

		assert.equal(uint256P0GsWCQ, BigInt("1630201414"))
		assert.equal(uint256pGin5tI, BigInt("0"))
		assert.equal(uint256tBkWT2A, BigInt("1630201414"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakevEviZKs = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressLWVDkJv = "0x0000000000000000000000000000000000000001"
		const bool5pnG0x = false
		const uintZUz7PnM = BigInt("1473")
		const boollJgjcrg = true
		const uintjrLRJ8s = BigInt("1555")
		const addressuzhDjRX = await CourtFarming_RoomLPStakevEviZKs.getBeneficiaryInfo.call(addressLWVDkJv, {from: accounts[0]});
		const uint256hYV7uJ = await CourtFarming_RoomLPStakevEviZKs.totalStaked.call({from: accounts[0]});
//		const uint256aWqgcB8 = await CourtFarming_RoomLPStakevEviZKs.unstake.call(uintZUz7PnM, bool5pnG0x, {from: accounts[1]});
//		const uint256wuZrl21 = await CourtFarming_RoomLPStakevEviZKs.unstake.call(uintjrLRJ8s, boollJgjcrg, {from: accounts[4]});
//		const uint256EotOlLf = await CourtFarming_RoomLPStakevEviZKs.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256hYV7uJ, BigInt("0"))
		await expect(CourtFarming_RoomLPStakevEviZKs.unstake.call(uintZUz7PnM, bool5pnG0x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIyXscMo = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressXN2JYft = accounts[0]
		const addressZiQBibU = accounts[4]
//		const address5SbkAS = await CourtFarming_RoomLPStakeIyXscMo.setCourtStake.call(addressXN2JYft, {from: accounts[3]});
//		const uint2569wynpf = await CourtFarming_RoomLPStakeIyXscMo.balanceOf.call(addressZiQBibU, {from: accounts[3]});
//		const uint256g5S3gJ = await CourtFarming_RoomLPStakeIyXscMo.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakeIyXscMo.setCourtStake.call(addressXN2JYft, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFVpyeRv = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressXz1HkMD = accounts[3]
		const addressWIIrRUg = await CourtFarming_RoomLPStakeFVpyeRv.getBeneficiaryInfo.call(addressXz1HkMD, {from: accounts[1]});
		const uint256RcxFbiC = await CourtFarming_RoomLPStakeFVpyeRv.getCurrentTime.call({from: accounts[0]});
		const uint256fpnKGfv = await CourtFarming_RoomLPStakeFVpyeRv.incvRewardClaim.call({from: accounts[3]});

		assert.equal(uint256RcxFbiC, BigInt("1630201413"))
		assert.equal(uint256fpnKGfv, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeOlYak7B = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintuQGJXM = BigInt("1420")
		const addresstsiLQ0c = accounts[3]
		const uint256ufcvmBi = await CourtFarming_RoomLPStakeOlYak7B.expectedRewardsToday.call(uintuQGJXM, {from: accounts[1]});
//		const addresskQXDEb6 = await CourtFarming_RoomLPStakeOlYak7B.setCourtStake.call(addresstsiLQ0c, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeOlYak7B.setCourtStake.call(addresstsiLQ0c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiGftkch = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHLr6CGy = accounts[2]
		const addresspU83fpg = accounts[4]
		const addressyk9mWP = accounts[1]
		const uintN1cjKP = BigInt("1392")
		const uint256TNdtwSW = await CourtFarming_RoomLPStakeiGftkch.balanceOf.call(addressHLr6CGy, {from: accounts[1]});
		const addressf3rgTMn = await CourtFarming_RoomLPStakeiGftkch.updateReward.call(addresspU83fpg, {from: accounts[1]});
		const address9K4Udq = await CourtFarming_RoomLPStakeiGftkch.setCourtStake.call(addressyk9mWP, {from: accounts[4]});
		const uint256WSurlSk = await CourtFarming_RoomLPStakeiGftkch.expectedRewardsToday.call(uintN1cjKP, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeDeoE8Fo = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintcbgEzRl = BigInt("443")
		const uint9O8NkZ = BigInt("0")
		const boolBn9EYR5 = await CourtFarming_RoomLPStakeDeoE8Fo.stakeIncvRewards.call(uintcbgEzRl, {from: accounts[4]});
		const uint256xBXb5bg = await CourtFarming_RoomLPStakeDeoE8Fo.stake.call(uint9O8NkZ, {from: accounts[1]});
		const uint2561bYdnj = await CourtFarming_RoomLPStakeDeoE8Fo.incvRewardInfo.call({from: accounts[3]});

		assert.equal(boolBn9EYR5, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakevEviZKs = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const boolYpVrQNX = true
		const uintsRnFLo = BigInt("0")
		const address9R4umw = accounts[0]
		const uint256HuKhaa = await CourtFarming_RoomLPStakevEviZKs.unstake.call(uintsRnFLo, boolYpVrQNX, {from: accounts[5]});
		const addressFx42Udn = await CourtFarming_RoomLPStakevEviZKs.getBeneficiaryInfo.call(address9R4umw, {from: accounts[1]});
	});
})