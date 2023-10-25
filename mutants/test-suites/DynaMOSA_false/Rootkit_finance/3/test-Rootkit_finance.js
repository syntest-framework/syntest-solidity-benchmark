const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeQYAn9Um = await Rootkit_finance.new({from: accounts[3]});
		const uintx9I09CQ = BigInt("766")
		const addressFmprMj = accounts[4]
		const addressMWFs26y = accounts[3]
		const addressgOWcgV8 = accounts[0]
		const addressumqSj4 = accounts[4]
		const addressEZWTpRd = accounts[4]
		const addressBh3c5Y = accounts[1]
		const addresss5CMstg = accounts[0]
		const addressEpuJL7l = "0x0000000000000000000000000000000000000001"
		const addressVDNT6jA = accounts[1]
		const booltsWuAW0 = await Rootkit_financeQYAn9Um.transferFrom.call(addressMWFs26y, addressFmprMj, uintx9I09CQ, {from: accounts[4]});
		const uintCNPNsEz = await Rootkit_financeQYAn9Um.allowance.call(addressumqSj4, addressgOWcgV8, {from: accounts[1]});
		const uint256zILobig = await Rootkit_financeQYAn9Um.balanceOf.call(addressEZWTpRd, {from: accounts[3]});
		const uint256extxKDl = await Rootkit_financeQYAn9Um.balanceOf.call(addressBh3c5Y, {from: accounts[2]});
		const uint256o6L6KAK = await Rootkit_financeQYAn9Um.balanceOf.call(addresss5CMstg, {from: accounts[3]});
		const uintx9Rtuuf = await Rootkit_financeQYAn9Um.allowance.call(addressVDNT6jA, addressEpuJL7l, {from: accounts[3]});

		assert.equal(booltsWuAW0, false)
		assert.equal(uint256extxKDl, BigInt("0"))
		assert.equal(uint256o6L6KAK, BigInt("0"))
		assert.equal(uint256zILobig, BigInt("0"))
		assert.equal(uintCNPNsEz, BigInt("0"))
		assert.equal(uintx9Rtuuf, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeOnUE2Cq = await Rootkit_finance.new({from: accounts[2]});
		const uintLbvAHO = BigInt("719")
		const addressIE9eQ0 = accounts[2]
		const addressLuWkTBq = accounts[2]
		const addresssLY7OiL = accounts[4]
		const addressP0yqXEn = accounts[2]
		const boolOnYgLxp = await Rootkit_financeOnUE2Cq.transfer.call(addressIE9eQ0, uintLbvAHO, {from: "0x0000000000000000000000000000000000000001"});
		const uintDAgJqg8 = await Rootkit_financeOnUE2Cq.allowance.call(addresssLY7OiL, addressLuWkTBq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SqOadnt = await Rootkit_financeOnUE2Cq.totalSupply.call({from: accounts[1]});
		const uint256i1hZVc = await Rootkit_financeOnUE2Cq.balanceOf.call(addressP0yqXEn, {from: accounts[1]});

		assert.equal(boolOnYgLxp, false)
		assert.equal(uint256SqOadnt, BigInt("10000000000000000000000"))
		assert.equal(uint256i1hZVc, BigInt("10000000000000000000000"))
		assert.equal(uintDAgJqg8, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financefKbA4Cr = await Rootkit_finance.new({from: accounts[5]});
		const uintTwsovYX = BigInt("456")
		const addressz84x1Fs = accounts[3]
		const addressGT0I8q = accounts[5]
		const addressGKcoRHr = accounts[3]
		const uintasFXdpl = BigInt("915")
		const addressfuB2e4Y = accounts[5]
		const addressOtLZBE = accounts[4]
		const uintASwwBdp = BigInt("487")
		const addressHsl3d5j = accounts[3]
		const boolCseWuao = await Rootkit_financefKbA4Cr.transfer.call(addressz84x1Fs, uintTwsovYX, {from: accounts[2]});
		const uintyD4rtHj = await Rootkit_financefKbA4Cr.allowance.call(addressGKcoRHr, addressGT0I8q, {from: accounts[0]});
		const booloCQAvCX = await Rootkit_financefKbA4Cr.transfer.call(addressfuB2e4Y, uintasFXdpl, {from: accounts[0]});
		const uint256o0n290d = await Rootkit_financefKbA4Cr.balanceOf.call(addressOtLZBE, {from: accounts[2]});
		const boolDJ88bFf = await Rootkit_financefKbA4Cr.approve.call(addressHsl3d5j, uintASwwBdp, {from: accounts[3]});

		assert.equal(boolCseWuao, false)
		assert.equal(boolDJ88bFf, true)
		assert.equal(booloCQAvCX, false)
		assert.equal(uint256o0n290d, BigInt("0"))
		assert.equal(uintyD4rtHj, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeESoOrbH = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOd29vrj = accounts[2]
		const addressKlX2UA = accounts[0]
		const uintOnUAPI1 = BigInt("780")
		const addressgPf5Bmw = accounts[1]
		const addressmcQUIV = accounts[1]
		const addressSkpNcL0 = accounts[5]
		const uintcnRxggU = BigInt("1152")
		const addressQL6WTgb = accounts[2]
		const addressBbmjoXW = accounts[4]
		const addressJbSAg7T = accounts[1]
		const addresspNlasFl = accounts[1]
		const uintV7SeAiw = await Rootkit_financeESoOrbH.allowance.call(addressKlX2UA, addressOd29vrj, {from: accounts[2]});
		const boolzyW2KHI = await Rootkit_financeESoOrbH.transfer.call(addressgPf5Bmw, uintOnUAPI1, {from: accounts[5]});
		const uintiDMqV05 = await Rootkit_financeESoOrbH.allowance.call(addressSkpNcL0, addressmcQUIV, {from: accounts[5]});
		const booleJi5tzr = await Rootkit_financeESoOrbH.transferFrom.call(addressBbmjoXW, addressQL6WTgb, uintcnRxggU, {from: accounts[2]});
		const uintskJQT1 = await Rootkit_financeESoOrbH.allowance.call(addresspNlasFl, addressJbSAg7T, {from: accounts[5]});
	});
})