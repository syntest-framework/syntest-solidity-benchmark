const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2NMXRp9R = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCkWZRaf = BigInt("1729")
		const addressuf6aDtz = accounts[3]
		const addressUSNbe1P = accounts[0]
		const addressTO0Ggb3 = accounts[1]
		const addressveuqzqb = accounts[2]
		const boolWWd4LbZ = await MetaCoin2NMXRp9R.sendCoin.call(addressuf6aDtz, uintCkWZRaf, {from: accounts[3]});
		const uintvrA4T2V = await MetaCoin2NMXRp9R.getBalance.call(addressUSNbe1P, {from: accounts[3]});
		const uinttnSb38O = await MetaCoin2NMXRp9R.getBalance.call(addressTO0Ggb3, {from: accounts[4]});
		const uintQqdR7Hf = await MetaCoin2NMXRp9R.getBalanceInEth.call(addressveuqzqb, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin24DJO8L = await MetaCoin2.new({from: accounts[2]});
		const addressasyVfAM = accounts[4]
		const uintiGozCwf = BigInt("1121")
		const addresswAxOqAo = accounts[3]
		const addressKwIyXYy = accounts[5]
		const addressFH8Jle = accounts[0]
		const addressEc0zFpR = accounts[0]
		const uintS81U1M = BigInt("624")
		const addressIZJKp3E = accounts[5]
		const uintaF0iwnZ = await MetaCoin24DJO8L.getBalance.call(addressasyVfAM, {from: accounts[0]});
		const boolObgphnp = await MetaCoin24DJO8L.sendCoin.call(addresswAxOqAo, uintiGozCwf, {from: accounts[1]});
		const uintFKz3kIr = await MetaCoin24DJO8L.getBalanceInEth.call(addressKwIyXYy, {from: "0x0000000000000000000000000000000000000001"});
		const uintI7ZVXTL = await MetaCoin24DJO8L.getBalanceInEth.call(addressFH8Jle, {from: "0x0000000000000000000000000000000000000001"});
		const uintAjKtQHf = await MetaCoin24DJO8L.getBalanceInEth.call(addressEc0zFpR, {from: accounts[4]});
		const boolNz9TFrt = await MetaCoin24DJO8L.sendCoin.call(addressIZJKp3E, uintS81U1M, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNz9TFrt, false)
		assert.equal(boolObgphnp, false)
		assert.equal(uintAjKtQHf, BigInt("0"))
		assert.equal(uintFKz3kIr, BigInt("0"))
		assert.equal(uintI7ZVXTL, BigInt("0"))
		assert.equal(uintaF0iwnZ, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2ydoSQVZ = await MetaCoin2.new({from: accounts[3]});
		const addressrKnUGxi = "0x0000000000000000000000000000000000000001"
		const addressk7LUjNK = accounts[4]
		const addressnlk1RM = accounts[0]
		const uintl4iWNNP = BigInt("1843")
		const addresswfv4eZ = accounts[0]
		const addressIMovpxX = accounts[5]
		const addresslS0fzay = accounts[2]
		const uintjk43Mx5 = await MetaCoin2ydoSQVZ.getBalanceInEth.call(addressrKnUGxi, {from: accounts[0]});
		const uintSoA6h7w = await MetaCoin2ydoSQVZ.getBalanceInEth.call(addressk7LUjNK, {from: accounts[3]});
		const uintI7NinEi = await MetaCoin2ydoSQVZ.getBalanceInEth.call(addressnlk1RM, {from: "0x0000000000000000000000000000000000000001"});
		const boolK3idvK = await MetaCoin2ydoSQVZ.sendCoin.call(addresswfv4eZ, uintl4iWNNP, {from: accounts[3]});
		const uintv3NC3AC = await MetaCoin2ydoSQVZ.getBalance.call(addressIMovpxX, {from: accounts[3]});
		const uintpjrQMH1 = await MetaCoin2ydoSQVZ.getBalanceInEth.call(addresslS0fzay, {from: accounts[3]});

		assert.equal(boolK3idvK, true)
		assert.equal(uintI7NinEi, BigInt("0"))
		assert.equal(uintSoA6h7w, BigInt("0"))
		assert.equal(uintjk43Mx5, BigInt("0"))
		assert.equal(uintpjrQMH1, BigInt("0"))
		assert.equal(uintv3NC3AC, BigInt("0"))
	});
})