const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTHy7XsJ = await SALESCONTRACT.new({from: accounts[3]});
		const uintGmRMgzj = BigInt("641")
		const addressdgrDRGs = accounts[0]
//		const uintzBUmkB = await SALESCONTRACTTHy7XsJ._setStage.call(uintGmRMgzj, {from: accounts[0]});
//		await SALESCONTRACTTHy7XsJ.ff.call({from: accounts[4]});
//		const boolbBhIKtv = await SALESCONTRACTTHy7XsJ.tokenSale.call(addressdgrDRGs, {from: accounts[3]});

		await expect(SALESCONTRACTTHy7XsJ._setStage.call(uintGmRMgzj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTRCPh74 = await SALESCONTRACT.new({from: accounts[4]});
//		await SALESCONTRACTRCPh74.ff.call({from: "0x0000000000000000000000000000000000000001"});
//		await SALESCONTRACTRCPh74.clearETH.call({from: accounts[4]});
//		await SALESCONTRACTRCPh74.ff.call({from: accounts[0]});

		await expect(SALESCONTRACTRCPh74.ff.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTuxYvgtB = await SALESCONTRACT.new({from: accounts[0]});
		const addressRDfQPV = accounts[4]
		const addressCjs2gOE = await SALESCONTRACTuxYvgtB.setToken.call(addressRDfQPV, {from: accounts[0]});
//		await SALESCONTRACTuxYvgtB.clearETH.call({from: accounts[4]});
//		await SALESCONTRACTuxYvgtB.ff.call({from: accounts[0]});
//		await SALESCONTRACTuxYvgtB.ff.call({from: accounts[4]});
//		await SALESCONTRACTuxYvgtB.clearTokens.call({from: accounts[2]});

		await expect(SALESCONTRACTuxYvgtB.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTRiaBR8K = await SALESCONTRACT.new({from: accounts[3]});
		const uintJn5ikPb = BigInt("321")
//		await SALESCONTRACTRiaBR8K.clearTokens.call({from: accounts[3]});
//		await SALESCONTRACTRiaBR8K.clearETH.call({from: accounts[5]});
//		const uintrz2AbNL = await SALESCONTRACTRiaBR8K._setStage.call(uintJn5ikPb, {from: accounts[2]});

		await expect(SALESCONTRACTRiaBR8K.clearTokens.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTEW8mW3M = await SALESCONTRACT.new({from: accounts[3]});
		const addressATaArwx = accounts[4]
		const addresshWWxvnX = accounts[0]
		const addressOGrPb4q = accounts[0]
//		const boolkfnuH7I = await SALESCONTRACTEW8mW3M.tokenSale.call(addressATaArwx, {from: accounts[2]});
//		const booldM6oEOa = await SALESCONTRACTEW8mW3M.tokenSale.call(addresshWWxvnX, {from: accounts[1]});
//		const addressKQokqz0 = await SALESCONTRACTEW8mW3M.setToken.call(addressOGrPb4q, {from: accounts[1]});

		await expect(SALESCONTRACTEW8mW3M.tokenSale.call(addressATaArwx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTRCPh74 = await SALESCONTRACT.new({from: accounts[4]});
		const address9gUYh8 = accounts[1]
//		await SALESCONTRACTRCPh74.clearETH.call({from: accounts[4]});
//		await SALESCONTRACTRCPh74.ff.call({from: accounts[0]});
//		const booluarU0Pq = await SALESCONTRACTRCPh74.tokenSale.call(address9gUYh8, {from: accounts[2]});
//		await SALESCONTRACTRCPh74.clearETH.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTRCPh74.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTzRoXNde = await SALESCONTRACT.new({from: accounts[3]});
		const uintBaUA2Y1 = BigInt("605")
		const addressMoyQDnb = accounts[0]
		const uintmo1MXIw = BigInt("149")
		const addressGr7qdLs = accounts[2]
		const addressDeYc18j = await SALESCONTRACTzRoXNde._setSalesPool.call(addressMoyQDnb, uintBaUA2Y1, {from: accounts[3]});
//		const uinty3MeT0N = await SALESCONTRACTzRoXNde._setStage.call(uintmo1MXIw, {from: accounts[4]});
//		const boolhASDG1R = await SALESCONTRACTzRoXNde.tokenSale.call(addressGr7qdLs, {from: accounts[1]});

		await expect(SALESCONTRACTzRoXNde._setStage.call(uintmo1MXIw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTHy7XsJ = await SALESCONTRACT.new({from: accounts[3]});
		const uintrCDOjN = BigInt("1771")
		const address2gmQPH = "0x0000000000000000000000000000000000000001"
		const addressfjQWVAV = accounts[1]
		const uintk3Wz4Du = await SALESCONTRACTTHy7XsJ._setStage.call(uintrCDOjN, {from: accounts[3]});
		const addressiyFetE = await SALESCONTRACTTHy7XsJ.setToken.call(address2gmQPH, {from: accounts[3]});
//		const boolbBhIKtv = await SALESCONTRACTTHy7XsJ.tokenSale.call(addressfjQWVAV, {from: accounts[3]});

		await expect(SALESCONTRACTTHy7XsJ.tokenSale.call(addressfjQWVAV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTyK4LRcT = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUdlqgEu = BigInt("1346")
		const uintPcHVDyj = await SALESCONTRACTyK4LRcT._setStage.call(uintUdlqgEu, {from: accounts[2]});
		await SALESCONTRACTyK4LRcT.ff.call({from: accounts[4]});
	});
})