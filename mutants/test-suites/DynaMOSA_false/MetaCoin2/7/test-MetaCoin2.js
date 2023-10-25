const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2vhE0JGN = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdIeJJMQ = accounts[2]
		const addressspf1YvF = accounts[1]
		const addresszeTePC2 = accounts[0]
		const uintR7dXduW = await MetaCoin2vhE0JGN.getBalance.call(addressdIeJJMQ, {from: accounts[1]});
		const uintSpuRuN7 = await MetaCoin2vhE0JGN.getBalance.call(addressspf1YvF, {from: accounts[0]});
		const uintohIIzQn = await MetaCoin2vhE0JGN.getBalance.call(addresszeTePC2, {from: accounts[3]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2aba9iNd = await MetaCoin2.new({from: accounts[1]});
		const addressi4rcdpN = accounts[1]
		const addressyMnEpNi = accounts[2]
		const addressRWfnz1q = accounts[1]
		const addressAbEkHE = accounts[4]
		const uintZvBDpGU = await MetaCoin2aba9iNd.getBalanceInEth.call(addressi4rcdpN, {from: "0x0000000000000000000000000000000000000001"});
		const uintY7Roey = await MetaCoin2aba9iNd.getBalanceInEth.call(addressyMnEpNi, {from: accounts[1]});
		const uintg2rTWO4 = await MetaCoin2aba9iNd.getBalanceInEth.call(addressRWfnz1q, {from: accounts[4]});
		const uintIiNNSYH = await MetaCoin2aba9iNd.getBalanceInEth.call(addressAbEkHE, {from: accounts[1]});

		assert.equal(uintIiNNSYH, BigInt("0"))
		assert.equal(uintY7Roey, BigInt("0"))
		assert.equal(uintZvBDpGU, BigInt("20000"))
		assert.equal(uintg2rTWO4, BigInt("20000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2HszERYp = await MetaCoin2.new({from: accounts[2]});
		const addressHpOsDJR = accounts[1]
		const uintnOrDTbR = BigInt("1932")
		const addressg2FgOp1 = accounts[0]
		const uintpchfo20 = BigInt("1220")
		const addressWan48Nd = accounts[3]
		const uintsCfJf29 = await MetaCoin2HszERYp.getBalance.call(addressHpOsDJR, {from: accounts[5]});
		const boolTT08kEu = await MetaCoin2HszERYp.sendCoin.call(addressg2FgOp1, uintnOrDTbR, {from: accounts[0]});
		const boolUZdC5Ar = await MetaCoin2HszERYp.sendCoin.call(addressWan48Nd, uintpchfo20, {from: accounts[2]});

		assert.equal(boolTT08kEu, false)
		assert.equal(boolUZdC5Ar, true)
		assert.equal(uintsCfJf29, BigInt("0"))
	});
})