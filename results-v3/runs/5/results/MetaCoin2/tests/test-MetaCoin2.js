const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2jsHKL2e = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbDff5J = accounts[1]
		const uintHcCl4lK = BigInt("1419")
		const addressXZ0g1rA = accounts[1]
		const addressbPwx68H = accounts[3]
		const uintf3Yygi7 = BigInt("145")
		const addressWq9mf4n = accounts[5]
		const addressqUmktHT = accounts[2]
		const uinthDPBr2b = await MetaCoin2jsHKL2e.getBalance.call(addressbDff5J, {from: accounts[1]});
		const boolQwwUOtD = await MetaCoin2jsHKL2e.sendCoin.call(addressXZ0g1rA, uintHcCl4lK, {from: accounts[2]});
		const uinte3FtI0g = await MetaCoin2jsHKL2e.getBalanceInEth.call(addressbPwx68H, {from: accounts[3]});
		const boolULLS5S4 = await MetaCoin2jsHKL2e.sendCoin.call(addressWq9mf4n, uintf3Yygi7, {from: accounts[1]});
		const uintjDqR7a = await MetaCoin2jsHKL2e.getBalanceInEth.call(addressqUmktHT, {from: accounts[4]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2TzlCZi4 = await MetaCoin2.new({from: accounts[1]});
		const addressLDBZXF = accounts[3]
		const uintmpOWsfB = BigInt("897")
		const addressYpZLAWy = accounts[2]
		const uintwQyIOC3 = await MetaCoin2TzlCZi4.getBalanceInEth.call(addressLDBZXF, {from: accounts[4]});
		const boolopl3uu = await MetaCoin2TzlCZi4.sendCoin.call(addressYpZLAWy, uintmpOWsfB, {from: accounts[5]});

		assert.equal(boolopl3uu, false)
		assert.equal(uintwQyIOC3, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin279LOoB = await MetaCoin2.new({from: accounts[2]});
		const addressQRv3ipF = accounts[1]
		const uintkHoSu1b = BigInt("972")
		const addressE1yE92c = accounts[4]
		const uintLNJrF3U = BigInt("359")
		const addressSdQShXY = accounts[4]
		const uintnun7z8 = BigInt("1350")
		const addressLlXhzeV = accounts[5]
		const addresslVJxm9m = accounts[4]
		const uintXmMVTeF = BigInt("1878")
		const addressNjvWESN = "0x0000000000000000000000000000000000000001"
		const uintBNAknk = await MetaCoin279LOoB.getBalanceInEth.call(addressQRv3ipF, {from: accounts[2]});
		const boolWQE72Go = await MetaCoin279LOoB.sendCoin.call(addressE1yE92c, uintkHoSu1b, {from: accounts[1]});
		const boolD1qS3mT = await MetaCoin279LOoB.sendCoin.call(addressSdQShXY, uintLNJrF3U, {from: accounts[2]});
		const boolfBpGR5F = await MetaCoin279LOoB.sendCoin.call(addressLlXhzeV, uintnun7z8, {from: accounts[5]});
		const uintm9WaWd = await MetaCoin279LOoB.getBalanceInEth.call(addresslVJxm9m, {from: accounts[5]});
		const boolfQ0i8Kw = await MetaCoin279LOoB.sendCoin.call(addressNjvWESN, uintXmMVTeF, {from: accounts[0]});

		assert.equal(boolD1qS3mT, true)
		assert.equal(boolWQE72Go, false)
		assert.equal(boolfBpGR5F, false)
		assert.equal(boolfQ0i8Kw, false)
		assert.equal(uintBNAknk, BigInt("0"))
		assert.equal(uintm9WaWd, BigInt("0"))
	});
})