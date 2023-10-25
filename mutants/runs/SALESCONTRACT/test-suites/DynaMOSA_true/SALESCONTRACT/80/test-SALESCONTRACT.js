const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTaNiZPTh = await SALESCONTRACT.new({from: accounts[0]});
		const addressVIlf5Iq = accounts[3]
		const addressk5Ki3XN = accounts[2]
		await SALESCONTRACTaNiZPTh.ff.call({from: accounts[1]});
		await SALESCONTRACTaNiZPTh.ff.call({from: accounts[0]});
		const addressH5v5cLw = await SALESCONTRACTaNiZPTh.setToken.call(addressVIlf5Iq, {from: accounts[4]});
		const boolPljwwbS = await SALESCONTRACTaNiZPTh.tokenSale.call(addressk5Ki3XN, {from: accounts[5]});

		await expect(SALESCONTRACTaNiZPTh.ff.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACThtfXqL = await SALESCONTRACT.new({from: accounts[2]});
		const uintI6nu2iJ = BigInt("1840")
		const addressgT3C08l = accounts[2]
		const uintQqN7SCt = BigInt("1696")
		const addressRQJNbA = accounts[1]
		const uintZpST6mo = BigInt("102")
		const addressBUF2Nu = await SALESCONTRACThtfXqL._setSalesPool.call(addressgT3C08l, uintI6nu2iJ, {from: accounts[1]});
		await SALESCONTRACThtfXqL.ff.call({from: accounts[5]});
		await SALESCONTRACThtfXqL.ff.call({from: accounts[1]});
		const addressobMQcHx = await SALESCONTRACThtfXqL._setSalesPool.call(addressRQJNbA, uintQqN7SCt, {from: accounts[4]});
		await SALESCONTRACThtfXqL.clearTokens.call({from: accounts[3]});
		const uintVp7Xovw = await SALESCONTRACThtfXqL._setStage.call(uintZpST6mo, {from: accounts[1]});

		await expect(SALESCONTRACThtfXqL._setSalesPool.call(addressgT3C08l, uintI6nu2iJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTT9hAoDn = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQdcssWw = accounts[2]
		const addressEyGrM7d = accounts[2]
		await SALESCONTRACTT9hAoDn.clearTokens.call({from: accounts[4]});
		await SALESCONTRACTT9hAoDn.clearTokens.call({from: accounts[3]});
		const addressMni9I0H = await SALESCONTRACTT9hAoDn.setToken.call(addressQdcssWw, {from: accounts[3]});
		const addressjqN3Nso = await SALESCONTRACTT9hAoDn.setToken.call(addressEyGrM7d, {from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTGxJFLqL = await SALESCONTRACT.new({from: accounts[1]});
		const addressNJ4TDf2 = accounts[4]
		const addressiH6Paod = accounts[1]
		const booltrVGmL = await SALESCONTRACTGxJFLqL.tokenSale.call(addressNJ4TDf2, {from: accounts[3]});
		await SALESCONTRACTGxJFLqL.clearTokens.call({from: accounts[2]});
		await SALESCONTRACTGxJFLqL.clearTokens.call({from: accounts[4]});
		await SALESCONTRACTGxJFLqL.clearETH.call({from: accounts[1]});
		await SALESCONTRACTGxJFLqL.clearETH.call({from: accounts[2]});
		const boolN29wFKr = await SALESCONTRACTGxJFLqL.tokenSale.call(addressiH6Paod, {from: accounts[4]});

		await expect(SALESCONTRACTGxJFLqL.tokenSale.call(addressNJ4TDf2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTaNiZPTh = await SALESCONTRACT.new({from: accounts[0]});
		const addressOZnO5Y1 = accounts[0]
		const addresseADpJfj = "0x0000000000000000000000000000000000000001"
		const addressY9SNEHF = accounts[4]
		const addressqhZ79j = accounts[2]
		const address0IIFUE = await SALESCONTRACTaNiZPTh.setToken.call(addressOZnO5Y1, {from: accounts[0]});
		await SALESCONTRACTaNiZPTh.ff.call({from: accounts[1]});
		const booln5hyvj9 = await SALESCONTRACTaNiZPTh.tokenSale.call(addresseADpJfj, {from: accounts[2]});
		await SALESCONTRACTaNiZPTh.ff.call({from: accounts[0]});
		const addressH5v5cLw = await SALESCONTRACTaNiZPTh.setToken.call(addressY9SNEHF, {from: accounts[4]});
		const boolPljwwbS = await SALESCONTRACTaNiZPTh.tokenSale.call(addressqhZ79j, {from: accounts[5]});

		await expect(SALESCONTRACTaNiZPTh.ff.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTfizAha = await SALESCONTRACT.new({from: accounts[1]});
		const addresszTa4AAe = accounts[2]
		const addressTXHwl54 = accounts[5]
		const uintwvEUq97 = BigInt("842")
		await SALESCONTRACTfizAha.clearETH.call({from: accounts[1]});
		const booljHtLDbY = await SALESCONTRACTfizAha.tokenSale.call(addresszTa4AAe, {from: accounts[1]});
		const bool3QheLx = await SALESCONTRACTfizAha.tokenSale.call(addressTXHwl54, {from: accounts[0]});
		await SALESCONTRACTfizAha.clearTokens.call({from: accounts[3]});
		const uintAc7D76 = await SALESCONTRACTfizAha._setStage.call(uintwvEUq97, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTfizAha.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTfizAha = await SALESCONTRACT.new({from: accounts[1]});
		const addressugh0YRC = accounts[5]
		await SALESCONTRACTfizAha.clearTokens.call({from: accounts[1]});
		const bool3QheLx = await SALESCONTRACTfizAha.tokenSale.call(addressugh0YRC, {from: accounts[0]});
		await SALESCONTRACTfizAha.clearTokens.call({from: accounts[3]});

		await expect(SALESCONTRACTfizAha.clearTokens.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTtTOQZAx = await SALESCONTRACT.new({from: accounts[2]});
		const uintKlJhsIz = BigInt("1649")
		const addresshmuI5ix = accounts[5]
		const addressI6Kqpeq = accounts[2]
		const uintxJwRnH8 = BigInt("328")
		const addressPp1QTpN = accounts[1]
		const addressOdSrfTS = await SALESCONTRACTtTOQZAx._setSalesPool.call(addresshmuI5ix, uintKlJhsIz, {from: accounts[2]});
		const addressvOze2wD = await SALESCONTRACTtTOQZAx.setToken.call(addressI6Kqpeq, {from: "0x0000000000000000000000000000000000000001"});
		const addresskjax20l = await SALESCONTRACTtTOQZAx._setSalesPool.call(addressPp1QTpN, uintxJwRnH8, {from: accounts[2]});

		await expect(SALESCONTRACTtTOQZAx.setToken.call(addressI6Kqpeq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTaNiZPTh = await SALESCONTRACT.new({from: accounts[0]});
		const uintbSezA1 = BigInt("566")
		const uinteneAMQ = await SALESCONTRACTaNiZPTh._setStage.call(uintbSezA1, {from: accounts[0]});
		await SALESCONTRACTaNiZPTh.ff.call({from: accounts[0]});

		await expect(SALESCONTRACTaNiZPTh.ff.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})