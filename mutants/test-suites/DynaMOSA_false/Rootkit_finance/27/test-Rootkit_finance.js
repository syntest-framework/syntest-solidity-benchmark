const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeimcS1Qo = await Rootkit_finance.new({from: accounts[4]});
		const addressYx8e0X5 = accounts[3]
		const addressY9HUHrK = accounts[4]
		const uintgpHjK4K = BigInt("1789")
		const addresskx33VDV = accounts[2]
		const addressiTgFOL = accounts[0]
		const uintJkcE4X7 = BigInt("803")
		const addressrI95KFV = accounts[0]
		const addressev9BkhF = "0x0000000000000000000000000000000000000001"
		const uintmhVz0yg = await Rootkit_financeimcS1Qo.allowance.call(addressY9HUHrK, addressYx8e0X5, {from: accounts[3]});
		const boolzkACrg5 = await Rootkit_financeimcS1Qo.transferFrom.call(addressiTgFOL, addresskx33VDV, uintgpHjK4K, {from: accounts[4]});
		const boolGsz3JCZ = await Rootkit_financeimcS1Qo.transferFrom.call(addressev9BkhF, addressrI95KFV, uintJkcE4X7, {from: accounts[3]});

		assert.equal(boolGsz3JCZ, false)
		assert.equal(boolzkACrg5, false)
		assert.equal(uintmhVz0yg, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financekU3la9M = await Rootkit_finance.new({from: accounts[1]});
		const uintRUhWFd = BigInt("1192")
		const addressSFyw2me = accounts[2]
		const addressgxTJRf = accounts[5]
		const uint256Ksm2cP0 = await Rootkit_financekU3la9M.totalSupply.call({from: accounts[2]});
		const boolk8ePXaz = await Rootkit_financekU3la9M.transferFrom.call(addressgxTJRf, addressSFyw2me, uintRUhWFd, {from: accounts[3]});

		assert.equal(boolk8ePXaz, false)
		assert.equal(uint256Ksm2cP0, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeXOKVw3R = await Rootkit_finance.new({from: accounts[2]});
		const addressgp6Xyv4 = accounts[5]
		const uintLw5p2pW = BigInt("681")
		const addresscniIRZg = accounts[1]
		const addresslUpKPD = accounts[5]
		const uintGLUDI5G = BigInt("360")
		const addressj2kY6dU = "0x0000000000000000000000000000000000000001"
		const addresszXNBSD = accounts[4]
		const address68Mujt = accounts[3]
		const uint256CWwxFwa = await Rootkit_financeXOKVw3R.balanceOf.call(addressgp6Xyv4, {from: accounts[3]});
		const booldR4z4TI = await Rootkit_financeXOKVw3R.approve.call(addresscniIRZg, uintLw5p2pW, {from: accounts[5]});
		const uint256GZId3BL = await Rootkit_financeXOKVw3R.balanceOf.call(addresslUpKPD, {from: accounts[5]});
		const boolErFZsH = await Rootkit_financeXOKVw3R.transferFrom.call(addresszXNBSD, addressj2kY6dU, uintGLUDI5G, {from: accounts[3]});
		const uint256a0ZfVga = await Rootkit_financeXOKVw3R.balanceOf.call(address68Mujt, {from: accounts[2]});

		assert.equal(boolErFZsH, false)
		assert.equal(booldR4z4TI, true)
		assert.equal(uint256CWwxFwa, BigInt("0"))
		assert.equal(uint256GZId3BL, BigInt("0"))
		assert.equal(uint256a0ZfVga, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeA192FSa = await Rootkit_finance.new({from: accounts[2]});
		const uintZlKzQ02 = BigInt("1095")
		const addressxvpR43 = accounts[1]
		const uintyD2He8n = BigInt("661")
		const addressYf2Off = accounts[5]
		const addressHtO0eM6 = accounts[2]
		const boolBsizbOM = await Rootkit_financeA192FSa.transfer.call(addressxvpR43, uintZlKzQ02, {from: accounts[3]});
		const boolrvVlULm = await Rootkit_financeA192FSa.transfer.call(addressYf2Off, uintyD2He8n, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KW8CXuI = await Rootkit_financeA192FSa.balanceOf.call(addressHtO0eM6, {from: accounts[3]});

		assert.equal(boolBsizbOM, false)
		assert.equal(boolrvVlULm, false)
		assert.equal(uint256KW8CXuI, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financelNY45i = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSh1V0it = BigInt("1904")
		const addressdRtQ0Uq = accounts[1]
		const addressZzkuY5 = accounts[3]
		const addressikOoSKF = accounts[0]
		const uint256S0wVS3o = await Rootkit_financelNY45i.totalSupply.call({from: accounts[3]});
		const boolazScvXs = await Rootkit_financelNY45i.approve.call(addressdRtQ0Uq, uintSh1V0it, {from: accounts[3]});
		const uintFVhIPv0 = await Rootkit_financelNY45i.allowance.call(addressikOoSKF, addressZzkuY5, {from: accounts[2]});
	});
})