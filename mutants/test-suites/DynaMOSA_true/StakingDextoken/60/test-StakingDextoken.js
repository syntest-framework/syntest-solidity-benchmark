const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressv8McilE = accounts[1]
		const addressc5eW9xe = accounts[0]
		const StakingDextokenvWWTuFP = await StakingDextoken.new(addressv8McilE, addressc5eW9xe, {from: accounts[2]});
		const uintsl71JBU = await StakingDextokenvWWTuFP.getStartTimestamp.call({from: accounts[1]});
//		await StakingDextokenvWWTuFP.claim.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintouhGDJ2 = await StakingDextokenvWWTuFP.remainingRewards.call({from: accounts[4]});

		assert.equal(uintsl71JBU, BigInt("0"))
		await expect(StakingDextokenvWWTuFP.claim.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbuV9WfQ = accounts[1]
		const addressDi6YJr6 = accounts[4]
		const StakingDextokenqtzIYjH = await StakingDextoken.new(addressbuV9WfQ, addressDi6YJr6, {from: accounts[4]});
		const addresswAyPL8s = accounts[5]
		const addressxYPZ8SZ = accounts[2]
		const uintOWS5lDD = await StakingDextokenqtzIYjH.getClaimOf.call(addresswAyPL8s, {from: accounts[4]});
		const uintpVrgQa = await StakingDextokenqtzIYjH.getStartTimestamp.call({from: accounts[4]});
		const uintEM702sm = await StakingDextokenqtzIYjH.getWithdrawalOf.call(addressxYPZ8SZ, {from: accounts[3]});

		assert.equal(uintEM702sm, BigInt("0"))
		assert.equal(uintOWS5lDD, BigInt("0"))
		assert.equal(uintpVrgQa, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressCvfh3kD = accounts[0]
		const addresslmu4NQZ = accounts[3]
		const StakingDextokenDRKNVem = await StakingDextoken.new(addressCvfh3kD, addresslmu4NQZ, {from: accounts[1]});
		const addressrCaS1n = accounts[0]
		const uintughOWI0 = await StakingDextokenDRKNVem.totalRewards.call({from: accounts[1]});
//		await StakingDextokenDRKNVem.notifyRewards.call({from: accounts[3]});
//		const addressi1akylX = await StakingDextokenDRKNVem.updateReward.call(addressrCaS1n, {from: accounts[2]});

		assert.equal(uintughOWI0, BigInt("0"))
		await expect(StakingDextokenDRKNVem.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPvBWuR8 = accounts[4]
		const addressMwT2bCR = accounts[1]
		const StakingDextokenIriRyoO = await StakingDextoken.new(addressPvBWuR8, addressMwT2bCR, {from: accounts[4]});
		const uintHl6k39L = BigInt("1820")
		const addressHCeunfD = accounts[5]
		const addresshpSxSO3 = accounts[0]
		const addressQRCdPq0 = accounts[1]
		const uintkx42Q2V = await StakingDextokenIriRyoO.rewardPerToken.call({from: accounts[3]});
//		const uintKHxMxzq = await StakingDextokenIriRyoO.withdraw.call(uintHl6k39L, {from: accounts[4]});
//		const boolQYY6ioe = await StakingDextokenIriRyoO.unfreezeAccount.call(addressHCeunfD, {from: accounts[4]});
//		const boolj1foVwn = await StakingDextokenIriRyoO.freezeAccount.call(addresshpSxSO3, {from: accounts[3]});
//		const uintWutbUjY = await StakingDextokenIriRyoO.getTotalStakes.call({from: accounts[0]});
//		const addressuCNTSzG = await StakingDextokenIriRyoO.updateReward.call(addressQRCdPq0, {from: accounts[0]});

		assert.equal(uintkx42Q2V, BigInt("0"))
		await expect(StakingDextokenIriRyoO.withdraw.call(uintHl6k39L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressZoKTj3Q = accounts[1]
		const addressfNWc4HR = accounts[4]
		const StakingDextokenfnzlwPm = await StakingDextoken.new(addressZoKTj3Q, addressfNWc4HR, {from: accounts[4]});
		const addresss7ahMk = accounts[0]
		const addressnns0UC7 = accounts[4]
		const uintJc5TvU3 = await StakingDextokenfnzlwPm.rewardOf.call(addresss7ahMk, {from: "0x0000000000000000000000000000000000000001"});
//		const addressJxOcGt = await StakingDextokenfnzlwPm.setBeneficial.call(addressnns0UC7, {from: accounts[2]});
//		await StakingDextokenfnzlwPm.claim.call({from: accounts[5]});
//		const uintqVrhLVV = await StakingDextokenfnzlwPm.getTotalStakes.call({from: accounts[2]});

		assert.equal(uintJc5TvU3, BigInt("0"))
		await expect(StakingDextokenfnzlwPm.setBeneficial.call(addressnns0UC7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressrzZiQZ6 = accounts[1]
		const addressh4DKNLF = accounts[0]
		const StakingDextokenvWWTuFP = await StakingDextoken.new(addressrzZiQZ6, addressh4DKNLF, {from: accounts[2]});
		const uintsl71JBU = await StakingDextokenvWWTuFP.getStartTimestamp.call({from: accounts[1]});
		const uintouhGDJ2 = await StakingDextokenvWWTuFP.remainingRewards.call({from: accounts[4]});

		assert.equal(uintouhGDJ2, BigInt("0"))
		assert.equal(uintsl71JBU, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressp26QoHe = accounts[4]
		const addressaapBWN2 = "0x0000000000000000000000000000000000000001"
		const StakingDextokenigyDtQh = await StakingDextoken.new(addressp26QoHe, addressaapBWN2, {from: "0x0000000000000000000000000000000000000001"});
		const addressSKy52g = accounts[1]
		const addressja2M2SG = accounts[1]
		const addressj8KD6qb = accounts[5]
		const addressUlthiS0 = accounts[3]
		const uintI9g1fWb = await StakingDextokenigyDtQh.earned.call(addressSKy52g, {from: accounts[4]});
		const uintabW3T68 = await StakingDextokenigyDtQh.stakeOf.call(addressja2M2SG, {from: accounts[1]});
		const uintDgwNvof = await StakingDextokenigyDtQh.stakeOf.call(addressj8KD6qb, {from: accounts[0]});
		const uintzCirPkg = await StakingDextokenigyDtQh.rewardOf.call(addressUlthiS0, {from: accounts[4]});
	});

	it('test for StakingDextoken', async () => {
		const addressZ1vG0RV = accounts[1]
		const addressZnlJJN = accounts[0]
		const StakingDextokenvWWTuFP = await StakingDextoken.new(addressZ1vG0RV, addressZnlJJN, {from: accounts[2]});
		const addressip3YqtU = accounts[1]
		const uintKtk8nM = await StakingDextokenvWWTuFP.stakeOf.call(addressip3YqtU, {from: accounts[0]});
		const uintnbaPI37 = await StakingDextokenvWWTuFP.rewardPerToken.call({from: accounts[4]});
//		await StakingDextokenvWWTuFP.notifyRewards.call({from: accounts[1]});
//		const uintouhGDJ2 = await StakingDextokenvWWTuFP.remainingRewards.call({from: accounts[4]});

		assert.equal(uintKtk8nM, BigInt("0"))
		assert.equal(uintnbaPI37, BigInt("0"))
		await expect(StakingDextokenvWWTuFP.notifyRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresswpsB02a = accounts[1]
		const addressPtwGFR = accounts[5]
		const StakingDextokencON5sz = await StakingDextoken.new(addresswpsB02a, addressPtwGFR, {from: accounts[2]});
		const addressPuD4JXI = accounts[2]
		const uintywwoxRM = BigInt("1462")
		const uintwW48EbP = BigInt("386")
		const uintLWSV0HH = BigInt("1801")
		const uintmnnbFdL = BigInt("436")
		const uintGUVkKO5 = BigInt("730")
		const addressUlCRmRn = accounts[3]
		const uintI33YlIo = await StakingDextokencON5sz.getClaimOf.call(addressPuD4JXI, {from: accounts[1]});
		const uintMSx5pv4 = await StakingDextokencON5sz.setRewardRound.call(uintmnnbFdL, uintLWSV0HH, uintwW48EbP, uintywwoxRM, {from: accounts[2]});
//		const addresskztsnaf = await StakingDextokencON5sz.capture.call(addressUlCRmRn, uintGUVkKO5, {from: accounts[1]});

		assert.equal(uintI33YlIo, BigInt("0"))
		await expect(StakingDextokencON5sz.capture.call(addressUlCRmRn, uintGUVkKO5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVnCGLwD = accounts[1]
		const addressEs6y9V = accounts[0]
		const StakingDextokenvWWTuFP = await StakingDextoken.new(addressVnCGLwD, addressEs6y9V, {from: accounts[2]});
		const addressbnyntcw = accounts[5]
//		const addresszGL5Hyr = await StakingDextokenvWWTuFP.notFrozen.call(addressbnyntcw, {from: accounts[2]});
//		const uintXCpFz0V = await StakingDextokenvWWTuFP.getTotalStakes.call({from: accounts[2]});
//		const uintsl71JBU = await StakingDextokenvWWTuFP.getStartTimestamp.call({from: accounts[1]});

		await expect(StakingDextokenvWWTuFP.notFrozen.call(addressbnyntcw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslhCOmo4 = accounts[1]
		const addressU9guIqi = accounts[0]
		const StakingDextokenvWWTuFP = await StakingDextoken.new(addresslhCOmo4, addressU9guIqi, {from: accounts[2]});
		const addressL9TUahS = accounts[3]
		const addressGbwI7dK = "0x0000000000000000000000000000000000000001"
		const uintlKWTRvL = BigInt("999")
		const uintsl71JBU = await StakingDextokenvWWTuFP.getStartTimestamp.call({from: accounts[1]});
		const uintdOZV7bz = await StakingDextokenvWWTuFP.earned.call(addressL9TUahS, {from: accounts[1]});
		const uintoMgyfpj = await StakingDextokenvWWTuFP.rewardPerToken.call({from: accounts[1]});
		const uintp5TakxJ = await StakingDextokenvWWTuFP.getWithdrawalOf.call(addressGbwI7dK, {from: accounts[4]});
//		const uintIO397Jn = await StakingDextokenvWWTuFP.deposit.call(uintlKWTRvL, {from: accounts[4]});

		assert.equal(uintdOZV7bz, BigInt("0"))
		assert.equal(uintoMgyfpj, BigInt("0"))
		assert.equal(uintp5TakxJ, BigInt("0"))
		assert.equal(uintsl71JBU, BigInt("0"))
		await expect(StakingDextokenvWWTuFP.deposit.call(uintlKWTRvL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressBQbeO0x = accounts[1]
		const addressybQOo1q = accounts[0]
		const StakingDextokenvWWTuFP = await StakingDextoken.new(addressBQbeO0x, addressybQOo1q, {from: accounts[2]});
		const addressl8LKx7b = accounts[2]
		const uintGXjycUZ = await StakingDextokenvWWTuFP.totalRewards.call({from: accounts[3]});
		const uintsl71JBU = await StakingDextokenvWWTuFP.getStartTimestamp.call({from: accounts[1]});
		const addressL2gKjUP = await StakingDextokenvWWTuFP.setBeneficial.call(addressl8LKx7b, {from: accounts[2]});

		assert.equal(uintGXjycUZ, BigInt("0"))
		assert.equal(uintsl71JBU, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressbJIkX95 = accounts[4]
		const addresskedaEHC = "0x0000000000000000000000000000000000000001"
		const StakingDextokenojBKtYY = await StakingDextoken.new(addressbJIkX95, addresskedaEHC, {from: accounts[2]});
		const addressuNjGVEc = accounts[2]
		const uintbqUe5lV = BigInt("472")
//		await StakingDextokenojBKtYY.notifyRewards.call({from: accounts[2]});
//		const boolxaiux3W = await StakingDextokenojBKtYY.unfreezeAccount.call(addressuNjGVEc, {from: accounts[0]});
//		const uintD1hpBBx = await StakingDextokenojBKtYY.withdraw.call(uintbqUe5lV, {from: accounts[0]});
//		const uintIx4J7ja = await StakingDextokenojBKtYY.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uintprZhjHE = await StakingDextokenojBKtYY.getStartTimestamp.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenojBKtYY.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressR5AaEAA = accounts[1]
		const addressLLdMKyM = accounts[0]
		const StakingDextokenvWWTuFP = await StakingDextoken.new(addressR5AaEAA, addressLLdMKyM, {from: accounts[2]});
		const uintEsJY2NB = BigInt("148")
		const addressAMSOZik = accounts[4]
		const uintZigSqMG = BigInt("1787")
		const addressPWvc6XL = accounts[3]
		const addressmC9MV8F = accounts[1]
		const addressl2F6IK2 = accounts[1]
		const addressmTXFOiX = accounts[1]
//		const addressWBFh6Di = await StakingDextokenvWWTuFP.capture.call(addressAMSOZik, uintEsJY2NB, {from: accounts[2]});
//		await StakingDextokenvWWTuFP.notifyRewards.call({from: accounts[2]});
//		const uintG6n4K5h = await StakingDextokenvWWTuFP.deposit.call(uintZigSqMG, {from: accounts[2]});
//		const uintMZ8VLOC = await StakingDextokenvWWTuFP.getClaimOf.call(addressPWvc6XL, {from: accounts[3]});
//		const uinth0VruGv = await StakingDextokenvWWTuFP.getClaimOf.call(addressmC9MV8F, {from: accounts[3]});
//		const uintyXuDCfF = await StakingDextokenvWWTuFP.rewardPerToken.call({from: accounts[0]});
//		const uintJaJgdiQ = await StakingDextokenvWWTuFP.balanceOf.call(addressl2F6IK2, {from: accounts[4]});
//		const uintA8X3QXM = await StakingDextokenvWWTuFP.stakeOf.call(addressmTXFOiX, {from: accounts[0]});

		await expect(StakingDextokenvWWTuFP.capture.call(addressAMSOZik, uintEsJY2NB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressek5m7cs = accounts[1]
		const addressCBqyPaX = accounts[0]
		const StakingDextokenvWWTuFP = await StakingDextoken.new(addressek5m7cs, addressCBqyPaX, {from: accounts[2]});
		const uintKmbUNPF = BigInt("148")
		const addressxvT9aWZ = accounts[0]
		const uintF5MSQ8O = BigInt("1787")
		const addressGADieKf = accounts[3]
		const addressRc4NUnc = accounts[2]
		const addressWlUHrA7 = accounts[1]
//		const addressWBFh6Di = await StakingDextokenvWWTuFP.capture.call(addressxvT9aWZ, uintKmbUNPF, {from: accounts[2]});
//		await StakingDextokenvWWTuFP.notifyRewards.call({from: accounts[2]});
//		const uintG6n4K5h = await StakingDextokenvWWTuFP.deposit.call(uintF5MSQ8O, {from: accounts[2]});
//		const uintMZ8VLOC = await StakingDextokenvWWTuFP.getClaimOf.call(addressGADieKf, {from: accounts[3]});
//		const uintO5kBa18 = await StakingDextokenvWWTuFP.totalRewards.call({from: accounts[0]});
//		const uintyXuDCfF = await StakingDextokenvWWTuFP.rewardPerToken.call({from: accounts[0]});
//		const uintJaJgdiQ = await StakingDextokenvWWTuFP.balanceOf.call(addressRc4NUnc, {from: accounts[4]});
//		const uintA8X3QXM = await StakingDextokenvWWTuFP.stakeOf.call(addressWlUHrA7, {from: accounts[0]});

		await expect(StakingDextokenvWWTuFP.capture.call(addressxvT9aWZ, uintKmbUNPF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresskGttfSi = accounts[1]
		const addressTmVCC0a = accounts[0]
		const StakingDextokenvWWTuFP = await StakingDextoken.new(addresskGttfSi, addressTmVCC0a, {from: accounts[2]});
		const uinto7ZXwSs = BigInt("148")
		const addressIBGpmcr = accounts[1]
		const uintBhfWyJq = BigInt("1787")
		const uintEMUhFLP = BigInt("1864")
		const uintvTylCKS = BigInt("399")
		const uintkwZlCcI = BigInt("378")
		const uintGW9aikA = BigInt("1278")
		const addresspDLwTI0 = accounts[1]
//		const addressWBFh6Di = await StakingDextokenvWWTuFP.capture.call(addressIBGpmcr, uinto7ZXwSs, {from: accounts[2]});
//		const uintG6n4K5h = await StakingDextokenvWWTuFP.deposit.call(uintBhfWyJq, {from: accounts[2]});
//		const uintphFu8Ln = await StakingDextokenvWWTuFP.setRewardRound.call(uintGW9aikA, uintkwZlCcI, uintvTylCKS, uintEMUhFLP, {from: accounts[0]});
//		const uinth0VruGv = await StakingDextokenvWWTuFP.getClaimOf.call(addresspDLwTI0, {from: accounts[3]});

		await expect(StakingDextokenvWWTuFP.capture.call(addressIBGpmcr, uinto7ZXwSs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressOP8rt7x = accounts[0]
		const addressgC2xTgb = accounts[2]
		const StakingDextokenX8LhyTR = await StakingDextoken.new(addressOP8rt7x, addressgC2xTgb, {from: accounts[5]});
		const addressr91FCuj = accounts[1]
		const uintnOuXtkz = BigInt("1538")
		const uintfAF0NcO = BigInt("1653")
		const uintCrS7Lo7 = BigInt("1689")
		const uintlv4Aa6a = BigInt("939")
		const addresska7xsx4 = accounts[5]
		const boolsmna9o9 = await StakingDextokenX8LhyTR.freezeAccount.call(addressr91FCuj, {from: accounts[5]});
		const uintcufDij2 = await StakingDextokenX8LhyTR.getTotalStakes.call({from: accounts[1]});
//		const uintB9QIDWH = await StakingDextokenX8LhyTR.setRewardRound.call(uintlv4Aa6a, uintCrS7Lo7, uintfAF0NcO, uintnOuXtkz, {from: accounts[4]});
//		const addresse5Pky9H = await StakingDextokenX8LhyTR.setBeneficial.call(addresska7xsx4, {from: accounts[2]});

		assert.equal(boolsmna9o9, true)
		assert.equal(uintcufDij2, BigInt("0"))
		await expect(StakingDextokenX8LhyTR.setRewardRound.call(uintlv4Aa6a, uintCrS7Lo7, uintfAF0NcO, uintnOuXtkz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressUu7Vq3S = accounts[3]
		const addresss5p2rLJ = accounts[3]
		const StakingDextokenR1OpvFB = await StakingDextoken.new(addressUu7Vq3S, addresss5p2rLJ, {from: accounts[2]});
		const addressHPiHrBZ = accounts[1]
		const addressYs83vlI = accounts[3]
		const addressFDuEIF8 = accounts[0]
		const addressRGUNtRs = accounts[1]
		const addressmiwOv3u = accounts[2]
		const uintTpdoxnN = await StakingDextokenR1OpvFB.getClaimOf.call(addressHPiHrBZ, {from: accounts[0]});
		const uintpD0YFUq = await StakingDextokenR1OpvFB.getWithdrawalOf.call(addressYs83vlI, {from: accounts[4]});
		const uintFA9abTB = await StakingDextokenR1OpvFB.getTotalStakes.call({from: accounts[5]});
		const uintv6eTI0i = await StakingDextokenR1OpvFB.getWithdrawalOf.call(addressFDuEIF8, {from: accounts[0]});
//		const boolYxph5uz = await StakingDextokenR1OpvFB.unfreezeAccount.call(addressRGUNtRs, {from: accounts[2]});
//		const uintSNPnKYE = await StakingDextokenR1OpvFB.getClaimOf.call(addressmiwOv3u, {from: accounts[0]});

		assert.equal(uintFA9abTB, BigInt("0"))
		assert.equal(uintTpdoxnN, BigInt("0"))
		assert.equal(uintpD0YFUq, BigInt("0"))
		assert.equal(uintv6eTI0i, BigInt("0"))
		await expect(StakingDextokenR1OpvFB.unfreezeAccount.call(addressRGUNtRs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})