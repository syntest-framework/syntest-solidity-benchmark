const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringKwsxPPd = "hvMdgVNBfBjPVy8HT8jet2V6m8t6rVsP6bTlaSgkK1y"
		const stringL2pSiBF = "4WvzSTTbH"
		const uintmjvu6I = BigInt("153")
		const WolfStakingRewardsmrhCquz = await WolfStakingRewards.new(stringKwsxPPd, stringL2pSiBF, uintmjvu6I, {from: accounts[4]});
		const stringZ7QFnM = await WolfStakingRewardsmrhCquz.name.call({from: accounts[1]});
		const uint8UetNaAb = await WolfStakingRewardsmrhCquz.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressLoNd9Ua = accounts[2]
		const addressoehyQ0 = accounts[0]
		const addresstz4VT0X = accounts[0]
		const WolfStakingRewardsXYmKMJ9 = await WolfStakingRewards.new(addressLoNd9Ua, addressoehyQ0, addresstz4VT0X, {from: accounts[0]});
		const uintglM8FpT = BigInt("214")
		const stringscdTxIG = await WolfStakingRewardsXYmKMJ9.symbol.call({from: accounts[0]});
		const uint256arrayTUdrN4X = await WolfStakingRewardsXYmKMJ9.updateNotifyRewardAmount.call(uintglM8FpT, {from: accounts[0]});

		await expect(WolfStakingRewardsXYmKMJ9.symbol.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressY1xmyj = accounts[2]
		const addressvoT73QF = accounts[2]
		const addressJ1f8kS6 = accounts[4]
		const WolfStakingRewardsgGTLte5 = await WolfStakingRewards.new(addressY1xmyj, addressvoT73QF, addressJ1f8kS6, {from: accounts[4]});
		const uintcmoMppF = BigInt("26")
		const uintMuCCY6k = BigInt("115")
		const addressDjEgv4 = "0x0000000000000000000000000000000000000001"
		const uintI9UIilG = BigInt("355")
		const uintEaovWvU = await WolfStakingRewardsgGTLte5.getReward.call(uintcmoMppF, {from: accounts[3]});
		const uint8Osy6rxT = await WolfStakingRewardsgGTLte5.decimals.call({from: accounts[3]});
		const uint256DN2KWGP = await WolfStakingRewardsgGTLte5.earned.call(addressDjEgv4, uintMuCCY6k, {from: accounts[2]});
		const uint256XQug9yr = await WolfStakingRewardsgGTLte5.totalSupplyPerPool.call(uintI9UIilG, {from: accounts[3]});

		await expect(WolfStakingRewardsgGTLte5.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringGn6DBwG = "an1uOdqbRhQwhc6nOyd11IeOZgKmuHEWufxA1r6aA"
		const stringTlkGU2 = "eU98WyHnuj3B2jvMoXE6p4FnwlFiBJqOAHCw2KSACzEowDWJz1xNrNqDqbIJTW"
		const uintxST5cHN = BigInt("244")
		const WolfStakingRewardsVotTOd7 = await WolfStakingRewards.new(stringGn6DBwG, stringTlkGU2, uintxST5cHN, {from: accounts[2]});
		const uintKp9w2D3 = BigInt("529")
		const uintKtiWFoq = BigInt("677")
		const uintWuH9WKK = BigInt("341")
		const uint256btpKXXA = await WolfStakingRewardsVotTOd7.getRewardForDuration.call(uintKp9w2D3, {from: accounts[3]});
		const uint256VGwPfk8 = await WolfStakingRewardsVotTOd7.getRewardForDuration.call(uintKtiWFoq, {from: accounts[2]});
		const uint256arraySEvSlW3 = await WolfStakingRewardsVotTOd7.updateNotifyRewardAmount.call(uintWuH9WKK, {from: accounts[2]});
		await WolfStakingRewardsVotTOd7.onlyOwner.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressULFVAf = accounts[4]
		const addresse4ZMl3 = "0x0000000000000000000000000000000000000001"
		const addressRrJnpIg = accounts[4]
		const WolfStakingRewardsVVe6x5o = await WolfStakingRewards.new(addressULFVAf, addresse4ZMl3, addressRrJnpIg, {from: accounts[0]});
		const uintPGCdJQ1 = BigInt("1147")
		const uintqo9l38F = BigInt("621")
		const uinttcuoxtq = BigInt("713")
		const uintiiP24M4 = BigInt("113")
		const uintcm8c4dA = BigInt("483")
		const uint256uzoUlre = await WolfStakingRewardsVVe6x5o.stake.call(uintqo9l38F, uintPGCdJQ1, {from: accounts[4]});
		const uint256o4uplVV = await WolfStakingRewardsVVe6x5o.rewardPerToken.call(uinttcuoxtq, {from: accounts[3]});
		const uint256B8t4gmb = await WolfStakingRewardsVVe6x5o.lastTimeRewardApplicable.call(uintiiP24M4, {from: accounts[3]});
		const uint256gRWoqJ = await WolfStakingRewardsVVe6x5o.rewardPerToken.call(uintcm8c4dA, {from: accounts[4]});
		const stringseiUeSt = await WolfStakingRewardsVVe6x5o.name.call({from: accounts[1]});

		await expect(WolfStakingRewardsVVe6x5o.stake.call(uintqo9l38F, uintPGCdJQ1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresswTSa1Tk = accounts[2]
		const addressbFTq8G = accounts[1]
		const addresswgZJ07 = accounts[3]
		const WolfStakingRewardsmhvxLSw = await WolfStakingRewards.new(addresswTSa1Tk, addressbFTq8G, addresswgZJ07, {from: accounts[4]});
		const uintcufD6Fb = BigInt("420")
		const uintd6jfTz7 = BigInt("1322")
		const uintGWNeyj = BigInt("1312")
		const uintEksMC5E = BigInt("611")
		const uinttUokNFc = BigInt("1309")
		const uint256lizBiR2 = await WolfStakingRewardsmhvxLSw.getRewardForDuration.call(uintcufD6Fb, {from: accounts[3]});
		const uint256oCaoPdp = await WolfStakingRewardsmhvxLSw.stake.call(uintGWNeyj, uintd6jfTz7, {from: accounts[2]});
		const uint256q2WQFfx = await WolfStakingRewardsmhvxLSw.exit.call(uintEksMC5E, {from: accounts[2]});
		const uint256IzAS4ff = await WolfStakingRewardsmhvxLSw.rewardPerToken.call(uinttUokNFc, {from: accounts[0]});

		await expect(WolfStakingRewardsmhvxLSw.getRewardForDuration.call(uintcufD6Fb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringYYtODPg = "HYlcHowMdNQ9LbRUd5CsO4EVEKR99DjcyoAya1bk5cyAr7JqyMUsE"
		const stringhY3Yl2g = "nYjSluIdlsV2aaVZYuIU"
		const uintNdH7vS = BigInt("32")
		const WolfStakingRewardsISDfCQ = await WolfStakingRewards.new(stringYYtODPg, stringhY3Yl2g, uintNdH7vS, {from: accounts[1]});
		const uintJnsguut = BigInt("16")
		const uintaUK1Jsu = BigInt("345")
		const uintyo0eOsp = await WolfStakingRewardsISDfCQ.getReward.call(uintJnsguut, {from: accounts[4]});
		const uint256g1i0n6B = await WolfStakingRewardsISDfCQ.exit.call(uintaUK1Jsu, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuGZ3lsg = "DWP2VFBsBnLSrMB8qmnWNyF8GkogOk7RGkA7yFN6IWKcqjxhfsgesbBs4CmRnP7vMBRqmIUK2jO1DDJKI3DGiEXgxDclxqyH"
		const stringSwrp1hz = "vHWQUcTh2TGGNyOBspErPKUKiu39Paf8PnWLX8OsqKMCow6PHgltilEaAWnElwmW0K0A"
		const uintkcvrUky = BigInt("230")
		const WolfStakingRewardsBgrStzp = await WolfStakingRewards.new(stringuGZ3lsg, stringSwrp1hz, uintkcvrUky, {from: accounts[0]});
		const stringdenDkVm = await WolfStakingRewardsBgrStzp.symbol.call({from: accounts[1]});
		await WolfStakingRewardsBgrStzp.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressF7RxZeN = accounts[2]
		const addressbc7xVO = accounts[4]
		const addressmvTSY9 = accounts[4]
		const WolfStakingRewardsstIF9PP = await WolfStakingRewards.new(addressF7RxZeN, addressbc7xVO, addressmvTSY9, {from: accounts[5]});
		const uintci8fRW9 = BigInt("1106")
		const uintKJIRR7 = BigInt("1464")
		const uintXvjNQJ = BigInt("2033")
		const uint256gkjrnQ = await WolfStakingRewardsstIF9PP.lastTimeRewardApplicable.call(uintci8fRW9, {from: accounts[1]});
		const uint256mit1OMk = await WolfStakingRewardsstIF9PP.exit.call(uintKJIRR7, {from: accounts[4]});
		const uintPYhLjHr = await WolfStakingRewardsstIF9PP.getReward.call(uintXvjNQJ, {from: accounts[3]});

		assert.equal(uint256gkjrnQ, BigInt("0"))
		await expect(WolfStakingRewardsstIF9PP.exit.call(uintKJIRR7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressFNBFPoD = accounts[2]
		const addressAq3dD3F = accounts[2]
		const addressyHyZqft = accounts[4]
		const WolfStakingRewardsgGTLte5 = await WolfStakingRewards.new(addressFNBFPoD, addressAq3dD3F, addressyHyZqft, {from: accounts[4]});
		const uintzYt14mv = BigInt("315")
		const addressbELzNuW = accounts[1]
		const uintFQCNt2P = BigInt("29")
		const uintluoOsZ = BigInt("115")
		const addressaI37P24 = "0x0000000000000000000000000000000000000001"
		const uint256WDujECl = await WolfStakingRewardsgGTLte5.balanceOfPerPool.call(addressbELzNuW, uintzYt14mv, {from: accounts[3]});
		const uintEaovWvU = await WolfStakingRewardsgGTLte5.getReward.call(uintFQCNt2P, {from: accounts[3]});
		const uint8Osy6rxT = await WolfStakingRewardsgGTLte5.decimals.call({from: accounts[3]});
		const uint256DN2KWGP = await WolfStakingRewardsgGTLte5.earned.call(addressaI37P24, uintluoOsZ, {from: accounts[2]});

		assert.equal(uint256WDujECl, BigInt("0"))
		await expect(WolfStakingRewardsgGTLte5.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressTgXftqT = accounts[2]
		const addressCloqQz8 = accounts[2]
		const addresscDYJDYw = accounts[4]
		const WolfStakingRewardsgGTLte5 = await WolfStakingRewards.new(addressTgXftqT, addressCloqQz8, addresscDYJDYw, {from: accounts[4]});
		const uintmhnMMb8 = BigInt("10")
		const uintlGZqCmC = BigInt("26")
		const uintog7R2Y1 = BigInt("115")
		const addressmIHTiBw = "0x0000000000000000000000000000000000000002"
		const uint256isHiznR = await WolfStakingRewardsgGTLte5.totalSupplyPerPool.call(uintmhnMMb8, {from: accounts[3]});
		const uintEaovWvU = await WolfStakingRewardsgGTLte5.getReward.call(uintlGZqCmC, {from: accounts[3]});
		const uint256DN2KWGP = await WolfStakingRewardsgGTLte5.earned.call(addressmIHTiBw, uintog7R2Y1, {from: accounts[2]});

		assert.equal(uint256DN2KWGP, BigInt("0"))
		assert.equal(uint256isHiznR, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addressNKt9yb5 = "0x0000000000000000000000000000000000000001"
		const addressxeBnQu0 = accounts[3]
		const addressO2OzIo1 = accounts[4]
		const WolfStakingRewardsFTkGKHF = await WolfStakingRewards.new(addressNKt9yb5, addressxeBnQu0, addressO2OzIo1, {from: accounts[3]});
		const uinthHKdPEL = BigInt("985")
		const uintYhhEaIY = BigInt("1220")
		const addressavLbeeF = accounts[1]
		const uint256arraybmRcr8F = await WolfStakingRewardsFTkGKHF.updateNotifyRewardAmount.call(uinthHKdPEL, {from: accounts[0]});
		const addresstzRKkNE = await WolfStakingRewardsFTkGKHF.updateReward.call(addressavLbeeF, uintYhhEaIY, {from: accounts[4]});

		await expect(WolfStakingRewardsFTkGKHF.updateNotifyRewardAmount.call(uinthHKdPEL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresszKwwt9p = accounts[2]
		const addressG604bOn = accounts[2]
		const addressCq08YQ2 = accounts[4]
		const WolfStakingRewardsgGTLte5 = await WolfStakingRewards.new(addresszKwwt9p, addressG604bOn, addressCq08YQ2, {from: accounts[4]});
		const uintt1Ze8un = BigInt("115")
		const addressJ4Fbpph = "0x0000000000000000000000000000000000000000"
		const uintNhY8tyG = BigInt("979")
		const uintaaOa3qo = BigInt("1969")
		const uintPevXuEG = BigInt("1985")
		const uintherk2KT = BigInt("1719")
		const addressVAVIVDn = accounts[1]
		const uint256DN2KWGP = await WolfStakingRewardsgGTLte5.earned.call(addressJ4Fbpph, uintt1Ze8un, {from: accounts[2]});
		const uint256f2GHoP = await WolfStakingRewardsgGTLte5.totalSupplyPerPool.call(uintNhY8tyG, {from: accounts[0]});
		const uint256Gfpd8cD = await WolfStakingRewardsgGTLte5.withdraw.call(uintPevXuEG, uintaaOa3qo, {from: accounts[2]});
		const uint256UEe6sUB = await WolfStakingRewardsgGTLte5.balanceOfPerPool.call(addressVAVIVDn, uintherk2KT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256DN2KWGP, BigInt("0"))
		assert.equal(uint256f2GHoP, BigInt("0"))
		await expect(WolfStakingRewardsgGTLte5.withdraw.call(uintPevXuEG, uintaaOa3qo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringNf41xRb = "3sPVBjPOxICRXMyFyNauCtUHYj7BfBFDbpU0w5qvSWbz8nqWi5AJrK0PRQfzBJ5CSlcu"
		const stringxTfsxsP = "kRR8mpXvvDNlL4jKtdupkJELIroX1Rx1VnRwDnbzeENudvjgETcLOLuOwgt2nBv7xT"
		const uintB3gNlrt = BigInt("33")
		const WolfStakingRewardsk0QR9dA = await WolfStakingRewards.new(stringNf41xRb, stringxTfsxsP, uintB3gNlrt, {from: accounts[2]});
		const uintzoYnyQ6 = BigInt("1380")
		const uintDwg274I = BigInt("1619")
		const uintfP47Oo = BigInt("206")
		const address1szRPb = accounts[2]
		const stringQioVLK3 = await WolfStakingRewardsk0QR9dA.symbol.call({from: accounts[1]});
		await WolfStakingRewardsk0QR9dA.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256arrayD0q6PRO = await WolfStakingRewardsk0QR9dA.updateNotifyRewardAmount.call(uintzoYnyQ6, {from: accounts[2]});
		const uintgSbVmp = await WolfStakingRewardsk0QR9dA.getReward.call(uintDwg274I, {from: accounts[5]});
		const uint2562zt4IH = await WolfStakingRewardsk0QR9dA.earned.call(address1szRPb, uintfP47Oo, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressfggOC1J = accounts[2]
		const addressz1VndX3 = accounts[2]
		const addressIlCuDQt = accounts[4]
		const WolfStakingRewardsgGTLte5 = await WolfStakingRewards.new(addressfggOC1J, addressz1VndX3, addressIlCuDQt, {from: accounts[4]});
		const uintHstU2m = BigInt("0")
		const uintyevZ42d = BigInt("1792")
		const uintTpSXOhD = BigInt("1776")
		const uintEaovWvU = await WolfStakingRewardsgGTLte5.getReward.call(uintHstU2m, {from: accounts[3]});
		const uint256VtNhOca = await WolfStakingRewardsgGTLte5.withdrawRemainingBalance.call(uintTpSXOhD, uintyevZ42d, {from: accounts[0]});

		await expect(WolfStakingRewardsgGTLte5.withdrawRemainingBalance.call(uintTpSXOhD, uintyevZ42d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringoDIMlel = "iOkcmcv"
		const stringLq6UaXj = "p2R61SaF80u4gJolmLzapWrFdbdi8KtUdxYcwqpKiWyVLas7TZTyw5iNMEaUCwpqkQ9GnKvFNyI4xid2jFlGH"
		const uintSZTLIL = BigInt("233")
		const WolfStakingRewardsT25JzA = await WolfStakingRewards.new(stringoDIMlel, stringLq6UaXj, uintSZTLIL, {from: accounts[0]});
		const uintaMBOGiN = BigInt("207")
		const uintykcRj6 = BigInt("1450")
		const uintHaQfyGn = BigInt("58")
		const uintfZ1NEsS = BigInt("852")
		const uintVOsTjGo = BigInt("805")
		const addresszLWpT1d = accounts[0]
		const uint256T1QAUaE = await WolfStakingRewardsT25JzA.withdrawRemainingBalance.call(uintykcRj6, uintaMBOGiN, {from: accounts[2]});
		const uint256qsHdmLX = await WolfStakingRewardsT25JzA.withdrawRemainingBalance.call(uintfZ1NEsS, uintHaQfyGn, {from: accounts[2]});
		await WolfStakingRewardsT25JzA.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256jD1XSIn = await WolfStakingRewardsT25JzA.balanceOfPerPool.call(addresszLWpT1d, uintVOsTjGo, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressvOkNObM = accounts[2]
		const addressCCRy3tC = accounts[2]
		const addressfvSL8gn = accounts[4]
		const WolfStakingRewardsgGTLte5 = await WolfStakingRewards.new(addressvOkNObM, addressCCRy3tC, addressfvSL8gn, {from: accounts[4]});
		const uintalWe5jP = BigInt("762")
		const uintXiDAj5k = BigInt("1257")
		const uintzVuOCBY = BigInt("115")
		const addressNMKE68I = "0x0000000000000000000000000000000000000001"
		const uintCzci6F6 = BigInt("583")
		const uintBHddew1 = BigInt("1167")
		const uint256bs4iyBW = await WolfStakingRewardsgGTLte5.withdrawRemainingBalance.call(uintXiDAj5k, uintalWe5jP, {from: accounts[4]});
		const uint256DN2KWGP = await WolfStakingRewardsgGTLte5.earned.call(addressNMKE68I, uintzVuOCBY, {from: accounts[2]});
		const uint256rgLzRkE = await WolfStakingRewardsgGTLte5.withdraw.call(uintBHddew1, uintCzci6F6, {from: accounts[2]});

		await expect(WolfStakingRewardsgGTLte5.withdrawRemainingBalance.call(uintXiDAj5k, uintalWe5jP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringfEJp8nL = "S36GALrrSY51046aoyAxIraWu6w57P6ORWAPbLitvnymkpK8T2lUmQuHAaFH"
		const stringFVe0a6U = "ztoir1kf8m1ExYbvohDST6S12syGOjBMFZgIYSNBsLdNHijG3mA74BSDYnGdp3yBX2VWkykMP"
		const uintv8HH0h = BigInt("88")
		const WolfStakingRewardsUDTTxyM = await WolfStakingRewards.new(stringfEJp8nL, stringFVe0a6U, uintv8HH0h, {from: accounts[1]});
		const uintyf7sWWM = BigInt("363")
		const uinthJtm5O6 = BigInt("203")
		const uint256x8hg1F = await WolfStakingRewardsUDTTxyM.lastTimeRewardApplicable.call(uintyf7sWWM, {from: accounts[4]});
		const uint256uijnDka = await WolfStakingRewardsUDTTxyM.rewardPerToken.call(uinthJtm5O6, {from: accounts[1]});
		const stringpu7WOcV = await WolfStakingRewardsUDTTxyM.name.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyjj36hF = "yp9NKfUHHNYwXlVW9mogy5ba4gJVgaNYCmkvyY5lr"
		const stringkQCzKkO = "yi"
		const uintpRriK4I = BigInt("248")
		const WolfStakingRewardswRf4k1T = await WolfStakingRewards.new(stringyjj36hF, stringkQCzKkO, uintpRriK4I, {from: accounts[5]});
		const uintnv0joS5 = BigInt("187")
		const uintKXe2FcX = BigInt("1909")
		const uintj5whPye = BigInt("1070")
		const uint8mGUTk79 = await WolfStakingRewardswRf4k1T.decimals.call({from: accounts[1]});
		const uint256fWsCVu = await WolfStakingRewardswRf4k1T.stake.call(uintKXe2FcX, uintnv0joS5, {from: accounts[3]});
		const uint256K2i263 = await WolfStakingRewardswRf4k1T.lastTimeRewardApplicable.call(uintj5whPye, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressVs4xtyb = accounts[5]
		const addresssp4xPq = accounts[3]
		const addressnY33Jc2 = accounts[3]
		const WolfStakingRewardsekuvVE0 = await WolfStakingRewards.new(addressVs4xtyb, addresssp4xPq, addressnY33Jc2, {from: "0x0000000000000000000000000000000000000001"});
		const uintDOvfPB2 = BigInt("1698")
		const uint7Q0Wlx = BigInt("1488")
		const uintVDON2cM = BigInt("1560")
		const uintpyLanJu = BigInt("1074")
		const uintUm6A8v1 = BigInt("1700")
		const uint256g17IvqY = await WolfStakingRewardsekuvVE0.withdrawRemainingBalance.call(uint7Q0Wlx, uintDOvfPB2, {from: accounts[1]});
		const uint256arrayY6jvNa8 = await WolfStakingRewardsekuvVE0.updateNotifyRewardAmount.call(uintVDON2cM, {from: accounts[3]});
		const uint256DjhUbAk = await WolfStakingRewardsekuvVE0.getRewardForDuration.call(uintpyLanJu, {from: accounts[1]});
		const uint256PmGhwcr = await WolfStakingRewardsekuvVE0.getRewardForDuration.call(uintUm6A8v1, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwtmPDaR = "wNo8MRcehzLsFO3O9BV6EjOm38ApvL4xL"
		const stringAAKS5Lc = "OUiucDOuuTiXMHGsHArcVIPAJ3y1aEdchkT3mop1vXGJ5YwpRnIJfIReY5JJrYZjROWdbKTmvkCkmGSGh"
		const uintoy0673F = BigInt("39")
		const WolfStakingRewardsMPtlV6c = await WolfStakingRewards.new(stringwtmPDaR, stringAAKS5Lc, uintoy0673F, {from: accounts[1]});
		const uintQpI1wXv = BigInt("1251")
		const uintnoKYHhs = BigInt("1875")
		const uintiT4hw1T = BigInt("386")
		const uinteOI8GRX = BigInt("1882")
		const uintUdY76ZS = BigInt("846")
		const addressTRB6ttP = accounts[3]
		const uint256arrayy0jEFTp = await WolfStakingRewardsMPtlV6c.updateNotifyRewardAmount.call(uintQpI1wXv, {from: accounts[0]});
		const uintRkcqhTx = await WolfStakingRewardsMPtlV6c.getReward.call(uintnoKYHhs, {from: accounts[1]});
		const uint256AlGrhPi = await WolfStakingRewardsMPtlV6c.exit.call(uintiT4hw1T, {from: accounts[4]});
		const uint256arrayqdPiP87 = await WolfStakingRewardsMPtlV6c.updateNotifyRewardAmount.call(uinteOI8GRX, {from: accounts[5]});
		const uint256IvnTZIg = await WolfStakingRewardsMPtlV6c.earned.call(addressTRB6ttP, uintUdY76ZS, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringi38JfeC = "GpcVv9nbVqZb6CqegpAaVdckwdpkwNJxbpaAvgZNyvlFuxVjheSzGD28"
		const stringKXiIOOE = "LFKrkh1Kupww1J3JDYy7mzWa4f5noFErycFWLFsQ2CQ3Vx0q6wolF6IOnmBljKfDI1AIEfj7FZlOOWQzwfQOOcaD"
		const uintcO6goOR = BigInt("98")
		const WolfStakingRewardseS1lHsx = await WolfStakingRewards.new(stringi38JfeC, stringKXiIOOE, uintcO6goOR, {from: accounts[3]});
		const uintIx2wHPd = BigInt("1311")
		const addresszgrqaTl = accounts[2]
		const uintFtNb65I = BigInt("141")
		const uint256g3KJsi = await WolfStakingRewardseS1lHsx.earned.call(addresszgrqaTl, uintIx2wHPd, {from: accounts[1]});
		await WolfStakingRewardseS1lHsx.onlyOwner.call({from: accounts[2]});
		const uint256CNWcRGZ = await WolfStakingRewardseS1lHsx.totalSupplyPerPool.call(uintFtNb65I, {from: accounts[0]});
		await WolfStakingRewardseS1lHsx.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringylNIkd = "8B9XMoAnJlS1orqghPTuXiUJ79WhM2QPNQHND9IDPp"
		const stringHghITuA = "71"
		const uintlFY6SMm = BigInt("171")
		const WolfStakingRewardsktWCzd = await WolfStakingRewards.new(stringylNIkd, stringHghITuA, uintlFY6SMm, {from: accounts[3]});
		const uintTRWRkcR = BigInt("1958")
		const uintidcxoQS = BigInt("839")
		const uintAcL9Y6D = BigInt("1094")
		const uint8Y5x0d4b = await WolfStakingRewardsktWCzd.decimals.call({from: accounts[2]});
		const uint256wTeUmfN = await WolfStakingRewardsktWCzd.getRewardForDuration.call(uintTRWRkcR, {from: accounts[4]});
		const uint256arrayOGHjixT = await WolfStakingRewardsktWCzd.updateNotifyRewardAmount.call(uintidcxoQS, {from: accounts[3]});
		const uint256kLvJczk = await WolfStakingRewardsktWCzd.exit.call(uintAcL9Y6D, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const string7Kbsa4 = "oGbBBzjBzfWmEm79gSwtSlowiuMQPWS5gyUZAYUKTjqiP9EtzAszaCQJv"
		const stringxkPbRkp = "gTgaQOoSY"
		const uintNPVVN09 = BigInt("152")
		const WolfStakingRewardsLc5Eim6 = await WolfStakingRewards.new(string7Kbsa4, stringxkPbRkp, uintNPVVN09, {from: "0x0000000000000000000000000000000000000001"});
		const uintw82qpSd = BigInt("768")
		const addressZ3LPbgw = accounts[2]
		const uintB5rrEF1 = BigInt("1623")
		const uintrifDnz = BigInt("1265")
		const uintMuyKjN = BigInt("578")
		const uintuCra2JE = BigInt("773")
		const uintOH6Zhqe = BigInt("224")
		const uintE55Atr = BigInt("1281")
		const uint256u3Pge6 = await WolfStakingRewardsLc5Eim6.earned.call(addressZ3LPbgw, uintw82qpSd, {from: accounts[0]});
		const uint256CwghBb = await WolfStakingRewardsLc5Eim6.rewardPerToken.call(uintB5rrEF1, {from: accounts[2]});
		const uint256arrayyJBpvEn = await WolfStakingRewardsLc5Eim6.updateNotifyRewardAmount.call(uintrifDnz, {from: accounts[2]});
		const uintOw4zQTh = await WolfStakingRewardsLc5Eim6.getReward.call(uintMuyKjN, {from: accounts[2]});
		const uint256deae5WD = await WolfStakingRewardsLc5Eim6.stake.call(uintOH6Zhqe, uintuCra2JE, {from: accounts[5]});
		const uint256euhxVd = await WolfStakingRewardsLc5Eim6.getRewardForDuration.call(uintE55Atr, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXkk3P6X = "E623MsQ5S74uypT4Tts4H"
		const stringAzEJZZJ = "M6fIPPwDMmsxnwaKUgR6OkGaevvjDeHmPrGrOEiQmIRrFoZjoNnyL"
		const uintPNyD9e2 = BigInt("207")
		const WolfStakingRewardsH0Dct9z = await WolfStakingRewards.new(stringXkk3P6X, stringAzEJZZJ, uintPNyD9e2, {from: accounts[2]});
		const uintUg4wUsR = BigInt("2")
		const uintHZ983P0 = BigInt("685")
		const uintqHGQjFC = BigInt("716")
		const stringAVbvqR0 = await WolfStakingRewardsH0Dct9z.symbol.call({from: accounts[5]});
		await WolfStakingRewardsH0Dct9z.nonReentrant.call({from: accounts[3]});
		const uint256H9Wygx = await WolfStakingRewardsH0Dct9z.withdraw.call(uintHZ983P0, uintUg4wUsR, {from: accounts[3]});
		const uint256O53m0Mq = await WolfStakingRewardsH0Dct9z.totalSupplyPerPool.call(uintqHGQjFC, {from: accounts[2]});
		await WolfStakingRewardsH0Dct9z.nonReentrant.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringimQJemw = "z4ObQwhEu6wRwAVafx1p7GH"
		const stringOOs7dpN = "eQV48lZDGMfnhrt8IJ9eECBJ0hF0IdEPEuf8U83LvxKOVeXtMry8ugkMtQgrFXqCkGzR6VVpzGJNj2whfGomJSeoHm7y1tJAvxt"
		const uinteyhsQio = BigInt("74")
		const WolfStakingRewardsCgb4jpA = await WolfStakingRewards.new(stringimQJemw, stringOOs7dpN, uinteyhsQio, {from: accounts[2]});
		const uintd527frv = BigInt("1904")
		const addressdvlbYGr = accounts[1]
		const uintID74rYJ = BigInt("1661")
		const uintGt03OO = BigInt("866")
		const uint256WmsX8mF = await WolfStakingRewardsCgb4jpA.balanceOfPerPool.call(addressdvlbYGr, uintd527frv, {from: accounts[1]});
		const uint256u0vFzzD = await WolfStakingRewardsCgb4jpA.withdraw.call(uintGt03OO, uintID74rYJ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvC60Y7V = "JlVR63gFbTa2CycegNc7wEDn2FxsMzJJak"
		const stringXuBYhrl = "t0FREqSiPYcOtbDwM82EB0pOGdRSTmmAh5w"
		const uint3RA314 = BigInt("90")
		const WolfStakingRewardsv0J9rlG = await WolfStakingRewards.new(stringvC60Y7V, stringXuBYhrl, uint3RA314, {from: accounts[0]});
		const uintTVqAGw = BigInt("50")
		const uintKsO3snF = BigInt("1702")
		const uintStA8DQP = BigInt("1952")
		const addressQ3jKeqQ = accounts[3]
		const uintAQOwyz2 = BigInt("342")
		const uintkzo8l7d = BigInt("138")
		const uintgIO1GXu = BigInt("1894")
		const uintEpT6pE = BigInt("1369")
		const uinteosmPZL = BigInt("1873")
		const uint256XkIKF8z = await WolfStakingRewardsv0J9rlG.stake.call(uintKsO3snF, uintTVqAGw, {from: accounts[3]});
		const uint256vGS8xmF = await WolfStakingRewardsv0J9rlG.balanceOfPerPool.call(addressQ3jKeqQ, uintStA8DQP, {from: accounts[5]});
		const uint256QkvLYn2 = await WolfStakingRewardsv0J9rlG.withdraw.call(uintkzo8l7d, uintAQOwyz2, {from: accounts[2]});
		const uint256GgcW9iT = await WolfStakingRewardsv0J9rlG.lastTimeRewardApplicable.call(uintgIO1GXu, {from: accounts[1]});
		const uint8cUp3NA7 = await WolfStakingRewardsv0J9rlG.decimals.call({from: accounts[5]});
		const uint256szv1ye4 = await WolfStakingRewardsv0J9rlG.stake.call(uinteosmPZL, uintEpT6pE, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDbfkYC = "7WAYDnwsVwmywFdB6Mi4sgVhPM4IjWxrR9xiNE0cmwVQpo4pPyUP"
		const stringbQykJOq = "HgM9Ei"
		const uintRDIK5Hh = BigInt("179")
		const WolfStakingRewardsy3JgTnS = await WolfStakingRewards.new(stringDbfkYC, stringbQykJOq, uintRDIK5Hh, {from: accounts[4]});
		const uintyLp7k1W = BigInt("1122")
		const addressI4aBJUM = accounts[0]
		const uinthPPQ9Ha = BigInt("839")
		const uintU1mxnuw = BigInt("1723")
		const addressV1uHvd = await WolfStakingRewardsy3JgTnS.updateReward.call(addressI4aBJUM, uintyLp7k1W, {from: accounts[5]});
		await WolfStakingRewardsy3JgTnS.onlyOwner.call({from: accounts[3]});
		await WolfStakingRewardsy3JgTnS.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256gZMKt9 = await WolfStakingRewardsy3JgTnS.withdraw.call(uintU1mxnuw, uinthPPQ9Ha, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoCAvRf = "PnMuApgHcf3zTl27wlKg6q8rTGLv7u7VlS7uDgEjNhOl2oV4jfoX6i5"
		const stringlPvH987 = "WJjDwrW96FnWtJKGTx4LnoLhSfVGiYB5xXh"
		const uintzVgBqNE = BigInt("207")
		const WolfStakingRewardsB3LJrOW = await WolfStakingRewards.new(stringoCAvRf, stringlPvH987, uintzVgBqNE, {from: accounts[1]});
		const uintmX40R8 = BigInt("55")
		const addressO6j1K9 = accounts[0]
		const uintyjDMAy6 = BigInt("619")
		const uintob1BIHY = BigInt("297")
		const addressYi34nfZ = await WolfStakingRewardsB3LJrOW.updateReward.call(addressO6j1K9, uintmX40R8, {from: accounts[3]});
		await WolfStakingRewardsB3LJrOW.nonReentrant.call({from: accounts[5]});
		const uint256I6IgIVS = await WolfStakingRewardsB3LJrOW.stake.call(uintob1BIHY, uintyjDMAy6, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringB0jG4t = "7khu6hlLfDDy31L4q3GVkUwIj"
		const stringnFyoIMd = "UjUwEoSwlWu8oBayHioPmvWICGJ3igKaKydR8SUfo5WqKdiMggBzFTGe"
		const uint39UHvV = BigInt("77")
		const WolfStakingRewardsmvVqhSL = await WolfStakingRewards.new(stringB0jG4t, stringnFyoIMd, uint39UHvV, {from: accounts[5]});
		const uintOEuwkMT = BigInt("1422")
		const addressvVT64D2 = accounts[4]
		const uintvqYOHbO = BigInt("1894")
		const uintLIFu9Qs = BigInt("485")
		const uintLdcrqN9 = BigInt("455")
		const addressc2hButy = accounts[4]
		const uintS2ZxA9f = BigInt("1576")
		const addressXH16uAJ = accounts[1]
		const uint256G6Sl8mB = await WolfStakingRewardsmvVqhSL.earned.call(addressvVT64D2, uintOEuwkMT, {from: accounts[3]});
		const uint256KJ7gBYs = await WolfStakingRewardsmvVqhSL.rewardPerToken.call(uintvqYOHbO, {from: accounts[1]});
		await WolfStakingRewardsmvVqhSL.onlyOwner.call({from: accounts[2]});
		const uint256aAfwkgR = await WolfStakingRewardsmvVqhSL.exit.call(uintLIFu9Qs, {from: accounts[1]});
		const uint256C9isWo = await WolfStakingRewardsmvVqhSL.balanceOfPerPool.call(addressc2hButy, uintLdcrqN9, {from: accounts[2]});
		const uint256NythfWG = await WolfStakingRewardsmvVqhSL.earned.call(addressXH16uAJ, uintS2ZxA9f, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaoFXE6j = "J3KRRfyCD6Wjjr89n6j3VfJlPq5MUxoSCHd96t9JEhr74w8zA"
		const stringezpskYK = "nP2oFPvM8lcgd9NFUAzgFav30Jh37IqV6hiUlbdFJzEBHUunOfDUgYolnb"
		const uintqxDfAbf = BigInt("170")
		const WolfStakingRewardsNiyfutE = await WolfStakingRewards.new(stringaoFXE6j, stringezpskYK, uintqxDfAbf, {from: accounts[1]});
		const uintzqcTQuK = BigInt("240")
		const uintqH5ZqQ = BigInt("729")
		const uintl0rQf9Q = BigInt("464")
		const uintJxbrA6Z = BigInt("1310")
		const uint256arrayBuVesY = await WolfStakingRewardsNiyfutE.updateNotifyRewardAmount.call(uintzqcTQuK, {from: accounts[1]});
		await WolfStakingRewardsNiyfutE.onlyOwner.call({from: accounts[0]});
		const uint256PsSdBHr = await WolfStakingRewardsNiyfutE.withdraw.call(uintl0rQf9Q, uintqH5ZqQ, {from: accounts[2]});
		const uint256arrayEvjX9vZ = await WolfStakingRewardsNiyfutE.updateNotifyRewardAmount.call(uintJxbrA6Z, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQqXoxPd = "d6VKn47aqe7YOIIrlonglhOr6rks9kitJiBMOLwahAV3JSfgNDyjLcDmC7FtaDIqu43tt3rLtc7UMaKOJ7"
		const stringfOZWoNA = "q5R3KO3pzKGtnYyXjR3AnrL3dPcMdI1g6Nh7yye5rAhL7odVJsu5Urs48zcWUOw4AOLHD9yzKt52T4QgH8kbacft"
		const uintYL3p2PZ = BigInt("191")
		const WolfStakingRewardsK6jwy2f = await WolfStakingRewards.new(stringQqXoxPd, stringfOZWoNA, uintYL3p2PZ, {from: accounts[5]});
		const uintNyZaenY = BigInt("862")
		const uintxkxjtXF = BigInt("308")
		const uintjbVpInK = BigInt("1961")
		const uintIy5nLc4 = BigInt("356")
		const uintNl4MFSB = BigInt("133")
		await WolfStakingRewardsK6jwy2f.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256RUlK15k = await WolfStakingRewardsK6jwy2f.getRewardForDuration.call(uintNyZaenY, {from: accounts[4]});
		const uint256KBTEjGq = await WolfStakingRewardsK6jwy2f.exit.call(uintxkxjtXF, {from: accounts[3]});
		const uint256arrayi3OHngH = await WolfStakingRewardsK6jwy2f.updateNotifyRewardAmount.call(uintjbVpInK, {from: accounts[3]});
		const uint256O0gyzmx = await WolfStakingRewardsK6jwy2f.rewardPerToken.call(uintIy5nLc4, {from: accounts[1]});
		const uint256wuVdKQg = await WolfStakingRewardsK6jwy2f.lastTimeRewardApplicable.call(uintNl4MFSB, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGhQ28F3 = "MUISdSNs88MT22CoHHfJCOPgbHnNtwRo77fe8pjkIRR9o5Ww1Ia3dyNFAs8AmJ2luGzFeTd79"
		const stringtPCiGz7 = "5ei8VKUKxYxz67MlEnOV5SS7WBDp3533iYdrsu"
		const uintGHeL6oC = BigInt("237")
		const WolfStakingRewardsa12ApbU = await WolfStakingRewards.new(stringGhQ28F3, stringtPCiGz7, uintGHeL6oC, {from: accounts[4]});
		const uints9hdqUE = BigInt("1526")
		const uintzfZz5bs = BigInt("210")
		const addressZ5IccNM = accounts[3]
		const uintyF3FVHp = BigInt("177")
		const uintDcFSfPz = BigInt("26")
		const uint256Cr2HaSh = await WolfStakingRewardsa12ApbU.totalSupplyPerPool.call(uints9hdqUE, {from: accounts[1]});
		const uint256Fo85fJ2 = await WolfStakingRewardsa12ApbU.earned.call(addressZ5IccNM, uintzfZz5bs, {from: accounts[4]});
		const uint256BgQCyrI = await WolfStakingRewardsa12ApbU.withdraw.call(uintDcFSfPz, uintyF3FVHp, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbT4Dewd = "cRNzguB2HqxYW8CTneTkTGz839dFUiaTE87I1hVt2E1fxTSpQ3fadeIy7cfXK9"
		const stringDRsaLri = "XQQIuxoCEwQWzvVu4f8Co8r77j3alugV3So8e6XNaYifyoX5ib8bYJgacPncY"
		const uintpfwTRJU = BigInt("34")
		const WolfStakingRewardsfrDBUj5 = await WolfStakingRewards.new(stringbT4Dewd, stringDRsaLri, uintpfwTRJU, {from: accounts[3]});
		const uintejzjBTQ = BigInt("131")
		const uintxb2sEtX = BigInt("1207")
		const uinttkKYPzJ = BigInt("1011")
		const uint256SuM8emY = await WolfStakingRewardsfrDBUj5.rewardPerToken.call(uintejzjBTQ, {from: accounts[1]});
		const uint256yg45O4p = await WolfStakingRewardsfrDBUj5.withdraw.call(uinttkKYPzJ, uintxb2sEtX, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxbR0A80 = "hmh566RwcMKLSLyiow67d0InXArcHkTID9JgodvYmBFzw4eOMH3yYU8x7uPRfWqjFVPFlZcc"
		const stringli7s6V5 = "iUwJ9gigkUiV9WBLRve1I3WxOUd"
		const uintkNv46Ap = BigInt("87")
		const WolfStakingRewardszjJRS5k = await WolfStakingRewards.new(stringxbR0A80, stringli7s6V5, uintkNv46Ap, {from: accounts[0]});
		const uintoFVAWbf = BigInt("1830")
		const uintMzuiOF7 = BigInt("721")
		const uintvqhIRpe = BigInt("926")
		const uintmc2Rn5O = BigInt("1329")
		const addresseeYkosq = accounts[5]
		const uint256agus6JD = await WolfStakingRewardszjJRS5k.rewardPerToken.call(uintoFVAWbf, {from: accounts[0]});
		const uint256DVhg4ry = await WolfStakingRewardszjJRS5k.rewardPerToken.call(uintMzuiOF7, {from: accounts[2]});
		const uint256bCTJiHM = await WolfStakingRewardszjJRS5k.getRewardForDuration.call(uintvqhIRpe, {from: accounts[1]});
		const uint8TrhbdPk = await WolfStakingRewardszjJRS5k.decimals.call({from: accounts[2]});
		const uint256jPXSyYL = await WolfStakingRewardszjJRS5k.balanceOfPerPool.call(addresseeYkosq, uintmc2Rn5O, {from: accounts[0]});
		const uint8ddigp1T = await WolfStakingRewardszjJRS5k.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmXt198 = "CGjTBTZ5T4z98PpBG2MP09mAhjOXcf"
		const stringz2pZtzQ = "GP87T3"
		const uintDg2BEy1 = BigInt("252")
		const WolfStakingRewardsZzfxZbi = await WolfStakingRewards.new(stringmXt198, stringz2pZtzQ, uintDg2BEy1, {from: accounts[0]});
		const uintdS5px8d = BigInt("1159")
		const uintdz57Es0 = BigInt("1765")
		const uintV3pH698 = BigInt("425")
		const uint256Jplb2p1 = await WolfStakingRewardsZzfxZbi.exit.call(uintdS5px8d, {from: accounts[4]});
		const uint8YRQMR6o = await WolfStakingRewardsZzfxZbi.decimals.call({from: accounts[4]});
		const uint256pZqOrpk = await WolfStakingRewardsZzfxZbi.stake.call(uintV3pH698, uintdz57Es0, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfz9s793 = "210UEwEUT0LwyzgwV5wFRqyzUQeuF96fgr5sjFH"
		const stringLnedTnn = "ljkdsebAS8UYlbIetZpzKbI7e1wVe"
		const uintQQ9j6e = BigInt("114")
		const WolfStakingRewardscGT9FiY = await WolfStakingRewards.new(stringfz9s793, stringLnedTnn, uintQQ9j6e, {from: accounts[5]});
		const uintgfz2fWk = BigInt("284")
		const uintShi7gNp = BigInt("1140")
		const uintriFx0NR = await WolfStakingRewardscGT9FiY.getReward.call(uintgfz2fWk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayohrf2S3 = await WolfStakingRewardscGT9FiY.updateNotifyRewardAmount.call(uintShi7gNp, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringk3o0n54 = "ALM3MECcuqjG4Sn1S8SKJGYYsmlR9VRjYKW7Mpb9tvjqp74U3v7dVNGTbuAveeg6kndS6ogrJ631GncMTV1GxQBVNH"
		const stringu6wgZlZ = "6p7Kmy0NgkRp3vWgRi4Cvr5WAuCz7V2EzCKwWbCRsihb"
		const uintB0NgVGm = BigInt("242")
		const WolfStakingRewardsVByqKUk = await WolfStakingRewards.new(stringk3o0n54, stringu6wgZlZ, uintB0NgVGm, {from: accounts[2]});
		const uinttpbA5M = BigInt("1761")
		const addressYJ98lA2 = "0x0000000000000000000000000000000000000001"
		const uint8OgQhdBA = await WolfStakingRewardsVByqKUk.decimals.call({from: accounts[1]});
		const uint256tRF00ud = await WolfStakingRewardsVByqKUk.balanceOfPerPool.call(addressYJ98lA2, uinttpbA5M, {from: accounts[0]});
		await WolfStakingRewardsVByqKUk.onlyOwner.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeVM26lZ = "IygqOLeMIyWhY2UEcaVDS9iqXWbCH6kw"
		const stringl7rG9aI = "irt6Mypek85kKhnLZN7djYpH21RFJvk3wnyyKYRA4tOoKUbG7L4G9LIFtbpzN3rVPNrD2VKRl1AgGig593ImAvDq1"
		const uintfVH1vbv = BigInt("15")
		const WolfStakingRewardsCLrfPvl = await WolfStakingRewards.new(stringeVM26lZ, stringl7rG9aI, uintfVH1vbv, {from: accounts[1]});
		const uintdka17U = BigInt("1325")
		const uintxWSsbc = BigInt("871")
		const addressBggOMds = accounts[1]
		const uintXmpXpOU = BigInt("263")
		const addressulwMRoU = accounts[5]
		const uintCODta2D = BigInt("1893")
		const addresscIx24TK = accounts[0]
		const uint256MrLBwOB = await WolfStakingRewardsCLrfPvl.rewardPerToken.call(uintdka17U, {from: accounts[0]});
		const uint256GdwjHN = await WolfStakingRewardsCLrfPvl.earned.call(addressBggOMds, uintxWSsbc, {from: accounts[0]});
		await WolfStakingRewardsCLrfPvl.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256ayuJiAm = await WolfStakingRewardsCLrfPvl.earned.call(addressulwMRoU, uintXmpXpOU, {from: accounts[4]});
		const addressqekWjUQ = await WolfStakingRewardsCLrfPvl.updateReward.call(addresscIx24TK, uintCODta2D, {from: accounts[1]});
	});
})