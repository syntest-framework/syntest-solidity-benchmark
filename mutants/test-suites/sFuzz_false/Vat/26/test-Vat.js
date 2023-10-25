const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const Vat7iRUNd = await Vat.new({from: accounts[1]});
		const byteKmMiASS = "0x041e05181a191518151a0f1d1e0a160e041c0f1b03111e200a061d09170f061e"
		const addressZoO8S6f = accounts[4]
		const uintR0Og40k = BigInt("747")
		const addressab95I5m = accounts[4]
		const inty9tCaXt = BigInt("-772")
		const addressyQJRUze = accounts[4]
		const byteStS3mRo = "0x1316061e1a090d170f10101d101504051a08041f1f130013021d10162014001b"
		const uintiKlUz1F = BigInt("321")
		const addressI2FU5hq = accounts[4]
		const addresselgEfPJ = "0x0000000000000000000000000000000000000001"
//		const bytes32m9gz2Tc = await Vat7iRUNd.init.call(byteKmMiASS, {from: accounts[0]});
//		const addressyDiCBa = await Vat7iRUNd.rely.call(addressZoO8S6f, {from: accounts[0]});
//		const uintYwN8Eqw = await Vat7iRUNd.heal.call(uintR0Og40k, {from: accounts[1]});
//		const addressTT1iVk6 = await Vat7iRUNd.deny.call(addressab95I5m, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32wDt0yEX = await Vat7iRUNd.slip.call(byteStS3mRo, addressyQJRUze, inty9tCaXt, {from: accounts[1]});
//		const addressKmGZ7gr = await Vat7iRUNd.suck.call(addresselgEfPJ, addressI2FU5hq, uintiKlUz1F, {from: accounts[0]});

		await expect(Vat7iRUNd.init.call(byteKmMiASS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatKn4HtBw = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGTNlZY = BigInt("1084")
		const inthzYySu5 = BigInt("-1749")
		const intNUgmmC4 = BigInt("-1555")
		const addressX7FtDRA = accounts[0]
		const addresskAMQcp2 = "0x0000000000000000000000000000000000000001"
		const addressV4H2Sjd = accounts[1]
		const byteJECXyYP = "0x110a0d0e0e151c151415020f130614190617181d0b181204110d031a04190f14"
		const uintETHaB5o = BigInt("1787")
		const bytehDpm5pB = "0x1319081c11080020140e191e1803071a05130b0704090b1c1c1f1c191f001e02"
		const uintWIhdLs9 = BigInt("696")
		const bytevYJjhup = "0x141e10150e01181a0e0f151f10051d1e0113091a1c130b201e040812150d0a07"
		const byteCeQs7Qm = "0x0709061508100a121b0c180d0d0510031a120d0b07020a181b0f0c0106160d14"
		const uintJdRBjFv = await VatKn4HtBw.heal.call(uintGTNlZY, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32QhvEAuh = await VatKn4HtBw.grab.call(byteJECXyYP, addressV4H2Sjd, addresskAMQcp2, addressX7FtDRA, intNUgmmC4, inthzYySu5, {from: accounts[4]});
		const bytes32jwr4Kf = await VatKn4HtBw.file.call(bytehDpm5pB, uintETHaB5o, {from: accounts[4]});
		await VatKn4HtBw.auth.call({from: accounts[3]});
		const bytes32UCaa1L = await VatKn4HtBw.file.call(byteCeQs7Qm, bytevYJjhup, uintWIhdLs9, {from: accounts[3]});
	});

	it('test for Vat', async () => {
		const Vatm0ggSgX = await Vat.new({from: accounts[1]});
		const uintPgXTZ9A = BigInt("1309")
		const addressra331gn = accounts[3]
		const addressXlBUpd0 = accounts[3]
		const byteW06wXy = "0x19101710000f03031c1411151a0d1a1e0c0f190c0d090b0116130a011f180f0b"
		const addresscJ0VHgZ = accounts[2]
		const addressFyzGiuB = accounts[1]
		const addresshs7DBb = accounts[4]
//		const bytes32e1daSzy = await Vatm0ggSgX.flux.call(byteW06wXy, addressXlBUpd0, addressra331gn, uintPgXTZ9A, {from: accounts[5]});
//		const addressbJ7A6iX = await Vatm0ggSgX.nope.call(addresscJ0VHgZ, {from: accounts[1]});
//		const addressvUGxYTA = await Vatm0ggSgX.deny.call(addressFyzGiuB, {from: accounts[1]});
//		const addressu6PAfAP = await Vatm0ggSgX.deny.call(addresshs7DBb, {from: accounts[4]});
//		await Vatm0ggSgX.auth.call({from: accounts[3]});

		await expect(Vatm0ggSgX.flux.call(byteW06wXy, addressXlBUpd0, addressra331gn, uintPgXTZ9A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWWgLFwA = await Vat.new({from: accounts[3]});
		const intZtz3kA = BigInt("-1108")
		const intCC6Kxkl = BigInt("-312")
		const addressRkNa0pk = accounts[2]
		const address9GtWma = accounts[3]
		const addresst2tqGXB = accounts[3]
		const bytehwwNIac = "0x0518010c131f1c1a130d100201110b1b0c06021b061b051f15121c0600041009"
//		await VatWWgLFwA.auth.call({from: accounts[2]});
//		const bytes32chTUCBu = await VatWWgLFwA.grab.call(bytehwwNIac, addresst2tqGXB, address9GtWma, addressRkNa0pk, intCC6Kxkl, intZtz3kA, {from: accounts[0]});

		await expect(VatWWgLFwA.auth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnP8HtN = await Vat.new({from: accounts[0]});
		const intQvitos4 = BigInt("1627")
		const intSFxcz9F = BigInt("-1708")
		const addresslXVTxvg = accounts[3]
		const addressWd6yRut = accounts[1]
		const byteBYH09dV = "0x0a0e09151b090f091515021808141d0f121a1b09161119010f1b1a08110d0603"
		const intXZj3luL = BigInt("113")
		const intu41RUFd = BigInt("476")
		const addressrPp9CcQ = accounts[0]
		const addresszB9vEG6 = accounts[3]
		const addressZNatrMI = accounts[3]
		const byteycIPpbo = "0x0d1b0d0e19031a121c1f0d171f12070919031e0f1602100d0313021f0d15061c"
		const bytehl7uEEg = "0x1c14100b0a071e1115150c1606200c01051916060804031c040b0b040a1a111c"
		const intl52mUQh = BigInt("200")
		const intpBVQpK = BigInt("-1843")
		const addressTeQhk09 = accounts[3]
		const addressYtZfh04 = accounts[0]
		const byteVu4bWvw = "0x0d06100220020d0a0c1e1e1d0d080f1f0501200f081b1c170c1d0e190b01171f"
		const uintxVDWDs = BigInt("2001")
		const byten9dek9K = "0x011a030d070118110f03111b0305150a0517120003160e151c15021905201d1b"
		const bytem95p2Q6 = "0x041d160a1517191215071b0511061018170b080b020c1c1d1017051b0c1e0c18"
//		const bytes32GaUYz0 = await VatnP8HtN.fork.call(byteBYH09dV, addressWd6yRut, addresslXVTxvg, intSFxcz9F, intQvitos4, {from: accounts[4]});
//		const bytes32D0O3taA = await VatnP8HtN.grab.call(byteycIPpbo, addressZNatrMI, addresszB9vEG6, addressrPp9CcQ, intu41RUFd, intXZj3luL, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32B3L1rmP = await VatnP8HtN.init.call(bytehl7uEEg, {from: accounts[2]});
//		const bytes32lTfYhuC = await VatnP8HtN.fork.call(byteVu4bWvw, addressYtZfh04, addressTeQhk09, intpBVQpK, intl52mUQh, {from: accounts[0]});
//		const bytes32h43qnsO = await VatnP8HtN.file.call(bytem95p2Q6, byten9dek9K, uintxVDWDs, {from: accounts[1]});

		await expect(VatnP8HtN.fork.call(byteBYH09dV, addressWd6yRut, addresslXVTxvg, intSFxcz9F, intQvitos4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlZ5EJOQ = await Vat.new({from: accounts[1]});
		const addressq2gDtq = accounts[5]
		const uintI119DW6 = BigInt("1834")
		const addresspHxIaCk = accounts[4]
		const addresslbc680X = accounts[4]
		const bytexY0KAxW = "0x1013091a1e040c1507190614060607170717171c14021a1009201a101b12141e"
		const intNoTaWON = BigInt("142")
		const addressc5riMDT = accounts[3]
		const bytegy32g2L = "0x05161707101a090b1107190d181714130112100e18151f0404050d131e0f0109"
		const addressbkG0Lzs = await VatlZ5EJOQ.nope.call(addressq2gDtq, {from: accounts[5]});
//		await VatlZ5EJOQ.note.call({from: accounts[1]});
//		const bytes32QjYuGhZ = await VatlZ5EJOQ.flux.call(bytexY0KAxW, addresslbc680X, addresspHxIaCk, uintI119DW6, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32aKOPsqU = await VatlZ5EJOQ.fold.call(bytegy32g2L, addressc5riMDT, intNoTaWON, {from: accounts[4]});

		await expect(VatlZ5EJOQ.note.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatcPIqd5b = await Vat.new({from: accounts[0]});
		const addressFYMCiGu = accounts[3]
		const uintCIFUwuF = BigInt("363")
		const byteQRxIMZk = "0x0e1b090f0e080a050e0106131a1d0a13080618060d1714160e11201609020b1a"
		const intqsBvF3y = BigInt("-355")
		const intZQTgg9O = BigInt("-658")
		const addressqFvasnD = accounts[2]
		const addressqUfh0o = accounts[5]
		const byteACFlvBP = "0x0702021b011b1e0e0703160a15110d1a13131a11080b090f051e191f04071420"
		const intaOdIB44 = BigInt("-1965")
		const intwVz4yxD = BigInt("787")
		const addresss8zIi61 = accounts[0]
		const addressBRF48qX = accounts[3]
		const addressZ2FQkIB = accounts[5]
		const byteoOc8Pst = "0x0916000c0400051b0a1e140c0d14111c02111f1e0e0a131b07060f13070c1817"
		const addresstBnVLAY = await VatcPIqd5b.hope.call(addressFYMCiGu, {from: accounts[4]});
//		const bytes32rOrpftG = await VatcPIqd5b.file.call(byteQRxIMZk, uintCIFUwuF, {from: accounts[4]});
//		const bytes32xQDvqzM = await VatcPIqd5b.fork.call(byteACFlvBP, addressqUfh0o, addressqFvasnD, intZQTgg9O, intqsBvF3y, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32FqIdAva = await VatcPIqd5b.frob.call(byteoOc8Pst, addressZ2FQkIB, addressBRF48qX, addresss8zIi61, intwVz4yxD, intaOdIB44, {from: accounts[1]});

		await expect(VatcPIqd5b.file.call(byteQRxIMZk, uintCIFUwuF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1eC6K7 = await Vat.new({from: accounts[5]});
		const uintqbyO50N = BigInt("516")
		const uintsbAAZny = BigInt("771")
		const uintZU9wLTT = BigInt("272")
		const byteFkJf5U7 = "0x1e180706041e1d15101f180f0110180e0e080703011c1b0104190102060e1a1c"
		const bytemmIN2NN = "0x1f1d1004040b1804061803171918081506020718181f0017151c081604030d00"
//		const uintMLWjPif = await Vat1eC6K7.heal.call(uintqbyO50N, {from: accounts[4]});
//		const uintJVNTIU2 = await Vat1eC6K7.heal.call(uintsbAAZny, {from: accounts[0]});
//		const bytes326A8L7o = await Vat1eC6K7.file.call(bytemmIN2NN, byteFkJf5U7, uintZU9wLTT, {from: accounts[0]});

		await expect(Vat1eC6K7.heal.call(uintqbyO50N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlwOLfl5 = await Vat.new({from: accounts[1]});
		const intSVKLry = BigInt("372")
		const intjKxE2i = BigInt("-1963")
		const addressP2Tr26 = accounts[3]
		const addressLzMFd3Y = accounts[2]
		const addressBOaehaJ = "0x0000000000000000000000000000000000000001"
		const byteScJPjSc = "0x1d0a031d04120d0c1c080f0c1d05160c19100e0e1e001d061e0a1b070a00191e"
		const uintqCHGvXx = BigInt("1408")
		const bytezm9I3T8 = "0x160b090a18020b1e14191b17070a1601120301131c1f1b1016140b0001131016"
		const bytegERqxaR = "0x030c0f0807021f011817091c02050e1f20150c0519171d0f19041d1f060b1915"
//		const bytes32kuOjDe = await VatlwOLfl5.frob.call(byteScJPjSc, addressBOaehaJ, addressLzMFd3Y, addressP2Tr26, intjKxE2i, intSVKLry, {from: accounts[1]});
//		const bytes32BucduJC = await VatlwOLfl5.file.call(bytegERqxaR, bytezm9I3T8, uintqCHGvXx, {from: accounts[5]});
//		await VatlwOLfl5.note.call({from: accounts[4]});

		await expect(VatlwOLfl5.frob.call(byteScJPjSc, addressBOaehaJ, addressLzMFd3Y, addressP2Tr26, intjKxE2i, intSVKLry, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlOOxCHu = await Vat.new({from: accounts[5]});
		const uintayd9N4W = BigInt("779")
		const addresshd4IcNP = accounts[0]
		const addressvtXgiSp = accounts[5]
		const addressR52JY8b = accounts[3]
//		const addressYZIjWT = await VatlOOxCHu.move.call(addressvtXgiSp, addresshd4IcNP, uintayd9N4W, {from: "0x0000000000000000000000000000000000000001"});
//		await VatlOOxCHu.note.call({from: accounts[5]});
//		const addressOGmsJWy = await VatlOOxCHu.deny.call(addressR52JY8b, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatlOOxCHu.move.call(addressvtXgiSp, addresshd4IcNP, uintayd9N4W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatMTfP5cN = await Vat.new({from: accounts[4]});
		const addressU2pW9l8 = accounts[5]
		const int6Ufd91 = BigInt("-1175")
		const addressITa5uBb = "0x0000000000000000000000000000000000000001"
		const bytekjIKDES = "0x1206030819021908030a071619060e1d1e071f1e1717090815140403060b2006"
		const addressMzhIZ1 = await VatMTfP5cN.hope.call(addressU2pW9l8, {from: accounts[5]});
//		const bytes32cMmOinY = await VatMTfP5cN.slip.call(bytekjIKDES, addressITa5uBb, int6Ufd91, {from: accounts[4]});

		await expect(VatMTfP5cN.slip.call(bytekjIKDES, addressITa5uBb, int6Ufd91, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatGsBvdkQ = await Vat.new({from: accounts[1]});
		const addressAeHGAxk = accounts[0]
		const addressuZbxTU0 = accounts[4]
		const uintaDth0Ht = BigInt("832")
		const addressArCi3e8 = accounts[1]
		const addressbHXtIhr = accounts[0]
		const uintlUhmAAD = BigInt("1286")
		const addressVcYRmeg = accounts[4]
		const addressytGOWSx = accounts[3]
		const addressimu8au4 = await VatGsBvdkQ.deny.call(addressAeHGAxk, {from: accounts[1]});
		const addressnwkaeqk = await VatGsBvdkQ.hope.call(addressuZbxTU0, {from: accounts[5]});
//		const addresskHKK4Js = await VatGsBvdkQ.move.call(addressbHXtIhr, addressArCi3e8, uintaDth0Ht, {from: accounts[4]});
//		const addressF41ya0l = await VatGsBvdkQ.suck.call(addressytGOWSx, addressVcYRmeg, uintlUhmAAD, {from: accounts[1]});

		await expect(VatGsBvdkQ.move.call(addressbHXtIhr, addressArCi3e8, uintaDth0Ht, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRXvB3k4 = await Vat.new({from: accounts[2]});
		const uintXLk2ydR = BigInt("1505")
		const byteyOMgDq = "0x021d080a01191d130f191b1a1101050a08051c1a1b0f161b100b12011e0c0413"
		const byte7rqbhq = "0x0a151201080216131611170f1b0f0f1d0d1504140a0d060a061e0e1f1d130e0f"
		const uintXQoDXY9 = BigInt("1524")
		const addressAEJGiA = accounts[1]
		const addresscFTaJ79 = accounts[2]
		const byteWeh0QGN = "0x0706042003010d09091a11010f0a03060d01141b111b0f1e1c0512011811130f"
//		const bytes32fbMj1K = await VatRXvB3k4.file.call(byte7rqbhq, byteyOMgDq, uintXLk2ydR, {from: accounts[2]});
//		const bytes32ooXxk3z = await VatRXvB3k4.flux.call(byteWeh0QGN, addresscFTaJ79, addressAEJGiA, uintXQoDXY9, {from: accounts[1]});

		await expect(VatRXvB3k4.file.call(byte7rqbhq, byteyOMgDq, uintXLk2ydR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatolm7Pvi = await Vat.new({from: accounts[2]});
		const uintnS10sEv = BigInt("1387")
		const addressepKIJnk = accounts[2]
		const addressSbsLr5U = accounts[0]
		const intiAdvUlT = BigInt("1528")
		const addressw4o11y5 = accounts[5]
		const byteaBYccYo = "0x170e0a050d0d141a151c02111706070c091d0c011a12180d0a081f111b131d08"
		const addressTdRyYzs = await Vatolm7Pvi.suck.call(addressSbsLr5U, addressepKIJnk, uintnS10sEv, {from: accounts[2]});
//		await Vatolm7Pvi.note.call({from: accounts[0]});
//		await Vatolm7Pvi.note.call({from: accounts[5]});
//		const bytes32lnIpW6l = await Vatolm7Pvi.slip.call(byteaBYccYo, addressw4o11y5, intiAdvUlT, {from: accounts[1]});

		await expect(Vatolm7Pvi.note.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRXvB3k4 = await Vat.new({from: accounts[2]});
		const byteTPqTUw2 = "0x17010a1d1f0a16150d10090c070004150e19011a131519052015070a0e091f04"
		const uintj5uK0Ml = BigInt("1542")
		const addressQZwEGU = accounts[1]
		const addressOJ6zuGb = accounts[3]
		const bytebjeVwM = "0x0706042003010d09091a11010f0a03060d01141b111b0f1e1c0512011811130f"
		const bytes32rhwKOL5 = await VatRXvB3k4.init.call(byteTPqTUw2, {from: accounts[2]});
//		const bytes32ooXxk3z = await VatRXvB3k4.flux.call(bytebjeVwM, addressOJ6zuGb, addressQZwEGU, uintj5uK0Ml, {from: accounts[1]});

		await expect(VatRXvB3k4.flux.call(bytebjeVwM, addressOJ6zuGb, addressQZwEGU, uintj5uK0Ml, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRXvB3k4 = await Vat.new({from: accounts[2]});
		const uintuhIrLfe = BigInt("1524")
		const addressNnZG5fg = accounts[1]
		const addressIrvc8xE = accounts[3]
		const byterzocUJD = "0x0706042003010d09091a11010f0a03060d01141b111b0f1e1c0512fffffffe1811130f"
		const intr9wTA5m = BigInt("-628")
		const intZbZW5Xp = BigInt("-350")
		const addressP71SA1E = accounts[3]
		const address9FkMTG = accounts[4]
		const bytexUCVUtw = "0x1f110c110e00050a1a130d160b0f2013130a1e1511021e18070f101f090f0e18"
		const uintp3nDI4Q = BigInt("1892")
		const addressWX7bUpk = accounts[1]
		const addressSCVAZH = accounts[4]
		const intf3J9YE4 = BigInt("-1983")
		const intEZld8aK = BigInt("-56")
		const addresshkgbEMV = accounts[2]
		const addressIbl7oIA = accounts[2]
		const addressxKjj484 = accounts[2]
		const bytegpBLWQW = "0x071407171209201b020917151b0f15051d19061b171e0e021004160d0e120c15"
//		const bytes32ooXxk3z = await VatRXvB3k4.flux.call(byterzocUJD, addressIrvc8xE, addressNnZG5fg, uintuhIrLfe, {from: accounts[1]});
//		const bytes32bJUNJfp = await VatRXvB3k4.fork.call(bytexUCVUtw, address9FkMTG, addressP71SA1E, intZbZW5Xp, intr9wTA5m, {from: accounts[1]});
//		const addressP4YjrDZ = await VatRXvB3k4.move.call(addressSCVAZH, addressWX7bUpk, uintp3nDI4Q, {from: accounts[3]});
//		const bytes32kavgTYP = await VatRXvB3k4.frob.call(bytegpBLWQW, addressxKjj484, addressIbl7oIA, addresshkgbEMV, intEZld8aK, intf3J9YE4, {from: accounts[2]});

		await expect(VatRXvB3k4.flux.call(byterzocUJD, addressIrvc8xE, addressNnZG5fg, uintuhIrLfe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRXvB3k4 = await Vat.new({from: accounts[2]});
		const intXFspP0f = BigInt("-459")
		const intxGlIym = BigInt("-613")
		const addressPguulj = accounts[1]
		const addressG9qoUm0 = accounts[1]
		const byteyVCTkEd = "0x0111121913110204151d040109011c011a09180c051f1a1e0812030504051e1e"
		const uintZostbHO = BigInt("689")
		const uintKJp2bGu = BigInt("1524")
		const addressYXTO740 = accounts[1]
		const addressU1wdmJd = accounts[3]
		const byteJooxtmR = "0x0106042003010d09091a11010f0a03060d01141b111b0f1e1c0512011811130f"
		const bytes32wcrIXA1 = await VatRXvB3k4.fork.call(byteyVCTkEd, addressG9qoUm0, addressPguulj, intxGlIym, intXFspP0f, {from: accounts[1]});
//		const uintwHhobQ = await VatRXvB3k4.heal.call(uintZostbHO, {from: accounts[2]});
//		const bytes32ooXxk3z = await VatRXvB3k4.flux.call(byteJooxtmR, addressU1wdmJd, addressYXTO740, uintKJp2bGu, {from: accounts[1]});

		await expect(VatRXvB3k4.heal.call(uintZostbHO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRXvB3k4 = await Vat.new({from: accounts[2]});
		const uint3YA5z6 = BigInt("1524")
		const addressjJZR3yg = accounts[1]
		const addressWcd1eb0 = accounts[3]
		const bytetwI5aFj = "0x0706042003010d09091a11010f0a03060d01141b111b0f1e1c0512ffffffff1811130f"
//		const bytes32ooXxk3z = await VatRXvB3k4.flux.call(bytetwI5aFj, addressWcd1eb0, addressjJZR3yg, uint3YA5z6, {from: accounts[1]});

		await expect(VatRXvB3k4.flux.call(bytetwI5aFj, addressWcd1eb0, addressjJZR3yg, uint3YA5z6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRXvB3k4 = await Vat.new({from: accounts[2]});
		const addressRrE3K0R = accounts[1]
		const uintROgo2h = BigInt("1524")
		const addressskL77TU = accounts[1]
		const addressMf4pf08 = accounts[4]
		const byteKYpS2tC = "0x0706042003010d09091a11010f0a03060d01141b111b0f1e1c0512011811130f"
		const addressoCBbJOU = accounts[4]
		const addressTVDSrb4 = await VatRXvB3k4.rely.call(addressRrE3K0R, {from: accounts[2]});
//		const bytes32ooXxk3z = await VatRXvB3k4.flux.call(byteKYpS2tC, addressMf4pf08, addressskL77TU, uintROgo2h, {from: accounts[1]});
//		const addressgATahwa = await VatRXvB3k4.hope.call(addressoCBbJOU, {from: accounts[3]});

		await expect(VatRXvB3k4.flux.call(byteKYpS2tC, addressMf4pf08, addressskL77TU, uintROgo2h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzwWoj2c = await Vat.new({from: accounts[0]});
		const intdcp3s7F = BigInt("399")
		const intzOK3D9W = BigInt("-1591")
		const addressNTjC2gq = accounts[2]
		const addressVNraKlY = accounts[0]
		const addressWcxqnP = accounts[0]
		const byteDhVTK3A = "0x0f0b03161f17060d0a120a1b070b1a06090c0c0514061f030506050118180408"
		const uintTR1cz0H = BigInt("1813")
		const bytejmj6G3j = "0x1c1a0309160719050f1a18141e10010e001f05200c0c1a1618150c111d05191f"
//		const bytes32Cp5y3LZ = await VatzwWoj2c.grab.call(byteDhVTK3A, addressWcxqnP, addressVNraKlY, addressNTjC2gq, intzOK3D9W, intdcp3s7F, {from: accounts[0]});
//		await VatzwWoj2c.cage.call({from: accounts[0]});
//		const bytes32Cudfprf = await VatzwWoj2c.file.call(bytejmj6G3j, uintTR1cz0H, {from: accounts[5]});

		await expect(VatzwWoj2c.grab.call(byteDhVTK3A, addressWcxqnP, addressVNraKlY, addressNTjC2gq, intzOK3D9W, intdcp3s7F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRXvB3k4 = await Vat.new({from: accounts[2]});
		const uintYKM3ti = BigInt("1524")
		const addressccUKqYJ = accounts[1]
		const addressga26WqB = accounts[3]
		const byte5gTxrd = "0x0706042003010d09091a11010f0a03060d01141b111b0f1e1c0512011811130f"
//		await VatRXvB3k4.cage.call({from: accounts[2]});
//		const bytes32ooXxk3z = await VatRXvB3k4.flux.call(byte5gTxrd, addressga26WqB, addressccUKqYJ, uintYKM3ti, {from: accounts[1]});

		await expect(VatRXvB3k4.cage.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRXvB3k4 = await Vat.new({from: accounts[2]});
		const uintbkuQGG3 = BigInt("1524")
		const addressVeNKTDD = accounts[1]
		const addressxhlYK2j = accounts[3]
		const byteBz332V6 = "0x0706042003010d09091a11fffffffe0f0a03060d01141b111b0f1e1c0512011811130f"
		const addressGz55PL = accounts[2]
//		const bytes32ooXxk3z = await VatRXvB3k4.flux.call(byteBz332V6, addressxhlYK2j, addressVeNKTDD, uintbkuQGG3, {from: accounts[1]});
//		const addressQ58bzs = await VatRXvB3k4.deny.call(addressGz55PL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatRXvB3k4.flux.call(byteBz332V6, addressxhlYK2j, addressVeNKTDD, uintbkuQGG3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRXvB3k4 = await Vat.new({from: accounts[2]});
		const intAVlkoK2 = BigInt("311")
		const inttlBvfOy = BigInt("1204")
		const addressme4FYlI = accounts[4]
		const addressisyVD3N = "0x0000000000000000000000000000000000000001"
		const addressITDRBws = accounts[3]
		const byte4rXIQX = "0x1b0a1314030002020509040e0c0d070e0d072003130800190d1f1b140414190e"
		const intaYZLhcf = BigInt("-223")
		const addresspqCNwuI = accounts[4]
		const byteYVW3b1k = "0x1e17200819060c161c2011050804001b1e1b0208161c1f161e081d1d0b070a08"
		const uintfyAIhy0 = BigInt("1524")
		const addressunWPlcC = accounts[2]
		const addressGkTRx1E = accounts[3]
		const byteUeGg60c = "0x0706042003010d09091a11010f0a03060d01141b111b0f1e1c0512011811130f"
//		const bytes32eOmNppY = await VatRXvB3k4.grab.call(byte4rXIQX, addressITDRBws, addressisyVD3N, addressme4FYlI, inttlBvfOy, intAVlkoK2, {from: accounts[2]});
//		const bytes32s86CR9H = await VatRXvB3k4.slip.call(byteYVW3b1k, addresspqCNwuI, intaYZLhcf, {from: accounts[1]});
//		const bytes32ooXxk3z = await VatRXvB3k4.flux.call(byteUeGg60c, addressGkTRx1E, addressunWPlcC, uintfyAIhy0, {from: accounts[1]});

		await expect(VatRXvB3k4.grab.call(byte4rXIQX, addressITDRBws, addressisyVD3N, addressme4FYlI, inttlBvfOy, intAVlkoK2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})