const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2yk9JxTV = await MetaCoin2.new({from: accounts[0]});
		const address14vPNF = accounts[1]
		const addressbzTxBct = accounts[0]
		const addressMKWC4dV = accounts[1]
		const addressOMMKJmz = accounts[5]
		const uintsWB0Xj3 = BigInt("1950")
		const addressosQ5W06 = accounts[2]
		const uint8ztYmB = await MetaCoin2yk9JxTV.getBalanceInEth.call(address14vPNF, {from: accounts[0]});
		const uintuRXqhsD = await MetaCoin2yk9JxTV.getBalance.call(addressbzTxBct, {from: accounts[2]});
		const uintAiWfUA4 = await MetaCoin2yk9JxTV.getBalanceInEth.call(addressMKWC4dV, {from: accounts[2]});
		const uintwA1hHDB = await MetaCoin2yk9JxTV.getBalanceInEth.call(addressOMMKJmz, {from: accounts[4]});
		const boolwGUIRn3 = await MetaCoin2yk9JxTV.sendCoin.call(addressosQ5W06, uintsWB0Xj3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolwGUIRn3, false)
		assert.equal(uint8ztYmB, BigInt("0"))
		assert.equal(uintAiWfUA4, BigInt("0"))
		assert.equal(uintuRXqhsD, BigInt("10000"))
		assert.equal(uintwA1hHDB, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2OsbOSla = await MetaCoin2.new({from: accounts[0]});
		const uintmdTVC3v = BigInt("1609")
		const addressGrAV776 = accounts[3]
		const addressR41CuIR = accounts[3]
		const uintQiWUrfs = BigInt("1414")
		const addressw1iHuvK = accounts[4]
		const uintm5Tg9nJ = BigInt("900")
		const addressemNhgx = "0x0000000000000000000000000000000000000001"
		const addresswI01CrV = "0x0000000000000000000000000000000000000001"
		const boolaAbv6RW = await MetaCoin2OsbOSla.sendCoin.call(addressGrAV776, uintmdTVC3v, {from: accounts[3]});
		const uintGF7HiAx = await MetaCoin2OsbOSla.getBalance.call(addressR41CuIR, {from: accounts[3]});
		const boolBkItpns = await MetaCoin2OsbOSla.sendCoin.call(addressw1iHuvK, uintQiWUrfs, {from: accounts[0]});
		const booljFGvV63 = await MetaCoin2OsbOSla.sendCoin.call(addressemNhgx, uintm5Tg9nJ, {from: accounts[2]});
		const uintEVxj75J = await MetaCoin2OsbOSla.getBalanceInEth.call(addresswI01CrV, {from: accounts[1]});

		assert.equal(boolBkItpns, true)
		assert.equal(boolaAbv6RW, false)
		assert.equal(booljFGvV63, false)
		assert.equal(uintEVxj75J, BigInt("0"))
		assert.equal(uintGF7HiAx, BigInt("0"))
	});
})