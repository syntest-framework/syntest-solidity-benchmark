const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTjYdE0Wb = await SALESCONTRACT.new({from: accounts[5]});
		const uintddbODcC = BigInt("462")
		const addressIDwfbc6 = accounts[5]
		const uinteDc6IAt = BigInt("169")
		const addressm08nori = await SALESCONTRACTjYdE0Wb._setSalesPool.call(addressIDwfbc6, uintddbODcC, {from: accounts[4]});
		const uintlUwV3Gt = await SALESCONTRACTjYdE0Wb._setStage.call(uinteDc6IAt, {from: accounts[4]});

		await expect(SALESCONTRACTjYdE0Wb._setSalesPool.call(addressIDwfbc6, uintddbODcC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTDLgwBKA = await SALESCONTRACT.new({from: accounts[1]});
		const addressEsJm3gl = accounts[0]
		const addresspbhPIX = accounts[3]
		const uintDDWXAYq = BigInt("1974")
		const addressfdvdMJV = accounts[4]
		const uintqvHgZ2P = BigInt("1149")
		const bool1BK46j = await SALESCONTRACTDLgwBKA.tokenSale.call(addressEsJm3gl, {from: accounts[1]});
		const boolTmNTkR2 = await SALESCONTRACTDLgwBKA.tokenSale.call(addresspbhPIX, {from: accounts[0]});
		const addressI87jnS = await SALESCONTRACTDLgwBKA._setSalesPool.call(addressfdvdMJV, uintDDWXAYq, {from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTDLgwBKA.clearTokens.call({from: accounts[0]});
		const uintY3nXRt5 = await SALESCONTRACTDLgwBKA._setStage.call(uintqvHgZ2P, {from: accounts[0]});

		await expect(SALESCONTRACTDLgwBKA.tokenSale.call(addressEsJm3gl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTk6T40ay = await SALESCONTRACT.new({from: accounts[0]});
		const addressjD5PT5l = accounts[4]
		await SALESCONTRACTk6T40ay.ff.call({from: accounts[5]});
		const addresswQ5Nz23 = await SALESCONTRACTk6T40ay.setToken.call(addressjD5PT5l, {from: accounts[3]});
		await SALESCONTRACTk6T40ay.clearETH.call({from: accounts[1]});

		await expect(SALESCONTRACTk6T40ay.ff.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTstLNz7 = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYZ4OtEe = BigInt("1293")
		const addressnWdxJeR = accounts[1]
		const uintJRPd7SY = BigInt("1590")
		const addresswCgb3UW = accounts[1]
		const addressIgqOx4X = accounts[3]
		const uintI0J8kau = BigInt("673")
		const addressgs6G4sA = accounts[4]
		const addressDMVW3ZA = await SALESCONTRACTstLNz7._setSalesPool.call(addressnWdxJeR, uintYZ4OtEe, {from: accounts[4]});
		const addressH0ZpwoO = await SALESCONTRACTstLNz7._setSalesPool.call(addresswCgb3UW, uintJRPd7SY, {from: accounts[4]});
		await SALESCONTRACTstLNz7.clearETH.call({from: accounts[4]});
		await SALESCONTRACTstLNz7.clearETH.call({from: accounts[1]});
		const addressBoK2pAP = await SALESCONTRACTstLNz7.setToken.call(addressIgqOx4X, {from: accounts[5]});
		const addressycrAjD6 = await SALESCONTRACTstLNz7._setSalesPool.call(addressgs6G4sA, uintI0J8kau, {from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTRwQt7a5 = await SALESCONTRACT.new({from: accounts[3]});
		await SALESCONTRACTRwQt7a5.clearETH.call({from: accounts[3]});
		await SALESCONTRACTRwQt7a5.clearTokens.call({from: accounts[0]});

		await expect(SALESCONTRACTRwQt7a5.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTDLgwBKA = await SALESCONTRACT.new({from: accounts[1]});
		const uinth3div5 = BigInt("1986")
		const addressWA2yUe = accounts[1]
		const uintGMlIhvC = BigInt("957")
		const uintZwFZNr = BigInt("1974")
		const addresslZUFn6F = accounts[4]
		const uintyi0582e = BigInt("1149")
		const uintidfDTuZ = await SALESCONTRACTDLgwBKA._setStage.call(uinth3div5, {from: accounts[1]});
		const bool1BK46j = await SALESCONTRACTDLgwBKA.tokenSale.call(addressWA2yUe, {from: accounts[1]});
		const uintgtsC3hx = await SALESCONTRACTDLgwBKA._setStage.call(uintGMlIhvC, {from: accounts[5]});
		const addressI87jnS = await SALESCONTRACTDLgwBKA._setSalesPool.call(addresslZUFn6F, uintZwFZNr, {from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTDLgwBKA.clearTokens.call({from: accounts[0]});
		const uintY3nXRt5 = await SALESCONTRACTDLgwBKA._setStage.call(uintyi0582e, {from: accounts[0]});

		await expect(SALESCONTRACTDLgwBKA.tokenSale.call(addressWA2yUe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTwuINpwb = await SALESCONTRACT.new({from: accounts[3]});
		const uintOXAy5ui = BigInt("936")
		const addressaSfLHdv = accounts[5]
		await SALESCONTRACTwuINpwb.clearTokens.call({from: accounts[3]});
		const addresssdfjFll = await SALESCONTRACTwuINpwb._setSalesPool.call(addressaSfLHdv, uintOXAy5ui, {from: accounts[2]});

		await expect(SALESCONTRACTwuINpwb.clearTokens.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTk6T40ay = await SALESCONTRACT.new({from: accounts[0]});
		const addressuDKHNn9 = accounts[1]
		const addressN3mYqjm = accounts[2]
		const addresstBQ6Lhg = "0x0000000000000000000000000000000000000001"
		const addressHA98uH9 = await SALESCONTRACTk6T40ay.setToken.call(addressuDKHNn9, {from: accounts[0]});
		const boolMM9CfOt = await SALESCONTRACTk6T40ay.tokenSale.call(addressN3mYqjm, {from: "0x0000000000000000000000000000000000000001"});
		const booliZilpLM = await SALESCONTRACTk6T40ay.tokenSale.call(addresstBQ6Lhg, {from: accounts[4]});
		await SALESCONTRACTk6T40ay.ff.call({from: accounts[5]});
		await SALESCONTRACTk6T40ay.clearETH.call({from: accounts[1]});

		await expect(SALESCONTRACTk6T40ay.tokenSale.call(addressN3mYqjm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTwuINpwb = await SALESCONTRACT.new({from: accounts[3]});
		const uintQMUNDsR = BigInt("975")
		const addressbga12eg = accounts[4]
		const uintM5OAVA = BigInt("931")
		const addresspdazOoN = accounts[4]
		const addressMU0LNnr = await SALESCONTRACTwuINpwb._setSalesPool.call(addressbga12eg, uintQMUNDsR, {from: accounts[3]});
		const addresssdfjFll = await SALESCONTRACTwuINpwb._setSalesPool.call(addresspdazOoN, uintM5OAVA, {from: accounts[2]});

		await expect(SALESCONTRACTwuINpwb._setSalesPool.call(addresspdazOoN, uintM5OAVA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})