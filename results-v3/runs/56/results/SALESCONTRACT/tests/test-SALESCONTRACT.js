const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpVGTRf = await SALESCONTRACT.new({from: accounts[0]});
		const uintPQBHy9J = BigInt("631")
		const addressov4MBei = accounts[1]
		const addressgD9pAS = accounts[0]
		await SALESCONTRACTpVGTRf.ff.call({from: accounts[3]});
		const uintR546nNl = await SALESCONTRACTpVGTRf._setStage.call(uintPQBHy9J, {from: accounts[3]});
		const addressV2kuzT3 = await SALESCONTRACTpVGTRf.setToken.call(addressov4MBei, {from: accounts[1]});
		const boolaIpAwL3 = await SALESCONTRACTpVGTRf.tokenSale.call(addressgD9pAS, {from: accounts[0]});

		await expect(SALESCONTRACTpVGTRf.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTjmYmt4h = await SALESCONTRACT.new({from: accounts[3]});
		const uintN2KIK2e = BigInt("1646")
		const addressjKLLuDQ = accounts[0]
		await SALESCONTRACTjmYmt4h.clearETH.call({from: accounts[2]});
		await SALESCONTRACTjmYmt4h.ff.call({from: accounts[0]});
		await SALESCONTRACTjmYmt4h.clearETH.call({from: accounts[0]});
		const addressQEObNPK = await SALESCONTRACTjmYmt4h._setSalesPool.call(addressjKLLuDQ, uintN2KIK2e, {from: accounts[2]});
		await SALESCONTRACTjmYmt4h.ff.call({from: accounts[4]});

		await expect(SALESCONTRACTjmYmt4h.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTQynJvjw = await SALESCONTRACT.new({from: accounts[1]});
		const addressrRksYfW = accounts[0]
		const addressTMn8Tz1 = accounts[5]
		const addressYjsWn9t = accounts[2]
		const addressczV1VeZ = accounts[2]
		const boolzoNSZ8T = await SALESCONTRACTQynJvjw.tokenSale.call(addressrRksYfW, {from: accounts[0]});
		const addressf7focd = await SALESCONTRACTQynJvjw.setToken.call(addressTMn8Tz1, {from: accounts[3]});
		const boolzidiL1Z = await SALESCONTRACTQynJvjw.tokenSale.call(addressYjsWn9t, {from: accounts[1]});
		const addresshtjTPXa = await SALESCONTRACTQynJvjw.setToken.call(addressczV1VeZ, {from: accounts[2]});

		await expect(SALESCONTRACTQynJvjw.tokenSale.call(addressrRksYfW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTfSlw2RQ = await SALESCONTRACT.new({from: accounts[2]});
		const addressMXjTG9Q = accounts[4]
		const addressTzCPCv5 = accounts[4]
		const uintQqXpq9L = BigInt("166")
		const addresscdmXfAJ = accounts[4]
		const addressewRN5JO = await SALESCONTRACTfSlw2RQ.setToken.call(addressMXjTG9Q, {from: accounts[2]});
		const addressGM28HDV = await SALESCONTRACTfSlw2RQ.setToken.call(addressTzCPCv5, {from: accounts[1]});
		const addressTAe8wEK = await SALESCONTRACTfSlw2RQ._setSalesPool.call(addresscdmXfAJ, uintQqXpq9L, {from: accounts[2]});

		await expect(SALESCONTRACTfSlw2RQ.setToken.call(addressTzCPCv5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTQynJvjw = await SALESCONTRACT.new({from: accounts[1]});
		const uintmTsgdYw = BigInt("320")
		const addressq6cPBPg = accounts[0]
		const addressntx3KcP = accounts[3]
		const uintKybP7mO = await SALESCONTRACTQynJvjw._setStage.call(uintmTsgdYw, {from: accounts[1]});
		const boolzoNSZ8T = await SALESCONTRACTQynJvjw.tokenSale.call(addressq6cPBPg, {from: accounts[0]});
		await SALESCONTRACTQynJvjw.clearTokens.call({from: accounts[1]});
		const addresshtjTPXa = await SALESCONTRACTQynJvjw.setToken.call(addressntx3KcP, {from: accounts[2]});

		await expect(SALESCONTRACTQynJvjw.tokenSale.call(addressq6cPBPg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTQynJvjw = await SALESCONTRACT.new({from: accounts[1]});
		const addressQhBgvRf = accounts[3]
		await SALESCONTRACTQynJvjw.clearTokens.call({from: accounts[1]});
		const addresshtjTPXa = await SALESCONTRACTQynJvjw.setToken.call(addressQhBgvRf, {from: accounts[2]});

		await expect(SALESCONTRACTQynJvjw.clearTokens.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTUBoFNUa = await SALESCONTRACT.new({from: accounts[3]});
		const uintoyMzbbl = BigInt("1939")
		const addressj0QVBZ = "0x0000000000000000000000000000000000000001"
		const addressuZRLb6K = accounts[1]
		const uinthexvrJ7 = BigInt("547")
		const addressY8QPEY = await SALESCONTRACTUBoFNUa._setSalesPool.call(addressj0QVBZ, uintoyMzbbl, {from: accounts[3]});
		const boolY9V1nGA = await SALESCONTRACTUBoFNUa.tokenSale.call(addressuZRLb6K, {from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTUBoFNUa.ff.call({from: accounts[2]});
		const uintiYBmsCl = await SALESCONTRACTUBoFNUa._setStage.call(uinthexvrJ7, {from: accounts[0]});

		await expect(SALESCONTRACTUBoFNUa.tokenSale.call(addressuZRLb6K, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTCCGUCJ = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSKlVlB9 = BigInt("793")
		const uintmaCafa = BigInt("1545")
		const addresschO125b = accounts[5]
		const uintwtHNcQZ = BigInt("1489")
		const addressyV9Z0F = accounts[1]
		const uintDGVjWix = await SALESCONTRACTCCGUCJ._setStage.call(uintSKlVlB9, {from: accounts[3]});
		await SALESCONTRACTCCGUCJ.clearTokens.call({from: accounts[5]});
		const addressmdh1Fpv = await SALESCONTRACTCCGUCJ._setSalesPool.call(addresschO125b, uintmaCafa, {from: accounts[5]});
		const addressVGODQ2n = await SALESCONTRACTCCGUCJ._setSalesPool.call(addressyV9Z0F, uintwtHNcQZ, {from: accounts[4]});
		await SALESCONTRACTCCGUCJ.ff.call({from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTQynJvjw = await SALESCONTRACT.new({from: accounts[1]});
		const uintMnH6z3k = BigInt("109")
		const addressq1xbxCY = accounts[1]
		await SALESCONTRACTQynJvjw.clearETH.call({from: accounts[1]});
		const uintSSHsJQe = await SALESCONTRACTQynJvjw._setStage.call(uintMnH6z3k, {from: accounts[3]});
		const boolzoNSZ8T = await SALESCONTRACTQynJvjw.tokenSale.call(addressq1xbxCY, {from: accounts[0]});

		await expect(SALESCONTRACTQynJvjw.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})