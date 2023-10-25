const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractEH318q7 = await Bank.new({from: accounts[1]});
		const amountyiYV7NY = BigInt("260")
		const tokenvJRPpq4 = accounts[0]
		const borrowerC6wdafg = "0x0000000000000000000000000000000000000001"
		await contractEH318q7.borrow.call(tokenvJRPpq4, amountyiYV7NY, {from: accounts[2]});
		await contractEH318q7.removeBorrower.call(borrowerC6wdafg, {from: accounts[4]});

		await expect(contractEH318q7.borrow.call(tokenvJRPpq4, amountyiYV7NY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractBiSr5Yu = await Bank.new({from: accounts[0]});
		const amounttMlb0nw = BigInt("963")
		const tokenAIP8Mg = accounts[1]
		const borrowerXF6kfDb = accounts[1]
		await contractBiSr5Yu.repay.call(tokenAIP8Mg, amounttMlb0nw, {from: accounts[0]});
		await contractBiSr5Yu.removeBorrower.call(borrowerXF6kfDb, {from: accounts[2]});

		await expect(contractBiSr5Yu.repay.call(tokenAIP8Mg, amounttMlb0nw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractQFGpD9l = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountuwuNZci = BigInt("138")
		const tokenM47TQ2U = accounts[4]
		const amountzKWsr51 = BigInt("1512")
		const whowA9P2j5 = accounts[2]
		const tokenoC5naD = accounts[3]
		const borrowerDmUqxAn = accounts[2]
		await contractQFGpD9l.withdraw.call(tokenM47TQ2U, amountuwuNZci, {from: accounts[3]});
		await contractQFGpD9l.borrowFor.call(tokenoC5naD, whowA9P2j5, amountzKWsr51, {from: accounts[1]});
		await contractQFGpD9l.addBorrower.call(borrowerDmUqxAn, {from: accounts[1]});
	});

	it('test for Bank', async () => {
		const contractcfoi0M = await Bank.new({from: accounts[2]});
		const tokenILrJxHh = accounts[4]
		const borrowermveAmQ = accounts[0]
		const borrowerjhV35e = accounts[4]
		const amountcGNt0pZ = BigInt("209")
		const tokenZ45YFfR = accounts[0]
		const balanceuJBt5Up = await contractcfoi0M.totalSupplyOf.call(tokenILrJxHh, {from: "0x0000000000000000000000000000000000000001"});
		await contractcfoi0M.removeBorrower.call(borrowermveAmQ, {from: accounts[0]});
		await contractcfoi0M.removeBorrower.call(borrowerjhV35e, {from: accounts[0]});
		await contractcfoi0M.withdraw.call(tokenZ45YFfR, amountcGNt0pZ, {from: accounts[2]});

		await expect(contractcfoi0M.totalSupplyOf.call(tokenILrJxHh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractekf5Y2 = await Bank.new({from: accounts[1]});
		const borrowerwSxfSyf = accounts[2]
		const amountfnpWUIi = BigInt("119")
		const whojRlwLr = accounts[4]
		const tokenCqmjYzU = accounts[1]
		const amountUZVmLs5 = BigInt("1021")
		const tokenskzvSqZ = accounts[0]
		await contractekf5Y2.removeBorrower.call(borrowerwSxfSyf, {from: accounts[1]});
		await contractekf5Y2.borrowFor.call(tokenCqmjYzU, whojRlwLr, amountfnpWUIi, {from: "0x0000000000000000000000000000000000000001"});
		await contractekf5Y2.borrow.call(tokenskzvSqZ, amountUZVmLs5, {from: accounts[2]});

		await expect(contractekf5Y2.removeBorrower.call(borrowerwSxfSyf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractHmuECz7 = await Bank.new({from: accounts[4]});
		const amountL6rW9MV = BigInt("1416")
		const tokenmX3VfhW = accounts[3]
		const amountTYate4 = BigInt("303")
		const whogsbb5i = accounts[3]
		const token65TqaU = accounts[2]
		await contractHmuECz7.deposit.call(tokenmX3VfhW, amountL6rW9MV, {from: accounts[3]});
		await contractHmuECz7.borrowFor.call(token65TqaU, whogsbb5i, amountTYate4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractHmuECz7.deposit.call(tokenmX3VfhW, amountL6rW9MV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractyXzCycg = await Bank.new({from: accounts[4]});
		const tokenucxA3UW = "0x0000000000000000000000000000000000000000"
		const amountLix65e9 = BigInt("1416")
		const tokenAI76GGD = accounts[3]
		const amountKSLu0uq = BigInt("1621")
		const tokenC960V1 = accounts[3]
		const balancecUklJcU = await contractyXzCycg.totalSupplyOf.call(tokenucxA3UW, {from: accounts[2]});
		await contractyXzCycg.deposit.call(tokenAI76GGD, amountLix65e9, {from: accounts[3]});
		await contractyXzCycg.borrow.call(tokenC960V1, amountKSLu0uq, {from: accounts[0]});

		assert.equal(balancecUklJcU, 0)
		await expect(contractyXzCycg.deposit.call(tokenAI76GGD, amountLix65e9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractfLcIrmg = await Bank.new({from: accounts[1]});
		const borrowerT0gpV0a = accounts[1]
		const borrowerDORvMc = accounts[0]
		const amountK2ZJCYW = BigInt("260")
		const tokenTcrx751 = accounts[0]
		await contractfLcIrmg.addBorrower.call(borrowerT0gpV0a, {from: accounts[1]});
		await contractfLcIrmg.addBorrower.call(borrowerDORvMc, {from: accounts[4]});
		await contractfLcIrmg.borrow.call(tokenTcrx751, amountK2ZJCYW, {from: accounts[2]});

		await expect(contractfLcIrmg.addBorrower.call(borrowerT0gpV0a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractz4LcTlH = await Bank.new({from: accounts[1]});
		const amountLZDU08 = BigInt("135")
		const tokenX7SsV25 = "0x0000000000000000000000000000000000000001"
		const amountpIibnVi = BigInt("260")
		const tokendO0z9Yy = accounts[1]
		await contractz4LcTlH.withdraw.call(tokenX7SsV25, amountLZDU08, {from: accounts[1]});
		await contractz4LcTlH.borrow.call(tokendO0z9Yy, amountpIibnVi, {from: accounts[2]});

		await expect(contractz4LcTlH.withdraw.call(tokenX7SsV25, amountLZDU08, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})