const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressjLcRppx = accounts[3]
		const addressX9MNhQy = accounts[2]
		const StakingDextokenlaRTEV7 = await StakingDextoken.new(addressjLcRppx, addressX9MNhQy, {from: accounts[5]});
		const uintQatP0K1 = BigInt("1116")
		const uintvM43QIB = BigInt("1552")
		const uintOW3vXCL = BigInt("216")
		const uintLqR9Pbc = BigInt("154")
		const addressdzBJNFl = accounts[5]
//		const uintu4qLVQg = await StakingDextokenlaRTEV7.setRewardRound.call(uintLqR9Pbc, uintOW3vXCL, uintvM43QIB, uintQatP0K1, {from: accounts[5]});
//		const uintVtQulkl = await StakingDextokenlaRTEV7.getTotalStakes.call({from: accounts[3]});
//		const uintA15TdAl = await StakingDextokenlaRTEV7.totalRewards.call({from: accounts[2]});
//		const uintSFq9kfg = await StakingDextokenlaRTEV7.earned.call(addressdzBJNFl, {from: accounts[4]});
//		const uintR6xi3md = await StakingDextokenlaRTEV7.getStartTimestamp.call({from: accounts[4]});

		await expect(StakingDextokenlaRTEV7.setRewardRound.call(uintLqR9Pbc, uintOW3vXCL, uintvM43QIB, uintQatP0K1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressFiAgiJt = accounts[0]
		const addressT6LH7ZV = accounts[3]
		const StakingDextokenk2ulPC4 = await StakingDextoken.new(addressFiAgiJt, addressT6LH7ZV, {from: accounts[2]});
		const addressqt72ne = accounts[2]
		const uintP67gmC7 = await StakingDextokenk2ulPC4.stakeOf.call(addressqt72ne, {from: accounts[3]});
		const uintg3S5Pmg = await StakingDextokenk2ulPC4.getStartTimestamp.call({from: accounts[0]});
		const uintKzHnHms = await StakingDextokenk2ulPC4.totalRewards.call({from: accounts[2]});

		assert.equal(uintKzHnHms, BigInt("0"))
		assert.equal(uintP67gmC7, BigInt("0"))
		assert.equal(uintg3S5Pmg, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresswuSigt = accounts[1]
		const addressbgfSwG = accounts[0]
		const StakingDextokenuS4ko03 = await StakingDextoken.new(addresswuSigt, addressbgfSwG, {from: accounts[1]});
		const addressUYMjvk = accounts[0]
		const addressKm5KN7B = accounts[3]
//		const addressSEbZqJo = await StakingDextokenuS4ko03.setBeneficial.call(addressUYMjvk, {from: accounts[0]});
//		const addressIsn0eWV = await StakingDextokenuS4ko03.updateReward.call(addressKm5KN7B, {from: accounts[1]});
//		const uintAzaCWnZ = await StakingDextokenuS4ko03.totalRewards.call({from: accounts[3]});
//		await StakingDextokenuS4ko03.notifyRewards.call({from: accounts[5]});
//		const uintjeZHSf = await StakingDextokenuS4ko03.getEndTimestamp.call({from: accounts[2]});

		await expect(StakingDextokenuS4ko03.setBeneficial.call(addressUYMjvk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressOB9Rcl9 = accounts[3]
		const addressuyEbXxD = accounts[5]
		const StakingDextokenugLWqys = await StakingDextoken.new(addressOB9Rcl9, addressuyEbXxD, {from: accounts[0]});
		const uintPayyHa8 = BigInt("1018")
//		const uintByJrN86 = await StakingDextokenugLWqys.withdraw.call(uintPayyHa8, {from: accounts[3]});
//		const uintCfBF9Ht = await StakingDextokenugLWqys.getStartTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintlMIrCP5 = await StakingDextokenugLWqys.totalRewards.call({from: accounts[1]});
//		const uint3QpeMg = await StakingDextokenugLWqys.getEndTimestamp.call({from: accounts[3]});

		await expect(StakingDextokenugLWqys.withdraw.call(uintPayyHa8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressI0ERa1a = accounts[1]
		const addressQAuIcGK = accounts[4]
		const StakingDextokenud1wahm = await StakingDextoken.new(addressI0ERa1a, addressQAuIcGK, {from: accounts[1]});
		const addressuAUKgge = accounts[4]
		const uintHI8mNf2 = BigInt("1426")
//		const addresspKzxBx = await StakingDextokenud1wahm.updateReward.call(addressuAUKgge, {from: accounts[2]});
//		const uinterYV6K = await StakingDextokenud1wahm.rewardPerToken.call({from: accounts[0]});
//		const uintfhgCsMz = await StakingDextokenud1wahm.deposit.call(uintHI8mNf2, {from: accounts[1]});

		await expect(StakingDextokenud1wahm.updateReward.call(addressuAUKgge, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvRn7Hy6 = accounts[1]
		const addressxtNZpf = accounts[4]
		const StakingDextokensa7qVcA = await StakingDextoken.new(addressvRn7Hy6, addressxtNZpf, {from: accounts[3]});
		const addressKIGndKI = accounts[3]
		const uintLJBAd9V = BigInt("1684")
		const uintHA7Uc7 = BigInt("1563")
		const uintPFR0qu3 = BigInt("1524")
		const uintq5IHiNx = BigInt("584")
		const addressdjVnVoA = accounts[1]
		const addressN60Z1R2 = accounts[0]
		const uintahxM8vY = await StakingDextokensa7qVcA.balanceOf.call(addressKIGndKI, {from: accounts[4]});
		const uintIbvDr6h = await StakingDextokensa7qVcA.setRewardRound.call(uintq5IHiNx, uintPFR0qu3, uintHA7Uc7, uintLJBAd9V, {from: accounts[3]});
//		await StakingDextokensa7qVcA.notifyRewards.call({from: accounts[3]});
//		const boolBy97LFV = await StakingDextokensa7qVcA.unfreezeAccount.call(addressdjVnVoA, {from: accounts[0]});
//		const addressJvSywhq = await StakingDextokensa7qVcA.setBeneficial.call(addressN60Z1R2, {from: accounts[2]});

		assert.equal(uintahxM8vY, BigInt("0"))
		await expect(StakingDextokensa7qVcA.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressSBCGFqI = accounts[1]
		const addressdWJ7UPN = accounts[1]
		const StakingDextokenAiH91Va = await StakingDextoken.new(addressSBCGFqI, addressdWJ7UPN, {from: accounts[1]});
		const addressyPYyhhl = accounts[5]
		const uintxnEuLEJ = BigInt("73")
		const uintYxlIicp = await StakingDextokenAiH91Va.getClaimOf.call(addressyPYyhhl, {from: accounts[2]});
//		const uintMFG12v = await StakingDextokenAiH91Va.withdraw.call(uintxnEuLEJ, {from: accounts[1]});
//		const uintPkVLDN = await StakingDextokenAiH91Va.rewardPerToken.call({from: accounts[3]});
//		const uintYZUTC2K = await StakingDextokenAiH91Va.getTotalStakes.call({from: accounts[3]});

		assert.equal(uintYxlIicp, BigInt("0"))
		await expect(StakingDextokenAiH91Va.withdraw.call(uintxnEuLEJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresspYEhJeS = accounts[0]
		const addressgYjbkZw = accounts[3]
		const StakingDextokenk2ulPC4 = await StakingDextoken.new(addresspYEhJeS, addressgYjbkZw, {from: accounts[2]});
		const addressnicW3VT = accounts[0]
		const uintFKprJDo = BigInt("1727")
		const addressMYgyzpg = accounts[4]
		const uintwlzy9x = await StakingDextokenk2ulPC4.getClaimOf.call(addressnicW3VT, {from: accounts[1]});
//		const uintfetZxDr = await StakingDextokenk2ulPC4.deposit.call(uintFKprJDo, {from: accounts[4]});
//		const uintP67gmC7 = await StakingDextokenk2ulPC4.stakeOf.call(addressMYgyzpg, {from: accounts[3]});
//		const uintKzHnHms = await StakingDextokenk2ulPC4.totalRewards.call({from: accounts[2]});

		assert.equal(uintwlzy9x, BigInt("0"))
		await expect(StakingDextokenk2ulPC4.deposit.call(uintFKprJDo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresss47rTXp = accounts[4]
		const addressPRotIMM = "0x0000000000000000000000000000000000000001"
		const StakingDextokenB0j86V = await StakingDextoken.new(addresss47rTXp, addressPRotIMM, {from: accounts[0]});
		const addresspEpzfU3 = accounts[2]
		const uintlMzix7l = await StakingDextokenB0j86V.getEndTimestamp.call({from: accounts[3]});
		const uintr4MwqM5 = await StakingDextokenB0j86V.rewardOf.call(addresspEpzfU3, {from: accounts[2]});

		assert.equal(uintlMzix7l, BigInt("0"))
		assert.equal(uintr4MwqM5, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressCQ6bRAS = accounts[4]
		const addressLbfMq0Y = accounts[0]
		const StakingDextokenQImKCxT = await StakingDextoken.new(addressCQ6bRAS, addressLbfMq0Y, {from: "0x0000000000000000000000000000000000000001"});
		await StakingDextokenQImKCxT.claim.call({from: accounts[1]});
		const uintzjKz4C = await StakingDextokenQImKCxT.rewardPerToken.call({from: accounts[5]});
	});

	it('test for StakingDextoken', async () => {
		const addressIiHWa92 = accounts[4]
		const addresslUDsh8I = "0x0000000000000000000000000000000000000001"
		const StakingDextokenB0j86V = await StakingDextoken.new(addressIiHWa92, addresslUDsh8I, {from: accounts[0]});
		const addressrzcUc5H = accounts[2]
		const uintr4MwqM5 = await StakingDextokenB0j86V.rewardOf.call(addressrzcUc5H, {from: accounts[2]});
		const uintiHVWR1 = await StakingDextokenB0j86V.remainingRewards.call({from: accounts[0]});

		assert.equal(uintiHVWR1, BigInt("0"))
		assert.equal(uintr4MwqM5, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressycbdrr = accounts[4]
		const addressQM7fVEY = "0x0000000000000000000000000000000000000001"
		const StakingDextokenB0j86V = await StakingDextoken.new(addressycbdrr, addressQM7fVEY, {from: accounts[0]});
		const addresspV0c71l = accounts[1]
		const addressZRCwOHR = "0x0000000000000000000000000000000000000000"
		const addressbqvJ4Tt = await StakingDextokenB0j86V.setBeneficial.call(addresspV0c71l, {from: accounts[0]});
		const uintr4MwqM5 = await StakingDextokenB0j86V.rewardOf.call(addressZRCwOHR, {from: accounts[2]});
		const uintb0LvSRb = await StakingDextokenB0j86V.totalRewards.call({from: accounts[4]});

		assert.equal(uintb0LvSRb, BigInt("0"))
		assert.equal(uintr4MwqM5, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressRkx2BO = accounts[1]
		const addressiiq6BWu = accounts[4]
		const StakingDextokensa7qVcA = await StakingDextoken.new(addressRkx2BO, addressiiq6BWu, {from: accounts[3]});
		const addressp6USZy = accounts[1]
		const addressG9ZNntK = accounts[1]
		const uintVerIPro = await StakingDextokensa7qVcA.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
//		await StakingDextokensa7qVcA.notifyRewards.call({from: accounts[3]});
//		const boolEx9X4L3 = await StakingDextokensa7qVcA.freezeAccount.call(addressp6USZy, {from: accounts[3]});
//		const uintchUFkLR = await StakingDextokensa7qVcA.earned.call(addressG9ZNntK, {from: accounts[0]});

		assert.equal(uintVerIPro, BigInt("0"))
		await expect(StakingDextokensa7qVcA.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresspBRrLrA = accounts[4]
		const addressTdMYQXC = "0x0000000000000000000000000000000000000001"
		const StakingDextokenB0j86V = await StakingDextoken.new(addresspBRrLrA, addressTdMYQXC, {from: accounts[0]});
		const addresszBt7X4g = "0x0000000000000000000000000000000000000001"
		const addresshXiTTFz = accounts[1]
		const uintr4MwqM5 = await StakingDextokenB0j86V.rewardOf.call(addresszBt7X4g, {from: accounts[2]});
		const uintu9rSgB = await StakingDextokenB0j86V.getWithdrawalOf.call(addresshXiTTFz, {from: accounts[2]});

		assert.equal(uintr4MwqM5, BigInt("0"))
		assert.equal(uintu9rSgB, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressqrB7Ag1 = accounts[1]
		const addressmP4SDsD = accounts[4]
		const StakingDextokensa7qVcA = await StakingDextoken.new(addressqrB7Ag1, addressmP4SDsD, {from: accounts[3]});
		const uintkpTRHWK = BigInt("2031")
//		await StakingDextokensa7qVcA.notifyRewards.call({from: accounts[3]});
//		await StakingDextokensa7qVcA.claim.call({from: accounts[5]});
//		const uintpqhmoe = await StakingDextokensa7qVcA.totalRewards.call({from: accounts[0]});
//		const uintpK45eUq = await StakingDextokensa7qVcA.withdraw.call(uintkpTRHWK, {from: accounts[2]});

		await expect(StakingDextokensa7qVcA.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEZsVvW = accounts[4]
		const addressi137WEQ = "0x0000000000000000000000000000000000000001"
		const StakingDextokenB0j86V = await StakingDextoken.new(addressEZsVvW, addressi137WEQ, {from: accounts[0]});
		const addressOW0e0k = accounts[5]
		const addressY6ntJTc = accounts[2]
		const uinthcUGRjy = BigInt("1595")
		const addressgQP2C2P = accounts[2]
		const uintr4MwqM5 = await StakingDextokenB0j86V.rewardOf.call(addressOW0e0k, {from: accounts[2]});
		const uintesbJl3s = await StakingDextokenB0j86V.stakeOf.call(addressY6ntJTc, {from: "0x0000000000000000000000000000000000000001"});
//		const addresswjV1ex = await StakingDextokenB0j86V.capture.call(addressgQP2C2P, uinthcUGRjy, {from: accounts[0]});

		assert.equal(uintesbJl3s, BigInt("0"))
		assert.equal(uintr4MwqM5, BigInt("0"))
		await expect(StakingDextokenB0j86V.capture.call(addressgQP2C2P, uinthcUGRjy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressvliP5y4 = accounts[4]
		const addressxKOefnM = "0x0000000000000000000000000000000000000001"
		const StakingDextokenB0j86V = await StakingDextoken.new(addressvliP5y4, addressxKOefnM, {from: accounts[0]});
		const addressYroDwO2 = accounts[0]
		const addressrZO4Vez = accounts[4]
		const addressOJjTxWJ = accounts[0]
		const uintJrYkz40 = await StakingDextokenB0j86V.getWithdrawalOf.call(addressYroDwO2, {from: "0x0000000000000000000000000000000000000001"});
		const uintr4MwqM5 = await StakingDextokenB0j86V.rewardOf.call(addressrZO4Vez, {from: accounts[2]});
//		const boolaWYQdaL = await StakingDextokenB0j86V.unfreezeAccount.call(addressOJjTxWJ, {from: accounts[0]});

		assert.equal(uintJrYkz40, BigInt("0"))
		assert.equal(uintr4MwqM5, BigInt("0"))
		await expect(StakingDextokenB0j86V.unfreezeAccount.call(addressOJjTxWJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressTR3Uz23 = accounts[1]
		const addressZU7s6Dm = accounts[4]
		const StakingDextokensa7qVcA = await StakingDextoken.new(addressTR3Uz23, addressZU7s6Dm, {from: accounts[3]});
		const addressOWf0Gp4 = accounts[3]
		const uintuETUmq8 = BigInt("169")
		const addressv3cg3W1 = accounts[4]
		const addressDKOVGDj = accounts[0]
		const uint4dPx9G = await StakingDextokensa7qVcA.earned.call(addressOWf0Gp4, {from: accounts[2]});
//		const addressfTcmxnk = await StakingDextokensa7qVcA.capture.call(addressv3cg3W1, uintuETUmq8, {from: accounts[3]});
//		const uintsckIitO = await StakingDextokensa7qVcA.balanceOf.call(addressDKOVGDj, {from: accounts[2]});
//		await StakingDextokensa7qVcA.notifyRewards.call({from: accounts[3]});

		assert.equal(uint4dPx9G, BigInt("0"))
		await expect(StakingDextokensa7qVcA.capture.call(addressv3cg3W1, uintuETUmq8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})