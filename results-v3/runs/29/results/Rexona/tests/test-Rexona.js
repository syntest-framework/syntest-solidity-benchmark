const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringABAvNiT = "jHOFRZxMCPdtvU2y6g91WwSaIihfjG8bA1e1T"
		const stringpOdsp6R = "P5iAFOWF2fS8cS8dp9XAVqwqsBbh7vMz7kZsH5fV3aJiV8DbKfO8ufl5wWAYgnPgIHEMiy"
		const uintcMmgq7R = BigInt("1051")
		const RexonaXMGTme3 = await Rexona.new(stringABAvNiT, stringpOdsp6R, uintcMmgq7R, {from: accounts[0]});
		const uintEyGwS2w = BigInt("1574")
		const addressk4sK6us = accounts[0]
		const uintfcCcJN9 = BigInt("2025")
		const addressNBzqx16 = accounts[1]
		const boolXDYqPeE = await RexonaXMGTme3.transfer.call(addressk4sK6us, uintEyGwS2w, {from: accounts[1]});
		const boolFiczmTu = await RexonaXMGTme3.transfer.call(addressNBzqx16, uintfcCcJN9, {from: accounts[4]});

		await expect(RexonaXMGTme3.transfer.call(addressk4sK6us, uintEyGwS2w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringRoIg0fN = "CjT3dBaTCGW3dMfurNn3W3nqOC"
		const stringHn9Sfd = "niJ9mY8sK9XmFClaDVBr1uYe0FznF"
		const uintJtWiQWZ = BigInt("2029")
		const RexonagoVndn = await Rexona.new(stringRoIg0fN, stringHn9Sfd, uintJtWiQWZ, {from: accounts[2]});
		const uintQ9UHF7l = BigInt("421")
		const addresswHAmx23 = accounts[0]
		const uintd1vUssd = BigInt("1923")
		const addressn2X9K3 = accounts[3]
		const addresswt8UsAA = accounts[4]
		const uintUacBGdH = BigInt("261")
		const addressbH2hW70 = accounts[4]
		const uintQaIFWJa = BigInt("282")
		const addresskQb8urT = accounts[2]
		const uintYAyLtia = BigInt("1568")
		const address1QajTF = accounts[3]
		const uintXayl86u = BigInt("732")
		const addresshLDIb8 = accounts[3]
		const boolKLZYigM = await RexonagoVndn.approve.call(addresswHAmx23, uintQ9UHF7l, {from: accounts[0]});
		const bool4Dnv4t = await RexonagoVndn.transferFrom.call(addresswt8UsAA, addressn2X9K3, uintd1vUssd, {from: accounts[1]});
		const boolhjB6dET = await RexonagoVndn.transfer.call(addressbH2hW70, uintUacBGdH, {from: accounts[4]});
		const boolaCDEpql = await RexonagoVndn.approve.call(addresskQb8urT, uintQaIFWJa, {from: accounts[4]});
		const boolsYhP6gV = await RexonagoVndn.transfer.call(address1QajTF, uintYAyLtia, {from: accounts[2]});
		const booloFCbMGG = await RexonagoVndn.approve.call(addresshLDIb8, uintXayl86u, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKLZYigM, true)
		await expect(RexonagoVndn.transferFrom.call(addresswt8UsAA, addressn2X9K3, uintd1vUssd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringMOrA64J = "HO9U5SBEy3P1ifitiomrxYy5tPpl4C74in"
		const stringGppEHxy = "dRxUYtQ4LvCUZutqPeMwdHO4KRR4ifvcV"
		const uintwjzw0Pl = BigInt("1509")
		const RexonaptTTdYZ = await Rexona.new(stringMOrA64J, stringGppEHxy, uintwjzw0Pl, {from: accounts[3]});
		const uintmnR6tS6 = BigInt("1161")
		const addressIvNmJx = accounts[0]
		const uintp4yhQJr = BigInt("1112")
		const addressjgkY0kL = "0x0000000000000000000000000000000000000001"
		const addressKKJ0GH1 = accounts[1]
		const uintPh3uOvv = BigInt("1162")
		const addresspd2E4CO = "0x0000000000000000000000000000000000000001"
		const uintk1F3Mhk = BigInt("1460")
		const addressx4za05x = accounts[3]
		const addressAA4C8d8 = accounts[1]
		const uintBUzk2gX = BigInt("1247")
		const addressR28e14 = accounts[4]
		const addressknAlOOj = accounts[3]
		const booligjq6y = await RexonaptTTdYZ.approveAndCall.call(addressIvNmJx, uintmnR6tS6, {from: accounts[2]});
		const boolwZxdupf = await RexonaptTTdYZ.transferFrom.call(addressKKJ0GH1, addressjgkY0kL, uintp4yhQJr, {from: accounts[1]});
		const boolalb1nYo = await RexonaptTTdYZ.approveAndCall.call(addresspd2E4CO, uintPh3uOvv, {from: accounts[0]});
		const boolyAwrRpe = await RexonaptTTdYZ.approveAndCall.call(addressx4za05x, uintk1F3Mhk, {from: accounts[2]});
		const boolXcOGbeu = await RexonaptTTdYZ.transferownership.call(addressAA4C8d8, {from: "0x0000000000000000000000000000000000000001"});
		const boolIIiSwsI = await RexonaptTTdYZ.transferFrom.call(addressknAlOOj, addressR28e14, uintBUzk2gX, {from: accounts[0]});

		await expect(RexonaptTTdYZ.approveAndCall.call(addressIvNmJx, uintmnR6tS6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringr5pXLpC = "dCzi7erqZqk3"
		const stringZBQT9B2 = "3qvZ0Iw2JOMjONmYW"
		const uintaSjEpYn = BigInt("1007")
		const Rexonack7iDyZ = await Rexona.new(stringr5pXLpC, stringZBQT9B2, uintaSjEpYn, {from: accounts[3]});
		const addressgwUN73a = accounts[3]
		const uintzDNXobS = BigInt("273")
		const addressXk1Zds4 = accounts[0]
		const addresspAhs2HU = accounts[3]
		const boolqLG8bw6 = await Rexonack7iDyZ.transferownership.call(addressgwUN73a, {from: accounts[1]});
		const boolIazjX3E = await Rexonack7iDyZ.approveAndCall.call(addressXk1Zds4, uintzDNXobS, {from: accounts[5]});
		const boollRefa5v = await Rexonack7iDyZ.transferownership.call(addresspAhs2HU, {from: accounts[5]});

		await expect(Rexonack7iDyZ.transferownership.call(addressgwUN73a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringABAvNiT = "jHOFRZxMCPdtvU2y6g91WwSaIihfjG8bA1e1T"
		const stringpOdsp6R = "P5iAFOWF2fS8cS8dp9XAVqwqsBbh7vMz7kZsH5fV3aJiV8DbKfO8ufl5wWAYgnPgIHEMiy"
		const uintNkiyt2w = BigInt("1051")
		const RexonaXMGTme3 = await Rexona.new(stringABAvNiT, stringpOdsp6R, uintNkiyt2w, {from: accounts[0]});
		const uintl0uCixE = BigInt("1574")
		const addressdGpJZi = accounts[1]
		const uintz04KydS = BigInt("2025")
		const addressTvME6Gx = accounts[1]
		const boolXDYqPeE = await RexonaXMGTme3.transfer.call(addressdGpJZi, uintl0uCixE, {from: accounts[1]});
		const boolFiczmTu = await RexonaXMGTme3.transfer.call(addressTvME6Gx, uintz04KydS, {from: accounts[4]});

		await expect(RexonaXMGTme3.transfer.call(addressdGpJZi, uintl0uCixE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringBuqsN0 = "zJ2IoNbmUiJt6LForFFsNlTckTJMSwcx5ag9bmwcKw5EXUqCaGxCfO2Jzr8JnWQfy"
		const stringNFnlkgJ = "dgDTbEddHvEPQvlvt2z4lzLLqTmFSQiGqHpMYJmFxy7f3SYt5AWegFLasvQo8R95E4Q8xmNYtVEowIgxMG7ZXD4Y5Ppr3Y1B4"
		const uintm2wLeaL = BigInt("276")
		const RexonaaaILvPV = await Rexona.new(stringBuqsN0, stringNFnlkgJ, uintm2wLeaL, {from: accounts[0]});
		const uintmN9oKR2 = BigInt("1407")
		const addressA5ND1cM = accounts[1]
		const uintX07lpqW = BigInt("866")
		const addressTRGa1F = accounts[2]
		const uintYHhDlDd = BigInt("587")
		const addressdHiCzym = accounts[1]
		const uintakfAfAy = BigInt("797")
		const addressWR40VRY = accounts[0]
		const uintnigEhT8 = BigInt("714")
		const addressdb7a0f = accounts[2]
		const bool7r46zi = await RexonaaaILvPV.approveAndCall.call(addressA5ND1cM, uintmN9oKR2, {from: accounts[0]});
		const boolo6BCPdI = await RexonaaaILvPV.transfer.call(addressTRGa1F, uintX07lpqW, {from: accounts[0]});
		const boolbMyf7j3 = await RexonaaaILvPV.transfer.call(addressdHiCzym, uintYHhDlDd, {from: accounts[1]});
		const booly2J1aKN = await RexonaaaILvPV.transfer.call(addressWR40VRY, uintakfAfAy, {from: accounts[0]});
		const boolnrSvVoC = await RexonaaaILvPV.approveAndCall.call(addressdb7a0f, uintnigEhT8, {from: accounts[4]});

		assert.equal(bool7r46zi, true)
		assert.equal(boolo6BCPdI, true)
		await expect(RexonaaaILvPV.transfer.call(addressdHiCzym, uintYHhDlDd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringqKNOQUE = "xMAfft6K7waDWIMOO7ggKCdGvt8qUhvnQ39jIM4gI3vvAXosaxiPgfSjxNtOeztEX9wiQqGRp1lAFk"
		const stringSyCQ1hC = "LakBnic2w6yIB1DnI9Nu06hn3ZHRbVT14mLE8dmbCQqrTHjT"
		const uintIjbAjDS = BigInt("1978")
		const Rexona8EMOPW = await Rexona.new(stringqKNOQUE, stringSyCQ1hC, uintIjbAjDS, {from: accounts[3]});
		const uintU7cY9EF = BigInt("1507")
		const addressv9XYAjN = accounts[2]
		const uintncJtOU2 = BigInt("976")
		const addresskn3pLPa = accounts[2]
		const addresswLu31sZ = accounts[1]
		const uintW8nBGPZ = BigInt("600")
		const addressfGhI57A = accounts[4]
		const addressb17wWRL = accounts[1]
		const uintlDE2mZ6 = BigInt("1876")
		const addressNb6eCps = accounts[4]
		const boolrZDDZB = await Rexona8EMOPW.approve.call(addressv9XYAjN, uintU7cY9EF, {from: "0x0000000000000000000000000000000000000001"});
		const boolPSRTbj = await Rexona8EMOPW.approve.call(addresskn3pLPa, uintncJtOU2, {from: accounts[4]});
		const boolKUOqgcc = await Rexona8EMOPW.transferownership.call(addresswLu31sZ, {from: accounts[3]});
		const boolowzIwVU = await Rexona8EMOPW.transferFrom.call(addressb17wWRL, addressfGhI57A, uintW8nBGPZ, {from: accounts[4]});
		const boolZznDdDn = await Rexona8EMOPW.approveAndCall.call(addressNb6eCps, uintlDE2mZ6, {from: accounts[3]});

		assert.equal(boolKUOqgcc, true)
		assert.equal(boolPSRTbj, true)
		assert.equal(boolrZDDZB, true)
		await expect(Rexona8EMOPW.transferFrom.call(addressb17wWRL, addressfGhI57A, uintW8nBGPZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringUfwUpAb = "WI"
		const stringeEzbeUb = "3dAOND82WiNH7ASbuEjOy1hQOz6T4nw3nRfKfzSms8Y9i2fLazmEecvheOs2V67RuyHIeGoz7D5mJemlhwfz8ATtOdmeVrUV"
		const uintDnEpSy8 = BigInt("2023")
		const RexonaaSBC6t8 = await Rexona.new(stringUfwUpAb, stringeEzbeUb, uintDnEpSy8, {from: "0x0000000000000000000000000000000000000001"});
		const uintrO9wpgi = BigInt("911")
		const addressalZGAHp = accounts[2]
		const addressHS1v9SI = accounts[2]
		const uintgbFMaPM = BigInt("1442")
		const addresshMW0i1 = "0x0000000000000000000000000000000000000001"
		const uintz7uFZID = BigInt("1865")
		const addressjl294b6 = accounts[1]
		const addresszorO3To = "0x0000000000000000000000000000000000000001"
		const uintKDfd77E = BigInt("922")
		const addressvMh2CTC = accounts[4]
		const uintekoz488 = BigInt("1348")
		const address4V83Mq = accounts[0]
		const addressezt4TZV = accounts[4]
		const addressmpV9yur = accounts[2]
		const boolsaveezE = await RexonaaSBC6t8.transferFrom.call(addressHS1v9SI, addressalZGAHp, uintrO9wpgi, {from: accounts[0]});
		const boolcveNljT = await RexonaaSBC6t8.transfer.call(addresshMW0i1, uintgbFMaPM, {from: "0x0000000000000000000000000000000000000001"});
		const boolnVfSKmC = await RexonaaSBC6t8.transferFrom.call(addresszorO3To, addressjl294b6, uintz7uFZID, {from: accounts[5]});
		const boolvmvAHHK = await RexonaaSBC6t8.approveAndCall.call(addressvMh2CTC, uintKDfd77E, {from: accounts[0]});
		const boolXaTyOUK = await RexonaaSBC6t8.transferFrom.call(addressezt4TZV, address4V83Mq, uintekoz488, {from: accounts[0]});
		const boolPq6djlU = await RexonaaSBC6t8.transferownership.call(addressmpV9yur, {from: accounts[5]});
	});

	it('test for Rexona', async () => {
		const stringABAvNiT = "jHOFRZxMCPdtvU2y6g91WwSaIihfjG8bA1e1T"
		const stringpOdsp6R = "P5iAFOWF2fS8cS8dp9XAVqwqsBbh7vMz7kZsH5fV3aJiV8DbKfO8ufl5wWAYgnPgIHEMiy"
		const uintHpWrp6M = BigInt("1051")
		const RexonaXMGTme3 = await Rexona.new(stringABAvNiT, stringpOdsp6R, uintHpWrp6M, {from: accounts[0]});
		const uintaTjdJlQ = BigInt("0")
		const addressiVvwBG4 = accounts[3]
		const addressA5sBNCN = accounts[3]
		const boolzbti9qu = await RexonaXMGTme3.transferFrom.call(addressA5sBNCN, addressiVvwBG4, uintaTjdJlQ, {from: accounts[3]});

		assert.equal(boolzbti9qu, true)
	});

	it('test for Rexona', async () => {
		const string65hf4y = "wM3NDc1LuHXaXXUIAQKczRjQysJRAWBS18yvKL0Nx07LGshqzgCN3aXYtrgvSNOBhpVNDwLVPyhfIf7eYITFvEIibl"
		const stringfr9zwZL = "BZDbaTS6jT8eHLEVWYROvJsv5W41Fyj5LS"
		const uintFxEOqH = BigInt("1493")
		const RexonaN4cPhL9 = await Rexona.new(string65hf4y, stringfr9zwZL, uintFxEOqH, {from: accounts[1]});
		const uintgscDgkp = BigInt("0")
		const addresslWElMXa = accounts[0]
		const uintCxWI7x = BigInt("512")
		const addressRMQGS5i = accounts[3]
		const addressjbxKESC = "0x0000000000000000000000000000000000000001"
		const uintw24a486 = BigInt("680")
		const addressvJ9rvV = accounts[3]
		const boolg8WgNW1 = await RexonaN4cPhL9.approveAndCall.call(addresslWElMXa, uintgscDgkp, {from: accounts[1]});
		const boolicqAUql = await RexonaN4cPhL9.transferFrom.call(addressjbxKESC, addressRMQGS5i, uintCxWI7x, {from: accounts[4]});
		const boolixvy3DX = await RexonaN4cPhL9.approve.call(addressvJ9rvV, uintw24a486, {from: accounts[4]});

		assert.equal(boolg8WgNW1, true)
		await expect(RexonaN4cPhL9.transferFrom.call(addressjbxKESC, addressRMQGS5i, uintCxWI7x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})