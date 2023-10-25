const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2wDD9p1l = await MetaCoin2.new({from: accounts[4]});
		const addressB48LTJ = accounts[0]
		const addressmxpcofV = accounts[3]
		const addressjYkVHD = accounts[2]
		const uinto54qnDa = await MetaCoin2wDD9p1l.getBalance.call(addressB48LTJ, {from: accounts[4]});
		const uintZJ1bcV3 = await MetaCoin2wDD9p1l.getBalanceInEth.call(addressmxpcofV, {from: accounts[1]});
		const uintoORN4ND = await MetaCoin2wDD9p1l.getBalance.call(addressjYkVHD, {from: accounts[3]});

		assert.equal(uintZJ1bcV3, BigInt("0"))
		assert.equal(uinto54qnDa, BigInt("0"))
		assert.equal(uintoORN4ND, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2DKcArgi = await MetaCoin2.new({from: accounts[3]});
		const uintq6dggDF = BigInt("1782")
		const addressPLaYUx = accounts[3]
		const uintyiU1iYW = BigInt("1999")
		const addresskl3cP4g = accounts[2]
		const uintRRie4Iy = BigInt("705")
		const addressSrJogkd = accounts[1]
		const uintvE3g4be = BigInt("861")
		const addressZrsPOmb = accounts[4]
		const boolXPTtjfQ = await MetaCoin2DKcArgi.sendCoin.call(addressPLaYUx, uintq6dggDF, {from: accounts[5]});
		const boolg6mjNU8 = await MetaCoin2DKcArgi.sendCoin.call(addresskl3cP4g, uintyiU1iYW, {from: accounts[4]});
		const boolP05qG2z = await MetaCoin2DKcArgi.sendCoin.call(addressSrJogkd, uintRRie4Iy, {from: accounts[4]});
		const boolhzcIDNj = await MetaCoin2DKcArgi.sendCoin.call(addressZrsPOmb, uintvE3g4be, {from: accounts[4]});

		assert.equal(boolP05qG2z, false)
		assert.equal(boolXPTtjfQ, false)
		assert.equal(boolg6mjNU8, false)
		assert.equal(boolhzcIDNj, false)
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2LYBiEUs = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgWISlux = BigInt("1175")
		const addressUvxZdXh = accounts[3]
		const addressilBZIiO = accounts[4]
		const addressD5TFfFf = accounts[4]
		const boolVvjwUOr = await MetaCoin2LYBiEUs.sendCoin.call(addressUvxZdXh, uintgWISlux, {from: accounts[2]});
		const uintLqbAhUx = await MetaCoin2LYBiEUs.getBalanceInEth.call(addressilBZIiO, {from: accounts[2]});
		const uintv5fFGeH = await MetaCoin2LYBiEUs.getBalanceInEth.call(addressD5TFfFf, {from: accounts[0]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2C6JkAs = await MetaCoin2.new({from: accounts[1]});
		const uintP9KXen7 = BigInt("1491")
		const addressSCDDi8 = accounts[0]
		const addressIsE0tSA = accounts[4]
		const addressMSu3EZ = accounts[1]
		const addresstKkx9j = accounts[1]
		const uintwSDghO9 = BigInt("2")
		const addressBUUWIF0 = accounts[3]
		const boolSQoLX3F = await MetaCoin2C6JkAs.sendCoin.call(addressSCDDi8, uintP9KXen7, {from: accounts[1]});
		const uintAhcB6es = await MetaCoin2C6JkAs.getBalance.call(addressIsE0tSA, {from: accounts[1]});
		const uintuRhSK9u = await MetaCoin2C6JkAs.getBalance.call(addressMSu3EZ, {from: accounts[0]});
		const uintgGDKDzd = await MetaCoin2C6JkAs.getBalance.call(addresstKkx9j, {from: accounts[3]});
		const boolxoghRUj = await MetaCoin2C6JkAs.sendCoin.call(addressBUUWIF0, uintwSDghO9, {from: accounts[0]});

		assert.equal(boolSQoLX3F, true)
		assert.equal(boolxoghRUj, false)
		assert.equal(uintAhcB6es, BigInt("0"))
		assert.equal(uintgGDKDzd, BigInt("10000"))
		assert.equal(uintuRhSK9u, BigInt("10000"))
	});
})