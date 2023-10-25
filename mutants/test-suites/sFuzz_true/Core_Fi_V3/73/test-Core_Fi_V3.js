const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3eiICapF = await Core_Fi_V3.new({from: accounts[0]});
		const uintkKihIA9 = BigInt("363")
		const addressoRmFrIF = accounts[2]
		const uintWd3Lo6D = BigInt("1582")
		const addressjI7BWhD = accounts[1]
		const boolrIhbW1u = await Core_Fi_V3eiICapF.approve.call(addressoRmFrIF, uintkKihIA9, {from: accounts[5]});
		const boolK0yZYXt = await Core_Fi_V3eiICapF.approve.call(addressjI7BWhD, uintWd3Lo6D, {from: accounts[2]});

		assert.equal(boolK0yZYXt, true)
		assert.equal(boolrIhbW1u, true)
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3WNx05rw = await Core_Fi_V3.new({from: accounts[2]});
		const uinti8SJNFi = BigInt("1297")
		const addressJeHoyrP = accounts[3]
		const addressyuhA0mj = accounts[3]
		const addressENGa71 = accounts[4]
		const uintoQdKpDq = BigInt("1400")
		const addresscHlwHZJ = accounts[0]
		const uintM8x37nm = BigInt("1575")
		const address55DTfv = accounts[0]
		const addressmRXunhx = accounts[1]
		const boolR9UxlY2 = await Core_Fi_V3WNx05rw.transferFrom.call(addressyuhA0mj, addressJeHoyrP, uinti8SJNFi, {from: accounts[0]});
		const uint256IrJuaEo = await Core_Fi_V3WNx05rw.totalSupply.call({from: accounts[0]});
		const uint256xrByriW = await Core_Fi_V3WNx05rw.balanceOf.call(addressENGa71, {from: accounts[0]});
		const boolF3eH22J = await Core_Fi_V3WNx05rw.approve.call(addresscHlwHZJ, uintoQdKpDq, {from: "0x0000000000000000000000000000000000000001"});
		const boolvNQrf4e = await Core_Fi_V3WNx05rw.transferFrom.call(addressmRXunhx, address55DTfv, uintM8x37nm, {from: accounts[0]});

		assert.equal(boolF3eH22J, true)
		assert.equal(boolR9UxlY2, false)
		assert.equal(boolvNQrf4e, false)
		assert.equal(uint256IrJuaEo, BigInt("84000000000000000000000"))
		assert.equal(uint256xrByriW, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3xmwbsA5 = await Core_Fi_V3.new({from: accounts[5]});
		const addressx3VFXQ0 = accounts[4]
		const uintQtY80O = BigInt("1964")
		const addressiS0yJkV = accounts[1]
		const addresscssUUEO = accounts[4]
		const uintDRQsG9K = BigInt("1428")
		const addresswUfmtyB = "0x0000000000000000000000000000000000000001"
		const addressrcHQnvs = accounts[2]
		const uintdfLmq8B = BigInt("1243")
		const addressUsxd8wW = accounts[4]
		const uintaQjsYCC = BigInt("1902")
		const addressyGlzUIZ = accounts[4]
		const uint256W6kRIGS = await Core_Fi_V3xmwbsA5.balanceOf.call(addressx3VFXQ0, {from: accounts[0]});
		const booleOtPVK = await Core_Fi_V3xmwbsA5.transferFrom.call(addresscssUUEO, addressiS0yJkV, uintQtY80O, {from: accounts[2]});
		const boolUU3kjE = await Core_Fi_V3xmwbsA5.transferFrom.call(addressrcHQnvs, addresswUfmtyB, uintDRQsG9K, {from: accounts[3]});
		const boolCKPf0AD = await Core_Fi_V3xmwbsA5.transfer.call(addressUsxd8wW, uintdfLmq8B, {from: accounts[0]});
		const boolvFrXlZE = await Core_Fi_V3xmwbsA5.transfer.call(addressyGlzUIZ, uintaQjsYCC, {from: accounts[0]});

		assert.equal(boolCKPf0AD, false)
		assert.equal(boolUU3kjE, false)
		assert.equal(booleOtPVK, false)
		assert.equal(boolvFrXlZE, false)
		assert.equal(uint256W6kRIGS, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3bQYvErV = await Core_Fi_V3.new({from: accounts[5]});
		const addressfAqGMjv = accounts[1]
		const addresspWSWaL = accounts[1]
		const uintUJwTQW = BigInt("1880")
		const addressoaGwbt = accounts[2]
		const addressMeAaiIc = accounts[5]
		const uintUMkOJt = await Core_Fi_V3bQYvErV.allowance.call(addresspWSWaL, addressfAqGMjv, {from: accounts[4]});
		const boolbP8quXf = await Core_Fi_V3bQYvErV.transferFrom.call(addressMeAaiIc, addressoaGwbt, uintUJwTQW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbP8quXf, false)
		assert.equal(uintUMkOJt, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3TVzBJvy = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgZLgwyj = BigInt("1509")
		const addressEV0S2fh = accounts[0]
		const addressPZqMSvG = accounts[4]
		const uintVjAriDA = BigInt("200")
		const addressAUvMHlr = accounts[1]
		const address7oYN0L = accounts[2]
		const uintSl46gxE = BigInt("1781")
		const addressCKy9g13 = "0x0000000000000000000000000000000000000001"
		const uintw7zt64o = BigInt("230")
		const addresspy55rk3 = accounts[1]
		const addressoqzARB6 = accounts[1]
		const addressYvmXTl = accounts[4]
		const boolgIGCR6 = await Core_Fi_V3TVzBJvy.transferFrom.call(addressPZqMSvG, addressEV0S2fh, uintgZLgwyj, {from: accounts[1]});
		const boolwYaMyqb = await Core_Fi_V3TVzBJvy.transferFrom.call(address7oYN0L, addressAUvMHlr, uintVjAriDA, {from: accounts[1]});
		const boolzeWqFth = await Core_Fi_V3TVzBJvy.approve.call(addressCKy9g13, uintSl46gxE, {from: accounts[2]});
		const boolhP33Hrw = await Core_Fi_V3TVzBJvy.transferFrom.call(addressoqzARB6, addresspy55rk3, uintw7zt64o, {from: accounts[0]});
		const uint256pkdWi3K = await Core_Fi_V3TVzBJvy.balanceOf.call(addressYvmXTl, {from: accounts[4]});
	});
})