const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringxUqsfev = "GjBrgoHlHfpbLhdqAj2COD4VJjgHZKlrXI1smx"
		const stringUJQ8ebu = "n4Q3TBMITWAM1m32risHPI8ySGNF941w6ywNYjY1tgEoyfmcyUEWeN4naGdUoIQxSBTebVHjbxh6qzWpAHqDjT"
		const uintSQ4kXj = BigInt("175")
		const LUPTp3tM4L = await LUP.new(stringxUqsfev, stringUJQ8ebu, uintSQ4kXj, {from: accounts[1]});
		const boolt4w0m0p = false
		const addressssiio2a = accounts[2]
		const addressDyCa6A = accounts[0]
		const uintRNqwT6a = BigInt("959")
		const addressPgtXXR = accounts[3]
		const addressg0c9OK = accounts[4]
		const addresszgnygow = accounts[1]
		const boolY8nn1Sg = await LUPTp3tM4L.freezeAccount.call(addressssiio2a, boolt4w0m0p, {from: accounts[5]});
		const uint256cUr2SbG = await LUPTp3tM4L.balanceOf.call(addressDyCa6A, {from: accounts[2]});
		const boolOdmoGOK = await LUPTp3tM4L.unlock.call(addressPgtXXR, uintRNqwT6a, {from: accounts[3]});
		const stringfwI9bYG = await LUPTp3tM4L.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LCR3Qsy = await LUPTp3tM4L.balanceOf.call(addressg0c9OK, {from: accounts[3]});
		const addressxzp1KAt = await LUPTp3tM4L.notFrozen.call(addresszgnygow, {from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUPZFb1EbX = await LUP.new({from: accounts[2]});
		const addressfDTJdAU = accounts[4]
		const uintwC0Ahwd = BigInt("1188")
		const uintJhN1eUL = BigInt("1895")
		const addressYuJQM9 = accounts[1]
		const addressPmm3aVF = accounts[3]
		const addresslw39d7 = await LUPZFb1EbX.notFrozen.call(addressfDTJdAU, {from: accounts[3]});
		const boolhHuSk3M = await LUPZFb1EbX.transferWithLock.call(addressYuJQM9, uintJhN1eUL, uintwC0Ahwd, {from: accounts[3]});
		const addressBj19SUC = await LUPZFb1EbX.upgradeTo.call(addressPmm3aVF, {from: accounts[3]});

		await expect(LUPZFb1EbX.notFrozen.call(addressfDTJdAU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const uintymaxQnI = BigInt("983")
		const addressv8qzWcy = accounts[1]
		const uinte7kJ5QJ = BigInt("2005")
		const uintKwsnif = BigInt("27")
		const addressZQ1nGaY = accounts[1]
		const boolZzOtYSd = await LUPvhAyFi.unlock.call(addressv8qzWcy, uintymaxQnI, {from: accounts[1]});
		const boolSc4qcLF = await LUPvhAyFi.transferWithLock.call(addressZQ1nGaY, uintKwsnif, uinte7kJ5QJ, {from: accounts[0]});

		await expect(LUPvhAyFi.unlock.call(addressv8qzWcy, uintymaxQnI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPS37vu19 = await LUP.new({from: accounts[4]});
		const uintpyi7kTq = BigInt("75")
		const addressZCAm8fl = accounts[0]
		const stringW97380j = await LUPS37vu19.symbol.call({from: accounts[4]});
		const boolmmOsQGL = await LUPS37vu19.unlock.call(addressZCAm8fl, uintpyi7kTq, {from: accounts[1]});

		assert.equal(stringW97380j, "LUP")
		await expect(LUPS37vu19.unlock.call(addressZCAm8fl, uintpyi7kTq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const uintg8YBTtY = BigInt("2005")
		const uintLIqkL72 = BigInt("27")
		const addressDLPUQds = accounts[1]
		const stringRxAfvec = await LUPvhAyFi.name.call({from: accounts[5]});
		const boolSc4qcLF = await LUPvhAyFi.transferWithLock.call(addressDLPUQds, uintLIqkL72, uintg8YBTtY, {from: accounts[0]});

		assert.equal(stringRxAfvec, "LINKUP Token")
		await expect(LUPvhAyFi.transferWithLock.call(addressDLPUQds, uintLIqkL72, uintg8YBTtY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const uintwdOG70W = BigInt("342")
		const addressEmLtIqv = accounts[0]
		const uintuEgRgVj = BigInt("2005")
		const uintjNWxzTn = BigInt("4")
		const addressWAsRtY = accounts[2]
		const addressAJlKL7K = accounts[0]
		const boolZZWTAGt = await LUPvhAyFi.transfer.call(addressEmLtIqv, uintwdOG70W, {from: accounts[0]});
		const boolSc4qcLF = await LUPvhAyFi.transferWithLock.call(addressWAsRtY, uintjNWxzTn, uintuEgRgVj, {from: accounts[0]});
		const uint256rOfwYc = await LUPvhAyFi.balanceOf.call(addressAJlKL7K, {from: accounts[4]});

		await expect(LUPvhAyFi.transfer.call(addressEmLtIqv, uintwdOG70W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const addresshE0q5Ma = accounts[0]
		const addressaaTEz9 = accounts[0]
		const uintfNArz8E = BigInt("2005")
		const uintFANMLCK = BigInt("27")
		const addressOpL0z1v = accounts[2]
		const uint256rkWZkDA = await LUPvhAyFi.balanceOf.call(addresshE0q5Ma, {from: accounts[4]});
		const addressHvzboqu = await LUPvhAyFi.upgradeTo.call(addressaaTEz9, {from: accounts[0]});
		const boolSc4qcLF = await LUPvhAyFi.transferWithLock.call(addressOpL0z1v, uintFANMLCK, uintfNArz8E, {from: accounts[0]});

		assert.equal(uint256rkWZkDA, BigInt("0"))
		await expect(LUPvhAyFi.upgradeTo.call(addressaaTEz9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const uintQ2b6Ju8 = BigInt("2005")
		const uintgLRilIQ = BigInt("27")
		const addressXewNN1L = accounts[2]
		const uint8fajeZFO = await LUPvhAyFi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolSc4qcLF = await LUPvhAyFi.transferWithLock.call(addressXewNN1L, uintgLRilIQ, uintQ2b6Ju8, {from: accounts[0]});

		assert.equal(uint8fajeZFO, BigInt("18"))
		await expect(LUPvhAyFi.transferWithLock.call(addressXewNN1L, uintgLRilIQ, uintQ2b6Ju8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const boolchtAKph = true
		const addressnfQZkZ4 = accounts[1]
		const uintpUdrebu = BigInt("745")
		const addressXL3JLZs = accounts[1]
		const boolP5PFOY = await LUPvhAyFi.freezeAccount.call(addressnfQZkZ4, boolchtAKph, {from: accounts[2]});
		const boola3MyBs = await LUPvhAyFi.transfer.call(addressXL3JLZs, uintpUdrebu, {from: accounts[3]});

		assert.equal(boolP5PFOY, true)
		await expect(LUPvhAyFi.transfer.call(addressXL3JLZs, uintpUdrebu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const uintqOLdbw8 = BigInt("1425")
		const uintY1ICfDj = BigInt("895")
		const addressdLtt7iu = "0x0000000000000000000000000000000000000001"
		const addresspPJwUj = accounts[2]
		const uintt6NMurR = BigInt("735")
		const addressevv9SXC = accounts[1]
		const boolhyLYFXm = await LUPvhAyFi.transferWithLock.call(addressdLtt7iu, uintY1ICfDj, uintqOLdbw8, {from: accounts[2]});
		const addressBZuQW86 = await LUPvhAyFi.notFrozen.call(addresspPJwUj, {from: accounts[4]});
		const boola3MyBs = await LUPvhAyFi.transfer.call(addressevv9SXC, uintt6NMurR, {from: accounts[3]});

		assert.equal(boolhyLYFXm, true)
		await expect(LUPvhAyFi.notFrozen.call(addresspPJwUj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const uintoppZMyi = BigInt("81")
		const addressgb45fBx = accounts[0]
		const addressG3I3LeE = accounts[2]
		const uintT6snyu9 = BigInt("735")
		const addressAAvEGCk = accounts[1]
		const boolHRgbP0f = await LUPvhAyFi.unlock.call(addressgb45fBx, uintoppZMyi, {from: accounts[2]});
		const addressmtsgXn = await LUPvhAyFi.notFrozen.call(addressG3I3LeE, {from: accounts[0]});
		const boola3MyBs = await LUPvhAyFi.transfer.call(addressAAvEGCk, uintT6snyu9, {from: accounts[3]});

		await expect(LUPvhAyFi.unlock.call(addressgb45fBx, uintoppZMyi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPz3kD9K5 = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPBMLDd = accounts[0]
		const addresslrTGCeJ = accounts[3]
		const uint256RBJzYf = await LUPz3kD9K5.balanceOf.call(addressPBMLDd, {from: accounts[1]});
		const addressbwLeXq = await LUPz3kD9K5.upgradeTo.call(addresslrTGCeJ, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const uintVM2xMFz = BigInt("106")
		const uintUycsQI = BigInt("1930")
		const address37qWK9 = accounts[2]
		const uintt2alj1 = BigInt("739")
		const addressf2Wns9 = accounts[1]
		const boolocqDZ9d = await LUPvhAyFi.lock.call(address37qWK9, uintUycsQI, uintVM2xMFz, {from: accounts[2]});
		const boola3MyBs = await LUPvhAyFi.transfer.call(addressf2Wns9, uintt2alj1, {from: accounts[3]});

		assert.equal(boolocqDZ9d, true)
		await expect(LUPvhAyFi.transfer.call(addressf2Wns9, uintt2alj1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const addresseD1rhtp = accounts[3]
		const uintqOwXTN = BigInt("735")
		const addressrJQKpX = accounts[1]
		const addressseK9TZr = await LUPvhAyFi.upgradeTo.call(addresseD1rhtp, {from: accounts[2]});
		const boola3MyBs = await LUPvhAyFi.transfer.call(addressrJQKpX, uintqOwXTN, {from: accounts[3]});

		await expect(LUPvhAyFi.transfer.call(addressrJQKpX, uintqOwXTN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPvhAyFi = await LUP.new({from: accounts[2]});
		const addressEacbJW = accounts[2]
		const uinteyPkiy = BigInt("616")
		const uinthZMtTuY = BigInt("1574")
		const addresssBQV1TR = accounts[0]
		const uint256rkWZkDA = await LUPvhAyFi.balanceOf.call(addressEacbJW, {from: accounts[4]});
		const uint8x1R06S = await LUPvhAyFi.decimals.call({from: accounts[2]});
		const booldCiG7HG = await LUPvhAyFi.lock.call(addresssBQV1TR, uinthZMtTuY, uinteyPkiy, {from: accounts[2]});

		assert.equal(uint256rkWZkDA, BigInt("50000000000000000000000000"))
		assert.equal(uint8x1R06S, BigInt("18"))
		await expect(LUPvhAyFi.lock.call(addresssBQV1TR, uinthZMtTuY, uinteyPkiy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})