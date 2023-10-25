const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeSUFNmG = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressWW3gJln = accounts[1]
		const addressAAbqEuZ = accounts[4]
		const addressuPLpzZ = await CourtFarming_RoomLPStakeSUFNmG.updateReward.call(addressWW3gJln, {from: accounts[5]});
		const uint256M3ivX8N = await CourtFarming_RoomLPStakeSUFNmG.incvRewardInfo.call({from: accounts[1]});
		const uint256LWsDoqD = await CourtFarming_RoomLPStakeSUFNmG.incvRewardInfo.call({from: accounts[3]});
		const addressTH3Vz1o = await CourtFarming_RoomLPStakeSUFNmG.setCourtStake.call(addressAAbqEuZ, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeSUFNmG.setCourtStake.call(addressAAbqEuZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKWckvL1 = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uint256eMdnXJ3 = await CourtFarming_RoomLPStakeKWckvL1.getCurrentTime.call({from: accounts[1]});
		const uint256VOLxQYJ = await CourtFarming_RoomLPStakeKWckvL1.totalStaked.call({from: accounts[3]});

		assert.equal(uint256VOLxQYJ, BigInt("0"))
		assert.equal(uint256eMdnXJ3, BigInt("1630200905"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeLnXtZpn = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAhCob5 = accounts[0]
		const uintGRUxt9H = BigInt("660")
		const addressHyUNSBF = accounts[2]
		const addresshQXqN3h = "0x0000000000000000000000000000000000000001"
		const uintV04P8Q = BigInt("806")
		const uintp3OsL2w = BigInt("183")
		const uintaG6CvJb = BigInt("1546")
		const uint256OnQoY9h = await CourtFarming_RoomLPStakeLnXtZpn.balanceOf.call(addressAhCob5, {from: accounts[5]});
		const boollff4mx = await CourtFarming_RoomLPStakeLnXtZpn.stakeIncvRewards.call(uintGRUxt9H, {from: accounts[4]});
		const addresssW44Uv = await CourtFarming_RoomLPStakeLnXtZpn.setCourtStake.call(addressHyUNSBF, {from: accounts[0]});
		const uint256rbJvZil = await CourtFarming_RoomLPStakeLnXtZpn.rewards.call(addresshQXqN3h, {from: accounts[1]});
		await CourtFarming_RoomLPStakeLnXtZpn.changeStakeParameters.call(uintaG6CvJb, uintp3OsL2w, uintV04P8Q, {from: accounts[4]});
		const uint256nbkpsvj = await CourtFarming_RoomLPStakeLnXtZpn.getCurrentTime.call({from: accounts[5]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakespAP4W = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressj7Hagei = accounts[3]
		const addressvspLkzS = "0x0000000000000000000000000000000000000001"
		const addressJ5L8NhT = "0x0000000000000000000000000000000000000001"
		const uint256CuyYmTJ = await CourtFarming_RoomLPStakespAP4W.incvRewardInfo.call({from: accounts[3]});
		const addresszbNFeUq = await CourtFarming_RoomLPStakespAP4W.getBeneficiaryInfo.call(addressj7Hagei, {from: accounts[2]});
		const uint256JJk3VE = await CourtFarming_RoomLPStakespAP4W.balanceOf.call(addressvspLkzS, {from: accounts[3]});
		const uint256acXSvJ8 = await CourtFarming_RoomLPStakespAP4W.balanceOf.call(addressJ5L8NhT, {from: accounts[5]});
		const uint256lvm6r4J = await CourtFarming_RoomLPStakespAP4W.lastUpdateBlock.call({from: accounts[1]});

		assert.equal(uint256JJk3VE, BigInt("0"))
		assert.equal(uint256acXSvJ8, BigInt("0"))
		assert.equal(uint256lvm6r4J, BigInt("1587"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeM1h0BJq = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uint256wgbkSB = await CourtFarming_RoomLPStakeM1h0BJq.totalStaked.call({from: accounts[0]});
		const uint256gR2GPFj = await CourtFarming_RoomLPStakeM1h0BJq.lastUpdateBlock.call({from: accounts[1]});
		const uint256lWyzYg = await CourtFarming_RoomLPStakeM1h0BJq.incvRewardInfo.call({from: accounts[1]});
		const uint256soMHTjv = await CourtFarming_RoomLPStakeM1h0BJq.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256gR2GPFj, BigInt("1587"))
		assert.equal(uint256soMHTjv, BigInt("0"))
		assert.equal(uint256wgbkSB, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeWNb8ZQg = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressQ3N4gXS = accounts[4]
		const uintKBmxOUG = BigInt("1890")
		const uint6TGzNz = BigInt("1895")
		const uintj4ZI09W = BigInt("1536")
		const uintFvt7R02 = BigInt("955")
		const uint256wB9mvPP = await CourtFarming_RoomLPStakeWNb8ZQg.rewards.call(addressQ3N4gXS, {from: accounts[3]});
		const uint256OulPb1D = await CourtFarming_RoomLPStakeWNb8ZQg.incvRewardClaim.call({from: accounts[4]});
		await CourtFarming_RoomLPStakeWNb8ZQg.changeStakeParameters.call(uintj4ZI09W, uint6TGzNz, uintKBmxOUG, {from: accounts[2]});
		const uint256XMDAdV = await CourtFarming_RoomLPStakeWNb8ZQg.stake.call(uintFvt7R02, {from: accounts[1]});

		assert.equal(uint256OulPb1D, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeWNb8ZQg.changeStakeParameters.call(uintj4ZI09W, uint6TGzNz, uintKBmxOUG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeU7uQ2E = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintwkZWZqT = BigInt("469")
		const uint256xsI3Ziq = await CourtFarming_RoomLPStakeU7uQ2E.stake.call(uintwkZWZqT, {from: accounts[2]});
		const uint256gb6m8a1 = await CourtFarming_RoomLPStakeU7uQ2E.blockNumber.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeU7uQ2E.stake.call(uintwkZWZqT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKl0IMYw = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintITLGWI8 = BigInt("276")
		const uintSPL1pCf = BigInt("445")
		const uintfgM2wYR = BigInt("1970")
		const addresst0R4Hjy = accounts[0]
		const uint256YCEVvGj = await CourtFarming_RoomLPStakeKl0IMYw.getCurrentTime.call({from: accounts[2]});
		const uint256KMcWhEH = await CourtFarming_RoomLPStakeKl0IMYw.getCurrentTime.call({from: accounts[3]});
		await CourtFarming_RoomLPStakeKl0IMYw.changeStakeParameters.call(uintfgM2wYR, uintSPL1pCf, uintITLGWI8, {from: accounts[2]});
		const addressjjxKZVH = await CourtFarming_RoomLPStakeKl0IMYw.setCourtStake.call(addresst0R4Hjy, {from: accounts[2]});
		const uint256U58Ek9I = await CourtFarming_RoomLPStakeKl0IMYw.blockNumber.call({from: accounts[1]});

		assert.equal(uint256KMcWhEH, BigInt("1630200909"))
		assert.equal(uint256YCEVvGj, BigInt("1630200909"))
		await expect(CourtFarming_RoomLPStakeKl0IMYw.changeStakeParameters.call(uintfgM2wYR, uintSPL1pCf, uintITLGWI8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKl0IMYw = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolxD0mxwN = true
		const uintPSOgXwb = BigInt("1654")
		const uintvKRf88i = BigInt("276")
		const uintB9iNo7 = BigInt("445")
		const uintV42FN8a = BigInt("1970")
		const addressDUbdqWM = accounts[1]
		const uint256YCEVvGj = await CourtFarming_RoomLPStakeKl0IMYw.getCurrentTime.call({from: accounts[2]});
		const uint256Dw9Z9DU = await CourtFarming_RoomLPStakeKl0IMYw.unstake.call(uintPSOgXwb, boolxD0mxwN, {from: accounts[4]});
		const uint256KMcWhEH = await CourtFarming_RoomLPStakeKl0IMYw.getCurrentTime.call({from: accounts[3]});
		await CourtFarming_RoomLPStakeKl0IMYw.changeStakeParameters.call(uintV42FN8a, uintB9iNo7, uintvKRf88i, {from: accounts[2]});
		const addressjjxKZVH = await CourtFarming_RoomLPStakeKl0IMYw.setCourtStake.call(addressDUbdqWM, {from: accounts[2]});
		const uint256U58Ek9I = await CourtFarming_RoomLPStakeKl0IMYw.blockNumber.call({from: accounts[1]});

		assert.equal(uint256YCEVvGj, BigInt("1630200903"))
		await expect(CourtFarming_RoomLPStakeKl0IMYw.unstake.call(uintPSOgXwb, boolxD0mxwN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakebhURVXB = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintBHS1ckg = BigInt("574")
		const boolqOVQGuT = false
		const uintMgedjtp = BigInt("194")
		const addressxsZ0H20 = accounts[5]
		const uint256ZuXs814 = await CourtFarming_RoomLPStakebhURVXB.expectedRewardsToday.call(uintBHS1ckg, {from: accounts[1]});
		const uint256XqO81H6 = await CourtFarming_RoomLPStakebhURVXB.getCurrentTime.call({from: accounts[4]});
		const uint256K5lCwp = await CourtFarming_RoomLPStakebhURVXB.unstake.call(uintMgedjtp, boolqOVQGuT, {from: accounts[0]});
		const addresszc9ZxMZ = await CourtFarming_RoomLPStakebhURVXB.updateReward.call(addressxsZ0H20, {from: accounts[2]});

		assert.equal(uint256XqO81H6, BigInt("1630200899"))
		await expect(CourtFarming_RoomLPStakebhURVXB.unstake.call(uintMgedjtp, boolqOVQGuT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakespAP4W = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressg40j4i = accounts[3]
		const addressfj1xys = "0x0000000000000000000000000000000000000001"
		const addressdZXsD1I = "0x0000000000000000000000000000000000000001"
		const uintpLncXQn = BigInt("640")
		const uintSeO85Dz = BigInt("886")
		const uintk1xIFi = BigInt("334")
		const uintuvsr7Zb = BigInt("588")
		const uint256CuyYmTJ = await CourtFarming_RoomLPStakespAP4W.incvRewardInfo.call({from: accounts[3]});
		const addresszbNFeUq = await CourtFarming_RoomLPStakespAP4W.getBeneficiaryInfo.call(addressg40j4i, {from: accounts[2]});
		const uint256JJk3VE = await CourtFarming_RoomLPStakespAP4W.balanceOf.call(addressfj1xys, {from: accounts[3]});
		const uint256acXSvJ8 = await CourtFarming_RoomLPStakespAP4W.balanceOf.call(addressdZXsD1I, {from: accounts[5]});
		const boolk8MC1C2 = await CourtFarming_RoomLPStakespAP4W.stakeIncvRewards.call(uintpLncXQn, {from: accounts[4]});
		await CourtFarming_RoomLPStakespAP4W.changeStakeParameters.call(uintuvsr7Zb, uintk1xIFi, uintSeO85Dz, {from: accounts[2]});
		const uint256lvm6r4J = await CourtFarming_RoomLPStakespAP4W.lastUpdateBlock.call({from: accounts[1]});

		assert.equal(boolk8MC1C2, false)
		assert.equal(uint256JJk3VE, BigInt("0"))
		assert.equal(uint256acXSvJ8, BigInt("0"))
		await expect(CourtFarming_RoomLPStakespAP4W.changeStakeParameters.call(uintuvsr7Zb, uintk1xIFi, uintSeO85Dz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakespAP4W = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintSpXgQXB = BigInt("0")
		const addressVMIQaCe = accounts[2]
		const addressJtLxto = accounts[2]
		const addresssplzIPy = accounts[1]
		const uintw37jnz6 = BigInt("84")
		const uint256gB1mWEe = await CourtFarming_RoomLPStakespAP4W.expectedRewardsToday.call(uintSpXgQXB, {from: accounts[5]});
		const uint256Bnl9P0j = await CourtFarming_RoomLPStakespAP4W.rewards.call(addressVMIQaCe, {from: accounts[2]});
		const uint256w4yLV5k = await CourtFarming_RoomLPStakespAP4W.rewards.call(addressJtLxto, {from: accounts[4]});
		const uint256SRi2z9q = await CourtFarming_RoomLPStakespAP4W.lastUpdateBlock.call({from: accounts[1]});
		const addressASdMkTa = await CourtFarming_RoomLPStakespAP4W.setCourtStake.call(addresssplzIPy, {from: accounts[3]});
		const boolvpkp5Fk = await CourtFarming_RoomLPStakespAP4W.stakeIncvRewards.call(uintw37jnz6, {from: accounts[2]});

		await expect(CourtFarming_RoomLPStakespAP4W.expectedRewardsToday.call(uintSpXgQXB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakebhURVXB = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressWoEAa0t = accounts[0]
		const boolqOVQGuT = true
		const uintI9ghVfT = BigInt("0")
		const uintxne680J = BigInt("1630")
		const addresszPB7wpw = await CourtFarming_RoomLPStakebhURVXB.getBeneficiaryInfo.call(addressWoEAa0t, {from: accounts[2]});
		const uint256K5lCwp = await CourtFarming_RoomLPStakebhURVXB.unstake.call(uintI9ghVfT, boolqOVQGuT, {from: accounts[0]});
		const uint256LLoZH0d = await CourtFarming_RoomLPStakebhURVXB.stake.call(uintxne680J, {from: accounts[0]});

		await expect(CourtFarming_RoomLPStakebhURVXB.stake.call(uintxne680J, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelvTs3sR = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressOptRGD4 = accounts[2]
		const uintKdF5T2I = BigInt("771")
		const uintlRdt9jF = BigInt("0")
		const addressaMhHWjd = await CourtFarming_RoomLPStakelvTs3sR.getBeneficiaryInfo.call(addressOptRGD4, {from: accounts[2]});
		const boolZCMAqEy = await CourtFarming_RoomLPStakelvTs3sR.stakeIncvRewards.call(uintKdF5T2I, {from: accounts[0]});
		const boolr7QE410 = await CourtFarming_RoomLPStakelvTs3sR.stakeIncvRewards.call(uintlRdt9jF, {from: accounts[3]});

		assert.equal(boolZCMAqEy, false)
		assert.equal(boolr7QE410, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelvTs3sR = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintSpgPRqJ = BigInt("0")
		const uint256oJWqdrT = await CourtFarming_RoomLPStakelvTs3sR.stake.call(uintSpgPRqJ, {from: accounts[4]});
	});
})