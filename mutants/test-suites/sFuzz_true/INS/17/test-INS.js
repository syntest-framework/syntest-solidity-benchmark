const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintpXCjLVr = BigInt("8")
		const stringRXxlCDz = "zMAcx9tGjnSlpMy1WTSUlEoobc0RhHELczTxvcmJUCwKqJggfXUkJ"
		const stringZODLXov = "2W91LSU61tFqNRvsrraLxIlSYKYacrubmR8XXN6cwKsgcOoHXiE5"
		const INSxdlJe8N = await INS.new(uintpXCjLVr, stringRXxlCDz, stringZODLXov, {from: accounts[3]});
		const uintq12Rvvw = BigInt("615")
		const addressx0O5Tv = accounts[5]
		const uintU7qL1Iq = BigInt("127")
		const addressAtD5KUR = "0x0000000000000000000000000000000000000001"
		const uintcaLSsdF = BigInt("322")
		const uintdoseUis = BigInt("781")
		const boolAR54wc6 = await INSxdlJe8N.transfer.call(addressx0O5Tv, uintq12Rvvw, {from: accounts[3]});
//		const boolErVpLbK = await INSxdlJe8N.transfer.call(addressAtD5KUR, uintU7qL1Iq, {from: accounts[2]});
//		const bool8HCpxp = await INSxdlJe8N.burn.call(uintcaLSsdF, {from: accounts[4]});
//		const boolshmZ9uW = await INSxdlJe8N.burn.call(uintdoseUis, {from: accounts[0]});

		assert.equal(boolAR54wc6, true)
		await expect(INSxdlJe8N.transfer.call(addressAtD5KUR, uintU7qL1Iq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uint35rD8U = BigInt("418")
		const stringE52e3Vo = "KUdPFJw2GTyX6MDgIGzuVFN6DHY69aoubCS5phTCfLOYW31qTOQZT9fo7jqreRfnwE7UllOgQks8sBe9GptkOzfcelnbVz"
		const string9nSEgK = "dvL5jIHCxlHUJopTKofJlslSIftV7zJRCmidafHselbPdasDY4ffd9"
		const INStpOb5ar = await INS.new(uint35rD8U, stringE52e3Vo, string9nSEgK, {from: accounts[3]});
		const byteLSDB9ra = "0x081b141c1912051e160e0b"
		const uintRpmAY9d = BigInt("1658")
		const addressSTL6SE4 = accounts[4]
		const uintoRHtqU = BigInt("1174")
		const addressUuH4Sbs = accounts[4]
		const addressy2tXpLL = accounts[2]
		const uintb7E4FVu = BigInt("878")
		const addressrEqTZiI = accounts[4]
//		const boolxc5rTRw = await INStpOb5ar.approveAndCall.call(addressSTL6SE4, uintRpmAY9d, byteLSDB9ra, {from: accounts[4]});
//		const boolgwaBGVU = await INStpOb5ar.transferFrom.call(addressy2tXpLL, addressUuH4Sbs, uintoRHtqU, {from: accounts[2]});
//		const boolc0IbWy5 = await INStpOb5ar.burnFrom.call(addressrEqTZiI, uintb7E4FVu, {from: accounts[1]});

		await expect(INStpOb5ar.approveAndCall.call(addressSTL6SE4, uintRpmAY9d, byteLSDB9ra, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintpArogYU = BigInt("2021")
		const stringkx2A71S = "F4q8FywbwOmaWeYFFWQXxodxFOA7OriMpr1HwxX26yyLzyeFsEAFg9mODeIIjmqlC"
		const stringN5pn9SI = "YXuboS2qyYqvtaG1DRFkkc8YSTkHzA4RNzDp6m"
		const INSCaZ3fNd = await INS.new(uintpArogYU, stringkx2A71S, stringN5pn9SI, {from: accounts[4]});
		const uintU2sg6HB = BigInt("1051")
		const addressGhvoxZ2 = accounts[2]
		const bytecEbNasY = "0x07030309080609"
		const uintB6iBNTF = BigInt("1165")
		const address5ja5tJ = accounts[1]
		const uintonNm5i0 = BigInt("1506")
		const addressoaeWfGN = accounts[1]
		const addressBLxKrV = accounts[1]
		const uinta5uMrxu = BigInt("1817")
		const addressHaFkuq = accounts[1]
		const uintF5VQUhC = BigInt("408")
//		const boolVFEyBMW = await INSCaZ3fNd.burnFrom.call(addressGhvoxZ2, uintU2sg6HB, {from: accounts[4]});
//		const boolC9eDn6T = await INSCaZ3fNd.approveAndCall.call(address5ja5tJ, uintB6iBNTF, bytecEbNasY, {from: accounts[1]});
//		const boolbVXIaEG = await INSCaZ3fNd.transferFrom.call(addressBLxKrV, addressoaeWfGN, uintonNm5i0, {from: accounts[5]});
//		const boolOPIOK2Q = await INSCaZ3fNd.burnFrom.call(addressHaFkuq, uinta5uMrxu, {from: accounts[2]});
//		const bool8NR8QF = await INSCaZ3fNd.burn.call(uintF5VQUhC, {from: accounts[3]});

		await expect(INSCaZ3fNd.burnFrom.call(addressGhvoxZ2, uintU2sg6HB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintKDzxUTM = BigInt("1872")
		const string1WQxHI = "oG9DDO6HHdVmYBOU0kt6ozRpJzW0EXz"
		const stringt1rYXV1 = "A9AIDTYIbDcEXErMvVqICSahSdRXTh1IPaX8WAV48MLMdX2BVLGurt1qUc7E2VJv3nKAlait1zxJ"
		const INStm6uUFf = await INS.new(uintKDzxUTM, string1WQxHI, stringt1rYXV1, {from: accounts[4]});
		const uintakjjfY1 = BigInt("1347")
		const addressHsc9n73 = accounts[1]
		const uintvp0pRmY = BigInt("1212")
		const uintcW2RNHC = BigInt("662")
		const addresspQ9KGMe = accounts[0]
		const uintYWGvxX = BigInt("1837")
		const addressd7zOZje = accounts[0]
		const uintcNKKPCV = BigInt("873")
		const addressshWE1Qb = accounts[0]
		const addressEzvGHPT = accounts[4]
		const boolCiYyqdQ = await INStm6uUFf.approve.call(addressHsc9n73, uintakjjfY1, {from: accounts[0]});
//		const boolcbYt43Y = await INStm6uUFf.burn.call(uintvp0pRmY, {from: accounts[0]});
//		const boolXHxS5Dl = await INStm6uUFf.transfer.call(addresspQ9KGMe, uintcW2RNHC, {from: accounts[0]});
//		const boolEiZK8Ax = await INStm6uUFf.approve.call(addressd7zOZje, uintYWGvxX, {from: accounts[4]});
//		const boolLUYEW3j = await INStm6uUFf.transferFrom.call(addressEzvGHPT, addressshWE1Qb, uintcNKKPCV, {from: accounts[2]});

		assert.equal(boolCiYyqdQ, true)
		await expect(INStm6uUFf.burn.call(uintvp0pRmY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintmU318tP = BigInt("1410")
		const stringm14FcE4 = "xaCG2ol3CVV2Q2jian79iPVdBsKCRGruIYnuDegCwopMq8LJwtLlvuBpRkQtPZ7kwM592n"
		const stringGYLf12G = "1kAFzchl4N0GhTELebK0GJBSOFnCQ4W"
		const INSEbG926i = await INS.new(uintmU318tP, stringm14FcE4, stringGYLf12G, {from: accounts[4]});
		const uintScgFb2m = BigInt("1344")
		const addressaY1Ex1e = accounts[2]
		const uintppDS2vd = BigInt("30")
		const addressXaGX1tZ = accounts[1]
		const addressdbcWutY = accounts[0]
		const uintz4dMIfG = BigInt("4")
		const uintQgdRqk = BigInt("839")
		const addressqYIlCIW = "0x0000000000000000000000000000000000000001"
		const byteNjH8tUV = "0x001108"
		const uintpb5AY1q = BigInt("1181")
		const addressywCrwl = accounts[4]
		const boolcNdo4ex = await INSEbG926i.approve.call(addressaY1Ex1e, uintScgFb2m, {from: accounts[4]});
//		const boolZQVBJ00 = await INSEbG926i.transferFrom.call(addressdbcWutY, addressXaGX1tZ, uintppDS2vd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTyObfyS = await INSEbG926i.burn.call(uintz4dMIfG, {from: accounts[1]});
//		const boolB6ymHSU = await INSEbG926i.approve.call(addressqYIlCIW, uintQgdRqk, {from: accounts[2]});
//		const boolqP0QS2 = await INSEbG926i.approveAndCall.call(addressywCrwl, uintpb5AY1q, byteNjH8tUV, {from: accounts[1]});

		assert.equal(boolcNdo4ex, true)
		await expect(INSEbG926i.transferFrom.call(addressdbcWutY, addressXaGX1tZ, uintppDS2vd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintAoPQCG = BigInt("875")
		const stringB0LEVY3 = "5gIbord24OUs15tYWUN26yb0dqS2NsAmrU1UaVubXmETsybp824I21lVCUfofVdlAp9pwrKlCGs"
		const stringFP4j0Vr = "gnMHq1AkE7Cmyz4naMlVunSUOYB3AsF93n8NySsSuQsnh49zGb9bHbgtjOoV6"
		const INSY9QQbEG = await INS.new(uintAoPQCG, stringB0LEVY3, stringFP4j0Vr, {from: "0x0000000000000000000000000000000000000001"});
		const bytezfLEti9 = "0x141c100c0004190d0a2005171e061b07"
		const uintPlXx2Ol = BigInt("1851")
		const addressnUXTxku = accounts[0]
		const uintMLU1w0l = BigInt("374")
		const addresshyTlk9D = accounts[1]
		const uintUfve7Fp = BigInt("685")
		const uintReKANpS = BigInt("499")
		const addressXfPTymk = accounts[2]
		const addressjMTYtwi = accounts[1]
		const uintD2ZNhMB = BigInt("2024")
		const addressj1vTlfL = accounts[1]
		const addressERQR723 = "0x0000000000000000000000000000000000000001"
		const boolsTS6eFU = await INSY9QQbEG.approveAndCall.call(addressnUXTxku, uintPlXx2Ol, bytezfLEti9, {from: accounts[0]});
		const boolf18FreF = await INSY9QQbEG.approve.call(addresshyTlk9D, uintMLU1w0l, {from: accounts[0]});
		const bool6FW7Kd = await INSY9QQbEG.burn.call(uintUfve7Fp, {from: accounts[4]});
		const boolqxqzKTS = await INSY9QQbEG.transferFrom.call(addressjMTYtwi, addressXfPTymk, uintReKANpS, {from: accounts[3]});
		const boolDugdckc = await INSY9QQbEG.transferFrom.call(addressERQR723, addressj1vTlfL, uintD2ZNhMB, {from: accounts[4]});
	});

	it('test for INS', async () => {
		const uintpKSnX7s = BigInt("1104")
		const stringRr9h8tt = "e2LeGmTFMR8Rawf6Mxtwm6DGO5Fne"
		const stringDLUUwZv = "wY2z8sbqboohAQLfT4bKJdBx5rEbTq41N7qC51uuwh6BTDa1TV1AKrNXX"
		const INSVxs6bls = await INS.new(uintpKSnX7s, stringRr9h8tt, stringDLUUwZv, {from: accounts[3]});
		const uintTA3zNLK = BigInt("1826")
		const addressmpyLocA = accounts[3]
		const uintJOKvtbj = BigInt("742")
		const addressKAkKwv3 = accounts[5]
//		const boolK2ryJwx = await INSVxs6bls.burnFrom.call(addressmpyLocA, uintTA3zNLK, {from: accounts[1]});
//		const boolQR0kxtM = await INSVxs6bls.burnFrom.call(addressKAkKwv3, uintJOKvtbj, {from: accounts[3]});

		await expect(INSVxs6bls.burnFrom.call(addressmpyLocA, uintTA3zNLK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintT0H7xv6 = BigInt("1993")
		const stringmwoIFbu = "pbJ1Ni3imWWQHoecoXY8BpQz0qR1ER2Sb8485GZ22W4bAj84o7afochWzPhuYdQzMbvgILwwf8hitkfEuQSLhsEf"
		const stringiyexoEM = "CbBc5X6tc1onJDCbgJOjhXlm4Pv14WHXSFCO7H0RanIpbWFKmAA1qTClLv8zI8s9ngxjQXC9HvPl5M9sVAMI0Boxvqnh"
		const INSuzYTnEh = await INS.new(uintT0H7xv6, stringmwoIFbu, stringiyexoEM, {from: accounts[0]});
		const uintaC0heas = BigInt("1304")
		const uintIN2ECnY = BigInt("953")
		const addressQtTAdP4 = accounts[4]
		const addressDR9JSf = accounts[4]
		const uintFZr4meR = BigInt("1474")
		const addressaEyGhcz = accounts[4]
		const uintXj3fmJm = BigInt("384")
		const addressBHSNx5 = accounts[5]
		const uintDXj6zSf = BigInt("1473")
		const boolmXhmlCK = await INSuzYTnEh.burn.call(uintaC0heas, {from: accounts[0]});
//		const boolYEpAkhf = await INSuzYTnEh.transferFrom.call(addressDR9JSf, addressQtTAdP4, uintIN2ECnY, {from: accounts[1]});
//		const boolFWwP7k5 = await INSuzYTnEh.burnFrom.call(addressaEyGhcz, uintFZr4meR, {from: accounts[3]});
//		const booloo6vEKy = await INSuzYTnEh.burnFrom.call(addressBHSNx5, uintXj3fmJm, {from: accounts[2]});
//		const boolc4AvcYh = await INSuzYTnEh.burn.call(uintDXj6zSf, {from: accounts[0]});

		assert.equal(boolmXhmlCK, true)
		await expect(INSuzYTnEh.transferFrom.call(addressDR9JSf, addressQtTAdP4, uintIN2ECnY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})