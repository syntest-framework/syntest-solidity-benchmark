const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressvuH3Azn = accounts[4]
		const addressBXx8OU = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressvuH3Azn, addressBXx8OU, {from: accounts[4]});
		const uintMoWuQQ = BigInt("414")
		const addressdCsGs0 = accounts[5]
		const uintDPAXcDD = await StakingDextokenXsxXe8O.withdraw.call(uintMoWuQQ, {from: accounts[1]});
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addressdCsGs0, {from: "0x0000000000000000000000000000000000000001"});
		const uints1kpzcV = await StakingDextokenXsxXe8O.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(StakingDextokenXsxXe8O.withdraw.call(uintMoWuQQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressx3ihSq1 = accounts[2]
		const addressTWnyDxG = accounts[0]
		const StakingDextokenjlcnlbK = await StakingDextoken.new(addressx3ihSq1, addressTWnyDxG, {from: accounts[1]});
		const uintSixJp1z = BigInt("754")
		const addressJX4Uwvn = accounts[3]
		const addressSuoX0Sx = accounts[0]
		const addresssB1lelk = accounts[3]
		const uintbH3pn8j = await StakingDextokenjlcnlbK.deposit.call(uintSixJp1z, {from: "0x0000000000000000000000000000000000000001"});
		const uintvlm3mGC = await StakingDextokenjlcnlbK.getEndTimestamp.call({from: accounts[4]});
		const addresszNHy9XA = await StakingDextokenjlcnlbK.updateReward.call(addressJX4Uwvn, {from: accounts[1]});
		const addressyRgakYR = await StakingDextokenjlcnlbK.updateReward.call(addressSuoX0Sx, {from: accounts[3]});
		const uintmbVB7SA = await StakingDextokenjlcnlbK.rewardOf.call(addresssB1lelk, {from: accounts[1]});

		await expect(StakingDextokenjlcnlbK.deposit.call(uintSixJp1z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAmSNaT = accounts[3]
		const addressDC9yOni = accounts[2]
		const StakingDextokeny8pMGWE = await StakingDextoken.new(addressAmSNaT, addressDC9yOni, {from: accounts[0]});
		const addressc0Wd6HA = accounts[4]
		const addressBQaYxUW = accounts[3]
		const uintLBWcfGO = BigInt("472")
		const addressNoFaPv = accounts[3]
		const uintvVSq40B = await StakingDextokeny8pMGWE.lastTimeRewardApplicable.call({from: accounts[1]});
		const uintZoRy48w = await StakingDextokeny8pMGWE.stakeOf.call(addressc0Wd6HA, {from: accounts[4]});
		const uintBoNhRey = await StakingDextokeny8pMGWE.stakeOf.call(addressBQaYxUW, {from: accounts[2]});
		const uintkOL9anK = await StakingDextokeny8pMGWE.rewardPerToken.call({from: accounts[0]});
		const addressdv1dzmQ = await StakingDextokeny8pMGWE.capture.call(addressNoFaPv, uintLBWcfGO, {from: accounts[5]});

		assert.equal(uintBoNhRey, BigInt("0"))
		assert.equal(uintZoRy48w, BigInt("0"))
		assert.equal(uintkOL9anK, BigInt("0"))
		assert.equal(uintvVSq40B, BigInt("0"))
		await expect(StakingDextokeny8pMGWE.capture.call(addressNoFaPv, uintLBWcfGO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZwoNodb = accounts[4]
		const addressetWymW9 = accounts[0]
		const StakingDextokenBcpJbv0 = await StakingDextoken.new(addressZwoNodb, addressetWymW9, {from: accounts[1]});
		const addressYWnBtFj = accounts[3]
		const uintGXKNYlU = await StakingDextokenBcpJbv0.rewardOf.call(addressYWnBtFj, {from: accounts[3]});
		await StakingDextokenBcpJbv0.notifyRewards.call({from: accounts[2]});
		const uintQaRDXSG = await StakingDextokenBcpJbv0.getEndTimestamp.call({from: accounts[4]});
		const uint6hs7oD = await StakingDextokenBcpJbv0.getTotalStakes.call({from: accounts[3]});
		const uintQHvwF9 = await StakingDextokenBcpJbv0.lastTimeRewardApplicable.call({from: accounts[0]});
		const uintopVCEEq = await StakingDextokenBcpJbv0.remainingRewards.call({from: accounts[3]});

		assert.equal(uintGXKNYlU, BigInt("0"))
		await expect(StakingDextokenBcpJbv0.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressohcybFx = accounts[4]
		const addressuUumU8W = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressohcybFx, addressuUumU8W, {from: accounts[4]});
		const addresseiAuFPL = accounts[4]
		const uintoIgY8EX = BigInt("414")
		const addressfx7gu7d = accounts[6]
		const uintZnqecQL = await StakingDextokenXsxXe8O.getWithdrawalOf.call(addresseiAuFPL, {from: accounts[1]});
		const uintDPAXcDD = await StakingDextokenXsxXe8O.withdraw.call(uintoIgY8EX, {from: accounts[1]});
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addressfx7gu7d, {from: "0x0000000000000000000000000000000000000001"});
		const uints1kpzcV = await StakingDextokenXsxXe8O.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uintZnqecQL, BigInt("0"))
		await expect(StakingDextokenXsxXe8O.withdraw.call(uintoIgY8EX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressF0Pl1fE = accounts[4]
		const addresswIC4Vc9 = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressF0Pl1fE, addresswIC4Vc9, {from: accounts[4]});
		const uintp0JjYAg = BigInt("423")
		const addresswhf1WN3 = accounts[5]
		const uintzZYEWr = await StakingDextokenXsxXe8O.getStartTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
		const uintDPAXcDD = await StakingDextokenXsxXe8O.withdraw.call(uintp0JjYAg, {from: accounts[1]});
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addresswhf1WN3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintzZYEWr, BigInt("0"))
		await expect(StakingDextokenXsxXe8O.withdraw.call(uintp0JjYAg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYM4ksgN = accounts[2]
		const addressSrlw5tz = accounts[4]
		const StakingDextokeny3Ir0QY = await StakingDextoken.new(addressYM4ksgN, addressSrlw5tz, {from: accounts[1]});
		const addressS5QbgLZ = accounts[2]
		const address3naJbN = accounts[0]
		const uintbZMx2xl = await StakingDextokeny3Ir0QY.totalRewards.call({from: accounts[4]});
		const uintwfdZlhN = await StakingDextokeny3Ir0QY.rewardOf.call(addressS5QbgLZ, {from: accounts[1]});
		const uintfUNtzAV = await StakingDextokeny3Ir0QY.balanceOf.call(address3naJbN, {from: accounts[2]});
		const uintw04HX2F = await StakingDextokeny3Ir0QY.remainingRewards.call({from: accounts[2]});

		assert.equal(uintbZMx2xl, BigInt("0"))
		assert.equal(uintfUNtzAV, BigInt("0"))
		assert.equal(uintw04HX2F, BigInt("0"))
		assert.equal(uintwfdZlhN, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressGl1QALr = accounts[4]
		const addressWVGIsi5 = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressGl1QALr, addressWVGIsi5, {from: accounts[4]});
		const addressx9Iitzy = accounts[5]
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addressx9Iitzy, {from: "0x0000000000000000000000000000000000000001"});
		const uintLKrCPjR = await StakingDextokenXsxXe8O.totalRewards.call({from: accounts[1]});
		const uintv7DIGaD = await StakingDextokenXsxXe8O.getEndTimestamp.call({from: accounts[0]});

		assert.equal(uintLKrCPjR, BigInt("0"))
		assert.equal(uintlmjcp8J, BigInt("0"))
		assert.equal(uintv7DIGaD, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressZML0a04 = accounts[4]
		const addressfVjrOhs = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressZML0a04, addressfVjrOhs, {from: accounts[4]});
		const addresswpPzhxX = accounts[5]
		const addressM59kYUY = accounts[3]
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addresswpPzhxX, {from: "0x0000000000000000000000000000000000000001"});
		const addresstbqDBql = await StakingDextokenXsxXe8O.notFrozen.call(addressM59kYUY, {from: accounts[4]});

		assert.equal(uintlmjcp8J, BigInt("0"))
		await expect(StakingDextokenXsxXe8O.notFrozen.call(addressM59kYUY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressI0Pig1p = accounts[4]
		const addressvsNarh = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressI0Pig1p, addressvsNarh, {from: accounts[4]});
		const addresszUqHNf5 = accounts[3]
		const addresshvERkUP = accounts[5]
		const uintDJ689AW = await StakingDextokenXsxXe8O.getClaimOf.call(addresszUqHNf5, {from: accounts[0]});
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addresshvERkUP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintDJ689AW, BigInt("0"))
		assert.equal(uintlmjcp8J, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressx263IA = accounts[4]
		const addressyfyEt84 = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressx263IA, addressyfyEt84, {from: accounts[4]});
		const uintT8aymdq = BigInt("727")
		const addressSukadYK = accounts[2]
		const addressuBjif9n = accounts[0]
		const addresswM7zzOD = accounts[5]
		const addressJQPCurL = await StakingDextokenXsxXe8O.capture.call(addressSukadYK, uintT8aymdq, {from: accounts[4]});
		const addressEINlxZB = await StakingDextokenXsxXe8O.updateReward.call(addressuBjif9n, {from: accounts[0]});
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addresswM7zzOD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenXsxXe8O.capture.call(addressSukadYK, uintT8aymdq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressqEiNQc = accounts[4]
		const address9YPPCn = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressqEiNQc, address9YPPCn, {from: accounts[4]});
		const addressEtimU29 = accounts[4]
		const addressNMSG66r = accounts[6]
		const uintuG4MT4k = BigInt("385")
		const uintAXKi3N0 = await StakingDextokenXsxXe8O.rewardOf.call(addressEtimU29, {from: accounts[5]});
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addressNMSG66r, {from: "0x0000000000000000000000000000000000000001"});
		await StakingDextokenXsxXe8O.claim.call({from: accounts[4]});
		const uintxGZ0Pk5 = await StakingDextokenXsxXe8O.withdraw.call(uintuG4MT4k, {from: accounts[0]});

		assert.equal(uintAXKi3N0, BigInt("0"))
		assert.equal(uintlmjcp8J, BigInt("0"))
		await expect(StakingDextokenXsxXe8O.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressLRkkFur = accounts[3]
		const addressOrlK3LV = "0x0000000000000000000000000000000000000001"
		const StakingDextokenvsdTAvM = await StakingDextoken.new(addressLRkkFur, addressOrlK3LV, {from: "0x0000000000000000000000000000000000000001"});
		const uintLU6E5t6 = BigInt("302")
		const addressBO1Xj0 = accounts[0]
		const uintZychBN = await StakingDextokenvsdTAvM.totalRewards.call({from: accounts[3]});
		const uintYQOkkvi = await StakingDextokenvsdTAvM.withdraw.call(uintLU6E5t6, {from: accounts[4]});
		await StakingDextokenvsdTAvM.claim.call({from: accounts[2]});
		const uintJOj8FPp = await StakingDextokenvsdTAvM.getStartTimestamp.call({from: accounts[0]});
		const uintvfSMSEj = await StakingDextokenvsdTAvM.lastTimeRewardApplicable.call({from: accounts[2]});
		const uintoUNOE1H = await StakingDextokenvsdTAvM.earned.call(addressBO1Xj0, {from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const addresscGHP17K = accounts[4]
		const addressozEEOc3 = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addresscGHP17K, addressozEEOc3, {from: accounts[4]});
		const uintj0sauDh = BigInt("1463")
		const addressywKhhYI = accounts[5]
		const addressmzgBcwY = accounts[5]
		const uintfRQEQv7 = BigInt("1676")
		const addressGYNgQK1 = await StakingDextokenXsxXe8O.capture.call(addressywKhhYI, uintj0sauDh, {from: accounts[4]});
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addressmzgBcwY, {from: "0x0000000000000000000000000000000000000001"});
		const uintrwhsxhM = await StakingDextokenXsxXe8O.withdraw.call(uintfRQEQv7, {from: accounts[5]});

		await expect(StakingDextokenXsxXe8O.capture.call(addressywKhhYI, uintj0sauDh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresspqxZHiY = accounts[4]
		const addressfYLvOaE = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addresspqxZHiY, addressfYLvOaE, {from: accounts[4]});
		const uintVG2hwaI = BigInt("39")
		const uintpdBn9Xx = BigInt("877")
		const uintmZ3Z1X7 = BigInt("1439")
		const uintdnigo9R = BigInt("968")
		const addressYOPHgaf = accounts[1]
		const uintlOly6SA = await StakingDextokenXsxXe8O.setRewardRound.call(uintdnigo9R, uintmZ3Z1X7, uintpdBn9Xx, uintVG2hwaI, {from: accounts[4]});
		const uintMCaBZvI = await StakingDextokenXsxXe8O.getWithdrawalOf.call(addressYOPHgaf, {from: accounts[3]});
		const uintTMLTMig = await StakingDextokenXsxXe8O.totalRewards.call({from: accounts[0]});

		await expect(StakingDextokenXsxXe8O.setRewardRound.call(uintdnigo9R, uintmZ3Z1X7, uintpdBn9Xx, uintVG2hwaI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfwAzf47 = accounts[4]
		const addressfXrvtXt = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressfwAzf47, addressfXrvtXt, {from: accounts[4]});
		const addressi21G1L8 = accounts[4]
		const addressrCGyW9p = accounts[4]
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addressi21G1L8, {from: "0x0000000000000000000000000000000000000001"});
		const boolNjTg0RQ = await StakingDextokenXsxXe8O.unfreezeAccount.call(addressrCGyW9p, {from: accounts[4]});
		const uintgSG1MM4 = await StakingDextokenXsxXe8O.remainingRewards.call({from: accounts[0]});

		assert.equal(uintlmjcp8J, BigInt("0"))
		await expect(StakingDextokenXsxXe8O.unfreezeAccount.call(addressrCGyW9p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressW0P49nW = accounts[4]
		const addressUpGJ3eC = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressW0P49nW, addressUpGJ3eC, {from: accounts[4]});
		const addressufKgejJ = accounts[5]
		const addressNromWbK = accounts[2]
		const uintBIFN2wQ = BigInt("638")
		const addressRutXQc6 = accounts[4]
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addressufKgejJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintKbx5OjJ = await StakingDextokenXsxXe8O.getClaimOf.call(addressNromWbK, {from: accounts[3]});
		const addressSd5bgq = await StakingDextokenXsxXe8O.capture.call(addressRutXQc6, uintBIFN2wQ, {from: accounts[4]});

		assert.equal(uintKbx5OjJ, BigInt("0"))
		assert.equal(uintlmjcp8J, BigInt("0"))
		await expect(StakingDextokenXsxXe8O.capture.call(addressRutXQc6, uintBIFN2wQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresszHdCLd2 = accounts[4]
		const addresskizL6u = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addresszHdCLd2, addresskizL6u, {from: accounts[4]});
		const addresskxJ4K5m = accounts[5]
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addresskxJ4K5m, {from: "0x0000000000000000000000000000000000000001"});
		const uintGu8XgX = await StakingDextokenXsxXe8O.lastTimeRewardApplicable.call({from: accounts[5]});
		await StakingDextokenXsxXe8O.notifyRewards.call({from: accounts[4]});
		await StakingDextokenXsxXe8O.claim.call({from: accounts[5]});

		assert.equal(uintGu8XgX, BigInt("0"))
		assert.equal(uintlmjcp8J, BigInt("0"))
		await expect(StakingDextokenXsxXe8O.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressUzhHpj2 = accounts[4]
		const addresssLuLMEZ = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addressUzhHpj2, addresssLuLMEZ, {from: accounts[4]});
		const addressluvIJ4j = accounts[1]
		const addressIO7mtD = accounts[6]
		const addressPKXwsvQ = accounts[4]
		const boolZC2Wwe3 = await StakingDextokenXsxXe8O.freezeAccount.call(addressluvIJ4j, {from: accounts[4]});
		const uintlmjcp8J = await StakingDextokenXsxXe8O.rewardOf.call(addressIO7mtD, {from: "0x0000000000000000000000000000000000000001"});
		const uint5NGQ3B = await StakingDextokenXsxXe8O.getClaimOf.call(addressPKXwsvQ, {from: accounts[4]});
		const uintLIHaLjz = await StakingDextokenXsxXe8O.getEndTimestamp.call({from: accounts[5]});

		assert.equal(boolZC2Wwe3, true)
		assert.equal(uint5NGQ3B, BigInt("0"))
		assert.equal(uintLIHaLjz, BigInt("0"))
		assert.equal(uintlmjcp8J, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresslXq5JDk = accounts[4]
		const addressH3zjOS = accounts[5]
		const StakingDextokenXsxXe8O = await StakingDextoken.new(addresslXq5JDk, addressH3zjOS, {from: accounts[4]});
		const addressVkFsX27 = accounts[4]
		await StakingDextokenXsxXe8O.notifyRewards.call({from: accounts[4]});
		const addressKOs5nQL = await StakingDextokenXsxXe8O.setBeneficial.call(addressVkFsX27, {from: accounts[4]});

		await expect(StakingDextokenXsxXe8O.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})