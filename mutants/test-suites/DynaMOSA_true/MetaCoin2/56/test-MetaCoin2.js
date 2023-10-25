const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2uYofEv6 = await MetaCoin2.new({from: accounts[3]});
		const addresseRJSM6 = accounts[3]
		const addressvqJEeNl = "0x0000000000000000000000000000000000000001"
		const addressdQzqa6 = accounts[1]
		const uintGWStgqJ = await MetaCoin2uYofEv6.getBalanceInEth.call(addresseRJSM6, {from: accounts[0]});
		const uintaj0hpLj = await MetaCoin2uYofEv6.getBalanceInEth.call(addressvqJEeNl, {from: accounts[1]});
		const uintvCKpuYG = await MetaCoin2uYofEv6.getBalance.call(addressdQzqa6, {from: accounts[0]});

		assert.equal(uintGWStgqJ, BigInt("20000"))
		assert.equal(uintaj0hpLj, BigInt("0"))
		assert.equal(uintvCKpuYG, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2GnoLemR = await MetaCoin2.new({from: accounts[0]});
		const addressozLLjQ = accounts[5]
		const uintl8Ufk8P = BigInt("461")
		const addressAc9qsRq = accounts[4]
		const uintScy3KL4 = BigInt("708")
		const addressW5Pt2ue = accounts[5]
		const uintazlPuR = BigInt("1235")
		const addressTQOJulX = accounts[2]
		const addresswq4BqKa = accounts[1]
		const uintaxStOW = await MetaCoin2GnoLemR.getBalanceInEth.call(addressozLLjQ, {from: accounts[0]});
		const boolusLDHQp = await MetaCoin2GnoLemR.sendCoin.call(addressAc9qsRq, uintl8Ufk8P, {from: accounts[2]});
		const bools64F0Gf = await MetaCoin2GnoLemR.sendCoin.call(addressW5Pt2ue, uintScy3KL4, {from: accounts[2]});
		const boolvH7UcUA = await MetaCoin2GnoLemR.sendCoin.call(addressTQOJulX, uintazlPuR, {from: accounts[2]});
		const uintDve1aKI = await MetaCoin2GnoLemR.getBalance.call(addresswq4BqKa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bools64F0Gf, false)
		assert.equal(boolusLDHQp, false)
		assert.equal(boolvH7UcUA, false)
		assert.equal(uintDve1aKI, BigInt("0"))
		assert.equal(uintaxStOW, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2GnoLemR = await MetaCoin2.new({from: accounts[0]});
		const addressdwPpTrS = accounts[5]
		const uintAvGzO4d = BigInt("572")
		const addressUIwdKyA = accounts[1]
		const uintf9Er4hq = BigInt("461")
		const address1UVRmB = accounts[4]
		const uintmB5P2uf = BigInt("708")
		const addressmkVPXLm = accounts[5]
		const uinttYQpTtF = BigInt("1235")
		const addressXGYfEMe = accounts[2]
		const addressFgFBfy6 = accounts[1]
		const addressgrd2yxw = accounts[0]
		const addressbQnGOL6 = accounts[4]
		const uintqdnjAgB = BigInt("480")
		const addressIVbNVo1 = accounts[1]
		const addressV4aarZD = accounts[3]
		const uintaxStOW = await MetaCoin2GnoLemR.getBalanceInEth.call(addressdwPpTrS, {from: accounts[0]});
		const boolVuN83nn = await MetaCoin2GnoLemR.sendCoin.call(addressUIwdKyA, uintAvGzO4d, {from: accounts[4]});
		const boolusLDHQp = await MetaCoin2GnoLemR.sendCoin.call(address1UVRmB, uintf9Er4hq, {from: accounts[2]});
		const bools64F0Gf = await MetaCoin2GnoLemR.sendCoin.call(addressmkVPXLm, uintmB5P2uf, {from: accounts[2]});
		const boolvH7UcUA = await MetaCoin2GnoLemR.sendCoin.call(addressXGYfEMe, uinttYQpTtF, {from: accounts[2]});
		const uintDve1aKI = await MetaCoin2GnoLemR.getBalance.call(addressFgFBfy6, {from: "0x0000000000000000000000000000000000000001"});
		const uintmPM48i = await MetaCoin2GnoLemR.getBalanceInEth.call(addressgrd2yxw, {from: accounts[2]});
		const uintgCgoZzT = await MetaCoin2GnoLemR.getBalance.call(addressbQnGOL6, {from: accounts[1]});
		const boolboBzibT = await MetaCoin2GnoLemR.sendCoin.call(addressIVbNVo1, uintqdnjAgB, {from: accounts[0]});
		const uintbUkB879 = await MetaCoin2GnoLemR.getBalanceInEth.call(addressV4aarZD, {from: accounts[1]});

		assert.equal(boolVuN83nn, false)
		assert.equal(boolboBzibT, true)
		assert.equal(bools64F0Gf, false)
		assert.equal(boolusLDHQp, false)
		assert.equal(boolvH7UcUA, false)
		assert.equal(uintDve1aKI, BigInt("0"))
		assert.equal(uintaxStOW, BigInt("0"))
		assert.equal(uintbUkB879, BigInt("0"))
		assert.equal(uintgCgoZzT, BigInt("0"))
		assert.equal(uintmPM48i, BigInt("20000"))
	});
})