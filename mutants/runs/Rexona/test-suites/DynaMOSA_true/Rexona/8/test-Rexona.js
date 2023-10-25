const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringfPukyXg = "iw2wA5E25fwocaRCTYR8A22IC5t8CendzYUdQ"
		const stringtaImLRD = "dye2xr1gjaDWm1lQWBuHbn6HUWvGPY0zwyTfPliUbPnbWgM"
		const uintG119RYt = BigInt("965")
		const RexonaugQfS9S = await Rexona.new(stringfPukyXg, stringtaImLRD, uintG119RYt, {from: accounts[4]});
		const uintkytV6AD = BigInt("1017")
		const addressyxLsthp = accounts[3]
		const uintHOMkqB = BigInt("283")
		const addressbRzQVYG = accounts[4]
		const uintzfGpNPq = BigInt("1464")
		const addressH65YWV8 = accounts[5]
		const boolZOp9mK4 = await RexonaugQfS9S.approveAndCall.call(addressyxLsthp, uintkytV6AD, {from: accounts[1]});
		const boolFPvdGjp = await RexonaugQfS9S.transfer.call(addressbRzQVYG, uintHOMkqB, {from: accounts[2]});
		const boolLNAYUnI = await RexonaugQfS9S.approveAndCall.call(addressH65YWV8, uintzfGpNPq, {from: accounts[3]});

		await expect(RexonaugQfS9S.approveAndCall.call(addressyxLsthp, uintkytV6AD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringdQjXOT = "Xfp"
		const stringyh1VOo = "7DeSzFrtuKvOIfpSdiWbnYJkioyyH27Xxzn0Qek979eMpCkmwQmDc2GqejG4rh9n5gtCk4HOPVflUI9Pc"
		const uintQ1YApoK = BigInt("967")
		const RexonaJWYrDh = await Rexona.new(stringdQjXOT, stringyh1VOo, uintQ1YApoK, {from: accounts[0]});
		const uintdwpbmeo = BigInt("1523")
		const addressletiijU = accounts[2]
		const uintKMYixm = BigInt("4")
		const addressllDxfxg = accounts[2]
		const addressHlFzDNS = accounts[3]
		const uinth901vRi = BigInt("1138")
		const addresssVu92B = accounts[4]
		const uintSDdAl7N = BigInt("222")
		const addressDUZMQAr = accounts[1]
		const uintbwvDFKm = BigInt("186")
		const addressgOe4GDU = accounts[0]
		const boolGF92wz2 = await RexonaJWYrDh.approve.call(addressletiijU, uintdwpbmeo, {from: accounts[0]});
		const boolAMURaB = await RexonaJWYrDh.transferFrom.call(addressHlFzDNS, addressllDxfxg, uintKMYixm, {from: accounts[2]});
		const boolhBvMPaE = await RexonaJWYrDh.approveAndCall.call(addresssVu92B, uinth901vRi, {from: accounts[3]});
		const boolj03hIve = await RexonaJWYrDh.transfer.call(addressDUZMQAr, uintSDdAl7N, {from: accounts[1]});
		const boolA0RGqBq = await RexonaJWYrDh.approve.call(addressgOe4GDU, uintbwvDFKm, {from: accounts[4]});

		assert.equal(boolGF92wz2, true)
		await expect(RexonaJWYrDh.transferFrom.call(addressHlFzDNS, addressllDxfxg, uintKMYixm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringknChcmI = "CWzmoUz1B8wzRNri76kDA09eXxaBBkuL"
		const stringyJGxzKG = "dBj8mJR5NtG9iFfJxEf3mJ5oQwpHXN"
		const uintIWGBTqe = BigInt("375")
		const RexonalUhnKT6 = await Rexona.new(stringknChcmI, stringyJGxzKG, uintIWGBTqe, {from: accounts[1]});
		const uintspNhwM = BigInt("1097")
		const addressU5vrWD7 = accounts[0]
		const addressox90Ob6 = accounts[2]
		const uintPFyjXG3 = BigInt("1189")
		const addressxEKY92u = accounts[4]
		const uint4l4VAv = BigInt("777")
		const addresspIjOEYn = accounts[2]
		const uintN3WFFvN = BigInt("420")
		const addresslhrz3B1 = accounts[1]
		const boolSg6lNr0 = await RexonalUhnKT6.transferFrom.call(addressox90Ob6, addressU5vrWD7, uintspNhwM, {from: accounts[2]});
		const boolCDDctzK = await RexonalUhnKT6.approveAndCall.call(addressxEKY92u, uintPFyjXG3, {from: accounts[3]});
		const boold7AUkYy = await RexonalUhnKT6.transfer.call(addresspIjOEYn, uint4l4VAv, {from: accounts[0]});
		const boolwgw0yET = await RexonalUhnKT6.approve.call(addresslhrz3B1, uintN3WFFvN, {from: accounts[1]});

		await expect(RexonalUhnKT6.transferFrom.call(addressox90Ob6, addressU5vrWD7, uintspNhwM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringoCo2YWk = "k8FHZ65MPNC8L3egHL6"
		const stringrASvzl = "QPIDllsGLPnys2srsGOyfWBgDRo62qItkvQlq9XwLJqP"
		const uintdRXUOI5 = BigInt("1412")
		const Rexonan4IaEVL = await Rexona.new(stringoCo2YWk, stringrASvzl, uintdRXUOI5, {from: accounts[2]});
		const uintBhltAHX = BigInt("184")
		const addressBHltKb = accounts[1]
		const uint8VrZRI = BigInt("1435")
		const addresskGIrZLG = accounts[4]
		const addressNVz4pXC = accounts[1]
		const uintFBOdCF = BigInt("1776")
		const addressfhtxWFV = accounts[2]
		const uintWfKv81f = BigInt("1970")
		const addresslpyfBEI = accounts[1]
		const boolwpGDQlM = await Rexonan4IaEVL.transfer.call(addressBHltKb, uintBhltAHX, {from: accounts[4]});
		const boolSk4isuU = await Rexonan4IaEVL.transferFrom.call(addressNVz4pXC, addresskGIrZLG, uint8VrZRI, {from: accounts[0]});
		const boolXktwATm = await Rexonan4IaEVL.approve.call(addressfhtxWFV, uintFBOdCF, {from: accounts[0]});
		const boolojdKO24 = await Rexonan4IaEVL.approveAndCall.call(addresslpyfBEI, uintWfKv81f, {from: accounts[4]});

		await expect(Rexonan4IaEVL.transfer.call(addressBHltKb, uintBhltAHX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringcTh1JKz = "0Cy1MXC4D9IHUDTTe5YJlRPPL2o9w55ziB42OabeNsxORzEFOG8ZHDPo9SBCui9iMho9"
		const stringmZTJQ5b = "Ruot7Ig1723FrqCjs68vSdCSw3yi4O5QY2zXehSbOFo"
		const uintiWKNDs2 = BigInt("673")
		const RexonaEcJSzTo = await Rexona.new(stringcTh1JKz, stringmZTJQ5b, uintiWKNDs2, {from: accounts[2]});
		const address2LoNyI = accounts[4]
		const uintCaJWxq9 = BigInt("1305")
		const addressBbaTglM = accounts[0]
		const uintet3wC9 = BigInt("1068")
		const addressoNp0H86 = accounts[0]
		const uintqyUik88 = BigInt("306")
		const addresse8kJJpA = accounts[0]
		const addressmKgKLt4 = accounts[4]
		const boolGm5ac4 = await RexonaEcJSzTo.transferownership.call(address2LoNyI, {from: accounts[2]});
		const boolDtLuy3e = await RexonaEcJSzTo.transfer.call(addressBbaTglM, uintCaJWxq9, {from: accounts[5]});
		const boolvlw5k0W = await RexonaEcJSzTo.transfer.call(addressoNp0H86, uintet3wC9, {from: "0x0000000000000000000000000000000000000001"});
		const boolAIzTWu0 = await RexonaEcJSzTo.transferFrom.call(addressmKgKLt4, addresse8kJJpA, uintqyUik88, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGm5ac4, true)
		await expect(RexonaEcJSzTo.transfer.call(addressBbaTglM, uintCaJWxq9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringmO3TULe = "Dy4j7EvXlMsnFDyGx2diMYgKThmoLZmtyi2MmPl73KwCsjY8Ws5xCbiLYCm3nFwNa"
		const stringPnDuZ54 = "pivHgIQnbQ45jq3wl"
		const uinthAzgNbL = BigInt("652")
		const RexonasGNFkOs = await Rexona.new(stringmO3TULe, stringPnDuZ54, uinthAzgNbL, {from: accounts[4]});
		const uintUdgnMg = BigInt("791")
		const addressRbxguAx = accounts[3]
		const uintBfJ3Ski = BigInt("34")
		const addresslfGDlRO = accounts[0]
		const uintUyqyr1E = BigInt("1054")
		const addressNG1NMNX = accounts[3]
		const uintIS0BdIp = BigInt("975")
		const addressC0ZR3Jz = accounts[1]
		const addressje5zbC5 = accounts[1]
		const uintOSibgkH = BigInt("92")
		const addresscboveNU = accounts[0]
		const addressk5OqCql = accounts[4]
		const uints7qfXSX = BigInt("1460")
		const addressBKMVKdz = accounts[0]
		const addressYCQJi2d = accounts[2]
		const boolo5KmpUm = await RexonasGNFkOs.transfer.call(addressRbxguAx, uintUdgnMg, {from: accounts[4]});
		const boolJTjDY3N = await RexonasGNFkOs.approve.call(addresslfGDlRO, uintBfJ3Ski, {from: accounts[4]});
		const boolJWqOWU3 = await RexonasGNFkOs.approve.call(addressNG1NMNX, uintUyqyr1E, {from: accounts[0]});
		const boolmsWG2xd = await RexonasGNFkOs.transferFrom.call(addressje5zbC5, addressC0ZR3Jz, uintIS0BdIp, {from: accounts[4]});
		const boolCxQfWX9 = await RexonasGNFkOs.transferFrom.call(addressk5OqCql, addresscboveNU, uintOSibgkH, {from: accounts[5]});
		const boolg1xrmou = await RexonasGNFkOs.transferFrom.call(addressYCQJi2d, addressBKMVKdz, uints7qfXSX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJTjDY3N, true)
		assert.equal(boolJWqOWU3, true)
		assert.equal(boolo5KmpUm, true)
		await expect(RexonasGNFkOs.transferFrom.call(addressje5zbC5, addressC0ZR3Jz, uintIS0BdIp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringOZzsk7J = "F0gp3CNbgYHm8Ch8O5npNMG2vIPGVyzwGRMDlvxaPGvt9NkI8yQp8x1"
		const stringjy7mgjk = "RVvkX8JcTpr9Fo2m"
		const uintWq9pKSb = BigInt("1371")
		const Rexonan08P1Mi = await Rexona.new(stringOZzsk7J, stringjy7mgjk, uintWq9pKSb, {from: accounts[1]});
		const uintxp1WUQT = BigInt("113")
		const addresssyLCwoX = accounts[2]
		const uintvExH0Sj = BigInt("442")
		const addressyVQ8Ynb = accounts[4]
		const uintkQvuxJ5 = BigInt("184")
		const addressWDj6YDI = accounts[4]
		const boolJGCSmav = await Rexonan08P1Mi.approve.call(addresssyLCwoX, uintxp1WUQT, {from: accounts[0]});
		const boolHLEkUDB = await Rexonan08P1Mi.approveAndCall.call(addressyVQ8Ynb, uintvExH0Sj, {from: accounts[1]});
		const boolj4A0DHL = await Rexonan08P1Mi.approveAndCall.call(addressWDj6YDI, uintkQvuxJ5, {from: accounts[4]});

		assert.equal(boolHLEkUDB, true)
		assert.equal(boolJGCSmav, true)
		await expect(Rexonan08P1Mi.approveAndCall.call(addressWDj6YDI, uintkQvuxJ5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringoelZ1a5 = "ImCUUpshuBQeBswYr6tTsRaF2Uih"
		const stringQJFJurG = "aefTGyeTxEiHxxRkDCVB6bNEBb8yHHGvr3"
		const uintRNp4vML = BigInt("915")
		const Rexonavnvqa9 = await Rexona.new(stringoelZ1a5, stringQJFJurG, uintRNp4vML, {from: "0x0000000000000000000000000000000000000001"});
		const addressolOcvTw = "0x0000000000000000000000000000000000000001"
		const uintiFULYv2 = BigInt("510")
		const addressYvZzhpy = accounts[1]
		const boolzsbmQLv = await Rexonavnvqa9.transferownership.call(addressolOcvTw, {from: accounts[2]});
		const boolGZufSN = await Rexonavnvqa9.approve.call(addressYvZzhpy, uintiFULYv2, {from: accounts[0]});
	});

	it('test for Rexona', async () => {
		const stringdQjXOT = "Xfp"
		const stringyh1VOo = "7DeSzFrtuKvOIfpSdiWbnYJkioyyH27Xxzn0Qek979eMpCkmwQmDc2GqejG4rh9n5gtCk4HOPVflUI9Pc"
		const uintDEVdbDx = BigInt("967")
		const RexonaJWYrDh = await Rexona.new(stringdQjXOT, stringyh1VOo, uintDEVdbDx, {from: accounts[0]});
		const uintgD3BKB = BigInt("0")
		const addressRAwAemO = accounts[2]
		const addressiXxqZjZ = accounts[3]
		const boolAMURaB = await RexonaJWYrDh.transferFrom.call(addressiXxqZjZ, addressRAwAemO, uintgD3BKB, {from: accounts[2]});

		assert.equal(boolAMURaB, true)
	});

	it('test for Rexona', async () => {
		const stringOZzsk7J = "F0gp3CNbgYHm8Ch8O5npNMG2vIPGVyzwGRMDlvxaPGvt9NkI8yQp8x1"
		const stringjy7mgjk = "RVvkX8JcTpr9Fo2m"
		const uintRHfp1mJ = BigInt("1371")
		const Rexonan08P1Mi = await Rexona.new(stringOZzsk7J, stringjy7mgjk, uintRHfp1mJ, {from: accounts[1]});
		const uintc9gspuR = BigInt("0")
		const addressfJPspIg = accounts[4]
		const uintyK6sjjo = BigInt("1088")
		const addressAYGgL3b = "0x0000000000000000000000000000000000000001"
		const addressGw1T9Bg = accounts[3]
		const uintE48auCD = BigInt("39")
		const addressOJYIRPE = accounts[2]
		const uintkbz0SN2 = BigInt("623")
		const addressZ8govBM = accounts[5]
		const addressUgeNFoi = accounts[2]
		const uintisUytCT = BigInt("2032")
		const addressS7hWzSk = accounts[3]
		const addresszin3tUP = "0x0000000000000000000000000000000000000001"
		const uintiZ9Cw4A = BigInt("337")
		const addressfprBoW = accounts[5]
		const addressulA0iUl = accounts[3]
		const uintLVavrut = BigInt("226")
		const addressqn1UjJ = "0x0000000000000000000000000000000000000001"
		const uintALMYA4a = BigInt("77")
		const addressBUgUce6 = accounts[3]
		const addresshcXjIQc = accounts[4]
		const uintogIQQ1j = BigInt("306")
		const addressoYVoa8R = accounts[2]
		const uintcavBpCn = BigInt("444")
		const addressYmnZs8Y = "0x0000000000000000000000000000000000000001"
		const uintA4XuGy = BigInt("969")
		const addressAp1rFXG = accounts[1]
		const uintSiR8k3y = BigInt("44")
		const addressv7tv8kp = accounts[1]
		const addressxFEvnOp = accounts[2]
		const addressf5daCOJ = accounts[3]
		const boolHLEkUDB = await Rexonan08P1Mi.approveAndCall.call(addressfJPspIg, uintc9gspuR, {from: accounts[1]});
		const boolgdrNhM9 = await Rexonan08P1Mi.transferFrom.call(addressGw1T9Bg, addressAYGgL3b, uintyK6sjjo, {from: accounts[4]});
		const boolc0O72Up = await Rexonan08P1Mi.transfer.call(addressOJYIRPE, uintE48auCD, {from: accounts[4]});
		const boolF9OI2XS = await Rexonan08P1Mi.transferFrom.call(addressUgeNFoi, addressZ8govBM, uintkbz0SN2, {from: accounts[1]});
		const boolbdVR442 = await Rexonan08P1Mi.transferFrom.call(addresszin3tUP, addressS7hWzSk, uintisUytCT, {from: accounts[2]});
		const boolg7UG51w = await Rexonan08P1Mi.transferFrom.call(addressulA0iUl, addressfprBoW, uintiZ9Cw4A, {from: accounts[5]});
		const boolVv6uVDl = await Rexonan08P1Mi.approve.call(addressqn1UjJ, uintLVavrut, {from: accounts[4]});
		const boolAabbWBE = await Rexonan08P1Mi.transferFrom.call(addresshcXjIQc, addressBUgUce6, uintALMYA4a, {from: accounts[0]});
		const boolI8IVE1n = await Rexonan08P1Mi.approveAndCall.call(addressoYVoa8R, uintogIQQ1j, {from: accounts[4]});
		const boolJqmpMJ0 = await Rexonan08P1Mi.approveAndCall.call(addressYmnZs8Y, uintcavBpCn, {from: accounts[2]});
		const boolWQgTMD4 = await Rexonan08P1Mi.transfer.call(addressAp1rFXG, uintA4XuGy, {from: accounts[4]});
		const boolA4t6Uac = await Rexonan08P1Mi.transferFrom.call(addressxFEvnOp, addressv7tv8kp, uintSiR8k3y, {from: accounts[2]});
		const boolBGWqEF = await Rexonan08P1Mi.transferownership.call(addressf5daCOJ, {from: accounts[4]});

		assert.equal(boolHLEkUDB, true)
		await expect(Rexonan08P1Mi.transferFrom.call(addressGw1T9Bg, addressAYGgL3b, uintyK6sjjo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})