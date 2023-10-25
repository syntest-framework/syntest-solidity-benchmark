const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTHfS2GOV = await SALESCONTRACT.new({from: accounts[2]});
		const addressU8toQdJ = accounts[1]
		const uintm22cy4V = BigInt("1149")
		const addressKf05bd9 = accounts[3]
//		await SALESCONTRACTHfS2GOV.clearETH.call({from: accounts[5]});
//		const boollc31S2M = await SALESCONTRACTHfS2GOV.tokenSale.call(addressU8toQdJ, {from: accounts[2]});
//		await SALESCONTRACTHfS2GOV.ff.call({from: accounts[1]});
//		const uintibq6wkn = await SALESCONTRACTHfS2GOV._setStage.call(uintm22cy4V, {from: accounts[4]});
//		const addressokU2OhF = await SALESCONTRACTHfS2GOV.setToken.call(addressKf05bd9, {from: accounts[2]});

		await expect(SALESCONTRACTHfS2GOV.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTvCsGGYe = await SALESCONTRACT.new({from: accounts[3]});
		const addressVYfBlA = accounts[4]
		const uintmjKcR5a = BigInt("2040")
		const addressZHiNnt2 = accounts[4]
//		await SALESCONTRACTvCsGGYe.ff.call({from: accounts[3]});
//		await SALESCONTRACTvCsGGYe.clearETH.call({from: accounts[4]});
//		const addressIGmnCdk = await SALESCONTRACTvCsGGYe.setToken.call(addressVYfBlA, {from: accounts[1]});
//		const addressrUCRDd6 = await SALESCONTRACTvCsGGYe._setSalesPool.call(addressZHiNnt2, uintmjKcR5a, {from: accounts[1]});

		await expect(SALESCONTRACTvCsGGYe.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTVhZzivq = await SALESCONTRACT.new({from: accounts[0]});
		const addressu5YIMz3 = accounts[2]
		const addressDp0jldO = "0x0000000000000000000000000000000000000001"
		const uintGFVkQEx = BigInt("739")
		const addresskbCQ2Rp = accounts[4]
//		const boolrLbey3N = await SALESCONTRACTVhZzivq.tokenSale.call(addressu5YIMz3, {from: accounts[0]});
//		const addressfkBOURM = await SALESCONTRACTVhZzivq.setToken.call(addressDp0jldO, {from: accounts[3]});
//		const addressPT3YKNK = await SALESCONTRACTVhZzivq._setSalesPool.call(addresskbCQ2Rp, uintGFVkQEx, {from: accounts[1]});

		await expect(SALESCONTRACTVhZzivq.tokenSale.call(addressu5YIMz3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTKz8PIsA = await SALESCONTRACT.new({from: accounts[3]});
		const uintvviB6Q = BigInt("1129")
		const addressbo2T4c = "0x0000000000000000000000000000000000000001"
		const addressl4oWuB2 = accounts[2]
		const addressV5wVrC = await SALESCONTRACTKz8PIsA._setSalesPool.call(addressbo2T4c, uintvviB6Q, {from: accounts[3]});
//		const addressXI1Ialc = await SALESCONTRACTKz8PIsA.setToken.call(addressl4oWuB2, {from: accounts[4]});
//		await SALESCONTRACTKz8PIsA.ff.call({from: accounts[1]});

		await expect(SALESCONTRACTKz8PIsA.setToken.call(addressl4oWuB2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACThaAECLw = await SALESCONTRACT.new({from: accounts[0]});
		const addressUmzM6L6 = accounts[4]
		const addressNq6Tht = accounts[4]
		const addressrhHkmV8 = await SALESCONTRACThaAECLw.setToken.call(addressUmzM6L6, {from: accounts[0]});
//		const addressOB3Pyh4 = await SALESCONTRACThaAECLw.setToken.call(addressNq6Tht, {from: accounts[2]});

		await expect(SALESCONTRACThaAECLw.setToken.call(addressNq6Tht, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTuVA6Lor = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressodvwqvl = accounts[0]
		const addressPatMNo = accounts[5]
		await SALESCONTRACTuVA6Lor.ff.call({from: accounts[3]});
		const addressUnHUd2G = await SALESCONTRACTuVA6Lor.setToken.call(addressodvwqvl, {from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTuVA6Lor.ff.call({from: accounts[3]});
		const bool3dco8N = await SALESCONTRACTuVA6Lor.tokenSale.call(addressPatMNo, {from: accounts[3]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTVhZzivq = await SALESCONTRACT.new({from: accounts[0]});
		const addressXC6chmZ = accounts[3]
		const uintmECk8vH = BigInt("1747")
		const addressowoqWoV = accounts[0]
		const addressPEKHFXe = accounts[6]
//		await SALESCONTRACTVhZzivq.clearETH.call({from: accounts[0]});
//		const boolrLbey3N = await SALESCONTRACTVhZzivq.tokenSale.call(addressXC6chmZ, {from: accounts[0]});
//		const addressVLNSuva = await SALESCONTRACTVhZzivq._setSalesPool.call(addressowoqWoV, uintmECk8vH, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLjDBvGx = await SALESCONTRACTVhZzivq.tokenSale.call(addressPEKHFXe, {from: accounts[2]});
//		await SALESCONTRACTVhZzivq.ff.call({from: accounts[3]});

		await expect(SALESCONTRACTVhZzivq.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTVhZzivq = await SALESCONTRACT.new({from: accounts[0]});
		const uintpEONK4m = BigInt("976")
		const addressLJTyClk = accounts[3]
		const uintHf43Eov = await SALESCONTRACTVhZzivq._setStage.call(uintpEONK4m, {from: accounts[0]});
//		const boolrLbey3N = await SALESCONTRACTVhZzivq.tokenSale.call(addressLJTyClk, {from: accounts[0]});

		await expect(SALESCONTRACTVhZzivq.tokenSale.call(addressLJTyClk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTAyZ596X = await SALESCONTRACT.new({from: accounts[2]});
		const uintvzOIb6 = BigInt("210")
		const addressUbvMFpc = accounts[2]
		const uintNazA8a2 = BigInt("516")
		const addresszfOPFV7 = accounts[3]
//		await SALESCONTRACTAyZ596X.clearTokens.call({from: accounts[2]});
//		const addresspOmOsRo = await SALESCONTRACTAyZ596X._setSalesPool.call(addressUbvMFpc, uintvzOIb6, {from: accounts[5]});
//		const addressy3NlmmW = await SALESCONTRACTAyZ596X._setSalesPool.call(addresszfOPFV7, uintNazA8a2, {from: accounts[4]});
//		await SALESCONTRACTAyZ596X.ff.call({from: accounts[0]});

		await expect(SALESCONTRACTAyZ596X.clearTokens.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})