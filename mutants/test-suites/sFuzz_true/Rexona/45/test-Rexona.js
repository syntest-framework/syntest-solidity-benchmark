const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringVcbbKwh = "n2zblG0wzMAcx9tGjnSlpMy1WTSUlEoobc0RhHELczTxvcmJUCwKqJggfXUkJrnMB23Pw2W91LSU61tFqNR"
		const stringxURJ4tm = "lSYKYacrubmR8XXN6cwKsgcOoHXiE5zf4bnEKWtBauYdE2fpOmjTpQDEIukxInSxCpZKm72q"
		const uintQLSsdFJ = BigInt("129")
		const RexonayHCpxp1 = await Rexona.new(stringVcbbKwh, stringxURJ4tm, uintQLSsdFJ, {from: accounts[5]});
		const uintv4wc6kA = BigInt("1771")
		const addressHvvwSKR = accounts[4]
		const uintLpLbKiW = BigInt("867")
		const addressB1IqDOr = accounts[3]
		const address5KURe7 = accounts[3]
//		const boolWNxlHxn = await RexonayHCpxp1.approveAndCall.call(addressHvvwSKR, uintv4wc6kA, {from: accounts[1]});
//		const boolTLzBC7 = await RexonayHCpxp1.transferFrom.call(address5KURe7, addressB1IqDOr, uintLpLbKiW, {from: accounts[0]});

		await expect(RexonayHCpxp1.approveAndCall.call(addressHvvwSKR, uintv4wc6kA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringvpn9SIM = "FFWQXxodxFOA7OriMpr1HwxX26yyLzyeFsEAFg9mODeIIjmqlCKNS1XRinYXuboS2qyYqvtaG1DRFkkc8YSTkHzA4RNzDp6mn"
		const stringkuqk5u = "pSvdtT6V696WANIfUlgkw2c8XdhYg6ErFdiiWVWga8q"
		const uintCrxu3YP = BigInt("280")
		const RexonaEK2QfwR = await Rexona.new(stringvpn9SIM, stringkuqk5u, uintCrxu3YP, {from: accounts[3]});
		const uintDTFjMMG = BigInt("178")
		const addressvtJL6iB = accounts[2]
		const uintvi0tlVX = BigInt("276")
		const addressVGNynNm = accounts[1]
		const addressArVRyae = accounts[4]
		const boolHOLRmEb = await RexonaEK2QfwR.approve.call(addressvtJL6iB, uintDTFjMMG, {from: accounts[0]});
//		const boolQEG5U4Z = await RexonaEK2QfwR.transferFrom.call(addressArVRyae, addressVGNynNm, uintvi0tlVX, {from: accounts[4]});

		assert.equal(boolHOLRmEb, true)
		await expect(RexonaEK2QfwR.transferFrom.call(addressArVRyae, addressVGNynNm, uintvi0tlVX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringnHIvkJk = "IwW71vv54O1dmNFMVop3wSq1q9WjplTZmjF4W58Qrbk3PMkjcUjoG9DDO6HHdVmYBOU0kt6ozRpJzW0EXz6Rmh"
		const stringt1rYXV1 = "DTYIbDcEXErMvVqICSahSdRXTh1IPaX8WAV48MLMdX2BVLGurt1qUc7E2VJv3nKAlait1zxJ"
		const uinttm6uUFf = BigInt("1805")
		const RexonaMmYNH4 = await Rexona.new(stringnHIvkJk, stringt1rYXV1, uinttm6uUFf, {from: accounts[3]});
		const uintXHxS5Dl = BigInt("397")
		const addressM2RNHCU = accounts[3]
		const uintEiZK8Ax = BigInt("1623")
		const addressOWGvxX3 = accounts[0]
		const uintLUYEW3j = BigInt("923")
		const addressDKKPCVa = accounts[3]
		const addressshWE1Qb = accounts[0]
		const boolU20qp5D = await RexonaMmYNH4.approve.call(addressM2RNHCU, uintXHxS5Dl, {from: accounts[4]});
		const booloTrIitZ = await RexonaMmYNH4.approve.call(addressOWGvxX3, uintEiZK8Ax, {from: accounts[0]});
//		const boolyWjuh5W = await RexonaMmYNH4.transferFrom.call(addressshWE1Qb, addressDKKPCVa, uintLUYEW3j, {from: accounts[2]});

		assert.equal(boolU20qp5D, true)
		assert.equal(booloTrIitZ, true)
		await expect(RexonaMmYNH4.transferFrom.call(addressshWE1Qb, addressDKKPCVa, uintLUYEW3j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringYSFkdSn = "DXSAAzzvpREdyoNGtgexFKCLfl8qk4dKR9j8yUyqFeY3cX25AITdH6kRxVP93Aen7IhedaW1fdxjdpF6BSbieVP1yeLtXILxOJ"
		const stringT2GMR6z = "nFbgL1dNeuCl2quhgx232u6eIuBjbiwUEKvVD9G2f5KHePg70oFModcwujHXMnG85FMtlbJgbH94CuPdf"
		const uintp2kZKp1 = BigInt("1879")
		const RexonalCeeRrI = await Rexona.new(stringYSFkdSn, stringT2GMR6z, uintp2kZKp1, {from: accounts[1]});
		const uintBOoMmaP = BigInt("813")
		const addressdzCuZgi = accounts[0]
		const uintfT88pMg = BigInt("643")
		const addressjcQDvc8 = accounts[2]
		const uintcFwLkWd = BigInt("1737")
		const addressfIhwH6b = accounts[1]
		const uintewPOhK = BigInt("897")
		const addressbNnRorG = accounts[4]
		const addressil7wbvw = accounts[3]
		const uinteovkOEH = BigInt("615")
		const addressQiltFBf = accounts[3]
		const addressfcXkp8s = accounts[2]
		const uintwzWhfcZ = BigInt("614")
		const addressDFQL7Ey = accounts[3]
		const boolT4uTQB8 = await RexonalCeeRrI.approve.call(addressdzCuZgi, uintBOoMmaP, {from: accounts[2]});
//		const boolVQ5Vipp = await RexonalCeeRrI.transfer.call(addressjcQDvc8, uintfT88pMg, {from: accounts[3]});
//		const boolh828A04 = await RexonalCeeRrI.approveAndCall.call(addressfIhwH6b, uintcFwLkWd, {from: accounts[2]});
//		const boolJ1yuX3P = await RexonalCeeRrI.transferFrom.call(addressil7wbvw, addressbNnRorG, uintewPOhK, {from: accounts[2]});
//		const boolSXmLhi = await RexonalCeeRrI.transferFrom.call(addressfcXkp8s, addressQiltFBf, uinteovkOEH, {from: accounts[2]});
//		const boolwz0XJjl = await RexonalCeeRrI.approve.call(addressDFQL7Ey, uintwzWhfcZ, {from: accounts[5]});

		assert.equal(boolT4uTQB8, true)
		await expect(RexonalCeeRrI.transfer.call(addressjcQDvc8, uintfT88pMg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringEE0mXjS = "GmWrs8lEeK1Y"
		const stringsLlNB7a = "RxhTp2DTa2mTWO9RKjRNMQPLLxzlTc0rvCe826HRO3zryO4GXDc2bKXRY8xROaQDLdiZjHKiofLuSwWJHIqAjYSERtTDg1"
		const uintO89clrj = BigInt("962")
		const RexonaqYC2WAw = await Rexona.new(stringEE0mXjS, stringsLlNB7a, uintO89clrj, {from: accounts[0]});
		const addressSphEPY = accounts[1]
		const uintEeiSsCK = BigInt("629")
		const addressYEpX7E = accounts[4]
		const uintMitx84b = BigInt("1883")
		const addresskkrcok = accounts[0]
		const uintnPc8cgC = BigInt("1540")
		const addressaz6pDt = accounts[1]
		const addressoslXt6H = accounts[4]
//		const boolLM4KcwP = await RexonaqYC2WAw.transferownership.call(addressSphEPY, {from: accounts[2]});
//		const boolNcpAZN0 = await RexonaqYC2WAw.approve.call(addressYEpX7E, uintEeiSsCK, {from: accounts[5]});
//		const boolGbqINxZ = await RexonaqYC2WAw.approve.call(addresskkrcok, uintMitx84b, {from: accounts[1]});
//		const boolj3LWIVm = await RexonaqYC2WAw.transferFrom.call(addressoslXt6H, addressaz6pDt, uintnPc8cgC, {from: accounts[2]});

		await expect(RexonaqYC2WAw.transferownership.call(addressSphEPY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringVcbbKwh = "n2zblG0wzMAcx9tGjnSlpMy1WTSUlEoobc0RhHELczTxvcmJUCwKqJggfXUkJrnMB23Pw2W91LSU61tFqNR"
		const stringxURJ4tm = "lSYKYacrubmR8XXN6cwKsgcOoHXiE5zf4bnEKWtBauYdE2fpOmjTpQDEIukxInSxCpZKm72q"
		const uinta1EVkVd = BigInt("129")
		const RexonayHCpxp1 = await Rexona.new(stringVcbbKwh, stringxURJ4tm, uinta1EVkVd, {from: accounts[5]});
		const addressKZG5Pi2 = accounts[5]
		const uintrFKR1NG = BigInt("1705")
		const addressyc5dtT3 = accounts[1]
		const uintJ9pEtwq = BigInt("36")
		const addressCIJvbt5 = accounts[1]
		const uintbGcHiWm = BigInt("902")
		const addressuTML5eN = accounts[0]
		const addresseyquLmB = accounts[0]
		const uintFniqprD = BigInt("1771")
		const addressdPGyWgB = accounts[5]
		const boolIIjLj9Y = await RexonayHCpxp1.transferownership.call(addressKZG5Pi2, {from: accounts[5]});
//		const boolFT7asir = await RexonayHCpxp1.approveAndCall.call(addressyc5dtT3, uintrFKR1NG, {from: accounts[2]});
//		const boolrcBYTki = await RexonayHCpxp1.approveAndCall.call(addressCIJvbt5, uintJ9pEtwq, {from: accounts[4]});
//		const boolonerhok = await RexonayHCpxp1.transferFrom.call(addresseyquLmB, addressuTML5eN, uintbGcHiWm, {from: accounts[0]});
//		const boolWNxlHxn = await RexonayHCpxp1.approveAndCall.call(addressdPGyWgB, uintFniqprD, {from: accounts[1]});

		assert.equal(boolIIjLj9Y, true)
		await expect(RexonayHCpxp1.approveAndCall.call(addressyc5dtT3, uintrFKR1NG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringvpn9SIM = "FFWQXxodxFOA7OriMpr1HwxX26yyLzyeFsEAFg9mODeIIjmqlCKNS1XRinYXuboS2qyYqvtaG1DRFkkc8YSTkHzA4RNzDp6mn"
		const stringkuqk5u = "pSvdtT6V696WANIfUlgkw2c8XdhYg6ErFdiiWVWga8q"
		const uintv1UyUc7 = BigInt("280")
		const RexonaEK2QfwR = await Rexona.new(stringvpn9SIM, stringkuqk5u, uintv1UyUc7, {from: accounts[3]});
		const uint0FXMDn = BigInt("1299")
		const addressl3zUndJ = accounts[3]
		const uintJxfmNI1 = BigInt("276")
		const addressEorK1Wj = accounts[1]
		const addressnbksl42 = accounts[5]
//		const boolTr4xbNZ = await RexonaEK2QfwR.transfer.call(addressl3zUndJ, uint0FXMDn, {from: accounts[1]});
//		const boolQEG5U4Z = await RexonaEK2QfwR.transferFrom.call(addressnbksl42, addressEorK1Wj, uintJxfmNI1, {from: accounts[4]});

		await expect(RexonaEK2QfwR.transfer.call(addressl3zUndJ, uint0FXMDn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringhB6QotT = "lbBIPOm7aKXOV65"
		const stringF61mZ6F = "dkUSDcQqoDQho35IzRQEOkxN5jJ4bnvvP5QUv4tnVWCR6AB"
		const uintFWLkl6X = BigInt("100")
		const RexonaWrbQWlb = await Rexona.new(stringhB6QotT, stringF61mZ6F, uintFWLkl6X, {from: "0x0000000000000000000000000000000000000001"});
		const uintmnUPGdA = BigInt("1848")
		const addresskrHG5QF = accounts[3]
		const addressRGCWLd = accounts[2]
		const uintHFmq4yw = BigInt("644")
		const addressKnnuktR = accounts[3]
		const uintmHssGgn = BigInt("1990")
		const addressHtcgT64 = accounts[4]
		const boolYAYgDsJ = await RexonaWrbQWlb.transferFrom.call(addressRGCWLd, addresskrHG5QF, uintmnUPGdA, {from: accounts[2]});
		const boolUCaylpL = await RexonaWrbQWlb.approveAndCall.call(addressKnnuktR, uintHFmq4yw, {from: accounts[0]});
		const boolnZ1JNGI = await RexonaWrbQWlb.transfer.call(addressHtcgT64, uintmHssGgn, {from: accounts[4]});
	});

	it('test for Rexona', async () => {
		const stringvpn9SIM = "FFWQXxodxFOA7OriMpr1HwxX26yyLzyeFsEAFg9mODeIIjmqlCKNS1XRinYXuboS2qyYqvtaG1DRFkkc8YSTkHzA4RNzDp6mn"
		const stringkuqk5u = "pSvdtT6V696WANIfUlgkw2c8XdhYg6ErFdiiWVWga8q"
		const uintw6iwUvi = BigInt("280")
		const RexonaEK2QfwR = await Rexona.new(stringvpn9SIM, stringkuqk5u, uintw6iwUvi, {from: accounts[3]});
		const uintlh6xO5 = BigInt("762")
		const addressyYrvoFO = accounts[0]
		const uintZBYNJTe = BigInt("1654")
		const addresshvM3Vci = accounts[3]
		const uinthIIizX2 = BigInt("1226")
		const address9QTHL5 = accounts[2]
		const addresspHxLn0v = accounts[1]
		const uintj74EiPy = BigInt("3")
		const addressxYnfgpq = accounts[3]
		const addressTPDsoVF = accounts[1]
		const uintyGcyq4Q = BigInt("276")
		const addresskuvcZrb = accounts[1]
		const addresslyPRJ0g = accounts[5]
		const booltMPgfl = await RexonaEK2QfwR.approveAndCall.call(addressyYrvoFO, uintlh6xO5, {from: accounts[3]});
		const boolnB2wkz = await RexonaEK2QfwR.approveAndCall.call(addresshvM3Vci, uintZBYNJTe, {from: accounts[3]});
//		const boolyAWbCD = await RexonaEK2QfwR.transferFrom.call(addresspHxLn0v, address9QTHL5, uinthIIizX2, {from: accounts[2]});
//		const boolu2EJrSU = await RexonaEK2QfwR.transferFrom.call(addressTPDsoVF, addressxYnfgpq, uintj74EiPy, {from: accounts[4]});
//		const boolQEG5U4Z = await RexonaEK2QfwR.transferFrom.call(addresslyPRJ0g, addresskuvcZrb, uintyGcyq4Q, {from: accounts[4]});

		assert.equal(boolnB2wkz, true)
		assert.equal(booltMPgfl, true)
		await expect(RexonaEK2QfwR.transferFrom.call(addresspHxLn0v, address9QTHL5, uinthIIizX2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringvpn9SIM = "FFWQXxodxFOA7OriMpr1HwxX26yyLzyeFsEAFg9mODeIIjmqlCKNS1XRinYXuboS2qyYqvtaG1DRFkkc8YSTkHzA4RNzDp6mn"
		const stringkuqk5u = "pSvdtT6V696WANIfUlgkw2c8XdhYg6ErFdiiWVWga8q"
		const uintVny5Pi = BigInt("280")
		const RexonaEK2QfwR = await Rexona.new(stringvpn9SIM, stringkuqk5u, uintVny5Pi, {from: accounts[3]});
		const uint5JvQqo = BigInt("1974")
		const addressGPxJCUT = accounts[3]
		const uintj8fAGkX = BigInt("0")
		const addressnZTyPBR = accounts[3]
		const addresssAWdBS = accounts[0]
		const uintxpVBsx = BigInt("276")
		const addressWidEKJd = accounts[1]
		const addresspahtCh = accounts[5]
		const boolUD4Ri1E = await RexonaEK2QfwR.approve.call(addressGPxJCUT, uint5JvQqo, {from: accounts[1]});
		const boolu2EJrSU = await RexonaEK2QfwR.transferFrom.call(addresssAWdBS, addressnZTyPBR, uintj8fAGkX, {from: accounts[4]});
//		const boolQEG5U4Z = await RexonaEK2QfwR.transferFrom.call(addresspahtCh, addressWidEKJd, uintxpVBsx, {from: accounts[4]});

		assert.equal(boolUD4Ri1E, true)
		assert.equal(boolu2EJrSU, true)
		await expect(RexonaEK2QfwR.transferFrom.call(addresspahtCh, addressWidEKJd, uintxpVBsx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringvpn9SIM = "FFWQXxodxFOA7OriMpr1HwxX26yyLzyeFsEAFg9mODeIIjmqlCKNS1XRinYXuboS2qyYqvtaG1DRFkkc8YSTkHzA4RNzDp6mn"
		const stringkuqk5u = "pSvdtT6V696WANIfUlgkw2c8XdhYg6ErFdiiWVWga8q"
		const uintDhuNbs = BigInt("280")
		const RexonaEK2QfwR = await Rexona.new(stringvpn9SIM, stringkuqk5u, uintDhuNbs, {from: accounts[3]});
		const uintNjAUDua = BigInt("0")
		const addressC5vPKyk = accounts[4]
		const uintRIohKl2 = BigInt("1616")
		const addressr32qVIe = accounts[4]
		const boolfVVFHUS = await RexonaEK2QfwR.approveAndCall.call(addressC5vPKyk, uintNjAUDua, {from: accounts[3]});
		const boolTnblfTZ = await RexonaEK2QfwR.approve.call(addressr32qVIe, uintRIohKl2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTnblfTZ, true)
		assert.equal(boolfVVFHUS, true)
	});
})