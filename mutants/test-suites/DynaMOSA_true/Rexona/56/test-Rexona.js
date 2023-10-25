const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringAbaZsF = "VWsskr5ZP0cVBEbsx9BkfOgpUJqGd3tVL"
		const stringZCpW3KD = "QFn"
		const uintMD5ksa5 = BigInt("1392")
		const RexonauDDRVFe = await Rexona.new(stringAbaZsF, stringZCpW3KD, uintMD5ksa5, {from: accounts[2]});
		const uinttb2o01x = BigInt("132")
		const addressROHzveJ = accounts[1]
		const addressgfcHQDZ = accounts[0]
		const uintZU5njNy = BigInt("156")
		const addressE1Q4483 = accounts[2]
		const uintfcTkYD2 = BigInt("1369")
		const addressfGfkec6 = accounts[2]
		const uintRYu6yvk = BigInt("1976")
		const addressmOFsbUc = accounts[2]
		const uintVCVxXEV = BigInt("1039")
		const addressgTqY3N = accounts[4]
		const uintZhl9RDa = BigInt("1384")
		const addressCHQ4Ag0 = accounts[3]
//		const boolbhiVDhV = await RexonauDDRVFe.transferFrom.call(addressgfcHQDZ, addressROHzveJ, uinttb2o01x, {from: accounts[0]});
//		const booleCINV77 = await RexonauDDRVFe.transfer.call(addressE1Q4483, uintZU5njNy, {from: accounts[4]});
//		const boollro0Bty = await RexonauDDRVFe.approveAndCall.call(addressfGfkec6, uintfcTkYD2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLcMtpel = await RexonauDDRVFe.approve.call(addressmOFsbUc, uintRYu6yvk, {from: accounts[3]});
//		const booleCLczV = await RexonauDDRVFe.transfer.call(addressgTqY3N, uintVCVxXEV, {from: accounts[2]});
//		const boolTsXRrQc = await RexonauDDRVFe.approve.call(addressCHQ4Ag0, uintZhl9RDa, {from: accounts[4]});

		await expect(RexonauDDRVFe.transferFrom.call(addressgfcHQDZ, addressROHzveJ, uinttb2o01x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringVcNruyv = "JPw0sErtw7wdB5vTBuTS5TlbuuEuvJ2FTfYo7EXAbABVxJ6ZLXOQlDI0GCjKtY"
		const stringkRBlVca = "qvacH93SHlAkMpze3JxJ1TIqMzxDhpLoYDvGbEgUB6uem83fRzyrfIv5O"
		const uintlgt9xPn = BigInt("1229")
		const Rexonasaw1kAr = await Rexona.new(stringVcNruyv, stringkRBlVca, uintlgt9xPn, {from: accounts[2]});
		const uintcv8Q628 = BigInt("15")
		const addresswRvWRnl = accounts[4]
		const uintRqbl2Ey = BigInt("1703")
		const addressb6ZDQii = accounts[3]
		const uintArG1aC4 = BigInt("298")
		const addressKtMJdkY = accounts[0]
		const uintRpFm53Z = BigInt("82")
		const addressCAntZYR = accounts[5]
		const uintwYtJtEn = BigInt("19")
		const addressv8kxDWK = accounts[3]
		const uintAtXtZyl = BigInt("452")
		const addressn0laUkl = accounts[4]
		const addressOKXDec = accounts[3]
//		const boolm4JlDjj = await Rexonasaw1kAr.transfer.call(addresswRvWRnl, uintcv8Q628, {from: accounts[3]});
//		const boolmCPI3Ha = await Rexonasaw1kAr.approve.call(addressb6ZDQii, uintRqbl2Ey, {from: accounts[3]});
//		const boolb3HxLU = await Rexonasaw1kAr.approve.call(addressKtMJdkY, uintArG1aC4, {from: accounts[0]});
//		const boolrW17H2b = await Rexonasaw1kAr.approveAndCall.call(addressCAntZYR, uintRpFm53Z, {from: accounts[3]});
//		const boolNFiy3X2 = await Rexonasaw1kAr.approve.call(addressv8kxDWK, uintwYtJtEn, {from: accounts[1]});
//		const boolnhDSTd2 = await Rexonasaw1kAr.transferFrom.call(addressOKXDec, addressn0laUkl, uintAtXtZyl, {from: accounts[1]});

		await expect(Rexonasaw1kAr.transfer.call(addresswRvWRnl, uintcv8Q628, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringx4p3HS = "1YxFzlxTKNgIHZiCx7FsEaoQfrtMWlV8iHgw8lbMWkrjypEX59sP"
		const stringQOnGJAQ = "dWfYl5W2nTmNB53vn01k2FCUQohflon2i8TpvydbmD7OHWGyKMnUqsM"
		const uintnI8AI7g = BigInt("423")
		const RexonaUhEvtN5 = await Rexona.new(stringx4p3HS, stringQOnGJAQ, uintnI8AI7g, {from: accounts[2]});
		const addresshwF1GM5 = accounts[2]
		const uintmVQpzb = BigInt("990")
		const addressV0hTJTT = accounts[1]
		const uintAw8jMv7 = BigInt("5")
		const addressAerKiF3 = accounts[4]
//		const boolgtIpaan = await RexonaUhEvtN5.transferownership.call(addresshwF1GM5, {from: accounts[0]});
//		const boolOTHeQf8 = await RexonaUhEvtN5.approveAndCall.call(addressV0hTJTT, uintmVQpzb, {from: accounts[2]});
//		const boolLosxTCI = await RexonaUhEvtN5.approveAndCall.call(addressAerKiF3, uintAw8jMv7, {from: accounts[3]});

		await expect(RexonaUhEvtN5.transferownership.call(addresshwF1GM5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringT0DMDHu = "ECcXtNUJy4nDOlAig6GSUN9AwSfpjRx7lLp9mebEgJE75y6q8X2gAEcoPTd6QqX"
		const stringISLcJVt = "OWKl2z94licdIHfyOTVPsrW1AfqxLIE9jGcHC1mV6WdVA7xYX3Ps8uzoGwmCCNXGgzEKD6wcAr74XJC42NnE"
		const uintKPl2tVs = BigInt("1750")
		const RexonaFdez4pJ = await Rexona.new(stringT0DMDHu, stringISLcJVt, uintKPl2tVs, {from: accounts[0]});
		const uintnusCget = BigInt("1367")
		const addressGO9Ie4l = accounts[4]
		const uintjGc2Gm3 = BigInt("626")
		const addressKznXTIG = accounts[2]
		const uintKvP80wT = BigInt("867")
		const addressvrcyVL = accounts[0]
		const uintuuRfaQz = BigInt("1523")
		const addressoNieiJS = "0x0000000000000000000000000000000000000001"
		const boolsCJO8dd = await RexonaFdez4pJ.approve.call(addressGO9Ie4l, uintnusCget, {from: accounts[4]});
		const boolKn8WtR1 = await RexonaFdez4pJ.approve.call(addressKznXTIG, uintjGc2Gm3, {from: accounts[2]});
		const booleutLZyS = await RexonaFdez4pJ.approveAndCall.call(addressvrcyVL, uintKvP80wT, {from: accounts[0]});
		const boolxGmt6Ra = await RexonaFdez4pJ.approveAndCall.call(addressoNieiJS, uintuuRfaQz, {from: accounts[0]});

		assert.equal(boolKn8WtR1, true)
		assert.equal(booleutLZyS, true)
		assert.equal(boolsCJO8dd, true)
		assert.equal(boolxGmt6Ra, true)
	});

	it('test for Rexona', async () => {
		const stringNNstLT = "X2c9CLXd4IN3deQ1ggq4MTPyhOa9WEbdhZOUkyHKX2cXF2HDWmA4vu6tdiL7AI1UXbVc2umW0g4IeqbV2VtvY4wXT"
		const stringkUJfCGw = "TZo8jagenTFAefTS4g66eH54Chvp6YLP5HtsaMEmNLwLGCYFKjVq6yEj1D1tSsocq2"
		const uintCoC6xrm = BigInt("1089")
		const RexonaloUaeYe = await Rexona.new(stringNNstLT, stringkUJfCGw, uintCoC6xrm, {from: "0x0000000000000000000000000000000000000001"});
		const uintha2NEso = BigInt("891")
		const addressnbwwb3m = accounts[0]
		const uintL7fwXO = BigInt("2041")
		const addressPCcXRz = accounts[5]
		const addressDGXaRHg = accounts[2]
		const addressFOIfc6f = accounts[2]
		const boolJasQ9hI = await RexonaloUaeYe.approve.call(addressnbwwb3m, uintha2NEso, {from: accounts[2]});
		const boolidYSDQq = await RexonaloUaeYe.transferFrom.call(addressDGXaRHg, addressPCcXRz, uintL7fwXO, {from: accounts[0]});
		const boolhD3Lied = await RexonaloUaeYe.transferownership.call(addressFOIfc6f, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const stringjJ3myxl = "aojKbH45zz7tPLwVBGfkVroEyhaoOG44ewm4uBZaipxA9upXq5POHdWeVN2jVQx"
		const stringFWsRRUu = "cMhpvtyI76tkvNaP6tcWYHSYnub"
		const uintL6TXPZ8 = BigInt("5")
		const Rexonau0Lnf5 = await Rexona.new(stringjJ3myxl, stringFWsRRUu, uintL6TXPZ8, {from: accounts[4]});
		const addressDzevgYj = accounts[2]
		const addressJel0MaW = accounts[3]
		const uintTGsTU5W = BigInt("161")
		const addressdMvLoIP = accounts[2]
		const addressvhPbM0M = accounts[0]
		const uintBjkUHG = BigInt("893")
		const addresskGKBg3L = accounts[1]
		const boolbq9KaY = await Rexonau0Lnf5.transferownership.call(addressDzevgYj, {from: accounts[4]});
//		const boolVwIYs63 = await Rexonau0Lnf5.transferownership.call(addressJel0MaW, {from: accounts[5]});
//		const boolBD4wubT = await Rexonau0Lnf5.transferFrom.call(addressvhPbM0M, addressdMvLoIP, uintTGsTU5W, {from: accounts[4]});
//		const boolPK6v4fq = await Rexonau0Lnf5.transfer.call(addresskGKBg3L, uintBjkUHG, {from: accounts[3]});

		assert.equal(boolbq9KaY, true)
		await expect(Rexonau0Lnf5.transferownership.call(addressJel0MaW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringE93vFUY = "Kh2RfCPFbbuy5IfJ7FSuziaMcikutb2Yj"
		const stringzTzFb5C = "KD4Tv3rfn61lFP1slTqWq4Qtv2q"
		const uintsfdAGWI = BigInt("1001")
		const RexonaX6jwUyl = await Rexona.new(stringE93vFUY, stringzTzFb5C, uintsfdAGWI, {from: accounts[1]});
		const uintx56Q9xa = BigInt("431")
		const addressz1hLgq0 = accounts[1]
		const uinthe8EFfA = BigInt("730")
		const addressivFXzf5 = accounts[4]
		const uint7J1sAb = BigInt("1783")
		const addressjHfrcxU = accounts[0]
		const address3faebk = accounts[1]
		const addresswbM6AzJ = accounts[1]
//		const bool0lH4Kt = await RexonaX6jwUyl.transfer.call(addressz1hLgq0, uintx56Q9xa, {from: accounts[0]});
//		const boolpqcebt = await RexonaX6jwUyl.transfer.call(addressivFXzf5, uinthe8EFfA, {from: accounts[5]});
//		const boolVIpPpU3 = await RexonaX6jwUyl.transferFrom.call(address3faebk, addressjHfrcxU, uint7J1sAb, {from: accounts[0]});
//		const boolHC0szHC = await RexonaX6jwUyl.transferownership.call(addresswbM6AzJ, {from: accounts[1]});

		await expect(RexonaX6jwUyl.transfer.call(addressz1hLgq0, uintx56Q9xa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringf9mxY1W = "VjNp4oML4SvELF9lfFHE5iEHzVL3VSpnaKEgS2HJqbhvjXyEy"
		const stringzD2kej5 = "h"
		const uinthWQxi5x = BigInt("1328")
		const RexonaWs1KTLx = await Rexona.new(stringf9mxY1W, stringzD2kej5, uinthWQxi5x, {from: accounts[2]});
		const uintZLObRL = BigInt("288")
		const addressA4g9JY = accounts[4]
		const addressvrGnbf = accounts[5]
		const uintsMVpRnK = BigInt("444")
		const addressb7dW7r = accounts[2]
		const addressbO7qjuw = accounts[2]
		const uintiZyS8N2 = BigInt("479")
		const addressfdtDS47 = accounts[5]
		const addressh8MX7Ts = accounts[4]
		const uintA8zIvQo = BigInt("1906")
		const addressipLiBW2 = "0x0000000000000000000000000000000000000001"
		const uintjTXPBvm = BigInt("1760")
		const addressqy5tjJ8 = accounts[2]
//		const boolwjKeoLD = await RexonaWs1KTLx.transferFrom.call(addressvrGnbf, addressA4g9JY, uintZLObRL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcR2aOIo = await RexonaWs1KTLx.transferFrom.call(addressbO7qjuw, addressb7dW7r, uintsMVpRnK, {from: accounts[1]});
//		const boolf7ZJPv = await RexonaWs1KTLx.transferFrom.call(addressh8MX7Ts, addressfdtDS47, uintiZyS8N2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSPJhq5S = await RexonaWs1KTLx.approveAndCall.call(addressipLiBW2, uintA8zIvQo, {from: accounts[2]});
//		const boolhB7TBb = await RexonaWs1KTLx.approveAndCall.call(addressqy5tjJ8, uintjTXPBvm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RexonaWs1KTLx.transferFrom.call(addressvrGnbf, addressA4g9JY, uintZLObRL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringVcNruyv = "JPw0sErtw7wdB5vTBuTS5TlbuuEuvJ2FTfYo7EXAbABVxJ6ZLXOQlDI0GCjKtY"
		const stringkRBlVca = "qvacH93SHlAkMpze3JxJ1TIqMzxDhpLoYDvGbEgUB6uem83fRzyrfIv5O"
		const uintW30NBp = BigInt("1229")
		const Rexonasaw1kAr = await Rexona.new(stringVcNruyv, stringkRBlVca, uintW30NBp, {from: accounts[2]});
		const uintG3LE0eg = BigInt("0")
		const addressGT8AlnJ = accounts[4]
		const uintp8wxBNk = BigInt("1703")
		const addressKsdi4fu = accounts[3]
		const uintiHdo0WS = BigInt("298")
		const addressZGkJ2W9 = accounts[0]
		const uintFTeUkO8 = BigInt("82")
		const addressnpMWw0r = accounts[5]
		const uintRWsa9tS = BigInt("19")
		const addressqgSKi96 = accounts[3]
		const uintHmmVs26 = BigInt("452")
		const addressNXYrTpJ = accounts[4]
		const addressh434Pz = accounts[3]
		const boolm4JlDjj = await Rexonasaw1kAr.transfer.call(addressGT8AlnJ, uintG3LE0eg, {from: accounts[3]});
		const boolmCPI3Ha = await Rexonasaw1kAr.approve.call(addressKsdi4fu, uintp8wxBNk, {from: accounts[3]});
		const boolb3HxLU = await Rexonasaw1kAr.approve.call(addressZGkJ2W9, uintiHdo0WS, {from: accounts[0]});
//		const boolrW17H2b = await Rexonasaw1kAr.approveAndCall.call(addressnpMWw0r, uintFTeUkO8, {from: accounts[3]});
//		const boolNFiy3X2 = await Rexonasaw1kAr.approve.call(addressqgSKi96, uintRWsa9tS, {from: accounts[1]});
//		const boolnhDSTd2 = await Rexonasaw1kAr.transferFrom.call(addressh434Pz, addressNXYrTpJ, uintHmmVs26, {from: accounts[1]});

		assert.equal(boolb3HxLU, true)
		assert.equal(boolm4JlDjj, true)
		assert.equal(boolmCPI3Ha, true)
		await expect(Rexonasaw1kAr.approveAndCall.call(addressnpMWw0r, uintFTeUkO8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringgLCaQxH = "tWuw4smOuiKft8kPUDhX9IlISJ46"
		const stringTm3r6B = "Vypv6pkchBNdIr1ViZIi3RtD3U3crjiFop"
		const uintLd0C0ND = BigInt("778")
		const RexonaJlvUD1n = await Rexona.new(stringgLCaQxH, stringTm3r6B, uintLd0C0ND, {from: accounts[0]});
		const uintItTvM6q = BigInt("0")
		const addressbwWyMDn = accounts[5]
		const uintJW1qgpi = BigInt("1313")
		const addressHkNhoo2 = accounts[3]
		const uint9pm4lU = BigInt("1692")
		const addressqcSjg3u = accounts[4]
		const uintyG5R4Vs = BigInt("1177")
		const addressmAiBj47 = "0x0000000000000000000000000000000000000001"
		const addressqylAInS = accounts[2]
		const uintmQzTIaB = BigInt("705")
		const addressYNd6vWL = accounts[3]
		const boolsQARycM = await RexonaJlvUD1n.approveAndCall.call(addressbwWyMDn, uintItTvM6q, {from: accounts[0]});
		const booldtygklM = await RexonaJlvUD1n.approve.call(addressHkNhoo2, uintJW1qgpi, {from: accounts[1]});
//		const boolmGx0oEw = await RexonaJlvUD1n.approveAndCall.call(addressqcSjg3u, uint9pm4lU, {from: accounts[1]});
//		const booltir94ip = await RexonaJlvUD1n.transferFrom.call(addressqylAInS, addressmAiBj47, uintyG5R4Vs, {from: accounts[3]});
//		const boolERX8NhE = await RexonaJlvUD1n.approve.call(addressYNd6vWL, uintmQzTIaB, {from: accounts[0]});

		assert.equal(booldtygklM, true)
		assert.equal(boolsQARycM, true)
		await expect(RexonaJlvUD1n.approveAndCall.call(addressqcSjg3u, uint9pm4lU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})