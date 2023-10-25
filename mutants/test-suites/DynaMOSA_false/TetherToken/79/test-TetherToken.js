const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintZ8oJ1AV = BigInt("1352")
		const stringBPj6jIK = "DgINkdEl1leKDIJ0C1RlgCykxkhWeRmPpTGJG3GdL"
		const string1jtOpm = "Lfb1uxrf01doJXl2x7L5p6VqSBWJbs5nGfd"
		const uintVkVMRsd = BigInt("565")
		const TetherTokenhNgAMX3 = await TetherToken.new(uintZ8oJ1AV, stringBPj6jIK, string1jtOpm, uintVkVMRsd, {from: accounts[3]});
		const uintLyAhFBD = BigInt("370")
		const addressHJilcG5 = "0x0000000000000000000000000000000000000001"
		const addressLjm4qUk = accounts[3]
		const addressfFQQgF5 = await TetherTokenhNgAMX3.approve.call(addressHJilcG5, uintLyAhFBD, {from: accounts[2]});
		const uintlWIi883 = await TetherTokenhNgAMX3.balanceOf.call(addressLjm4qUk, {from: accounts[1]});

		assert.equal(uintlWIi883, BigInt("1352"))
	});

	it('test for TetherToken', async () => {
		const uintL8OTRgU = BigInt("620")
		const stringxWAbDSL = "jSBot9AXNijRTgGyLxF5jh9PfNxz9LdFelymfP"
		const stringhi5LerB = "X8Oetg2X47Ubx"
		const uintE4craea = BigInt("1156")
		const TetherTokenlzxx0UL = await TetherToken.new(uintL8OTRgU, stringxWAbDSL, stringhi5LerB, uintE4craea, {from: accounts[5]});
		const addressMVxE2QZ = accounts[0]
		const addressXhb7lVA = accounts[1]
		const uintIHCITmN = BigInt("1501")
		const addressNZRS57y = accounts[1]
		const uintQGhLpIG = BigInt("145")
		const uintfSm9Rj1 = await TetherTokenlzxx0UL.allowance.call(addressXhb7lVA, addressMVxE2QZ, {from: accounts[4]});
//		const addressNubBnc = await TetherTokenlzxx0UL.transfer.call(addressNZRS57y, uintIHCITmN, {from: accounts[2]});
//		const uintbTPlp9z = await TetherTokenlzxx0UL.issue.call(uintQGhLpIG, {from: accounts[1]});

		assert.equal(uintfSm9Rj1, BigInt("0"))
		await expect(TetherTokenlzxx0UL.transfer.call(addressNZRS57y, uintIHCITmN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintJ3PlB45 = BigInt("310")
		const stringOJxKSRI = "xj9bzpco1ck6BKuvhgXYiHQsjW1S0VeWLknyIvgrVKIYM8nDWkmvkNnbiI6XpjDHf"
		const stringuorNbAV = "ktimKjeHY2s"
		const uintK50N0wx = BigInt("2030")
		const TetherTokenzlLGQl5 = await TetherToken.new(uintJ3PlB45, stringOJxKSRI, stringuorNbAV, uintK50N0wx, {from: accounts[0]});
		const uintx4G8gt = BigInt("544")
		const addressWSJFaJc = accounts[0]
		const addressjwhsBLP = accounts[0]
		const addressW9t7vqZ = accounts[2]
		const uintu0v0YFF = BigInt("897")
		const addressLYHYUTk = "0x0000000000000000000000000000000000000001"
		const uintHNgYlx1 = BigInt("1656")
		const addressXucTSF = accounts[4]
//		const addressr2z0A1O = await TetherTokenzlLGQl5.transferFrom.call(addressjwhsBLP, addressWSJFaJc, uintx4G8gt, {from: accounts[3]});
//		const uintJiYbNxq = await TetherTokenzlLGQl5.balanceOf.call(addressW9t7vqZ, {from: accounts[0]});
//		const addressDpmJNhS = await TetherTokenzlLGQl5.approve.call(addressLYHYUTk, uintu0v0YFF, {from: accounts[5]});
//		const uintqJbXzc = await TetherTokenzlLGQl5.redeem.call(uintHNgYlx1, {from: accounts[0]});
//		const uintaiS0l7v = await TetherTokenzlLGQl5.balanceOf.call(addressXucTSF, {from: accounts[0]});

		await expect(TetherTokenzlLGQl5.transferFrom.call(addressjwhsBLP, addressWSJFaJc, uintx4G8gt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintVnYIvOS = BigInt("520")
		const stringmq5Z9m4 = "6krRTo7h8fJARCUq4pfxBXXxjpTYOgsaagjFM"
		const stringxmLysvv = "enX2ZcnXCJkW9vESnLDCWXbvs71raLRqWu2YsvYuM6gPCiVkgdhbAgxDLqqO"
		const uintOr17OL = BigInt("1867")
		const TetherTokenrWVEpuO = await TetherToken.new(uintVnYIvOS, stringmq5Z9m4, stringxmLysvv, uintOr17OL, {from: accounts[4]});
		const uintJXpXmPL = BigInt("52")
		const uintjSPqmnd = BigInt("1916")
		const addressbXEwOSG = accounts[0]
		const addressKAl7B9o = accounts[4]
//		const uinteOp6PO9 = await TetherTokenrWVEpuO.issue.call(uintJXpXmPL, {from: accounts[2]});
//		const addressa0Rt2lg = await TetherTokenrWVEpuO.transferFrom.call(addressKAl7B9o, addressbXEwOSG, uintjSPqmnd, {from: accounts[2]});
//		const uintJMn9xhE = await TetherTokenrWVEpuO.totalSupply.call({from: accounts[1]});

		await expect(TetherTokenrWVEpuO.issue.call(uintJXpXmPL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintCmiF0yK = BigInt("1793")
		const stringi3xnZG = "wpnyeTylMquVAGIjfwYywRqG4PthNrSK0JAXzt"
		const stringyyb6fd5 = "0C3FFglknTvSvMd8EmBpqWHCo"
		const uintReFDy5i = BigInt("1463")
		const TetherTokenSIpMlZ4 = await TetherToken.new(uintCmiF0yK, stringi3xnZG, stringyyb6fd5, uintReFDy5i, {from: accounts[4]});
		const addressCju5rHP = accounts[4]
		const addressHyBCMHR = "0x0000000000000000000000000000000000000001"
		const uintiL6iz8U = BigInt("737")
		const addresstN8bgdw = accounts[3]
		const addressOHEwlJg = accounts[0]
		const uintVh7UdXJ = BigInt("1399")
		const addressHWHWqWJ = accounts[0]
		const addressam68Irh = accounts[1]
//		const addressqrnskZr = await TetherTokenSIpMlZ4.deprecate.call(addressCju5rHP, {from: accounts[3]});
//		const addressvLpgnlX = await TetherTokenSIpMlZ4.deprecate.call(addressHyBCMHR, {from: accounts[2]});
//		const address3CchTK = await TetherTokenSIpMlZ4.transferFrom.call(addressOHEwlJg, addresstN8bgdw, uintiL6iz8U, {from: accounts[1]});
//		const addressKd4rFzt = await TetherTokenSIpMlZ4.transfer.call(addressHWHWqWJ, uintVh7UdXJ, {from: accounts[3]});
//		const uintxkUScad = await TetherTokenSIpMlZ4.balanceOf.call(addressam68Irh, {from: accounts[1]});

		await expect(TetherTokenSIpMlZ4.deprecate.call(addressCju5rHP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintd0FvilL = BigInt("1933")
		const stringA4aLYKM = "4b"
		const stringgmb0fr = "hjB1QBky8aYXxfqyb0An28H1l45zcA4Q9ednllKRN8oTvsqi7nvYi"
		const uintMMySeKU = BigInt("788")
		const TetherTokenxFFoxdQ = await TetherToken.new(uintd0FvilL, stringA4aLYKM, stringgmb0fr, uintMMySeKU, {from: accounts[4]});
		const uintkfwExWV = BigInt("1987")
		const addresscEWCvSQ = accounts[1]
		const addressA9Iwlc = accounts[4]
		const addresskOB5JKQ = accounts[0]
		const addressIrb738j = accounts[3]
//		const uintUulos1f = await TetherTokenxFFoxdQ.redeem.call(uintkfwExWV, {from: accounts[3]});
//		const uintjLBBr8W = await TetherTokenxFFoxdQ.balanceOf.call(addresscEWCvSQ, {from: accounts[0]});
//		const uintnQuAzZM = await TetherTokenxFFoxdQ.balanceOf.call(addressA9Iwlc, {from: accounts[0]});
//		const uintGSBSPxn = await TetherTokenxFFoxdQ.totalSupply.call({from: accounts[4]});
//		const uintKSQ907Q = await TetherTokenxFFoxdQ.allowance.call(addressIrb738j, addresskOB5JKQ, {from: accounts[4]});

		await expect(TetherTokenxFFoxdQ.redeem.call(uintkfwExWV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintWg24OQ4 = BigInt("979")
		const string1aSTGc = "WCgOdOP8YBPs4Cq8ld"
		const stringcHi5qS5 = "2pi8rnV8ekElkeILvM5dkrL1TLWYMiyfPgEzIw948M3i3JWfxMoINzVXBHb9o9jxgaqWwmHtPBuCsmr55"
		const uintYlz7i6o = BigInt("181")
		const TetherTokenef2dsn2 = await TetherToken.new(uintWg24OQ4, string1aSTGc, stringcHi5qS5, uintYlz7i6o, {from: accounts[2]});
		const uintuCUNHH = BigInt("226")
		const uintBRHo7lO = BigInt("193")
		const uintFavf57f = BigInt("928")
		const uintxh2NKmz = BigInt("1946")
		const addressySYtY3 = accounts[5]
		const addressUJsCjfg = accounts[4]
		const uints4pD4Q = BigInt("1372")
		const addressW00or8k = accounts[3]
		const addressSJgvKyA = accounts[1]
		const uintfoEpuaL = BigInt("930")
		const addressi3J557D = accounts[0]
		const addressWYpHkkC = accounts[3]
		const uintO7GU7NL = await TetherTokenef2dsn2.issue.call(uintuCUNHH, {from: accounts[2]});
//		const uintZpu5n0C = await TetherTokenef2dsn2.setParams.call(uintFavf57f, uintBRHo7lO, {from: accounts[4]});
//		const addressQhcfZbu = await TetherTokenef2dsn2.transferFrom.call(addressUJsCjfg, addressySYtY3, uintxh2NKmz, {from: accounts[2]});
//		const addresskDdLd0b = await TetherTokenef2dsn2.transferFrom.call(addressSJgvKyA, addressW00or8k, uints4pD4Q, {from: accounts[4]});
//		const addressOg9qrsI = await TetherTokenef2dsn2.transferFrom.call(addressWYpHkkC, addressi3J557D, uintfoEpuaL, {from: accounts[3]});

		await expect(TetherTokenef2dsn2.setParams.call(uintFavf57f, uintBRHo7lO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintbZVKE6 = BigInt("1765")
		const stringyV8KKqG = "w7CtdsN7Vt1quDGTWPIdKg3TSJgDc3"
		const stringkDtqoEP = "i8Tr3dM5KPeg3Mj9kGQ8IDwumsBHVOzF23VJXKlnbhjkRuCbDcLtBJhATAU53j7kVzuLRXf789eiJK"
		const uintI2zasqC = BigInt("1721")
		const TetherTokenCrgiWg = await TetherToken.new(uintbZVKE6, stringyV8KKqG, stringkDtqoEP, uintI2zasqC, {from: "0x0000000000000000000000000000000000000001"});
		const addressQlVpXJm = accounts[1]
		const addressdHpdugQ = accounts[2]
		const addressLw0wlNv = accounts[3]
		const addressLgSgNMH = "0x0000000000000000000000000000000000000001"
		const uintFADEX2D = await TetherTokenCrgiWg.allowance.call(addressdHpdugQ, addressQlVpXJm, {from: accounts[3]});
		const addressQRVS9x4 = await TetherTokenCrgiWg.deprecate.call(addressLw0wlNv, {from: accounts[3]});
		const addressbXm4bOW = await TetherTokenCrgiWg.deprecate.call(addressLgSgNMH, {from: accounts[2]});
		const uintchnmyor = await TetherTokenCrgiWg.totalSupply.call({from: accounts[0]});
	});

	it('test for TetherToken', async () => {
		const uintep1xDcq = BigInt("1352")
		const stringBPj6jIK = "DgINkdEl1leKDIJ0C1RlgCykxkhWeRmPpTGJG3GdL"
		const string1jtOpm = "Lfb1uxrf01doJXl2x7L5p6VqSBWJbs5nGfd"
		const uintbw618tj = BigInt("565")
		const TetherTokenhNgAMX3 = await TetherToken.new(uintep1xDcq, stringBPj6jIK, string1jtOpm, uintbw618tj, {from: accounts[3]});
		const uintK7fh2oG = BigInt("370")
		const addressMX5NSZu = "0x0000000000000000000000000000000000000001"
		const addressaH7kaUJ = accounts[1]
		const addressyJ1DE4T = accounts[3]
		const addressfFQQgF5 = await TetherTokenhNgAMX3.approve.call(addressMX5NSZu, uintK7fh2oG, {from: accounts[2]});
		const uinteAzBVw3 = await TetherTokenhNgAMX3.balanceOf.call(addressaH7kaUJ, {from: accounts[1]});
		const uintlWIi883 = await TetherTokenhNgAMX3.balanceOf.call(addressyJ1DE4T, {from: accounts[1]});
		const uintxLJ7ZbO = await TetherTokenhNgAMX3.totalSupply.call({from: accounts[2]});

		assert.equal(uinteAzBVw3, BigInt("0"))
		assert.equal(uintlWIi883, BigInt("1352"))
		assert.equal(uintxLJ7ZbO, BigInt("1352"))
	});
})