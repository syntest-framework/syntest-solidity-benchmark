const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringEsfPxok = "V5aSLVgm1woj1WHRpfiosmyxyBOrIus"
		const stringmdM69q7 = "tGsI627CKpO0LIbMIW"
		const uintjiIVhGP = BigInt("72")
		const WolfStakingRewardsCWD5KFz = await WolfStakingRewards.new(stringEsfPxok, stringmdM69q7, uintjiIVhGP, {from: accounts[0]});
		const uintWEOIgxp = BigInt("669")
		const uintIKG4WsK = BigInt("1718")
		const uintbHj2nPA = BigInt("1527")
		const uintHrAQpL = BigInt("1238")
		const uintWn8cB8b = BigInt("653")
		const uintiHE87H = BigInt("776")
		const addressyFz2IWd = accounts[3]
		const uintVzJiJM = BigInt("1000")
		const addressJ8So8e = accounts[3]
		const uint256qUtvzxD = await WolfStakingRewardsCWD5KFz.withdrawRemainingBalance.call(uintIKG4WsK, uintWEOIgxp, {from: accounts[1]});
		const uint256w8SECzG = await WolfStakingRewardsCWD5KFz.rewardPerToken.call(uintbHj2nPA, {from: accounts[3]});
		const uint256FBGc06T = await WolfStakingRewardsCWD5KFz.stake.call(uintWn8cB8b, uintHrAQpL, {from: accounts[4]});
		const uint256pa7ZnDf = await WolfStakingRewardsCWD5KFz.balanceOfPerPool.call(addressyFz2IWd, uintiHE87H, {from: accounts[0]});
		const uint256pdRWOMb = await WolfStakingRewardsCWD5KFz.balanceOfPerPool.call(addressJ8So8e, uintVzJiJM, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringf1vPQSt = "8gka1KBsUuPdo2XW3ksunB4GVHXi6COxPFpyg5pcn59IdNwOhYTs6r3D5QDNxchS9HzHN7B4abyRcj"
		const stringxjB0aZj = "swwQkxwl4eP4ewAG3nzAYShYxVvGzCQcECCQsvgTKAMD6gpniM"
		const uintZ58ZsPQ = BigInt("59")
		const WolfStakingRewardsLj3QkuD = await WolfStakingRewards.new(stringf1vPQSt, stringxjB0aZj, uintZ58ZsPQ, {from: accounts[3]});
		const uintSHVQ1km = BigInt("1833")
		const uintpBDSGYx = BigInt("1571")
		const addressQ1YCtFt = accounts[2]
		const uintMpwTefE = BigInt("1892")
		const addressHBpOWk = accounts[2]
		const uintNCkDfY9 = await WolfStakingRewardsLj3QkuD.getReward.call(uintSHVQ1km, {from: accounts[3]});
		await WolfStakingRewardsLj3QkuD.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256F5NFWMk = await WolfStakingRewardsLj3QkuD.balanceOfPerPool.call(addressQ1YCtFt, uintpBDSGYx, {from: accounts[3]});
		const addresslsjYl74 = await WolfStakingRewardsLj3QkuD.updateReward.call(addressHBpOWk, uintMpwTefE, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringC7L1UWL = "cYMWhYny7v6l86DIz2ozEosIj6ewGGKyPCAmdtH2cevmkWEGGry6J"
		const stringo9dDj4n = "aSJCder5MEiK6vVeFFqtVxWmTdMK2vfvUoHWl3yoDIOmomXWYV7pxLvWhrvWaJXC4g1LtHGcgck"
		const uintkA1MbwC = BigInt("163")
		const WolfStakingRewardseQ3sxQv = await WolfStakingRewards.new(stringC7L1UWL, stringo9dDj4n, uintkA1MbwC, {from: accounts[2]});
		const uintuSKC5aE = BigInt("1753")
		const uint9VoKiA = BigInt("179")
		const uintZlXfGpT = BigInt("110")
		const uintekdq14s = await WolfStakingRewardseQ3sxQv.getReward.call(uintuSKC5aE, {from: accounts[5]});
		const uint256nAn9Zw = await WolfStakingRewardseQ3sxQv.totalSupplyPerPool.call(uint9VoKiA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WiTm7Nc = await WolfStakingRewardseQ3sxQv.lastTimeRewardApplicable.call(uintZlXfGpT, {from: accounts[5]});
		await WolfStakingRewardseQ3sxQv.onlyOwner.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringufQ4m4t = "SLnz"
		const stringYNHWdRr = "RnD7FTbtkTSFGsm7KbP5"
		const uintvF4yHm3 = BigInt("159")
		const WolfStakingRewardsjd88eKe = await WolfStakingRewards.new(stringufQ4m4t, stringYNHWdRr, uintvF4yHm3, {from: accounts[4]});
		const uintGQYrKpL = BigInt("858")
		const uintmgUF1Wy = BigInt("1269")
		const uintUijSFXl = BigInt("1561")
		const uintdmlfkYs = BigInt("594")
		const uintAb7jA66 = BigInt("2036")
		const addresspnvrdUW = accounts[3]
		const uint256ftN3kV = await WolfStakingRewardsjd88eKe.withdraw.call(uintmgUF1Wy, uintGQYrKpL, {from: accounts[3]});
		const uint256yZDs17n = await WolfStakingRewardsjd88eKe.totalSupplyPerPool.call(uintUijSFXl, {from: accounts[2]});
		const uint256JQgDP8z = await WolfStakingRewardsjd88eKe.lastTimeRewardApplicable.call(uintdmlfkYs, {from: accounts[1]});
		const uint8A6pgFM = await WolfStakingRewardsjd88eKe.decimals.call({from: accounts[5]});
		const addressBt8OB3J = await WolfStakingRewardsjd88eKe.updateReward.call(addresspnvrdUW, uintAb7jA66, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const address7UYzjT = accounts[4]
		const addressnhPtVN = accounts[4]
		const addressfyeaYak = accounts[0]
		const WolfStakingRewardsomq0ryQ = await WolfStakingRewards.new(address7UYzjT, addressnhPtVN, addressfyeaYak, {from: accounts[1]});
		const uintJeNR1C = BigInt("353")
		const addressWMHBng = accounts[2]
		const uintR1ez6pI = BigInt("1590")
		const addressohBIGo = accounts[3]
		const uintAkBC8q8 = BigInt("1392")
		const uintY1xqvh = BigInt("334")
//		const address30Mwi3 = await WolfStakingRewardsomq0ryQ.updateReward.call(addressWMHBng, uintJeNR1C, {from: accounts[0]});
//		const uint256IV6Rxp4 = await WolfStakingRewardsomq0ryQ.balanceOfPerPool.call(addressohBIGo, uintR1ez6pI, {from: accounts[1]});
//		const uint256Z82xNYk = await WolfStakingRewardsomq0ryQ.getRewardForDuration.call(uintAkBC8q8, {from: accounts[3]});
//		const uint256MD8mNBB = await WolfStakingRewardsomq0ryQ.exit.call(uintY1xqvh, {from: accounts[5]});
//		const stringJxwy5n = await WolfStakingRewardsomq0ryQ.symbol.call({from: accounts[3]});

		await expect(WolfStakingRewardsomq0ryQ.updateReward.call(addressWMHBng, uintJeNR1C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringusrhW5B = "DuMT33VPmpsCopCFvwIzRXXFmcahAUIz1NjCVKhqsyKgqJQSqzBoRFidw"
		const stringoPyzvIL = "kIHOP1BSiJXtqlxgL"
		const uintWj6KYXB = BigInt("78")
		const WolfStakingRewardsvhE4vOk = await WolfStakingRewards.new(stringusrhW5B, stringoPyzvIL, uintWj6KYXB, {from: accounts[5]});
		const uinthov4Kbd = BigInt("644")
		const uintcEVUgXp = BigInt("1747")
		const uintyBzxNFc = BigInt("250")
		const uint256arrayjB7EIp8 = await WolfStakingRewardsvhE4vOk.updateNotifyRewardAmount.call(uinthov4Kbd, {from: accounts[2]});
		const uint256b2CUkAy = await WolfStakingRewardsvhE4vOk.rewardPerToken.call(uintcEVUgXp, {from: accounts[1]});
		await WolfStakingRewardsvhE4vOk.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256a1fZ4Bk = await WolfStakingRewardsvhE4vOk.rewardPerToken.call(uintyBzxNFc, {from: accounts[1]});
		await WolfStakingRewardsvhE4vOk.nonReentrant.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmt0m8uZ = "A0mw6DemaLIOb6PYjVquRbnAp5QyI25v5MqjDPJIcO9Qk9CTJx"
		const stringIX7QTIv = "5J6tzmZ9"
		const uintxmG1DWD = BigInt("47")
		const WolfStakingRewardshXO370x = await WolfStakingRewards.new(stringmt0m8uZ, stringIX7QTIv, uintxmG1DWD, {from: accounts[3]});
		const uintUJmQvPR = BigInt("1016")
		const uintsO6OCzm = BigInt("99")
		const addresssceufqS = accounts[4]
		const uintTvCosyI = BigInt("1795")
		const addressXnq1YCZ = accounts[2]
		const uintUPeSF6B = BigInt("405")
		const uintjGyCXJi = BigInt("1481")
		const uint256ADXgdye = await WolfStakingRewardshXO370x.lastTimeRewardApplicable.call(uintUJmQvPR, {from: accounts[4]});
		const uint256JOquqNb = await WolfStakingRewardshXO370x.earned.call(addresssceufqS, uintsO6OCzm, {from: accounts[4]});
		const uint256HUjeXSQ = await WolfStakingRewardshXO370x.earned.call(addressXnq1YCZ, uintTvCosyI, {from: accounts[4]});
		const uint256xNwmplj = await WolfStakingRewardshXO370x.withdraw.call(uintjGyCXJi, uintUPeSF6B, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringU9RQsMf = "1lb1"
		const stringhcegwg8 = "Eqa3jDg85t7V3stnf9vTWiqusuLOSzH"
		const uintfb99dZg = BigInt("27")
		const WolfStakingRewardsrnoLw7b = await WolfStakingRewards.new(stringU9RQsMf, stringhcegwg8, uintfb99dZg, {from: accounts[4]});
		const uintjFlx18B = BigInt("1188")
		const uintugxWvne = BigInt("450")
		const uintaf6Sb2a = BigInt("1073")
		const uinttZiVZIm = BigInt("596")
		const uintMCveYnD = BigInt("1200")
		const uint256uMnVteR = await WolfStakingRewardsrnoLw7b.totalSupplyPerPool.call(uintjFlx18B, {from: accounts[1]});
		const uint256u3kAsNo = await WolfStakingRewardsrnoLw7b.withdrawRemainingBalance.call(uintaf6Sb2a, uintugxWvne, {from: accounts[5]});
		const uint256IHLzNH = await WolfStakingRewardsrnoLw7b.withdraw.call(uintMCveYnD, uinttZiVZIm, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressHmU1mwS = accounts[3]
		const addressmLPRGMU = accounts[1]
		const addressHRCTlQ = accounts[3]
		const WolfStakingRewardsxU5BgK6 = await WolfStakingRewards.new(addressHmU1mwS, addressmLPRGMU, addressHRCTlQ, {from: accounts[1]});
		const uintJLpzZrj = BigInt("1234")
		const addresso8skN4X = accounts[4]
		const uintgcCapRg = BigInt("629")
		const addressBp0wTM = accounts[3]
		const uintiiODLKF = BigInt("389")
		const uintDBrViWv = BigInt("210")
		const uintJXE9Tbw = BigInt("1758")
		const addressAuVglUJ = accounts[5]
		const uintUB4qylu = BigInt("249")
		const uint256Up8AYse = await WolfStakingRewardsxU5BgK6.balanceOfPerPool.call(addresso8skN4X, uintJLpzZrj, {from: accounts[4]});
		const uint256Bsgpmor = await WolfStakingRewardsxU5BgK6.earned.call(addressBp0wTM, uintgcCapRg, {from: accounts[5]});
//		const uint256zwNKPy = await WolfStakingRewardsxU5BgK6.withdraw.call(uintDBrViWv, uintiiODLKF, {from: accounts[1]});
//		const addressiQqcehn = await WolfStakingRewardsxU5BgK6.updateReward.call(addressAuVglUJ, uintJXE9Tbw, {from: accounts[0]});
//		const uint256NNcNWkG = await WolfStakingRewardsxU5BgK6.rewardPerToken.call(uintUB4qylu, {from: accounts[0]});
//		const uint8ze6LlwB = await WolfStakingRewardsxU5BgK6.decimals.call({from: accounts[2]});

		assert.equal(uint256Bsgpmor, BigInt("0"))
		assert.equal(uint256Up8AYse, BigInt("0"))
		await expect(WolfStakingRewardsxU5BgK6.withdraw.call(uintDBrViWv, uintiiODLKF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringlPOqXbv = "ECCpD3Hiw08slxQeSndqxpDagpuTybwtpwVEu"
		const stringdmyWvxg = "6bsc1GE3zRkqHw7r5H8JRGkMYJk5LZY8CXRRt5ux71k42fp"
		const uintcCSh4Du = BigInt("175")
		const WolfStakingRewardszqoH5mH = await WolfStakingRewards.new(stringlPOqXbv, stringdmyWvxg, uintcCSh4Du, {from: accounts[2]});
		const uintyMuwh8I = BigInt("1296")
		const addressCQh6N9 = accounts[2]
		const uintLiiOOuG = BigInt("1946")
		const uintcDia539 = BigInt("21")
		const addressH8IsnSL = accounts[0]
		const uint0qq8fi = BigInt("1750")
		const uintBZX4adl = BigInt("122")
		const uint256kqxioPN = await WolfStakingRewardszqoH5mH.earned.call(addressCQh6N9, uintyMuwh8I, {from: accounts[1]});
		const uint256oM0TH3x = await WolfStakingRewardszqoH5mH.exit.call(uintLiiOOuG, {from: accounts[2]});
		const uint256CjL0Lxz = await WolfStakingRewardszqoH5mH.balanceOfPerPool.call(addressH8IsnSL, uintcDia539, {from: accounts[1]});
		const uint256Apnoebp = await WolfStakingRewardszqoH5mH.stake.call(uintBZX4adl, uint0qq8fi, {from: accounts[0]});
		const uint8Jynenvv = await WolfStakingRewardszqoH5mH.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressbulU8zV = accounts[3]
		const addressHxdcgse = accounts[1]
		const addressikRPRaH = accounts[3]
		const WolfStakingRewardsxU5BgK6 = await WolfStakingRewards.new(addressbulU8zV, addressHxdcgse, addressikRPRaH, {from: accounts[1]});
		const uintJlg50YY = BigInt("1234")
		const addressHqr8IYX = accounts[5]
		const uint8fdSyH = BigInt("751")
		const addressMEjQTod = "0x0000000000000000000000000000000000000001"
		const uinttHgg4DQ = BigInt("629")
		const addressWem5mG = accounts[3]
		const uintAiMkYc = BigInt("1590")
		const uintCQ3YRH = BigInt("389")
		const uintsEgTnW5 = BigInt("210")
		const uintN4Xssjh = BigInt("1758")
		const addressCTgyq5W = accounts[5]
		const uintpHmoxs2 = BigInt("249")
		const uint256Up8AYse = await WolfStakingRewardsxU5BgK6.balanceOfPerPool.call(addressHqr8IYX, uintJlg50YY, {from: accounts[4]});
		const uint256ETPOjur = await WolfStakingRewardsxU5BgK6.earned.call(addressMEjQTod, uint8fdSyH, {from: accounts[1]});
		const uint256Bsgpmor = await WolfStakingRewardsxU5BgK6.earned.call(addressWem5mG, uinttHgg4DQ, {from: accounts[5]});
		const uintvVPyQjB = await WolfStakingRewardsxU5BgK6.getReward.call(uintAiMkYc, {from: accounts[1]});
//		const uint256zwNKPy = await WolfStakingRewardsxU5BgK6.withdraw.call(uintsEgTnW5, uintCQ3YRH, {from: accounts[1]});
//		const addressiQqcehn = await WolfStakingRewardsxU5BgK6.updateReward.call(addressCTgyq5W, uintN4Xssjh, {from: accounts[0]});
//		const uint256NNcNWkG = await WolfStakingRewardsxU5BgK6.rewardPerToken.call(uintpHmoxs2, {from: accounts[0]});
//		const uint8ze6LlwB = await WolfStakingRewardsxU5BgK6.decimals.call({from: accounts[2]});

		assert.equal(uint256Bsgpmor, BigInt("0"))
		assert.equal(uint256ETPOjur, BigInt("0"))
		assert.equal(uint256Up8AYse, BigInt("0"))
		await expect(WolfStakingRewardsxU5BgK6.withdraw.call(uintsEgTnW5, uintCQ3YRH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresssOnr3yF = accounts[2]
		const addresslMkm7jl = accounts[0]
		const addressWhbmZK = accounts[4]
		const WolfStakingRewardsf3PEJH = await WolfStakingRewards.new(addresssOnr3yF, addresslMkm7jl, addressWhbmZK, {from: accounts[0]});
		const uintdTh4F0Q = BigInt("367")
		const uintrss5omR = BigInt("1894")
//		const uint256xV9E0YQ = await WolfStakingRewardsf3PEJH.getRewardForDuration.call(uintdTh4F0Q, {from: accounts[4]});
//		const stringawihfxM = await WolfStakingRewardsf3PEJH.name.call({from: accounts[4]});
//		await WolfStakingRewardsf3PEJH.onlyRewardsDistribution.call({from: accounts[3]});
//		const stringIv5UifF = await WolfStakingRewardsf3PEJH.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256OzZYla = await WolfStakingRewardsf3PEJH.rewardPerToken.call(uintrss5omR, {from: accounts[1]});

		await expect(WolfStakingRewardsf3PEJH.getRewardForDuration.call(uintdTh4F0Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressRp3cbre = accounts[1]
		const addressUUx05rl = accounts[5]
		const addresscrPmeWk = accounts[2]
		const WolfStakingRewardsCVyF7m = await WolfStakingRewards.new(addressRp3cbre, addressUUx05rl, addresscrPmeWk, {from: accounts[5]});
		const uintc5THzl = BigInt("812")
		const uint7sOF8b = BigInt("45")
		const uintDBAF1hT = BigInt("219")
		const uintpt6ITYb = BigInt("1120")
		const uint256NEAHv74 = await WolfStakingRewardsCVyF7m.lastTimeRewardApplicable.call(uintc5THzl, {from: accounts[0]});
//		const uint256XozfK1M = await WolfStakingRewardsCVyF7m.exit.call(uint7sOF8b, {from: accounts[1]});
//		await WolfStakingRewardsCVyF7m.onlyRewardsDistribution.call({from: accounts[4]});
//		const uint256RpjmXh4 = await WolfStakingRewardsCVyF7m.withdraw.call(uintpt6ITYb, uintDBAF1hT, {from: accounts[0]});

		assert.equal(uint256NEAHv74, BigInt("0"))
		await expect(WolfStakingRewardsCVyF7m.exit.call(uint7sOF8b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressIbw2UYg = accounts[3]
		const addresseJvkLjZ = accounts[1]
		const addressMhDdg3Z = accounts[3]
		const WolfStakingRewardsxU5BgK6 = await WolfStakingRewards.new(addressIbw2UYg, addresseJvkLjZ, addressMhDdg3Z, {from: accounts[1]});
		const uintn0FfoU = BigInt("1234")
		const addressjuqTNt8 = accounts[5]
		const uintk7lR56e = BigInt("33")
		const uintoVSxGdO = BigInt("361")
		const uintb8XxYhY = BigInt("751")
		const addressoZwQWu7 = "0x0000000000000000000000000000000000000001"
		const uintewANhRe = BigInt("629")
		const addressuk8TYw = accounts[3]
		const uintvl2Dym = BigInt("1590")
		const uintSkqazG = BigInt("389")
		const uintwHiybk9 = BigInt("210")
		const uintTFqbZiS = BigInt("734")
		const uintXKI0DIR = BigInt("1758")
		const addressFM4bJLA = accounts[5]
		const uintAqnluEk = BigInt("791")
		const addressoQDtlr0 = "0x0000000000000000000000000000000000000001"
		const uintlWswZr = BigInt("250")
		const uint256Up8AYse = await WolfStakingRewardsxU5BgK6.balanceOfPerPool.call(addressjuqTNt8, uintn0FfoU, {from: accounts[4]});
//		const uint256XFinhvB = await WolfStakingRewardsxU5BgK6.withdrawRemainingBalance.call(uintoVSxGdO, uintk7lR56e, {from: accounts[1]});
//		const uint256ETPOjur = await WolfStakingRewardsxU5BgK6.earned.call(addressoZwQWu7, uintb8XxYhY, {from: accounts[1]});
//		const uint256Bsgpmor = await WolfStakingRewardsxU5BgK6.earned.call(addressuk8TYw, uintewANhRe, {from: accounts[5]});
//		const uintvVPyQjB = await WolfStakingRewardsxU5BgK6.getReward.call(uintvl2Dym, {from: accounts[1]});
//		const uint256zwNKPy = await WolfStakingRewardsxU5BgK6.withdraw.call(uintwHiybk9, uintSkqazG, {from: accounts[1]});
//		const uint256brnLpO = await WolfStakingRewardsxU5BgK6.getRewardForDuration.call(uintTFqbZiS, {from: accounts[4]});
//		const addressiQqcehn = await WolfStakingRewardsxU5BgK6.updateReward.call(addressFM4bJLA, uintXKI0DIR, {from: accounts[0]});
//		const uint256GQ15tpR = await WolfStakingRewardsxU5BgK6.earned.call(addressoQDtlr0, uintAqnluEk, {from: accounts[4]});
//		const uint256NNcNWkG = await WolfStakingRewardsxU5BgK6.rewardPerToken.call(uintlWswZr, {from: accounts[0]});
//		const uint8ze6LlwB = await WolfStakingRewardsxU5BgK6.decimals.call({from: accounts[2]});

		assert.equal(uint256Up8AYse, BigInt("0"))
		await expect(WolfStakingRewardsxU5BgK6.withdrawRemainingBalance.call(uintoVSxGdO, uintk7lR56e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressfBmLQ4 = "0x0000000000000000000000000000000000000001"
		const addresseWEMJz = accounts[1]
		const addressG6ereaZ = accounts[1]
		const WolfStakingRewardsYJZCg3C = await WolfStakingRewards.new(addressfBmLQ4, addresseWEMJz, addressG6ereaZ, {from: accounts[3]});
		const uintXecy2V7 = BigInt("1978")
		const uintODRdwQW = BigInt("698")
		const uintuiStDmQ = BigInt("1373")
		const uintyPrIoLp = BigInt("172")
		const uint3BfNIP = BigInt("1090")
		const uintmWyHvDV = BigInt("1911")
		const uintePBjNx = BigInt("82")
		const uintaj3FJIQ = await WolfStakingRewardsYJZCg3C.getReward.call(uintXecy2V7, {from: accounts[0]});
		const uinto8xQpVz = await WolfStakingRewardsYJZCg3C.getReward.call(uintODRdwQW, {from: accounts[3]});
//		const uint256xlwr5Ue = await WolfStakingRewardsYJZCg3C.withdrawRemainingBalance.call(uintyPrIoLp, uintuiStDmQ, {from: accounts[1]});
//		const uint8nM6ICv = await WolfStakingRewardsYJZCg3C.decimals.call({from: accounts[1]});
//		const uintl2fQF2C = await WolfStakingRewardsYJZCg3C.getReward.call(uint3BfNIP, {from: accounts[1]});
//		const uint256s60yx9u = await WolfStakingRewardsYJZCg3C.getRewardForDuration.call(uintmWyHvDV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256WpXB7Bu = await WolfStakingRewardsYJZCg3C.rewardPerToken.call(uintePBjNx, {from: accounts[2]});

		await expect(WolfStakingRewardsYJZCg3C.withdrawRemainingBalance.call(uintyPrIoLp, uintuiStDmQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringir0Vct = "BsJa2"
		const stringudTVkJG = "3udiLN6YEDWmNviKtNuCGxABsCuC1LbAPHBNlx"
		const uintu7wsc0Y = BigInt("129")
		const WolfStakingRewardsvWXyapl = await WolfStakingRewards.new(stringir0Vct, stringudTVkJG, uintu7wsc0Y, {from: accounts[3]});
		const uintP5m9KGS = BigInt("912")
		const uintWpPthD = BigInt("1338")
		const uintki1omx = BigInt("1687")
		const uintZPG022y = BigInt("1584")
		const uintpYcf9im = BigInt("1428")
		const uint256KQDRWT5 = await WolfStakingRewardsvWXyapl.withdrawRemainingBalance.call(uintWpPthD, uintP5m9KGS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256X1tc3g3 = await WolfStakingRewardsvWXyapl.rewardPerToken.call(uintki1omx, {from: accounts[0]});
		const uint256BHzCIFo = await WolfStakingRewardsvWXyapl.withdraw.call(uintpYcf9im, uintZPG022y, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresstPsFY5H = "0x0000000000000000000000000000000000000001"
		const addressT3JCYL = accounts[0]
		const addresskBdytwb = accounts[5]
		const WolfStakingRewardszgsqEup = await WolfStakingRewards.new(addresstPsFY5H, addressT3JCYL, addresskBdytwb, {from: "0x0000000000000000000000000000000000000001"});
		const uintvEPUVaN = BigInt("525")
		const uintn2RAycx = BigInt("1840")
		const uintOm1mdOK = BigInt("2004")
		const uinttIlNtzG = BigInt("1736")
		const addressYezVxNk = "0x0000000000000000000000000000000000000001"
		const uint256D55fA8l = await WolfStakingRewardszgsqEup.withdraw.call(uintn2RAycx, uintvEPUVaN, {from: accounts[2]});
		const uint256laS93lS = await WolfStakingRewardszgsqEup.getRewardForDuration.call(uintOm1mdOK, {from: accounts[4]});
		const uint256QoIsXCT = await WolfStakingRewardszgsqEup.balanceOfPerPool.call(addressYezVxNk, uinttIlNtzG, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressYsmdZMH = accounts[1]
		const addressQn3CsWt = accounts[2]
		const addressi1Q3FGM = accounts[2]
		const WolfStakingRewardszFXg2d0 = await WolfStakingRewards.new(addressYsmdZMH, addressQn3CsWt, addressi1Q3FGM, {from: accounts[5]});
		const uintMvh9qh = BigInt("511")
		const uintCY00VqC = BigInt("39")
		const uintoTXd5TR = BigInt("989")
		const uint256lpODv6n = await WolfStakingRewardszFXg2d0.lastTimeRewardApplicable.call(uintMvh9qh, {from: accounts[3]});
//		const uint256iruNzTL = await WolfStakingRewardszFXg2d0.stake.call(uintoTXd5TR, uintCY00VqC, {from: accounts[2]});

		assert.equal(uint256lpODv6n, BigInt("0"))
		await expect(WolfStakingRewardszFXg2d0.stake.call(uintoTXd5TR, uintCY00VqC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressO8mlCTP = "0x0000000000000000000000000000000000000001"
		const addressMRJrsE = accounts[1]
		const addressvp0Jie2 = accounts[1]
		const WolfStakingRewardsYJZCg3C = await WolfStakingRewards.new(addressO8mlCTP, addressMRJrsE, addressvp0Jie2, {from: accounts[3]});
		const uintcDfXdT = BigInt("1978")
		const uintyAA0LF4 = BigInt("82")
		const uintaj3FJIQ = await WolfStakingRewardsYJZCg3C.getReward.call(uintcDfXdT, {from: accounts[0]});
//		const uint8nM6ICv = await WolfStakingRewardsYJZCg3C.decimals.call({from: accounts[1]});
//		const uint256WpXB7Bu = await WolfStakingRewardsYJZCg3C.rewardPerToken.call(uintyAA0LF4, {from: accounts[2]});

		await expect(WolfStakingRewardsYJZCg3C.decimals.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresso9g1HS = accounts[1]
		const addressL8eX4il = accounts[2]
		const addresszuO9iv = accounts[2]
		const WolfStakingRewardszFXg2d0 = await WolfStakingRewards.new(addresso9g1HS, addressL8eX4il, addresszuO9iv, {from: accounts[5]});
		const uintmazHGLK = BigInt("0")
		const uintvLhxSgI = BigInt("511")
//		const uint256paN3Pzh = await WolfStakingRewardszFXg2d0.exit.call(uintmazHGLK, {from: accounts[1]});
//		const uint256lpODv6n = await WolfStakingRewardszFXg2d0.lastTimeRewardApplicable.call(uintvLhxSgI, {from: accounts[3]});

		await expect(WolfStakingRewardszFXg2d0.exit.call(uintmazHGLK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringhmcWaIA = "rx4HswxX8cxdwGefx1cK6PhBWNM8z0WYf9H0Ghxq3LoBQfhogcA55nx7KoxhMdg5omm6bbAJxjiYOwv9Im6"
		const string9jWvNj = "RxJ3iO2V1VSkfkTQ9lEIjHmZ1hoQcGAGsvYtuE3dJ86KSd3uenkyo"
		const uintUbtTj6r = BigInt("145")
		const WolfStakingRewardss37xj1b = await WolfStakingRewards.new(stringhmcWaIA, string9jWvNj, uintUbtTj6r, {from: accounts[4]});
		const uintAsxLue = BigInt("935")
		const addressuDYkOQ9 = accounts[3]
		const uintYR7WEai = BigInt("410")
		const uint256zGB5DwY = await WolfStakingRewardss37xj1b.earned.call(addressuDYkOQ9, uintAsxLue, {from: accounts[0]});
		await WolfStakingRewardss37xj1b.nonReentrant.call({from: accounts[0]});
		const uint256HVizSA = await WolfStakingRewardss37xj1b.lastTimeRewardApplicable.call(uintYR7WEai, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressJe5tZr1 = accounts[1]
		const addressCfNwBbW = accounts[2]
		const addressbvguMD = accounts[2]
		const WolfStakingRewardszFXg2d0 = await WolfStakingRewards.new(addressJe5tZr1, addressCfNwBbW, addressbvguMD, {from: accounts[5]});
		const uintEP05UOH = BigInt("689")
		const uintPje8Wa1 = BigInt("504")
		const uintLO4xN4O = BigInt("39")
		const uintHWaOw6G = BigInt("989")
//		const uint256arrayNZY67lp = await WolfStakingRewardszFXg2d0.updateNotifyRewardAmount.call(uintEP05UOH, {from: accounts[1]});
//		const uint256lpODv6n = await WolfStakingRewardszFXg2d0.lastTimeRewardApplicable.call(uintPje8Wa1, {from: accounts[3]});
//		const uint256iruNzTL = await WolfStakingRewardszFXg2d0.stake.call(uintHWaOw6G, uintLO4xN4O, {from: accounts[2]});

		await expect(WolfStakingRewardszFXg2d0.updateNotifyRewardAmount.call(uintEP05UOH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringz6KTGiL = "Cm"
		const stringbcM1GyC = "p5BUfPICamigrf6ylIZdpVWPqVTZJf7mg6j1LzYffgdtnhjst2q"
		const uintngo1DGc = BigInt("187")
		const WolfStakingRewardsaBqEWvV = await WolfStakingRewards.new(stringz6KTGiL, stringbcM1GyC, uintngo1DGc, {from: accounts[0]});
		const uintwNievGq = BigInt("1350")
		const uintwDTmOVR = BigInt("1354")
		const uintpMZ2qQ2 = await WolfStakingRewardsaBqEWvV.getReward.call(uintwNievGq, {from: accounts[1]});
		const stringNbaNEb1 = await WolfStakingRewardsaBqEWvV.symbol.call({from: accounts[5]});
		const uintH3wl7s = await WolfStakingRewardsaBqEWvV.getReward.call(uintwDTmOVR, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresseNvpcb = accounts[1]
		const addressiQk7qQ5 = accounts[2]
		const addressAYAP30f = accounts[2]
		const WolfStakingRewardszFXg2d0 = await WolfStakingRewards.new(addresseNvpcb, addressiQk7qQ5, addressAYAP30f, {from: accounts[5]});
		const uinttDmPoZ = BigInt("29")
		const uintlkBAUBo = BigInt("492")
		const uintCIIjoJt = BigInt("1022")
		const uintJ2jwid7 = BigInt("39")
		const uintwyTuent = BigInt("989")
		const uint256hTTkcjU = await WolfStakingRewardszFXg2d0.totalSupplyPerPool.call(uinttDmPoZ, {from: accounts[3]});
		const uint256lpODv6n = await WolfStakingRewardszFXg2d0.lastTimeRewardApplicable.call(uintlkBAUBo, {from: accounts[3]});
		const uint256WmMPfrB = await WolfStakingRewardszFXg2d0.totalSupplyPerPool.call(uintCIIjoJt, {from: accounts[2]});
//		const uint256iruNzTL = await WolfStakingRewardszFXg2d0.stake.call(uintwyTuent, uintJ2jwid7, {from: accounts[2]});
//		await WolfStakingRewardszFXg2d0.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256WmMPfrB, BigInt("0"))
		assert.equal(uint256hTTkcjU, BigInt("0"))
		assert.equal(uint256lpODv6n, BigInt("0"))
		await expect(WolfStakingRewardszFXg2d0.stake.call(uintwyTuent, uintJ2jwid7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringMreRiP = "aF7ODO68QRRZevcAwbRwqF5rXDw8l1RRC4otjyMGsatUkdFmgjH8lxiOaQ8AIb7gEef8Nk8bM5LXaTuluLqO7Np"
		const stringi8p5Qtf = "lp2jTB93Yl6Xa5IL8Wo3OJG"
		const uintgEPx3sR = BigInt("211")
		const WolfStakingRewardsiiz3GA = await WolfStakingRewards.new(stringMreRiP, stringi8p5Qtf, uintgEPx3sR, {from: accounts[1]});
		const uintTPAHrll = BigInt("1406")
		const addressmRDFa0y = accounts[5]
		const uintJ0YhuL4 = BigInt("1020")
		const uintGeA6h2 = BigInt("799")
		const uinthsqZrD = BigInt("1014")
		const uintT9995k8 = BigInt("1161")
		const uint3NeNWJ = BigInt("1647")
		const uint256WgQvwfg = await WolfStakingRewardsiiz3GA.earned.call(addressmRDFa0y, uintTPAHrll, {from: accounts[0]});
		const uint256arrayvRn1Xj = await WolfStakingRewardsiiz3GA.updateNotifyRewardAmount.call(uintJ0YhuL4, {from: accounts[4]});
		const uint256zh4F8i0 = await WolfStakingRewardsiiz3GA.stake.call(uinthsqZrD, uintGeA6h2, {from: accounts[2]});
		const uintV3kbiz9 = await WolfStakingRewardsiiz3GA.getReward.call(uintT9995k8, {from: accounts[4]});
		const uint256arrayMQFtdUn = await WolfStakingRewardsiiz3GA.updateNotifyRewardAmount.call(uint3NeNWJ, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringipRIPzk = "7TQW1VZW0uEdNAivpeTg"
		const stringpyKiWZN = "XT0OnJg8rvmwad4YFr7lVF9LMy2PbsSb0baTo7dgFLfsbz9j"
		const uintUE38SM8 = BigInt("252")
		const WolfStakingRewardsKobCaMJ = await WolfStakingRewards.new(stringipRIPzk, stringpyKiWZN, uintUE38SM8, {from: accounts[1]});
		const uintqAV0Xi = BigInt("792")
		const uintCDMbn27 = BigInt("1313")
		const uintU4U3IaR = BigInt("1048")
		const uintBAKbb6Y = BigInt("711")
		const addressrBjJ340 = accounts[4]
		const uint256wPF3k5C = await WolfStakingRewardsKobCaMJ.withdraw.call(uintCDMbn27, uintqAV0Xi, {from: accounts[5]});
		const uint256S1kLEq = await WolfStakingRewardsKobCaMJ.rewardPerToken.call(uintU4U3IaR, {from: accounts[4]});
		const uint256NSR5oUI = await WolfStakingRewardsKobCaMJ.balanceOfPerPool.call(addressrBjJ340, uintBAKbb6Y, {from: accounts[2]});
		await WolfStakingRewardsKobCaMJ.nonReentrant.call({from: accounts[2]});
		await WolfStakingRewardsKobCaMJ.onlyOwner.call({from: accounts[2]});
		const uint8jkhA3DI = await WolfStakingRewardsKobCaMJ.decimals.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMsAL3MJ = "OSDEreq33VWvyBVCVKfxcNY2CbliWGLe2i4dVqFDfWnfdPU1gEICMD9VGLzmvcgZnoT3tQX8DcajZ1N2ckMsLdPU41YcJ"
		const stringPbs8IsX = "g6oyBNFglrhxDEKVLuxt6L"
		const uintpjJlSMu = BigInt("145")
		const WolfStakingRewardsxHgxPx6 = await WolfStakingRewards.new(stringMsAL3MJ, stringPbs8IsX, uintpjJlSMu, {from: accounts[1]});
		const uinttWMvkRG = BigInt("682")
		const uintigj0Aei = BigInt("1207")
		const uinteczB19I = BigInt("1507")
		const uinton3bNMq = BigInt("737")
		const uintfrOh9hJ = BigInt("1124")
		const uint256arrayPRwtZZz = await WolfStakingRewardsxHgxPx6.updateNotifyRewardAmount.call(uinttWMvkRG, {from: accounts[1]});
		const uint8eOdWNRl = await WolfStakingRewardsxHgxPx6.decimals.call({from: accounts[4]});
		const uintUCvUQPD = await WolfStakingRewardsxHgxPx6.getReward.call(uintigj0Aei, {from: accounts[2]});
		const uint256QOgNWEU = await WolfStakingRewardsxHgxPx6.withdrawRemainingBalance.call(uinton3bNMq, uinteczB19I, {from: accounts[0]});
		const uint256arrayUc3qcow = await WolfStakingRewardsxHgxPx6.updateNotifyRewardAmount.call(uintfrOh9hJ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZKZTNhc = "iS3XUQGQciSuySoywRqxvqdXjGCnregwOX2b8k"
		const stringomWxXSr = "j"
		const uintuAi9UxB = BigInt("20")
		const WolfStakingRewardsOfeDpmE = await WolfStakingRewards.new(stringZKZTNhc, stringomWxXSr, uintuAi9UxB, {from: "0x0000000000000000000000000000000000000001"});
		const uintrZguf8p = BigInt("304")
		const uintW1i4QwM = BigInt("2027")
		const uintMFJ5TRQ = BigInt("1746")
		const uint8C8Dg5aB = await WolfStakingRewardsOfeDpmE.decimals.call({from: accounts[4]});
		await WolfStakingRewardsOfeDpmE.onlyOwner.call({from: accounts[2]});
		const uint8uGVlGyo = await WolfStakingRewardsOfeDpmE.decimals.call({from: accounts[0]});
		const uint256Lb1lpAM = await WolfStakingRewardsOfeDpmE.totalSupplyPerPool.call(uintrZguf8p, {from: accounts[4]});
		const uint256Zf4sEZc = await WolfStakingRewardsOfeDpmE.getRewardForDuration.call(uintW1i4QwM, {from: accounts[2]});
		const uintVeBMQSD = await WolfStakingRewardsOfeDpmE.getReward.call(uintMFJ5TRQ, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBJvjy5C = "gaBrW18p4Vnux7JkW49qMn3jsixvmUBASJkz8FSy4mWXZmxiBN9wz3J4ddeb1Wj2QVa9xOl6JImRr7EUOhtFqVEuTDmM"
		const stringOgiYKFz = "1Dez2tEt"
		const uintZ8RfVVu = BigInt("51")
		const WolfStakingRewardspw3ahZ = await WolfStakingRewards.new(stringBJvjy5C, stringOgiYKFz, uintZ8RfVVu, {from: accounts[3]});
		const uintyriT5b = BigInt("1197")
		const uintuwQ5LDe = BigInt("1937")
		const uintb1Li1VN = BigInt("1929")
		const uintB0QU6CK = BigInt("481")
		const uintNFcSHJh = BigInt("632")
		const uintXxWwVxQ = BigInt("1203")
		const uint256yovEooL = await WolfStakingRewardspw3ahZ.getRewardForDuration.call(uintyriT5b, {from: accounts[1]});
		const uint256fItjBYY = await WolfStakingRewardspw3ahZ.withdraw.call(uintb1Li1VN, uintuwQ5LDe, {from: accounts[4]});
		const uint256h53L4hn = await WolfStakingRewardspw3ahZ.getRewardForDuration.call(uintB0QU6CK, {from: accounts[3]});
		const uint256JtWowzB = await WolfStakingRewardspw3ahZ.lastTimeRewardApplicable.call(uintNFcSHJh, {from: accounts[4]});
		const uint256pnQb0Oy = await WolfStakingRewardspw3ahZ.totalSupplyPerPool.call(uintXxWwVxQ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWIPKphZ = "wbaoNUdFi1OptWXkpu2xWTqdS8ThAKO1jxo1hJnCxoUgLEVFRlevzktGU36kC9AsXpz3HgKRH8cuXUfYMDYts9W"
		const stringWGgKO3q = "8OhoNRAUyhFTFGc9x4pSonYVZuSbUQo4Vip6BA89xSW4euCX"
		const uinti7efsjh = BigInt("28")
		const WolfStakingRewardsPexgfBS = await WolfStakingRewards.new(stringWIPKphZ, stringWGgKO3q, uinti7efsjh, {from: accounts[5]});
		const uintkQKhsbB = BigInt("1706")
		const uint8gPEBpDj = await WolfStakingRewardsPexgfBS.decimals.call({from: accounts[1]});
		const uint256wu9sZmK = await WolfStakingRewardsPexgfBS.lastTimeRewardApplicable.call(uintkQKhsbB, {from: accounts[1]});
		const stringUeMJvGE = await WolfStakingRewardsPexgfBS.symbol.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMfRGOJn = "OlbJ2Yi8sKTx8RdmtgiGGxatqKd7ETA8gPWkHWzto2gD7X7GdYjJZrruEmgNq2EYpa4uPLImTAp2I8za3F2q"
		const stringpD3VgUx = "jucAYEMNVi3uy31LiRBDb6LMU7CtV6qDX9RytHLyibqQAqFbYnapsBqn0pocthxKtSZzgkqRmq07RrTaaFPWr"
		const uinthnx85Zx = BigInt("23")
		const WolfStakingRewardsG50ae3x = await WolfStakingRewards.new(stringMfRGOJn, stringpD3VgUx, uinthnx85Zx, {from: accounts[4]});
		const uintrQJ9dme = BigInt("260")
		const uint256clvmtrT = await WolfStakingRewardsG50ae3x.totalSupplyPerPool.call(uintrQJ9dme, {from: accounts[2]});
		await WolfStakingRewardsG50ae3x.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const string0LLm2f = "7DhrKVisd8KnvH6qTDX2N"
		const stringUL9nzgM = "hAtCmRGFRTY1qzRPGijSxstIYo7c4moUVKCIwZ6mUPZf9QxIUbHN2UqcKRCy8Ht4gwhF0dC9SKOotjfxeFGsIq"
		const uintbIR4d99 = BigInt("244")
		const WolfStakingRewardsLXp8B1I = await WolfStakingRewards.new(string0LLm2f, stringUL9nzgM, uintbIR4d99, {from: accounts[2]});
		const uint7wPQCw = BigInt("875")
		const uintVnWzK7 = await WolfStakingRewardsLXp8B1I.getReward.call(uint7wPQCw, {from: accounts[2]});
		await WolfStakingRewardsLXp8B1I.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNJIRjZ2 = "Ep"
		const stringVHerOi6 = "zoSUzfPbMyKq97Utf6ivDI8bQLEWM9N5YoYTRPkJr0fzSbKArj1PRCjJ"
		const uinttm4AjRL = BigInt("16")
		const WolfStakingRewardsPMstL4k = await WolfStakingRewards.new(stringNJIRjZ2, stringVHerOi6, uinttm4AjRL, {from: accounts[1]});
		const uintTUHEKJT = BigInt("204")
		const uintdVD8oLy = BigInt("1514")
		const uintoQMgy2B = BigInt("819")
		const addressjWJZye = accounts[5]
		await WolfStakingRewardsPMstL4k.nonReentrant.call({from: accounts[3]});
		const stringNj0bWiA = await WolfStakingRewardsPMstL4k.name.call({from: accounts[1]});
		const uint256array5iB4rO = await WolfStakingRewardsPMstL4k.updateNotifyRewardAmount.call(uintTUHEKJT, {from: accounts[2]});
		const uint256arrayQIUz49H = await WolfStakingRewardsPMstL4k.updateNotifyRewardAmount.call(uintdVD8oLy, {from: accounts[2]});
		const addressLmMt9Yp = await WolfStakingRewardsPMstL4k.updateReward.call(addressjWJZye, uintoQMgy2B, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKiZ1PDR = "EHojsth2ru00xZLBlnxcLPWTDnVfcSDa4ol3rk49KTlqS3TNnUCGVmrWjE0zdzDBxRvT8UaqnV3ARiXrB0dJSql"
		const stringEgDsiQe = ""
		const uintjapuPTS = BigInt("211")
		const WolfStakingRewardshM2XDga = await WolfStakingRewards.new(stringKiZ1PDR, stringEgDsiQe, uintjapuPTS, {from: accounts[4]});
		const uintdPR7kL6 = BigInt("545")
		const uintDK32FTB = BigInt("1696")
		const uintUxt1Ype = BigInt("873")
		const uintWNwBZQq = BigInt("118")
		const uintQnSVCf7 = BigInt("823")
		await WolfStakingRewardshM2XDga.nonReentrant.call({from: accounts[3]});
		await WolfStakingRewardshM2XDga.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256arrayPdcQE5D = await WolfStakingRewardshM2XDga.updateNotifyRewardAmount.call(uintdPR7kL6, {from: accounts[2]});
		const uintNdOOGDK = await WolfStakingRewardshM2XDga.getReward.call(uintDK32FTB, {from: accounts[4]});
		const uint256arrayqxvFWEn = await WolfStakingRewardshM2XDga.updateNotifyRewardAmount.call(uintUxt1Ype, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iUnsCmn = await WolfStakingRewardshM2XDga.withdraw.call(uintQnSVCf7, uintWNwBZQq, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressYcCgLe = accounts[1]
		const addressb8JqaJN = accounts[2]
		const addressBdfXndl = accounts[2]
		const WolfStakingRewardszFXg2d0 = await WolfStakingRewards.new(addressYcCgLe, addressb8JqaJN, addressBdfXndl, {from: accounts[5]});
		const uintAh7maI = BigInt("8")
		const uintnzhrbj = BigInt("618")
//		const uint256paN3Pzh = await WolfStakingRewardszFXg2d0.exit.call(uintAh7maI, {from: accounts[1]});
//		const uint256Yjirw3q = await WolfStakingRewardszFXg2d0.exit.call(uintnzhrbj, {from: accounts[4]});
//		const stringYAGNRJf = await WolfStakingRewardszFXg2d0.symbol.call({from: accounts[4]});

		await expect(WolfStakingRewardszFXg2d0.exit.call(uintAh7maI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringpNqBnV = "GtVD6xSbAcdh8Ouj8I5OICShFjuByxyiqwkUVzIimkl78bxdTDUutzQHHaUoNFW8IFf40G"
		const string96yDOh = "dBRzeDJVJ68U76cldIq9sIoJz8WAwzgPNaeJAN9BXQxxSiC9CtOdlcEU"
		const uintjwNm3ah = BigInt("54")
		const WolfStakingRewardsxbnvrCc = await WolfStakingRewards.new(stringpNqBnV, string96yDOh, uintjwNm3ah, {from: accounts[2]});
		const uintjsNymri = BigInt("1881")
		const uintBS2D1Yn = BigInt("835")
		const uintgvClkRc = BigInt("1146")
		const addressRl0WQzv = accounts[4]
		const uintmchZF9 = BigInt("1659")
		const addressin3cFn8 = accounts[5]
		const uint2562Oa1zA = await WolfStakingRewardsxbnvrCc.withdrawRemainingBalance.call(uintBS2D1Yn, uintjsNymri, {from: accounts[1]});
		const uint2563fNWEj = await WolfStakingRewardsxbnvrCc.earned.call(addressRl0WQzv, uintgvClkRc, {from: accounts[1]});
		const uint25616fBFw = await WolfStakingRewardsxbnvrCc.earned.call(addressin3cFn8, uintmchZF9, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringamWlEC3 = "X1nj6j3tH"
		const stringLOe9L3l = "rvu06pSc38x3vNm5o9Hu1XMXfCTpO7I9deW"
		const uintEbkjWfE = BigInt("11")
		const WolfStakingRewardsoXV9fr3 = await WolfStakingRewards.new(stringamWlEC3, stringLOe9L3l, uintEbkjWfE, {from: accounts[3]});
		const uintEN2kCtw = BigInt("308")
		const uintwScctYc = BigInt("319")
		const uintyWfB7ln = BigInt("790")
		const uintYN94lGO = BigInt("1744")
		const addressP5dZLCO = accounts[3]
		await WolfStakingRewardsoXV9fr3.onlyOwner.call({from: accounts[2]});
		const uint256G4bfCrI = await WolfStakingRewardsoXV9fr3.withdraw.call(uintwScctYc, uintEN2kCtw, {from: accounts[1]});
		const uint256arrayplwoNIa = await WolfStakingRewardsoXV9fr3.updateNotifyRewardAmount.call(uintyWfB7ln, {from: accounts[3]});
		const uint256ySmSuBW = await WolfStakingRewardsoXV9fr3.earned.call(addressP5dZLCO, uintYN94lGO, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLgKgDIu = "rBcJtwzcPRtjIGwHk5BBdyppMhCYfWJ55UItD4r29Qg"
		const stringOpgSltk = "VeI0MAUIYywjVi93L4qtes"
		const uintjJjPybi = BigInt("40")
		const WolfStakingRewardsDNWeuDS = await WolfStakingRewards.new(stringLgKgDIu, stringOpgSltk, uintjJjPybi, {from: accounts[1]});
		const uintWViY9Rm = BigInt("84")
		const uintkhMdZd = BigInt("1150")
		const uintoo2QHey = BigInt("1265")
		const uintJX8adMt = BigInt("124")
		const addressQa7wXw = accounts[1]
		const uint256yKjKko = await WolfStakingRewardsDNWeuDS.exit.call(uintWViY9Rm, {from: accounts[4]});
		const stringezMPDb = await WolfStakingRewardsDNWeuDS.symbol.call({from: accounts[1]});
		const uint256ziNaVJ = await WolfStakingRewardsDNWeuDS.withdrawRemainingBalance.call(uintoo2QHey, uintkhMdZd, {from: accounts[4]});
		const addressdTz7VLG = await WolfStakingRewardsDNWeuDS.updateReward.call(addressQa7wXw, uintJX8adMt, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHWntqxv = "yoVUgXr78kVI0xL6B6mWKI"
		const stringLH8sJdO = "r2fnG7YPErX25iyN4qt8Cvm6HXkEMsUNWifnI9iJoWaO3nZPDqD"
		const uintP8mB2vz = BigInt("255")
		const WolfStakingRewardsTvuHHfG = await WolfStakingRewards.new(stringHWntqxv, stringLH8sJdO, uintP8mB2vz, {from: accounts[1]});
		const uintOZ3UBjV = BigInt("1442")
		const uintmyk4ASs = BigInt("477")
		const uintpBP07WG = BigInt("128")
		const address09ahBn = accounts[1]
		const uintGx2QAfl = BigInt("206")
		const uintxOJDouv = BigInt("572")
		const uint256Si5t6BG = await WolfStakingRewardsTvuHHfG.withdraw.call(uintmyk4ASs, uintOZ3UBjV, {from: accounts[2]});
		const uint256mY9iqai = await WolfStakingRewardsTvuHHfG.balanceOfPerPool.call(address09ahBn, uintpBP07WG, {from: accounts[4]});
		const uint256JSslaUI = await WolfStakingRewardsTvuHHfG.stake.call(uintxOJDouv, uintGx2QAfl, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjqIwRNv = "jPsmPvs3spzUuGa6WhuRZMzxf8xkRDJhFPMU87sy4WqAXOkdbx890Tw5IHoXULWHWKFRzsTb"
		const stringVfKV1uJ = "WE3RRItcsk7xypJ9CxDx4aW6dyJYCt5tEzmK"
		const uintXWSj7Eo = BigInt("234")
		const WolfStakingRewardsek4ea2E = await WolfStakingRewards.new(stringjqIwRNv, stringVfKV1uJ, uintXWSj7Eo, {from: accounts[0]});
		const uinthDv8oxK = BigInt("842")
		const uintght1kE6 = BigInt("1079")
		const uintDKdrbYI = BigInt("1468")
		const uintqMHdXlW = await WolfStakingRewardsek4ea2E.getReward.call(uinthDv8oxK, {from: "0x0000000000000000000000000000000000000001"});
		const stringZIXPxwS = await WolfStakingRewardsek4ea2E.symbol.call({from: accounts[0]});
		await WolfStakingRewardsek4ea2E.onlyRewardsDistribution.call({from: accounts[1]});
		await WolfStakingRewardsek4ea2E.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256arraywHCCOT = await WolfStakingRewardsek4ea2E.updateNotifyRewardAmount.call(uintght1kE6, {from: accounts[1]});
		const uint256sICqD8 = await WolfStakingRewardsek4ea2E.totalSupplyPerPool.call(uintDKdrbYI, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPpErXXa = "1fw7fU3QyKE8hcAdCfuhJoDUc"
		const stringKyQ1DAf = "TmyvzjOAfDH1HX2pbUaKw"
		const uintN1VzQN8 = BigInt("166")
		const WolfStakingRewardsEt2jhRL = await WolfStakingRewards.new(stringPpErXXa, stringKyQ1DAf, uintN1VzQN8, {from: accounts[1]});
		const uintfMk3GSz = BigInt("1526")
		const uintnjb93Ft = BigInt("1519")
		const addressKmlTnBD = accounts[3]
		const uintmMUBp0a = BigInt("1926")
		const addresscIRlDi5 = accounts[3]
		const uintbJcgHfB = BigInt("1633")
		const uint256i3Zpcdl = await WolfStakingRewardsEt2jhRL.totalSupplyPerPool.call(uintfMk3GSz, {from: accounts[5]});
		const addressJIT2K0L = await WolfStakingRewardsEt2jhRL.updateReward.call(addressKmlTnBD, uintnjb93Ft, {from: accounts[0]});
		await WolfStakingRewardsEt2jhRL.onlyOwner.call({from: accounts[3]});
		const uint256vhI7EuQ = await WolfStakingRewardsEt2jhRL.balanceOfPerPool.call(addresscIRlDi5, uintmMUBp0a, {from: accounts[1]});
		await WolfStakingRewardsEt2jhRL.nonReentrant.call({from: accounts[4]});
		const uint256arraymoC1Rzn = await WolfStakingRewardsEt2jhRL.updateNotifyRewardAmount.call(uintbJcgHfB, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAScNFlX = "Kdk4OXoK1NDR1dRB6ixCICKYMENtqdalIVfjY9othd4pf9eQpm6Z"
		const stringU2NMjlH = "Spfr7ATYuRbSpBoL9GH"
		const uintKR5Pm0V = BigInt("27")
		const WolfStakingRewards8I3mXa = await WolfStakingRewards.new(stringAScNFlX, stringU2NMjlH, uintKR5Pm0V, {from: accounts[0]});
		const uintr8tKKQM = BigInt("673")
		const addresss0vx9FG = accounts[3]
		const uintAJhz8j = BigInt("528")
		const uint256ivJfehT = await WolfStakingRewards8I3mXa.earned.call(addresss0vx9FG, uintr8tKKQM, {from: accounts[3]});
		await WolfStakingRewards8I3mXa.onlyOwner.call({from: accounts[0]});
		const uint256xpyHF3f = await WolfStakingRewards8I3mXa.lastTimeRewardApplicable.call(uintAJhz8j, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoWHNn7 = "cYfQ9BLfg2D4Yi2BqAqPMOIKwLwvv4wsddBXHBEc6qnCmPyBe21BwkyuU6uK8u"
		const stringXFLLbW1 = "8oklX1lbEhL9s5qi1Trsj3g4yG2FFOurI37QaEpmqanFA8O"
		const uintqOjRkK = BigInt("61")
		const WolfStakingRewardstWRFZIX = await WolfStakingRewards.new(stringoWHNn7, stringXFLLbW1, uintqOjRkK, {from: accounts[2]});
		const uints0TXoZQ = BigInt("1205")
		const uintJaPBmA = BigInt("1629")
		const uinttPN6z8 = BigInt("2040")
		const uintOvnoDx = BigInt("1424")
		const uint256arrayEF7PbwG = await WolfStakingRewardstWRFZIX.updateNotifyRewardAmount.call(uints0TXoZQ, {from: accounts[0]});
		const uint256aFj7JYq = await WolfStakingRewardstWRFZIX.withdrawRemainingBalance.call(uinttPN6z8, uintJaPBmA, {from: accounts[3]});
		const uintgNDqVO = await WolfStakingRewardstWRFZIX.getReward.call(uintOvnoDx, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUzmFZqY = "Nl4usYfEisAikgcbd9BFIkpPnJY2GadoaThluxxx3QaucSOzWRGUdPpyNS9k"
		const stringXIt5x3 = "EnecaLi0QLDIQkvlQgG2TNblgbDNXRZN5Wsn3jVXS8yTIs5awKU2H5nj8plLMgJC8IrgcTEa14uaedQqy"
		const uintBVX94Jo = BigInt("13")
		const WolfStakingRewardsswexS5l = await WolfStakingRewards.new(stringUzmFZqY, stringXIt5x3, uintBVX94Jo, {from: accounts[0]});
		const uintQssd7nG = BigInt("173")
		const addressBIAFvVB = accounts[0]
		const uintlZG0FJl = BigInt("156")
		const addressMD6ZaT = accounts[2]
		const addressUgBi0rt = await WolfStakingRewardsswexS5l.updateReward.call(addressBIAFvVB, uintQssd7nG, {from: accounts[0]});
		await WolfStakingRewardsswexS5l.onlyRewardsDistribution.call({from: accounts[3]});
		await WolfStakingRewardsswexS5l.onlyRewardsDistribution.call({from: accounts[3]});
		const uint8FIUXsvz = await WolfStakingRewardsswexS5l.decimals.call({from: accounts[2]});
		const uint256gEjY54E = await WolfStakingRewardsswexS5l.earned.call(addressMD6ZaT, uintlZG0FJl, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIhrsLoP = "ERqzS4DxFSxyGkrslqenFHC9xWTXxdB8F8rgO0NDlLdACYwbhVDpn4elvMreC7vGnL7awXVvqSl2e56HT55Pq4ze7"
		const stringLKd82X6 = "6ADwR5XNarvFuNmxNLpenrgpotQJsFMrsmAL8o34JDk5Pqw01AcSqqJVc8WvhnOvI6mFV2eMOkBtdF"
		const uintaKqMvd = BigInt("255")
		const WolfStakingRewards3y0F0T = await WolfStakingRewards.new(stringIhrsLoP, stringLKd82X6, uintaKqMvd, {from: accounts[3]});
		const uintMtwZlzo = BigInt("1956")
		const uintUTpIicO = BigInt("234")
		await WolfStakingRewards3y0F0T.onlyOwner.call({from: accounts[3]});
		const uint256arrayApl7zd0 = await WolfStakingRewards3y0F0T.updateNotifyRewardAmount.call(uintMtwZlzo, {from: accounts[4]});
		await WolfStakingRewards3y0F0T.onlyRewardsDistribution.call({from: accounts[5]});
		const stringWzEifIZ = await WolfStakingRewards3y0F0T.name.call({from: accounts[2]});
		const uintYU0f5xp = await WolfStakingRewards3y0F0T.getReward.call(uintUTpIicO, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZ1Q0ZV3 = "pX9VptQnUkBRpHddy32jUx68fyiiXuBJHDWvZpVyBfF76QEn3sdRFbEgEEoQtE8K3OQuPY7"
		const stringP11WYAp = "KAdN3zoCSzAEPoU51tTLWo2XHf18N5tXI3kkKPuLjHLsHrndD1"
		const uintpAQ6jd0 = BigInt("216")
		const WolfStakingRewardsO5rj4zp = await WolfStakingRewards.new(stringZ1Q0ZV3, stringP11WYAp, uintpAQ6jd0, {from: accounts[5]});
		const uintQMkJSnz = BigInt("623")
		const uintgEiy3dp = BigInt("698")
		const uintXT6hHIz = BigInt("803")
		const uintBV5LDkb = BigInt("1137")
		const uintfeQ3Ck5 = BigInt("829")
		const uintrdDTBNL = BigInt("169")
		const uintxc6abze = await WolfStakingRewardsO5rj4zp.getReward.call(uintQMkJSnz, {from: accounts[2]});
		const uint256wqYUNWP = await WolfStakingRewardsO5rj4zp.rewardPerToken.call(uintgEiy3dp, {from: accounts[0]});
		const uint256Ej4u4zc = await WolfStakingRewardsO5rj4zp.stake.call(uintBV5LDkb, uintXT6hHIz, {from: accounts[4]});
		const uint256arraym2t7sW = await WolfStakingRewardsO5rj4zp.updateNotifyRewardAmount.call(uintfeQ3Ck5, {from: accounts[5]});
		const uint256kjpGw1X = await WolfStakingRewardsO5rj4zp.rewardPerToken.call(uintrdDTBNL, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringO04qeai = "PTDptWW2SGa6130LZcTDJzKXmhe6VEEgtd6uI"
		const stringSA5EzOq = "rNKIPa4aKoKnwslGcFlFf38BgQEkJAKvnwscE2xHXDmXXquz4PKN"
		const uintzW2MMEj = BigInt("172")
		const WolfStakingRewardsLE9pWm = await WolfStakingRewards.new(stringO04qeai, stringSA5EzOq, uintzW2MMEj, {from: accounts[2]});
		const uintuEWOVC2 = BigInt("642")
		const uintZoTlCnb = BigInt("931")
		const uintYs2njbm = BigInt("1956")
		const uinthLg5Ug4 = BigInt("2028")
		const uint256KHM9zF = await WolfStakingRewardsLE9pWm.withdrawRemainingBalance.call(uintZoTlCnb, uintuEWOVC2, {from: "0x0000000000000000000000000000000000000001"});
		const uintNZfgxhD = await WolfStakingRewardsLE9pWm.getReward.call(uintYs2njbm, {from: accounts[1]});
		const uint256JOrFR5 = await WolfStakingRewardsLE9pWm.rewardPerToken.call(uinthLg5Ug4, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtGmGIMI = "988OYyer5Er9zQwhM2ioRPoVYGMyvL2T2zCONu4TmyPsb4"
		const string5u60P5 = "AHUGzIIULlpvczdaAxvQY6XM2xVJSe0idOLXjarBSidVYGmvBCjWvBHBz1N9ldl1uznWU5256S4QI4wGLTTxPCJbClgVzg3fv2N"
		const uintDxtIoFp = BigInt("30")
		const WolfStakingRewardssMI7r5x = await WolfStakingRewards.new(stringtGmGIMI, string5u60P5, uintDxtIoFp, {from: accounts[1]});
		const uintdKzsLnO = BigInt("1501")
		const uintmoIjHV = BigInt("943")
		const uintOfp5B9D = BigInt("536")
		const uint256dq6kAn7 = await WolfStakingRewardssMI7r5x.lastTimeRewardApplicable.call(uintdKzsLnO, {from: accounts[0]});
		await WolfStakingRewardssMI7r5x.nonReentrant.call({from: accounts[4]});
		const uint256w31AQwS = await WolfStakingRewardssMI7r5x.withdraw.call(uintOfp5B9D, uintmoIjHV, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const string4e8zIZ = "SDZJwYSI8Y7qBZWMxtiSmNGAXMjrSwHV"
		const stringKfQMt4o = "KSozaHcXNdQ73GI53A8IkfTKv3Wp3MvIy9dczI41FCWZTgMDzB39q9Ct2HYKJAu3sCEkJyxNzznUmZcpW6kO"
		const uintKA2sLUC = BigInt("154")
		const WolfStakingRewardszAcwYOv = await WolfStakingRewards.new(string4e8zIZ, stringKfQMt4o, uintKA2sLUC, {from: accounts[5]});
		const uintampN7Z = BigInt("1969")
		const uintFfy8jUD = BigInt("40")
		const uintbdWhlc1 = BigInt("217")
		const uintmCETQn4 = BigInt("1879")
		const uintCoulyFv = BigInt("1222")
		const uint256tJd5Eg = await WolfStakingRewardszAcwYOv.stake.call(uintFfy8jUD, uintampN7Z, {from: accounts[4]});
		const uint256mY75OzI = await WolfStakingRewardszAcwYOv.exit.call(uintbdWhlc1, {from: accounts[2]});
		const uint256nUSFkKj = await WolfStakingRewardszAcwYOv.getRewardForDuration.call(uintmCETQn4, {from: accounts[4]});
		await WolfStakingRewardszAcwYOv.nonReentrant.call({from: accounts[1]});
		const uint256fxAiljl = await WolfStakingRewardszAcwYOv.lastTimeRewardApplicable.call(uintCoulyFv, {from: accounts[2]});
	});
})