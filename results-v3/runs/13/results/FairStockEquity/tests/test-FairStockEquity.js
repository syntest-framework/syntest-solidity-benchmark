const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressdMzH79C = accounts[4]
		const addressqX8A9G8 = accounts[5]
		const addressRqKeVGK = accounts[2]
		const addressJBl0pb = accounts[4]
		const uintIE0pvEQ = BigInt("55")
		const FairStockEquitymU9H69U = await FairStockEquity.new(addressdMzH79C, addressqX8A9G8, addressRqKeVGK, addressJBl0pb, uintIE0pvEQ, {from: accounts[4]});
		const booluFIRn3I = false
		const addressdRdzzMk = accounts[0]
		const uintwnkAWwv = BigInt("1529")
		const uintgPojHXi = BigInt("232")
		const addressUNaMWWw = accounts[1]
		const uintR9gi5fV = BigInt("1132")
		const uintlL1qwbF = BigInt("536")
		const uintIiUCB0r = BigInt("847")
		const uintTsZ5Jue = BigInt("1727")
		const uintApD9yad = BigInt("1524")
		const uintF8Otb0A = BigInt("372")
		const addressKdyN3Ae = await FairStockEquitymU9H69U.setLPT.call(addressdRdzzMk, booluFIRn3I, {from: accounts[3]});
		const addressmYUT4Qy = await FairStockEquitymU9H69U.withdrawMTCallback.call(addressUNaMWWw, uintgPojHXi, uintwnkAWwv, {from: accounts[1]});
		await FairStockEquitymU9H69U.checkStart.call({from: accounts[0]});
		const uint256pXY1YPx = await FairStockEquitymU9H69U.setDegree.call(uintApD9yad, uintTsZ5Jue, uintIiUCB0r, uintlL1qwbF, uintR9gi5fV, {from: accounts[0]});
		const uint256NOutQC = await FairStockEquitymU9H69U.setProfitPercentPJ.call(uintF8Otb0A, {from: accounts[4]});

		await expect(FairStockEquitymU9H69U.setLPT.call(addressdRdzzMk, booluFIRn3I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressXX8c07b = accounts[0]
		const addressd0ITORs = accounts[2]
		const addressHQU4UGc = "0x0000000000000000000000000000000000000001"
		const addressZkViuWE = accounts[0]
		const uintEUS1Po = BigInt("1643")
		const FairStockEquityEUqeh3m = await FairStockEquity.new(addressXX8c07b, addressd0ITORs, addressHQU4UGc, addressZkViuWE, uintEUS1Po, {from: accounts[3]});
		const uintzfGrROX = BigInt("1697")
		const uintS5I75bV = BigInt("305")
		const uintIEw76lh = BigInt("503")
		const uintnZc91hu = BigInt("1884")
		const uintrfpUi0 = BigInt("1041")
		const uintJpLLIqu = BigInt("1820")
		const uinthVJbmlh = BigInt("1761")
		const uint256U06wSE8 = await FairStockEquityEUqeh3m.setProfitPercentMT.call(uintzfGrROX, {from: accounts[2]});
		const uint256xDlqUUd = await FairStockEquityEUqeh3m.setDegree.call(uintJpLLIqu, uintrfpUi0, uintnZc91hu, uintIEw76lh, uintS5I75bV, {from: accounts[1]});
		await FairStockEquityEUqeh3m.checkStart.call({from: accounts[0]});
		await FairStockEquityEUqeh3m.withdrawBonus.call({from: accounts[3]});
		const uint256uan6zP = await FairStockEquityEUqeh3m.reduceShare.call(uinthVJbmlh, {from: accounts[4]});

		await expect(FairStockEquityEUqeh3m.setProfitPercentMT.call(uintzfGrROX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslfmPchr = accounts[2]
		const addressHmvUrS = accounts[1]
		const addressoQfmfue = accounts[2]
		const address3LI5QZ = accounts[4]
		const uintpDAzYPy = BigInt("1319")
		const FairStockEquityCkQAhhO = await FairStockEquity.new(addresslfmPchr, addressHmvUrS, addressoQfmfue, address3LI5QZ, uintpDAzYPy, {from: accounts[1]});
		const uintk5DaG2n = BigInt("609")
		const addressJHFLTKb = accounts[0]
		await FairStockEquityCkQAhhO.withdrawBonus.call({from: accounts[1]});
		await FairStockEquityCkQAhhO.withdrawPJ.call({from: accounts[2]});
		const addressuNFefKL = await FairStockEquityCkQAhhO.withdrawLPT.call(addressJHFLTKb, uintk5DaG2n, {from: accounts[2]});

		await expect(FairStockEquityCkQAhhO.withdrawBonus.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdOSH5ee = accounts[4]
		const addressEkz8GPH = "0x0000000000000000000000000000000000000001"
		const addressOS0TmNa = accounts[3]
		const addresskPuoWyv = accounts[1]
		const uintEgZcE7R = BigInt("1144")
		const FairStockEquitydUedU8c = await FairStockEquity.new(addressdOSH5ee, addressEkz8GPH, addressOS0TmNa, addresskPuoWyv, uintEgZcE7R, {from: accounts[5]});
		const boolaLEbdoV = false
		const addressfWeuAPi = accounts[5]
		const uintdAnGYnz = BigInt("528")
		const uintjC7vdz6 = BigInt("907")
		const addressB0GCgFD = accounts[1]
		const uintNDJ6JjV = BigInt("1768")
		const addressOebOZJl = accounts[3]
		const uinteoyfAV = BigInt("154")
		await FairStockEquitydUedU8c.withdrawMT.call({from: accounts[0]});
		const addressvShlPq3 = await FairStockEquitydUedU8c.setLPT.call(addressfWeuAPi, boolaLEbdoV, {from: accounts[0]});
		const addressi7AdlBv = await FairStockEquitydUedU8c.withdrawMTCallback.call(addressB0GCgFD, uintjC7vdz6, uintdAnGYnz, {from: accounts[4]});
		const addressuWhRPpY = await FairStockEquitydUedU8c.depositLPT.call(addressOebOZJl, uintNDJ6JjV, {from: accounts[2]});
		const uint256sJYT0vp = await FairStockEquitydUedU8c.setProfitPercentBonus.call(uinteoyfAV, {from: accounts[0]});

		await expect(FairStockEquitydUedU8c.withdrawMT.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressSCHPnhf = "0x0000000000000000000000000000000000000001"
		const addressUh2Nn8u = accounts[3]
		const addressfemEfan = accounts[1]
		const address7ii5Ei = accounts[3]
		const uintOR2P32C = BigInt("103")
		const FairStockEquityOVRZhCS = await FairStockEquity.new(addressSCHPnhf, addressUh2Nn8u, addressfemEfan, address7ii5Ei, uintOR2P32C, {from: "0x0000000000000000000000000000000000000001"});
		const uintKHl1phX = BigInt("1597")
		const uintYWEMx6E = BigInt("13")
		const addressKGNvDZ = "0x0000000000000000000000000000000000000001"
		const uintovTIdoZ = BigInt("40")
		const addresskgKAQz = await FairStockEquityOVRZhCS.withdrawMTCallback.call(addressKGNvDZ, uintYWEMx6E, uintKHl1phX, {from: accounts[0]});
		const uint256zGvVb5P = await FairStockEquityOVRZhCS.invest.call(uintovTIdoZ, {from: accounts[3]});
	});

	it('test for FairStockEquity', async () => {
		const addresshHgKght = accounts[5]
		const addressPQrnLl2 = accounts[3]
		const addressbzsc2Q = accounts[4]
		const addresstBrbiC = accounts[0]
		const uintFD02wCu = BigInt("955")
		const FairStockEquityMRHcgUS = await FairStockEquity.new(addresshHgKght, addressPQrnLl2, addressbzsc2Q, addresstBrbiC, uintFD02wCu, {from: accounts[3]});
		const uintpZE30L = BigInt("1528")
		const uint256FSU8kBR = await FairStockEquityMRHcgUS.reduceShare.call(uintpZE30L, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityMRHcgUS.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityMRHcgUS.reduceShare.call(uintpZE30L, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTEz1PG = accounts[3]
		const addressAWR5jN6 = accounts[4]
		const addressuGuOWar = accounts[3]
		const addressDoVytHI = accounts[0]
		const uintVcWzkpQ = BigInt("194")
		const FairStockEquityfNJ2sKe = await FairStockEquity.new(addressTEz1PG, addressAWR5jN6, addressuGuOWar, addressDoVytHI, uintVcWzkpQ, {from: accounts[3]});
		const uintVcDxtvE = BigInt("1732")
		const address4oyGaT = accounts[2]
		const uintfeJMyld = BigInt("1300")
		const addressMIRKula = await FairStockEquityfNJ2sKe.withdrawLPT.call(address4oyGaT, uintVcDxtvE, {from: accounts[1]});
		const uint256jEi26C = await FairStockEquityfNJ2sKe.setGasFeeForCallback.call(uintfeJMyld, {from: accounts[0]});

		await expect(FairStockEquityfNJ2sKe.withdrawLPT.call(address4oyGaT, uintVcDxtvE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressy3skft = accounts[2]
		const addressFaOPk9n = accounts[1]
		const addressUnVZWBB = accounts[4]
		const addressx40siC = accounts[5]
		const uintmqoxpPy = BigInt("921")
		const FairStockEquitysvZPTLh = await FairStockEquity.new(addressy3skft, addressFaOPk9n, addressUnVZWBB, addressx40siC, uintmqoxpPy, {from: accounts[2]});
		const uintQgh9sH = BigInt("1852")
		const uintZxES1YX = BigInt("1377")
		const addressizZ882D = accounts[3]
		const uintAy9LDoy = BigInt("956")
		const uint95jlsn = BigInt("891")
		const uint4Aph8B = BigInt("1412")
		const uintBQc41hT = BigInt("659")
		const addressHtbDQD = accounts[4]
		const addresso8DCdxK = await FairStockEquitysvZPTLh.withdrawBonusCallback.call(addressizZ882D, uintZxES1YX, uintQgh9sH, {from: accounts[3]});
		const addressi1FyaV3 = await FairStockEquitysvZPTLh.business.call(addressHtbDQD, uintBQc41hT, uint4Aph8B, uint95jlsn, uintAy9LDoy, {from: accounts[2]});

		await expect(FairStockEquitysvZPTLh.withdrawBonusCallback.call(addressizZ882D, uintZxES1YX, uintQgh9sH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEMh0XKS = accounts[0]
		const addressrp7zH4X = accounts[3]
		const addressA44Lr2Q = accounts[1]
		const addressBoKp67 = "0x0000000000000000000000000000000000000001"
		const uintx8wZDFT = BigInt("1284")
		const FairStockEquityCRVuQi = await FairStockEquity.new(addressEMh0XKS, addressrp7zH4X, addressA44Lr2Q, addressBoKp67, uintx8wZDFT, {from: accounts[1]});
		const uinth3aAIa1 = BigInt("1060")
		const uintPZltVEp = BigInt("1805")
		const uintHMyUOZ1 = BigInt("546")
		const uintZDsJDc = BigInt("1459")
		const uintyNWkrIN = BigInt("543")
		const addressJafpzGl = accounts[1]
		const uintDWDavQS = BigInt("783")
		const uintjIlBWJj = BigInt("975")
		const addressCjnf7w = accounts[2]
		const uint256Od9jOwA = await FairStockEquityCRVuQi.setProfitPercentBonus.call(uinth3aAIa1, {from: accounts[1]});
		const addressabuM9Dw = await FairStockEquityCRVuQi.business.call(addressJafpzGl, uintyNWkrIN, uintZDsJDc, uintHMyUOZ1, uintPZltVEp, {from: accounts[0]});
		const addressy1UHg3b = await FairStockEquityCRVuQi.withdrawBonusCallback.call(addressCjnf7w, uintjIlBWJj, uintDWDavQS, {from: accounts[4]});
		await FairStockEquityCRVuQi.checkStart.call({from: accounts[1]});
		await FairStockEquityCRVuQi.withdrawMT.call({from: accounts[1]});

		await expect(FairStockEquityCRVuQi.business.call(addressJafpzGl, uintyNWkrIN, uintZDsJDc, uintHMyUOZ1, uintPZltVEp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszj1NTmt = accounts[0]
		const addressydzvBQg = accounts[3]
		const addresspNxLsNJ = accounts[1]
		const addressO1chw6S = "0x0000000000000000000000000000000000000001"
		const uintoNMWdy1 = BigInt("1284")
		const FairStockEquityCRVuQi = await FairStockEquity.new(addresszj1NTmt, addressydzvBQg, addresspNxLsNJ, addressO1chw6S, uintoNMWdy1, {from: accounts[1]});
		const uintKPMt08E = BigInt("1594")
		const uintOzfCuvN = BigInt("488")
		const addressvnwqVUY = accounts[3]
		const uintAOHQRK = BigInt("1060")
		const uintKkZXQgT = BigInt("1805")
		const uintCwlNW6y = BigInt("546")
		const uintRecUS2U = BigInt("1459")
		const uintpaTwCAR = BigInt("543")
		const addressIqH78MP = accounts[1]
		const uintPeRIGoZ = BigInt("783")
		const uintUy0QKj = BigInt("975")
		const addressrQsAbh8 = accounts[3]
		const uint256NPwFSKT = await FairStockEquityCRVuQi.setStartTime.call(uintKPMt08E, {from: accounts[1]});
		const addresswaNDZn = await FairStockEquityCRVuQi.depositLPT.call(addressvnwqVUY, uintOzfCuvN, {from: accounts[3]});
		const uint256Od9jOwA = await FairStockEquityCRVuQi.setProfitPercentBonus.call(uintAOHQRK, {from: accounts[1]});
		const addressabuM9Dw = await FairStockEquityCRVuQi.business.call(addressIqH78MP, uintpaTwCAR, uintRecUS2U, uintCwlNW6y, uintKkZXQgT, {from: accounts[0]});
		const addressy1UHg3b = await FairStockEquityCRVuQi.withdrawBonusCallback.call(addressrQsAbh8, uintUy0QKj, uintPeRIGoZ, {from: accounts[4]});
		await FairStockEquityCRVuQi.checkStart.call({from: accounts[1]});
		await FairStockEquityCRVuQi.withdrawMT.call({from: accounts[1]});

		await expect(FairStockEquityCRVuQi.depositLPT.call(addressvnwqVUY, uintOzfCuvN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressLoOXAnN = accounts[1]
		const addressea1EXc = "0x0000000000000000000000000000000000000001"
		const addresshgL7x1 = accounts[2]
		const addressh7V6VAS = accounts[2]
		const uintgYIZYkd = BigInt("131")
		const FairStockEquityPwB8erp = await FairStockEquity.new(addressLoOXAnN, addressea1EXc, addresshgL7x1, addressh7V6VAS, uintgYIZYkd, {from: accounts[3]});
		const uintJtfpueY = BigInt("139")
		const uinthnD2Uj1 = BigInt("280")
		const uintPHE92Ew = BigInt("2034")
		const uintVhicAiw = BigInt("278")
		const addressBZQRCo = "0x0000000000000000000000000000000000000001"
		const uintbUMRP38 = BigInt("709")
		const addressm0a03gz = accounts[4]
		const uintgMU4RY = BigInt("810")
		const uintOh8Eg8x = BigInt("1169")
		const addressqzvoOaQ = accounts[2]
		const uint256rIhToq4 = await FairStockEquityPwB8erp.invest.call(uintJtfpueY, {from: accounts[0]});
		const uint256FBHoPx5 = await FairStockEquityPwB8erp.reduceShare.call(uinthnD2Uj1, {from: accounts[0]});
		const uint256mYdqike = await FairStockEquityPwB8erp.reduceShare.call(uintPHE92Ew, {from: accounts[1]});
		const addresst1W94av = await FairStockEquityPwB8erp.withdrawLPT.call(addressBZQRCo, uintVhicAiw, {from: accounts[2]});
		const addresskCe2Cea = await FairStockEquityPwB8erp.depositLPT.call(addressm0a03gz, uintbUMRP38, {from: accounts[4]});
		const address0NEWqa = await FairStockEquityPwB8erp.withdrawMTCallback.call(addressqzvoOaQ, uintOh8Eg8x, uintgMU4RY, {from: accounts[0]});

		await expect(FairStockEquityPwB8erp.invest.call(uintJtfpueY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZ6cP3PF = "0x0000000000000000000000000000000000000001"
		const addressfkr6po3 = accounts[0]
		const addressNr3yNj = accounts[4]
		const addressKXxyf5x = accounts[4]
		const uintHbGN50t = BigInt("1287")
		const FairStockEquityllHC6ty = await FairStockEquity.new(addressZ6cP3PF, addressfkr6po3, addressNr3yNj, addressKXxyf5x, uintHbGN50t, {from: accounts[0]});
		const uintnGXgrOp = BigInt("501")
		const uintywV1zWi = BigInt("2004")
		await FairStockEquityllHC6ty.checkStart.call({from: accounts[4]});
		const uint256TBXizn = await FairStockEquityllHC6ty.invest.call(uintnGXgrOp, {from: accounts[5]});
		const uint256g3GaKT6 = await FairStockEquityllHC6ty.setProfitPercentBonus.call(uintywV1zWi, {from: accounts[2]});

		await expect(FairStockEquityllHC6ty.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMDjROv0 = "0x0000000000000000000000000000000000000001"
		const addressHvk5saH = accounts[0]
		const addressIv2V8qv = accounts[4]
		const addressI4E7bbs = accounts[4]
		const uintN8Knz1v = BigInt("1287")
		const FairStockEquityllHC6ty = await FairStockEquity.new(addressMDjROv0, addressHvk5saH, addressIv2V8qv, addressI4E7bbs, uintN8Knz1v, {from: accounts[0]});
		const uintxLuIxzS = BigInt("687")
		const uinttballtq = BigInt("540")
		const addresscB45XND = "0x0000000000000000000000000000000000000000"
		const uintPjbC9NG = BigInt("1886")
		const uint256S5fBDUo = await FairStockEquityllHC6ty.setGasFeeForCallback.call(uintxLuIxzS, {from: accounts[0]});
		await FairStockEquityllHC6ty.f.call({from: accounts[1]});
		const addresstyAgjhh = await FairStockEquityllHC6ty.depositLPT.call(addresscB45XND, uinttballtq, {from: accounts[2]});
		const uint256jdAZhJJ = await FairStockEquityllHC6ty.setGasFeeForCallback.call(uintPjbC9NG, {from: accounts[1]});

		await expect(FairStockEquityllHC6ty.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressGAqE0O = "0x0000000000000000000000000000000000000001"
		const addressfd8LKyB = accounts[0]
		const addressnjIkgwy = accounts[4]
		const addressBXonuZj = accounts[4]
		const uintzB29l35 = BigInt("1287")
		const FairStockEquityllHC6ty = await FairStockEquity.new(addressGAqE0O, addressfd8LKyB, addressnjIkgwy, addressBXonuZj, uintzB29l35, {from: accounts[0]});
		const uinto5L6BS9 = BigInt("498")
		const addressbOnYlhZ = "0x00000000000000000000000000000000000000-1"
		const uintyaJQqdc = BigInt("972")
		const uintECPQUPB = BigInt("498")
		const addresstyAgjhh = await FairStockEquityllHC6ty.depositLPT.call(addressbOnYlhZ, uinto5L6BS9, {from: accounts[2]});
		const uint256H0ASR8G = await FairStockEquityllHC6ty.setGasFeeForCallback.call(uintyaJQqdc, {from: accounts[5]});
		const uint256ATYEZ2U = await FairStockEquityllHC6ty.setGasFeeForCallback.call(uintECPQUPB, {from: accounts[2]});

		await expect(FairStockEquityllHC6ty.depositLPT.call(addressbOnYlhZ, uinto5L6BS9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressoYKIOnm = "0x0000000000000000000000000000000000000001"
		const addresslfUtydR = accounts[0]
		const addressacQk78 = accounts[4]
		const addressH2g7P7S = accounts[4]
		const uintveDw6zy = BigInt("1287")
		const FairStockEquityllHC6ty = await FairStockEquity.new(addressoYKIOnm, addresslfUtydR, addressacQk78, addressH2g7P7S, uintveDw6zy, {from: accounts[0]});
		const uintBn7ZOu = BigInt("1012")
		const uintLSS5uOa = BigInt("1761")
		const addresskQ1Hz86 = accounts[4]
		const uintk7O7gFL = BigInt("498")
		const addressIJtCccM = "0x0000000000000000000000000000000000000000"
		const addresszokaywp = await FairStockEquityllHC6ty.withdrawBonusCallback.call(addresskQ1Hz86, uintLSS5uOa, uintBn7ZOu, {from: accounts[4]});
		const addresstyAgjhh = await FairStockEquityllHC6ty.depositLPT.call(addressIJtCccM, uintk7O7gFL, {from: accounts[2]});

		await expect(FairStockEquityllHC6ty.withdrawBonusCallback.call(addresskQ1Hz86, uintLSS5uOa, uintBn7ZOu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressFHlOGTA = "0x0000000000000000000000000000000000000001"
		const addresscvAqRXc = accounts[0]
		const addressVBmD0eE = accounts[4]
		const addressp6wCLqC = accounts[4]
		const uintn8JcUJD = BigInt("1287")
		const FairStockEquityllHC6ty = await FairStockEquity.new(addressFHlOGTA, addresscvAqRXc, addressVBmD0eE, addressp6wCLqC, uintn8JcUJD, {from: accounts[0]});
		const uintHnvRbP = BigInt("1437")
		const uintm5TDqF = BigInt("247")
		const addressInovdhy = accounts[0]
		const uinto4C2yMu = BigInt("509")
		const uint256JAKUSg3 = await FairStockEquityllHC6ty.depositBonus.call(uintHnvRbP, {from: accounts[1]});
		const addresstXHU5NP = await FairStockEquityllHC6ty.depositLPT.call(addressInovdhy, uintm5TDqF, {from: accounts[3]});
		const uint256TBXizn = await FairStockEquityllHC6ty.invest.call(uinto4C2yMu, {from: accounts[5]});

		await expect(FairStockEquityllHC6ty.depositBonus.call(uintHnvRbP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUJK9xfh = "0x0000000000000000000000000000000000000001"
		const addressY4OmGbc = accounts[4]
		const addressgmr42mz = accounts[0]
		const addressJ00WfTA = accounts[0]
		const uintH1qPRcz = BigInt("62")
		const FairStockEquityBbAPa3 = await FairStockEquity.new(addressUJK9xfh, addressY4OmGbc, addressgmr42mz, addressJ00WfTA, uintH1qPRcz, {from: accounts[2]});
		const uintU73B2WA = BigInt("421")
		const uintfHqQMby = BigInt("1382")
		const addressjLrHGLu = "0x0000000000000000000000000000000000000001"
		const addressBq8Q04 = accounts[2]
		const uintSYkXxCR = BigInt("577")
		const addressVNEn2WH = accounts[4]
		const addressmx1uZGU = await FairStockEquityBbAPa3.withdrawMTCallback.call(addressjLrHGLu, uintfHqQMby, uintU73B2WA, {from: accounts[0]});
		const addressAHq47DM = await FairStockEquityBbAPa3.setDataSource.call(addressBq8Q04, {from: "0x0000000000000000000000000000000000000001"});
		const addresssZx9BSI = await FairStockEquityBbAPa3.withdrawLPT.call(addressVNEn2WH, uintSYkXxCR, {from: accounts[4]});

		await expect(FairStockEquityBbAPa3.withdrawMTCallback.call(addressjLrHGLu, uintfHqQMby, uintU73B2WA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslsDHwmX = "0x0000000000000000000000000000000000000001"
		const addressh5zmeGi = accounts[0]
		const addressfzICcFK = accounts[4]
		const addressJIENnRJ = accounts[4]
		const uintCNb3QuG = BigInt("1287")
		const FairStockEquityllHC6ty = await FairStockEquity.new(addresslsDHwmX, addressh5zmeGi, addressfzICcFK, addressJIENnRJ, uintCNb3QuG, {from: accounts[0]});
		const uintb6d1mWk = BigInt("841")
		const uintTX1tVWy = BigInt("493")
		const uint256uv4IyXO = await FairStockEquityllHC6ty.setStartTime.call(uintb6d1mWk, {from: accounts[0]});
		const uint256TBXizn = await FairStockEquityllHC6ty.invest.call(uintTX1tVWy, {from: accounts[5]});

		await expect(FairStockEquityllHC6ty.setStartTime.call(uintb6d1mWk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressm0v5Vj3 = accounts[4]
		const addressJ3eNxOS = "0x0000000000000000000000000000000000000001"
		const addressLQEzvp2 = accounts[1]
		const addressRezTd7v = accounts[2]
		const uintkWtFcZ4 = BigInt("1303")
		const FairStockEquityKUJziFo = await FairStockEquity.new(addressm0v5Vj3, addressJ3eNxOS, addressLQEzvp2, addressRezTd7v, uintkWtFcZ4, {from: accounts[3]});
		const uintOHLz2kP = BigInt("429")
		const uintVR3oqa = BigInt("1072")
		const uintGYKGmg = BigInt("453")
		const addressHWG9LZ = accounts[3]
		const uintclQvCU6 = BigInt("1470")
		const uint256JwdQoAD = await FairStockEquityKUJziFo.bonus.call(uintOHLz2kP, {from: accounts[2]});
		const uint256cE2aZK = await FairStockEquityKUJziFo.setStartTime.call(uintVR3oqa, {from: accounts[2]});
		const addresscm0kxhX = await FairStockEquityKUJziFo.depositLPT.call(addressHWG9LZ, uintGYKGmg, {from: accounts[4]});
		const uint2569muGJj = await FairStockEquityKUJziFo.reduceShare.call(uintclQvCU6, {from: accounts[3]});

		await expect(FairStockEquityKUJziFo.bonus.call(uintOHLz2kP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressB0upjWN = accounts[1]
		const addressHprHfKP = accounts[1]
		const addressuvBF5OJ = "0x0000000000000000000000000000000000000001"
		const addressboyDcJ0 = accounts[4]
		const uintlGAJ4Oz = BigInt("1999")
		const FairStockEquityPFYMFwX = await FairStockEquity.new(addressB0upjWN, addressHprHfKP, addressuvBF5OJ, addressboyDcJ0, uintlGAJ4Oz, {from: accounts[0]});
		const boolVXOW8cj = true
		const addressk8InB0B = accounts[2]
		const uinthXyE29r = BigInt("1892")
		const uintV6mrNek = BigInt("1697")
		const addressyqFoIfd = "0x0000000000000000000000000000000000000001"
		const uintAPNIw5h = BigInt("1887")
		const uintl3Pb0bG = BigInt("594")
		const addresslxeO4lF = accounts[3]
		await FairStockEquityPFYMFwX.withdrawPJ.call({from: accounts[0]});
		const addressGZc5622 = await FairStockEquityPFYMFwX.setLPT.call(addressk8InB0B, boolVXOW8cj, {from: accounts[1]});
		const address1pS9va = await FairStockEquityPFYMFwX.withdrawBonusCallback.call(addressyqFoIfd, uintV6mrNek, uinthXyE29r, {from: accounts[5]});
		await FairStockEquityPFYMFwX.withdrawBonus.call({from: accounts[2]});
		const addressEItrOX = await FairStockEquityPFYMFwX.withdrawBonusCallback.call(addresslxeO4lF, uintl3Pb0bG, uintAPNIw5h, {from: accounts[0]});

		await expect(FairStockEquityPFYMFwX.withdrawPJ.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresscuUgL0w = "0x0000000000000000000000000000000000000001"
		const addressKejSqiQ = accounts[0]
		const addressgXcIxs4 = accounts[4]
		const addressksEAvz4 = accounts[4]
		const uintraRaAQ = BigInt("1287")
		const FairStockEquityllHC6ty = await FairStockEquity.new(addresscuUgL0w, addressKejSqiQ, addressgXcIxs4, addressksEAvz4, uintraRaAQ, {from: accounts[0]});
		const uintYscW39e = BigInt("1370")
		const uinta4hcBHc = BigInt("760")
		const addressE8S53DF = accounts[0]
		const uintXoTbG6n = BigInt("513")
		const addressc63tjXP = "0x0000000000000000000000000000000000000000"
		const addressocNUwBb = await FairStockEquityllHC6ty.setModule.call(addressE8S53DF, uinta4hcBHc, uintYscW39e, {from: accounts[0]});
		const addresstyAgjhh = await FairStockEquityllHC6ty.depositLPT.call(addressc63tjXP, uintXoTbG6n, {from: accounts[2]});

		await expect(FairStockEquityllHC6ty.depositLPT.call(addressc63tjXP, uintXoTbG6n, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresssatPyOi = "0x0000000000000000000000000000000000000001"
		const addresslr9xHRt = accounts[0]
		const addressf8RZWK = accounts[4]
		const addressp65Ct1W = accounts[4]
		const uintMFvVBAt = BigInt("1287")
		const FairStockEquityllHC6ty = await FairStockEquity.new(addresssatPyOi, addresslr9xHRt, addressf8RZWK, addressp65Ct1W, uintMFvVBAt, {from: accounts[0]});
		const boollZYSc0b = false
		const addressMoZifS4 = accounts[3]
		const uintz4A9sb4 = BigInt("1208")
		const addressUIVl8wP = await FairStockEquityllHC6ty.setLPT.call(addressMoZifS4, boollZYSc0b, {from: accounts[0]});
		const uint256TBXizn = await FairStockEquityllHC6ty.invest.call(uintz4A9sb4, {from: accounts[5]});

		await expect(FairStockEquityllHC6ty.invest.call(uintz4A9sb4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})