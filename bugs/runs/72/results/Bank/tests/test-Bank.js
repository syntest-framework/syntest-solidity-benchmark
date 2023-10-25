const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractV0bfJ8W = await Bank.new({from: accounts[2]});
		const amountYfItAUs = BigInt("1320")
		const tokenZkFR6qu = "0x0000000000000000000000000000000000000001"
		const amountDdHZ82A = BigInt("68")
		const tokenbS9AGWu = accounts[0]
		const amountYxjPjIy = BigInt("255")
		const tokengOFktXf = accounts[2]
		await contractV0bfJ8W.deposit.call(tokenZkFR6qu, amountYfItAUs, {from: accounts[5]});
		await contractV0bfJ8W.borrow.call(tokenbS9AGWu, amountDdHZ82A, {from: accounts[0]});
		await contractV0bfJ8W.withdraw.call(tokengOFktXf, amountYxjPjIy, {from: accounts[3]});

		await expect(contractV0bfJ8W.deposit.call(tokenZkFR6qu, amountYfItAUs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractPw7VW4c = await Bank.new({from: accounts[1]});
		const borrowere0F0WrI = accounts[2]
		const borrowerr68A4bF = accounts[5]
		const amountxLvMYhT = BigInt("1813")
		const whoQ5WgIJx = accounts[4]
		const tokencOxKPe5 = accounts[0]
		const tokenV4HYJYs = accounts[3]
		await contractPw7VW4c.addBorrower.call(borrowere0F0WrI, {from: accounts[1]});
		await contractPw7VW4c.removeBorrower.call(borrowerr68A4bF, {from: accounts[1]});
		await contractPw7VW4c.borrowFor.call(tokencOxKPe5, whoQ5WgIJx, amountxLvMYhT, {from: accounts[3]});
		const balanceQc3tk7K = await contractPw7VW4c.totalSupplyOf.call(tokenV4HYJYs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractPw7VW4c.addBorrower.call(borrowere0F0WrI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractWUgxNP = await Bank.new({from: accounts[2]});
		const amountPHG9SOt = BigInt("1343")
		const tokenSYY1sO = accounts[3]
		const amountfswnLW = BigInt("28")
		const tokenz698Zf1 = accounts[0]
		const borrowerHeMLUDi = accounts[0]
		const amountuzdUx3i = BigInt("1441")
		const tokenRQA3FTO = accounts[2]
		const amountyq52kI = BigInt("325")
		const tokenhMHDPmP = "0x0000000000000000000000000000000000000001"
		await contractWUgxNP.repay.call(tokenSYY1sO, amountPHG9SOt, {from: accounts[3]});
		await contractWUgxNP.withdraw.call(tokenz698Zf1, amountfswnLW, {from: accounts[3]});
		await contractWUgxNP.addBorrower.call(borrowerHeMLUDi, {from: accounts[2]});
		await contractWUgxNP.deposit.call(tokenRQA3FTO, amountuzdUx3i, {from: accounts[1]});
		await contractWUgxNP.borrow.call(tokenhMHDPmP, amountyq52kI, {from: accounts[3]});

		await expect(contractWUgxNP.repay.call(tokenSYY1sO, amountPHG9SOt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractejTyOBf = await Bank.new({from: accounts[2]});
		const tokenVuRy6Uk = accounts[1]
		const borrowerTYNUexY = accounts[0]
		const amountb7CW2ag = BigInt("97")
		const tokenwQamD0W = accounts[3]
		const amountfIGyMQv = BigInt("64")
		const tokengzGNzlG = accounts[0]
		const balanceUE3mKnJ = await contractejTyOBf.totalSupplyOf.call(tokenVuRy6Uk, {from: accounts[3]});
		await contractejTyOBf.addBorrower.call(borrowerTYNUexY, {from: accounts[4]});
		await contractejTyOBf.withdraw.call(tokenwQamD0W, amountb7CW2ag, {from: accounts[2]});
		await contractejTyOBf.repay.call(tokengzGNzlG, amountfIGyMQv, {from: accounts[0]});

		await expect(contractejTyOBf.totalSupplyOf.call(tokenVuRy6Uk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractdsFh12v = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountRr1bJju = BigInt("290")
		const tokenIP4Gdqd = accounts[1]
		const borrowerVk7VHRw = "0x0000000000000000000000000000000000000001"
		const amountJGekiHd = BigInt("340")
		const tokenSy5EBrX = "0x0000000000000000000000000000000000000001"
		const borrowerqbI3WoL = accounts[4]
		await contractdsFh12v.repay.call(tokenIP4Gdqd, amountRr1bJju, {from: accounts[1]});
		await contractdsFh12v.removeBorrower.call(borrowerVk7VHRw, {from: accounts[4]});
		await contractdsFh12v.withdraw.call(tokenSy5EBrX, amountJGekiHd, {from: accounts[5]});
		await contractdsFh12v.addBorrower.call(borrowerqbI3WoL, {from: accounts[1]});
	});

	it('test for Bank', async () => {
		const contractOZ9EbP = await Bank.new({from: accounts[2]});
		const amountM09cCAD = BigInt("97")
		const tokenU187MD = accounts[4]
		const amountWBlsEiO = BigInt("64")
		const tokenn29RTTS = accounts[0]
		await contractOZ9EbP.withdraw.call(tokenU187MD, amountM09cCAD, {from: accounts[2]});
		await contractOZ9EbP.repay.call(tokenn29RTTS, amountWBlsEiO, {from: accounts[0]});

		await expect(contractOZ9EbP.withdraw.call(tokenU187MD, amountM09cCAD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractIm7iIQ = await Bank.new({from: accounts[2]});
		const tokenw1xsx1 = "0x0000000000000000000000000000000000000000"
		const borrowerzwhpRYK = accounts[1]
		const balanceh0KaVzz = await contractIm7iIQ.totalSupplyOf.call(tokenw1xsx1, {from: accounts[0]});
		await contractIm7iIQ.addBorrower.call(borrowerzwhpRYK, {from: accounts[5]});

		assert.equal(balanceh0KaVzz, 0)
		await expect(contractIm7iIQ.addBorrower.call(borrowerzwhpRYK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})