const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTA7Z5w2n = await SALESCONTRACT.new({from: accounts[0]});
		const addressc41Lfko = accounts[0]
//		const addresshU58XB2 = await SALESCONTRACTA7Z5w2n.setToken.call(addressc41Lfko, {from: accounts[3]});
//		await SALESCONTRACTA7Z5w2n.clearETH.call({from: accounts[3]});
//		await SALESCONTRACTA7Z5w2n.ff.call({from: accounts[3]});

		await expect(SALESCONTRACTA7Z5w2n.setToken.call(addressc41Lfko, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTdiBFnn = await SALESCONTRACT.new({from: accounts[0]});
		const addresslCILgMh = accounts[4]
		const addressNLRqnVz = accounts[4]
//		await SALESCONTRACTdiBFnn.ff.call({from: accounts[5]});
//		await SALESCONTRACTdiBFnn.clearETH.call({from: accounts[3]});
//		await SALESCONTRACTdiBFnn.clearTokens.call({from: accounts[1]});
//		const boolZ1rWj7i = await SALESCONTRACTdiBFnn.tokenSale.call(addresslCILgMh, {from: accounts[3]});
//		const boolr3ftWi = await SALESCONTRACTdiBFnn.tokenSale.call(addressNLRqnVz, {from: accounts[4]});

		await expect(SALESCONTRACTdiBFnn.ff.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTV6hcffI = await SALESCONTRACT.new({from: accounts[1]});
		const uintaEq1OQ = BigInt("1450")
		const addressPrDIulY = accounts[3]
		const addressTOEamOG = accounts[2]
//		await SALESCONTRACTV6hcffI.clearTokens.call({from: accounts[1]});
//		const addressRvp0dkm = await SALESCONTRACTV6hcffI._setSalesPool.call(addressPrDIulY, uintaEq1OQ, {from: accounts[0]});
//		const boolL7tl7Tj = await SALESCONTRACTV6hcffI.tokenSale.call(addressTOEamOG, {from: accounts[0]});

		await expect(SALESCONTRACTV6hcffI.clearTokens.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTQdGc4aX = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTQdGc4aX.ff.call({from: accounts[3]});
		await SALESCONTRACTQdGc4aX.ff.call({from: accounts[2]});
		await SALESCONTRACTQdGc4aX.ff.call({from: accounts[2]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTbUpDVr9 = await SALESCONTRACT.new({from: accounts[2]});
		const addressJ1dZNi8 = accounts[3]
		const addressl1ATiuc = await SALESCONTRACTbUpDVr9.setToken.call(addressJ1dZNi8, {from: accounts[2]});
//		await SALESCONTRACTbUpDVr9.clearTokens.call({from: accounts[1]});

		await expect(SALESCONTRACTbUpDVr9.clearTokens.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTIMHoHSL = await SALESCONTRACT.new({from: accounts[0]});
		const addressZw3uRBs = accounts[5]
		const addressY6IpE4e = accounts[4]
		const uintCkEV1NV = BigInt("714")
		const addresswoKeCZ7 = accounts[4]
		const addresse9vlWSU = accounts[4]
		const addressY2r6kwA = await SALESCONTRACTIMHoHSL.setToken.call(addressZw3uRBs, {from: accounts[0]});
//		const boolYmDbqyE = await SALESCONTRACTIMHoHSL.tokenSale.call(addressY6IpE4e, {from: accounts[2]});
//		const addressf2RZ9T = await SALESCONTRACTIMHoHSL._setSalesPool.call(addresswoKeCZ7, uintCkEV1NV, {from: accounts[3]});
//		const boolMWInOVM = await SALESCONTRACTIMHoHSL.tokenSale.call(addresse9vlWSU, {from: accounts[3]});

		await expect(SALESCONTRACTIMHoHSL.tokenSale.call(addressY6IpE4e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTVMH8FYL = await SALESCONTRACT.new({from: accounts[0]});
		const uintpYqNqQj = BigInt("130")
		const uintwd6rjjk = BigInt("1850")
		const uintSOf1e2V = BigInt("1998")
		const addressjbkNc8m = accounts[0]
		const uintwuq9iN = await SALESCONTRACTVMH8FYL._setStage.call(uintpYqNqQj, {from: accounts[0]});
//		await SALESCONTRACTVMH8FYL.ff.call({from: accounts[1]});
//		const uintRn8hc4W = await SALESCONTRACTVMH8FYL._setStage.call(uintwd6rjjk, {from: accounts[1]});
//		const addressYiXhVZo = await SALESCONTRACTVMH8FYL._setSalesPool.call(addressjbkNc8m, uintSOf1e2V, {from: accounts[5]});

		await expect(SALESCONTRACTVMH8FYL.ff.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTVMH8FYL = await SALESCONTRACT.new({from: accounts[0]});
		const uintDNc2fSw = BigInt("231")
		const addressT0IMYmU = accounts[1]
		const addressg93mVeQ = await SALESCONTRACTVMH8FYL._setSalesPool.call(addressT0IMYmU, uintDNc2fSw, {from: accounts[0]});
//		await SALESCONTRACTVMH8FYL.ff.call({from: accounts[3]});
//		await SALESCONTRACTVMH8FYL.ff.call({from: accounts[1]});
		await SALESCONTRACTVMH8FYL.ff.call({from: accounts[3]});

		await expect(SALESCONTRACTVMH8FYL.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTbqlxwEC = await SALESCONTRACT.new({from: accounts[3]});
		const addressRqa7Zy = accounts[5]
		const uintGhpTv86 = BigInt("948")
		const addressTq3m6H3 = accounts[0]
//		await SALESCONTRACTbqlxwEC.clearETH.call({from: accounts[3]});
//		const boolFBkh3ZY = await SALESCONTRACTbqlxwEC.tokenSale.call(addressRqa7Zy, {from: accounts[0]});
//		const uintMCWCf2o = await SALESCONTRACTbqlxwEC._setStage.call(uintGhpTv86, {from: accounts[1]});
//		await SALESCONTRACTbqlxwEC.clearTokens.call({from: accounts[0]});
		await SALESCONTRACTbqlxwEC.clearETH.call({from: accounts[3]});
//		const boolRMye7l = await SALESCONTRACTbqlxwEC.tokenSale.call(addressTq3m6H3, {from: accounts[0]});
//		await SALESCONTRACTbqlxwEC.clearETH.call({from: accounts[0]});

		await expect(SALESCONTRACTbqlxwEC.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})