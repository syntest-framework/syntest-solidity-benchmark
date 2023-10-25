const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contracteOETqVW = await Bank.new({from: accounts[3]});
		const amountyWxHR5u = BigInt("1483")
		const tokennbtDHN = accounts[4]
		const amountj8Q0tyt = BigInt("1235")
		const tokenGvhZiEh = accounts[3]
		const borroweroyD3OGy = accounts[2]
		const borrowerdZQz6kw = accounts[2]
		const borrowerk80cOOm = accounts[1]
		const amounthGcPc7j = BigInt("1522")
		const tokenVfQb4Fp = accounts[3]
		await contracteOETqVW.withdraw.call(tokennbtDHN, amountyWxHR5u, {from: accounts[4]});
		await contracteOETqVW.borrow.call(tokenGvhZiEh, amountj8Q0tyt, {from: accounts[1]});
		await contracteOETqVW.addBorrower.call(borroweroyD3OGy, {from: accounts[3]});
		await contracteOETqVW.addBorrower.call(borrowerdZQz6kw, {from: accounts[3]});
		await contracteOETqVW.removeBorrower.call(borrowerk80cOOm, {from: accounts[5]});
		await contracteOETqVW.repay.call(tokenVfQb4Fp, amounthGcPc7j, {from: accounts[1]});

		await expect(contracteOETqVW.withdraw.call(tokennbtDHN, amountyWxHR5u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractA0B3rrA = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amount2KAul0 = BigInt("734")
		const whoIPxh3am = accounts[1]
		const tokenbJRrLr = accounts[5]
		const tokeniEq0t2 = accounts[4]
		const borrowerc9kECfB = accounts[0]
		const borrowerwwaPIMX = accounts[5]
		const amountvRurjys = BigInt("343")
		const tokenxfQBaB = accounts[0]
		await contractA0B3rrA.borrowFor.call(tokenbJRrLr, whoIPxh3am, amount2KAul0, {from: accounts[5]});
		const balanceTqb5Nty = await contractA0B3rrA.totalSupplyOf.call(tokeniEq0t2, {from: accounts[0]});
		await contractA0B3rrA.addBorrower.call(borrowerc9kECfB, {from: accounts[1]});
		await contractA0B3rrA.removeBorrower.call(borrowerwwaPIMX, {from: accounts[5]});
		await contractA0B3rrA.withdraw.call(tokenxfQBaB, amountvRurjys, {from: accounts[4]});
	});

	it('test for Bank', async () => {
		const contractrxgOD8H = await Bank.new({from: accounts[2]});
		const amountoFs8l8 = BigInt("2004")
		const tokenxIqyMXf = accounts[0]
		const borrowerz1W9xp = accounts[2]
		const amountx28hPnN = BigInt("1689")
		const tokenHnG5iY = accounts[0]
		const amountwEB3bbw = BigInt("271")
		const tokenoXj0f4Z = accounts[2]
		const amountz9GHqjG = BigInt("815")
		const tokenBkZgbtP = accounts[4]
		await contractrxgOD8H.deposit.call(tokenxIqyMXf, amountoFs8l8, {from: accounts[2]});
		await contractrxgOD8H.addBorrower.call(borrowerz1W9xp, {from: accounts[2]});
		await contractrxgOD8H.borrow.call(tokenHnG5iY, amountx28hPnN, {from: accounts[4]});
		await contractrxgOD8H.borrow.call(tokenoXj0f4Z, amountwEB3bbw, {from: accounts[0]});
		await contractrxgOD8H.deposit.call(tokenBkZgbtP, amountz9GHqjG, {from: accounts[4]});

		await expect(contractrxgOD8H.deposit.call(tokenxIqyMXf, amountoFs8l8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractFfNb2s = await Bank.new({from: accounts[0]});
		const tokenhyP48Zi = accounts[5]
		const amountYuEuuc4 = BigInt("1933")
		const tokengYCnvMd = accounts[0]
		const amountEdCYRNo = BigInt("1825")
		const tokenwu4JEJ2 = accounts[2]
		const balanceh8yTKBi = await contractFfNb2s.totalSupplyOf.call(tokenhyP48Zi, {from: accounts[1]});
		await contractFfNb2s.borrow.call(tokengYCnvMd, amountYuEuuc4, {from: accounts[1]});
		await contractFfNb2s.borrow.call(tokenwu4JEJ2, amountEdCYRNo, {from: accounts[2]});

		await expect(contractFfNb2s.totalSupplyOf.call(tokenhyP48Zi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractu1CaFxk = await Bank.new({from: accounts[4]});
		const amountwMKTirI = BigInt("1269")
		const tokenjdPtbIm = accounts[2]
		const borrowerIFK6ZXL = "0x0000000000000000000000000000000000000001"
		const amountnE1lhbx = BigInt("1873")
		const tokenVGyyGnL = accounts[3]
		const amountwD505eH = BigInt("651")
		const token4arMi8 = accounts[3]
		const amountOmQw6Bq = BigInt("1527")
		const tokenX0gTcL1 = accounts[0]
		await contractu1CaFxk.withdraw.call(tokenjdPtbIm, amountwMKTirI, {from: accounts[4]});
		await contractu1CaFxk.removeBorrower.call(borrowerIFK6ZXL, {from: accounts[2]});
		await contractu1CaFxk.withdraw.call(tokenVGyyGnL, amountnE1lhbx, {from: accounts[1]});
		await contractu1CaFxk.deposit.call(token4arMi8, amountwD505eH, {from: accounts[5]});
		await contractu1CaFxk.borrow.call(tokenX0gTcL1, amountOmQw6Bq, {from: accounts[3]});

		await expect(contractu1CaFxk.withdraw.call(tokenjdPtbIm, amountwMKTirI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractAVc3e3i = await Bank.new({from: accounts[0]});
		const amountYREKTXy = BigInt("1816")
		const tokenKdD9oBl = accounts[3]
		const tokenOoH7d3G = accounts[5]
		const amountRkN1U7x = BigInt("1924")
		const tokenEUYA4AM = accounts[0]
		const amountnrgA7yg = BigInt("1464")
		const tokenzodi1W2 = accounts[3]
		const amountcViSFfd = BigInt("1825")
		const tokenUo3B3Ou = accounts[2]
		await contractAVc3e3i.repay.call(tokenKdD9oBl, amountYREKTXy, {from: accounts[1]});
		const balancen7tEgFu = await contractAVc3e3i.totalSupplyOf.call(tokenOoH7d3G, {from: accounts[1]});
		await contractAVc3e3i.borrow.call(tokenEUYA4AM, amountRkN1U7x, {from: accounts[1]});
		await contractAVc3e3i.repay.call(tokenzodi1W2, amountnrgA7yg, {from: accounts[4]});
		await contractAVc3e3i.borrow.call(tokenUo3B3Ou, amountcViSFfd, {from: accounts[2]});

		await expect(contractAVc3e3i.repay.call(tokenKdD9oBl, amountYREKTXy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractxYM6WFX = await Bank.new({from: accounts[0]});
		const borrowerRs8TZp = accounts[2]
		const tokenVLXd8dc = accounts[5]
		const borrowerZdp925T = accounts[5]
		const amountZpAHluo = BigInt("1933")
		const tokenK58NWvB = accounts[0]
		const amountLumKzc4 = BigInt("1118")
		const tokenQjeDFih = accounts[1]
		const amountwQweUrW = BigInt("1807")
		const tokenWxDMNh5 = accounts[2]
		await contractxYM6WFX.addBorrower.call(borrowerRs8TZp, {from: accounts[0]});
		const balance6mXbKT = await contractxYM6WFX.totalSupplyOf.call(tokenVLXd8dc, {from: accounts[1]});
		await contractxYM6WFX.addBorrower.call(borrowerZdp925T, {from: accounts[4]});
		await contractxYM6WFX.borrow.call(tokenK58NWvB, amountZpAHluo, {from: accounts[1]});
		await contractxYM6WFX.deposit.call(tokenQjeDFih, amountLumKzc4, {from: accounts[4]});
		await contractxYM6WFX.borrow.call(tokenWxDMNh5, amountwQweUrW, {from: accounts[2]});

		await expect(contractxYM6WFX.addBorrower.call(borrowerRs8TZp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractMEhY9gL = await Bank.new({from: accounts[0]});
		const tokenG1mJHzB = "0x0000000000000000000000000000000000000000"
		const tokenlpHaKuM = accounts[7]
		const balanceUzsouh8 = await contractMEhY9gL.totalSupplyOf.call(tokenG1mJHzB, {from: accounts[2]});
		const balanceyhz3YNW = await contractMEhY9gL.totalSupplyOf.call(tokenlpHaKuM, {from: accounts[1]});

		assert.equal(balanceUzsouh8, 0)
		await expect(contractMEhY9gL.totalSupplyOf.call(tokenlpHaKuM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractI649nMN = await Bank.new({from: accounts[0]});
		const borrower5Avput = accounts[3]
		const tokenraPLWa6 = accounts[5]
		const amountg7J7Z6u = BigInt("1446")
		const tokenmvapJap = accounts[2]
		const amountoCB3qHP = BigInt("1825")
		const tokenndZx1ed = accounts[2]
		await contractI649nMN.removeBorrower.call(borrower5Avput, {from: accounts[0]});
		const balanceRI9r7oY = await contractI649nMN.totalSupplyOf.call(tokenraPLWa6, {from: accounts[1]});
		await contractI649nMN.borrow.call(tokenmvapJap, amountg7J7Z6u, {from: "0x0000000000000000000000000000000000000001"});
		await contractI649nMN.borrow.call(tokenndZx1ed, amountoCB3qHP, {from: accounts[2]});

		await expect(contractI649nMN.removeBorrower.call(borrower5Avput, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})