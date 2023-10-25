const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatMvf6xs = await Vat.new({from: accounts[0]});
		const uintICbVdlq = BigInt("590")
		const addressBhbioOS = accounts[3]
		const addressdratc4o = accounts[2]
		const uintkpKxuwR = BigInt("949")
		const addressX9wQknM = accounts[5]
		const addressq1FfRJ1 = accounts[3]
		const uintTbqmfSG = BigInt("407")
		const bytejHOte6 = "0x1514171709100b14201b03171920030e0f0c19160507020c1b05081018201302"
		const byteLzKqt8e = "0x0b18170f191b0b05041f0a0b001a0d00180d0a1608190702190e0801091e181c"
		const intleFU58E = BigInt("-1132")
		const intX09Ix4 = BigInt("-1605")
		const addressHyPiBw9 = accounts[3]
		const addresssVle1ny = "0x0000000000000000000000000000000000000001"
		const addressXnzuSSi = accounts[4]
		const byte3LgAMo = "0x14071316071f041905151f19040511110a0c1005050513170f011f011f190003"
		const byteFeJshM8 = "0x070c150b03200d0d15111d0d0507021306090a1f180811031012131618110907"
		const addresshm8l0Wu = await VatMvf6xs.move.call(addressdratc4o, addressBhbioOS, uintICbVdlq, {from: accounts[2]});
		const addressHsOLePo = await VatMvf6xs.suck.call(addressq1FfRJ1, addressX9wQknM, uintkpKxuwR, {from: accounts[1]});
		const bytes32yMHyYag = await VatMvf6xs.file.call(byteLzKqt8e, bytejHOte6, uintTbqmfSG, {from: accounts[4]});
		const bytes32h2tjwhK = await VatMvf6xs.grab.call(byte3LgAMo, addressXnzuSSi, addresssVle1ny, addressHyPiBw9, intX09Ix4, intleFU58E, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32MJQKUaE = await VatMvf6xs.init.call(byteFeJshM8, {from: accounts[3]});

		await expect(VatMvf6xs.move.call(addressdratc4o, addressBhbioOS, uintICbVdlq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatYlgoILZ = await Vat.new({from: accounts[0]});
		const addressk7b7bnK = accounts[1]
		const addressbEb4rME = accounts[5]
		const addresseDJcRyB = await VatYlgoILZ.rely.call(addressk7b7bnK, {from: accounts[3]});
		await VatYlgoILZ.cage.call({from: accounts[5]});
		const addressYcDRpGl = await VatYlgoILZ.nope.call(addressbEb4rME, {from: accounts[1]});

		await expect(VatYlgoILZ.rely.call(addressk7b7bnK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatAXa23LW = await Vat.new({from: accounts[2]});
		const intGgqm9P = BigInt("1771")
		const intVTawXx = BigInt("-483")
		const addressvZ8bSLJ = accounts[1]
		const addressk17zzG = accounts[0]
		const byteH99iP9V = "0x130214190a141e131a031b1020030a1c1c10191d181b1c120304160d1318030b"
		const uintbdi1dWj = BigInt("428")
		const addressMnor5f4 = accounts[1]
		const addressqIrCn8C = accounts[0]
		await VatAXa23LW.auth.call({from: accounts[3]});
		const bytes32Xk2rL83 = await VatAXa23LW.fork.call(byteH99iP9V, addressk17zzG, addressvZ8bSLJ, intVTawXx, intGgqm9P, {from: accounts[2]});
		const addresst8hDcc5 = await VatAXa23LW.move.call(addressqIrCn8C, addressMnor5f4, uintbdi1dWj, {from: accounts[1]});

		await expect(VatAXa23LW.auth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const uint4hGlNU = BigInt("39")
		const byteKXHe6mK = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const bytery9Bk1O = "0x0e18100d031c0f1e1a10031104101f1f1f03191602081e0f0d031b0912100212"
		const uintMBFTDD = BigInt("31")
		const addressH4wioSS = accounts[1]
		const addressc8beSw2 = accounts[4]
		const byteszrWDdS = "0x13170e20050a0e031c0d161b1609171e0d1e151414121206141d1c1e1d051e0c"
		const bytesk1q3Zy = "0x0b130b040b1602031e1f0f170b1404150417161a180807151e201c031d191a00"
		const bytes32M8rriZD = await VatXOcVTQ.file.call(bytery9Bk1O, byteKXHe6mK, uint4hGlNU, {from: accounts[2]});
		await VatXOcVTQ.note.call({from: accounts[2]});
		const bytes32CoFQYuX = await VatXOcVTQ.flux.call(byteszrWDdS, addressc8beSw2, addressH4wioSS, uintMBFTDD, {from: accounts[2]});
		const bytes32aBCXZdG = await VatXOcVTQ.init.call(bytesk1q3Zy, {from: accounts[0]});

		await expect(VatXOcVTQ.file.call(bytery9Bk1O, byteKXHe6mK, uint4hGlNU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatmvVf1gw = await Vat.new({from: accounts[5]});
		const intHeO53m = BigInt("775")
		const intzeavwTd = BigInt("-931")
		const addressxRzJjdU = accounts[4]
		const addressEMUIAn = accounts[0]
		const addressN51Vnje = accounts[3]
		const byteHkjVHcI = "0x19031e0a151f041d0f09011803070b081b0c060c131e1d011d0513121516181d"
		const addressTDcTJi = accounts[1]
		const inti46u5ac = BigInt("-1479")
		const intQitP1U9 = BigInt("1330")
		const addressonm1Rwm = "0x0000000000000000000000000000000000000001"
		const addresswSzPysE = accounts[3]
		const addressBviTIdQ = accounts[3]
		const byteLZnuiVK = "0x0514040d0f0d071903041c0d1d100004111a12190d19081306170306071c1f0a"
		const int9NSTST = BigInt("1862")
		const addressDWMq37 = accounts[1]
		const byteC0JnAbA = "0x0e0d08121914110a120d17001203131f071d1f1115060803190b0c091708151b"
		const bytes32NaNMPCj = await VatmvVf1gw.frob.call(byteHkjVHcI, addressN51Vnje, addressEMUIAn, addressxRzJjdU, intzeavwTd, intHeO53m, {from: accounts[1]});
		const addressBUJc4In = await VatmvVf1gw.nope.call(addressTDcTJi, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32EamLzLw = await VatmvVf1gw.grab.call(byteLZnuiVK, addressBviTIdQ, addresswSzPysE, addressonm1Rwm, intQitP1U9, inti46u5ac, {from: accounts[2]});
		await VatmvVf1gw.auth.call({from: "0x0000000000000000000000000000000000000001"});
		await VatmvVf1gw.note.call({from: accounts[2]});
		const bytes32U1vPDd = await VatmvVf1gw.slip.call(byteC0JnAbA, addressDWMq37, int9NSTST, {from: accounts[1]});

		await expect(VatmvVf1gw.frob.call(byteHkjVHcI, addressN51Vnje, addressEMUIAn, addressxRzJjdU, intzeavwTd, intHeO53m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatAmHidys = await Vat.new({from: accounts[0]});
		const intDOpB4vx = BigInt("1684")
		const intMdnpNT6 = BigInt("330")
		const addressAeKPQh = accounts[2]
		const addressko9Zbag = accounts[2]
		const bytetPnpZF7 = "0x0a1f1d080e0c180a0619030103190e01100d0d0b0c1f0c101e0813070f040e14"
		const uintrtAsRr0 = BigInt("502")
		const byteS6kYK0y = "0x1c04121912111305130b0f1e0305041d0f1d070809110e120a0e040b011e1205"
		const bytexE7BfM = "0x061a0210041415071c0201170d0908180f1617120f0a1f191e1f04181f0b0006"
		const bytes32YDbwVDW = await VatAmHidys.fork.call(bytetPnpZF7, addressko9Zbag, addressAeKPQh, intMdnpNT6, intDOpB4vx, {from: accounts[1]});
		const bytes32cvwkuW = await VatAmHidys.file.call(bytexE7BfM, byteS6kYK0y, uintrtAsRr0, {from: accounts[2]});

		await expect(VatAmHidys.fork.call(bytetPnpZF7, addressko9Zbag, addressAeKPQh, intMdnpNT6, intDOpB4vx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatJpGmBZ = await Vat.new({from: accounts[1]});
		const addresseiH6vAf = accounts[4]
		const int1pvjyI = BigInt("875")
		const intVOUKdmG = BigInt("-628")
		const addressEmvQqL5 = accounts[2]
		const addressaR0ToJX = accounts[0]
		const byteqepROIw = "0x0a141c181e0f0c101d0f0f170a0f1c0e161b040b121b151d081c05110512081f"
		const addresskcfVD6w = accounts[3]
		const uintvP8702S = BigInt("614")
		const addressu3jfHVg = accounts[2]
		const address4zdJSt = await VatJpGmBZ.nope.call(addresseiH6vAf, {from: accounts[2]});
		const bytes32W9Z3pYT = await VatJpGmBZ.fork.call(byteqepROIw, addressaR0ToJX, addressEmvQqL5, intVOUKdmG, int1pvjyI, {from: accounts[5]});
		const addressGHWcqvx = await VatJpGmBZ.hope.call(addresskcfVD6w, {from: "0x0000000000000000000000000000000000000001"});
		const uintwW55yi4 = await VatJpGmBZ.heal.call(uintvP8702S, {from: "0x0000000000000000000000000000000000000001"});
		const addressQnpTXbv = await VatJpGmBZ.deny.call(addressu3jfHVg, {from: accounts[0]});

		await expect(VatJpGmBZ.fork.call(byteqepROIw, addressaR0ToJX, addressEmvQqL5, intVOUKdmG, int1pvjyI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatHpFLb6r = await Vat.new({from: accounts[4]});
		const uintgmNJbbc = BigInt("1709")
		const intiMD3FRs = BigInt("1125")
		const addressjxcj8b = accounts[2]
		const bytefcboOTG = "0x1e18010e03090b1806131b110d0b051b11021a1b1102140d13111b1e0b0c1707"
		const uintKtpLqxi = await VatHpFLb6r.heal.call(uintgmNJbbc, {from: accounts[0]});
		await VatHpFLb6r.note.call({from: accounts[0]});
		const bytes32nnGfaXv = await VatHpFLb6r.fold.call(bytefcboOTG, addressjxcj8b, intiMD3FRs, {from: accounts[2]});
		await VatHpFLb6r.note.call({from: accounts[1]});

		await expect(VatHpFLb6r.heal.call(uintgmNJbbc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatOgYxlqG = await Vat.new({from: accounts[2]});
		const uint9tSh8i = BigInt("462")
		const addressRMFT3Ac = accounts[3]
		const addressHnrXH8h = accounts[2]
		const addressWZnWFX = accounts[4]
		const intwVLNRoe = BigInt("-1749")
		const intnqB2rGE = BigInt("-1656")
		const addressl7CgAKj = accounts[5]
		const addressZPp2Fmo = accounts[3]
		const bytejnfroqU = "0x14141005131b07130c14151c0e15111f070b0d20041f1e2020170316180b0519"
		const uintVXPAlKO = BigInt("673")
		const byteFDdxJ7i = "0x0c051d1c0e0902151c0b120c0b130e141e0e01081609181a0c18041c1d100116"
		const addressFcEGRI1 = await VatOgYxlqG.move.call(addressHnrXH8h, addressRMFT3Ac, uint9tSh8i, {from: accounts[4]});
		const addresscQI6j3 = await VatOgYxlqG.deny.call(addressWZnWFX, {from: accounts[4]});
		const bytes32LZxiNzp = await VatOgYxlqG.fork.call(bytejnfroqU, addressZPp2Fmo, addressl7CgAKj, intnqB2rGE, intwVLNRoe, {from: accounts[3]});
		await VatOgYxlqG.cage.call({from: accounts[2]});
		const bytes32wGbCLA = await VatOgYxlqG.file.call(byteFDdxJ7i, uintVXPAlKO, {from: accounts[1]});

		await expect(VatOgYxlqG.move.call(addressHnrXH8h, addressRMFT3Ac, uint9tSh8i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatO0HzFBD = await Vat.new({from: accounts[3]});
		const addressTuLTOC1 = accounts[0]
		const intoeUQXDQ = BigInt("-1398")
		const intFLxrO9V = BigInt("83")
		const addressLa4Whfj = accounts[2]
		const addressZYhOJbk = accounts[3]
		const addressCzuGym = accounts[0]
		const byteIgnXZTJ = "0x180215050a0f0801041e0c0a071c0316170d1f121f0e051c081b0a1319110211"
		const addresspsmcAA = await VatO0HzFBD.hope.call(addressTuLTOC1, {from: accounts[5]});
		const bytes32XqcvR7v = await VatO0HzFBD.frob.call(byteIgnXZTJ, addressCzuGym, addressZYhOJbk, addressLa4Whfj, intFLxrO9V, intoeUQXDQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatO0HzFBD.frob.call(byteIgnXZTJ, addressCzuGym, addressZYhOJbk, addressLa4Whfj, intFLxrO9V, intoeUQXDQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatgfww6oS = await Vat.new({from: accounts[5]});
		const byteXBvSqb0 = "0x1209130a161804120c19161b08190f0d1c16031408061c101620071d15090f0d"
		const addresswl6ecMY = accounts[4]
		const uintAM2fKtV = BigInt("1519")
		const byteJnzmnnY = "0x1511110c1c1110181f1f04001d0e0909021f091d051907161a1c141d011b050f"
		const byteivSdZWZ = "0x061f01160918021d1e131804171f0c20190d18041d0110180b0104000b0f0919"
		const bytes32cP10by8 = await Vatgfww6oS.init.call(byteXBvSqb0, {from: accounts[5]});
		const addressdG7L0W7 = await Vatgfww6oS.hope.call(addresswl6ecMY, {from: accounts[3]});
		await Vatgfww6oS.note.call({from: accounts[5]});
		const bytes32kK45XMM = await Vatgfww6oS.file.call(byteivSdZWZ, byteJnzmnnY, uintAM2fKtV, {from: accounts[4]});

		await expect(Vatgfww6oS.note.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const uintVR3Eate = BigInt("32")
		const byteELbqPU = "0x0a0b1605190b11090a1f200500201918081b03191e0a061e1c0f0b031318021d"
		const uintkVsZJqc = BigInt("67")
		const byteRsiEsS9 = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const byteOTcuHwh = "0x0e18100d031c0f1e1a10031104101f1f1f03191602081e0f0d031b0912100212"
		const bytes32dBGQZ0S = await VatXOcVTQ.file.call(byteELbqPU, uintVR3Eate, {from: accounts[3]});
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteOTcuHwh, byteRsiEsS9, uintkVsZJqc, {from: accounts[2]});

		await expect(VatXOcVTQ.file.call(byteELbqPU, uintVR3Eate, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatqAXGcZ = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const addressp9G7ju = accounts[4]
		const intWWKXVzB = BigInt("95")
		const addressUksHleq = accounts[2]
		const byteNMBHxsp = "0x1f0c16050807191e04180d141f120801100d0a05090c0d1e0d0809100f001b05"
		const uintcXdlom7 = BigInt("1496")
		const intwp7lvGK = BigInt("516")
		const addressejS0TT = accounts[1]
		const byteaRJheJR = "0x0a1d1b1a150616160103131c070c0801021a131e190514181b0913101e051f0d"
		const addressMSWiyyz = await VatqAXGcZ.nope.call(addressp9G7ju, {from: accounts[1]});
		const bytes32hFMkAh4 = await VatqAXGcZ.fold.call(byteNMBHxsp, addressUksHleq, intWWKXVzB, {from: accounts[3]});
		const uintBMFVpFf = await VatqAXGcZ.heal.call(uintcXdlom7, {from: accounts[1]});
		const bytes32NbaI4Jp = await VatqAXGcZ.fold.call(byteaRJheJR, addressejS0TT, intwp7lvGK, {from: accounts[0]});
	});

	it('test for Vat', async () => {
		const VatFzLKVv1 = await Vat.new({from: accounts[0]});
		const addressZN2pNSk = "0x0000000000000000000000000000000000000001"
		const intefpzVZE = BigInt("1328")
		const addressZWRw2VL = accounts[2]
		const byteLvGkjO = "0x0a051c15171c070b010d0c14031112110f0f061d1f0a17100f190e0c01120d20"
		const addresscnH5X6t = await VatFzLKVv1.deny.call(addressZN2pNSk, {from: accounts[0]});
		const bytes32MWf8I3s = await VatFzLKVv1.slip.call(byteLvGkjO, addressZWRw2VL, intefpzVZE, {from: accounts[3]});

		await expect(VatFzLKVv1.slip.call(byteLvGkjO, addressZWRw2VL, intefpzVZE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFzLKVv1 = await Vat.new({from: accounts[0]});
		const uintuv4JtKk = BigInt("1545")
		const addresst8IKn6 = accounts[1]
		const addressr0na1Ln = accounts[1]
		const byteAXIiRiY = "0x1806111f061707140d16151803130b1607191905180f0108020813071717191b"
		const intG58KINy = BigInt("1348")
		const addressf1E6dAX = accounts[2]
		const bytenXeBM2 = "0x0a051c15171c070b010d0c14031112110f0f061d1f0a17100f190e0c01120d20"
		const bytes32OqLC0Lw = await VatFzLKVv1.flux.call(byteAXIiRiY, addressr0na1Ln, addresst8IKn6, uintuv4JtKk, {from: accounts[2]});
		const bytes32MWf8I3s = await VatFzLKVv1.slip.call(bytenXeBM2, addressf1E6dAX, intG58KINy, {from: accounts[3]});

		await expect(VatFzLKVv1.flux.call(byteAXIiRiY, addressr0na1Ln, addresst8IKn6, uintuv4JtKk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1lH2Qf = await Vat.new({from: accounts[2]});
		const addressZBDv4kI = accounts[2]
		const intZKe3Qw4 = BigInt("-805")
		const intMmYyb7T = BigInt("-629")
		const addressmLmvid0 = accounts[2]
		const addressQP7rqhb = accounts[2]
		const byteUxF6StB = "0x0b0d160c0f080607181203041905070c161e11050c17181b0d1902130a1c121a"
		const intYrKnKM = BigInt("899")
		const addressSI750Dp = accounts[3]
		const byteFpbZdgR = "0x091f011d1b1a1b1319031d0907051409031f101b1904060a0d0f03000f150b04"
		const uintaea2VRK = BigInt("836")
		const addressNsg1lol = accounts[4]
		const addresshm42Bnh = "0x0000000000000000000000000000000000000001"
		const intI7cOyQz = BigInt("1885")
		const addressAggUxzC = accounts[4]
		const byteVDPs8hj = "0x0e030319181504111f11111312140c070e041414100a1614071c1d1c1112090c"
		const addressahWVCG3 = await Vat1lH2Qf.nope.call(addressZBDv4kI, {from: accounts[1]});
		const bytes32rfOnBpG = await Vat1lH2Qf.fork.call(byteUxF6StB, addressQP7rqhb, addressmLmvid0, intMmYyb7T, intZKe3Qw4, {from: accounts[0]});
		const bytes32CLc5Wdc = await Vat1lH2Qf.slip.call(byteFpbZdgR, addressSI750Dp, intYrKnKM, {from: accounts[2]});
		const addressiXR0O5N = await Vat1lH2Qf.suck.call(addresshm42Bnh, addressNsg1lol, uintaea2VRK, {from: accounts[2]});
		const bytes322NVIr1 = await Vat1lH2Qf.slip.call(byteVDPs8hj, addressAggUxzC, intI7cOyQz, {from: accounts[5]});

		await expect(Vat1lH2Qf.fork.call(byteUxF6StB, addressQP7rqhb, addressmLmvid0, intMmYyb7T, intZKe3Qw4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const uintI9PispV = BigInt("39")
		const byteAaIjsT1 = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const byteVKA0vk = "0x0e18100d031c0f1e1a10fffffffe1104101f1f1f03191602081e0f0d031b0912100212"
		const uintoezil7i = BigInt("1931")
		const addressso41P0z = accounts[1]
		const addressDpR1aht = accounts[1]
		const byteVgvJKLk = "0x07060c151b1c0e1819020c0c030d0f190a200e0a120711041d07081c0a151a01"
		const addressawGkhqG = accounts[3]
		const uinteYcnoIW = BigInt("1486")
		const bytemANTNV = "0x100d1413010a0405130a080d0e1b030e1b150409050509050010181c0c0b1e11"
		const byteUZDexof = "0x151a09031b0617030119050f0d14131320191f0f050f051c071508170408010b"
		const uintsPN76TK = BigInt("31")
		const addressGfk5Oiz = accounts[1]
		const addressJ8zJDU8 = accounts[4]
		const byteJQ5gsgM = "0x13170e20050a0e031c0d161b1609171e0d1e151414121206141d1c1e1d051e0c"
		const addressTmucFbn = "0x0000000000000000000000000000000000000001"
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteVKA0vk, byteAaIjsT1, uintI9PispV, {from: accounts[2]});
		const bytes32siqjrYc = await VatXOcVTQ.flux.call(byteVgvJKLk, addressDpR1aht, addressso41P0z, uintoezil7i, {from: accounts[4]});
		const addressVyahlJH = await VatXOcVTQ.nope.call(addressawGkhqG, {from: accounts[1]});
		await VatXOcVTQ.note.call({from: accounts[2]});
		const bytes32U5UwWFs = await VatXOcVTQ.file.call(bytemANTNV, uinteYcnoIW, {from: accounts[2]});
		const bytes32V7jVpiw = await VatXOcVTQ.init.call(byteUZDexof, {from: accounts[3]});
		const bytes32CoFQYuX = await VatXOcVTQ.flux.call(byteJQ5gsgM, addressJ8zJDU8, addressGfk5Oiz, uintsPN76TK, {from: accounts[2]});
		const addressXGFS4OK = await VatXOcVTQ.nope.call(addressTmucFbn, {from: accounts[2]});

		await expect(VatXOcVTQ.file.call(byteVKA0vk, byteAaIjsT1, uintI9PispV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatLePqYB9 = await Vat.new({from: accounts[5]});
		const intLX0L1E9 = BigInt("139")
		const intJxcEJvL = BigInt("785")
		const addressHgdKutl = accounts[2]
		const addressdAUgXyq = accounts[4]
		const addressKoTVBJ7 = accounts[5]
		const byteMM6TPJQ = "0x15051d1e13010f0513180e160c1905131f0e06201b05130e0912090f05181220"
		const uintlAqaLVH = BigInt("1113")
		const bytex8Jciv = "0x0f080b1b060011071d0c190d06151b171213141612171e0f1f08041e101b0c13"
		const byteA24ObDT = "0x090b081e05200601021f171d060c0b0a10051b14060213090d1b071609170912"
		const uintBuZehlu = BigInt("858")
		const bytexQ69Sgi = "0x1d0a06030316070b131602171c1116011e16090b0104040f0f0219170a1c051b"
		const uinthNt71tX = BigInt("451")
		const addressPIAMwib = accounts[4]
		const addressWmpkjkG = accounts[4]
		const byteenoe9cZ = "0x131e130a1517181c151a0f1a0e1417050617191414190e150301101e001c0a1a"
		const uintrquUge2 = BigInt("206")
		const addresskHWSRVN = accounts[1]
		const addressfeTg0x4 = accounts[2]
		const bytes32yhBvEOh = await VatLePqYB9.grab.call(byteMM6TPJQ, addressKoTVBJ7, addressdAUgXyq, addressHgdKutl, intJxcEJvL, intLX0L1E9, {from: accounts[5]});
		const bytes32Bwz5tUW = await VatLePqYB9.file.call(byteA24ObDT, bytex8Jciv, uintlAqaLVH, {from: accounts[2]});
		const bytes32u9xRksf = await VatLePqYB9.file.call(bytexQ69Sgi, uintBuZehlu, {from: accounts[5]});
		await VatLePqYB9.auth.call({from: accounts[3]});
		const bytes32TSWr1F = await VatLePqYB9.flux.call(byteenoe9cZ, addressWmpkjkG, addressPIAMwib, uinthNt71tX, {from: accounts[3]});
		const addressQ6e7fOG = await VatLePqYB9.suck.call(addressfeTg0x4, addresskHWSRVN, uintrquUge2, {from: accounts[1]});

		await expect(VatLePqYB9.grab.call(byteMM6TPJQ, addressKoTVBJ7, addressdAUgXyq, addressHgdKutl, intJxcEJvL, intLX0L1E9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const uintx9cf5nD = BigInt("39")
		const byteSnXQX5s = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const byteEJhNPhC = "0x0e18100d031c0f1e1a10031104101f1f1ffffffffb191602081e0f0d031b0912100212"
		const bytedR92e9R = "0x0b130b040b1602031e1f0f170b1404150417161a180807151e201b031d191a00"
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteEJhNPhC, byteSnXQX5s, uintx9cf5nD, {from: accounts[2]});
		const bytes32aBCXZdG = await VatXOcVTQ.init.call(bytedR92e9R, {from: accounts[0]});

		await expect(VatXOcVTQ.file.call(byteEJhNPhC, byteSnXQX5s, uintx9cf5nD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFzLKVv1 = await Vat.new({from: accounts[0]});
		const intdAcP9nR = BigInt("1337")
		const addressTQydevT = accounts[2]
		const byteNkUU3vF = "0x0a051c15171c070bffffffff0d0c14031112110f0f061d1f0a17100f190e0c01120d20"
		const bytes32MWf8I3s = await VatFzLKVv1.slip.call(byteNkUU3vF, addressTQydevT, intdAcP9nR, {from: accounts[3]});

		await expect(VatFzLKVv1.slip.call(byteNkUU3vF, addressTQydevT, intdAcP9nR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const uintnmgUopX = BigInt("39")
		const bytei2Ot0XY = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const byteYkA8KFz = "0x0e18100d031c0f1e1a10031104101f1f1fffffffff191602081e0f0d031b0912100212"
		const uintrM4KilZ = BigInt("1193")
		const address68aw4T = accounts[0]
		const addressmetZ9vO = accounts[3]
		const bytehOL1M2t = "0x1b070e07120b0c110617151e0914071e1c101119120615111d0b11130e021d05"
		const bytecQz32R = "0x0b130b040b1602031e1f0f170b1404150417161a180807151e201b031d191a00"
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteYkA8KFz, bytei2Ot0XY, uintnmgUopX, {from: accounts[2]});
		const bytes32D7QUew3 = await VatXOcVTQ.flux.call(bytehOL1M2t, addressmetZ9vO, address68aw4T, uintrM4KilZ, {from: accounts[0]});
		await VatXOcVTQ.note.call({from: accounts[2]});
		const bytes32aBCXZdG = await VatXOcVTQ.init.call(bytecQz32R, {from: accounts[0]});

		await expect(VatXOcVTQ.file.call(byteYkA8KFz, bytei2Ot0XY, uintnmgUopX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const intHEuBiX3 = BigInt("1294")
		const addressffws9wH = accounts[0]
		const bytecvYUw0 = "0x1220121c1c1600191203121b0515020f060e091807131507081007171206131c"
		const uintl5CXaR = BigInt("39")
		const bytesUBIUIr = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const byteBphXVE = "0x0e18100d031c0f1e1a10031104101f1f1f03191602081e0f0d031b0912100212"
		const bytes32VlRU7P = await VatXOcVTQ.fold.call(bytecvYUw0, addressffws9wH, intHEuBiX3, {from: accounts[2]});
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteBphXVE, bytesUBIUIr, uintl5CXaR, {from: accounts[2]});

		await expect(VatXOcVTQ.file.call(byteBphXVE, bytesUBIUIr, uintl5CXaR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatxuAStr4 = await Vat.new({from: accounts[0]});
		const addressVohIkx4 = accounts[4]
		await VatxuAStr4.cage.call({from: accounts[0]});
		await VatxuAStr4.auth.call({from: accounts[5]});
		const addressVU9MVbr = await VatxuAStr4.hope.call(addressVohIkx4, {from: accounts[1]});
		await VatxuAStr4.cage.call({from: accounts[3]});

		await expect(VatxuAStr4.cage.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const intKha61k = BigInt("-2023")
		const addressRefXfsw = accounts[2]
		const byteZ8vDsFE = "0x1002161a171d191f2008031213081d061c0a151b0c1f1f100a1520040e190d1d"
		const uintIp2GbxE = BigInt("39")
		const byteHi1wbbx = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const byteSPl9Sny = "0x0e18100d031c0f1e1a10031104101f1f1f03191602081e0f0d031b0912100212"
		const bytePOcmTA0 = "0x0b130b040b1602031e1f0f170b1404150417161a180807151e201b031d191a00"
		const bytes32Y7Jm7aS = await VatXOcVTQ.slip.call(byteZ8vDsFE, addressRefXfsw, intKha61k, {from: accounts[2]});
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteSPl9Sny, byteHi1wbbx, uintIp2GbxE, {from: accounts[2]});
		const bytes32aBCXZdG = await VatXOcVTQ.init.call(bytePOcmTA0, {from: accounts[0]});

		await expect(VatXOcVTQ.slip.call(byteZ8vDsFE, addressRefXfsw, intKha61k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const address8KZUmh = accounts[2]
		const uintbpHxInu = BigInt("39")
		const bytegJ3Bcjc = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const byteRTNIcdB = "0x0e18100d031c0f1e1a10031104101f1f1f03191602081e0f0d031b0912100212"
		const byteXyEWfTD = "0x0b130b040b1602031e1f0f170b1404150417161a180807151e201b031d191a00"
		const addresstQ2N1B = await VatXOcVTQ.rely.call(address8KZUmh, {from: accounts[2]});
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteRTNIcdB, bytegJ3Bcjc, uintbpHxInu, {from: accounts[2]});
		const bytes32aBCXZdG = await VatXOcVTQ.init.call(byteXyEWfTD, {from: accounts[0]});

		await expect(VatXOcVTQ.file.call(byteRTNIcdB, bytegJ3Bcjc, uintbpHxInu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const uintTdOKRJx = BigInt("39")
		const byteNo5Eqrz = "0x02050b0c1a1d0e131119140206110a1c071113fffffffc101d08091d0d011a09181a09"
		const byteKK0vkkM = "0x0e18100d031c0f1e1a10031104101f1f1f03191602081e0f0d031b0912100212"
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteKK0vkkM, byteNo5Eqrz, uintTdOKRJx, {from: accounts[2]});

		await expect(VatXOcVTQ.file.call(byteKK0vkkM, byteNo5Eqrz, uintTdOKRJx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const uintNGLe1Eh = BigInt("39")
		const bytemVAsSDU = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const byteYeyxrW8 = "0x0e18100d031c0f1e1a10031104101f1f1f03191602081e0f0dfffffffe1b0912100212"
		const uintoLbW9TT = BigInt("1486")
		const bytemzrJBDn = "0x100d1413010a0405130a080d0e1b030e1b150409050509050010181c0c0b1e11"
		const uintw0oIiAq = BigInt("31")
		const addresskBheGqG = accounts[1]
		const addressfqImdSw = accounts[4]
		const bytepZ1qfc9 = "0x13170e20050a0e031c0d161b1609171e0d1e151414121206141d1c1e1d051e0c"
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteYeyxrW8, bytemVAsSDU, uintNGLe1Eh, {from: accounts[2]});
		await VatXOcVTQ.note.call({from: accounts[2]});
		const bytes32U5UwWFs = await VatXOcVTQ.file.call(bytemzrJBDn, uintoLbW9TT, {from: accounts[2]});
		const bytes32CoFQYuX = await VatXOcVTQ.flux.call(bytepZ1qfc9, addressfqImdSw, addresskBheGqG, uintw0oIiAq, {from: accounts[2]});

		await expect(VatXOcVTQ.file.call(byteYeyxrW8, bytemVAsSDU, uintNGLe1Eh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatl7YFlRd = await Vat.new({from: accounts[1]});
		const uinttb6PlI9 = BigInt("1259")
		const addresspExVlyE = accounts[4]
		const addressCCaDAaH = "0x0000000000000000000000000000000000000001"
		const addressDXqitAE = accounts[3]
		const uintvXkbU9T = BigInt("1532")
		const byteWXqjGmF = "0x1c1a070a031d181b101e121c1107200b14061705050f1d010f111d0a1117170c"
		const bytehKxkQlQ = "0x1803181e1f171c121c1106070c1e15091a10161b1a170c1d1d19200c1c10070e"
		const addressOgk63V7 = await Vatl7YFlRd.suck.call(addressCCaDAaH, addresspExVlyE, uinttb6PlI9, {from: accounts[1]});
		const addressPSwI8Ld = await Vatl7YFlRd.deny.call(addressDXqitAE, {from: accounts[4]});
		const bytes32eGmzBBv = await Vatl7YFlRd.file.call(bytehKxkQlQ, byteWXqjGmF, uintvXkbU9T, {from: accounts[1]});

		await expect(Vatl7YFlRd.deny.call(addressDXqitAE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const uintMvRtaFt = BigInt("39")
		const byteBj18CsM = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0dfffffffd1a09181a09"
		const byteKQWBMuD = "0x0e18100d031c0f1e1a10031104101f1f1f03191602081e0f0d031b0912100212"
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteKQWBMuD, byteBj18CsM, uintMvRtaFt, {from: accounts[2]});

		await expect(VatXOcVTQ.file.call(byteKQWBMuD, byteBj18CsM, uintMvRtaFt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const uintlX9CpJ = BigInt("39")
		const bytebXzNyMS = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const bytewFIbV01 = "0x0e18100d031c0f1e1a100311fffffffe101f1f1f03191602081e0f0d031b0912100212"
		const bytesyqZ1XH = "0x1417120d02020d0e0905071a19041d1b060c13020a0d041a1a1e03061605140e"
		const uinthEqXP4 = BigInt("1249")
		const addressTjKEjp = accounts[5]
		const addressfz2SJ4 = accounts[2]
		const uintbHZ1XQi = BigInt("1721")
		const addressBtt5ex4 = "0x0000000000000000000000000000000000000001"
		const addressVYC2M2c = accounts[5]
		const byteSPnVx47 = "0x140f140702041c1212050e16010716011f1002180d01121f12131f0b1b061b09"
		const bytes32M8rriZD = await VatXOcVTQ.file.call(bytewFIbV01, bytebXzNyMS, uintlX9CpJ, {from: accounts[2]});
		const bytes32LinYWg = await VatXOcVTQ.init.call(bytesyqZ1XH, {from: accounts[4]});
		const addressbmvit2 = await VatXOcVTQ.suck.call(addressfz2SJ4, addressTjKEjp, uinthEqXP4, {from: accounts[0]});
		const bytes32pgYdtwC = await VatXOcVTQ.flux.call(byteSPnVx47, addressVYC2M2c, addressBtt5ex4, uintbHZ1XQi, {from: accounts[1]});
		await VatXOcVTQ.note.call({from: accounts[2]});

		await expect(VatXOcVTQ.file.call(bytewFIbV01, bytebXzNyMS, uintlX9CpJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const byteetd8Zj = "0x0b130b040b1602fffffffe1e1f0f170b1404150417161a180807151e201b031d191a00"
		const bytes32aBCXZdG = await VatXOcVTQ.init.call(byteetd8Zj, {from: accounts[0]});

		await expect(VatXOcVTQ.init.call(byteetd8Zj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXOcVTQ = await Vat.new({from: accounts[2]});
		const uintpX47InX = BigInt("39")
		const byteAx4j7q3 = "0x02050b0c1a1d0e131119140206110a1c07111302101d08091d0d011a09181a09"
		const byteuUlY75d = "0x0e18100dfffffffe1c0f1e1a10031104101f1f1f03191602081e0f0d031b0912100212"
		const intvbEJlyG = BigInt("775")
		const intYTDb32N = BigInt("-1903")
		const addressCbj8T35 = accounts[1]
		const addressiwvpQ30 = accounts[5]
		const addresshIQLPQf = accounts[3]
		const byteEC11gie = "0x1c0e0f1c1c100f0901040f0d1310100d150e05061917170e0704070b03171d05"
		const byteN9RN093 = "0x0b130b040b1602031e1f0f170b1404150417161a180807151e201b031d191a00"
		const bytes32M8rriZD = await VatXOcVTQ.file.call(byteuUlY75d, byteAx4j7q3, uintpX47InX, {from: accounts[2]});
		const bytes32AFG8Ltp = await VatXOcVTQ.frob.call(byteEC11gie, addresshIQLPQf, addressiwvpQ30, addressCbj8T35, intYTDb32N, intvbEJlyG, {from: accounts[0]});
		const bytes32aBCXZdG = await VatXOcVTQ.init.call(byteN9RN093, {from: accounts[0]});

		await expect(VatXOcVTQ.file.call(byteuUlY75d, byteAx4j7q3, uintpX47InX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})