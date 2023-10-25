const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintZKWepLm = BigInt("177")
		const stringQ0Djbj = "uCXDWcr9O5UoTTHmnmpeUApeCzVTAbKjFsctCuG4fKD4WWpnGHfBCB3BPGWCY3CcKhH"
		const stringxCqmjmg = "bML4ASuL"
		const INSDhPQ4ZN = await INS.new(uintZKWepLm, stringQ0Djbj, stringxCqmjmg, {from: accounts[1]});
		const uintlQrMG3b = BigInt("472")
		const uintIHq0oby = BigInt("548")
		const addressrHSeAYk = accounts[3]
		const uinta1vWBc = BigInt("614")
		const addressekESGf = accounts[4]
		const uintiR1SrBt = BigInt("712")
		const addressJgTqarm = accounts[4]
		const uintlPnUvem = BigInt("1460")
//		const boolkTtcD8 = await INSDhPQ4ZN.burn.call(uintlQrMG3b, {from: accounts[0]});
//		const boolbQ9jekI = await INSDhPQ4ZN.approve.call(addressrHSeAYk, uintIHq0oby, {from: accounts[5]});
//		const boolq0QrO1z = await INSDhPQ4ZN.approve.call(addressekESGf, uinta1vWBc, {from: accounts[4]});
//		const boolFkKuEl0 = await INSDhPQ4ZN.transfer.call(addressJgTqarm, uintiR1SrBt, {from: accounts[3]});
//		const boolzGonBnR = await INSDhPQ4ZN.burn.call(uintlPnUvem, {from: accounts[2]});

		await expect(INSDhPQ4ZN.burn.call(uintlQrMG3b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintWdxCltE = BigInt("178")
		const stringZl8srAn = "sFMTfFkHEOheEv1nePFh7BNmMxltN7GR5ZcdrnWPxPjllQvO7rJA"
		const stringncJJCG0 = "qlDhrMmByHEViiRpvaBBsGx8RBfgHasBQ45Fsgnw1Udqc7hwRxcnaIUj4ooAjbIHqi01EZvWMQ3G5o1dKIQlN"
		const INSDypRiry = await INS.new(uintWdxCltE, stringZl8srAn, stringncJJCG0, {from: accounts[4]});
		const uintuyME5Y = BigInt("63")
		const addressYZvdxNA = accounts[1]
		const addressbXP2nng = accounts[1]
		const uintLwmkAp5 = BigInt("980")
		const addressoeEMVx = accounts[5]
//		const booln1lagoI = await INSDypRiry.transferFrom.call(addressbXP2nng, addressYZvdxNA, uintuyME5Y, {from: "0x0000000000000000000000000000000000000001"});
//		const boolL2yXHGH = await INSDypRiry.approve.call(addressoeEMVx, uintLwmkAp5, {from: accounts[1]});

		await expect(INSDypRiry.transferFrom.call(addressbXP2nng, addressYZvdxNA, uintuyME5Y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintnL4DZsF = BigInt("1463")
		const stringZne4Otz = "dmVeqwBYCtxpBsUfDK1cpsYNDqqyGm22SjUF1MKw3eJmDj8bJADY7fSKWkm6I0N1Q8"
		const stringDFEub6k = "RhH8rD2Ijaf1uOAin6yw1NoqPik843UUvl2alzttbFVeB6"
		const INSG5yfyN = await INS.new(uintnL4DZsF, stringZne4Otz, stringDFEub6k, {from: accounts[0]});
		const uintZgOT8ig = BigInt("1894")
		const addressNWK1HdB = "0x0000000000000000000000000000000000000001"
		const uintND0xpRY = BigInt("1854")
		const addressQ4Qse7l = accounts[0]
		const uintsXeepi6 = BigInt("386")
		const uintzIdxsow = BigInt("88")
		const addressYpkXwiq = accounts[1]
		const boolT88tHC9 = await INSG5yfyN.approve.call(addressNWK1HdB, uintZgOT8ig, {from: "0x0000000000000000000000000000000000000001"});
//		const bool9W7uqN = await INSG5yfyN.transfer.call(addressQ4Qse7l, uintND0xpRY, {from: accounts[4]});
//		const boolXV6mm5A = await INSG5yfyN.burn.call(uintsXeepi6, {from: accounts[4]});
//		const boolMT0WOv = await INSG5yfyN.approve.call(addressYpkXwiq, uintzIdxsow, {from: accounts[1]});

		assert.equal(boolT88tHC9, true)
		await expect(INSG5yfyN.transfer.call(addressQ4Qse7l, uintND0xpRY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintW3MUWIb = BigInt("1188")
		const stringeSwJZSH = "ya2aSLG5DgseMJqz0b2PhKGIRtpX18C3bvYFTjrwjK6nvQ8pSVkZpL3fBHrLVjxkItfMYoXjZxUrzd1zjkdMpeBx2BNeRZCvcP"
		const stringiFxRMaO = "WTlIWo7MrULEWiFV7SHSCKCq91axhPWKt4Vi72MMUJbqwUd7o9eq8mmlWthRM6JQcvUNJDgxMq3CPRsdFpp1aEFaDbN1Ia5s"
		const INScumocx = await INS.new(uintW3MUWIb, stringeSwJZSH, stringiFxRMaO, {from: accounts[0]});
		const byteWVOZoEN = "0x0b011220"
		const uintrmuYRh = BigInt("835")
		const addressZpjkuAs = accounts[2]
		const uintzizcnDs = BigInt("1901")
		const addressHgVT74x = accounts[4]
		const uintePkHv7e = BigInt("86")
//		const boolCmO7rF = await INScumocx.approveAndCall.call(addressZpjkuAs, uintrmuYRh, byteWVOZoEN, {from: accounts[0]});
//		const boolb1sRxdF = await INScumocx.burnFrom.call(addressHgVT74x, uintzizcnDs, {from: accounts[2]});
//		const boolpJxB501 = await INScumocx.burn.call(uintePkHv7e, {from: accounts[1]});

		await expect(INScumocx.approveAndCall.call(addressZpjkuAs, uintrmuYRh, byteWVOZoEN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintcKN68D = BigInt("99")
		const stringjJbLDDG = "F6Zx8fkFZBbDL9x71DGgqfWwv8D9HvtAfSRY9MxFCysgGEdNu1WcgPw81XAQjYmpe6iALBVJsOQP8JYVTVDlj32k1yQkQGVYhp"
		const stringEWRElC0 = "EHRHtVYxVA8Vvs41ZBb"
		const INSUdMr4p5 = await INS.new(uintcKN68D, stringjJbLDDG, stringEWRElC0, {from: accounts[1]});
		const uintRFwhlj2 = BigInt("299")
		const address3TNoZn = accounts[5]
		const uintRKR3a7g = BigInt("568")
		const addressuTJpgKu = accounts[5]
		const addressdmD6bEk = accounts[0]
		const uintlXeHk3G = BigInt("932")
		const byteUX5WNay = "0x030414110f090e120710010b0814010d1c1a1618"
		const uintMe8HN36 = BigInt("721")
		const addressq2GhV0B = accounts[4]
//		const boolspbh89 = await INSUdMr4p5.burnFrom.call(address3TNoZn, uintRFwhlj2, {from: accounts[1]});
//		const boolAiDIhTb = await INSUdMr4p5.transferFrom.call(addressdmD6bEk, addressuTJpgKu, uintRKR3a7g, {from: accounts[5]});
//		const boolcnyvUm = await INSUdMr4p5.burn.call(uintlXeHk3G, {from: accounts[4]});
//		const boolhEgdCv0 = await INSUdMr4p5.approveAndCall.call(addressq2GhV0B, uintMe8HN36, byteUX5WNay, {from: accounts[1]});

		await expect(INSUdMr4p5.burnFrom.call(address3TNoZn, uintRFwhlj2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintENCvV6 = BigInt("178")
		const stringZl8srAn = "sFMTfFkHEOheEv1nePFh7BNmMxltN7GR5ZcdrnWPxPjllQvO7rJA"
		const stringncJJCG0 = "qlDhrMmByHEViiRpvaBBsGx8RBfgHasBQ45Fsgnw1Udqc7hwRxcnaIUj4ooAjbIHqi01EZvWMQ3G5o1dKIQlN"
		const INSDypRiry = await INS.new(uintENCvV6, stringZl8srAn, stringncJJCG0, {from: accounts[4]});
		const uintQqefGwJ = BigInt("1440")
		const uinta4wbzo9 = BigInt("65")
		const address55UaW8 = accounts[1]
		const addressc120J9g = accounts[1]
		const boolUNrBlrS = await INSDypRiry.burn.call(uintQqefGwJ, {from: accounts[4]});
//		const booln1lagoI = await INSDypRiry.transferFrom.call(addressc120J9g, address55UaW8, uinta4wbzo9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUNrBlrS, true)
		await expect(INSDypRiry.transferFrom.call(addressc120J9g, address55UaW8, uinta4wbzo9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinti6BX5sT = BigInt("178")
		const stringZl8srAn = "sFMTfFkHEOheEv1nePFh7BNmMxltN7GR5ZcdrnWPxPjllQvO7rJA"
		const stringncJJCG0 = "qlDhrMmByHEViiRpvaBBsGx8RBfgHasBQ45Fsgnw1Udqc7hwRxcnaIUj4ooAjbIHqi01EZvWMQ3G5o1dKIQlN"
		const INSDypRiry = await INS.new(uinti6BX5sT, stringZl8srAn, stringncJJCG0, {from: accounts[4]});
		const uintCcRlJ6 = BigInt("278")
		const addressmMZVxN = accounts[4]
		const uintn0BxrrT = BigInt("1083")
		const uintzM7WWgT = BigInt("128")
//		const boolmU6x3vB = await INSDypRiry.burnFrom.call(addressmMZVxN, uintCcRlJ6, {from: "0x0000000000000000000000000000000000000001"});
//		const boolg3JvNNF = await INSDypRiry.burn.call(uintn0BxrrT, {from: accounts[4]});
//		const boolE79QJcS = await INSDypRiry.burn.call(uintzM7WWgT, {from: accounts[3]});

		await expect(INSDypRiry.burnFrom.call(addressmMZVxN, uintCcRlJ6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintcncYXut = BigInt("178")
		const stringZl8srAn = "sFMTfFkHEOheEv1nePFh7BNmMxltN7GR5ZcdrnWPxPjllQvO7rJA"
		const stringncJJCG0 = "qlDhrMmByHEViiRpvaBBsGx8RBfgHasBQ45Fsgnw1Udqc7hwRxcnaIUj4ooAjbIHqi01EZvWMQ3G5o1dKIQlN"
		const INSDypRiry = await INS.new(uintcncYXut, stringZl8srAn, stringncJJCG0, {from: accounts[4]});
		const uinthjSZxfF = BigInt("140")
		const addressmbGJ7fm = "0x0000000000000000000000000000000000000001"
		const uintoHvh3Lk = BigInt("63")
		const addressOsIFWts = accounts[2]
		const addressgwaIbdM = accounts[1]
		const boolSSElA1 = await INSDypRiry.transfer.call(addressmbGJ7fm, uinthjSZxfF, {from: accounts[4]});
//		const booln1lagoI = await INSDypRiry.transferFrom.call(addressgwaIbdM, addressOsIFWts, uintoHvh3Lk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolSSElA1, true)
		await expect(INSDypRiry.transferFrom.call(addressgwaIbdM, addressOsIFWts, uintoHvh3Lk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintvqqyOZ = BigInt("1191")
		const stringPo5tvjj = "CYXRrBLEEdBjDVNc7iJc2McTGrgCqZdxGK31L3JVtG3TaEUwQyc58PGv6xjdojBK9RxgeH5SzkLOvYRlYVzJAKmo"
		const stringFBDwKQd = "RgYjkK8CncmKkh2wwtQQEgATFGGy"
		const INSyG1D7Kw = await INS.new(uintvqqyOZ, stringPo5tvjj, stringFBDwKQd, {from: "0x0000000000000000000000000000000000000001"});
		const uintlJnF6uf = BigInt("1939")
		const addressIef6qVb = accounts[0]
		const addressJvUV8k1 = accounts[2]
		const byteYYQ04mf = "0x161611140d19011e"
		const uintFEfpKk9 = BigInt("840")
		const addresstsp7rk3 = accounts[1]
		const boolubMTNFL = await INSyG1D7Kw.transferFrom.call(addressJvUV8k1, addressIef6qVb, uintlJnF6uf, {from: "0x0000000000000000000000000000000000000001"});
		const boolw7EDoAv = await INSyG1D7Kw.approveAndCall.call(addresstsp7rk3, uintFEfpKk9, byteYYQ04mf, {from: accounts[4]});
	});
})