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

		assert.equal(uint256Zu7XQL, BigInt("1630199772"))
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

		assert.equal(uint256YAVQoH, BigInt("1136"))
		assert.equal(uint256vLeAl3d, BigInt("0"))
		assert.equal(uint256yaJpasq, BigInt("1136"))
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
		const uintdeVrOjW = BigInt("556")
		const uintHzi4UNv = BigInt("1995")
		const uintw1jmA4w = BigInt("1105")
		const uintOHpMtz = BigInt("824")
		const addressfY6YPiv = accounts[5]
		const uintZjSY2A9 = BigInt("1506")
		const uint256vLeAl3d = await CourtFarming_RoomLPStakefb6ReqO.incvRewardClaim.call({from: accounts[3]});
		const uint256yaJpasq = await CourtFarming_RoomLPStakefb6ReqO.lastUpdateBlock.call({from: accounts[4]});
		const uint256ft3r1Eh = await CourtFarming_RoomLPStakefb6ReqO.expectedRewardsToday.call(uintdeVrOjW, {from: accounts[2]});
//		await CourtFarming_RoomLPStakefb6ReqO.changeStakeParameters.call(uintOHpMtz, uintw1jmA4w, uintHzi4UNv, {from: accounts[3]});
//		const uint256YAVQoH = await CourtFarming_RoomLPStakefb6ReqO.lastUpdateBlock.call({from: accounts[2]});
//		const uint256gy30H5M = await CourtFarming_RoomLPStakefb6ReqO.balanceOf.call(addressfY6YPiv, {from: accounts[0]});
//		const uint256jpWwrfh = await CourtFarming_RoomLPStakefb6ReqO.incvRewardInfo.call({from: accounts[4]});
//		const boolpH6UXDa = await CourtFarming_RoomLPStakefb6ReqO.stakeIncvRewards.call(uintZjSY2A9, {from: accounts[0]});

		assert.equal(uint256vLeAl3d, BigInt("0"))
		assert.equal(uint256yaJpasq, BigInt("1136"))
		await expect(CourtFarming_RoomLPStakefb6ReqO.changeStakeParameters.call(uintOHpMtz, uintw1jmA4w, uintHzi4UNv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakepPCNeK = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressMLPUqI0 = accounts[3]
		const addressVdSE0Th = accounts[1]
		const addressbABIekm = accounts[5]
		const uintXvHVagG = BigInt("127")
		const addressl48QTUR = await CourtFarming_RoomLPStakepPCNeK.updateReward.call(addressMLPUqI0, {from: accounts[0]});
		const uint256wcECfTI = await CourtFarming_RoomLPStakepPCNeK.incvRewardInfo.call({from: accounts[4]});
		const uint256piIwb0Y = await CourtFarming_RoomLPStakepPCNeK.rewards.call(addressVdSE0Th, {from: accounts[4]});
//		const addresssymHBOj = await CourtFarming_RoomLPStakepPCNeK.setCourtStake.call(addressbABIekm, {from: accounts[4]});
//		const uint256Y0rIazA = await CourtFarming_RoomLPStakepPCNeK.stake.call(uintXvHVagG, {from: accounts[0]});

		await expect(CourtFarming_RoomLPStakepPCNeK.setCourtStake.call(addressbABIekm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefb6ReqO = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressQR3QuK = accounts[0]
		const uintb51yE7c = BigInt("415")
		const uintgRSbk2a = BigInt("443")
		const addressYX2FfMz = accounts[5]
		const uintaMAARqu = BigInt("1347")
		const addressicN28wB = await CourtFarming_RoomLPStakefb6ReqO.getBeneficiaryInfo.call(addressQR3QuK, {from: accounts[3]});
		const boollNSju9p = await CourtFarming_RoomLPStakefb6ReqO.stakeIncvRewards.call(uintb51yE7c, {from: accounts[3]});
		const uint256yaJpasq = await CourtFarming_RoomLPStakefb6ReqO.lastUpdateBlock.call({from: accounts[4]});
		const uint256Lie4Mc = await CourtFarming_RoomLPStakefb6ReqO.incvRewardInfo.call({from: accounts[1]});
		const boolpE5WhwG = await CourtFarming_RoomLPStakefb6ReqO.stakeIncvRewards.call(uintgRSbk2a, {from: accounts[5]});
//		const addressOOI628K = await CourtFarming_RoomLPStakefb6ReqO.setCourtStake.call(addressYX2FfMz, {from: accounts[2]});
//		const uint256YAVQoH = await CourtFarming_RoomLPStakefb6ReqO.lastUpdateBlock.call({from: accounts[2]});
//		const uint256jpWwrfh = await CourtFarming_RoomLPStakefb6ReqO.incvRewardInfo.call({from: accounts[4]});
//		const uint256k08NrpK = await CourtFarming_RoomLPStakefb6ReqO.stake.call(uintaMAARqu, {from: accounts[3]});

		assert.equal(boollNSju9p, false)
		assert.equal(boolpE5WhwG, false)
		assert.equal(uint256yaJpasq, BigInt("1136"))
		await expect(CourtFarming_RoomLPStakefb6ReqO.setCourtStake.call(addressYX2FfMz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeaOevCPs = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressC5wNc0h = accounts[1]
		const uintzp5xOP = BigInt("0")
		const uintj0XsO0L = BigInt("61")
		const addressLkw3AMV = accounts[4]
		const addressMT1k5g0 = accounts[2]
		const addressjWEndXc = accounts[5]
		const uintdeFnBxC = BigInt("860")
		const addressEDKhCYl = accounts[5]
		const uint256bcHy5JE = await CourtFarming_RoomLPStakeaOevCPs.balanceOf.call(addressC5wNc0h, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZC79dtL = await CourtFarming_RoomLPStakeaOevCPs.stake.call(uintzp5xOP, {from: accounts[4]});
//		const uint256n1liK6Y = await CourtFarming_RoomLPStakeaOevCPs.stake.call(uintj0XsO0L, {from: accounts[5]});
//		const addressRytqddz = await CourtFarming_RoomLPStakeaOevCPs.getBeneficiaryInfo.call(addressLkw3AMV, {from: accounts[3]});
//		const uint256trXKne6 = await CourtFarming_RoomLPStakeaOevCPs.totalStaked.call({from: accounts[1]});
//		const uint256Ylqlf3e = await CourtFarming_RoomLPStakeaOevCPs.incvRewardInfo.call({from: accounts[0]});
//		const uint256IGQu1pM = await CourtFarming_RoomLPStakeaOevCPs.rewards.call(addressMT1k5g0, {from: accounts[2]});
//		const uint2561Kwrtj = await CourtFarming_RoomLPStakeaOevCPs.rewards.call(addressjWEndXc, {from: accounts[1]});
//		const boolJWJFKxA = await CourtFarming_RoomLPStakeaOevCPs.stakeIncvRewards.call(uintdeFnBxC, {from: accounts[4]});
//		const addresstK08RLt = await CourtFarming_RoomLPStakeaOevCPs.getBeneficiaryInfo.call(addressEDKhCYl, {from: accounts[1]});

		assert.equal(uint256bcHy5JE, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeaOevCPs.stake.call(uintj0XsO0L, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefb6ReqO = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintUp1odIn = BigInt("1778")
		const uinte4ojeq = BigInt("0")
		const uint256NSejGGJ = await CourtFarming_RoomLPStakefb6ReqO.totalStaked.call({from: accounts[4]});
		const boolhHotAsN = await CourtFarming_RoomLPStakefb6ReqO.stakeIncvRewards.call(uintUp1odIn, {from: accounts[1]});
		const boolqDLm8W = await CourtFarming_RoomLPStakefb6ReqO.stakeIncvRewards.call(uinte4ojeq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolhHotAsN, false)
		assert.equal(boolqDLm8W, false)
		assert.equal(uint256NSejGGJ, BigInt("0"))
	});
})