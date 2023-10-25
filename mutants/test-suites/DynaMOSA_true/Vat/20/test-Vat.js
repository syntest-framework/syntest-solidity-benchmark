const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatZ8oJ1AV = await Vat.new({from: accounts[3]});
		const addressJPlp9zX = accounts[3]
		const intpxx0UL5 = BigInt("1645")
		const addressSraeajv = accounts[4]
		const byteY5LerBO = "0x05190716070b120b081b1f0b000e020a06041f041a070f08011f02041e061117"
		const intTIk7yST = BigInt("1538")
		const intWUSXT3l = BigInt("-456")
		const addressHBV8OTR = accounts[2]
		const addressk07b5tg = accounts[3]
		const addressMFIp9Mr = accounts[3]
		const byteHyn3qNX = "0x1105091c1e0902090512130f031d0b1a0011030102061603080911031e120716"
		const intPZoJHLs = BigInt("-608")
		const addressCX3pTOI = "0x0000000000000000000000000000000000000001"
		const byteHsdRrNg = "0x0b01110419030d031e0d1d141f17060f020c160807021c121707161410130b07"
		const bytelLPj6jI = "0x000b07181417180014011c0b0814120b110b091e071c0c1b0d1d161816011607"
//		const addresspbo0Mxp = await VatZ8oJ1AV.deny.call(addressJPlp9zX, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32wJUSanW = await VatZ8oJ1AV.slip.call(byteY5LerBO, addressSraeajv, intpxx0UL5, {from: accounts[4]});
//		const bytes32tQqivhp = await VatZ8oJ1AV.frob.call(byteHyn3qNX, addressMFIp9Mr, addressk07b5tg, addressHBV8OTR, intWUSXT3l, intTIk7yST, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32Zm4qUkv = await VatZ8oJ1AV.fold.call(byteHsdRrNg, addressCX3pTOI, intPZoJHLs, {from: accounts[1]});
//		const bytes32AVvPKBe = await VatZ8oJ1AV.init.call(bytelLPj6jI, {from: accounts[2]});

		await expect(VatZ8oJ1AV.deny.call(addressJPlp9zX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlqZTiYb = await Vat.new({from: accounts[0]});
		const uintc78KfcH = BigInt("24")
		const addressfo3Xwo = accounts[5]
		const addresszMX8mtU = "0x0000000000000000000000000000000000000001"
		const uintJY38yPc = BigInt("336")
		const addressPPhl87h = "0x0000000000000000000000000000000000000001"
		const addressFtk2m4a = accounts[0]
		const byteKb14YHR = "0x08061903190c02200c07101c0b1614170e070914111910140d0419070a080c03"
		const addressNtwhsB = accounts[1]
//		await VatlqZTiYb.note.call({from: accounts[1]});
//		const addressRJw1a6e = await VatlqZTiYb.suck.call(addresszMX8mtU, addressfo3Xwo, uintc78KfcH, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32AQTqwwq = await VatlqZTiYb.flux.call(byteKb14YHR, addressFtk2m4a, addressPPhl87h, uintJY38yPc, {from: accounts[5]});
//		await VatlqZTiYb.cage.call({from: accounts[4]});
//		const addressBPIgSJF = await VatlqZTiYb.rely.call(addressNtwhsB, {from: accounts[2]});

		await expect(VatlqZTiYb.note.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkqIYVgH = await Vat.new({from: accounts[0]});
		const uint9Iwlcx = BigInt("550")
		const bytebTo9MxA = "0x011e0505090b0a09201b1f091d1d15021a171a0614090a01090819141c0a1507"
		const bytex38jGuO = "0x1b10160c071a0a10060a0c1f0303151a0f091c201910080f0716140d170a160e"
		const intDNXVVu1 = BigInt("1251")
		const addressjMkD1I = "0x0000000000000000000000000000000000000001"
		const byteaXCHrBV = "0x13061e010206061d0e060d060711090a14001b130b1204051f1f11080e120600"
		const byterBvF4l = "0x181117091712190612181e1604081b161417130d16170602170a0c0c061d170e"
		const addressroaVkCR = accounts[4]
		const uintD8bgdws = BigInt("382")
//		const bytes32kAzZMIs = await VatkqIYVgH.file.call(bytex38jGuO, bytebTo9MxA, uint9Iwlcx, {from: accounts[0]});
//		const bytes32Y3fcaS = await VatkqIYVgH.slip.call(byteaXCHrBV, addressjMkD1I, intDNXVVu1, {from: accounts[0]});
//		const bytes32Mk4rEo7 = await VatkqIYVgH.init.call(byterBvF4l, {from: accounts[0]});
//		const addressoBCMHR5 = await VatkqIYVgH.nope.call(addressroaVkCR, {from: accounts[0]});
//		const uintwiz8UWI = await VatkqIYVgH.heal.call(uintD8bgdws, {from: accounts[4]});

		await expect(VatkqIYVgH.file.call(bytex38jGuO, bytebTo9MxA, uint9Iwlcx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatw0ufwEx = await Vat.new({from: accounts[1]});
		const intOtY37h2 = BigInt("-1131")
		const intjfg7Ay = BigInt("-858")
		const address6I0eJs = accounts[4]
		const addressqbvVicH = accounts[2]
		const addressuQpuDdL = "0x0000000000000000000000000000000000000001"
		const byteh8kIs4p = "0x0e060f0d112016171705140e1d06071d0308040a0f051119051a0016111b1b15"
		const uintgyFngYp = BigInt("238")
		const intI5ilz7i = BigInt("1811")
		const intRFEmHi5 = BigInt("734")
		const addressTzlemcW = accounts[3]
		const addressXQKa7gW = accounts[1]
		const bytexlsLJYJ = "0x011d181f20190912081b081512171105020419020901171e0811190c1719121e"
		const intoBZSHbX = BigInt("1763")
		const address1aSTGc = accounts[0]
		const byteqcEmaHV = "0x161d201e0e0b14011009000f0311111c1d07081d0f061f14091a071a1b041f13"
//		const bytes32Amz6ahc = await Vatw0ufwEx.frob.call(byteh8kIs4p, addressuQpuDdL, addressqbvVicH, address6I0eJs, intjfg7Ay, intOtY37h2, {from: accounts[2]});
//		const uintakCIs3J = await Vatw0ufwEx.heal.call(uintgyFngYp, {from: accounts[5]});
//		const bytes32eFof2ds = await Vatw0ufwEx.fork.call(bytexlsLJYJ, addressXQKa7gW, addressTzlemcW, intRFEmHi5, intI5ilz7i, {from: accounts[3]});
//		const bytes32OUpVTO = await Vatw0ufwEx.slip.call(byteqcEmaHV, address1aSTGc, intoBZSHbX, {from: accounts[3]});
//		await Vatw0ufwEx.cage.call({from: accounts[3]});

		await expect(Vatw0ufwEx.frob.call(byteh8kIs4p, addressuQpuDdL, addressqbvVicH, address6I0eJs, intjfg7Ay, intOtY37h2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkAwR35r = await Vat.new({from: accounts[1]});
		const intlKEgPyL = BigInt("-450")
		const addressCOZj05F = accounts[5]
		const byteFzoVXDf = "0x0112151e03070518100f160d1915180608160a1116051519160c041810180f0f"
		const addressSRLiKzk = accounts[2]
		const addressbd2O3n = accounts[4]
		const intbPe6yUK = BigInt("-2035")
		const intlTyxoqY = BigInt("-56")
		const addressi2SdUam = accounts[1]
		const addressk4OFhgQ = accounts[1]
		const addressyjRI3zx = accounts[5]
		const byteNDFPOSW = "0x070b06090b08171a0d200a09051709010d0a150b1e05200a201d010719141b14"
//		const bytes32WPlGjXi = await VatkAwR35r.fold.call(byteFzoVXDf, addressCOZj05F, intlKEgPyL, {from: accounts[1]});
//		const addressuDt8hAp = await VatkAwR35r.hope.call(addressSRLiKzk, {from: accounts[0]});
//		await VatkAwR35r.cage.call({from: accounts[4]});
//		const addressHg8Sbf = await VatkAwR35r.hope.call(addressbd2O3n, {from: "0x0000000000000000000000000000000000000001"});
//		await VatkAwR35r.note.call({from: accounts[3]});
//		const bytes32BxRc2K = await VatkAwR35r.grab.call(byteNDFPOSW, addressyjRI3zx, addressk4OFhgQ, addressi2SdUam, intlTyxoqY, intbPe6yUK, {from: accounts[3]});

		await expect(VatkAwR35r.fold.call(byteFzoVXDf, addressCOZj05F, intlKEgPyL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatgoguHRi = await Vat.new({from: accounts[1]});
		const uintzO94cl9 = BigInt("1236")
		const addresssI89MzN = accounts[1]
		const addressJwCP66 = "0x0000000000000000000000000000000000000001"
		const inte6Eoh1e = BigInt("1054")
		const intratotv = BigInt("-838")
		const addressfRogCtD = accounts[4]
		const addressAKtfqiq = accounts[4]
		const addressfVdSq88 = accounts[0]
		const byterBovKa4 = "0x1017080113191b161c0306011701200f150110050c0400040e0d0b06031e1c0a"
		const addressA85VwGE = accounts[6]
		const uinttkL1FKT = BigInt("411")
		const byteZRjHrNs = "0x03160c12170a191e0b03090d1608121d030f1b0a0d1c1b051700031d19080410"
//		const addressoxKYct = await VatgoguHRi.move.call(addressJwCP66, addresssI89MzN, uintzO94cl9, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32pNQCwTJ = await VatgoguHRi.frob.call(byterBovKa4, addressfVdSq88, addressAKtfqiq, addressfRogCtD, intratotv, inte6Eoh1e, {from: accounts[1]});
//		const addressF8XOOnf = await VatgoguHRi.hope.call(addressA85VwGE, {from: accounts[4]});
//		const bytes32J6DyHcC = await VatgoguHRi.file.call(byteZRjHrNs, uinttkL1FKT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatgoguHRi.move.call(addressJwCP66, addresssI89MzN, uintzO94cl9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatbMBNnA1 = await Vat.new({from: accounts[2]});
		const addresszUmZC8r = accounts[3]
		const bytecx05wL = "0x05190915062007131e00122006031904051a030e010e030e011f070e08021c1d"
		const uintwqezMhv = BigInt("1336")
		const byteada3vbP = "0x0e170c04170909020216160919080d0d151f1b1608120d0c171e1717121f191b"
		const bytey695Crp = "0x0a1a041f050b1c1d051a150a1f19030612011e0b0501111e190e201c0e1e031b"
		const addresstHANktb = await VatbMBNnA1.hope.call(addresszUmZC8r, {from: accounts[3]});
//		const bytes32u6FH9KY = await VatbMBNnA1.init.call(bytecx05wL, {from: accounts[0]});
//		const bytes32jtQNHp6 = await VatbMBNnA1.file.call(bytey695Crp, byteada3vbP, uintwqezMhv, {from: accounts[1]});

		await expect(VatbMBNnA1.init.call(bytecx05wL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatw0ufwEx = await Vat.new({from: accounts[1]});
		const uintDlSi1rq = BigInt("1959")
		const addressm6eAAqp = "0x0000000000000000000000000000000000000001"
		const addressC5iA0fL = accounts[2]
		const bytetmWsKJh = "0x0001161d05010908141914120a15081b1e180b15031f140d030601150e1f0813"
		const intkY1wa0n = BigInt("-1131")
		const ints5qLNe2 = BigInt("-858")
		const addressPbRawn = accounts[4]
		const addressuMrC7iw = accounts[2]
		const addresswFRRMRt = "0x0000000000000000000000000000000000000001"
		const byteNaLlYSl = "0x0e060f0d112016171705140e1d06071d0308040a0f051119051a0016111b1b15"
		const uintJUAL8xm = BigInt("238")
		const intXCrApQD = BigInt("1811")
		const intbmvvFwX = BigInt("734")
		const addressnbDLogi = accounts[3]
		const addressiVzjMKA = accounts[1]
		const byteiBQCE5l = "0x011d181f20190912081b081512171105020419020901171e0811190c1719121e"
		const intOPqVsYh = BigInt("1763")
		const addressRSCN6wV = accounts[0]
		const bytecea7NCP = "0x161d201e0e0b14011009000f0311111c1d07081d0f061f14091a071a1b041f13"
		const intSlB9IUX = BigInt("-1950")
		const addressKTQyFs9 = accounts[0]
		const bytecytNQjc = "0x05130802171a051d091e04070310041302161215090b1c1f1a03071b070e111b"
//		const bytes32K8Ibm8 = await Vatw0ufwEx.flux.call(bytetmWsKJh, addressC5iA0fL, addressm6eAAqp, uintDlSi1rq, {from: accounts[4]});
//		const bytes32Amz6ahc = await Vatw0ufwEx.frob.call(byteNaLlYSl, addresswFRRMRt, addressuMrC7iw, addressPbRawn, ints5qLNe2, intkY1wa0n, {from: accounts[2]});
//		const uintakCIs3J = await Vatw0ufwEx.heal.call(uintJUAL8xm, {from: accounts[5]});
//		const bytes32eFof2ds = await Vatw0ufwEx.fork.call(byteiBQCE5l, addressiVzjMKA, addressnbDLogi, intbmvvFwX, intXCrApQD, {from: accounts[3]});
//		const bytes32OUpVTO = await Vatw0ufwEx.slip.call(bytecea7NCP, addressRSCN6wV, intOPqVsYh, {from: accounts[3]});
//		await Vatw0ufwEx.cage.call({from: accounts[3]});
//		const bytes32mw4nUm = await Vatw0ufwEx.slip.call(bytecytNQjc, addressKTQyFs9, intSlB9IUX, {from: accounts[4]});

		await expect(Vatw0ufwEx.flux.call(bytetmWsKJh, addressC5iA0fL, addressm6eAAqp, uintDlSi1rq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatvqAkkz6 = await Vat.new({from: accounts[4]});
		const addressUdq29Yj = accounts[1]
		const addressZqb6JkY = accounts[1]
		const addresssePfTK7 = await VatvqAkkz6.nope.call(addressUdq29Yj, {from: accounts[2]});
//		await VatvqAkkz6.auth.call({from: accounts[0]});
//		const addressmruXY2X = await VatvqAkkz6.hope.call(addressZqb6JkY, {from: accounts[0]});

		await expect(VatvqAkkz6.auth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatw0ufwEx = await Vat.new({from: accounts[1]});
		const uintoeJGP9W = BigInt("544")
		const addressOnYENe = accounts[3]
		const addressXnpwXzD = accounts[0]
		const byteehL8S3x = "0x1d1a10130d101609041c022017191e1a1a1a0703031b011804121a1d18000a08"
		const byteV0Y2MTY = "0x1a111609191d1315101a1d1904080c0d0c0d061e0c08070f0e0403060913020c"
		const inta54r7nD = BigInt("-1131")
		const intscSgdrW = BigInt("-858")
		const addressmfmd7er = accounts[4]
		const addressrRLKFso = accounts[2]
		const addressQWSVj0G = "0x0000000000000000000000000000000000000001"
		const byteZC93i3E = "0x0e060f0d112016171705140e1d06071d0308040a0f051119051a0016111b1b15"
		const uinto7Xs4l = BigInt("238")
		const intsredzp3 = BigInt("1811")
		const intCJKiFe1 = BigInt("734")
		const addressPeZoFmY = accounts[3]
		const addressz49x50 = accounts[1]
		const byteUkeYx9W = "0x011d181f20190912081b081512171105020419020901171e0811190c1719121e"
		const intRUTjnva = BigInt("1763")
		const addressTHuqrh9 = accounts[0]
		const byteaz3gcPa = "0x161d201e0e0b14011009000f0311111c1d07081d0f061f14091a071a1b041f13"
//		const bytes324iLpjI = await Vatw0ufwEx.flux.call(byteehL8S3x, addressXnpwXzD, addressOnYENe, uintoeJGP9W, {from: accounts[0]});
//		const bytes32yuWqmxF = await Vatw0ufwEx.init.call(byteV0Y2MTY, {from: accounts[1]});
//		const bytes32Amz6ahc = await Vatw0ufwEx.frob.call(byteZC93i3E, addressQWSVj0G, addressrRLKFso, addressmfmd7er, intscSgdrW, inta54r7nD, {from: accounts[2]});
//		const uintakCIs3J = await Vatw0ufwEx.heal.call(uinto7Xs4l, {from: accounts[5]});
//		const bytes32eFof2ds = await Vatw0ufwEx.fork.call(byteUkeYx9W, addressz49x50, addressPeZoFmY, intCJKiFe1, intsredzp3, {from: accounts[3]});
//		const bytes32OUpVTO = await Vatw0ufwEx.slip.call(byteaz3gcPa, addressTHuqrh9, intRUTjnva, {from: accounts[3]});
//		await Vatw0ufwEx.cage.call({from: accounts[3]});

		await expect(Vatw0ufwEx.flux.call(byteehL8S3x, addressXnpwXzD, addressOnYENe, uintoeJGP9W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkqIYVgH = await Vat.new({from: accounts[0]});
		const intDwcQ2y8 = BigInt("1737")
		const addressXmg53XX = accounts[3]
		const bytelvlWstB = "0x10041616061005021d060d1d0c150f10160a161e1a0403181106170308151414"
		const uintUrdEaYM = BigInt("550")
		const byteraygILI = "0x011e0505090b0a09201b1f091d1d15021a171a0614090a01090819141c0a1507"
		const byteMOWNEAu = "0x1b10160c071a0a10060a0c1f0303151a0f091c201910080f0716140d170a160e"
		const intnZ1BjL4 = BigInt("1251")
		const addressWiYhFz1 = "0x0000000000000000000000000000000000000001"
		const byteMFajFUK = "0x13061e010206061d0e060d060711090a14001b130b1204051f1f11080e120600"
		const byteRwF902O = "0x181117091712190612181e1604081b161417130d16170602170a0c0c061d170e"
		const uintKZyeiom = BigInt("180")
		const addresszYGcDDd = "0x0000000000000000000000000000000000000001"
		const addresswRUq8U = accounts[4]
		const addressvkAmTE2 = accounts[5]
		const intXnTkB59 = BigInt("321")
		const intH4WSaMC = BigInt("419")
		const addresskhB7fxp = accounts[2]
		const addresssVtmzUr = accounts[0]
		const byteKe8avE = "0x151f11040d050619050716181b1e1209121e1e010e151d0e11081214141c1417"
		const uintpRU7ftj = BigInt("382")
		const bytes32WybtRsM = await VatkqIYVgH.slip.call(bytelvlWstB, addressXmg53XX, intDwcQ2y8, {from: accounts[0]});
//		const bytes32kAzZMIs = await VatkqIYVgH.file.call(byteMOWNEAu, byteraygILI, uintUrdEaYM, {from: accounts[0]});
//		const bytes32Y3fcaS = await VatkqIYVgH.slip.call(byteMFajFUK, addressWiYhFz1, intnZ1BjL4, {from: accounts[0]});
//		const bytes32Mk4rEo7 = await VatkqIYVgH.init.call(byteRwF902O, {from: accounts[0]});
//		const addressPoxRNf = await VatkqIYVgH.move.call(addresswRUq8U, addresszYGcDDd, uintKZyeiom, {from: accounts[3]});
//		const addressoBCMHR5 = await VatkqIYVgH.nope.call(addressvkAmTE2, {from: accounts[0]});
//		const bytes32EdbvBoP = await VatkqIYVgH.fork.call(byteKe8avE, addresssVtmzUr, addresskhB7fxp, intH4WSaMC, intXnTkB59, {from: accounts[4]});
//		const uintwiz8UWI = await VatkqIYVgH.heal.call(uintpRU7ftj, {from: accounts[4]});

		await expect(VatkqIYVgH.file.call(byteMOWNEAu, byteraygILI, uintUrdEaYM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatBMWN1cj = await Vat.new({from: accounts[1]});
		const uintb4Setv = BigInt("1988")
		const bytet5DlCz3 = "0x1814071e1e010902091e030d09060300131511041f0f1d0c1f0a0a1c021e1a1c"
		const intcU05T7H = BigInt("663")
		const addressIA4PtqQ = accounts[0]
		const bytehLsTSgz = "0x1a0b0f031a1f1610010d11001b0c201b1d0620160d1a1f18030a180d201f170b"
		const addressY5t4I39 = accounts[1]
		const uintCUplWRc = BigInt("557")
		const byteoRmTs3r = "0x0e0a1d1b0b1b0a0d1f11160c030c07110a0b040d18160e1d0c0e110c0b02100c"
		const byteoQ0fh58 = "0x17090c1b070c06030e171f00160d120714131c0d111d0c1b1f151111101c140f"
//		const bytes32akwFpDY = await VatBMWN1cj.file.call(bytet5DlCz3, uintb4Setv, {from: accounts[3]});
//		await VatBMWN1cj.note.call({from: accounts[3]});
//		const bytes32iKYjAmf = await VatBMWN1cj.slip.call(bytehLsTSgz, addressIA4PtqQ, intcU05T7H, {from: accounts[0]});
//		const addressdw9TrRk = await VatBMWN1cj.nope.call(addressY5t4I39, {from: accounts[2]});
//		const bytes32dDJ6Rj0 = await VatBMWN1cj.file.call(byteoQ0fh58, byteoRmTs3r, uintCUplWRc, {from: accounts[4]});

		await expect(VatBMWN1cj.file.call(bytet5DlCz3, uintb4Setv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatw0ufwEx = await Vat.new({from: accounts[1]});
		const intysjiI4J = BigInt("995")
		const intc6Q8N7F = BigInt("-1297")
		const address0leUaW = accounts[2]
		const address7qvTOa = accounts[1]
		const bytedAWYeDi = "0x0d14160d0b1e091f1a061b0d1804130d17071c0804140412070107061a1b031d"
		const uintaLTRAxA = BigInt("544")
		const addressAF2C6el = accounts[3]
		const addressasQ3nQ = accounts[0]
		const bytePeYwdI = "0x1d1a10130d101609041c022017191e1a1a1a0703031b011804121a1d18000a08"
		const byteSPnUdOg = "0x1a111609191d1315101a1d1904080c0d0c0d061e0c08070f0e0403060913020c"
		const intfGEQWJa = BigInt("-1131")
		const int74Dwp8 = BigInt("-858")
		const addressWkxaaRa = accounts[4]
		const addressZV8euB4 = accounts[2]
		const addresscCzgmYw = "0x0000000000000000000000000000000000000001"
		const byteRs0AkWs = "0x0e060f0d112016171705140e1d06071d0308040a0f051119051a0016111b1b15"
		const uintqJMSmyQ = BigInt("238")
		const intEyRZDKY = BigInt("1811")
		const inthJgy6ef = BigInt("734")
		const addressjdt06zY = accounts[3]
		const addressXJq0fEB = accounts[1]
		const byteQHIRVt4 = "0x011d181f20190912081b081512171105020419020901171e0811190c1719121e"
		const intXu13Iec = BigInt("1748")
		const addressK6j8bSp = accounts[0]
		const bytep6BZHQp = "0x161d201e0e0b14011009000f0311111c1d07081d0f061f14091a071a1b041f13"
		const intKcDzKBS = BigInt("-1522")
		const addressGU6T4Cw = accounts[1]
		const bytegvmYIyO = "0x05141c1b1b001f06170107191e05100c060c09100c18121d1c041e13160e1f1f"
//		const bytes32vePvPmn = await Vatw0ufwEx.fork.call(bytedAWYeDi, address7qvTOa, address0leUaW, intc6Q8N7F, intysjiI4J, {from: accounts[1]});
//		const bytes324iLpjI = await Vatw0ufwEx.flux.call(bytePeYwdI, addressasQ3nQ, addressAF2C6el, uintaLTRAxA, {from: accounts[0]});
//		const bytes32yuWqmxF = await Vatw0ufwEx.init.call(byteSPnUdOg, {from: accounts[1]});
//		const bytes32Amz6ahc = await Vatw0ufwEx.frob.call(byteRs0AkWs, addresscCzgmYw, addressZV8euB4, addressWkxaaRa, int74Dwp8, intfGEQWJa, {from: accounts[2]});
//		const uintakCIs3J = await Vatw0ufwEx.heal.call(uintqJMSmyQ, {from: accounts[5]});
//		const bytes32eFof2ds = await Vatw0ufwEx.fork.call(byteQHIRVt4, addressXJq0fEB, addressjdt06zY, inthJgy6ef, intEyRZDKY, {from: accounts[3]});
//		const bytes32OUpVTO = await Vatw0ufwEx.slip.call(bytep6BZHQp, addressK6j8bSp, intXu13Iec, {from: accounts[3]});
//		await Vatw0ufwEx.cage.call({from: accounts[3]});
//		const bytes32m3FMBzj = await Vatw0ufwEx.slip.call(bytegvmYIyO, addressGU6T4Cw, intKcDzKBS, {from: accounts[0]});

		await expect(Vatw0ufwEx.fork.call(bytedAWYeDi, address7qvTOa, address0leUaW, intc6Q8N7F, intysjiI4J, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkqIYVgH = await Vat.new({from: accounts[0]});
		const bytecOJ5zRZ = "0x181117091712190612181e1604081b161417130d16170602170a0c0c061d170e"
		const addressm0ZCPlq = accounts[5]
		const uintqCXS9vN = BigInt("382")
		const bytes32Mk4rEo7 = await VatkqIYVgH.init.call(bytecOJ5zRZ, {from: accounts[0]});
		const addressoBCMHR5 = await VatkqIYVgH.nope.call(addressm0ZCPlq, {from: accounts[0]});
//		const uintwiz8UWI = await VatkqIYVgH.heal.call(uintqCXS9vN, {from: accounts[4]});

		await expect(VatkqIYVgH.heal.call(uintqCXS9vN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkqIYVgH = await Vat.new({from: accounts[0]});
		const uintQhzwBGD = BigInt("1216")
		const addressNewbeIh = accounts[3]
		const addressK4c4Mh = accounts[1]
		const intPz7gkHL = BigInt("-626")
		const intW75luqo = BigInt("-1425")
		const addresstd3f9h = accounts[5]
		const addressEUkxUtr = accounts[3]
		const addressAccuU1i = accounts[0]
		const byteYmd4Lip = "0x010419180e0a070e0203070b101b161715141b1409090d0a060b051011040606"
		const uintfq5W3Pi = BigInt("550")
		const byteP4z4FOP = "0x011e0505090b0a09201b1f091d1d15021a171a0614090a01090819141c0a1007"
		const bytenJGemku = "0x1b10160c071a0a10060a0c1f0303151a0f091c201910080f0716140d170a160e"
		const addresso3x8vuU = await VatkqIYVgH.suck.call(addressK4c4Mh, addressNewbeIh, uintQhzwBGD, {from: accounts[0]});
//		const bytes32l4B2OXY = await VatkqIYVgH.grab.call(byteYmd4Lip, addressAccuU1i, addressEUkxUtr, addresstd3f9h, intW75luqo, intPz7gkHL, {from: accounts[0]});
//		await VatkqIYVgH.auth.call({from: accounts[2]});
//		const bytes32kAzZMIs = await VatkqIYVgH.file.call(bytenJGemku, byteP4z4FOP, uintfq5W3Pi, {from: accounts[0]});

		await expect(VatkqIYVgH.grab.call(byteYmd4Lip, addressAccuU1i, addressEUkxUtr, addresstd3f9h, intW75luqo, intPz7gkHL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatbFV35Q = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvBFhNdE = BigInt("454")
		const addressl39qpr = accounts[3]
		const addressTiThkI = accounts[4]
		const byteiToaLbb = "0x09171210061508140219071c110d05020e1918200b0f1218181b07141d090d06"
		const uintkvlt0vT = BigInt("1198")
		const addressfpXpk0K = accounts[3]
		const addressDZqcinI = accounts[0]
		const bytes32m7WOrhl = await VatbFV35Q.flux.call(byteiToaLbb, addressTiThkI, addressl39qpr, uintvBFhNdE, {from: accounts[4]});
		const uint2og6S8 = await VatbFV35Q.heal.call(uintkvlt0vT, {from: "0x0000000000000000000000000000000000000001"});
		const addressooqGe8t = await VatbFV35Q.hope.call(addressfpXpk0K, {from: accounts[1]});
		const addressPTcAGg = await VatbFV35Q.hope.call(addressDZqcinI, {from: accounts[3]});
	});

	it('test for Vat', async () => {
		const Vatj5XoNEv = await Vat.new({from: accounts[0]});
		const addressT518Ztk = accounts[1]
		const intU00lJm7 = BigInt("1329")
		const int5pFTMP = BigInt("293")
		const addressWsir3AO = accounts[3]
		const addressaRNf5qt = accounts[0]
		const addresseAnTrHc = accounts[1]
		const byteMuSYUM = "0x1d150402140d1a120816160e091704141c0719081c010b0806181a0f11001402"
		const intbyKDM9 = BigInt("-1229")
		const intjcX2HyX = BigInt("473")
		const addressZJfKPh = accounts[2]
		const addressKmZAPyE = accounts[3]
		const addressyBLpyDX = accounts[1]
		const byteeYhdf4J = "0x0713031c0d17180f1e061c1813071e1c10180d0c111f1b08171e160d1d130617"
//		await Vatj5XoNEv.cage.call({from: accounts[0]});
//		const addressDUzbXdL = await Vatj5XoNEv.nope.call(addressT518Ztk, {from: accounts[5]});
//		const bytes32tDSMEw2 = await Vatj5XoNEv.frob.call(byteMuSYUM, addresseAnTrHc, addressaRNf5qt, addressWsir3AO, int5pFTMP, intU00lJm7, {from: accounts[2]});
//		const bytes32uB5WA36 = await Vatj5XoNEv.grab.call(byteeYhdf4J, addressyBLpyDX, addressKmZAPyE, addressZJfKPh, intjcX2HyX, intbyKDM9, {from: accounts[3]});

		await expect(Vatj5XoNEv.cage.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkqIYVgH = await Vat.new({from: accounts[0]});
		const intxmI1WlD = BigInt("-1258")
		const intbGJn6RZ = BigInt("-242")
		const addressarsdQKS = accounts[4]
		const addressWUohxHW = accounts[4]
		const bytensNDf6D = "0x06102001050a03011e021415170514100e151c06031f050a0e0107150a010e15"
		const uinth21PmUP = BigInt("1071")
		const addressdEVcuF = accounts[1]
		const addressvb65eVW = "0x0000000000000000000000000000000000000001"
		const uintG8XgbM3 = BigInt("550")
		const byteVj5w4Yt = "0x04091000041e0c0515081c101010160b1a1412131005200d1d01120d0f050a1d"
		const byteIBWfL0J = "0x1b10160c071a0a10060a0c1f0303151a0f091c201910080f0716140d170a160e"
		const bytes32TrWYxSP = await VatkqIYVgH.fork.call(bytensNDf6D, addressWUohxHW, addressarsdQKS, intbGJn6RZ, intxmI1WlD, {from: accounts[4]});
//		const addressN8WREAy = await VatkqIYVgH.move.call(addressvb65eVW, addressdEVcuF, uinth21PmUP, {from: accounts[3]});
//		const bytes32kAzZMIs = await VatkqIYVgH.file.call(byteIBWfL0J, byteVj5w4Yt, uintG8XgbM3, {from: accounts[0]});

		await expect(VatkqIYVgH.move.call(addressvb65eVW, addressdEVcuF, uinth21PmUP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkqIYVgH = await Vat.new({from: accounts[0]});
		const addresspiK1X0i = accounts[0]
		const uintI5102AK = BigInt("397")
		const addressf2Kf7NT = await VatkqIYVgH.deny.call(addresspiK1X0i, {from: accounts[0]});
//		const uintwiz8UWI = await VatkqIYVgH.heal.call(uintI5102AK, {from: accounts[4]});

		await expect(VatkqIYVgH.heal.call(uintI5102AK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatGktePVZ = await Vat.new({from: accounts[3]});
		const intRZvcHyF = BigInt("242")
		const intND4LQK7 = BigInt("1234")
		const addressWqvVVnq = accounts[0]
		const addresself7lwv = accounts[0]
		const addressBOCaaNi = accounts[3]
		const byteZaGPDxM = "0x0512171f0b1c0406121c18070605201010111a171e0d0e190417080e091c1404"
		const address6cjB3M = accounts[4]
		const intGCUO1X1 = BigInt("-1886")
		const intayPumGp = BigInt("1380")
		const addressyaAfv2L = accounts[1]
		const addressD2pTH7f = accounts[2]
		const byteFGGHp1M = "0x16020e101f071002181006041d111e0819040100031920021d04141803190401"
		const uinto4gNaBS = BigInt("1635")
		const addressCrKepwA = accounts[0]
		const addressnETY78 = accounts[0]
//		const bytes32EfYbbr = await VatGktePVZ.grab.call(byteZaGPDxM, addressBOCaaNi, addresself7lwv, addressWqvVVnq, intND4LQK7, intRZvcHyF, {from: accounts[3]});
//		const addressmnDwjJa = await VatGktePVZ.nope.call(address6cjB3M, {from: accounts[2]});
//		await VatGktePVZ.note.call({from: accounts[2]});
//		const bytes32cRDwQHW = await VatGktePVZ.fork.call(byteFGGHp1M, addressD2pTH7f, addressyaAfv2L, intayPumGp, intGCUO1X1, {from: accounts[0]});
//		const addressfKNfKqX = await VatGktePVZ.suck.call(addressnETY78, addressCrKepwA, uinto4gNaBS, {from: accounts[4]});

		await expect(VatGktePVZ.grab.call(byteZaGPDxM, addressBOCaaNi, addresself7lwv, addressWqvVVnq, intND4LQK7, intRZvcHyF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkqIYVgH = await Vat.new({from: accounts[0]});
		const uintjiN9Owm = BigInt("550")
		const byteE4AFHxN = "0x011e0505090b0a09201b1f091d1d15021a171a0614090a01090819141c0a1507"
		const bytejMJg58 = "0x1b10160c071a0a10060a0c1ffffffffc03151a0f091c201910080f0716140d170a160e"
//		const bytes32kAzZMIs = await VatkqIYVgH.file.call(bytejMJg58, byteE4AFHxN, uintjiN9Owm, {from: accounts[0]});

		await expect(VatkqIYVgH.file.call(bytejMJg58, byteE4AFHxN, uintjiN9Owm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkqIYVgH = await Vat.new({from: accounts[0]});
		const uintGDro54m = BigInt("550")
		const bytex39A6V = "0x011effffffff05090b0a09201b1f091d1d15021a171a0614090a01090819141c0a1507"
		const bytewMHlgPs = "0x1b10160c071a0a10060a0c1f0303151a0f091c201910080f0716140d170a160e"
		const addressEshTyXG = accounts[1]
		const uintSojEas0 = BigInt("733")
		const bytemuGp6zU = "0x1a16140d111905180e1f14181816120f091f0e1a10140d15110e140609000918"
//		const bytes32kAzZMIs = await VatkqIYVgH.file.call(bytewMHlgPs, bytex39A6V, uintGDro54m, {from: accounts[0]});
//		const addresspPmPmaD = await VatkqIYVgH.nope.call(addressEshTyXG, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32hPcg5n8 = await VatkqIYVgH.file.call(bytemuGp6zU, uintSojEas0, {from: accounts[3]});

		await expect(VatkqIYVgH.file.call(bytewMHlgPs, bytex39A6V, uintGDro54m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatcPhi6VE = await Vat.new({from: accounts[3]});
		const addressddkE8DG = "0x0000000000000000000000000000000000000001"
		const uintGm2Z3B = BigInt("1194")
		const bytezxJx7In = "0x06120a161805100218110c1403180d141512000b1e190e0b080d070b16051513"
		const addresssUw1eLT = accounts[2]
		const addresspZbBhdO = await VatcPhi6VE.rely.call(addressddkE8DG, {from: accounts[3]});
//		const bytes32mO2DOlj = await VatcPhi6VE.file.call(bytezxJx7In, uintGm2Z3B, {from: accounts[5]});
//		const addressHyXcH9X = await VatcPhi6VE.hope.call(addresssUw1eLT, {from: accounts[2]});
//		await VatcPhi6VE.auth.call({from: accounts[4]});

		await expect(VatcPhi6VE.file.call(bytezxJx7In, uintGm2Z3B, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkqIYVgH = await Vat.new({from: accounts[0]});
		const uintfTCTugQ = BigInt("550")
		const byteEA2Zi3 = "0xfffffffd1e0505090b0a09201b1f091d1d15021a171a0614090a01090819141c0a1507"
		const byteBgq2e7u = "0x1b10160c071a0a10060a0c1f0303151a0f091c201910080f0716140d170a160e"
		const intDyDcFSE = BigInt("181")
		const intGsMCwBF = BigInt("-17")
		const addressidjQU5j = accounts[3]
		const addressk7ZPL9H = accounts[0]
		const byteoDrAeeG = "0x0b091b1d020d190e0d1c1b1d0a1f1d1600091c020a1116001a0108021d0d0309"
//		const bytes32kAzZMIs = await VatkqIYVgH.file.call(byteBgq2e7u, byteEA2Zi3, uintfTCTugQ, {from: accounts[0]});
//		const bytes32zlgcnyb = await VatkqIYVgH.fork.call(byteoDrAeeG, addressk7ZPL9H, addressidjQU5j, intGsMCwBF, intDyDcFSE, {from: accounts[1]});

		await expect(VatkqIYVgH.file.call(byteBgq2e7u, byteEA2Zi3, uintfTCTugQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkqIYVgH = await Vat.new({from: accounts[0]});
		const uinttnrqUC9 = BigInt("550")
		const byteql6VIJ8 = "0x011e0505090b0a09201b1f091d1d15021a171a0614090afffffffd090819141c0a1507"
		const byteRv2A0v9 = "0x1b10160c071a0a10060a0c1f0303151a0f091c201910080f0716140d170a160e"
		const uintyCKawog = BigInt("637")
		const addressJp7R0i7 = accounts[2]
		const addressPjnsHHW = "0x0000000000000000000000000000000000000001"
		const uint1uKAQ6 = BigInt("398")
//		const bytes32kAzZMIs = await VatkqIYVgH.file.call(byteRv2A0v9, byteql6VIJ8, uinttnrqUC9, {from: accounts[0]});
//		const addresspRlebcb = await VatkqIYVgH.suck.call(addressPjnsHHW, addressJp7R0i7, uintyCKawog, {from: accounts[1]});
//		const uintwiz8UWI = await VatkqIYVgH.heal.call(uint1uKAQ6, {from: accounts[4]});

		await expect(VatkqIYVgH.file.call(byteRv2A0v9, byteql6VIJ8, uinttnrqUC9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})