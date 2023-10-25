const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinTnM8EY7 = await MetaCoin.new({from: accounts[1]});
		const uintMGeQWHs = BigInt("1190")
		const address0H6qAc = accounts[5]
		const uintQFMSj5B = BigInt("1602")
		const addressjElDJ27 = accounts[0]
		const booluLSYx13 = await MetaCoinTnM8EY7.sendCoin.call(address0H6qAc, uintMGeQWHs, {from: accounts[4]});
		const boolOY5mmLK = await MetaCoinTnM8EY7.sendCoin.call(addressjElDJ27, uintQFMSj5B, {from: accounts[1]});

		assert.equal(boolOY5mmLK, true)
		assert.equal(booluLSYx13, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinLgNOlcx = await MetaCoin.new({from: accounts[3]});
		const uintTrw7j3d = BigInt("1698")
		const addressQPOLD9O = accounts[4]
		const uintlmfqg1O = BigInt("1853")
		const addressgVnEjv2 = accounts[1]
		const uintDxtH4Dh = BigInt("66")
		const addressh9zV4W2 = accounts[4]
		const uintXLEFex8 = BigInt("4")
		const addressKjtfgrG = accounts[0]
		const boolQTtLMXj = await MetaCoinLgNOlcx.sendCoin.call(addressQPOLD9O, uintTrw7j3d, {from: accounts[0]});
		const boolKVYUKpU = await MetaCoinLgNOlcx.sendCoin.call(addressgVnEjv2, uintlmfqg1O, {from: accounts[0]});
		const boolwCFhaY = await MetaCoinLgNOlcx.sendCoin.call(addressh9zV4W2, uintDxtH4Dh, {from: accounts[5]});
		const boolquOLfBh = await MetaCoinLgNOlcx.sendCoin.call(addressKjtfgrG, uintXLEFex8, {from: accounts[3]});

		assert.equal(boolKVYUKpU, false)
		assert.equal(boolQTtLMXj, false)
		assert.equal(boolquOLfBh, true)
		assert.equal(boolwCFhaY, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinkvzVtAJ = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjeFAbVA = BigInt("580")
		const addressaJdavnA = accounts[0]
		const uintWLruwAi = BigInt("1754")
		const addressbHp5d7T = accounts[0]
		const uintlAlnVSo = BigInt("1156")
		const addressFyX2rp6 = accounts[0]
		const boolPHmEung = await MetaCoinkvzVtAJ.sendCoin.call(addressaJdavnA, uintjeFAbVA, {from: accounts[0]});
		const boolkLKPPms = await MetaCoinkvzVtAJ.sendCoin.call(addressbHp5d7T, uintWLruwAi, {from: "0x0000000000000000000000000000000000000001"});
		const boolAIXdE9L = await MetaCoinkvzVtAJ.sendCoin.call(addressFyX2rp6, uintlAlnVSo, {from: accounts[0]});
	});
})