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
//		const boolgVRuLIO = await FinaldSJHNgU.transfer.call(addressYp8JKwX, uintxhnCFBL, {from: accounts[2]});
//		const boolMbJteKl = await FinaldSJHNgU.transfer.call(addressmQX8gEp, uintxfZlmEZ, {from: accounts[3]});
//		const uint8hPLPk7l = await FinaldSJHNgU.decimals.call({from: accounts[3]});

		assert.equal(stringr2lGQHi, "u8SLMBsH1NhKcj8N4")
		await expect(FinaldSJHNgU.transfer.call(addressYp8JKwX, uintxhnCFBL, {from: accounts[2]})).to.be.rejectedWith(Error);
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
//		const boolZaCLxh3 = await FinalTXtYwrt.decreaseAllowance.call(addressxhFM8NF, uintuDR9ZUk, {from: accounts[5]});
//		const boolBakfTS = await FinalTXtYwrt.approve.call(addressWHTRNl1, uintD7DUpJY, {from: accounts[2]});
//		const boolHILmRsO = await FinalTXtYwrt.transfer.call(addressyWvnrOO, uintBnXAgcO, {from: accounts[5]});
//		const stringFoHN2xG = await FinalTXtYwrt.symbol.call({from: accounts[3]});
//		const boolHOxt18s = await FinalTXtYwrt.transfer.call(addressT1jSFNk, uintyaHk7Ro, {from: accounts[0]});

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
//		const boolpNfRK88 = await FinaljJ1VVAg.increaseAllowance.call(addressV3kwiiL, uintxtjUcY8, {from: accounts[4]});
//		const boolSXz9vrV = await FinaljJ1VVAg.approve.call(addressD8WPmNZ, uintvdvgDbp, {from: accounts[0]});
//		const uinthxwTdUS = await FinaljJ1VVAg.totalSupply.call({from: accounts[3]});

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
		const stringxDcDyJ0 = "u8SLMBsH1NhKcj8N4"
		const stringGVsPmgc = "YO6"
		const uintAiIYCTM = BigInt("91")
		const FinaldSJHNgU = await Final.new(stringxDcDyJ0, stringGVsPmgc, uintAiIYCTM, {from: accounts[1]});
		const uintwK1daUr = BigInt("1197")
		const addressIIpdCB0 = accounts[1]
		const addresstGRBhWR = accounts[1]
		const uintTUr4CeA = BigInt("549")
		const addressXrs8Hjr = accounts[6]
		const boolKjIudiL = await FinaldSJHNgU.transferFrom.call(addresstGRBhWR, addressIIpdCB0, uintwK1daUr, {from: accounts[1]});
		const stringr2lGQHi = await FinaldSJHNgU.name.call({from: accounts[4]});
//		const boolgVRuLIO = await FinaldSJHNgU.transfer.call(addressXrs8Hjr, uintTUr4CeA, {from: accounts[2]});
//		const uint8hPLPk7l = await FinaldSJHNgU.decimals.call({from: accounts[3]});

		assert.equal(boolKjIudiL, true)
		assert.equal(stringr2lGQHi, "u8SLMBsH1NhKcj8N4")
		await expect(FinaldSJHNgU.transfer.call(addressXrs8Hjr, uintTUr4CeA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringb42VVo = "jqxdje3tTtjaaBPKy3PazFGOTV7sa5iQBDrBLnW1NraQC"
		const stringS9vHBME = "UGEZTh5fflLisvUm"
		const uintLIBYLo = BigInt("250")
		const FinalHntdrx4 = await Final.new(stringb42VVo, stringS9vHBME, uintLIBYLo, {from: accounts[3]});
		const uinty4bcLw = BigInt("1281")
		const addressJS3lxUy = accounts[5]
		const addressskyaTLG = accounts[2]
		const bool2MmaV1 = await FinalHntdrx4.approve.call(addressJS3lxUy, uinty4bcLw, {from: accounts[5]});
//		const booldMbOxT = await FinalHntdrx4.transferownership.call(addressskyaTLG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool2MmaV1, true)
		await expect(FinalHntdrx4.transferownership.call(addressskyaTLG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringtFfiirC = "hRadDpsTTIbUMqgKi3wIuyE3jJPmnzvGnBaOxZ8b1mhmHnLoX5fcYaIVPNX4Bd4O"
		const stringWZgrpGp = "1eXtbNVEoH2hRcBQn7XvmrXkxEnwOOZentwe1teRM1s"
		const uintOCxMB2g = BigInt("1614")
		const FinalKfsvRg = await Final.new(stringtFfiirC, stringWZgrpGp, uintOCxMB2g, {from: accounts[1]});
		const addressJ9m2Pcp = "0x0000000000000000000000000000000000000000"
		const addressBbj6AN9 = accounts[5]
		const uintcFmllX5 = BigInt("741")
		const addresswDiAUK9 = accounts[1]
		const addressdIyBdi7 = accounts[4]
		const uintn3fEWe = BigInt("92")
		const addressYDDNR72 = accounts[0]
		const addressm2zhgdo = accounts[2]
		const uintl1zDq0g = BigInt("1299")
		const addressQIFP2tX = accounts[0]
		const uintKqlBUs0 = await FinalKfsvRg.allowance.call(addressBbj6AN9, addressJ9m2Pcp, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWZc8bq = await FinalKfsvRg.approveAndCall.call(addresswDiAUK9, uintcFmllX5, {from: accounts[2]});
//		const uintD3jARiv = await FinalKfsvRg.balanceOf.call(addressdIyBdi7, {from: accounts[2]});
//		const boolHUdqf9C = await FinalKfsvRg.transferFrom.call(addressm2zhgdo, addressYDDNR72, uintn3fEWe, {from: accounts[2]});
//		const stringEsPMtsR = await FinalKfsvRg.symbol.call({from: accounts[0]});
//		const boolqpFAIjl = await FinalKfsvRg.decreaseAllowance.call(addressQIFP2tX, uintl1zDq0g, {from: accounts[2]});
//		const uint8g16pqU0 = await FinalKfsvRg.decimals.call({from: accounts[3]});

		assert.equal(uintKqlBUs0, BigInt("0"))
		await expect(FinalKfsvRg.approveAndCall.call(addresswDiAUK9, uintcFmllX5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringQ02d8xk = "BtdGqrujNQSUVpiXIX6n4bUVebTuIqb6u989qmZyHk5TRAdJIHnkw9nst"
		const stringzgtowyU = "WKQWqGC4k2QhSoqrpd5XsqDHWH7OeJcfifiXUhZwkTmSa3SguydkvHbEgw1aLAAV5iD5AO1Vz9gFw3"
		const uintPPu5jNB = BigInt("1609")
		const FinalY10yk94 = await Final.new(stringQ02d8xk, stringzgtowyU, uintPPu5jNB, {from: accounts[3]});
		const uintnOQKrIs = BigInt("0")
		const addressRxpGg5K = accounts[5]
		const addressxad0UNi = accounts[2]
		const boolqSKh9G5 = await FinalY10yk94.transferFrom.call(addressxad0UNi, addressRxpGg5K, uintnOQKrIs, {from: accounts[1]});

		assert.equal(boolqSKh9G5, true)
	});

	it('test for Final', async () => {
		const stringb42VVo = "jqxdje3tTtjaaBPKy3PazFGOTV7sa5iQBDrBLnW1NraQC"
		const stringS9vHBME = "UGEZTh5fflLisvUm"
		const uintBeO4v2J = BigInt("250")
		const FinalHntdrx4 = await Final.new(stringb42VVo, stringS9vHBME, uintBeO4v2J, {from: accounts[3]});
		const uintaFOD2ga = BigInt("2025")
		const addressRCWDCRV = accounts[1]
		const uintFuDDUyI = BigInt("1281")
		const addressvJtbEo5 = accounts[5]
		const uintKoGbVQV = BigInt("754")
		const address1B5vsC = accounts[0]
		const uintweSVfhZ = BigInt("1332")
		const addressSeQ79Ls = accounts[2]
		const uintxKRZAAq = BigInt("1677")
		const addresspFFM0gX = accounts[2]
		const uint3RbwZy = BigInt("1985")
		const addressuog9mh = accounts[4]
		const boolKUXA1Fc = await FinalHntdrx4.transfer.call(addressRCWDCRV, uintaFOD2ga, {from: accounts[3]});
		const bool2MmaV1 = await FinalHntdrx4.approve.call(addressvJtbEo5, uintFuDDUyI, {from: accounts[5]});
		const booloEdVofa = await FinalHntdrx4.approveAndCall.call(address1B5vsC, uintKoGbVQV, {from: accounts[3]});
		const bool4rS1Nm = await FinalHntdrx4.approve.call(addressSeQ79Ls, uintweSVfhZ, {from: accounts[0]});
//		const booli4reOK = await FinalHntdrx4.approveAndCall.call(addresspFFM0gX, uintxKRZAAq, {from: accounts[4]});
//		const stringm0I54Xl = await FinalHntdrx4.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolmy35w7z = await FinalHntdrx4.approve.call(addressuog9mh, uint3RbwZy, {from: accounts[3]});

		assert.equal(bool2MmaV1, true)
		assert.equal(bool4rS1Nm, true)
		assert.equal(boolKUXA1Fc, true)
		assert.equal(booloEdVofa, true)
		await expect(FinalHntdrx4.approveAndCall.call(addresspFFM0gX, uintxKRZAAq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})