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
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const uintDUi44Q = BigInt("956")
		const addressFVx6I7O = accounts[0]
		const addresstQxoSAv = accounts[5]
		const byteYbaVwf = "0x010d1a0201181d091b0a0c0d0d0e0b0e10190e1e14141519041f090e09170217"
		const intFmW8zJN = BigInt("1539")
		const intadQy3IM = BigInt("-480")
		const addressl6c7Mk = accounts[4]
		const addressvJTOZ7q = accounts[4]
		const addressNlpbHNk = accounts[0]
		const bytejzeiLn = "0x04071e0f1812071612020b110911070604130c141d0e080c111a0019181b1907"
		const bytenLeHww4 = "0x030b1e1210191c1f08040405070a1818180217161502080a1c1b0e1716021b08"
//		const bytes32lW5TFF = await VatUmLnMvd.flux.call(byteYbaVwf, addresstQxoSAv, addressFVx6I7O, uintDUi44Q, {from: accounts[2]});
//		const bytes32pWvgpW = await VatUmLnMvd.frob.call(bytejzeiLn, addressNlpbHNk, addressvJTOZ7q, addressl6c7Mk, intadQy3IM, intFmW8zJN, {from: accounts[1]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(bytenLeHww4, {from: accounts[1]});
//		await VatUmLnMvd.note.call({from: accounts[2]});

		await expect(VatUmLnMvd.flux.call(byteYbaVwf, addresstQxoSAv, addressFVx6I7O, uintDUi44Q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const addressvpoiU9g = accounts[1]
		const byteoz2HzZP = "0x030b1e1213191c1f08040405070a1818180217161502080a1c1b0e1716021b03"
		const addressTOH9Fk7 = await VatUmLnMvd.nope.call(addressvpoiU9g, {from: accounts[1]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteoz2HzZP, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteoz2HzZP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const uintCTsN3af = BigInt("1339")
		const addressv3FMwj0 = accounts[4]
		const addressz67nC3a = accounts[4]
		const uint4V2GqG = BigInt("813")
		const addressFMCDaj9 = accounts[5]
		const addresszOmkMC3 = accounts[5]
		const byteutRda1T = "0x030b1e1210191c1f08040405070a1818180217161502080a1c1b0e1716001b03"
		const uintQzkqtNg = BigInt("1451")
		const addressst05c99 = accounts[1]
		const addressp9HWmt9 = accounts[5]
//		const addressONWzjf3 = await VatUmLnMvd.move.call(addressz67nC3a, addressv3FMwj0, uintCTsN3af, {from: accounts[4]});
//		const addressVohX5BP = await VatUmLnMvd.move.call(addresszOmkMC3, addressFMCDaj9, uint4V2GqG, {from: accounts[3]});
//		await VatUmLnMvd.auth.call({from: accounts[1]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteutRda1T, {from: accounts[1]});
//		const addressOmspar = await VatUmLnMvd.move.call(addressp9HWmt9, addressst05c99, uintQzkqtNg, {from: accounts[4]});

		await expect(VatUmLnMvd.move.call(addressz67nC3a, addressv3FMwj0, uintCTsN3af, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const uintLtjY1AY = BigInt("65")
		const byteTSo6pZ = "0x171f191c0a0d0e0a18011a1f051b1b180312151d0f020c131c0d031505160714"
		const byteGYbe5Fu = "0x030b1e1210191c1f08040405070a1818180217161502080a1c1b0e1716021b03"
//		const bytes32Oe0TpGy = await VatUmLnMvd.file.call(byteTSo6pZ, uintLtjY1AY, {from: accounts[1]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteGYbe5Fu, {from: accounts[1]});

		await expect(VatUmLnMvd.file.call(byteTSo6pZ, uintLtjY1AY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const uintkay8Lbk = BigInt("226")
		const intDL7H9De = BigInt("1789")
		const intuhEfAl2 = BigInt("-1270")
		const addresspnM4Xr = accounts[5]
		const addressNN4FqeN = accounts[2]
		const bytezbDv65b = "0x021d1c061a0e021b18101918201f0e1a12101316171811200915131f061f0e17"
		const byteGV3tezc = "0x030b1e1210191c1f08040405070a1818180217161502080a191b0e1716021b03"
//		const uintMLiSNeF = await VatUmLnMvd.heal.call(uintkay8Lbk, {from: accounts[4]});
//		const bytes32vzWtoDP = await VatUmLnMvd.fork.call(bytezbDv65b, addressNN4FqeN, addresspnM4Xr, intuhEfAl2, intDL7H9De, {from: accounts[2]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteGV3tezc, {from: accounts[1]});

		await expect(VatUmLnMvd.heal.call(uintkay8Lbk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const intnAjAiZy = BigInt("-1160")
		const intQBFcZ8c = BigInt("886")
		const addressGbFvnAt = accounts[2]
		const addressCcv9Y2H = accounts[0]
		const bytezAtxmx2 = "0x120a080e19051517181a0e0b06051e0a161014051413051307010e03011b160c"
		const bytez6BLD3I = "0x0804171a0405001920171b2009171b1f0f08011816170801121e1d1a0d151518"
		const uintbkzeGrh = BigInt("990")
		const byteI4qqzUv = "0x091816101b081d1e0c000e101b0b1d1d0b0e060609160b11101516091d1f1d1d"
		const bytezqscVHR = "0x150e1d030d110c0d0d04001f1b121d070c021d0b1e041003121405140b0a0802"
		const bytejHmwZ4t = "0x13071a1702101507070c1b0f001f0b0f181f130500001b1f14031e040e020815"
//		const bytes32dXToGLM = await VatUmLnMvd.fork.call(bytezAtxmx2, addressCcv9Y2H, addressGbFvnAt, intQBFcZ8c, intnAjAiZy, {from: accounts[1]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(bytez6BLD3I, {from: accounts[1]});
//		const bytes32mlTRp0e = await VatUmLnMvd.file.call(bytezqscVHR, byteI4qqzUv, uintbkzeGrh, {from: accounts[0]});
//		const bytes32fg0e43o = await VatUmLnMvd.init.call(bytejHmwZ4t, {from: accounts[5]});

		await expect(VatUmLnMvd.fork.call(bytezAtxmx2, addressCcv9Y2H, addressGbFvnAt, intQBFcZ8c, intnAjAiZy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrxQKB4y = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const intlQNe4x9 = BigInt("1687")
		const intrAUbRWV = BigInt("-1566")
		const addressoXGYWgy = accounts[5]
		const addressOpcmefX = accounts[3]
		const addressH68dGt5 = accounts[4]
		const byteW8dV49e = "0x190c1616031d04141c13070d08140f091b1b1d1f0b1a0e030c01030d13032007"
		const intLgzKh1V = BigInt("600")
		const addressA4oQa1C = accounts[0]
		const bytePkPFsbb = "0x1c0d0b01071c1419130600151a121c09201120190819180f1a1d0306111f0115"
		const byteOTwMX7a = "0x1e020a131d17170d0e070e18051f021c150b07030817031616150319161c1e1e"
		const bytes32WTMHApZ = await VatrxQKB4y.grab.call(byteW8dV49e, addressH68dGt5, addressOpcmefX, addressoXGYWgy, intrAUbRWV, intlQNe4x9, {from: accounts[4]});
		const bytes32vU1vWa = await VatrxQKB4y.slip.call(bytePkPFsbb, addressA4oQa1C, intLgzKh1V, {from: accounts[4]});
		const bytes32rKdhs6Z = await VatrxQKB4y.init.call(byteOTwMX7a, {from: accounts[1]});
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const addressBKl3tKO = accounts[4]
		const uintk268M71 = BigInt("910")
		const addressMN1cjU6 = accounts[0]
		const addressrMLbKRL = accounts[5]
		const byteQkcWYEU = "0x0a171605160902200e0a1f1e080311170d11131717150e0b1d180e1a050f0c1a"
		const byteV5fkFM1 = "0x030b1e1210191c1f08040405070a1818180217161502080a1c1b0e1716021b03"
		const uintj9WtJGx = BigInt("1491")
		const addresspXoSDT5 = accounts[5]
		const addressz24pFH = accounts[5]
		const bytes3HqkUO = "0x01191912180801100e0b091216031c15171509131a12061f15061d141c111a06"
		const addressAQm8hVY = await VatUmLnMvd.hope.call(addressBKl3tKO, {from: accounts[4]});
//		const bytes32hRW0OYK = await VatUmLnMvd.flux.call(byteQkcWYEU, addressrMLbKRL, addressMN1cjU6, uintk268M71, {from: accounts[0]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteV5fkFM1, {from: accounts[1]});
//		const bytes32Pyn0bA = await VatUmLnMvd.flux.call(bytes3HqkUO, addressz24pFH, addresspXoSDT5, uintj9WtJGx, {from: accounts[2]});

		await expect(VatUmLnMvd.flux.call(byteQkcWYEU, addressrMLbKRL, addressMN1cjU6, uintk268M71, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const bytei2jNNx7 = "0x030b1e1210191c1f0804fffffffe05070a1818180217161502080a1c1b0e1716021b03"
		const intXR7IjnJ = BigInt("-1095")
		const intJRRKMI = BigInt("125")
		const addressvv2NFU4 = accounts[1]
		const addressgCfiSJ2 = accounts[5]
		const bytepMoNbuU = "0x010f16201e1a17141712131f1c020b0a121b02171e07071b03101a1e121b0a0a"
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(bytei2jNNx7, {from: accounts[1]});
//		const bytes32vXLYaXm = await VatUmLnMvd.fork.call(bytepMoNbuU, addressgCfiSJ2, addressvv2NFU4, intJRRKMI, intXR7IjnJ, {from: accounts[5]});

		await expect(VatUmLnMvd.init.call(bytei2jNNx7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const intv7LiVoX = BigInt("-729")
		const addressub2ZNGC = accounts[0]
		const byteEG8364P = "0x040c110a001f160210060a15011d130e151213031711001d160b0714151d1d0d"
		const bytewMmxtVm = "0x030b1e12101d1c1f08040405070a1818180217161502080a1c1b0e1716021b03"
//		await VatUmLnMvd.cage.call({from: accounts[3]});
//		await VatUmLnMvd.cage.call({from: "0x0000000000000000000000000000000000000001"});
//		const bytes32YdfsMw7 = await VatUmLnMvd.slip.call(byteEG8364P, addressub2ZNGC, intv7LiVoX, {from: accounts[5]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(bytewMmxtVm, {from: accounts[1]});

		await expect(VatUmLnMvd.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const byteyBbL2fB = "0x030b1e1210191c1f08040405070a181818fffffffa17161502080a1c1b0e1716021b03"
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteyBbL2fB, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteyBbL2fB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const byteiv89sZL = "0x030b1e1210191c1f08040405070a1818180217161502080a1c1b0e1716fffffffc1b03"
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteiv89sZL, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteiv89sZL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const byteb0OJZFE = "0x030b1e1210191c1f08ffffffff0405070a1818180217161502080a1c1b0e1716021b03"
		const uintQRYeuHp = BigInt("1163")
		const addressjQlZY0O = accounts[0]
		const addressH7BM4ET = accounts[2]
		const byteOMDwFjF = "0x1f070a1c080f141b1220160305000e1005020c141b1f1d1613060a030508190c"
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteb0OJZFE, {from: accounts[1]});
//		const bytes32qeWIEKg = await VatUmLnMvd.flux.call(byteOMDwFjF, addressH7BM4ET, addressjQlZY0O, uintQRYeuHp, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteb0OJZFE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const intHrTPki = BigInt("873")
		const addressw4tiEZM = accounts[2]
		const byteDPRgPb = "0x13000a1504161819081816111b0e1a050603101b0f1b07030a110617080d031a"
		const byteyHmGRKx = "0x061e140c18151a0c0b130319071f0f140418041604111905200e1a1a0f190e0a"
		const bytes32QiQNRe = await VatUmLnMvd.slip.call(byteDPRgPb, addressw4tiEZM, intHrTPki, {from: accounts[3]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteyHmGRKx, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteyHmGRKx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const bytef7MYHwU = "0x030b1e1210191c1f08040405070a181818fffffffe17161502080a1c1b0e1716021b03"
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(bytef7MYHwU, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(bytef7MYHwU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const uintm2PVk6J = BigInt("467")
		const addressWEeWDg = accounts[0]
		const addressVPVpMAP = accounts[2]
		const byteMp0t2F7 = "0x030b1e1210191c1f08040405070a1818180217161502080a1c1b0e1716021b03"
		const addresssmS8HFm = await VatUmLnMvd.suck.call(addressVPVpMAP, addressWEeWDg, uintm2PVk6J, {from: accounts[3]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteMp0t2F7, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteMp0t2F7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const byten8wWyQW = "0x1f00021c1120041e1f1f111006100b1b12070d0d1813030e191e020604141c12"
		const byteSPf8waD = "0x030b1e1210191c1f08040405070a1818180217161502080a1c1b0e1416021b03"
		const bytes32GrqYhO = await VatUmLnMvd.init.call(byten8wWyQW, {from: accounts[3]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteSPf8waD, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteSPf8waD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const byteq6Pju5 = "0x030b1e1210191c1f08fffffffe0405070a1818180217161502080a1c1b0e1716021b03"
		const uintobrVtpx = BigInt("301")
		const byteWrG4t4G = "0x011b031007061f0b1b030f10030a1408041416071f10050d180d191c150c0612"
		const bytecdvTuXz = "0x03181c0e030d1e16190a0d1315030c0c15010a120f0d180d0d02021f16010a14"
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteq6Pju5, {from: accounts[1]});
//		const bytes32xJPpeFn = await VatUmLnMvd.file.call(bytecdvTuXz, byteWrG4t4G, uintobrVtpx, {from: accounts[0]});

		await expect(VatUmLnMvd.init.call(byteq6Pju5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const bytexbX5QrU = "0x030b1e1210191c1f08040405070a181818fffffffc17161502080a1c1b0e1716021b03"
		const uintDIQI7ut = BigInt("1996")
		const addressYNTukk = accounts[3]
		const addressyToS9IQ = accounts[4]
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(bytexbX5QrU, {from: accounts[1]});
//		const addressMh6Qr8p = await VatUmLnMvd.suck.call(addressyToS9IQ, addressYNTukk, uintDIQI7ut, {from: accounts[4]});

		await expect(VatUmLnMvd.init.call(bytexbX5QrU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const addressTeJYLSm = accounts[2]
		const uinteQY9xd3 = BigInt("1943")
		const addressizuMRQc = accounts[3]
		const addressjDXefED = accounts[0]
		const byteHcf6iUc = "0x030b1e1210191c1f08040405070a1818180217161502080a1c1b0e1716021b03"
		const intGBMldZk = BigInt("853")
		const intOicutkz = BigInt("-144")
		const addresscjMAMxj = accounts[3]
		const addressx7z829C = accounts[5]
		const bytekoO0djz = "0x1f1f1818010c0912080704061c11121c030b120c10091b020e1d1c0620040b0b"
		const addressxsy78la = await VatUmLnMvd.rely.call(addressTeJYLSm, {from: accounts[3]});
//		const addressLf6UMAi = await VatUmLnMvd.suck.call(addressjDXefED, addressizuMRQc, uinteQY9xd3, {from: accounts[0]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteHcf6iUc, {from: accounts[1]});
//		const bytes32kRvWlek = await VatUmLnMvd.fork.call(bytekoO0djz, addressx7z829C, addresscjMAMxj, intOicutkz, intGBMldZk, {from: accounts[4]});

		await expect(VatUmLnMvd.suck.call(addressjDXefED, addressizuMRQc, uinteQY9xd3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VataQCGT0J = await Vat.new({from: accounts[0]});
		const addresshjt3x77 = accounts[0]
		const intiryVQ8C = BigInt("689")
		const addressqB1k4bT = accounts[3]
		const byteVKiX0hp = "0x10081014061017110b161c190a16070006180408150a120e1b20071f11060f0a"
		const uintitBhRC4 = BigInt("1341")
		const addressnjwy16J = accounts[4]
		const addresssd4NJr = "0x0000000000000000000000000000000000000001"
		const uintpJutCt8 = BigInt("1047")
		const address0S4enk = accounts[3]
		const addressbDwWTHW = accounts[2]
		const addresssxRBUT = await VataQCGT0J.hope.call(addresshjt3x77, {from: accounts[0]});
		const bytes32x2Nxyjv = await VataQCGT0J.fold.call(byteVKiX0hp, addressqB1k4bT, intiryVQ8C, {from: accounts[0]});
//		const addressRNUHOA8 = await VataQCGT0J.move.call(addresssd4NJr, addressnjwy16J, uintitBhRC4, {from: accounts[2]});
//		const addressvTQDNo = await VataQCGT0J.suck.call(addressbDwWTHW, address0S4enk, uintpJutCt8, {from: accounts[2]});

		await expect(VataQCGT0J.move.call(addresssd4NJr, addressnjwy16J, uintitBhRC4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const intBANJHG = BigInt("-1722")
		const intNMrpWxs = BigInt("-1597")
		const addressaHuleBN = accounts[2]
		const addressrdIaNie = accounts[3]
		const addresse6gFco = accounts[4]
		const byteVsg0nqL = "0x0b06011e05190b1406150f0b15120c0a0619161d150f0e0c151e06111f0a0800"
		const byteCgvITlZ = "0x09191b0814191a0a19190305201c1d150219171b071c1e0c190d05080d1c1a18"
//		const bytes32bUkaMX = await VatUmLnMvd.grab.call(byteVsg0nqL, addresse6gFco, addressrdIaNie, addressaHuleBN, intNMrpWxs, intBANJHG, {from: accounts[3]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteCgvITlZ, {from: accounts[1]});

		await expect(VatUmLnMvd.grab.call(byteVsg0nqL, addresse6gFco, addressrdIaNie, addressaHuleBN, intNMrpWxs, intBANJHG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const byteIkwjK6 = "0x030b1e1210191c1f0804fffffffd05070a1818180217161502080a1c1b0e1716021b03"
		const addressKVbeIwA = "0x0000000000000000000000000000000000000001"
		const uintogbhN1i = BigInt("429")
		const addressX7kX4iG = accounts[3]
		const addressSbdCz30 = accounts[3]
		const byteE0VaUeS = "0x010f1c040e131316200e0603140f0d0b19151b0c0a0e0c05041c0a0905011806"
		const addresspZIjW1 = accounts[1]
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteIkwjK6, {from: accounts[1]});
//		const addressHLHUiT6 = await VatUmLnMvd.deny.call(addressKVbeIwA, {from: accounts[2]});
//		const bytes32wrQG7E9 = await VatUmLnMvd.flux.call(byteE0VaUeS, addressSbdCz30, addressX7kX4iG, uintogbhN1i, {from: accounts[1]});
//		const addressmYqCO9y = await VatUmLnMvd.nope.call(addresspZIjW1, {from: accounts[0]});

		await expect(VatUmLnMvd.init.call(byteIkwjK6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const byteyrXMKXW = "0x030b1e1210191c1f0804fffffffb05070a1818180217161502080a1c1b0e1716021b03"
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteyrXMKXW, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteyrXMKXW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const addressfYDrqIw = accounts[3]
		const bytelDguBr9 = "0x030b1e1510191c1f08040405070a1818180217161502080a1c1b0e1716021b03"
		const addressTflEa24 = await VatUmLnMvd.deny.call(addressfYDrqIw, {from: accounts[3]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(bytelDguBr9, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(bytelDguBr9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const byteWXYqQbZ = "0xffffffff0b1e1210191c1f08040405070a1818180217161502080a1c1b0e1716021b03"
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteWXYqQbZ, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteWXYqQbZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const byteNokq2vn = "0x030b1e1210191c1f08040405070a18181802171615fffffffd080a1c1b0e1716021b03"
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteNokq2vn, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteNokq2vn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const intOID1bS = BigInt("1561")
		const addresseBQ6RQD = accounts[1]
		const byteBXVRDm = "0x1f070516011a13141f131b051c050010191209040a01120b030308060f1c1d02"
		const byteYCFRAww = "0x030b1e1210191c1f08040405070a1818180217161502080a1c1b0e1716021bffffffff"
		const bytes32AbH83Wv = await VatUmLnMvd.fold.call(byteBXVRDm, addresseBQ6RQD, intOID1bS, {from: accounts[3]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(byteYCFRAww, {from: accounts[1]});

		await expect(VatUmLnMvd.init.call(byteYCFRAww, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUmLnMvd = await Vat.new({from: accounts[3]});
		const intrlKnYa = BigInt("-1326")
		const intfFwANee = BigInt("-1403")
		const addressXZ7CZQ = accounts[3]
		const addressjDksYWZ = accounts[3]
		const byte50IQg8 = "0x101e0f1b160e1214100419160812090b09150d0f1d16001c1501040117170313"
		const uintlXPoO3F = BigInt("1394")
		const bytehgzEj6V = "0x00110a0303100d1c191d0820151306090f031a01070b18081d0b1218021c1016"
		const bytefg1Hs25 = "0x030b1e1210191c1f08040405070a1f18180217161502080a1c1b0e1716021b03"
//		const bytes32IMLgzoK = await VatUmLnMvd.fork.call(byte50IQg8, addressjDksYWZ, addressXZ7CZQ, intfFwANee, intrlKnYa, {from: accounts[5]});
//		const bytes32p4nHGpS = await VatUmLnMvd.file.call(bytehgzEj6V, uintlXPoO3F, {from: accounts[2]});
//		const bytes32o9ROQO5 = await VatUmLnMvd.init.call(bytefg1Hs25, {from: accounts[1]});

		await expect(VatUmLnMvd.fork.call(byte50IQg8, addressjDksYWZ, addressXZ7CZQ, intfFwANee, intrlKnYa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})