const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractkAUKnWS = await Bank.new({from: accounts[3]});
		const amounttksrBGq = BigInt("782")
		const whoTFW4bel = accounts[2]
		const token54wOze = accounts[1]
		const amounthlK1y29 = BigInt("968")
		const who21taji = accounts[0]
		const tokenebSHubu = accounts[1]
		const amountQfRu5VT = BigInt("284")
		const whomR4up5z = accounts[0]
		const tokenhpin9db = accounts[0]
		const amountKijvGDq = BigInt("587")
		const tokenqWzdaVK = accounts[5]
		const amountqneCFsP = BigInt("1648")
		const tokendb1TDub = accounts[4]
		const amountDT5913y = BigInt("1407")
		const tokenYp8eqhS = accounts[0]
		await contractkAUKnWS.borrowFor.call(token54wOze, whoTFW4bel, amounttksrBGq, {from: accounts[4]});
		await contractkAUKnWS.borrowFor.call(tokenebSHubu, who21taji, amounthlK1y29, {from: accounts[5]});
		await contractkAUKnWS.borrowFor.call(tokenhpin9db, whomR4up5z, amountQfRu5VT, {from: accounts[2]});
		await contractkAUKnWS.repay.call(tokenqWzdaVK, amountKijvGDq, {from: accounts[3]});
		await contractkAUKnWS.repay.call(tokendb1TDub, amountqneCFsP, {from: accounts[3]});
		await contractkAUKnWS.borrow.call(tokenYp8eqhS, amountDT5913y, {from: accounts[0]});

		await expect(contractkAUKnWS.borrowFor.call(token54wOze, whoTFW4bel, amounttksrBGq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractaWuBPEV = await Bank.new({from: accounts[1]});
		const amountoL2BCiF = BigInt("1404")
		const tokenO69yhxA = accounts[2]
		const borrowerUBUXDJP = accounts[1]
		const amountu6sU2vS = BigInt("1741")
		const tokenENn5ISN = accounts[0]
		const amountz1WTbKN = BigInt("1403")
		const whoIt9SUWM = accounts[3]
		const tokenkTQ3FGw = accounts[0]
		await contractaWuBPEV.repay.call(tokenO69yhxA, amountoL2BCiF, {from: accounts[2]});
		await contractaWuBPEV.removeBorrower.call(borrowerUBUXDJP, {from: accounts[2]});
		await contractaWuBPEV.repay.call(tokenENn5ISN, amountu6sU2vS, {from: "0x0000000000000000000000000000000000000001"});
		await contractaWuBPEV.borrowFor.call(tokenkTQ3FGw, whoIt9SUWM, amountz1WTbKN, {from: accounts[0]});

		await expect(contractaWuBPEV.repay.call(tokenO69yhxA, amountoL2BCiF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractKYKWjFL = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const borrowerfiDzGa9 = accounts[1]
		const borrowerAIY3Nee = accounts[2]
		const borrowerEqlYP9w = accounts[1]
		const amountIsEMd16 = BigInt("1408")
		const tokenhfGf1vv = accounts[5]
		await contractKYKWjFL.removeBorrower.call(borrowerfiDzGa9, {from: accounts[2]});
		await contractKYKWjFL.removeBorrower.call(borrowerAIY3Nee, {from: accounts[1]});
		await contractKYKWjFL.removeBorrower.call(borrowerEqlYP9w, {from: accounts[0]});
		await contractKYKWjFL.borrow.call(tokenhfGf1vv, amountIsEMd16, {from: accounts[2]});
	});

	it('test for Bank', async () => {
		const contractR2cCf0c = await Bank.new({from: accounts[4]});
		const amountSH0NB8h = BigInt("636")
		const tokenfGQCWRH = accounts[4]
		const borrowerMDocrtP = accounts[5]
		const amountGUnXWnW = BigInt("1345")
		const tokenRmP4gQo = accounts[0]
		const amountSAfI2By = BigInt("570")
		const tokenOT6WEri = accounts[1]
		const amountXbyplvO = BigInt("1939")
		const tokenL91FxhL = accounts[3]
		await contractR2cCf0c.withdraw.call(tokenfGQCWRH, amountSH0NB8h, {from: accounts[4]});
		await contractR2cCf0c.addBorrower.call(borrowerMDocrtP, {from: accounts[5]});
		await contractR2cCf0c.deposit.call(tokenRmP4gQo, amountGUnXWnW, {from: accounts[0]});
		await contractR2cCf0c.withdraw.call(tokenOT6WEri, amountSAfI2By, {from: accounts[1]});
		await contractR2cCf0c.borrow.call(tokenL91FxhL, amountXbyplvO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractR2cCf0c.withdraw.call(tokenfGQCWRH, amountSH0NB8h, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractcheFbnA = await Bank.new({from: accounts[0]});
		const amountlXs09cs = BigInt("125")
		const tokenk2Zgvh = accounts[1]
		const amountHWXxjVe = BigInt("1422")
		const tokenQwsS0Y = accounts[2]
		const amountkvSzgLa = BigInt("1697")
		const tokenhNpAuvu = accounts[0]
		const amountRh8xtdf = BigInt("625")
		const whoQEObbWJ = accounts[2]
		const tokenYW1rnLC = accounts[3]
		const amountKJVrI9f = BigInt("1943")
		const whoxdZ0Ib = accounts[4]
		const tokenaFmqTjX = accounts[4]
		await contractcheFbnA.deposit.call(tokenk2Zgvh, amountlXs09cs, {from: accounts[3]});
		await contractcheFbnA.withdraw.call(tokenQwsS0Y, amountHWXxjVe, {from: accounts[2]});
		await contractcheFbnA.repay.call(tokenhNpAuvu, amountkvSzgLa, {from: accounts[0]});
		await contractcheFbnA.borrowFor.call(tokenYW1rnLC, whoQEObbWJ, amountRh8xtdf, {from: accounts[3]});
		await contractcheFbnA.borrowFor.call(tokenaFmqTjX, whoxdZ0Ib, amountKJVrI9f, {from: accounts[4]});

		await expect(contractcheFbnA.deposit.call(tokenk2Zgvh, amountlXs09cs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractWJTOz8f = await Bank.new({from: accounts[4]});
		const tokenDtd0len = "0x0000000000000000000000000000000000000001"
		const amountsXLDgtu = BigInt("567")
		const tokenOEklz1p = accounts[5]
		const borrowerY7WiMn1 = accounts[3]
		const borrowerNrUOym = accounts[0]
		const balanceARTP5SP = await contractWJTOz8f.totalSupplyOf.call(tokenDtd0len, {from: accounts[1]});
		await contractWJTOz8f.borrow.call(tokenOEklz1p, amountsXLDgtu, {from: accounts[1]});
		await contractWJTOz8f.addBorrower.call(borrowerY7WiMn1, {from: accounts[2]});
		await contractWJTOz8f.removeBorrower.call(borrowerNrUOym, {from: accounts[1]});

		await expect(contractWJTOz8f.totalSupplyOf.call(tokenDtd0len, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractcK5sEOA = await Bank.new({from: accounts[4]});
		const borrowerJbmPy21 = accounts[3]
		const tokenwJaLcWS = "0x0000000000000000000000000000000000000001"
		const amountIJn0VB4 = BigInt("252")
		const tokenbWRUCa7 = accounts[5]
		const amountvLV7c8m = BigInt("724")
		const tokenJB0rdim = accounts[5]
		const borrowerOPkvfR = accounts[3]
		const borrowerOTaBhdZ = accounts[0]
		await contractcK5sEOA.removeBorrower.call(borrowerJbmPy21, {from: accounts[4]});
		const balancewZ3lWnh = await contractcK5sEOA.totalSupplyOf.call(tokenwJaLcWS, {from: accounts[1]});
		await contractcK5sEOA.borrow.call(tokenbWRUCa7, amountIJn0VB4, {from: accounts[1]});
		await contractcK5sEOA.withdraw.call(tokenJB0rdim, amountvLV7c8m, {from: accounts[0]});
		await contractcK5sEOA.addBorrower.call(borrowerOPkvfR, {from: accounts[2]});
		await contractcK5sEOA.removeBorrower.call(borrowerOTaBhdZ, {from: accounts[1]});

		await expect(contractcK5sEOA.removeBorrower.call(borrowerJbmPy21, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractVaXjfwz = await Bank.new({from: accounts[4]});
		const tokenX4xYJII = "0x0000000000000000000000000000000000000000"
		const amountQZWO8J0 = BigInt("533")
		const tokenb3woHNJ = accounts[5]
		const borrowerTeqBaZl = accounts[3]
		const borrowerbxCMyYI = accounts[4]
		const balanceZQtWYE8 = await contractVaXjfwz.totalSupplyOf.call(tokenX4xYJII, {from: accounts[1]});
		await contractVaXjfwz.borrow.call(tokenb3woHNJ, amountQZWO8J0, {from: accounts[1]});
		await contractVaXjfwz.addBorrower.call(borrowerTeqBaZl, {from: accounts[2]});
		await contractVaXjfwz.addBorrower.call(borrowerbxCMyYI, {from: accounts[0]});

		assert.equal(balanceZQtWYE8, 0)
		await expect(contractVaXjfwz.borrow.call(tokenb3woHNJ, amountQZWO8J0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractYgnDDpL = await Bank.new({from: accounts[4]});
		const borrowerpyFTDaH = accounts[5]
		const borrowerNAJZpEf = accounts[1]
		await contractYgnDDpL.addBorrower.call(borrowerpyFTDaH, {from: accounts[4]});
		await contractYgnDDpL.removeBorrower.call(borrowerNAJZpEf, {from: accounts[1]});

		await expect(contractYgnDDpL.addBorrower.call(borrowerpyFTDaH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})