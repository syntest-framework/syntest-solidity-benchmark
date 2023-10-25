const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3d32AN1U = await Core_Fi_V3.new({from: accounts[1]});
		const uintYtS95Ab = BigInt("1946")
		const addressVdQ3U1r = accounts[4]
		const uintm8QJ7vz = BigInt("323")
		const addressNY5iOTG = accounts[0]
		const boolPZLTI5L = await Core_Fi_V3d32AN1U.transfer.call(addressVdQ3U1r, uintYtS95Ab, {from: accounts[3]});
		const boolwONhY9q = await Core_Fi_V3d32AN1U.transfer.call(addressNY5iOTG, uintm8QJ7vz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPZLTI5L, false)
		assert.equal(boolwONhY9q, false)
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3FumEu5 = await Core_Fi_V3.new({from: accounts[4]});
		const addressaqFjeoo = accounts[2]
		const addressGyidlER = "0x0000000000000000000000000000000000000001"
		const addressubtqmBa = "0x0000000000000000000000000000000000000001"
		const addressphyTTkR = accounts[0]
		const addressLiRYgVg = accounts[1]
		const addressbuEKqna = accounts[2]
		const uint256bOfTpwg = await Core_Fi_V3FumEu5.balanceOf.call(addressaqFjeoo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HXOkAz2 = await Core_Fi_V3FumEu5.balanceOf.call(addressGyidlER, {from: accounts[4]});
		const uinta4Otkau = await Core_Fi_V3FumEu5.allowance.call(addressphyTTkR, addressubtqmBa, {from: accounts[0]});
		const uintqMqtN6o = await Core_Fi_V3FumEu5.allowance.call(addressbuEKqna, addressLiRYgVg, {from: accounts[4]});

		assert.equal(uint256HXOkAz2, BigInt("0"))
		assert.equal(uint256bOfTpwg, BigInt("0"))
		assert.equal(uinta4Otkau, BigInt("0"))
		assert.equal(uintqMqtN6o, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3mIphUUr = await Core_Fi_V3.new({from: accounts[2]});
		const uintzjtjmVa = BigInt("493")
		const addressXHqD0YO = "0x0000000000000000000000000000000000000001"
		const uintS2WUao2 = BigInt("1608")
		const addresst983fwx = accounts[3]
		const addressS6KmFwX = accounts[2]
		const boolvQo5iB = await Core_Fi_V3mIphUUr.transfer.call(addressXHqD0YO, uintzjtjmVa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EKqQhg = await Core_Fi_V3mIphUUr.totalSupply.call({from: accounts[3]});
		const boolYUPoXeu = await Core_Fi_V3mIphUUr.transferFrom.call(addressS6KmFwX, addresst983fwx, uintS2WUao2, {from: accounts[3]});

		assert.equal(boolYUPoXeu, false)
		assert.equal(boolvQo5iB, false)
		assert.equal(uint256EKqQhg, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3hsnOjqD = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgPoMccv = BigInt("1055")
		const addressuljfk5 = accounts[2]
		const addressdAkQwmG = accounts[0]
		const uintnNVTjUS = BigInt("1201")
		const addressB8F6hV2 = accounts[1]
		const addressUlgygvo = accounts[1]
		const uint256tg0NuKB = await Core_Fi_V3hsnOjqD.totalSupply.call({from: accounts[3]});
		const boolQ8RxaGu = await Core_Fi_V3hsnOjqD.transferFrom.call(addressdAkQwmG, addressuljfk5, uintgPoMccv, {from: accounts[0]});
		const boolhqTK8dj = await Core_Fi_V3hsnOjqD.transferFrom.call(addressUlgygvo, addressB8F6hV2, uintnNVTjUS, {from: accounts[4]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V366M03z = await Core_Fi_V3.new({from: accounts[4]});
		const addressE1FHETQ = accounts[0]
		const uintCeEKa82 = BigInt("1804")
		const addressKGiexvK = accounts[1]
		const uint256lVYu0gU = await Core_Fi_V366M03z.balanceOf.call(addressE1FHETQ, {from: accounts[2]});
		const boolcNkCTI1 = await Core_Fi_V366M03z.approve.call(addressKGiexvK, uintCeEKa82, {from: accounts[0]});

		assert.equal(boolcNkCTI1, true)
		assert.equal(uint256lVYu0gU, BigInt("0"))
	});
})