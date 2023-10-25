const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addresssLoLuy = accounts[0]
		const addressRwA4PSf = accounts[4]
		const addressRAj4iJO = accounts[4]
		const addressEnITJjo = accounts[0]
		const uintHD24qoG = BigInt("1523")
		const FairStockEquityf0IgTiI = await FairStockEquity.new(addresssLoLuy, addressRwA4PSf, addressRAj4iJO, addressEnITJjo, uintHD24qoG, {from: accounts[2]});
		const uinta5RVoJg = BigInt("408")
		const uintgh4VvR6 = BigInt("1886")
		const uintqKR5gjw = BigInt("28")
		const uint256uTECa8J = await FairStockEquityf0IgTiI.setProfitPercentMT.call(uinta5RVoJg, {from: accounts[0]});
		const uint256vDEMf9W = await FairStockEquityf0IgTiI.setGasFeeForCallback.call(uintgh4VvR6, {from: accounts[0]});
		await FairStockEquityf0IgTiI.f.call({from: accounts[4]});
		const uint256ulkvNqR = await FairStockEquityf0IgTiI.setGasFeeForCallback.call(uintqKR5gjw, {from: accounts[2]});

		await expect(FairStockEquityf0IgTiI.setProfitPercentMT.call(uinta5RVoJg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspBW0vlp = accounts[5]
		const addressCJCEI7Q = accounts[3]
		const addressHR641FW = accounts[3]
		const addressqd4Zi9d = accounts[3]
		const uintLzVi2zx = BigInt("72")
		const FairStockEquityjY4rO2y = await FairStockEquity.new(addresspBW0vlp, addressCJCEI7Q, addressHR641FW, addressqd4Zi9d, uintLzVi2zx, {from: accounts[0]});
		const uintvKzpt09 = BigInt("882")
		const uintE7LuNke = BigInt("1671")
		const addresslpS1xWs = "0x0000000000000000000000000000000000000001"
		await FairStockEquityjY4rO2y.withdrawPJ.call({from: accounts[1]});
		const uint256fOAXdYO = await FairStockEquityjY4rO2y.setProfitPercentPJ.call(uintvKzpt09, {from: accounts[0]});
		const addresskO6CBD = await FairStockEquityjY4rO2y.withdrawLPT.call(addresslpS1xWs, uintE7LuNke, {from: accounts[4]});

		await expect(FairStockEquityjY4rO2y.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUsJvWHX = accounts[3]
		const addressjoIS5vs = accounts[0]
		const addressDDG3iz5 = accounts[1]
		const addressOpoXEy8 = accounts[0]
		const uintjUtoao3 = BigInt("1859")
		const FairStockEquityDX3wsZk = await FairStockEquity.new(addressUsJvWHX, addressjoIS5vs, addressDDG3iz5, addressOpoXEy8, uintjUtoao3, {from: "0x0000000000000000000000000000000000000001"});
		const uintvMVfv5U = BigInt("582")
		const boolnCfxAok = false
		const addressXWjMM61 = accounts[2]
		const uintK3JiLLD = BigInt("1290")
		const uintkCDKCsb = BigInt("1145")
		const uintH5pnSHZ = BigInt("1814")
		const uintK3W9Axj = BigInt("1678")
		const addressDlcOO8K = accounts[4]
		const uinttw5qOGu = BigInt("276")
		const uint256YgZzbX = await FairStockEquityDX3wsZk.reduceShare.call(uintvMVfv5U, {from: accounts[2]});
		const addressKwBH48 = await FairStockEquityDX3wsZk.setLPT.call(addressXWjMM61, boolnCfxAok, {from: "0x0000000000000000000000000000000000000001"});
		const addresswl9LoYP = await FairStockEquityDX3wsZk.business.call(addressDlcOO8K, uintK3W9Axj, uintH5pnSHZ, uintkCDKCsb, uintK3JiLLD, {from: accounts[5]});
		const uint2560TAuCH = await FairStockEquityDX3wsZk.setGasFeeForCallback.call(uinttw5qOGu, {from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressASMgCY = accounts[0]
		const addressRcGenYX = "0x0000000000000000000000000000000000000001"
		const addresssNt3Q9F = accounts[0]
		const addresswXCDuiF = accounts[2]
		const uintCjIqnv8 = BigInt("1728")
		const FairStockEquity4RQoVM = await FairStockEquity.new(addressASMgCY, addressRcGenYX, addresssNt3Q9F, addresswXCDuiF, uintCjIqnv8, {from: accounts[0]});
		const uinti6yuM8 = BigInt("2036")
		const uintUlOr5KC = BigInt("1192")
		const uintH70h3d4 = BigInt("1267")
		const uint256Zuv6Dly = await FairStockEquity4RQoVM.setProfitPercentPJ.call(uinti6yuM8, {from: accounts[0]});
		await FairStockEquity4RQoVM.onlyDataSource.call({from: accounts[2]});
		const uint256sEv399d = await FairStockEquity4RQoVM.setStartTime.call(uintUlOr5KC, {from: accounts[4]});
		const uint256Oj79pWd = await FairStockEquity4RQoVM.bonus.call(uintH70h3d4, {from: accounts[0]});
		await FairStockEquity4RQoVM.withdrawPJ.call({from: accounts[1]});

		await expect(FairStockEquity4RQoVM.onlyDataSource.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszmwpUbX = accounts[2]
		const addresstMHsd9M = accounts[4]
		const addressJUADvYD = accounts[1]
		const addressC3Yy3fE = accounts[5]
		const uintdCot9wz = BigInt("1898")
		const FairStockEquityCkMSwgP = await FairStockEquity.new(addresszmwpUbX, addresstMHsd9M, addressJUADvYD, addressC3Yy3fE, uintdCot9wz, {from: accounts[2]});
		const uintK7gX5VY = BigInt("1813")
		const uintN5WCJUk = BigInt("1927")
		const uinttSQEWjd = BigInt("1256")
		const uintwat52ME = BigInt("501")
		const addressotcNQc0 = accounts[5]
		const uintxyBacE9 = BigInt("542")
		const uinttZCfiEa = BigInt("741")
		const uintVe6IC6A = BigInt("1082")
		const uintEsqN5S = BigInt("982")
		const uinth0VG2ED = BigInt("2012")
		const uintBoF9XHE = BigInt("1799")
		const uintPBxyGYv = BigInt("1105")
		const uinteL3izQ = BigInt("688")
		const addresssb23Si = accounts[5]
		const addressKlpYs4r = await FairStockEquityCkMSwgP.business.call(addressotcNQc0, uintwat52ME, uinttSQEWjd, uintN5WCJUk, uintK7gX5VY, {from: accounts[4]});
		const uint256DpSs0xD = await FairStockEquityCkMSwgP.getCostAmount.call(uintxyBacE9, {from: accounts[4]});
		const uint256eDYBSgr = await FairStockEquityCkMSwgP.setDegree.call(uintBoF9XHE, uinth0VG2ED, uintEsqN5S, uintVe6IC6A, uinttZCfiEa, {from: accounts[1]});
		const addressZskdRS = await FairStockEquityCkMSwgP.withdrawMTCallback.call(addresssb23Si, uinteL3izQ, uintPBxyGYv, {from: accounts[5]});

		await expect(FairStockEquityCkMSwgP.business.call(addressotcNQc0, uintwat52ME, uinttSQEWjd, uintN5WCJUk, uintK7gX5VY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressSzJGCJY = accounts[2]
		const addressY8Gf3kE = accounts[1]
		const addressHtGWAeW = accounts[3]
		const addressuYs43b = accounts[0]
		const uintO8BR8zS = BigInt("440")
		const FairStockEquitywf3j3P = await FairStockEquity.new(addressSzJGCJY, addressY8Gf3kE, addressHtGWAeW, addressuYs43b, uintO8BR8zS, {from: accounts[3]});
		const uintQexERfP = BigInt("1833")
		const uintFZABtzi = BigInt("2025")
		const address6jP1UM = accounts[2]
		const uintocm5HAY = BigInt("1867")
		const uintAZqV8gc = BigInt("1590")
		const addresshbxKqN = accounts[4]
		const uintx2pceZZ = BigInt("1139")
		const uintro8netD = BigInt("1507")
		const addressoXoHKV0 = "0x0000000000000000000000000000000000000001"
		const uint256NUDEiWE = await FairStockEquitywf3j3P.bonus.call(uintQexERfP, {from: accounts[3]});
		const addressW2lyOeF = await FairStockEquitywf3j3P.withdrawLPT.call(address6jP1UM, uintFZABtzi, {from: accounts[0]});
		const addressUBawnz2 = await FairStockEquitywf3j3P.withdrawBonusCallback.call(addresshbxKqN, uintAZqV8gc, uintocm5HAY, {from: accounts[1]});
		await FairStockEquitywf3j3P.withdrawPJ.call({from: accounts[0]});
		const addressGwRpNKf = await FairStockEquitywf3j3P.withdrawBonusCallback.call(addressoXoHKV0, uintro8netD, uintx2pceZZ, {from: accounts[4]});

		await expect(FairStockEquitywf3j3P.bonus.call(uintQexERfP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address8Np7MY = accounts[4]
		const addressneIVb5q = accounts[5]
		const addressC2LlWBg = accounts[1]
		const addressF0K0cA = accounts[3]
		const uintUNOfhEw = BigInt("1471")
		const FairStockEquityQuzlDV9 = await FairStockEquity.new(address8Np7MY, addressneIVb5q, addressC2LlWBg, addressF0K0cA, uintUNOfhEw, {from: accounts[2]});
		const uintSSPhpkL = BigInt("1475")
		const uintjJrPS0V = BigInt("543")
		const uint256oG2rRc9 = await FairStockEquityQuzlDV9.setGasFeeForCallback.call(uintSSPhpkL, {from: accounts[2]});
		const uint256BHNbq05 = await FairStockEquityQuzlDV9.getCostAmount.call(uintjJrPS0V, {from: accounts[0]});
	});

	it('test for FairStockEquity', async () => {
		const addresse56UmYr = accounts[2]
		const addressKCCg98h = accounts[4]
		const addressshVlIAh = accounts[1]
		const addresskbloo85 = accounts[5]
		const uintGA4hKRS = BigInt("1898")
		const FairStockEquityCkMSwgP = await FairStockEquity.new(addresse56UmYr, addressKCCg98h, addressshVlIAh, addresskbloo85, uintGA4hKRS, {from: accounts[2]});
		const uint7HWLJ1 = BigInt("1887")
		const addressZ0U749C = accounts[2]
		const uintQ0yTIgO = BigInt("1813")
		const uinti0W8Mj = BigInt("1927")
		const uintxxHmlNU = BigInt("1256")
		const uintBof9tcC = BigInt("501")
		const addressInnji45 = accounts[5]
		const uintL9GGiEP = BigInt("188")
		const uintxyLYfi = BigInt("425")
		const addressWgzfRJT = accounts[4]
		const uintM6aPmlo = BigInt("1105")
		const uintZl3SQDy = BigInt("688")
		const addressrldClKA = accounts[5]
		const addressGuHJ07R = await FairStockEquityCkMSwgP.withdrawLPT.call(addressZ0U749C, uint7HWLJ1, {from: accounts[4]});
		const addressKlpYs4r = await FairStockEquityCkMSwgP.business.call(addressInnji45, uintBof9tcC, uintxxHmlNU, uinti0W8Mj, uintQ0yTIgO, {from: accounts[4]});
		const addresseHw6HRJ = await FairStockEquityCkMSwgP.setModule.call(addressWgzfRJT, uintxyLYfi, uintL9GGiEP, {from: accounts[2]});
		const addressZskdRS = await FairStockEquityCkMSwgP.withdrawMTCallback.call(addressrldClKA, uintZl3SQDy, uintM6aPmlo, {from: accounts[5]});

		await expect(FairStockEquityCkMSwgP.withdrawLPT.call(addressZ0U749C, uint7HWLJ1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbmVcbKi = accounts[0]
		const addressZhnmUCw = accounts[2]
		const addresspIRhdI = accounts[2]
		const addressICocGM6 = accounts[5]
		const uinttUNoGDd = BigInt("1643")
		const FairStockEquityAVsoeXf = await FairStockEquity.new(addressbmVcbKi, addressZhnmUCw, addresspIRhdI, addressICocGM6, uinttUNoGDd, {from: accounts[3]});
		const uintPaZPViZ = BigInt("1581")
		const addressn0nSoHY = "0x0000000000000000000000000000000000000001"
		const uintLlJHHNk = BigInt("1320")
		const addressDeFEoVw = accounts[2]
		const uintzKUuo5 = BigInt("796")
		const addresseL9UH9T = accounts[2]
		const addressUtSKQe2 = await FairStockEquityAVsoeXf.depositLPT.call(addressn0nSoHY, uintPaZPViZ, {from: accounts[3]});
		const addressn98aUTS = await FairStockEquityAVsoeXf.depositLPT.call(addressDeFEoVw, uintLlJHHNk, {from: accounts[3]});
		const addressFHpyXmV = await FairStockEquityAVsoeXf.depositLPT.call(addresseL9UH9T, uintzKUuo5, {from: accounts[2]});

		await expect(FairStockEquityAVsoeXf.depositLPT.call(addressn0nSoHY, uintPaZPViZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressv6rdZi = accounts[2]
		const addressSRaij8 = accounts[4]
		const addressYjtKWOy = accounts[1]
		const addresslbDAwJl = accounts[5]
		const uintRWRGQk = BigInt("1898")
		const FairStockEquityCkMSwgP = await FairStockEquity.new(addressv6rdZi, addressSRaij8, addressYjtKWOy, addresslbDAwJl, uintRWRGQk, {from: accounts[2]});
		const uintPxDEGfL = BigInt("1813")
		const uintn2aT33m = BigInt("1927")
		const uintf9Qy7Hj = BigInt("1244")
		const uintIwcnGXC = BigInt("501")
		const addressOVdfBK5 = accounts[5]
		const uintesADam1 = BigInt("542")
		const uintcwPJUKW = BigInt("1105")
		const uintuE32hIo = BigInt("688")
		const addressnc4tFfB = accounts[5]
		await FairStockEquityCkMSwgP.withdrawMT.call({from: accounts[3]});
		const addressKlpYs4r = await FairStockEquityCkMSwgP.business.call(addressOVdfBK5, uintIwcnGXC, uintf9Qy7Hj, uintn2aT33m, uintPxDEGfL, {from: accounts[4]});
		const uint256DpSs0xD = await FairStockEquityCkMSwgP.getCostAmount.call(uintesADam1, {from: accounts[4]});
		await FairStockEquityCkMSwgP.withdrawBonus.call({from: accounts[3]});
		const addressZskdRS = await FairStockEquityCkMSwgP.withdrawMTCallback.call(addressnc4tFfB, uintuE32hIo, uintcwPJUKW, {from: accounts[5]});

		await expect(FairStockEquityCkMSwgP.withdrawMT.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressehuh3B2 = accounts[4]
		const addressLOwVSk0 = accounts[5]
		const addressPKdtwWp = accounts[1]
		const addressuV4RkZs = accounts[3]
		const uintI5kWwQw = BigInt("1471")
		const FairStockEquityQuzlDV9 = await FairStockEquity.new(addressehuh3B2, addressLOwVSk0, addressPKdtwWp, addressuV4RkZs, uintI5kWwQw, {from: accounts[2]});
		const uintoxd8nY7 = BigInt("1468")
		const uintN9hvtOl = BigInt("1385")
		const uintBKvPpa = BigInt("604")
		const uintBC5qwmW = BigInt("543")
		const uint256oG2rRc9 = await FairStockEquityQuzlDV9.setGasFeeForCallback.call(uintoxd8nY7, {from: accounts[2]});
		const uint256uDKFlJ = await FairStockEquityQuzlDV9.reduceShare.call(uintN9hvtOl, {from: accounts[4]});
		const uint256OfmMrSz = await FairStockEquityQuzlDV9.setProfitPercentPJ.call(uintBKvPpa, {from: accounts[1]});
		const uint256BHNbq05 = await FairStockEquityQuzlDV9.getCostAmount.call(uintBC5qwmW, {from: accounts[0]});

		await expect(FairStockEquityQuzlDV9.reduceShare.call(uintN9hvtOl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnUkkijh = accounts[2]
		const addressvKTOtzo = accounts[4]
		const addressnlTsHTk = accounts[1]
		const addressSCWtgf8 = accounts[5]
		const uintt47uSb = BigInt("1898")
		const FairStockEquityCkMSwgP = await FairStockEquity.new(addressnUkkijh, addressvKTOtzo, addressnlTsHTk, addressSCWtgf8, uintt47uSb, {from: accounts[2]});
		const uintdiuQham = BigInt("542")
		const uintnSTyYGd = BigInt("1105")
		const uintl5SpOvi = BigInt("688")
		const addresstx9poc = accounts[0]
		const uint256DpSs0xD = await FairStockEquityCkMSwgP.getCostAmount.call(uintdiuQham, {from: accounts[4]});
		const addressZskdRS = await FairStockEquityCkMSwgP.withdrawMTCallback.call(addresstx9poc, uintl5SpOvi, uintnSTyYGd, {from: accounts[5]});

		await expect(FairStockEquityCkMSwgP.withdrawMTCallback.call(addresstx9poc, uintl5SpOvi, uintnSTyYGd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressHOGj2Sc = accounts[3]
		const addressQq1UpOJ = accounts[3]
		const addressTD7Fbww = accounts[0]
		const addressDPoMtjR = "0x0000000000000000000000000000000000000001"
		const uintMr3eAJZ = BigInt("1556")
		const FairStockEquityoBf3ylW = await FairStockEquity.new(addressHOGj2Sc, addressQq1UpOJ, addressTD7Fbww, addressDPoMtjR, uintMr3eAJZ, {from: accounts[2]});
		const boolpaQfaec = false
		const addressyWDLWPr = accounts[0]
		const uintviBjkFw = BigInt("1106")
		const uintNjiMwD = BigInt("677")
		const uintGLA07ce = BigInt("1194")
		const addressYW6SZPM = accounts[5]
		const uinty1Ps9XQ = BigInt("1043")
		const addressq9oVIf5 = await FairStockEquityoBf3ylW.setLPT.call(addressyWDLWPr, boolpaQfaec, {from: accounts[2]});
		const uint256Q2QSi61 = await FairStockEquityoBf3ylW.setProfitPercentMT.call(uintviBjkFw, {from: accounts[1]});
		const address60LSk5 = await FairStockEquityoBf3ylW.setModule.call(addressYW6SZPM, uintGLA07ce, uintNjiMwD, {from: accounts[0]});
		const uint256NhaGAMH = await FairStockEquityoBf3ylW.setProfitPercentPJ.call(uinty1Ps9XQ, {from: accounts[2]});
		await FairStockEquityoBf3ylW.withdrawBonus.call({from: accounts[1]});

		await expect(FairStockEquityoBf3ylW.setProfitPercentMT.call(uintviBjkFw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDuOcVe = accounts[2]
		const addressTZs38Pw = accounts[4]
		const addressshNr9TR = accounts[1]
		const addressN395Lff = accounts[5]
		const uintli9QFFR = BigInt("1898")
		const FairStockEquityCkMSwgP = await FairStockEquity.new(addressDuOcVe, addressTZs38Pw, addressshNr9TR, addressN395Lff, uintli9QFFR, {from: accounts[2]});
		const uintxB0ygX = BigInt("323")
		const uintbh2OXTr = BigInt("1813")
		const uintCtb1MFL = BigInt("1927")
		const uintL6PGd5Y = BigInt("1244")
		const uinthQS3jBE = BigInt("501")
		const addressf4g3rze = accounts[5]
		const uintxVrndVW = BigInt("526")
		const uintOO8dv95 = BigInt("1778")
		const uintK6Aox4G = BigInt("1105")
		const uintn2PYv5T = BigInt("688")
		const addressplz5qhB = accounts[5]
		const uint256LVR0MhW = await FairStockEquityCkMSwgP.bonus.call(uintxB0ygX, {from: accounts[5]});
		const addressKlpYs4r = await FairStockEquityCkMSwgP.business.call(addressf4g3rze, uinthQS3jBE, uintL6PGd5Y, uintCtb1MFL, uintbh2OXTr, {from: accounts[4]});
		const uint256DpSs0xD = await FairStockEquityCkMSwgP.getCostAmount.call(uintxVrndVW, {from: accounts[4]});
		const uint256CfkuwOy = await FairStockEquityCkMSwgP.bonus.call(uintOO8dv95, {from: accounts[5]});
		await FairStockEquityCkMSwgP.onlyDataSource.call({from: accounts[3]});
		const addressZskdRS = await FairStockEquityCkMSwgP.withdrawMTCallback.call(addressplz5qhB, uintn2PYv5T, uintK6Aox4G, {from: accounts[5]});

		await expect(FairStockEquityCkMSwgP.bonus.call(uintxB0ygX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdfZYbz = accounts[4]
		const addressTTOKv5D = accounts[5]
		const addresscYjOzY = accounts[1]
		const addressVyL0zDH = accounts[3]
		const uintZRgNgAK = BigInt("1471")
		const FairStockEquityQuzlDV9 = await FairStockEquity.new(addressdfZYbz, addressTTOKv5D, addresscYjOzY, addressVyL0zDH, uintZRgNgAK, {from: accounts[2]});
		const uintDK7e73e = BigInt("1817")
		const uintGFq3o1F = BigInt("1295")
		const uintqTWyct0 = BigInt("1286")
		const uintHdJiFMJ = BigInt("162")
		const uintV1EwOQJ = BigInt("1097")
		const addressQZr02P = accounts[1]
		const uintljL8quO = BigInt("1449")
		const uint256xRnCYSL = await FairStockEquityQuzlDV9.depositBonus.call(uintDK7e73e, {from: accounts[3]});
		const addressHwwS1pZ = await FairStockEquityQuzlDV9.business.call(addressQZr02P, uintV1EwOQJ, uintHdJiFMJ, uintqTWyct0, uintGFq3o1F, {from: accounts[2]});
		const uint256oG2rRc9 = await FairStockEquityQuzlDV9.setGasFeeForCallback.call(uintljL8quO, {from: accounts[2]});

		await expect(FairStockEquityQuzlDV9.depositBonus.call(uintDK7e73e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressh2Ir86 = accounts[4]
		const addressxVL90Ry = accounts[5]
		const addressK4O2qLr = accounts[1]
		const addressbUjX9Rg = accounts[3]
		const uintKBf9b0u = BigInt("1471")
		const FairStockEquityQuzlDV9 = await FairStockEquity.new(addressh2Ir86, addressxVL90Ry, addressK4O2qLr, addressbUjX9Rg, uintKBf9b0u, {from: accounts[2]});
		const uintASbYojY = BigInt("1468")
		const uintyFpPAZX = BigInt("734")
		const uintqy0wr1t = BigInt("1707")
		const uint59qqCs = BigInt("120")
		const uintNdTk5OQ = BigInt("1799")
		const uintDJBHyny = BigInt("270")
		const addressMq5sPVS = accounts[3]
		const uintNAnhx8S = BigInt("205")
		const uintDkn3Gcl = BigInt("543")
		const uint256oG2rRc9 = await FairStockEquityQuzlDV9.setGasFeeForCallback.call(uintASbYojY, {from: accounts[2]});
		const uint256ZwXVF73 = await FairStockEquityQuzlDV9.invest.call(uintyFpPAZX, {from: accounts[0]});
		const addressUJnljCP = await FairStockEquityQuzlDV9.business.call(addressMq5sPVS, uintDJBHyny, uintNdTk5OQ, uint59qqCs, uintqy0wr1t, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bH50umJ = await FairStockEquityQuzlDV9.setStartTime.call(uintNAnhx8S, {from: accounts[4]});
		const uint256BHNbq05 = await FairStockEquityQuzlDV9.getCostAmount.call(uintDkn3Gcl, {from: accounts[0]});

		await expect(FairStockEquityQuzlDV9.invest.call(uintyFpPAZX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqdn4Vv2 = accounts[4]
		const addressP2go3EW = accounts[3]
		const addressqxOVbQ = accounts[3]
		const addresssew9uv = accounts[1]
		const uintPwO51Hq = BigInt("701")
		const FairStockEquityKyreZeq = await FairStockEquity.new(addressqdn4Vv2, addressP2go3EW, addressqxOVbQ, addresssew9uv, uintPwO51Hq, {from: accounts[2]});
		const uintFuw8JXd = BigInt("418")
		const uintGGly8Zp = BigInt("871")
		const addressjyez94I = accounts[3]
		await FairStockEquityKyreZeq.f.call({from: accounts[1]});
		const uint256TEYbtLT = await FairStockEquityKyreZeq.getCostAmount.call(uintFuw8JXd, {from: accounts[0]});
		const uint256IX4uehX = await FairStockEquityKyreZeq.invest.call(uintGGly8Zp, {from: accounts[1]});
		const addressmelt42Z = await FairStockEquityKyreZeq.setDataSource.call(addressjyez94I, {from: accounts[4]});

		await expect(FairStockEquityKyreZeq.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJsXYMJx = accounts[4]
		const addressvSCy0A = accounts[5]
		const addresszXb0FBT = accounts[1]
		const addressrCJqJs = accounts[3]
		const uintnqdI1J1 = BigInt("1471")
		const FairStockEquityQuzlDV9 = await FairStockEquity.new(addressJsXYMJx, addressvSCy0A, addresszXb0FBT, addressrCJqJs, uintnqdI1J1, {from: accounts[2]});
		const uintOE28xf = BigInt("1371")
		const uintficvEE = BigInt("554")
		const uint256oWS7Be = await FairStockEquityQuzlDV9.setStartTime.call(uintOE28xf, {from: accounts[2]});
		const uint256BHNbq05 = await FairStockEquityQuzlDV9.getCostAmount.call(uintficvEE, {from: accounts[0]});

		await expect(FairStockEquityQuzlDV9.setStartTime.call(uintOE28xf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressISoAL2O = accounts[4]
		const addressRpfmf9J = accounts[3]
		const addressuPNT4Nt = accounts[3]
		const addressBaJ0rAK = accounts[1]
		const uintG3bgj0k = BigInt("701")
		const FairStockEquityKyreZeq = await FairStockEquity.new(addressISoAL2O, addressRpfmf9J, addressuPNT4Nt, addressBaJ0rAK, uintG3bgj0k, {from: accounts[2]});
		const uinttbs8mIy = BigInt("418")
		const uintq7oSrKB = BigInt("882")
		const addressqN0rqX4 = accounts[2]
		const uint256TEYbtLT = await FairStockEquityKyreZeq.getCostAmount.call(uinttbs8mIy, {from: accounts[0]});
		await FairStockEquityKyreZeq.withdrawPJ.call({from: accounts[2]});
		const uint256IX4uehX = await FairStockEquityKyreZeq.invest.call(uintq7oSrKB, {from: accounts[1]});
		const addressmelt42Z = await FairStockEquityKyreZeq.setDataSource.call(addressqN0rqX4, {from: accounts[4]});

		await expect(FairStockEquityKyreZeq.withdrawPJ.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressRB5NgjO = accounts[4]
		const addressKUosBCR = accounts[5]
		const addressCsJ9VJI = accounts[1]
		const addressj2JcJGe = accounts[3]
		const uintNcEEbg8 = BigInt("1471")
		const FairStockEquityQuzlDV9 = await FairStockEquity.new(addressRB5NgjO, addressKUosBCR, addressCsJ9VJI, addressj2JcJGe, uintNcEEbg8, {from: accounts[2]});
		const uintmjS5zp = BigInt("1487")
		const uintaGCfkFQ = BigInt("549")
		const uint256oG2rRc9 = await FairStockEquityQuzlDV9.setGasFeeForCallback.call(uintmjS5zp, {from: accounts[2]});
		await FairStockEquityQuzlDV9.withdrawBonus.call({from: accounts[4]});
		const uint256BHNbq05 = await FairStockEquityQuzlDV9.getCostAmount.call(uintaGCfkFQ, {from: accounts[0]});

		await expect(FairStockEquityQuzlDV9.withdrawBonus.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressITsNvWs = accounts[0]
		const addressDLSWv3 = accounts[4]
		const addressuy9XQKQ = accounts[4]
		const addressgsRIkN = accounts[4]
		const uintIQ02mhe = BigInt("387")
		const FairStockEquityuZMun4l = await FairStockEquity.new(addressITsNvWs, addressDLSWv3, addressuy9XQKQ, addressgsRIkN, uintIQ02mhe, {from: accounts[2]});
		const uintQJUtAKD = BigInt("1569")
		const uinto0u5uvL = BigInt("1089")
		const addressurnM2kD = accounts[2]
		const uintbmDExFi = BigInt("762")
		const addressCSF4GYG = accounts[5]
		const uintZgp3btZ = BigInt("156")
		const addressujQakaQ = await FairStockEquityuZMun4l.withdrawBonusCallback.call(addressurnM2kD, uinto0u5uvL, uintQJUtAKD, {from: accounts[4]});
		const uint256z02PbSQ = await FairStockEquityuZMun4l.setStartTime.call(uintbmDExFi, {from: "0x0000000000000000000000000000000000000001"});
		const addressxSObDN = await FairStockEquityuZMun4l.setDataSource.call(addressCSF4GYG, {from: accounts[0]});
		await FairStockEquityuZMun4l.withdrawMT.call({from: accounts[5]});
		const uint256D148tI7 = await FairStockEquityuZMun4l.setStartTime.call(uintZgp3btZ, {from: accounts[4]});

		await expect(FairStockEquityuZMun4l.withdrawBonusCallback.call(addressurnM2kD, uinto0u5uvL, uintQJUtAKD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTIHQ8n = accounts[4]
		const addressiu4QwZx = accounts[5]
		const addressEf8GSbL = accounts[1]
		const addressEmwlg5h = accounts[3]
		const uintlO4XDtX = BigInt("1471")
		const FairStockEquityQuzlDV9 = await FairStockEquity.new(addressTIHQ8n, addressiu4QwZx, addressEf8GSbL, addressEmwlg5h, uintlO4XDtX, {from: accounts[2]});
		const uintqoTUMgr = BigInt("1696")
		const uintXBCKTt = BigInt("225")
		const addressq9UdAHp = accounts[4]
		const uintVCafKqo = BigInt("1712")
		const uintJ6EcAAa = BigInt("120")
		const uintAVHvq8m = BigInt("1799")
		const uintOw13XJG = BigInt("163")
		const addressDwpczW = accounts[3]
		const addressCVmw3mW = await FairStockEquityQuzlDV9.setModule.call(addressq9UdAHp, uintXBCKTt, uintqoTUMgr, {from: accounts[2]});
		const addressUJnljCP = await FairStockEquityQuzlDV9.business.call(addressDwpczW, uintOw13XJG, uintAVHvq8m, uintJ6EcAAa, uintVCafKqo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityQuzlDV9.business.call(addressDwpczW, uintOw13XJG, uintAVHvq8m, uintJ6EcAAa, uintVCafKqo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})