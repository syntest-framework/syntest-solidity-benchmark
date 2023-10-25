const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBpwTXq = await SALESCONTRACT.new({from: accounts[4]});
		const uintWAsd2rh = BigInt("57")
		const addressRg5DNW = accounts[0]
		const addressjYvKQo3 = accounts[2]
		const addressIti9o5C = accounts[2]
//		const addresskY28ICE = await SALESCONTRACTBpwTXq._setSalesPool.call(addressRg5DNW, uintWAsd2rh, {from: accounts[2]});
//		const boolQpqDHhE = await SALESCONTRACTBpwTXq.tokenSale.call(addressjYvKQo3, {from: accounts[1]});
//		await SALESCONTRACTBpwTXq.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressQfnw6br = await SALESCONTRACTBpwTXq.setToken.call(addressIti9o5C, {from: accounts[2]});

		await expect(SALESCONTRACTBpwTXq._setSalesPool.call(addressRg5DNW, uintWAsd2rh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTwdDs9t = await SALESCONTRACT.new({from: accounts[0]});
		const addressc1qh0V = accounts[1]
		const addressDSx3Esp = accounts[1]
//		const boolSSEFjxh = await SALESCONTRACTTwdDs9t.tokenSale.call(addressc1qh0V, {from: accounts[0]});
//		const boolqRcW7cP = await SALESCONTRACTTwdDs9t.tokenSale.call(addressDSx3Esp, {from: accounts[0]});
//		await SALESCONTRACTTwdDs9t.clearTokens.call({from: accounts[2]});

		await expect(SALESCONTRACTTwdDs9t.tokenSale.call(addressc1qh0V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTC1ppG7L = await SALESCONTRACT.new({from: accounts[4]});
		const uint64fhIW = BigInt("1077")
		const addresssIIQoxV = accounts[2]
		const addressh5QHBgZ = accounts[2]
		const uintFETpY15 = BigInt("1543")
		const addressRNcttT = accounts[0]
		const addressPVdiI5j = accounts[5]
		const addressGmEZc4E = await SALESCONTRACTC1ppG7L._setSalesPool.call(addresssIIQoxV, uint64fhIW, {from: accounts[4]});
//		const boolm2ipRGu = await SALESCONTRACTC1ppG7L.tokenSale.call(addressh5QHBgZ, {from: accounts[5]});
//		const addressW0WAW6J = await SALESCONTRACTC1ppG7L._setSalesPool.call(addressRNcttT, uintFETpY15, {from: accounts[3]});
//		const addressivnDPH = await SALESCONTRACTC1ppG7L.setToken.call(addressPVdiI5j, {from: accounts[3]});

		await expect(SALESCONTRACTC1ppG7L.tokenSale.call(addressh5QHBgZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTsQmzYMl = await SALESCONTRACT.new({from: accounts[4]});
		const addressLD6mPCF = accounts[1]
		const addressxTmdgPm = accounts[0]
//		await SALESCONTRACTsQmzYMl.ff.call({from: accounts[4]});
//		const boolWL605RI = await SALESCONTRACTsQmzYMl.tokenSale.call(addressLD6mPCF, {from: accounts[0]});
//		const addressdWcOmrx = await SALESCONTRACTsQmzYMl.setToken.call(addressxTmdgPm, {from: accounts[1]});
//		await SALESCONTRACTsQmzYMl.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
//		await SALESCONTRACTsQmzYMl.ff.call({from: accounts[3]});

		await expect(SALESCONTRACTsQmzYMl.ff.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTUawxVr5 = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshGiDEFj = accounts[4]
		await SALESCONTRACTUawxVr5.clearTokens.call({from: accounts[0]});
		await SALESCONTRACTUawxVr5.clearTokens.call({from: accounts[3]});
		await SALESCONTRACTUawxVr5.ff.call({from: accounts[4]});
		const boolFLzEodX = await SALESCONTRACTUawxVr5.tokenSale.call(addresshGiDEFj, {from: accounts[5]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTOA3xq3E = await SALESCONTRACT.new({from: accounts[2]});
		const addresslrtXLbH = accounts[4]
		const uintw6oKOFQ = BigInt("1669")
		const addressmLE98fh = accounts[3]
		const uintCqzjGlY = BigInt("1411")
		const addressr3OfQiA = accounts[4]
		const uintHDmstKf = BigInt("2042")
		const addressmJ6G2lO = accounts[3]
		const addressyvq0D26 = await SALESCONTRACTOA3xq3E.setToken.call(addresslrtXLbH, {from: accounts[2]});
//		const uintD82av1Q = await SALESCONTRACTOA3xq3E._setStage.call(uintw6oKOFQ, {from: accounts[1]});
//		const addressQH671T1 = await SALESCONTRACTOA3xq3E.setToken.call(addressmLE98fh, {from: accounts[3]});
//		const addressdr1Kb0M = await SALESCONTRACTOA3xq3E._setSalesPool.call(addressr3OfQiA, uintCqzjGlY, {from: accounts[3]});
//		const addresswTBwopB = await SALESCONTRACTOA3xq3E._setSalesPool.call(addressmJ6G2lO, uintHDmstKf, {from: accounts[1]});

		await expect(SALESCONTRACTOA3xq3E._setStage.call(uintw6oKOFQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTwdDs9t = await SALESCONTRACT.new({from: accounts[0]});
		const addressAPBcraz = accounts[0]
		const addressAhIXlR = accounts[1]
//		await SALESCONTRACTTwdDs9t.clearETH.call({from: accounts[0]});
//		const addresswfs3qgG = await SALESCONTRACTTwdDs9t.setToken.call(addressAPBcraz, {from: accounts[0]});
//		const boolSSEFjxh = await SALESCONTRACTTwdDs9t.tokenSale.call(addressAhIXlR, {from: accounts[0]});
//		await SALESCONTRACTTwdDs9t.clearTokens.call({from: accounts[2]});

		await expect(SALESCONTRACTTwdDs9t.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTwdDs9t = await SALESCONTRACT.new({from: accounts[0]});
		const uintxXGhslU = BigInt("1600")
		const addressrTpwkXo = accounts[5]
		const addressYGkCSkD = accounts[2]
		const uintGvY2E2 = await SALESCONTRACTTwdDs9t._setStage.call(uintxXGhslU, {from: accounts[0]});
//		const boolSSEFjxh = await SALESCONTRACTTwdDs9t.tokenSale.call(addressrTpwkXo, {from: accounts[0]});
//		const boolNzNMSqC = await SALESCONTRACTTwdDs9t.tokenSale.call(addressYGkCSkD, {from: accounts[2]});

		await expect(SALESCONTRACTTwdDs9t.tokenSale.call(addressrTpwkXo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTfwyorKA = await SALESCONTRACT.new({from: accounts[5]});
		const addressaw3K3Vm = "0x0000000000000000000000000000000000000001"
		const addressZHha5P0 = accounts[4]
//		await SALESCONTRACTfwyorKA.clearTokens.call({from: accounts[5]});
//		const addressTZeg2kD = await SALESCONTRACTfwyorKA.setToken.call(addressaw3K3Vm, {from: accounts[3]});
//		const address8P5d8A = await SALESCONTRACTfwyorKA.setToken.call(addressZHha5P0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTfwyorKA.clearTokens.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})