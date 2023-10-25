const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrxJ0qC8f = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrqQSZEL9 = accounts[3]
		const initialRateiZ0mq3U = BigInt("567")
		const initialPeriodcnsUJ0W = BigInt("1868")
		const initialOwnerwYB3VjY = accounts[2]
		const contractCEBxZIw = await Reseller.new(USDTAddrxJ0qC8f, FOSTERAddrqQSZEL9, initialRateiZ0mq3U, initialPeriodcnsUJ0W, initialOwnerwYB3VjY, {from: accounts[0]});
		const newMinimumM2ZRVnX = BigInt("1244")
		const valueFCL81nT = BigInt("1586")
		const newBoss1OaoaHY1 = accounts[0]
		await contractCEBxZIw.setMinimum.call(newMinimumM2ZRVnX, {from: accounts[4]});
		await contractCEBxZIw.withdraw.call(valueFCL81nT, {from: "0x0000000000000000000000000000000000000001"});
		await contractCEBxZIw.deposeBoss1.call(newBoss1OaoaHY1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractCEBxZIw.setMinimum.call(newMinimumM2ZRVnX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkWBXPuI = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrGM4q1g = accounts[5]
		const initialRateESKBwgE = BigInt("432")
		const initialPeriodzsod10Y = BigInt("1463")
		const initialOwnerryCunha = accounts[2]
		const contractY8ZDvOD = await Reseller.new(USDTAddrkWBXPuI, FOSTERAddrGM4q1g, initialRateESKBwgE, initialPeriodzsod10Y, initialOwnerryCunha, {from: accounts[1]});
		const newRateRe9rwi = BigInt("975")
		const newPeriodnyPMTm6 = BigInt("436")
		const level5v9pQTLP = BigInt("56")
		const level4z1wqOuV = BigInt("44")
		const level3mX34Qrf = BigInt("129")
		const level2TsLOAs = BigInt("99")
		const level1Gm9BoaZ = BigInt("157")
		await contractY8ZDvOD.setRate.call(newRateRe9rwi, {from: accounts[1]});
		await contractY8ZDvOD.setPeriod.call(newPeriodnyPMTm6, {from: accounts[3]});
		await contractY8ZDvOD.setRefBonus.call(level1Gm9BoaZ, level2TsLOAs, level3mX34Qrf, level4z1wqOuV, level5v9pQTLP, {from: accounts[1]});

		await expect(contractY8ZDvOD.setRate.call(newRateRe9rwi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYsxkapb = accounts[3]
		const FOSTERAddrmasJfow = accounts[2]
		const initialRateDUBkIfw = BigInt("513")
		const initialPeriodUw4D7Rl = BigInt("1032")
		const initialOwnerO8Mi8fO = accounts[0]
		const contractCIlqADi = await Reseller.new(USDTAddrYsxkapb, FOSTERAddrmasJfow, initialRateDUBkIfw, initialPeriodUw4D7Rl, initialOwnerO8Mi8fO, {from: accounts[4]});
		const newBoss1ogShYtK = accounts[3]
		const valuev3QXLMe = BigInt("1444")
		const newBoss2NHbwIOV = accounts[1]
		const newMinimumWUnSkPr = BigInt("2028")
		const level5qZUbUWs = BigInt("42")
		const level4XhbAno1 = BigInt("98")
		const level3HAHudT = BigInt("42")
		const level2CTxI5SD = BigInt("42")
		const level1wDLafSD = BigInt("72")
		await contractCIlqADi.deposeBoss1.call(newBoss1ogShYtK, {from: accounts[2]});
		await contractCIlqADi.withdraw.call(valuev3QXLMe, {from: accounts[0]});
		await contractCIlqADi.deposeBoss2.call(newBoss2NHbwIOV, {from: accounts[1]});
		await contractCIlqADi.setMinimum.call(newMinimumWUnSkPr, {from: accounts[3]});
		await contractCIlqADi.setRefBonus.call(level1wDLafSD, level2CTxI5SD, level3HAHudT, level4XhbAno1, level5qZUbUWs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractCIlqADi.deposeBoss1.call(newBoss1ogShYtK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdslYgxw = accounts[0]
		const FOSTERAddrJbl34X = accounts[5]
		const initialRaterVMgSsB = BigInt("1586")
		const initialPeriodaj506sf = BigInt("1043")
		const initialOwnerOEcL5E = accounts[3]
		const contractzVAYLdE = await Reseller.new(USDTAddrdslYgxw, FOSTERAddrJbl34X, initialRaterVMgSsB, initialPeriodaj506sf, initialOwnerOEcL5E, {from: accounts[1]});
		const newFeeSTuJoM = BigInt("155")
		const newFeeeHBeRK = BigInt("163")
		const _ref5hp1jsSC = accounts[4]
		const _ref4foIbOo = accounts[0]
		const _ref3XIufGc7 = accounts[4]
		const _ref2KnLMWYm = accounts[0]
		const _ref1kaX3Bc = "0x0000000000000000000000000000000000000001"
		const valueiSK3eHq = BigInt("955")
		const comment5DNlrF = "OdlXsIkheNBQAgIydmoi8RYAVwGdioXsyjy7pqhalN8uI7"
		const _ref5zFxZWt = accounts[3]
		const _ref4sT8xHYm = accounts[0]
		const _ref3iNlHiD = accounts[1]
		const _ref2dnzHvwI = accounts[4]
		const _ref1mqVKv3H = accounts[5]
		const valueEyAWE5B = BigInt("1082")
		await contractzVAYLdE.setFee.call(newFeeSTuJoM, {from: accounts[0]});
		await contractzVAYLdE.setFee.call(newFeeeHBeRK, {from: accounts[0]});
		await contractzVAYLdE.buy.call(valueiSK3eHq, _ref1kaX3Bc, _ref2KnLMWYm, _ref3XIufGc7, _ref4foIbOo, _ref5hp1jsSC, {from: accounts[5]});
		await contractzVAYLdE.purchase.call(valueEyAWE5B, _ref1mqVKv3H, _ref2dnzHvwI, _ref3iNlHiD, _ref4sT8xHYm, _ref5zFxZWt, comment5DNlrF, {from: accounts[1]});
		await contractzVAYLdE.switchState.call({from: accounts[4]});

		await expect(contractzVAYLdE.setFee.call(newFeeSTuJoM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYUteS6x = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrqI2TSM9 = accounts[3]
		const initialRatebryMluW = BigInt("1750")
		const initialPeriodN1Thuiu = BigInt("1197")
		const initialOwnerdigwP8a = accounts[4]
		const contractSaJuzf = await Reseller.new(USDTAddrYUteS6x, FOSTERAddrqI2TSM9, initialRatebryMluW, initialPeriodN1Thuiu, initialOwnerdigwP8a, {from: accounts[0]});
		const newPeriodbmtD31i = BigInt("1272")
		const accountTUBc8fC = "0x0000000000000000000000000000000000000001"
		const newBoss1sK8bYPx = accounts[2]
		const accountOPr6Ev7 = accounts[5]
		await contractSaJuzf.setPeriod.call(newPeriodbmtD31i, {from: accounts[0]});
		const nullT0BDwwx = await contractSaJuzf.allowanceUSDT.call(accountTUBc8fC, {from: accounts[2]});
		await contractSaJuzf.deposeBoss1.call(newBoss1sK8bYPx, {from: accounts[3]});
		const nullkDpR4Yc = await contractSaJuzf.balanceFOSTER.call(accountOPr6Ev7, {from: accounts[3]});

		await expect(contractSaJuzf.setPeriod.call(newPeriodbmtD31i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtMekNHP = accounts[3]
		const FOSTERAddrHQbg4YG = accounts[3]
		const initialRate4FwIxn = BigInt("1259")
		const initialPeriodDMi27O = BigInt("233")
		const initialOwnergvZfqhX = accounts[3]
		const contractQnznqU = await Reseller.new(USDTAddrtMekNHP, FOSTERAddrHQbg4YG, initialRate4FwIxn, initialPeriodDMi27O, initialOwnergvZfqhX, {from: accounts[0]});
		const newBoss4N5IhRmF = accounts[3]
		const accountfogzKmM = accounts[3]
		const newPeriodVbtw7R = BigInt("1938")
		const newBoss3E9Nnjok = accounts[0]
		const accountCCcTpFn = accounts[2]
		await contractQnznqU.deposeBoss4.call(newBoss4N5IhRmF, {from: accounts[0]});
		const nullFHaoYII = await contractQnznqU.balanceUSDT.call(accountfogzKmM, {from: accounts[2]});
		await contractQnznqU.setPeriod.call(newPeriodVbtw7R, {from: accounts[3]});
		await contractQnznqU.deposeBoss3.call(newBoss3E9Nnjok, {from: accounts[2]});
		const nullyUqS9sA = await contractQnznqU.balanceUSDT.call(accountCCcTpFn, {from: accounts[1]});

		await expect(contractQnznqU.deposeBoss4.call(newBoss4N5IhRmF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIFZIZXF = accounts[5]
		const FOSTERAddrE56e1T = accounts[2]
		const initialRateYnLlMp8 = BigInt("412")
		const initialPeriodNJZAUAf = BigInt("550")
		const initialOwnerFhsyASa = accounts[1]
		const contractB3SvM3 = await Reseller.new(USDTAddrIFZIZXF, FOSTERAddrE56e1T, initialRateYnLlMp8, initialPeriodNJZAUAf, initialOwnerFhsyASa, {from: accounts[4]});
		const newBoss2RsiW1v4 = accounts[4]
		const commenta3BkKhW = "TQXBjexSOIzoMy0Td"
		const _ref5Q8xUPp = accounts[0]
		const _ref4ib09yKP = accounts[0]
		const _ref3s2sXCm = accounts[4]
		const _ref20GItNa = accounts[3]
		const _ref1Kdw0b5W = accounts[2]
		const valueywniX4 = BigInt("1578")
		const newMinimumdre3Wj = BigInt("1898")
		await contractB3SvM3.deposeBoss2.call(newBoss2RsiW1v4, {from: accounts[2]});
		await contractB3SvM3.purchase.call(valueywniX4, _ref1Kdw0b5W, _ref20GItNa, _ref3s2sXCm, _ref4ib09yKP, _ref5Q8xUPp, commenta3BkKhW, {from: accounts[0]});
		await contractB3SvM3.setMinimum.call(newMinimumdre3Wj, {from: accounts[2]});

		await expect(contractB3SvM3.deposeBoss2.call(newBoss2RsiW1v4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfGg2SJT = accounts[3]
		const FOSTERAddrUno6HOJ = accounts[3]
		const initialRaterCzOI4F = BigInt("336")
		const initialPeriodzCKZCv3 = BigInt("85")
		const initialOwner3OYMOy = accounts[3]
		const contractAk5rkUt = await Reseller.new(USDTAddrfGg2SJT, FOSTERAddrUno6HOJ, initialRaterCzOI4F, initialPeriodzCKZCv3, initialOwner3OYMOy, {from: accounts[2]});
		const commentqJg0zCH = "hpy4oxhKzaNqT1IJ1X2nKbYgymTdp68jTeB9you7pe3Ad7ryjLJTBTYSYeHp01naEG71RSYkVkl"
		const _ref5HqiDNWf = accounts[0]
		const _ref4FdGCZjJ = accounts[3]
		const _ref3ocRBQjq = "0x0000000000000000000000000000000000000001"
		const _ref2OLtUu5q = accounts[2]
		const _ref1Cie8NK = accounts[1]
		const valueL02vI6V = BigInt("517")
		const newFeexE3tEIa = BigInt("16")
		const _periodZO3JhwM = BigInt("1593")
		const amountwDvFwK2 = BigInt("827")
		const recipientBZilwkp = accounts[1]
		const newRateMGpMP1d = BigInt("505")
		const _ref5I8YSVyk = accounts[2]
		const _ref4sGmD0ZS = accounts[5]
		const _ref3TIQNxFY = accounts[0]
		const _ref20rTzR5 = accounts[0]
		const _ref1cjbXuTN = accounts[0]
		const valueQp1t3ku = BigInt("473")
		await contractAk5rkUt.purchase.call(valueL02vI6V, _ref1Cie8NK, _ref2OLtUu5q, _ref3ocRBQjq, _ref4FdGCZjJ, _ref5HqiDNWf, commentqJg0zCH, {from: accounts[4]});
		await contractAk5rkUt.setFee.call(newFeexE3tEIa, {from: accounts[4]});
		await contractAk5rkUt.freezeAndTransfer.call(recipientBZilwkp, amountwDvFwK2, _periodZO3JhwM, {from: accounts[0]});
		await contractAk5rkUt.setRate.call(newRateMGpMP1d, {from: accounts[2]});
		await contractAk5rkUt.buy.call(valueQp1t3ku, _ref1cjbXuTN, _ref20rTzR5, _ref3TIQNxFY, _ref4sGmD0ZS, _ref5I8YSVyk, {from: accounts[0]});

		await expect(contractAk5rkUt.purchase.call(valueL02vI6V, _ref1Cie8NK, _ref2OLtUu5q, _ref3ocRBQjq, _ref4FdGCZjJ, _ref5HqiDNWf, commentqJg0zCH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQh1mXDj = accounts[3]
		const FOSTERAddrnibHQJ5 = accounts[5]
		const initialRateIRxNg1u = BigInt("501")
		const initialPeriodalqwWx = BigInt("1517")
		const initialOwnerGU51mL8 = accounts[3]
		const contractJIKvRqp = await Reseller.new(USDTAddrQh1mXDj, FOSTERAddrnibHQJ5, initialRateIRxNg1u, initialPeriodalqwWx, initialOwnerGU51mL8, {from: "0x0000000000000000000000000000000000000001"});
		const commentb4FumD4 = "MLDuumoGqn6dGfUa9oDA9G6JqgMNwV2TXYcjPLDmW6HmYV9SuQU0E1blwUFCRyA7m6VxBSPeHqmeGtI"
		const _ref5gNvobSc = "0x0000000000000000000000000000000000000001"
		const _ref4cv6rqDy = accounts[3]
		const _ref3xvqHQ2 = accounts[3]
		const _ref2nssx6y4 = accounts[0]
		const _ref1rvhzEha = accounts[2]
		const valueNjJ7NFD = BigInt("1556")
		const level5UNVcrOL = BigInt("38")
		const level4S22DQHs = BigInt("50")
		const level3T3IRKpB = BigInt("81")
		const level2Y6zaPIA = BigInt("208")
		const level1Oo13FKE = BigInt("4")
		const newBoss2tQGLNLu = accounts[4]
		await contractJIKvRqp.purchase.call(valueNjJ7NFD, _ref1rvhzEha, _ref2nssx6y4, _ref3xvqHQ2, _ref4cv6rqDy, _ref5gNvobSc, commentb4FumD4, {from: accounts[2]});
		await contractJIKvRqp.setRefBonus.call(level1Oo13FKE, level2Y6zaPIA, level3T3IRKpB, level4S22DQHs, level5UNVcrOL, {from: accounts[3]});
		await contractJIKvRqp.deposeBoss2.call(newBoss2tQGLNLu, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddrHyU0gNc = accounts[0]
		const FOSTERAddrii77QWy = accounts[0]
		const initialRatefsGdU9o = BigInt("843")
		const initialPeriodPowSCDJ = BigInt("1572")
		const initialOwnerF5J9GnD = accounts[3]
		const contractNNAHlOF = await Reseller.new(USDTAddrHyU0gNc, FOSTERAddrii77QWy, initialRatefsGdU9o, initialPeriodPowSCDJ, initialOwnerF5J9GnD, {from: accounts[0]});
		const _periodMfYIk0c = BigInt("283")
		const amountLGtZOr = BigInt("1624")
		const recipientuRHbx4z = accounts[4]
		const newBoss1fpuEJ6x = accounts[4]
		const newBoss4DmdkaKo = accounts[0]
		await contractNNAHlOF.freezeAndTransfer.call(recipientuRHbx4z, amountLGtZOr, _periodMfYIk0c, {from: accounts[3]});
		await contractNNAHlOF.deposeBoss1.call(newBoss1fpuEJ6x, {from: accounts[4]});
		await contractNNAHlOF.deposeBoss4.call(newBoss4DmdkaKo, {from: accounts[4]});

		await expect(contractNNAHlOF.freezeAndTransfer.call(recipientuRHbx4z, amountLGtZOr, _periodMfYIk0c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjgoc0pl = accounts[0]
		const FOSTERAddrBxgg4h6 = accounts[5]
		const initialRateZmzKwzq = BigInt("1586")
		const initialPeriodRPIWAjA = BigInt("1043")
		const initialOwner0sLxij = accounts[3]
		const contractIZmvC2u = await Reseller.new(USDTAddrjgoc0pl, FOSTERAddrBxgg4h6, initialRateZmzKwzq, initialPeriodRPIWAjA, initialOwner0sLxij, {from: accounts[1]});
		const accountXzMASnu = accounts[0]
		const newFeevE8FdcB = BigInt("155")
		const newFeeLRKhGSR = BigInt("163")
		const _ref5gXnBax = accounts[4]
		const _ref4y5sXHFX = accounts[0]
		const _ref3YhxoSkw = accounts[4]
		const _ref2XwThcBv = accounts[0]
		const _ref1SVJzJS7 = "0x0000000000000000000000000000000000000001"
		const valueclZMB4q = BigInt("955")
		const commentSjbPKbL = "OdlXsIkheNBQAgIydmoi8RYAVwGdioXsyjy7pqhalN8uI7"
		const _ref5HcAPuV0 = accounts[3]
		const _ref4mNPZcYZ = accounts[0]
		const _ref3VULDwp6 = accounts[1]
		const _ref2IGqSwZr = accounts[4]
		const _ref1ao4ib2a = accounts[5]
		const valuemQh7iU8 = BigInt("1082")
		const nullM6k7cZD = await contractIZmvC2u.allowanceFOSTER.call(accountXzMASnu, {from: "0x0000000000000000000000000000000000000001"});
		await contractIZmvC2u.setFee.call(newFeevE8FdcB, {from: accounts[0]});
		await contractIZmvC2u.setFee.call(newFeeLRKhGSR, {from: accounts[0]});
		await contractIZmvC2u.buy.call(valueclZMB4q, _ref1SVJzJS7, _ref2XwThcBv, _ref3YhxoSkw, _ref4y5sXHFX, _ref5gXnBax, {from: accounts[5]});
		await contractIZmvC2u.purchase.call(valuemQh7iU8, _ref1ao4ib2a, _ref2IGqSwZr, _ref3VULDwp6, _ref4mNPZcYZ, _ref5HcAPuV0, commentSjbPKbL, {from: accounts[1]});
		await contractIZmvC2u.switchState.call({from: accounts[4]});

		await expect(contractIZmvC2u.allowanceFOSTER.call(accountXzMASnu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddroZqLGs2 = accounts[2]
		const FOSTERAddrlwa9ZR5 = accounts[5]
		const initialRatenqnChuP = BigInt("1052")
		const initialPeriodB81w7ty = BigInt("183")
		const initialOwnerxlk4k13 = accounts[3]
		const contractgAeYpcK = await Reseller.new(USDTAddroZqLGs2, FOSTERAddrlwa9ZR5, initialRatenqnChuP, initialPeriodB81w7ty, initialOwnerxlk4k13, {from: accounts[4]});
		const level5bDfGAe = BigInt("176")
		const level48U73Nc = BigInt("94")
		const level3OLX9ncU = BigInt("231")
		const level2TZraBUE = BigInt("151")
		const level1SUjXOzT = BigInt("12")
		const newRateySEzZs = BigInt("781")
		const comments9CgHZI = "XITeNZjwbTCpdlnQiGkYohFMPvm29cDnWrix1EgBmN36CJ5H6R1rFD1qTTTGkdyaFBSfSPskWObQIdbs9JIpOT99Id3UQgtPUq"
		const _ref5UfRtmIg = accounts[3]
		const _ref4wDzADNQ = accounts[2]
		const _ref3zectTgd = accounts[3]
		const _ref2WK82mOe = accounts[2]
		const _ref1Z3BkQae = accounts[1]
		const valueEG2iVES = BigInt("547")
		const newMinimumeUmNdgg = BigInt("1611")
		await contractgAeYpcK.setRefBonus.call(level1SUjXOzT, level2TZraBUE, level3OLX9ncU, level48U73Nc, level5bDfGAe, {from: accounts[4]});
		await contractgAeYpcK.setRate.call(newRateySEzZs, {from: "0x0000000000000000000000000000000000000001"});
		await contractgAeYpcK.purchase.call(valueEG2iVES, _ref1Z3BkQae, _ref2WK82mOe, _ref3zectTgd, _ref4wDzADNQ, _ref5UfRtmIg, comments9CgHZI, {from: accounts[2]});
		await contractgAeYpcK.setMinimum.call(newMinimumeUmNdgg, {from: accounts[3]});

		await expect(contractgAeYpcK.setRefBonus.call(level1SUjXOzT, level2TZraBUE, level3OLX9ncU, level48U73Nc, level5bDfGAe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBPlpuVG = accounts[3]
		const FOSTERAddrUycjqDY = accounts[2]
		const initialRateZudfLta = BigInt("1359")
		const initialPeriodWPxmBh = BigInt("701")
		const initialOwnerjKdYFpb = accounts[0]
		const contractlStLvB0 = await Reseller.new(USDTAddrBPlpuVG, FOSTERAddrUycjqDY, initialRateZudfLta, initialPeriodWPxmBh, initialOwnerjKdYFpb, {from: accounts[0]});
		const newPeriodJLLums4 = BigInt("1067")
		const newBoss3oaCx5Cr = accounts[4]
		const commentA3cFYdg = "krPdE3pGbezReFIEoypjlJJd64iBOU7eMxYZvfGGgJehbUvgSj14R4yDoVn3Xi5k83Yfkbq1gZd3jFysot"
		const _ref5E097BJx = accounts[3]
		const _ref4PsGCuwR = accounts[2]
		const _ref3oOiu4cI = accounts[2]
		const _ref2fwDSrW = accounts[1]
		const _ref1yCNlKRO = accounts[1]
		const valueparRju5 = BigInt("1104")
		await contractlStLvB0.setPeriod.call(newPeriodJLLums4, {from: accounts[0]});
		await contractlStLvB0.deposeBoss3.call(newBoss3oaCx5Cr, {from: "0x0000000000000000000000000000000000000001"});
		await contractlStLvB0.purchase.call(valueparRju5, _ref1yCNlKRO, _ref2fwDSrW, _ref3oOiu4cI, _ref4PsGCuwR, _ref5E097BJx, commentA3cFYdg, {from: accounts[0]});

		await expect(contractlStLvB0.setPeriod.call(newPeriodJLLums4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsb7hD5j = accounts[3]
		const FOSTERAddrDBhPgXM = accounts[5]
		const initialRater3Hl3kW = BigInt("1516")
		const initialPeriodQ2saQ8M = BigInt("427")
		const initialOwnerVMF3y1o = accounts[1]
		const contractvR6MXn1 = await Reseller.new(USDTAddrsb7hD5j, FOSTERAddrDBhPgXM, initialRater3Hl3kW, initialPeriodQ2saQ8M, initialOwnerVMF3y1o, {from: accounts[1]});
		const newBoss4Qz9vGbN = accounts[4]
		const newBoss3qCowdvf = accounts[0]
		await contractvR6MXn1.switchState.call({from: accounts[5]});
		await contractvR6MXn1.deposeBoss4.call(newBoss4Qz9vGbN, {from: accounts[4]});
		await contractvR6MXn1.switchState.call({from: accounts[0]});
		await contractvR6MXn1.deposeBoss3.call(newBoss3qCowdvf, {from: accounts[1]});

		await expect(contractvR6MXn1.switchState.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCY26E80 = accounts[3]
		const FOSTERAddrulyOxP4 = accounts[3]
		const initialRatevypUtsA = BigInt("336")
		const initialPeriodmkaeFR = BigInt("85")
		const initialOwnergRECjXE = accounts[3]
		const contractfKxruNG = await Reseller.new(USDTAddrCY26E80, FOSTERAddrulyOxP4, initialRatevypUtsA, initialPeriodmkaeFR, initialOwnergRECjXE, {from: accounts[2]});
		const accountmxKXhl = accounts[3]
		const commentjYyvnd5 = "hpy4oxhKzaNqT1IJ1X2nKbYgymTdp68jTeB9you7pe3Ad7ryjLJTBTYSYeHp01naEG71RSYkVkl"
		const _ref5qmGc39l = accounts[0]
		const _ref4QKeAcOl = accounts[3]
		const _ref3AGkj0gt = "0x0000000000000000000000000000000000000001"
		const _ref2OnVjzDp = accounts[2]
		const _ref1bGZ3e4t = accounts[1]
		const valueoq3n18 = BigInt("524")
		const commentrGj3BQ = "t3fx6RdXph4ML6BwPKBTpOfYR9hmTvcgm3EFiev1myR69L4ynWOej0LdDedqjdZAn"
		const _ref5GPABXe7 = accounts[2]
		const _ref4aZfXO6q = accounts[1]
		const _ref3CX7678E = accounts[0]
		const _ref2RJupqqN = accounts[3]
		const _ref1HiTLfz3 = accounts[1]
		const valueGuvLNzm = BigInt("1571")
		const newFeeV2JdoNE = BigInt("16")
		const newMinimumA293wNE = BigInt("486")
		const _periodYykExom = BigInt("1593")
		const amountJnqoXuI = BigInt("630")
		const recipientekdg7jU = accounts[1]
		const _ref5xDvxmp5 = accounts[2]
		const _ref4CuiB3gK = accounts[5]
		const _ref3pZRoyfH = accounts[0]
		const _ref2upbx3TZ = accounts[0]
		const _ref1SEDbRZV = accounts[0]
		const valuePKDm1p3 = BigInt("473")
		const nullHw9xYR2 = await contractfKxruNG.allowanceUSDT.call(accountmxKXhl, {from: accounts[2]});
		await contractfKxruNG.purchase.call(valueoq3n18, _ref1bGZ3e4t, _ref2OnVjzDp, _ref3AGkj0gt, _ref4QKeAcOl, _ref5qmGc39l, commentjYyvnd5, {from: accounts[4]});
		await contractfKxruNG.purchase.call(valueGuvLNzm, _ref1HiTLfz3, _ref2RJupqqN, _ref3CX7678E, _ref4aZfXO6q, _ref5GPABXe7, commentrGj3BQ, {from: accounts[1]});
		await contractfKxruNG.setFee.call(newFeeV2JdoNE, {from: accounts[4]});
		await contractfKxruNG.setMinimum.call(newMinimumA293wNE, {from: accounts[4]});
		await contractfKxruNG.freezeAndTransfer.call(recipientekdg7jU, amountJnqoXuI, _periodYykExom, {from: accounts[0]});
		await contractfKxruNG.buy.call(valuePKDm1p3, _ref1SEDbRZV, _ref2upbx3TZ, _ref3pZRoyfH, _ref4CuiB3gK, _ref5xDvxmp5, {from: accounts[0]});

		await expect(contractfKxruNG.allowanceUSDT.call(accountmxKXhl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddri2wYju = accounts[3]
		const FOSTERAddrDG6wXui = accounts[3]
		const initialRateYE6kC3Y = BigInt("336")
		const initialPeriodrg1RmCr = BigInt("85")
		const initialOwners0TKnpM = accounts[3]
		const contractGu0E5c = await Reseller.new(USDTAddri2wYju, FOSTERAddrDG6wXui, initialRateYE6kC3Y, initialPeriodrg1RmCr, initialOwners0TKnpM, {from: accounts[2]});
		const valueXLwxk5S = BigInt("634")
		const commentl7eNtic = "hpy4oxhKzaNqT1IJ1X2nKbYgymTdp68jTeB9you7pe3Ad7ryjLJTBTYSYeHp01naEG71RSYkVkl"
		const _ref5T7mHhai = accounts[1]
		const _ref4RDwf1Fy = accounts[3]
		const _ref3Eq0qECN = "0x0000000000000000000000000000000000000001"
		const _ref206vDh1 = accounts[2]
		const _ref1r5gvWQn = accounts[1]
		const valuegtAPFHJ = BigInt("517")
		await contractGu0E5c.withdraw.call(valueXLwxk5S, {from: accounts[1]});
		await contractGu0E5c.purchase.call(valuegtAPFHJ, _ref1r5gvWQn, _ref206vDh1, _ref3Eq0qECN, _ref4RDwf1Fy, _ref5T7mHhai, commentl7eNtic, {from: accounts[4]});

		await expect(contractGu0E5c.withdraw.call(valueXLwxk5S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmUxQ5Un = accounts[3]
		const FOSTERAddrt2JwKa3 = accounts[2]
		const initialRateFr6JdWs = BigInt("1253")
		const initialPeriodmAUvRJX = BigInt("700")
		const initialOwnerbghCLLs = accounts[4]
		const contract0YqmP7 = await Reseller.new(USDTAddrmUxQ5Un, FOSTERAddrt2JwKa3, initialRateFr6JdWs, initialPeriodmAUvRJX, initialOwnerbghCLLs, {from: accounts[5]});
		const accountfibpRrb = accounts[4]
		const valued2bJUJT = BigInt("698")
		const _periodgyRBQHy = BigInt("1691")
		const amountzs8oUDR = BigInt("1193")
		const recipientYI2w20v = accounts[3]
		const newFeeHJo3EY = BigInt("45")
		const account0dYurd = accounts[3]
		const nullIPl5bHW = await contract0YqmP7.balanceFOSTER.call(accountfibpRrb, {from: accounts[0]});
		await contract0YqmP7.withdraw.call(valued2bJUJT, {from: accounts[1]});
		await contract0YqmP7.freezeAndTransfer.call(recipientYI2w20v, amountzs8oUDR, _periodgyRBQHy, {from: accounts[2]});
		await contract0YqmP7.switchState.call({from: accounts[4]});
		await contract0YqmP7.setFee.call(newFeeHJo3EY, {from: accounts[0]});
		const nullzqAdtAe = await contract0YqmP7.balanceUSDT.call(account0dYurd, {from: accounts[5]});

		await expect(contract0YqmP7.balanceFOSTER.call(accountfibpRrb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddra4fjRuV = accounts[3]
		const FOSTERAddrPPXe4cq = accounts[3]
		const initialRatex0RZCf = BigInt("336")
		const initialPeriodf9yndgn = BigInt("85")
		const initialOwnerYKvGZi3 = accounts[3]
		const contractMuHj16w = await Reseller.new(USDTAddra4fjRuV, FOSTERAddrPPXe4cq, initialRatex0RZCf, initialPeriodf9yndgn, initialOwnerYKvGZi3, {from: accounts[2]});
		const _ref5UxJ0TnY = accounts[2]
		const _ref4Ib2Ek1 = accounts[5]
		const _ref3BU7s2TU = accounts[0]
		const _ref2kxQq3r9 = accounts[0]
		const _ref1D2kM55 = accounts[0]
		const valueTnJTYAi = BigInt("454")
		await contractMuHj16w.buy.call(valueTnJTYAi, _ref1D2kM55, _ref2kxQq3r9, _ref3BU7s2TU, _ref4Ib2Ek1, _ref5UxJ0TnY, {from: accounts[0]});

		await expect(contractMuHj16w.buy.call(valueTnJTYAi, _ref1D2kM55, _ref2kxQq3r9, _ref3BU7s2TU, _ref4Ib2Ek1, _ref5UxJ0TnY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrV9CuzUn = accounts[1]
		const FOSTERAddrmj7Rnbm = accounts[3]
		const initialRatec8GWDb5 = BigInt("1942")
		const initialPeriodRcI5TxF = BigInt("377")
		const initialOwnerCUmqF8n = accounts[0]
		const contracty60RjN = await Reseller.new(USDTAddrV9CuzUn, FOSTERAddrmj7Rnbm, initialRatec8GWDb5, initialPeriodRcI5TxF, initialOwnerCUmqF8n, {from: accounts[3]});
		const valueVrIAmk = BigInt("407")
		const recipientXAV8CO = accounts[4]
		const ERC20Tokeni5Peh4N = accounts[3]
		const comments2r7tqM = "9NfGU5ok4Jb7h1mnhOydpmXAaCm8qUf7smvSMXyi7ALbbeHpiUyzJKbxL"
		const _ref5OR2GRL = accounts[4]
		const _ref4HSP4cx6 = accounts[4]
		const _ref3qJxhb1C = accounts[4]
		const _ref2cFbonQ = accounts[4]
		const _ref1CYUs3AT = "0x0000000000000000000000000000000000000001"
		const valueaVkh8o2 = BigInt("1770")
		const newFeePZgZp1S = BigInt("11")
		const accountT7jOzf = accounts[4]
		const newMinimumAFewva = BigInt("1777")
		await contracty60RjN.withdrawERC20.call(ERC20Tokeni5Peh4N, recipientXAV8CO, valueVrIAmk, {from: accounts[3]});
		await contracty60RjN.purchase.call(valueaVkh8o2, _ref1CYUs3AT, _ref2cFbonQ, _ref3qJxhb1C, _ref4HSP4cx6, _ref5OR2GRL, comments2r7tqM, {from: accounts[2]});
		await contracty60RjN.switchState.call({from: accounts[2]});
		await contracty60RjN.setFee.call(newFeePZgZp1S, {from: accounts[1]});
		const nullbXqL8cB = await contracty60RjN.balanceUSDT.call(accountT7jOzf, {from: accounts[2]});
		await contracty60RjN.setMinimum.call(newMinimumAFewva, {from: accounts[0]});

		await expect(contracty60RjN.withdrawERC20.call(ERC20Tokeni5Peh4N, recipientXAV8CO, valueVrIAmk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrr2RYOf = accounts[3]
		const FOSTERAddrymeP0jB = accounts[3]
		const initialRateKG6s5T = BigInt("336")
		const initialPeriodgsciuz1 = BigInt("85")
		const initialOwner036df9 = accounts[3]
		const contract95uYBo = await Reseller.new(USDTAddrr2RYOf, FOSTERAddrymeP0jB, initialRateKG6s5T, initialPeriodgsciuz1, initialOwner036df9, {from: accounts[2]});
		const amountcm3Q8ct = BigInt("1517")
		const commentkec3Ghk = "bEToyGpTSNvU6bCLsFmnbis9RVL8Jm5"
		const _ref5Y9A1Yd6 = accounts[0]
		const _ref4eM5OI61 = accounts[5]
		const _ref3oBt9uSs = accounts[0]
		const _ref2O1EKYcl = accounts[1]
		const _ref1zTvstTv = accounts[3]
		const valueA9ZfxHS = BigInt("883")
		const _ref5we7ekyv = accounts[2]
		const _ref4OrOZ7bK = accounts[5]
		const _ref3Vb56HfE = accounts[1]
		const _ref2orGlqLx = accounts[0]
		const _ref1Q3CSit6 = accounts[0]
		const valueQFwlRXB = BigInt("454")
		const nulltqX6EGn = await contract95uYBo.getEstimation.call(amountcm3Q8ct, {from: accounts[1]});
		await contract95uYBo.purchase.call(valueA9ZfxHS, _ref1zTvstTv, _ref2O1EKYcl, _ref3oBt9uSs, _ref4eM5OI61, _ref5Y9A1Yd6, commentkec3Ghk, {from: accounts[1]});
		await contract95uYBo.buy.call(valueQFwlRXB, _ref1Q3CSit6, _ref2orGlqLx, _ref3Vb56HfE, _ref4OrOZ7bK, _ref5we7ekyv, {from: accounts[0]});

		assert.equal(nulltqX6EGn, 509712)
		await expect(contract95uYBo.purchase.call(valueA9ZfxHS, _ref1zTvstTv, _ref2O1EKYcl, _ref3oBt9uSs, _ref4eM5OI61, _ref5Y9A1Yd6, commentkec3Ghk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTMjFweP = accounts[3]
		const FOSTERAddrkRODoQ = accounts[3]
		const initialRateN16wjM = BigInt("336")
		const initialPeriodRFik16X = BigInt("85")
		const initialOwnerCryW7T = accounts[3]
		const contractu7LiW7S = await Reseller.new(USDTAddrTMjFweP, FOSTERAddrkRODoQ, initialRateN16wjM, initialPeriodRFik16X, initialOwnerCryW7T, {from: accounts[2]});
		const accountysPrbmX = accounts[1]
		const commentZQJ5Uk = "hpy4oxhKzaNqT1IJ1X2nKbYgymTdp68jTeB9you7pe3Ad7ryjLJTBTYSYeHp01naEG71RSYkVkl"
		const _ref5eE92ggx = accounts[0]
		const _ref4dUVIhdM = accounts[3]
		const _ref3v1FqKK8 = "0x0000000000000000000000000000000000000001"
		const _ref2sJglB9 = accounts[2]
		const _ref1gWkY1Fj = accounts[1]
		const valuedko4i6g = BigInt("517")
		const newBoss4vkNo9gm = accounts[5]
		const nulllDpTxk = await contractu7LiW7S.balanceUSDT.call(accountysPrbmX, {from: accounts[3]});
		await contractu7LiW7S.purchase.call(valuedko4i6g, _ref1gWkY1Fj, _ref2sJglB9, _ref3v1FqKK8, _ref4dUVIhdM, _ref5eE92ggx, commentZQJ5Uk, {from: accounts[4]});
		await contractu7LiW7S.deposeBoss4.call(newBoss4vkNo9gm, {from: accounts[4]});

		await expect(contractu7LiW7S.balanceUSDT.call(accountysPrbmX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHV4tifo = accounts[3]
		const FOSTERAddrT2ykHFX = accounts[3]
		const initialRateRNXSyp5 = BigInt("336")
		const initialPeriodD6yGrVX = BigInt("85")
		const initialOwnerwFtOkLF = accounts[3]
		const contractF5IIoVC = await Reseller.new(USDTAddrHV4tifo, FOSTERAddrT2ykHFX, initialRateRNXSyp5, initialPeriodD6yGrVX, initialOwnerwFtOkLF, {from: accounts[2]});
		const commentO3zGSIa = "hpy4oxhKzaNqT1IJ1X2nKbYgymTdp68jTeB9you7pe3Ad7ryjLJTBTYSYeHp01naEG71RSYkVkl"
		const _ref5pDYgNOk = accounts[0]
		const _ref4ffIjkq8 = accounts[3]
		const _ref3ABAP9lF = "0x00000000000000000000000000000000000000-1"
		const _ref2pUUJLQM = accounts[2]
		const _ref1YZFAbFD = accounts[1]
		const valueYKGaieF = BigInt("517")
		await contractF5IIoVC.purchase.call(valueYKGaieF, _ref1YZFAbFD, _ref2pUUJLQM, _ref3ABAP9lF, _ref4ffIjkq8, _ref5pDYgNOk, commentO3zGSIa, {from: accounts[4]});

		await expect(contractF5IIoVC.purchase.call(valueYKGaieF, _ref1YZFAbFD, _ref2pUUJLQM, _ref3ABAP9lF, _ref4ffIjkq8, _ref5pDYgNOk, commentO3zGSIa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})