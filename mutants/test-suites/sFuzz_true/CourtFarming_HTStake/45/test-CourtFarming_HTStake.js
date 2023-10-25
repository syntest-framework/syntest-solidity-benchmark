const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeUPmsU88 = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressCimBBsh = accounts[2]
		const uint7YqvOQ = BigInt("1624")
		const boolWSCOHWW = true
		const uintFmc5Umx = BigInt("652")
//		const addressBujV3E6 = await CourtFarming_HTStakeUPmsU88.setCourtStake.call(addressCimBBsh, {from: accounts[5]});
//		const uint256V8g1b1C = await CourtFarming_HTStakeUPmsU88.incvRewardInfo.call({from: accounts[0]});
//		const uint256cIZbFxb = await CourtFarming_HTStakeUPmsU88.lastUpdateBlock.call({from: accounts[1]});
//		const uint256d1CWAFA = await CourtFarming_HTStakeUPmsU88.stake.call(uint7YqvOQ, {from: accounts[3]});
//		const uint256uS14Xv8 = await CourtFarming_HTStakeUPmsU88.unstake.call(uintFmc5Umx, boolWSCOHWW, {from: accounts[4]});

		await expect(CourtFarming_HTStakeUPmsU88.setCourtStake.call(addressCimBBsh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeoOR7zy = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintZYLBy6j = BigInt("1144")
		const uintB75yT3z = BigInt("391")
		const uinth7mn5d = BigInt("1672")
		const boolgdcRVd9 = false
		const uintKCL1JnD = BigInt("1406")
		const uinteGi1wZ2 = BigInt("283")
		const uintXKJts1 = BigInt("1777")
		const uintTkuQms = BigInt("897")
		const uints0luN2y = BigInt("948")
		const uint256Vu6D5bx = await CourtFarming_HTStakeoOR7zy.blockNumber.call({from: accounts[3]});
//		const uint256QfgCk7E = await CourtFarming_HTStakeoOR7zy._stakeParametrsCalculation.call(uinth7mn5d, uintB75yT3z, uintZYLBy6j, {from: accounts[1]});
//		const uint256lENEQMC = await CourtFarming_HTStakeoOR7zy.unstake.call(uintKCL1JnD, boolgdcRVd9, {from: accounts[3]});
//		const uint256yH1gq6k = await CourtFarming_HTStakeoOR7zy.totalStaked.call({from: accounts[3]});
//		const uint256aXXFCeL = await CourtFarming_HTStakeoOR7zy.stake.call(uinteGi1wZ2, {from: accounts[2]});
//		await CourtFarming_HTStakeoOR7zy.changeStakeParameters.call(uints0luN2y, uintTkuQms, uintXKJts1, {from: accounts[0]});

		assert.equal(uint256Vu6D5bx, BigInt("1815"))
		await expect(CourtFarming_HTStakeoOR7zy._stakeParametrsCalculation.call(uinth7mn5d, uintB75yT3z, uintZYLBy6j, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakem2OyKbX = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressBJYZveP = accounts[4]
		const addressMEqCITT = accounts[5]
		const addressyYMN3xE = await CourtFarming_HTStakem2OyKbX.updateReward.call(addressBJYZveP, {from: accounts[2]});
		const uint256act8Enw = await CourtFarming_HTStakem2OyKbX.getCurrentTime.call({from: accounts[0]});
		const uint256CghhDHr = await CourtFarming_HTStakem2OyKbX.balanceOf.call(addressMEqCITT, {from: accounts[0]});
		const uint256G2kwna = await CourtFarming_HTStakem2OyKbX.getCurrentTime.call({from: accounts[0]});

		assert.equal(uint256CghhDHr, BigInt("0"))
		assert.equal(uint256G2kwna, BigInt("1630201547"))
		assert.equal(uint256act8Enw, BigInt("1630201547"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeujQlsz9 = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintgT843ef = BigInt("1672")
		const uintitefKH = BigInt("157")
		const uintYpE4RaD = BigInt("1709")
		const uint2564OUd7M = await CourtFarming_HTStakeujQlsz9.getCurrentTime.call({from: accounts[0]});
		const uint256wLSlQTr = await CourtFarming_HTStakeujQlsz9.incvRewardClaim.call({from: accounts[1]});
		const uint256Fkf2hLG = await CourtFarming_HTStakeujQlsz9.incvRewardClaim.call({from: accounts[1]});
//		await CourtFarming_HTStakeujQlsz9.changeStakeParameters.call(uintYpE4RaD, uintitefKH, uintgT843ef, {from: accounts[0]});
//		const uint256jkyiR3r = await CourtFarming_HTStakeujQlsz9.getCurrentTime.call({from: accounts[0]});

		assert.equal(uint2564OUd7M, BigInt("1630201546"))
		assert.equal(uint256Fkf2hLG, BigInt("0"))
		assert.equal(uint256wLSlQTr, BigInt("0"))
		await expect(CourtFarming_HTStakeujQlsz9.changeStakeParameters.call(uintYpE4RaD, uintitefKH, uintgT843ef, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakepzraIOq = await CourtFarming_HTStake.new({from: accounts[4]});
		const boolxMbFHVB = true
		const uintyB4moQE = BigInt("243")
		const addresse5TAD3Q = accounts[0]
		const boolBxBexg5 = false
		const uintFpWEzy5 = BigInt("884")
		const uintY2qRYc = BigInt("175")
		const boolwi2EzBG = false
		const uintKWxdpw = BigInt("849")
//		const uint256wt6HPek = await CourtFarming_HTStakepzraIOq.unstake.call(uintyB4moQE, boolxMbFHVB, {from: accounts[4]});
//		const uint256J1RI0Co = await CourtFarming_HTStakepzraIOq.balanceOf.call(addresse5TAD3Q, {from: accounts[1]});
//		const uint256V52X88r = await CourtFarming_HTStakepzraIOq.unstake.call(uintFpWEzy5, boolBxBexg5, {from: accounts[5]});
//		const uint256hlc7kHJ = await CourtFarming_HTStakepzraIOq.expectedRewardsToday.call(uintY2qRYc, {from: accounts[4]});
//		const uint256L2H4Pyz = await CourtFarming_HTStakepzraIOq.unstake.call(uintKWxdpw, boolwi2EzBG, {from: accounts[1]});
//		const uint256t0fi18m = await CourtFarming_HTStakepzraIOq.incvRewardClaim.call({from: accounts[3]});

		await expect(CourtFarming_HTStakepzraIOq.unstake.call(uintyB4moQE, boolxMbFHVB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyU8KuSr = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintdhptRyw = BigInt("770")
		const uintHsXkWmv = BigInt("75")
		const uintIqb6NuV = BigInt("1942")
		const addressy2ElfJ = accounts[3]
		const uint256TRYqKpV = await CourtFarming_HTStakeyU8KuSr.incvRewardInfo.call({from: accounts[2]});
		const uint256V4dscpD = await CourtFarming_HTStakeyU8KuSr.blockNumber.call({from: accounts[0]});
		const uint256TxPiAEB = await CourtFarming_HTStakeyU8KuSr.getCurrentTime.call({from: accounts[5]});
//		await CourtFarming_HTStakeyU8KuSr.changeStakeParameters.call(uintIqb6NuV, uintHsXkWmv, uintdhptRyw, {from: accounts[1]});
//		const uint2569D9AUt = await CourtFarming_HTStakeyU8KuSr.rewards.call(addressy2ElfJ, {from: accounts[1]});

		assert.equal(uint256TxPiAEB, BigInt("1630201541"))
		assert.equal(uint256V4dscpD, BigInt("1815"))
		await expect(CourtFarming_HTStakeyU8KuSr.changeStakeParameters.call(uintIqb6NuV, uintHsXkWmv, uintdhptRyw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeO2PHEB2 = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressaLkz7d7 = accounts[3]
		const addressFWioOVs = accounts[4]
		const uint256ju2SxdM = await CourtFarming_HTStakeO2PHEB2.lastUpdateBlock.call({from: accounts[1]});
//		const addressvA1uU6 = await CourtFarming_HTStakeO2PHEB2.setCourtStake.call(addressaLkz7d7, {from: accounts[4]});
//		const uint256WXWKtZA = await CourtFarming_HTStakeO2PHEB2.rewards.call(addressFWioOVs, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256pjNxxr4 = await CourtFarming_HTStakeO2PHEB2.blockNumber.call({from: accounts[5]});
//		const uint256CFWxKsC = await CourtFarming_HTStakeO2PHEB2.getCurrentTime.call({from: accounts[5]});

		assert.equal(uint256ju2SxdM, BigInt("1815"))
		await expect(CourtFarming_HTStakeO2PHEB2.setCourtStake.call(addressaLkz7d7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekuYyP54 = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintB0d2FM = BigInt("292")
		const uintlFmJ7X1 = BigInt("1912")
		const uintR08jlgV = BigInt("204")
		const uintmh8znyS = BigInt("1367")
		const uint256dJ0yVCY = await CourtFarming_HTStakekuYyP54.expectedRewardsToday.call(uintB0d2FM, {from: accounts[3]});
		const uint256PscD9N6 = await CourtFarming_HTStakekuYyP54.incvRewardInfo.call({from: accounts[2]});
//		const uint256cFS6n2q = await CourtFarming_HTStakekuYyP54.stake.call(uintlFmJ7X1, {from: accounts[0]});
//		const uint256psKc5M3 = await CourtFarming_HTStakekuYyP54.stake.call(uintR08jlgV, {from: accounts[3]});
//		const bool182HFB = await CourtFarming_HTStakekuYyP54.stakeIncvRewards.call(uintmh8znyS, {from: accounts[4]});

		await expect(CourtFarming_HTStakekuYyP54.stake.call(uintlFmJ7X1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeDEwI9A9 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintrwpsV4x = BigInt("1667")
		const boolz6sv7Dm = await CourtFarming_HTStakeDEwI9A9.stakeIncvRewards.call(uintrwpsV4x, {from: accounts[3]});
		const uint2561pjG9v = await CourtFarming_HTStakeDEwI9A9.incvRewardClaim.call({from: accounts[0]});

		assert.equal(boolz6sv7Dm, false)
		assert.equal(uint2561pjG9v, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeujQlsz9 = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintwNZMaRI = BigInt("1672")
		const uintDMI8Od6 = BigInt("157")
		const uinteAtJYKc = BigInt("1709")
		const addressaRnMneE = accounts[2]
		const uint2564OUd7M = await CourtFarming_HTStakeujQlsz9.getCurrentTime.call({from: accounts[0]});
		const uint256LaCS3Lx = await CourtFarming_HTStakeujQlsz9.totalStaked.call({from: accounts[2]});
		const uint256wLSlQTr = await CourtFarming_HTStakeujQlsz9.incvRewardClaim.call({from: accounts[1]});
		const uint256Fkf2hLG = await CourtFarming_HTStakeujQlsz9.incvRewardClaim.call({from: accounts[1]});
//		await CourtFarming_HTStakeujQlsz9.changeStakeParameters.call(uinteAtJYKc, uintDMI8Od6, uintwNZMaRI, {from: accounts[0]});
//		const uint256jkyiR3r = await CourtFarming_HTStakeujQlsz9.getCurrentTime.call({from: accounts[0]});
//		const addressu8oxKvf = await CourtFarming_HTStakeujQlsz9.updateReward.call(addressaRnMneE, {from: accounts[3]});

		assert.equal(uint2564OUd7M, BigInt("1630201539"))
		assert.equal(uint256Fkf2hLG, BigInt("0"))
		assert.equal(uint256LaCS3Lx, BigInt("0"))
		assert.equal(uint256wLSlQTr, BigInt("0"))
		await expect(CourtFarming_HTStakeujQlsz9.changeStakeParameters.call(uinteAtJYKc, uintDMI8Od6, uintwNZMaRI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeD7JLmCZ = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintXoYEa4U = BigInt("344")
		const addressXyGniNj = accounts[4]
		const boolMlBvghl = true
		const uinto2HLrYk = BigInt("1966")
		const boolaTTVnHC = await CourtFarming_HTStakeD7JLmCZ.stakeIncvRewards.call(uintXoYEa4U, {from: accounts[2]});
		const addressJMlEkLD = await CourtFarming_HTStakeD7JLmCZ.getBeneficiaryInfo.call(addressXyGniNj, {from: accounts[3]});
//		const uint256BkPbyEN = await CourtFarming_HTStakeD7JLmCZ.unstake.call(uinto2HLrYk, boolMlBvghl, {from: accounts[0]});
//		const uint256NQUdhR8 = await CourtFarming_HTStakeD7JLmCZ.lastUpdateBlock.call({from: accounts[3]});
//		const uint256Z4ob6AN = await CourtFarming_HTStakeD7JLmCZ.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256dgXtbl = await CourtFarming_HTStakeD7JLmCZ.incvRewardInfo.call({from: accounts[5]});

		assert.equal(boolaTTVnHC, false)
		await expect(CourtFarming_HTStakeD7JLmCZ.unstake.call(uinto2HLrYk, boolMlBvghl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake9zmRGF = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressaLYP1qa = accounts[3]
		const boolJZlLKC2 = true
		const uintPUfXy9 = BigInt("1113")
//		const addressu0rGIS = await CourtFarming_HTStake9zmRGF.setCourtStake.call(addressaLYP1qa, {from: accounts[2]});
//		const uint256oIgaxqs = await CourtFarming_HTStake9zmRGF.unstake.call(uintPUfXy9, boolJZlLKC2, {from: accounts[3]});

		await expect(CourtFarming_HTStake9zmRGF.setCourtStake.call(addressaLYP1qa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakepzraIOq = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintcTzqGF = BigInt("1266")
		const uintgP7r7kt = BigInt("0")
		const uintfTBJvkC = BigInt("17")
		const uintPAirLF2 = BigInt("1166")
		const uintwawraEZ = BigInt("327")
		const uintyfnppsw = BigInt("911")
		const addressu5teqxS = accounts[2]
		const boolxMbFHVB = true
		const uintyOeXMnx = BigInt("243")
		const uint256AJD3mSq = await CourtFarming_HTStakepzraIOq.expectedRewardsToday.call(uintcTzqGF, {from: accounts[1]});
		const uint256P4L3KcY = await CourtFarming_HTStakepzraIOq.stake.call(uintgP7r7kt, {from: accounts[0]});
		const boolOpwgfDh = await CourtFarming_HTStakepzraIOq.stakeIncvRewards.call(uintfTBJvkC, {from: accounts[0]});
//		await CourtFarming_HTStakepzraIOq.changeStakeParameters.call(uintyfnppsw, uintwawraEZ, uintPAirLF2, {from: accounts[5]});
//		const addresszS6JIsn = await CourtFarming_HTStakepzraIOq.updateReward.call(addressu5teqxS, {from: accounts[4]});
//		const uint256W2JJkNT = await CourtFarming_HTStakepzraIOq.incvRewardClaim.call({from: accounts[3]});
//		const uint256wt6HPek = await CourtFarming_HTStakepzraIOq.unstake.call(uintyOeXMnx, boolxMbFHVB, {from: accounts[4]});
//		const uint256t0fi18m = await CourtFarming_HTStakepzraIOq.incvRewardClaim.call({from: accounts[3]});

		assert.equal(boolOpwgfDh, false)
		await expect(CourtFarming_HTStakepzraIOq.changeStakeParameters.call(uintyfnppsw, uintwawraEZ, uintPAirLF2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTjAnqUC = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256SkOr6m = await CourtFarming_HTStakeTjAnqUC.blockNumber.call({from: accounts[1]});
		const uint256D4Uf3l = await CourtFarming_HTStakeTjAnqUC.lastUpdateBlock.call({from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeU31sTmd = await CourtFarming_HTStake.new({from: accounts[0]});
		const boolga1nwkN = false
		const uintaFafRj9 = BigInt("0")
		const uint256dLlh2u4 = await CourtFarming_HTStakeU31sTmd.unstake.call(uintaFafRj9, boolga1nwkN, {from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakepzraIOq = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintTA3SZFj = BigInt("0")
		const uintoAcLGQz = BigInt("1420")
		const boolOpwgfDh = await CourtFarming_HTStakepzraIOq.stakeIncvRewards.call(uintTA3SZFj, {from: accounts[0]});
		const boole7mV5kT = await CourtFarming_HTStakepzraIOq.stakeIncvRewards.call(uintoAcLGQz, {from: accounts[3]});

		assert.equal(boolOpwgfDh, false)
		assert.equal(boole7mV5kT, false)
	});
})