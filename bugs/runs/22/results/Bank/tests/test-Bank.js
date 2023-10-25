const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractzXMbkd = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountsZTLduu = BigInt("1527")
		const tokenJdOG4r9 = accounts[1]
		const amountvFOBltw = BigInt("731")
		const tokencMqeO6l = accounts[5]
		const amountQWMnwB = BigInt("1099")
		const whoX2OG1Py = accounts[3]
		const tokenzWB11QG = accounts[1]
		const amountFYFN9j = BigInt("941")
		const whoYNhjWJI = accounts[2]
		const tokenRK44HUB = "0x0000000000000000000000000000000000000001"
		const amountBwqPGrV = BigInt("887")
		const whoVQSkEfq = accounts[4]
		const tokenqR48z7L = accounts[3]
		await contractzXMbkd.repay.call(tokenJdOG4r9, amountsZTLduu, {from: accounts[2]});
		await contractzXMbkd.borrow.call(tokencMqeO6l, amountvFOBltw, {from: accounts[5]});
		await contractzXMbkd.borrowFor.call(tokenzWB11QG, whoX2OG1Py, amountQWMnwB, {from: accounts[2]});
		await contractzXMbkd.borrowFor.call(tokenRK44HUB, whoYNhjWJI, amountFYFN9j, {from: accounts[1]});
		await contractzXMbkd.borrowFor.call(tokenqR48z7L, whoVQSkEfq, amountBwqPGrV, {from: accounts[0]});
	});

	it('test for Bank', async () => {
		const contractoiJ52P = await Bank.new({from: accounts[0]});
		const amountw0O207t = BigInt("894")
		const whofdr37Bd = accounts[4]
		const tokenCbUmnqw = accounts[5]
		const amountngDx4mg = BigInt("539")
		const tokenTR6BUl7 = accounts[5]
		const borrowerxVpbBB4 = accounts[1]
		const tokenPKSRzcq = accounts[3]
		const amountoExIvna = BigInt("503")
		const tokenTry4dpG = accounts[1]
		const borroweraK0mo5A = accounts[4]
		await contractoiJ52P.borrowFor.call(tokenCbUmnqw, whofdr37Bd, amountw0O207t, {from: accounts[0]});
		await contractoiJ52P.deposit.call(tokenTR6BUl7, amountngDx4mg, {from: accounts[3]});
		await contractoiJ52P.removeBorrower.call(borrowerxVpbBB4, {from: "0x0000000000000000000000000000000000000001"});
		const balancegAZEYeN = await contractoiJ52P.totalSupplyOf.call(tokenPKSRzcq, {from: accounts[3]});
		await contractoiJ52P.repay.call(tokenTry4dpG, amountoExIvna, {from: accounts[0]});
		await contractoiJ52P.addBorrower.call(borroweraK0mo5A, {from: accounts[4]});

		await expect(contractoiJ52P.borrowFor.call(tokenCbUmnqw, whofdr37Bd, amountw0O207t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractM3PVIpx = await Bank.new({from: accounts[3]});
		const amountLpPDvR = BigInt("1980")
		const tokenx9YdVdS = accounts[2]
		const borroweruxlRDLV = accounts[4]
		await contractM3PVIpx.deposit.call(tokenx9YdVdS, amountLpPDvR, {from: accounts[3]});
		await contractM3PVIpx.removeBorrower.call(borroweruxlRDLV, {from: accounts[0]});

		await expect(contractM3PVIpx.deposit.call(tokenx9YdVdS, amountLpPDvR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractjtYVlN1 = await Bank.new({from: accounts[0]});
		const amountmBf4ZcT = BigInt("13")
		const tokenJGr8Unt = accounts[3]
		const amountNg0Ker = BigInt("679")
		const tokenBVUnSRw = accounts[3]
		const amountRAgkoa1 = BigInt("185")
		const tokenkFgifyP = accounts[2]
		const borrowerbYaE0l5 = accounts[5]
		const borrowerwpCoFLX = "0x0000000000000000000000000000000000000001"
		await contractjtYVlN1.repay.call(tokenJGr8Unt, amountmBf4ZcT, {from: accounts[3]});
		await contractjtYVlN1.borrow.call(tokenBVUnSRw, amountNg0Ker, {from: accounts[0]});
		await contractjtYVlN1.borrow.call(tokenkFgifyP, amountRAgkoa1, {from: accounts[3]});
		await contractjtYVlN1.addBorrower.call(borrowerbYaE0l5, {from: accounts[1]});
		await contractjtYVlN1.removeBorrower.call(borrowerwpCoFLX, {from: accounts[4]});

		await expect(contractjtYVlN1.repay.call(tokenJGr8Unt, amountmBf4ZcT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractpJjfTTZ = await Bank.new({from: accounts[3]});
		const tokenWfBHiD = accounts[0]
		const amountY0stdxk = BigInt("2003")
		const tokeng6eOHnD = accounts[1]
		const borrowerCDTV8V9 = accounts[5]
		const balanceLxfJlPV = await contractpJjfTTZ.totalSupplyOf.call(tokenWfBHiD, {from: accounts[1]});
		await contractpJjfTTZ.repay.call(tokeng6eOHnD, amountY0stdxk, {from: accounts[3]});
		await contractpJjfTTZ.removeBorrower.call(borrowerCDTV8V9, {from: accounts[0]});

		await expect(contractpJjfTTZ.totalSupplyOf.call(tokenWfBHiD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractNr1y3d = await Bank.new({from: accounts[3]});
		const borrowersr5H4eX = accounts[3]
		const amountNxw2Bh9 = BigInt("2016")
		const tokenMNaggmd = accounts[1]
		const borrowerUhZWB2O = accounts[5]
		await contractNr1y3d.addBorrower.call(borrowersr5H4eX, {from: accounts[3]});
		await contractNr1y3d.repay.call(tokenMNaggmd, amountNxw2Bh9, {from: accounts[3]});
		await contractNr1y3d.removeBorrower.call(borrowerUhZWB2O, {from: accounts[0]});

		await expect(contractNr1y3d.addBorrower.call(borrowersr5H4eX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractI2fxf1E = await Bank.new({from: accounts[3]});
		const tokenIF5tDR0 = "0x0000000000000000000000000000000000000000"
		const amountWWlihnX = BigInt("536")
		const tokenYXHIfqN = accounts[1]
		const amountCkPDNWe = BigInt("1311")
		const tokenIsZ8oWE = accounts[4]
		const amountukyIXq = BigInt("1972")
		const tokenCbWTOA5 = accounts[2]
		const borrowerdqLdFbO = accounts[1]
		const balanceRU3ubwm = await contractI2fxf1E.totalSupplyOf.call(tokenIF5tDR0, {from: accounts[3]});
		await contractI2fxf1E.borrow.call(tokenYXHIfqN, amountWWlihnX, {from: accounts[3]});
		await contractI2fxf1E.deposit.call(tokenIsZ8oWE, amountCkPDNWe, {from: accounts[3]});
		await contractI2fxf1E.deposit.call(tokenCbWTOA5, amountukyIXq, {from: accounts[3]});
		await contractI2fxf1E.removeBorrower.call(borrowerdqLdFbO, {from: accounts[1]});

		assert.equal(balanceRU3ubwm, 0)
		await expect(contractI2fxf1E.borrow.call(tokenYXHIfqN, amountWWlihnX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractGbXc8RI = await Bank.new({from: accounts[0]});
		const borrowerItkKgAY = accounts[4]
		const amountN7PXUc3 = BigInt("58")
		const tokenNeXQBZ4 = accounts[2]
		const amountdp7sZ5m = BigInt("1852")
		const tokeneYbY11Q = "0x0000000000000000000000000000000000000001"
		const amountPHne3WW = BigInt("1884")
		const tokencKxllwu = accounts[1]
		await contractGbXc8RI.removeBorrower.call(borrowerItkKgAY, {from: accounts[0]});
		await contractGbXc8RI.borrow.call(tokenNeXQBZ4, amountN7PXUc3, {from: accounts[1]});
		await contractGbXc8RI.deposit.call(tokeneYbY11Q, amountdp7sZ5m, {from: accounts[0]});
		await contractGbXc8RI.withdraw.call(tokencKxllwu, amountPHne3WW, {from: accounts[2]});

		await expect(contractGbXc8RI.removeBorrower.call(borrowerItkKgAY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracttyoMX2p = await Bank.new({from: accounts[0]});
		const amountFE67spj = BigInt("1515")
		const tokenQfROIO0 = accounts[2]
		const amountCnIV9nv = BigInt("1430")
		const tokenpnscsm = accounts[2]
		const amountZmGm2ks = BigInt("1748")
		const whohTN2Qth = accounts[2]
		const tokenDrenSVu = accounts[1]
		await contracttyoMX2p.withdraw.call(tokenQfROIO0, amountFE67spj, {from: accounts[0]});
		await contracttyoMX2p.deposit.call(tokenpnscsm, amountCnIV9nv, {from: accounts[1]});
		await contracttyoMX2p.borrowFor.call(tokenDrenSVu, whohTN2Qth, amountZmGm2ks, {from: accounts[0]});

		await expect(contracttyoMX2p.withdraw.call(tokenQfROIO0, amountFE67spj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})