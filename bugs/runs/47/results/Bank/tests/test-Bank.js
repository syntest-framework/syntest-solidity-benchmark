const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractJfW046N = await Bank.new({from: accounts[0]});
		const amountPR5Mezc = BigInt("1200")
		const tokenIGz0Sf = accounts[0]
		const amountGCZar0P = BigInt("1873")
		const tokenzYmVfQL = accounts[3]
		const amountkobz2ap = BigInt("1340")
		const tokenFcbbpNP = accounts[2]
		const amountSuiFaJp = BigInt("491")
		const tokenU6aaTXr = accounts[1]
		const tokend8rVMl1 = accounts[2]
		await contractJfW046N.withdraw.call(tokenIGz0Sf, amountPR5Mezc, {from: accounts[3]});
		await contractJfW046N.repay.call(tokenzYmVfQL, amountGCZar0P, {from: accounts[0]});
		await contractJfW046N.withdraw.call(tokenFcbbpNP, amountkobz2ap, {from: accounts[4]});
		await contractJfW046N.deposit.call(tokenU6aaTXr, amountSuiFaJp, {from: accounts[2]});
		const balancec5NPdP0 = await contractJfW046N.totalSupplyOf.call(tokend8rVMl1, {from: accounts[3]});

		await expect(contractJfW046N.withdraw.call(tokenIGz0Sf, amountPR5Mezc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractuXGjvah = await Bank.new({from: accounts[4]});
		const amountx5LYoN = BigInt("1040")
		const tokenVRZ5sSK = accounts[3]
		const amountEueFQNR = BigInt("577")
		const whotrG0ioM = accounts[3]
		const tokenX3zGA7S = "0x0000000000000000000000000000000000000001"
		const amountIUajvsT = BigInt("1068")
		const tokenRhE0eM3 = accounts[5]
		const borroweruf4SqcB = "0x0000000000000000000000000000000000000001"
		const amountFA1vQY = BigInt("1703")
		const tokenHt9ET0Q = accounts[1]
		const amountAcZQi9N = BigInt("935")
		const tokenyyd9vNa = accounts[2]
		await contractuXGjvah.repay.call(tokenVRZ5sSK, amountx5LYoN, {from: accounts[1]});
		await contractuXGjvah.borrowFor.call(tokenX3zGA7S, whotrG0ioM, amountEueFQNR, {from: accounts[4]});
		await contractuXGjvah.withdraw.call(tokenRhE0eM3, amountIUajvsT, {from: accounts[5]});
		await contractuXGjvah.addBorrower.call(borroweruf4SqcB, {from: accounts[5]});
		await contractuXGjvah.borrow.call(tokenHt9ET0Q, amountFA1vQY, {from: accounts[2]});
		await contractuXGjvah.repay.call(tokenyyd9vNa, amountAcZQi9N, {from: accounts[0]});

		await expect(contractuXGjvah.repay.call(tokenVRZ5sSK, amountx5LYoN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractXAQvrmx = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountp8AKiGJ = BigInt("1722")
		const tokenMX80A9V = accounts[4]
		const borroweryrNGK3 = "0x0000000000000000000000000000000000000001"
		const amountStAHcrk = BigInt("1055")
		const tokennwXFt6t = accounts[3]
		const amountEWUdAKh = BigInt("235")
		const tokeniDLLVNz = accounts[5]
		const tokenQSFDPws = accounts[5]
		await contractXAQvrmx.withdraw.call(tokenMX80A9V, amountp8AKiGJ, {from: accounts[3]});
		await contractXAQvrmx.removeBorrower.call(borroweryrNGK3, {from: accounts[0]});
		await contractXAQvrmx.deposit.call(tokennwXFt6t, amountStAHcrk, {from: accounts[2]});
		await contractXAQvrmx.withdraw.call(tokeniDLLVNz, amountEWUdAKh, {from: accounts[2]});
		const balanceqnrPDaw = await contractXAQvrmx.totalSupplyOf.call(tokenQSFDPws, {from: accounts[5]});
	});

	it('test for Bank', async () => {
		const contracttdER5Tj = await Bank.new({from: accounts[0]});
		const tokennnCyI0G = "0x0000000000000000000000000000000000000001"
		const borrowerhUrBL7V = accounts[0]
		const amountY0nD42q = BigInt("869")
		const tokenjBiVVgW = accounts[5]
		const balanceN25Vcoa = await contracttdER5Tj.totalSupplyOf.call(tokennnCyI0G, {from: accounts[3]});
		await contracttdER5Tj.removeBorrower.call(borrowerhUrBL7V, {from: "0x0000000000000000000000000000000000000001"});
		await contracttdER5Tj.borrow.call(tokenjBiVVgW, amountY0nD42q, {from: accounts[4]});

		await expect(contracttdER5Tj.totalSupplyOf.call(tokennnCyI0G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracttKjHGqo = await Bank.new({from: accounts[0]});
		const tokenbvqMv7M = "0x0000000000000000000000000000000000000000"
		const borrowerM8SYhfR = accounts[0]
		const tokenfIVAolt = accounts[0]
		const amountQ85yzKZ = BigInt("869")
		const tokeneZkmur = accounts[5]
		const balanceFGfQ9wJ = await contracttKjHGqo.totalSupplyOf.call(tokenbvqMv7M, {from: accounts[3]});
		await contracttKjHGqo.removeBorrower.call(borrowerM8SYhfR, {from: "0x0000000000000000000000000000000000000001"});
		const balancezb6rDg9 = await contracttKjHGqo.totalSupplyOf.call(tokenfIVAolt, {from: accounts[4]});
		await contracttKjHGqo.borrow.call(tokeneZkmur, amountQ85yzKZ, {from: accounts[4]});

		assert.equal(balanceFGfQ9wJ, 0)
		await expect(contracttKjHGqo.removeBorrower.call(borrowerM8SYhfR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractFghb3Mi = await Bank.new({from: accounts[2]});
		const amountSn75W2d = BigInt("1087")
		const tokenCIA6yHh = accounts[4]
		const borrowerMsJB93A = accounts[0]
		const borrowernqyyvF = accounts[0]
		const amountBTrZJm = BigInt("1327")
		const tokenv6UMIPS = accounts[3]
		const amountSsHL46J = BigInt("539")
		const tokenvwUbW7t = accounts[5]
		await contractFghb3Mi.deposit.call(tokenCIA6yHh, amountSn75W2d, {from: accounts[0]});
		await contractFghb3Mi.removeBorrower.call(borrowerMsJB93A, {from: "0x0000000000000000000000000000000000000001"});
		await contractFghb3Mi.removeBorrower.call(borrowernqyyvF, {from: accounts[4]});
		await contractFghb3Mi.withdraw.call(tokenv6UMIPS, amountBTrZJm, {from: accounts[2]});
		await contractFghb3Mi.repay.call(tokenvwUbW7t, amountSsHL46J, {from: accounts[5]});

		await expect(contractFghb3Mi.deposit.call(tokenCIA6yHh, amountSn75W2d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractQU10Z6S = await Bank.new({from: accounts[0]});
		const amountVtJms3J = BigInt("1269")
		const tokenHhbvQAc = accounts[1]
		const amountOu6sjqH = BigInt("854")
		const tokenPzbMD1u = accounts[5]
		await contractQU10Z6S.withdraw.call(tokenHhbvQAc, amountVtJms3J, {from: accounts[0]});
		await contractQU10Z6S.borrow.call(tokenPzbMD1u, amountOu6sjqH, {from: accounts[4]});

		await expect(contractQU10Z6S.withdraw.call(tokenHhbvQAc, amountVtJms3J, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractpttegk = await Bank.new({from: accounts[0]});
		const borrowerEYi0GnU = accounts[2]
		const borroweruiX47vN = accounts[4]
		const amounty70Kshv = BigInt("864")
		const tokenCtssTHA = accounts[5]
		await contractpttegk.addBorrower.call(borrowerEYi0GnU, {from: accounts[0]});
		await contractpttegk.addBorrower.call(borroweruiX47vN, {from: accounts[3]});
		await contractpttegk.borrow.call(tokenCtssTHA, amounty70Kshv, {from: accounts[4]});

		await expect(contractpttegk.addBorrower.call(borrowerEYi0GnU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractJ5wCYq = await Bank.new({from: accounts[0]});
		const borrowerSkIT30Q = accounts[4]
		const amountamjMeob = BigInt("842")
		const tokennh4w1Hf = accounts[5]
		await contractJ5wCYq.removeBorrower.call(borrowerSkIT30Q, {from: accounts[0]});
		await contractJ5wCYq.borrow.call(tokennh4w1Hf, amountamjMeob, {from: accounts[4]});

		await expect(contractJ5wCYq.removeBorrower.call(borrowerSkIT30Q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})