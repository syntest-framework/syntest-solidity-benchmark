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
		const uintxQTyudR = await StakingDextokenhSL8txE.deposit.call(uintQFfLdJZ, {from: accounts[2]});
		await StakingDextokenhSL8txE.notifyRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const addressUcMJHiN = await StakingDextokenhSL8txE.setBeneficial.call(addressjqFWz8L, {from: accounts[0]});

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
		const addressDrU6tD5 = await StakingDextokenVy9iiR2.updateReward.call(addresszk1pZqA, {from: accounts[2]});
		const boolhy0eTC6 = await StakingDextokenVy9iiR2.freezeAccount.call(addresswjead0, {from: accounts[1]});
		const uintjMGoG75 = await StakingDextokenVy9iiR2.getTotalStakes.call({from: accounts[1]});

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
		const addressx5Wqll3 = await StakingDextokenbWK82H0.setBeneficial.call(addressCZQchgX, {from: accounts[3]});
		const addressN6gIuXr = await StakingDextokenbWK82H0.setBeneficial.call(addressZwhKke5, {from: accounts[4]});

		assert.equal(uintfB6lyG, BigInt("0"))
		assert.equal(uintgZrk7Al, BigInt("0"))
		assert.equal(uintwg3q8FP, BigInt("0"))
		await expect(StakingDextokenbWK82H0.setBeneficial.call(addressCZQchgX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressMzoCGgQ = accounts[3]
		const addressxv1Abc9 = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressMzoCGgQ, addressxv1Abc9, {from: accounts[1]});
		const uintpQwO93k = BigInt("2043")
		const addressc1Ye3e5 = accounts[2]
		const uintWU22Jg4 = BigInt("548")
		const addressQIAj6Q = accounts[3]
		const uintnzYAq3v = await StakingDextokenfmiV1vI.withdraw.call(uintpQwO93k, {from: accounts[3]});
		const uintU7bwcUp = await StakingDextokenfmiV1vI.rewardPerToken.call({from: accounts[5]});
		const uinta1nFiP = await StakingDextokenfmiV1vI.rewardOf.call(addressc1Ye3e5, {from: accounts[0]});
		const addressj4je4HX = await StakingDextokenfmiV1vI.capture.call(addressQIAj6Q, uintWU22Jg4, {from: accounts[4]});

		await expect(StakingDextokenfmiV1vI.withdraw.call(uintpQwO93k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresskshOiSg = accounts[5]
		const addressjxgHFnv = accounts[2]
		const StakingDextokenX6XJgNg = await StakingDextoken.new(addresskshOiSg, addressjxgHFnv, {from: "0x0000000000000000000000000000000000000001"});
		const uintXQYAOx = BigInt("2026")
		const addressaDR1cA5 = accounts[1]
		const uintHlRp3Ym = BigInt("52")
		const addresszRvoukG = "0x0000000000000000000000000000000000000001"
		const addressrSujcBf = accounts[3]
		const addressxKboZTK = accounts[1]
		const uintuhWruxw = BigInt("172")
		const uintiW76JOV = BigInt("1779")
		const uintuVa1nt1 = BigInt("1757")
		const uintFpK9rLq = BigInt("1341")
		const addressT7Cvmnp = await StakingDextokenX6XJgNg.capture.call(addressaDR1cA5, uintXQYAOx, {from: accounts[0]});
		const addressmplGCxB = await StakingDextokenX6XJgNg.capture.call(addresszRvoukG, uintHlRp3Ym, {from: accounts[1]});
		const uintbVhbBKp = await StakingDextokenX6XJgNg.getWithdrawalOf.call(addressrSujcBf, {from: accounts[3]});
		const uintsfNJDqH = await StakingDextokenX6XJgNg.earned.call(addressxKboZTK, {from: accounts[1]});
		const uintf9cOGp = await StakingDextokenX6XJgNg.setRewardRound.call(uintFpK9rLq, uintuVa1nt1, uintiW76JOV, uintuhWruxw, {from: accounts[4]});
	});

	it('test for StakingDextoken', async () => {
		const addressRGShOFz = accounts[3]
		const addressglf1sFt = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressRGShOFz, addressglf1sFt, {from: accounts[1]});
		const addressTp3FeKh = accounts[2]
		const uintf1SYSAY = BigInt("127")
		const boolWdCcVt5 = await StakingDextokenfmiV1vI.freezeAccount.call(addressTp3FeKh, {from: accounts[1]});
		const uintnzYAq3v = await StakingDextokenfmiV1vI.withdraw.call(uintf1SYSAY, {from: accounts[3]});

		assert.equal(boolWdCcVt5, true)
		await expect(StakingDextokenfmiV1vI.withdraw.call(uintf1SYSAY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxFPEM95 = accounts[5]
		const addresspPTytwb = accounts[3]
		const StakingDextokennlWwslt = await StakingDextoken.new(addressxFPEM95, addresspPTytwb, {from: accounts[3]});
		const addressunPiku = accounts[3]
		const uintjBDewLN = BigInt("1478")
		await StakingDextokennlWwslt.claim.call({from: accounts[1]});
		const uintqJj9nug = await StakingDextokennlWwslt.balanceOf.call(addressunPiku, {from: accounts[2]});
		const uintDL2cTu = await StakingDextokennlWwslt.deposit.call(uintjBDewLN, {from: accounts[3]});

		await expect(StakingDextokennlWwslt.claim.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressurDmKpE = accounts[4]
		const addressv9oBi3Y = accounts[3]
		const StakingDextokenBjI9KL = await StakingDextoken.new(addressurDmKpE, addressv9oBi3Y, {from: accounts[2]});
		const uintCrMQuW = BigInt("1461")
		const addressIxbZr65 = accounts[5]
		const uintOTDW62w = await StakingDextokenBjI9KL.totalRewards.call({from: accounts[1]});
		const addresscAOtkwP = await StakingDextokenBjI9KL.capture.call(addressIxbZr65, uintCrMQuW, {from: accounts[2]});
		await StakingDextokenBjI9KL.claim.call({from: accounts[5]});

		assert.equal(uintOTDW62w, BigInt("0"))
		await expect(StakingDextokenBjI9KL.capture.call(addressIxbZr65, uintCrMQuW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressgBrq99k = accounts[3]
		const addressg4KXz2i = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressgBrq99k, addressg4KXz2i, {from: accounts[1]});
		const uintELzKiHk = BigInt("845")
		const uintUsCvcwp = BigInt("1927")
		const uintnVajEqY = BigInt("1203")
		const uintrkZFUfz = BigInt("803")
		const uintFq1U30e = BigInt("2043")
		const addressrl4LnPe = accounts[1]
		const uintVTS7xd7 = BigInt("548")
		const addressXobedzR = accounts[4]
		const uintyAgWPX = await StakingDextokenfmiV1vI.setRewardRound.call(uintrkZFUfz, uintnVajEqY, uintUsCvcwp, uintELzKiHk, {from: accounts[1]});
		const uintnzYAq3v = await StakingDextokenfmiV1vI.withdraw.call(uintFq1U30e, {from: accounts[3]});
		const addressJ8EXsMJ = await StakingDextokenfmiV1vI.setBeneficial.call(addressrl4LnPe, {from: accounts[1]});
		const addressj4je4HX = await StakingDextokenfmiV1vI.capture.call(addressXobedzR, uintVTS7xd7, {from: accounts[4]});

		await expect(StakingDextokenfmiV1vI.setRewardRound.call(uintrkZFUfz, uintnVajEqY, uintUsCvcwp, uintELzKiHk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEBPmEPk = accounts[3]
		const addresskgzKWD7 = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressEBPmEPk, addresskgzKWD7, {from: accounts[1]});
		const uintf2Tbng = BigInt("2043")
		await StakingDextokenfmiV1vI.notifyRewards.call({from: accounts[1]});
		const uintnzYAq3v = await StakingDextokenfmiV1vI.withdraw.call(uintf2Tbng, {from: accounts[3]});

		await expect(StakingDextokenfmiV1vI.notifyRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressHPVLZ2W = accounts[3]
		const addressg4t7Vg = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addressHPVLZ2W, addressg4t7Vg, {from: accounts[1]});
		const addresssNR4uJF = accounts[1]
		const uintR27hk9h = BigInt("2020")
		const addressgNTjBqT = accounts[2]
		await StakingDextokenfmiV1vI.notifyRewards.call({from: accounts[1]});
		const addressQDr5ReX = await StakingDextokenfmiV1vI.setBeneficial.call(addresssNR4uJF, {from: accounts[1]});
		const uintnzYAq3v = await StakingDextokenfmiV1vI.withdraw.call(uintR27hk9h, {from: accounts[3]});
		const uintAk3a8lz = await StakingDextokenfmiV1vI.balanceOf.call(addressgNTjBqT, {from: accounts[0]});

		await expect(StakingDextokenfmiV1vI.notifyRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressADvHgrl = accounts[3]
		const addressg0rAX7q = accounts[2]
		const StakingDextokenJxExYvy = await StakingDextoken.new(addressADvHgrl, addressg0rAX7q, {from: accounts[1]});
		const addressz2ayLYz = accounts[2]
		const addressp34uAwu = accounts[0]
		const addressneONwh2 = accounts[3]
		const addressZhcYa1k = accounts[2]
		const addressqgg1vN = accounts[4]
		const uintELGXElV = await StakingDextokenJxExYvy.stakeOf.call(addressz2ayLYz, {from: accounts[3]});
		const uintiVbgCv1 = await StakingDextokenJxExYvy.balanceOf.call(addressp34uAwu, {from: accounts[2]});
		const boolUl1lxho = await StakingDextokenJxExYvy.unfreezeAccount.call(addressneONwh2, {from: accounts[1]});
		const uintlcw3JhG = await StakingDextokenJxExYvy.getEndTimestamp.call({from: accounts[0]});
		const addressVBXUoTC = await StakingDextokenJxExYvy.updateReward.call(addressZhcYa1k, {from: accounts[3]});
		const uintz3CGTJc = await StakingDextokenJxExYvy.getClaimOf.call(addressqgg1vN, {from: accounts[2]});

		assert.equal(uintELGXElV, BigInt("0"))
		assert.equal(uintiVbgCv1, BigInt("0"))
		await expect(StakingDextokenJxExYvy.unfreezeAccount.call(addressneONwh2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresszaHw5t7 = accounts[3]
		const addressRX5doh = accounts[0]
		const StakingDextokenfmiV1vI = await StakingDextoken.new(addresszaHw5t7, addressRX5doh, {from: accounts[1]});
		const uintYSy6DVF = BigInt("1864")
		const addressXjom5tn = accounts[0]
		const uintfg6AHLf = BigInt("126")
		const addressbfxRU2n = await StakingDextokenfmiV1vI.capture.call(addressXjom5tn, uintYSy6DVF, {from: accounts[1]});
		const uintVkLJJMG = await StakingDextokenfmiV1vI.withdraw.call(uintfg6AHLf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenfmiV1vI.capture.call(addressXjom5tn, uintYSy6DVF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})