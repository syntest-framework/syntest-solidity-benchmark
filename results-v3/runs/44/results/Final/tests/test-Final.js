const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringxDcDyJ0 = "u8SLMBsH1NhKcj8N4"
		const stringGVsPmgc = "YO6"
		const uintyzzOhPv = BigInt("91")
		const FinaldSJHNgU = await Final.new(stringxDcDyJ0, stringGVsPmgc, uintyzzOhPv, {from: accounts[1]});
		const uintxhnCFBL = BigInt("573")
		const addressYp8JKwX = accounts[4]
		const uintxfZlmEZ = BigInt("136")
		const addressmQX8gEp = accounts[0]
		const stringr2lGQHi = await FinaldSJHNgU.name.call({from: accounts[4]});
		const boolgVRuLIO = await FinaldSJHNgU.transfer.call(addressYp8JKwX, uintxhnCFBL, {from: accounts[2]});
		const boolMbJteKl = await FinaldSJHNgU.transfer.call(addressmQX8gEp, uintxfZlmEZ, {from: accounts[3]});
		const uint8hPLPk7l = await FinaldSJHNgU.decimals.call({from: accounts[3]});

		assert.equal(stringr2lGQHi, "u8SLMBsH1NhKcj8N4")
		await expect(FinaldSJHNgU.transfer.call(addressYp8JKwX, uintxhnCFBL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringL9TylmG = "eEzk0YPsmqpIlKOwgESNaUKamNtq9L94KsoAzt9USIPXq"
		const stringJDxZsG8 = "kKJgFiuuIfUPdkBqwy7CbbrpQLDIKRw"
		const uinto2nst0 = BigInt("146")
		const Finall14xnM9 = await Final.new(stringL9TylmG, stringJDxZsG8, uinto2nst0, {from: accounts[0]});
		const uintwAGkyFL = BigInt("1568")
		const addressvhcrZs = accounts[2]
		const addressUTrgHlK = accounts[4]
		const uintPSi7RGm = BigInt("1267")
		const addressaTNN2eV = accounts[1]
		const addressEHLaHl1 = accounts[2]
		const uintcpdErrE = BigInt("1382")
		const addressPNTbT4 = accounts[0]
		const uintUmIeEFq = BigInt("1065")
		const addressfQ6rSnN = accounts[3]
		const addressk4FjVbL = accounts[0]
		const boolQdNyJL5 = await Finall14xnM9.transferFrom.call(addressUTrgHlK, addressvhcrZs, uintwAGkyFL, {from: accounts[0]});
		const boolLvYVURZ = await Finall14xnM9.transferFrom.call(addressEHLaHl1, addressaTNN2eV, uintPSi7RGm, {from: accounts[1]});
		const boolDPy5aob = await Finall14xnM9.transfer.call(addressPNTbT4, uintcpdErrE, {from: accounts[3]});
		const uint8Odlgd2Z = await Finall14xnM9.decimals.call({from: accounts[1]});
		const boolqkLjoTq = await Finall14xnM9.transferFrom.call(addressk4FjVbL, addressfQ6rSnN, uintUmIeEFq, {from: accounts[1]});

		await expect(Finall14xnM9.transferFrom.call(addressUTrgHlK, addressvhcrZs, uintwAGkyFL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringidmrXYy = "izkERCTaGYhWSxDYJM4j9dmeRj5YhpnbmOKd36wan72nQYC8Gt290S8zpI4Y7HzOowahaLtedIYg1PsbnO9xQP"
		const stringgTdJ7bU = "NNm9Ec7v8QVvQET7uXdfwlqb18hq3mpX85LHQThDotm5V4ceZ5LzNIH2"
		const uintK0c06W = BigInt("40")
		const FinalTXtYwrt = await Final.new(stringidmrXYy, stringgTdJ7bU, uintK0c06W, {from: accounts[1]});
		const uintuDR9ZUk = BigInt("154")
		const addressxhFM8NF = accounts[4]
		const uintD7DUpJY = BigInt("494")
		const addressWHTRNl1 = accounts[0]
		const uintBnXAgcO = BigInt("1324")
		const addressyWvnrOO = accounts[0]
		const uintyaHk7Ro = BigInt("1210")
		const addressT1jSFNk = "0x0000000000000000000000000000000000000001"
		const boolZaCLxh3 = await FinalTXtYwrt.decreaseAllowance.call(addressxhFM8NF, uintuDR9ZUk, {from: accounts[5]});
		const boolBakfTS = await FinalTXtYwrt.approve.call(addressWHTRNl1, uintD7DUpJY, {from: accounts[2]});
		const boolHILmRsO = await FinalTXtYwrt.transfer.call(addressyWvnrOO, uintBnXAgcO, {from: accounts[5]});
		const stringFoHN2xG = await FinalTXtYwrt.symbol.call({from: accounts[3]});
		const boolHOxt18s = await FinalTXtYwrt.transfer.call(addressT1jSFNk, uintyaHk7Ro, {from: accounts[0]});

		await expect(FinalTXtYwrt.decreaseAllowance.call(addressxhFM8NF, uintuDR9ZUk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringPzkWf4B = "2MApqXbMigaiFW2WYy"
		const stringspgDmaJ = "TqsdxnAiymMJIyDuYEVvRCOfF9KHnpJ0PpVL7dDRre"
		const uintARQhYsS = BigInt("1106")
		const FinaljJ1VVAg = await Final.new(stringPzkWf4B, stringspgDmaJ, uintARQhYsS, {from: accounts[3]});
		const addressDMbmU2Z = accounts[0]
		const addressbddzvvW = accounts[4]
		const uinteirKi8E = BigInt("1735")
		const addressj98viyc = "0x0000000000000000000000000000000000000001"
		const uintxtjUcY8 = BigInt("1348")
		const addressV3kwiiL = accounts[0]
		const uintvdvgDbp = BigInt("986")
		const addressD8WPmNZ = accounts[1]
		const uintCvMpRzO = await FinaljJ1VVAg.allowance.call(addressbddzvvW, addressDMbmU2Z, {from: accounts[2]});
		const boolTCkkq8u = await FinaljJ1VVAg.approve.call(addressj98viyc, uinteirKi8E, {from: accounts[5]});
		const uint8eFuRTtc = await FinaljJ1VVAg.decimals.call({from: accounts[0]});
		const boolpNfRK88 = await FinaljJ1VVAg.increaseAllowance.call(addressV3kwiiL, uintxtjUcY8, {from: accounts[4]});
		const boolSXz9vrV = await FinaljJ1VVAg.approve.call(addressD8WPmNZ, uintvdvgDbp, {from: accounts[0]});
		const uinthxwTdUS = await FinaljJ1VVAg.totalSupply.call({from: accounts[3]});

		assert.equal(boolTCkkq8u, true)
		assert.equal(uint8eFuRTtc, BigInt("18"))
		assert.equal(uintCvMpRzO, BigInt("0"))
		await expect(FinaljJ1VVAg.increaseAllowance.call(addressV3kwiiL, uintxtjUcY8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringdua065m = "xKdjy5PgvpdlO58aLDgWXHqLwImkT5lWd0H94SS91tYaOCi65I3NgB6fNSy6ig4Cyp8Mg9AAA25"
		const stringTrIrDYU = "Fyu6DDh9PzYbby27wFcQz27an1KBEcSxWOQ2InT1hHrnpLTwcoNWEEgLkLVW56wJrBgv1BctpRF3evaX75rrY"
		const uintLq5wtYn = BigInt("176")
		const FinalN2Ypec2 = await Final.new(stringdua065m, stringTrIrDYU, uintLq5wtYn, {from: "0x0000000000000000000000000000000000000001"});
		const uintZg422ML = BigInt("1137")
		const addressadq7Eqg = accounts[2]
		const addresspKNe5iW = accounts[3]
		const addressaAiL6o6 = accounts[4]
		const addressRrFFbdi = accounts[2]
		const uintImyR08e = BigInt("339")
		const addressqcFSTHJ = accounts[2]
		const addressYJgVW6 = accounts[3]
		const boolC6KQCqJ = await FinalN2Ypec2.increaseAllowance.call(addressadq7Eqg, uintZg422ML, {from: accounts[4]});
		const uintHA4e4Dh = await FinalN2Ypec2.balanceOf.call(addresspKNe5iW, {from: accounts[3]});
		const uintdl2imjb = await FinalN2Ypec2.allowance.call(addressRrFFbdi, addressaAiL6o6, {from: accounts[5]});
		const boolIGl7zIv = await FinalN2Ypec2.transferFrom.call(addressYJgVW6, addressqcFSTHJ, uintImyR08e, {from: accounts[5]});
	});

	it('test for Final', async () => {
		const stringL9TylmG = "eEzk0YPsmqpIlKOwgESNaUKamNtq9L94KsoAzt9USIPXq"
		const stringJDxZsG8 = "kKJgFiuuIfUPdkBqwy7CbbrpQLDIKRw"
		const uintUz57yCI = BigInt("146")
		const Finall14xnM9 = await Final.new(stringL9TylmG, stringJDxZsG8, uintUz57yCI, {from: accounts[0]});
		const uintczEC3Bl = BigInt("830")
		const addressEVTSfhG = accounts[0]
		const uintxBxhUYM = BigInt("629")
		const addressZsqbBkB = accounts[2]
		const uintg7tZ9Zn = BigInt("513")
		const addressXt9sYe = accounts[5]
		const uintmV8xgFb = BigInt("1065")
		const addressprAoEaa = accounts[3]
		const addressxxJPMRp = accounts[0]
		const stringBsRKtcw = await Finall14xnM9.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolDPy5aob = await Finall14xnM9.transfer.call(addressEVTSfhG, uintczEC3Bl, {from: accounts[3]});
		const booltOihY7Z = await Finall14xnM9.transfer.call(addressZsqbBkB, uintxBxhUYM, {from: accounts[1]});
		const boolyXY63r4 = await Finall14xnM9.approve.call(addressXt9sYe, uintg7tZ9Zn, {from: accounts[2]});
		const stringLKHN42 = await Finall14xnM9.symbol.call({from: accounts[3]});
		const uint8Odlgd2Z = await Finall14xnM9.decimals.call({from: accounts[1]});
		const boolqkLjoTq = await Finall14xnM9.transferFrom.call(addressxxJPMRp, addressprAoEaa, uintmV8xgFb, {from: accounts[1]});

		assert.equal(stringBsRKtcw, "kKJgFiuuIfUPdkBqwy7CbbrpQLDIKRw")
		await expect(Finall14xnM9.transfer.call(addressEVTSfhG, uintczEC3Bl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringboYhzga = "gS7h1xmhni8Ft31QWaRtqkHAkz9KtycmZe"
		const stringgKpuLw = ""
		const uintf7ph8rq = BigInt("27")
		const FinalZF2sKEm = await Final.new(stringboYhzga, stringgKpuLw, uintf7ph8rq, {from: accounts[4]});
		const uintCGHbMf3 = BigInt("616")
		const addressB2PboVh = accounts[1]
		const uintevF3u5C = BigInt("1427")
		const addressEWFJkT5 = accounts[5]
		const addresshnqEajH = accounts[0]
		const uintm4D0p8z = BigInt("577")
		const addressgvA64Nv = accounts[1]
		const addressMG5mbPd = accounts[4]
		const uinteR22hq = BigInt("1010")
		const addressSSbuClb = accounts[3]
		const boolGfke6Fm = await FinalZF2sKEm.approveAndCall.call(addressB2PboVh, uintCGHbMf3, {from: accounts[2]});
		const boolRnlUey = await FinalZF2sKEm.increaseAllowance.call(addressEWFJkT5, uintevF3u5C, {from: accounts[0]});
		const uintqUsHJfA = await FinalZF2sKEm.balanceOf.call(addresshnqEajH, {from: accounts[3]});
		const booleL77yeb = await FinalZF2sKEm.transferFrom.call(addressMG5mbPd, addressgvA64Nv, uintm4D0p8z, {from: accounts[4]});
		const boolJB3P0r = await FinalZF2sKEm.approve.call(addressSSbuClb, uinteR22hq, {from: accounts[3]});

		await expect(FinalZF2sKEm.approveAndCall.call(addressB2PboVh, uintCGHbMf3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringfUXmRwn = "kOopYQWEn1MWrqvEhMMYpc8fAV9NxfBwj28TCk7Okp2dBfW6RixU7wxWBv6ANirzcVc"
		const stringz9TLgIr = "jwlkTfrpIrTRtEeK6MqMvnL8V59ynDISvfBBIqFnv5PAEMb4xDVEiUdMr4eQ0da"
		const uintvzEkt0x = BigInt("8")
		const FinalvXEDtrl = await Final.new(stringfUXmRwn, stringz9TLgIr, uintvzEkt0x, {from: accounts[0]});
		const addressTCN3zWG = accounts[0]
		const uintp1ZiSWC = await FinalvXEDtrl.totalSupply.call({from: accounts[5]});
		const uintOrURHt = await FinalvXEDtrl.totalSupply.call({from: accounts[5]});
		const boolSRQ3teb = await FinalvXEDtrl.transferownership.call(addressTCN3zWG, {from: accounts[1]});

		assert.equal(uintOrURHt, BigInt("8000000000000000000"))
		assert.equal(uintp1ZiSWC, BigInt("8000000000000000000"))
		await expect(FinalvXEDtrl.transferownership.call(addressTCN3zWG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringqtJSV5s = "gU3d29qMNbh6HoOLFiTS5hMRECA"
		const stringTFuuXCs = "MFwxPbjRgjGdMKdX"
		const uintfRvLlpt = BigInt("1977")
		const FinalUE7ukti = await Final.new(stringqtJSV5s, stringTFuuXCs, uintfRvLlpt, {from: accounts[3]});
		const uintuHN3Z1u = BigInt("1236")
		const addressXM2owV = accounts[0]
		const addressGKjnRYw = accounts[2]
		const uintgr2ydzY = BigInt("1495")
		const addressDduil9k = accounts[2]
		const addressc3z0zUp = accounts[1]
		const addressBr56Wvs = accounts[2]
		const addressHImLCs = accounts[3]
		const uintPOaunG7 = BigInt("925")
		const addressCL6gHQe = accounts[5]
		const booldaZOIvp = await FinalUE7ukti.approve.call(addressXM2owV, uintuHN3Z1u, {from: accounts[0]});
		const boolH0cQz7w = await FinalUE7ukti.transferownership.call(addressGKjnRYw, {from: accounts[3]});
		const boolWKc7Rw = await FinalUE7ukti.transferFrom.call(addressc3z0zUp, addressDduil9k, uintgr2ydzY, {from: accounts[2]});
		const uintygp7ci = await FinalUE7ukti.allowance.call(addressHImLCs, addressBr56Wvs, {from: accounts[2]});
		const boolwAVJS3B = await FinalUE7ukti.approve.call(addressCL6gHQe, uintPOaunG7, {from: accounts[1]});
		const uint8uJTw8e6 = await FinalUE7ukti.decimals.call({from: accounts[3]});
		const uint8DaYdwBI = await FinalUE7ukti.decimals.call({from: accounts[5]});

		assert.equal(boolH0cQz7w, true)
		assert.equal(booldaZOIvp, true)
		await expect(FinalUE7ukti.transferFrom.call(addressc3z0zUp, addressDduil9k, uintgr2ydzY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringxDcDyJ0 = "u8SLMBsH1NhKcj8N4"
		const stringGVsPmgc = "YO6"
		const uintV2Fzrdo = BigInt("91")
		const FinaldSJHNgU = await Final.new(stringxDcDyJ0, stringGVsPmgc, uintV2Fzrdo, {from: accounts[1]});
		const uintGLwSD6o = BigInt("191")
		const addressDUhnEAn = accounts[5]
		const uintT0R4GMF = BigInt("989")
		const addressikKRO8L = accounts[2]
		const uinte8PyA1l = BigInt("1110")
		const addressX7aaR8K = accounts[1]
		const uintzQM7UkR = BigInt("1700")
		const addressNrrhPgs = accounts[4]
		const addressuvyPwUR = accounts[5]
		const uintGDgM7IL = BigInt("602")
		const addressGIVArUe = accounts[4]
		const boolSXKaFCf = await FinaldSJHNgU.approveAndCall.call(addressDUhnEAn, uintGLwSD6o, {from: accounts[1]});
		const stringr2lGQHi = await FinaldSJHNgU.name.call({from: accounts[4]});
		const boolZTiyKpB = await FinaldSJHNgU.approveAndCall.call(addressikKRO8L, uintT0R4GMF, {from: accounts[2]});
		const stringKzaNTEx = await FinaldSJHNgU.symbol.call({from: accounts[5]});
		const booljeyEfbt = await FinaldSJHNgU.decreaseAllowance.call(addressX7aaR8K, uinte8PyA1l, {from: accounts[0]});
		const boolzGUtsaS = await FinaldSJHNgU.transferFrom.call(addressuvyPwUR, addressNrrhPgs, uintzQM7UkR, {from: accounts[0]});
		const boolgVRuLIO = await FinaldSJHNgU.transfer.call(addressGIVArUe, uintGDgM7IL, {from: accounts[2]});

		assert.equal(boolSXKaFCf, true)
		assert.equal(stringr2lGQHi, "u8SLMBsH1NhKcj8N4")
		await expect(FinaldSJHNgU.approveAndCall.call(addressikKRO8L, uintT0R4GMF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringfUXmRwn = "kOopYQWEn1MWrqvEhMMYpc8fAV9NxfBwj28TCk7Okp2dBfW6RixU7wxWBv6ANirzcVc"
		const stringz9TLgIr = "jwlkTfrpIrTRtEeK6MqMvnL8V59ynDISvfBBIqFnv5PAEMb4xDVEiUdMr4eQ0da"
		const uintytfoyNO = BigInt("8")
		const FinalvXEDtrl = await Final.new(stringfUXmRwn, stringz9TLgIr, uintytfoyNO, {from: accounts[0]});
		const uintZ0CrtyW = BigInt("0")
		const addresslPyQThg = accounts[4]
		const addressSQ4XiaF = accounts[0]
		const addressX37pIiK = accounts[4]
		const uintFqzTeR3 = BigInt("62")
		const addressrYK9Kuc = accounts[0]
		const uintKPBmJfB = BigInt("251")
		const addressAe9VUJJ = accounts[4]
		const boolHrNtTXr = await FinalvXEDtrl.transferFrom.call(addressSQ4XiaF, addresslPyQThg, uintZ0CrtyW, {from: accounts[2]});
		const uintSJmzjns = await FinalvXEDtrl.balanceOf.call(addressX37pIiK, {from: accounts[0]});
		const boolMVoNfvY = await FinalvXEDtrl.decreaseAllowance.call(addressrYK9Kuc, uintFqzTeR3, {from: accounts[0]});
		const boolygjEkMc = await FinalvXEDtrl.increaseAllowance.call(addressAe9VUJJ, uintKPBmJfB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHrNtTXr, true)
		assert.equal(uintSJmzjns, BigInt("0"))
		await expect(FinalvXEDtrl.decreaseAllowance.call(addressrYK9Kuc, uintFqzTeR3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})