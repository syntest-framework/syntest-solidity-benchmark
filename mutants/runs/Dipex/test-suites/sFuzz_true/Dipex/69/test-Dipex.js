const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringlkpMF9b = "4wQqn7xCwsb88FHJcnle9BhGGwPeIs4cKIzLU6TsJ7HK4OWK8mXSUI5PRAYcsqT81M732VbdUoVtseK"
		const stringlsbXp8q = "pG1txW3P1n"
		const uintAdlpcEX = BigInt("1135")
		const DipexieqKfPL = await Dipex.new(stringlkpMF9b, stringlsbXp8q, uintAdlpcEX, {from: accounts[0]});
		const uinti9Xic3 = BigInt("23")
		const addressdPU6b7y = accounts[3]
		const uintyYwc2I = BigInt("336")
		const addressnQ1XFHh = accounts[3]
		const uintK70p3mK = BigInt("1024")
		const addressExchITF = accounts[5]
		const addressvkX9NxS = accounts[2]
		const booljWwj3E6 = await DipexieqKfPL.approveAndCall.call(addressdPU6b7y, uinti9Xic3, {from: accounts[3]});
		const boolDdV5JvI = await DipexieqKfPL.approve.call(addressnQ1XFHh, uintyYwc2I, {from: accounts[2]});
		const boolnVXtJqf = await DipexieqKfPL.transferFrom.call(addressvkX9NxS, addressExchITF, uintK70p3mK, {from: accounts[1]});

		await expect(DipexieqKfPL.approveAndCall.call(addressdPU6b7y, uinti9Xic3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringuNxEECG = "YIH19CZSQ14sQqrZ7JkcE9tkCxiVisNM9d"
		const stringGx5vmPA = "8YvG20iD7VE4KnNI1MgrOx6TBBVFeGTz24IlmRx"
		const uintM939eiQ = BigInt("1485")
		const DipexoNZtUGV = await Dipex.new(stringuNxEECG, stringGx5vmPA, uintM939eiQ, {from: accounts[3]});
		const uintHnCBobK = BigInt("1099")
		const addresseMGm2Ho = accounts[0]
		const addressA7fbCgY = accounts[0]
		const uintnaIuRRF = BigInt("1069")
		const addressWEKIJYU = accounts[2]
		const boolEh0CQC5 = await DipexoNZtUGV.approve.call(addresseMGm2Ho, uintHnCBobK, {from: accounts[3]});
		const boolaZvGVxz = await DipexoNZtUGV.transferownership.call(addressA7fbCgY, {from: "0x0000000000000000000000000000000000000001"});
		const boolUH8nN39 = await DipexoNZtUGV.approve.call(addressWEKIJYU, uintnaIuRRF, {from: accounts[3]});

		assert.equal(boolEh0CQC5, true)
		await expect(DipexoNZtUGV.transferownership.call(addressA7fbCgY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringZfID9u = "4PCsRoQNWPmiF"
		const stringImhp1Xo = "1G9CTgh89slBVE5JLCUTh018SlYI4EnObAq1uPmpFUCmekn8nhLhUhkToiF1i2eioSlHgh79x5JLYLRpMsw76XWHMCNgAT"
		const uinth09lvF = BigInt("1358")
		const DipexON1t0lN = await Dipex.new(stringZfID9u, stringImhp1Xo, uinth09lvF, {from: "0x0000000000000000000000000000000000000001"});
		const uintdmUSxdG = BigInt("1302")
		const addressbMLo9Pd = accounts[0]
		const addresssPdTAvM = accounts[5]
		const uintY9LIdDK = BigInt("1922")
		const addressh4fB5Ka = accounts[3]
		const uint1JTcBe = BigInt("1712")
		const addressCYViczH = accounts[5]
		const addressc1AdlaA = "0x0000000000000000000000000000000000000001"
		const boolEUsjgdN = await DipexON1t0lN.transferFrom.call(addresssPdTAvM, addressbMLo9Pd, uintdmUSxdG, {from: accounts[2]});
		const boolqenHNwU = await DipexON1t0lN.approve.call(addressh4fB5Ka, uintY9LIdDK, {from: accounts[3]});
		const boolrBmyXt = await DipexON1t0lN.transferFrom.call(addressc1AdlaA, addressCYViczH, uint1JTcBe, {from: accounts[5]});
	});

	it('test for Dipex', async () => {
		const stringC0YmYNi = "eCpFhKnPDkAffwIdz65jVE5tIa7PMW6WbJzlbn98zTyJ63k5d69Lo9wiwFUlYqpC1mJtUKG48XkSMd4RtkrJ5nW"
		const stringjtMshHe = "YKiO346yEVRMceLNGaY4Vq3QNkETvRjA7Vu4vAaQp1vlNK3pl1v8rLw2RMg3tfPkcYrhDNLkyFpSDZ2XKmo"
		const uint6VqZGR = BigInt("1479")
		const DipexYib54Ha = await Dipex.new(stringC0YmYNi, stringjtMshHe, uint6VqZGR, {from: accounts[5]});
		const uintebbA9Wn = BigInt("1188")
		const addressXCpAVx = accounts[3]
		const addresstPanewz = accounts[0]
		const addressCHYjC6a = accounts[4]
		const addressGbS39YQ = accounts[4]
		const uintcTIg3BK = BigInt("1411")
		const addresssafdkSa = accounts[4]
		const boolfMsVtX = await DipexYib54Ha.transferFrom.call(addresstPanewz, addressXCpAVx, uintebbA9Wn, {from: accounts[2]});
		const boolrW5RSo = await DipexYib54Ha.transferownership.call(addressCHYjC6a, {from: "0x0000000000000000000000000000000000000001"});
		const boolCQgzbQS = await DipexYib54Ha.transferownership.call(addressGbS39YQ, {from: accounts[1]});
		const boolaqD5uPd = await DipexYib54Ha.approveAndCall.call(addresssafdkSa, uintcTIg3BK, {from: accounts[5]});

		await expect(DipexYib54Ha.transferFrom.call(addresstPanewz, addressXCpAVx, uintebbA9Wn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringlkpMF9b = "4wQqn7xCwsb88FHJcnle9BhGGwPeIs4cKIzLU6TsJ7HK4OWK8mXSUI5PRAYcsqT81M732VbdUoVtseK"
		const stringlsbXp8q = "pG1txW3P1n"
		const uintnSzFAli = BigInt("1135")
		const DipexieqKfPL = await Dipex.new(stringlkpMF9b, stringlsbXp8q, uintnSzFAli, {from: accounts[0]});
		const uintWUw107n = BigInt("141")
		const address0k5CoE = accounts[1]
		const addressr6A79dJ = accounts[5]
		const uintI3dhtf = BigInt("964")
		const addressiUhvdfi = accounts[2]
		const addressDn2vYg = accounts[0]
		const uintcLvb1PP = BigInt("23")
		const addressbi8lF7 = accounts[3]
		const uintWTJGAQ3 = BigInt("336")
		const addressjK5L1XO = accounts[3]
		const uintra45T83 = BigInt("1024")
		const addressXOFhy1F = accounts[5]
		const addressmTORXNn = accounts[2]
		const booleVvjsXl = await DipexieqKfPL.transferFrom.call(addressr6A79dJ, address0k5CoE, uintWUw107n, {from: accounts[5]});
		const boolstMbLvR = await DipexieqKfPL.transferFrom.call(addressDn2vYg, addressiUhvdfi, uintI3dhtf, {from: accounts[0]});
		const booljWwj3E6 = await DipexieqKfPL.approveAndCall.call(addressbi8lF7, uintcLvb1PP, {from: accounts[3]});
		const boolDdV5JvI = await DipexieqKfPL.approve.call(addressjK5L1XO, uintWTJGAQ3, {from: accounts[2]});
		const boolnVXtJqf = await DipexieqKfPL.transferFrom.call(addressmTORXNn, addressXOFhy1F, uintra45T83, {from: accounts[1]});

		await expect(DipexieqKfPL.transferFrom.call(addressr6A79dJ, address0k5CoE, uintWUw107n, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringlB2PpnC = "5Ws"
		const stringMo6IdwA = "fqtVjITm6ZIGSsyaDzxs3SrlysLAfLDinqfcleJ"
		const uintKYvyn04 = BigInt("1982")
		const DipexFFfpAJ6 = await Dipex.new(stringlB2PpnC, stringMo6IdwA, uintKYvyn04, {from: accounts[4]});
		const uintbwrWNPG = BigInt("315")
		const addressPkwP7g = accounts[5]
		const uintKnBbX9i = BigInt("1860")
		const addressaGCzduY = accounts[0]
		const uintjbivPsd = BigInt("432")
		const addressSPiyjFP = accounts[4]
		const uintFJnpSvh = BigInt("301")
		const addressxk6sAEr = accounts[5]
		const boolcrtbWqb = await DipexFFfpAJ6.approve.call(addressPkwP7g, uintbwrWNPG, {from: accounts[1]});
		const boolvgr5hEW = await DipexFFfpAJ6.approve.call(addressaGCzduY, uintKnBbX9i, {from: accounts[5]});
		const booljMxTODi = await DipexFFfpAJ6.transfer.call(addressSPiyjFP, uintjbivPsd, {from: accounts[2]});
		const boolPPQZS2o = await DipexFFfpAJ6.approveAndCall.call(addressxk6sAEr, uintFJnpSvh, {from: accounts[1]});

		assert.equal(boolcrtbWqb, true)
		assert.equal(boolvgr5hEW, true)
		await expect(DipexFFfpAJ6.transfer.call(addressSPiyjFP, uintjbivPsd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringiFgaOVf = "kG55UXRfENCTt"
		const string4ZUllA = "cdtD8oYTmeP68yAOQiiUmGo"
		const uintiO3xV3z = BigInt("430")
		const DipexCsCvotE = await Dipex.new(stringiFgaOVf, string4ZUllA, uintiO3xV3z, {from: accounts[2]});
		const addressH2lMf3x = "0x0000000000000000000000000000000000000001"
		const uintkvZNsHe = BigInt("1297")
		const addressdEIMR2t = accounts[3]
		const uintVgTDQUH = BigInt("1620")
		const addressUiYhGgy = accounts[3]
		const boolZdndLV2 = await DipexCsCvotE.transferownership.call(addressH2lMf3x, {from: accounts[2]});
		const boolER6Ex9w = await DipexCsCvotE.approveAndCall.call(addressdEIMR2t, uintkvZNsHe, {from: "0x0000000000000000000000000000000000000001"});
		const boolbkKOYyN = await DipexCsCvotE.approveAndCall.call(addressUiYhGgy, uintVgTDQUH, {from: accounts[1]});

		assert.equal(boolZdndLV2, true)
		await expect(DipexCsCvotE.approveAndCall.call(addressdEIMR2t, uintkvZNsHe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringH5scai9 = "BP6oYnhU8SnlwhuK5vpgbeaaG"
		const stringDsA3j2j = "j9yl22DwBXUT68a4SD4gnTWwaXLwVJSn1GiH68zSGyHIhbFm1MNSL6K5A8JneJ6CVPT"
		const uintvlpRp0z = BigInt("465")
		const DipexRUMjPwl = await Dipex.new(stringH5scai9, stringDsA3j2j, uintvlpRp0z, {from: accounts[0]});
		const uintx9Ud1zG = BigInt("515")
		const addressZHpXZsR = accounts[1]
		const uintS51Z8cL = BigInt("332")
		const addressc7hblL6 = accounts[4]
		const addressr8eLgYl = "0x0000000000000000000000000000000000000001"
		const boolEkUjKno = await DipexRUMjPwl.approveAndCall.call(addressZHpXZsR, uintx9Ud1zG, {from: accounts[0]});
		const boolw0JG2GW = await DipexRUMjPwl.approveAndCall.call(addressc7hblL6, uintS51Z8cL, {from: accounts[4]});
		const boolIFm0pEr = await DipexRUMjPwl.transferownership.call(addressr8eLgYl, {from: accounts[2]});

		assert.equal(boolEkUjKno, true)
		await expect(DipexRUMjPwl.approveAndCall.call(addressc7hblL6, uintS51Z8cL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringeO8vR4M = "m7AuIxSt1Snzilmh558vgUDuNkonJE34LP7jNmJPLKfbNHrxYR6SG"
		const stringEHkSEyV = "ISS74sbaCvsXw5Psz2O6sdo"
		const uintTkdxqMf = BigInt("193")
		const DipexYA1fOvj = await Dipex.new(stringeO8vR4M, stringEHkSEyV, uintTkdxqMf, {from: accounts[0]});
		const uintPrgzDOg = BigInt("206")
		const addressYFirKjc = accounts[5]
		const uintyuEl4Uh = BigInt("0")
		const addressrgwMTRa = accounts[1]
		const addressyUSeYsS = accounts[2]
		const uintvz9OLG = BigInt("1289")
		const addressrxNAf3o = accounts[2]
		const boolluTkgRO = await DipexYA1fOvj.approve.call(addressYFirKjc, uintPrgzDOg, {from: accounts[0]});
		const boolqKeMI3J = await DipexYA1fOvj.transferFrom.call(addressyUSeYsS, addressrgwMTRa, uintyuEl4Uh, {from: accounts[3]});
		const boolBiumPtF = await DipexYA1fOvj.approve.call(addressrxNAf3o, uintvz9OLG, {from: accounts[4]});

		assert.equal(boolBiumPtF, true)
		assert.equal(boolluTkgRO, true)
		assert.equal(boolqKeMI3J, true)
	});

	it('test for Dipex', async () => {
		const stringeO8vR4M = "m7AuIxSt1Snzilmh558vgUDuNkonJE34LP7jNmJPLKfbNHrxYR6SG"
		const stringEHkSEyV = "ISS74sbaCvsXw5Psz2O6sdo"
		const uintGKYJp7T = BigInt("193")
		const DipexYA1fOvj = await Dipex.new(stringeO8vR4M, stringEHkSEyV, uintGKYJp7T, {from: accounts[0]});
		const uintEgeLWL = BigInt("0")
		const address8ATIj7 = accounts[1]
		const boolSFZcbvS = await DipexYA1fOvj.approveAndCall.call(address8ATIj7, uintEgeLWL, {from: accounts[0]});

		assert.equal(boolSFZcbvS, true)
	});
})