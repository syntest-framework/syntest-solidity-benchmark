const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringLp2i1OC = "JuGjoZcP2Bsdyw4UvIpx7AyhAB3q6WlspwbtHG"
		const stringbYpHNeR = "K9FUQkEZZV6jxjKShaGSyRcta4q7xcMBIeDnwyj8cBH9OPN5xoAWJHqJ9z9jz6fGfclw5N74CMKYfl3xByfvUezmnz2pPPw"
		const uintnesZXZ = BigInt("1758")
		const uintidEWw2k = BigInt("83")
		const XenoFelixFPewx8 = await XenoFelix.new(stringLp2i1OC, stringbYpHNeR, uintnesZXZ, uintidEWw2k, {from: accounts[3]});
		const uintaYp58Zn = BigInt("949")
		const addressZ4LCWxX = accounts[0]
		const addresspRllu2O = accounts[2]
		const addresstg0mMs = accounts[3]
		const stringGv8ntl = await XenoFelixFPewx8.symbol.call({from: accounts[1]});
//		const boolkLsRlCV = await XenoFelixFPewx8.transfer.call(addressZ4LCWxX, uintaYp58Zn, {from: accounts[0]});
//		const addressKetvRdE = await XenoFelixFPewx8.addPauser.call(addresspRllu2O, {from: accounts[1]});
//		const boolnkVWHgC = await XenoFelixFPewx8.isOwner.call(addresstg0mMs, {from: accounts[5]});

		assert.equal(stringGv8ntl, "K9FUQkEZZV6jxjKShaGSyRcta4q7xcMBIeDnwyj8cBH9OPN5xoAWJHqJ9z9jz6fGfclw5N74CMKYfl3xByfvUezmnz2pPPw")
		await expect(XenoFelixFPewx8.transfer.call(addressZ4LCWxX, uintaYp58Zn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string0mnm8e = "wPXDjbVmLt3kxkjoRrl6lxoYG9pgm"
		const stringSryW41k = "NVuStaKJ3nXtpqVJaDpHarSnwyCS5MnDlRzNzNhH"
		const uintlehDDuO = BigInt("43")
		const XenoFelixb8VFdZx = await XenoFelix.new(string0mnm8e, stringSryW41k, uintlehDDuO, {from: accounts[5]});
		const addressqyYKhkI = accounts[2]
		const uintGJnltVp = BigInt("1370")
		const addressCOlsfz = accounts[1]
		const addressqWFh2EU = accounts[2]
		const boolDkg83Iz = await XenoFelixb8VFdZx.unfreezeAccount.call(addressqyYKhkI, {from: accounts[1]});
		const booluRwuKw = await XenoFelixb8VFdZx.transferFrom.call(addressqWFh2EU, addressCOlsfz, uintGJnltVp, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixb8VFdZx.renouncePauser.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringP1brBSR = "4vJR"
		const stringrQkH77u = "HT7JAal1h"
		const uintH5o058q = BigInt("730")
		const uintZQ2DkG = BigInt("164")
		const XenoFelixPlDmua = await XenoFelix.new(stringP1brBSR, stringrQkH77u, uintH5o058q, uintZQ2DkG, {from: accounts[0]});
		const addressWTwz9O = accounts[3]
		const addressG9MnDV = accounts[1]
		const addressplyGTuL = "0x0000000000000000000000000000000000000001"
		const addresszGATAw = accounts[0]
		const addresswC458U9 = accounts[0]
//		const addresszH2IPuH = await XenoFelixPlDmua.notFrozen.call(addressWTwz9O, {from: accounts[0]});
//		const boolF14Ubv9 = await XenoFelixPlDmua.freezeAccount.call(addressG9MnDV, {from: accounts[3]});
//		const addressBUNq7mC = await XenoFelixPlDmua.addPauser.call(addressplyGTuL, {from: accounts[5]});
//		const uint256KWVJl92 = await XenoFelixPlDmua.allowance.call(addresswC458U9, addresszGATAw, {from: accounts[0]});

		await expect(XenoFelixPlDmua.notFrozen.call(addressWTwz9O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringh1Epl5g = "eVFcnzy4SIU4isfd59D"
		const stringxuHOhcA = "ppKtYTvlxxuyTYHKsnPK8wuGC9Y2yoND8Jhl31X55CCyFodsT1ospz"
		const uintuDRximG = BigInt("742")
		const uintSzRdzav = BigInt("101")
		const XenoFelixfLotvc3 = await XenoFelix.new(stringh1Epl5g, stringxuHOhcA, uintuDRximG, uintSzRdzav, {from: accounts[2]});
		const addressNJ2m8Bb = accounts[0]
		const addressXRR8KHX = accounts[5]
		const uintfgW2QoR = BigInt("513")
		const uintgWs9b0l = BigInt("1213")
		const addressb0luNw8 = accounts[1]
		const uint256TL1QWC9 = await XenoFelixfLotvc3.allowance.call(addressXRR8KHX, addressNJ2m8Bb, {from: accounts[4]});
		const stringk6k7T5q = await XenoFelixfLotvc3.symbol.call({from: accounts[0]});
//		const boole2BdnP8 = await XenoFelixfLotvc3.transferWithLock.call(addressb0luNw8, uintgWs9b0l, uintfgW2QoR, {from: accounts[4]});

		assert.equal(stringk6k7T5q, "ppKtYTvlxxuyTYHKsnPK8wuGC9Y2yoND8Jhl31X55CCyFodsT1ospz")
		assert.equal(uint256TL1QWC9, BigInt("0"))
		await expect(XenoFelixfLotvc3.transferWithLock.call(addressb0luNw8, uintgWs9b0l, uintfgW2QoR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string7vVjXG = "z9I4pc6V1eGtnewgUSiLCl693lDXibvc8jSDBMbbPjcwYyOR2kpGJVxNK2wLeTSMb63CG9AiBguEVNCm6P5NxLpnsvpXrcbF4Ki"
		const stringT95jqfo = "BOF"
		const uintvSpddpW = BigInt("1299")
		const uintYxUf39 = BigInt("220")
		const XenoFelixtTSoRN = await XenoFelix.new(string7vVjXG, stringT95jqfo, uintvSpddpW, uintYxUf39, {from: accounts[2]});
		const addressBA9nL2G = accounts[0]
		const uintqRvvuMH = BigInt("138")
		const addresslqxczJ4 = accounts[0]
		const boolI6TsIFB = await XenoFelixtTSoRN.isOwner.call(addressBA9nL2G, {from: accounts[4]});
//		await XenoFelixtTSoRN.renouncePauser.call({from: accounts[1]});
//		const boolufeq05d = await XenoFelixtTSoRN.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolmEFp3Mn = await XenoFelixtTSoRN.transfer.call(addresslqxczJ4, uintqRvvuMH, {from: accounts[3]});
//		const booli8jL3uz = await XenoFelixtTSoRN.acceptOwnership.call({from: accounts[2]});

		assert.equal(boolI6TsIFB, false)
		await expect(XenoFelixtTSoRN.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixBq8npVp = await XenoFelix.new({from: accounts[4]});
		const addressMlyEDIp = accounts[3]
		const uintaHS2cF = BigInt("701")
		const addressfljsB9c = accounts[4]
		const addressqeF2CGp = accounts[2]
		const addressGBz92D2 = "0x0000000000000000000000000000000000000001"
		const uint256H02alRn = await XenoFelixBq8npVp.balanceOf.call(addressMlyEDIp, {from: accounts[5]});
		const boolTjDdn1A = await XenoFelixBq8npVp.transfer.call(addressfljsB9c, uintaHS2cF, {from: accounts[1]});
		const boolEVpX2Sd = await XenoFelixBq8npVp.unfreezeAccount.call(addressqeF2CGp, {from: accounts[1]});
		const uint256ltUpBOv = await XenoFelixBq8npVp.balanceOf.call(addressGBz92D2, {from: accounts[2]});
		const bool7pViH9 = await XenoFelixBq8npVp.acceptOwnership.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringtOS58Pd = "ckeCslQvg9uQsaZIWapE3k85jFdBIH1zsfibqPO2ov2LIrfOfj4utoztUas55tOekcG43hjXybLR1FmCCdQm62jYSIe2ggV"
		const stringXiG2R4J = "amYEh5D4oUFnO4WpsKVT"
		const uintf9WrmrX = BigInt("153")
		const XenoFelixHeGR5I = await XenoFelix.new(stringtOS58Pd, stringXiG2R4J, uintf9WrmrX, {from: accounts[1]});
		const uintSk5metY = BigInt("662")
		const addressCW6vHrA = accounts[1]
		const addresshGV7HoI = accounts[2]
		const addressSKVH5UZ = await XenoFelixHeGR5I.burnFrom.call(addressCW6vHrA, uintSk5metY, {from: accounts[4]});
		const stringq1aiR23 = await XenoFelixHeGR5I.name.call({from: "0x0000000000000000000000000000000000000001"});
		const addressu1D0G57 = await XenoFelixHeGR5I.transferOwnership.call(addresshGV7HoI, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringbKzr2r = "ZJkcQaairw1nK3FpKdzcaKO"
		const stringFsrrnnr = "dvAJ9lVcK5WOQkA9YOXGXKIJrxz"
		const uintpbQuNVM = BigInt("378")
		const uinty32GRYv = BigInt("101")
		const XenoFelixi4KB5jd = await XenoFelix.new(stringbKzr2r, stringFsrrnnr, uintpbQuNVM, uinty32GRYv, {from: "0x0000000000000000000000000000000000000001"});
		const addresssEudsWk = accounts[3]
		await XenoFelixi4KB5jd.onlyOwner.call({from: accounts[4]});
		await XenoFelixi4KB5jd.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256p60sTVb = await XenoFelixi4KB5jd.totalSupply.call({from: accounts[3]});
		const addressYXj1Kwl = await XenoFelixi4KB5jd.addPauser.call(addresssEudsWk, {from: accounts[5]});
		await XenoFelixi4KB5jd.pause.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringesBlYCA = "nTOPq5bM898p3IsyTLkWJDVbFP8HLLL"
		const stringAqZaac4 = "Orb9PaUDHQ1LMmgpPbClDJdOtHJ3NQyeZllRGnH1CzY1q24E1xI785XXeYHN39"
		const uintfSHaBeE = BigInt("457")
		const uint4kDZ2T = BigInt("32")
		const XenoFelixBytSFr3 = await XenoFelix.new(stringesBlYCA, stringAqZaac4, uintfSHaBeE, uint4kDZ2T, {from: accounts[2]});
		const addresslZODeXU = accounts[2]
		const addressWqODxw = accounts[1]
		const addressFfGllpk = accounts[4]
		const boolJOrKmF3 = await XenoFelixBytSFr3.isPauser.call(addresslZODeXU, {from: accounts[5]});
		const uint8YR1YpYd = await XenoFelixBytSFr3.decimals.call({from: accounts[5]});
//		await XenoFelixBytSFr3.whenNotPaused.call({from: accounts[0]});
//		const boolC997Ui6 = await XenoFelixBytSFr3.freezeAccount.call(addressWqODxw, {from: accounts[5]});
//		const uint256yxABx2A = await XenoFelixBytSFr3.balanceOf.call(addressFfGllpk, {from: accounts[5]});

		assert.equal(boolJOrKmF3, true)
		assert.equal(uint8YR1YpYd, BigInt("32"))
		await expect(XenoFelixBytSFr3.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringLp2i1OC = "JuGjoZcP2Bsdyw4UvIpx7AyhAB3q6WlspwbtHG"
		const stringbYpHNeR = "K9FUQkEZZV6jxjKShaGSyRcta4q7xcMBIeDnwyj8cBH9OPN5xoAWJHqJ9z9jz6fGfclw5N74CMKYfl3xByfvUezmnz2pPPw"
		const uintaYEWJ2W = BigInt("1758")
		const uintT2Uarj = BigInt("83")
		const XenoFelixFPewx8 = await XenoFelix.new(stringLp2i1OC, stringbYpHNeR, uintaYEWJ2W, uintT2Uarj, {from: accounts[3]});
		const uintCFHRWzW = BigInt("949")
		const addressAjwa0bc = accounts[0]
		const addressIEcstAn = accounts[3]
		const addressbYhL9kf = accounts[3]
		const uintneT5lzv = BigInt("1466")
		const uintUCvrDY8 = BigInt("1240")
		const addressTp7QP3 = accounts[1]
		const stringGv8ntl = await XenoFelixFPewx8.symbol.call({from: accounts[1]});
		const boolnYLFpni = await XenoFelixFPewx8.paused.call({from: accounts[4]});
//		const boolkLsRlCV = await XenoFelixFPewx8.transfer.call(addressAjwa0bc, uintCFHRWzW, {from: accounts[0]});
//		const addressKetvRdE = await XenoFelixFPewx8.addPauser.call(addressIEcstAn, {from: accounts[1]});
//		const boolnkVWHgC = await XenoFelixFPewx8.isOwner.call(addressbYhL9kf, {from: accounts[5]});
//		const boolFKUj6nJ = await XenoFelixFPewx8.transferWithLock.call(addressTp7QP3, uintUCvrDY8, uintneT5lzv, {from: accounts[5]});

		assert.equal(boolnYLFpni, false)
		assert.equal(stringGv8ntl, "K9FUQkEZZV6jxjKShaGSyRcta4q7xcMBIeDnwyj8cBH9OPN5xoAWJHqJ9z9jz6fGfclw5N74CMKYfl3xByfvUezmnz2pPPw")
		await expect(XenoFelixFPewx8.transfer.call(addressAjwa0bc, uintCFHRWzW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringjaoVIQc = "IXQvu551kpzixaUoutVIEjhCaYn1vT8tBogGGkrkpSJPh4I5lN"
		const stringTTtKWM = "uk3MieDAma9g3zArKUkSLQ2ssq3h8IDwYHjy0R0CgVohhOniVo3bYaTgzylbGVOwxG9Wba7T7vzZNDBrgyPUuX7vf2kRzX9a"
		const uintz610Zui = BigInt("16")
		const XenoFelixwzCy3IH = await XenoFelix.new(stringjaoVIQc, stringTTtKWM, uintz610Zui, {from: accounts[3]});
		const uintT0RjAiA = BigInt("149")
		const addressFvVjByV = accounts[0]
		const addressh9kFVo = accounts[3]
		const boollQS4x9o = await XenoFelixwzCy3IH.transferFrom.call(addressh9kFVo, addressFvVjByV, uintT0RjAiA, {from: accounts[3]});
		const boolu05lb1j = await XenoFelixwzCy3IH.paused.call({from: accounts[5]});
		await XenoFelixwzCy3IH.renouncePauser.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringptGJH8q = "X96jNSgtnQbmABJz6BzPnJFKIDKc8hh2xylD15c7VoJrRcQe7OKcba6Hj4h8fZdGAIJgeczfguDKTaNY"
		const stringemkmsNV = "KetKoPGSgLxMskat1MsuoYoF2glY5RtR8fnDFJ9xUG4k9SuI2hk55wGkmitbZX1LoAVwRHJbpn1281"
		const uintomaQjRI = BigInt("1686")
		const uintMM69S1W = BigInt("129")
		const XenoFelixfRh8pZ7 = await XenoFelix.new(stringptGJH8q, stringemkmsNV, uintomaQjRI, uintMM69S1W, {from: accounts[0]});
		const uintQXwcxUX = BigInt("1553")
		const addressS0w5M0V = accounts[4]
		const uintT86Cep7 = BigInt("276")
		const addressqjxmt6w = accounts[0]
		const stringqnNTwdD = await XenoFelixfRh8pZ7.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressH90bBTC = await XenoFelixfRh8pZ7.burnFrom.call(addressS0w5M0V, uintQXwcxUX, {from: accounts[5]});
//		const boolRpHT9o = await XenoFelixfRh8pZ7.transfer.call(addressqjxmt6w, uintT86Cep7, {from: accounts[1]});
//		const stringtnVNnFB = await XenoFelixfRh8pZ7.symbol.call({from: accounts[0]});

		assert.equal(stringqnNTwdD, "KetKoPGSgLxMskat1MsuoYoF2glY5RtR8fnDFJ9xUG4k9SuI2hk55wGkmitbZX1LoAVwRHJbpn1281")
		await expect(XenoFelixfRh8pZ7.burnFrom.call(addressS0w5M0V, uintQXwcxUX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringBjtEOGb = "DJXpEinrA"
		const stringnZ6bnZR = "nqg2d9yMICPM58OFJRNRhkjANcSqPsDnRz3gb9duR9ydfmGHTHZrYOfAXMawfIQ73PiEeFTZIFiz"
		const uintp8z8o9r = BigInt("138")
		const XenoFelixgoLn1HG = await XenoFelix.new(stringBjtEOGb, stringnZ6bnZR, uintp8z8o9r, {from: accounts[2]});
		const uintrY733U1 = BigInt("1753")
		const uintG7Uqsza = BigInt("1276")
		const addressqPsITak = accounts[1]
		const addressiLU4E2E = accounts[2]
		const addressMfDMDtg = accounts[4]
		const boolIkdOT5b = await XenoFelixgoLn1HG.transferWithLock.call(addressqPsITak, uintG7Uqsza, uintrY733U1, {from: accounts[5]});
		const addressDfAtp7 = await XenoFelixgoLn1HG.addPauser.call(addressiLU4E2E, {from: accounts[0]});
		const boolgUeJtqb = await XenoFelixgoLn1HG.isOwner.call(addressMfDMDtg, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringLp2i1OC = "JuGjoZcP2Bsdyw4UvIpx7AyhAB3q6WlspwbtHG"
		const stringbYpHNeR = "K9FUQkEZZV6jxjKShaGSyRcta4q7xcMBIeDnwyj8cBH9OPN5xoAWJHqJ9z9jz6fGfclw5N74CMKYfl3xByfvUezmnz2pPPw"
		const uintXz1GhH = BigInt("1758")
		const uintNhTPlfs = BigInt("83")
		const XenoFelixFPewx8 = await XenoFelix.new(stringLp2i1OC, stringbYpHNeR, uintXz1GhH, uintNhTPlfs, {from: accounts[3]});
		const uintR5EDz5D = BigInt("1184")
		const addressvAiP4th = accounts[4]
		const uintuLkgACU = BigInt("2014")
		const addressnYqws7Z = "0x0000000000000000000000000000000000000001"
		const uintFpRiG6D = BigInt("949")
		const addressKbHIQTB = accounts[1]
		const addressm2jgj8 = accounts[3]
		const addressnVlaCyR = accounts[3]
		const boolN9K9mJu = await XenoFelixFPewx8.increaseAllowance.call(addressvAiP4th, uintR5EDz5D, {from: accounts[3]});
		const stringGv8ntl = await XenoFelixFPewx8.symbol.call({from: accounts[1]});
//		const addressURKdsa = await XenoFelixFPewx8.burnFrom.call(addressnYqws7Z, uintuLkgACU, {from: accounts[0]});
//		const boolkLsRlCV = await XenoFelixFPewx8.transfer.call(addressKbHIQTB, uintFpRiG6D, {from: accounts[0]});
//		const addressKetvRdE = await XenoFelixFPewx8.addPauser.call(addressm2jgj8, {from: accounts[1]});
//		const boolnkVWHgC = await XenoFelixFPewx8.isOwner.call(addressnVlaCyR, {from: accounts[5]});
//		await XenoFelixFPewx8.renouncePauser.call({from: accounts[4]});

		assert.equal(boolN9K9mJu, true)
		assert.equal(stringGv8ntl, "K9FUQkEZZV6jxjKShaGSyRcta4q7xcMBIeDnwyj8cBH9OPN5xoAWJHqJ9z9jz6fGfclw5N74CMKYfl3xByfvUezmnz2pPPw")
		await expect(XenoFelixFPewx8.burnFrom.call(addressnYqws7Z, uintuLkgACU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringptGJH8q = "X96jNSgtnQbmABJz6BzPnJFKIDKc8hh2xylD15c7VoJrRcQe7OKcba6Hj4h8fZdGAIJgeczfguDKTaNY"
		const stringemkmsNV = "KetKoPGSgLxMskat1MsuoYoF2glY5RtR8fnDFJ9xUG4k9SuI2hk55wGkmitbZX1LoAVwRHJbpn1281"
		const uintgPjCRXd = BigInt("1686")
		const uintLU4jdyr = BigInt("129")
		const XenoFelixfRh8pZ7 = await XenoFelix.new(stringptGJH8q, stringemkmsNV, uintgPjCRXd, uintLU4jdyr, {from: accounts[0]});
		const uinto8LlmpF = BigInt("386")
		const uintyHm5X9t = BigInt("1553")
		const addressiAzJV1u = accounts[4]
		const uintpqokbp = BigInt("276")
		const addressYpBLL75 = accounts[1]
//		const uint256Xqzr3v8 = await XenoFelixfRh8pZ7.burn.call(uinto8LlmpF, {from: accounts[2]});
//		const stringqnNTwdD = await XenoFelixfRh8pZ7.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressH90bBTC = await XenoFelixfRh8pZ7.burnFrom.call(addressiAzJV1u, uintyHm5X9t, {from: accounts[5]});
//		const boolRpHT9o = await XenoFelixfRh8pZ7.transfer.call(addressYpBLL75, uintpqokbp, {from: accounts[1]});
//		const stringtnVNnFB = await XenoFelixfRh8pZ7.symbol.call({from: accounts[0]});

		await expect(XenoFelixfRh8pZ7.burn.call(uinto8LlmpF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringLp2i1OC = "JuGjoZcP2Bsdyw4UvIpx7AyhAB3q6WlspwbtHG"
		const stringbYpHNeR = "K9FUQkEZZV6jxjKShaGSyRcta4q7xcMBIeDnwyj8cBH9OPN5xoAWJHqJ9z9jz6fGfclw5N74CMKYfl3xByfvUezmnz2pPPw"
		const uintvRXjdbG = BigInt("1758")
		const uintAdkcjq = BigInt("83")
		const XenoFelixFPewx8 = await XenoFelix.new(stringLp2i1OC, stringbYpHNeR, uintvRXjdbG, uintAdkcjq, {from: accounts[3]});
		const uintfodFpr8 = BigInt("1491")
		const addressaPZ8WuH = accounts[2]
		const uintb2enlEF = BigInt("949")
		const addressDxF7qOf = accounts[1]
		const addresspxR7GgZ = accounts[2]
		const addressiHhAZRk = accounts[3]
		const boolmLHe6iR = await XenoFelixFPewx8.approve.call(addressaPZ8WuH, uintfodFpr8, {from: accounts[3]});
		const stringGv8ntl = await XenoFelixFPewx8.symbol.call({from: accounts[1]});
//		const boolkLsRlCV = await XenoFelixFPewx8.transfer.call(addressDxF7qOf, uintb2enlEF, {from: accounts[0]});
//		const addressKetvRdE = await XenoFelixFPewx8.addPauser.call(addresspxR7GgZ, {from: accounts[1]});
//		const boolnkVWHgC = await XenoFelixFPewx8.isOwner.call(addressiHhAZRk, {from: accounts[5]});

		assert.equal(boolmLHe6iR, true)
		assert.equal(stringGv8ntl, "K9FUQkEZZV6jxjKShaGSyRcta4q7xcMBIeDnwyj8cBH9OPN5xoAWJHqJ9z9jz6fGfclw5N74CMKYfl3xByfvUezmnz2pPPw")
		await expect(XenoFelixFPewx8.transfer.call(addressDxF7qOf, uintb2enlEF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringh1Epl5g = "eVFcnzy4SIU4isfd59D"
		const stringxuHOhcA = "ppKtYTvlxxuyTYHKsnPK8wuGC9Y2yoND8Jhl31X55CCyFodsT1ospz"
		const uintpL7zlxH = BigInt("742")
		const uintoIVDCfT = BigInt("101")
		const XenoFelixfLotvc3 = await XenoFelix.new(stringh1Epl5g, stringxuHOhcA, uintpL7zlxH, uintoIVDCfT, {from: accounts[2]});
		const uintso7bXv = BigInt("11")
		const addressesJDYIJ = accounts[2]
		const addressTjZloe2 = accounts[1]
		const addresslYTex2t = accounts[0]
		const address5ukNvN = accounts[6]
//		const boolqNmDczc = await XenoFelixfLotvc3.transferFrom.call(addressTjZloe2, addressesJDYIJ, uintso7bXv, {from: accounts[1]});
//		const uint256TL1QWC9 = await XenoFelixfLotvc3.allowance.call(address5ukNvN, addresslYTex2t, {from: accounts[4]});

		await expect(XenoFelixfLotvc3.transferFrom.call(addressTjZloe2, addressesJDYIJ, uintso7bXv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPbiFNvH = "9LhoA0AlwgzWFvx371LRWpS7pvk2i1JgrXsaFTaKFl9Q7lrSQ8HuUJ"
		const stringHpbCOu4 = "vEEQXIRzOnhGHEdhNs5mB3oVLb6o9RyqfheDlOf"
		const uintEmIcBGX = BigInt("1516")
		const uinto7KyRKl = BigInt("236")
		const XenoFelixtEy8qO = await XenoFelix.new(stringPbiFNvH, stringHpbCOu4, uintEmIcBGX, uinto7KyRKl, {from: accounts[0]});
		const addressjscGQC = accounts[2]
		const uintgvq7xLl = BigInt("1852")
		const addressk0xbmuB = accounts[2]
		const uint256tpv1gqL = await XenoFelixtEy8qO.balanceOf.call(addressjscGQC, {from: "0x0000000000000000000000000000000000000001"});
//		await XenoFelixtEy8qO.renouncePauser.call({from: accounts[3]});
//		await XenoFelixtEy8qO.onlyPauser.call({from: accounts[2]});
//		const boolAlKD7H = await XenoFelixtEy8qO.decreaseAllowance.call(addressk0xbmuB, uintgvq7xLl, {from: accounts[3]});

		assert.equal(uint256tpv1gqL, BigInt("0"))
		await expect(XenoFelixtEy8qO.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string7vVjXG = "z9I4pc6V1eGtnewgUSiLCl693lDXibvc8jSDBMbbPjcwYyOR2kpGJVxNK2wLeTSMb63CG9AiBguEVNCm6P5NxLpnsvpXrcbF4Ki"
		const stringT95jqfo = "BOF"
		const uintiRieOMW = BigInt("1299")
		const uintTJ7TQ0n = BigInt("220")
		const XenoFelixtTSoRN = await XenoFelix.new(string7vVjXG, stringT95jqfo, uintiRieOMW, uintTJ7TQ0n, {from: accounts[2]});
		const addressjjtWBin = accounts[2]
		const addressbpOf19j = "0x0000000000000000000000000000000000000001"
		const boolI6TsIFB = await XenoFelixtTSoRN.isOwner.call(addressjjtWBin, {from: accounts[4]});
//		await XenoFelixtTSoRN.renouncePauser.call({from: accounts[1]});
//		const boollmYra8 = await XenoFelixtTSoRN.unfreezeAccount.call(addressbpOf19j, {from: accounts[4]});
//		const booli8jL3uz = await XenoFelixtTSoRN.acceptOwnership.call({from: accounts[2]});

		assert.equal(boolI6TsIFB, true)
		await expect(XenoFelixtTSoRN.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPbiFNvH = "9LhoA0AlwgzWFvx371LRWpS7pvk2i1JgrXsaFTaKFl9Q7lrSQ8HuUJ"
		const stringHpbCOu4 = "vEEQXIRzOnhGHEdhNs5mB3oVLb6o9RyqfheDlOf"
		const uintWXFJyvw = BigInt("1516")
		const uintaRGGtfb = BigInt("236")
		const XenoFelixtEy8qO = await XenoFelix.new(stringPbiFNvH, stringHpbCOu4, uintWXFJyvw, uintaRGGtfb, {from: accounts[0]});
		const addressDmxfe1J = accounts[2]
		const uintNF3lo0 = BigInt("1820")
		const addressl13DSK = accounts[2]
		const uint256tpv1gqL = await XenoFelixtEy8qO.balanceOf.call(addressDmxfe1J, {from: "0x0000000000000000000000000000000000000001"});
//		await XenoFelixtEy8qO.pause.call({from: accounts[0]});
//		await XenoFelixtEy8qO.renouncePauser.call({from: accounts[3]});
//		await XenoFelixtEy8qO.onlyPauser.call({from: accounts[2]});
//		const boolAlKD7H = await XenoFelixtEy8qO.decreaseAllowance.call(addressl13DSK, uintNF3lo0, {from: accounts[3]});

		assert.equal(uint256tpv1gqL, BigInt("0"))
		await expect(XenoFelixtEy8qO.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string7vVjXG = "z9I4pc6V1eGtnewgUSiLCl693lDXibvc8jSDBMbbPjcwYyOR2kpGJVxNK2wLeTSMb63CG9AiBguEVNCm6P5NxLpnsvpXrcbF4Ki"
		const stringT95jqfo = "BOF"
		const uintnuuvpjt = BigInt("1299")
		const uintS7aueu8 = BigInt("220")
		const XenoFelixtTSoRN = await XenoFelix.new(string7vVjXG, stringT95jqfo, uintnuuvpjt, uintS7aueu8, {from: accounts[2]});
		const addressu2CWHFJ = accounts[1]
		const uintsKgFaw = BigInt("110")
		const addressIhlJytk = accounts[3]
		const addresso41xG9X = "0x0000000000000000000000000000000000000001"
		const uintolcW6qe = BigInt("198")
		const uintf3bELqd = BigInt("679")
		const addressu46HXO4 = accounts[0]
		const boolI6TsIFB = await XenoFelixtTSoRN.isOwner.call(addressu2CWHFJ, {from: accounts[4]});
//		const boolsJIK4Te = await XenoFelixtTSoRN.decreaseAllowance.call(addressIhlJytk, uintsKgFaw, {from: accounts[4]});
//		await XenoFelixtTSoRN.renouncePauser.call({from: accounts[1]});
//		const boollmYra8 = await XenoFelixtTSoRN.unfreezeAccount.call(addresso41xG9X, {from: accounts[4]});
//		const booluxnXPAQ = await XenoFelixtTSoRN.lock.call(addressu46HXO4, uintf3bELqd, uintolcW6qe, {from: accounts[2]});
//		const booli8jL3uz = await XenoFelixtTSoRN.acceptOwnership.call({from: accounts[2]});

		assert.equal(boolI6TsIFB, false)
		await expect(XenoFelixtTSoRN.decreaseAllowance.call(addressIhlJytk, uintsKgFaw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPbiFNvH = "9LhoA0AlwgzWFvx371LRWpS7pvk2i1JgrXsaFTaKFl9Q7lrSQ8HuUJ"
		const stringHpbCOu4 = "vEEQXIRzOnhGHEdhNs5mB3oVLb6o9RyqfheDlOf"
		const uintj4T03SW = BigInt("1516")
		const uintvEHlokn = BigInt("236")
		const XenoFelixtEy8qO = await XenoFelix.new(stringPbiFNvH, stringHpbCOu4, uintj4T03SW, uintvEHlokn, {from: accounts[0]});
		const addressLwAGltL = accounts[2]
		const address05whWB = accounts[5]
		const uintfXI6gkc = BigInt("1820")
		const address5bka5Q = accounts[2]
		const uint256tpv1gqL = await XenoFelixtEy8qO.balanceOf.call(addressLwAGltL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNIbzya = await XenoFelixtEy8qO.unfreezeAccount.call(address05whWB, {from: accounts[0]});
//		await XenoFelixtEy8qO.renouncePauser.call({from: accounts[3]});
//		const boolAlKD7H = await XenoFelixtEy8qO.decreaseAllowance.call(address5bka5Q, uintfXI6gkc, {from: accounts[3]});

		assert.equal(uint256tpv1gqL, BigInt("0"))
		await expect(XenoFelixtEy8qO.unfreezeAccount.call(address05whWB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringh1Epl5g = "eVFcnzy4SIU4isfd59D"
		const stringxuHOhcA = "ppKtYTvlxxuyTYHKsnPK8wuGC9Y2yoND8Jhl31X55CCyFodsT1ospz"
		const uintu9wDKgA = BigInt("742")
		const uintOYK9nfK = BigInt("101")
		const XenoFelixfLotvc3 = await XenoFelix.new(stringh1Epl5g, stringxuHOhcA, uintu9wDKgA, uintOYK9nfK, {from: accounts[2]});
		const addressdwGphKf = accounts[0]
		const addresskzYY8SP = accounts[7]
		const stringZoGR2xR = await XenoFelixfLotvc3.symbol.call({from: accounts[2]});
		const stringzNqqZmb = await XenoFelixfLotvc3.name.call({from: accounts[5]});
		const uint256TL1QWC9 = await XenoFelixfLotvc3.allowance.call(addresskzYY8SP, addressdwGphKf, {from: accounts[4]});

		assert.equal(stringZoGR2xR, "ppKtYTvlxxuyTYHKsnPK8wuGC9Y2yoND8Jhl31X55CCyFodsT1ospz")
		assert.equal(stringzNqqZmb, "eVFcnzy4SIU4isfd59D")
		assert.equal(uint256TL1QWC9, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringXShlcDW = "ZEcHo8epqq3fyK6dpRo3g6HAEVFL8ifjuhNFvSci6Irg"
		const stringJpB3eIb = "XZu2SxD7xOoHYCOb8PTIM2pE2dzdxReTAmErlQFHFkVimPIGGXhuARBFbLKJyOnuTbujS2GeiqRwQFQ6JMcsNyA3Z5KIwwn"
		const uintGmbFrX = BigInt("12")
		const XenoFelixatBLzlC = await XenoFelix.new(stringXShlcDW, stringJpB3eIb, uintGmbFrX, {from: accounts[0]});
		const addresszxr8lU = accounts[4]
		const uintbkkIXVw = BigInt("1272")
		const addressNKRyuYd = accounts[4]
		const addresshPKTJ6 = accounts[3]
		const addressUFQkHQR = accounts[1]
		const addressgWVUrtz = await XenoFelixatBLzlC.transferOwnership.call(addresszxr8lU, {from: accounts[3]});
		const boolTNGTWN9 = await XenoFelixatBLzlC.transferFrom.call(addresshPKTJ6, addressNKRyuYd, uintbkkIXVw, {from: accounts[5]});
		await XenoFelixatBLzlC.renouncePauser.call({from: accounts[4]});
		const uint256m0Z0oc = await XenoFelixatBLzlC.balanceOf.call(addressUFQkHQR, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringh1Epl5g = "eVFcnzy4SIU4isfd59D"
		const stringxuHOhcA = "ppKtYTvlxxuyTYHKsnPK8wuGC9Y2yoND8Jhl31X55CCyFodsT1ospz"
		const uinttFZBTDs = BigInt("742")
		const uintPBb8GQ8 = BigInt("101")
		const XenoFelixfLotvc3 = await XenoFelix.new(stringh1Epl5g, stringxuHOhcA, uinttFZBTDs, uintPBb8GQ8, {from: accounts[2]});
		const uintMSbSnzh = BigInt("1018")
		const addresse6ZTg5k = accounts[5]
		const addressK56wwaP = accounts[1]
		const addresstMxwA5o = accounts[0]
		const addressFPO39KK = accounts[7]
//		await XenoFelixfLotvc3.renouncePauser.call({from: accounts[2]});
//		const boolqSDi7Eq = await XenoFelixfLotvc3.approve.call(addresse6ZTg5k, uintMSbSnzh, {from: accounts[1]});
//		const boolgT6lVQ1 = await XenoFelixfLotvc3.freezeAccount.call(addressK56wwaP, {from: accounts[1]});
//		const uint256TL1QWC9 = await XenoFelixfLotvc3.allowance.call(addressFPO39KK, addresstMxwA5o, {from: accounts[4]});

		await expect(XenoFelixfLotvc3.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringzfo6elv = "6CjR3usUK2iU5mkrcTB6Wwym4sk3kulO1qklS2OLRuLvCOKgF6EWnwk9y7TcQv1ySQ"
		const stringfWCfZHh = "lPERbw9OpUSR36uHqGyVGyhR3RNf3"
		const uintGDku9V5 = BigInt("235")
		const XenoFelixclc6fc = await XenoFelix.new(stringzfo6elv, stringfWCfZHh, uintGDku9V5, {from: accounts[4]});
		const addressteA3tdT = accounts[0]
		const addressEg6fu6 = "0x0000000000000000000000000000000000000001"
		const uinttMlNcW5 = BigInt("797")
		const addressI7bU5U1 = accounts[2]
		const addressldILLQY = accounts[3]
		const uintTMEhQuf = BigInt("340")
		const addressPr9nhjY = accounts[3]
		const addressQcgUgql = await XenoFelixclc6fc.notFrozenAndTransaction.call(addressEg6fu6, addressteA3tdT, {from: accounts[4]});
		const boolRaRbP8 = await XenoFelixclc6fc.transferFrom.call(addressldILLQY, addressI7bU5U1, uinttMlNcW5, {from: accounts[3]});
		const boolQLNuUI = await XenoFelixclc6fc.transfer.call(addressPr9nhjY, uintTMEhQuf, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringh1Epl5g = "eVFcnzy4SIU4isfd59D"
		const stringxuHOhcA = "ppKtYTvlxxuyTYHKsnPK8wuGC9Y2yoND8Jhl31X55CCyFodsT1ospz"
		const uintWleN7vx = BigInt("742")
		const uintqetWKJc = BigInt("101")
		const XenoFelixfLotvc3 = await XenoFelix.new(stringh1Epl5g, stringxuHOhcA, uintWleN7vx, uintqetWKJc, {from: accounts[2]});
		const uinthQi8FMY = BigInt("1692")
		const uintbJCPEzS = BigInt("1461")
		const uintvVkCG4z = BigInt("963")
		const addressfNyQ39u = accounts[3]
		const uintqZYIFhu = BigInt("754")
		const addressHC1NV7N = accounts[5]
		const uint256TxWUMO2 = await XenoFelixfLotvc3.burn.call(uinthQi8FMY, {from: accounts[2]});
		const boolfQNkF8s = await XenoFelixfLotvc3.transferWithLock.call(addressfNyQ39u, uintvVkCG4z, uintbJCPEzS, {from: accounts[2]});
		const boolxsw2kJC = await XenoFelixfLotvc3.transfer.call(addressHC1NV7N, uintqZYIFhu, {from: accounts[2]});

		assert.equal(boolfQNkF8s, true)
		assert.equal(boolxsw2kJC, true)
	});

	it('test for XenoFelix', async () => {
		const stringJXPG5nZ = "Hr5Coiq1mINO"
		const stringg0TEA9j = "TPSc14RXdQIbQOlITq32pieKbtH4FLPxawHAgq6tKwdtYzdom5N099kE7DYpRocD5VxAKMROFGkQ2coozPLb5"
		const uintVZiCxm = BigInt("28")
		const XenoFelixIrSZ7I = await XenoFelix.new(stringJXPG5nZ, stringg0TEA9j, uintVZiCxm, {from: "0x0000000000000000000000000000000000000001"});
		const uintvUZD6e = BigInt("1250")
		const uintGEfBUTg = BigInt("773")
		const addressaCBlvSP = accounts[5]
		const addressApDUMr8 = accounts[3]
		const uintSEIWpzU = BigInt("957")
		const addressHPeXtU9 = accounts[3]
		const bool4e7us1 = await XenoFelixIrSZ7I.lock.call(addressaCBlvSP, uintGEfBUTg, uintvUZD6e, {from: accounts[1]});
		const addressck7JHTB = await XenoFelixIrSZ7I.addPauser.call(addressApDUMr8, {from: accounts[0]});
		const boolOEkDyUu = await XenoFelixIrSZ7I.transfer.call(addressHPeXtU9, uintSEIWpzU, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringCSxg6xs = "gg5EJYC5dYiZtLSRDu146SHWwjvr8KQlTdsSlwc1niIsNKm7rlQPE4NU2GuNyQiVhcw7"
		const stringzNnCUO0 = "adMYGUNylUnaDzKq9lDlz48U1q13dN1Lc2"
		const uintvM3lshf = BigInt("788")
		const uintklNa3V = BigInt("175")
		const XenoFelixtLKHy3B = await XenoFelix.new(stringCSxg6xs, stringzNnCUO0, uintvM3lshf, uintklNa3V, {from: accounts[3]});
		const uintb0dmPz = BigInt("1757")
		const uintopRdtTq = BigInt("634")
		const addressTgUKNv9 = accounts[0]
		const uintX8djDxS = BigInt("246")
		const addresscMP3W5d = accounts[4]
		const addressRznvvRe = accounts[0]
//		const boolWwHfti3 = await XenoFelixtLKHy3B.lock.call(addressTgUKNv9, uintopRdtTq, uintb0dmPz, {from: accounts[3]});
//		const boolQITylHz = await XenoFelixtLKHy3B.transfer.call(addresscMP3W5d, uintX8djDxS, {from: accounts[2]});
//		const boolBfJvkpg = await XenoFelixtLKHy3B.unfreezeAccount.call(addressRznvvRe, {from: accounts[1]});

		await expect(XenoFelixtLKHy3B.lock.call(addressTgUKNv9, uintopRdtTq, uintb0dmPz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringh1Epl5g = "eVFcnzy4SIU4isfd59D"
		const stringxuHOhcA = "ppKtYTvlxxuyTYHKsnPK8wuGC9Y2yoND8Jhl31X55CCyFodsT1ospz"
		const uintYIFPeT3 = BigInt("742")
		const uint4OYMYq = BigInt("101")
		const XenoFelixfLotvc3 = await XenoFelix.new(stringh1Epl5g, stringxuHOhcA, uintYIFPeT3, uint4OYMYq, {from: accounts[2]});
		const uintosDJt4v = BigInt("280")
		const addressKvM88Jp = accounts[4]
		const addressrKibHkD = accounts[1]
		const addresshK1USox = accounts[2]
		const uintItR7nX2 = BigInt("754")
		const addressw0EpQkD = accounts[6]
		const uintbfR00m = BigInt("1679")
		const addressCWO3kdb = accounts[4]
		const addressr9p4pE = accounts[0]
		const uintKaAk3P = BigInt("1915")
		const addressE6Nrlhd = accounts[3]
		const boolfPub3sl = await XenoFelixfLotvc3.approve.call(addressKvM88Jp, uintosDJt4v, {from: accounts[5]});
		const uint256aWQUhyf = await XenoFelixfLotvc3.balanceOf.call(addressrKibHkD, {from: accounts[1]});
		const addressrvZASP7 = await XenoFelixfLotvc3.transferOwnership.call(addresshK1USox, {from: accounts[2]});
		const boolxsw2kJC = await XenoFelixfLotvc3.transfer.call(addressw0EpQkD, uintItR7nX2, {from: accounts[2]});
//		const booliwaZ9Zh = await XenoFelixfLotvc3.transferFrom.call(addressr9p4pE, addressCWO3kdb, uintbfR00m, {from: accounts[2]});
//		const boolZQzD84O = await XenoFelixfLotvc3.transfer.call(addressE6Nrlhd, uintKaAk3P, {from: accounts[2]});

		assert.equal(boolfPub3sl, true)
		assert.equal(boolxsw2kJC, true)
		assert.equal(uint256aWQUhyf, BigInt("0"))
		await expect(XenoFelixfLotvc3.transferFrom.call(addressr9p4pE, addressCWO3kdb, uintbfR00m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringO9FreW = "ITSa2liUdIk9Rorf4rfKlJQ4w7WjXFowzthZph7ILcsKbxrcws7i4T5b9eUPnyjSKMMkGwbuICVKSKk"
		const stringDT55Vy0 = "aOsAVvDplxw0SnNDr77zcp9rP1gixtrnrJGgRfcYAPRxPw1aXJYNiXrf6doilOHiW"
		const uintuGUF2OC = BigInt("1754")
		const uintQNUceIY = BigInt("240")
		const XenoFelixN2Eigkj = await XenoFelix.new(stringO9FreW, stringDT55Vy0, uintuGUF2OC, uintQNUceIY, {from: accounts[2]});
		const uintCqAJlco = BigInt("1334")
		const addressZiHppvQ = accounts[0]
		const uintf2biWCc = BigInt("455")
		const addressizvYmLI = accounts[3]
		const addressulJxY9S = accounts[2]
		const uintuGnYMiS = BigInt("91")
		const addressN1v79TH = accounts[1]
//		const booldosSEj1 = await XenoFelixN2Eigkj.burnOwner.call(addressZiHppvQ, uintCqAJlco, {from: accounts[2]});
//		await XenoFelixN2Eigkj.onlyNewOwner.call({from: accounts[1]});
//		const uint8UKQQLZz = await XenoFelixN2Eigkj.decimals.call({from: accounts[3]});
//		const boolhIFb3rP = await XenoFelixN2Eigkj.transferFrom.call(addressulJxY9S, addressizvYmLI, uintf2biWCc, {from: accounts[0]});
//		await XenoFelixN2Eigkj.onlyNewOwner.call({from: accounts[5]});
//		const boolm2XGmDZ = await XenoFelixN2Eigkj.transfer.call(addressN1v79TH, uintuGnYMiS, {from: accounts[0]});

		await expect(XenoFelixN2Eigkj.burnOwner.call(addressZiHppvQ, uintCqAJlco, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})