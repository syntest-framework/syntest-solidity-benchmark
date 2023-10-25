const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBVrpwh7 = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolvMRi3Vw = false
		const uintyxNlK3F = BigInt("630")
		const uint256qm7Ez27 = await CourtFarming_HTStakeBVrpwh7.getCurrentTime.call({from: accounts[0]});
//		const uint256F9pBrLj = await CourtFarming_HTStakeBVrpwh7.unstake.call(uintyxNlK3F, boolvMRi3Vw, {from: accounts[0]});

		assert.equal(uint256qm7Ez27, BigInt("1630201563"))
		await expect(CourtFarming_HTStakeBVrpwh7.unstake.call(uintyxNlK3F, boolvMRi3Vw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeclZw1Bj = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressNopoag = accounts[2]
		const addressXJLhUWZ = "0x0000000000000000000000000000000000000001"
		const uint256Ml8ph87 = await CourtFarming_HTStakeclZw1Bj.totalStaked.call({from: accounts[3]});
		const uint256tvC7N69 = await CourtFarming_HTStakeclZw1Bj.rewards.call(addressNopoag, {from: accounts[5]});
//		const addressikhVIcz = await CourtFarming_HTStakeclZw1Bj.setCourtStake.call(addressXJLhUWZ, {from: accounts[3]});
//		const uint256VGDyjs2 = await CourtFarming_HTStakeclZw1Bj.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256Ml8ph87, BigInt("0"))
		await expect(CourtFarming_HTStakeclZw1Bj.setCourtStake.call(addressXJLhUWZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeaWdPCSJ = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintHn71zgi = BigInt("202")
		const addressxe4F4D = accounts[3]
		const uintQ5wBqyh = BigInt("477")
		const addressNErzcrf = accounts[4]
		const uint256ua7xcAC = await CourtFarming_HTStakeaWdPCSJ.expectedRewardsToday.call(uintHn71zgi, {from: accounts[0]});
		const uint256kY9tMYw = await CourtFarming_HTStakeaWdPCSJ.balanceOf.call(addressxe4F4D, {from: accounts[0]});
		const uint256mlXu4BK = await CourtFarming_HTStakeaWdPCSJ.expectedRewardsToday.call(uintQ5wBqyh, {from: accounts[4]});
		const addresskn5jbK = await CourtFarming_HTStakeaWdPCSJ.getBeneficiaryInfo.call(addressNErzcrf, {from: accounts[3]});

		assert.equal(uint256kY9tMYw, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeP5PaK89 = await CourtFarming_HTStake.new({from: accounts[3]});
		const boolbUqEAAr = true
		const uintC6VRv85 = BigInt("1453")
		const uint256bwgCLx2 = await CourtFarming_HTStakeP5PaK89.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256z5FLk9u = await CourtFarming_HTStakeP5PaK89.unstake.call(uintC6VRv85, boolbUqEAAr, {from: accounts[3]});

		assert.equal(uint256bwgCLx2, BigInt("0"))
		await expect(CourtFarming_HTStakeP5PaK89.unstake.call(uintC6VRv85, boolbUqEAAr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeCQq4Zew = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressx5cKzRR = accounts[2]
		const uintw2GeqFH = BigInt("103")
		const uintW808eam = BigInt("713")
		const addressvM1Pb2p = accounts[2]
//		const addressC12ieBh = await CourtFarming_HTStakeCQq4Zew.setCourtStake.call(addressx5cKzRR, {from: accounts[1]});
//		const boolTOWmcms = await CourtFarming_HTStakeCQq4Zew.stakeIncvRewards.call(uintw2GeqFH, {from: accounts[0]});
//		const uint256v9yRiBl = await CourtFarming_HTStakeCQq4Zew.incvRewardInfo.call({from: accounts[0]});
//		const boolNzaASM = await CourtFarming_HTStakeCQq4Zew.stakeIncvRewards.call(uintW808eam, {from: "0x0000000000000000000000000000000000000001"});
//		const addressAgI1uTV = await CourtFarming_HTStakeCQq4Zew.setCourtStake.call(addressvM1Pb2p, {from: accounts[3]});

		await expect(CourtFarming_HTStakeCQq4Zew.setCourtStake.call(addressx5cKzRR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeiZudX9S = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintne2Ak1K = BigInt("891")
		const uint256XlMsYbP = await CourtFarming_HTStakeiZudX9S.getCurrentTime.call({from: accounts[0]});
		const uint256lUx70Yb = await CourtFarming_HTStakeiZudX9S.lastUpdateBlock.call({from: accounts[5]});
		const uint256wfzQFV0 = await CourtFarming_HTStakeiZudX9S.expectedRewardsToday.call(uintne2Ak1K, {from: accounts[0]});

		assert.equal(uint256XlMsYbP, BigInt("1630201571"))
		assert.equal(uint256lUx70Yb, BigInt("1713"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTNOzkyA = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressuhzCIVd = accounts[1]
		const addressIUMFP3h = accounts[4]
		const uint256fYg89a6 = await CourtFarming_HTStakeTNOzkyA.incvRewardInfo.call({from: accounts[4]});
		const uint256A4tXZuz = await CourtFarming_HTStakeTNOzkyA.rewards.call(addressuhzCIVd, {from: accounts[1]});
		const uint256uP2fMtf = await CourtFarming_HTStakeTNOzkyA.incvRewardInfo.call({from: accounts[0]});
		const addressb00hmnj = await CourtFarming_HTStakeTNOzkyA.updateReward.call(addressIUMFP3h, {from: accounts[2]});
		const uint256j6z4Zw7 = await CourtFarming_HTStakeTNOzkyA.getCurrentTime.call({from: accounts[4]});

		assert.equal(uint256j6z4Zw7, BigInt("1630201557"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegZu1uJF = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBFafMlT = accounts[4]
		const boolcpnHOIB = false
		const uintoDpFHat = BigInt("1248")
		const uint256xb0w7Am = await CourtFarming_HTStakegZu1uJF.blockNumber.call({from: accounts[1]});
		const uint256HLJYmQB = await CourtFarming_HTStakegZu1uJF.rewards.call(addressBFafMlT, {from: accounts[4]});
		const uint256ohu87s = await CourtFarming_HTStakegZu1uJF.unstake.call(uintoDpFHat, boolcpnHOIB, {from: accounts[4]});
		const uint256jNs7G2 = await CourtFarming_HTStakegZu1uJF.blockNumber.call({from: accounts[0]});
		const uint256wfyfvp1 = await CourtFarming_HTStakegZu1uJF.getCurrentTime.call({from: accounts[1]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTOab6ZH = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintqoxcK8m = BigInt("629")
		const uintlWcC14 = BigInt("477")
		const uint0hndjI = BigInt("917")
		const addressvlbtJy = accounts[0]
		const addressj1WNcZc = "0x0000000000000000000000000000000000000001"
		const addressB990Qdx = accounts[0]
		const uintKbnWkG = BigInt("18")
		const uintKlOmwMK = BigInt("1962")
		const uintsn0RqGv = BigInt("1179")
		const addresso8UyLiI = accounts[2]
//		await CourtFarming_HTStakeTOab6ZH.changeStakeParameters.call(uint0hndjI, uintlWcC14, uintqoxcK8m, {from: accounts[1]});
//		const addressRKqgEPX = await CourtFarming_HTStakeTOab6ZH.getBeneficiaryInfo.call(addressvlbtJy, {from: accounts[5]});
//		const uint256ISck1w = await CourtFarming_HTStakeTOab6ZH.rewards.call(addressj1WNcZc, {from: accounts[4]});
//		const addressUCDG00 = await CourtFarming_HTStakeTOab6ZH.setCourtStake.call(addressB990Qdx, {from: accounts[2]});
//		await CourtFarming_HTStakeTOab6ZH.changeStakeParameters.call(uintsn0RqGv, uintKlOmwMK, uintKbnWkG, {from: accounts[2]});
//		const uint256MRsfrlC = await CourtFarming_HTStakeTOab6ZH.rewards.call(addresso8UyLiI, {from: accounts[4]});
//		const uint256ejRmbO = await CourtFarming_HTStakeTOab6ZH.lastUpdateBlock.call({from: accounts[1]});
//		const uint256DU1lVFh = await CourtFarming_HTStakeTOab6ZH.blockNumber.call({from: accounts[0]});

		await expect(CourtFarming_HTStakeTOab6ZH.changeStakeParameters.call(uint0hndjI, uintlWcC14, uintqoxcK8m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeclZw1Bj = await CourtFarming_HTStake.new({from: accounts[1]});
		const addresssR2rSiV = accounts[2]
		const uintUPFmSFP = BigInt("338")
		const addressXA3ePLo = accounts[0]
		const addressABGFzeq = "0x0000000000000000000000000000000000000001"
		const uint256Ml8ph87 = await CourtFarming_HTStakeclZw1Bj.totalStaked.call({from: accounts[3]});
		const uint256tvC7N69 = await CourtFarming_HTStakeclZw1Bj.rewards.call(addresssR2rSiV, {from: accounts[5]});
//		const uint256gb1yXyF = await CourtFarming_HTStakeclZw1Bj.stake.call(uintUPFmSFP, {from: accounts[3]});
//		const uint256JLhye8A = await CourtFarming_HTStakeclZw1Bj.rewards.call(addressXA3ePLo, {from: accounts[0]});
//		const addressikhVIcz = await CourtFarming_HTStakeclZw1Bj.setCourtStake.call(addressABGFzeq, {from: accounts[3]});
//		const uint256VGDyjs2 = await CourtFarming_HTStakeclZw1Bj.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256Ml8ph87, BigInt("0"))
		await expect(CourtFarming_HTStakeclZw1Bj.stake.call(uintUPFmSFP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBVrpwh7 = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintFY2nWqg = BigInt("1152")
		const boolvMRi3Vw = false
		const uintJXsRYhB = BigInt("630")
		const boolgUoJWGQ = await CourtFarming_HTStakeBVrpwh7.stakeIncvRewards.call(uintFY2nWqg, {from: accounts[3]});
		const uint256qm7Ez27 = await CourtFarming_HTStakeBVrpwh7.getCurrentTime.call({from: accounts[0]});
		const uint256C9XG8U = await CourtFarming_HTStakeBVrpwh7.getCurrentTime.call({from: accounts[3]});
//		const uint256F9pBrLj = await CourtFarming_HTStakeBVrpwh7.unstake.call(uintJXsRYhB, boolvMRi3Vw, {from: accounts[0]});

		assert.equal(boolgUoJWGQ, false)
		assert.equal(uint256C9XG8U, BigInt("1630201569"))
		assert.equal(uint256qm7Ez27, BigInt("1630201569"))
		await expect(CourtFarming_HTStakeBVrpwh7.unstake.call(uintJXsRYhB, boolvMRi3Vw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeaWdPCSJ = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintBiEvljl = BigInt("202")
		const addressw2ikGhT = accounts[3]
		const uintur6Q9ng = BigInt("516")
		const addressamDBNkz = accounts[4]
		const uintdWCAoka = BigInt("316")
		const uintGqu42dR = BigInt("1125")
		const uintoZeU7EO = BigInt("1293")
		const uintF99pikX = BigInt("1381")
		const uint256ua7xcAC = await CourtFarming_HTStakeaWdPCSJ.expectedRewardsToday.call(uintBiEvljl, {from: accounts[0]});
		const uint256kY9tMYw = await CourtFarming_HTStakeaWdPCSJ.balanceOf.call(addressw2ikGhT, {from: accounts[0]});
		const uint256mlXu4BK = await CourtFarming_HTStakeaWdPCSJ.expectedRewardsToday.call(uintur6Q9ng, {from: accounts[4]});
		const addresskn5jbK = await CourtFarming_HTStakeaWdPCSJ.getBeneficiaryInfo.call(addressamDBNkz, {from: accounts[3]});
//		const uint256UROockC = await CourtFarming_HTStakeaWdPCSJ._stakeParametrsCalculation.call(uintoZeU7EO, uintGqu42dR, uintdWCAoka, {from: accounts[4]});
//		const uint256yhqWKMZ = await CourtFarming_HTStakeaWdPCSJ.stake.call(uintF99pikX, {from: accounts[1]});

		assert.equal(uint256kY9tMYw, BigInt("0"))
		await expect(CourtFarming_HTStakeaWdPCSJ._stakeParametrsCalculation.call(uintoZeU7EO, uintGqu42dR, uintdWCAoka, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBVrpwh7 = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolEiQMjZ0 = false
		const uintkHGr9HK = BigInt("0")
		const uint2564Xr6bz = await CourtFarming_HTStakeBVrpwh7.unstake.call(uintkHGr9HK, boolEiQMjZ0, {from: accounts[4]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeaWdPCSJ = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresslhUwKk = accounts[3]
		const uintSzF5tEB = BigInt("0")
		const addressZeOqhNw = accounts[5]
		const uint256kY9tMYw = await CourtFarming_HTStakeaWdPCSJ.balanceOf.call(addresslhUwKk, {from: accounts[0]});
		const uint256ThhZqP1 = await CourtFarming_HTStakeaWdPCSJ.stake.call(uintSzF5tEB, {from: accounts[4]});
		const addresskn5jbK = await CourtFarming_HTStakeaWdPCSJ.getBeneficiaryInfo.call(addressZeOqhNw, {from: accounts[3]});

		assert.equal(uint256kY9tMYw, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBVrpwh7 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressELCbzV = accounts[2]
		const addressNDX1Xr7 = accounts[2]
		const addressX0zYaJL = accounts[1]
		const uintKXBf9YR = BigInt("1747")
		const uintEZpFsSa = BigInt("1857")
		const uint57r9kc = BigInt("0")
		const uint256ToLhSq1 = await CourtFarming_HTStakeBVrpwh7.rewards.call(addressELCbzV, {from: accounts[2]});
		const addressyyRa7oD = await CourtFarming_HTStakeBVrpwh7.updateReward.call(addressNDX1Xr7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dr2t89 = await CourtFarming_HTStakeBVrpwh7.rewards.call(addressX0zYaJL, {from: accounts[2]});
		const uint256X0IgTuP = await CourtFarming_HTStakeBVrpwh7.getCurrentTime.call({from: accounts[4]});
		const uint256TTLWG7L = await CourtFarming_HTStakeBVrpwh7.expectedRewardsToday.call(uintKXBf9YR, {from: accounts[2]});
		const uint256qVZzn5Z = await CourtFarming_HTStakeBVrpwh7.incvRewardInfo.call({from: accounts[2]});
		const uint256eZK8vTj = await CourtFarming_HTStakeBVrpwh7.blockNumber.call({from: accounts[3]});
		const uint256k7wkmt = await CourtFarming_HTStakeBVrpwh7.blockNumber.call({from: accounts[2]});
		const uint256ZmIydtz = await CourtFarming_HTStakeBVrpwh7.blockNumber.call({from: accounts[2]});
		const booleEGDmkw = await CourtFarming_HTStakeBVrpwh7.stakeIncvRewards.call(uintEZpFsSa, {from: accounts[2]});
		const uint256SiS4Rne = await CourtFarming_HTStakeBVrpwh7.getCurrentTime.call({from: accounts[4]});
		const uint256PJxJ51y = await CourtFarming_HTStakeBVrpwh7.incvRewardInfo.call({from: accounts[2]});
		const boolo5Pga2z = await CourtFarming_HTStakeBVrpwh7.stakeIncvRewards.call(uint57r9kc, {from: accounts[0]});
		const uint256CaZeyC = await CourtFarming_HTStakeBVrpwh7.totalStaked.call({from: accounts[2]});

		assert.equal(booleEGDmkw, false)
		assert.equal(boolo5Pga2z, false)
		assert.equal(uint256CaZeyC, BigInt("0"))
		assert.equal(uint256SiS4Rne, BigInt("1630201574"))
		assert.equal(uint256X0IgTuP, BigInt("1630201574"))
		assert.equal(uint256ZmIydtz, BigInt("1713"))
		assert.equal(uint256eZK8vTj, BigInt("1713"))
		assert.equal(uint256k7wkmt, BigInt("1713"))
	});
})