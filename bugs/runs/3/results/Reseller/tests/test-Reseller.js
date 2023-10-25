const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrJdTnbeW = accounts[1]
		const FOSTERAddrGnuP7kI = accounts[2]
		const initialRatesyfEo7g = BigInt("177")
		const initialPeriodZ5FZrSr = BigInt("1051")
		const initialOwnermcjnTZy = "0x0000000000000000000000000000000000000001"
		const contractnZgH3Df = await Reseller.new(USDTAddrJdTnbeW, FOSTERAddrGnuP7kI, initialRatesyfEo7g, initialPeriodZ5FZrSr, initialOwnermcjnTZy, {from: accounts[0]});
		const valuefeBpEhh = BigInt("1912")
		const newBoss23N1dFH = accounts[0]
		await contractnZgH3Df.withdraw.call(valuefeBpEhh, {from: accounts[0]});
		await contractnZgH3Df.deposeBoss2.call(newBoss23N1dFH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractnZgH3Df.withdraw.call(valuefeBpEhh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddroDSAt61 = accounts[5]
		const FOSTERAddramH8fFA = "0x0000000000000000000000000000000000000001"
		const initialRateBpRuWDM = BigInt("1030")
		const initialPeriodFMGLVZV = BigInt("636")
		const initialOwnerhLNtBDz = accounts[1]
		const contractAjJRzwh = await Reseller.new(USDTAddroDSAt61, FOSTERAddramH8fFA, initialRateBpRuWDM, initialPeriodFMGLVZV, initialOwnerhLNtBDz, {from: accounts[2]});
		const accountPDtLDWR = accounts[1]
		const newBoss1Zkq0Cwc = accounts[1]
		const _periodKEIrZwm = BigInt("1662")
		const amountB6rcv1C = BigInt("800")
		const recipientTdp4Ilg = accounts[1]
		const newMinimummWtrM8 = BigInt("653")
		const accountZzD2NLR = accounts[0]
		const nullLDLX15B = await contractAjJRzwh.allowanceUSDT.call(accountPDtLDWR, {from: accounts[3]});
		await contractAjJRzwh.deposeBoss1.call(newBoss1Zkq0Cwc, {from: accounts[4]});
		await contractAjJRzwh.freezeAndTransfer.call(recipientTdp4Ilg, amountB6rcv1C, _periodKEIrZwm, {from: accounts[3]});
		await contractAjJRzwh.setMinimum.call(newMinimummWtrM8, {from: accounts[4]});
		const nullqxKZobC = await contractAjJRzwh.allowanceUSDT.call(accountZzD2NLR, {from: accounts[1]});

		await expect(contractAjJRzwh.allowanceUSDT.call(accountPDtLDWR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKYyjAvv = accounts[4]
		const FOSTERAddrq0oH9b = accounts[2]
		const initialRatexRIthu4 = BigInt("10")
		const initialPeriodrEFN7t = BigInt("239")
		const initialOwnerx9N8ZhJ = accounts[4]
		const contract4fvoX8 = await Reseller.new(USDTAddrKYyjAvv, FOSTERAddrq0oH9b, initialRatexRIthu4, initialPeriodrEFN7t, initialOwnerx9N8ZhJ, {from: accounts[4]});
		const newMinimumAf8CUeX = BigInt("170")
		const accountxRGZML = accounts[1]
		const level5XOrLhSb = BigInt("177")
		const level4RecGs6m = BigInt("199")
		const level3NJr8QOG = BigInt("134")
		const level2sJit0p = BigInt("102")
		const level1ZVZC1Hu = BigInt("10")
		const newFeeoEAvJg0 = BigInt("187")
		await contract4fvoX8.setMinimum.call(newMinimumAf8CUeX, {from: accounts[1]});
		const nullI4i1s4A = await contract4fvoX8.allowanceFOSTER.call(accountxRGZML, {from: accounts[0]});
		await contract4fvoX8.setRefBonus.call(level1ZVZC1Hu, level2sJit0p, level3NJr8QOG, level4RecGs6m, level5XOrLhSb, {from: accounts[0]});
		await contract4fvoX8.setFee.call(newFeeoEAvJg0, {from: accounts[3]});

		await expect(contract4fvoX8.setMinimum.call(newMinimumAf8CUeX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrKHr1j8 = accounts[3]
		const FOSTERAddrtnSwo6H = accounts[1]
		const initialRateawr1ISm = BigInt("386")
		const initialPeriodvE8dsE1 = BigInt("682")
		const initialOwnerjIFng6L = accounts[4]
		const contractiWzPx2m = await Reseller.new(USDTAddrrKHr1j8, FOSTERAddrtnSwo6H, initialRateawr1ISm, initialPeriodvE8dsE1, initialOwnerjIFng6L, {from: accounts[4]});
		const _ref5Y3Imw03 = "0x0000000000000000000000000000000000000001"
		const _ref4ht1sXwW = "0x0000000000000000000000000000000000000001"
		const _ref3IeRowJ8 = accounts[5]
		const _ref2dYoZkeM = accounts[3]
		const _ref1Li9Ar65 = accounts[5]
		const valuexT8vqeS = BigInt("746")
		const accountz8xdqPk = "0x0000000000000000000000000000000000000001"
		const newMinimumXZzDftz = BigInt("233")
		const newMinimumP4ceoRy = BigInt("559")
		const level5g0kIIpC = BigInt("199")
		const level4WNaFrsP = BigInt("86")
		const level3sBWZxm = BigInt("5")
		const level2kyr0E1G = BigInt("109")
		const level1JVKYocN = BigInt("135")
		const newMinimumfBJxnGW = BigInt("1557")
		await contractiWzPx2m.buy.call(valuexT8vqeS, _ref1Li9Ar65, _ref2dYoZkeM, _ref3IeRowJ8, _ref4ht1sXwW, _ref5Y3Imw03, {from: accounts[2]});
		const nullqlBGuS5 = await contractiWzPx2m.allowanceFOSTER.call(accountz8xdqPk, {from: accounts[0]});
		await contractiWzPx2m.setMinimum.call(newMinimumXZzDftz, {from: accounts[4]});
		await contractiWzPx2m.setMinimum.call(newMinimumP4ceoRy, {from: accounts[4]});
		await contractiWzPx2m.setRefBonus.call(level1JVKYocN, level2kyr0E1G, level3sBWZxm, level4WNaFrsP, level5g0kIIpC, {from: accounts[0]});
		await contractiWzPx2m.setMinimum.call(newMinimumfBJxnGW, {from: accounts[1]});

		await expect(contractiWzPx2m.buy.call(valuexT8vqeS, _ref1Li9Ar65, _ref2dYoZkeM, _ref3IeRowJ8, _ref4ht1sXwW, _ref5Y3Imw03, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDOUKBtW = accounts[1]
		const FOSTERAddrgGcuIbr = "0x0000000000000000000000000000000000000001"
		const initialRateP8vAz6y = BigInt("760")
		const initialPeriodnP2r0KX = BigInt("779")
		const initialOwner6b3dsh = accounts[5]
		const contractfzDC6q2 = await Reseller.new(USDTAddrDOUKBtW, FOSTERAddrgGcuIbr, initialRateP8vAz6y, initialPeriodnP2r0KX, initialOwner6b3dsh, {from: accounts[5]});
		const newBoss41puNGo = accounts[2]
		const newBoss2RquGWpx = accounts[2]
		await contractfzDC6q2.deposeBoss4.call(newBoss41puNGo, {from: accounts[4]});
		await contractfzDC6q2.deposeBoss2.call(newBoss2RquGWpx, {from: accounts[4]});

		await expect(contractfzDC6q2.deposeBoss4.call(newBoss41puNGo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTyk8wC7 = accounts[0]
		const FOSTERAddrFXYBkK = accounts[4]
		const initialRatextrdhvh = BigInt("857")
		const initialPeriodH8UFFP = BigInt("347")
		const initialOwnertuvCykO = accounts[1]
		const contractraiCmT1 = await Reseller.new(USDTAddrTyk8wC7, FOSTERAddrFXYBkK, initialRatextrdhvh, initialPeriodH8UFFP, initialOwnertuvCykO, {from: accounts[3]});
		const _periodA4ntuug = BigInt("1814")
		const amountbAQ9WtB = BigInt("1093")
		const recipientO5mYuWe = "0x0000000000000000000000000000000000000001"
		const valuexlVUVQD = BigInt("1336")
		const recipientYG5uAww = accounts[1]
		const ERC20Tokenb5pB3rZ = accounts[3]
		const level5bO2SMEk = BigInt("63")
		const level4Ccvegmk = BigInt("103")
		const level3Myw5ih = BigInt("221")
		const level2vIFCiCG = BigInt("149")
		const level1wCKByQW = BigInt("82")
		const newBoss1sFB37zg = accounts[2]
		await contractraiCmT1.freezeAndTransfer.call(recipientO5mYuWe, amountbAQ9WtB, _periodA4ntuug, {from: accounts[1]});
		await contractraiCmT1.withdrawERC20.call(ERC20Tokenb5pB3rZ, recipientYG5uAww, valuexlVUVQD, {from: accounts[1]});
		await contractraiCmT1.setRefBonus.call(level1wCKByQW, level2vIFCiCG, level3Myw5ih, level4Ccvegmk, level5bO2SMEk, {from: accounts[3]});
		await contractraiCmT1.deposeBoss1.call(newBoss1sFB37zg, {from: accounts[0]});
		await contractraiCmT1.switchState.call({from: accounts[2]});

		await expect(contractraiCmT1.freezeAndTransfer.call(recipientO5mYuWe, amountbAQ9WtB, _periodA4ntuug, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQvUnhez = accounts[3]
		const FOSTERAddrLyTRDh = accounts[2]
		const initialRateJSdPWmI = BigInt("332")
		const initialPeriodfvK2v2Z = BigInt("1380")
		const initialOwnerTOIJP3L = accounts[2]
		const contractRQF44XB = await Reseller.new(USDTAddrQvUnhez, FOSTERAddrLyTRDh, initialRateJSdPWmI, initialPeriodfvK2v2Z, initialOwnerTOIJP3L, {from: accounts[1]});
		const newBoss3EeVMo5m = accounts[3]
		const newRateC9Dml7M = BigInt("71")
		await contractRQF44XB.deposeBoss3.call(newBoss3EeVMo5m, {from: accounts[1]});
		await contractRQF44XB.setRate.call(newRateC9Dml7M, {from: accounts[1]});

		await expect(contractRQF44XB.deposeBoss3.call(newBoss3EeVMo5m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqoTCGdG = accounts[1]
		const FOSTERAddrUKygiA = accounts[1]
		const initialRateygb69aI = BigInt("1810")
		const initialPeriodRZI2yoj = BigInt("57")
		const initialOwnerfoEIB0b = accounts[0]
		const contractP4ZmZdV = await Reseller.new(USDTAddrqoTCGdG, FOSTERAddrUKygiA, initialRateygb69aI, initialPeriodRZI2yoj, initialOwnerfoEIB0b, {from: accounts[3]});
		const amountRy8PwSx = BigInt("1954")
		const accountRQ4Qfwo = accounts[0]
		const commentOKb2aIA = "rDI9oOIRdfdxlBszYNwRXPXzd82MVRPKMARlF86oWcov6xYbXYqm"
		const _ref5pyO2bX = accounts[1]
		const _ref4dMOT71L = accounts[4]
		const _ref3HSMl8LE = accounts[3]
		const _ref2mSl4DV = accounts[4]
		const _ref1Foz1wLy = accounts[4]
		const valueFWsbmsh = BigInt("1377")
		const nullUAqw6ZM = await contractP4ZmZdV.getEstimation.call(amountRy8PwSx, {from: accounts[0]});
		const nullhOY2NmJ = await contractP4ZmZdV.allowanceFOSTER.call(accountRQ4Qfwo, {from: accounts[0]});
		await contractP4ZmZdV.purchase.call(valueFWsbmsh, _ref1Foz1wLy, _ref2mSl4DV, _ref3HSMl8LE, _ref4dMOT71L, _ref5pyO2bX, commentOKb2aIA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullUAqw6ZM, 3536740)
		await expect(contractP4ZmZdV.allowanceFOSTER.call(accountRQ4Qfwo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrf4PhW1 = accounts[2]
		const FOSTERAddrTXpp6NP = "0x0000000000000000000000000000000000000001"
		const initialRatek9rS4D = BigInt("1930")
		const initialPeriodepuL0lJ = BigInt("1279")
		const initialOwnerHbjoBQ0 = accounts[5]
		const contractG1mOSrV = await Reseller.new(USDTAddrf4PhW1, FOSTERAddrTXpp6NP, initialRatek9rS4D, initialPeriodepuL0lJ, initialOwnerHbjoBQ0, {from: accounts[4]});
		const accountdFp1ZEs = accounts[1]
		const valueLy5D07a = BigInt("1910")
		const recipientEdlWaja = accounts[4]
		const ERC20TokenLRUunq9 = accounts[3]
		const newRateh4pjrek = BigInt("1896")
		const amountSx2z4Y2 = BigInt("1758")
		const newMinimumjJWdFZy = BigInt("1660")
		const nullKNrJMxS = await contractG1mOSrV.balanceUSDT.call(accountdFp1ZEs, {from: accounts[4]});
		await contractG1mOSrV.withdrawERC20.call(ERC20TokenLRUunq9, recipientEdlWaja, valueLy5D07a, {from: accounts[1]});
		await contractG1mOSrV.setRate.call(newRateh4pjrek, {from: accounts[4]});
		const nullnmxz8h = await contractG1mOSrV.getEstimation.call(amountSx2z4Y2, {from: accounts[0]});
		await contractG1mOSrV.setMinimum.call(newMinimumjJWdFZy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractG1mOSrV.balanceUSDT.call(accountdFp1ZEs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcnGVnz2 = accounts[0]
		const FOSTERAddrqR0Fkbd = accounts[0]
		const initialRateS5Axbfa = BigInt("79")
		const initialPeriodYx9Kv3G = BigInt("1508")
		const initialOwnerCDg6HXo = accounts[1]
		const contractPWErPGR = await Reseller.new(USDTAddrcnGVnz2, FOSTERAddrqR0Fkbd, initialRateS5Axbfa, initialPeriodYx9Kv3G, initialOwnerCDg6HXo, {from: accounts[4]});
		const newRateQ6zF55t = BigInt("1496")
		const accountxvH5vAg = accounts[2]
		const level5eznu6uS = BigInt("185")
		const level4ytLtcem = BigInt("99")
		const level3GlvSxVJ = BigInt("32")
		const level2z6t4f8j = BigInt("252")
		const level1Z1Duvrf = BigInt("128")
		const newBoss1T8yYg6s = accounts[0]
		const accounteFIn6Yo = accounts[4]
		const _periodZ711iro = BigInt("422")
		const amountVaAx8qI = BigInt("899")
		const recipientX8hFm9C = accounts[4]
		await contractPWErPGR.setRate.call(newRateQ6zF55t, {from: accounts[0]});
		const nulltdn1rQY = await contractPWErPGR.allowanceUSDT.call(accountxvH5vAg, {from: accounts[4]});
		await contractPWErPGR.setRefBonus.call(level1Z1Duvrf, level2z6t4f8j, level3GlvSxVJ, level4ytLtcem, level5eznu6uS, {from: accounts[2]});
		await contractPWErPGR.deposeBoss1.call(newBoss1T8yYg6s, {from: accounts[5]});
		const null68b59B = await contractPWErPGR.balanceUSDT.call(accounteFIn6Yo, {from: accounts[2]});
		await contractPWErPGR.freezeAndTransfer.call(recipientX8hFm9C, amountVaAx8qI, _periodZ711iro, {from: accounts[1]});

		await expect(contractPWErPGR.setRate.call(newRateQ6zF55t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNrHwHg = accounts[1]
		const FOSTERAddrDlb00bY = "0x0000000000000000000000000000000000000001"
		const initialRateEu2dcUB = BigInt("760")
		const initialPeriodfSQdCl5 = BigInt("779")
		const initialOwnerwZWCsjW = accounts[5]
		const contractgrmatna = await Reseller.new(USDTAddrNrHwHg, FOSTERAddrDlb00bY, initialRateEu2dcUB, initialPeriodfSQdCl5, initialOwnerwZWCsjW, {from: accounts[5]});
		const newBoss2tOLPRi7 = accounts[2]
		const newRatefHcfWb = BigInt("928")
		await contractgrmatna.deposeBoss2.call(newBoss2tOLPRi7, {from: accounts[4]});
		await contractgrmatna.setRate.call(newRatefHcfWb, {from: accounts[5]});

		await expect(contractgrmatna.deposeBoss2.call(newBoss2tOLPRi7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrk7Tcr9A = accounts[3]
		const FOSTERAddrW5QyuYf = accounts[2]
		const initialRate5OSwqS = BigInt("332")
		const initialPeriodgUDPHSQ = BigInt("1380")
		const initialOwnerLGLEaI = accounts[2]
		const contractfGGortQ = await Reseller.new(USDTAddrk7Tcr9A, FOSTERAddrW5QyuYf, initialRate5OSwqS, initialPeriodgUDPHSQ, initialOwnerLGLEaI, {from: accounts[1]});
		const valueBR0JdRu = BigInt("188")
		const recipientDAjuay6 = accounts[5]
		const ERC20TokenAuANUuD = accounts[5]
		const newBoss1lqGRHmi = accounts[2]
		const newBoss3EcTncZ = accounts[3]
		const newRatestfv1OZ = BigInt("71")
		await contractfGGortQ.withdrawERC20.call(ERC20TokenAuANUuD, recipientDAjuay6, valueBR0JdRu, {from: accounts[1]});
		await contractfGGortQ.deposeBoss1.call(newBoss1lqGRHmi, {from: accounts[2]});
		await contractfGGortQ.deposeBoss3.call(newBoss3EcTncZ, {from: accounts[1]});
		await contractfGGortQ.setRate.call(newRatestfv1OZ, {from: accounts[1]});

		await expect(contractfGGortQ.withdrawERC20.call(ERC20TokenAuANUuD, recipientDAjuay6, valueBR0JdRu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrpEt7o70 = accounts[1]
		const FOSTERAddrAYLNmk = accounts[2]
		const initialRateIGwKHUq = BigInt("1026")
		const initialPeriodhqcxsg0 = BigInt("1670")
		const initialOwnerl8w2TC5 = accounts[1]
		const contractqwh46Kn = await Reseller.new(USDTAddrpEt7o70, FOSTERAddrAYLNmk, initialRateIGwKHUq, initialPeriodhqcxsg0, initialOwnerl8w2TC5, {from: accounts[3]});
		const newFeecj1vrvO = BigInt("69")
		const valueWl9xAcS = BigInt("1930")
		const _ref5ujSx68v = accounts[2]
		const _ref4dsmBGUa = accounts[0]
		const _ref3IS4lR0e = accounts[3]
		const _ref2J9c9xBT = accounts[4]
		const _ref1KW5C91O = "0x0000000000000000000000000000000000000001"
		const valueFrMKx4p = BigInt("875")
		const _periodqJLfspT = BigInt("1065")
		const amountNPJEwaw = BigInt("1345")
		const recipientjNhGYwm = accounts[0]
		const _periodd7m3qiT = BigInt("188")
		const amountc0lQkDX = BigInt("945")
		const recipientvsjMvr = accounts[5]
		const accountf8NcCKA = accounts[0]
		await contractqwh46Kn.setFee.call(newFeecj1vrvO, {from: accounts[4]});
		await contractqwh46Kn.withdraw.call(valueWl9xAcS, {from: accounts[3]});
		await contractqwh46Kn.buy.call(valueFrMKx4p, _ref1KW5C91O, _ref2J9c9xBT, _ref3IS4lR0e, _ref4dsmBGUa, _ref5ujSx68v, {from: accounts[5]});
		await contractqwh46Kn.freezeAndTransfer.call(recipientjNhGYwm, amountNPJEwaw, _periodqJLfspT, {from: "0x0000000000000000000000000000000000000001"});
		await contractqwh46Kn.freezeAndTransfer.call(recipientvsjMvr, amountc0lQkDX, _periodd7m3qiT, {from: accounts[1]});
		const nullrF6gpNi = await contractqwh46Kn.balanceUSDT.call(accountf8NcCKA, {from: accounts[1]});

		await expect(contractqwh46Kn.setFee.call(newFeecj1vrvO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHsrUkiP = accounts[1]
		const FOSTERAddrgHd6QC = accounts[2]
		const initialRatejs5LjJD = BigInt("177")
		const initialPeriodJJ2Q5Rd = BigInt("1051")
		const initialOwnern3C9wL = "0x0000000000000000000000000000000000000001"
		const contractTcJQdRq = await Reseller.new(USDTAddrHsrUkiP, FOSTERAddrgHd6QC, initialRatejs5LjJD, initialPeriodJJ2Q5Rd, initialOwnern3C9wL, {from: accounts[0]});
		const newPeriodUnU8782 = BigInt("1178")
		const valueoScqTD0 = BigInt("1878")
		await contractTcJQdRq.setPeriod.call(newPeriodUnU8782, {from: accounts[4]});
		await contractTcJQdRq.withdraw.call(valueoScqTD0, {from: accounts[0]});

		await expect(contractTcJQdRq.setPeriod.call(newPeriodUnU8782, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxFTvcCL = accounts[1]
		const FOSTERAddrO9NtFNv = "0x0000000000000000000000000000000000000001"
		const initialRateYaILC8 = BigInt("760")
		const initialPeriodqB06CGE = BigInt("779")
		const initialOwneriGCf5wP = accounts[5]
		const contractZGDBfI1 = await Reseller.new(USDTAddrxFTvcCL, FOSTERAddrO9NtFNv, initialRateYaILC8, initialPeriodqB06CGE, initialOwneriGCf5wP, {from: accounts[5]});
		const newBoss4x9c3uAE = accounts[5]
		const commentInAV75j = "yQbeBLwc3kj6pxB4fQoWPEVsdFBMsQr42x5eN4blEgR7MQ1IcYk7FeT4qTNP8KsewVyvs9V"
		const _ref5xFjYACK = "0x0000000000000000000000000000000000000001"
		const _ref4rt0YMS = accounts[0]
		const _ref3wSeADgA = "0x0000000000000000000000000000000000000001"
		const _ref2YZXcSzd = accounts[1]
		const _ref16Y0QLb = accounts[2]
		const valueBs9SeRJ = BigInt("1078")
		await contractZGDBfI1.switchState.call({from: accounts[0]});
		await contractZGDBfI1.deposeBoss4.call(newBoss4x9c3uAE, {from: accounts[4]});
		await contractZGDBfI1.purchase.call(valueBs9SeRJ, _ref16Y0QLb, _ref2YZXcSzd, _ref3wSeADgA, _ref4rt0YMS, _ref5xFjYACK, commentInAV75j, {from: accounts[0]});

		await expect(contractZGDBfI1.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzz4Y1Fe = accounts[1]
		const FOSTERAddrQTGGpsi = "0x0000000000000000000000000000000000000001"
		const initialRateIZ0A7be = BigInt("760")
		const initialPeriodJX11hPr = BigInt("779")
		const initialOwnerarXz3PD = accounts[5]
		const contractXO36M0l = await Reseller.new(USDTAddrzz4Y1Fe, FOSTERAddrQTGGpsi, initialRateIZ0A7be, initialPeriodJX11hPr, initialOwnerarXz3PD, {from: accounts[5]});
		const level5Cfej8jU = BigInt("223")
		const level4ZXBd1Ce = BigInt("84")
		const level3JArQ3kO = BigInt("153")
		const level2E7NeEc = BigInt("235")
		const level1rYN0fFX = BigInt("170")
		const newBoss4urYT62T = accounts[5]
		await contractXO36M0l.setRefBonus.call(level1rYN0fFX, level2E7NeEc, level3JArQ3kO, level4ZXBd1Ce, level5Cfej8jU, {from: accounts[2]});
		await contractXO36M0l.deposeBoss4.call(newBoss4urYT62T, {from: accounts[4]});

		await expect(contractXO36M0l.setRefBonus.call(level1rYN0fFX, level2E7NeEc, level3JArQ3kO, level4ZXBd1Ce, level5Cfej8jU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlg8YE18 = accounts[1]
		const FOSTERAddrAZ85tEi = "0x0000000000000000000000000000000000000001"
		const initialRatej3yM3O = BigInt("760")
		const initialPeriodX6UIGKS = BigInt("779")
		const initialOwnerZEbHMyX = accounts[5]
		const contractYS1CyHO = await Reseller.new(USDTAddrlg8YE18, FOSTERAddrAZ85tEi, initialRatej3yM3O, initialPeriodX6UIGKS, initialOwnerZEbHMyX, {from: accounts[5]});
		const commentEQgJgI3 = "9ENgFrMyNCjN7n1OJuscHQla2hQiXJnFkeMrVXLjxUuQzNBLuxG"
		const _ref5gg55mSP = "0x0000000000000000000000000000000000000001"
		const _ref4K897i2G = accounts[2]
		const _ref3OzhNhyv = accounts[3]
		const _ref2cYOgTTa = accounts[2]
		const _ref1N0OALI = accounts[3]
		const valueUHFZOl = BigInt("1126")
		const newBoss4hIEbTPV = accounts[3]
		await contractYS1CyHO.purchase.call(valueUHFZOl, _ref1N0OALI, _ref2cYOgTTa, _ref3OzhNhyv, _ref4K897i2G, _ref5gg55mSP, commentEQgJgI3, {from: "0x0000000000000000000000000000000000000001"});
		await contractYS1CyHO.deposeBoss4.call(newBoss4hIEbTPV, {from: accounts[4]});

		await expect(contractYS1CyHO.purchase.call(valueUHFZOl, _ref1N0OALI, _ref2cYOgTTa, _ref3OzhNhyv, _ref4K897i2G, _ref5gg55mSP, commentEQgJgI3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrLqBYErb = accounts[1]
		const FOSTERAddrNySW4YD = "0x0000000000000000000000000000000000000001"
		const initialRatevUgBQiw = BigInt("760")
		const initialPeriodQoGzLmO = BigInt("779")
		const initialOwnerlm13pVm = accounts[5]
		const contractouFSyTv = await Reseller.new(USDTAddrLqBYErb, FOSTERAddrNySW4YD, initialRatevUgBQiw, initialPeriodQoGzLmO, initialOwnerlm13pVm, {from: accounts[5]});
		const newPeriodKODH5Xm = BigInt("1558")
		const newBoss4blXqESi = accounts[5]
		await contractouFSyTv.setPeriod.call(newPeriodKODH5Xm, {from: accounts[5]});
		await contractouFSyTv.deposeBoss4.call(newBoss4blXqESi, {from: accounts[4]});

		await expect(contractouFSyTv.setPeriod.call(newPeriodKODH5Xm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkmL442M = accounts[1]
		const FOSTERAddryEQC9SC = "0x0000000000000000000000000000000000000001"
		const initialRateOFvWy6K = BigInt("760")
		const initialPeriodmsTb8e3 = BigInt("779")
		const initialOwnerXZ9ZxG4 = accounts[5]
		const contractDJiMYam = await Reseller.new(USDTAddrkmL442M, FOSTERAddryEQC9SC, initialRateOFvWy6K, initialPeriodmsTb8e3, initialOwnerXZ9ZxG4, {from: accounts[5]});
		const newBoss4iy97ep = accounts[5]
		const newFeecBhGug3 = BigInt("169")
		const newBoss4c44RsU0 = accounts[3]
		await contractDJiMYam.deposeBoss4.call(newBoss4iy97ep, {from: accounts[5]});
		await contractDJiMYam.setFee.call(newFeecBhGug3, {from: "0x0000000000000000000000000000000000000001"});
		await contractDJiMYam.deposeBoss4.call(newBoss4c44RsU0, {from: accounts[4]});

		await expect(contractDJiMYam.deposeBoss4.call(newBoss4iy97ep, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSXPmM8p = accounts[1]
		const FOSTERAddruWUAzTc = "0x0000000000000000000000000000000000000001"
		const initialRateCvbDGqJ = BigInt("760")
		const initialPeriodTAnVEbj = BigInt("779")
		const initialOwnerFLoyPv = accounts[5]
		const contractLXLxden = await Reseller.new(USDTAddrSXPmM8p, FOSTERAddruWUAzTc, initialRateCvbDGqJ, initialPeriodTAnVEbj, initialOwnerFLoyPv, {from: accounts[5]});
		const level5jrcWoDP = BigInt("120")
		const level4MXD4yeK = BigInt("199")
		const level3T9pp0ea = BigInt("137")
		const level2xQZNkBB = BigInt("100")
		const level1UWnRwVO = BigInt("26")
		const newBoss4YywYPl = accounts[4]
		await contractLXLxden.setRefBonus.call(level1UWnRwVO, level2xQZNkBB, level3T9pp0ea, level4MXD4yeK, level5jrcWoDP, {from: accounts[5]});
		await contractLXLxden.deposeBoss4.call(newBoss4YywYPl, {from: accounts[4]});

		await expect(contractLXLxden.setRefBonus.call(level1UWnRwVO, level2xQZNkBB, level3T9pp0ea, level4MXD4yeK, level5jrcWoDP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr6iyTcW = accounts[5]
		const FOSTERAddrYYKriU6 = accounts[1]
		const initialRateRnu9TZs = BigInt("1089")
		const initialPeriodZNfab5w = BigInt("1035")
		const initialOwnern25sfNS = accounts[5]
		const contractGVRO2JK = await Reseller.new(USDTAddr6iyTcW, FOSTERAddrYYKriU6, initialRateRnu9TZs, initialPeriodZNfab5w, initialOwnern25sfNS, {from: accounts[4]});
		const accountWH8pdpQ = accounts[0]
		const newRatergcnfM9 = BigInt("1797")
		const amountqLIwGUL = BigInt("590")
		const newRateEspy0o5 = BigInt("1535")
		const nullWOPSjSd = await contractGVRO2JK.balanceFOSTER.call(accountWH8pdpQ, {from: accounts[3]});
		await contractGVRO2JK.setRate.call(newRatergcnfM9, {from: accounts[5]});
		const nullzPhK6tI = await contractGVRO2JK.getEstimation.call(amountqLIwGUL, {from: accounts[4]});
		await contractGVRO2JK.setRate.call(newRateEspy0o5, {from: accounts[2]});

		await expect(contractGVRO2JK.balanceFOSTER.call(accountWH8pdpQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtdxpFqX = accounts[1]
		const FOSTERAddrn16b70 = "0x0000000000000000000000000000000000000001"
		const initialRatec5SHbOU = BigInt("760")
		const initialPeriodAJNGAqn = BigInt("779")
		const initialOwnerobsN8r = accounts[5]
		const contractiztbZwC = await Reseller.new(USDTAddrtdxpFqX, FOSTERAddrn16b70, initialRatec5SHbOU, initialPeriodAJNGAqn, initialOwnerobsN8r, {from: accounts[5]});
		const amountKt55e7t = BigInt("726")
		const newBoss1OiN3Nf = accounts[2]
		const newBoss4HH7Q7J1 = accounts[4]
		const nullQcBrNJC = await contractiztbZwC.getEstimation.call(amountKt55e7t, {from: accounts[2]});
		await contractiztbZwC.deposeBoss1.call(newBoss1OiN3Nf, {from: accounts[1]});
		await contractiztbZwC.deposeBoss4.call(newBoss4HH7Q7J1, {from: accounts[4]});

		assert.equal(nullQcBrNJC, 551760)
		await expect(contractiztbZwC.deposeBoss1.call(newBoss1OiN3Nf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPwnduFf = accounts[1]
		const FOSTERAddrzqLfQhD = accounts[3]
		const initialRateP2yTViw = BigInt("581")
		const initialPeriodyx8zaFj = BigInt("352")
		const initialOwnersuCoOEQ = accounts[2]
		const contractGQr6Upr = await Reseller.new(USDTAddrPwnduFf, FOSTERAddrzqLfQhD, initialRateP2yTViw, initialPeriodyx8zaFj, initialOwnersuCoOEQ, {from: "0x0000000000000000000000000000000000000001"});
		const _periodGLsHxO8 = BigInt("858")
		const amounth6qctND = BigInt("1516")
		const recipientaP1Zmmv = "0x0000000000000000000000000000000000000001"
		const newPeriodF3r6UDS = BigInt("343")
		const newFeewWhJf2j = BigInt("159")
		const newBoss1GH2tnEx = accounts[4]
		await contractGQr6Upr.freezeAndTransfer.call(recipientaP1Zmmv, amounth6qctND, _periodGLsHxO8, {from: accounts[0]});
		await contractGQr6Upr.setPeriod.call(newPeriodF3r6UDS, {from: accounts[1]});
		await contractGQr6Upr.setFee.call(newFeewWhJf2j, {from: "0x0000000000000000000000000000000000000001"});
		await contractGQr6Upr.deposeBoss1.call(newBoss1GH2tnEx, {from: accounts[0]});
	});

	it('test for Reseller', async () => {
		const USDTAddreqaTbhH = accounts[4]
		const FOSTERAddrm3VUXP = accounts[2]
		const initialRatee7FcCBp = BigInt("232")
		const initialPeriody1ujg11 = BigInt("1161")
		const initialOwnerLucGI4 = accounts[3]
		const contractb6BY11M = await Reseller.new(USDTAddreqaTbhH, FOSTERAddrm3VUXP, initialRatee7FcCBp, initialPeriody1ujg11, initialOwnerLucGI4, {from: accounts[2]});
		const level5w4uUcz8 = BigInt("229")
		const level4MuBvSIG = BigInt("243")
		const level3CxSt3f = BigInt("4")
		const level2cIbFhS = BigInt("234")
		const level13WASRw = BigInt("187")
		await contractb6BY11M.switchState.call({from: accounts[3]});
		await contractb6BY11M.setRefBonus.call(level13WASRw, level2cIbFhS, level3CxSt3f, level4MuBvSIG, level5w4uUcz8, {from: accounts[4]});

		await expect(contractb6BY11M.switchState.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrWzmrJh5 = accounts[1]
		const FOSTERAddrSyJmgg0 = "0x0000000000000000000000000000000000000001"
		const initialRateTUO4Ij6 = BigInt("760")
		const initialPeriodX5bUbOB = BigInt("779")
		const initialOwnerVKrAsIw = accounts[5]
		const contractqfTCNJA = await Reseller.new(USDTAddrWzmrJh5, FOSTERAddrSyJmgg0, initialRateTUO4Ij6, initialPeriodX5bUbOB, initialOwnerVKrAsIw, {from: accounts[5]});
		const commentz3X9PT = "OVvNesbPDgCKhp"
		const _ref5JLSzI4i = accounts[5]
		const _ref4cHePVk5 = accounts[2]
		const _ref3LIjvOmT = accounts[5]
		const _ref2LyAjj3j = accounts[4]
		const _ref1lMec1Dr = accounts[1]
		const valuektLkCRl = BigInt("443")
		const newBoss4wp1hKVc = accounts[3]
		await contractqfTCNJA.purchase.call(valuektLkCRl, _ref1lMec1Dr, _ref2LyAjj3j, _ref3LIjvOmT, _ref4cHePVk5, _ref5JLSzI4i, commentz3X9PT, {from: accounts[5]});
		await contractqfTCNJA.deposeBoss4.call(newBoss4wp1hKVc, {from: accounts[4]});

		await expect(contractqfTCNJA.purchase.call(valuektLkCRl, _ref1lMec1Dr, _ref2LyAjj3j, _ref3LIjvOmT, _ref4cHePVk5, _ref5JLSzI4i, commentz3X9PT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrN9Fzu26 = accounts[1]
		const FOSTERAddrNPGxBkr = "0x0000000000000000000000000000000000000001"
		const initialRatendDAov = BigInt("760")
		const initialPeriodIR54WhK = BigInt("779")
		const initialOwnertoFX6uz = accounts[5]
		const contractg68Qg5N = await Reseller.new(USDTAddrN9Fzu26, FOSTERAddrNPGxBkr, initialRatendDAov, initialPeriodIR54WhK, initialOwnertoFX6uz, {from: accounts[5]});
		const newMinimumJS4WPBq = BigInt("1938")
		const newBoss4sl9UWIo = accounts[6]
		await contractg68Qg5N.setMinimum.call(newMinimumJS4WPBq, {from: accounts[5]});
		await contractg68Qg5N.deposeBoss4.call(newBoss4sl9UWIo, {from: accounts[4]});

		await expect(contractg68Qg5N.setMinimum.call(newMinimumJS4WPBq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr0O60lT = accounts[1]
		const FOSTERAddrGi5ldL2 = accounts[3]
		const initialRateCOqjdKP = BigInt("1623")
		const initialPeriodSSH8O02 = BigInt("2044")
		const initialOwnerBDErDeg = accounts[4]
		const contracte7T6xii = await Reseller.new(USDTAddr0O60lT, FOSTERAddrGi5ldL2, initialRateCOqjdKP, initialPeriodSSH8O02, initialOwnerBDErDeg, {from: accounts[5]});
		const newFeeNQgIHus = BigInt("55")
		const _periodhGJseyJ = BigInt("1695")
		const amountQcBLDOc = BigInt("959")
		const recipientdXkl4Ys = accounts[3]
		const _ref5C7dZdh1 = accounts[1]
		const _ref4kjrfx8E = accounts[5]
		const _ref3vQyxLCp = accounts[1]
		const _ref2bUWtG3V = accounts[2]
		const _ref1WrNb1Az = accounts[2]
		const valueuxYkL9F = BigInt("108")
		const accountJPuRDj = accounts[2]
		await contracte7T6xii.setFee.call(newFeeNQgIHus, {from: accounts[4]});
		await contracte7T6xii.freezeAndTransfer.call(recipientdXkl4Ys, amountQcBLDOc, _periodhGJseyJ, {from: accounts[1]});
		await contracte7T6xii.buy.call(valueuxYkL9F, _ref1WrNb1Az, _ref2bUWtG3V, _ref3vQyxLCp, _ref4kjrfx8E, _ref5C7dZdh1, {from: accounts[3]});
		const nullAH9ggCD = await contracte7T6xii.balanceUSDT.call(accountJPuRDj, {from: accounts[0]});

		await expect(contracte7T6xii.setFee.call(newFeeNQgIHus, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcUcp9Hy = accounts[1]
		const FOSTERAddryQA1VPu = "0x0000000000000000000000000000000000000001"
		const initialRateAi1L0lW = BigInt("760")
		const initialPeriodOLe4pb9 = BigInt("779")
		const initialOwnerqLiVtGm = accounts[5]
		const contracttW1asi = await Reseller.new(USDTAddrcUcp9Hy, FOSTERAddryQA1VPu, initialRateAi1L0lW, initialPeriodOLe4pb9, initialOwnerqLiVtGm, {from: accounts[5]});
		const newBoss3s9klHP = accounts[4]
		const newBoss4z3y8Fxi = accounts[5]
		const newBoss4UA4U33z = accounts[1]
		const newBoss4FwYL8Ar = accounts[3]
		await contracttW1asi.deposeBoss3.call(newBoss3s9klHP, {from: accounts[5]});
		await contracttW1asi.deposeBoss4.call(newBoss4z3y8Fxi, {from: accounts[0]});
		await contracttW1asi.deposeBoss4.call(newBoss4UA4U33z, {from: accounts[2]});
		await contracttW1asi.deposeBoss4.call(newBoss4FwYL8Ar, {from: accounts[4]});

		await expect(contracttW1asi.deposeBoss3.call(newBoss3s9klHP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQ6kas7Y = accounts[1]
		const FOSTERAddrNi9zoLV = "0x0000000000000000000000000000000000000001"
		const initialRate6FeMjW = BigInt("760")
		const initialPeriodogEpiD = BigInt("779")
		const initialOwneroEAa81 = accounts[5]
		const contractxGSLNn = await Reseller.new(USDTAddrQ6kas7Y, FOSTERAddrNi9zoLV, initialRate6FeMjW, initialPeriodogEpiD, initialOwneroEAa81, {from: accounts[5]});
		const newRateSiQ7ktj = BigInt("266")
		const accountbdqN5Oo = accounts[4]
		const newBoss4RvkUzCy = accounts[6]
		await contractxGSLNn.setRate.call(newRateSiQ7ktj, {from: accounts[5]});
		const nullniMVgql = await contractxGSLNn.balanceUSDT.call(accountbdqN5Oo, {from: accounts[4]});
		await contractxGSLNn.deposeBoss4.call(newBoss4RvkUzCy, {from: accounts[4]});

		await expect(contractxGSLNn.setRate.call(newRateSiQ7ktj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})