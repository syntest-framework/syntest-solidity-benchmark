const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringVcdN5tI = "AdIhPqoqCKfcVwCL39Puemi3hz7wBEjQyRgFjYVdBSAS63XphN0mIE6Y"
		const stringFuQOU5g = "hguC2qm14i1MjkmqP3rDsiS2WOLFM0NGwGZCQ1RRZ3s6TVFDKNtSi7qAWHApxJVC4v"
		const uintNsBWYn5 = BigInt("1487")
		const Rexonap7rMj3j = await Rexona.new(stringVcdN5tI, stringFuQOU5g, uintNsBWYn5, {from: accounts[4]});
		const uintRmVT34Z = BigInt("303")
		const addressBF0ZHi = accounts[3]
		const uintd2H4Ib = BigInt("1090")
		const addressgmNMfdW = accounts[2]
		const uintZjEzujw = BigInt("1510")
		const addressWFkKrf7 = accounts[2]
		const uinth6YwJA2 = BigInt("1844")
		const addressJaGMEi2 = accounts[4]
//		const boolNAvYuZC = await Rexonap7rMj3j.transfer.call(addressBF0ZHi, uintRmVT34Z, {from: accounts[2]});
//		const bool0gt9l0 = await Rexonap7rMj3j.approveAndCall.call(addressgmNMfdW, uintd2H4Ib, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNys3LQ5 = await Rexonap7rMj3j.transfer.call(addressWFkKrf7, uintZjEzujw, {from: accounts[2]});
//		const boolP3vaV1z = await Rexonap7rMj3j.approve.call(addressJaGMEi2, uinth6YwJA2, {from: accounts[2]});

		await expect(Rexonap7rMj3j.transfer.call(addressBF0ZHi, uintRmVT34Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringkBlB85I = "jsgrZXtT53qcmju6JmOCJAbU7qZmRzN8"
		const stringLMkEpXv = "Yh6rDrI9fbbrk7cD8WlQv3hX3ctiSMNuuRMDMRYVi6dINGvhSRP8u8xtTp3sa1Q3DR5BqDnD9S"
		const uintOe6JL35 = BigInt("572")
		const RexonaXoU7mGS = await Rexona.new(stringkBlB85I, stringLMkEpXv, uintOe6JL35, {from: accounts[3]});
		const uintHyKdZMP = BigInt("1732")
		const addressGFGPpLn = accounts[1]
		const addressggLjiMA = accounts[2]
		const uintGZ2c1EY = BigInt("328")
		const addressryZbsQt = accounts[3]
		const uintPakWZO7 = BigInt("1304")
		const addressOC7JVdQ = accounts[4]
//		const boolBEhiIi6 = await RexonaXoU7mGS.transferFrom.call(addressggLjiMA, addressGFGPpLn, uintHyKdZMP, {from: accounts[0]});
//		const boolhWPVWr = await RexonaXoU7mGS.approve.call(addressryZbsQt, uintGZ2c1EY, {from: accounts[0]});
//		const boolPMi07hz = await RexonaXoU7mGS.approveAndCall.call(addressOC7JVdQ, uintPakWZO7, {from: accounts[1]});

		await expect(RexonaXoU7mGS.transferFrom.call(addressggLjiMA, addressGFGPpLn, uintHyKdZMP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringjIYVXr3 = "lqMCQxGMaAfGI3M3htoeDUwGkCC"
		const stringH41wza0 = "t2vh4VphHDVPnOxdcAVsAdiBJfVwar3nfoIufHHN9fvRp7ie2DB2sqlLbeQD"
		const uintb7i2OxN = BigInt("1506")
		const RexonanL8hlP6 = await Rexona.new(stringjIYVXr3, stringH41wza0, uintb7i2OxN, {from: accounts[3]});
		const uintznwrgIg = BigInt("548")
		const addressWjTSY4s = accounts[3]
		const uintzhV5Z2u = BigInt("747")
		const addressOzjLmzX = accounts[2]
		const addressq3RxdOl = accounts[3]
		const uintr2rATM5 = BigInt("949")
		const addressgQRctcp = accounts[4]
		const boolMhtzeS = await RexonanL8hlP6.approve.call(addressWjTSY4s, uintznwrgIg, {from: accounts[2]});
		const boolTAQUyKh = await RexonanL8hlP6.transferFrom.call(addressq3RxdOl, addressOzjLmzX, uintzhV5Z2u, {from: accounts[3]});
		const boolqfhE7ES = await RexonanL8hlP6.approve.call(addressgQRctcp, uintr2rATM5, {from: accounts[4]});

		assert.equal(boolMhtzeS, true)
		assert.equal(boolTAQUyKh, true)
		assert.equal(boolqfhE7ES, true)
	});

	it('test for Rexona', async () => {
		const stringTFpSEp7 = "UjF5arOTwdxmzYRlq"
		const stringtARcUx2 = "8GdhLT8AYe3JATPPccxXXKiNcwRhdD7GFiDQfwtPUqK0nslVUI2RV3c33noHyVVzx2eCBSXwCgTNGF"
		const uintNulsj6 = BigInt("172")
		const RexonaxLuBPV = await Rexona.new(stringTFpSEp7, stringtARcUx2, uintNulsj6, {from: "0x0000000000000000000000000000000000000001"});
		const uintazxmpxb = BigInt("1766")
		const addressEhuWVJG = accounts[5]
		const uintk2iLev = BigInt("1193")
		const addressLSs9KI9 = accounts[3]
		const addressI4ciGr = "0x0000000000000000000000000000000000000001"
		const boolhbTDScZ = await RexonaxLuBPV.approveAndCall.call(addressEhuWVJG, uintazxmpxb, {from: accounts[2]});
		const boolihvqjhJ = await RexonaxLuBPV.approve.call(addressLSs9KI9, uintk2iLev, {from: accounts[4]});
		const boolqeN69xE = await RexonaxLuBPV.transferownership.call(addressI4ciGr, {from: accounts[2]});
	});

	it('test for Rexona', async () => {
		const stringgn9fzH = "sU2iuMLPor0RWLzffJ1e3j2tHmo9F6injGzT64JBAMaXaoktmqJfqbu5KEB1dgz1sguT6nI9"
		const stringmIb060b = "BhTy46rwKmtqiau0zpvh2mTsTu9umvALo8kxBT7l66FpWbdYYSSpJPpOKT7WwR"
		const uintPKEAcMm = BigInt("1289")
		const RexonacMYEDSN = await Rexona.new(stringgn9fzH, stringmIb060b, uintPKEAcMm, {from: accounts[2]});
		const uintlQ7ijG = BigInt("1831")
		const addressU3iAQBr = accounts[3]
		const uintXwFHjO5 = BigInt("1119")
		const addressmMwCwzv = accounts[3]
		const addressMYlT6j = accounts[3]
//		const boolc7AjMU = await RexonacMYEDSN.approveAndCall.call(addressU3iAQBr, uintlQ7ijG, {from: accounts[1]});
//		const boolqhz9X9q = await RexonacMYEDSN.approve.call(addressmMwCwzv, uintXwFHjO5, {from: accounts[5]});
//		const boolHzSqb6B = await RexonacMYEDSN.transferownership.call(addressMYlT6j, {from: accounts[1]});

		await expect(RexonacMYEDSN.approveAndCall.call(addressU3iAQBr, uintlQ7ijG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringgn9fzH = "sU2iuMLPor0RWLzffJ1e3j2tHmo9F6injGzT64JBAMaXaoktmqJfqbu5KEB1dgz1sguT6nI9"
		const stringmIb060b = "BhTy46rwKmtqiau0zpvh2mTsTu9umvALo8kxBT7l66FpWbdYYSSpJPpOKT7WwR"
		const uintfuZ602E = BigInt("1289")
		const RexonacMYEDSN = await Rexona.new(stringgn9fzH, stringmIb060b, uintfuZ602E, {from: accounts[2]});
		const uintwSJtxM4 = BigInt("1119")
		const addressQvN0iwh = accounts[3]
		const addressrsKQgkS = accounts[3]
		const boolqhz9X9q = await RexonacMYEDSN.approve.call(addressQvN0iwh, uintwSJtxM4, {from: accounts[5]});
//		const boolHzSqb6B = await RexonacMYEDSN.transferownership.call(addressrsKQgkS, {from: accounts[1]});

		assert.equal(boolqhz9X9q, true)
		await expect(RexonacMYEDSN.transferownership.call(addressrsKQgkS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringOhbx6VL = "wZ8qEoRlpoJRn"
		const stringdOXLqcs = "PuB"
		const uintz1Exmor = BigInt("877")
		const RexonaybD5EBS = await Rexona.new(stringOhbx6VL, stringdOXLqcs, uintz1Exmor, {from: accounts[2]});
		const uintk9rY73K = BigInt("1138")
		const addresskf4AQMj = accounts[2]
		const uintzU0q7E3 = BigInt("241")
		const addressO4CM7ti = accounts[4]
		const uintrfv8TU = BigInt("1435")
		const addressxV7F401 = accounts[4]
		const addresskoI94u2 = accounts[3]
		const uint8UoRVM = BigInt("954")
		const addressWEHU1yJ = "0x0000000000000000000000000000000000000001"
		const boolihxJo32 = await RexonaybD5EBS.approveAndCall.call(addresskf4AQMj, uintk9rY73K, {from: accounts[2]});
//		const boolnsLr3nw = await RexonaybD5EBS.approveAndCall.call(addressO4CM7ti, uintzU0q7E3, {from: accounts[1]});
//		const booldJ3YjLX = await RexonaybD5EBS.transferFrom.call(addresskoI94u2, addressxV7F401, uintrfv8TU, {from: accounts[1]});
//		const booljnMCiSQ = await RexonaybD5EBS.approve.call(addressWEHU1yJ, uint8UoRVM, {from: accounts[4]});

		assert.equal(boolihxJo32, true)
		await expect(RexonaybD5EBS.approveAndCall.call(addressO4CM7ti, uintzU0q7E3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringgn9fzH = "sU2iuMLPor0RWLzffJ1e3j2tHmo9F6injGzT64JBAMaXaoktmqJfqbu5KEB1dgz1sguT6nI9"
		const stringmIb060b = "BhTy46rwKmtqiau0zpvh2mTsTu9umvALo8kxBT7l66FpWbdYYSSpJPpOKT7WwR"
		const uinthJQWdio = BigInt("1289")
		const RexonacMYEDSN = await Rexona.new(stringgn9fzH, stringmIb060b, uinthJQWdio, {from: accounts[2]});
		const addresshwNZXer = "0x0000000000000000000000000000000000000001"
		const addressTTL9EBm = accounts[3]
		const uintXb78R5 = BigInt("7")
		const addressrGFnuoS = "0x0000000000000000000000000000000000000001"
		const boolkkcY3N = await RexonacMYEDSN.transferownership.call(addresshwNZXer, {from: accounts[2]});
//		const boolHzSqb6B = await RexonacMYEDSN.transferownership.call(addressTTL9EBm, {from: accounts[1]});
//		const boolTGFDfrU = await RexonacMYEDSN.transfer.call(addressrGFnuoS, uintXb78R5, {from: accounts[2]});

		assert.equal(boolkkcY3N, true)
		await expect(RexonacMYEDSN.transferownership.call(addressTTL9EBm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringbLtqsaP = "jFapQ2G1lzCDyI6c2vNvaXAuSOOg13wAxh"
		const stringzoKwZS = "vt2N8sDcmPt1j1XQaguVG6hCiugrrfMnPDFPsOCrgPfqYLJzzJyVofhA5ja7l6DCdwD8JBX"
		const uintnnAbvyT = BigInt("27")
		const RexonawvXSCOg = await Rexona.new(stringbLtqsaP, stringzoKwZS, uintnnAbvyT, {from: accounts[0]});
		const uintD0lL2Ob = BigInt("0")
		const addressKUKRhY = accounts[4]
		const addressARYiYYB = "0x0000000000000000000000000000000000000001"
		const uintwbiT95Q = BigInt("236")
		const addressA0VPer2 = accounts[3]
		const uintawceOwE = BigInt("387")
		const addressnE5nWI = accounts[1]
		const addressueCqzNK = accounts[4]
		const boolPcTnj7p = await RexonawvXSCOg.approveAndCall.call(addressKUKRhY, uintD0lL2Ob, {from: accounts[0]});
//		const boolUz0ko5h = await RexonawvXSCOg.transferownership.call(addressARYiYYB, {from: "0x0000000000000000000000000000000000000001"});
//		const booliHlVAqt = await RexonawvXSCOg.approve.call(addressA0VPer2, uintwbiT95Q, {from: accounts[3]});
//		const boolCbtVLwy = await RexonawvXSCOg.transferFrom.call(addressueCqzNK, addressnE5nWI, uintawceOwE, {from: accounts[3]});

		assert.equal(boolPcTnj7p, true)
		await expect(RexonawvXSCOg.transferownership.call(addressARYiYYB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringVcdN5tI = "AdIhPqoqCKfcVwCL39Puemi3hz7wBEjQyRgFjYVdBSAS63XphN0mIE6Y"
		const stringFuQOU5g = "hguC2qm14i1MjkmqP3rDsiS2WOLFM0NGwGZCQ1RRZ3s6TVFDKNtSi7qAWHApxJVC4v"
		const uintZhHeF8w = BigInt("1487")
		const Rexonap7rMj3j = await Rexona.new(stringVcdN5tI, stringFuQOU5g, uintZhHeF8w, {from: accounts[4]});
		const uintkJYFEj = BigInt("0")
		const address0EtMio = accounts[3]
		const uintgl0vPc = BigInt("1287")
		const addressLfRHOYP = accounts[1]
		const addressW2k6kUV = accounts[0]
		const addressurl30Mk = accounts[3]
		const addressKsSCgrM = accounts[0]
		const uintPxQRBGq = BigInt("690")
		const addressdIYwXvw = accounts[2]
		const uintGVZ9qa = BigInt("261")
		const addressmxVJyzB = accounts[0]
		const boolNAvYuZC = await Rexonap7rMj3j.transfer.call(address0EtMio, uintkJYFEj, {from: accounts[2]});
//		const boolFzcGU1Z = await Rexonap7rMj3j.transferFrom.call(addressW2k6kUV, addressLfRHOYP, uintgl0vPc, {from: accounts[3]});
//		const boolgOZYEpy = await Rexonap7rMj3j.transferownership.call(addressurl30Mk, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbk3uW18 = await Rexonap7rMj3j.transferownership.call(addressKsSCgrM, {from: accounts[1]});
//		const booltHhqqlY = await Rexonap7rMj3j.transfer.call(addressdIYwXvw, uintPxQRBGq, {from: accounts[2]});
//		const booldNDIFoU = await Rexonap7rMj3j.approve.call(addressmxVJyzB, uintGVZ9qa, {from: accounts[2]});

		assert.equal(boolNAvYuZC, true)
		await expect(Rexonap7rMj3j.transferFrom.call(addressW2k6kUV, addressLfRHOYP, uintgl0vPc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})