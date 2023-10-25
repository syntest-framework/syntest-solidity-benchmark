const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3ZiMPJai = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintP6ZHlmX = BigInt("1429")
		const addressNce9mcU = accounts[0]
		const addressVOlUmvJ = accounts[5]
		const addressVdHGiQs = "0x0000000000000000000000000000000000000001"
		const boolOgxmyFY = await Core_Fi_V3ZiMPJai.transfer.call(addressNce9mcU, uintP6ZHlmX, {from: accounts[3]});
		const uintfILa54D = await Core_Fi_V3ZiMPJai.allowance.call(addressVdHGiQs, addressVOlUmvJ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3akrNAg2 = await Core_Fi_V3.new({from: accounts[2]});
		const uintbAmPYWm = BigInt("1288")
		const addressNBKoJ75 = accounts[4]
		const uintP4hCFcT = BigInt("1152")
		const addressqplaTA6 = accounts[5]
		const addressgKI0juS = accounts[2]
		const addressS70LSrd = accounts[5]
		const uintqPUlhZv = BigInt("334")
		const addressQIuw5br = "0x0000000000000000000000000000000000000001"
		const addresslGu2oOL = accounts[3]
		const addressnbzTLv = "0x0000000000000000000000000000000000000001"
		const boolVl81IS7 = await Core_Fi_V3akrNAg2.approve.call(addressNBKoJ75, uintbAmPYWm, {from: accounts[4]});
		const boolttethvv = await Core_Fi_V3akrNAg2.transferFrom.call(addressgKI0juS, addressqplaTA6, uintP4hCFcT, {from: accounts[0]});
		const uint256HxWYt97 = await Core_Fi_V3akrNAg2.balanceOf.call(addressS70LSrd, {from: accounts[5]});
		const boollL8Mc9q = await Core_Fi_V3akrNAg2.approve.call(addressQIuw5br, uintqPUlhZv, {from: accounts[2]});
		const uintVNqF9lP = await Core_Fi_V3akrNAg2.allowance.call(addressnbzTLv, addresslGu2oOL, {from: accounts[2]});

		assert.equal(boolVl81IS7, true)
		assert.equal(boollL8Mc9q, true)
		assert.equal(boolttethvv, false)
		assert.equal(uint256HxWYt97, BigInt("0"))
		assert.equal(uintVNqF9lP, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3eclNcL = await Core_Fi_V3.new({from: accounts[2]});
		const uintSSbUCdn = BigInt("141")
		const addressCbx16OH = accounts[4]
		const addressKEthRaC = accounts[0]
		const addressq8nAzS2 = accounts[0]
		const addresssJtqLii = accounts[0]
		const addressgsgNFzT = accounts[5]
		const addressgKVZ6A = accounts[4]
		const uintFEgSXT = BigInt("1251")
		const addressNvVOcJK = accounts[1]
		const uintPA2oI7h = BigInt("847")
		const addressvV4OVq = accounts[2]
		const addresssnBKU5w = "0x0000000000000000000000000000000000000001"
		const boolRlIAb7q = await Core_Fi_V3eclNcL.transferFrom.call(addressKEthRaC, addressCbx16OH, uintSSbUCdn, {from: accounts[0]});
		const uintmKg4vDB = await Core_Fi_V3eclNcL.allowance.call(addresssJtqLii, addressq8nAzS2, {from: accounts[0]});
		const uintCg5K6kn = await Core_Fi_V3eclNcL.allowance.call(addressgKVZ6A, addressgsgNFzT, {from: accounts[0]});
		const boolEk9NeaN = await Core_Fi_V3eclNcL.transfer.call(addressNvVOcJK, uintFEgSXT, {from: accounts[0]});
		const boolmnEDCGt = await Core_Fi_V3eclNcL.transferFrom.call(addresssnBKU5w, addressvV4OVq, uintPA2oI7h, {from: accounts[2]});

		assert.equal(boolEk9NeaN, false)
		assert.equal(boolRlIAb7q, false)
		assert.equal(boolmnEDCGt, false)
		assert.equal(uintCg5K6kn, BigInt("0"))
		assert.equal(uintmKg4vDB, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Cdp7wte = await Core_Fi_V3.new({from: accounts[0]});
		const addresssOmFRtm = accounts[1]
		const addressqBfnkHe = accounts[0]
		const uint1FTS9D = BigInt("702")
		const addressHae48N6 = accounts[2]
		const addresskCtoz2k = accounts[3]
		const addressoQResPM = accounts[1]
		const addressclTEDcK = accounts[1]
		const addressmrDS8C0 = accounts[1]
		const uintGfcA2iQ = await Core_Fi_V3Cdp7wte.allowance.call(addressqBfnkHe, addresssOmFRtm, {from: accounts[1]});
		const uint256nen5n0i = await Core_Fi_V3Cdp7wte.totalSupply.call({from: accounts[1]});
		const boolWouHeYr = await Core_Fi_V3Cdp7wte.transferFrom.call(addresskCtoz2k, addressHae48N6, uint1FTS9D, {from: accounts[4]});
		const uint256fPBQTve = await Core_Fi_V3Cdp7wte.balanceOf.call(addressoQResPM, {from: accounts[2]});
		const uint256ch0tQY = await Core_Fi_V3Cdp7wte.balanceOf.call(addressclTEDcK, {from: accounts[4]});
		const uint256WKzzKZC = await Core_Fi_V3Cdp7wte.balanceOf.call(addressmrDS8C0, {from: accounts[2]});

		assert.equal(boolWouHeYr, false)
		assert.equal(uint256WKzzKZC, BigInt("0"))
		assert.equal(uint256ch0tQY, BigInt("0"))
		assert.equal(uint256fPBQTve, BigInt("0"))
		assert.equal(uint256nen5n0i, BigInt("84000000000000000000000"))
		assert.equal(uintGfcA2iQ, BigInt("0"))
	});
})