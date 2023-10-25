const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatS4PL6Fr = await Vat.new({from: accounts[1]});
		const uintR8hL6T = BigInt("151")
		const byte38zI4Z = "0x1e0d0100140a151d130f111b08041508141207011e0f001714201002140c180e"
		const addresspt9f3eI = accounts[5]
		const bytes32FF1UWi0 = await VatS4PL6Fr.file.call(byte38zI4Z, uintR8hL6T, {from: accounts[4]});
		const addressful4r6O = await VatS4PL6Fr.rely.call(addresspt9f3eI, {from: accounts[1]});

		await expect(VatS4PL6Fr.file.call(byte38zI4Z, uintR8hL6T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatD9iPQqA = await Vat.new({from: accounts[1]});
		const addressL6wISHf = "0x0000000000000000000000000000000000000001"
		const uintOhXXhsK = BigInt("39")
		const uintK6A6jun = BigInt("792")
		const addressFspGthR = accounts[0]
		const addressXctmbSx = accounts[2]
		const addressjaCZnxc = await VatD9iPQqA.rely.call(addressL6wISHf, {from: accounts[1]});
		const uintI20jQGv = await VatD9iPQqA.heal.call(uintOhXXhsK, {from: accounts[2]});
		await VatD9iPQqA.auth.call({from: accounts[5]});
		const addressN83nLVz = await VatD9iPQqA.move.call(addressXctmbSx, addressFspGthR, uintK6A6jun, {from: accounts[0]});
		await VatD9iPQqA.cage.call({from: accounts[0]});

		await expect(VatD9iPQqA.heal.call(uintOhXXhsK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFuRTs04 = await Vat.new({from: accounts[4]});
		const addressTB8mmIr = "0x0000000000000000000000000000000000000001"
		const addresslQ3QTHE = accounts[3]
		const intgQ3YYv2 = BigInt("-25")
		const addressmBBmYpx = accounts[1]
		const byteoE2tsw6 = "0x0308061b1708041112191b0010181a1d0917031704071b081a1a040b0f0d1516"
		const addressDeapjlc = await VatFuRTs04.hope.call(addressTB8mmIr, {from: accounts[4]});
		const addressrrIzeS0 = await VatFuRTs04.nope.call(addresslQ3QTHE, {from: accounts[0]});
		const bytes324N5kej = await VatFuRTs04.fold.call(byteoE2tsw6, addressmBBmYpx, intgQ3YYv2, {from: accounts[3]});

		await expect(VatFuRTs04.fold.call(byteoE2tsw6, addressmBBmYpx, intgQ3YYv2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatzer9e8o = await Vat.new({from: accounts[2]});
		const uintI7InRBJ = BigInt("298")
		const addresszLG5RsN = accounts[4]
		const addressjpTN1Cs = accounts[2]
		const byteTZSbE3I = "0x1f1d071a131a14201e1d171a1915020511171e010d1f1d121c15011b07090c1c"
		const addressRduTJqA = accounts[1]
		const addressi7s1xtJ = "0x0000000000000000000000000000000000000001"
		const intOKUvWN8 = BigInt("2033")
		const addressgBQC9Z4 = accounts[1]
		const byte96MMkt = "0x1b171c20070314100c020915030d1316170d0b1d131c091719141c1e0a15070e"
		const intMfGz8qh = BigInt("-1969")
		const addresshOFjBEW = accounts[3]
		const byteAmG2cLO = "0x0202180108191b1809000601030f101c1801040802061f161616081e0d170515"
		const bytes32MSXMvrQ = await Vatzer9e8o.flux.call(byteTZSbE3I, addressjpTN1Cs, addresszLG5RsN, uintI7InRBJ, {from: accounts[4]});
		const addressmtvot82 = await Vatzer9e8o.hope.call(addressRduTJqA, {from: accounts[4]});
		await Vatzer9e8o.note.call({from: accounts[4]});
		const addresshh8marx = await Vatzer9e8o.nope.call(addressi7s1xtJ, {from: accounts[0]});
		const bytes32RN6zNnN = await Vatzer9e8o.slip.call(byte96MMkt, addressgBQC9Z4, intOKUvWN8, {from: accounts[4]});
		const bytes32OocoPZm = await Vatzer9e8o.slip.call(byteAmG2cLO, addresshOFjBEW, intMfGz8qh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatzer9e8o.flux.call(byteTZSbE3I, addressjpTN1Cs, addresszLG5RsN, uintI7InRBJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatS4PL6Fr = await Vat.new({from: accounts[1]});
		const addressSZI1jEC = accounts[5]
		const uintUYghGlf = BigInt("776")
		const addressAETmUgY = accounts[2]
		const addressjpAH6KY = accounts[1]
		const intWrzl2I7 = BigInt("709")
		const intYKmsfKs = BigInt("-390")
		const addressvg6eU2J = accounts[3]
		const addressie7qDxa = accounts[5]
		const byteW0fiJvH = "0x12130413071a160308201a0f110c0a12000007031f030c0e0c1b191b08001919"
		const addressful4r6O = await VatS4PL6Fr.rely.call(addressSZI1jEC, {from: accounts[1]});
		const addressz4iDvh8 = await VatS4PL6Fr.move.call(addressjpAH6KY, addressAETmUgY, uintUYghGlf, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32L3Wmft = await VatS4PL6Fr.fork.call(byteW0fiJvH, addressie7qDxa, addressvg6eU2J, intYKmsfKs, intWrzl2I7, {from: accounts[5]});

		await expect(VatS4PL6Fr.move.call(addressjpAH6KY, addressAETmUgY, uintUYghGlf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uintCaogkfX = BigInt("1992")
		const addressXujGayy = accounts[1]
		const addressTTvgxSZ = accounts[5]
		const byteRuQyt8e = "0x1b0b191f041414121e101d0e12151614101d1a16150e140a0a141613180f0d02"
		const intZlm1MHn = BigInt("491")
		const intH12J3vF = BigInt("-1236")
		const addresslh7ueCm = accounts[3]
		const addressjVfZXGV = accounts[1]
		const addressdbyObZO = accounts[5]
		const bytehV0imhd = "0x1502171d19171d071205001811041e0320141e000c18121e0700110a040e1701"
		const bytes32fy5fuJd = await VatWYJIVD1.flux.call(byteRuQyt8e, addressTTvgxSZ, addressXujGayy, uintCaogkfX, {from: accounts[5]});
		const bytes32R469ldF = await VatWYJIVD1.grab.call(bytehV0imhd, addressdbyObZO, addressjVfZXGV, addresslh7ueCm, intH12J3vF, intZlm1MHn, {from: accounts[0]});

		await expect(VatWYJIVD1.flux.call(byteRuQyt8e, addressTTvgxSZ, addressXujGayy, uintCaogkfX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatI5Wvrz0 = await Vat.new({from: accounts[4]});
		const uintA7tryXt = BigInt("297")
		const byteUxVhtuC = "0x20050603100413090f0c12010217100d070a1b101e0301110d0818120d1b0b1d"
		const byteX1nIn1a = "0x19120610010d1802141510081c0109120c061d051f0d1d1110111f03130f071e"
		const uintTn0ug6x = BigInt("1106")
		const uintFdAEJWJ = BigInt("1155")
		const bytehI402ow = "0x071d19051a1b1509131709140b1418070b1f1f120703160a0d101e121e050c19"
		await VatI5Wvrz0.auth.call({from: accounts[2]});
		const bytes32aUSms8s = await VatI5Wvrz0.file.call(byteX1nIn1a, byteUxVhtuC, uintA7tryXt, {from: accounts[5]});
		const uintPjTZ86o = await VatI5Wvrz0.heal.call(uintTn0ug6x, {from: accounts[3]});
		const bytes32CJhCmLC = await VatI5Wvrz0.file.call(bytehI402ow, uintFdAEJWJ, {from: accounts[4]});
		await VatI5Wvrz0.note.call({from: accounts[3]});

		await expect(VatI5Wvrz0.auth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const intw2ZG5no = BigInt("-1739")
		const intUovicHJ = BigInt("-1010")
		const addressGgzFhmY = accounts[3]
		const addresslRZsgj = accounts[3]
		const byteObeJlAM = "0x0207021c1d1f1d1215111f1d13031d030f0d0e051f1f02040a17100a1b160b12"
		const uintJ4RaXE = BigInt("1573")
		const byteI2N3yo = "0x0a0e1a1117060a0301201a10050d060b1b1e1311201c1301010d120f060a0e0f"
		const byteLumtgOS = "0x1b1c1005040b01170a191913021213100303150210111a1e1518020c18070508"
		const uintQAZYit8 = BigInt("1990")
		const addressmUZOV6f = accounts[1]
		const addresseFPGF3s = accounts[5]
		const bytequgVVWe = "0x1b0b191f041414121e101d0e12151614101d1a16150e140a0a141613180f0d02"
		const intfAaVMYV = BigInt("491")
		const intODwQDjn = BigInt("-1236")
		const addressfAXgp0d = accounts[3]
		const addressHhw1oU4 = accounts[1]
		const addressw52GHW8 = accounts[5]
		const bytewTHXXE = "0x1502171d19171d071205001811041e0320141e000c18121e0700110a040e1701"
		const bytes32ojRUa9h = await VatWYJIVD1.fork.call(byteObeJlAM, addresslRZsgj, addressGgzFhmY, intUovicHJ, intw2ZG5no, {from: accounts[5]});
		const bytes32FYf6M6 = await VatWYJIVD1.file.call(byteLumtgOS, byteI2N3yo, uintJ4RaXE, {from: accounts[5]});
		const bytes32fy5fuJd = await VatWYJIVD1.flux.call(bytequgVVWe, addresseFPGF3s, addressmUZOV6f, uintQAZYit8, {from: accounts[5]});
		const bytes32R469ldF = await VatWYJIVD1.grab.call(bytewTHXXE, addressw52GHW8, addressHhw1oU4, addressfAXgp0d, intODwQDjn, intfAaVMYV, {from: accounts[0]});

		await expect(VatWYJIVD1.fork.call(byteObeJlAM, addresslRZsgj, addressGgzFhmY, intUovicHJ, intw2ZG5no, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uint04lsrN = BigInt("1573")
		const bytenf8uCwX = "0x0a0e1a1117060a0301201a10050d060b1b1e1311201c1301010d120f060a0e0f"
		const byteg5R4glD = "0x1b1c1005040b01170a191913021213100303150210111a1e1518020c18070508"
		const uintSG0X5Eu = BigInt("1990")
		const addressGYDcOI8 = accounts[1]
		const addressAL7NjRL = accounts[5]
		const byteirit8PL = "0x1b0b191f041414121e101d0e12151614101d1a16150e140a0a141613180f0d02"
		const intj90VQ5P = BigInt("491")
		const intyZAcVFh = BigInt("1643")
		const addressuUcgFsJ = accounts[3]
		const addressA1mdvEj = accounts[1]
		const addressHxXzY07 = accounts[5]
		const byteZJqqobL = "0x1502171d19171d071205001811041e0320141e000c18121e0700110a040e1701"
		const bytes32FYf6M6 = await VatWYJIVD1.file.call(byteg5R4glD, bytenf8uCwX, uint04lsrN, {from: accounts[5]});
		const bytes32fy5fuJd = await VatWYJIVD1.flux.call(byteirit8PL, addressAL7NjRL, addressGYDcOI8, uintSG0X5Eu, {from: accounts[5]});
		const bytes32R469ldF = await VatWYJIVD1.grab.call(byteZJqqobL, addressHxXzY07, addressA1mdvEj, addressuUcgFsJ, intyZAcVFh, intj90VQ5P, {from: accounts[0]});

		await expect(VatWYJIVD1.file.call(byteg5R4glD, bytenf8uCwX, uint04lsrN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWWBnA1E = await Vat.new({from: accounts[1]});
		const addressTolyjSB = accounts[2]
		const intmL5zWoF = BigInt("-1676")
		const intt8RAFGU = BigInt("-615")
		const addressYRXVHa2 = accounts[4]
		const addressWNKjLVu = accounts[5]
		const addressKBnLIq = accounts[4]
		const byteBKCn40P = "0x18050e1c1c061117091308100e1a18150f0410131b0e0415021b1c0a14071405"
		const uintv4gBPB = BigInt("956")
		const byteDYrBZIs = "0x08121e090218020e150e191f1615080b080f140e070313021d13070118021713"
		const byteHMvofLl = "0x0a0c170b1b0d0819081d091c1a1807020905121509101c0a1d1a1b091c021d0d"
		const addressood9kHe = await VatWWBnA1E.hope.call(addressTolyjSB, {from: accounts[2]});
		const bytes32Bj6u6Wg = await VatWWBnA1E.frob.call(byteBKCn40P, addressKBnLIq, addressWNKjLVu, addressYRXVHa2, intt8RAFGU, intmL5zWoF, {from: accounts[1]});
		const bytes32a1TYOK0 = await VatWWBnA1E.file.call(byteHMvofLl, byteDYrBZIs, uintv4gBPB, {from: accounts[4]});

		await expect(VatWWBnA1E.frob.call(byteBKCn40P, addressKBnLIq, addressWNKjLVu, addressYRXVHa2, intt8RAFGU, intmL5zWoF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfdWonoY = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const intXQCIE0 = BigInt("510")
		const addressHB3VYqh = accounts[3]
		const bytei4Myvbj = "0x0d0901181f150a10151d1500030e160f151d0511100c0304171a0319051e0911"
		const intFJATHMJ = BigInt("1624")
		const intoT0fkbY = BigInt("-759")
		const addressfJpvykW = accounts[2]
		const addressPnLzC0M = accounts[5]
		const addressUy1zDG5 = "0x0000000000000000000000000000000000000001"
		const byteeCDPnYA = "0x0d0d0309121f0a1102081d080812150f0d0f0b1c03031d1c0d09081215091612"
		const uinteTxE94Q = BigInt("271")
		const byteO43iYTM = "0x0a07090f040a13061f1f131b09151d0c0f1418070915071917130d14100d1005"
		const bytes9CVPSI = "0x0610170b171e06101d0619040613120906181f0d0415130d05001c081a101907"
		const uintQ8rMzqJ = BigInt("1567")
		const bytece4JWro = "0x130a010e09150102020e0b1f01000b111d1b1413081a12150e0f0807090c0017"
		const bytes32kdvphra = await VatfdWonoY.fold.call(bytei4Myvbj, addressHB3VYqh, intXQCIE0, {from: accounts[2]});
		const bytes32KmQDMqN = await VatfdWonoY.grab.call(byteeCDPnYA, addressUy1zDG5, addressPnLzC0M, addressfJpvykW, intoT0fkbY, intFJATHMJ, {from: accounts[1]});
		const bytes32s5No0Xg = await VatfdWonoY.file.call(bytes9CVPSI, byteO43iYTM, uinteTxE94Q, {from: accounts[4]});
		const bytes32HyZNjY6 = await VatfdWonoY.file.call(bytece4JWro, uintQ8rMzqJ, {from: accounts[5]});
		await VatfdWonoY.auth.call({from: accounts[2]});
	});

	it('test for Vat', async () => {
		const VatS4PL6Fr = await Vat.new({from: accounts[1]});
		const byteqx5S7zJ = "0x110608100c0c16031b0f0e0407040715060719030c040c01031807140d1a060b"
		const uint1evIiH = BigInt("776")
		const addressDw1eZMU = accounts[4]
		const addressTBSX82i = accounts[1]
		const uintbEMivUX = BigInt("720")
		const intCld5X4h = BigInt("709")
		const intyI81dnQ = BigInt("-390")
		const addresstwi7hKU = accounts[3]
		const addressLEpndm = accounts[5]
		const byteYmAYrbZ = "0x12130413071a160308201a0f110c0a12000007031f030c0e0c1b191b08001919"
		const bytes32S4B0NgR = await VatS4PL6Fr.init.call(byteqx5S7zJ, {from: accounts[1]});
		const addressz4iDvh8 = await VatS4PL6Fr.move.call(addressTBSX82i, addressDw1eZMU, uint1evIiH, {from: "0x0000000000000000000000000000000000000001"});
		const uinthcimu46 = await VatS4PL6Fr.heal.call(uintbEMivUX, {from: accounts[1]});
		const bytes32L3Wmft = await VatS4PL6Fr.fork.call(byteYmAYrbZ, addressLEpndm, addresstwi7hKU, intyI81dnQ, intCld5X4h, {from: accounts[5]});

		await expect(VatS4PL6Fr.move.call(addressTBSX82i, addressDw1eZMU, uint1evIiH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatS4PL6Fr = await Vat.new({from: accounts[1]});
		const intcFMfISv = BigInt("3")
		const address07FiuF = accounts[5]
		const bytedB4atRa = "0x1609010a1a131b1c141b0d1606091404160f1c191f1719150002081f12030408"
		const uintYu3hXMF = BigInt("776")
		const addressvgir00K = accounts[4]
		const addressjYDz9Tv = accounts[1]
		const addressoyT7vts = accounts[1]
		const bytes32oP4kdh = await VatS4PL6Fr.fold.call(bytedB4atRa, address07FiuF, intcFMfISv, {from: accounts[1]});
		const addressz4iDvh8 = await VatS4PL6Fr.move.call(addressjYDz9Tv, addressvgir00K, uintYu3hXMF, {from: "0x0000000000000000000000000000000000000001"});
		const addressNb2kOrY = await VatS4PL6Fr.nope.call(addressoyT7vts, {from: accounts[1]});

		await expect(VatS4PL6Fr.move.call(addressjYDz9Tv, addressvgir00K, uintYu3hXMF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatacrMUdM = await Vat.new({from: accounts[0]});
		const intqxGQWXm = BigInt("-1940")
		const addressDhZWTN8 = accounts[1]
		const byteo40Ew9 = "0x0604161b070813040a001f0c1f08101201080f190d1c0b191a12181c18021618"
		const intXPv4YA = BigInt("1082")
		const intfwlyvv2 = BigInt("-867")
		const addressUD9Prb = accounts[4]
		const addressN89S72W = accounts[2]
		const addressBe06DwC = accounts[2]
		const byteOL9vrwN = "0x04011d171c171708132018010a0b1a1c071d0d1104181514081d0a10041b1d12"
		const bytes32T5XyJ6V = await VatacrMUdM.slip.call(byteo40Ew9, addressDhZWTN8, intqxGQWXm, {from: accounts[0]});
		const bytes32Ak9Nw6U = await VatacrMUdM.grab.call(byteOL9vrwN, addressBe06DwC, addressN89S72W, addressUD9Prb, intfwlyvv2, intXPv4YA, {from: accounts[3]});
		await VatacrMUdM.cage.call({from: accounts[0]});

		await expect(VatacrMUdM.slip.call(byteo40Ew9, addressDhZWTN8, intqxGQWXm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const intVtqlvFn = BigInt("-820")
		const intEeDI4T3 = BigInt("1593")
		const addressVJIflk9 = accounts[0]
		const addresshm1lumw = accounts[4]
		const addressi6SUuCs = accounts[4]
		const byte6wG0jU = "0x051d0a0c170b090818190e1e1a0814080401131e15061e0e03151a080b0d1d0f"
		const uintjkn950c = BigInt("56")
		const addressUpa4DRb = accounts[2]
		const addressjw98J0M = accounts[1]
		const uintXKDruPK = BigInt("1573")
		const bytexra61Y = "0x0a0e1a1117060a0301201a10050d060b1b1e1311201c1303010d120f060a0e0f"
		const byteOutFqZU = "0x1b1c1005040b01170a191913021213100303150210111a1e1518020c18070508"
		const bytes32rYrRblT = await VatWYJIVD1.grab.call(byte6wG0jU, addressi6SUuCs, addresshm1lumw, addressVJIflk9, intEeDI4T3, intVtqlvFn, {from: accounts[5]});
		const addressGKvE8BD = await VatWYJIVD1.suck.call(addressjw98J0M, addressUpa4DRb, uintjkn950c, {from: accounts[2]});
		const bytes32FYf6M6 = await VatWYJIVD1.file.call(byteOutFqZU, bytexra61Y, uintXKDruPK, {from: accounts[5]});

		await expect(VatWYJIVD1.grab.call(byte6wG0jU, addressi6SUuCs, addresshm1lumw, addressVJIflk9, intEeDI4T3, intVtqlvFn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrsLpAkt = await Vat.new({from: accounts[4]});
		const uintFtG1NmN = BigInt("1888")
		const addresszuBJq9o = accounts[3]
		const addressZpBjOVP = accounts[1]
		const addresszuHdGfu = accounts[1]
		const intZDVuOH = BigInt("219")
		const addressCDzZ8gQ = accounts[2]
		const bytegY1zaSz = "0x0d191719121613130d0c0d0b0e1a0d0e0b1e1e1f16150f0716120d1901081a04"
		const addressEx3Zjwa = await VatrsLpAkt.move.call(addressZpBjOVP, addresszuBJq9o, uintFtG1NmN, {from: accounts[1]});
		const addressA3wsoWF = await VatrsLpAkt.deny.call(addresszuHdGfu, {from: accounts[4]});
		const bytes32VEOgAIL = await VatrsLpAkt.slip.call(bytegY1zaSz, addressCDzZ8gQ, intZDVuOH, {from: accounts[4]});

		await expect(VatrsLpAkt.move.call(addressZpBjOVP, addresszuBJq9o, uintFtG1NmN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uintA8Ey8ej = BigInt("1573")
		const byteqtDSQKz = "0x0a0e1a1117060a0301201a10050d060b1b1e1311201c1303010d120f060a0e0f"
		const byteVgCNSXw = "0x1b1c1005040b01170a1919130212131003ffffffff150210111a1e1518020c18070508"
		const bytes32FYf6M6 = await VatWYJIVD1.file.call(byteVgCNSXw, byteqtDSQKz, uintA8Ey8ej, {from: accounts[5]});

		await expect(VatWYJIVD1.file.call(byteVgCNSXw, byteqtDSQKz, uintA8Ey8ej, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uintrS4RNGa = BigInt("804")
		const addressSGjgxO = accounts[2]
		const addressBGvQSrC = accounts[2]
		const uintCnCAm6 = BigInt("1945")
		const addressiTAyR8O = accounts[1]
		const addressO3jAnBQ = accounts[5]
		const byteHfaTm3B = "0x1b0b191f041414121e101d0e12151614101d1a16150e140a0a141613180f0d02"
		const addressl813zx = await VatWYJIVD1.suck.call(addressBGvQSrC, addressSGjgxO, uintrS4RNGa, {from: accounts[5]});
		const bytes32fy5fuJd = await VatWYJIVD1.flux.call(byteHfaTm3B, addressO3jAnBQ, addressiTAyR8O, uintCnCAm6, {from: accounts[5]});

		await expect(VatWYJIVD1.flux.call(byteHfaTm3B, addressO3jAnBQ, addressiTAyR8O, uintCnCAm6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uintshYDztW = BigInt("1573")
		const bytezfS8pwj = "0x0a0e1a1117060a03fffffffc201a10050d060b1b1e1311201c1303010d120f060a0e0f"
		const byteGoks6KI = "0x1b1c1005040b01170a191913021213100303150210111a1e1518020c18070508"
		const bytes32FYf6M6 = await VatWYJIVD1.file.call(byteGoks6KI, bytezfS8pwj, uintshYDztW, {from: accounts[5]});

		await expect(VatWYJIVD1.file.call(byteGoks6KI, bytezfS8pwj, uintshYDztW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatr266L74 = await Vat.new({from: accounts[2]});
		const byteP92UOat = "0x18ffffffff0d1b1212060f1d1b021d051b171f150213040315190b090f110e120a1609"
		const intsqlyEbb = BigInt("2018")
		const intl49zSvi = BigInt("-393")
		const addresshniPai = accounts[2]
		const addresstZ3HvxN = accounts[4]
		const addresszTTX39s = accounts[0]
		const byteDZiaM9v = "0x1a090015081b1e20050d071101181111070a1107091a1f0f0b0c1e1202101205"
		const uintEUbJlNC = BigInt("718")
		const uintGRWSJJT = BigInt("959")
		const addressw6nU96 = accounts[1]
		const addressZ8cgnuB = accounts[3]
		const bytes32soac2pV = await Vatr266L74.init.call(byteP92UOat, {from: accounts[2]});
		const bytes32AOCJtdU = await Vatr266L74.frob.call(byteDZiaM9v, addresszTTX39s, addresstZ3HvxN, addresshniPai, intl49zSvi, intsqlyEbb, {from: accounts[4]});
		const uints9EUEF9 = await Vatr266L74.heal.call(uintEUbJlNC, {from: accounts[1]});
		const addressCSBoppL = await Vatr266L74.move.call(addressZ8cgnuB, addressw6nU96, uintGRWSJJT, {from: accounts[2]});

		await expect(Vatr266L74.init.call(byteP92UOat, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uintsUxsbzy = BigInt("1992")
		const addressHlzPrbe = accounts[1]
		const addressDiWeDrm = accounts[5]
		const byteA4VFtXq = "0x1b0b191f041414121e101d0e12151614101d1a16150e140a0a141613180f0d02"
		await VatWYJIVD1.cage.call({from: accounts[5]});
		const bytes32fy5fuJd = await VatWYJIVD1.flux.call(byteA4VFtXq, addressDiWeDrm, addressHlzPrbe, uintsUxsbzy, {from: accounts[5]});

		await expect(VatWYJIVD1.cage.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uintyaJQyTK = BigInt("1573")
		const byteAZFNjQU = "0x0a0e1a1117060a0301201a10050d060b1b1e1311201c1303fffffffe0d120f060a0e0f"
		const bytekLkGZd = "0x1b1c1005040b01170a191913021213100303150210111a1e1518020c18070508"
		const bytes32FYf6M6 = await VatWYJIVD1.file.call(bytekLkGZd, byteAZFNjQU, uintyaJQyTK, {from: accounts[5]});

		await expect(VatWYJIVD1.file.call(bytekLkGZd, byteAZFNjQU, uintyaJQyTK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uintfVcoghX = BigInt("1573")
		const byteTHF2vwR = "0x0a0e1a1117060a03fffffffd201a10050d060b1b1e1311201c1303010d120f060a0e0f"
		const bytek7TPX0 = "0x1b1c1005040b01170a191913021213100303150210111a1e1518020c18070508"
		const intkYyeOg7 = BigInt("-1929")
		const addressqUQtIPY = accounts[3]
		const byteC6izV50 = "0x0d14140c0e1e0613121d1a071e0f1b0e1e021c010d08021a03151d0d17110a03"
		const intVYLEZek = BigInt("-91")
		const intucihleg = BigInt("476")
		const addressl8Og05t = accounts[4]
		const addressHx9jcjs = accounts[0]
		const addressOKSaKFc = accounts[3]
		const byteYupd5N = "0x1a18181409060a081e0c13181e18040a101e040c0a1f1c12091f1a071014080f"
		const bytes32FYf6M6 = await VatWYJIVD1.file.call(bytek7TPX0, byteTHF2vwR, uintfVcoghX, {from: accounts[5]});
		const bytes32Y03pg1p = await VatWYJIVD1.fold.call(byteC6izV50, addressqUQtIPY, intkYyeOg7, {from: accounts[3]});
		const bytes32Gjl9uy9 = await VatWYJIVD1.grab.call(byteYupd5N, addressOKSaKFc, addressHx9jcjs, addressl8Og05t, intucihleg, intVYLEZek, {from: accounts[3]});

		await expect(VatWYJIVD1.file.call(bytek7TPX0, byteTHF2vwR, uintfVcoghX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatacrMUdM = await Vat.new({from: accounts[0]});
		const addresspCIUlaw = accounts[3]
		const addressWZi4Ajn = "0x0000000000000000000000000000000000000001"
		const intTTkcKx5 = BigInt("-1423")
		const intbQVar20 = BigInt("276")
		const addressEJIKiy7 = accounts[3]
		const addressHdDFMuB = accounts[0]
		const addresspoPqtVh = accounts[2]
		const byteQGEJaz0 = "0x081c1d12040c100a071b111b0c10121b1304100e161408170104001a07190e1d"
		const addressMG8Y5af = await VatacrMUdM.hope.call(addresspCIUlaw, {from: accounts[3]});
		const addressZeRFs0E = await VatacrMUdM.deny.call(addressWZi4Ajn, {from: accounts[0]});
		const bytes32GUd1oQB = await VatacrMUdM.frob.call(byteQGEJaz0, addresspoPqtVh, addressHdDFMuB, addressEJIKiy7, intbQVar20, intTTkcKx5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatacrMUdM.frob.call(byteQGEJaz0, addresspoPqtVh, addressHdDFMuB, addressEJIKiy7, intbQVar20, intTTkcKx5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uintHzkNRI = BigInt("1573")
		const byteiNlGkmo = "0x0a0e1a1117060a0301201a10050d060b1b1e1311201c1303010d120f060a0e0f"
		const byteFG5k04S = "0x1b1c1005040bfffffffd170a191913021213100303150210111a1e1518020c18070508"
		const bytes32FYf6M6 = await VatWYJIVD1.file.call(byteFG5k04S, byteiNlGkmo, uintHzkNRI, {from: accounts[5]});

		await expect(VatWYJIVD1.file.call(byteFG5k04S, byteiNlGkmo, uintHzkNRI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uintIBPur4h = BigInt("1573")
		const byte54gxhY = "0x0a0e1a1117060a0301201a10050d060b1b1e1311201c13ffffffff010d120f060a0e0f"
		const bytedlFNNu = "0x1b1c1005040b01170a191913021213100303150210111a1e1518020c18070508"
		const bytes32FYf6M6 = await VatWYJIVD1.file.call(bytedlFNNu, byte54gxhY, uintIBPur4h, {from: accounts[5]});

		await expect(VatWYJIVD1.file.call(bytedlFNNu, byte54gxhY, uintIBPur4h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWYJIVD1 = await Vat.new({from: accounts[5]});
		const uintFG3MjJD = BigInt("1573")
		const byteoZDDr2x = "0x0a0e1a1117060a0301201a10050d060b1b1e1311201c1303010d120f060a0e0f"
		const byteSfOhm6 = "0x1b1c1005040b01170a191913021213100303150210111a1e1518ffffffff0c18070508"
		const bytes32FYf6M6 = await VatWYJIVD1.file.call(byteSfOhm6, byteoZDDr2x, uintFG3MjJD, {from: accounts[5]});

		await expect(VatWYJIVD1.file.call(byteSfOhm6, byteoZDDr2x, uintFG3MjJD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})