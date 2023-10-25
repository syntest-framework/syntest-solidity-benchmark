const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringKRh5Obh = "w8fNfl7DYbtGZoEn"
		const stringRhPm73n = "WsrIfdprMqpapoTLJ8"
		const uintWDjxYN = BigInt("126")
		const XenoFelixfq8t5cz = await XenoFelix.new(stringKRh5Obh, stringRhPm73n, uintWDjxYN, {from: accounts[5]});
		const addressq3w05n0 = accounts[1]
		const boolz4zVKN5 = await XenoFelixfq8t5cz.unfreezeAccount.call(addressq3w05n0, {from: accounts[4]});
		await XenoFelixfq8t5cz.pause.call({from: accounts[2]});
		await XenoFelixfq8t5cz.whenNotPaused.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringYAJney4 = "DdXjZtCk8mBbfmH2ubkRMpzjM55O1NbL76oiMQ5vobEhYooAHlxlYf1rBpLQo8"
		const stringznIZQR2 = "HoauQBNhvQVcniPr4ZAz6wgoySkUHAQTMHCd8aPofGf6"
		const uintaq5uOYQ = BigInt("131")
		const XenoFelixRFmyF2Y = await XenoFelix.new(stringYAJney4, stringznIZQR2, uintaq5uOYQ, {from: accounts[1]});
		const addressZpaEGUf = "0x0000000000000000000000000000000000000001"
		const uintIQlNfS = BigInt("109")
		const address5dDFIe = accounts[1]
		const uintWybnA5F = BigInt("1245")
		const addresswpqJD7T = accounts[4]
		const addresscXsDBxB = await XenoFelixRFmyF2Y.removePauser.call(addressZpaEGUf, {from: accounts[4]});
		await XenoFelixRFmyF2Y.renouncePauser.call({from: accounts[3]});
		const boolmHrf0SR = await XenoFelixRFmyF2Y.burnOwner.call(address5dDFIe, uintIQlNfS, {from: accounts[1]});
		const boolcS1EIef = await XenoFelixRFmyF2Y.unlock.call(addresswpqJD7T, uintWybnA5F, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringUrtVFoi = "TcCHtuYKIJdAJP9UdCvSmb2r9m"
		const stringRiQkQHj = "rSaPlCoD2PwnQujvSrxlkfvaC3TS5EYgsel93AUEYBHwTCYYNXQb2FyEJKmUOWrqXrB3VVfefmqYk"
		const uintCNjDtkG = BigInt("11")
		const XenoFelixPz4QTl6 = await XenoFelix.new(stringUrtVFoi, stringRiQkQHj, uintCNjDtkG, {from: accounts[3]});
		const uintEhXTkWt = BigInt("1127")
		const addressjJLUWZE = accounts[2]
		const addressIzuuuNX = accounts[0]
		const uintKpFcFvM = BigInt("48")
		const addressMzs3YkP = accounts[1]
		const addressE3coaGU = await XenoFelixPz4QTl6.burnFrom.call(addressjJLUWZE, uintEhXTkWt, {from: accounts[2]});
		const boolEOLty4 = await XenoFelixPz4QTl6.isOwner.call(addressIzuuuNX, {from: accounts[4]});
		await XenoFelixPz4QTl6.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		const boolCaD2vwq = await XenoFelixPz4QTl6.transfer.call(addressMzs3YkP, uintKpFcFvM, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringMASCmaa = "Or5yDP05lNHvdGjzL5KDsstOss7EsF92PCpnQ5y3SaPtYYSuNQGlnas1CDhP3kovjW7unUkhCnjuTlU9T1"
		const stringVRj9wN9 = "kG9l0Tgxz2SKMUiYcn6fZsOlvIEm4XZ1Kr2qxLrDuFkCpxN567Cdmbk9Yr3QtAOhaiWNvk7uHBfM9scWBaoyhZUv34oe44ll4H"
		const uintjPcL9cw = BigInt("369")
		const uintoowIy6Y = BigInt("31")
		const XenoFelixdrSrZav = await XenoFelix.new(stringMASCmaa, stringVRj9wN9, uintjPcL9cw, uintoowIy6Y, {from: accounts[4]});
		const address6loDsX = accounts[5]
		const addresslIHv89g = accounts[3]
		const addressmodzZSy = await XenoFelixdrSrZav.transferOwnership.call(address6loDsX, {from: accounts[4]});
		await XenoFelixdrSrZav.renouncePauser.call({from: accounts[1]});
		const stringcQFo4lS = await XenoFelixdrSrZav.symbol.call({from: accounts[3]});
		const addressPFzXLt4 = await XenoFelixdrSrZav.addPauser.call(addresslIHv89g, {from: accounts[0]});

		await expect(XenoFelixdrSrZav.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringBcotUVf = "TTknH2kHRkJ"
		const strings68Yrrt = "L9OMsE2RQRSVxe7s8"
		const uintbAD757C = BigInt("572")
		const uintC0LWhqm = BigInt("142")
		const XenoFelixKhhMmG9 = await XenoFelix.new(stringBcotUVf, strings68Yrrt, uintbAD757C, uintC0LWhqm, {from: accounts[1]});
		const addressIj6xnnd = accounts[1]
		const uintcdyAE53 = BigInt("1480")
		const uintoYkPBDJ = BigInt("1088")
		const addressOzg0O4N = accounts[1]
		const addressfWBx2HG = accounts[5]
		const boola017Dn9 = await XenoFelixKhhMmG9.unfreezeAccount.call(addressIj6xnnd, {from: accounts[4]});
		const boolrMlEDIj = await XenoFelixKhhMmG9.transferWithLock.call(addressOzg0O4N, uintoYkPBDJ, uintcdyAE53, {from: accounts[0]});
		await XenoFelixKhhMmG9.pause.call({from: accounts[1]});
		const addressfVuEkwb = await XenoFelixKhhMmG9.addPauser.call(addressfWBx2HG, {from: accounts[5]});
		const uint256I3Bcirf = await XenoFelixKhhMmG9.totalSupply.call({from: accounts[3]});

		await expect(XenoFelixKhhMmG9.unfreezeAccount.call(addressIj6xnnd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string1rnlVG = "ORFiSX8TJ98Ut4HFhiFqgUCEKplDE8gVHSbx4wa9umIlOlNDZAoE5zroY4fy0jDc"
		const stringjnMQbbR = "x0Dm3y7pdCDxhufuw54qIeSY9hO2Rv7yxfWFMFFTqY5"
		const uintLQcFVQl = BigInt("196")
		const XenoFelixNMMyxo6 = await XenoFelix.new(string1rnlVG, stringjnMQbbR, uintLQcFVQl, {from: accounts[0]});
		const uintDsWL0VC = BigInt("172")
		const addressBU2FiPJ = accounts[3]
		const uintS4TKsk = BigInt("860")
		const addressYToCwOd = accounts[4]
		const addressEBv6bmA = accounts[2]
		const uintgPacn0h = BigInt("1557")
		const uintskrWWXO = BigInt("1963")
		const addressCnYqFr = accounts[1]
		const uintG6lZvZu = BigInt("31")
		const addressdeXUP5x = accounts[3]
		const addressyOKEYHB = accounts[5]
		const boolSuGmmnW = await XenoFelixNMMyxo6.increaseAllowance.call(addressBU2FiPJ, uintDsWL0VC, {from: accounts[1]});
		const boolTeY38vw = await XenoFelixNMMyxo6.transferFrom.call(addressEBv6bmA, addressYToCwOd, uintS4TKsk, {from: accounts[2]});
		const stringBxgcwgP = await XenoFelixNMMyxo6.name.call({from: accounts[0]});
		const boolLlSFfFF = await XenoFelixNMMyxo6.lock.call(addressCnYqFr, uintskrWWXO, uintgPacn0h, {from: accounts[2]});
		const boolC976wn = await XenoFelixNMMyxo6.transferFrom.call(addressyOKEYHB, addressdeXUP5x, uintG6lZvZu, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixm4MHKob = await XenoFelix.new({from: accounts[0]});
		const uintDvm2Sow = BigInt("1234")
		const uintATDkTjn = BigInt("2022")
		await XenoFelixm4MHKob.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTMAd3p7 = await XenoFelixm4MHKob.acceptOwnership.call({from: accounts[2]});
		const uint256pbCuhcw = await XenoFelixm4MHKob.burn.call(uintDvm2Sow, {from: accounts[4]});
		const uint256Niv66CD = await XenoFelixm4MHKob.burn.call(uintATDkTjn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringoT9GiFh = "EJMqLeSOivOQnXvimU4DMaeasT0wTffDDEY18Fm5nxQonz6NizSfv"
		const stringwoQMKQp = "vyE13dFOhkYVJMWCJKlJrQPOeieoK2vRuf1zOl4D213mdu"
		const uintBppMYG9 = BigInt("552")
		const uintkDDL2C = BigInt("35")
		const XenoFelixkDnca6E = await XenoFelix.new(stringoT9GiFh, stringwoQMKQp, uintBppMYG9, uintkDDL2C, {from: accounts[5]});
		const uintYKxe4R9 = BigInt("1728")
		const addressL7VyFou = accounts[0]
		const uintOlOWTHt = BigInt("1973")
		const addressfdJYraO = accounts[0]
		const addressxy4s6Fn = accounts[0]
		await XenoFelixkDnca6E.whenNotPaused.call({from: accounts[3]});
		const boolK6ld3YF = await XenoFelixkDnca6E.transfer.call(addressL7VyFou, uintYKxe4R9, {from: accounts[1]});
		const uint8chQ7fWn = await XenoFelixkDnca6E.decimals.call({from: accounts[2]});
		const boolf0LEYo4 = await XenoFelixkDnca6E.transferFrom.call(addressxy4s6Fn, addressfdJYraO, uintOlOWTHt, {from: accounts[3]});
		await XenoFelixkDnca6E.onlyPauser.call({from: accounts[1]});

		await expect(XenoFelixkDnca6E.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringXtPMYTC = "zVYTTSPwxJHBfwCcbV4LPoKsPO3xP9EQVnPPYOQstGAEMGQdCVSFw"
		const stringLzgOzuX = "A3dLdlfYdUXBNKZTQ6ZB509jYseXnNWkIIZXXgbeCmB4hvXoKoP"
		const uintGkMLDzv = BigInt("48")
		const uintqyIu48A = BigInt("52")
		const XenoFelixyGaZlrJ = await XenoFelix.new(stringXtPMYTC, stringLzgOzuX, uintGkMLDzv, uintqyIu48A, {from: accounts[1]});
		const uintn6fMRq = BigInt("696")
		const addressUOsF7gm = accounts[0]
		const addressB0vNHvz = "0x0000000000000000000000000000000000000001"
		const uintO8QJGbC = BigInt("373")
		const addressGqfY5Ah = accounts[1]
		const addressp7Rrxab = accounts[0]
		const addressbyYrMb3 = "0x0000000000000000000000000000000000000001"
		const addressCoGpKlD = accounts[1]
		const addressOBki57V = accounts[1]
		const uintHC1zwG = BigInt("1465")
		const addressPwu6fTU = accounts[1]
		const boolBq6arPo = await XenoFelixyGaZlrJ.transferFrom.call(addressB0vNHvz, addressUOsF7gm, uintn6fMRq, {from: accounts[1]});
		const boolVBeEBfH = await XenoFelixyGaZlrJ.decreaseAllowance.call(addressGqfY5Ah, uintO8QJGbC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256srsLUte = await XenoFelixyGaZlrJ.allowance.call(addressbyYrMb3, addressp7Rrxab, {from: accounts[5]});
		const uint256GfrODMl = await XenoFelixyGaZlrJ.allowance.call(addressOBki57V, addressCoGpKlD, {from: "0x0000000000000000000000000000000000000001"});
		const boolWLHnCwN = await XenoFelixyGaZlrJ.burnOwner.call(addressPwu6fTU, uintHC1zwG, {from: accounts[4]});

		await expect(XenoFelixyGaZlrJ.transferFrom.call(addressB0vNHvz, addressUOsF7gm, uintn6fMRq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringXtPMYTC = "zVYTTSPwxJHBfwCcbV4LPoKsPO3xP9EQVnPPYOQstGAEMGQdCVSFw"
		const stringLzgOzuX = "A3dLdlfYdUXBNKZTQ6ZB509jYseXnNWkIIZXXgbeCmB4hvXoKoP"
		const uintZ9BrNu9 = BigInt("48")
		const uintJCHPWqX = BigInt("52")
		const XenoFelixyGaZlrJ = await XenoFelix.new(stringXtPMYTC, stringLzgOzuX, uintZ9BrNu9, uintJCHPWqX, {from: accounts[1]});
		const addressfGwDMNK = accounts[0]
		const addressTrcSfoF = "0x0000000000000000000000000000000000000001"
		const addressEFi4Rn = accounts[1]
		const addresskXx5pQk = accounts[2]
		const uint256srsLUte = await XenoFelixyGaZlrJ.allowance.call(addressTrcSfoF, addressfGwDMNK, {from: accounts[5]});
		const uint256GfrODMl = await XenoFelixyGaZlrJ.allowance.call(addresskXx5pQk, addressEFi4Rn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256GfrODMl, BigInt("0"))
		assert.equal(uint256srsLUte, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringZTKeUdb = "az12p4HrLLdXEnIcKLHeaBJje8J8r3H4uH5KijJMsiHUYgz1xYkVGglUP8s4FVdQY4MLtxYfyW"
		const stringtbs2Wm6 = "JXPHURKgYa799PBrKkMN6zW4drDrOARlU709SlhsbwFw0t3ME17QhzcpuVHczqc4uzW5qvAsYOTaDYf1Y7eYYjNt"
		const uintf2lLkWQ = BigInt("151")
		const XenoFelixZpI6OBM = await XenoFelix.new(stringZTKeUdb, stringtbs2Wm6, uintf2lLkWQ, {from: accounts[4]});
		const uintL4rvmyO = BigInt("279")
		const uintoxcDQcR = BigInt("968")
		const addressBf3jYXz = accounts[1]
		const uinteDBUyjX = BigInt("552")
		const addressshBjXCM = accounts[1]
		const addressNXGfpyy = "0x0000000000000000000000000000000000000001"
		const addressQIaBUpY = accounts[5]
		const booluy4LAQ = await XenoFelixZpI6OBM.lock.call(addressBf3jYXz, uintoxcDQcR, uintL4rvmyO, {from: accounts[3]});
		const boolun9vTiQ = await XenoFelixZpI6OBM.decreaseAllowance.call(addressshBjXCM, uinteDBUyjX, {from: accounts[4]});
		await XenoFelixZpI6OBM.pause.call({from: accounts[2]});
		await XenoFelixZpI6OBM.whenPaused.call({from: accounts[1]});
		await XenoFelixZpI6OBM.onlyPauser.call({from: accounts[4]});
		const uint256pE0Yapq = await XenoFelixZpI6OBM.allowance.call(addressQIaBUpY, addressNXGfpyy, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringBcotUVf = "TTknH2kHRkJ"
		const strings68Yrrt = "L9OMsE2RQRSVxe7s8"
		const uintIINNRaf = BigInt("572")
		const uintO6T0D1U = BigInt("142")
		const XenoFelixKhhMmG9 = await XenoFelix.new(stringBcotUVf, strings68Yrrt, uintIINNRaf, uintO6T0D1U, {from: accounts[1]});
		const addresseOdk7N = accounts[1]
		const addressd8cCuAB = accounts[2]
		const uintR16NlUu = BigInt("1480")
		const uintliB7weS = BigInt("1088")
		const addressrASsEtF = accounts[1]
		const addressCFzJ2J = accounts[1]
		const uintslsaZX1 = BigInt("1675")
		const addressJn7dbRZ = accounts[1]
		const addresspAMDlRo = accounts[5]
		const uint256gmnLUnt = await XenoFelixKhhMmG9.balanceOf.call(addresseOdk7N, {from: accounts[4]});
		const boola017Dn9 = await XenoFelixKhhMmG9.unfreezeAccount.call(addressd8cCuAB, {from: accounts[4]});
		const boolrMlEDIj = await XenoFelixKhhMmG9.transferWithLock.call(addressrASsEtF, uintliB7weS, uintR16NlUu, {from: accounts[0]});
		const addressunFDfF = await XenoFelixKhhMmG9.addPauser.call(addressCFzJ2J, {from: accounts[1]});
		await XenoFelixKhhMmG9.pause.call({from: accounts[1]});
		const boolGe451p = await XenoFelixKhhMmG9.transferFrom.call(addresspAMDlRo, addressJn7dbRZ, uintslsaZX1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256I3Bcirf = await XenoFelixKhhMmG9.totalSupply.call({from: accounts[3]});

		assert.equal(uint256gmnLUnt, BigInt("39961481400127379737344781754080420116293595964758710200706728321913817399296"))
		await expect(XenoFelixKhhMmG9.unfreezeAccount.call(addressd8cCuAB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringXtPMYTC = "zVYTTSPwxJHBfwCcbV4LPoKsPO3xP9EQVnPPYOQstGAEMGQdCVSFw"
		const stringLzgOzuX = "A3dLdlfYdUXBNKZTQ6ZB509jYseXnNWkIIZXXgbeCmB4hvXoKoP"
		const uintRkcL1Rm = BigInt("48")
		const uintkeAolL9 = BigInt("52")
		const XenoFelixyGaZlrJ = await XenoFelix.new(stringXtPMYTC, stringLzgOzuX, uintRkcL1Rm, uintkeAolL9, {from: accounts[1]});
		const uintXtFm7qv = BigInt("2021")
		const addressFBw3pQ2 = accounts[3]
		const uintWMxgcvy = BigInt("696")
		const addressPQZSA5 = accounts[0]
		const addressHXGkg2Z = "0x0000000000000000000000000000000000000001"
		const uintDAjfDnm = BigInt("373")
		const addresssTXUi3B = accounts[1]
		const addressGKgpgHH = accounts[0]
		const addressU1uvyq = "0x0000000000000000000000000000000000000002"
		const addressZSwH6M = accounts[1]
		const addressPe4TqNH = accounts[1]
		const uint9s92wv = BigInt("1465")
		const addressrJlzTea = accounts[1]
		const boolepp3olI = await XenoFelixyGaZlrJ.transfer.call(addressFBw3pQ2, uintXtFm7qv, {from: accounts[3]});
		const boolBq6arPo = await XenoFelixyGaZlrJ.transferFrom.call(addressHXGkg2Z, addressPQZSA5, uintWMxgcvy, {from: accounts[1]});
		const boolVBeEBfH = await XenoFelixyGaZlrJ.decreaseAllowance.call(addresssTXUi3B, uintDAjfDnm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256srsLUte = await XenoFelixyGaZlrJ.allowance.call(addressU1uvyq, addressGKgpgHH, {from: accounts[5]});
		const uint256GfrODMl = await XenoFelixyGaZlrJ.allowance.call(addressPe4TqNH, addressZSwH6M, {from: "0x0000000000000000000000000000000000000001"});
		const boolWLHnCwN = await XenoFelixyGaZlrJ.burnOwner.call(addressrJlzTea, uint9s92wv, {from: accounts[4]});

		await expect(XenoFelixyGaZlrJ.transfer.call(addressFBw3pQ2, uintXtFm7qv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringXtPMYTC = "zVYTTSPwxJHBfwCcbV4LPoKsPO3xP9EQVnPPYOQstGAEMGQdCVSFw"
		const stringLzgOzuX = "A3dLdlfYdUXBNKZTQ6ZB509jYseXnNWkIIZXXgbeCmB4hvXoKoP"
		const uintm7eKLN9 = BigInt("48")
		const uintgHn42C4 = BigInt("52")
		const XenoFelixyGaZlrJ = await XenoFelix.new(stringXtPMYTC, stringLzgOzuX, uintm7eKLN9, uintgHn42C4, {from: accounts[1]});
		const uintrDU2KiA = BigInt("373")
		const addressm8kKBZK = accounts[1]
		const addressQ9vGbCX = accounts[0]
		const addressqWkpzOL = "0x0000000000000000000000000000000000000001"
		const addressFTyGvsx = accounts[1]
		const addressNF4mEk = accounts[1]
		const uintxF6rQWq = BigInt("1465")
		const addressVGKtNj = accounts[1]
		const boolVBeEBfH = await XenoFelixyGaZlrJ.decreaseAllowance.call(addressm8kKBZK, uintrDU2KiA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256srsLUte = await XenoFelixyGaZlrJ.allowance.call(addressqWkpzOL, addressQ9vGbCX, {from: accounts[5]});
		const uint256GfrODMl = await XenoFelixyGaZlrJ.allowance.call(addressNF4mEk, addressFTyGvsx, {from: "0x0000000000000000000000000000000000000001"});
		const boolWLHnCwN = await XenoFelixyGaZlrJ.burnOwner.call(addressVGKtNj, uintxF6rQWq, {from: accounts[4]});

		await expect(XenoFelixyGaZlrJ.decreaseAllowance.call(addressm8kKBZK, uintrDU2KiA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringxDaPriN = "xrzqdyfmLgcHlFjQ5M2qUEPIdUoxvAy82uw1M8jAs7Gk97Hn6vs3JlD4LQbTg448Luxd2CD"
		const stringXtqgn77 = "QP1U2zb9dNmcwujgdnaCN2hgg5RJEVcDOC1Phh30P4ea1tXX3GYuPUErqyFfw5MG7vty"
		const uintDDoWgr = BigInt("982")
		const uintmzhDUBO = BigInt("12")
		const XenoFelixyVLZ7wP = await XenoFelix.new(stringxDaPriN, stringXtqgn77, uintDDoWgr, uintmzhDUBO, {from: accounts[3]});
		const uint4d2c0G = BigInt("917")
		const addressLQ0RJ4s = accounts[0]
		const boolXzT1RzM = await XenoFelixyVLZ7wP.increaseAllowance.call(addressLQ0RJ4s, uint4d2c0G, {from: accounts[4]});
		await XenoFelixyVLZ7wP.onlyPauser.call({from: accounts[1]});

		assert.equal(boolXzT1RzM, true)
		await expect(XenoFelixyVLZ7wP.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringBcotUVf = "TTknH2kHRkJ"
		const strings68Yrrt = "L9OMsE2RQRSVxe7s8"
		const uintX7UdPbK = BigInt("572")
		const uintu05X6jA = BigInt("142")
		const XenoFelixKhhMmG9 = await XenoFelix.new(stringBcotUVf, strings68Yrrt, uintX7UdPbK, uintu05X6jA, {from: accounts[1]});
		const addressSbLwgf = accounts[1]
		const uintrSRWySA = BigInt("677")
		const addressFuWHJ5q = accounts[0]
		const addressZKttuK6 = accounts[2]
		const uintmwFKwi = BigInt("1480")
		const uintY60Ojr = BigInt("1088")
		const addressMNvXZEF = accounts[1]
		const addressgFOM5SV = accounts[1]
		const uintmZOuG5n = BigInt("1675")
		const addressh9n9Drm = accounts[1]
		const addressnORqc5X = accounts[5]
		const uint256gmnLUnt = await XenoFelixKhhMmG9.balanceOf.call(addressSbLwgf, {from: accounts[4]});
		const addressoXoN8Qr = await XenoFelixKhhMmG9.burnFrom.call(addressFuWHJ5q, uintrSRWySA, {from: accounts[4]});
		const boola017Dn9 = await XenoFelixKhhMmG9.unfreezeAccount.call(addressZKttuK6, {from: accounts[4]});
		const boolrMlEDIj = await XenoFelixKhhMmG9.transferWithLock.call(addressMNvXZEF, uintY60Ojr, uintmwFKwi, {from: accounts[0]});
		const addressunFDfF = await XenoFelixKhhMmG9.addPauser.call(addressgFOM5SV, {from: accounts[1]});
		const boolGe451p = await XenoFelixKhhMmG9.transferFrom.call(addressnORqc5X, addressh9n9Drm, uintmZOuG5n, {from: "0x0000000000000000000000000000000000000001"});
		const uint256I3Bcirf = await XenoFelixKhhMmG9.totalSupply.call({from: accounts[3]});

		assert.equal(uint256gmnLUnt, BigInt("39961481400127379737344781754080420116293595964758710200706728321913817399296"))
		await expect(XenoFelixKhhMmG9.burnFrom.call(addressFuWHJ5q, uintrSRWySA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringWqKEtZZ = "FCovfQSNuhlTCzDWBVAY2Hy37"
		const stringpxIzc9C = "MSMi9TsRDKcB8im8XhhkmZf1MmusQY6tmOPrVsf8bjX4kvolAaiGbKJN5B8znH9I85QFMTNrGRUdBN647kK8m8"
		const uintsjb1gjD = BigInt("418")
		const uintpi7uUT = BigInt("216")
		const XenoFelixlImXXhr = await XenoFelix.new(stringWqKEtZZ, stringpxIzc9C, uintsjb1gjD, uintpi7uUT, {from: accounts[2]});
		const addressi72bizp = accounts[0]
		const uintx9cBBus = BigInt("987")
		const addressgzBfnXR = "0x0000000000000000000000000000000000000001"
		const uint8Cw2ZM6K = await XenoFelixlImXXhr.decimals.call({from: accounts[3]});
		const boolR8KrtNO = await XenoFelixlImXXhr.freezeAccount.call(addressi72bizp, {from: accounts[3]});
		const boolup2i9Be = await XenoFelixlImXXhr.approve.call(addressgzBfnXR, uintx9cBBus, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8Cw2ZM6K, BigInt("216"))
		await expect(XenoFelixlImXXhr.freezeAccount.call(addressi72bizp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringxDaPriN = "xrzqdyfmLgcHlFjQ5M2qUEPIdUoxvAy82uw1M8jAs7Gk97Hn6vs3JlD4LQbTg448Luxd2CD"
		const stringXtqgn77 = "QP1U2zb9dNmcwujgdnaCN2hgg5RJEVcDOC1Phh30P4ea1tXX3GYuPUErqyFfw5MG7vty"
		const uintvgHe0Gv = BigInt("982")
		const uint5w5qoy = BigInt("12")
		const XenoFelixyVLZ7wP = await XenoFelix.new(stringxDaPriN, stringXtqgn77, uintvgHe0Gv, uint5w5qoy, {from: accounts[3]});
		const addressjxC4YkB = accounts[3]
		const uintC6C8Xhy = BigInt("1006")
		const addressJMNZpqy = accounts[0]
		const uintaFzncF = BigInt("755")
		const uintmH9VBWS = BigInt("428")
		const addresse5gYJJL = accounts[1]
		const addressLMWn1a = accounts[4]
		const addressi1a93YI = await XenoFelixyVLZ7wP.removePauser.call(addressjxC4YkB, {from: accounts[3]});
		const boolxVq2Yum = await XenoFelixyVLZ7wP.transfer.call(addressJMNZpqy, uintC6C8Xhy, {from: accounts[4]});
		const boolVUaVHWF = await XenoFelixyVLZ7wP.lock.call(addresse5gYJJL, uintmH9VBWS, uintaFzncF, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixyVLZ7wP.onlyPauser.call({from: accounts[1]});
		const addressQmBuqKf = await XenoFelixyVLZ7wP.notFrozen.call(addressLMWn1a, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixyVLZ7wP.transfer.call(addressJMNZpqy, uintC6C8Xhy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringxumcJAC = "3T"
		const stringpGFUQYR = "bjR3TBqL92qMo8vPR5s"
		const uintrzlLatE = BigInt("76")
		const XenoFelixyLEFoRK = await XenoFelix.new(stringxumcJAC, stringpGFUQYR, uintrzlLatE, {from: "0x0000000000000000000000000000000000000001"});
		const uintOS8kbMJ = BigInt("732")
		const addressZOF5SaG = accounts[5]
		const addresstdzhE04 = accounts[2]
		const addressR7FuqSG = accounts[5]
		const boolMV3kz7a = await XenoFelixyLEFoRK.transfer.call(addressZOF5SaG, uintOS8kbMJ, {from: accounts[4]});
		const uint256I7xbCV2 = await XenoFelixyLEFoRK.balanceOf.call(addresstdzhE04, {from: accounts[4]});
		await XenoFelixyLEFoRK.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8cUffX7B = await XenoFelixyLEFoRK.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const addressZucGGT = await XenoFelixyLEFoRK.notFrozen.call(addressR7FuqSG, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringxDaPriN = "xrzqdyfmLgcHlFjQ5M2qUEPIdUoxvAy82uw1M8jAs7Gk97Hn6vs3JlD4LQbTg448Luxd2CD"
		const stringXtqgn77 = "QP1U2zb9dNmcwujgdnaCN2hgg5RJEVcDOC1Phh30P4ea1tXX3GYuPUErqyFfw5MG7vty"
		const uintvSDkhwZ = BigInt("982")
		const uinthdcYw7z = BigInt("12")
		const XenoFelixyVLZ7wP = await XenoFelix.new(stringxDaPriN, stringXtqgn77, uintvSDkhwZ, uinthdcYw7z, {from: accounts[3]});
		const uintAyM3Yz = BigInt("1020")
		const addressl4pkQd = accounts[0]
		const boollHBn9qH = await XenoFelixyVLZ7wP.paused.call({from: accounts[1]});
		const boolxVq2Yum = await XenoFelixyVLZ7wP.transfer.call(addressl4pkQd, uintAyM3Yz, {from: accounts[4]});
		await XenoFelixyVLZ7wP.onlyPauser.call({from: accounts[1]});

		assert.equal(boollHBn9qH, false)
		await expect(XenoFelixyVLZ7wP.transfer.call(addressl4pkQd, uintAyM3Yz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringxDaPriN = "xrzqdyfmLgcHlFjQ5M2qUEPIdUoxvAy82uw1M8jAs7Gk97Hn6vs3JlD4LQbTg448Luxd2CD"
		const stringXtqgn77 = "QP1U2zb9dNmcwujgdnaCN2hgg5RJEVcDOC1Phh30P4ea1tXX3GYuPUErqyFfw5MG7vty"
		const uintCgcrQRJ = BigInt("982")
		const uintEM7bjfE = BigInt("12")
		const XenoFelixyVLZ7wP = await XenoFelix.new(stringxDaPriN, stringXtqgn77, uintCgcrQRJ, uintEM7bjfE, {from: accounts[3]});
		const addressDPClKhT = accounts[3]
		const uintixBAhTp = BigInt("1020")
		const addressYg4834z = accounts[1]
		const uintKY1ngh8 = BigInt("262")
		const uintX45PQhu = BigInt("766")
		const addressZtJ627y = accounts[0]
		const boollHBn9qH = await XenoFelixyVLZ7wP.paused.call({from: accounts[1]});
		const boolM8eiZrU = await XenoFelixyVLZ7wP.unfreezeAccount.call(addressDPClKhT, {from: accounts[3]});
		const boolxVq2Yum = await XenoFelixyVLZ7wP.transfer.call(addressYg4834z, uintixBAhTp, {from: accounts[4]});
		const uint256bb7CXMg = await XenoFelixyVLZ7wP.burn.call(uintKY1ngh8, {from: accounts[4]});
		await XenoFelixyVLZ7wP.onlyPauser.call({from: accounts[1]});
		const addressKiyJIvx = await XenoFelixyVLZ7wP.burnFrom.call(addressZtJ627y, uintX45PQhu, {from: accounts[0]});

		assert.equal(boollHBn9qH, false)
		await expect(XenoFelixyVLZ7wP.unfreezeAccount.call(addressDPClKhT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringBcotUVf = "TTknH2kHRkJ"
		const strings68Yrrt = "L9OMsE2RQRSVxe7s8"
		const uintjQokLQs = BigInt("572")
		const uintknkPrgv = BigInt("142")
		const XenoFelixKhhMmG9 = await XenoFelix.new(stringBcotUVf, strings68Yrrt, uintjQokLQs, uintknkPrgv, {from: accounts[1]});
		const addressnTGbjSF = accounts[2]
		const addressoGWV4tb = accounts[0]
		const addressGE3Jdxx = accounts[2]
		const uintYrNIOD5 = BigInt("1480")
		const uintcSUx30f = BigInt("1088")
		const addressp70EzbR = accounts[1]
		const addresstToFFhJ = accounts[2]
		const uint256gmnLUnt = await XenoFelixKhhMmG9.balanceOf.call(addressnTGbjSF, {from: accounts[4]});
		const booldw7PsuU = await XenoFelixKhhMmG9.freezeAccount.call(addressoGWV4tb, {from: accounts[1]});
		const uint256Ie0Z1hm = await XenoFelixKhhMmG9.totalSupply.call({from: accounts[4]});
		const boola017Dn9 = await XenoFelixKhhMmG9.unfreezeAccount.call(addressGE3Jdxx, {from: accounts[4]});
		const boolrMlEDIj = await XenoFelixKhhMmG9.transferWithLock.call(addressp70EzbR, uintcSUx30f, uintYrNIOD5, {from: accounts[0]});
		const addressunFDfF = await XenoFelixKhhMmG9.addPauser.call(addresstToFFhJ, {from: accounts[1]});
		const uint256I3Bcirf = await XenoFelixKhhMmG9.totalSupply.call({from: accounts[3]});

		assert.equal(booldw7PsuU, true)
		assert.equal(uint256Ie0Z1hm, BigInt("39961481400127379737344781754080420116293595964758710200706728321913817399296"))
		assert.equal(uint256gmnLUnt, BigInt("0"))
		await expect(XenoFelixKhhMmG9.unfreezeAccount.call(addressGE3Jdxx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringBcotUVf = "TTknH2kHRkJ"
		const strings68Yrrt = "L9OMsE2RQRSVxe7s8"
		const uintRThipYN = BigInt("572")
		const uintqCyp2K5 = BigInt("142")
		const XenoFelixKhhMmG9 = await XenoFelix.new(stringBcotUVf, strings68Yrrt, uintRThipYN, uintqCyp2K5, {from: accounts[1]});
		const address4a89bL = accounts[1]
		const uintOiQLfRb = BigInt("1491")
		const addresss9eFkCD = accounts[1]
		const addressSen72Fj = accounts[2]
		const uintdW4gKiy = BigInt("1480")
		const uintYjdirG = BigInt("1088")
		const addressvaR5jsM = accounts[1]
		const addressc2oKctd = "0x0000000000000000000000000000000000000001"
		const addressSEWAN72 = accounts[2]
		const uint256gmnLUnt = await XenoFelixKhhMmG9.balanceOf.call(address4a89bL, {from: accounts[4]});
		const boolboHFob = await XenoFelixKhhMmG9.burnOwner.call(addresss9eFkCD, uintOiQLfRb, {from: accounts[1]});
		const boola017Dn9 = await XenoFelixKhhMmG9.unfreezeAccount.call(addressSen72Fj, {from: accounts[4]});
		const boolrMlEDIj = await XenoFelixKhhMmG9.transferWithLock.call(addressvaR5jsM, uintYjdirG, uintdW4gKiy, {from: accounts[0]});
		const addressGdvhd6T = await XenoFelixKhhMmG9.notFrozen.call(addressc2oKctd, {from: accounts[0]});
		const addressunFDfF = await XenoFelixKhhMmG9.addPauser.call(addressSEWAN72, {from: accounts[1]});
		await XenoFelixKhhMmG9.pause.call({from: accounts[1]});
		const uint256I3Bcirf = await XenoFelixKhhMmG9.totalSupply.call({from: accounts[3]});

		assert.equal(boolboHFob, true)
		assert.equal(uint256gmnLUnt, BigInt("39961481400127379737344781754080420116293595964758710200706728321913817399296"))
		await expect(XenoFelixKhhMmG9.unfreezeAccount.call(addressSen72Fj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringBcotUVf = "TTknH2kHRkJ"
		const strings68Yrrt = "L9OMsE2RQRSVxe7s8"
		const uintHcKdmcA = BigInt("572")
		const uintzT4GIXF = BigInt("142")
		const XenoFelixKhhMmG9 = await XenoFelix.new(stringBcotUVf, strings68Yrrt, uintHcKdmcA, uintzT4GIXF, {from: accounts[1]});
		const addressMvkUMx6 = accounts[1]
		const addressGu1gtOX = accounts[2]
		const uintFbKogc7 = BigInt("1480")
		const uintbMHfhXa = BigInt("1081")
		const addressTshg1J = accounts[1]
		const addressXaMvaz7 = accounts[2]
		const stringPY7PgmV = await XenoFelixKhhMmG9.name.call({from: accounts[3]});
		const uint256gmnLUnt = await XenoFelixKhhMmG9.balanceOf.call(addressMvkUMx6, {from: accounts[4]});
		const boola017Dn9 = await XenoFelixKhhMmG9.unfreezeAccount.call(addressGu1gtOX, {from: accounts[4]});
		const boolrMlEDIj = await XenoFelixKhhMmG9.transferWithLock.call(addressTshg1J, uintbMHfhXa, uintFbKogc7, {from: accounts[0]});
		const addressunFDfF = await XenoFelixKhhMmG9.addPauser.call(addressXaMvaz7, {from: accounts[1]});
		const uint256I3Bcirf = await XenoFelixKhhMmG9.totalSupply.call({from: accounts[3]});

		assert.equal(stringPY7PgmV, "TTknH2kHRkJ")
		assert.equal(uint256gmnLUnt, BigInt("39961481400127379737344781754080420116293595964758710200706728321913817399296"))
		await expect(XenoFelixKhhMmG9.unfreezeAccount.call(addressGu1gtOX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringBcotUVf = "TTknH2kHRkJ"
		const strings68Yrrt = "L9OMsE2RQRSVxe7s8"
		const uintmat66m0 = BigInt("572")
		const uintZf4J4VE = BigInt("142")
		const XenoFelixKhhMmG9 = await XenoFelix.new(stringBcotUVf, strings68Yrrt, uintmat66m0, uintZf4J4VE, {from: accounts[1]});
		const addressD1hMqbu = accounts[4]
		const addresszjt3rMl = accounts[5]
		const addressPrZRWtP = accounts[0]
		const uintMMFMtk = BigInt("1480")
		const uintGnBLR8E = BigInt("1088")
		const addressd6J0yEL = accounts[1]
		const addressuLUDuVA = accounts[2]
		const stringvIE70HX = await XenoFelixKhhMmG9.symbol.call({from: accounts[1]});
		const boola017Dn9 = await XenoFelixKhhMmG9.unfreezeAccount.call(addressD1hMqbu, {from: accounts[4]});
		const uint256o8ROAfK = await XenoFelixKhhMmG9.balanceOf.call(addresszjt3rMl, {from: accounts[2]});
		const boolypcLemt = await XenoFelixKhhMmG9.unfreezeAccount.call(addressPrZRWtP, {from: "0x0000000000000000000000000000000000000001"});
		const boolrMlEDIj = await XenoFelixKhhMmG9.transferWithLock.call(addressd6J0yEL, uintGnBLR8E, uintMMFMtk, {from: accounts[0]});
		const stringn1jbAsd = await XenoFelixKhhMmG9.name.call({from: accounts[5]});
		const addressunFDfF = await XenoFelixKhhMmG9.addPauser.call(addressuLUDuVA, {from: accounts[1]});
		const uint256I3Bcirf = await XenoFelixKhhMmG9.totalSupply.call({from: accounts[3]});

		assert.equal(stringvIE70HX, "L9OMsE2RQRSVxe7s8")
		await expect(XenoFelixKhhMmG9.unfreezeAccount.call(addressD1hMqbu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringubD9aL = "w42"
		const stringO6nKUWr = "XSZV6G034Ou4C5qJPgIGQaq5Dcrwb2wr4mSghLS9hLtnPIp"
		const uintT1CDJ6h = BigInt("1009")
		const uintpsQBIoK = BigInt("75")
		const XenoFelixREbSScz = await XenoFelix.new(stringubD9aL, stringO6nKUWr, uintT1CDJ6h, uintpsQBIoK, {from: accounts[2]});
		const addressGYea3QL = accounts[2]
		const addressbfxW8nq = accounts[2]
		const uintXKNMISE = BigInt("1906")
		const addressx9iwjny = accounts[0]
		const addressjBhDBy8 = accounts[4]
		const addressvEGD5P = accounts[4]
		const uintftj1UJ9 = BigInt("1668")
		const addressJEIVskh = accounts[4]
		const booli756Ppx = await XenoFelixREbSScz.isOwner.call(addressGYea3QL, {from: accounts[4]});
		const boolqRgM84 = await XenoFelixREbSScz.freezeAccount.call(addressbfxW8nq, {from: accounts[5]});
		const boolyWigWdR = await XenoFelixREbSScz.transferFrom.call(addressjBhDBy8, addressx9iwjny, uintXKNMISE, {from: accounts[4]});
		const uint256ij1Ty8f = await XenoFelixREbSScz.balanceOf.call(addressvEGD5P, {from: accounts[2]});
		const boolyFGl3rm = await XenoFelixREbSScz.transfer.call(addressJEIVskh, uintftj1UJ9, {from: accounts[4]});

		assert.equal(booli756Ppx, true)
		await expect(XenoFelixREbSScz.freezeAccount.call(addressbfxW8nq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringTBZL3Cs = "gtsk3cpBdo6KVpWtSwzscNjqlSIgOR5cHRuiunQxnsQgie4vG5YOqKP87y5nEqwkARH6s0HSzRE1O5nUayAQDkbO8fC"
		const stringosqKTfQ = "i9wdC0wAyxIwLxeTlMp1XAl2Xz2p2XGF"
		const uintYok2TLb = BigInt("1619")
		const uintwPB401 = BigInt("65")
		const XenoFelixGtoN5Ih = await XenoFelix.new(stringTBZL3Cs, stringosqKTfQ, uintYok2TLb, uintwPB401, {from: "0x0000000000000000000000000000000000000001"});
		const uinttjcmiGm = BigInt("454")
		const addressr5Lwtqn = accounts[3]
		const addressS4ni3fG = accounts[5]
		const uintaqmm9f = BigInt("1218")
		const addressSC3aYI0 = accounts[1]
		const uintetzidU = BigInt("1948")
		const uintNq5wyPy = BigInt("1459")
		const addressRDPcpL2 = accounts[0]
		const uintefgi86 = BigInt("877")
		const uintpcGiUHr = BigInt("434")
		const addressi7VBbg5 = accounts[4]
		const addressWcjoO8t = accounts[1]
		const addressSj35ClF = await XenoFelixGtoN5Ih.burnFrom.call(addressr5Lwtqn, uinttjcmiGm, {from: "0x0000000000000000000000000000000000000001"});
		const addresst28G7og = await XenoFelixGtoN5Ih.removePauser.call(addressS4ni3fG, {from: accounts[0]});
		const addressZDd4qcb = await XenoFelixGtoN5Ih.burnFrom.call(addressSC3aYI0, uintaqmm9f, {from: accounts[2]});
		const boolvKiP8wZ = await XenoFelixGtoN5Ih.lock.call(addressRDPcpL2, uintNq5wyPy, uintetzidU, {from: accounts[0]});
		const boolS7LdYdY = await XenoFelixGtoN5Ih.transferWithLock.call(addressi7VBbg5, uintpcGiUHr, uintefgi86, {from: accounts[3]});
		const uint256YmRBNkb = await XenoFelixGtoN5Ih.balanceOf.call(addressWcjoO8t, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringBcotUVf = "TTknH2kHRkJ"
		const strings68Yrrt = "L9OMsE2RQRSVxe7s8"
		const uintWJf5DxD = BigInt("572")
		const uintUOzpCk2 = BigInt("142")
		const XenoFelixKhhMmG9 = await XenoFelix.new(stringBcotUVf, strings68Yrrt, uintWJf5DxD, uintUOzpCk2, {from: accounts[1]});
		const uintkgCeGcX = BigInt("1805")
		const uintiKGqTkU = BigInt("1580")
		const addressbs9xrp1 = accounts[2]
		const addressDapHklT = accounts[3]
		const uint256TLUWMsZ = await XenoFelixKhhMmG9.burn.call(uintkgCeGcX, {from: accounts[4]});
		const addressEahGJyw = await XenoFelixKhhMmG9.burnFrom.call(addressbs9xrp1, uintiKGqTkU, {from: accounts[4]});
		const uint256gmnLUnt = await XenoFelixKhhMmG9.balanceOf.call(addressDapHklT, {from: accounts[4]});

		await expect(XenoFelixKhhMmG9.burn.call(uintkgCeGcX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringl7rMBUK = "ynCpS6BoaJ49Lt6bJii39yzh8RoWeyjPWwNvDZo3hksNpVFC4JDARsBkTtZezjU87PZQfWoaR9JaSCWhkHonSrMJuUs"
		const stringopAfB0Q = "6cC7RDSXCiYe7lIPxFDYpsnl11bC1ukqwRFlqqfFIJng4YHohNedWbmbjPuhdZUgJkjin2WrlXwhROoFOBmmpSWeu"
		const uinteySvZeI = BigInt("448")
		const uintCOnU4Wd = BigInt("124")
		const XenoFelixylhgKVY = await XenoFelix.new(stringl7rMBUK, stringopAfB0Q, uinteySvZeI, uintCOnU4Wd, {from: accounts[1]});
		const uintS7ZlD7Z = BigInt("1210")
		const addressYU86BG8 = accounts[5]
		const uintUJKXzhY = BigInt("1272")
		const addressbQlDNi9 = "0x0000000000000000000000000000000000000001"
		const addressHMGX7XA = accounts[2]
		const uintChabeIM = BigInt("1159")
		const addressEKYzi0l = accounts[1]
		const addressCw6wThp = accounts[4]
		const boolR4rbGq8 = await XenoFelixylhgKVY.approve.call(addressYU86BG8, uintS7ZlD7Z, {from: accounts[1]});
		const boolQbBeKKs = await XenoFelixylhgKVY.transfer.call(addressbQlDNi9, uintUJKXzhY, {from: accounts[1]});
		const addressOIO9fq = await XenoFelixylhgKVY.transferOwnership.call(addressHMGX7XA, {from: accounts[0]});
		const boolHLllOkf = await XenoFelixylhgKVY.decreaseAllowance.call(addressEKYzi0l, uintChabeIM, {from: accounts[3]});
		const addresshwmZ66T = await XenoFelixylhgKVY.addPauser.call(addressCw6wThp, {from: accounts[2]});
		await XenoFelixylhgKVY.renouncePauser.call({from: accounts[1]});

		assert.equal(boolQbBeKKs, true)
		assert.equal(boolR4rbGq8, true)
		await expect(XenoFelixylhgKVY.transferOwnership.call(addressHMGX7XA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})