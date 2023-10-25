const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addresscZ3R4f = accounts[4]
		const addressQbX19D = accounts[1]
		const StakingDextokenBc1q0f = await StakingDextoken.new(addresscZ3R4f, addressQbX19D, {from: accounts[2]});
		const addresswe2KNg8 = accounts[2]
		const addressInuwP2d = accounts[2]
		const addressQwdMJYO = accounts[4]
		const addressyZIgnUK = accounts[4]
		const uintJKGCNpn = await StakingDextokenBc1q0f.rewardOf.call(addresswe2KNg8, {from: accounts[2]});
//		const boolLdzNwzh = await StakingDextokenBc1q0f.unfreezeAccount.call(addressInuwP2d, {from: accounts[4]});
//		const uint7zIpRG = await StakingDextokenBc1q0f.balanceOf.call(addressQwdMJYO, {from: accounts[4]});
//		const booleHRubbT = await StakingDextokenBc1q0f.unfreezeAccount.call(addressyZIgnUK, {from: accounts[2]});
//		const uintZOP7Wn = await StakingDextokenBc1q0f.getTotalStakes.call({from: accounts[4]});

		assert.equal(uintJKGCNpn, BigInt("0"))
		await expect(StakingDextokenBc1q0f.unfreezeAccount.call(addressInuwP2d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressw6VyCAM = "0x0000000000000000000000000000000000000001"
		const addressz3NCko2 = accounts[2]
		const StakingDextokenY4v2po4 = await StakingDextoken.new(addressw6VyCAM, addressz3NCko2, {from: accounts[2]});
		const addressE1icOZ0 = accounts[1]
		const addressqkWrL7M = accounts[3]
		const addressY3V37Xw = accounts[2]
		const uinte7VIbyH = BigInt("1570")
		const addressHyZy7zx = accounts[1]
//		const addresso0g0oDY = await StakingDextokenY4v2po4.updateReward.call(addressE1icOZ0, {from: accounts[0]});
//		const uintzrL7Aly = await StakingDextokenY4v2po4.earned.call(addressqkWrL7M, {from: "0x0000000000000000000000000000000000000001"});
//		const uintIWazXLU = await StakingDextokenY4v2po4.earned.call(addressY3V37Xw, {from: accounts[1]});
//		const uintWWYBCp = await StakingDextokenY4v2po4.getStartTimestamp.call({from: accounts[0]});
//		const uintA8gJ8dO = await StakingDextokenY4v2po4.withdraw.call(uinte7VIbyH, {from: accounts[5]});
//		const uintSR28Kw = await StakingDextokenY4v2po4.getClaimOf.call(addressHyZy7zx, {from: accounts[4]});

		await expect(StakingDextokenY4v2po4.updateReward.call(addressE1icOZ0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressukoxEe = "0x0000000000000000000000000000000000000001"
		const addressyrEXTuN = accounts[4]
		const StakingDextokenlKZbc8I = await StakingDextoken.new(addressukoxEe, addressyrEXTuN, {from: accounts[2]});
		const addressaRzovmm = accounts[2]
		const addressfODk2Od = accounts[2]
		const addressKtKpsu9 = accounts[4]
		const uintH6Rwj8m = await StakingDextokenlKZbc8I.stakeOf.call(addressaRzovmm, {from: accounts[2]});
		const uintgTnPp0J = await StakingDextokenlKZbc8I.totalRewards.call({from: accounts[4]});
		const uintRYDzIwI = await StakingDextokenlKZbc8I.getEndTimestamp.call({from: accounts[2]});
		const uinti5ewuEo = await StakingDextokenlKZbc8I.rewardPerToken.call({from: accounts[3]});
//		const addressqZ8eqQo = await StakingDextokenlKZbc8I.updateReward.call(addressfODk2Od, {from: accounts[3]});
//		const addressX0lODDK = await StakingDextokenlKZbc8I.setBeneficial.call(addressKtKpsu9, {from: accounts[5]});

		assert.equal(uintH6Rwj8m, BigInt("0"))
		assert.equal(uintRYDzIwI, BigInt("0"))
		assert.equal(uintgTnPp0J, BigInt("0"))
		assert.equal(uinti5ewuEo, BigInt("0"))
		await expect(StakingDextokenlKZbc8I.updateReward.call(addressfODk2Od, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressgqlkmMf = accounts[5]
		const addressgBrQipA = "0x0000000000000000000000000000000000000001"
		const StakingDextokenEEnrWid = await StakingDextoken.new(addressgqlkmMf, addressgBrQipA, {from: accounts[0]});
		const addressqRhcdp = accounts[3]
		const addresszc7nTxE = accounts[3]
		const addressi8nW44e = accounts[3]
		const addressZcr7crG = accounts[4]
		const boolhKgxfqF = await StakingDextokenEEnrWid.freezeAccount.call(addressqRhcdp, {from: accounts[0]});
		const uintmICN5MP = await StakingDextokenEEnrWid.getTotalStakes.call({from: accounts[4]});
		const uintunuAaeY = await StakingDextokenEEnrWid.getWithdrawalOf.call(addresszc7nTxE, {from: accounts[2]});
		const uint6heygJ = await StakingDextokenEEnrWid.rewardOf.call(addressi8nW44e, {from: accounts[0]});
		const uintKFkduuy = await StakingDextokenEEnrWid.getWithdrawalOf.call(addressZcr7crG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolhKgxfqF, true)
		assert.equal(uint6heygJ, BigInt("0"))
		assert.equal(uintKFkduuy, BigInt("0"))
		assert.equal(uintmICN5MP, BigInt("0"))
		assert.equal(uintunuAaeY, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressWYHAIC8 = "0x0000000000000000000000000000000000000001"
		const addressphdw0Ik = accounts[2]
		const StakingDextokenE8xSl8h = await StakingDextoken.new(addressWYHAIC8, addressphdw0Ik, {from: accounts[0]});
		const uintLZMqlFI = BigInt("1578")
		const addressfqI2yM = accounts[2]
		const addressaXD5S3 = accounts[0]
		const uintaEb6fZR = await StakingDextokenE8xSl8h.totalRewards.call({from: accounts[4]});
		const uintd3BBKt0 = await StakingDextokenE8xSl8h.getEndTimestamp.call({from: accounts[1]});
//		const uintFYuqEv2 = await StakingDextokenE8xSl8h.deposit.call(uintLZMqlFI, {from: accounts[2]});
//		const uintyyDdnL4 = await StakingDextokenE8xSl8h.stakeOf.call(addressfqI2yM, {from: accounts[2]});
//		const addressz52KCjY = await StakingDextokenE8xSl8h.updateReward.call(addressaXD5S3, {from: accounts[2]});
//		await StakingDextokenE8xSl8h.claim.call({from: accounts[4]});

		assert.equal(uintaEb6fZR, BigInt("0"))
		assert.equal(uintd3BBKt0, BigInt("0"))
		await expect(StakingDextokenE8xSl8h.deposit.call(uintLZMqlFI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressMdKmEUY = accounts[0]
		const addressEmcnhir = accounts[5]
		const StakingDextokenXVQyl5X = await StakingDextoken.new(addressMdKmEUY, addressEmcnhir, {from: accounts[2]});
		const addressmX3nTY5 = accounts[0]
		const addressabGqCW6 = accounts[2]
		const uintRdxoK2p = await StakingDextokenXVQyl5X.earned.call(addressmX3nTY5, {from: accounts[4]});
		const uintDeAtMqm = await StakingDextokenXVQyl5X.getEndTimestamp.call({from: accounts[1]});
//		await StakingDextokenXVQyl5X.notifyRewards.call({from: accounts[2]});
//		const uintLo4x3xY = await StakingDextokenXVQyl5X.getTotalStakes.call({from: accounts[3]});
//		const uintLyKhuzk = await StakingDextokenXVQyl5X.getWithdrawalOf.call(addressabGqCW6, {from: accounts[4]});

		assert.equal(uintDeAtMqm, BigInt("0"))
		assert.equal(uintRdxoK2p, BigInt("0"))
		await expect(StakingDextokenXVQyl5X.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAn3Fb5q = accounts[4]
		const addressFEc0P4b = accounts[3]
		const StakingDextokengt7ooT0 = await StakingDextoken.new(addressAn3Fb5q, addressFEc0P4b, {from: accounts[4]});
		const uintFwwzRut = BigInt("1184")
		const uintxwFh0QG = await StakingDextokengt7ooT0.getEndTimestamp.call({from: accounts[4]});
//		const uintFGC3ETZ = await StakingDextokengt7ooT0.withdraw.call(uintFwwzRut, {from: accounts[1]});
//		await StakingDextokengt7ooT0.notifyRewards.call({from: accounts[3]});
//		const uintAddGM4O = await StakingDextokengt7ooT0.rewardPerToken.call({from: accounts[3]});
//		const uintpBgQ3T = await StakingDextokengt7ooT0.totalRewards.call({from: accounts[2]});

		assert.equal(uintxwFh0QG, BigInt("0"))
		await expect(StakingDextokengt7ooT0.withdraw.call(uintFwwzRut, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstsqwYKo = accounts[0]
		const addressbr1my2A = accounts[5]
		const StakingDextokenXVQyl5X = await StakingDextoken.new(addresstsqwYKo, addressbr1my2A, {from: accounts[2]});
		const addressUbUEh0h = accounts[0]
		const uintctZhAp4 = BigInt("612")
		const addressrQrOM8x = accounts[2]
		const uintRdxoK2p = await StakingDextokenXVQyl5X.earned.call(addressUbUEh0h, {from: accounts[4]});
		const uintDeAtMqm = await StakingDextokenXVQyl5X.getEndTimestamp.call({from: accounts[1]});
		const uintCzWELrp = await StakingDextokenXVQyl5X.getStartTimestamp.call({from: accounts[2]});
//		await StakingDextokenXVQyl5X.notifyRewards.call({from: accounts[2]});
//		const uintdsnAzSY = await StakingDextokenXVQyl5X.withdraw.call(uintctZhAp4, {from: accounts[4]});
//		const uintLo4x3xY = await StakingDextokenXVQyl5X.getTotalStakes.call({from: accounts[3]});
//		const uintLyKhuzk = await StakingDextokenXVQyl5X.getWithdrawalOf.call(addressrQrOM8x, {from: accounts[4]});

		assert.equal(uintCzWELrp, BigInt("0"))
		assert.equal(uintDeAtMqm, BigInt("0"))
		assert.equal(uintRdxoK2p, BigInt("0"))
		await expect(StakingDextokenXVQyl5X.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZcs2R5 = accounts[0]
		const addressZSkvrK = accounts[5]
		const StakingDextokenXVQyl5X = await StakingDextoken.new(addressZcs2R5, addressZSkvrK, {from: accounts[2]});
		const addressaw5zdrN = accounts[0]
		const uintRdxoK2p = await StakingDextokenXVQyl5X.earned.call(addressaw5zdrN, {from: accounts[4]});
		const uintDeAtMqm = await StakingDextokenXVQyl5X.getEndTimestamp.call({from: accounts[1]});
//		await StakingDextokenXVQyl5X.notifyRewards.call({from: accounts[2]});
//		const uintenKTJbH = await StakingDextokenXVQyl5X.remainingRewards.call({from: accounts[4]});
//		const uintLo4x3xY = await StakingDextokenXVQyl5X.getTotalStakes.call({from: accounts[3]});

		assert.equal(uintDeAtMqm, BigInt("0"))
		assert.equal(uintRdxoK2p, BigInt("0"))
		await expect(StakingDextokenXVQyl5X.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfAOjpbk = accounts[0]
		const addressyT1XMYv = accounts[2]
		const StakingDextokenU7M12cp = await StakingDextoken.new(addressfAOjpbk, addressyT1XMYv, {from: accounts[2]});
		const addressGLdrBaw = accounts[2]
		const uintoetvdf = BigInt("1627")
		const uintDIy7s9Y = BigInt("654")
		const addressDtXQdzC = accounts[2]
		const uintQvcZZ2L = await StakingDextokenU7M12cp.getClaimOf.call(addressGLdrBaw, {from: accounts[1]});
		const uintnjP2PVr = await StakingDextokenU7M12cp.getEndTimestamp.call({from: accounts[2]});
//		const uintjA5hpTO = await StakingDextokenU7M12cp.withdraw.call(uintoetvdf, {from: accounts[4]});
//		const uintHIlNrBs = await StakingDextokenU7M12cp.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintbbkELTf = await StakingDextokenU7M12cp.deposit.call(uintDIy7s9Y, {from: accounts[3]});
//		const uintAiLtEJ2 = await StakingDextokenU7M12cp.stakeOf.call(addressDtXQdzC, {from: accounts[0]});

		assert.equal(uintQvcZZ2L, BigInt("0"))
		assert.equal(uintnjP2PVr, BigInt("0"))
		await expect(StakingDextokenU7M12cp.withdraw.call(uintoetvdf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWHrUocD = accounts[4]
		const addressD9GFCj = accounts[3]
		const StakingDextokengt7ooT0 = await StakingDextoken.new(addressWHrUocD, addressD9GFCj, {from: accounts[4]});
		const addressKlSjFy8 = accounts[3]
		const uintr1jfdYd = await StakingDextokengt7ooT0.getWithdrawalOf.call(addressKlSjFy8, {from: accounts[2]});
//		await StakingDextokengt7ooT0.claim.call({from: accounts[1]});
//		const uintpBgQ3T = await StakingDextokengt7ooT0.totalRewards.call({from: accounts[2]});

		assert.equal(uintr1jfdYd, BigInt("0"))
		await expect(StakingDextokengt7ooT0.claim.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressrolh7Oy = accounts[0]
		const addressZ8bDNG3 = accounts[5]
		const StakingDextokenXVQyl5X = await StakingDextoken.new(addressrolh7Oy, addressZ8bDNG3, {from: accounts[2]});
		const addressJlt7HeM = accounts[0]
		const uintt2OENaD = BigInt("305")
		const uintq7AMrbK = BigInt("1447")
		const uintP0ZAYuM = BigInt("1086")
		const uintpbzeClB = BigInt("236")
		const addressBXVQoM = accounts[2]
		const uintRdxoK2p = await StakingDextokenXVQyl5X.earned.call(addressJlt7HeM, {from: accounts[4]});
//		const uintnA0tJ3S = await StakingDextokenXVQyl5X.setRewardRound.call(uintpbzeClB, uintP0ZAYuM, uintq7AMrbK, uintt2OENaD, {from: accounts[2]});
//		await StakingDextokenXVQyl5X.notifyRewards.call({from: accounts[2]});
//		const uintLo4x3xY = await StakingDextokenXVQyl5X.getTotalStakes.call({from: accounts[3]});
//		const uintLyKhuzk = await StakingDextokenXVQyl5X.getWithdrawalOf.call(addressBXVQoM, {from: accounts[4]});

		assert.equal(uintRdxoK2p, BigInt("0"))
		await expect(StakingDextokenXVQyl5X.setRewardRound.call(uintpbzeClB, uintP0ZAYuM, uintq7AMrbK, uintt2OENaD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZkX2vU = accounts[3]
		const addressVnLNRoR = accounts[3]
		const StakingDextokensKzbJU1 = await StakingDextoken.new(addressZkX2vU, addressVnLNRoR, {from: accounts[0]});
		const addressgCB6Z70 = accounts[0]
		const addressVJU3tl = accounts[1]
		const uintHD1D5c3 = await StakingDextokensKzbJU1.getTotalStakes.call({from: accounts[3]});
//		const boole2TXZTp = await StakingDextokensKzbJU1.unfreezeAccount.call(addressgCB6Z70, {from: accounts[0]});
//		const uintUuEkbIV = await StakingDextokensKzbJU1.stakeOf.call(addressVJU3tl, {from: accounts[2]});
//		const uintsOs378f = await StakingDextokensKzbJU1.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintHD1D5c3, BigInt("0"))
		await expect(StakingDextokensKzbJU1.unfreezeAccount.call(addressgCB6Z70, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshW3XP4J = accounts[4]
		const addressKrOL224 = accounts[3]
		const StakingDextokengt7ooT0 = await StakingDextoken.new(addresshW3XP4J, addressKrOL224, {from: accounts[4]});
		const addressKo9DZFW = accounts[1]
		const uintqH5O2S1 = BigInt("203")
		const uintuu6VYuV = BigInt("1951")
		const uintmqcQHBI = BigInt("1700")
		const uint0CK9Qg = BigInt("89")
		const addressJveDIeb = await StakingDextokengt7ooT0.setBeneficial.call(addressKo9DZFW, {from: accounts[4]});
//		const uintvvlb27 = await StakingDextokengt7ooT0.setRewardRound.call(uint0CK9Qg, uintmqcQHBI, uintuu6VYuV, uintqH5O2S1, {from: accounts[3]});
//		const uintAddGM4O = await StakingDextokengt7ooT0.rewardPerToken.call({from: accounts[3]});

		await expect(StakingDextokengt7ooT0.setRewardRound.call(uint0CK9Qg, uintmqcQHBI, uintuu6VYuV, uintqH5O2S1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressXsUxcO = accounts[1]
		const addressAorMK0D = accounts[0]
		const StakingDextokenHar5CUG = await StakingDextoken.new(addressXsUxcO, addressAorMK0D, {from: "0x0000000000000000000000000000000000000001"});
		const uintjHG2Hlw = BigInt("406")
		const uint5ZVNF5 = BigInt("163")
		const uintJlFwIri = BigInt("1998")
		const uintn6b0um = BigInt("69")
		const uintkBBCjKL = BigInt("1720")
		const uintxXAdsUs = BigInt("1313")
		const uintGFaF1n0 = BigInt("1202")
		const uintLv7BpP = BigInt("196")
		const uintHu0XZES = BigInt("1567")
		await StakingDextokenHar5CUG.notifyRewards.call({from: accounts[3]});
		const uintBw3VL9Z = await StakingDextokenHar5CUG.withdraw.call(uintjHG2Hlw, {from: accounts[3]});
		const uintlzDIUaK = await StakingDextokenHar5CUG.setRewardRound.call(uintkBBCjKL, uintn6b0um, uintJlFwIri, uint5ZVNF5, {from: accounts[4]});
		const uintnH6rZW = await StakingDextokenHar5CUG.lastTimeRewardApplicable.call({from: accounts[4]});
		const uintK9eEysp = await StakingDextokenHar5CUG.setRewardRound.call(uintHu0XZES, uintLv7BpP, uintGFaF1n0, uintxXAdsUs, {from: accounts[0]});
		const uintstc0rrp = await StakingDextokenHar5CUG.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const addressAg30cLU = accounts[0]
		const addressmitoiwh = accounts[5]
		const StakingDextokenXVQyl5X = await StakingDextoken.new(addressAg30cLU, addressmitoiwh, {from: accounts[2]});
		const addressDMnnwLe = accounts[0]
		const uintOMDXurO = BigInt("1432")
		const addressAVGEsev = accounts[4]
		const uintuurSDU = BigInt("612")
		const addressOTS2gx = accounts[4]
		const uintRdxoK2p = await StakingDextokenXVQyl5X.earned.call(addressDMnnwLe, {from: accounts[4]});
		const uintDeAtMqm = await StakingDextokenXVQyl5X.getEndTimestamp.call({from: accounts[1]});
		const uintCzWELrp = await StakingDextokenXVQyl5X.getStartTimestamp.call({from: accounts[2]});
		const uintUEBStJO = await StakingDextokenXVQyl5X.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addressUlt1g6m = await StakingDextokenXVQyl5X.capture.call(addressAVGEsev, uintOMDXurO, {from: accounts[2]});
//		await StakingDextokenXVQyl5X.notifyRewards.call({from: accounts[2]});
//		const uintdsnAzSY = await StakingDextokenXVQyl5X.withdraw.call(uintuurSDU, {from: accounts[4]});
//		const uintLo4x3xY = await StakingDextokenXVQyl5X.getTotalStakes.call({from: accounts[3]});
//		const uintLyKhuzk = await StakingDextokenXVQyl5X.getWithdrawalOf.call(addressOTS2gx, {from: accounts[4]});

		assert.equal(uintCzWELrp, BigInt("0"))
		assert.equal(uintDeAtMqm, BigInt("0"))
		assert.equal(uintRdxoK2p, BigInt("0"))
		assert.equal(uintUEBStJO, BigInt("0"))
		await expect(StakingDextokenXVQyl5X.capture.call(addressAVGEsev, uintOMDXurO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWUVH33P = accounts[0]
		const addressIDbtBca = accounts[5]
		const StakingDextokenXVQyl5X = await StakingDextoken.new(addressWUVH33P, addressIDbtBca, {from: accounts[2]});
		const addressk87b3zM = accounts[0]
		const uintWbyW6sD = BigInt("1432")
		const addressOBFVXqA = accounts[0]
		const uintNYbN28h = BigInt("612")
		const addresszL2FW0F = accounts[4]
		const uintRdxoK2p = await StakingDextokenXVQyl5X.earned.call(addressk87b3zM, {from: accounts[4]});
		const uintDeAtMqm = await StakingDextokenXVQyl5X.getEndTimestamp.call({from: accounts[1]});
		const uintCzWELrp = await StakingDextokenXVQyl5X.getStartTimestamp.call({from: accounts[2]});
		const uintUEBStJO = await StakingDextokenXVQyl5X.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addressUlt1g6m = await StakingDextokenXVQyl5X.capture.call(addressOBFVXqA, uintWbyW6sD, {from: accounts[2]});
//		const uintdsnAzSY = await StakingDextokenXVQyl5X.withdraw.call(uintNYbN28h, {from: accounts[4]});
//		const uintLo4x3xY = await StakingDextokenXVQyl5X.getTotalStakes.call({from: accounts[3]});
//		const uintLyKhuzk = await StakingDextokenXVQyl5X.getWithdrawalOf.call(addresszL2FW0F, {from: accounts[4]});

		assert.equal(uintCzWELrp, BigInt("0"))
		assert.equal(uintDeAtMqm, BigInt("0"))
		assert.equal(uintRdxoK2p, BigInt("0"))
		assert.equal(uintUEBStJO, BigInt("0"))
		await expect(StakingDextokenXVQyl5X.capture.call(addressOBFVXqA, uintWbyW6sD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAzn4wb = accounts[0]
		const addressnbQgZVe = accounts[5]
		const StakingDextokenXVQyl5X = await StakingDextoken.new(addressAzn4wb, addressnbQgZVe, {from: accounts[2]});
		const addressXXcaJMX = accounts[0]
		const address8Bs4e5 = "0x00000000000000000000000000000000000000-1"
		const uintjUjppg5 = BigInt("1043")
		const uinty3ra5X = BigInt("1432")
		const address5c6gUr = accounts[3]
		const addresssYkgf5k = accounts[4]
		const uintRdxoK2p = await StakingDextokenXVQyl5X.earned.call(addressXXcaJMX, {from: accounts[4]});
//		const uintqQDqoCT = await StakingDextokenXVQyl5X.rewardOf.call(address8Bs4e5, {from: accounts[3]});
//		const uintCzWELrp = await StakingDextokenXVQyl5X.getStartTimestamp.call({from: accounts[2]});
//		const uintyz1ShRF = await StakingDextokenXVQyl5X.withdraw.call(uintjUjppg5, {from: accounts[2]});
//		const uintUEBStJO = await StakingDextokenXVQyl5X.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addressUlt1g6m = await StakingDextokenXVQyl5X.capture.call(address5c6gUr, uinty3ra5X, {from: accounts[2]});
//		const uintLyKhuzk = await StakingDextokenXVQyl5X.getWithdrawalOf.call(addresssYkgf5k, {from: accounts[4]});

		assert.equal(uintRdxoK2p, BigInt("0"))
		await expect(StakingDextokenXVQyl5X.rewardOf.call(address8Bs4e5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYLyIKJG = accounts[0]
		const addresskYoG0xN = accounts[5]
		const StakingDextokenXVQyl5X = await StakingDextoken.new(addressYLyIKJG, addresskYoG0xN, {from: accounts[2]});
		const addressodTckXq = accounts[5]
		const uintdvtLtcX = BigInt("1432")
		const addresse5lPJ2D = accounts[5]
		const uintRdxoK2p = await StakingDextokenXVQyl5X.earned.call(addressodTckXq, {from: accounts[4]});
//		const addressUlt1g6m = await StakingDextokenXVQyl5X.capture.call(addresse5lPJ2D, uintdvtLtcX, {from: accounts[2]});

		assert.equal(uintRdxoK2p, BigInt("0"))
		await expect(StakingDextokenXVQyl5X.capture.call(addresse5lPJ2D, uintdvtLtcX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})