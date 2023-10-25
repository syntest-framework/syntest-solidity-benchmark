const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatGf0g3ZU = await Vat.new({from: accounts[5]});
		const uintQqFZU3q = BigInt("822")
		const uintLnXifKj = BigInt("921")
		const addressT5htkK4 = accounts[0]
		const addressDbWljvs = accounts[3]
		const intwy8y9He = BigInt("1751")
		const intLUjmUje = BigInt("373")
		const addresslPt5iuT = accounts[5]
		const addressPXEowiF = accounts[0]
		const bytehGfcZqS = "0x0409030109121f0e040e17141e0b16160201030d131d061c1b1e0c180618021f"
		const addressR4hGMcG = accounts[3]
//		const uintUVdphXa = await VatGf0g3ZU.heal.call(uintQqFZU3q, {from: accounts[3]});
//		const addresso5T6qXQ = await VatGf0g3ZU.move.call(addressDbWljvs, addressT5htkK4, uintLnXifKj, {from: accounts[5]});
//		const bytes32I8t4DWi = await VatGf0g3ZU.fork.call(bytehGfcZqS, addressPXEowiF, addresslPt5iuT, intLUjmUje, intwy8y9He, {from: accounts[1]});
//		const addressRhFwu8e = await VatGf0g3ZU.hope.call(addressR4hGMcG, {from: accounts[2]});

		await expect(VatGf0g3ZU.heal.call(uintQqFZU3q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const addresstEWo0G = accounts[5]
		const uintSHuuj9J = BigInt("1734")
		const addressOVS5CFM = accounts[4]
		const addressW2ABeLR = accounts[0]
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addresstEWo0G, {from: accounts[3]});
//		const addresseSvyTDA = await VatrZqRlGQ.suck.call(addressW2ABeLR, addressOVS5CFM, uintSHuuj9J, {from: accounts[4]});

		await expect(VatrZqRlGQ.deny.call(addresstEWo0G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlY9Ene = await Vat.new({from: accounts[2]});
		const addressQQxt96h = accounts[2]
		const addresspk23GLT = accounts[1]
		const uintedHb1Q0 = BigInt("518")
		const addressXvj7MpT = accounts[2]
		const addresswzlpdFy = "0x0000000000000000000000000000000000000001"
		const addressSqtsuOu = accounts[3]
		const addressJpHuZIi = await VatlY9Ene.nope.call(addressQQxt96h, {from: accounts[4]});
		const addressTClhoK = await VatlY9Ene.hope.call(addresspk23GLT, {from: accounts[1]});
//		const addresslQJxkF = await VatlY9Ene.suck.call(addresswzlpdFy, addressXvj7MpT, uintedHb1Q0, {from: accounts[5]});
//		const addressvYBEsjd = await VatlY9Ene.nope.call(addressSqtsuOu, {from: "0x0000000000000000000000000000000000000001"});
//		await VatlY9Ene.cage.call({from: accounts[2]});

		await expect(VatlY9Ene.suck.call(addresswzlpdFy, addressXvj7MpT, uintedHb1Q0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatKgatHtM = await Vat.new({from: accounts[3]});
		const addressESDjf6m = accounts[0]
		const uintzmYY2P = BigInt("175")
		const addressvwBsbbw = accounts[4]
		const addressSwaPjTZ = accounts[2]
		const bytekikZCJu = "0x081e0a1b0a0d0b15091a13110c14021b13170a1802140e0d03052018061c0111"
		const byteiV1Fqlm = "0x00070a0a101d201313061b091a1511020e000107031a0618070108131b180b16"
		const intHT11gz = BigInt("126")
		const intv8mC1hX = BigInt("-629")
		const addressXHZAtyy = accounts[3]
		const addressuZ8VhoY = accounts[2]
		const byterBfAtx6 = "0x030b141d04200115121f050e17120f1400161a170b011b152003191f0f0c1311"
		const addressj1e2cmS = await VatKgatHtM.hope.call(addressESDjf6m, {from: accounts[4]});
//		const bytes32O19pOrf = await VatKgatHtM.flux.call(bytekikZCJu, addressSwaPjTZ, addressvwBsbbw, uintzmYY2P, {from: accounts[3]});
//		const bytes32uIKtjKL = await VatKgatHtM.init.call(byteiV1Fqlm, {from: accounts[1]});
//		const bytes32Umokdri = await VatKgatHtM.fork.call(byterBfAtx6, addressuZ8VhoY, addressXHZAtyy, intv8mC1hX, intHT11gz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatKgatHtM.flux.call(bytekikZCJu, addressSwaPjTZ, addressvwBsbbw, uintzmYY2P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatw8EPZpj = await Vat.new({from: accounts[0]});
		const addressogZMUae = accounts[1]
		const byteUvEHAy5 = "0x110a1912191f041f05190205071a060814121c1011080d0b020a1f11141e0917"
		const addressC99y9E = await Vatw8EPZpj.hope.call(addressogZMUae, {from: accounts[3]});
		const bytes32VHxx0CP = await Vatw8EPZpj.init.call(byteUvEHAy5, {from: accounts[0]});
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const uintlNCEukP = BigInt("1734")
		const addressqCVtMaJ = accounts[4]
		const addressMlVDWOC = accounts[0]
		const addresseSvyTDA = await VatrZqRlGQ.suck.call(addressMlVDWOC, addressqCVtMaJ, uintlNCEukP, {from: accounts[4]});
	});

	it('test for Vat', async () => {
		const VatBuCgM3h = await Vat.new({from: accounts[2]});
		const addressanAfApb = accounts[2]
		const addresshbPJT4k = "0x0000000000000000000000000000000000000001"
		const uintDjS9G95 = BigInt("1333")
		const byteBYUMyS0 = "0x1d090b1b0c1b11071a0a1a0212141f030d041c0c19080d051d160c180d16081d"
		const uintYfBr9M4 = BigInt("1763")
		const byteCLp3LTH = "0x1615161d1204180b1e0604021b171118171a011b020c140d020d010a10091b0d"
		const addressZp6loI8 = await VatBuCgM3h.nope.call(addressanAfApb, {from: accounts[1]});
		const addressVcRl9rS = await VatBuCgM3h.nope.call(addresshbPJT4k, {from: accounts[2]});
//		const bytes32fVKEOMx = await VatBuCgM3h.file.call(byteBYUMyS0, uintDjS9G95, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32Zlou0YF = await VatBuCgM3h.file.call(byteCLp3LTH, uintYfBr9M4, {from: accounts[3]});

		await expect(VatBuCgM3h.file.call(byteBYUMyS0, uintDjS9G95, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const intu09pdI = BigInt("1477")
		const intcOenj1k = BigInt("1936")
		const addressV9dJVsS = accounts[1]
		const addressU81DJC4 = accounts[4]
		const byteVMk8qG4 = "0x1216011b030c000d050d070f111c0803130f150b1e190d1c1b0505111c111b0e"
		const addressrjbBvHl = accounts[6]
//		const bytes32YGucKF = await VatrZqRlGQ.fork.call(byteVMk8qG4, addressU81DJC4, addressV9dJVsS, intcOenj1k, intu09pdI, {from: accounts[2]});
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addressrjbBvHl, {from: accounts[3]});

		await expect(VatrZqRlGQ.fork.call(byteVMk8qG4, addressU81DJC4, addressV9dJVsS, intcOenj1k, intu09pdI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const intdV8LkK = BigInt("-569")
		const addressRQT9XbM = accounts[3]
		const byteYumzFST = "0x04050c110e1a110f1d15031d08060d0f02200e090e1b100c161606050606051f"
		const addressC49Lzwv = accounts[6]
//		const bytes32R7wVM3L = await VatrZqRlGQ.fold.call(byteYumzFST, addressRQT9XbM, intdV8LkK, {from: accounts[4]});
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addressC49Lzwv, {from: accounts[3]});

		await expect(VatrZqRlGQ.fold.call(byteYumzFST, addressRQT9XbM, intdV8LkK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const addressGZVS3Zq = accounts[6]
//		await VatrZqRlGQ.note.call({from: accounts[4]});
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addressGZVS3Zq, {from: accounts[3]});

		await expect(VatrZqRlGQ.note.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VattGOaRZg = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbciKKi0 = BigInt("1751")
		const addressPy06Psa = accounts[4]
		const addressyiRh7JA = accounts[1]
		const uintVJzy9Ek = BigInt("1750")
		const addressfUG7eWh = accounts[5]
		const addressg9mfK28 = accounts[1]
		const uintZCycFg6 = BigInt("155")
		const byteaIdsPGb = "0x0e1314080418030e0d0319121f1b15101d0c03131f0b04111e1b0d1c0b19160a"
		const addresscbPT32a = accounts[0]
		const addressqh698lx = await VattGOaRZg.move.call(addressyiRh7JA, addressPy06Psa, uintbciKKi0, {from: accounts[3]});
		const addressYzfb8vS = await VattGOaRZg.move.call(addressg9mfK28, addressfUG7eWh, uintVJzy9Ek, {from: accounts[2]});
		const bytes32YCenVU3 = await VattGOaRZg.file.call(byteaIdsPGb, uintZCycFg6, {from: accounts[2]});
		const addresscSJ6jkt = await VattGOaRZg.deny.call(addresscbPT32a, {from: accounts[5]});
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const intzeABwK = BigInt("-362")
		const addressI1fVedg = accounts[5]
		const byteydtlNkx = "0x0a170b01172003070813010f0a0a0f19051f12031a0d0102020e071b1c1b0308"
		const addressua4wkt2 = accounts[6]
//		const bytes32IfLfwnG = await VatrZqRlGQ.slip.call(byteydtlNkx, addressI1fVedg, intzeABwK, {from: accounts[4]});
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addressua4wkt2, {from: accounts[3]});

		await expect(VatrZqRlGQ.slip.call(byteydtlNkx, addressI1fVedg, intzeABwK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const uintt3wnSge = BigInt("1143")
		const address8l2BLv = accounts[2]
		const addressdILJ7Z = accounts[2]
		const addresslZqQ55v = accounts[6]
		const uintYRzf9Mu = BigInt("2034")
		const byteDrzBshk = "0x1d0410040d1819130a140a0a171c020415081a1f1c1611020f130c0c1a1c0f0d"
//		const addressAuAlLwn = await VatrZqRlGQ.move.call(addressdILJ7Z, address8l2BLv, uintt3wnSge, {from: accounts[2]});
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addresslZqQ55v, {from: accounts[3]});
//		const bytes32F4QC66C = await VatrZqRlGQ.file.call(byteDrzBshk, uintYRzf9Mu, {from: accounts[2]});

		await expect(VatrZqRlGQ.move.call(addressdILJ7Z, address8l2BLv, uintt3wnSge, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const addressartOCae = accounts[1]
		const addressFh88AlQ = accounts[5]
		const uintw9qznXx = BigInt("1283")
		const bytexcAt8rB = "0x0b15171301151108161f1a1d080d00121e1f00160d0f1d18180d070d00160904"
		const bytesrXt8z3 = "0x011e0a04021c140f15060a0515111f190110201a0f1c1d0c171107030f12061a"
		const addressASplQdh = await VatrZqRlGQ.deny.call(addressartOCae, {from: accounts[4]});
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addressFh88AlQ, {from: accounts[3]});
//		const bytes32aSg6mSH = await VatrZqRlGQ.file.call(bytexcAt8rB, uintw9qznXx, {from: accounts[4]});
//		const bytes32gCeZAMf = await VatrZqRlGQ.init.call(bytesrXt8z3, {from: accounts[3]});

		await expect(VatrZqRlGQ.deny.call(addressFh88AlQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatBSaQmx4 = await Vat.new({from: accounts[5]});
		const intKXBS2n = BigInt("-187")
		const intKzdcMgV = BigInt("-524")
		const addressaWZO64o = accounts[2]
		const addressVKZv2FB = accounts[0]
		const addresszC4QwBK = accounts[5]
		const byteEcjaSAd = "0x0d20130f160e171f00170a20101706080e1316060e161b19130908180e141b09"
		const addressGjgJ9xm = accounts[3]
		const uint87OhmN = BigInt("1744")
		const addressQjpffXf = accounts[1]
		const addressTVpxgWW = accounts[4]
//		const bytes32lwnXClF = await VatBSaQmx4.frob.call(byteEcjaSAd, addresszC4QwBK, addressVKZv2FB, addressaWZO64o, intKzdcMgV, intKXBS2n, {from: accounts[0]});
//		const addressjNdQocY = await VatBSaQmx4.hope.call(addressGjgJ9xm, {from: accounts[2]});
//		const addresssXeutwN = await VatBSaQmx4.move.call(addressTVpxgWW, addressQjpffXf, uint87OhmN, {from: accounts[4]});

		await expect(VatBSaQmx4.frob.call(byteEcjaSAd, addresszC4QwBK, addressVKZv2FB, addressaWZO64o, intKzdcMgV, intKXBS2n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const addressEpEbgIc = "0x0000000000000000000000000000000000000001"
		const addressLZyr4CO = accounts[6]
		const intDUiE8ms = BigInt("-1998")
		const intmoXIkdf = BigInt("1742")
		const addressRtKhH55 = accounts[2]
		const addressqUIVT28 = accounts[2]
		const addressQM6vNCv = "0x0000000000000000000000000000000000000001"
		const bytekyGClb = "0x0b17020b011919041b191c09130a011108170f110c0b1e0a1009131407160c1e"
		const addresscf96YqK = await VatrZqRlGQ.rely.call(addressEpEbgIc, {from: accounts[4]});
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addressLZyr4CO, {from: accounts[3]});
//		const bytes32He2Y9V = await VatrZqRlGQ.grab.call(bytekyGClb, addressQM6vNCv, addressqUIVT28, addressRtKhH55, intmoXIkdf, intDUiE8ms, {from: accounts[0]});

		await expect(VatrZqRlGQ.deny.call(addressLZyr4CO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const intlXdZNdg = BigInt("1898")
		const addressl5eMSHM = accounts[1]
		const byteH7L9nAZ = "0x010d110c1a1812031f1706151d05051a0b07040f12001b1509180a020d1a100d"
		const addresssfLOtm8 = accounts[5]
		const uintO6wgpx8 = BigInt("1141")
		const addressKSHE5A = "0x0000000000000000000000000000000000000001"
		const addressSntU4w = accounts[5]
		const bytes32i1QJOm = await VatrZqRlGQ.fold.call(byteH7L9nAZ, addressl5eMSHM, intlXdZNdg, {from: accounts[4]});
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addresssfLOtm8, {from: accounts[3]});
//		const addressS9aYYL9 = await VatrZqRlGQ.move.call(addressSntU4w, addressKSHE5A, uintO6wgpx8, {from: accounts[5]});

		await expect(VatrZqRlGQ.deny.call(addresssfLOtm8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const intzgx6lE = BigInt("256")
		const intmDTPXPr = BigInt("-570")
		const addressAmJQfI4 = accounts[5]
		const addressdVCx9KO = accounts[2]
		const addressdoXIeUb = accounts[3]
		const byteabToCwv = "0x101b1f111206150a0d1e0009011f0201171d0412100e191a1b1c1e0705011009"
		const addresskIRMK2T = accounts[6]
//		const bytes32LGAfr7M = await VatrZqRlGQ.grab.call(byteabToCwv, addressdoXIeUb, addressdVCx9KO, addressAmJQfI4, intmDTPXPr, intzgx6lE, {from: accounts[4]});
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addresskIRMK2T, {from: accounts[3]});

		await expect(VatrZqRlGQ.grab.call(byteabToCwv, addressdoXIeUb, addressdVCx9KO, addressAmJQfI4, intmDTPXPr, intzgx6lE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrZqRlGQ = await Vat.new({from: accounts[4]});
		const addressOjEPtHQ = accounts[6]
//		await VatrZqRlGQ.cage.call({from: accounts[4]});
//		const addresszUOmx6C = await VatrZqRlGQ.deny.call(addressOjEPtHQ, {from: accounts[3]});

		await expect(VatrZqRlGQ.cage.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1WAPVU = await Vat.new({from: accounts[2]});
		const uintSgt9wUA = BigInt("1106")
		const bytebiaobQ5 = "0x15191b021e1e070f190b200c130c0a0e1a08030c011714021c0d040619111216"
		const byteNJsFQJ = "0x0b13021a2010190c0d1b0e11051e1b1a1b080b0c001b01030402170105170b19"
		const uintb8fGpXZ = BigInt("1493")
//		const bytes32ngbEIGt = await Vat1WAPVU.file.call(byteNJsFQJ, bytebiaobQ5, uintSgt9wUA, {from: accounts[2]});
//		const uintCDYvsVe = await Vat1WAPVU.heal.call(uintb8fGpXZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vat1WAPVU.file.call(byteNJsFQJ, bytebiaobQ5, uintSgt9wUA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1WAPVU = await Vat.new({from: accounts[2]});
		const uintMi7sKP = BigInt("1106")
		const byteHT4kg1e = "0x15191b021e1e070f190b200c130c0a0e1a08030c011714021c0d040619111216"
		const byteDqMrth = "0x0b13fffffffe1a2010190c0d1b0e11051e1b1a1b080b0c001b01030402170105170b19"
//		const bytes32ngbEIGt = await Vat1WAPVU.file.call(byteDqMrth, byteHT4kg1e, uintMi7sKP, {from: accounts[2]});

		await expect(Vat1WAPVU.file.call(byteDqMrth, byteHT4kg1e, uintMi7sKP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatLzKyh6X = await Vat.new({from: accounts[0]});
		const addressRxHS3wc = accounts[4]
		const intLIDG3CR = BigInt("-1127")
		const intiD3IhUP = BigInt("-974")
		const addressLsx3v9x = "0x0000000000000000000000000000000000000001"
		const addressPbXYXh = "0x0000000000000000000000000000000000000001"
		const byteqDPBh8O = "0x00191d1413031c0f0c151018180819130103140a0e021c1504141d09040d1214"
		const addressWEejTEy = accounts[4]
		const addressS9UwmHp = await VatLzKyh6X.rely.call(addressRxHS3wc, {from: accounts[0]});
//		const bytes32EWijz5S = await VatLzKyh6X.fork.call(byteqDPBh8O, addressPbXYXh, addressLsx3v9x, intiD3IhUP, intLIDG3CR, {from: accounts[4]});
//		const addressza7gWLh = await VatLzKyh6X.hope.call(addressWEejTEy, {from: accounts[0]});

		await expect(VatLzKyh6X.fork.call(byteqDPBh8O, addressPbXYXh, addressLsx3v9x, intiD3IhUP, intLIDG3CR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1WAPVU = await Vat.new({from: accounts[2]});
		const uintUkEa16 = BigInt("1106")
		const byteVhhDPK = "0x15191b021e1e070f190b200c130c0a0e1a08fffffffe0c011714021c0d040619111216"
		const byteuwweNGy = "0x0b13021a2010190c0d1b0e11051e1b1a1b080b0c001b01030402170105170b19"
//		const bytes32ngbEIGt = await Vat1WAPVU.file.call(byteuwweNGy, byteVhhDPK, uintUkEa16, {from: accounts[2]});

		await expect(Vat1WAPVU.file.call(byteuwweNGy, byteVhhDPK, uintUkEa16, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1WAPVU = await Vat.new({from: accounts[2]});
		const uintMI8w4nl = BigInt("1106")
		const byteWrESHZN = "0x15191b021e1e070f190b200c130c0a0e1a08030c011714021c0d040619111216"
		const byteS3xlcyS = "0x0b13021a2010190c0d1b0e11051e1b1a1b080b0c001bffffffff030402170105170b19"
//		const bytes32ngbEIGt = await Vat1WAPVU.file.call(byteS3xlcyS, byteWrESHZN, uintMI8w4nl, {from: accounts[2]});

		await expect(Vat1WAPVU.file.call(byteS3xlcyS, byteWrESHZN, uintMI8w4nl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1WAPVU = await Vat.new({from: accounts[2]});
		const uintZmAy71 = BigInt("1106")
		const byteUy2Tyna = "0x15191b021e1e070f190b200c130c0a0e1a08030c011714ffffffff1c0d040619111216"
		const bytecL1TkzH = "0x0b13021a2010190c0d1b0e11051e1b1a1b080b0c001b01030402170105170b19"
//		const bytes32ngbEIGt = await Vat1WAPVU.file.call(bytecL1TkzH, byteUy2Tyna, uintZmAy71, {from: accounts[2]});

		await expect(Vat1WAPVU.file.call(bytecL1TkzH, byteUy2Tyna, uintZmAy71, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})