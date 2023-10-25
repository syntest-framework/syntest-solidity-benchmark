const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringiX11aJ = "5HgT7jSjqCUJPwFqDqOHzlRLWZ2QblSlDcI3m51"
		const stringn9m84ru = "TUg1gNurD9N3PeTJ493v8acQmEYmpgiXKwYW3tMWYiI8i2ouDIDKXta9SSRQd"
		const uintVaQ3CKQ = BigInt("70")
		const FinallaDFeS = await Final.new(stringiX11aJ, stringn9m84ru, uintVaQ3CKQ, {from: accounts[1]});
		const uintrUG1YXH = BigInt("1103")
		const addressFS3CJJw = accounts[1]
		const uintJlUj2n = BigInt("1206")
		const addressrnKMuVY = accounts[4]
//		const booleYlnJpy = await FinallaDFeS.transfer.call(addressFS3CJJw, uintrUG1YXH, {from: "0x0000000000000000000000000000000000000001"});
//		const stringHRUTYzk = await FinallaDFeS.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolmoz9eG = await FinallaDFeS.decreaseAllowance.call(addressrnKMuVY, uintJlUj2n, {from: accounts[2]});

		await expect(FinallaDFeS.transfer.call(addressFS3CJJw, uintrUG1YXH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringQ6KegnO = "2bbaqCwToRYhwgv2DBfbPf2jQjXvNuPMiT"
		const stringJpepHad = "Hp7"
		const uintW8jwxeb = BigInt("19")
		const FinalW4Hgkrl = await Final.new(stringQ6KegnO, stringJpepHad, uintW8jwxeb, {from: accounts[1]});
		const uintFJdE6mo = BigInt("1610")
		const addresss0bJ7xw = accounts[0]
		const addressrwfVGKM = accounts[4]
		const uintlU8OCVR = BigInt("940")
		const addressPwoCeMx = "0x0000000000000000000000000000000000000001"
		const uintusswSLc = BigInt("2041")
		const addresseLaMv8e = accounts[0]
		const uintvqINkDr = BigInt("370")
		const addresskgZNylT = accounts[3]
		const addressgMhbvO = accounts[1]
		const boolgSKXCNL = await FinalW4Hgkrl.approve.call(addresss0bJ7xw, uintFJdE6mo, {from: accounts[4]});
		const uintop1retY = await FinalW4Hgkrl.balanceOf.call(addressrwfVGKM, {from: accounts[1]});
		const uint8O5WLoKy = await FinalW4Hgkrl.decimals.call({from: accounts[5]});
//		const boolFf9DqDZ = await FinalW4Hgkrl.decreaseAllowance.call(addressPwoCeMx, uintlU8OCVR, {from: accounts[3]});
//		const boolJdD2j38 = await FinalW4Hgkrl.transfer.call(addresseLaMv8e, uintusswSLc, {from: accounts[2]});
//		const boolCuDLsxs = await FinalW4Hgkrl.transferFrom.call(addressgMhbvO, addresskgZNylT, uintvqINkDr, {from: accounts[4]});

		assert.equal(boolgSKXCNL, true)
		assert.equal(uint8O5WLoKy, BigInt("18"))
		assert.equal(uintop1retY, BigInt("0"))
		await expect(FinalW4Hgkrl.decreaseAllowance.call(addressPwoCeMx, uintlU8OCVR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringOOYr31x = "4YTs5F5TjHEiAp1Uahkcgf6nhNLqbqN2"
		const stringFMQMXIv = "5"
		const uint3AwVvz = BigInt("177")
		const FinalclqMMlR = await Final.new(stringOOYr31x, stringFMQMXIv, uint3AwVvz, {from: "0x0000000000000000000000000000000000000001"});
		const addressD4ALr0 = "0x0000000000000000000000000000000000000001"
		const uintQNf4q2C = BigInt("299")
		const addressbgW51mG = accounts[5]
		const addressRnHGbQ0 = accounts[0]
		const boolOBmIXXg = await FinalclqMMlR.transferownership.call(addressD4ALr0, {from: accounts[0]});
		const boolbR0XNhl = await FinalclqMMlR.transferFrom.call(addressRnHGbQ0, addressbgW51mG, uintQNf4q2C, {from: accounts[2]});
		const stringvd56LRk = await FinalclqMMlR.name.call({from: accounts[5]});
	});

	it('test for Final', async () => {
		const stringeKyq92U = "E"
		const stringagKXpTr = "fPztXSCr8K9rflb5einyPFloWDwrmbHGo0OHOK"
		const uintQhHKVdk = BigInt("340")
		const Final8CpOHY = await Final.new(stringeKyq92U, stringagKXpTr, uintQhHKVdk, {from: accounts[3]});
		const addressPMsqTC8 = accounts[0]
		const addressws1ZlMi = accounts[3]
		const uint2Hx1AL = BigInt("802")
		const addressHPqAgwe = accounts[2]
		const uint9SWxc9 = await Final8CpOHY.allowance.call(addressws1ZlMi, addressPMsqTC8, {from: accounts[5]});
		const uint8fdPpGpn = await Final8CpOHY.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolJk50xd3 = await Final8CpOHY.approveAndCall.call(addressHPqAgwe, uint2Hx1AL, {from: accounts[3]});
		const stringorRRJed = await Final8CpOHY.symbol.call({from: accounts[3]});
		const stringvwOKcNf = await Final8CpOHY.symbol.call({from: accounts[1]});

		assert.equal(boolJk50xd3, true)
		assert.equal(stringorRRJed, "fPztXSCr8K9rflb5einyPFloWDwrmbHGo0OHOK")
		assert.equal(stringvwOKcNf, "fPztXSCr8K9rflb5einyPFloWDwrmbHGo0OHOK")
		assert.equal(uint8fdPpGpn, BigInt("18"))
		assert.equal(uint9SWxc9, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringP56MEsj = "2LcC9lmdlTecVGSMovfexol9w7Hl55Y1Fevw5vswik1G12aEcJHy"
		const stringYJ4UTk2 = "E1VQw2GUwWGQlG67ErQo9krj6tTQbNt7ep1y6"
		const uintN2TmRTH = BigInt("1579")
		const FinalSNCqS0M = await Final.new(stringP56MEsj, stringYJ4UTk2, uintN2TmRTH, {from: accounts[3]});
		const addresszDEG5El = accounts[4]
		const uintR60DvkM = BigInt("974")
		const addressHDKWVwA = accounts[3]
		const uintkCIP3Xd = BigInt("560")
		const addressxcFgiB = accounts[4]
//		const boolPaLr5TJ = await FinalSNCqS0M.transferownership.call(addresszDEG5El, {from: accounts[4]});
//		const stringg8rfyvz = await FinalSNCqS0M.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolsRTvGvg = await FinalSNCqS0M.decreaseAllowance.call(addressHDKWVwA, uintR60DvkM, {from: accounts[1]});
//		const bool76pofH = await FinalSNCqS0M.decreaseAllowance.call(addressxcFgiB, uintkCIP3Xd, {from: accounts[0]});

		await expect(FinalSNCqS0M.transferownership.call(addresszDEG5El, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringCGay5f = "GGLEJoKBCbpj7zvbf5ux8trtIx7bXbhEJ5RUHVUwGgahDlIc"
		const stringbY02F1z = "0K65ecy2xTjynz3S31ey19pwhTRxMqaEn542W"
		const uintjYotbMU = BigInt("223")
		const FinalXPsBpEP = await Final.new(stringCGay5f, stringbY02F1z, uintjYotbMU, {from: accounts[0]});
		const uintmunrEzM = BigInt("1899")
		const addressK1VBdA = accounts[5]
		const uintUFxvycf = BigInt("705")
		const addressTgDPwlE = accounts[0]
		const uintTx7yn86 = await FinalXPsBpEP.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolhVKt1i5 = await FinalXPsBpEP.transfer.call(addressK1VBdA, uintmunrEzM, {from: accounts[2]});
//		const boolSQ7LH6q = await FinalXPsBpEP.approve.call(addressTgDPwlE, uintUFxvycf, {from: accounts[3]});

		assert.equal(uintTx7yn86, BigInt("223000000000000000000"))
		await expect(FinalXPsBpEP.transfer.call(addressK1VBdA, uintmunrEzM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringPA9J4q7 = "2b5j1zXUgyB3oLcRfBBDVaTLFFq4QfwpDLWyl4ocsh"
		const stringq5o0DJj = "OrHdurX166P11MxCaQ6UsLWMNmnpxrJtkdVj4jXqnSB6GYd3zDziJbmdcp68I2fIv3IPbcBEHhL"
		const uintCrc0bs = BigInt("1894")
		const Finalstd2Gol = await Final.new(stringPA9J4q7, stringq5o0DJj, uintCrc0bs, {from: accounts[5]});
		const uintMbmoTq0 = BigInt("0")
		const addresswnC64NK = accounts[3]
		const booliLRPyx = await Finalstd2Gol.transfer.call(addresswnC64NK, uintMbmoTq0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booliLRPyx, true)
	});

	it('test for Final', async () => {
		const stringP56MEsj = "2LcC9lmdlTecVGSMovfexol9w7Hl55Y1Fevw5vswik1G12aEcJHy"
		const stringYJ4UTk2 = "E1VQw2GUwWGQlG67ErQo9krj6tTQbNt7ep1y6"
		const uintkZFZB5U = BigInt("1579")
		const FinalSNCqS0M = await Final.new(stringP56MEsj, stringYJ4UTk2, uintkZFZB5U, {from: accounts[3]});
		const uints761WZD = BigInt("0")
		const addressFO0qVoj = accounts[3]
		const booleKJLWy = await FinalSNCqS0M.approveAndCall.call(addressFO0qVoj, uints761WZD, {from: accounts[3]});

		assert.equal(booleKJLWy, true)
	});
})