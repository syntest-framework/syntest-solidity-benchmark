const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contracttLCH7pp = await Bank.new({from: accounts[1]});
		const amountLa5aDKw = BigInt("1387")
		const whokM7TRqk = accounts[5]
		const tokeng9uSCIA = accounts[4]
		const amountX8lpQ6T = BigInt("1542")
		const tokennYbuaYg = accounts[5]
		const borroweri3Oum9 = accounts[4]
		await contracttLCH7pp.borrowFor.call(tokeng9uSCIA, whokM7TRqk, amountLa5aDKw, {from: accounts[3]});
		await contracttLCH7pp.borrow.call(tokennYbuaYg, amountX8lpQ6T, {from: "0x0000000000000000000000000000000000000001"});
		await contracttLCH7pp.removeBorrower.call(borroweri3Oum9, {from: accounts[4]});

		await expect(contracttLCH7pp.borrowFor.call(tokeng9uSCIA, whokM7TRqk, amountLa5aDKw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractuz7cvbp = await Bank.new({from: accounts[2]});
		const amountqzkt6fX = BigInt("621")
		const tokensJGNUOK = accounts[0]
		const amountjhqh0j5 = BigInt("480")
		const tokenZFyWgCY = accounts[4]
		const borroweruneXpsC = accounts[4]
		const amountPhzCxJg = BigInt("67")
		const tokenOR515P8 = accounts[1]
		const amountBNYiKIn = BigInt("431")
		const token7GM3Xk = accounts[1]
		await contractuz7cvbp.repay.call(tokensJGNUOK, amountqzkt6fX, {from: accounts[1]});
		await contractuz7cvbp.withdraw.call(tokenZFyWgCY, amountjhqh0j5, {from: accounts[5]});
		await contractuz7cvbp.removeBorrower.call(borroweruneXpsC, {from: "0x0000000000000000000000000000000000000001"});
		await contractuz7cvbp.withdraw.call(tokenOR515P8, amountPhzCxJg, {from: accounts[4]});
		await contractuz7cvbp.borrow.call(token7GM3Xk, amountBNYiKIn, {from: accounts[3]});

		await expect(contractuz7cvbp.repay.call(tokensJGNUOK, amountqzkt6fX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contract8qHGjZ = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountgQRgxuO = BigInt("513")
		const tokenNZ4p4DN = accounts[4]
		const borrowerndafv9Q = accounts[5]
		await contract8qHGjZ.repay.call(tokenNZ4p4DN, amountgQRgxuO, {from: "0x0000000000000000000000000000000000000001"});
		await contract8qHGjZ.addBorrower.call(borrowerndafv9Q, {from: accounts[4]});
	});

	it('test for Bank', async () => {
		const contractrwRgxIl = await Bank.new({from: accounts[5]});
		const amountp7XU3jq = BigInt("126")
		const tokenYuTDP4F = accounts[4]
		const amountrnEn5vR = BigInt("16")
		const tokenFTF3lV7 = accounts[2]
		const amountpsAUkpi = BigInt("1716")
		const tokenDNLYxk = "0x0000000000000000000000000000000000000001"
		await contractrwRgxIl.deposit.call(tokenYuTDP4F, amountp7XU3jq, {from: "0x0000000000000000000000000000000000000001"});
		await contractrwRgxIl.withdraw.call(tokenFTF3lV7, amountrnEn5vR, {from: "0x0000000000000000000000000000000000000001"});
		await contractrwRgxIl.deposit.call(tokenDNLYxk, amountpsAUkpi, {from: accounts[4]});

		await expect(contractrwRgxIl.deposit.call(tokenYuTDP4F, amountp7XU3jq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractscrzJCG = await Bank.new({from: accounts[4]});
		const tokenwfvyDX3 = accounts[4]
		const amountdgbMlxJ = BigInt("223")
		const who8cfcPs = accounts[4]
		const tokenuFsKkYz = accounts[2]
		const amountDFo6AQc = BigInt("1817")
		const tokenzvQ4LqK = accounts[2]
		const amountEjLZwU = BigInt("1102")
		const tokenbeWDL4f = accounts[0]
		const amountZqGktC1 = BigInt("1900")
		const tokenBgyjCNO = accounts[4]
		const balancesEn2vaa = await contractscrzJCG.totalSupplyOf.call(tokenwfvyDX3, {from: accounts[0]});
		await contractscrzJCG.borrowFor.call(tokenuFsKkYz, who8cfcPs, amountdgbMlxJ, {from: accounts[3]});
		await contractscrzJCG.borrow.call(tokenzvQ4LqK, amountDFo6AQc, {from: accounts[4]});
		await contractscrzJCG.withdraw.call(tokenbeWDL4f, amountEjLZwU, {from: accounts[1]});
		await contractscrzJCG.repay.call(tokenBgyjCNO, amountZqGktC1, {from: accounts[1]});

		await expect(contractscrzJCG.totalSupplyOf.call(tokenwfvyDX3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractaqbOo0Z = await Bank.new({from: accounts[1]});
		const borrowerwoNVMx = accounts[2]
		const tokencTVFa6Z = accounts[1]
		const borrowerSb3zF8O = accounts[2]
		await contractaqbOo0Z.removeBorrower.call(borrowerwoNVMx, {from: accounts[1]});
		const balanceYcV4sjF = await contractaqbOo0Z.totalSupplyOf.call(tokencTVFa6Z, {from: "0x0000000000000000000000000000000000000001"});
		await contractaqbOo0Z.removeBorrower.call(borrowerSb3zF8O, {from: accounts[3]});

		await expect(contractaqbOo0Z.removeBorrower.call(borrowerwoNVMx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractW5fK1PJ = await Bank.new({from: accounts[4]});
		const amountm81rTTI = BigInt("1461")
		const tokenMyKs03w = accounts[2]
		const amountShCOJBm = BigInt("313")
		const tokenmb1gRpo = accounts[3]
		const tokenwD4m85 = accounts[6]
		await contractW5fK1PJ.withdraw.call(tokenMyKs03w, amountm81rTTI, {from: accounts[4]});
		await contractW5fK1PJ.withdraw.call(tokenmb1gRpo, amountShCOJBm, {from: accounts[0]});
		const balanceP5Honbe = await contractW5fK1PJ.totalSupplyOf.call(tokenwD4m85, {from: accounts[0]});

		await expect(contractW5fK1PJ.withdraw.call(tokenMyKs03w, amountm81rTTI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractkSggAjU = await Bank.new({from: accounts[4]});
		const borrowerQWK3O7z = accounts[1]
		const amountjxea9Vv = BigInt("1525")
		const tokenNv9UQ2W = accounts[1]
		const amountdyGpAJm = BigInt("1996")
		const token1l6ktm = accounts[3]
		const tokenTqJQmwx = accounts[6]
		await contractkSggAjU.addBorrower.call(borrowerQWK3O7z, {from: accounts[4]});
		await contractkSggAjU.repay.call(tokenNv9UQ2W, amountjxea9Vv, {from: accounts[2]});
		await contractkSggAjU.deposit.call(token1l6ktm, amountdyGpAJm, {from: accounts[0]});
		const balanceJVwxM6R = await contractkSggAjU.totalSupplyOf.call(tokenTqJQmwx, {from: accounts[0]});

		await expect(contractkSggAjU.addBorrower.call(borrowerQWK3O7z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractHt4ehmh = await Bank.new({from: accounts[4]});
		const tokenchEE3E9 = "0x0000000000000000000000000000000000000000"
		const tokenJ5G5e4M = accounts[4]
		const amountT61vta0 = BigInt("223")
		const whoJSSpmq = accounts[4]
		const tokenINM142r = accounts[2]
		const borrowermvnp4FI = accounts[4]
		const amountvkMenkH = BigInt("1817")
		const tokencWzSor1 = accounts[2]
		const amountg3xbjnB = BigInt("1900")
		const tokeng75Xgw9 = accounts[5]
		const amountPCsM6rV = BigInt("582")
		const whomgaOXO4 = accounts[0]
		const tokentBawKQs = accounts[3]
		const balancesOykPkK = await contractHt4ehmh.totalSupplyOf.call(tokenchEE3E9, {from: accounts[4]});
		const balancerg6eOoz = await contractHt4ehmh.totalSupplyOf.call(tokenJ5G5e4M, {from: accounts[0]});
		await contractHt4ehmh.borrowFor.call(tokenINM142r, whoJSSpmq, amountT61vta0, {from: accounts[3]});
		await contractHt4ehmh.removeBorrower.call(borrowermvnp4FI, {from: accounts[1]});
		await contractHt4ehmh.borrow.call(tokencWzSor1, amountvkMenkH, {from: accounts[4]});
		await contractHt4ehmh.repay.call(tokeng75Xgw9, amountg3xbjnB, {from: accounts[1]});
		await contractHt4ehmh.borrowFor.call(tokentBawKQs, whomgaOXO4, amountPCsM6rV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balancesOykPkK, 0)
		await expect(contractHt4ehmh.totalSupplyOf.call(tokenJ5G5e4M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})