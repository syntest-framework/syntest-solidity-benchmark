const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractTTPDbaf = await Bank.new({from: accounts[0]});
		const amountpI3ctb4 = BigInt("1746")
		const tokenOelbMiz = accounts[4]
		const tokenXjmzmxI = accounts[3]
		const amountaDgHkk = BigInt("964")
		const tokenMuPVO5R = accounts[4]
		const amountjczSBDL = BigInt("703")
		const tokenZHrNlLY = accounts[1]
		await contractTTPDbaf.withdraw.call(tokenOelbMiz, amountpI3ctb4, {from: accounts[4]});
		const balancenypGwIY = await contractTTPDbaf.totalSupplyOf.call(tokenXjmzmxI, {from: accounts[0]});
		await contractTTPDbaf.withdraw.call(tokenMuPVO5R, amountaDgHkk, {from: accounts[5]});
		await contractTTPDbaf.repay.call(tokenZHrNlLY, amountjczSBDL, {from: accounts[2]});

		await expect(contractTTPDbaf.withdraw.call(tokenOelbMiz, amountpI3ctb4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractgiZ2gFG = await Bank.new({from: accounts[3]});
		const amountnv44tgL = BigInt("1681")
		const tokenmNe27dU = accounts[4]
		const amountvr0TYRC = BigInt("872")
		const tokenaat2QrR = accounts[0]
		const borrowerVv5kGq8 = "0x0000000000000000000000000000000000000001"
		await contractgiZ2gFG.repay.call(tokenmNe27dU, amountnv44tgL, {from: accounts[0]});
		await contractgiZ2gFG.borrow.call(tokenaat2QrR, amountvr0TYRC, {from: accounts[5]});
		await contractgiZ2gFG.addBorrower.call(borrowerVv5kGq8, {from: accounts[4]});

		await expect(contractgiZ2gFG.repay.call(tokenmNe27dU, amountnv44tgL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractTv1bO3h = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountXWkHIL = BigInt("270")
		const whoqiMOPgy = accounts[1]
		const tokenFPEwB1i = accounts[0]
		const borrowerScpzLEN = accounts[2]
		const amountldoKpQ5 = BigInt("637")
		const tokenNgvtEAd = accounts[3]
		const borrowerXA9vUAX = accounts[4]
		const borrowerX4A9JH9 = accounts[1]
		const tokenag8f3Un = accounts[0]
		await contractTv1bO3h.borrowFor.call(tokenFPEwB1i, whoqiMOPgy, amountXWkHIL, {from: accounts[4]});
		await contractTv1bO3h.removeBorrower.call(borrowerScpzLEN, {from: accounts[4]});
		await contractTv1bO3h.withdraw.call(tokenNgvtEAd, amountldoKpQ5, {from: accounts[4]});
		await contractTv1bO3h.addBorrower.call(borrowerXA9vUAX, {from: accounts[4]});
		await contractTv1bO3h.addBorrower.call(borrowerX4A9JH9, {from: accounts[4]});
		const balancefXBJU5V = await contractTv1bO3h.totalSupplyOf.call(tokenag8f3Un, {from: accounts[1]});
	});

	it('test for Bank', async () => {
		const contractMQWe06K = await Bank.new({from: accounts[5]});
		const amountvzjjDjC = BigInt("910")
		const tokenjaIn57F = accounts[3]
		const amountWJDG07D = BigInt("307")
		const tokenKSDNi9 = "0x0000000000000000000000000000000000000001"
		const borrowereFhzsD8 = accounts[0]
		const amountsUV9Uf4 = BigInt("906")
		const token0r6wFV = accounts[1]
		await contractMQWe06K.deposit.call(tokenjaIn57F, amountvzjjDjC, {from: accounts[0]});
		await contractMQWe06K.borrow.call(tokenKSDNi9, amountWJDG07D, {from: accounts[3]});
		await contractMQWe06K.removeBorrower.call(borrowereFhzsD8, {from: "0x0000000000000000000000000000000000000001"});
		await contractMQWe06K.withdraw.call(token0r6wFV, amountsUV9Uf4, {from: accounts[3]});

		await expect(contractMQWe06K.deposit.call(tokenjaIn57F, amountvzjjDjC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractjTcDF9z = await Bank.new({from: accounts[2]});
		const tokenYCJlhQ0 = accounts[3]
		const borrowers6iDCeu = accounts[0]
		const borrowerhnOIf8Y = accounts[1]
		const amountBPsxZlD = BigInt("179")
		const tokenWfbTfoD = accounts[1]
		const balanceZBZLusE = await contractjTcDF9z.totalSupplyOf.call(tokenYCJlhQ0, {from: accounts[0]});
		await contractjTcDF9z.addBorrower.call(borrowers6iDCeu, {from: accounts[4]});
		await contractjTcDF9z.addBorrower.call(borrowerhnOIf8Y, {from: accounts[0]});
		await contractjTcDF9z.repay.call(tokenWfbTfoD, amountBPsxZlD, {from: accounts[0]});

		await expect(contractjTcDF9z.totalSupplyOf.call(tokenYCJlhQ0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractXXlVfgX = await Bank.new({from: accounts[2]});
		const amountnJzYDXf = BigInt("1283")
		const tokensELAefz = "0x0000000000000000000000000000000000000001"
		const borrower0uqywd = accounts[4]
		const amountvvkV4S = BigInt("1407")
		const tokenJ9ijNSR = accounts[1]
		await contractXXlVfgX.withdraw.call(tokensELAefz, amountnJzYDXf, {from: accounts[2]});
		await contractXXlVfgX.removeBorrower.call(borrower0uqywd, {from: accounts[5]});
		await contractXXlVfgX.repay.call(tokenJ9ijNSR, amountvvkV4S, {from: accounts[0]});

		await expect(contractXXlVfgX.withdraw.call(tokensELAefz, amountnJzYDXf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractO5R6b1j = await Bank.new({from: accounts[2]});
		const borrowereu37VDF = accounts[3]
		const amountia04erj = BigInt("1444")
		const tokenJfc5X9b = accounts[2]
		const tokenres073C = accounts[1]
		await contractO5R6b1j.removeBorrower.call(borrowereu37VDF, {from: accounts[2]});
		await contractO5R6b1j.repay.call(tokenJfc5X9b, amountia04erj, {from: accounts[0]});
		const balanceo5r0RE = await contractO5R6b1j.totalSupplyOf.call(tokenres073C, {from: accounts[1]});

		await expect(contractO5R6b1j.removeBorrower.call(borrowereu37VDF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractlxJyx44 = await Bank.new({from: accounts[2]});
		const borroweruZcLv5Y = "0x0000000000000000000000000000000000000001"
		const amountHipLsBk = BigInt("1387")
		const tokenICWO4L = accounts[1]
		await contractlxJyx44.addBorrower.call(borroweruZcLv5Y, {from: accounts[2]});
		await contractlxJyx44.repay.call(tokenICWO4L, amountHipLsBk, {from: accounts[0]});

		await expect(contractlxJyx44.addBorrower.call(borroweruZcLv5Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractYokeqvR = await Bank.new({from: accounts[2]});
		const tokenUfJkCCv = "0x0000000000000000000000000000000000000000"
		const borrowermtCpdgN = accounts[4]
		const amountAsNZ3YK = BigInt("1972")
		const tokenA1dR72A = accounts[4]
		const amountQOjWgdY = BigInt("1444")
		const tokenShhf7lh = accounts[3]
		const balanceL2R3vh = await contractYokeqvR.totalSupplyOf.call(tokenUfJkCCv, {from: accounts[0]});
		await contractYokeqvR.addBorrower.call(borrowermtCpdgN, {from: accounts[5]});
		await contractYokeqvR.borrow.call(tokenA1dR72A, amountAsNZ3YK, {from: accounts[3]});
		await contractYokeqvR.repay.call(tokenShhf7lh, amountQOjWgdY, {from: accounts[0]});

		assert.equal(balanceL2R3vh, 0)
		await expect(contractYokeqvR.addBorrower.call(borrowermtCpdgN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})