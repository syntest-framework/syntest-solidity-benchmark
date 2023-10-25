const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contract8VjxfA = await Bank.new({from: accounts[4]});
		const borrowerDwWWTOg = accounts[2]
		const amountp5kAM9A = BigInt("1692")
		const tokenxNQM1NH = accounts[1]
		await contract8VjxfA.removeBorrower.call(borrowerDwWWTOg, {from: accounts[1]});
		await contract8VjxfA.deposit.call(tokenxNQM1NH, amountp5kAM9A, {from: accounts[0]});

		await expect(contract8VjxfA.removeBorrower.call(borrowerDwWWTOg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractFSndjt = await Bank.new({from: accounts[4]});
		const amountfqvZN1y = BigInt("1476")
		const tokenk007iBA = accounts[5]
		const amountay2RxkF = BigInt("205")
		const whoZey808i = accounts[1]
		const tokenAUfJO5t = accounts[1]
		const borrowerew47xD = accounts[0]
		const amountwXtBFil = BigInt("566")
		const tokenbm1ObYV = accounts[4]
		const amountQbgtB9i = BigInt("2025")
		const whovR9Xgsu = accounts[1]
		const tokenxXDhUnP = accounts[2]
		const amountPscQaSM = BigInt("1868")
		const tokenu2E7tqG = accounts[5]
		await contractFSndjt.repay.call(tokenk007iBA, amountfqvZN1y, {from: accounts[5]});
		await contractFSndjt.borrowFor.call(tokenAUfJO5t, whoZey808i, amountay2RxkF, {from: accounts[4]});
		await contractFSndjt.addBorrower.call(borrowerew47xD, {from: accounts[3]});
		await contractFSndjt.withdraw.call(tokenbm1ObYV, amountwXtBFil, {from: accounts[1]});
		await contractFSndjt.borrowFor.call(tokenxXDhUnP, whovR9Xgsu, amountQbgtB9i, {from: accounts[1]});
		await contractFSndjt.withdraw.call(tokenu2E7tqG, amountPscQaSM, {from: accounts[4]});

		await expect(contractFSndjt.repay.call(tokenk007iBA, amountfqvZN1y, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractAw0dW42 = await Bank.new({from: accounts[3]});
		const amountj4AcBj = BigInt("1774")
		const tokenwkUZSss = accounts[3]
		const borrowerjpa0YXn = accounts[2]
		const amountpfTs58 = BigInt("390")
		const tokenHHhFhX4 = accounts[0]
		const amountURf2qX = BigInt("1198")
		const tokenHXCs4g = accounts[0]
		const amounttZdNJwJ = BigInt("610")
		const tokenvcZJNT = accounts[3]
		const borrowerPEBwGxm = accounts[0]
		await contractAw0dW42.withdraw.call(tokenwkUZSss, amountj4AcBj, {from: accounts[3]});
		await contractAw0dW42.removeBorrower.call(borrowerjpa0YXn, {from: accounts[2]});
		await contractAw0dW42.withdraw.call(tokenHHhFhX4, amountpfTs58, {from: accounts[5]});
		await contractAw0dW42.repay.call(tokenHXCs4g, amountURf2qX, {from: accounts[2]});
		await contractAw0dW42.withdraw.call(tokenvcZJNT, amounttZdNJwJ, {from: accounts[1]});
		await contractAw0dW42.addBorrower.call(borrowerPEBwGxm, {from: accounts[4]});

		await expect(contractAw0dW42.withdraw.call(tokenwkUZSss, amountj4AcBj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractK534LXG = await Bank.new({from: accounts[4]});
		const amountveuvHt = BigInt("1711")
		const tokenFqIqTuK = accounts[1]
		await contractK534LXG.deposit.call(tokenFqIqTuK, amountveuvHt, {from: accounts[0]});

		await expect(contractK534LXG.deposit.call(tokenFqIqTuK, amountveuvHt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractvMPenNK = await Bank.new({from: accounts[4]});
		const tokenDvOb2et = accounts[0]
		const borrowerB6WYaHR = accounts[3]
		const amountg6leHcH = BigInt("1014")
		const tokenthSintj = accounts[0]
		const amountFIW8PY = BigInt("1692")
		const tokenx0Y2I5S = accounts[1]
		const balanceKW4ySBx = await contractvMPenNK.totalSupplyOf.call(tokenDvOb2et, {from: accounts[2]});
		await contractvMPenNK.removeBorrower.call(borrowerB6WYaHR, {from: accounts[1]});
		await contractvMPenNK.withdraw.call(tokenthSintj, amountg6leHcH, {from: accounts[3]});
		await contractvMPenNK.deposit.call(tokenx0Y2I5S, amountFIW8PY, {from: accounts[0]});

		await expect(contractvMPenNK.totalSupplyOf.call(tokenDvOb2et, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractvIEDLsj = await Bank.new({from: accounts[4]});
		const borrowernwALRCK = accounts[0]
		const borrower52gzI6 = accounts[1]
		const amountCj5otim = BigInt("1921")
		const whoAQoXd6 = accounts[4]
		const tokenf3TLYqk = "0x0000000000000000000000000000000000000001"
		await contractvIEDLsj.removeBorrower.call(borrowernwALRCK, {from: accounts[4]});
		await contractvIEDLsj.removeBorrower.call(borrower52gzI6, {from: accounts[4]});
		await contractvIEDLsj.borrowFor.call(tokenf3TLYqk, whoAQoXd6, amountCj5otim, {from: accounts[3]});

		await expect(contractvIEDLsj.removeBorrower.call(borrowernwALRCK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractVua9gZg = await Bank.new({from: accounts[4]});
		const borrowerOU2W7Yo = accounts[1]
		const tokenNahUVUv = accounts[1]
		const borrower0pMgOY = accounts[3]
		const amountgfz02v = BigInt("769")
		const whoOAFWrTn = accounts[4]
		const tokenhUdwy21 = accounts[4]
		const borrowerskmDiE = accounts[2]
		const borrowerpqMkAmF = accounts[3]
		await contractVua9gZg.addBorrower.call(borrowerOU2W7Yo, {from: accounts[4]});
		const balanceRpIDaL2 = await contractVua9gZg.totalSupplyOf.call(tokenNahUVUv, {from: "0x0000000000000000000000000000000000000001"});
		await contractVua9gZg.removeBorrower.call(borrower0pMgOY, {from: accounts[3]});
		await contractVua9gZg.borrowFor.call(tokenhUdwy21, whoOAFWrTn, amountgfz02v, {from: accounts[3]});
		await contractVua9gZg.addBorrower.call(borrowerskmDiE, {from: accounts[0]});
		await contractVua9gZg.addBorrower.call(borrowerpqMkAmF, {from: accounts[3]});

		await expect(contractVua9gZg.addBorrower.call(borrowerOU2W7Yo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractSXY9FSD = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountCVEoXiv = BigInt("570")
		const tokenki6458 = accounts[4]
		const amountq0JXal5 = BigInt("1462")
		const tokenrAUETc = accounts[0]
		const tokenu4Kyf67 = accounts[3]
		const amountCTnVKw6 = BigInt("1643")
		const whoj78whwW = accounts[5]
		const tokenrLrgU0t = accounts[0]
		const amountsAUu9X = BigInt("1528")
		const tokenf4uRFQ6 = "0x0000000000000000000000000000000000000001"
		await contractSXY9FSD.deposit.call(tokenki6458, amountCVEoXiv, {from: accounts[0]});
		await contractSXY9FSD.withdraw.call(tokenrAUETc, amountq0JXal5, {from: accounts[1]});
		const balanceLkrrHR6 = await contractSXY9FSD.totalSupplyOf.call(tokenu4Kyf67, {from: accounts[2]});
		await contractSXY9FSD.borrowFor.call(tokenrLrgU0t, whoj78whwW, amountCTnVKw6, {from: accounts[5]});
		await contractSXY9FSD.withdraw.call(tokenf4uRFQ6, amountsAUu9X, {from: accounts[1]});
	});

	it('test for Bank', async () => {
		const contractSYfqPut = await Bank.new({from: accounts[4]});
		const tokenGgfSYbI = "0x0000000000000000000000000000000000000000"
		const balanceX8l02AA = await contractSYfqPut.totalSupplyOf.call(tokenGgfSYbI, {from: accounts[2]});

		assert.equal(balanceX8l02AA, 0)
	});
})