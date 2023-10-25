const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressXGtgVx = accounts[5]
		const Fomp9rmb8K = await Fomp.new(addressXGtgVx, {from: accounts[5]});
		const addressPk14wXG = accounts[3]
		const addressPcgIOr = accounts[1]
		const addressYupTKmN = await Fomp9rmb8K.delegate.call(addressPk14wXG, {from: accounts[0]});
		const addressqA947Os = await Fomp9rmb8K.delegate.call(addressPcgIOr, {from: accounts[1]});
	});

	it('test for Fomp', async () => {
		const addresszgDm4Vi = accounts[4]
		const Fompex8JMMr = await Fomp.new(addresszgDm4Vi, {from: "0x0000000000000000000000000000000000000001"});
		const uintVs6f4j0 = BigInt("2035")
		const addresseKOxQs3 = accounts[0]
		const addressvlB8kUS = accounts[2]
		const addresse35AfFv = accounts[3]
		const boolW0Z207T = await Fompex8JMMr.transfer.call(addresseKOxQs3, uintVs6f4j0, {from: accounts[4]});
		const uint96mzJrYqk = await Fompex8JMMr.getCurrentVotes.call(addressvlB8kUS, {from: accounts[2]});
		const uint96rDY63MP = await Fompex8JMMr.getCurrentVotes.call(addresse35AfFv, {from: accounts[2]});
	});

	it('test for Fomp', async () => {
		const addressoLrBeRm = accounts[4]
		const FompRQEUfb2 = await Fomp.new(addressoLrBeRm, {from: accounts[3]});
		const uint3cW5F1 = BigInt("1829")
		const addressUW0mnw2 = accounts[2]
		const uintbsXW2pg = BigInt("685")
		const addressFqrU2br = accounts[1]
		const addressLmyKUzE = accounts[0]
		const uintmjjVGCU = BigInt("681")
		const addressN0xwaia = "0x0000000000000000000000000000000000000001"
		const addressB8c3Ksw = accounts[4]
		const uint96WLTjSMA = await FompRQEUfb2.getPriorVotes.call(addressUW0mnw2, uint3cW5F1, {from: accounts[1]});
		const boolFxzSZfy = await FompRQEUfb2.transferFrom.call(addressLmyKUzE, addressFqrU2br, uintbsXW2pg, {from: "0x0000000000000000000000000000000000000001"});
		const boolLhv1gnO = await FompRQEUfb2.transferFrom.call(addressB8c3Ksw, addressN0xwaia, uintmjjVGCU, {from: accounts[4]});

		await expect(FompRQEUfb2.getPriorVotes.call(addressUW0mnw2, uint3cW5F1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresss3nBTfo = accounts[3]
		const FomppYKlSHa = await Fomp.new(addresss3nBTfo, {from: accounts[3]});
		const addressJVUbtTT = accounts[4]
		const uintO8Mpul3 = BigInt("398")
		const addressTrODCs3 = accounts[1]
		const addressyxOmj1j = accounts[1]
		const bytetuzn3lh = "0x0d1d0819070d0b1a171d00111e0d191f1315111c1e141a0b1113101d1a1d140d"
		const bytelqboVud = "0x14060b10050e1b0608140f1807101c0904031d041f031a1d1314151a19181618"
		const uintnPbkJMJ = BigInt("4")
		const uintnq98rjr = BigInt("216")
		const uintG3G0Sg3 = BigInt("629")
		const addressm9rK3F5 = accounts[0]
		const uintkwqIF8d = await FomppYKlSHa.balanceOf.call(addressJVUbtTT, {from: accounts[4]});
		const uint96Q1z2nwL = await FomppYKlSHa.getPriorVotes.call(addressTrODCs3, uintO8Mpul3, {from: accounts[2]});
		const addressWIdKiz = await FomppYKlSHa.delegate.call(addressyxOmj1j, {from: accounts[1]});
		const addresskMKHXo = await FomppYKlSHa.delegateBySig.call(addressm9rK3F5, uintG3G0Sg3, uintnq98rjr, uintnPbkJMJ, bytelqboVud, bytetuzn3lh, {from: accounts[2]});

		assert.equal(uint96Q1z2nwL, BigInt("0"))
		assert.equal(uintkwqIF8d, BigInt("0"))
		await expect(FomppYKlSHa.delegateBySig.call(addressm9rK3F5, uintG3G0Sg3, uintnq98rjr, uintnPbkJMJ, bytelqboVud, bytetuzn3lh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressFUyOr5Y = accounts[4]
		const FompNapADX5 = await Fomp.new(addressFUyOr5Y, {from: accounts[3]});
		const addressLVAsrQo = accounts[4]
		const addressvcwRkdZ = accounts[0]
		const uintD9cBdIA = BigInt("891")
		const addressenDYjlk = "0x0000000000000000000000000000000000000001"
		const addressBz79wre = accounts[4]
		const uintevY0TEv = await FompNapADX5.allowance.call(addressvcwRkdZ, addressLVAsrQo, {from: "0x0000000000000000000000000000000000000001"});
		const boolZobGl8U = await FompNapADX5.transferFrom.call(addressBz79wre, addressenDYjlk, uintD9cBdIA, {from: accounts[0]});

		assert.equal(uintevY0TEv, BigInt("0"))
		await expect(FompNapADX5.transferFrom.call(addressBz79wre, addressenDYjlk, uintD9cBdIA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressWBBULg = accounts[3]
		const FompzXtmmML = await Fomp.new(addressWBBULg, {from: accounts[0]});
		const addresscLJlMhE = accounts[5]
		const uintyZ6wtEM = BigInt("902")
		const addressu2W4ekp = accounts[2]
		const uintAm5PRvA = BigInt("786")
		const addressNbglBp = accounts[0]
		const addressDb3wuFQ = accounts[2]
		const byteRFFxym = "0x1f1f170c0b0f160a0c161912180c070306180109010c06031d07110d1200091f"
		const byteYhNoOh8 = "0x170c180b1406160d03150b2006150c0a11050309181b1a0e171b0a19191f1812"
		const uint4EZmtN = BigInt("184")
		const uintDC5m59f = BigInt("243")
		const uintze2KvJb = BigInt("1498")
		const addresskY24yaO = accounts[4]
		const uintlJ6RmLP = await FompzXtmmML.balanceOf.call(addresscLJlMhE, {from: accounts[3]});
		const booll7APZkk = await FompzXtmmML.transfer.call(addressu2W4ekp, uintyZ6wtEM, {from: accounts[1]});
		const boolj4QFtkl = await FompzXtmmML.transfer.call(addressNbglBp, uintAm5PRvA, {from: accounts[0]});
		const uintWuwB6O = await FompzXtmmML.balanceOf.call(addressDb3wuFQ, {from: accounts[4]});
		const addressd9rohc = await FompzXtmmML.delegateBySig.call(addresskY24yaO, uintze2KvJb, uintDC5m59f, uint4EZmtN, byteYhNoOh8, byteRFFxym, {from: accounts[0]});

		assert.equal(uintlJ6RmLP, BigInt("0"))
		await expect(FompzXtmmML.transfer.call(addressu2W4ekp, uintyZ6wtEM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressg8V4cf2 = accounts[1]
		const FompVgBXxc = await Fomp.new(addressg8V4cf2, {from: accounts[5]});
		const addressPI7kGl = accounts[1]
		const uintuaABcRX = BigInt("814")
		const addresshI8M299 = accounts[4]
		const addresssHtFdX = "0x0000000000000000000000000000000000000001"
		const addresswt2EWM = accounts[4]
		const addressupd77Dv = await FompVgBXxc.delegate.call(addressPI7kGl, {from: accounts[4]});
		const boolJRoeWzU = await FompVgBXxc.approve.call(addresshI8M299, uintuaABcRX, {from: accounts[0]});
		const uint96GAhTQa = await FompVgBXxc.getCurrentVotes.call(addresssHtFdX, {from: accounts[1]});
		const addressW5nIoyE = await FompVgBXxc.delegate.call(addresswt2EWM, {from: accounts[2]});

		assert.equal(boolJRoeWzU, true)
		assert.equal(uint96GAhTQa, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressOdjNRRK = accounts[2]
		const FompgCkCASd = await Fomp.new(addressOdjNRRK, {from: accounts[5]});
		const addressKAy8zfg = accounts[1]
		const byteywmTXtF = "0x02051c1b16071206060c18010805061c141b140d030e0b1119091c1713160b18"
		const byteSB514S7 = "0x0b0e0117020a080c1018150e0606161b1504051f0a120c030b00021413170d1b"
		const uintvSMWDH4 = BigInt("136")
		const uintO0kTQo = BigInt("101")
		const uintlw6SaU = BigInt("960")
		const addressyUYSTmj = accounts[0]
		const addressUfIziIz = accounts[4]
		const uintqfF64n = BigInt("1518")
		const addressJH8Y0Il = accounts[1]
		const uintEDa7R9C = BigInt("2039")
		const addressMd58P9y = accounts[1]
		const uintA3ta0uq = BigInt("734")
		const addresswguULWO = accounts[1]
		const uint96p5aXGEe = await FompgCkCASd.getCurrentVotes.call(addressKAy8zfg, {from: accounts[4]});
		const addressUV42EYA = await FompgCkCASd.delegateBySig.call(addressyUYSTmj, uintlw6SaU, uintO0kTQo, uintvSMWDH4, byteSB514S7, byteywmTXtF, {from: accounts[4]});
		const uint96ocQwivj = await FompgCkCASd.getCurrentVotes.call(addressUfIziIz, {from: accounts[3]});
		const booldgGifGz = await FompgCkCASd.approve.call(addressJH8Y0Il, uintqfF64n, {from: accounts[4]});
		const boolJW5ZdWW = await FompgCkCASd.transfer.call(addressMd58P9y, uintEDa7R9C, {from: accounts[1]});
		const boolCZPPieQ = await FompgCkCASd.transfer.call(addresswguULWO, uintA3ta0uq, {from: accounts[1]});

		assert.equal(uint96p5aXGEe, BigInt("0"))
		await expect(FompgCkCASd.delegateBySig.call(addressyUYSTmj, uintlw6SaU, uintO0kTQo, uintvSMWDH4, byteSB514S7, byteywmTXtF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressuKO8QVa = "0x0000000000000000000000000000000000000001"
		const FomprRfBBYA = await Fomp.new(addressuKO8QVa, {from: accounts[1]});
		const addressB3hpmsl = accounts[0]
		const uintqci7jK5 = BigInt("1203")
		const addressnwLu15D = accounts[0]
		const addressszfpuOZ = accounts[4]
		const addressvpMyW6 = await FomprRfBBYA.delegate.call(addressB3hpmsl, {from: "0x0000000000000000000000000000000000000001"});
		const boolEvG4tZz = await FomprRfBBYA.transferFrom.call(addressszfpuOZ, addressnwLu15D, uintqci7jK5, {from: accounts[1]});

		await expect(FomprRfBBYA.transferFrom.call(addressszfpuOZ, addressnwLu15D, uintqci7jK5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressxmjN9xA = accounts[3]
		const FomppYKlSHa = await Fomp.new(addressxmjN9xA, {from: accounts[3]});
		const addressYJ4PNoB = accounts[4]
		const uintbZHuEKP = BigInt("693")
		const addressUEIvK1Z = accounts[3]
		const addressGzgh4i3 = accounts[4]
		const uintjLrrBGn = BigInt("96")
		const addressrrIG1CQ = accounts[2]
		const addresshA1ZAhU = accounts[3]
		const addresskFsFZdy = accounts[4]
		const addressX3Mn3lH = accounts[5]
		const uintsMSADym = BigInt("1617")
		const addressyLV8xG = accounts[2]
		const byteLpCUwZ = "0x0f011e121c07031b08180803191e051b1708050a191c09060b1b010a170e2005"
		const byteNibbeOX = "0x010e1005050506110701021311141a0f1b0c130f1b1d0a14031d06011e01181a"
		const uintXkepvZ4 = BigInt("229")
		const uintknmgJ76 = BigInt("1492")
		const uinthfdKn5 = BigInt("643")
		const addressS3jgPDl = accounts[4]
		const byteJ9nb9mt = "0x0d1d0819070d0b1a171d00111e0d191f1315111c1e141a0b1113101d1a1d140d"
		const byteXvkFcfk = "0x14060b10050e1b0608140f1807101c0904031d041f031a1d1314151a19181618"
		const uintkDjmoW3 = BigInt("4")
		const uintzJqjPAx = BigInt("216")
		const uintAEyP8bQ = BigInt("629")
		const addressVB6mloo = accounts[0]
		const uintkwqIF8d = await FomppYKlSHa.balanceOf.call(addressYJ4PNoB, {from: accounts[4]});
		const bool3vP3UW = await FomppYKlSHa.approve.call(addressUEIvK1Z, uintbZHuEKP, {from: accounts[4]});
		const uintpZZ9lI = await FomppYKlSHa.balanceOf.call(addressGzgh4i3, {from: accounts[1]});
		const uint96aHXSsED = await FomppYKlSHa.getPriorVotes.call(addressrrIG1CQ, uintjLrrBGn, {from: accounts[1]});
		const addressnBQhKc = await FomppYKlSHa.delegate.call(addresshA1ZAhU, {from: "0x0000000000000000000000000000000000000001"});
		const uintPaIYWGH = await FomppYKlSHa.allowance.call(addressX3Mn3lH, addresskFsFZdy, {from: accounts[5]});
		const boolJ1wCzo8 = await FomppYKlSHa.transfer.call(addressyLV8xG, uintsMSADym, {from: accounts[3]});
		const addressxY95dl = await FomppYKlSHa.delegateBySig.call(addressS3jgPDl, uinthfdKn5, uintknmgJ76, uintXkepvZ4, byteNibbeOX, byteLpCUwZ, {from: accounts[4]});
		const addresskMKHXo = await FomppYKlSHa.delegateBySig.call(addressVB6mloo, uintAEyP8bQ, uintzJqjPAx, uintkDjmoW3, byteXvkFcfk, byteJ9nb9mt, {from: accounts[2]});

		assert.equal(bool3vP3UW, true)
		assert.equal(boolJ1wCzo8, true)
		assert.equal(uint96aHXSsED, BigInt("0"))
		assert.equal(uintPaIYWGH, BigInt("0"))
		assert.equal(uintkwqIF8d, BigInt("0"))
		assert.equal(uintpZZ9lI, BigInt("0"))
		await expect(FomppYKlSHa.delegateBySig.call(addressS3jgPDl, uinthfdKn5, uintknmgJ76, uintXkepvZ4, byteNibbeOX, byteLpCUwZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressDpC1V7b = accounts[3]
		const FomppYKlSHa = await Fomp.new(addressDpC1V7b, {from: accounts[3]});
		const uintTFh10I2 = BigInt("433")
		const addresszmM8KQb = accounts[2]
		const uintDepEOIz = BigInt("1858")
		const addressGEeIX5K = "0x0000000000000000000000000000000000000000"
		const uintIW9U0Z3 = BigInt("727")
		const addressOeXXoLU = accounts[1]
		const addressx1JeOfb = accounts[1]
		const uintivD2VDr = BigInt("432")
		const addressT7g1Gnc = accounts[4]
		const byteq0kXy51 = "0x0b0e1a14021c1e121920050211060915171918151a1310081e0a190f09131b01"
		const byteSX0cSgn = "0x061914020e1c0c03090706031e01070f170410111e1e14180919151b07031f1b"
		const uintO4iXU8h = BigInt("76")
		const uintUfNQNiB = BigInt("1661")
		const uintmS1zzY9 = BigInt("474")
		const addressmbXWtu = accounts[5]
		const uintAE95nxF = BigInt("255")
		const addressfO2uR3F = accounts[2]
		const bytefwqdBQn = "0x0d1d0819070d0b1a171d00111e0d191f1315111c1e141a0b1113101d1a1d140d"
		const byteeEPlDLE = "0x14060b10050e1b0608140f1807101c0904031d041f031a1d1314151a19181618"
		const uinte6IIPJN = BigInt("4")
		const uintjCpzRx5 = BigInt("216")
		const uintUmKel2x = BigInt("629")
		const addresscCL7K1K = accounts[0]
		const boolc0isPt3 = await FomppYKlSHa.approve.call(addresszmM8KQb, uintTFh10I2, {from: accounts[2]});
		const boolQTICHxq = await FomppYKlSHa.transfer.call(addressGEeIX5K, uintDepEOIz, {from: accounts[1]});
		const boolllEDWWw = await FomppYKlSHa.transfer.call(addressOeXXoLU, uintIW9U0Z3, {from: accounts[4]});
		const addressD5IZVZj = await FomppYKlSHa.delegate.call(addressx1JeOfb, {from: accounts[0]});
		const uint96KFZKFLB = await FomppYKlSHa.getPriorVotes.call(addressT7g1Gnc, uintivD2VDr, {from: accounts[0]});
		const addressgjrouXU = await FomppYKlSHa.delegateBySig.call(addressmbXWtu, uintmS1zzY9, uintUfNQNiB, uintO4iXU8h, byteSX0cSgn, byteq0kXy51, {from: accounts[3]});
		const boolurunfxw = await FomppYKlSHa.transfer.call(addressfO2uR3F, uintAE95nxF, {from: accounts[0]});
		const addresskMKHXo = await FomppYKlSHa.delegateBySig.call(addresscCL7K1K, uintUmKel2x, uintjCpzRx5, uinte6IIPJN, byteeEPlDLE, bytefwqdBQn, {from: accounts[2]});

		assert.equal(boolc0isPt3, true)
		await expect(FomppYKlSHa.transfer.call(addressGEeIX5K, uintDepEOIz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressokdDFsJ = accounts[0]
		const Fompgl0OFLW = await Fomp.new(addressokdDFsJ, {from: accounts[4]});
		const addressWdnGhXh = accounts[1]
		const byteSHJ7rFX = "0x011b111919000d1f1a051b150d17000a1f1400141a0a07070314110a0c0a051b"
		const bytethQvwKj = "0x1612041c1f120f0b1e090207060a050a0f11140c1b090602031d1b10ffffffff041502"
		const uintKCqGGs = BigInt("164")
		const uintT1Ajxo3 = BigInt("418")
		const uintqS39O5P = BigInt("801")
		const addressMWpGdp2 = accounts[3]
		const uintbR3maV2 = await Fompgl0OFLW.balanceOf.call(addressWdnGhXh, {from: accounts[1]});
		const addresseWA3b0k = await Fompgl0OFLW.delegateBySig.call(addressMWpGdp2, uintqS39O5P, uintT1Ajxo3, uintKCqGGs, bytethQvwKj, byteSHJ7rFX, {from: accounts[5]});

		assert.equal(uintbR3maV2, BigInt("0"))
		await expect(Fompgl0OFLW.delegateBySig.call(addressMWpGdp2, uintqS39O5P, uintT1Ajxo3, uintKCqGGs, bytethQvwKj, byteSHJ7rFX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressmp8NR82 = accounts[3]
		const FomppYKlSHa = await Fomp.new(addressmp8NR82, {from: accounts[3]});
		const uintJ4L2KEc = BigInt("926")
		const addressFHAlsCD = accounts[3]
		const addressVtkVFf = accounts[3]
		const addresspY8Mtb5 = accounts[4]
		const uintoVWDpe = BigInt("0")
		const addressoK05ZL = accounts[3]
		const uinte6xeBYD = BigInt("97")
		const addressOAUXCK = "0x0000000000000000000000000000000000000002"
		const addressRus3OvR = "0x0000000000000000000000000000000000000001"
		const addresss3q5Zok = accounts[4]
		const bytehFVVHQZ = "0x1d0e1017161717120b06151c190b011508100f050d011b05071910091b170505"
		const byteeoI2DSE = "0x181c0c1a1d0c03091c15151810101d0700020f11050c06150a12011c1a111e1a"
		const uintELfhxxP = BigInt("28")
		const uintc2am3t3 = BigInt("1588")
		const uintU9hDwy = BigInt("564")
		const addressz3R66fy = accounts[5]
		const byteE7OX83L = "0x0a03191a070b140d0c1e0e0a04131c0d051a0b080c020e1b1f01101601050e10"
		const bytewmj33Li = "0x0c050b190208080705181213110f1a120c1220031c1306110e0908090d04151c"
		const uinttygFdQl = BigInt("204")
		const uintSXc6dm0 = BigInt("308")
		const uintA2wsgaO = BigInt("329")
		const addressg1CG8q0 = accounts[0]
		const addresshsszhgg = accounts[4]
		const bytecokFYHC = "0x190a02100d150004070a15121804041e04141b1120131720201a170b19081420"
		const bytePmUpweS = "0x0f0108131c110d0b131402070c02190f041b010f180f1b070a1b1107140c1115"
		const uintPn2AemB = BigInt("207")
		const uintWdTEnVD = BigInt("289")
		const uintchVTVB0 = BigInt("531")
		const addressO0dSz44 = accounts[3]
		const uint96oaaRQgi = await FomppYKlSHa.getPriorVotes.call(addressFHAlsCD, uintJ4L2KEc, {from: "0x0000000000000000000000000000000000000001"});
		const addressJ5mXJ2w = await FomppYKlSHa.delegate.call(addressVtkVFf, {from: accounts[1]});
		const uintzop5QEM = await FomppYKlSHa.balanceOf.call(addresspY8Mtb5, {from: accounts[3]});
		const boolCZ0pIuD = await FomppYKlSHa.approve.call(addressoK05ZL, uintoVWDpe, {from: "0x0000000000000000000000000000000000000001"});
		const boolFIP1ldv = await FomppYKlSHa.approve.call(addressOAUXCK, uinte6xeBYD, {from: accounts[2]});
		const addressrfgblEh = await FomppYKlSHa.delegate.call(addressRus3OvR, {from: accounts[3]});
		const uint96GqH3xEW = await FomppYKlSHa.getCurrentVotes.call(addresss3q5Zok, {from: "0x0000000000000000000000000000000000000001"});
		const addresspM8E5Ql = await FomppYKlSHa.delegateBySig.call(addressz3R66fy, uintU9hDwy, uintc2am3t3, uintELfhxxP, byteeoI2DSE, bytehFVVHQZ, {from: accounts[3]});
		const addresskaEMiW9 = await FomppYKlSHa.delegateBySig.call(addressg1CG8q0, uintA2wsgaO, uintSXc6dm0, uinttygFdQl, bytewmj33Li, byteE7OX83L, {from: accounts[0]});
		const addressV2honvE = await FomppYKlSHa.delegate.call(addresshsszhgg, {from: accounts[1]});
		const addressoqlg0b = await FomppYKlSHa.delegateBySig.call(addressO0dSz44, uintchVTVB0, uintWdTEnVD, uintPn2AemB, bytePmUpweS, bytecokFYHC, {from: accounts[3]});

		assert.equal(boolCZ0pIuD, true)
		assert.equal(boolFIP1ldv, true)
		assert.equal(uint96GqH3xEW, BigInt("0"))
		assert.equal(uint96oaaRQgi, BigInt("0"))
		assert.equal(uintzop5QEM, BigInt("0"))
		await expect(FomppYKlSHa.delegateBySig.call(addressz3R66fy, uintU9hDwy, uintc2am3t3, uintELfhxxP, byteeoI2DSE, bytehFVVHQZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})