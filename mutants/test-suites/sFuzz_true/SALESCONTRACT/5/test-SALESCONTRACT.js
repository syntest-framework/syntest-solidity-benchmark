const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTSVa3yc2 = await SALESCONTRACT.new({from: accounts[0]});
		const addresso61wnoi = accounts[5]
		const uintH6kISlb = BigInt("839")
		const addressSAdLLTP = accounts[5]
		const addressZ8AABZF = await SALESCONTRACTSVa3yc2.setToken.call(addresso61wnoi, {from: accounts[0]});
//		const addressjZ9F6pG = await SALESCONTRACTSVa3yc2._setSalesPool.call(addressSAdLLTP, uintH6kISlb, {from: accounts[5]});

		await expect(SALESCONTRACTSVa3yc2._setSalesPool.call(addressSAdLLTP, uintH6kISlb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTPzazxFo = await SALESCONTRACT.new({from: accounts[4]});
		const addresscWNKSX = accounts[3]
//		const bool0wbbQn = await SALESCONTRACTPzazxFo.tokenSale.call(addresscWNKSX, {from: accounts[2]});
//		await SALESCONTRACTPzazxFo.clearTokens.call({from: accounts[2]});

		await expect(SALESCONTRACTPzazxFo.tokenSale.call(addresscWNKSX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTAUWRiUf = await SALESCONTRACT.new({from: accounts[4]});
		const addressV8HMcyQ = accounts[2]
		const addressJiACUoU = accounts[2]
		const uintNHPziRu = BigInt("1479")
		const addressclNhvT = accounts[3]
//		await SALESCONTRACTAUWRiUf.ff.call({from: accounts[1]});
//		const boolgZq1FQY = await SALESCONTRACTAUWRiUf.tokenSale.call(addressV8HMcyQ, {from: accounts[0]});
//		await SALESCONTRACTAUWRiUf.ff.call({from: accounts[2]});
//		await SALESCONTRACTAUWRiUf.clearETH.call({from: accounts[1]});
//		const addresss6yf3Qo = await SALESCONTRACTAUWRiUf.setToken.call(addressJiACUoU, {from: accounts[4]});
//		const addresshVNoleU = await SALESCONTRACTAUWRiUf._setSalesPool.call(addressclNhvT, uintNHPziRu, {from: accounts[1]});

		await expect(SALESCONTRACTAUWRiUf.ff.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTPzazxFo = await SALESCONTRACT.new({from: accounts[4]});
		const uintouwD5Nc = BigInt("225")
		const addressNeSXSw = accounts[3]
		const uintS78Z2k4 = await SALESCONTRACTPzazxFo._setStage.call(uintouwD5Nc, {from: accounts[4]});
//		const bool0wbbQn = await SALESCONTRACTPzazxFo.tokenSale.call(addressNeSXSw, {from: accounts[2]});

		await expect(SALESCONTRACTPzazxFo.tokenSale.call(addressNeSXSw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTSAFHLwm = await SALESCONTRACT.new({from: accounts[3]});
		const addresscDl23S = accounts[1]
		const uintjUV8ELM = BigInt("133")
		const addressxRVZMhD = accounts[3]
		const addressrlI9F7V = accounts[1]
//		await SALESCONTRACTSAFHLwm.clearETH.call({from: accounts[3]});
//		const addressvExf27P = await SALESCONTRACTSAFHLwm.setToken.call(addresscDl23S, {from: accounts[2]});
//		const addressqnaycl = await SALESCONTRACTSAFHLwm._setSalesPool.call(addressxRVZMhD, uintjUV8ELM, {from: accounts[0]});
//		const boolXezVJ8Z = await SALESCONTRACTSAFHLwm.tokenSale.call(addressrlI9F7V, {from: accounts[0]});
//		await SALESCONTRACTSAFHLwm.ff.call({from: accounts[0]});

		await expect(SALESCONTRACTSAFHLwm.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTPzazxFo = await SALESCONTRACT.new({from: accounts[4]});
		const addressvFEhnt3 = accounts[3]
		const uintc97UWht = BigInt("467")
//		await SALESCONTRACTPzazxFo.clearTokens.call({from: accounts[4]});
//		const bool0wbbQn = await SALESCONTRACTPzazxFo.tokenSale.call(addressvFEhnt3, {from: accounts[2]});
//		const uintfiG2bUV = await SALESCONTRACTPzazxFo._setStage.call(uintc97UWht, {from: accounts[1]});

		await expect(SALESCONTRACTPzazxFo.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTPzazxFo = await SALESCONTRACT.new({from: accounts[4]});
		const uintzY5cnYg = BigInt("377")
		const addressbgYWSyX = accounts[5]
		const addressvDZxICE = await SALESCONTRACTPzazxFo._setSalesPool.call(addressbgYWSyX, uintzY5cnYg, {from: accounts[4]});
//		await SALESCONTRACTPzazxFo.clearTokens.call({from: accounts[2]});
//		await SALESCONTRACTPzazxFo.ff.call({from: accounts[1]});

		await expect(SALESCONTRACTPzazxFo.clearTokens.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTdnGK2FG = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uinth0GjIIf = BigInt("1153")
		const addresskyMw0H = accounts[1]
		const addressECmfTnZ = accounts[0]
		await SALESCONTRACTdnGK2FG.ff.call({from: accounts[2]});
		const addressJu0mAdg = await SALESCONTRACTdnGK2FG._setSalesPool.call(addresskyMw0H, uinth0GjIIf, {from: accounts[0]});
		await SALESCONTRACTdnGK2FG.clearETH.call({from: accounts[3]});
		const boollQf8Iu9 = await SALESCONTRACTdnGK2FG.tokenSale.call(addressECmfTnZ, {from: accounts[3]});
	});
})