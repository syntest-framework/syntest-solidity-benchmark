const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractQUT5ZbR = await Bank.new({from: accounts[2]});
		const borrowerOW8m8TA = accounts[2]
		const amountqDAAXf6 = BigInt("725")
		const whohT5ylyg = accounts[2]
		const tokenDddvktR = accounts[4]
		await contractQUT5ZbR.removeBorrower.call(borrowerOW8m8TA, {from: accounts[3]});
		await contractQUT5ZbR.borrowFor.call(tokenDddvktR, whohT5ylyg, amountqDAAXf6, {from: accounts[2]});

		await expect(contractQUT5ZbR.removeBorrower.call(borrowerOW8m8TA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractO7Hfjfp = await Bank.new({from: accounts[3]});
		const amountaIo1cb = BigInt("1435")
		const tokenKLS99dC = accounts[2]
		const amount3ILMr2 = BigInt("1188")
		const tokenn8A8KR1 = "0x0000000000000000000000000000000000000001"
		const amountJLnRHB = BigInt("372")
		const tokenuvumLgm = accounts[1]
		await contractO7Hfjfp.repay.call(tokenKLS99dC, amountaIo1cb, {from: accounts[0]});
		await contractO7Hfjfp.repay.call(tokenn8A8KR1, amount3ILMr2, {from: accounts[0]});
		await contractO7Hfjfp.withdraw.call(tokenuvumLgm, amountJLnRHB, {from: accounts[5]});

		await expect(contractO7Hfjfp.repay.call(tokenKLS99dC, amountaIo1cb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractTDbcGb = await Bank.new({from: accounts[4]});
		const borroweroFROmix = accounts[4]
		const amountGWKYyKO = BigInt("1643")
		const tokenJJ1kp2C = "0x0000000000000000000000000000000000000001"
		const tokenIoD8dSH = accounts[4]
		const amounttkn9ysS = BigInt("1413")
		const tokenW9yMSyU = accounts[1]
		const tokenWNDzYQK = accounts[3]
		await contractTDbcGb.addBorrower.call(borroweroFROmix, {from: accounts[4]});
		await contractTDbcGb.borrow.call(tokenJJ1kp2C, amountGWKYyKO, {from: accounts[4]});
		const balance1iBcKc = await contractTDbcGb.totalSupplyOf.call(tokenIoD8dSH, {from: accounts[0]});
		await contractTDbcGb.borrow.call(tokenW9yMSyU, amounttkn9ysS, {from: accounts[3]});
		const balanceQlpnbmO = await contractTDbcGb.totalSupplyOf.call(tokenWNDzYQK, {from: accounts[0]});

		await expect(contractTDbcGb.addBorrower.call(borroweroFROmix, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracts3PuXus = await Bank.new({from: accounts[2]});
		const amountIpmP6iZ = BigInt("439")
		const tokentJPMBU5 = accounts[4]
		const amount0wiYME = BigInt("725")
		const whoelCV4SI = accounts[3]
		const tokenjg4dNY = accounts[4]
		await contracts3PuXus.deposit.call(tokentJPMBU5, amountIpmP6iZ, {from: accounts[3]});
		await contracts3PuXus.borrowFor.call(tokenjg4dNY, whoelCV4SI, amount0wiYME, {from: accounts[2]});

		await expect(contracts3PuXus.deposit.call(tokentJPMBU5, amountIpmP6iZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractnMTfJVl = await Bank.new({from: accounts[4]});
		const amountP9orXaQ = BigInt("1481")
		const tokenpddNHHS = accounts[3]
		const borrowerDr8hgB1 = accounts[3]
		const borrowerUYG4isR = accounts[2]
		const amountpE9EbCq = BigInt("1362")
		const tokenIaCgZB = accounts[0]
		await contractnMTfJVl.withdraw.call(tokenpddNHHS, amountP9orXaQ, {from: accounts[4]});
		await contractnMTfJVl.addBorrower.call(borrowerDr8hgB1, {from: accounts[0]});
		await contractnMTfJVl.addBorrower.call(borrowerUYG4isR, {from: "0x0000000000000000000000000000000000000001"});
		await contractnMTfJVl.withdraw.call(tokenIaCgZB, amountpE9EbCq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractnMTfJVl.withdraw.call(tokenpddNHHS, amountP9orXaQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractNwUZixF = await Bank.new({from: accounts[2]});
		const tokenipGzBRB = accounts[4]
		const borrowerTsFBaYm = accounts[3]
		const amountpohHu62 = BigInt("517")
		const whoRY6Jkqz = accounts[3]
		const tokenPAihc1I = accounts[4]
		const balanceSwXG7tV = await contractNwUZixF.totalSupplyOf.call(tokenipGzBRB, {from: accounts[5]});
		await contractNwUZixF.removeBorrower.call(borrowerTsFBaYm, {from: "0x0000000000000000000000000000000000000001"});
		await contractNwUZixF.borrowFor.call(tokenPAihc1I, whoRY6Jkqz, amountpohHu62, {from: accounts[2]});

		await expect(contractNwUZixF.totalSupplyOf.call(tokenipGzBRB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractoY22vQ = await Bank.new({from: accounts[0]});
		const borrowervNXAb0N = accounts[1]
		const amountzBHAHK2 = BigInt("1688")
		const tokenRO8QPRe = accounts[1]
		await contractoY22vQ.removeBorrower.call(borrowervNXAb0N, {from: accounts[0]});
		await contractoY22vQ.repay.call(tokenRO8QPRe, amountzBHAHK2, {from: accounts[2]});

		await expect(contractoY22vQ.removeBorrower.call(borrowervNXAb0N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractvmwF3Xi = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenBf6ZPd4 = accounts[1]
		const amountu2r4l5K = BigInt("354")
		const tokenKF0JbN3 = accounts[2]
		const balanceFfD6iNc = await contractvmwF3Xi.totalSupplyOf.call(tokenBf6ZPd4, {from: accounts[4]});
		await contractvmwF3Xi.deposit.call(tokenKF0JbN3, amountu2r4l5K, {from: accounts[1]});
	});
})