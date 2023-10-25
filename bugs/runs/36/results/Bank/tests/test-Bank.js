const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractZ95LeP8 = await Bank.new({from: accounts[2]});
		const amounthZAenqH = BigInt("529")
		const who5YPFTm = accounts[1]
		const tokenQgzz9Z8 = accounts[1]
		const amountRzwm07k = BigInt("476")
		const whoY5nAIE = accounts[4]
		const tokenLqctsbb = accounts[4]
		const amountbbZGmkq = BigInt("614")
		const tokenbjKSMiA = accounts[1]
		await contractZ95LeP8.borrowFor.call(tokenQgzz9Z8, who5YPFTm, amounthZAenqH, {from: accounts[2]});
		await contractZ95LeP8.borrowFor.call(tokenLqctsbb, whoY5nAIE, amountRzwm07k, {from: "0x0000000000000000000000000000000000000001"});
		await contractZ95LeP8.deposit.call(tokenbjKSMiA, amountbbZGmkq, {from: accounts[4]});

		await expect(contractZ95LeP8.borrowFor.call(tokenQgzz9Z8, who5YPFTm, amounthZAenqH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractV4N7cns = await Bank.new({from: accounts[4]});
		const amountsyZ1PbS = BigInt("1812")
		const tokenOmH9jCf = accounts[0]
		const amountYN0TDed = BigInt("40")
		const tokenrU5FP7Z = accounts[5]
		const amountvspSzIo = BigInt("1028")
		const tokeniF6OTKn = accounts[1]
		await contractV4N7cns.repay.call(tokenOmH9jCf, amountsyZ1PbS, {from: accounts[4]});
		await contractV4N7cns.borrow.call(tokenrU5FP7Z, amountYN0TDed, {from: accounts[1]});
		await contractV4N7cns.borrow.call(tokeniF6OTKn, amountvspSzIo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractV4N7cns.repay.call(tokenOmH9jCf, amountsyZ1PbS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractbTdLKgv = await Bank.new({from: accounts[1]});
		const tokenqDLqYr = accounts[4]
		const borrowerrNNJOKK = accounts[1]
		const balancev5Aoh30 = await contractbTdLKgv.totalSupplyOf.call(tokenqDLqYr, {from: accounts[4]});
		await contractbTdLKgv.addBorrower.call(borrowerrNNJOKK, {from: accounts[0]});

		await expect(contractbTdLKgv.totalSupplyOf.call(tokenqDLqYr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractMWaHnOm = await Bank.new({from: accounts[1]});
		const borrowerx0hsuPv = accounts[2]
		const amountCnNaUy = BigInt("603")
		const tokenDb9uuoB = accounts[2]
		const amountTE1IjE8 = BigInt("1104")
		const whonFQQor = accounts[3]
		const tokenfI6nRor = accounts[2]
		const amountoVajfc6 = BigInt("530")
		const tokenJX8lOip = accounts[0]
		await contractMWaHnOm.removeBorrower.call(borrowerx0hsuPv, {from: accounts[1]});
		await contractMWaHnOm.deposit.call(tokenDb9uuoB, amountCnNaUy, {from: accounts[4]});
		await contractMWaHnOm.borrowFor.call(tokenfI6nRor, whonFQQor, amountTE1IjE8, {from: accounts[2]});
		await contractMWaHnOm.withdraw.call(tokenJX8lOip, amountoVajfc6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractMWaHnOm.removeBorrower.call(borrowerx0hsuPv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractwa4yX2 = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountiYrAe7p = BigInt("1390")
		const tokenqRCGEE4 = accounts[1]
		const amountJOzJRMQ = BigInt("1850")
		const tokenpQ2dwup = accounts[3]
		const amountkHi59Dr = BigInt("1605")
		const tokenXpqCZ4o = accounts[4]
		await contractwa4yX2.repay.call(tokenqRCGEE4, amountiYrAe7p, {from: accounts[3]});
		await contractwa4yX2.borrow.call(tokenpQ2dwup, amountJOzJRMQ, {from: accounts[1]});
		await contractwa4yX2.repay.call(tokenXpqCZ4o, amountkHi59Dr, {from: accounts[4]});
	});

	it('test for Bank', async () => {
		const contractPwTrHA = await Bank.new({from: accounts[1]});
		const borrowerTDby54t = accounts[2]
		const tokencj8XdfE = accounts[4]
		const borrowerARUYUZO = accounts[2]
		await contractPwTrHA.addBorrower.call(borrowerTDby54t, {from: accounts[1]});
		const balancehdlFPoU = await contractPwTrHA.totalSupplyOf.call(tokencj8XdfE, {from: accounts[4]});
		await contractPwTrHA.addBorrower.call(borrowerARUYUZO, {from: accounts[0]});

		await expect(contractPwTrHA.addBorrower.call(borrowerTDby54t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractkJ27M9w = await Bank.new({from: accounts[4]});
		const tokenxx7LCR4 = "0x0000000000000000000000000000000000000000"
		const borrowerb9n0M0N = accounts[1]
		const amountCfGfKG = BigInt("306")
		const tokenL9GphzE = accounts[3]
		const amountp2jonWd = BigInt("1824")
		const whoOTQhLAo = accounts[4]
		const tokenDOgJlCk = accounts[2]
		const balancen5Tn3sd = await contractkJ27M9w.totalSupplyOf.call(tokenxx7LCR4, {from: accounts[3]});
		await contractkJ27M9w.addBorrower.call(borrowerb9n0M0N, {from: accounts[1]});
		await contractkJ27M9w.borrow.call(tokenL9GphzE, amountCfGfKG, {from: accounts[1]});
		await contractkJ27M9w.borrowFor.call(tokenDOgJlCk, whoOTQhLAo, amountp2jonWd, {from: accounts[5]});

		assert.equal(balancen5Tn3sd, 0)
		await expect(contractkJ27M9w.addBorrower.call(borrowerb9n0M0N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractX6Dz0Sj = await Bank.new({from: accounts[4]});
		const amountMsITe44 = BigInt("622")
		const tokenfbSdPnb = accounts[2]
		const amountjJwAKij = BigInt("1157")
		const tokengudB3Y = accounts[3]
		const amountvwkywO0 = BigInt("678")
		const whoXDfIhHF = accounts[1]
		const tokenY6dXDFo = accounts[2]
		const borrowerJBsdrUt = accounts[4]
		await contractX6Dz0Sj.withdraw.call(tokenfbSdPnb, amountMsITe44, {from: accounts[4]});
		await contractX6Dz0Sj.withdraw.call(tokengudB3Y, amountjJwAKij, {from: accounts[2]});
		await contractX6Dz0Sj.borrowFor.call(tokenY6dXDFo, whoXDfIhHF, amountvwkywO0, {from: accounts[0]});
		await contractX6Dz0Sj.removeBorrower.call(borrowerJBsdrUt, {from: accounts[4]});

		await expect(contractX6Dz0Sj.withdraw.call(tokenfbSdPnb, amountMsITe44, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})