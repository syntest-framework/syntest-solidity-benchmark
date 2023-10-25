const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCointMXA1un = await MetaCoin.new({from: accounts[0]});
		const uintaf56ji0 = BigInt("1410")
		const addressd67gzX4 = accounts[2]
		const uintiCcLo3W = BigInt("638")
		const addressCPnK9lC = accounts[2]
		const uintgJynguA = BigInt("1571")
		const addressWZMl2O3 = accounts[4]
		const uintusFqX5 = BigInt("769")
		const addressLrOQmWY = accounts[3]
		const boolAYZMWkQ = await MetaCointMXA1un.sendCoin.call(addressd67gzX4, uintaf56ji0, {from: accounts[0]});
		const boolvMiv8Xu = await MetaCointMXA1un.sendCoin.call(addressCPnK9lC, uintiCcLo3W, {from: accounts[4]});
		const boolo5QAD1 = await MetaCointMXA1un.sendCoin.call(addressWZMl2O3, uintgJynguA, {from: accounts[0]});
		const booldoMJmKX = await MetaCointMXA1un.sendCoin.call(addressLrOQmWY, uintusFqX5, {from: accounts[3]});

		assert.equal(boolAYZMWkQ, true)
		assert.equal(booldoMJmKX, false)
		assert.equal(boolo5QAD1, true)
		assert.equal(boolvMiv8Xu, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinf5tvCP = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvQ9rC4l = BigInt("527")
		const addressKpDRS4z = "0x0000000000000000000000000000000000000001"
		const uintThLGpo = BigInt("323")
		const addressxef45fc = accounts[1]
		const uintvTaZlps = BigInt("448")
		const addressSASaLr8 = accounts[3]
		const uintf5hMTso = BigInt("1072")
		const addresseNvnIc = "0x0000000000000000000000000000000000000001"
		const uintCCpBzWS = BigInt("1415")
		const addressdlJVVQj = accounts[5]
		const uintFVVkIOm = BigInt("1635")
		const addresssNS8Ra0 = accounts[2]
		const booltGWBr1L = await MetaCoinf5tvCP.sendCoin.call(addressKpDRS4z, uintvQ9rC4l, {from: accounts[4]});
		const bool2pnTBF = await MetaCoinf5tvCP.sendCoin.call(addressxef45fc, uintThLGpo, {from: accounts[2]});
		const boolFKExZze = await MetaCoinf5tvCP.sendCoin.call(addressSASaLr8, uintvTaZlps, {from: accounts[4]});
		const booloEPUBUK = await MetaCoinf5tvCP.sendCoin.call(addresseNvnIc, uintf5hMTso, {from: accounts[1]});
		const boolGZzs4Qd = await MetaCoinf5tvCP.sendCoin.call(addressdlJVVQj, uintCCpBzWS, {from: accounts[5]});
		const boolfVPVkJQ = await MetaCoinf5tvCP.sendCoin.call(addresssNS8Ra0, uintFVVkIOm, {from: accounts[4]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinSJKAoLv = await MetaCoin.new({from: accounts[4]});
		const uintAkEUC3W = BigInt("292")
		const addressctFxuAQ = accounts[4]
		const uintJiidrH2 = BigInt("0")
		const addressPcf3rY0 = accounts[5]
		const boolUHYFLvt = await MetaCoinSJKAoLv.sendCoin.call(addressctFxuAQ, uintAkEUC3W, {from: accounts[0]});
		const boolTxegBDm = await MetaCoinSJKAoLv.sendCoin.call(addressPcf3rY0, uintJiidrH2, {from: accounts[4]});

		assert.equal(boolTxegBDm, true)
		assert.equal(boolUHYFLvt, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinSJKAoLv = await MetaCoin.new({from: accounts[4]});
		const uintTUPGTg = BigInt("3115")
		const addresswGXEPkZ = accounts[10]
		const uintQeRcVjR = BigInt("1055")
		const addressvm0BD2R = accounts[3]
		const uintqsMX8sy = BigInt("613")
		const addressO5LbC2K = accounts[0]
		const uintcG0WTFj = BigInt("1197")
		const addressRzVuWFY = accounts[1]
//		const boolufMgD3Q = await MetaCoinSJKAoLv.sendCoin.call(addresswGXEPkZ, uintTUPGTg, {from: accounts[4]});
//		const boolIxXTAJZ = await MetaCoinSJKAoLv.sendCoin.call(addressvm0BD2R, uintQeRcVjR, {from: accounts[5]});
//		const boolpgjnonL = await MetaCoinSJKAoLv.sendCoin.call(addressO5LbC2K, uintqsMX8sy, {from: accounts[3]});
//		const boolbUjWG9E = await MetaCoinSJKAoLv.sendCoin.call(addressRzVuWFY, uintcG0WTFj, {from: accounts[1]});

		await expect(MetaCoinSJKAoLv.sendCoin.call(addresswGXEPkZ, uintTUPGTg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})