const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V35EVIg9 = await Core_Fi_V3.new({from: accounts[0]});
		const addressiZK8a2E = accounts[4]
		const uintmHjeAZ = BigInt("1395")
		const addressGl9L5oj = accounts[4]
		const uintxknUWs1 = BigInt("926")
		const addressCtzHqO = "0x0000000000000000000000000000000000000001"
		const addressusEy4G0 = accounts[0]
		const uint256lAZJKlR = await Core_Fi_V35EVIg9.balanceOf.call(addressiZK8a2E, {from: accounts[1]});
		const boolmSEKKL = await Core_Fi_V35EVIg9.approve.call(addressGl9L5oj, uintmHjeAZ, {from: accounts[3]});
		const boolRy8IfQ3 = await Core_Fi_V35EVIg9.transferFrom.call(addressusEy4G0, addressCtzHqO, uintxknUWs1, {from: accounts[4]});

		assert.equal(boolRy8IfQ3, false)
		assert.equal(boolmSEKKL, true)
		assert.equal(uint256lAZJKlR, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3JjU1x9 = await Core_Fi_V3.new({from: accounts[3]});
		const uintAN14ka5 = BigInt("1239")
		const addressk6EFvgN = accounts[5]
		const addressjcPVA6o = accounts[0]
		const addresss8j0mi7 = accounts[1]
		const addressjNMmS9v = accounts[2]
		const addresseoNYXiL = "0x0000000000000000000000000000000000000001"
		const boolTKDSSvT = await Core_Fi_V3JjU1x9.transferFrom.call(addressjcPVA6o, addressk6EFvgN, uintAN14ka5, {from: accounts[2]});
		const uint256NLmaICV = await Core_Fi_V3JjU1x9.balanceOf.call(addresss8j0mi7, {from: accounts[2]});
		const uintnCeZE24 = await Core_Fi_V3JjU1x9.allowance.call(addresseoNYXiL, addressjNMmS9v, {from: accounts[3]});

		assert.equal(boolTKDSSvT, false)
		assert.equal(uint256NLmaICV, BigInt("0"))
		assert.equal(uintnCeZE24, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3ZeilHUc = await Core_Fi_V3.new({from: accounts[5]});
		const uinttYq8ig1 = BigInt("1757")
		const addressC4mhL6X = accounts[1]
		const uintsbu8Y56 = BigInt("1870")
		const addressH1lmTgS = accounts[5]
		const addressS825oA = accounts[1]
		const addressPuz2MMo = "0x0000000000000000000000000000000000000001"
		const bool1CmgND = await Core_Fi_V3ZeilHUc.transfer.call(addressC4mhL6X, uinttYq8ig1, {from: accounts[4]});
		const boolkM78LLr = await Core_Fi_V3ZeilHUc.transferFrom.call(addressS825oA, addressH1lmTgS, uintsbu8Y56, {from: accounts[2]});
		const uint256vUU5t1T = await Core_Fi_V3ZeilHUc.balanceOf.call(addressPuz2MMo, {from: accounts[0]});
		const uint256fi2arvl = await Core_Fi_V3ZeilHUc.totalSupply.call({from: accounts[3]});

		assert.equal(bool1CmgND, false)
		assert.equal(boolkM78LLr, false)
		assert.equal(uint256fi2arvl, BigInt("84000000000000000000000"))
		assert.equal(uint256vUU5t1T, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Lipbxwt = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrtCF7Kr = "0x0000000000000000000000000000000000000001"
		const uintP1FsCtI = BigInt("703")
		const addressf1GF2be = accounts[2]
		const uint256GzGtv6F = await Core_Fi_V3Lipbxwt.balanceOf.call(addressrtCF7Kr, {from: accounts[5]});
		const boolQCQSyMh = await Core_Fi_V3Lipbxwt.transfer.call(addressf1GF2be, uintP1FsCtI, {from: accounts[1]});
	});
})