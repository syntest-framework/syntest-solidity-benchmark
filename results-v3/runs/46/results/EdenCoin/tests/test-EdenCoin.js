const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinu0GHQFB = await EdenCoin.new({from: accounts[0]});
		const addressS8cRiFp = accounts[3]
		const addressVnIYba = accounts[1]
		const uintHtRLjg = BigInt("522")
		const addressCv9OE4O = accounts[1]
		const uintgsionE = BigInt("1117")
		const addressrK4Wlmf = accounts[0]
		const uintH996lOt = BigInt("2011")
		const addresskHi4XKe = accounts[1]
		const addressyB58mYu = "0x0000000000000000000000000000000000000001"
		const addressskhth6C = accounts[5]
		const addressWpziag2 = accounts[3]
		const uint256jiu5QWv = await EdenCoinu0GHQFB.allowance.call(addressVnIYba, addressS8cRiFp, {from: accounts[4]});
		const boolBVwmRx8 = await EdenCoinu0GHQFB.approve.call(addressCv9OE4O, uintHtRLjg, {from: accounts[2]});
		const boolKLkKvY = await EdenCoinu0GHQFB.approve.call(addressrK4Wlmf, uintgsionE, {from: accounts[5]});
		const boolAZe2N5o = await EdenCoinu0GHQFB.increaseApproval.call(addresskHi4XKe, uintH996lOt, {from: accounts[0]});
		const uint256qeH94LI = await EdenCoinu0GHQFB.balanceOf.call(addressyB58mYu, {from: accounts[1]});
		const uint256fBi8DFK = await EdenCoinu0GHQFB.allowance.call(addressWpziag2, addressskhth6C, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAZe2N5o, true)
		assert.equal(boolBVwmRx8, true)
		assert.equal(boolKLkKvY, true)
		assert.equal(uint256fBi8DFK, BigInt("0"))
		assert.equal(uint256jiu5QWv, BigInt("0"))
		assert.equal(uint256qeH94LI, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinR536B0i = await EdenCoin.new({from: accounts[0]});
		const uintgG4kRIT = BigInt("1315")
		const addresskylM37N = "0x0000000000000000000000000000000000000001"
		const addressT9vDWJ = accounts[1]
		const uintoLf16Wo = BigInt("1240")
		const addressQ79Te7 = accounts[3]
		const addressAajszwr = accounts[2]
		const uint2qF8R2 = BigInt("1633")
		const addressWtlXrjZ = accounts[1]
		const addressFpS4zE2 = accounts[0]
		const boolWT5pX7z = await EdenCoinR536B0i.transferFrom.call(addressT9vDWJ, addresskylM37N, uintgG4kRIT, {from: accounts[4]});
		const boolSgLxj4T = await EdenCoinR536B0i.transferFrom.call(addressAajszwr, addressQ79Te7, uintoLf16Wo, {from: "0x0000000000000000000000000000000000000001"});
		const boolcJxP59x = await EdenCoinR536B0i.transferFrom.call(addressFpS4zE2, addressWtlXrjZ, uint2qF8R2, {from: accounts[3]});

		await expect(EdenCoinR536B0i.transferFrom.call(addressT9vDWJ, addresskylM37N, uintgG4kRIT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinnLKYx28 = await EdenCoin.new({from: accounts[5]});
		const addressHQgY2x = "0x0000000000000000000000000000000000000001"
		const uinttuVtDrd = BigInt("43")
		const addressdxGsiwU = accounts[2]
		const uintwwcohT1 = BigInt("1033")
		const addressQAzizuV = accounts[3]
		const uintodVXrKQ = BigInt("862")
		const addressZ7TPpRl = accounts[2]
		const uintTYuENsk = BigInt("1052")
		const addressmgaxlqL = accounts[3]
		const uint256KhZQfhA = await EdenCoinnLKYx28.balanceOf.call(addressHQgY2x, {from: accounts[2]});
		const bool0Awm2j = await EdenCoinnLKYx28.approve.call(addressdxGsiwU, uinttuVtDrd, {from: accounts[4]});
		const boolRnSE7Jz = await EdenCoinnLKYx28.transfer.call(addressQAzizuV, uintwwcohT1, {from: accounts[3]});
		const boolPARipwP = await EdenCoinnLKYx28.transfer.call(addressZ7TPpRl, uintodVXrKQ, {from: accounts[1]});
		const boolGtdMu7l = await EdenCoinnLKYx28.transfer.call(addressmgaxlqL, uintTYuENsk, {from: accounts[2]});

		assert.equal(bool0Awm2j, true)
		assert.equal(uint256KhZQfhA, BigInt("0"))
		await expect(EdenCoinnLKYx28.transfer.call(addressQAzizuV, uintwwcohT1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinscZmf6l = await EdenCoin.new({from: accounts[5]});
		const uints63YEUv = BigInt("1938")
		const addressQeh48eJ = accounts[3]
		const uintPOKAbAA = BigInt("785")
		const addressLaD2Bpw = accounts[4]
		const booleSGuqMA = await EdenCoinscZmf6l.decreaseApproval.call(addressQeh48eJ, uints63YEUv, {from: accounts[4]});
		const booltmdMO1 = await EdenCoinscZmf6l.approve.call(addressLaD2Bpw, uintPOKAbAA, {from: accounts[4]});

		assert.equal(booleSGuqMA, true)
		assert.equal(booltmdMO1, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinXFs7iYs = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressitsBBSj = accounts[0]
		const addressQ7r8ORS = "0x0000000000000000000000000000000000000001"
		const uintDO9WaQ7 = BigInt("1595")
		const addressVxMPVly = accounts[3]
		const uintYvqqsTC = BigInt("1105")
		const addressNRxRMOm = accounts[4]
		const uint4GO8ho = BigInt("1941")
		const addressm6nX0a2 = accounts[1]
		const addresslZ4gKdl = accounts[4]
		const uintx0PlnIb = BigInt("500")
		const addressC9MpzSU = accounts[1]
		const uint256oyYTsFp = await EdenCoinXFs7iYs.allowance.call(addressQ7r8ORS, addressitsBBSj, {from: "0x0000000000000000000000000000000000000001"});
		const boolcpvccXD = await EdenCoinXFs7iYs.transfer.call(addressVxMPVly, uintDO9WaQ7, {from: accounts[1]});
		const boolRA73wrm = await EdenCoinXFs7iYs.approve.call(addressNRxRMOm, uintYvqqsTC, {from: accounts[2]});
		const boolaEBpDbt = await EdenCoinXFs7iYs.transferFrom.call(addresslZ4gKdl, addressm6nX0a2, uint4GO8ho, {from: accounts[3]});
		const boolQk1Xi51 = await EdenCoinXFs7iYs.increaseApproval.call(addressC9MpzSU, uintx0PlnIb, {from: accounts[4]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinscZmf6l = await EdenCoin.new({from: accounts[5]});
		const uintXfR7j3D = BigInt("8")
		const addressq2ossps = accounts[5]
		const addressopd5fN = accounts[5]
		const addressb3pnAcL = accounts[2]
		const uintR9gnwfJ = BigInt("0")
		const addressuC5RxWR = accounts[2]
		const uintzFVfZ3Y = BigInt("1832")
		const addresswXruV4H = accounts[5]
		const boolFlpKyDq = await EdenCoinscZmf6l.decreaseApproval.call(addressq2ossps, uintXfR7j3D, {from: accounts[1]});
		const uint256cACvPwW = await EdenCoinscZmf6l.allowance.call(addressb3pnAcL, addressopd5fN, {from: accounts[4]});
		const boolUQbvW1s = await EdenCoinscZmf6l.decreaseApproval.call(addressuC5RxWR, uintR9gnwfJ, {from: accounts[0]});
		const boolMXdqi5l = await EdenCoinscZmf6l.increaseApproval.call(addresswXruV4H, uintzFVfZ3Y, {from: accounts[2]});

		assert.equal(boolFlpKyDq, true)
		assert.equal(boolMXdqi5l, true)
		assert.equal(boolUQbvW1s, true)
		assert.equal(uint256cACvPwW, BigInt("0"))
	});
})