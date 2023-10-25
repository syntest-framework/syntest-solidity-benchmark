const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contracto4G0AGC = await Bank.new({from: accounts[5]});
		const amountfuKzE7v = BigInt("920")
		const tokenlTeC4Pv = accounts[2]
		const amountWb6jTcT = BigInt("715")
		const whoG28j0mi = accounts[1]
		const tokeneZE24k = accounts[3]
		const borrowerruKeBJj = accounts[1]
		const amountPK8a2Ev = BigInt("1485")
		const tokenKKLt1b = accounts[2]
		const borroweri1cby8I = accounts[0]
		await contracto4G0AGC.repay.call(tokenlTeC4Pv, amountfuKzE7v, {from: accounts[2]});
		await contracto4G0AGC.borrowFor.call(tokeneZE24k, whoG28j0mi, amountWb6jTcT, {from: "0x0000000000000000000000000000000000000001"});
		await contracto4G0AGC.addBorrower.call(borrowerruKeBJj, {from: "0x0000000000000000000000000000000000000001"});
		await contracto4G0AGC.withdraw.call(tokenKKLt1b, amountPK8a2Ev, {from: accounts[2]});
		await contracto4G0AGC.removeBorrower.call(borroweri1cby8I, {from: accounts[0]});

		await expect(contracto4G0AGC.repay.call(tokenlTeC4Pv, amountfuKzE7v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractR0RAS82 = await Bank.new({from: accounts[3]});
		const tokenCHkInaf = accounts[2]
		const borroweraZZg7X = accounts[4]
		const amountM14Xgh = BigInt("706")
		const tokengLb9C3p = accounts[0]
		const borrowermUM4BB = accounts[0]
		const amounty45pJYW = BigInt("1828")
		const tokenW11H1Cm = accounts[0]
		const borrowerI2bu8Y5 = "0x0000000000000000000000000000000000000001"
		const balanceMDIasSa = await contractR0RAS82.totalSupplyOf.call(tokenCHkInaf, {from: accounts[5]});
		await contractR0RAS82.removeBorrower.call(borroweraZZg7X, {from: accounts[2]});
		await contractR0RAS82.repay.call(tokengLb9C3p, amountM14Xgh, {from: "0x0000000000000000000000000000000000000001"});
		await contractR0RAS82.addBorrower.call(borrowermUM4BB, {from: accounts[1]});
		await contractR0RAS82.repay.call(tokenW11H1Cm, amounty45pJYW, {from: "0x0000000000000000000000000000000000000001"});
		await contractR0RAS82.addBorrower.call(borrowerI2bu8Y5, {from: accounts[0]});

		await expect(contractR0RAS82.totalSupplyOf.call(tokenCHkInaf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractB1Z9U1i = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const borrowergIkmdlF = accounts[4]
		const borrowerDaBuc15 = accounts[4]
		const amountRSQaPar = BigInt("1468")
		const whoDRX6HFP = accounts[2]
		const tokenwQjDrwE = accounts[1]
		await contractB1Z9U1i.removeBorrower.call(borrowergIkmdlF, {from: accounts[2]});
		await contractB1Z9U1i.addBorrower.call(borrowerDaBuc15, {from: accounts[3]});
		await contractB1Z9U1i.borrowFor.call(tokenwQjDrwE, whoDRX6HFP, amountRSQaPar, {from: accounts[3]});
	});

	it('test for Bank', async () => {
		const contractM0YDjK = await Bank.new({from: accounts[4]});
		const amountzJqdSTV = BigInt("1220")
		const tokenqfRq0jd = accounts[0]
		const borrowerJAR8swB = "0x0000000000000000000000000000000000000001"
		const amountiAVlQIa = BigInt("1497")
		const tokenBJJpJhL = accounts[2]
		const amountrhQUhCv = BigInt("690")
		const tokenkUMLpz8 = accounts[4]
		const amountCgeKuaa = BigInt("1032")
		const tokenHugTRQv = accounts[0]
		const borrowerGRJQluY = accounts[1]
		await contractM0YDjK.deposit.call(tokenqfRq0jd, amountzJqdSTV, {from: accounts[3]});
		await contractM0YDjK.removeBorrower.call(borrowerJAR8swB, {from: "0x0000000000000000000000000000000000000001"});
		await contractM0YDjK.deposit.call(tokenBJJpJhL, amountiAVlQIa, {from: accounts[0]});
		await contractM0YDjK.withdraw.call(tokenkUMLpz8, amountrhQUhCv, {from: accounts[3]});
		await contractM0YDjK.repay.call(tokenHugTRQv, amountCgeKuaa, {from: accounts[1]});
		await contractM0YDjK.addBorrower.call(borrowerGRJQluY, {from: accounts[0]});

		await expect(contractM0YDjK.deposit.call(tokenqfRq0jd, amountzJqdSTV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractbXVVLq = await Bank.new({from: accounts[2]});
		const borrowerpzoljji = accounts[5]
		const amountXa20zxC = BigInt("548")
		const whov3fbAx1 = accounts[3]
		const tokenVzbkGin = accounts[3]
		const amountgoRQnQm = BigInt("260")
		const tokenuQlV7cQ = accounts[2]
		const borrowerXdv9Ate = accounts[3]
		const amountJJITFNr = BigInt("2043")
		const whoDHZnsp1 = "0x0000000000000000000000000000000000000001"
		const tokenO7fFq9O = accounts[1]
		await contractbXVVLq.addBorrower.call(borrowerpzoljji, {from: accounts[2]});
		await contractbXVVLq.borrowFor.call(tokenVzbkGin, whov3fbAx1, amountXa20zxC, {from: accounts[2]});
		await contractbXVVLq.deposit.call(tokenuQlV7cQ, amountgoRQnQm, {from: accounts[0]});
		await contractbXVVLq.addBorrower.call(borrowerXdv9Ate, {from: accounts[5]});
		await contractbXVVLq.borrowFor.call(tokenO7fFq9O, whoDHZnsp1, amountJJITFNr, {from: accounts[3]});

		await expect(contractbXVVLq.addBorrower.call(borrowerpzoljji, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractF987lF7 = await Bank.new({from: accounts[1]});
		const amountUmPQzpp = BigInt("1398")
		const tokenQ1mk8Xh = accounts[1]
		const amountuSfeU6Q = BigInt("603")
		const tokenT9hrxWF = accounts[5]
		const tokenALYWF0U = accounts[5]
		const borrowerlSwLFVA = accounts[2]
		const amountYipnr1D = BigInt("974")
		const tokenusk5Wc8 = accounts[5]
		const amountxCKF8DU = BigInt("915")
		const tokendmEcs0c = accounts[4]
		await contractF987lF7.withdraw.call(tokenQ1mk8Xh, amountUmPQzpp, {from: accounts[1]});
		await contractF987lF7.borrow.call(tokenT9hrxWF, amountuSfeU6Q, {from: accounts[0]});
		const balanceoKqWYz8 = await contractF987lF7.totalSupplyOf.call(tokenALYWF0U, {from: accounts[3]});
		await contractF987lF7.addBorrower.call(borrowerlSwLFVA, {from: accounts[2]});
		await contractF987lF7.borrow.call(tokenusk5Wc8, amountYipnr1D, {from: accounts[4]});
		await contractF987lF7.withdraw.call(tokendmEcs0c, amountxCKF8DU, {from: accounts[4]});

		await expect(contractF987lF7.withdraw.call(tokenQ1mk8Xh, amountUmPQzpp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractI7A6939 = await Bank.new({from: accounts[1]});
		const tokenamSDZgV = "0x0000000000000000000000000000000000000000"
		const borrowerOJ0atnc = accounts[3]
		const tokenT5F7zg = accounts[3]
		const balanceZn08mpl = await contractI7A6939.totalSupplyOf.call(tokenamSDZgV, {from: accounts[2]});
		await contractI7A6939.removeBorrower.call(borrowerOJ0atnc, {from: accounts[3]});
		const balancec7zb4rp = await contractI7A6939.totalSupplyOf.call(tokenT5F7zg, {from: accounts[3]});

		assert.equal(balanceZn08mpl, 0)
		await expect(contractI7A6939.removeBorrower.call(borrowerOJ0atnc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractJwlzyp2 = await Bank.new({from: accounts[3]});
		const borrowerwvecn3A = accounts[5]
		const amountHiSO5H = BigInt("1599")
		const tokeni1dkBeh = accounts[4]
		const tokennaIe03 = accounts[5]
		await contractJwlzyp2.removeBorrower.call(borrowerwvecn3A, {from: accounts[3]});
		await contractJwlzyp2.repay.call(tokeni1dkBeh, amountHiSO5H, {from: accounts[0]});
		const balanceXQgpmSe = await contractJwlzyp2.totalSupplyOf.call(tokennaIe03, {from: accounts[0]});

		await expect(contractJwlzyp2.removeBorrower.call(borrowerwvecn3A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})