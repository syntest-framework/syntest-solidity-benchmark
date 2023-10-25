const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrVThcdx1 = accounts[0]
		const FOSTERAddrls6O3yd = accounts[1]
		const initialRateKa9dlA7 = BigInt("173")
		const initialPeriodArDk145 = BigInt("1566")
		const initialOwners3jY4XR = accounts[5]
		const contractZ6kU7ii = await Reseller.new(USDTAddrVThcdx1, FOSTERAddrls6O3yd, initialRateKa9dlA7, initialPeriodArDk145, initialOwners3jY4XR, {from: accounts[4]});
		const newBoss1qbZuGCF = accounts[5]
		const newBoss3VcMLl4 = accounts[1]
		await contractZ6kU7ii.deposeBoss1.call(newBoss1qbZuGCF, {from: accounts[2]});
		await contractZ6kU7ii.deposeBoss3.call(newBoss3VcMLl4, {from: accounts[1]});

		await expect(contractZ6kU7ii.deposeBoss1.call(newBoss1qbZuGCF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddroCer0gI = accounts[2]
		const FOSTERAddrcD4ZXSB = accounts[4]
		const initialRatexsETXxf = BigInt("1884")
		const initialPerioddiNRyLa = BigInt("1818")
		const initialOwnerkXgRtZc = accounts[2]
		const contractq0CNK0n = await Reseller.new(USDTAddroCer0gI, FOSTERAddrcD4ZXSB, initialRatexsETXxf, initialPerioddiNRyLa, initialOwnerkXgRtZc, {from: accounts[0]});
		const _periodTBmHt3O = BigInt("1678")
		const amountZPv4JNO = BigInt("663")
		const recipientL2qsFcv = accounts[3]
		const level5Crs4Z9P = BigInt("113")
		const level4ugdcBqO = BigInt("182")
		const level3jDqPAM0 = BigInt("223")
		const level2eFOcngy = BigInt("241")
		const level1taPF5JW = BigInt("65")
		const newRate1OMjyu = BigInt("661")
		await contractq0CNK0n.freezeAndTransfer.call(recipientL2qsFcv, amountZPv4JNO, _periodTBmHt3O, {from: accounts[2]});
		await contractq0CNK0n.setRefBonus.call(level1taPF5JW, level2eFOcngy, level3jDqPAM0, level4ugdcBqO, level5Crs4Z9P, {from: accounts[0]});
		await contractq0CNK0n.setRate.call(newRate1OMjyu, {from: accounts[0]});

		await expect(contractq0CNK0n.freezeAndTransfer.call(recipientL2qsFcv, amountZPv4JNO, _periodTBmHt3O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHuKqfaT = accounts[5]
		const FOSTERAddrT91z8s = accounts[4]
		const initialRateYVawcj = BigInt("494")
		const initialPeriodzZC4nC = BigInt("1506")
		const initialOwnereqT3TN8 = accounts[4]
		const contractYwlTQO5 = await Reseller.new(USDTAddrHuKqfaT, FOSTERAddrT91z8s, initialRateYVawcj, initialPeriodzZC4nC, initialOwnereqT3TN8, {from: accounts[4]});
		const valueTyJvoq3 = BigInt("615")
		const recipientNWREAGe = accounts[4]
		const ERC20TokenOvIYEXz = accounts[0]
		const newPeriodNdSOGpk = BigInt("190")
		const accountm4t0QA4 = accounts[0]
		await contractYwlTQO5.withdrawERC20.call(ERC20TokenOvIYEXz, recipientNWREAGe, valueTyJvoq3, {from: "0x0000000000000000000000000000000000000001"});
		await contractYwlTQO5.switchState.call({from: accounts[2]});
		await contractYwlTQO5.setPeriod.call(newPeriodNdSOGpk, {from: accounts[4]});
		const nullgl94jY = await contractYwlTQO5.allowanceUSDT.call(accountm4t0QA4, {from: accounts[2]});

		await expect(contractYwlTQO5.withdrawERC20.call(ERC20TokenOvIYEXz, recipientNWREAGe, valueTyJvoq3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrszR0raQ = accounts[2]
		const FOSTERAddrmvcFc7P = accounts[1]
		const initialRatei5erG9W = BigInt("583")
		const initialPeriodywpnxhn = BigInt("27")
		const initialOwnerZEfZiRJ = accounts[0]
		const contractQZP1DuW = await Reseller.new(USDTAddrszR0raQ, FOSTERAddrmvcFc7P, initialRatei5erG9W, initialPeriodywpnxhn, initialOwnerZEfZiRJ, {from: accounts[2]});
		const _ref5xMyy0mX = accounts[0]
		const _ref4vxsnLMo = accounts[2]
		const _ref3SnpPYxW = accounts[1]
		const _ref2uGSFLgx = accounts[0]
		const _ref1jkuAYxO = accounts[4]
		const value6Dm6L5 = BigInt("875")
		const newBoss2L71GG7 = accounts[3]
		const accountf9XYT3T = accounts[3]
		const accountcriM0uj = accounts[0]
		await contractQZP1DuW.buy.call(value6Dm6L5, _ref1jkuAYxO, _ref2uGSFLgx, _ref3SnpPYxW, _ref4vxsnLMo, _ref5xMyy0mX, {from: accounts[2]});
		await contractQZP1DuW.deposeBoss2.call(newBoss2L71GG7, {from: accounts[0]});
		const nullONAhL0z = await contractQZP1DuW.balanceUSDT.call(accountf9XYT3T, {from: accounts[0]});
		const nullaQku9cV = await contractQZP1DuW.balanceFOSTER.call(accountcriM0uj, {from: accounts[1]});

		await expect(contractQZP1DuW.buy.call(value6Dm6L5, _ref1jkuAYxO, _ref2uGSFLgx, _ref3SnpPYxW, _ref4vxsnLMo, _ref5xMyy0mX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzhfhs1C = accounts[3]
		const FOSTERAddrix1K45L = accounts[0]
		const initialRaterRW2tMh = BigInt("1189")
		const initialPeriodW4D5sgd = BigInt("1374")
		const initialOwnernXOoUUb = accounts[1]
		const contractqZDRgnj = await Reseller.new(USDTAddrzhfhs1C, FOSTERAddrix1K45L, initialRaterRW2tMh, initialPeriodW4D5sgd, initialOwnernXOoUUb, {from: accounts[2]});
		const amountvrx9bKr = BigInt("1018")
		const newBoss3C04mIa6 = accounts[3]
		const newPeriodW6YuSJb = BigInt("692")
		const nullHmvG7Ds = await contractqZDRgnj.getEstimation.call(amountvrx9bKr, {from: accounts[0]});
		await contractqZDRgnj.deposeBoss3.call(newBoss3C04mIa6, {from: accounts[1]});
		await contractqZDRgnj.setPeriod.call(newPeriodW6YuSJb, {from: accounts[0]});

		assert.equal(nullHmvG7Ds, 1210402)
		await expect(contractqZDRgnj.deposeBoss3.call(newBoss3C04mIa6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPzR3fMF = accounts[2]
		const FOSTERAddrJRug1p = accounts[4]
		const initialRateS4IjaZZ = BigInt("849")
		const initialPeriodMnsgNeu = BigInt("1043")
		const initialOwnerymCsHp = accounts[3]
		const contractNRdh0vJ = await Reseller.new(USDTAddrPzR3fMF, FOSTERAddrJRug1p, initialRateS4IjaZZ, initialPeriodMnsgNeu, initialOwnerymCsHp, {from: accounts[3]});
		const valuectqEij = BigInt("661")
		const newRateGJr1Suk = BigInt("529")
		const newFeehB3U3Y1 = BigInt("228")
		await contractNRdh0vJ.withdraw.call(valuectqEij, {from: accounts[5]});
		await contractNRdh0vJ.setRate.call(newRateGJr1Suk, {from: accounts[2]});
		await contractNRdh0vJ.setFee.call(newFeehB3U3Y1, {from: accounts[5]});

		await expect(contractNRdh0vJ.withdraw.call(valuectqEij, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCIfUqrc = accounts[2]
		const FOSTERAddrgjYSQ6 = accounts[1]
		const initialRatex641o5o = BigInt("633")
		const initialPeriodwdVeIhQ = BigInt("711")
		const initialOwnerBnCaVn0 = accounts[4]
		const contractO0caF6W = await Reseller.new(USDTAddrCIfUqrc, FOSTERAddrgjYSQ6, initialRatex641o5o, initialPeriodwdVeIhQ, initialOwnerBnCaVn0, {from: accounts[3]});
		const accountHa2irER = accounts[1]
		const valueldd9AKt = BigInt("359")
		const account1y7SPo = "0x0000000000000000000000000000000000000001"
		const nullNo5gTIh = await contractO0caF6W.allowanceFOSTER.call(accountHa2irER, {from: accounts[1]});
		await contractO0caF6W.withdraw.call(valueldd9AKt, {from: accounts[3]});
		const nullTR9HC22 = await contractO0caF6W.allowanceFOSTER.call(account1y7SPo, {from: accounts[5]});

		await expect(contractO0caF6W.allowanceFOSTER.call(accountHa2irER, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDCAHSZD = accounts[3]
		const FOSTERAddrKHhTZjk = accounts[0]
		const initialRatezKB22lR = BigInt("1581")
		const initialPeriodNVxyhnA = BigInt("1730")
		const initialOwnerK1Db0i6 = accounts[0]
		const contractKTTNQmO = await Reseller.new(USDTAddrDCAHSZD, FOSTERAddrKHhTZjk, initialRatezKB22lR, initialPeriodNVxyhnA, initialOwnerK1Db0i6, {from: accounts[4]});
		const newMinimumcEap2Z = BigInt("940")
		const accountjRiLU0 = accounts[0]
		const _ref5OJTDINZ = accounts[0]
		const _ref4CuVTpLp = accounts[2]
		const _ref3dDDMw8R = accounts[1]
		const _ref2lCrxDW = accounts[5]
		const _ref1aUBYFR = accounts[3]
		const valueBUUY0sC = BigInt("451")
		const valuepfpBuUN = BigInt("338")
		const recipientyRSdWBi = accounts[4]
		const ERC20TokenBfjbLS6 = accounts[4]
		const newPeriodSG5QcuG = BigInt("1032")
		await contractKTTNQmO.setMinimum.call(newMinimumcEap2Z, {from: accounts[2]});
		const nullkVAlThg = await contractKTTNQmO.balanceUSDT.call(accountjRiLU0, {from: accounts[0]});
		await contractKTTNQmO.buy.call(valueBUUY0sC, _ref1aUBYFR, _ref2lCrxDW, _ref3dDDMw8R, _ref4CuVTpLp, _ref5OJTDINZ, {from: accounts[4]});
		await contractKTTNQmO.withdrawERC20.call(ERC20TokenBfjbLS6, recipientyRSdWBi, valuepfpBuUN, {from: accounts[2]});
		await contractKTTNQmO.setPeriod.call(newPeriodSG5QcuG, {from: accounts[1]});

		await expect(contractKTTNQmO.setMinimum.call(newMinimumcEap2Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCiq2908 = accounts[0]
		const FOSTERAddrpKFw2JK = accounts[2]
		const initialRateK1LffCb = BigInt("789")
		const initialPeriodJ08jHrN = BigInt("1700")
		const initialOwnerotcJx6C = accounts[2]
		const contractf3uhETO = await Reseller.new(USDTAddrCiq2908, FOSTERAddrpKFw2JK, initialRateK1LffCb, initialPeriodJ08jHrN, initialOwnerotcJx6C, {from: accounts[0]});
		const accountrP3xvia = accounts[3]
		const accountsPeJeLq = accounts[4]
		const nullFzSttoJ = await contractf3uhETO.balanceFOSTER.call(accountrP3xvia, {from: accounts[3]});
		const nullSllsL2L = await contractf3uhETO.allowanceFOSTER.call(accountsPeJeLq, {from: accounts[0]});

		await expect(contractf3uhETO.balanceFOSTER.call(accountrP3xvia, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddri0dycRO = accounts[1]
		const FOSTERAddrmJKg5bc = accounts[1]
		const initialRate2h9kfS = BigInt("443")
		const initialPeriodTHG1fX = BigInt("780")
		const initialOwnerauzwxVv = accounts[2]
		const contractYTelzS9 = await Reseller.new(USDTAddri0dycRO, FOSTERAddrmJKg5bc, initialRate2h9kfS, initialPeriodTHG1fX, initialOwnerauzwxVv, {from: accounts[3]});
		const level5qQT5eL6 = BigInt("187")
		const level4DpEr33 = BigInt("195")
		const level3gnxLgQG = BigInt("101")
		const level2WFrLJ5X = BigInt("192")
		const level1TSTIN0 = BigInt("153")
		const newBoss22qvc7c = accounts[3]
		const accountp4JT0TV = accounts[0]
		const account5D93qN = accounts[0]
		const newBoss1PZPqoG9 = accounts[4]
		await contractYTelzS9.setRefBonus.call(level1TSTIN0, level2WFrLJ5X, level3gnxLgQG, level4DpEr33, level5qQT5eL6, {from: accounts[1]});
		await contractYTelzS9.deposeBoss2.call(newBoss22qvc7c, {from: accounts[1]});
		const nullb5rFr13 = await contractYTelzS9.balanceFOSTER.call(accountp4JT0TV, {from: accounts[2]});
		const nullGFg2hLN = await contractYTelzS9.allowanceFOSTER.call(account5D93qN, {from: accounts[0]});
		await contractYTelzS9.deposeBoss1.call(newBoss1PZPqoG9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractYTelzS9.setRefBonus.call(level1TSTIN0, level2WFrLJ5X, level3gnxLgQG, level4DpEr33, level5qQT5eL6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJzfvCL = accounts[0]
		const FOSTERAddrxt90Ai = accounts[2]
		const initialRatec5hvnB9 = BigInt("789")
		const initialPeriodLnusYkp = BigInt("1700")
		const initialOwnerL2GE5lT = accounts[2]
		const contractGy8hJTA = await Reseller.new(USDTAddrJzfvCL, FOSTERAddrxt90Ai, initialRatec5hvnB9, initialPeriodLnusYkp, initialOwnerL2GE5lT, {from: accounts[0]});
		const commentwHqzrpT = "8QpEIwaVEZ9Nw6LrYvKLrb"
		const _ref5nqpBnmb = accounts[4]
		const _ref4MJ1dVvf = accounts[1]
		const _ref3KpLWId1 = accounts[3]
		const _ref2R7fFBJg = accounts[1]
		const _ref1vTNx0Qy = accounts[5]
		const valuechM9dpD = BigInt("1012")
		const accountrHqQFaL = accounts[4]
		await contractGy8hJTA.purchase.call(valuechM9dpD, _ref1vTNx0Qy, _ref2R7fFBJg, _ref3KpLWId1, _ref4MJ1dVvf, _ref5nqpBnmb, commentwHqzrpT, {from: accounts[0]});
		const nullcbrKGvE = await contractGy8hJTA.allowanceFOSTER.call(accountrHqQFaL, {from: accounts[0]});

		await expect(contractGy8hJTA.purchase.call(valuechM9dpD, _ref1vTNx0Qy, _ref2R7fFBJg, _ref3KpLWId1, _ref4MJ1dVvf, _ref5nqpBnmb, commentwHqzrpT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwtpHZ4w = accounts[4]
		const FOSTERAddreI3V1iR = accounts[4]
		const initialRateP3i7wTr = BigInt("915")
		const initialPeriodDAialaP = BigInt("102")
		const initialOwnerv7UiIjN = accounts[4]
		const contractZhAAH3E = await Reseller.new(USDTAddrwtpHZ4w, FOSTERAddreI3V1iR, initialRateP3i7wTr, initialPeriodDAialaP, initialOwnerv7UiIjN, {from: accounts[3]});
		const amountlzsmti = BigInt("1836")
		const accountpkQLXOI = accounts[2]
		const valueOdJvocI = BigInt("1225")
		const recipientErTN8N = accounts[2]
		const ERC20TokenVWyjvFh = accounts[1]
		const newBoss1TFNQT3 = accounts[5]
		const nullBByiw6X = await contractZhAAH3E.getEstimation.call(amountlzsmti, {from: accounts[4]});
		const nullhzH18Ud = await contractZhAAH3E.balanceUSDT.call(accountpkQLXOI, {from: "0x0000000000000000000000000000000000000001"});
		await contractZhAAH3E.withdrawERC20.call(ERC20TokenVWyjvFh, recipientErTN8N, valueOdJvocI, {from: accounts[3]});
		await contractZhAAH3E.deposeBoss1.call(newBoss1TFNQT3, {from: accounts[5]});

		assert.equal(nullBByiw6X, 1679940)
		await expect(contractZhAAH3E.balanceUSDT.call(accountpkQLXOI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddreXhPK1K = accounts[0]
		const FOSTERAddriv9XD0s = accounts[2]
		const initialRateN33RIHu = BigInt("789")
		const initialPeriodgFLwqfe = BigInt("1700")
		const initialOwnerJVzSVO5 = accounts[2]
		const contractRsBdwLv = await Reseller.new(USDTAddreXhPK1K, FOSTERAddriv9XD0s, initialRateN33RIHu, initialPeriodgFLwqfe, initialOwnerJVzSVO5, {from: accounts[0]});
		const accountjtvAQVN = accounts[1]
		const amountJwdBm6Y = BigInt("920")
		const accountNXOxOhC = accounts[4]
		const nullBg34fUE = await contractRsBdwLv.allowanceUSDT.call(accountjtvAQVN, {from: accounts[0]});
		const nullnasZZgn = await contractRsBdwLv.getEstimation.call(amountJwdBm6Y, {from: "0x0000000000000000000000000000000000000001"});
		const nullkrQe7jv = await contractRsBdwLv.allowanceFOSTER.call(accountNXOxOhC, {from: accounts[0]});

		await expect(contractRsBdwLv.allowanceUSDT.call(accountjtvAQVN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQYApGpd = accounts[2]
		const FOSTERAddrSU5tRsF = accounts[4]
		const initialRateuxhxiQk = BigInt("849")
		const initialPeriodHMqG93W = BigInt("1043")
		const initialOwnerEGsgS4U = accounts[3]
		const contractbM0XHBM = await Reseller.new(USDTAddrQYApGpd, FOSTERAddrSU5tRsF, initialRateuxhxiQk, initialPeriodHMqG93W, initialOwnerEGsgS4U, {from: accounts[3]});
		const newRatepaIp4AA = BigInt("1198")
		const valuexQuC4o9 = BigInt("661")
		const newMinimums57qedn = BigInt("1181")
		await contractbM0XHBM.setRate.call(newRatepaIp4AA, {from: accounts[2]});
		await contractbM0XHBM.withdraw.call(valuexQuC4o9, {from: accounts[5]});
		await contractbM0XHBM.setMinimum.call(newMinimums57qedn, {from: accounts[3]});

		await expect(contractbM0XHBM.setRate.call(newRatepaIp4AA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzNyVUke = accounts[0]
		const FOSTERAddrIBL0Ue8 = accounts[2]
		const initialRateyBzYjsN = BigInt("789")
		const initialPeriodBOz46C2 = BigInt("1700")
		const initialOwnernk5ZNdZ = accounts[2]
		const contractEFcLEM = await Reseller.new(USDTAddrzNyVUke, FOSTERAddrIBL0Ue8, initialRateyBzYjsN, initialPeriodBOz46C2, initialOwnernk5ZNdZ, {from: accounts[0]});
		const accounttQixTG = accounts[4]
		const accountgM0S1I2 = accounts[1]
		const level5ArGVUo9 = BigInt("178")
		const level4WldzJL = BigInt("147")
		const level3ifCi2jy = BigInt("140")
		const level2vjGNmrP = BigInt("29")
		const level1NQI8mCF = BigInt("195")
		await contractEFcLEM.switchState.call({from: accounts[2]});
		const nullclGyUky = await contractEFcLEM.allowanceFOSTER.call(accounttQixTG, {from: accounts[0]});
		const nullDtpaTg = await contractEFcLEM.balanceUSDT.call(accountgM0S1I2, {from: accounts[3]});
		await contractEFcLEM.setRefBonus.call(level1NQI8mCF, level2vjGNmrP, level3ifCi2jy, level4WldzJL, level5ArGVUo9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractEFcLEM.switchState.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzZYbrxK = accounts[2]
		const FOSTERAddrZs3I8x = accounts[4]
		const initialRateG6zsaH4 = BigInt("849")
		const initialPeriodRf3J5Oc = BigInt("1043")
		const initialOwnermQ4ejRo = accounts[3]
		const contracto1upQB = await Reseller.new(USDTAddrzZYbrxK, FOSTERAddrZs3I8x, initialRateG6zsaH4, initialPeriodRf3J5Oc, initialOwnermQ4ejRo, {from: accounts[3]});
		const newBoss4NIe5r1W = accounts[4]
		const valuezmlDQVa = BigInt("642")
		const amountxwmsx7x = BigInt("1821")
		const newBoss4Rgw1eYQ = accounts[1]
		await contracto1upQB.deposeBoss4.call(newBoss4NIe5r1W, {from: accounts[2]});
		await contracto1upQB.withdraw.call(valuezmlDQVa, {from: accounts[5]});
		const nullJrbtpgS = await contracto1upQB.getEstimation.call(amountxwmsx7x, {from: accounts[4]});
		await contracto1upQB.deposeBoss4.call(newBoss4Rgw1eYQ, {from: accounts[4]});

		await expect(contracto1upQB.deposeBoss4.call(newBoss4NIe5r1W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQFjYoEl = accounts[2]
		const FOSTERAddrfvwh77Z = accounts[4]
		const initialRateDA9mVV8 = BigInt("1133")
		const initialPeriodcPWYyc6 = BigInt("1937")
		const initialOwner3dnfCC = accounts[3]
		const contractZO5DNy8 = await Reseller.new(USDTAddrQFjYoEl, FOSTERAddrfvwh77Z, initialRateDA9mVV8, initialPeriodcPWYyc6, initialOwner3dnfCC, {from: "0x0000000000000000000000000000000000000001"});
		const _periodPsmoXWw = BigInt("1845")
		const amountVzCYInu = BigInt("1367")
		const recipientKR9DMT3 = accounts[5]
		const newBoss3y9dVKe4 = accounts[2]
		const level5Z7c6sPX = BigInt("34")
		const level4jU1U2pe = BigInt("127")
		const level3dqqxBls = BigInt("242")
		const level2i7cDF1n = BigInt("23")
		const level1TciMzSs = BigInt("85")
		await contractZO5DNy8.freezeAndTransfer.call(recipientKR9DMT3, amountVzCYInu, _periodPsmoXWw, {from: accounts[4]});
		await contractZO5DNy8.deposeBoss3.call(newBoss3y9dVKe4, {from: accounts[1]});
		await contractZO5DNy8.setRefBonus.call(level1TciMzSs, level2i7cDF1n, level3dqqxBls, level4jU1U2pe, level5Z7c6sPX, {from: accounts[3]});
	});

	it('test for Reseller', async () => {
		const USDTAddrlF8Gwuf = accounts[2]
		const FOSTERAddrUeWLk9t = accounts[4]
		const initialRateZum8As1 = BigInt("849")
		const initialPeriodEgjp7HA = BigInt("1043")
		const initialOwnerjAFNvU = accounts[3]
		const contracta8vLouT = await Reseller.new(USDTAddrlF8Gwuf, FOSTERAddrUeWLk9t, initialRateZum8As1, initialPeriodEgjp7HA, initialOwnerjAFNvU, {from: accounts[3]});
		const newFeeAnCuTNv = BigInt("186")
		const valuegiLLlil = BigInt("605")
		await contracta8vLouT.setFee.call(newFeeAnCuTNv, {from: "0x0000000000000000000000000000000000000001"});
		await contracta8vLouT.withdraw.call(valuegiLLlil, {from: accounts[5]});

		await expect(contracta8vLouT.setFee.call(newFeeAnCuTNv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrskFwCwa = accounts[0]
		const FOSTERAddrs66Q4bT = accounts[3]
		const initialRatezxhLxiR = BigInt("181")
		const initialPeriodHabeR5k = BigInt("1371")
		const initialOwnerp4UDZf = accounts[2]
		const contractUgPu6EU = await Reseller.new(USDTAddrskFwCwa, FOSTERAddrs66Q4bT, initialRatezxhLxiR, initialPeriodHabeR5k, initialOwnerp4UDZf, {from: accounts[1]});
		const newPeriodyVQFTG = BigInt("1124")
		const accountBerHLi = "0x0000000000000000000000000000000000000001"
		const accountFcXYSrz = accounts[0]
		const amountXWpu6NE = BigInt("980")
		const newMinimumKqkXFMS = BigInt("9")
		await contractUgPu6EU.setPeriod.call(newPeriodyVQFTG, {from: accounts[2]});
		const nullx2YUBkr = await contractUgPu6EU.balanceFOSTER.call(accountBerHLi, {from: accounts[4]});
		const nulluaPvMH6 = await contractUgPu6EU.allowanceUSDT.call(accountFcXYSrz, {from: accounts[3]});
		const nullVMHV4s4 = await contractUgPu6EU.getEstimation.call(amountXWpu6NE, {from: accounts[1]});
		await contractUgPu6EU.setMinimum.call(newMinimumKqkXFMS, {from: accounts[5]});
		await contractUgPu6EU.switchState.call({from: accounts[0]});

		await expect(contractUgPu6EU.setPeriod.call(newPeriodyVQFTG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrK2EGZCZ = accounts[2]
		const FOSTERAddrmPgGG9 = accounts[4]
		const initialRateibKAGz5 = BigInt("849")
		const initialPerioduwj5Ja = BigInt("1043")
		const initialOwnerPJSoNJ3 = accounts[3]
		const contractT3qlczM = await Reseller.new(USDTAddrK2EGZCZ, FOSTERAddrmPgGG9, initialRateibKAGz5, initialPerioduwj5Ja, initialOwnerPJSoNJ3, {from: accounts[3]});
		const newFeeNTobAu1 = BigInt("24")
		const newBoss3oyupuRN = accounts[4]
		const valueWplGcQ = BigInt("611")
		const newMinimumBz7kEca = BigInt("634")
		await contractT3qlczM.setFee.call(newFeeNTobAu1, {from: accounts[3]});
		await contractT3qlczM.deposeBoss3.call(newBoss3oyupuRN, {from: accounts[1]});
		await contractT3qlczM.withdraw.call(valueWplGcQ, {from: accounts[5]});
		await contractT3qlczM.setMinimum.call(newMinimumBz7kEca, {from: accounts[3]});

		await expect(contractT3qlczM.setFee.call(newFeeNTobAu1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrp7YNIXS = accounts[2]
		const FOSTERAddrA7lVS5T = accounts[4]
		const initialRateNJ16j3M = BigInt("849")
		const initialPeriodyvbJEDn = BigInt("1043")
		const initialOwnerbZjUSid = accounts[3]
		const contractk8zVlMW = await Reseller.new(USDTAddrp7YNIXS, FOSTERAddrA7lVS5T, initialRateNJ16j3M, initialPeriodyvbJEDn, initialOwnerbZjUSid, {from: accounts[3]});
		const newBoss4cYvHFnG = accounts[3]
		const newBoss25xsnnp = accounts[1]
		const valuezBOSvCv = BigInt("662")
		await contractk8zVlMW.deposeBoss4.call(newBoss4cYvHFnG, {from: accounts[3]});
		await contractk8zVlMW.deposeBoss2.call(newBoss25xsnnp, {from: "0x0000000000000000000000000000000000000001"});
		await contractk8zVlMW.withdraw.call(valuezBOSvCv, {from: accounts[5]});

		await expect(contractk8zVlMW.deposeBoss4.call(newBoss4cYvHFnG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrOU7X0vt = accounts[0]
		const FOSTERAddrQVuR0Na = accounts[2]
		const initialRateNwNc4U4 = BigInt("789")
		const initialPeriodUU4Jl79 = BigInt("1700")
		const initialOwnerwkS6D5 = accounts[2]
		const contractNFe0MX = await Reseller.new(USDTAddrOU7X0vt, FOSTERAddrQVuR0Na, initialRateNwNc4U4, initialPeriodUU4Jl79, initialOwnerwkS6D5, {from: accounts[0]});
		const newMinimumsHTWvpk = BigInt("197")
		const newMinimumz4KOnv1 = BigInt("1139")
		const valuesFL1pPi = BigInt("433")
		const accounthmH2wXc = accounts[4]
		await contractNFe0MX.setMinimum.call(newMinimumsHTWvpk, {from: accounts[2]});
		await contractNFe0MX.setMinimum.call(newMinimumz4KOnv1, {from: accounts[3]});
		await contractNFe0MX.withdraw.call(valuesFL1pPi, {from: accounts[3]});
		const nullQ3MOMS4 = await contractNFe0MX.allowanceFOSTER.call(accounthmH2wXc, {from: accounts[0]});

		await expect(contractNFe0MX.setMinimum.call(newMinimumsHTWvpk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSZkrTSR = accounts[2]
		const FOSTERAddrdKmv54a = accounts[4]
		const initialRateXbp3GNz = BigInt("849")
		const initialPeriodQ23RzvS = BigInt("1043")
		const initialOwnerwCigEZ8 = accounts[3]
		const contractW6hKnaQ = await Reseller.new(USDTAddrSZkrTSR, FOSTERAddrdKmv54a, initialRateXbp3GNz, initialPeriodQ23RzvS, initialOwnerwCigEZ8, {from: accounts[3]});
		const comment78vXWE = "6MF1k1rs1dSK1SleP7wzNcVXJw5cJlEenQSSN0UMzURxG4AQIx4JbN"
		const _ref5NmhRDNG = accounts[0]
		const _ref4Ir3lLaU = accounts[1]
		const _ref3bdAuR6W = accounts[2]
		const _ref2LENssJa = accounts[3]
		const _ref1G7ziuqJ = accounts[1]
		const valueJBMLUAd = BigInt("1925")
		const accountzBLa3Wz = accounts[5]
		const valueFIOnGNe = BigInt("573")
		await contractW6hKnaQ.purchase.call(valueJBMLUAd, _ref1G7ziuqJ, _ref2LENssJa, _ref3bdAuR6W, _ref4Ir3lLaU, _ref5NmhRDNG, comment78vXWE, {from: accounts[3]});
		const nullhsgxrLX = await contractW6hKnaQ.balanceUSDT.call(accountzBLa3Wz, {from: accounts[1]});
		await contractW6hKnaQ.withdraw.call(valueFIOnGNe, {from: accounts[5]});

		await expect(contractW6hKnaQ.purchase.call(valueJBMLUAd, _ref1G7ziuqJ, _ref2LENssJa, _ref3bdAuR6W, _ref4Ir3lLaU, _ref5NmhRDNG, comment78vXWE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwSJKmUP = accounts[1]
		const FOSTERAddrM5X01Ms = accounts[2]
		const initialRatejz2aNHQ = BigInt("488")
		const initialPeriodHbMAcnD = BigInt("1688")
		const initialOwnerxHu0e9I = accounts[2]
		const contractFpBtPdW = await Reseller.new(USDTAddrwSJKmUP, FOSTERAddrM5X01Ms, initialRatejz2aNHQ, initialPeriodHbMAcnD, initialOwnerxHu0e9I, {from: accounts[0]});
		const level5yMdesaH = BigInt("175")
		const level4TNSviCt = BigInt("69")
		const level3LxCDw0l = BigInt("101")
		const level2deUFSoA = BigInt("28")
		const level1DW1jY7o = BigInt("253")
		const amountpM8X7l = BigInt("1679")
		const newBoss1EHhso9s = accounts[0]
		const valueeM59ViF = BigInt("1205")
		const recipientkDDLyqc = accounts[4]
		const ERC20TokenXYokO5u = accounts[0]
		await contractFpBtPdW.setRefBonus.call(level1DW1jY7o, level2deUFSoA, level3LxCDw0l, level4TNSviCt, level5yMdesaH, {from: accounts[2]});
		const nullTNWvSyk = await contractFpBtPdW.getEstimation.call(amountpM8X7l, {from: accounts[1]});
		await contractFpBtPdW.deposeBoss1.call(newBoss1EHhso9s, {from: accounts[3]});
		await contractFpBtPdW.withdrawERC20.call(ERC20TokenXYokO5u, recipientkDDLyqc, valueeM59ViF, {from: accounts[1]});

		assert.equal(nullTNWvSyk, 819352)
		await expect(contractFpBtPdW.getEstimation.call(amountpM8X7l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrx4I5xGF = accounts[2]
		const FOSTERAddrEPh0ooy = accounts[4]
		const initialRatevNNKxZM = BigInt("849")
		const initialPeriodNvux4FH = BigInt("1043")
		const initialOwnerdsMSaoG = accounts[3]
		const contractSoxImGO = await Reseller.new(USDTAddrx4I5xGF, FOSTERAddrEPh0ooy, initialRatevNNKxZM, initialPeriodNvux4FH, initialOwnerdsMSaoG, {from: accounts[3]});
		const newRateJ156k1W = BigInt("1879")
		const newBoss3tYGWWn1 = accounts[0]
		const valuetOUhF8q = BigInt("618")
		await contractSoxImGO.setRate.call(newRateJ156k1W, {from: accounts[3]});
		await contractSoxImGO.deposeBoss3.call(newBoss3tYGWWn1, {from: "0x0000000000000000000000000000000000000001"});
		await contractSoxImGO.withdraw.call(valuetOUhF8q, {from: accounts[5]});

		await expect(contractSoxImGO.setRate.call(newRateJ156k1W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})