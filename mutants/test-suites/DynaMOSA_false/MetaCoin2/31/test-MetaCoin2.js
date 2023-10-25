const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2f6fqU2z = await MetaCoin2.new({from: accounts[3]});
		const uinttOQ2OJw = BigInt("125")
		const addresszWWI42g = accounts[0]
		const uint7hpFha = BigInt("170")
		const addressid5hjyQ = accounts[2]
		const uintqk4upk5 = BigInt("1164")
		const addressNzyXzI7 = accounts[2]
		const boolzZg7l3 = await MetaCoin2f6fqU2z.sendCoin.call(addresszWWI42g, uinttOQ2OJw, {from: accounts[4]});
		const booliWkEvg = await MetaCoin2f6fqU2z.sendCoin.call(addressid5hjyQ, uint7hpFha, {from: accounts[1]});
		const booljMdLgRo = await MetaCoin2f6fqU2z.sendCoin.call(addressNzyXzI7, uintqk4upk5, {from: accounts[3]});

		assert.equal(booliWkEvg, false)
		assert.equal(booljMdLgRo, true)
		assert.equal(boolzZg7l3, false)
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2DT3mmQZ = await MetaCoin2.new({from: accounts[4]});
		const uintifyMsxL = BigInt("977")
		const addresscRJVS5x = accounts[3]
		const addressgrECGLP = accounts[5]
		const uintVVGZ9PG = BigInt("239")
		const addressnZdUOFF = accounts[1]
		const uintK2VxICz = BigInt("1542")
		const addressnVwPh1p = accounts[4]
		const boolq52Rpu6 = await MetaCoin2DT3mmQZ.sendCoin.call(addresscRJVS5x, uintifyMsxL, {from: accounts[1]});
		const uintN4bjIHT = await MetaCoin2DT3mmQZ.getBalanceInEth.call(addressgrECGLP, {from: accounts[4]});
		const boolXOW4Mvg = await MetaCoin2DT3mmQZ.sendCoin.call(addressnZdUOFF, uintVVGZ9PG, {from: accounts[0]});
		const boolXBOobDG = await MetaCoin2DT3mmQZ.sendCoin.call(addressnVwPh1p, uintK2VxICz, {from: accounts[5]});

		assert.equal(boolXBOobDG, false)
		assert.equal(boolXOW4Mvg, false)
		assert.equal(boolq52Rpu6, false)
		assert.equal(uintN4bjIHT, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2DNzM1Fi = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintt2x2fhs = BigInt("358")
		const addressz83LYke = accounts[2]
		const addressTtCEbSx = accounts[5]
		const addressxFJBF4W = accounts[4]
		const boolBiRdYK9 = await MetaCoin2DNzM1Fi.sendCoin.call(addressz83LYke, uintt2x2fhs, {from: accounts[4]});
		const uintvYze1ng = await MetaCoin2DNzM1Fi.getBalanceInEth.call(addressTtCEbSx, {from: "0x0000000000000000000000000000000000000001"});
		const uintSeiOoPB = await MetaCoin2DNzM1Fi.getBalanceInEth.call(addressxFJBF4W, {from: accounts[4]});
	});
})