const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressSWa7dT = accounts[1]
		const addressXmkBwmS = accounts[1]
		const addressUqFh7nF = accounts[1]
		const GardenContractV2g0vjcKX = await GardenContractV2.new(addressSWa7dT, addressXmkBwmS, addressUqFh7nF, {from: accounts[0]});
		const uinthjSLKb = BigInt("232")
		const stringxycWW7 = "tVScgKVJIFKLdCSxYedBQIX6nCtcPGVvXtNMhlUvpp2ePAPrqlmOQuApxMvjBvUszeTzsvG4"
		const stringaB1ZFhs = "IwiXmwI2GFswxgPNiXHKe5cRbObb3lXj3Li4S7Gc3HJwKZ5bnSNUhRHGMdfbVyFF1Sxz"
		const uint2562VQWxa = await GardenContractV2g0vjcKX.timeUntilNextTLP.call(stringxycWW7, uinthjSLKb, {from: accounts[2]});
		const uint256fpzKkt = await GardenContractV2g0vjcKX.totalGardenSupply.call(stringaB1ZFhs, {from: accounts[0]});

		await expect(GardenContractV2g0vjcKX.timeUntilNextTLP.call(stringxycWW7, uinthjSLKb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdAkEvVL = accounts[0]
		const addresseDwqdKI = accounts[2]
		const address292ygR = accounts[2]
		const GardenContractV2gZmImhp = await GardenContractV2.new(addressdAkEvVL, addresseDwqdKI, address292ygR, {from: accounts[0]});
		const uintiaR10g = BigInt("244")
		const uintXjDQd4J = BigInt("11")
		const uintNL3P4S7 = BigInt("104")
		const stringfW6xkW = "YXUJo1haNgukmu4mCH2I8A3dQqpW6sTKsugXL7pDKESUuDuEDbYznGX2oasZ1Xlrf7ksF5tsdPdTdhYzpF0uSxrI"
		const uint2KpnZG = BigInt("155")
		const stringsYLfiq = "dW3gzGOM9Tj7GFbNzpEL8Qqb4JNNB1Dq8mQY4c59Lf"
		const uintrP1sajU = BigInt("182")
		const stringHzIKbI1 = "16vm4nn2bPDGkVnQuI2r6BOqxaQTGzpcAa2tDtoPNM"
		const uintafdTu5a = BigInt("134")
		const uint8Q4xdrKg = await GardenContractV2gZmImhp.zeroHoldings.call(uintXjDQd4J, uintiaR10g, {from: accounts[2]});
		const uint256Ri8dupe = await GardenContractV2gZmImhp.timeUntilNextTLP.call(stringfW6xkW, uintNL3P4S7, {from: accounts[2]});
		const stringvpIzMn4 = await GardenContractV2gZmImhp.withdraw.call(stringsYLfiq, uint2KpnZG, {from: accounts[0]});
		const stringwvjcXwT = await GardenContractV2gZmImhp.claimDecompose.call(stringHzIKbI1, uintrP1sajU, {from: accounts[4]});
		const uint256AO1Zxf3 = await GardenContractV2gZmImhp.getTotalrTLPHarvest.call(uintafdTu5a, {from: accounts[5]});

		await expect(GardenContractV2gZmImhp.zeroHoldings.call(uintXjDQd4J, uintiaR10g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresslPT51B7 = accounts[4]
		const addresse6xwwVC = accounts[5]
		const addressPaAw7nV = accounts[1]
		const GardenContractV2o22Z8AE = await GardenContractV2.new(addresslPT51B7, addresse6xwwVC, addressPaAw7nV, {from: accounts[4]});
		const stringR0EIte7 = ""
		const stringesCBgMU = "yyWEvy4yLfaLOhbsVmi9VMJGWRQIgNjiThIWHE3LC396YuFtUODULCw6MS2iqr9qEcVdOziw4bR5iVoGxKKAu"
		const uint2rGP8i = BigInt("70")
		const stringnYZ4InT = "ikOjXc4rSpz8f2VOh3kc6TM9nyn92yV7e2nCL3R5UwkA8FEUE2Iw5arNdx"
		const boolQUkIGv6 = false
		const uintv1hZgsY = BigInt("152")
		const stringnfrzAT3 = "Fv5ObCTDZaAXqAgvSKlXSGRGJRVGWNvmSoOWr59ALLW3FqiOB9l9"
		const uintZrWZXQ4 = BigInt("878")
		const uint256mkXf7KN = await GardenContractV2o22Z8AE.totalTLPGrown.call(stringR0EIte7, {from: accounts[0]});
		const uint256b8hWJ4h = await GardenContractV2o22Z8AE.totalTLPBurnt.call(stringesCBgMU, {from: accounts[0]});
		await GardenContractV2o22Z8AE.totalBedSupply.call(stringnYZ4InT, uint2rGP8i, {from: accounts[5]});
		const uint256sKrLbRj = await GardenContractV2o22Z8AE.plant.call(uintZrWZXQ4, stringnfrzAT3, uintv1hZgsY, boolQUkIGv6, {from: accounts[1]});

		await expect(GardenContractV2o22Z8AE.totalTLPGrown.call(stringR0EIte7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressW53Mbe = accounts[1]
		const addressxKign68 = accounts[3]
		const addresskQdSYZ = "0x0000000000000000000000000000000000000001"
		const GardenContractV2x1QP3hF = await GardenContractV2.new(addressW53Mbe, addressxKign68, addresskQdSYZ, {from: accounts[4]});
		const uintUkG9t5i = BigInt("128")
		const stringqplWRTa = "V3S7nIihc5SlRbGJYUXFA0mdFRD"
		const addressOpqIvk5 = accounts[4]
		const stringjixAZ2 = "3G4hrb31y6kekauMQ4J36ewIGLm2R1c4Le1N7j53cFjcM8lanSbP6T"
		const stringzQfsYPw = "Tdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK4haVHlGHr9TN6tfT5iv0"
		const uint256D5OoPGi = await GardenContractV2x1QP3hF.growthRemaining.call(addressOpqIvk5, stringqplWRTa, uintUkG9t5i, {from: accounts[3]});
		const uint256hR1HyYv = await GardenContractV2x1QP3hF.totalTLPBurnt.call(stringjixAZ2, {from: accounts[0]});
		const uint256cfR6Ir = await GardenContractV2x1QP3hF.totalTLPGrowing.call(stringzQfsYPw, {from: accounts[0]});

		await expect(GardenContractV2x1QP3hF.growthRemaining.call(addressOpqIvk5, stringqplWRTa, uintUkG9t5i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresshPVDe8m = accounts[3]
		const addressdOJk22L = accounts[1]
		const addressF9n2M9j = accounts[0]
		const GardenContractV2CC9Mdfb = await GardenContractV2.new(addresshPVDe8m, addressdOJk22L, addressF9n2M9j, {from: accounts[1]});
		const stringY6CcnnU = "emGBiSW8EE7WTXQk"
		const addressTk1v1dV = accounts[3]
		const uintSfOm1v2 = BigInt("58")
		const uintZzA1451 = BigInt("219")
		const uintyncrUzn = BigInt("139")
		const stringSHI3j4B = "PuowverqCXjBu9DKnL0fwQxXtan349UkXMN1PAWM5QGK9N3PwdhPmkN1LnUDPFwmeyhgMEaXYjM2r23RZMy29q1DWgQs4cviFQ"
		const stringhobnN0x = "ovHU6lmOAlqfLqIJv2UcKbM8EUHoW9zFrOE9JQQm6pta8IeAtejCUYLCdFWrUBve6NmWpWUhafDZ"
		const stringeXmRRVe = "lEiGU0oKn4AT5lhRjpQqY"
		const stringQpq8TMv = await GardenContractV2CC9Mdfb.harvestAllBeds.call(stringY6CcnnU, {from: accounts[3]});
		const addressLSASDUX = await GardenContractV2CC9Mdfb.renounceTokenOwner.call(addressTk1v1dV, {from: accounts[0]});
		const uint8vATHULg = await GardenContractV2CC9Mdfb.zeroHoldings.call(uintZzA1451, uintSfOm1v2, {from: accounts[0]});
		const stringCdDYUzx = await GardenContractV2CC9Mdfb.claimDecompose.call(stringSHI3j4B, uintyncrUzn, {from: accounts[2]});
		const uint256kwTI1Pf = await GardenContractV2CC9Mdfb.totalTLPBurnt.call(stringhobnN0x, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gcM21bR = await GardenContractV2CC9Mdfb.totalTLPBurnt.call(stringeXmRRVe, {from: accounts[3]});

		await expect(GardenContractV2CC9Mdfb.harvestAllBeds.call(stringY6CcnnU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressNFj7gPC = accounts[3]
		const addressddqBjrg = accounts[1]
		const addressoKa5X4D = accounts[2]
		const GardenContractV2nvF7Ow = await GardenContractV2.new(addressNFj7gPC, addressddqBjrg, addressoKa5X4D, {from: "0x0000000000000000000000000000000000000001"});
		const stringkUGuVMm = "JXa54OWn4vT4yEuQkwPwCiGXbAwN7qeoLw72vfDbKkIybGoFSceMWkybRM2AratKuKjpy2GH96Jx2frgxoAIBQekNjBfhL"
		const addressYOxf6Ir = accounts[0]
		const stringxuk9m6H = "t4WLfcA9CTieNrFA9fwBHrM5qBiRtJezQlCVmogfbYlDkpWMsyrouExX62dfbafaQA5dsKKVwQ7hsu"
		const stringSN7yIlq = await GardenContractV2nvF7Ow.harvestAllBeds.call(stringkUGuVMm, {from: accounts[5]});
		const addressQtfiPan = await GardenContractV2nvF7Ow.changeOwner.call(addressYOxf6Ir, {from: accounts[1]});
		const uint256QMJGnq = await GardenContractV2nvF7Ow.totalTLPBurnt.call(stringxuk9m6H, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GardenContractV2', async () => {
		const addressemFr6HQ = accounts[0]
		const addressOJO8ASr = accounts[0]
		const addressBGa55SG = accounts[1]
		const GardenContractV2VSi3jwM = await GardenContractV2.new(addressemFr6HQ, addressOJO8ASr, addressBGa55SG, {from: accounts[1]});
		const stringCgmGa4V = "z3T7eluc3vEXI8IifJFWjAHhPly5tL3sCoR3FysiNPU6b6e4tAvSGaYlO3EBepAGq7boKBuvwbmsxu1WdaQG"
		const addressQUqkvf = accounts[2]
		const uintPoHXgRW = BigInt("225")
		const stringf7sDlX9 = "xul"
		const uintW9MLTz5 = BigInt("219")
		const stringyXyQvxD = "Ocx3P7gTDgwAPnk0gEtQ5hLqGeawInsRcTh5qVKrXJhwanf4XU9QIWixMeuEN0LQjhR4RG9tlOq3ZzBBKs8jm8dHJGMdgF"
		const stringVhnmgdK = "QuHCiK3vPvqfe7iNx1cpRbhaAAB52d3JaqfmQAAc87Kp8PTV85f7erRo"
		const uintu7VepMV = BigInt("459")
		const uintXmOaJOu = BigInt("53")
		const stringo0h49Pw = "7XGuyX8eJ49doJhFmbgmCNTBN2Aiz3e2zizfwCwrpELdKFb55sIFSIcfffPdits2MI494HAp2Qb7JULSITe2bkcfa5Qnw"
		const uint256itx3URd = await GardenContractV2VSi3jwM.balanceOf.call(addressQUqkvf, stringCgmGa4V, {from: accounts[5]});
		await GardenContractV2VSi3jwM.totalBedSupply.call(stringf7sDlX9, uintPoHXgRW, {from: accounts[2]});
		const uint256ZmcBDXr = await GardenContractV2VSi3jwM.timeUntilNextTLP.call(stringyXyQvxD, uintW9MLTz5, {from: accounts[0]});
		const uint256ZI3gREt = await GardenContractV2VSi3jwM.totalTLPGrown.call(stringVhnmgdK, {from: accounts[4]});
		const stringvaxd0r = await GardenContractV2VSi3jwM.decompose.call(stringo0h49Pw, uintXmOaJOu, uintu7VepMV, {from: accounts[5]});

		await expect(GardenContractV2VSi3jwM.balanceOf.call(addressQUqkvf, stringCgmGa4V, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressipJ6fxy = accounts[2]
		const addresst0gtMH = "0x0000000000000000000000000000000000000001"
		const addressaqn7fJT = accounts[4]
		const GardenContractV2xSswD5k = await GardenContractV2.new(addressipJ6fxy, addresst0gtMH, addressaqn7fJT, {from: accounts[2]});
		const stringfuHhA1 = "3IYy8Sgnkec"
		const addressXqQrT8K = accounts[2]
		const addresssBOED8m = accounts[4]
		const addresslMrmgK = accounts[3]
		const uintL7iYwB = BigInt("1523")
		const uintamxtvBp = BigInt("217")
		const stringxkBSt7x = "4fsngBvVMOqd1Gwop5lqw3k2bRH5y9ZBSNnCaQ3X9tsa9NGB22oCPhRKBaIOrtYROOLdH4R4559mKQXCx"
		const uint256SNfXuk = await GardenContractV2xSswD5k.totalTLPDecomposed.call(stringfuHhA1, {from: accounts[0]});
		const addressOCRDFEG = await GardenContractV2xSswD5k.changeOwner.call(addressXqQrT8K, {from: accounts[0]});
		const addressGJ4zWu = await GardenContractV2xSswD5k.addTokenOwner.call(addresslMrmgK, addresssBOED8m, {from: accounts[2]});
		const stringxXXOZ3p = await GardenContractV2xSswD5k.decompose.call(stringxkBSt7x, uintamxtvBp, uintL7iYwB, {from: accounts[2]});

		await expect(GardenContractV2xSswD5k.totalTLPDecomposed.call(stringfuHhA1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPhHlvKm = accounts[1]
		const addressS1MyZxQ = accounts[3]
		const addressSR16XLJ = "0x0000000000000000000000000000000000000001"
		const GardenContractV2x1QP3hF = await GardenContractV2.new(addressPhHlvKm, addressS1MyZxQ, addressSR16XLJ, {from: accounts[4]});
		const addressHA6oSmD = accounts[2]
		const uinthhe8tFR = BigInt("128")
		const stringqplWRTa = "V3S7nIihc5SlRbGJYUXFA0mdFRD"
		const addressgwu8UJT = accounts[5]
		const uintephA11O = BigInt("201")
		const stringKwT3DFF = "YVGcdmToVivzwW59PhA8z5GJ7MBpSs44M"
		const addressuFY3qD8 = accounts[4]
		const stringzQfsYPw = "Tdz45XrvNDjMGNpUJYoB72zyUFlN8Sz9yvgDBD2teJ5WPEuMyhzK4haVHlGHr9TN6tfT5iv0"
		const addressPVzJdr = await GardenContractV2x1QP3hF.changeOwner.call(addressHA6oSmD, {from: accounts[0]});
		const uint256D5OoPGi = await GardenContractV2x1QP3hF.growthRemaining.call(addressgwu8UJT, stringqplWRTa, uinthhe8tFR, {from: accounts[3]});
		const uint256zE4ap8H = await GardenContractV2x1QP3hF.growthRemaining.call(addressuFY3qD8, stringKwT3DFF, uintephA11O, {from: accounts[0]});
		const uint256cfR6Ir = await GardenContractV2x1QP3hF.totalTLPGrowing.call(stringzQfsYPw, {from: accounts[0]});

		await expect(GardenContractV2x1QP3hF.changeOwner.call(addressHA6oSmD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressUqNC7xu = accounts[0]
		const addressppkNQrZ = accounts[0]
		const addressALpYwu = accounts[1]
		const GardenContractV2VSi3jwM = await GardenContractV2.new(addressUqNC7xu, addressppkNQrZ, addressALpYwu, {from: accounts[1]});
		const uintKjKp6lm = BigInt("202")
		const stringJkAV8pk = "H6pQXJ6kYkvWmINMQ"
		const addressVAA8C3 = accounts[1]
		const uintzltFXNe = BigInt("225")
		const stringf7sDlX9 = "xul"
		const uintMqHCEFm = BigInt("219")
		const stringyXyQvxD = "Ocx3P7gTDgwAPnk0gEtQ5hLqGeawInsRcTh5qVKrXJhwanf4XU9QIWixMeuEN0LQjhR4RG9tlOq3ZzBBKs8jm8dHJGMdgF"
		const uints0qbl6S = BigInt("334")
		const uinthvwaXbI = BigInt("165")
		const stringmY6L22n = "GasnxthRapqlC4qWrM9M6WYF4fLwoLYaUkkVJzKv3gJabjPG6J9QgGjxTBME"
		const stringVhnmgdK = "QuHCiK3vPvqfe7iNx1cpRbhaAAB52d3JaqfmQAAc87Kp8PTHV85f7erRo"
		const uintPviEP2y = BigInt("459")
		const uintymI69Mm = BigInt("53")
		const stringo0h49Pw = "7XGuyX8eJ49doJhFmbgmCNTBN2Aiz3e2zizfwCwrpELdKFb55sIFSIcfffPdits2MI494HAp2Qb7JULSITe2bkcfa5Qnw"
		const stringtuOQqVz = await GardenContractV2VSi3jwM.withdraw.call(stringJkAV8pk, uintKjKp6lm, {from: accounts[0]});
		const addressoEI0HgS = await GardenContractV2VSi3jwM.changeBenefitiary.call(addressVAA8C3, {from: accounts[1]});
		await GardenContractV2VSi3jwM.totalBedSupply.call(stringf7sDlX9, uintzltFXNe, {from: accounts[2]});
		const uint256ZmcBDXr = await GardenContractV2VSi3jwM.timeUntilNextTLP.call(stringyXyQvxD, uintMqHCEFm, {from: accounts[0]});
		const stringdkwIcPG = await GardenContractV2VSi3jwM.decompose.call(stringmY6L22n, uinthvwaXbI, uints0qbl6S, {from: accounts[3]});
		const uint256ZI3gREt = await GardenContractV2VSi3jwM.totalTLPGrown.call(stringVhnmgdK, {from: accounts[4]});
		const stringvaxd0r = await GardenContractV2VSi3jwM.decompose.call(stringo0h49Pw, uintymI69Mm, uintPviEP2y, {from: accounts[5]});

		await expect(GardenContractV2VSi3jwM.withdraw.call(stringJkAV8pk, uintKjKp6lm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressbC2aTck = accounts[1]
		const addressthOtNdM = accounts[1]
		const addressWsa8lzN = accounts[1]
		const GardenContractV2g0vjcKX = await GardenContractV2.new(addressbC2aTck, addressthOtNdM, addressWsa8lzN, {from: accounts[0]});
		const uintOgdRU3E = BigInt("34")
		const stringeaATOdD = "yBwvAUagZe9IEJWMQeH8ABcBee9wnnATZZb625C"
		const uintYTcXowD = BigInt("232")
		const stringxycWW7 = "tVScgKVJIFKLdCSxYedBQIX6nCtcPGVvXtNMhlUvpp2ePArqlmOQuApxMvjBvUszeTzsvG4"
		const address4F4gJ4 = accounts[0]
		const stringaB1ZFhs = "IwiXmwI2GFswxgPNiXHKe5cRbObb3lXj3Li4S7Gc3HJwKZ5bnSNUhRHGMdfbVyFF1Sxz"
		await GardenContractV2g0vjcKX.totalBedSupply.call(stringeaATOdD, uintOgdRU3E, {from: accounts[1]});
		const uint2562VQWxa = await GardenContractV2g0vjcKX.timeUntilNextTLP.call(stringxycWW7, uintYTcXowD, {from: accounts[2]});
		const addressLlLFxW3 = await GardenContractV2g0vjcKX.changeOwner.call(address4F4gJ4, {from: accounts[5]});
		const uint256fpzKkt = await GardenContractV2g0vjcKX.totalGardenSupply.call(stringaB1ZFhs, {from: accounts[0]});

		await expect(GardenContractV2g0vjcKX.totalBedSupply.call(stringeaATOdD, uintOgdRU3E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdFGudY2 = accounts[1]
		const addresscoONoc1 = accounts[1]
		const addressritvb7d = accounts[1]
		const GardenContractV2g0vjcKX = await GardenContractV2.new(addressdFGudY2, addresscoONoc1, addressritvb7d, {from: accounts[0]});
		const uintBNSz8vv = BigInt("227")
		const uintpZ65QyA = BigInt("232")
		const stringxycWW7 = "tVScgKVJIFKLdCSxYedBQIX6nCtcPGVvXtCNMhlUvpp2ePAPrqlmOQuApxMvjBvUszeTzsvG4"
		const stringaB1ZFhs = "IwiXmwI2GFswxgPNiXHKe5cRbObb3lXj3Li4S7Gc3HJwKZ5bnSNUhRHGMdfbVyFF1Sxz"
		const uint256CV9LNyg = await GardenContractV2g0vjcKX.getTotalsTLPHarvest.call(uintBNSz8vv, {from: accounts[0]});
		const uint2562VQWxa = await GardenContractV2g0vjcKX.timeUntilNextTLP.call(stringxycWW7, uintpZ65QyA, {from: accounts[2]});
		const uint256fpzKkt = await GardenContractV2g0vjcKX.totalGardenSupply.call(stringaB1ZFhs, {from: accounts[0]});

		await expect(GardenContractV2g0vjcKX.getTotalsTLPHarvest.call(uintBNSz8vv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressp2c4mDd = accounts[0]
		const addressiFwFmqi = accounts[0]
		const addressxmC3A8T = accounts[1]
		const GardenContractV2VSi3jwM = await GardenContractV2.new(addressp2c4mDd, addressiFwFmqi, addressxmC3A8T, {from: accounts[1]});
		const uintSAtfjqK = BigInt("83")
		const stringNZ7WK8p = "BeJCt9NubGgFGmTlg89iqV28lhHwEF29NE3nuMNh1hpXG12oB9j"
		const stringCgmGa4V = "z3T7eluc3vEXI8IifJFWjAHhPly5tL3sCoR3FysiNPU6b6e4tAvSGaYlO3EBepAGq7boKBuvwbmsxu1WdaQG"
		const addressmyRiE7L = accounts[2]
		const uintLmYHlxK = BigInt("236")
		const uintcgluzUa = BigInt("225")
		const stringf7sDlX9 = "xul"
		const uintszvyZxH = BigInt("219")
		const stringyXyQvxD = "Ocx3P7gTDgwAPnk0gEtQ5hLqGeawInsRcTh5qVKrXJhwanf4XU9QIWixMeuEN0LQjhR4RG9tlOq3ZzBBKs8jm8dHJGMdgF"
		const addressHkllgIt = accounts[3]
		const uintRONLS8a = BigInt("459")
		const uintYqzyyYu = BigInt("69")
		const stringo0h49Pw = "7XGuyX8eJ49doJhFmbgmCNTBN2Aiz3e2zizfwCwrpELdKFb55sIFSIcfffPdits2MI494HAp2Qb7JULSITe2bkcfa5Qnw"
		const stringqXYUO9V = await GardenContractV2VSi3jwM.claimDecompose.call(stringNZ7WK8p, uintSAtfjqK, {from: accounts[2]});
		const uint256itx3URd = await GardenContractV2VSi3jwM.balanceOf.call(addressmyRiE7L, stringCgmGa4V, {from: accounts[5]});
		const uint256abljEdc = await GardenContractV2VSi3jwM.getTotalrTLPHarvest.call(uintLmYHlxK, {from: accounts[0]});
		await GardenContractV2VSi3jwM.totalBedSupply.call(stringf7sDlX9, uintcgluzUa, {from: accounts[2]});
		const uint256ZmcBDXr = await GardenContractV2VSi3jwM.timeUntilNextTLP.call(stringyXyQvxD, uintszvyZxH, {from: accounts[0]});
		const addressa6tZKRY = await GardenContractV2VSi3jwM.changeOwner.call(addressHkllgIt, {from: accounts[1]});
		const stringvaxd0r = await GardenContractV2VSi3jwM.decompose.call(stringo0h49Pw, uintYqzyyYu, uintRONLS8a, {from: accounts[5]});

		await expect(GardenContractV2VSi3jwM.claimDecompose.call(stringNZ7WK8p, uintSAtfjqK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWpc6N0 = accounts[1]
		const addressrz42McM = accounts[1]
		const addressCExnfCH = accounts[1]
		const GardenContractV2g0vjcKX = await GardenContractV2.new(addressWpc6N0, addressrz42McM, addressCExnfCH, {from: accounts[0]});
		const stringaB1ZFhs = "IwiXmwI2GFswxgPNiXHKe5cRbObb3lXj3Li4S7Gc3HJwKZ5bnSNUhRHGMdfbVyFF1Sxz"
		const uint256fpzKkt = await GardenContractV2g0vjcKX.totalGardenSupply.call(stringaB1ZFhs, {from: accounts[0]});

		await expect(GardenContractV2g0vjcKX.totalGardenSupply.call(stringaB1ZFhs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresslJuL7iW = accounts[3]
		const addressInd82PG = accounts[4]
		const addressc9fWGXE = accounts[2]
		const GardenContractV2PwsPHC = await GardenContractV2.new(addresslJuL7iW, addressInd82PG, addressc9fWGXE, {from: accounts[0]});
		const stringDbNXyrZ = "l8SNfC8YvarbgatLHWO5"
		const stringYKAGSol = "BaswSSNaJBCl5xcu9MRk6wW5aEqxifAgR4GydIISDgBrx4Gxo5DkJ5aqVkSyihIcZX5Qu1s2ufIUm"
		const uintpwvQJB = BigInt("97")
		const stringDMJkX6k = "DibluuKBWs2Lojd5xmxTTqNN1Vc3hoqYOoHFaPpJGqGbTY9TlqpjpZuyC61LJtpg5kgoi3FJrtrVFfA3bivs8EfthjouoTq"
		const uintpuTC9Zb = BigInt("217")
		const addressn5VGA77 = accounts[3]
		const uint256sQxic2U = await GardenContractV2PwsPHC.totalTLPGrowing.call(stringDbNXyrZ, {from: accounts[4]});
		const uint256DqtQmSR = await GardenContractV2PwsPHC.totalTLPBurnt.call(stringYKAGSol, {from: accounts[1]});
		const stringEPttKCZ = await GardenContractV2PwsPHC.withdraw.call(stringDMJkX6k, uintpwvQJB, {from: accounts[3]});
		const uint256lGlW3e4 = await GardenContractV2PwsPHC.getTotalrTLPHarvest.call(uintpuTC9Zb, {from: accounts[1]});
		const addressDswihGI = await GardenContractV2PwsPHC.renounceTokenOwner.call(addressn5VGA77, {from: accounts[1]});

		await expect(GardenContractV2PwsPHC.totalTLPGrowing.call(stringDbNXyrZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressr5AUfWH = accounts[1]
		const addressuSrwO0M = accounts[1]
		const addressM7BUjut = accounts[1]
		const GardenContractV2g0vjcKX = await GardenContractV2.new(addressr5AUfWH, addressuSrwO0M, addressM7BUjut, {from: accounts[0]});
		const uintgBbsGSM = BigInt("81")
		const stringaB1ZFhs = "IwiXmwI2GFswxgPNiXHKe5cRbObb3lXj3Li4S7Gc3HJwKZ5bnSNUhRHGMdjbVyFF1Sxz"
		const uint256SAEVvdC = await GardenContractV2g0vjcKX.getTotalrTLPHarvest.call(uintgBbsGSM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fpzKkt = await GardenContractV2g0vjcKX.totalGardenSupply.call(stringaB1ZFhs, {from: accounts[0]});

		await expect(GardenContractV2g0vjcKX.getTotalrTLPHarvest.call(uintgBbsGSM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHSpHail = accounts[1]
		const addressfhyjg5Z = accounts[1]
		const addressJ4bT0uy = accounts[1]
		const GardenContractV2g0vjcKX = await GardenContractV2.new(addressHSpHail, addressfhyjg5Z, addressJ4bT0uy, {from: accounts[0]});
		const uintJaCjNLv = BigInt("812")
		const uintToUAI3A = BigInt("26")
		const stringRe00eNs = "7NHxi7zcTsoWjWctWWMYAMGIjJU7TYD5v8RpD2iFtuwvc7XXMpKdBoDAyxz"
		const addressDjFJHEu = accounts[3]
		const stringaB1ZFhs = "IwiXmwI2GFswxgPNiXHKe5cRbObb3lXj3Li4S7Gc3HJwKZ5bnSNUhRHGMdjbVyFF1Sxz"
		const stringZ9pKnUH = await GardenContractV2g0vjcKX.decompose.call(stringRe00eNs, uintToUAI3A, uintJaCjNLv, {from: accounts[2]});
		const addressUTKFfFR = await GardenContractV2g0vjcKX.renounceTokenOwner.call(addressDjFJHEu, {from: accounts[1]});
		const uint256fpzKkt = await GardenContractV2g0vjcKX.totalGardenSupply.call(stringaB1ZFhs, {from: accounts[0]});

		await expect(GardenContractV2g0vjcKX.decompose.call(stringRe00eNs, uintToUAI3A, uintJaCjNLv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressKcdQBmG = accounts[0]
		const addressOvkETCW = accounts[0]
		const addressLnEa3Ll = accounts[1]
		const GardenContractV2VSi3jwM = await GardenContractV2.new(addressKcdQBmG, addressOvkETCW, addressLnEa3Ll, {from: accounts[1]});
		const addresszX9RAEZ = accounts[4]
		const uintPwg2HA = BigInt("144")
		const stringCgmGa4V = "z3T7eluc3vEXI8IifJFWjAHhPly5tL3sCoR3FysiNPU6b6e4tAvSGaYlO3EBepAGq7boKBuvwbmsxu1WdaQG"
		const addressUL3rapr = accounts[1]
		const address2aJWpV = await GardenContractV2VSi3jwM.changeBenefitiary.call(addresszX9RAEZ, {from: accounts[1]});
		const uint256kRBzNt2 = await GardenContractV2VSi3jwM.getTotalrTLPHarvest.call(uintPwg2HA, {from: accounts[2]});
		const uint256itx3URd = await GardenContractV2VSi3jwM.balanceOf.call(addressUL3rapr, stringCgmGa4V, {from: accounts[5]});

		await expect(GardenContractV2VSi3jwM.getTotalrTLPHarvest.call(uintPwg2HA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspuQaRsd = accounts[1]
		const addressAwiQQLE = accounts[1]
		const addresssAFCKte = accounts[1]
		const GardenContractV2g0vjcKX = await GardenContractV2.new(addresspuQaRsd, addressAwiQQLE, addresssAFCKte, {from: accounts[0]});
		const boolc0LzDAV = true
		const uintx81ssZj = BigInt("218")
		const stringXFChNS4 = "3znAUIpe9MovCMx5Xk2uz8MoEj6cPKRPyg6XrHWlbLM2fB8piwjkkedkJEsNoG2shqXi"
		const uintwq2KCrK = BigInt("1844")
		const uintn42soX = BigInt("228")
		const stringxycWW7 = "tVScgKVJIFKLdCSxYedBQIX6nCtcPGVvXtNMhlUvpp2ePAPrqlmOQuApxMvjBvUszeTzsvG4"
		const uint256HyVi4Np = await GardenContractV2g0vjcKX.plant.call(uintwq2KCrK, stringXFChNS4, uintx81ssZj, boolc0LzDAV, {from: "0x0000000000000000000000000000000000000001"});
		const uint2562VQWxa = await GardenContractV2g0vjcKX.timeUntilNextTLP.call(stringxycWW7, uintn42soX, {from: accounts[2]});

		await expect(GardenContractV2g0vjcKX.plant.call(uintwq2KCrK, stringXFChNS4, uintx81ssZj, boolc0LzDAV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresseJt5tOy = accounts[0]
		const addressjWhuQkg = accounts[0]
		const addressz8mSLvH = accounts[1]
		const GardenContractV2VSi3jwM = await GardenContractV2.new(addresseJt5tOy, addressjWhuQkg, addressz8mSLvH, {from: accounts[1]});
		const stringTa10NNp = "tm1XezrmAGrbv1Wed4UtJDHoI6UuWmeMDv"
		const stringCgmGa4V = "z3T7eluc3vEXI8IifJFWjAHhPly5tL3sCoR3FysiNPU6b6e4tAvSGaYlO3EBepAGq7boKBuvwbmsxu1WdaQG"
		const addressQh7uLv = accounts[3]
		const addressOttytZP = accounts[5]
		const uint256k9C4o0 = await GardenContractV2VSi3jwM.totalTLPBurnt.call(stringTa10NNp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256itx3URd = await GardenContractV2VSi3jwM.balanceOf.call(addressQh7uLv, stringCgmGa4V, {from: accounts[5]});
		const addressNeQOJ8n = await GardenContractV2VSi3jwM.changeBenefitiary.call(addressOttytZP, {from: accounts[2]});

		await expect(GardenContractV2VSi3jwM.totalTLPBurnt.call(stringTa10NNp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXx70vf1 = accounts[3]
		const addresst7micL = accounts[3]
		const addressIP0yp7i = accounts[4]
		const GardenContractV2lGhe9n3 = await GardenContractV2.new(addressXx70vf1, addresst7micL, addressIP0yp7i, {from: accounts[1]});
		const addressmxwm4Si = accounts[2]
		const address93eudz = accounts[3]
		const uintIHCs3ad = BigInt("1382")
		const uintMmfM9VJ = BigInt("105")
		const stringWIfpaPT = "PEl86p"
		const stringybM7i8E = "wkfILVYjBu4t7fB1UljwYKux1OjGnH"
		const uintVdgBo7 = BigInt("164")
		const stringiPc6G0j = "r8GgxctBo77ixha04Slmyl"
		const addressYPcy5lL = await GardenContractV2lGhe9n3.addTokenOwner.call(address93eudz, addressmxwm4Si, {from: accounts[1]});
		const stringoX9oQbj = await GardenContractV2lGhe9n3.decompose.call(stringWIfpaPT, uintMmfM9VJ, uintIHCs3ad, {from: "0x0000000000000000000000000000000000000001"});
		const stringOAymhIG = await GardenContractV2lGhe9n3.harvestAllBeds.call(stringybM7i8E, {from: accounts[2]});
		const stringMNOAQMZ = await GardenContractV2lGhe9n3.claimDecompose.call(stringiPc6G0j, uintVdgBo7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2lGhe9n3.addTokenOwner.call(address93eudz, addressmxwm4Si, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHiqPJ9x = accounts[1]
		const addressFodPiGU = accounts[2]
		const addressfM4Eli8 = "0x0000000000000000000000000000000000000001"
		const GardenContractV24ir2bh = await GardenContractV2.new(addressHiqPJ9x, addressFodPiGU, addressfM4Eli8, {from: accounts[5]});
		const addresstcyG8z = accounts[5]
		const uintUpyFVZJ = BigInt("212")
		const uinttBWqZpR = BigInt("82")
		const uintLJ6WgAM = BigInt("286")
		const uintFyqHK6e = BigInt("225")
		const stringz54FBbA = "ZKE3CqeUL97rWSJzA"
		const string39byzE = "fBw9A2QDWL"
		const uintDpmfh43 = BigInt("150")
		const uintlbKr5Tm = BigInt("201")
		const addressDyy7oK = await GardenContractV24ir2bh.renounceTokenOwner.call(addresstcyG8z, {from: accounts[5]});
		const uint8Gt18h8h = await GardenContractV24ir2bh.setTimeStamp.call(uinttBWqZpR, uintUpyFVZJ, {from: accounts[4]});
		const stringlTbZGfR = await GardenContractV24ir2bh.decompose.call(stringz54FBbA, uintFyqHK6e, uintLJ6WgAM, {from: accounts[2]});
		const uint256AyfR2kl = await GardenContractV24ir2bh.totalTLPGrown.call(string39byzE, {from: accounts[3]});
		const uint8TvOvWf = await GardenContractV24ir2bh.zeroHoldings.call(uintlbKr5Tm, uintDpmfh43, {from: accounts[3]});

		await expect(GardenContractV24ir2bh.renounceTokenOwner.call(addresstcyG8z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXtFAY7l = accounts[1]
		const addressUJqERSH = accounts[4]
		const addressuriPf2P = accounts[2]
		const GardenContractV2bl671U2 = await GardenContractV2.new(addressXtFAY7l, addressUJqERSH, addressuriPf2P, {from: accounts[0]});
		const uintTSUEQpn = BigInt("83")
		const stringoAIAqeE = "WfRIZCuovmLIIwJABPlbI194SgqKaFhqJapJTA4LTHe83QOoSCzCvVMpc0jIaRGpX2ADCP"
		const uintacN7Hvt = BigInt("161")
		const stringncTOa4 = "ROb818axeztdY3JOlaCLCXD5cHexqELPjaKoTyAEd42yAvBAaa5CAm6HwBKU2p"
		const uintSqMHm0h = BigInt("33")
		const stringfxqJRr9 = "tHodfbTmhpuChU95"
		const addressE7Ejlr6 = accounts[5]
		const stringQXFi19o = await GardenContractV2bl671U2.harvest.call(stringoAIAqeE, uintTSUEQpn, {from: accounts[0]});
		const uint256SdRb9IC = await GardenContractV2bl671U2.timeUntilNextTLP.call(stringncTOa4, uintacN7Hvt, {from: accounts[5]});
		const uint256dVNhhrI = await GardenContractV2bl671U2.growthRemaining.call(addressE7Ejlr6, stringfxqJRr9, uintSqMHm0h, {from: accounts[0]});

		await expect(GardenContractV2bl671U2.harvest.call(stringoAIAqeE, uintTSUEQpn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressCe6Vml9 = accounts[1]
		const addressPGXw0G = accounts[1]
		const addresspM4GJx = accounts[1]
		const GardenContractV2g0vjcKX = await GardenContractV2.new(addressCe6Vml9, addressPGXw0G, addresspM4GJx, {from: accounts[0]});
		const uintl6EALQp = BigInt("0")
		const uint256SAEVvdC = await GardenContractV2g0vjcKX.getTotalrTLPHarvest.call(uintl6EALQp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2g0vjcKX.getTotalrTLPHarvest.call(uintl6EALQp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYLeLfwK = accounts[0]
		const addressG1MR5u2 = accounts[0]
		const addressa0sylui = accounts[1]
		const GardenContractV2VSi3jwM = await GardenContractV2.new(addressYLeLfwK, addressG1MR5u2, addressa0sylui, {from: accounts[1]});
		const addressO4RKubL = accounts[2]
		const stringCgmGa4V = "z3T7eluc3vEXI8IifJFWjAHhPly5tL3sCoR3FysiNPU6b6e4tAvSGaYlO3EBepAGq7boKBuvwbmsxu1WdaQG"
		const addressD3sZ9XJ = accounts[2]
		const addressY9GCYmF = accounts[3]
		const addresshtIhrJr = await GardenContractV2VSi3jwM.changeOwner.call(addressO4RKubL, {from: accounts[1]});
		const uint256itx3URd = await GardenContractV2VSi3jwM.balanceOf.call(addressD3sZ9XJ, stringCgmGa4V, {from: accounts[5]});
		const addressbz7QhA = await GardenContractV2VSi3jwM.renounceTokenOwner.call(addressY9GCYmF, {from: accounts[1]});

		await expect(GardenContractV2VSi3jwM.balanceOf.call(addressD3sZ9XJ, stringCgmGa4V, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})