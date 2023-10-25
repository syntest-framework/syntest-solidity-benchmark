const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringTGIwQh7 = "JM2ELd2glYfk4AUsOzphNGirfxxTVFXWddGHDINHZziuNxFWGPqvpQaN4biTj4BYrHicD9ZHm4tguKdKOipYSgeWvsRuA4ssUX"
		const stringW6muJU = "wKqWeUe175gixbLVgKbPf2slxohxAtuQmzrny0UjDiabHegb6YGjRhjU6vkPIqDBkhrtqjGDZ8gKNO"
		const uintjAhUYYX = BigInt("1720")
		const DipexlRcIJvn = await Dipex.new(stringTGIwQh7, stringW6muJU, uintjAhUYYX, {from: accounts[1]});
		const uintAwfKURR = BigInt("780")
		const addressBnpGqzm = accounts[0]
		const addressKxmDEDl = accounts[5]
		const addressMbxcY5a = accounts[1]
		const addressRSDFg9D = accounts[2]
		const uintwFQAtVi = BigInt("1270")
		const addresssMvI2OZ = accounts[4]
		const uintrGu6X9 = BigInt("381")
		const addressR4NWiYS = "0x0000000000000000000000000000000000000001"
//		const boolYWfHuvH = await DipexlRcIJvn.transferFrom.call(addressKxmDEDl, addressBnpGqzm, uintAwfKURR, {from: accounts[1]});
//		const boolIGZpg9L = await DipexlRcIJvn.transferownership.call(addressMbxcY5a, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLIUmIlw = await DipexlRcIJvn.transferownership.call(addressRSDFg9D, {from: accounts[3]});
//		const boolFHIO3Mu = await DipexlRcIJvn.approve.call(addresssMvI2OZ, uintwFQAtVi, {from: accounts[3]});
//		const boolVCzXugB = await DipexlRcIJvn.approve.call(addressR4NWiYS, uintrGu6X9, {from: accounts[4]});

		await expect(DipexlRcIJvn.transferFrom.call(addressKxmDEDl, addressBnpGqzm, uintAwfKURR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringY1fzmR1 = "Cqw9NqDjLzsyjPSjoSBvY05HODPiNjbPJmXA9pF3SL97CJsBNvc24ycadqKSNTYr507LatDLWph"
		const stringX1quPGo = "9gmOmR8TrNq6OM7f5fbdv"
		const uintWxcRGqu = BigInt("1504")
		const DipexuDdaWk7 = await Dipex.new(stringY1fzmR1, stringX1quPGo, uintWxcRGqu, {from: accounts[4]});
		const uintGWoYK1 = BigInt("1299")
		const addressBpqLnZz = accounts[1]
		const uintgAUr0K7 = BigInt("161")
		const addressdZtzzoN = accounts[0]
		const addressCFGoqxq = accounts[5]
		const uintIOIzce = BigInt("1240")
		const addressY2wAPV = accounts[1]
		const addressbwu9R4z = accounts[0]
//		const boolbholhj5 = await DipexuDdaWk7.approveAndCall.call(addressBpqLnZz, uintGWoYK1, {from: accounts[5]});
//		const boolLYbi5YD = await DipexuDdaWk7.transferFrom.call(addressCFGoqxq, addressdZtzzoN, uintgAUr0K7, {from: accounts[4]});
//		const boolRCwsGX6 = await DipexuDdaWk7.approve.call(addressY2wAPV, uintIOIzce, {from: accounts[3]});
//		const boolz678OiD = await DipexuDdaWk7.transferownership.call(addressbwu9R4z, {from: accounts[1]});

		await expect(DipexuDdaWk7.approveAndCall.call(addressBpqLnZz, uintGWoYK1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringWA7t54V = "WS0iSN8JHkZULpJojuboTsud17TLCLlj5UXi"
		const stringCtby1ss = "JXk4ElCXulJdo"
		const uintlNIJMGU = BigInt("916")
		const DipexEFE0FDq = await Dipex.new(stringWA7t54V, stringCtby1ss, uintlNIJMGU, {from: accounts[3]});
		const uintMwSOftV = BigInt("357")
		const addressUBvrvaV = accounts[1]
		const uintPqsIHZ = BigInt("830")
		const addressbEAzR5b = accounts[4]
		const uintRdYWNnR = BigInt("365")
		const addresst7vh9Gp = accounts[4]
		const boolsW3PG7E = await DipexEFE0FDq.approve.call(addressUBvrvaV, uintMwSOftV, {from: accounts[1]});
//		const boolPSy2EWo = await DipexEFE0FDq.approveAndCall.call(addressbEAzR5b, uintPqsIHZ, {from: accounts[0]});
//		const boolOHQbcgt = await DipexEFE0FDq.approveAndCall.call(addresst7vh9Gp, uintRdYWNnR, {from: accounts[1]});

		assert.equal(boolsW3PG7E, true)
		await expect(DipexEFE0FDq.approveAndCall.call(addressbEAzR5b, uintPqsIHZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringvEjLtY = "ru2aWyDmKo2iEc2Tpmx6hYY1MYQu0h4MXkwHO8XsWV6KGPmIGJcpIXkjL35pg1OOgMa5h4Ql2zWwFTgdRyTz1I1m"
		const stringQqI9jP0 = "zIQ326V4ISB1c6sy9FF4hyf7rmEbSlXtA78Tub4Oaxgp08H7RSMObHeRIHrXttEPIRUSjI2iKm59St2zarBy9VjbY5gKD"
		const uintGXHLaoL = BigInt("716")
		const DipexkcQmUnv = await Dipex.new(stringvEjLtY, stringQqI9jP0, uintGXHLaoL, {from: accounts[4]});
		const addresshV9Zds5 = accounts[3]
		const uintL9APrkD = BigInt("732")
		const addressvN8deml = accounts[1]
		const uintwpSVuhs = BigInt("740")
		const addressKoXPog = accounts[4]
		const uintr5lc0Lm = BigInt("1829")
		const addressd3T1bOC = accounts[5]
		const uintICRfA0 = BigInt("839")
		const addressvrS0nyG = accounts[4]
		const addressOuSJrjz = accounts[2]
		const boolGNMmC5P = await DipexkcQmUnv.transferownership.call(addresshV9Zds5, {from: accounts[4]});
		const boolP0GTtQz = await DipexkcQmUnv.approve.call(addressvN8deml, uintL9APrkD, {from: accounts[2]});
//		const boollyXA7B = await DipexkcQmUnv.approveAndCall.call(addressKoXPog, uintwpSVuhs, {from: accounts[1]});
//		const boolHMcYjQe = await DipexkcQmUnv.approve.call(addressd3T1bOC, uintr5lc0Lm, {from: accounts[4]});
//		const boolriou5nb = await DipexkcQmUnv.transferFrom.call(addressOuSJrjz, addressvrS0nyG, uintICRfA0, {from: accounts[5]});

		assert.equal(boolGNMmC5P, true)
		assert.equal(boolP0GTtQz, true)
		await expect(DipexkcQmUnv.approveAndCall.call(addressKoXPog, uintwpSVuhs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringrDPpgrG = "j42JanAQ5DgD1Yjey"
		const stringH3Ns8Id = "pXGHm2SirIw9qZNnfjAbp8AkvZ24h6zE1PtzWyQX2XkYDEE59f3gBMCD"
		const uintVBshCxZ = BigInt("1613")
		const Dipex2AJM0k = await Dipex.new(stringrDPpgrG, stringH3Ns8Id, uintVBshCxZ, {from: accounts[3]});
		const uintaNSuGvJ = BigInt("1313")
		const addressorCb6yG = accounts[0]
		const addressLNno8n = accounts[5]
		const uintaDm7lA7 = BigInt("2005")
		const addressTbrDJ5n = accounts[2]
		const addresstW8g6EE = "0x0000000000000000000000000000000000000001"
		const uintP0FIP2A = BigInt("227")
		const addressU7ARAsD = accounts[2]
		const uintL0ivsu1 = BigInt("1275")
		const addressIvnzju = accounts[2]
		const addressOjf5izO = accounts[0]
//		const boolQZQgvbU = await Dipex2AJM0k.transferFrom.call(addressLNno8n, addressorCb6yG, uintaNSuGvJ, {from: accounts[5]});
//		const bool9QVYTI = await Dipex2AJM0k.transferFrom.call(addresstW8g6EE, addressTbrDJ5n, uintaDm7lA7, {from: accounts[0]});
//		const boolH3Y2XQI = await Dipex2AJM0k.transfer.call(addressU7ARAsD, uintP0FIP2A, {from: accounts[1]});
//		const boolI2vo72o = await Dipex2AJM0k.transferFrom.call(addressOjf5izO, addressIvnzju, uintL0ivsu1, {from: accounts[3]});

		await expect(Dipex2AJM0k.transferFrom.call(addressLNno8n, addressorCb6yG, uintaNSuGvJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringinPLk7R = "z4YHdlQLWSuwyLpPa2FvxIUsY2IxE9M9G8qx47TU8eLI"
		const stringJhSnUsH = "9m3p8thIVxInoeAA9twQFeQFHBHnycpyjwCeVMJa3Q4Be2HROQSkKdZAKTsOMRmGi"
		const uintNiDmRzn = BigInt("970")
		const DipexbTdluYA = await Dipex.new(stringinPLk7R, stringJhSnUsH, uintNiDmRzn, {from: accounts[2]});
		const uintEhXPhT = BigInt("131")
		const addressXYCM3yZ = accounts[3]
		const addressZZW4uh = accounts[2]
		const uintF59dZOu = BigInt("151")
		const addressVezuCCq = accounts[1]
		const uintdkCNpbQ = BigInt("1494")
		const addressP9g9XQ5 = accounts[3]
		const addressnimVP0F = accounts[3]
		const uintWBvConj = BigInt("107")
		const addressmhCLz4Z = accounts[2]
		const addressFL8c33W = accounts[2]
		const uintTQB9eVi = BigInt("134")
		const addressmsWASJP = accounts[2]
		const boolbUUC8Mz = await DipexbTdluYA.transferFrom.call(addressZZW4uh, addressXYCM3yZ, uintEhXPhT, {from: accounts[2]});
		const boolRHWgkO5 = await DipexbTdluYA.approve.call(addressVezuCCq, uintF59dZOu, {from: accounts[5]});
//		const boolGDENTGy = await DipexbTdluYA.transferFrom.call(addressnimVP0F, addressP9g9XQ5, uintdkCNpbQ, {from: accounts[1]});
//		const boolzGBQyDb = await DipexbTdluYA.transferFrom.call(addressFL8c33W, addressmhCLz4Z, uintWBvConj, {from: accounts[4]});
//		const booliS69hVA = await DipexbTdluYA.approve.call(addressmsWASJP, uintTQB9eVi, {from: accounts[3]});

		assert.equal(boolRHWgkO5, true)
		assert.equal(boolbUUC8Mz, true)
		await expect(DipexbTdluYA.transferFrom.call(addressnimVP0F, addressP9g9XQ5, uintdkCNpbQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringRI8YYQx = "HJdaxuRmAfS9rVPXVr5TjVPIC6LYbToveMPlTbwIElg3WQpf7QJHMA4kUOAjzNgqYHLCmwIdNGKHiYe"
		const stringwgPKpZ = "ONtsyiR4e3biuso2"
		const uintNWkR8xz = BigInt("1731")
		const DipexaoUcR0 = await Dipex.new(stringRI8YYQx, stringwgPKpZ, uintNWkR8xz, {from: "0x0000000000000000000000000000000000000001"});
		const uintKj61Rod = BigInt("1956")
		const addressNoT7ATp = accounts[2]
		const uintezkjy4G = BigInt("345")
		const addressvJOgaMe = accounts[4]
		const uintHVUPjfw = BigInt("431")
		const addressjPcugA8 = "0x0000000000000000000000000000000000000001"
		const addressoKiHQt = accounts[2]
		const uintRP5hh5X = BigInt("895")
		const addressLmpl4R = accounts[1]
		const uint5j45Lo = BigInt("1489")
		const addressral716 = accounts[1]
		const boolnavj8Vw = await DipexaoUcR0.approve.call(addressNoT7ATp, uintKj61Rod, {from: accounts[3]});
		const boolx1NgeMP = await DipexaoUcR0.transfer.call(addressvJOgaMe, uintezkjy4G, {from: accounts[4]});
		const boolcWwrkQ5 = await DipexaoUcR0.transferFrom.call(addressoKiHQt, addressjPcugA8, uintHVUPjfw, {from: accounts[5]});
		const boolST88Lc5 = await DipexaoUcR0.approveAndCall.call(addressLmpl4R, uintRP5hh5X, {from: accounts[0]});
		const boolg7pPig6 = await DipexaoUcR0.approveAndCall.call(addressral716, uint5j45Lo, {from: accounts[4]});
	});

	it('test for Dipex', async () => {
		const stringOtdgsRI = "PSTQupN9gj3PRrQeZRTmwOzBXBnIcYEQhecdyDgPwnsVhE38hpn9i9UmyniY8jjCpDoriCBjBxG8GWxQbRmsWiOMrSaVoG2H"
		const stringxsfIsYH = "8fvc95"
		const uintP8FUz8y = BigInt("322")
		const DipexkGzFZit = await Dipex.new(stringOtdgsRI, stringxsfIsYH, uintP8FUz8y, {from: accounts[4]});
		const uintJPU21NZ = BigInt("1187")
		const addressmtQmRiU = accounts[3]
		const uintCwVVx3V = BigInt("251")
		const addressolbdxd9 = accounts[4]
		const uintxxMQFK1 = BigInt("1121")
		const addressLRmUnpq = accounts[0]
		const uintaVx5IwD = BigInt("776")
		const addressiIW4qD = accounts[3]
//		const boolD6FDTPT = await DipexkGzFZit.transfer.call(addressmtQmRiU, uintJPU21NZ, {from: accounts[3]});
//		const boolylFX9QG = await DipexkGzFZit.approveAndCall.call(addressolbdxd9, uintCwVVx3V, {from: accounts[0]});
//		const boolE3z3LR3 = await DipexkGzFZit.transfer.call(addressLRmUnpq, uintxxMQFK1, {from: accounts[3]});
//		const boolTcpJkA9 = await DipexkGzFZit.transfer.call(addressiIW4qD, uintaVx5IwD, {from: accounts[2]});

		await expect(DipexkGzFZit.transfer.call(addressmtQmRiU, uintJPU21NZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringqP6IB3l = "97g2dJff9N2SwazfKkcpsTQ4sTtQ1xl7hm8cWK3H5KCqs8bgqyIyFSNFRW"
		const stringug3YS7C = "3dwtFve2Nb6Idv3wbhB9IEVvcNlwi4TZvAY2u"
		const uintTAcTYGN = BigInt("113")
		const DipexZ3CSZft = await Dipex.new(stringqP6IB3l, stringug3YS7C, uintTAcTYGN, {from: accounts[2]});
		const uintrTpyhO = BigInt("644")
		const addressaMUvsqC = accounts[5]
		const uintgBpk5nz = BigInt("34")
		const addressTeGxD5W = accounts[2]
		const uinttOQpk8q = BigInt("1934")
		const address3AIK6o = accounts[0]
		const addressuhLOa53 = accounts[4]
		const uintct7y02j = BigInt("1706")
		const addressZfELaBZ = accounts[4]
		const boolQxunhyl = await DipexZ3CSZft.approveAndCall.call(addressaMUvsqC, uintrTpyhO, {from: accounts[2]});
//		const boolFDsKuqd = await DipexZ3CSZft.transfer.call(addressTeGxD5W, uintgBpk5nz, {from: accounts[3]});
//		const boolOKuvo0S = await DipexZ3CSZft.transferFrom.call(addressuhLOa53, address3AIK6o, uinttOQpk8q, {from: accounts[1]});
//		const boolXRjlb3E = await DipexZ3CSZft.approveAndCall.call(addressZfELaBZ, uintct7y02j, {from: accounts[1]});

		assert.equal(boolQxunhyl, true)
		await expect(DipexZ3CSZft.transfer.call(addressTeGxD5W, uintgBpk5nz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringqP6IB3l = "97g2dJff9N2SwazfKkcpsTQ4sTtQ1xl7hm8cWK3H5KCqs8bgqyIyFSNFRW"
		const stringug3YS7C = "3dwtFve2Nb6Idv3wbhB9IEVvcNlwi4TZvAY2u"
		const uintHmt8pyR = BigInt("113")
		const DipexZ3CSZft = await Dipex.new(stringqP6IB3l, stringug3YS7C, uintHmt8pyR, {from: accounts[2]});
		const uintDJN4KRI = BigInt("0")
		const addressObA8nF = accounts[2]
		const uintMrSm2OV = BigInt("1503")
		const addresszNsReJH = accounts[0]
		const uintxxJe5dY = BigInt("1706")
		const addressg33sYP4 = accounts[4]
		const boolFDsKuqd = await DipexZ3CSZft.transfer.call(addressObA8nF, uintDJN4KRI, {from: accounts[3]});
		const boolFciqf4Y = await DipexZ3CSZft.approve.call(addresszNsReJH, uintMrSm2OV, {from: accounts[1]});
//		const boolXRjlb3E = await DipexZ3CSZft.approveAndCall.call(addressg33sYP4, uintxxJe5dY, {from: accounts[1]});

		assert.equal(boolFDsKuqd, true)
		assert.equal(boolFciqf4Y, true)
		await expect(DipexZ3CSZft.approveAndCall.call(addressg33sYP4, uintxxJe5dY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringrDPpgrG = "j42JanAQ5DgD1Yjey"
		const stringH3Ns8Id = "pXGHm2SirIw9qZNnfjAbp8AkvZ24h6zE1PtzWyQX2XkYDEE59f3gBMCD"
		const uintGCIWyey = BigInt("1613")
		const Dipex2AJM0k = await Dipex.new(stringrDPpgrG, stringH3Ns8Id, uintGCIWyey, {from: accounts[3]});
		const uintpTWweNJ = BigInt("54")
		const addresslysZrpK = accounts[4]
		const uintxBtWfJo = BigInt("0")
		const addressj7vZM88 = accounts[1]
		const booloVv5uL8 = await Dipex2AJM0k.approve.call(addresslysZrpK, uintpTWweNJ, {from: accounts[4]});
		const boolGpWmtRT = await Dipex2AJM0k.approveAndCall.call(addressj7vZM88, uintxBtWfJo, {from: accounts[3]});

		assert.equal(boolGpWmtRT, true)
		assert.equal(booloVv5uL8, true)
	});
})