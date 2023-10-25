const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractOCDP5qE = await Bank.new({from: accounts[0]});
		const amountEbrYoOV = BigInt("21")
		const tokenGARUt4a = accounts[3]
		const tokentxL8Jv = accounts[1]
		await contractOCDP5qE.repay.call(tokenGARUt4a, amountEbrYoOV, {from: accounts[5]});
		const balanceFtIz3EZ = await contractOCDP5qE.totalSupplyOf.call(tokentxL8Jv, {from: accounts[0]});

		await expect(contractOCDP5qE.repay.call(tokenGARUt4a, amountEbrYoOV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractw0LTxtc = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountAilyAR = BigInt("600")
		const tokensUQV7m = accounts[0]
		const amountD51JmB = BigInt("84")
		const tokenTe1tWU9 = accounts[5]
		const tokenExd6t1b = accounts[0]
		const amountUbzr9uJ = BigInt("1803")
		const tokenvwKEss = accounts[5]
		const borrowerbCQV26 = accounts[0]
		const amounttT38V0A = BigInt("1737")
		const whodVix2m3 = accounts[2]
		const tokenquHw0Fb = accounts[3]
		await contractw0LTxtc.deposit.call(tokensUQV7m, amountAilyAR, {from: accounts[2]});
		await contractw0LTxtc.withdraw.call(tokenTe1tWU9, amountD51JmB, {from: accounts[2]});
		const balancebCgEdNG = await contractw0LTxtc.totalSupplyOf.call(tokenExd6t1b, {from: accounts[3]});
		await contractw0LTxtc.borrow.call(tokenvwKEss, amountUbzr9uJ, {from: accounts[4]});
		await contractw0LTxtc.addBorrower.call(borrowerbCQV26, {from: accounts[5]});
		await contractw0LTxtc.borrowFor.call(tokenquHw0Fb, whodVix2m3, amounttT38V0A, {from: accounts[1]});
	});

	it('test for Bank', async () => {
		const contracttb5LcjN = await Bank.new({from: accounts[4]});
		const borrowerWqy3MS = accounts[0]
		const borrowerY2cyXkc = accounts[3]
		const borrowerMuBal0y = accounts[4]
		const amountDNyDbXx = BigInt("1683")
		const tokenopDaTD8 = accounts[1]
		await contracttb5LcjN.addBorrower.call(borrowerWqy3MS, {from: accounts[4]});
		await contracttb5LcjN.removeBorrower.call(borrowerY2cyXkc, {from: "0x0000000000000000000000000000000000000001"});
		await contracttb5LcjN.removeBorrower.call(borrowerMuBal0y, {from: accounts[0]});
		await contracttb5LcjN.borrow.call(tokenopDaTD8, amountDNyDbXx, {from: accounts[2]});

		await expect(contracttb5LcjN.addBorrower.call(borrowerWqy3MS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractILIaX63 = await Bank.new({from: accounts[2]});
		const tokenIjv38yL = accounts[0]
		const amounttRL4WqJ = BigInt("2037")
		const tokenaj5yY4 = accounts[2]
		const borrowerZcjscy = accounts[1]
		const amountWtuyYNK = BigInt("1461")
		const tokenB0TD7iz = "0x0000000000000000000000000000000000000001"
		const borrowerKZqlWlb = accounts[1]
		const tokenGOWwFqL = accounts[3]
		const balancejCojJug = await contractILIaX63.totalSupplyOf.call(tokenIjv38yL, {from: accounts[3]});
		await contractILIaX63.borrow.call(tokenaj5yY4, amounttRL4WqJ, {from: accounts[1]});
		await contractILIaX63.addBorrower.call(borrowerZcjscy, {from: accounts[2]});
		await contractILIaX63.withdraw.call(tokenB0TD7iz, amountWtuyYNK, {from: accounts[5]});
		await contractILIaX63.removeBorrower.call(borrowerKZqlWlb, {from: accounts[1]});
		const balancevEmSCqN = await contractILIaX63.totalSupplyOf.call(tokenGOWwFqL, {from: accounts[0]});

		await expect(contractILIaX63.totalSupplyOf.call(tokenIjv38yL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractZG74s08 = await Bank.new({from: accounts[5]});
		const amountP3Ht9P = BigInt("672")
		const tokenQcpdXMr = accounts[4]
		const borrowerR4mgVNH = accounts[4]
		await contractZG74s08.deposit.call(tokenQcpdXMr, amountP3Ht9P, {from: accounts[2]});
		await contractZG74s08.removeBorrower.call(borrowerR4mgVNH, {from: accounts[1]});

		await expect(contractZG74s08.deposit.call(tokenQcpdXMr, amountP3Ht9P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractpABG8Th = await Bank.new({from: accounts[0]});
		const borrowerBfLlYX7 = accounts[2]
		const amountE1PEWiB = BigInt("21")
		const tokenKBnzn4C = accounts[4]
		await contractpABG8Th.removeBorrower.call(borrowerBfLlYX7, {from: accounts[0]});
		await contractpABG8Th.repay.call(tokenKBnzn4C, amountE1PEWiB, {from: accounts[5]});

		await expect(contractpABG8Th.removeBorrower.call(borrowerBfLlYX7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractPKcNdQ = await Bank.new({from: accounts[0]});
		const tokenfuoHXF = "0x0000000000000000000000000000000000000000"
		const amountvipCuNx = BigInt("1768")
		const tokenvKtnzh6 = accounts[1]
		const amountp44foyT = BigInt("21")
		const tokenkyYa0Vs = accounts[3]
		const amountbKl4Jx4 = BigInt("401")
		const tokenWZjM5Xc = accounts[2]
		const amount0D6ae8 = BigInt("634")
		const tokenLzy8ONF = accounts[3]
		const balanceb3bgB9m = await contractPKcNdQ.totalSupplyOf.call(tokenfuoHXF, {from: accounts[4]});
		await contractPKcNdQ.borrow.call(tokenvKtnzh6, amountvipCuNx, {from: accounts[3]});
		await contractPKcNdQ.repay.call(tokenkyYa0Vs, amountp44foyT, {from: accounts[5]});
		await contractPKcNdQ.deposit.call(tokenWZjM5Xc, amountbKl4Jx4, {from: accounts[1]});
		await contractPKcNdQ.deposit.call(tokenLzy8ONF, amount0D6ae8, {from: accounts[5]});

		assert.equal(balanceb3bgB9m, 0)
		await expect(contractPKcNdQ.borrow.call(tokenvKtnzh6, amountvipCuNx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractV7xzcp4 = await Bank.new({from: accounts[0]});
		const amountmGJwTX = BigInt("202")
		const tokenI5uVmwx = accounts[4]
		const amounteqos8du = BigInt("1001")
		const tokenCpMByPp = accounts[0]
		const amountTohQ0N = BigInt("21")
		const tokenO3gwX19 = accounts[3]
		await contractV7xzcp4.withdraw.call(tokenI5uVmwx, amountmGJwTX, {from: accounts[0]});
		await contractV7xzcp4.repay.call(tokenCpMByPp, amounteqos8du, {from: accounts[4]});
		await contractV7xzcp4.repay.call(tokenO3gwX19, amountTohQ0N, {from: accounts[5]});

		await expect(contractV7xzcp4.withdraw.call(tokenI5uVmwx, amountmGJwTX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})