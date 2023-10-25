const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringz3Ii32w = "Sw7Opg6HDLeLj219Geg0KKQaSNlBtD0IMXwx6ao3PoAlsx9KQbf95HdyjdCMGpXNyutsEoCH8til9rOQ64"
		const stringMhgQoww = "B3F8pNihOrSmGKhyegBpsOlDWiqZsqimInEqxRg3UWhZyYcdYzWdYzCesuC6jSLPRYqPAEONBQG362ekbOw8aK"
		const uintcaRYfDc = BigInt("876")
		const RexonaEtCwUo2 = await Rexona.new(stringz3Ii32w, stringMhgQoww, uintcaRYfDc, {from: accounts[2]});
		const uintP9F8nic = BigInt("1961")
		const addresshQHMcy = accounts[5]
		const uintHvsSHJp = BigInt("929")
		const addressXJrzmMk = accounts[2]
		const uintUs4HEMs = BigInt("1196")
		const addressNPGrXdh = accounts[0]
		const uintIgEFs4e = BigInt("2004")
		const addresszSkOgwX = accounts[2]
		const uintk4pM3UE = BigInt("551")
		const addressMh4eT9u = accounts[5]
		const uintEYyaXb = BigInt("874")
		const addressTkV4UK = accounts[5]
		const boolS3i9AZ8 = await RexonaEtCwUo2.transfer.call(addresshQHMcy, uintP9F8nic, {from: accounts[1]});
		const boolgBJ9QZV = await RexonaEtCwUo2.transfer.call(addressXJrzmMk, uintHvsSHJp, {from: accounts[4]});
		const boolYhYzhVm = await RexonaEtCwUo2.approveAndCall.call(addressNPGrXdh, uintUs4HEMs, {from: accounts[3]});
		const boolmsvELUT = await RexonaEtCwUo2.approveAndCall.call(addresszSkOgwX, uintIgEFs4e, {from: accounts[4]});
		const boolmm88V8g = await RexonaEtCwUo2.approve.call(addressMh4eT9u, uintk4pM3UE, {from: accounts[5]});
		const booly1joHf5 = await RexonaEtCwUo2.approveAndCall.call(addressTkV4UK, uintEYyaXb, {from: accounts[1]});

		await expect(RexonaEtCwUo2.transfer.call(addresshQHMcy, uintP9F8nic, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringO8S5zzh = "kO1rWSY6A5pMFLoytWjMrVK4eLhloHVzcsfexZEeC2T6uuUtbvDE6Rq7PVFWjK2jQwkt"
		const string8bOzja = "zetAxcWIy0MefRkMTB6TC0Gs6z"
		const uintUsfdrpP = BigInt("240")
		const RexonaIQNs41V = await Rexona.new(stringO8S5zzh, string8bOzja, uintUsfdrpP, {from: "0x0000000000000000000000000000000000000001"});
		const addressPmS0KSk = accounts[2]
		const addresswArfoXa = accounts[2]
		const uintvkrpan5 = BigInt("1388")
		const addressYtq98Sp = accounts[5]
		const uintQd8kbgC = BigInt("1189")
		const addressb3vq9Rg = accounts[3]
		const uintsxmKApY = BigInt("188")
		const addressxl05pJK = accounts[3]
		const uintzhIMOm1 = BigInt("247")
		const addressxLNnM41 = accounts[3]
		const bool8AqVXI = await RexonaIQNs41V.transferownership.call(addressPmS0KSk, {from: accounts[4]});
		const boolg8zcLj3 = await RexonaIQNs41V.transferownership.call(addresswArfoXa, {from: accounts[1]});
		const boolyQVeG04 = await RexonaIQNs41V.approve.call(addressYtq98Sp, uintvkrpan5, {from: accounts[0]});
		const boolhwgZEs = await RexonaIQNs41V.transfer.call(addressb3vq9Rg, uintQd8kbgC, {from: accounts[5]});
		const boolyryPhxp = await RexonaIQNs41V.approveAndCall.call(addressxl05pJK, uintsxmKApY, {from: accounts[0]});
		const boolLx3clkv = await RexonaIQNs41V.approve.call(addressxLNnM41, uintzhIMOm1, {from: accounts[1]});
	});

	it('test for Rexona', async () => {
		const stringwZhjOzZ = "4bJKG6HSuqetVwm6YbJZxlpPTnOih1JEJocFLCm4Tkt4Tmd2f95WsT2lihEeLU"
		const stringvb1gb0L = "yt4P497uP33b8LYOfYf4FHrg8Sq"
		const uintktvxPe0 = BigInt("48")
		const RexonayuMmPHd = await Rexona.new(stringwZhjOzZ, stringvb1gb0L, uintktvxPe0, {from: accounts[1]});
		const addresszLUyHr = accounts[0]
		const address6caoES = accounts[2]
		const uintUspijDD = BigInt("1231")
		const addressxIzUoKy = "0x0000000000000000000000000000000000000001"
		const uintceaGrN = BigInt("111")
		const addresso1MHFo = accounts[2]
		const uintNm06uaE = BigInt("1480")
		const addressHP8fEv = accounts[5]
		const boolBLJnLCF = await RexonayuMmPHd.transferownership.call(addresszLUyHr, {from: accounts[5]});
		const boolk2b3FJ0 = await RexonayuMmPHd.transferownership.call(address6caoES, {from: accounts[0]});
		const boolBPZ6A15 = await RexonayuMmPHd.approveAndCall.call(addressxIzUoKy, uintUspijDD, {from: accounts[2]});
		const boolysS4qWh = await RexonayuMmPHd.transfer.call(addresso1MHFo, uintceaGrN, {from: accounts[1]});
		const boolMGwt9IH = await RexonayuMmPHd.approve.call(addressHP8fEv, uintNm06uaE, {from: accounts[1]});

		await expect(RexonayuMmPHd.transferownership.call(addresszLUyHr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringH0xhumV = "7FxUAGUNPrnsVydwVOqlOF54B1avLL7NNbDW0WYlTMcoxiPYqEAJOw5wbmEoHqzl1CdEbD7LHYdqSEviW7QIdpB3bvuMsXKiy"
		const stringRpzRX4d = "8b824KVwlnOukLZ9WHoclbHwswwarXTAXdcp7A2a"
		const uintAIgg3Q2 = BigInt("561")
		const RexonaBOlJaqi = await Rexona.new(stringH0xhumV, stringRpzRX4d, uintAIgg3Q2, {from: accounts[3]});
		const uintu4us1G = BigInt("1833")
		const addresssHbNlHV = accounts[2]
		const uintwQtDTKY = BigInt("1051")
		const addressUH4L0a = accounts[1]
		const uintqCgRkTI = BigInt("1864")
		const addressmRrc9od = accounts[3]
		const uintn74z5VR = BigInt("1475")
		const addressgAVlTdx = accounts[4]
		const booloNODvA5 = await RexonaBOlJaqi.approve.call(addresssHbNlHV, uintu4us1G, {from: accounts[3]});
		const boolO742mn2 = await RexonaBOlJaqi.transfer.call(addressUH4L0a, uintwQtDTKY, {from: accounts[0]});
		const booleHPb3A = await RexonaBOlJaqi.approve.call(addressmRrc9od, uintqCgRkTI, {from: "0x0000000000000000000000000000000000000001"});
		const boolhVjH7w0 = await RexonaBOlJaqi.approveAndCall.call(addressgAVlTdx, uintn74z5VR, {from: accounts[4]});

		assert.equal(booloNODvA5, true)
		await expect(RexonaBOlJaqi.transfer.call(addressUH4L0a, uintwQtDTKY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringyQGPjhV = "YfCGTehaIiMEuOfjc"
		const stringRaE3gCv = "xi3zliMkHPBMIZraEuSGVRqmBQuPayAA3jEbL4nPu5JjgsaYLpm07Hny6HtOfvaX94QOLiUC6HHAwc"
		const uintpDxVETF = BigInt("2030")
		const RexonalgxW3DX = await Rexona.new(stringyQGPjhV, stringRaE3gCv, uintpDxVETF, {from: accounts[5]});
		const uintH6fKByp = BigInt("54")
		const addressCnSdgv = accounts[5]
		const addressGrqrAIE = accounts[3]
		const uintN92fesD = BigInt("1221")
		const addresskhHu6n4 = accounts[3]
		const addressKvAg8U7 = accounts[3]
		const uintBoGXUNQ = BigInt("1764")
		const addressPzi9bI4 = accounts[2]
		const addressydHwgt0 = accounts[2]
		const booldy668mg = await RexonalgxW3DX.transfer.call(addressCnSdgv, uintH6fKByp, {from: accounts[0]});
		const boolTPwvTF = await RexonalgxW3DX.transferownership.call(addressGrqrAIE, {from: accounts[4]});
		const boolfDVtS9z = await RexonalgxW3DX.transferFrom.call(addressKvAg8U7, addresskhHu6n4, uintN92fesD, {from: accounts[0]});
		const boolfaQ41iq = await RexonalgxW3DX.approveAndCall.call(addressPzi9bI4, uintBoGXUNQ, {from: accounts[3]});
		const boolCOc33nF = await RexonalgxW3DX.transferownership.call(addressydHwgt0, {from: accounts[0]});

		await expect(RexonalgxW3DX.transfer.call(addressCnSdgv, uintH6fKByp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringUnEgDZl = "VxIGdaZ1FonSNLnlc5fKxGfh1r0HSO9G3YrGY63mJrRxPz34pgyg7rBbNFm1qAtx1FaqrOq3"
		const stringUnp1y4J = "EDLnuyoKbhj5RobWT3tltEpRWxEUXStowWmC9crA6czrEt98BI74gv843RzwxMU3eFBueUVn7DUBUG5BfDQ53XNljrtiMsTdEIk"
		const uintAZj9I5X = BigInt("829")
		const RexonaiInY0y = await Rexona.new(stringUnEgDZl, stringUnp1y4J, uintAZj9I5X, {from: accounts[5]});
		const uintXp8nYwk = BigInt("2027")
		const addressvoOZk21 = accounts[0]
		const uintvWJGUZ1 = BigInt("1632")
		const addressGj8CAIa = accounts[1]
		const uintMfvj8vZ = BigInt("1318")
		const addressx6haD05 = accounts[2]
		const boolDxMsCx0 = await RexonaiInY0y.approveAndCall.call(addressvoOZk21, uintXp8nYwk, {from: accounts[4]});
		const boolvGFIy4e = await RexonaiInY0y.transfer.call(addressGj8CAIa, uintvWJGUZ1, {from: accounts[4]});
		const boolRikayvG = await RexonaiInY0y.approve.call(addressx6haD05, uintMfvj8vZ, {from: accounts[3]});

		await expect(RexonaiInY0y.approveAndCall.call(addressvoOZk21, uintXp8nYwk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringH0xhumV = "7FxUAGUNPrnsVydwVOqlOF54B1avLL7NNbDW0WYlTMcoxiPYqEAJOw5wbmEoHqzl1CdEbD7LHYdqSEviW7QIdpB3bvuMsXKiy"
		const stringRpzRX4d = "8b824KVwlnOukLZ9WHoclbHwswwarXTAXdcp7A2a"
		const uintB9CE7OU = BigInt("561")
		const RexonaBOlJaqi = await Rexona.new(stringH0xhumV, stringRpzRX4d, uintB9CE7OU, {from: accounts[3]});
		const uintQU1eb4i = BigInt("1833")
		const addressa5bOYgf = accounts[2]
		const uintPfucRBY = BigInt("1036")
		const addressILgY3E = accounts[0]
		const uintLBCuWc8 = BigInt("217")
		const addressbOVCO6B = accounts[1]
		const uintH0p9mT2 = BigInt("1475")
		const addressCsSOHPD = accounts[4]
		const addressmSK5AJr = accounts[0]
		const uintEhAkEml = BigInt("492")
		const addressyOeZ2sd = accounts[2]
		const addressjMuhGxF = accounts[0]
		const booloNODvA5 = await RexonaBOlJaqi.approve.call(addressa5bOYgf, uintQU1eb4i, {from: accounts[3]});
		const boolWNHkold = await RexonaBOlJaqi.approve.call(addressILgY3E, uintPfucRBY, {from: accounts[0]});
		const boolPhWi8mY = await RexonaBOlJaqi.approveAndCall.call(addressbOVCO6B, uintLBCuWc8, {from: accounts[3]});
		const boolhVjH7w0 = await RexonaBOlJaqi.approveAndCall.call(addressCsSOHPD, uintH0p9mT2, {from: accounts[4]});
		const boolpJ4N5GW = await RexonaBOlJaqi.transferownership.call(addressmSK5AJr, {from: accounts[1]});
		const boolGiekBFy = await RexonaBOlJaqi.approve.call(addressyOeZ2sd, uintEhAkEml, {from: accounts[3]});
		const bool3MzLOK = await RexonaBOlJaqi.transferownership.call(addressjMuhGxF, {from: accounts[1]});

		assert.equal(boolPhWi8mY, true)
		assert.equal(boolWNHkold, true)
		assert.equal(booloNODvA5, true)
		await expect(RexonaBOlJaqi.approveAndCall.call(addressCsSOHPD, uintH0p9mT2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringyQGPjhV = "YfCGTehaIiMEuOfjc"
		const stringRaE3gCv = "xi3zliMkHPBMIZraEuSGVRqmBQuPayAA3jEbL4nPu5JjgsaYLpm07Hny6HtOfvaX94QOLiUC6HHAwc"
		const uintnDBse8W = BigInt("2030")
		const RexonalgxW3DX = await Rexona.new(stringyQGPjhV, stringRaE3gCv, uintnDBse8W, {from: accounts[5]});
		const uintCHKPwxc = BigInt("0")
		const addressTORTsdn = accounts[6]
		const booldy668mg = await RexonalgxW3DX.transfer.call(addressTORTsdn, uintCHKPwxc, {from: accounts[0]});

		assert.equal(booldy668mg, true)
	});
})