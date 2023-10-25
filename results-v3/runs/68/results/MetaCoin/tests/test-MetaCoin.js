const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinEiyPXcd = await MetaCoin.new({from: accounts[2]});
		const uintLzlU3wd = BigInt("215")
		const address2rtVsq = accounts[4]
		const uintEVrnFMN = BigInt("859")
		const addressYrl0X7 = accounts[3]
		const uintyDZlpIH = BigInt("699")
		const addressI2T4bqr = accounts[3]
		const boolEt1YPwX = await MetaCoinEiyPXcd.sendCoin.call(address2rtVsq, uintLzlU3wd, {from: accounts[1]});
		const boolc0YfzcH = await MetaCoinEiyPXcd.sendCoin.call(addressYrl0X7, uintEVrnFMN, {from: accounts[1]});
		const boolr6r6HCN = await MetaCoinEiyPXcd.sendCoin.call(addressI2T4bqr, uintyDZlpIH, {from: accounts[2]});

		assert.equal(boolEt1YPwX, false)
		assert.equal(boolc0YfzcH, false)
		assert.equal(boolr6r6HCN, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinulbmeC = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlHaErmf = BigInt("1125")
		const addresshVaOB5 = accounts[1]
		const uintQSz6JpK = BigInt("699")
		const addressR1wZEfY = accounts[1]
		const uintwktDolH = BigInt("609")
		const addressZ7PkglB = accounts[5]
		const boolnZFwmMT = await MetaCoinulbmeC.sendCoin.call(addresshVaOB5, uintlHaErmf, {from: accounts[3]});
		const boolHK4uxdq = await MetaCoinulbmeC.sendCoin.call(addressR1wZEfY, uintQSz6JpK, {from: accounts[4]});
		const boolK1sQbY = await MetaCoinulbmeC.sendCoin.call(addressZ7PkglB, uintwktDolH, {from: accounts[2]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoiniTpNrba = await MetaCoin.new({from: accounts[0]});
		const uintHkCg1lU = BigInt("653")
		const addresswnCB2rh = accounts[4]
		const uintuEXFovu = BigInt("1843")
		const addressj7uRPK = accounts[0]
		const uintRLOQDX4 = BigInt("93")
		const addressmgXmpe = accounts[5]
		const uintxx5Y5pu = BigInt("1128")
		const addressUsEx15L = accounts[1]
		const uintYCDjPC5 = BigInt("59")
		const addressDrNqc50 = accounts[0]
		const uintsfEVFe5 = BigInt("476")
		const addressx6eL5Ob = accounts[4]
		const uintGDwP6JC = BigInt("41")
		const addressawIJYYZ = accounts[4]
		const uintNKYvYf0 = BigInt("209")
		const addressdOYbvxW = accounts[2]
		const uintJhenEQU = BigInt("10")
		const addressBlwRlYe = accounts[0]
		const uintudSW1V2 = BigInt("2017")
		const addressKFL31Vr = "0x0000000000000000000000000000000000000001"
		const uintYoWJbS9 = BigInt("1064")
		const addressTMUTwwy = accounts[5]
		const uint5m01E3 = BigInt("0")
		const addressu1Rg2l3 = accounts[5]
		const uintafVQJM0 = BigInt("1507")
		const addressDyCyI6f = "0x0000000000000000000000000000000000000001"
		const uintzIJ47mi = BigInt("109")
		const addressH2Rxq4 = accounts[2]
		const uinto9ZpN2L = BigInt("468")
		const addressn7IWe5W = accounts[0]
		const uintYYrHIwO = BigInt("1217")
		const addressold7ES5 = accounts[4]
		const uintjsFY6NF = BigInt("1373")
		const addressd3bQcIJ = accounts[0]
		const uintBWdAvqq = BigInt("1806")
		const addressBdDZ64D = accounts[3]
		const uintzQiARBa = BigInt("1643")
		const address21LsU7 = accounts[3]
		const uintitd55Tu = BigInt("1115")
		const addressTY9rmuM = accounts[3]
		const boole31SUL = await MetaCoiniTpNrba.sendCoin.call(addresswnCB2rh, uintHkCg1lU, {from: accounts[3]});
		const boolvoQKsyb = await MetaCoiniTpNrba.sendCoin.call(addressj7uRPK, uintuEXFovu, {from: accounts[4]});
		const boolrE89POO = await MetaCoiniTpNrba.sendCoin.call(addressmgXmpe, uintRLOQDX4, {from: accounts[0]});
		const boolN4zHKOo = await MetaCoiniTpNrba.sendCoin.call(addressUsEx15L, uintxx5Y5pu, {from: accounts[0]});
		const boolBpMfLrr = await MetaCoiniTpNrba.sendCoin.call(addressDrNqc50, uintYCDjPC5, {from: accounts[0]});
		const boolMVOy9Ts = await MetaCoiniTpNrba.sendCoin.call(addressx6eL5Ob, uintsfEVFe5, {from: accounts[2]});
		const boolVYjpFyM = await MetaCoiniTpNrba.sendCoin.call(addressawIJYYZ, uintGDwP6JC, {from: accounts[0]});
		const boolqUa7NXp = await MetaCoiniTpNrba.sendCoin.call(addressdOYbvxW, uintNKYvYf0, {from: accounts[3]});
		const boolK5eXDPU = await MetaCoiniTpNrba.sendCoin.call(addressBlwRlYe, uintJhenEQU, {from: "0x0000000000000000000000000000000000000001"});
		const boolBkPqbb = await MetaCoiniTpNrba.sendCoin.call(addressKFL31Vr, uintudSW1V2, {from: accounts[0]});
		const boolRDplAdl = await MetaCoiniTpNrba.sendCoin.call(addressTMUTwwy, uintYoWJbS9, {from: accounts[4]});
		const boolDRZmKdd = await MetaCoiniTpNrba.sendCoin.call(addressu1Rg2l3, uint5m01E3, {from: accounts[5]});
		const boolPDNeOJt = await MetaCoiniTpNrba.sendCoin.call(addressDyCyI6f, uintafVQJM0, {from: accounts[3]});
		const booleR2wzUj = await MetaCoiniTpNrba.sendCoin.call(addressH2Rxq4, uintzIJ47mi, {from: accounts[1]});
		const boollYiSSc8 = await MetaCoiniTpNrba.sendCoin.call(addressn7IWe5W, uinto9ZpN2L, {from: accounts[0]});
		const boolr86w6gF = await MetaCoiniTpNrba.sendCoin.call(addressold7ES5, uintYYrHIwO, {from: accounts[4]});
		const boolUlE4MIf = await MetaCoiniTpNrba.sendCoin.call(addressd3bQcIJ, uintjsFY6NF, {from: accounts[5]});
		const boolqpKhAi = await MetaCoiniTpNrba.sendCoin.call(addressBdDZ64D, uintBWdAvqq, {from: accounts[2]});
		const boolnCXZCe4 = await MetaCoiniTpNrba.sendCoin.call(address21LsU7, uintzQiARBa, {from: accounts[5]});
		const boolUedn8Q = await MetaCoiniTpNrba.sendCoin.call(addressTY9rmuM, uintitd55Tu, {from: accounts[3]});

		assert.equal(boolBkPqbb, true)
		assert.equal(boolBpMfLrr, true)
		assert.equal(boolDRZmKdd, true)
		assert.equal(boolK5eXDPU, false)
		assert.equal(boolMVOy9Ts, false)
		assert.equal(boolN4zHKOo, true)
		assert.equal(boolPDNeOJt, false)
		assert.equal(boolRDplAdl, false)
		assert.equal(boolUedn8Q, false)
		assert.equal(boolUlE4MIf, false)
		assert.equal(boolVYjpFyM, true)
		assert.equal(boole31SUL, false)
		assert.equal(booleR2wzUj, false)
		assert.equal(boollYiSSc8, true)
		assert.equal(boolnCXZCe4, false)
		assert.equal(boolqUa7NXp, false)
		assert.equal(boolqpKhAi, false)
		assert.equal(boolr86w6gF, false)
		assert.equal(boolrE89POO, true)
		assert.equal(boolvoQKsyb, false)
	});
})