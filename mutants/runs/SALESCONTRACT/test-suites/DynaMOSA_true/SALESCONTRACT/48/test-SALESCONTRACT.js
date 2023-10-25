const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTq0DzBoD = await SALESCONTRACT.new({from: accounts[0]});
		const addressZLcf49 = "0x0000000000000000000000000000000000000001"
		await SALESCONTRACTq0DzBoD.clearTokens.call({from: accounts[0]});
		await SALESCONTRACTq0DzBoD.ff.call({from: accounts[2]});
		await SALESCONTRACTq0DzBoD.clearETH.call({from: accounts[2]});
		const bool35OhBH = await SALESCONTRACTq0DzBoD.tokenSale.call(addressZLcf49, {from: accounts[4]});
		await SALESCONTRACTq0DzBoD.ff.call({from: accounts[4]});

		await expect(SALESCONTRACTq0DzBoD.clearTokens.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTHr5CQ6T = await SALESCONTRACT.new({from: accounts[2]});
		const addressOflIBDc = accounts[1]
		await SALESCONTRACTHr5CQ6T.ff.call({from: accounts[3]});
		const boolQBXYCTo = await SALESCONTRACTHr5CQ6T.tokenSale.call(addressOflIBDc, {from: accounts[4]});

		await expect(SALESCONTRACTHr5CQ6T.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTdEdtO2Z = await SALESCONTRACT.new({from: accounts[3]});
		const addressgFDBqVe = accounts[3]
		const addressrVkUy9l = accounts[0]
		const boolf3Aqwy0 = await SALESCONTRACTdEdtO2Z.tokenSale.call(addressgFDBqVe, {from: accounts[0]});
		await SALESCONTRACTdEdtO2Z.ff.call({from: accounts[1]});
		const addressaOpOBM = await SALESCONTRACTdEdtO2Z.setToken.call(addressrVkUy9l, {from: accounts[3]});

		await expect(SALESCONTRACTdEdtO2Z.tokenSale.call(addressgFDBqVe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACT74MY7u = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMAbaei2 = "0x0000000000000000000000000000000000000001"
		const addressfokIZn = accounts[3]
		const uintf1ffLf0 = BigInt("589")
		const addressyXMGJa0 = accounts[1]
		const addressryYitQx = await SALESCONTRACT74MY7u.setToken.call(addressMAbaei2, {from: accounts[0]});
		const booluaNtFKV = await SALESCONTRACT74MY7u.tokenSale.call(addressfokIZn, {from: accounts[1]});
		await SALESCONTRACT74MY7u.ff.call({from: accounts[0]});
		const addressTNWscz1 = await SALESCONTRACT74MY7u._setSalesPool.call(addressyXMGJa0, uintf1ffLf0, {from: accounts[0]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTLDDkEkn = await SALESCONTRACT.new({from: accounts[1]});
		const uintVngbK7F = BigInt("1113")
		const addressLix4eG = accounts[1]
		const addresstf0KYfc = accounts[6]
		const addressHTfpovt = accounts[4]
		const addressCHbTgNf = await SALESCONTRACTLDDkEkn._setSalesPool.call(addressLix4eG, uintVngbK7F, {from: accounts[1]});
		await SALESCONTRACTLDDkEkn.clearETH.call({from: accounts[5]});
		const boolOFo54Ga = await SALESCONTRACTLDDkEkn.tokenSale.call(addresstf0KYfc, {from: accounts[3]});
		await SALESCONTRACTLDDkEkn.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
		const booleS9N93b = await SALESCONTRACTLDDkEkn.tokenSale.call(addressHTfpovt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTLDDkEkn.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTNLg3rac = await SALESCONTRACT.new({from: accounts[3]});
		const addressKdvyYpP = accounts[2]
		const addressObOaROz = accounts[1]
		const addresslHItWB7 = accounts[4]
		const addressKZxuv4J = await SALESCONTRACTNLg3rac.setToken.call(addressKdvyYpP, {from: accounts[3]});
		const boolRMEP9l2 = await SALESCONTRACTNLg3rac.tokenSale.call(addressObOaROz, {from: accounts[0]});
		const boolCNU7kg5 = await SALESCONTRACTNLg3rac.tokenSale.call(addresslHItWB7, {from: accounts[1]});
		await SALESCONTRACTNLg3rac.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTNLg3rac.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTNLg3rac.clearETH.call({from: accounts[4]});

		await expect(SALESCONTRACTNLg3rac.tokenSale.call(addressObOaROz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTB11tjdQ = await SALESCONTRACT.new({from: accounts[2]});
		const uintOg7Vclp = BigInt("882")
		const addressB6nWpPI = accounts[2]
		const addressIktVXS = accounts[1]
		const uintTEsA1lo = await SALESCONTRACTB11tjdQ._setStage.call(uintOg7Vclp, {from: accounts[2]});
		const boolyZzzH2 = await SALESCONTRACTB11tjdQ.tokenSale.call(addressB6nWpPI, {from: accounts[2]});
		const boolXHW2oNG = await SALESCONTRACTB11tjdQ.tokenSale.call(addressIktVXS, {from: accounts[0]});

		await expect(SALESCONTRACTB11tjdQ.tokenSale.call(addressB6nWpPI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTHr5CQ6T = await SALESCONTRACT.new({from: accounts[2]});
		await SALESCONTRACTHr5CQ6T.clearETH.call({from: accounts[2]});

		await expect(SALESCONTRACTHr5CQ6T.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTLDDkEkn = await SALESCONTRACT.new({from: accounts[1]});
		const addressfGLWDSy = accounts[10]
		const addressjsxBN7 = accounts[0]
		const boolOFo54Ga = await SALESCONTRACTLDDkEkn.tokenSale.call(addressfGLWDSy, {from: accounts[3]});
		const addressMdiBnNx = await SALESCONTRACTLDDkEkn.setToken.call(addressjsxBN7, {from: accounts[3]});

		await expect(SALESCONTRACTLDDkEkn.tokenSale.call(addressfGLWDSy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})