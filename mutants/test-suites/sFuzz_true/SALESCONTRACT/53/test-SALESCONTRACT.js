const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTcxAgcKt = await SALESCONTRACT.new({from: accounts[1]});
		const address85QRTo = "0x0000000000000000000000000000000000000001"
//		const addressuaLQQaa = await SALESCONTRACTcxAgcKt.setToken.call(address85QRTo, {from: accounts[4]});
//		await SALESCONTRACTcxAgcKt.clearTokens.call({from: accounts[0]});
//		await SALESCONTRACTcxAgcKt.ff.call({from: accounts[1]});

		await expect(SALESCONTRACTcxAgcKt.setToken.call(address85QRTo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTlDEuqCI = await SALESCONTRACT.new({from: accounts[2]});
		const addressstgb925 = accounts[3]
		const uintOmMAuKs = BigInt("1067")
//		await SALESCONTRACTlDEuqCI.ff.call({from: accounts[2]});
//		await SALESCONTRACTlDEuqCI.clearETH.call({from: accounts[4]});
//		const addressOovDVl2 = await SALESCONTRACTlDEuqCI.setToken.call(addressstgb925, {from: accounts[2]});
//		const uintyLIGkk = await SALESCONTRACTlDEuqCI._setStage.call(uintOmMAuKs, {from: accounts[4]});

		await expect(SALESCONTRACTlDEuqCI.ff.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTDxNibjV = await SALESCONTRACT.new({from: accounts[0]});
		const addressRfOiQ4l = accounts[4]
		const uintGdYp0wA = BigInt("1675")
		const addressD1c6T7 = "0x0000000000000000000000000000000000000001"
//		const boolis56uU7 = await SALESCONTRACTDxNibjV.tokenSale.call(addressRfOiQ4l, {from: accounts[0]});
//		const address2FBV4R = await SALESCONTRACTDxNibjV._setSalesPool.call(addressD1c6T7, uintGdYp0wA, {from: accounts[5]});
//		await SALESCONTRACTDxNibjV.clearTokens.call({from: accounts[1]});
//		await SALESCONTRACTDxNibjV.clearTokens.call({from: accounts[0]});
//		await SALESCONTRACTDxNibjV.clearETH.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTDxNibjV.tokenSale.call(addressRfOiQ4l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTaA3Uz5V = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrfqoI6s = BigInt("330")
		const addressEYh6eeL = accounts[4]
		const addressEAaOuif = accounts[1]
		const uintX5z9JX9 = BigInt("385")
		await SALESCONTRACTaA3Uz5V.ff.call({from: accounts[4]});
		const addresspoyMUfj = await SALESCONTRACTaA3Uz5V._setSalesPool.call(addressEYh6eeL, uintrfqoI6s, {from: accounts[4]});
		await SALESCONTRACTaA3Uz5V.clearETH.call({from: accounts[5]});
		const boolQWfPY59 = await SALESCONTRACTaA3Uz5V.tokenSale.call(addressEAaOuif, {from: accounts[4]});
		const uintSe1w30E = await SALESCONTRACTaA3Uz5V._setStage.call(uintX5z9JX9, {from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTaA3Uz5V.ff.call({from: accounts[2]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTMXIRJLM = await SALESCONTRACT.new({from: accounts[4]});
		const addressKsQfvkZ = accounts[5]
		const uintWy8w8zn = BigInt("122")
		const addresssW8DOq8 = accounts[5]
//		await SALESCONTRACTMXIRJLM.clearTokens.call({from: accounts[4]});
//		const boolinEV14q = await SALESCONTRACTMXIRJLM.tokenSale.call(addressKsQfvkZ, {from: accounts[0]});
//		const addresszPNke5I = await SALESCONTRACTMXIRJLM._setSalesPool.call(addresssW8DOq8, uintWy8w8zn, {from: accounts[0]});
//		await SALESCONTRACTMXIRJLM.ff.call({from: accounts[3]});
//		await SALESCONTRACTMXIRJLM.clearETH.call({from: accounts[5]});

		await expect(SALESCONTRACTMXIRJLM.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTMXIRJLM = await SALESCONTRACT.new({from: accounts[4]});
		const uintylHqSUz = BigInt("475")
		const addressYAfORb = accounts[0]
		const uintgt2Saj = BigInt("76")
		const addresspTYi3sW = accounts[1]
		const uintPMvBU1t = BigInt("112")
		const addressgAmcCYM = accounts[5]
		const addresshOie5kf = await SALESCONTRACTMXIRJLM._setSalesPool.call(addressYAfORb, uintylHqSUz, {from: accounts[4]});
//		const addressGilIGiC = await SALESCONTRACTMXIRJLM._setSalesPool.call(addresspTYi3sW, uintgt2Saj, {from: accounts[1]});
//		const addresszPNke5I = await SALESCONTRACTMXIRJLM._setSalesPool.call(addressgAmcCYM, uintPMvBU1t, {from: accounts[0]});

		await expect(SALESCONTRACTMXIRJLM._setSalesPool.call(addresspTYi3sW, uintgt2Saj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTMXIRJLM = await SALESCONTRACT.new({from: accounts[4]});
		const uintpgpJ7bx = BigInt("509")
		const addresst3OiRC0 = accounts[5]
		const uintjyCFiZj = await SALESCONTRACTMXIRJLM._setStage.call(uintpgpJ7bx, {from: accounts[4]});
//		const boolinEV14q = await SALESCONTRACTMXIRJLM.tokenSale.call(addresst3OiRC0, {from: accounts[0]});
//		await SALESCONTRACTMXIRJLM.clearETH.call({from: accounts[5]});
//		await SALESCONTRACTMXIRJLM.ff.call({from: accounts[3]});

		await expect(SALESCONTRACTMXIRJLM.tokenSale.call(addresst3OiRC0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTMXIRJLM = await SALESCONTRACT.new({from: accounts[4]});
		const addressm31R1yb = accounts[3]
		const addressHgxZSBH = accounts[6]
		const addressvrmOzGm = await SALESCONTRACTMXIRJLM.setToken.call(addressm31R1yb, {from: accounts[4]});
//		await SALESCONTRACTMXIRJLM.ff.call({from: accounts[1]});
//		const boolinEV14q = await SALESCONTRACTMXIRJLM.tokenSale.call(addressHgxZSBH, {from: accounts[0]});
//		await SALESCONTRACTMXIRJLM.clearETH.call({from: accounts[5]});

		await expect(SALESCONTRACTMXIRJLM.ff.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTMXIRJLM = await SALESCONTRACT.new({from: accounts[4]});
		const addressGuU01hz = accounts[7]
		const uintLa8ZyAQ = BigInt("171")
		const address7UBOyR = accounts[0]
//		await SALESCONTRACTMXIRJLM.clearETH.call({from: accounts[4]});
//		const boolinEV14q = await SALESCONTRACTMXIRJLM.tokenSale.call(addressGuU01hz, {from: accounts[0]});
//		const addressdUqxld5 = await SALESCONTRACTMXIRJLM._setSalesPool.call(address7UBOyR, uintLa8ZyAQ, {from: accounts[0]});

		await expect(SALESCONTRACTMXIRJLM.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})