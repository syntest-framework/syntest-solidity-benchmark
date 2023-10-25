const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintkUHeViq = BigInt("545")
		const stringbFl3mPF = "OYmnvWfkHXtFnPzioVzCWHyDYDyRb67foProPPoLEEHrGNQdvtiYv992a78ucmYYbo1Tl3z5RgD2HE"
		const stringetXKezd = "5R3ix9YJgVQfJ8RQL6O7MA89nuHG4dsCuYVd"
		const INSEWnyX9h = await INS.new(uintkUHeViq, stringbFl3mPF, stringetXKezd, {from: accounts[0]});
		const uintinfsmAV = BigInt("1890")
		const addressRfOy6dg = accounts[5]
		const byteNkHLZwe = "0x0b190704011e12150813"
		const uintjsdWs7B = BigInt("1175")
		const addressK8c2lh = accounts[3]
		const byte2uzjst = "0x15170803151e07061300070c02151316151106161b07081a1f150f2004"
		const uintC3lehxN = BigInt("1143")
		const addressJNOkrd1 = accounts[4]
		const uintaieSRNm = BigInt("444")
		const uintDzWFMXk = BigInt("1551")
		const addressBHo4cWp = accounts[4]
		const boolkwP67Vu = await INSEWnyX9h.approve.call(addressRfOy6dg, uintinfsmAV, {from: accounts[2]});
		const boolOELJ2EL = await INSEWnyX9h.approveAndCall.call(addressK8c2lh, uintjsdWs7B, byteNkHLZwe, {from: accounts[2]});
		const boolZgABp7g = await INSEWnyX9h.approveAndCall.call(addressJNOkrd1, uintC3lehxN, byte2uzjst, {from: accounts[1]});
		const boolAV4HVFQ = await INSEWnyX9h.burn.call(uintaieSRNm, {from: accounts[0]});
		const booljsM9kBH = await INSEWnyX9h.approve.call(addressBHo4cWp, uintDzWFMXk, {from: accounts[2]});

		assert.equal(boolkwP67Vu, true)
		await expect(INSEWnyX9h.approveAndCall.call(addressK8c2lh, uintjsdWs7B, byteNkHLZwe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintp0sRcF = BigInt("196")
		const stringIBeRiEg = "aqqZz54fND2tOSDwos62ZkeU6qgdImvHxhq"
		const stringvFuDFLy = ""
		const INSWFiIW1A = await INS.new(uintp0sRcF, stringIBeRiEg, stringvFuDFLy, {from: accounts[0]});
		const uintqv65VVv = BigInt("1761")
		const addressatArucH = accounts[5]
		const addressqVKqtTy = "0x0000000000000000000000000000000000000001"
		const uintzN8MkzF = BigInt("1269")
		const addressBLfuvll = accounts[0]
		const addressQJPimCA = accounts[5]
		const uintGNCSlzZ = BigInt("948")
		const addressWO4h60 = accounts[2]
		const addresseWeiZrX = accounts[5]
		const uintnUdMfuS = BigInt("1133")
		const addressqAIkgRR = accounts[4]
		const boolLqbD7g = await INSWFiIW1A.transferFrom.call(addressqVKqtTy, addressatArucH, uintqv65VVv, {from: accounts[4]});
		const boolkUczYLC = await INSWFiIW1A.transferFrom.call(addressQJPimCA, addressBLfuvll, uintzN8MkzF, {from: accounts[1]});
		const booleelv2wm = await INSWFiIW1A.transferFrom.call(addresseWeiZrX, addressWO4h60, uintGNCSlzZ, {from: accounts[5]});
		const boolPo6rQnl = await INSWFiIW1A.approve.call(addressqAIkgRR, uintnUdMfuS, {from: accounts[0]});

		await expect(INSWFiIW1A.transferFrom.call(addressqVKqtTy, addressatArucH, uintqv65VVv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintDUftcNR = BigInt("1362")
		const stringCbf0Z5t = "dED6zRl3SI9Md24irqwoMr1m4LV5CADZeYC60IMWCUanSN5QqgprWlD4N0PEHWoNsN"
		const stringWjcAY7P = "lPmzSGAZhbUN3QXPOqigNcodCgqELbuJfAxpRCJPouR7YVO"
		const INSuRpLpkO = await INS.new(uintDUftcNR, stringCbf0Z5t, stringWjcAY7P, {from: accounts[3]});
		const uintxs59qGo = BigInt("230")
		const uintmD9W7FF = BigInt("156")
		const addressF5Jrw3Q = accounts[2]
		const uintCIsfuCa = BigInt("648")
		const addressiKq65kj = accounts[3]
		const uinttd0xgu3 = BigInt("417")
		const address4G7NHb = accounts[4]
		const byteLKC3AsQ = "0x04130d110111110202050d03010508031e"
		const uintLltrwr8 = BigInt("683")
		const addressfTyoS7 = accounts[2]
		const boolh9SaxwZ = await INSuRpLpkO.burn.call(uintxs59qGo, {from: "0x0000000000000000000000000000000000000001"});
		const boolWvNGI72 = await INSuRpLpkO.approve.call(addressF5Jrw3Q, uintmD9W7FF, {from: "0x0000000000000000000000000000000000000001"});
		const boolJPjvyyh = await INSuRpLpkO.burnFrom.call(addressiKq65kj, uintCIsfuCa, {from: accounts[1]});
		const boolOquT5Sd = await INSuRpLpkO.burnFrom.call(address4G7NHb, uinttd0xgu3, {from: accounts[3]});
		const boolS23dqc9 = await INSuRpLpkO.approveAndCall.call(addressfTyoS7, uintLltrwr8, byteLKC3AsQ, {from: accounts[0]});

		await expect(INSuRpLpkO.burn.call(uintxs59qGo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uint5PL7t8 = BigInt("1116")
		const stringNdAacpK = "YAxPacJw1JHuw5PI0WpatYzDRISYubsej"
		const stringSKQ0Ozx = "KUdCuBz8LB31DoTqSxNxUvVMobRAWxIFtnKfuFb4L7pPspAj2"
		const INSaPP0Kd2 = await INS.new(uint5PL7t8, stringNdAacpK, stringSKQ0Ozx, {from: accounts[1]});
		const uintW7uZZ2d = BigInt("608")
		const addressk9lhbW4 = accounts[2]
		const uintfxVr9Po = BigInt("1705")
		const uintIRDyV1G = BigInt("254")
		const addressYnBQjPe = "0x0000000000000000000000000000000000000001"
		const addressFpMcLda = accounts[1]
		const uintcwGecj8 = BigInt("1095")
		const addressJvENlIK = accounts[0]
		const boolgFDePsg = await INSaPP0Kd2.approve.call(addressk9lhbW4, uintW7uZZ2d, {from: accounts[4]});
		const booleltZWw9 = await INSaPP0Kd2.burn.call(uintfxVr9Po, {from: accounts[1]});
		const boolibMGjhD = await INSaPP0Kd2.transferFrom.call(addressFpMcLda, addressYnBQjPe, uintIRDyV1G, {from: accounts[2]});
		const boolbUyIZM = await INSaPP0Kd2.burnFrom.call(addressJvENlIK, uintcwGecj8, {from: accounts[3]});

		assert.equal(booleltZWw9, true)
		assert.equal(boolgFDePsg, true)
		await expect(INSaPP0Kd2.transferFrom.call(addressFpMcLda, addressYnBQjPe, uintIRDyV1G, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintdZIGtkK = BigInt("1116")
		const stringNdAacpK = "YAxPacJw1JHuw5PI0WpatYzDRISYubsej"
		const stringSKQ0Ozx = "KUdCuBz8LB31DoTqSxNxUvVMobRAWxIFtnKfuFb4L7pPspAj2"
		const INSaPP0Kd2 = await INS.new(uintdZIGtkK, stringNdAacpK, stringSKQ0Ozx, {from: accounts[1]});
		const uintcTHU5Eq = BigInt("732")
		const addressmBPVOAX = accounts[0]
		const uintGkQDaPN = BigInt("1324")
		const addressJP7MI6G = accounts[3]
		const uintIX6XxWl = BigInt("547")
		const addressJxc1Ose = accounts[0]
		const addressM1d2kL0 = accounts[0]
		const uintg4r7DiI = BigInt("1705")
		const boolfvURPTg = await INSaPP0Kd2.transfer.call(addressmBPVOAX, uintcTHU5Eq, {from: accounts[2]});
		const boolnwdeoia = await INSaPP0Kd2.approve.call(addressJP7MI6G, uintGkQDaPN, {from: accounts[3]});
		const boollysi2fW = await INSaPP0Kd2.transferFrom.call(addressM1d2kL0, addressJxc1Ose, uintIX6XxWl, {from: accounts[3]});
		const booleltZWw9 = await INSaPP0Kd2.burn.call(uintg4r7DiI, {from: accounts[1]});

		await expect(INSaPP0Kd2.transfer.call(addressmBPVOAX, uintcTHU5Eq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintBEBFdA = BigInt("1156")
		const stringD0ALkx6 = "cc6TrNumuwlhKhhvhh4"
		const stringXWF3JLC = "BGeBOULd7zPfb9tT1fISTiUyNMTgRyIzQUZDCxkuD5Ih4mI44ulCeets88XunEv2k"
		const INSbOU1Jki = await INS.new(uintBEBFdA, stringD0ALkx6, stringXWF3JLC, {from: accounts[0]});
		const uintJXOGxAx = BigInt("693")
		const addressTokOWdO = accounts[4]
		const uintzsrApMf = BigInt("204")
		const uintkeqEfw7 = BigInt("1310")
		const addressBqZxisl = accounts[4]
		const uintQJswuX1 = BigInt("1600")
		const addressBWslPgl = accounts[5]
		const uintZJ0ZkL = BigInt("1452")
		const addressBJNT9g = accounts[4]
		const uintlgadNX5 = BigInt("363")
		const boolQcAwfoo = await INSbOU1Jki.transfer.call(addressTokOWdO, uintJXOGxAx, {from: accounts[0]});
		const boolGWucg5h = await INSbOU1Jki.burn.call(uintzsrApMf, {from: accounts[0]});
		const boolHjEkguZ = await INSbOU1Jki.transfer.call(addressBqZxisl, uintkeqEfw7, {from: accounts[1]});
		const boolWusqvjN = await INSbOU1Jki.transfer.call(addressBWslPgl, uintQJswuX1, {from: accounts[3]});
		const boolEaECap9 = await INSbOU1Jki.approve.call(addressBJNT9g, uintZJ0ZkL, {from: accounts[4]});
		const boolDsBfqYm = await INSbOU1Jki.burn.call(uintlgadNX5, {from: accounts[4]});

		assert.equal(boolGWucg5h, true)
		assert.equal(boolQcAwfoo, true)
		await expect(INSbOU1Jki.transfer.call(addressBqZxisl, uintkeqEfw7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintEIGL76 = BigInt("1116")
		const stringNdAacpK = "YAxPacJw1JHuw5PI0WpatYzDRISYubsej"
		const stringSKQ0Ozx = "KUdCuBz8LB31DoTqSxNxUvVMobRAWxIFtnKfuFb4L7pPspAj2"
		const INSaPP0Kd2 = await INS.new(uintEIGL76, stringNdAacpK, stringSKQ0Ozx, {from: accounts[1]});
		const uintm5taHGV = BigInt("280")
		const addressNpmn0N4 = accounts[3]
		const uintuFQfIe = BigInt("1679")
		const boolCwwevzn = await INSaPP0Kd2.burnFrom.call(addressNpmn0N4, uintm5taHGV, {from: accounts[3]});
		const booleltZWw9 = await INSaPP0Kd2.burn.call(uintuFQfIe, {from: accounts[1]});

		await expect(INSaPP0Kd2.burnFrom.call(addressNpmn0N4, uintm5taHGV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintcAtIS0 = BigInt("123")
		const stringkmVyTrR = "5KDcrYsuhGSi7ePkeG9lBWlNleXaTKuO7euKusPOPhi3T9CUq55mJ4Ro41J4QHKabLKt7"
		const stringFNbuPYi = "dH1CuEYosFeTvDUuLTZYXpi369epVaKe"
		const INSa7fLrOZ = await INS.new(uintcAtIS0, stringkmVyTrR, stringFNbuPYi, {from: "0x0000000000000000000000000000000000000001"});
		const uintn73P6Bs = BigInt("1247")
		const uint0wdArh = BigInt("1757")
		const addressnSiV7Lw = accounts[1]
		const addressoYcMmgJ = accounts[3]
		const byteT1a5SCP = "0x02071b1207020c0020021605120b1214141e07170f1c1a1805"
		const uintl3ErzBg = BigInt("140")
		const addressZi7FpcT = "0x0000000000000000000000000000000000000001"
		const uintXoijG3Y = BigInt("678")
		const addressayQSs4R = accounts[1]
		const uintmQW9qho = BigInt("224")
		const addressOIaH4hQ = accounts[1]
		const addressN8R6ZaZ = "0x0000000000000000000000000000000000000001"
		const bytePdx9ZXG = "0x0a1518100d0c191c1a0011070b1d141c192006120d1516020d0412"
		const uintyCiZfOG = BigInt("1924")
		const addressrp26UuW = accounts[0]
		const boolVQgHSIX = await INSa7fLrOZ.burn.call(uintn73P6Bs, {from: "0x0000000000000000000000000000000000000001"});
		const bool2tZ7IC = await INSa7fLrOZ.transferFrom.call(addressoYcMmgJ, addressnSiV7Lw, uint0wdArh, {from: accounts[1]});
		const boolPOtf5X1 = await INSa7fLrOZ.approveAndCall.call(addressZi7FpcT, uintl3ErzBg, byteT1a5SCP, {from: accounts[2]});
		const boolKKGrxjG = await INSa7fLrOZ.approve.call(addressayQSs4R, uintXoijG3Y, {from: accounts[2]});
		const boolJg2ZK0a = await INSa7fLrOZ.transferFrom.call(addressN8R6ZaZ, addressOIaH4hQ, uintmQW9qho, {from: "0x0000000000000000000000000000000000000001"});
		const boolLKlayhj = await INSa7fLrOZ.approveAndCall.call(addressrp26UuW, uintyCiZfOG, bytePdx9ZXG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for INS', async () => {
		const uintJx51VDn = BigInt("1116")
		const stringNdAacpK = "YAxPacJw1JHuw5PI0WpatYzDRISYubsej"
		const stringSKQ0Ozx = "KUdCuBz8LB31DoTqSxNxUvVMobRAWxIFtnKfuFb4L7pPspAj2"
		const INSaPP0Kd2 = await INS.new(uintJx51VDn, stringNdAacpK, stringSKQ0Ozx, {from: accounts[1]});
		const uint3S4Coa = BigInt("1732")
		const addresshWim6oR = accounts[1]
		const uinttbELCGj = BigInt("591")
		const addressCnv5vxV = accounts[0]
		const addresszqQm8tY = accounts[3]
		const uintULlnACs = BigInt("280")
		const addressPTuwNU8 = accounts[3]
		const boolE10hnzr = await INSaPP0Kd2.burnFrom.call(addresshWim6oR, uint3S4Coa, {from: accounts[3]});
		const bool2SbB8S = await INSaPP0Kd2.transferFrom.call(addresszqQm8tY, addressCnv5vxV, uinttbELCGj, {from: "0x0000000000000000000000000000000000000001"});
		const boolCwwevzn = await INSaPP0Kd2.burnFrom.call(addressPTuwNU8, uintULlnACs, {from: accounts[3]});

		await expect(INSaPP0Kd2.burnFrom.call(addresshWim6oR, uint3S4Coa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})