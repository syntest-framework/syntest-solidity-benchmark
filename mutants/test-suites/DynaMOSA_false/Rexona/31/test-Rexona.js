const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringUkdMSNL = "EGbgbtcqARZqIzYMw71nHNCet5uaEruLNJvRUvn9hBDcYOO8WtVloQjBOgCzTV9ehdq0ikQLqUX4CvTty"
		const stringkGcM5LT = "Ci3PUp2heV6UJYz9vAKUddMjVmJuK1Ec8dmCTU35ax8WXlMLwkFplFMBESNtGOk62"
		const uintY9Hdt8V = BigInt("1333")
		const RexonalkAz9nE = await Rexona.new(stringUkdMSNL, stringkGcM5LT, uintY9Hdt8V, {from: accounts[1]});
		const uintzKumqS9 = BigInt("1990")
		const addressZA9bmK = "0x0000000000000000000000000000000000000001"
		const uintynpABT2 = BigInt("1443")
		const addresssX9AQCl = accounts[3]
		const addressPJP7si = accounts[2]
		const uintssoOPIV = BigInt("1112")
		const addressLhK4I6I = accounts[2]
//		const boolNknrtkh = await RexonalkAz9nE.approveAndCall.call(addressZA9bmK, uintzKumqS9, {from: accounts[2]});
//		const boolFMOjvOq = await RexonalkAz9nE.transfer.call(addresssX9AQCl, uintynpABT2, {from: accounts[1]});
//		const booltQo9m1z = await RexonalkAz9nE.transferownership.call(addressPJP7si, {from: accounts[0]});
//		const boolIB9LRip = await RexonalkAz9nE.approve.call(addressLhK4I6I, uintssoOPIV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RexonalkAz9nE.approveAndCall.call(addressZA9bmK, uintzKumqS9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringeRbGHn = "YThYXjoVOD75SjUst9"
		const stringWX6VDjQ = "NOdHau9rWfklSTj3JpdW6RIKtRycROHhqDATdYixUSFODhiaLChyeNF71TR3UL4xceT"
		const uinthPbtxJe = BigInt("1733")
		const RexonasggrTr = await Rexona.new(stringeRbGHn, stringWX6VDjQ, uinthPbtxJe, {from: accounts[1]});
		const uintfQ1DsOw = BigInt("854")
		const addressSEgJDN7 = accounts[4]
		const addressc1hWjeD = accounts[4]
		const uintOR5c6J3 = BigInt("1669")
		const addressh6yegUA = accounts[2]
		const uintLhsFdFd = BigInt("536")
		const addressNZLsWoe = accounts[4]
		const addressb2gBzJF = accounts[1]
//		const boolNyDVQnN = await RexonasggrTr.transferFrom.call(addressc1hWjeD, addressSEgJDN7, uintfQ1DsOw, {from: accounts[3]});
//		const booluOeLt3R = await RexonasggrTr.transfer.call(addressh6yegUA, uintOR5c6J3, {from: accounts[2]});
//		const boolUR08qC = await RexonasggrTr.transferFrom.call(addressb2gBzJF, addressNZLsWoe, uintLhsFdFd, {from: accounts[0]});

		await expect(RexonasggrTr.transferFrom.call(addressc1hWjeD, addressSEgJDN7, uintfQ1DsOw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringRWNEJPh = "QKzc7YGisGAiGJO"
		const stringxCX7qP = "xD2G3Mp2kzKz6F6"
		const uintTi8GIAv = BigInt("1848")
		const Rexonav9zdljl = await Rexona.new(stringRWNEJPh, stringxCX7qP, uintTi8GIAv, {from: accounts[2]});
		const uintxnSKuwM = BigInt("518")
		const addressmG0wEwL = accounts[0]
		const uintryqgh6M = BigInt("123")
		const addresswEXK5yl = accounts[0]
		const uintaCvb7UK = BigInt("857")
		const addressQqjbZiH = accounts[2]
		const uintgNXLDqs = BigInt("1777")
		const addressDDaYQq = "0x0000000000000000000000000000000000000001"
		const uintXP3z6Em = BigInt("1628")
		const addressPmsdOBt = accounts[1]
		const boolOH9hEYz = await Rexonav9zdljl.approve.call(addressmG0wEwL, uintxnSKuwM, {from: accounts[1]});
		const boolsFL9fZ9 = await Rexonav9zdljl.transfer.call(addresswEXK5yl, uintryqgh6M, {from: accounts[2]});
//		const boolvEeabXs = await Rexonav9zdljl.approveAndCall.call(addressQqjbZiH, uintaCvb7UK, {from: accounts[1]});
//		const boollQeABxS = await Rexonav9zdljl.transfer.call(addressDDaYQq, uintgNXLDqs, {from: accounts[0]});
//		const boolHxddkP3 = await Rexonav9zdljl.approve.call(addressPmsdOBt, uintXP3z6Em, {from: accounts[2]});

		assert.equal(boolOH9hEYz, true)
		assert.equal(boolsFL9fZ9, true)
		await expect(Rexonav9zdljl.approveAndCall.call(addressQqjbZiH, uintaCvb7UK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringcFON2s4 = "E1iUb2YOIQkstHAweclWjbh4OXtGyPJTVuisE2Fnn6bSH5wU2AQfVwblyovjX8MwCUeeFDYLVogAuMSvwplpFqZbolBkqWKFVSc"
		const string29Uli3 = "DQax4zK9RVlMHzszjLLUg64UX2zGAGJUtph2qSzXa6VL9IrVOR18gt6WCkdtxNV4vXacYm5mo8WyB7WDPl3WP9H1lMTHAL"
		const uintdpNwIX = BigInt("1266")
		const RexonaVYwWqIC = await Rexona.new(stringcFON2s4, string29Uli3, uintdpNwIX, {from: accounts[0]});
		const uintq5nd2Dk = BigInt("1127")
		const addressRiUAmko = accounts[4]
		const uint7xg9MD = BigInt("302")
		const addressE3TUplK = accounts[5]
		const boolJLQYOdu = await RexonaVYwWqIC.approve.call(addressRiUAmko, uintq5nd2Dk, {from: accounts[5]});
//		const boolGqE7g0l = await RexonaVYwWqIC.transfer.call(addressE3TUplK, uint7xg9MD, {from: accounts[4]});

		assert.equal(boolJLQYOdu, true)
		await expect(RexonaVYwWqIC.transfer.call(addressE3TUplK, uint7xg9MD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringxd4IUrh = "baXE9FyeXZtd89bbm7QUC1RxrUBqITWnIKwOd66GwCunUWtkYIfmfx4v9VnQcBFiO8ojvQJMkjlIXkYvcdKPV"
		const stringIRFFdN1 = "P5VAuQ4osMsRwgmG24qEWSQmRyppmoWmK2mbriolZlpnLXpnEYaMQ2pwmhzu9u7rOpryTUdLsl9p8r2wKKA8ZBC1HYTVJIPBRJ"
		const uintygjIizG = BigInt("1476")
		const RexonaADlFxeN = await Rexona.new(stringxd4IUrh, stringIRFFdN1, uintygjIizG, {from: "0x0000000000000000000000000000000000000001"});
		const uintjZPhZqR = BigInt("1466")
		const addressZxBEn6r = accounts[3]
		const addressLPTGjwJ = accounts[1]
		const uinttvD7BE6 = BigInt("1884")
		const addressHJYTOP6 = accounts[5]
		const addressSuW5PRQ = accounts[4]
		const uinti6ht8VG = BigInt("609")
		const addressuCng7Kz = accounts[2]
		const uintUGHuuSK = BigInt("1512")
		const addressKeDD0eO = accounts[4]
		const addressQQjYbID = accounts[1]
		const uintYxwJHg7 = BigInt("111")
		const addressGnGCc65 = accounts[0]
		const boolXcTYkgh = await RexonaADlFxeN.transferFrom.call(addressLPTGjwJ, addressZxBEn6r, uintjZPhZqR, {from: accounts[0]});
		const boole9FgJjS = await RexonaADlFxeN.approve.call(addressHJYTOP6, uinttvD7BE6, {from: accounts[3]});
		const booltvPICGr = await RexonaADlFxeN.transferownership.call(addressSuW5PRQ, {from: accounts[4]});
		const boolkkNwWCV = await RexonaADlFxeN.approve.call(addressuCng7Kz, uinti6ht8VG, {from: accounts[2]});
		const boollNW700 = await RexonaADlFxeN.transferFrom.call(addressQQjYbID, addressKeDD0eO, uintUGHuuSK, {from: accounts[1]});
		const boolwHd95fh = await RexonaADlFxeN.approveAndCall.call(addressGnGCc65, uintYxwJHg7, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const stringiqmd5I = "rZFarCVXvuRfbXwgEVzdCneeR3SwnCu8ZHEOe7xp9NDqoEaPSps8gUe6PiLugAY"
		const stringhGhbg7 = "RkcFjhU1KuFwiPmpJxgeKcuaUqrVkuuQoJ0bJgPyM6L1ivWMcbMJexu5Jd4NTiX5MmorVijdFfGSlUeKo87"
		const uintsA8g4q = BigInt("250")
		const RexonaVB80sZH = await Rexona.new(stringiqmd5I, stringhGhbg7, uintsA8g4q, {from: accounts[0]});
		const uintMHVYTjW = BigInt("1949")
		const addresszztBCO = accounts[2]
		const uintp76o8Yl = BigInt("656")
		const addressnMIQb8x = accounts[2]
		const uintLBSoQ3f = BigInt("1842")
		const addressCofxJt9 = accounts[5]
		const boola3XkwZH = await RexonaVB80sZH.approveAndCall.call(addresszztBCO, uintMHVYTjW, {from: accounts[0]});
		const boolzT54qtK = await RexonaVB80sZH.approve.call(addressnMIQb8x, uintp76o8Yl, {from: accounts[0]});
		const boolZau4teE = await RexonaVB80sZH.approve.call(addressCofxJt9, uintLBSoQ3f, {from: accounts[3]});

		assert.equal(boolZau4teE, true)
		assert.equal(boola3XkwZH, true)
		assert.equal(boolzT54qtK, true)
	});

	it('test for Rexona', async () => {
		const stringcFON2s4 = "E1iUb2YOIQkstHAweclWjbh4OXtGyPJTVuisE2Fnn6bSH5wU2AQfVwblyovjX8MwCUeeFDYLVogAuMSvwplpFqZbolBkqWKFVSc"
		const string29Uli3 = "DQax4zK9RVlMHzszjLLUg64UX2zGAGJUtph2qSzXa6VL9IrVOR18gt6WCkdtxNV4vXacYm5mo8WyB7WDPl3WP9H1lMTHAL"
		const uintyBZC2CO = BigInt("1266")
		const RexonaVYwWqIC = await Rexona.new(stringcFON2s4, string29Uli3, uintyBZC2CO, {from: accounts[0]});
		const uintRODPeQR = BigInt("1756")
		const addressa9dpAKi = "0x0000000000000000000000000000000000000001"
		const addressKqe1cF8 = accounts[5]
		const addressA5cfOmm = accounts[2]
		const boolJFhuNCO = await RexonaVYwWqIC.approve.call(addressa9dpAKi, uintRODPeQR, {from: accounts[3]});
		const boolfc1SOLG = await RexonaVYwWqIC.transferownership.call(addressKqe1cF8, {from: accounts[0]});
//		const boolYSS5xvm = await RexonaVYwWqIC.transferownership.call(addressA5cfOmm, {from: accounts[3]});

		assert.equal(boolJFhuNCO, true)
		assert.equal(boolfc1SOLG, true)
		await expect(RexonaVYwWqIC.transferownership.call(addressA5cfOmm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringmCeiMLa = "8l6kqlAV3vMEjGQiS86NvgTWU8ueIvkpSXUWnzJLUiCR5UxzDxOOX8RvdSfC49phRpkv7rc9i6"
		const stringvUVsRDK = "tl5YjyFfImd9bRmuf1n2lYHugaHSXjYEHaluQi4"
		const uintvvLf3w = BigInt("687")
		const RexonaoYrKfoF = await Rexona.new(stringmCeiMLa, stringvUVsRDK, uintvvLf3w, {from: accounts[3]});
		const uintpJSPgP9 = BigInt("0")
		const addressWxOPyWj = accounts[4]
		const addressLigsD7 = accounts[3]
		const uintgFZN0k8 = BigInt("2018")
		const addresssiB1GfR = "0x0000000000000000000000000000000000000001"
		const addressyif6c19 = accounts[4]
		const addresssUcmHrF = accounts[1]
		const boolchfhhfa = await RexonaoYrKfoF.transferFrom.call(addressLigsD7, addressWxOPyWj, uintpJSPgP9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolhyaIwC9 = await RexonaoYrKfoF.transferFrom.call(addressyif6c19, addresssiB1GfR, uintgFZN0k8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJhbfGL = await RexonaoYrKfoF.transferownership.call(addresssUcmHrF, {from: accounts[3]});

		assert.equal(boolchfhhfa, true)
		await expect(RexonaoYrKfoF.transferFrom.call(addressyif6c19, addresssiB1GfR, uintgFZN0k8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringVHS0YZb = "ejKH2txkGV2aFiDveFr4iULmFMRyQJOCIUbUJRzKptjWNnY85lxCDJO9yKsVXLjjqjage7yx"
		const stringOeclkUr = "x9dCfKaKL6WySs3GJiI1BwWLVdPleQXKnJgzoud6xF6AqIs5RvMALCMHd2kux7geE7WXMh9tYlumv2kSlLMfMR"
		const uintejQkdQW = BigInt("1207")
		const RexonamJQJLyD = await Rexona.new(stringVHS0YZb, stringOeclkUr, uintejQkdQW, {from: accounts[1]});
		const uintPo5PHzw = BigInt("99")
		const addressUlXxP8s = accounts[4]
		const uintpM0z7wF = BigInt("1494")
		const addresslPq2HgY = accounts[3]
		const uintly4Bcb8 = BigInt("1092")
		const addressk6mJPgZ = accounts[2]
		const uintAyDtbqg = BigInt("2010")
		const addressDeYaUSs = "0x00000000000000000000000000000000000000-1"
		const addressFdTqugv = accounts[4]
		const uintfE6og0r = BigInt("875")
		const addresssh7arG0 = accounts[4]
		const uintBcUGlk = BigInt("1684")
		const addressOIFeYbB = accounts[4]
		const addressSUDII8L = "0x0000000000000000000000000000000000000001"
		const uintig7tv3q = BigInt("480")
		const addressiWdjsm = accounts[2]
		const addressHM3SM63 = accounts[3]
		const uintvtPpT2i = BigInt("480")
		const addressQXYjKR = accounts[1]
		const addressgQD5SRT = accounts[1]
		const booliXmZRHB = await RexonamJQJLyD.approveAndCall.call(addressUlXxP8s, uintPo5PHzw, {from: accounts[1]});
		const boolu3ZLFj2 = await RexonamJQJLyD.approve.call(addresslPq2HgY, uintpM0z7wF, {from: accounts[2]});
		const boolNisiwp6 = await RexonamJQJLyD.approve.call(addressk6mJPgZ, uintly4Bcb8, {from: accounts[0]});
//		const boolg8nCozS = await RexonamJQJLyD.transferFrom.call(addressFdTqugv, addressDeYaUSs, uintAyDtbqg, {from: accounts[4]});
//		const boolNfbCdfL = await RexonamJQJLyD.approveAndCall.call(addresssh7arG0, uintfE6og0r, {from: accounts[4]});
//		const boolSFf20zX = await RexonamJQJLyD.transferFrom.call(addressSUDII8L, addressOIFeYbB, uintBcUGlk, {from: accounts[2]});
//		const boolHIFuZuZ = await RexonamJQJLyD.transferFrom.call(addressHM3SM63, addressiWdjsm, uintig7tv3q, {from: accounts[4]});
//		const boolFsdZZLG = await RexonamJQJLyD.transferFrom.call(addressgQD5SRT, addressQXYjKR, uintvtPpT2i, {from: accounts[5]});

		assert.equal(boolNisiwp6, true)
		assert.equal(booliXmZRHB, true)
		assert.equal(boolu3ZLFj2, true)
		await expect(RexonamJQJLyD.transferFrom.call(addressFdTqugv, addressDeYaUSs, uintAyDtbqg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})