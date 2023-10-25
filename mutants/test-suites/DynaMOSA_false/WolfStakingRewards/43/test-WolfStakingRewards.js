const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringgG1g1UL = "3jNdMfgY0LdS29WY9yzR97k8QaJlXF4oI"
		const stringjAHqXDa = "VJWMUxf6iASDihZqNcOH3Y9gas20idQpuctdCDPsG41ury1kB5hj6YEwRisJGSlyg2rMx"
		const uintWrWRVrx = BigInt("161")
		const WolfStakingRewardsRazt7i6 = await WolfStakingRewards.new(stringgG1g1UL, stringjAHqXDa, uintWrWRVrx, {from: accounts[3]});
		const uintjDeCmSY = BigInt("1904")
		const uintPbDaOdf = BigInt("678")
		const addressmigwGMn = accounts[4]
		const uintebGhjp = BigInt("40")
		const addressOibfWV5 = accounts[1]
		const uint256fg207lm = await WolfStakingRewardsRazt7i6.rewardPerToken.call(uintjDeCmSY, {from: accounts[4]});
		const addressjqtZjRQ = await WolfStakingRewardsRazt7i6.updateReward.call(addressmigwGMn, uintPbDaOdf, {from: accounts[2]});
		const uint256cT7guq9 = await WolfStakingRewardsRazt7i6.earned.call(addressOibfWV5, uintebGhjp, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaG2LvKb = "0KxidODI5DN39CWX34t5nAWrM"
		const stringTcGsiLb = "mqMJmGOI4yfPPQuIEnxcOo1Ie1i4BFUfWR3jL4up"
		const uintRmAeZrT = BigInt("8")
		const WolfStakingRewards5C4SXh = await WolfStakingRewards.new(stringaG2LvKb, stringTcGsiLb, uintRmAeZrT, {from: accounts[2]});
		const uintl7yUfhV = BigInt("916")
		const uint256PlzEBFL = await WolfStakingRewards5C4SXh.getRewardForDuration.call(uintl7yUfhV, {from: accounts[5]});
		await WolfStakingRewards5C4SXh.onlyRewardsDistribution.call({from: accounts[4]});
		await WolfStakingRewards5C4SXh.onlyOwner.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqp7H10 = "b95Erw6WnPExJQtG876IexW8iI63gYiyYops7YwUtijstD1sBj9ipf4xq3UjXNnzgx"
		const stringbE5wGL = "rFEJnkMfTlAPfVz3"
		const uintuUSIIqB = BigInt("89")
		const WolfStakingRewardsYqCjeE0 = await WolfStakingRewards.new(stringqp7H10, stringbE5wGL, uintuUSIIqB, {from: accounts[3]});
		const uintW3TRq8j = BigInt("1155")
		const addresshPHPW0 = accounts[4]
		const uintivtvdNa = BigInt("826")
		const addressLnI5SlJ = accounts[2]
		const uintvNYYBY = BigInt("380")
		const addresspySKrn = await WolfStakingRewardsYqCjeE0.updateReward.call(addresshPHPW0, uintW3TRq8j, {from: accounts[4]});
		const uint256lB320s6 = await WolfStakingRewardsYqCjeE0.balanceOfPerPool.call(addressLnI5SlJ, uintivtvdNa, {from: accounts[3]});
		const uinttnKBm8e = await WolfStakingRewardsYqCjeE0.getReward.call(uintvNYYBY, {from: accounts[3]});
		const uint8PKBY952 = await WolfStakingRewardsYqCjeE0.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWcCBTfy = "XbaLBo8g5Gb4Ch8xRCcURbf7TSesNhlxnbLBWsvvYmxWbwzO5cAD"
		const stringlizOLc6 = "oa4pPAA4J2djbOunR5dfecqVqVK1nMYoqJHPjellLdLcpaOfDNSLUnxB1RR0fEViGvTeqQg96c1m7b9lpMlQ4dNQvb61uBj"
		const uintTRYIPsR = BigInt("3")
		const WolfStakingRewardsC8I5Dp = await WolfStakingRewards.new(stringWcCBTfy, stringlizOLc6, uintTRYIPsR, {from: accounts[4]});
		const uintT3rZVVt = BigInt("35")
		const addressq8dXPQn = accounts[3]
		const uintsFyBQeA = BigInt("1055")
		const uintnEjubFs = BigInt("1731")
		const uintbBgeZef = BigInt("1407")
		const uintIY7Nnxa = BigInt("216")
		const uintrlVJTVD = BigInt("1481")
		const addresseWq4qp = accounts[4]
		const uintfIRRA7N = BigInt("507")
		const uint256CqF4GGO = await WolfStakingRewardsC8I5Dp.earned.call(addressq8dXPQn, uintT3rZVVt, {from: accounts[2]});
		const uint256L8t7YyR = await WolfStakingRewardsC8I5Dp.withdrawRemainingBalance.call(uintnEjubFs, uintsFyBQeA, {from: accounts[4]});
		const uint256ujIOH9b = await WolfStakingRewardsC8I5Dp.stake.call(uintIY7Nnxa, uintbBgeZef, {from: accounts[5]});
		const uint256DptTwZ1 = await WolfStakingRewardsC8I5Dp.earned.call(addresseWq4qp, uintrlVJTVD, {from: accounts[0]});
		const uint256aFvwQ3 = await WolfStakingRewardsC8I5Dp.lastTimeRewardApplicable.call(uintfIRRA7N, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressSVauRQ = accounts[3]
		const addressuiQMKor = accounts[5]
		const addressb28jHBt = accounts[3]
		const WolfStakingRewardsZZyXr3o = await WolfStakingRewards.new(addressSVauRQ, addressuiQMKor, addressb28jHBt, {from: accounts[1]});
		const uintIUMV3Z = BigInt("252")
		const addressn4uvhDi = accounts[4]
		const uintNzHlrfE = BigInt("1576")
		const uintHRNzIc = BigInt("1078")
		const uint256XEhSuAt = await WolfStakingRewardsZZyXr3o.balanceOfPerPool.call(addressn4uvhDi, uintIUMV3Z, {from: accounts[5]});
//		await WolfStakingRewardsZZyXr3o.nonReentrant.call({from: accounts[0]});
//		const uint256arrayPfSR3O = await WolfStakingRewardsZZyXr3o.updateNotifyRewardAmount.call(uintNzHlrfE, {from: accounts[1]});
//		const uinty3MtXj3 = await WolfStakingRewardsZZyXr3o.getReward.call(uintHRNzIc, {from: accounts[1]});
//		await WolfStakingRewardsZZyXr3o.onlyRewardsDistribution.call({from: accounts[0]});

		assert.equal(uint256XEhSuAt, BigInt("0"))
		await expect(WolfStakingRewardsZZyXr3o.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressMR0uAAq = accounts[2]
		const addressuaCpJPS = accounts[1]
		const addresstFRN4oD = accounts[4]
		const WolfStakingRewardsBVq834S = await WolfStakingRewards.new(addressMR0uAAq, addressuaCpJPS, addresstFRN4oD, {from: accounts[0]});
		const uintWOUYhxV = BigInt("1352")
		const uintuSkEuNM = BigInt("872")
		const uintqzzex3C = BigInt("415")
		const addressznh52CD = accounts[3]
		const uintTlTc91Q = BigInt("128")
		const addressw1VVZhI = accounts[0]
		const uintsYl1sI = BigInt("723")
//		const uint256JC8BpwA = await WolfStakingRewardsBVq834S.withdraw.call(uintuSkEuNM, uintWOUYhxV, {from: "0x0000000000000000000000000000000000000001"});
//		const addressC6oINcm = await WolfStakingRewardsBVq834S.updateReward.call(addressznh52CD, uintqzzex3C, {from: accounts[2]});
//		const addressvVgo4dS = await WolfStakingRewardsBVq834S.updateReward.call(addressw1VVZhI, uintTlTc91Q, {from: accounts[1]});
//		const uint256MsDGybG = await WolfStakingRewardsBVq834S.getRewardForDuration.call(uintsYl1sI, {from: accounts[3]});

		await expect(WolfStakingRewardsBVq834S.withdraw.call(uintuSkEuNM, uintWOUYhxV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringHiESii = "VFDiqbMDo2EycWtLuoreX0HeHXFvkT3BZttCtuAwUnn5jSAP6cUU8Q4Q9bGsK73JCoReVFt3S32cPYWErHPk9O8kaoGOAjGdoNO"
		const stringWqRlpcY = "fHXWpfKz2Kcaz51SXVO9ctzqdLe5Tp4MWsiO753wwJbj4NYU6y4k1"
		const uintKd3DnzO = BigInt("173")
		const WolfStakingRewardsHg0T3u3 = await WolfStakingRewards.new(stringHiESii, stringWqRlpcY, uintKd3DnzO, {from: "0x0000000000000000000000000000000000000001"});
		const uintC9FF8at = BigInt("1485")
		const uintGhqdJ3k = BigInt("835")
		const uintqHxktqY = BigInt("805")
		await WolfStakingRewardsHg0T3u3.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256PsMsqF6 = await WolfStakingRewardsHg0T3u3.exit.call(uintC9FF8at, {from: accounts[4]});
		const uint256arraygXrTvWU = await WolfStakingRewardsHg0T3u3.updateNotifyRewardAmount.call(uintGhqdJ3k, {from: "0x0000000000000000000000000000000000000001"});
		const uint256utbLiUs = await WolfStakingRewardsHg0T3u3.exit.call(uintqHxktqY, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTtxO58q = "b9EI5BlRaLolWilPOtcmSxwEXswJv3Uh5fNGJHNYNYd5DF84boWgMTDhp5Nkge14NqcxpMzROOvnWgs7"
		const stringczn4K4s = "KgXDVamRWwKLneoJAFDbocTAD9YqabXcSByGActL"
		const uintxOUJ82P = BigInt("211")
		const WolfStakingRewardsTfMcKuw = await WolfStakingRewards.new(stringTtxO58q, stringczn4K4s, uintxOUJ82P, {from: accounts[0]});
		const uintoX8Jcx3 = BigInt("1458")
		const addressWrhkkRW = accounts[4]
		const uintusAqaXg = BigInt("2035")
		const uintupIhrFv = BigInt("276")
		const uint23f1FF = BigInt("1175")
		const addressoo8peng = accounts[1]
		const uintvzvt6jD = BigInt("1998")
		const uintQS4qQxS = BigInt("1781")
		const uintMPTvoPj = BigInt("1029")
		const uint256PLJlJPy = await WolfStakingRewardsTfMcKuw.earned.call(addressWrhkkRW, uintoX8Jcx3, {from: accounts[0]});
		const uint256fTBnzNM = await WolfStakingRewardsTfMcKuw.withdrawRemainingBalance.call(uintupIhrFv, uintusAqaXg, {from: accounts[4]});
		const uint256eiUGEwE = await WolfStakingRewardsTfMcKuw.balanceOfPerPool.call(addressoo8peng, uint23f1FF, {from: accounts[2]});
		const uint256sgR9FBZ = await WolfStakingRewardsTfMcKuw.withdrawRemainingBalance.call(uintQS4qQxS, uintvzvt6jD, {from: accounts[0]});
		const uint256UJWjRCf = await WolfStakingRewardsTfMcKuw.exit.call(uintMPTvoPj, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const address9GueBn = accounts[3]
		const addressFuuomZd = accounts[2]
		const addresszcn2lHb = accounts[0]
		const WolfStakingRewardse9SEG4U = await WolfStakingRewards.new(address9GueBn, addressFuuomZd, addresszcn2lHb, {from: accounts[2]});
		const uintJ0U6dP0 = BigInt("1567")
		const uintZoHhKCn = BigInt("1803")
		const uintImvwRH = BigInt("419")
		const uintg60w0C2 = BigInt("541")
		const uintAoLJZG = BigInt("1602")
		const addressQ0Ov94W = accounts[4]
		const uint256My1gUnt = await WolfStakingRewardse9SEG4U.rewardPerToken.call(uintJ0U6dP0, {from: accounts[2]});
//		const uint256VXljIU3 = await WolfStakingRewardse9SEG4U.withdrawRemainingBalance.call(uintImvwRH, uintZoHhKCn, {from: accounts[4]});
//		const uint256dmPLpv0 = await WolfStakingRewardse9SEG4U.lastTimeRewardApplicable.call(uintg60w0C2, {from: accounts[3]});
//		const uint256uc5ARn0 = await WolfStakingRewardse9SEG4U.balanceOfPerPool.call(addressQ0Ov94W, uintAoLJZG, {from: accounts[0]});

		assert.equal(uint256My1gUnt, BigInt("0"))
		await expect(WolfStakingRewardse9SEG4U.withdrawRemainingBalance.call(uintImvwRH, uintZoHhKCn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringOyuCDu0 = "1QNV3tY1wm7zTSEo"
		const stringr84UBBl = "ayC89yOsGekYbOEx3h4yW7VsEybEjl"
		const uintJHVTkRQ = BigInt("232")
		const WolfStakingRewardsgG6iWiD = await WolfStakingRewards.new(stringOyuCDu0, stringr84UBBl, uintJHVTkRQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintUMCISin = BigInt("1912")
		const uintYklNOoN = BigInt("232")
		const addressCDl8xNX = accounts[5]
		const uintOuinIeE = BigInt("779")
		const addressPXL20Kx = "0x0000000000000000000000000000000000000001"
		const uintF45sYB = BigInt("112")
		const uint256QnjXWRn = await WolfStakingRewardsgG6iWiD.getRewardForDuration.call(uintUMCISin, {from: accounts[2]});
		const uint256S58CiA4 = await WolfStakingRewardsgG6iWiD.balanceOfPerPool.call(addressCDl8xNX, uintYklNOoN, {from: accounts[0]});
		const addressh86SOeS = await WolfStakingRewardsgG6iWiD.updateReward.call(addressPXL20Kx, uintOuinIeE, {from: accounts[0]});
		await WolfStakingRewardsgG6iWiD.onlyRewardsDistribution.call({from: accounts[4]});
		const uintSsao3nE = await WolfStakingRewardsgG6iWiD.getReward.call(uintF45sYB, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressIr3hH3l = accounts[3]
		const addressfS95Mh7 = accounts[2]
		const addressiI61Atv = accounts[0]
		const WolfStakingRewardse9SEG4U = await WolfStakingRewards.new(addressIr3hH3l, addressfS95Mh7, addressiI61Atv, {from: accounts[2]});
		const uintHNxONFy = BigInt("1567")
		const uint7oqhv0 = BigInt("1822")
		const uintVyTpAqm = BigInt("1824")
		const uintRbWuGn = BigInt("419")
		const uintIwExo14 = BigInt("541")
		const uintFy0twkp = BigInt("1602")
		const addressU9jP123 = accounts[5]
		const uintII0Cnmc = BigInt("1191")
		const addressBs3g1uo = accounts[5]
		const uint256My1gUnt = await WolfStakingRewardse9SEG4U.rewardPerToken.call(uintHNxONFy, {from: accounts[2]});
		const uint256isS6sL = await WolfStakingRewardse9SEG4U.totalSupplyPerPool.call(uint7oqhv0, {from: accounts[0]});
//		const uint256VXljIU3 = await WolfStakingRewardse9SEG4U.withdrawRemainingBalance.call(uintRbWuGn, uintVyTpAqm, {from: accounts[4]});
//		const uint256dmPLpv0 = await WolfStakingRewardse9SEG4U.lastTimeRewardApplicable.call(uintIwExo14, {from: accounts[3]});
//		const uint256uc5ARn0 = await WolfStakingRewardse9SEG4U.balanceOfPerPool.call(addressU9jP123, uintFy0twkp, {from: accounts[0]});
//		const uint256kfzWTgp = await WolfStakingRewardse9SEG4U.earned.call(addressBs3g1uo, uintII0Cnmc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256My1gUnt, BigInt("0"))
		assert.equal(uint256isS6sL, BigInt("0"))
		await expect(WolfStakingRewardse9SEG4U.withdrawRemainingBalance.call(uintRbWuGn, uintVyTpAqm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringZxx0eU = "9RnsIyESONQeJ2UHFE9"
		const stringp9w04uD = "JD2Q3QtewOn7vkySF7dR6i1uIeSrAmJuNf6dlmAVi8B"
		const uintd8QggNH = BigInt("55")
		const WolfStakingRewardso3YFFq = await WolfStakingRewards.new(stringZxx0eU, stringp9w04uD, uintd8QggNH, {from: accounts[1]});
		const uintkw7Pcs1 = BigInt("1706")
		const addresscXn9EI5 = accounts[0]
		const uintaXb2Bg = BigInt("1895")
		const uintrmxM3Mp = BigInt("1351")
		const addresssIirqgO = await WolfStakingRewardso3YFFq.updateReward.call(addresscXn9EI5, uintkw7Pcs1, {from: accounts[1]});
		await WolfStakingRewardso3YFFq.onlyOwner.call({from: accounts[0]});
		const stringZIQPV1J = await WolfStakingRewardso3YFFq.symbol.call({from: accounts[0]});
		const uint256dKVIJiA = await WolfStakingRewardso3YFFq.withdraw.call(uintrmxM3Mp, uintaXb2Bg, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressWNiGOx = accounts[3]
		const addressjH5XGRT = accounts[2]
		const addressp52Z7O7 = accounts[0]
		const WolfStakingRewardse9SEG4U = await WolfStakingRewards.new(addressWNiGOx, addressjH5XGRT, addressp52Z7O7, {from: accounts[2]});
		const uint93r8q8 = BigInt("1560")
		const uinttZDBzBK = BigInt("1254")
		const uintSMmU4S = BigInt("1713")
		const uintuZbGc7i = BigInt("541")
		const uintxUAyWs0 = BigInt("1602")
		const addressjSClCex = accounts[4]
		const uint256My1gUnt = await WolfStakingRewardse9SEG4U.rewardPerToken.call(uint93r8q8, {from: accounts[2]});
//		const uint256lwsVOPY = await WolfStakingRewardse9SEG4U.stake.call(uintSMmU4S, uinttZDBzBK, {from: accounts[4]});
//		const uint256dmPLpv0 = await WolfStakingRewardse9SEG4U.lastTimeRewardApplicable.call(uintuZbGc7i, {from: accounts[3]});
//		const uint256uc5ARn0 = await WolfStakingRewardse9SEG4U.balanceOfPerPool.call(addressjSClCex, uintxUAyWs0, {from: accounts[0]});

		assert.equal(uint256My1gUnt, BigInt("0"))
		await expect(WolfStakingRewardse9SEG4U.stake.call(uintSMmU4S, uinttZDBzBK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressRyxp3H = accounts[4]
		const address50mQeQ = accounts[1]
		const addressKnmi9ct = accounts[1]
		const WolfStakingRewardsZfmLTpV = await WolfStakingRewards.new(addressRyxp3H, address50mQeQ, addressKnmi9ct, {from: "0x0000000000000000000000000000000000000001"});
		const uintjfZjjxG = BigInt("1604")
		await WolfStakingRewardsZfmLTpV.nonReentrant.call({from: accounts[4]});
		const uint256IouuTj = await WolfStakingRewardsZfmLTpV.getRewardForDuration.call(uintjfZjjxG, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressIKXXdq7 = accounts[2]
		const addressBsm4uLk = accounts[1]
		const addressvvzRBHu = accounts[4]
		const WolfStakingRewardsBVq834S = await WolfStakingRewards.new(addressIKXXdq7, addressBsm4uLk, addressvvzRBHu, {from: accounts[0]});
		const uintuIkBuIb = BigInt("641")
		const uintzXfwZ4a = BigInt("1352")
		const uintSBXibER = BigInt("872")
		const uintkyMqBYX = BigInt("1651")
		const uintftqonug = BigInt("41")
		const addressYPATK3b = accounts[3]
		const uintfqFy17X = BigInt("1886")
		const uintejIMux = BigInt("1464")
		const uintIehioo = BigInt("128")
		const addresso84yck1 = accounts[0]
//		const uint256vtpvbGS = await WolfStakingRewardsBVq834S.getRewardForDuration.call(uintuIkBuIb, {from: accounts[2]});
//		const uint256JC8BpwA = await WolfStakingRewardsBVq834S.withdraw.call(uintSBXibER, uintzXfwZ4a, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256BW03Pyr = await WolfStakingRewardsBVq834S.getRewardForDuration.call(uintkyMqBYX, {from: accounts[1]});
//		const addressC6oINcm = await WolfStakingRewardsBVq834S.updateReward.call(addressYPATK3b, uintftqonug, {from: accounts[2]});
//		const uint256jez3LlM = await WolfStakingRewardsBVq834S.withdrawRemainingBalance.call(uintejIMux, uintfqFy17X, {from: accounts[0]});
//		const addressvVgo4dS = await WolfStakingRewardsBVq834S.updateReward.call(addresso84yck1, uintIehioo, {from: accounts[1]});

		await expect(WolfStakingRewardsBVq834S.getRewardForDuration.call(uintuIkBuIb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringrdm3Vay = "jHF9Pc7itwXbKmiGCEOR4kTzgO9Qie4wep4w1BM1JIysTK2E3QtxVeSglGSyUtNQshMW36JjQ9PMXdQVKtWKPC"
		const stringzYEDXXY = "YplzOuQ3eD5SoAuXWNtpbpV6SOIKU26viA8"
		const uintj5C3kvm = BigInt("217")
		const WolfStakingRewardscbPKaRV = await WolfStakingRewards.new(stringrdm3Vay, stringzYEDXXY, uintj5C3kvm, {from: accounts[1]});
		const uintwi5yIh = BigInt("1500")
		const addresswfqnYx = accounts[3]
		const uintSN8lz5W = BigInt("680")
		const uintr8wam9 = BigInt("374")
		const uintYPM98Rk = BigInt("865")
		const uint16dinD = BigInt("1643")
		const uintDwaXSHo = BigInt("222")
		const uintOrvOpr5 = BigInt("75")
		const uinttcoG6ji = BigInt("1707")
		const uintZcVHJk = BigInt("438")
		const uint256EHSvO5D = await WolfStakingRewardscbPKaRV.earned.call(addresswfqnYx, uintwi5yIh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wzVCwLe = await WolfStakingRewardscbPKaRV.withdrawRemainingBalance.call(uintr8wam9, uintSN8lz5W, {from: accounts[0]});
		const uint256jg0tUFP = await WolfStakingRewardscbPKaRV.stake.call(uint16dinD, uintYPM98Rk, {from: accounts[4]});
		const stringD9wQeSu = await WolfStakingRewardscbPKaRV.name.call({from: accounts[4]});
		const uint2565wtaKb = await WolfStakingRewardscbPKaRV.withdraw.call(uintOrvOpr5, uintDwaXSHo, {from: accounts[1]});
		const uint256kte4bVo = await WolfStakingRewardscbPKaRV.withdraw.call(uintZcVHJk, uinttcoG6ji, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressRTcbxWI = accounts[3]
		const addressDoaFibg = accounts[4]
		const addressdCnmBf = accounts[4]
		const WolfStakingRewardsZQMRhQ = await WolfStakingRewards.new(addressRTcbxWI, addressDoaFibg, addressdCnmBf, {from: accounts[2]});
		const uintiOWgkN = BigInt("737")
		const uint5wH5Hh = BigInt("1260")
		const addressMrFZVdI = accounts[0]
		const uintIOMQWSN = BigInt("841")
		const uintyqRfGVE = BigInt("1200")
		const uint8i7rvL = BigInt("897")
//		const uint256arrayeoSbfkV = await WolfStakingRewardsZQMRhQ.updateNotifyRewardAmount.call(uintiOWgkN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256SdxroWS = await WolfStakingRewardsZQMRhQ.balanceOfPerPool.call(addressMrFZVdI, uint5wH5Hh, {from: accounts[4]});
//		const uint256Jmb6EvJ = await WolfStakingRewardsZQMRhQ.withdraw.call(uintyqRfGVE, uintIOMQWSN, {from: accounts[1]});
//		const uint256WBAJmHl = await WolfStakingRewardsZQMRhQ.rewardPerToken.call(uint8i7rvL, {from: accounts[3]});

		await expect(WolfStakingRewardsZQMRhQ.updateNotifyRewardAmount.call(uintiOWgkN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringGA2bGaY = "9Zk75P4Q1ieF"
		const stringaidFVB0 = "J3Qkz"
		const uintSo80ocW = BigInt("134")
		const WolfStakingRewardsa8uCZGb = await WolfStakingRewards.new(stringGA2bGaY, stringaidFVB0, uintSo80ocW, {from: accounts[5]});
		const uintI2VVoq = BigInt("171")
		const uintMa0CVR = BigInt("112")
		const uintUoIRxUh = BigInt("899")
		const uintwygVHjQ = BigInt("1340")
		const uintlgvThkQ = BigInt("1819")
		const uint256NT7rlRY = await WolfStakingRewardsa8uCZGb.getRewardForDuration.call(uintI2VVoq, {from: accounts[1]});
		const uint256HAuEgKJ = await WolfStakingRewardsa8uCZGb.getRewardForDuration.call(uintMa0CVR, {from: accounts[4]});
		const uintwEQMcV3 = await WolfStakingRewardsa8uCZGb.getReward.call(uintUoIRxUh, {from: accounts[4]});
		const uint256ERMFPhN = await WolfStakingRewardsa8uCZGb.exit.call(uintwygVHjQ, {from: accounts[2]});
		const stringNdDshax = await WolfStakingRewardsa8uCZGb.symbol.call({from: accounts[2]});
		const uintuyNY5zS = await WolfStakingRewardsa8uCZGb.getReward.call(uintlgvThkQ, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOMhdnJW = "uXeDo8sKmLbrBKQ3U3R74qItoI2psQsPR3PEI8FFmrotFEEqAbOu8YX6Bf8PjQ7Ek"
		const stringiMjonyV = "kDKPVTFklyWhy8IRntoxbRIoiViCE9MBbZTcmAmk09iQy5OA5q"
		const uintT6JwsMM = BigInt("110")
		const WolfStakingRewardsUvn3tFT = await WolfStakingRewards.new(stringOMhdnJW, stringiMjonyV, uintT6JwsMM, {from: accounts[0]});
		const uintSCBh9EX = BigInt("856")
		const addressIDjonb = "0x0000000000000000000000000000000000000001"
		const uintZnvZvr7 = BigInt("1614")
		const addressErz9ImV = accounts[4]
		const uintwiBcevw = BigInt("21")
		const addressQyP207e = accounts[2]
		const uintBDcNPun = BigInt("1774")
		const addressi5jeeQK = accounts[1]
		const addressCx4CfJZ = await WolfStakingRewardsUvn3tFT.updateReward.call(addressIDjonb, uintSCBh9EX, {from: accounts[0]});
		const uint256IwyIFkE = await WolfStakingRewardsUvn3tFT.earned.call(addressErz9ImV, uintZnvZvr7, {from: accounts[0]});
		const uint256mKNFiY3 = await WolfStakingRewardsUvn3tFT.earned.call(addressQyP207e, uintwiBcevw, {from: accounts[0]});
		const uint256BTEMJE = await WolfStakingRewardsUvn3tFT.earned.call(addressi5jeeQK, uintBDcNPun, {from: accounts[2]});
		const stringMZ7PJU = await WolfStakingRewardsUvn3tFT.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressQX6tZUR = accounts[3]
		const addresshCwviNk = accounts[2]
		const addressWZbmcms = accounts[0]
		const WolfStakingRewardse9SEG4U = await WolfStakingRewards.new(addressQX6tZUR, addresshCwviNk, addressWZbmcms, {from: accounts[2]});
		const uintXlVxvJI = BigInt("1560")
		const uintw1jkJRj = BigInt("1828")
		const uintjW7ONHZ = BigInt("31")
		const uintDjhUmR = BigInt("1237")
		const uintO4vgy7z = BigInt("1699")
		const uint256My1gUnt = await WolfStakingRewardse9SEG4U.rewardPerToken.call(uintXlVxvJI, {from: accounts[2]});
//		const uint256XFQtZ53 = await WolfStakingRewardse9SEG4U.exit.call(uintw1jkJRj, {from: accounts[3]});
//		const uint256eCMg4aT = await WolfStakingRewardse9SEG4U.getRewardForDuration.call(uintjW7ONHZ, {from: accounts[2]});
//		const uint256lwsVOPY = await WolfStakingRewardse9SEG4U.stake.call(uintO4vgy7z, uintDjhUmR, {from: accounts[4]});

		assert.equal(uint256My1gUnt, BigInt("0"))
		await expect(WolfStakingRewardse9SEG4U.exit.call(uintw1jkJRj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringNvi0Xxj = "UYd3ri5qq3yKx9BvJz3MjhEKSKhCwtEUo2uO88yWwT4ia5F1xV6zkOld"
		const stringArC7udx = "MBCUsIJnJYzhznt45neDgfSLwqUip5WlisQk3MBcyy5jcMN0dIeFGeMahknxq1W5BKtpeLRi9WAl"
		const uintwqPKWM = BigInt("159")
		const WolfStakingRewardsKJgppFH = await WolfStakingRewards.new(stringNvi0Xxj, stringArC7udx, uintwqPKWM, {from: "0x0000000000000000000000000000000000000001"});
		const uintFfrhBT6 = BigInt("1856")
		const uintK5qKqCP = BigInt("1344")
		const uintbvuPkZJ = BigInt("1668")
		const uintNlux9HP = BigInt("158")
		await WolfStakingRewardsKJgppFH.onlyOwner.call({from: accounts[3]});
		const uint256Svptzk = await WolfStakingRewardsKJgppFH.rewardPerToken.call(uintFfrhBT6, {from: accounts[4]});
		const stringhSN8v1d = await WolfStakingRewardsKJgppFH.symbol.call({from: accounts[5]});
		const uint256kkPTby = await WolfStakingRewardsKJgppFH.stake.call(uintbvuPkZJ, uintK5qKqCP, {from: accounts[2]});
		const uint256fGJvyn = await WolfStakingRewardsKJgppFH.rewardPerToken.call(uintNlux9HP, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeNar6P3 = "eBR"
		const stringNASf3HQ = "KHQ"
		const uintkYM9kl7 = BigInt("212")
		const WolfStakingRewardsxKugkso = await WolfStakingRewards.new(stringeNar6P3, stringNASf3HQ, uintkYM9kl7, {from: accounts[2]});
		const uintiBaUGPV = BigInt("1939")
		const addressmfLjL2h = accounts[1]
		const uintpB2Hkn = BigInt("448")
		const uintEZIdbSq = BigInt("1593")
		const addressefOvzv = await WolfStakingRewardsxKugkso.updateReward.call(addressmfLjL2h, uintiBaUGPV, {from: accounts[1]});
		const uint256mYl2YL = await WolfStakingRewardsxKugkso.withdrawRemainingBalance.call(uintEZIdbSq, uintpB2Hkn, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressa7ePPbG = accounts[3]
		const addressWBRlN9J = accounts[2]
		const addressd2z9M5Q = accounts[0]
		const WolfStakingRewardse9SEG4U = await WolfStakingRewards.new(addressa7ePPbG, addressWBRlN9J, addressd2z9M5Q, {from: accounts[2]});
		const uintVMy9W0u = BigInt("892")
		const uintN8YJAuT = BigInt("1560")
		const uintujwZ6F = BigInt("1637")
		const uintYN62qmC = BigInt("1239")
		const uintERGPfQF = BigInt("1713")
		const uintFTx0GA = BigInt("541")
		const uint256QXTRccy = await WolfStakingRewardse9SEG4U.rewardPerToken.call(uintVMy9W0u, {from: accounts[0]});
		const uint256My1gUnt = await WolfStakingRewardse9SEG4U.rewardPerToken.call(uintN8YJAuT, {from: accounts[2]});
		const uintRtnWkjI = await WolfStakingRewardse9SEG4U.getReward.call(uintujwZ6F, {from: accounts[4]});
//		const uint256lwsVOPY = await WolfStakingRewardse9SEG4U.stake.call(uintERGPfQF, uintYN62qmC, {from: accounts[4]});
//		const uint256dmPLpv0 = await WolfStakingRewardse9SEG4U.lastTimeRewardApplicable.call(uintFTx0GA, {from: accounts[3]});
//		await WolfStakingRewardse9SEG4U.nonReentrant.call({from: accounts[1]});

		assert.equal(uint256My1gUnt, BigInt("0"))
		assert.equal(uint256QXTRccy, BigInt("0"))
		await expect(WolfStakingRewardse9SEG4U.stake.call(uintERGPfQF, uintYN62qmC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringY2L742n = "M24o5aGoUaeqhlFduO7G1x3dWsqv"
		const stringAbkYeA = "DddNjBvjuUbo14Swmn"
		const uintZtaWLCL = BigInt("110")
		const WolfStakingRewardsHAuo22C = await WolfStakingRewards.new(stringY2L742n, stringAbkYeA, uintZtaWLCL, {from: accounts[5]});
		const uintqC0s7Fy = BigInt("1905")
		const uintas8yhf = BigInt("1830")
		const addressENUZ4IE = accounts[1]
		const uintkc9NeBz = BigInt("988")
		const uintF5LYgVb = BigInt("521")
		const address9aeUTT = accounts[4]
		const uintwQd6PDP = BigInt("1760")
		const uintPW1VTiO = BigInt("226")
		const uintULSDdC5 = await WolfStakingRewardsHAuo22C.getReward.call(uintqC0s7Fy, {from: accounts[5]});
		const addressVy013Ou = await WolfStakingRewardsHAuo22C.updateReward.call(addressENUZ4IE, uintas8yhf, {from: accounts[3]});
		const uint256OoL5W4R = await WolfStakingRewardsHAuo22C.exit.call(uintkc9NeBz, {from: accounts[0]});
		await WolfStakingRewardsHAuo22C.nonReentrant.call({from: accounts[4]});
		const uint256yd22Nu0 = await WolfStakingRewardsHAuo22C.earned.call(address9aeUTT, uintF5LYgVb, {from: accounts[5]});
		const uint256z4QBHsX = await WolfStakingRewardsHAuo22C.stake.call(uintPW1VTiO, uintwQd6PDP, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmsBIMMh = "0ML7HkYWUa2uwu3bJX35ALWk8z53f1zG"
		const stringEuHwSHx = "Aqrx0Lb84GaWi9tYXVfuZ0agTLRRAysIOoJ7p7HcyQLIFUzmy5ad7QpQuOmPcvXYyc"
		const uintgFiLRj9 = BigInt("238")
		const WolfStakingRewardsQe765D = await WolfStakingRewards.new(stringmsBIMMh, stringEuHwSHx, uintgFiLRj9, {from: accounts[4]});
		const uintLTXR6Nj = BigInt("1470")
		const addressLQN6ZO1 = accounts[1]
		const uintHDzbvoO = BigInt("1182")
		const addressCfhGCqg = accounts[2]
		const uint256RJgcSFU = await WolfStakingRewardsQe765D.earned.call(addressLQN6ZO1, uintLTXR6Nj, {from: accounts[0]});
		const uint256GKSKiwb = await WolfStakingRewardsQe765D.balanceOfPerPool.call(addressCfhGCqg, uintHDzbvoO, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpRir09Q = "EIQEWVAnOTK2j7xEl4SA1JNksAxA5D9K8nV"
		const stringA8zsv0g = "TIJduzHpKPOVVgUGfwJ4l24YukrS4LJUATOgWIRuuwcv3ibBDaL5i3Sgapa2dW"
		const uintvR8AEQU = BigInt("98")
		const WolfStakingRewardsvhCGs3S = await WolfStakingRewards.new(stringpRir09Q, stringA8zsv0g, uintvR8AEQU, {from: accounts[3]});
		const uintxFASQos = BigInt("356")
		const uintNkcPrvp = BigInt("147")
		const uintiF7vOV = BigInt("1925")
		const addressrqS9Mw = accounts[2]
		const uintpZnEfw4 = BigInt("1061")
		const uint8DDhCzdA = await WolfStakingRewardsvhCGs3S.decimals.call({from: accounts[0]});
		const uint8ZXT1OWY = await WolfStakingRewardsvhCGs3S.decimals.call({from: accounts[3]});
		const uint256EJ8DIIL = await WolfStakingRewardsvhCGs3S.withdrawRemainingBalance.call(uintNkcPrvp, uintxFASQos, {from: accounts[2]});
		const addresskWrE8ZZ = await WolfStakingRewardsvhCGs3S.updateReward.call(addressrqS9Mw, uintiF7vOV, {from: accounts[4]});
		const uint256Uh7tJy = await WolfStakingRewardsvhCGs3S.lastTimeRewardApplicable.call(uintpZnEfw4, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoQlJd5P = "75oQ2i1bmo8ZSoflGhKQEltt42gIDlzY"
		const stringrLUuyxn = "CPKX"
		const uintt8kw16h = BigInt("241")
		const WolfStakingRewardsvckvXCd = await WolfStakingRewards.new(stringoQlJd5P, stringrLUuyxn, uintt8kw16h, {from: accounts[2]});
		const uintCNu47yo = BigInt("1505")
		const uintKsuO9CR = BigInt("1463")
		const uintKsQbnxH = BigInt("1793")
		const uintwk2kyLT = BigInt("1501")
		const uintlWFPnRj = BigInt("564")
		const uintEg6Y69R = BigInt("1336")
		const addresspfjXUU7 = accounts[1]
		const uint256j7oel8A = await WolfStakingRewardsvckvXCd.exit.call(uintCNu47yo, {from: accounts[5]});
		const uint256yt8FZmE = await WolfStakingRewardsvckvXCd.exit.call(uintKsuO9CR, {from: accounts[4]});
		const uint256eHLKG7d = await WolfStakingRewardsvckvXCd.withdrawRemainingBalance.call(uintwk2kyLT, uintKsQbnxH, {from: accounts[3]});
		const uintFh1TTPn = await WolfStakingRewardsvckvXCd.getReward.call(uintlWFPnRj, {from: accounts[0]});
		const uint256TH8DLZK = await WolfStakingRewardsvckvXCd.balanceOfPerPool.call(addresspfjXUU7, uintEg6Y69R, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVxgOv9d = "CDrbbr7TW6k1scyqt5nUOhFIjONe9jaWutSDVg8V78ZYiMH0g6a3dUmLmJr6u5419irbrQJgT"
		const stringxwCHNzA = "XlYFJNMAaNgJ7yro9N7PD9DrQijDi7gIa1d74tOp4bO7Lm1x12ubn8LNzDw1NoPBKepxg8xoIkm1MP"
		const uintSUfjVA = BigInt("168")
		const WolfStakingRewardsOHwIfTD = await WolfStakingRewards.new(stringVxgOv9d, stringxwCHNzA, uintSUfjVA, {from: accounts[2]});
		const stringZ24wUrx = await WolfStakingRewardsOHwIfTD.symbol.call({from: accounts[3]});
		const uint8Lwdlqop = await WolfStakingRewardsOHwIfTD.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressyQ1pzp = accounts[3]
		const addressyB1BCl = accounts[2]
		const addressWRHYn15 = accounts[0]
		const WolfStakingRewardse9SEG4U = await WolfStakingRewards.new(addressyQ1pzp, addressyB1BCl, addressWRHYn15, {from: accounts[2]});
		const uintXbgMjep = BigInt("1701")
		const uintiSraaTb = BigInt("83")
		const uintCQ5XPxb = BigInt("1735")
		const uintlCOuAa1 = BigInt("1623")
//		const uint256VXUTzy = await WolfStakingRewardse9SEG4U.withdrawRemainingBalance.call(uintiSraaTb, uintXbgMjep, {from: accounts[2]});
//		const uint256arrayJu26kfT = await WolfStakingRewardse9SEG4U.updateNotifyRewardAmount.call(uintCQ5XPxb, {from: accounts[5]});
//		const uintVldGVw7 = await WolfStakingRewardse9SEG4U.getReward.call(uintlCOuAa1, {from: accounts[0]});

		await expect(WolfStakingRewardse9SEG4U.withdrawRemainingBalance.call(uintiSraaTb, uintXbgMjep, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJejFwCi = "q3Gy6Vx3pFEPmuKJ5bTZffnuVmOUzXh6chNvgki0inQc"
		const stringmQgRUTW = "wMbRS3n6ixLZzbSKDtxl8Hm7laYHzPqba"
		const uint4IKlqY = BigInt("53")
		const WolfStakingRewardsPVtQ6xD = await WolfStakingRewards.new(stringJejFwCi, stringmQgRUTW, uint4IKlqY, {from: accounts[3]});
		const uintG6cJzki = BigInt("1252")
		const uintgpaNMhu = BigInt("1270")
		const uintt2A6r8D = BigInt("839")
		const addressW9ccIsy = accounts[0]
		const uint2562ylmKv = await WolfStakingRewardsPVtQ6xD.withdrawRemainingBalance.call(uintgpaNMhu, uintG6cJzki, {from: accounts[5]});
		const uint256pXpv2qF = await WolfStakingRewardsPVtQ6xD.earned.call(addressW9ccIsy, uintt2A6r8D, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaaCyn2h = "8Y2y6zemBZoYxtGVaVzSynlihsPPrXEoJD5CG5ZhCb1IUcf1uuFmbQE4roBrIUfdxMbu"
		const stringJDcIQg3 = "gZ6ovSI4kTw7sUuUq8Qtf5iaLzOYyNgOwBSUX64aeacVbPCK"
		const uintmXj9wF4 = BigInt("51")
		const WolfStakingRewardsDfm2IHP = await WolfStakingRewards.new(stringaaCyn2h, stringJDcIQg3, uintmXj9wF4, {from: accounts[0]});
		const uintwU0uqhX = BigInt("724")
		const uintiWJAIIL = BigInt("1859")
		const addressE5ohqLm = accounts[4]
		const uintCExGQOV = BigInt("760")
		const uintNBNyrbL = BigInt("1390")
		const uintVsL9Lg3 = BigInt("1215")
		const uintujXAqOf = BigInt("2019")
		const uintJGsvHRV = BigInt("1010")
		const uint256fQCUDKU = await WolfStakingRewardsDfm2IHP.lastTimeRewardApplicable.call(uintwU0uqhX, {from: accounts[3]});
		const uint256Y2ryMNi = await WolfStakingRewardsDfm2IHP.balanceOfPerPool.call(addressE5ohqLm, uintiWJAIIL, {from: accounts[1]});
		const uint256UK2LPfw = await WolfStakingRewardsDfm2IHP.getRewardForDuration.call(uintCExGQOV, {from: accounts[3]});
		const uint256aW5JpRn = await WolfStakingRewardsDfm2IHP.withdrawRemainingBalance.call(uintVsL9Lg3, uintNBNyrbL, {from: accounts[4]});
		const uint256em9o1s = await WolfStakingRewardsDfm2IHP.stake.call(uintJGsvHRV, uintujXAqOf, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUu4Xuw7 = "NNAdj4IHwsOrhyBCexFqCJXtiyusNuTEQovA8gcHsJ2WxpbaTCE3qEdiEgFST8D5zpgOaPK"
		const string4w1VUM = "leVsFRV0wBz2diw5f3VY61AL8X1jI44NwyduuT6BpBTMV3JY"
		const uintMY9bukK = BigInt("246")
		const WolfStakingRewardsKucq7ew = await WolfStakingRewards.new(stringUu4Xuw7, string4w1VUM, uintMY9bukK, {from: accounts[4]});
		const uintVYzy4zO = BigInt("733")
		const uintPqBl5b = BigInt("778")
		const uintIaXZEC = BigInt("1638")
		const addressPfjznpb = accounts[5]
		const stringdxP3KIr = await WolfStakingRewardsKucq7ew.name.call({from: accounts[4]});
		const uint256tEVCfF4 = await WolfStakingRewardsKucq7ew.rewardPerToken.call(uintVYzy4zO, {from: accounts[1]});
		const uint256oA4j7jn = await WolfStakingRewardsKucq7ew.lastTimeRewardApplicable.call(uintPqBl5b, {from: accounts[5]});
		await WolfStakingRewardsKucq7ew.nonReentrant.call({from: accounts[0]});
		const uint256UY15hdr = await WolfStakingRewardsKucq7ew.earned.call(addressPfjznpb, uintIaXZEC, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlAx4G9k = "CkAbcPAiCTebVsm86RXMqzjwKddtzHxA7AvEDdLSVpE5znKCeMajOC59HF6LuLl0A6Pt8gDTiQLR8VO6717DONjTwOb7vk4t"
		const stringmII0aUb = "orCmitAFcWmSJsAYGFezsJ5pZ2gE6y97BAqVwd45esqLip4RlK456D6cQ8Tt5OrscFIGSU1a1l1ZozEgSj4w0ixCrmIS"
		const uintotkKOR0 = BigInt("125")
		const WolfStakingRewardsWBytfYQ = await WolfStakingRewards.new(stringlAx4G9k, stringmII0aUb, uintotkKOR0, {from: accounts[3]});
		const uintc5vFGQ8 = BigInt("781")
		const uintvAvf2Ja = BigInt("1324")
		const uintBNlPnBe = BigInt("852")
		const uintbVeE2SX = BigInt("672")
		const uintAReCcM6 = BigInt("814")
		const uintCQlndT4 = BigInt("1452")
		const uint256WEFAMq5 = await WolfStakingRewardsWBytfYQ.withdraw.call(uintvAvf2Ja, uintc5vFGQ8, {from: accounts[4]});
		const uint256k6JRbB4 = await WolfStakingRewardsWBytfYQ.rewardPerToken.call(uintBNlPnBe, {from: accounts[4]});
		const uint256Ah5kUEZ = await WolfStakingRewardsWBytfYQ.rewardPerToken.call(uintbVeE2SX, {from: accounts[0]});
		const stringdb5gTM1 = await WolfStakingRewardsWBytfYQ.name.call({from: accounts[1]});
		const uint256pyRjp35 = await WolfStakingRewardsWBytfYQ.getRewardForDuration.call(uintAReCcM6, {from: accounts[5]});
		const uint256eTFjPlG = await WolfStakingRewardsWBytfYQ.getRewardForDuration.call(uintCQlndT4, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaFxBbh1 = "rOXzxulAi5uyt3nYeo2H1vunQooGMbSA6oITphSO4jJmjFjaKYdkGt4IORRDwoTwNjKtxs8cswk35wgriSna"
		const stringxjBdvkJ = "8fvjyOFm4yN17CVajRSRFDItzqyPBGyZp1utm9RCuXFYil81bhuup2zVcRL3CZK5isUlC6"
		const uintv3T8pmX = BigInt("239")
		const WolfStakingRewardsl0O5e7P = await WolfStakingRewards.new(stringaFxBbh1, stringxjBdvkJ, uintv3T8pmX, {from: accounts[0]});
		const uintRFgEWhf = BigInt("1949")
		const uintPOYs3bT = BigInt("2027")
		const uintgwGvSx = BigInt("637")
		const uintAZLyuZR = BigInt("1442")
		const uint7KUhXE = BigInt("973")
		const uintw3qETFk = BigInt("1117")
		const uintjEJRVs6 = await WolfStakingRewardsl0O5e7P.getReward.call(uintRFgEWhf, {from: accounts[4]});
		const uint256WCZronw = await WolfStakingRewardsl0O5e7P.rewardPerToken.call(uintPOYs3bT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vcAJ1A = await WolfStakingRewardsl0O5e7P.withdrawRemainingBalance.call(uintAZLyuZR, uintgwGvSx, {from: accounts[0]});
		const uint256P38XReV = await WolfStakingRewardsl0O5e7P.totalSupplyPerPool.call(uint7KUhXE, {from: accounts[3]});
		const uint256T4qu3hF = await WolfStakingRewardsl0O5e7P.getRewardForDuration.call(uintw3qETFk, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeExF8Ol = "AfodATc4504WbL5ofBEhIpuAaxk5QDPxHHE"
		const string7uKHok = "Ux75YzupVm8l3ccP"
		const uintPPuPeoK = BigInt("213")
		const WolfStakingRewardsUIAmTA = await WolfStakingRewards.new(stringeExF8Ol, string7uKHok, uintPPuPeoK, {from: accounts[1]});
		const uintYapRN7G = BigInt("543")
		const uintHPVgvJ = BigInt("167")
		const uint4kObNb = BigInt("1870")
		const uintH4BRnx = BigInt("380")
		const uintffpxbl1 = BigInt("1358")
		const uintaJjXjEB = BigInt("648")
		const addressUjyrg8N = accounts[4]
		const uint256chOWVA = await WolfStakingRewardsUIAmTA.stake.call(uintHPVgvJ, uintYapRN7G, {from: accounts[1]});
		const uintvZd5APG = await WolfStakingRewardsUIAmTA.getReward.call(uint4kObNb, {from: accounts[1]});
		const stringTaYVflL = await WolfStakingRewardsUIAmTA.symbol.call({from: accounts[3]});
		const uint256JTykS0w = await WolfStakingRewardsUIAmTA.lastTimeRewardApplicable.call(uintH4BRnx, {from: accounts[0]});
		const uint256uozzlOk = await WolfStakingRewardsUIAmTA.exit.call(uintffpxbl1, {from: accounts[3]});
		const uint256h5FVLKU = await WolfStakingRewardsUIAmTA.earned.call(addressUjyrg8N, uintaJjXjEB, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringN939gkk = "2"
		const stringyEi9oV8 = "Nj4pn8Cu9jMOAybczQBkLAXcuc71wAEusNW9trL7kU6rVUAItpTHfk0t7cTUzKDhE2NSbm8"
		const uintIpHG3n = BigInt("233")
		const WolfStakingRewardseqamuam = await WolfStakingRewards.new(stringN939gkk, stringyEi9oV8, uintIpHG3n, {from: accounts[2]});
		const uintIdjGCYB = BigInt("931")
		const uintdXrSzN = BigInt("1561")
		const uintE8iJCO6 = BigInt("1937")
		const uintwHdiB3 = BigInt("965")
		const addressNN4CBIv = "0x0000000000000000000000000000000000000001"
		const uintGpCPCP = BigInt("675")
		const uintwu4fCBh = BigInt("915")
		const uintEpSiGDS = BigInt("1045")
		const uint256S11ydBp = await WolfStakingRewardseqamuam.withdraw.call(uintdXrSzN, uintIdjGCYB, {from: accounts[2]});
		const stringkeG6stC = await WolfStakingRewardseqamuam.symbol.call({from: accounts[4]});
		const uint256YsmXcCW = await WolfStakingRewardseqamuam.getRewardForDuration.call(uintE8iJCO6, {from: accounts[3]});
		const uint256qS2B4H8 = await WolfStakingRewardseqamuam.balanceOfPerPool.call(addressNN4CBIv, uintwHdiB3, {from: accounts[0]});
		const uint256Daj4RFe = await WolfStakingRewardseqamuam.stake.call(uintwu4fCBh, uintGpCPCP, {from: accounts[2]});
		const uint256J7e9NA7 = await WolfStakingRewardseqamuam.lastTimeRewardApplicable.call(uintEpSiGDS, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbToePSs = "v9eWQT62oxIPRnPCtBiUJcdUGm9fWj99snMCj"
		const stringGbx1X38 = "jbo5ISIC42ia4K0omOqCBFJ8SsCHN7fRvYsXHAuWWok9vcnUlLb5pj83lOEaO9ySAWe1v2wKD4bulCPjden49FAVK"
		const uinthgM1UzH = BigInt("247")
		const WolfStakingRewardsiXjJkuy = await WolfStakingRewards.new(stringbToePSs, stringGbx1X38, uinthgM1UzH, {from: "0x0000000000000000000000000000000000000001"});
		const uintcqkrwJ = BigInt("232")
		const uintHzsn65 = BigInt("555")
		const uintuYe4jB0 = BigInt("1397")
		const uintVKu5pFL = BigInt("40")
		const uint256B5v8i8b = await WolfStakingRewardsiXjJkuy.withdrawRemainingBalance.call(uintHzsn65, uintcqkrwJ, {from: accounts[1]});
		const uint256ngbfvO = await WolfStakingRewardsiXjJkuy.rewardPerToken.call(uintuYe4jB0, {from: accounts[1]});
		const uint256AuIssuC = await WolfStakingRewardsiXjJkuy.totalSupplyPerPool.call(uintVKu5pFL, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUMZp1yh = "HR3emXpu"
		const stringsFk7NsZ = "uqGHwY"
		const uintq3oJkk = BigInt("128")
		const WolfStakingRewardsbj8FyC8 = await WolfStakingRewards.new(stringUMZp1yh, stringsFk7NsZ, uintq3oJkk, {from: accounts[4]});
		const uintmLOnjEe = BigInt("1361")
		const uintRbTsKQ1 = BigInt("1516")
		const uintASzX67m = BigInt("1800")
		const uintFoHDi02 = BigInt("142")
		const addressFWhj8CR = accounts[4]
		const uint256NUXBZ8 = await WolfStakingRewardsbj8FyC8.totalSupplyPerPool.call(uintmLOnjEe, {from: accounts[2]});
		const uintgqvLqps = await WolfStakingRewardsbj8FyC8.getReward.call(uintRbTsKQ1, {from: accounts[0]});
		const uint256Oq56bbB = await WolfStakingRewardsbj8FyC8.rewardPerToken.call(uintASzX67m, {from: accounts[5]});
		const uint256ak6v8qw = await WolfStakingRewardsbj8FyC8.balanceOfPerPool.call(addressFWhj8CR, uintFoHDi02, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYSfYHZT = "8Tnb4y5r84EREGK1l6e"
		const stringcDrJMhB = "GUEKFluuixDWHcoWrbiSA1vdBtxGUJT8dTCwkcRlXW2jk9TelEC"
		const uintvjQCdly = BigInt("15")
		const WolfStakingRewardswlPwznq = await WolfStakingRewards.new(stringYSfYHZT, stringcDrJMhB, uintvjQCdly, {from: accounts[0]});
		const uintW6BvPmt = BigInt("1146")
		const addressyxFFkZd = accounts[1]
		const uintcEgWI1c = BigInt("299")
		const uintyMVF6OY = BigInt("414")
		const uintBRV9hOK = BigInt("1374")
		const uint256FJa6E0o = await WolfStakingRewardswlPwznq.balanceOfPerPool.call(addressyxFFkZd, uintW6BvPmt, {from: accounts[2]});
		const uint256Vlo4JFO = await WolfStakingRewardswlPwznq.exit.call(uintcEgWI1c, {from: accounts[0]});
		const uint256cbA185N = await WolfStakingRewardswlPwznq.rewardPerToken.call(uintyMVF6OY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256M30YxYz = await WolfStakingRewardswlPwznq.rewardPerToken.call(uintBRV9hOK, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const string70FcAu = "9tG9lIFWKGBVtjewa6C3WCxU"
		const stringsI2kxOw = "aDk8LhxVXo7uGIywoFPqmWqlhm8hsMs6tnK2UPmgnwaGygoteC0ah8Gbx8iZuSZL8eTzB90tTM6e2mqXzX8TQznacn"
		const uintO6O0ntQ = BigInt("246")
		const WolfStakingRewardskJ9oiHg = await WolfStakingRewards.new(string70FcAu, stringsI2kxOw, uintO6O0ntQ, {from: accounts[4]});
		const uinttN6VJlD = BigInt("759")
		const uintbPQTXdz = BigInt("39")
		const uintks3yjEU = BigInt("541")
		const uintlkGNEJ = BigInt("1123")
		const uintxylYFui = BigInt("1906")
		const uint256Tovimf4 = await WolfStakingRewardskJ9oiHg.withdrawRemainingBalance.call(uintbPQTXdz, uinttN6VJlD, {from: accounts[3]});
		const uint256EdCzfTe = await WolfStakingRewardskJ9oiHg.withdrawRemainingBalance.call(uintlkGNEJ, uintks3yjEU, {from: accounts[2]});
		await WolfStakingRewardskJ9oiHg.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayzYhh5Zp = await WolfStakingRewardskJ9oiHg.updateNotifyRewardAmount.call(uintxylYFui, {from: accounts[2]});
		await WolfStakingRewardskJ9oiHg.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringii00zpy = "5KJZb4gztvsx4wOfWWcvz8vLXRjaed4JhoY9DQOrYqz9kW42jgEl9cPF4sxV6MGDDYUQPEq9vTRhmXseu6lPQ8QC1WunJnb5r"
		const stringzEZE4OQ = "nDqYXGwCVwhAzRInB1GIomOS5pU36QkQ8LgHvdxzvLfrvTBYMyY052GAorlSCp3QHfUlZnFwd79FnmNxYNEu5ucFWMrb3"
		const uintbdbJHQ = BigInt("52")
		const WolfStakingRewardsvYvRaGG = await WolfStakingRewards.new(stringii00zpy, stringzEZE4OQ, uintbdbJHQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintf2fU55N = BigInt("1941")
		const addressIjLt9yZ = accounts[2]
		const uintrFuI3U6 = BigInt("683")
		const uintzrm7K5L = BigInt("13")
		const uintVLDBs99 = BigInt("175")
		const uintM1RjanY = BigInt("1352")
		const uinthHs9RCv = BigInt("88")
		const uintggMCB0 = BigInt("1794")
		const addressCs3rFZp = await WolfStakingRewardsvYvRaGG.updateReward.call(addressIjLt9yZ, uintf2fU55N, {from: accounts[1]});
		const uint256Fijf2in = await WolfStakingRewardsvYvRaGG.withdrawRemainingBalance.call(uintzrm7K5L, uintrFuI3U6, {from: accounts[3]});
		const uint256O7QdDY6 = await WolfStakingRewardsvYvRaGG.withdraw.call(uintM1RjanY, uintVLDBs99, {from: accounts[5]});
		const uint256Yoalh41 = await WolfStakingRewardsvYvRaGG.getRewardForDuration.call(uinthHs9RCv, {from: accounts[1]});
		const uint256wzJ5JI7 = await WolfStakingRewardsvYvRaGG.totalSupplyPerPool.call(uintggMCB0, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringor1I5C = "ADg2xisBj2ONbDkcDSZcpKMGGPGaF299q1HlllD0JCqQXlp66ZO5yB"
		const stringmdPWbpO = "mygL8wjDmtcznq7kAhUsvVZRWMckq6E7t61ubRbFFcnGwFeV6fKpBgFweE6WtsWzf01d"
		const uintNi6az1F = BigInt("210")
		const WolfStakingRewardswyop7YF = await WolfStakingRewards.new(stringor1I5C, stringmdPWbpO, uintNi6az1F, {from: accounts[0]});
		const uintRBe3aDF = BigInt("951")
		const uintpjJG2K7 = BigInt("74")
		const uinteomt2zw = BigInt("1339")
		const uintjowp6S7 = BigInt("1689")
		const uint256uleuyP5 = await WolfStakingRewardswyop7YF.rewardPerToken.call(uintRBe3aDF, {from: accounts[2]});
		await WolfStakingRewardswyop7YF.nonReentrant.call({from: accounts[4]});
		await WolfStakingRewardswyop7YF.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HUPRGbF = await WolfStakingRewardswyop7YF.stake.call(uinteomt2zw, uintpjJG2K7, {from: accounts[2]});
		const uint256KElWwok = await WolfStakingRewardswyop7YF.rewardPerToken.call(uintjowp6S7, {from: accounts[2]});
		const stringjbhgw4S = await WolfStakingRewardswyop7YF.name.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjV35Fq5 = "KzE5l72vQzkqxNW3aB4u"
		const stringC8PyRTU = "BMLRKEOBSSdng2rW52m4jKTZGmKIn2cyxu0weLL5wlTnl0xuY7OiMV3gZG9xUGttcI1enYynxvbAU"
		const uintFXhqLR8 = BigInt("38")
		const WolfStakingRewardshdHO5FA = await WolfStakingRewards.new(stringjV35Fq5, stringC8PyRTU, uintFXhqLR8, {from: accounts[2]});
		const uinthqlXXkR = BigInt("1603")
		const addressH9TGWcy = accounts[0]
		const uintcKUX4B7 = BigInt("810")
		const uintDFDltK = BigInt("447")
		const addressJY9851d = await WolfStakingRewardshdHO5FA.updateReward.call(addressH9TGWcy, uinthqlXXkR, {from: accounts[3]});
		const uint256Heh3y5p = await WolfStakingRewardshdHO5FA.exit.call(uintcKUX4B7, {from: accounts[4]});
		const uint256LjeFexU = await WolfStakingRewardshdHO5FA.totalSupplyPerPool.call(uintDFDltK, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkkEfZpM = "l4oJskRMNzj9BYdEK6ye2IIW2HTPt5KVv5G7Rec"
		const stringtqFwuWi = "tZZ5MlbIy9lOwbnGBXi4NyfaSCoQVeOofIAxKZ"
		const uintG6cThv = BigInt("136")
		const WolfStakingRewardsfFpRoL = await WolfStakingRewards.new(stringkkEfZpM, stringtqFwuWi, uintG6cThv, {from: accounts[0]});
		const uintthR8q58 = BigInt("424")
		const uintmQLqxEo = BigInt("1859")
		const addresswffgfNC = accounts[0]
		const uint3C7lw5 = BigInt("45")
		const uintdrkRZfd = BigInt("1394")
		const uintSYZOcb = BigInt("379")
		const addressoj2d7oO = accounts[3]
		const uintqVPLHJ = BigInt("1471")
		const uintJvWzKD = BigInt("1695")
		const uint256HAEXbM2 = await WolfStakingRewardsfFpRoL.totalSupplyPerPool.call(uintthR8q58, {from: accounts[3]});
		const addresskLIBrS9 = await WolfStakingRewardsfFpRoL.updateReward.call(addresswffgfNC, uintmQLqxEo, {from: accounts[0]});
		const uint256oMvVYk5 = await WolfStakingRewardsfFpRoL.stake.call(uintdrkRZfd, uint3C7lw5, {from: accounts[2]});
		const uint256Ck4scT = await WolfStakingRewardsfFpRoL.earned.call(addressoj2d7oO, uintSYZOcb, {from: accounts[0]});
		await WolfStakingRewardsfFpRoL.onlyOwner.call({from: accounts[0]});
		const uint256YOn97mG = await WolfStakingRewardsfFpRoL.withdraw.call(uintJvWzKD, uintqVPLHJ, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnUJl7uT = "u7loPT1siP4piKMIPfGT0THuMcIrKKSGEPA8wh65hYWhny5OuWxuvNljZS2AcpF"
		const stringskHcWlH = "6X11KNMy"
		const uintU52RlQJ = BigInt("101")
		const WolfStakingRewardsHOO05k9 = await WolfStakingRewards.new(stringnUJl7uT, stringskHcWlH, uintU52RlQJ, {from: accounts[2]});
		const uintpehpY9z = BigInt("1713")
		const uintwNVnSN = BigInt("1389")
		const uintWRjBhHD = BigInt("674")
		const uintp1VSqr9 = BigInt("1055")
		const uintniuTkjA = BigInt("407")
		const uintrbnCQhE = BigInt("1142")
		const uint256arrayrgHU2t6 = await WolfStakingRewardsHOO05k9.updateNotifyRewardAmount.call(uintpehpY9z, {from: accounts[1]});
		const uintB8QZeP9 = await WolfStakingRewardsHOO05k9.getReward.call(uintwNVnSN, {from: accounts[5]});
		const uint256JePX4Uv = await WolfStakingRewardsHOO05k9.withdrawRemainingBalance.call(uintp1VSqr9, uintWRjBhHD, {from: accounts[3]});
		const uint256Tag2W2C = await WolfStakingRewardsHOO05k9.stake.call(uintrbnCQhE, uintniuTkjA, {from: accounts[3]});
		await WolfStakingRewardsHOO05k9.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringN4mGYmp = "tt4SmiSHXYHk8J5INgKyqvB2TIxNKzHQXOTvHmR9HMiKPPEYnxKMXlxsur1Ymt68J2t7HQrJ"
		const stringTqI6iBr = "4s4WVD5eqwhH"
		const uintOi2hIjG = BigInt("103")
		const WolfStakingRewardsOmdGPpf = await WolfStakingRewards.new(stringN4mGYmp, stringTqI6iBr, uintOi2hIjG, {from: accounts[2]});
		const uintlVVG9Gv = BigInt("1903")
		const uintu2gFtg0 = BigInt("1889")
		const uint256E4Sw4L = await WolfStakingRewardsOmdGPpf.totalSupplyPerPool.call(uintlVVG9Gv, {from: accounts[4]});
		const uint256arrayByD0v3e = await WolfStakingRewardsOmdGPpf.updateNotifyRewardAmount.call(uintu2gFtg0, {from: "0x0000000000000000000000000000000000000001"});
		const stringzViWYT = await WolfStakingRewardsOmdGPpf.symbol.call({from: accounts[3]});
		const stringnQDGvsh = await WolfStakingRewardsOmdGPpf.symbol.call({from: accounts[4]});
		await WolfStakingRewardsOmdGPpf.nonReentrant.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjMUF5Eq = "pg6qZC5adM2MsE2Ywl4Mc9GfKKkXvVlLRLiLckHYlxho4usTfGlGuzjiz4RVA"
		const stringRgGrUNj = "5mpkpZGke7t7N4gbAo4NVCFmxUcAyCil5oCmNfUAQRui33559SjL2fhXpFzeW6"
		const uintCaMd9Rx = BigInt("203")
		const WolfStakingRewardsWrlUeJ = await WolfStakingRewards.new(stringjMUF5Eq, stringRgGrUNj, uintCaMd9Rx, {from: accounts[0]});
		const uintUKc3QL = BigInt("952")
		const uintFjKzexM = BigInt("1637")
		const uintYzJ77dA = BigInt("859")
		const uint256QvTKrPX = await WolfStakingRewardsWrlUeJ.getRewardForDuration.call(uintUKc3QL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AHelexq = await WolfStakingRewardsWrlUeJ.withdrawRemainingBalance.call(uintYzJ77dA, uintFjKzexM, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQH8H484 = "SiL6GF21"
		const stringPcb7QR5 = "tyB73EMtdkoRLvQ5b0FAIKMHGH"
		const uintlXGi2Jz = BigInt("122")
		const WolfStakingRewardslZx46v = await WolfStakingRewards.new(stringQH8H484, stringPcb7QR5, uintlXGi2Jz, {from: accounts[3]});
		const uintQ1l0X9H = BigInt("1570")
		const uintqOJwxhT = BigInt("1530")
		const uintZouhPW = BigInt("802")
		const addressYK4JB0h = accounts[0]
		const uint256aaruSOx = await WolfStakingRewardslZx46v.withdrawRemainingBalance.call(uintqOJwxhT, uintQ1l0X9H, {from: "0x0000000000000000000000000000000000000001"});
		const uint8W28AebO = await WolfStakingRewardslZx46v.decimals.call({from: accounts[3]});
		const stringZ4MBcN = await WolfStakingRewardslZx46v.symbol.call({from: accounts[1]});
		const uint256p12mcSx = await WolfStakingRewardslZx46v.balanceOfPerPool.call(addressYK4JB0h, uintZouhPW, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRIou1SY = "DT5Y7RXBJeq9NwikQqyE4tXBAtsOrTGiS3azRCHVsm"
		const stringH2yxq71 = "6rTMtj73kPWuC"
		const uintXZtYbX7 = BigInt("178")
		const WolfStakingRewardsKAET8Tn = await WolfStakingRewards.new(stringRIou1SY, stringH2yxq71, uintXZtYbX7, {from: "0x0000000000000000000000000000000000000001"});
		const uint5SHHhl = BigInt("2044")
		const uint8RNNZm5 = await WolfStakingRewardsKAET8Tn.decimals.call({from: accounts[2]});
		const uint2568iIHLJ = await WolfStakingRewardsKAET8Tn.lastTimeRewardApplicable.call(uint5SHHhl, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwQxEYxy = "bnIts15YL6FR5hjGGcUJ9fnfg9KTzjKjpH8YObMqxV3m46nHt1vWPuYF0I5awtWNSzkrk2zpL1QfFSJX4G"
		const stringSxc6cyi = "p8lCCklw9ngkkVeSZYDiVjD8vE3LLCXBA"
		const uintgABDSNE = BigInt("52")
		const WolfStakingRewardsWsSsVRO = await WolfStakingRewards.new(stringwQxEYxy, stringSxc6cyi, uintgABDSNE, {from: accounts[0]});
		const uintUUlEdcd = BigInt("123")
		const uint8dyM3Z = BigInt("251")
		const uintBe3qo4A = BigInt("104")
		const uintFuCQ2A8 = BigInt("266")
		const uintGZJG0sW = BigInt("1087")
		const uint256pWG8Ddu = await WolfStakingRewardsWsSsVRO.totalSupplyPerPool.call(uintUUlEdcd, {from: accounts[2]});
		const uint256oYONZZ = await WolfStakingRewardsWsSsVRO.totalSupplyPerPool.call(uint8dyM3Z, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OzvNuW = await WolfStakingRewardsWsSsVRO.lastTimeRewardApplicable.call(uintBe3qo4A, {from: accounts[0]});
		const uint256Zq9uor9 = await WolfStakingRewardsWsSsVRO.totalSupplyPerPool.call(uintFuCQ2A8, {from: accounts[3]});
		const uint256a3zMPHU = await WolfStakingRewardsWsSsVRO.lastTimeRewardApplicable.call(uintGZJG0sW, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringB1ciY9 = "t"
		const stringiIFZknf = "qk8Pf2EEcRSvGpXePjeVxBfmwj7pCX5xbo48lHiqV9"
		const uintsY6105F = BigInt("113")
		const WolfStakingRewardsPpfs5mV = await WolfStakingRewards.new(stringB1ciY9, stringiIFZknf, uintsY6105F, {from: accounts[1]});
		const uintunEs1jr = BigInt("1300")
		const addressXiEDucp = accounts[1]
		const uintXi2w6q9 = BigInt("191")
		const uint4DsGMg = BigInt("1539")
		const uintKNCasWZ = BigInt("1667")
		const uintI3sniB1 = BigInt("956")
		await WolfStakingRewardsPpfs5mV.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EXcmmD3 = await WolfStakingRewardsPpfs5mV.balanceOfPerPool.call(addressXiEDucp, uintunEs1jr, {from: accounts[3]});
		const uint256uDu8nJe = await WolfStakingRewardsPpfs5mV.stake.call(uint4DsGMg, uintXi2w6q9, {from: accounts[0]});
		const uint256R6HrrXr = await WolfStakingRewardsPpfs5mV.withdrawRemainingBalance.call(uintI3sniB1, uintKNCasWZ, {from: accounts[1]});
	});
})