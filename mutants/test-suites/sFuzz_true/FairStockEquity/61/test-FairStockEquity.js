const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const address8hIC9w = accounts[0]
		const addressL3Ea1s5 = accounts[1]
		const addressmUBfGb = accounts[3]
		const addressGN6cnh0 = accounts[2]
		const uintFwpkKo = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(address8hIC9w, addressL3Ea1s5, addressmUBfGb, addressGN6cnh0, uintFwpkKo, {from: accounts[0]});
		const uintFvMtRap = BigInt("1268")
		const uintuJ5EUF4 = BigInt("281")
		const addressrUyV8M = accounts[0]
		const uintcudhAS = BigInt("583")
//		const addressKuCgoH = await FairStockEquitycvzu7MV.withdrawMTCallback.call(addressrUyV8M, uintuJ5EUF4, uintFvMtRap, {from: accounts[3]});
//		const uint256Dx4wXsR = await FairStockEquitycvzu7MV.setProfitPercentPJ.call(uintcudhAS, {from: accounts[0]});

		await expect(FairStockEquitycvzu7MV.withdrawMTCallback.call(addressrUyV8M, uintuJ5EUF4, uintFvMtRap, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressb2VFp5 = accounts[4]
		const addressMYuarc7 = "0x0000000000000000000000000000000000000001"
		const addressr59Xj8q = accounts[4]
		const addressfthsmhC = accounts[0]
		const uintMDp165f = BigInt("408")
		const FairStockEquitylMRT05J = await FairStockEquity.new(addressb2VFp5, addressMYuarc7, addressr59Xj8q, addressfthsmhC, uintMDp165f, {from: accounts[3]});
		const uintJKnCTA6 = BigInt("859")
		const uintvokYL2h = BigInt("1765")
		const uintzU3AGfN = BigInt("419")
		const addressKqs9thN = accounts[1]
		const uintvKXHBR9 = BigInt("103")
		const uintijs03IW = BigInt("1465")
//		const uint256pKAyHNH = await FairStockEquitylMRT05J.setStartTime.call(uintJKnCTA6, {from: accounts[0]});
//		await FairStockEquitylMRT05J.onlyDataSource.call({from: accounts[5]});
//		const addressPmV3C1C = await FairStockEquitylMRT05J.setModule.call(addressKqs9thN, uintzU3AGfN, uintvokYL2h, {from: accounts[3]});
//		const uint256wzufKcB = await FairStockEquitylMRT05J.invest.call(uintvKXHBR9, {from: accounts[4]});
//		const uint256RYyM1Zy = await FairStockEquitylMRT05J.bonus.call(uintijs03IW, {from: accounts[3]});

		await expect(FairStockEquitylMRT05J.setStartTime.call(uintJKnCTA6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTWns9Xm = accounts[3]
		const addressRiB2jx = accounts[4]
		const addressEINn9V = accounts[5]
		const addresszM8q4d = accounts[1]
		const uintTpwW5Yi = BigInt("95")
		const FairStockEquityBLwQY4o = await FairStockEquity.new(addressTWns9Xm, addressRiB2jx, addressEINn9V, addresszM8q4d, uintTpwW5Yi, {from: "0x0000000000000000000000000000000000000001"});
		const uintTtuiwnI = BigInt("759")
		const uintFDaBtfl = BigInt("1725")
		const uintxt9a3PN = BigInt("2004")
		const uintolWWhQc = BigInt("615")
		const uint256bRMMn7S = await FairStockEquityBLwQY4o.setProfitPercentMT.call(uintTtuiwnI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pkEAADq = await FairStockEquityBLwQY4o.setGasFeeForCallback.call(uintFDaBtfl, {from: accounts[5]});
		const uint256WQs0fna = await FairStockEquityBLwQY4o.setProfitPercentPJ.call(uintxt9a3PN, {from: accounts[4]});
		const uint256KGc0NiF = await FairStockEquityBLwQY4o.setGasFeeForCallback.call(uintolWWhQc, {from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addresszFWjwZJ = accounts[2]
		const addressycU1UX8 = accounts[4]
		const addressK6wErm4 = accounts[0]
		const addressPYSPgpo = accounts[0]
		const uintn6nWt6 = BigInt("1884")
		const FairStockEquitybpErLSa = await FairStockEquity.new(addresszFWjwZJ, addressycU1UX8, addressK6wErm4, addressPYSPgpo, uintn6nWt6, {from: accounts[5]});
		const uinthmp6LVq = BigInt("1822")
		const uintQAM4g8N = BigInt("134")
		const uintI8GjKap = BigInt("1263")
		const uintMJWxVEv = BigInt("1442")
		const addresst208Aq = "0x0000000000000000000000000000000000000001"
		const uintyghK9c9 = BigInt("374")
		const uintwl9R2ch = BigInt("1422")
		const uintkXh1Jp9 = BigInt("1925")
		const addressKhpUHbr = accounts[5]
		const uintwpB5Rl = BigInt("1935")
		const uintF2xVIou = BigInt("1137")
		const addressDqqIuul = accounts[4]
//		const addressuFrajyj = await FairStockEquitybpErLSa.business.call(addresst208Aq, uintMJWxVEv, uintI8GjKap, uintQAM4g8N, uinthmp6LVq, {from: accounts[5]});
//		const uint256JZKUtZg = await FairStockEquitybpErLSa.setProfitPercentMT.call(uintyghK9c9, {from: accounts[4]});
//		const addressiDFlckz = await FairStockEquitybpErLSa.withdrawMTCallback.call(addressKhpUHbr, uintkXh1Jp9, uintwl9R2ch, {from: accounts[3]});
//		const uint256w7E6cg = await FairStockEquitybpErLSa.setProfitPercentMT.call(uintwpB5Rl, {from: accounts[4]});
//		const addressEYa0Oh = await FairStockEquitybpErLSa.withdrawLPT.call(addressDqqIuul, uintF2xVIou, {from: accounts[4]});

		await expect(FairStockEquitybpErLSa.business.call(addresst208Aq, uintMJWxVEv, uintI8GjKap, uintQAM4g8N, uinthmp6LVq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEO73ji = accounts[3]
		const addressOxMOHv = accounts[2]
		const addressqKLbJhy = accounts[4]
		const addressretOP1F = accounts[3]
		const uintfxoVV0 = BigInt("859")
		const FairStockEquityRGXDqRB = await FairStockEquity.new(addressEO73ji, addressOxMOHv, addressqKLbJhy, addressretOP1F, uintfxoVV0, {from: accounts[1]});
		const uintCmuJUBH = BigInt("387")
		const uintPUQTgyx = BigInt("1552")
		const uintkRFzt9l = BigInt("943")
		const addressdZ44v1Q = accounts[2]
		const uintUYLdMsm = BigInt("1436")
//		const uint256eNqa0lI = await FairStockEquityRGXDqRB.setProfitPercentBonus.call(uintCmuJUBH, {from: accounts[0]});
//		const addresssUkCRY = await FairStockEquityRGXDqRB.setModule.call(addressdZ44v1Q, uintkRFzt9l, uintPUQTgyx, {from: accounts[0]});
//		const uint256dozglMX = await FairStockEquityRGXDqRB.getCostAmount.call(uintUYLdMsm, {from: accounts[1]});

		await expect(FairStockEquityRGXDqRB.setProfitPercentBonus.call(uintCmuJUBH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressu124xqA = accounts[3]
		const addressmwnTAC = accounts[2]
		const addresskEUVqNd = accounts[4]
		const addressYHNtNW2 = accounts[3]
		const uint9cW83P = BigInt("859")
		const FairStockEquityRGXDqRB = await FairStockEquity.new(addressu124xqA, addressmwnTAC, addresskEUVqNd, addressYHNtNW2, uint9cW83P, {from: accounts[1]});
		const uintQOHNsr6 = BigInt("1807")
		const uintVJUgi5B = BigInt("709")
		const uintwamgk5Y = BigInt("200")
		const addresswjsQEhL = accounts[4]
		const uintCjpnD7 = BigInt("387")
		const uinthHALHcL = BigInt("1235")
		const uintX3oG0TE = BigInt("1683")
		const addressgpU5eie = accounts[1]
		const uinthdNN9ii = BigInt("1436")
//		const uint256TpqgwPA = await FairStockEquityRGXDqRB.reduceShare.call(uintQOHNsr6, {from: accounts[0]});
//		const addressc2GLsSy = await FairStockEquityRGXDqRB.withdrawBonusCallback.call(addresswjsQEhL, uintwamgk5Y, uintVJUgi5B, {from: accounts[3]});
//		const uint256eNqa0lI = await FairStockEquityRGXDqRB.setProfitPercentBonus.call(uintCjpnD7, {from: accounts[0]});
//		const addressgoBVHay = await FairStockEquityRGXDqRB.withdrawBonusCallback.call(addressgpU5eie, uintX3oG0TE, uinthHALHcL, {from: accounts[3]});
//		const uint256dozglMX = await FairStockEquityRGXDqRB.getCostAmount.call(uinthdNN9ii, {from: accounts[1]});

		await expect(FairStockEquityRGXDqRB.reduceShare.call(uintQOHNsr6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresstfI7d3t = accounts[4]
		const addressxsRNMrj = accounts[5]
		const addressdqQCDJd = accounts[3]
		const addressU3CBUQr = accounts[3]
		const uintnIm1ouO = BigInt("1436")
		const FairStockEquityy4ebu3P = await FairStockEquity.new(addresstfI7d3t, addressxsRNMrj, addressdqQCDJd, addressU3CBUQr, uintnIm1ouO, {from: accounts[2]});
		const uintyKh1J2 = BigInt("690")
		const addressRQ0kZr5 = accounts[2]
		const uintLJc0bZK = BigInt("1699")
		const uintTPX2nE = BigInt("1787")
		const uintGzUPu4b = BigInt("1614")
		const uintod7uhmx = BigInt("490")
		const addressCPr21a3 = accounts[2]
		const uintfbFSEKm = BigInt("1642")
		const uinteEmaljq = BigInt("939")
		const uintZHj3ryU = BigInt("1162")
		const uintZPRkG86 = BigInt("1336")
		const uintfkMrITK = BigInt("837")
//		const addresssqJ0St8 = await FairStockEquityy4ebu3P.withdrawLPT.call(addressRQ0kZr5, uintyKh1J2, {from: accounts[2]});
//		const addresssK0GTd0 = await FairStockEquityy4ebu3P.business.call(addressCPr21a3, uintod7uhmx, uintGzUPu4b, uintTPX2nE, uintLJc0bZK, {from: accounts[3]});
//		const uint256MHZGZJl = await FairStockEquityy4ebu3P.setDegree.call(uintfkMrITK, uintZPRkG86, uintZHj3ryU, uinteEmaljq, uintfbFSEKm, {from: accounts[0]});
//		await FairStockEquityy4ebu3P.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityy4ebu3P.withdrawLPT.call(addressRQ0kZr5, uintyKh1J2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYjZM0I = accounts[0]
		const addressn9wKVVp = accounts[1]
		const addressnTNnqk7 = accounts[3]
		const addressYdTGtjL = accounts[2]
		const uintdqGKoyF = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressYjZM0I, addressn9wKVVp, addressnTNnqk7, addressYdTGtjL, uintdqGKoyF, {from: accounts[0]});
		const uintQt2eaoy = BigInt("464")
		const uintL5jxv6L = BigInt("1268")
		const uintZ1Etqfj = BigInt("281")
		const addressThYDhYD = accounts[1]
//		const uint256Q92Dtyk = await FairStockEquitycvzu7MV.invest.call(uintQt2eaoy, {from: accounts[0]});
//		await FairStockEquitycvzu7MV.withdrawBonus.call({from: accounts[2]});
//		const addressKuCgoH = await FairStockEquitycvzu7MV.withdrawMTCallback.call(addressThYDhYD, uintZ1Etqfj, uintL5jxv6L, {from: accounts[3]});

		await expect(FairStockEquitycvzu7MV.invest.call(uintQt2eaoy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressLzpjaQH = accounts[0]
		const addressKsBaqXg = accounts[1]
		const addressdZgkSQy = accounts[3]
		const addressVJgaLLL = accounts[2]
		const uintVt1gDKb = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressLzpjaQH, addressKsBaqXg, addressdZgkSQy, addressVJgaLLL, uintVt1gDKb, {from: accounts[0]});
		const uintR8CKYmf = BigInt("1268")
		const uinth3ozSpu = BigInt("281")
		const addressqVjJn7E = accounts[1]
//		await FairStockEquitycvzu7MV.withdrawBonus.call({from: accounts[2]});
//		const addressKuCgoH = await FairStockEquitycvzu7MV.withdrawMTCallback.call(addressqVjJn7E, uinth3ozSpu, uintR8CKYmf, {from: accounts[3]});

		await expect(FairStockEquitycvzu7MV.withdrawBonus.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZg4Bypf = accounts[0]
		const addressnNQ8T9B = accounts[1]
		const addressg4ABhAS = accounts[3]
		const addressoc70pdH = accounts[2]
		const uintCjt0qL = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressZg4Bypf, addressnNQ8T9B, addressg4ABhAS, addressoc70pdH, uintCjt0qL, {from: accounts[0]});
		const uintS79nMS = BigInt("494")
		const addressVf6u1DN = accounts[4]
		const uintN4GDo0H = BigInt("1268")
		const uintRg6PiR = BigInt("253")
		const addressmuRe8HC = accounts[0]
//		const addressjN1A8Co = await FairStockEquitycvzu7MV.depositLPT.call(addressVf6u1DN, uintS79nMS, {from: accounts[3]});
//		const addressKuCgoH = await FairStockEquitycvzu7MV.withdrawMTCallback.call(addressmuRe8HC, uintRg6PiR, uintN4GDo0H, {from: accounts[3]});

		await expect(FairStockEquitycvzu7MV.depositLPT.call(addressVf6u1DN, uintS79nMS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressITERtaD = accounts[0]
		const addressrYo8au0 = accounts[1]
		const addresseqj2Otm = accounts[3]
		const addressTdb6Nyy = accounts[2]
		const uintAPDR3Qo = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressITERtaD, addressrYo8au0, addresseqj2Otm, addressTdb6Nyy, uintAPDR3Qo, {from: accounts[0]});
		const uintaOOSU5k = BigInt("502")
		const uintAUw33Fn = BigInt("1969")
		const uintgt5zg0 = BigInt("1239")
		const uintZ1OElbL = BigInt("281")
		const addressK8PAFde = accounts[0]
//		await FairStockEquitycvzu7MV.withdrawPJ.call({from: accounts[0]});
//		const uint256pz4CaQa = await FairStockEquitycvzu7MV.setProfitPercentBonus.call(uintaOOSU5k, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mnAxOXV = await FairStockEquitycvzu7MV.setProfitPercentMT.call(uintAUw33Fn, {from: accounts[1]});
//		const addressKuCgoH = await FairStockEquitycvzu7MV.withdrawMTCallback.call(addressK8PAFde, uintZ1OElbL, uintgt5zg0, {from: accounts[3]});

		await expect(FairStockEquitycvzu7MV.withdrawPJ.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressepopXL = accounts[0]
		const addressfWQGcQb = accounts[1]
		const addressQG5KDok = accounts[3]
		const addressBXyMtoc = accounts[2]
		const uintYh9TbJf = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressepopXL, addressfWQGcQb, addressQG5KDok, addressBXyMtoc, uintYh9TbJf, {from: accounts[0]});
		const boolfJetHx = true
		const addressDunIRwz = accounts[3]
		const uintmWt7iQd = BigInt("99")
		const uintlqc8hNy = BigInt("110")
		const addressCLDxZkt = accounts[1]
		const uintFn5laml = BigInt("945")
//		await FairStockEquitycvzu7MV.onlyDataSource.call({from: accounts[4]});
//		const addressKIABkSG = await FairStockEquitycvzu7MV.setLPT.call(addressDunIRwz, boolfJetHx, {from: "0x0000000000000000000000000000000000000001"});
//		const addresss1D1AHv = await FairStockEquitycvzu7MV.setModule.call(addressCLDxZkt, uintlqc8hNy, uintmWt7iQd, {from: accounts[0]});
//		const uint256Q92Dtyk = await FairStockEquitycvzu7MV.invest.call(uintFn5laml, {from: accounts[0]});
//		await FairStockEquitycvzu7MV.withdrawBonus.call({from: accounts[2]});

		await expect(FairStockEquitycvzu7MV.onlyDataSource.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address0He0we = accounts[3]
		const addressnOxpI5V = accounts[0]
		const addressLJkupB8 = accounts[0]
		const addressVkle1qg = accounts[2]
		const uintFGY8Ed8 = BigInt("1936")
		const FairStockEquityoFe3pHw = await FairStockEquity.new(address0He0we, addressnOxpI5V, addressLJkupB8, addressVkle1qg, uintFGY8Ed8, {from: accounts[3]});
		const uintvyikUm = BigInt("196")
//		await FairStockEquityoFe3pHw.withdrawMT.call({from: accounts[4]});
//		const uint256Hy8shZ7 = await FairStockEquityoFe3pHw.reduceShare.call(uintvyikUm, {from: accounts[3]});

		await expect(FairStockEquityoFe3pHw.withdrawMT.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressiOnvOdp = accounts[0]
		const addressC0CbHJw = accounts[1]
		const addressWeQit8 = accounts[3]
		const addressrJ3RRNC = accounts[2]
		const uint8Q8k01 = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressiOnvOdp, addressC0CbHJw, addressWeQit8, addressrJ3RRNC, uint8Q8k01, {from: accounts[0]});
		const uintD0ajqC3 = BigInt("1500")
		const uintKCukZDr = BigInt("1631")
		const addressOZ6WZW = accounts[4]
		const uintM9gKJ7C = BigInt("1685")
//		const uint2562GTegG = await FairStockEquitycvzu7MV.bonus.call(uintD0ajqC3, {from: accounts[2]});
//		const addressjN1A8Co = await FairStockEquitycvzu7MV.depositLPT.call(addressOZ6WZW, uintKCukZDr, {from: accounts[3]});
//		const uint256PRPfHYV = await FairStockEquitycvzu7MV.invest.call(uintM9gKJ7C, {from: accounts[5]});

		await expect(FairStockEquitycvzu7MV.bonus.call(uintD0ajqC3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmKarYZb = accounts[0]
		const addressTTntjx = accounts[1]
		const addressZ5cdM7e = accounts[3]
		const addresse9ApRuy = accounts[2]
		const uintCMfs0ud = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressmKarYZb, addressTTntjx, addressZ5cdM7e, addresse9ApRuy, uintCMfs0ud, {from: accounts[0]});
		const uintmZgAjCn = BigInt("1757")
		const uintSJOKHu = BigInt("1268")
		const uintdvL2wbg = BigInt("281")
		const addressRrGY85 = accounts[2]
		const uintn4PgpIR = BigInt("1175")
//		const uint256RUqky0z = await FairStockEquitycvzu7MV.depositBonus.call(uintmZgAjCn, {from: accounts[4]});
//		const addressKuCgoH = await FairStockEquitycvzu7MV.withdrawMTCallback.call(addressRrGY85, uintdvL2wbg, uintSJOKHu, {from: accounts[3]});
//		const uint2569ecyqa = await FairStockEquitycvzu7MV.setGasFeeForCallback.call(uintn4PgpIR, {from: accounts[1]});

		await expect(FairStockEquitycvzu7MV.depositBonus.call(uintmZgAjCn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuGZMOj6 = accounts[0]
		const addressgVxlvgl = accounts[1]
		const addressYToYVYa = accounts[3]
		const addressf2LJzQq = accounts[2]
		const uintzur2OCv = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressuGZMOj6, addressgVxlvgl, addressYToYVYa, addressf2LJzQq, uintzur2OCv, {from: accounts[0]});
		const uintYGtHABs = BigInt("1991")
		const uintFuSQYyO = BigInt("1356")
		const addressEB3VqcH = accounts[0]
		const uintNbhTQ4y = BigInt("864")
		const uintORgi0ph = BigInt("2005")
		const addressUsuVvHE = await FairStockEquitycvzu7MV.setModule.call(addressEB3VqcH, uintFuSQYyO, uintYGtHABs, {from: accounts[0]});
//		const uint256Q92Dtyk = await FairStockEquitycvzu7MV.invest.call(uintNbhTQ4y, {from: accounts[0]});
//		const uint256Ithj0XG = await FairStockEquitycvzu7MV.depositBonus.call(uintORgi0ph, {from: accounts[2]});

		await expect(FairStockEquitycvzu7MV.invest.call(uintNbhTQ4y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUlfDOKE = accounts[0]
		const addressaxPqh4B = accounts[1]
		const addressQmIpEYX = accounts[3]
		const addressV8nvujb = accounts[2]
		const uintnmCMst = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressUlfDOKE, addressaxPqh4B, addressQmIpEYX, addressV8nvujb, uintnmCMst, {from: accounts[0]});
		const uintdn0wBKh = BigInt("1144")
		const uintN3VzT3w = BigInt("1268")
		const uintP4hksEC = BigInt("308")
		const addressMhklO97 = accounts[0]
		const uint256q2k4o1C = await FairStockEquitycvzu7MV.setStartTime.call(uintdn0wBKh, {from: accounts[0]});
//		const addressKuCgoH = await FairStockEquitycvzu7MV.withdrawMTCallback.call(addressMhklO97, uintP4hksEC, uintN3VzT3w, {from: accounts[3]});

		await expect(FairStockEquitycvzu7MV.withdrawMTCallback.call(addressMhklO97, uintP4hksEC, uintN3VzT3w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressujZYUja = accounts[0]
		const addressz2IZ4z9 = accounts[1]
		const addressPWLQIEQ = accounts[3]
		const addressbYvNVsp = accounts[2]
		const uintbPbUNBG = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressujZYUja, addressz2IZ4z9, addressPWLQIEQ, addressbYvNVsp, uintbPbUNBG, {from: accounts[0]});
		const uintbmTUIOA = BigInt("477")
		const uintW102sd2 = BigInt("328")
		const addressHjW4LpY = accounts[3]
		const uinta0hllG7 = BigInt("1284")
		const uintIQX9vdm = BigInt("281")
		const addressjfQF6Tc = accounts[0]
//		const addresslM7x2LG = await FairStockEquitycvzu7MV.withdrawMTCallback.call(addressHjW4LpY, uintW102sd2, uintbmTUIOA, {from: accounts[2]});
//		const addressKuCgoH = await FairStockEquitycvzu7MV.withdrawMTCallback.call(addressjfQF6Tc, uintIQX9vdm, uinta0hllG7, {from: accounts[3]});

		await expect(FairStockEquitycvzu7MV.withdrawMTCallback.call(addressHjW4LpY, uintW102sd2, uintbmTUIOA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszGh5HZq = accounts[0]
		const addressQSZ9BZ9 = accounts[1]
		const addressQf8Ok9b = accounts[3]
		const addresszn0g7lK = accounts[2]
		const uintMS1RV3 = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addresszGh5HZq, addressQSZ9BZ9, addressQf8Ok9b, addresszn0g7lK, uintMS1RV3, {from: accounts[0]});
		const uintxmrVlX1 = BigInt("685")
		const uintnAzW0Vc = BigInt("1125")
		const addressQh8iXhq = accounts[5]
		const uintHzbi0r = BigInt("1312")
		const addressTqD4ojb = accounts[3]
		const uintSqTiJGF = BigInt("857")
//		const addresswJMo711 = await FairStockEquitycvzu7MV.withdrawBonusCallback.call(addressQh8iXhq, uintnAzW0Vc, uintxmrVlX1, {from: accounts[2]});
//		const addressiG1HUX0 = await FairStockEquitycvzu7MV.withdrawLPT.call(addressTqD4ojb, uintHzbi0r, {from: accounts[4]});
//		const uint256Q92Dtyk = await FairStockEquitycvzu7MV.invest.call(uintSqTiJGF, {from: accounts[0]});

		await expect(FairStockEquitycvzu7MV.withdrawBonusCallback.call(addressQh8iXhq, uintnAzW0Vc, uintxmrVlX1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMQZiDCt = accounts[0]
		const addressLIuyPuQ = accounts[1]
		const addressXaUQlmD = accounts[3]
		const addresst2ehyBL = accounts[2]
		const uintnqyDcvP = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addressMQZiDCt, addressLIuyPuQ, addressXaUQlmD, addresst2ehyBL, uintnqyDcvP, {from: accounts[0]});
		const boolXVvS7QY = false
		const addressUcKFfgd = accounts[4]
		const uintjrhZrcN = BigInt("1398")
		const uintsoEGrG2 = BigInt("505")
		const addressTup9xrO = accounts[4]
		const uintPHPGVsA = BigInt("33")
		const addressA6zTXO = await FairStockEquitycvzu7MV.setLPT.call(addressUcKFfgd, boolXVvS7QY, {from: accounts[0]});
//		const uint256SCeYja = await FairStockEquitycvzu7MV.setStartTime.call(uintjrhZrcN, {from: accounts[5]});
//		const addressjN1A8Co = await FairStockEquitycvzu7MV.depositLPT.call(addressTup9xrO, uintsoEGrG2, {from: accounts[3]});
//		const uint256YMFn2Wx = await FairStockEquitycvzu7MV.setProfitPercentMT.call(uintPHPGVsA, {from: accounts[5]});

		await expect(FairStockEquitycvzu7MV.setStartTime.call(uintjrhZrcN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address3NpMXi = accounts[0]
		const addressRAtnnoD = accounts[5]
		const addressC1WAhja = accounts[0]
		const addressjrJqjf4 = accounts[3]
		const uintEsrX7X = BigInt("403")
		const FairStockEquityYTKWnLH = await FairStockEquity.new(address3NpMXi, addressRAtnnoD, addressC1WAhja, addressjrJqjf4, uintEsrX7X, {from: accounts[1]});
		const uintXGvxtti = BigInt("81")
//		const uint256j4CUEqd = await FairStockEquityYTKWnLH.setStartTime.call(uintXGvxtti, {from: accounts[1]});
//		await FairStockEquityYTKWnLH.withdrawMT.call({from: accounts[4]});

		await expect(FairStockEquityYTKWnLH.setStartTime.call(uintXGvxtti, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresstPFUT3z = accounts[0]
		const addressNRC2V2a = accounts[1]
		const addressbwAy25s = accounts[3]
		const addressJvPnDYt = accounts[2]
		const uintySdpiQ4 = BigInt("197")
		const FairStockEquitycvzu7MV = await FairStockEquity.new(addresstPFUT3z, addressNRC2V2a, addressbwAy25s, addressJvPnDYt, uintySdpiQ4, {from: accounts[0]});
		const uintkST4Jep = BigInt("496")
		const addressH6XF7kF = accounts[4]
		const boolzC40mLK = false
		const addressFuivN9O = accounts[3]
		const uintb8rDZvd = BigInt("1836")
//		await FairStockEquitycvzu7MV.f.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressjN1A8Co = await FairStockEquitycvzu7MV.depositLPT.call(addressH6XF7kF, uintkST4Jep, {from: accounts[3]});
//		const addressNh3VHWK = await FairStockEquitycvzu7MV.setLPT.call(addressFuivN9O, boolzC40mLK, {from: accounts[3]});
//		await FairStockEquitycvzu7MV.withdrawBonus.call({from: accounts[3]});
//		const uint2565zQWCy = await FairStockEquitycvzu7MV.reduceShare.call(uintb8rDZvd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitycvzu7MV.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})