const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatEC4tk9v = await Vat.new({from: accounts[2]});
		const intLJVWpZ = BigInt("-660")
		const intT1LSEpH = BigInt("-1352")
		const addressDtwV0iK = accounts[4]
		const addressbB2t6M5 = accounts[4]
		const addressKuW9p0Y = accounts[0]
		const byteztDAVo = "0x0b05110114101b20120f100b050e011a061e160d1e01120c15171c180e150608"
		const addressCfvT1hs = "0x0000000000000000000000000000000000000001"
		const uintEyhYeKU = BigInt("1582")
		const addressZnzj7p = "0x0000000000000000000000000000000000000001"
		const addressUHh13KY = accounts[3]
		const bytes32Q55hG36 = await VatEC4tk9v.grab.call(byteztDAVo, addressKuW9p0Y, addressbB2t6M5, addressDtwV0iK, intT1LSEpH, intLJVWpZ, {from: accounts[2]});
		const address3Nisfn = await VatEC4tk9v.deny.call(addressCfvT1hs, {from: accounts[1]});
		const addressVsivQV5 = await VatEC4tk9v.move.call(addressUHh13KY, addressZnzj7p, uintEyhYeKU, {from: accounts[1]});

		await expect(VatEC4tk9v.grab.call(byteztDAVo, addressKuW9p0Y, addressbB2t6M5, addressDtwV0iK, intT1LSEpH, intLJVWpZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNYhZMN = await Vat.new({from: accounts[1]});
		const intjXpLM9Y = BigInt("-1190")
		const addressGILQr9p = accounts[1]
		const byteLVtIc98 = "0x1e0b0d1e081d0917080f0714021412121a0920180d13081e15131a1d14131c0a"
		const intb1bkEry = BigInt("-1190")
		const addressJ92Ziw = accounts[0]
		const bytekbYXXNB = "0x0c080f1a2008061c0816020d06021a0f13030d0f17101113080e0a1f1e060f08"
		const uinte5TH1cp = BigInt("1596")
		const byteVi7ECz = "0x101014111d1f12060a1d07091e121f090b000f1c0a07141e0b12051d07161f18"
		const bytes32V4Phuwn = await VatNYhZMN.slip.call(byteLVtIc98, addressGILQr9p, intjXpLM9Y, {from: accounts[4]});
		const bytes32OSqSdOw = await VatNYhZMN.slip.call(bytekbYXXNB, addressJ92Ziw, intb1bkEry, {from: accounts[4]});
		const bytes32MDU3xAm = await VatNYhZMN.file.call(byteVi7ECz, uinte5TH1cp, {from: accounts[1]});
		await VatNYhZMN.note.call({from: accounts[1]});

		await expect(VatNYhZMN.slip.call(byteLVtIc98, addressGILQr9p, intjXpLM9Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatybo0VDn = await Vat.new({from: accounts[0]});
		const intBwHVsJl = BigInt("-1062")
		const intllt0flY = BigInt("225")
		const addressVUl3WJC = accounts[0]
		const addressMmkp4m4 = accounts[5]
		const byteKqdwyXp = "0x1e1d1d1a04040c040205001e051908060914071e130f081d011e110e20000301"
		const addressNuZOk4E = "0x0000000000000000000000000000000000000001"
		const bytes32VduZwa6 = await Vatybo0VDn.fork.call(byteKqdwyXp, addressMmkp4m4, addressVUl3WJC, intllt0flY, intBwHVsJl, {from: accounts[0]});
		const addressvT0yw7X = await Vatybo0VDn.deny.call(addressNuZOk4E, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatybo0VDn.fork.call(byteKqdwyXp, addressMmkp4m4, addressVUl3WJC, intllt0flY, intBwHVsJl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatbNd9tLa = await Vat.new({from: accounts[1]});
		const uintqTq9CcT = BigInt("127")
		const bytexbOlqwh = "0x150d1f18161e051a080c1901100708181019060a010d17141e0420190c101216"
		const uintZ95uAdM = BigInt("387")
		const addressJRnpqo8 = accounts[5]
		const addressA5GyBjy = accounts[0]
		const intCejO64 = BigInt("530")
		const inteYgFul8 = BigInt("1683")
		const addressoh7cVX2 = "0x0000000000000000000000000000000000000001"
		const addressTOP9x4Z = accounts[0]
		const byteLLSd8vl = "0x1016100a111d09071f07130f18151d061f131115110e100d0c1414050e11181b"
		const uintdgAl7nV = BigInt("1383")
		const byteTS2pa5A = "0x0c201e0b04131f0216090b120617050014020b130a060e13190b090e021d0301"
		const byteJLwmfrT = "0x120d030e0f16160213100c0c12091f191e1a1b140e1c18111507130c0e190504"
		const uintpIm1s3v = BigInt("1292")
		const bytes32NXGemaN = await VatbNd9tLa.file.call(bytexbOlqwh, uintqTq9CcT, {from: accounts[4]});
		const addresscjOZKLO = await VatbNd9tLa.suck.call(addressA5GyBjy, addressJRnpqo8, uintZ95uAdM, {from: accounts[5]});
		const bytes32ZqAhJNQ = await VatbNd9tLa.fork.call(byteLLSd8vl, addressTOP9x4Z, addressoh7cVX2, inteYgFul8, intCejO64, {from: accounts[3]});
		const bytes32j3LMDN9 = await VatbNd9tLa.file.call(byteJLwmfrT, byteTS2pa5A, uintdgAl7nV, {from: accounts[1]});
		const uintjBNJlxF = await VatbNd9tLa.heal.call(uintpIm1s3v, {from: accounts[3]});

		await expect(VatbNd9tLa.file.call(bytexbOlqwh, uintqTq9CcT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatqGn7Ne = await Vat.new({from: accounts[5]});
		const addressl96zTdY = accounts[4]
		const addressgp9Ojr = accounts[4]
		const addressmYtZeSm = accounts[1]
		const addressZD0sRlr = await VatqGn7Ne.hope.call(addressl96zTdY, {from: accounts[0]});
		const addressUEi5qoz = await VatqGn7Ne.deny.call(addressgp9Ojr, {from: accounts[0]});
		const addressvnFIHyN = await VatqGn7Ne.deny.call(addressmYtZeSm, {from: accounts[5]});

		await expect(VatqGn7Ne.deny.call(addressgp9Ojr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatdtj01Z = await Vat.new({from: accounts[1]});
		const intel6NWfl = BigInt("-92")
		const intVpGG7jT = BigInt("33")
		const addressDv0BApw = accounts[1]
		const addresshyqQ6Ne = "0x0000000000000000000000000000000000000001"
		const addressCBPGTU8 = accounts[2]
		const byteEezGhL = "0x0c160d02091c1011170d11161c05181d1c14180e1c05150c11190b091e051b09"
		const intkHYDsZC = BigInt("1463")
		const addressiWEKnLV = accounts[3]
		const bytexrl78Q2 = "0x171b0e200011030814110518021a1d16041a041e070810091c02101c130f1112"
		const uinturN0h7J = BigInt("1181")
		const byteoe6h6BP = "0x18140c1b0f14040d150f05171d130e05021517011a1918021a030d151706041c"
		const bytes32B9LFU9R = await Vatdtj01Z.grab.call(byteEezGhL, addressCBPGTU8, addresshyqQ6Ne, addressDv0BApw, intVpGG7jT, intel6NWfl, {from: accounts[1]});
		const bytes32txZ3Fp3 = await Vatdtj01Z.fold.call(bytexrl78Q2, addressiWEKnLV, intkHYDsZC, {from: accounts[2]});
		await Vatdtj01Z.cage.call({from: accounts[3]});
		const bytes32FmhBcVe = await Vatdtj01Z.file.call(byteoe6h6BP, uinturN0h7J, {from: accounts[5]});

		await expect(Vatdtj01Z.grab.call(byteEezGhL, addressCBPGTU8, addresshyqQ6Ne, addressDv0BApw, intVpGG7jT, intel6NWfl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZCgX7Lg = await Vat.new({from: accounts[0]});
		const uintjM70d8D = BigInt("675")
		const addressnCl0wO4 = "0x0000000000000000000000000000000000000001"
		const addressJpNQOO = accounts[4]
		const byteO5uAmV8 = "0x1e0a1b1b120a1d0c0803131d161e0a0118140d070a20170b0f0f06181316061d"
		const uintSiU8nTO = BigInt("676")
		const bytes32LdXaEU = await VatZCgX7Lg.flux.call(byteO5uAmV8, addressJpNQOO, addressnCl0wO4, uintjM70d8D, {from: accounts[1]});
		const uintYiS1MyJ = await VatZCgX7Lg.heal.call(uintSiU8nTO, {from: accounts[4]});

		await expect(VatZCgX7Lg.flux.call(byteO5uAmV8, addressJpNQOO, addressnCl0wO4, uintjM70d8D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZCgX7Lg = await Vat.new({from: accounts[0]});
		const uintTwQhrhr = BigInt("1451")
		const uintQi3JwgU = BigInt("675")
		const addresspGi5f0i = "0x0000000000000000000000000000000000000001"
		const addressqGtrqI = accounts[4]
		const byteJxyC02r = "0x1e0a1b1b120a1d0c0803131d161e0a0118140d070a20170b0f0f06181316061d"
		const uintGvZ998f = BigInt("675")
		const uintmEJbVcn = await VatZCgX7Lg.heal.call(uintTwQhrhr, {from: accounts[4]});
		const bytes32LdXaEU = await VatZCgX7Lg.flux.call(byteJxyC02r, addressqGtrqI, addresspGi5f0i, uintQi3JwgU, {from: accounts[1]});
		const uintYiS1MyJ = await VatZCgX7Lg.heal.call(uintGvZ998f, {from: accounts[4]});

		await expect(VatZCgX7Lg.heal.call(uintTwQhrhr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatX7AEjlh = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttXCsIiv = BigInt("714")
		const addressW4Dezw4 = "0x0000000000000000000000000000000000000001"
		const addressyKc1YZl = accounts[2]
		const byteLtGRf6Y = "0x080315171d1e11030d0e120b030c1d07201019170b111e080804011a03060203"
		const bytekbmSHC = "0x1316051b1a000e0418170c0517000e08060c080704051e020803190800080a16"
		const addressGiPswRr = await VatX7AEjlh.move.call(addressyKc1YZl, addressW4Dezw4, uinttXCsIiv, {from: accounts[0]});
		await VatX7AEjlh.cage.call({from: accounts[1]});
		await VatX7AEjlh.note.call({from: accounts[3]});
		const bytes32DR51ggZ = await VatX7AEjlh.init.call(byteLtGRf6Y, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32Gj77azZ = await VatX7AEjlh.init.call(bytekbmSHC, {from: accounts[2]});
	});

	it('test for Vat', async () => {
		const VatofSRA9V = await Vat.new({from: accounts[4]});
		const intpxkK0wI = BigInt("809")
		const intOT5XIEp = BigInt("197")
		const addressxOgP2Jj = accounts[5]
		const addresswaLnsHh = accounts[5]
		const addressoaRO9D0 = "0x0000000000000000000000000000000000000001"
		const byteShJWQJC = "0x0e11071a16130f000b0c19130a0f080a041c150b120701111b1a0d170a090519"
		const addressiGauclP = accounts[4]
		await VatofSRA9V.cage.call({from: accounts[4]});
		const bytes32snW36vu = await VatofSRA9V.grab.call(byteShJWQJC, addressoaRO9D0, addresswaLnsHh, addressxOgP2Jj, intOT5XIEp, intpxkK0wI, {from: accounts[4]});
		const addressxA8rsmE = await VatofSRA9V.rely.call(addressiGauclP, {from: accounts[2]});

		await expect(VatofSRA9V.cage.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatofSRA9V = await Vat.new({from: accounts[4]});
		const intGyI4mEQ = BigInt("809")
		const intDm72No = BigInt("197")
		const addresso8Trd2c = accounts[5]
		const addressOsWLyT = accounts[5]
		const addressFv9RHMY = "0x0000000000000000000000000000000000000001"
		const byteBhKS2ni = "0x0e11071a16130f000b0c19130a0f080a041c150b120701111b1a0d170a090519"
		const addressDwPUKF = accounts[5]
		await VatofSRA9V.cage.call({from: accounts[4]});
		await VatofSRA9V.note.call({from: accounts[2]});
		const bytes32snW36vu = await VatofSRA9V.grab.call(byteBhKS2ni, addressFv9RHMY, addressOsWLyT, addresso8Trd2c, intDm72No, intGyI4mEQ, {from: accounts[4]});
		const addressxA8rsmE = await VatofSRA9V.rely.call(addressDwPUKF, {from: accounts[2]});

		await expect(VatofSRA9V.cage.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWNr5GVR = await Vat.new({from: accounts[4]});
		const int7U4Ko4 = BigInt("-632")
		const intcFaH2XZ = BigInt("-262")
		const addressWKE43y0 = accounts[0]
		const addressLzSW2kw = accounts[1]
		const addresscVTszIh = accounts[4]
		const bytetwJfG48 = "0x19190504010210041f050306041a0d0f12061d0c080a0e16090c1e1b13150a18"
		const addressFIZiexy = "0x0000000000000000000000000000000000000001"
		const bytes32EVCM1ix = await VatWNr5GVR.frob.call(bytetwJfG48, addresscVTszIh, addressLzSW2kw, addressWKE43y0, intcFaH2XZ, int7U4Ko4, {from: accounts[1]});
		const addressFn4O5mg = await VatWNr5GVR.nope.call(addressFIZiexy, {from: accounts[2]});

		await expect(VatWNr5GVR.frob.call(bytetwJfG48, addresscVTszIh, addressLzSW2kw, addressWKE43y0, intcFaH2XZ, int7U4Ko4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXTDbkLP = await Vat.new({from: accounts[5]});
		const addressLogXSzH = accounts[3]
		const intaDLcQTM = BigInt("1408")
		const addressGcaENQ9 = accounts[4]
		const bytenKkgopV = "0x1f130900120f1405011317041b1d0d130d0315121610160d0813121d0a060715"
		const intHasANvO = BigInt("502")
		const int2tsxD9 = BigInt("-237")
		const addressBdasQUf = accounts[4]
		const addressqu1QqZW = accounts[0]
		const addresspcsENOm = accounts[2]
		const byteRGo3B6x = "0x05030d191d170a1e1a0b0313020f0a150e07061c181f1d161e1e14070b010715"
		const addressGoEDdI = accounts[1]
		const addressXFG6T59 = await VatXTDbkLP.nope.call(addressLogXSzH, {from: accounts[3]});
		const bytes32BLUFTbJ = await VatXTDbkLP.slip.call(bytenKkgopV, addressGcaENQ9, intaDLcQTM, {from: accounts[4]});
		const bytes32lHeUB0Z = await VatXTDbkLP.grab.call(byteRGo3B6x, addresspcsENOm, addressqu1QqZW, addressBdasQUf, int2tsxD9, intHasANvO, {from: "0x0000000000000000000000000000000000000001"});
		const addressDUbiBNr = await VatXTDbkLP.hope.call(addressGoEDdI, {from: accounts[1]});
		await VatXTDbkLP.auth.call({from: accounts[4]});

		await expect(VatXTDbkLP.slip.call(bytenKkgopV, addressGcaENQ9, intaDLcQTM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWNr5GVR = await Vat.new({from: accounts[4]});
		const intx8kJ20 = BigInt("964")
		const addressUkfwvU0 = accounts[4]
		const byteXQZR1rp = "0x150f1008131d090f071115071314001a061b0f1215080d160a030d121d06080a"
		const intTJydu7d = BigInt("-632")
		const intFw9M5Aw = BigInt("-262")
		const addressXXIBTV = accounts[0]
		const addresssO0vkft = accounts[1]
		const addressPyZjZ2d = accounts[4]
		const byteYATi0Fx = "0x19190504010210041f050306041a0d0f12061d0c080a0e16090c1e1b13190a18"
		const addressLeqVqpz = "0x0000000000000000000000000000000000000001"
		const bytes32CQad4y = await VatWNr5GVR.fold.call(byteXQZR1rp, addressUkfwvU0, intx8kJ20, {from: accounts[4]});
		await VatWNr5GVR.note.call({from: accounts[1]});
		const bytes32EVCM1ix = await VatWNr5GVR.frob.call(byteYATi0Fx, addressPyZjZ2d, addresssO0vkft, addressXXIBTV, intFw9M5Aw, intTJydu7d, {from: accounts[1]});
		const addressFn4O5mg = await VatWNr5GVR.nope.call(addressLeqVqpz, {from: accounts[2]});

		await expect(VatWNr5GVR.note.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlkHtDy = await Vat.new({from: accounts[3]});
		const addressdMsLhKx = accounts[0]
		const uintZTVRurH = BigInt("876")
		const addresskQF0qlw = accounts[3]
		const addressQfyYmn = "0x0000000000000000000000000000000000000001"
		const byteoCtx7av = "0x011a0e01141718040b0800180e1705040e0d0100140f120f11051c0d0f0c1704"
		const uintvyGXnqU = BigInt("134")
		const bytevZLDkF = "0x12121d1a0b010107100c0b06191202040d06100a0e1f0300041f030c16171e09"
		const byteUsCoefo = "0x0703051910030c050a10111112101704050d02140b1719201a02180d0c171c0e"
		const addressZSJXzPa = await VatlkHtDy.nope.call(addressdMsLhKx, {from: accounts[3]});
		const addressjHlxVxj = await VatlkHtDy.move.call(addressQfyYmn, addresskQF0qlw, uintZTVRurH, {from: accounts[2]});
		await VatlkHtDy.auth.call({from: accounts[0]});
		const bytes32fUyp5qn = await VatlkHtDy.init.call(byteoCtx7av, {from: accounts[0]});
		const bytes32kFO47B = await VatlkHtDy.file.call(byteUsCoefo, bytevZLDkF, uintvyGXnqU, {from: accounts[3]});

		await expect(VatlkHtDy.move.call(addressQfyYmn, addresskQF0qlw, uintZTVRurH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWNr5GVR = await Vat.new({from: accounts[4]});
		const addressh4ZVINI = accounts[0]
		const intopKo0zP = BigInt("-1057")
		const intb2qIkD = BigInt("-1809")
		const addressFcaj2MD = accounts[2]
		const addressKVaZG8b = accounts[5]
		const addressl9mNo6 = accounts[4]
		const byteE6ckzq = "0x0c1b0d0a08181908190d0b18010e1f12050c050515160109020a090b1e1e1907"
		const intypQnKlA = BigInt("1809")
		const intbm2lw7Q = BigInt("-1272")
		const addressA4IoIkZ = accounts[2]
		const addressids6fJ9 = accounts[5]
		const addressg3H6UxL = accounts[2]
		const byteHbd1HfK = "0x0d1b1f1810021904021b13130f1812061203131c17100a090612050e06081e18"
		const addresslkBJOmN = await VatWNr5GVR.deny.call(addressh4ZVINI, {from: accounts[4]});
		const bytes32BFTi0sQ = await VatWNr5GVR.grab.call(byteE6ckzq, addressl9mNo6, addressKVaZG8b, addressFcaj2MD, intb2qIkD, intopKo0zP, {from: accounts[5]});
		const bytes32FN2lQlC = await VatWNr5GVR.frob.call(byteHbd1HfK, addressg3H6UxL, addressids6fJ9, addressA4IoIkZ, intbm2lw7Q, intypQnKlA, {from: accounts[5]});

		await expect(VatWNr5GVR.grab.call(byteE6ckzq, addressl9mNo6, addressKVaZG8b, addressFcaj2MD, intb2qIkD, intopKo0zP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatcGJ6iJy = await Vat.new({from: accounts[1]});
		const inty5YxtEB = BigInt("-623")
		const intEP1RGUo = BigInt("-1126")
		const addressxFqBX4s = accounts[1]
		const addressYlzxrYE = accounts[5]
		const byteM4tV10 = "0x0a1410170f0b090b1402090a060903121d03191d011b1e08011d16051b0e1b0a"
		const uinty4kI0DB = BigInt("1432")
		const addressa7n6oCX = accounts[4]
		const uintwgsHY2v = BigInt("106")
		const addressOK5pRPz = accounts[1]
		const addressLGRfnU = accounts[0]
		const bytecKQtLRt = "0x1a1f1114040b180717111520000104091d0c0514111c0d1d100e191a0c061309"
		const bytes32lLrDR86 = await VatcGJ6iJy.fork.call(byteM4tV10, addressYlzxrYE, addressxFqBX4s, intEP1RGUo, inty5YxtEB, {from: accounts[2]});
		const uintb27l5R0 = await VatcGJ6iJy.heal.call(uinty4kI0DB, {from: accounts[0]});
		const addressIu6SFh = await VatcGJ6iJy.rely.call(addressa7n6oCX, {from: accounts[1]});
		const bytes32puuUhc9 = await VatcGJ6iJy.flux.call(bytecKQtLRt, addressLGRfnU, addressOK5pRPz, uintwgsHY2v, {from: accounts[0]});

		await expect(VatcGJ6iJy.fork.call(byteM4tV10, addressYlzxrYE, addressxFqBX4s, intEP1RGUo, inty5YxtEB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZCgX7Lg = await Vat.new({from: accounts[0]});
		const intzzqTLNh = BigInt("103")
		const addressLJWogmY = accounts[2]
		const byte3p6uLT = "0x011900041c181b040c151d0a061f0b0f141a041e0d090614060a1b1d060d1105"
		const intTozvShG = BigInt("731")
		const intMV4b4WB = BigInt("1566")
		const addressMnOOfL = accounts[1]
		const addresskr9BprJ = "0x0000000000000000000000000000000000000001"
		const addressMmjCeQE = accounts[3]
		const bytev7r82h2 = "0x0e161b1016051b181a070e1d11090316200c20021a07110a0c161e131a191c0f"
		const uintjBqzMaZ = BigInt("683")
		const bytes32m8Mjkn2 = await VatZCgX7Lg.slip.call(byte3p6uLT, addressLJWogmY, intzzqTLNh, {from: accounts[0]});
		const bytes32ZYorQou = await VatZCgX7Lg.frob.call(bytev7r82h2, addressMmjCeQE, addresskr9BprJ, addressMnOOfL, intMV4b4WB, intTozvShG, {from: accounts[4]});
		const uintYiS1MyJ = await VatZCgX7Lg.heal.call(uintjBqzMaZ, {from: accounts[4]});

		await expect(VatZCgX7Lg.frob.call(bytev7r82h2, addressMmjCeQE, addresskr9BprJ, addressMnOOfL, intMV4b4WB, intTozvShG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZCgX7Lg = await Vat.new({from: accounts[0]});
		const uintJkbupM = BigInt("1176")
		const addressyy6bFuc = "0x0000000000000000000000000000000000000001"
		const addressZHoVB0f = accounts[3]
		const uintz33DJ8G = BigInt("1541")
		const addressHcRRsKB = accounts[5]
		const addressDomhyey = accounts[5]
		const byteI8UX8uO = "0x150c1c13031e0211130d0b1f030c130b1a0a130f050218171c021c180f1f050b"
		const addressiXXLmcw = accounts[4]
		const uintm9CQP2s = BigInt("227")
		const address2s9WCB = await VatZCgX7Lg.move.call(addressZHoVB0f, addressyy6bFuc, uintJkbupM, {from: accounts[3]});
		await VatZCgX7Lg.cage.call({from: accounts[1]});
		const bytes32LdJvkjH = await VatZCgX7Lg.flux.call(byteI8UX8uO, addressDomhyey, addressHcRRsKB, uintz33DJ8G, {from: accounts[0]});
		const addresskSK7JH5 = await VatZCgX7Lg.hope.call(addressiXXLmcw, {from: accounts[2]});
		const uintYiS1MyJ = await VatZCgX7Lg.heal.call(uintm9CQP2s, {from: accounts[4]});

		await expect(VatZCgX7Lg.move.call(addressZHoVB0f, addressyy6bFuc, uintJkbupM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZCgX7Lg = await Vat.new({from: accounts[0]});
		const intgoM1lZu = BigInt("-1634")
		const intg1akMj = BigInt("-1562")
		const addressmRo5fDs = accounts[3]
		const addresspg5ozH = accounts[3]
		const byteDYiKwo = "0x100201000d09060817130a1f0e1605040d171e1f1d130e0b0e011c0e1c081113"
		const uintnJqfPoi = BigInt("1665")
		const byteIEMWG5f = "0x0d111710090e180806181b091800021206081601110c18100a0c0b1a061e1511"
		const byteOKU6YDD = "0x040b03191e1e0f0b05051a07031d20160c17001b0e151d051a101406040c0211"
		const uintoerW6W = BigInt("675")
		const addressb3MGt3A = "0x0000000000000000000000000000000000000001"
		const addresstekAL6 = accounts[4]
		const byteIgCdmYD = "0x1e0a1b1b120a1d0c0803131d161e0a0118140d070a20170b0f0f06181316061d"
		const bytes32HifX9q = await VatZCgX7Lg.fork.call(byteDYiKwo, addresspg5ozH, addressmRo5fDs, intg1akMj, intgoM1lZu, {from: accounts[3]});
		const bytes32jcHWbFg = await VatZCgX7Lg.file.call(byteOKU6YDD, byteIEMWG5f, uintnJqfPoi, {from: accounts[2]});
		const bytes32LdXaEU = await VatZCgX7Lg.flux.call(byteIgCdmYD, addresstekAL6, addressb3MGt3A, uintoerW6W, {from: accounts[1]});

		await expect(VatZCgX7Lg.file.call(byteOKU6YDD, byteIEMWG5f, uintnJqfPoi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQbY8uQL = await Vat.new({from: accounts[5]});
		const addressBaBlxq3 = accounts[0]
		const inteJYxGuI = BigInt("107")
		const intNGM2IQP = BigInt("1214")
		const addressIokqJxz = accounts[4]
		const addressdwrr04H = accounts[5]
		const byteQ7nQ8dV = "0x2009181d081009091b1d0f041b14121307140a0b0f16151b11061f06061d100a"
		const intM71DYr8 = BigInt("-120")
		const intY4Vsbl7 = BigInt("-364")
		const addressfsxaJe = accounts[0]
		const addressLqCgTcH = "0x0000000000000000000000000000000000000001"
		const addressBNi8xLV = "0x0000000000000000000000000000000000000001"
		const bytedffa7AW = "0x1d16070101081b0f0c04111c15150a0f170d14031712021a13060a08091e1a10"
		const byteeRLA82 = "0x1e02080d03010f101a08011115050d0213191114070719160b12120d180d0707"
		const uintdJU6rVj = BigInt("899")
		const byteRJG53JE = "0x191f110b08181c161a1f1a061a101f0506141315050a090b20010a07201f1e11"
		const addressFrAGyrD = await VatQbY8uQL.rely.call(addressBaBlxq3, {from: accounts[5]});
		const bytes32bXWiWR = await VatQbY8uQL.fork.call(byteQ7nQ8dV, addressdwrr04H, addressIokqJxz, intNGM2IQP, inteJYxGuI, {from: accounts[0]});
		await VatQbY8uQL.cage.call({from: accounts[5]});
		const bytes32AF9o7g = await VatQbY8uQL.grab.call(bytedffa7AW, addressBNi8xLV, addressLqCgTcH, addressfsxaJe, intY4Vsbl7, intM71DYr8, {from: accounts[4]});
		const bytes32TMTOqKt = await VatQbY8uQL.init.call(byteeRLA82, {from: accounts[3]});
		const bytes32mJil6I0 = await VatQbY8uQL.file.call(byteRJG53JE, uintdJU6rVj, {from: accounts[0]});

		await expect(VatQbY8uQL.fork.call(byteQ7nQ8dV, addressdwrr04H, addressIokqJxz, intNGM2IQP, inteJYxGuI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZCgX7Lg = await Vat.new({from: accounts[0]});
		const uintumTfkh = BigInt("1502")
		const addressq1Lxr9b = accounts[1]
		const addressBRZR6zu = accounts[1]
		const bytenLqBqa3 = "0x070b100d13040d0c0e1f0f090207090916171812120e080810041f1620140a1b"
		const uintmlAVPcO = BigInt("684")
		const bytes32J4FWQrq = await VatZCgX7Lg.flux.call(bytenLqBqa3, addressBRZR6zu, addressq1Lxr9b, uintumTfkh, {from: accounts[1]});
		const uintYiS1MyJ = await VatZCgX7Lg.heal.call(uintmlAVPcO, {from: accounts[4]});

		await expect(VatZCgX7Lg.flux.call(bytenLqBqa3, addressBRZR6zu, addressq1Lxr9b, uintumTfkh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZCgX7Lg = await Vat.new({from: accounts[0]});
		const byteixoHGEj = "0x1c0c0f09130a080911071b081d060d1f1808041413182014121d090a0f061620"
		const uintsupU6nc = BigInt("202")
		const bytes32djtIcxS = await VatZCgX7Lg.init.call(byteixoHGEj, {from: accounts[0]});
		const uintYiS1MyJ = await VatZCgX7Lg.heal.call(uintsupU6nc, {from: accounts[4]});
		await VatZCgX7Lg.auth.call({from: accounts[4]});
		await VatZCgX7Lg.cage.call({from: accounts[5]});

		await expect(VatZCgX7Lg.heal.call(uintsupU6nc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZCgX7Lg = await Vat.new({from: accounts[0]});
		const uintB6dpoz5 = BigInt("1476")
		const addressca9V3a = accounts[1]
		const addresst6oXIoU = accounts[4]
		const uintY0TNNo5 = BigInt("187")
		const uintzd8T08j = BigInt("198")
		const byteo200wdc = "0x19040c17170f0b1e0a0f12140a0f10080a1d100b0913040e150f1d020c100817"
		const byterqdtwa = "0x1d0818150417140f1e150c0b0f041e1f0f11011d0e03051e12061a170612081b"
		const intjXI50XL = BigInt("-647")
		const addressl3BLvZ = accounts[4]
		const bytesITaF0n = "0x06161f1a1f03131709111d100c1f1504090302111f03190b0d050f0a030e021e"
		const addressRb6owks = accounts[3]
		const intgIedj0O = BigInt("1049")
		const intWUxAJBq = BigInt("1070")
		const addressTG13fZS = accounts[2]
		const addressivavKh0 = accounts[0]
		const addressajkIS8s = accounts[4]
		const bytedR83IS = "0x190d061f1c121e040c1c0b0404140d010402160b0d1814070c0618091b101815"
		const addressP4CjMWm = await VatZCgX7Lg.suck.call(addresst6oXIoU, addressca9V3a, uintB6dpoz5, {from: accounts[0]});
		const uintYiS1MyJ = await VatZCgX7Lg.heal.call(uintY0TNNo5, {from: accounts[4]});
		const bytes32ieWX0m = await VatZCgX7Lg.file.call(byterqdtwa, byteo200wdc, uintzd8T08j, {from: accounts[4]});
		const bytes32Z4jjaXh = await VatZCgX7Lg.slip.call(bytesITaF0n, addressl3BLvZ, intjXI50XL, {from: accounts[4]});
		const addresszYtePA5 = await VatZCgX7Lg.deny.call(addressRb6owks, {from: accounts[4]});
		const bytes32MAzoiGF = await VatZCgX7Lg.frob.call(bytedR83IS, addressajkIS8s, addressivavKh0, addressTG13fZS, intWUxAJBq, intgIedj0O, {from: accounts[3]});

		await expect(VatZCgX7Lg.heal.call(uintY0TNNo5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWNr5GVR = await Vat.new({from: accounts[4]});
		const uintbFZddc5 = BigInt("1957")
		const byteag0PYss = "0x1317100a160010071c1811191a0f05101d0f1816100d0a2011111318181e1b15"
		const byterfABd9j = "0x1d031808131c08111f0b0a0103060103031c1b061f0106080a1518100c190b15"
		const intwpGAGkd = BigInt("1809")
		const intFVJDbqN = BigInt("-1272")
		const addressLDYQDK = accounts[3]
		const addresssTls0yv = accounts[5]
		const addressjm6CMq = accounts[1]
		const bytewTB14uV = "0x0d1b1f1810021904021b13130f1812061203131c17100a090612050e06081e18"
		const bytes32IighTe0 = await VatWNr5GVR.file.call(byterfABd9j, byteag0PYss, uintbFZddc5, {from: accounts[4]});
		const bytes32FN2lQlC = await VatWNr5GVR.frob.call(bytewTB14uV, addressjm6CMq, addresssTls0yv, addressLDYQDK, intFVJDbqN, intwpGAGkd, {from: accounts[5]});

		await expect(VatWNr5GVR.file.call(byterfABd9j, byteag0PYss, uintbFZddc5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatV95daAP = await Vat.new({from: accounts[3]});
		const intgMGHyjS = BigInt("947")
		const intbbKOHBS = BigInt("-1051")
		const addressvrupBu6 = "0x0000000000000000000000000000000000000001"
		const addressDK5Smc1 = accounts[2]
		const addressfKFrGNZ = "0x0000000000000000000000000000000000000001"
		const byte5PjpJ8 = "0x0bffffffff1d2001111b1d0916091315190f181a1c1016181004011612110501011e07"
		const intL35QlSn = BigInt("-1529")
		const addresssGktMh1 = accounts[0]
		const bytebFfZWza = "0x1c0310170d120a10040416080f070a0b0c0a00010f13030217200a1418141a07"
		const intfhdsvDI = BigInt("-1839")
		const addressnXqKVEa = accounts[3]
		const byterh5ccXO = "0x0d1617131c1d04111219071313150f021b0200150317081a110220051315111a"
		const intfKcgJbO = BigInt("-2023")
		const intZptIBw0 = BigInt("-1443")
		const addressx9Tvuij = accounts[2]
		const addressSPNkHCw = accounts[4]
		const byteZ6Xol8 = "0x171911131712101611120d0d10050b0318070601080b1d031f0a0008191e2001"
		const intgVOBnE2 = BigInt("989")
		const intR9Qcvmu = BigInt("-1915")
		const addressteppBsH = accounts[4]
		const addressSlevTiZ = accounts[5]
		const addressOZZ0imb = accounts[5]
		const byteOaQhxtb = "0x05031e0e1a200c07091f1b19041e0c1d1a03010c1f010a051911141309051d12"
		const bytes32qEXc1sL = await VatV95daAP.frob.call(byte5PjpJ8, addressfKFrGNZ, addressDK5Smc1, addressvrupBu6, intbbKOHBS, intgMGHyjS, {from: accounts[2]});
		const bytes32FvlFz4E = await VatV95daAP.slip.call(bytebFfZWza, addresssGktMh1, intL35QlSn, {from: accounts[2]});
		const bytes32Xh9Gdav = await VatV95daAP.fold.call(byterh5ccXO, addressnXqKVEa, intfhdsvDI, {from: accounts[1]});
		const bytes32sW17H3Q = await VatV95daAP.fork.call(byteZ6Xol8, addressSPNkHCw, addressx9Tvuij, intZptIBw0, intfKcgJbO, {from: accounts[3]});
		const bytes32rQDACEv = await VatV95daAP.frob.call(byteOaQhxtb, addressOZZ0imb, addressSlevTiZ, addressteppBsH, intR9Qcvmu, intgVOBnE2, {from: accounts[4]});

		await expect(VatV95daAP.frob.call(byte5PjpJ8, addressfKFrGNZ, addressDK5Smc1, addressvrupBu6, intbbKOHBS, intgMGHyjS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})