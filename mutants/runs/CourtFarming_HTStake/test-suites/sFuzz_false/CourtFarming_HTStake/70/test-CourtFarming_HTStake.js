const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaketxVzm9P = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintSkmFx4l = BigInt("502")
		const addresscXTrWhZ = accounts[4]
		const uint256WR5RIf = await CourtFarming_HTStaketxVzm9P.incvRewardClaim.call({from: accounts[3]});
		const uint256pXlxYiy = await CourtFarming_HTStaketxVzm9P.expectedRewardsToday.call(uintSkmFx4l, {from: accounts[3]});
		const addressLvysxI1 = await CourtFarming_HTStaketxVzm9P.getBeneficiaryInfo.call(addresscXTrWhZ, {from: accounts[2]});
		const uint256H2brCe = await CourtFarming_HTStaketxVzm9P.incvRewardClaim.call({from: accounts[3]});
		const uint256TMV4Sa = await CourtFarming_HTStaketxVzm9P.lastUpdateBlock.call({from: accounts[1]});

		assert.equal(uint256H2brCe, BigInt("0"))
		assert.equal(uint256TMV4Sa, BigInt("1708"))
		assert.equal(uint256WR5RIf, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeE5nXPSC = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintU5dgXc = BigInt("271")
		const addressf6EqXIr = accounts[2]
		const addressk95Cc1b = accounts[2]
		const uint256v1yp1O2 = await CourtFarming_HTStakeE5nXPSC.stake.call(uintU5dgXc, {from: accounts[0]});
		const addressHewOgUt = await CourtFarming_HTStakeE5nXPSC.updateReward.call(addressf6EqXIr, {from: accounts[1]});
		const uint256HBBERLQ = await CourtFarming_HTStakeE5nXPSC.rewards.call(addressk95Cc1b, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeE5nXPSC.stake.call(uintU5dgXc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeF3kVqrv = await CourtFarming_HTStake.new({from: accounts[1]});
		const uinthnqWPa = BigInt("1340")
		const uintrfO2faO = BigInt("1078")
		const uintVFtEpJm = BigInt("441")
		const uint256vueUln = await CourtFarming_HTStakeF3kVqrv.totalStaked.call({from: accounts[1]});
		const uint256bwqhn2Y = await CourtFarming_HTStakeF3kVqrv._stakeParametrsCalculation.call(uintVFtEpJm, uintrfO2faO, uinthnqWPa, {from: accounts[4]});

		assert.equal(uint256vueUln, BigInt("0"))
		await expect(CourtFarming_HTStakeF3kVqrv._stakeParametrsCalculation.call(uintVFtEpJm, uintrfO2faO, uinthnqWPa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXHo4shd = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressAKKmOI7 = accounts[4]
		const addressIQqTyFf = accounts[3]
		const addressup2jQKc = await CourtFarming_HTStakeXHo4shd.setCourtStake.call(addressAKKmOI7, {from: accounts[1]});
		const uint256YaqZaNi = await CourtFarming_HTStakeXHo4shd.incvRewardInfo.call({from: accounts[1]});
		const addressgyMOvIt = await CourtFarming_HTStakeXHo4shd.updateReward.call(addressIQqTyFf, {from: accounts[5]});

		await expect(CourtFarming_HTStakeXHo4shd.setCourtStake.call(addressAKKmOI7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyapJZ3o = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintaT6NNnt = BigInt("584")
		const uintHr1R7yZ = BigInt("1866")
		const addresszylhxTi = accounts[5]
		const addressqmwoYzQ = "0x0000000000000000000000000000000000000001"
		const boolqcbMq9 = await CourtFarming_HTStakeyapJZ3o.stakeIncvRewards.call(uintaT6NNnt, {from: accounts[4]});
		const uint256h9sD97a = await CourtFarming_HTStakeyapJZ3o.stake.call(uintHr1R7yZ, {from: accounts[2]});
		const uint256kEWEZWz = await CourtFarming_HTStakeyapJZ3o.balanceOf.call(addresszylhxTi, {from: accounts[4]});
		const uint256mG6Ypiv = await CourtFarming_HTStakeyapJZ3o.incvRewardClaim.call({from: accounts[1]});
		const uint256yS5s86 = await CourtFarming_HTStakeyapJZ3o.rewards.call(addressqmwoYzQ, {from: accounts[3]});

		assert.equal(boolqcbMq9, false)
		await expect(CourtFarming_HTStakeyapJZ3o.stake.call(uintHr1R7yZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeWkaSh1p = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressMRJ0vp = accounts[4]
		const addressiMcjpwN = accounts[4]
		const addressssHSoYc = accounts[2]
		const uintifQyXhH = BigInt("221")
		const addressjT6lZPh = accounts[0]
		const addressgE4ccOh = await CourtFarming_HTStakeWkaSh1p.setCourtStake.call(addressMRJ0vp, {from: accounts[3]});
		const uint256d36ZS07 = await CourtFarming_HTStakeWkaSh1p.rewards.call(addressiMcjpwN, {from: accounts[1]});
		const addressVmDLYUd = await CourtFarming_HTStakeWkaSh1p.setCourtStake.call(addressssHSoYc, {from: accounts[2]});
		const boolVALHour = await CourtFarming_HTStakeWkaSh1p.stakeIncvRewards.call(uintifQyXhH, {from: accounts[3]});
		const address3FTzO2 = await CourtFarming_HTStakeWkaSh1p.updateReward.call(addressjT6lZPh, {from: accounts[4]});

		await expect(CourtFarming_HTStakeWkaSh1p.setCourtStake.call(addressMRJ0vp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeYGjhulv = await CourtFarming_HTStake.new({from: accounts[4]});
		const boolQf47Z29 = true
		const uintBZeyyO6 = BigInt("1285")
		const uintDSfhwvB = BigInt("1960")
		const uint256FJpzqbx = await CourtFarming_HTStakeYGjhulv.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HZAYEOJ = await CourtFarming_HTStakeYGjhulv.incvRewardInfo.call({from: accounts[0]});
		const uint256cz3iqDI = await CourtFarming_HTStakeYGjhulv.blockNumber.call({from: accounts[1]});
		const uint256O1PXf2O = await CourtFarming_HTStakeYGjhulv.unstake.call(uintBZeyyO6, boolQf47Z29, {from: accounts[2]});
		const uint256VpN6On3 = await CourtFarming_HTStakeYGjhulv.stake.call(uintDSfhwvB, {from: accounts[3]});
		const uint256cb1KLwM = await CourtFarming_HTStakeYGjhulv.incvRewardClaim.call({from: accounts[2]});

		assert.equal(uint256FJpzqbx, BigInt("1708"))
		assert.equal(uint256cz3iqDI, BigInt("1708"))
		await expect(CourtFarming_HTStakeYGjhulv.unstake.call(uintBZeyyO6, boolQf47Z29, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeuRD7pmo = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressmScmqws = accounts[3]
		const uint7dWEzV = BigInt("123")
		const uintSUMvIZZ = BigInt("1475")
		const uintEncHbsl = BigInt("979")
		const addressyEwJnr = accounts[2]
		const addressL3eLbnk = await CourtFarming_HTStakeuRD7pmo.updateReward.call(addressmScmqws, {from: accounts[2]});
		await CourtFarming_HTStakeuRD7pmo.changeStakeParameters.call(uintEncHbsl, uintSUMvIZZ, uint7dWEzV, {from: accounts[4]});
		const uint256ySFscLW = await CourtFarming_HTStakeuRD7pmo.incvRewardInfo.call({from: accounts[4]});
		const uint256UD9oNLP = await CourtFarming_HTStakeuRD7pmo.blockNumber.call({from: accounts[5]});
		const addressJpQJygJ = await CourtFarming_HTStakeuRD7pmo.updateReward.call(addressyEwJnr, {from: accounts[3]});

		await expect(CourtFarming_HTStakeuRD7pmo.changeStakeParameters.call(uintEncHbsl, uintSUMvIZZ, uint7dWEzV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyapJZ3o = await CourtFarming_HTStake.new({from: accounts[4]});
		const addresslXbov2Q = accounts[1]
		const uintK9rnkKz = BigInt("584")
		const uintC9IJx7T = BigInt("1851")
		const addressu92zOM = accounts[5]
		const addressfpSNFY7 = "0x0000000000000000000000000000000000000001"
		const uint256R98HvM7 = await CourtFarming_HTStakeyapJZ3o.balanceOf.call(addresslXbov2Q, {from: "0x0000000000000000000000000000000000000001"});
		const boolqcbMq9 = await CourtFarming_HTStakeyapJZ3o.stakeIncvRewards.call(uintK9rnkKz, {from: accounts[4]});
		const uint256h9sD97a = await CourtFarming_HTStakeyapJZ3o.stake.call(uintC9IJx7T, {from: accounts[2]});
		const uint256kEWEZWz = await CourtFarming_HTStakeyapJZ3o.balanceOf.call(addressu92zOM, {from: accounts[4]});
		const uint256mG6Ypiv = await CourtFarming_HTStakeyapJZ3o.incvRewardClaim.call({from: accounts[1]});
		const uint256GKUzjwt = await CourtFarming_HTStakeyapJZ3o.lastUpdateBlock.call({from: accounts[4]});
		const uint256yS5s86 = await CourtFarming_HTStakeyapJZ3o.rewards.call(addressfpSNFY7, {from: accounts[3]});

		assert.equal(boolqcbMq9, false)
		assert.equal(uint256R98HvM7, BigInt("0"))
		await expect(CourtFarming_HTStakeyapJZ3o.stake.call(uintC9IJx7T, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakePoAhJ6l = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const boolz9ZDCOe = false
		const uintLwuK11Y = BigInt("266")
		const addressNb5BCPE = accounts[0]
		const addressmSeigDy = "0x0000000000000000000000000000000000000001"
		const uint256exybvUA = await CourtFarming_HTStakePoAhJ6l.blockNumber.call({from: accounts[2]});
		const uint256c2KXCIB = await CourtFarming_HTStakePoAhJ6l.unstake.call(uintLwuK11Y, boolz9ZDCOe, {from: accounts[3]});
		const uint256qSr1ZJG = await CourtFarming_HTStakePoAhJ6l.incvRewardInfo.call({from: accounts[4]});
		const uint256NwAfGRC = await CourtFarming_HTStakePoAhJ6l.rewards.call(addressNb5BCPE, {from: accounts[1]});
		const uint256Qb8Ktgu = await CourtFarming_HTStakePoAhJ6l.rewards.call(addressmSeigDy, {from: accounts[1]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeaR07gzH = await CourtFarming_HTStake.new({from: accounts[4]});
		const address75495D = accounts[2]
		const uintAiU3QeV = BigInt("0")
		const uint256uqdJmdt = await CourtFarming_HTStakeaR07gzH.blockNumber.call({from: accounts[0]});
		const addressYIFglDu = await CourtFarming_HTStakeaR07gzH.getBeneficiaryInfo.call(address75495D, {from: accounts[0]});
		const uint256omutHvW = await CourtFarming_HTStakeaR07gzH.stake.call(uintAiU3QeV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256uqdJmdt, BigInt("1708"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyapJZ3o = await CourtFarming_HTStake.new({from: accounts[4]});
		const uinttncWwfY = BigInt("836")
		const uintJMazWcU = BigInt("0")
		const boolZaFmFFV = false
		const uintm6k2U8e = BigInt("1705")
		const boolGedJOR = await CourtFarming_HTStakeyapJZ3o.stakeIncvRewards.call(uinttncWwfY, {from: accounts[0]});
		const boolUsnvpPZ = await CourtFarming_HTStakeyapJZ3o.stakeIncvRewards.call(uintJMazWcU, {from: accounts[4]});
		const uint256NNPIna = await CourtFarming_HTStakeyapJZ3o.unstake.call(uintm6k2U8e, boolZaFmFFV, {from: accounts[2]});

		assert.equal(boolGedJOR, false)
		assert.equal(boolUsnvpPZ, false)
		await expect(CourtFarming_HTStakeyapJZ3o.unstake.call(uintm6k2U8e, boolZaFmFFV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeCgOSyA1 = await CourtFarming_HTStake.new({from: accounts[3]});
		const boolpK2HSzD = false
		const uintJpyTpXC = BigInt("0")
		const uint256g4aDZgk = await CourtFarming_HTStakeCgOSyA1.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dsZ5jUa = await CourtFarming_HTStakeCgOSyA1.unstake.call(uintJpyTpXC, boolpK2HSzD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256g4aDZgk, BigInt("1630201188"))
	});
})