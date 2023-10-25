const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrWrU8NyD = accounts[0]
		const FOSTERAddryoszc4A = accounts[0]
		const initialRateLghQzbD = BigInt("1038")
		const initialPeriodhnxgyh = BigInt("1837")
		const initialOwneraPPQy4n = accounts[2]
		const contractjeF6HsJ = await Reseller.new(USDTAddrWrU8NyD, FOSTERAddryoszc4A, initialRateLghQzbD, initialPeriodhnxgyh, initialOwneraPPQy4n, {from: accounts[0]});
		const newPeriody7tV80h = BigInt("138")
		const commentupNrQMR = "WStGeGgNHrEIDWqANdF61KVXNYQhMQyJkexoRje9YY1qrmF5pW5oJv89eaOG9oU7k986U96yPLMm9yKGIGWGzbCQH1sf"
		const _ref5tZ8N3p = accounts[5]
		const _ref4lZAvNLo = accounts[3]
		const _ref34ibtB6 = accounts[4]
		const _ref2qkAZ92v = accounts[0]
		const _ref1L1I0raU = accounts[1]
		const valuegnskWG8 = BigInt("711")
		const newBoss4PXt92Xg = accounts[4]
		await contractjeF6HsJ.setPeriod.call(newPeriody7tV80h, {from: accounts[0]});
		await contractjeF6HsJ.purchase.call(valuegnskWG8, _ref1L1I0raU, _ref2qkAZ92v, _ref34ibtB6, _ref4lZAvNLo, _ref5tZ8N3p, commentupNrQMR, {from: accounts[1]});
		await contractjeF6HsJ.deposeBoss4.call(newBoss4PXt92Xg, {from: accounts[0]});

		await expect(contractjeF6HsJ.setPeriod.call(newPeriody7tV80h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDZAck8 = accounts[4]
		const FOSTERAddrRtgai05 = "0x0000000000000000000000000000000000000001"
		const initialRateKEXcSlJ = BigInt("798")
		const initialPeriodfE5BaD7 = BigInt("588")
		const initialOwnerMd2CAPG = accounts[1]
		const contractIUTrovp = await Reseller.new(USDTAddrDZAck8, FOSTERAddrRtgai05, initialRateKEXcSlJ, initialPeriodfE5BaD7, initialOwnerMd2CAPG, {from: accounts[4]});
		const newBoss3MQN6Y5K = accounts[2]
		const valueIZ3FRX4 = BigInt("330")
		const recipients9rren = accounts[4]
		const ERC20Token5LGHtU = accounts[3]
		const accountdkLhakZ = accounts[4]
		await contractIUTrovp.deposeBoss3.call(newBoss3MQN6Y5K, {from: accounts[1]});
		await contractIUTrovp.withdrawERC20.call(ERC20Token5LGHtU, recipients9rren, valueIZ3FRX4, {from: accounts[1]});
		const nullBqzJDl = await contractIUTrovp.allowanceFOSTER.call(accountdkLhakZ, {from: accounts[0]});

		await expect(contractIUTrovp.deposeBoss3.call(newBoss3MQN6Y5K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrin5tII = accounts[0]
		const FOSTERAddrP0GsWCQ = accounts[3]
		const initialRateXdJuM3L = BigInt("583")
		const initialPeriodOlQSeoG = BigInt("1368")
		const initialOwnerWbbY2x = accounts[3]
		const contractNtwOotO = await Reseller.new(USDTAddrin5tII, FOSTERAddrP0GsWCQ, initialRateXdJuM3L, initialPeriodOlQSeoG, initialOwnerWbbY2x, {from: accounts[0]});
		const commentmynpfrR = "CeubTUSylhaJy27iOoHscEkXX2LQtlkI9wViSwa2d1Y9GwXETzy"
		const _ref5KcIjKx1 = accounts[3]
		const _ref4KakTIMG = accounts[2]
		const _ref3etog4b5 = accounts[2]
		const _ref2EpKwzgg = accounts[3]
		const _ref1nl2WMLk = accounts[3]
		const valueEuaRNe = BigInt("534")
		const newBoss1LWVDkJv = accounts[0]
		const accountFnMsF5p = accounts[2]
		const newRateMtrLRJ = BigInt("1098")
		await contractNtwOotO.purchase.call(valueEuaRNe, _ref1nl2WMLk, _ref2EpKwzgg, _ref3etog4b5, _ref4KakTIMG, _ref5KcIjKx1, commentmynpfrR, {from: accounts[0]});
		await contractNtwOotO.deposeBoss1.call(newBoss1LWVDkJv, {from: accounts[0]});
		const nullXYV7uJJ = await contractNtwOotO.allowanceUSDT.call(accountFnMsF5p, {from: accounts[3]});
		await contractNtwOotO.setRate.call(newRateMtrLRJ, {from: accounts[2]});

		await expect(contractNtwOotO.purchase.call(valueEuaRNe, _ref1nl2WMLk, _ref2EpKwzgg, _ref3etog4b5, _ref4KakTIMG, _ref5KcIjKx1, commentmynpfrR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjKVB9U = accounts[0]
		const FOSTERAddrYt485lo = accounts[4]
		const initialRate7jaisa = BigInt("259")
		const initialPeriodzMPITui = BigInt("1111")
		const initialOwnerAX5NPf = accounts[3]
		const contracteaic8Jk = await Reseller.new(USDTAddrjKVB9U, FOSTERAddrYt485lo, initialRate7jaisa, initialPeriodzMPITui, initialOwnerAX5NPf, {from: accounts[2]});
		const newRateW4J76fd = BigInt("267")
		const accountNrpZhDX = accounts[1]
		const accountCDc2fJQ = accounts[4]
		await contracteaic8Jk.setRate.call(newRateW4J76fd, {from: accounts[2]});
		const nullE2bmb0Q = await contracteaic8Jk.allowanceFOSTER.call(accountNrpZhDX, {from: accounts[4]});
		const nullRzTHJG7 = await contracteaic8Jk.allowanceUSDT.call(accountCDc2fJQ, {from: accounts[2]});

		await expect(contracteaic8Jk.setRate.call(newRateW4J76fd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddriyaDyNJ = accounts[4]
		const FOSTERAddrZBpZ7aE = accounts[2]
		const initialRateo0jVzGF = BigInt("1581")
		const initialPeriodRo9fhtP = BigInt("1647")
		const initialOwnera6POS4J = accounts[1]
		const contractsdxfyQ = await Reseller.new(USDTAddriyaDyNJ, FOSTERAddrZBpZ7aE, initialRateo0jVzGF, initialPeriodRo9fhtP, initialOwnera6POS4J, {from: accounts[1]});
		const newMinimumARURfao = BigInt("930")
		const accountw2ZC17C = accounts[4]
		const accountPrROTPv = accounts[2]
		await contractsdxfyQ.setMinimum.call(newMinimumARURfao, {from: accounts[3]});
		const nullYVCrGpx = await contractsdxfyQ.allowanceUSDT.call(accountw2ZC17C, {from: accounts[2]});
		const nulludXRZDa = await contractsdxfyQ.allowanceUSDT.call(accountPrROTPv, {from: accounts[2]});

		await expect(contractsdxfyQ.setMinimum.call(newMinimumARURfao, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEvq0yBE = accounts[4]
		const FOSTERAddrJKKAYIR = accounts[0]
		const initialRateI9FzZ7l = BigInt("1444")
		const initialPeriodE4Jr6Si = BigInt("446")
		const initialOwnerCngEjbv = accounts[2]
		const contractYu6dBrE = await Reseller.new(USDTAddrEvq0yBE, FOSTERAddrJKKAYIR, initialRateI9FzZ7l, initialPeriodE4Jr6Si, initialOwnerCngEjbv, {from: accounts[3]});
		const newBoss4YE98IQW = "0x0000000000000000000000000000000000000001"
		const newRatecrMrs25 = BigInt("115")
		const newBoss2faSdI4I = accounts[4]
		const newBoss2DCV0GL6 = accounts[0]
		await contractYu6dBrE.deposeBoss4.call(newBoss4YE98IQW, {from: accounts[3]});
		await contractYu6dBrE.setRate.call(newRatecrMrs25, {from: accounts[5]});
		await contractYu6dBrE.deposeBoss2.call(newBoss2faSdI4I, {from: accounts[5]});
		await contractYu6dBrE.deposeBoss2.call(newBoss2DCV0GL6, {from: accounts[2]});

		await expect(contractYu6dBrE.deposeBoss4.call(newBoss4YE98IQW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMWTtdJ7 = accounts[1]
		const FOSTERAddrC76Dm1D = accounts[1]
		const initialRatetATyec7 = BigInt("238")
		const initialPeriodlBXFXWV = BigInt("1833")
		const initialOwnerQlTMfaz = "0x0000000000000000000000000000000000000001"
		const contractph4mpDH = await Reseller.new(USDTAddrMWTtdJ7, FOSTERAddrC76Dm1D, initialRatetATyec7, initialPeriodlBXFXWV, initialOwnerQlTMfaz, {from: accounts[3]});
		const level5sMTjAEU = BigInt("150")
		const level4tuad9bM = BigInt("226")
		const level3HSLqTob = BigInt("248")
		const level2QuaDe2 = BigInt("68")
		const level1TGMpjpD = BigInt("78")
		const accountohNCBD9 = accounts[1]
		const newPeriodq625e0V = BigInt("1055")
		const amountJHiUz8K = BigInt("1390")
		await contractph4mpDH.setRefBonus.call(level1TGMpjpD, level2QuaDe2, level3HSLqTob, level4tuad9bM, level5sMTjAEU, {from: accounts[0]});
		const nulliECjFLv = await contractph4mpDH.balanceFOSTER.call(accountohNCBD9, {from: accounts[4]});
		await contractph4mpDH.setPeriod.call(newPeriodq625e0V, {from: accounts[2]});
		const nullobJz9JX = await contractph4mpDH.getEstimation.call(amountJHiUz8K, {from: accounts[1]});
		await contractph4mpDH.switchState.call({from: accounts[1]});

		await expect(contractph4mpDH.setRefBonus.call(level1TGMpjpD, level2QuaDe2, level3HSLqTob, level4tuad9bM, level5sMTjAEU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrWiYyoHE = accounts[4]
		const FOSTERAddrdjL3xG = accounts[4]
		const initialRateCYExMl = BigInt("1943")
		const initialPeriodd21UaQu = BigInt("148")
		const initialOwnerpvgJeo = accounts[2]
		const contractM97LyNn = await Reseller.new(USDTAddrWiYyoHE, FOSTERAddrdjL3xG, initialRateCYExMl, initialPeriodd21UaQu, initialOwnerpvgJeo, {from: accounts[1]});
		const _periodfUkfulT = BigInt("715")
		const amountnPhtmjQ = BigInt("767")
		const recipientNKDSJ8L = accounts[0]
		const newBoss3VPgfIR = accounts[0]
		await contractM97LyNn.freezeAndTransfer.call(recipientNKDSJ8L, amountnPhtmjQ, _periodfUkfulT, {from: accounts[4]});
		await contractM97LyNn.deposeBoss3.call(newBoss3VPgfIR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractM97LyNn.freezeAndTransfer.call(recipientNKDSJ8L, amountnPhtmjQ, _periodfUkfulT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdlCASP1 = accounts[5]
		const FOSTERAddrISceoJ = accounts[1]
		const initialRateQsRQyBi = BigInt("1810")
		const initialPeriodHqMD8RI = BigInt("536")
		const initialOwneraiQSA6 = "0x0000000000000000000000000000000000000001"
		const contractPqpOYLj = await Reseller.new(USDTAddrdlCASP1, FOSTERAddrISceoJ, initialRateQsRQyBi, initialPeriodHqMD8RI, initialOwneraiQSA6, {from: "0x0000000000000000000000000000000000000001"});
		const _periodY0Nva4q = BigInt("764")
		const amountX8tZrjC = BigInt("1355")
		const recipientAvV0j0E = accounts[4]
		const newBoss2r4yp2uT = accounts[4]
		const newBoss2a0LCssM = accounts[1]
		await contractPqpOYLj.freezeAndTransfer.call(recipientAvV0j0E, amountX8tZrjC, _periodY0Nva4q, {from: accounts[0]});
		await contractPqpOYLj.deposeBoss2.call(newBoss2r4yp2uT, {from: accounts[1]});
		await contractPqpOYLj.deposeBoss2.call(newBoss2a0LCssM, {from: accounts[3]});
	});

	it('test for Reseller', async () => {
		const USDTAddrx8nlnGv = accounts[5]
		const FOSTERAddrgjsnOf5 = accounts[1]
		const initialRateUYvrjRG = BigInt("1803")
		const initialPeriodMvTR4bo = BigInt("971")
		const initialOwnerR2pwTbI = accounts[0]
		const contractA4JALYk = await Reseller.new(USDTAddrx8nlnGv, FOSTERAddrgjsnOf5, initialRateUYvrjRG, initialPeriodMvTR4bo, initialOwnerR2pwTbI, {from: accounts[3]});
		const accountOAbpOal = accounts[1]
		const newBoss4UAXBs2v = accounts[4]
		const nullezo6G0v = await contractA4JALYk.balanceUSDT.call(accountOAbpOal, {from: accounts[2]});
		await contractA4JALYk.deposeBoss4.call(newBoss4UAXBs2v, {from: accounts[4]});

		await expect(contractA4JALYk.balanceUSDT.call(accountOAbpOal, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVY8nbGu = accounts[4]
		const FOSTERAddrTfinpP6 = "0x0000000000000000000000000000000000000001"
		const initialRateLA8EbRq = BigInt("798")
		const initialPeriodgEACPJ5 = BigInt("588")
		const initialOwnerrVhRAnl = accounts[1]
		const contractLXaggl4 = await Reseller.new(USDTAddrVY8nbGu, FOSTERAddrTfinpP6, initialRateLA8EbRq, initialPeriodgEACPJ5, initialOwnerrVhRAnl, {from: accounts[4]});
		const accountBovX4p = accounts[0]
		const newPeriodXmMhwae = BigInt("825")
		const valuehrh1o63 = BigInt("330")
		const recipientnx4Yvjb = accounts[1]
		const ERC20TokenPwMLbeP = accounts[3]
		const nullgaSVj5r = await contractLXaggl4.allowanceUSDT.call(accountBovX4p, {from: accounts[2]});
		await contractLXaggl4.setPeriod.call(newPeriodXmMhwae, {from: accounts[3]});
		await contractLXaggl4.withdrawERC20.call(ERC20TokenPwMLbeP, recipientnx4Yvjb, valuehrh1o63, {from: accounts[1]});

		await expect(contractLXaggl4.allowanceUSDT.call(accountBovX4p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdupS7RG = accounts[4]
		const FOSTERAddrHz7octG = accounts[4]
		const initialRateaot7uER = BigInt("1943")
		const initialPeriodgdSaBYM = BigInt("148")
		const initialOwnertgzkoMP = accounts[2]
		const contractufUrbWP = await Reseller.new(USDTAddrdupS7RG, FOSTERAddrHz7octG, initialRateaot7uER, initialPeriodgdSaBYM, initialOwnertgzkoMP, {from: accounts[1]});
		const accountabc8oA = accounts[5]
		const commentAePTER6 = "jKS2N40bgmUDulQ3VxQaPfUiZ0DqWX8lmuwZjgskepDSkm"
		const _ref5oaYQjLJ = accounts[3]
		const _ref4h7DStmN = "0x0000000000000000000000000000000000000001"
		const _ref3z60sad = accounts[3]
		const _ref2jDFgNeb = accounts[2]
		const _ref1vWKPi02 = accounts[5]
		const valueBqFjGA6 = BigInt("1296")
		const newBoss3o1NQ5CR = accounts[0]
		const nullvS5pkHy = await contractufUrbWP.balanceFOSTER.call(accountabc8oA, {from: accounts[5]});
		await contractufUrbWP.purchase.call(valueBqFjGA6, _ref1vWKPi02, _ref2jDFgNeb, _ref3z60sad, _ref4h7DStmN, _ref5oaYQjLJ, commentAePTER6, {from: accounts[0]});
		await contractufUrbWP.deposeBoss3.call(newBoss3o1NQ5CR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractufUrbWP.balanceFOSTER.call(accountabc8oA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRcveRBK = accounts[4]
		const FOSTERAddrHED5vRK = accounts[4]
		const initialRateCl8shjN = BigInt("1943")
		const initialPeriodpZQBnUt = BigInt("148")
		const initialOwnerJFEgFYE = accounts[2]
		const contractrVDJfY = await Reseller.new(USDTAddrRcveRBK, FOSTERAddrHED5vRK, initialRateCl8shjN, initialPeriodpZQBnUt, initialOwnerJFEgFYE, {from: accounts[1]});
		const newBoss4r1reXW = accounts[3]
		const newBoss2WhGtQAV = accounts[2]
		const newRateRjkE81 = BigInt("252")
		const newBoss3uUHZrNu = accounts[1]
		await contractrVDJfY.deposeBoss4.call(newBoss4r1reXW, {from: accounts[2]});
		await contractrVDJfY.deposeBoss2.call(newBoss2WhGtQAV, {from: accounts[4]});
		await contractrVDJfY.setRate.call(newRateRjkE81, {from: accounts[0]});
		await contractrVDJfY.deposeBoss3.call(newBoss3uUHZrNu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractrVDJfY.deposeBoss4.call(newBoss4r1reXW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrblBtZtr = accounts[0]
		const FOSTERAddrgqIdA01 = accounts[3]
		const initialRateQFGUoCE = BigInt("216")
		const initialPeriodW3csSsv = BigInt("543")
		const initialOwnerXL0CDHC = accounts[4]
		const contractQ41puVR = await Reseller.new(USDTAddrblBtZtr, FOSTERAddrgqIdA01, initialRateQFGUoCE, initialPeriodW3csSsv, initialOwnerXL0CDHC, {from: accounts[2]});
		const amountyDBCfZ = BigInt("1928")
		const commentcn3rszs = "0FguihTETYEF5T6zTd7O"
		const _ref5btUPGCM = accounts[0]
		const _ref4Jr3vuE5 = "0x0000000000000000000000000000000000000001"
		const _ref3vdzROXX = accounts[3]
		const _ref2zQAanXn = accounts[1]
		const _ref1H2cDvoe = accounts[2]
		const valueyh9O3XI = BigInt("1724")
		const newFeejdS8ohT = BigInt("144")
		const newBoss3B0W3n2z = accounts[3]
		const nullg5KMUl0 = await contractQ41puVR.getEstimation.call(amountyDBCfZ, {from: accounts[1]});
		await contractQ41puVR.purchase.call(valueyh9O3XI, _ref1H2cDvoe, _ref2zQAanXn, _ref3vdzROXX, _ref4Jr3vuE5, _ref5btUPGCM, commentcn3rszs, {from: accounts[3]});
		await contractQ41puVR.switchState.call({from: accounts[2]});
		await contractQ41puVR.setFee.call(newFeejdS8ohT, {from: accounts[3]});
		await contractQ41puVR.deposeBoss3.call(newBoss3B0W3n2z, {from: accounts[2]});

		assert.equal(nullg5KMUl0, 416448)
		await expect(contractQ41puVR.purchase.call(valueyh9O3XI, _ref1H2cDvoe, _ref2zQAanXn, _ref3vdzROXX, _ref4Jr3vuE5, _ref5btUPGCM, commentcn3rszs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHrCMTrT = accounts[4]
		const FOSTERAddrQb8o2OH = "0x0000000000000000000000000000000000000001"
		const initialRateyapbaEx = BigInt("798")
		const initialPeriodKZR9jaf = BigInt("588")
		const initialOwnerZ0wPWG = accounts[1]
		const contractVVhHZZI = await Reseller.new(USDTAddrHrCMTrT, FOSTERAddrQb8o2OH, initialRateyapbaEx, initialPeriodKZR9jaf, initialOwnerZ0wPWG, {from: accounts[4]});
		const _ref5zQpsLAm = accounts[3]
		const _ref4xHG2Fy0 = accounts[1]
		const _ref3ElGgFqQ = accounts[4]
		const _ref2J0IwKv = accounts[2]
		const _ref1ZS4wSzH = accounts[1]
		const valueDVlb2va = BigInt("838")
		const accountZ4GtfXW = accounts[0]
		const newBoss3R5ufbEJ = accounts[2]
		const commentb8n0zzQ = "kWSCqftg1fGiaj7XmYal0KjCmDw1KDJM8sZJlmcYvL"
		const _ref5iqV8xMi = accounts[0]
		const _ref4IHRp1L = accounts[3]
		const _ref3HNsJTd5 = accounts[5]
		const _ref2JNtaDUC = accounts[0]
		const _ref1BAJ1XZK = accounts[1]
		const valued6ziIl7 = BigInt("1724")
		const valueN9rAg1n = BigInt("340")
		const recipientsCQULlc = accounts[4]
		const ERC20TokenuEXCEks = accounts[3]
		const accountIp6gg9B = accounts[4]
		await contractVVhHZZI.buy.call(valueDVlb2va, _ref1ZS4wSzH, _ref2J0IwKv, _ref3ElGgFqQ, _ref4xHG2Fy0, _ref5zQpsLAm, {from: accounts[5]});
		const nullpzwKer1 = await contractVVhHZZI.balanceFOSTER.call(accountZ4GtfXW, {from: accounts[4]});
		await contractVVhHZZI.deposeBoss3.call(newBoss3R5ufbEJ, {from: accounts[1]});
		await contractVVhHZZI.purchase.call(valued6ziIl7, _ref1BAJ1XZK, _ref2JNtaDUC, _ref3HNsJTd5, _ref4IHRp1L, _ref5iqV8xMi, commentb8n0zzQ, {from: accounts[3]});
		await contractVVhHZZI.withdrawERC20.call(ERC20TokenuEXCEks, recipientsCQULlc, valueN9rAg1n, {from: accounts[1]});
		const nulleAVrwl1 = await contractVVhHZZI.allowanceFOSTER.call(accountIp6gg9B, {from: accounts[0]});

		await expect(contractVVhHZZI.buy.call(valueDVlb2va, _ref1ZS4wSzH, _ref2J0IwKv, _ref3ElGgFqQ, _ref4xHG2Fy0, _ref5zQpsLAm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlZy6dF5 = accounts[0]
		const FOSTERAddrX4ihYVs = accounts[5]
		const initialRateA0631uB = BigInt("1155")
		const initialPeriodKHei9xH = BigInt("217")
		const initialOwneratXgWL5 = accounts[3]
		const contractn55rg7 = await Reseller.new(USDTAddrlZy6dF5, FOSTERAddrX4ihYVs, initialRateA0631uB, initialPeriodKHei9xH, initialOwneratXgWL5, {from: accounts[0]});
		const accountOcQm7g = accounts[0]
		const newBoss4bWmL36 = accounts[1]
		const nullLvdMCyE = await contractn55rg7.allowanceFOSTER.call(accountOcQm7g, {from: accounts[2]});
		await contractn55rg7.switchState.call({from: accounts[2]});
		await contractn55rg7.deposeBoss4.call(newBoss4bWmL36, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractn55rg7.allowanceFOSTER.call(accountOcQm7g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrij1Dl4w = accounts[4]
		const FOSTERAddrRqo7G6D = "0x0000000000000000000000000000000000000001"
		const initialRatee2Z6GfL = BigInt("798")
		const initialPeriodDtvMTN = BigInt("588")
		const initialOwnerWZnmCGE = accounts[1]
		const contractbes8yzV = await Reseller.new(USDTAddrij1Dl4w, FOSTERAddrRqo7G6D, initialRatee2Z6GfL, initialPeriodDtvMTN, initialOwnerWZnmCGE, {from: accounts[4]});
		const valueuwN4ANr = BigInt("330")
		const recipientrfzG1B = accounts[5]
		const ERC20Token75uOQ0 = accounts[3]
		await contractbes8yzV.switchState.call({from: accounts[1]});
		await contractbes8yzV.switchState.call({from: accounts[2]});
		await contractbes8yzV.withdrawERC20.call(ERC20Token75uOQ0, recipientrfzG1B, valueuwN4ANr, {from: accounts[1]});

		await expect(contractbes8yzV.switchState.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrT2fVXc2 = accounts[4]
		const FOSTERAddrg96vJus = accounts[4]
		const initialRatekHw6zvr = BigInt("1943")
		const initialPeriodJbE1mis = BigInt("148")
		const initialOwnerB6UWZ1I = accounts[2]
		const contractpbKqvUm = await Reseller.new(USDTAddrT2fVXc2, FOSTERAddrg96vJus, initialRatekHw6zvr, initialPeriodJbE1mis, initialOwnerB6UWZ1I, {from: accounts[1]});
		const newFeeyGuji4n = BigInt("140")
		const accountXQTijCN = accounts[2]
		const newBoss3fNRamiV = accounts[1]
		await contractpbKqvUm.setFee.call(newFeeyGuji4n, {from: accounts[3]});
		const nullzRlI2sI = await contractpbKqvUm.balanceFOSTER.call(accountXQTijCN, {from: accounts[3]});
		await contractpbKqvUm.deposeBoss3.call(newBoss3fNRamiV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractpbKqvUm.setFee.call(newFeeyGuji4n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrplyvpvi = accounts[4]
		const FOSTERAddrLeto3PO = "0x0000000000000000000000000000000000000001"
		const initialRatexbMzCCY = BigInt("798")
		const initialPeriodDrPq1x = BigInt("588")
		const initialOwnerbQXrkfG = accounts[1]
		const contractPJrZRUR = await Reseller.new(USDTAddrplyvpvi, FOSTERAddrLeto3PO, initialRatexbMzCCY, initialPeriodDrPq1x, initialOwnerbQXrkfG, {from: accounts[4]});
		const newBoss1TuI6pDl = accounts[3]
		const valueVNRqysv = BigInt("330")
		const recipientUFm71A1 = accounts[4]
		const ERC20TokenyHuLqaS = accounts[3]
		const accountzdXVHCH = accounts[5]
		await contractPJrZRUR.deposeBoss1.call(newBoss1TuI6pDl, {from: accounts[4]});
		await contractPJrZRUR.withdrawERC20.call(ERC20TokenyHuLqaS, recipientUFm71A1, valueVNRqysv, {from: accounts[1]});
		const nullugCyiBx = await contractPJrZRUR.allowanceFOSTER.call(accountzdXVHCH, {from: accounts[0]});

		await expect(contractPJrZRUR.deposeBoss1.call(newBoss1TuI6pDl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddry3igAq = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrLMjoRHO = accounts[3]
		const initialRateptRu4ju = BigInt("59")
		const initialPeriodAqmYHP = BigInt("1732")
		const initialOwnernsJj8GH = "0x0000000000000000000000000000000000000001"
		const contractA6Rf18x = await Reseller.new(USDTAddry3igAq, FOSTERAddrLMjoRHO, initialRateptRu4ju, initialPeriodAqmYHP, initialOwnernsJj8GH, {from: accounts[0]});
		const valueACoLem = BigInt("1837")
		const newBoss1j7viJ11 = "0x0000000000000000000000000000000000000001"
		await contractA6Rf18x.withdraw.call(valueACoLem, {from: "0x0000000000000000000000000000000000000001"});
		await contractA6Rf18x.deposeBoss1.call(newBoss1j7viJ11, {from: accounts[3]});

		await expect(contractA6Rf18x.withdraw.call(valueACoLem, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrEf0KHc = accounts[4]
		const FOSTERAddrYdDUjj1 = "0x0000000000000000000000000000000000000001"
		const initialRatezcekIG0 = BigInt("798")
		const initialPerioduFgxRo2 = BigInt("588")
		const initialOwnerBzRY4vu = accounts[1]
		const contracthZTFhR = await Reseller.new(USDTAddrrEf0KHc, FOSTERAddrYdDUjj1, initialRatezcekIG0, initialPerioduFgxRo2, initialOwnerBzRY4vu, {from: accounts[4]});
		const _ref5BL3l8nR = accounts[2]
		const _ref4gBEaKh7 = "0x00000000000000000000000000000000000000-1"
		const _ref38LV5TE = accounts[2]
		const _ref2RIOXvTa = accounts[2]
		const _ref1BhutFZ9 = accounts[1]
		const valueeZbdkHL = BigInt("76")
		await contracthZTFhR.buy.call(valueeZbdkHL, _ref1BhutFZ9, _ref2RIOXvTa, _ref38LV5TE, _ref4gBEaKh7, _ref5BL3l8nR, {from: accounts[2]});

		await expect(contracthZTFhR.buy.call(valueeZbdkHL, _ref1BhutFZ9, _ref2RIOXvTa, _ref38LV5TE, _ref4gBEaKh7, _ref5BL3l8nR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})