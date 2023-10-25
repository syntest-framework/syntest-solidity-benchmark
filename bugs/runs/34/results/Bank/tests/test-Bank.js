const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractvLQxAk2 = await Bank.new({from: accounts[3]});
		const borrowerilDbMcZ = accounts[3]
		const borrowerFtcrJE5 = accounts[3]
		const borrowerAB5p22H = "0x0000000000000000000000000000000000000001"
		const amountkRqjNHc = BigInt("655")
		const tokenxMgC8Cf = "0x0000000000000000000000000000000000000001"
		const amountoFEXMMF = BigInt("30")
		const tokenXVgEYnN = accounts[1]
		await contractvLQxAk2.addBorrower.call(borrowerilDbMcZ, {from: accounts[4]});
		await contractvLQxAk2.removeBorrower.call(borrowerFtcrJE5, {from: accounts[3]});
		await contractvLQxAk2.removeBorrower.call(borrowerAB5p22H, {from: accounts[4]});
		await contractvLQxAk2.borrow.call(tokenxMgC8Cf, amountkRqjNHc, {from: accounts[0]});
		await contractvLQxAk2.repay.call(tokenXVgEYnN, amountoFEXMMF, {from: accounts[5]});

		await expect(contractvLQxAk2.addBorrower.call(borrowerilDbMcZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractPMbDYsA = await Bank.new({from: accounts[0]});
		const tokendTV5NIr = accounts[0]
		const tokenMAYkDsw = accounts[4]
		const tokenAzl4XAU = accounts[5]
		const borrowerkun2vR = accounts[3]
		const balanceOS10Gw = await contractPMbDYsA.totalSupplyOf.call(tokendTV5NIr, {from: accounts[4]});
		const balanceyW89Rq5 = await contractPMbDYsA.totalSupplyOf.call(tokenMAYkDsw, {from: accounts[1]});
		const balancexr4TsCX = await contractPMbDYsA.totalSupplyOf.call(tokenAzl4XAU, {from: "0x0000000000000000000000000000000000000001"});
		await contractPMbDYsA.addBorrower.call(borrowerkun2vR, {from: accounts[1]});

		await expect(contractPMbDYsA.totalSupplyOf.call(tokendTV5NIr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractgpzxokI = await Bank.new({from: accounts[2]});
		const borrowerpgr9Aby = accounts[1]
		const amountJ16AZbg = BigInt("1619")
		const tokenOt9ycu8 = accounts[1]
		const borrowerQFNp7pQ = accounts[4]
		const amountfXbOGqB = BigInt("2004")
		const whoOMRhQW = accounts[1]
		const tokenGXE7f7 = accounts[4]
		const amountVWomBYH = BigInt("324")
		const tokencjiPF2 = accounts[2]
		const amountsGeN1RH = BigInt("1882")
		const tokenMA8AcWK = accounts[1]
		await contractgpzxokI.removeBorrower.call(borrowerpgr9Aby, {from: accounts[2]});
		await contractgpzxokI.borrow.call(tokenOt9ycu8, amountJ16AZbg, {from: accounts[1]});
		await contractgpzxokI.removeBorrower.call(borrowerQFNp7pQ, {from: accounts[5]});
		await contractgpzxokI.borrowFor.call(tokenGXE7f7, whoOMRhQW, amountfXbOGqB, {from: accounts[0]});
		await contractgpzxokI.withdraw.call(tokencjiPF2, amountVWomBYH, {from: accounts[4]});
		await contractgpzxokI.repay.call(tokenMA8AcWK, amountsGeN1RH, {from: accounts[3]});

		await expect(contractgpzxokI.removeBorrower.call(borrowerpgr9Aby, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractM7dHhFN = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const borrowerbJfRvTa = accounts[3]
		const borrowerfXDEyeG = accounts[5]
		const amountRnJB9n = BigInt("1694")
		const tokensK6C6QR = accounts[4]
		const borrowermw7U5g6 = accounts[3]
		const amounto5V6zis = BigInt("19")
		const whoH1iQAcO = accounts[1]
		const tokenpSRyppN = accounts[4]
		await contractM7dHhFN.addBorrower.call(borrowerbJfRvTa, {from: accounts[2]});
		await contractM7dHhFN.removeBorrower.call(borrowerfXDEyeG, {from: accounts[2]});
		await contractM7dHhFN.repay.call(tokensK6C6QR, amountRnJB9n, {from: accounts[1]});
		await contractM7dHhFN.removeBorrower.call(borrowermw7U5g6, {from: accounts[3]});
		await contractM7dHhFN.borrowFor.call(tokenpSRyppN, whoH1iQAcO, amounto5V6zis, {from: accounts[1]});
	});

	it('test for Bank', async () => {
		const contractxpWmiw = await Bank.new({from: accounts[3]});
		const amountDdRgjZ4 = BigInt("1115")
		const tokenN7Yh8C5 = accounts[3]
		const amountxj8Q4uf = BigInt("618")
		const tokencMGgn7q = accounts[0]
		await contractxpWmiw.repay.call(tokenN7Yh8C5, amountDdRgjZ4, {from: accounts[0]});
		await contractxpWmiw.borrow.call(tokencMGgn7q, amountxj8Q4uf, {from: accounts[2]});

		await expect(contractxpWmiw.repay.call(tokenN7Yh8C5, amountDdRgjZ4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractWcEzyBc = await Bank.new({from: accounts[0]});
		const tokenSKOQewl = "0x0000000000000000000000000000000000000000"
		const borrowerQxCq8Zz = accounts[4]
		const borrowervtQGoPg = accounts[4]
		const borrowerasqGpXY = accounts[3]
		const amountxCVbux1 = BigInt("814")
		const tokenmlENjVu = accounts[4]
		const borrowerhpd8LYy = "0x0000000000000000000000000000000000000001"
		const balanceusvQ4mY = await contractWcEzyBc.totalSupplyOf.call(tokenSKOQewl, {from: "0x0000000000000000000000000000000000000001"});
		await contractWcEzyBc.removeBorrower.call(borrowerQxCq8Zz, {from: accounts[0]});
		await contractWcEzyBc.removeBorrower.call(borrowervtQGoPg, {from: accounts[4]});
		await contractWcEzyBc.removeBorrower.call(borrowerasqGpXY, {from: accounts[1]});
		await contractWcEzyBc.repay.call(tokenmlENjVu, amountxCVbux1, {from: accounts[1]});
		await contractWcEzyBc.removeBorrower.call(borrowerhpd8LYy, {from: accounts[2]});

		assert.equal(balanceusvQ4mY, 0)
		await expect(contractWcEzyBc.removeBorrower.call(borrowerQxCq8Zz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractBIapvHS = await Bank.new({from: accounts[0]});
		const borrowerCxLPS9k = accounts[3]
		const tokenQOaggke = accounts[0]
		const tokenPBmOKs = accounts[4]
		const amountbEhu0TL = BigInt("20")
		const tokenBKKH0JW = accounts[3]
		const amountv9P6FtV = BigInt("710")
		const tokenybpcEPG = accounts[2]
		const amount5VqOBv = BigInt("973")
		const whoQcxocCx = accounts[4]
		const tokenkvjxnWM = accounts[4]
		const tokenAAakyBm = accounts[5]
		const borrowerzSv7Zvb = accounts[4]
		await contractBIapvHS.addBorrower.call(borrowerCxLPS9k, {from: accounts[0]});
		const balancec1pxrgJ = await contractBIapvHS.totalSupplyOf.call(tokenQOaggke, {from: accounts[4]});
		const balanceVTfCw2y = await contractBIapvHS.totalSupplyOf.call(tokenPBmOKs, {from: accounts[1]});
		await contractBIapvHS.repay.call(tokenBKKH0JW, amountbEhu0TL, {from: accounts[2]});
		await contractBIapvHS.repay.call(tokenybpcEPG, amountv9P6FtV, {from: "0x0000000000000000000000000000000000000001"});
		await contractBIapvHS.borrowFor.call(tokenkvjxnWM, whoQcxocCx, amount5VqOBv, {from: accounts[5]});
		const balanceJm5f4Q = await contractBIapvHS.totalSupplyOf.call(tokenAAakyBm, {from: "0x0000000000000000000000000000000000000001"});
		await contractBIapvHS.addBorrower.call(borrowerzSv7Zvb, {from: accounts[1]});

		await expect(contractBIapvHS.addBorrower.call(borrowerCxLPS9k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractEooTYq9 = await Bank.new({from: accounts[3]});
		const amountJPKQ9b = BigInt("145")
		const tokenCebKJ43 = accounts[2]
		const amountcruJIY1 = BigInt("2022")
		const whomr8BqI5 = accounts[4]
		const tokenncU7w3h = accounts[5]
		const amountDNtezlb = BigInt("170")
		const tokenYXFcBV8 = accounts[0]
		await contractEooTYq9.withdraw.call(tokenCebKJ43, amountJPKQ9b, {from: accounts[3]});
		await contractEooTYq9.borrowFor.call(tokenncU7w3h, whomr8BqI5, amountcruJIY1, {from: accounts[5]});
		await contractEooTYq9.repay.call(tokenYXFcBV8, amountDNtezlb, {from: accounts[5]});

		await expect(contractEooTYq9.withdraw.call(tokenCebKJ43, amountJPKQ9b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractH2C3t0y = await Bank.new({from: accounts[1]});
		const amountIj7Drp = BigInt("1403")
		const tokenCgq20sO = accounts[4]
		const amountYbITJsW = BigInt("847")
		const whozIPfzU = accounts[5]
		const tokenPPFn7ZN = "0x0000000000000000000000000000000000000001"
		const amount0OeFuc = BigInt("1679")
		const tokenOigXFxX = accounts[1]
		await contractH2C3t0y.deposit.call(tokenCgq20sO, amountIj7Drp, {from: accounts[3]});
		await contractH2C3t0y.borrowFor.call(tokenPPFn7ZN, whozIPfzU, amountYbITJsW, {from: accounts[3]});
		await contractH2C3t0y.repay.call(tokenOigXFxX, amount0OeFuc, {from: accounts[4]});

		await expect(contractH2C3t0y.deposit.call(tokenCgq20sO, amountIj7Drp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})