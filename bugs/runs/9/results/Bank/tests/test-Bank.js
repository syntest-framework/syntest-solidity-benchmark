const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractf68tdx2 = await Bank.new({from: accounts[5]});
		const borrowerecxeeYk = accounts[1]
		const amountwreJ0r8 = BigInt("44")
		const tokenV8ffW3Y = accounts[3]
		const amountcwjoxvW = BigInt("2033")
		const tokenh0CwrmO = accounts[3]
		const amountqaZWHo3 = BigInt("722")
		const tokenDQVQXmf = accounts[2]
		await contractf68tdx2.addBorrower.call(borrowerecxeeYk, {from: accounts[0]});
		await contractf68tdx2.borrow.call(tokenV8ffW3Y, amountwreJ0r8, {from: "0x0000000000000000000000000000000000000001"});
		await contractf68tdx2.repay.call(tokenh0CwrmO, amountcwjoxvW, {from: accounts[3]});
		await contractf68tdx2.deposit.call(tokenDQVQXmf, amountqaZWHo3, {from: accounts[3]});

		await expect(contractf68tdx2.addBorrower.call(borrowerecxeeYk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractZAFYESL = await Bank.new({from: accounts[1]});
		const borrowerPj34tnv = accounts[4]
		const amountG5yyNKY = BigInt("315")
		const tokenKHIkR4 = accounts[2]
		const amountYQ69kop = BigInt("922")
		const tokenVd5IQdb = accounts[0]
		await contractZAFYESL.addBorrower.call(borrowerPj34tnv, {from: accounts[1]});
		await contractZAFYESL.borrow.call(tokenKHIkR4, amountG5yyNKY, {from: accounts[3]});
		await contractZAFYESL.borrow.call(tokenVd5IQdb, amountYQ69kop, {from: accounts[1]});

		await expect(contractZAFYESL.addBorrower.call(borrowerPj34tnv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractibXSubn = await Bank.new({from: accounts[5]});
		const amountommiKVO = BigInt("1435")
		const tokengA7UM31 = accounts[3]
		const amountrwq3ybz = BigInt("1470")
		const tokenaxt2W8M = accounts[1]
		const borroweryGKc7S = accounts[2]
		const amount9zZzwm = BigInt("1322")
		const tokenxS0BR7Z = accounts[2]
		await contractibXSubn.repay.call(tokengA7UM31, amountommiKVO, {from: accounts[0]});
		await contractibXSubn.borrow.call(tokenaxt2W8M, amountrwq3ybz, {from: accounts[0]});
		await contractibXSubn.removeBorrower.call(borroweryGKc7S, {from: accounts[0]});
		await contractibXSubn.deposit.call(tokenxS0BR7Z, amount9zZzwm, {from: accounts[2]});

		await expect(contractibXSubn.repay.call(tokengA7UM31, amountommiKVO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractvQscYq = await Bank.new({from: accounts[0]});
		const tokenhRiECNM = accounts[2]
		const amountTTWGQyt = BigInt("1330")
		const whoeTaNqa = accounts[3]
		const tokenitgoWnI = accounts[0]
		const amountP5bi7w = BigInt("1414")
		const tokenp76H1g8 = accounts[4]
		const balanceDah8ad = await contractvQscYq.totalSupplyOf.call(tokenhRiECNM, {from: accounts[1]});
		await contractvQscYq.borrowFor.call(tokenitgoWnI, whoeTaNqa, amountTTWGQyt, {from: accounts[4]});
		await contractvQscYq.repay.call(tokenp76H1g8, amountP5bi7w, {from: accounts[0]});

		await expect(contractvQscYq.totalSupplyOf.call(tokenhRiECNM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractJd8MGbO = await Bank.new({from: accounts[0]});
		const amountO416phC = BigInt("161")
		const tokenMrSCJMY = accounts[0]
		const tokenajASas0 = accounts[4]
		const amountuYnZMYx = BigInt("1640")
		const whoHZQlXlu = accounts[0]
		const tokenj2wvNIV = "0x0000000000000000000000000000000000000001"
		await contractJd8MGbO.deposit.call(tokenMrSCJMY, amountO416phC, {from: accounts[1]});
		const balancerFNTtFR = await contractJd8MGbO.totalSupplyOf.call(tokenajASas0, {from: accounts[2]});
		await contractJd8MGbO.borrowFor.call(tokenj2wvNIV, whoHZQlXlu, amountuYnZMYx, {from: accounts[3]});

		await expect(contractJd8MGbO.deposit.call(tokenMrSCJMY, amountO416phC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contract01qj4r = await Bank.new({from: accounts[0]});
		const borrowerr8m6Qnt = accounts[2]
		const tokennfSj4fh = accounts[3]
		await contract01qj4r.removeBorrower.call(borrowerr8m6Qnt, {from: accounts[0]});
		const balanceWBsKKfy = await contract01qj4r.totalSupplyOf.call(tokennfSj4fh, {from: accounts[1]});

		await expect(contract01qj4r.removeBorrower.call(borrowerr8m6Qnt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractNo0zHed = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountjSWTvE = BigInt("1120")
		const tokenpDkzkL8 = accounts[2]
		const amounttpXeZkz = BigInt("318")
		const who0DcFgy = accounts[1]
		const tokeneVJ03hw = accounts[5]
		const amountTyHD0tT = BigInt("631")
		const tokenmXWK25q = accounts[2]
		const amountE3jBqxg = BigInt("1663")
		const whoejKvms7 = accounts[1]
		const tokenVZaLTy = accounts[3]
		await contractNo0zHed.withdraw.call(tokenpDkzkL8, amountjSWTvE, {from: "0x0000000000000000000000000000000000000001"});
		await contractNo0zHed.borrowFor.call(tokeneVJ03hw, who0DcFgy, amounttpXeZkz, {from: accounts[5]});
		await contractNo0zHed.deposit.call(tokenmXWK25q, amountTyHD0tT, {from: accounts[5]});
		await contractNo0zHed.borrowFor.call(tokenVZaLTy, whoejKvms7, amountE3jBqxg, {from: accounts[1]});
	});

	it('test for Bank', async () => {
		const contractF0sTu8z = await Bank.new({from: accounts[2]});
		const amounts4TqnW5 = BigInt("60")
		const tokenxB8f7RW = accounts[2]
		const amountOKy1tlU = BigInt("1548")
		const tokenJKSJmRs = accounts[4]
		const amountPUwmypJ = BigInt("592")
		const tokenDUVMOH5 = accounts[2]
		const amountGTHdUW = BigInt("1738")
		const whoG9zymxl = accounts[1]
		const tokenoWB4CjU = "0x0000000000000000000000000000000000000001"
		await contractF0sTu8z.withdraw.call(tokenxB8f7RW, amounts4TqnW5, {from: accounts[2]});
		await contractF0sTu8z.borrow.call(tokenJKSJmRs, amountOKy1tlU, {from: accounts[4]});
		await contractF0sTu8z.repay.call(tokenDUVMOH5, amountPUwmypJ, {from: accounts[2]});
		await contractF0sTu8z.borrowFor.call(tokenoWB4CjU, whoG9zymxl, amountGTHdUW, {from: accounts[4]});

		await expect(contractF0sTu8z.withdraw.call(tokenxB8f7RW, amounts4TqnW5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractoNK9TCt = await Bank.new({from: accounts[0]});
		const tokenr1SzDXx = "0x0000000000000000000000000000000000000000"
		const amountU5kyVMB = BigInt("1721")
		const tokenr34YBeh = "0x0000000000000000000000000000000000000001"
		const balanceJj0ALr = await contractoNK9TCt.totalSupplyOf.call(tokenr1SzDXx, {from: accounts[5]});
		await contractoNK9TCt.repay.call(tokenr34YBeh, amountU5kyVMB, {from: accounts[0]});

		assert.equal(balanceJj0ALr, 0)
		await expect(contractoNK9TCt.repay.call(tokenr34YBeh, amountU5kyVMB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})