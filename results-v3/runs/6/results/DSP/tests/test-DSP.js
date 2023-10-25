const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringQVdSOE = "MhHDJ7cjzoyAmhKbD5YgBLuugci4xSPtd8VjTxHj1UjtOKKN6QT4lPO7TDtKGdrWKu2ifWYRXPpuLy611GckVwR3"
		const stringb0Oop6R = "P3sy2zpsq6ECZOY8WBdvqE2nMI0DhfRp1YNvyNsJAopEbpd4sXDhaIhKhhwEr3uFh5fuW5sdDxE4CujEC6icgM4"
		const uintwNS5Rko = BigInt("201")
		const DSPXYpQ8Kv = await DSP.new(stringQVdSOE, stringb0Oop6R, uintwNS5Rko, {from: accounts[4]});
		const uintxsLakRF = BigInt("1944")
		const addressWy3IcrT = accounts[0]
		const addressMsDE8RK = accounts[0]
		await DSPXYpQ8Kv.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolwDhVgRo = await DSPXYpQ8Kv.mint.call(addressWy3IcrT, uintxsLakRF, {from: accounts[3]});
		const uint256aJDpyg5 = await DSPXYpQ8Kv.balanceOf.call(addressMsDE8RK, {from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPBLKukgn = await DSP.new({from: accounts[4]});
		const addressMzglJFg = accounts[2]
		const uintUYF2ns = BigInt("1218")
		const addressulYSHdd = accounts[1]
		const addressvm2shSJ = accounts[2]
		const uintTV1BFic = BigInt("1121")
		const addressyCNgI28 = accounts[2]
		const addressVWpSfSs = await DSPBLKukgn.notFrozen.call(addressMzglJFg, {from: accounts[5]});
		const boolflfCBI3 = await DSPBLKukgn.transferFrom.call(addressvm2shSJ, addressulYSHdd, uintUYF2ns, {from: accounts[5]});
		const boolNup8pdf = await DSPBLKukgn.decreaseAllowance.call(addressyCNgI28, uintTV1BFic, {from: accounts[4]});

		await expect(DSPBLKukgn.notFrozen.call(addressMzglJFg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGbOpgk = await DSP.new({from: accounts[3]});
		const addressLDnjsAc = accounts[1]
		const uintYqXwIl = BigInt("821")
		const addresscA6R56Q = accounts[0]
		const addressPYLEbsq = accounts[2]
		const uintR2Cg7AT = BigInt("778")
		const addressrxIjFNG = accounts[2]
		const uintSCNoA0Q = BigInt("1444")
		const addressVoIfHIp = accounts[4]
		const addressJ91rpfY = await DSPGbOpgk.addPauser.call(addressLDnjsAc, {from: accounts[0]});
		const booledjiaWx = await DSPGbOpgk.transferFrom.call(addressPYLEbsq, addresscA6R56Q, uintYqXwIl, {from: accounts[3]});
		await DSPGbOpgk.onlyPauser.call({from: accounts[3]});
		const bool8CBSBP = await DSPGbOpgk.transfer.call(addressrxIjFNG, uintR2Cg7AT, {from: accounts[5]});
		const booldLf0BjQ = await DSPGbOpgk.burnFrombyOwner.call(addressVoIfHIp, uintSCNoA0Q, {from: accounts[3]});

		await expect(DSPGbOpgk.addPauser.call(addressLDnjsAc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCDFkg8E = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzZqR7Hm = BigInt("2020")
		const addresspLpgeTR = accounts[0]
		const uintQgxzBKy = BigInt("1740")
		const addressUinNcnU = accounts[3]
		const uintQ9ek9P5 = BigInt("448")
		const addressakiCk69 = accounts[0]
		const boolQZBfGoc = await DSPCDFkg8E.approve.call(addresspLpgeTR, uintzZqR7Hm, {from: accounts[5]});
		const boolx3UYjB = await DSPCDFkg8E.unlock.call(addressUinNcnU, uintQgxzBKy, {from: accounts[0]});
		const boolQgjqnlV = await DSPCDFkg8E.transfer.call(addressakiCk69, uintQ9ek9P5, {from: accounts[0]});
		await DSPCDFkg8E.renouncePauser.call({from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const uintQxKL0DA = BigInt("395")
		const addressbUkASxo = accounts[1]
		const addressX6Iv1sb = accounts[0]
		const boolSVKfEA = await DSPJJbJQpf.transfer.call(addressbUkASxo, uintQxKL0DA, {from: accounts[1]});
		const boolGY1KmjE = await DSPJJbJQpf.paused.call({from: accounts[3]});
		const stringJfYukTq = await DSPJJbJQpf.symbol.call({from: accounts[1]});
		const addressjz7jQ4H = await DSPJJbJQpf.removePauser.call(addressX6Iv1sb, {from: accounts[5]});
		await DSPJJbJQpf.renouncePauser.call({from: accounts[4]});

		await expect(DSPJJbJQpf.transfer.call(addressbUkASxo, uintQxKL0DA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const addressf9rXW7v = accounts[0]
		const boolGY1KmjE = await DSPJJbJQpf.paused.call({from: accounts[3]});
		const stringJfYukTq = await DSPJJbJQpf.symbol.call({from: accounts[1]});
		await DSPJJbJQpf.onlyPauser.call({from: accounts[1]});
		const addressjz7jQ4H = await DSPJJbJQpf.removePauser.call(addressf9rXW7v, {from: accounts[5]});
		await DSPJJbJQpf.onlyNewOwner.call({from: accounts[5]});
		await DSPJJbJQpf.renouncePauser.call({from: accounts[4]});

		assert.equal(boolGY1KmjE, false)
		assert.equal(stringJfYukTq, "DSP")
		await expect(DSPJJbJQpf.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPvU033S8 = await DSP.new({from: accounts[3]});
		const uintGDl8rCM = BigInt("730")
		const addressYrWBMfX = accounts[0]
		const stringWuTSBrK = await DSPvU033S8.name.call({from: accounts[2]});
		const boolWNYvZgk = await DSPvU033S8.mint.call(addressYrWBMfX, uintGDl8rCM, {from: accounts[0]});
		await DSPvU033S8.onlyOwner.call({from: accounts[0]});

		assert.equal(stringWuTSBrK, "DSP")
		await expect(DSPvU033S8.mint.call(addressYrWBMfX, uintGDl8rCM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const address1a72mN = accounts[3]
		const addressCwZXQE1 = accounts[3]
		const uintDAKUHn1 = BigInt("1253")
		const addressPGxMgBq = accounts[1]
		const addresscVqnlNi = accounts[4]
		const uint256zxO8aNy = await DSPJJbJQpf.allowance.call(addressCwZXQE1, address1a72mN, {from: accounts[2]});
		const boolSVKfEA = await DSPJJbJQpf.transfer.call(addressPGxMgBq, uintDAKUHn1, {from: accounts[1]});
		const uint256o5HRlKq = await DSPJJbJQpf.balanceOf.call(addresscVqnlNi, {from: accounts[0]});

		assert.equal(uint256zxO8aNy, BigInt("0"))
		await expect(DSPJJbJQpf.transfer.call(addressPGxMgBq, uintDAKUHn1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const uintj5Rkibw = BigInt("912")
		const addressDBrI5rr = accounts[2]
		const uintYEhma3G = BigInt("375")
		const addressnaMrRlI = accounts[1]
		const boolQGrCtnK = await DSPJJbJQpf.approve.call(addressDBrI5rr, uintj5Rkibw, {from: accounts[5]});
		const uint256voLZsYw = await DSPJJbJQpf.totalSupply.call({from: accounts[0]});
		const boolSVKfEA = await DSPJJbJQpf.transfer.call(addressnaMrRlI, uintYEhma3G, {from: accounts[1]});

		assert.equal(boolQGrCtnK, true)
		assert.equal(uint256voLZsYw, BigInt("100000000000000000000000000000"))
		await expect(DSPJJbJQpf.transfer.call(addressnaMrRlI, uintYEhma3G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPk0USn47 = await DSP.new({from: accounts[0]});
		const uintSPJSn7H = BigInt("931")
		const addressN7F1Qr = accounts[0]
		const boolP0qJVTY = await DSPk0USn47.transfer.call(addressN7F1Qr, uintSPJSn7H, {from: accounts[0]});
		await DSPk0USn47.renouncePauser.call({from: accounts[2]});

		assert.equal(boolP0qJVTY, true)
		await expect(DSPk0USn47.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const uinthlv6SsJ = BigInt("1026")
		const addresswKWrlNP = accounts[1]
		const addressG07APM8 = accounts[3]
		const uinttpzcqp = BigInt("395")
		const addressMNldP0l = accounts[1]
		const addressuIHeFsM = accounts[1]
		const boollqGOEQG = await DSPJJbJQpf.transferFrom.call(addressG07APM8, addresswKWrlNP, uinthlv6SsJ, {from: accounts[2]});
		const boolSVKfEA = await DSPJJbJQpf.transfer.call(addressMNldP0l, uinttpzcqp, {from: accounts[1]});
		const addressh7Izvx7 = await DSPJJbJQpf.addPauser.call(addressuIHeFsM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPJJbJQpf.transferFrom.call(addressG07APM8, addresswKWrlNP, uinthlv6SsJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const addressdyp0iv1 = accounts[5]
		const uinti4Tjotx = BigInt("79")
		const addressTD8owZ = accounts[1]
		const addressjV79Eme = accounts[3]
		const addressARqZf3c = accounts[2]
		const uintjNoc5H8 = BigInt("395")
		const addressB00xuIu = accounts[2]
		const uint256F8fPggd = await DSPJJbJQpf.balanceOf.call(addressdyp0iv1, {from: "0x0000000000000000000000000000000000000001"});
		const boolY5ci18k = await DSPJJbJQpf.transferFrom.call(addressjV79Eme, addressTD8owZ, uinti4Tjotx, {from: accounts[5]});
		const uint256NJCFuPR = await DSPJJbJQpf.balanceOf.call(addressARqZf3c, {from: accounts[3]});
		const boolSVKfEA = await DSPJJbJQpf.transfer.call(addressB00xuIu, uintjNoc5H8, {from: accounts[1]});

		assert.equal(uint256F8fPggd, BigInt("0"))
		await expect(DSPJJbJQpf.transferFrom.call(addressjV79Eme, addressTD8owZ, uinti4Tjotx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPpsYtmU9 = await DSP.new({from: accounts[0]});
		const uintUvsxsvW = BigInt("897")
		const addressT4uyGH3 = accounts[2]
		const addressOpvMw3X = "0x0000000000000000000000000000000000000001"
		const uintHBJD5Mm = BigInt("177")
		const addressY9LGQFB = accounts[2]
		const boolrfBawwK = await DSPpsYtmU9.increaseAllowance.call(addressT4uyGH3, uintUvsxsvW, {from: accounts[1]});
		const boolzcGr0SJ = await DSPpsYtmU9.freezeAccount.call(addressOpvMw3X, {from: accounts[1]});
		await DSPpsYtmU9.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolxT7DkrI = await DSPpsYtmU9.increaseAllowance.call(addressY9LGQFB, uintHBJD5Mm, {from: accounts[4]});

		assert.equal(boolrfBawwK, true)
		await expect(DSPpsYtmU9.freezeAccount.call(addressOpvMw3X, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const addresski9xtQU = accounts[3]
		const addressosHJx6Q = accounts[4]
		const uintI5crfT = BigInt("1026")
		const addressg4WsuA1 = accounts[2]
		const addressOVmQbY = accounts[4]
		const addressNCvCEnM = accounts[1]
		const uintr92hX0s = BigInt("1325")
		const addressoM53hcc = accounts[2]
		const addressdoQRA8l = await DSPJJbJQpf.upgradeTo.call(addresski9xtQU, {from: accounts[3]});
		const boold4taDyy = await DSPJJbJQpf.freezeAccount.call(addressosHJx6Q, {from: accounts[0]});
		const boollqGOEQG = await DSPJJbJQpf.transferFrom.call(addressOVmQbY, addressg4WsuA1, uintI5crfT, {from: accounts[2]});
		const boolhGYe0Xa = await DSPJJbJQpf.unfreezeAccount.call(addressNCvCEnM, {from: accounts[3]});
		const boolZS0bid = await DSPJJbJQpf.transfer.call(addressoM53hcc, uintr92hX0s, {from: accounts[4]});

		await expect(DSPJJbJQpf.freezeAccount.call(addressosHJx6Q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const uintEg4n1PB = BigInt("178")
		const addressRxGhhuZ = accounts[4]
		const uintXeLKOqg = BigInt("407")
		const addressyojVyxt = accounts[1]
		const addressF5zBiMY = accounts[3]
		const addressI9o8k1o = "0x0000000000000000000000000000000000000001"
		const boolaqLp3B6 = await DSPJJbJQpf.decreaseAllowance.call(addressRxGhhuZ, uintEg4n1PB, {from: accounts[0]});
		const boolSVKfEA = await DSPJJbJQpf.transfer.call(addressyojVyxt, uintXeLKOqg, {from: accounts[1]});
		const uint256aI2cNU = await DSPJJbJQpf.allowance.call(addressI9o8k1o, addressF5zBiMY, {from: accounts[1]});

		await expect(DSPJJbJQpf.decreaseAllowance.call(addressRxGhhuZ, uintEg4n1PB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const addressC0LVR5 = accounts[1]
		const uintSNZUyAr = BigInt("1783")
		const addresszc4eAms = accounts[1]
		const uintHFXVEZO = BigInt("1121")
		const addresstV3pqMq = accounts[1]
		const uint256YgUwvmH = await DSPJJbJQpf.balanceOf.call(addressC0LVR5, {from: accounts[4]});
		const boolM8JE4kE = await DSPJJbJQpf.increaseAllowance.call(addresszc4eAms, uintSNZUyAr, {from: accounts[2]});
		const boolnRw9CWR = await DSPJJbJQpf.mint.call(addresstV3pqMq, uintHFXVEZO, {from: accounts[3]});

		assert.equal(boolM8JE4kE, true)
		assert.equal(boolnRw9CWR, true)
		assert.equal(uint256YgUwvmH, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const uintDMtxB0W = BigInt("395")
		const addressF7ESaXc = accounts[2]
		await DSPJJbJQpf.f.call({from: accounts[4]});
		const boolSVKfEA = await DSPJJbJQpf.transfer.call(addressF7ESaXc, uintDMtxB0W, {from: accounts[1]});
		const uint256UCoF6dL = await DSPJJbJQpf.totalSupply.call({from: accounts[4]});

		await expect(DSPJJbJQpf.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const addresshumd6A = accounts[4]
		const uintEW99l7k = BigInt("395")
		const addressHWg5GMr = accounts[2]
		const uint8qvEC4A = await DSPJJbJQpf.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pfmA6j = await DSPJJbJQpf.balanceOf.call(addresshumd6A, {from: accounts[4]});
		const boolSVKfEA = await DSPJJbJQpf.transfer.call(addressHWg5GMr, uintEW99l7k, {from: accounts[1]});

		assert.equal(uint256pfmA6j, BigInt("0"))
		assert.equal(uint8qvEC4A, BigInt("18"))
		await expect(DSPJJbJQpf.transfer.call(addressHWg5GMr, uintEW99l7k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const addressgqePQ5A = accounts[0]
		const uinthgyMTbV = BigInt("395")
		const addressNq05cqy = accounts[1]
		const addressz23P03s = accounts[2]
		const boolde7z02l = await DSPJJbJQpf.unfreezeAccount.call(addressgqePQ5A, {from: accounts[3]});
		const boolSVKfEA = await DSPJJbJQpf.transfer.call(addressNq05cqy, uinthgyMTbV, {from: accounts[1]});
		const boolBjEznT = await DSPJJbJQpf.isPauser.call(addressz23P03s, {from: accounts[5]});

		await expect(DSPJJbJQpf.unfreezeAccount.call(addressgqePQ5A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const addressnOlY4Cz = accounts[1]
		const uintBv7CFAo = BigInt("1026")
		const addressUTUlBx5 = accounts[2]
		const addressFmRR5qd = accounts[3]
		const addressImV8uqP = accounts[4]
		const addressmeQhpIc = accounts[2]
		const addressRBEKV4Y = await DSPJJbJQpf.removePauser.call(addressnOlY4Cz, {from: accounts[3]});
		const boollqGOEQG = await DSPJJbJQpf.transferFrom.call(addressFmRR5qd, addressUTUlBx5, uintBv7CFAo, {from: accounts[2]});
		const uint256KcKbi0c = await DSPJJbJQpf.allowance.call(addressmeQhpIc, addressImV8uqP, {from: accounts[0]});

		await expect(DSPJJbJQpf.removePauser.call(addressnOlY4Cz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const addressw7qr6Y2 = accounts[1]
		const addressSjJSUCx = accounts[2]
		const uintymw9qG4 = BigInt("395")
		const addressU9UyL0l = accounts[2]
		const addressvMP0snB = await DSPJJbJQpf.addPauser.call(addressw7qr6Y2, {from: accounts[3]});
		const addressiSIA4ef = await DSPJJbJQpf.removePauser.call(addressSjJSUCx, {from: accounts[0]});
		const boolSVKfEA = await DSPJJbJQpf.transfer.call(addressU9UyL0l, uintymw9qG4, {from: accounts[1]});

		await expect(DSPJJbJQpf.removePauser.call(addressSjJSUCx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJJbJQpf = await DSP.new({from: accounts[3]});
		const uint5YoqIM = BigInt("1026")
		const addressoy2aB4M = accounts[3]
		const addressfnsaTlt = accounts[3]
		await DSPJJbJQpf.pause.call({from: accounts[3]});
		const boollqGOEQG = await DSPJJbJQpf.transferFrom.call(addressfnsaTlt, addressoy2aB4M, uint5YoqIM, {from: accounts[2]});

		await expect(DSPJJbJQpf.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})