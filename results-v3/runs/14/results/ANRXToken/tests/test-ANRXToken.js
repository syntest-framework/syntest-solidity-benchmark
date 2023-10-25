const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintaDVU4ib = BigInt("1594")
		const stringnzhIR1h = "uE4dAJxWuQs1J"
		const stringapDL8wH = "WqOXIjeGeZJLmsK7SFvPYvGk4CvOP3AdJkagzDAy42iIlRnetCXev17547WHK"
		const uintrRvlPp = BigInt("1422")
		const ANRXTokenNeVi2st = await ANRXToken.new(uintaDVU4ib, stringnzhIR1h, stringapDL8wH, uintrRvlPp, {from: accounts[5]});
		const addressPo7tlEi = accounts[4]
		const uintDPr0dsd = BigInt("984")
		const addressnrINe1 = accounts[3]
		const uintgQnB6DC = await ANRXTokenNeVi2st.balanceOf.call(addressPo7tlEi, {from: accounts[0]});
		const uintjFPzmog = await ANRXTokenNeVi2st.issue.call(uintDPr0dsd, {from: "0x0000000000000000000000000000000000000001"});
		const addresswnK60dF = await ANRXTokenNeVi2st.deprecate.call(addressnrINe1, {from: accounts[1]});

		assert.equal(uintgQnB6DC, BigInt("0"))
		await expect(ANRXTokenNeVi2st.issue.call(uintDPr0dsd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintMrwGRf2 = BigInt("509")
		const stringfc18R7O = "5wJqsVERivWAAmCEEQ2Y4Qrya3sGLib62vyjG9byeNhSCaoAVR658etgQvNO9XKmM3QIilrRU8mSX5PXUMc9z73"
		const stringQzXm9ey = "5mAgKU8iGowecwmy9sZz14XSzRijE4UlMY9gOqb0Ver9"
		const uintqU6mBUJ = BigInt("1613")
		const ANRXToken1xI4gm = await ANRXToken.new(uintMrwGRf2, stringfc18R7O, stringQzXm9ey, uintqU6mBUJ, {from: accounts[2]});
		const uintVQGwPk = BigInt("785")
		const addressUNwcVZX = accounts[2]
		const uintAjPlHK2 = BigInt("1908")
		const addressiSI81w = accounts[0]
		const addressW0Svkeq = accounts[5]
		const addressdGmQykt = accounts[1]
		const boolQHk20hx = await ANRXToken1xI4gm.transfer.call(addressUNwcVZX, uintVQGwPk, {from: accounts[5]});
		const boolxRio9YV = await ANRXToken1xI4gm.transferFrom.call(addressW0Svkeq, addressiSI81w, uintAjPlHK2, {from: "0x0000000000000000000000000000000000000001"});
		const addressLnC7PrR = await ANRXToken1xI4gm.deprecate.call(addressdGmQykt, {from: accounts[1]});

		await expect(ANRXToken1xI4gm.transfer.call(addressUNwcVZX, uintVQGwPk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintSRLRd4G = BigInt("533")
		const stringke8M4Gc = "i9JDDHNHEDVLukcgDhERqoFOLpCr2eV86Ppf2niVd5EfW8y89VlW"
		const stringPb6PB2P = "pp6t1Hur52zYSe6Shwf0kwkNuIyWfFDsjiIPpsZHA7ODFjGhQSD6HxWJS0TfXZUFVAAtRjHe1vPXLMBwY9BSBuRwh8jwOWug"
		const uintaf00FQq = BigInt("1167")
		const ANRXTokenE1vktU = await ANRXToken.new(uintSRLRd4G, stringke8M4Gc, stringPb6PB2P, uintaf00FQq, {from: accounts[0]});
		const addressMAMIXRP = accounts[1]
		const uintRxCMxgb = BigInt("1456")
		const addresscVR7JZh = accounts[3]
		const addressIr2Kgpi = accounts[3]
		const uintmj9v4d = BigInt("1287")
		const addressCjMesIg = accounts[1]
		const addressGoovXkM = accounts[3]
		const uintuUvovsq = BigInt("1454")
		const addressYF8mtwx = accounts[2]
		const addressLpiaf2m = accounts[2]
		const uintWqXpDRQ = await ANRXTokenE1vktU.balanceOf.call(addressMAMIXRP, {from: accounts[0]});
		const boolsqCct0v = await ANRXTokenE1vktU.transferFrom.call(addressIr2Kgpi, addresscVR7JZh, uintRxCMxgb, {from: accounts[2]});
		const boolPkAUdb = await ANRXTokenE1vktU.transferFrom.call(addressGoovXkM, addressCjMesIg, uintmj9v4d, {from: accounts[2]});
		const uintQjnH6HU = await ANRXTokenE1vktU.redeem.call(uintuUvovsq, {from: accounts[2]});
		const uintkjYC6lR = await ANRXTokenE1vktU.allowance.call(addressLpiaf2m, addressYF8mtwx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintWqXpDRQ, BigInt("0"))
		await expect(ANRXTokenE1vktU.transferFrom.call(addressIr2Kgpi, addresscVR7JZh, uintRxCMxgb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintqFYrOKg = BigInt("1733")
		const stringTp3gYj0 = "CQ7oUYsYfMctmftWXVYpKgbYK80t16u65I1VUhNz5CDu3vDy3YYpDFFV9P9"
		const stringNRmwqbh = "o7iElNfm69xEjzpyb"
		const uintbH7lucR = BigInt("1010")
		const ANRXTokenToH9aLG = await ANRXToken.new(uintqFYrOKg, stringTp3gYj0, stringNRmwqbh, uintbH7lucR, {from: accounts[4]});
		const addressVaL7AxL = accounts[2]
		const addresswOxT5z = accounts[0]
		const addressRGzzxpN = accounts[4]
		const addressZH7fCk = accounts[1]
		const address7EO8VB = accounts[1]
		const uint5VDcWr = await ANRXTokenToH9aLG.allowance.call(addresswOxT5z, addressVaL7AxL, {from: accounts[0]});
		const uint5jXw4J = await ANRXTokenToH9aLG.totalSupply.call({from: accounts[2]});
		const uintKeI5PDy = await ANRXTokenToH9aLG.balanceOf.call(addressRGzzxpN, {from: accounts[4]});
		const uintqeucchN = await ANRXTokenToH9aLG.allowance.call(address7EO8VB, addressZH7fCk, {from: accounts[0]});

		assert.equal(uint5VDcWr, BigInt("0"))
		assert.equal(uint5jXw4J, BigInt("1733"))
		assert.equal(uintKeI5PDy, BigInt("1733"))
		assert.equal(uintqeucchN, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintYb5ymUo = BigInt("1594")
		const stringnzhIR1h = "uE4dAJxWuQs1J"
		const stringapDL8wH = "WqOXIjeGeZJLmsK7SFvPYvGk4CvOP3AdJkagzDAy42iIlRnetCXev17547WHK"
		const uintzJOCGk8 = BigInt("1422")
		const ANRXTokenNeVi2st = await ANRXToken.new(uintYb5ymUo, stringnzhIR1h, stringapDL8wH, uintzJOCGk8, {from: accounts[5]});
		const uintDcy4P85 = BigInt("467")
		const addressDGhicHs = "0x0000000000000000000000000000000000000001"
		const addressbP673CS = accounts[4]
		const uintgvvrTd = BigInt("984")
		const addressAeyGWFm = accounts[3]
		const bool7VSyUC = await ANRXTokenNeVi2st.approve.call(addressDGhicHs, uintDcy4P85, {from: accounts[4]});
		const uintkS1OKlH = await ANRXTokenNeVi2st.totalSupply.call({from: accounts[1]});
		const uintgQnB6DC = await ANRXTokenNeVi2st.balanceOf.call(addressbP673CS, {from: accounts[0]});
		const uintjFPzmog = await ANRXTokenNeVi2st.issue.call(uintgvvrTd, {from: "0x0000000000000000000000000000000000000001"});
		const addresswnK60dF = await ANRXTokenNeVi2st.deprecate.call(addressAeyGWFm, {from: accounts[1]});

		assert.equal(bool7VSyUC, true)
		assert.equal(uintgQnB6DC, BigInt("0"))
		assert.equal(uintkS1OKlH, BigInt("1594"))
		await expect(ANRXTokenNeVi2st.issue.call(uintgvvrTd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintuHFO5qv = BigInt("509")
		const stringfc18R7O = "5wJqsVERivWAAmCEEQ2Y4Qrya3sGLib62vyjG9byeNhSCaoAVR658etgQvNO9XKmM3QIilrRU8mSX5PXUMc9z73"
		const stringQzXm9ey = "5mAgKU8iGowecwmy9sZz14XSzRijE4UlMY9gOqb0Ver9"
		const uintENUZ9Gr = BigInt("1613")
		const ANRXToken1xI4gm = await ANRXToken.new(uintuHFO5qv, stringfc18R7O, stringQzXm9ey, uintENUZ9Gr, {from: accounts[2]});
		const uintSQcMBbf = BigInt("2016")
		const uintJW1tIcp = BigInt("785")
		const addressGft30g5 = accounts[2]
		const uintHqk1PbY = BigInt("1908")
		const addressypU4r59 = accounts[0]
		const addressMlRbMxF = accounts[5]
		const uintPLUwBIV = await ANRXToken1xI4gm.issue.call(uintSQcMBbf, {from: accounts[2]});
		const boolQHk20hx = await ANRXToken1xI4gm.transfer.call(addressGft30g5, uintJW1tIcp, {from: accounts[5]});
		const boolxRio9YV = await ANRXToken1xI4gm.transferFrom.call(addressMlRbMxF, addressypU4r59, uintHqk1PbY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ANRXToken1xI4gm.transfer.call(addressGft30g5, uintJW1tIcp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintjX4aj20 = BigInt("1361")
		const stringDoYfVOB = "0BmTBFTqQhGzq9d2cYuXvqiqtePtTPnHd6scOvLBP5e1InQ9tGjAvyvYDQ18jA5"
		const stringoonq69 = "P37xwyLuSwocQu2tktjGOyDpBnXvEf3frq"
		const uinttz9QN9x = BigInt("1330")
		const ANRXTokenseG1hP = await ANRXToken.new(uintjX4aj20, stringDoYfVOB, stringoonq69, uinttz9QN9x, {from: accounts[4]});
		const uintJZYFCXT = BigInt("1488")
		const uintH6uUDi6 = BigInt("178")
		const uintrfEvJAW = BigInt("1476")
		const address2WqibT = accounts[1]
		const addressZ3bBSKm = accounts[1]
		const uintlvBiev3 = await ANRXTokenseG1hP.setParams.call(uintH6uUDi6, uintJZYFCXT, {from: accounts[4]});
		const uintXZkx6d0 = await ANRXTokenseG1hP.issue.call(uintrfEvJAW, {from: accounts[3]});
		const addressAW0GWY = await ANRXTokenseG1hP.deprecate.call(address2WqibT, {from: accounts[1]});
		const addressnhpc4y4 = await ANRXTokenseG1hP.deprecate.call(addressZ3bBSKm, {from: accounts[4]});

		await expect(ANRXTokenseG1hP.setParams.call(uintH6uUDi6, uintJZYFCXT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintbgZmTG = BigInt("850")
		const stringbiDDZqX = "UzFh2uCNXrNx9GmettAGy1tog74fl06wUGScvumG4T1GYa40uYAQ2DxxPT"
		const stringWLwU5Xi = "lyt"
		const uint6FzA1T = BigInt("1653")
		const ANRXTokenmY6PjGH = await ANRXToken.new(uintbgZmTG, stringbiDDZqX, stringWLwU5Xi, uint6FzA1T, {from: "0x0000000000000000000000000000000000000001"});
		const uintzT3fiDs = BigInt("1255")
		const uintXK84xPv = BigInt("538")
		const uintmtvRNnD = BigInt("309")
		const uintI4YE4Ju = await ANRXTokenmY6PjGH.setParams.call(uintXK84xPv, uintzT3fiDs, {from: accounts[3]});
		const uintKNo2rgo = await ANRXTokenmY6PjGH.totalSupply.call({from: accounts[1]});
		const uintW0HsoMP = await ANRXTokenmY6PjGH.redeem.call(uintmtvRNnD, {from: accounts[0]});
	});

	it('test for ANRXToken', async () => {
		const uinthFfbcIX = BigInt("1733")
		const stringTp3gYj0 = "CQ7oUYsYfMctmftWXVYpKgbYK80t16u65I1VUhNz5CDu3vDy3YYpDFFV9P9"
		const stringNRmwqbh = "o7iElNfm69xEjzpyb"
		const uint6c7lWW = BigInt("1010")
		const ANRXTokenToH9aLG = await ANRXToken.new(uinthFfbcIX, stringTp3gYj0, stringNRmwqbh, uint6c7lWW, {from: accounts[4]});
		const addressJfEqso = accounts[0]
		const addressLSxqBq = accounts[2]
		const addressxYGNXuA = accounts[1]
		const addressrEsUs1B = await ANRXTokenToH9aLG.deprecate.call(addressJfEqso, {from: accounts[4]});
		const uintqeucchN = await ANRXTokenToH9aLG.allowance.call(addressxYGNXuA, addressLSxqBq, {from: accounts[0]});

		assert.equal(uintqeucchN, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uinthcmH5A2 = BigInt("509")
		const stringfc18R7O = "5wJqsVERivWAAmCEEQ2Y4Qrya3sGLib62vyjG9byeNhSCaoAVR658etgQvNO9XKmM3QIilrRU8mSX5PXUMc9z73"
		const stringQzXm9ey = "5mAgKU8iGowecwmy9sZz14XSzRijE4UlMY9gOqb0Ver9"
		const uintGblWDV = BigInt("1613")
		const ANRXToken1xI4gm = await ANRXToken.new(uinthcmH5A2, stringfc18R7O, stringQzXm9ey, uintGblWDV, {from: accounts[2]});
		const uintU6woRl7 = BigInt("831")
		const uintxQlzFg0 = BigInt("785")
		const addressNRrP2Uo = accounts[2]
		const uintvRs7k55 = await ANRXToken1xI4gm.redeem.call(uintU6woRl7, {from: accounts[2]});
		const boolQHk20hx = await ANRXToken1xI4gm.transfer.call(addressNRrP2Uo, uintxQlzFg0, {from: accounts[5]});

		await expect(ANRXToken1xI4gm.redeem.call(uintU6woRl7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})