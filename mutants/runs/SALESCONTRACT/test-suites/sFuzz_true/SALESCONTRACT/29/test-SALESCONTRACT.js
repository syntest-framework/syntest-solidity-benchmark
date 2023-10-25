const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTP3wftkd = await SALESCONTRACT.new({from: accounts[3]});
		const uintzzTEupw = BigInt("964")
		const addressqNpw0gC = accounts[1]
		const uint0wvW87 = BigInt("184")
		const addressXMOU45F = accounts[1]
		await SALESCONTRACTP3wftkd.clearETH.call({from: accounts[3]});
		const addressCrO3pHK = await SALESCONTRACTP3wftkd._setSalesPool.call(addressqNpw0gC, uintzzTEupw, {from: accounts[3]});
		const addressWO4K3w9 = await SALESCONTRACTP3wftkd._setSalesPool.call(addressXMOU45F, uint0wvW87, {from: accounts[3]});

		await expect(SALESCONTRACTP3wftkd.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTEuaWbCn = await SALESCONTRACT.new({from: accounts[2]});
		const addresswTe5nAW = accounts[1]
		const addressQEcAdK6 = accounts[1]
		const addressjxQdqgi = accounts[1]
		await SALESCONTRACTEuaWbCn.clearTokens.call({from: accounts[0]});
		const boolMtDVw5F = await SALESCONTRACTEuaWbCn.tokenSale.call(addresswTe5nAW, {from: accounts[1]});
		const boolp7X0Vgp = await SALESCONTRACTEuaWbCn.tokenSale.call(addressQEcAdK6, {from: accounts[2]});
		const addressi8FqlgK = await SALESCONTRACTEuaWbCn.setToken.call(addressjxQdqgi, {from: accounts[3]});

		await expect(SALESCONTRACTEuaWbCn.clearTokens.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTDCGyV9 = await SALESCONTRACT.new({from: accounts[1]});
		const addresscSJFmhr = accounts[1]
		const addressTHcze0Q = accounts[1]
		const boole9HV9r = await SALESCONTRACTTDCGyV9.tokenSale.call(addresscSJFmhr, {from: accounts[4]});
		const addressGjXQpyH = await SALESCONTRACTTDCGyV9.setToken.call(addressTHcze0Q, {from: accounts[4]});
		await SALESCONTRACTTDCGyV9.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTTDCGyV9.clearETH.call({from: accounts[5]});

		await expect(SALESCONTRACTTDCGyV9.tokenSale.call(addresscSJFmhr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTlcLer60 = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressP3V4nbR = accounts[5]
		const boolc27JxWj = await SALESCONTRACTlcLer60.tokenSale.call(addressP3V4nbR, {from: accounts[3]});
		await SALESCONTRACTlcLer60.clearTokens.call({from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTNApp2a1 = await SALESCONTRACT.new({from: accounts[4]});
		const addressat4sZJ = accounts[4]
		const uintiasFKuY = BigInt("1168")
		const addresszwwZRD5 = accounts[4]
		await SALESCONTRACTNApp2a1.ff.call({from: accounts[0]});
		await SALESCONTRACTNApp2a1.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
		const addressKDJLl2I = await SALESCONTRACTNApp2a1.setToken.call(addressat4sZJ, {from: accounts[1]});
		const addressYYqA31v = await SALESCONTRACTNApp2a1._setSalesPool.call(addresszwwZRD5, uintiasFKuY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTNApp2a1.ff.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTDCGyV9 = await SALESCONTRACT.new({from: accounts[1]});
		const uintAtfXLm3 = BigInt("44")
		const addressDYU27az = accounts[3]
		const addressAcRQSdn = accounts[5]
		const uint9cSWkQ = await SALESCONTRACTTDCGyV9._setStage.call(uintAtfXLm3, {from: accounts[1]});
		const boole9HV9r = await SALESCONTRACTTDCGyV9.tokenSale.call(addressDYU27az, {from: accounts[4]});
		const boolK3e9u0P = await SALESCONTRACTTDCGyV9.tokenSale.call(addressAcRQSdn, {from: accounts[3]});

		await expect(SALESCONTRACTTDCGyV9.tokenSale.call(addressDYU27az, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTNApp2a1 = await SALESCONTRACT.new({from: accounts[4]});
		await SALESCONTRACTNApp2a1.clearTokens.call({from: accounts[4]});
		await SALESCONTRACTNApp2a1.clearTokens.call({from: accounts[2]});

		await expect(SALESCONTRACTNApp2a1.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTNApp2a1 = await SALESCONTRACT.new({from: accounts[4]});
		const addressyM7EtBb = accounts[1]
		const addressCy6P8GX = accounts[5]
		const addressBp159md = await SALESCONTRACTNApp2a1.setToken.call(addressyM7EtBb, {from: accounts[4]});
		await SALESCONTRACTNApp2a1.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
		const addressgBC5CH8 = await SALESCONTRACTNApp2a1.setToken.call(addressCy6P8GX, {from: accounts[5]});

		await expect(SALESCONTRACTNApp2a1.clearTokens.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})