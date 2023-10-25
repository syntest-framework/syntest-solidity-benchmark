const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressftL55u = accounts[2]
		const FompFe7uSci = await Fomp.new(addressftL55u, {from: "0x0000000000000000000000000000000000000001"});
		const uintbddAxOJ = BigInt("914")
		const addressfTSp3R = accounts[0]
		const addressPQSADty = accounts[2]
		const boolTRFgNF = await FompFe7uSci.approve.call(addressfTSp3R, uintbddAxOJ, {from: accounts[0]});
		const addressmHcFImP = await FompFe7uSci.delegate.call(addressPQSADty, {from: accounts[5]});
	});

	it('test for Fomp', async () => {
		const addressamZmrKy = accounts[0]
		const Fomp6KyJtN = await Fomp.new(addressamZmrKy, {from: accounts[3]});
		const uintKkCDhm = BigInt("1634")
		const addressuH5rEq0 = accounts[3]
		const uintXD1xMjy = BigInt("1077")
		const addressnjdd7Df = accounts[0]
		const booleVZ5hyI = await Fomp6KyJtN.approve.call(addressuH5rEq0, uintKkCDhm, {from: accounts[0]});
		const boolyA8aBza = await Fomp6KyJtN.approve.call(addressnjdd7Df, uintXD1xMjy, {from: accounts[5]});

		assert.equal(booleVZ5hyI, true)
		assert.equal(boolyA8aBza, true)
	});

	it('test for Fomp', async () => {
		const addresslDG0NFE = accounts[1]
		const FompRFfgz1N = await Fomp.new(addresslDG0NFE, {from: accounts[3]});
		const addressaVguaVv = accounts[5]
		const addressl2DcnL = accounts[2]
		const addressXeNOhTK = accounts[3]
		const addressdEe6mx = accounts[3]
		const address7yjyKr = accounts[1]
		const uintiAy8W5 = await FompRFfgz1N.balanceOf.call(addressaVguaVv, {from: accounts[4]});
		const uintldmTFoW = await FompRFfgz1N.balanceOf.call(addressl2DcnL, {from: accounts[3]});
		const uint96wfOkl3 = await FompRFfgz1N.getCurrentVotes.call(addressXeNOhTK, {from: accounts[2]});
		const uint96DoEWKcJ = await FompRFfgz1N.getCurrentVotes.call(addressdEe6mx, {from: accounts[1]});
		const addressZwFreod = await FompRFfgz1N.delegate.call(address7yjyKr, {from: accounts[0]});

		assert.equal(uint96DoEWKcJ, BigInt("0"))
		assert.equal(uint96wfOkl3, BigInt("0"))
		assert.equal(uintiAy8W5, BigInt("0"))
		assert.equal(uintldmTFoW, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresspDG4YE = accounts[0]
		const Fomp3ZVgKZ = await Fomp.new(addresspDG4YE, {from: accounts[3]});
		const addressJBCMvqS = accounts[4]
		const addressTHOF5oj = accounts[3]
		const addressmA2c9Tj = accounts[2]
		const addressfHH71g3 = accounts[1]
		const addressnCZ9HhM = await Fomp3ZVgKZ.delegate.call(addressJBCMvqS, {from: accounts[1]});
		const uint96F4sHY4u = await Fomp3ZVgKZ.getCurrentVotes.call(addressTHOF5oj, {from: accounts[3]});
		const uintnWaqG1J = await Fomp3ZVgKZ.allowance.call(addressfHH71g3, addressmA2c9Tj, {from: accounts[2]});

		assert.equal(uint96F4sHY4u, BigInt("0"))
		assert.equal(uintnWaqG1J, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressanF3k1C = accounts[1]
		const FompFzOx1C = await Fomp.new(addressanF3k1C, {from: accounts[2]});
		const addressSJkOyWN = accounts[0]
		const addressnBaFjEA = accounts[1]
		const uintJp6EUuV = BigInt("1562")
		const addressVFCRfQ0 = accounts[0]
		const addressQD685Q7 = accounts[0]
		const address8i9NxM = await FompFzOx1C.delegate.call(addressSJkOyWN, {from: accounts[2]});
		const uintZHzP7Oj = await FompFzOx1C.balanceOf.call(addressnBaFjEA, {from: accounts[0]});
//		const boolATM30jW = await FompFzOx1C.transferFrom.call(addressQD685Q7, addressVFCRfQ0, uintJp6EUuV, {from: accounts[2]});

		assert.equal(uintZHzP7Oj, BigInt("1000000000000000000000000"))
		await expect(FompFzOx1C.transferFrom.call(addressQD685Q7, addressVFCRfQ0, uintJp6EUuV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresskoutdx = accounts[4]
		const FompC9v1nC = await Fomp.new(addresskoutdx, {from: accounts[4]});
		const bytei24J8Yw = "0x15021711150f120b1d1114171619170d1517051d15081c002010061b091b0508"
		const bytehZzQGlh = "0x1810151d1a0617110502010e1414150c0d070a1c011412180801061a1b070e08"
		const uintHSNgiYs = BigInt("244")
		const uintTE7JRQs = BigInt("1524")
		const uintTPgoj6o = BigInt("753")
		const addressY8zrpSV = accounts[3]
		const uintBsnoOjU = BigInt("1232")
		const addressh4tOowU = accounts[1]
		const addresshCBQ3uY = accounts[2]
		const uinth1xtKnc = BigInt("1836")
		const addresskTx5ZMt = accounts[5]
		const uintpNaH6t9 = BigInt("874")
		const addressvsz0UjT = accounts[1]
		const uintVvni6qt = BigInt("422")
		const addressKaJH94t = accounts[3]
		const uintah561U = BigInt("986")
		const addressNT91QQS = accounts[1]
		const addressLSgYKyE = accounts[0]
//		const addressFuOmuA = await FompC9v1nC.delegateBySig.call(addressY8zrpSV, uintTPgoj6o, uintTE7JRQs, uintHSNgiYs, bytehZzQGlh, bytei24J8Yw, {from: accounts[2]});
//		const bools7EOFck = await FompC9v1nC.transferFrom.call(addresshCBQ3uY, addressh4tOowU, uintBsnoOjU, {from: accounts[1]});
//		const boolJb2HbxV = await FompC9v1nC.approve.call(addresskTx5ZMt, uinth1xtKnc, {from: accounts[3]});
//		const boolliN6PaX = await FompC9v1nC.approve.call(addressvsz0UjT, uintpNaH6t9, {from: accounts[4]});
//		const boolyDHiOMT = await FompC9v1nC.transfer.call(addressKaJH94t, uintVvni6qt, {from: accounts[1]});
//		const boolhqSx4VY = await FompC9v1nC.transferFrom.call(addressLSgYKyE, addressNT91QQS, uintah561U, {from: accounts[1]});

		await expect(FompC9v1nC.delegateBySig.call(addressY8zrpSV, uintTPgoj6o, uintTE7JRQs, uintHSNgiYs, bytehZzQGlh, bytei24J8Yw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressSmo9ata = accounts[1]
		const FompiMc52l2 = await Fomp.new(addressSmo9ata, {from: accounts[0]});
		const uintPg1gsku = BigInt("606")
		const addressub05iFL = "0x0000000000000000000000000000000000000001"
		const addressD4N0WAT = accounts[4]
		const uinteOMNcNe = BigInt("190")
		const addressvFIKyQ = "0x0000000000000000000000000000000000000001"
		const uintp84YTYa = BigInt("969")
		const addressWI8OIcC = accounts[4]
		const addressZAyeIUn = accounts[1]
		const uint96V3ipZC = await FompiMc52l2.getPriorVotes.call(addressub05iFL, uintPg1gsku, {from: accounts[1]});
		const uintvapBcCr = await FompiMc52l2.balanceOf.call(addressD4N0WAT, {from: accounts[1]});
		const boolOWCMK9c = await FompiMc52l2.approve.call(addressvFIKyQ, uinteOMNcNe, {from: "0x0000000000000000000000000000000000000001"});
		const boolRuQulb = await FompiMc52l2.approve.call(addressWI8OIcC, uintp84YTYa, {from: accounts[3]});
		const uint96SerVw0 = await FompiMc52l2.getCurrentVotes.call(addressZAyeIUn, {from: accounts[2]});

		assert.equal(boolOWCMK9c, true)
		assert.equal(boolRuQulb, true)
		assert.equal(uint96SerVw0, BigInt("0"))
		assert.equal(uint96V3ipZC, BigInt("0"))
		assert.equal(uintvapBcCr, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresszI0cuuQ = accounts[2]
		const Fompi1xpGBw = await Fomp.new(addresszI0cuuQ, {from: accounts[1]});
		const addressoSFKief = "0x0000000000000000000000000000000000000000"
		const uintNojfPgr = BigInt("998")
		const addresss2ONl9J = accounts[2]
		const bytey1Mot3o = "0x1512021f170314010d030700121b0511070410180f07161514031d1504111105"
		const bytercI03VC = "0x1b19150e12031c15070e110d0d140603051f0e18171311110f161e0818070f12"
		const uintw7Cy3uw = BigInt("164")
		const uintfs741U = BigInt("159")
		const uintm8gtlGV = BigInt("1119")
		const addressUUgGkV6 = accounts[2]
		const addresshUIBG3 = accounts[2]
		const addressUl4XyD = await Fompi1xpGBw.delegate.call(addressoSFKief, {from: accounts[0]});
		const boolJsZ6Uey = await Fompi1xpGBw.approve.call(addresss2ONl9J, uintNojfPgr, {from: accounts[2]});
//		const addressSX4KKL = await Fompi1xpGBw.delegateBySig.call(addressUUgGkV6, uintm8gtlGV, uintfs741U, uintw7Cy3uw, bytercI03VC, bytey1Mot3o, {from: accounts[1]});
//		const uint96KltwYn1 = await Fompi1xpGBw.getCurrentVotes.call(addresshUIBG3, {from: accounts[3]});

		assert.equal(boolJsZ6Uey, true)
		await expect(Fompi1xpGBw.delegateBySig.call(addressUUgGkV6, uintm8gtlGV, uintfs741U, uintw7Cy3uw, bytercI03VC, bytey1Mot3o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZNntJHq = accounts[2]
		const Fompi1xpGBw = await Fomp.new(addressZNntJHq, {from: accounts[1]});
		const addressDEfyeUg = "0x0000000000000000000000000000000000000000"
		const uintiMsv1tf = BigInt("998")
		const address0w3yMx = accounts[2]
		const byteHZR0Ule = "0x1512021f170314010dffffffff0700121b0511070410180f07161514031d1504111105"
		const byteZbAQW9G = "0x1b19150e12031c15070e110d0d140603051f0e18171311110f161e0818070f12"
		const uintj6fMk6e = BigInt("164")
		const uintHLRj2Jy = BigInt("159")
		const uintdYPeDtF = BigInt("1119")
		const addressWLdOUU1 = accounts[2]
		const addressZVCN0Pt = accounts[2]
		const addressUl4XyD = await Fompi1xpGBw.delegate.call(addressDEfyeUg, {from: accounts[0]});
		const boolJsZ6Uey = await Fompi1xpGBw.approve.call(address0w3yMx, uintiMsv1tf, {from: accounts[2]});
//		const addressSX4KKL = await Fompi1xpGBw.delegateBySig.call(addressWLdOUU1, uintdYPeDtF, uintHLRj2Jy, uintj6fMk6e, byteZbAQW9G, byteHZR0Ule, {from: accounts[1]});
//		const uint96KltwYn1 = await Fompi1xpGBw.getCurrentVotes.call(addressZVCN0Pt, {from: accounts[3]});

		assert.equal(boolJsZ6Uey, true)
		await expect(Fompi1xpGBw.delegateBySig.call(addressWLdOUU1, uintdYPeDtF, uintHLRj2Jy, uintj6fMk6e, byteZbAQW9G, byteHZR0Ule, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressDo0JGo7 = accounts[2]
		const Fompi1xpGBw = await Fomp.new(addressDo0JGo7, {from: accounts[1]});
		const addressuwx7aev = accounts[3]
		const addressZuPTPHp = accounts[3]
		const uint3Vtzcz = BigInt("380")
		const addressh4zbjhk = accounts[4]
		const uintfpqMaq8 = BigInt("884")
		const addressyfLrZI3 = accounts[2]
		const uintLWuYKct = BigInt("1515")
		const addressSqUlBIh = accounts[3]
		const addresseSWoJKn = accounts[3]
		const addresscj9kscn = accounts[6]
		const byteP5GV2q8 = "0x0201020d1014170d0219050c0b0e0905100c1f091118150f1c070a17190a1c13"
		const byteHkxwDRW = "0x1a1d0215071306161c080e14050717080617181b08150f060a06150c1a1c1a0b"
		const uintevFBNtP = BigInt("228")
		const uintixT5kML = BigInt("1898")
		const uintpcxQMKQ = BigInt("1940")
		const addressE1ai1gM = accounts[2]
		const byteXek5oBg = "0x1512021f170314010d030700121b0511070410180f07161514031d1504111105"
		const byteeL0hDmN = "0x1b19150e12031c15070e110d0d140603051f0e18171311110f161e0818070f12"
		const uintttd9Lpz = BigInt("164")
		const uintzyvwsr3 = BigInt("159")
		const uintvRT1bwD = BigInt("1119")
		const addresshW7ZyO = accounts[2]
		const uintMdKBPoT = await Fompi1xpGBw.allowance.call(addressZuPTPHp, addressuwx7aev, {from: "0x0000000000000000000000000000000000000001"});
		const boolpRTtHGD = await Fompi1xpGBw.approve.call(addressh4zbjhk, uint3Vtzcz, {from: accounts[0]});
		const boolKmyI1kS = await Fompi1xpGBw.approve.call(addressyfLrZI3, uintfpqMaq8, {from: accounts[5]});
//		const boolJ6i7gXY = await Fompi1xpGBw.transferFrom.call(addresseSWoJKn, addressSqUlBIh, uintLWuYKct, {from: accounts[3]});
//		const addressmcr3fG = await Fompi1xpGBw.delegate.call(addresscj9kscn, {from: accounts[3]});
//		const addressB3laoP1 = await Fompi1xpGBw.delegateBySig.call(addressE1ai1gM, uintpcxQMKQ, uintixT5kML, uintevFBNtP, byteHkxwDRW, byteP5GV2q8, {from: accounts[3]});
//		const addressSX4KKL = await Fompi1xpGBw.delegateBySig.call(addresshW7ZyO, uintvRT1bwD, uintzyvwsr3, uintttd9Lpz, byteeL0hDmN, byteXek5oBg, {from: accounts[1]});

		assert.equal(boolKmyI1kS, true)
		assert.equal(boolpRTtHGD, true)
		assert.equal(uintMdKBPoT, BigInt("0"))
		await expect(Fompi1xpGBw.transferFrom.call(addresseSWoJKn, addressSqUlBIh, uintLWuYKct, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressp1LozA = accounts[2]
		const Fompi1xpGBw = await Fomp.new(addressp1LozA, {from: accounts[1]});
		const addressYry7RUZ = accounts[3]
		const addressu9gyj9H = accounts[3]
		const uintDsLQM7x = BigInt("380")
		const addresssnGgKiP = accounts[4]
		const uintB5RdLpt = BigInt("983")
		const addressr8YL3WP = accounts[1]
		const uintUp8UjRV = BigInt("884")
		const addresstWkx5U = accounts[4]
		const byteMCAUYV9 = "0x0201020d1014170d0219050c0b0e0905100c1f091118150f1c070a17190a1c13"
		const bytefBVxx58 = "0x1a1d0215071306161c080e14050717080617181b08150f060a06150c1a1c1a0b"
		const uintNtLeGnr = BigInt("228")
		const uinttYMI5sw = BigInt("1898")
		const uintWEyQHzO = BigInt("1940")
		const addressxC9f2Mi = accounts[2]
		const bytejKlMKhC = "0x1512021f170314010d030700121b0511070410180f07161514031d1504111105"
		const byteve8rP7l = "0x1b19150e12031c15070e110d0d140603051f0e18171311110f161e0818070f12"
		const uintyGLqqXj = BigInt("164")
		const uintCMwZDlq = BigInt("159")
		const uintXlGlNO = BigInt("1119")
		const addressfiBf2fP = accounts[2]
		const addressuSssAMJ = accounts[5]
		const uintMdKBPoT = await Fompi1xpGBw.allowance.call(addressu9gyj9H, addressYry7RUZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolpRTtHGD = await Fompi1xpGBw.approve.call(addresssnGgKiP, uintDsLQM7x, {from: accounts[0]});
		const boolRx4sMSz = await Fompi1xpGBw.transfer.call(addressr8YL3WP, uintB5RdLpt, {from: accounts[2]});
		const boolKmyI1kS = await Fompi1xpGBw.approve.call(addresstWkx5U, uintUp8UjRV, {from: accounts[5]});
//		const addressB3laoP1 = await Fompi1xpGBw.delegateBySig.call(addressxC9f2Mi, uintWEyQHzO, uinttYMI5sw, uintNtLeGnr, bytefBVxx58, byteMCAUYV9, {from: accounts[3]});
//		const addressSX4KKL = await Fompi1xpGBw.delegateBySig.call(addressfiBf2fP, uintXlGlNO, uintCMwZDlq, uintyGLqqXj, byteve8rP7l, bytejKlMKhC, {from: accounts[1]});
//		const addresszh5X6ek = await Fompi1xpGBw.delegate.call(addressuSssAMJ, {from: accounts[4]});

		assert.equal(boolKmyI1kS, true)
		assert.equal(boolRx4sMSz, true)
		assert.equal(boolpRTtHGD, true)
		assert.equal(uintMdKBPoT, BigInt("0"))
		await expect(Fompi1xpGBw.delegateBySig.call(addressxC9f2Mi, uintWEyQHzO, uinttYMI5sw, uintNtLeGnr, bytefBVxx58, byteMCAUYV9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressRzd0N7c = accounts[0]
		const FomprzmC1to = await Fomp.new(addressRzd0N7c, {from: accounts[2]});
		const addressbIJFBD9 = accounts[1]
		const addressfxGmIqv = accounts[1]
		const uintDTzSZsv = BigInt("1392")
		const addressR8d5Gg5 = accounts[1]
		const uintCPym3Ms = await FomprzmC1to.balanceOf.call(addressbIJFBD9, {from: accounts[4]});
		const addressse7kL9R = await FomprzmC1to.delegate.call(addressfxGmIqv, {from: accounts[0]});
//		const boolmhehrj8 = await FomprzmC1to.transfer.call(addressR8d5Gg5, uintDTzSZsv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintCPym3Ms, BigInt("0"))
		await expect(FomprzmC1to.transfer.call(addressR8d5Gg5, uintDTzSZsv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressWaTmv6j = accounts[2]
		const Fompi1xpGBw = await Fomp.new(addressWaTmv6j, {from: accounts[1]});
		const addressvmjPTzH = accounts[3]
		const uintMeaa9xD = BigInt("90")
		const address5EdUCD = accounts[3]
		const uintVFfDRr9 = BigInt("270")
		const addressN8uzc0D = accounts[3]
		const uintw6zoa9f = await Fompi1xpGBw.balanceOf.call(addressvmjPTzH, {from: accounts[3]});
		const uint96NgdkyRH = await Fompi1xpGBw.getPriorVotes.call(address5EdUCD, uintMeaa9xD, {from: accounts[4]});
		const boolpRTtHGD = await Fompi1xpGBw.approve.call(addressN8uzc0D, uintVFfDRr9, {from: accounts[0]});

		assert.equal(boolpRTtHGD, true)
		assert.equal(uint96NgdkyRH, BigInt("0"))
		assert.equal(uintw6zoa9f, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressYzQnNap = "0x0000000000000000000000000000000000000001"
		const FompgtHdIL = await Fomp.new(addressYzQnNap, {from: accounts[3]});
		const addressbWBs1ox = accounts[4]
		const byteIHYLrgT = "0x010515181a051006060e18131e061915061f07020b140d01120e2003130a041b"
		const bytehMS4Stb = "0x04131e13070e0e090f180c060b1b171917100b08041f1001120b0c091408140a"
		const uintbBMinuD = BigInt("28")
		const uintuR5G6Zd = BigInt("2019")
		const uint9k14DN = BigInt("349")
		const addresshF51W9S = accounts[5]
		const byteaSAJHzf = "0x1203181e050c16150f1b131012070e03031e120711061a18130b1b13080d031e"
		const byte2Wmfep = "0x1b0f060301090c01140309031f19190d200d11150a0b070112150f17030a041d"
		const uintxxyuoZH = BigInt("168")
		const uintvIUbI6V = BigInt("1716")
		const uintQKA7m5P = BigInt("1174")
		const addressbGQatOR = "0x0000000000000000000000000000000000000001"
		const addresssHQsvRH = accounts[2]
		const addressY8ul4gK = "0x0000000000000000000000000000000000000001"
		const uintq18ryqy = BigInt("763")
		const addressxfjLhWA = accounts[1]
		const addressitN5Jtt = await FompgtHdIL.delegate.call(addressbWBs1ox, {from: accounts[2]});
//		const addresswQ1IS6N = await FompgtHdIL.delegateBySig.call(addresshF51W9S, uint9k14DN, uintuR5G6Zd, uintbBMinuD, bytehMS4Stb, byteIHYLrgT, {from: accounts[4]});
//		const addressqL9oIz5 = await FompgtHdIL.delegateBySig.call(addressbGQatOR, uintQKA7m5P, uintvIUbI6V, uintxxyuoZH, byte2Wmfep, byteaSAJHzf, {from: accounts[3]});
//		const uintbrF0Dp = await FompgtHdIL.allowance.call(addressY8ul4gK, addresssHQsvRH, {from: accounts[0]});
//		const boolhlbVRx6 = await FompgtHdIL.approve.call(addressxfjLhWA, uintq18ryqy, {from: accounts[0]});

		await expect(FompgtHdIL.delegateBySig.call(addresshF51W9S, uint9k14DN, uintuR5G6Zd, uintbBMinuD, bytehMS4Stb, byteIHYLrgT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})