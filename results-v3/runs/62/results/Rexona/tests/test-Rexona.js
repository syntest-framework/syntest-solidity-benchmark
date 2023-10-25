const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringtZFoAoN = "qa8KxXXQ1m93LPjyvrbj7KgwKT5HxokGdaQqHjy87zDzU5cUNo"
		const stringDham029 = "SYNUMRibArZC2prT9RGn3sBVV9of4X5nTWfRkDbcTAKyVcl7KkRWG"
		const uintfifpeMZ = BigInt("435")
		const RexonaHFiQYMp = await Rexona.new(stringtZFoAoN, stringDham029, uintfifpeMZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressy7SQjyP = accounts[2]
		const uintTGBFnoK = BigInt("1693")
		const addressgPgssTW = accounts[0]
		const uintVR09l5B = BigInt("1315")
		const addressUiL3o0f = accounts[2]
		const uintyeSgFi = BigInt("486")
		const addressQXHL190 = accounts[3]
		const addressROBhJLC = "0x0000000000000000000000000000000000000001"
		const uintbhqv0LP = BigInt("871")
		const addressqnRuctm = accounts[3]
		const bool7Ul8mP = await RexonaHFiQYMp.transferownership.call(addressy7SQjyP, {from: accounts[2]});
		const boolgfQzXrT = await RexonaHFiQYMp.approve.call(addressgPgssTW, uintTGBFnoK, {from: accounts[1]});
		const boolFcCt20J = await RexonaHFiQYMp.approveAndCall.call(addressUiL3o0f, uintVR09l5B, {from: accounts[4]});
		const boolKRC7IfI = await RexonaHFiQYMp.transferFrom.call(addressROBhJLC, addressQXHL190, uintyeSgFi, {from: accounts[1]});
		const boolaFyAGSF = await RexonaHFiQYMp.approveAndCall.call(addressqnRuctm, uintbhqv0LP, {from: accounts[5]});
	});

	it('test for Rexona', async () => {
		const stringwAipjhj = "dMV28SkGzbWWAfVfJEQsxcjUA5Wl68ad59uQMVskMVcVI7ExYkNTO"
		const stringgYP3WY = "SW78EkLdhrscmRbdRTRFcWIugoIWEYCVVRkizAVh5gxiu2RX4DWeELXfbdnjxgTNn"
		const uintEftCmen = BigInt("904")
		const RexonaOAVMaep = await Rexona.new(stringwAipjhj, stringgYP3WY, uintEftCmen, {from: accounts[2]});
		const uint9LxBQR = BigInt("1554")
		const addressx5z7Oy2 = accounts[1]
		const uintnSJrK0R = BigInt("1321")
		const addressJRDcFqU = accounts[1]
		const uint0cVpgN = BigInt("490")
		const addressCuFv33C = accounts[4]
		const uintbMaVfjf = BigInt("338")
		const addressFdFfx1p = "0x0000000000000000000000000000000000000001"
		const uintGu1cEMt = BigInt("584")
		const addressI3wQh23 = accounts[4]
		const addressIHkZYa = accounts[1]
		const boolxRLaBWc = await RexonaOAVMaep.approveAndCall.call(addressx5z7Oy2, uint9LxBQR, {from: accounts[1]});
		const boolrPUB57 = await RexonaOAVMaep.approve.call(addressJRDcFqU, uintnSJrK0R, {from: accounts[1]});
		const boolx4fwxBZ = await RexonaOAVMaep.transfer.call(addressCuFv33C, uint0cVpgN, {from: accounts[0]});
		const booljpNt9qE = await RexonaOAVMaep.approveAndCall.call(addressFdFfx1p, uintbMaVfjf, {from: accounts[3]});
		const bool7mV2ug = await RexonaOAVMaep.transferFrom.call(addressIHkZYa, addressI3wQh23, uintGu1cEMt, {from: accounts[2]});

		await expect(RexonaOAVMaep.approveAndCall.call(addressx5z7Oy2, uint9LxBQR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringtW01wvo = "IqElYJcNf4uZi7HiX3TUZQMy0x5bK15pc"
		const stringeoJ2NRd = "IyvXl49FlSOvU2WOqwtNXVGvjZEkDRWsygA4JUDdXYiwa"
		const uintIUf47W = BigInt("429")
		const RexonaUtE1oCH = await Rexona.new(stringtW01wvo, stringeoJ2NRd, uintIUf47W, {from: accounts[2]});
		const uintdfessg = BigInt("620")
		const addressVbUwPN9 = accounts[1]
		const uintW8VjD8 = BigInt("964")
		const addressLdhsCD = accounts[3]
		const uintsZmLDt = BigInt("816")
		const addressxMojas = accounts[5]
		const uintjQ2YQsu = BigInt("539")
		const addresshnlKPou = accounts[0]
		const addressqGYUzr = accounts[3]
		const addresse1Fqj0 = accounts[0]
		const boolyG6EMio = await RexonaUtE1oCH.approve.call(addressVbUwPN9, uintdfessg, {from: accounts[1]});
		const boolS9WWbJ8 = await RexonaUtE1oCH.approveAndCall.call(addressLdhsCD, uintW8VjD8, {from: accounts[5]});
		const boolsCQ9wqF = await RexonaUtE1oCH.approveAndCall.call(addressxMojas, uintsZmLDt, {from: "0x0000000000000000000000000000000000000001"});
		const boolzC9Skpd = await RexonaUtE1oCH.transferFrom.call(addressqGYUzr, addresshnlKPou, uintjQ2YQsu, {from: accounts[2]});
		const boolNs7ipKd = await RexonaUtE1oCH.transferownership.call(addresse1Fqj0, {from: accounts[4]});

		assert.equal(boolyG6EMio, true)
		await expect(RexonaUtE1oCH.approveAndCall.call(addressLdhsCD, uintW8VjD8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringI5pYhP6 = "weTfcbHATgqFUyjMP8cLOpnheGcvAQK7nYIRzHtwfqhHYLP1iB58OP51pg6GyE5kS6A"
		const stringB8Z42gK = "snLPCiGWRcOss6u4bvUbRC1EjNeUdtafphtA6h4ajYgiDySus9yItJED2nFEwOaSGMT0NQTH1yfziTZzy5R84PGLfPJ93MW4g5"
		const uintJGWPLTv = BigInt("476")
		const RexonatRnF7cD = await Rexona.new(stringI5pYhP6, stringB8Z42gK, uintJGWPLTv, {from: accounts[0]});
		const uintR1AuDPc = BigInt("685")
		const addresswv1HYQT = accounts[2]
		const addressyp0LHfa = accounts[3]
		const uintWCraHzE = BigInt("1647")
		const addressFLiJi6Y = accounts[2]
		const uintGA5fUzF = BigInt("1850")
		const addressBBOd84X = accounts[1]
		const uintkP4WZW4 = BigInt("1447")
		const addressRaSVo42 = accounts[3]
		const addressIKu0jme = accounts[3]
		const uintgbN1V9E = BigInt("445")
		const addressX56IiEu = "0x0000000000000000000000000000000000000001"
		const boold6N3hXH = await RexonatRnF7cD.transferFrom.call(addressyp0LHfa, addresswv1HYQT, uintR1AuDPc, {from: accounts[3]});
		const boolclN9obq = await RexonatRnF7cD.approve.call(addressFLiJi6Y, uintWCraHzE, {from: "0x0000000000000000000000000000000000000001"});
		const boolfBNK76d = await RexonatRnF7cD.approveAndCall.call(addressBBOd84X, uintGA5fUzF, {from: accounts[4]});
		const boolfjOafm6 = await RexonatRnF7cD.transfer.call(addressRaSVo42, uintkP4WZW4, {from: accounts[5]});
		const boolvJc2rJs = await RexonatRnF7cD.transferownership.call(addressIKu0jme, {from: accounts[1]});
		const boolHFaDky1 = await RexonatRnF7cD.transfer.call(addressX56IiEu, uintgbN1V9E, {from: accounts[0]});

		await expect(RexonatRnF7cD.transferFrom.call(addressyp0LHfa, addresswv1HYQT, uintR1AuDPc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringExJtU53 = "6XJkxHb8BSK674ZVoAN5WYBx57qhL7MTJ95Fu2LjFcHNWiJipOvuA2dfwhqOb4pnktnHfLTRiKfNOr"
		const stringvz83bO = "pfoT"
		const uintHdxme0y = BigInt("1712")
		const RexonaIhr8Bch = await Rexona.new(stringExJtU53, stringvz83bO, uintHdxme0y, {from: accounts[2]});
		const uintN0oPd0f = BigInt("352")
		const addresshqjD3RN = accounts[3]
		const uintcPmNQAj = BigInt("1005")
		const addressU27tQPJ = accounts[4]
		const addressMBuIXVZ = accounts[2]
		const uintAXMze8q = BigInt("43")
		const addressHC2QLUK = accounts[1]
		const addressrZMIlee = accounts[1]
		const boolCWfy9pU = await RexonaIhr8Bch.transfer.call(addresshqjD3RN, uintN0oPd0f, {from: "0x0000000000000000000000000000000000000001"});
		const boolKZlwMVY = await RexonaIhr8Bch.transferFrom.call(addressMBuIXVZ, addressU27tQPJ, uintcPmNQAj, {from: accounts[1]});
		const boolk1Y9fZ1 = await RexonaIhr8Bch.transferFrom.call(addressrZMIlee, addressHC2QLUK, uintAXMze8q, {from: accounts[4]});

		await expect(RexonaIhr8Bch.transfer.call(addresshqjD3RN, uintN0oPd0f, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringlu1CxD = "98VvoD4f"
		const stringPk8P4qB = "P5LM"
		const uintSsdVmWe = BigInt("1395")
		const RexonabClEpUq = await Rexona.new(stringlu1CxD, stringPk8P4qB, uintSsdVmWe, {from: accounts[4]});
		const uintEZcZ49g = BigInt("508")
		const addressjeGE8P = accounts[1]
		const addressVAPBB3R = accounts[3]
		const uintDBymhNE = BigInt("1503")
		const addressJAffs0 = accounts[0]
		const boolKBHL9SB = await RexonabClEpUq.approve.call(addressjeGE8P, uintEZcZ49g, {from: accounts[0]});
		const boolR2p9gHQ = await RexonabClEpUq.transferownership.call(addressVAPBB3R, {from: accounts[4]});
		const boolI69lcm = await RexonabClEpUq.approve.call(addressJAffs0, uintDBymhNE, {from: accounts[0]});

		assert.equal(boolI69lcm, true)
		assert.equal(boolKBHL9SB, true)
		assert.equal(boolR2p9gHQ, true)
	});

	it('test for Rexona', async () => {
		const stringlu1CxD = "98VvoD4f"
		const stringPk8P4qB = "P5LM"
		const uintHuqs2un = BigInt("1395")
		const RexonabClEpUq = await Rexona.new(stringlu1CxD, stringPk8P4qB, uintHuqs2un, {from: accounts[4]});
		const uintWATihMx = BigInt("1226")
		const addressp8DtC6 = accounts[2]
		const uinta5BaYY1 = BigInt("1503")
		const addressjrj38yu = accounts[0]
		const uinto8Q9mn = BigInt("44")
		const addressM3jQssP = accounts[4]
		const addressXqub5sH = accounts[1]
		const uintBSmKsVA = BigInt("1345")
		const addressPdakOMC = "0x0000000000000000000000000000000000000001"
		const addressGM9F3DJ = accounts[1]
		const uintWH5g9RD = BigInt("1051")
		const addressgNRcgOv = accounts[4]
		const boolCZTNiWR = await RexonabClEpUq.approve.call(addressp8DtC6, uintWATihMx, {from: accounts[0]});
		const boolI69lcm = await RexonabClEpUq.approve.call(addressjrj38yu, uinta5BaYY1, {from: accounts[0]});
		const boolrJN0e2U = await RexonabClEpUq.transferFrom.call(addressXqub5sH, addressM3jQssP, uinto8Q9mn, {from: accounts[1]});
		const booleDURpfB = await RexonabClEpUq.transferFrom.call(addressGM9F3DJ, addressPdakOMC, uintBSmKsVA, {from: accounts[3]});
		const boollBNfeT = await RexonabClEpUq.approveAndCall.call(addressgNRcgOv, uintWH5g9RD, {from: accounts[1]});

		assert.equal(boolCZTNiWR, true)
		assert.equal(boolI69lcm, true)
		await expect(RexonabClEpUq.transferFrom.call(addressXqub5sH, addressM3jQssP, uinto8Q9mn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringrT0AExm = "ALrWWgIYAmLDF9ztPGZ5oGNfXsW3A6laPTFy9LEpZKb4pk3J1GhxSTwNS6dbmKjQTeKKBqYYdU4J8"
		const stringldA7RVr = "snzCoTUDzwdmIj3wsNZ4GMdgUyCJOIwTmigNwQaYy8AttGdw91PWuB8S5SsAciAjHIlHZTe4xQCIe3acG1a1k8ei"
		const uintKQab2k = BigInt("1717")
		const RexonaHkmnGcB = await Rexona.new(stringrT0AExm, stringldA7RVr, uintKQab2k, {from: accounts[4]});
		const uintdEtmp24 = BigInt("1248")
		const address42zvnT = accounts[0]
		const uintA8KKkNr = BigInt("1516")
		const addressGBf0AX9 = accounts[3]
		const addressnCE9mxd = accounts[3]
		const uintNq4Hvkv = BigInt("1760")
		const addressaEw1pVy = accounts[4]
		const uintv0ufvDG = BigInt("1567")
		const addressrnMSdn5 = accounts[4]
		const boolSUQztN6 = await RexonaHkmnGcB.approveAndCall.call(address42zvnT, uintdEtmp24, {from: accounts[4]});
		const boolP9u2lzQ = await RexonaHkmnGcB.transferFrom.call(addressnCE9mxd, addressGBf0AX9, uintA8KKkNr, {from: accounts[0]});
		const boolLfovXr = await RexonaHkmnGcB.approveAndCall.call(addressaEw1pVy, uintNq4Hvkv, {from: accounts[1]});
		const boolgHW2BmQ = await RexonaHkmnGcB.approveAndCall.call(addressrnMSdn5, uintv0ufvDG, {from: accounts[0]});

		assert.equal(boolSUQztN6, true)
		await expect(RexonaHkmnGcB.transferFrom.call(addressnCE9mxd, addressGBf0AX9, uintA8KKkNr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringExJtU53 = "6XJkxHb8BSK674ZVoAN5WYBx57qhL7MTJ95Fu2LjFcHNWiJipOvuA2dfwhqOb4pnktnHfLTRiKfNOr"
		const stringvz83bO = "pfoT"
		const uintYd0OmxP = BigInt("1712")
		const RexonaIhr8Bch = await Rexona.new(stringExJtU53, stringvz83bO, uintYd0OmxP, {from: accounts[2]});
		const uintVcNMsG = BigInt("0")
		const addresskmfZmXF = accounts[2]
		const addressfGP1B5V = accounts[1]
		const boolk1Y9fZ1 = await RexonaIhr8Bch.transferFrom.call(addressfGP1B5V, addresskmfZmXF, uintVcNMsG, {from: accounts[4]});

		assert.equal(boolk1Y9fZ1, true)
	});

	it('test for Rexona', async () => {
		const stringExJtU53 = "6XJkxHb8BSK674ZVoAN5WYBx57qhL7MTJ95Fu2LjFcHNWiJipOvuA2dfwhqOb4pnktnHfLTRiKfNOr"
		const stringvz83bO = "pfoT"
		const uintLVQ4BRw = BigInt("1712")
		const RexonaIhr8Bch = await Rexona.new(stringExJtU53, stringvz83bO, uintLVQ4BRw, {from: accounts[2]});
		const uintgUsuQRr = BigInt("0")
		const addressEj0POV9 = accounts[7]
		const uintHEaUvrS = BigInt("1083")
		const addresssjEw3d = accounts[1]
		const uintQPxamRj = BigInt("300")
		const addressAJ7qk2G = "0x0000000000000000000000000000000000000001"
		const addressZBlvo7k = accounts[1]
		const booldHNxoKw = await RexonaIhr8Bch.approveAndCall.call(addressEj0POV9, uintgUsuQRr, {from: accounts[2]});
		const booljl8vu2 = await RexonaIhr8Bch.approve.call(addresssjEw3d, uintHEaUvrS, {from: accounts[2]});
		const boolZg50ca3 = await RexonaIhr8Bch.transferFrom.call(addressZBlvo7k, addressAJ7qk2G, uintQPxamRj, {from: accounts[2]});

		assert.equal(booldHNxoKw, true)
		assert.equal(booljl8vu2, true)
		await expect(RexonaIhr8Bch.transferFrom.call(addressZBlvo7k, addressAJ7qk2G, uintQPxamRj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})