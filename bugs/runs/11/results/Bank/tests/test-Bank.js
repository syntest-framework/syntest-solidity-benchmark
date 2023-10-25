const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractJ6jAAOp = await Bank.new({from: accounts[3]});
		const borrowerNEnEi1h = accounts[0]
		const borrowerdHWP53l = accounts[4]
		const amountwy1DFmp = BigInt("1814")
		const whoNtjSp9U = accounts[5]
		const tokenqOWcgV = accounts[4]
		const borrowervFYaO0 = accounts[3]
		const amountCstgy6L = BigInt("95")
		const tokenkfoQ5zS = accounts[0]
		await contractJ6jAAOp.removeBorrower.call(borrowerNEnEi1h, {from: accounts[0]});
		await contractJ6jAAOp.removeBorrower.call(borrowerdHWP53l, {from: "0x0000000000000000000000000000000000000001"});
		await contractJ6jAAOp.borrowFor.call(tokenqOWcgV, whoNtjSp9U, amountwy1DFmp, {from: accounts[5]});
		await contractJ6jAAOp.removeBorrower.call(borrowervFYaO0, {from: accounts[5]});
		await contractJ6jAAOp.withdraw.call(tokenkfoQ5zS, amountCstgy6L, {from: accounts[2]});

		await expect(contractJ6jAAOp.removeBorrower.call(borrowerNEnEi1h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractzeQ0CLb = await Bank.new({from: accounts[2]});
		const borrowercA5kIUU = accounts[2]
		const amountlrNW94q = BigInt("1862")
		const tokenh88SYA4 = accounts[1]
		const amountUNsLRcu = BigInt("405")
		const tokenJiOUsr2 = accounts[4]
		const amountbRQtekE = BigInt("370")
		const tokenPPCxP1t = accounts[3]
		const amountNWkqFi0 = BigInt("1867")
		const tokennpCSuXY = accounts[0]
		await contractzeQ0CLb.addBorrower.call(borrowercA5kIUU, {from: accounts[2]});
		await contractzeQ0CLb.borrow.call(tokenh88SYA4, amountlrNW94q, {from: accounts[2]});
		await contractzeQ0CLb.borrow.call(tokenJiOUsr2, amountUNsLRcu, {from: accounts[3]});
		await contractzeQ0CLb.withdraw.call(tokenPPCxP1t, amountbRQtekE, {from: accounts[1]});
		await contractzeQ0CLb.deposit.call(tokennpCSuXY, amountNWkqFi0, {from: accounts[4]});

		await expect(contractzeQ0CLb.addBorrower.call(borrowercA5kIUU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractfONJ88b = await Bank.new({from: accounts[5]});
		const amountJ0I8q8D = BigInt("215")
		const tokenYWkVsQK = accounts[4]
		const amountTdLa2UC = BigInt("1732")
		const tokenCvFOtLZ = accounts[3]
		await contractfONJ88b.deposit.call(tokenYWkVsQK, amountJ0I8q8D, {from: accounts[5]});
		await contractfONJ88b.repay.call(tokenCvFOtLZ, amountTdLa2UC, {from: accounts[4]});

		await expect(contractfONJ88b.deposit.call(tokenYWkVsQK, amountJ0I8q8D, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractL2GrZtZ = await Bank.new({from: accounts[1]});
		const tokenYFWVPFz = accounts[4]
		const borrowerGeiguQs = accounts[3]
		const amount9HY8zm = BigInt("386")
		const tokenTihPSt1 = accounts[4]
		const amountTtqs9G2 = BigInt("460")
		const tokenzBIftG2 = accounts[0]
		const borrowerGTvczh = accounts[0]
		const balancebZXByFW = await contractL2GrZtZ.totalSupplyOf.call(tokenYFWVPFz, {from: accounts[3]});
		await contractL2GrZtZ.removeBorrower.call(borrowerGeiguQs, {from: accounts[2]});
		await contractL2GrZtZ.deposit.call(tokenTihPSt1, amount9HY8zm, {from: accounts[1]});
		await contractL2GrZtZ.repay.call(tokenzBIftG2, amountTtqs9G2, {from: accounts[1]});
		await contractL2GrZtZ.addBorrower.call(borrowerGTvczh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractL2GrZtZ.totalSupplyOf.call(tokenYFWVPFz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracta87Vvuu = await Bank.new({from: accounts[0]});
		const amountik1HRvD = BigInt("1070")
		const tokenRjOZF9m = accounts[3]
		const borrowerOvDdQV = accounts[5]
		await contracta87Vvuu.repay.call(tokenRjOZF9m, amountik1HRvD, {from: accounts[0]});
		await contracta87Vvuu.addBorrower.call(borrowerOvDdQV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracta87Vvuu.repay.call(tokenRjOZF9m, amountik1HRvD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractbdwnvzD = await Bank.new({from: accounts[5]});
		const borrower7AoXaj = accounts[1]
		const amounteDscNg = BigInt("215")
		const token8x0lTd = accounts[5]
		await contractbdwnvzD.removeBorrower.call(borrower7AoXaj, {from: accounts[5]});
		await contractbdwnvzD.deposit.call(token8x0lTd, amounteDscNg, {from: accounts[5]});

		await expect(contractbdwnvzD.removeBorrower.call(borrower7AoXaj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractoha9fBv = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const tokennvgvUnx = accounts[4]
		const amountErxVm3v = BigInt("690")
		const tokentDbBFBm = "0x0000000000000000000000000000000000000001"
		const amountCh1qnF = BigInt("229")
		const tokenRkyN8b0 = accounts[0]
		const balancems1dmjP = await contractoha9fBv.totalSupplyOf.call(tokennvgvUnx, {from: accounts[3]});
		await contractoha9fBv.borrow.call(tokentDbBFBm, amountErxVm3v, {from: "0x0000000000000000000000000000000000000001"});
		await contractoha9fBv.borrow.call(tokenRkyN8b0, amountCh1qnF, {from: accounts[0]});
	});

	it('test for Bank', async () => {
		const contractNB8sQge = await Bank.new({from: accounts[1]});
		const amountXwaFi9s = BigInt("441")
		const token7QbGP2 = accounts[0]
		const amountWfKYkrw = BigInt("190")
		const token08g9Xe = accounts[4]
		await contractNB8sQge.withdraw.call(token7QbGP2, amountXwaFi9s, {from: accounts[1]});
		await contractNB8sQge.withdraw.call(token08g9Xe, amountWfKYkrw, {from: accounts[4]});

		await expect(contractNB8sQge.withdraw.call(token7QbGP2, amountXwaFi9s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractNQojKnr = await Bank.new({from: accounts[5]});
		const tokenmUp5I5H = "0x0000000000000000000000000000000000000000"
		const balancegTRQofi = await contractNQojKnr.totalSupplyOf.call(tokenmUp5I5H, {from: accounts[3]});

		assert.equal(balancegTRQofi, 0)
	});
})