const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3qlwddVy = await Core_Fi_V3.new({from: accounts[5]});
		const uintgkb1lfL = BigInt("1597")
		const addressNoKMQ3Q = accounts[1]
		const addressvLxrHFI = accounts[2]
		const uintTWJ6f3 = BigInt("1103")
		const addresspfnKT13 = accounts[2]
		const uintoFJbfN8 = BigInt("293")
		const addressvTjUqH1 = "0x0000000000000000000000000000000000000001"
		const booliYHBS8c = await Core_Fi_V3qlwddVy.transferFrom.call(addressvLxrHFI, addressNoKMQ3Q, uintgkb1lfL, {from: accounts[0]});
		const boolyGJF9p3 = await Core_Fi_V3qlwddVy.approve.call(addresspfnKT13, uintTWJ6f3, {from: accounts[4]});
		const boolmR8OqT = await Core_Fi_V3qlwddVy.transfer.call(addressvTjUqH1, uintoFJbfN8, {from: accounts[3]});

		assert.equal(booliYHBS8c, false)
		assert.equal(boolmR8OqT, false)
		assert.equal(boolyGJF9p3, true)
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3NxZGYx7 = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressd68HME5 = accounts[0]
		const addressUImpSZa = "0x0000000000000000000000000000000000000001"
		const addresszkoca7C = "0x0000000000000000000000000000000000000001"
		const uintqE5GaL = BigInt("1726")
		const addressxur2Q2w = accounts[3]
		const addresslV7rFHO = "0x0000000000000000000000000000000000000001"
		const uintqKJIDql = BigInt("1006")
		const addresswfvJKEg = accounts[2]
		const addressspzeeTY = accounts[1]
		const uint256EawYqEF = await Core_Fi_V3NxZGYx7.balanceOf.call(addressd68HME5, {from: accounts[4]});
		const uintphNGNJc = await Core_Fi_V3NxZGYx7.allowance.call(addresszkoca7C, addressUImpSZa, {from: accounts[5]});
		const boolUyt2rBt = await Core_Fi_V3NxZGYx7.transferFrom.call(addresslV7rFHO, addressxur2Q2w, uintqE5GaL, {from: accounts[1]});
		const boolbELcHt = await Core_Fi_V3NxZGYx7.approve.call(addresswfvJKEg, uintqKJIDql, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vCC6A8k = await Core_Fi_V3NxZGYx7.balanceOf.call(addressspzeeTY, {from: accounts[5]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3GkfC7DZ = await Core_Fi_V3.new({from: accounts[0]});
		const uintZpq4zA9 = BigInt("185")
		const addressbTCm8r2 = accounts[0]
		const addressUYL5MXN = accounts[2]
		const addressaRwRk1 = accounts[2]
		const addressVnWa0lj = accounts[3]
		const uintezL7Lhk = BigInt("523")
		const addressU5Xx9YJ = accounts[2]
		const boolnAo6MXd = await Core_Fi_V3GkfC7DZ.transferFrom.call(addressUYL5MXN, addressbTCm8r2, uintZpq4zA9, {from: accounts[1]});
		const uint256liUyiQj = await Core_Fi_V3GkfC7DZ.balanceOf.call(addressaRwRk1, {from: accounts[1]});
		const uint2565PdUsE = await Core_Fi_V3GkfC7DZ.balanceOf.call(addressVnWa0lj, {from: accounts[1]});
		const boolQoLicA6 = await Core_Fi_V3GkfC7DZ.transfer.call(addressU5Xx9YJ, uintezL7Lhk, {from: accounts[1]});

		assert.equal(boolQoLicA6, false)
		assert.equal(boolnAo6MXd, false)
		assert.equal(uint2565PdUsE, BigInt("0"))
		assert.equal(uint256liUyiQj, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3p1LH8H0 = await Core_Fi_V3.new({from: accounts[5]});
		const uintZYhPpj = BigInt("323")
		const addressZUS90RE = accounts[0]
		const uintp9MSbwb = BigInt("361")
		const addressF4hQQbR = accounts[0]
		const addresscOHrnu = accounts[4]
		const addressq28XAcp = accounts[1]
		const addresszGf2UKQ = accounts[5]
		const addressLTOjOwl = accounts[0]
		const uint7k78UK = BigInt("621")
		const addressod11cDw = accounts[5]
		const boolucxN84I = await Core_Fi_V3p1LH8H0.transfer.call(addressZUS90RE, uintZYhPpj, {from: "0x0000000000000000000000000000000000000001"});
		const boolgfDoqP7 = await Core_Fi_V3p1LH8H0.transfer.call(addressF4hQQbR, uintp9MSbwb, {from: accounts[2]});
		const uintAGNpgsT = await Core_Fi_V3p1LH8H0.allowance.call(addressq28XAcp, addresscOHrnu, {from: accounts[2]});
		const uintjJF45C = await Core_Fi_V3p1LH8H0.allowance.call(addressLTOjOwl, addresszGf2UKQ, {from: accounts[1]});
		const boolyHMcHKN = await Core_Fi_V3p1LH8H0.approve.call(addressod11cDw, uint7k78UK, {from: accounts[3]});

		assert.equal(boolgfDoqP7, false)
		assert.equal(boolucxN84I, false)
		assert.equal(boolyHMcHKN, true)
		assert.equal(uintAGNpgsT, BigInt("0"))
		assert.equal(uintjJF45C, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3WvNSRoS = await Core_Fi_V3.new({from: accounts[0]});
		const uintSk6lFf = BigInt("101")
		const addressuudVhn = accounts[0]
		const uintD3tQhOY = BigInt("1521")
		const addressCzkltD2 = accounts[5]
		const addressj1VSltf = accounts[1]
		const uintoDdEPPb = BigInt("1675")
		const addressZN3ujgm = "0x0000000000000000000000000000000000000001"
		const boolRhm4Nmw = await Core_Fi_V3WvNSRoS.approve.call(addressuudVhn, uintSk6lFf, {from: accounts[4]});
		const uint256bN0dpGi = await Core_Fi_V3WvNSRoS.totalSupply.call({from: accounts[4]});
		const boolrA3fsF0 = await Core_Fi_V3WvNSRoS.transferFrom.call(addressj1VSltf, addressCzkltD2, uintD3tQhOY, {from: accounts[2]});
		const booltqJA7M5 = await Core_Fi_V3WvNSRoS.approve.call(addressZN3ujgm, uintoDdEPPb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRhm4Nmw, true)
		assert.equal(boolrA3fsF0, false)
		assert.equal(booltqJA7M5, true)
		assert.equal(uint256bN0dpGi, BigInt("84000000000000000000000"))
	});
})