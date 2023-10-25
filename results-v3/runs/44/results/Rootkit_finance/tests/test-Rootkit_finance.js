const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeU9S5nR9 = await Rootkit_finance.new({from: accounts[1]});
		const uintebM5AOm = BigInt("1833")
		const addressaWIw68a = accounts[4]
		const addressnSaspHm = accounts[1]
		const addressmNLivsn = accounts[0]
		const uintaGg1Iud = BigInt("445")
		const addressEa4AkUI = accounts[5]
		const boolcWEGjnN = await Rootkit_financeU9S5nR9.transferFrom.call(addressnSaspHm, addressaWIw68a, uintebM5AOm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KCev63S = await Rootkit_financeU9S5nR9.balanceOf.call(addressmNLivsn, {from: accounts[1]});
		const boolARBnZh = await Rootkit_financeU9S5nR9.transfer.call(addressEa4AkUI, uintaGg1Iud, {from: accounts[1]});
		const uint256TDJHeF = await Rootkit_financeU9S5nR9.totalSupply.call({from: accounts[2]});

		assert.equal(boolARBnZh, true)
		assert.equal(boolcWEGjnN, false)
		assert.equal(uint256KCev63S, BigInt("0"))
		assert.equal(uint256TDJHeF, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financej4NBcAy = await Rootkit_finance.new({from: accounts[3]});
		const uintMVTzoFv = BigInt("1028")
		const addressbWOk7ot = accounts[1]
		const addressdV7qwGs = accounts[3]
		const uintqt78eJ = BigInt("1444")
		const addressyBftqbK = "0x0000000000000000000000000000000000000001"
		const address6iwcWo = accounts[4]
		const uintJdMtpSk = BigInt("1680")
		const addressR5JxXEP = accounts[0]
		const uint256taR4uHB = await Rootkit_financej4NBcAy.totalSupply.call({from: accounts[3]});
		const boolprjBvuD = await Rootkit_financej4NBcAy.transferFrom.call(addressdV7qwGs, addressbWOk7ot, uintMVTzoFv, {from: accounts[4]});
		const booloeLonhO = await Rootkit_financej4NBcAy.transferFrom.call(address6iwcWo, addressyBftqbK, uintqt78eJ, {from: accounts[0]});
		const booleA44iu4 = await Rootkit_financej4NBcAy.transfer.call(addressR5JxXEP, uintJdMtpSk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booleA44iu4, false)
		assert.equal(booloeLonhO, false)
		assert.equal(boolprjBvuD, false)
		assert.equal(uint256taR4uHB, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeDGPEggn = await Rootkit_finance.new({from: accounts[2]});
		const uintUdZIN9H = BigInt("1657")
		const addresswYje9lO = accounts[2]
		const addressMXxGcow = accounts[1]
		const addressnBWd8sU = accounts[3]
		const uintd3AsJI5 = BigInt("1565")
		const addresswZ5jA0m = accounts[4]
		const addressrPIdO3C = accounts[2]
		const uintPljGho = BigInt("1456")
		const addressvANhoL2 = accounts[3]
		const addressDTa27Gd = accounts[4]
		const boolVRe3dZQ = await Rootkit_financeDGPEggn.approve.call(addresswYje9lO, uintUdZIN9H, {from: accounts[0]});
		const uintgB0P6k = await Rootkit_financeDGPEggn.allowance.call(addressnBWd8sU, addressMXxGcow, {from: "0x0000000000000000000000000000000000000001"});
		const boolHjsS22Y = await Rootkit_financeDGPEggn.transferFrom.call(addressrPIdO3C, addresswZ5jA0m, uintd3AsJI5, {from: accounts[2]});
		const booln6b605B = await Rootkit_financeDGPEggn.transferFrom.call(addressDTa27Gd, addressvANhoL2, uintPljGho, {from: accounts[4]});

		assert.equal(boolHjsS22Y, false)
		assert.equal(boolVRe3dZQ, true)
		assert.equal(booln6b605B, false)
		assert.equal(uintgB0P6k, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeJd7zTU = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkbJ3KSJ = BigInt("907")
		const addressrFe85w9 = accounts[1]
		const uintZkk9o3T = BigInt("470")
		const addressimFPUMP = accounts[1]
		const addresssfXuwwK = accounts[0]
		const uintTR8Rnk = BigInt("2016")
		const addresswd7u2nI = accounts[2]
		const boolHTw7Dvr = await Rootkit_financeJd7zTU.approve.call(addressrFe85w9, uintkbJ3KSJ, {from: accounts[0]});
		const boolCKlXnM4 = await Rootkit_financeJd7zTU.transferFrom.call(addresssfXuwwK, addressimFPUMP, uintZkk9o3T, {from: accounts[4]});
		const boolEcdgm3d = await Rootkit_financeJd7zTU.transfer.call(addresswd7u2nI, uintTR8Rnk, {from: "0x0000000000000000000000000000000000000001"});
	});
})