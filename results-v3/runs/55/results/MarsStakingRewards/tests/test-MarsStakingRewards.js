const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const address4tk9va = accounts[0]
		const addressgI0kwJI = accounts[2]
		const addresseeHh13K = accounts[3]
		const MarsStakingRewardsODCZnzj = await MarsStakingRewards.new(address4tk9va, addressgI0kwJI, addresseeHh13K, {from: accounts[5]});
		const addressGf7clz = accounts[0]
		const addressKKgBmf1 = await MarsStakingRewardsODCZnzj.setRewardsDistribution.call(addressGf7clz, {from: accounts[5]});
		await MarsStakingRewardsODCZnzj.onlyOwner.call({from: accounts[3]});
		await MarsStakingRewardsODCZnzj.getReward.call({from: accounts[1]});

		await expect(MarsStakingRewardsODCZnzj.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLoNUuW9 = "0x0000000000000000000000000000000000000001"
		const addressqY2lB2t = accounts[3]
		const addressC52NtwV = accounts[5]
		const MarsStakingRewardsqiKd1LS = await MarsStakingRewards.new(addressLoNUuW9, addressqY2lB2t, addressC52NtwV, {from: "0x0000000000000000000000000000000000000001"});
		const addressN8XubI = accounts[4]
		const uintPVa55hG = BigInt("1823")
		await MarsStakingRewardsqiKd1LS.renounceOwnership.call({from: accounts[1]});
		const addressIA8rlC = await MarsStakingRewardsqiKd1LS.updateReward.call(addressN8XubI, {from: accounts[0]});
		const uint256wZpBGZI = await MarsStakingRewardsqiKd1LS.stake.call(uintPVa55hG, {from: accounts[5]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressdzPz1Fk = accounts[5]
		const addressSgsdCLZ = accounts[3]
		const addressCVOiyXv = accounts[2]
		const MarsStakingRewardspbonYVb = await MarsStakingRewards.new(addressdzPz1Fk, addressSgsdCLZ, addressCVOiyXv, {from: accounts[0]});
		const uint256MsyrFM = await MarsStakingRewardspbonYVb.rewardPerToken.call({from: accounts[1]});
		const uint256GU1DhS0 = await MarsStakingRewardspbonYVb.rewardPerToken.call({from: accounts[2]});
		const uint256FWms9uY = await MarsStakingRewardspbonYVb.rewardPerToken.call({from: accounts[3]});
		await MarsStakingRewardspbonYVb.renounceOwnership.call({from: accounts[1]});

		assert.equal(uint256FWms9uY, BigInt("0"))
		assert.equal(uint256GU1DhS0, BigInt("0"))
		assert.equal(uint256MsyrFM, BigInt("0"))
		await expect(MarsStakingRewardspbonYVb.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressnPMSmM5 = accounts[0]
		const addressSQ4B6ga = accounts[3]
		const addressGBUqdw = accounts[5]
		const MarsStakingRewardsoXp7Wmk = await MarsStakingRewards.new(addressnPMSmM5, addressSQ4B6ga, addressGBUqdw, {from: accounts[3]});
		const uintNJlxFt = BigInt("81")
		const addressztLaUyQ = accounts[2]
		const addressvlt0fl = accounts[0]
		const uint256VYXiR7v = await MarsStakingRewardsoXp7Wmk.getRewardForDuration.call({from: accounts[5]});
		const uint256hUG6zWb = await MarsStakingRewardsoXp7Wmk.withdraw.call(uintNJlxFt, {from: accounts[2]});
		const addressA9cRCn3 = await MarsStakingRewardsoXp7Wmk.transferOwnership.call(addressztLaUyQ, {from: accounts[4]});
		const uint256yp3QQwt = await MarsStakingRewardsoXp7Wmk.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wKHy1d5 = await MarsStakingRewardsoXp7Wmk.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256OiLwHVs = await MarsStakingRewardsoXp7Wmk.balanceOf.call(addressvlt0fl, {from: accounts[0]});

		assert.equal(uint256VYXiR7v, BigInt("0"))
		await expect(MarsStakingRewardsoXp7Wmk.withdraw.call(uintNJlxFt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressqRUiMs = accounts[5]
		const addressnEUkTK = accounts[0]
		const addressbwVQbE4 = accounts[2]
		const MarsStakingRewardsCdS2pa = await MarsStakingRewards.new(addressqRUiMs, addressnEUkTK, addressbwVQbE4, {from: accounts[5]});
		const uintj3LMDN9 = BigInt("798")
		const uint256NmlJbhu = await MarsStakingRewardsCdS2pa.lastTimeRewardApplicable.call({from: accounts[4]});
		await MarsStakingRewardsCdS2pa.nonReentrant.call({from: accounts[0]});
		const uint256Rwdl4f = await MarsStakingRewardsCdS2pa.stake.call(uintj3LMDN9, {from: accounts[4]});

		assert.equal(uint256NmlJbhu, BigInt("0"))
		await expect(MarsStakingRewardsCdS2pa.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressy4ECejO = accounts[3]
		const addressunjqAhJ = accounts[5]
		const addressGo6yRa8 = accounts[0]
		const MarsStakingRewardsXK7KK5G = await MarsStakingRewards.new(addressy4ECejO, addressunjqAhJ, addressGo6yRa8, {from: accounts[4]});
		const uintAyQWwCf = BigInt("422")
		const addressOnZ8tp6 = accounts[2]
		const uinte8j95uA = BigInt("979")
		const uint256o7adrRx = await MarsStakingRewardsXK7KK5G.totalSupply.call({from: accounts[1]});
		const uint256XXGema = await MarsStakingRewardsXK7KK5G.totalSupply.call({from: accounts[0]});
		const uint256Zp7bOlq = await MarsStakingRewardsXK7KK5G.rewardPerToken.call({from: accounts[4]});
		const addressEufvMTB = await MarsStakingRewardsXK7KK5G.inCaseTokensGetStuck.call(addressOnZ8tp6, uintAyQWwCf, {from: accounts[1]});
		const uint256CLmjOZK = await MarsStakingRewardsXK7KK5G.stake.call(uinte8j95uA, {from: accounts[0]});

		assert.equal(uint256XXGema, BigInt("0"))
		assert.equal(uint256Zp7bOlq, BigInt("0"))
		assert.equal(uint256o7adrRx, BigInt("0"))
		await expect(MarsStakingRewardsXK7KK5G.inCaseTokensGetStuck.call(addressOnZ8tp6, uintAyQWwCf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressuKkPUOk = accounts[4]
		const addressUzUjeYp = accounts[5]
		const addressfQdgXHF = accounts[2]
		const MarsStakingRewardsAuAz5Zl = await MarsStakingRewards.new(addressuKkPUOk, addressUzUjeYp, addressfQdgXHF, {from: accounts[3]});
		const uintsfppQ68 = BigInt("1159")
		const uintVstcqQ4 = BigInt("1318")
		const addressmVg31W9 = "0x0000000000000000000000000000000000000001"
		const addressCDCaQm = "0x0000000000000000000000000000000000000001"
		const uint256bI1bYch = await MarsStakingRewardsAuAz5Zl.notifyRewardAmount.call(uintVstcqQ4, uintsfppQ68, {from: accounts[0]});
		const uint256rDBjKzs = await MarsStakingRewardsAuAz5Zl.earned.call(addressmVg31W9, {from: accounts[1]});
		const uint256ZKocezk = await MarsStakingRewardsAuAz5Zl.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const addressSGMRIwy = await MarsStakingRewardsAuAz5Zl.transferOwnership.call(addressCDCaQm, {from: accounts[5]});
		const boolterPY6p = await MarsStakingRewardsAuAz5Zl.isOwner.call({from: accounts[1]});

		await expect(MarsStakingRewardsAuAz5Zl.notifyRewardAmount.call(uintVstcqQ4, uintsfppQ68, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressTCUV2VZ = accounts[5]
		const addresspU392U = accounts[3]
		const addresskCnyMuW = accounts[2]
		const MarsStakingRewardspbonYVb = await MarsStakingRewards.new(addressTCUV2VZ, addresspU392U, addresskCnyMuW, {from: accounts[0]});
		const addresslpCZOtE = await MarsStakingRewardspbonYVb.owner.call({from: accounts[4]});
		const uint256MsyrFM = await MarsStakingRewardspbonYVb.rewardPerToken.call({from: accounts[1]});
		const uint256GU1DhS0 = await MarsStakingRewardspbonYVb.rewardPerToken.call({from: accounts[2]});
		await MarsStakingRewardspbonYVb.renounceOwnership.call({from: accounts[1]});

		assert.equal(addresslpCZOtE, 0x59A21cB45E3d256Eb8A63E5D678D4A7dA6bCDB9C)
		assert.equal(uint256GU1DhS0, BigInt("0"))
		assert.equal(uint256MsyrFM, BigInt("0"))
		await expect(MarsStakingRewardspbonYVb.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressGExnAu = accounts[4]
		const addressP1DmTGQ = accounts[1]
		const addressN8I7sS = accounts[1]
		const MarsStakingRewardsNIlx284 = await MarsStakingRewards.new(addressGExnAu, addressP1DmTGQ, addressN8I7sS, {from: accounts[3]});
		const addressEudLuX3 = accounts[3]
		const bytexOACXYv = "0x0f12010e011a18020b091b020411161d121f0a1a061d0901131810111c0d1510"
		const byteRyRDD78 = "0x0b180e1707140e1a151d111e081701021c1c020803161e0314170b18021b170f"
		const uintuysKs9t = BigInt("11")
		const uintp9RwRIU = BigInt("1080")
		const uintR2Grv8O = BigInt("1663")
		const uintlcbUzKI = BigInt("1068")
		const uintUcwiUNy = BigInt("1001")
		const uintNNOX28Z = BigInt("608")
		const uintcerM0mO = BigInt("322")
		const uint256rqawR47 = await MarsStakingRewardsNIlx284.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256jVhAKeQ = await MarsStakingRewardsNIlx284.balanceOf.call(addressEudLuX3, {from: accounts[2]});
		const uint256OJNmjRh = await MarsStakingRewardsNIlx284.stakeWithPermit.call(uintR2Grv8O, uintp9RwRIU, uintuysKs9t, byteRyRDD78, bytexOACXYv, {from: accounts[5]});
		const uint256HSaKAaT = await MarsStakingRewardsNIlx284.notifyRewardAmount.call(uintUcwiUNy, uintlcbUzKI, {from: accounts[0]});
		const uint256lH2tzcj = await MarsStakingRewardsNIlx284.notifyRewardAmount.call(uintcerM0mO, uintNNOX28Z, {from: accounts[2]});

		assert.equal(uint256jVhAKeQ, BigInt("0"))
		assert.equal(uint256rqawR47, BigInt("0"))
		await expect(MarsStakingRewardsNIlx284.stakeWithPermit.call(uintR2Grv8O, uintp9RwRIU, uintuysKs9t, byteRyRDD78, bytexOACXYv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressOsDHBUe = accounts[5]
		const addressnRUIIDF = accounts[3]
		const addressEXbIcsy = accounts[2]
		const MarsStakingRewardspbonYVb = await MarsStakingRewards.new(addressOsDHBUe, addressnRUIIDF, addressEXbIcsy, {from: accounts[0]});
		const uintIxfjEGt = BigInt("1030")
		await MarsStakingRewardspbonYVb.exit.call({from: accounts[2]});
		const uint256MsyrFM = await MarsStakingRewardspbonYVb.rewardPerToken.call({from: accounts[1]});
		await MarsStakingRewardspbonYVb.getReward.call({from: accounts[2]});
		const uint256DoDBFEd = await MarsStakingRewardspbonYVb.stake.call(uintIxfjEGt, {from: accounts[0]});
		await MarsStakingRewardspbonYVb.renounceOwnership.call({from: accounts[1]});

		await expect(MarsStakingRewardspbonYVb.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressyYz2zrd = accounts[2]
		const addressLn6M8ca = accounts[0]
		const addressaOoUrBk = accounts[3]
		const MarsStakingRewardszo5TH1 = await MarsStakingRewards.new(addressyYz2zrd, addressLn6M8ca, addressaOoUrBk, {from: accounts[2]});
		const addressTQEDFow = accounts[4]
		const addressFvXOCD = accounts[0]
		const addressnzwRKGq = accounts[2]
		const byteRDnVh2H = "0x070d09160a0f07191c1d0c01121a1b12121e0b0d1e081d0917080f0714021412"
		const byteDuU7Znz = "0x0f13030d0f17101113080e0a1f1e060f08180e0c0c0c0701050405201c0d1219"
		const uintyqhbHZb = BigInt("194")
		const uintYqEODyZ = BigInt("362")
		const uintMtrSeoD = BigInt("1847")
		const uint256z6QqKVs = await MarsStakingRewardszo5TH1.balanceOf.call(addressTQEDFow, {from: accounts[5]});
		await MarsStakingRewardszo5TH1.renounceOwnership.call({from: accounts[2]});
		const addresskW4Mlrg = await MarsStakingRewardszo5TH1.setRewardsDistribution.call(addressFvXOCD, {from: accounts[0]});
		const addressMRo4e8Q = await MarsStakingRewardszo5TH1.transferOwnership.call(addressnzwRKGq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256F5ply4l = await MarsStakingRewardszo5TH1.stakeWithPermit.call(uintMtrSeoD, uintYqEODyZ, uintyqhbHZb, byteDuU7Znz, byteRDnVh2H, {from: accounts[3]});

		assert.equal(uint256z6QqKVs, BigInt("0"))
		await expect(MarsStakingRewardszo5TH1.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresso1W5DNw = accounts[5]
		const addressKNtJaJ8 = accounts[3]
		const addresstR1IXSt = accounts[2]
		const MarsStakingRewardspbonYVb = await MarsStakingRewards.new(addresso1W5DNw, addressKNtJaJ8, addresstR1IXSt, {from: accounts[0]});
		const addressIj09n9V = accounts[4]
		const bytexATZBo8 = "0x1b12130a14031f0b041b170e040a0e060217061c0813170310150f04171e000b"
		const byteeGlKuj = "0x011f01151d0c1f071e0d191601150305101e060c171420171b021c0102170100"
		const uintLC8q7h = BigInt("38")
		const uintRaQ1UPJ = BigInt("471")
		const uintjuFDJOc = BigInt("441")
		const uint256mm30n0q = await MarsStakingRewardspbonYVb.earned.call(addressIj09n9V, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MsyrFM = await MarsStakingRewardspbonYVb.rewardPerToken.call({from: accounts[1]});
		const uint256d9QZ86U = await MarsStakingRewardspbonYVb.stakeWithPermit.call(uintjuFDJOc, uintRaQ1UPJ, uintLC8q7h, byteeGlKuj, bytexATZBo8, {from: accounts[3]});

		assert.equal(uint256MsyrFM, BigInt("0"))
		assert.equal(uint256mm30n0q, BigInt("0"))
		await expect(MarsStakingRewardspbonYVb.stakeWithPermit.call(uintjuFDJOc, uintRaQ1UPJ, uintLC8q7h, byteeGlKuj, bytexATZBo8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLPKDF5a = accounts[0]
		const addressHs3St7R = accounts[3]
		const addressqaJd5r9 = accounts[5]
		const MarsStakingRewardsoXp7Wmk = await MarsStakingRewards.new(addressLPKDF5a, addressHs3St7R, addressqaJd5r9, {from: accounts[3]});
		const uintyL1cjp = BigInt("515")
		const uintIdMgpOl = BigInt("1309")
		const uintwOANWuL = BigInt("81")
		const addressBdaiTEs = accounts[4]
		const uint256OqTFZi5 = await MarsStakingRewardsoXp7Wmk.notifyRewardAmount.call(uintIdMgpOl, uintyL1cjp, {from: accounts[0]});
		const uint256OxRp8Q5 = await MarsStakingRewardsoXp7Wmk.rewardPerToken.call({from: accounts[4]});
		const uint256VYXiR7v = await MarsStakingRewardsoXp7Wmk.getRewardForDuration.call({from: accounts[5]});
		const uint256hUG6zWb = await MarsStakingRewardsoXp7Wmk.withdraw.call(uintwOANWuL, {from: accounts[2]});
		const uint256f99Hixv = await MarsStakingRewardsoXp7Wmk.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const addressA9cRCn3 = await MarsStakingRewardsoXp7Wmk.transferOwnership.call(addressBdaiTEs, {from: accounts[4]});
		const uint256yp3QQwt = await MarsStakingRewardsoXp7Wmk.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsoXp7Wmk.notifyRewardAmount.call(uintIdMgpOl, uintyL1cjp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressyzYLq19 = accounts[0]
		const addresslkJppPR = accounts[3]
		const addresskKYRSB = accounts[5]
		const MarsStakingRewardsoXp7Wmk = await MarsStakingRewards.new(addressyzYLq19, addresslkJppPR, addresskKYRSB, {from: accounts[3]});
		const addresstweApsV = accounts[4]
		const uint256VYXiR7v = await MarsStakingRewardsoXp7Wmk.getRewardForDuration.call({from: accounts[5]});
		const uint256cOHUdG9 = await MarsStakingRewardsoXp7Wmk.lastTimeRewardApplicable.call({from: accounts[2]});
		const addresseCGPmWW = await MarsStakingRewardsoXp7Wmk.transferOwnership.call(addresstweApsV, {from: accounts[3]});
		const uint256yp3QQwt = await MarsStakingRewardsoXp7Wmk.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VYXiR7v, BigInt("0"))
		assert.equal(uint256cOHUdG9, BigInt("0"))
		assert.equal(uint256yp3QQwt, BigInt("0"))
	});
})