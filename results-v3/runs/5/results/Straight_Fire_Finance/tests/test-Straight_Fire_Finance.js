const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financeanug4Nn = await Straight_Fire_Finance.new({from: accounts[0]});
		const uintRNdZKKU = BigInt("1211")
		const addresshTEhm9x = "0x0000000000000000000000000000000000000001"
		const uinte0ZIU0q = BigInt("317")
		const addressvPN3ur9 = accounts[0]
		const boolSimacv = await Straight_Fire_Financeanug4Nn.transfer.call(addresshTEhm9x, uintRNdZKKU, {from: accounts[5]});
		const uint256DqHUF1A = await Straight_Fire_Financeanug4Nn.totalSupply.call({from: accounts[3]});
		const boolDNurhVa = await Straight_Fire_Financeanug4Nn.approve.call(addressvPN3ur9, uinte0ZIU0q, {from: accounts[1]});

		assert.equal(boolDNurhVa, true)
		assert.equal(boolSimacv, false)
		assert.equal(uint256DqHUF1A, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceEE473a6 = await Straight_Fire_Finance.new({from: accounts[4]});
		const address8M0VPc = accounts[1]
		const addressfTwviAZ = accounts[5]
		const addressPMScqiH = accounts[5]
		const addressgUb9Ld9 = accounts[4]
		const addressM2GmUGm = accounts[2]
		const uintPbx7JM2 = BigInt("1442")
		const addressFF8S7b4 = accounts[5]
		const uintCDEkkHZ = await Straight_Fire_FinanceEE473a6.allowance.call(addressfTwviAZ, address8M0VPc, {from: accounts[3]});
		const uintNETQ1AJ = await Straight_Fire_FinanceEE473a6.allowance.call(addressgUb9Ld9, addressPMScqiH, {from: accounts[5]});
		const uint256EoQ4Kim = await Straight_Fire_FinanceEE473a6.balanceOf.call(addressM2GmUGm, {from: accounts[5]});
		const boolIFQr9bl = await Straight_Fire_FinanceEE473a6.transfer.call(addressFF8S7b4, uintPbx7JM2, {from: accounts[2]});

		assert.equal(boolIFQr9bl, false)
		assert.equal(uint256EoQ4Kim, BigInt("0"))
		assert.equal(uintCDEkkHZ, BigInt("0"))
		assert.equal(uintNETQ1AJ, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceH7L4rC0 = await Straight_Fire_Finance.new({from: accounts[2]});
		const addressYq6ohw0 = accounts[4]
		const uintYy29jn = BigInt("1561")
		const addresssZ6IAYV = accounts[3]
		const addressiEKAi34 = accounts[4]
		const addressERVFXby = accounts[0]
		const addressiDNLKR = accounts[0]
		const uintKXIxPgF = BigInt("632")
		const addressWPwdGtM = accounts[3]
		const addressm6u8HNP = accounts[2]
		const uint256yh3obQi = await Straight_Fire_FinanceH7L4rC0.balanceOf.call(addressYq6ohw0, {from: accounts[0]});
		const booldOeSP9 = await Straight_Fire_FinanceH7L4rC0.transfer.call(addresssZ6IAYV, uintYy29jn, {from: accounts[4]});
		const uint256jSMPU4Y = await Straight_Fire_FinanceH7L4rC0.balanceOf.call(addressiEKAi34, {from: accounts[1]});
		const uintElKbewY = await Straight_Fire_FinanceH7L4rC0.allowance.call(addressiDNLKR, addressERVFXby, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yBfGqvo = await Straight_Fire_FinanceH7L4rC0.totalSupply.call({from: accounts[0]});
		const boolrbsRGFK = await Straight_Fire_FinanceH7L4rC0.transferFrom.call(addressm6u8HNP, addressWPwdGtM, uintKXIxPgF, {from: accounts[4]});

		assert.equal(booldOeSP9, false)
		assert.equal(boolrbsRGFK, false)
		assert.equal(uint256jSMPU4Y, BigInt("0"))
		assert.equal(uint256yBfGqvo, BigInt("80000000000000000000000"))
		assert.equal(uint256yh3obQi, BigInt("0"))
		assert.equal(uintElKbewY, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancewkkzyLj = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintba3qjm1 = BigInt("1778")
		const addressJCFdlJ0 = "0x0000000000000000000000000000000000000001"
		const addressarIM10 = accounts[0]
		const uintxJGwWAM = BigInt("2043")
		const addressYce8D21 = accounts[4]
		const addressw3vb1ax = accounts[1]
		const uintB2TYiYG = BigInt("394")
		const addressswyQpwU = accounts[4]
		const addressGviezv5 = accounts[3]
		const addressIRTej3g = accounts[5]
		const boolhmEQ5dV = await Straight_Fire_FinancewkkzyLj.transfer.call(addressJCFdlJ0, uintba3qjm1, {from: accounts[4]});
		const uint256k4T2Mx = await Straight_Fire_FinancewkkzyLj.balanceOf.call(addressarIM10, {from: accounts[5]});
		const boolgoGBEHE = await Straight_Fire_FinancewkkzyLj.transferFrom.call(addressw3vb1ax, addressYce8D21, uintxJGwWAM, {from: accounts[4]});
		const boolsmGoXrQ = await Straight_Fire_FinancewkkzyLj.transfer.call(addressswyQpwU, uintB2TYiYG, {from: "0x0000000000000000000000000000000000000001"});
		const uintQ0BQoQQ = await Straight_Fire_FinancewkkzyLj.allowance.call(addressIRTej3g, addressGviezv5, {from: accounts[1]});
	});
})