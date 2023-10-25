const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressrP4GT2 = accounts[1]
		const BAEJan4t0g = await BAE.new(addressrP4GT2, {from: accounts[3]});
		const uintAUWbw1n = BigInt("350")
		const uinturufaQ3 = BigInt("89")
		const uintItHSCYe = BigInt("1320")
		const uintDfIJM0 = BigInt("755")
		const uintYX11aJl = BigInt("1847")
		const uintdMsDWFB = BigInt("101")
		const uintx9C0LV3 = BigInt("700")
		const uint256CuVYJJl = await BAEJan4t0g.bid.call(uintAUWbw1n, {from: accounts[1]});
		const uint256AQQDlaD = await BAEJan4t0g.concludeAuction.call(uinturufaQ3, {from: accounts[0]});
		const uint256jnu8dKJ = await BAEJan4t0g.concludeAuction.call(uintItHSCYe, {from: accounts[4]});
		const uint256e8WZPS8 = await BAEJan4t0g.changePrintFee.call(uintDfIJM0, {from: accounts[3]});
		const uint256vQBQyea = await BAEJan4t0g.resetAuction.call(uintx9C0LV3, uintdMsDWFB, uintYX11aJl, {from: accounts[3]});

		await expect(BAEJan4t0g.bid.call(uintAUWbw1n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressGotF9H = accounts[0]
		const BAEIPS3CJJ = await BAE.new(addressGotF9H, {from: accounts[4]});
		const uintW4Hgkrl = BigInt("677")
		const uintAegnOBs = BigInt("827")
		const uintWQfBnlP = BigInt("368")
		const uintQmg4Y29 = BigInt("578")
		const uintESXVCKL = BigInt("350")
		const uintAOspuno = BigInt("1002")
		const uintOlnJpyC = BigInt("1704")
		const uint256lHizMjD = await BAEIPS3CJJ.changePrintFee.call(uintW4Hgkrl, {from: accounts[4]});
		const uint256TpepHa = await BAEIPS3CJJ.concludeAuction.call(uintAegnOBs, {from: accounts[2]});
		const uint256pOCT1T7 = await BAEIPS3CJJ.createAuction.call(uintAOspuno, uintESXVCKL, uintQmg4Y29, uintWQfBnlP, {from: accounts[2]});
		const uint256Z0dK65R = await BAEIPS3CJJ.buy.call(uintOlnJpyC, {from: accounts[5]});

		await expect(BAEIPS3CJJ.changePrintFee.call(uintW4Hgkrl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressixsw5Sb = accounts[0]
		const BAEdSSHNo = await BAE.new(addressixsw5Sb, {from: accounts[0]});
		const uintUqqwotY = BigInt("1554")
		const uintzeBhQeA = BigInt("772")
		const uintpMnIxk8 = BigInt("1604")
		const uintwmowqSK = BigInt("766")
		const uintUtYQMDB = BigInt("982")
		const uintLGKMyp1 = BigInt("1442")
		const uintGa9Cv1w = BigInt("1037")
		const uintgDZogrR = BigInt("1124")
		const uintluudDZw = BigInt("1344")
		const uintZ38iRL9 = BigInt("290")
		const uintILc9TdD = BigInt("1786")
		const uint256bmLZTHj = await BAEdSSHNo.resetAuction.call(uintpMnIxk8, uintzeBhQeA, uintUqqwotY, {from: accounts[2]});
		const uint256NL3V9l = await BAEdSSHNo.changePrintFee.call(uintwmowqSK, {from: accounts[3]});
		const uint256NhAOO20 = await BAEdSSHNo.resetAuction.call(uintGa9Cv1w, uintLGKMyp1, uintUtYQMDB, {from: accounts[2]});
		const uint256iaCpY5W = await BAEdSSHNo.changePrintFee.call(uintgDZogrR, {from: accounts[0]});
		const uint256eMxvU8 = await BAEdSSHNo.resetAuction.call(uintILc9TdD, uintZ38iRL9, uintluudDZw, {from: accounts[0]});

		await expect(BAEdSSHNo.resetAuction.call(uintpMnIxk8, uintzeBhQeA, uintUqqwotY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresssXjAdx7 = accounts[0]
		const BAEon86ABT = await BAE.new(addresssXjAdx7, {from: accounts[1]});
		const uintFiVSO3z = BigInt("1682")
		const uint4BmAHV = BigInt("1778")
		const uintvaQtRRv = BigInt("1937")
		const uintdfgbHGH = BigInt("637")
		const uintWdEC8nD = BigInt("1165")
		const uintWcsf6mj = BigInt("974")
		const uinthWyPTZI = BigInt("623")
		const uintZ98U8Xn = BigInt("1521")
		const uintcJ0Rnpv = BigInt("63")
		const uintLJCzatj = BigInt("733")
		const uintfDjknzk = BigInt("1974")
		const uintJHK6mkL = BigInt("7")
		const uintv8dMWju = BigInt("1106")
		const uint256wZxWDIL = await BAEon86ABT.createAuction.call(uintdfgbHGH, uintvaQtRRv, uint4BmAHV, uintFiVSO3z, {from: accounts[5]});
		const uint256ob4pF8 = await BAEon86ABT.bid.call(uintWdEC8nD, {from: accounts[1]});
		const uint2565kGfDN = await BAEon86ABT.resetAuction.call(uintZ98U8Xn, uinthWyPTZI, uintWcsf6mj, {from: accounts[5]});
		const uint256zxwkyjc = await BAEon86ABT.concludeAuction.call(uintcJ0Rnpv, {from: accounts[3]});
		const uint256udifomF = await BAEon86ABT.resetAuction.call(uintJHK6mkL, uintfDjknzk, uintLJCzatj, {from: accounts[4]});
		const uint256KLG2NBa = await BAEon86ABT.bid.call(uintv8dMWju, {from: accounts[5]});

		await expect(BAEon86ABT.createAuction.call(uintdfgbHGH, uintvaQtRRv, uint4BmAHV, uintFiVSO3z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressyuhDaqH = accounts[3]
		const BAEBPb1GYV = await BAE.new(addressyuhDaqH, {from: "0x0000000000000000000000000000000000000001"});
		const uintrSbZUVR = BigInt("1292")
		const uintitmrQlf = BigInt("1918")
		const uintfPn9kw = BigInt("1783")
		const uintWenmGBu = BigInt("617")
		const uint256I2lEaVB = await BAEBPb1GYV.resetAuction.call(uintfPn9kw, uintitmrQlf, uintrSbZUVR, {from: accounts[4]});
		const uint256Dxas1HK = await BAEBPb1GYV.buy.call(uintWenmGBu, {from: accounts[3]});
	});

	it('test for BAE', async () => {
		const addressEL5q2xY = accounts[4]
		const BAEVPNhYVJ = await BAE.new(addressEL5q2xY, {from: accounts[2]});
		const uintIy35zak = BigInt("1407")
		const uintrp5CbSH = BigInt("560")
		const uintnUczdvc = BigInt("430")
		const uint4UTk2M = BigInt("1986")
		const uintTGOZAiF = BigInt("1141")
		const uintRTGd40K = BigInt("1629")
		const uintZXoB50g = BigInt("71")
		const uintVhFfcgS = BigInt("658")
		const uint256yrfyvzB = await BAEVPNhYVJ.buy.call(uintIy35zak, {from: accounts[2]});
		const uint256TAXMoKd = await BAEVPNhYVJ.buy.call(uintrp5CbSH, {from: accounts[4]});
		const uint256qS0MoF = await BAEVPNhYVJ.createAuction.call(uintRTGd40K, uintTGOZAiF, uint4UTk2M, uintnUczdvc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256h4g7q0V = await BAEVPNhYVJ.buy.call(uintZXoB50g, {from: accounts[3]});
		const uint256qBBKoM = await BAEVPNhYVJ.setAuctionFee.call(uintVhFfcgS, {from: accounts[3]});

		await expect(BAEVPNhYVJ.buy.call(uintIy35zak, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressFPH0t1 = accounts[1]
		const BAEUAzQOdk = await BAE.new(addressFPH0t1, {from: accounts[4]});
		const uintmyq5LLL = BigInt("1251")
		const uintX68MuiV = BigInt("635")
		const uintYUAeKu = BigInt("829")
		const uinteyujdj = BigInt("1250")
		const uintaRUgJ44 = BigInt("1613")
		const uintLT8cFUW = BigInt("1975")
		const uinto7PAJ1o = BigInt("2018")
		const uintI9wm6eG = BigInt("417")
		const uintICcsqhh = BigInt("1948")
		const uint256mKhlYG0 = await BAEUAzQOdk.concludeAuction.call(uintmyq5LLL, {from: accounts[2]});
		const uint256vb8Jy3d = await BAEUAzQOdk.createAuction.call(uintaRUgJ44, uinteyujdj, uintYUAeKu, uintX68MuiV, {from: accounts[1]});
		const uint256l8FioQT = await BAEUAzQOdk.resetAuction.call(uintI9wm6eG, uinto7PAJ1o, uintLT8cFUW, {from: accounts[5]});
		const uint256R91CCf8 = await BAEUAzQOdk.buy.call(uintICcsqhh, {from: accounts[0]});

		await expect(BAEUAzQOdk.concludeAuction.call(uintmyq5LLL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})