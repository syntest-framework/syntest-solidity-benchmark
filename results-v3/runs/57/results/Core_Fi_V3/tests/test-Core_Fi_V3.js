const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3BVt82uu = await Core_Fi_V3.new({from: accounts[1]});
		const uinty537m1o = BigInt("1125")
		const addressNPZlyh8 = accounts[3]
		const uintXe95Wcb = BigInt("731")
		const addressJciC0Na = accounts[1]
		const addressbIUMsyD = accounts[2]
		const addressaXewGIP = accounts[0]
		const addressW2Hr3qN = accounts[2]
		const addresstnDPM4U = accounts[1]
		const uintHHUK2nL = BigInt("1846")
		const addressp7iL3cx = accounts[1]
		const boolcy52ZlV = await Core_Fi_V3BVt82uu.approve.call(addressNPZlyh8, uinty537m1o, {from: accounts[0]});
		const booladZVnku = await Core_Fi_V3BVt82uu.transferFrom.call(addressbIUMsyD, addressJciC0Na, uintXe95Wcb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K2hDeJP = await Core_Fi_V3BVt82uu.balanceOf.call(addressaXewGIP, {from: accounts[4]});
		const uintnctS8um = await Core_Fi_V3BVt82uu.allowance.call(addresstnDPM4U, addressW2Hr3qN, {from: accounts[1]});
		const boolnB2RhoX = await Core_Fi_V3BVt82uu.transfer.call(addressp7iL3cx, uintHHUK2nL, {from: accounts[1]});

		assert.equal(booladZVnku, false)
		assert.equal(boolcy52ZlV, true)
		assert.equal(boolnB2RhoX, true)
		assert.equal(uint256K2hDeJP, BigInt("0"))
		assert.equal(uintnctS8um, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3UjcRJ2u = await Core_Fi_V3.new({from: accounts[2]});
		const addressJhk7nL3 = "0x0000000000000000000000000000000000000001"
		const addresspbWebur = "0x0000000000000000000000000000000000000001"
		const addressulUHb8F = accounts[1]
		const addresssFMBUic = accounts[4]
		const uintbql9jb7 = BigInt("253")
		const addressSCqP5G = accounts[0]
		const addressgjK1nUU = accounts[4]
		const uint256jmqzGt = await Core_Fi_V3UjcRJ2u.totalSupply.call({from: accounts[4]});
		const uintKHduSYj = await Core_Fi_V3UjcRJ2u.allowance.call(addresspbWebur, addressJhk7nL3, {from: accounts[0]});
		const uintHH5eMDl = await Core_Fi_V3UjcRJ2u.allowance.call(addresssFMBUic, addressulUHb8F, {from: accounts[0]});
		const boolWGq3m1t = await Core_Fi_V3UjcRJ2u.transferFrom.call(addressgjK1nUU, addressSCqP5G, uintbql9jb7, {from: accounts[1]});

		assert.equal(boolWGq3m1t, false)
		assert.equal(uint256jmqzGt, BigInt("84000000000000000000000"))
		assert.equal(uintHH5eMDl, BigInt("0"))
		assert.equal(uintKHduSYj, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3y1zn8h = await Core_Fi_V3.new({from: accounts[4]});
		const addressjCvAV6i = accounts[1]
		const addressqQriWsw = accounts[4]
		const uintV7dl8f1 = BigInt("691")
		const addressPLvlb2o = accounts[0]
		const uintWaWVvAp = BigInt("119")
		const addressaJ7skFt = accounts[0]
		const addressnUyqCow = accounts[4]
		const uint3PHU3Z = BigInt("600")
		const addressDR2mkUr = accounts[1]
		const uintyHYGD8Q = await Core_Fi_V3y1zn8h.allowance.call(addressqQriWsw, addressjCvAV6i, {from: accounts[1]});
		const uint256D4GXryQ = await Core_Fi_V3y1zn8h.totalSupply.call({from: accounts[3]});
		const booloaCKC45 = await Core_Fi_V3y1zn8h.approve.call(addressPLvlb2o, uintV7dl8f1, {from: accounts[4]});
		const boolVEEwUO7 = await Core_Fi_V3y1zn8h.transferFrom.call(addressnUyqCow, addressaJ7skFt, uintWaWVvAp, {from: accounts[1]});
		const bools56a4g = await Core_Fi_V3y1zn8h.transfer.call(addressDR2mkUr, uint3PHU3Z, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVEEwUO7, false)
		assert.equal(booloaCKC45, true)
		assert.equal(bools56a4g, false)
		assert.equal(uint256D4GXryQ, BigInt("84000000000000000000000"))
		assert.equal(uintyHYGD8Q, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Yo4LSqn = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvF0qkQR = accounts[0]
		const uintTkv4zV7 = BigInt("1882")
		const addresszPcqPAE = accounts[2]
		const addressqffxOSD = accounts[3]
		const addressB37Lo8j = "0x0000000000000000000000000000000000000001"
		const addressITGaN3v = accounts[4]
		const addressFu0F01 = accounts[1]
		const addressrRyGL5m = accounts[2]
		const uint256kGiDfuN = await Core_Fi_V3Yo4LSqn.balanceOf.call(addressvF0qkQR, {from: accounts[1]});
		const boolKHo8iyl = await Core_Fi_V3Yo4LSqn.transfer.call(addresszPcqPAE, uintTkv4zV7, {from: accounts[3]});
		const uintxuu49Qh = await Core_Fi_V3Yo4LSqn.allowance.call(addressB37Lo8j, addressqffxOSD, {from: accounts[0]});
		const uint256DVgEBfs = await Core_Fi_V3Yo4LSqn.balanceOf.call(addressITGaN3v, {from: accounts[2]});
		const uintkffaBMu = await Core_Fi_V3Yo4LSqn.allowance.call(addressrRyGL5m, addressFu0F01, {from: accounts[0]});
	});
})