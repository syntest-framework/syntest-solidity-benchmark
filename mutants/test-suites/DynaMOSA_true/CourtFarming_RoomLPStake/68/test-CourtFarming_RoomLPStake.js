const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeSYnEdX5 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintZAAmG6d = BigInt("1307")
		const boolQDtDB1S = true
		const uintK7tL3OJ = BigInt("536")
		const uint256Zu7XQL = await CourtFarming_RoomLPStakeSYnEdX5.getCurrentTime.call({from: accounts[4]});
//		const uint256JLFnUkw = await CourtFarming_RoomLPStakeSYnEdX5.stake.call(uintZAAmG6d, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ny5PJhU = await CourtFarming_RoomLPStakeSYnEdX5.unstake.call(uintK7tL3OJ, boolQDtDB1S, {from: accounts[3]});
//		const uint256rHQYGQa = await CourtFarming_RoomLPStakeSYnEdX5.blockNumber.call({from: accounts[1]});

		assert.equal(uint256Zu7XQL, BigInt("1630201290"))
		await expect(CourtFarming_RoomLPStakeSYnEdX5.stake.call(uintZAAmG6d, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeaOevCPs = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressA2GXoh = accounts[1]
		const uintQSwboBz = BigInt("860")
		const addressFr8Hdg6 = accounts[1]
		const addressqNH3ood = accounts[4]
		const uint256bcHy5JE = await CourtFarming_RoomLPStakeaOevCPs.balanceOf.call(addressA2GXoh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256trXKne6 = await CourtFarming_RoomLPStakeaOevCPs.totalStaked.call({from: accounts[1]});
		const uint256Ylqlf3e = await CourtFarming_RoomLPStakeaOevCPs.incvRewardInfo.call({from: accounts[0]});
		const boolJWJFKxA = await CourtFarming_RoomLPStakeaOevCPs.stakeIncvRewards.call(uintQSwboBz, {from: accounts[4]});
		const uint256ec6USjA = await CourtFarming_RoomLPStakeaOevCPs.balanceOf.call(addressFr8Hdg6, {from: accounts[1]});
		const addresstK08RLt = await CourtFarming_RoomLPStakeaOevCPs.getBeneficiaryInfo.call(addressqNH3ood, {from: accounts[1]});

		assert.equal(boolJWJFKxA, false)
		assert.equal(uint256bcHy5JE, BigInt("0"))
		assert.equal(uint256ec6USjA, BigInt("0"))
		assert.equal(uint256trXKne6, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefb6ReqO = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uint256vLeAl3d = await CourtFarming_RoomLPStakefb6ReqO.incvRewardClaim.call({from: accounts[3]});
		const uint256yaJpasq = await CourtFarming_RoomLPStakefb6ReqO.lastUpdateBlock.call({from: accounts[4]});
		const uint256YAVQoH = await CourtFarming_RoomLPStakefb6ReqO.lastUpdateBlock.call({from: accounts[2]});
		const uint256jpWwrfh = await CourtFarming_RoomLPStakefb6ReqO.incvRewardInfo.call({from: accounts[4]});

		assert.equal(uint256YAVQoH, BigInt("1544"))
		assert.equal(uint256vLeAl3d, BigInt("0"))
		assert.equal(uint256yaJpasq, BigInt("1544"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeAIdc98W = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const boolT0p7O6U = false
		const uintRg3D2rE = BigInt("311")
		const uintNHOcf0 = BigInt("469")
		const addresscvno7NJ = accounts[0]
		const uint256MezqSlF = await CourtFarming_RoomLPStakeAIdc98W.unstake.call(uintRg3D2rE, boolT0p7O6U, {from: accounts[3]});
		const boolPZiEPzW = await CourtFarming_RoomLPStakeAIdc98W.stakeIncvRewards.call(uintNHOcf0, {from: accounts[2]});
		const uint256OkcbpSy = await CourtFarming_RoomLPStakeAIdc98W.balanceOf.call(addresscvno7NJ, {from: accounts[1]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeGAh24d = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintxy454dd = BigInt("637")
		const boolgB9L0CZ = true
		const uintZ1BWLV1 = BigInt("1599")
		const uintjPYkx4u = BigInt("825")
		const addressraFcYuC = accounts[0]
		const boolADi72Xw = await CourtFarming_RoomLPStakeGAh24d.stakeIncvRewards.call(uintxy454dd, {from: accounts[3]});
//		const uint256DwTqYT9 = await CourtFarming_RoomLPStakeGAh24d.unstake.call(uintZ1BWLV1, boolgB9L0CZ, {from: accounts[3]});
//		const uint256bLNVFH3 = await CourtFarming_RoomLPStakeGAh24d.expectedRewardsToday.call(uintjPYkx4u, {from: accounts[2]});
//		const uint256jdr2uFX = await CourtFarming_RoomLPStakeGAh24d.totalStaked.call({from: accounts[3]});
//		const addressct2tMQd = await CourtFarming_RoomLPStakeGAh24d.setCourtStake.call(addressraFcYuC, {from: accounts[5]});

		assert.equal(boolADi72Xw, false)
		await expect(CourtFarming_RoomLPStakeGAh24d.unstake.call(uintZ1BWLV1, boolgB9L0CZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefb6ReqO = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintE0qN5B9 = BigInt("1358")
		const uintzFH8S8Z = BigInt("977")
		const uint256PR0BStt = await CourtFarming_RoomLPStakefb6ReqO.expectedRewardsToday.call(uintE0qN5B9, {from: accounts[2]});
		const uint256vLeAl3d = await CourtFarming_RoomLPStakefb6ReqO.incvRewardClaim.call({from: accounts[3]});
		const uint256yaJpasq = await CourtFarming_RoomLPStakefb6ReqO.lastUpdateBlock.call({from: accounts[4]});
		const uint256YAVQoH = await CourtFarming_RoomLPStakefb6ReqO.lastUpdateBlock.call({from: accounts[2]});
		const boolset1Ohd = await CourtFarming_RoomLPStakefb6ReqO.stakeIncvRewards.call(uintzFH8S8Z, {from: accounts[1]});
		const uint256jpWwrfh = await CourtFarming_RoomLPStakefb6ReqO.incvRewardInfo.call({from: accounts[4]});

		assert.equal(boolset1Ohd, false)
		assert.equal(uint256YAVQoH, BigInt("1544"))
		assert.equal(uint256vLeAl3d, BigInt("0"))
		assert.equal(uint256yaJpasq, BigInt("1544"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeGAh24d = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintCNN3JYg = BigInt("637")
		const uint8eRDza = BigInt("825")
		const addressjEnfqOs = accounts[0]
		const boolADi72Xw = await CourtFarming_RoomLPStakeGAh24d.stakeIncvRewards.call(uintCNN3JYg, {from: accounts[3]});
		const uint256DbOrdoV = await CourtFarming_RoomLPStakeGAh24d.incvRewardInfo.call({from: accounts[3]});
		const uint256bLNVFH3 = await CourtFarming_RoomLPStakeGAh24d.expectedRewardsToday.call(uint8eRDza, {from: accounts[2]});
		const uint256jdr2uFX = await CourtFarming_RoomLPStakeGAh24d.totalStaked.call({from: accounts[3]});
//		const addressct2tMQd = await CourtFarming_RoomLPStakeGAh24d.setCourtStake.call(addressjEnfqOs, {from: accounts[5]});

		assert.equal(boolADi72Xw, false)
		assert.equal(uint256jdr2uFX, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeGAh24d.setCourtStake.call(addressjEnfqOs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeaOevCPs = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addresslcAf5m2 = accounts[1]
		const addressEq4oN81 = accounts[0]
		const uintXmaNP9C = BigInt("1998")
		const uintX24N3l7 = BigInt("421")
		const uintynEOuFw = BigInt("1732")
		const addressUnqo47V = accounts[4]
		const uintNlGxcw = BigInt("928")
		const boolyOFLKZr = true
		const uintv67cYFU = BigInt("327")
		const addressJ6LShp = accounts[4]
		const uint256bcHy5JE = await CourtFarming_RoomLPStakeaOevCPs.balanceOf.call(addresslcAf5m2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nsM7M0F = await CourtFarming_RoomLPStakeaOevCPs.rewards.call(addressEq4oN81, {from: accounts[5]});
//		await CourtFarming_RoomLPStakeaOevCPs.changeStakeParameters.call(uintynEOuFw, uintX24N3l7, uintXmaNP9C, {from: accounts[4]});
//		const uint256YeVseye = await CourtFarming_RoomLPStakeaOevCPs.totalStaked.call({from: accounts[2]});
//		const uint256trXKne6 = await CourtFarming_RoomLPStakeaOevCPs.totalStaked.call({from: accounts[1]});
//		const addressr31h3Mu = await CourtFarming_RoomLPStakeaOevCPs.getBeneficiaryInfo.call(addressUnqo47V, {from: accounts[1]});
//		const boolIyxDKTY = await CourtFarming_RoomLPStakeaOevCPs.stakeIncvRewards.call(uintNlGxcw, {from: accounts[1]});
//		const uint256Ylqlf3e = await CourtFarming_RoomLPStakeaOevCPs.incvRewardInfo.call({from: accounts[0]});
//		const uint256abxCQxM = await CourtFarming_RoomLPStakeaOevCPs.unstake.call(uintv67cYFU, boolyOFLKZr, {from: accounts[4]});
//		const uint256MEEMsLw = await CourtFarming_RoomLPStakeaOevCPs.incvRewardClaim.call({from: accounts[1]});
//		const addresstK08RLt = await CourtFarming_RoomLPStakeaOevCPs.getBeneficiaryInfo.call(addressJ6LShp, {from: accounts[1]});

		assert.equal(uint256bcHy5JE, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeaOevCPs.changeStakeParameters.call(uintynEOuFw, uintX24N3l7, uintXmaNP9C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStaketHre3t = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressAK8eodF = accounts[2]
		const uintHmOrrh9 = BigInt("0")
		const uintaz8Guad = BigInt("874")
		const addressqmMSEhJ = await CourtFarming_RoomLPStaketHre3t.updateReward.call(addressAK8eodF, {from: accounts[4]});
		const uint256DxMfBtj = await CourtFarming_RoomLPStaketHre3t.stake.call(uintHmOrrh9, {from: accounts[0]});
		const uint256p2rOtIy = await CourtFarming_RoomLPStaketHre3t.expectedRewardsToday.call(uintaz8Guad, {from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeBGhIMx = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressaVox2Na = accounts[0]
		const uintwatMmKO = BigInt("140")
		const addressGq1QzXg = accounts[3]
		const uint256A1q0NKP = await CourtFarming_RoomLPStakeBGhIMx.incvRewardClaim.call({from: accounts[0]});
		const uint256qXznFKP = await CourtFarming_RoomLPStakeBGhIMx.incvRewardClaim.call({from: accounts[1]});
//		const addressR5DSvk = await CourtFarming_RoomLPStakeBGhIMx.setCourtStake.call(addressaVox2Na, {from: accounts[5]});
//		const uint256QCnXNSb = await CourtFarming_RoomLPStakeBGhIMx.expectedRewardsToday.call(uintwatMmKO, {from: accounts[0]});
//		const addressmG7JZzA = await CourtFarming_RoomLPStakeBGhIMx.setCourtStake.call(addressGq1QzXg, {from: accounts[3]});
//		const uint256cNQgWi0 = await CourtFarming_RoomLPStakeBGhIMx.blockNumber.call({from: accounts[0]});

		assert.equal(uint256A1q0NKP, BigInt("0"))
		assert.equal(uint256qXznFKP, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeBGhIMx.setCourtStake.call(addressaVox2Na, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefb6ReqO = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintV5XcAF0 = BigInt("90")
		const uintabkpAEE = BigInt("317")
		const uintyiEGvdp = BigInt("1828")
		const uintGWcCCJd = BigInt("545")
		const addressb5CrA6Z = accounts[2]
		const boolOI2VZ9 = true
		const uintA9TmiQ0 = BigInt("1272")
		const uint256vLeAl3d = await CourtFarming_RoomLPStakefb6ReqO.incvRewardClaim.call({from: accounts[3]});
		const boolej2jjm = await CourtFarming_RoomLPStakefb6ReqO.stakeIncvRewards.call(uintV5XcAF0, {from: "0x0000000000000000000000000000000000000001"});
//		await CourtFarming_RoomLPStakefb6ReqO.changeStakeParameters.call(uintGWcCCJd, uintyiEGvdp, uintabkpAEE, {from: accounts[2]});
//		const uint256QBxd8el = await CourtFarming_RoomLPStakefb6ReqO.rewards.call(addressb5CrA6Z, {from: accounts[3]});
//		const uint256OOc5TC9 = await CourtFarming_RoomLPStakefb6ReqO.unstake.call(uintA9TmiQ0, boolOI2VZ9, {from: accounts[2]});
//		const uint256DX33vl2 = await CourtFarming_RoomLPStakefb6ReqO.totalStaked.call({from: accounts[3]});

		assert.equal(boolej2jjm, false)
		assert.equal(uint256vLeAl3d, BigInt("0"))
		await expect(CourtFarming_RoomLPStakefb6ReqO.changeStakeParameters.call(uintGWcCCJd, uintyiEGvdp, uintabkpAEE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefb6ReqO = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolUQmkBQq = true
		const uintMd3R2n3 = BigInt("0")
		const uintXUSrjnR = BigInt("1068")
		const uint256gzVmwl5 = await CourtFarming_RoomLPStakefb6ReqO.unstake.call(uintMd3R2n3, boolUQmkBQq, {from: accounts[2]});
		const boolI9fczzd = await CourtFarming_RoomLPStakefb6ReqO.stakeIncvRewards.call(uintXUSrjnR, {from: accounts[2]});
		const uint256WVN0k6 = await CourtFarming_RoomLPStakefb6ReqO.totalStaked.call({from: accounts[0]});
		const uint256G4G8PX5 = await CourtFarming_RoomLPStakefb6ReqO.getCurrentTime.call({from: accounts[2]});

		assert.equal(boolI9fczzd, false)
		assert.equal(uint256G4G8PX5, BigInt("1630201294"))
		assert.equal(uint256WVN0k6, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefb6ReqO = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressCOSrJX = accounts[4]
		const uintoEciydZ = BigInt("514")
		const uintlh3m3KL = BigInt("0")
		const addressxzJNMBY = await CourtFarming_RoomLPStakefb6ReqO.getBeneficiaryInfo.call(addressCOSrJX, {from: accounts[5]});
		const boolucS3Z4z = await CourtFarming_RoomLPStakefb6ReqO.stakeIncvRewards.call(uintoEciydZ, {from: accounts[0]});
		const boolSJSTGo = await CourtFarming_RoomLPStakefb6ReqO.stakeIncvRewards.call(uintlh3m3KL, {from: accounts[0]});

		assert.equal(boolSJSTGo, false)
		assert.equal(boolucS3Z4z, false)
	});
})