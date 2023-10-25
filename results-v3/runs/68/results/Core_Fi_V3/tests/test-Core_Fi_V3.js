const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3s0hB19A = await Core_Fi_V3.new({from: accounts[5]});
		const addressaiF6NFT = accounts[4]
		const addressgH1YpUb = accounts[0]
		const addressugvqfNj = accounts[0]
		const addressir01iu5 = accounts[0]
		const uintHBBWX3m = await Core_Fi_V3s0hB19A.allowance.call(addressgH1YpUb, addressaiF6NFT, {from: accounts[4]});
		const uintHyZSwFl = await Core_Fi_V3s0hB19A.allowance.call(addressir01iu5, addressugvqfNj, {from: accounts[3]});

		assert.equal(uintHBBWX3m, BigInt("0"))
		assert.equal(uintHyZSwFl, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3GGUpsDc = await Core_Fi_V3.new({from: accounts[1]});
		const address1U7RuR = accounts[0]
		const uintomILa8T = BigInt("1205")
		const addressyUrwoaS = accounts[0]
		const addressaVlp9Lm = accounts[3]
		const uint256yMiCkX = await Core_Fi_V3GGUpsDc.balanceOf.call(address1U7RuR, {from: accounts[0]});
		const boolQA8ShX = await Core_Fi_V3GGUpsDc.transferFrom.call(addressaVlp9Lm, addressyUrwoaS, uintomILa8T, {from: accounts[3]});

		assert.equal(boolQA8ShX, false)
		assert.equal(uint256yMiCkX, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V34JlmWY = await Core_Fi_V3.new({from: accounts[4]});
		const addresstfAc2MW = accounts[0]
		const addressN92FQ1N = accounts[2]
		const addresshQ8QAR0 = accounts[0]
		const addressqyuhIFN = "0x0000000000000000000000000000000000000001"
		const uintfFRyMqj = BigInt("33")
		const addressi1uol16 = accounts[2]
		const uint256R0YaDPC = await Core_Fi_V34JlmWY.balanceOf.call(addresstfAc2MW, {from: accounts[2]});
		const uinti1PvmOw = await Core_Fi_V34JlmWY.allowance.call(addresshQ8QAR0, addressN92FQ1N, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HlF4gB6 = await Core_Fi_V34JlmWY.balanceOf.call(addressqyuhIFN, {from: "0x0000000000000000000000000000000000000001"});
		const boolZia13o4 = await Core_Fi_V34JlmWY.transfer.call(addressi1uol16, uintfFRyMqj, {from: accounts[1]});

		assert.equal(boolZia13o4, false)
		assert.equal(uint256HlF4gB6, BigInt("0"))
		assert.equal(uint256R0YaDPC, BigInt("0"))
		assert.equal(uinti1PvmOw, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3F8IAtR = await Core_Fi_V3.new({from: accounts[3]});
		const addressrWarAGl = accounts[2]
		const addressjmQr9U7 = "0x0000000000000000000000000000000000000001"
		const addressRsWXjIA = accounts[2]
		const uintJfYh5eG = BigInt("1265")
		const addresscNnQFk = accounts[2]
		const addressM1PtkaB = accounts[0]
		const uintGVibYWi = BigInt("1294")
		const addressJYproBj = accounts[3]
		const addresswF8bxV = accounts[4]
		const uintJS5DLOW = await Core_Fi_V3F8IAtR.allowance.call(addressjmQr9U7, addressrWarAGl, {from: accounts[4]});
		const uint256VLxGdyS = await Core_Fi_V3F8IAtR.balanceOf.call(addressRsWXjIA, {from: accounts[0]});
		const uint256vEokFBr = await Core_Fi_V3F8IAtR.totalSupply.call({from: accounts[0]});
		const boolpFANPgq = await Core_Fi_V3F8IAtR.transferFrom.call(addressM1PtkaB, addresscNnQFk, uintJfYh5eG, {from: accounts[2]});
		const boolTp60vnu = await Core_Fi_V3F8IAtR.transferFrom.call(addresswF8bxV, addressJYproBj, uintGVibYWi, {from: accounts[1]});

		assert.equal(boolTp60vnu, false)
		assert.equal(boolpFANPgq, false)
		assert.equal(uint256VLxGdyS, BigInt("0"))
		assert.equal(uint256vEokFBr, BigInt("84000000000000000000000"))
		assert.equal(uintJS5DLOW, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3UHlzx7u = await Core_Fi_V3.new({from: accounts[3]});
		const addresshDUkkJy = accounts[5]
		const addresse2aswA = accounts[0]
		const uintpsAMxFx = BigInt("1404")
		const addressTYEIcb = accounts[4]
		const uintyGuRQc = await Core_Fi_V3UHlzx7u.allowance.call(addresse2aswA, addresshDUkkJy, {from: accounts[2]});
		const boolZUysnn = await Core_Fi_V3UHlzx7u.approve.call(addressTYEIcb, uintpsAMxFx, {from: accounts[5]});

		assert.equal(boolZUysnn, true)
		assert.equal(uintyGuRQc, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3jafmoCY = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFw6MsQH = accounts[5]
		const addressRp4wki = accounts[0]
		const uintZsoYq7B = BigInt("1590")
		const addressGryOOo5 = accounts[2]
		const addresshc8lJ0F = accounts[1]
		const addressbh6GWu = accounts[0]
		const uint256nE65XP = await Core_Fi_V3jafmoCY.balanceOf.call(addressFw6MsQH, {from: accounts[1]});
		const uint256MRc2qvl = await Core_Fi_V3jafmoCY.balanceOf.call(addressRp4wki, {from: accounts[1]});
		const boolQGlb2KU = await Core_Fi_V3jafmoCY.approve.call(addressGryOOo5, uintZsoYq7B, {from: accounts[3]});
		const uinthQnEaIG = await Core_Fi_V3jafmoCY.allowance.call(addressbh6GWu, addresshc8lJ0F, {from: "0x0000000000000000000000000000000000000001"});
	});
})