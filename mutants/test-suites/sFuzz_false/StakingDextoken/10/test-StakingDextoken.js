const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressCeEZCmS = accounts[2]
		const addressaqblCWL = accounts[3]
		const StakingDextokenhSL8txE = await StakingDextoken.new(addressCeEZCmS, addressaqblCWL, {from: accounts[0]});
		const uintQFfLdJZ = BigInt("827")
		const addressjqFWz8L = accounts[4]
//		const uintxQTyudR = await StakingDextokenhSL8txE.deposit.call(uintQFfLdJZ, {from: accounts[2]});
//		await StakingDextokenhSL8txE.notifyRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressUcMJHiN = await StakingDextokenhSL8txE.setBeneficial.call(addressjqFWz8L, {from: accounts[0]});

		await expect(StakingDextokenhSL8txE.deposit.call(uintQFfLdJZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPFV8Ej8 = accounts[2]
		const addressecXo0k4 = accounts[0]
		const StakingDextokenVy9iiR2 = await StakingDextoken.new(addressPFV8Ej8, addressecXo0k4, {from: accounts[2]});
		const addressgOu17VC = accounts[1]
		const addresszk1pZqA = accounts[1]
		const addresswjead0 = accounts[4]
		const uintMqWJrwg = await StakingDextokenVy9iiR2.getWithdrawalOf.call(addressgOu17VC, {from: accounts[3]});
//		const addressDrU6tD5 = await StakingDextokenVy9iiR2.updateReward.call(addresszk1pZqA, {from: accounts[2]});
//		const boolhy0eTC6 = await StakingDextokenVy9iiR2.freezeAccount.call(addresswjead0, {from: accounts[1]});
//		const uintjMGoG75 = await StakingDextokenVy9iiR2.getTotalStakes.call({from: accounts[1]});

		assert.equal(uintMqWJrwg, BigInt("0"))
		await expect(StakingDextokenVy9iiR2.updateReward.call(addresszk1pZqA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCgBJxYX = accounts[3]
		const addressODAb7g4 = "0x0000000000000000000000000000000000000001"
		const StakingDextokenZpCa4Qy = await StakingDextoken.new(addressCgBJxYX, addressODAb7g4, {from: accounts[1]});
		const addressfjDxOsZ = accounts[3]
		const addresshEtcQG = accounts[4]
		const uintYtBWTQe = await StakingDextokenZpCa4Qy.lastTimeRewardApplicable.call({from: accounts[1]});
		const uintXfGu76 = await StakingDextokenZpCa4Qy.getClaimOf.call(addressfjDxOsZ, {from: accounts[0]});
		const uintbCTJPm = await StakingDextokenZpCa4Qy.getEndTimestamp.call({from: accounts[2]});
		const uintz9Gzkc2 = await StakingDextokenZpCa4Qy.getWithdrawalOf.call(addresshEtcQG, {from: accounts[1]});
		const uintOXMi4Jx = await StakingDextokenZpCa4Qy.getEndTimestamp.call({from: accounts[4]});

		assert.equal(uintOXMi4Jx, BigInt("0"))
		assert.equal(uintXfGu76, BigInt("0"))
		assert.equal(uintYtBWTQe, BigInt("0"))
		assert.equal(uintbCTJPm, BigInt("0"))
		assert.equal(uintz9Gzkc2, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressjSEu1IG = accounts[1]
		const addresskz7yJY = accounts[1]
		const StakingDextokenLGQIgvt = await StakingDextoken.new(addressjSEu1IG, addresskz7yJY, {from: accounts[4]});
		const addressiuq0LKo = accounts[3]
		const uintOgxJ6qS = await StakingDextokenLGQIgvt.balanceOf.call(addressiuq0LKo, {from: accounts[4]});
		const uintInDiAP8 = await StakingDextokenLGQIgvt.getStartTimestamp.call({from: accounts[3]});
		const uintmxF2MXw = await StakingDextokenLGQIgvt.remainingRewards.call({from: accounts[4]});

		assert.equal(uintInDiAP8, BigInt("0"))
		assert.equal(uintOgxJ6qS, BigInt("0"))
		assert.equal(uintmxF2MXw, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressKqRVpFL = accounts[3]
		const addressVcPd3oQ = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressKqRVpFL, addressVcPd3oQ, {from: accounts[1]});
		const addressIiiyzrw = accounts[1]
		const uintU7bwcUp = await StakingDextokenfmiV1vI.rewardPerToken.call({from: accounts[5]});
		const uinta1nFiP = await StakingDextokenfmiV1vI.rewardOf.call(addressIiiyzrw, {from: accounts[0]});

		assert.equal(uintU7bwcUp, BigInt("0"))
		assert.equal(uinta1nFiP, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressQVGxOa9 = accounts[0]
		const addresst01FG5G = accounts[0]
		const StakingDextokenbWK82H0 = await StakingDextoken.new(addressQVGxOa9, addresst01FG5G, {from: accounts[1]});
		const addressC7FhXSb = accounts[3]
		const addressTUOGn78 = accounts[1]
		const addressCZQchgX = accounts[1]
		const addressZwhKke5 = accounts[2]
		const uintgZrk7Al = await StakingDextokenbWK82H0.totalRewards.call({from: accounts[5]});
		const uintfB6lyG = await StakingDextokenbWK82H0.getWithdrawalOf.call(addressC7FhXSb, {from: accounts[4]});
		const uintwg3q8FP = await StakingDextokenbWK82H0.stakeOf.call(addressTUOGn78, {from: accounts[0]});
//		const addressx5Wqll3 = await StakingDextokenbWK82H0.setBeneficial.call(addressCZQchgX, {from: accounts[3]});
//		const addressN6gIuXr = await StakingDextokenbWK82H0.setBeneficial.call(addressZwhKke5, {from: accounts[4]});

		assert.equal(uintfB6lyG, BigInt("0"))
		assert.equal(uintgZrk7Al, BigInt("0"))
		assert.equal(uintwg3q8FP, BigInt("0"))
		await expect(StakingDextokenbWK82H0.setBeneficial.call(addressCZQchgX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxJCWn34 = accounts[2]
		const addressxVWBTXU = accounts[2]
		const StakingDextokenF00et9y = await StakingDextoken.new(addressxJCWn34, addressxVWBTXU, {from: accounts[0]});
		const addressvHKEgvT = accounts[3]
		const addressRV2dRcd = accounts[3]
		const addressf29fK1d = accounts[0]
		const uintNcDZW1K = await StakingDextokenF00et9y.stakeOf.call(addressvHKEgvT, {from: accounts[1]});
		const uintQgpgtrg = await StakingDextokenF00et9y.getWithdrawalOf.call(addressRV2dRcd, {from: accounts[4]});
//		const boolacgT6dO = await StakingDextokenF00et9y.unfreezeAccount.call(addressf29fK1d, {from: accounts[0]});

		assert.equal(uintNcDZW1K, BigInt("0"))
		assert.equal(uintQgpgtrg, BigInt("0"))
		await expect(StakingDextokenF00et9y.unfreezeAccount.call(addressf29fK1d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressaCkpq3d = accounts[3]
		const addressL33Ma3F = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressaCkpq3d, addressL33Ma3F, {from: accounts[1]});
		const uintpfvjsH2 = BigInt("1921")
		const uintU7bwcUp = await StakingDextokenfmiV1vI.rewardPerToken.call({from: accounts[5]});
//		const uintEqdGKvo = await StakingDextokenfmiV1vI.withdraw.call(uintpfvjsH2, {from: accounts[3]});
//		const uintW6pDuxA = await StakingDextokenfmiV1vI.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintbiA40d = await StakingDextokenfmiV1vI.rewardPerToken.call({from: accounts[4]});

		assert.equal(uintU7bwcUp, BigInt("0"))
		await expect(StakingDextokenfmiV1vI.withdraw.call(uintpfvjsH2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvdb0wqY = accounts[3]
		const addressPHua4va = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressvdb0wqY, addressPHua4va, {from: accounts[1]});
		const addressexEaWrg = accounts[1]
		const uintU7bwcUp = await StakingDextokenfmiV1vI.rewardPerToken.call({from: accounts[5]});
		const addressPC1LEnV = await StakingDextokenfmiV1vI.setBeneficial.call(addressexEaWrg, {from: accounts[1]});

		assert.equal(uintU7bwcUp, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressvoZD46o = accounts[0]
		const addressjQEcIfd = accounts[3]
		const StakingDextokenKq2p6cw = await StakingDextoken.new(addressvoZD46o, addressjQEcIfd, {from: accounts[2]});
		const addressagVXseh = accounts[2]
		const uintQyRgofL = BigInt("542")
		const addressyhjbOmq = accounts[2]
		const addressQqvzqlj = accounts[4]
		const uintuQDH8qg = await StakingDextokenKq2p6cw.getClaimOf.call(addressagVXseh, {from: accounts[5]});
//		const addressesCoEZc = await StakingDextokenKq2p6cw.capture.call(addressyhjbOmq, uintQyRgofL, {from: accounts[2]});
//		const uinthX5RgtT = await StakingDextokenKq2p6cw.totalRewards.call({from: accounts[4]});
//		const uintD97mtWF = await StakingDextokenKq2p6cw.rewardOf.call(addressQqvzqlj, {from: accounts[3]});

		assert.equal(uintuQDH8qg, BigInt("0"))
		await expect(StakingDextokenKq2p6cw.capture.call(addressyhjbOmq, uintQyRgofL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPSpD4o6 = accounts[3]
		const addressv0LhkZ9 = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressPSpD4o6, addressv0LhkZ9, {from: accounts[1]});
		const addressbdsUdGE = accounts[0]
		const addressyFxmRRA = accounts[4]
		const uintU7bwcUp = await StakingDextokenfmiV1vI.rewardPerToken.call({from: accounts[5]});
//		await StakingDextokenfmiV1vI.claim.call({from: accounts[0]});
//		const addressL64xDG3 = await StakingDextokenfmiV1vI.setBeneficial.call(addressbdsUdGE, {from: accounts[3]});
//		const uintjbJiR2Z = await StakingDextokenfmiV1vI.getWithdrawalOf.call(addressyFxmRRA, {from: accounts[1]});

		assert.equal(uintU7bwcUp, BigInt("0"))
		await expect(StakingDextokenfmiV1vI.claim.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxStRN5H = accounts[3]
		const addressAw7DLA = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressxStRN5H, addressAw7DLA, {from: accounts[1]});
//		await StakingDextokenfmiV1vI.notifyRewards.call({from: accounts[1]});
//		const uintWu0oVl = await StakingDextokenfmiV1vI.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintU7bwcUp = await StakingDextokenfmiV1vI.rewardPerToken.call({from: accounts[5]});

		await expect(StakingDextokenfmiV1vI.notifyRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvshO9eK = accounts[2]
		const addresspAB4QSv = accounts[1]
		const StakingDextokenSeydZsx = await StakingDextoken.new(addressvshO9eK, addresspAB4QSv, {from: "0x0000000000000000000000000000000000000001"});
		const addressjCeT5fR = accounts[0]
		const uintdSYhl3g = await StakingDextokenSeydZsx.getClaimOf.call(addressjCeT5fR, {from: accounts[5]});
		const uintWvukaSD = await StakingDextokenSeydZsx.lastTimeRewardApplicable.call({from: accounts[2]});
		await StakingDextokenSeydZsx.claim.call({from: accounts[3]});
		await StakingDextokenSeydZsx.claim.call({from: accounts[1]});
	});

	it('test for StakingDextoken', async () => {
		const addressYBnxe8G = accounts[3]
		const addressVBP07tw = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressYBnxe8G, addressVBP07tw, {from: accounts[1]});
		const addressJKBn7mo = accounts[3]
		const uintOpQLH2n = BigInt("1232")
		const uintPg9ki02 = BigInt("1464")
		const uintVpotBad = BigInt("375")
		const uintOTLWy5c = BigInt("1902")
		const addressTV4Y4Ju = accounts[0]
		const boolLs2f44D = await StakingDextokenfmiV1vI.freezeAccount.call(addressJKBn7mo, {from: accounts[1]});
//		const uintKoFCiJ = await StakingDextokenfmiV1vI.setRewardRound.call(uintOTLWy5c, uintVpotBad, uintPg9ki02, uintOpQLH2n, {from: accounts[1]});
//		const uintU7bwcUp = await StakingDextokenfmiV1vI.rewardPerToken.call({from: accounts[5]});
//		const uintbrsTCXV = await StakingDextokenfmiV1vI.getWithdrawalOf.call(addressTV4Y4Ju, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLs2f44D, true)
		await expect(StakingDextokenfmiV1vI.setRewardRound.call(uintOTLWy5c, uintVpotBad, uintPg9ki02, uintOpQLH2n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstYWt4Nk = accounts[3]
		const addressiwYo1E = accounts[2]
		const StakingDextokenXbPySBO = await StakingDextoken.new(addresstYWt4Nk, addressiwYo1E, {from: accounts[2]});
		const uint1Xjf6l = BigInt("1643")
		const addressQ3Zvgfn = accounts[2]
		const uintIuIkrZV = BigInt("51")
		const uintDaxGETr = BigInt("1658")
//		const addressTnKCFOx = await StakingDextokenXbPySBO.capture.call(addressQ3Zvgfn, uint1Xjf6l, {from: accounts[2]});
//		const uintjna4uzC = await StakingDextokenXbPySBO.withdraw.call(uintIuIkrZV, {from: "0x0000000000000000000000000000000000000001"});
//		const uintD1juBdL = await StakingDextokenXbPySBO.withdraw.call(uintDaxGETr, {from: accounts[4]});

		await expect(StakingDextokenXbPySBO.capture.call(addressQ3Zvgfn, uint1Xjf6l, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvFx8afW = accounts[1]
		const addresskg7ufLf = accounts[5]
		const StakingDextokenPVCKLzy = await StakingDextoken.new(addressvFx8afW, addresskg7ufLf, {from: accounts[2]});
		const uintjcLn0SA = BigInt("1615")
		const addressLRhBLGI = accounts[1]
//		const addressc8ZbJF9 = await StakingDextokenPVCKLzy.capture.call(addressLRhBLGI, uintjcLn0SA, {from: accounts[2]});
//		await StakingDextokenPVCKLzy.notifyRewards.call({from: accounts[0]});
//		const uintit3VOD0 = await StakingDextokenPVCKLzy.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uintCn8c2or = await StakingDextokenPVCKLzy.totalRewards.call({from: accounts[4]});
//		const uintnZnsUuk = await StakingDextokenPVCKLzy.getTotalStakes.call({from: accounts[1]});

		await expect(StakingDextokenPVCKLzy.capture.call(addressLRhBLGI, uintjcLn0SA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})