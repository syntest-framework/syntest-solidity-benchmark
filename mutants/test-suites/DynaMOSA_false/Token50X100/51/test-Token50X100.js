const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100sxek9ja = await Token50X100.new({from: accounts[0]});
		const uintpzjlXbO = BigInt("691")
		const uintLm2rwwO = BigInt("1084")
		const addressEBst4to = accounts[0]
		const uintVhZdZHT = BigInt("1737")
		const addressYy6X8Yh = accounts[5]
//		const boolaPdC5Y2 = await Token50X100sxek9ja.safeLock.call(uintLm2rwwO, uintpzjlXbO, {from: accounts[1]});
//		const uint256RIa4Vpj = await Token50X100sxek9ja.balanceOf.call(addressEBst4to, {from: accounts[0]});
//		const boolr0aa1K = await Token50X100sxek9ja.increaseApproval.call(addressYy6X8Yh, uintVhZdZHT, {from: accounts[0]});

		await expect(Token50X100sxek9ja.safeLock.call(uintLm2rwwO, uintpzjlXbO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HOAv0lP = await Token50X100.new({from: accounts[5]});
		const uintZyPaSGM = BigInt("935")
		const addressXzB0DJy = accounts[3]
		const uintN5EPk0 = BigInt("1920")
		const boolcFHkS7t = await Token50X100HOAv0lP.increaseApproval.call(addressXzB0DJy, uintZyPaSGM, {from: accounts[5]});
		const boolV22FrYe = await Token50X100HOAv0lP.setMaxLockPeriod.call(uintN5EPk0, {from: accounts[1]});
//		await Token50X100HOAv0lP.lock.call({from: accounts[0]});

		assert.equal(boolV22FrYe, false)
		assert.equal(boolcFHkS7t, true)
		await expect(Token50X100HOAv0lP.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100X3y1UJL = await Token50X100.new({from: accounts[2]});
		const uintkyxVwvS = BigInt("1278")
		const addressQt9vJgJ = accounts[5]
		const uintKNrCueA = BigInt("569")
		const address5JK4ue = accounts[4]
		const addressgK08D3c = accounts[4]
		const uintVZXvCI = BigInt("904")
		const uintVPVhwC0 = BigInt("1031")
		const addressfd53RyO = accounts[5]
		const addressV26mvur = accounts[2]
		const uintJ0uSVgY = BigInt("213")
		const stringEtBaYSJ = "ITpMr2uQokXupqbmmnt6YPinbn78RDtxa2vAmMIlkayOGGGq1o44ln5QrE7r8O5ctIuSunjjappiCwT"
		const stringRgljsDD = "GmG"
		const boolEqGgY7b = await Token50X100X3y1UJL.decreaseApproval.call(addressQt9vJgJ, uintkyxVwvS, {from: accounts[4]});
//		const boolnmQqXUJ = await Token50X100X3y1UJL.transferFrom.call(addressgK08D3c, address5JK4ue, uintKNrCueA, {from: "0x0000000000000000000000000000000000000001"});
//		const boolekVAxkH = await Token50X100X3y1UJL.setVesting.call(addressfd53RyO, uintVPVhwC0, uintVZXvCI, {from: "0x0000000000000000000000000000000000000001"});
//		const addresspRFo3p7 = await Token50X100X3y1UJL.transferOwnership.call(addressV26mvur, {from: accounts[5]});
//		await Token50X100X3y1UJL.setSymbolNameDecimals.call(stringRgljsDD, stringEtBaYSJ, uintJ0uSVgY, {from: accounts[3]});

		assert.equal(boolEqGgY7b, true)
		await expect(Token50X100X3y1UJL.transferFrom.call(addressgK08D3c, address5JK4ue, uintKNrCueA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100JyjIMs3 = await Token50X100.new({from: accounts[3]});
		const address6NhxMu = accounts[4]
		const uinttQ6uhyL = BigInt("383")
		const uintHnTAavD = BigInt("1577")
		const uint256gqBd98J = await Token50X100JyjIMs3.balanceOf.call(address6NhxMu, {from: accounts[2]});
//		const boolFikcgIQ = await Token50X100JyjIMs3.safeLock.call(uintHnTAavD, uinttQ6uhyL, {from: accounts[2]});
//		await Token50X100JyjIMs3.release.call({from: accounts[1]});

		assert.equal(uint256gqBd98J, BigInt("0"))
		await expect(Token50X100JyjIMs3.safeLock.call(uintHnTAavD, uinttQ6uhyL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Y0DBg0t = await Token50X100.new({from: accounts[0]});
		const uinteSnrHBy = BigInt("254")
		const stringtMxa197 = "vTS"
		const stringf4dHNAL = "UTPMmlbuEIEsBoNaeLJUP8rRZT3Yeb4AbPmQKI4xhmNa4Jy6GEusfFTnOk1b7tN2gwHSSvBuRiQElMWv2HBKwQ"
		const uintFgUfnlk = BigInt("454")
		const addressp9PKqQb = accounts[3]
		const uintWO5Mlsz = BigInt("721")
		const addressUwX2iCv = accounts[1]
		const uintVA7sBX = BigInt("95")
		const stringOc00LbE = "JMMqIcnQvwQomFWl1L7Q4"
		const stringDmkgAbt = "RjJZJln7YDEfJK1V5XRB"
//		await Token50X100Y0DBg0t.setSymbolNameDecimals.call(stringf4dHNAL, stringtMxa197, uinteSnrHBy, {from: accounts[0]});
//		await Token50X100Y0DBg0t.release.call({from: accounts[2]});
//		const boolfAgPWOq = await Token50X100Y0DBg0t.transfer.call(addressp9PKqQb, uintFgUfnlk, {from: accounts[4]});
//		const boolsw0ghgT = await Token50X100Y0DBg0t.decreaseApproval.call(addressUwX2iCv, uintWO5Mlsz, {from: accounts[3]});
//		const booljZDbsUQ = await Token50X100Y0DBg0t.setSymbolNameDecimals.call(stringDmkgAbt, stringOc00LbE, uintVA7sBX, {from: accounts[2]});

		await expect(Token50X100Y0DBg0t.setSymbolNameDecimals.call(stringf4dHNAL, stringtMxa197, uinteSnrHBy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100KEfi7hZ = await Token50X100.new({from: accounts[3]});
		const uintEOv5sxh = BigInt("1039")
		const addressxIkUclH = "0x0000000000000000000000000000000000000001"
		const addressIDbcZ8a = accounts[1]
		const addressrcMf9MA = accounts[2]
		const uint9bn0wq = BigInt("267")
		const addressdVk9Iw = accounts[3]
		const uintK4dOJ1 = BigInt("82")
		const addressjW7QlKW = accounts[5]
		const uintXzos1uC = BigInt("1306")
		const uint3rzljm = BigInt("1316")
		const addressAMR72r = accounts[5]
		const uintqVycOr4 = BigInt("1169")
		const uintf6USAme = BigInt("421")
		const addresshcwTVu = accounts[1]
		const uintL6Pc6qw = BigInt("1206")
		const addressFIKU8ml = accounts[1]
		const uintdXpSSa = BigInt("1676")
		const addresshHBgsbb = accounts[2]
		const addressXtp3MiB = accounts[0]
		const boolDe1L9Z8 = await Token50X100KEfi7hZ.decreaseApproval.call(addressxIkUclH, uintEOv5sxh, {from: accounts[1]});
//		await Token50X100KEfi7hZ.setLinkingAddresses.call(addressrcMf9MA, addressIDbcZ8a, {from: accounts[3]});
//		const boolHcPapXc = await Token50X100KEfi7hZ.decreaseApproval.call(addressdVk9Iw, uint9bn0wq, {from: accounts[2]});
//		const boolUN8cY3i = await Token50X100KEfi7hZ.transfer.call(addressjW7QlKW, uintK4dOJ1, {from: accounts[4]});
//		const boolycbGDh4 = await Token50X100KEfi7hZ.setVesting.call(addressAMR72r, uint3rzljm, uintXzos1uC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolugiaSb = await Token50X100KEfi7hZ.setVesting.call(addresshcwTVu, uintf6USAme, uintqVycOr4, {from: accounts[1]});
//		await Token50X100KEfi7hZ.release.call({from: accounts[2]});
//		const boolMmoLXEp = await Token50X100KEfi7hZ.transfer.call(addressFIKU8ml, uintL6Pc6qw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolA48N9Fv = await Token50X100KEfi7hZ.transferFrom.call(addressXtp3MiB, addresshHBgsbb, uintdXpSSa, {from: accounts[2]});

		assert.equal(boolDe1L9Z8, true)
		await expect(Token50X100KEfi7hZ.setLinkingAddresses.call(addressrcMf9MA, addressIDbcZ8a, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HOAv0lP = await Token50X100.new({from: accounts[5]});
		const uintS2iB7Ka = BigInt("283")
		const uintYYAdagP = BigInt("609")
		const addressUqR69TO = accounts[2]
		const addressRXLkwD4 = accounts[1]
		const addressrUQAhuA = "0x0000000000000000000000000000000000000001"
		const addressplHJHJk = accounts[3]
		const uintcr8Vs3S = BigInt("935")
		const addressZJx0dzD = accounts[3]
		const addressUyFeiU = accounts[5]
		const address7cRssQ = accounts[4]
//		const boolUmVlRz = await Token50X100HOAv0lP._transfer.call(addressRXLkwD4, addressUqR69TO, uintYYAdagP, uintS2iB7Ka, {from: accounts[5]});
//		await Token50X100HOAv0lP.setLinkingAddresses.call(addressplHJHJk, addressrUQAhuA, {from: accounts[3]});
//		const boolcFHkS7t = await Token50X100HOAv0lP.increaseApproval.call(addressZJx0dzD, uintcr8Vs3S, {from: accounts[5]});
//		await Token50X100HOAv0lP.lock.call({from: accounts[0]});
//		const uint256AT7SHWj = await Token50X100HOAv0lP.allowance.call(address7cRssQ, addressUyFeiU, {from: accounts[2]});

		await expect(Token50X100HOAv0lP._transfer.call(addressRXLkwD4, addressUqR69TO, uintYYAdagP, uintS2iB7Ka, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100l7gSIU7 = await Token50X100.new({from: accounts[3]});
		const uintOX0cYPf = BigInt("1777")
		const addressCeq8hbh = accounts[0]
		const uintVp0n7UJ = BigInt("1831")
		const addressIlNWTAH = accounts[1]
		const addresstANHNje = accounts[5]
		const uintFCiL5YM = BigInt("1160")
		const addressUcsNPb = accounts[4]
		const boolGWSYZUu = await Token50X100l7gSIU7.increaseApproval.call(addressCeq8hbh, uintOX0cYPf, {from: accounts[2]});
//		const boolhjkIQQq = await Token50X100l7gSIU7.issueTokens.call(addresstANHNje, addressIlNWTAH, uintVp0n7UJ, {from: accounts[3]});
//		const boolgdQDCm = await Token50X100l7gSIU7.decreaseApproval.call(addressUcsNPb, uintFCiL5YM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGWSYZUu, true)
		await expect(Token50X100l7gSIU7.issueTokens.call(addresstANHNje, addressIlNWTAH, uintVp0n7UJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100KEfi7hZ = await Token50X100.new({from: accounts[3]});
		const uintVQRQo7i = BigInt("1039")
		const addressRRQUsaT = "0x0000000000000000000000000000000000000001"
		const addressxPF1Qla = accounts[1]
		const addressJL7GaZ = accounts[2]
		const addressaxIPKIx = accounts[2]
		const addressUUFYTfM = accounts[3]
		const boolbePaDY = true
		const addressyVUB0LR = accounts[1]
		const uintiiNJyB5 = BigInt("267")
		const addressjJlfdXH = accounts[3]
		const uintm43Z16 = BigInt("82")
		const addressOw9u5uO = accounts[5]
		const uintUJpFO0d = BigInt("1306")
		const uintf1vbMkM = BigInt("1316")
		const addresspZyby4Y = accounts[5]
		const uintKhC6iVE = BigInt("1169")
		const uintVVmuhLo = BigInt("421")
		const addresso7aKU3K = accounts[1]
		const uintic9EKlU = BigInt("1235")
		const addressZB9GtK = accounts[1]
		const uintIQ0m4N = BigInt("1676")
		const addressI0xXzuL = accounts[2]
		const addressV16gvU = accounts[0]
		const boolDe1L9Z8 = await Token50X100KEfi7hZ.decreaseApproval.call(addressRRQUsaT, uintVQRQo7i, {from: accounts[1]});
//		await Token50X100KEfi7hZ.setLinkingAddresses.call(addressJL7GaZ, addressxPF1Qla, {from: accounts[3]});
//		const uint256Wm8OmDa = await Token50X100KEfi7hZ.allowance.call(addressUUFYTfM, addressaxIPKIx, {from: accounts[4]});
//		await Token50X100KEfi7hZ.setWhiteListReceivers.call(addressyVUB0LR, boolbePaDY, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHcPapXc = await Token50X100KEfi7hZ.decreaseApproval.call(addressjJlfdXH, uintiiNJyB5, {from: accounts[2]});
//		const boolUN8cY3i = await Token50X100KEfi7hZ.transfer.call(addressOw9u5uO, uintm43Z16, {from: accounts[4]});
//		const boolycbGDh4 = await Token50X100KEfi7hZ.setVesting.call(addresspZyby4Y, uintf1vbMkM, uintUJpFO0d, {from: "0x0000000000000000000000000000000000000001"});
//		const boolugiaSb = await Token50X100KEfi7hZ.setVesting.call(addresso7aKU3K, uintVVmuhLo, uintKhC6iVE, {from: accounts[1]});
//		await Token50X100KEfi7hZ.release.call({from: accounts[2]});
//		const boolMmoLXEp = await Token50X100KEfi7hZ.transfer.call(addressZB9GtK, uintic9EKlU, {from: "0x0000000000000000000000000000000000000001"});
//		const boolA48N9Fv = await Token50X100KEfi7hZ.transferFrom.call(addressV16gvU, addressI0xXzuL, uintIQ0m4N, {from: accounts[2]});

		assert.equal(boolDe1L9Z8, true)
		await expect(Token50X100KEfi7hZ.setLinkingAddresses.call(addressJL7GaZ, addressxPF1Qla, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100KEfi7hZ = await Token50X100.new({from: accounts[3]});
		const uintqzmWtxG = BigInt("137")
		const addressguFhuzv = accounts[3]
		const uintiXvAFrA = BigInt("416")
		const addresskyZnkt = accounts[2]
		const uintNuKsTss = BigInt("1038")
		const addressF66fZMZ = "0x0000000000000000000000000000000000000001"
		const uintA7Nf8pO = BigInt("267")
		const addressG7dHv2Q = accounts[3]
		const uintyn88kw2 = BigInt("1169")
		const uintR4V9JiI = BigInt("421")
		const addressPcSMMAG = accounts[1]
		const uintuBGVNJy = BigInt("1160")
		const addressYoth4h = accounts[1]
		const uintWTtf8tM = BigInt("1676")
		const addressWEtNx1m = accounts[1]
		const addresspzdv1HV = accounts[0]
		const boolUmtFXnx = await Token50X100KEfi7hZ.decreaseApproval.call(addressguFhuzv, uintqzmWtxG, {from: accounts[2]});
		const boolHjKTMvL = await Token50X100KEfi7hZ.approve.call(addresskyZnkt, uintiXvAFrA, {from: accounts[3]});
		const boolDe1L9Z8 = await Token50X100KEfi7hZ.decreaseApproval.call(addressF66fZMZ, uintNuKsTss, {from: accounts[1]});
		const boolHcPapXc = await Token50X100KEfi7hZ.decreaseApproval.call(addressG7dHv2Q, uintA7Nf8pO, {from: accounts[2]});
//		const boolugiaSb = await Token50X100KEfi7hZ.setVesting.call(addressPcSMMAG, uintR4V9JiI, uintyn88kw2, {from: accounts[1]});
//		const boolMmoLXEp = await Token50X100KEfi7hZ.transfer.call(addressYoth4h, uintuBGVNJy, {from: "0x0000000000000000000000000000000000000001"});
//		const boolA48N9Fv = await Token50X100KEfi7hZ.transferFrom.call(addresspzdv1HV, addressWEtNx1m, uintWTtf8tM, {from: accounts[2]});

		assert.equal(boolDe1L9Z8, true)
		assert.equal(boolHcPapXc, true)
		assert.equal(boolHjKTMvL, true)
		assert.equal(boolUmtFXnx, true)
		await expect(Token50X100KEfi7hZ.setVesting.call(addressPcSMMAG, uintR4V9JiI, uintyn88kw2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100KEfi7hZ = await Token50X100.new({from: accounts[3]});
		const uintrhUEGYg = BigInt("1039")
		const addressQ36dEyS = "0x0000000000000000000000000000000000000001"
		const addressQUPilgz = accounts[1]
		const addresslRIbMoT = accounts[2]
		const uintIyI3EsA = BigInt("267")
		const addresszNnCA13 = accounts[3]
		const uintic1Ntt7 = BigInt("1302")
		const uintvy1LSaa = BigInt("1718")
		const uintA5DGKBg = BigInt("82")
		const addressPDJKh8l = accounts[5]
		const uintXvBHPtC = BigInt("1306")
		const uintVQhlGuw = BigInt("1316")
		const addresszVGIdH = accounts[5]
		const uintaix7mdR = BigInt("1169")
		const uintpO9Z5A = BigInt("432")
		const addressbUhRNos = accounts[1]
		const uintCTZiJIT = BigInt("1206")
		const addresshzdqrbP = accounts[1]
		const uintt8bkD4H = BigInt("1676")
		const addressfwdlM7b = accounts[2]
		const addresskERoVLg = accounts[0]
		const uint256N1SGNrC = await Token50X100KEfi7hZ.totalSupply.call({from: accounts[4]});
		const boolDe1L9Z8 = await Token50X100KEfi7hZ.decreaseApproval.call(addressQ36dEyS, uintrhUEGYg, {from: accounts[1]});
//		await Token50X100KEfi7hZ.setLinkingAddresses.call(addresslRIbMoT, addressQUPilgz, {from: accounts[3]});
//		const boolHcPapXc = await Token50X100KEfi7hZ.decreaseApproval.call(addresszNnCA13, uintIyI3EsA, {from: accounts[2]});
//		const boolxBEhPLF = await Token50X100KEfi7hZ.safeLock.call(uintvy1LSaa, uintic1Ntt7, {from: accounts[4]});
//		const boolUN8cY3i = await Token50X100KEfi7hZ.transfer.call(addressPDJKh8l, uintA5DGKBg, {from: accounts[4]});
//		const boolycbGDh4 = await Token50X100KEfi7hZ.setVesting.call(addresszVGIdH, uintVQhlGuw, uintXvBHPtC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolugiaSb = await Token50X100KEfi7hZ.setVesting.call(addressbUhRNos, uintpO9Z5A, uintaix7mdR, {from: accounts[1]});
//		const boolMmoLXEp = await Token50X100KEfi7hZ.transfer.call(addresshzdqrbP, uintCTZiJIT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolA48N9Fv = await Token50X100KEfi7hZ.transferFrom.call(addresskERoVLg, addressfwdlM7b, uintt8bkD4H, {from: accounts[2]});

		assert.equal(boolDe1L9Z8, true)
		assert.equal(uint256N1SGNrC, BigInt("4714285714285710"))
		await expect(Token50X100KEfi7hZ.setLinkingAddresses.call(addresslRIbMoT, addressQUPilgz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100rR3Gnz8 = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzbJfkfD = BigInt("471")
		const addresselCQ4tx = accounts[2]
		const uintoEA0RLY = BigInt("44")
		const stringRbaqwl = "e3TaMDbJbscQtyoGSciiUZbJQzXTj00pWVv3aO2amwa73bP8DkH1bb9znJmnwXbwR8C6AR2xK7T"
		const stringlTPts8v = "qzOXD6bvLlmZuajLGP9wC1FtlPP4eyjYcdcTL116SkfHIENBEvowQed6g9O9DGu933C21tB6jWvA60Q1sGEVm1rWwKYd4Y"
		const uintu7G9Bur = BigInt("1894")
		const uintFKz9nuz = BigInt("1090")
		const uintf8XqToB = BigInt("85")
		const stringBlRL9Va = "ez7SmXaeSYDUbK9YXsDgYTiK14muidYGJbCsatgGpky9rg6NGyzluIxpEvyPcXJyUXkOs4Er2A1jbP976fsxnAgLSRzwP"
		const stringt9SyBEW = "hKy9v9fy"
		const boolWYuPwbF = await Token50X100rR3Gnz8.transfer.call(addresselCQ4tx, uintzbJfkfD, {from: "0x0000000000000000000000000000000000000001"});
		const boolVXNq0ph = await Token50X100rR3Gnz8.setSymbolNameDecimals.call(stringlTPts8v, stringRbaqwl, uintoEA0RLY, {from: accounts[2]});
		const boolPCKPV2U = await Token50X100rR3Gnz8.safeLock.call(uintFKz9nuz, uintu7G9Bur, {from: accounts[2]});
		await Token50X100rR3Gnz8.setSymbolNameDecimals.call(stringt9SyBEW, stringBlRL9Va, uintf8XqToB, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Token50X100', async () => {
		const Token50X100HOAv0lP = await Token50X100.new({from: accounts[5]});
		const uintG2Wm0Xy = BigInt("1626")
		const uintIk8gLRp = BigInt("1168")
		const addressGMaTASe = accounts[4]
		const uintsMU7Mub = BigInt("935")
		const addresszFK4U5I = accounts[5]
		const boolpjhfswu = await Token50X100HOAv0lP.setVesting.call(addressGMaTASe, uintIk8gLRp, uintG2Wm0Xy, {from: accounts[5]});
		const boolcFHkS7t = await Token50X100HOAv0lP.increaseApproval.call(addresszFK4U5I, uintsMU7Mub, {from: accounts[5]});
//		await Token50X100HOAv0lP.onlyOwner.call({from: accounts[3]});

		assert.equal(boolcFHkS7t, true)
		assert.equal(boolpjhfswu, true)
		await expect(Token50X100HOAv0lP.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HOAv0lP = await Token50X100.new({from: accounts[5]});
		const uinthwgLoMS = BigInt("387")
		const addresseYerNHu = "0x0000000000000000000000000000000000000000"
		const boolMj63cNF = false
		const addressC65msfe = accounts[1]
		const uintDKVmFh3 = BigInt("283")
		const uintMg1aHvo = BigInt("609")
		const addressalIPEn = accounts[2]
		const addressV2TMwLE = accounts[1]
		const uintOArgkoh = BigInt("1730")
		const addressPgIeJo7 = accounts[0]
		const addresseb6jlI = accounts[1]
		const addressQG6Tkqp = "0x0000000000000000000000000000000000000001"
		const addresswLTwvdT = accounts[3]
//		const boolsTWykOY = await Token50X100HOAv0lP.transfer.call(addresseYerNHu, uinthwgLoMS, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100HOAv0lP.setWhiteList.call(addressC65msfe, boolMj63cNF, {from: accounts[1]});
//		const boolUmVlRz = await Token50X100HOAv0lP._transfer.call(addressV2TMwLE, addressalIPEn, uintMg1aHvo, uintDKVmFh3, {from: accounts[5]});
//		const bool6TG0Rf = await Token50X100HOAv0lP.transferFrom.call(addresseb6jlI, addressPgIeJo7, uintOArgkoh, {from: accounts[0]});
//		await Token50X100HOAv0lP.setLinkingAddresses.call(addresswLTwvdT, addressQG6Tkqp, {from: accounts[3]});

		await expect(Token50X100HOAv0lP.transfer.call(addresseYerNHu, uinthwgLoMS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HOAv0lP = await Token50X100.new({from: accounts[5]});
		const boolK6dDAl = true
		const addressY46hsjR = accounts[1]
		const uintf1nekTB = BigInt("198")
		const addressMguKAZG = accounts[3]
//		await Token50X100HOAv0lP.setWhiteListReceivers.call(addressY46hsjR, boolK6dDAl, {from: accounts[5]});
//		const boolYmKzLvu = await Token50X100HOAv0lP.transfer.call(addressMguKAZG, uintf1nekTB, {from: accounts[1]});

		await expect(Token50X100HOAv0lP.setWhiteListReceivers.call(addressY46hsjR, boolK6dDAl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HOAv0lP = await Token50X100.new({from: accounts[5]});
		const addressv8ZWcf = accounts[4]
		const addressla3Su32 = accounts[4]
		const uintuOXo3I = BigInt("1817")
		const addressd3Hytb1 = accounts[0]
		const uintQTwuuuN = BigInt("1132")
		const addressy1gC9J8 = accounts[5]
		const uintvvbdWQN = BigInt("1628")
		const addressXD0iFNL = "0x0000000000000000000000000000000000000001"
		const uintWxcf65n = BigInt("283")
		const uintVpHN38 = BigInt("609")
		const addressXH8uwdG = accounts[3]
		const addressoxenoNv = accounts[1]
		const uintk8wx0BZ = BigInt("187")
		const uintdqCQgb = BigInt("1948")
		const addressyHj1fJc = accounts[5]
		const addressh6S1hD4 = accounts[5]
		const uint256ZlhbDUD = await Token50X100HOAv0lP.allowance.call(addressla3Su32, addressv8ZWcf, {from: accounts[2]});
		const boolz2tBJm0 = await Token50X100HOAv0lP.decreaseApproval.call(addressd3Hytb1, uintuOXo3I, {from: accounts[4]});
//		await Token50X100HOAv0lP.lock.call({from: accounts[5]});
//		const booly8HyR9K = await Token50X100HOAv0lP.decreaseApproval.call(addressy1gC9J8, uintQTwuuuN, {from: accounts[2]});
//		const boolc0Sfs2o = await Token50X100HOAv0lP.transfer.call(addressXD0iFNL, uintvvbdWQN, {from: accounts[0]});
//		const boolUmVlRz = await Token50X100HOAv0lP._transfer.call(addressoxenoNv, addressXH8uwdG, uintVpHN38, uintWxcf65n, {from: accounts[5]});
//		await Token50X100HOAv0lP.release.call({from: accounts[4]});
//		const boolNYpJGv = await Token50X100HOAv0lP.safeLock.call(uintdqCQgb, uintk8wx0BZ, {from: accounts[2]});
//		const uint256AT7SHWj = await Token50X100HOAv0lP.allowance.call(addressh6S1hD4, addressyHj1fJc, {from: accounts[2]});

		assert.equal(boolz2tBJm0, true)
		assert.equal(uint256ZlhbDUD, BigInt("0"))
		await expect(Token50X100HOAv0lP.lock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HOAv0lP = await Token50X100.new({from: accounts[5]});
		const uintwfnTA4 = BigInt("397")
		const addresscUwkPKK = "0x00000000000000000000000000000000000000-1"
		const uintrvFLOdX = BigInt("1167")
		const uintbDoBdue = BigInt("348")
		const addressAelXexI = accounts[1]
//		const boolsTWykOY = await Token50X100HOAv0lP.transfer.call(addresscUwkPKK, uintwfnTA4, {from: "0x0000000000000000000000000000000000000001"});
//		const booluGMFMj = await Token50X100HOAv0lP.setVesting.call(addressAelXexI, uintbDoBdue, uintrvFLOdX, {from: accounts[4]});

		await expect(Token50X100HOAv0lP.transfer.call(addresscUwkPKK, uintwfnTA4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HOAv0lP = await Token50X100.new({from: accounts[5]});
		const addresscRTX09j = accounts[5]
		const addressIY4NsJ = accounts[4]
		const addressI9TVqBH = accounts[2]
		const uintn9aKjeq = BigInt("1154")
		const addressGfBGfZR = accounts[5]
		const uintupfBdUA = BigInt("283")
		const uintn1ZILae = BigInt("609")
		const addressnsZ48Vy = accounts[3]
		const addressU0nNKOn = accounts[1]
		const uintV3U4SgR = BigInt("1489")
		const uintoZ76mka = BigInt("661")
		const uintwVYNCUo = BigInt("288")
		const addressYfgv9F = accounts[2]
		const addressLlW9Kb = accounts[0]
		const uintT8J6m9H = BigInt("127")
		const stringVnRs3pu = "BzXskbkFVTxq4heEpLm6k7QqsGNO3No2P7KjJkCNL6YG5lPeebKDBNtXTf9yzGDmZzKuaQs"
		const stringlwPCwqx = "oANvMkcKl79X7fTmKU7BJNkgm9MUdwKdcrvdjo1pvPIRjKHqSpup4gtXVnVyNKkypva"
		const uintQbuNqF1 = BigInt("303")
		const addressU6f25Xh = "0x0000000000000000000000000000000000000001"
		const uintnZIjNE = BigInt("280")
		const uintbRZr98 = BigInt("1694")
		const addressNlmLzK = accounts[4]
		const addressZsWOPJD = accounts[3]
		const uint256ZlhbDUD = await Token50X100HOAv0lP.allowance.call(addressIY4NsJ, addresscRTX09j, {from: accounts[2]});
		const addressVXtOsxr = await Token50X100HOAv0lP.transferOwnership.call(addressI9TVqBH, {from: accounts[5]});
		const booly8HyR9K = await Token50X100HOAv0lP.decreaseApproval.call(addressGfBGfZR, uintn9aKjeq, {from: accounts[2]});
//		const boolUmVlRz = await Token50X100HOAv0lP._transfer.call(addressU0nNKOn, addressnsZ48Vy, uintn1ZILae, uintupfBdUA, {from: accounts[5]});
//		await Token50X100HOAv0lP.release.call({from: accounts[0]});
//		await Token50X100HOAv0lP.lock.call({from: accounts[0]});
//		const boolVtzGTXK = await Token50X100HOAv0lP.setMaxLockPeriod.call(uintV3U4SgR, {from: accounts[4]});
//		await Token50X100HOAv0lP.release.call({from: accounts[4]});
//		const boolfbHt0r6 = await Token50X100HOAv0lP._transfer.call(addressLlW9Kb, addressYfgv9F, uintwVYNCUo, uintoZ76mka, {from: accounts[1]});
//		const bool6NC7D9 = await Token50X100HOAv0lP.setSymbolNameDecimals.call(stringlwPCwqx, stringVnRs3pu, uintT8J6m9H, {from: accounts[2]});
//		const boolb0CpoN1 = await Token50X100HOAv0lP.decreaseApproval.call(addressU6f25Xh, uintQbuNqF1, {from: accounts[0]});
//		const boolBIQaUVh = await Token50X100HOAv0lP._transfer.call(addressZsWOPJD, addressNlmLzK, uintbRZr98, uintnZIjNE, {from: accounts[1]});

		assert.equal(booly8HyR9K, true)
		assert.equal(uint256ZlhbDUD, BigInt("0"))
		await expect(Token50X100HOAv0lP._transfer.call(addressU0nNKOn, addressnsZ48Vy, uintn1ZILae, uintupfBdUA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HOAv0lP = await Token50X100.new({from: accounts[5]});
		const boolHIcxIa = true
		const addressVbfJBf5 = accounts[0]
		const uintfnPxYwf = BigInt("283")
		const uintT3SkeAc = BigInt("609")
		const addressX3YL8T5 = accounts[4]
		const addresschC68yg = accounts[1]
		const uintDG6dgK5 = BigInt("1985")
		const uintyoKeZR = BigInt("42")
		const addressU3SIzfg = accounts[1]
		const addressNyCylU0 = accounts[2]
//		await Token50X100HOAv0lP.setWhiteList.call(addressVbfJBf5, boolHIcxIa, {from: accounts[5]});
//		const boolUmVlRz = await Token50X100HOAv0lP._transfer.call(addresschC68yg, addressX3YL8T5, uintT3SkeAc, uintfnPxYwf, {from: accounts[5]});
//		const boolquzOo3 = await Token50X100HOAv0lP._transfer.call(addressNyCylU0, addressU3SIzfg, uintyoKeZR, uintDG6dgK5, {from: accounts[3]});

		await expect(Token50X100HOAv0lP.setWhiteList.call(addressVbfJBf5, boolHIcxIa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})