const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringnZFbFQW = "aDC9JqO0lxquYzcBl8xLOgxmvsCF0KggyvFQtSuGiBG5ER9mnUTWtDiP0QWIzTTC7GQgnvEeWtB5AXaKmM83E32q0yCa7"
		const stringrKpXX4C = "Yy5JbkmH2orHjg6Agkc711aFRly6oSD8elEAQlhht9Fma06M1Q"
		const uintHsTRIpV = BigInt("1992")
		const DipexGLRUKl = await Dipex.new(stringnZFbFQW, stringrKpXX4C, uintHsTRIpV, {from: accounts[2]});
		const uinty36wsbc = BigInt("1602")
		const addresss8P4vci = accounts[4]
		const addressHaV7Uww = accounts[3]
		const uintVv822mR = BigInt("255")
		const addressj9Jhh9 = accounts[1]
		const addressQ0QgjhY = accounts[2]
		const addressidm4fuQ = accounts[4]
		const uintBY5wBjH = BigInt("965")
		const addressnlwGZAN = accounts[0]
		const booleepwInc = await DipexGLRUKl.approve.call(addresss8P4vci, uinty36wsbc, {from: accounts[2]});
//		const boolPEMONnO = await DipexGLRUKl.transferownership.call(addressHaV7Uww, {from: "0x0000000000000000000000000000000000000001"});
//		const boolhNhqQP8 = await DipexGLRUKl.transferFrom.call(addressQ0QgjhY, addressj9Jhh9, uintVv822mR, {from: accounts[4]});
//		const bool6wcMRV = await DipexGLRUKl.transferownership.call(addressidm4fuQ, {from: accounts[0]});
//		const boolj5TMElW = await DipexGLRUKl.approveAndCall.call(addressnlwGZAN, uintBY5wBjH, {from: accounts[1]});

		assert.equal(booleepwInc, true)
		await expect(DipexGLRUKl.transferownership.call(addressHaV7Uww, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringi8I0yqq = "sxjFkx43JCCRss6XoY7lpvvbt1evVljd7jgVQdj7ZpvBtKBqC0DUDZpysJE3vfW0I7BCPH2uO5CFmZYaeNTxCEdNX23wDiAja"
		const stringUn1BNDT = "xk733Dd2Lm6XrnyHzTa"
		const uintckVjqs = BigInt("1652")
		const DipexoQwmdkU = await Dipex.new(stringi8I0yqq, stringUn1BNDT, uintckVjqs, {from: accounts[0]});
		const uintieEmTln = BigInt("825")
		const addresshD0Tms = accounts[1]
		const addressYW1ZbW = accounts[5]
		const uintR60aori = BigInt("674")
		const addressg16boDp = accounts[4]
		const uintsfSdABM = BigInt("1764")
		const addressSiis81p = accounts[2]
		const uintbFNiIj = BigInt("1756")
		const addressLM8iqHK = accounts[1]
//		const boolfcEQaLi = await DipexoQwmdkU.transferFrom.call(addressYW1ZbW, addresshD0Tms, uintieEmTln, {from: accounts[0]});
//		const boolhXgNCtt = await DipexoQwmdkU.approve.call(addressg16boDp, uintR60aori, {from: accounts[4]});
//		const boolU2Kac0M = await DipexoQwmdkU.transfer.call(addressSiis81p, uintsfSdABM, {from: accounts[0]});
//		const boolpwlK1L5 = await DipexoQwmdkU.approveAndCall.call(addressLM8iqHK, uintbFNiIj, {from: accounts[0]});

		await expect(DipexoQwmdkU.transferFrom.call(addressYW1ZbW, addresshD0Tms, uintieEmTln, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringXj0Go0e = "JDx8wSaTiDSdOs2jTuQ1uXNhb"
		const stringiHRIsQA = "u28y0oJht3GF8QT7rpexCSwOAkRX3w0lt"
		const uintwZ3G1E0 = BigInt("1090")
		const DipexC7oZQPx = await Dipex.new(stringXj0Go0e, stringiHRIsQA, uintwZ3G1E0, {from: "0x0000000000000000000000000000000000000001"});
		const uintmY8MzoJ = BigInt("1597")
		const addressaIbcN0N = accounts[2]
		const uintcSJeHSE = BigInt("1277")
		const addressCHAPC72 = accounts[4]
		const addresszBhxMrT = accounts[0]
		const uintToy0ApK = BigInt("1794")
		const addressmndPwXL = accounts[1]
		const uintSEGZ65x = BigInt("379")
		const addressE14M2y7 = accounts[2]
		const uintfO8yUEZ = BigInt("1626")
		const addressoQz16am = accounts[0]
		const uintMkMM9w7 = BigInt("826")
		const addressujF23uH = accounts[1]
		const addressLiQoFII = accounts[2]
		const boolmR6PhWd = await DipexC7oZQPx.approveAndCall.call(addressaIbcN0N, uintmY8MzoJ, {from: accounts[4]});
		const boolLkgDZpt = await DipexC7oZQPx.transferFrom.call(addresszBhxMrT, addressCHAPC72, uintcSJeHSE, {from: accounts[1]});
		const boolR6MruTn = await DipexC7oZQPx.approve.call(addressmndPwXL, uintToy0ApK, {from: accounts[1]});
		const boolNwOFtrt = await DipexC7oZQPx.approveAndCall.call(addressE14M2y7, uintSEGZ65x, {from: accounts[1]});
		const bool1Fm7pV = await DipexC7oZQPx.approve.call(addressoQz16am, uintfO8yUEZ, {from: accounts[4]});
		const boolW07sTbD = await DipexC7oZQPx.transferFrom.call(addressLiQoFII, addressujF23uH, uintMkMM9w7, {from: accounts[5]});
	});

	it('test for Dipex', async () => {
		const stringkWmp3gb = "FjnZm7JWbsC5FJQXiTRKs7HSxYpDeNF1NGAbBqV5ekKHcXmr25gHSwlSMs9oReivjGSLlx8xBC8nh6QUA"
		const stringYjcWS6D = "Lz3vOp359UqHOWhdayqJc3vy7mSKnSwd4Q7Sf8mqdGnrL3T3d0vxrUMkE93Qi"
		const uintvR5BNml = BigInt("1547")
		const Dipexu34ScC0 = await Dipex.new(stringkWmp3gb, stringYjcWS6D, uintvR5BNml, {from: accounts[0]});
		const uinttMug3qt = BigInt("920")
		const addressGdbGv35 = accounts[4]
		const addresszHqgEL4 = "0x0000000000000000000000000000000000000001"
		const uintQ6Vq5Ng = BigInt("1824")
		const addressJxQdZ38 = accounts[4]
		const uintTZjIOit = BigInt("604")
		const addresssYPyqXI = accounts[0]
		const uintz0Lv5Nc = BigInt("688")
		const addresst6di5G0 = accounts[5]
		const uintuq3IqVZ = BigInt("1397")
		const addressxDsMzTn = accounts[1]
		const addressyWSbIOn = "0x0000000000000000000000000000000000000001"
//		const boolwVjv8ja = await Dipexu34ScC0.approveAndCall.call(addressGdbGv35, uinttMug3qt, {from: accounts[2]});
//		const boolzYtRplD = await Dipexu34ScC0.transferownership.call(addresszHqgEL4, {from: accounts[2]});
//		const boolDAIpv3n = await Dipexu34ScC0.approve.call(addressJxQdZ38, uintQ6Vq5Ng, {from: "0x0000000000000000000000000000000000000001"});
//		const boolXdh0OkL = await Dipexu34ScC0.approveAndCall.call(addresssYPyqXI, uintTZjIOit, {from: accounts[3]});
//		const boolk6iL9P6 = await Dipexu34ScC0.approveAndCall.call(addresst6di5G0, uintz0Lv5Nc, {from: accounts[0]});
//		const boolm9XUty = await Dipexu34ScC0.transferFrom.call(addressyWSbIOn, addressxDsMzTn, uintuq3IqVZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Dipexu34ScC0.approveAndCall.call(addressGdbGv35, uinttMug3qt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringpMEumQC = "G7B55n8WTUbA0dyeQrgmoLIstKEyb9vWAt8r"
		const stringWoVwMaf = "WiCcWRSIfQVz66CwuqrbQFVodnwGwyu9awvbKBIxoyIeEwGKVJ69rUJb6yrSILMzmU1eyYEOFreQj66UdgDp"
		const uintkrhzg2 = BigInt("94")
		const DipexRMHL3wZ = await Dipex.new(stringpMEumQC, stringWoVwMaf, uintkrhzg2, {from: accounts[3]});
		const uintI5pwmi9 = BigInt("401")
		const addressgTK7i9Q = accounts[0]
		const addressjrDCgbj = accounts[2]
		const uintlY9rVVG = BigInt("896")
		const addressnWFqNTJ = accounts[1]
//		const boolQZVSifl = await DipexRMHL3wZ.transferFrom.call(addressjrDCgbj, addressgTK7i9Q, uintI5pwmi9, {from: accounts[2]});
//		const boolOVmuMTF = await DipexRMHL3wZ.transfer.call(addressnWFqNTJ, uintlY9rVVG, {from: accounts[4]});

		await expect(DipexRMHL3wZ.transferFrom.call(addressjrDCgbj, addressgTK7i9Q, uintI5pwmi9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringoY0E3mv = "JgK5QTHCH166nIl1EwCcfyjJbKaSfYpIBk"
		const stringUy9mrL8 = "r1Ky4IXO5kErR7ozoA34mmBFGIdhWLNBJrKjkEHPfL8U2b3JwJckTJrlfIY"
		const uintf1i0Is7 = BigInt("675")
		const DipexqJF3Ce = await Dipex.new(stringoY0E3mv, stringUy9mrL8, uintf1i0Is7, {from: accounts[0]});
		const addressTaLO3kD = accounts[2]
		const uintucLw0xX = BigInt("1850")
		const addressa7aurx = accounts[2]
		const uint7lm4KJ = BigInt("795")
		const addressdytMImi = "0x0000000000000000000000000000000000000001"
		const uintup5Kjxo = BigInt("1676")
		const addressoNHygES = accounts[2]
		const uinti39krxO = BigInt("1991")
		const addresssWkSYkl = "0x0000000000000000000000000000000000000001"
		const addressvDUpc0V = accounts[0]
		const boolF6eV5F1 = await DipexqJF3Ce.transferownership.call(addressTaLO3kD, {from: accounts[0]});
//		const boolzEvuYo1 = await DipexqJF3Ce.transfer.call(addressa7aurx, uintucLw0xX, {from: accounts[2]});
//		const boolR9Rkh46 = await DipexqJF3Ce.approveAndCall.call(addressdytMImi, uint7lm4KJ, {from: accounts[4]});
//		const boolvwV00zU = await DipexqJF3Ce.approve.call(addressoNHygES, uintup5Kjxo, {from: accounts[4]});
//		const boolSW2WQ7E = await DipexqJF3Ce.transferFrom.call(addressvDUpc0V, addresssWkSYkl, uinti39krxO, {from: accounts[0]});

		assert.equal(boolF6eV5F1, true)
		await expect(DipexqJF3Ce.transfer.call(addressa7aurx, uintucLw0xX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringpMEumQC = "G7B55n8WTUbA0dyeQrgmoLIstKEyb9vWAt8r"
		const stringWoVwMaf = "WiCcWRSIfQVz66CwuqrbQFVodnwGwyu9awvbKBIxoyIeEwGKVJ69rUJb6yrSILMzmU1eyYEOFreQj66UdgDp"
		const uinttrvxuet = BigInt("94")
		const DipexRMHL3wZ = await Dipex.new(stringpMEumQC, stringWoVwMaf, uinttrvxuet, {from: accounts[3]});
		const uintjzpdxWd = BigInt("632")
		const addressuAkxgy6 = accounts[1]
		const uintS6VO8Tu = BigInt("1871")
		const addressOEK50B = accounts[0]
		const uintY5ZLhNY = BigInt("393")
		const addressjgsP3e = accounts[0]
		const addressnC5M2oK = accounts[1]
		const boolwxQP2ji = await DipexRMHL3wZ.approveAndCall.call(addressuAkxgy6, uintjzpdxWd, {from: accounts[3]});
//		const boolyoDk4r = await DipexRMHL3wZ.approveAndCall.call(addressOEK50B, uintS6VO8Tu, {from: accounts[4]});
//		const boolQZVSifl = await DipexRMHL3wZ.transferFrom.call(addressnC5M2oK, addressjgsP3e, uintY5ZLhNY, {from: accounts[2]});

		assert.equal(boolwxQP2ji, true)
		await expect(DipexRMHL3wZ.approveAndCall.call(addressOEK50B, uintS6VO8Tu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringpMEumQC = "G7B55n8WTUbA0dyeQrgmoLIstKEyb9vWAt8r"
		const stringWoVwMaf = "WiCcWRSIfQVz66CwuqrbQFVodnwGwyu9awvbKBIxoyIeEwGKVJ69rUJb6yrSILMzmU1eyYEOFreQj66UdgDp"
		const uintmD2aT43 = BigInt("94")
		const DipexRMHL3wZ = await Dipex.new(stringpMEumQC, stringWoVwMaf, uintmD2aT43, {from: accounts[3]});
		const uintmPoXdNP = BigInt("594")
		const addressWJI9OeJ = accounts[3]
		const uintqudufLj = BigInt("1698")
		const addressk8SZAhS = accounts[0]
		const uintpCliFmP = BigInt("190")
		const addressqhSOmHA = accounts[0]
		const uintZvvgKbA = BigInt("622")
		const addressVsvPFuj = accounts[2]
		const boolw1fXV3 = await DipexRMHL3wZ.approve.call(addressWJI9OeJ, uintmPoXdNP, {from: accounts[2]});
		const boolcKMxYR = await DipexRMHL3wZ.approveAndCall.call(addressk8SZAhS, uintqudufLj, {from: accounts[3]});
		const boolRPfShI = await DipexRMHL3wZ.transfer.call(addressqhSOmHA, uintpCliFmP, {from: accounts[3]});
		const boolwxQP2ji = await DipexRMHL3wZ.approveAndCall.call(addressVsvPFuj, uintZvvgKbA, {from: accounts[3]});

		assert.equal(boolRPfShI, true)
		assert.equal(boolcKMxYR, true)
		assert.equal(boolw1fXV3, true)
		assert.equal(boolwxQP2ji, true)
	});

	it('test for Dipex', async () => {
		const stringpMEumQC = "G7B55n8WTUbA0dyeQrgmoLIstKEyb9vWAt8r"
		const stringWoVwMaf = "WiCcWRSIfQVz66CwuqrbQFVodnwGwyu9awvbKBIxoyIeEwGKVJ69rUJb6yrSILMzmU1eyYEOFreQj66UdgDp"
		const uintDmTsY3T = BigInt("94")
		const DipexRMHL3wZ = await Dipex.new(stringpMEumQC, stringWoVwMaf, uintDmTsY3T, {from: accounts[3]});
		const uintRJbGBgL = BigInt("0")
		const addressmpq1CIm = accounts[1]
		const addressA5WS1li = "0x0000000000000000000000000000000000000001"
		const uintYVP0V43 = BigInt("1924")
		const addressj5kjYMx = accounts[0]
		const uintT9iukgv = BigInt("820")
		const address4BlSrl = accounts[2]
		const addressZBWBfJZ = "0x0000000000000000000000000000000000000001"
		const boolNkbUi1k = await DipexRMHL3wZ.transferFrom.call(addressA5WS1li, addressmpq1CIm, uintRJbGBgL, {from: accounts[3]});
		const boolGzZy3HT = await DipexRMHL3wZ.approve.call(addressj5kjYMx, uintYVP0V43, {from: accounts[1]});
//		const boolIeN3yCg = await DipexRMHL3wZ.transferFrom.call(addressZBWBfJZ, address4BlSrl, uintT9iukgv, {from: accounts[3]});

		assert.equal(boolGzZy3HT, true)
		assert.equal(boolNkbUi1k, true)
		await expect(DipexRMHL3wZ.transferFrom.call(addressZBWBfJZ, address4BlSrl, uintT9iukgv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringpMEumQC = "G7B55n8WTUbA0dyeQrgmoLIstKEyb9vWAt8r"
		const stringWoVwMaf = "WiCcWRSIfQVz66CwuqrbQFVodnwGwyu9awvbKBIxoyIeEwGKVJ69rUJb6yrSILMzmU1eyYEOFreQj66UdgDp"
		const uintu7Vdexm = BigInt("94")
		const DipexRMHL3wZ = await Dipex.new(stringpMEumQC, stringWoVwMaf, uintu7Vdexm, {from: accounts[3]});
		const uintFLu1S39 = BigInt("0")
		const addresshNlLro6 = accounts[4]
		const uintlQILGjO = BigInt("1705")
		const addressQcZYqR6 = accounts[0]
		const uintjgZjyo = BigInt("785")
		const addressnk1yesk = accounts[5]
		const uintv6xVjf = BigInt("738")
		const addressiEJe4b1 = accounts[1]
		const addressbhfGbp = "0x0000000000000000000000000000000000000001"
		const uintMzyFp9c = BigInt("622")
		const address6sEkU8 = accounts[3]
		const boolFVeWpGQ = await DipexRMHL3wZ.approveAndCall.call(addresshNlLro6, uintFLu1S39, {from: accounts[3]});
		const boolcKMxYR = await DipexRMHL3wZ.approveAndCall.call(addressQcZYqR6, uintlQILGjO, {from: accounts[3]});
//		const boolP7FA3eq = await DipexRMHL3wZ.transfer.call(addressnk1yesk, uintjgZjyo, {from: accounts[4]});
//		const boolyiqkdAs = await DipexRMHL3wZ.approve.call(addressiEJe4b1, uintv6xVjf, {from: accounts[3]});
//		const boolIJ23LyT = await DipexRMHL3wZ.transferownership.call(addressbhfGbp, {from: accounts[5]});
//		const boolwxQP2ji = await DipexRMHL3wZ.approveAndCall.call(address6sEkU8, uintMzyFp9c, {from: accounts[3]});

		assert.equal(boolFVeWpGQ, true)
		assert.equal(boolcKMxYR, true)
		await expect(DipexRMHL3wZ.transfer.call(addressnk1yesk, uintjgZjyo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})