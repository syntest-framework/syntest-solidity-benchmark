const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeCMW9TmE = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressG3TukEv = accounts[0]
		const uinthRUgZzW = BigInt("641")
		const uint256JZWyfL = await CourtFarming_RoomLPStakeCMW9TmE.getCurrentTime.call({from: accounts[1]});
//		const addressHPbt1XS = await CourtFarming_RoomLPStakeCMW9TmE.setCourtStake.call(addressG3TukEv, {from: accounts[4]});
//		const uint256LORKqX3 = await CourtFarming_RoomLPStakeCMW9TmE.stake.call(uinthRUgZzW, {from: accounts[3]});

		assert.equal(uint256JZWyfL, BigInt("1630200017"))
		await expect(CourtFarming_RoomLPStakeCMW9TmE.setCourtStake.call(addressG3TukEv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejxDadB9 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolTbUj6VP = false
		const uintp583xA = BigInt("1569")
		const uint256gD0BK5w = await CourtFarming_RoomLPStakejxDadB9.totalStaked.call({from: accounts[4]});
//		const uint256obIlv1O = await CourtFarming_RoomLPStakejxDadB9.unstake.call(uintp583xA, boolTbUj6VP, {from: accounts[3]});

		assert.equal(uint256gD0BK5w, BigInt("0"))
		await expect(CourtFarming_RoomLPStakejxDadB9.unstake.call(uintp583xA, boolTbUj6VP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakec4eMony = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuL7vP9p = BigInt("1737")
		const uintPNtxAWg = BigInt("1317")
		const booleUVk0tL = await CourtFarming_RoomLPStakec4eMony.stakeIncvRewards.call(uintuL7vP9p, {from: accounts[1]});
		const boolq4ZldaV = await CourtFarming_RoomLPStakec4eMony.stakeIncvRewards.call(uintPNtxAWg, {from: accounts[1]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKLNjD5g = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintVnxa2Uc = BigInt("420")
		const uintuIVeXed = BigInt("805")
		const addresszCyet0b = accounts[1]
		const boolwXiORp = await CourtFarming_RoomLPStakeKLNjD5g.stakeIncvRewards.call(uintVnxa2Uc, {from: accounts[2]});
		const uint256mAw437G = await CourtFarming_RoomLPStakeKLNjD5g.expectedRewardsToday.call(uintuIVeXed, {from: accounts[0]});
		const uint256dcUoVOh = await CourtFarming_RoomLPStakeKLNjD5g.incvRewardClaim.call({from: accounts[5]});
		const uint256zV3GlDo = await CourtFarming_RoomLPStakeKLNjD5g.rewards.call(addresszCyet0b, {from: accounts[0]});

		assert.equal(boolwXiORp, false)
		assert.equal(uint256dcUoVOh, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeYmMy4jr = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressoSxn78b = accounts[3]
		const addressPzKbgk0 = accounts[4]
		const uintwXTPD4l = BigInt("420")
		const addressJ6vOO7j = await CourtFarming_RoomLPStakeYmMy4jr.updateReward.call(addressoSxn78b, {from: accounts[1]});
		const addressjXlgV62 = await CourtFarming_RoomLPStakeYmMy4jr.getBeneficiaryInfo.call(addressPzKbgk0, {from: accounts[2]});
		const uint256VDCojtr = await CourtFarming_RoomLPStakeYmMy4jr.expectedRewardsToday.call(uintwXTPD4l, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qYtIHq8 = await CourtFarming_RoomLPStakeYmMy4jr.incvRewardClaim.call({from: accounts[1]});

		assert.equal(uint256qYtIHq8, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakecRRwuKN = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressEETNn2z = accounts[1]
		const addressvVFk9wA = accounts[1]
		const uint256sHhsybZ = await CourtFarming_RoomLPStakecRRwuKN.getCurrentTime.call({from: accounts[3]});
		const uint256tIrl6gq = await CourtFarming_RoomLPStakecRRwuKN.balanceOf.call(addressEETNn2z, {from: accounts[4]});
		const uint256gAd8m23 = await CourtFarming_RoomLPStakecRRwuKN.blockNumber.call({from: accounts[0]});
		const addresslKws1b9 = await CourtFarming_RoomLPStakecRRwuKN.getBeneficiaryInfo.call(addressvVFk9wA, {from: accounts[0]});
		const uint256rhVfnvJ = await CourtFarming_RoomLPStakecRRwuKN.totalStaked.call({from: accounts[0]});
		const uint256s3rAALA = await CourtFarming_RoomLPStakecRRwuKN.getCurrentTime.call({from: accounts[0]});

		assert.equal(uint256gAd8m23, BigInt("1279"))
		assert.equal(uint256rhVfnvJ, BigInt("0"))
		assert.equal(uint256s3rAALA, BigInt("1630200020"))
		assert.equal(uint256sHhsybZ, BigInt("1630200020"))
		assert.equal(uint256tIrl6gq, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeCMW9TmE = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintLp05ALE = BigInt("1269")
		const uintaZtVT9y = BigInt("71")
		const uintMElyxUF = BigInt("641")
		const uint256WQUS4Bp = await CourtFarming_RoomLPStakeCMW9TmE.totalStaked.call({from: accounts[0]});
		const uint256JZWyfL = await CourtFarming_RoomLPStakeCMW9TmE.getCurrentTime.call({from: accounts[1]});
//		const uint256DcwKyhd = await CourtFarming_RoomLPStakeCMW9TmE.stake.call(uintLp05ALE, {from: accounts[4]});
//		const uint256mcet2t = await CourtFarming_RoomLPStakeCMW9TmE.stake.call(uintaZtVT9y, {from: accounts[4]});
//		const uint256LORKqX3 = await CourtFarming_RoomLPStakeCMW9TmE.stake.call(uintMElyxUF, {from: accounts[3]});

		assert.equal(uint256JZWyfL, BigInt("1630200014"))
		assert.equal(uint256WQUS4Bp, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeCMW9TmE.stake.call(uintLp05ALE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeqKyO0pq = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintWkFSyAS = BigInt("1268")
		const uintysDOo5q = BigInt("1040")
		const uintM4TQYVi = BigInt("1665")
		const uint256GnaXrC = await CourtFarming_RoomLPStakeqKyO0pq.lastUpdateBlock.call({from: accounts[1]});
		const uint256bWjuPhD = await CourtFarming_RoomLPStakeqKyO0pq.incvRewardInfo.call({from: accounts[4]});
//		await CourtFarming_RoomLPStakeqKyO0pq.changeStakeParameters.call(uintM4TQYVi, uintysDOo5q, uintWkFSyAS, {from: accounts[1]});
//		const uint256VabCtRe = await CourtFarming_RoomLPStakeqKyO0pq.blockNumber.call({from: accounts[2]});
//		const uint256l3UGTpT = await CourtFarming_RoomLPStakeqKyO0pq.incvRewardInfo.call({from: accounts[4]});

		assert.equal(uint256GnaXrC, BigInt("1279"))
		await expect(CourtFarming_RoomLPStakeqKyO0pq.changeStakeParameters.call(uintM4TQYVi, uintysDOo5q, uintWkFSyAS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKLNjD5g = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uint0LbTGC = BigInt("420")
		const uintaif0h8m = BigInt("1378")
		const uints5jSG3S = BigInt("185")
		const uintWdpE0qw = BigInt("877")
		const uintjoeqQjE = BigInt("805")
		const addressscFKaxg = accounts[1]
		const boolwXiORp = await CourtFarming_RoomLPStakeKLNjD5g.stakeIncvRewards.call(uint0LbTGC, {from: accounts[2]});
//		await CourtFarming_RoomLPStakeKLNjD5g.changeStakeParameters.call(uintWdpE0qw, uints5jSG3S, uintaif0h8m, {from: accounts[3]});
//		const uint256mAw437G = await CourtFarming_RoomLPStakeKLNjD5g.expectedRewardsToday.call(uintjoeqQjE, {from: accounts[0]});
//		const uint256dcUoVOh = await CourtFarming_RoomLPStakeKLNjD5g.incvRewardClaim.call({from: accounts[5]});
//		const uint256zV3GlDo = await CourtFarming_RoomLPStakeKLNjD5g.rewards.call(addressscFKaxg, {from: accounts[0]});

		assert.equal(boolwXiORp, false)
		await expect(CourtFarming_RoomLPStakeKLNjD5g.changeStakeParameters.call(uintWdpE0qw, uints5jSG3S, uintaif0h8m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKLNjD5g = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintES298TQ = BigInt("110")
		const uintO21OHg = BigInt("141")
		const addressG1bHXf4 = accounts[2]
		const address0zuVDZ = accounts[1]
		const addressPeh8Xw4 = accounts[1]
		const uint256qh3WukK = await CourtFarming_RoomLPStakeKLNjD5g.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});
		const boolwXiORp = await CourtFarming_RoomLPStakeKLNjD5g.stakeIncvRewards.call(uintES298TQ, {from: accounts[2]});
		const boolRl67OO0 = await CourtFarming_RoomLPStakeKLNjD5g.stakeIncvRewards.call(uintO21OHg, {from: accounts[3]});
		const addressaEoePhe = await CourtFarming_RoomLPStakeKLNjD5g.updateReward.call(addressG1bHXf4, {from: accounts[1]});
		const uint256dcUoVOh = await CourtFarming_RoomLPStakeKLNjD5g.incvRewardClaim.call({from: accounts[5]});
		const uint256zV3GlDo = await CourtFarming_RoomLPStakeKLNjD5g.rewards.call(address0zuVDZ, {from: accounts[0]});
//		const addressfd5WMFN = await CourtFarming_RoomLPStakeKLNjD5g.setCourtStake.call(addressPeh8Xw4, {from: accounts[3]});

		assert.equal(boolRl67OO0, false)
		assert.equal(boolwXiORp, false)
		assert.equal(uint256dcUoVOh, BigInt("0"))
		assert.equal(uint256qh3WukK, BigInt("1279"))
		await expect(CourtFarming_RoomLPStakeKLNjD5g.setCourtStake.call(addressPeh8Xw4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakemQtus5O = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintjhB4Cm2 = BigInt("953")
		const addressf8ad6hF = accounts[2]
		const uintLOWZz21 = BigInt("0")
		const uint256eDcseK = await CourtFarming_RoomLPStakemQtus5O.blockNumber.call({from: accounts[3]});
		const boolYpWDbR4 = await CourtFarming_RoomLPStakemQtus5O.stakeIncvRewards.call(uintjhB4Cm2, {from: accounts[0]});
		const addressqGyzFFR = await CourtFarming_RoomLPStakemQtus5O.updateReward.call(addressf8ad6hF, {from: accounts[3]});
		const boolw3EmkPg = await CourtFarming_RoomLPStakemQtus5O.stakeIncvRewards.call(uintLOWZz21, {from: accounts[0]});

		assert.equal(boolYpWDbR4, false)
		assert.equal(boolw3EmkPg, false)
		assert.equal(uint256eDcseK, BigInt("1279"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeCMW9TmE = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintd6m45Uh = BigInt("1299")
		const uintvQixFyH = BigInt("0")
		const addressOp8sO9 = accounts[4]
		const uint256d8v8xpR = await CourtFarming_RoomLPStakeCMW9TmE.lastUpdateBlock.call({from: accounts[3]});
		const boolsYnoFTL = await CourtFarming_RoomLPStakeCMW9TmE.stakeIncvRewards.call(uintd6m45Uh, {from: accounts[4]});
		const uint256fidTHW = await CourtFarming_RoomLPStakeCMW9TmE.incvRewardInfo.call({from: accounts[4]});
		const uint256NUhpoFB = await CourtFarming_RoomLPStakeCMW9TmE.stake.call(uintvQixFyH, {from: accounts[1]});
		const uint256x6PrQsU = await CourtFarming_RoomLPStakeCMW9TmE.balanceOf.call(addressOp8sO9, {from: accounts[3]});
		const uint256kUjB7I = await CourtFarming_RoomLPStakeCMW9TmE.lastUpdateBlock.call({from: accounts[2]});

		assert.equal(boolsYnoFTL, false)
		assert.equal(uint256d8v8xpR, BigInt("1279"))
		assert.equal(uint256kUjB7I, BigInt("1279"))
		assert.equal(uint256x6PrQsU, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKLNjD5g = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const boolul3t0XI = true
		const uintukWdm2 = BigInt("0")
		const addressugNOj8h = accounts[0]
		const uintS76hSzc = BigInt("2")
		const uint256avtFc4 = await CourtFarming_RoomLPStakeKLNjD5g.unstake.call(uintukWdm2, boolul3t0XI, {from: accounts[3]});
		const addressZ8KGNa = await CourtFarming_RoomLPStakeKLNjD5g.getBeneficiaryInfo.call(addressugNOj8h, {from: accounts[0]});
		const boolN4jPrGA = await CourtFarming_RoomLPStakeKLNjD5g.stakeIncvRewards.call(uintS76hSzc, {from: accounts[0]});

		assert.equal(boolN4jPrGA, false)
	});
})