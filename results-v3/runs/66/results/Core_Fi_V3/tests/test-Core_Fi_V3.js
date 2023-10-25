const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Hy8hfm3 = await Core_Fi_V3.new({from: accounts[0]});
		const uintxsP4oWF = BigInt("1164")
		const addresseODciEH = accounts[3]
		const uintvcyL5XE = BigInt("1313")
		const addresswJ6QMq5 = accounts[2]
		const addressDlqFNA = accounts[2]
		const uintuGxlDrn = BigInt("142")
		const addressDTFB0wu = "0x0000000000000000000000000000000000000001"
		const boolBYuqm9V = await Core_Fi_V3Hy8hfm3.approve.call(addresseODciEH, uintxsP4oWF, {from: accounts[3]});
		const boolDR0fAkL = await Core_Fi_V3Hy8hfm3.transfer.call(addresswJ6QMq5, uintvcyL5XE, {from: accounts[0]});
		const uint256IAjG5UY = await Core_Fi_V3Hy8hfm3.balanceOf.call(addressDlqFNA, {from: accounts[4]});
		const boolD1h3a7x = await Core_Fi_V3Hy8hfm3.transfer.call(addressDTFB0wu, uintuGxlDrn, {from: accounts[3]});

		assert.equal(boolBYuqm9V, true)
		assert.equal(boolD1h3a7x, false)
		assert.equal(boolDR0fAkL, true)
		assert.equal(uint256IAjG5UY, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3sqx24BU = await Core_Fi_V3.new({from: accounts[2]});
		const address3CmAQk = accounts[5]
		const addressYp6zEGc = accounts[4]
		const addressdI7wqF0 = accounts[1]
		const addressCsxpSDv = accounts[3]
		const addressUKA844I = accounts[2]
		const addressTydoin = accounts[4]
		const addressfAK69H = accounts[4]
		const uintxyiGeVh = await Core_Fi_V3sqx24BU.allowance.call(addressYp6zEGc, address3CmAQk, {from: accounts[0]});
		const uint256TJ9zLPu = await Core_Fi_V3sqx24BU.balanceOf.call(addressdI7wqF0, {from: accounts[5]});
		const uintKTwQ4U = await Core_Fi_V3sqx24BU.allowance.call(addressUKA844I, addressCsxpSDv, {from: accounts[0]});
		const uintOAP488 = await Core_Fi_V3sqx24BU.allowance.call(addressfAK69H, addressTydoin, {from: accounts[5]});

		assert.equal(uint256TJ9zLPu, BigInt("0"))
		assert.equal(uintKTwQ4U, BigInt("0"))
		assert.equal(uintOAP488, BigInt("0"))
		assert.equal(uintxyiGeVh, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3SBUFMaN = await Core_Fi_V3.new({from: accounts[4]});
		const addressIBKrA8I = accounts[3]
		const addressFwrpC1i = accounts[1]
		const uintLYK5jDB = BigInt("1199")
		const addressijHgi4 = accounts[3]
		const addressLdH6MAC = accounts[3]
		const addressO36KT6Q = accounts[0]
		const addressi82Wg5G = accounts[1]
		const uintGTDtd8X = BigInt("1251")
		const addressR0plFyp = accounts[3]
		const addresscpQ61WX = accounts[0]
		const uintQhrMPSh = BigInt("958")
		const addresshKV5jSw = accounts[4]
		const addressRuxrQ5X = accounts[0]
		const uintexSgnW0 = await Core_Fi_V3SBUFMaN.allowance.call(addressFwrpC1i, addressIBKrA8I, {from: accounts[2]});
		const boolAfcxLSy = await Core_Fi_V3SBUFMaN.transferFrom.call(addressLdH6MAC, addressijHgi4, uintLYK5jDB, {from: accounts[2]});
		const uintZO8oWPU = await Core_Fi_V3SBUFMaN.allowance.call(addressi82Wg5G, addressO36KT6Q, {from: accounts[2]});
		const boolrPvCtKn = await Core_Fi_V3SBUFMaN.transferFrom.call(addresscpQ61WX, addressR0plFyp, uintGTDtd8X, {from: accounts[4]});
		const boolsVDpl9 = await Core_Fi_V3SBUFMaN.transferFrom.call(addressRuxrQ5X, addresshKV5jSw, uintQhrMPSh, {from: accounts[4]});

		assert.equal(boolAfcxLSy, false)
		assert.equal(boolrPvCtKn, false)
		assert.equal(boolsVDpl9, false)
		assert.equal(uintZO8oWPU, BigInt("0"))
		assert.equal(uintexSgnW0, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3PNBFMO = await Core_Fi_V3.new({from: accounts[5]});
		const addresswBvIvQK = accounts[4]
		const uintveQt3h4 = BigInt("569")
		const addresscrXPItt = accounts[0]
		const uintJYxhECA = BigInt("1415")
		const addressjivN368 = accounts[0]
		const addressN0Zs9cA = accounts[3]
		const uinthBkicsJ = BigInt("291")
		const addressOBlJIJW = accounts[0]
		const addressnhclTjm = accounts[5]
		const uint256NCR0d6M = await Core_Fi_V3PNBFMO.balanceOf.call(addresswBvIvQK, {from: accounts[0]});
		const uint256qVSAY07 = await Core_Fi_V3PNBFMO.totalSupply.call({from: accounts[0]});
		const boolYat7Xi2 = await Core_Fi_V3PNBFMO.transfer.call(addresscrXPItt, uintveQt3h4, {from: accounts[3]});
		const uint256iez3API = await Core_Fi_V3PNBFMO.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolD13Thuw = await Core_Fi_V3PNBFMO.transferFrom.call(addressN0Zs9cA, addressjivN368, uintJYxhECA, {from: "0x0000000000000000000000000000000000000001"});
		const boolPIznjZs = await Core_Fi_V3PNBFMO.transferFrom.call(addressnhclTjm, addressOBlJIJW, uinthBkicsJ, {from: accounts[4]});

		assert.equal(boolD13Thuw, false)
		assert.equal(boolPIznjZs, false)
		assert.equal(boolYat7Xi2, false)
		assert.equal(uint256NCR0d6M, BigInt("0"))
		assert.equal(uint256iez3API, BigInt("84000000000000000000000"))
		assert.equal(uint256qVSAY07, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3EQEuQg1 = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFdVBZdd = BigInt("451")
		const addressyRn7rnO = accounts[2]
		const uintE3j81rR = BigInt("920")
		const addressGWGbJmQ = accounts[3]
		const uintagvwsui = BigInt("1646")
		const addressRVYb18d = accounts[1]
		const addressMXCorGF = accounts[3]
		const addressNsV4qlf = accounts[0]
		const addressBr58nHB = accounts[0]
		const addresscz43dy = accounts[0]
		const boolC9L4uGP = await Core_Fi_V3EQEuQg1.approve.call(addressyRn7rnO, uintFdVBZdd, {from: accounts[2]});
		const boolae2bcBo = await Core_Fi_V3EQEuQg1.approve.call(addressGWGbJmQ, uintE3j81rR, {from: "0x0000000000000000000000000000000000000001"});
		const boolGV06k9g = await Core_Fi_V3EQEuQg1.transfer.call(addressRVYb18d, uintagvwsui, {from: accounts[1]});
		const uint256nrNruai = await Core_Fi_V3EQEuQg1.totalSupply.call({from: accounts[0]});
		const uintQZTPc5s = await Core_Fi_V3EQEuQg1.allowance.call(addressNsV4qlf, addressMXCorGF, {from: accounts[3]});
		const uintBpdNwda = await Core_Fi_V3EQEuQg1.allowance.call(addresscz43dy, addressBr58nHB, {from: accounts[1]});
	});
})