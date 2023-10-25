const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADUOJjoDK = await ZAD.new({from: accounts[0]});
		const uintPdKLvJU = BigInt("1680")
		const uintn5rNNf1 = BigInt("1260")
		const addressq3Naa1y = accounts[4]
		const stringoHiEMvW = await ZADUOJjoDK.symbol.call({from: accounts[3]});
//		const uint256kkT11rq = await ZADUOJjoDK._burn.call(uintPdKLvJU, {from: accounts[0]});
//		const boolC6o0TN = await ZADUOJjoDK.transfer.call(addressq3Naa1y, uintn5rNNf1, {from: accounts[0]});
//		const stringPy6esZ = await ZADUOJjoDK.symbol.call({from: accounts[2]});

		assert.equal(stringoHiEMvW, "ZAD")
		await expect(ZADUOJjoDK._burn.call(uintPdKLvJU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADOd3bATk = await ZAD.new({from: accounts[5]});
		const uintCyePi1p = BigInt("1381")
		const addresszS4VZos = accounts[0]
		const uintbGegEAa = BigInt("1541")
		const addressSxGOpjv = accounts[4]
		const addressYuh7GYH = accounts[0]
		const addressau0RzPj = accounts[5]
		const uintfu4NpDQ = BigInt("1532")
		const addresssnsGulV = accounts[2]
		const addressG5yMQcW = accounts[4]
//		const boolKyIAym = await ZADOd3bATk.transfer.call(addresszS4VZos, uintCyePi1p, {from: accounts[0]});
//		const boolw4zjATp = await ZADOd3bATk.approve.call(addressSxGOpjv, uintbGegEAa, {from: accounts[1]});
//		const uint256K3yROel = await ZADOd3bATk.allowance.call(addressau0RzPj, addressYuh7GYH, {from: accounts[3]});
//		const stringua1JpJj = await ZADOd3bATk.symbol.call({from: accounts[2]});
//		const boolXeywcTW = await ZADOd3bATk.approve.call(addresssnsGulV, uintfu4NpDQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tlJRqG2 = await ZADOd3bATk.balanceOf.call(addressG5yMQcW, {from: accounts[1]});

		await expect(ZADOd3bATk.transfer.call(addresszS4VZos, uintCyePi1p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZAD54vNAI = await ZAD.new({from: accounts[0]});
		const uintvl1DIjf = BigInt("604")
		const addressc7Qbda = accounts[5]
		const boolfaiPeap = await ZAD54vNAI.approve.call(addressc7Qbda, uintvl1DIjf, {from: accounts[4]});
		const uint256Wz8rWdl = await ZAD54vNAI.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfaiPeap, true)
		assert.equal(uint256Wz8rWdl, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADMBAM8aX = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintclAVDkf = BigInt("1355")
		const addressxGhanE3 = accounts[2]
		const addressypDvlcr = accounts[1]
		const uint256hJC4K1V = await ZADMBAM8aX.totalSupply.call({from: accounts[3]});
		const booldRfH9ed = await ZADMBAM8aX.transferFrom.call(addressypDvlcr, addressxGhanE3, uintclAVDkf, {from: accounts[0]});
		const stringm8uxMzm = await ZADMBAM8aX.name.call({from: accounts[0]});
		const stringvZdJQQL = await ZADMBAM8aX.name.call({from: accounts[3]});
	});

	it('test for ZAD', async () => {
		const ZADng4yd9t = await ZAD.new({from: accounts[3]});
		const uintgQBiLsX = BigInt("1726")
		const addresszVT3TR = accounts[1]
		const addressBMtfMtB = "0x0000000000000000000000000000000000000001"
		const uintjc91gk9 = BigInt("806")
		const addressbW9Z7cF = accounts[5]
		const addressnb1AU8 = accounts[1]
		const addressBl3BbUi = accounts[1]
		const addressPaalzXn = accounts[0]
		const uintF1NRjwC = BigInt("1310")
		const addressmQ70o86 = accounts[1]
		const addressAl3fIdx = accounts[0]
//		const boolO96gmeY = await ZADng4yd9t.transferFrom.call(addressBMtfMtB, addresszVT3TR, uintgQBiLsX, {from: accounts[1]});
//		const uint256TOpHDCU = await ZADng4yd9t.totalSupply.call({from: accounts[4]});
//		const boolWlSd81j = await ZADng4yd9t.transferFrom.call(addressnb1AU8, addressbW9Z7cF, uintjc91gk9, {from: accounts[4]});
//		const uint256ZiL66AM = await ZADng4yd9t.allowance.call(addressPaalzXn, addressBl3BbUi, {from: accounts[2]});
//		const boolSKfGXUD = await ZADng4yd9t.transferFrom.call(addressAl3fIdx, addressmQ70o86, uintF1NRjwC, {from: accounts[3]});

		await expect(ZADng4yd9t.transferFrom.call(addressBMtfMtB, addresszVT3TR, uintgQBiLsX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADAfG6Qps = await ZAD.new({from: accounts[3]});
		const uint8yI71Ec4 = await ZADAfG6Qps.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256oKnGZ9O = await ZADAfG6Qps.totalSupply.call({from: accounts[4]});

		assert.equal(uint256oKnGZ9O, BigInt("100000000000000000000000000"))
		assert.equal(uint8yI71Ec4, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADtAaa8ei = await ZAD.new({from: accounts[0]});
		const addressicmABtS = accounts[2]
		const addressTYZKeo9 = accounts[0]
		const addressAEB3OsR = "0x0000000000000000000000000000000000000001"
		const uint256IIFqdZY = await ZADtAaa8ei.allowance.call(addressTYZKeo9, addressicmABtS, {from: accounts[5]});
		const uint8sNqPhMn = await ZADtAaa8ei.decimals.call({from: accounts[1]});
		const uint256DhhyO4t = await ZADtAaa8ei.balanceOf.call(addressAEB3OsR, {from: accounts[4]});

		assert.equal(uint256DhhyO4t, BigInt("0"))
		assert.equal(uint256IIFqdZY, BigInt("0"))
		assert.equal(uint8sNqPhMn, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADVsckp22 = await ZAD.new({from: accounts[4]});
		const uintv8LTPxT = BigInt("407")
		const addressOePF6ay = accounts[0]
		const addressRMnmbUW = accounts[3]
		const boolXUIgzxV = await ZADVsckp22.increaseAllowance.call(addressOePF6ay, uintv8LTPxT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mmAOJV = await ZADVsckp22.balanceOf.call(addressRMnmbUW, {from: accounts[4]});
		const stringKtSuVjQ = await ZADVsckp22.symbol.call({from: accounts[3]});

		assert.equal(boolXUIgzxV, true)
		assert.equal(stringKtSuVjQ, "ZAD")
		assert.equal(uint256mmAOJV, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADtAaa8ei = await ZAD.new({from: accounts[0]});
		const addressjtSpvl9 = accounts[2]
		const addressMIy6BYm = accounts[0]
		const uintaFR1xT = BigInt("751")
		const addressxZFqR5U = accounts[4]
		const uintQUUXGnF = BigInt("722")
		const addresss5JPeYh = accounts[4]
		const addresstQGzVUg = "0x0000000000000000000000000000000000000001"
		const uint256IIFqdZY = await ZADtAaa8ei.allowance.call(addressMIy6BYm, addressjtSpvl9, {from: accounts[5]});
		const uint8sNqPhMn = await ZADtAaa8ei.decimals.call({from: accounts[1]});
		const boolOzdv3J = await ZADtAaa8ei.approve.call(addressxZFqR5U, uintaFR1xT, {from: "0x0000000000000000000000000000000000000001"});
		const stringxbfs4BX = await ZADtAaa8ei.name.call({from: accounts[4]});
		const boolbZkAWWL = await ZADtAaa8ei.increaseAllowance.call(addresss5JPeYh, uintQUUXGnF, {from: accounts[5]});
		const uint256DhhyO4t = await ZADtAaa8ei.balanceOf.call(addresstQGzVUg, {from: accounts[4]});

		assert.equal(boolOzdv3J, true)
		assert.equal(boolbZkAWWL, true)
		assert.equal(stringxbfs4BX, "Zadkiel")
		assert.equal(uint256DhhyO4t, BigInt("0"))
		assert.equal(uint256IIFqdZY, BigInt("0"))
		assert.equal(uint8sNqPhMn, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADAfG6Qps = await ZAD.new({from: accounts[3]});
		const uint1CdJqJ = BigInt("1292")
		const addressdkdlKjl = accounts[2]
		const uintWhTXfZP = BigInt("1901")
		const address6ngkyo = accounts[3]
		const uint8yI71Ec4 = await ZADAfG6Qps.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const booltcB8who = await ZADAfG6Qps.decreaseAllowance.call(addressdkdlKjl, uint1CdJqJ, {from: accounts[3]});
//		const booljLtYgPV = await ZADAfG6Qps.increaseAllowance.call(address6ngkyo, uintWhTXfZP, {from: accounts[1]});
//		const uint256oKnGZ9O = await ZADAfG6Qps.totalSupply.call({from: accounts[4]});

		assert.equal(uint8yI71Ec4, BigInt("18"))
		await expect(ZADAfG6Qps.decreaseAllowance.call(addressdkdlKjl, uint1CdJqJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})