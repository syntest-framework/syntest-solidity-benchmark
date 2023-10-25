const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const string8HVGww = "zLk4OT1OWnCRt0tA6ApDF52r4xqgImToBRm708SITOwepeL5as2PM5vidGmlvyH3SnIaruUYz8J"
		const stringL7lBtzp = "WGEgKWCuHwlULB9guQo7UHdIMam37md8"
		const uintQzrWEY5 = BigInt("1281")
		const OnXFinanceKoHxmQ1 = await OnXFinance.new(string8HVGww, stringL7lBtzp, uintQzrWEY5, {from: accounts[1]});
		const addresstKsSBpD = "0x0000000000000000000000000000000000000001"
		const uintKIzFHZR = BigInt("757")
		const addresseInMGFD = accounts[3]
		const uintz0LcGYf = BigInt("797")
		const addressbpFt1u = "0x0000000000000000000000000000000000000001"
		const addressh8e1L1v = accounts[3]
		const uintnC1Bziq = BigInt("1171")
		const addressQ0xQ9Lh = "0x0000000000000000000000000000000000000001"
		const addressLTPPpA = accounts[3]
		const uint0PaHUN = await OnXFinanceKoHxmQ1.balanceOf.call(addresstKsSBpD, {from: accounts[1]});
		const stringLrnIsW = await OnXFinanceKoHxmQ1.name.call({from: accounts[3]});
		const boolEGUEdiJ = await OnXFinanceKoHxmQ1.increaseAllowance.call(addresseInMGFD, uintKIzFHZR, {from: accounts[2]});
		const boolT3HWPfg = await OnXFinanceKoHxmQ1.approve.call(addressbpFt1u, uintz0LcGYf, {from: accounts[4]});
		const uintQUu0uyc = await OnXFinanceKoHxmQ1.balanceOf.call(addressh8e1L1v, {from: accounts[1]});
		const boolrtdfNzy = await OnXFinanceKoHxmQ1.transferFrom.call(addressLTPPpA, addressQ0xQ9Lh, uintnC1Bziq, {from: accounts[0]});

		assert.equal(stringLrnIsW, "zLk4OT1OWnCRt0tA6ApDF52r4xqgImToBRm708SITOwepeL5as2PM5vidGmlvyH3SnIaruUYz8J")
		assert.equal(uint0PaHUN, BigInt("0"))
		await expect(OnXFinanceKoHxmQ1.increaseAllowance.call(addresseInMGFD, uintKIzFHZR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringalKTfmq = "b5VGnToirUVDIPIMJ3sBd1Y4pCmh7ZFo2G6HC41BylTntJga6FWl8odX9UG3kTksYqQBLGsy3M5HnEHVZycAOxgWEwaaR5Wsk"
		const stringIl9IKOp = "9fVemDIgFk6quxAyLUiviaqj6F9Gd41xXNWr6Nd2yzjalRcQMu79pmfnP84GS72cDv37AWepOEcHNAn8D"
		const uintHHfMaY9 = BigInt("113")
		const OnXFinance3zOgG8 = await OnXFinance.new(stringalKTfmq, stringIl9IKOp, uintHHfMaY9, {from: accounts[0]});
		const addressl1tsP3j = accounts[4]
		const addressfHhlujL = accounts[0]
		const booloGblsu6 = await OnXFinance3zOgG8.transferownership.call(addressl1tsP3j, {from: accounts[2]});
		const uint8ll8SRKg = await OnXFinance3zOgG8.decimals.call({from: accounts[0]});
		const uintp2py2na = await OnXFinance3zOgG8.balanceOf.call(addressfHhlujL, {from: accounts[0]});

		await expect(OnXFinance3zOgG8.transferownership.call(addressl1tsP3j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringbXGsfsM = "hM44mOnDB85NGSWJOze2VLy9"
		const stringdenqGw = "0ikfLB2CjMtwIRDhxmdg1HSS0xDH8zx5192YXmlQcgnNpC1Udf3fJctLdLA1CFdPoSRz4B2TnDkiSWGJRp30eXEXhI"
		const uintuIKG0ON = BigInt("1540")
		const OnXFinancesjYGUbl = await OnXFinance.new(stringbXGsfsM, stringdenqGw, uintuIKG0ON, {from: accounts[2]});
		const uintgj9TXgy = BigInt("1702")
		const addresszQqVl4L = "0x0000000000000000000000000000000000000001"
		const stringUhJX5t2 = await OnXFinancesjYGUbl.symbol.call({from: accounts[3]});
		const boolViWRCu = await OnXFinancesjYGUbl.transfer.call(addresszQqVl4L, uintgj9TXgy, {from: accounts[4]});
		const stringdwJpXsW = await OnXFinancesjYGUbl.symbol.call({from: accounts[3]});

		assert.equal(stringUhJX5t2, "0ikfLB2CjMtwIRDhxmdg1HSS0xDH8zx5192YXmlQcgnNpC1Udf3fJctLdLA1CFdPoSRz4B2TnDkiSWGJRp30eXEXhI")
		await expect(OnXFinancesjYGUbl.transfer.call(addresszQqVl4L, uintgj9TXgy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXlOXSkg = "2uYkKduPj2gVcVVfhMle7QO6Ljn6oB6Dw8troOhz3xi34j8GtVXbQ"
		const stringmHXvCpo = "pMBDMJreaHhbLiCtPWGY7ByHBg7cwhqPOfA6VZcTutDISuGPq9Q3GNDYx7L1v8q3TujEuNGRie4yHFMnV6Gkz92wEnqndZTGw"
		const uintM34a0Yw = BigInt("1325")
		const OnXFinancexVhyrTo = await OnXFinance.new(stringXlOXSkg, stringmHXvCpo, uintM34a0Yw, {from: accounts[3]});
		const uintcFnTkj1 = BigInt("121")
		const addressaNgwQz3 = accounts[4]
		const uintQAoMGhn = BigInt("1568")
		const addressCO2ahy5 = accounts[4]
		const addressR2LMSJe = accounts[1]
		const uintgNZYdxF = BigInt("1652")
		const addressrpUENG8 = accounts[1]
		const stringNSLP2b9 = await OnXFinancexVhyrTo.name.call({from: accounts[4]});
		const bool7tupEE = await OnXFinancexVhyrTo.approve.call(addressaNgwQz3, uintcFnTkj1, {from: accounts[0]});
		const bool0b0qfV = await OnXFinancexVhyrTo.transferFrom.call(addressR2LMSJe, addressCO2ahy5, uintQAoMGhn, {from: accounts[4]});
		const boolISAiv5X = await OnXFinancexVhyrTo.transfer.call(addressrpUENG8, uintgNZYdxF, {from: accounts[1]});

		assert.equal(bool7tupEE, true)
		assert.equal(stringNSLP2b9, "2uYkKduPj2gVcVVfhMle7QO6Ljn6oB6Dw8troOhz3xi34j8GtVXbQ")
		await expect(OnXFinancexVhyrTo.transferFrom.call(addressR2LMSJe, addressCO2ahy5, uintQAoMGhn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringVNXOztD = "mAHG2Xv8gYB9dsdHTNotGcFkEXPbZBcsVPuA2vMopRNOA3Ynoh26uE"
		const stringIzCdEf = "L1echgFc9xgjHJN9GeLVEwIGnpi9wupOrDJcWSfDCv9LwlPu6hNe4sVUEJ72EJYIsY9Gue"
		const uintnfjJNcs = BigInt("192")
		const OnXFinanceLh11Fba = await OnXFinance.new(stringVNXOztD, stringIzCdEf, uintnfjJNcs, {from: accounts[5]});
		const uintM0nMHV = BigInt("246")
		const addressRV1Y8QZ = accounts[1]
		const uintQDWPuQ = BigInt("1572")
		const addressl2xasm = accounts[5]
		const uintkBfOUoC = BigInt("258")
		const addressKdAp0x7 = accounts[0]
		const uintl09990i = BigInt("567")
		const addressOxukmw = accounts[2]
		const boolY2IkkdZ = await OnXFinanceLh11Fba.transfer.call(addressRV1Y8QZ, uintM0nMHV, {from: accounts[5]});
		const boolaKhJHEN = await OnXFinanceLh11Fba.increaseAllowance.call(addressl2xasm, uintQDWPuQ, {from: accounts[2]});
		const boolRzkNuVg = await OnXFinanceLh11Fba.approveAndCall.call(addressKdAp0x7, uintkBfOUoC, {from: accounts[2]});
		const boolISCKlT3 = await OnXFinanceLh11Fba.increaseAllowance.call(addressOxukmw, uintl09990i, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolY2IkkdZ, true)
		await expect(OnXFinanceLh11Fba.increaseAllowance.call(addressl2xasm, uintQDWPuQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringeAZB5Av = "CD3e7RzXCisxN1d1guAyV1uMrkATJR6Lhirtf0z93uIqxeApibskjp4Crq6FLAmHRWNw7D4U8EDY8DcETSMpRM6bGldPUxR3"
		const stringGNIgwV0 = "GpQCAtgA7c6ezXhrrFMEo6uun4SMkH3ogW2o4Kdf7wtHfLfARHM82cJFFf8QNGH9IJxQg8K3KqfMA4x4irBNk8SpdmLgPg"
		const uintwxGGbXB = BigInt("206")
		const OnXFinancea91UghG = await OnXFinance.new(stringeAZB5Av, stringGNIgwV0, uintwxGGbXB, {from: accounts[0]});
		const uintGO8g56N = BigInt("12")
		const addressbpPrcP8 = accounts[2]
		const uintFUOPV9B = BigInt("837")
		const addressnYPSlvL = accounts[5]
		const uintNnTHYZ0 = BigInt("871")
		const addresswfLFCp = "0x0000000000000000000000000000000000000001"
		const addressemNAaZ7 = accounts[4]
		const boolmgU8Zb = await OnXFinancea91UghG.approveAndCall.call(addressbpPrcP8, uintGO8g56N, {from: accounts[4]});
		const stringm0qTjzT = await OnXFinancea91UghG.name.call({from: accounts[1]});
		const stringZYylOvV = await OnXFinancea91UghG.symbol.call({from: accounts[1]});
		const stringl5vOZd = await OnXFinancea91UghG.name.call({from: accounts[2]});
		const boolv2yp46c = await OnXFinancea91UghG.approve.call(addressnYPSlvL, uintFUOPV9B, {from: accounts[3]});
		const boolOMfXW1v = await OnXFinancea91UghG.approve.call(addresswfLFCp, uintNnTHYZ0, {from: accounts[4]});
		const uintoIF44z = await OnXFinancea91UghG.balanceOf.call(addressemNAaZ7, {from: accounts[2]});

		await expect(OnXFinancea91UghG.approveAndCall.call(addressbpPrcP8, uintGO8g56N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringalKTfmq = "b5VGnToirUVDIPIMJ3sBd1Y4pCmh7ZFo2G6HC41BylTntJga6FWl8odX9UG3kTksYqQBLGsy3M5HnEHVZycAOxgWEwaaR5Wsk"
		const stringIl9IKOp = "9fVemDIgFk6quxAyLUiviaqj6F9Gd41xXNWr6Nd2yzjalRcQMu79pmfnP84GS72cDv37AWepOEcHNAn8D"
		const uintm1OV31h = BigInt("113")
		const OnXFinance3zOgG8 = await OnXFinance.new(stringalKTfmq, stringIl9IKOp, uintm1OV31h, {from: accounts[0]});
		const addressqytQNS = accounts[2]
		const addressYaWH5kx = accounts[6]
		const boolcKbbMkD = await OnXFinance3zOgG8.transferownership.call(addressqytQNS, {from: accounts[0]});
		const booloGblsu6 = await OnXFinance3zOgG8.transferownership.call(addressYaWH5kx, {from: accounts[2]});

		assert.equal(boolcKbbMkD, true)
		await expect(OnXFinance3zOgG8.transferownership.call(addressYaWH5kx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringi3G7sju = "PxQCbn2IymcPv4YdmaTEuxSocTA6zbalWGaYOi"
		const stringiLPEIrQ = "62FdjDX63RmanT2hM3uSueVIUNql9"
		const uintSjiYFM1 = BigInt("22")
		const OnXFinanceEpeVrn5 = await OnXFinance.new(stringi3G7sju, stringiLPEIrQ, uintSjiYFM1, {from: "0x0000000000000000000000000000000000000001"});
		const uintG3wGdK = BigInt("1263")
		const addressmDiaWbe = accounts[5]
		const addressjxPq8yr = accounts[1]
		const uintwRLUk7F = BigInt("1579")
		const addressf6rgK8 = accounts[1]
		const addressVoPxqy8 = accounts[2]
		const uintTkLJHZ = BigInt("1612")
		const addressLHINXZ = accounts[4]
		const uintRobU8yn = BigInt("1289")
		const addressFnpRaow = accounts[0]
		const uintA8MPxhR = BigInt("1657")
		const addressE7Hdnu7 = accounts[3]
		const bool3HsSD9 = await OnXFinanceEpeVrn5.transferFrom.call(addressjxPq8yr, addressmDiaWbe, uintG3wGdK, {from: accounts[0]});
		const boolHJK1TTt = await OnXFinanceEpeVrn5.transferFrom.call(addressVoPxqy8, addressf6rgK8, uintwRLUk7F, {from: accounts[0]});
		const boolgGBCnJ = await OnXFinanceEpeVrn5.approveAndCall.call(addressLHINXZ, uintTkLJHZ, {from: accounts[5]});
		const boolWcm9lWS = await OnXFinanceEpeVrn5.transfer.call(addressFnpRaow, uintRobU8yn, {from: accounts[3]});
		const booljFJTlga = await OnXFinanceEpeVrn5.transfer.call(addressE7Hdnu7, uintA8MPxhR, {from: accounts[0]});
	});

	it('test for OnXFinance', async () => {
		const stringalKTfmq = "b5VGnToirUVDIPIMJ3sBd1Y4pCmh7ZFo2G6HC41BylTntJga6FWl8odX9UG3kTksYqQBLGsy3M5HnEHVZycAOxgWEwaaR5Wsk"
		const stringIl9IKOp = "9fVemDIgFk6quxAyLUiviaqj6F9Gd41xXNWr6Nd2yzjalRcQMu79pmfnP84GS72cDv37AWepOEcHNAn8D"
		const uintkA9lZf3 = BigInt("113")
		const OnXFinance3zOgG8 = await OnXFinance.new(stringalKTfmq, stringIl9IKOp, uintkA9lZf3, {from: accounts[0]});
		const uintgEbusn9 = BigInt("528")
		const addressjCkAdcl = accounts[1]
		const uintqETwFzP = BigInt("353")
		const addressCL1Upnr = accounts[4]
		const uintn6K9oJh = BigInt("1068")
		const addresscxtsy9 = accounts[3]
		const uintm6019x6 = BigInt("1368")
		const address6KwTdS = accounts[4]
		const boolJ94OvzT = await OnXFinance3zOgG8.approve.call(addressjCkAdcl, uintgEbusn9, {from: accounts[4]});
		const booldqfhsfI = await OnXFinance3zOgG8.approveAndCall.call(addressCL1Upnr, uintqETwFzP, {from: accounts[0]});
		const boolfheGSEs = await OnXFinance3zOgG8.transfer.call(addresscxtsy9, uintn6K9oJh, {from: accounts[2]});
		const boolOwI5JZR = await OnXFinance3zOgG8.increaseAllowance.call(address6KwTdS, uintm6019x6, {from: accounts[0]});

		assert.equal(boolJ94OvzT, true)
		assert.equal(booldqfhsfI, true)
		await expect(OnXFinance3zOgG8.transfer.call(addresscxtsy9, uintn6K9oJh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringVNXOztD = "mAHG2Xv8gYB9dsdHTNotGcFkEXPbZBcsVPuA2vMopRNOA3Ynoh26uE"
		const stringIzCdEf = "L1echgFc9xgjHJN9GeLVEwIGnpi9wupOrDJcWSfDCv9LwlPu6hNe4sVUEJ72EJYIsY9Gue"
		const uintEvbmxj = BigInt("192")
		const OnXFinanceLh11Fba = await OnXFinance.new(stringVNXOztD, stringIzCdEf, uintEvbmxj, {from: accounts[5]});
		const uintPsop4sA = BigInt("1396")
		const addressVb6bJRu = accounts[1]
		const uintF9kS0ut = BigInt("0")
		const addressDWTtkb6 = accounts[3]
		const addressHPVtmMu = accounts[5]
		const uintXthA9ZW = BigInt("1707")
		const addressizdtitY = accounts[2]
		const uintBWqsHhT = BigInt("199")
		const addressghXq91A = accounts[0]
		const boolY2IkkdZ = await OnXFinanceLh11Fba.transfer.call(addressVb6bJRu, uintPsop4sA, {from: accounts[5]});
		const boolqXUEnpW = await OnXFinanceLh11Fba.transferFrom.call(addressHPVtmMu, addressDWTtkb6, uintF9kS0ut, {from: accounts[3]});
		const boolbkOk5wH = await OnXFinanceLh11Fba.increaseAllowance.call(addressizdtitY, uintXthA9ZW, {from: accounts[0]});
		const boolApEdT4j = await OnXFinanceLh11Fba.approve.call(addressghXq91A, uintBWqsHhT, {from: "0x0000000000000000000000000000000000000001"});
		const uint8oEUeJB = await OnXFinanceLh11Fba.decimals.call({from: accounts[3]});

		assert.equal(boolY2IkkdZ, true)
		assert.equal(boolqXUEnpW, true)
		await expect(OnXFinanceLh11Fba.increaseAllowance.call(addressizdtitY, uintXthA9ZW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})