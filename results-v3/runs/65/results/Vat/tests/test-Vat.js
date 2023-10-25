const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatAVy7y6u = await Vat.new({from: accounts[1]});
		const uintIROmJwQ = BigInt("259")
		const addressgS9NHd0 = accounts[4]
		const addressLoAJBhQ = accounts[0]
		const intAnDNtxZ = BigInt("-1674")
		const intDq1Hq2 = BigInt("-795")
		const addressyModTGB = accounts[5]
		const addressEftSlTC = accounts[1]
		const bytef8kGmKc = "0x1a1300021d1c0c19041a1f0c16121a030d120a000b1211140e1d1717121c1218"
		const uintf8oC2Og = BigInt("1161")
		const byteNp95YWU = "0x0a151a19171c0d020a010a1a021e16081d10161a080c0c13140e1a140a1f1703"
		const addressn14wMow = accounts[1]
		const uintykkS9jX = await VatAVy7y6u.heal.call(uintIROmJwQ, {from: accounts[2]});
		const addressp1Ed5Ae = await VatAVy7y6u.deny.call(addressgS9NHd0, {from: accounts[2]});
		const addressCcc182G = await VatAVy7y6u.nope.call(addressLoAJBhQ, {from: accounts[3]});
		const bytes32m7orPkC = await VatAVy7y6u.fork.call(bytef8kGmKc, addressEftSlTC, addressyModTGB, intDq1Hq2, intAnDNtxZ, {from: accounts[5]});
		const bytes32Ad6AmRh = await VatAVy7y6u.file.call(byteNp95YWU, uintf8oC2Og, {from: accounts[1]});
		const addressgviXrF9 = await VatAVy7y6u.deny.call(addressn14wMow, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatAVy7y6u.heal.call(uintIROmJwQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatJok7OyN = await Vat.new({from: accounts[1]});
		const uintuwkXnyH = BigInt("1548")
		const addressLYIDi3m = accounts[4]
		const addressp3JOLAi = accounts[1]
		const bytel7l2Gc8 = "0x1d1a1f0c10070f0914160b1c18011210150214160b1817160705020d14190903"
		const addressy4w4iNA = await VatJok7OyN.suck.call(addressp3JOLAi, addressLYIDi3m, uintuwkXnyH, {from: accounts[0]});
		await VatJok7OyN.note.call({from: accounts[2]});
		const bytes32EdLrsdl = await VatJok7OyN.init.call(bytel7l2Gc8, {from: accounts[4]});

		await expect(VatJok7OyN.suck.call(addressp3JOLAi, addressLYIDi3m, uintuwkXnyH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrTM09cF = await Vat.new({from: accounts[1]});
		const uintg6FClZr = BigInt("279")
		const addressO1k7gYL = accounts[4]
		const addressgpWhhZ6 = "0x0000000000000000000000000000000000000001"
		const address8ZZKTG = "0x0000000000000000000000000000000000000001"
		const uintHH391DY = BigInt("812")
		const addressyWzJBRo = accounts[0]
		const addresspJ6Wt0U = accounts[1]
		const intADqYMlL = BigInt("-739")
		const addressbwCHxbd = "0x0000000000000000000000000000000000000001"
		const bytewlsLoQN = "0x151b1f0e050a0714030515051415031504020a0903140110150b20081e1b0104"
		const uintoAgcouK = BigInt("1636")
		const uintZ5IXrCZ = BigInt("1355")
		const addressQ5fr6IT = accounts[3]
		const addressPpYl3O = accounts[1]
		const addresslp35AtY = await VatrTM09cF.move.call(addressgpWhhZ6, addressO1k7gYL, uintg6FClZr, {from: accounts[0]});
		const addressDuGNUv4 = await VatrTM09cF.hope.call(address8ZZKTG, {from: accounts[0]});
		const addressePRD6KZ = await VatrTM09cF.move.call(addresspJ6Wt0U, addressyWzJBRo, uintHH391DY, {from: accounts[5]});
		const bytes32QMi6WC = await VatrTM09cF.slip.call(bytewlsLoQN, addressbwCHxbd, intADqYMlL, {from: accounts[1]});
		const uintVAAUZFK = await VatrTM09cF.heal.call(uintoAgcouK, {from: accounts[2]});
		const addresstOeMwQq = await VatrTM09cF.move.call(addressPpYl3O, addressQ5fr6IT, uintZ5IXrCZ, {from: accounts[0]});

		await expect(VatrTM09cF.move.call(addressgpWhhZ6, addressO1k7gYL, uintg6FClZr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const uintCYbCBSb = BigInt("639")
		const byteKLIGSK3 = "0x1e1a0c140b0f011d0d0c1a020104120a1a1b0f1f0614081a111d060d0a0f1716"
		const addressr4Aqr8r = accounts[5]
		const bytes32xfhMmAq = await VatNV1pyZ.file.call(byteKLIGSK3, uintCYbCBSb, {from: accounts[1]});
		const addressDqoY776 = await VatNV1pyZ.rely.call(addressr4Aqr8r, {from: accounts[0]});

		await expect(VatNV1pyZ.file.call(byteKLIGSK3, uintCYbCBSb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRplVWo0 = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspQGK6tL = "0x0000000000000000000000000000000000000001"
		const addressZskzMz2 = accounts[0]
		const addressxXeZPj8 = await VatRplVWo0.deny.call(addresspQGK6tL, {from: accounts[5]});
		const addressezB5snV = await VatRplVWo0.hope.call(addressZskzMz2, {from: accounts[5]});
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const addressvHqwtgl = accounts[2]
		const addressn6Gmcc7 = accounts[5]
		const addressabS9iaI = await VatNV1pyZ.hope.call(addressvHqwtgl, {from: accounts[5]});
		const addressDqoY776 = await VatNV1pyZ.rely.call(addressn6Gmcc7, {from: accounts[0]});

		await expect(VatNV1pyZ.rely.call(addressn6Gmcc7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const uintihnTnFC = BigInt("1099")
		const byteCJ6ZqR = "0x1b03101d0a0d1619151d091c200b201a0b081d1e18101f090f000518071a030b"
		const byteR6GtSsm = "0x020214101b1917161f17031d1b1810010f0116051313100605190a1e0d0a1c1d"
		const uintfmgl67R = BigInt("628")
		const byteab2lVXG = "0x011a040b080c101019010f1013020e0a181c1117080d1c130a1b1c1518031010"
		const uintGDzWEpN = BigInt("1062")
		const bytes32bzVb7F = await VatNV1pyZ.file.call(byteR6GtSsm, byteCJ6ZqR, uintihnTnFC, {from: accounts[4]});
		const bytes32xfhMmAq = await VatNV1pyZ.file.call(byteab2lVXG, uintfmgl67R, {from: accounts[1]});
		const uinth50vazB = await VatNV1pyZ.heal.call(uintGDzWEpN, {from: accounts[1]});

		await expect(VatNV1pyZ.file.call(byteR6GtSsm, byteCJ6ZqR, uintihnTnFC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const uintG8iixzA = BigInt("1533")
		const addressDdQncHE = accounts[3]
		const addressMBTRRHl = accounts[5]
		const bytemRI0p0m = "0x101b170b061c191c19061f1001130407100e111f1e1c171b0b010c0709190712"
		const bytes32JyDrlJM = await VatNV1pyZ.flux.call(bytemRI0p0m, addressMBTRRHl, addressDdQncHE, uintG8iixzA, {from: accounts[3]});

		await expect(VatNV1pyZ.flux.call(bytemRI0p0m, addressMBTRRHl, addressDdQncHE, uintG8iixzA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const addressAYSgJou = accounts[2]
		const uintJCX6TVP = BigInt("454")
		const uintO2UpeAC = BigInt("635")
		const bytef8uwUTT = "0x011a040b080c101019010f1013020e0a181c1117080d1c130a1b1c1518031010"
		const addressYMuMwit = await VatNV1pyZ.hope.call(addressAYSgJou, {from: accounts[1]});
		await VatNV1pyZ.note.call({from: accounts[1]});
		const uintWfQsH4k = await VatNV1pyZ.heal.call(uintJCX6TVP, {from: accounts[2]});
		const bytes32xfhMmAq = await VatNV1pyZ.file.call(bytef8uwUTT, uintO2UpeAC, {from: accounts[1]});

		await expect(VatNV1pyZ.note.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const intNeh5xA = BigInt("148")
		const intgyhOZ4w = BigInt("676")
		const addressKUgfWxY = accounts[4]
		const addressyhLA1hk = accounts[0]
		const addressnsqAk5t = accounts[1]
		const byteicW1L1m = "0x181b15081f201914071b001c121319021f06191f1013090d171e1919171e0208"
		const addressCMaK5by = accounts[2]
		const addressrLPg570 = accounts[5]
		const uintATy24XN = BigInt("470")
		const bytes32wAqiLP = await VatNV1pyZ.frob.call(byteicW1L1m, addressnsqAk5t, addressyhLA1hk, addressKUgfWxY, intgyhOZ4w, intNeh5xA, {from: accounts[0]});
		const addressYMuMwit = await VatNV1pyZ.hope.call(addressCMaK5by, {from: accounts[1]});
		const addressmhbTeEz = await VatNV1pyZ.rely.call(addressrLPg570, {from: "0x0000000000000000000000000000000000000001"});
		const uintWfQsH4k = await VatNV1pyZ.heal.call(uintATy24XN, {from: accounts[2]});

		await expect(VatNV1pyZ.frob.call(byteicW1L1m, addressnsqAk5t, addressyhLA1hk, addressKUgfWxY, intgyhOZ4w, intNeh5xA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatEVLdqb0 = await Vat.new({from: accounts[3]});
		const addressIpFoE3j = accounts[2]
		const intkDr6Lnn = BigInt("-42")
		const addressbP9CPpO = accounts[4]
		const byteKubxZb2 = "0x0b171719160e12140f09091b081c0f0904021b160b021c19140f0f090e03020b"
		const addressNWenE1 = accounts[0]
		const intodQi76 = BigInt("1601")
		const intcXyngZe = BigInt("1991")
		const addressqFVfJRs = accounts[3]
		const addressgHKpTA = accounts[3]
		const addressMJpZ2za = "0x0000000000000000000000000000000000000001"
		const byteM54q2HP = "0x0a1b07180c040c03010c000e140d0920011704090f0d11130c0c0a00021c141c"
		const addressbHQn7Vu = await VatEVLdqb0.nope.call(addressIpFoE3j, {from: accounts[1]});
		const bytes32RaRGYuG = await VatEVLdqb0.fold.call(byteKubxZb2, addressbP9CPpO, intkDr6Lnn, {from: accounts[4]});
		const addressYVX2RTt = await VatEVLdqb0.rely.call(addressNWenE1, {from: accounts[0]});
		const bytes32KFn4tw = await VatEVLdqb0.frob.call(byteM54q2HP, addressMJpZ2za, addressgHKpTA, addressqFVfJRs, intcXyngZe, intodQi76, {from: accounts[4]});

		await expect(VatEVLdqb0.fold.call(byteKubxZb2, addressbP9CPpO, intkDr6Lnn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrTM09cF = await Vat.new({from: accounts[1]});
		const addresslZ5RoQ6 = "0x0000000000000000000000000000000000000002"
		const intC98iNEt = BigInt("-40")
		const addressc2OWBg = accounts[0]
		const byteuq4oFW = "0x030704101d111e010b061f1311190609081e091e03021d1e070f181d12170915"
		const uintg4PXOUT = BigInt("848")
		const addressFjGdPHe = accounts[2]
		const addressT0FplPn = accounts[1]
		const bytepFLigCD = "0x1d18030b06180316020c1a061a070216001017191a041211071518011a081518"
		const addressDuGNUv4 = await VatrTM09cF.hope.call(addresslZ5RoQ6, {from: accounts[0]});
		const bytes32frnJW1w = await VatrTM09cF.slip.call(byteuq4oFW, addressc2OWBg, intC98iNEt, {from: accounts[1]});
		const bytes32vu7SEo9 = await VatrTM09cF.flux.call(bytepFLigCD, addressT0FplPn, addressFjGdPHe, uintg4PXOUT, {from: accounts[0]});

		await expect(VatrTM09cF.slip.call(byteuq4oFW, addressc2OWBg, intC98iNEt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const intuFs1R3o = BigInt("-630")
		const intC4aGYb = BigInt("611")
		const addressL6ImPMN = accounts[2]
		const addressxYp5b8 = accounts[1]
		const byteNA1lT1F = "0x190f1f1c1202110d0600170104061b02031e1318110d0a11101b08000e140203"
		const uintlI4pcVN = BigInt("1533")
		const addressZjYmfSb = accounts[3]
		const addressU6TLli = accounts[5]
		const byte070ZTd = "0x101b170b061c191c19061f1001130407100e111f1e1c171b0b010c0709190712"
		const bytes32S9SQsfI = await VatNV1pyZ.fork.call(byteNA1lT1F, addressxYp5b8, addressL6ImPMN, intC4aGYb, intuFs1R3o, {from: accounts[3]});
		const bytes32JyDrlJM = await VatNV1pyZ.flux.call(byte070ZTd, addressU6TLli, addressZjYmfSb, uintlI4pcVN, {from: accounts[3]});

		await expect(VatNV1pyZ.fork.call(byteNA1lT1F, addressxYp5b8, addressL6ImPMN, intC4aGYb, intuFs1R3o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrTM09cF = await Vat.new({from: accounts[1]});
		const intUfsTV3E = BigInt("1698")
		const intCPlsSV7 = BigInt("-1353")
		const addressmv0U1cR = accounts[5]
		const addressJ3bRwP = accounts[1]
		const byteB76b8Wy = "0x0c0507191e011f1e16191315161c05171f050d0a0a0c1d181e161e1f0f071116"
		const uintgktzlL = BigInt("848")
		const addressl5PYIoI = accounts[0]
		const addresswnnbmFp = accounts[2]
		const bytes32U1HkfXF = await VatrTM09cF.fork.call(byteB76b8Wy, addressJ3bRwP, addressmv0U1cR, intCPlsSV7, intUfsTV3E, {from: accounts[1]});
		const addressePRD6KZ = await VatrTM09cF.move.call(addresswnnbmFp, addressl5PYIoI, uintgktzlL, {from: accounts[5]});

		await expect(VatrTM09cF.fork.call(byteB76b8Wy, addressJ3bRwP, addressmv0U1cR, intCPlsSV7, intUfsTV3E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrTM09cF = await Vat.new({from: accounts[1]});
		const intydIWFiR = BigInt("-1455")
		const addressl07gbee = accounts[3]
		const byteMk0TGk = "0x031e010b09051e191f0719110b0f03151a0a1d00080f090f1808141f010b040f"
		const bytewuPXr4u = "0x0e06040d1d1106120c160317191b1a0a15010a01120019050e101d200405171a"
		const uintD22hqX = BigInt("812")
		const addressfDCuYA6 = accounts[1]
		const addressZPhcWqr = accounts[2]
		const bytes32KFW8cs8 = await VatrTM09cF.fold.call(byteMk0TGk, addressl07gbee, intydIWFiR, {from: accounts[1]});
		const bytes32cSL4av0 = await VatrTM09cF.init.call(bytewuPXr4u, {from: accounts[1]});
		const addressePRD6KZ = await VatrTM09cF.move.call(addressZPhcWqr, addressfDCuYA6, uintD22hqX, {from: accounts[5]});

		await expect(VatrTM09cF.fold.call(byteMk0TGk, addressl07gbee, intydIWFiR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrTM09cF = await Vat.new({from: accounts[1]});
		const addresspcmlYAN = "0x0000000000000000000000000000000000000002"
		const addressJu6nE8R = "0x0000000000000000000000000000000000000001"
		const intec1gRck = BigInt("-21")
		const addresssJJ7cR4 = accounts[0]
		const byte4HjuQ2 = "0x030704101d111e010b061f1311190609081e091e03021d1e070f181d12170915"
		const intEUjnh1P = BigInt("612")
		const intWBthMMf = BigInt("-868")
		const addressODg4iat = accounts[4]
		const addressW29tPwG = accounts[0]
		const addressjA6FjcG = accounts[3]
		const byteJCLcLQy = "0x110e0813060718011b101f1119071d101c1612040b07050b030101181413001d"
		const uintbjm2ieG = BigInt("848")
		const addressXrtUOm = accounts[2]
		const addresswnOnIBN = accounts[1]
		const bytevFkghl1 = "0x1d18030b06180316020c1a061a070216001017191a041211071518011a081518"
		const byteouruRH = "0x1e01180b1f1b07041d1416041c0816120b0c081f121a06020b180f050c0a0712"
		const addressDuGNUv4 = await VatrTM09cF.hope.call(addresspcmlYAN, {from: accounts[0]});
		const addressq6TY8f = await VatrTM09cF.deny.call(addressJu6nE8R, {from: accounts[1]});
		const bytes32frnJW1w = await VatrTM09cF.slip.call(byte4HjuQ2, addresssJJ7cR4, intec1gRck, {from: accounts[1]});
		const bytes32hl3g91 = await VatrTM09cF.grab.call(byteJCLcLQy, addressjA6FjcG, addressW29tPwG, addressODg4iat, intWBthMMf, intEUjnh1P, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32vu7SEo9 = await VatrTM09cF.flux.call(bytevFkghl1, addresswnOnIBN, addressXrtUOm, uintbjm2ieG, {from: accounts[0]});
		const bytes32WJUgnr = await VatrTM09cF.init.call(byteouruRH, {from: accounts[1]});

		await expect(VatrTM09cF.slip.call(byte4HjuQ2, addresssJJ7cR4, intec1gRck, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const addressHR0lbY3 = accounts[0]
		const uintyM7XWHO = BigInt("1533")
		const addresshycRuhC = accounts[3]
		const addressXPcZLt3 = accounts[5]
		const byteWhdQLxs = "0x101b170b061c191c19061f10fffffffe130407100e111f1e1c171b0b010c0709190712"
		const addressG4IQWE7 = await VatNV1pyZ.nope.call(addressHR0lbY3, {from: accounts[1]});
		const bytes32JyDrlJM = await VatNV1pyZ.flux.call(byteWhdQLxs, addressXPcZLt3, addresshycRuhC, uintyM7XWHO, {from: accounts[3]});

		await expect(VatNV1pyZ.flux.call(byteWhdQLxs, addressXPcZLt3, addresshycRuhC, uintyM7XWHO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const uintgHuJUhG = BigInt("658")
		const addressmXPNqBY = accounts[4]
		const addressp8ydd8 = accounts[2]
		const uinttTS14Q3 = BigInt("639")
		const byteDS9p77z = "0x011a040b080c101019010f1013020e0a181d1117080d1c130a1b1c1518031010"
		const addressXRKIDd1 = await VatNV1pyZ.move.call(addressp8ydd8, addressmXPNqBY, uintgHuJUhG, {from: accounts[2]});
		const bytes32xfhMmAq = await VatNV1pyZ.file.call(byteDS9p77z, uinttTS14Q3, {from: accounts[1]});

		await expect(VatNV1pyZ.move.call(addressp8ydd8, addressmXPNqBY, uintgHuJUhG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const byteRnBdzxM = "0x00111816081b05160603160404091c160716081e0114141a1a190502020d0e1a"
		const uintndyZwK = BigInt("1539")
		const addressYWtdMi1 = accounts[3]
		const address8HA8A3 = accounts[5]
		const bytehrsxuUJ = "0x101b170b061c191c19061f1001130407100e111f1e1c171b0b010c0709190712"
		const bytes32RVTje0W = await VatNV1pyZ.init.call(byteRnBdzxM, {from: accounts[4]});
		const bytes32JyDrlJM = await VatNV1pyZ.flux.call(bytehrsxuUJ, address8HA8A3, addressYWtdMi1, uintndyZwK, {from: accounts[3]});

		await expect(VatNV1pyZ.flux.call(bytehrsxuUJ, address8HA8A3, addressYWtdMi1, uintndyZwK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const intqQJZcK = BigInt("-1504")
		const inteW9ygQ = BigInt("2022")
		const addressBTwvHry = "0x0000000000000000000000000000000000000001"
		const addresstNeA9pJ = "0x0000000000000000000000000000000000000001"
		const byteDIKcvwK = "0x09181b1b17090b0c201b080707040b060307011c0801190f04190c11131e1007"
		const intX3NjjO = BigInt("-1595")
		const addressKLmXLMa = accounts[1]
		const byteG5Shm4g = "0x0f1207030d09160f061a04171503140114121115161b1c161002120f1f041700"
		const uintd2LmorY = BigInt("460")
		await VatNV1pyZ.cage.call({from: accounts[4]});
		const bytes32ir596Fq = await VatNV1pyZ.fork.call(byteDIKcvwK, addresstNeA9pJ, addressBTwvHry, inteW9ygQ, intqQJZcK, {from: accounts[1]});
		const bytes32xQSyNTg = await VatNV1pyZ.slip.call(byteG5Shm4g, addressKLmXLMa, intX3NjjO, {from: accounts[2]});
		const uintWfQsH4k = await VatNV1pyZ.heal.call(uintd2LmorY, {from: accounts[2]});

		await expect(VatNV1pyZ.cage.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const addressFB2HDer = accounts[3]
		const uintnX3kXe0 = BigInt("1533")
		const addressZ2lVO8x = accounts[4]
		const addressQisdxiV = accounts[5]
		const byteeWkIh6 = "0x101b170b061c191c19061f1001130407100e111f1e1c171b0b010c0709190712"
		const addressj1sLnal = await VatNV1pyZ.rely.call(addressFB2HDer, {from: accounts[4]});
		const bytes32JyDrlJM = await VatNV1pyZ.flux.call(byteeWkIh6, addressQisdxiV, addressZ2lVO8x, uintnX3kXe0, {from: accounts[3]});

		await expect(VatNV1pyZ.flux.call(byteeWkIh6, addressQisdxiV, addressZ2lVO8x, uintnX3kXe0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatJz0q5TS = await Vat.new({from: accounts[1]});
		const uint7w2qHu = BigInt("162")
		const addressycFtdVA = accounts[1]
		const addressGP0WKrt = accounts[0]
		const uintcGWZR0 = BigInt("1864")
		const uintDkaC2Pc = BigInt("1848")
		const addressyGWYe4r = accounts[1]
		const addresson8KJuf = accounts[2]
		const intIoCiX91 = BigInt("964")
		const intdnUyYQa = BigInt("-547")
		const addressxbVLOEa = accounts[5]
		const addressDk2ooaF = accounts[3]
		const byteqfeWipo = "0x0402130616181a1c1403131a0818120b0602020419011307011c0a021b080c01"
		const addresszRATOGt = await VatJz0q5TS.suck.call(addressGP0WKrt, addressycFtdVA, uint7w2qHu, {from: accounts[1]});
		const uintZuGPHek = await VatJz0q5TS.heal.call(uintcGWZR0, {from: accounts[3]});
		const addressQikVCw = await VatJz0q5TS.suck.call(addresson8KJuf, addressyGWYe4r, uintDkaC2Pc, {from: accounts[3]});
		const bytes32niGfkzp = await VatJz0q5TS.fork.call(byteqfeWipo, addressDk2ooaF, addressxbVLOEa, intdnUyYQa, intIoCiX91, {from: accounts[0]});

		await expect(VatJz0q5TS.heal.call(uintcGWZR0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const intZqtAynH = BigInt("832")
		const intILqmQc8 = BigInt("16")
		const addressRDouOlA = accounts[5]
		const addressPVqd1wt = accounts[3]
		const addresshuNM7yo = accounts[4]
		const bytey5XSnNp = "0x121b0e07001c11061c141f031c12151607040f021320161f060519061c1d0b03"
		const uintVtK1vsR = BigInt("439")
		const bytes32Xi5ZDYN = await VatNV1pyZ.grab.call(bytey5XSnNp, addresshuNM7yo, addressPVqd1wt, addressRDouOlA, intILqmQc8, intZqtAynH, {from: accounts[4]});
		const uintWfQsH4k = await VatNV1pyZ.heal.call(uintVtK1vsR, {from: accounts[2]});

		await expect(VatNV1pyZ.grab.call(bytey5XSnNp, addresshuNM7yo, addressPVqd1wt, addressRDouOlA, intILqmQc8, intZqtAynH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const uintV3Lyzd = BigInt("96")
		const addressl7Rj53E = accounts[2]
		const addresse7op4sU = accounts[4]
		const bytennVhjJZ = "0x1b16121d040d0f09141b1a00110e0a1517051c1605181f1c110e1c14161c0010"
		const uintPgpvnNb = BigInt("1533")
		const addressGpcAVxB = accounts[3]
		const addressean8Nwm = accounts[6]
		const byteE9PFPpO = "0x101b170b061c191c19061f1001130407100e111f1e1c171b0b010c0709190712"
		const bytes32l3C4byZ = await VatNV1pyZ.flux.call(bytennVhjJZ, addresse7op4sU, addressl7Rj53E, uintV3Lyzd, {from: accounts[4]});
		const bytes32JyDrlJM = await VatNV1pyZ.flux.call(byteE9PFPpO, addressean8Nwm, addressGpcAVxB, uintPgpvnNb, {from: accounts[3]});

		await expect(VatNV1pyZ.flux.call(bytennVhjJZ, addresse7op4sU, addressl7Rj53E, uintV3Lyzd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatNV1pyZ = await Vat.new({from: accounts[4]});
		const intwktPrr = BigInt("-1183")
		const intM9OCOeg = BigInt("-1229")
		const addressXSXiu1J = accounts[2]
		const addresscrKxgeC = accounts[2]
		const bytext42lD = "0x121a080a0e0103121b1c0b031c03020c1c20151a1a08051018081b1810071c01"
		const intInWNpQh = BigInt("1945")
		const intr5TwMV8 = BigInt("231")
		const addressZqQD0e = accounts[2]
		const addressP4qRrbB = accounts[0]
		const addressbUKOMq = accounts[4]
		const byte702GX7 = "0x170e1d0d180c140107151806130f1c1b07162000201f101c12151804150d0f16"
		const uintWPncm4E = BigInt("480")
		const bytes32iGWLVqk = await VatNV1pyZ.fork.call(bytext42lD, addresscrKxgeC, addressXSXiu1J, intM9OCOeg, intwktPrr, {from: accounts[4]});
		const bytes32Q1ZJOnI = await VatNV1pyZ.frob.call(byte702GX7, addressbUKOMq, addressP4qRrbB, addressZqQD0e, intr5TwMV8, intInWNpQh, {from: accounts[3]});
		const uintWfQsH4k = await VatNV1pyZ.heal.call(uintWPncm4E, {from: accounts[2]});

		await expect(VatNV1pyZ.fork.call(bytext42lD, addresscrKxgeC, addressXSXiu1J, intM9OCOeg, intwktPrr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})