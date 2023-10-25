const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatK65xf7M = await Vat.new({from: accounts[0]});
		const uintRqfIGAV = BigInt("968")
		const byteabLo29j = "0x1a061b1f0a150305170d1d1f0405040a020812170f150c08081b0d171d170904"
		const intNbxpqbv = BigInt("1814")
		const intVBZSnCy = BigInt("466")
		const addressKJtKz0a = accounts[4]
		const addressEcN54tp = "0x0000000000000000000000000000000000000001"
		const byteKROh3r6 = "0x031a1f1d0e12091908130d0306180a090e13041715161f2019091c18030d0001"
		const intHFELGb2 = BigInt("1669")
		const addressVhAl7hp = accounts[1]
		const bytepwa1BT0 = "0x1d1a0206071a030c0a0912070f050a0b1e1c18110a0b0f0319071d02040a051e"
		const intGdlArAH = BigInt("-552")
		const intZ72Fz8R = BigInt("-1221")
		const addressJ0Di8T = accounts[3]
		const addresscT20F4s = accounts[3]
		const addressiFgC04 = accounts[2]
		const byteB1ksPO = "0x1b1918191c101606101d010c121a1119180e091f1205161a101a1b0004080f0f"
//		const bytes32qQxGMo6 = await VatK65xf7M.file.call(byteabLo29j, uintRqfIGAV, {from: accounts[2]});
//		const bytes32zrfwCa = await VatK65xf7M.fork.call(byteKROh3r6, addressEcN54tp, addressKJtKz0a, intVBZSnCy, intNbxpqbv, {from: accounts[1]});
//		const bytes32LoGbOGf = await VatK65xf7M.fold.call(bytepwa1BT0, addressVhAl7hp, intHFELGb2, {from: accounts[5]});
//		const bytes32OM2EbGR = await VatK65xf7M.frob.call(byteB1ksPO, addressiFgC04, addresscT20F4s, addressJ0Di8T, intZ72Fz8R, intGdlArAH, {from: accounts[3]});

		await expect(VatK65xf7M.file.call(byteabLo29j, uintRqfIGAV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatyGcXhv0 = await Vat.new({from: accounts[2]});
		const uintgq8t67 = BigInt("746")
		const addressyAV950j = accounts[4]
		const addressXArf7xz = "0x0000000000000000000000000000000000000001"
		const addresssUgAzxf = accounts[4]
		const bytePtgEgO6 = "0x14041b0e0b070d1c01000f061a200805161c190601131f060d1c041d1e180309"
//		const addressWz6aM4m = await VatyGcXhv0.move.call(addressXArf7xz, addressyAV950j, uintgq8t67, {from: accounts[3]});
//		const addresseo4zDdv = await VatyGcXhv0.deny.call(addresssUgAzxf, {from: accounts[2]});
//		const bytes32YA5kxKj = await VatyGcXhv0.init.call(bytePtgEgO6, {from: accounts[3]});

		await expect(VatyGcXhv0.move.call(addressXArf7xz, addressyAV950j, uintgq8t67, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatO4eocfS = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const intrfpJYM7 = BigInt("135")
		const intb9PHg7 = BigInt("-1436")
		const addressymaJoAS = accounts[5]
		const addressyOY4Edw = accounts[0]
		const addressbevkN3T = accounts[0]
		const byteXNkcEOY = "0x0b01160f0b1f182019040408101a0212050b16161b18060c0c1e15061c0d1c01"
		await VatO4eocfS.cage.call({from: accounts[0]});
		const bytes32Ta884t = await VatO4eocfS.grab.call(byteXNkcEOY, addressbevkN3T, addressyOY4Edw, addressymaJoAS, intb9PHg7, intrfpJYM7, {from: accounts[1]});
	});

	it('test for Vat', async () => {
		const Vat7zBKcV = await Vat.new({from: accounts[4]});
		const addressbpGLDBl = accounts[2]
		const uintnsKy0eS = BigInt("713")
		const uintNz2xP7g = BigInt("604")
		const addressNNlywO5 = accounts[2]
		const addressO9KjZjY = accounts[2]
//		await Vat7zBKcV.note.call({from: accounts[1]});
//		const addressBmzU5vd = await Vat7zBKcV.rely.call(addressbpGLDBl, {from: "0x0000000000000000000000000000000000000001"});
//		const uintojDdHeO = await Vat7zBKcV.heal.call(uintnsKy0eS, {from: accounts[1]});
//		const addresspgf6iON = await Vat7zBKcV.move.call(addressO9KjZjY, addressNNlywO5, uintNz2xP7g, {from: accounts[5]});

		await expect(Vat7zBKcV.note.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatxQeJhnf = await Vat.new({from: accounts[5]});
		const uintxcL2Ov0 = BigInt("1041")
		const addresskJWy81S = accounts[4]
		const addressot5MpE4 = accounts[0]
		const bytectMRHeD = "0x031c06091319170309011f011208180a10071e11020814190c08111a020c1813"
		const uintzvaizhd = BigInt("883")
		const addressaY2Gs3F = accounts[4]
		const addressDgRdAWG = "0x0000000000000000000000000000000000000001"
		const bytew428Rtr = "0x1311160d04021c0c051e0b18080e0208161f1e02140208120f001a051c040c08"
		const addressmSr50tI = accounts[0]
		const uintwKTbtm2 = BigInt("1777")
//		const addressMqly4P = await VatxQeJhnf.suck.call(addressot5MpE4, addresskJWy81S, uintxcL2Ov0, {from: accounts[2]});
//		const bytes32rZXrGMZ = await VatxQeJhnf.init.call(bytectMRHeD, {from: accounts[5]});
//		const bytes32VBmtWDw = await VatxQeJhnf.flux.call(bytew428Rtr, addressDgRdAWG, addressaY2Gs3F, uintzvaizhd, {from: accounts[3]});
//		const addressqSGe629 = await VatxQeJhnf.nope.call(addressmSr50tI, {from: accounts[4]});
//		await VatxQeJhnf.note.call({from: accounts[4]});
//		const uintnyGZV7q = await VatxQeJhnf.heal.call(uintwKTbtm2, {from: accounts[0]});

		await expect(VatxQeJhnf.suck.call(addressot5MpE4, addresskJWy81S, uintxcL2Ov0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatwrNvfdT = await Vat.new({from: accounts[3]});
		const uintIPYEXZz = BigInt("227")
		const addressJ5Y3LzO = accounts[3]
		const addressCa9P4t = accounts[3]
		const addresskMDpLZr = accounts[1]
		const uintaTTeuQT = BigInt("163")
		const byteQnIkRKX = "0x1f050a0b0a1e1c05130504001d0b1e16171907121c170c1c1a0a070a201c0e19"
		const byteVn6bBOQ = "0x070314110507191f0b09081e1d0413071007011a090a090608140a0b1008010a"
		const intr26i0J = BigInt("1736")
		const addressMUxJBE = accounts[4]
		const bytecOYiVSA = "0x1a091f0b04130f051e071e0f15141e0202191f18090d1306110f06060a031806"
		const bytevzuU9Wm = "0x07091503181607150f120f041c1b071a1f101d04111d110e0f140e0505011c17"
		const addressZMHqWen = await VatwrNvfdT.suck.call(addressCa9P4t, addressJ5Y3LzO, uintIPYEXZz, {from: accounts[3]});
//		const addressLBEGapk = await VatwrNvfdT.deny.call(addresskMDpLZr, {from: accounts[5]});
//		const bytes32Oplubim = await VatwrNvfdT.file.call(byteVn6bBOQ, byteQnIkRKX, uintaTTeuQT, {from: accounts[0]});
//		const bytes32JBbTg7 = await VatwrNvfdT.slip.call(bytecOYiVSA, addressMUxJBE, intr26i0J, {from: accounts[3]});
//		const bytes32AnmwZy = await VatwrNvfdT.init.call(bytevzuU9Wm, {from: accounts[3]});

		await expect(VatwrNvfdT.deny.call(addresskMDpLZr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatqiKjdz7 = await Vat.new({from: accounts[4]});
		const addressK1H0y9Z = accounts[5]
		const addressTa1lrpD = accounts[3]
		const addressuu57DLp = accounts[4]
		const addressI9UDmay = accounts[0]
		const addressMPtl7hj = await VatqiKjdz7.hope.call(addressK1H0y9Z, {from: accounts[1]});
//		await VatqiKjdz7.note.call({from: accounts[3]});
//		const addressUgmsKlh = await VatqiKjdz7.hope.call(addressTa1lrpD, {from: accounts[1]});
//		const addresslR1hj0V = await VatqiKjdz7.nope.call(addressuu57DLp, {from: accounts[5]});
//		const addressRHFWak = await VatqiKjdz7.hope.call(addressI9UDmay, {from: accounts[5]});

		await expect(VatqiKjdz7.note.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrgBg8Az = await Vat.new({from: accounts[2]});
		const bytel2xPwX6 = "0x1b0117111d1905040b0f09121b160b0f0a1d09180b0f171e1c1a0a14081c0508"
		const uintZtmmNXQ = BigInt("1890")
		const byteDCLc1KL = "0x160d011e0b01010203011d07020609140a03101a061e0f1b1719171f00061301"
		const byteVAnnfss = "0x1f130f11131102080c180809120202010e0702161d180e091e08030b0b03010e"
		const bytes32BcFB1hB = await VatrgBg8Az.init.call(bytel2xPwX6, {from: accounts[2]});
//		const bytes32SuWRnoN = await VatrgBg8Az.file.call(byteVAnnfss, byteDCLc1KL, uintZtmmNXQ, {from: accounts[1]});
//		await VatrgBg8Az.note.call({from: accounts[5]});

		await expect(VatrgBg8Az.file.call(byteVAnnfss, byteDCLc1KL, uintZtmmNXQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatTvqzvOY = await Vat.new({from: accounts[4]});
		const uintwcEtOWx = BigInt("261")
		const addressOdGKlUq = "0x0000000000000000000000000000000000000001"
		const addressraiOY4N = accounts[3]
		const byterxfXWGk = "0x0e1d0f031410090d0e10001514180b07060716181509021a10041d190f170019"
		const uintQk586Hm = BigInt("1510")
		const addressNLzUHYc = accounts[4]
		const addresssUrLXJR = accounts[4]
		const intXYFHjxQ = BigInt("11")
		const intHPzCLNH = BigInt("488")
		const addresskeZPQJ = accounts[2]
		const addressqajgRbg = accounts[0]
		const addressW0cEhT = accounts[5]
		const byteSOp3ejk = "0x0511050213101d100d0c090d110b100f0d0909161d11070e090c17091917020a"
//		const bytes32MTW9z7p = await VatTvqzvOY.flux.call(byterxfXWGk, addressraiOY4N, addressOdGKlUq, uintwcEtOWx, {from: accounts[3]});
//		const addressinZi27K = await VatTvqzvOY.suck.call(addresssUrLXJR, addressNLzUHYc, uintQk586Hm, {from: accounts[0]});
//		const bytes32htgYHTp = await VatTvqzvOY.grab.call(byteSOp3ejk, addressW0cEhT, addressqajgRbg, addresskeZPQJ, intHPzCLNH, intXYFHjxQ, {from: accounts[4]});

		await expect(VatTvqzvOY.flux.call(byterxfXWGk, addressraiOY4N, addressOdGKlUq, uintwcEtOWx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatqiKjdz7 = await Vat.new({from: accounts[4]});
		const addresse7vp3qh = accounts[5]
		const addressHSPXxmB = accounts[3]
		const addressLaQiAcH = accounts[4]
		const addressy0RzgRK = accounts[0]
		const addressMPtl7hj = await VatqiKjdz7.hope.call(addresse7vp3qh, {from: accounts[1]});
		const addressUgmsKlh = await VatqiKjdz7.hope.call(addressHSPXxmB, {from: accounts[1]});
		const addresslR1hj0V = await VatqiKjdz7.nope.call(addressLaQiAcH, {from: accounts[5]});
		const addressRHFWak = await VatqiKjdz7.hope.call(addressy0RzgRK, {from: accounts[5]});
	});

	it('test for Vat', async () => {
		const VatV41J21 = await Vat.new({from: accounts[3]});
		const addresswR309fo = accounts[2]
		const addresssrZ6bQV = accounts[4]
		const bytepsOJR8R = "0x1a1b0f1f030a1f0f16081c0805111f101d090e121d04041d181519001704161d"
		const addressS5yvz1 = await VatV41J21.deny.call(addresswR309fo, {from: accounts[3]});
//		const addressjEuoIR2 = await VatV41J21.rely.call(addresssrZ6bQV, {from: accounts[1]});
//		const bytes32psHSprt = await VatV41J21.init.call(bytepsOJR8R, {from: accounts[2]});

		await expect(VatV41J21.rely.call(addresssrZ6bQV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatyGcXhv0 = await Vat.new({from: accounts[2]});
		const intW7ndNII = BigInt("-1205")
		const intAPUPVq8 = BigInt("-499")
		const addressXimAJ1i = accounts[1]
		const addresswqvdbu = "0x0000000000000000000000000000000000000001"
		const addressIk5TfZd = accounts[2]
		const byteE90UAfv = "0x0c070d1611100d1d1b140c0a0f1e111d060508101e1c0911080c010e1f040716"
		const uintEjRwC6Y = BigInt("746")
		const addressjTYeZdo = accounts[4]
		const addresseyA52Gj = "0x0000000000000000000000000000000000000001"
		const byteX6XVHz = "0x14041b0e0b070d1c01000f061a200805161c190601131f060d1c041d1e180309"
//		const bytes32Mx6nkZ = await VatyGcXhv0.frob.call(byteE90UAfv, addressIk5TfZd, addresswqvdbu, addressXimAJ1i, intAPUPVq8, intW7ndNII, {from: accounts[0]});
//		const addressWz6aM4m = await VatyGcXhv0.move.call(addresseyA52Gj, addressjTYeZdo, uintEjRwC6Y, {from: accounts[3]});
//		const bytes32YA5kxKj = await VatyGcXhv0.init.call(byteX6XVHz, {from: accounts[3]});

		await expect(VatyGcXhv0.frob.call(byteE90UAfv, addressIk5TfZd, addresswqvdbu, addressXimAJ1i, intAPUPVq8, intW7ndNII, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfIGpToh = await Vat.new({from: accounts[3]});
		const uintR3Mjgfj = BigInt("1714")
		const byteqYTv86T = "0x0b031a090c140e01100e0f191c031e0605060e111205060c19100e1a151d0a12"
		const byteEAKgt3A = "0x1a1f0812061d01011f021c130f121d0a15091f0f01100e111a1a201f09170013"
		const bytekreXt5I = "0x0c01020d151c1d10130c060802171419060f130c0b0a0d0718011c08070a0a06"
		const uintr30EF3 = BigInt("1737")
		const addressLJqF3LC = accounts[3]
		const addressi4RmijZ = accounts[1]
		const addressEehK1sU = accounts[2]
//		const bytes32PnuehA2 = await VatfIGpToh.file.call(byteEAKgt3A, byteqYTv86T, uintR3Mjgfj, {from: accounts[3]});
//		const bytes32tTkbPk = await VatfIGpToh.init.call(bytekreXt5I, {from: accounts[1]});
//		const address5EH4e1 = await VatfIGpToh.suck.call(addressi4RmijZ, addressLJqF3LC, uintr30EF3, {from: accounts[1]});
//		const addressGUn2Tmu = await VatfIGpToh.nope.call(addressEehK1sU, {from: accounts[3]});
//		await VatfIGpToh.note.call({from: accounts[4]});

		await expect(VatfIGpToh.file.call(byteEAKgt3A, byteqYTv86T, uintR3Mjgfj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatyGcXhv0 = await Vat.new({from: accounts[2]});
		const intnZXxJxi = BigInt("-1126")
		const addressquMwxl8 = "0x0000000000000000000000000000000000000001"
		const bytef3G2tlW = "0x071b1d1e101f08171b0712100c0a0e0101000a0c1f1b0507151a1e1e16090600"
		const uintEVTw5RJ = BigInt("1763")
		const addresseHVK3v8 = accounts[3]
		const addressXys1KGz = accounts[2]
		const uintvdvn4XN = BigInt("746")
		const addressBTOUP0E = accounts[5]
		const addresswgvxRWu = "0x0000000000000000000000000000000000000001"
//		const bytes32oOsZJJW = await VatyGcXhv0.slip.call(bytef3G2tlW, addressquMwxl8, intnZXxJxi, {from: accounts[2]});
//		const addressMGTnGIS = await VatyGcXhv0.suck.call(addressXys1KGz, addresseHVK3v8, uintEVTw5RJ, {from: accounts[0]});
//		const addressWz6aM4m = await VatyGcXhv0.move.call(addresswgvxRWu, addressBTOUP0E, uintvdvn4XN, {from: accounts[3]});

		await expect(VatyGcXhv0.slip.call(bytef3G2tlW, addressquMwxl8, intnZXxJxi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatyGcXhv0 = await Vat.new({from: accounts[2]});
		const intfvhU4Aj = BigInt("1672")
		const intPcWAwIm = BigInt("310")
		const addressLjGKZR = accounts[0]
		const addressOU1wpX7 = accounts[1]
		const bytezruaaYB = "0x1e160f1f0302121c0802050613110205020f141b1c01140d0f18010510191502"
		const uintciFBEqr = BigInt("609")
		const addressJCvJbCA = accounts[3]
		const addressMK7k6YG = accounts[2]
		const bytepoiTP8 = "0x1014110f0b020e091b171f100414130f1c090e0d1a180f120205141b130f1900"
		const byteFsomCjU = "0x08071907020e1d021f081d1e08071c1f09170f0f0f090d051612031220161d00"
		const uintnuwAKos = BigInt("1503")
		const addresspYbiQnD = accounts[1]
		const addresslWMno5p = accounts[3]
		const uintMUx0QM8 = BigInt("1763")
		const addressbQCCxc1 = accounts[3]
		const addressrKFZwLY = accounts[3]
		const uinthuQIcQ0 = BigInt("746")
		const addressZGqAY3i = accounts[5]
		const addressRXoY90x = "0x0000000000000000000000000000000000000001"
//		const bytes32Kyjg9ss = await VatyGcXhv0.fork.call(bytezruaaYB, addressOU1wpX7, addressLjGKZR, intPcWAwIm, intfvhU4Aj, {from: accounts[4]});
//		await VatyGcXhv0.cage.call({from: accounts[0]});
//		const bytes32zV7JtCP = await VatyGcXhv0.flux.call(bytepoiTP8, addressMK7k6YG, addressJCvJbCA, uintciFBEqr, {from: accounts[5]});
//		const bytes32QFjrGys = await VatyGcXhv0.init.call(byteFsomCjU, {from: accounts[3]});
//		const addressFv2F3ea = await VatyGcXhv0.move.call(addresslWMno5p, addresspYbiQnD, uintnuwAKos, {from: accounts[5]});
//		const addressMGTnGIS = await VatyGcXhv0.suck.call(addressrKFZwLY, addressbQCCxc1, uintMUx0QM8, {from: accounts[0]});
//		const addressWz6aM4m = await VatyGcXhv0.move.call(addressRXoY90x, addressZGqAY3i, uinthuQIcQ0, {from: accounts[3]});

		await expect(VatyGcXhv0.fork.call(bytezruaaYB, addressOU1wpX7, addressLjGKZR, intPcWAwIm, intfvhU4Aj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatyGcXhv0 = await Vat.new({from: accounts[2]});
		const intCBPg1ep = BigInt("-63")
		const intsJSjiAP = BigInt("-1951")
		const addressX4MuMZ = accounts[4]
		const address3L4z31 = accounts[1]
		const bytevMiVF0t = "0x17010e0e1b010b080e01121913171108170b13091d0d0a070a05050b140b0e0c"
		const intJjnnEAC = BigInt("-1126")
		const addressBEYzVei = "0x0000000000000000000000000000000000000001"
		const byteUYoZHE7 = "0x071b1d1e101f08171b0712100c0a0e0101000a0c1f1b0507151a1e1e16090600"
		const intlVYcfmj = BigInt("1076")
		const intC0c6F6 = BigInt("161")
		const addressM1XN1nB = accounts[5]
		const addressaRhlEZA = accounts[3]
		const addressDuXskSN = "0x0000000000000000000000000000000000000001"
		const byteJxieMTd = "0x1c02080b0c0d120910200a07101320021b03021c20110c1e051c0a1b12190920"
		const uintjzdc1F = BigInt("1763")
		const addressp0anVL6 = accounts[3]
		const addresslD3oJaU = accounts[2]
		const addressR8Uf0HI = accounts[3]
		const bytertfjFlp = "0x160819190b0b020d11020e0503091c181819061e031b05010303020b1b0a0a05"
//		const bytes32u3i7QSO = await VatyGcXhv0.fork.call(bytevMiVF0t, address3L4z31, addressX4MuMZ, intsJSjiAP, intCBPg1ep, {from: accounts[3]});
//		const bytes32oOsZJJW = await VatyGcXhv0.slip.call(byteUYoZHE7, addressBEYzVei, intJjnnEAC, {from: accounts[2]});
//		const bytes32F8S6zYi = await VatyGcXhv0.frob.call(byteJxieMTd, addressDuXskSN, addressaRhlEZA, addressM1XN1nB, intC0c6F6, intlVYcfmj, {from: accounts[1]});
//		const addressMGTnGIS = await VatyGcXhv0.suck.call(addresslD3oJaU, addressp0anVL6, uintjzdc1F, {from: accounts[0]});
//		const addressxPZ2vPa = await VatyGcXhv0.rely.call(addressR8Uf0HI, {from: accounts[2]});
//		const bytes32dt9tsNN = await VatyGcXhv0.init.call(bytertfjFlp, {from: accounts[1]});

		await expect(VatyGcXhv0.fork.call(bytevMiVF0t, address3L4z31, addressX4MuMZ, intsJSjiAP, intCBPg1ep, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatyGcXhv0 = await Vat.new({from: accounts[2]});
		const intk3KTjvl = BigInt("-1205")
		const intfx0Egjl = BigInt("-499")
		const addressQWTTYF4 = accounts[1]
		const addressyb4MrJ4 = "0x00000000000000000000000000000000000000-1"
		const addresst8xcBtC = accounts[2]
		const bytePRd7kIW = "0x0c070d1611100d1d1b140c0a0f1e111d060508101e1c0911080c010e1f040716"
//		const bytes32Mx6nkZ = await VatyGcXhv0.frob.call(bytePRd7kIW, addresst8xcBtC, addressyb4MrJ4, addressQWTTYF4, intfx0Egjl, intk3KTjvl, {from: accounts[0]});

		await expect(VatyGcXhv0.frob.call(bytePRd7kIW, addresst8xcBtC, addressyb4MrJ4, addressQWTTYF4, intfx0Egjl, intk3KTjvl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatyGcXhv0 = await Vat.new({from: accounts[2]});
		const addressorUVSyh = accounts[5]
		const intNr34jOC = BigInt("-1126")
		const addressiaEE1fR = "0x0000000000000000000000000000000000000001"
		const bytedXvksC = "0x071b1d1e101f08171b0712100c0a0e0101000a0c1f1b0507151a1e1e16090600"
		const uintLu5rjoa = BigInt("1763")
		const addressdaHd8Be = accounts[3]
		const addressd7sVEDu = accounts[2]
//		await VatyGcXhv0.cage.call({from: accounts[2]});
//		const addressAli9kM = await VatyGcXhv0.deny.call(addressorUVSyh, {from: accounts[2]});
//		const bytes32oOsZJJW = await VatyGcXhv0.slip.call(bytedXvksC, addressiaEE1fR, intNr34jOC, {from: accounts[2]});
//		const addressMGTnGIS = await VatyGcXhv0.suck.call(addressd7sVEDu, addressdaHd8Be, uintLu5rjoa, {from: accounts[0]});

		await expect(VatyGcXhv0.cage.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatMbjQk99 = await Vat.new({from: accounts[1]});
		const uintfE3Xrse = BigInt("207")
		const uintnD5ZGz0 = BigInt("1025")
		const addressmGUIHBX = accounts[0]
		const addressjxTzaE = accounts[3]
		const bytel85rmv = "0x101e121719010e061e0c1a0a041b1a1e011e101a1c11151a0a101f111412191d"
		const uinteh31Aoi = BigInt("479")
		const addressgWAdWP0 = accounts[3]
		const addressvx638rD = accounts[1]
//		const uintAHRvC3z = await VatMbjQk99.heal.call(uintfE3Xrse, {from: accounts[5]});
//		const addressRYuDE1w = await VatMbjQk99.move.call(addressjxTzaE, addressmGUIHBX, uintnD5ZGz0, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32Cn8AL9 = await VatMbjQk99.init.call(bytel85rmv, {from: accounts[3]});
//		const addressGOLnWD = await VatMbjQk99.suck.call(addressvx638rD, addressgWAdWP0, uinteh31Aoi, {from: accounts[4]});

		await expect(VatMbjQk99.heal.call(uintfE3Xrse, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatyGcXhv0 = await Vat.new({from: accounts[2]});
		const intSlboZdI = BigInt("-1205")
		const intKw8TtGd = BigInt("-499")
		const addressGuS4GMT = accounts[2]
		const addressbLWqEjx = "0x0000000000000000000000000000000000000000"
		const addressyLwbMDj = accounts[2]
		const byteuft7MWy = "0x0c070d1611100d1d1b140c0a0f1e111d060508101e1c0911080cffffffff0e1f040716"
//		const bytes32Mx6nkZ = await VatyGcXhv0.frob.call(byteuft7MWy, addressyLwbMDj, addressbLWqEjx, addressGuS4GMT, intKw8TtGd, intSlboZdI, {from: accounts[0]});

		await expect(VatyGcXhv0.frob.call(byteuft7MWy, addressyLwbMDj, addressbLWqEjx, addressGuS4GMT, intKw8TtGd, intSlboZdI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatKf4HHV0 = await Vat.new({from: accounts[0]});
		const uintB6RXgGd = BigInt("24")
		const addressTcgnFxh = accounts[2]
		const addressckKCu5F = accounts[3]
		const addressuXc0s3T = accounts[2]
//		const addresstoXH3jk = await VatKf4HHV0.move.call(addressckKCu5F, addressTcgnFxh, uintB6RXgGd, {from: accounts[3]});
//		const addressrkKR5mh = await VatKf4HHV0.nope.call(addressuXc0s3T, {from: accounts[4]});

		await expect(VatKf4HHV0.move.call(addressckKCu5F, addressTcgnFxh, uintB6RXgGd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfIGpToh = await Vat.new({from: accounts[3]});
		const intE8QLJ0N = BigInt("2041")
		const intjRWR8Pd = BigInt("1869")
		const addressBtMVBSa = accounts[0]
		const addressfW9YeXP = accounts[3]
		const addressq6E8aSi = accounts[1]
		const byte4QR71T = "0x080c1a14011d1f0819120403001617161c12091d1f020e051f031f0f09120f19"
		const uintc5qrGK1 = BigInt("1150")
		const bytepUF8qu1 = "0x051d1d0c0200050a04150a08111c011006201e08141a100a140b1e13140f0d1d"
		const bytebXTNL1D = "0x16071e180102050116051307061a150a020f0a170c0315130217170f1a090803"
		const uintohxvbV = BigInt("1714")
		const byteJZlHYc9 = "0x0b031a090c140e01100e0f191c031e0605060e111205060c19100e16151d0a12"
		const byteUVKRyPb = "0x1a200812061d01011f021c130f121d0a15091f0f01100e111a1a201f09170013"
//		const bytes32y1XM4X = await VatfIGpToh.grab.call(byte4QR71T, addressq6E8aSi, addressfW9YeXP, addressBtMVBSa, intjRWR8Pd, intE8QLJ0N, {from: accounts[3]});
//		const bytes32zmpDoOZ = await VatfIGpToh.file.call(bytebXTNL1D, bytepUF8qu1, uintc5qrGK1, {from: accounts[2]});
//		await VatfIGpToh.note.call({from: accounts[4]});
//		const bytes32PnuehA2 = await VatfIGpToh.file.call(byteUVKRyPb, byteJZlHYc9, uintohxvbV, {from: accounts[3]});

		await expect(VatfIGpToh.grab.call(byte4QR71T, addressq6E8aSi, addressfW9YeXP, addressBtMVBSa, intjRWR8Pd, intE8QLJ0N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfIGpToh = await Vat.new({from: accounts[3]});
		const intZe9gL39 = BigInt("-1994")
		const intey5yEHD = BigInt("-1228")
		const addressalmvfZ = accounts[2]
		const addressEfTLNej = accounts[2]
		const byteXeNtlA = "0x091206081c141d0e14151d1102110d1e091c0d0b03081c19150d1b131e09201d"
		const uintsZjrxMY = BigInt("1714")
		const byte8DPsjI = "0x0b031a090c140e01100e0f191c031e0605060e111205060c19100e1a151d0a12"
		const bytel0WAtXX = "0x1a200812061d01011f021c130f121d0a15091f0f01100e111a1a201f09170013"
		const uintgSc861N = BigInt("1608")
		const byteBbzOvcm = "0x161d0c1f1910171e0a1b15030b1a041f0a15041c02170d1f1a160f0e0d100d14"
		const bytes32t8jnna = await VatfIGpToh.fork.call(byteXeNtlA, addressEfTLNej, addressalmvfZ, intey5yEHD, intZe9gL39, {from: accounts[2]});
//		const bytes32PnuehA2 = await VatfIGpToh.file.call(bytel0WAtXX, byte8DPsjI, uintsZjrxMY, {from: accounts[3]});
//		const bytes32H5DSFne = await VatfIGpToh.file.call(byteBbzOvcm, uintgSc861N, {from: accounts[1]});

		await expect(VatfIGpToh.file.call(bytel0WAtXX, byte8DPsjI, uintsZjrxMY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfIGpToh = await Vat.new({from: accounts[3]});
		const intvFOrW9l = BigInt("1149")
		const addressk6wPCe = accounts[1]
		const byteotbuTUL = "0x04150f1d0d1f080d0a1c131b19081d1d0a0b11181005150e0b1d05080a16021b"
		const intefSY4qB = BigInt("-1994")
		const intHDAihAW = BigInt("-1230")
		const addressbQjDYZd = accounts[2]
		const addressgpkv1UQ = accounts[2]
		const bytefnnsgCW = "0x091206081c141d0e14151d1102110d1e091c0d0b03081c19150d1b131e09201d"
		const uintJ6DWft = BigInt("1714")
		const byteSq8f855 = "0x0d031a090c140e01100e0f191c031e0605060e111205060c19100e1a151d0a12"
		const byteinW8KWS = "0x1a200812061d01011f021c130f121d0a15091f0f01100e111a1a201f09170013"
		const bytes32dDgzJo = await VatfIGpToh.fold.call(byteotbuTUL, addressk6wPCe, intvFOrW9l, {from: accounts[3]});
		const bytes32t8jnna = await VatfIGpToh.fork.call(bytefnnsgCW, addressgpkv1UQ, addressbQjDYZd, intHDAihAW, intefSY4qB, {from: accounts[2]});
//		await VatfIGpToh.cage.call({from: accounts[0]});
//		const bytes32PnuehA2 = await VatfIGpToh.file.call(byteinW8KWS, byteSq8f855, uintJ6DWft, {from: accounts[3]});
//		await VatfIGpToh.cage.call({from: accounts[2]});

		await expect(VatfIGpToh.cage.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatyGcXhv0 = await Vat.new({from: accounts[2]});
		const uintsGxMAlO = BigInt("350")
		const addressbS8Vt5I = "0x0000000000000000000000000000000000000001"
		const addresskE4eRY7 = accounts[0]
		const addressDm1nCOl = accounts[3]
		const intYO2qN0f = BigInt("-1205")
		const intTLgdAVU = BigInt("-499")
		const addressmFJqHIA = accounts[2]
		const addressVOE27c = "0x0000000000000000000000000000000000000000"
		const addresshkGRAgZ = accounts[3]
		const bytevLCZObG = "0x0c070d1611100d1d1b140c0a0f1e111d060508101e1c0911080c010e1f040716"
		const addressLKVb9gZ = accounts[0]
		const uints7NqsUl = BigInt("1072")
		const addressweO7HiI = accounts[7]
		const addressW4NMIrn = accounts[1]
		const byteEuyBZV3 = "0x0d050811150b1c051a06141e0718021b00190c1e00061a06171c120213120c17"
		const byteqkm4avY = "0x1615091a011c1b07120615150d1b0e130b02071814070e011a050a061b12191e"
		const byteueHx3YV = "0x100a1c051b0b03061012061e1216091e0f17061f050806181f0d020907071e16"
		const intbODQ3IB = BigInt("320")
		const addresst92Set = accounts[0]
		const byteMRhBrqf = "0x0e1a0307201c1b1e060c0f051a021302020b120a06170b1a1d0f191417121d04"
		const addressVZoDC4l = await VatyGcXhv0.suck.call(addresskE4eRY7, addressbS8Vt5I, uintsGxMAlO, {from: accounts[2]});
		const addressKuCYmMx = await VatyGcXhv0.rely.call(addressDm1nCOl, {from: accounts[2]});
//		const bytes32Mx6nkZ = await VatyGcXhv0.frob.call(bytevLCZObG, addresshkGRAgZ, addressVOE27c, addressmFJqHIA, intTLgdAVU, intYO2qN0f, {from: accounts[0]});
//		const addressy4QtPu = await VatyGcXhv0.hope.call(addressLKVb9gZ, {from: accounts[1]});
//		const addressyu71JrP = await VatyGcXhv0.suck.call(addressW4NMIrn, addressweO7HiI, uints7NqsUl, {from: accounts[2]});
//		const bytes32uD2OKAt = await VatyGcXhv0.init.call(byteEuyBZV3, {from: accounts[3]});
//		const bytes32RdI6XwJ = await VatyGcXhv0.init.call(byteqkm4avY, {from: accounts[3]});
//		const bytes32DCiSl0 = await VatyGcXhv0.init.call(byteueHx3YV, {from: accounts[3]});
//		const bytes32eaZru4D = await VatyGcXhv0.slip.call(byteMRhBrqf, addresst92Set, intbODQ3IB, {from: accounts[1]});

		await expect(VatyGcXhv0.frob.call(bytevLCZObG, addresshkGRAgZ, addressVOE27c, addressmFJqHIA, intTLgdAVU, intYO2qN0f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfIGpToh = await Vat.new({from: accounts[3]});
		const uintul4cAru = BigInt("1714")
		const bytenIaXOZ2 = "0x0b031a090c140e01100e0f191c031e0605060e111205060c19100e1a151d0a12"
		const byteolC8LJt = "0x1a200812061d01ffffffff1f021c130f121d0a15091f0f01100e111a1a201f09170013"
//		const bytes32PnuehA2 = await VatfIGpToh.file.call(byteolC8LJt, bytenIaXOZ2, uintul4cAru, {from: accounts[3]});

		await expect(VatfIGpToh.file.call(byteolC8LJt, bytenIaXOZ2, uintul4cAru, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatTvqzvOY = await Vat.new({from: accounts[4]});
		const addressbTxh1yx = accounts[2]
		const uintZR2Ua6 = BigInt("261")
		const addressYsdIDsT = "0x0000000000000000000000000000000000000001"
		const addressfeirqWs = accounts[3]
		const byteEAaWKlC = "0x0e1d0ffffffffa1410090d0e10001514180b07060716181509021a10041d190f170019"
		const addressIgi5pcT = await VatTvqzvOY.nope.call(addressbTxh1yx, {from: accounts[4]});
//		const bytes32MTW9z7p = await VatTvqzvOY.flux.call(byteEAaWKlC, addressfeirqWs, addressYsdIDsT, uintZR2Ua6, {from: accounts[3]});

		await expect(VatTvqzvOY.flux.call(byteEAaWKlC, addressfeirqWs, addressYsdIDsT, uintZR2Ua6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatTvqzvOY = await Vat.new({from: accounts[4]});
		const uintWuVZ3Dx = BigInt("261")
		const addressM5Ikmx = "0x0000000000000000000000000000000000000001"
		const address6vFO8W = accounts[3]
		const byted29iN58 = "0x0e1d0f031410090d0e10fffffffd1514180b07060716181509021a10041d190f170019"
		const uintSerXth = BigInt("1775")
		const addressLYbBbRY = accounts[5]
		const address125b1O = accounts[3]
		const bytePvgxEMS = "0x1e1e00002008101718060b021f06110a00111b13091803191704161416091a0f"
//		const bytes32MTW9z7p = await VatTvqzvOY.flux.call(byted29iN58, address6vFO8W, addressM5Ikmx, uintWuVZ3Dx, {from: accounts[3]});
//		const bytes32LrXUKxj = await VatTvqzvOY.flux.call(bytePvgxEMS, address125b1O, addressLYbBbRY, uintSerXth, {from: accounts[1]});

		await expect(VatTvqzvOY.flux.call(byted29iN58, address6vFO8W, addressM5Ikmx, uintWuVZ3Dx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})