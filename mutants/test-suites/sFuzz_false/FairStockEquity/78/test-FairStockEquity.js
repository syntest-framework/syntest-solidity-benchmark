const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressmtsNvH = accounts[5]
		const addressNbDmbN = accounts[1]
		const addressmNH0e1Y = accounts[4]
		const addressMrXFnR1 = accounts[4]
		const uintgJAEHTH = BigInt("1150")
		const FairStockEquityhnqyeLM = await FairStockEquity.new(addressmtsNvH, addressNbDmbN, addressmNH0e1Y, addressMrXFnR1, uintgJAEHTH, {from: accounts[0]});
		const uinty89i8J1 = BigInt("417")
		const uintFmpMYWQ = BigInt("513")
		const uintIPwOLS = BigInt("290")
		const addressV3cX8EK = accounts[2]
		const uinth8WnO3A = BigInt("868")
		const uintz3XpLYy = BigInt("1520")
//		const uint256kRIRIc0 = await FairStockEquityhnqyeLM.setProfitPercentBonus.call(uinty89i8J1, {from: accounts[4]});
//		await FairStockEquityhnqyeLM.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256pK7vtO = await FairStockEquityhnqyeLM.setGasFeeForCallback.call(uintFmpMYWQ, {from: accounts[4]});
//		const addressW9IdLHu = await FairStockEquityhnqyeLM.depositLPT.call(addressV3cX8EK, uintIPwOLS, {from: accounts[4]});
//		const uint256GxPJXcx = await FairStockEquityhnqyeLM.getCostAmount.call(uinth8WnO3A, {from: accounts[0]});
//		const uint256YyRNBz1 = await FairStockEquityhnqyeLM.invest.call(uintz3XpLYy, {from: accounts[2]});

		await expect(FairStockEquityhnqyeLM.setProfitPercentBonus.call(uinty89i8J1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJ1LHXPK = accounts[4]
		const addressxeijhVX = accounts[3]
		const addresspvjofFa = accounts[0]
		const addressF2l779q = accounts[0]
		const uintl0dJIh9 = BigInt("1163")
		const FairStockEquityTxJkbEw = await FairStockEquity.new(addressJ1LHXPK, addressxeijhVX, addresspvjofFa, addressF2l779q, uintl0dJIh9, {from: accounts[1]});
		const uintnOsLhyX = BigInt("95")
		const uintLlpGDDo = BigInt("681")
		const addresso1AHlbe = accounts[4]
		const uintYj7Cxl6 = BigInt("437")
//		await FairStockEquityTxJkbEw.onlyDataSource.call({from: accounts[5]});
//		await FairStockEquityTxJkbEw.withdrawBonus.call({from: accounts[5]});
//		const addressirAcMy8 = await FairStockEquityTxJkbEw.withdrawBonusCallback.call(addresso1AHlbe, uintLlpGDDo, uintnOsLhyX, {from: accounts[2]});
//		const uint256Tmk7Vn = await FairStockEquityTxJkbEw.setProfitPercentBonus.call(uintYj7Cxl6, {from: accounts[0]});

		await expect(FairStockEquityTxJkbEw.onlyDataSource.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressn5G5ECj = accounts[2]
		const addressVq202jY = accounts[4]
		const addressXqYYMu1 = accounts[5]
		const addressq4giMVN = accounts[1]
		const uintVPtUunw = BigInt("543")
		const FairStockEquityQuoNqPF = await FairStockEquity.new(addressn5G5ECj, addressVq202jY, addressXqYYMu1, addressq4giMVN, uintVPtUunw, {from: "0x0000000000000000000000000000000000000001"});
		const uintLgApzWl = BigInt("887")
		const addresspeY81za = accounts[0]
		const boolz30u6uo = true
		const addressr0L73yZ = accounts[5]
		const uintc4jck4U = BigInt("1962")
		const uintb3xcyEE = BigInt("386")
		const addressAKtbLY4 = accounts[3]
		const addresssLxotkI = await FairStockEquityQuoNqPF.depositLPT.call(addresspeY81za, uintLgApzWl, {from: accounts[1]});
		await FairStockEquityQuoNqPF.f.call({from: accounts[0]});
		const addressyUbBsL2 = await FairStockEquityQuoNqPF.setLPT.call(addressr0L73yZ, boolz30u6uo, {from: accounts[2]});
		await FairStockEquityQuoNqPF.onlyDataSource.call({from: accounts[2]});
		const addressDYBGQhJ = await FairStockEquityQuoNqPF.withdrawBonusCallback.call(addressAKtbLY4, uintb3xcyEE, uintc4jck4U, {from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const addressEqMu88H = accounts[3]
		const addressgFnApzN = accounts[2]
		const addressKYIvsJe = accounts[3]
		const addressN7XYvRp = accounts[2]
		const uintp8iTOHA = BigInt("1286")
		const FairStockEquityqsPIHNQ = await FairStockEquity.new(addressEqMu88H, addressgFnApzN, addressKYIvsJe, addressN7XYvRp, uintp8iTOHA, {from: accounts[4]});
		const uintKMBqB2h = BigInt("940")
		const uintcVBtFeo = BigInt("1881")
		const addressPEbQXP = accounts[2]
		const boolcdCbWVR = true
		const address07dAz3 = accounts[5]
		const uintRdche3d = BigInt("799")
		const uintQPbkGb3 = BigInt("1933")
		const uintVMGJQ3o = BigInt("670")
		const addressXIirC5 = accounts[1]
//		const addressiL8vuAd = await FairStockEquityqsPIHNQ.withdrawMTCallback.call(addressPEbQXP, uintcVBtFeo, uintKMBqB2h, {from: accounts[1]});
//		const addressohI9dt = await FairStockEquityqsPIHNQ.setLPT.call(address07dAz3, boolcdCbWVR, {from: accounts[1]});
//		const uint256imJt4mj = await FairStockEquityqsPIHNQ.setProfitPercentMT.call(uintRdche3d, {from: accounts[3]});
//		const addressFyPmwIk = await FairStockEquityqsPIHNQ.setModule.call(addressXIirC5, uintVMGJQ3o, uintQPbkGb3, {from: accounts[4]});

		await expect(FairStockEquityqsPIHNQ.withdrawMTCallback.call(addressPEbQXP, uintcVBtFeo, uintKMBqB2h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressLDlIYTo = accounts[3]
		const addressozjMpli = accounts[0]
		const addressFeXJFgt = accounts[3]
		const addressZnC9jcp = accounts[2]
		const uintBVHj1RY = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addressLDlIYTo, addressozjMpli, addressFeXJFgt, addressZnC9jcp, uintBVHj1RY, {from: accounts[3]});
		const uintwIoGECP = BigInt("634")
		const uintospmvEH = BigInt("1669")
		const uintNu93yga = BigInt("906")
		const addressV1oKZtL = accounts[0]
		const uintvb3VsFO = BigInt("1705")
//		const uint256aLWhbzk = await FairStockEquityr3GegWM.invest.call(uintwIoGECP, {from: accounts[2]});
//		const addresstIpvQw1 = await FairStockEquityr3GegWM.withdrawMTCallback.call(addressV1oKZtL, uintNu93yga, uintospmvEH, {from: accounts[0]});
//		const uint256yPGmTkM = await FairStockEquityr3GegWM.setProfitPercentPJ.call(uintvb3VsFO, {from: accounts[5]});

		await expect(FairStockEquityr3GegWM.invest.call(uintwIoGECP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressaUcCnG = accounts[0]
		const addressIaNHMiT = accounts[1]
		const addressFVvlNeD = accounts[2]
		const addressro6fkC = accounts[3]
		const uintzcgAsw7 = BigInt("824")
		const FairStockEquitynHjjkqS = await FairStockEquity.new(addressaUcCnG, addressIaNHMiT, addressFVvlNeD, addressro6fkC, uintzcgAsw7, {from: accounts[1]});
		const uintlZFfRg = BigInt("12")
		const uinte1j79j1 = BigInt("1456")
		const addresspfGdwuP = accounts[0]
		const uintdjeeC7M = BigInt("1517")
		const addressJrjirmX = accounts[1]
		const uintRlnBGbi = BigInt("1338")
		const uintDmrhSj7 = BigInt("383")
		const uintvHbnAmm = BigInt("174")
		const uintHQChPxM = BigInt("1018")
		const addressqdFC4wk = accounts[4]
		const uintAfnVJ5C = BigInt("1167")
		const uintYeKfo75 = BigInt("205")
		const uintHQjqsLe = BigInt("456")
		const addressBMAjVAT = accounts[1]
//		const addressikc3rft = await FairStockEquitynHjjkqS.withdrawMTCallback.call(addresspfGdwuP, uinte1j79j1, uintlZFfRg, {from: accounts[3]});
//		const addressjsro0Bv = await FairStockEquitynHjjkqS.depositLPT.call(addressJrjirmX, uintdjeeC7M, {from: accounts[2]});
//		const addressvvufJj4 = await FairStockEquitynHjjkqS.business.call(addressqdFC4wk, uintHQChPxM, uintvHbnAmm, uintDmrhSj7, uintRlnBGbi, {from: accounts[1]});
//		const uint256hBA9Dp = await FairStockEquitynHjjkqS.setGasFeeForCallback.call(uintAfnVJ5C, {from: accounts[1]});
//		const addressT0IjbSY = await FairStockEquitynHjjkqS.setModule.call(addressBMAjVAT, uintHQjqsLe, uintYeKfo75, {from: accounts[3]});
//		await FairStockEquitynHjjkqS.onlyDataSource.call({from: accounts[2]});

		await expect(FairStockEquitynHjjkqS.withdrawMTCallback.call(addresspfGdwuP, uinte1j79j1, uintlZFfRg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZmGcdSC = accounts[0]
		const addressuu6wsnv = accounts[4]
		const addressNCd1BmN = accounts[2]
		const addressgrCq6NA = accounts[5]
		const uintnycbxfs = BigInt("1229")
		const FairStockEquityR5iXUwZ = await FairStockEquity.new(addressZmGcdSC, addressuu6wsnv, addressNCd1BmN, addressgrCq6NA, uintnycbxfs, {from: accounts[2]});
		const addressz8A4xMn = accounts[1]
		const uintvIcwDg = BigInt("1816")
		const addressEo2Yk16 = accounts[4]
//		const addressSYcDMed = await FairStockEquityR5iXUwZ.setDataSource.call(addressz8A4xMn, {from: accounts[1]});
//		await FairStockEquityR5iXUwZ.f.call({from: accounts[4]});
//		const uint256LSkON0e = await FairStockEquityR5iXUwZ.invest.call(uintvIcwDg, {from: accounts[0]});
//		const addressC6GKcV7 = await FairStockEquityR5iXUwZ.setDataSource.call(addressEo2Yk16, {from: accounts[3]});

		await expect(FairStockEquityR5iXUwZ.setDataSource.call(addressz8A4xMn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPoc3VZ = accounts[2]
		const addressDJIRHel = accounts[5]
		const addresszftcexb = accounts[2]
		const addressVxzv9a = accounts[2]
		const uintfl3b76M = BigInt("1997")
		const FairStockEquityZEhIY84 = await FairStockEquity.new(addressPoc3VZ, addressDJIRHel, addresszftcexb, addressVxzv9a, uintfl3b76M, {from: accounts[0]});
		const uintdsDjMUk = BigInt("1761")
		const uintn9suqhC = BigInt("1763")
		const uintQd3eao9 = BigInt("1018")
		const uintX96y01g = BigInt("81")
		const address36NWw5 = "0x0000000000000000000000000000000000000001"
		const uintdH3HKN1 = BigInt("1016")
		const uintEkqqLb7 = BigInt("839")
		const addressBWzJHo3 = accounts[4]
		const uintEnNbKk5 = BigInt("694")
//		const addressk15VUyr = await FairStockEquityZEhIY84.business.call(address36NWw5, uintX96y01g, uintQd3eao9, uintn9suqhC, uintdsDjMUk, {from: accounts[4]});
//		const addressquyVjTp = await FairStockEquityZEhIY84.withdrawMTCallback.call(addressBWzJHo3, uintEkqqLb7, uintdH3HKN1, {from: accounts[0]});
//		const uint256QaI6XSU = await FairStockEquityZEhIY84.bonus.call(uintEnNbKk5, {from: accounts[4]});

		await expect(FairStockEquityZEhIY84.business.call(address36NWw5, uintX96y01g, uintQd3eao9, uintn9suqhC, uintdsDjMUk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressckoxOFr = accounts[3]
		const addressYgdjJSM = accounts[0]
		const addressDnMo9g3 = accounts[3]
		const addressTN1Hm8u = accounts[2]
		const uintIU4OHTy = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addressckoxOFr, addressYgdjJSM, addressDnMo9g3, addressTN1Hm8u, uintIU4OHTy, {from: accounts[3]});
		const uintbOAyoCG = BigInt("1669")
		const uintMyttSVf = BigInt("909")
		const addressooPr39D = accounts[3]
//		await FairStockEquityr3GegWM.f.call({from: accounts[4]});
//		const addresstIpvQw1 = await FairStockEquityr3GegWM.withdrawMTCallback.call(addressooPr39D, uintMyttSVf, uintbOAyoCG, {from: accounts[0]});

		await expect(FairStockEquityr3GegWM.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressLHsG5KP = accounts[3]
		const addressTKJ6jQs = accounts[0]
		const addressnstWGdv = accounts[3]
		const addressf1Eaa9j = accounts[2]
		const uintcyeDhae = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addressLHsG5KP, addressTKJ6jQs, addressnstWGdv, addressf1Eaa9j, uintcyeDhae, {from: accounts[3]});
		const uintn0PuOvc = BigInt("1754")
		const address9PFEM8 = accounts[3]
		const uintkvhQWLE = BigInt("634")
		const uintnsLScfz = BigInt("1559")
		const uinto9AgYzT = BigInt("1669")
		const uintxIKfXxG = BigInt("900")
		const address9DLiXT = accounts[2]
		const uintUAJgskG = BigInt("1439")
//		const addressNiCbey = await FairStockEquityr3GegWM.depositLPT.call(address9PFEM8, uintn0PuOvc, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256aLWhbzk = await FairStockEquityr3GegWM.invest.call(uintkvhQWLE, {from: accounts[2]});
//		const uint256YbXT3Nc = await FairStockEquityr3GegWM.setProfitPercentBonus.call(uintnsLScfz, {from: accounts[0]});
//		const addresstIpvQw1 = await FairStockEquityr3GegWM.withdrawMTCallback.call(address9DLiXT, uintxIKfXxG, uinto9AgYzT, {from: accounts[0]});
//		const uint256SKH2R1H = await FairStockEquityr3GegWM.reduceShare.call(uintUAJgskG, {from: accounts[3]});

		await expect(FairStockEquityr3GegWM.depositLPT.call(address9PFEM8, uintn0PuOvc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdkVoapT = "0x0000000000000000000000000000000000000001"
		const addressFTlspPi = accounts[0]
		const address8Ykgwt = accounts[4]
		const addressym991HP = accounts[3]
		const uinto708bwY = BigInt("1151")
		const FairStockEquityskL0hLG = await FairStockEquity.new(addressdkVoapT, addressFTlspPi, address8Ykgwt, addressym991HP, uinto708bwY, {from: accounts[5]});
		const uintJeRHC5H = BigInt("600")
		const uintLm1flu = BigInt("1354")
		const uintIoIl5qB = BigInt("593")
		const uintlDmrC8J = BigInt("1959")
		const addressy39IYHy = accounts[1]
//		await FairStockEquityskL0hLG.withdrawMT.call({from: accounts[1]});
//		const uint256aDX9x5j = await FairStockEquityskL0hLG.setStartTime.call(uintJeRHC5H, {from: accounts[3]});
//		const uint256yjvyEZ = await FairStockEquityskL0hLG.setProfitPercentPJ.call(uintLm1flu, {from: "0x0000000000000000000000000000000000000001"});
//		const addressrxNYdaG = await FairStockEquityskL0hLG.setModule.call(addressy39IYHy, uintlDmrC8J, uintIoIl5qB, {from: accounts[2]});

		await expect(FairStockEquityskL0hLG.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBapnrG = accounts[3]
		const addressliQ3YVy = accounts[0]
		const addressJiSAiFq = accounts[3]
		const addresshmSaBj5 = accounts[2]
		const uintvHhCasw = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addressBapnrG, addressliQ3YVy, addressJiSAiFq, addresshmSaBj5, uintvHhCasw, {from: accounts[3]});
		const uintaGCE6eE = BigInt("1598")
		const addressZQg8ihY = accounts[5]
		const uintmoWOYAG = BigInt("1669")
		const uintRm267WJ = BigInt("906")
		const addressKgTs49G = accounts[3]
//		const addressWA6l2TT = await FairStockEquityr3GegWM.withdrawLPT.call(addressZQg8ihY, uintaGCE6eE, {from: accounts[2]});
//		const addresstIpvQw1 = await FairStockEquityr3GegWM.withdrawMTCallback.call(addressKgTs49G, uintRm267WJ, uintmoWOYAG, {from: accounts[0]});

		await expect(FairStockEquityr3GegWM.withdrawLPT.call(addressZQg8ihY, uintaGCE6eE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressFpCsCN5 = accounts[3]
		const addresscQS8vQl = accounts[0]
		const addressWsKaix6 = accounts[3]
		const addressW90zT7G = accounts[2]
		const uintlMUlULB = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addressFpCsCN5, addresscQS8vQl, addressWsKaix6, addressW90zT7G, uintlMUlULB, {from: accounts[3]});
		const uintnl5uQJ7 = BigInt("1690")
		const uintEB5NC81 = BigInt("888")
		const uintrEkckPe = BigInt("1679")
		const uintMYU6pf = BigInt("906")
		const addresspb79fUP = accounts[3]
//		const uint256OCi19Dj = await FairStockEquityr3GegWM.depositBonus.call(uintnl5uQJ7, {from: accounts[1]});
//		const uint256ekes26 = await FairStockEquityr3GegWM.depositBonus.call(uintEB5NC81, {from: accounts[2]});
//		const addresstIpvQw1 = await FairStockEquityr3GegWM.withdrawMTCallback.call(addresspb79fUP, uintMYU6pf, uintrEkckPe, {from: accounts[0]});

		await expect(FairStockEquityr3GegWM.depositBonus.call(uintnl5uQJ7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressSiqKrni = accounts[3]
		const addressuI2iEt0 = accounts[0]
		const addressOhGtBkD = accounts[3]
		const addressaI9UqJ = accounts[2]
		const uintewwiMui = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addressSiqKrni, addressuI2iEt0, addressOhGtBkD, addressaI9UqJ, uintewwiMui, {from: accounts[3]});
		const uint0ziuFT = BigInt("329")
		const uintOUu5NPv = BigInt("1669")
		const uintPMEh4QN = BigInt("906")
		const addressx7b74me = accounts[3]
//		const uint256I8KLLPe = await FairStockEquityr3GegWM.setStartTime.call(uint0ziuFT, {from: accounts[3]});
//		const addresstIpvQw1 = await FairStockEquityr3GegWM.withdrawMTCallback.call(addressx7b74me, uintPMEh4QN, uintOUu5NPv, {from: accounts[0]});
//		await FairStockEquityr3GegWM.f.call({from: accounts[2]});

		await expect(FairStockEquityr3GegWM.setStartTime.call(uint0ziuFT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressP9qHA6 = accounts[3]
		const addresskdYiBNl = accounts[0]
		const addressUoFVNyx = accounts[3]
		const addressH1OtQ8I = accounts[2]
		const uintct5b39 = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addressP9qHA6, addresskdYiBNl, addressUoFVNyx, addressH1OtQ8I, uintct5b39, {from: accounts[3]});
		const uintoAmVJzj = BigInt("1669")
		const uintsP2KH2h = BigInt("866")
		const addressQRkfHBB = accounts[3]
		const uintuD8CtRt = BigInt("71")
//		await FairStockEquityr3GegWM.withdrawBonus.call({from: accounts[3]});
//		const addresstIpvQw1 = await FairStockEquityr3GegWM.withdrawMTCallback.call(addressQRkfHBB, uintsP2KH2h, uintoAmVJzj, {from: accounts[0]});
//		const uint256b2M697q = await FairStockEquityr3GegWM.setStartTime.call(uintuD8CtRt, {from: accounts[0]});

		await expect(FairStockEquityr3GegWM.withdrawBonus.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMSAZkPw = accounts[3]
		const addressqjbnCNR = accounts[0]
		const addresszn876dK = accounts[3]
		const addressgPLj8I = accounts[2]
		const uintF84RUtT = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addressMSAZkPw, addressqjbnCNR, addresszn876dK, addressgPLj8I, uintF84RUtT, {from: accounts[3]});
		const uintE5qUSiS = BigInt("1435")
		const uintXi6uwDM = BigInt("634")
//		const uint256k335Vvg = await FairStockEquityr3GegWM.reduceShare.call(uintE5qUSiS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256aLWhbzk = await FairStockEquityr3GegWM.invest.call(uintXi6uwDM, {from: accounts[2]});

		await expect(FairStockEquityr3GegWM.reduceShare.call(uintE5qUSiS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmxKew43 = accounts[3]
		const addresssjsu7uQ = accounts[0]
		const addressLQ5H78j = accounts[3]
		const addressrbVLdjx = accounts[2]
		const uintobVHsMQ = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addressmxKew43, addresssjsu7uQ, addressLQ5H78j, addressrbVLdjx, uintobVHsMQ, {from: accounts[3]});
		const uintZ0Hi24 = BigInt("858")
		const uintsdmhgu = BigInt("686")
		const addressuia5dVh = accounts[4]
		const uintc8upsc = BigInt("646")
		const addressBvl8HUi = accounts[2]
//		const addressB2qNseX = await FairStockEquityr3GegWM.withdrawBonusCallback.call(addressuia5dVh, uintsdmhgu, uintZ0Hi24, {from: accounts[2]});
//		const uint256aLWhbzk = await FairStockEquityr3GegWM.invest.call(uintc8upsc, {from: accounts[2]});
//		const addresslPRJDqH = await FairStockEquityr3GegWM.setDataSource.call(addressBvl8HUi, {from: accounts[2]});

		await expect(FairStockEquityr3GegWM.withdrawBonusCallback.call(addressuia5dVh, uintsdmhgu, uintZ0Hi24, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslvYcKnc = accounts[3]
		const address56UVHJ = accounts[0]
		const addressFLXeWUC = accounts[3]
		const addressflghsqp = accounts[2]
		const uintT9cjPpE = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addresslvYcKnc, address56UVHJ, addressFLXeWUC, addressflghsqp, uintT9cjPpE, {from: accounts[3]});
		const uint16G3lG = BigInt("635")
//		await FairStockEquityr3GegWM.withdrawPJ.call({from: accounts[3]});
//		const uint256aLWhbzk = await FairStockEquityr3GegWM.invest.call(uint16G3lG, {from: accounts[2]});

		await expect(FairStockEquityr3GegWM.withdrawPJ.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresscbOKPW = accounts[3]
		const addressoHhZYMu = accounts[0]
		const addressfrIkpZl = accounts[3]
		const addressLGG0yIS = accounts[2]
		const uintdwEJKa = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addresscbOKPW, addressoHhZYMu, addressfrIkpZl, addressLGG0yIS, uintdwEJKa, {from: accounts[3]});
		const uinta6zV71z = BigInt("1016")
		const uintrrvkGeZ = BigInt("71")
		const uintF7iABe = BigInt("906")
		const addressczF0AA7 = accounts[3]
//		const uint256Tth0wis = await FairStockEquityr3GegWM.bonus.call(uinta6zV71z, {from: accounts[2]});
//		const addresstIpvQw1 = await FairStockEquityr3GegWM.withdrawMTCallback.call(addressczF0AA7, uintF7iABe, uintrrvkGeZ, {from: accounts[0]});

		await expect(FairStockEquityr3GegWM.bonus.call(uinta6zV71z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressD9gG76D = accounts[3]
		const addressgPSnLM = accounts[0]
		const addressrmGtpAU = accounts[3]
		const addressIumWTfl = accounts[2]
		const uintrKtzsWj = BigInt("335")
		const FairStockEquityr3GegWM = await FairStockEquity.new(addressD9gG76D, addressgPSnLM, addressrmGtpAU, addressIumWTfl, uintrKtzsWj, {from: accounts[3]});
		const uintrMkk9am = BigInt("1209")
		const uintWUn2O23 = BigInt("131")
		const addressXr0MLIP = accounts[3]
		const uintrXExzv = BigInt("642")
		const addressF5qOWgC = await FairStockEquityr3GegWM.setModule.call(addressXr0MLIP, uintWUn2O23, uintrMkk9am, {from: accounts[3]});
//		await FairStockEquityr3GegWM.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256aLWhbzk = await FairStockEquityr3GegWM.invest.call(uintrXExzv, {from: accounts[2]});
//		await FairStockEquityr3GegWM.checkStart.call({from: accounts[1]});

		await expect(FairStockEquityr3GegWM.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})