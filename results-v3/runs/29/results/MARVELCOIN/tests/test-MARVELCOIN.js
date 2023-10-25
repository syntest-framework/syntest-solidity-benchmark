const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintwJmcAcl = BigInt("1947")
		const stringUZroDU = "bFUiH9HvGR9X7gPIiGJuiQWByo98zzRif46XvwCYsOFwex9IbM3mwOSMbdxUbW"
		const stringmE6y6Dt = "gvHRyjxBOhB8cwtzFHlFcFuW5sN4UPKlY61kq0rFhOwB4zu6CIUjZuPDX"
		const MARVELCOINHSiXSZI = await MARVELCOIN.new(uintwJmcAcl, stringUZroDU, stringmE6y6Dt, {from: accounts[2]});
		const uintFlUjt22 = BigInt("1667")
		const uintkMKbo6M = BigInt("1220")
		const uintYSQzFhe = BigInt("271")
		const addressRnevxq7 = accounts[2]
		const addressJg8m1jd = accounts[2]
		const boolPnZl8ro = await MARVELCOINHSiXSZI.burn.call(uintFlUjt22, {from: accounts[2]});
		const boolqpMlQxQ = await MARVELCOINHSiXSZI.burn.call(uintkMKbo6M, {from: accounts[3]});
		const boolZ281oBn = await MARVELCOINHSiXSZI.transferFrom.call(addressJg8m1jd, addressRnevxq7, uintYSQzFhe, {from: accounts[4]});

		assert.equal(boolPnZl8ro, true)
		await expect(MARVELCOINHSiXSZI.burn.call(uintkMKbo6M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintA3okElM = BigInt("438")
		const stringFJsmiow = "ymqBIRHtnO"
		const stringGAGUmad = "tRD7X3QfjeQyDWV1VIpOmCDqbL8nEH"
		const MARVELCOINW40xOjn = await MARVELCOIN.new(uintA3okElM, stringFJsmiow, stringGAGUmad, {from: accounts[5]});
		const uintsm1pnSN = BigInt("1795")
		const addressBr88u0l = accounts[3]
		const byteX0oU0in = "0x1b17130b19101c121a0d140b06"
		const uint60ZXM5 = BigInt("958")
		const addressf351Vs7 = accounts[3]
		const boolXUJxg1t = await MARVELCOINW40xOjn.approve.call(addressBr88u0l, uintsm1pnSN, {from: accounts[2]});
		const boolLsmMNGY = await MARVELCOINW40xOjn.approveAndCall.call(addressf351Vs7, uint60ZXM5, byteX0oU0in, {from: accounts[0]});

		assert.equal(boolXUJxg1t, true)
		await expect(MARVELCOINW40xOjn.approveAndCall.call(addressf351Vs7, uint60ZXM5, byteX0oU0in, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uinttHFnjIj = BigInt("1575")
		const stringKdaxPBK = "r1GUvUXaCjPMGcPwMsqvParsRtYisl3a7DMhzBFk61319TQvShxXj"
		const stringpx4ryR = "ieiTLeoJccuT4D1MiP2v6u4TuN6XGcCFt3q7sRUPP"
		const MARVELCOINZ4Ou0ul = await MARVELCOIN.new(uinttHFnjIj, stringKdaxPBK, stringpx4ryR, {from: accounts[3]});
		const uintMElCSJH = BigInt("1945")
		const addressXKQmMsH = accounts[2]
		const uintMKmceW9 = BigInt("1683")
		const addressSFfpb4s = accounts[1]
		const uintMJh2EKl = BigInt("1897")
		const addresskXnELxo = accounts[1]
		const byteuUnmMM5 = "0x05"
		const uintAMQQ64n = BigInt("1715")
		const addressZf7MA8B = "0x0000000000000000000000000000000000000001"
		const uintj35FjRM = BigInt("1065")
		const bool8fMG2n = await MARVELCOINZ4Ou0ul.approve.call(addressXKQmMsH, uintMElCSJH, {from: accounts[5]});
		const boolfy4kBnO = await MARVELCOINZ4Ou0ul.transfer.call(addressSFfpb4s, uintMKmceW9, {from: accounts[3]});
		const boolmrfpAsV = await MARVELCOINZ4Ou0ul.burnFrom.call(addresskXnELxo, uintMJh2EKl, {from: "0x0000000000000000000000000000000000000001"});
		const boolVSo5ADv = await MARVELCOINZ4Ou0ul.approveAndCall.call(addressZf7MA8B, uintAMQQ64n, byteuUnmMM5, {from: accounts[5]});
		const boolxVy0vSn = await MARVELCOINZ4Ou0ul.burn.call(uintj35FjRM, {from: accounts[3]});

		assert.equal(bool8fMG2n, true)
		assert.equal(boolfy4kBnO, true)
		await expect(MARVELCOINZ4Ou0ul.burnFrom.call(addresskXnELxo, uintMJh2EKl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintkxodI0N = BigInt("307")
		const stringESVfI08 = "9Q1yjAF1gVugNzywKdSydK"
		const stringLiX1MjM = "6kuhWApHsgM7b5NQlehJ8pJrnbKragvx1BcPJR26ryc9BoeDYp8PYYa5TDGNCgWKEsmj"
		const MARVELCOINYcaWk9Z = await MARVELCOIN.new(uintkxodI0N, stringESVfI08, stringLiX1MjM, {from: accounts[4]});
		const uintgtrlxOX = BigInt("1601")
		const address4lfi1R = "0x0000000000000000000000000000000000000001"
		const addressntbvVk = accounts[3]
		const uintHi0gWtu = BigInt("1599")
		const addresszoiCoFZ = accounts[2]
		const addressv9JfLQ = accounts[3]
		const boolt9rW04s = await MARVELCOINYcaWk9Z.transferFrom.call(addressntbvVk, address4lfi1R, uintgtrlxOX, {from: accounts[1]});
		const boolTi42O4P = await MARVELCOINYcaWk9Z.transferFrom.call(addressv9JfLQ, addresszoiCoFZ, uintHi0gWtu, {from: accounts[0]});

		await expect(MARVELCOINYcaWk9Z.transferFrom.call(addressntbvVk, address4lfi1R, uintgtrlxOX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintWKeynI = BigInt("307")
		const stringESVfI08 = "9Q1yjAF1gVugNzywKdSydK"
		const stringLiX1MjM = "6kuhWApHsgM7b5NQlehJ8pJrnbKragvx1BcPJR26ryc9BoeDYp8PYYa5TDGNCgWKEsmj"
		const MARVELCOINYcaWk9Z = await MARVELCOIN.new(uintWKeynI, stringESVfI08, stringLiX1MjM, {from: accounts[4]});
		const uintR9t7jOr = BigInt("262")
		const addresslqOsddS = accounts[4]
		const uintjU2Z4T1 = BigInt("1398")
		const addressz80q5Cm = accounts[3]
		const boolrtt8Z0f = await MARVELCOINYcaWk9Z.burnFrom.call(addresslqOsddS, uintR9t7jOr, {from: accounts[5]});
		const boolzRjLxQP = await MARVELCOINYcaWk9Z.burnFrom.call(addressz80q5Cm, uintjU2Z4T1, {from: accounts[5]});

		await expect(MARVELCOINYcaWk9Z.burnFrom.call(addresslqOsddS, uintR9t7jOr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintRLz0A6I = BigInt("1194")
		const stringby7i6e7 = "s1xpbwusYyuUOUwMzsAR5CP2e4Q7nQhKFIympir8LgQRpDJJVMTA"
		const stringudMx2ya = "UKfwxfdM072RVOqB3nju2D7I0YkJ0m6UqbK"
		const MARVELCOINXXTQMm = await MARVELCOIN.new(uintRLz0A6I, stringby7i6e7, stringudMx2ya, {from: "0x0000000000000000000000000000000000000001"});
		const byteIfvsVmU = "0x1a1a020d1112020c171d000a0102101600"
		const uintdj6JAY9 = BigInt("485")
		const addressZkUYIlX = accounts[3]
		const uintEkx19XK = BigInt("217")
		const addresscTeVYDI = accounts[1]
		const bytelGhW22W = "0x110c10120c12020a1a0e1c02041b161111021117"
		const uinthBLG7Lb = BigInt("1727")
		const addressMsKz1Hz = accounts[3]
		const uintKeYRgrt = BigInt("334")
		const boolr4onIwP = await MARVELCOINXXTQMm.approveAndCall.call(addressZkUYIlX, uintdj6JAY9, byteIfvsVmU, {from: accounts[4]});
		const boolp4Raupt = await MARVELCOINXXTQMm.burnFrom.call(addresscTeVYDI, uintEkx19XK, {from: accounts[4]});
		const boolJkCJYzf = await MARVELCOINXXTQMm.approveAndCall.call(addressMsKz1Hz, uinthBLG7Lb, bytelGhW22W, {from: accounts[1]});
		const boolZhDdjUl = await MARVELCOINXXTQMm.burn.call(uintKeYRgrt, {from: accounts[1]});
	});
})