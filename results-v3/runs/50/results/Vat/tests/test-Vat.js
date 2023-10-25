const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatjVL4741 = await Vat.new({from: accounts[0]});
		const uinthqfrbcX = BigInt("706")
		const uintCMJmjoP = await VatjVL4741.heal.call(uinthqfrbcX, {from: accounts[4]});
		await VatjVL4741.auth.call({from: accounts[1]});
		await VatjVL4741.note.call({from: accounts[3]});
		await VatjVL4741.auth.call({from: accounts[1]});

		await expect(VatjVL4741.heal.call(uinthqfrbcX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VateaAx6he = await Vat.new({from: accounts[1]});
		const intzXiWxaJ = BigInt("1969")
		const addressrAzXozw = accounts[1]
		const byteZfypL15 = "0x041b1b1e06042015150215181f10170e171e051d081709151e040a121a120c10"
		const uinthgM7xJY = BigInt("583")
		const addressFeofZy = accounts[3]
		const addressFPvhFS = accounts[5]
		const intfzMPEsc = BigInt("-1017")
		const addressy388f2k = accounts[3]
		const bytez7IL5QX = "0x150e1300031b1f181c170715181b060d0e17161914171d05160b1b0a1603020f"
		const uintNpaLQFO = BigInt("2015")
		const addressmferuZC = accounts[0]
		const addressdXfirI1 = accounts[4]
		const byteEPvTIEA = "0x000f09130012111c0e03180807181a0c11040a15181d171a0411051d07121208"
		const uintOQgfJQl = BigInt("352")
		const bytes32mstN5Os = await VateaAx6he.slip.call(byteZfypL15, addressrAzXozw, intzXiWxaJ, {from: accounts[1]});
		await VateaAx6he.cage.call({from: accounts[4]});
		const addressfjj7LuE = await VateaAx6he.move.call(addressFPvhFS, addressFeofZy, uinthgM7xJY, {from: accounts[3]});
		const bytes32O61bp0k = await VateaAx6he.slip.call(bytez7IL5QX, addressy388f2k, intfzMPEsc, {from: accounts[2]});
		const bytes32puMlICY = await VateaAx6he.flux.call(byteEPvTIEA, addressdXfirI1, addressmferuZC, uintNpaLQFO, {from: accounts[3]});
		const uintGUKw0C0 = await VateaAx6he.heal.call(uintOQgfJQl, {from: accounts[3]});

		await expect(VateaAx6he.cage.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatqu0ikd3 = await Vat.new({from: accounts[3]});
		const intUR2N6cH = BigInt("-914")
		const intN7a5uA7 = BigInt("-1245")
		const addressqaf3ABB = accounts[3]
		const addressiJ3ziQG = accounts[3]
		const addressvZae7xO = accounts[5]
		const bytehetsYUG = "0x201d12101b0e09090a0e041215060f0e161706141508200c02100418071f0e06"
		const uintlyvIib = BigInt("1394")
		const addresss6YO94R = "0x0000000000000000000000000000000000000001"
		const addresssWDN8Nn = accounts[2]
		const uintMtQZVuH = BigInt("1564")
		const addresspaUe4Hf = accounts[5]
		const addressnJh9KNi = accounts[4]
		const bytes32nXFuFzp = await Vatqu0ikd3.frob.call(bytehetsYUG, addressvZae7xO, addressiJ3ziQG, addressqaf3ABB, intN7a5uA7, intUR2N6cH, {from: "0x0000000000000000000000000000000000000001"});
		const addressaahZOUU = await Vatqu0ikd3.suck.call(addresssWDN8Nn, addresss6YO94R, uintlyvIib, {from: accounts[3]});
		const addressHSYkwNf = await Vatqu0ikd3.suck.call(addressnJh9KNi, addresspaUe4Hf, uintMtQZVuH, {from: accounts[3]});

		await expect(Vatqu0ikd3.frob.call(bytehetsYUG, addressvZae7xO, addressiJ3ziQG, addressqaf3ABB, intN7a5uA7, intUR2N6cH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatbJ5xSkx = await Vat.new({from: accounts[3]});
		const inthmOSOSu = BigInt("948")
		const addressXfiGLTs = accounts[3]
		const byteH4xhtCw = "0x051e111f1618201c1d040f020b1b1d0d1418040912091f14050e1a081f1c1a0e"
		const bytesJwjdye = "0x0d201f040d15180e02141903070a1a051b0f170818010b070c1f0e1a11020e15"
		const intmWzjY4k = BigInt("1846")
		const intyClFBeO = BigInt("-1451")
		const addressRlqOMX8 = "0x0000000000000000000000000000000000000001"
		const addressMZmWGv7 = accounts[3]
		const addresstkyqXST = accounts[0]
		const byteeb5RjM = "0x0a1302101906060b0f1a1317101d20190d0b19181e0902090120171b1d0f0d01"
		await VatbJ5xSkx.auth.call({from: accounts[3]});
		const bytes32I0mdXBX = await VatbJ5xSkx.fold.call(byteH4xhtCw, addressXfiGLTs, inthmOSOSu, {from: accounts[4]});
		const bytes32mtyIhpl = await VatbJ5xSkx.init.call(bytesJwjdye, {from: accounts[1]});
		const bytes32HEYbIOt = await VatbJ5xSkx.grab.call(byteeb5RjM, addresstkyqXST, addressMZmWGv7, addressRlqOMX8, intyClFBeO, intmWzjY4k, {from: accounts[3]});
		await VatbJ5xSkx.cage.call({from: accounts[2]});

		await expect(VatbJ5xSkx.auth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatca6QXUU = await Vat.new({from: accounts[2]});
		const uintmBgG0mX = BigInt("1186")
		const byteO6200S = "0x1d171d0b180905130404080515171e1f1e1b1f0d03130f150c18040b1911051e"
		const byteeovaPU9 = "0x1b1f0a0e131115131e19090107171b080b0c1b04021a090c1b18010d20111009"
		const intNtO9I6R = BigInt("2044")
		const addressdG7nSHe = accounts[2]
		const bytetp9R1Kf = "0x02161f121d081f0a1e061819160e0315101a101701051c1708091d151f120e1a"
		const intNjHjHgo = BigInt("595")
		const intm71Px3a = BigInt("-301")
		const addressipcI9qk = accounts[4]
		const addressKqYXt30 = accounts[3]
		const addressuGDtA1 = accounts[2]
		const byteQD5qiSr = "0x060b0f070708010b14170e181619050c1610091f121f01130712181c1b0c0607"
		const intpKq2dMe = BigInt("150")
		const intALyXy29 = BigInt("1665")
		const addressidX1gk = accounts[1]
		const addressMQgNfvW = accounts[2]
		const addressCa441UT = accounts[3]
		const byteq4B5AWo = "0x0f0d130b15171a0a040d0d1813141f1e1516050b1e16030a141e0f110d121220"
		const bytes32Bm0ZwJh = await Vatca6QXUU.file.call(byteeovaPU9, byteO6200S, uintmBgG0mX, {from: accounts[2]});
		const bytes32WLU40jN = await Vatca6QXUU.slip.call(bytetp9R1Kf, addressdG7nSHe, intNtO9I6R, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32IkciXY1 = await Vatca6QXUU.grab.call(byteQD5qiSr, addressuGDtA1, addressKqYXt30, addressipcI9qk, intm71Px3a, intNjHjHgo, {from: accounts[5]});
		const bytes32xe12Dhv = await Vatca6QXUU.grab.call(byteq4B5AWo, addressCa441UT, addressMQgNfvW, addressidX1gk, intALyXy29, intpKq2dMe, {from: accounts[4]});

		await expect(Vatca6QXUU.file.call(byteeovaPU9, byteO6200S, uintmBgG0mX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnCgWUhM = await Vat.new({from: accounts[5]});
		const addressZXM1yu6 = accounts[4]
		const intzgwcF8d = BigInt("-1356")
		const addressp35YRC6 = accounts[3]
		const byteNawx7GC = "0x090a0f1e1c1812151a1c111b03170e170d171a201d1a040a140e121a0d05050c"
		const uintFaOwIIL = BigInt("1691")
		const byteotSfdcO = "0x13001e0a0a131c0f10140b181a010212190f0c0f071b1f040503070515200e13"
		const addressR2Yo0cN = await VatnCgWUhM.hope.call(addressZXM1yu6, {from: accounts[2]});
		await VatnCgWUhM.note.call({from: accounts[0]});
		const bytes32MMDYN8v = await VatnCgWUhM.slip.call(byteNawx7GC, addressp35YRC6, intzgwcF8d, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32ySHmQud = await VatnCgWUhM.file.call(byteotSfdcO, uintFaOwIIL, {from: accounts[1]});

		await expect(VatnCgWUhM.note.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRwxmEqz = await Vat.new({from: accounts[3]});
		const uintLSSSkwc = BigInt("2007")
		const addressAT1gHwJ = "0x0000000000000000000000000000000000000001"
		const addressGu7Zbcs = accounts[3]
		const bytelHdVzkd = "0x0a0f10101b1c1d04101a13010c190b14191e0013121f040e0b16180c061e0e19"
		const uintVGGlia = BigInt("1978")
		const uintog4uuSE = BigInt("33")
		const bytes329lcEAW = await VatRwxmEqz.flux.call(bytelHdVzkd, addressGu7Zbcs, addressAT1gHwJ, uintLSSSkwc, {from: accounts[1]});
		const uintXMJSqCt = await VatRwxmEqz.heal.call(uintVGGlia, {from: accounts[1]});
		const uintTqk6Rzv = await VatRwxmEqz.heal.call(uintog4uuSE, {from: accounts[3]});
		await VatRwxmEqz.note.call({from: accounts[4]});

		await expect(VatRwxmEqz.flux.call(bytelHdVzkd, addressGu7Zbcs, addressAT1gHwJ, uintLSSSkwc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatm9mWPag = await Vat.new({from: accounts[3]});
		const addressSnrew9L = accounts[0]
		const intQ7wa0K = BigInt("-987")
		const intaemjApV = BigInt("1270")
		const addressKOQEwnn = accounts[0]
		const addresswPGOslT = accounts[4]
		const addressqIhY9J4 = accounts[3]
		const byteVf8sYRt = "0x010d021b0f190f0809111c0a1c0c0c0a001a052016040d0a0c1e191a0f041e01"
		const addresswpMUUXn = accounts[4]
		const bytedMNiBNK = "0x031301061610141c170a1e0c1d142019181c14130c0d130717151d19141e1304"
		const addressg8ueCus = await Vatm9mWPag.nope.call(addressSnrew9L, {from: accounts[3]});
		const bytes32N0Ln4EE = await Vatm9mWPag.grab.call(byteVf8sYRt, addressqIhY9J4, addresswPGOslT, addressKOQEwnn, intaemjApV, intQ7wa0K, {from: accounts[2]});
		const addressiSWusSS = await Vatm9mWPag.hope.call(addresswpMUUXn, {from: accounts[0]});
		const bytes32RZk2ffp = await Vatm9mWPag.init.call(bytedMNiBNK, {from: accounts[5]});

		await expect(Vatm9mWPag.grab.call(byteVf8sYRt, addressqIhY9J4, addresswPGOslT, addressKOQEwnn, intaemjApV, intQ7wa0K, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXkkFuu = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintF9ZYYsi = BigInt("1318")
		const bytenrHbxTh = "0x180f04000a081c0c121a0c1b0b071e0d10031a1b13180f1505110c00170d1f11"
		const uintIZPvXhC = BigInt("567")
		const addresspFTaR1v = accounts[5]
		const addressaepxRGK = accounts[1]
		const uintdIxXrI = BigInt("382")
		const addressSYb5v90 = accounts[0]
		const addressFXmvnAu = accounts[2]
		const addressqacUG2Y = accounts[3]
		const intUg3ZTwD = BigInt("270")
		const addressqWArcJn = accounts[4]
		const byteAyWiASB = "0x160a1d101114151d19011815170b020d181b171e071520141b101e0e14030104"
		const intslGH1z = BigInt("-2008")
		const intNl0IneP = BigInt("1962")
		const addressahVr8QL = accounts[2]
		const addressnvNRZl = accounts[5]
		const addressumbKrMV = accounts[0]
		const byteKWncGUd = "0x16010a09030a0c1a180401051611140d120b1c18140f0f0e0d07040c1802190c"
		const bytes32LIElR8S = await VatXkkFuu.file.call(bytenrHbxTh, uintF9ZYYsi, {from: accounts[0]});
		const addressYz3V8Hr = await VatXkkFuu.suck.call(addressaepxRGK, addresspFTaR1v, uintIZPvXhC, {from: accounts[3]});
		const addressXr6Fo4l = await VatXkkFuu.suck.call(addressFXmvnAu, addressSYb5v90, uintdIxXrI, {from: accounts[2]});
		const addressiIl5lod = await VatXkkFuu.hope.call(addressqacUG2Y, {from: accounts[2]});
		const bytes32FmKwCJd = await VatXkkFuu.slip.call(byteAyWiASB, addressqWArcJn, intUg3ZTwD, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32yTZxKn = await VatXkkFuu.grab.call(byteKWncGUd, addressumbKrMV, addressnvNRZl, addressahVr8QL, intNl0IneP, intslGH1z, {from: accounts[1]});
	});

	it('test for Vat', async () => {
		const VatRwxmEqz = await Vat.new({from: accounts[3]});
		const uintonRObBh = BigInt("1048")
		const byteBWZt5Wz = "0x0f120c1b111a1c14081e0b140e1c02200a1004051713001312081e02010a191c"
		const intSzFLWQ2 = BigInt("-1635")
		const intEloKINk = BigInt("237")
		const addressNkGQgN1 = accounts[3]
		const addressj4sqVZF = accounts[4]
		const addressD45Lu4n = accounts[4]
		const bytekGX0FP4 = "0x0919161c1c051c020b10021406180103180e01040208141e021220070b1f1b17"
		const uintiUvwTNC = BigInt("1985")
		const bytes3225gdWt = await VatRwxmEqz.file.call(byteBWZt5Wz, uintonRObBh, {from: accounts[0]});
		const bytes32UorwRW2 = await VatRwxmEqz.frob.call(bytekGX0FP4, addressD45Lu4n, addressj4sqVZF, addressNkGQgN1, intEloKINk, intSzFLWQ2, {from: accounts[3]});
		const uintXMJSqCt = await VatRwxmEqz.heal.call(uintiUvwTNC, {from: accounts[1]});

		await expect(VatRwxmEqz.file.call(byteBWZt5Wz, uintonRObBh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRwxmEqz = await Vat.new({from: accounts[3]});
		const uintpvKo35Y = BigInt("1101")
		const addressP0UJUwC = accounts[1]
		const addressaXCbEfD = accounts[2]
		const uinteK5wQcf = BigInt("1997")
		const addressfLxaVP = await VatRwxmEqz.move.call(addressaXCbEfD, addressP0UJUwC, uintpvKo35Y, {from: "0x0000000000000000000000000000000000000001"});
		await VatRwxmEqz.cage.call({from: accounts[0]});
		const uintXMJSqCt = await VatRwxmEqz.heal.call(uinteK5wQcf, {from: accounts[1]});

		await expect(VatRwxmEqz.move.call(addressaXCbEfD, addressP0UJUwC, uintpvKo35Y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRwxmEqz = await Vat.new({from: accounts[3]});
		const uintulWuQ7f = BigInt("1978")
		await VatRwxmEqz.cage.call({from: accounts[3]});
		const uintXMJSqCt = await VatRwxmEqz.heal.call(uintulWuQ7f, {from: accounts[1]});

		await expect(VatRwxmEqz.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatJTCoLeN = await Vat.new({from: accounts[5]});
		const addressFsGhfM4 = accounts[1]
		const addresswSL1NQS = await VatJTCoLeN.deny.call(addressFsGhfM4, {from: accounts[5]});
		await VatJTCoLeN.cage.call({from: accounts[1]});
		await VatJTCoLeN.note.call({from: accounts[1]});

		await expect(VatJTCoLeN.cage.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRwxmEqz = await Vat.new({from: accounts[3]});
		const intl9alLrk = BigInt("1481")
		const intEuPVFWL = BigInt("1720")
		const addressF2ttyle = accounts[2]
		const addressVzFH66q = accounts[2]
		const byteGOyWC7y = "0x100e031d05110f130c080a04101f050c0509050e0f1a1d07070e011e1807090d"
		const inteHJWGL5 = BigInt("184")
		const inthNkcpC = BigInt("-1764")
		const addressWH4p57a = accounts[1]
		const addressIUnuP9J = "0x0000000000000000000000000000000000000001"
		const addressIjomkp9 = accounts[5]
		const bytexRcT80N = "0x0e191e110714060003030b0b0c08010e0a051408160f03012018000b03141d18"
		const uinttKqrKo4 = BigInt("1988")
		const bytes32fW4Cl0n = await VatRwxmEqz.fork.call(byteGOyWC7y, addressVzFH66q, addressF2ttyle, intEuPVFWL, intl9alLrk, {from: accounts[3]});
		const bytes32tdVcPla = await VatRwxmEqz.frob.call(bytexRcT80N, addressIjomkp9, addressIUnuP9J, addressWH4p57a, inthNkcpC, inteHJWGL5, {from: accounts[3]});
		const uintXMJSqCt = await VatRwxmEqz.heal.call(uinttKqrKo4, {from: accounts[1]});

		await expect(VatRwxmEqz.fork.call(byteGOyWC7y, addressVzFH66q, addressF2ttyle, intEuPVFWL, intl9alLrk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRwxmEqz = await Vat.new({from: accounts[3]});
		const intRhiTyl = BigInt("-892")
		const addressLTn32Ik = accounts[0]
		const byteLcsxPBD = "0x101d1f1b0c091904020c08030c0b19070802061a06091b1617030f090b1e1605"
		const uintAPWNYLG = BigInt("1978")
		const addressvfgWB7j = accounts[4]
		const intFT9D20 = BigInt("-326")
		const intv6Rdxrt = BigInt("1872")
		const addressqmv2kts = accounts[4]
		const addressVLXxA7a = accounts[3]
		const addressTEba1i = accounts[1]
		const byteJIUCMg = "0x0c1405060b1e111203071b0c110813181c1c1b02011a042012071502040e0317"
		const uintkDOxUv = BigInt("397")
		const byteeZPlnjR = "0x051c0507041f0917110d0d19030e120a0010121703181f0c11010b0c011e0403"
		const bytekqx3Nb = "0x11031c051f16190d0b070a0a14121f16150602130b030306160e0d1a20061a0d"
		const bytes32gO5ta1k = await VatRwxmEqz.fold.call(byteLcsxPBD, addressLTn32Ik, intRhiTyl, {from: accounts[3]});
		const uintXMJSqCt = await VatRwxmEqz.heal.call(uintAPWNYLG, {from: accounts[1]});
		const addressLIRPl2 = await VatRwxmEqz.nope.call(addressvfgWB7j, {from: accounts[3]});
		const bytes32AXFc1z = await VatRwxmEqz.frob.call(byteJIUCMg, addressTEba1i, addressVLXxA7a, addressqmv2kts, intv6Rdxrt, intFT9D20, {from: accounts[2]});
		const bytes32jMtGRhE = await VatRwxmEqz.file.call(bytekqx3Nb, byteeZPlnjR, uintkDOxUv, {from: accounts[3]});

		await expect(VatRwxmEqz.fold.call(byteLcsxPBD, addressLTn32Ik, intRhiTyl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatLsvzMwl = await Vat.new({from: accounts[3]});
		const uintpzDh2sf = BigInt("1068")
		const addresssIRdfsW = accounts[3]
		const addressLuxzlBn = accounts[2]
		const uintGgVqxWZ = BigInt("1278")
		const uintbCPhwSW = BigInt("76")
		const byteXdvyqVz = "0x0e130e0d1d0e08090f01180b0d030f11200a1103110507121a1612130e1a1814"
		const byteauYhYkt = "0x17150d12070919030a2011121f0d202008050b11070f191501131e08050f0711"
		const uintdCBQRXu = BigInt("1359")
		const byteZAEOVYx = "0x15071e0f0317060a19011514141b010c18060e1f0620051019191b071e111115"
		const addressPqgcpfz = await VatLsvzMwl.suck.call(addressLuxzlBn, addresssIRdfsW, uintpzDh2sf, {from: accounts[3]});
		await VatLsvzMwl.cage.call({from: accounts[5]});
		await VatLsvzMwl.auth.call({from: accounts[0]});
		const uintLfurnt = await VatLsvzMwl.heal.call(uintGgVqxWZ, {from: accounts[2]});
		const bytes32Jn7vNy = await VatLsvzMwl.file.call(byteauYhYkt, byteXdvyqVz, uintbCPhwSW, {from: accounts[3]});
		const bytes32R6bDXWr = await VatLsvzMwl.file.call(byteZAEOVYx, uintdCBQRXu, {from: accounts[0]});

		await expect(VatLsvzMwl.cage.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFIIYaqh = await Vat.new({from: accounts[1]});
		const addressbGzBJYZ = accounts[3]
		const intLNAF42 = BigInt("1866")
		const intCrAgJ0r = BigInt("-238")
		const addressUzsarrH = accounts[0]
		const addresskcqnBXh = accounts[5]
		const addressiXJbfm = accounts[4]
		const byteSX4jNOg = "0x111d131817181d06151d1b0b1a13031d1b04030c1a1f190a071e1f101d201003"
		const addresshT02sY6 = accounts[1]
		const intwXmEHAP = BigInt("-2030")
		const intrUu0vF = BigInt("1393")
		const addressudw9la = accounts[3]
		const addresswWBTH6B = "0x0000000000000000000000000000000000000001"
		const addresscnPqcEn = accounts[2]
		const byteBTYaHYB = "0x1e0119180905160e161614140a190919050e181c1b1f07141a12071f1b141619"
		const addressx2f0On9 = await VatFIIYaqh.nope.call(addressbGzBJYZ, {from: accounts[1]});
		const bytes32HMcZDxl = await VatFIIYaqh.grab.call(byteSX4jNOg, addressiXJbfm, addresskcqnBXh, addressUzsarrH, intCrAgJ0r, intLNAF42, {from: accounts[1]});
		const addresse1ML0PY = await VatFIIYaqh.hope.call(addresshT02sY6, {from: accounts[0]});
		const bytes32Yd8Qu32 = await VatFIIYaqh.grab.call(byteBTYaHYB, addresscnPqcEn, addresswWBTH6B, addressudw9la, intrUu0vF, intwXmEHAP, {from: accounts[3]});
		await VatFIIYaqh.note.call({from: accounts[2]});

		await expect(VatFIIYaqh.grab.call(byteSX4jNOg, addressiXJbfm, addresskcqnBXh, addressUzsarrH, intCrAgJ0r, intLNAF42, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRwxmEqz = await Vat.new({from: accounts[3]});
		const byteZXiJJR = "0x1a02051c121b0113150b140b201b200910091f1d20001a16051f050d12100905"
		const uintydugp7D = BigInt("1988")
		const inthUmTMlj = BigInt("-915")
		const intscvijcH = BigInt("1457")
		const addressRau1ENP = accounts[3]
		const addresswal0IS1 = accounts[5]
		const byteX0kYh7B = "0x16090201151d0c0b070301030f161904021c1503160d0c1f0a05041e1f1a071a"
		const bytes32G64iKLJ = await VatRwxmEqz.init.call(byteZXiJJR, {from: accounts[3]});
		const uintXMJSqCt = await VatRwxmEqz.heal.call(uintydugp7D, {from: accounts[1]});
		const bytes32vdAgvT9 = await VatRwxmEqz.fork.call(byteX0kYh7B, addresswal0IS1, addressRau1ENP, intscvijcH, inthUmTMlj, {from: accounts[4]});

		await expect(VatRwxmEqz.heal.call(uintydugp7D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzpVy2Jb = await Vat.new({from: accounts[0]});
		const intw4YjWbz = BigInt("1432")
		const intnkipcNZ = BigInt("591")
		const addressAvV4lHx = accounts[2]
		const addressVrujjSy = accounts[1]
		const addressrT21uM = accounts[5]
		const byteb2JnObp = "0x1c07190c1a0f1d06010d1f1d18100117151a0e1b030e150a0c03151211011b1b"
		const uintiMYXmE9 = BigInt("425")
		const byteKwjGIkH = "0x0317110412031920001d17081c03151f071c111b051001051910201609180605"
		const uintBJoWjf = BigInt("853")
		const bytes32ABimX8X = await VatzpVy2Jb.grab.call(byteb2JnObp, addressrT21uM, addressVrujjSy, addressAvV4lHx, intnkipcNZ, intw4YjWbz, {from: accounts[0]});
		await VatzpVy2Jb.note.call({from: accounts[2]});
		const bytes32Dc0q0vC = await VatzpVy2Jb.file.call(byteKwjGIkH, uintiMYXmE9, {from: accounts[0]});
		const uintSlnjPWs = await VatzpVy2Jb.heal.call(uintBJoWjf, {from: accounts[4]});

		await expect(VatzpVy2Jb.grab.call(byteb2JnObp, addressrT21uM, addressVrujjSy, addressAvV4lHx, intnkipcNZ, intw4YjWbz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRwxmEqz = await Vat.new({from: accounts[3]});
		const addressSPpmRaI = accounts[0]
		const uintN2OEIIt = BigInt("1978")
		const addresstLlns02 = await VatRwxmEqz.rely.call(addressSPpmRaI, {from: accounts[3]});
		const uintXMJSqCt = await VatRwxmEqz.heal.call(uintN2OEIIt, {from: accounts[1]});

		await expect(VatRwxmEqz.heal.call(uintN2OEIIt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRwxmEqz = await Vat.new({from: accounts[3]});
		const intOEsf7A7 = BigInt("-1274")
		const intbx2Qt2D = BigInt("-1388")
		const addressYDoGz8o = accounts[4]
		const addressgiUgzyY = accounts[4]
		const byteNkw0oa9 = "0x0916090d081718080c11011b08191805120d090e171214080414020612131f10"
		const addressQraxexT = accounts[5]
		const uintP4D7v7W = BigInt("1978")
		const bytes32YX3Bt9T = await VatRwxmEqz.fork.call(byteNkw0oa9, addressgiUgzyY, addressYDoGz8o, intbx2Qt2D, intOEsf7A7, {from: "0x0000000000000000000000000000000000000001"});
		const addresszvh2R5G = await VatRwxmEqz.nope.call(addressQraxexT, {from: accounts[4]});
		const uintXMJSqCt = await VatRwxmEqz.heal.call(uintP4D7v7W, {from: accounts[1]});

		await expect(VatRwxmEqz.fork.call(byteNkw0oa9, addressgiUgzyY, addressYDoGz8o, intbx2Qt2D, intOEsf7A7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})