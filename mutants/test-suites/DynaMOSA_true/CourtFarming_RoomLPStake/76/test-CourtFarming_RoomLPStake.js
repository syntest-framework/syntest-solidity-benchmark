const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeWvJEk44 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintErvToH = BigInt("1725")
		const uintt5ntiv9 = BigInt("947")
		const uintioqGj35 = BigInt("420")
		const uintGsOHNOS = BigInt("975")
		const addressf5yUSWZ = accounts[4]
//		await CourtFarming_RoomLPStakeWvJEk44.changeStakeParameters.call(uintioqGj35, uintt5ntiv9, uintErvToH, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256X9B9oYd = await CourtFarming_RoomLPStakeWvJEk44.expectedRewardsToday.call(uintGsOHNOS, {from: accounts[0]});
//		const uint256smOh8qB = await CourtFarming_RoomLPStakeWvJEk44.rewards.call(addressf5yUSWZ, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeWvJEk44.changeStakeParameters.call(uintioqGj35, uintt5ntiv9, uintErvToH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZaQ2N3Q = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintntVZDin = BigInt("1183")
		const addressjlfs3cC = "0x0000000000000000000000000000000000000001"
		const addressMUu2N6n = accounts[2]
		const boolSMhcUdo = await CourtFarming_RoomLPStakeZaQ2N3Q.stakeIncvRewards.call(uintntVZDin, {from: accounts[2]});
		const uint256JSNk9Co = await CourtFarming_RoomLPStakeZaQ2N3Q.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const addressKrHjX4g = await CourtFarming_RoomLPStakeZaQ2N3Q.getBeneficiaryInfo.call(addressjlfs3cC, {from: accounts[4]});
		const addressbfAONoF = await CourtFarming_RoomLPStakeZaQ2N3Q.updateReward.call(addressMUu2N6n, {from: accounts[4]});

		assert.equal(boolSMhcUdo, false)
		assert.equal(uint256JSNk9Co, BigInt("1630199428"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeWEkKrs4 = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addresscV2dPm = accounts[4]
		const boollMLx2Q8 = true
		const uintOxO9XMX = BigInt("1984")
		const addressT4W3Ujn = accounts[0]
		const addressK0pLxg = await CourtFarming_RoomLPStakeWEkKrs4.getBeneficiaryInfo.call(addresscV2dPm, {from: accounts[1]});
//		const uint256CjTDp8p = await CourtFarming_RoomLPStakeWEkKrs4.unstake.call(uintOxO9XMX, boollMLx2Q8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256doTwUaa = await CourtFarming_RoomLPStakeWEkKrs4.rewards.call(addressT4W3Ujn, {from: accounts[2]});
//		const uint256q0aitxo = await CourtFarming_RoomLPStakeWEkKrs4.getCurrentTime.call({from: accounts[3]});

		await expect(CourtFarming_RoomLPStakeWEkKrs4.unstake.call(uintOxO9XMX, boollMLx2Q8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQWvU1eh = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uint818fSc = BigInt("1315")
		const uintNk7rVOw = BigInt("900")
//		const uint256ekEi82Q = await CourtFarming_RoomLPStakeQWvU1eh.stake.call(uint818fSc, {from: accounts[5]});
//		const uint256nz9LVY = await CourtFarming_RoomLPStakeQWvU1eh.expectedRewardsToday.call(uintNk7rVOw, {from: accounts[0]});
//		const uint256S37fwpr = await CourtFarming_RoomLPStakeQWvU1eh.totalStaked.call({from: accounts[5]});

		await expect(CourtFarming_RoomLPStakeQWvU1eh.stake.call(uint818fSc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakevpmrz0a = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressrbCF2wV = accounts[0]
		const uintPFvjHGe = BigInt("201")
		const uintWR9yxmL = BigInt("355")
		const addressRaXBcsG = accounts[4]
		const uintZAmqB74 = BigInt("1881")
		const uint256aUq3I3J = await CourtFarming_RoomLPStakevpmrz0a.balanceOf.call(addressrbCF2wV, {from: accounts[5]});
//		const uint256ABkGYVI = await CourtFarming_RoomLPStakevpmrz0a.stake.call(uintPFvjHGe, {from: accounts[0]});
//		const uint256i7xEIsY = await CourtFarming_RoomLPStakevpmrz0a.incvRewardInfo.call({from: accounts[2]});
//		const boolj6gzsOw = await CourtFarming_RoomLPStakevpmrz0a.stakeIncvRewards.call(uintWR9yxmL, {from: accounts[1]});
//		const addressr1ttQoM = await CourtFarming_RoomLPStakevpmrz0a.updateReward.call(addressRaXBcsG, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZINXmfP = await CourtFarming_RoomLPStakevpmrz0a.stakeIncvRewards.call(uintZAmqB74, {from: accounts[4]});

		assert.equal(uint256aUq3I3J, BigInt("0"))
		await expect(CourtFarming_RoomLPStakevpmrz0a.stake.call(uintPFvjHGe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeksHhi8G = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressRIcYakK = accounts[4]
		const uintQJ9pv8U = BigInt("296")
		const uintHLjEGCq = BigInt("71")
		const uint256CK88H8U = await CourtFarming_RoomLPStakeksHhi8G.incvRewardClaim.call({from: accounts[4]});
		const uint256mNOdGz = await CourtFarming_RoomLPStakeksHhi8G.rewards.call(addressRIcYakK, {from: accounts[0]});
		const booll4TkPI6 = await CourtFarming_RoomLPStakeksHhi8G.stakeIncvRewards.call(uintQJ9pv8U, {from: accounts[1]});
		const uint256EqEbfWL = await CourtFarming_RoomLPStakeksHhi8G.expectedRewardsToday.call(uintHLjEGCq, {from: accounts[1]});
		const uint256e6EytGj = await CourtFarming_RoomLPStakeksHhi8G.getCurrentTime.call({from: accounts[1]});
		const uint256Sna3gd = await CourtFarming_RoomLPStakeksHhi8G.incvRewardClaim.call({from: accounts[0]});

		assert.equal(booll4TkPI6, false)
		assert.equal(uint256CK88H8U, BigInt("0"))
		assert.equal(uint256Sna3gd, BigInt("0"))
		assert.equal(uint256e6EytGj, BigInt("1630199431"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakemQFVGqs = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintLwN2kL = BigInt("1360")
		const boolLxWfj4u = await CourtFarming_RoomLPStakemQFVGqs.stakeIncvRewards.call(uintLwN2kL, {from: accounts[2]});
		const uint256UyuJlMh = await CourtFarming_RoomLPStakemQFVGqs.getCurrentTime.call({from: accounts[5]});
		const uint256beW4Ywl = await CourtFarming_RoomLPStakemQFVGqs.lastUpdateBlock.call({from: accounts[5]});
		const uint256KYXUZJ8 = await CourtFarming_RoomLPStakemQFVGqs.blockNumber.call({from: accounts[3]});

		assert.equal(boolLxWfj4u, false)
		assert.equal(uint256KYXUZJ8, BigInt("1093"))
		assert.equal(uint256UyuJlMh, BigInt("1630199436"))
		assert.equal(uint256beW4Ywl, BigInt("1093"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeArH8JkN = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addresstIK0REs = "0x0000000000000000000000000000000000000001"
		const uintqpSoD0r = BigInt("0")
		const uintViC9ksJ = BigInt("1750")
		const uint256xzPy7Vp = await CourtFarming_RoomLPStakeArH8JkN.blockNumber.call({from: accounts[2]});
		const uint256yWKMT2c = await CourtFarming_RoomLPStakeArH8JkN.balanceOf.call(addresstIK0REs, {from: accounts[2]});
		const boolvUzY8wj = await CourtFarming_RoomLPStakeArH8JkN.stakeIncvRewards.call(uintqpSoD0r, {from: accounts[3]});
		const boolRsPUJl = await CourtFarming_RoomLPStakeArH8JkN.stakeIncvRewards.call(uintViC9ksJ, {from: accounts[0]});

		assert.equal(boolRsPUJl, false)
		assert.equal(boolvUzY8wj, false)
		assert.equal(uint256xzPy7Vp, BigInt("1093"))
		assert.equal(uint256yWKMT2c, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQWvU1eh = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintsgHnJc = BigInt("1315")
		const uintiKVjOk5 = BigInt("1358")
		const uintxvcAcKw = BigInt("904")
		const uint256StSXVo = await CourtFarming_RoomLPStakeQWvU1eh.totalStaked.call({from: accounts[0]});
//		const uint256ekEi82Q = await CourtFarming_RoomLPStakeQWvU1eh.stake.call(uintsgHnJc, {from: accounts[5]});
//		const uint256Ia6V2Rc = await CourtFarming_RoomLPStakeQWvU1eh.expectedRewardsToday.call(uintiKVjOk5, {from: accounts[3]});
//		const uint256nz9LVY = await CourtFarming_RoomLPStakeQWvU1eh.expectedRewardsToday.call(uintxvcAcKw, {from: accounts[0]});
//		const uint256S37fwpr = await CourtFarming_RoomLPStakeQWvU1eh.totalStaked.call({from: accounts[5]});

		assert.equal(uint256StSXVo, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeQWvU1eh.stake.call(uintsgHnJc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeVWUkYxH = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolzQ5ISF = true
		const uintvHwfJs0 = BigInt("591")
		const uintiXHUOrw = BigInt("1873")
		const uint256Djxbg6Y = await CourtFarming_RoomLPStakeVWUkYxH.totalStaked.call({from: accounts[3]});
		const uint256GkTgrfi = await CourtFarming_RoomLPStakeVWUkYxH.incvRewardInfo.call({from: accounts[4]});
//		const uint256z5TtQVK = await CourtFarming_RoomLPStakeVWUkYxH.unstake.call(uintvHwfJs0, boolzQ5ISF, {from: accounts[0]});
//		const uint256NNIJOm = await CourtFarming_RoomLPStakeVWUkYxH.expectedRewardsToday.call(uintiXHUOrw, {from: accounts[1]});
//		const uint256MdYThIN = await CourtFarming_RoomLPStakeVWUkYxH.blockNumber.call({from: accounts[2]});

		assert.equal(uint256Djxbg6Y, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeVWUkYxH.unstake.call(uintvHwfJs0, boolzQ5ISF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeVWUkYxH = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressb7ImAMB = accounts[5]
		const uint256Djxbg6Y = await CourtFarming_RoomLPStakeVWUkYxH.totalStaked.call({from: accounts[3]});
//		const addressEIZrAT4 = await CourtFarming_RoomLPStakeVWUkYxH.setCourtStake.call(addressb7ImAMB, {from: accounts[5]});
//		const uint256ivGPa3z = await CourtFarming_RoomLPStakeVWUkYxH.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Djxbg6Y, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeVWUkYxH.setCourtStake.call(addressb7ImAMB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakei1ZaXE = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uint0NuZLM = BigInt("32")
		const addressema9A1T = accounts[1]
		const boolNRT4ltd = await CourtFarming_RoomLPStakei1ZaXE.stakeIncvRewards.call(uint0NuZLM, {from: accounts[4]});
		const uint256SnsiWXY = await CourtFarming_RoomLPStakei1ZaXE.rewards.call(addressema9A1T, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CXuZc5N = await CourtFarming_RoomLPStakei1ZaXE.blockNumber.call({from: accounts[1]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeM9HSCWl = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressNOfn3ID = accounts[0]
		const addressjkcK0sY = accounts[5]
		const uintwlaE7CY = BigInt("1804")
		const uintyfgwoqN = BigInt("512")
		const uinthLrUkVe = BigInt("567")
		const uint256yfh0k0 = await CourtFarming_RoomLPStakeM9HSCWl.incvRewardInfo.call({from: accounts[4]});
		const uint256ycVjdHt = await CourtFarming_RoomLPStakeM9HSCWl.getCurrentTime.call({from: accounts[0]});
		const addressxr1H3XC = await CourtFarming_RoomLPStakeM9HSCWl.updateReward.call(addressNOfn3ID, {from: accounts[2]});
		const uint256jVHJJTI = await CourtFarming_RoomLPStakeM9HSCWl.blockNumber.call({from: accounts[2]});
		const uint256XuZ7Ova = await CourtFarming_RoomLPStakeM9HSCWl.balanceOf.call(addressjkcK0sY, {from: accounts[0]});
//		await CourtFarming_RoomLPStakeM9HSCWl.changeStakeParameters.call(uinthLrUkVe, uintyfgwoqN, uintwlaE7CY, {from: accounts[4]});

		assert.equal(uint256XuZ7Ova, BigInt("0"))
		assert.equal(uint256jVHJJTI, BigInt("1093"))
		assert.equal(uint256ycVjdHt, BigInt("1630199425"))
		await expect(CourtFarming_RoomLPStakeM9HSCWl.changeStakeParameters.call(uinthLrUkVe, uintyfgwoqN, uintwlaE7CY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakek1Rce4y = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressWiJg9Vr = accounts[0]
		const addressnftq8G = accounts[3]
		const addressmGKOT4J = accounts[3]
		const uint256Fa0nkfQ = await CourtFarming_RoomLPStakek1Rce4y.rewards.call(addressWiJg9Vr, {from: accounts[1]});
		const uint256YxNcZWZ = await CourtFarming_RoomLPStakek1Rce4y.balanceOf.call(addressnftq8G, {from: accounts[4]});
//		const addressRArGRoB = await CourtFarming_RoomLPStakek1Rce4y.setCourtStake.call(addressmGKOT4J, {from: accounts[5]});

		assert.equal(uint256YxNcZWZ, BigInt("0"))
		await expect(CourtFarming_RoomLPStakek1Rce4y.setCourtStake.call(addressmGKOT4J, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJ6vzR0 = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintwfO4L4J = BigInt("89")
		const boolNa56QDN = false
		const uinttd1b9fT = BigInt("0")
		const uinteYiHtJ = BigInt("752")
		const uint256UruPvE = await CourtFarming_RoomLPStakeJ6vzR0.incvRewardInfo.call({from: accounts[0]});
		const boolw2AEAPi = await CourtFarming_RoomLPStakeJ6vzR0.stakeIncvRewards.call(uintwfO4L4J, {from: accounts[2]});
		const uint256rHVdxrq = await CourtFarming_RoomLPStakeJ6vzR0.unstake.call(uinttd1b9fT, boolNa56QDN, {from: accounts[0]});
		const uint256w0pmrK8 = await CourtFarming_RoomLPStakeJ6vzR0.blockNumber.call({from: accounts[2]});
		const boolRAdCwuK = await CourtFarming_RoomLPStakeJ6vzR0.stakeIncvRewards.call(uinteYiHtJ, {from: accounts[0]});
		const uint256Wtjep9J = await CourtFarming_RoomLPStakeJ6vzR0.incvRewardClaim.call({from: accounts[2]});

		assert.equal(boolRAdCwuK, false)
		assert.equal(boolw2AEAPi, false)
		assert.equal(uint256Wtjep9J, BigInt("0"))
		assert.equal(uint256w0pmrK8, BigInt("1093"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJ6vzR0 = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintYswvDDo = BigInt("0")
		const uintciyr8H3 = BigInt("285")
		const addressdHVAtq8 = accounts[4]
		const addressts7T9ah = accounts[0]
		const addressF1LnhI = accounts[2]
		const addressciakeWb = accounts[3]
		const addressXrc7B6y = accounts[2]
		const addressJO4XvUX = accounts[4]
		const uint256xeswffN = await CourtFarming_RoomLPStakeJ6vzR0.stake.call(uintYswvDDo, {from: accounts[2]});
		const boolka54B0v = await CourtFarming_RoomLPStakeJ6vzR0.stakeIncvRewards.call(uintciyr8H3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EWmc71V = await CourtFarming_RoomLPStakeJ6vzR0.balanceOf.call(addressdHVAtq8, {from: accounts[2]});
		const uint256nUTODP5 = await CourtFarming_RoomLPStakeJ6vzR0.incvRewardClaim.call({from: accounts[1]});
		const uint256RTAVpqW = await CourtFarming_RoomLPStakeJ6vzR0.balanceOf.call(addressts7T9ah, {from: accounts[4]});
		const uint256UruPvE = await CourtFarming_RoomLPStakeJ6vzR0.incvRewardInfo.call({from: accounts[0]});
		const addressETD4xfC = await CourtFarming_RoomLPStakeJ6vzR0.updateReward.call(addressF1LnhI, {from: accounts[3]});
		const uint256wLWGByP = await CourtFarming_RoomLPStakeJ6vzR0.rewards.call(addressciakeWb, {from: "0x0000000000000000000000000000000000000001"});
//		const addressAxNOxGn = await CourtFarming_RoomLPStakeJ6vzR0.setCourtStake.call(addressXrc7B6y, {from: accounts[0]});
//		const uint256XRhEJzi = await CourtFarming_RoomLPStakeJ6vzR0.getCurrentTime.call({from: accounts[2]});
//		const uint256ek4aZ17 = await CourtFarming_RoomLPStakeJ6vzR0.rewards.call(addressJO4XvUX, {from: accounts[0]});

		assert.equal(boolka54B0v, false)
		assert.equal(uint256EWmc71V, BigInt("0"))
		assert.equal(uint256RTAVpqW, BigInt("0"))
		assert.equal(uint256nUTODP5, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeJ6vzR0.setCourtStake.call(addressXrc7B6y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})