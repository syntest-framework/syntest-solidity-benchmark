const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3ujE2X74 = await Core_Fi_V3.new({from: accounts[1]});
		const uintseJI3Tx = BigInt("1624")
		const addressQecF40N = accounts[1]
		const addressEWQmQJ5 = accounts[1]
		const uint4TSnb2 = BigInt("1648")
		const addressS97YYTa = accounts[1]
		const addressrdmwfiJ = accounts[4]
		const boolwnwMhD3 = await Core_Fi_V3ujE2X74.transferFrom.call(addressEWQmQJ5, addressQecF40N, uintseJI3Tx, {from: accounts[4]});
		const boolfzcjAcd = await Core_Fi_V3ujE2X74.approve.call(addressS97YYTa, uint4TSnb2, {from: accounts[0]});
		const uint256GOEBYb = await Core_Fi_V3ujE2X74.balanceOf.call(addressrdmwfiJ, {from: accounts[3]});

		assert.equal(boolfzcjAcd, true)
		assert.equal(boolwnwMhD3, false)
		assert.equal(uint256GOEBYb, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3zdozbb = await Core_Fi_V3.new({from: accounts[4]});
		const uintBnCRlFb = BigInt("455")
		const addressqQahPeI = accounts[3]
		const addressUVPBKUi = accounts[4]
		const uintiEPjIRj = BigInt("1714")
		const addressn6VuYPj = accounts[0]
		const addressBDUYAXz = accounts[3]
		const addressn6UNxUF = accounts[1]
		const boolpcZuFzz = await Core_Fi_V3zdozbb.approve.call(addressqQahPeI, uintBnCRlFb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Nt1E3RS = await Core_Fi_V3zdozbb.balanceOf.call(addressUVPBKUi, {from: "0x0000000000000000000000000000000000000001"});
		const boolcfa7Op = await Core_Fi_V3zdozbb.transfer.call(addressn6VuYPj, uintiEPjIRj, {from: accounts[3]});
		const uintPc0fJfm = await Core_Fi_V3zdozbb.allowance.call(addressn6UNxUF, addressBDUYAXz, {from: accounts[0]});

		assert.equal(boolcfa7Op, false)
		assert.equal(boolpcZuFzz, true)
		assert.equal(uint256Nt1E3RS, BigInt("84000000000000000000000"))
		assert.equal(uintPc0fJfm, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3JST5kY9 = await Core_Fi_V3.new({from: accounts[4]});
		const uintzzytRwD = BigInt("1949")
		const addressoMkHp9t = accounts[0]
		const addressECUehm9 = accounts[2]
		const uintf0VaSo = BigInt("1103")
		const addresssyNYYRk = accounts[5]
		const addresskTBxGdG = accounts[4]
		const uinthFkODTx = BigInt("545")
		const addressMo1zn6H = accounts[4]
		const uint256ccm7Cwa = await Core_Fi_V3JST5kY9.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolO14dCNr = await Core_Fi_V3JST5kY9.transferFrom.call(addressECUehm9, addressoMkHp9t, uintzzytRwD, {from: accounts[0]});
		const boolUnPM7rh = await Core_Fi_V3JST5kY9.transferFrom.call(addresskTBxGdG, addresssyNYYRk, uintf0VaSo, {from: accounts[1]});
		const boolkyPLYn5 = await Core_Fi_V3JST5kY9.transfer.call(addressMo1zn6H, uinthFkODTx, {from: accounts[2]});

		assert.equal(boolO14dCNr, false)
		assert.equal(boolUnPM7rh, false)
		assert.equal(boolkyPLYn5, false)
		assert.equal(uint256ccm7Cwa, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3He5asQC = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintN6Cw9VB = BigInt("108")
		const addressWnhKF9T = accounts[5]
		const addressCwOnBE6 = accounts[0]
		const uintRVUYn3l = BigInt("949")
		const addressariGHz7 = "0x0000000000000000000000000000000000000001"
		const addressj1R6meK = accounts[4]
		const uintNZ8a8t = BigInt("1727")
		const addressH6AvOVR = "0x0000000000000000000000000000000000000001"
		const addressj5fcQTl = "0x0000000000000000000000000000000000000001"
		const addressZuDAENO = accounts[1]
		const addresshIZ7QYG = accounts[4]
		const addressEnldZNJ = accounts[2]
		const boolpbnJ0Id = await Core_Fi_V3He5asQC.transferFrom.call(addressCwOnBE6, addressWnhKF9T, uintN6Cw9VB, {from: accounts[1]});
		const boolRLzaPvf = await Core_Fi_V3He5asQC.transferFrom.call(addressj1R6meK, addressariGHz7, uintRVUYn3l, {from: accounts[1]});
		const boolgRsvJL9 = await Core_Fi_V3He5asQC.approve.call(addressH6AvOVR, uintNZ8a8t, {from: accounts[1]});
		const uintfb3eHjK = await Core_Fi_V3He5asQC.allowance.call(addressZuDAENO, addressj5fcQTl, {from: accounts[3]});
		const uintpLZXXLO = await Core_Fi_V3He5asQC.allowance.call(addressEnldZNJ, addresshIZ7QYG, {from: accounts[3]});
		const uint256kl2ROn = await Core_Fi_V3He5asQC.totalSupply.call({from: accounts[0]});
	});
})