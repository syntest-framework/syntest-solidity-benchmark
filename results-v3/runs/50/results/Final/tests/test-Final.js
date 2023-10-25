const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringUBveluJ = "a48Ze5BUG6cTC6IXk6Pydi9"
		const stringgIVpYA5 = "xqWfIMf8YulE1jJWfKNj1MeRJje8aGKe8aBEF5FzFcRbiKoGKk4jCajNIDuXBPytFMouzn1X2K6ewC5k"
		const uintkZGSBnj = BigInt("196")
		const FinalvEo8Cp = await Final.new(stringUBveluJ, stringgIVpYA5, uintkZGSBnj, {from: accounts[0]});
		const uintsYNQxRH = BigInt("2020")
		const addressLUgxiTR = accounts[2]
		const addresso59WBPg = accounts[0]
		const addressKxC6rvW = accounts[2]
		const uintIpI1Wf8 = BigInt("713")
		const addressolRyVns = accounts[2]
		const addressOA69FrN = accounts[1]
		const boolTXDfgvV = await FinalvEo8Cp.transfer.call(addressLUgxiTR, uintsYNQxRH, {from: accounts[3]});
		const uinticNikq8 = await FinalvEo8Cp.allowance.call(addressKxC6rvW, addresso59WBPg, {from: accounts[3]});
		const bool5surRL = await FinalvEo8Cp.transferFrom.call(addressOA69FrN, addressolRyVns, uintIpI1Wf8, {from: accounts[3]});

		await expect(FinalvEo8Cp.transfer.call(addressLUgxiTR, uintsYNQxRH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringjCi57cl = "Lugw8dbMHNo29KE5QqyNY1LTB7VdM8PEvuATaJOnnRRPALG4nay7bI"
		const stringWMgscN = "3EReky"
		const uinthancRF = BigInt("1070")
		const FinalZcwvnqN = await Final.new(stringjCi57cl, stringWMgscN, uinthancRF, {from: accounts[2]});
		const uintDtz0cNj = BigInt("2013")
		const addressLHygtMT = accounts[4]
		const uintL7Ez404 = BigInt("2010")
		const addresscBf2oNb = accounts[0]
		const address4iqP4o = accounts[2]
		const boolmfNI6Ig = await FinalZcwvnqN.approve.call(addressLHygtMT, uintDtz0cNj, {from: accounts[1]});
		const boolsNcpR60 = await FinalZcwvnqN.transferFrom.call(address4iqP4o, addresscBf2oNb, uintL7Ez404, {from: accounts[4]});

		assert.equal(boolmfNI6Ig, true)
		await expect(FinalZcwvnqN.transferFrom.call(address4iqP4o, addresscBf2oNb, uintL7Ez404, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringlS3SR50 = "l3AS7912hj1QavvJ7gcs7i4cT9sfb7MvaNiRUYXWM6T0oszXxyuI8E4RPT7zZRYGBF6uIv55XBsxa5"
		const stringzGKKBaw = "3umJUiO9GTNtgNlPgLMcxewIdnXK8O4nr13AJrbk4SO87dq6XQZOT3jmIOqDuxH1XwSa6o"
		const uintqM5KSfl = BigInt("1522")
		const FinalfykMeB = await Final.new(stringlS3SR50, stringzGKKBaw, uintqM5KSfl, {from: accounts[3]});
		const uintzcz9fSz = BigInt("508")
		const addressQn90XPm = accounts[5]
		const addressQPhDULK = accounts[2]
		const uintm0fKNSg = BigInt("193")
		const addressaA4wDx = accounts[2]
		const uintqvoAbw = BigInt("75")
		const addressDKKruS5 = accounts[3]
		const addressRAJCul1 = accounts[5]
		const boolnYZycAd = await FinalfykMeB.decreaseAllowance.call(addressQn90XPm, uintzcz9fSz, {from: "0x0000000000000000000000000000000000000001"});
		const uintEddtBig = await FinalfykMeB.balanceOf.call(addressQPhDULK, {from: accounts[5]});
		const boolGFuVLxv = await FinalfykMeB.approveAndCall.call(addressaA4wDx, uintm0fKNSg, {from: accounts[3]});
		const boolMLMfLc1 = await FinalfykMeB.transferFrom.call(addressRAJCul1, addressDKKruS5, uintqvoAbw, {from: accounts[1]});

		await expect(FinalfykMeB.decreaseAllowance.call(addressQn90XPm, uintzcz9fSz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringv1yTzpc = "MhR5AJiWR9APxeLJqDWNwJi46eW9vOw8rL5ybuDBRFeEPRgPwNr82Z7WmAYtJQVzoZPY8yKze7oCf"
		const stringSRilb9D = "dMUNqCU3tXfzjO9SOkyhIWWIeqL4e2snah2XApNE4AcYyp"
		const uintrKG5sLj = BigInt("1573")
		const FinalX8e6Ql = await Final.new(stringv1yTzpc, stringSRilb9D, uintrKG5sLj, {from: accounts[2]});
		const uintPBqSh4z = BigInt("1906")
		const addressj2V5hau = accounts[5]
		const uintIQDbzbW = BigInt("2026")
		const addressyTgaS24 = accounts[5]
		const uinthZUixxz = BigInt("741")
		const addressAQV8w1v = accounts[0]
		const booliCXEgYL = await FinalX8e6Ql.approve.call(addressj2V5hau, uintPBqSh4z, {from: accounts[0]});
		const boolemQp1IA = await FinalX8e6Ql.approveAndCall.call(addressyTgaS24, uintIQDbzbW, {from: accounts[0]});
		const boolBK2hHsW = await FinalX8e6Ql.transfer.call(addressAQV8w1v, uinthZUixxz, {from: accounts[2]});

		assert.equal(booliCXEgYL, true)
		await expect(FinalX8e6Ql.approveAndCall.call(addressyTgaS24, uintIQDbzbW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringYhMoa1z = "9dfHohxpcmot4VwQm1FNq1EBRR7HlgOYwJq6gK"
		const stringTcZk5aP = "awlQFXy8fQknrXhtcfN0xGyVLQSgBpQHr"
		const uintpbecCch = BigInt("1391")
		const FinalUompigr = await Final.new(stringYhMoa1z, stringTcZk5aP, uintpbecCch, {from: accounts[3]});
		const uintzPXTQTA = BigInt("103")
		const addresszEADWqA = accounts[4]
		const uintXM5CApY = BigInt("777")
		const addressEeFXbrE = accounts[4]
		const boolL0014nM = await FinalUompigr.transfer.call(addresszEADWqA, uintzPXTQTA, {from: accounts[3]});
		const stringabeKnk0 = await FinalUompigr.name.call({from: accounts[5]});
		const boolLfZzOsZ = await FinalUompigr.approve.call(addressEeFXbrE, uintXM5CApY, {from: accounts[1]});

		assert.equal(boolL0014nM, true)
		assert.equal(boolLfZzOsZ, true)
		assert.equal(stringabeKnk0, "9dfHohxpcmot4VwQm1FNq1EBRR7HlgOYwJq6gK")
	});

	it('test for Final', async () => {
		const stringYhMoa1z = "9dfHohxpcmot4VwQm1FNq1EBRR7HlgOYwJq6gK"
		const stringTcZk5aP = "awlQFXy8fQknrXhtcfN0xGyVLQSgBpQHr"
		const uintMnZXrTL = BigInt("1391")
		const FinalUompigr = await Final.new(stringYhMoa1z, stringTcZk5aP, uintMnZXrTL, {from: accounts[3]});
		const uintBzddi0E = BigInt("41")
		const addressJdoooVN = accounts[4]
		const addresswjfwquc = accounts[2]
		const uintAqulR3I = BigInt("1440")
		const addressXzUkNTJ = accounts[3]
		const uintv7V9U8O = BigInt("1615")
		const addressY3f9OX = accounts[2]
		const boolL0014nM = await FinalUompigr.transfer.call(addressJdoooVN, uintBzddi0E, {from: accounts[3]});
		const boold43DTGX = await FinalUompigr.transferownership.call(addresswjfwquc, {from: accounts[3]});
		const boolTCxN03k = await FinalUompigr.decreaseAllowance.call(addressXzUkNTJ, uintAqulR3I, {from: accounts[4]});
		const boolKwCUR5i = await FinalUompigr.transfer.call(addressY3f9OX, uintv7V9U8O, {from: accounts[4]});

		assert.equal(boolL0014nM, true)
		assert.equal(boold43DTGX, true)
		await expect(FinalUompigr.decreaseAllowance.call(addressXzUkNTJ, uintAqulR3I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringUBveluJ = "a48Ze5BUG6cTC6IXk6Pydi9"
		const stringgIVpYA5 = "xqWfIMf8YulE1jJWfKNj1MeRJje8aGKe8aBEF5FzFcRbiKoGKk4jCajNIDuXBPytFMouzn1X2K6ewC5k"
		const uintdQzsXy = BigInt("196")
		const FinalvEo8Cp = await Final.new(stringUBveluJ, stringgIVpYA5, uintdQzsXy, {from: accounts[0]});
		const uintDinuGcB = BigInt("386")
		const addressgGfQYZJ = "0x0000000000000000000000000000000000000001"
		const uinttLcP3O0 = BigInt("2037")
		const addressBRNLtiE = accounts[3]
		const addressIeuX8he = accounts[5]
		const uintZDwwSho = BigInt("713")
		const addressrcR4FEg = accounts[2]
		const addressdMONQ02 = accounts[1]
		const boolBw0vp3q = await FinalvEo8Cp.approveAndCall.call(addressgGfQYZJ, uintDinuGcB, {from: accounts[0]});
		const stringT6xTGvx = await FinalvEo8Cp.symbol.call({from: accounts[4]});
		const boolTXDfgvV = await FinalvEo8Cp.transfer.call(addressBRNLtiE, uinttLcP3O0, {from: accounts[3]});
		const uintNreWl22 = await FinalvEo8Cp.balanceOf.call(addressIeuX8he, {from: accounts[1]});
		const bool5surRL = await FinalvEo8Cp.transferFrom.call(addressdMONQ02, addressrcR4FEg, uintZDwwSho, {from: accounts[3]});

		assert.equal(boolBw0vp3q, true)
		assert.equal(stringT6xTGvx, "xqWfIMf8YulE1jJWfKNj1MeRJje8aGKe8aBEF5FzFcRbiKoGKk4jCajNIDuXBPytFMouzn1X2K6ewC5k")
		await expect(FinalvEo8Cp.transfer.call(addressBRNLtiE, uinttLcP3O0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringYhMoa1z = "9dfHohxpcmot4VwQm1FNq1EBRR7HlgOYwJq6gK"
		const stringTcZk5aP = "awlQFXy8fQknrXhtcfN0xGyVLQSgBpQHr"
		const uintQZYofEr = BigInt("1391")
		const FinalUompigr = await Final.new(stringYhMoa1z, stringTcZk5aP, uintQZYofEr, {from: accounts[3]});
		const uintUlWWCua = BigInt("0")
		const addressT2Pixfo = accounts[6]
		const uintOVHj8C0 = BigInt("1388")
		const addresshZtgrKg = accounts[3]
		const uintV5HKDD = BigInt("1337")
		const addressjwdKIfM = "0x0000000000000000000000000000000000000001"
		const addressmaFCXG = accounts[0]
		const boolL0014nM = await FinalUompigr.transfer.call(addressT2Pixfo, uintUlWWCua, {from: accounts[3]});
		const boolcn4Xcu2 = await FinalUompigr.transfer.call(addresshZtgrKg, uintOVHj8C0, {from: accounts[2]});
		const boolXEelWV = await FinalUompigr.transferFrom.call(addressmaFCXG, addressjwdKIfM, uintV5HKDD, {from: accounts[2]});

		assert.equal(boolL0014nM, true)
		await expect(FinalUompigr.transfer.call(addresshZtgrKg, uintOVHj8C0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringK6BBx7u = "nOz6nieNkmJYMoWh1cvXouBCsknVV9gkTdVzw4xn61UCtCkq3u"
		const stringj4O6ZzO = "05bjKByf2eSMIyQuyVEemOt3VkryPHrx3rFhxWc35m3gzzRaigRib8ag4Af3K5e3Yx6TkrOhWJiRZCjcrNS3zcvbGTFlpVac3E"
		const uintX6ht23z = BigInt("159")
		const FinalOqv70Vm = await Final.new(stringK6BBx7u, stringj4O6ZzO, uintX6ht23z, {from: "0x0000000000000000000000000000000000000001"});
		const uintiaJiNG4 = BigInt("952")
		const addressPMgplx = accounts[0]
		const addresslgyoqlA = accounts[3]
		const uintK9ol0M5 = BigInt("537")
		const addressPDFTHx = accounts[2]
		const boolDMp1Fqh = await FinalOqv70Vm.approve.call(addressPMgplx, uintiaJiNG4, {from: accounts[5]});
		const stringaILWYsb = await FinalOqv70Vm.symbol.call({from: accounts[2]});
		const uintgAaBIVV = await FinalOqv70Vm.balanceOf.call(addresslgyoqlA, {from: accounts[4]});
		const boolOL9rYxl = await FinalOqv70Vm.transfer.call(addressPDFTHx, uintK9ol0M5, {from: "0x0000000000000000000000000000000000000001"});
		const stringlI2LYsV = await FinalOqv70Vm.symbol.call({from: accounts[1]});
	});
})