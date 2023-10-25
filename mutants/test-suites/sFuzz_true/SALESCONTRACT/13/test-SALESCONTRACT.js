const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTYm2BhMr = await SALESCONTRACT.new({from: accounts[1]});
		const addressUcOYPeH = accounts[5]
//		await SALESCONTRACTYm2BhMr.clearTokens.call({from: accounts[5]});
//		const boolYHLv2OO = await SALESCONTRACTYm2BhMr.tokenSale.call(addressUcOYPeH, {from: accounts[4]});

		await expect(SALESCONTRACTYm2BhMr.clearTokens.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTSTej12W = await SALESCONTRACT.new({from: accounts[2]});
		const addressDzyMRz1 = accounts[3]
		const uintCRLxGBe = BigInt("922")
		const addressX2LgOCV = accounts[2]
//		await SALESCONTRACTSTej12W.ff.call({from: accounts[4]});
//		const booltu5TkLG = await SALESCONTRACTSTej12W.tokenSale.call(addressDzyMRz1, {from: accounts[2]});
//		await SALESCONTRACTSTej12W.ff.call({from: accounts[2]});
//		const uintMIwFd7A = await SALESCONTRACTSTej12W._setStage.call(uintCRLxGBe, {from: accounts[1]});
//		const addressi4tOft0 = await SALESCONTRACTSTej12W.setToken.call(addressX2LgOCV, {from: accounts[0]});

		await expect(SALESCONTRACTSTej12W.ff.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTYm2BhMr = await SALESCONTRACT.new({from: accounts[1]});
		const uintH1wVRKp = BigInt("1425")
		const addressfKFDI2C = accounts[5]
		const uintygOLgvi = await SALESCONTRACTYm2BhMr._setStage.call(uintH1wVRKp, {from: accounts[1]});
//		await SALESCONTRACTYm2BhMr.clearTokens.call({from: accounts[5]});
//		const boolYHLv2OO = await SALESCONTRACTYm2BhMr.tokenSale.call(addressfKFDI2C, {from: accounts[4]});
//		await SALESCONTRACTYm2BhMr.ff.call({from: accounts[0]});

		await expect(SALESCONTRACTYm2BhMr.clearTokens.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTYm2BhMr = await SALESCONTRACT.new({from: accounts[1]});
		const addressV1kdLyj = accounts[5]
//		const boolYHLv2OO = await SALESCONTRACTYm2BhMr.tokenSale.call(addressV1kdLyj, {from: accounts[4]});

		await expect(SALESCONTRACTYm2BhMr.tokenSale.call(addressV1kdLyj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTcdmvgvy = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressIa2917P = accounts[2]
		const uinten102D7 = BigInt("2004")
		const addressRaacPSl = accounts[3]
		const boolQqO2a4f = await SALESCONTRACTcdmvgvy.tokenSale.call(addressIa2917P, {from: accounts[3]});
		const uinta9MlKVU = await SALESCONTRACTcdmvgvy._setStage.call(uinten102D7, {from: accounts[5]});
		await SALESCONTRACTcdmvgvy.clearETH.call({from: accounts[0]});
		await SALESCONTRACTcdmvgvy.clearTokens.call({from: accounts[2]});
		const boolsQI9g2d = await SALESCONTRACTcdmvgvy.tokenSale.call(addressRaacPSl, {from: accounts[2]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTYm2BhMr = await SALESCONTRACT.new({from: accounts[1]});
//		await SALESCONTRACTYm2BhMr.clearETH.call({from: accounts[1]});

		await expect(SALESCONTRACTYm2BhMr.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTav0EIaO = await SALESCONTRACT.new({from: accounts[2]});
		const addresso4ocEU = accounts[3]
		const uintnXVOBam = BigInt("80")
		const addressMOALk5z = "0x0000000000000000000000000000000000000001"
		const addressXGMbfP1 = "0x0000000000000000000000000000000000000001"
//		await SALESCONTRACTav0EIaO.clearTokens.call({from: accounts[2]});
//		await SALESCONTRACTav0EIaO.clearTokens.call({from: accounts[1]});
//		await SALESCONTRACTav0EIaO.clearTokens.call({from: accounts[0]});
//		const boolngV1WJ1 = await SALESCONTRACTav0EIaO.tokenSale.call(addresso4ocEU, {from: "0x0000000000000000000000000000000000000001"});
//		const addressDEDtAsG = await SALESCONTRACTav0EIaO._setSalesPool.call(addressMOALk5z, uintnXVOBam, {from: accounts[5]});
//		const boolrCXHYkA = await SALESCONTRACTav0EIaO.tokenSale.call(addressXGMbfP1, {from: accounts[5]});

		await expect(SALESCONTRACTav0EIaO.clearTokens.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTYm2BhMr = await SALESCONTRACT.new({from: accounts[1]});
		const addressYWGauJg = accounts[1]
		const addressmm8ZNLm = accounts[5]
		const addressmbceznj = await SALESCONTRACTYm2BhMr.setToken.call(addressYWGauJg, {from: accounts[1]});
//		const boolYHLv2OO = await SALESCONTRACTYm2BhMr.tokenSale.call(addressmm8ZNLm, {from: accounts[4]});

		await expect(SALESCONTRACTYm2BhMr.tokenSale.call(addressmm8ZNLm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTYm2BhMr = await SALESCONTRACT.new({from: accounts[1]});
		const uintlVBGvKv = BigInt("882")
		const addresszVOiHKz = accounts[3]
		const addressa3Kg9s9 = accounts[6]
		const addressNoQyT6Q = await SALESCONTRACTYm2BhMr._setSalesPool.call(addresszVOiHKz, uintlVBGvKv, {from: accounts[1]});
//		const boolYHLv2OO = await SALESCONTRACTYm2BhMr.tokenSale.call(addressa3Kg9s9, {from: accounts[4]});

		await expect(SALESCONTRACTYm2BhMr.tokenSale.call(addressa3Kg9s9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})