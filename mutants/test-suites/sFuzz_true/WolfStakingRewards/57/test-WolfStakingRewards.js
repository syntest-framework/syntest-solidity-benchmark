const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressgbpRhX6 = accounts[2]
		const addressIZU8198 = accounts[5]
		const addressHHhM9G = accounts[0]
		const WolfStakingRewardsD7Q4R8e = await WolfStakingRewards.new(addressgbpRhX6, addressIZU8198, addressHHhM9G, {from: accounts[1]});
		const uintgQK5V8h = BigInt("549")
		const uint3X3hMv = BigInt("50")
		const uintTosu7ki = BigInt("804")
		const uinthczMJV5 = BigInt("268")
		const uintze5I32e = BigInt("855")
		const uintRZX9kA = BigInt("570")
//		const uint256nm0Kwiq = await WolfStakingRewardsD7Q4R8e.withdrawRemainingBalance.call(uint3X3hMv, uintgQK5V8h, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qk2KNVU = await WolfStakingRewardsD7Q4R8e.getRewardForDuration.call(uintTosu7ki, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256W7qnp2 = await WolfStakingRewardsD7Q4R8e.getRewardForDuration.call(uinthczMJV5, {from: accounts[2]});
//		const uint256Wij8p0 = await WolfStakingRewardsD7Q4R8e.withdrawRemainingBalance.call(uintRZX9kA, uintze5I32e, {from: accounts[2]});
//		const uint8OWjpGh6 = await WolfStakingRewardsD7Q4R8e.decimals.call({from: accounts[3]});

		await expect(WolfStakingRewardsD7Q4R8e.withdrawRemainingBalance.call(uint3X3hMv, uintgQK5V8h, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringLkuJe8 = "2z3EyAimUD5OUINEt1TMH6ZqfYZJgvqjcOBLKH9ej9OopADHVntUOEoGWh1GOsQtvLgVrOKtTMTd1dsSlMwF"
		const stringl0EN1va = "hzyMufjeacfJH1Y45gCsVTpjebJL"
		const uintxh8h1SM = BigInt("73")
		const WolfStakingRewardszqCoEdL = await WolfStakingRewards.new(stringLkuJe8, stringl0EN1va, uintxh8h1SM, {from: accounts[0]});
		const uintFSxbVrm = BigInt("1193")
		const uintPpDdOv = BigInt("1123")
		const uintdaDzOPL = BigInt("382")
		const addressJbkRUWh = accounts[3]
		const uint8zTMmMFp = await WolfStakingRewardszqCoEdL.decimals.call({from: accounts[0]});
		const uint256arraym1cH6q6 = await WolfStakingRewardszqCoEdL.updateNotifyRewardAmount.call(uintFSxbVrm, {from: accounts[2]});
		const uint256HC87mAm = await WolfStakingRewardszqCoEdL.totalSupplyPerPool.call(uintPpDdOv, {from: accounts[2]});
		const uint256w4kR6A3 = await WolfStakingRewardszqCoEdL.balanceOfPerPool.call(addressJbkRUWh, uintdaDzOPL, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFuO642Y = "OvHPVYVqkX7kd"
		const stringgQ5KrB0 = "N9OyO0v9WYBD1ubHLWI3GQpx5TY1ym0UyDW3Wlj2ptmbB7b4lQLnlE1"
		const uintCl35PYT = BigInt("120")
		const WolfStakingRewardsvo3bSHi = await WolfStakingRewards.new(stringFuO642Y, stringgQ5KrB0, uintCl35PYT, {from: "0x0000000000000000000000000000000000000001"});
		const uintsNC6OnA = BigInt("1926")
		const addressWA0s8uI = accounts[0]
		const uintqMDaBB5 = BigInt("1477")
		const uintTXYvVAM = BigInt("1416")
		await WolfStakingRewardsvo3bSHi.nonReentrant.call({from: accounts[2]});
		const uint8Hw8UVyO = await WolfStakingRewardsvo3bSHi.decimals.call({from: accounts[4]});
		await WolfStakingRewardsvo3bSHi.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressIPoKHQK = await WolfStakingRewardsvo3bSHi.updateReward.call(addressWA0s8uI, uintsNC6OnA, {from: accounts[1]});
		const uint8BKiDkgM = await WolfStakingRewardsvo3bSHi.decimals.call({from: accounts[5]});
		const uint256YaSnNSL = await WolfStakingRewardsvo3bSHi.withdrawRemainingBalance.call(uintTXYvVAM, uintqMDaBB5, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlQFnvJG = "Xq7A3rn23S"
		const stringHziRGmm = "Vl73n5oAQNLuvT7iYokhXHrfhnubn8NIlA35yj98GhocXrhMLMOhSVwFeIkuBfSVaehq"
		const uintIMR0nFL = BigInt("17")
		const WolfStakingRewardsDNYxBr3 = await WolfStakingRewards.new(stringlQFnvJG, stringHziRGmm, uintIMR0nFL, {from: accounts[0]});
		const uintPAOIDvC = BigInt("792")
		const uintFRd805N = BigInt("1468")
		const uint2J0ysf = BigInt("1505")
		await WolfStakingRewardsDNYxBr3.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const stringMzP4An = await WolfStakingRewardsDNYxBr3.symbol.call({from: accounts[2]});
		const uint256Ro82gM = await WolfStakingRewardsDNYxBr3.stake.call(uintFRd805N, uintPAOIDvC, {from: accounts[2]});
		const uint2560ENDXe = await WolfStakingRewardsDNYxBr3.exit.call(uint2J0ysf, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJn2WG45 = "ynOHnAYCAx3WC28MHfBWC2mUcRH749GBiEvKboHcNu3tDYsbp1mZYwqcre"
		const stringDKeVqL3 = "vrtvPK740iQWXiJdzu7lq25JrNLqyjqHLBNT8k4qyfXpA2LyNFVA"
		const uintsgTqM5c = BigInt("184")
		const WolfStakingRewardsRWHQwiO = await WolfStakingRewards.new(stringJn2WG45, stringDKeVqL3, uintsgTqM5c, {from: accounts[2]});
		const uintnXgxh9u = BigInt("1352")
		const uintLSNqg10 = BigInt("530")
		const uintadyL3dq = BigInt("338")
		const uintKQhY1dA = BigInt("120")
		const uint256RrjKyRT = await WolfStakingRewardsRWHQwiO.stake.call(uintLSNqg10, uintnXgxh9u, {from: accounts[1]});
		await WolfStakingRewardsRWHQwiO.nonReentrant.call({from: accounts[0]});
		const uint256qNxE6gj = await WolfStakingRewardsRWHQwiO.exit.call(uintadyL3dq, {from: accounts[3]});
		const stringD3nOaQl = await WolfStakingRewardsRWHQwiO.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Btba8El = await WolfStakingRewardsRWHQwiO.lastTimeRewardApplicable.call(uintKQhY1dA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressY7Mw0i = accounts[2]
		const addressLci6qRp = accounts[1]
		const addressoOIOBvG = accounts[1]
		const WolfStakingRewardsOcMxrts = await WolfStakingRewards.new(addressY7Mw0i, addressLci6qRp, addressoOIOBvG, {from: accounts[3]});
		const uintt9rs17i = BigInt("1709")
		const uintc5QLl7b = BigInt("1847")
//		await WolfStakingRewardsOcMxrts.nonReentrant.call({from: accounts[5]});
//		const uint256qYnCPHD = await WolfStakingRewardsOcMxrts.getRewardForDuration.call(uintt9rs17i, {from: accounts[5]});
//		const uint256R4vfD3c = await WolfStakingRewardsOcMxrts.exit.call(uintc5QLl7b, {from: accounts[0]});
//		await WolfStakingRewardsOcMxrts.onlyOwner.call({from: accounts[1]});

		await expect(WolfStakingRewardsOcMxrts.nonReentrant.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressGmUlll3 = accounts[4]
		const addressRScJox8 = accounts[1]
		const addresswtauphc = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsK6eB20x = await WolfStakingRewards.new(addressGmUlll3, addressRScJox8, addresswtauphc, {from: "0x0000000000000000000000000000000000000001"});
		const uintsVTvMv = BigInt("140")
		const uintqPVj9dv = BigInt("1735")
		const addressagaBr9w = accounts[0]
		const uintj1i96tZ = BigInt("1812")
		const uint256arrayHlXD7mD = await WolfStakingRewardsK6eB20x.updateNotifyRewardAmount.call(uintsVTvMv, {from: accounts[1]});
		await WolfStakingRewardsK6eB20x.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kkqaqOo = await WolfStakingRewardsK6eB20x.earned.call(addressagaBr9w, uintqPVj9dv, {from: accounts[1]});
		const uint256Oo4Kb4h = await WolfStakingRewardsK6eB20x.rewardPerToken.call(uintj1i96tZ, {from: accounts[3]});
		const uint8DGnxJpV = await WolfStakingRewardsK6eB20x.decimals.call({from: accounts[5]});
		await WolfStakingRewardsK6eB20x.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringccOkarL = "wlTwlME0ftIgG7wqDH7pvGVj7aqFqNy68gKgz"
		const stringEQDzh02 = "w7xQ4IzaSEp5q2bulJblVHlgGa1hhNuXMU9fRrULTdEtvQtgTOMTa87scznq44VYBGT3"
		const uint98x4Bv = BigInt("193")
		const WolfStakingRewardsesgFiwk = await WolfStakingRewards.new(stringccOkarL, stringEQDzh02, uint98x4Bv, {from: accounts[4]});
		const uintw4gc69 = BigInt("1283")
		const uinttLm2Bks = BigInt("346")
		const uintZKYvCHR = BigInt("903")
		const uint256arrayy0iyKES = await WolfStakingRewardsesgFiwk.updateNotifyRewardAmount.call(uintw4gc69, {from: accounts[1]});
		const uint256FkXbzSx = await WolfStakingRewardsesgFiwk.withdrawRemainingBalance.call(uintZKYvCHR, uinttLm2Bks, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressaThPRCU = accounts[3]
		const addressdXN3vms = accounts[0]
		const addressPIsSDoL = accounts[5]
		const WolfStakingRewardsgMpJkce = await WolfStakingRewards.new(addressaThPRCU, addressdXN3vms, addressPIsSDoL, {from: accounts[3]});
		const uintRU5I3hc = BigInt("222")
		const uintoCGkd5X = BigInt("2008")
		const addresssrbnnAl = accounts[0]
//		const uint256arraynAs38ah = await WolfStakingRewardsgMpJkce.updateNotifyRewardAmount.call(uintRU5I3hc, {from: accounts[4]});
//		const addresswU0TW3D = await WolfStakingRewardsgMpJkce.updateReward.call(addresssrbnnAl, uintoCGkd5X, {from: accounts[1]});

		await expect(WolfStakingRewardsgMpJkce.updateNotifyRewardAmount.call(uintRU5I3hc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringzDgyRW0 = "yfA7yFrlKYm11lzQ4hd36oVCcrBUPlk2vNCLIYb90LE7AInOSNeJ9K9iERF6zUOhWwvgkIu6NAganCBko"
		const stringpxIRzth = "dcuQ7aLAIb2SRMjFRsxdaqXNbfhEioPPmpBKysEwBc1dmCKL43CL7g3oES057FX0GL8ubVSFzfrWv5kQOfF68"
		const uintPsFFBXM = BigInt("48")
		const WolfStakingRewardsnzaKj0f = await WolfStakingRewards.new(stringzDgyRW0, stringpxIRzth, uintPsFFBXM, {from: accounts[3]});
		const uintx2cFb6 = BigInt("661")
		const uintOZcNE09 = BigInt("1864")
		const uintL6v7EXG = BigInt("1520")
		const uint256CRLYVDf = await WolfStakingRewardsnzaKj0f.stake.call(uintOZcNE09, uintx2cFb6, {from: accounts[0]});
		const uintmrUMfUs = await WolfStakingRewardsnzaKj0f.getReward.call(uintL6v7EXG, {from: accounts[3]});
		await WolfStakingRewardsnzaKj0f.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtoYkdcb = "dw94CY191Q8sm0IIj9n7qV1zUaoCRxgwgOkYI8x7TzKltzurmT3qMuu6KjHCu2QDiq4R3ui5cOVyY"
		const stringnGWRtnD = "WE9oLwL1qxqMQFpDkDaXz5Kt42bS1VhEDEVVEuSXvNmfgJzthmyo3SEjvy4JgdAuLraSHWvJVFbm9k"
		const uintOVK2UQv = BigInt("59")
		const WolfStakingRewardsPY5XyCw = await WolfStakingRewards.new(stringtoYkdcb, stringnGWRtnD, uintOVK2UQv, {from: accounts[2]});
		const uintfRpj8WX = BigInt("642")
		const addressGSBGfPq = accounts[3]
		await WolfStakingRewardsPY5XyCw.onlyOwner.call({from: accounts[0]});
		await WolfStakingRewardsPY5XyCw.onlyRewardsDistribution.call({from: accounts[4]});
		const addressvWU0gKF = await WolfStakingRewardsPY5XyCw.updateReward.call(addressGSBGfPq, uintfRpj8WX, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringf2hCjcK = "elFgEiJRg4lhSyzeq5AXnQ2Od4iulq7UUL9xEvM2qoLgpCiwUGnBe1URDHDqIEVsNCmtUs3FB0FJqSJgeG"
		const stringo1u1SqR = "RnbJYQIwQPoQMxz35pyIyV0FYXWl72SIICnaJ5Z"
		const uintFBtxkhH = BigInt("214")
		const WolfStakingRewardsZyyNI5 = await WolfStakingRewards.new(stringf2hCjcK, stringo1u1SqR, uintFBtxkhH, {from: accounts[3]});
		const uintp8xjfOo = BigInt("1831")
		const uintXm2d4BZ = BigInt("1261")
		const addresssDCFWKs = accounts[4]
		const uintIizIMPl = BigInt("1254")
		await WolfStakingRewardsZyyNI5.nonReentrant.call({from: accounts[0]});
		const uintEgBSiO = await WolfStakingRewardsZyyNI5.getReward.call(uintp8xjfOo, {from: accounts[1]});
		const uint256MmLjuhC = await WolfStakingRewardsZyyNI5.balanceOfPerPool.call(addresssDCFWKs, uintXm2d4BZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintURfrTWa = await WolfStakingRewardsZyyNI5.getReward.call(uintIizIMPl, {from: accounts[1]});
		const uint8m2ydB0z = await WolfStakingRewardsZyyNI5.decimals.call({from: accounts[3]});
		await WolfStakingRewardsZyyNI5.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFgMvfiP = "psG9kbYl1t8xEoBWbscYOVR6SmANIRFgNb4LzMv9oC66CoIlkLaNSe"
		const stringCDoIwTk = "UE2jLDSy0GkpACutdFuoRjcG6ViNkdqRCLWzfGiqrjO60aIaXTg9CfefLsm6jR1hM5d1yVJXpIzQd"
		const uintK32Mnu7 = BigInt("147")
		const WolfStakingRewardsRiBLfg4 = await WolfStakingRewards.new(stringFgMvfiP, stringCDoIwTk, uintK32Mnu7, {from: accounts[4]});
		const uinty07n2mN = BigInt("414")
		const uintRnehHPn = BigInt("992")
		const uintRfMnzEr = BigInt("1552")
		const uintJuQXmtN = await WolfStakingRewardsRiBLfg4.getReward.call(uinty07n2mN, {from: accounts[3]});
		const uint256RijPQs = await WolfStakingRewardsRiBLfg4.totalSupplyPerPool.call(uintRnehHPn, {from: accounts[1]});
		const uint256YKv1Zy2 = await WolfStakingRewardsRiBLfg4.rewardPerToken.call(uintRfMnzEr, {from: accounts[1]});
		await WolfStakingRewardsRiBLfg4.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWvAG6Of = "m5YJr8j31AUadBXF7UXP8DIhO8ToB08scGa"
		const stringJ2aM2BS = "gF6me8MhOVIGoUSBY7OsO"
		const uintKTNki0T = BigInt("111")
		const WolfStakingRewardsNaxrfu1 = await WolfStakingRewards.new(stringWvAG6Of, stringJ2aM2BS, uintKTNki0T, {from: accounts[1]});
		const uintOXnqnlj = BigInt("16")
		const uintlfiM33U = BigInt("1240")
		const uintxB9OwxA = BigInt("619")
		const uintIVtpupN = await WolfStakingRewardsNaxrfu1.getReward.call(uintOXnqnlj, {from: accounts[5]});
		const uint256ELNyAC5 = await WolfStakingRewardsNaxrfu1.withdraw.call(uintxB9OwxA, uintlfiM33U, {from: accounts[5]});
		await WolfStakingRewardsNaxrfu1.nonReentrant.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressXTanA99 = accounts[1]
		const addressnmw4S8a = accounts[5]
		const addressZ8U0tK = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(addressXTanA99, addressnmw4S8a, addressZ8U0tK, {from: accounts[1]});
		const uintu4HihkJ = BigInt("777")
		const uintJ2PUTnn = BigInt("1149")
		const addressYVLOUWo = accounts[3]
		const uint256UmcgZnN = await WolfStakingRewardsuorEud.rewardPerToken.call(uintu4HihkJ, {from: accounts[4]});
		const uint256tCqQi39 = await WolfStakingRewardsuorEud.balanceOfPerPool.call(addressYVLOUWo, uintJ2PUTnn, {from: accounts[2]});
//		await WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[5]});
//		const stringcs6fzCH = await WolfStakingRewardsuorEud.name.call({from: accounts[2]});

		assert.equal(uint256UmcgZnN, BigInt("0"))
		assert.equal(uint256tCqQi39, BigInt("0"))
		await expect(WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringYBgqr3 = "GOWzDjScYL70a7Uiuv84AEfbk922YyLSDjKh9geQmSyvUBP3C2UWCfqH"
		const stringgZdAKQ = "Qba2If8UEkDNlIayCTTBq1zSVo00jASlF22jttw8oT1AVVawmqRk7s3us6WBR4uK3udpQZLAaA0k2RUWu2N1WmLiCsCBrSxJR"
		const uintILHByRr = BigInt("170")
		const WolfStakingRewardsCyIzb4D = await WolfStakingRewards.new(stringYBgqr3, stringgZdAKQ, uintILHByRr, {from: accounts[2]});
		const uintg1SNI5 = BigInt("1148")
		const uintJBUkojL = BigInt("628")
		const uintRa0pA8s = BigInt("2035")
		const addressbkyWz7T = accounts[1]
		const uintM2aAqva = BigInt("1285")
		const uintEKGdENu = BigInt("203")
		const uint256RiGrg3 = await WolfStakingRewardsCyIzb4D.withdraw.call(uintJBUkojL, uintg1SNI5, {from: accounts[2]});
		const uint256vIVr9jb = await WolfStakingRewardsCyIzb4D.balanceOfPerPool.call(addressbkyWz7T, uintRa0pA8s, {from: accounts[3]});
		const uint256vBXg08p = await WolfStakingRewardsCyIzb4D.rewardPerToken.call(uintM2aAqva, {from: accounts[4]});
		await WolfStakingRewardsCyIzb4D.nonReentrant.call({from: accounts[1]});
		const uint256WSaqtt7 = await WolfStakingRewardsCyIzb4D.rewardPerToken.call(uintEKGdENu, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresssMMqNT = accounts[1]
		const addressOkOQ43O = accounts[5]
		const addressQvnxWJq = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(addresssMMqNT, addressOkOQ43O, addressQvnxWJq, {from: accounts[1]});
		const uintun3vG75 = BigInt("609")
		const uintkpbDvRb = BigInt("783")
		const uintPVRoTZN = await WolfStakingRewardsuorEud.getReward.call(uintun3vG75, {from: accounts[4]});
		const uint256UmcgZnN = await WolfStakingRewardsuorEud.rewardPerToken.call(uintkpbDvRb, {from: accounts[4]});
//		await WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[5]});
//		const stringcs6fzCH = await WolfStakingRewardsuorEud.name.call({from: accounts[2]});

		assert.equal(uint256UmcgZnN, BigInt("0"))
		await expect(WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringkPsUV3l = "SbQ6pDcYmqQh1A4qLt7jwK75nZxlonvU2qsHre"
		const stringIpSYPp1 = ""
		const uintTcI081 = BigInt("93")
		const WolfStakingRewardskCtJ86M = await WolfStakingRewards.new(stringkPsUV3l, stringIpSYPp1, uintTcI081, {from: accounts[0]});
		const uintIKqJoBZ = BigInt("510")
		const uintGr8ZQSs = BigInt("1467")
		const addressjIMnVe0 = "0x0000000000000000000000000000000000000001"
		const uintbKwRBCF = BigInt("1452")
		const uint256IoYQh1I = await WolfStakingRewardskCtJ86M.exit.call(uintIKqJoBZ, {from: accounts[3]});
		const uint256JeG6UFs = await WolfStakingRewardskCtJ86M.balanceOfPerPool.call(addressjIMnVe0, uintGr8ZQSs, {from: accounts[2]});
		const uint256jGaEwM = await WolfStakingRewardskCtJ86M.getRewardForDuration.call(uintbKwRBCF, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressQjNokV0 = accounts[1]
		const addressedZuHOp = accounts[5]
		const addresskCH6V2B = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(addressQjNokV0, addressedZuHOp, addresskCH6V2B, {from: accounts[1]});
		const uintC5VjFr = BigInt("962")
		const uintOgqMZn = BigInt("204")
		const uintMzwUucr = BigInt("1265")
		const addresszBgVmXI = accounts[2]
		const uintUTbVYZL = BigInt("1640")
		const uintxAhABNt = BigInt("837")
		const uintYjspcuu = BigInt("783")
		const uintsqdQ1Ud = BigInt("1956")
		const uintPVRoTZN = await WolfStakingRewardsuorEud.getReward.call(uintC5VjFr, {from: accounts[4]});
//		const uint256eJgB7hl = await WolfStakingRewardsuorEud.exit.call(uintOgqMZn, {from: accounts[2]});
//		const addresswz4pbQ = await WolfStakingRewardsuorEud.updateReward.call(addresszBgVmXI, uintMzwUucr, {from: accounts[2]});
//		const uint256RJaMqs = await WolfStakingRewardsuorEud.withdrawRemainingBalance.call(uintxAhABNt, uintUTbVYZL, {from: accounts[3]});
//		const uint256UmcgZnN = await WolfStakingRewardsuorEud.rewardPerToken.call(uintYjspcuu, {from: accounts[4]});
//		const uint256WF6rVpy = await WolfStakingRewardsuorEud.totalSupplyPerPool.call(uintsqdQ1Ud, {from: accounts[5]});
//		await WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[5]});
//		const stringcs6fzCH = await WolfStakingRewardsuorEud.name.call({from: accounts[2]});

		await expect(WolfStakingRewardsuorEud.exit.call(uintOgqMZn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressJloA8Wp = accounts[1]
		const addresssSxkhbf = accounts[5]
		const addressO8BCHF = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(addressJloA8Wp, addresssSxkhbf, addressO8BCHF, {from: accounts[1]});
		const uint0uq6Wu = BigInt("1703")
		const uintZ6c2k50 = BigInt("459")
		const uinttP90jTT = BigInt("790")
//		const uint256HMhhAX5 = await WolfStakingRewardsuorEud.withdraw.call(uintZ6c2k50, uint0uq6Wu, {from: accounts[5]});
//		await WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[1]});
//		const uint256UmcgZnN = await WolfStakingRewardsuorEud.rewardPerToken.call(uinttP90jTT, {from: accounts[4]});
//		await WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[5]});
//		const stringcs6fzCH = await WolfStakingRewardsuorEud.name.call({from: accounts[2]});

		await expect(WolfStakingRewardsuorEud.withdraw.call(uintZ6c2k50, uint0uq6Wu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressn3hkwsG = accounts[1]
		const addressloP87OW = accounts[5]
		const addressoiqlEF0 = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(addressn3hkwsG, addressloP87OW, addressoiqlEF0, {from: accounts[1]});
		const uintvVseiy = BigInt("609")
		const uintQyzaTSZ = BigInt("783")
		const uintPVRoTZN = await WolfStakingRewardsuorEud.getReward.call(uintvVseiy, {from: accounts[4]});
		const uint256UmcgZnN = await WolfStakingRewardsuorEud.rewardPerToken.call(uintQyzaTSZ, {from: accounts[4]});
//		await WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[5]});

		assert.equal(uint256UmcgZnN, BigInt("0"))
		await expect(WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressTfjwRgS = accounts[1]
		const addresstsOcZZT = accounts[5]
		const address7Bz37w = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(addressTfjwRgS, addresstsOcZZT, address7Bz37w, {from: accounts[1]});
		const uintcVSl8Av = BigInt("609")
		const uintWzH40rR = BigInt("783")
		const uinthuv8vYP = BigInt("588")
		const uintRxoLtm = BigInt("316")
		const uintPVRoTZN = await WolfStakingRewardsuorEud.getReward.call(uintcVSl8Av, {from: accounts[4]});
		const uint256UmcgZnN = await WolfStakingRewardsuorEud.rewardPerToken.call(uintWzH40rR, {from: accounts[4]});
//		const uint256ePddZiZ = await WolfStakingRewardsuorEud.stake.call(uintRxoLtm, uinthuv8vYP, {from: accounts[1]});
//		const uint8Oe4gykU = await WolfStakingRewardsuorEud.decimals.call({from: accounts[0]});
//		await WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[5]});

		assert.equal(uint256UmcgZnN, BigInt("0"))
		await expect(WolfStakingRewardsuorEud.stake.call(uintRxoLtm, uinthuv8vYP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringndDJUj3 = "15CpWCQAKCm7qEtgT9sHn5gznmPvAfVADOtof29rKop"
		const stringKVDbbzK = "1SuKaBRraegrKvixxjuUNVDcgocJNrzWpNbNfMbDj4mJM3YVIRp40UKnI1UdJrjJKKYuBvHBTd4wtBGDJb"
		const uintRr9c8zF = BigInt("176")
		const WolfStakingRewardszVzHzU = await WolfStakingRewards.new(stringndDJUj3, stringKVDbbzK, uintRr9c8zF, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardszVzHzU.nonReentrant.call({from: accounts[1]});
		const uint8owJOGys = await WolfStakingRewardszVzHzU.decimals.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressPFhulmT = accounts[1]
		const addressgVDnRi = accounts[5]
		const addressMxtWCIM = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(addressPFhulmT, addressgVDnRi, addressMxtWCIM, {from: accounts[1]});
		const uintqCZCYE = BigInt("338")
		const uintdEmXQN7 = BigInt("790")
		const uintX5Z3Vt2 = BigInt("1048")
		const uint256RyRCaHH = await WolfStakingRewardsuorEud.totalSupplyPerPool.call(uintqCZCYE, {from: accounts[3]});
		const uint256UmcgZnN = await WolfStakingRewardsuorEud.rewardPerToken.call(uintdEmXQN7, {from: accounts[4]});
//		const uint256AJ4RIws = await WolfStakingRewardsuorEud.exit.call(uintX5Z3Vt2, {from: accounts[4]});
//		const stringcs6fzCH = await WolfStakingRewardsuorEud.name.call({from: accounts[2]});

		assert.equal(uint256RyRCaHH, BigInt("0"))
		assert.equal(uint256UmcgZnN, BigInt("0"))
		await expect(WolfStakingRewardsuorEud.exit.call(uintX5Z3Vt2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressv8MB0nv = accounts[1]
		const addresswuq0Pke = accounts[5]
		const addressilFJmk = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(addressv8MB0nv, addresswuq0Pke, addressilFJmk, {from: accounts[1]});
		const uinthWQPsGq = BigInt("1703")
		const uintoae3jRY = BigInt("459")
		const uintsJYlFdn = BigInt("790")
//		const uint256HMhhAX5 = await WolfStakingRewardsuorEud.withdraw.call(uintoae3jRY, uinthWQPsGq, {from: accounts[5]});
//		const uint256UmcgZnN = await WolfStakingRewardsuorEud.rewardPerToken.call(uintsJYlFdn, {from: accounts[4]});
//		await WolfStakingRewardsuorEud.onlyRewardsDistribution.call({from: accounts[5]});
//		const stringcs6fzCH = await WolfStakingRewardsuorEud.name.call({from: accounts[2]});

		await expect(WolfStakingRewardsuorEud.withdraw.call(uintoae3jRY, uinthWQPsGq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringow727d = "q3pXVqIQBq9ypGQvFZF"
		const stringefgi75i = "axcnJQTu0ghCkdVaSdh"
		const uintIQxr0dq = BigInt("182")
		const WolfStakingRewardsaeYuajT = await WolfStakingRewards.new(stringow727d, stringefgi75i, uintIQxr0dq, {from: accounts[3]});
		const uintdXGb1az = BigInt("811")
		const addressk8N9XhF = "0x0000000000000000000000000000000000000001"
		const uint256BOoxw0b = await WolfStakingRewardsaeYuajT.balanceOfPerPool.call(addressk8N9XhF, uintdXGb1az, {from: accounts[2]});
		await WolfStakingRewardsaeYuajT.nonReentrant.call({from: accounts[3]});
		const stringJn3GMj = await WolfStakingRewardsaeYuajT.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressntKiatq = accounts[1]
		const addressKnew97 = accounts[5]
		const addressJICNojY = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(addressntKiatq, addressKnew97, addressJICNojY, {from: accounts[1]});
		const uintPr7kQY3 = BigInt("1506")
		const uintHLQVPnr = BigInt("1164")
		const uintXuPxqEd = BigInt("1020")
		const uint256kylf38Z = await WolfStakingRewardsuorEud.totalSupplyPerPool.call(uintPr7kQY3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ug5BP5p = await WolfStakingRewardsuorEud.getRewardForDuration.call(uintHLQVPnr, {from: accounts[0]});
//		await WolfStakingRewardsuorEud.onlyOwner.call({from: accounts[4]});
//		const uint256arrayWjkajwY = await WolfStakingRewardsuorEud.updateNotifyRewardAmount.call(uintXuPxqEd, {from: accounts[1]});

		assert.equal(uint256kylf38Z, BigInt("0"))
		await expect(WolfStakingRewardsuorEud.getRewardForDuration.call(uintHLQVPnr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringMpjmqI = "hfqdVnmCQy7MhyHB3SxkUqNYFdBPdCi9hvzzTLKovukeRKNWNBenjNeBsMgfInIG1YYmWgHels"
		const stringH5jYGev = "QbvSPGX4SuJ6N9624V6sdxm2YhCQ4TKiRRtFNt"
		const uintFbkwUH = BigInt("102")
		const WolfStakingRewardszIAml4W = await WolfStakingRewards.new(stringMpjmqI, stringH5jYGev, uintFbkwUH, {from: accounts[0]});
		const uintyvXuEa2 = BigInt("1647")
		const uintM5vK5PB = BigInt("1376")
		const addressFjQOptF = accounts[3]
		const uintMMFRP7f = BigInt("1087")
		const uint256c4HvLNv = await WolfStakingRewardszIAml4W.rewardPerToken.call(uintyvXuEa2, {from: accounts[2]});
		const uint256leH3qEH = await WolfStakingRewardszIAml4W.balanceOfPerPool.call(addressFjQOptF, uintM5vK5PB, {from: accounts[1]});
		const stringrQZLWkl = await WolfStakingRewardszIAml4W.name.call({from: accounts[3]});
		const uint256arrayTjqNe2n = await WolfStakingRewardszIAml4W.updateNotifyRewardAmount.call(uintMMFRP7f, {from: accounts[2]});
		await WolfStakingRewardszIAml4W.onlyRewardsDistribution.call({from: accounts[0]});
		const stringTSnt1Rc = await WolfStakingRewardszIAml4W.name.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlLUHU8 = "DRuPm7E7BynlXhiFybxeVnoN8EYIQOlrmQ5Rz5Lj62LRg5LFoIm5zkpuyIBUm2tKVN3MmPd6dJBDCxNfkr3XW"
		const stringRikzXWw = "Im"
		const uintAFMXjG = BigInt("170")
		const WolfStakingRewardsLuab2HG = await WolfStakingRewards.new(stringlLUHU8, stringRikzXWw, uintAFMXjG, {from: accounts[3]});
		const uintCZjhyoX = BigInt("1894")
		const uintM0lpMqI = BigInt("198")
		const uinti3Nvpm1 = BigInt("545")
		const uintFDyDZzu = BigInt("1787")
		const uintgbw5Qj = BigInt("1094")
		const stringTvtnY1K = await WolfStakingRewardsLuab2HG.name.call({from: accounts[2]});
		const uint256q20UkJh = await WolfStakingRewardsLuab2HG.lastTimeRewardApplicable.call(uintCZjhyoX, {from: accounts[2]});
		const uint256xzXL6Oq = await WolfStakingRewardsLuab2HG.withdrawRemainingBalance.call(uinti3Nvpm1, uintM0lpMqI, {from: accounts[3]});
		const uint256OyGA8jd = await WolfStakingRewardsLuab2HG.totalSupplyPerPool.call(uintFDyDZzu, {from: accounts[1]});
		const uint256PvAuv4R = await WolfStakingRewardsLuab2HG.getRewardForDuration.call(uintgbw5Qj, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIP3KQ3C = "jEnr8sfb2HAfpYjrOXugBWXVguq4gqaC76tQPVhCRteAWwxj5hltJrGPVRisANPKpFBPXz5xyAedihFY"
		const stringP0fxYdt = "pe6oAglVLYlqJf7Bzkld7aYRcrGXCY7RtLXtwAduRYTi4D9cygWqHAppzw5APs"
		const uintUdTvWrz = BigInt("18")
		const WolfStakingRewardsrl9nkZ4 = await WolfStakingRewards.new(stringIP3KQ3C, stringP0fxYdt, uintUdTvWrz, {from: accounts[2]});
		const uintgy3R0qp = BigInt("251")
		const addressWqJ96TP = accounts[2]
		const uintcsp8WKe = BigInt("946")
		const uintvshXyMx = BigInt("55")
		const uintXxZXBn0 = BigInt("378")
		const uintxvsddl8 = BigInt("1083")
		const uint256pM0Hc4H = await WolfStakingRewardsrl9nkZ4.earned.call(addressWqJ96TP, uintgy3R0qp, {from: accounts[3]});
		const uint256I5LHuvI = await WolfStakingRewardsrl9nkZ4.getRewardForDuration.call(uintcsp8WKe, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IF7eG9x = await WolfStakingRewardsrl9nkZ4.totalSupplyPerPool.call(uintvshXyMx, {from: accounts[0]});
		const uint256oLHxl8V = await WolfStakingRewardsrl9nkZ4.withdraw.call(uintxvsddl8, uintXxZXBn0, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPPf40uU = "gi2E1li8AV4E6O0SyxSNVomvgy3yE82Kt3ddTfiJM18HRUGHlpjTI8"
		const stringoy9Tp8c = "Cs5CQT8WkFPxoEsF6Od9SlTWKHm1MamTAClLv2BUf95fMM8i7L7dKAY"
		const uintil8pg0F = BigInt("230")
		const WolfStakingRewardsh5GDHZ = await WolfStakingRewards.new(stringPPf40uU, stringoy9Tp8c, uintil8pg0F, {from: accounts[1]});
		const uintbnxJ2yk = BigInt("1165")
		const uint8DmNe00q = await WolfStakingRewardsh5GDHZ.decimals.call({from: accounts[2]});
		const uint256ZpXomh9 = await WolfStakingRewardsh5GDHZ.rewardPerToken.call(uintbnxJ2yk, {from: accounts[4]});
		const stringlpubVP2 = await WolfStakingRewardsh5GDHZ.symbol.call({from: accounts[4]});
		const uint8xIUIitT = await WolfStakingRewardsh5GDHZ.decimals.call({from: accounts[0]});
		await WolfStakingRewardsh5GDHZ.onlyRewardsDistribution.call({from: accounts[2]});
		await WolfStakingRewardsh5GDHZ.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyxX9zbA = "xbnBmqdqhYhmg05iMIEwcHKHWYLN6HhT666U2zF4zvwRsTwFBPs4M"
		const stringnIehqeG = "oHAbhKu9ij1PXBTHtyuRFaVH9DoPYF6qLcQ1TSl0sNptvNm30rNaf5hGXVYW6muwPYWd1rYfECAH8CJBp9qp"
		const uintRK3JZ6J = BigInt("60")
		const WolfStakingRewardsyrsykP2 = await WolfStakingRewards.new(stringyxX9zbA, stringnIehqeG, uintRK3JZ6J, {from: accounts[1]});
		const uintuD1MTUe = BigInt("1696")
		const uintCTi41bN = BigInt("506")
		const uintHJ7kZ9o = BigInt("85")
		const uintLaVHTi5 = BigInt("170")
		const uint256emjMM8 = await WolfStakingRewardsyrsykP2.withdrawRemainingBalance.call(uintCTi41bN, uintuD1MTUe, {from: accounts[4]});
		const uint256iW9WA6 = await WolfStakingRewardsyrsykP2.getRewardForDuration.call(uintHJ7kZ9o, {from: accounts[4]});
		await WolfStakingRewardsyrsykP2.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256mo3UiP7 = await WolfStakingRewardsyrsykP2.exit.call(uintLaVHTi5, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringp4VikJ = "ufkrXKCVCrJkqL1rzSenE9TNlzY3Laz89l1aMKU0eGdFAYc"
		const stringCyHRlPX = "R6rS1oiYR0P8FkdzT3I1hQuEZovad3MI5Hne8HufK73l4jMqSzjepfqedndj5ovWuaI"
		const uintjF8wKm = BigInt("132")
		const WolfStakingRewardsXZbo9AF = await WolfStakingRewards.new(stringp4VikJ, stringCyHRlPX, uintjF8wKm, {from: accounts[1]});
		const uintZDvZvYt = BigInt("603")
		const uintcC4d6oX = BigInt("977")
		const uintfwXHT4K = BigInt("1595")
		const stringcCyO6Aa = await WolfStakingRewardsXZbo9AF.symbol.call({from: accounts[2]});
		const uint256Jzsl9Cb = await WolfStakingRewardsXZbo9AF.rewardPerToken.call(uintZDvZvYt, {from: accounts[0]});
		const uint256vlAF7Q = await WolfStakingRewardsXZbo9AF.withdrawRemainingBalance.call(uintfwXHT4K, uintcC4d6oX, {from: accounts[5]});
		await WolfStakingRewardsXZbo9AF.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdB3rKPb = "c7yfn6V9iv2YPIYD1pOmfBqeBC20tCE3kZXdCUcYq20zBkxkyzll3GwSIMCgEenWoclekPwz7HbFlySkp9uPYqX4cY1WLGT"
		const stringZT6ZmSy = "MWeh90BOai82AfKKerRUUa9CzLmo5q8bwX492ko"
		const uintEH0OCYb = BigInt("180")
		const WolfStakingRewardsKQT8Vyl = await WolfStakingRewards.new(stringdB3rKPb, stringZT6ZmSy, uintEH0OCYb, {from: accounts[4]});
		const uintrzmaFTY = BigInt("1567")
		const addressm8Pv0oL = accounts[4]
		const uintG6kGf55 = BigInt("1333")
		const uinthIUaWhy = BigInt("1233")
		const uintdPEkPBm = BigInt("1969")
		const addresshnZneNk = accounts[0]
		const uint256Yqh7Vp = await WolfStakingRewardsKQT8Vyl.balanceOfPerPool.call(addressm8Pv0oL, uintrzmaFTY, {from: accounts[2]});
		await WolfStakingRewardsKQT8Vyl.nonReentrant.call({from: accounts[0]});
		const uint256weAJ68l = await WolfStakingRewardsKQT8Vyl.rewardPerToken.call(uintG6kGf55, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mXAGhQ2 = await WolfStakingRewardsKQT8Vyl.lastTimeRewardApplicable.call(uinthIUaWhy, {from: accounts[1]});
		const uint256L6CVol = await WolfStakingRewardsKQT8Vyl.balanceOfPerPool.call(addresshnZneNk, uintdPEkPBm, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringR9YUq0O = "Avd7V87w9e0eUwxOS1RAy6tbIrvzDqbFj3f0c3eUAp4du2IJbHhWWjq541Nolt5Ibml7wGPeImW5VQiQp"
		const stringGpQ6OC5 = "PybHpeQuLipzStFcNIvO"
		const uintmGvbPv2 = BigInt("85")
		const WolfStakingRewardsqsnwAi7 = await WolfStakingRewards.new(stringR9YUq0O, stringGpQ6OC5, uintmGvbPv2, {from: "0x0000000000000000000000000000000000000001"});
		const uintjTJZq5 = BigInt("1290")
		const uint256cNzVGmF = await WolfStakingRewardsqsnwAi7.exit.call(uintjTJZq5, {from: accounts[1]});
		await WolfStakingRewardsqsnwAi7.onlyOwner.call({from: accounts[2]});
		await WolfStakingRewardsqsnwAi7.nonReentrant.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRrKqtnI = "bHo9P8X5KCuEUWBiXofKcjrLtXHq3SWF5Iapcr9DoXcHzV4J2wuv1soEVcty"
		const stringI8YONwV = "uX6upUgq3klW5GVZRXWAb2ONLNz3SxUsP5lrP3pWYGMetwITdO4Xpy4UienudGYk8uBRNFaXrO5B9FMRMaxspP9Lw"
		const uintV2CYQ0T = BigInt("23")
		const WolfStakingRewardso8LehTN = await WolfStakingRewards.new(stringRrKqtnI, stringI8YONwV, uintV2CYQ0T, {from: accounts[3]});
		const uintW1CjlI9 = BigInt("1211")
		const uint256Zo2iOsM = await WolfStakingRewardso8LehTN.exit.call(uintW1CjlI9, {from: accounts[3]});
		await WolfStakingRewardso8LehTN.nonReentrant.call({from: accounts[3]});
		const uint8JNJthwh = await WolfStakingRewardso8LehTN.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJW0432 = "C7dD5w1Hr9gavW9BowQKJaScFt8CJdSt5pMieF9TQjwb6QEW5OBt5gEtd4uPJ"
		const stringZA02aT2 = "e4grjKPytSX1ULiGvvtqXnVeYOoX0A8oMDdfUHvlkWx9OyL15VfHjaHBWmkuqWeJbNU6PwOQxcJX"
		const uintYYy2Boi = BigInt("112")
		const WolfStakingRewardsiKfjpiN = await WolfStakingRewards.new(stringJW0432, stringZA02aT2, uintYYy2Boi, {from: accounts[3]});
		const uintc77Octl = BigInt("1865")
		const uint256B03fH2T = await WolfStakingRewardsiKfjpiN.getRewardForDuration.call(uintc77Octl, {from: accounts[2]});
		const stringnlBI2rv = await WolfStakingRewardsiKfjpiN.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuQGNgsy = "cU5vH3Dts1ozN53nRSwZ"
		const stringmYDRP7H = "Ivi99G3EJol3QD59HEvENi9kTWp1rU6hkYMarS74yACeXuUWPjomPkV5SHo7znLkKdnA4FXfsFhjvlRstPelwEjkuxN"
		const uintY6oI5E3 = BigInt("56")
		const WolfStakingRewardskjBLFz = await WolfStakingRewards.new(stringuQGNgsy, stringmYDRP7H, uintY6oI5E3, {from: accounts[3]});
		const uintnyjKBXt = BigInt("179")
		const uintBJZXywj = BigInt("1104")
		const uintL5aBgkS = BigInt("258")
		const uint256WnX8qn = await WolfStakingRewardskjBLFz.lastTimeRewardApplicable.call(uintnyjKBXt, {from: accounts[2]});
		const stringbrYcmf = await WolfStakingRewardskjBLFz.symbol.call({from: accounts[3]});
		const uint256fhMqyl = await WolfStakingRewardskjBLFz.getRewardForDuration.call(uintBJZXywj, {from: accounts[1]});
		const uintUwTXx3 = await WolfStakingRewardskjBLFz.getReward.call(uintL5aBgkS, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressepYm19 = accounts[1]
		const addressNuFmqo5 = accounts[5]
		const addressfURuCtC = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(addressepYm19, addressNuFmqo5, addressfURuCtC, {from: accounts[1]});
		const uintpahwntf = BigInt("791")
		const uintGpZVex = BigInt("72")
		const uintuZmdRab = BigInt("1351")
		const uint256UmcgZnN = await WolfStakingRewardsuorEud.rewardPerToken.call(uintpahwntf, {from: accounts[4]});
//		const uint256GqXYzqD = await WolfStakingRewardsuorEud.withdrawRemainingBalance.call(uintuZmdRab, uintGpZVex, {from: accounts[1]});

		assert.equal(uint256UmcgZnN, BigInt("0"))
		await expect(WolfStakingRewardsuorEud.withdrawRemainingBalance.call(uintuZmdRab, uintGpZVex, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringsMJsusF = "XoyC1UpbcNlnJ2GLifmPGB3C7"
		const stringUEXYPU9 = "LmMRAJ6"
		const uintAUV1hxZ = BigInt("191")
		const WolfStakingRewardsgZShy5A = await WolfStakingRewards.new(stringsMJsusF, stringUEXYPU9, uintAUV1hxZ, {from: accounts[4]});
		const uintVHmb7a3 = BigInt("1350")
		const uintlz1cJEg = BigInt("740")
		const uintF8uZEGa = BigInt("1649")
		const uintBsupP3x = BigInt("1162")
		const uintTmobCAy = BigInt("1081")
		const addressiWHmw4 = accounts[4]
		const uintufVxkt = BigInt("665")
		const uintwTUDYoY = BigInt("1279")
		const uint256arraycCKPQH = await WolfStakingRewardsgZShy5A.updateNotifyRewardAmount.call(uintVHmb7a3, {from: accounts[1]});
		const uint256LqoqDRz = await WolfStakingRewardsgZShy5A.exit.call(uintlz1cJEg, {from: accounts[0]});
		const uint256MrTX6N0 = await WolfStakingRewardsgZShy5A.stake.call(uintBsupP3x, uintF8uZEGa, {from: accounts[2]});
		const uint256SXtWofh = await WolfStakingRewardsgZShy5A.balanceOfPerPool.call(addressiWHmw4, uintTmobCAy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256huNxYFv = await WolfStakingRewardsgZShy5A.rewardPerToken.call(uintufVxkt, {from: accounts[0]});
		const uintQcsCQkA = await WolfStakingRewardsgZShy5A.getReward.call(uintwTUDYoY, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxfIpM2V = "eiJqsnCNgnv2FoVqQMlaD6Q3Z1Xyyh8H1huKoDKqQK2VsMgckaJMxYVbnXh7rPsvBnxjmj5Gj"
		const stringEI4cmrV = "ggs25GT0xQ"
		const uintr3TcIwj = BigInt("252")
		const WolfStakingRewardsgf4z6G = await WolfStakingRewards.new(stringxfIpM2V, stringEI4cmrV, uintr3TcIwj, {from: accounts[1]});
		const uintuOzNmVw = BigInt("21")
		const uintKYkb3f9 = BigInt("1787")
		const addressvtMDdnt = "0x0000000000000000000000000000000000000001"
		const uint256OU0KMIy = await WolfStakingRewardsgf4z6G.lastTimeRewardApplicable.call(uintuOzNmVw, {from: accounts[0]});
		const addressfSUb6cj = await WolfStakingRewardsgf4z6G.updateReward.call(addressvtMDdnt, uintKYkb3f9, {from: accounts[4]});
		await WolfStakingRewardsgf4z6G.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdO2jOv = "OFYANX4ko80oBF77vECWSkEcdHUmEuliP68e2WMitTwUl53A8WRyqrbiJYlxzJ4IuZh7F6fhrQm9etxmAeuMwPOdmi"
		const stringYy2Y16O = "gl3N7UXpos2ffWhiCOrVH1IcedtJrp4zs1mLtfYQWzwwRIB10pdfO91gHn6DEQp7sh4sbSsuw2MQMOcb"
		const uint7vDebC = BigInt("157")
		const WolfStakingRewardswvO4Q0o = await WolfStakingRewards.new(stringdO2jOv, stringYy2Y16O, uint7vDebC, {from: accounts[3]});
		const uintEFf69lh = BigInt("990")
		const uint256XUAZ974 = await WolfStakingRewardswvO4Q0o.getRewardForDuration.call(uintEFf69lh, {from: accounts[2]});
		await WolfStakingRewardswvO4Q0o.onlyRewardsDistribution.call({from: accounts[4]});
		const stringjbZmxnx = await WolfStakingRewardswvO4Q0o.symbol.call({from: accounts[4]});
		const stringO85IhHg = await WolfStakingRewardswvO4Q0o.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTduDbWs = "yIgI"
		const stringZJgMkI = "mbxsX2HK5CnPqoir1Q"
		const uintXemuPhR = BigInt("17")
		const WolfStakingRewardsLvnigb3 = await WolfStakingRewards.new(stringTduDbWs, stringZJgMkI, uintXemuPhR, {from: accounts[3]});
		const uintrT5dFK3 = BigInt("2019")
		const uintN6rQM50 = BigInt("941")
		const addresshTgjYzE = accounts[1]
		const uintGFJKHkO = BigInt("774")
		const uintUylD48b = BigInt("1222")
		const uint256tKIPVIS = await WolfStakingRewardsLvnigb3.lastTimeRewardApplicable.call(uintrT5dFK3, {from: accounts[3]});
		const uint256ho635N = await WolfStakingRewardsLvnigb3.earned.call(addresshTgjYzE, uintN6rQM50, {from: accounts[0]});
		const uint256GRoJPUJ = await WolfStakingRewardsLvnigb3.getRewardForDuration.call(uintGFJKHkO, {from: accounts[2]});
		const uint256PfL1Ly5 = await WolfStakingRewardsLvnigb3.exit.call(uintUylD48b, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQxVlIDU = "84eWR8W9nHZzcYL4oLNNga2uMh7obH"
		const stringtaHa94e = "W1T6r"
		const uintAa7oCBd = BigInt("53")
		const WolfStakingRewardsBkv07jA = await WolfStakingRewards.new(stringQxVlIDU, stringtaHa94e, uintAa7oCBd, {from: accounts[0]});
		const uintlGtrfCG = BigInt("1493")
		const uintnGSMSgw = BigInt("1290")
		const uintay0iOi = BigInt("1360")
		const uintWeBck0t = BigInt("891")
		const addressennYAFr = accounts[1]
		const uint256arrayDzNLDCD = await WolfStakingRewardsBkv07jA.updateNotifyRewardAmount.call(uintlGtrfCG, {from: accounts[2]});
		const uint256LJMvXw4 = await WolfStakingRewardsBkv07jA.withdrawRemainingBalance.call(uintay0iOi, uintnGSMSgw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256al6N8fE = await WolfStakingRewardsBkv07jA.earned.call(addressennYAFr, uintWeBck0t, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const address4K2Uhi = accounts[1]
		const addressVe7zh3 = accounts[5]
		const addressgDde35h = accounts[0]
		const WolfStakingRewardsuorEud = await WolfStakingRewards.new(address4K2Uhi, addressVe7zh3, addressgDde35h, {from: accounts[1]});
		const uintA8maOT6 = BigInt("9")
		const uintvwvWndS = BigInt("1683")
		const uintEsFmvkV = BigInt("794")
		const uintwkrFeR1 = BigInt("195")
		const uintuvgm7sM = BigInt("95")
//		const uint256w8yrF58 = await WolfStakingRewardsuorEud.exit.call(uintA8maOT6, {from: accounts[5]});
//		const uint256y8rD1dc = await WolfStakingRewardsuorEud.totalSupplyPerPool.call(uintvwvWndS, {from: accounts[4]});
//		const uint256UmcgZnN = await WolfStakingRewardsuorEud.rewardPerToken.call(uintEsFmvkV, {from: accounts[4]});
//		const uint256u7NPOrt = await WolfStakingRewardsuorEud.withdraw.call(uintuvgm7sM, uintwkrFeR1, {from: accounts[0]});

		await expect(WolfStakingRewardsuorEud.exit.call(uintA8maOT6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringznezK1R = "BtbB74w7HWVNkeFvCUP3T96XlnyroJsAs3"
		const stringfCYKZLS = "XTafh1qgSXq9WvQZZjMenp6lrSq1DRXpfXEnjM6EdKKlM34GPYYmQkNX"
		const uintaqKfbMd = BigInt("64")
		const WolfStakingRewardsqUO69Kz = await WolfStakingRewards.new(stringznezK1R, stringfCYKZLS, uintaqKfbMd, {from: accounts[0]});
		const uintNR8yPqE = BigInt("213")
		const uintxWKIwe1 = BigInt("2039")
		const uintMQVbKwv = BigInt("865")
		const uintYsw94CP = BigInt("238")
		const uint256wyE2vCA = await WolfStakingRewardsqUO69Kz.getRewardForDuration.call(uintNR8yPqE, {from: accounts[0]});
		const uint256m8YKZZW = await WolfStakingRewardsqUO69Kz.totalSupplyPerPool.call(uintxWKIwe1, {from: accounts[1]});
		const uint256HO2vHwN = await WolfStakingRewardsqUO69Kz.withdrawRemainingBalance.call(uintYsw94CP, uintMQVbKwv, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringe3rU50 = "H12I9VGdS813Ux56S83YiXph4UemLyGM2IruGgQSUYC8wmGXKpvnJJBxDfRuySocW8tYncI8ZI3fC"
		const stringCy4NkA0 = "K9FOFhdGDbP4kuiyQHMr9ANSfluHdOIXPcp"
		const uintmEDuXH = BigInt("180")
		const WolfStakingRewardsfqOoQNI = await WolfStakingRewards.new(stringe3rU50, stringCy4NkA0, uintmEDuXH, {from: accounts[1]});
		const uintW1z1Px0 = BigInt("1740")
		const addressRTaRCZV = accounts[2]
		const uintkphL6Fy = BigInt("435")
		const uint8V1Slq65 = await WolfStakingRewardsfqOoQNI.decimals.call({from: accounts[3]});
		const stringjI7IXE9 = await WolfStakingRewardsfqOoQNI.symbol.call({from: accounts[4]});
		const uint256uvUJSOV = await WolfStakingRewardsfqOoQNI.balanceOfPerPool.call(addressRTaRCZV, uintW1z1Px0, {from: accounts[3]});
		const uint256QrSdEVu = await WolfStakingRewardsfqOoQNI.lastTimeRewardApplicable.call(uintkphL6Fy, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNFWmf6e = "4ml9jG7VUgYkq5PUhM5XTFj1RpXde4WTmmHKYBuiOOxlEiAcsDrS4pHF"
		const stringDeniZqm = "qNt8KT1"
		const uint57d0hc = BigInt("129")
		const WolfStakingRewardsfv6rwF7 = await WolfStakingRewards.new(stringNFWmf6e, stringDeniZqm, uint57d0hc, {from: "0x0000000000000000000000000000000000000001"});
		const uintIjAvhJP = BigInt("1897")
		const uintwUPu4Td = BigInt("847")
		const uint256JTC1Jao = await WolfStakingRewardsfv6rwF7.totalSupplyPerPool.call(uintIjAvhJP, {from: accounts[4]});
		const uint256kEr4SG = await WolfStakingRewardsfv6rwF7.lastTimeRewardApplicable.call(uintwUPu4Td, {from: accounts[3]});
		const stringWgy4EW = await WolfStakingRewardsfv6rwF7.name.call({from: accounts[2]});
		await WolfStakingRewardsfv6rwF7.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLW0MDNF = "iwgp1FV5Vjfmp87ekz2CQXPOoiCWSbilgzsYuQPQdXm3XInSY4IUP3TuJ13A6SxeA7Pkii3Xm"
		const stringwl5FxYg = "6CvomOTRz82Q5hg3ItmryCxUUUs3UzBJNTobs4NqtKR9bMO8NNWyY4Y1L2xiKPweuAn2apZ"
		const uint5dok4l = BigInt("67")
		const WolfStakingRewardstpBCvIC = await WolfStakingRewards.new(stringLW0MDNF, stringwl5FxYg, uint5dok4l, {from: accounts[0]});
		const uintmzeB9Fk = BigInt("1309")
		const uintIwz7ExL = BigInt("1457")
		const uintG1uYFGH = BigInt("496")
		const uint256FPtijP = await WolfStakingRewardstpBCvIC.rewardPerToken.call(uintmzeB9Fk, {from: accounts[2]});
		const uint256fTH00uq = await WolfStakingRewardstpBCvIC.withdrawRemainingBalance.call(uintG1uYFGH, uintIwz7ExL, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDi6RUrk = "nWtR3vVvafviwxleWq4vLlHPCh9WLKb9p5aJKzHSwBflMtpe432f3"
		const stringj5tKTgI = "IsDb9hm"
		const uintd7iXD5p = BigInt("11")
		const WolfStakingRewardsy91YPG = await WolfStakingRewards.new(stringDi6RUrk, stringj5tKTgI, uintd7iXD5p, {from: accounts[2]});
		const uintKAJtYXU = BigInt("2008")
		const uintza4utih = BigInt("205")
		const uintmTew0pt = BigInt("608")
		const uint256gcNFYOZ = await WolfStakingRewardsy91YPG.rewardPerToken.call(uintKAJtYXU, {from: accounts[4]});
		const uintPlOkNc8 = await WolfStakingRewardsy91YPG.getReward.call(uintza4utih, {from: accounts[1]});
		const uint256zH3jtL8 = await WolfStakingRewardsy91YPG.rewardPerToken.call(uintmTew0pt, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEV2DH8w = "vBvzHF9936hy3tQrYVguSLGNN6JhFadPgatOtOCUvli4dn5qynmzXmv696NpjJAmlWPVI359vhwhhVAaFdbSXnNKwbJ"
		const stringyj2rvD8 = "sLypWZXzPgsw83o6igkcandVzmDmLHcYfCehEMa1uDuqHXCeKThP4UZRvc0O5Ps5mpIz"
		const uintOTukQIU = BigInt("238")
		const WolfStakingRewardsPeqzupq = await WolfStakingRewards.new(stringEV2DH8w, stringyj2rvD8, uintOTukQIU, {from: accounts[4]});
		const uintYeQdGr5 = BigInt("1594")
		const uintLN8KeDr = BigInt("1818")
		const uintBnEl5b4 = BigInt("568")
		const uintyOMmV0A = BigInt("883")
		const addressc2fc9zU = accounts[5]
		const uintZe7cahT = BigInt("464")
		const uintAcReDve = BigInt("1092")
		const stringFiGMxOB = await WolfStakingRewardsPeqzupq.symbol.call({from: accounts[3]});
		const uint256oMA6B3q = await WolfStakingRewardsPeqzupq.rewardPerToken.call(uintYeQdGr5, {from: accounts[1]});
		const uint256SxAuxPm = await WolfStakingRewardsPeqzupq.withdraw.call(uintBnEl5b4, uintLN8KeDr, {from: accounts[5]});
		const uint256tBRuvxd = await WolfStakingRewardsPeqzupq.earned.call(addressc2fc9zU, uintyOMmV0A, {from: accounts[4]});
		const uint256ZpyXzD = await WolfStakingRewardsPeqzupq.stake.call(uintAcReDve, uintZe7cahT, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZIzR6Pm = "fPSBvAuVhK1e1SwAWiANG1YnZI5Ra9h9RqnIE2gWLDKvOxhTw2tkYj6VXuXL2DkNKYjwMxknFYY0y"
		const stringD1T0pvB = "LOVychWfE4FXmHKCaaItsJ4Qqzxe3ktGMktW2cu"
		const uintVQmpNe = BigInt("102")
		const WolfStakingRewardskM2jncr = await WolfStakingRewards.new(stringZIzR6Pm, stringD1T0pvB, uintVQmpNe, {from: accounts[3]});
		const uintcsSIWWj = BigInt("415")
		const uintDBFz5rh = BigInt("800")
		const uintVLQx9Z = BigInt("1174")
		const uintUCwVGlY = BigInt("1788")
		const stringRcA3QDb = await WolfStakingRewardskM2jncr.symbol.call({from: accounts[0]});
		const uintBeFHsM0 = await WolfStakingRewardskM2jncr.getReward.call(uintcsSIWWj, {from: accounts[4]});
		const uint256E8awazk = await WolfStakingRewardskM2jncr.exit.call(uintDBFz5rh, {from: accounts[2]});
		const uint256arrayymUSTz = await WolfStakingRewardskM2jncr.updateNotifyRewardAmount.call(uintVLQx9Z, {from: accounts[4]});
		const uint256EoN01u9 = await WolfStakingRewardskM2jncr.exit.call(uintUCwVGlY, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringi2Vb9HL = "hylqTQ7j9KEuhk9Cx6p59XZa6jWkaxwj1a6hBzJEKW97cUGUf7ph9A0tiayQGbDbGP2oe4XoEWQ0lutyXRzZqcSlP3LfiISvJF"
		const stringTBMCMWi = "kEXR620cZ177WDkuSXMAY6LTOyVqD2ODxJgys5eLZcK8tqcglF7XHUXoKpO3ZIY5sTC9hadMeA9J9TGgkGa"
		const uinty2l1uUA = BigInt("196")
		const WolfStakingRewardsTOw5Rv1 = await WolfStakingRewards.new(stringi2Vb9HL, stringTBMCMWi, uinty2l1uUA, {from: accounts[2]});
		const uintsjE0Vsi = BigInt("332")
		const uintf2TlFpL = BigInt("1486")
		const uintizgxlWv = BigInt("449")
		const uint256bdxPtYa = await WolfStakingRewardsTOw5Rv1.withdrawRemainingBalance.call(uintf2TlFpL, uintsjE0Vsi, {from: "0x0000000000000000000000000000000000000001"});
		const uintvTxivE2 = await WolfStakingRewardsTOw5Rv1.getReward.call(uintizgxlWv, {from: accounts[5]});
		const uint8WtyAWAq = await WolfStakingRewardsTOw5Rv1.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFCKT4W = "F5QHfn4zQXk52Dz9EjJJq3aYsOxB4qKxp9vcyLnNk"
		const stringyzaaZqr = "hVtvylFsEXqBKcokv8ADUqhiATMd0T8GKf9MCVLqgEcRfgA4jwAQyhTRH60ZFAlXeajLd3BqOk49o54l3RRTVBrZ"
		const uintKwR22Zn = BigInt("103")
		const WolfStakingRewardsUyiDfz7 = await WolfStakingRewards.new(stringFCKT4W, stringyzaaZqr, uintKwR22Zn, {from: accounts[0]});
		const uintTGXloTF = BigInt("1510")
		const uinteb0Gzam = BigInt("1520")
		const uintVrith75 = BigInt("467")
		const uintnNOkgdY = BigInt("960")
		const uintxXi0DUm = BigInt("948")
		const uintUJCGd3F = BigInt("540")
		const uintYbgQI29 = BigInt("996")
		const addressSS18Cbq = accounts[3]
		const uint256Bibw8A = await WolfStakingRewardsUyiDfz7.rewardPerToken.call(uintTGXloTF, {from: accounts[4]});
		const uint256baUk5Jb = await WolfStakingRewardsUyiDfz7.withdraw.call(uintVrith75, uinteb0Gzam, {from: accounts[0]});
		const uint256MlNLk8 = await WolfStakingRewardsUyiDfz7.rewardPerToken.call(uintnNOkgdY, {from: accounts[3]});
		const uint256mCzJqya = await WolfStakingRewardsUyiDfz7.withdraw.call(uintUJCGd3F, uintxXi0DUm, {from: accounts[5]});
		const uint256sLt1b1D = await WolfStakingRewardsUyiDfz7.earned.call(addressSS18Cbq, uintYbgQI29, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringT0q5Vf2 = "tANvcVoEiupRoSbna5RmisutnEUSGLVSuP8HEEOvqdh1XiP8GCUEDB3D64z7aEdlzXq9QBElj54yzoLwUxXwpbe8e1qbGhV81c"
		const stringUawHEd2 = "fOHtXIJ2JujXh0dteC5OrUpXDn3xNnk"
		const uintDA7dr3d = BigInt("27")
		const WolfStakingRewardsx69GNnm = await WolfStakingRewards.new(stringT0q5Vf2, stringUawHEd2, uintDA7dr3d, {from: accounts[0]});
		const uintt6o8JUi = BigInt("580")
		const uintfNUoOB4 = BigInt("1024")
		const uintIjKzCGq = BigInt("544")
		const uintPSXfZiu = BigInt("1633")
		const addressGqOMZmM = accounts[2]
		const uintPRrFzgR = BigInt("1201")
		const uintHFgbuW = BigInt("1616")
		const uint256EhND8nV = await WolfStakingRewardsx69GNnm.withdrawRemainingBalance.call(uintfNUoOB4, uintt6o8JUi, {from: accounts[1]});
		const uint256Fr15Ev = await WolfStakingRewardsx69GNnm.getRewardForDuration.call(uintIjKzCGq, {from: accounts[2]});
		const uint8U5EI7o7 = await WolfStakingRewardsx69GNnm.decimals.call({from: accounts[0]});
		const addressSfTuKBG = await WolfStakingRewardsx69GNnm.updateReward.call(addressGqOMZmM, uintPSXfZiu, {from: accounts[3]});
		const uint256N29ILMg = await WolfStakingRewardsx69GNnm.stake.call(uintHFgbuW, uintPRrFzgR, {from: accounts[3]});
		await WolfStakingRewardsx69GNnm.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlSzm7oR = "d"
		const stringgzMLm1 = "sF6iDGMgDM84uYDbaP8trbJkiTv4LgkLqNBf"
		const uintiNoM9ke = BigInt("116")
		const WolfStakingRewardsD7NQGiP = await WolfStakingRewards.new(stringlSzm7oR, stringgzMLm1, uintiNoM9ke, {from: accounts[0]});
		const uintBdhsjBS = BigInt("871")
		const addressjLUQK4y = accounts[2]
		const uintIdzw5j = BigInt("1312")
		const uint256sdvnxLg = await WolfStakingRewardsD7NQGiP.balanceOfPerPool.call(addressjLUQK4y, uintBdhsjBS, {from: accounts[0]});
		const stringCPExh6L = await WolfStakingRewardsD7NQGiP.name.call({from: accounts[3]});
		const uinteL2ZJmQ = await WolfStakingRewardsD7NQGiP.getReward.call(uintIdzw5j, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOr7CEn = "iGHRgUjD4eXsLYTp28QhjdIHPDMhrKyLSioCNNMYoFn48sGyRLj"
		const stringWMhF1vF = "ruhMf5sVPC4qMBYmDGDdNzdjh6ofWySTT1XHCrr"
		const uintFnG0uJ = BigInt("174")
		const WolfStakingRewardsRdS7rL0 = await WolfStakingRewards.new(stringOr7CEn, stringWMhF1vF, uintFnG0uJ, {from: accounts[1]});
		const uintLot5Dog = BigInt("39")
		await WolfStakingRewardsRdS7rL0.nonReentrant.call({from: accounts[3]});
		const uint256arrayo0nSqPq = await WolfStakingRewardsRdS7rL0.updateNotifyRewardAmount.call(uintLot5Dog, {from: "0x0000000000000000000000000000000000000001"});
		const stringK3fpx1 = await WolfStakingRewardsRdS7rL0.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXXaww7 = "lcAXjl"
		const stringAejnIFB = "MKOLnGBORJNbPLrVeJdRslA9A5D32h6IPS0dgjzCjROladoltCKdpTsuOzapn3j06KExsZ1m6NEusR0iLcsoydjM4"
		const uintdLaOYpw = BigInt("168")
		const WolfStakingRewardsXUXwKC4 = await WolfStakingRewards.new(stringXXaww7, stringAejnIFB, uintdLaOYpw, {from: accounts[1]});
		const uintyvHPsxk = BigInt("140")
		const uintMdqi7TQ = BigInt("1980")
		await WolfStakingRewardsXUXwKC4.onlyOwner.call({from: accounts[0]});
		const uint256gBXwGM = await WolfStakingRewardsXUXwKC4.withdraw.call(uintMdqi7TQ, uintyvHPsxk, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const string0REMPO = "6qYPkMXOJScrVe26vohCPBvuYfcvQ1gn3aRUl0o97DFfH5Uegx2fuwD2"
		const stringzhjiCiO = "eNeZI"
		const uintkWmktZO = BigInt("219")
		const WolfStakingRewardsoKi1d88 = await WolfStakingRewards.new(string0REMPO, stringzhjiCiO, uintkWmktZO, {from: "0x0000000000000000000000000000000000000001"});
		const uintZVZ1IHJ = BigInt("749")
		const uintXorjAjN = BigInt("1778")
		const uintA6EIelB = BigInt("1167")
		const uint256LTQQnJM = await WolfStakingRewardsoKi1d88.withdrawRemainingBalance.call(uintXorjAjN, uintZVZ1IHJ, {from: accounts[0]});
		await WolfStakingRewardsoKi1d88.nonReentrant.call({from: accounts[0]});
		const uint256NLXmXtz = await WolfStakingRewardsoKi1d88.totalSupplyPerPool.call(uintA6EIelB, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYiu9NKY = "mAs9JYkTTTKywVnGnmalLg5XIdBW2I84Sl1K54qpn"
		const stringP81iT6Q = "qWYuFMLaJbhufHfovnHR1hC"
		const uintmOmblko = BigInt("69")
		const WolfStakingRewardsDdGWTXd = await WolfStakingRewards.new(stringYiu9NKY, stringP81iT6Q, uintmOmblko, {from: accounts[1]});
		const uintn6O8bBB = BigInt("543")
		const uintVDEdD0e = BigInt("1218")
		const uint3VIQzg = BigInt("982")
		const uintHjMH5l0 = BigInt("689")
		const uint256arrayeyxdjk = await WolfStakingRewardsDdGWTXd.updateNotifyRewardAmount.call(uintn6O8bBB, {from: accounts[0]});
		const uint256YMuxZHl = await WolfStakingRewardsDdGWTXd.lastTimeRewardApplicable.call(uintVDEdD0e, {from: accounts[3]});
		const stringqzUzksU = await WolfStakingRewardsDdGWTXd.symbol.call({from: accounts[4]});
		const uint256iLNbjUG = await WolfStakingRewardsDdGWTXd.rewardPerToken.call(uint3VIQzg, {from: accounts[3]});
		const uint256lUoCcnR = await WolfStakingRewardsDdGWTXd.rewardPerToken.call(uintHjMH5l0, {from: accounts[0]});
		const stringByY069x = await WolfStakingRewardsDdGWTXd.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringob4vBwJ = "moexiTT7W4Wh9rOJa5ToNAO7iDGdxhoiMYYoVmMm9poYgfrDzJhob4wxZ8qyU1Iqkb4UA26UPngN"
		const stringuJLA7uR = "pzaBWpG4"
		const uintfXBJbVK = BigInt("253")
		const WolfStakingRewardsI7lDoSb = await WolfStakingRewards.new(stringob4vBwJ, stringuJLA7uR, uintfXBJbVK, {from: accounts[3]});
		const uintiNFMUyX = BigInt("1169")
		const uinttFbBZWJ = BigInt("1052")
		const uintJFMhnIc = BigInt("315")
		const addressMNWiL6w = accounts[1]
		const stringr9Uun05 = await WolfStakingRewardsI7lDoSb.symbol.call({from: accounts[4]});
		const stringsFmRqxV = await WolfStakingRewardsI7lDoSb.name.call({from: accounts[1]});
		const uint256Qt4UVt6 = await WolfStakingRewardsI7lDoSb.withdrawRemainingBalance.call(uinttFbBZWJ, uintiNFMUyX, {from: accounts[3]});
		const uint256cxSYPn7 = await WolfStakingRewardsI7lDoSb.balanceOfPerPool.call(addressMNWiL6w, uintJFMhnIc, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhgXBuD6 = "KlyG2j"
		const stringkuKRVom = "GtdgIRMj7z8ZyGDyzL72K3PtGP9"
		const uintiZuunf = BigInt("148")
		const WolfStakingRewardsptL7LGe = await WolfStakingRewards.new(stringhgXBuD6, stringkuKRVom, uintiZuunf, {from: accounts[3]});
		const uintIx0Fiep = BigInt("1359")
		const uinthfr64xI = BigInt("1135")
		await WolfStakingRewardsptL7LGe.nonReentrant.call({from: accounts[1]});
		const uint256arraydlSba3I = await WolfStakingRewardsptL7LGe.updateNotifyRewardAmount.call(uintIx0Fiep, {from: accounts[3]});
		await WolfStakingRewardsptL7LGe.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256h24FDdG = await WolfStakingRewardsptL7LGe.totalSupplyPerPool.call(uinthfr64xI, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const string8XQ0B7 = "NncR9FtolymOKlIyBS6LSKNOUPpHJm01ov4q1DSVdkPwabyC5Ufxk9fd"
		const stringiDjV4s = "uPlhV"
		const uintuTQSR09 = BigInt("37")
		const WolfStakingRewardszQh6dyA = await WolfStakingRewards.new(string8XQ0B7, stringiDjV4s, uintuTQSR09, {from: accounts[2]});
		await WolfStakingRewardszQh6dyA.nonReentrant.call({from: accounts[5]});
		await WolfStakingRewardszQh6dyA.nonReentrant.call({from: accounts[5]});
		await WolfStakingRewardszQh6dyA.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8b0oaxzG = await WolfStakingRewardszQh6dyA.decimals.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKNEA9qS = "MJy"
		const stringqzgFm9 = "4NO1b9sqA"
		const uintyxFw1It = BigInt("238")
		const WolfStakingRewardsLXKk29C = await WolfStakingRewards.new(stringKNEA9qS, stringqzgFm9, uintyxFw1It, {from: accounts[5]});
		const uintzve2P1G = BigInt("581")
		const uint256rI15TDE = await WolfStakingRewardsLXKk29C.exit.call(uintzve2P1G, {from: accounts[2]});
		await WolfStakingRewardsLXKk29C.onlyOwner.call({from: accounts[3]});
		await WolfStakingRewardsLXKk29C.onlyOwner.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringD39357S = "hutSdDP1FcMcoLCcWcTTrMYpaLYbyd9W3RiXLJmr55sJB"
		const stringdwnwPsp = "Mp8oqqZ50LAASMtRCAFJbBEewaCiF3ufdzasvOkmPfzqusKE1CvCROr3a1Go28xLKY6UK7p1C97QucsibSYuej7LDU2pGmU"
		const uintQLFSVnv = BigInt("38")
		const WolfStakingRewardschyaHsF = await WolfStakingRewards.new(stringD39357S, stringdwnwPsp, uintQLFSVnv, {from: accounts[0]});
		const uintetGa57v = BigInt("1796")
		const uintAYVnMjA = BigInt("1461")
		const addressYqXC12Z = accounts[1]
		await WolfStakingRewardschyaHsF.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256Lf0iPOm = await WolfStakingRewardschyaHsF.totalSupplyPerPool.call(uintetGa57v, {from: "0x0000000000000000000000000000000000000001"});
		const stringC8nOEQm = await WolfStakingRewardschyaHsF.name.call({from: accounts[2]});
		const addressBjSGsXO = await WolfStakingRewardschyaHsF.updateReward.call(addressYqXC12Z, uintAYVnMjA, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpTZ6XU = "fJj9EsBtbAUwBLIhIPFw4H1D6vnTbUmxJ5ePMcQUTBpe5wdHi9S75CW"
		const stringXPnSOs1 = "CrTlA5n4BzLbCewsGJcfM"
		const uintbJ5UDzE = BigInt("172")
		const WolfStakingRewardszjnjSrG = await WolfStakingRewards.new(stringpTZ6XU, stringXPnSOs1, uintbJ5UDzE, {from: accounts[2]});
		const uintlGnR0C = BigInt("118")
		const uint256arrayaVfahJK = await WolfStakingRewardszjnjSrG.updateNotifyRewardAmount.call(uintlGnR0C, {from: accounts[1]});
		const stringeboM9Eq = await WolfStakingRewardszjnjSrG.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjxPpK2I = "LZg2z94MOiuPuuptyIDDKtXM2vT"
		const stringDdFjedj = "83D98yKxE6b87XWno4f4USzoxHcmlLXuhdt1dxHYYj55EsREmlwewgdWgnlXYfhhjN1t6RwDXFWgVX"
		const uintQKavgc = BigInt("118")
		const WolfStakingRewardsMXs6eW3 = await WolfStakingRewards.new(stringjxPpK2I, stringDdFjedj, uintQKavgc, {from: accounts[2]});
		const uintZnrVZI2 = BigInt("1974")
		const uintvYC7fad = BigInt("859")
		const uintkHCD4RF = BigInt("1078")
		const uintbttvqvx = BigInt("1188")
		const addressfnmq42x = accounts[1]
		const uintXBCu1K1 = await WolfStakingRewardsMXs6eW3.getReward.call(uintZnrVZI2, {from: accounts[2]});
		const uint256swI5cS = await WolfStakingRewardsMXs6eW3.withdrawRemainingBalance.call(uintkHCD4RF, uintvYC7fad, {from: accounts[0]});
		const addressdgPYeu = await WolfStakingRewardsMXs6eW3.updateReward.call(addressfnmq42x, uintbttvqvx, {from: accounts[1]});
		const stringv3cPA0W = await WolfStakingRewardsMXs6eW3.name.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEjxHwhY = "YdS85L1B3J"
		const stringJYR5VBk = "38Z0dGwByYGOnIg6632qnYxHv7uIbkxWo"
		const uintWvTeTT = BigInt("177")
		const WolfStakingRewardsf1rFnoO = await WolfStakingRewards.new(stringEjxHwhY, stringJYR5VBk, uintWvTeTT, {from: accounts[2]});
		const uintmwfZ0cv = BigInt("8")
		const addressYvMeNzW = accounts[5]
		const uintx7IMyOc = BigInt("35")
		const uintGtlO7BM = BigInt("603")
		const uintyUjg40F = BigInt("1519")
		const uintTD6uIiu = BigInt("668")
		const uint256so7tylY = await WolfStakingRewardsf1rFnoO.earned.call(addressYvMeNzW, uintmwfZ0cv, {from: accounts[1]});
		const uint256JO3yS6O = await WolfStakingRewardsf1rFnoO.getRewardForDuration.call(uintx7IMyOc, {from: accounts[4]});
		const uint256gJmG4x5 = await WolfStakingRewardsf1rFnoO.rewardPerToken.call(uintGtlO7BM, {from: accounts[0]});
		const uint256IPMtd1K = await WolfStakingRewardsf1rFnoO.stake.call(uintTD6uIiu, uintyUjg40F, {from: accounts[3]});
		const stringCbH5YnK = await WolfStakingRewardsf1rFnoO.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringodvSWIe = "Jd0awXIbFt70dLfQyzMNMixtb9u81UABwAal4g6dHnPPEqwHRIUG7YopO85HsYw5"
		const stringy7qXl0z = "R837bUOWdSait9CEoTMfKhqcXw4CoaDhmK4hnjO2EMCRlBQQol2SSL6L1D0x1TfR9zcfrywt6f3R2s"
		const uintnxhouZR = BigInt("94")
		const WolfStakingRewardshMKpSEt = await WolfStakingRewards.new(stringodvSWIe, stringy7qXl0z, uintnxhouZR, {from: accounts[1]});
		const uintF9aneKX = BigInt("1492")
		const uintDhUZUoB = BigInt("1553")
		const uintCFuK30K = BigInt("104")
		const uintixaoGs3 = BigInt("1829")
		const uintr97nz87 = BigInt("1305")
		const uintB6EbaSZ = BigInt("231")
		const uinthBPTQ10 = BigInt("1175")
		const addresseeehLf1 = accounts[1]
		const uintfaxwYMx = BigInt("1189")
		const uintBMF8OxL = BigInt("1107")
		const uintOUpSWis = BigInt("1701")
		const uintM4R9pD2 = BigInt("20")
		const uint256D0SHxlp = await WolfStakingRewardshMKpSEt.stake.call(uintDhUZUoB, uintF9aneKX, {from: accounts[0]});
		const uint256IKnvWUc = await WolfStakingRewardshMKpSEt.withdrawRemainingBalance.call(uintixaoGs3, uintCFuK30K, {from: accounts[2]});
		const uint256Zo3eNA = await WolfStakingRewardshMKpSEt.withdraw.call(uintB6EbaSZ, uintr97nz87, {from: accounts[0]});
		const uint256KlcVWq = await WolfStakingRewardshMKpSEt.earned.call(addresseeehLf1, uinthBPTQ10, {from: accounts[0]});
		const uint256SkQwSxx = await WolfStakingRewardshMKpSEt.withdrawRemainingBalance.call(uintBMF8OxL, uintfaxwYMx, {from: accounts[2]});
		const uint256JZnAFTF = await WolfStakingRewardshMKpSEt.withdrawRemainingBalance.call(uintM4R9pD2, uintOUpSWis, {from: accounts[1]});
	});
})