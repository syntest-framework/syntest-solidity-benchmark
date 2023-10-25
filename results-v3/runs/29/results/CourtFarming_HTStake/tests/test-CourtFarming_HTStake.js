const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakek9Fu6SO = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintXeOY57e = BigInt("1117")
		const uintQC44ffK = BigInt("2047")
		const boolbQbUXsS = false
		const uintXQKqgVh = BigInt("918")
		const uint256ZjC7rc = await CourtFarming_HTStakek9Fu6SO.totalStaked.call({from: accounts[3]});
		const uint256NpnkdVR = await CourtFarming_HTStakek9Fu6SO.stake.call(uintXeOY57e, {from: accounts[4]});
		const uint256m0JAyNQ = await CourtFarming_HTStakek9Fu6SO.expectedRewardsToday.call(uintQC44ffK, {from: accounts[3]});
		const uint256LWyfbfE = await CourtFarming_HTStakek9Fu6SO.unstake.call(uintXQKqgVh, boolbQbUXsS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ZjC7rc, BigInt("0"))
		await expect(CourtFarming_HTStakek9Fu6SO.stake.call(uintXeOY57e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakehdHAELP = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintUL96uQy = BigInt("1408")
		const addressYCGo5Oa = accounts[4]
		const uint256OXVPw0p = await CourtFarming_HTStakehdHAELP.incvRewardInfo.call({from: accounts[1]});
		const uint2560LyvAD = await CourtFarming_HTStakehdHAELP.expectedRewardsToday.call(uintUL96uQy, {from: accounts[4]});
		const addressR8mnRdw = await CourtFarming_HTStakehdHAELP.updateReward.call(addressYCGo5Oa, {from: accounts[1]});
		const uint256XyaGDQx = await CourtFarming_HTStakehdHAELP.blockNumber.call({from: accounts[0]});
		const uint256S2Bogtv = await CourtFarming_HTStakehdHAELP.lastUpdateBlock.call({from: accounts[4]});
		const uint256t7MeKUY = await CourtFarming_HTStakehdHAELP.blockNumber.call({from: accounts[5]});

		assert.equal(uint256S2Bogtv, BigInt("1805"))
		assert.equal(uint256XyaGDQx, BigInt("1805"))
		assert.equal(uint256t7MeKUY, BigInt("1805"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeSeXBoiu = await CourtFarming_HTStake.new({from: accounts[2]});
		const address2AYZ2h = "0x0000000000000000000000000000000000000001"
		const bool9xQFZe = false
		const uintXy31e5p = BigInt("2022")
		const uint256n299BVp = await CourtFarming_HTStakeSeXBoiu.incvRewardInfo.call({from: accounts[1]});
		const uint256FnioyX = await CourtFarming_HTStakeSeXBoiu.rewards.call(address2AYZ2h, {from: accounts[5]});
		const uint256IOBGhBN = await CourtFarming_HTStakeSeXBoiu.unstake.call(uintXy31e5p, bool9xQFZe, {from: accounts[5]});

		await expect(CourtFarming_HTStakeSeXBoiu.unstake.call(uintXy31e5p, bool9xQFZe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebC9AHzX = await CourtFarming_HTStake.new({from: accounts[1]});
		const addresstXn2ukF = accounts[0]
		const addressmrZ0EBJ = accounts[2]
		const uint8hviTs = BigInt("1525")
		const uintBFgyNQM = BigInt("1022")
		const uintQKGfZG = BigInt("1144")
		const uintMuuKeqD = BigInt("1729")
		const boolviw1i6d = true
		const uintZJiRGW1 = BigInt("831")
		const addressfcrRifs = await CourtFarming_HTStakebC9AHzX.getBeneficiaryInfo.call(addresstXn2ukF, {from: accounts[1]});
		const uint256OAE2Lcx = await CourtFarming_HTStakebC9AHzX.balanceOf.call(addressmrZ0EBJ, {from: accounts[3]});
		const uint256SPQrkHa = await CourtFarming_HTStakebC9AHzX._stakeParametrsCalculation.call(uintQKGfZG, uintBFgyNQM, uint8hviTs, {from: accounts[0]});
		const boolxgTStKl = await CourtFarming_HTStakebC9AHzX.stakeIncvRewards.call(uintMuuKeqD, {from: accounts[0]});
		const uint256FpwUgB = await CourtFarming_HTStakebC9AHzX.totalStaked.call({from: accounts[2]});
		const uint256SgKc8kI = await CourtFarming_HTStakebC9AHzX.unstake.call(uintZJiRGW1, boolviw1i6d, {from: accounts[2]});

		assert.equal(uint256OAE2Lcx, BigInt("0"))
		await expect(CourtFarming_HTStakebC9AHzX._stakeParametrsCalculation.call(uintQKGfZG, uintBFgyNQM, uint8hviTs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakevne6mCz = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressHISqDSt = accounts[2]
		const uintuqLLBEv = BigInt("884")
		const uintXvnQWDV = BigInt("735")
		const uintcZuQ025 = BigInt("1877")
		const uint256Wpc8Wg = await CourtFarming_HTStakevne6mCz.balanceOf.call(addressHISqDSt, {from: accounts[2]});
		const uint256XLk7CZ = await CourtFarming_HTStakevne6mCz.lastUpdateBlock.call({from: accounts[5]});
		const uint256zmSN36W = await CourtFarming_HTStakevne6mCz.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_HTStakevne6mCz.changeStakeParameters.call(uintcZuQ025, uintXvnQWDV, uintuqLLBEv, {from: accounts[1]});
		const uint256rrVnjWY = await CourtFarming_HTStakevne6mCz.blockNumber.call({from: accounts[3]});

		assert.equal(uint256Wpc8Wg, BigInt("0"))
		assert.equal(uint256XLk7CZ, BigInt("1805"))
		assert.equal(uint256zmSN36W, BigInt("0"))
		await expect(CourtFarming_HTStakevne6mCz.changeStakeParameters.call(uintcZuQ025, uintXvnQWDV, uintuqLLBEv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewHnAgJL = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressNvTD0hR = accounts[5]
		const addressWJDbYT5 = accounts[3]
		const uint256vpe2eZ = await CourtFarming_HTStakewHnAgJL.balanceOf.call(addressNvTD0hR, {from: accounts[4]});
		const uint256P2GjTV8 = await CourtFarming_HTStakewHnAgJL.lastUpdateBlock.call({from: accounts[0]});
		const uint256O5DbGvl = await CourtFarming_HTStakewHnAgJL.incvRewardClaim.call({from: accounts[4]});
		const addresspNtBkpM = await CourtFarming_HTStakewHnAgJL.setCourtStake.call(addressWJDbYT5, {from: accounts[1]});

		assert.equal(uint256O5DbGvl, BigInt("0"))
		assert.equal(uint256P2GjTV8, BigInt("1805"))
		assert.equal(uint256vpe2eZ, BigInt("0"))
		await expect(CourtFarming_HTStakewHnAgJL.setCourtStake.call(addressWJDbYT5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefuqZrM4 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressUP7vrjk = accounts[2]
		const addressiZ1aJfK = accounts[3]
		const addressJqz6Pia = accounts[1]
		const uintJ0LBmDN = BigInt("1380")
		const uintAxO1rTd = BigInt("900")
		const uintKZ8R5q = BigInt("1168")
		const addressJNHA3Q7 = accounts[0]
		const uint256CBOU8GJ = await CourtFarming_HTStakefuqZrM4.balanceOf.call(addressUP7vrjk, {from: accounts[4]});
		const addressAXyRdmT = await CourtFarming_HTStakefuqZrM4.updateReward.call(addressiZ1aJfK, {from: "0x0000000000000000000000000000000000000001"});
		const addressFZYmLvj = await CourtFarming_HTStakefuqZrM4.getBeneficiaryInfo.call(addressJqz6Pia, {from: accounts[0]});
		const boolWG692wS = await CourtFarming_HTStakefuqZrM4.stakeIncvRewards.call(uintJ0LBmDN, {from: accounts[0]});
		const uint256r3EkMHh = await CourtFarming_HTStakefuqZrM4.stake.call(uintAxO1rTd, {from: accounts[0]});
		const boolcm8t9YK = await CourtFarming_HTStakefuqZrM4.stakeIncvRewards.call(uintKZ8R5q, {from: accounts[2]});
		const addressjIogBL = await CourtFarming_HTStakefuqZrM4.updateReward.call(addressJNHA3Q7, {from: accounts[1]});
		const uint2561xIoY1 = await CourtFarming_HTStakefuqZrM4.incvRewardClaim.call({from: accounts[4]});

		assert.equal(boolWG692wS, false)
		assert.equal(uint256CBOU8GJ, BigInt("0"))
		await expect(CourtFarming_HTStakefuqZrM4.stake.call(uintAxO1rTd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewHnAgJL = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressE3SJYyN = accounts[1]
		const addressiSbTsTE = accounts[5]
		const uintZxish9 = BigInt("1030")
		const uintEVbWBHX = BigInt("1715")
		const uintJiEFdqn = BigInt("600")
		const uintlBbVVCd = BigInt("1192")
		const addressPrZxs07 = await CourtFarming_HTStakewHnAgJL.updateReward.call(addressE3SJYyN, {from: accounts[3]});
		const uint256vpe2eZ = await CourtFarming_HTStakewHnAgJL.balanceOf.call(addressiSbTsTE, {from: accounts[4]});
		const uint256P2GjTV8 = await CourtFarming_HTStakewHnAgJL.lastUpdateBlock.call({from: accounts[0]});
		const uint256QdGc9No = await CourtFarming_HTStakewHnAgJL.expectedRewardsToday.call(uintZxish9, {from: accounts[1]});
		await CourtFarming_HTStakewHnAgJL.changeStakeParameters.call(uintlBbVVCd, uintJiEFdqn, uintEVbWBHX, {from: accounts[4]});
		const uint256O5DbGvl = await CourtFarming_HTStakewHnAgJL.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256P2GjTV8, BigInt("1805"))
		assert.equal(uint256vpe2eZ, BigInt("0"))
		await expect(CourtFarming_HTStakewHnAgJL.changeStakeParameters.call(uintlBbVVCd, uintJiEFdqn, uintEVbWBHX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVoSzbGY = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvWkrXmR = BigInt("510")
		const addresspgy53PK = accounts[3]
		const addressVURIQk2 = accounts[3]
		const uint256fDpKFF = await CourtFarming_HTStakeVoSzbGY.stake.call(uintvWkrXmR, {from: accounts[1]});
		const uint256R98zyYC = await CourtFarming_HTStakeVoSzbGY.lastUpdateBlock.call({from: accounts[4]});
		const uint256GA4DCbg = await CourtFarming_HTStakeVoSzbGY.totalStaked.call({from: accounts[3]});
		const addressjEna7xq = await CourtFarming_HTStakeVoSzbGY.getBeneficiaryInfo.call(addresspgy53PK, {from: accounts[1]});
		const addressivcPgra = await CourtFarming_HTStakeVoSzbGY.setCourtStake.call(addressVURIQk2, {from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeSeXBoiu = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressWJFLxws = accounts[2]
		const uint256n299BVp = await CourtFarming_HTStakeSeXBoiu.incvRewardInfo.call({from: accounts[1]});
		const uint256f1IEe1q = await CourtFarming_HTStakeSeXBoiu.incvRewardClaim.call({from: accounts[5]});
		const addressZlKxAfI = await CourtFarming_HTStakeSeXBoiu.setCourtStake.call(addressWJFLxws, {from: accounts[2]});

		assert.equal(uint256f1IEe1q, BigInt("0"))
		await expect(CourtFarming_HTStakeSeXBoiu.setCourtStake.call(addressWJFLxws, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeYX8E3jE = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintZZvj7F9 = BigInt("0")
		const uint256KAOAE1h = await CourtFarming_HTStakeYX8E3jE.stake.call(uintZZvj7F9, {from: accounts[5]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeYX8E3jE = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressDE9JAwr = accounts[3]
		const addressogjz6V0 = "0x0000000000000000000000000000000000000001"
		const uintk6439mS = BigInt("0")
		const uintulH36r = BigInt("808")
		const uinttU1lPR1 = BigInt("1156")
		const addresswjRgTCc = await CourtFarming_HTStakeYX8E3jE.getBeneficiaryInfo.call(addressDE9JAwr, {from: accounts[3]});
		const addressZlQ15v6 = await CourtFarming_HTStakeYX8E3jE.updateReward.call(addressogjz6V0, {from: accounts[2]});
		const boolKMsIrZA = await CourtFarming_HTStakeYX8E3jE.stakeIncvRewards.call(uintk6439mS, {from: accounts[1]});
		const boolWscKehC = await CourtFarming_HTStakeYX8E3jE.stakeIncvRewards.call(uintulH36r, {from: accounts[4]});
		const uint256bkf2Ilj = await CourtFarming_HTStakeYX8E3jE.expectedRewardsToday.call(uinttU1lPR1, {from: accounts[2]});

		assert.equal(boolKMsIrZA, false)
		assert.equal(boolWscKehC, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeSeXBoiu = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolbP4u189 = true
		const uintRyTmasW = BigInt("0")
		const uint256UT2JaF = await CourtFarming_HTStakeSeXBoiu.unstake.call(uintRyTmasW, boolbP4u189, {from: accounts[3]});
	});
})