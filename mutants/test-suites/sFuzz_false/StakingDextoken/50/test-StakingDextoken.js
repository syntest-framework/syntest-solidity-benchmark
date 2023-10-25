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
//		const booluqvU2MP = await StakingDextokenzdi6cAi.unfreezeAccount.call(addressObOfmtN, {from: accounts[0]});
//		const addressWM60iB9 = await StakingDextokenzdi6cAi.updateReward.call(addresstcik8nz, {from: accounts[2]});
//		const addressu5zezO3 = await StakingDextokenzdi6cAi.updateReward.call(addressZdAd9JU, {from: accounts[1]});
//		const uintcyY2F6 = await StakingDextokenzdi6cAi.stakeOf.call(addressYqARaiZ, {from: accounts[1]});

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
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintQYzok6R, {from: accounts[0]});
//		const addressfuFAiz6 = await StakingDextokenpUxrqno.capture.call(addressts1nZjH, uintLrHl4JH, {from: accounts[1]});

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
//		const uintAfnZt9a = await StakingDextokenUWp7qpw.withdraw.call(uinty33Qwj3, {from: accounts[1]});
//		const addressivkM7FV = await StakingDextokenUWp7qpw.setBeneficial.call(addresswf34YXN, {from: accounts[2]});
//		const uintZdUGaR = await StakingDextokenUWp7qpw.setRewardRound.call(uinta3EfJ6c, uintxkxcRXF, uintUgIarv, uintOwv8a4o, {from: accounts[2]});
//		const uint0N8C2b = await StakingDextokenUWp7qpw.getTotalStakes.call({from: accounts[1]});
//		const addressyMWAk6W = await StakingDextokenUWp7qpw.capture.call(addressU3Ez2Xn, uintxdxKYN8, {from: accounts[0]});
//		const uintZowxlSN = await StakingDextokenUWp7qpw.rewardPerToken.call({from: accounts[2]});

		await expect(StakingDextokenUWp7qpw.withdraw.call(uinty33Qwj3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressXxdD1OI = accounts[3]
		const addressiB3jb4r = accounts[4]
		const StakingDextokenLMThAHC = await StakingDextoken.new(addressXxdD1OI, addressiB3jb4r, {from: accounts[1]});
		const addressqK6z51o = accounts[1]
		const addressysf5T0 = accounts[0]
		const uintp0q4ppy = await StakingDextokenLMThAHC.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await StakingDextokenLMThAHC.claim.call({from: accounts[2]});
//		const uint5Ig0uh = await StakingDextokenLMThAHC.getTotalStakes.call({from: accounts[3]});
//		const uintw4rf1kd = await StakingDextokenLMThAHC.earned.call(addressqK6z51o, {from: accounts[0]});
//		const uintmdjXFsr = await StakingDextokenLMThAHC.rewardOf.call(addressysf5T0, {from: accounts[2]});

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
//		const addresshY13gHE = await StakingDextoken2BW5DH.updateReward.call(addresskD1VCvQ, {from: accounts[3]});
//		const boolHY4sbDV = await StakingDextoken2BW5DH.unfreezeAccount.call(addressgt9QhEG, {from: accounts[0]});
//		const boolpOZzYgf = await StakingDextoken2BW5DH.freezeAccount.call(addressAjQqv9Y, {from: accounts[0]});

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
		const address0U7MsC = accounts[3]
		const addressnLzl740 = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(address0U7MsC, addressnLzl740, {from: accounts[4]});
		const addressYt46n3W = accounts[0]
		const uint3wC4Vd = BigInt("695")
		const addressrbCXfjc = accounts[3]
		const uintTmF0I9e = await StakingDextokenpUxrqno.totalRewards.call({from: accounts[0]});
		const uintDeSEPXQ = await StakingDextokenpUxrqno.stakeOf.call(addressYt46n3W, {from: accounts[0]});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uint3wC4Vd, {from: accounts[0]});
//		const addressRKwzxZ5 = await StakingDextokenpUxrqno.notFrozen.call(addressrbCXfjc, {from: accounts[2]});

		assert.equal(uintDeSEPXQ, BigInt("0"))
		assert.equal(uintTmF0I9e, BigInt("0"))
		await expect(StakingDextokenpUxrqno.deposit.call(uint3wC4Vd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxkZ3QeR = accounts[3]
		const addresswg8MzWe = accounts[1]
		const StakingDextokenPp3yuk6 = await StakingDextoken.new(addressxkZ3QeR, addresswg8MzWe, {from: accounts[3]});
		const addressp0mDIQr = accounts[3]
		const uintaaOKtGO = BigInt("1676")
		const uintNUBWmfn = await StakingDextokenPp3yuk6.totalRewards.call({from: accounts[4]});
		const uintwpXE5uD = await StakingDextokenPp3yuk6.rewardOf.call(addressp0mDIQr, {from: "0x0000000000000000000000000000000000000001"});
//		const uintV5nfX8m = await StakingDextokenPp3yuk6.deposit.call(uintaaOKtGO, {from: "0x0000000000000000000000000000000000000001"});
//		const uintNfs8ekZ = await StakingDextokenPp3yuk6.getEndTimestamp.call({from: accounts[1]});
//		const uintMR7J4j3 = await StakingDextokenPp3yuk6.getEndTimestamp.call({from: accounts[5]});

		assert.equal(uintNUBWmfn, BigInt("0"))
		assert.equal(uintwpXE5uD, BigInt("0"))
		await expect(StakingDextokenPp3yuk6.deposit.call(uintaaOKtGO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressXcUSgYa = accounts[3]
		const addressE1Rssp = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addressXcUSgYa, addressE1Rssp, {from: accounts[4]});
		const addressxA2xSQ = accounts[0]
		const uintatFFYjw = BigInt("686")
		const uintcfnyhsF = await StakingDextokenpUxrqno.getClaimOf.call(addressxA2xSQ, {from: accounts[1]});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintatFFYjw, {from: accounts[0]});

		assert.equal(uintcfnyhsF, BigInt("0"))
		await expect(StakingDextokenpUxrqno.deposit.call(uintatFFYjw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxXOfuEm = accounts[3]
		const addressGWaynbf = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addressxXOfuEm, addressGWaynbf, {from: accounts[4]});
		const uintmqXYhYj = BigInt("708")
		const uintbuDXvjH = await StakingDextokenpUxrqno.lastTimeRewardApplicable.call({from: accounts[2]});
		const uintF0FiZPs = await StakingDextokenpUxrqno.getStartTimestamp.call({from: accounts[0]});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintmqXYhYj, {from: accounts[0]});

		assert.equal(uintF0FiZPs, BigInt("0"))
		assert.equal(uintbuDXvjH, BigInt("0"))
		await expect(StakingDextokenpUxrqno.deposit.call(uintmqXYhYj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressHd3kMqM = accounts[1]
		const addressktT24KJ = accounts[0]
		const StakingDextokenervGsEo = await StakingDextoken.new(addressHd3kMqM, addressktT24KJ, {from: accounts[0]});
		const addressu96vxB = accounts[2]
		const addressm6njqfp = accounts[5]
		const uintBwyfPgg = await StakingDextokenervGsEo.remainingRewards.call({from: accounts[3]});
//		const boolSkeEEqp = await StakingDextokenervGsEo.freezeAccount.call(addressu96vxB, {from: accounts[2]});
//		const uintWEdmaO = await StakingDextokenervGsEo.getClaimOf.call(addressm6njqfp, {from: accounts[3]});
//		await StakingDextokenervGsEo.notifyRewards.call({from: accounts[4]});
//		const uintcINfg0H = await StakingDextokenervGsEo.rewardPerToken.call({from: accounts[3]});

		assert.equal(uintBwyfPgg, BigInt("0"))
		await expect(StakingDextokenervGsEo.freezeAccount.call(addressu96vxB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressJBTEQl = accounts[3]
		const addressCix6UF4 = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addressJBTEQl, addressCix6UF4, {from: accounts[4]});
		const uintxbEfFju = BigInt("64")
		const addresszeSX8OI = accounts[4]
//		await StakingDextokenpUxrqno.notifyRewards.call({from: accounts[4]});
//		const uintz7TBfrI = await StakingDextokenpUxrqno.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintxbEfFju, {from: accounts[0]});
//		const uintkmM4b0H = await StakingDextokenpUxrqno.getWithdrawalOf.call(addresszeSX8OI, {from: accounts[0]});

		await expect(StakingDextokenpUxrqno.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressOstWaWf = accounts[3]
		const addressBWM3i8 = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addressOstWaWf, addressBWM3i8, {from: accounts[4]});
		const addressiHS5zz = accounts[4]
		const uintUFe2xk3 = BigInt("654")
//		const boolOmDjRCr = await StakingDextokenpUxrqno.unfreezeAccount.call(addressiHS5zz, {from: accounts[4]});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintUFe2xk3, {from: accounts[0]});

		await expect(StakingDextokenpUxrqno.unfreezeAccount.call(addressiHS5zz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressU1tWHUY = accounts[3]
		const addressA7Qtp85 = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addressU1tWHUY, addressA7Qtp85, {from: accounts[4]});
		const addressZSQHoNt = accounts[4]
		const uintbjTglCT = BigInt("778")
		const addresscakk9KS = accounts[5]
		const addressW0z28Eu = accounts[2]
		const uintw5P5LcO = BigInt("64")
//		await StakingDextokenpUxrqno.notifyRewards.call({from: accounts[4]});
//		const uintz7TBfrI = await StakingDextokenpUxrqno.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uintUnX5rRN = await StakingDextokenpUxrqno.getClaimOf.call(addressZSQHoNt, {from: "0x0000000000000000000000000000000000000001"});
//		const addressNcgS8K1 = await StakingDextokenpUxrqno.capture.call(addresscakk9KS, uintbjTglCT, {from: accounts[4]});
//		const uintbQK7mTg = await StakingDextokenpUxrqno.rewardPerToken.call({from: accounts[0]});
//		const uintqJsnAEM = await StakingDextokenpUxrqno.getClaimOf.call(addressW0z28Eu, {from: accounts[5]});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintw5P5LcO, {from: accounts[0]});

		await expect(StakingDextokenpUxrqno.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslvk58T = accounts[3]
		const addressxMbpAtF = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addresslvk58T, addressxMbpAtF, {from: accounts[4]});
		const uintDdlN0xx = BigInt("1068")
		const uintRP6Hls = BigInt("685")
		const uintQzRJDj = BigInt("454")
		const uintjgsDg8S = BigInt("2004")
		const uintiMEhaLy = BigInt("64")
		const uintSz1uNHZ = await StakingDextokenpUxrqno.setRewardRound.call(uintjgsDg8S, uintQzRJDj, uintRP6Hls, uintDdlN0xx, {from: accounts[4]});
		const uintz7TBfrI = await StakingDextokenpUxrqno.lastTimeRewardApplicable.call({from: accounts[2]});
		const uintU3Ffdbo = await StakingDextokenpUxrqno.totalRewards.call({from: accounts[3]});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintiMEhaLy, {from: accounts[0]});

		assert.equal(uintU3Ffdbo, BigInt("0"))
		assert.equal(uintz7TBfrI, BigInt("0"))
		await expect(StakingDextokenpUxrqno.deposit.call(uintiMEhaLy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshwEy7qY = accounts[3]
		const addressMGUCeKy = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addresshwEy7qY, addressMGUCeKy, {from: accounts[4]});
		const addressEiV3Puz = accounts[4]
		const addressWQrl0i = accounts[0]
		const uintHKj5NOE = BigInt("702")
		const addressVVDIYJl = await StakingDextokenpUxrqno.setBeneficial.call(addressEiV3Puz, {from: accounts[4]});
//		const addressDjUPuxB = await StakingDextokenpUxrqno.setBeneficial.call(addressWQrl0i, {from: accounts[5]});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintHKj5NOE, {from: accounts[0]});

		await expect(StakingDextokenpUxrqno.setBeneficial.call(addressWQrl0i, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshDA9RL = accounts[3]
		const addresscE0JRVf = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addresshDA9RL, addresscE0JRVf, {from: accounts[4]});
		const uintM5tQhF = BigInt("1065")
		const uintoWEjHcC = BigInt("1479")
		const uintTjDnskh = BigInt("1321")
		const uintsFazvxg = BigInt("1947")
		const uintjBVMcap = BigInt("684")
		const addressJkYBFZa = accounts[0]
//		const uintF5rDddx = await StakingDextokenpUxrqno.setRewardRound.call(uintsFazvxg, uintTjDnskh, uintoWEjHcC, uintM5tQhF, {from: accounts[4]});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintjBVMcap, {from: accounts[0]});
//		const uintQzRE7Y = await StakingDextokenpUxrqno.earned.call(addressJkYBFZa, {from: accounts[1]});

		await expect(StakingDextokenpUxrqno.setRewardRound.call(uintsFazvxg, uintTjDnskh, uintoWEjHcC, uintM5tQhF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresswPWaZhV = accounts[3]
		const addressBvhQgxk = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addresswPWaZhV, addressBvhQgxk, {from: accounts[4]});
		const addressdjXj1uZ = accounts[2]
		const addressALrQBHI = accounts[4]
		const uintDBTOAwy = BigInt("695")
		const uintBaMkZV7 = await StakingDextokenpUxrqno.earned.call(addressdjXj1uZ, {from: accounts[2]});
		const boolzQul9MX = await StakingDextokenpUxrqno.freezeAccount.call(addressALrQBHI, {from: accounts[4]});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintDBTOAwy, {from: accounts[0]});

		assert.equal(boolzQul9MX, true)
		assert.equal(uintBaMkZV7, BigInt("0"))
		await expect(StakingDextokenpUxrqno.deposit.call(uintDBTOAwy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshWel2C0 = accounts[3]
		const addressKAsseF = accounts[0]
		const StakingDextokenpUxrqno = await StakingDextoken.new(addresshWel2C0, addressKAsseF, {from: accounts[4]});
		const addressxxwvokG = accounts[0]
		const uintvzdf69t = BigInt("1608")
		const addressFSpnYuA = accounts[0]
		const uintBKvRCnz = BigInt("989")
		const addresswCFDsTS = accounts[2]
		const uintzyFUM2 = BigInt("660")
		const uinthT2AxbY = await StakingDextokenpUxrqno.balanceOf.call(addressxxwvokG, {from: accounts[1]});
//		const addressMsDl92R = await StakingDextokenpUxrqno.capture.call(addressFSpnYuA, uintvzdf69t, {from: accounts[4]});
//		const addressDKrwZbP = await StakingDextokenpUxrqno.capture.call(addresswCFDsTS, uintBKvRCnz, {from: "0x0000000000000000000000000000000000000001"});
//		const uintdUIkSls = await StakingDextokenpUxrqno.deposit.call(uintzyFUM2, {from: accounts[0]});

		assert.equal(uinthT2AxbY, BigInt("0"))
		await expect(StakingDextokenpUxrqno.capture.call(addressFSpnYuA, uintvzdf69t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})