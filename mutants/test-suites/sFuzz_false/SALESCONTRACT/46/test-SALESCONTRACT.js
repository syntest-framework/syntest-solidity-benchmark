const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTNSWxich = await SALESCONTRACT.new({from: accounts[1]});
		const uinth2uyG7v = BigInt("621")
		const addressaHi5C7Y = accounts[2]
		const uintzAnJ0Yp = BigInt("1963")
//		await SALESCONTRACTNSWxich.clearETH.call({from: accounts[1]});
//		const addressRMFpuUY = await SALESCONTRACTNSWxich._setSalesPool.call(addressaHi5C7Y, uinth2uyG7v, {from: "0x0000000000000000000000000000000000000001"});
//		const uintl9aa1hF = await SALESCONTRACTNSWxich._setStage.call(uintzAnJ0Yp, {from: accounts[0]});
//		await SALESCONTRACTNSWxich.clearETH.call({from: accounts[0]});
//		await SALESCONTRACTNSWxich.ff.call({from: accounts[5]});
//		await SALESCONTRACTNSWxich.clearTokens.call({from: accounts[1]});

		await expect(SALESCONTRACTNSWxich.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTqPafGQZ = await SALESCONTRACT.new({from: accounts[3]});
//		await SALESCONTRACTqPafGQZ.clearTokens.call({from: accounts[3]});
//		await SALESCONTRACTqPafGQZ.clearTokens.call({from: accounts[0]});
//		await SALESCONTRACTqPafGQZ.clearTokens.call({from: accounts[2]});
//		await SALESCONTRACTqPafGQZ.ff.call({from: accounts[2]});
//		await SALESCONTRACTqPafGQZ.ff.call({from: accounts[2]});
//		await SALESCONTRACTqPafGQZ.ff.call({from: accounts[2]});

		await expect(SALESCONTRACTqPafGQZ.clearTokens.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTINgPa8 = await SALESCONTRACT.new({from: accounts[0]});
		const uintFvHDhFn = BigInt("170")
//		await SALESCONTRACTINgPa8.ff.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintQ7adYgt = await SALESCONTRACTINgPa8._setStage.call(uintFvHDhFn, {from: "0x0000000000000000000000000000000000000001"});
//		await SALESCONTRACTINgPa8.clearETH.call({from: accounts[0]});
//		await SALESCONTRACTINgPa8.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTINgPa8.ff.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTm4tNXIF = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDE6FWEE = BigInt("1162")
		const addressCg0eaKK = accounts[1]
		const addressNwmisMn = accounts[4]
		const addressOPq4a91 = accounts[4]
		const addressbRjHAUJ = accounts[5]
		const addressOlImIoK = await SALESCONTRACTm4tNXIF._setSalesPool.call(addressCg0eaKK, uintDE6FWEE, {from: accounts[2]});
		const boolRGWMaY = await SALESCONTRACTm4tNXIF.tokenSale.call(addressNwmisMn, {from: accounts[2]});
		const boolPdc3sIF = await SALESCONTRACTm4tNXIF.tokenSale.call(addressOPq4a91, {from: accounts[4]});
		const booloqJTYrQ = await SALESCONTRACTm4tNXIF.tokenSale.call(addressbRjHAUJ, {from: accounts[1]});
		await SALESCONTRACTm4tNXIF.ff.call({from: accounts[3]});
		await SALESCONTRACTm4tNXIF.ff.call({from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTjCTMbOI = await SALESCONTRACT.new({from: accounts[2]});
		const addresssAmlTxB = accounts[3]
		const uintr8WuTnO = BigInt("1912")
		const addresszc1BFEx = accounts[0]
//		const boolLESdkHr = await SALESCONTRACTjCTMbOI.tokenSale.call(addresssAmlTxB, {from: accounts[4]});
//		const addresst3qsFCK = await SALESCONTRACTjCTMbOI._setSalesPool.call(addresszc1BFEx, uintr8WuTnO, {from: accounts[1]});
//		await SALESCONTRACTjCTMbOI.ff.call({from: accounts[3]});

		await expect(SALESCONTRACTjCTMbOI.tokenSale.call(addresssAmlTxB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTeiMVwB7 = await SALESCONTRACT.new({from: accounts[4]});
		const addressur54elJ = accounts[2]
		const addressQkHnn6l = accounts[1]
		const addressdn1VSda = await SALESCONTRACTeiMVwB7.setToken.call(addressur54elJ, {from: accounts[4]});
//		await SALESCONTRACTeiMVwB7.clearETH.call({from: accounts[2]});
//		const addressX9Lwgt = await SALESCONTRACTeiMVwB7.setToken.call(addressQkHnn6l, {from: accounts[3]});

		await expect(SALESCONTRACTeiMVwB7.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTE7dNyjf = await SALESCONTRACT.new({from: accounts[4]});
		const uintOPgjuQQ = BigInt("1473")
		const addressMmU6Yrm = accounts[2]
		const addresscU2RW3e = accounts[1]
		const addressJr00xDW = await SALESCONTRACTE7dNyjf._setSalesPool.call(addressMmU6Yrm, uintOPgjuQQ, {from: accounts[4]});
		const addressH3Dosm4 = await SALESCONTRACTE7dNyjf.setToken.call(addresscU2RW3e, {from: accounts[4]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTeiMVwB7 = await SALESCONTRACT.new({from: accounts[4]});
		const uintewUuCGk = BigInt("730")
		const addressauQROK9 = accounts[1]
		const uintVm7sE64 = await SALESCONTRACTeiMVwB7._setStage.call(uintewUuCGk, {from: accounts[4]});
//		const addressX9Lwgt = await SALESCONTRACTeiMVwB7.setToken.call(addressauQROK9, {from: accounts[3]});

		await expect(SALESCONTRACTeiMVwB7.setToken.call(addressauQROK9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})