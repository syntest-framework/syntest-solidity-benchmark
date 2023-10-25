const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringj8tPytY = "lHvOQhXLyJHagHv3aTdqSjvQ0gLZvnXHblKasn0DOcolCYfhxI623EAkoYv3vQui"
		const stringPEt7q3s = "vN5I08Od6mVXVeStBCQcsuMaE5acnqCuTi0y8H3WRz7bkb5hXKCO9bw"
		const uintmoc8STI = BigInt("197")
		const OnXFinanceQ06jma2 = await OnXFinance.new(stringj8tPytY, stringPEt7q3s, uintmoc8STI, {from: accounts[1]});
		const uintDH0ZTBo = BigInt("1857")
		const addressStpnlKe = accounts[0]
		const addressXLO54li = accounts[4]
		const uintvt7bVXc = BigInt("1286")
		const addressuVTSPN = accounts[5]
		const uintKPlxMpR = BigInt("1217")
		const addressA4HwEU = "0x0000000000000000000000000000000000000001"
		const uintGQTZQeu = BigInt("2022")
		const addresskm4lGUe = "0x0000000000000000000000000000000000000001"
		const uintTNU00U = BigInt("747")
		const addresspy5esTO = accounts[0]
//		const boolAJCcJhw = await OnXFinanceQ06jma2.transferFrom.call(addressXLO54li, addressStpnlKe, uintDH0ZTBo, {from: accounts[2]});
//		const boolLe27NWT = await OnXFinanceQ06jma2.approve.call(addressuVTSPN, uintvt7bVXc, {from: accounts[0]});
//		const booldsKVGuM = await OnXFinanceQ06jma2.transfer.call(addressA4HwEU, uintKPlxMpR, {from: accounts[0]});
//		const boolYMaPAQP = await OnXFinanceQ06jma2.transfer.call(addresskm4lGUe, uintGQTZQeu, {from: accounts[4]});
//		const boolZO1arq6 = await OnXFinanceQ06jma2.decreaseAllowance.call(addresspy5esTO, uintTNU00U, {from: accounts[0]});

		await expect(OnXFinanceQ06jma2.transferFrom.call(addressXLO54li, addressStpnlKe, uintDH0ZTBo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringfLJHAel = "vY8UA8IUgwYcaOlKu"
		const stringjYpmhz2 = "1u6o1BTt8dnoRgPDbd7r7CqgWvjkvbklOQGx"
		const uint2KAvza = BigInt("53")
		const OnXFinanceVjXQZA3 = await OnXFinance.new(stringfLJHAel, stringjYpmhz2, uint2KAvza, {from: accounts[4]});
		const uintDJ5qjr = BigInt("915")
		const addressThibnl2 = accounts[3]
		const addressL9u4mkg = accounts[0]
		const addressaAM1izP = accounts[4]
		const uintxQmyRVb = BigInt("1401")
		const addressPZWCVw6 = accounts[1]
		const addressPrfvGRi = accounts[5]
		const stringf6NiN00 = await OnXFinanceVjXQZA3.symbol.call({from: accounts[0]});
//		const boolC3Km1u5 = await OnXFinanceVjXQZA3.increaseAllowance.call(addressThibnl2, uintDJ5qjr, {from: accounts[2]});
//		const uintbprhcAH = await OnXFinanceVjXQZA3.balanceOf.call(addressL9u4mkg, {from: accounts[4]});
//		const uintYNatSmY = await OnXFinanceVjXQZA3.balanceOf.call(addressaAM1izP, {from: accounts[0]});
//		const boolKykMds = await OnXFinanceVjXQZA3.transferFrom.call(addressPrfvGRi, addressPZWCVw6, uintxQmyRVb, {from: accounts[2]});

		assert.equal(stringf6NiN00, "1u6o1BTt8dnoRgPDbd7r7CqgWvjkvbklOQGx")
		await expect(OnXFinanceVjXQZA3.increaseAllowance.call(addressThibnl2, uintDJ5qjr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringZRC9p6S = "WverCVUqfsjLBPRQWdV7kWRPLANFIDNjuz"
		const stringTYypKN = "Glk7"
		const uintyLkizM = BigInt("134")
		const OnXFinanceKvMEscI = await OnXFinance.new(stringZRC9p6S, stringTYypKN, uintyLkizM, {from: accounts[4]});
		const uintg7TQXCP = BigInt("844")
		const addresszCkFATx = accounts[3]
		const uintJiwuW8G = BigInt("884")
		const addressR0hDFyJ = accounts[2]
		const addressPqrKAgT = accounts[2]
		const uinteCOqbgL = BigInt("20")
		const address2zzDq5 = "0x0000000000000000000000000000000000000001"
		const uintCyvOmM9 = BigInt("1468")
		const addressL4PNUFW = accounts[1]
//		const boolnV3AKSR = await OnXFinanceKvMEscI.transfer.call(addresszCkFATx, uintg7TQXCP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolC63yj6B = await OnXFinanceKvMEscI.transferFrom.call(addressPqrKAgT, addressR0hDFyJ, uintJiwuW8G, {from: accounts[4]});
//		const stringB7nabZk = await OnXFinanceKvMEscI.name.call({from: accounts[0]});
//		const boolz4y0Lu = await OnXFinanceKvMEscI.transfer.call(address2zzDq5, uinteCOqbgL, {from: accounts[3]});
//		const boolR3cO1xn = await OnXFinanceKvMEscI.approveAndCall.call(addressL4PNUFW, uintCyvOmM9, {from: accounts[1]});
//		const uint8Eisigkr = await OnXFinanceKvMEscI.decimals.call({from: accounts[3]});

		await expect(OnXFinanceKvMEscI.transfer.call(addresszCkFATx, uintg7TQXCP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringCG6zmMe = "2wRvurV4TCOQ6wWrIDhGUA79qZBJ4LX28Z3jyCo6yA6CDhPuPmDExWJ5M"
		const stringHMI9KLd = "ksUCLgpzUpVRSQa7Xa3zTtKkl4QyPNKIX4ziV7WF5xZgRjCpKI5J3M6nXkt4TfCbkDxx5If9tnG"
		const uinta5XeocV = BigInt("106")
		const OnXFinanceHAFP86 = await OnXFinance.new(stringCG6zmMe, stringHMI9KLd, uinta5XeocV, {from: accounts[5]});
		const uintxRnq4gL = BigInt("76")
		const addresskWZ8rJ2 = accounts[1]
		const uintVAz3HvU = BigInt("324")
		const addressuxs87M1 = accounts[4]
		const uintwxD4Ls = BigInt("834")
		const addressXQMkpiK = accounts[1]
		const uintIrbyuUY = BigInt("1319")
		const addresslYKkD3v = "0x0000000000000000000000000000000000000001"
		const boolCXfUASp = await OnXFinanceHAFP86.approveAndCall.call(addresskWZ8rJ2, uintxRnq4gL, {from: accounts[5]});
		const booldUEHzBH = await OnXFinanceHAFP86.approve.call(addressuxs87M1, uintVAz3HvU, {from: accounts[1]});
		const boollNjlhwq = await OnXFinanceHAFP86.approve.call(addressXQMkpiK, uintwxD4Ls, {from: accounts[1]});
//		const boolnBrryg = await OnXFinanceHAFP86.transfer.call(addresslYKkD3v, uintIrbyuUY, {from: accounts[2]});

		assert.equal(boolCXfUASp, true)
		assert.equal(booldUEHzBH, true)
		assert.equal(boollNjlhwq, true)
		await expect(OnXFinanceHAFP86.transfer.call(addresslYKkD3v, uintIrbyuUY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringZRC9p6S = "WverCVUqfsjLBPRQWdV7kWRPLANFIDNjuz"
		const stringTYypKN = "Glk7"
		const uintKuevpyt = BigInt("134")
		const OnXFinanceKvMEscI = await OnXFinance.new(stringZRC9p6S, stringTYypKN, uintKuevpyt, {from: accounts[4]});
		const addressdb3Oaex = accounts[4]
		const uintRcoINLm = BigInt("844")
		const addressJWlDtAh = accounts[3]
		const uintRDNs3Xz = BigInt("640")
		const addressnqN9b8T = accounts[0]
		const addressM5ABzR9 = accounts[0]
		const uintl2dytL = BigInt("884")
		const addresszvVrZ3J = accounts[2]
		const addressuHZQbZg = accounts[2]
		const uintCYSSCr6 = BigInt("20")
		const addressw6bQx8r = "0x0000000000000000000000000000000000000001"
		const uintmxLEJ7J = BigInt("1468")
		const addressLcRHzFZ = accounts[1]
//		const boolxzfc21 = await OnXFinanceKvMEscI.transferownership.call(addressdb3Oaex, {from: accounts[1]});
//		const boolnV3AKSR = await OnXFinanceKvMEscI.transfer.call(addressJWlDtAh, uintRcoINLm, {from: "0x0000000000000000000000000000000000000001"});
//		const booljyByIZy = await OnXFinanceKvMEscI.transferFrom.call(addressM5ABzR9, addressnqN9b8T, uintRDNs3Xz, {from: accounts[3]});
//		const boolC63yj6B = await OnXFinanceKvMEscI.transferFrom.call(addressuHZQbZg, addresszvVrZ3J, uintl2dytL, {from: accounts[4]});
//		const stringB7nabZk = await OnXFinanceKvMEscI.name.call({from: accounts[0]});
//		const boolz4y0Lu = await OnXFinanceKvMEscI.transfer.call(addressw6bQx8r, uintCYSSCr6, {from: accounts[3]});
//		const boolR3cO1xn = await OnXFinanceKvMEscI.approveAndCall.call(addressLcRHzFZ, uintmxLEJ7J, {from: accounts[1]});
//		const uint8Eisigkr = await OnXFinanceKvMEscI.decimals.call({from: accounts[3]});

		await expect(OnXFinanceKvMEscI.transferownership.call(addressdb3Oaex, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringyouUnHt = "xEi25eUETieDitXMIOsO29gLGVILGzeuuJzkfgOiMsotjHkEJr5FL5Rf"
		const stringYbSwXSE = "r3T4TqbdR22JeptPLN7mxpGnWecwdXAQccSZanDaQ3NinTX5k7I75vu8oUMLdI15HA8ki479mD7jqRnUslkEb2IaIjep3ChB"
		const uintSlesS15 = BigInt("243")
		const OnXFinanceNs8WhBe = await OnXFinance.new(stringyouUnHt, stringYbSwXSE, uintSlesS15, {from: accounts[4]});
		const uintzp4zh0 = BigInt("1002")
		const addressKNPIQsK = accounts[3]
		const uintxYydUry = BigInt("1025")
		const addressC09LAry = accounts[5]
		const uintN2rsOa = BigInt("1371")
		const addressF7zgkxU = accounts[3]
		const uintVPa4nvs = BigInt("393")
		const addressYPM7824 = accounts[2]
		const boollplMkrU = await OnXFinanceNs8WhBe.transfer.call(addressKNPIQsK, uintzp4zh0, {from: accounts[4]});
		const stringlXVhp8 = await OnXFinanceNs8WhBe.symbol.call({from: accounts[1]});
//		const boolrhEF7Aj = await OnXFinanceNs8WhBe.decreaseAllowance.call(addressC09LAry, uintxYydUry, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkuX1VUI = await OnXFinanceNs8WhBe.transfer.call(addressF7zgkxU, uintN2rsOa, {from: accounts[2]});
//		const booleEuq6JW = await OnXFinanceNs8WhBe.increaseAllowance.call(addressYPM7824, uintVPa4nvs, {from: accounts[1]});

		assert.equal(boollplMkrU, true)
		assert.equal(stringlXVhp8, "r3T4TqbdR22JeptPLN7mxpGnWecwdXAQccSZanDaQ3NinTX5k7I75vu8oUMLdI15HA8ki479mD7jqRnUslkEb2IaIjep3ChB")
		await expect(OnXFinanceNs8WhBe.decreaseAllowance.call(addressC09LAry, uintxYydUry, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringHx030d1 = "6WUgtKlHx15aw0"
		const stringKNfk21q = "TBi527z8ly3pXwsaiwQacHF4slHvpT9jN6AaC2C8ouIAGlICWuz6hoW1qmTRwuzkk9MZSsc1Ht5FNn"
		const uintBFYOvmV = BigInt("1645")
		const OnXFinancevRX6Z3 = await OnXFinance.new(stringHx030d1, stringKNfk21q, uintBFYOvmV, {from: "0x0000000000000000000000000000000000000001"});
		const uintgr8VFXM = BigInt("648")
		const addressFMvy0nc = accounts[1]
		const uintzmBeaCu = BigInt("1031")
		const addressmfllK2m = accounts[0]
		const uintBxuNyvs = BigInt("1417")
		const addressEMp3tsw = accounts[5]
		const addressklwixZs = accounts[2]
		const addressClIFDCo = accounts[2]
		const uintww8jew3 = BigInt("1108")
		const addressjp2QWzz = accounts[2]
		const uint8KPyVjam = await OnXFinancevRX6Z3.decimals.call({from: accounts[2]});
		const boolKl9eZCv = await OnXFinancevRX6Z3.increaseAllowance.call(addressFMvy0nc, uintgr8VFXM, {from: accounts[4]});
		const booloRPOIsi = await OnXFinancevRX6Z3.approve.call(addressmfllK2m, uintzmBeaCu, {from: accounts[3]});
		const boolQKTYo6f = await OnXFinancevRX6Z3.transferFrom.call(addressklwixZs, addressEMp3tsw, uintBxuNyvs, {from: accounts[1]});
		const uintQCudDew = await OnXFinancevRX6Z3.balanceOf.call(addressClIFDCo, {from: "0x0000000000000000000000000000000000000001"});
		const boolwsMIzjC = await OnXFinancevRX6Z3.approve.call(addressjp2QWzz, uintww8jew3, {from: accounts[1]});
	});

	it('test for OnXFinance', async () => {
		const stringCG6zmMe = "2wRvurV4TCOQ6wWrIDhGUA79qZBJ4LX28Z3jyCo6yA6CDhPuPmDExWJ5M"
		const stringHMI9KLd = "ksUCLgpzUpVRSQa7Xa3zTtKkl4QyPNKIX4ziV7WF5xZgRjCpKI5J3M6nXkt4TfCbkDxx5If9tnG"
		const uintwVsxtEv = BigInt("106")
		const OnXFinanceHAFP86 = await OnXFinance.new(stringCG6zmMe, stringHMI9KLd, uintwVsxtEv, {from: accounts[5]});
		const uintC9aucpj = BigInt("64")
		const addressCTl3S7b = accounts[1]
		const addressUB0Iesb = "0x00000000000000000000000000000000000000-1"
		const uintSfjFQnX = BigInt("1319")
		const addresse9cu8Uy = "0x0000000000000000000000000000000000000001"
		const boolCXfUASp = await OnXFinanceHAFP86.approveAndCall.call(addressCTl3S7b, uintC9aucpj, {from: accounts[5]});
//		const uintijMQAFB = await OnXFinanceHAFP86.balanceOf.call(addressUB0Iesb, {from: accounts[3]});
//		const boolnBrryg = await OnXFinanceHAFP86.transfer.call(addresse9cu8Uy, uintSfjFQnX, {from: accounts[2]});

		assert.equal(boolCXfUASp, true)
		await expect(OnXFinanceHAFP86.balanceOf.call(addressUB0Iesb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringyYd0bJb = "m1UJIYdmyHLqNADCtzR5196dZdsynwfBxwq9Fpxhg"
		const stringaNg2Zy = "XbOiSWRGrrZDMLuk3asCFKjBxdx1NU1NOY8ustMVjq0hVpJPTrmp"
		const uintOAvRIPj = BigInt("30")
		const OnXFinanceFIdaRqi = await OnXFinance.new(stringyYd0bJb, stringaNg2Zy, uintOAvRIPj, {from: accounts[3]});
		const uintPTttjtm = BigInt("0")
		const addresslWc82j = accounts[1]
		const uintjAiTflA = BigInt("771")
		const addressOXOGpdF = accounts[5]
		const uintSlaahye = BigInt("1496")
		const addressqW3O2RL = accounts[0]
		const addressM8aEQsx = accounts[1]
		const boolQ4FU8ei = await OnXFinanceFIdaRqi.transfer.call(addresslWc82j, uintPTttjtm, {from: accounts[0]});
//		const boolaakUiye = await OnXFinanceFIdaRqi.increaseAllowance.call(addressOXOGpdF, uintjAiTflA, {from: accounts[4]});
//		const boolEOgknbV = await OnXFinanceFIdaRqi.transferFrom.call(addressM8aEQsx, addressqW3O2RL, uintSlaahye, {from: accounts[3]});

		assert.equal(boolQ4FU8ei, true)
		await expect(OnXFinanceFIdaRqi.increaseAllowance.call(addressOXOGpdF, uintjAiTflA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringCG6zmMe = "2wRvurV4TCOQ6wWrIDhGUA79qZBJ4LX28Z3jyCo6yA6CDhPuPmDExWJ5M"
		const stringHMI9KLd = "ksUCLgpzUpVRSQa7Xa3zTtKkl4QyPNKIX4ziV7WF5xZgRjCpKI5J3M6nXkt4TfCbkDxx5If9tnG"
		const uintGzKdiMZ = BigInt("106")
		const OnXFinanceHAFP86 = await OnXFinance.new(stringCG6zmMe, stringHMI9KLd, uintGzKdiMZ, {from: accounts[5]});
		const uintkj4zkQ = BigInt("0")
		const addressSUDWr0j = accounts[1]
		const uintGwoQX4 = BigInt("1110")
		const addressA4ICT1i = accounts[3]
		const uinty5l26vz = BigInt("1443")
		const addressNjim674 = accounts[1]
		const uintvDNpWOV = BigInt("526")
		const addressrugin2h = accounts[1]
		const uintdwIGL9n = BigInt("633")
		const addressqJFueY7 = "0x0000000000000000000000000000000000000002"
		const boolCXfUASp = await OnXFinanceHAFP86.approveAndCall.call(addressSUDWr0j, uintkj4zkQ, {from: accounts[5]});
//		const boolgMKlB4b = await OnXFinanceHAFP86.transfer.call(addressA4ICT1i, uintGwoQX4, {from: accounts[0]});
//		const boolaiUGduI = await OnXFinanceHAFP86.increaseAllowance.call(addressNjim674, uinty5l26vz, {from: accounts[0]});
//		const boolmxi0h7G = await OnXFinanceHAFP86.approve.call(addressrugin2h, uintvDNpWOV, {from: accounts[3]});
//		const stringgyaDgG8 = await OnXFinanceHAFP86.symbol.call({from: accounts[3]});
//		const boolzuoqQgG = await OnXFinanceHAFP86.decreaseAllowance.call(addressqJFueY7, uintdwIGL9n, {from: accounts[3]});

		assert.equal(boolCXfUASp, true)
		await expect(OnXFinanceHAFP86.transfer.call(addressA4ICT1i, uintGwoQX4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})