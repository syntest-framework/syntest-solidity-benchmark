const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3zZmYiWE = await Core_Fi_V3.new({from: accounts[4]});
		const addressCoko4HS = accounts[3]
		const addressNb6FNsc = accounts[1]
		const uintvDGDKMv = BigInt("1209")
		const addressbk0fM3Z = accounts[0]
		const addressDakEXGL = accounts[0]
		const uinthmT8TKb = BigInt("963")
		const addressYYDCZhH = accounts[3]
		const uintrz0rhMw = BigInt("131")
		const addressqAYLb87 = accounts[4]
		const uint256KaaCw3E = await Core_Fi_V3zZmYiWE.totalSupply.call({from: accounts[2]});
		const uintb9PVbn0 = await Core_Fi_V3zZmYiWE.allowance.call(addressNb6FNsc, addressCoko4HS, {from: accounts[1]});
		const boolTGVpCHk = await Core_Fi_V3zZmYiWE.approve.call(addressbk0fM3Z, uintvDGDKMv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KWIX6n0 = await Core_Fi_V3zZmYiWE.balanceOf.call(addressDakEXGL, {from: "0x0000000000000000000000000000000000000001"});
		const booligcV8Q6 = await Core_Fi_V3zZmYiWE.approve.call(addressYYDCZhH, uinthmT8TKb, {from: accounts[4]});
		const boolLX1qUd = await Core_Fi_V3zZmYiWE.transfer.call(addressqAYLb87, uintrz0rhMw, {from: accounts[1]});

		assert.equal(boolLX1qUd, false)
		assert.equal(boolTGVpCHk, true)
		assert.equal(booligcV8Q6, true)
		assert.equal(uint256KWIX6n0, BigInt("0"))
		assert.equal(uint256KaaCw3E, BigInt("84000000000000000000000"))
		assert.equal(uintb9PVbn0, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3EXuP2nc = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintK9VVh9w = BigInt("747")
		const addressqxoMX3p = "0x0000000000000000000000000000000000000001"
		const addressJQxg8fw = "0x0000000000000000000000000000000000000001"
		const uintgC0ifNW = BigInt("817")
		const addressK09z2Yl = accounts[1]
		const uintO5dKT5Z = BigInt("730")
		const addresssNUTiTc = "0x0000000000000000000000000000000000000001"
		const addressOiUH30e = accounts[5]
		const uintJmrCGj = BigInt("1010")
		const addressipxrayt = accounts[0]
		const addressN86B6T2 = accounts[1]
		const uintKNih2Rr = BigInt("488")
		const addressJUcQTFH = accounts[1]
		const addresswmbcwxx = accounts[4]
		const booldeD0KYu = await Core_Fi_V3EXuP2nc.transferFrom.call(addressJQxg8fw, addressqxoMX3p, uintK9VVh9w, {from: accounts[1]});
		const boolQBNdD1X = await Core_Fi_V3EXuP2nc.approve.call(addressK09z2Yl, uintgC0ifNW, {from: "0x0000000000000000000000000000000000000001"});
		const boolgg1f0uR = await Core_Fi_V3EXuP2nc.transferFrom.call(addressOiUH30e, addresssNUTiTc, uintO5dKT5Z, {from: accounts[3]});
		const boolSBBgxi = await Core_Fi_V3EXuP2nc.transferFrom.call(addressN86B6T2, addressipxrayt, uintJmrCGj, {from: accounts[2]});
		const booljXsQ9gO = await Core_Fi_V3EXuP2nc.transferFrom.call(addresswmbcwxx, addressJUcQTFH, uintKNih2Rr, {from: accounts[4]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3uwmMzDd = await Core_Fi_V3.new({from: accounts[2]});
		const addressKVUFwqw = accounts[1]
		const address0z7JX2 = accounts[3]
		const addressvE6a1uX = "0x0000000000000000000000000000000000000001"
		const uintHiubPZv = BigInt("133")
		const addresshHkgiRy = accounts[1]
		const addresse2MPXvE = accounts[0]
		const uintwMLVtgV = await Core_Fi_V3uwmMzDd.allowance.call(address0z7JX2, addressKVUFwqw, {from: accounts[4]});
		const uint256gPfsaaS = await Core_Fi_V3uwmMzDd.balanceOf.call(addressvE6a1uX, {from: accounts[5]});
		const boolabfVMiN = await Core_Fi_V3uwmMzDd.transferFrom.call(addresse2MPXvE, addresshHkgiRy, uintHiubPZv, {from: accounts[0]});

		assert.equal(boolabfVMiN, false)
		assert.equal(uint256gPfsaaS, BigInt("0"))
		assert.equal(uintwMLVtgV, BigInt("0"))
	});
})