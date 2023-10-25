const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringfppMBGP = "RjOlY25bkusuMkZAG4bePRP"
		const stringpYuHzPs = "DeqQat12Pb8Fze3faSC7oBbtJEIcsXYxf2KJAfX4NbqSyvUaSb7wM8HTnWGrv0CljIRgb4NZXnEgb"
		const uintMr9SCmF = BigInt("1956")
		const WOLFv7usrEd = await WOLF.new(stringfppMBGP, stringpYuHzPs, uintMr9SCmF, {from: accounts[4]});
		const addressGal6jTP = accounts[2]
		const uintYeRkdoe = BigInt("1463")
		const addresst8NDlGO = accounts[0]
		const uintjYjmvaN = BigInt("1582")
		const addresspqmhHkZ = "0x0000000000000000000000000000000000000001"
		const addressdoDcAkC = accounts[2]
		const uintML0VB5n = BigInt("270")
		const addressEFeBXqZ = accounts[4]
		const addressXZftXp7 = accounts[2]
//		const boolOAcHdiY = await WOLFv7usrEd.transferownership.call(addressGal6jTP, {from: accounts[2]});
//		const boolxYP9PkX = await WOLFv7usrEd.approve.call(addresst8NDlGO, uintYeRkdoe, {from: accounts[4]});
//		const boolLOkBd5N = await WOLFv7usrEd.transferFrom.call(addressdoDcAkC, addresspqmhHkZ, uintjYjmvaN, {from: accounts[1]});
//		const boolFuhnpxI = await WOLFv7usrEd.transferFrom.call(addressXZftXp7, addressEFeBXqZ, uintML0VB5n, {from: accounts[3]});

		await expect(WOLFv7usrEd.transferownership.call(addressGal6jTP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringInp8OD7 = "yBLFbCSuSg"
		const stringQa68Imm = "Ae3Pogyc9jDF29QDehvnJ1xRPN"
		const uintFmMwV7A = BigInt("169")
		const WOLFYuuAZa3 = await WOLF.new(stringInp8OD7, stringQa68Imm, uintFmMwV7A, {from: accounts[0]});
		const uintbt4qb43 = BigInt("1314")
		const addressqyxhApn = accounts[2]
		const uinte9ieZ8k = BigInt("1659")
		const addressGRYEWPI = accounts[2]
//		const boolibMcWxM = await WOLFYuuAZa3.transfer.call(addressqyxhApn, uintbt4qb43, {from: accounts[2]});
//		const boollRz9eEC = await WOLFYuuAZa3.approve.call(addressGRYEWPI, uinte9ieZ8k, {from: accounts[4]});

		await expect(WOLFYuuAZa3.transfer.call(addressqyxhApn, uintbt4qb43, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringwku4TAS = "RQg3DzrFkILFjFtJWsvlsKw3velWBlEUCmBhdE7d7nRmZ8oVm"
		const stringTq9Vbjx = "1otj"
		const uintY1vCh0c = BigInt("185")
		const WOLFfuwLVUU = await WOLF.new(stringwku4TAS, stringTq9Vbjx, uintY1vCh0c, {from: accounts[4]});
		const uintxEQE4FW = BigInt("1138")
		const addressbusnmS4 = accounts[2]
		const uintttx4kEv = BigInt("1802")
		const addresseHNCeUk = accounts[2]
		const addressv8rrzTI = accounts[5]
		const uintgOSxfKz = BigInt("1544")
		const addressWdxJkJs = accounts[2]
		const uintwrc2Ks = BigInt("320")
		const addressSbcavBl = accounts[1]
		const uintL6XqDiX = BigInt("1825")
		const addressrDNJhtJ = accounts[2]
		const boolcm7Ee9Q = await WOLFfuwLVUU.approve.call(addressbusnmS4, uintxEQE4FW, {from: accounts[0]});
//		const boolcSNkYRl = await WOLFfuwLVUU.transferFrom.call(addressv8rrzTI, addresseHNCeUk, uintttx4kEv, {from: accounts[4]});
//		const boolBizhqcM = await WOLFfuwLVUU.approve.call(addressWdxJkJs, uintgOSxfKz, {from: accounts[0]});
//		const boolquRKqZ1 = await WOLFfuwLVUU.approveAndCall.call(addressSbcavBl, uintwrc2Ks, {from: accounts[4]});
//		const boolgNuqsQt = await WOLFfuwLVUU.approveAndCall.call(addressrDNJhtJ, uintL6XqDiX, {from: accounts[2]});

		assert.equal(boolcm7Ee9Q, true)
		await expect(WOLFfuwLVUU.transferFrom.call(addressv8rrzTI, addresseHNCeUk, uintttx4kEv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const string05tc4q = "hc6Cqscj"
		const stringZBKlUV = "GApOmz3sZs4bNge1HuqgOKyf87"
		const uintJK4Uqqg = BigInt("1304")
		const WOLFDtTdb0B = await WOLF.new(string05tc4q, stringZBKlUV, uintJK4Uqqg, {from: accounts[2]});
		const uintkVEWPg = BigInt("1203")
		const addressM2yXzEZ = accounts[1]
		const uintQ3M1wP7 = BigInt("495")
		const addressA4avN1K = accounts[3]
		const addressjmeIumN = accounts[1]
		const uintbx9hKja = BigInt("924")
		const addressbLfv4CZ = accounts[0]
		const addressR7gF7xj = accounts[0]
//		const boolzlxU6IN = await WOLFDtTdb0B.approveAndCall.call(addressM2yXzEZ, uintkVEWPg, {from: accounts[3]});
//		const boolWg1RQvE = await WOLFDtTdb0B.transferFrom.call(addressjmeIumN, addressA4avN1K, uintQ3M1wP7, {from: accounts[5]});
//		const boolcnMGxCo = await WOLFDtTdb0B.approveAndCall.call(addressbLfv4CZ, uintbx9hKja, {from: accounts[3]});
//		const booloYTWcre = await WOLFDtTdb0B.transferownership.call(addressR7gF7xj, {from: accounts[4]});

		await expect(WOLFDtTdb0B.approveAndCall.call(addressM2yXzEZ, uintkVEWPg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringq01C6Zu = "qvFPGMHm8kQlUkHo9TaafpIb3GPQitqBxdZCWEfb"
		const stringSwibfvg = "CU2QbwpaVcyCQy8m3N59yrI3NhWTbV"
		const uintdBZE7Zv = BigInt("100")
		const WOLFL5opGsP = await WOLF.new(stringq01C6Zu, stringSwibfvg, uintdBZE7Zv, {from: "0x0000000000000000000000000000000000000001"});
		const uintol6LJZf = BigInt("1884")
		const addressyu4H2kP = "0x0000000000000000000000000000000000000001"
		const addressUe9jqHT = accounts[2]
		const uintnBCQ9Q2 = BigInt("357")
		const addresshTX3252 = accounts[3]
		const uintBNKMPSH = BigInt("1211")
		const addressTotlet0 = accounts[0]
		const uintteCuPq3 = BigInt("963")
		const addressDnZ3O5g = accounts[0]
		const uintlY9mhOI = BigInt("1773")
		const addressYCVhNwr = accounts[4]
		const boolSnKsm0q = await WOLFL5opGsP.transferFrom.call(addressUe9jqHT, addressyu4H2kP, uintol6LJZf, {from: accounts[1]});
		const boollFWc1k = await WOLFL5opGsP.approve.call(addresshTX3252, uintnBCQ9Q2, {from: "0x0000000000000000000000000000000000000001"});
		const boolVX96uyl = await WOLFL5opGsP.approveAndCall.call(addressTotlet0, uintBNKMPSH, {from: accounts[3]});
		const boolYWefzgn = await WOLFL5opGsP.transfer.call(addressDnZ3O5g, uintteCuPq3, {from: accounts[1]});
		const boolIr5VSNW = await WOLFL5opGsP.approveAndCall.call(addressYCVhNwr, uintlY9mhOI, {from: accounts[0]});
	});

	it('test for WOLF', async () => {
		const stringixKwaSE = "PwG8hpJbzgDUkNhiHrHndwVEEQaRzt2qmFdGf6cxim47GMh3oro4F7mYb5RxRyjApKFfRiz2NnisPlgCPWu30jYWOJNP"
		const stringK0eNfBD = "DQJL0Fcjskt7JTj8pq2Es1S7MuWBPioUHxAKX"
		const uintTaH4lI0 = BigInt("582")
		const WOLFTdCXtVi = await WOLF.new(stringixKwaSE, stringK0eNfBD, uintTaH4lI0, {from: accounts[2]});
		const addressN2OQZJO = accounts[3]
		const uintRpjZiry = BigInt("1075")
		const addressw3E7z0d = accounts[3]
		const uintDZv82SO = BigInt("86")
		const address9Cv7ci = accounts[4]
		const uint1KJneI = BigInt("1279")
		const addressjYDp19h = accounts[2]
		const addressWy2HjpX = accounts[3]
		const boolc05hBmq = await WOLFTdCXtVi.transferownership.call(addressN2OQZJO, {from: accounts[2]});
		const boolUZg2NXl = await WOLFTdCXtVi.approve.call(addressw3E7z0d, uintRpjZiry, {from: accounts[1]});
		const boolonXdDqT = await WOLFTdCXtVi.approve.call(address9Cv7ci, uintDZv82SO, {from: accounts[1]});
//		const boolhc7AQbq = await WOLFTdCXtVi.transferFrom.call(addressWy2HjpX, addressjYDp19h, uint1KJneI, {from: accounts[3]});

		assert.equal(boolUZg2NXl, true)
		assert.equal(boolc05hBmq, true)
		assert.equal(boolonXdDqT, true)
		await expect(WOLFTdCXtVi.transferFrom.call(addressWy2HjpX, addressjYDp19h, uint1KJneI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringixKwaSE = "PwG8hpJbzgDUkNhiHrHndwVEEQaRzt2qmFdGf6cxim47GMh3oro4F7mYb5RxRyjApKFfRiz2NnisPlgCPWu30jYWOJNP"
		const stringK0eNfBD = "DQJL0Fcjskt7JTj8pq2Es1S7MuWBPioUHxAKX"
		const uintzbuRX5U = BigInt("582")
		const WOLFTdCXtVi = await WOLF.new(stringixKwaSE, stringK0eNfBD, uintzbuRX5U, {from: accounts[2]});
		const uintbq3S6Q = BigInt("1075")
		const addressm5a2yLM = accounts[1]
		const uintno1PZTX = BigInt("51")
		const addressE9VdVVj = accounts[1]
		const addressVsNqjbj = accounts[3]
		const boolIlvdsKX = await WOLFTdCXtVi.approveAndCall.call(addressm5a2yLM, uintbq3S6Q, {from: accounts[2]});
//		const boolsGifzFS = await WOLFTdCXtVi.transferFrom.call(addressVsNqjbj, addressE9VdVVj, uintno1PZTX, {from: accounts[0]});

		assert.equal(boolIlvdsKX, true)
		await expect(WOLFTdCXtVi.transferFrom.call(addressVsNqjbj, addressE9VdVVj, uintno1PZTX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringixKwaSE = "PwG8hpJbzgDUkNhiHrHndwVEEQaRzt2qmFdGf6cxim47GMh3oro4F7mYb5RxRyjApKFfRiz2NnisPlgCPWu30jYWOJNP"
		const stringK0eNfBD = "DQJL0Fcjskt7JTj8pq2Es1S7MuWBPioUHxAKX"
		const uintz3X3qOg = BigInt("582")
		const WOLFTdCXtVi = await WOLF.new(stringixKwaSE, stringK0eNfBD, uintz3X3qOg, {from: accounts[2]});
		const uintZR0eqAB = BigInt("0")
		const addressLJCpWqh = accounts[2]
		const boolKd9EtKH = await WOLFTdCXtVi.transfer.call(addressLJCpWqh, uintZR0eqAB, {from: accounts[4]});

		assert.equal(boolKd9EtKH, true)
	});

	it('test for WOLF', async () => {
		const stringixKwaSE = "PwG8hpJbzgDUkNhiHrHndwVEEQaRzt2qmFdGf6cxim47GMh3oro4F7mYb5RxRyjApKFfRiz2NnisPlgCPWu30jYWOJNP"
		const stringK0eNfBD = "DQJL0Fcjskt7JTj8pq2Es1S7MuWBPioUHxAKX"
		const uintzRCmWos = BigInt("582")
		const WOLFTdCXtVi = await WOLF.new(stringixKwaSE, stringK0eNfBD, uintzRCmWos, {from: accounts[2]});
		const uintTQE3rN = BigInt("1069")
		const addressJNSvOts = accounts[2]
		const uintX6vPi3r = BigInt("2023")
		const addresstyP6Yb8 = accounts[4]
		const uintvwOCKaV = BigInt("0")
		const addressZBOwt4x = accounts[2]
		const uinto57sDiN = BigInt("118")
		const addressq0jlRTC = accounts[4]
		const uintE989yqh = BigInt("819")
		const addressOkNftA4 = accounts[0]
		const uintf5JCSeY = BigInt("352")
		const addressFAbUKEP = accounts[4]
		const addressubqRJ6 = "0x0000000000000000000000000000000000000001"
		const boolIlvdsKX = await WOLFTdCXtVi.approveAndCall.call(addressJNSvOts, uintTQE3rN, {from: accounts[2]});
		const boolfZyNVWU = await WOLFTdCXtVi.approve.call(addresstyP6Yb8, uintX6vPi3r, {from: accounts[1]});
		const boolWBNEhzk = await WOLFTdCXtVi.approveAndCall.call(addressZBOwt4x, uintvwOCKaV, {from: accounts[2]});
//		const bool4kWcpW = await WOLFTdCXtVi.transfer.call(addressq0jlRTC, uinto57sDiN, {from: accounts[4]});
//		const boollKqk93J = await WOLFTdCXtVi.transfer.call(addressOkNftA4, uintE989yqh, {from: accounts[4]});
//		const boolPW2tN0O = await WOLFTdCXtVi.approve.call(addressFAbUKEP, uintf5JCSeY, {from: accounts[2]});
//		const boolbSSf4n3 = await WOLFTdCXtVi.transferownership.call(addressubqRJ6, {from: accounts[1]});

		assert.equal(boolIlvdsKX, true)
		assert.equal(boolWBNEhzk, true)
		assert.equal(boolfZyNVWU, true)
		await expect(WOLFTdCXtVi.transfer.call(addressq0jlRTC, uinto57sDiN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})