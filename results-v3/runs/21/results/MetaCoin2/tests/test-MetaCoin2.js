const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2iJU2BHX = await MetaCoin2.new({from: accounts[1]});
		const addressBUmqBGx = accounts[3]
		const addressQ7zH6lk = accounts[1]
		const addressHTTIiBN = accounts[0]
		const uintZlPa4QW = await MetaCoin2iJU2BHX.getBalance.call(addressBUmqBGx, {from: "0x0000000000000000000000000000000000000001"});
		const uintPp5EQsA = await MetaCoin2iJU2BHX.getBalanceInEth.call(addressQ7zH6lk, {from: accounts[4]});
		const uintrs7epvu = await MetaCoin2iJU2BHX.getBalanceInEth.call(addressHTTIiBN, {from: accounts[0]});

		assert.equal(uintPp5EQsA, BigInt("20000"))
		assert.equal(uintZlPa4QW, BigInt("0"))
		assert.equal(uintrs7epvu, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2U6Aqjel = await MetaCoin2.new({from: accounts[1]});
		const uintfVfA66G = BigInt("914")
		const addressQPe3tRK = accounts[0]
		const addressfyKWHFX = accounts[0]
		const addressZ7rJLQb = accounts[5]
		const booluhTFMbH = await MetaCoin2U6Aqjel.sendCoin.call(addressQPe3tRK, uintfVfA66G, {from: accounts[4]});
		const uintKIDvzQG = await MetaCoin2U6Aqjel.getBalanceInEth.call(addressfyKWHFX, {from: accounts[3]});
		const uintbiDoUSC = await MetaCoin2U6Aqjel.getBalance.call(addressZ7rJLQb, {from: accounts[2]});

		assert.equal(booluhTFMbH, false)
		assert.equal(uintKIDvzQG, BigInt("0"))
		assert.equal(uintbiDoUSC, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2ZqxEFGc = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressoEbZAtM = accounts[1]
		const addressiPtHZD7 = accounts[1]
		const addressGcUPUqc = accounts[0]
		const uintI8najgw = await MetaCoin2ZqxEFGc.getBalanceInEth.call(addressoEbZAtM, {from: accounts[0]});
		const uintNbvguuL = await MetaCoin2ZqxEFGc.getBalance.call(addressiPtHZD7, {from: "0x0000000000000000000000000000000000000001"});
		const uintfPPML7O = await MetaCoin2ZqxEFGc.getBalanceInEth.call(addressGcUPUqc, {from: accounts[2]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2oWw7p53 = await MetaCoin2.new({from: accounts[3]});
		const uintV2rPJ8H = BigInt("10")
		const addressJSzVsb = accounts[4]
		const addressJOOMAK = accounts[0]
		const addressX3LwYH = accounts[2]
		const addressEsa6ego = accounts[4]
		const uintQO7ldt = BigInt("1959")
		const addressRtqTfVx = accounts[1]
		const addressy0RFBZj = "0x0000000000000000000000000000000000000001"
		const uintrUCWGEB = BigInt("198")
		const addressCg3PCQ3 = accounts[2]
		const addressUbEobZg = accounts[5]
		const boolPPC2DOG = await MetaCoin2oWw7p53.sendCoin.call(addressJSzVsb, uintV2rPJ8H, {from: accounts[0]});
		const uintu5KrUr = await MetaCoin2oWw7p53.getBalanceInEth.call(addressJOOMAK, {from: accounts[2]});
		const uintNYW2jKR = await MetaCoin2oWw7p53.getBalanceInEth.call(addressX3LwYH, {from: accounts[1]});
		const uintxsUqERI = await MetaCoin2oWw7p53.getBalanceInEth.call(addressEsa6ego, {from: accounts[4]});
		const boolJLy0H3X = await MetaCoin2oWw7p53.sendCoin.call(addressRtqTfVx, uintQO7ldt, {from: accounts[3]});
		const uintAeDA2Xl = await MetaCoin2oWw7p53.getBalanceInEth.call(addressy0RFBZj, {from: accounts[4]});
		const boolBSi1LbB = await MetaCoin2oWw7p53.sendCoin.call(addressCg3PCQ3, uintrUCWGEB, {from: accounts[1]});
		const uintC5g69Ns = await MetaCoin2oWw7p53.getBalance.call(addressUbEobZg, {from: accounts[4]});

		assert.equal(boolBSi1LbB, false)
		assert.equal(boolJLy0H3X, true)
		assert.equal(boolPPC2DOG, false)
		assert.equal(uintAeDA2Xl, BigInt("0"))
		assert.equal(uintC5g69Ns, BigInt("0"))
		assert.equal(uintNYW2jKR, BigInt("0"))
		assert.equal(uintu5KrUr, BigInt("0"))
		assert.equal(uintxsUqERI, BigInt("0"))
	});
})