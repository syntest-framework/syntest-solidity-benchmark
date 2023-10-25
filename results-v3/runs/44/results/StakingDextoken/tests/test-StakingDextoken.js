const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressOkxuB4y = accounts[0]
		const addressnGheEUr = "0x0000000000000000000000000000000000000001"
		const StakingDextokenzdi6cAi = await StakingDextoken.new(addressOkxuB4y, addressnGheEUr, {from: accounts[1]});
		const addressObOfmtN = accounts[0]
		const addresstcik8nz = accounts[2]
		const addressZdAd9JU = accounts[2]
		const addressYqARaiZ = accounts[0]
		const booluqvU2MP = await StakingDextokenzdi6cAi.unfreezeAccount.call(addressObOfmtN, {from: accounts[0]});
		const addressWM60iB9 = await StakingDextokenzdi6cAi.updateReward.call(addresstcik8nz, {from: accounts[2]});
		const addressu5zezO3 = await StakingDextokenzdi6cAi.updateReward.call(addressZdAd9JU, {from: accounts[1]});
		const uintcyY2F6 = await StakingDextokenzdi6cAi.stakeOf.call(addressYqARaiZ, {from: accounts[1]});

		await expect(StakingDextokenzdi6cAi.unfreezeAccount.call(addressObOfmtN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressQyd6yKr = accounts[3]
		const addresszzcxAm3 = accounts[1]
		const StakingDextokenrYaIQaA = await StakingDextoken.new(addressQyd6yKr, addresszzcxAm3, {from: "0x0000000000000000000000000000000000000001"});
		const addressTNmtsCR = accounts[2]
		const addressikd7GfF = "0x0000000000000000000000000000000000000001"
		const uintnFq7Ca2 = BigInt("852")
		const addressV9BF93 = accounts[0]
		const uint3xv255 = await StakingDextokenrYaIQaA.totalRewards.call({from: accounts[2]});
		const uintrAyYLqZ = await StakingDextokenrYaIQaA.rewardOf.call(addressTNmtsCR, {from: accounts[4]});
		const boolBsSdRT = await StakingDextokenrYaIQaA.unfreezeAccount.call(addressikd7GfF, {from: accounts[3]});
		const uintkOdSjlE = await StakingDextokenrYaIQaA.lastTimeRewardApplicable.call({from: accounts[0]});
		const addresscAvmtL0 = await StakingDextokenrYaIQaA.capture.call(addressV9BF93, uintnFq7Ca2, {from: accounts[1]});
	});

	it('test for StakingDextoken', async () => {
		const addresslCXzZL = accounts[3]
		const addressTMAfiDE = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addresslCXzZL, addressTMAfiDE, {from: accounts[4]});
		const uintQYzok6R = BigInt("695")
		const uintLrHl4JH = BigInt("856")
		const addressts1nZjH = accounts[4]
		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintQYzok6R, {from: accounts[0]});
		const addressfuFAiz6 = await StakingDextokenpUxrqno.capture.call(addressts1nZjH, uintLrHl4JH, {from: accounts[1]});

		await expect(StakingDextokenpUxrqno.deposit.call(uintQYzok6R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressqVwPUOY = accounts[2]
		const addressGvB1nnb = accounts[5]
		const StakingDextokenUWp7qpw = await StakingDextoken.new(addressqVwPUOY, addressGvB1nnb, {from: accounts[4]});
		const uinty33Qwj3 = BigInt("154")
		const addresswf34YXN = accounts[2]
		const uintOwv8a4o = BigInt("1611")
		const uintUgIarv = BigInt("543")
		const uintxkxcRXF = BigInt("3")
		const uinta3EfJ6c = BigInt("654")
		const uintxdxKYN8 = BigInt("636")
		const addressU3Ez2Xn = accounts[5]
		const uintAfnZt9a = await StakingDextokenUWp7qpw.withdraw.call(uinty33Qwj3, {from: accounts[1]});
		const addressivkM7FV = await StakingDextokenUWp7qpw.setBeneficial.call(addresswf34YXN, {from: accounts[2]});
		const uintZdUGaR = await StakingDextokenUWp7qpw.setRewardRound.call(uinta3EfJ6c, uintxkxcRXF, uintUgIarv, uintOwv8a4o, {from: accounts[2]});
		const uint0N8C2b = await StakingDextokenUWp7qpw.getTotalStakes.call({from: accounts[1]});
		const addressyMWAk6W = await StakingDextokenUWp7qpw.capture.call(addressU3Ez2Xn, uintxdxKYN8, {from: accounts[0]});
		const uintZowxlSN = await StakingDextokenUWp7qpw.rewardPerToken.call({from: accounts[2]});

		await expect(StakingDextokenUWp7qpw.withdraw.call(uinty33Qwj3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressXxdD1OI = accounts[3]
		const addressiB3jb4r = accounts[4]
		const StakingDextokenLMThAHC = await StakingDextoken.new(addressXxdD1OI, addressiB3jb4r, {from: accounts[1]});
		const addressqK6z51o = accounts[1]
		const addressysf5T0 = accounts[0]
		const uintp0q4ppy = await StakingDextokenLMThAHC.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await StakingDextokenLMThAHC.claim.call({from: accounts[2]});
		const uint5Ig0uh = await StakingDextokenLMThAHC.getTotalStakes.call({from: accounts[3]});
		const uintw4rf1kd = await StakingDextokenLMThAHC.earned.call(addressqK6z51o, {from: accounts[0]});
		const uintmdjXFsr = await StakingDextokenLMThAHC.rewardOf.call(addressysf5T0, {from: accounts[2]});

		assert.equal(uintp0q4ppy, BigInt("0"))
		await expect(StakingDextokenLMThAHC.claim.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressdWq4KZi = "0x0000000000000000000000000000000000000001"
		const addressLnbBA8 = accounts[0]
		const StakingDextoken2BW5DH = await StakingDextoken.new(addressdWq4KZi, addressLnbBA8, {from: accounts[3]});
		const addresskD1VCvQ = accounts[2]
		const addressgt9QhEG = "0x0000000000000000000000000000000000000001"
		const addressAjQqv9Y = accounts[5]
		const addresshY13gHE = await StakingDextoken2BW5DH.updateReward.call(addresskD1VCvQ, {from: accounts[3]});
		const boolHY4sbDV = await StakingDextoken2BW5DH.unfreezeAccount.call(addressgt9QhEG, {from: accounts[0]});
		const boolpOZzYgf = await StakingDextoken2BW5DH.freezeAccount.call(addressAjQqv9Y, {from: accounts[0]});

		await expect(StakingDextoken2BW5DH.updateReward.call(addresskD1VCvQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressgkIvdOA = accounts[0]
		const addressHbSas2O = accounts[4]
		const StakingDextokengekVvqM = await StakingDextoken.new(addressgkIvdOA, addressHbSas2O, {from: accounts[1]});
		const addressSbMGifA = accounts[4]
		const uinty8M8npk = await StakingDextokengekVvqM.getTotalStakes.call({from: accounts[4]});
		const uint5uOks4 = await StakingDextokengekVvqM.getWithdrawalOf.call(addressSbMGifA, {from: accounts[3]});

		assert.equal(uint5uOks4, BigInt("0"))
		assert.equal(uinty8M8npk, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressgP9hVp5 = accounts[3]
		const addressSsU7KCz = accounts[4]
		const StakingDextokenLMThAHC = await StakingDextoken.new(addressgP9hVp5, addressSsU7KCz, {from: accounts[1]});
		const addressaeqgxot = accounts[1]
		const addressv37Gdl4 = accounts[2]
		const addressKkqLDxN = accounts[2]
		const addressUzBckP4 = accounts[1]
		const uintp0q4ppy = await StakingDextokenLMThAHC.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressrfly07y = await StakingDextokenLMThAHC.setBeneficial.call(addressaeqgxot, {from: accounts[1]});
		const uintsm1uWFR = await StakingDextokenLMThAHC.earned.call(addressv37Gdl4, {from: accounts[2]});
		const uintqBeLdKS = await StakingDextokenLMThAHC.getTotalStakes.call({from: accounts[5]});
		await StakingDextokenLMThAHC.claim.call({from: accounts[2]});
		const uint5Ig0uh = await StakingDextokenLMThAHC.getTotalStakes.call({from: accounts[3]});
		const uintw4rf1kd = await StakingDextokenLMThAHC.earned.call(addressKkqLDxN, {from: accounts[0]});
		const uintmdjXFsr = await StakingDextokenLMThAHC.rewardOf.call(addressUzBckP4, {from: accounts[2]});

		assert.equal(uintp0q4ppy, BigInt("0"))
		assert.equal(uintqBeLdKS, BigInt("0"))
		assert.equal(uintsm1uWFR, BigInt("0"))
		await expect(StakingDextokenLMThAHC.claim.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPtN2TR0 = accounts[5]
		const addresskqGzKbB = accounts[0]
		const StakingDextokenFOLpTH = await StakingDextoken.new(addressPtN2TR0, addresskqGzKbB, {from: accounts[2]});
		const addressRNHww6G = accounts[4]
		const uintSL6uru = await StakingDextokenFOLpTH.getClaimOf.call(addressRNHww6G, {from: accounts[0]});
		const uintguvbEhW = await StakingDextokenFOLpTH.remainingRewards.call({from: accounts[4]});
		const uintGIGWvP = await StakingDextokenFOLpTH.totalRewards.call({from: accounts[1]});

		assert.equal(uintGIGWvP, BigInt("0"))
		assert.equal(uintSL6uru, BigInt("0"))
		assert.equal(uintguvbEhW, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresso8ljEQB = accounts[3]
		const addressVjWc3D4 = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addresso8ljEQB, addressVjWc3D4, {from: accounts[4]});
		const uintEAlTfeK = BigInt("708")
		const uintZ1OB7C5 = await StakingDextokenpUxrqno.getStartTimestamp.call({from: accounts[0]});
		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintEAlTfeK, {from: accounts[0]});

		assert.equal(uintZ1OB7C5, BigInt("0"))
		await expect(StakingDextokenpUxrqno.deposit.call(uintEAlTfeK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresszNd2a7A = accounts[2]
		const addressvrF3PqQ = accounts[5]
		const StakingDextokenUWp7qpw = await StakingDextoken.new(addresszNd2a7A, addressvrF3PqQ, {from: accounts[4]});
		const addressELDjWlw = accounts[0]
		const uintOuRtqT = BigInt("169")
		const uintDlt1Iei = BigInt("1722")
		const uintVdTFIFe = BigInt("117")
		const uintTKATp6D = BigInt("748")
		const uinta9GQtI = BigInt("636")
		const addressjtph5WZ = accounts[5]
		const uintMwD9hkE = await StakingDextokenUWp7qpw.stakeOf.call(addressELDjWlw, {from: "0x0000000000000000000000000000000000000001"});
		const uintAfnZt9a = await StakingDextokenUWp7qpw.withdraw.call(uintOuRtqT, {from: accounts[1]});
		const uintfe1chyP = await StakingDextokenUWp7qpw.withdraw.call(uintDlt1Iei, {from: accounts[0]});
		const uintZXgImGV = await StakingDextokenUWp7qpw.deposit.call(uintVdTFIFe, {from: accounts[5]});
		const uintzI6aTlj = await StakingDextokenUWp7qpw.deposit.call(uintTKATp6D, {from: accounts[4]});
		const addressyMWAk6W = await StakingDextokenUWp7qpw.capture.call(addressjtph5WZ, uinta9GQtI, {from: accounts[0]});
		const uintZowxlSN = await StakingDextokenUWp7qpw.rewardPerToken.call({from: accounts[2]});

		assert.equal(uintMwD9hkE, BigInt("0"))
		await expect(StakingDextokenUWp7qpw.withdraw.call(uintOuRtqT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressj7ZsL1o = accounts[2]
		const addresskS7NpcK = accounts[4]
		const StakingDextokenGKf2RUP = await StakingDextoken.new(addressj7ZsL1o, addresskS7NpcK, {from: accounts[2]});
		const addresszEUcn7L = "0x0000000000000000000000000000000000000001"
		const uintb4u3mRD = BigInt("1245")
		const uintQJSQN9V = await StakingDextokenGKf2RUP.rewardOf.call(addresszEUcn7L, {from: accounts[2]});
		const uinttoDQPBP = await StakingDextokenGKf2RUP.withdraw.call(uintb4u3mRD, {from: accounts[1]});

		assert.equal(uintQJSQN9V, BigInt("0"))
		await expect(StakingDextokenGKf2RUP.withdraw.call(uintb4u3mRD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresswmOGzfR = accounts[3]
		const addressA6VzINF = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addresswmOGzfR, addressA6VzINF, {from: accounts[4]});
		const addressJkV0DFZ = accounts[1]
		const uintKuOvj1k = BigInt("712")
		const boolxZ4UfCD = await StakingDextokenpUxrqno.unfreezeAccount.call(addressJkV0DFZ, {from: accounts[4]});
		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintKuOvj1k, {from: accounts[0]});

		await expect(StakingDextokenpUxrqno.unfreezeAccount.call(addressJkV0DFZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstRwhdEV = accounts[3]
		const addressGGqaBTP = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addresstRwhdEV, addressGGqaBTP, {from: accounts[4]});
		const addressbEZm7Ih = accounts[4]
		const uintFuDoFYS = BigInt("1530")
		const uintvL5mFm9 = BigInt("1000")
		const uintQ3FPjHt = BigInt("1361")
		const uintKDQhBS2 = BigInt("278")
		const addressVpkIJyL = accounts[1]
		const uintmIVqjL = await StakingDextokenpUxrqno.getClaimOf.call(addressbEZm7Ih, {from: accounts[3]});
		const uintvUOPnwU = await StakingDextokenpUxrqno.setRewardRound.call(uintKDQhBS2, uintQ3FPjHt, uintvL5mFm9, uintFuDoFYS, {from: accounts[4]});
		await StakingDextokenpUxrqno.claim.call({from: accounts[5]});
		const uintshbU7ii = await StakingDextokenpUxrqno.rewardOf.call(addressVpkIJyL, {from: accounts[1]});
		await StakingDextokenpUxrqno.claim.call({from: accounts[3]});

		assert.equal(uintmIVqjL, BigInt("0"))
		await expect(StakingDextokenpUxrqno.claim.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresskudPyP6 = accounts[3]
		const addressw5LvRNY = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addresskudPyP6, addressw5LvRNY, {from: accounts[4]});
		const uintzZr8YTz = BigInt("948")
		const uintRMZizfr = BigInt("542")
		await StakingDextokenpUxrqno.notifyRewards.call({from: accounts[4]});
		const uintAAvZRfO = await StakingDextokenpUxrqno.lastTimeRewardApplicable.call({from: accounts[4]});
		const uintoxzsBNz = await StakingDextokenpUxrqno.deposit.call(uintzZr8YTz, {from: accounts[0]});
		const uint69EQHH = await StakingDextokenpUxrqno.deposit.call(uintRMZizfr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenpUxrqno.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressI6SSLPa = accounts[2]
		const addressgSTgr94 = accounts[4]
		const StakingDextokenGKf2RUP = await StakingDextoken.new(addressI6SSLPa, addressgSTgr94, {from: accounts[2]});
		const uintLZCpoXe = BigInt("322")
		const addresshkL5lu9 = accounts[1]
		const uintEsBbmiG = BigInt("1255")
		const addressNPkfaBN = accounts[4]
		const addressa9hKbwh = accounts[3]
		const address7q7GZ0 = await StakingDextokenGKf2RUP.capture.call(addresshkL5lu9, uintLZCpoXe, {from: accounts[2]});
		const uinttoDQPBP = await StakingDextokenGKf2RUP.withdraw.call(uintEsBbmiG, {from: accounts[1]});
		const boolU9mnOT8 = await StakingDextokenGKf2RUP.freezeAccount.call(addressNPkfaBN, {from: accounts[1]});
		const uint0f9HNC = await StakingDextokenGKf2RUP.balanceOf.call(addressa9hKbwh, {from: accounts[1]});

		await expect(StakingDextokenGKf2RUP.capture.call(addresshkL5lu9, uintLZCpoXe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresszSGpqQw = accounts[2]
		const addresszlxJWqd = accounts[4]
		const StakingDextokenGKf2RUP = await StakingDextoken.new(addresszSGpqQw, addresszlxJWqd, {from: accounts[2]});
		const uintc5UliwX = BigInt("322")
		const addressiLa2DjC = accounts[2]
		const addressZiN77IO = accounts[4]
		const addressHsaXLjg = accounts[1]
		const addressyKSThl9 = accounts[3]
		const address7q7GZ0 = await StakingDextokenGKf2RUP.capture.call(addressiLa2DjC, uintc5UliwX, {from: accounts[2]});
		const boolU9mnOT8 = await StakingDextokenGKf2RUP.freezeAccount.call(addressZiN77IO, {from: accounts[1]});
		const uintW3Us1J = await StakingDextokenGKf2RUP.getClaimOf.call(addressHsaXLjg, {from: accounts[5]});
		const uint0f9HNC = await StakingDextokenGKf2RUP.balanceOf.call(addressyKSThl9, {from: accounts[1]});
		const uintHhtynP0 = await StakingDextokenGKf2RUP.lastTimeRewardApplicable.call({from: accounts[0]});
		const uintY2i3eWg = await StakingDextokenGKf2RUP.remainingRewards.call({from: accounts[2]});

		await expect(StakingDextokenGKf2RUP.capture.call(addressiLa2DjC, uintc5UliwX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEZXopbb = accounts[2]
		const addressWHBKBEf = accounts[4]
		const StakingDextokenGKf2RUP = await StakingDextoken.new(addressEZXopbb, addressWHBKBEf, {from: accounts[2]});
		const uintfYv7QSF = BigInt("322")
		const addressgsdbohK = accounts[4]
		const addressxF6O49v = accounts[2]
		const uintURUNErC = BigInt("1288")
		const addressoapTZ2P = accounts[2]
		const address7q7GZ0 = await StakingDextokenGKf2RUP.capture.call(addressgsdbohK, uintfYv7QSF, {from: accounts[2]});
		const uintAHEntdh = await StakingDextokenGKf2RUP.getWithdrawalOf.call(addressxF6O49v, {from: accounts[3]});
		const uinttoDQPBP = await StakingDextokenGKf2RUP.withdraw.call(uintURUNErC, {from: accounts[1]});
		const addressEVOa3H = await StakingDextokenGKf2RUP.updateReward.call(addressoapTZ2P, {from: accounts[0]});

		await expect(StakingDextokenGKf2RUP.capture.call(addressgsdbohK, uintfYv7QSF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGhfox1r = accounts[3]
		const addressU5OPaj = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addressGhfox1r, addressU5OPaj, {from: accounts[4]});
		const uintRdZvmd9 = BigInt("725")
		const uintxeQ2Esm = BigInt("1686")
		const uintXW3cKYp = BigInt("1308")
		const uintAJdfRx0 = BigInt("929")
		const uintO8DO5qu = BigInt("542")
		const uintpDgii7A = await StakingDextokenpUxrqno.setRewardRound.call(uintAJdfRx0, uintXW3cKYp, uintxeQ2Esm, uintRdZvmd9, {from: accounts[4]});
		const uint69EQHH = await StakingDextokenpUxrqno.deposit.call(uintO8DO5qu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenpUxrqno.setRewardRound.call(uintAJdfRx0, uintXW3cKYp, uintxeQ2Esm, uintRdZvmd9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressK3pnbeJ = accounts[5]
		const addresscyPLMcG = accounts[3]
		const StakingDextokenfCkHkTW = await StakingDextoken.new(addressK3pnbeJ, addresscyPLMcG, {from: accounts[0]});
		const addressO6VHJFT = accounts[0]
		const addressLPH6BXK = accounts[1]
		const addressxBSQAo = "0x0000000000000000000000000000000000000001"
		const addressomZPgM = accounts[2]
		await StakingDextokenfCkHkTW.notifyRewards.call({from: accounts[0]});
		const uintHq9tj2U = await StakingDextokenfCkHkTW.earned.call(addressO6VHJFT, {from: accounts[3]});
		const boolnEp6PS5 = await StakingDextokenfCkHkTW.freezeAccount.call(addressLPH6BXK, {from: accounts[0]});
		const addressDmudGlp = await StakingDextokenfCkHkTW.updateReward.call(addressxBSQAo, {from: accounts[1]});
		const uintgFcukxl = await StakingDextokenfCkHkTW.getClaimOf.call(addressomZPgM, {from: accounts[2]});

		await expect(StakingDextokenfCkHkTW.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})