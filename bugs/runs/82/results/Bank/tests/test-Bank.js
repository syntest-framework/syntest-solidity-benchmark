const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractWCMkQY1 = await Bank.new({from: accounts[1]});
		const amountHMakfW4 = BigInt("1824")
		const tokentTdZinR = accounts[4]
		const amountPFV2dEd = BigInt("1972")
		const whoqEfvgTa = accounts[3]
		const tokenvQlt46V = accounts[4]
		const amountuhwsWR = BigInt("1584")
		const whoDZ5vxr5 = accounts[4]
		const tokenStVkVOT = accounts[2]
		const tokenOUylJJw = accounts[0]
		await contractWCMkQY1.repay.call(tokentTdZinR, amountHMakfW4, {from: accounts[0]});
		await contractWCMkQY1.borrowFor.call(tokenvQlt46V, whoqEfvgTa, amountPFV2dEd, {from: accounts[0]});
		await contractWCMkQY1.borrowFor.call(tokenStVkVOT, whoDZ5vxr5, amountuhwsWR, {from: accounts[2]});
		const balancexlIpsDp = await contractWCMkQY1.totalSupplyOf.call(tokenOUylJJw, {from: accounts[5]});

		await expect(contractWCMkQY1.repay.call(tokentTdZinR, amountHMakfW4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractHJjfA9p = await Bank.new({from: accounts[4]});
		const tokeneCW9nVi = "0x0000000000000000000000000000000000000001"
		const amountymCVS24 = BigInt("489")
		const tokenBuYS0LQ = accounts[0]
		const borroweraqnJwFZ = accounts[2]
		const balancekLILuXs = await contractHJjfA9p.totalSupplyOf.call(tokeneCW9nVi, {from: accounts[0]});
		await contractHJjfA9p.withdraw.call(tokenBuYS0LQ, amountymCVS24, {from: accounts[2]});
		await contractHJjfA9p.removeBorrower.call(borroweraqnJwFZ, {from: accounts[3]});

		await expect(contractHJjfA9p.totalSupplyOf.call(tokeneCW9nVi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractxCWWmhD = await Bank.new({from: accounts[3]});
		const amountIu2HTL = BigInt("1235")
		const tokenCLiAxoG = accounts[4]
		const amountSonO7L6 = BigInt("376")
		const tokensViAyAa = accounts[2]
		const amountzHr0RQn = BigInt("1465")
		const tokenI6mPMmx = accounts[5]
		const amountmV9tRrw = BigInt("1842")
		const tokenK4XNqeB = accounts[4]
		const borrowerHIoiDom = accounts[3]
		await contractxCWWmhD.deposit.call(tokenCLiAxoG, amountIu2HTL, {from: accounts[3]});
		await contractxCWWmhD.borrow.call(tokensViAyAa, amountSonO7L6, {from: accounts[1]});
		await contractxCWWmhD.repay.call(tokenI6mPMmx, amountzHr0RQn, {from: accounts[3]});
		await contractxCWWmhD.withdraw.call(tokenK4XNqeB, amountmV9tRrw, {from: accounts[3]});
		await contractxCWWmhD.addBorrower.call(borrowerHIoiDom, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractxCWWmhD.deposit.call(tokenCLiAxoG, amountIu2HTL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractc0EvxQr = await Bank.new({from: accounts[4]});
		const tokenS21NkHT = "0x0000000000000000000000000000000000000000"
		const amountuohZEaP = BigInt("493")
		const tokenK1XbmOM = accounts[0]
		const tokenGlzYRGG = accounts[2]
		const tokentl4gUm2 = accounts[4]
		const borrowerSvrWYi4 = accounts[5]
		const balanceFWJxWnB = await contractc0EvxQr.totalSupplyOf.call(tokenS21NkHT, {from: accounts[0]});
		await contractc0EvxQr.withdraw.call(tokenK1XbmOM, amountuohZEaP, {from: accounts[2]});
		const balancef2rIk5m = await contractc0EvxQr.totalSupplyOf.call(tokenGlzYRGG, {from: accounts[2]});
		const balancekFidmGM = await contractc0EvxQr.totalSupplyOf.call(tokentl4gUm2, {from: accounts[2]});
		await contractc0EvxQr.removeBorrower.call(borrowerSvrWYi4, {from: accounts[2]});

		assert.equal(balanceFWJxWnB, 0)
		await expect(contractc0EvxQr.withdraw.call(tokenK1XbmOM, amountuohZEaP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractRbbipKw = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountr8r2U5s = BigInt("645")
		const whoivFcLg6 = accounts[1]
		const tokenK8vRWo = accounts[3]
		const amountZCCBwtb = BigInt("1358")
		const whoNDGFuFG = accounts[2]
		const tokenSWgZHD7 = accounts[3]
		await contractRbbipKw.borrowFor.call(tokenK8vRWo, whoivFcLg6, amountr8r2U5s, {from: accounts[3]});
		await contractRbbipKw.borrowFor.call(tokenSWgZHD7, whoNDGFuFG, amountZCCBwtb, {from: accounts[3]});
	});

	it('test for Bank', async () => {
		const contractONp7ZgM = await Bank.new({from: accounts[4]});
		const borrowerj98vWsI = accounts[4]
		const amountMUkLHhv = BigInt("1255")
		const tokenxTBkdON = accounts[4]
		const borrowerpzXTRf = accounts[4]
		await contractONp7ZgM.removeBorrower.call(borrowerj98vWsI, {from: accounts[4]});
		await contractONp7ZgM.withdraw.call(tokenxTBkdON, amountMUkLHhv, {from: accounts[1]});
		await contractONp7ZgM.removeBorrower.call(borrowerpzXTRf, {from: accounts[3]});

		await expect(contractONp7ZgM.removeBorrower.call(borrowerj98vWsI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractMYIaEF9 = await Bank.new({from: accounts[1]});
		const amountUU1yVss = BigInt("749")
		const tokenZ5N2FzO = accounts[3]
		const borrowerQZBcCY = accounts[4]
		const borrowerj86bopB = accounts[0]
		const borrowerYmUx6ya = "0x0000000000000000000000000000000000000001"
		const amountRYrseXw = BigInt("1210")
		const whogvnCk5 = accounts[2]
		const tokenZowTkE = accounts[4]
		await contractMYIaEF9.withdraw.call(tokenZ5N2FzO, amountUU1yVss, {from: accounts[1]});
		await contractMYIaEF9.addBorrower.call(borrowerQZBcCY, {from: accounts[1]});
		await contractMYIaEF9.removeBorrower.call(borrowerj86bopB, {from: accounts[0]});
		await contractMYIaEF9.addBorrower.call(borrowerYmUx6ya, {from: accounts[1]});
		await contractMYIaEF9.borrowFor.call(tokenZowTkE, whogvnCk5, amountRYrseXw, {from: accounts[5]});

		await expect(contractMYIaEF9.withdraw.call(tokenZ5N2FzO, amountUU1yVss, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractkNdaHLu = await Bank.new({from: accounts[4]});
		const borrower4hTiOX = accounts[1]
		const tokenH6TZXt = "0x0000000000000000000000000000000000000002"
		const borrowerM93Ybko = accounts[5]
		const borrowernsRnZMX = accounts[3]
		const amountudLdDr1 = BigInt("1253")
		const tokenqciHC2n = accounts[0]
		await contractkNdaHLu.addBorrower.call(borrower4hTiOX, {from: accounts[4]});
		const balanceqqKRis = await contractkNdaHLu.totalSupplyOf.call(tokenH6TZXt, {from: accounts[0]});
		await contractkNdaHLu.removeBorrower.call(borrowerM93Ybko, {from: accounts[4]});
		await contractkNdaHLu.removeBorrower.call(borrowernsRnZMX, {from: accounts[3]});
		await contractkNdaHLu.borrow.call(tokenqciHC2n, amountudLdDr1, {from: accounts[3]});

		await expect(contractkNdaHLu.addBorrower.call(borrower4hTiOX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})