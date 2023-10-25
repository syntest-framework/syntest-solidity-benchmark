const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressUNbaRhC = accounts[5]
		const FompllQ0ZAC = await Fomp.new(addressUNbaRhC, {from: accounts[0]});
		const addressh1Cjecm = accounts[3]
		const addressNHJ5T1S = accounts[1]
		const addresss9Y0JAx = await FompllQ0ZAC.delegate.call(addressh1Cjecm, {from: accounts[5]});
		const addressEjWs2BF = await FompllQ0ZAC.delegate.call(addressNHJ5T1S, {from: accounts[2]});
	});

	it('test for Fomp', async () => {
		const addressGO4UJWG = "0x0000000000000000000000000000000000000001"
		const FompKue0bRG = await Fomp.new(addressGO4UJWG, {from: accounts[5]});
		const bytegEnWyIN = "0x000111180d200a041f070e080c0718161211030c12191d04091a181717180313"
		const byteYHJWQ8K = "0x1d20180a1b0f15040f020318100e1b20021210061914121e1814001f02010b0a"
		const uintDyA1Dj = BigInt("129")
		const uintQsKr06Q = BigInt("172")
		const uintDmDQx9Z = BigInt("1832")
		const addresse0InsN8 = accounts[3]
		const byteR6BCzBg = "0x0b0c1c18160a191d020d201620051c0c0a18111f081c06161f0202030a0e1909"
		const byteYhCFMYl = "0x170a0a1b091c161514160601170b0109030f0e180213041f0a041f100f1d0b00"
		const uintKGeYr1A = BigInt("53")
		const uintLamM0oM = BigInt("1862")
		const uintSqbACCy = BigInt("252")
		const addressLF20v7S = accounts[0]
		const addressUGJ0wcK = accounts[1]
		const addressHEuLb7u = await FompKue0bRG.delegateBySig.call(addresse0InsN8, uintDmDQx9Z, uintQsKr06Q, uintDyA1Dj, byteYHJWQ8K, bytegEnWyIN, {from: accounts[4]});
		const addressM5pHPKD = await FompKue0bRG.delegateBySig.call(addressLF20v7S, uintSqbACCy, uintLamM0oM, uintKGeYr1A, byteYhCFMYl, byteR6BCzBg, {from: accounts[3]});
		const addressLZ2l6UA = await FompKue0bRG.delegate.call(addressUGJ0wcK, {from: accounts[4]});

		await expect(FompKue0bRG.delegateBySig.call(addresse0InsN8, uintDmDQx9Z, uintQsKr06Q, uintDyA1Dj, byteYHJWQ8K, bytegEnWyIN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressP2RR38s = accounts[0]
		const FompNYWluT2 = await Fomp.new(addressP2RR38s, {from: accounts[3]});
		const uintuS6Fls = BigInt("952")
		const addresseTXxg9Y = accounts[4]
		const address1OrRsF = accounts[3]
		const uintr2bgzN = BigInt("1689")
		const addressJYFoFr9 = accounts[4]
		const addressCuYBkBX = accounts[0]
		const addressGeFc5r = accounts[5]
		const boolKBZELP1 = await FompNYWluT2.transferFrom.call(address1OrRsF, addresseTXxg9Y, uintuS6Fls, {from: accounts[1]});
		const boolYNXqUBX = await FompNYWluT2.approve.call(addressJYFoFr9, uintr2bgzN, {from: accounts[0]});
		const addressYYwBJV = await FompNYWluT2.delegate.call(addressCuYBkBX, {from: accounts[2]});
		const uintBhPu0lB = await FompNYWluT2.balanceOf.call(addressGeFc5r, {from: accounts[4]});

		await expect(FompNYWluT2.transferFrom.call(address1OrRsF, addresseTXxg9Y, uintuS6Fls, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZ8HncmQ = accounts[1]
		const FompQABtAMF = await Fomp.new(addressZ8HncmQ, {from: accounts[3]});
		const addressMPSRJD2 = accounts[1]
		const uintxgZPVM9 = BigInt("1478")
		const addressoyOawOO = accounts[2]
		const addressX32lZaQ = accounts[5]
		const addressdgPRXj3 = accounts[1]
		const uintB7yFr5w = BigInt("856")
		const addressxrfZMSE = accounts[3]
		const uintFabNYj = await FompQABtAMF.balanceOf.call(addressMPSRJD2, {from: accounts[3]});
		const boolGGCWuVZ = await FompQABtAMF.transferFrom.call(addressX32lZaQ, addressoyOawOO, uintxgZPVM9, {from: accounts[0]});
		const uint5Cghnu = await FompQABtAMF.balanceOf.call(addressdgPRXj3, {from: accounts[1]});
		const boolgQH6TkS = await FompQABtAMF.transfer.call(addressxrfZMSE, uintB7yFr5w, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintFabNYj, BigInt("1000000000000000000000000"))
		await expect(FompQABtAMF.transferFrom.call(addressX32lZaQ, addressoyOawOO, uintxgZPVM9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressbanScSx = accounts[1]
		const FompuN8Mbx = await Fomp.new(addressbanScSx, {from: accounts[5]});
		const addressDGovJFu = accounts[2]
		const addresslJlWDbD = accounts[0]
		const addressQTs6Z1y = accounts[5]
		const addressYPR19I8 = accounts[4]
		const uintIXGBeen = await FompuN8Mbx.allowance.call(addresslJlWDbD, addressDGovJFu, {from: accounts[1]});
		const addresswL1Jf0u = await FompuN8Mbx.delegate.call(addressQTs6Z1y, {from: accounts[4]});
		const uintmdcXXTy = await FompuN8Mbx.balanceOf.call(addressYPR19I8, {from: accounts[0]});

		assert.equal(uintIXGBeen, BigInt("0"))
		assert.equal(uintmdcXXTy, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressiirbmd = accounts[3]
		const FompUtsZJjg = await Fomp.new(addressiirbmd, {from: "0x0000000000000000000000000000000000000001"});
		const addressR9p393g = accounts[2]
		const uintoIa4wAs = BigInt("878")
		const addressFsxwpVD = accounts[3]
		const uintymdqUab = BigInt("36")
		const addressm37yCRq = accounts[0]
		const addressFxS6Ydy = accounts[3]
		const addressaJSuM6E = accounts[2]
		const addressUWtZKZ6 = accounts[5]
		const addressXYYBcYS = accounts[1]
		const uintvEcxzEF = BigInt("1346")
		const addressu18vLXw = accounts[1]
		const addressqLhgcPb = accounts[1]
		const uint96eLPMRK2 = await FompUtsZJjg.getCurrentVotes.call(addressR9p393g, {from: accounts[0]});
		const uint96Soxoz2P = await FompUtsZJjg.getPriorVotes.call(addressFsxwpVD, uintoIa4wAs, {from: accounts[4]});
		const boolwDTvDB2 = await FompUtsZJjg.transferFrom.call(addressFxS6Ydy, addressm37yCRq, uintymdqUab, {from: accounts[3]});
		const addressa7dzNuZ = await FompUtsZJjg.delegate.call(addressaJSuM6E, {from: accounts[4]});
		const uintUvFc72s = await FompUtsZJjg.allowance.call(addressXYYBcYS, addressUWtZKZ6, {from: accounts[1]});
		const boolcT31SMs = await FompUtsZJjg.transferFrom.call(addressqLhgcPb, addressu18vLXw, uintvEcxzEF, {from: accounts[1]});
	});

	it('test for Fomp', async () => {
		const addressvYlGTnG = accounts[1]
		const FompIcrfUfO = await Fomp.new(addressvYlGTnG, {from: accounts[5]});
		const uinttpkeifd = BigInt("595")
		const address1WdcnF = accounts[2]
		const uintXzmSjOF = BigInt("1437")
		const addresskuJi2R4 = accounts[5]
		const addressPYZMBM = accounts[5]
		const byteeiuP69T = "0x05021e17011e13010f1c04170f030c091d1f15050402190b101a1c040e1d1d0a"
		const byteZtqzukS = "0x180f1e0917021f1e17021a0c171a060d1e0b0e161a040314090c071314121215"
		const uintiZNeflM = BigInt("244")
		const uintsnQFbLo = BigInt("509")
		const uintmZkU1qx = BigInt("1903")
		const addressWiWsFb3 = accounts[4]
		const boolHBv5hIf = await FompIcrfUfO.transfer.call(address1WdcnF, uinttpkeifd, {from: accounts[4]});
		const uint9699RWMK = await FompIcrfUfO.getPriorVotes.call(addresskuJi2R4, uintXzmSjOF, {from: accounts[2]});
		const addressqRBrRVf = await FompIcrfUfO.delegate.call(addressPYZMBM, {from: accounts[3]});
		const addressFhOpaFs = await FompIcrfUfO.delegateBySig.call(addressWiWsFb3, uintmZkU1qx, uintsnQFbLo, uintiZNeflM, byteZtqzukS, byteeiuP69T, {from: accounts[5]});

		await expect(FompIcrfUfO.transfer.call(address1WdcnF, uinttpkeifd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresspAeZjWQ = accounts[4]
		const Fomp8H6Ndy = await Fomp.new(addresspAeZjWQ, {from: accounts[3]});
		const addressWushXPI = accounts[3]
		const uintjhBoba = BigInt("1031")
		const addressueCdz6P = accounts[4]
		const uintuIPtdAL = await Fomp8H6Ndy.balanceOf.call(addressWushXPI, {from: accounts[2]});
		const booljGAWQt0 = await Fomp8H6Ndy.approve.call(addressueCdz6P, uintjhBoba, {from: accounts[0]});

		assert.equal(booljGAWQt0, true)
		assert.equal(uintuIPtdAL, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressNk4uvrM = accounts[2]
		const Fompb97OwI = await Fomp.new(addressNk4uvrM, {from: accounts[5]});
		const uintIgbbvG1 = BigInt("486")
		const addressgodNPvd = accounts[0]
		const addressxxcrk7o = accounts[1]
		const uintaUhebBR = BigInt("922")
		const addressCrrnzOt = accounts[5]
		const uintMbAjKva = BigInt("1378")
		const addressolzU0HQ = accounts[2]
		const addressfcJdbCm = accounts[0]
		const addressqZQJwaQ = accounts[1]
		const uint96UoM6Osf = await Fompb97OwI.getPriorVotes.call(addressgodNPvd, uintIgbbvG1, {from: accounts[0]});
		const uint96ENjuGsT = await Fompb97OwI.getCurrentVotes.call(addressxxcrk7o, {from: accounts[4]});
		const boolzpeJNDo = await Fompb97OwI.approve.call(addressCrrnzOt, uintaUhebBR, {from: "0x0000000000000000000000000000000000000001"});
		const boolMuxJcU9 = await Fompb97OwI.transfer.call(addressolzU0HQ, uintMbAjKva, {from: accounts[4]});
		const addressyYuk5yb = await Fompb97OwI.delegate.call(addressfcJdbCm, {from: accounts[4]});
		const addressRdf9Xjz = await Fompb97OwI.delegate.call(addressqZQJwaQ, {from: accounts[4]});

		assert.equal(boolzpeJNDo, true)
		assert.equal(uint96ENjuGsT, BigInt("0"))
		assert.equal(uint96UoM6Osf, BigInt("0"))
		await expect(Fompb97OwI.transfer.call(addressolzU0HQ, uintMbAjKva, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressS7BY3B9 = accounts[5]
		const FompllQ0ZAC = await Fomp.new(addressS7BY3B9, {from: accounts[0]});
		const addressBWJmMJ = accounts[3]
		const addressXhjdPKV = accounts[5]
		const addressGDD6sNp = accounts[1]
		const addresss9Y0JAx = await FompllQ0ZAC.delegate.call(addressBWJmMJ, {from: accounts[5]});
		const uint96LiBXE1d = await FompllQ0ZAC.getCurrentVotes.call(addressXhjdPKV, {from: accounts[4]});
		const addressEjWs2BF = await FompllQ0ZAC.delegate.call(addressGDD6sNp, {from: accounts[2]});

		assert.equal(uint96LiBXE1d, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresszg3c3D4 = "0x0000000000000000000000000000000000000001"
		const FompKue0bRG = await Fomp.new(addresszg3c3D4, {from: accounts[5]});
		const byteQe86Cb = "0xffffffff0111180d200a041f070e080c0718161211030c12191d04091a181717180313"
		const bytef0Xw8h0 = "0x1d20180a1b0f15040f020318100e1b20021210061914121e1814001f02010b0a"
		const uintbES31eY = BigInt("129")
		const uintWLs2Igv = BigInt("172")
		const uintYuoJW0d = BigInt("1832")
		const addressAKsIYj = accounts[3]
		const uintqdXABR = BigInt("709")
		const addressfzgqmks = "0x0000000000000000000000000000000000000001"
		const byteAOO12Vq = "0x0b0c1c18160a191d020d201620051c0c0a18111f081c06161f0202030a0e1909"
		const byteeJj2Tlm = "0x170a0a1b091c161514160601170b0109030f0e180213041f0a041f100f1d0b00"
		const uintu8rH417 = BigInt("53")
		const uintNgBRZeX = BigInt("1862")
		const uintNc22IF = BigInt("252")
		const addressvjcDWRQ = accounts[0]
		const uint8ZiHxW = BigInt("1175")
		const addresstQpxFk = accounts[0]
		const addressHEuLb7u = await FompKue0bRG.delegateBySig.call(addressAKsIYj, uintYuoJW0d, uintWLs2Igv, uintbES31eY, bytef0Xw8h0, byteQe86Cb, {from: accounts[4]});
		const boolniyiieK = await FompKue0bRG.approve.call(addressfzgqmks, uintqdXABR, {from: accounts[1]});
		const addressM5pHPKD = await FompKue0bRG.delegateBySig.call(addressvjcDWRQ, uintNc22IF, uintNgBRZeX, uintu8rH417, byteeJj2Tlm, byteAOO12Vq, {from: accounts[3]});
		const boolhurO3ka = await FompKue0bRG.approve.call(addresstQpxFk, uint8ZiHxW, {from: accounts[2]});

		await expect(FompKue0bRG.delegateBySig.call(addressAKsIYj, uintYuoJW0d, uintWLs2Igv, uintbES31eY, bytef0Xw8h0, byteQe86Cb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressEaO6ay4 = "0x0000000000000000000000000000000000000001"
		const FompKue0bRG = await Fomp.new(addressEaO6ay4, {from: accounts[5]});
		const byteR7cydBQ = "0x0b0c1c18160a191d020d201620051c0c0a18111f081c06161f0202030a0e1909"
		const byteTnWcsk1 = "0x170a0a1b091c161514160601170b0109fffffffe0f0e180213041f0a041f100f1d0b00"
		const uintgBeqrHz = BigInt("219")
		const uintrcCUX0o = BigInt("1862")
		const uintloZwRK = BigInt("252")
		const addressVGsbSF9 = "0x0000000000000000000000000000000000000001"
		const addressM5pHPKD = await FompKue0bRG.delegateBySig.call(addressVGsbSF9, uintloZwRK, uintrcCUX0o, uintgBeqrHz, byteTnWcsk1, byteR7cydBQ, {from: accounts[3]});

		await expect(FompKue0bRG.delegateBySig.call(addressVGsbSF9, uintloZwRK, uintrcCUX0o, uintgBeqrHz, byteTnWcsk1, byteR7cydBQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressKKk1sW3 = accounts[2]
		const FompV97Uaah = await Fomp.new(addressKKk1sW3, {from: accounts[2]});
		const uintR3brkNz = BigInt("1245")
		const addressJ9Dhg8N = "0x0000000000000000000000000000000000000001"
		const uintHi7u3jO = BigInt("1739")
		const addressZw25A2B = accounts[5]
		const boolxiMRysd = await FompV97Uaah.transfer.call(addressJ9Dhg8N, uintR3brkNz, {from: accounts[2]});
		const uint96a6wMBDX = await FompV97Uaah.getPriorVotes.call(addressZw25A2B, uintHi7u3jO, {from: accounts[3]});

		assert.equal(boolxiMRysd, true)
		await expect(FompV97Uaah.getPriorVotes.call(addressZw25A2B, uintHi7u3jO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressImCI6vr = accounts[4]
		const FompzzR8vQ = await Fomp.new(addressImCI6vr, {from: accounts[3]});
		const uintab0mMi1 = BigInt("229")
		const addressLmIQLc = accounts[0]
		const uintJcPUNnq = BigInt("337")
		const addresskuLGKr6 = accounts[1]
		const addressHvMCYnV = accounts[4]
		const addressXGAFuJU = accounts[3]
		const addressQFJ2nId = accounts[1]
		const addressAketcWy = accounts[3]
		const addresslAfViEo = accounts[1]
		const uint96Le9Sqwb = await FompzzR8vQ.getPriorVotes.call(addressLmIQLc, uintab0mMi1, {from: accounts[2]});
		const boolP5UVkMY = await FompzzR8vQ.transfer.call(addresskuLGKr6, uintJcPUNnq, {from: accounts[3]});
		const uintXaLbN5u = await FompzzR8vQ.allowance.call(addressXGAFuJU, addressHvMCYnV, {from: accounts[5]});
		const addressQVpJwgj = await FompzzR8vQ.delegate.call(addressQFJ2nId, {from: accounts[0]});
		const uintYnbQCm = await FompzzR8vQ.allowance.call(addresslAfViEo, addressAketcWy, {from: accounts[2]});

		assert.equal(uint96Le9Sqwb, BigInt("0"))
		await expect(FompzzR8vQ.transfer.call(addresskuLGKr6, uintJcPUNnq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressKpwPjiZ = "0x0000000000000000000000000000000000000001"
		const FompKue0bRG = await Fomp.new(addressKpwPjiZ, {from: accounts[5]});
		const byteYWuh0wM = "0x0b0c1c18160a191d020d201620051c0c0a18111f081c06161ffffffffa02030a0e1909"
		const byteUZUCsak = "0x170a0a1b091c161514160601170b0109030f0e180213041f0a041f100f1d0b00"
		const uintJJQYme1 = BigInt("219")
		const uintx3tYifF = BigInt("1862")
		const uintql2pPRB = BigInt("252")
		const addressKCiO6gp = accounts[0]
		const addressnXQDsMK = accounts[3]
		const addressM5pHPKD = await FompKue0bRG.delegateBySig.call(addressKCiO6gp, uintql2pPRB, uintx3tYifF, uintJJQYme1, byteUZUCsak, byteYWuh0wM, {from: accounts[3]});
		const addressXNTtin = await FompKue0bRG.delegate.call(addressnXQDsMK, {from: accounts[1]});

		await expect(FompKue0bRG.delegateBySig.call(addressKCiO6gp, uintql2pPRB, uintx3tYifF, uintJJQYme1, byteUZUCsak, byteYWuh0wM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressIdUInzi = "0x0000000000000000000000000000000000000001"
		const FompKue0bRG = await Fomp.new(addressIdUInzi, {from: accounts[5]});
		const uintRI2HEvb = BigInt("968")
		const addressq6EUe9L = accounts[2]
		const byteitELvds = "0x0b0c1c18160a191d020d201620051c0c0a18111f081c06161f0202030a0e1909"
		const bytehtpUIMl = "0x170a0a1b091c161514160601170bfffffffb09030f0e180213041f0a041f100f1d0b00"
		const uintNjma4hT = BigInt("219")
		const uintrjX7uWh = BigInt("1862")
		const uintgA5ugj4 = BigInt("252")
		const addressyUa1Q0N = "0x0000000000000000000000000000000000000001"
		const booltbfYiwj = await FompKue0bRG.approve.call(addressq6EUe9L, uintRI2HEvb, {from: accounts[4]});
		const addressM5pHPKD = await FompKue0bRG.delegateBySig.call(addressyUa1Q0N, uintgA5ugj4, uintrjX7uWh, uintNjma4hT, bytehtpUIMl, byteitELvds, {from: accounts[3]});

		assert.equal(booltbfYiwj, true)
		await expect(FompKue0bRG.delegateBySig.call(addressyUa1Q0N, uintgA5ugj4, uintrjX7uWh, uintNjma4hT, bytehtpUIMl, byteitELvds, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})