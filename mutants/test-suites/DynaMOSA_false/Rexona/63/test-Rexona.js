const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const string6bKjdM = "q72a4p79Vr1pHEcX"
		const stringHG4Fja = "MzOEIAyefL6vLLOO0FPDMw2UqRVHB7UVBlooXnUYFMoiVL3dL23PUWsGuShL48lMneG0JnrcJ5F6WNl4wUd"
		const uintgzdQtgG = BigInt("1770")
		const Rexonag9ut30S = await Rexona.new(string6bKjdM, stringHG4Fja, uintgzdQtgG, {from: accounts[4]});
		const uintUHvjq0I = BigInt("1970")
		const addressRzXRHzz = accounts[1]
		const addressaWLo0nL = accounts[5]
		const uintP5VeyNU = BigInt("1754")
		const addressX3Cr9f = accounts[2]
		const addressmUj9Nce = accounts[3]
		const uintcSejF9a = BigInt("1737")
		const addressIBwhcsr = accounts[4]
		const addresspYctnFR = accounts[2]
		const uintWUeiQIU = BigInt("513")
		const addressgigul0m = accounts[5]
//		const boolwp4ycb2 = await Rexonag9ut30S.transferFrom.call(addressaWLo0nL, addressRzXRHzz, uintUHvjq0I, {from: accounts[0]});
//		const boolNXGp4fM = await Rexonag9ut30S.transferFrom.call(addressmUj9Nce, addressX3Cr9f, uintP5VeyNU, {from: accounts[3]});
//		const boolCj51NnN = await Rexonag9ut30S.transferFrom.call(addresspYctnFR, addressIBwhcsr, uintcSejF9a, {from: accounts[5]});
//		const boolnsEwEVA = await Rexonag9ut30S.approveAndCall.call(addressgigul0m, uintWUeiQIU, {from: accounts[3]});

		await expect(Rexonag9ut30S.transferFrom.call(addressaWLo0nL, addressRzXRHzz, uintUHvjq0I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringPXdH6LU = "uoHvjM"
		const stringNtZyVnJ = "61EjHEbIeiO6Wtr8fxrsBVng7I1gv"
		const uinttvxfzp0 = BigInt("459")
		const RexonaCxiSo5p = await Rexona.new(stringPXdH6LU, stringNtZyVnJ, uinttvxfzp0, {from: accounts[1]});
		const uint1S2cvZ = BigInt("740")
		const addressKuBZhTu = accounts[4]
		const uintvDgRAs = BigInt("411")
		const addresswgtlXVG = accounts[3]
		const addressCcPQ2pj = accounts[4]
		const uint0WLAC4 = BigInt("999")
		const addressRdcpvlc = accounts[4]
		const uintIRovh5R = BigInt("1694")
		const addressEa0pbVn = accounts[3]
//		const boolvdO6TZ = await RexonaCxiSo5p.approveAndCall.call(addressKuBZhTu, uint1S2cvZ, {from: accounts[5]});
//		const boolkIepHmc = await RexonaCxiSo5p.transferFrom.call(addressCcPQ2pj, addresswgtlXVG, uintvDgRAs, {from: accounts[0]});
//		const bool1278CJ = await RexonaCxiSo5p.approve.call(addressRdcpvlc, uint0WLAC4, {from: accounts[2]});
//		const booljuI7y9j = await RexonaCxiSo5p.approve.call(addressEa0pbVn, uintIRovh5R, {from: accounts[1]});

		await expect(RexonaCxiSo5p.approveAndCall.call(addressKuBZhTu, uint1S2cvZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringXMjCdc = "ijfUIJAwiikDMRYnPWJNiaeKJcea6V4c2QqH9PwYnF347lRvfBwhIbFUQ65wHAWp6GASGXwN2tFpra"
		const stringm8F3do = "rEKtFYevcIv5zHJHsc6LkC7VGP7h88fMyLBrzqYXOrqzbdomdrKw0YeROhPCbUR2t0Gji3yxvtrItu0Ke5QJIk8wQW4J1j4QXwZ"
		const uintEy2UKQk = BigInt("504")
		const RexonaEWALdL = await Rexona.new(stringXMjCdc, stringm8F3do, uintEy2UKQk, {from: accounts[0]});
		const uintKyARlTj = BigInt("1923")
		const addressa2D6ZI6 = accounts[3]
		const addressZSOTi0 = accounts[4]
		const uintODzoroK = BigInt("11")
		const addressIqhk1wF = accounts[1]
		const addressfo4g5Z1 = accounts[1]
		const uintrneQeA0 = BigInt("1871")
		const addressMgOM5dN = accounts[4]
		const uintHRF1VH = BigInt("1644")
		const addressFO4H27 = accounts[2]
		const uintPd9lxeS = BigInt("1616")
		const addressjrzK7N = accounts[2]
//		const boolBJjEtQQ = await RexonaEWALdL.transferFrom.call(addressZSOTi0, addressa2D6ZI6, uintKyARlTj, {from: accounts[4]});
//		const bool5HFOwl = await RexonaEWALdL.transferFrom.call(addressfo4g5Z1, addressIqhk1wF, uintODzoroK, {from: accounts[5]});
//		const boolrOI8rXN = await RexonaEWALdL.approve.call(addressMgOM5dN, uintrneQeA0, {from: accounts[4]});
//		const boolHgsSdI1 = await RexonaEWALdL.approve.call(addressFO4H27, uintHRF1VH, {from: accounts[1]});
//		const booluVTqqhk = await RexonaEWALdL.approve.call(addressjrzK7N, uintPd9lxeS, {from: accounts[2]});

		await expect(RexonaEWALdL.transferFrom.call(addressZSOTi0, addressa2D6ZI6, uintKyARlTj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringhYdZTS = "GQjDTZY4GnW1Qw65UWdbvcpw1mPxjOLjfYavcH"
		const stringgarX0Cp = "ThALcNVDiEXVLBGXgSfj46V5tFqugxG4erOi5xbDS3C8QjVryKRUJPWgqRj6nPGlc88v1TsBWA"
		const uintHIZX36f = BigInt("931")
		const Rexona99p138 = await Rexona.new(stringhYdZTS, stringgarX0Cp, uintHIZX36f, {from: accounts[0]});
		const uintCupZHDA = BigInt("1252")
		const addressblurgOF = accounts[4]
		const uintRM5l26W = BigInt("798")
		const addressLWx9Cg7 = accounts[1]
		const uinticMYUJS = BigInt("238")
		const addressnnYMBKS = accounts[1]
		const uintoGgwri = BigInt("888")
		const addressJz5zhv = accounts[0]
		const bools9JlLln = await Rexona99p138.approve.call(addressblurgOF, uintCupZHDA, {from: accounts[4]});
		const boolTZG2c5R = await Rexona99p138.transfer.call(addressLWx9Cg7, uintRM5l26W, {from: accounts[0]});
//		const boolsBDfdad = await Rexona99p138.transfer.call(addressnnYMBKS, uinticMYUJS, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqcMl3JA = await Rexona99p138.approve.call(addressJz5zhv, uintoGgwri, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTZG2c5R, true)
		assert.equal(bools9JlLln, true)
		await expect(Rexona99p138.transfer.call(addressnnYMBKS, uinticMYUJS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringD6H2szj = "B"
		const stringKbWldbq = "L88QFt4gigNyIshpKfklELwAjkUEqYiKg8tUAfr8lS95uKx1NCznojVRGbuSJvyVocYvhJg"
		const uintYSDHbzy = BigInt("168")
		const RexonaP9E1XpE = await Rexona.new(stringD6H2szj, stringKbWldbq, uintYSDHbzy, {from: accounts[3]});
		const uintNkWT1Q5 = BigInt("1589")
		const addressTaba9Gf = accounts[2]
		const uintrL7GaRM = BigInt("1473")
		const addressjMzN54C = accounts[0]
		const addressKtfYrHz = accounts[2]
		const uintpQ5Mg1G = BigInt("1048")
		const addressan7mIHj = accounts[0]
		const boole3DzNR9 = await RexonaP9E1XpE.approveAndCall.call(addressTaba9Gf, uintNkWT1Q5, {from: accounts[3]});
//		const boollqM8Cib = await RexonaP9E1XpE.transferFrom.call(addressKtfYrHz, addressjMzN54C, uintrL7GaRM, {from: accounts[3]});
//		const boolZoav7ZL = await RexonaP9E1XpE.approveAndCall.call(addressan7mIHj, uintpQ5Mg1G, {from: accounts[2]});

		assert.equal(boole3DzNR9, true)
		await expect(RexonaP9E1XpE.transferFrom.call(addressKtfYrHz, addressjMzN54C, uintrL7GaRM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringc4gwdX4 = "S5nzwWIsceuwRkvLYT4invAdvFnulcoQ"
		const stringiQhXEWU = "D52bR4OdOfMbpHtxAVODk2YCcUPSPTWAVIYvMuXXCLqPYAS8NCidxmIuTPOH5tgFM0YVNVRxSHWayQIfKNVweij8pBETcw1"
		const uintJyZ2aN = BigInt("479")
		const RexonajZ4lE1s = await Rexona.new(stringc4gwdX4, stringiQhXEWU, uintJyZ2aN, {from: accounts[2]});
		const addresscDsetse = accounts[4]
		const uintKiv4ScY = BigInt("778")
		const addressHaPwbhO = accounts[1]
		const uintCNnzaGm = BigInt("592")
		const addresswUWtCNf = accounts[2]
//		const boolOGdp6wy = await RexonajZ4lE1s.transferownership.call(addresscDsetse, {from: accounts[5]});
//		const booljrpKLEr = await RexonajZ4lE1s.approve.call(addressHaPwbhO, uintKiv4ScY, {from: "0x0000000000000000000000000000000000000001"});
//		const booliLqAJTS = await RexonajZ4lE1s.approve.call(addresswUWtCNf, uintCNnzaGm, {from: accounts[3]});

		await expect(RexonajZ4lE1s.transferownership.call(addresscDsetse, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringJ7E1Fq9 = "E7"
		const stringMxd91AX = "Ond5rfgMkgDrxh98yqL6pzQbThQIrIm1lsuC7d7A7Wk0nYf8TrOSSPSTz2bSzWpJOzOLxNzThJsfI7twClwYYLnsQhPUvTBj68"
		const uintInUhyXb = BigInt("585")
		const RexonaKGp2pcC = await Rexona.new(stringJ7E1Fq9, stringMxd91AX, uintInUhyXb, {from: "0x0000000000000000000000000000000000000001"});
		const addressGgCLeQj = accounts[4]
		const uintPk1Rm4O = BigInt("1347")
		const addressqxaFs6 = accounts[0]
		const uintiLHICEd = BigInt("1811")
		const addressTi3eU8e = accounts[1]
		const uintSpaFSvu = BigInt("1525")
		const addressdaVRMOv = accounts[1]
		const uintlnbwCcN = BigInt("463")
		const addressAbmuccW = accounts[3]
		const addressoRZzWyQ = accounts[3]
		const uintxQbegon = BigInt("930")
		const addressxaeNoFG = accounts[4]
		const boolFL1rMzm = await RexonaKGp2pcC.transferownership.call(addressGgCLeQj, {from: accounts[1]});
		const boolaGYi1tX = await RexonaKGp2pcC.approveAndCall.call(addressqxaFs6, uintPk1Rm4O, {from: accounts[3]});
		const booliKy8r6R = await RexonaKGp2pcC.approveAndCall.call(addressTi3eU8e, uintiLHICEd, {from: accounts[4]});
		const boolrsSXdR9 = await RexonaKGp2pcC.approve.call(addressdaVRMOv, uintSpaFSvu, {from: accounts[2]});
		const boolXDe8lw = await RexonaKGp2pcC.transferFrom.call(addressoRZzWyQ, addressAbmuccW, uintlnbwCcN, {from: accounts[3]});
		const boolQL1zgR = await RexonaKGp2pcC.transfer.call(addressxaeNoFG, uintxQbegon, {from: accounts[2]});
	});

	it('test for Rexona', async () => {
		const stringD6H2szj = "B"
		const stringKbWldbq = "L88QFt4gigNyIshpKfklELwAjkUEqYiKg8tUAfr8lS95uKx1NCznojVRGbuSJvyVocYvhJg"
		const uintONfv4Yn = BigInt("168")
		const RexonaP9E1XpE = await Rexona.new(stringD6H2szj, stringKbWldbq, uintONfv4Yn, {from: accounts[3]});
		const uintf7MXqL = BigInt("848")
		const addressRfVwLxm = accounts[1]
		const uinthTAJSWl = BigInt("0")
		const addressxe29CGW = accounts[2]
		const addressYO34qI9 = accounts[3]
		const uintLTOSwsp = BigInt("1586")
		const addressDame02p = accounts[4]
		const uintwxnn0Io = BigInt("612")
		const addressimBaRSA = accounts[3]
		const addressLbJOIYF = accounts[2]
		const uintKKEPpc4 = BigInt("140")
		const addressb4n7VYZ = accounts[5]
		const uintiJ7nRRD = BigInt("1480")
		const addresssuEVEzv = accounts[4]
		const boolAjl5W66 = await RexonaP9E1XpE.approveAndCall.call(addressRfVwLxm, uintf7MXqL, {from: accounts[3]});
		const boolP3GYLst = await RexonaP9E1XpE.transferFrom.call(addressYO34qI9, addressxe29CGW, uinthTAJSWl, {from: accounts[0]});
		const boole3DzNR9 = await RexonaP9E1XpE.approveAndCall.call(addressDame02p, uintLTOSwsp, {from: accounts[3]});
//		const boolpjwxowr = await RexonaP9E1XpE.transferFrom.call(addressLbJOIYF, addressimBaRSA, uintwxnn0Io, {from: accounts[3]});
//		const boolXCjGpjd = await RexonaP9E1XpE.approveAndCall.call(addressb4n7VYZ, uintKKEPpc4, {from: accounts[2]});
//		const boolipxMen7 = await RexonaP9E1XpE.approveAndCall.call(addresssuEVEzv, uintiJ7nRRD, {from: accounts[4]});

		assert.equal(boolAjl5W66, true)
		assert.equal(boolP3GYLst, true)
		assert.equal(boole3DzNR9, true)
		await expect(RexonaP9E1XpE.transferFrom.call(addressLbJOIYF, addressimBaRSA, uintwxnn0Io, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})