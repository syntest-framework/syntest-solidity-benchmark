const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financego2MaM = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintkabf2Ai = BigInt("462")
		const addressHdG2Ddy = "0x0000000000000000000000000000000000000001"
		const uintW1ctuCI = BigInt("1607")
		const addressUhNnsTP = accounts[5]
		const boolzDNLg9E = await Straight_Fire_Financego2MaM.approve.call(addressHdG2Ddy, uintkabf2Ai, {from: "0x0000000000000000000000000000000000000001"});
		const boolaInWouo = await Straight_Fire_Financego2MaM.transfer.call(addressUhNnsTP, uintW1ctuCI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaInWouo, false)
		assert.equal(boolzDNLg9E, true)
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceGEHE78 = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYVS0NWU = accounts[4]
		const uintSIV9zwN = BigInt("1473")
		const addressqwVJkMJ = accounts[3]
		const addresskbABRz0 = accounts[5]
		const addressJkGOAJA = "0x0000000000000000000000000000000000000001"
		const addressvbuslBv = accounts[1]
		const addressrpgibeP = accounts[1]
		const addressWWC4IPD = accounts[1]
		const uint256Yo9RJRF = await Straight_Fire_FinanceGEHE78.balanceOf.call(addressYVS0NWU, {from: "0x0000000000000000000000000000000000000001"});
		const boolT14h9Ia = await Straight_Fire_FinanceGEHE78.transferFrom.call(addresskbABRz0, addressqwVJkMJ, uintSIV9zwN, {from: accounts[3]});
		const uintAeTLCjS = await Straight_Fire_FinanceGEHE78.allowance.call(addressvbuslBv, addressJkGOAJA, {from: accounts[0]});
		const uint256ua2nCjA = await Straight_Fire_FinanceGEHE78.balanceOf.call(addressrpgibeP, {from: accounts[0]});
		const uint256aLSt9wd = await Straight_Fire_FinanceGEHE78.balanceOf.call(addressWWC4IPD, {from: accounts[3]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceCDNJWAJ = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintMb0llmp = BigInt("53")
		const addressNaLO7Nr = accounts[3]
		const addresspQ0gwTq = accounts[4]
		const addresscY4NbiK = accounts[4]
		const addressi8U5vx4 = accounts[4]
		const addressSYC7JgW = accounts[3]
		const uintttgUAEQ = BigInt("555")
		const addressg14O0aK = accounts[3]
		const addressR67FxhA = accounts[4]
		const addressww1m0AR = accounts[4]
		const booljdvlBoy = await Straight_Fire_FinanceCDNJWAJ.transferFrom.call(addresspQ0gwTq, addressNaLO7Nr, uintMb0llmp, {from: accounts[1]});
		const uintxRRvmwv = await Straight_Fire_FinanceCDNJWAJ.allowance.call(addressi8U5vx4, addresscY4NbiK, {from: accounts[5]});
		const uint256fJzv3tM = await Straight_Fire_FinanceCDNJWAJ.balanceOf.call(addressSYC7JgW, {from: accounts[1]});
		const booltwdNgv1 = await Straight_Fire_FinanceCDNJWAJ.transferFrom.call(addressR67FxhA, addressg14O0aK, uintttgUAEQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256k7Dfa4Y = await Straight_Fire_FinanceCDNJWAJ.totalSupply.call({from: accounts[2]});
		const uint256rgJXbr5 = await Straight_Fire_FinanceCDNJWAJ.balanceOf.call(addressww1m0AR, {from: accounts[0]});

		assert.equal(booljdvlBoy, false)
		assert.equal(booltwdNgv1, false)
		assert.equal(uint256fJzv3tM, BigInt("0"))
		assert.equal(uint256k7Dfa4Y, BigInt("80000000000000000000000"))
		assert.equal(uint256rgJXbr5, BigInt("0"))
		assert.equal(uintxRRvmwv, BigInt("0"))
	});
})