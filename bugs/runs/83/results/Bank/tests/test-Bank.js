const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractn4bElBP = await Bank.new({from: accounts[3]});
		const borrowerd9r5hgU = accounts[3]
		const amountZ6Fh0BL = BigInt("2018")
		const tokeniFr0ZNR = "0x0000000000000000000000000000000000000001"
		const amountuP1nBDq = BigInt("642")
		const tokenBspc30p = accounts[2]
		await contractn4bElBP.addBorrower.call(borrowerd9r5hgU, {from: accounts[0]});
		await contractn4bElBP.borrow.call(tokeniFr0ZNR, amountZ6Fh0BL, {from: accounts[4]});
		await contractn4bElBP.deposit.call(tokenBspc30p, amountuP1nBDq, {from: accounts[0]});

		await expect(contractn4bElBP.addBorrower.call(borrowerd9r5hgU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractcU3a312 = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const borrowerLOkNg9z = accounts[1]
		const amountisx1zPT = BigInt("1772")
		const tokenzO8hwC = accounts[3]
		const amountpZNZIJq = BigInt("1879")
		const token0buOoN = accounts[1]
		const amountwrB2OGp = BigInt("1029")
		const tokendFJHgv = accounts[0]
		const borrowerFY6QBUR = accounts[2]
		await contractcU3a312.addBorrower.call(borrowerLOkNg9z, {from: accounts[2]});
		await contractcU3a312.deposit.call(tokenzO8hwC, amountisx1zPT, {from: accounts[0]});
		await contractcU3a312.repay.call(token0buOoN, amountpZNZIJq, {from: accounts[1]});
		await contractcU3a312.borrow.call(tokendFJHgv, amountwrB2OGp, {from: accounts[4]});
		await contractcU3a312.removeBorrower.call(borrowerFY6QBUR, {from: accounts[3]});
	});

	it('test for Bank', async () => {
		const contractDOJLwMw = await Bank.new({from: accounts[2]});
		const amountTMXVhRn = BigInt("16")
		const tokenelNUUZa = accounts[3]
		const amountiWU4alb = BigInt("166")
		const whoNzbKtjm = accounts[4]
		const tokenwIWLMqm = accounts[2]
		const borrowerwwavbxc = accounts[2]
		await contractDOJLwMw.repay.call(tokenelNUUZa, amountTMXVhRn, {from: accounts[2]});
		await contractDOJLwMw.borrowFor.call(tokenwIWLMqm, whoNzbKtjm, amountiWU4alb, {from: accounts[0]});
		await contractDOJLwMw.addBorrower.call(borrowerwwavbxc, {from: accounts[5]});

		await expect(contractDOJLwMw.repay.call(tokenelNUUZa, amountTMXVhRn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractA12Uqfq = await Bank.new({from: accounts[1]});
		const borrowerM9qfS9w = accounts[2]
		const borroweruWOtVhF = accounts[3]
		const amountN74Kuo3 = BigInt("1783")
		const tokenPArdjw9 = accounts[5]
		const amountekeEyOX = BigInt("1758")
		const tokenbsJ9PWV = accounts[3]
		const amountQxDJJg = BigInt("193")
		const whoi9Q7W9c = accounts[3]
		const tokenxi6mzau = accounts[0]
		await contractA12Uqfq.addBorrower.call(borrowerM9qfS9w, {from: accounts[1]});
		await contractA12Uqfq.addBorrower.call(borroweruWOtVhF, {from: accounts[4]});
		await contractA12Uqfq.borrow.call(tokenPArdjw9, amountN74Kuo3, {from: accounts[3]});
		await contractA12Uqfq.borrow.call(tokenbsJ9PWV, amountekeEyOX, {from: accounts[2]});
		await contractA12Uqfq.borrowFor.call(tokenxi6mzau, whoi9Q7W9c, amountQxDJJg, {from: accounts[1]});

		await expect(contractA12Uqfq.addBorrower.call(borrowerM9qfS9w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractjnQRqXV = await Bank.new({from: accounts[3]});
		const amountcwjfYjM = BigInt("390")
		const tokenHWMGGbF = accounts[1]
		const amountx7k9U2o = BigInt("832")
		const tokenxzpysr = accounts[2]
		const borrowerVQZZzxs = accounts[0]
		await contractjnQRqXV.deposit.call(tokenHWMGGbF, amountcwjfYjM, {from: accounts[4]});
		await contractjnQRqXV.repay.call(tokenxzpysr, amountx7k9U2o, {from: accounts[4]});
		await contractjnQRqXV.removeBorrower.call(borrowerVQZZzxs, {from: accounts[3]});

		await expect(contractjnQRqXV.deposit.call(tokenHWMGGbF, amountcwjfYjM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractjpMK05b = await Bank.new({from: accounts[3]});
		const tokenlO9wNcu = accounts[4]
		const amounteQVlJFF = BigInt("1256")
		const tokenLl2hNNB = "0x0000000000000000000000000000000000000001"
		const amountwrwPm3T = BigInt("850")
		const tokenUnbuZq4 = accounts[2]
		const balanceuc6GV5s = await contractjpMK05b.totalSupplyOf.call(tokenlO9wNcu, {from: accounts[0]});
		await contractjpMK05b.repay.call(tokenLl2hNNB, amounteQVlJFF, {from: accounts[4]});
		await contractjpMK05b.repay.call(tokenUnbuZq4, amountwrwPm3T, {from: accounts[4]});

		await expect(contractjpMK05b.totalSupplyOf.call(tokenlO9wNcu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractnzPgcxg = await Bank.new({from: accounts[3]});
		const borrowerEjPiID = "0x0000000000000000000000000000000000000001"
		const amountqeKzQ4t = BigInt("795")
		const tokenBSZFKYc = accounts[2]
		await contractnzPgcxg.removeBorrower.call(borrowerEjPiID, {from: accounts[3]});
		await contractnzPgcxg.repay.call(tokenBSZFKYc, amountqeKzQ4t, {from: accounts[4]});

		await expect(contractnzPgcxg.removeBorrower.call(borrowerEjPiID, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractBGhXyU0 = await Bank.new({from: accounts[3]});
		const tokeniblz9qF = "0x0000000000000000000000000000000000000000"
		const balanceHPVb3WL = await contractBGhXyU0.totalSupplyOf.call(tokeniblz9qF, {from: accounts[4]});

		assert.equal(balanceHPVb3WL, 0)
	});

	it('test for Bank', async () => {
		const contractLOseOyH = await Bank.new({from: accounts[3]});
		const amountskNOPmZ = BigInt("1720")
		const tokenHdGUcdt = accounts[1]
		const amountlr67qdH = BigInt("237")
		const tokenDsmpO8S = "0x0000000000000000000000000000000000000001"
		const amountKtusqhm = BigInt("832")
		const tokenrlLoxyi = accounts[3]
		const borrowerybSrpre = "0x0000000000000000000000000000000000000001"
		await contractLOseOyH.withdraw.call(tokenHdGUcdt, amountskNOPmZ, {from: accounts[3]});
		await contractLOseOyH.borrow.call(tokenDsmpO8S, amountlr67qdH, {from: "0x0000000000000000000000000000000000000001"});
		await contractLOseOyH.repay.call(tokenrlLoxyi, amountKtusqhm, {from: accounts[4]});
		await contractLOseOyH.removeBorrower.call(borrowerybSrpre, {from: accounts[5]});

		await expect(contractLOseOyH.withdraw.call(tokenHdGUcdt, amountskNOPmZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})