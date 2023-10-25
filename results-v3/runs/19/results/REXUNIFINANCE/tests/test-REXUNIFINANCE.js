const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEBpwTXq = await REXUNIFINANCE.new({from: accounts[4]});
		const uintkY28ICE = BigInt("1194")
		const addresssd2rhB = accounts[2]
		const addressfqDHhEV = accounts[2]
		const addressLyJ0A1C = accounts[1]
		const addressIti9o5C = accounts[2]
		const boolvF76JSe = await REXUNIFINANCEBpwTXq.decreaseApproval.call(addresssd2rhB, uintkY28ICE, {from: accounts[4]});
		const addressktOGxot = await REXUNIFINANCEBpwTXq.transferOwnership.call(addressfqDHhEV, {from: accounts[0]});
		const addressove8Pgo = await REXUNIFINANCEBpwTXq.transferOwnership.call(addressLyJ0A1C, {from: accounts[3]});
		const uint256Qfnw6br = await REXUNIFINANCEBpwTXq.balanceOf.call(addressIti9o5C, {from: accounts[2]});

		assert.equal(boolvF76JSe, true)
		await expect(REXUNIFINANCEBpwTXq.transferOwnership.call(addressfqDHhEV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCErG2spec = await REXUNIFINANCE.new({from: accounts[3]});
		const addressaE2ONz = accounts[4]
		const uintA2rhVD = BigInt("1423")
		const addressRFkZbeB = accounts[0]
		const addresseYsMl9P = accounts[2]
		const uintjDEESn = BigInt("820")
		const addressEHDKUPP = accounts[1]
		const addressVnSSEJF = accounts[0]
		const uint256ZxKWC6L = await REXUNIFINANCErG2spec.balanceOf.call(addressaE2ONz, {from: accounts[3]});
		const boolmcoZPxo = await REXUNIFINANCErG2spec.transferFrom.call(addresseYsMl9P, addressRFkZbeB, uintA2rhVD, {from: accounts[4]});
		const boolGmis8WP = await REXUNIFINANCErG2spec.increaseApproval.call(addressEHDKUPP, uintjDEESn, {from: accounts[4]});
		const uint256pTft7G = await REXUNIFINANCErG2spec.transferableTokens.call(addressVnSSEJF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ZxKWC6L, BigInt("0"))
		await expect(REXUNIFINANCErG2spec.transferFrom.call(addresseYsMl9P, addressRFkZbeB, uintA2rhVD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEaIeyY0T = await REXUNIFINANCE.new({from: accounts[1]});
		const uintpl7Y9q = BigInt("638")
		const addressq9S9KMC = accounts[3]
		const uintRU69z8 = BigInt("1819")
		const addressxwXxInH = accounts[3]
		const uintI3ajo1p = BigInt("444")
		const addressFV1juAa = accounts[2]
		const addressR60dlzA = accounts[4]
		const addressyfxwQS = accounts[0]
		const uintV4biPzO = BigInt("1264")
		const addressHcW7cPI = accounts[4]
		const boolqduUDMM = await REXUNIFINANCEaIeyY0T.increaseApproval.call(addressq9S9KMC, uintpl7Y9q, {from: accounts[2]});
		const boolEqGl9m2 = await REXUNIFINANCEaIeyY0T.increaseApproval.call(addressxwXxInH, uintRU69z8, {from: accounts[0]});
		const booldBqlz0N = await REXUNIFINANCEaIeyY0T.transferFrom.call(addressR60dlzA, addressFV1juAa, uintI3ajo1p, {from: accounts[2]});
		const uint256kQx97lP = await REXUNIFINANCEaIeyY0T.balanceOf.call(addressyfxwQS, {from: accounts[4]});
		const boolHAc1qh0 = await REXUNIFINANCEaIeyY0T.transfer.call(addressHcW7cPI, uintV4biPzO, {from: accounts[1]});

		assert.equal(boolEqGl9m2, true)
		assert.equal(boolqduUDMM, true)
		await expect(REXUNIFINANCEaIeyY0T.transferFrom.call(addressR60dlzA, addressFV1juAa, uintI3ajo1p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEpdrtiX8 = await REXUNIFINANCE.new({from: accounts[1]});
		const uintcZo78BY = BigInt("936")
		const addressGfA7e2 = accounts[5]
		const uintVhIWgQm = BigInt("138")
		const addressGoxVJ64 = accounts[0]
		const uintGHBgZw2 = BigInt("1150")
		const addressXTFrir5 = accounts[5]
		const uintDcttTPE = BigInt("642")
		const addresssd9IIFR = "0x0000000000000000000000000000000000000001"
		const addressPHk3r0 = accounts[3]
		const bool5fhRQR = await REXUNIFINANCEpdrtiX8.increaseApproval.call(addressGfA7e2, uintcZo78BY, {from: accounts[3]});
		const boolPc4E0iD = await REXUNIFINANCEpdrtiX8.approve.call(addressGoxVJ64, uintVhIWgQm, {from: accounts[2]});
		const boolfRGu7jA = await REXUNIFINANCEpdrtiX8.approve.call(addressXTFrir5, uintGHBgZw2, {from: "0x0000000000000000000000000000000000000001"});
		const boolfY15ug0 = await REXUNIFINANCEpdrtiX8.transferFrom.call(addressPHk3r0, addresssd9IIFR, uintDcttTPE, {from: accounts[1]});

		assert.equal(bool5fhRQR, true)
		assert.equal(boolPc4E0iD, true)
		assert.equal(boolfRGu7jA, true)
		await expect(REXUNIFINANCEpdrtiX8.transferFrom.call(addressPHk3r0, addresssd9IIFR, uintDcttTPE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEiqtUY1a = await REXUNIFINANCE.new({from: accounts[3]});
		const uintxfsC8j4 = BigInt("493")
		const addressseHsneD = accounts[0]
		const uintMTrPvtS = BigInt("2013")
		const addressG2Kkxwa = accounts[3]
		const addresszxJAJX = accounts[5]
		const boolkaEOMr = await REXUNIFINANCEiqtUY1a.transfer.call(addressseHsneD, uintxfsC8j4, {from: accounts[3]});
		const boolNMd8Ib5 = await REXUNIFINANCEiqtUY1a.decreaseApproval.call(addressG2Kkxwa, uintMTrPvtS, {from: accounts[0]});
		const uint256swwtX3M = await REXUNIFINANCEiqtUY1a.balanceOf.call(addresszxJAJX, {from: accounts[4]});

		await expect(REXUNIFINANCEiqtUY1a.transfer.call(addressseHsneD, uintxfsC8j4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEACG1d5z = await REXUNIFINANCE.new({from: accounts[4]});
		const addressdfCHEW5 = accounts[0]
		const addressXEXcG9l = accounts[0]
		const uintapvFSBK = BigInt("88")
		const addressf7e5S6S = "0x0000000000000000000000000000000000000001"
		const addressGFqgObG = accounts[2]
		const uintiOKyok = BigInt("934")
		const addresspSnLdhi = accounts[2]
		const uint42zjS2 = BigInt("1468")
		const addressBhfzp0b = accounts[1]
		const uintppUSzYU = BigInt("991")
		const addressVWr1Ton = accounts[2]
		const addressz7F42jT = accounts[3]
		const uint256nEDd1vS = await REXUNIFINANCEACG1d5z.allowance.call(addressXEXcG9l, addressdfCHEW5, {from: accounts[5]});
		const boolX4BHmsV = await REXUNIFINANCEACG1d5z.transferFrom.call(addressGFqgObG, addressf7e5S6S, uintapvFSBK, {from: accounts[4]});
		const boolLe7HBvu = await REXUNIFINANCEACG1d5z.approve.call(addresspSnLdhi, uintiOKyok, {from: accounts[0]});
		const boolp5EIq9 = await REXUNIFINANCEACG1d5z.transfer.call(addressBhfzp0b, uint42zjS2, {from: accounts[3]});
		const booltgAe3u = await REXUNIFINANCEACG1d5z.decreaseApproval.call(addressVWr1Ton, uintppUSzYU, {from: accounts[2]});
		const uint256WG7qMoW = await REXUNIFINANCEACG1d5z.transferableTokens.call(addressz7F42jT, {from: accounts[4]});

		assert.equal(uint256nEDd1vS, BigInt("0"))
		await expect(REXUNIFINANCEACG1d5z.transferFrom.call(addressGFqgObG, addressf7e5S6S, uintapvFSBK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEjr4ls1q = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYOvIBRT = BigInt("1609")
		const addressW6EpUQ = "0x0000000000000000000000000000000000000001"
		const addressjlPpe23 = accounts[4]
		const addressiRkzP1y = accounts[0]
		const addressL8o8rhS = "0x0000000000000000000000000000000000000001"
		const uintEXXU1UF = BigInt("511")
		const addressfrcHD3 = "0x0000000000000000000000000000000000000001"
		const addressbgFKQnX = accounts[5]
		const booldhpGPTo = await REXUNIFINANCEjr4ls1q.decreaseApproval.call(addressW6EpUQ, uintYOvIBRT, {from: accounts[0]});
		const uint256bcnEkON = await REXUNIFINANCEjr4ls1q.allowance.call(addressiRkzP1y, addressjlPpe23, {from: accounts[2]});
		const addresshAw1DX = await REXUNIFINANCEjr4ls1q.transferOwnership.call(addressL8o8rhS, {from: accounts[3]});
		const booliaz5CMS = await REXUNIFINANCEjr4ls1q.decreaseApproval.call(addressfrcHD3, uintEXXU1UF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OJ0uOhm = await REXUNIFINANCEjr4ls1q.transferableTokens.call(addressbgFKQnX, {from: accounts[5]});
	});
})