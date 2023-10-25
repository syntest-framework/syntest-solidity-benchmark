const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressCXRp9RA = accounts[1]
		const addressdwbqKg = accounts[4]
		const addressU5euqzq = accounts[2]
		const addressQqdR7Hf = accounts[2]
		const uintb76f0n = BigInt("1235")
		const FairStockEquitynVdO0Gg = await FairStockEquity.new(addressCXRp9RA, addressdwbqKg, addressU5euqzq, addressQqdR7Hf, uintb76f0n, {from: accounts[2]});
		const uintOL4yA4D = BigInt("319")
		const uintb6RcYsc = BigInt("105")
		const uintWWd4LbZ = BigInt("1449")
		const uintCkWZRaf = BigInt("1729")
		const uintd4f6aDt = BigInt("1693")
		const addressJkc7ZHA = "0x0000000000000000000000000000000000000001"
		const uinti0rr48t = BigInt("2022")
//		const uint256E8LboI6 = await FairStockEquitynVdO0Gg.setProfitPercentBonus.call(uintOL4yA4D, {from: accounts[0]});
//		const addressuhlJDTd = await FairStockEquitynVdO0Gg.business.call(addressJkc7ZHA, uintd4f6aDt, uintCkWZRaf, uintWWd4LbZ, uintb6RcYsc, {from: accounts[2]});
//		const uint256eSNbe1 = await FairStockEquitynVdO0Gg.depositBonus.call(uinti0rr48t, {from: accounts[0]});

		await expect(FairStockEquitynVdO0Gg.setProfitPercentBonus.call(uintOL4yA4D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxjhhUZX = "0x0000000000000000000000000000000000000001"
		const addressBOc0zFp = accounts[2]
		const addressAjKtQHf = accounts[1]
		const addressK66nzMi = accounts[4]
		const uintcOIFH8J = BigInt("1239")
		const FairStockEquityUS7ZVXT = await FairStockEquity.new(addressxjhhUZX, addressBOc0zFp, addressAjKtQHf, addressK66nzMi, uintcOIFH8J, {from: accounts[0]});
		const uintaF0iwnZ = BigInt("470")
		const uintObgphnp = BigInt("603")
		const addressozCwfh = accounts[3]
		const uintFKz3kIr = BigInt("72")
		const addressKwIyXYy = accounts[5]
//		const uint256JiIKnNV = await FairStockEquityUS7ZVXT.setGasFeeForCallback.call(uintaF0iwnZ, {from: accounts[4]});
//		const addresstLJrIEY = await FairStockEquityUS7ZVXT.depositLPT.call(addressozCwfh, uintObgphnp, {from: accounts[5]});
//		const addressSfsB2ox = await FairStockEquityUS7ZVXT.withdrawLPT.call(addressKwIyXYy, uintFKz3kIr, {from: accounts[0]});

		await expect(FairStockEquityUS7ZVXT.setGasFeeForCallback.call(uintaF0iwnZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressY3dMr68 = "0x0000000000000000000000000000000000000001"
		const addressTvS0fza = accounts[2]
		const addresspjrQMH1 = accounts[4]
		const addressGLxgM9 = accounts[3]
		const uinty9SMovp = BigInt("1622")
		const FairStockEquityN53NC3A = await FairStockEquity.new(addressY3dMr68, addressTvS0fza, addresspjrQMH1, addressGLxgM9, uinty9SMovp, {from: "0x0000000000000000000000000000000000000001"});
		const uintSoA6h7w = BigInt("1377")
		const addressk7LUjNK = accounts[4]
		const uintAInlk1R = BigInt("402")
		const addressXUKYvwX = accounts[0]
		const uintBwfv4e = BigInt("830")
		const addressvHJTccV = await FairStockEquityN53NC3A.withdrawLPT.call(addressk7LUjNK, uintSoA6h7w, {from: accounts[1]});
		const addressI7NinEi = await FairStockEquityN53NC3A.withdrawLPT.call(addressXUKYvwX, uintAInlk1R, {from: "0x0000000000000000000000000000000000000001"});
		const uint256l4iWNNP = await FairStockEquityN53NC3A.setGasFeeForCallback.call(uintBwfv4e, {from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const addressp2ITOy9 = accounts[1]
		const addressYXTSF5A = accounts[2]
		const addressaF8SNqw = accounts[4]
		const addressSkPDnFR = "0x0000000000000000000000000000000000000001"
		const uinteOcmCVv = BigInt("333")
		const FairStockEquityWFfJDKs = await FairStockEquity.new(addressp2ITOy9, addressYXTSF5A, addressaF8SNqw, addressSkPDnFR, uinteOcmCVv, {from: accounts[4]});
		const uintUJ7qAer = BigInt("195")
		const uintaUt3kEf = BigInt("1660")
		const uinttXifzo1 = BigInt("1902")
		const uintWrJ3EVJ = BigInt("1817")
		const addressFADG0yL = accounts[2]
		const uintWwjCXss = BigInt("471")
		const addresseH26tH6 = accounts[2]
//		const uint256p55RPl1 = await FairStockEquityWFfJDKs.reduceShare.call(uintUJ7qAer, {from: accounts[3]});
//		const uint256YDjdEUK = await FairStockEquityWFfJDKs.depositBonus.call(uintaUt3kEf, {from: accounts[0]});
//		const uint256wwlTCAz = await FairStockEquityWFfJDKs.getCostAmount.call(uinttXifzo1, {from: accounts[1]});
//		const addressjJc13J = await FairStockEquityWFfJDKs.depositLPT.call(addressFADG0yL, uintWrJ3EVJ, {from: accounts[1]});
//		const addressH320W7P = await FairStockEquityWFfJDKs.withdrawLPT.call(addresseH26tH6, uintWwjCXss, {from: accounts[0]});

		await expect(FairStockEquityWFfJDKs.reduceShare.call(uintUJ7qAer, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbrK0AFj = accounts[0]
		const address75Sdhj = accounts[1]
		const addressX1JBYKQ = accounts[0]
		const addresswvbeya = accounts[1]
		const uintee77dmK = BigInt("1963")
		const FairStockEquityxf7okI2 = await FairStockEquity.new(addressbrK0AFj, address75Sdhj, addressX1JBYKQ, addresswvbeya, uintee77dmK, {from: accounts[3]});
		const uintIpsVwX = BigInt("713")
		const uintqgsaAjq = BigInt("1402")
		const uintJ8swQtH = BigInt("470")
		const uintigM4kn6 = BigInt("735")
		const uintwCyju72 = BigInt("1431")
		const uintdojlYQe = BigInt("628")
//		await FairStockEquityxf7okI2.withdrawBonus.call({from: accounts[1]});
//		const uint256tAV3pzh = await FairStockEquityxf7okI2.setProfitPercentPJ.call(uintIpsVwX, {from: accounts[2]});
//		const uint256Z5m9xmj = await FairStockEquityxf7okI2.setDegree.call(uintdojlYQe, uintwCyju72, uintigM4kn6, uintJ8swQtH, uintqgsaAjq, {from: accounts[1]});
//		await FairStockEquityxf7okI2.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquityxf7okI2.withdrawBonus.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressf24cMzG = accounts[2]
		const addressOnsC8U9 = accounts[0]
		const addressEHAMG5e = accounts[1]
		const addresswAwmBY2 = accounts[3]
		const uintDUXAjj6 = BigInt("499")
		const FairStockEquityxEr6A4g = await FairStockEquity.new(addressf24cMzG, addressOnsC8U9, addressEHAMG5e, addresswAwmBY2, uintDUXAjj6, {from: accounts[4]});
		const uintYuyBaPd = BigInt("947")
		const uints1uX9QU = BigInt("1341")
		const addressBapevA4 = accounts[1]
		const uintDrBBYn0 = BigInt("776")
		const uintLpPqlS2 = BigInt("1355")
		const uint1E8kWZ = BigInt("378")
//		const addressoxg2m71 = await FairStockEquityxEr6A4g.withdrawMTCallback.call(addressBapevA4, uints1uX9QU, uintYuyBaPd, {from: accounts[1]});
//		const uint256g4TkQTj = await FairStockEquityxEr6A4g.depositBonus.call(uintDrBBYn0, {from: accounts[4]});
//		await FairStockEquityxEr6A4g.f.call({from: accounts[5]});
//		const uint256qtKUfOq = await FairStockEquityxEr6A4g.getCostAmount.call(uintLpPqlS2, {from: accounts[3]});
//		const uint256uVfK6nV = await FairStockEquityxEr6A4g.setProfitPercentMT.call(uint1E8kWZ, {from: accounts[2]});

		await expect(FairStockEquityxEr6A4g.withdrawMTCallback.call(addressBapevA4, uints1uX9QU, uintYuyBaPd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAoHPzr = accounts[0]
		const addressn9VIeCN = accounts[2]
		const addressWZmJkjo = accounts[4]
		const addressFS5FihL = "0x0000000000000000000000000000000000000001"
		const uintEh0uEb8 = BigInt("1979")
		const FairStockEquityuD3757E = await FairStockEquity.new(addressAoHPzr, addressn9VIeCN, addressWZmJkjo, addressFS5FihL, uintEh0uEb8, {from: accounts[4]});
		const uintEiNxKYp = BigInt("17")
		const addressm9QdDkQ = accounts[3]
		const uintm73xzQ7 = BigInt("260")
		const uintLujmMhj = BigInt("1222")
		const uintK1jRqI = BigInt("458")
		const uintxq3gY1Y = BigInt("220")
		const uintxvOvh6d = BigInt("897")
//		await FairStockEquityuD3757E.withdrawMT.call({from: accounts[2]});
//		const addressgMy2EW = await FairStockEquityuD3757E.withdrawLPT.call(addressm9QdDkQ, uintEiNxKYp, {from: accounts[4]});
//		const uint256rlTDi4T = await FairStockEquityuD3757E.setDegree.call(uintxvOvh6d, uintxq3gY1Y, uintK1jRqI, uintLujmMhj, uintm73xzQ7, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityuD3757E.checkStart.call({from: accounts[3]});

		await expect(FairStockEquityuD3757E.withdrawMT.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressE8YAGNS = accounts[3]
		const addressqN5won8 = accounts[3]
		const addressfajuO6u = accounts[2]
		const addresszo0elF = accounts[2]
		const uintaqb6iea = BigInt("1148")
		const FairStockEquityJ8Wyii = await FairStockEquity.new(addressE8YAGNS, addressqN5won8, addressfajuO6u, addresszo0elF, uintaqb6iea, {from: accounts[0]});
		const uintDp1wpr = BigInt("1356")
		const uintp5UlZCC = BigInt("1258")
		const uintEJtCsxY = BigInt("784")
		const uintCZ8zmcq = BigInt("1130")
		const uintWGoOhjl = BigInt("76")
		const uint256dHsH0o = await FairStockEquityJ8Wyii.getCostAmount.call(uintDp1wpr, {from: accounts[2]});
//		const uint256ENXfmP = await FairStockEquityJ8Wyii.reduceShare.call(uintp5UlZCC, {from: accounts[2]});
//		const uint256tMOo2jb = await FairStockEquityJ8Wyii.setProfitPercentMT.call(uintEJtCsxY, {from: accounts[0]});
//		const uint256h9up9iZ = await FairStockEquityJ8Wyii.depositBonus.call(uintCZ8zmcq, {from: accounts[3]});
//		const uint256E7EqnzG = await FairStockEquityJ8Wyii.setProfitPercentMT.call(uintWGoOhjl, {from: accounts[2]});

		await expect(FairStockEquityJ8Wyii.reduceShare.call(uintp5UlZCC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshbDTFut = accounts[3]
		const addressdZiMVx = accounts[3]
		const addressw5Kckyl = accounts[2]
		const addressfpXviZG = accounts[2]
		const uintOsRRhxA = BigInt("1148")
		const FairStockEquityJ8Wyii = await FairStockEquity.new(addresshbDTFut, addressdZiMVx, addressw5Kckyl, addressfpXviZG, uintOsRRhxA, {from: accounts[0]});
		const uintoZGuKrf = BigInt("1356")
		const uintpDISHQY = BigInt("1403")
		const uint0mslB3 = BigInt("1823")
		const uintglUWzxN = BigInt("1130")
		const uintqTaBxaS = BigInt("76")
		const uint256dHsH0o = await FairStockEquityJ8Wyii.getCostAmount.call(uintoZGuKrf, {from: accounts[2]});
		const uint256tMOo2jb = await FairStockEquityJ8Wyii.setProfitPercentMT.call(uintpDISHQY, {from: accounts[0]});
//		const uint256snvvVvV = await FairStockEquityJ8Wyii.invest.call(uint0mslB3, {from: accounts[0]});
//		const uint256h9up9iZ = await FairStockEquityJ8Wyii.depositBonus.call(uintglUWzxN, {from: accounts[3]});
//		const uint256E7EqnzG = await FairStockEquityJ8Wyii.setProfitPercentMT.call(uintqTaBxaS, {from: accounts[2]});

		await expect(FairStockEquityJ8Wyii.invest.call(uint0mslB3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressezQjbWK = accounts[3]
		const addressKR0xwez = accounts[3]
		const addressoNXWrvs = accounts[2]
		const addresshsLM3F = accounts[2]
		const uintbxEdWTb = BigInt("1148")
		const FairStockEquityJ8Wyii = await FairStockEquity.new(addressezQjbWK, addressKR0xwez, addressoNXWrvs, addresshsLM3F, uintbxEdWTb, {from: accounts[0]});
		const uintbzm11sU = BigInt("1124")
		const uintVnUWjuQ = BigInt("1138")
		const uintOeAQhB6 = BigInt("652")
		const uintFBa33My = BigInt("1306")
		const addressdze26zM = accounts[5]
		const uintlcxIeHP = BigInt("1356")
		const uintPjmeor = BigInt("1258")
		const uintiTBirQZ = BigInt("784")
		const uintfLTNE69 = BigInt("1129")
		const uintV5raD6f = BigInt("994")
		const uintmkKTCAj = BigInt("76")
//		const addressZr1bCv = await FairStockEquityJ8Wyii.business.call(addressdze26zM, uintFBa33My, uintOeAQhB6, uintVnUWjuQ, uintbzm11sU, {from: accounts[2]});
//		const uint256dHsH0o = await FairStockEquityJ8Wyii.getCostAmount.call(uintlcxIeHP, {from: accounts[2]});
//		const uint256ENXfmP = await FairStockEquityJ8Wyii.reduceShare.call(uintPjmeor, {from: accounts[2]});
//		const uint256tMOo2jb = await FairStockEquityJ8Wyii.setProfitPercentMT.call(uintiTBirQZ, {from: accounts[0]});
//		await FairStockEquityJ8Wyii.checkStart.call({from: accounts[0]});
//		const uint256h9up9iZ = await FairStockEquityJ8Wyii.depositBonus.call(uintfLTNE69, {from: accounts[3]});
//		const uint256QXlNuYc = await FairStockEquityJ8Wyii.reduceShare.call(uintV5raD6f, {from: accounts[4]});
//		const uint256E7EqnzG = await FairStockEquityJ8Wyii.setProfitPercentMT.call(uintmkKTCAj, {from: accounts[2]});

		await expect(FairStockEquityJ8Wyii.business.call(addressdze26zM, uintFBa33My, uintOeAQhB6, uintVnUWjuQ, uintbzm11sU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressOFdKdOX = accounts[3]
		const addressmwR3ksT = accounts[3]
		const addressH9V8qOc = accounts[2]
		const addressDlhUnf8 = accounts[2]
		const uintmmOwzya = BigInt("1148")
		const FairStockEquityJ8Wyii = await FairStockEquity.new(addressOFdKdOX, addressmwR3ksT, addressH9V8qOc, addressDlhUnf8, uintmmOwzya, {from: accounts[0]});
		const uintOKqQSpe = BigInt("1356")
		const uinthbvARfz = BigInt("1625")
		const uintaeiK24f = BigInt("1258")
		const uintToKIQDw = BigInt("750")
		const uintvQX9dIy = BigInt("1130")
		const uintUVIimAX = BigInt("76")
		const uint256dHsH0o = await FairStockEquityJ8Wyii.getCostAmount.call(uintOKqQSpe, {from: accounts[2]});
//		const uint256PfQQgs7 = await FairStockEquityJ8Wyii.depositBonus.call(uinthbvARfz, {from: accounts[2]});
//		const uint256ENXfmP = await FairStockEquityJ8Wyii.reduceShare.call(uintaeiK24f, {from: accounts[2]});
//		const uint256tMOo2jb = await FairStockEquityJ8Wyii.setProfitPercentMT.call(uintToKIQDw, {from: accounts[0]});
//		const uint256h9up9iZ = await FairStockEquityJ8Wyii.depositBonus.call(uintvQX9dIy, {from: accounts[3]});
//		const uint256E7EqnzG = await FairStockEquityJ8Wyii.setProfitPercentMT.call(uintUVIimAX, {from: accounts[2]});

		await expect(FairStockEquityJ8Wyii.depositBonus.call(uinthbvARfz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmXinyWo = accounts[1]
		const addressoq6W1PI = accounts[1]
		const addressbUx0QWl = accounts[0]
		const addressYZDNPg = accounts[4]
		const uintOpnk0Q = BigInt("992")
		const FairStockEquityssTcbPC = await FairStockEquity.new(addressmXinyWo, addressoq6W1PI, addressbUx0QWl, addressYZDNPg, uintOpnk0Q, {from: accounts[2]});
//		await FairStockEquityssTcbPC.onlyDataSource.call({from: accounts[2]});
//		await FairStockEquityssTcbPC.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityssTcbPC.onlyDataSource.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmY0UfsX = accounts[2]
		const addressOtSNJCj = accounts[1]
		const addressMngb1VQ = accounts[3]
		const addressbeYFzQg = accounts[2]
		const uintgtSq2Go = BigInt("1196")
		const FairStockEquitynbCqjXd = await FairStockEquity.new(addressmY0UfsX, addressOtSNJCj, addressMngb1VQ, addressbeYFzQg, uintgtSq2Go, {from: accounts[1]});
		const uintjKL5ec4 = BigInt("1127")
		const uintwrkX88L = BigInt("1033")
		const uintpUKaZ0h = BigInt("1772")
		const uints9eoOS3 = BigInt("35")
		const uintNqUg3WX = BigInt("1898")
		const addressVOAXSVD = accounts[3]
//		const uint256cCMGn0w = await FairStockEquitynbCqjXd.setStartTime.call(uintjKL5ec4, {from: accounts[1]});
//		const uint256fAgtT19 = await FairStockEquitynbCqjXd.setStartTime.call(uintwrkX88L, {from: accounts[3]});
//		const uint256PQDR49 = await FairStockEquitynbCqjXd.setProfitPercentMT.call(uintpUKaZ0h, {from: accounts[1]});
//		const addresskmn1rx = await FairStockEquitynbCqjXd.withdrawBonusCallback.call(addressVOAXSVD, uintNqUg3WX, uints9eoOS3, {from: accounts[4]});

		await expect(FairStockEquitynbCqjXd.setStartTime.call(uintjKL5ec4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmnI7Iw = accounts[1]
		const addresswyKOmuu = accounts[4]
		const addressYSYPqb = accounts[2]
		const addressi3AQuUU = accounts[2]
		const uintbgMl5ng = BigInt("1235")
		const FairStockEquitynVdO0Gg = await FairStockEquity.new(addressmnI7Iw, addresswyKOmuu, addressYSYPqb, addressi3AQuUU, uintbgMl5ng, {from: accounts[2]});
		const uintE6HN5t = BigInt("692")
		const uintxB9vVLE = BigInt("52")
//		await FairStockEquitynVdO0Gg.withdrawPJ.call({from: accounts[2]});
//		const uint256Iy7sbM5 = await FairStockEquitynVdO0Gg.setProfitPercentPJ.call(uintE6HN5t, {from: accounts[3]});
//		await FairStockEquitynVdO0Gg.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256E8LboI6 = await FairStockEquitynVdO0Gg.setProfitPercentBonus.call(uintxB9vVLE, {from: accounts[0]});

		await expect(FairStockEquitynVdO0Gg.withdrawPJ.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressl2gTT7H = accounts[1]
		const addressr1PBeie = accounts[4]
		const addressdI1sM04 = accounts[2]
		const addressMgclsFl = accounts[2]
		const uintvpbJc1W = BigInt("1235")
		const FairStockEquitynVdO0Gg = await FairStockEquity.new(addressl2gTT7H, addressr1PBeie, addressdI1sM04, addressMgclsFl, uintvpbJc1W, {from: accounts[2]});
		const uintt4mDSLp = BigInt("1282")
		const addressKWJAjch = accounts[1]
		const uinty9XLshN = BigInt("1292")
		const uintdoZmxiC = BigInt("1264")
		const uintmWG96Lq = BigInt("3")
		const uintTevDVx3 = BigInt("1566")
		const addresssgjc1gc = accounts[2]
		const uintyGWnWkP = BigInt("746")
//		const addressPqTZYZ = await FairStockEquitynVdO0Gg.withdrawLPT.call(addressKWJAjch, uintt4mDSLp, {from: accounts[0]});
//		const addressVnQ0WXr = await FairStockEquitynVdO0Gg.business.call(addresssgjc1gc, uintTevDVx3, uintmWG96Lq, uintdoZmxiC, uinty9XLshN, {from: accounts[5]});
//		const uint256E8LboI6 = await FairStockEquitynVdO0Gg.setProfitPercentBonus.call(uintyGWnWkP, {from: accounts[0]});

		await expect(FairStockEquitynVdO0Gg.withdrawLPT.call(addressKWJAjch, uintt4mDSLp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressR36oNRy = accounts[3]
		const addressFzRc4hA = accounts[3]
		const addresse714Cyb = accounts[2]
		const addressSeniYw8 = accounts[2]
		const uintK53Npgg = BigInt("1148")
		const FairStockEquityJ8Wyii = await FairStockEquity.new(addressR36oNRy, addressFzRc4hA, addresse714Cyb, addressSeniYw8, uintK53Npgg, {from: accounts[0]});
		const uintP8lBQhR = BigInt("1356")
		const uintKNgahfz = BigInt("101")
		const uintE73JwL0 = BigInt("248")
		const uint5ZIQYm = BigInt("268")
		const uintFhUucTD = BigInt("1228")
		const addressZfb9npM = accounts[2]
		const uintvGCaZKF = BigInt("73")
//		await FairStockEquityJ8Wyii.f.call({from: accounts[3]});
//		const uint256dHsH0o = await FairStockEquityJ8Wyii.getCostAmount.call(uintP8lBQhR, {from: accounts[2]});
//		const addressNTDs8FO = await FairStockEquityJ8Wyii.business.call(addressZfb9npM, uintFhUucTD, uint5ZIQYm, uintE73JwL0, uintKNgahfz, {from: accounts[4]});
//		const uint256E7EqnzG = await FairStockEquityJ8Wyii.setProfitPercentMT.call(uintvGCaZKF, {from: accounts[2]});

		await expect(FairStockEquityJ8Wyii.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressLi2Nkd8 = accounts[3]
		const addressLPbfutT = accounts[3]
		const addressdXarr9r = accounts[2]
		const addressxgHq6A = accounts[2]
		const uintNEzIKs7 = BigInt("1148")
		const FairStockEquityJ8Wyii = await FairStockEquity.new(addressLi2Nkd8, addressLPbfutT, addressdXarr9r, addressxgHq6A, uintNEzIKs7, {from: accounts[0]});
		const uintRadFWO2 = BigInt("1356")
		const uintEYpIR9a = BigInt("1910")
		const uintk2qzHKP = BigInt("356")
		const addresskNeOoFQ = accounts[4]
		const uintYXZtEzX = BigInt("101")
		const uintiRHgdZy = BigInt("248")
		const uintNrWENgq = BigInt("268")
		const uintwkOUVO2 = BigInt("1193")
		const addresssf8wi50 = accounts[3]
		const uintfcPqUuz = BigInt("73")
		const uint256dHsH0o = await FairStockEquityJ8Wyii.getCostAmount.call(uintRadFWO2, {from: accounts[2]});
//		const addressfsvMGW = await FairStockEquityJ8Wyii.withdrawBonusCallback.call(addresskNeOoFQ, uintk2qzHKP, uintEYpIR9a, {from: accounts[2]});
//		const addressNTDs8FO = await FairStockEquityJ8Wyii.business.call(addresssf8wi50, uintwkOUVO2, uintNrWENgq, uintiRHgdZy, uintYXZtEzX, {from: accounts[4]});
//		await FairStockEquityJ8Wyii.withdrawPJ.call({from: accounts[1]});
//		const uint256E7EqnzG = await FairStockEquityJ8Wyii.setProfitPercentMT.call(uintfcPqUuz, {from: accounts[2]});

		await expect(FairStockEquityJ8Wyii.withdrawBonusCallback.call(addresskNeOoFQ, uintk2qzHKP, uintEYpIR9a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressURnlxO0 = accounts[4]
		const addressR6pvi5x = "0x0000000000000000000000000000000000000001"
		const addressqmdr57c = accounts[0]
		const addressWTNy10K = accounts[5]
		const uintnmk2Re = BigInt("407")
		const FairStockEquitysK0fkR2 = await FairStockEquity.new(addressURnlxO0, addressR6pvi5x, addressqmdr57c, addressWTNy10K, uintnmk2Re, {from: accounts[1]});
		const uintsIeg5IJ = BigInt("1039")
		const addressI0mtyN = accounts[2]
		const uintQikVaoO = BigInt("1417")
		const uintE8hVek = BigInt("308")
		const uintPbsL55K = BigInt("1301")
		const uintDiXzZcJ = BigInt("58")
		const addresspo7QB6X = accounts[4]
		const addressVNgyXP8 = accounts[1]
//		const addressqXdS9fB = await FairStockEquitysK0fkR2.depositLPT.call(addressI0mtyN, uintsIeg5IJ, {from: accounts[0]});
//		const addressriNj8ik = await FairStockEquitysK0fkR2.business.call(addresspo7QB6X, uintDiXzZcJ, uintPbsL55K, uintE8hVek, uintQikVaoO, {from: accounts[1]});
//		const addressLiouVtr = await FairStockEquitysK0fkR2.setDataSource.call(addressVNgyXP8, {from: accounts[2]});

		await expect(FairStockEquitysK0fkR2.depositLPT.call(addressI0mtyN, uintsIeg5IJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressRqtowQR = accounts[4]
		const addressn5Ou4FR = "0x0000000000000000000000000000000000000001"
		const addressFKc3d66 = accounts[0]
		const addressM6Fql9T = accounts[5]
		const uintXFv0HPr = BigInt("407")
		const FairStockEquitysK0fkR2 = await FairStockEquity.new(addressRqtowQR, addressn5Ou4FR, addressFKc3d66, addressM6Fql9T, uintXFv0HPr, {from: accounts[1]});
		const uintg6Qrdo = BigInt("1817")
		const uintJSGFfxt = BigInt("1568")
		const addressT0odcSw = accounts[2]
		const uintt0WZz45 = BigInt("1232")
		const addresspW2Hhgb = await FairStockEquitysK0fkR2.setModule.call(addressT0odcSw, uintJSGFfxt, uintg6Qrdo, {from: accounts[1]});
//		await FairStockEquitysK0fkR2.withdrawPJ.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256tVI4z9L = await FairStockEquitysK0fkR2.invest.call(uintt0WZz45, {from: accounts[4]});

		await expect(FairStockEquitysK0fkR2.withdrawPJ.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqr8GQhI = accounts[4]
		const addressAWZ7O0Y = "0x0000000000000000000000000000000000000001"
		const addressyZvHSmy = accounts[0]
		const addresssRYbmej = accounts[5]
		const uintGCTcAip = BigInt("407")
		const FairStockEquitysK0fkR2 = await FairStockEquity.new(addressqr8GQhI, addressAWZ7O0Y, addressyZvHSmy, addresssRYbmej, uintGCTcAip, {from: accounts[1]});
		const boolmvCw2sA = true
		const address5c55aB = accounts[1]
		const uintBdNPqbU = BigInt("98")
		const uintkSJW4Q6 = BigInt("1417")
		const uintvSLkFv4 = BigInt("308")
		const uintz41FtF = BigInt("1301")
		const uintwOjYBtp = BigInt("58")
		const addressYP196n5 = accounts[4]
		const address185aEz = await FairStockEquitysK0fkR2.setLPT.call(address5c55aB, boolmvCw2sA, {from: accounts[1]});
//		const uint256oAjgT0m = await FairStockEquitysK0fkR2.reduceShare.call(uintBdNPqbU, {from: "0x0000000000000000000000000000000000000001"});
//		const addressriNj8ik = await FairStockEquitysK0fkR2.business.call(addressYP196n5, uintwOjYBtp, uintz41FtF, uintvSLkFv4, uintkSJW4Q6, {from: accounts[1]});

		await expect(FairStockEquitysK0fkR2.reduceShare.call(uintBdNPqbU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressO3NDk3K = accounts[4]
		const addressrzckUYw = "0x0000000000000000000000000000000000000001"
		const addressrOKqER5 = accounts[0]
		const addresstepbKKj = accounts[5]
		const uintkNm9apV = BigInt("407")
		const FairStockEquitysK0fkR2 = await FairStockEquity.new(addressO3NDk3K, addressrzckUYw, addressrOKqER5, addresstepbKKj, uintkNm9apV, {from: accounts[1]});
		const uintZSUS5H = BigInt("1757")
		const uintivtn28F = BigInt("708")
		const addressiZMEPdx = accounts[1]
		const uintGPa7tbL = BigInt("1039")
		const addresspdjNGjp = accounts[6]
//		const addressMjq0dbH = await FairStockEquitysK0fkR2.withdrawMTCallback.call(addressiZMEPdx, uintivtn28F, uintZSUS5H, {from: accounts[5]});
//		const addressqXdS9fB = await FairStockEquitysK0fkR2.depositLPT.call(addresspdjNGjp, uintGPa7tbL, {from: accounts[0]});

		await expect(FairStockEquitysK0fkR2.withdrawMTCallback.call(addressiZMEPdx, uintivtn28F, uintZSUS5H, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUblC6y3 = accounts[4]
		const addresstXFHhj5 = "0x0000000000000000000000000000000000000001"
		const addresszyD7Ku6 = accounts[0]
		const addressi8IvZod = accounts[5]
		const uintEMlvM31 = BigInt("407")
		const FairStockEquitysK0fkR2 = await FairStockEquity.new(addressUblC6y3, addresstXFHhj5, addresszyD7Ku6, addressi8IvZod, uintEMlvM31, {from: accounts[1]});
		const uintv3robZM = BigInt("1417")
		const uintsxQNPnu = BigInt("308")
		const uintmbqC24B = BigInt("1570")
		const uintn4P6mUp = BigInt("0")
		const addressikGiWY7 = "0x0000000000000000000000000000000000000001"
//		const addressriNj8ik = await FairStockEquitysK0fkR2.business.call(addressikGiWY7, uintn4P6mUp, uintmbqC24B, uintsxQNPnu, uintv3robZM, {from: accounts[1]});

		await expect(FairStockEquitysK0fkR2.business.call(addressikGiWY7, uintn4P6mUp, uintmbqC24B, uintsxQNPnu, uintv3robZM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})