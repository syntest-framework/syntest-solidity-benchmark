const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V31HvkC5 = await Core_Fi_V3.new({from: accounts[2]});
		const uintuDnDoqf = BigInt("1722")
		const addresseCc7tQw = accounts[2]
		const addressNWjKGK0 = accounts[5]
		const uintn4blqSM = BigInt("1186")
		const addressApKyJTi = accounts[4]
		const addressCLXv0j6 = "0x0000000000000000000000000000000000000001"
		const uint256nlUNiAu = await Core_Fi_V31HvkC5.totalSupply.call({from: accounts[1]});
		const boolqvdqn3B = await Core_Fi_V31HvkC5.transferFrom.call(addressNWjKGK0, addresseCc7tQw, uintuDnDoqf, {from: accounts[1]});
		const boolISoVwq6 = await Core_Fi_V31HvkC5.transferFrom.call(addressCLXv0j6, addressApKyJTi, uintn4blqSM, {from: accounts[3]});

		assert.equal(boolISoVwq6, false)
		assert.equal(boolqvdqn3B, false)
		assert.equal(uint256nlUNiAu, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3dE3Y7Vn = await Core_Fi_V3.new({from: accounts[4]});
		const addresstY5AreZ = accounts[4]
		const addresshKMb2QU = accounts[1]
		const addressd93s6di = accounts[3]
		const uint2563vFaO8 = await Core_Fi_V3dE3Y7Vn.balanceOf.call(addresstY5AreZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintjPjoSZw = await Core_Fi_V3dE3Y7Vn.allowance.call(addressd93s6di, addresshKMb2QU, {from: accounts[2]});

		assert.equal(uint2563vFaO8, BigInt("84000000000000000000000"))
		assert.equal(uintjPjoSZw, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3iOeKCk = await Core_Fi_V3.new({from: accounts[1]});
		const addressjuKcj0G = accounts[4]
		const uintS6VjzwU = BigInt("1110")
		const addressllK49LI = accounts[5]
		const uint256ivCxqdu = await Core_Fi_V3iOeKCk.balanceOf.call(addressjuKcj0G, {from: accounts[2]});
		const booldkoMfWI = await Core_Fi_V3iOeKCk.approve.call(addressllK49LI, uintS6VjzwU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldkoMfWI, true)
		assert.equal(uint256ivCxqdu, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3H2sNKu = await Core_Fi_V3.new({from: accounts[3]});
		const uintSaCKr0u = BigInt("586")
		const addressg4bDXiq = accounts[3]
		const addressWmDoIoe = accounts[2]
		const addressxP9JSMy = accounts[3]
		const addressuXtj5cd = accounts[2]
		const uintz33rbXx = BigInt("1092")
		const addressWPKEMFf = accounts[0]
		const uintk6DU8F6 = BigInt("1432")
		const addressx52ZanA = accounts[3]
		const addressdKDmaEJ = accounts[0]
		const boolK9ucRlt = await Core_Fi_V3H2sNKu.transferFrom.call(addressWmDoIoe, addressg4bDXiq, uintSaCKr0u, {from: "0x0000000000000000000000000000000000000001"});
		const uintUSBw2X4 = await Core_Fi_V3H2sNKu.allowance.call(addressuXtj5cd, addressxP9JSMy, {from: accounts[1]});
		const boolhfwOOoG = await Core_Fi_V3H2sNKu.approve.call(addressWPKEMFf, uintz33rbXx, {from: accounts[3]});
		const boolGI3nfC1 = await Core_Fi_V3H2sNKu.transfer.call(addressx52ZanA, uintk6DU8F6, {from: accounts[1]});
		const uint256Bt2cmmG = await Core_Fi_V3H2sNKu.balanceOf.call(addressdKDmaEJ, {from: accounts[5]});

		assert.equal(boolGI3nfC1, false)
		assert.equal(boolK9ucRlt, false)
		assert.equal(boolhfwOOoG, true)
		assert.equal(uint256Bt2cmmG, BigInt("0"))
		assert.equal(uintUSBw2X4, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3yOU3XOn = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintOUQA85m = BigInt("951")
		const addressqkO1HV = accounts[2]
		const uintClOiNzA = BigInt("1447")
		const addressb3LssDT = accounts[0]
		const addressT7DpxWQ = accounts[2]
		const addresshF7erGb = accounts[3]
		const addressVmj0c0 = accounts[4]
		const uintapJByum = BigInt("1749")
		const addressf5K6nMO = accounts[5]
		const uintf74iZ9 = BigInt("593")
		const addressCL1hiar = accounts[3]
		const addressQEdr6O7 = accounts[5]
		const addresszKDfhsm = accounts[2]
		const boolASwL49x = await Core_Fi_V3yOU3XOn.approve.call(addressqkO1HV, uintOUQA85m, {from: accounts[0]});
		const bool0H0jRB = await Core_Fi_V3yOU3XOn.transferFrom.call(addressT7DpxWQ, addressb3LssDT, uintClOiNzA, {from: accounts[1]});
		const uintZFP0hEg = await Core_Fi_V3yOU3XOn.allowance.call(addressVmj0c0, addresshF7erGb, {from: accounts[3]});
		const boolNS5a5r = await Core_Fi_V3yOU3XOn.transfer.call(addressf5K6nMO, uintapJByum, {from: accounts[4]});
		const boolDw3FCd6 = await Core_Fi_V3yOU3XOn.transfer.call(addressCL1hiar, uintf74iZ9, {from: accounts[1]});
		const uintMXep9eI = await Core_Fi_V3yOU3XOn.allowance.call(addresszKDfhsm, addressQEdr6O7, {from: accounts[4]});
	});
})