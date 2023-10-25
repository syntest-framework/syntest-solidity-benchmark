const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyKpJDG = await CourtFarming_HTStake.new({from: accounts[4]});
		const addresseKilCe0 = "0x0000000000000000000000000000000000000001"
		const uintCq7F7m = BigInt("1494")
		const uintfxHCMYu = BigInt("223")
		const uintMJSPmMJ = BigInt("135")
		const uint256ice5c0A = await CourtFarming_HTStakeyKpJDG.balanceOf.call(addresseKilCe0, {from: accounts[2]});
		const uint256Uh0XJ0a = await CourtFarming_HTStakeyKpJDG.lastUpdateBlock.call({from: accounts[3]});
		const uint256EuSJkG = await CourtFarming_HTStakeyKpJDG.totalStaked.call({from: accounts[4]});
//		await CourtFarming_HTStakeyKpJDG.changeStakeParameters.call(uintMJSPmMJ, uintfxHCMYu, uintCq7F7m, {from: accounts[0]});

		assert.equal(uint256EuSJkG, BigInt("0"))
		assert.equal(uint256Uh0XJ0a, BigInt("1736"))
		assert.equal(uint256ice5c0A, BigInt("0"))
		await expect(CourtFarming_HTStakeyKpJDG.changeStakeParameters.call(uintMJSPmMJ, uintfxHCMYu, uintCq7F7m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefPcLpbI = await CourtFarming_HTStake.new({from: accounts[5]});
		const addresseghD4Z = accounts[2]
		const boolYkJ2l2D = false
		const uintWDztwG0 = BigInt("1418")
		const uintj7yFsyc = BigInt("1425")
		const addressBBphkw = accounts[4]
		const uinteOJ5M6o = BigInt("1644")
		const addressuGgrqvH = await CourtFarming_HTStakefPcLpbI.updateReward.call(addresseghD4Z, {from: accounts[0]});
//		const uint256XoBIIrB = await CourtFarming_HTStakefPcLpbI.unstake.call(uintWDztwG0, boolYkJ2l2D, {from: accounts[0]});
//		const uint256erp0x30 = await CourtFarming_HTStakefPcLpbI.getCurrentTime.call({from: accounts[3]});
//		const uint256Rn9ZIZl = await CourtFarming_HTStakefPcLpbI.stake.call(uintj7yFsyc, {from: accounts[1]});
//		const uint256TgErhFg = await CourtFarming_HTStakefPcLpbI.balanceOf.call(addressBBphkw, {from: accounts[3]});
//		const boolwEvevkS = await CourtFarming_HTStakefPcLpbI.stakeIncvRewards.call(uinteOJ5M6o, {from: accounts[2]});

		await expect(CourtFarming_HTStakefPcLpbI.unstake.call(uintWDztwG0, boolYkJ2l2D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeFArju8B = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressydOManA = accounts[1]
		const boolF3ypA5R = false
		const uintx3w6pMI = BigInt("1654")
		const uintYLzkk0i = BigInt("191")
		const uintrgTOiox = BigInt("1262")
		const uintKEkd9dz = BigInt("1837")
		const uint256m1x1LTT = await CourtFarming_HTStakeFArju8B.totalStaked.call({from: accounts[0]});
		const uint256t2SEVdZ = await CourtFarming_HTStakeFArju8B.balanceOf.call(addressydOManA, {from: accounts[0]});
		const uint256zGmIEma = await CourtFarming_HTStakeFArju8B.unstake.call(uintx3w6pMI, boolF3ypA5R, {from: accounts[1]});
		await CourtFarming_HTStakeFArju8B.changeStakeParameters.call(uintKEkd9dz, uintrgTOiox, uintYLzkk0i, {from: accounts[2]});
		const uint256k91oVnn = await CourtFarming_HTStakeFArju8B.blockNumber.call({from: accounts[3]});
		const uint256IlLop6V = await CourtFarming_HTStakeFArju8B.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeRwSHK5g = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressScwoAO = accounts[1]
		const uintGYGbUyM = BigInt("1954")
//		const addressyYp0rg = await CourtFarming_HTStakeRwSHK5g.setCourtStake.call(addressScwoAO, {from: accounts[2]});
//		const uint256vxivTJu = await CourtFarming_HTStakeRwSHK5g.blockNumber.call({from: accounts[3]});
//		const booltYuJfbB = await CourtFarming_HTStakeRwSHK5g.stakeIncvRewards.call(uintGYGbUyM, {from: accounts[4]});

		await expect(CourtFarming_HTStakeRwSHK5g.setCourtStake.call(addressScwoAO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeFJxq6LI = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintapox0nH = BigInt("432")
		const addressJoGwco6 = accounts[4]
		const uinttoTRjNr = BigInt("1042")
		const uintiTPofOK = BigInt("1445")
		const uintpgoceSW = BigInt("432")
		const addressD3zwXzA = accounts[4]
//		const uint256clLL2tv = await CourtFarming_HTStakeFJxq6LI.stake.call(uintapox0nH, {from: accounts[5]});
//		const addressT0PV1XW = await CourtFarming_HTStakeFJxq6LI.updateReward.call(addressJoGwco6, {from: accounts[4]});
//		const uint256qTBBCw4 = await CourtFarming_HTStakeFJxq6LI._stakeParametrsCalculation.call(uintpgoceSW, uintiTPofOK, uinttoTRjNr, {from: accounts[4]});
//		const uint256f6NsNJc = await CourtFarming_HTStakeFJxq6LI.lastUpdateBlock.call({from: accounts[2]});
//		const uint256YP4xH2e = await CourtFarming_HTStakeFJxq6LI.balanceOf.call(addressD3zwXzA, {from: accounts[1]});
//		const uint256VFfka1c = await CourtFarming_HTStakeFJxq6LI.lastUpdateBlock.call({from: accounts[2]});

		await expect(CourtFarming_HTStakeFJxq6LI.stake.call(uintapox0nH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekCXfDX = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressLaG4Sct = accounts[2]
		const addressDpuPRFf = accounts[0]
		const uintyDp9ehI = BigInt("449")
		const uintE29Zzeb = BigInt("672")
		const uintHGkNrXA = BigInt("578")
		const uintkZldL3m = BigInt("828")
		const uint256h2JTZAK = await CourtFarming_HTStakekCXfDX.rewards.call(addressLaG4Sct, {from: accounts[4]});
		const addressTe2IY9 = await CourtFarming_HTStakekCXfDX.updateReward.call(addressDpuPRFf, {from: accounts[3]});
//		await CourtFarming_HTStakekCXfDX.changeStakeParameters.call(uintHGkNrXA, uintE29Zzeb, uintyDp9ehI, {from: accounts[2]});
//		const uint256Re54wn = await CourtFarming_HTStakekCXfDX.totalStaked.call({from: accounts[4]});
//		const uint256Juz6Jms = await CourtFarming_HTStakekCXfDX.expectedRewardsToday.call(uintkZldL3m, {from: accounts[5]});

		await expect(CourtFarming_HTStakekCXfDX.changeStakeParameters.call(uintHGkNrXA, uintE29Zzeb, uintyDp9ehI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeS4Ph1kN = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintA2Ow2Ev = BigInt("1982")
		const uintMJovX6n = BigInt("941")
		const addressh9EAxTi = accounts[1]
		const boolIyon662 = await CourtFarming_HTStakeS4Ph1kN.stakeIncvRewards.call(uintA2Ow2Ev, {from: accounts[3]});
		const uint256oHlfNcV = await CourtFarming_HTStakeS4Ph1kN.blockNumber.call({from: accounts[5]});
//		const uint256UvN3oDY = await CourtFarming_HTStakeS4Ph1kN.stake.call(uintMJovX6n, {from: accounts[3]});
//		const uint256A5NuzOH = await CourtFarming_HTStakeS4Ph1kN.getCurrentTime.call({from: accounts[2]});
//		const uint256GiJyaZI = await CourtFarming_HTStakeS4Ph1kN.balanceOf.call(addressh9EAxTi, {from: accounts[0]});

		assert.equal(boolIyon662, false)
		assert.equal(uint256oHlfNcV, BigInt("1736"))
		await expect(CourtFarming_HTStakeS4Ph1kN.stake.call(uintMJovX6n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakerBMquil = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressrcYVUBZ = accounts[1]
		const addressulz4Fe3 = accounts[4]
		const addressCwUv6F = accounts[0]
		const uintRLIRtz0 = BigInt("14")
		const uint256ddstwQ2 = await CourtFarming_HTStakerBMquil.rewards.call(addressrcYVUBZ, {from: accounts[5]});
		const uint256hfyl7cl = await CourtFarming_HTStakerBMquil.balanceOf.call(addressulz4Fe3, {from: accounts[1]});
		const addressXOlw7mJ = await CourtFarming_HTStakerBMquil.getBeneficiaryInfo.call(addressCwUv6F, {from: accounts[3]});
		const uint256iHe3o6L = await CourtFarming_HTStakerBMquil.expectedRewardsToday.call(uintRLIRtz0, {from: accounts[4]});

		assert.equal(uint256hfyl7cl, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeS4Ph1kN = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintsMvoYjy = BigInt("1982")
		const uintK3UymHr = BigInt("941")
		const addressdJSunkw = accounts[1]
		const boolIyon662 = await CourtFarming_HTStakeS4Ph1kN.stakeIncvRewards.call(uintsMvoYjy, {from: accounts[3]});
		const uint256oHlfNcV = await CourtFarming_HTStakeS4Ph1kN.blockNumber.call({from: accounts[5]});
		const uint256zR5IW1m = await CourtFarming_HTStakeS4Ph1kN.incvRewardInfo.call({from: accounts[0]});
//		const uint256UvN3oDY = await CourtFarming_HTStakeS4Ph1kN.stake.call(uintK3UymHr, {from: accounts[3]});
//		const uint256A5NuzOH = await CourtFarming_HTStakeS4Ph1kN.getCurrentTime.call({from: accounts[2]});
//		const uint256GiJyaZI = await CourtFarming_HTStakeS4Ph1kN.balanceOf.call(addressdJSunkw, {from: accounts[0]});

		assert.equal(boolIyon662, false)
		assert.equal(uint256oHlfNcV, BigInt("1736"))
		await expect(CourtFarming_HTStakeS4Ph1kN.stake.call(uintK3UymHr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakePIIzx4 = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintpWmrFpC = BigInt("1147")
		const uintesenfD0 = BigInt("932")
		const uintbYNC2pB = BigInt("235")
		const uintuwFMvBD = BigInt("528")
		const uintfGH3d7r = BigInt("611")
		const uintN4a2pAN = BigInt("407")
		const uintMDMSK8 = BigInt("2029")
		const uintm7rqxAH = BigInt("904")
		const uintTYKpEB = BigInt("2023")
		const addressiRVGmR8 = accounts[2]
		const addresst9PxkUY = accounts[4]
//		const uint256mBsZli3 = await CourtFarming_HTStakePIIzx4._stakeParametrsCalculation.call(uintbYNC2pB, uintesenfD0, uintpWmrFpC, {from: accounts[4]});
//		await CourtFarming_HTStakePIIzx4.changeStakeParameters.call(uintN4a2pAN, uintfGH3d7r, uintuwFMvBD, {from: accounts[0]});
//		await CourtFarming_HTStakePIIzx4.changeStakeParameters.call(uintTYKpEB, uintm7rqxAH, uintMDMSK8, {from: accounts[1]});
//		const uint256JqFc9U = await CourtFarming_HTStakePIIzx4.balanceOf.call(addressiRVGmR8, {from: accounts[2]});
//		const uint256WsSWm9r = await CourtFarming_HTStakePIIzx4.rewards.call(addresst9PxkUY, {from: accounts[2]});

		await expect(CourtFarming_HTStakePIIzx4._stakeParametrsCalculation.call(uintbYNC2pB, uintesenfD0, uintpWmrFpC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeK43AXzb = await CourtFarming_HTStake.new({from: accounts[2]});
		const address84pdQH = accounts[1]
		const uint256Gafie4N = await CourtFarming_HTStakeK43AXzb.totalStaked.call({from: accounts[0]});
		const uint256rviB1Ao = await CourtFarming_HTStakeK43AXzb.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qn7voyK = await CourtFarming_HTStakeK43AXzb.incvRewardClaim.call({from: accounts[0]});
		const uint256NSBOWzg = await CourtFarming_HTStakeK43AXzb.balanceOf.call(address84pdQH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AtQi5nE = await CourtFarming_HTStakeK43AXzb.getCurrentTime.call({from: accounts[1]});

		assert.equal(uint256AtQi5nE, BigInt("1630201365"))
		assert.equal(uint256Gafie4N, BigInt("0"))
		assert.equal(uint256NSBOWzg, BigInt("0"))
		assert.equal(uint256qn7voyK, BigInt("0"))
		assert.equal(uint256rviB1Ao, BigInt("1736"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakerBMquil = await CourtFarming_HTStake.new({from: accounts[2]});
		const addresstp0kti4 = accounts[1]
		const addressvA5U8K = accounts[4]
		const addresshmnMoLF = accounts[0]
		const uintdrINw7v = BigInt("14")
		const addressM5jpHnT = accounts[4]
		const uint256ddstwQ2 = await CourtFarming_HTStakerBMquil.rewards.call(addresstp0kti4, {from: accounts[5]});
		const uint256hfyl7cl = await CourtFarming_HTStakerBMquil.balanceOf.call(addressvA5U8K, {from: accounts[1]});
		const addressXOlw7mJ = await CourtFarming_HTStakerBMquil.getBeneficiaryInfo.call(addresshmnMoLF, {from: accounts[3]});
		const uint256iHe3o6L = await CourtFarming_HTStakerBMquil.expectedRewardsToday.call(uintdrINw7v, {from: accounts[4]});
//		const addressFjTO2Ix = await CourtFarming_HTStakerBMquil.setCourtStake.call(addressM5jpHnT, {from: accounts[2]});

		assert.equal(uint256hfyl7cl, BigInt("0"))
		await expect(CourtFarming_HTStakerBMquil.setCourtStake.call(addressM5jpHnT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakerBMquil = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressQh5WBy4 = accounts[2]
		const addressZQBHLk2 = accounts[4]
		const uintXlytCXS = BigInt("0")
		const uint256ddstwQ2 = await CourtFarming_HTStakerBMquil.rewards.call(addressQh5WBy4, {from: accounts[5]});
		const uint256hfyl7cl = await CourtFarming_HTStakerBMquil.balanceOf.call(addressZQBHLk2, {from: accounts[1]});
//		const uint256iHe3o6L = await CourtFarming_HTStakerBMquil.expectedRewardsToday.call(uintXlytCXS, {from: accounts[4]});

		assert.equal(uint256hfyl7cl, BigInt("0"))
		await expect(CourtFarming_HTStakerBMquil.expectedRewardsToday.call(uintXlytCXS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeAUWT3jf = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressfN5yLun = accounts[1]
		const boolz70twN7 = true
		const uintQLRocgO = BigInt("0")
		const uintlLGRPqO = BigInt("982")
		const uint256ueJap8o = await CourtFarming_HTStakeAUWT3jf.balanceOf.call(addressfN5yLun, {from: accounts[4]});
		const uint256Ehc2OOZ = await CourtFarming_HTStakeAUWT3jf.unstake.call(uintQLRocgO, boolz70twN7, {from: accounts[4]});
		const uint256WzKm38C = await CourtFarming_HTStakeAUWT3jf.expectedRewardsToday.call(uintlLGRPqO, {from: accounts[3]});

		assert.equal(uint256ueJap8o, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakerBMquil = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressOF0TzQQ = accounts[4]
		const addresscbBt2Dn = accounts[0]
		const uintP4k72ka = BigInt("14")
		const uintZPDY0M = BigInt("514")
		const addressDeIYbzb = accounts[4]
		const uintLwPRKXa = BigInt("0")
		const uint256hfyl7cl = await CourtFarming_HTStakerBMquil.balanceOf.call(addressOF0TzQQ, {from: accounts[1]});
		const addressXOlw7mJ = await CourtFarming_HTStakerBMquil.getBeneficiaryInfo.call(addresscbBt2Dn, {from: accounts[3]});
		const uint256Iyv0RC = await CourtFarming_HTStakerBMquil.incvRewardClaim.call({from: accounts[3]});
		const uint256iHe3o6L = await CourtFarming_HTStakerBMquil.expectedRewardsToday.call(uintP4k72ka, {from: accounts[4]});
		const boolH3ye3X7 = await CourtFarming_HTStakerBMquil.stakeIncvRewards.call(uintZPDY0M, {from: accounts[0]});
		const uint256iGztKq6 = await CourtFarming_HTStakerBMquil.rewards.call(addressDeIYbzb, {from: accounts[0]});
		const uint256IZBFxgw = await CourtFarming_HTStakerBMquil.stake.call(uintLwPRKXa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolH3ye3X7, false)
		assert.equal(uint256Iyv0RC, BigInt("0"))
		assert.equal(uint256hfyl7cl, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeH5PYMuA = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintJPCcxMS = BigInt("0")
		const uintFyYoVS8 = BigInt("1538")
		const boolwUwZpe5 = await CourtFarming_HTStakeH5PYMuA.stakeIncvRewards.call(uintJPCcxMS, {from: accounts[4]});
		const boolLOpzNTh = await CourtFarming_HTStakeH5PYMuA.stakeIncvRewards.call(uintFyYoVS8, {from: accounts[2]});

		assert.equal(boolLOpzNTh, false)
		assert.equal(boolwUwZpe5, false)
	});
})