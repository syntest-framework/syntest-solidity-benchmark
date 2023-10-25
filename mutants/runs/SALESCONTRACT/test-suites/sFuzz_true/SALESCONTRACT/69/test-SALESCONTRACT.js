const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTGbvDUhk = await SALESCONTRACT.new({from: accounts[4]});
		const addressTqwyRuh = accounts[5]
		const addressrarseXQ = accounts[3]
		const bool5vhFh3 = await SALESCONTRACTGbvDUhk.tokenSale.call(addressTqwyRuh, {from: accounts[0]});
		await SALESCONTRACTGbvDUhk.ff.call({from: "0x0000000000000000000000000000000000000001"});
		const addresssxy5wkT = await SALESCONTRACTGbvDUhk.setToken.call(addressrarseXQ, {from: accounts[4]});
		await SALESCONTRACTGbvDUhk.ff.call({from: accounts[1]});

		await expect(SALESCONTRACTGbvDUhk.tokenSale.call(addressTqwyRuh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTKq1CHPe = await SALESCONTRACT.new({from: accounts[2]});
		const addresstEQgJo0 = accounts[2]
		await SALESCONTRACTKq1CHPe.clearTokens.call({from: accounts[4]});
		await SALESCONTRACTKq1CHPe.clearETH.call({from: accounts[4]});
		const boolMwLLPNz = await SALESCONTRACTKq1CHPe.tokenSale.call(addresstEQgJo0, {from: accounts[4]});

		await expect(SALESCONTRACTKq1CHPe.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTdtY2Q5U = await SALESCONTRACT.new({from: accounts[3]});
		const addressvsVJq5 = accounts[4]
		const uintiyBtWww = BigInt("659")
		const addressZqX6FDc = accounts[3]
		const addressE3nW9QF = accounts[2]
		const addressqmHFkOh = await SALESCONTRACTdtY2Q5U.setToken.call(addressvsVJq5, {from: accounts[3]});
		const addressbhRDGb = await SALESCONTRACTdtY2Q5U._setSalesPool.call(addressZqX6FDc, uintiyBtWww, {from: accounts[4]});
		const boolXvv0neF = await SALESCONTRACTdtY2Q5U.tokenSale.call(addressE3nW9QF, {from: accounts[0]});
		await SALESCONTRACTdtY2Q5U.ff.call({from: accounts[2]});

		await expect(SALESCONTRACTdtY2Q5U._setSalesPool.call(addressZqX6FDc, uintiyBtWww, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTOnHqDES = await SALESCONTRACT.new({from: accounts[1]});
		const addressaoRuSHa = accounts[3]
		const addressg9XnrMd = accounts[1]
		await SALESCONTRACTOnHqDES.ff.call({from: accounts[0]});
		const addressplfV6Lg = await SALESCONTRACTOnHqDES.setToken.call(addressaoRuSHa, {from: accounts[1]});
		const boolcyQmDem = await SALESCONTRACTOnHqDES.tokenSale.call(addressg9XnrMd, {from: accounts[4]});

		await expect(SALESCONTRACTOnHqDES.ff.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTkxdnAuY = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uinta93DaQo = BigInt("87")
		const uintlDQEz6T = BigInt("186")
		const addressVY68TD2 = accounts[2]
		const addressyaTCBUc = accounts[4]
		await SALESCONTRACTkxdnAuY.clearETH.call({from: accounts[5]});
		await SALESCONTRACTkxdnAuY.ff.call({from: accounts[0]});
		const uintWEtSFVW = await SALESCONTRACTkxdnAuY._setStage.call(uinta93DaQo, {from: accounts[0]});
		await SALESCONTRACTkxdnAuY.ff.call({from: "0x0000000000000000000000000000000000000001"});
		const addressW89qhPw = await SALESCONTRACTkxdnAuY._setSalesPool.call(addressVY68TD2, uintlDQEz6T, {from: accounts[2]});
		const addresswjMkF8k = await SALESCONTRACTkxdnAuY.setToken.call(addressyaTCBUc, {from: accounts[2]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTEC0gHhZ = await SALESCONTRACT.new({from: accounts[1]});
		const uintlD2JKef = BigInt("544")
		const addressQ4433K6 = accounts[3]
		const addressq1LsP8o = accounts[5]
		const addressJ3Qg9B4 = await SALESCONTRACTEC0gHhZ._setSalesPool.call(addressQ4433K6, uintlD2JKef, {from: accounts[1]});
		const boolfw3oqcL = await SALESCONTRACTEC0gHhZ.tokenSale.call(addressq1LsP8o, {from: accounts[2]});

		await expect(SALESCONTRACTEC0gHhZ.tokenSale.call(addressq1LsP8o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBUWIrTL = await SALESCONTRACT.new({from: accounts[3]});
		const addressP3bED5k = accounts[1]
		const addresszzKVW3v = "0x0000000000000000000000000000000000000001"
		const addresst9ePkeC = accounts[5]
		const uintaEXRlRQ = BigInt("1323")
		const uintDVQBjgt = BigInt("757")
		const addressNLJwjpI = accounts[5]
		await SALESCONTRACTBUWIrTL.clearTokens.call({from: accounts[3]});
		const boollAHn5Lh = await SALESCONTRACTBUWIrTL.tokenSale.call(addressP3bED5k, {from: accounts[4]});
		const addressDyG7BZQ = await SALESCONTRACTBUWIrTL.setToken.call(addresszzKVW3v, {from: accounts[1]});
		const addressGz3JMeA = await SALESCONTRACTBUWIrTL.setToken.call(addresst9ePkeC, {from: accounts[0]});
		const uintZuyL9Gd = await SALESCONTRACTBUWIrTL._setStage.call(uintaEXRlRQ, {from: accounts[4]});
		const addressNy6vDHQ = await SALESCONTRACTBUWIrTL._setSalesPool.call(addressNLJwjpI, uintDVQBjgt, {from: accounts[4]});

		await expect(SALESCONTRACTBUWIrTL.clearTokens.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTOoDs0RB = await SALESCONTRACT.new({from: accounts[1]});
		const uintAZsDlDA = BigInt("658")
		const addressiiV3Gay = accounts[5]
		const addressxO1evd = accounts[2]
		const uintVN7nVvm = BigInt("43")
		const addressz3Q5c6K = accounts[3]
		await SALESCONTRACTOoDs0RB.clearETH.call({from: accounts[1]});
		const addresszCB85gF = await SALESCONTRACTOoDs0RB._setSalesPool.call(addressiiV3Gay, uintAZsDlDA, {from: accounts[4]});
		const booldc81gJu = await SALESCONTRACTOoDs0RB.tokenSale.call(addressxO1evd, {from: "0x0000000000000000000000000000000000000001"});
		const addressIyZywDw = await SALESCONTRACTOoDs0RB._setSalesPool.call(addressz3Q5c6K, uintVN7nVvm, {from: accounts[2]});
		await SALESCONTRACTOoDs0RB.clearTokens.call({from: accounts[0]});

		await expect(SALESCONTRACTOoDs0RB.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTEC0gHhZ = await SALESCONTRACT.new({from: accounts[1]});
		const uintKsDd3Yh = BigInt("1296")
		const addressce0BBSN = accounts[5]
		const uintKHe5nKx = await SALESCONTRACTEC0gHhZ._setStage.call(uintKsDd3Yh, {from: accounts[1]});
		const boolfw3oqcL = await SALESCONTRACTEC0gHhZ.tokenSale.call(addressce0BBSN, {from: accounts[2]});

		await expect(SALESCONTRACTEC0gHhZ.tokenSale.call(addressce0BBSN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})