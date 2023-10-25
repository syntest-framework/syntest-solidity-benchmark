const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const string4sEy4G = "V4l9wYfkR9oOn4jL"
		const stringJLJyR2 = "073JP7GeXADlmIRsrOX8vhTNFbVeJxcYOgBYcUEz7C7zu1pG2Ci4abcIQrPDVWMeOIpbYqS5L1pabBhjtfhF"
		const uintfY95wRv = BigInt("191")
		const OnXFinanced4XCQ1u = await OnXFinance.new(string4sEy4G, stringJLJyR2, uintfY95wRv, {from: accounts[0]});
		const uintpE7vu7i = BigInt("1519")
		const addresswLDbpuK = accounts[4]
		const address4PvfTD = accounts[2]
		const uinte8u6EFv = BigInt("1085")
		const addressFtcPVA6 = accounts[4]
		const uintQ28j0m = BigInt("1142")
		const addressOVHgFpG = accounts[3]
		const string4SMfDp = await OnXFinanced4XCQ1u.symbol.call({from: accounts[2]});
		const boolQOeOje = await OnXFinanced4XCQ1u.transferFrom.call(address4PvfTD, addresswLDbpuK, uintpE7vu7i, {from: accounts[2]});
		const boolDKN14ka = await OnXFinanced4XCQ1u.approve.call(addressFtcPVA6, uinte8u6EFv, {from: accounts[5]});
		const boolxXLmaIC = await OnXFinanced4XCQ1u.approveAndCall.call(addressOVHgFpG, uintQ28j0m, {from: accounts[1]});
		const stringBetNMmS = await OnXFinanced4XCQ1u.name.call({from: accounts[5]});
		const stringPVDhQNa = await OnXFinanced4XCQ1u.symbol.call({from: accounts[0]});

		assert.equal(string4SMfDp, "073JP7GeXADlmIRsrOX8vhTNFbVeJxcYOgBYcUEz7C7zu1pG2Ci4abcIQrPDVWMeOIpbYqS5L1pabBhjtfhF")
		await expect(OnXFinanced4XCQ1u.transferFrom.call(address4PvfTD, addresswLDbpuK, uintpE7vu7i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringw4uM78L = "fIzU6XDrQi1iXRUE1YhQBCjwiSrKXoV"
		const stringtYq8ig1 = "HxopYwALCyidTCxbVn"
		const uintrH1CmgN = BigInt("131")
		const OnXFinanceowMp384 = await OnXFinance.new(stringw4uM78L, stringtYq8ig1, uintrH1CmgN, {from: accounts[5]});
		const uintFuQcY8y = BigInt("965")
		const addressW7X0SXR = accounts[1]
		const uintuak1UGK = BigInt("765")
		const addressIMjiD2J = accounts[1]
		const uintgLb9C3p = BigInt("1777")
		const addressR0TN9EW = accounts[0]
		const addressboBWn0j = accounts[4]
		const uintTbJmUM4 = BigInt("39")
		const addressePOYEjY = accounts[1]
		const stringCDTMHkI = await OnXFinanceowMp384.name.call({from: accounts[3]});
		const boolAdN09jE = await OnXFinanceowMp384.increaseAllowance.call(addressW7X0SXR, uintFuQcY8y, {from: accounts[5]});
		const boolUIr249 = await OnXFinanceowMp384.approve.call(addressIMjiD2J, uintuak1UGK, {from: accounts[2]});
		const boolrRveuHV = await OnXFinanceowMp384.transferFrom.call(addressboBWn0j, addressR0TN9EW, uintgLb9C3p, {from: accounts[0]});
		const boolIQSxRa = await OnXFinanceowMp384.increaseAllowance.call(addressePOYEjY, uintTbJmUM4, {from: accounts[4]});
		const stringuLE7IK6 = await OnXFinanceowMp384.symbol.call({from: accounts[3]});

		assert.equal(stringCDTMHkI, "fIzU6XDrQi1iXRUE1YhQBCjwiSrKXoV")
		await expect(OnXFinanceowMp384.increaseAllowance.call(addressW7X0SXR, uintFuQcY8y, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlkCeNRX = "iqzFQqA21XG7IHrUpfwk33zISroio3UuziNep0xA6Y3jbRpZkRxmtmqSAFyduVhz3HM5qfyL"
		const stringUiVUZdy = "85fKxKsEL7IrihqfqG8vQkyh6C696B0tzStl1EgGLLgO6OTF3eq2KtRVAUDsjwUI5bXR4OA9qtL4TJQSAoJuzI9G8ACtB6"
		const uintZtgtHhS = BigInt("1")
		const OnXFinanceEcRLOsu = await OnXFinance.new(stringlkCeNRX, stringUiVUZdy, uintZtgtHhS, {from: "0x0000000000000000000000000000000000000001"});
		const uintPxtSg19 = BigInt("904")
		const addressQCQSyMh = accounts[1]
		const addressEAO2isD = accounts[3]
		const uintZoymIhK = BigInt("390")
		const addresss9FIoYJ = "0x0000000000000000000000000000000000000001"
		const addressq8XpLLN = accounts[5]
		const addressVJnLX1P = "0x0000000000000000000000000000000000000001"
		const addressBPyWBdz = accounts[0]
		const boolBC1tCF7 = await OnXFinanceEcRLOsu.transfer.call(addressQCQSyMh, uintPxtSg19, {from: accounts[0]});
		const uintgip1GF2 = await OnXFinanceEcRLOsu.balanceOf.call(addressEAO2isD, {from: accounts[2]});
		const uint8kJE8OC = await OnXFinanceEcRLOsu.decimals.call({from: accounts[4]});
		const boolsJuyYPG = await OnXFinanceEcRLOsu.transferFrom.call(addressq8XpLLN, addresss9FIoYJ, uintZoymIhK, {from: accounts[1]});
		const boolwuByUXT = await OnXFinanceEcRLOsu.transferownership.call(addressVJnLX1P, {from: accounts[5]});
		const uintK0nfkN = await OnXFinanceEcRLOsu.balanceOf.call(addressBPyWBdz, {from: accounts[5]});
	});

	it('test for OnXFinance', async () => {
		const stringymp86sZ = "V0WPSCncY3OfNdbqGj"
		const stringmmgi8ZR = "LQgOBDISE1bJz"
		const uintfq7pgjd = BigInt("1009")
		const OnXFinanceezj1pxT = await OnXFinance.new(stringymp86sZ, stringmmgi8ZR, uintfq7pgjd, {from: accounts[3]});
		const uintEZ6EsCy = BigInt("706")
		const addresshEz5O3P = accounts[3]
		const uintrh7nrAN = BigInt("19")
		const addressJ4q1wGg = accounts[0]
		const addressgKWvZa7 = accounts[0]
		const boolFKt6rr = await OnXFinanceezj1pxT.approveAndCall.call(addresshEz5O3P, uintEZ6EsCy, {from: accounts[3]});
		const bool31uB4C = await OnXFinanceezj1pxT.approveAndCall.call(addressJ4q1wGg, uintrh7nrAN, {from: accounts[0]});
		const uinte1Q7nOy = await OnXFinanceezj1pxT.balanceOf.call(addressgKWvZa7, {from: accounts[1]});

		assert.equal(boolFKt6rr, true)
		await expect(OnXFinanceezj1pxT.approveAndCall.call(addressJ4q1wGg, uintrh7nrAN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringpBWqdzX = "cwXcAQF"
		const stringBlfH7EK = "Kz"
		const uinthEpUlQ2 = BigInt("1656")
		const OnXFinancesNF5QMI = await OnXFinance.new(stringpBWqdzX, stringBlfH7EK, uinthEpUlQ2, {from: accounts[2]});
		const addressS4L4m4w = "0x0000000000000000000000000000000000000001"
		const uintPX6j8Ai = BigInt("1318")
		const addressreplcV5 = accounts[4]
		const uintqXc5yHL = BigInt("1358")
		const addressNrvMw3 = accounts[4]
		const uintV9kdjcO = await OnXFinancesNF5QMI.balanceOf.call(addressS4L4m4w, {from: accounts[0]});
		const boolANLKUlU = await OnXFinancesNF5QMI.approve.call(addressreplcV5, uintPX6j8Ai, {from: "0x0000000000000000000000000000000000000001"});
		const boolZdFhoZ = await OnXFinancesNF5QMI.transfer.call(addressNrvMw3, uintqXc5yHL, {from: accounts[1]});

		assert.equal(boolANLKUlU, true)
		assert.equal(uintV9kdjcO, BigInt("0"))
		await expect(OnXFinancesNF5QMI.transfer.call(addressNrvMw3, uintqXc5yHL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringPKVuj1s = "MG3gfYUc3GF92adR29pMJ"
		const stringDtIbMU = "8I3kUbLnwoJjA81WpakeFKd1fmkGxKrNjdMiT0gtRVchdSZPTptGIH3R7aecjVsrJxUlX3focpNgxcA5rBTuZcmXb"
		const uintScXQNXn = BigInt("54")
		const OnXFinanceFKwHKBa = await OnXFinance.new(stringPKVuj1s, stringDtIbMU, uintScXQNXn, {from: accounts[1]});
		const uintxT2Mkv = BigInt("1521")
		const addressxUUfjmS = accounts[1]
		const uintQRKjxDY = BigInt("647")
		const addressFxWRMm3 = accounts[0]
		const address9ctcnS = accounts[2]
		const stringqaUZxFF = await OnXFinanceFKwHKBa.symbol.call({from: accounts[1]});
		const bool570On3 = await OnXFinanceFKwHKBa.transfer.call(addressxUUfjmS, uintxT2Mkv, {from: accounts[2]});
		const boolUXitXcG = await OnXFinanceFKwHKBa.transferFrom.call(address9ctcnS, addressFxWRMm3, uintQRKjxDY, {from: "0x0000000000000000000000000000000000000001"});
		const stringdYw5vsi = await OnXFinanceFKwHKBa.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringqaUZxFF, "8I3kUbLnwoJjA81WpakeFKd1fmkGxKrNjdMiT0gtRVchdSZPTptGIH3R7aecjVsrJxUlX3focpNgxcA5rBTuZcmXb")
		await expect(OnXFinanceFKwHKBa.transfer.call(addressxUUfjmS, uintxT2Mkv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringpBWqdzX = "cwXcAQF"
		const stringBlfH7EK = "Kz"
		const uintADlru0g = BigInt("1656")
		const OnXFinancesNF5QMI = await OnXFinance.new(stringpBWqdzX, stringBlfH7EK, uintADlru0g, {from: accounts[2]});
		const uintfulEdPc = BigInt("1830")
		const addressix2g1wm = "0x0000000000000000000000000000000000000001"
		const addressN71gLZ = accounts[3]
		const addressuXdnJv = "0x0000000000000000000000000000000000000001"
		const uintW80GfL5 = BigInt("1326")
		const addressMTRgs1C = accounts[4]
		const boolk0guJKZ = await OnXFinancesNF5QMI.transferFrom.call(addressN71gLZ, addressix2g1wm, uintfulEdPc, {from: accounts[4]});
		const uintV9kdjcO = await OnXFinancesNF5QMI.balanceOf.call(addressuXdnJv, {from: accounts[0]});
		const boolANLKUlU = await OnXFinancesNF5QMI.approve.call(addressMTRgs1C, uintW80GfL5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(OnXFinancesNF5QMI.transferFrom.call(addressN71gLZ, addressix2g1wm, uintfulEdPc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringpBWqdzX = "cwXcAQF"
		const stringBlfH7EK = "Kz"
		const uintlCOZGd = BigInt("1656")
		const OnXFinancesNF5QMI = await OnXFinance.new(stringpBWqdzX, stringBlfH7EK, uintlCOZGd, {from: accounts[2]});
		const addresshiNOdlU = "0x0000000000000000000000000000000000000001"
		const addressZhoCbdD = accounts[2]
		const uinteUUzFn = BigInt("265")
		const addressTKuiOIP = accounts[4]
		const addresszUuzsFn = accounts[3]
		const uintfAsnhDu = BigInt("484")
		const addresshD5FRvN = accounts[5]
		const uintBYoCvZR = BigInt("1318")
		const addressDwvj0iW = accounts[4]
		const uintkrIewMf = BigInt("544")
		const addressMnd5ow0 = accounts[2]
		const uintIhUEgwl = BigInt("1358")
		const addressaeoH7lL = accounts[4]
		const stringz7ha5RN = await OnXFinancesNF5QMI.name.call({from: accounts[0]});
		const uintV9kdjcO = await OnXFinancesNF5QMI.balanceOf.call(addresshiNOdlU, {from: accounts[0]});
		const boolJw2rCF = await OnXFinancesNF5QMI.transferownership.call(addressZhoCbdD, {from: accounts[0]});
		const uint8cnPa1cp = await OnXFinancesNF5QMI.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolQPXq8wa = await OnXFinancesNF5QMI.transferFrom.call(addresszUuzsFn, addressTKuiOIP, uinteUUzFn, {from: accounts[4]});
		const booli0CyX6M = await OnXFinancesNF5QMI.transfer.call(addresshD5FRvN, uintfAsnhDu, {from: "0x0000000000000000000000000000000000000001"});
		const boolANLKUlU = await OnXFinancesNF5QMI.approve.call(addressDwvj0iW, uintBYoCvZR, {from: "0x0000000000000000000000000000000000000001"});
		const boolbY47cim = await OnXFinancesNF5QMI.transfer.call(addressMnd5ow0, uintkrIewMf, {from: accounts[1]});
		const boolZdFhoZ = await OnXFinancesNF5QMI.transfer.call(addressaeoH7lL, uintIhUEgwl, {from: accounts[1]});

		assert.equal(stringz7ha5RN, "cwXcAQF")
		assert.equal(uintV9kdjcO, BigInt("0"))
		await expect(OnXFinancesNF5QMI.transferownership.call(addressZhoCbdD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringpBWqdzX = "cwXcAQF"
		const stringBlfH7EK = "Kz"
		const uintUmSjYh6 = BigInt("1656")
		const OnXFinancesNF5QMI = await OnXFinance.new(stringpBWqdzX, stringBlfH7EK, uintUmSjYh6, {from: accounts[2]});
		const addresskcHJpc = accounts[5]
		const boolHSW4wq = await OnXFinancesNF5QMI.transferownership.call(addresskcHJpc, {from: accounts[2]});

		assert.equal(boolHSW4wq, true)
	});

	it('test for OnXFinance', async () => {
		const stringpBWqdzX = "cwXcAQF"
		const stringBlfH7EK = "Kz"
		const uint2x4uqn = BigInt("1656")
		const OnXFinancesNF5QMI = await OnXFinance.new(stringpBWqdzX, stringBlfH7EK, uint2x4uqn, {from: accounts[2]});
		const uintQU6X8FM = BigInt("0")
		const addressS7Ydwkw = accounts[2]
		const uintsTnE35d = BigInt("907")
		const addressjd5GYhI = accounts[4]
		const boolCGbBHvi = await OnXFinancesNF5QMI.transfer.call(addressS7Ydwkw, uintQU6X8FM, {from: accounts[4]});
		const boolA3rYaau = await OnXFinancesNF5QMI.decreaseAllowance.call(addressjd5GYhI, uintsTnE35d, {from: accounts[4]});
		const stringfgYrYWs = await OnXFinancesNF5QMI.symbol.call({from: accounts[5]});

		assert.equal(boolCGbBHvi, true)
		await expect(OnXFinancesNF5QMI.decreaseAllowance.call(addressjd5GYhI, uintsTnE35d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringpBWqdzX = "cwXcAQF"
		const stringBlfH7EK = "Kz"
		const uintnJOrXwQ = BigInt("1656")
		const OnXFinancesNF5QMI = await OnXFinance.new(stringpBWqdzX, stringBlfH7EK, uintnJOrXwQ, {from: accounts[2]});
		const uintm5kOW8g = BigInt("0")
		const addressl0R7vUJ = accounts[3]
		const uintoiSehj4 = BigInt("844")
		const addressrh80rE3 = accounts[5]
		const uinthIz5AQl = BigInt("699")
		const addressn7UTAj = accounts[3]
		const uintyIwgIak = BigInt("1956")
		const addressSR0kmJY = accounts[4]
		const boolyb3Y9zO = await OnXFinancesNF5QMI.approveAndCall.call(addressl0R7vUJ, uintm5kOW8g, {from: accounts[2]});
		const boolYzaY0UT = await OnXFinancesNF5QMI.transfer.call(addressrh80rE3, uintoiSehj4, {from: accounts[4]});
		const stringOLQJ6x3 = await OnXFinancesNF5QMI.name.call({from: accounts[5]});
		const boolgTN7rDm = await OnXFinancesNF5QMI.approve.call(addressn7UTAj, uinthIz5AQl, {from: accounts[2]});
		const boolDFEWjzO = await OnXFinancesNF5QMI.decreaseAllowance.call(addressSR0kmJY, uintyIwgIak, {from: accounts[5]});

		assert.equal(boolyb3Y9zO, true)
		await expect(OnXFinancesNF5QMI.transfer.call(addressrh80rE3, uintoiSehj4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})