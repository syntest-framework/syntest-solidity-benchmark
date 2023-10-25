const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressroBfS4t = accounts[1]
		const uintUgj8vDf = BigInt("630")
		const DatrixoEquityTokenRQosplg = await DatrixoEquityToken.new(addressroBfS4t, uintUgj8vDf, {from: accounts[3]});
		const uintwA4l66U = BigInt("63")
		const addressvQ82Zwp = accounts[4]
		const addressu1E6seq = accounts[3]
		const uintiLKXYm = BigInt("1738")
		const addressPxRW3I = accounts[2]
		const uintWVr8Cal = BigInt("1695")
		const addressEQccSAa = accounts[1]
		const uintHqrj28 = BigInt("1642")
		const addressKRjIFYY = accounts[5]
		const addressUXpIbcc = accounts[3]
//		const boolY5la88S = await DatrixoEquityTokenRQosplg.transferFrom.call(addressu1E6seq, addressvQ82Zwp, uintwA4l66U, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHM5IYfe = await DatrixoEquityTokenRQosplg.transfer.call(addressPxRW3I, uintiLKXYm, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcU8ivc = await DatrixoEquityTokenRQosplg.transfer.call(addressEQccSAa, uintWVr8Cal, {from: accounts[2]});
//		const boolkIIIzrH = await DatrixoEquityTokenRQosplg.transferFrom.call(addressUXpIbcc, addressKRjIFYY, uintHqrj28, {from: accounts[0]});
//		const addressarrayNcMKGHg = await DatrixoEquityTokenRQosplg.getShareholdersArray.call({from: accounts[3]});

		await expect(DatrixoEquityTokenRQosplg.transferFrom.call(addressu1E6seq, addressvQ82Zwp, uintwA4l66U, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressgT3YPGe = accounts[0]
		const uintac43KlB = BigInt("610")
		const DatrixoEquityTokencPqVYb = await DatrixoEquityToken.new(addressgT3YPGe, uintac43KlB, {from: accounts[4]});
		const addresswyPccdw = accounts[2]
		const uintyAYYo0r = BigInt("1419")
		const addressVbRBeTO = accounts[4]
		const uintnaLiLb = BigInt("432")
//		await DatrixoEquityTokencPqVYb.onlyOwner.call({from: accounts[3]});
//		const boolHmdMp6l = await DatrixoEquityTokencPqVYb.removeShareholder.call(addresswyPccdw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkkSkgjl = await DatrixoEquityTokencPqVYb.transfer.call(addressVbRBeTO, uintyAYYo0r, {from: accounts[0]});
//		const uintqITodPM = await DatrixoEquityTokencPqVYb.setStart.call(uintnaLiLb, {from: accounts[0]});

		await expect(DatrixoEquityTokencPqVYb.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressuAkc5mS = "0x0000000000000000000000000000000000000001"
		const uintP7N7ih6 = BigInt("384")
		const DatrixoEquityTokenGFcWfwO = await DatrixoEquityToken.new(addressuAkc5mS, uintP7N7ih6, {from: accounts[3]});
		const uintwgjx7xZ = BigInt("228")
		const addressM9vDWYR = accounts[3]
		const uintjqpvICo = BigInt("1247")
		const addresslsuBjei = accounts[3]
		const uintAbW7Xmi = BigInt("285")
		const addressDPwbI1N = accounts[2]
		const addresslX9h0Z9 = accounts[4]
		const addressarrayNfbTrFF = await DatrixoEquityTokenGFcWfwO.getShareholdersArray.call({from: accounts[4]});
		const addressarrayeTlLFW5 = await DatrixoEquityTokenGFcWfwO.getShareholdersArray.call({from: accounts[0]});
//		const bool3pUaRl = await DatrixoEquityTokenGFcWfwO.transfer.call(addressM9vDWYR, uintwgjx7xZ, {from: accounts[3]});
//		const boolBxi0f15 = await DatrixoEquityTokenGFcWfwO.transfer.call(addresslsuBjei, uintjqpvICo, {from: accounts[0]});
//		const boolxDSHyR = await DatrixoEquityTokenGFcWfwO.transferFrom.call(addresslX9h0Z9, addressDPwbI1N, uintAbW7Xmi, {from: accounts[2]});

		assert.equal(addressarrayNfbTrFF, )
		assert.equal(addressarrayeTlLFW5, )
		await expect(DatrixoEquityTokenGFcWfwO.transfer.call(addressM9vDWYR, uintwgjx7xZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressjI2qNTY = accounts[2]
		const uintzenlGeV = BigInt("150")
		const DatrixoEquityTokenBDy4wO = await DatrixoEquityToken.new(addressjI2qNTY, uintzenlGeV, {from: accounts[2]});
		const uintXI45af5 = BigInt("1789")
		const addressKMRasSu = accounts[2]
		const uintaGIreDA = BigInt("1809")
		const addressRGpNiwC = accounts[0]
//		const boolhR85Au5 = await DatrixoEquityTokenBDy4wO.transfer.call(addressKMRasSu, uintXI45af5, {from: accounts[2]});
//		const addressarrayUEwvzl2 = await DatrixoEquityTokenBDy4wO.getShareholdersArray.call({from: accounts[3]});
//		const addressarraysfEgWzt = await DatrixoEquityTokenBDy4wO.getShareholdersArray.call({from: accounts[0]});
//		const boolyXHblnY = await DatrixoEquityTokenBDy4wO.transfer.call(addressRGpNiwC, uintaGIreDA, {from: accounts[2]});

		await expect(DatrixoEquityTokenBDy4wO.transfer.call(addressKMRasSu, uintXI45af5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressQr6ZHRX = accounts[2]
		const uintHfHalB2 = BigInt("150")
		const DatrixoEquityTokenBDy4wO = await DatrixoEquityToken.new(addressQr6ZHRX, uintHfHalB2, {from: accounts[2]});
		const uintSbppSRv = BigInt("1924")
		const addressIDw7JtK = accounts[3]
		const addressarrayUEwvzl2 = await DatrixoEquityTokenBDy4wO.getShareholdersArray.call({from: accounts[3]});
		const addressarrayBKfoGz4 = await DatrixoEquityTokenBDy4wO.getShareholdersArray.call({from: accounts[0]});
		const booliXO4zj = await DatrixoEquityTokenBDy4wO.transfer.call(addressIDw7JtK, uintSbppSRv, {from: accounts[2]});

		assert.equal(addressarrayBKfoGz4, )
		assert.equal(addressarrayUEwvzl2, )
		assert.equal(booliXO4zj, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addresssfwsGVl = accounts[2]
		const uintKDi6HtG = BigInt("150")
		const DatrixoEquityTokenBDy4wO = await DatrixoEquityToken.new(addresssfwsGVl, uintKDi6HtG, {from: accounts[2]});
		const addressYc4eEqg = accounts[0]
		const addressarrayUEwvzl2 = await DatrixoEquityTokenBDy4wO.getShareholdersArray.call({from: accounts[3]});
//		const boolop4fkhj = await DatrixoEquityTokenBDy4wO.removeShareholder.call(addressYc4eEqg, {from: accounts[2]});
//		const addressarrayPaARVZP = await DatrixoEquityTokenBDy4wO.getShareholdersArray.call({from: accounts[0]});

		assert.equal(addressarrayUEwvzl2, )
		await expect(DatrixoEquityTokenBDy4wO.removeShareholder.call(addressYc4eEqg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressDuLCiZG = accounts[2]
		const uintFSCIl7k = BigInt("150")
		const DatrixoEquityTokenBDy4wO = await DatrixoEquityToken.new(addressDuLCiZG, uintFSCIl7k, {from: accounts[2]});
		const uintn0p0Uh9 = BigInt("1598")
		const addressLR5mdWj = accounts[3]
		const addresscq9wN8x = "0x0000000000000000000000000000000000000001"
		const uintIcKwmGW = BigInt("1924")
		const addressu9JHYiz = accounts[3]
//		const boolwkDzwxM = await DatrixoEquityTokenBDy4wO.transferFrom.call(addresscq9wN8x, addressLR5mdWj, uintn0p0Uh9, {from: accounts[2]});
//		const addressarrayBKfoGz4 = await DatrixoEquityTokenBDy4wO.getShareholdersArray.call({from: accounts[0]});
//		await DatrixoEquityTokenBDy4wO.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokenBDy4wO.afterStartTime.call({from: accounts[2]});
//		const booliXO4zj = await DatrixoEquityTokenBDy4wO.transfer.call(addressu9JHYiz, uintIcKwmGW, {from: accounts[2]});

		await expect(DatrixoEquityTokenBDy4wO.transferFrom.call(addresscq9wN8x, addressLR5mdWj, uintn0p0Uh9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresslstmAce = accounts[0]
		const uintu2llOLp = BigInt("619")
		const DatrixoEquityTokenWw6Sdb7 = await DatrixoEquityToken.new(addresslstmAce, uintu2llOLp, {from: "0x0000000000000000000000000000000000000001"});
		const uintUA4ZzLA = BigInt("191")
		const addressGElrQ4m = accounts[2]
		const uintwXwwmLZ = BigInt("1911")
		const addressAEVtBIb = accounts[4]
		const boolvaJXOYo = await DatrixoEquityTokenWw6Sdb7.transfer.call(addressGElrQ4m, uintUA4ZzLA, {from: accounts[2]});
		await DatrixoEquityTokenWw6Sdb7.afterStartTime.call({from: accounts[3]});
		const boolCrYGdmi = await DatrixoEquityTokenWw6Sdb7.transfer.call(addressAEVtBIb, uintwXwwmLZ, {from: accounts[2]});
		const addressarray9vhTq9 = await DatrixoEquityTokenWw6Sdb7.getShareholdersArray.call({from: accounts[1]});
		const addressarrayffBCrZz = await DatrixoEquityTokenWw6Sdb7.getShareholdersArray.call({from: accounts[3]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPIAdlTh = accounts[2]
		const uintuGZ4Q8L = BigInt("150")
		const DatrixoEquityTokenBDy4wO = await DatrixoEquityToken.new(addressPIAdlTh, uintuGZ4Q8L, {from: accounts[2]});
		const uintRRVf9b2 = BigInt("1980")
		const addressqEJgYIe = accounts[3]
		const addressA4qdfdu = accounts[2]
		const addressVGgg1v2 = accounts[2]
		const addressarrayUEwvzl2 = await DatrixoEquityTokenBDy4wO.getShareholdersArray.call({from: accounts[3]});
		const booljRNYGLX = await DatrixoEquityTokenBDy4wO.transferFrom.call(addressA4qdfdu, addressqEJgYIe, uintRRVf9b2, {from: accounts[2]});
//		const boolHd16loO = await DatrixoEquityTokenBDy4wO.removeShareholder.call(addressVGgg1v2, {from: accounts[4]});

		assert.equal(addressarrayUEwvzl2, )
		assert.equal(booljRNYGLX, true)
		await expect(DatrixoEquityTokenBDy4wO.removeShareholder.call(addressVGgg1v2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressQvYRIF = accounts[2]
		const uintf8F2ymP = BigInt("150")
		const DatrixoEquityTokenBDy4wO = await DatrixoEquityToken.new(addressQvYRIF, uintf8F2ymP, {from: accounts[2]});
		const uintLuv0vPb = BigInt("1270")
		const addressUO7NOJE = accounts[3]
//		const uintLheWkGM = await DatrixoEquityTokenBDy4wO.setStart.call(uintLuv0vPb, {from: accounts[2]});
//		const boolop4fkhj = await DatrixoEquityTokenBDy4wO.removeShareholder.call(addressUO7NOJE, {from: accounts[2]});

		await expect(DatrixoEquityTokenBDy4wO.setStart.call(uintLuv0vPb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})