const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractgerLBlb = await Bank.new({from: accounts[2]});
		const borrowerRORrmBw = accounts[1]
		const borrowerZJgLeG7 = accounts[0]
		const borrowermbLfzi = accounts[2]
		await contractgerLBlb.addBorrower.call(borrowerRORrmBw, {from: accounts[4]});
		await contractgerLBlb.removeBorrower.call(borrowerZJgLeG7, {from: accounts[0]});
		await contractgerLBlb.addBorrower.call(borrowermbLfzi, {from: accounts[0]});

		await expect(contractgerLBlb.addBorrower.call(borrowerRORrmBw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractT2UcOai = await Bank.new({from: accounts[0]});
		const amountieqTj0h = BigInt("1210")
		const tokenJQWHqUF = accounts[0]
		const amountIKDB810 = BigInt("1926")
		const tokenAAWtJrS = accounts[2]
		await contractT2UcOai.deposit.call(tokenJQWHqUF, amountieqTj0h, {from: accounts[2]});
		await contractT2UcOai.borrow.call(tokenAAWtJrS, amountIKDB810, {from: accounts[1]});

		await expect(contractT2UcOai.deposit.call(tokenJQWHqUF, amountieqTj0h, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractcsp2dS9 = await Bank.new({from: accounts[3]});
		const tokenIZW20q9 = accounts[3]
		const borrowertEDswdC = accounts[2]
		const amountfFUT0Tq = BigInt("432")
		const tokenTpMYxh = accounts[1]
		const borrowermFYAaq = accounts[1]
		const borrowerhsc1IyD = accounts[0]
		const balancefnzk2V = await contractcsp2dS9.totalSupplyOf.call(tokenIZW20q9, {from: accounts[4]});
		await contractcsp2dS9.removeBorrower.call(borrowertEDswdC, {from: accounts[0]});
		await contractcsp2dS9.withdraw.call(tokenTpMYxh, amountfFUT0Tq, {from: accounts[5]});
		await contractcsp2dS9.addBorrower.call(borrowermFYAaq, {from: "0x0000000000000000000000000000000000000001"});
		await contractcsp2dS9.addBorrower.call(borrowerhsc1IyD, {from: accounts[1]});

		await expect(contractcsp2dS9.totalSupplyOf.call(tokenIZW20q9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractVzHWIW9 = await Bank.new({from: accounts[0]});
		const amountowI6hOR = BigInt("1447")
		const tokenncFHHyt = "0x0000000000000000000000000000000000000001"
		const amountpHNd0A7 = BigInt("1391")
		const tokenzoMT26G = accounts[0]
		await contractVzHWIW9.repay.call(tokenncFHHyt, amountowI6hOR, {from: accounts[3]});
		await contractVzHWIW9.deposit.call(tokenzoMT26G, amountpHNd0A7, {from: accounts[1]});

		await expect(contractVzHWIW9.repay.call(tokenncFHHyt, amountowI6hOR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractl0yvja7 = await Bank.new({from: accounts[0]});
		const amountcI1NUpz = BigInt("259")
		const tokenime0rA = "0x0000000000000000000000000000000000000001"
		const amountc0zBOKO = BigInt("1447")
		const tokenzNKa8xv = "0x0000000000000000000000000000000000000002"
		const amountv9WMnd = BigInt("1391")
		const tokenJaBN9zL = accounts[0]
		await contractl0yvja7.withdraw.call(tokenime0rA, amountcI1NUpz, {from: accounts[0]});
		await contractl0yvja7.repay.call(tokenzNKa8xv, amountc0zBOKO, {from: accounts[3]});
		await contractl0yvja7.deposit.call(tokenJaBN9zL, amountv9WMnd, {from: accounts[1]});

		await expect(contractl0yvja7.withdraw.call(tokenime0rA, amountcI1NUpz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractOpqbEAS = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountxU8KZCQ = BigInt("22")
		const wholSbavPU = accounts[0]
		const tokenKytbmRQ = accounts[4]
		const amounttCUze1Q = BigInt("386")
		const whomlr8Qq = accounts[1]
		const tokenTyLTbxE = accounts[4]
		const tokeniiMI7Vr = accounts[4]
		const tokenH3PjEdU = accounts[0]
		const amountXytDr9 = BigInt("969")
		const whoBsI35o = accounts[4]
		const tokenDeEqCZe = accounts[4]
		const amountWLiEJ9c = BigInt("443")
		const tokenoy85H5 = accounts[0]
		await contractOpqbEAS.borrowFor.call(tokenKytbmRQ, wholSbavPU, amountxU8KZCQ, {from: accounts[1]});
		await contractOpqbEAS.borrowFor.call(tokenTyLTbxE, whomlr8Qq, amounttCUze1Q, {from: accounts[0]});
		const balancedoPEJ7j = await contractOpqbEAS.totalSupplyOf.call(tokeniiMI7Vr, {from: "0x0000000000000000000000000000000000000001"});
		const balancezrup3f = await contractOpqbEAS.totalSupplyOf.call(tokenH3PjEdU, {from: accounts[3]});
		await contractOpqbEAS.borrowFor.call(tokenDeEqCZe, whoBsI35o, amountXytDr9, {from: "0x0000000000000000000000000000000000000001"});
		await contractOpqbEAS.borrow.call(tokenoy85H5, amountWLiEJ9c, {from: accounts[4]});
	});

	it('test for Bank', async () => {
		const contractcVDgij3 = await Bank.new({from: accounts[0]});
		const borrowerN2dSVk = accounts[0]
		const amountGSuYLzK = BigInt("1210")
		const tokenqgTg6jr = accounts[0]
		await contractcVDgij3.addBorrower.call(borrowerN2dSVk, {from: accounts[0]});
		await contractcVDgij3.deposit.call(tokenqgTg6jr, amountGSuYLzK, {from: accounts[2]});

		await expect(contractcVDgij3.addBorrower.call(borrowerN2dSVk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractTdXHazn = await Bank.new({from: accounts[0]});
		const borrowerpK4SN5O = accounts[1]
		const amountT7v7liT = BigInt("1210")
		const tokeniVi8U15 = accounts[0]
		await contractTdXHazn.removeBorrower.call(borrowerpK4SN5O, {from: accounts[0]});
		await contractTdXHazn.deposit.call(tokeniVi8U15, amountT7v7liT, {from: accounts[2]});

		await expect(contractTdXHazn.removeBorrower.call(borrowerpK4SN5O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractb5wUTY = await Bank.new({from: accounts[0]});
		const tokengVtNUM = "0x0000000000000000000000000000000000000000"
		const amountnoHMmas = BigInt("769")
		const tokenr24SVe7 = "0x0000000000000000000000000000000000000001"
		const amountNUakslL = BigInt("1210")
		const tokenzLeLETs = accounts[1]
		const balance5vZOqX = await contractb5wUTY.totalSupplyOf.call(tokengVtNUM, {from: accounts[0]});
		await contractb5wUTY.repay.call(tokenr24SVe7, amountnoHMmas, {from: accounts[2]});
		await contractb5wUTY.deposit.call(tokenzLeLETs, amountNUakslL, {from: accounts[2]});

		assert.equal(balance5vZOqX, 0)
		await expect(contractb5wUTY.repay.call(tokenr24SVe7, amountnoHMmas, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})