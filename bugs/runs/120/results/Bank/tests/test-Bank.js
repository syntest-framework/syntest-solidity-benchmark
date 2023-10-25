const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contracthkxurRu = await Bank.new({from: accounts[0]});
		const amountqN4WIaS = BigInt("1182")
		const tokenScyXyoD = accounts[2]
		const borrowersdhvfNf = accounts[3]
		const tokenUsJrlku = accounts[1]
		const amountij3F1gb = BigInt("1643")
		const tokenuqt5e6d = accounts[0]
		await contracthkxurRu.withdraw.call(tokenScyXyoD, amountqN4WIaS, {from: accounts[0]});
		await contracthkxurRu.addBorrower.call(borrowersdhvfNf, {from: accounts[4]});
		const balanceY1gFHt9 = await contracthkxurRu.totalSupplyOf.call(tokenUsJrlku, {from: accounts[0]});
		await contracthkxurRu.withdraw.call(tokenuqt5e6d, amountij3F1gb, {from: accounts[3]});

		await expect(contracthkxurRu.withdraw.call(tokenScyXyoD, amountqN4WIaS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractIFOkmgi = await Bank.new({from: accounts[3]});
		const tokenQh2Hwgv = accounts[2]
		const borrowermMMwgPF = accounts[0]
		const borrowerjBe4gFL = accounts[5]
		const token6NTKxk = accounts[2]
		const borrowerUTRFxdK = accounts[1]
		const balanceZ7VQAqS = await contractIFOkmgi.totalSupplyOf.call(tokenQh2Hwgv, {from: "0x0000000000000000000000000000000000000001"});
		await contractIFOkmgi.addBorrower.call(borrowermMMwgPF, {from: accounts[1]});
		await contractIFOkmgi.addBorrower.call(borrowerjBe4gFL, {from: "0x0000000000000000000000000000000000000001"});
		const balanceLPT5spx = await contractIFOkmgi.totalSupplyOf.call(token6NTKxk, {from: accounts[2]});
		await contractIFOkmgi.addBorrower.call(borrowerUTRFxdK, {from: accounts[0]});

		await expect(contractIFOkmgi.totalSupplyOf.call(tokenQh2Hwgv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractF27LuV = await Bank.new({from: accounts[4]});
		const amountEUp11lz = BigInt("1628")
		const tokenrkZuJL9 = accounts[4]
		const amountzsVUG9x = BigInt("805")
		const tokenTw8H1G = accounts[4]
		const amountl0uM4Zz = BigInt("12")
		const tokenJ1jqRDz = accounts[2]
		const amountNY6YTBQ = BigInt("1565")
		const tokenvkGi6S = accounts[3]
		await contractF27LuV.repay.call(tokenrkZuJL9, amountEUp11lz, {from: accounts[4]});
		await contractF27LuV.borrow.call(tokenTw8H1G, amountzsVUG9x, {from: accounts[3]});
		await contractF27LuV.repay.call(tokenJ1jqRDz, amountl0uM4Zz, {from: "0x0000000000000000000000000000000000000001"});
		await contractF27LuV.borrow.call(tokenvkGi6S, amountNY6YTBQ, {from: accounts[4]});

		await expect(contractF27LuV.repay.call(tokenrkZuJL9, amountEUp11lz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracteAEcRQ9 = await Bank.new({from: accounts[3]});
		const borrowerS7WohXO = accounts[3]
		const tokenVcEQPon = accounts[2]
		const amountD7tdjBO = BigInt("2038")
		const tokenQhWDAOV = accounts[3]
		const amountug6kKxb = BigInt("512")
		const tokenpHdKPms = accounts[4]
		const borrowerWgo0WZ2 = accounts[0]
		const amounty4n903O = BigInt("414")
		const tokenwjvIWjr = accounts[3]
		const amounti7hCAR3 = BigInt("1811")
		const tokenpO1Q8HE = accounts[2]
		const borrowerBY38Oj = accounts[0]
		const borroweriL29vMG = accounts[6]
		const borroweroCH7fvM = accounts[4]
		const borrowerH4gqEpY = accounts[1]
		await contracteAEcRQ9.removeBorrower.call(borrowerS7WohXO, {from: accounts[3]});
		const balanceSFdVYDX = await contracteAEcRQ9.totalSupplyOf.call(tokenVcEQPon, {from: "0x0000000000000000000000000000000000000001"});
		await contracteAEcRQ9.borrow.call(tokenQhWDAOV, amountD7tdjBO, {from: accounts[3]});
		await contracteAEcRQ9.borrow.call(tokenpHdKPms, amountug6kKxb, {from: accounts[4]});
		await contracteAEcRQ9.addBorrower.call(borrowerWgo0WZ2, {from: accounts[5]});
		await contracteAEcRQ9.repay.call(tokenwjvIWjr, amounty4n903O, {from: accounts[4]});
		await contracteAEcRQ9.borrow.call(tokenpO1Q8HE, amounti7hCAR3, {from: accounts[3]});
		await contracteAEcRQ9.addBorrower.call(borrowerBY38Oj, {from: accounts[1]});
		await contracteAEcRQ9.addBorrower.call(borroweriL29vMG, {from: "0x0000000000000000000000000000000000000001"});
		await contracteAEcRQ9.removeBorrower.call(borroweroCH7fvM, {from: accounts[1]});
		await contracteAEcRQ9.addBorrower.call(borrowerH4gqEpY, {from: accounts[0]});

		await expect(contracteAEcRQ9.removeBorrower.call(borrowerS7WohXO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractgM9Dgel = await Bank.new({from: accounts[1]});
		const amountj3ra4lW = BigInt("788")
		const tokenoOGdqAn = accounts[3]
		const tokenndd1A1t = accounts[3]
		const borrowerNDbnWKe = accounts[3]
		await contractgM9Dgel.deposit.call(tokenoOGdqAn, amountj3ra4lW, {from: accounts[0]});
		const balanceIZ9C9yf = await contractgM9Dgel.totalSupplyOf.call(tokenndd1A1t, {from: "0x0000000000000000000000000000000000000001"});
		await contractgM9Dgel.removeBorrower.call(borrowerNDbnWKe, {from: accounts[0]});

		await expect(contractgM9Dgel.deposit.call(tokenoOGdqAn, amountj3ra4lW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractmQOOpLj = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountVtLhWcD = BigInt("1675")
		const whosWuKyJd = accounts[2]
		const tokengEh6fXs = accounts[0]
		const borrowerIOjvF3M = accounts[1]
		await contractmQOOpLj.borrowFor.call(tokengEh6fXs, whosWuKyJd, amountVtLhWcD, {from: accounts[4]});
		await contractmQOOpLj.removeBorrower.call(borrowerIOjvF3M, {from: accounts[2]});
	});

	it('test for Bank', async () => {
		const contractdGzaTLX = await Bank.new({from: accounts[1]});
		const borrowerTgkwBzv = accounts[2]
		const amountSWrjjqn = BigInt("1805")
		const tokenESyM1Up = "0x0000000000000000000000000000000000000001"
		const borrowerWhBC3oD = accounts[0]
		await contractdGzaTLX.addBorrower.call(borrowerTgkwBzv, {from: accounts[1]});
		await contractdGzaTLX.borrow.call(tokenESyM1Up, amountSWrjjqn, {from: accounts[2]});
		await contractdGzaTLX.addBorrower.call(borrowerWhBC3oD, {from: accounts[1]});

		await expect(contractdGzaTLX.addBorrower.call(borrowerTgkwBzv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractmVDOAOm = await Bank.new({from: accounts[5]});
		const tokenfYKp899 = "0x0000000000000000000000000000000000000000"
		const tokenwuj9L8 = accounts[2]
		const balanceZabreuE = await contractmVDOAOm.totalSupplyOf.call(tokenfYKp899, {from: accounts[3]});
		const balanceePCMhDr = await contractmVDOAOm.totalSupplyOf.call(tokenwuj9L8, {from: accounts[4]});

		assert.equal(balanceZabreuE, 0)
		await expect(contractmVDOAOm.totalSupplyOf.call(tokenwuj9L8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})