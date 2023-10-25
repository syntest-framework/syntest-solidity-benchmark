const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractOPXEb59 = await Bank.new({from: accounts[4]});
		const amountXB5NjLf = BigInt("27")
		const token1RVyTQ = accounts[2]
		const amounthkDLL6B = BigInt("771")
		const tokenzP4Uezd = accounts[2]
		const amountZf3xs8 = BigInt("90")
		const tokensRJHw3m = accounts[0]
		const amountNnL3mvX = BigInt("691")
		const whocHFFay9 = accounts[1]
		const tokenErKYPGc = accounts[4]
		const borroweredKYQVf = accounts[3]
		await contractOPXEb59.repay.call(token1RVyTQ, amountXB5NjLf, {from: "0x0000000000000000000000000000000000000001"});
		await contractOPXEb59.repay.call(tokenzP4Uezd, amounthkDLL6B, {from: accounts[2]});
		await contractOPXEb59.repay.call(tokensRJHw3m, amountZf3xs8, {from: accounts[5]});
		await contractOPXEb59.borrowFor.call(tokenErKYPGc, whocHFFay9, amountNnL3mvX, {from: accounts[5]});
		await contractOPXEb59.addBorrower.call(borroweredKYQVf, {from: accounts[1]});

		await expect(contractOPXEb59.repay.call(token1RVyTQ, amountXB5NjLf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractl65ej1s = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const borrowerMRykoZ3 = accounts[1]
		const amountHGzaxJk = BigInt("170")
		const whoIYvhkiC = accounts[3]
		const tokenDNjt2iR = accounts[2]
		const borroweru28wmOK = accounts[1]
		await contractl65ej1s.removeBorrower.call(borrowerMRykoZ3, {from: accounts[2]});
		await contractl65ej1s.borrowFor.call(tokenDNjt2iR, whoIYvhkiC, amountHGzaxJk, {from: accounts[5]});
		await contractl65ej1s.addBorrower.call(borroweru28wmOK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Bank', async () => {
		const contracttexVgna = await Bank.new({from: accounts[4]});
		const borrowerpIOOBE2 = accounts[4]
		const tokenVmpzJXV = accounts[2]
		await contracttexVgna.addBorrower.call(borrowerpIOOBE2, {from: accounts[4]});
		const balancebQVDvNU = await contracttexVgna.totalSupplyOf.call(tokenVmpzJXV, {from: accounts[0]});

		await expect(contracttexVgna.addBorrower.call(borrowerpIOOBE2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractldAuuzi = await Bank.new({from: accounts[1]});
		const amountskQ2zyY = BigInt("1433")
		const tokenyn1FMsl = accounts[0]
		const amountiwdeVF5 = BigInt("1621")
		const tokenk6egc8f = "0x0000000000000000000000000000000000000001"
		const borrowerVh3FWRp = accounts[2]
		const amountsbFyNoI = BigInt("348")
		const tokenmLlPC42 = accounts[2]
		const borroweruFZjFKv = accounts[1]
		await contractldAuuzi.withdraw.call(tokenyn1FMsl, amountskQ2zyY, {from: accounts[1]});
		await contractldAuuzi.repay.call(tokenk6egc8f, amountiwdeVF5, {from: "0x0000000000000000000000000000000000000001"});
		await contractldAuuzi.removeBorrower.call(borrowerVh3FWRp, {from: accounts[5]});
		await contractldAuuzi.borrow.call(tokenmLlPC42, amountsbFyNoI, {from: accounts[4]});
		await contractldAuuzi.removeBorrower.call(borroweruFZjFKv, {from: accounts[2]});

		await expect(contractldAuuzi.withdraw.call(tokenyn1FMsl, amountskQ2zyY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractFksfO3Z = await Bank.new({from: accounts[0]});
		const amountlXcZNBt = BigInt("1790")
		const tokenAmSurmM = accounts[0]
		const borrowerHwANZDH = accounts[2]
		const borrower4aGcDQ = accounts[2]
		const borrowerxnXFfkp = accounts[3]
		await contractFksfO3Z.deposit.call(tokenAmSurmM, amountlXcZNBt, {from: accounts[2]});
		await contractFksfO3Z.removeBorrower.call(borrowerHwANZDH, {from: accounts[2]});
		await contractFksfO3Z.removeBorrower.call(borrower4aGcDQ, {from: accounts[3]});
		await contractFksfO3Z.addBorrower.call(borrowerxnXFfkp, {from: accounts[0]});

		await expect(contractFksfO3Z.deposit.call(tokenAmSurmM, amountlXcZNBt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractauTbc6i = await Bank.new({from: accounts[2]});
		const tokenOA3lcSO = "0x0000000000000000000000000000000000000000"
		const amountjHC1Myp = BigInt("1714")
		const tokenguoqrkP = accounts[1]
		const amountc37hDBL = BigInt("505")
		const whoqmuovS = accounts[1]
		const tokenVP8NhhD = accounts[0]
		const amountLMUgKcQ = BigInt("1177")
		const tokendU7rf6o = accounts[5]
		const amountidJhugs = BigInt("589")
		const tokenh6uNreO = "0x0000000000000000000000000000000000000001"
		const balancecXugOqb = await contractauTbc6i.totalSupplyOf.call(tokenOA3lcSO, {from: accounts[3]});
		await contractauTbc6i.deposit.call(tokenguoqrkP, amountjHC1Myp, {from: accounts[1]});
		await contractauTbc6i.borrowFor.call(tokenVP8NhhD, whoqmuovS, amountc37hDBL, {from: accounts[1]});
		await contractauTbc6i.repay.call(tokendU7rf6o, amountLMUgKcQ, {from: accounts[1]});
		await contractauTbc6i.withdraw.call(tokenh6uNreO, amountidJhugs, {from: accounts[0]});

		assert.equal(balancecXugOqb, 0)
		await expect(contractauTbc6i.deposit.call(tokenguoqrkP, amountjHC1Myp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractgktsCI = await Bank.new({from: accounts[2]});
		const borrowervDSDem = accounts[1]
		const tokenDinu26F = "0x0000000000000000000000000000000000000001"
		const amountNheTqq = BigInt("1714")
		const tokenpjj3wr0 = accounts[2]
		const amountwPuhnKv = BigInt("1323")
		const tokenPPPG3CG = accounts[4]
		const amountcmqvlei = BigInt("1177")
		const token5hXYnr = accounts[5]
		const amountgHD1W3T = BigInt("1464")
		const whoIpVkgpf = accounts[3]
		const tokentdjPsgO = accounts[4]
		await contractgktsCI.removeBorrower.call(borrowervDSDem, {from: accounts[2]});
		const balancebgvMo6n = await contractgktsCI.totalSupplyOf.call(tokenDinu26F, {from: accounts[3]});
		await contractgktsCI.deposit.call(tokenpjj3wr0, amountNheTqq, {from: accounts[1]});
		await contractgktsCI.withdraw.call(tokenPPPG3CG, amountwPuhnKv, {from: accounts[4]});
		await contractgktsCI.repay.call(token5hXYnr, amountcmqvlei, {from: accounts[1]});
		await contractgktsCI.borrowFor.call(tokentdjPsgO, whoIpVkgpf, amountgHD1W3T, {from: accounts[3]});

		await expect(contractgktsCI.removeBorrower.call(borrowervDSDem, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})