const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressX9ljiqP = accounts[3]
		const addressJqfcw8c = "0x0000000000000000000000000000000000000001"
		const addressRH5Xf7Z = accounts[3]
		const addressoGqKqrF = accounts[1]
		const uintMz6EuyR = BigInt("507")
		const FairStockEquityZXqXZ56 = await FairStockEquity.new(addressX9ljiqP, addressJqfcw8c, addressRH5Xf7Z, addressoGqKqrF, uintMz6EuyR, {from: accounts[4]});
		const uintH2GZTLa = BigInt("1250")
		const uint256VghNDXX = await FairStockEquityZXqXZ56.reduceShare.call(uintH2GZTLa, {from: accounts[0]});
		await FairStockEquityZXqXZ56.withdrawBonus.call({from: accounts[2]});

		await expect(FairStockEquityZXqXZ56.reduceShare.call(uintH2GZTLa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnGlimJj = accounts[4]
		const addressar2UOT0 = accounts[2]
		const addressfovLVz = accounts[3]
		const addressZYqxKvz = accounts[4]
		const uint5e6ksF = BigInt("1603")
		const FairStockEquityyCPxWaK = await FairStockEquity.new(addressnGlimJj, addressar2UOT0, addressfovLVz, addressZYqxKvz, uint5e6ksF, {from: accounts[4]});
		const uintHNmZmyO = BigInt("157")
		const uintYi4LhkC = BigInt("412")
		const addressoDSwWz = accounts[0]
		const uintaopAlIL = BigInt("991")
		await FairStockEquityyCPxWaK.withdrawPJ.call({from: accounts[1]});
		const addressQEBuZwE = await FairStockEquityyCPxWaK.setModule.call(addressoDSwWz, uintYi4LhkC, uintHNmZmyO, {from: accounts[5]});
		await FairStockEquityyCPxWaK.withdrawBonus.call({from: accounts[2]});
		await FairStockEquityyCPxWaK.withdrawBonus.call({from: accounts[1]});
		const uint256GwNDvf2 = await FairStockEquityyCPxWaK.invest.call(uintaopAlIL, {from: accounts[4]});

		await expect(FairStockEquityyCPxWaK.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address9uFGCq = accounts[2]
		const addressJ9PKDiS = accounts[2]
		const addressMcxxjPi = accounts[4]
		const addressao1n6kj = accounts[0]
		const uintg0ZAnUk = BigInt("765")
		const FairStockEquityirZ8Gjh = await FairStockEquity.new(address9uFGCq, addressJ9PKDiS, addressMcxxjPi, addressao1n6kj, uintg0ZAnUk, {from: accounts[0]});
		const addressJuZ6C7H = accounts[0]
		const uintjUXL1xT = BigInt("122")
		const uintQ8cxG3t = BigInt("1340")
		await FairStockEquityirZ8Gjh.checkStart.call({from: accounts[0]});
		const addressxqdcuiM = await FairStockEquityirZ8Gjh.setDataSource.call(addressJuZ6C7H, {from: accounts[5]});
		const uint256E4FNQr = await FairStockEquityirZ8Gjh.depositBonus.call(uintjUXL1xT, {from: accounts[4]});
		await FairStockEquityirZ8Gjh.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fUgAUxX = await FairStockEquityirZ8Gjh.invest.call(uintQ8cxG3t, {from: accounts[1]});

		await expect(FairStockEquityirZ8Gjh.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressfP49AU = accounts[1]
		const addressM2SDKbo = "0x0000000000000000000000000000000000000001"
		const addressCCi7hWu = accounts[1]
		const addressS2LaDWd = accounts[1]
		const uintlbbFO17 = BigInt("783")
		const FairStockEquitymEtuGF = await FairStockEquity.new(addressfP49AU, addressM2SDKbo, addressCCi7hWu, addressS2LaDWd, uintlbbFO17, {from: accounts[5]});
		const uintL4UhHUs = BigInt("698")
		const uintYXUUctR = BigInt("421")
		const uintNYZWnR = BigInt("211")
		const uintwDfQyP = BigInt("1608")
		const uintPP1pOA = BigInt("1582")
		const uintbdYdQx3 = BigInt("679")
		const uint256SCFceF9 = await FairStockEquitymEtuGF.setProfitPercentPJ.call(uintL4UhHUs, {from: accounts[1]});
		const uint256CGKThvK = await FairStockEquitymEtuGF.setDegree.call(uintbdYdQx3, uintPP1pOA, uintwDfQyP, uintNYZWnR, uintYXUUctR, {from: accounts[5]});

		await expect(FairStockEquitymEtuGF.setProfitPercentPJ.call(uintL4UhHUs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNfjeMQ8 = accounts[4]
		const addresskMF6zBC = accounts[1]
		const addressQNMHOiT = accounts[5]
		const addressqWzIEda = accounts[4]
		const uintkbONeKK = BigInt("660")
		const FairStockEquityIILHA4h = await FairStockEquity.new(addressNfjeMQ8, addresskMF6zBC, addressQNMHOiT, addressqWzIEda, uintkbONeKK, {from: accounts[3]});
		const uintTn1OINA = BigInt("132")
		const uintBxp8Kx7 = BigInt("1923")
		const uintzLdkKaT = BigInt("1432")
		const uintIOKsoT7 = BigInt("1979")
		const uint256E8r8F1b = await FairStockEquityIILHA4h.bonus.call(uintTn1OINA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256r3vbC62 = await FairStockEquityIILHA4h.setStartTime.call(uintBxp8Kx7, {from: accounts[3]});
		const uint256Yy7txW = await FairStockEquityIILHA4h.setProfitPercentMT.call(uintzLdkKaT, {from: accounts[4]});
		const uint256DBDxOk = await FairStockEquityIILHA4h.getCostAmount.call(uintIOKsoT7, {from: accounts[3]});

		await expect(FairStockEquityIILHA4h.bonus.call(uintTn1OINA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqxIbdvc = "0x0000000000000000000000000000000000000001"
		const addressXh1Nry = accounts[3]
		const addressyvukhB8 = accounts[1]
		const addressG7eMyg = "0x0000000000000000000000000000000000000001"
		const uintsqSRSIG = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addressqxIbdvc, addressXh1Nry, addressyvukhB8, addressG7eMyg, uintsqSRSIG, {from: accounts[1]});
		const uintp65iXE5 = BigInt("104")
		const uintLcHAhrg = BigInt("1412")
		const uintcDgDi86 = BigInt("798")
		const uintikjrGpA = BigInt("612")
		const addressWgU4w3R = accounts[2]
		const uintrZhFqVR = BigInt("218")
		const uintUhcL42X = BigInt("1956")
		const addresslOPEgGm = accounts[0]
		const uintYeSMjjV = BigInt("759")
		const addressxiRDNdC = await FairStockEquityOPYgXtp.business.call(addressWgU4w3R, uintikjrGpA, uintcDgDi86, uintLcHAhrg, uintp65iXE5, {from: accounts[1]});
		const addresspGQbKdw = await FairStockEquityOPYgXtp.withdrawBonusCallback.call(addresslOPEgGm, uintUhcL42X, uintrZhFqVR, {from: accounts[1]});
		const uint256MpaR1OP = await FairStockEquityOPYgXtp.setStartTime.call(uintYeSMjjV, {from: accounts[0]});

		await expect(FairStockEquityOPYgXtp.business.call(addressWgU4w3R, uintikjrGpA, uintcDgDi86, uintLcHAhrg, uintp65iXE5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZf0mqsB = "0x0000000000000000000000000000000000000001"
		const addressZgsugYL = accounts[1]
		const addressVezCwEM = accounts[0]
		const addressXr0Goik = accounts[1]
		const uintzNoRMCX = BigInt("1479")
		const FairStockEquitysWGXtaR = await FairStockEquity.new(addressZf0mqsB, addressZgsugYL, addressVezCwEM, addressXr0Goik, uintzNoRMCX, {from: accounts[1]});
		const uintORXRqDa = BigInt("414")
		const uintRh5ibU2 = BigInt("1797")
		const uintWGIF8aB = BigInt("1219")
		const uintBYvgdVA = BigInt("284")
		const uintMDNTsfH = BigInt("317")
		const addresspLBGFEf = "0x0000000000000000000000000000000000000001"
		const uintYKbXDLF = BigInt("457")
		const uint256ldHRqZp = await FairStockEquitysWGXtaR.depositBonus.call(uintORXRqDa, {from: accounts[3]});
		const addresstKuEQjY = await FairStockEquitysWGXtaR.business.call(addresspLBGFEf, uintMDNTsfH, uintBYvgdVA, uintWGIF8aB, uintRh5ibU2, {from: accounts[2]});
		const uint256dmIRsm = await FairStockEquitysWGXtaR.reduceShare.call(uintYKbXDLF, {from: accounts[1]});

		await expect(FairStockEquitysWGXtaR.depositBonus.call(uintORXRqDa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBWgnb9N = accounts[4]
		const addressNzqL7c1 = accounts[3]
		const addressvNUXiC6 = accounts[3]
		const addressGXTSrNU = accounts[3]
		const uintDZSBOnb = BigInt("1161")
		const FairStockEquitypHynokF = await FairStockEquity.new(addressBWgnb9N, addressNzqL7c1, addressvNUXiC6, addressGXTSrNU, uintDZSBOnb, {from: accounts[2]});
		const uintTAQYxGY = BigInt("1473")
		const addresstQ7LHyu = accounts[0]
		await FairStockEquitypHynokF.withdrawMT.call({from: accounts[2]});
		await FairStockEquitypHynokF.withdrawPJ.call({from: "0x0000000000000000000000000000000000000001"});
		const addressej35jN = await FairStockEquitypHynokF.withdrawLPT.call(addresstQ7LHyu, uintTAQYxGY, {from: accounts[2]});

		await expect(FairStockEquitypHynokF.withdrawMT.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBGPc5G = "0x0000000000000000000000000000000000000001"
		const addressNuv1nXN = accounts[3]
		const addresstv223Sc = accounts[1]
		const addressIa6zDzK = "0x0000000000000000000000000000000000000001"
		const uintBc5XTM = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addressBGPc5G, addressNuv1nXN, addresstv223Sc, addressIa6zDzK, uintBc5XTM, {from: accounts[1]});
		const uintgRllhm = BigInt("1727")
		const uintaJHnbRd = BigInt("218")
		const uintZcN3QwN = BigInt("1956")
		const addressygfYLQx = accounts[1]
		const uintBKx2Ex9 = BigInt("1731")
		const uintoqJXj7G = BigInt("155")
		const uint256XE9PA7T = await FairStockEquityOPYgXtp.getCostAmount.call(uintgRllhm, {from: accounts[5]});
		const addresspGQbKdw = await FairStockEquityOPYgXtp.withdrawBonusCallback.call(addressygfYLQx, uintZcN3QwN, uintaJHnbRd, {from: accounts[1]});
		const uint256NXKaCzp = await FairStockEquityOPYgXtp.setProfitPercentBonus.call(uintBKx2Ex9, {from: accounts[1]});
		const uint256eL3BdEp = await FairStockEquityOPYgXtp.setGasFeeForCallback.call(uintoqJXj7G, {from: accounts[0]});

		await expect(FairStockEquityOPYgXtp.withdrawBonusCallback.call(addressygfYLQx, uintZcN3QwN, uintaJHnbRd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQjmxEyC = accounts[4]
		const addressIx5Lcrp = "0x0000000000000000000000000000000000000001"
		const addressInowls = accounts[0]
		const addressjNn9KMj = accounts[5]
		const uintVG06aW8 = BigInt("1115")
		const FairStockEquityzICdSqI = await FairStockEquity.new(addressQjmxEyC, addressIx5Lcrp, addressInowls, addressjNn9KMj, uintVG06aW8, {from: accounts[0]});
		const uintzmWeVC = BigInt("1352")
		const addressCleXm2H = accounts[2]
		const uintwNgswXi = BigInt("1726")
		const uintvBteLyX = BigInt("1588")
		const addressOFe5yVc = await FairStockEquityzICdSqI.depositLPT.call(addressCleXm2H, uintzmWeVC, {from: accounts[4]});
		const uint256ia2f08S = await FairStockEquityzICdSqI.getCostAmount.call(uintwNgswXi, {from: accounts[3]});
		const uint256FsTSXkF = await FairStockEquityzICdSqI.setGasFeeForCallback.call(uintvBteLyX, {from: accounts[2]});
		await FairStockEquityzICdSqI.checkStart.call({from: accounts[0]});

		await expect(FairStockEquityzICdSqI.depositLPT.call(addressCleXm2H, uintzmWeVC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressg8U8P3d = "0x0000000000000000000000000000000000000001"
		const addressMujGnv3 = accounts[3]
		const addressVEPZ2Fh = accounts[1]
		const addressi5Px5fN = "0x0000000000000000000000000000000000000001"
		const uintBnlGyD9 = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addressg8U8P3d, addressMujGnv3, addressVEPZ2Fh, addressi5Px5fN, uintBnlGyD9, {from: accounts[1]});
		const uintt3mpJTV = BigInt("1157")
		const uintE9OOMWz = BigInt("218")
		const uintUk9ffKt = BigInt("786")
		const addressn2uahfv = accounts[1]
		await FairStockEquityOPYgXtp.f.call({from: accounts[0]});
		const uint256YHTIyel = await FairStockEquityOPYgXtp.invest.call(uintt3mpJTV, {from: accounts[0]});
		const addresspGQbKdw = await FairStockEquityOPYgXtp.withdrawBonusCallback.call(addressn2uahfv, uintUk9ffKt, uintE9OOMWz, {from: accounts[1]});

		await expect(FairStockEquityOPYgXtp.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEWWFKQf = "0x0000000000000000000000000000000000000001"
		const addressH9pwf1D = accounts[3]
		const addressFH7KHP = accounts[1]
		const addressKnPD4I2 = "0x0000000000000000000000000000000000000001"
		const uintvpCTkd8 = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addressEWWFKQf, addressH9pwf1D, addressFH7KHP, addressKnPD4I2, uintvpCTkd8, {from: accounts[1]});
		const uinttJfH7k = BigInt("218")
		const uintJeLAyxw = BigInt("1956")
		const addresswoZxvs5 = accounts[2]
		await FairStockEquityOPYgXtp.withdrawBonus.call({from: accounts[0]});
		const addresspGQbKdw = await FairStockEquityOPYgXtp.withdrawBonusCallback.call(addresswoZxvs5, uintJeLAyxw, uinttJfH7k, {from: accounts[1]});

		await expect(FairStockEquityOPYgXtp.withdrawBonus.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressGMQ7bJl = "0x0000000000000000000000000000000000000001"
		const addressZXoDCC0 = accounts[3]
		const addressqdlKpdH = accounts[1]
		const addressH3j39W1 = "0x0000000000000000000000000000000000000001"
		const uintb1FYTbH = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addressGMQ7bJl, addressZXoDCC0, addressqdlKpdH, addressH3j39W1, uintb1FYTbH, {from: accounts[1]});
		const uintOfZrFtu = BigInt("405")
		const uintzunJleC = BigInt("1448")
		const addressYRaxNY = accounts[4]
		const uintqpVvHFC = BigInt("218")
		const uintP7MiGE6 = BigInt("1956")
		const addressc0PELJv = accounts[4]
		const uintgh0E4AP = BigInt("1515")
		const uintf6k4efQ = BigInt("697")
		const addressCc1x3nE = accounts[4]
		const addressddhoEzW = await FairStockEquityOPYgXtp.setModule.call(addressYRaxNY, uintzunJleC, uintOfZrFtu, {from: accounts[1]});
		const addresspGQbKdw = await FairStockEquityOPYgXtp.withdrawBonusCallback.call(addressc0PELJv, uintP7MiGE6, uintqpVvHFC, {from: accounts[1]});
		const addressE0GEcNt = await FairStockEquityOPYgXtp.setModule.call(addressCc1x3nE, uintf6k4efQ, uintgh0E4AP, {from: accounts[1]});

		await expect(FairStockEquityOPYgXtp.withdrawBonusCallback.call(addressc0PELJv, uintP7MiGE6, uintqpVvHFC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresstwxNnyn = accounts[2]
		const addressKqXset8 = accounts[0]
		const addressE2AwXc = accounts[4]
		const addressqBuqtl4 = "0x0000000000000000000000000000000000000001"
		const uintvMQJKPN = BigInt("213")
		const FairStockEquityQR8Mjo9 = await FairStockEquity.new(addresstwxNnyn, addressKqXset8, addressE2AwXc, addressqBuqtl4, uintvMQJKPN, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityQR8Mjo9.withdrawBonus.call({from: accounts[1]});
		await FairStockEquityQR8Mjo9.withdrawPJ.call({from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressoPIx2n = "0x0000000000000000000000000000000000000001"
		const addressN0OYfRB = accounts[3]
		const addresss9rB4gY = accounts[1]
		const addressOexCnTp = "0x0000000000000000000000000000000000000001"
		const uintF698w3 = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addressoPIx2n, addressN0OYfRB, addresss9rB4gY, addressOexCnTp, uintF698w3, {from: accounts[1]});
		const uintR32v1Kt = BigInt("681")
		const uintY6y2RF = BigInt("1286")
		const addressbfS986R = accounts[0]
		const uintx6brj1p = BigInt("218")
		const uinteqldvr = BigInt("1967")
		const addressE0QjFdN = accounts[1]
		const addressNZuOSQ6 = await FairStockEquityOPYgXtp.withdrawMTCallback.call(addressbfS986R, uintY6y2RF, uintR32v1Kt, {from: "0x0000000000000000000000000000000000000001"});
		const addresspGQbKdw = await FairStockEquityOPYgXtp.withdrawBonusCallback.call(addressE0QjFdN, uinteqldvr, uintx6brj1p, {from: accounts[1]});
		await FairStockEquityOPYgXtp.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquityOPYgXtp.withdrawMTCallback.call(addressbfS986R, uintY6y2RF, uintR32v1Kt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxH9Pn9Z = "0x0000000000000000000000000000000000000001"
		const addressqQEqq54 = accounts[3]
		const addressnPq4BAl = accounts[1]
		const addressTfufAEZ = "0x0000000000000000000000000000000000000001"
		const uintxalqtuf = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addressxH9Pn9Z, addressqQEqq54, addressnPq4BAl, addressTfufAEZ, uintxalqtuf, {from: accounts[1]});
		const uintIan1yZw = BigInt("69")
		const uintIrpolx = BigInt("1506")
		const uintnKRrYI = BigInt("296")
		const addressvGPVfrv = accounts[5]
		const uintbuFhoTn = BigInt("1157")
		const uint256eyr3aRu = await FairStockEquityOPYgXtp.setStartTime.call(uintIan1yZw, {from: accounts[1]});
		const addressbk5xNWK = await FairStockEquityOPYgXtp.setModule.call(addressvGPVfrv, uintnKRrYI, uintIrpolx, {from: accounts[0]});
		const uint256YHTIyel = await FairStockEquityOPYgXtp.invest.call(uintbuFhoTn, {from: accounts[0]});

		await expect(FairStockEquityOPYgXtp.setStartTime.call(uintIan1yZw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresskbDLaOK = "0x0000000000000000000000000000000000000001"
		const addresslSJ4Vpe = accounts[3]
		const addresstBtFrbO = accounts[1]
		const addressg2UPue7 = "0x0000000000000000000000000000000000000001"
		const uintb8X57U = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addresskbDLaOK, addresslSJ4Vpe, addresstBtFrbO, addressg2UPue7, uintb8X57U, {from: accounts[1]});
		const uintth6uArS = BigInt("431")
		const addressIZZOlk6 = accounts[0]
		const uintJopCGi4 = BigInt("1008")
		const addressIFZhflJ = await FairStockEquityOPYgXtp.withdrawLPT.call(addressIZZOlk6, uintth6uArS, {from: accounts[3]});
		const uint256YHTIyel = await FairStockEquityOPYgXtp.invest.call(uintJopCGi4, {from: accounts[0]});

		await expect(FairStockEquityOPYgXtp.withdrawLPT.call(addressIZZOlk6, uintth6uArS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszxQCu6I = "0x0000000000000000000000000000000000000001"
		const addressibJJa4D = accounts[3]
		const addresscTwfKzW = accounts[1]
		const addressjhMA8NN = "0x0000000000000000000000000000000000000001"
		const uintQifTltK = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addresszxQCu6I, addressibJJa4D, addresscTwfKzW, addressjhMA8NN, uintQifTltK, {from: accounts[1]});
		const boolLp724PO = false
		const addressYrWcHQz = "0x0000000000000000000000000000000000000001"
		const uintH0qdb6z = BigInt("1157")
		const addressjB29ZnU = await FairStockEquityOPYgXtp.setLPT.call(addressYrWcHQz, boolLp724PO, {from: accounts[1]});
		const uint256YHTIyel = await FairStockEquityOPYgXtp.invest.call(uintH0qdb6z, {from: accounts[0]});

		await expect(FairStockEquityOPYgXtp.invest.call(uintH0qdb6z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressv9TdjbB = "0x0000000000000000000000000000000000000001"
		const addressW1kBzHq = accounts[3]
		const addressoxaIpnl = accounts[1]
		const addressAxlZeIJ = "0x0000000000000000000000000000000000000001"
		const uintyuiGHDH = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addressv9TdjbB, addressW1kBzHq, addressoxaIpnl, addressAxlZeIJ, uintyuiGHDH, {from: accounts[1]});
		const uintNV5w7i = BigInt("1281")
		const uintqiXWAZH = BigInt("218")
		const uintMbfcwGW = BigInt("1956")
		const addressvZEgp7B = accounts[3]
		await FairStockEquityOPYgXtp.withdrawPJ.call({from: accounts[1]});
		const uint256fR8drb6 = await FairStockEquityOPYgXtp.setProfitPercentPJ.call(uintNV5w7i, {from: accounts[2]});
		const addresspGQbKdw = await FairStockEquityOPYgXtp.withdrawBonusCallback.call(addressvZEgp7B, uintMbfcwGW, uintqiXWAZH, {from: accounts[1]});

		await expect(FairStockEquityOPYgXtp.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDf3fElF = "0x0000000000000000000000000000000000000001"
		const addressXnK6e9 = accounts[3]
		const addressKkhVLcy = accounts[1]
		const addressXLZ2QwO = "0x0000000000000000000000000000000000000001"
		const uintG8laITh = BigInt("979")
		const FairStockEquityOPYgXtp = await FairStockEquity.new(addressDf3fElF, addressXnK6e9, addressKkhVLcy, addressXLZ2QwO, uintG8laITh, {from: accounts[1]});
		const uintNykQcQi = BigInt("513")
		const uint4T9Xcr = BigInt("870")
		const addresssqz5wtO = accounts[1]
		const uintw80sx2k = BigInt("218")
		const uintWHX68yb = BigInt("1956")
		const addressbFmvXM6 = accounts[1]
		const addressnOQSs9u = await FairStockEquityOPYgXtp.withdrawBonusCallback.call(addresssqz5wtO, uint4T9Xcr, uintNykQcQi, {from: "0x0000000000000000000000000000000000000001"});
		const addresspGQbKdw = await FairStockEquityOPYgXtp.withdrawBonusCallback.call(addressbFmvXM6, uintWHX68yb, uintw80sx2k, {from: accounts[1]});

		await expect(FairStockEquityOPYgXtp.withdrawBonusCallback.call(addresssqz5wtO, uint4T9Xcr, uintNykQcQi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})