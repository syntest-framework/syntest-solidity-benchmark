const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringORNsUR1 = "2"
		const stringJLirNdd = "MbFsCifptjT3PmJFXZx5VsLfYLC4eHGQ3A"
		const uintj3E0C62 = BigInt("1932")
		const Dipexv6IU9Us = await Dipex.new(stringORNsUR1, stringJLirNdd, uintj3E0C62, {from: accounts[0]});
		const uintf9IPcIO = BigInt("1221")
		const address7BCroO = accounts[3]
		const uintiP2BU0U = BigInt("500")
		const addressV1LJGTB = accounts[2]
		const uintEbmzhRT = BigInt("1180")
		const addressA5Dwii = accounts[2]
		const uintiV6MVwX = BigInt("267")
		const addresslObnAVe = accounts[2]
		const boolq6o4mjk = await Dipexv6IU9Us.approveAndCall.call(address7BCroO, uintf9IPcIO, {from: accounts[0]});
		const boolKg1nQPG = await Dipexv6IU9Us.approveAndCall.call(addressV1LJGTB, uintiP2BU0U, {from: accounts[5]});
		const boolFrjxDC7 = await Dipexv6IU9Us.transfer.call(addressA5Dwii, uintEbmzhRT, {from: accounts[4]});
		const boolWwMzmrQ = await Dipexv6IU9Us.transfer.call(addresslObnAVe, uintiV6MVwX, {from: accounts[4]});

		assert.equal(boolq6o4mjk, true)
		await expect(Dipexv6IU9Us.approveAndCall.call(addressV1LJGTB, uintiP2BU0U, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringgpRa5oh = "BbXFgGaFcsWOCp9NXYII4Vn5LECnJoeFy9znaqBkpQYWhl4dtL34NN5ECJzTdcyQCMUtf3hb8I3Ha4CLtcDTtcD"
		const stringRzTWsBP = "ZW"
		const uintetuCFPx = BigInt("62")
		const Dipexujx2cby = await Dipex.new(stringgpRa5oh, stringRzTWsBP, uintetuCFPx, {from: accounts[0]});
		const uintH31czpZ = BigInt("1589")
		const addressgxni95I = accounts[1]
		const uintY9fXCD = BigInt("1822")
		const addressphKMmk5 = accounts[0]
		const uintuCzojbw = BigInt("1730")
		const addressmxcExWw = accounts[0]
		const boolrw46xHx = await Dipexujx2cby.transfer.call(addressgxni95I, uintH31czpZ, {from: accounts[2]});
		const booleF2i2N6 = await Dipexujx2cby.approveAndCall.call(addressphKMmk5, uintY9fXCD, {from: accounts[1]});
		const boolZrrCENm = await Dipexujx2cby.transfer.call(addressmxcExWw, uintuCzojbw, {from: accounts[1]});

		await expect(Dipexujx2cby.transfer.call(addressgxni95I, uintH31czpZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const string1vzJmm = "2LpMq42DCyzpMddknjIF1PtLRBeqWHfj0TOmzmKYTjGpHB9RuRX01"
		const stringdL6aPbw = "va7OV2dBKsuKGFXigjqQ7m7KLxVuBwDrW2gpf"
		const uintjTKgb3T = BigInt("1817")
		const DipexhfPYu91 = await Dipex.new(string1vzJmm, stringdL6aPbw, uintjTKgb3T, {from: accounts[2]});
		const uintZq01cZ = BigInt("2044")
		const addressKGrLdc = "0x0000000000000000000000000000000000000001"
		const addressOdq438 = accounts[3]
		const uintgjwJLB = BigInt("1245")
		const addressICRqcnd = accounts[3]
		const uintS9qOQbK = BigInt("513")
		const addressRbw7Bwf = accounts[5]
		const boolvZxh0Si = await DipexhfPYu91.approve.call(addressKGrLdc, uintZq01cZ, {from: accounts[2]});
		const boolMXL6CLq = await DipexhfPYu91.transferownership.call(addressOdq438, {from: accounts[0]});
		const boolNkm2Hy = await DipexhfPYu91.approveAndCall.call(addressICRqcnd, uintgjwJLB, {from: accounts[3]});
		const boolqqiDAqV = await DipexhfPYu91.approveAndCall.call(addressRbw7Bwf, uintS9qOQbK, {from: accounts[2]});

		assert.equal(boolvZxh0Si, true)
		await expect(DipexhfPYu91.transferownership.call(addressOdq438, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringsjUPAMB = "CgStky6lQwdwJW2HAKV74c1CnCHI7MIHU8KGMBF2L6K6lH0hk3EgmQWwIU6gZdnKm66T49POzar87KJl4IRoo5OTVKrTpHQZXS"
		const stringGd4DHDw = "2d"
		const uintqdvd6vZ = BigInt("1600")
		const DipexjM8b0Ut = await Dipex.new(stringsjUPAMB, stringGd4DHDw, uintqdvd6vZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintzloVCiy = BigInt("1766")
		const addressb9vfHQG = accounts[1]
		const uintSxi9yKH = BigInt("991")
		const addressi1AderD = accounts[4]
		const addressBCEZIgU = accounts[0]
		const addressSPFzXbn = accounts[3]
		const uintbMKeaOA = BigInt("1427")
		const addressOTtmLD = accounts[1]
		const uintYK2mXpr = BigInt("1014")
		const addressTLCg1ht = accounts[4]
		const addresskHQMNwE = accounts[2]
		const boolEM2efvq = await DipexjM8b0Ut.approve.call(addressb9vfHQG, uintzloVCiy, {from: accounts[1]});
		const boolh7Dxdc = await DipexjM8b0Ut.approve.call(addressi1AderD, uintSxi9yKH, {from: accounts[4]});
		const boolutdoK5z = await DipexjM8b0Ut.transferownership.call(addressBCEZIgU, {from: "0x0000000000000000000000000000000000000001"});
		const boolZN7pdX6 = await DipexjM8b0Ut.transferownership.call(addressSPFzXbn, {from: accounts[4]});
		const boolN46pVoH = await DipexjM8b0Ut.approve.call(addressOTtmLD, uintbMKeaOA, {from: accounts[5]});
		const boolkMq0BGq = await DipexjM8b0Ut.transferFrom.call(addresskHQMNwE, addressTLCg1ht, uintYK2mXpr, {from: accounts[0]});
	});

	it('test for Dipex', async () => {
		const stringDBt10te = "ggIkHMxpkTs5I2j8mrgqfe5NxNxEzVIBOPcVSM6AbfIniCpjRcNiGyFI28b6YYquM"
		const stringR85C17Y = "cDhs7qZ0v3"
		const uintAIM88bC = BigInt("1078")
		const DipexPjNAEnm = await Dipex.new(stringDBt10te, stringR85C17Y, uintAIM88bC, {from: accounts[2]});
		const uintoj99Y1C = BigInt("1868")
		const addressxrHwfkF = "0x0000000000000000000000000000000000000001"
		const addressAnwfgSt = accounts[2]
		const uintb4dcyKZ = BigInt("1863")
		const addressSeph1q = accounts[0]
		const addressHJ5w4A = accounts[4]
		const boolYp5VLui = await DipexPjNAEnm.transferFrom.call(addressAnwfgSt, addressxrHwfkF, uintoj99Y1C, {from: accounts[2]});
		const boolRwgEzjL = await DipexPjNAEnm.transferFrom.call(addressHJ5w4A, addressSeph1q, uintb4dcyKZ, {from: accounts[1]});

		assert.equal(boolYp5VLui, true)
		await expect(DipexPjNAEnm.transferFrom.call(addressHJ5w4A, addressSeph1q, uintb4dcyKZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringDBt10te = "ggIkHMxpkTs5I2j8mrgqfe5NxNxEzVIBOPcVSM6AbfIniCpjRcNiGyFI28b6YYquM"
		const stringR85C17Y = "cDhs7qZ0v3"
		const uintu1bMenA = BigInt("1078")
		const DipexPjNAEnm = await Dipex.new(stringDBt10te, stringR85C17Y, uintu1bMenA, {from: accounts[2]});
		const uintAYSqfXO = BigInt("1868")
		const addresseJ7VqrS = "0x0000000000000000000000000000000000000001"
		const addressj0j1S2o = accounts[2]
		const addresspOULfBU = accounts[2]
		const uintHFRS1EA = BigInt("697")
		const addresssGTVwiz = accounts[1]
		const uintyUo1lW3 = BigInt("92")
		const addressm8EGep = accounts[4]
		const uintvA0269b = BigInt("1863")
		const addressFEh2Cxp = accounts[0]
		const addressyPvypaW = accounts[4]
		const boolYp5VLui = await DipexPjNAEnm.transferFrom.call(addressj0j1S2o, addresseJ7VqrS, uintAYSqfXO, {from: accounts[2]});
		const boolOjIGxSI = await DipexPjNAEnm.transferownership.call(addresspOULfBU, {from: accounts[2]});
		const boolQVzAm4u = await DipexPjNAEnm.approve.call(addresssGTVwiz, uintHFRS1EA, {from: accounts[2]});
		const boolXeptPGB = await DipexPjNAEnm.transfer.call(addressm8EGep, uintyUo1lW3, {from: accounts[3]});
		const boolRwgEzjL = await DipexPjNAEnm.transferFrom.call(addressyPvypaW, addressFEh2Cxp, uintvA0269b, {from: accounts[1]});

		assert.equal(boolOjIGxSI, true)
		assert.equal(boolQVzAm4u, true)
		assert.equal(boolYp5VLui, true)
		await expect(DipexPjNAEnm.transfer.call(addressm8EGep, uintyUo1lW3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringORNsUR1 = "2"
		const stringJLirNdd = "MbFsCifptjT3PmJFXZx5VsLfYLC4eHGQ3A"
		const uintifTRgzk = BigInt("1932")
		const Dipexv6IU9Us = await Dipex.new(stringORNsUR1, stringJLirNdd, uintifTRgzk, {from: accounts[0]});
		const uintwXSvlRH = BigInt("225")
		const addressrQbO4ln = accounts[7]
		const uintQC2g5bM = BigInt("0")
		const addressn2eRV2 = accounts[1]
		const uintxR2hMtz = BigInt("730")
		const addressPjRtM3d = accounts[5]
		const addressj6X1aO5 = accounts[1]
		const uintmatAY5A = BigInt("1508")
		const addressyJgzpT5 = accounts[4]
		const addressaMDIJs4 = accounts[4]
		const uintg2Oo1tP = BigInt("598")
		const addresstUHwhTC = accounts[1]
		const uintr51cR1a = BigInt("1040")
		const addressfjGlSks = accounts[3]
		const addressEhgrFaD = accounts[1]
		const uintTh1M9rP = BigInt("1480")
		const addressCPO6ce1 = "0x0000000000000000000000000000000000000001"
		const addresshorrerk = accounts[0]
		const uintHJ91Tr1 = BigInt("1814")
		const addressvxHtvMs = accounts[3]
		const addressoGLRC2 = accounts[4]
		const uintWLrddXC = BigInt("1890")
		const addresstSRJ6Lz = accounts[4]
		const uintdU3ozET = BigInt("1158")
		const addressUrxim1S = "0x0000000000000000000000000000000000000001"
		const boolcdTPDcp = await Dipexv6IU9Us.approveAndCall.call(addressrQbO4ln, uintwXSvlRH, {from: accounts[0]});
		const boolNVAPWhe = await Dipexv6IU9Us.transfer.call(addressn2eRV2, uintQC2g5bM, {from: accounts[0]});
		const boolDVng1tX = await Dipexv6IU9Us.transferFrom.call(addressj6X1aO5, addressPjRtM3d, uintxR2hMtz, {from: accounts[2]});
		const boolChxLber = await Dipexv6IU9Us.transferFrom.call(addressaMDIJs4, addressyJgzpT5, uintmatAY5A, {from: accounts[0]});
		const booliq61lU = await Dipexv6IU9Us.approveAndCall.call(addresstUHwhTC, uintg2Oo1tP, {from: accounts[4]});
		const boolHt7VaHe = await Dipexv6IU9Us.transferFrom.call(addressEhgrFaD, addressfjGlSks, uintr51cR1a, {from: accounts[2]});
		const boolZqpkIrf = await Dipexv6IU9Us.transferFrom.call(addresshorrerk, addressCPO6ce1, uintTh1M9rP, {from: accounts[1]});
		const boolVRT4V9o = await Dipexv6IU9Us.transferFrom.call(addressoGLRC2, addressvxHtvMs, uintHJ91Tr1, {from: accounts[2]});
		const boolfCzsdUT = await Dipexv6IU9Us.approve.call(addresstSRJ6Lz, uintWLrddXC, {from: accounts[1]});
		const boolkPOgJc0 = await Dipexv6IU9Us.approveAndCall.call(addressUrxim1S, uintdU3ozET, {from: accounts[2]});

		assert.equal(boolNVAPWhe, true)
		assert.equal(boolcdTPDcp, true)
		await expect(Dipexv6IU9Us.transferFrom.call(addressj6X1aO5, addressPjRtM3d, uintxR2hMtz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringORNsUR1 = "2"
		const stringJLirNdd = "MbFsCifptjT3PmJFXZx5VsLfYLC4eHGQ3A"
		const uintJplZBJ8 = BigInt("1932")
		const Dipexv6IU9Us = await Dipex.new(stringORNsUR1, stringJLirNdd, uintJplZBJ8, {from: accounts[0]});
		const uintJwlD6uR = BigInt("0")
		const address9wDzMp = accounts[5]
		const uintr9EYzlI = BigInt("1363")
		const addressArxGgD4 = "0x0000000000000000000000000000000000000001"
		const boolcdTPDcp = await Dipexv6IU9Us.approveAndCall.call(address9wDzMp, uintJwlD6uR, {from: accounts[0]});
		const boolewMyq6X = await Dipexv6IU9Us.transfer.call(addressArxGgD4, uintr9EYzlI, {from: accounts[1]});

		assert.equal(boolcdTPDcp, true)
		await expect(Dipexv6IU9Us.transfer.call(addressArxGgD4, uintr9EYzlI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})