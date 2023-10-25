const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringtLxi1UI = "7tgqHwwbpLGiWJ2N8hqMDGYVruOfYllEK6L1xjFLYzCWBSKHoWLQQLtuaTKUjuVHNEVw48VW539KlrO8PvG"
		const stringXWjrLM6 = "SgVovP0AVOtSHxwRn9JGhlhB9f1VWiDsVl8Icb"
		const uintqUP5wmG = BigInt("244")
		const BACMARSLPTOKENPoolU8dOCnC = await BACMARSLPTOKENPool.new(stringtLxi1UI, stringXWjrLM6, uintqUP5wmG, {from: accounts[1]});
		await BACMARSLPTOKENPoolU8dOCnC.getReward.call({from: accounts[1]});
		const uint8cOm4ufG = await BACMARSLPTOKENPoolU8dOCnC.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressHU2LSP4 = accounts[3]
		const addressAGYTwLg = accounts[2]
		const addressKdQ4QSj = accounts[0]
		const BACMARSLPTOKENPoolsoRILra = await BACMARSLPTOKENPool.new(addressHU2LSP4, addressAGYTwLg, addressKdQ4QSj, {from: accounts[1]});
		const addressmdXEr1a = accounts[2]
		const uint256ZaTs7p = await BACMARSLPTOKENPoolsoRILra.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wIrtylY = await BACMARSLPTOKENPoolsoRILra.totalSupply.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolsoRILra.exit.call({from: accounts[2]});
//		const uint256esereHc = await BACMARSLPTOKENPoolsoRILra.earned.call(addressmdXEr1a, {from: accounts[0]});

		assert.equal(uint256ZaTs7p, BigInt("0"))
		assert.equal(uint256wIrtylY, BigInt("0"))
		await expect(BACMARSLPTOKENPoolsoRILra.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressbIwXSZg = accounts[0]
		const addressHpyuVIw = accounts[0]
		const addressGF3ZYX6 = accounts[5]
		const BACMARSLPTOKENPoolG8cvo0j = await BACMARSLPTOKENPool.new(addressbIwXSZg, addressHpyuVIw, addressGF3ZYX6, {from: accounts[1]});
		const addressQdxaCGM = accounts[1]
//		await BACMARSLPTOKENPoolG8cvo0j.getReward.call({from: accounts[5]});
//		const uint256roICq1 = await BACMARSLPTOKENPoolG8cvo0j.balanceOf.call(addressQdxaCGM, {from: accounts[4]});
//		const uint256WHRbCh = await BACMARSLPTOKENPoolG8cvo0j.getRewardForDuration.call({from: accounts[0]});
//		const uint8rZVLkl2 = await BACMARSLPTOKENPoolG8cvo0j.decimals.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolG8cvo0j.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresslypGJ3b = accounts[1]
		const addressO7Me0Le = accounts[3]
		const addresssCv9uAK = accounts[4]
		const BACMARSLPTOKENPoolixB2ETv = await BACMARSLPTOKENPool.new(addresslypGJ3b, addressO7Me0Le, addresssCv9uAK, {from: accounts[3]});
		const uintMRuQ6cG = BigInt("1539")
//		const uint256uF36RSy = await BACMARSLPTOKENPoolixB2ETv.notifyRewardAmount.call(uintMRuQ6cG, {from: "0x0000000000000000000000000000000000000001"});
//		const stringftdBnOQ = await BACMARSLPTOKENPoolixB2ETv.symbol.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolixB2ETv.notifyRewardAmount.call(uintMRuQ6cG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringai4dPrm = "IufppaOxlplN257WzKhodBvusYHQgrwE"
		const stringVtIHS5m = "L4M776rPje454"
		const uint6p24jc = BigInt("110")
		const BACMARSLPTOKENPoolJYpZ5Ln = await BACMARSLPTOKENPool.new(stringai4dPrm, stringVtIHS5m, uint6p24jc, {from: accounts[0]});
		const uintS4AUzt5 = BigInt("1036")
		const uintUHiD2Gk = BigInt("982")
		const uint256UfaJrB = await BACMARSLPTOKENPoolJYpZ5Ln.stake.call(uintS4AUzt5, {from: accounts[4]});
		const uint256xSnJ2Rb = await BACMARSLPTOKENPoolJYpZ5Ln.notifyRewardAmount.call(uintUHiD2Gk, {from: accounts[4]});
		await BACMARSLPTOKENPoolJYpZ5Ln.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressM3ay5KI = accounts[4]
		const addressYkCPvcy = accounts[5]
		const addresszEyIU18 = accounts[3]
		const BACMARSLPTOKENPooluKkmLKp = await BACMARSLPTOKENPool.new(addressM3ay5KI, addressYkCPvcy, addresszEyIU18, {from: "0x0000000000000000000000000000000000000001"});
		const uint8Gz9Hj = BigInt("1076")
		const byteY2IkLg = "0x050c15041701000b1308100e051a160d161b0b16071b03061707010f0f1a1a03"
		const byteBzlOOo = "0x14160a12061b131f0301201c0b061f0d040b14160a15150f1c1a0b0d020b100d"
		const uintri2dypw = BigInt("232")
		const uintJ3Mmpc = BigInt("1528")
		const uintd6DsWCg = BigInt("579")
		const addresseMCjJca = "0x0000000000000000000000000000000000000001"
		const stringHnmpoyx = await BACMARSLPTOKENPooluKkmLKp.name.call({from: accounts[2]});
		const uint256DWBO20t = await BACMARSLPTOKENPooluKkmLKp.notifyRewardAmount.call(uint8Gz9Hj, {from: accounts[2]});
		const uint256aCQx5p3 = await BACMARSLPTOKENPooluKkmLKp.stakeWithPermit.call(uintd6DsWCg, uintJ3Mmpc, uintri2dypw, byteBzlOOo, byteY2IkLg, {from: accounts[0]});
		const uint256y6M7zjt = await BACMARSLPTOKENPooluKkmLKp.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PiSTe1e = await BACMARSLPTOKENPooluKkmLKp.balanceOf.call(addresseMCjJca, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringffRSXKy = "tJtM6t4xEn7R5qFhuQfJKgLa1PL1euPN8vGlJnyh7w6Ma9bBCbutPrCvuLbSAmTII8beH771eKK9pX6fk8Qh"
		const stringTiPMFWY = "1E1CUlk1h8"
		const uintdnaXaxq = BigInt("78")
		const BACMARSLPTOKENPoolS9M9tj9 = await BACMARSLPTOKENPool.new(stringffRSXKy, stringTiPMFWY, uintdnaXaxq, {from: accounts[0]});
		await BACMARSLPTOKENPoolS9M9tj9.exit.call({from: accounts[3]});
		const uint8rWpI6G9 = await BACMARSLPTOKENPoolS9M9tj9.decimals.call({from: accounts[2]});
		const stringh6S266b = await BACMARSLPTOKENPoolS9M9tj9.symbol.call({from: accounts[5]});
		const uint8E9DBkgW = await BACMARSLPTOKENPoolS9M9tj9.decimals.call({from: accounts[5]});
		await BACMARSLPTOKENPoolS9M9tj9.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresswy6OM25 = accounts[3]
		const addresss98t9iF = accounts[2]
		const addressCptwDXe = accounts[0]
		const BACMARSLPTOKENPoolsoRILra = await BACMARSLPTOKENPool.new(addresswy6OM25, addresss98t9iF, addressCptwDXe, {from: accounts[1]});
		const addressTUhm661 = accounts[3]
		const uintmApuoya = BigInt("1527")
		const uint256ZaTs7p = await BACMARSLPTOKENPoolsoRILra.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wIrtylY = await BACMARSLPTOKENPoolsoRILra.totalSupply.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolsoRILra.exit.call({from: accounts[2]});
//		const uint256esereHc = await BACMARSLPTOKENPoolsoRILra.earned.call(addressTUhm661, {from: accounts[0]});
//		const uint256yD5KHM = await BACMARSLPTOKENPoolsoRILra.stake.call(uintmApuoya, {from: accounts[0]});

		assert.equal(uint256ZaTs7p, BigInt("0"))
		assert.equal(uint256wIrtylY, BigInt("0"))
		await expect(BACMARSLPTOKENPoolsoRILra.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressn603nFL = accounts[0]
		const addressetzdBYM = accounts[0]
		const addressCESbW1o = accounts[5]
		const BACMARSLPTOKENPoolG8cvo0j = await BACMARSLPTOKENPool.new(addressn603nFL, addressetzdBYM, addressCESbW1o, {from: accounts[1]});
		const bytePjDkSb2 = "0x0e0b04071b071b1f15041905090506121c021b1c181d031e1c02020e1c1c1203"
		const byteukSaYR6 = "0x02131619101d0a0c101f14180c1c141b0e140b0b0b071b130d00130e141c1e11"
		const uintNPlQDC7 = BigInt("87")
		const uintvjQtOLs = BigInt("1369")
		const uintG0fpGkR = BigInt("476")
		const addressweWTo5E = accounts[2]
		const addressdlT5Lat = accounts[1]
//		await BACMARSLPTOKENPoolG8cvo0j.getReward.call({from: accounts[5]});
//		const uint256TnzSBco = await BACMARSLPTOKENPoolG8cvo0j.stakeWithPermit.call(uintG0fpGkR, uintvjQtOLs, uintNPlQDC7, byteukSaYR6, bytePjDkSb2, {from: accounts[0]});
//		const uint256lFF31I9 = await BACMARSLPTOKENPoolG8cvo0j.balanceOf.call(addressweWTo5E, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256roICq1 = await BACMARSLPTOKENPoolG8cvo0j.balanceOf.call(addressdlT5Lat, {from: accounts[4]});
//		const uint256WHRbCh = await BACMARSLPTOKENPoolG8cvo0j.getRewardForDuration.call({from: accounts[0]});
//		const uint8rZVLkl2 = await BACMARSLPTOKENPoolG8cvo0j.decimals.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolG8cvo0j.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressjelCZs = accounts[3]
		const addresssttQQlu = accounts[2]
		const addresso8zRLHX = accounts[0]
		const BACMARSLPTOKENPoolsoRILra = await BACMARSLPTOKENPool.new(addressjelCZs, addresssttQQlu, addresso8zRLHX, {from: accounts[1]});
		const uintSoJySZS = BigInt("1218")
		const addresszNqtut = accounts[3]
		const uint256ZaTs7p = await BACMARSLPTOKENPoolsoRILra.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256XcS4Zgo = await BACMARSLPTOKENPoolsoRILra.withdraw.call(uintSoJySZS, {from: accounts[2]});
//		const uint256RImDAE = await BACMARSLPTOKENPoolsoRILra.getRewardForDuration.call({from: accounts[0]});
//		const uint256wIrtylY = await BACMARSLPTOKENPoolsoRILra.totalSupply.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolsoRILra.exit.call({from: accounts[2]});
//		const uint256esereHc = await BACMARSLPTOKENPoolsoRILra.earned.call(addresszNqtut, {from: accounts[0]});

		assert.equal(uint256ZaTs7p, BigInt("0"))
		await expect(BACMARSLPTOKENPoolsoRILra.withdraw.call(uintSoJySZS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresszHKeBf = accounts[0]
		const addressOEq8BCu = accounts[0]
		const addresso4O937Q = accounts[5]
		const BACMARSLPTOKENPoolG8cvo0j = await BACMARSLPTOKENPool.new(addresszHKeBf, addressOEq8BCu, addresso4O937Q, {from: accounts[1]});
		const addressXcrPRlb = accounts[1]
		const uintq8d6UtM = BigInt("177")
//		await BACMARSLPTOKENPoolG8cvo0j.getReward.call({from: accounts[5]});
//		const uint256roICq1 = await BACMARSLPTOKENPoolG8cvo0j.balanceOf.call(addressXcrPRlb, {from: accounts[4]});
//		const uint256WHRbCh = await BACMARSLPTOKENPoolG8cvo0j.getRewardForDuration.call({from: accounts[0]});
//		const uint256C2znr6 = await BACMARSLPTOKENPoolG8cvo0j.stake.call(uintq8d6UtM, {from: accounts[1]});
//		const uint8rZVLkl2 = await BACMARSLPTOKENPoolG8cvo0j.decimals.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolG8cvo0j.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqwNnXnE = "6pcq"
		const stringTNbzWQW = "2BHziobJlrOqnSylOJuWU9StYqM6iscTQYC44p4i6dYoAtzXVTUIF9pa80aGi1TabUbwluDB4MBunrYrdFMsvH"
		const uintnoh8vt3 = BigInt("238")
		const BACMARSLPTOKENPoolhdqKou = await BACMARSLPTOKENPool.new(stringqwNnXnE, stringTNbzWQW, uintnoh8vt3, {from: accounts[1]});
		const uintIh1BzPk = BigInt("731")
		const uintp1f5rKf = BigInt("993")
		const uint256oD8uEhG = await BACMARSLPTOKENPoolhdqKou.withdraw.call(uintIh1BzPk, {from: accounts[3]});
		const uint256rvjBxh = await BACMARSLPTOKENPoolhdqKou.withdraw.call(uintp1f5rKf, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolhdqKou.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringL5uwmVf = "HsNBIhSJkxfDxCFjRGo5ekQ5rb3WYUnF5wUmCK07emHy3s5mQb7ytxQC2HwS7yt1wmRjX70KXWmGNU59JMp8dEhQgmzE"
		const stringjyXxMw7 = "zLhiXn8mMXEOlnyJyaLr5FGK2NnK3bW2rDWUA2RSplsBWorYfaJmU73cbSvwRxKFiNdgEenWUcoybG86ua1hziAL"
		const uintUmgwUCR = BigInt("76")
		const BACMARSLPTOKENPoolcteP1GE = await BACMARSLPTOKENPool.new(stringL5uwmVf, stringjyXxMw7, uintUmgwUCR, {from: accounts[4]});
		const uintZMCMuV7 = BigInt("1429")
		const uintgwJopUG = BigInt("103")
		const uint256PRH12Mm = await BACMARSLPTOKENPoolcteP1GE.getRewardForDuration.call({from: accounts[2]});
		const stringACeWmNT = await BACMARSLPTOKENPoolcteP1GE.name.call({from: accounts[1]});
		const uint256dofDiHj = await BACMARSLPTOKENPoolcteP1GE.withdraw.call(uintZMCMuV7, {from: accounts[0]});
		const uint256DYybyW = await BACMARSLPTOKENPoolcteP1GE.getRewardForDuration.call({from: accounts[4]});
		const uint256SmtOoVh = await BACMARSLPTOKENPoolcteP1GE.stake.call(uintgwJopUG, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringM4urc36 = "vyn6kYYu7ou0BYzutiLIsYEMhiZ2QLiYbaAcSvdmpxWLqJYSSu7W7CMbrDXuZijcp"
		const stringMcz1atE = "ijXRLL1Y9x59kv2zwGbxxryFbPHSJHluAjU5LjoozVNzn6z396HDQBjgrjROu8w9PPEYaYhdOihN3xPSjesNiO7BX5GW1glSh"
		const uintYTLvUzQ = BigInt("63")
		const BACMARSLPTOKENPooloPKzzb7 = await BACMARSLPTOKENPool.new(stringM4urc36, stringMcz1atE, uintYTLvUzQ, {from: accounts[2]});
		const bytevhVCEG = "0x0c0411101d070f11081c03130f071b0e0305051706061d190703050c17001507"
		const byteX6RpLZA = "0x040e1a1e1e04080d1d18091f17010b0a01011f15161e09190f0103040b090c06"
		const uintIsxz2og = BigInt("6")
		const uintExkE0IH = BigInt("1643")
		const uintFDdrbMn = BigInt("35")
		await BACMARSLPTOKENPooloPKzzb7.exit.call({from: accounts[4]});
		const uint256ud1POn = await BACMARSLPTOKENPooloPKzzb7.stakeWithPermit.call(uintFDdrbMn, uintExkE0IH, uintIsxz2og, byteX6RpLZA, bytevhVCEG, {from: accounts[3]});
		const uint256v6Jaxk3 = await BACMARSLPTOKENPooloPKzzb7.rewardPerToken.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringb7HCoD = "kEtMKv7M7deOvkrm1aHrRIe3TggP"
		const stringPS7hmEF = "MLrNzzY2h36lBulz5aFcRKkFv2fDChOIEbMQ5Kc2k"
		const uintlZY86JN = BigInt("42")
		const BACMARSLPTOKENPoolXRDJbi = await BACMARSLPTOKENPool.new(stringb7HCoD, stringPS7hmEF, uintlZY86JN, {from: accounts[4]});
		const uintdQRfwCW = BigInt("1727")
		const uint256Iqgx8l = await BACMARSLPTOKENPoolXRDJbi.lastTimeRewardApplicable.call({from: accounts[0]});
		const stringu1bOgGy = await BACMARSLPTOKENPoolXRDJbi.name.call({from: accounts[3]});
		const uint256FnwLE1Q = await BACMARSLPTOKENPoolXRDJbi.notifyRewardAmount.call(uintdQRfwCW, {from: accounts[2]});
		const uint256FvNPpti = await BACMARSLPTOKENPoolXRDJbi.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeiwKtKl = "jnoudK685c0yKMYcgQlvLSsHpm8JXnE92kKtuW1AwvYB2BwqNksWymeTynknAoPJzEnLjAuxAE04mb4r4TaWwmPMHK4zWCTw"
		const stringq1OI06e = "J1fLqwsr3bm2ga4I3wAIws3sDDmkYCHHYK1DYqwoO4YknCtD2GnHTYHUtMi7jHCO68kNfxhN8w"
		const uintQpylP2j = BigInt("29")
		const BACMARSLPTOKENPooll9Eh7Br = await BACMARSLPTOKENPool.new(stringeiwKtKl, stringq1OI06e, uintQpylP2j, {from: accounts[0]});
		const uintyGL5fp4 = BigInt("825")
		const uintoJK9RXw = BigInt("1068")
		const uint256i7GtC3f = await BACMARSLPTOKENPooll9Eh7Br.notifyRewardAmount.call(uintyGL5fp4, {from: accounts[5]});
		const stringWPiSlca = await BACMARSLPTOKENPooll9Eh7Br.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPooll9Eh7Br.exit.call({from: accounts[2]});
		const uint256FcBYzt = await BACMARSLPTOKENPooll9Eh7Br.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256HBUddN = await BACMARSLPTOKENPooll9Eh7Br.totalSupply.call({from: accounts[0]});
		const uint256LzhHav0 = await BACMARSLPTOKENPooll9Eh7Br.notifyRewardAmount.call(uintoJK9RXw, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWVC3edQ = "wt3egGbmhDV1hpJzyDOmr4Qhp5VkJb3rprJBjuOiOgzmbit573bfLvYsdtFrtKMSGTNr4R9mwSWglLChK7ENUsLv5UV"
		const stringxB9YxD = "rep0wqWd2zwjKCrHal0bki5QG2hAw2tbUoCcog97jymsuIIfAlq0hjKRRhwgUcPhM6GD8OoEHsAgo2VqFDxcDgeOradCw6fi"
		const uintDItQPQh = BigInt("85")
		const BACMARSLPTOKENPoolXc8SDbf = await BACMARSLPTOKENPool.new(stringWVC3edQ, stringxB9YxD, uintDItQPQh, {from: accounts[2]});
		const uintxGClYV = BigInt("1051")
		const stringDRw33A2 = await BACMARSLPTOKENPoolXc8SDbf.name.call({from: accounts[4]});
		const uint256wam4dd = await BACMARSLPTOKENPoolXc8SDbf.stake.call(uintxGClYV, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQ868V18 = "SwEaB3nN6f2PowDytrntNTMLmOYmOOsIUz2clYFBtsKPJs"
		const stringMMrRw9J = "rNilHaYMbSbwAdoejXOe7kb1M22yMo0qN3hAPwiQkV2Tw2NHzx28uCeXaZq"
		const uintcF31lnb = BigInt("93")
		const BACMARSLPTOKENPoolTySt5zQ = await BACMARSLPTOKENPool.new(stringQ868V18, stringMMrRw9J, uintcF31lnb, {from: "0x0000000000000000000000000000000000000001"});
		const byteHZeSdKc = "0x07020f2012030f1a0f1f0f15001b1300070304101d11171f14040c1f1f1b0511"
		const byteO5NKYva = "0x130a1314091c1c150e100f1f1b0f03001f20010a1b161b1e170b0a070a0b100d"
		const uintA6R218 = BigInt("21")
		const uintx8Gdv3F = BigInt("1731")
		const uintZNxgmeA = BigInt("212")
		await BACMARSLPTOKENPoolTySt5zQ.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256nvZUoG4 = await BACMARSLPTOKENPoolTySt5zQ.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolTySt5zQ.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolTySt5zQ.nonReentrant.call({from: accounts[2]});
		const uint256gZLgIy = await BACMARSLPTOKENPoolTySt5zQ.totalSupply.call({from: accounts[4]});
		const uint256Zd48eH = await BACMARSLPTOKENPoolTySt5zQ.stakeWithPermit.call(uintZNxgmeA, uintx8Gdv3F, uintA6R218, byteO5NKYva, byteHZeSdKc, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcZEsGkr = "ga34GsOo9w8vYQ3Bs6gqkUrsaf3TGNcl3R6I2G5HpKBL"
		const stringjRMzZPO = "ila8EISlRTr57b7nJ6nl0NECiix9YyrxuX55AGneWXfJ3FWe9CQVhYyC3GEvLqwmVSH1QYhxkfSNi"
		const uintiQYAsQx = BigInt("35")
		const BACMARSLPTOKENPoollhDBADi = await BACMARSLPTOKENPool.new(stringcZEsGkr, stringjRMzZPO, uintiQYAsQx, {from: accounts[5]});
		const uintLBxpQCf = BigInt("537")
		const uint256PTwDPC2 = await BACMARSLPTOKENPoollhDBADi.rewardPerToken.call({from: accounts[4]});
		const uint256nm1I0Du = await BACMARSLPTOKENPoollhDBADi.stake.call(uintLBxpQCf, {from: accounts[3]});
		const uint256D1kkiT7 = await BACMARSLPTOKENPoollhDBADi.totalSupply.call({from: accounts[0]});
		await BACMARSLPTOKENPoollhDBADi.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdSw0vgQ = "Oni7EYVK6GMTIzNd5guVx8kqrPRHMHdha3SAB2m93WIvgHFDxeLdOj2ageHQs0"
		const stringrk3fjhh = "Jf4Mr3AADMcpRyanHPTH4aK6HZ8Lx3TOLDzI"
		const uintHjJGhFG = BigInt("32")
		const BACMARSLPTOKENPoolnW3F2QY = await BACMARSLPTOKENPool.new(stringdSw0vgQ, stringrk3fjhh, uintHjJGhFG, {from: accounts[3]});
		const addressxpTR4V8 = accounts[2]
		const uint256BBCLat3 = await BACMARSLPTOKENPoolnW3F2QY.balanceOf.call(addressxpTR4V8, {from: accounts[4]});
		const stringdeKwIbv = await BACMARSLPTOKENPoolnW3F2QY.name.call({from: accounts[5]});
		const uint256SgPjttw = await BACMARSLPTOKENPoolnW3F2QY.getRewardForDuration.call({from: accounts[3]});
		const uint256OBLj5E9 = await BACMARSLPTOKENPoolnW3F2QY.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdI4b6Y2 = accounts[0]
		const addresstmVltDb = accounts[0]
		const addressvGbGeR7 = accounts[5]
		const BACMARSLPTOKENPoolG8cvo0j = await BACMARSLPTOKENPool.new(addressdI4b6Y2, addresstmVltDb, addressvGbGeR7, {from: accounts[1]});
		const addressRsp79qq = accounts[1]
		const uintObS5wv4 = BigInt("1907")
		const uintuAHjDvn = BigInt("177")
//		await BACMARSLPTOKENPoolG8cvo0j.getReward.call({from: accounts[5]});
//		const uint256roICq1 = await BACMARSLPTOKENPoolG8cvo0j.balanceOf.call(addressRsp79qq, {from: accounts[4]});
//		const uint256rg9kBjf = await BACMARSLPTOKENPoolG8cvo0j.notifyRewardAmount.call(uintObS5wv4, {from: accounts[0]});
//		const uint256WHRbCh = await BACMARSLPTOKENPoolG8cvo0j.getRewardForDuration.call({from: accounts[0]});
//		const uint256C2znr6 = await BACMARSLPTOKENPoolG8cvo0j.stake.call(uintuAHjDvn, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolG8cvo0j.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPWjMGsc = "if1EkxxJoCcwn0fklNvBpNMe86KaWoFkvcn65LWc3fq5MmjdNywpNnI9DJxxxRHCwB3D8wK5Fggie8omVMTPEQKikuXvzcQEQi"
		const stringCCDYPNb = "BgfAkssHXB4tFq4zSLbHcArZuYuxeqUgywTyc"
		const uintV5KkdFO = BigInt("241")
		const BACMARSLPTOKENPoolsgJBkl2 = await BACMARSLPTOKENPool.new(stringPWjMGsc, stringCCDYPNb, uintV5KkdFO, {from: accounts[0]});
		const uintXf424q = BigInt("633")
		const uint256KdjCvsH = await BACMARSLPTOKENPoolsgJBkl2.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256ULZ4W8q = await BACMARSLPTOKENPoolsgJBkl2.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256oPbuFFZ = await BACMARSLPTOKENPoolsgJBkl2.withdraw.call(uintXf424q, {from: accounts[1]});
		await BACMARSLPTOKENPoolsgJBkl2.getReward.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPsndWI = "laV48Bb18WaPaB7L85L"
		const stringDQ1gRP6 = "sVVlK"
		const uintOGTjlP = BigInt("123")
		const BACMARSLPTOKENPoolaBJ6BOE = await BACMARSLPTOKENPool.new(stringPsndWI, stringDQ1gRP6, uintOGTjlP, {from: accounts[4]});
		const uintGXADJZs = BigInt("1958")
		const uintv3g4FQQ = BigInt("506")
		const uint256MRF6873 = await BACMARSLPTOKENPoolaBJ6BOE.stake.call(uintGXADJZs, {from: accounts[0]});
		const uint256GJshjla = await BACMARSLPTOKENPoolaBJ6BOE.notifyRewardAmount.call(uintv3g4FQQ, {from: accounts[2]});
		const uint8DbOZzc = await BACMARSLPTOKENPoolaBJ6BOE.decimals.call({from: accounts[5]});
		const uint8bFj5nj = await BACMARSLPTOKENPoolaBJ6BOE.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkZ3WbQ0 = "Pyl0ze1u0dh9QfybknFfM9WQL1qkdFxnZXHj3"
		const stringUGtdl9m = "Z5t91JyR89N28c9bUXSaiimMYpMpuEAPuj72AXukZeiDMolbxVE35OHaaUbEFXiNcG1v7L"
		const uintGufXw1V = BigInt("178")
		const BACMARSLPTOKENPoolDnRCcW9 = await BACMARSLPTOKENPool.new(stringkZ3WbQ0, stringUGtdl9m, uintGufXw1V, {from: accounts[1]});
		const uint2562PoPes = await BACMARSLPTOKENPoolDnRCcW9.rewardPerToken.call({from: accounts[0]});
		await BACMARSLPTOKENPoolDnRCcW9.getReward.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringr55PS0m = "twDYFq3kH9hSaQ1C3BcaYbAGroomH2sTIWkzay"
		const stringfmkEoLa = "JD"
		const uintZHq3Gz = BigInt("184")
		const BACMARSLPTOKENPool4Fmrxz = await BACMARSLPTOKENPool.new(stringr55PS0m, stringfmkEoLa, uintZHq3Gz, {from: accounts[5]});
		const uintMeFLy1T = BigInt("516")
		const addressZ2V0UmR = accounts[4]
		const uint256JwrntIn = await BACMARSLPTOKENPool4Fmrxz.notifyRewardAmount.call(uintMeFLy1T, {from: accounts[2]});
		await BACMARSLPTOKENPool4Fmrxz.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256zGtxwqZ = await BACMARSLPTOKENPool4Fmrxz.earned.call(addressZ2V0UmR, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRbIAr4p = "JK4g4dMNO4fG7G3Uv6QKU41XNNGpJtId8G2NWJLCxKYHAWNsJgAvwCmX9KxLRONu8mwG6aUd62L"
		const stringSOohgu1 = "dLqUe"
		const uintVRnTtEV = BigInt("170")
		const BACMARSLPTOKENPoolcT6XZi7 = await BACMARSLPTOKENPool.new(stringRbIAr4p, stringSOohgu1, uintVRnTtEV, {from: accounts[3]});
		const uint80ar0Y = BigInt("2046")
		await BACMARSLPTOKENPoolcT6XZi7.nonReentrant.call({from: accounts[3]});
		const uint256VPxCT4D = await BACMARSLPTOKENPoolcT6XZi7.stake.call(uint80ar0Y, {from: accounts[0]});
		await BACMARSLPTOKENPoolcT6XZi7.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringv9oUMR = "DKqHHeh8lN62lOjqGoAdzBS4yNytvwbVuPDY1aD"
		const stringREMh29m = "TD4zT2QAqrzXGt298sQwciOHyNk8bOJ43mEyBiAX8njrQYEgcGMmyWmDoHEyu63MovQn"
		const uintCoW9Jkk = BigInt("42")
		const BACMARSLPTOKENPoolZz5FrT = await BACMARSLPTOKENPool.new(stringv9oUMR, stringREMh29m, uintCoW9Jkk, {from: accounts[1]});
		const addressSLgOn3q = accounts[2]
		const uint256eun4Zy3 = await BACMARSLPTOKENPoolZz5FrT.getRewardForDuration.call({from: accounts[1]});
		const uint256AJ5UC1l = await BACMARSLPTOKENPoolZz5FrT.balanceOf.call(addressSLgOn3q, {from: accounts[2]});
		const stringRWO0dRJ = await BACMARSLPTOKENPoolZz5FrT.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolZz5FrT.nonReentrant.call({from: accounts[3]});
		const stringz8n87Ks = await BACMARSLPTOKENPoolZz5FrT.name.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkCi751b = "z31wakGc6inF3MnU8RGXY73q5GKW3jHBTDz2yttlS1YtKMjZ3EnnHY5fMHg"
		const stringJvHD5jY = "yQo6cPtv9isyXl7Xn76GW4CCyhdYu7XmOPwBg5QwVc2pmd4i0U5kPW5C17QtCRv7la7AflUYqD8YAbKC8xeb"
		const uintmzdfcVa = BigInt("55")
		const BACMARSLPTOKENPoolIkIoP5i = await BACMARSLPTOKENPool.new(stringkCi751b, stringJvHD5jY, uintmzdfcVa, {from: accounts[3]});
		const uintoQwGlp = BigInt("1663")
		const stringZE6Xdpv = await BACMARSLPTOKENPoolIkIoP5i.name.call({from: accounts[4]});
		const uint8hQLNf4t = await BACMARSLPTOKENPoolIkIoP5i.decimals.call({from: accounts[4]});
		const uint256BJ7rKkp = await BACMARSLPTOKENPoolIkIoP5i.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolIkIoP5i.nonReentrant.call({from: accounts[4]});
		const uint256IuXhUzt = await BACMARSLPTOKENPoolIkIoP5i.stake.call(uintoQwGlp, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfEHQx7m = "xDY2lmQteA1pyO22D6X9P1DXMBM56TpaIDsTTfKwAWFtuQj1xC4NuhUJtMfheAExpyL"
		const stringKtnF5mm = "cu0Et4KexqmlXGxB8RGbGHiTOzAG3DHcCUSiGlm"
		const uintW3646Dd = BigInt("73")
		const BACMARSLPTOKENPoolkw8BoI9 = await BACMARSLPTOKENPool.new(stringfEHQx7m, stringKtnF5mm, uintW3646Dd, {from: accounts[2]});
		const uintyuB7LVO = BigInt("332")
		const uintvRmEoNY = BigInt("1450")
		const uint256vBnGYq = await BACMARSLPTOKENPoolkw8BoI9.withdraw.call(uintyuB7LVO, {from: accounts[3]});
		const uint256tnQkTzH = await BACMARSLPTOKENPoolkw8BoI9.rewardPerToken.call({from: accounts[5]});
		const uint256fEDgRPi = await BACMARSLPTOKENPoolkw8BoI9.getRewardForDuration.call({from: accounts[2]});
		const uint256PmwondM = await BACMARSLPTOKENPoolkw8BoI9.notifyRewardAmount.call(uintvRmEoNY, {from: accounts[3]});
		const uint25608NzmS = await BACMARSLPTOKENPoolkw8BoI9.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringX4uIXYN = "hemtifT2wZucSIGL6cKifS3ByCXKemGYAp2aCIuXbOYGRXujgPARrlxC86y1DETr2webNm"
		const string9lRV3h = "op3OtxmF4dEoqQC3JwqqQ5Fk4PcIQ7op2EqsxiJMT1geVIncU576NkID61PzRlPGe7QXkFiiIgeuaE2bf7VLN5bUq"
		const uintfnTuGAE = BigInt("248")
		const BACMARSLPTOKENPoolqwIsrZO = await BACMARSLPTOKENPool.new(stringX4uIXYN, string9lRV3h, uintfnTuGAE, {from: accounts[3]});
		await BACMARSLPTOKENPoolqwIsrZO.onlyRewardsDistribution.call({from: accounts[4]});
		const string3Qm6Ol = await BACMARSLPTOKENPoolqwIsrZO.symbol.call({from: accounts[3]});
		await BACMARSLPTOKENPoolqwIsrZO.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoyk6yL8 = "VkEUOmY6DGyTvdkpB6Fsq"
		const stringfJ1YQR = "Nx3zXKDvsEZap"
		const uintN02WWiG = BigInt("210")
		const BACMARSLPTOKENPooleOsIXh = await BACMARSLPTOKENPool.new(stringoyk6yL8, stringfJ1YQR, uintN02WWiG, {from: accounts[2]});
		const addressbsOpbnA = accounts[0]
		const addressTggfGpF = accounts[0]
		const uint256q2QggwT = await BACMARSLPTOKENPooleOsIXh.balanceOf.call(addressbsOpbnA, {from: accounts[4]});
		const uint256lIw1Pl9 = await BACMARSLPTOKENPooleOsIXh.balanceOf.call(addressTggfGpF, {from: accounts[0]});
		const stringYe4u4L = await BACMARSLPTOKENPooleOsIXh.name.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLM3TSus = "IiQxiT4wXdZDDCQfHHmWPnxAs3Fbm0jjpoWNv5kPNhN9kjpKNPxK869UqMvUfJMF7UQ4alCrhq7gZtMDirAmnQr3orxiv5h"
		const stringBZeYr2S = "DhHVm6Jr4anH5WnLIbd5Dm2DXGx3ipovBycRm3xucoETGAHPo1N3AkpCdmSWjoQ92GVa2nyEuYjkwvuSIKvT6Z8ddbV7PdQ"
		const uintqyjvoZm = BigInt("56")
		const BACMARSLPTOKENPoolPhvMUec = await BACMARSLPTOKENPool.new(stringLM3TSus, stringBZeYr2S, uintqyjvoZm, {from: accounts[0]});
		const uintnmZVX88 = BigInt("302")
		const uinteQVsg9h = BigInt("459")
		const uint256LGmTCEN = await BACMARSLPTOKENPoolPhvMUec.notifyRewardAmount.call(uintnmZVX88, {from: accounts[5]});
		const uint256nZdFsFo = await BACMARSLPTOKENPoolPhvMUec.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256LhNuVs = await BACMARSLPTOKENPoolPhvMUec.notifyRewardAmount.call(uinteQVsg9h, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxO3FnEa = "APiwvqaa9XkxeXTyG1EwwzfXnmPj9HrW926fHS"
		const stringtlKAVLk = "c2MlN69izOWYNRMttNVJFy11nqg93"
		const uintBugaDLu = BigInt("138")
		const BACMARSLPTOKENPoolrg3t2aD = await BACMARSLPTOKENPool.new(stringxO3FnEa, stringtlKAVLk, uintBugaDLu, {from: accounts[2]});
		const uintqlxgY96 = BigInt("1350")
		const uintn6hfAMv = BigInt("1099")
		await BACMARSLPTOKENPoolrg3t2aD.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256W09nV9P = await BACMARSLPTOKENPoolrg3t2aD.notifyRewardAmount.call(uintqlxgY96, {from: accounts[4]});
		const uint256QSUN7O = await BACMARSLPTOKENPoolrg3t2aD.getRewardForDuration.call({from: accounts[2]});
		const uint256OQtdPjF = await BACMARSLPTOKENPoolrg3t2aD.notifyRewardAmount.call(uintn6hfAMv, {from: accounts[3]});
		const stringDzsGhQ = await BACMARSLPTOKENPoolrg3t2aD.symbol.call({from: accounts[5]});
		const uint8jZJJTcQ = await BACMARSLPTOKENPoolrg3t2aD.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPIqmqqk = "W1NeFljUwyYSiUFk5d4t4HdMOkiJQjj7n2bv1IGAzgQ8iRfmEX1HLqIjvxAi7hY9Hkxnd4yp5RtRfKZTTRVEWLWnWgfo68v"
		const stringL894aYU = "autKgiTRVISUfJfhDljZd5Ybal6mThjbFhjUGkL"
		const uintK1FLWJH = BigInt("206")
		const BACMARSLPTOKENPoolxxRcspt = await BACMARSLPTOKENPool.new(stringPIqmqqk, stringL894aYU, uintK1FLWJH, {from: accounts[5]});
		const uintvCmId8 = BigInt("1538")
		const uintmBoiRBK = BigInt("502")
		const uint256XydY1ET = await BACMARSLPTOKENPoolxxRcspt.withdraw.call(uintvCmId8, {from: accounts[1]});
		const stringaNnyhG = await BACMARSLPTOKENPoolxxRcspt.symbol.call({from: accounts[3]});
		const stringBn1eDy = await BACMARSLPTOKENPoolxxRcspt.symbol.call({from: accounts[1]});
		const uint256ceu1mT = await BACMARSLPTOKENPoolxxRcspt.getRewardForDuration.call({from: accounts[1]});
		const uint256HAhnjqA = await BACMARSLPTOKENPoolxxRcspt.withdraw.call(uintmBoiRBK, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbmw3vDb = "Jt60r2bEw1UYTPfyjejGsp4QfGmfNdIio0s5lU4T"
		const stringwSngn6M = "EeCrzs14gfQL5WJOmnhbaKOj2bbCY3cRYglYEbRCxOPSp8FH7WG6qwaiqWCmkTEFyq23Jfluh"
		const uintb2E8ZP1 = BigInt("98")
		const BACMARSLPTOKENPoolI5yKrfQ = await BACMARSLPTOKENPool.new(stringbmw3vDb, stringwSngn6M, uintb2E8ZP1, {from: accounts[4]});
		const byteHPYFAOw = "0x041a0a1c061711040f0a151f1f1d0b120e0106140d0e0e0a191615160311130a"
		const bytehAiNhfw = "0x131d1b0213130d02090e110f0b1b00120118000517131502110c11011e021207"
		const uintPLwP1CS = BigInt("113")
		const uintbWMb2k = BigInt("803")
		const uintDndBKDh = BigInt("858")
		const uint256Dseumrn = await BACMARSLPTOKENPoolI5yKrfQ.getRewardForDuration.call({from: accounts[3]});
		const uint256UYrMKXL = await BACMARSLPTOKENPoolI5yKrfQ.stakeWithPermit.call(uintDndBKDh, uintbWMb2k, uintPLwP1CS, bytehAiNhfw, byteHPYFAOw, {from: accounts[4]});
		await BACMARSLPTOKENPoolI5yKrfQ.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolI5yKrfQ.getReward.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMUOlDXX = "9tbhbRPjv99FKmQBYnbLHwSZ18hvhqbhrj4vMJSxuHjAmmQE8R2QpDJXEmUXYG6tcAJe"
		const stringaRELzru = "mbFydxze9N6XalADsQ3Fiikm3fYUife0piMbQjXrELbpK7LBdkWp"
		const uintfDzDkSd = BigInt("152")
		const BACMARSLPTOKENPoolWBggP0 = await BACMARSLPTOKENPool.new(stringMUOlDXX, stringaRELzru, uintfDzDkSd, {from: accounts[2]});
		const uintE1Ir40S = BigInt("1555")
		const stringtTQ2dsI = await BACMARSLPTOKENPoolWBggP0.symbol.call({from: accounts[4]});
		const uint256t9pwgkM = await BACMARSLPTOKENPoolWBggP0.stake.call(uintE1Ir40S, {from: accounts[0]});
		await BACMARSLPTOKENPoolWBggP0.getReward.call({from: accounts[3]});
		const stringa0Imcx = await BACMARSLPTOKENPoolWBggP0.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolWBggP0.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLoxBZWE = "Cn9hkIOLiPGB4zAdeTah9oIjVN80wqYQ3BjtcyfK5vvNC117VKmA59nsyDIRXENJQBKk5h0BWmgP6AVNz98P7g19r6"
		const stringBJmocpo = "Vfe18tFGObIYDsBScLDZJAwFgX4elC6Cgh7rExcI14LWyJmL27Bo27xKdDCdcyd"
		const uintnQxOX5s = BigInt("69")
		const BACMARSLPTOKENPooljAMggqa = await BACMARSLPTOKENPool.new(stringLoxBZWE, stringBJmocpo, uintnQxOX5s, {from: accounts[2]});
		const bytekTrsZGP = "0x081d0a030a01080e190a0f05110a1b051b14110a14170c16151b070f13040f0c"
		const byteGWtdQqI = "0x1d051f02030a0502080318041d0105111f0c1a09130d1012000e101611191519"
		const uintrHCVCv = BigInt("154")
		const uintH2PD16C = BigInt("1210")
		const uintROnAW2L = BigInt("258")
		await BACMARSLPTOKENPooljAMggqa.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256xKnu0j3 = await BACMARSLPTOKENPooljAMggqa.stakeWithPermit.call(uintROnAW2L, uintH2PD16C, uintrHCVCv, byteGWtdQqI, bytekTrsZGP, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLsvojzR = "Wmdm"
		const stringGEETdDP = "tY5kGXhSzQjMYpfY4ZpjJsHQeIfahNIEgYpbj2qcZDhU72hjNEML83fyim1Lep6QKKqnJ7zAcVpUXixMD9oYU3q"
		const uintuS3ZWT2 = BigInt("170")
		const BACMARSLPTOKENPoolVqf0uyQ = await BACMARSLPTOKENPool.new(stringLsvojzR, stringGEETdDP, uintuS3ZWT2, {from: accounts[1]});
		const uintqrH5ORX = BigInt("1441")
		const uintq2ljN3L = BigInt("25")
		await BACMARSLPTOKENPoolVqf0uyQ.getReward.call({from: accounts[5]});
		const uint256CCXZ0Xl = await BACMARSLPTOKENPoolVqf0uyQ.withdraw.call(uintqrH5ORX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y1NtA6G = await BACMARSLPTOKENPoolVqf0uyQ.rewardPerToken.call({from: accounts[1]});
		const uint256JoUfO5L = await BACMARSLPTOKENPoolVqf0uyQ.rewardPerToken.call({from: accounts[5]});
		const uint256huvAJWv = await BACMARSLPTOKENPoolVqf0uyQ.withdraw.call(uintq2ljN3L, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUynpepP = "Cs2XpbiWq91xeasyWFCFJYgnQJGLuhJFmGKqvdXYt5bE9g3zBDKnOBQYsmKO"
		const stringkhlnvol = "k2GisPdH7wH8syLkuS1381R2sNNle2XLq36YoWoZlKNxxzEo4UubM61EEQ77rvA7LmXL"
		const uintlsA1wn = BigInt("59")
		const BACMARSLPTOKENPoolUNpEy15 = await BACMARSLPTOKENPool.new(stringUynpepP, stringkhlnvol, uintlsA1wn, {from: accounts[4]});
		const addressckuTTWo = accounts[2]
		const addressRiaoL2 = "0x0000000000000000000000000000000000000001"
		const addressPZofGkz = accounts[4]
		const addresshphewsz = await BACMARSLPTOKENPoolUNpEy15.updateReward.call(addressckuTTWo, {from: accounts[3]});
		const uint256PxG84gB = await BACMARSLPTOKENPoolUNpEy15.balanceOf.call(addressRiaoL2, {from: accounts[3]});
		const uint256aNdAzyu = await BACMARSLPTOKENPoolUNpEy15.totalSupply.call({from: accounts[0]});
		const stringtjWPum = await BACMARSLPTOKENPoolUNpEy15.symbol.call({from: accounts[5]});
		const uint256A7snhit = await BACMARSLPTOKENPoolUNpEy15.balanceOf.call(addressPZofGkz, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOX3jwyn = "HAltVkhDO8ym1BsommBGHpH2UAKO3Vwi14dvvseA6Zp3PEqKOuh9FCiD8i4uTE7iqMuMNt0"
		const stringWcsB7qL = "PkeqXa2dNShGsTupTmh27aKvA26YdyExG6Xr58Epnjh9sM3hy"
		const uintxnH9CTf = BigInt("245")
		const BACMARSLPTOKENPoola2b5q4l = await BACMARSLPTOKENPool.new(stringOX3jwyn, stringWcsB7qL, uintxnH9CTf, {from: accounts[3]});
		const uintuojDIC = BigInt("1499")
		const uintFMPGNPM = BigInt("1354")
		const stringoeq94QF = await BACMARSLPTOKENPoola2b5q4l.symbol.call({from: accounts[0]});
		const uint8TQzhog = await BACMARSLPTOKENPoola2b5q4l.decimals.call({from: accounts[4]});
		const uint256UAbk26j = await BACMARSLPTOKENPoola2b5q4l.stake.call(uintuojDIC, {from: accounts[1]});
		const uint256PpGIBEF = await BACMARSLPTOKENPoola2b5q4l.stake.call(uintFMPGNPM, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtAGhX4 = "MvpwcCEuEgXYuZxgeOZ67M52J88relDmG3meZm2INaEkUCTUshPggvSmCDkGMyxn0HQGu7u4vH2J"
		const stringFp0uP3B = "sMosvFh2za5PdPhbgPpXcg7Ms17vEcVg5RRkgWPJujLNwpYhMG5n5qypSV96"
		const uintm7xEwrB = BigInt("113")
		const BACMARSLPTOKENPoolvcogBr = await BACMARSLPTOKENPool.new(stringtAGhX4, stringFp0uP3B, uintm7xEwrB, {from: accounts[5]});
		const uintpF5IgMs = BigInt("916")
		const uint256l12lrAl = await BACMARSLPTOKENPoolvcogBr.notifyRewardAmount.call(uintpF5IgMs, {from: accounts[3]});
		await BACMARSLPTOKENPoolvcogBr.onlyRewardsDistribution.call({from: accounts[2]});
		const stringwalEdZC = await BACMARSLPTOKENPoolvcogBr.name.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkAkLQxq = "d6wJLqhvnzNDtFCwxwV4or4jligeClIXNNPJ9mU"
		const stringyUA5kMZ = "6avPA1rB5kkhptIKL"
		const uintLHMOdfl = BigInt("183")
		const BACMARSLPTOKENPoolqbe10rX = await BACMARSLPTOKENPool.new(stringkAkLQxq, stringyUA5kMZ, uintLHMOdfl, {from: "0x0000000000000000000000000000000000000001"});
		const uintkLG94n0 = BigInt("1458")
		const addressVaGlMdK = accounts[3]
		const uint256AdM5i5K = await BACMARSLPTOKENPoolqbe10rX.rewardPerToken.call({from: accounts[2]});
		const uint256gGD8XjN = await BACMARSLPTOKENPoolqbe10rX.withdraw.call(uintkLG94n0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Oy7Nttz = await BACMARSLPTOKENPoolqbe10rX.balanceOf.call(addressVaGlMdK, {from: accounts[5]});
		const uint256PSR5P5I = await BACMARSLPTOKENPoolqbe10rX.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEuCRarX = "M3FEhypLvaf5"
		const stringtXzZCwo = "ct5vnMSniQN1ieuMDePfXs5SYkJTtH8fefSxN2dXZTcppRmKqQw6gXaUufm1U1yfAOUSXv9p8MSRQmNtVmJb7"
		const uintuKTeRFR = BigInt("22")
		const BACMARSLPTOKENPoolSXLne8h = await BACMARSLPTOKENPool.new(stringEuCRarX, stringtXzZCwo, uintuKTeRFR, {from: accounts[2]});
		const address6UipbH = accounts[2]
		const uintVNulxUi = BigInt("107")
		const addressl5X36AR = await BACMARSLPTOKENPoolSXLne8h.updateReward.call(address6UipbH, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolSXLne8h.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ilE6hAZ = await BACMARSLPTOKENPoolSXLne8h.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolSXLne8h.getReward.call({from: accounts[3]});
		const uint256Z5sdbGQ = await BACMARSLPTOKENPoolSXLne8h.totalSupply.call({from: accounts[5]});
		const uint256vJWXX6C = await BACMARSLPTOKENPoolSXLne8h.stake.call(uintVNulxUi, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdh7MAcx = "ZNJNRvHuBkWKxtnzUMiCFmBe"
		const stringnUG51u = "d4pmEsmjyLyKYKwPwS4krfahOg3ILlzDiOPWvY8"
		const uintdsAtbK = BigInt("62")
		const BACMARSLPTOKENPoolY1FPgNv = await BACMARSLPTOKENPool.new(stringdh7MAcx, stringnUG51u, uintdsAtbK, {from: accounts[1]});
		const addressFscfVRI = accounts[3]
		const addressU41iBAv = accounts[4]
		const uint256dGHVEOI = await BACMARSLPTOKENPoolY1FPgNv.earned.call(addressFscfVRI, {from: accounts[3]});
		const addressq5v5uxL = await BACMARSLPTOKENPoolY1FPgNv.updateReward.call(addressU41iBAv, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZZfv2cf = "jmVTCXuefyIPGaoPAyN5wHwArn1FXdis5FEZcE7MrJNSiV98ozaT9Kl1ScMO5iuV"
		const stringHKsY5Sm = "CCnJcylaovtUvQoJp6t8PcO02BI4"
		const uintMNpbEOc = BigInt("86")
		const BACMARSLPTOKENPoolOC5SEAn = await BACMARSLPTOKENPool.new(stringZZfv2cf, stringHKsY5Sm, uintMNpbEOc, {from: accounts[3]});
		const uint256hrSwfJu = await BACMARSLPTOKENPoolOC5SEAn.rewardPerToken.call({from: accounts[0]});
		const stringY2Rd4e = await BACMARSLPTOKENPoolOC5SEAn.symbol.call({from: accounts[5]});
		const uint256bPHdCLY = await BACMARSLPTOKENPoolOC5SEAn.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolOC5SEAn.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxy8XhaY = "lzAS5nr3d4b7Qbrgs4uxIXXeWkTlXLn5b3iIpENtf4zQxbLfDKoDHw317bxgKcxmt"
		const stringS3ECUhf = "wqJpHUtBlYGm3QSqodKb1LNSX97fDdbsaegcGpsQrZorwv31G73TXzuwtchRAAIVgehDXHKE5JuA49yDqTPd6M"
		const uinttySnajT = BigInt("88")
		const BACMARSLPTOKENPoolsfzxh1 = await BACMARSLPTOKENPool.new(stringxy8XhaY, stringS3ECUhf, uinttySnajT, {from: accounts[0]});
		const bytetbFLir = "0x1716071303141317071f0e061b091801061d0609011d1e0d1a14031415061218"
		const byteIeO4mh = "0x0512130e071110190a13120a060f1b14020f1505090c09131505090304170708"
		const uintYJn7wgt = BigInt("48")
		const uintqhVjiY = BigInt("1839")
		const uintOrJI4t = BigInt("1707")
		const addressDgiOTVD = "0x0000000000000000000000000000000000000001"
		const uint256t2yBa5i = await BACMARSLPTOKENPoolsfzxh1.stakeWithPermit.call(uintOrJI4t, uintqhVjiY, uintYJn7wgt, byteIeO4mh, bytetbFLir, {from: accounts[0]});
		const uint256AJoFhgn = await BACMARSLPTOKENPoolsfzxh1.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PX5IAy7 = await BACMARSLPTOKENPoolsfzxh1.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256SOUQzfu = await BACMARSLPTOKENPoolsfzxh1.earned.call(addressDgiOTVD, {from: accounts[2]});
		await BACMARSLPTOKENPoolsfzxh1.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjVYkWxE = "9GdAEoch6n7aoIwx8Rc7wr2ndPBGMO3"
		const stringrwOwgd = "Tx2g9"
		const uintbK3Lmc7 = BigInt("206")
		const BACMARSLPTOKENPoolyMRbkW0 = await BACMARSLPTOKENPool.new(stringjVYkWxE, stringrwOwgd, uintbK3Lmc7, {from: accounts[0]});
		const uintnYwgl0 = BigInt("1614")
		const uintIevWcqa = BigInt("1698")
		const uint256wWtZLsq = await BACMARSLPTOKENPoolyMRbkW0.stake.call(uintnYwgl0, {from: accounts[3]});
		const uint256IfKGHoC = await BACMARSLPTOKENPoolyMRbkW0.notifyRewardAmount.call(uintIevWcqa, {from: accounts[2]});
		await BACMARSLPTOKENPoolyMRbkW0.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256Oy9B23g = await BACMARSLPTOKENPoolyMRbkW0.getRewardForDuration.call({from: accounts[5]});
		const uint256QQASgHM = await BACMARSLPTOKENPoolyMRbkW0.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPoolyMRbkW0.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringv6r9Ehn = "NXDL9Fns7ejufqg1tvOQJd82lCbfJHY"
		const stringB5yyYQn = "s6ykO3Hs7kvR7zsjDraBoTE9mRoKx0giDT9kbMth8kAy57dFA6FRaVAEz"
		const uintICghHR7 = BigInt("33")
		const BACMARSLPTOKENPoolE0s8REY = await BACMARSLPTOKENPool.new(stringv6r9Ehn, stringB5yyYQn, uintICghHR7, {from: accounts[2]});
		const byteB7eoQRq = "0x130f07141307121514110a1f1411141301040a071c031513050a06060c121d1e"
		const bytep0od8ZJ = "0x1e02101c1216200512091315101e1a01050d0c0e061705091f191301151d160f"
		const uinttjLldrY = BigInt("69")
		const uintOh1VDUg = BigInt("973")
		const uintWF1Uqkh = BigInt("361")
		const addresscQS24ZY = accounts[0]
		const uintUU65Wtb = BigInt("689")
		const addressyceE2rO = accounts[2]
		const uint256wFAlhNY = await BACMARSLPTOKENPoolE0s8REY.stakeWithPermit.call(uintWF1Uqkh, uintOh1VDUg, uinttjLldrY, bytep0od8ZJ, byteB7eoQRq, {from: accounts[2]});
		const address7S0mSP = await BACMARSLPTOKENPoolE0s8REY.updateReward.call(addresscQS24ZY, {from: accounts[0]});
		const uint256v9Sz3tc = await BACMARSLPTOKENPoolE0s8REY.notifyRewardAmount.call(uintUU65Wtb, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolE0s8REY.onlyRewardsDistribution.call({from: accounts[0]});
		const addressLhuYTPI = await BACMARSLPTOKENPoolE0s8REY.updateReward.call(addressyceE2rO, {from: accounts[4]});
	});
})