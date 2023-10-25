const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3rytVDBw = await Core_Fi_V3.new({from: accounts[3]});
		const addressAgLcxZH = accounts[1]
		const uintF3gvg64 = BigInt("1000")
		const addressEg2T2b = accounts[4]
		const addresso072IAp = accounts[5]
		const addressHlBu7cY = accounts[3]
		const addresspJTGUfX = accounts[1]
		const addressJNrUdJ = accounts[4]
		const uint256XzDMx7I = await Core_Fi_V3rytVDBw.balanceOf.call(addressAgLcxZH, {from: accounts[2]});
		const boolh7dCT2w = await Core_Fi_V3rytVDBw.transfer.call(addressEg2T2b, uintF3gvg64, {from: accounts[2]});
		const uint256rz4rztC = await Core_Fi_V3rytVDBw.balanceOf.call(addresso072IAp, {from: accounts[2]});
		const uint256jVojGq = await Core_Fi_V3rytVDBw.balanceOf.call(addressHlBu7cY, {from: accounts[4]});
		const uinthQMQ6lG = await Core_Fi_V3rytVDBw.allowance.call(addressJNrUdJ, addresspJTGUfX, {from: accounts[1]});

		assert.equal(boolh7dCT2w, false)
		assert.equal(uint256XzDMx7I, BigInt("0"))
		assert.equal(uint256jVojGq, BigInt("84000000000000000000000"))
		assert.equal(uint256rz4rztC, BigInt("0"))
		assert.equal(uinthQMQ6lG, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3FxkW8Hx = await Core_Fi_V3.new({from: accounts[0]});
		const uintk2d4yV = BigInt("665")
		const addresskUS5XUC = accounts[5]
		const addressYGEVFVX = accounts[4]
		const uint256vDXQ9dh = await Core_Fi_V3FxkW8Hx.totalSupply.call({from: accounts[0]});
		const uint256wctUzFP = await Core_Fi_V3FxkW8Hx.totalSupply.call({from: accounts[1]});
		const uint256UGaYHGO = await Core_Fi_V3FxkW8Hx.totalSupply.call({from: accounts[2]});
		const boolMA0q4Ti = await Core_Fi_V3FxkW8Hx.transfer.call(addresskUS5XUC, uintk2d4yV, {from: accounts[3]});
		const uint256WihkGe = await Core_Fi_V3FxkW8Hx.balanceOf.call(addressYGEVFVX, {from: accounts[4]});

		assert.equal(boolMA0q4Ti, false)
		assert.equal(uint256UGaYHGO, BigInt("84000000000000000000000"))
		assert.equal(uint256WihkGe, BigInt("0"))
		assert.equal(uint256vDXQ9dh, BigInt("84000000000000000000000"))
		assert.equal(uint256wctUzFP, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Sg2xwKj = await Core_Fi_V3.new({from: accounts[5]});
		const uintV8yVwyU = BigInt("1871")
		const addresslU2sBL = accounts[4]
		const uintOl6y4KH = BigInt("238")
		const addresstKgWscU = accounts[1]
		const addressSjIkg7i = accounts[1]
		const boolPXo1pwF = await Core_Fi_V3Sg2xwKj.transfer.call(addresslU2sBL, uintV8yVwyU, {from: accounts[4]});
		const boolMq4M46o = await Core_Fi_V3Sg2xwKj.transferFrom.call(addressSjIkg7i, addresstKgWscU, uintOl6y4KH, {from: accounts[4]});

		assert.equal(boolMq4M46o, false)
		assert.equal(boolPXo1pwF, false)
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Hv8a6X = await Core_Fi_V3.new({from: accounts[3]});
		const uintiUmZlOG = BigInt("295")
		const addressKqQfejJ = accounts[2]
		const uintJVgkpvv = BigInt("2045")
		const addressRAjAEv = accounts[1]
		const uintEM469q = BigInt("1925")
		const addressu0Uye4N = "0x0000000000000000000000000000000000000001"
		const boolU4HtYHW = await Core_Fi_V3Hv8a6X.transfer.call(addressKqQfejJ, uintiUmZlOG, {from: accounts[4]});
		const boolK2gf819 = await Core_Fi_V3Hv8a6X.approve.call(addressRAjAEv, uintJVgkpvv, {from: accounts[3]});
		const uint256lMpp7XP = await Core_Fi_V3Hv8a6X.totalSupply.call({from: accounts[5]});
		const boolqZTlYlq = await Core_Fi_V3Hv8a6X.transfer.call(addressu0Uye4N, uintEM469q, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolK2gf819, true)
		assert.equal(boolU4HtYHW, false)
		assert.equal(boolqZTlYlq, false)
		assert.equal(uint256lMpp7XP, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3cIqziPB = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVmKNgpq = BigInt("1833")
		const addresskrK2Cdh = accounts[4]
		const addressuTXCOnl = accounts[4]
		const uintpVj83DY = BigInt("60")
		const addressrukN44Y = accounts[1]
		const addresshgC51K = accounts[1]
		const addressptVUMWA = accounts[4]
		const addressqUxia0G = accounts[3]
		const boolL1USFtX = await Core_Fi_V3cIqziPB.transferFrom.call(addressuTXCOnl, addresskrK2Cdh, uintVmKNgpq, {from: accounts[4]});
		const boolUmJU9r = await Core_Fi_V3cIqziPB.transferFrom.call(addresshgC51K, addressrukN44Y, uintpVj83DY, {from: accounts[2]});
		const uintXM4ANKc = await Core_Fi_V3cIqziPB.allowance.call(addressqUxia0G, addressptVUMWA, {from: accounts[0]});
	});
})