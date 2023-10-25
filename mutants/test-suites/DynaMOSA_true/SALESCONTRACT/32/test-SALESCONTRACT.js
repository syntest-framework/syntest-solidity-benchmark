const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTm71G7VE = await SALESCONTRACT.new({from: accounts[3]});
		const addresszmAivWU = accounts[4]
		const uintDMMzi5 = BigInt("425")
//		const booljaL3dq = await SALESCONTRACTm71G7VE.tokenSale.call(addresszmAivWU, {from: accounts[4]});
//		await SALESCONTRACTm71G7VE.clearTokens.call({from: accounts[4]});
//		const uintojzx93h = await SALESCONTRACTm71G7VE._setStage.call(uintDMMzi5, {from: accounts[4]});
//		await SALESCONTRACTm71G7VE.ff.call({from: accounts[1]});

		await expect(SALESCONTRACTm71G7VE.tokenSale.call(addresszmAivWU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTlcPncmo = await SALESCONTRACT.new({from: accounts[4]});
		const addressi4aXI8G = accounts[2]
		const addressP889dGu = accounts[1]
		const addressJe9YKcq = accounts[0]
//		await SALESCONTRACTlcPncmo.clearTokens.call({from: accounts[1]});
//		const addressA42J3tL = await SALESCONTRACTlcPncmo.setToken.call(addressi4aXI8G, {from: accounts[4]});
//		const addressrD6oDlq = await SALESCONTRACTlcPncmo.setToken.call(addressP889dGu, {from: accounts[3]});
//		const boolDM4FKVg = await SALESCONTRACTlcPncmo.tokenSale.call(addressJe9YKcq, {from: accounts[2]});

		await expect(SALESCONTRACTlcPncmo.clearTokens.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTeqgatP2 = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addresslmt8vMJ = accounts[4]
		const uintCDQsJFF = BigInt("841")
		const addressPpAn9Wx = await SALESCONTRACTeqgatP2.setToken.call(addresslmt8vMJ, {from: accounts[3]});
		await SALESCONTRACTeqgatP2.ff.call({from: accounts[1]});
		await SALESCONTRACTeqgatP2.ff.call({from: accounts[0]});
		await SALESCONTRACTeqgatP2.clearTokens.call({from: accounts[2]});
		const uinty3x69A = await SALESCONTRACTeqgatP2._setStage.call(uintCDQsJFF, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBTWDmLh = await SALESCONTRACT.new({from: accounts[3]});
		const uintWN0ECIH = BigInt("462")
//		await SALESCONTRACTBTWDmLh.clearETH.call({from: accounts[3]});
//		await SALESCONTRACTBTWDmLh.clearTokens.call({from: accounts[3]});
//		const uintSrO25yJ = await SALESCONTRACTBTWDmLh._setStage.call(uintWN0ECIH, {from: accounts[0]});

		await expect(SALESCONTRACTBTWDmLh.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTN9PVrkl = await SALESCONTRACT.new({from: accounts[0]});
//		await SALESCONTRACTN9PVrkl.ff.call({from: accounts[4]});
//		await SALESCONTRACTN9PVrkl.clearTokens.call({from: accounts[3]});
//		await SALESCONTRACTN9PVrkl.ff.call({from: "0x0000000000000000000000000000000000000001"});
//		await SALESCONTRACTN9PVrkl.clearETH.call({from: accounts[3]});
//		await SALESCONTRACTN9PVrkl.clearETH.call({from: accounts[3]});
//		await SALESCONTRACTN9PVrkl.ff.call({from: accounts[2]});

		await expect(SALESCONTRACTN9PVrkl.ff.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpD4hoz1 = await SALESCONTRACT.new({from: accounts[0]});
		const uintXO6p0ib = BigInt("424")
		const uintTuyFa7m = await SALESCONTRACTpD4hoz1._setStage.call(uintXO6p0ib, {from: accounts[0]});
//		await SALESCONTRACTpD4hoz1.clearTokens.call({from: accounts[2]});

		await expect(SALESCONTRACTpD4hoz1.clearTokens.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTm71G7VE = await SALESCONTRACT.new({from: accounts[3]});
		const address57JvCL = accounts[2]
		const addressOG8TAMw = accounts[4]
		const uintqmJWtdG = BigInt("425")
		const addressRfUCHWC = await SALESCONTRACTm71G7VE.setToken.call(address57JvCL, {from: accounts[3]});
//		const booljaL3dq = await SALESCONTRACTm71G7VE.tokenSale.call(addressOG8TAMw, {from: accounts[4]});
//		await SALESCONTRACTm71G7VE.clearTokens.call({from: accounts[4]});
//		const uintojzx93h = await SALESCONTRACTm71G7VE._setStage.call(uintqmJWtdG, {from: accounts[4]});
//		await SALESCONTRACTm71G7VE.ff.call({from: accounts[1]});

		await expect(SALESCONTRACTm71G7VE.tokenSale.call(addressOG8TAMw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpD4hoz1 = await SALESCONTRACT.new({from: accounts[0]});
		const uintD5gGpjt = BigInt("374")
		const addressqYU9xnQ = accounts[2]
		const addressMQsuJZX = await SALESCONTRACTpD4hoz1._setSalesPool.call(addressqYU9xnQ, uintD5gGpjt, {from: accounts[0]});
//		await SALESCONTRACTpD4hoz1.clearTokens.call({from: accounts[4]});
//		await SALESCONTRACTpD4hoz1.clearTokens.call({from: accounts[2]});

		await expect(SALESCONTRACTpD4hoz1.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})