const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintjYdE0Wb = BigInt("1953")
		const string6cYxKn = "MFca5x51E3sV91I5LkMlS6JSYgMNUcd7Ui4MvrsWDtre3s3eMQYCDHyLOA1"
		const stringtYHe2U = "dCO7IC9XyPEJWn"
		const GFCQQKrRd = await GFC.new(uintjYdE0Wb, string6cYxKn, stringtYHe2U, {from: accounts[4]});
		const uintgFqsrlu = BigInt("1598")
		const addressKweIe1o = accounts[4]
		const uintxbInFui = BigInt("1641")
		const address69Gn0I = accounts[0]
		const uintZ5x6Soa = BigInt("940")
		const addressnWN6Sc7 = accounts[4]
//		const boolI5ft0fm = await GFCQQKrRd.burnFrom.call(addressKweIe1o, uintgFqsrlu, {from: accounts[0]});
//		const boolOvB2hQw = await GFCQQKrRd.transfer.call(address69Gn0I, uintxbInFui, {from: accounts[3]});
//		const boolz45bjyQ = await GFCQQKrRd.approve.call(addressnWN6Sc7, uintZ5x6Soa, {from: accounts[1]});

		await expect(GFCQQKrRd.burnFrom.call(addressKweIe1o, uintgFqsrlu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintdTi5Iln = BigInt("861")
		const stringL4pdvd = "KmwVR2DycfHK9VXA6ftXhrDXVACk62viNDPlcf2jecwM2a0onNe2aq1G1QL7wpRfyyTDnhJVdmNQfaKlK8zjcKmCep514eg"
		const stringphhH2ts = "9le3mn1oGX38YXzDj3Km"
		const GFCpbhPIX = await GFC.new(uintdTi5Iln, stringL4pdvd, stringphhH2ts, {from: accounts[2]});
		const uintdT9gpmm = BigInt("31")
		const addressBWBrUMk = accounts[4]
		const uinty8M5FrB = BigInt("776")
		const addressQc1iHA = accounts[5]
		const uintoIPimI = BigInt("463")
		const boolMST1ia1 = await GFCpbhPIX.approve.call(addressBWBrUMk, uintdT9gpmm, {from: accounts[4]});
//		const boolHCtsogp = await GFCpbhPIX.transfer.call(addressQc1iHA, uinty8M5FrB, {from: accounts[5]});
//		const booliJm3glG = await GFCpbhPIX.burn.call(uintoIPimI, {from: accounts[4]});

		assert.equal(boolMST1ia1, true)
		await expect(GFCpbhPIX.transfer.call(addressQc1iHA, uinty8M5FrB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintxOvOjdL = BigInt("1497")
		const stringmR0Zpwo = "S8mV3wrSkmjhftXio"
		const stringUnNMVW3 = "KqDPTRp8bmNmtN9uhypUeJ4"
		const GFCPAzeipD = await GFC.new(uintxOvOjdL, stringmR0Zpwo, stringUnNMVW3, {from: accounts[1]});
		const bytefB6JYr = "0x111c06021619110b0217090a19"
		const uintlkXRjm = BigInt("127")
		const address0M2jf6 = accounts[1]
		const uint0n2jZ9 = BigInt("1869")
		const address8nFzM3 = accounts[3]
		const addressfsIYExR = "0x0000000000000000000000000000000000000001"
		const uintjEMdjOH = BigInt("1074")
//		const booloFcIZ5 = await GFCPAzeipD.approveAndCall.call(address0M2jf6, uintlkXRjm, bytefB6JYr, {from: accounts[1]});
//		const boolhmFTvfm = await GFCPAzeipD.transferFrom.call(addressfsIYExR, address8nFzM3, uint0n2jZ9, {from: accounts[3]});
//		const boolxHbhg8b = await GFCPAzeipD.burn.call(uintjEMdjOH, {from: accounts[4]});

		await expect(GFCPAzeipD.approveAndCall.call(address0M2jf6, uintlkXRjm, bytefB6JYr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintw17upa = BigInt("168")
		const stringfeiXJP = "S7uSFfzBrisJE"
		const stringnDOQk4f = "gDPglfc7MCBwVbMLorgLjSg1QLyql9u9yWK9dFMrHxIDo8zv26ScK"
		const GFCMgRS0b2 = await GFC.new(uintw17upa, stringfeiXJP, stringnDOQk4f, {from: accounts[2]});
		const uinti5fWh9A = BigInt("564")
		const addressUXz2nA0 = "0x0000000000000000000000000000000000000001"
		const addresskFYC3Y5 = "0x0000000000000000000000000000000000000001"
		const uinty0ttUxT = BigInt("869")
		const addresstR4s5ZJ = accounts[0]
		const addressGIH8jQv = accounts[5]
//		const boolLso6SHe = await GFCMgRS0b2.transferFrom.call(addresskFYC3Y5, addressUXz2nA0, uinti5fWh9A, {from: accounts[1]});
//		const boolCilsYRq = await GFCMgRS0b2.transferFrom.call(addressGIH8jQv, addresstR4s5ZJ, uinty0ttUxT, {from: accounts[2]});

		await expect(GFCMgRS0b2.transferFrom.call(addresskFYC3Y5, addressUXz2nA0, uinti5fWh9A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintlXep8D9 = BigInt("1289")
		const stringjWEjl8j = "sh7VvV9PqHX9N1OE"
		const stringFyowd6i = "Vtjfg4xhm3LYMqLx0cmUl3FBkzl0qVSpxO6DAYK7bG"
		const GFCSQizi6H = await GFC.new(uintlXep8D9, stringjWEjl8j, stringFyowd6i, {from: accounts[1]});
		const uintJEyEQJr = BigInt("960")
		const addressElRRUbG = accounts[2]
		const uinthhcF6T = BigInt("1000")
		const uintD7Pc9gG = BigInt("143")
		const uintm6SW6Ok = BigInt("256")
		const addressUoLUN6 = accounts[3]
		const addresstqCTNul = accounts[0]
		const uintqtbtGN = BigInt("404")
		const addresspnPXich = accounts[0]
		const addressirhoVj = accounts[5]
		const boolW94OQyP = await GFCSQizi6H.approve.call(addressElRRUbG, uintJEyEQJr, {from: accounts[2]});
//		const booleXt1o1w = await GFCSQizi6H.burn.call(uinthhcF6T, {from: accounts[5]});
//		const boolPn1j07M = await GFCSQizi6H.burn.call(uintD7Pc9gG, {from: accounts[1]});
//		const boolrMWGs5 = await GFCSQizi6H.transferFrom.call(addresstqCTNul, addressUoLUN6, uintm6SW6Ok, {from: accounts[2]});
//		const boollkwrIin = await GFCSQizi6H.transferFrom.call(addressirhoVj, addresspnPXich, uintqtbtGN, {from: accounts[1]});

		assert.equal(boolW94OQyP, true)
		await expect(GFCSQizi6H.burn.call(uinthhcF6T, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintHt13gjI = BigInt("1572")
		const stringN8CjgOC = "bIwup6MCiW0mfzzbl2bMSK2kvvaOnTGXZEHoaF1uQ9JyJUrRGS3fi4Y7ywfEJhPUgkf77tvKUszfap9VFpcL"
		const stringjmIymAf = "D2FQrUHdrbPG7THXFYGpGK5Gca5vVPatGRxlhlEI"
		const GFCdBtiE0w = await GFC.new(uintHt13gjI, stringN8CjgOC, stringjmIymAf, {from: "0x0000000000000000000000000000000000000001"});
		const uintKUp10NN = BigInt("1102")
		const uintu7QjczK = BigInt("2043")
		const addressvj6nhO = "0x0000000000000000000000000000000000000001"
		const addressUle6ri = accounts[2]
		const uintbjvIXEW = BigInt("1841")
		const uintNSz6ApA = BigInt("390")
		const addressqEKAVY = accounts[4]
		const uintGB31zEx = BigInt("2000")
		const addressFbjB0GM = accounts[5]
		const bool6a65By = await GFCdBtiE0w.burn.call(uintKUp10NN, {from: "0x0000000000000000000000000000000000000001"});
		const boolyOFuBI9 = await GFCdBtiE0w.transferFrom.call(addressUle6ri, addressvj6nhO, uintu7QjczK, {from: accounts[4]});
		const boolCSO0ipr = await GFCdBtiE0w.burn.call(uintbjvIXEW, {from: accounts[4]});
		const boolVmPqYQ = await GFCdBtiE0w.transfer.call(addressqEKAVY, uintNSz6ApA, {from: accounts[3]});
		const boolTuHyzH4 = await GFCdBtiE0w.transfer.call(addressFbjB0GM, uintGB31zEx, {from: accounts[5]});
	});

	it('test for GFC', async () => {
		const uintpXwigGR = BigInt("168")
		const stringfeiXJP = "S7uSFfzBrisJE"
		const stringnDOQk4f = "gDPglfc7MCBwVbMLorgLjSg1QLyql9u9yWK9dFMrHxIDo8zv26ScK"
		const GFCMgRS0b2 = await GFC.new(uintpXwigGR, stringfeiXJP, stringnDOQk4f, {from: accounts[2]});
		const uintXialUnx = BigInt("861")
		const uintyhYEC4C = BigInt("869")
		const addressQex2ZOW = accounts[0]
		const addressL8UA8io = accounts[5]
		const boolFLIk6xJ = await GFCMgRS0b2.burn.call(uintXialUnx, {from: accounts[2]});
//		const boolCilsYRq = await GFCMgRS0b2.transferFrom.call(addressL8UA8io, addressQex2ZOW, uintyhYEC4C, {from: accounts[2]});

		assert.equal(boolFLIk6xJ, true)
		await expect(GFCMgRS0b2.transferFrom.call(addressL8UA8io, addressQex2ZOW, uintyhYEC4C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintGbkj928 = BigInt("168")
		const stringfeiXJP = "S7uSFfzBrisJE"
		const stringnDOQk4f = "gDPglfc7MCBwVbMLorgLjSg1QLyql9u9yWK9dFMrHxIDo8zv26ScK"
		const GFCMgRS0b2 = await GFC.new(uintGbkj928, stringfeiXJP, stringnDOQk4f, {from: accounts[2]});
		const uintG0IRQUN = BigInt("1205")
		const addressIay1wjw = accounts[1]
		const uintE0go5k = BigInt("2")
		const addresscqpk713 = "0x0000000000000000000000000000000000000001"
		const uintbLytkZ5 = BigInt("869")
		const addressoV7h0od = accounts[2]
		const addressvtPDLyR = accounts[5]
		const boolVnn40zm = await GFCMgRS0b2.transfer.call(addressIay1wjw, uintG0IRQUN, {from: accounts[2]});
//		const boolneZYhxi = await GFCMgRS0b2.transfer.call(addresscqpk713, uintE0go5k, {from: accounts[4]});
//		const boolCilsYRq = await GFCMgRS0b2.transferFrom.call(addressvtPDLyR, addressoV7h0od, uintbLytkZ5, {from: accounts[2]});

		assert.equal(boolVnn40zm, true)
		await expect(GFCMgRS0b2.transfer.call(addresscqpk713, uintE0go5k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})