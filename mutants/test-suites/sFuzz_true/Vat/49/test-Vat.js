const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const Vatlwvt7c1 = await Vat.new({from: accounts[4]});
		const uintSW9woGL = BigInt("609")
//		const uintxcPRIQ = await Vatlwvt7c1.heal.call(uintSW9woGL, {from: accounts[4]});
//		await Vatlwvt7c1.cage.call({from: accounts[1]});
//		await Vatlwvt7c1.auth.call({from: accounts[1]});

		await expect(Vatlwvt7c1.heal.call(uintSW9woGL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatvnQPUJI = await Vat.new({from: accounts[1]});
		const addressu3uq0rD = accounts[1]
		const intzFlxTQQ = BigInt("-801")
		const intpScKFHC = BigInt("-1573")
		const addresstdXdRyf = accounts[3]
		const addressfwoSEiG = accounts[0]
		const addressqQEC1dQ = accounts[4]
		const byteMx7Z0iF = "0x00151e0b1b00201a0a1a1301070905141b1803030a011e1f18031205041f0b0f"
		const uintNyTDQMY = BigInt("437")
		const bytezL8sklr = "0x18091a1308110e02041400090001140f1d141d00061710200f190f1100200f0a"
		const intX55CbJN = BigInt("266")
		const intEzUiuwN = BigInt("-1468")
		const addresshtYJfnk = accounts[2]
		const addressbvq5OHZ = accounts[2]
		const addressq4aTvQc = accounts[2]
		const bytelTjIioE = "0x04161d1b160b131e071b0e020701071b1208021b0b15040913060820051e0a13"
//		const addressxI4vrrD = await VatvnQPUJI.deny.call(addressu3uq0rD, {from: accounts[0]});
//		const bytes32LAwjwg = await VatvnQPUJI.frob.call(byteMx7Z0iF, addressqQEC1dQ, addressfwoSEiG, addresstdXdRyf, intpScKFHC, intzFlxTQQ, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32yg7Gnm = await VatvnQPUJI.file.call(bytezL8sklr, uintNyTDQMY, {from: accounts[1]});
//		const bytes32t6TGm5U = await VatvnQPUJI.frob.call(bytelTjIioE, addressq4aTvQc, addressbvq5OHZ, addresshtYJfnk, intEzUiuwN, intX55CbJN, {from: accounts[3]});

		await expect(VatvnQPUJI.deny.call(addressu3uq0rD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatN3d82cX = await Vat.new({from: accounts[3]});
		const intUPnmsZH = BigInt("-1550")
		const intH8b5ENI = BigInt("31")
		const addressOZHlOVt = accounts[4]
		const addresssIf3UQk = accounts[1]
		const addressOByQG13 = accounts[1]
		const byteBsmzFTT = "0x0d010607030112020d09030d0a051313130e0405011a0c0e15080a02170a1011"
		const uintxqLOG4j = BigInt("382")
//		await VatN3d82cX.note.call({from: accounts[2]});
//		const bytes32vXF04TR = await VatN3d82cX.grab.call(byteBsmzFTT, addressOByQG13, addresssIf3UQk, addressOZHlOVt, intH8b5ENI, intUPnmsZH, {from: accounts[4]});
//		const uintN0a9ik = await VatN3d82cX.heal.call(uintxqLOG4j, {from: accounts[1]});

		await expect(VatN3d82cX.note.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfKNuYyW = await Vat.new({from: accounts[2]});
		const intxOuzCW = BigInt("-1057")
		const intE0VQ99V = BigInt("-1653")
		const addressxU6cqyn = "0x0000000000000000000000000000000000000001"
		const addressatx2uc2 = accounts[1]
		const byteDQdTsir = "0x0a1b05110a020f190518030d0b150b111b01071c0d11081c140a011f1f120514"
		const intuYJGWb5 = BigInt("1191")
		const intlc6sQQZ = BigInt("-1532")
		const addressCxx9qn3 = accounts[0]
		const addresswo07pzS = accounts[1]
		const addressH81H74q = "0x0000000000000000000000000000000000000001"
		const byteivZ4481 = "0x1f080f1e03041c171205180d07130e0e18181c081c13101b18121f0b120b0703"
		const addressU76VsNJ = accounts[4]
//		const bytes32OT6bodX = await VatfKNuYyW.fork.call(byteDQdTsir, addressatx2uc2, addressxU6cqyn, intE0VQ99V, intxOuzCW, {from: accounts[1]});
//		const bytes32nE8IQ8B = await VatfKNuYyW.grab.call(byteivZ4481, addressH81H74q, addresswo07pzS, addressCxx9qn3, intlc6sQQZ, intuYJGWb5, {from: accounts[2]});
//		const addresstO38kpP = await VatfKNuYyW.hope.call(addressU76VsNJ, {from: accounts[1]});

		await expect(VatfKNuYyW.fork.call(byteDQdTsir, addressatx2uc2, addressxU6cqyn, intE0VQ99V, intxOuzCW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatql4MAKd = await Vat.new({from: accounts[2]});
		const addressSq1VmDl = accounts[4]
		const addresshxxGd4 = "0x0000000000000000000000000000000000000001"
		const intZeIeJWk = BigInt("653")
		const ints6kmUgW = BigInt("-1018")
		const addressVKgWTGc = accounts[1]
		const addressUqzRnc4 = accounts[2]
		const addressSJPuGZM = accounts[4]
		const bytetgKZCSW = "0x070e0605170518100d1510160a141d03170717050d1c171220181e1800171313"
		const addressZAzpGXB = await Vatql4MAKd.nope.call(addressSq1VmDl, {from: accounts[4]});
		const addressCkrH2vV = await Vatql4MAKd.hope.call(addresshxxGd4, {from: accounts[0]});
//		const bytes32HvyfX5P = await Vatql4MAKd.grab.call(bytetgKZCSW, addressSJPuGZM, addressUqzRnc4, addressVKgWTGc, ints6kmUgW, intZeIeJWk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatql4MAKd.grab.call(bytetgKZCSW, addressSJPuGZM, addressUqzRnc4, addressVKgWTGc, ints6kmUgW, intZeIeJWk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat5r6UQH = await Vat.new({from: accounts[4]});
		const uintbOLOZZJ = BigInt("1971")
		const bytevDUixZS = "0x161e091014200f180f0512041a160b020c201119091d1b18111806160a141b03"
//		const bytes32NnE7Rpu = await Vat5r6UQH.file.call(bytevDUixZS, uintbOLOZZJ, {from: accounts[3]});

		await expect(Vat5r6UQH.file.call(bytevDUixZS, uintbOLOZZJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzfMsNcp = await Vat.new({from: accounts[2]});
		const intfq2HCbu = BigInt("1376")
		const intK6pdVz9 = BigInt("-1561")
		const addressKVgWpd = "0x0000000000000000000000000000000000000001"
		const addressF55S4ok = accounts[1]
		const addressUtmxLS8 = accounts[4]
		const byteIoi3dk = "0x040c15160b0f06011a18101d0418091b171a010511060601140615031f1e0e14"
		const intYAhZjS5 = BigInt("-757")
		const int8ZyNcq = BigInt("1545")
		const addresscjb0BhG = "0x0000000000000000000000000000000000000001"
		const addressw0VJmxO = accounts[0]
		const addressPjlvmzx = accounts[3]
		const bytes30iJB3 = "0x16010808111a1307011c14171a161d0319111104171e030c010a04051c0e1a0c"
		const addressLRzblR0 = accounts[5]
//		const bytes32KLTaWdP = await VatzfMsNcp.grab.call(byteIoi3dk, addressUtmxLS8, addressF55S4ok, addressKVgWpd, intK6pdVz9, intfq2HCbu, {from: accounts[2]});
//		await VatzfMsNcp.cage.call({from: accounts[4]});
//		await VatzfMsNcp.cage.call({from: accounts[4]});
//		const bytes32kxxbwWF = await VatzfMsNcp.frob.call(bytes30iJB3, addressPjlvmzx, addressw0VJmxO, addresscjb0BhG, int8ZyNcq, intYAhZjS5, {from: accounts[4]});
//		const addressvOy7TFh = await VatzfMsNcp.nope.call(addressLRzblR0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatzfMsNcp.grab.call(byteIoi3dk, addressUtmxLS8, addressF55S4ok, addressKVgWpd, intK6pdVz9, intfq2HCbu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatlwvt7c1 = await Vat.new({from: accounts[4]});
		const intIXLTbmK = BigInt("136")
		const intII16id9 = BigInt("-296")
		const addressS5SRKTJ = accounts[1]
		const addressS3l9F3q = "0x0000000000000000000000000000000000000001"
		const addressPHEJW2R = accounts[4]
		const byteiBQdziA = "0x0b1111151917111e0a02091e0403140317151c040d0d140b001d161515140f03"
		const uintyaotFo = BigInt("571")
//		const bytes32HFeOwDQ = await Vatlwvt7c1.frob.call(byteiBQdziA, addressPHEJW2R, addressS3l9F3q, addressS5SRKTJ, intII16id9, intIXLTbmK, {from: accounts[1]});
//		const uintxcPRIQ = await Vatlwvt7c1.heal.call(uintyaotFo, {from: accounts[4]});

		await expect(Vatlwvt7c1.frob.call(byteiBQdziA, addressPHEJW2R, addressS3l9F3q, addressS5SRKTJ, intII16id9, intIXLTbmK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzfMsNcp = await Vat.new({from: accounts[2]});
		const uintX9xXkcb = BigInt("1687")
		const addressNyFNWna = "0x0000000000000000000000000000000000000001"
		const addressX9xebhO = accounts[4]
		const byteSguWKvV = "0x20111a04151e1a0e1b09011e13121d1d1a170e1e0d15141711040a011b031916"
		const intKJKY15Q = BigInt("1376")
		const intL5PzN7k = BigInt("-1561")
		const addressNNyRGo = "0x0000000000000000000000000000000000000001"
		const address03N2Hc = accounts[2]
		const addressZ75Lis = accounts[4]
		const bytexy6Jdz = "0x040c15160b0f06011a18101d0418091b171a010511060601140615031f1e0e14"
//		const bytes32jLTKHV8 = await VatzfMsNcp.flux.call(byteSguWKvV, addressX9xebhO, addressNyFNWna, uintX9xXkcb, {from: accounts[0]});
//		const bytes32KLTaWdP = await VatzfMsNcp.grab.call(bytexy6Jdz, addressZ75Lis, address03N2Hc, addressNNyRGo, intL5PzN7k, intKJKY15Q, {from: accounts[2]});
//		await VatzfMsNcp.cage.call({from: accounts[4]});
//		await VatzfMsNcp.cage.call({from: accounts[4]});

		await expect(VatzfMsNcp.flux.call(byteSguWKvV, addressX9xebhO, addressNyFNWna, uintX9xXkcb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VateZRWmh1 = await Vat.new({from: accounts[3]});
		const uintB5ZDg5B = BigInt("286")
		const addressJHLIdVg = accounts[2]
		const addressXTgteQi = accounts[3]
		const byteQt0mbTk = "0x200c00140e16051d0d0307111e04180b01101a161a151c12060a181c03070f1f"
		const byterjx2iaY = "0x17110d05071c0e051614041f0606040b121412021512021e1001150f0708151a"
//		const bytes32DQs4j08 = await VateZRWmh1.flux.call(byteQt0mbTk, addressXTgteQi, addressJHLIdVg, uintB5ZDg5B, {from: accounts[3]});
//		const bytes32SZLmCAK = await VateZRWmh1.init.call(byterjx2iaY, {from: accounts[3]});

		await expect(VateZRWmh1.flux.call(byteQt0mbTk, addressXTgteQi, addressJHLIdVg, uintB5ZDg5B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatlwvt7c1 = await Vat.new({from: accounts[4]});
		const uintKfGlh2r = BigInt("1407")
		const addressLgINZ23 = "0x0000000000000000000000000000000000000001"
		const addressoOiiNO = accounts[2]
		const uintyA9NDUM = BigInt("629")
//		const addressJlUvG51 = await Vatlwvt7c1.move.call(addressoOiiNO, addressLgINZ23, uintKfGlh2r, {from: "0x0000000000000000000000000000000000000001"});
//		await Vatlwvt7c1.cage.call({from: accounts[4]});
//		const uintxcPRIQ = await Vatlwvt7c1.heal.call(uintyA9NDUM, {from: accounts[4]});

		await expect(Vatlwvt7c1.move.call(addressoOiiNO, addressLgINZ23, uintKfGlh2r, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatlwvt7c1 = await Vat.new({from: accounts[4]});
		const intDDD45lP = BigInt("354")
		const int0etYmt = BigInt("1267")
		const addresswRb7Nfp = accounts[1]
		const addressJ1hazFK = accounts[0]
		const addressLYG7BvU = accounts[0]
		const byteGW58LR = "0x1e040d15031b1b0b010f0c1c041a0d0b13050c11061810170901021706191a1a"
		const uintfp2cc3x = BigInt("416")
		const addressn84xOnt = accounts[4]
		const addressR96o00E = accounts[2]
		const uintuz6tNLD = BigInt("650")
//		const bytes32PlORXyY = await Vatlwvt7c1.grab.call(byteGW58LR, addressLYG7BvU, addressJ1hazFK, addresswRb7Nfp, int0etYmt, intDDD45lP, {from: accounts[4]});
//		const addressED0ZwED = await Vatlwvt7c1.suck.call(addressR96o00E, addressn84xOnt, uintfp2cc3x, {from: accounts[1]});
//		const uintxcPRIQ = await Vatlwvt7c1.heal.call(uintuz6tNLD, {from: accounts[4]});

		await expect(Vatlwvt7c1.grab.call(byteGW58LR, addressLYG7BvU, addressJ1hazFK, addresswRb7Nfp, int0etYmt, intDDD45lP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatEkSMyfe = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintucH2zBR = BigInt("728")
		const addressVdc9f2W = accounts[5]
		const addresswxKf6j = accounts[1]
		const byteyaX6l0T = "0x0811030c0f000d15111d0a170509060c1c0d1011081213150409010a1b030e1d"
		const addressqMrtMJl = accounts[1]
		const bytes32bOtgbF1 = await VatEkSMyfe.flux.call(byteyaX6l0T, addresswxKf6j, addressVdc9f2W, uintucH2zBR, {from: accounts[1]});
		const addressf8W3WvL = await VatEkSMyfe.hope.call(addressqMrtMJl, {from: accounts[2]});
		await VatEkSMyfe.note.call({from: accounts[2]});
		await VatEkSMyfe.note.call({from: "0x0000000000000000000000000000000000000001"});
		await VatEkSMyfe.note.call({from: accounts[3]});
	});

	it('test for Vat', async () => {
		const Vatlwvt7c1 = await Vat.new({from: accounts[4]});
		const addressBLw2DEY = "0x0000000000000000000000000000000000000001"
		const intKSUtAWr = BigInt("-888")
		const intcMUiMnN = BigInt("-444")
		const addressOUNnxBL = accounts[5]
		const addressmPyU0yo = accounts[5]
		const addressAjdFYY4 = accounts[4]
		const byteHgOtbYL = "0x080b051b101807190a06101604191b1600141507091c0e1216061615101a0a0c"
		const uintxV3Mx9u = BigInt("650")
		const addresse63A1H8 = await Vatlwvt7c1.deny.call(addressBLw2DEY, {from: accounts[4]});
//		const bytes32on4rGHI = await Vatlwvt7c1.frob.call(byteHgOtbYL, addressAjdFYY4, addressmPyU0yo, addressOUNnxBL, intcMUiMnN, intKSUtAWr, {from: accounts[2]});
//		const uintxcPRIQ = await Vatlwvt7c1.heal.call(uintxV3Mx9u, {from: accounts[4]});

		await expect(Vatlwvt7c1.frob.call(byteHgOtbYL, addressAjdFYY4, addressmPyU0yo, addressOUNnxBL, intcMUiMnN, intKSUtAWr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatGFeGePj = await Vat.new({from: accounts[4]});
		const intgOeC8Zc = BigInt("1802")
		const intn94Bzz2 = BigInt("1074")
		const addressUxLwG9X = accounts[1]
		const addressF24nfSg = accounts[1]
		const bytestcq1uZ = "0x141d051f201f1618081c0c0f0a12051e15100e140f1a14100b161f08061f1805"
//		await VatGFeGePj.cage.call({from: accounts[4]});
//		const bytes32hic5BBP = await VatGFeGePj.fork.call(bytestcq1uZ, addressF24nfSg, addressUxLwG9X, intn94Bzz2, intgOeC8Zc, {from: accounts[2]});

		await expect(VatGFeGePj.cage.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat5r6UQH = await Vat.new({from: accounts[4]});
		const uintLB7ZHhu = BigInt("1223")
		const addressEpQ7MHq = accounts[3]
		const addressmQAZs00 = accounts[1]
		const intbo2poKI = BigInt("1034")
		const int6d3kAF = BigInt("951")
		const addressSzEK7oo = accounts[4]
		const addressMzJubrz = accounts[0]
		const bytel53vQZ2 = "0x1e1a0d0105150f06011800191f161204161211000e201912150215091d131110"
		const uintozHmS5h = BigInt("1971")
		const byteMru3xlw = "0x161e091012200f180f0512041a160b020c201119091d1b18111806160a141b03"
		const addressxyrClYv = await Vat5r6UQH.suck.call(addressmQAZs00, addressEpQ7MHq, uintLB7ZHhu, {from: accounts[4]});
//		const bytes32JJhzYOg = await Vat5r6UQH.fork.call(bytel53vQZ2, addressMzJubrz, addressSzEK7oo, int6d3kAF, intbo2poKI, {from: accounts[3]});
//		const bytes32NnE7Rpu = await Vat5r6UQH.file.call(byteMru3xlw, uintozHmS5h, {from: accounts[3]});

		await expect(Vat5r6UQH.fork.call(bytel53vQZ2, addressMzJubrz, addressSzEK7oo, int6d3kAF, intbo2poKI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatlwvt7c1 = await Vat.new({from: accounts[4]});
		const byteRo4x3d5 = "0x1908150a0d111d03110e0a040207131a0303070715200f1e0e001217060d0c13"
		const uintchSrRZr = BigInt("1407")
		const addressIe0kZSn = "0x0000000000000000000000000000000000000002"
		const addressKdoB7e = accounts[3]
		const bytes32XTnNep = await Vatlwvt7c1.init.call(byteRo4x3d5, {from: accounts[4]});
//		const addressJlUvG51 = await Vatlwvt7c1.move.call(addressKdoB7e, addressIe0kZSn, uintchSrRZr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatlwvt7c1.move.call(addressKdoB7e, addressIe0kZSn, uintchSrRZr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatlwvt7c1 = await Vat.new({from: accounts[4]});
		const intzU6eN2L = BigInt("-2030")
		const addressILe6LdK = accounts[2]
		const bytevNnPrK = "0x0203040d070b0504080a120b17121e091b190a1a171d0f09190501140d201616"
		const uintojEXcAI = BigInt("762")
		const byteP7uTdzr = "0x010c11011f0e0e0b1e0f1a0d150d030e0c0a191016180f101012150b0d101509"
		const byteZAEix7E = "0x0b0807140f161611201d1514081d0303181612070c171a181f13180817080017"
		const uintjVz3cFm = BigInt("662")
//		const bytes32O8yAV3n = await Vatlwvt7c1.slip.call(bytevNnPrK, addressILe6LdK, intzU6eN2L, {from: accounts[4]});
//		const bytes32agtZUz = await Vatlwvt7c1.file.call(byteZAEix7E, byteP7uTdzr, uintojEXcAI, {from: accounts[5]});
//		const uintxcPRIQ = await Vatlwvt7c1.heal.call(uintjVz3cFm, {from: accounts[4]});

		await expect(Vatlwvt7c1.slip.call(bytevNnPrK, addressILe6LdK, intzU6eN2L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat5r6UQH = await Vat.new({from: accounts[4]});
		const uintLq5dvT3 = BigInt("1502")
		const byteqLOvnjO = "0x04200c1d16080c1b1d10001e07090e0b1413051a131b0d001b1a040c1d0b0220"
		const byten8tVflG = "0x0616081e02200b13080e0a1d191215081f1913101818091d10100a0912060e1b"
		const uintmClSV6c = BigInt("1973")
		const byteQpgto8v = "0x161e091014200f180f0512041a160b020c201119091d1b18111806160a141b03"
		const intzKW9L0B = BigInt("-1047")
		const intxLjALNp = BigInt("186")
		const addressErnLGKj = accounts[4]
		const addressDvrWLG = accounts[0]
		const addressVRL6iPx = accounts[5]
		const bytef4Gyad = "0x1f0f121c0a13190a1e03131902151a071308111a031207111700071c1a021901"
//		const bytes32U6p5h8Q = await Vat5r6UQH.file.call(byten8tVflG, byteqLOvnjO, uintLq5dvT3, {from: accounts[4]});
//		const bytes32NnE7Rpu = await Vat5r6UQH.file.call(byteQpgto8v, uintmClSV6c, {from: accounts[3]});
//		const bytes32CObxgGC = await Vat5r6UQH.frob.call(bytef4Gyad, addressVRL6iPx, addressDvrWLG, addressErnLGKj, intxLjALNp, intzKW9L0B, {from: accounts[3]});

		await expect(Vat5r6UQH.file.call(byten8tVflG, byteqLOvnjO, uintLq5dvT3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatlwvt7c1 = await Vat.new({from: accounts[4]});
		const uintk8ODxI = BigInt("938")
		const addresssAY91Nf = accounts[0]
		const addresszlWt9E = accounts[0]
		const uintGrlszC = BigInt("1401")
		const byteVWlMbT7 = "0x031e0f1807170711160c12080716090101061413182004120a13020c040f0716"
		const uintjBWXnK9 = BigInt("1842")
		const addresssGMjRMv = accounts[2]
		const addresss9uGJQ = accounts[5]
		const byteWInXUR = "0x1c10060a0c0816010b16090c121018161c0b1316010307151c0003150301100c"
		const uinthOXM8KY = BigInt("1407")
		const addressbitp0WL = "0x0000000000000000000000000000000000000002"
		const addressremolfS = accounts[2]
//		const addressFwEpoL = await Vatlwvt7c1.move.call(addresszlWt9E, addresssAY91Nf, uintk8ODxI, {from: accounts[0]});
//		const bytes32Ovjpl7R = await Vatlwvt7c1.file.call(byteVWlMbT7, uintGrlszC, {from: accounts[1]});
//		const bytes32rs7PYhr = await Vatlwvt7c1.flux.call(byteWInXUR, addresss9uGJQ, addresssGMjRMv, uintjBWXnK9, {from: accounts[0]});
//		const addressJlUvG51 = await Vatlwvt7c1.move.call(addressremolfS, addressbitp0WL, uinthOXM8KY, {from: "0x0000000000000000000000000000000000000001"});
//		await Vatlwvt7c1.auth.call({from: accounts[1]});

		await expect(Vatlwvt7c1.move.call(addresszlWt9E, addresssAY91Nf, uintk8ODxI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatDxr1By = await Vat.new({from: accounts[1]});
		const intqJdCzo = BigInt("-1217")
		const addresstYELr6h = accounts[4]
		const byteHhlazD = "0x1d131d01141e111b0b0a20021c0b140b10081514131714171e021f08190e1e0e"
		const intgoz6BkA = BigInt("-1266")
		const intNB9wVgT = BigInt("-1216")
		const addressAwAmXja = accounts[0]
		const addressi0qrD9e = accounts[1]
		const addressxLsK1Z0 = accounts[4]
		const bytePhYzcce = "0x020a0f14130b0714160a091a141e040518191d0e0e0b041e1a0e1b0a1d0d181b"
		const uintKjA3gec = BigInt("817")
		const address2SXh76 = accounts[1]
		const addresslmgGmqB = accounts[5]
		const byteurTBYD = "0x071009200b17051b1c0d0a1702141618041f170d021e19090b19061714121d0c"
		const addressqeZNaGT = accounts[3]
		const uintILKqu3b = BigInt("556")
		const addressTxRIh3F = accounts[2]
		const addressY1Xm5VW = accounts[1]
//		const bytes32x0wc1Ol = await VatDxr1By.fold.call(byteHhlazD, addresstYELr6h, intqJdCzo, {from: accounts[1]});
//		const bytes32kymLumE = await VatDxr1By.frob.call(bytePhYzcce, addressxLsK1Z0, addressi0qrD9e, addressAwAmXja, intNB9wVgT, intgoz6BkA, {from: accounts[4]});
//		await VatDxr1By.auth.call({from: accounts[3]});
//		const bytes32auz9wFd = await VatDxr1By.flux.call(byteurTBYD, addresslmgGmqB, address2SXh76, uintKjA3gec, {from: accounts[3]});
//		const addressgicUXzO = await VatDxr1By.nope.call(addressqeZNaGT, {from: accounts[2]});
//		const addressCNEEBzq = await VatDxr1By.suck.call(addressY1Xm5VW, addressTxRIh3F, uintILKqu3b, {from: accounts[4]});

		await expect(VatDxr1By.fold.call(byteHhlazD, addresstYELr6h, intqJdCzo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat5r6UQH = await Vat.new({from: accounts[4]});
		const addressf1QtGJk = accounts[0]
		const intNYBMCjR = BigInt("-755")
		const intuNjkIFp = BigInt("-1006")
		const addressjiQfufh = accounts[0]
		const addresspamyjme = accounts[0]
		const bytegWDQAME = "0x0e1a071e171b1c1a19130215001b150507130a0f10151a061d1b11150505051e"
		const uintVJmrmRe = BigInt("1971")
		const bytexAj8RD = "0x161e091014200f180f0512041a160b020c171119091d1b18111806160a141b03"
		const addressAqhzgvv = await Vat5r6UQH.deny.call(addressf1QtGJk, {from: accounts[4]});
//		const bytes32oHO6XTN = await Vat5r6UQH.fork.call(bytegWDQAME, addresspamyjme, addressjiQfufh, intuNjkIFp, intNYBMCjR, {from: accounts[3]});
//		const bytes32NnE7Rpu = await Vat5r6UQH.file.call(bytexAj8RD, uintVJmrmRe, {from: accounts[3]});

		await expect(Vat5r6UQH.fork.call(bytegWDQAME, addresspamyjme, addressjiQfufh, intuNjkIFp, intNYBMCjR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatlwvt7c1 = await Vat.new({from: accounts[4]});
		const addressGJWYcPq = accounts[3]
		const uintAo6jnRV = BigInt("604")
		const uintVPL0U4A = BigInt("375")
		const addressukKI27e = await Vatlwvt7c1.rely.call(addressGJWYcPq, {from: accounts[4]});
//		const uintxcPRIQ = await Vatlwvt7c1.heal.call(uintAo6jnRV, {from: accounts[4]});
//		const uintkuZFqFJ = await Vatlwvt7c1.heal.call(uintVPL0U4A, {from: accounts[2]});

		await expect(Vatlwvt7c1.heal.call(uintAo6jnRV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})