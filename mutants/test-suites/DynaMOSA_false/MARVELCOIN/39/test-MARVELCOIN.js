const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintsJdyiet = BigInt("138")
		const stringDWBahmj = "vIk4826yzuRmELD6hmf6pCUYK9oTo2jgnIjVhM5EScjkIcb7A"
		const stringt5ExhPu = ""
		const MARVELCOINpTkL8Ug = await MARVELCOIN.new(uintsJdyiet, stringDWBahmj, stringt5ExhPu, {from: accounts[3]});
		const uintfaUzG2i = BigInt("1948")
		const uint40tUFu = BigInt("433")
		const addressh9OwBVO = accounts[1]
		const uintdUrcugR = BigInt("1238")
		const uintxpBMbFW = BigInt("1009")
//		const boolCsZEzeB = await MARVELCOINpTkL8Ug.burn.call(uintfaUzG2i, {from: accounts[2]});
//		const boollmsmSPX = await MARVELCOINpTkL8Ug.burnFrom.call(addressh9OwBVO, uint40tUFu, {from: accounts[2]});
//		const booldh1kAd = await MARVELCOINpTkL8Ug.burn.call(uintdUrcugR, {from: accounts[3]});
//		const boolj1dltf = await MARVELCOINpTkL8Ug.burn.call(uintxpBMbFW, {from: accounts[1]});

		await expect(MARVELCOINpTkL8Ug.burn.call(uintfaUzG2i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintQJANMCs = BigInt("1293")
		const stringJAJAzYq = "qW4KDqMeCxXofPDpHZNC9hvKbEO48ffx4FRbWSv3uWUV3"
		const string48MkkW = "HvajJRewTD5g5XqHDLVs0"
		const MARVELCOINBzXLYIv = await MARVELCOIN.new(uintQJANMCs, stringJAJAzYq, string48MkkW, {from: "0x0000000000000000000000000000000000000001"});
		const uintAmenJOa = BigInt("1220")
		const uintJTB48Qw = BigInt("93")
		const addressUTlHpyP = "0x0000000000000000000000000000000000000001"
		const addressRk15AH = accounts[0]
		const uintxha9E1H = BigInt("1740")
		const uintBOIJtSR = BigInt("729")
		const uintk199Wqf = BigInt("686")
		const boolkvW3t2c = await MARVELCOINBzXLYIv.burn.call(uintAmenJOa, {from: "0x0000000000000000000000000000000000000001"});
		const boolmOePobV = await MARVELCOINBzXLYIv.transferFrom.call(addressRk15AH, addressUTlHpyP, uintJTB48Qw, {from: accounts[5]});
		const boolCvzKY5S = await MARVELCOINBzXLYIv.burn.call(uintxha9E1H, {from: accounts[1]});
		const boolRY3LZXH = await MARVELCOINBzXLYIv.burn.call(uintBOIJtSR, {from: "0x0000000000000000000000000000000000000001"});
		const boolDyFfjTb = await MARVELCOINBzXLYIv.burn.call(uintk199Wqf, {from: accounts[3]});
	});

	it('test for MARVELCOIN', async () => {
		const uintgSbhMh4 = BigInt("454")
		const stringlWlaJhB = "03ZFDMqAeXx4rABbKGLW1kEOgCgMQP2tosviLwNnb5SgzxUbCPAts3kI2hV6E6875D62IhiLCreind"
		const stringnNWFd0 = "mKJJmTDDbV14YrKhrfHNkt2Pnxd9Rg3dzH2WMsyJC"
		const MARVELCOINVF4lVxB = await MARVELCOIN.new(uintgSbhMh4, stringlWlaJhB, stringnNWFd0, {from: accounts[1]});
		const uint6BKSd3 = BigInt("124")
		const addressPhZ5JbA = accounts[4]
		const addressQVZRyFZ = accounts[0]
		const uintGeBsax = BigInt("177")
		const addressnCyAjmH = accounts[5]
		const addressETn324O = accounts[3]
		const uinth4qBhDK = BigInt("431")
		const addresslFLbPkX = "0x0000000000000000000000000000000000000001"
		const uintEQ28718 = BigInt("578")
		const addressCp7CV0X = accounts[3]
//		const boolgxBFet8 = await MARVELCOINVF4lVxB.transferFrom.call(addressQVZRyFZ, addressPhZ5JbA, uint6BKSd3, {from: accounts[3]});
//		const boolitau22u = await MARVELCOINVF4lVxB.transferFrom.call(addressETn324O, addressnCyAjmH, uintGeBsax, {from: accounts[0]});
//		const boolJEFrbAX = await MARVELCOINVF4lVxB.burnFrom.call(addresslFLbPkX, uinth4qBhDK, {from: accounts[1]});
//		const boolecytlHO = await MARVELCOINVF4lVxB.approve.call(addressCp7CV0X, uintEQ28718, {from: accounts[3]});

		await expect(MARVELCOINVF4lVxB.transferFrom.call(addressQVZRyFZ, addressPhZ5JbA, uint6BKSd3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintp8U4K1J = BigInt("1583")
		const stringB8jszk = "9NbMXof7yDUpvI0TWBlwm3H1zWq3LdWQVjCgrdR1UzCClDok7eFijeajqauxkS1lNxHKrbuBZpIvjx"
		const stringKb90qG4 = "ansBpw3aiqYGba9u173vEgydatQxDNeACKUPI1lxQJslJeCdaMf6KN59zp"
		const MARVELCOINHmBa7Tk = await MARVELCOIN.new(uintp8U4K1J, stringB8jszk, stringKb90qG4, {from: accounts[3]});
		const uintXOSXivx = BigInt("588")
		const addressWyB6ZPH = accounts[5]
		const uintoJnTHOO = BigInt("649")
		const addressN8jrDhw = accounts[1]
		const addressyo1GBYi = "0x0000000000000000000000000000000000000001"
		const uintD8qKcY3 = BigInt("570")
		const bytezIX0Ueu = "0x061616181c1c12030f190c131c1d1913"
		const uintKDsAWHn = BigInt("1586")
		const addressh1ncjLy = accounts[0]
//		const boolCsmSL8P = await MARVELCOINHmBa7Tk.burnFrom.call(addressWyB6ZPH, uintXOSXivx, {from: accounts[0]});
//		const boolfGrL06s = await MARVELCOINHmBa7Tk.transferFrom.call(addressyo1GBYi, addressN8jrDhw, uintoJnTHOO, {from: accounts[1]});
//		const boolbRcp3Ir = await MARVELCOINHmBa7Tk.burn.call(uintD8qKcY3, {from: accounts[3]});
//		const boolCyNso5o = await MARVELCOINHmBa7Tk.approveAndCall.call(addressh1ncjLy, uintKDsAWHn, bytezIX0Ueu, {from: accounts[2]});

		await expect(MARVELCOINHmBa7Tk.burnFrom.call(addressWyB6ZPH, uintXOSXivx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintewdrRLN = BigInt("1002")
		const stringC7Y1Cov = "jXDH8tztIOT3WgePwdq9L2S3yPnUeJ5hnAs7Ca15KJda52IOHa4mRL7SDzmSYdr8VIQb1DBJFqC2jywSUHKCKvICDo"
		const stringtIat9RA = "HycoAsm9PYWdmCcKNLGppBpz7Uo4BNTIeXdzv5CpN6IrqGUdKw56UqmIDWZY"
		const MARVELCOINlSo2jA = await MARVELCOIN.new(uintewdrRLN, stringC7Y1Cov, stringtIat9RA, {from: accounts[1]});
		const byteXG501u1 = "0x1d1c070b061a05130f03030307131e1c1a18061112190b0d0d1d011f08200c05"
		const uintf9W6IFL = BigInt("370")
		const addressEA3pBJ = accounts[4]
		const uintIkg6WGr = BigInt("1895")
		const addresszcwAZW4 = accounts[4]
		const addressWIE8sQ = accounts[0]
		const uintdbOCyji = BigInt("264")
		const address4VxP4q = accounts[0]
//		const boolNXRkGNP = await MARVELCOINlSo2jA.approveAndCall.call(addressEA3pBJ, uintf9W6IFL, byteXG501u1, {from: accounts[4]});
//		const boolJ2YETX = await MARVELCOINlSo2jA.transferFrom.call(addressWIE8sQ, addresszcwAZW4, uintIkg6WGr, {from: accounts[4]});
//		const boolQltmbd8 = await MARVELCOINlSo2jA.transfer.call(address4VxP4q, uintdbOCyji, {from: accounts[1]});

		await expect(MARVELCOINlSo2jA.approveAndCall.call(addressEA3pBJ, uintf9W6IFL, byteXG501u1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintYtJBiim = BigInt("467")
		const stringhzODoAb = "EeoGK4TDSi9aPiP12owqJbMkz0BB06ru0Q9L2khPsfyKTtdV6jYH2lgHfep6XGJz3GfdwXxXSZDc3Rq3b2W"
		const stringAxZyUYZ = "S2gqNAoyIFTe55j1s9zIIpYsddieDmDsgHwDPfIiHoULPw5Bh3utynP3BITbTuxGbzsWre01ucIUudf"
		const MARVELCOINl37a63Z = await MARVELCOIN.new(uintYtJBiim, stringhzODoAb, stringAxZyUYZ, {from: accounts[5]});
		const uintzrszJz = BigInt("652")
		const uintigDXmT = BigInt("1919")
		const addressuWwINh4 = accounts[1]
		const uintVuYocvm = BigInt("690")
		const addressF3gZ3RA = accounts[4]
		const byteHs25J2M = "0x09150a1d18091d0c141317160810180207030f0119040005"
		const uintrjDbkOv = BigInt("1028")
		const addressmpCmPEL = accounts[4]
		const boolnfGavLJ = await MARVELCOINl37a63Z.burn.call(uintzrszJz, {from: accounts[5]});
//		const booldKzhjLO = await MARVELCOINl37a63Z.transfer.call(addressuWwINh4, uintigDXmT, {from: accounts[0]});
//		const boolXMUvldo = await MARVELCOINl37a63Z.transfer.call(addressF3gZ3RA, uintVuYocvm, {from: accounts[5]});
//		const boolsvnjFox = await MARVELCOINl37a63Z.approveAndCall.call(addressmpCmPEL, uintrjDbkOv, byteHs25J2M, {from: accounts[3]});

		assert.equal(boolnfGavLJ, true)
		await expect(MARVELCOINl37a63Z.transfer.call(addressuWwINh4, uintigDXmT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})