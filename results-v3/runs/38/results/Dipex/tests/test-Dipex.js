const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringQ8NF4bg = "9MtlZZY4QlIPA39AAqltqSeumsYcc3Huv8pGMmimdvkCWtBUqN5pJI75IlCsw8o1Q7FAPggVhfnowN9Jmg1OO"
		const stringmWXRPC = "ioHe15LVA3THbUk83PdxVMSO4atfgF3hNyV0P4kNlpJeG0YF4btLXbyEQqpV84KMiBSo2gP52aDCADblaLZkKRzG"
		const uintT0LsS6h = BigInt("85")
		const DipexyjAG6zU = await Dipex.new(stringQ8NF4bg, stringmWXRPC, uintT0LsS6h, {from: accounts[5]});
		const uintlA9oIkJ = BigInt("1036")
		const addressIzkapie = accounts[4]
		const uintHjIeBS2 = BigInt("1849")
		const addressszbU7X1 = accounts[3]
		const uintMsCgQsX = BigInt("859")
		const addressrdFwbVn = accounts[4]
		const uintG85wtIt = BigInt("566")
		const addressy6pRUDy = accounts[2]
		const uintIJzkqB2 = BigInt("192")
		const addressOq96n9m = accounts[3]
		const uintJV9aLVz = BigInt("568")
		const addressvbUSQX = accounts[0]
		const boolX3Udl18 = await DipexyjAG6zU.approve.call(addressIzkapie, uintlA9oIkJ, {from: accounts[4]});
		const boolFMlKb7s = await DipexyjAG6zU.approveAndCall.call(addressszbU7X1, uintHjIeBS2, {from: accounts[2]});
		const booljEtFgMY = await DipexyjAG6zU.approveAndCall.call(addressrdFwbVn, uintMsCgQsX, {from: "0x0000000000000000000000000000000000000001"});
		const booliI01Tlt = await DipexyjAG6zU.approveAndCall.call(addressy6pRUDy, uintG85wtIt, {from: accounts[3]});
		const boolyX2T9iD = await DipexyjAG6zU.approve.call(addressOq96n9m, uintIJzkqB2, {from: accounts[2]});
		const boolY9lUB79 = await DipexyjAG6zU.approve.call(addressvbUSQX, uintJV9aLVz, {from: accounts[1]});

		assert.equal(boolX3Udl18, true)
		await expect(DipexyjAG6zU.approveAndCall.call(addressszbU7X1, uintHjIeBS2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringMqL0yMc = "i7cHOqjUuYFJg6Tk3Qzz4AezfM0qPD4iYxdQnQTNHbksf55muiGrcUCJUwo813"
		const stringkSdsgW9 = "iyf57l1IHg55tLs2stcKB"
		const uintEMtGviC = BigInt("888")
		const Dipexr0z0PNB = await Dipex.new(stringMqL0yMc, stringkSdsgW9, uintEMtGviC, {from: accounts[4]});
		const uintckvULCD = BigInt("1493")
		const addresstjaxnOt = accounts[5]
		const addressktVNTCx = accounts[2]
		const uintxUpjxOQ = BigInt("1193")
		const addresslPpWmMo = accounts[2]
		const addressmsbhOHA = accounts[2]
		const uintUSE0D2l = BigInt("1446")
		const addresst3gRIrV = accounts[4]
		const addressO8JUqCo = accounts[1]
		const uint3lm9Vu = BigInt("1648")
		const addresstWcaLES = accounts[4]
		const addressaS1oLpK = accounts[2]
		const boolCo8lkI = await Dipexr0z0PNB.transferFrom.call(addressktVNTCx, addresstjaxnOt, uintckvULCD, {from: accounts[1]});
		const boolpbH0ZLr = await Dipexr0z0PNB.transferFrom.call(addressmsbhOHA, addresslPpWmMo, uintxUpjxOQ, {from: accounts[5]});
		const boolS9Xv5WU = await Dipexr0z0PNB.transferFrom.call(addressO8JUqCo, addresst3gRIrV, uintUSE0D2l, {from: "0x0000000000000000000000000000000000000001"});
		const boolMCA30nn = await Dipexr0z0PNB.approveAndCall.call(addresstWcaLES, uint3lm9Vu, {from: accounts[0]});
		const boolNgQjpJH = await Dipexr0z0PNB.transferownership.call(addressaS1oLpK, {from: accounts[4]});

		await expect(Dipexr0z0PNB.transferFrom.call(addressktVNTCx, addresstjaxnOt, uintckvULCD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringzY9osoI = "s6cz6DU1E34qc3tLtP5Ked66I5APhZxfUjNBz4GNYfIYUHbpGT34TELQS2EiIhY7fxoAQP"
		const stringaukCDp8 = "8351gLdbGq1x7H2fnfmsOxi3My4l8cqpCf2zUVYhG7xRejB77MlPLiwA3pjo210cd0lgAKYI"
		const uint0dg0fB = BigInt("1475")
		const DipexCR4fi8g = await Dipex.new(stringzY9osoI, stringaukCDp8, uint0dg0fB, {from: "0x0000000000000000000000000000000000000001"});
		const uintW6LTFre = BigInt("918")
		const addresskxns5rB = accounts[3]
		const addressYev7QBB = "0x0000000000000000000000000000000000000001"
		const uintFqMdVdF = BigInt("586")
		const addressD2QHVoo = "0x0000000000000000000000000000000000000001"
		const addressWDqkPpl = accounts[0]
		const uintrZMVDDl = BigInt("1114")
		const addressBEVgHty = accounts[1]
		const addressVBBdwku = accounts[2]
		const boolzsO2g92 = await DipexCR4fi8g.approveAndCall.call(addresskxns5rB, uintW6LTFre, {from: accounts[4]});
		const boolz441CLT = await DipexCR4fi8g.transferownership.call(addressYev7QBB, {from: accounts[2]});
		const bool9CiUup = await DipexCR4fi8g.transferFrom.call(addressWDqkPpl, addressD2QHVoo, uintFqMdVdF, {from: accounts[5]});
		const boolNvowZxJ = await DipexCR4fi8g.transferFrom.call(addressVBBdwku, addressBEVgHty, uintrZMVDDl, {from: accounts[3]});
	});

	it('test for Dipex', async () => {
		const stringSpMY09B = "yCqoUyzEtsmbCRdCLXRWp"
		const stringKVoGoAs = "XMEJXR0mxdZ7hzkjBxf2jFdRLV4V5dsOWwussGGm70NCXQTjX"
		const uintdFu2p3S = BigInt("191")
		const DipexhlGV8KJ = await Dipex.new(stringSpMY09B, stringKVoGoAs, uintdFu2p3S, {from: accounts[3]});
		const uintXtQLGS = BigInt("634")
		const addressRx1wsD0 = accounts[2]
		const addressaqSMyK5 = accounts[4]
		const boolFsAqVQ = await DipexhlGV8KJ.transfer.call(addressRx1wsD0, uintXtQLGS, {from: accounts[3]});
		const boolWXaQvNb = await DipexhlGV8KJ.transferownership.call(addressaqSMyK5, {from: accounts[4]});

		assert.equal(boolFsAqVQ, true)
		await expect(DipexhlGV8KJ.transferownership.call(addressaqSMyK5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringnHONJFH = "TelhUEjIHtacVSswMG02tq1nkSkhTRjBYXFqb2lwewLerUqiLaifphYDBxBt5rvhIhnVajvuA9ux8aLIB"
		const stringSnZcqVj = "AreMfsjuYoCxWsqcGzaU4GPRqEj7J1dDNfrTKKtbddaE"
		const uintFaVKlDd = BigInt("15")
		const DipexeVD13wJ = await Dipex.new(stringnHONJFH, stringSnZcqVj, uintFaVKlDd, {from: accounts[1]});
		const uintwvu1XMd = BigInt("346")
		const addressQRfPkna = accounts[3]
		const addressUyIE4FQ = accounts[4]
		const uintXdK2AEL = BigInt("281")
		const addressQkTkbHA = "0x0000000000000000000000000000000000000001"
		const uintfnT8ZMV = BigInt("1399")
		const addressRcP8v4D = accounts[4]
		const addressiOTrMVm = "0x0000000000000000000000000000000000000001"
		const uintEMbnGgc = BigInt("1881")
		const addressCs5EfW = accounts[2]
		const address7m2I2l = accounts[0]
		const uintNG5c9FX = BigInt("1904")
		const addressaOiaGS = accounts[0]
		const addressF8RPkfm = accounts[2]
		const boolLnpCFui = await DipexeVD13wJ.transferFrom.call(addressUyIE4FQ, addressQRfPkna, uintwvu1XMd, {from: accounts[4]});
		const boolIEmSWMr = await DipexeVD13wJ.transfer.call(addressQkTkbHA, uintXdK2AEL, {from: accounts[3]});
		const boolHIWlog9 = await DipexeVD13wJ.transferFrom.call(addressiOTrMVm, addressRcP8v4D, uintfnT8ZMV, {from: accounts[1]});
		const boolA6rgf4B = await DipexeVD13wJ.transferFrom.call(address7m2I2l, addressCs5EfW, uintEMbnGgc, {from: accounts[3]});
		const booleLZStd = await DipexeVD13wJ.transferFrom.call(addressF8RPkfm, addressaOiaGS, uintNG5c9FX, {from: accounts[3]});

		await expect(DipexeVD13wJ.transferFrom.call(addressUyIE4FQ, addressQRfPkna, uintwvu1XMd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringSpMY09B = "yCqoUyzEtsmbCRdCLXRWp"
		const stringKVoGoAs = "XMEJXR0mxdZ7hzkjBxf2jFdRLV4V5dsOWwussGGm70NCXQTjX"
		const uintmhftV5Y = BigInt("191")
		const DipexhlGV8KJ = await Dipex.new(stringSpMY09B, stringKVoGoAs, uintmhftV5Y, {from: accounts[3]});
		const uintGkUyrHz = BigInt("640")
		const addresskHeUIe8 = accounts[1]
		const uintI7Y1tAb = BigInt("664")
		const addressQCeJUs = accounts[3]
		const uintJCCQeNU = BigInt("80")
		const addressVYK2uK1 = accounts[3]
		const addressbkaX8dH = accounts[2]
		const uintZagAjl = BigInt("1976")
		const addressN8LHcdY = accounts[4]
		const boolzdSUAH = await DipexhlGV8KJ.approveAndCall.call(addresskHeUIe8, uintGkUyrHz, {from: accounts[3]});
		const boolJd0ROTr = await DipexhlGV8KJ.approveAndCall.call(addressQCeJUs, uintI7Y1tAb, {from: accounts[2]});
		const boolNF5L0R = await DipexhlGV8KJ.transferFrom.call(addressbkaX8dH, addressVYK2uK1, uintJCCQeNU, {from: accounts[1]});
		const boolX1FbvgT = await DipexhlGV8KJ.approve.call(addressN8LHcdY, uintZagAjl, {from: accounts[5]});

		assert.equal(boolzdSUAH, true)
		await expect(DipexhlGV8KJ.approveAndCall.call(addressQCeJUs, uintI7Y1tAb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringSpMY09B = "yCqoUyzEtsmbCRdCLXRWp"
		const stringKVoGoAs = "XMEJXR0mxdZ7hzkjBxf2jFdRLV4V5dsOWwussGGm70NCXQTjX"
		const uintpe76xx = BigInt("191")
		const DipexhlGV8KJ = await Dipex.new(stringSpMY09B, stringKVoGoAs, uintpe76xx, {from: accounts[3]});
		const uintQBb4LX9 = BigInt("0")
		const addressHoPuCFx = accounts[4]
		const address3ZbXVn = accounts[2]
		const uintS6lwQLE = BigInt("509")
		const addressL201EKD = accounts[5]
		const boolNF5L0R = await DipexhlGV8KJ.transferFrom.call(address3ZbXVn, addressHoPuCFx, uintQBb4LX9, {from: accounts[1]});
		const bool6ovAeG = await DipexhlGV8KJ.approveAndCall.call(addressL201EKD, uintS6lwQLE, {from: accounts[1]});

		assert.equal(boolNF5L0R, true)
		await expect(DipexhlGV8KJ.approveAndCall.call(addressL201EKD, uintS6lwQLE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringSpMY09B = "yCqoUyzEtsmbCRdCLXRWp"
		const stringKVoGoAs = "XMEJXR0mxdZ7hzkjBxf2jFdRLV4V5dsOWwussGGm70NCXQTjX"
		const uintoffm9WB = BigInt("191")
		const DipexhlGV8KJ = await Dipex.new(stringSpMY09B, stringKVoGoAs, uintoffm9WB, {from: accounts[3]});
		const uintkJtCUHX = BigInt("0")
		const addressd9tz5sB = accounts[1]
		const uintHQmwoyA = BigInt("1032")
		const addressPdccX10 = accounts[2]
		const uintqNiSKNz = BigInt("1206")
		const addressLH8QziZ = accounts[4]
		const boolIKorJ8t = await DipexhlGV8KJ.approveAndCall.call(addressd9tz5sB, uintkJtCUHX, {from: accounts[3]});
		const boolCGwd7D = await DipexhlGV8KJ.approve.call(addressPdccX10, uintHQmwoyA, {from: accounts[5]});
		const booltyFGr5X = await DipexhlGV8KJ.approve.call(addressLH8QziZ, uintqNiSKNz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCGwd7D, true)
		assert.equal(boolIKorJ8t, true)
		assert.equal(booltyFGr5X, true)
	});
})