const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressRM1x8yg = accounts[3]
		const addressTUmCoZW = accounts[1]
		const StakingDextokenWcBMC04 = await StakingDextoken.new(addressRM1x8yg, addressTUmCoZW, {from: accounts[2]});
		const addressvREywEd = accounts[3]
		const addressvGzSO3 = accounts[2]
		const addressSPd97HQ = accounts[4]
		const uintj9y2n7Q = await StakingDextokenWcBMC04.lastTimeRewardApplicable.call({from: accounts[3]});
		const boolT06Qk99 = await StakingDextokenWcBMC04.freezeAccount.call(addressvREywEd, {from: accounts[5]});
		const addressG1BXAxd = await StakingDextokenWcBMC04.setBeneficial.call(addressvGzSO3, {from: accounts[0]});
		const uintKikLwbl = await StakingDextokenWcBMC04.rewardOf.call(addressSPd97HQ, {from: accounts[3]});

		assert.equal(uintj9y2n7Q, BigInt("0"))
		await expect(StakingDextokenWcBMC04.freezeAccount.call(addressvREywEd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressNnjCCDj = accounts[1]
		const addressa66AzFR = accounts[0]
		const StakingDextokenwBKJ7ut = await StakingDextoken.new(addressNnjCCDj, addressa66AzFR, {from: accounts[2]});
		const uintdJ8OHLb = BigInt("169")
		const addressCY4Anu9 = accounts[4]
		const addressfYZnWZy = accounts[4]
		const uintQTGzpsA = BigInt("1185")
		const addressSOr6lJV = accounts[0]
		const uintRdijpCP = await StakingDextokenwBKJ7ut.withdraw.call(uintdJ8OHLb, {from: accounts[2]});
		const boolsbffg8H = await StakingDextokenwBKJ7ut.freezeAccount.call(addressCY4Anu9, {from: accounts[2]});
		const uintqt1ZEKw = await StakingDextokenwBKJ7ut.stakeOf.call(addressfYZnWZy, {from: accounts[1]});
		const addressAZeMutA = await StakingDextokenwBKJ7ut.capture.call(addressSOr6lJV, uintQTGzpsA, {from: accounts[3]});

		await expect(StakingDextokenwBKJ7ut.withdraw.call(uintdJ8OHLb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYMhU4iM = accounts[1]
		const address6Igq6x = accounts[0]
		const StakingDextokenL39Hksn = await StakingDextoken.new(addressYMhU4iM, address6Igq6x, {from: accounts[3]});
		const addressj2a4Z8M = accounts[4]
		const addressDm6QeB8 = "0x0000000000000000000000000000000000000001"
		const addressZ7L0Cmu = accounts[0]
		const addressqwwGESU = accounts[1]
		const uintg90z1AQ = await StakingDextokenL39Hksn.stakeOf.call(addressj2a4Z8M, {from: accounts[1]});
		const addresstrqHRag = await StakingDextokenL39Hksn.setBeneficial.call(addressDm6QeB8, {from: accounts[2]});
		const uintPWIgGrl = await StakingDextokenL39Hksn.rewardOf.call(addressZ7L0Cmu, {from: accounts[4]});
		const uintxKxgA31 = await StakingDextokenL39Hksn.getEndTimestamp.call({from: accounts[4]});
		const boolRHeiW4s = await StakingDextokenL39Hksn.unfreezeAccount.call(addressqwwGESU, {from: accounts[2]});

		assert.equal(uintg90z1AQ, BigInt("0"))
		await expect(StakingDextokenL39Hksn.setBeneficial.call(addressDm6QeB8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressnCq1Pa = accounts[4]
		const addressNWKnemf = accounts[0]
		const StakingDextokenoD9iiX = await StakingDextoken.new(addressnCq1Pa, addressNWKnemf, {from: accounts[3]});
		const addressUXkntLo = accounts[0]
		const uintOQTUuRg = BigInt("1931")
		const uintDT4cIWC = BigInt("613")
		const uintO7YDeLt = BigInt("289")
		const uinthkmNyrV = BigInt("463")
		const uintIfTx9vl = await StakingDextokenoD9iiX.remainingRewards.call({from: accounts[5]});
		const uinty5wS4dm = await StakingDextokenoD9iiX.earned.call(addressUXkntLo, {from: accounts[2]});
		const uintk5t4B4 = await StakingDextokenoD9iiX.setRewardRound.call(uinthkmNyrV, uintO7YDeLt, uintDT4cIWC, uintOQTUuRg, {from: accounts[2]});
		await StakingDextokenoD9iiX.claim.call({from: accounts[0]});

		assert.equal(uintIfTx9vl, BigInt("0"))
		assert.equal(uinty5wS4dm, BigInt("0"))
		await expect(StakingDextokenoD9iiX.setRewardRound.call(uinthkmNyrV, uintO7YDeLt, uintDT4cIWC, uintOQTUuRg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressRpZtKJ7 = accounts[1]
		const addressIKyLzVf = accounts[3]
		const StakingDextokengC80v4p = await StakingDextoken.new(addressRpZtKJ7, addressIKyLzVf, {from: accounts[4]});
		const addressz4H2EgW = accounts[3]
		const addressduolqUP = accounts[4]
		const uintOSjLFvA = await StakingDextokengC80v4p.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
		const uintn7Yqvmn = await StakingDextokengC80v4p.getEndTimestamp.call({from: accounts[4]});
		const uintWUxwh7X = await StakingDextokengC80v4p.getClaimOf.call(addressz4H2EgW, {from: accounts[1]});
		const uintjiBVOz = await StakingDextokengC80v4p.totalRewards.call({from: accounts[0]});
		const uintOIcbT0a = await StakingDextokengC80v4p.earned.call(addressduolqUP, {from: "0x0000000000000000000000000000000000000001"});
		const uintiJ03Kz = await StakingDextokengC80v4p.rewardPerToken.call({from: accounts[2]});

		assert.equal(uintOIcbT0a, BigInt("0"))
		assert.equal(uintOSjLFvA, BigInt("0"))
		assert.equal(uintWUxwh7X, BigInt("0"))
		assert.equal(uintiJ03Kz, BigInt("0"))
		assert.equal(uintjiBVOz, BigInt("0"))
		assert.equal(uintn7Yqvmn, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressuBPor0I = accounts[4]
		const addressgbDnZg0 = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressuBPor0I, addressgbDnZg0, {from: accounts[5]});
		const uintwvN8FDo = BigInt("1110")
		const uintkKdMNqY = BigInt("193")
		const uintVXznagO = BigInt("149")
		const uintAQG5rc1 = BigInt("896")
		const uintrsGsK2s = await StakingDextokenyh1xbg.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint8hqMvn = await StakingDextokenyh1xbg.setRewardRound.call(uintAQG5rc1, uintVXznagO, uintkKdMNqY, uintwvN8FDo, {from: accounts[5]});

		assert.equal(uintrsGsK2s, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressm8yQgPa = accounts[4]
		const addressCgZ6VGd = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressm8yQgPa, addressCgZ6VGd, {from: accounts[5]});
		const addressapIP95t = accounts[3]
		const uintaR0u2G0 = BigInt("1040")
		const uintXu1fFD9 = BigInt("651")
		const uintGw1IAk = BigInt("1324")
		const uintBQy3zPm = BigInt("530")
		const uintrsGsK2s = await StakingDextokenyh1xbg.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressMOdseZE = await StakingDextokenyh1xbg.notFrozen.call(addressapIP95t, {from: accounts[5]});
		const uintt7IUxZV = await StakingDextokenyh1xbg.setRewardRound.call(uintBQy3zPm, uintGw1IAk, uintXu1fFD9, uintaR0u2G0, {from: accounts[2]});

		assert.equal(uintrsGsK2s, BigInt("0"))
		await expect(StakingDextokenyh1xbg.notFrozen.call(addressapIP95t, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressdNJYbv = accounts[4]
		const addressYTYEDo5 = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressdNJYbv, addressYTYEDo5, {from: accounts[5]});
		const uintMcLK7sB = BigInt("1040")
		const uintLskDEAe = BigInt("656")
		const uintoqlfPMq = BigInt("1324")
		const uintoalmT0y = BigInt("530")
		const uintHhYXte8 = await StakingDextokenyh1xbg.lastTimeRewardApplicable.call({from: accounts[3]});
		const uintjAf6UFe = await StakingDextokenyh1xbg.rewardPerToken.call({from: accounts[3]});
		await StakingDextokenyh1xbg.claim.call({from: accounts[0]});
		const uintrsGsK2s = await StakingDextokenyh1xbg.lastTimeRewardApplicable.call({from: accounts[3]});
		const uintt7IUxZV = await StakingDextokenyh1xbg.setRewardRound.call(uintoalmT0y, uintoqlfPMq, uintLskDEAe, uintMcLK7sB, {from: accounts[2]});

		assert.equal(uintHhYXte8, BigInt("0"))
		assert.equal(uintjAf6UFe, BigInt("0"))
		await expect(StakingDextokenyh1xbg.claim.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressIpM0MUB = accounts[4]
		const addresspIia3pN = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressIpM0MUB, addresspIia3pN, {from: accounts[5]});
		const uintx0SlTVy = BigInt("23")
		const uinttuxIvC = BigInt("1040")
		const uintChSWJ9z = BigInt("651")
		const uintKyYZWyx = BigInt("1291")
		const uintv7gf6Rz = BigInt("530")
		const uintySeX5bo = await StakingDextokenyh1xbg.deposit.call(uintx0SlTVy, {from: accounts[2]});
		const uintt7IUxZV = await StakingDextokenyh1xbg.setRewardRound.call(uintv7gf6Rz, uintKyYZWyx, uintChSWJ9z, uinttuxIvC, {from: accounts[2]});

		await expect(StakingDextokenyh1xbg.deposit.call(uintx0SlTVy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressmlTpHAn = accounts[4]
		const addressmYpTN7j = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressmlTpHAn, addressmYpTN7j, {from: accounts[5]});
		const uint4B2h10 = BigInt("0")
		const uintySeX5bo = await StakingDextokenyh1xbg.deposit.call(uint4B2h10, {from: accounts[2]});

		await expect(StakingDextokenyh1xbg.deposit.call(uint4B2h10, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGYar5qf = accounts[4]
		const addressNqC1U8t = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressGYar5qf, addressNqC1U8t, {from: accounts[5]});
		const addressGtfDX0N = accounts[3]
		const uintF43Hdfi = BigInt("1040")
		const uintA9025Ea = BigInt("651")
		const uintC3jSsNt = BigInt("1324")
		const uintGsiA4Fv = BigInt("547")
		const uintXGgLInN = await StakingDextokenyh1xbg.getWithdrawalOf.call(addressGtfDX0N, {from: "0x0000000000000000000000000000000000000001"});
		const uintt7IUxZV = await StakingDextokenyh1xbg.setRewardRound.call(uintGsiA4Fv, uintC3jSsNt, uintA9025Ea, uintF43Hdfi, {from: accounts[2]});

		assert.equal(uintXGgLInN, BigInt("0"))
		await expect(StakingDextokenyh1xbg.setRewardRound.call(uintGsiA4Fv, uintC3jSsNt, uintA9025Ea, uintF43Hdfi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresssgEOzd8 = accounts[4]
		const addressVE6qls8 = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addresssgEOzd8, addressVE6qls8, {from: accounts[5]});
		const addressg01hAD = accounts[1]
		const addressUOl66vc = accounts[1]
		const uintZsfynb3 = BigInt("992")
		const uintjBvPYHE = await StakingDextokenyh1xbg.earned.call(addressg01hAD, {from: accounts[3]});
		const uintcNiDAOa = await StakingDextokenyh1xbg.rewardOf.call(addressUOl66vc, {from: accounts[4]});
		const uintySeX5bo = await StakingDextokenyh1xbg.deposit.call(uintZsfynb3, {from: accounts[2]});
		await StakingDextokenyh1xbg.notifyRewards.call({from: accounts[4]});

		assert.equal(uintcNiDAOa, BigInt("0"))
		assert.equal(uintjBvPYHE, BigInt("0"))
		await expect(StakingDextokenyh1xbg.deposit.call(uintZsfynb3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfY6Ybrj = accounts[4]
		const addressPfBUyjl = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressfY6Ybrj, addressPfBUyjl, {from: accounts[5]});
		const uintwzx7NW = BigInt("50")
		const uintqU7Dm4Z = await StakingDextokenyh1xbg.getStartTimestamp.call({from: accounts[3]});
		const uintySeX5bo = await StakingDextokenyh1xbg.deposit.call(uintwzx7NW, {from: accounts[2]});

		assert.equal(uintqU7Dm4Z, BigInt("0"))
		await expect(StakingDextokenyh1xbg.deposit.call(uintwzx7NW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressUTNayVz = accounts[5]
		const addressz9yM0Ut = accounts[1]
		const StakingDextokenvwAzbaC = await StakingDextoken.new(addressUTNayVz, addressz9yM0Ut, {from: "0x0000000000000000000000000000000000000001"});
		const addressLmh9cH = accounts[5]
		await StakingDextokenvwAzbaC.claim.call({from: accounts[2]});
		await StakingDextokenvwAzbaC.notifyRewards.call({from: accounts[3]});
		const uintqnkfS5W = await StakingDextokenvwAzbaC.getWithdrawalOf.call(addressLmh9cH, {from: accounts[4]});
	});

	it('test for StakingDextoken', async () => {
		const addressFoZg5Vs = accounts[4]
		const addresshIXCsic = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressFoZg5Vs, addresshIXCsic, {from: accounts[5]});
		const uintmH5NQne = BigInt("1040")
		const uintEu425K3 = BigInt("651")
		const uintndygHUm = BigInt("1324")
		const uintOJENhJa = BigInt("530")
		await StakingDextokenyh1xbg.notifyRewards.call({from: accounts[5]});
		const uintt7IUxZV = await StakingDextokenyh1xbg.setRewardRound.call(uintOJENhJa, uintndygHUm, uintEu425K3, uintmH5NQne, {from: accounts[2]});

		await expect(StakingDextokenyh1xbg.notifyRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresspTgYxUp = accounts[4]
		const addressLOzNRld = accounts[5]
		const StakingDextokeneSv9gjS = await StakingDextoken.new(addresspTgYxUp, addressLOzNRld, {from: accounts[1]});
		const uintCZKfcla = BigInt("475")
		const uintA6gpgZ3 = BigInt("1249")
		const uintkoD3fe3 = BigInt("276")
		const uinte4a2Pwf = BigInt("159")
		const addressM6Ky4Ag = accounts[2]
		const addressCkQ0XQ6 = accounts[4]
		const addressCymFPrI = accounts[2]
		const addressbo61IT5 = accounts[1]
		const uint5CA33a = await StakingDextokeneSv9gjS.getEndTimestamp.call({from: accounts[0]});
		const uintvpSigWH = await StakingDextokeneSv9gjS.setRewardRound.call(uinte4a2Pwf, uintkoD3fe3, uintA6gpgZ3, uintCZKfcla, {from: accounts[1]});
		const uintCWSasuX = await StakingDextokeneSv9gjS.earned.call(addressM6Ky4Ag, {from: accounts[2]});
		const booliLd8b4j = await StakingDextokeneSv9gjS.unfreezeAccount.call(addressCkQ0XQ6, {from: accounts[5]});
		const boolVbt7Ziu = await StakingDextokeneSv9gjS.unfreezeAccount.call(addressCymFPrI, {from: accounts[1]});
		const addressgRg4tf2 = await StakingDextokeneSv9gjS.setBeneficial.call(addressbo61IT5, {from: accounts[1]});

		assert.equal(uint5CA33a, BigInt("0"))
		await expect(StakingDextokeneSv9gjS.setRewardRound.call(uinte4a2Pwf, uintkoD3fe3, uintA6gpgZ3, uintCZKfcla, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressdwaI6w = accounts[4]
		const addresspgo23Ik = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressdwaI6w, addresspgo23Ik, {from: accounts[5]});
		const uinty5o9tTG = BigInt("1373")
		const addressrwq6xqr = accounts[0]
		const uintxMuQzGW = BigInt("32")
		const addressFurUqN0 = await StakingDextokenyh1xbg.capture.call(addressrwq6xqr, uinty5o9tTG, {from: accounts[5]});
		const uintySeX5bo = await StakingDextokenyh1xbg.deposit.call(uintxMuQzGW, {from: accounts[2]});
		const uintnfK95kZ = await StakingDextokenyh1xbg.rewardPerToken.call({from: accounts[1]});

		await expect(StakingDextokenyh1xbg.capture.call(addressrwq6xqr, uinty5o9tTG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslsdeLuK = accounts[4]
		const addressnVT71Eb = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addresslsdeLuK, addressnVT71Eb, {from: accounts[5]});
		const addressrza9qsz = accounts[0]
		const addressmcAwRhx = accounts[3]
		const addresslcuySXR = accounts[2]
		const uintPqA2cP7 = await StakingDextokenyh1xbg.stakeOf.call(addressrza9qsz, {from: accounts[4]});
		const uinth7iGC5e = await StakingDextokenyh1xbg.getWithdrawalOf.call(addressmcAwRhx, {from: accounts[1]});
		const addressHSTkbnP = await StakingDextokenyh1xbg.setBeneficial.call(addresslcuySXR, {from: accounts[5]});
		await StakingDextokenyh1xbg.notifyRewards.call({from: accounts[5]});

		assert.equal(uintPqA2cP7, BigInt("0"))
		assert.equal(uinth7iGC5e, BigInt("0"))
		await expect(StakingDextokenyh1xbg.notifyRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressb1yWXi = accounts[4]
		const addressd8YFdjL = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressb1yWXi, addressd8YFdjL, {from: accounts[5]});
		const addressGTSAhYp = accounts[1]
		const uintMVnRROH = BigInt("578")
		const addresse14gAsr = accounts[4]
		const uintDT6Np6Y = BigInt("1943")
		const boolEoZ6RaB = await StakingDextokenyh1xbg.unfreezeAccount.call(addressGTSAhYp, {from: accounts[5]});
		await StakingDextokenyh1xbg.notifyRewards.call({from: accounts[5]});
		const addressoIyfcP8 = await StakingDextokenyh1xbg.capture.call(addresse14gAsr, uintMVnRROH, {from: accounts[1]});
		const uintDtnZx0 = await StakingDextokenyh1xbg.withdraw.call(uintDT6Np6Y, {from: accounts[0]});

		await expect(StakingDextokenyh1xbg.unfreezeAccount.call(addressGTSAhYp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressqISEYmK = accounts[4]
		const addressvgdaH1h = accounts[1]
		const StakingDextokenyh1xbg = await StakingDextoken.new(addressqISEYmK, addressvgdaH1h, {from: accounts[5]});
		const addressXvOLo9 = accounts[3]
		const boolylD2IUH = await StakingDextokenyh1xbg.freezeAccount.call(addressXvOLo9, {from: accounts[5]});
		const uintx8TZT44 = await StakingDextokenyh1xbg.lastTimeRewardApplicable.call({from: accounts[1]});
		await StakingDextokenyh1xbg.notifyRewards.call({from: accounts[5]});

		assert.equal(boolylD2IUH, true)
		assert.equal(uintx8TZT44, BigInt("0"))
		await expect(StakingDextokenyh1xbg.notifyRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})