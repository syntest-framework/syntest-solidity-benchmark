const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringNUVcLVp = "e3yORxjpEMlSL7FISNWkChNvzv58S9"
		const stringKWLvuYG = "q2wU5Y7vNphBuNREIEoL5nQNQxhAkzH4DMwTowIrMSfzolL"
		const uintmp9Bkr = BigInt("198")
		const DipexTUio1lc = await Dipex.new(stringNUVcLVp, stringKWLvuYG, uintmp9Bkr, {from: accounts[3]});
		const uintY3TA1in = BigInt("1372")
		const addressgsv9Z2D = accounts[5]
		const uint1zDK7k = BigInt("887")
		const addresss6iBZAW = accounts[2]
		const uinthGVczYi = BigInt("467")
		const addressPO5tOlv = accounts[2]
		const uintwE0D4My = BigInt("1612")
		const addressgUHXqN = accounts[0]
		const addressdTpChf3 = accounts[3]
//		const boolPOcdt1B = await DipexTUio1lc.transfer.call(addressgsv9Z2D, uintY3TA1in, {from: accounts[1]});
//		const boolPFrW06 = await DipexTUio1lc.approveAndCall.call(addresss6iBZAW, uint1zDK7k, {from: accounts[2]});
//		const booloIAdtM1 = await DipexTUio1lc.approveAndCall.call(addressPO5tOlv, uinthGVczYi, {from: accounts[4]});
//		const boolvk109Ci = await DipexTUio1lc.transferFrom.call(addressdTpChf3, addressgUHXqN, uintwE0D4My, {from: accounts[2]});

		await expect(DipexTUio1lc.transfer.call(addressgsv9Z2D, uintY3TA1in, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringnV1dScy = "tK5aE0Udxklq5152APBSEKGikT66uakzo2YmBhLg8XogTTiyLsq8MCdV0QUUEGstya8iCqI2V6"
		const stringQpARzx = "GKhBauEIBOrarCuYXqQmayf5TNKb5ZQpVO69X8EGdamL5PLWDtVF8wmJVLvaG"
		const uintr6QLKt3 = BigInt("111")
		const DipexTNWOuy7 = await Dipex.new(stringnV1dScy, stringQpARzx, uintr6QLKt3, {from: accounts[0]});
		const uintxeMQP13 = BigInt("1082")
		const addressqanpKyU = accounts[2]
		const uintQbWeY5w = BigInt("524")
		const addressSQdlMHn = accounts[1]
		const uintr7RMcPw = BigInt("574")
		const addressS1hIHVQ = accounts[2]
		const addressFj3p43L = accounts[3]
		const uintxJn7vnj = BigInt("1152")
		const addressvs2kkW = accounts[4]
		const uintsDLO3VQ = BigInt("1782")
		const addressJnYeHBh = accounts[3]
		const addresslvFXTd9 = accounts[4]
//		const boolcv9wPsJ = await DipexTNWOuy7.approveAndCall.call(addressqanpKyU, uintxeMQP13, {from: accounts[2]});
//		const bool4KZe1B = await DipexTNWOuy7.approve.call(addressSQdlMHn, uintQbWeY5w, {from: accounts[3]});
//		const boolCjK2YyQ = await DipexTNWOuy7.transferFrom.call(addressFj3p43L, addressS1hIHVQ, uintr7RMcPw, {from: accounts[2]});
//		const boolY20gKi = await DipexTNWOuy7.approve.call(addressvs2kkW, uintxJn7vnj, {from: accounts[0]});
//		const boolG9gkMds = await DipexTNWOuy7.transferFrom.call(addresslvFXTd9, addressJnYeHBh, uintsDLO3VQ, {from: accounts[4]});

		await expect(DipexTNWOuy7.approveAndCall.call(addressqanpKyU, uintxeMQP13, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringsOBD7iX = "MRGOKapLpT5r3SXiq4I4dvGc4whlgPWKJKgCjKnFjdoY"
		const stringjVb1ES5 = "3ZsPu7hguf7zDpeNUaQw7eqWBgYagKdVaEcOhsxGAoSHiNrCdzbsMa3YBk8nph1ySD4o1BULtJ9nE9v97tPOlxOBkJK3ZV"
		const uinttCGKQ1 = BigInt("1456")
		const DipexMEg5UHN = await Dipex.new(stringsOBD7iX, stringjVb1ES5, uinttCGKQ1, {from: "0x0000000000000000000000000000000000000001"});
		const uintsLoyOAJ = BigInt("1242")
		const addressj2iTSl1 = accounts[5]
		const addresshJVPU5 = accounts[0]
		const uintpJZ6bqf = BigInt("80")
		const addresscOCkly1 = accounts[3]
		const addresscT47Eb = accounts[2]
		const uintiBhuANr = BigInt("188")
		const addresss2Rxr5U = accounts[1]
		const uintxe1DL6 = BigInt("491")
		const addressLAlCwPp = accounts[4]
		const uintjPmzqE4 = BigInt("1585")
		const addressH6lX9sl = accounts[1]
		const boolcl1epA = await DipexMEg5UHN.transferFrom.call(addresshJVPU5, addressj2iTSl1, uintsLoyOAJ, {from: accounts[2]});
		const boolmx7vgBR = await DipexMEg5UHN.transferFrom.call(addresscT47Eb, addresscOCkly1, uintpJZ6bqf, {from: accounts[3]});
		const boolvtpLiba = await DipexMEg5UHN.approveAndCall.call(addresss2Rxr5U, uintiBhuANr, {from: accounts[2]});
		const boolZ93Gq4o = await DipexMEg5UHN.approve.call(addressLAlCwPp, uintxe1DL6, {from: "0x0000000000000000000000000000000000000001"});
		const boolaQcrxq = await DipexMEg5UHN.approveAndCall.call(addressH6lX9sl, uintjPmzqE4, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Dipex', async () => {
		const stringyfpeNQc = "cmMsuphtymnoqrZtv9XPzsUIVP7GFuFCFQtvjcBt8Z465bvvO522M3M6TQSTX1TRTH5NY8pBXSCbO7YY6xB4OcLOGia9"
		const stringSZOBnAg = "r2GwwRABcRCcoBw4PRN4Ii"
		const uintvFXnanO = BigInt("1604")
		const DipexYtqiSGw = await Dipex.new(stringyfpeNQc, stringSZOBnAg, uintvFXnanO, {from: accounts[1]});
		const addressEHAy9Ly = accounts[0]
		const uintrenhtmf = BigInt("1966")
		const addressVHpGAmG = accounts[1]
		const uinthiEu8gG = BigInt("809")
		const addressRyDYn7n = accounts[3]
		const uinte086kB = BigInt("1342")
		const addresssmcoux = "0x0000000000000000000000000000000000000001"
		const addressTCPF2cU = accounts[0]
		const uintMkvASRx = BigInt("209")
		const addressCeVyy9X = accounts[1]
		const uintGcL4ou = BigInt("757")
		const addresstTBcxWK = "0x0000000000000000000000000000000000000001"
		const addressawBQ4N = "0x0000000000000000000000000000000000000001"
//		const boolxV4IsB7 = await DipexYtqiSGw.transferownership.call(addressEHAy9Ly, {from: accounts[3]});
//		const boolUMtc41O = await DipexYtqiSGw.approve.call(addressVHpGAmG, uintrenhtmf, {from: accounts[3]});
//		const boolRpgiNya = await DipexYtqiSGw.transfer.call(addressRyDYn7n, uinthiEu8gG, {from: accounts[1]});
//		const boolzoZrGD4 = await DipexYtqiSGw.transferFrom.call(addressTCPF2cU, addresssmcoux, uinte086kB, {from: accounts[3]});
//		const boolyNm93uu = await DipexYtqiSGw.approveAndCall.call(addressCeVyy9X, uintMkvASRx, {from: accounts[4]});
//		const boolQVbJ8am = await DipexYtqiSGw.transferFrom.call(addressawBQ4N, addresstTBcxWK, uintGcL4ou, {from: accounts[5]});

		await expect(DipexYtqiSGw.transferownership.call(addressEHAy9Ly, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringSbBIl7i = "J"
		const stringgQZS1O = "y7oHHmzAJEHgDxaGuvul2USmpTyYRg38"
		const uintNk6upjY = BigInt("830")
		const DipexT4qoGJT = await Dipex.new(stringSbBIl7i, stringgQZS1O, uintNk6upjY, {from: accounts[0]});
		const uintwm1xKOa = BigInt("432")
		const addressEU1OX4c = accounts[0]
		const addressLzUoF7C = accounts[2]
		const uintkNSwLUR = BigInt("402")
		const addressltd1C32 = accounts[3]
		const addressPhZOM3B = accounts[3]
//		const booltwew84e = await DipexT4qoGJT.transferFrom.call(addressLzUoF7C, addressEU1OX4c, uintwm1xKOa, {from: accounts[2]});
//		const booleGz1VOY = await DipexT4qoGJT.transferFrom.call(addressPhZOM3B, addressltd1C32, uintkNSwLUR, {from: accounts[1]});

		await expect(DipexT4qoGJT.transferFrom.call(addressLzUoF7C, addressEU1OX4c, uintwm1xKOa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringSbBIl7i = "J"
		const stringgQZS1O = "y7oHHmzAJEHgDxaGuvul2USmpTyYRg38"
		const uintXZo5FV6 = BigInt("830")
		const DipexT4qoGJT = await Dipex.new(stringSbBIl7i, stringgQZS1O, uintXZo5FV6, {from: accounts[0]});
		const uintnJmQz8m = BigInt("110")
		const addressekwSwbU = accounts[3]
		const uintkTDedO1 = BigInt("432")
		const address3Z9m3A = accounts[0]
		const addressm4CALSf = accounts[2]
		const uintCzJVp7o = BigInt("1488")
		const addresseFOYRi1 = accounts[4]
		const uinteIMVNJe = BigInt("1224")
		const addressTsdNTWq = "0x0000000000000000000000000000000000000001"
		const uintWhyqtRk = BigInt("402")
		const addressy6C6x3H = accounts[3]
		const addressfIzxQhd = accounts[4]
		const boolgZwUKK1 = await DipexT4qoGJT.approve.call(addressekwSwbU, uintnJmQz8m, {from: accounts[3]});
//		const booltwew84e = await DipexT4qoGJT.transferFrom.call(addressm4CALSf, address3Z9m3A, uintkTDedO1, {from: accounts[2]});
//		const boolz7zm2q = await DipexT4qoGJT.approve.call(addresseFOYRi1, uintCzJVp7o, {from: accounts[1]});
//		const booliYnqeT2 = await DipexT4qoGJT.transfer.call(addressTsdNTWq, uinteIMVNJe, {from: accounts[3]});
//		const booleGz1VOY = await DipexT4qoGJT.transferFrom.call(addressfIzxQhd, addressy6C6x3H, uintWhyqtRk, {from: accounts[1]});

		assert.equal(boolgZwUKK1, true)
		await expect(DipexT4qoGJT.transferFrom.call(addressm4CALSf, address3Z9m3A, uintkTDedO1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringSbBIl7i = "J"
		const stringgQZS1O = "y7oHHmzAJEHgDxaGuvul2USmpTyYRg38"
		const uintIbnnGmU = BigInt("830")
		const DipexT4qoGJT = await Dipex.new(stringSbBIl7i, stringgQZS1O, uintIbnnGmU, {from: accounts[0]});
		const uintuMGWdJK = BigInt("431")
		const addresssLZ3HPT = accounts[0]
		const uintNcnOp4 = BigInt("1344")
		const addressOwZAeQE = accounts[0]
		const uinttQreNR = BigInt("15")
		const addressA5OVHUT = accounts[3]
		const uinta751bUo = BigInt("378")
		const addressC1aSH9h = accounts[1]
		const addressvLbUuIk = accounts[0]
		const boolntuLvmT = await DipexT4qoGJT.approve.call(addresssLZ3HPT, uintuMGWdJK, {from: accounts[1]});
		const boolA7xKcQ2 = await DipexT4qoGJT.approveAndCall.call(addressOwZAeQE, uintNcnOp4, {from: accounts[0]});
//		const boolXqnc4lb = await DipexT4qoGJT.transfer.call(addressA5OVHUT, uinttQreNR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolI5Wqsbq = await DipexT4qoGJT.approve.call(addressC1aSH9h, uinta751bUo, {from: accounts[5]});
//		const boolgW25wA1 = await DipexT4qoGJT.transferownership.call(addressvLbUuIk, {from: accounts[0]});

		assert.equal(boolA7xKcQ2, true)
		assert.equal(boolntuLvmT, true)
		await expect(DipexT4qoGJT.transfer.call(addressA5OVHUT, uinttQreNR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringSbBIl7i = "J"
		const stringgQZS1O = "y7oHHmzAJEHgDxaGuvul2USmpTyYRg38"
		const uintga1Eimx = BigInt("830")
		const DipexT4qoGJT = await Dipex.new(stringSbBIl7i, stringgQZS1O, uintga1Eimx, {from: accounts[0]});
		const uintsoKdVku = BigInt("0")
		const addresszmEI7vS = accounts[3]
		const boolXqnc4lb = await DipexT4qoGJT.transfer.call(addresszmEI7vS, uintsoKdVku, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXqnc4lb, true)
	});

	it('test for Dipex', async () => {
		const stringjnQQ7Ec = "QOTeTW8rD7gT6FznMChTd4LsyVSk6PL1kxqK224dze7"
		const stringIYdmTnL = "pU9a7X1DDPzOhWhFhDy8vjvhNf"
		const uintlJjapWk = BigInt("599")
		const DipexZn8zn0W = await Dipex.new(stringjnQQ7Ec, stringIYdmTnL, uintlJjapWk, {from: accounts[1]});
		const uintwN3bSgI = BigInt("0")
		const addressXpjZIGe = accounts[4]
		const uintz6OmnPq = BigInt("267")
		const addresseDpQ6SL = accounts[3]
		const uintjzHBcku = BigInt("1010")
		const addressDw8CcBd = accounts[4]
		const addresskYSUv0D = accounts[0]
		const boolQ9x2Rmu = await DipexZn8zn0W.approveAndCall.call(addressXpjZIGe, uintwN3bSgI, {from: accounts[1]});
		const boolR2scPIN = await DipexZn8zn0W.approve.call(addresseDpQ6SL, uintz6OmnPq, {from: accounts[2]});
//		const boolTpHuOY = await DipexZn8zn0W.transferFrom.call(addresskYSUv0D, addressDw8CcBd, uintjzHBcku, {from: accounts[4]});

		assert.equal(boolQ9x2Rmu, true)
		assert.equal(boolR2scPIN, true)
		await expect(DipexZn8zn0W.transferFrom.call(addresskYSUv0D, addressDw8CcBd, uintjzHBcku, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})