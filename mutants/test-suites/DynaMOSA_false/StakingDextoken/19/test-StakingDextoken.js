const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressVQAWDJh = accounts[3]
		const addressbr8ZsUs = accounts[5]
		const StakingDextokenugzQD9P = await StakingDextoken.new(addressVQAWDJh, addressbr8ZsUs, {from: accounts[5]});
		const addressxoj5NWR = accounts[2]
		const addressDhxpUzg = "0x0000000000000000000000000000000000000001"
		const uintKHncBkF = BigInt("1355")
		const addressZFFKZrM = accounts[5]
//		const addressrZSmZSi = await StakingDextokenugzQD9P.notFrozen.call(addressxoj5NWR, {from: accounts[1]});
//		const uintKcdSAsR = await StakingDextokenugzQD9P.getWithdrawalOf.call(addressDhxpUzg, {from: accounts[1]});
//		const uintTZX6tuG = await StakingDextokenugzQD9P.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uintxb9JycE = await StakingDextokenugzQD9P.deposit.call(uintKHncBkF, {from: accounts[5]});
//		const addressGe7S2kN = await StakingDextokenugzQD9P.setBeneficial.call(addressZFFKZrM, {from: accounts[1]});

		await expect(StakingDextokenugzQD9P.notFrozen.call(addressxoj5NWR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressyCTGT7q = accounts[4]
		const addressPWx0iZB = accounts[3]
		const StakingDextokeniJlmxNq = await StakingDextoken.new(addressyCTGT7q, addressPWx0iZB, {from: accounts[5]});
		const addressap1kEid = "0x0000000000000000000000000000000000000001"
		const addressiiG09AS = accounts[4]
		const uintWnoFrRB = BigInt("900")
		const uintdk3L92v = BigInt("171")
		const uintVtjNdB5 = BigInt("1969")
		const uinttQNFZdk = BigInt("2004")
		const uinti7Z1bUp = await StakingDextokeniJlmxNq.getTotalStakes.call({from: accounts[2]});
		const uintcqZNXgP = await StakingDextokeniJlmxNq.rewardOf.call(addressap1kEid, {from: accounts[1]});
		const uintoKgOMcg = await StakingDextokeniJlmxNq.getWithdrawalOf.call(addressiiG09AS, {from: accounts[5]});
		const uintEmv8ND = await StakingDextokeniJlmxNq.setRewardRound.call(uinttQNFZdk, uintVtjNdB5, uintdk3L92v, uintWnoFrRB, {from: accounts[5]});
		const uintrC5RHqn = await StakingDextokeniJlmxNq.getEndTimestamp.call({from: accounts[2]});

		assert.equal(uintcqZNXgP, BigInt("0"))
		assert.equal(uinti7Z1bUp, BigInt("0"))
		assert.equal(uintoKgOMcg, BigInt("0"))
		assert.equal(uintrC5RHqn, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressZdkyMiQ = "0x0000000000000000000000000000000000000001"
		const addressZyMQGUo = accounts[4]
		const StakingDextokenIbqgoo = await StakingDextoken.new(addressZdkyMiQ, addressZyMQGUo, {from: accounts[2]});
		const addressvAJGdaG = accounts[4]
		const uintcIbOWY0 = BigInt("777")
		const addressC5sgFVh = accounts[0]
		const uintOYG7pjb = await StakingDextokenIbqgoo.getWithdrawalOf.call(addressvAJGdaG, {from: accounts[5]});
//		const addressNDiIl5Q = await StakingDextokenIbqgoo.capture.call(addressC5sgFVh, uintcIbOWY0, {from: accounts[5]});
//		const uintnvn0s4 = await StakingDextokenIbqgoo.getStartTimestamp.call({from: accounts[0]});
//		const uintJwdlb1U = await StakingDextokenIbqgoo.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uintOYG7pjb, BigInt("0"))
		await expect(StakingDextokenIbqgoo.capture.call(addressC5sgFVh, uintcIbOWY0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZuzJ9qj = accounts[4]
		const addressc2ND83D = accounts[2]
		const StakingDextokenZIUcbFb = await StakingDextoken.new(addressZuzJ9qj, addressc2ND83D, {from: "0x0000000000000000000000000000000000000001"});
		const addressJLipP77 = accounts[5]
		const addressBEUXyzK = accounts[0]
		const addressOBgHwBO = accounts[5]
		const uintWQCJARV = await StakingDextokenZIUcbFb.stakeOf.call(addressJLipP77, {from: accounts[4]});
		const uintkmDE39x = await StakingDextokenZIUcbFb.balanceOf.call(addressBEUXyzK, {from: "0x0000000000000000000000000000000000000001"});
		const boolQMwrm9 = await StakingDextokenZIUcbFb.unfreezeAccount.call(addressOBgHwBO, {from: accounts[4]});
	});

	it('test for StakingDextoken', async () => {
		const addressBRqvwXF = accounts[2]
		const addressTlCLRHy = accounts[4]
		const StakingDextokenXM4OsFS = await StakingDextoken.new(addressBRqvwXF, addressTlCLRHy, {from: accounts[5]});
		const addressySjmdhH = accounts[0]
		const uintPRG5Wxh = BigInt("392")
		const uintCfRCXgW = await StakingDextokenXM4OsFS.balanceOf.call(addressySjmdhH, {from: accounts[1]});
//		const uintBYxeRNP = await StakingDextokenXM4OsFS.withdraw.call(uintPRG5Wxh, {from: accounts[2]});
//		await StakingDextokenXM4OsFS.claim.call({from: accounts[4]});

		assert.equal(uintCfRCXgW, BigInt("0"))
		await expect(StakingDextokenXM4OsFS.withdraw.call(uintPRG5Wxh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbdydUNI = accounts[5]
		const addresszk48O3L = accounts[3]
		const StakingDextokenh9ZKGIk = await StakingDextoken.new(addressbdydUNI, addresszk48O3L, {from: accounts[3]});
		const addressBDL5h9k = accounts[5]
		const uintCttiN20 = await StakingDextokenh9ZKGIk.lastTimeRewardApplicable.call({from: accounts[1]});
		const uintLbIEpH3 = await StakingDextokenh9ZKGIk.getEndTimestamp.call({from: accounts[1]});
		const uintcx3GLqC = await StakingDextokenh9ZKGIk.remainingRewards.call({from: accounts[0]});
//		const addressSUIcUmn = await StakingDextokenh9ZKGIk.updateReward.call(addressBDL5h9k, {from: accounts[4]});
//		const uintjBNRNLb = await StakingDextokenh9ZKGIk.totalRewards.call({from: accounts[4]});

		assert.equal(uintCttiN20, BigInt("0"))
		assert.equal(uintLbIEpH3, BigInt("0"))
		assert.equal(uintcx3GLqC, BigInt("0"))
		await expect(StakingDextokenh9ZKGIk.updateReward.call(addressBDL5h9k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressh65POi = "0x0000000000000000000000000000000000000001"
		const addressbtjHKyC = accounts[5]
		const StakingDextokenFd08nEy = await StakingDextoken.new(addressh65POi, addressbtjHKyC, {from: accounts[5]});
		const addressMZhg1ed = accounts[0]
		const uintKSq9Kmn = BigInt("913")
		const uintrx5S3Bl = BigInt("443")
		const uintxx8TaUY = BigInt("709")
		const uintVyktMh5 = BigInt("1502")
		const uintI1Njdvl = await StakingDextokenFd08nEy.totalRewards.call({from: accounts[3]});
		const uintUehLFhB = await StakingDextokenFd08nEy.getTotalStakes.call({from: accounts[2]});
		const uintqklYKa = await StakingDextokenFd08nEy.rewardPerToken.call({from: accounts[5]});
		const uintDJ2kHHi = await StakingDextokenFd08nEy.getClaimOf.call(addressMZhg1ed, {from: accounts[0]});
//		const uintZnBgAbx = await StakingDextokenFd08nEy.setRewardRound.call(uintVyktMh5, uintxx8TaUY, uintrx5S3Bl, uintKSq9Kmn, {from: accounts[0]});
//		await StakingDextokenFd08nEy.claim.call({from: accounts[1]});

		assert.equal(uintDJ2kHHi, BigInt("0"))
		assert.equal(uintI1Njdvl, BigInt("0"))
		assert.equal(uintUehLFhB, BigInt("0"))
		assert.equal(uintqklYKa, BigInt("0"))
		await expect(StakingDextokenFd08nEy.setRewardRound.call(uintVyktMh5, uintxx8TaUY, uintrx5S3Bl, uintKSq9Kmn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPnQLkwZ = accounts[2]
		const addressfxzHLSd = accounts[4]
		const StakingDextokenXM4OsFS = await StakingDextoken.new(addressPnQLkwZ, addressfxzHLSd, {from: accounts[5]});
		const addressZL5qQtP = accounts[0]
		const uintCfRCXgW = await StakingDextokenXM4OsFS.balanceOf.call(addressZL5qQtP, {from: accounts[1]});
//		await StakingDextokenXM4OsFS.claim.call({from: accounts[4]});

		assert.equal(uintCfRCXgW, BigInt("0"))
		await expect(StakingDextokenXM4OsFS.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressRBHl14T = accounts[1]
		const addresselSOu4O = accounts[4]
		const StakingDextokeniWLm2mb = await StakingDextoken.new(addressRBHl14T, addresselSOu4O, {from: accounts[0]});
		const addressISX2Uaz = accounts[4]
		const uintITacUHB = BigInt("785")
		const uintvx2fUl7 = BigInt("46")
		const uintHiECvq0 = BigInt("1477")
		const uintwtgKwZ = BigInt("304")
		const uintCdcqoLU = await StakingDextokeniWLm2mb.stakeOf.call(addressISX2Uaz, {from: accounts[0]});
		const uintDrWR6gc = await StakingDextokeniWLm2mb.setRewardRound.call(uintwtgKwZ, uintHiECvq0, uintvx2fUl7, uintITacUHB, {from: accounts[0]});
		const uintVnwmG6e = await StakingDextokeniWLm2mb.totalRewards.call({from: accounts[4]});

		assert.equal(uintCdcqoLU, BigInt("0"))
		assert.equal(uintVnwmG6e, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressMyJHKcC = accounts[2]
		const addressJh26zL1 = accounts[4]
		const StakingDextokenXM4OsFS = await StakingDextoken.new(addressMyJHKcC, addressJh26zL1, {from: accounts[5]});
		const addressWdiwCCz = accounts[0]
		const addressNDkdcos = accounts[0]
		const addressK3ioo7w = await StakingDextokenXM4OsFS.setBeneficial.call(addressWdiwCCz, {from: accounts[5]});
		const uintCfRCXgW = await StakingDextokenXM4OsFS.balanceOf.call(addressNDkdcos, {from: accounts[1]});
//		await StakingDextokenXM4OsFS.claim.call({from: accounts[4]});

		assert.equal(uintCfRCXgW, BigInt("0"))
		await expect(StakingDextokenXM4OsFS.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressChnfWOu = accounts[2]
		const addressdQvpo40 = accounts[4]
		const StakingDextokenXM4OsFS = await StakingDextoken.new(addressChnfWOu, addressdQvpo40, {from: accounts[5]});
		const addressD6Xm5Na = accounts[1]
		const addresscyhQE73 = accounts[2]
		const uintX2OwKYW = BigInt("216")
		const uintSUGcqf = BigInt("392")
		const uintCfRCXgW = await StakingDextokenXM4OsFS.balanceOf.call(addressD6Xm5Na, {from: accounts[1]});
		const uintRcPXCzf = await StakingDextokenXM4OsFS.getWithdrawalOf.call(addresscyhQE73, {from: accounts[1]});
//		const uintI5FiZj0 = await StakingDextokenXM4OsFS.deposit.call(uintX2OwKYW, {from: accounts[4]});
//		const uintBYxeRNP = await StakingDextokenXM4OsFS.withdraw.call(uintSUGcqf, {from: accounts[2]});
//		await StakingDextokenXM4OsFS.claim.call({from: accounts[4]});

		assert.equal(uintCfRCXgW, BigInt("0"))
		assert.equal(uintRcPXCzf, BigInt("0"))
		await expect(StakingDextokenXM4OsFS.deposit.call(uintX2OwKYW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressz6m48Gk = accounts[4]
		const addresspk7s7K = accounts[3]
		const StakingDextokenf5pkgfw = await StakingDextoken.new(addressz6m48Gk, addresspk7s7K, {from: accounts[3]});
		const addressGu4eB4l = accounts[2]
		const uintbR408rM = BigInt("918")
		const uintgo40uws = BigInt("153")
		const uintaW1t99s = BigInt("600")
		const uintDRNOfbi = BigInt("357")
		const addressOIDnAmF = accounts[0]
		const uintRuYjYUR = await StakingDextokenf5pkgfw.getWithdrawalOf.call(addressGu4eB4l, {from: "0x0000000000000000000000000000000000000001"});
		const uintXF5E7bV = await StakingDextokenf5pkgfw.getStartTimestamp.call({from: accounts[3]});
//		const uintMXhGFwU = await StakingDextokenf5pkgfw.setRewardRound.call(uintDRNOfbi, uintaW1t99s, uintgo40uws, uintbR408rM, {from: accounts[4]});
//		const uintTVtxzWN = await StakingDextokenf5pkgfw.earned.call(addressOIDnAmF, {from: accounts[1]});

		assert.equal(uintRuYjYUR, BigInt("0"))
		assert.equal(uintXF5E7bV, BigInt("0"))
		await expect(StakingDextokenf5pkgfw.setRewardRound.call(uintDRNOfbi, uintaW1t99s, uintgo40uws, uintbR408rM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressamQQ8RE = "0x0000000000000000000000000000000000000001"
		const addressFMMzv8 = accounts[5]
		const StakingDextokenFd08nEy = await StakingDextoken.new(addressamQQ8RE, addressFMMzv8, {from: accounts[5]});
		const uintyqqo2Dw = BigInt("1925")
		const addressaKZ0f0D = accounts[0]
		const addressVlWHJ7S = accounts[1]
		const uintPe3UWWI = BigInt("1502")
		const addresszmOp0pS = accounts[4]
		const uintAAbTqrz = BigInt("913")
		const uintsvRRzIw = BigInt("443")
		const uintGKFygao = BigInt("709")
		const uintjTl4Dqc = BigInt("1502")
		const uintI1Njdvl = await StakingDextokenFd08nEy.totalRewards.call({from: accounts[3]});
//		const addressCASbrAg = await StakingDextokenFd08nEy.capture.call(addressaKZ0f0D, uintyqqo2Dw, {from: accounts[5]});
//		const boolLBLKXjW = await StakingDextokenFd08nEy.freezeAccount.call(addressVlWHJ7S, {from: accounts[2]});
//		const uintqklYKa = await StakingDextokenFd08nEy.rewardPerToken.call({from: accounts[5]});
//		const uintCYspDEq = await StakingDextokenFd08nEy.withdraw.call(uintPe3UWWI, {from: accounts[2]});
//		const uintDJ2kHHi = await StakingDextokenFd08nEy.getClaimOf.call(addresszmOp0pS, {from: accounts[0]});
//		const uintZnBgAbx = await StakingDextokenFd08nEy.setRewardRound.call(uintjTl4Dqc, uintGKFygao, uintsvRRzIw, uintAAbTqrz, {from: accounts[0]});
//		await StakingDextokenFd08nEy.claim.call({from: accounts[1]});

		assert.equal(uintI1Njdvl, BigInt("0"))
		await expect(StakingDextokenFd08nEy.capture.call(addressaKZ0f0D, uintyqqo2Dw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const address4fm5aA = accounts[1]
		const addressikTt6Xk = accounts[1]
		const StakingDextokenyoWHlEC = await StakingDextoken.new(address4fm5aA, addressikTt6Xk, {from: accounts[0]});
		const addressSDT0C5s = accounts[3]
		const addressrvwqUgl = accounts[4]
//		const boolwMj6Mfu = await StakingDextokenyoWHlEC.unfreezeAccount.call(addressSDT0C5s, {from: accounts[0]});
//		const uintRoZBmBj = await StakingDextokenyoWHlEC.stakeOf.call(addressrvwqUgl, {from: accounts[4]});
//		await StakingDextokenyoWHlEC.notifyRewards.call({from: accounts[2]});

		await expect(StakingDextokenyoWHlEC.unfreezeAccount.call(addressSDT0C5s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressuIV34bE = accounts[2]
		const addressXYc0U4 = accounts[4]
		const StakingDextokenXM4OsFS = await StakingDextoken.new(addressuIV34bE, addressXYc0U4, {from: accounts[5]});
		const uintPi9vyWj = BigInt("12")
		const addressF9afACf = accounts[2]
		const addressQ1o762Q = "0x0000000000000000000000000000000000000001"
		const addressP8cRdNP = accounts[5]
		const address6KENiH = accounts[4]
		const uintbr6AXGb = BigInt("392")
//		const addressaGCLate = await StakingDextokenXM4OsFS.capture.call(addressF9afACf, uintPi9vyWj, {from: accounts[5]});
//		const uinthQYtGcM = await StakingDextokenXM4OsFS.rewardOf.call(addressQ1o762Q, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAfQBqTy = await StakingDextokenXM4OsFS.freezeAccount.call(addressP8cRdNP, {from: accounts[0]});
//		const uintCfRCXgW = await StakingDextokenXM4OsFS.balanceOf.call(address6KENiH, {from: accounts[1]});
//		const uintBYxeRNP = await StakingDextokenXM4OsFS.withdraw.call(uintbr6AXGb, {from: accounts[2]});
//		await StakingDextokenXM4OsFS.claim.call({from: accounts[4]});

		await expect(StakingDextokenXM4OsFS.capture.call(addressF9afACf, uintPi9vyWj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressl7WZR7O = accounts[2]
		const addresssSCvEEs = accounts[4]
		const StakingDextokenXM4OsFS = await StakingDextoken.new(addressl7WZR7O, addresssSCvEEs, {from: accounts[5]});
		const addresseUh8NU7 = accounts[0]
		const addressOWS6J2D = "0x0000000000000000000000000000000000000001"
		const uintr4xCEaN = BigInt("337")
		const addressvDLCBIx = accounts[3]
		const addresspMbBcpi = accounts[3]
		const uintCfRCXgW = await StakingDextokenXM4OsFS.balanceOf.call(addresseUh8NU7, {from: accounts[1]});
		const boolyENx78t = await StakingDextokenXM4OsFS.freezeAccount.call(addressOWS6J2D, {from: accounts[5]});
//		const uintBYxeRNP = await StakingDextokenXM4OsFS.withdraw.call(uintr4xCEaN, {from: accounts[2]});
//		await StakingDextokenXM4OsFS.claim.call({from: accounts[4]});
//		const addressWqoHwHk = await StakingDextokenXM4OsFS.setBeneficial.call(addressvDLCBIx, {from: accounts[1]});
//		const uintj0V6PHp = await StakingDextokenXM4OsFS.getWithdrawalOf.call(addresspMbBcpi, {from: accounts[2]});

		assert.equal(boolyENx78t, true)
		assert.equal(uintCfRCXgW, BigInt("0"))
		await expect(StakingDextokenXM4OsFS.withdraw.call(uintr4xCEaN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})