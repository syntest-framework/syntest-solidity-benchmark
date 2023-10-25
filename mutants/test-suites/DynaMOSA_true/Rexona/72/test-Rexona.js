const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringS2OOGAa = "6dqu8gdzFW3q43CnDX4Oko3Z5tvKEY6VqxR6pnnOlFY9zG3CfWmKSOJOF0FuysV2em24NfG"
		const stringTi9MAgJ = "l1hfehqy8d5thvwnGYfieuD7whGXiCfLt9JeamBNKOA4ULClHwDrAuVe2cAlqdl3U1UszW6Qlq5pGLwg"
		const uintmYQQYp = BigInt("817")
		const RexonaA0NUOtQ = await Rexona.new(stringS2OOGAa, stringTi9MAgJ, uintmYQQYp, {from: accounts[2]});
		const uintGpSMkdm = BigInt("1190")
		const addresseZz1yU = accounts[4]
		const uintCzZaQl = BigInt("962")
		const addressvPfrYV = accounts[5]
		const uintA3P9ylN = BigInt("2020")
		const addressIoZqKcU = accounts[1]
		const addressCJ1mqjs = accounts[4]
		const uintbRKZkWy = BigInt("682")
		const addressfsTJRv = accounts[0]
		const addresssNyW7XL = "0x0000000000000000000000000000000000000001"
//		const boolIiDExB = await RexonaA0NUOtQ.approveAndCall.call(addresseZz1yU, uintGpSMkdm, {from: accounts[1]});
//		const boolZShfIzb = await RexonaA0NUOtQ.approveAndCall.call(addressvPfrYV, uintCzZaQl, {from: accounts[3]});
//		const boolgTcsFDP = await RexonaA0NUOtQ.transferFrom.call(addressCJ1mqjs, addressIoZqKcU, uintA3P9ylN, {from: accounts[3]});
//		const boolPURSid = await RexonaA0NUOtQ.approveAndCall.call(addressfsTJRv, uintbRKZkWy, {from: accounts[0]});
//		const boolVNE6NS = await RexonaA0NUOtQ.transferownership.call(addresssNyW7XL, {from: accounts[4]});

		await expect(RexonaA0NUOtQ.approveAndCall.call(addresseZz1yU, uintGpSMkdm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringQD3gocb = "VxVo03lDeAz"
		const stringBKR8hKn = "WTyRgvvklmhsIbqHEJzfwb2snQsYbpQhhzrLF5GnaTMt0U1BSjgL81Sycl58SdNxLVo6vKDVbqIqkPNiFdiB"
		const uinta1Tp6h2 = BigInt("1332")
		const RexonaYHgswg8 = await Rexona.new(stringQD3gocb, stringBKR8hKn, uinta1Tp6h2, {from: accounts[4]});
		const uintRlz94Qk = BigInt("1766")
		const addressR3JY9hn = accounts[2]
		const addressicMCnsp = accounts[5]
		const uintrBUvXjl = BigInt("433")
		const addressO6MsGIP = accounts[1]
		const addressAQp2Xk8 = accounts[4]
		const uintSd8IHSg = BigInt("1748")
		const addressPmqtjN = accounts[5]
		const uintcp6Ul8J = BigInt("939")
		const addresso5h95pw = accounts[0]
		const uintQvgulrV = BigInt("374")
		const addresssPLleqP = accounts[5]
//		const boolkYBMmSm = await RexonaYHgswg8.transferFrom.call(addressicMCnsp, addressR3JY9hn, uintRlz94Qk, {from: accounts[0]});
//		const boolpEAj50 = await RexonaYHgswg8.transferFrom.call(addressAQp2Xk8, addressO6MsGIP, uintrBUvXjl, {from: accounts[0]});
//		const boolYDlhspA = await RexonaYHgswg8.approve.call(addressPmqtjN, uintSd8IHSg, {from: accounts[1]});
//		const boolaqjtwe2 = await RexonaYHgswg8.transfer.call(addresso5h95pw, uintcp6Ul8J, {from: accounts[2]});
//		const boolIwnQgpl = await RexonaYHgswg8.approve.call(addresssPLleqP, uintQvgulrV, {from: accounts[0]});

		await expect(RexonaYHgswg8.transferFrom.call(addressicMCnsp, addressR3JY9hn, uintRlz94Qk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const string7aosRN = "ZqbZMVwS0tkK3kPDaxjzUYFCU5Qszby5rvYiN8Xd7UVqpCOqzoGuG"
		const stringUzwT5N2 = "TUQ5HQlrOrW0N4F0IaklTf2VfG"
		const uintuBzgkY3 = BigInt("851")
		const Rexonahtci5BR = await Rexona.new(string7aosRN, stringUzwT5N2, uintuBzgkY3, {from: accounts[4]});
		const uintBi3RHTI = BigInt("1219")
		const addressP5yHh6S = accounts[3]
		const addressBxaug0y = accounts[0]
		const uintUTYYwvh = BigInt("693")
		const addressY340fGd = accounts[1]
		const uintqRK2klY = BigInt("130")
		const addressWVrJ33y = accounts[4]
		const uinta5LSkB = BigInt("402")
		const addressnGMW0jK = accounts[1]
		const boolwuo9hZH = await Rexonahtci5BR.approve.call(addressP5yHh6S, uintBi3RHTI, {from: accounts[2]});
//		const boolwp2iKKQ = await Rexonahtci5BR.transferownership.call(addressBxaug0y, {from: accounts[3]});
//		const boolGu2naRl = await Rexonahtci5BR.approveAndCall.call(addressY340fGd, uintUTYYwvh, {from: accounts[5]});
//		const boolLZJJdxS = await Rexonahtci5BR.approve.call(addressWVrJ33y, uintqRK2klY, {from: accounts[4]});
//		const boolKIi0Cy3 = await Rexonahtci5BR.approveAndCall.call(addressnGMW0jK, uinta5LSkB, {from: accounts[5]});

		assert.equal(boolwuo9hZH, true)
		await expect(Rexonahtci5BR.transferownership.call(addressBxaug0y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringkKygjVy = "gbkCn8c7vuYwKOodej9Q"
		const stringoi4Eoe = "lveaXQGFOJL46OfjncWDtiODOnwedtLzCBP55FmmGdjm9pBE1nRuLStAYzWmucALhC5unvf0qJvvj"
		const uintoxRlb5i = BigInt("872")
		const RexonaGa71MOA = await Rexona.new(stringkKygjVy, stringoi4Eoe, uintoxRlb5i, {from: "0x0000000000000000000000000000000000000001"});
		const uintVpgUjAi = BigInt("1276")
		const addressjE4ydGn = accounts[2]
		const uintwal3Q6Y = BigInt("477")
		const addressWHjF3p = accounts[3]
		const uintsGYGKT0 = BigInt("329")
		const addressmhs055M = accounts[3]
		const addressnljkU8K = accounts[0]
		const uintnoVHgRC = BigInt("126")
		const addressF1h6KVn = accounts[5]
		const uintQsslH14 = BigInt("210")
		const addressf4E55yX = accounts[1]
		const uinth7ygEen = BigInt("298")
		const addressmPEjUk8 = accounts[0]
		const boolGCne3i5 = await RexonaGa71MOA.approve.call(addressjE4ydGn, uintVpgUjAi, {from: "0x0000000000000000000000000000000000000001"});
		const boolxZyHcYR = await RexonaGa71MOA.approveAndCall.call(addressWHjF3p, uintwal3Q6Y, {from: accounts[3]});
		const boolye0nWd = await RexonaGa71MOA.transferFrom.call(addressnljkU8K, addressmhs055M, uintsGYGKT0, {from: "0x0000000000000000000000000000000000000001"});
		const boolTQuuS2Z = await RexonaGa71MOA.approve.call(addressF1h6KVn, uintnoVHgRC, {from: accounts[2]});
		const boolu3gMDHG = await RexonaGa71MOA.transfer.call(addressf4E55yX, uintQsslH14, {from: accounts[0]});
		const boolZpfdH1c = await RexonaGa71MOA.approveAndCall.call(addressmPEjUk8, uinth7ygEen, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const string7aosRN = "ZqbZMVwS0tkK3kPDaxjzUYFCU5Qszby5rvYiN8Xd7UVqpCOqzoGuG"
		const stringUzwT5N2 = "TUQ5HQlrOrW0N4F0IaklTf2VfG"
		const uintWJcqLba = BigInt("851")
		const Rexonahtci5BR = await Rexona.new(string7aosRN, stringUzwT5N2, uintWJcqLba, {from: accounts[4]});
		const uintPwTKRGs = BigInt("1219")
		const addressqvp7m6W = accounts[3]
		const uint5lV7fM = BigInt("525")
		const addressuCO2Mzn = accounts[0]
		const uintzCMkYM = BigInt("861")
		const addressqhKzKQd = accounts[2]
		const addressQOBjquZ = accounts[4]
		const addresskZC2M48 = accounts[0]
		const uintDKOThVI = BigInt("693")
		const addresszz33i3 = accounts[2]
		const uintSut3FMf = BigInt("130")
		const addressoZRGHG1 = accounts[4]
		const uintcIb0kcF = BigInt("661")
		const addressNTPbgXP = accounts[4]
		const uintHgwCBpb = BigInt("402")
		const addressmA1a6QJ = accounts[1]
		const boolwuo9hZH = await Rexonahtci5BR.approve.call(addressqvp7m6W, uintPwTKRGs, {from: accounts[2]});
		const booli0sJGHR = await Rexonahtci5BR.approveAndCall.call(addressuCO2Mzn, uint5lV7fM, {from: accounts[4]});
//		const boolecMAgJn = await Rexonahtci5BR.transferFrom.call(addressQOBjquZ, addressqhKzKQd, uintzCMkYM, {from: accounts[2]});
//		const boolwp2iKKQ = await Rexonahtci5BR.transferownership.call(addresskZC2M48, {from: accounts[3]});
//		const boolGu2naRl = await Rexonahtci5BR.approveAndCall.call(addresszz33i3, uintDKOThVI, {from: accounts[5]});
//		const boolLZJJdxS = await Rexonahtci5BR.approve.call(addressoZRGHG1, uintSut3FMf, {from: accounts[4]});
//		const boolRzIFXv6 = await Rexonahtci5BR.transfer.call(addressNTPbgXP, uintcIb0kcF, {from: accounts[3]});
//		const boolKIi0Cy3 = await Rexonahtci5BR.approveAndCall.call(addressmA1a6QJ, uintHgwCBpb, {from: accounts[5]});

		assert.equal(booli0sJGHR, true)
		assert.equal(boolwuo9hZH, true)
		await expect(Rexonahtci5BR.transferFrom.call(addressQOBjquZ, addressqhKzKQd, uintzCMkYM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringKrZ0vVI = "5qJfniPMVSiFiJx5OXwvKKnRxqifm3HYixqy5mIU5RVGPuvwNPc4aSeiIlApLMDD7378YIzFEbueyklbbz9SX"
		const stringp43uPAA = "hLCbhYrdGZTllM7JcJpxko3jW32kP9GR4U2RLmzFFY4MVQE"
		const uintlam7rDH = BigInt("1540")
		const RexonayO4QEo = await Rexona.new(stringKrZ0vVI, stringp43uPAA, uintlam7rDH, {from: accounts[1]});
		const uintNZs2sFg = BigInt("1072")
		const addressqx0p0w5 = accounts[1]
		const addressluqufrZ = "0x0000000000000000000000000000000000000001"
		const uinttgzLJoA = BigInt("1661")
		const addressxOmMLFq = accounts[2]
		const addressnd87XwZ = accounts[3]
//		const boolPQc9O5u = await RexonayO4QEo.transfer.call(addressqx0p0w5, uintNZs2sFg, {from: accounts[2]});
//		const boole2sSJ2R = await RexonayO4QEo.transferownership.call(addressluqufrZ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEwQC8T = await RexonayO4QEo.transferFrom.call(addressnd87XwZ, addressxOmMLFq, uinttgzLJoA, {from: accounts[3]});

		await expect(RexonayO4QEo.transfer.call(addressqx0p0w5, uintNZs2sFg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const string7aosRN = "ZqbZMVwS0tkK3kPDaxjzUYFCU5Qszby5rvYiN8Xd7UVqpCOqzoGuG"
		const stringUzwT5N2 = "TUQ5HQlrOrW0N4F0IaklTf2VfG"
		const uintjpiBVjT = BigInt("851")
		const Rexonahtci5BR = await Rexona.new(string7aosRN, stringUzwT5N2, uintjpiBVjT, {from: accounts[4]});
		const uinthnDHe1I = BigInt("1219")
		const addressQRaLQXq = accounts[3]
		const uintENIRXtR = BigInt("307")
		const addressxnmuiPD = accounts[0]
		const addressqFIYyIP = accounts[1]
		const uintAJ1VEKL = BigInt("1341")
		const addresspq9JP1 = accounts[0]
		const uinteNfvXDs = BigInt("693")
		const addressWrQKRqC = accounts[1]
		const uintJhEuMaw = BigInt("1802")
		const addressy6SgeXv = accounts[3]
		const uint7EVw51 = BigInt("955")
		const addressNJqxyhZ = accounts[3]
		const uintEO71fD = BigInt("402")
		const addressFKTrA9r = accounts[1]
		const boolwuo9hZH = await Rexonahtci5BR.approve.call(addressQRaLQXq, uinthnDHe1I, {from: accounts[2]});
//		const boolLV3XvBN = await Rexonahtci5BR.transfer.call(addressxnmuiPD, uintENIRXtR, {from: accounts[3]});
//		const boolwp2iKKQ = await Rexonahtci5BR.transferownership.call(addressqFIYyIP, {from: accounts[3]});
//		const boolPfxsm3U = await Rexonahtci5BR.transfer.call(addresspq9JP1, uintAJ1VEKL, {from: accounts[2]});
//		const boolGu2naRl = await Rexonahtci5BR.approveAndCall.call(addressWrQKRqC, uinteNfvXDs, {from: accounts[5]});
//		const boolXF0fMR = await Rexonahtci5BR.approveAndCall.call(addressy6SgeXv, uintJhEuMaw, {from: accounts[1]});
//		const boolJLfGAz8 = await Rexonahtci5BR.approve.call(addressNJqxyhZ, uint7EVw51, {from: accounts[2]});
//		const boolKIi0Cy3 = await Rexonahtci5BR.approveAndCall.call(addressFKTrA9r, uintEO71fD, {from: accounts[5]});

		assert.equal(boolwuo9hZH, true)
		await expect(Rexonahtci5BR.transfer.call(addressxnmuiPD, uintENIRXtR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringjOzhF0F = "vN6xSRvYeILO50teau2flSbE3QjJ5x8F8bLjB2IozflxxI37HlaON0xMuALUeotpzK2zBgYF7qGBaUL"
		const stringyD8qmYr = "6MjtvbVsble9PDymAa7SR1mlrAQZGuMKvJnoCab6s9NIxwjnAUAtm6X"
		const uintzMwde5G = BigInt("1382")
		const RexonaDjHNzPZ = await Rexona.new(stringjOzhF0F, stringyD8qmYr, uintzMwde5G, {from: accounts[0]});
		const addressmpZoki = accounts[3]
		const addressZw5rvM = accounts[5]
		const uintujy1VEb = BigInt("1588")
		const addressrlhZ8A = accounts[4]
		const addressiRqsRQd = accounts[3]
		const uintoReZlq8 = BigInt("1039")
		const addressfol6MRC = accounts[3]
		const uintclHF2wd = BigInt("1954")
		const addressKSpFEbg = accounts[5]
		const booljPj0LOC = await RexonaDjHNzPZ.transferownership.call(addressmpZoki, {from: accounts[0]});
//		const boolDCe2ldN = await RexonaDjHNzPZ.transferownership.call(addressZw5rvM, {from: accounts[4]});
//		const boolL0qHlMR = await RexonaDjHNzPZ.transferFrom.call(addressiRqsRQd, addressrlhZ8A, uintujy1VEb, {from: accounts[0]});
//		const boolOOb83Nq = await RexonaDjHNzPZ.approve.call(addressfol6MRC, uintoReZlq8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLSmOTck = await RexonaDjHNzPZ.approve.call(addressKSpFEbg, uintclHF2wd, {from: accounts[2]});

		assert.equal(booljPj0LOC, true)
		await expect(RexonaDjHNzPZ.transferownership.call(addressZw5rvM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringJlIQeU = "V2UuLB"
		const stringUSjFBS = "94Gi3"
		const uintkckqKD = BigInt("212")
		const RexonaQfsQn5P = await Rexona.new(stringJlIQeU, stringUSjFBS, uintkckqKD, {from: accounts[3]});
		const uintUvWpLK = BigInt("0")
		const addressjjvMfB8 = accounts[5]
		const addressv6rC17G = accounts[0]
		const boolU41AuRl = await RexonaQfsQn5P.transferFrom.call(addressv6rC17G, addressjjvMfB8, uintUvWpLK, {from: accounts[4]});

		assert.equal(boolU41AuRl, true)
	});

	it('test for Rexona', async () => {
		const stringJlIQeU = "V2UuLB"
		const stringUSjFBS = "94Gi3"
		const uintjxKZCaS = BigInt("212")
		const RexonaQfsQn5P = await Rexona.new(stringJlIQeU, stringUSjFBS, uintjxKZCaS, {from: accounts[3]});
		const uintuykvf2F = BigInt("0")
		const addressclBjP0O = accounts[7]
		const boolE4OX7Qd = await RexonaQfsQn5P.approveAndCall.call(addressclBjP0O, uintuykvf2F, {from: accounts[3]});

		assert.equal(boolE4OX7Qd, true)
	});
})