const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancesBKRyhx = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCB8pbuI = accounts[1]
		const addressvWliNpg = accounts[2]
		const uintLip631O = BigInt("1703")
		const addressk4J3dVJ = accounts[0]
		const addressbcsv50r = accounts[1]
		const addressl7i1sah = "0x0000000000000000000000000000000000000001"
		const uintfpzBaak = await Straight_Fire_FinancesBKRyhx.allowance.call(addressvWliNpg, addressCB8pbuI, {from: accounts[0]});
		const booljTwMlw = await Straight_Fire_FinancesBKRyhx.transfer.call(addressk4J3dVJ, uintLip631O, {from: accounts[5]});
		const uint2563WzLI0 = await Straight_Fire_FinancesBKRyhx.balanceOf.call(addressbcsv50r, {from: accounts[0]});
		const uint256MyRN5P = await Straight_Fire_FinancesBKRyhx.balanceOf.call(addressl7i1sah, {from: accounts[3]});
		const uint256obK0l6h = await Straight_Fire_FinancesBKRyhx.totalSupply.call({from: accounts[3]});
		const uint256Muv9a8 = await Straight_Fire_FinancesBKRyhx.totalSupply.call({from: accounts[2]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancebuvVW30 = await Straight_Fire_Finance.new({from: accounts[3]});
		const uinth3SiaXx = BigInt("134")
		const addressKSePIA = accounts[0]
		const addressmuIuvG = accounts[0]
		const addressx4ZbCoD = accounts[4]
		const addresswW2HghV = accounts[4]
		const addressZTgS6Gj = accounts[4]
		const addressuwViuTu = accounts[5]
		const boolce8kuOn = await Straight_Fire_FinancebuvVW30.approve.call(addressKSePIA, uinth3SiaXx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256C8cRNfM = await Straight_Fire_FinancebuvVW30.balanceOf.call(addressmuIuvG, {from: accounts[0]});
		const uintCcQNaQP = await Straight_Fire_FinancebuvVW30.allowance.call(addresswW2HghV, addressx4ZbCoD, {from: accounts[3]});
		const uint256kXFxfoO = await Straight_Fire_FinancebuvVW30.balanceOf.call(addressZTgS6Gj, {from: accounts[1]});
		const uint256rujML6x = await Straight_Fire_FinancebuvVW30.balanceOf.call(addressuwViuTu, {from: accounts[1]});

		assert.equal(boolce8kuOn, true)
		assert.equal(uint256C8cRNfM, BigInt("0"))
		assert.equal(uint256kXFxfoO, BigInt("0"))
		assert.equal(uint256rujML6x, BigInt("0"))
		assert.equal(uintCcQNaQP, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financezo23UbZ = await Straight_Fire_Finance.new({from: accounts[1]});
		const addressekc5e9R = accounts[0]
		const addressYPVoWo3 = accounts[4]
		const uintmrPcCaI = BigInt("1837")
		const addressi14JRsM = accounts[0]
		const addressFJjGw2R = accounts[4]
		const addressgJiM8q4 = accounts[0]
		const uintYYtnmNP = BigInt("1918")
		const addressVSmBJsD = accounts[5]
		const addressfpJuK6l = accounts[4]
		const addressY8f0hDw = accounts[2]
		const addressVaSVVZN = accounts[3]
		const uintiyqhAwF = await Straight_Fire_Financezo23UbZ.allowance.call(addressYPVoWo3, addressekc5e9R, {from: accounts[3]});
		const booltJgLJmi = await Straight_Fire_Financezo23UbZ.transfer.call(addressi14JRsM, uintmrPcCaI, {from: "0x0000000000000000000000000000000000000001"});
		const uintt93EQD8 = await Straight_Fire_Financezo23UbZ.allowance.call(addressgJiM8q4, addressFJjGw2R, {from: accounts[4]});
		const uint2567obgeU = await Straight_Fire_Financezo23UbZ.totalSupply.call({from: accounts[1]});
		const boolPSpZHPE = await Straight_Fire_Financezo23UbZ.transferFrom.call(addressfpJuK6l, addressVSmBJsD, uintYYtnmNP, {from: accounts[5]});
		const uintVuEZlCO = await Straight_Fire_Financezo23UbZ.allowance.call(addressVaSVVZN, addressY8f0hDw, {from: accounts[1]});

		assert.equal(boolPSpZHPE, false)
		assert.equal(booltJgLJmi, false)
		assert.equal(uint2567obgeU, BigInt("80000000000000000000000"))
		assert.equal(uintVuEZlCO, BigInt("0"))
		assert.equal(uintiyqhAwF, BigInt("0"))
		assert.equal(uintt93EQD8, BigInt("0"))
	});
})