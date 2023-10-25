const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressi76Y8FI = accounts[2]
		const afiControllerC3EI32y = await afiController.new(addressi76Y8FI, {from: accounts[0]});
		const addressE2hco10 = accounts[1]
		const addressLND5Mxp = accounts[3]
		const addresstKCuJc = accounts[3]
		const addresspXKkYHg = accounts[3]
		const addressqWarvf5 = accounts[2]
		const uintc28qqz = BigInt("910")
		const addressWhXh45 = accounts[5]
//		const address814Vgu = await afiControllerC3EI32y.setOneSplit.call(addressE2hco10, {from: accounts[5]});
//		const addressiQvJCcg = await afiControllerC3EI32y.revokeStrategy.call(addresstKCuJc, addressLND5Mxp, {from: accounts[3]});
//		const addressl0NI8A3 = await afiControllerC3EI32y.setVault.call(addressqWarvf5, addresspXKkYHg, {from: accounts[0]});
//		const uintIJJBMM = await afiControllerC3EI32y.setSplit.call(uintc28qqz, {from: accounts[2]});
//		const addressmhRWqn5 = await afiControllerC3EI32y.setStrategist.call(addressWhXh45, {from: accounts[5]});

		await expect(afiControllerC3EI32y.setOneSplit.call(addressE2hco10, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqdtJLRx = accounts[4]
		const afiControllerNHHqNX6 = await afiController.new(addressqdtJLRx, {from: accounts[4]});
		const addressXijdQTW = accounts[1]
		const addressdvUoagF = accounts[1]
		const addressWV8o1Gh = accounts[2]
		const addressh8CBOl9 = accounts[2]
		const addressQCjsE2y = "0x0000000000000000000000000000000000000001"
		const addressOAUVQ6u = accounts[2]
		const addressLgHlqD = accounts[5]
		const addressPOXJ8lR = accounts[4]
//		const addressFFrJHf9 = await afiControllerNHHqNX6.setStrategist.call(addressXijdQTW, {from: accounts[1]});
//		const uintv3mnJMa = await afiControllerNHHqNX6.balanceOf.call(addressdvUoagF, {from: accounts[1]});
//		const addressQCvQzb4 = await afiControllerNHHqNX6.withdrawAll.call(addressWV8o1Gh, {from: accounts[0]});
//		const addresstThSrhg = await afiControllerNHHqNX6.inCaseStrategyTokenGetStuck.call(addressQCjsE2y, addressh8CBOl9, {from: accounts[4]});
//		const addressjTNA4Mx = await afiControllerNHHqNX6.setConverter.call(addressPOXJ8lR, addressLgHlqD, addressOAUVQ6u, {from: accounts[4]});

		await expect(afiControllerNHHqNX6.setStrategist.call(addressXijdQTW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAIhc3Q = accounts[4]
		const afiControllery6mbojT = await afiController.new(addressAIhc3Q, {from: accounts[3]});
		const addressv2Sh5x3 = accounts[1]
		const uintkOYD5nV = BigInt("912")
		const addressMmLdJed = accounts[4]
		const uintKrOoMjZ = BigInt("883")
		const addressUNp5yyx = accounts[5]
		const addressQDeeH13 = "0x0000000000000000000000000000000000000001"
		const uintMm4UfLc = BigInt("1333")
		const addressQzgzpGj = accounts[0]
		const addresstxGFAb = accounts[1]
		const addressnlwg7Pe = await afiControllery6mbojT.setOneSplit.call(addressv2Sh5x3, {from: accounts[3]});
		const uintsZBYPL = await afiControllery6mbojT.setSplit.call(uintkOYD5nV, {from: accounts[3]});
//		const addressDxe8pXb = await afiControllery6mbojT.setGovernance.call(addressMmLdJed, {from: accounts[5]});
//		const addressdpQA9OC = await afiControllery6mbojT.yearn.call(addressQDeeH13, addressUNp5yyx, uintKrOoMjZ, {from: accounts[4]});
//		const addresssmjMXgW = await afiControllery6mbojT.yearn.call(addresstxGFAb, addressQzgzpGj, uintMm4UfLc, {from: accounts[4]});

		await expect(afiControllery6mbojT.setGovernance.call(addressMmLdJed, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTms3Gtb = accounts[2]
		const afiControlleruMbGsRe = await afiController.new(addressTms3Gtb, {from: accounts[4]});
		const addressfKCoXAD = accounts[0]
		const addressymWES1 = accounts[0]
		const uintuPr4hlu = BigInt("1742")
		const addresszIRYMbF = accounts[0]
		const addressXmkt6Ul = accounts[2]
		const addressPRX3rF0 = accounts[3]
		const addressHZG8Xtf = accounts[5]
		const addressXOuTj6Z = "0x0000000000000000000000000000000000000001"
		const addressoAsJGe = await afiControlleruMbGsRe.approveStrategy.call(addressymWES1, addressfKCoXAD, {from: accounts[4]});
//		const addressQ3k5GPh = await afiControlleruMbGsRe.inCaseTokensGetStuck.call(addresszIRYMbF, uintuPr4hlu, {from: accounts[4]});
//		const address8nVu20 = await afiControlleruMbGsRe.setOneSplit.call(addressXmkt6Ul, {from: accounts[2]});
//		const addressJi6hnfH = await afiControlleruMbGsRe.setConverter.call(addressXOuTj6Z, addressHZG8Xtf, addressPRX3rF0, {from: accounts[3]});

		await expect(afiControlleruMbGsRe.inCaseTokensGetStuck.call(addresszIRYMbF, uintuPr4hlu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address16JaZE = accounts[1]
		const afiControllerF0CjoC = await afiController.new(address16JaZE, {from: "0x0000000000000000000000000000000000000001"});
		const uintaWcEPEF = BigInt("1840")
		const addressusWnP0l = accounts[3]
		const addresszLbYv2h = accounts[5]
		const addressgh5C6V = accounts[1]
		const uintdvoV3DF = await afiControllerF0CjoC.getExpectedReturn.call(addresszLbYv2h, addressusWnP0l, uintaWcEPEF, {from: accounts[2]});
		const addresssaRO6A = await afiControllerF0CjoC.setStrategist.call(addressgh5C6V, {from: accounts[2]});
	});

	it('test for afiController', async () => {
		const addresscgybaku = accounts[2]
		const afiControllerUjnwRD = await afiController.new(addresscgybaku, {from: accounts[0]});
		const addressuXrMUF2 = accounts[1]
		const addressqYiaui0 = "0x0000000000000000000000000000000000000001"
		const addressNB6tihh = accounts[5]
		const uintyZwpL8r = BigInt("1253")
		const addressELMfrcz = accounts[3]
		const addressJ7CnlEo = accounts[1]
		const addresswhq6dlm = accounts[5]
//		const addressRlronpl = await afiControllerUjnwRD.revokeStrategy.call(addressqYiaui0, addressuXrMUF2, {from: accounts[1]});
//		const addressihcR0BF = await afiControllerUjnwRD.setOneSplit.call(addressNB6tihh, {from: accounts[0]});
//		const addressGQjQ2M6 = await afiControllerUjnwRD.earn.call(addressELMfrcz, uintyZwpL8r, {from: accounts[3]});
//		const addressefAtRKl = await afiControllerUjnwRD.approveStrategy.call(addresswhq6dlm, addressJ7CnlEo, {from: accounts[2]});

		await expect(afiControllerUjnwRD.revokeStrategy.call(addressqYiaui0, addressuXrMUF2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdTR40Eq = accounts[1]
		const afiControllera3FVnny = await afiController.new(addressdTR40Eq, {from: accounts[1]});
		const addresszonhPxZ = accounts[0]
		const addresshx6A146 = "0x0000000000000000000000000000000000000001"
		const addressJZA855e = accounts[1]
		const addressQN59Xlt = accounts[0]
		const addressq5DYTOE = accounts[3]
		const addressocywiip = "0x0000000000000000000000000000000000000001"
//		const addressGgqPR7B = await afiControllera3FVnny.withdrawAll.call(addresszonhPxZ, {from: accounts[1]});
//		const uintj8fdpnn = await afiControllera3FVnny.balanceOf.call(addresshx6A146, {from: accounts[3]});
//		const addresskNIJWED = await afiControllera3FVnny.setVault.call(addressQN59Xlt, addressJZA855e, {from: accounts[3]});
//		const addresstkqmt9f = await afiControllera3FVnny.approveStrategy.call(addressocywiip, addressq5DYTOE, {from: accounts[4]});

		await expect(afiControllera3FVnny.withdrawAll.call(addresszonhPxZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaIUh6aD = accounts[5]
		const afiControllerdwEOlaX = await afiController.new(addressaIUh6aD, {from: accounts[0]});
		const uintO7FqW8 = BigInt("1017")
		const addresstA6vJ3O = accounts[0]
		const addressTKHFrb = accounts[2]
		const uintN4o5Hc = BigInt("1821")
		const addresskiFxDmx = accounts[3]
		const addressZG0Ldb = accounts[4]
		const addressWefrHdA = "0x0000000000000000000000000000000000000001"
		const addressCypzyML = accounts[1]
		const address6wBWrs = accounts[0]
		const addressDkLvOMh = accounts[3]
		const addressxUDnAZ0 = accounts[5]
		const addressTIp1mqS = accounts[4]
//		const addressYl92h2y = await afiControllerdwEOlaX.yearn.call(addressTKHFrb, addresstA6vJ3O, uintO7FqW8, {from: accounts[0]});
//		const addresstyYuZm = await afiControllerdwEOlaX.yearn.call(addressZG0Ldb, addresskiFxDmx, uintN4o5Hc, {from: accounts[4]});
//		const addressV4HYRbH = await afiControllerdwEOlaX.setConverter.call(address6wBWrs, addressCypzyML, addressWefrHdA, {from: accounts[2]});
//		const addressgvkYJhv = await afiControllerdwEOlaX.withdrawAll.call(addressDkLvOMh, {from: accounts[4]});
//		const addressN8Ynm9k = await afiControllerdwEOlaX.inCaseStrategyTokenGetStuck.call(addressTIp1mqS, addressxUDnAZ0, {from: accounts[0]});

		await expect(afiControllerdwEOlaX.yearn.call(addressTKHFrb, addresstA6vJ3O, uintO7FqW8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressL4FIflq = accounts[2]
		const afiControlleruMbGsRe = await afiController.new(addressL4FIflq, {from: accounts[4]});
		const addressc6xhe8R = accounts[0]
		const addresszeoNShZ = accounts[0]
		const uintU8mDM2S = BigInt("1767")
		const addresseXzXPYp = accounts[0]
		const addressC4CMgBT = accounts[2]
		const addressnJFHXAj = accounts[3]
		const addressmyLXZ78 = accounts[5]
		const addresst2hMK4T = "0x0000000000000000000000000000000000000001"
		const uintjXWKpLA = BigInt("1712")
		const addressshE32TE = accounts[3]
		const addressPsV8T2 = accounts[0]
		const addressoAsJGe = await afiControlleruMbGsRe.approveStrategy.call(addresszeoNShZ, addressc6xhe8R, {from: accounts[4]});
//		const addressWE8PK1s = await afiControlleruMbGsRe.withdraw.call(addresseXzXPYp, uintU8mDM2S, {from: accounts[0]});
//		const address8nVu20 = await afiControlleruMbGsRe.setOneSplit.call(addressC4CMgBT, {from: accounts[2]});
//		const addressJi6hnfH = await afiControlleruMbGsRe.setConverter.call(addresst2hMK4T, addressmyLXZ78, addressnJFHXAj, {from: accounts[3]});
//		const addresslTmZYPj = await afiControlleruMbGsRe.earn.call(addressshE32TE, uintjXWKpLA, {from: "0x0000000000000000000000000000000000000001"});
//		const addressM635j5m = await afiControlleruMbGsRe.withdrawAll.call(addressPsV8T2, {from: accounts[3]});

		await expect(afiControlleruMbGsRe.withdraw.call(addresseXzXPYp, uintU8mDM2S, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address4OipRb = accounts[1]
		const afiControllerN1bC1oz = await afiController.new(address4OipRb, {from: accounts[2]});
		const uintXqPjqYG = BigInt("89")
		const addressQiUotFe = accounts[3]
		const uintjziCQ5O = BigInt("379")
		const addressyyv4W32 = accounts[1]
		const addressWCCc6kP = "0x0000000000000000000000000000000000000001"
		const addressqQLWOlp = accounts[4]
		const addressR27yKHR = accounts[2]
		const addresseg9KWai = accounts[5]
		const uintsLDzKZQ = BigInt("61")
		const addressTXGRixp = accounts[0]
		const addressW2riL4 = accounts[3]
		const addressIqPs292 = accounts[4]
//		const addresslgaIi3Y = await afiControllerN1bC1oz.earn.call(addressQiUotFe, uintXqPjqYG, {from: accounts[0]});
//		const addressdVXZlwS = await afiControllerN1bC1oz.yearn.call(addressWCCc6kP, addressyyv4W32, uintjziCQ5O, {from: accounts[3]});
//		const addressnyfDNAi = await afiControllerN1bC1oz.revokeStrategy.call(addressR27yKHR, addressqQLWOlp, {from: accounts[2]});
//		const addressxNb2YRp = await afiControllerN1bC1oz.setGovernance.call(addresseg9KWai, {from: accounts[2]});
//		const addressPQiLbog = await afiControllerN1bC1oz.earn.call(addressTXGRixp, uintsLDzKZQ, {from: accounts[1]});
//		const addressn6KBrYp = await afiControllerN1bC1oz.revokeStrategy.call(addressIqPs292, addressW2riL4, {from: accounts[4]});

		await expect(afiControllerN1bC1oz.earn.call(addressQiUotFe, uintXqPjqYG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbR7hRFb = accounts[1]
		const afiControllerN1bC1oz = await afiController.new(addressbR7hRFb, {from: accounts[2]});
		const uintk4mdDB8 = BigInt("7")
		const addressVGOptu = accounts[1]
		const addressD7C2ZAQ = accounts[4]
		const uintepIqAeA = BigInt("89")
		const addresst7xxG3f = accounts[3]
		const uint8pXITN = BigInt("1336")
		const uintxOSABmv = BigInt("379")
		const addressXZ4tfl = accounts[1]
		const addresssHmAeJb = "0x0000000000000000000000000000000000000001"
		const addressnAPGm2G = accounts[4]
		const addressdAkFLi = accounts[2]
		const uintvZUpEE = BigInt("595")
		const addressHiw41Xe = accounts[5]
		const uintCms6or = BigInt("61")
		const address5HIeYl = accounts[0]
		const addressB4dFiWi = accounts[3]
		const addressw1ImQYP = accounts[5]
//		const uintmlB8kHa = await afiControllerN1bC1oz.getExpectedReturn.call(addressD7C2ZAQ, addressVGOptu, uintk4mdDB8, {from: accounts[3]});
//		const addresslgaIi3Y = await afiControllerN1bC1oz.earn.call(addresst7xxG3f, uintepIqAeA, {from: accounts[0]});
//		const uintgWCXAfm = await afiControllerN1bC1oz.setSplit.call(uint8pXITN, {from: accounts[0]});
//		const addressdVXZlwS = await afiControllerN1bC1oz.yearn.call(addresssHmAeJb, addressXZ4tfl, uintxOSABmv, {from: accounts[3]});
//		const addressnyfDNAi = await afiControllerN1bC1oz.revokeStrategy.call(addressdAkFLi, addressnAPGm2G, {from: accounts[2]});
//		const uintVjF2Ldu = await afiControllerN1bC1oz.setSplit.call(uintvZUpEE, {from: "0x0000000000000000000000000000000000000001"});
//		const addressxNb2YRp = await afiControllerN1bC1oz.setGovernance.call(addressHiw41Xe, {from: accounts[2]});
//		const addressPQiLbog = await afiControllerN1bC1oz.earn.call(address5HIeYl, uintCms6or, {from: accounts[1]});
//		const addressn6KBrYp = await afiControllerN1bC1oz.revokeStrategy.call(addressw1ImQYP, addressB4dFiWi, {from: accounts[4]});

		await expect(afiControllerN1bC1oz.getExpectedReturn.call(addressD7C2ZAQ, addressVGOptu, uintk4mdDB8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressI0PhGB = accounts[5]
		const afiControllerNnw4Fiq = await afiController.new(addressI0PhGB, {from: accounts[0]});
		const addressslw3hF = "0x0000000000000000000000000000000000000001"
		const addressWiD3lE2 = accounts[1]
		const addressL5fSvHh = accounts[4]
//		const uintXdqbnSQ = await afiControllerNnw4Fiq.balanceOf.call(addressslw3hF, {from: accounts[1]});
//		const addressrDNHKzo = await afiControllerNnw4Fiq.revokeStrategy.call(addressL5fSvHh, addressWiD3lE2, {from: accounts[2]});

		await expect(afiControllerNnw4Fiq.balanceOf.call(addressslw3hF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbbbM6mt = accounts[2]
		const afiControlleruMbGsRe = await afiController.new(addressbbbM6mt, {from: accounts[4]});
		const addressac6A5I2 = "0x0000000000000000000000000000000000000001"
		const addressdgLCZAc = accounts[0]
		const uintiDmLcgF = BigInt("880")
		const addresszCSHQon = accounts[2]
		const addresspi2sis = accounts[4]
//		const addressN30Rt4 = await afiControlleruMbGsRe.setStrategy.call(addressdgLCZAc, addressac6A5I2, {from: accounts[1]});
//		const addressJsj3jts = await afiControlleruMbGsRe.yearn.call(addresspi2sis, addresszCSHQon, uintiDmLcgF, {from: accounts[3]});

		await expect(afiControlleruMbGsRe.setStrategy.call(addressdgLCZAc, addressac6A5I2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressY5ODXh9 = accounts[4]
		const afiControllery6mbojT = await afiController.new(addressY5ODXh9, {from: accounts[3]});
		const addresszXhWFQi = accounts[0]
		const addressyFoqrkA = accounts[0]
		const addresspkxmmZE = accounts[3]
		const uintIEbigLE = BigInt("1333")
		const addressovLCa7 = accounts[1]
		const addressHLkSiLj = accounts[1]
		const addressIAZPx3a = accounts[2]
		const addressvaQxHpi = accounts[4]
//		const addressJCsMdq = await afiControllery6mbojT.setConverter.call(addresspkxmmZE, addressyFoqrkA, addresszXhWFQi, {from: accounts[1]});
//		const addresssmjMXgW = await afiControllery6mbojT.yearn.call(addressHLkSiLj, addressovLCa7, uintIEbigLE, {from: accounts[4]});
//		const addressLNFdsQ = await afiControllery6mbojT.setVault.call(addressvaQxHpi, addressIAZPx3a, {from: accounts[3]});

		await expect(afiControllery6mbojT.setConverter.call(addresspkxmmZE, addressyFoqrkA, addresszXhWFQi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressO1OBUyZ = accounts[1]
		const afiControllerYGKO1VD = await afiController.new(addressO1OBUyZ, {from: accounts[5]});
		const addressVES0m6P = accounts[1]
		const addresse33gbav = accounts[2]
		const uintUdKQkob = BigInt("731")
		const addresstD8lMFO = accounts[3]
		const addressOxzKbCg = accounts[2]
		const addressnHu4cYL = accounts[2]
		const addressrpmUMeB = accounts[3]
		const addressYkV68Ks = accounts[2]
		const addresswAaCp0 = accounts[2]
		const addresslV7Nemh = accounts[4]
		const addressvOMYcLd = await afiControllerYGKO1VD.setRewards.call(addressVES0m6P, {from: accounts[5]});
//		const addresspWVOeWZ = await afiControllerYGKO1VD.withdrawAll.call(addresse33gbav, {from: accounts[1]});
//		const uintTSNC2pg = await afiControllerYGKO1VD.getExpectedReturn.call(addressOxzKbCg, addresstD8lMFO, uintUdKQkob, {from: accounts[1]});
//		const addressAS50VrM = await afiControllerYGKO1VD.setGovernance.call(addressnHu4cYL, {from: accounts[4]});
//		const addressTeufap = await afiControllerYGKO1VD.setStrategy.call(addressYkV68Ks, addressrpmUMeB, {from: accounts[1]});
//		const addressvYsDT0W = await afiControllerYGKO1VD.setStrategy.call(addresslV7Nemh, addresswAaCp0, {from: accounts[2]});

		await expect(afiControllerYGKO1VD.withdrawAll.call(addresse33gbav, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressU1OCM2G = accounts[5]
		const afiControllerdwEOlaX = await afiController.new(addressU1OCM2G, {from: accounts[0]});
		const addresslp4YQWr = "0x0000000000000000000000000000000000000001"
		const addressuKpBXNA = accounts[1]
		const uintv8bNccq = BigInt("72")
		const uintUsf78qd = BigInt("1017")
		const addressy0HdBRI = accounts[0]
		const addressBBrvss6 = accounts[2]
		const addressXhaRhqV = "0x0000000000000000000000000000000000000001"
		const addressJUC4EE = accounts[1]
		const addressDYOYUDE = accounts[0]
		const addressdu5ps0Q = accounts[2]
//		const addressQf2LBtt = await afiControllerdwEOlaX.inCaseStrategyTokenGetStuck.call(addressuKpBXNA, addresslp4YQWr, {from: "0x0000000000000000000000000000000000000001"});
//		const uinthCO8lm = await afiControllerdwEOlaX.setSplit.call(uintv8bNccq, {from: accounts[3]});
//		const addressYl92h2y = await afiControllerdwEOlaX.yearn.call(addressBBrvss6, addressy0HdBRI, uintUsf78qd, {from: accounts[0]});
//		const addressV4HYRbH = await afiControllerdwEOlaX.setConverter.call(addressDYOYUDE, addressJUC4EE, addressXhaRhqV, {from: accounts[2]});
//		const addressgvkYJhv = await afiControllerdwEOlaX.withdrawAll.call(addressdu5ps0Q, {from: accounts[4]});

		await expect(afiControllerdwEOlaX.inCaseStrategyTokenGetStuck.call(addressuKpBXNA, addresslp4YQWr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressRD3xWM = accounts[2]
		const afiControlleruMbGsRe = await afiController.new(addressRD3xWM, {from: accounts[4]});
		const address1QErdL = accounts[0]
		const uint5HdEoa = BigInt("1742")
		const addressSLMod9R = accounts[1]
		const uintQdZilAe = BigInt("1180")
		const addressNhbfoyd = accounts[1]
		const addresslJjO328 = accounts[0]
		const addressl8Z1rZn = await afiControlleruMbGsRe.setStrategist.call(address1QErdL, {from: accounts[4]});
//		const addressQ3k5GPh = await afiControlleruMbGsRe.inCaseTokensGetStuck.call(addressSLMod9R, uint5HdEoa, {from: accounts[4]});
//		const addressLYUEwb = await afiControlleruMbGsRe.yearn.call(addresslJjO328, addressNhbfoyd, uintQdZilAe, {from: accounts[1]});

		await expect(afiControlleruMbGsRe.inCaseTokensGetStuck.call(addressSLMod9R, uint5HdEoa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressN5jkN8F = accounts[4]
		const afiControllerFusQTnG = await afiController.new(addressN5jkN8F, {from: accounts[2]});
		const addresssWRZXru = accounts[2]
		const addressHW0ydC = accounts[0]
		const addressRxsiif = accounts[1]
		const uintqorCNXk = BigInt("212")
		const addressTnLvuWW = accounts[0]
		const uintYixi5Q4 = BigInt("1460")
		const addressSlM51AL = accounts[1]
		const addressoUpl5cH = "0x0000000000000000000000000000000000000001"
		const addresszfTJUN = await afiControllerFusQTnG.setConverter.call(addressRxsiif, addressHW0ydC, addresssWRZXru, {from: accounts[2]});
//		const addressNUS24Rz = await afiControllerFusQTnG.earn.call(addressTnLvuWW, uintqorCNXk, {from: accounts[4]});
//		const addressaOMyHi = await afiControllerFusQTnG.inCaseTokensGetStuck.call(addressSlM51AL, uintYixi5Q4, {from: accounts[1]});
//		const uintBBU6Bp2 = await afiControllerFusQTnG.balanceOf.call(addressoUpl5cH, {from: accounts[3]});

		await expect(afiControllerFusQTnG.earn.call(addressTnLvuWW, uintqorCNXk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdSE34P = accounts[5]
		const afiControllerdwEOlaX = await afiController.new(addressdSE34P, {from: accounts[0]});
		const addressiDbksj = accounts[0]
		const addresseBJarNB = accounts[0]
		const uintECvVfZ = BigInt("1017")
		const addressapYt486 = accounts[0]
		const addressCGIbP6 = accounts[3]
//		const addressMNN4OsI = await afiControllerdwEOlaX.setVault.call(addresseBJarNB, addressiDbksj, {from: accounts[4]});
//		const addressYl92h2y = await afiControllerdwEOlaX.yearn.call(addressCGIbP6, addressapYt486, uintECvVfZ, {from: accounts[0]});

		await expect(afiControllerdwEOlaX.setVault.call(addresseBJarNB, addressiDbksj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressEfRBzX8 = accounts[5]
		const afiControllerdwEOlaX = await afiController.new(addressEfRBzX8, {from: accounts[0]});
		const addressiGGsvWB = accounts[4]
		const addressGoi4SJL = accounts[1]
		const addressCJQWKmT = accounts[0]
		const addressEpEjGku = await afiControllerdwEOlaX.setGovernance.call(addressiGGsvWB, {from: accounts[0]});
//		const addressMNN4OsI = await afiControllerdwEOlaX.setVault.call(addressCJQWKmT, addressGoi4SJL, {from: accounts[4]});

		await expect(afiControllerdwEOlaX.setVault.call(addressCJQWKmT, addressGoi4SJL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdXXLft1 = accounts[2]
		const afiControlleruMbGsRe = await afiController.new(addressdXXLft1, {from: accounts[4]});
		const addressRV7h198 = accounts[0]
		const addressHGJQ0fP = accounts[1]
		const addressBjDhY9Z = accounts[2]
		const addressaEjTdao = accounts[2]
		const uintz2cMaom = BigInt("1257")
		const uintUxHzYJ = BigInt("773")
		const addresslBmRWB5 = accounts[0]
		const addressVOqLuz = await afiControlleruMbGsRe.revokeStrategy.call(addressHGJQ0fP, addressRV7h198, {from: accounts[4]});
//		const addressB64GqFb = await afiControlleruMbGsRe.inCaseStrategyTokenGetStuck.call(addressaEjTdao, addressBjDhY9Z, {from: "0x0000000000000000000000000000000000000001"});
//		const uintaPFtVdl = await afiControlleruMbGsRe.setSplit.call(uintz2cMaom, {from: accounts[1]});
//		const addressQ3k5GPh = await afiControlleruMbGsRe.inCaseTokensGetStuck.call(addresslBmRWB5, uintUxHzYJ, {from: accounts[4]});

		await expect(afiControlleruMbGsRe.inCaseStrategyTokenGetStuck.call(addressaEjTdao, addressBjDhY9Z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjTbN4eR = accounts[5]
		const afiControllerdwEOlaX = await afiController.new(addressjTbN4eR, {from: accounts[0]});
		const addressoF76Vbf = accounts[0]
		const addressWDtHX38 = accounts[5]
		const addressF5WS3in = accounts[2]
		const addressdh4ReMu = accounts[3]
		const uintFDIRzqE = BigInt("1017")
		const addressFhFh86a = accounts[0]
		const addressOuNnhG = accounts[3]
//		const addressOfK8udN = await afiControllerdwEOlaX.setStrategy.call(addressWDtHX38, addressoF76Vbf, {from: accounts[0]});
//		const addressy61RImY = await afiControllerdwEOlaX.inCaseStrategyTokenGetStuck.call(addressdh4ReMu, addressF5WS3in, {from: accounts[3]});
//		const addressYl92h2y = await afiControllerdwEOlaX.yearn.call(addressOuNnhG, addressFhFh86a, uintFDIRzqE, {from: accounts[0]});

		await expect(afiControllerdwEOlaX.setStrategy.call(addressWDtHX38, addressoF76Vbf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressu6WfD6K = accounts[3]
		const afiControllerjxpdpam = await afiController.new(addressu6WfD6K, {from: accounts[1]});
		const addressIYOxLf = accounts[4]
		const addressFERX2m8 = "0x0000000000000000000000000000000000000001"
		const uintLp0QG6c = BigInt("826")
		const addressbzqmh3p = accounts[2]
//		const addressi4HTrry = await afiControllerjxpdpam.inCaseStrategyTokenGetStuck.call(addressFERX2m8, addressIYOxLf, {from: accounts[1]});
//		const addressn06AFc = await afiControllerjxpdpam.withdraw.call(addressbzqmh3p, uintLp0QG6c, {from: accounts[4]});

		await expect(afiControllerjxpdpam.inCaseStrategyTokenGetStuck.call(addressFERX2m8, addressIYOxLf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address59n5kL = accounts[0]
		const afiControllerfQKJi3 = await afiController.new(address59n5kL, {from: accounts[0]});
		const addresskyCvGlH = accounts[2]
		const addressGckktLN = accounts[0]
		const addressUCovyA = accounts[3]
		const addressJZ4YTEd = accounts[1]
		const uintirKMNoX = BigInt("394")
		const addressgL7QgFc = accounts[3]
		const addressqpNWemg = await afiControllerfQKJi3.revokeStrategy.call(addressGckktLN, addresskyCvGlH, {from: accounts[0]});
		const addressHAeg9CL = await afiControllerfQKJi3.setVault.call(addressJZ4YTEd, addressUCovyA, {from: accounts[0]});
//		const addressqdaWEgj = await afiControllerfQKJi3.earn.call(addressgL7QgFc, uintirKMNoX, {from: accounts[3]});

		await expect(afiControllerfQKJi3.earn.call(addressgL7QgFc, uintirKMNoX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})