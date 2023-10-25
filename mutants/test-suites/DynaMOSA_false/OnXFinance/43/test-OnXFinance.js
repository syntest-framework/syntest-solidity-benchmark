const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringxUR8tUD = "sEu3"
		const stringsTFzt4r = "FLAW8yMYuRZR8Y8ps8jBS3UUck6fKssk"
		const uintXSihvov = BigInt("162")
		const OnXFinanceiAgon28 = await OnXFinance.new(stringxUR8tUD, stringsTFzt4r, uintXSihvov, {from: accounts[2]});
		const addressY68DNxq = accounts[3]
		const addressuQWJSFC = accounts[1]
		const addressB1nsQIc = accounts[2]
		const addressiaU6dSq = accounts[2]
		const uintNrNf7RV = await OnXFinanceiAgon28.allowance.call(addressuQWJSFC, addressY68DNxq, {from: accounts[5]});
		const stringgsYkmS0 = await OnXFinanceiAgon28.symbol.call({from: accounts[0]});
		const uintlSQgwu = await OnXFinanceiAgon28.allowance.call(addressiaU6dSq, addressB1nsQIc, {from: accounts[3]});

		assert.equal(stringgsYkmS0, "FLAW8yMYuRZR8Y8ps8jBS3UUck6fKssk")
		assert.equal(uintNrNf7RV, BigInt("0"))
		assert.equal(uintlSQgwu, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringYOAV1sa = "8qJD1T6XEibhrMChpxtnWrU9QENGfda25nBTQ4ovq"
		const stringWAKDdw = "ROzWnmQ4fPm"
		const uintQcIdTam = BigInt("1720")
		const OnXFinanceZdbb5Do = await OnXFinance.new(stringYOAV1sa, stringWAKDdw, uintQcIdTam, {from: accounts[3]});
		const uintFguyhTJ = BigInt("1755")
		const addresso6tWtKU = "0x0000000000000000000000000000000000000001"
		const uintztiVhct = BigInt("1304")
		const addresstzZVV7B = accounts[4]
		const uintC57i0w1 = BigInt("118")
		const addressNHYgC5S = "0x0000000000000000000000000000000000000001"
//		const boolMOlBOo = await OnXFinanceZdbb5Do.increaseAllowance.call(addresso6tWtKU, uintFguyhTJ, {from: accounts[1]});
//		const boolWRIXuKf = await OnXFinanceZdbb5Do.transfer.call(addresstzZVV7B, uintztiVhct, {from: accounts[5]});
//		const stringMPzawZR = await OnXFinanceZdbb5Do.name.call({from: accounts[2]});
//		const stringyc4Zdu = await OnXFinanceZdbb5Do.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolDd8KD3x = await OnXFinanceZdbb5Do.transfer.call(addressNHYgC5S, uintC57i0w1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(OnXFinanceZdbb5Do.increaseAllowance.call(addresso6tWtKU, uintFguyhTJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringH3X48MG = "r1bf599irnVKPaKc3jFAvt9ucBU2ZDWdzPxagrS5Pe4QDTrFQpsqmaLuy"
		const stringEu0J2jm = "QyPjo"
		const uint4alOR7 = BigInt("1477")
		const OnXFinanceKZ6OwAG = await OnXFinance.new(stringH3X48MG, stringEu0J2jm, uint4alOR7, {from: accounts[3]});
		const uintkAvNKMG = BigInt("932")
		const addressHpsbxRr = accounts[1]
		const addresselic47b = accounts[4]
		const uintsj6BBq = BigInt("1093")
		const addresszYkFeF = accounts[3]
		const uintjTAGWiz = BigInt("619")
		const addresscxw9hiy = accounts[4]
		const addressnuGTa8h = accounts[5]
		const uintl0aaDpZ = BigInt("252")
		const addressf6bRMAN = accounts[5]
		const uinttvEmXp = BigInt("21")
		const addressKt6EMWb = accounts[1]
//		const boolhArDKh = await OnXFinanceKZ6OwAG.transferFrom.call(addresselic47b, addressHpsbxRr, uintkAvNKMG, {from: accounts[0]});
//		const boolSZ6pql6 = await OnXFinanceKZ6OwAG.decreaseAllowance.call(addresszYkFeF, uintsj6BBq, {from: accounts[2]});
//		const booliQ5c37C = await OnXFinanceKZ6OwAG.transferFrom.call(addressnuGTa8h, addresscxw9hiy, uintjTAGWiz, {from: accounts[2]});
//		const boolEjUiYq = await OnXFinanceKZ6OwAG.decreaseAllowance.call(addressf6bRMAN, uintl0aaDpZ, {from: accounts[1]});
//		const boolAG1I8ui = await OnXFinanceKZ6OwAG.transfer.call(addressKt6EMWb, uinttvEmXp, {from: accounts[4]});

		await expect(OnXFinanceKZ6OwAG.transferFrom.call(addresselic47b, addressHpsbxRr, uintkAvNKMG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringWIJTtub = "EuP6rUUDFu9XtSLI3BPw0lktRg4JduUp8e1C2hUixVnDD1tJaVz3hCmiypXCp1Ha62isnFBhQD5"
		const stringeGa2TsI = "w4SJi5BYGy5fQJ4kiB6ywxiTt"
		const uinthBrPZZO = BigInt("212")
		const OnXFinancez0v5nU = await OnXFinance.new(stringWIJTtub, stringeGa2TsI, uinthBrPZZO, {from: accounts[0]});
		const uintXrJ5O3 = BigInt("1437")
		const addressg8u4hG2 = accounts[2]
		const uintQKOstes = BigInt("337")
		const addresskzeQQyd = accounts[5]
		const uintCftnzo = BigInt("1585")
		const addresstcXDRc = accounts[3]
		const uintpjhyHbz = BigInt("697")
		const addresszWykmOr = accounts[4]
		const addressG6QLNrF = "0x0000000000000000000000000000000000000001"
//		const booloKuKgMh = await OnXFinancez0v5nU.approveAndCall.call(addressg8u4hG2, uintXrJ5O3, {from: accounts[3]});
//		const boolEoZACnH = await OnXFinancez0v5nU.approve.call(addresskzeQQyd, uintQKOstes, {from: accounts[0]});
//		const boolOXcNI7F = await OnXFinancez0v5nU.transfer.call(addresstcXDRc, uintCftnzo, {from: accounts[2]});
//		const boolas4qT5 = await OnXFinancez0v5nU.approve.call(addresszWykmOr, uintpjhyHbz, {from: accounts[0]});
//		const uintwotbUG5 = await OnXFinancez0v5nU.balanceOf.call(addressG6QLNrF, {from: accounts[0]});
//		const stringiVWjWC = await OnXFinancez0v5nU.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(OnXFinancez0v5nU.approveAndCall.call(addressg8u4hG2, uintXrJ5O3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringEfBlmTA = "uHSNW6NeEAUuzWRf835A9TGndWaaigc"
		const stringxCglUmk = "94HBRXxlWsPnB6zlB9iDeyJv0cZlTA3LnyUR"
		const uintFv0zAdf = BigInt("1825")
		const OnXFinanceAzezNLh = await OnXFinance.new(stringEfBlmTA, stringxCglUmk, uintFv0zAdf, {from: accounts[4]});
		const addresshhR7vo7 = accounts[4]
		const uintVmGyqTM = BigInt("1482")
		const addressWXQhQn1 = accounts[0]
		const uintTFVPCo = BigInt("473")
		const addressDfpJa8 = accounts[4]
		const uintHB7Z2NL = await OnXFinanceAzezNLh.balanceOf.call(addresshhR7vo7, {from: accounts[5]});
		const boolqFT2YGf = await OnXFinanceAzezNLh.approve.call(addressWXQhQn1, uintVmGyqTM, {from: accounts[4]});
//		const boolwDmmNr = await OnXFinanceAzezNLh.decreaseAllowance.call(addressDfpJa8, uintTFVPCo, {from: accounts[2]});

		assert.equal(boolqFT2YGf, true)
		assert.equal(uintHB7Z2NL, BigInt("1825000000000000000000"))
		await expect(OnXFinanceAzezNLh.decreaseAllowance.call(addressDfpJa8, uintTFVPCo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringCYiqznX = "AojTJGQGcGT"
		const stringZB2D0Is = "y1QnRImZmsyvdTsNykkksTf6d72oyuTHnXoP4oyNWzfQcwFHSWgtuNwnz86EBlgNyqdMiOm"
		const uintyZ2QanW = BigInt("46")
		const OnXFinancejYp92fj = await OnXFinance.new(stringCYiqznX, stringZB2D0Is, uintyZ2QanW, {from: "0x0000000000000000000000000000000000000001"});
		const uintOFpIkWJ = BigInt("1747")
		const addressQVe6Ejc = accounts[1]
		const addressxYIAcnm = accounts[5]
		const uintAQIGmE4 = BigInt("1952")
		const addresscCZNUfu = accounts[1]
		const uintgNAQYrm = BigInt("729")
		const addressxsaRIm7 = accounts[2]
		const uintpYK2KND = BigInt("421")
		const addresssN51Gez = accounts[2]
		const boolLV86jxx = await OnXFinancejYp92fj.transferFrom.call(addressxYIAcnm, addressQVe6Ejc, uintOFpIkWJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolX5sWtm = await OnXFinancejYp92fj.transfer.call(addresscCZNUfu, uintAQIGmE4, {from: accounts[2]});
		const boolRqJzSex = await OnXFinancejYp92fj.approveAndCall.call(addressxsaRIm7, uintgNAQYrm, {from: accounts[4]});
		const uintqzag5Sx = await OnXFinancejYp92fj.totalSupply.call({from: accounts[1]});
		const boolgfx6ONh = await OnXFinancejYp92fj.transfer.call(addresssN51Gez, uintpYK2KND, {from: accounts[5]});
	});

	it('test for OnXFinance', async () => {
		const stringXcURzNe = "I8asUFrOzIJgiETlY48LmWubafmr"
		const stringgXA7Z6N = "b16NTqt3Xa9RcgcrSWQfIvUsxQiw3DrDpBQnFWTIkAatnxuq8"
		const uintqla51vD = BigInt("81")
		const OnXFinancej8CcUhM = await OnXFinance.new(stringXcURzNe, stringgXA7Z6N, uintqla51vD, {from: accounts[3]});
		const uintKRh2edC = BigInt("628")
		const addressK7ryCN9 = accounts[3]
		const uintohRQk1d = BigInt("2041")
		const addressie5n9BI = accounts[0]
		const uintYN78f5 = BigInt("1237")
		const addressrSwqSO1 = accounts[3]
//		const boolZoyJogd = await OnXFinancej8CcUhM.transfer.call(addressK7ryCN9, uintKRh2edC, {from: accounts[2]});
//		const boolxRSPmT9 = await OnXFinancej8CcUhM.approve.call(addressie5n9BI, uintohRQk1d, {from: accounts[3]});
//		const uintEFvYtX = await OnXFinancej8CcUhM.totalSupply.call({from: accounts[0]});
//		const boolhLeEsQX = await OnXFinancej8CcUhM.transfer.call(addressrSwqSO1, uintYN78f5, {from: accounts[0]});
//		const stringq3ldcSJ = await OnXFinancej8CcUhM.name.call({from: accounts[4]});

		await expect(OnXFinancej8CcUhM.transfer.call(addressK7ryCN9, uintKRh2edC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringB80xScD = "lm1wQImDqJ"
		const stringInfivVR = "K1sZF7KRKq2Y1c66i2NeKwIxgHDuCVRBJzagftRrzmergo9BIBSm8MBpWMqUSsz6c"
		const uintXHUM6g4 = BigInt("1620")
		const OnXFinanceCQtJuhr = await OnXFinance.new(stringB80xScD, stringInfivVR, uintXHUM6g4, {from: accounts[1]});
		const uint2j6hgl = BigInt("1231")
		const addressrwgqbug = accounts[0]
		const uintZMLv2or = BigInt("1131")
		const addressYbdNJn1 = accounts[4]
		const uintzr49uwy = BigInt("1837")
		const addressnzxHiQj = accounts[4]
		const uintjUYb5H = BigInt("1421")
		const addressztbaLG9 = accounts[0]
		const boolby5ICCT = await OnXFinanceCQtJuhr.approveAndCall.call(addressrwgqbug, uint2j6hgl, {from: accounts[1]});
//		const boolSH9vkOn = await OnXFinanceCQtJuhr.increaseAllowance.call(addressYbdNJn1, uintZMLv2or, {from: accounts[0]});
//		const stringde2wnoT = await OnXFinanceCQtJuhr.name.call({from: accounts[1]});
//		const stringh2MYV4t = await OnXFinanceCQtJuhr.name.call({from: accounts[5]});
//		const boolNLh4iH8 = await OnXFinanceCQtJuhr.approveAndCall.call(addressnzxHiQj, uintzr49uwy, {from: accounts[3]});
//		const boolG4EAsG5 = await OnXFinanceCQtJuhr.increaseAllowance.call(addressztbaLG9, uintjUYb5H, {from: accounts[3]});

		assert.equal(boolby5ICCT, true)
		await expect(OnXFinanceCQtJuhr.increaseAllowance.call(addressYbdNJn1, uintZMLv2or, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringD4tewrb = "NJR8DzuxJ9id75YYLqQbADVM71tbpPt"
		const stringPzZagUu = "FG1pNRQiahTIWWTJjEaDsaaJoh3zBG"
		const uintPXuudsw = BigInt("873")
		const OnXFinances6GfTaG = await OnXFinance.new(stringD4tewrb, stringPzZagUu, uintPXuudsw, {from: accounts[1]});
		const addressm7j5nv = accounts[4]
		const uintCpfQqsf = BigInt("778")
		const addressXBA3Ecm = accounts[1]
		const addressJZgpPEi = accounts[4]
		const uintqHN31N9 = BigInt("1810")
		const addressVXMYq3 = accounts[5]
		const uintrSsry0 = BigInt("911")
		const addresse2PWbFb = "0x0000000000000000000000000000000000000001"
		const uintjdONwql = BigInt("1087")
		const addressXkMnKJg = accounts[1]
//		const boolg3JdM1k = await OnXFinances6GfTaG.transferownership.call(addressm7j5nv, {from: accounts[2]});
//		const booluXKyIlO = await OnXFinances6GfTaG.transferFrom.call(addressJZgpPEi, addressXBA3Ecm, uintCpfQqsf, {from: accounts[2]});
//		const boola161Okp = await OnXFinances6GfTaG.increaseAllowance.call(addressVXMYq3, uintqHN31N9, {from: accounts[5]});
//		const boolknBHSHg = await OnXFinances6GfTaG.approve.call(addresse2PWbFb, uintrSsry0, {from: accounts[3]});
//		const boolwrufWFt = await OnXFinances6GfTaG.transfer.call(addressXkMnKJg, uintjdONwql, {from: accounts[1]});

		await expect(OnXFinances6GfTaG.transferownership.call(addressm7j5nv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringB80xScD = "lm1wQImDqJ"
		const stringInfivVR = "K1sZF7KRKq2Y1c66i2NeKwIxgHDuCVRBJzagftRrzmergo9BIBSm8MBpWMqUSsz6c"
		const uintZirOLpA = BigInt("1620")
		const OnXFinanceCQtJuhr = await OnXFinance.new(stringB80xScD, stringInfivVR, uintZirOLpA, {from: accounts[1]});
		const uintzTNIOh = BigInt("1290")
		const addressGfcOkeS = accounts[0]
		const addressQOxZjtv = accounts[4]
		const addressYf2z52o = accounts[2]
		const uintoCjPCwO = BigInt("1231")
		const addressYvUcdgh = accounts[0]
		const uintLsmvs2H = BigInt("1837")
		const address5g8Sp8 = accounts[5]
		const uintgddAP9Z = BigInt("1421")
		const addressxDuo3NC = accounts[0]
//		const booleA7dHVA = await OnXFinanceCQtJuhr.transfer.call(addressGfcOkeS, uintzTNIOh, {from: "0x0000000000000000000000000000000000000001"});
//		const uinte6tOkCW = await OnXFinanceCQtJuhr.allowance.call(addressYf2z52o, addressQOxZjtv, {from: accounts[2]});
//		const boolby5ICCT = await OnXFinanceCQtJuhr.approveAndCall.call(addressYvUcdgh, uintoCjPCwO, {from: accounts[1]});
//		const stringh2MYV4t = await OnXFinanceCQtJuhr.name.call({from: accounts[5]});
//		const boolNLh4iH8 = await OnXFinanceCQtJuhr.approveAndCall.call(address5g8Sp8, uintLsmvs2H, {from: accounts[3]});
//		const boolG4EAsG5 = await OnXFinanceCQtJuhr.increaseAllowance.call(addressxDuo3NC, uintgddAP9Z, {from: accounts[3]});

		await expect(OnXFinanceCQtJuhr.transfer.call(addressGfcOkeS, uintzTNIOh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringesM3q6s = "nCMFxEBucn1Ekldk47BYd7TLwVt6SUzKK4Rrk6ncL4pjFGxiajwm86w"
		const stringUnda9jL = "Uv96LViqknumJNgUiI67W"
		const uintC8oJ7Vv = BigInt("157")
		const OnXFinanceyYza9cl = await OnXFinance.new(stringesM3q6s, stringUnda9jL, uintC8oJ7Vv, {from: accounts[4]});
		const uinteKUO4FS = BigInt("0")
		const addressSxAKb1I = accounts[4]
		const addressZHP2SaK = accounts[1]
		const addresswyk2Hrw = accounts[1]
		const boolmfiYQCR = await OnXFinanceyYza9cl.transferFrom.call(addressZHP2SaK, addressSxAKb1I, uinteKUO4FS, {from: accounts[0]});
		const uintdyxQgZI = await OnXFinanceyYza9cl.balanceOf.call(addresswyk2Hrw, {from: accounts[5]});

		assert.equal(boolmfiYQCR, true)
		assert.equal(uintdyxQgZI, BigInt("0"))
	});
})