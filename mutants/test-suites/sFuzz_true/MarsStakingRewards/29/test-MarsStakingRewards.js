const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressOsrLXOf = accounts[1]
		const addressttY7Iyo = accounts[5]
		const addresskst4rLx = accounts[2]
		const MarsStakingRewardstlOFq3o = await MarsStakingRewards.new(addressOsrLXOf, addressttY7Iyo, addresskst4rLx, {from: accounts[2]});
		const addressWhEyWRS = accounts[2]
		const addressiOi64Aq = accounts[1]
		const addressm4oVAiF = accounts[0]
		const uintdWQTRh9 = BigInt("345")
		const addressdMBDSfF = accounts[3]
//		const addressLigAXhP = await MarsStakingRewardstlOFq3o.transferOwnership.call(addressWhEyWRS, {from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardstlOFq3o.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256e4Q4FMe = await MarsStakingRewardstlOFq3o.balanceOf.call(addressiOi64Aq, {from: accounts[0]});
//		const uint256cj7Csbd = await MarsStakingRewardstlOFq3o.balanceOf.call(addressm4oVAiF, {from: accounts[1]});
//		const addressisQUNWg = await MarsStakingRewardstlOFq3o.inCaseTokensGetStuck.call(addressdMBDSfF, uintdWQTRh9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardstlOFq3o.transferOwnership.call(addressWhEyWRS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressiHEIV6r = accounts[1]
		const addressfFRoqVL = accounts[3]
		const addressvucXMdc = accounts[4]
		const MarsStakingRewardsCdF6bxB = await MarsStakingRewards.new(addressiHEIV6r, addressfFRoqVL, addressvucXMdc, {from: accounts[2]});
		const uintDPeTxRu = BigInt("690")
		const uintqKymDHp = BigInt("1796")
		const uintJRlEY7W = BigInt("568")
		const addressaVIN704 = accounts[5]
		const uintfvYNPmg = BigInt("1113")
//		const uint256sl0bYFK = await MarsStakingRewardsCdF6bxB.notifyRewardAmount.call(uintqKymDHp, uintDPeTxRu, {from: accounts[3]});
//		const addresse27hZ2E = await MarsStakingRewardsCdF6bxB.inCaseTokensGetStuck.call(addressaVIN704, uintJRlEY7W, {from: accounts[1]});
//		const uint2561gsLFt = await MarsStakingRewardsCdF6bxB.totalSupply.call({from: accounts[0]});
//		const uint256jIBkpw = await MarsStakingRewardsCdF6bxB.stake.call(uintfvYNPmg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsCdF6bxB.notifyRewardAmount.call(uintqKymDHp, uintDPeTxRu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskAQG5pf = accounts[2]
		const addresspzgNDm8 = accounts[2]
		const addressJq7tcPU = accounts[2]
		const MarsStakingRewardsuhVzSdW = await MarsStakingRewards.new(addresskAQG5pf, addresspzgNDm8, addressJq7tcPU, {from: accounts[2]});
		const addresstwU4gKo = await MarsStakingRewardsuhVzSdW.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsuhVzSdW.renounceOwnership.call({from: accounts[2]});
//		const uint256Wb4PpVW = await MarsStakingRewardsuhVzSdW.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(addresstwU4gKo, 0x59eC3FbD7cDf44eC0E8BFB62Bfde3dcb0FB0e443)
		await expect(MarsStakingRewardsuhVzSdW.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresswKpccSB = accounts[1]
		const addressxqhhxSd = accounts[2]
		const addressd5DqxUE = accounts[4]
		const MarsStakingRewardsvmUeUVK = await MarsStakingRewards.new(addresswKpccSB, addressxqhhxSd, addressd5DqxUE, {from: accounts[1]});
		const addressTLCuWnf = accounts[1]
		const uint256z35g3s = await MarsStakingRewardsvmUeUVK.rewardPerToken.call({from: accounts[1]});
		const uint256zphIuNX = await MarsStakingRewardsvmUeUVK.balanceOf.call(addressTLCuWnf, {from: accounts[4]});

		assert.equal(uint256z35g3s, BigInt("0"))
		assert.equal(uint256zphIuNX, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressTGWnJib = accounts[5]
		const addressZmTze7s = accounts[1]
		const addressGtyxi75 = accounts[3]
		const MarsStakingRewardsMcBviyA = await MarsStakingRewards.new(addressTGWnJib, addressZmTze7s, addressGtyxi75, {from: accounts[3]});
		const addressQwiIZhs = accounts[4]
		const addressBervqTu = accounts[4]
		const uintDvKi0nk = BigInt("237")
		const uintVsONzxO = BigInt("1945")
		const addressOSkaKTQ = await MarsStakingRewardsMcBviyA.owner.call({from: accounts[3]});
//		const addressOdDCLJj = await MarsStakingRewardsMcBviyA.updateReward.call(addressQwiIZhs, {from: accounts[4]});
//		const addressJTrncwa = await MarsStakingRewardsMcBviyA.updateReward.call(addressBervqTu, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256DePvkVP = await MarsStakingRewardsMcBviyA.notifyRewardAmount.call(uintVsONzxO, uintDvKi0nk, {from: accounts[0]});

		assert.equal(addressOSkaKTQ, 0x51BB5141659EF49624af4Ff2a5d67ADFd67841ff)
		await expect(MarsStakingRewardsMcBviyA.updateReward.call(addressQwiIZhs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressj7DtcEl = accounts[3]
		const addressp68cSDn = accounts[5]
		const addresslb3ZSJ = accounts[2]
		const MarsStakingRewardsbMcKTg = await MarsStakingRewards.new(addressj7DtcEl, addressp68cSDn, addresslb3ZSJ, {from: accounts[2]});
		const uintugwLsl5 = BigInt("345")
//		const uint256oKd1anl = await MarsStakingRewardsbMcKTg.withdraw.call(uintugwLsl5, {from: accounts[3]});
//		const uint256b8htkpT = await MarsStakingRewardsbMcKTg.lastTimeRewardApplicable.call({from: accounts[1]});
//		const boolPIElTSL = await MarsStakingRewardsbMcKTg.isOwner.call({from: accounts[4]});

		await expect(MarsStakingRewardsbMcKTg.withdraw.call(uintugwLsl5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressm9h45fy = accounts[2]
		const addresst249npk = accounts[3]
		const addressFGduald = accounts[1]
		const MarsStakingRewardsAHKBw9R = await MarsStakingRewards.new(addressm9h45fy, addresst249npk, addressFGduald, {from: accounts[1]});
		const addressNYFCgpa = accounts[3]
		const addressCjbIVfN = accounts[1]
		const uint256W19UHJN = await MarsStakingRewardsAHKBw9R.earned.call(addressNYFCgpa, {from: accounts[3]});
		const addressocIhFU = await MarsStakingRewardsAHKBw9R.setRewardsDistribution.call(addressCjbIVfN, {from: accounts[1]});
		const uint256dVYscsx = await MarsStakingRewardsAHKBw9R.totalSupply.call({from: accounts[4]});

		assert.equal(uint256W19UHJN, BigInt("0"))
		assert.equal(uint256dVYscsx, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addresslITEAgx = accounts[1]
		const addressQKNAYYT = accounts[2]
		const addressDBlRKuh = accounts[4]
		const MarsStakingRewardsvmUeUVK = await MarsStakingRewards.new(addresslITEAgx, addressQKNAYYT, addressDBlRKuh, {from: accounts[1]});
		const addressHOFNcYm = accounts[4]
		const uintciKJj3O = BigInt("1963")
		const addressthId180 = "0x0000000000000000000000000000000000000001"
		const uint256zphIuNX = await MarsStakingRewardsvmUeUVK.balanceOf.call(addressHOFNcYm, {from: accounts[4]});
//		const addressS7UEXke = await MarsStakingRewardsvmUeUVK.inCaseTokensGetStuck.call(addressthId180, uintciKJj3O, {from: accounts[1]});

		assert.equal(uint256zphIuNX, BigInt("0"))
		await expect(MarsStakingRewardsvmUeUVK.inCaseTokensGetStuck.call(addressthId180, uintciKJj3O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressc6SjeE = accounts[2]
		const addresszFECmaC = accounts[3]
		const addressIwKwUns = accounts[1]
		const MarsStakingRewardsAHKBw9R = await MarsStakingRewards.new(addressc6SjeE, addresszFECmaC, addressIwKwUns, {from: accounts[1]});
		const addressepoFh0S = accounts[3]
		const address7Lsdhc = accounts[2]
		const uint256W19UHJN = await MarsStakingRewardsAHKBw9R.earned.call(addressepoFh0S, {from: accounts[3]});
//		await MarsStakingRewardsAHKBw9R.exit.call({from: accounts[4]});
//		const addressocIhFU = await MarsStakingRewardsAHKBw9R.setRewardsDistribution.call(address7Lsdhc, {from: accounts[1]});

		assert.equal(uint256W19UHJN, BigInt("0"))
		await expect(MarsStakingRewardsAHKBw9R.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressCdsca0O = accounts[1]
		const addresswh93qlL = accounts[2]
		const addressxRpSqxj = accounts[4]
		const MarsStakingRewardsvmUeUVK = await MarsStakingRewards.new(addressCdsca0O, addresswh93qlL, addressxRpSqxj, {from: accounts[1]});
		const uintCLF1x3R = BigInt("333")
		const uintWVYJxyq = BigInt("109")
//		const uint256ORcjELm = await MarsStakingRewardsvmUeUVK.notifyRewardAmount.call(uintWVYJxyq, uintCLF1x3R, {from: accounts[1]});
//		const uint256z35g3s = await MarsStakingRewardsvmUeUVK.rewardPerToken.call({from: accounts[1]});
//		const uint256qheyBDj = await MarsStakingRewardsvmUeUVK.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256TJDg5Kg = await MarsStakingRewardsvmUeUVK.getRewardForDuration.call({from: accounts[2]});

		await expect(MarsStakingRewardsvmUeUVK.notifyRewardAmount.call(uintWVYJxyq, uintCLF1x3R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressiI8BFBq = accounts[1]
		const addressS3DpIbq = accounts[2]
		const addresss0kcrBq = accounts[4]
		const MarsStakingRewardsvmUeUVK = await MarsStakingRewards.new(addressiI8BFBq, addressS3DpIbq, addresss0kcrBq, {from: accounts[1]});
		const uint256z35g3s = await MarsStakingRewardsvmUeUVK.rewardPerToken.call({from: accounts[1]});
		const uint256ryCHmqx = await MarsStakingRewardsvmUeUVK.getRewardForDuration.call({from: accounts[5]});

		assert.equal(uint256ryCHmqx, BigInt("0"))
		assert.equal(uint256z35g3s, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressmbZJM35 = accounts[1]
		const addressAEouiQB = accounts[2]
		const addressVDWeNNN = accounts[4]
		const MarsStakingRewardsvmUeUVK = await MarsStakingRewards.new(addressmbZJM35, addressAEouiQB, addressVDWeNNN, {from: accounts[1]});
		const addresslHOX4cl = accounts[4]
		const addressK73i8q7 = await MarsStakingRewardsvmUeUVK.transferOwnership.call(addresslHOX4cl, {from: accounts[1]});
		const uint256z35g3s = await MarsStakingRewardsvmUeUVK.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256z35g3s, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressSrnqg9u = accounts[0]
		const addressLvUKwI0 = accounts[1]
		const addressruEC8Y1 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsHotcIGf = await MarsStakingRewards.new(addressSrnqg9u, addressLvUKwI0, addressruEC8Y1, {from: "0x0000000000000000000000000000000000000001"});
		const addressr2w19Fu = accounts[5]
		const addressA6eXYP2 = "0x0000000000000000000000000000000000000001"
		const uintrJIxCY0 = BigInt("462")
		const uintHZZo1t = BigInt("1205")
		await MarsStakingRewardsHotcIGf.getReward.call({from: accounts[2]});
		const uint256EQhZWkt = await MarsStakingRewardsHotcIGf.rewardPerToken.call({from: accounts[4]});
		await MarsStakingRewardsHotcIGf.onlyOwner.call({from: accounts[1]});
		const addressIv4EYA = await MarsStakingRewardsHotcIGf.transferOwnership.call(addressr2w19Fu, {from: accounts[1]});
		const uint256hhYNPAm = await MarsStakingRewardsHotcIGf.earned.call(addressA6eXYP2, {from: accounts[0]});
		const uint256Jq5sVYJ = await MarsStakingRewardsHotcIGf.notifyRewardAmount.call(uintHZZo1t, uintrJIxCY0, {from: accounts[5]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressTdHjGyN = accounts[2]
		const addressrc3xA0 = accounts[3]
		const addressUBai5nG = accounts[1]
		const MarsStakingRewardsAHKBw9R = await MarsStakingRewards.new(addressTdHjGyN, addressrc3xA0, addressUBai5nG, {from: accounts[1]});
		const uintTVBOCnV = BigInt("75")
		const addresszw4ZvJG = accounts[1]
		const addressusnJYgu = accounts[3]
		const byteyihwQ7f = "0x0c0519061b0c161c2018040d0a0d021903050a111a160b011310070c1b171004"
		const byteuo35LCE = "0x1c101016100f1e060b030616011504031b12051c150b07020918111d1b091707"
		const uintrtvKghn = BigInt("245")
		const uintBkXyJoM = BigInt("1263")
		const uintcCLGCfa = BigInt("1543")
//		const address3cX8bX = await MarsStakingRewardsAHKBw9R.inCaseTokensGetStuck.call(addresszw4ZvJG, uintTVBOCnV, {from: accounts[1]});
//		const uint256W19UHJN = await MarsStakingRewardsAHKBw9R.earned.call(addressusnJYgu, {from: accounts[3]});
//		const uint256RVVUYas = await MarsStakingRewardsAHKBw9R.stakeWithPermit.call(uintcCLGCfa, uintBkXyJoM, uintrtvKghn, byteuo35LCE, byteyihwQ7f, {from: accounts[1]});

		await expect(MarsStakingRewardsAHKBw9R.inCaseTokensGetStuck.call(addresszw4ZvJG, uintTVBOCnV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})