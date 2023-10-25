const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3bcKi32s = await Core_Fi_V3.new({from: accounts[3]});
		const uintLzQ5T9Y = BigInt("1420")
		const addresstg5Le4 = "0x0000000000000000000000000000000000000001"
		const addressvDq775t = accounts[4]
		const uintCN3QySs = BigInt("1401")
		const addressL5mSwWS = accounts[3]
		const addresscQG6aEM = accounts[2]
		const addresslbIipL4 = accounts[0]
		const addressdxDclQs = accounts[3]
		const addressMGEmvs0 = "0x0000000000000000000000000000000000000001"
		const uintcm3Jv2C = BigInt("39")
		const addresscLoOxi1 = accounts[4]
		const uintMQkYhL7 = BigInt("1843")
		const addressDS9yVRp = accounts[0]
		const boolPECZsDY = await Core_Fi_V3bcKi32s.transferFrom.call(addressvDq775t, addresstg5Le4, uintLzQ5T9Y, {from: accounts[2]});
		const booleWUWHPw = await Core_Fi_V3bcKi32s.transferFrom.call(addresscQG6aEM, addressL5mSwWS, uintCN3QySs, {from: accounts[5]});
		const uint256HqRb3Yt = await Core_Fi_V3bcKi32s.balanceOf.call(addresslbIipL4, {from: accounts[2]});
		const uintEln7I4N = await Core_Fi_V3bcKi32s.allowance.call(addressMGEmvs0, addressdxDclQs, {from: accounts[1]});
		const boolPuVJf1v = await Core_Fi_V3bcKi32s.transfer.call(addresscLoOxi1, uintcm3Jv2C, {from: accounts[3]});
		const boolzdoNvUw = await Core_Fi_V3bcKi32s.approve.call(addressDS9yVRp, uintMQkYhL7, {from: accounts[1]});

		assert.equal(boolPECZsDY, false)
		assert.equal(boolPuVJf1v, true)
		assert.equal(booleWUWHPw, false)
		assert.equal(boolzdoNvUw, true)
		assert.equal(uint256HqRb3Yt, BigInt("0"))
		assert.equal(uintEln7I4N, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Zksdj7f = await Core_Fi_V3.new({from: accounts[3]});
		const uintt5vYfhB = BigInt("1291")
		const addresscjarqKL = "0x0000000000000000000000000000000000000001"
		const uint256FCYHTOD = await Core_Fi_V3Zksdj7f.totalSupply.call({from: accounts[4]});
		const uint256xZQhTFC = await Core_Fi_V3Zksdj7f.totalSupply.call({from: accounts[1]});
		const boolcxmSAdt = await Core_Fi_V3Zksdj7f.transfer.call(addresscjarqKL, uintt5vYfhB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolcxmSAdt, false)
		assert.equal(uint256FCYHTOD, BigInt("84000000000000000000000"))
		assert.equal(uint256xZQhTFC, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Qvdph7x = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrZpXcwT = accounts[4]
		const uintDV7Qa7w = BigInt("485")
		const addressnsNo9LE = accounts[2]
		const addressjvtruNQ = accounts[2]
		const addressqzstha = accounts[3]
		const uint256yxovSKP = await Core_Fi_V3Qvdph7x.balanceOf.call(addressrZpXcwT, {from: accounts[4]});
		const boolDv0t0iR = await Core_Fi_V3Qvdph7x.approve.call(addressnsNo9LE, uintDV7Qa7w, {from: accounts[4]});
		const uint256ICgvcEC = await Core_Fi_V3Qvdph7x.balanceOf.call(addressjvtruNQ, {from: accounts[3]});
		const uint256I1wxvKZ = await Core_Fi_V3Qvdph7x.totalSupply.call({from: accounts[2]});
		const uint256SXp3Im = await Core_Fi_V3Qvdph7x.balanceOf.call(addressqzstha, {from: accounts[2]});
	});
})