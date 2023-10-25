const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractnVWa688 = await Bank.new({from: accounts[4]});
		const borrowerAf6BRs2 = accounts[4]
		const amounthtYYxAi = BigInt("2006")
		const tokenaHRXZf = accounts[5]
		const amountEbPBupi = BigInt("1682")
		const whoMtrmqcM = accounts[3]
		const tokenHc1qAsF = accounts[3]
		const amountosUTaer = BigInt("1941")
		const tokengEXe0cK = "0x0000000000000000000000000000000000000001"
		await contractnVWa688.removeBorrower.call(borrowerAf6BRs2, {from: accounts[2]});
		await contractnVWa688.withdraw.call(tokenaHRXZf, amounthtYYxAi, {from: accounts[3]});
		await contractnVWa688.borrowFor.call(tokenHc1qAsF, whoMtrmqcM, amountEbPBupi, {from: accounts[1]});
		await contractnVWa688.repay.call(tokengEXe0cK, amountosUTaer, {from: accounts[0]});

		await expect(contractnVWa688.removeBorrower.call(borrowerAf6BRs2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contract4vtFep = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amount2OiEcd = BigInt("1917")
		const tokenodQEuPh = accounts[4]
		const borrowerzXjRGX1 = accounts[1]
		const amountpMhCB2Z = BigInt("1374")
		const tokenyQU8NR = "0x0000000000000000000000000000000000000001"
		const borrowerqldasRd = accounts[3]
		const amountWZgubRS = BigInt("899")
		const whor9IA3A6 = accounts[5]
		const tokenfazE9I = accounts[3]
		await contract4vtFep.deposit.call(tokenodQEuPh, amount2OiEcd, {from: accounts[0]});
		await contract4vtFep.removeBorrower.call(borrowerzXjRGX1, {from: accounts[2]});
		await contract4vtFep.withdraw.call(tokenyQU8NR, amountpMhCB2Z, {from: accounts[1]});
		await contract4vtFep.addBorrower.call(borrowerqldasRd, {from: accounts[4]});
		await contract4vtFep.borrowFor.call(tokenfazE9I, whor9IA3A6, amountWZgubRS, {from: accounts[0]});
	});

	it('test for Bank', async () => {
		const contractCYVIfC = await Bank.new({from: accounts[1]});
		const amountujcxzPx = BigInt("210")
		const tokeno8Zw3bP = accounts[3]
		const amounteezG9B = BigInt("1402")
		const whocClAdK = accounts[5]
		const tokenj1ju8WS = accounts[0]
		const tokenm4p4KjE = "0x0000000000000000000000000000000000000001"
		const borrowerhJEy8cU = accounts[3]
		const tokenDQdW2sS = accounts[6]
		const borrowerLbQFLiY = accounts[4]
		await contractCYVIfC.repay.call(tokeno8Zw3bP, amountujcxzPx, {from: accounts[0]});
		await contractCYVIfC.borrowFor.call(tokenj1ju8WS, whocClAdK, amounteezG9B, {from: accounts[0]});
		const balancePAbbM8l = await contractCYVIfC.totalSupplyOf.call(tokenm4p4KjE, {from: accounts[3]});
		await contractCYVIfC.removeBorrower.call(borrowerhJEy8cU, {from: accounts[4]});
		const balanceSRHWdew = await contractCYVIfC.totalSupplyOf.call(tokenDQdW2sS, {from: accounts[0]});
		await contractCYVIfC.removeBorrower.call(borrowerLbQFLiY, {from: accounts[4]});

		await expect(contractCYVIfC.repay.call(tokeno8Zw3bP, amountujcxzPx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractyTkONg0 = await Bank.new({from: accounts[3]});
		const tokenfQ7NSFi = accounts[2]
		const amountC94Jq6 = BigInt("788")
		const token3pD0DM = accounts[0]
		const amountorFTGFt = BigInt("1505")
		const whoiH5KrCo = accounts[1]
		const tokenjfZeG6U = accounts[4]
		const amountSWWsAXl = BigInt("1207")
		const whoMndCpQt = accounts[1]
		const tokendlPWlA = accounts[4]
		const amountSC8XERe = BigInt("1235")
		const tokenznsMbkz = accounts[3]
		const balanceTDQD5O0 = await contractyTkONg0.totalSupplyOf.call(tokenfQ7NSFi, {from: accounts[3]});
		await contractyTkONg0.borrow.call(token3pD0DM, amountC94Jq6, {from: accounts[4]});
		await contractyTkONg0.borrowFor.call(tokenjfZeG6U, whoiH5KrCo, amountorFTGFt, {from: accounts[0]});
		await contractyTkONg0.borrowFor.call(tokendlPWlA, whoMndCpQt, amountSWWsAXl, {from: accounts[0]});
		await contractyTkONg0.deposit.call(tokenznsMbkz, amountSC8XERe, {from: accounts[1]});

		await expect(contractyTkONg0.totalSupplyOf.call(tokenfQ7NSFi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractnEV2uWR = await Bank.new({from: accounts[1]});
		const amountgQO0mF = BigInt("1673")
		const tokenVgT1Dnq = accounts[3]
		const amountRZQJGJn = BigInt("1246")
		const tokenvq53tPF = accounts[2]
		const amountCjlEmT = BigInt("629")
		const tokenLUwyUyo = accounts[1]
		const amountW7jJvtO = BigInt("1630")
		const tokentz7stpB = accounts[1]
		await contractnEV2uWR.deposit.call(tokenVgT1Dnq, amountgQO0mF, {from: accounts[1]});
		await contractnEV2uWR.borrow.call(tokenvq53tPF, amountRZQJGJn, {from: accounts[2]});
		await contractnEV2uWR.withdraw.call(tokenLUwyUyo, amountCjlEmT, {from: accounts[0]});
		await contractnEV2uWR.repay.call(tokentz7stpB, amountW7jJvtO, {from: accounts[3]});

		await expect(contractnEV2uWR.deposit.call(tokenVgT1Dnq, amountgQO0mF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractySwPU42 = await Bank.new({from: accounts[3]});
		const borrowernRAJK6S = accounts[1]
		const amountGTljf66 = BigInt("788")
		const tokenfaYeFL6 = accounts[0]
		const amountuzIkgqW = BigInt("1505")
		const whotRHRTJo = accounts[3]
		const tokenBYFPydo = accounts[4]
		const amounttESk9c = BigInt("1806")
		const tokenvCu6iQB = accounts[2]
		const borrowerIZg5Ne = accounts[0]
		const amountSNtOtVb = BigInt("1207")
		const whoK6ssQK = accounts[1]
		const tokenzIDhxg9 = accounts[4]
		const amountPgU4AIg = BigInt("1235")
		const tokengqxJ7ya = accounts[3]
		await contractySwPU42.addBorrower.call(borrowernRAJK6S, {from: accounts[3]});
		await contractySwPU42.borrow.call(tokenfaYeFL6, amountGTljf66, {from: accounts[4]});
		await contractySwPU42.borrowFor.call(tokenBYFPydo, whotRHRTJo, amountuzIkgqW, {from: accounts[0]});
		await contractySwPU42.deposit.call(tokenvCu6iQB, amounttESk9c, {from: accounts[0]});
		await contractySwPU42.removeBorrower.call(borrowerIZg5Ne, {from: accounts[2]});
		await contractySwPU42.borrowFor.call(tokenzIDhxg9, whoK6ssQK, amountSNtOtVb, {from: accounts[0]});
		await contractySwPU42.deposit.call(tokengqxJ7ya, amountPgU4AIg, {from: accounts[1]});

		await expect(contractySwPU42.addBorrower.call(borrowernRAJK6S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractkijSHXZ = await Bank.new({from: accounts[3]});
		const amounttg7zj2T = BigInt("1969")
		const tokenGwZr0VH = accounts[5]
		const tokenmKEzXc = accounts[2]
		const borrowerry6nxVz = accounts[1]
		const amountxN9gN5C = BigInt("788")
		const tokenlOu8xdD = accounts[0]
		const amountQWtkvTA = BigInt("1207")
		const whopCZJjrV = accounts[1]
		const tokenQLrghjF = accounts[4]
		const amountu4JbD5j = BigInt("1235")
		const tokenymyOgFP = accounts[3]
		await contractkijSHXZ.withdraw.call(tokenGwZr0VH, amounttg7zj2T, {from: accounts[3]});
		const balancepoaacm5 = await contractkijSHXZ.totalSupplyOf.call(tokenmKEzXc, {from: accounts[3]});
		await contractkijSHXZ.removeBorrower.call(borrowerry6nxVz, {from: accounts[4]});
		await contractkijSHXZ.borrow.call(tokenlOu8xdD, amountxN9gN5C, {from: accounts[4]});
		await contractkijSHXZ.borrowFor.call(tokenQLrghjF, whopCZJjrV, amountQWtkvTA, {from: accounts[0]});
		await contractkijSHXZ.deposit.call(tokenymyOgFP, amountu4JbD5j, {from: accounts[1]});

		await expect(contractkijSHXZ.withdraw.call(tokenGwZr0VH, amounttg7zj2T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractOcEdJi = await Bank.new({from: accounts[3]});
		const borrowery3f4O5r = accounts[0]
		const amountAlWpjzi = BigInt("788")
		const tokenTuH76QQ = accounts[1]
		const amountxPtKWeJ = BigInt("1505")
		const whoYWUqYtt = accounts[1]
		const tokenKgpsYSC = accounts[4]
		const amountC1ofKYt = BigInt("1207")
		const whotsvCIrg = accounts[1]
		const tokenTF4bBJn = accounts[4]
		const borrowerf1tDNtD = accounts[2]
		const amountQkGOBuh = BigInt("238")
		const whosEmJ8x0 = accounts[4]
		const tokenaAwpwlZ = accounts[3]
		const amountCYhcOu = BigInt("1235")
		const tokeneT0WADC = accounts[3]
		const amountfGpPRQZ = BigInt("787")
		const tokenioK9lOw = accounts[5]
		await contractOcEdJi.removeBorrower.call(borrowery3f4O5r, {from: accounts[3]});
		await contractOcEdJi.borrow.call(tokenTuH76QQ, amountAlWpjzi, {from: accounts[4]});
		await contractOcEdJi.borrowFor.call(tokenKgpsYSC, whoYWUqYtt, amountxPtKWeJ, {from: accounts[0]});
		await contractOcEdJi.borrowFor.call(tokenTF4bBJn, whotsvCIrg, amountC1ofKYt, {from: accounts[0]});
		await contractOcEdJi.removeBorrower.call(borrowerf1tDNtD, {from: accounts[0]});
		await contractOcEdJi.borrowFor.call(tokenaAwpwlZ, whosEmJ8x0, amountQkGOBuh, {from: accounts[0]});
		await contractOcEdJi.deposit.call(tokeneT0WADC, amountCYhcOu, {from: accounts[1]});
		await contractOcEdJi.repay.call(tokenioK9lOw, amountfGpPRQZ, {from: accounts[4]});

		await expect(contractOcEdJi.removeBorrower.call(borrowery3f4O5r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractjbEPSPd = await Bank.new({from: accounts[2]});
		const tokenqO4AiQ4 = "0x0000000000000000000000000000000000000000"
		const amountbPM9Vt = BigInt("665")
		const tokenwWb4Ex = accounts[1]
		const amountnYEFvLj = BigInt("1747")
		const token9sgz8z = accounts[4]
		const borrowerMX4o1Ql = accounts[0]
		const amountVlvEaLC = BigInt("567")
		const whoN1HeEkT = accounts[1]
		const tokeni4aC2Xa = accounts[1]
		const amountA0nsBSy = BigInt("1979")
		const tokenuu55zne = accounts[1]
		const borrowerHu9Rn5r = "0x0000000000000000000000000000000000000001"
		const balanceSrW5XOZ = await contractjbEPSPd.totalSupplyOf.call(tokenqO4AiQ4, {from: accounts[4]});
		await contractjbEPSPd.repay.call(tokenwWb4Ex, amountbPM9Vt, {from: accounts[5]});
		await contractjbEPSPd.repay.call(token9sgz8z, amountnYEFvLj, {from: accounts[3]});
		await contractjbEPSPd.removeBorrower.call(borrowerMX4o1Ql, {from: accounts[5]});
		await contractjbEPSPd.borrowFor.call(tokeni4aC2Xa, whoN1HeEkT, amountVlvEaLC, {from: accounts[1]});
		await contractjbEPSPd.borrow.call(tokenuu55zne, amountA0nsBSy, {from: accounts[0]});
		await contractjbEPSPd.addBorrower.call(borrowerHu9Rn5r, {from: accounts[3]});

		assert.equal(balanceSrW5XOZ, 0)
		await expect(contractjbEPSPd.repay.call(tokenwWb4Ex, amountbPM9Vt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})