const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceNqSlbPY = await Straight_Fire_Finance.new({from: accounts[3]});
		const addresshzsHi3q = accounts[2]
		const addressJQs9uVb = accounts[3]
		const addressJCnynE6 = accounts[3]
		const uint256oqJDAgG = await Straight_Fire_FinanceNqSlbPY.balanceOf.call(addresshzsHi3q, {from: accounts[2]});
		const uint256qC4mws3 = await Straight_Fire_FinanceNqSlbPY.totalSupply.call({from: accounts[5]});
		const uintytBcVh7 = await Straight_Fire_FinanceNqSlbPY.allowance.call(addressJCnynE6, addressJQs9uVb, {from: accounts[1]});

		assert.equal(uint256oqJDAgG, BigInt("0"))
		assert.equal(uint256qC4mws3, BigInt("80000000000000000000000"))
		assert.equal(uintytBcVh7, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financerh2l3OL = await Straight_Fire_Finance.new({from: accounts[5]});
		const uintTmoGOKm = BigInt("1233")
		const addressgwT6adY = accounts[0]
		const addressFgtXXRb = accounts[0]
		const addresseuAU7Ap = accounts[1]
		const addressH3QsykZ = "0x0000000000000000000000000000000000000001"
		const uintpp1KAtY = BigInt("420")
		const addressWnygow7 = accounts[5]
		const addressmjlx2QV = accounts[3]
		const uintQ8ebuG = BigInt("609")
		const addressasZnT3e = accounts[1]
		const boolE10k6NW = await Straight_Fire_Financerh2l3OL.transferFrom.call(addressFgtXXRb, addressgwT6adY, uintTmoGOKm, {from: accounts[0]});
		const uintmI9bYGC = await Straight_Fire_Financerh2l3OL.allowance.call(addressH3QsykZ, addresseuAU7Ap, {from: accounts[0]});
		const boolYWrPXza = await Straight_Fire_Financerh2l3OL.transferFrom.call(addressmjlx2QV, addressWnygow7, uintpp1KAtY, {from: accounts[4]});
		const boolG4kXjqd = await Straight_Fire_Financerh2l3OL.approve.call(addressasZnT3e, uintQ8ebuG, {from: accounts[3]});

		assert.equal(boolE10k6NW, false)
		assert.equal(boolG4kXjqd, true)
		assert.equal(boolYWrPXza, false)
		assert.equal(uintmI9bYGC, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceX9YGuJj = await Straight_Fire_Finance.new({from: accounts[0]});
		const uintjQHQnw = BigInt("564")
		const addressbExbJm7 = accounts[4]
		const addresskUauaJL = accounts[1]
		const uintIf2HnqT = BigInt("1208")
		const addressefczFDN = accounts[4]
		const addressBSqsEq = accounts[5]
		const booltpsjT32 = await Straight_Fire_FinanceX9YGuJj.transfer.call(addressbExbJm7, uintjQHQnw, {from: accounts[0]});
		const uint256SDvuzOu = await Straight_Fire_FinanceX9YGuJj.balanceOf.call(addresskUauaJL, {from: accounts[1]});
		const boolsTcxRI4 = await Straight_Fire_FinanceX9YGuJj.transfer.call(addressefczFDN, uintIf2HnqT, {from: accounts[4]});
		const uint256ZIQHFqw = await Straight_Fire_FinanceX9YGuJj.totalSupply.call({from: accounts[4]});
		const uint256pPiMItz = await Straight_Fire_FinanceX9YGuJj.balanceOf.call(addressBSqsEq, {from: accounts[0]});

		assert.equal(boolsTcxRI4, false)
		assert.equal(booltpsjT32, true)
		assert.equal(uint256SDvuzOu, BigInt("0"))
		assert.equal(uint256ZIQHFqw, BigInt("80000000000000000000000"))
		assert.equal(uint256pPiMItz, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceKjbiXOx = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgvxWqzq = BigInt("1164")
		const addressmesA4h8 = accounts[3]
		const uintDWLJOOm = BigInt("1497")
		const addresssPL7Ut = accounts[4]
		const uintqxH1V9 = BigInt("166")
		const addressYwIQgj = accounts[4]
		const addressC627tuo = accounts[2]
		const addressdZwC9G = accounts[4]
		const uintksYZM7z = BigInt("1465")
		const addressVJ1TKbX = accounts[1]
		const addresswwYgT2T = accounts[0]
		const boolBwjTqks = await Straight_Fire_FinanceKjbiXOx.approve.call(addressmesA4h8, uintgvxWqzq, {from: accounts[4]});
		const boolWNbRufr = await Straight_Fire_FinanceKjbiXOx.approve.call(addresssPL7Ut, uintDWLJOOm, {from: accounts[4]});
		const boolbUCDnGZ = await Straight_Fire_FinanceKjbiXOx.transfer.call(addressYwIQgj, uintqxH1V9, {from: accounts[5]});
		const uintur14IfU = await Straight_Fire_FinanceKjbiXOx.allowance.call(addressdZwC9G, addressC627tuo, {from: accounts[3]});
		const boolweRACN = await Straight_Fire_FinanceKjbiXOx.transferFrom.call(addresswwYgT2T, addressVJ1TKbX, uintksYZM7z, {from: accounts[1]});
	});
})