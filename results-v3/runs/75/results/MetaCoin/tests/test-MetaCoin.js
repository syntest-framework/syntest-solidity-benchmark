const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinQYrxiab = await MetaCoin.new({from: accounts[3]});
		const uintquS6b4v = BigInt("1554")
		const addressaLKGLH = accounts[4]
		const uintkzVmKnZ = BigInt("412")
		const addressEEoQpLQ = accounts[4]
		const uintGSYvIs2 = BigInt("1429")
		const addressAzOccCz = accounts[4]
		const uinthnCvYk9 = BigInt("1761")
		const addressvInkrEh = accounts[3]
		const uintW09DK0V = BigInt("619")
		const addressmiR7zZg = accounts[2]
		const boolBgnzBd2 = await MetaCoinQYrxiab.sendCoin.call(addressaLKGLH, uintquS6b4v, {from: "0x0000000000000000000000000000000000000001"});
		const boolYpcLz8a = await MetaCoinQYrxiab.sendCoin.call(addressEEoQpLQ, uintkzVmKnZ, {from: accounts[0]});
		const boolbDT61F = await MetaCoinQYrxiab.sendCoin.call(addressAzOccCz, uintGSYvIs2, {from: accounts[1]});
		const boolTklifSM = await MetaCoinQYrxiab.sendCoin.call(addressvInkrEh, uinthnCvYk9, {from: accounts[5]});
		const boolpn6iCSN = await MetaCoinQYrxiab.sendCoin.call(addressmiR7zZg, uintW09DK0V, {from: accounts[4]});

		assert.equal(boolBgnzBd2, false)
		assert.equal(boolTklifSM, false)
		assert.equal(boolYpcLz8a, false)
		assert.equal(boolbDT61F, false)
		assert.equal(boolpn6iCSN, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinOwTYbKR = await MetaCoin.new({from: accounts[0]});
		const uintlR6kere = BigInt("1630")
		const addressE4kjAE = accounts[5]
		const uintTBRaIFO = BigInt("1553")
		const address8ZJWsh = accounts[1]
		const uintlyxniqH = BigInt("394")
		const addressl9o5Uxc = accounts[1]
		const boolAYuYwhB = await MetaCoinOwTYbKR.sendCoin.call(addressE4kjAE, uintlR6kere, {from: accounts[0]});
		const boolHdbyGAy = await MetaCoinOwTYbKR.sendCoin.call(address8ZJWsh, uintTBRaIFO, {from: accounts[4]});
		const boolj99NTcW = await MetaCoinOwTYbKR.sendCoin.call(addressl9o5Uxc, uintlyxniqH, {from: accounts[3]});

		assert.equal(boolAYuYwhB, true)
		assert.equal(boolHdbyGAy, false)
		assert.equal(boolj99NTcW, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinx9bGemI = await MetaCoin.new({from: accounts[4]});
		const uintqPWvIow = BigInt("756")
		const addressB8WWrfk = accounts[2]
		const uintam7fOZJ = BigInt("1311")
		const addressnOV4YnN = accounts[4]
		const uintTqYNB6a = BigInt("601")
		const addressrI1DBVn = accounts[0]
		const uintQsjgif = BigInt("326")
		const addressytKOu45 = accounts[3]
		const uintl3dw8Ro = BigInt("4")
		const addressn34mnJT = accounts[5]
		const uintNwMWDZJ = BigInt("1965")
		const addressNgNQI8P = accounts[1]
		const uintOuDGR5F = BigInt("1009")
		const address7KYyPb = accounts[4]
		const boolgpIMVjv = await MetaCoinx9bGemI.sendCoin.call(addressB8WWrfk, uintqPWvIow, {from: accounts[5]});
		const boolbeQ8B5n = await MetaCoinx9bGemI.sendCoin.call(addressnOV4YnN, uintam7fOZJ, {from: accounts[2]});
		const boolQUzrH0B = await MetaCoinx9bGemI.sendCoin.call(addressrI1DBVn, uintTqYNB6a, {from: accounts[2]});
		const boolncauPLk = await MetaCoinx9bGemI.sendCoin.call(addressytKOu45, uintQsjgif, {from: accounts[4]});
		const boolMJSnBnk = await MetaCoinx9bGemI.sendCoin.call(addressn34mnJT, uintl3dw8Ro, {from: accounts[4]});
		const boollhLsNZa = await MetaCoinx9bGemI.sendCoin.call(addressNgNQI8P, uintNwMWDZJ, {from: accounts[1]});
		const boolMKVmte = await MetaCoinx9bGemI.sendCoin.call(address7KYyPb, uintOuDGR5F, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMJSnBnk, true)
		assert.equal(boolMKVmte, false)
		assert.equal(boolQUzrH0B, false)
		assert.equal(boolbeQ8B5n, false)
		assert.equal(boolgpIMVjv, false)
		assert.equal(boollhLsNZa, false)
		assert.equal(boolncauPLk, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinrt4u8Ts = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcnyBoFB = BigInt("1368")
		const addresswZseva9 = accounts[5]
		const uintVwe5FQs = BigInt("1842")
		const addressPRILzdt = "0x0000000000000000000000000000000000000001"
		const booleGT4m0B = await MetaCoinrt4u8Ts.sendCoin.call(addresswZseva9, uintcnyBoFB, {from: accounts[0]});
		const boolY8G9jYR = await MetaCoinrt4u8Ts.sendCoin.call(addressPRILzdt, uintVwe5FQs, {from: accounts[5]});
	});
})