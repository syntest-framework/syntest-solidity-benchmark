const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractWW0St03 = await Bank.new({from: accounts[3]});
		const amountPeaBfM = BigInt("78")
		const tokenoCxKaFn = accounts[4]
		const amountt0mal9d = BigInt("1405")
		const whoYiQjETL = accounts[4]
		const tokenUXQ2xy5 = accounts[0]
		await contractWW0St03.withdraw.call(tokenoCxKaFn, amountPeaBfM, {from: accounts[4]});
		await contractWW0St03.borrowFor.call(tokenUXQ2xy5, whoYiQjETL, amountt0mal9d, {from: accounts[5]});

		await expect(contractWW0St03.withdraw.call(tokenoCxKaFn, amountPeaBfM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractb1tNa7 = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenHR0igup = "0x0000000000000000000000000000000000000001"
		const borrowerSLad5ae = accounts[1]
		const amountyZ0RnLp = BigInt("244")
		const whobdoktC7 = accounts[0]
		const tokeng50mHFk = accounts[2]
		const balanceNnrMdmy = await contractb1tNa7.totalSupplyOf.call(tokenHR0igup, {from: "0x0000000000000000000000000000000000000001"});
		await contractb1tNa7.removeBorrower.call(borrowerSLad5ae, {from: accounts[2]});
		await contractb1tNa7.borrowFor.call(tokeng50mHFk, whobdoktC7, amountyZ0RnLp, {from: accounts[2]});
	});

	it('test for Bank', async () => {
		const contractHyDFoPy = await Bank.new({from: accounts[4]});
		const amountdKj8NIN = BigInt("390")
		const tokenuBN2CL = accounts[4]
		const amountLFg0Aut = BigInt("246")
		const tokenTwduhth = accounts[1]
		const amountIDJNTN = BigInt("1365")
		const tokenZX2G4St = accounts[3]
		const amountNeNZeK = BigInt("1705")
		const tokeno2dJnE = accounts[2]
		await contractHyDFoPy.withdraw.call(tokenuBN2CL, amountdKj8NIN, {from: accounts[4]});
		await contractHyDFoPy.repay.call(tokenTwduhth, amountLFg0Aut, {from: accounts[1]});
		await contractHyDFoPy.withdraw.call(tokenZX2G4St, amountIDJNTN, {from: "0x0000000000000000000000000000000000000001"});
		await contractHyDFoPy.repay.call(tokeno2dJnE, amountNeNZeK, {from: accounts[5]});

		await expect(contractHyDFoPy.withdraw.call(tokenuBN2CL, amountdKj8NIN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractPWsBXBS = await Bank.new({from: accounts[4]});
		const tokenYFxoHt = accounts[1]
		const borrowerzLwjmeg = accounts[1]
		const amountTn0xSGJ = BigInt("1581")
		const whoUwDxqFD = accounts[4]
		const tokenUKOZ6dH = accounts[0]
		const amountl4VjrhU = BigInt("83")
		const tokenlfTK5SB = accounts[3]
		const balancevStJIE0 = await contractPWsBXBS.totalSupplyOf.call(tokenYFxoHt, {from: accounts[1]});
		await contractPWsBXBS.removeBorrower.call(borrowerzLwjmeg, {from: accounts[5]});
		await contractPWsBXBS.borrowFor.call(tokenUKOZ6dH, whoUwDxqFD, amountTn0xSGJ, {from: accounts[5]});
		await contractPWsBXBS.repay.call(tokenlfTK5SB, amountl4VjrhU, {from: accounts[0]});

		await expect(contractPWsBXBS.totalSupplyOf.call(tokenYFxoHt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractWbTkQ2P = await Bank.new({from: accounts[4]});
		const amountth9BQhV = BigInt("107")
		const tokenCXoF6nE = accounts[3]
		await contractWbTkQ2P.repay.call(tokenCXoF6nE, amountth9BQhV, {from: accounts[0]});

		await expect(contractWbTkQ2P.repay.call(tokenCXoF6nE, amountth9BQhV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractMJr8yy = await Bank.new({from: accounts[4]});
		const amountbwoSOk9 = BigInt("173")
		const tokenTwck07X = accounts[5]
		const tokenizUm5O = accounts[1]
		const amounthZY1bfI = BigInt("1240")
		const tokenxwWhCMv = accounts[4]
		const amountzsOpMmW = BigInt("1581")
		const whoJ15bkn = accounts[4]
		const tokenGs0N4CY = accounts[0]
		const amountD72ygbT = BigInt("1047")
		const whoY2xjLWz = "0x0000000000000000000000000000000000000001"
		const tokenbhu1rWP = accounts[2]
		await contractMJr8yy.deposit.call(tokenTwck07X, amountbwoSOk9, {from: accounts[4]});
		const balancemxD0VO = await contractMJr8yy.totalSupplyOf.call(tokenizUm5O, {from: accounts[1]});
		await contractMJr8yy.deposit.call(tokenxwWhCMv, amounthZY1bfI, {from: accounts[5]});
		await contractMJr8yy.borrowFor.call(tokenGs0N4CY, whoJ15bkn, amountzsOpMmW, {from: accounts[5]});
		await contractMJr8yy.borrowFor.call(tokenbhu1rWP, whoY2xjLWz, amountD72ygbT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractMJr8yy.deposit.call(tokenTwck07X, amountbwoSOk9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractzQcV1jX = await Bank.new({from: accounts[4]});
		const borrowerSBRqtXP = accounts[4]
		const tokenXBIvDbg = accounts[1]
		const amount3sudrB = BigInt("1581")
		const whoBlgvj9A = accounts[4]
		const tokenMFWXvOx = accounts[0]
		const tokenNkfWHKS = accounts[3]
		const amountfrw69g9 = BigInt("107")
		const tokenmU0YOKH = accounts[4]
		await contractzQcV1jX.addBorrower.call(borrowerSBRqtXP, {from: accounts[4]});
		const balancexqqrn2n = await contractzQcV1jX.totalSupplyOf.call(tokenXBIvDbg, {from: accounts[1]});
		await contractzQcV1jX.borrowFor.call(tokenMFWXvOx, whoBlgvj9A, amount3sudrB, {from: accounts[5]});
		const balancepSG7tDY = await contractzQcV1jX.totalSupplyOf.call(tokenNkfWHKS, {from: accounts[1]});
		await contractzQcV1jX.repay.call(tokenmU0YOKH, amountfrw69g9, {from: accounts[0]});

		await expect(contractzQcV1jX.addBorrower.call(borrowerSBRqtXP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractYpT5UU9 = await Bank.new({from: accounts[4]});
		const borrowerw0INYGy = accounts[4]
		const tokenGYje6Ke = accounts[2]
		const tokenkpMV836 = accounts[2]
		await contractYpT5UU9.removeBorrower.call(borrowerw0INYGy, {from: accounts[4]});
		const balanceIdjlkQi = await contractYpT5UU9.totalSupplyOf.call(tokenGYje6Ke, {from: accounts[4]});
		const balanceiPUgKVL = await contractYpT5UU9.totalSupplyOf.call(tokenkpMV836, {from: accounts[1]});

		await expect(contractYpT5UU9.removeBorrower.call(borrowerw0INYGy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractIsUyTIu = await Bank.new({from: accounts[0]});
		const tokenhi7mRCG = "0x0000000000000000000000000000000000000000"
		const tokenQBI73Jc = accounts[2]
		const borrowerCUn8Lvi = accounts[5]
		const balancetOhCn0s = await contractIsUyTIu.totalSupplyOf.call(tokenhi7mRCG, {from: accounts[1]});
		const balanceUjyYYi = await contractIsUyTIu.totalSupplyOf.call(tokenQBI73Jc, {from: accounts[4]});
		await contractIsUyTIu.addBorrower.call(borrowerCUn8Lvi, {from: accounts[2]});

		assert.equal(balancetOhCn0s, 0)
		await expect(contractIsUyTIu.totalSupplyOf.call(tokenQBI73Jc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})