const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEL8NtZzw = await REXUNIFINANCE.new({from: accounts[2]});
		const uintmhMhSOH = BigInt("1598")
		const addressj65s5V = accounts[2]
		const addressktZy1Vp = "0x0000000000000000000000000000000000000001"
		const uintauGdlkJ = BigInt("1871")
		const addressYlqZvs1 = accounts[2]
		const addressAg0lJJt = accounts[2]
		const booliaPvQPO = await REXUNIFINANCEL8NtZzw.increaseApproval.call(addressj65s5V, uintmhMhSOH, {from: accounts[2]});
		const uint2567Yg0p3 = await REXUNIFINANCEL8NtZzw.transferableTokens.call(addressktZy1Vp, {from: accounts[3]});
		const boolfiqnwwP = await REXUNIFINANCEL8NtZzw.transferFrom.call(addressAg0lJJt, addressYlqZvs1, uintauGdlkJ, {from: accounts[0]});

		await expect(REXUNIFINANCEL8NtZzw.increaseApproval.call(addressj65s5V, uintmhMhSOH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEEVZnG3P = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgYqAeH = accounts[2]
		const uintsWxWTGd = BigInt("517")
		const addresse3Wco1g = accounts[4]
		const addressUinU351 = accounts[2]
		const uintI3odMeo = BigInt("825")
		const addresslARW9Bn = accounts[2]
		const uint25672zYHM = await REXUNIFINANCEEVZnG3P.transferableTokens.call(addressgYqAeH, {from: accounts[0]});
		const boolJScbA5c = await REXUNIFINANCEEVZnG3P.transferFrom.call(addressUinU351, addresse3Wco1g, uintsWxWTGd, {from: accounts[5]});
		const boolw1OKTq8 = await REXUNIFINANCEEVZnG3P.decreaseApproval.call(addresslARW9Bn, uintI3odMeo, {from: accounts[1]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEEB9iB8 = await REXUNIFINANCE.new({from: accounts[1]});
		const uintQeQDEW9 = BigInt("1581")
		const addressW23D2IO = accounts[1]
		const addressX70u54N = "0x0000000000000000000000000000000000000001"
		const uintFfKnLF = BigInt("666")
		const addressusXqUcE = accounts[2]
		const addressGw5p0o = accounts[4]
		const uintXSILu0n = BigInt("1585")
		const addressRCycPZ7 = accounts[1]
		const addressaSdsCTs = accounts[1]
		const uintasLdZ28 = BigInt("1145")
		const addressrbd1hs = accounts[4]
		const boolVPhwBrb = await REXUNIFINANCEEB9iB8.transferFrom.call(addressX70u54N, addressW23D2IO, uintQeQDEW9, {from: accounts[3]});
		const boolEqHh80J = await REXUNIFINANCEEB9iB8.transferFrom.call(addressGw5p0o, addressusXqUcE, uintFfKnLF, {from: accounts[2]});
		const boolA75E73J = await REXUNIFINANCEEB9iB8.approve.call(addressRCycPZ7, uintXSILu0n, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jkugcuL = await REXUNIFINANCEEB9iB8.balanceOf.call(addressaSdsCTs, {from: "0x0000000000000000000000000000000000000001"});
		const boolRVFN7rv = await REXUNIFINANCEEB9iB8.decreaseApproval.call(addressrbd1hs, uintasLdZ28, {from: accounts[3]});

		await expect(REXUNIFINANCEEB9iB8.transferFrom.call(addressX70u54N, addressW23D2IO, uintQeQDEW9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEs0KZnT = await REXUNIFINANCE.new({from: accounts[3]});
		const addressHxIvxOI = "0x0000000000000000000000000000000000000001"
		const uinto3QpiWj = BigInt("558")
		const address5cNEEA = accounts[2]
		const uintUzRLkLd = BigInt("432")
		const addressHNcIe2 = accounts[1]
		const uintfeBJbt3 = BigInt("1938")
		const addressOgbhMq8 = accounts[3]
		const uint256GNeEYWg = await REXUNIFINANCEs0KZnT.transferableTokens.call(addressHxIvxOI, {from: accounts[0]});
		const boolC0SPoa = await REXUNIFINANCEs0KZnT.decreaseApproval.call(address5cNEEA, uinto3QpiWj, {from: accounts[4]});
		const boolCa8KTfo = await REXUNIFINANCEs0KZnT.approve.call(addressHNcIe2, uintUzRLkLd, {from: accounts[4]});
		const booli6vOPlM = await REXUNIFINANCEs0KZnT.decreaseApproval.call(addressOgbhMq8, uintfeBJbt3, {from: accounts[4]});

		assert.equal(boolC0SPoa, true)
		assert.equal(boolCa8KTfo, true)
		assert.equal(booli6vOPlM, true)
		assert.equal(uint256GNeEYWg, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEW3K66sg = await REXUNIFINANCE.new({from: accounts[5]});
		const uint5E344W = BigInt("26")
		const addressrKPzdPh = accounts[0]
		const uintA6hIAy = BigInt("1515")
		const addressTggZPrl = accounts[1]
		const uintEjmluhI = BigInt("352")
		const addressyTJlqqQ = accounts[2]
		const addresssbjc54S = accounts[4]
		const boolyVmBE1O = await REXUNIFINANCEW3K66sg.transfer.call(addressrKPzdPh, uint5E344W, {from: accounts[1]});
		const boolLlM7uy1 = await REXUNIFINANCEW3K66sg.approve.call(addressTggZPrl, uintA6hIAy, {from: accounts[2]});
		const boolCUEXq6P = await REXUNIFINANCEW3K66sg.transferFrom.call(addresssbjc54S, addressyTJlqqQ, uintEjmluhI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(REXUNIFINANCEW3K66sg.transfer.call(addressrKPzdPh, uint5E344W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEzBWoGsn = await REXUNIFINANCE.new({from: accounts[0]});
		const address9rSX1L = accounts[4]
		const uintrUCJj1T = BigInt("97")
		const addressoIXOej1 = "0x0000000000000000000000000000000000000001"
		const addressdu3cRtg = accounts[4]
		const addresstaAovq = accounts[5]
		const addresshzqtquU = await REXUNIFINANCEzBWoGsn.transferOwnership.call(address9rSX1L, {from: accounts[4]});
		const boolZlSBj5F = await REXUNIFINANCEzBWoGsn.transfer.call(addressoIXOej1, uintrUCJj1T, {from: accounts[3]});
		const uint256w1MFKc1 = await REXUNIFINANCEzBWoGsn.balanceOf.call(addressdu3cRtg, {from: accounts[0]});
		const uint256pSA52BG = await REXUNIFINANCEzBWoGsn.transferableTokens.call(addresstaAovq, {from: accounts[2]});

		await expect(REXUNIFINANCEzBWoGsn.transferOwnership.call(address9rSX1L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEL8NtZzw = await REXUNIFINANCE.new({from: accounts[2]});
		const uintxkTdKkO = BigInt("1598")
		const addressUQPrIXQ = accounts[3]
		const uintpsixva1 = BigInt("710")
		const addressne88Aq3 = accounts[2]
		const addressnUsgvwH = accounts[4]
		const addresseVBQtcl = accounts[4]
		const uintsRjTlEr = BigInt("1871")
		const addressoLDV51f = accounts[2]
		const addressuczpIZs = accounts[2]
		const booliaPvQPO = await REXUNIFINANCEL8NtZzw.increaseApproval.call(addressUQPrIXQ, uintxkTdKkO, {from: accounts[2]});
		const boolGFBf9py = await REXUNIFINANCEL8NtZzw.approve.call(addressne88Aq3, uintpsixva1, {from: accounts[5]});
		const uint256mRjFkGz = await REXUNIFINANCEL8NtZzw.allowance.call(addresseVBQtcl, addressnUsgvwH, {from: "0x0000000000000000000000000000000000000001"});
		const boolfiqnwwP = await REXUNIFINANCEL8NtZzw.transferFrom.call(addressuczpIZs, addressoLDV51f, uintsRjTlEr, {from: accounts[0]});

		assert.equal(boolGFBf9py, true)
		assert.equal(booliaPvQPO, true)
		assert.equal(uint256mRjFkGz, BigInt("0"))
		await expect(REXUNIFINANCEL8NtZzw.transferFrom.call(addressuczpIZs, addressoLDV51f, uintsRjTlEr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})