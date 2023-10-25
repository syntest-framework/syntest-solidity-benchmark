const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTB0b0IlT = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressZmM8uO = accounts[3]
		const addressW49GZuE = accounts[3]
		const uintWsaNw9J = BigInt("1416")
		const boolniSZhhz = await SALESCONTRACTB0b0IlT.tokenSale.call(addressZmM8uO, {from: accounts[0]});
		const boolD3vrJgc = await SALESCONTRACTB0b0IlT.tokenSale.call(addressW49GZuE, {from: accounts[3]});
		await SALESCONTRACTB0b0IlT.ff.call({from: accounts[1]});
		const uintkKdz8w3 = await SALESCONTRACTB0b0IlT._setStage.call(uintWsaNw9J, {from: accounts[0]});
		await SALESCONTRACTB0b0IlT.ff.call({from: accounts[2]});
		await SALESCONTRACTB0b0IlT.ff.call({from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTHlKhAAp = await SALESCONTRACT.new({from: accounts[4]});
		const uintGVypaC = BigInt("1648")
		const addressbocypt0 = accounts[3]
		const address76tikq = accounts[3]
		const addressXkjGL2u = await SALESCONTRACTHlKhAAp._setSalesPool.call(addressbocypt0, uintGVypaC, {from: accounts[4]});
//		const boolGbhipw9 = await SALESCONTRACTHlKhAAp.tokenSale.call(address76tikq, {from: accounts[3]});

		await expect(SALESCONTRACTHlKhAAp.tokenSale.call(address76tikq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTxBPDAhH = await SALESCONTRACT.new({from: accounts[3]});
		const addressxnM9DL = "0x0000000000000000000000000000000000000001"
		const uintJvc1xDS = BigInt("785")
		const addressppKjABf = accounts[1]
//		const address92RV6C = await SALESCONTRACTxBPDAhH.setToken.call(addressxnM9DL, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshKPgpdh = await SALESCONTRACTxBPDAhH._setSalesPool.call(addressppKjABf, uintJvc1xDS, {from: accounts[4]});
//		await SALESCONTRACTxBPDAhH.clearTokens.call({from: accounts[5]});

		await expect(SALESCONTRACTxBPDAhH.setToken.call(addressxnM9DL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACT5rEqWo = await SALESCONTRACT.new({from: accounts[3]});
		const addressVVXbOvY = accounts[1]
		const addressgFsf4M4 = accounts[3]
//		await SALESCONTRACT5rEqWo.ff.call({from: accounts[2]});
//		await SALESCONTRACT5rEqWo.clearTokens.call({from: accounts[3]});
//		const boolBxeD6ip = await SALESCONTRACT5rEqWo.tokenSale.call(addressVVXbOvY, {from: accounts[1]});
//		await SALESCONTRACT5rEqWo.clearTokens.call({from: accounts[3]});
//		const boolH83kIoq = await SALESCONTRACT5rEqWo.tokenSale.call(addressgFsf4M4, {from: accounts[5]});

		await expect(SALESCONTRACT5rEqWo.ff.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACT5rEqWo = await SALESCONTRACT.new({from: accounts[3]});
		const uintEgq2b9t = BigInt("1890")
		const address4XXZAe = "0x0000000000000000000000000000000000000001"
		const addressIl6pFM5 = accounts[1]
		const addressdbN7da5 = accounts[3]
		const addressncB2YAK = await SALESCONTRACT5rEqWo._setSalesPool.call(address4XXZAe, uintEgq2b9t, {from: accounts[3]});
//		await SALESCONTRACT5rEqWo.clearTokens.call({from: accounts[3]});
//		const boolBxeD6ip = await SALESCONTRACT5rEqWo.tokenSale.call(addressIl6pFM5, {from: accounts[1]});
		await SALESCONTRACT5rEqWo.clearTokens.call({from: accounts[3]});
//		const boolH83kIoq = await SALESCONTRACT5rEqWo.tokenSale.call(addressdbN7da5, {from: accounts[5]});

		await expect(SALESCONTRACT5rEqWo.clearTokens.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTApHGhkf = await SALESCONTRACT.new({from: accounts[1]});
		const addresspTUjR0Z = accounts[4]
		const addressmWBeHGv = await SALESCONTRACTApHGhkf.setToken.call(addresspTUjR0Z, {from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTwR65iR2 = await SALESCONTRACT.new({from: accounts[4]});
		const uintcKnMB6E = BigInt("764")
		const uintcKXqdHr = await SALESCONTRACTwR65iR2._setStage.call(uintcKnMB6E, {from: accounts[4]});
//		await SALESCONTRACTwR65iR2.ff.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTwR65iR2.ff.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTl9JASs6 = await SALESCONTRACT.new({from: accounts[1]});
		const addressmqz5jpi = accounts[0]
		const uintBJufJZ4 = BigInt("491")
		const addressEzn1G6V = accounts[3]
//		await SALESCONTRACTl9JASs6.clearETH.call({from: accounts[1]});
//		const boolpxtv6oy = await SALESCONTRACTl9JASs6.tokenSale.call(addressmqz5jpi, {from: accounts[1]});
//		const uintMop4Rwo = await SALESCONTRACTl9JASs6._setStage.call(uintBJufJZ4, {from: accounts[3]});
//		await SALESCONTRACTl9JASs6.ff.call({from: accounts[4]});
//		const boolXZLUiC = await SALESCONTRACTl9JASs6.tokenSale.call(addressEzn1G6V, {from: accounts[3]});
//		await SALESCONTRACTl9JASs6.clearETH.call({from: accounts[0]});

		await expect(SALESCONTRACTl9JASs6.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})