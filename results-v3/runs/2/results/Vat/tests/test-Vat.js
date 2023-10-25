const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const addresswkQetKk = accounts[3]
		const addressEfIR2Ii = accounts[1]
		const addressyb0IPBd = await VatU3EG2d5.deny.call(addresswkQetKk, {from: accounts[2]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addressEfIR2Ii, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.deny.call(addresswkQetKk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatxvh8D6o = await Vat.new({from: accounts[2]});
		const intdpd5SY = BigInt("726")
		const addressXUXkTDo = accounts[3]
		const byteU6pJgco = "0x091e060a12120f1c0d03011f02021c1c011e1c0b0b1e17010f201e061a0a060a"
		const uintmb3dm8N = BigInt("38")
		const addressRV0DsP2 = "0x0000000000000000000000000000000000000001"
		const addressoFurAqw = accounts[1]
		const uintEa6EdAT = BigInt("204")
		const intpcvJMYS = BigInt("-937")
		const intTk6zNPL = BigInt("333")
		const addressAdZWkf = accounts[5]
		const addressf0mB3IS = accounts[5]
		const bytexry0rao = "0x14040e0e0f130c03020b1d1d14141c080b0c001c0905161a0f0f121f06191e11"
		const uintmwkSzfW = BigInt("419")
		const addresssSY0pZg = accounts[2]
		const addressQB69je = accounts[1]
		const uintqBBoZkN = BigInt("106")
		const addressmmITzJr = accounts[0]
		const addressuDYWCmA = accounts[2]
		const byteh9fvuoG = "0x0e0718111a0814011d1d0b0d0710101b111009190a011d0215180217161d1c10"
		const bytes32DpBfu7x = await Vatxvh8D6o.slip.call(byteU6pJgco, addressXUXkTDo, intdpd5SY, {from: accounts[2]});
		const addressm6mJmI0 = await Vatxvh8D6o.suck.call(addressoFurAqw, addressRV0DsP2, uintmb3dm8N, {from: accounts[1]});
		const uintgMNKj7v = await Vatxvh8D6o.heal.call(uintEa6EdAT, {from: accounts[3]});
		const bytes32m5jxi0m = await Vatxvh8D6o.fork.call(bytexry0rao, addressf0mB3IS, addressAdZWkf, intTk6zNPL, intpcvJMYS, {from: accounts[3]});
		const addressYw4oBru = await Vatxvh8D6o.move.call(addressQB69je, addresssSY0pZg, uintmwkSzfW, {from: accounts[5]});
		const bytes32UJOFSKD = await Vatxvh8D6o.flux.call(byteh9fvuoG, addressuDYWCmA, addressmmITzJr, uintqBBoZkN, {from: accounts[1]});

		await expect(Vatxvh8D6o.suck.call(addressoFurAqw, addressRV0DsP2, uintmb3dm8N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VathxewIBA = await Vat.new({from: accounts[4]});
		const uintTLCGouN = BigInt("1478")
		const byte2clarn = "0x1a171a1d1413070e1b040d0a070214170d1e1809100e1501090b0c051b040319"
		const addressQTtRe8d = accounts[3]
		const byteZLXqrCa = "0x0317140c1b110517071013080206031314081a0c03190f0518040411060d0a15"
		const bytes32oZLMvMD = await VathxewIBA.file.call(byte2clarn, uintTLCGouN, {from: accounts[4]});
		const addressfH1TvEV = await VathxewIBA.hope.call(addressQTtRe8d, {from: accounts[1]});
		await VathxewIBA.note.call({from: "0x0000000000000000000000000000000000000001"});
		const bytes32q8qJIpS = await VathxewIBA.init.call(byteZLXqrCa, {from: accounts[0]});

		await expect(VathxewIBA.file.call(byte2clarn, uintTLCGouN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat3ix1RL = await Vat.new({from: accounts[2]});
		const addressr4NiS4M = accounts[5]
		const uintW2foSw = BigInt("1865")
		const addressYmqC6R6 = accounts[2]
		const addressNk5ElBp = accounts[3]
		const byteZdnIOT = "0x051c18021f171f0920111a020e12021f1c03170b00191a1c1a12010400070d12"
		const addresswyVYLCt = await Vat3ix1RL.hope.call(addressr4NiS4M, {from: accounts[2]});
		await Vat3ix1RL.note.call({from: accounts[1]});
		const bytes32OHoJwB = await Vat3ix1RL.flux.call(byteZdnIOT, addressNk5ElBp, addressYmqC6R6, uintW2foSw, {from: accounts[2]});

		await expect(Vat3ix1RL.note.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatSnO7ikL = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uint11a1yE = BigInt("1489")
		const addressUZTrI6 = accounts[0]
		const addressTHxQhg = accounts[0]
		const bytenouRTdE = "0x1b191e161c10001d19051d011f1215070909091b071610170303091801181b11"
		const uintANGClNF = BigInt("1003")
		const uintU0G6iTf = BigInt("925")
		const addressPTGTddJ = accounts[4]
		const addressclelUkb = accounts[0]
		const byteiXWLpse = "0x150e151b0a1e051b100c0d1c1b00181a1b07151911170b151e1d1e0416171c02"
		const bytes32YdE6wl3 = await VatSnO7ikL.flux.call(bytenouRTdE, addressTHxQhg, addressUZTrI6, uint11a1yE, {from: accounts[4]});
		const uintyufP6mM = await VatSnO7ikL.heal.call(uintANGClNF, {from: accounts[0]});
		const bytes32eFWyMfl = await VatSnO7ikL.flux.call(byteiXWLpse, addressclelUkb, addressPTGTddJ, uintU0G6iTf, {from: accounts[0]});
	});

	it('test for Vat', async () => {
		const VatCfxFz7F = await Vat.new({from: accounts[0]});
		const uintLdlxz74 = BigInt("1447")
		const uintp9ZUwZ5 = BigInt("1216")
		const uintrpu36Ku = await VatCfxFz7F.heal.call(uintLdlxz74, {from: accounts[3]});
		const uintWz1Dhyw = await VatCfxFz7F.heal.call(uintp9ZUwZ5, {from: accounts[1]});

		await expect(VatCfxFz7F.heal.call(uintLdlxz74, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const uintovX6EJw = BigInt("559")
		const addressAVeyA9k = accounts[3]
		const addressW8jt2t2 = accounts[1]
		const intrWQV5cI = BigInt("1062")
		const addressXAp9EY = accounts[1]
		const byteElT42O0 = "0x1c060317191f1a141914170509070c0b0009080514200e131a180d0d1d171112"
		const addressMmBuxUM = accounts[3]
		const addressuGJC5fk = accounts[2]
		const addressQRxfxW = await VatU3EG2d5.move.call(addressW8jt2t2, addressAVeyA9k, uintovX6EJw, {from: accounts[0]});
		const bytes326U3E6I = await VatU3EG2d5.slip.call(byteElT42O0, addressXAp9EY, intrWQV5cI, {from: "0x0000000000000000000000000000000000000001"});
		const addressyb0IPBd = await VatU3EG2d5.deny.call(addressMmBuxUM, {from: accounts[2]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addressuGJC5fk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.move.call(addressW8jt2t2, addressAVeyA9k, uintovX6EJw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const intEGXNQF = BigInt("271")
		const inthSX84AR = BigInt("472")
		const addressetZYiS = accounts[1]
		const addressc7U8KQP = accounts[3]
		const bytecWlclGs = "0x0e13000c150c09100c0a0b080e02041415090a0712180a181d021f0f06112017"
		const addressn1uDSAS = accounts[3]
		const addressJOwJlrU = accounts[1]
		const bytes32ai6WFHH = await VatU3EG2d5.fork.call(bytecWlclGs, addressc7U8KQP, addressetZYiS, inthSX84AR, intEGXNQF, {from: accounts[3]});
		const addressyb0IPBd = await VatU3EG2d5.deny.call(addressn1uDSAS, {from: accounts[2]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addressJOwJlrU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.fork.call(bytecWlclGs, addressc7U8KQP, addressetZYiS, inthSX84AR, intEGXNQF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatjwBSxI7 = await Vat.new({from: accounts[1]});
		const uintSMNANtV = BigInt("210")
		const addressKXCRPNg = accounts[4]
		const addressrOvNVzX = accounts[4]
		const bytepCttXpr = "0x1e140a0819171e1410060014101c1306021d1801090715040c1b100901061b1d"
		const addressHczW8YL = accounts[3]
		const bytes32f9mbGgx = await VatjwBSxI7.flux.call(bytepCttXpr, addressrOvNVzX, addressKXCRPNg, uintSMNANtV, {from: accounts[4]});
		const addressCVyDZcT = await VatjwBSxI7.deny.call(addressHczW8YL, {from: accounts[0]});
		await VatjwBSxI7.auth.call({from: accounts[0]});

		await expect(VatjwBSxI7.flux.call(bytepCttXpr, addressrOvNVzX, addressKXCRPNg, uintSMNANtV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const byteRMkUzCG = "0x0219141c1903110f0e0e0a15140b0f17171c15140a10190f0b040d081e141b16"
		const addressPMJpkNp = accounts[3]
		const addressqW1NhlT = "0x0000000000000000000000000000000000000001"
		const bytes32ceVMt26 = await VatU3EG2d5.init.call(byteRMkUzCG, {from: accounts[3]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addressPMJpkNp, {from: "0x0000000000000000000000000000000000000001"});
		const addressGkl2omC = await VatU3EG2d5.deny.call(addressqW1NhlT, {from: accounts[0]});

		await expect(VatU3EG2d5.deny.call(addressPMJpkNp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const intiyhaw1 = BigInt("1664")
		const intJbOu3d = BigInt("-1961")
		const addressBw0Fwnb = accounts[5]
		const addressyKmOtT = accounts[3]
		const addressZCXiZzU = accounts[5]
		const byteAa012R = "0x16190f0b13191d0d150a140a1e0b190a0e111007040d190804001c031613050a"
		const addressSBydD09 = accounts[3]
		const bytes32F1G2b9K = await VatU3EG2d5.frob.call(byteAa012R, addressZCXiZzU, addressyKmOtT, addressBw0Fwnb, intJbOu3d, intiyhaw1, {from: accounts[3]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addressSBydD09, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.frob.call(byteAa012R, addressZCXiZzU, addressyKmOtT, addressBw0Fwnb, intJbOu3d, intiyhaw1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const uintV0Y1soL = BigInt("1579")
		const addressAAo05n = accounts[0]
		const addressuTkWuw = accounts[3]
		const addresskVfV02v = accounts[3]
		const addressPpVVIoj = await VatU3EG2d5.suck.call(addressuTkWuw, addressAAo05n, uintV0Y1soL, {from: accounts[3]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addresskVfV02v, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.deny.call(addresskVfV02v, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const addressQBo5EyU = "0x0000000000000000000000000000000000000001"
		const addressmM33Qja = accounts[4]
		const addressdhqafwC = accounts[2]
		const addressFdqE30H = await VatU3EG2d5.nope.call(addressQBo5EyU, {from: accounts[4]});
		const addresszPsPY8U = await VatU3EG2d5.deny.call(addressmM33Qja, {from: accounts[5]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addressdhqafwC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.deny.call(addressmM33Qja, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const addressRZhG8AZ = accounts[5]
		const addressfxCrsA = accounts[3]
		const addressOtV08b = accounts[4]
		const addressiBXdu5F = await VatU3EG2d5.rely.call(addressRZhG8AZ, {from: accounts[3]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addressfxCrsA, {from: "0x0000000000000000000000000000000000000001"});
		const addressTJ75uZl = await VatU3EG2d5.deny.call(addressOtV08b, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.deny.call(addressfxCrsA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const addressqiMTEFW = accounts[4]
		const uintZHSHfQJ = BigInt("1067")
		const bytesrb0dhi = "0x01101e1d0b191d0b0119070c0a101c1f041f200b031f0c1a1011161d1f120417"
		const byteub0jy3S = "0x12090b2020030d011210130401011807071602041e14090a1e101b170a030502"
		const addressIuuqXqe = accounts[3]
		const addressa51M1zU = await VatU3EG2d5.deny.call(addressqiMTEFW, {from: accounts[3]});
		await VatU3EG2d5.cage.call({from: accounts[2]});
		const bytes32cGDU45G = await VatU3EG2d5.file.call(byteub0jy3S, bytesrb0dhi, uintZHSHfQJ, {from: accounts[3]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addressIuuqXqe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.cage.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatg0KhECl = await Vat.new({from: accounts[1]});
		const intA6LTDHI = BigInt("-621")
		const intbmTTPBQ = BigInt("1510")
		const addressON70sZ6 = accounts[3]
		const addressyddNRoG = accounts[4]
		const addressObDSRze = accounts[1]
		const byteJgJiV24 = "0x091b13131e0b1416101f0b1f050f0d0c1d201b12141410100b140a101f141f01"
		const uintngB1w4D = BigInt("648")
		const addressSv7Jfg2 = accounts[3]
		const addressLuSiaeN = accounts[0]
		const bytes32JnTpvbk = await Vatg0KhECl.grab.call(byteJgJiV24, addressObDSRze, addressyddNRoG, addressON70sZ6, intbmTTPBQ, intA6LTDHI, {from: accounts[1]});
		const addressdHS5eWa = await Vatg0KhECl.move.call(addressLuSiaeN, addressSv7Jfg2, uintngB1w4D, {from: accounts[0]});

		await expect(Vatg0KhECl.grab.call(byteJgJiV24, addressObDSRze, addressyddNRoG, addressON70sZ6, intbmTTPBQ, intA6LTDHI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const inteiDMkMd = BigInt("1655")
		const addressPzb2Pn9 = accounts[0]
		const bytewECpLA = "0x1a161b1814061516130a1111111a200d03010a040a0704190b191f200a111213"
		const intKuFEvHq = BigInt("-171")
		const addressg19G6kX = "0x0000000000000000000000000000000000000001"
		const bytethWbcg = "0x0205121d11171e1f1f1b050b0518180601081a1c072015040e0c0c01071f1405"
		const addresso81jxKE = accounts[3]
		const bytes32ojuerfo = await VatU3EG2d5.fold.call(bytewECpLA, addressPzb2Pn9, inteiDMkMd, {from: accounts[3]});
		const bytes32b9gqVd4 = await VatU3EG2d5.slip.call(bytethWbcg, addressg19G6kX, intKuFEvHq, {from: "0x0000000000000000000000000000000000000001"});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addresso81jxKE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.slip.call(bytethWbcg, addressg19G6kX, intKuFEvHq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const uintXRJ1Ee3 = BigInt("1996")
		const addressUcsUnUW = accounts[3]
		await VatU3EG2d5.cage.call({from: accounts[3]});
		const uintW1gTrg6 = await VatU3EG2d5.heal.call(uintXRJ1Ee3, {from: accounts[3]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addressUcsUnUW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatqymZILJ = await Vat.new({from: accounts[0]});
		const intzIjmzrT = BigInt("-1995")
		const intD3AYPN2 = BigInt("-388")
		const addressrFYzJDd = accounts[2]
		const addressi4FVZxk = accounts[2]
		const bytemHZDbrC = "0x05091b190f121f0e20081a0605161402101e05181c04131a0a1f161f1015170f"
		const intxh4wdSw = BigInt("1743")
		const intBuy0E4N = BigInt("-1884")
		const address1OsJpe = accounts[3]
		const address3NT7Fp = accounts[3]
		const byteDozxTWj = "0x07151c060c0d051217061b01010d0801160c1a190e121d1e071b0f070e040309"
		const addresszh0MX3E = accounts[4]
		const addressnWyhd8 = accounts[2]
		const bytes32TOyEWt = await VatqymZILJ.fork.call(bytemHZDbrC, addressi4FVZxk, addressrFYzJDd, intD3AYPN2, intzIjmzrT, {from: accounts[0]});
		const bytes32SVmWNvH = await VatqymZILJ.fork.call(byteDozxTWj, address3NT7Fp, address1OsJpe, intBuy0E4N, intxh4wdSw, {from: accounts[4]});
		const addressBZv56qT = await VatqymZILJ.nope.call(addresszh0MX3E, {from: accounts[0]});
		await VatqymZILJ.cage.call({from: accounts[4]});
		const address0P05Tb = await VatqymZILJ.hope.call(addressnWyhd8, {from: accounts[1]});

		await expect(VatqymZILJ.fork.call(bytemHZDbrC, addressi4FVZxk, addressrFYzJDd, intD3AYPN2, intzIjmzrT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatU3EG2d5 = await Vat.new({from: accounts[3]});
		const uintz4QsY6U = BigInt("1")
		const bytePr7oh9l = "0x0d02010602000d1c0a060606071a1604060f0e070d0f1f0312170b0201041e05"
		const byteyBBVoEz = "0x00041d1b1c1c1408170e0a12151f16061d100f180c1c001d060c070a1d0a1f18"
		const addressz2Jty9 = accounts[3]
		const bytes327CWTwy = await VatU3EG2d5.file.call(byteyBBVoEz, bytePr7oh9l, uintz4QsY6U, {from: accounts[3]});
		const addresseqLhBuu = await VatU3EG2d5.deny.call(addressz2Jty9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatU3EG2d5.file.call(byteyBBVoEz, bytePr7oh9l, uintz4QsY6U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})