const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTqLdlZoe = await SALESCONTRACT.new({from: accounts[0]});
		const uintr3cdUg8 = BigInt("10")
		const addressR0kk9NY = accounts[1]
		const addressUeyhY5M = accounts[0]
		const uintteO1e5X = BigInt("1849")
		const addressJYvEgyg = accounts[2]
		const address7yoTvq = await SALESCONTRACTqLdlZoe._setSalesPool.call(addressR0kk9NY, uintr3cdUg8, {from: accounts[1]});
		const addresskniQhQ9 = await SALESCONTRACTqLdlZoe.setToken.call(addressUeyhY5M, {from: accounts[2]});
		const addressW8ESURu = await SALESCONTRACTqLdlZoe._setSalesPool.call(addressJYvEgyg, uintteO1e5X, {from: accounts[2]});
		await SALESCONTRACTqLdlZoe.clearETH.call({from: accounts[3]});

		await expect(SALESCONTRACTqLdlZoe._setSalesPool.call(addressR0kk9NY, uintr3cdUg8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTmnEw412 = await SALESCONTRACT.new({from: accounts[3]});
		const addressQSs2lNn = accounts[2]
		const addressBSoOiXs = accounts[2]
		const addressqjUnIRC = accounts[0]
		const addressNyuz53D = accounts[2]
		const boolVDgrIs = await SALESCONTRACTmnEw412.tokenSale.call(addressQSs2lNn, {from: accounts[0]});
		await SALESCONTRACTmnEw412.ff.call({from: accounts[1]});
		const boolefBT21u = await SALESCONTRACTmnEw412.tokenSale.call(addressBSoOiXs, {from: accounts[0]});
		await SALESCONTRACTmnEw412.clearTokens.call({from: accounts[1]});
		const addressmgUPpaI = await SALESCONTRACTmnEw412.setToken.call(addressqjUnIRC, {from: accounts[5]});
		const boollEvZIcd = await SALESCONTRACTmnEw412.tokenSale.call(addressNyuz53D, {from: accounts[0]});

		await expect(SALESCONTRACTmnEw412.tokenSale.call(addressQSs2lNn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTk8Zw3n9 = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressthrLKge = accounts[2]
		const uintdKJQAli = BigInt("1943")
		const addressVg81GaA = accounts[4]
		const uintgd6qgD7 = BigInt("167")
		const addresswRMciJ = accounts[4]
		await SALESCONTRACTk8Zw3n9.ff.call({from: accounts[5]});
		const addressk0OmehF = await SALESCONTRACTk8Zw3n9.setToken.call(addressthrLKge, {from: "0x0000000000000000000000000000000000000001"});
		const addressTcKuFtK = await SALESCONTRACTk8Zw3n9._setSalesPool.call(addressVg81GaA, uintdKJQAli, {from: accounts[0]});
		await SALESCONTRACTk8Zw3n9.ff.call({from: accounts[1]});
		const addressYMMsp0q = await SALESCONTRACTk8Zw3n9._setSalesPool.call(addresswRMciJ, uintgd6qgD7, {from: accounts[0]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTXR3j4ja = await SALESCONTRACT.new({from: accounts[4]});
		const uintBOrQF1S = BigInt("420")
		const addressmSQd5B = accounts[0]
		const addressflGDXut = accounts[1]
		const address7Hxq9g = accounts[4]
		const uintt1t8NkG = await SALESCONTRACTXR3j4ja._setStage.call(uintBOrQF1S, {from: accounts[4]});
		await SALESCONTRACTXR3j4ja.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpvSnwgI = await SALESCONTRACTXR3j4ja.tokenSale.call(addressmSQd5B, {from: accounts[3]});
		await SALESCONTRACTXR3j4ja.clearETH.call({from: accounts[0]});
		const boolTQLwKof = await SALESCONTRACTXR3j4ja.tokenSale.call(addressflGDXut, {from: accounts[0]});
		const address2ZNypi = await SALESCONTRACTXR3j4ja.setToken.call(address7Hxq9g, {from: accounts[4]});

		await expect(SALESCONTRACTXR3j4ja.clearETH.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTgDWGvl = await SALESCONTRACT.new({from: accounts[4]});
		const addressL0zb3Xf = accounts[2]
		const addressOcsUg8 = accounts[1]
		const uint1stee7 = BigInt("1633")
		const addressv86fU1 = accounts[0]
		await SALESCONTRACTgDWGvl.ff.call({from: accounts[5]});
		const boolfUXtOf = await SALESCONTRACTgDWGvl.tokenSale.call(addressL0zb3Xf, {from: accounts[4]});
		const addressTyFMeco = await SALESCONTRACTgDWGvl.setToken.call(addressOcsUg8, {from: accounts[1]});
		await SALESCONTRACTgDWGvl.ff.call({from: accounts[4]});
		await SALESCONTRACTgDWGvl.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTgDWGvl.ff.call({from: accounts[3]});
		const addressK66EIgU = await SALESCONTRACTgDWGvl._setSalesPool.call(addressv86fU1, uint1stee7, {from: accounts[3]});

		await expect(SALESCONTRACTgDWGvl.ff.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTgDWGvl = await SALESCONTRACT.new({from: accounts[4]});
		const addressnlaw3HE = accounts[2]
		const uintxn8p3Xb = BigInt("1633")
		const addresswQlFryK = accounts[0]
		await SALESCONTRACTgDWGvl.clearETH.call({from: accounts[4]});
		const boolfUXtOf = await SALESCONTRACTgDWGvl.tokenSale.call(addressnlaw3HE, {from: accounts[4]});
		await SALESCONTRACTgDWGvl.ff.call({from: accounts[4]});
		const addressK66EIgU = await SALESCONTRACTgDWGvl._setSalesPool.call(addresswQlFryK, uintxn8p3Xb, {from: accounts[3]});
		await SALESCONTRACTgDWGvl.clearTokens.call({from: accounts[4]});

		await expect(SALESCONTRACTgDWGvl.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTgDWGvl = await SALESCONTRACT.new({from: accounts[4]});
		const addressUd7SYdY = accounts[0]
		const addressbeclx8O = accounts[1]
		const uintwZJXW2Z = BigInt("533")
		const addressglkjYMK = accounts[3]
		const uintFJogMqn = BigInt("1437")
		const addresslcksNOA = accounts[4]
		const uintcX4N8XS = BigInt("1633")
		const addresssE2I4Q3 = accounts[0]
		const addressa8DD4Kv = await SALESCONTRACTgDWGvl.setToken.call(addressUd7SYdY, {from: accounts[4]});
		const boolfUXtOf = await SALESCONTRACTgDWGvl.tokenSale.call(addressbeclx8O, {from: accounts[4]});
		await SALESCONTRACTgDWGvl.ff.call({from: accounts[4]});
		const addressDxbz9oa = await SALESCONTRACTgDWGvl._setSalesPool.call(addressglkjYMK, uintwZJXW2Z, {from: accounts[4]});
		const addresswfHZXbX = await SALESCONTRACTgDWGvl._setSalesPool.call(addresslcksNOA, uintFJogMqn, {from: accounts[1]});
		const addressK66EIgU = await SALESCONTRACTgDWGvl._setSalesPool.call(addresssE2I4Q3, uintcX4N8XS, {from: accounts[3]});

		await expect(SALESCONTRACTgDWGvl.tokenSale.call(addressbeclx8O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTx9qMlxf = await SALESCONTRACT.new({from: accounts[2]});
		await SALESCONTRACTx9qMlxf.clearTokens.call({from: accounts[2]});
		await SALESCONTRACTx9qMlxf.clearTokens.call({from: accounts[0]});

		await expect(SALESCONTRACTx9qMlxf.clearTokens.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTJJrwR8 = await SALESCONTRACT.new({from: accounts[3]});
		const uintdXsGnsC = BigInt("1274")
		const uintyBE0vuu = BigInt("1784")
		const addressgCkjasr = accounts[4]
		const addressUZCMXCh = accounts[3]
		const uintyZHUEY = await SALESCONTRACTJJrwR8._setStage.call(uintdXsGnsC, {from: accounts[3]});
		const addresslIJIoC2 = await SALESCONTRACTJJrwR8._setSalesPool.call(addressgCkjasr, uintyBE0vuu, {from: accounts[3]});
		const boolucPNSdJ = await SALESCONTRACTJJrwR8.tokenSale.call(addressUZCMXCh, {from: accounts[2]});
		await SALESCONTRACTJJrwR8.clearTokens.call({from: accounts[1]});

		await expect(SALESCONTRACTJJrwR8.tokenSale.call(addressUZCMXCh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})