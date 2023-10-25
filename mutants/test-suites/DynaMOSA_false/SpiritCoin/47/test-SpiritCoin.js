const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressFzQoWP7 = accounts[0]
		const addresseLxGhQN = accounts[3]
		const SpiritCoinJbOmPeY = await SpiritCoin.new(addressFzQoWP7, addresseLxGhQN, {from: accounts[2]});
		const addressQ10l4eQ = "0x0000000000000000000000000000000000000001"
		const addressWhRicEo = accounts[3]
		const uintRolHMiy = BigInt("1476")
		const addressDX8w3cs = accounts[3]
		const addresscxBw4MH = accounts[0]
		const addressrzdDRM4 = accounts[4]
		const addressbzS6E2Z = accounts[3]
		const uintcsgT49t = await SpiritCoinJbOmPeY.balanceOf.call(addressQ10l4eQ, {from: accounts[2]});
//		const addressuhf1YYd = await SpiritCoinJbOmPeY.setMinter.call(addressWhRicEo, {from: accounts[2]});
//		const boolQRJKKbO = await SpiritCoinJbOmPeY.transferFrom.call(addresscxBw4MH, addressDX8w3cs, uintRolHMiy, {from: accounts[4]});
//		const uintbIil6nq = await SpiritCoinJbOmPeY.allowance.call(addressbzS6E2Z, addressrzdDRM4, {from: accounts[4]});

		assert.equal(uintcsgT49t, BigInt("0"))
		await expect(SpiritCoinJbOmPeY.setMinter.call(addressWhRicEo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresses84njS = accounts[5]
		const addressKAcEDG = accounts[4]
		const SpiritCoinpVYplfH = await SpiritCoin.new(addresses84njS, addressKAcEDG, {from: accounts[4]});
		const addressavxtMJU = accounts[0]
		const addressPVcCQgD = accounts[0]
		const uintXKpzJij = BigInt("1478")
		const addressmjW4qBj = accounts[5]
		const addresschBAexz = accounts[4]
		const addressQOJt48D = accounts[2]
		const addressoAyldS = "0x0000000000000000000000000000000000000001"
		const addressOs9Vd2k = "0x0000000000000000000000000000000000000001"
		const uintFPYIkid = await SpiritCoinpVYplfH.allowance.call(addressPVcCQgD, addressavxtMJU, {from: "0x0000000000000000000000000000000000000001"});
//		const boolu7vJAfO = await SpiritCoinpVYplfH.transferFrom.call(addresschBAexz, addressmjW4qBj, uintXKpzJij, {from: accounts[0]});
//		const uint6CuLYG = await SpiritCoinpVYplfH.balanceOf.call(addressQOJt48D, {from: "0x0000000000000000000000000000000000000001"});
//		const uintaiECXKG = await SpiritCoinpVYplfH.balanceOf.call(addressoAyldS, {from: accounts[3]});
//		const uintj0jnxZB = await SpiritCoinpVYplfH.balanceOf.call(addressOs9Vd2k, {from: accounts[3]});

		assert.equal(uintFPYIkid, BigInt("0"))
		await expect(SpiritCoinpVYplfH.transferFrom.call(addresschBAexz, addressmjW4qBj, uintXKpzJij, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressb0ZbHm = accounts[3]
		const addressCEbWGR = accounts[0]
		const SpiritCoinevJkof7 = await SpiritCoin.new(addressb0ZbHm, addressCEbWGR, {from: accounts[2]});
		const addressyy6N494 = accounts[1]
		const addressK8cnmax = accounts[2]
		const addressWXK5smG = "0x0000000000000000000000000000000000000001"
		const addresszOCrROk = accounts[3]
		const addressI9cLcDH = accounts[0]
		const addressuJpndEO = accounts[3]
		const addressA2H9zgU = "0x0000000000000000000000000000000000000001"
		const uintSB4HUXG = BigInt("940")
		const addressnuXTe9I = accounts[4]
		const uintUK6x53R = await SpiritCoinevJkof7.balanceOf.call(addressyy6N494, {from: accounts[4]});
		const uintvJQxs56 = await SpiritCoinevJkof7.allowance.call(addressWXK5smG, addressK8cnmax, {from: accounts[2]});
		const uintwlP2l7A = await SpiritCoinevJkof7.allowance.call(addressI9cLcDH, addresszOCrROk, {from: accounts[3]});
		const uintbj52Cl = await SpiritCoinevJkof7.allowance.call(addressA2H9zgU, addressuJpndEO, {from: accounts[1]});
//		const addresszcdKEaj = await SpiritCoinevJkof7.mint.call(addressnuXTe9I, uintSB4HUXG, {from: accounts[4]});

		assert.equal(uintUK6x53R, BigInt("0"))
		assert.equal(uintbj52Cl, BigInt("0"))
		assert.equal(uintvJQxs56, BigInt("0"))
		assert.equal(uintwlP2l7A, BigInt("0"))
		await expect(SpiritCoinevJkof7.mint.call(addressnuXTe9I, uintSB4HUXG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressFSqgnyr = accounts[0]
		const addressMSiYMHL = "0x0000000000000000000000000000000000000001"
		const SpiritCoinG6cYpFn = await SpiritCoin.new(addressFSqgnyr, addressMSiYMHL, {from: accounts[1]});
		const uintSoYeF5r = BigInt("1520")
		const addresspxWAIRN = accounts[1]
		const uintoOvwxol = BigInt("833")
		const addressUKI4emG = accounts[1]
		const uintHX5cZ4k = BigInt("774")
		const addressh6AuPBr = accounts[1]
		const uintLU54rTl = BigInt("414")
		const addressGVZWxwz = accounts[3]
		const addressoHLiaxb = accounts[1]
		const addressluUr2iq = accounts[5]
		const boolCSDecmY = await SpiritCoinG6cYpFn.transfer.call(addresspxWAIRN, uintSoYeF5r, {from: accounts[0]});
//		const addressuSk8zXh = await SpiritCoinG6cYpFn.mint.call(addressUKI4emG, uintoOvwxol, {from: accounts[0]});
//		const address1cCd7n = await SpiritCoinG6cYpFn.mint.call(addressh6AuPBr, uintHX5cZ4k, {from: "0x0000000000000000000000000000000000000001"});
//		const boolu3Y0cDi = await SpiritCoinG6cYpFn.transfer.call(addressGVZWxwz, uintLU54rTl, {from: accounts[0]});
//		const uintEOATJsR = await SpiritCoinG6cYpFn.allowance.call(addressluUr2iq, addressoHLiaxb, {from: accounts[3]});

		assert.equal(boolCSDecmY, true)
		await expect(SpiritCoinG6cYpFn.mint.call(addressUKI4emG, uintoOvwxol, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressB4iFnkq = "0x0000000000000000000000000000000000000001"
		const addresspZkgtPc = accounts[4]
		const SpiritCoinpTk39p6 = await SpiritCoin.new(addressB4iFnkq, addresspZkgtPc, {from: accounts[1]});
		const uint0cIltD = BigInt("1988")
		const addressm4TfGOC = accounts[4]
		const uintRdEVC2V = BigInt("1368")
		const addressTttVCFf = accounts[0]
		const addressgbqxZfE = accounts[3]
		const addressMLIRQbK = accounts[3]
		const uintmXVi4vW = BigInt("1470")
		const addressT2NHE9d = accounts[1]
		const addressxQkmbnT = accounts[3]
		const uintkwmhn01 = BigInt("1454")
		const addressLMxHHxZ = accounts[4]
		const addressXhDQVYt = accounts[3]
		const addressMPvc8sW = accounts[1]
//		const boolstzq5pE = await SpiritCoinpTk39p6.transfer.call(addressm4TfGOC, uint0cIltD, {from: accounts[0]});
//		const addressXgfrkwt = await SpiritCoinpTk39p6.mint.call(addressTttVCFf, uintRdEVC2V, {from: accounts[4]});
//		const uintIAvHR44 = await SpiritCoinpTk39p6.allowance.call(addressMLIRQbK, addressgbqxZfE, {from: accounts[0]});
//		const boolzrGjkJ6 = await SpiritCoinpTk39p6.transferFrom.call(addressxQkmbnT, addressT2NHE9d, uintmXVi4vW, {from: accounts[2]});
//		const booli4PZDY6 = await SpiritCoinpTk39p6.transfer.call(addressLMxHHxZ, uintkwmhn01, {from: accounts[2]});
//		const uintTbovKBY = await SpiritCoinpTk39p6.allowance.call(addressMPvc8sW, addressXhDQVYt, {from: accounts[2]});

		await expect(SpiritCoinpTk39p6.transfer.call(addressm4TfGOC, uint0cIltD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressy6jU51g = accounts[4]
		const addressq8pw9ze = accounts[3]
		const SpiritCoinFOQj67z = await SpiritCoin.new(addressy6jU51g, addressq8pw9ze, {from: accounts[0]});
		const addressCEBxNxd = accounts[1]
		const uinteCYlLIN = BigInt("1283")
		const addressU9YZ9cY = accounts[3]
		const uintICur2Ic = BigInt("1642")
		const addressbr9fnfN = accounts[3]
		const uintIJor0f = await SpiritCoinFOQj67z.balanceOf.call(addressCEBxNxd, {from: accounts[1]});
		const boolf5yXsZ = await SpiritCoinFOQj67z.approve.call(addressU9YZ9cY, uinteCYlLIN, {from: accounts[1]});
		const boolKNvIf8U = await SpiritCoinFOQj67z.transfer.call(addressbr9fnfN, uintICur2Ic, {from: accounts[4]});

		assert.equal(boolKNvIf8U, true)
		assert.equal(boolf5yXsZ, true)
		assert.equal(uintIJor0f, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addresspkZ21Xe = accounts[0]
		const addressCRD6fYF = "0x0000000000000000000000000000000000000001"
		const SpiritCoinG6cYpFn = await SpiritCoin.new(addresspkZ21Xe, addressCRD6fYF, {from: accounts[1]});
		const uinty43F0w6 = BigInt("1520")
		const addressiSd8P7K = accounts[1]
		const uintwOvZkDl = BigInt("774")
		const addressryv9GkT = accounts[1]
		const uintw4POxLy = BigInt("414")
		const addressWN2cgKH = accounts[3]
		const addressmdXmgYN = accounts[1]
		const addressrofSQDW = accounts[6]
		const boolCSDecmY = await SpiritCoinG6cYpFn.transfer.call(addressiSd8P7K, uinty43F0w6, {from: accounts[0]});
		const address1cCd7n = await SpiritCoinG6cYpFn.mint.call(addressryv9GkT, uintwOvZkDl, {from: "0x0000000000000000000000000000000000000001"});
		const boolu3Y0cDi = await SpiritCoinG6cYpFn.transfer.call(addressWN2cgKH, uintw4POxLy, {from: accounts[0]});
		const uintEOATJsR = await SpiritCoinG6cYpFn.allowance.call(addressrofSQDW, addressmdXmgYN, {from: accounts[3]});

		assert.equal(boolCSDecmY, true)
		assert.equal(boolu3Y0cDi, true)
		assert.equal(uintEOATJsR, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressN68SWl = accounts[5]
		const addresswvXBubT = accounts[5]
		const SpiritCoinB7AS9yt = await SpiritCoin.new(addressN68SWl, addresswvXBubT, {from: "0x0000000000000000000000000000000000000001"});
		const uintj3R2V7l = BigInt("709")
		const addresspnHLzAE = accounts[1]
		const uintx5W6wz1 = BigInt("203")
		const addresstdPJpmx = accounts[3]
		const uintcx4wiyK = BigInt("1240")
		const addressZVzHmYV = accounts[5]
		const uintbAUG4tU = BigInt("1598")
		const addressISKyryU = accounts[4]
		const addressACA4YIr = accounts[4]
		const boolMx1zWLw = await SpiritCoinB7AS9yt.approve.call(addresspnHLzAE, uintj3R2V7l, {from: accounts[3]});
		const boolxqRgtyP = await SpiritCoinB7AS9yt.transfer.call(addresstdPJpmx, uintx5W6wz1, {from: accounts[5]});
		const addressl6Fowuf = await SpiritCoinB7AS9yt.mint.call(addressZVzHmYV, uintcx4wiyK, {from: accounts[0]});
		const boolf6ylG8g = await SpiritCoinB7AS9yt.transfer.call(addressISKyryU, uintbAUG4tU, {from: accounts[4]});
		const addressVLWCjRn = await SpiritCoinB7AS9yt.setMinter.call(addressACA4YIr, {from: accounts[0]});
	});

	it('test for SpiritCoin', async () => {
		const addressSSQ69u3 = accounts[0]
		const addressMbnhMcR = "0x0000000000000000000000000000000000000001"
		const SpiritCoinG6cYpFn = await SpiritCoin.new(addressSSQ69u3, addressMbnhMcR, {from: accounts[1]});
		const uintgPqpb5p = BigInt("873")
		const addressMF8DSN = accounts[4]
		const uintJaNreG0 = BigInt("774")
		const addressVxY320U = "0x0000000000000000000000000000000000000000"
		const boolfcllbuq = await SpiritCoinG6cYpFn.approve.call(addressMF8DSN, uintgPqpb5p, {from: accounts[4]});
//		const address1cCd7n = await SpiritCoinG6cYpFn.mint.call(addressVxY320U, uintJaNreG0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfcllbuq, true)
		await expect(SpiritCoinG6cYpFn.mint.call(addressVxY320U, uintJaNreG0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})