const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressOBJtlz8 = accounts[3]
		const addressnCrrWST = accounts[1]
		const StakingDextokenfjFu4Nu = await StakingDextoken.new(addressOBJtlz8, addressnCrrWST, {from: accounts[0]});
		const uintQWDvoc7 = BigInt("1211")
		const uintzMpNp2 = await StakingDextokenfjFu4Nu.withdraw.call(uintQWDvoc7, {from: accounts[1]});
		const uintrSxxxuh = await StakingDextokenfjFu4Nu.totalRewards.call({from: accounts[1]});
		const uintPXCmEsZ = await StakingDextokenfjFu4Nu.rewardPerToken.call({from: accounts[1]});

		await expect(StakingDextokenfjFu4Nu.withdraw.call(uintQWDvoc7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresso2nD4j = accounts[5]
		const addressrAHx99x = accounts[0]
		const StakingDextokenEZUYYPG = await StakingDextoken.new(addresso2nD4j, addressrAHx99x, {from: accounts[5]});
		const addressx2BOfRz = accounts[2]
		const uintW9biiRh = BigInt("618")
		const addresseACKTyp = accounts[0]
		const uintW5ulb4G = await StakingDextokenEZUYYPG.getWithdrawalOf.call(addressx2BOfRz, {from: accounts[3]});
		const addressV1krNdu = await StakingDextokenEZUYYPG.capture.call(addresseACKTyp, uintW9biiRh, {from: accounts[0]});

		assert.equal(uintW5ulb4G, BigInt("0"))
		await expect(StakingDextokenEZUYYPG.capture.call(addresseACKTyp, uintW9biiRh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVJNPOuY = accounts[5]
		const addressjmP7tO1 = accounts[4]
		const StakingDextokenX7FmROA = await StakingDextoken.new(addressVJNPOuY, addressjmP7tO1, {from: accounts[1]});
		const addressMxW1clL = accounts[3]
		const addressNoUjt9 = accounts[3]
		const uintRxtBZBn = await StakingDextokenX7FmROA.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressBpsjbL = await StakingDextokenX7FmROA.setBeneficial.call(addressMxW1clL, {from: accounts[1]});
		const uintm7ibEoQ = await StakingDextokenX7FmROA.getStartTimestamp.call({from: accounts[4]});
		const uintgxr9mM7 = await StakingDextokenX7FmROA.stakeOf.call(addressNoUjt9, {from: accounts[4]});
		const uinthn8iod = await StakingDextokenX7FmROA.getEndTimestamp.call({from: accounts[4]});
		const uintx1U5kIp = await StakingDextokenX7FmROA.getStartTimestamp.call({from: accounts[0]});

		assert.equal(uintRxtBZBn, BigInt("0"))
		assert.equal(uintgxr9mM7, BigInt("0"))
		assert.equal(uinthn8iod, BigInt("0"))
		assert.equal(uintm7ibEoQ, BigInt("0"))
		assert.equal(uintx1U5kIp, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressPi5TWwI = accounts[4]
		const addressWhtYyiW = accounts[0]
		const StakingDextokenzhKSuCk = await StakingDextoken.new(addressPi5TWwI, addressWhtYyiW, {from: accounts[0]});
		const addressMcBo2rT = accounts[4]
		const uintSKewA69 = BigInt("1012")
		const uintPs5vsRL = await StakingDextokenzhKSuCk.earned.call(addressMcBo2rT, {from: accounts[5]});
		const uintqGcGn7h = await StakingDextokenzhKSuCk.deposit.call(uintSKewA69, {from: accounts[2]});

		assert.equal(uintPs5vsRL, BigInt("0"))
		await expect(StakingDextokenzhKSuCk.deposit.call(uintSKewA69, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxBlhnO5 = accounts[0]
		const addresspXFyK2i = accounts[0]
		const StakingDextokenSy9Rbii = await StakingDextoken.new(addressxBlhnO5, addresspXFyK2i, {from: accounts[3]});
		const addressDbPTaN4 = accounts[1]
		const addressjARep0j = accounts[0]
		const uintFya1B49 = BigInt("517")
		const addressti1357 = accounts[2]
		const addressvW15Fdy = accounts[1]
		const uintEst6ozC = await StakingDextokenSy9Rbii.rewardPerToken.call({from: accounts[4]});
		const uintEDAdq6V = await StakingDextokenSy9Rbii.getClaimOf.call(addressDbPTaN4, {from: accounts[1]});
		const uintTF8oI1L = await StakingDextokenSy9Rbii.getClaimOf.call(addressjARep0j, {from: accounts[5]});
		const uintu0YjFpB = await StakingDextokenSy9Rbii.withdraw.call(uintFya1B49, {from: accounts[1]});
		const addressg4El49f = await StakingDextokenSy9Rbii.updateReward.call(addressti1357, {from: accounts[4]});
		const uintfTJdNA = await StakingDextokenSy9Rbii.getClaimOf.call(addressvW15Fdy, {from: accounts[3]});

		assert.equal(uintEDAdq6V, BigInt("0"))
		assert.equal(uintEst6ozC, BigInt("0"))
		assert.equal(uintTF8oI1L, BigInt("0"))
		await expect(StakingDextokenSy9Rbii.withdraw.call(uintFya1B49, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressg8DEIi = accounts[4]
		const addressM3H3oFP = accounts[0]
		const StakingDextokenWL34RAF = await StakingDextoken.new(addressg8DEIi, addressM3H3oFP, {from: accounts[3]});
		const addressTX2HgHk = accounts[1]
		const addressH41iMXd = "0x0000000000000000000000000000000000000001"
		const addressBXVcMYU = "0x0000000000000000000000000000000000000001"
		const addressvDQhm2 = await StakingDextokenWL34RAF.notFrozen.call(addressTX2HgHk, {from: accounts[2]});
		const addressLJnXiV1 = await StakingDextokenWL34RAF.notFrozen.call(addressH41iMXd, {from: accounts[1]});
		const uinti9oeRb = await StakingDextokenWL34RAF.stakeOf.call(addressBXVcMYU, {from: accounts[1]});

		await expect(StakingDextokenWL34RAF.notFrozen.call(addressTX2HgHk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressdT9tM1T = accounts[4]
		const addresscNQiXuV = "0x0000000000000000000000000000000000000001"
		const StakingDextokenNhgLcYk = await StakingDextoken.new(addressdT9tM1T, addresscNQiXuV, {from: "0x0000000000000000000000000000000000000001"});
		const uintCtFZSYc = BigInt("718")
		const uintJF9BRpm = BigInt("590")
		const uintehuD4Wg = BigInt("320")
		const uintNKmTPJL = BigInt("821")
		const addressvETH6SC = accounts[5]
		const uintUEXIYBB = await StakingDextokenNhgLcYk.setRewardRound.call(uintNKmTPJL, uintehuD4Wg, uintJF9BRpm, uintCtFZSYc, {from: accounts[3]});
		const uintWUim80c = await StakingDextokenNhgLcYk.rewardOf.call(addressvETH6SC, {from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const addressdPAZ01O = accounts[4]
		const addressfeOjSf6 = accounts[0]
		const StakingDextokenzhKSuCk = await StakingDextoken.new(addressdPAZ01O, addressfeOjSf6, {from: accounts[0]});
		const addressewfpTQW = accounts[1]
		const uintPs5vsRL = await StakingDextokenzhKSuCk.earned.call(addressewfpTQW, {from: accounts[5]});
		const uintFbTl0S = await StakingDextokenzhKSuCk.totalRewards.call({from: accounts[5]});

		assert.equal(uintFbTl0S, BigInt("0"))
		assert.equal(uintPs5vsRL, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressOOXfb3r = accounts[3]
		const addressw0PAsUF = accounts[1]
		const StakingDextokenfjFu4Nu = await StakingDextoken.new(addressOOXfb3r, addressw0PAsUF, {from: accounts[0]});
		const uintF0auvXv = BigInt("1928")
		await StakingDextokenfjFu4Nu.claim.call({from: accounts[4]});
		const uintzMpNp2 = await StakingDextokenfjFu4Nu.withdraw.call(uintF0auvXv, {from: accounts[1]});
		const uintPXCmEsZ = await StakingDextokenfjFu4Nu.rewardPerToken.call({from: accounts[1]});

		await expect(StakingDextokenfjFu4Nu.claim.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressadEKZS3 = accounts[0]
		const addressksEm0Ck = accounts[4]
		const StakingDextokenSzcC0Zy = await StakingDextoken.new(addressadEKZS3, addressksEm0Ck, {from: accounts[5]});
		const addressK20fAFS = accounts[4]
		const addressD3ROkW4 = accounts[4]
		const uintg1XPlfN = await StakingDextokenSzcC0Zy.getWithdrawalOf.call(addressK20fAFS, {from: accounts[4]});
		const uintOABbPpk = await StakingDextokenSzcC0Zy.lastTimeRewardApplicable.call({from: accounts[4]});
		const uintR4U1r9Q = await StakingDextokenSzcC0Zy.remainingRewards.call({from: accounts[0]});
		const uintbqP1qlO = await StakingDextokenSzcC0Zy.earned.call(addressD3ROkW4, {from: accounts[5]});

		assert.equal(uintOABbPpk, BigInt("0"))
		assert.equal(uintR4U1r9Q, BigInt("0"))
		assert.equal(uintbqP1qlO, BigInt("0"))
		assert.equal(uintg1XPlfN, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresszxvHHc = accounts[4]
		const addressFigesVF = accounts[0]
		const StakingDextokenMFVr9Zu = await StakingDextoken.new(addresszxvHHc, addressFigesVF, {from: accounts[3]});
		const addressfD6KTib = accounts[3]
		const addressTVcRTe = accounts[5]
		const addressttAFEiX = accounts[4]
		const uintP2NBSoT = await StakingDextokenMFVr9Zu.rewardOf.call(addressfD6KTib, {from: accounts[1]});
		const boolwSbYXJl = await StakingDextokenMFVr9Zu.freezeAccount.call(addressTVcRTe, {from: accounts[3]});
		const uintv1S7NNo = await StakingDextokenMFVr9Zu.rewardOf.call(addressttAFEiX, {from: accounts[1]});
		await StakingDextokenMFVr9Zu.notifyRewards.call({from: accounts[2]});

		assert.equal(boolwSbYXJl, true)
		assert.equal(uintP2NBSoT, BigInt("0"))
		assert.equal(uintv1S7NNo, BigInt("0"))
		await expect(StakingDextokenMFVr9Zu.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressSVZ5Gyk = "0x0000000000000000000000000000000000000001"
		const addressevrtJb = accounts[4]
		const StakingDextokenBP4Xc6s = await StakingDextoken.new(addressSVZ5Gyk, addressevrtJb, {from: accounts[2]});
		const uinte0Ra5ca = BigInt("2046")
		const addressOVuzEEQ = accounts[5]
		const addresszysy7C2 = accounts[0]
		const addressubkyQM4 = accounts[5]
		const uintPXlgqpy = BigInt("1707")
		const addressI9qSd53 = await StakingDextokenBP4Xc6s.capture.call(addressOVuzEEQ, uinte0Ra5ca, {from: accounts[2]});
		const uintFuVAwoT = await StakingDextokenBP4Xc6s.lastTimeRewardApplicable.call({from: accounts[2]});
		const uintVVoU6oJ = await StakingDextokenBP4Xc6s.earned.call(addresszysy7C2, {from: accounts[3]});
		const uintoP37poT = await StakingDextokenBP4Xc6s.rewardOf.call(addressubkyQM4, {from: "0x0000000000000000000000000000000000000001"});
		const uintKNrDeM = await StakingDextokenBP4Xc6s.totalRewards.call({from: accounts[4]});
		const uintQtw3RX = await StakingDextokenBP4Xc6s.withdraw.call(uintPXlgqpy, {from: accounts[3]});

		await expect(StakingDextokenBP4Xc6s.capture.call(addressOVuzEEQ, uinte0Ra5ca, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressQZzW2d = accounts[3]
		const addressmcPRrMh = accounts[1]
		const StakingDextokenfjFu4Nu = await StakingDextoken.new(addressQZzW2d, addressmcPRrMh, {from: accounts[0]});
		const uintm1j9sp = await StakingDextokenfjFu4Nu.getTotalStakes.call({from: "0x0000000000000000000000000000000000000001"});
		const uintPXCmEsZ = await StakingDextokenfjFu4Nu.rewardPerToken.call({from: accounts[1]});
		await StakingDextokenfjFu4Nu.notifyRewards.call({from: accounts[0]});
		await StakingDextokenfjFu4Nu.claim.call({from: accounts[3]});

		assert.equal(uintPXCmEsZ, BigInt("0"))
		assert.equal(uintm1j9sp, BigInt("0"))
		await expect(StakingDextokenfjFu4Nu.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbsVnND2 = accounts[1]
		const addressguHTjmk = accounts[5]
		const StakingDextokenIgzno9 = await StakingDextoken.new(addressbsVnND2, addressguHTjmk, {from: accounts[4]});
		const uinteLqs3oc = BigInt("611")
		const uintqTfofEY = BigInt("1273")
		const uintRMZaxb = BigInt("1069")
		const uintiRSxyYn = BigInt("399")
		const uintbFiSCC4 = BigInt("350")
		const addressynapNwK = accounts[5]
		const uint6Hc4da = await StakingDextokenIgzno9.getStartTimestamp.call({from: accounts[4]});
		const uintAYcUxUl = await StakingDextokenIgzno9.setRewardRound.call(uintiRSxyYn, uintRMZaxb, uintqTfofEY, uinteLqs3oc, {from: accounts[4]});
		const addressrbU41PA = await StakingDextokenIgzno9.capture.call(addressynapNwK, uintbFiSCC4, {from: accounts[1]});

		assert.equal(uint6Hc4da, BigInt("0"))
		await expect(StakingDextokenIgzno9.setRewardRound.call(uintiRSxyYn, uintRMZaxb, uintqTfofEY, uinteLqs3oc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressP7H3u8Q = accounts[3]
		const addressYp7MUtV = accounts[1]
		const StakingDextokenfjFu4Nu = await StakingDextoken.new(addressP7H3u8Q, addressYp7MUtV, {from: accounts[0]});
		const addressE34u4d3 = accounts[4]
		const uintEF3uQZs = BigInt("1984")
		const addressV0qR8S = accounts[6]
		const uintPXCmEsZ = await StakingDextokenfjFu4Nu.rewardPerToken.call({from: accounts[1]});
		const boolD0gJFDM = await StakingDextokenfjFu4Nu.unfreezeAccount.call(addressE34u4d3, {from: accounts[0]});
		const uintZsCLzEp = await StakingDextokenfjFu4Nu.getEndTimestamp.call({from: "0x0000000000000000000000000000000000000001"});
		await StakingDextokenfjFu4Nu.notifyRewards.call({from: accounts[0]});
		const uintDodEIi = await StakingDextokenfjFu4Nu.withdraw.call(uintEF3uQZs, {from: accounts[3]});
		const addressinHxnCn = await StakingDextokenfjFu4Nu.setBeneficial.call(addressV0qR8S, {from: accounts[0]});

		assert.equal(uintPXCmEsZ, BigInt("0"))
		await expect(StakingDextokenfjFu4Nu.unfreezeAccount.call(addressE34u4d3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressWzVqnb = accounts[3]
		const addressxfqMIxH = accounts[1]
		const StakingDextokenfjFu4Nu = await StakingDextoken.new(addressWzVqnb, addressxfqMIxH, {from: accounts[0]});
		const uintFtPXFh4 = BigInt("1085")
		const addressvwcCAUI = accounts[1]
		const uintDkzgQQP = BigInt("1851")
		const uintmIXpnQS = BigInt("1963")
		const addressTkEKseR = accounts[4]
		const uintABJxO7A = await StakingDextokenfjFu4Nu.getTotalStakes.call({from: accounts[1]});
		await StakingDextokenfjFu4Nu.notifyRewards.call({from: accounts[0]});
		const addresszdYpCNS = await StakingDextokenfjFu4Nu.capture.call(addressvwcCAUI, uintFtPXFh4, {from: accounts[0]});
		const uinttBysxzI = await StakingDextokenfjFu4Nu.withdraw.call(uintDkzgQQP, {from: "0x0000000000000000000000000000000000000001"});
		const addressg2Ls55 = await StakingDextokenfjFu4Nu.capture.call(addressTkEKseR, uintmIXpnQS, {from: accounts[4]});

		assert.equal(uintABJxO7A, BigInt("0"))
		await expect(StakingDextokenfjFu4Nu.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})