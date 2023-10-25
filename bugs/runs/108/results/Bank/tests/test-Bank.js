const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contracthBerb5f = await Bank.new({from: accounts[0]});
		const borrowerombr1P = accounts[0]
		const amountD8aPdiN = BigInt("1214")
		const tokenLlAsD2j = accounts[1]
		await contracthBerb5f.addBorrower.call(borrowerombr1P, {from: accounts[5]});
		await contracthBerb5f.repay.call(tokenLlAsD2j, amountD8aPdiN, {from: accounts[5]});

		await expect(contracthBerb5f.addBorrower.call(borrowerombr1P, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractMBGUCQ6 = await Bank.new({from: accounts[2]});
		const amountZ6JKFJ = BigInt("1131")
		const tokeneRX5sz9 = accounts[3]
		const amountuwiB2Yj = BigInt("407")
		const whoVuQ9YCW = accounts[1]
		const tokenckFM3G2 = accounts[5]
		const borrowerqkJM29l = "0x0000000000000000000000000000000000000001"
		await contractMBGUCQ6.withdraw.call(tokeneRX5sz9, amountZ6JKFJ, {from: accounts[2]});
		await contractMBGUCQ6.borrowFor.call(tokenckFM3G2, whoVuQ9YCW, amountuwiB2Yj, {from: accounts[2]});
		await contractMBGUCQ6.addBorrower.call(borrowerqkJM29l, {from: accounts[1]});

		await expect(contractMBGUCQ6.withdraw.call(tokeneRX5sz9, amountZ6JKFJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractbDD2EUS = await Bank.new({from: accounts[3]});
		const amountXfXvopI = BigInt("555")
		const tokenhliqZC = accounts[1]
		const amountjNlyhHU = BigInt("1616")
		const tokenj7V4y3x = accounts[3]
		const amountdDgeAe0 = BigInt("576")
		const whoANuoahT = accounts[1]
		const tokenzvUuZgw = accounts[0]
		await contractbDD2EUS.repay.call(tokenhliqZC, amountXfXvopI, {from: accounts[4]});
		await contractbDD2EUS.borrow.call(tokenj7V4y3x, amountjNlyhHU, {from: accounts[0]});
		await contractbDD2EUS.borrowFor.call(tokenzvUuZgw, whoANuoahT, amountdDgeAe0, {from: accounts[2]});

		await expect(contractbDD2EUS.repay.call(tokenhliqZC, amountXfXvopI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractwx7wVc = await Bank.new({from: accounts[4]});
		const amountxSF80mU = BigInt("1038")
		const tokentYaQYQe = accounts[4]
		const borrowerq10RGCl = accounts[1]
		const amounttoVeF8n = BigInt("697")
		const tokenb85Y1mD = accounts[4]
		const amountJEWx6o5 = BigInt("925")
		const tokenNygPrii = "0x0000000000000000000000000000000000000001"
		const amountkVSKda = BigInt("1212")
		const whoh7jcQLu = accounts[2]
		const tokenKLevEP = accounts[0]
		await contractwx7wVc.deposit.call(tokentYaQYQe, amountxSF80mU, {from: accounts[2]});
		await contractwx7wVc.addBorrower.call(borrowerq10RGCl, {from: accounts[2]});
		await contractwx7wVc.borrow.call(tokenb85Y1mD, amounttoVeF8n, {from: accounts[0]});
		await contractwx7wVc.borrow.call(tokenNygPrii, amountJEWx6o5, {from: accounts[3]});
		await contractwx7wVc.borrowFor.call(tokenKLevEP, whoh7jcQLu, amountkVSKda, {from: accounts[3]});

		await expect(contractwx7wVc.deposit.call(tokentYaQYQe, amountxSF80mU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractf0wUf9 = await Bank.new({from: accounts[2]});
		const tokenhVrRE9S = accounts[2]
		const borrowerlXqZAF2 = accounts[2]
		const amountjbGsg0M = BigInt("1890")
		const tokenBIh2S0a = accounts[0]
		const balanceKdT4g3S = await contractf0wUf9.totalSupplyOf.call(tokenhVrRE9S, {from: accounts[2]});
		await contractf0wUf9.removeBorrower.call(borrowerlXqZAF2, {from: accounts[3]});
		await contractf0wUf9.withdraw.call(tokenBIh2S0a, amountjbGsg0M, {from: accounts[0]});

		await expect(contractf0wUf9.totalSupplyOf.call(tokenhVrRE9S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractJRB45Hl = await Bank.new({from: accounts[0]});
		const borrowerD7QfmHD = accounts[0]
		const amountOakLfMO = BigInt("1145")
		const whoCPXuFIi = accounts[2]
		const tokenlnEGAcO = accounts[3]
		const borrowerJOORzHP = accounts[2]
		await contractJRB45Hl.removeBorrower.call(borrowerD7QfmHD, {from: accounts[0]});
		await contractJRB45Hl.borrowFor.call(tokenlnEGAcO, whoCPXuFIi, amountOakLfMO, {from: accounts[5]});
		await contractJRB45Hl.addBorrower.call(borrowerJOORzHP, {from: accounts[5]});

		await expect(contractJRB45Hl.removeBorrower.call(borrowerD7QfmHD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractEvqMD2N = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountvxQUtSZ = BigInt("1134")
		const tokenP4zimWH = accounts[0]
		const borrowerv14cNfl = "0x0000000000000000000000000000000000000001"
		const borrowerXD87lq = accounts[3]
		const amountIC1eBy6 = BigInt("583")
		const tokennz8T7MW = accounts[4]
		const amountEdDa4m0 = BigInt("1206")
		const whoWjaYgLQ = accounts[0]
		const tokenuGsmvz0 = accounts[3]
		await contractEvqMD2N.repay.call(tokenP4zimWH, amountvxQUtSZ, {from: accounts[3]});
		await contractEvqMD2N.removeBorrower.call(borrowerv14cNfl, {from: accounts[5]});
		await contractEvqMD2N.addBorrower.call(borrowerXD87lq, {from: accounts[4]});
		await contractEvqMD2N.deposit.call(tokennz8T7MW, amountIC1eBy6, {from: accounts[5]});
		await contractEvqMD2N.borrowFor.call(tokenuGsmvz0, whoWjaYgLQ, amountEdDa4m0, {from: accounts[1]});
	});

	it('test for Bank', async () => {
		const contractygHNbEc = await Bank.new({from: accounts[2]});
		const tokenAzhaSW1 = "0x0000000000000000000000000000000000000000"
		const amounteBMbMlB = BigInt("96")
		const tokenbWZn0v3 = accounts[2]
		const amountTw50GFm = BigInt("1948")
		const tokenUcGVwNM = accounts[2]
		const borrowergoiJV9I = accounts[3]
		const amountRER0I31 = BigInt("739")
		const tokenNcHRY5a = accounts[4]
		const amountZvMRtNI = BigInt("1890")
		const tokenqnFqDmg = accounts[0]
		const balancebQi2ZXn = await contractygHNbEc.totalSupplyOf.call(tokenAzhaSW1, {from: accounts[2]});
		await contractygHNbEc.withdraw.call(tokenbWZn0v3, amounteBMbMlB, {from: "0x0000000000000000000000000000000000000001"});
		await contractygHNbEc.borrow.call(tokenUcGVwNM, amountTw50GFm, {from: accounts[2]});
		await contractygHNbEc.removeBorrower.call(borrowergoiJV9I, {from: accounts[3]});
		await contractygHNbEc.deposit.call(tokenNcHRY5a, amountRER0I31, {from: accounts[1]});
		await contractygHNbEc.withdraw.call(tokenqnFqDmg, amountZvMRtNI, {from: accounts[0]});

		assert.equal(balancebQi2ZXn, 0)
		await expect(contractygHNbEc.withdraw.call(tokenbWZn0v3, amounteBMbMlB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractfI5PjM = await Bank.new({from: accounts[0]});
		const borrowerCo5ygh = accounts[2]
		const amountttMqa5D = BigInt("1974")
		const tokenw6O3Trv = accounts[4]
		const borrowerJIzuhvt = accounts[2]
		const amountJLTFrdc = BigInt("1363")
		const tokenpTrhpEe = accounts[2]
		await contractfI5PjM.addBorrower.call(borrowerCo5ygh, {from: accounts[0]});
		await contractfI5PjM.deposit.call(tokenw6O3Trv, amountttMqa5D, {from: "0x0000000000000000000000000000000000000001"});
		await contractfI5PjM.addBorrower.call(borrowerJIzuhvt, {from: accounts[5]});
		await contractfI5PjM.deposit.call(tokenpTrhpEe, amountJLTFrdc, {from: accounts[2]});

		await expect(contractfI5PjM.addBorrower.call(borrowerCo5ygh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})