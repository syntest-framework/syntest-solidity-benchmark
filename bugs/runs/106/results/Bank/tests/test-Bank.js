const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractDnDT5I7 = await Bank.new({from: accounts[4]});
		const amountfyqdqIa = BigInt("1594")
		const tokenCjL9e0 = accounts[4]
		const tokenwPwAeWn = accounts[3]
		const amountrAX3L3I = BigInt("897")
		const tokenSZsOFEI = accounts[2]
		const amountmBn0r92 = BigInt("925")
		const tokenkiD6xHr = accounts[0]
		await contractDnDT5I7.deposit.call(tokenCjL9e0, amountfyqdqIa, {from: accounts[5]});
		const balancePbZEUU = await contractDnDT5I7.totalSupplyOf.call(tokenwPwAeWn, {from: accounts[4]});
		await contractDnDT5I7.deposit.call(tokenSZsOFEI, amountrAX3L3I, {from: accounts[3]});
		await contractDnDT5I7.withdraw.call(tokenkiD6xHr, amountmBn0r92, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractDnDT5I7.deposit.call(tokenCjL9e0, amountfyqdqIa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractEo76odt = await Bank.new({from: accounts[3]});
		const amountDFoA9Oq = BigInt("1469")
		const tokennTzEut = accounts[5]
		const borrowerrA29Vcz = accounts[2]
		const amountJeBdDwD = BigInt("1166")
		const tokenFqAa5lr = "0x0000000000000000000000000000000000000001"
		const tokensgCePn1 = "0x0000000000000000000000000000000000000001"
		const borrowerk8gbqAB = accounts[1]
		await contractEo76odt.repay.call(tokennTzEut, amountDFoA9Oq, {from: accounts[1]});
		await contractEo76odt.removeBorrower.call(borrowerrA29Vcz, {from: accounts[2]});
		await contractEo76odt.repay.call(tokenFqAa5lr, amountJeBdDwD, {from: accounts[1]});
		const balanceHzHkM2O = await contractEo76odt.totalSupplyOf.call(tokensgCePn1, {from: accounts[3]});
		await contractEo76odt.addBorrower.call(borrowerk8gbqAB, {from: accounts[1]});

		await expect(contractEo76odt.repay.call(tokennTzEut, amountDFoA9Oq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractEVskDJ = await Bank.new({from: accounts[2]});
		const borrowero21cme2 = accounts[4]
		const amountZ79CTvC = BigInt("508")
		const tokenUjL5dku = accounts[3]
		const amountq5yT28h = BigInt("1729")
		const tokenKFVhJst = "0x0000000000000000000000000000000000000001"
		const amounti6DBRS2 = BigInt("1223")
		const tokenWrLpeq = accounts[2]
		const borrowerKsiXwed = accounts[1]
		const amountGQTTFBi = BigInt("1420")
		const whoT3rei0 = accounts[5]
		const tokenQPAlzna = accounts[0]
		await contractEVskDJ.removeBorrower.call(borrowero21cme2, {from: accounts[2]});
		await contractEVskDJ.borrow.call(tokenUjL5dku, amountZ79CTvC, {from: accounts[1]});
		await contractEVskDJ.repay.call(tokenKFVhJst, amountq5yT28h, {from: accounts[4]});
		await contractEVskDJ.borrow.call(tokenWrLpeq, amounti6DBRS2, {from: accounts[3]});
		await contractEVskDJ.addBorrower.call(borrowerKsiXwed, {from: accounts[2]});
		await contractEVskDJ.borrowFor.call(tokenQPAlzna, whoT3rei0, amountGQTTFBi, {from: accounts[1]});

		await expect(contractEVskDJ.removeBorrower.call(borrowero21cme2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractgcUbwgP = await Bank.new({from: accounts[4]});
		const tokenMkfdbVp = accounts[3]
		const borrowerEFPOfKf = accounts[2]
		const balanceIKSsZqt = await contractgcUbwgP.totalSupplyOf.call(tokenMkfdbVp, {from: accounts[3]});
		await contractgcUbwgP.addBorrower.call(borrowerEFPOfKf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractgcUbwgP.totalSupplyOf.call(tokenMkfdbVp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractKmX7fUW = await Bank.new({from: accounts[4]});
		const amountJcK9Xye = BigInt("560")
		const tokentLAF5it = accounts[1]
		const amountXkifmr = BigInt("1594")
		const tokenEcjbjmM = accounts[4]
		const tokenikhFG86 = accounts[4]
		const amountUiNDVqw = BigInt("1954")
		const whofQE1NVA = accounts[1]
		const tokenhkkM9UL = "0x0000000000000000000000000000000000000001"
		const amountR1EBRCW = BigInt("897")
		const tokenD6v6grU = accounts[2]
		const amountiZw3DBb = BigInt("925")
		const tokenfrM0yj4 = accounts[0]
		await contractKmX7fUW.withdraw.call(tokentLAF5it, amountJcK9Xye, {from: accounts[4]});
		await contractKmX7fUW.deposit.call(tokenEcjbjmM, amountXkifmr, {from: accounts[5]});
		const balance86RnbK = await contractKmX7fUW.totalSupplyOf.call(tokenikhFG86, {from: accounts[4]});
		await contractKmX7fUW.borrowFor.call(tokenhkkM9UL, whofQE1NVA, amountUiNDVqw, {from: accounts[0]});
		await contractKmX7fUW.deposit.call(tokenD6v6grU, amountR1EBRCW, {from: accounts[3]});
		await contractKmX7fUW.withdraw.call(tokenfrM0yj4, amountiZw3DBb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractKmX7fUW.withdraw.call(tokentLAF5it, amountJcK9Xye, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractU0J7cP = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountEhGxfUI = BigInt("229")
		const tokenhFURsoj = accounts[5]
		const borroweroujUQ1I = accounts[2]
		await contractU0J7cP.withdraw.call(tokenhFURsoj, amountEhGxfUI, {from: accounts[2]});
		await contractU0J7cP.removeBorrower.call(borroweroujUQ1I, {from: accounts[4]});
	});

	it('test for Bank', async () => {
		const contractCQrVDrT = await Bank.new({from: accounts[4]});
		const borrowerdQcAD74 = accounts[3]
		const amountj3yvJhR = BigInt("1429")
		const tokenh6vjy1S = accounts[4]
		const amountWjzSs5 = BigInt("1454")
		const tokenf7iWGyG = "0x0000000000000000000000000000000000000001"
		const tokenAbAlWAt = accounts[5]
		await contractCQrVDrT.addBorrower.call(borrowerdQcAD74, {from: accounts[4]});
		await contractCQrVDrT.borrow.call(tokenh6vjy1S, amountj3yvJhR, {from: accounts[1]});
		await contractCQrVDrT.borrow.call(tokenf7iWGyG, amountWjzSs5, {from: accounts[5]});
		const balancesFATIW1 = await contractCQrVDrT.totalSupplyOf.call(tokenAbAlWAt, {from: accounts[3]});

		await expect(contractCQrVDrT.addBorrower.call(borrowerdQcAD74, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractvyngEc = await Bank.new({from: accounts[4]});
		const tokentVL28HX = "0x0000000000000000000000000000000000000000"
		const balancezpONli = await contractvyngEc.totalSupplyOf.call(tokentVL28HX, {from: accounts[3]});

		assert.equal(balancezpONli, 0)
	});
})