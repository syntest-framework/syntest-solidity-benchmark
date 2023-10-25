const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addresslWIJfS9 = accounts[4]
		const addressX5lm3rX = "0x0000000000000000000000000000000000000001"
		const StakingDextokenNySLTWv = await StakingDextoken.new(addresslWIJfS9, addressX5lm3rX, {from: accounts[2]});
		const addressQpA54M4 = accounts[3]
		const addressnebCW7h = accounts[0]
		const uintMpgjgvr = await StakingDextokenNySLTWv.rewardOf.call(addressQpA54M4, {from: "0x0000000000000000000000000000000000000001"});
		const uintUWmz0pl = await StakingDextokenNySLTWv.totalRewards.call({from: accounts[0]});
		const boolUmBfYNe = await StakingDextokenNySLTWv.unfreezeAccount.call(addressnebCW7h, {from: accounts[4]});

		assert.equal(uintMpgjgvr, BigInt("0"))
		assert.equal(uintUWmz0pl, BigInt("0"))
		await expect(StakingDextokenNySLTWv.unfreezeAccount.call(addressnebCW7h, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressNT4RZcB = "0x0000000000000000000000000000000000000001"
		const addresshFsRADp = accounts[3]
		const StakingDextokencPTqAjJ = await StakingDextoken.new(addressNT4RZcB, addresshFsRADp, {from: accounts[3]});
		const addressfHQ3s8w = accounts[1]
		const uintSvTLdPy = BigInt("1844")
		const uintpwOO5j = BigInt("1334")
		const uintfVv0uga = BigInt("1149")
		const uintJkgob5 = BigInt("454")
		const uinthvP4XHx = await StakingDextokencPTqAjJ.getClaimOf.call(addressfHQ3s8w, {from: accounts[1]});
		await StakingDextokencPTqAjJ.notifyRewards.call({from: accounts[0]});
		const uintDkVTWa1 = await StakingDextokencPTqAjJ.totalRewards.call({from: accounts[1]});
		const uintrCjRAl = await StakingDextokencPTqAjJ.getStartTimestamp.call({from: accounts[1]});
		const uinthFgbl61 = await StakingDextokencPTqAjJ.setRewardRound.call(uintJkgob5, uintfVv0uga, uintpwOO5j, uintSvTLdPy, {from: accounts[3]});

		assert.equal(uinthvP4XHx, BigInt("0"))
		await expect(StakingDextokencPTqAjJ.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressK6b5XT8 = accounts[2]
		const addressneYChwG = accounts[3]
		const StakingDextokenrK4uzv = await StakingDextoken.new(addressK6b5XT8, addressneYChwG, {from: accounts[1]});
		const addresshJwcFyJ = accounts[3]
		const addressJ5VRTXH = accounts[0]
		const addressDZkncC = accounts[4]
		const addressUtJFiF = accounts[5]
		const addressjkPzBt = "0x0000000000000000000000000000000000000001"
		const uintHki6eex = await StakingDextokenrK4uzv.stakeOf.call(addresshJwcFyJ, {from: accounts[2]});
		const uintbUYNYlM = await StakingDextokenrK4uzv.stakeOf.call(addressJ5VRTXH, {from: accounts[3]});
		const uinttUMHHwP = await StakingDextokenrK4uzv.getWithdrawalOf.call(addressDZkncC, {from: accounts[3]});
		const uintoiGEDPy = await StakingDextokenrK4uzv.getClaimOf.call(addressUtJFiF, {from: accounts[0]});
		const boolutcFISh = await StakingDextokenrK4uzv.freezeAccount.call(addressjkPzBt, {from: accounts[0]});

		assert.equal(uintHki6eex, BigInt("0"))
		assert.equal(uintbUYNYlM, BigInt("0"))
		assert.equal(uintoiGEDPy, BigInt("0"))
		assert.equal(uinttUMHHwP, BigInt("0"))
		await expect(StakingDextokenrK4uzv.freezeAccount.call(addressjkPzBt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresswhw2tIG = accounts[3]
		const addressvjBMpLC = accounts[0]
		const StakingDextokenacBDwaV = await StakingDextoken.new(addresswhw2tIG, addressvjBMpLC, {from: accounts[2]});
		const uintIrpTBGf = BigInt("616")
		const uintcdhQlbV = BigInt("635")
		const uintITzF2xz = BigInt("1499")
		const uintK3lXMzd = BigInt("608")
		const uintH743EKA = await StakingDextokenacBDwaV.getTotalStakes.call({from: accounts[2]});
		await StakingDextokenacBDwaV.claim.call({from: accounts[1]});
		const uintX8gGsbd = await StakingDextokenacBDwaV.setRewardRound.call(uintK3lXMzd, uintITzF2xz, uintcdhQlbV, uintIrpTBGf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintH743EKA, BigInt("0"))
		await expect(StakingDextokenacBDwaV.claim.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressmU8UJS = accounts[0]
		const addresszeNrgp6 = accounts[3]
		const StakingDextokenaS8xXQR = await StakingDextoken.new(addressmU8UJS, addresszeNrgp6, {from: accounts[1]});
		const uints5RvYNk = BigInt("1401")
		const uintBAuJRL = BigInt("1529")
		const addressHM61z4p = accounts[3]
		const addressLmerXe6 = accounts[5]
		const uintMeMK0m = await StakingDextokenaS8xXQR.deposit.call(uints5RvYNk, {from: accounts[5]});
		const uintTThsz4 = await StakingDextokenaS8xXQR.rewardPerToken.call({from: accounts[5]});
		const addressl7y5Bxa = await StakingDextokenaS8xXQR.capture.call(addressHM61z4p, uintBAuJRL, {from: accounts[3]});
		const uintZutf6Wb = await StakingDextokenaS8xXQR.totalRewards.call({from: accounts[0]});
		await StakingDextokenaS8xXQR.claim.call({from: accounts[1]});
		const bool5Nw6Ag = await StakingDextokenaS8xXQR.freezeAccount.call(addressLmerXe6, {from: accounts[2]});

		await expect(StakingDextokenaS8xXQR.deposit.call(uints5RvYNk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslAQVwia = accounts[2]
		const addressy22RYb = accounts[2]
		const StakingDextokenLhKWMGM = await StakingDextoken.new(addresslAQVwia, addressy22RYb, {from: accounts[5]});
		const uintOFRxnc6 = BigInt("735")
		const addressi12CMgj = accounts[1]
		const uintSIFMNpk = await StakingDextokenLhKWMGM.totalRewards.call({from: accounts[4]});
		const uintdOLuZBI = await StakingDextokenLhKWMGM.withdraw.call(uintOFRxnc6, {from: accounts[2]});
		const boolcyF0aDl = await StakingDextokenLhKWMGM.unfreezeAccount.call(addressi12CMgj, {from: accounts[3]});

		assert.equal(uintSIFMNpk, BigInt("0"))
		await expect(StakingDextokenLhKWMGM.withdraw.call(uintOFRxnc6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPmRonhe = accounts[1]
		const addressNrOTxyJ = accounts[0]
		const StakingDextokenjQOn7Wq = await StakingDextoken.new(addressPmRonhe, addressNrOTxyJ, {from: accounts[0]});
		const addresswQspRQo = accounts[1]
		const addressqm2Hdzz = accounts[3]
		const uintN0s2u9R = BigInt("953")
		const addressdfjKyll = accounts[3]
		const addressgu8RLZr = accounts[0]
		const addressQB2MGr0 = await StakingDextokenjQOn7Wq.updateReward.call(addresswQspRQo, {from: accounts[3]});
		await StakingDextokenjQOn7Wq.notifyRewards.call({from: accounts[0]});
		const boolN0RJGWV = await StakingDextokenjQOn7Wq.freezeAccount.call(addressqm2Hdzz, {from: accounts[3]});
		const uintPjlM2DV = await StakingDextokenjQOn7Wq.deposit.call(uintN0s2u9R, {from: accounts[4]});
		const addressLOlZeH = await StakingDextokenjQOn7Wq.updateReward.call(addressdfjKyll, {from: accounts[2]});
		const uintYY0qiwv = await StakingDextokenjQOn7Wq.rewardOf.call(addressgu8RLZr, {from: accounts[1]});

		await expect(StakingDextokenjQOn7Wq.updateReward.call(addresswQspRQo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWDvEUQE = accounts[1]
		const addressJJWhzrN = accounts[2]
		const StakingDextokenpXEFm6G = await StakingDextoken.new(addressWDvEUQE, addressJJWhzrN, {from: "0x0000000000000000000000000000000000000001"});
		const addressLhlartb = accounts[1]
		const addressa7Bmtb = accounts[2]
		const uintR8lgwu7 = BigInt("1830")
		const uintAbM6a07 = await StakingDextokenpXEFm6G.earned.call(addressLhlartb, {from: "0x0000000000000000000000000000000000000001"});
		const addressUxbkXn3 = await StakingDextokenpXEFm6G.setBeneficial.call(addressa7Bmtb, {from: accounts[3]});
		await StakingDextokenpXEFm6G.notifyRewards.call({from: accounts[2]});
		const uintXnrLUTi = await StakingDextokenpXEFm6G.withdraw.call(uintR8lgwu7, {from: accounts[1]});
	});

	it('test for StakingDextoken', async () => {
		const addressq8euey7 = accounts[0]
		const addressCjMzMVa = accounts[2]
		const StakingDextokenCKfjYqV = await StakingDextoken.new(addressq8euey7, addressCjMzMVa, {from: accounts[3]});
		const addressxTZOWzE = accounts[3]
		const uintf0GZHNZ = await StakingDextokenCKfjYqV.remainingRewards.call({from: accounts[1]});
		const addresspKt3Ndj = await StakingDextokenCKfjYqV.setBeneficial.call(addressxTZOWzE, {from: accounts[2]});
		await StakingDextokenCKfjYqV.notifyRewards.call({from: accounts[4]});
		const uintCHEtqaS = await StakingDextokenCKfjYqV.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(uintf0GZHNZ, BigInt("0"))
		await expect(StakingDextokenCKfjYqV.setBeneficial.call(addressxTZOWzE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxC82a6J = accounts[2]
		const addressGIjz2iB = accounts[2]
		const StakingDextokenLhKWMGM = await StakingDextoken.new(addressxC82a6J, addressGIjz2iB, {from: accounts[5]});
		const uinta5nClm8 = BigInt("2004")
		const uintzt4YOwx = await StakingDextokenLhKWMGM.getStartTimestamp.call({from: accounts[3]});
		const uintdOLuZBI = await StakingDextokenLhKWMGM.withdraw.call(uinta5nClm8, {from: accounts[2]});

		assert.equal(uintzt4YOwx, BigInt("0"))
		await expect(StakingDextokenLhKWMGM.withdraw.call(uinta5nClm8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressFVOjLNJ = accounts[1]
		const addressVQPDSI7 = accounts[0]
		const StakingDextokenGHILhu = await StakingDextoken.new(addressFVOjLNJ, addressVQPDSI7, {from: accounts[0]});
		const addressKaT4Zgx = accounts[3]
		const uintQ1ul5Ru = BigInt("1896")
		const uintGT9ErQM = BigInt("508")
		const uintdOzXCBv = BigInt("895")
		const uintye24bVv = BigInt("1884")
		const uintUqOxWO = BigInt("1418")
		const uintUv7vFi = await StakingDextokenGHILhu.getWithdrawalOf.call(addressKaT4Zgx, {from: accounts[5]});
		const uintOvF8VnA = await StakingDextokenGHILhu.setRewardRound.call(uintye24bVv, uintdOzXCBv, uintGT9ErQM, uintQ1ul5Ru, {from: accounts[0]});
		const uintoOAr8Cq = await StakingDextokenGHILhu.rewardPerToken.call({from: accounts[2]});
		const uintSGpSaLl = await StakingDextokenGHILhu.deposit.call(uintUqOxWO, {from: accounts[3]});

		assert.equal(uintUv7vFi, BigInt("0"))
		assert.equal(uintoOAr8Cq, BigInt("0"))
		await expect(StakingDextokenGHILhu.deposit.call(uintUqOxWO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressLLbCIio = accounts[1]
		const addressNJNBetR = accounts[0]
		const StakingDextokenGHILhu = await StakingDextoken.new(addressLLbCIio, addressNJNBetR, {from: accounts[0]});
		const addresscMpMZLm = accounts[2]
		const addressZLuj5PL = accounts[3]
		const uintbs5rF0 = BigInt("253")
		const uintZ1GwmsP = BigInt("1896")
		const uintPUl8HKs = BigInt("508")
		const uintovq3M3X = BigInt("895")
		const uintEvQPSLz = BigInt("1884")
		const uintEReSGDz = BigInt("1418")
		const uinty9cfAYx = BigInt("1849")
		const uint1T6hXZ = BigInt("1544")
		const uintNV9xMX = BigInt("5")
		const uintOWA4MIx = BigInt("390")
		const uintUv7vFi = await StakingDextokenGHILhu.getWithdrawalOf.call(addresscMpMZLm, {from: accounts[5]});
		const boolihQdKYN = await StakingDextokenGHILhu.unfreezeAccount.call(addressZLuj5PL, {from: accounts[0]});
		const uintA6vPnek = await StakingDextokenGHILhu.deposit.call(uintbs5rF0, {from: "0x0000000000000000000000000000000000000001"});
		const uintOvF8VnA = await StakingDextokenGHILhu.setRewardRound.call(uintEvQPSLz, uintovq3M3X, uintPUl8HKs, uintZ1GwmsP, {from: accounts[0]});
		const uintoOAr8Cq = await StakingDextokenGHILhu.rewardPerToken.call({from: accounts[2]});
		const uintSGpSaLl = await StakingDextokenGHILhu.deposit.call(uintEReSGDz, {from: accounts[3]});
		const uintqVQRso = await StakingDextokenGHILhu.setRewardRound.call(uintOWA4MIx, uintNV9xMX, uint1T6hXZ, uinty9cfAYx, {from: accounts[3]});

		assert.equal(uintUv7vFi, BigInt("0"))
		await expect(StakingDextokenGHILhu.unfreezeAccount.call(addressZLuj5PL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressNdsQeVZ = accounts[2]
		const addressSPuZ0jB = accounts[2]
		const StakingDextokenLhKWMGM = await StakingDextoken.new(addressNdsQeVZ, addressSPuZ0jB, {from: accounts[5]});
		const uint4pOuFY = BigInt("942")
		const addressFsFNVDs = accounts[0]
		const uintFOzfp8j = BigInt("557")
		const addressCLk4yK = accounts[4]
		const uintpLOHABT = BigInt("775")
		const addresscWvww78 = accounts[4]
		const addressLjlEdas = await StakingDextokenLhKWMGM.capture.call(addressFsFNVDs, uint4pOuFY, {from: accounts[5]});
		const addressm27cPig = await StakingDextokenLhKWMGM.capture.call(addressCLk4yK, uintFOzfp8j, {from: accounts[1]});
		const uintdOLuZBI = await StakingDextokenLhKWMGM.withdraw.call(uintpLOHABT, {from: accounts[2]});
		const uintwSDISk0 = await StakingDextokenLhKWMGM.stakeOf.call(addresscWvww78, {from: accounts[4]});

		await expect(StakingDextokenLhKWMGM.capture.call(addressFsFNVDs, uint4pOuFY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCf23PVV = "0x0000000000000000000000000000000000000001"
		const addressqyhm8e = "0x0000000000000000000000000000000000000001"
		const StakingDextokenftINqJe = await StakingDextoken.new(addressCf23PVV, addressqyhm8e, {from: accounts[2]});
		const addressHat6Bfo = accounts[0]
		const addressRE9eQap = accounts[3]
		const addressrrGYeNu = accounts[0]
		const addressn37BqRt = await StakingDextokenftINqJe.setBeneficial.call(addressHat6Bfo, {from: accounts[2]});
		const addressYTf3fHL = await StakingDextokenftINqJe.notFrozen.call(addressRE9eQap, {from: accounts[4]});
		const addressDosdfFY = await StakingDextokenftINqJe.setBeneficial.call(addressrrGYeNu, {from: accounts[0]});
		const uintWFBIbqA = await StakingDextokenftINqJe.remainingRewards.call({from: accounts[0]});

		await expect(StakingDextokenftINqJe.notFrozen.call(addressRE9eQap, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressiQHkqJV = accounts[2]
		const addressvi1R5NE = accounts[2]
		const StakingDextokenLhKWMGM = await StakingDextoken.new(addressiQHkqJV, addressvi1R5NE, {from: accounts[5]});
		const uintpWHvZCz = BigInt("1769")
		const addressrkLnPA = accounts[2]
		const uintqYxvH7z = BigInt("775")
		const uintj09mt0M = BigInt("535")
		const addressgwHOBd = accounts[0]
		const addresswHDOOH = accounts[1]
		const uintkRyzb7 = BigInt("1748")
		const uinttGgTtqe = BigInt("282")
		const uintyRSt2X7 = BigInt("71")
		const uintZz5dnbT = BigInt("1456")
		const uintfV3GLe = BigInt("1368")
		const addressLjlEdas = await StakingDextokenLhKWMGM.capture.call(addressrkLnPA, uintpWHvZCz, {from: accounts[5]});
		const uintdOLuZBI = await StakingDextokenLhKWMGM.withdraw.call(uintqYxvH7z, {from: accounts[2]});
		const addressu5ERO1Q = await StakingDextokenLhKWMGM.capture.call(addressgwHOBd, uintj09mt0M, {from: accounts[4]});
		const uintwSDISk0 = await StakingDextokenLhKWMGM.stakeOf.call(addresswHDOOH, {from: accounts[4]});
		const uintAP31GWs = await StakingDextokenLhKWMGM.deposit.call(uintkRyzb7, {from: "0x0000000000000000000000000000000000000001"});
		const uinttViRkmL = await StakingDextokenLhKWMGM.setRewardRound.call(uintfV3GLe, uintZz5dnbT, uintyRSt2X7, uinttGgTtqe, {from: accounts[2]});

		await expect(StakingDextokenLhKWMGM.capture.call(addressrkLnPA, uintpWHvZCz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPVGSHoP = accounts[3]
		const address4uYdQA = accounts[0]
		const StakingDextokenacBDwaV = await StakingDextoken.new(addressPVGSHoP, address4uYdQA, {from: accounts[2]});
		await StakingDextokenacBDwaV.notifyRewards.call({from: accounts[2]});
		await StakingDextokenacBDwaV.claim.call({from: accounts[1]});
		const uinto1GuME = await StakingDextokenacBDwaV.totalRewards.call({from: accounts[4]});

		await expect(StakingDextokenacBDwaV.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVN6qjbI = accounts[2]
		const addressVEB8yyo = accounts[2]
		const StakingDextokenLhKWMGM = await StakingDextoken.new(addressVN6qjbI, addressVEB8yyo, {from: accounts[5]});
		const addressqk39Rk5 = accounts[3]
		const uintRegk834 = BigInt("1812")
		const addressa43Hgz8 = accounts[1]
		const addressmD1kCL = accounts[1]
		const boolFfv2NHC = await StakingDextokenLhKWMGM.freezeAccount.call(addressqk39Rk5, {from: accounts[5]});
		const addressLjlEdas = await StakingDextokenLhKWMGM.capture.call(addressa43Hgz8, uintRegk834, {from: accounts[5]});
		const uintTPpPHPB = await StakingDextokenLhKWMGM.getClaimOf.call(addressmD1kCL, {from: accounts[0]});

		assert.equal(boolFfv2NHC, true)
		await expect(StakingDextokenLhKWMGM.capture.call(addressa43Hgz8, uintRegk834, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressmKSIuJc = accounts[3]
		const addressCsHqKkq = accounts[0]
		const StakingDextokenacBDwaV = await StakingDextoken.new(addressmKSIuJc, addressCsHqKkq, {from: accounts[2]});
		const addressMm1ggyi = accounts[1]
		const uintAyE53aZ = BigInt("32")
		const uint4ZdLzh = BigInt("224")
		const uintxT4Ud8 = BigInt("1572")
		const uintUpWWRvx = BigInt("384")
		const addressz634ysR = "0x0000000000000000000000000000000000000001"
		const uintC93pems = await StakingDextokenacBDwaV.stakeOf.call(addressMm1ggyi, {from: accounts[0]});
		const uintyPD6476 = await StakingDextokenacBDwaV.setRewardRound.call(uintUpWWRvx, uintxT4Ud8, uint4ZdLzh, uintAyE53aZ, {from: accounts[2]});
		const uintSPtIZB = await StakingDextokenacBDwaV.earned.call(addressz634ysR, {from: accounts[5]});
		await StakingDextokenacBDwaV.claim.call({from: accounts[1]});

		assert.equal(uintC93pems, BigInt("0"))
		await expect(StakingDextokenacBDwaV.setRewardRound.call(uintUpWWRvx, uintxT4Ud8, uint4ZdLzh, uintAyE53aZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfoCfNHi = accounts[3]
		const addressY9F0a2s = accounts[0]
		const StakingDextokenacBDwaV = await StakingDextoken.new(addressfoCfNHi, addressY9F0a2s, {from: accounts[2]});
		const addressBteadLE = accounts[5]
		const uintI6WPx99 = BigInt("11")
		const addressX8AvMjo = accounts[0]
		const uintiadti3A = BigInt("687")
		const uintXdMMXTm = await StakingDextokenacBDwaV.getStartTimestamp.call({from: accounts[4]});
		const uinth93z7rB = await StakingDextokenacBDwaV.getClaimOf.call(addressBteadLE, {from: accounts[4]});
		const addressPYrDlKP = await StakingDextokenacBDwaV.capture.call(addressX8AvMjo, uintI6WPx99, {from: accounts[2]});
		const uintFz7gnfq = await StakingDextokenacBDwaV.deposit.call(uintiadti3A, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintXdMMXTm, BigInt("0"))
		assert.equal(uinth93z7rB, BigInt("0"))
		await expect(StakingDextokenacBDwaV.capture.call(addressX8AvMjo, uintI6WPx99, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})