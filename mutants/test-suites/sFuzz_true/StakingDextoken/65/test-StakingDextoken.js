const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressOofEv6o = accounts[4]
		const addressHDRdNcT = "0x0000000000000000000000000000000000000001"
		const StakingDextokenuSDdQzq = await StakingDextoken.new(addressOofEv6o, addressHDRdNcT, {from: accounts[2]});
		const uintymBTg4Y = BigInt("797")
		const uinthuu537B = BigInt("1293")
		const uintGWStgqJ = BigInt("388")
		const uintdGeRJSM = BigInt("1947")
		const uint5qJEeN = BigInt("1228")
		const addressJRUnNfS = accounts[0]
//		const uintA1Nahkk = await StakingDextokenuSDdQzq.setRewardRound.call(uintdGeRJSM, uintGWStgqJ, uinthuu537B, uintymBTg4Y, {from: accounts[0]});
//		const addressaj0hpLj = await StakingDextokenuSDdQzq.capture.call(addressJRUnNfS, uint5qJEeN, {from: accounts[1]});

		await expect(StakingDextokenuSDdQzq.setRewardRound.call(uintdGeRJSM, uintGWStgqJ, uinthuu537B, uintymBTg4Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbVNFSR1 = accounts[2]
		const addressgp8Yw0b = accounts[1]
		const StakingDextokenWVnDALc = await StakingDextoken.new(addressbVNFSR1, addressgp8Yw0b, {from: accounts[4]});
		const addressYZNsCDD = "0x0000000000000000000000000000000000000001"
		const uintqNmWOAU = await StakingDextokenWVnDALc.stakeOf.call(addressYZNsCDD, {from: accounts[1]});
//		await StakingDextokenWVnDALc.notifyRewards.call({from: accounts[5]});
//		const uint6OBVP9 = await StakingDextokenWVnDALc.remainingRewards.call({from: accounts[4]});

		assert.equal(uintqNmWOAU, BigInt("0"))
		await expect(StakingDextokenWVnDALc.notifyRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPO9qx6y = accounts[3]
		const addresswvKW34a = accounts[1]
		const StakingDextokenAGiscvF = await StakingDextoken.new(addressPO9qx6y, addresswvKW34a, {from: accounts[0]});
		const uintazlPuR = BigInt("1235")
		const uintDve1aKI = BigInt("46")
//		const uintvH7UcUA = await StakingDextokenAGiscvF.deposit.call(uintazlPuR, {from: accounts[2]});
//		const uintkbBypSN = await StakingDextokenAGiscvF.withdraw.call(uintDve1aKI, {from: accounts[0]});
//		await StakingDextokenAGiscvF.notifyRewards.call({from: accounts[4]});

		await expect(StakingDextokenAGiscvF.deposit.call(uintazlPuR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressfdzw2a = accounts[4]
		const addressY5D4Kc9 = accounts[0]
		const StakingDextokengsRqv8U = await StakingDextoken.new(addressfdzw2a, addressY5D4Kc9, {from: accounts[2]});
		const uintYzo9Aoz = BigInt("383")
		const addressfZblwge = accounts[1]
//		await StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]});
//		const addressBjQCaxS = await StakingDextokengsRqv8U.capture.call(addressfZblwge, uintYzo9Aoz, {from: accounts[3]});

		await expect(StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEuuQiPT = accounts[1]
		const address3lJexd = accounts[2]
		const StakingDextokenoomQITD = await StakingDextoken.new(addressEuuQiPT, address3lJexd, {from: accounts[0]});
		const addressIRv62VK = accounts[2]
		const addressQTcxKPd = accounts[5]
		const addresslOXY6ME = accounts[3]
//		const addressEjhvZK0 = await StakingDextokenoomQITD.updateReward.call(addressIRv62VK, {from: accounts[3]});
//		const uintC3tP5ra = await StakingDextokenoomQITD.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uintlbnPEQd = await StakingDextokenoomQITD.getStartTimestamp.call({from: accounts[4]});
//		const uintC2mek57 = await StakingDextokenoomQITD.getClaimOf.call(addressQTcxKPd, {from: accounts[0]});
//		const uintcleZD7M = await StakingDextokenoomQITD.getClaimOf.call(addresslOXY6ME, {from: accounts[3]});

		await expect(StakingDextokenoomQITD.updateReward.call(addressIRv62VK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGo1YqAW = accounts[2]
		const addresshrNpjlt = "0x0000000000000000000000000000000000000001"
		const StakingDextokenQnnX0oB = await StakingDextoken.new(addressGo1YqAW, addresshrNpjlt, {from: accounts[0]});
		const addressoqypu66 = "0x0000000000000000000000000000000000000001"
		const addressBrmnJvK = accounts[0]
		const uintPVb5qDB = await StakingDextokenQnnX0oB.lastTimeRewardApplicable.call({from: accounts[4]});
		const uintiNpTyst = await StakingDextokenQnnX0oB.totalRewards.call({from: accounts[0]});
		const uintKMwbKNT = await StakingDextokenQnnX0oB.remainingRewards.call({from: accounts[2]});
//		const boolwoU7tsR = await StakingDextokenQnnX0oB.unfreezeAccount.call(addressoqypu66, {from: accounts[5]});
//		const uintiCFiV7 = await StakingDextokenQnnX0oB.earned.call(addressBrmnJvK, {from: accounts[1]});

		assert.equal(uintKMwbKNT, BigInt("0"))
		assert.equal(uintPVb5qDB, BigInt("0"))
		assert.equal(uintiNpTyst, BigInt("0"))
		await expect(StakingDextokenQnnX0oB.unfreezeAccount.call(addressoqypu66, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressh2CgevA = accounts[5]
		const addressVjBtCMQ = accounts[3]
		const StakingDextokenUjmR68 = await StakingDextoken.new(addressh2CgevA, addressVjBtCMQ, {from: accounts[0]});
		const uintGbeNkg7 = BigInt("1012")
		const addressPlBU90V = accounts[2]
		const uintSAaZc5m = await StakingDextokenUjmR68.totalRewards.call({from: accounts[3]});
		const uintccrMmy = await StakingDextokenUjmR68.totalRewards.call({from: accounts[1]});
//		const addressv1IVU17 = await StakingDextokenUjmR68.capture.call(addressPlBU90V, uintGbeNkg7, {from: accounts[0]});
//		const uintWw47WI7 = await StakingDextokenUjmR68.totalRewards.call({from: accounts[1]});

		assert.equal(uintSAaZc5m, BigInt("0"))
		assert.equal(uintccrMmy, BigInt("0"))
		await expect(StakingDextokenUjmR68.capture.call(addressPlBU90V, uintGbeNkg7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressH7hGyVr = accounts[5]
		const addressXUa5PUr = accounts[2]
		const StakingDextokenwtxHnkm = await StakingDextoken.new(addressH7hGyVr, addressXUa5PUr, {from: accounts[3]});
		const addressVhzPcIq = accounts[4]
		const addresstFWcPUN = "0x0000000000000000000000000000000000000001"
		const uintVVljYr = BigInt("1506")
		const uintHpbkK48 = await StakingDextokenwtxHnkm.getClaimOf.call(addressVhzPcIq, {from: accounts[1]});
		const uintbE6zUb6 = await StakingDextokenwtxHnkm.earned.call(addresstFWcPUN, {from: "0x0000000000000000000000000000000000000001"});
//		const uintrmVXPI9 = await StakingDextokenwtxHnkm.withdraw.call(uintVVljYr, {from: accounts[3]});

		assert.equal(uintHpbkK48, BigInt("0"))
		assert.equal(uintbE6zUb6, BigInt("0"))
		await expect(StakingDextokenwtxHnkm.withdraw.call(uintVVljYr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressc0uZNeU = accounts[2]
		const addressAuvXHq = accounts[0]
		const StakingDextokenigGrBAC = await StakingDextoken.new(addressc0uZNeU, addressAuvXHq, {from: accounts[3]});
		const addressW2XgayM = accounts[1]
		const uintZTYkJb = await StakingDextokenigGrBAC.earned.call(addressW2XgayM, {from: "0x0000000000000000000000000000000000000001"});
		const uinth2jLvE = await StakingDextokenigGrBAC.getStartTimestamp.call({from: accounts[0]});

		assert.equal(uintZTYkJb, BigInt("0"))
		assert.equal(uinth2jLvE, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressXHzDxP7 = accounts[2]
		const addressTKcIUv3 = accounts[2]
		const StakingDextokenuFafSGy = await StakingDextoken.new(addressXHzDxP7, addressTKcIUv3, {from: accounts[4]});
		const addresslkALCo3 = accounts[0]
		const addressW7fjltC = accounts[5]
		const addressZDamBMP = accounts[2]
		const addresslT10Gev = accounts[1]
		const uint5QETo6 = BigInt("824")
		const addressCyV1hL = accounts[1]
		const uintqxEE8v7 = await StakingDextokenuFafSGy.getWithdrawalOf.call(addresslkALCo3, {from: accounts[1]});
//		const boolSAf0rFp = await StakingDextokenuFafSGy.unfreezeAccount.call(addressW7fjltC, {from: accounts[3]});
//		const addressc5S5DwY = await StakingDextokenuFafSGy.setBeneficial.call(addressZDamBMP, {from: accounts[4]});
//		const boolOkE2Oky = await StakingDextokenuFafSGy.freezeAccount.call(addresslT10Gev, {from: accounts[1]});
//		const uinta3GRUl6 = await StakingDextokenuFafSGy.withdraw.call(uint5QETo6, {from: accounts[3]});
//		const uintdu4kqK6 = await StakingDextokenuFafSGy.getClaimOf.call(addressCyV1hL, {from: accounts[1]});

		assert.equal(uintqxEE8v7, BigInt("0"))
		await expect(StakingDextokenuFafSGy.unfreezeAccount.call(addressW7fjltC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressTj9qX42 = accounts[4]
		const addressjejwPNC = accounts[0]
		const StakingDextokengsRqv8U = await StakingDextoken.new(addressTj9qX42, addressjejwPNC, {from: accounts[2]});
		const uintKosjg6M = await StakingDextokengsRqv8U.getEndTimestamp.call({from: accounts[5]});
//		await StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]});

		assert.equal(uintKosjg6M, BigInt("0"))
		await expect(StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressNqiKsqv = accounts[4]
		const address7sPBsx = accounts[0]
		const StakingDextokengsRqv8U = await StakingDextoken.new(addressNqiKsqv, address7sPBsx, {from: accounts[2]});
		const uintXl7Lj6F = BigInt("1193")
		const addresscC3cZBK = accounts[4]
//		await StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]});
//		const addressz2Rat26 = await StakingDextokengsRqv8U.capture.call(addresscC3cZBK, uintXl7Lj6F, {from: accounts[2]});

		await expect(StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCcCv8tG = accounts[4]
		const addressNFh2Dkt = accounts[1]
		const StakingDextokenBHGsZBt = await StakingDextoken.new(addressCcCv8tG, addressNFh2Dkt, {from: accounts[1]});
		const addresspqodpAb = accounts[2]
		const uinteODdHPv = BigInt("1929")
		const addresskiOKhRe = accounts[1]
		const uintELO97ks = await StakingDextokenBHGsZBt.earned.call(addresspqodpAb, {from: accounts[3]});
//		const addressnsdE0pz = await StakingDextokenBHGsZBt.capture.call(addresskiOKhRe, uinteODdHPv, {from: accounts[1]});

		assert.equal(uintELO97ks, BigInt("0"))
		await expect(StakingDextokenBHGsZBt.capture.call(addresskiOKhRe, uinteODdHPv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressq0dFI2z = accounts[4]
		const addressgB9As4N = accounts[0]
		const StakingDextokengsRqv8U = await StakingDextoken.new(addressq0dFI2z, addressgB9As4N, {from: accounts[2]});
		const addressNWJhL3 = accounts[2]
		const addressS7xmNj9 = "0x0000000000000000000000000000000000000001"
		const uint2C8QFp = BigInt("357")
		const addressT3WNsTO = accounts[1]
		const uintdNes7ef = await StakingDextokengsRqv8U.getWithdrawalOf.call(addressNWJhL3, {from: accounts[4]});
		const uintQ8bUZwq = await StakingDextokengsRqv8U.rewardOf.call(addressS7xmNj9, {from: accounts[3]});
//		const addressBjQCaxS = await StakingDextokengsRqv8U.capture.call(addressT3WNsTO, uint2C8QFp, {from: accounts[3]});

		assert.equal(uintQ8bUZwq, BigInt("0"))
		assert.equal(uintdNes7ef, BigInt("0"))
		await expect(StakingDextokengsRqv8U.capture.call(addressT3WNsTO, uint2C8QFp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressS2jzPpa = accounts[4]
		const addressND242do = accounts[0]
		const StakingDextokengsRqv8U = await StakingDextoken.new(addressS2jzPpa, addressND242do, {from: accounts[2]});
		const addresslJfpUUn = accounts[2]
//		await StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]});
//		const addressDVIWWiV = await StakingDextokengsRqv8U.setBeneficial.call(addresslJfpUUn, {from: accounts[2]});

		await expect(StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressHJk2N0Y = accounts[4]
		const addressDw99oAs = accounts[0]
		const StakingDextokengsRqv8U = await StakingDextoken.new(addressHJk2N0Y, addressDw99oAs, {from: accounts[2]});
		const addressrA2JSPS = accounts[2]
		const addresstUdbn2S = accounts[2]
		const uintUnmTW8 = await StakingDextokengsRqv8U.rewardOf.call(addressrA2JSPS, {from: accounts[5]});
		const uintuh7wxLO = await StakingDextokengsRqv8U.rewardPerToken.call({from: accounts[0]});
//		await StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]});
//		const boolUV2soN3 = await StakingDextokengsRqv8U.unfreezeAccount.call(addresstUdbn2S, {from: accounts[2]});

		assert.equal(uintUnmTW8, BigInt("0"))
		assert.equal(uintuh7wxLO, BigInt("0"))
		await expect(StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressaZMnzXE = accounts[1]
		const addressD0a2aau = "0x0000000000000000000000000000000000000001"
		const StakingDextokeni3SmuZK = await StakingDextoken.new(addressaZMnzXE, addressD0a2aau, {from: "0x0000000000000000000000000000000000000001"});
		const addressutQcHeH = accounts[0]
		const addressupdOuFP = accounts[1]
		const uintuhgtt97 = await StakingDextokeni3SmuZK.lastTimeRewardApplicable.call({from: accounts[3]});
		const uintD6l9OsF = await StakingDextokeni3SmuZK.lastTimeRewardApplicable.call({from: accounts[4]});
		const boolNRExxtX = await StakingDextokeni3SmuZK.unfreezeAccount.call(addressutQcHeH, {from: accounts[0]});
		await StakingDextokeni3SmuZK.claim.call({from: accounts[3]});
		const boolPgGu61x = await StakingDextokeni3SmuZK.freezeAccount.call(addressupdOuFP, {from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const addresstaz6rcO = accounts[4]
		const addressoItiab1 = accounts[0]
		const StakingDextokengsRqv8U = await StakingDextoken.new(addresstaz6rcO, addressoItiab1, {from: accounts[2]});
		const uintwEzekS = BigInt("363")
		const addressi3GneBw = accounts[2]
//		await StakingDextokengsRqv8U.claim.call({from: accounts[2]});
//		const addressBjQCaxS = await StakingDextokengsRqv8U.capture.call(addressi3GneBw, uintwEzekS, {from: accounts[3]});

		await expect(StakingDextokengsRqv8U.claim.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressyTrmjqG = accounts[3]
		const addresscSSS13d = "0x0000000000000000000000000000000000000001"
		const StakingDextokenRey5TXc = await StakingDextoken.new(addressyTrmjqG, addresscSSS13d, {from: accounts[5]});
		const addressqiPydSP = accounts[3]
		const addresslgosgPC = accounts[2]
		const addressHf6gBTf = accounts[2]
		const addressndH1ZKt = accounts[0]
		const boolt1sYVP = await StakingDextokenRey5TXc.freezeAccount.call(addressqiPydSP, {from: accounts[5]});
		const uintle86bsE = await StakingDextokenRey5TXc.getClaimOf.call(addresslgosgPC, {from: accounts[5]});
		const uintTWLkpQD = await StakingDextokenRey5TXc.getTotalStakes.call({from: accounts[3]});
		const uintuhfstJ9 = await StakingDextokenRey5TXc.rewardOf.call(addressHf6gBTf, {from: accounts[4]});
		const uinttyKOYLd = await StakingDextokenRey5TXc.stakeOf.call(addressndH1ZKt, {from: accounts[5]});

		assert.equal(boolt1sYVP, true)
		assert.equal(uintTWLkpQD, BigInt("0"))
		assert.equal(uintle86bsE, BigInt("0"))
		assert.equal(uinttyKOYLd, BigInt("0"))
		assert.equal(uintuhfstJ9, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressvWSB1qU = accounts[4]
		const addressiDyra5t = accounts[0]
		const StakingDextokengsRqv8U = await StakingDextoken.new(addressvWSB1qU, addressiDyra5t, {from: accounts[2]});
		const uintkxiht7W = BigInt("1877")
		const uintz1b1Qz = BigInt("679")
		const uintKVVAo1i = BigInt("650")
		const uintVXoLwNY = BigInt("1310")
		const uintGUDbo4 = BigInt("363")
		const addresslbFEvCo = accounts[1]
		const uintUrRoKj0 = await StakingDextokengsRqv8U.setRewardRound.call(uintVXoLwNY, uintKVVAo1i, uintz1b1Qz, uintkxiht7W, {from: accounts[2]});
//		const addressBjQCaxS = await StakingDextokengsRqv8U.capture.call(addresslbFEvCo, uintGUDbo4, {from: accounts[3]});

		await expect(StakingDextokengsRqv8U.capture.call(addresslbFEvCo, uintGUDbo4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressOCKXpVU = accounts[4]
		const addressMzEaGFU = accounts[0]
		const StakingDextokengsRqv8U = await StakingDextoken.new(addressOCKXpVU, addressMzEaGFU, {from: accounts[2]});
		const uintjcKSmUq = BigInt("135")
		const uintZFp0WBS = BigInt("322")
		const uintneTFQkU = BigInt("673")
		const uintRLwuMS7 = BigInt("773")
//		await StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]});
//		const uintcoq8Dw = await StakingDextokengsRqv8U.setRewardRound.call(uintRLwuMS7, uintneTFQkU, uintZFp0WBS, uintjcKSmUq, {from: accounts[2]});

		await expect(StakingDextokengsRqv8U.notifyRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})