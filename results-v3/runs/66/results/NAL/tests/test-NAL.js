const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALMk8oLNL = await NAL.new({from: accounts[4]});
		const addressBx8u5z6 = accounts[1]
		const uintaRz5HXo = BigInt("337")
		const addressZp9sGg = accounts[4]
		const addressu2yfXe = accounts[4]
		const addressT4dITkl = await NALMk8oLNL.removeAdmin.call(addressBx8u5z6, {from: accounts[3]});
		const boolagLpov0 = await NALMk8oLNL.approve.call(addressZp9sGg, uintaRz5HXo, {from: accounts[2]});
		const stringMfQkcrT = await NALMk8oLNL.symbol.call({from: accounts[3]});
		const addressjkk0wSX = await NALMk8oLNL.addAdmin.call(addressu2yfXe, {from: accounts[4]});
		const uint8gVLRz7O = await NALMk8oLNL.decimals.call({from: accounts[0]});

		await expect(NALMk8oLNL.removeAdmin.call(addressBx8u5z6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringPC29lW0 = "Dm5ja4rz8xNaAA0W2k"
		const stringeDVOv9v = "LRJuzVzo4YtSxu"
		const uintJ0U8fJl = BigInt("50")
		const NALypY6Z8h = await NAL.new(stringPC29lW0, stringeDVOv9v, uintJ0U8fJl, {from: accounts[4]});
		const addressVmQ01OZ = accounts[0]
		const addresspvBFqgN = accounts[4]
		const addresslPNAEhe = accounts[4]
		const uintraX1ls1 = BigInt("97")
		const addressxPVWYem = accounts[4]
		const addressUICo1vv = accounts[1]
		await NALypY6Z8h.whenNotPaused.call({from: accounts[1]});
		const uint256GbFGgi = await NALypY6Z8h.balanceOf.call(addressVmQ01OZ, {from: accounts[1]});
		const uint256DTmtzAw = await NALypY6Z8h.allowance.call(addresslPNAEhe, addresspvBFqgN, {from: accounts[3]});
		const boolvNHNqY = await NALypY6Z8h.approve.call(addressxPVWYem, uintraX1ls1, {from: accounts[0]});
		const boolg8qXr3H = await NALypY6Z8h.freezeAccount.call(addressUICo1vv, {from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintEuY0qv2 = BigInt("1022")
		const uintiqmv4d = BigInt("408")
		const addressyehKgMY = accounts[5]
		const uintXWeTPAF = BigInt("205")
		const addressL4NeW2h = accounts[5]
		const addresspbYak35 = accounts[2]
		const boolwY6XBxP = await NALWuNk5o0.lock.call(addressyehKgMY, uintiqmv4d, uintEuY0qv2, {from: accounts[4]});
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addresspbYak35, addressL4NeW2h, uintXWeTPAF, {from: accounts[4]});

		await expect(NALWuNk5o0.lock.call(addressyehKgMY, uintiqmv4d, uintEuY0qv2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uinteukaaKu = BigInt("156")
		const addressXy5WNmz = accounts[2]
		const addressqVrFo9h = accounts[1]
		const uintBNVjPfI = BigInt("339")
		const uintZanxOZX = BigInt("408")
		const addressKIZTEji = accounts[5]
		const addressrjDFDov = accounts[3]
		const uinto2GACVH = BigInt("205")
		const addressIgQE7dr = accounts[5]
		const addresspNhptql = accounts[2]
		const uint256hmyrgs = await NALWuNk5o0.totalSupply.call({from: accounts[1]});
		const boolBz1dXty = await NALWuNk5o0.transferFrom.call(addressqVrFo9h, addressXy5WNmz, uinteukaaKu, {from: accounts[4]});
		const boolwY6XBxP = await NALWuNk5o0.lock.call(addressKIZTEji, uintZanxOZX, uintBNVjPfI, {from: accounts[4]});
		const uint256swh8RT = await NALWuNk5o0.balanceOf.call(addressrjDFDov, {from: accounts[5]});
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addresspNhptql, addressIgQE7dr, uinto2GACVH, {from: accounts[4]});

		assert.equal(uint256hmyrgs, BigInt("2000000000000000000000000000"))
		await expect(NALWuNk5o0.transferFrom.call(addressqVrFo9h, addressXy5WNmz, uinteukaaKu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uint4njn8F = BigInt("156")
		const addressM7iThwT = accounts[2]
		const addressvmt5til = accounts[1]
		const uintSWLm2m3 = BigInt("339")
		const uintVzNqoeZ = BigInt("371")
		const addressqLFDOqM = accounts[5]
		const uintj6Xy1qC = BigInt("1371")
		const addressrEpO8Zl = accounts[2]
		const addressxLy00N7 = accounts[3]
		const uinttFzjtyF = BigInt("205")
		const addresshenDMEl = accounts[5]
		const addressEfqMjDk = accounts[2]
		const stringDxX9BE6 = await NALWuNk5o0.name.call({from: accounts[1]});
		const uint256hmyrgs = await NALWuNk5o0.totalSupply.call({from: accounts[1]});
		const boolBz1dXty = await NALWuNk5o0.transferFrom.call(addressvmt5til, addressM7iThwT, uint4njn8F, {from: accounts[4]});
		const boolwY6XBxP = await NALWuNk5o0.lock.call(addressqLFDOqM, uintVzNqoeZ, uintSWLm2m3, {from: accounts[4]});
		const boolhgmW8SN = await NALWuNk5o0.approve.call(addressrEpO8Zl, uintj6Xy1qC, {from: accounts[4]});
		const uint256swh8RT = await NALWuNk5o0.balanceOf.call(addressxLy00N7, {from: accounts[5]});
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressEfqMjDk, addresshenDMEl, uinttFzjtyF, {from: accounts[4]});

		assert.equal(stringDxX9BE6, "Personal Token")
		assert.equal(uint256hmyrgs, BigInt("2000000000000000000000000000"))
		await expect(NALWuNk5o0.transferFrom.call(addressvmt5til, addressM7iThwT, uint4njn8F, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const addressfFvzEbc = accounts[3]
		const uintAJfD2sj = BigInt("156")
		const addressbLSZz2I = accounts[2]
		const addressMwbToCF = accounts[1]
		const uintCouFg1 = BigInt("339")
		const uinttTOZUWy = BigInt("408")
		const addressnlaY7z6 = accounts[5]
		const uintuYIhznh = BigInt("42")
		const addressgYzqrM7 = accounts[2]
		const addressL5LnBkx = accounts[4]
		const uintrZaEwMR = BigInt("205")
		const addressf4TmLUV = accounts[5]
		const addressTVQmjO = accounts[2]
		const uint256hmyrgs = await NALWuNk5o0.totalSupply.call({from: accounts[1]});
		const addressLYD1Xqq = await NALWuNk5o0.transferOwnership.call(addressfFvzEbc, {from: accounts[3]});
		const boolBz1dXty = await NALWuNk5o0.transferFrom.call(addressMwbToCF, addressbLSZz2I, uintAJfD2sj, {from: accounts[4]});
		const boolwY6XBxP = await NALWuNk5o0.lock.call(addressnlaY7z6, uinttTOZUWy, uintCouFg1, {from: accounts[4]});
		const boolYdwB5BW = await NALWuNk5o0.transfer.call(addressgYzqrM7, uintuYIhznh, {from: accounts[1]});
		const uint256swh8RT = await NALWuNk5o0.balanceOf.call(addressL5LnBkx, {from: accounts[5]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressTVQmjO, addressf4TmLUV, uintrZaEwMR, {from: accounts[4]});

		assert.equal(uint256hmyrgs, BigInt("2000000000000000000000000000"))
		await expect(NALWuNk5o0.transferFrom.call(addressMwbToCF, addressbLSZz2I, uintAJfD2sj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALx1cYOf = await NAL.new({from: accounts[0]});
		const uintSnA4Sg4 = BigInt("1526")
		const addressGnk8H9R = "0x0000000000000000000000000000000000000001"
		const uintUCZuUD = BigInt("934")
		const addressEENpkmz = accounts[1]
		const uintTQoQELj = BigInt("1172")
		const addressAw3Serd = accounts[5]
		const addressCj1iAQ8 = accounts[1]
		const boolyMkYTh9 = await NALx1cYOf.decreaseAllowance.call(addressGnk8H9R, uintSnA4Sg4, {from: accounts[2]});
		const boolFA8x6bm = await NALx1cYOf.unlock.call(addressEENpkmz, uintUCZuUD, {from: accounts[2]});
		const boolHPxs6Bm = await NALx1cYOf.transferFrom.call(addressCj1iAQ8, addressAw3Serd, uintTQoQELj, {from: accounts[3]});
		const stringLvgRbT = await NALx1cYOf.symbol.call({from: accounts[4]});

		await expect(NALx1cYOf.decreaseAllowance.call(addressGnk8H9R, uintSnA4Sg4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const addresse5WSOuF = accounts[1]
		const addressrKhU5S = accounts[2]
		const uintScABmuL = BigInt("156")
		const addressYCrswM0 = accounts[2]
		const addresstHVON5s = accounts[1]
		const uintIlc0UUv = BigInt("339")
		const uintA3E7rlI = BigInt("408")
		const addressSwh6xJ9 = accounts[6]
		const addressC1gTIs = accounts[3]
		const uintZ6L5txJ = BigInt("205")
		const addressv2Y6Zq = accounts[5]
		const addressvLHcCYn = accounts[2]
		const uint256hmyrgs = await NALWuNk5o0.totalSupply.call({from: accounts[1]});
		const uint256uywqGew = await NALWuNk5o0.allowance.call(addressrKhU5S, addresse5WSOuF, {from: accounts[1]});
		const boolBz1dXty = await NALWuNk5o0.transferFrom.call(addresstHVON5s, addressYCrswM0, uintScABmuL, {from: accounts[4]});
		const boolwY6XBxP = await NALWuNk5o0.lock.call(addressSwh6xJ9, uintA3E7rlI, uintIlc0UUv, {from: accounts[4]});
		await NALWuNk5o0.whenPaused.call({from: accounts[1]});
		const uint256swh8RT = await NALWuNk5o0.balanceOf.call(addressC1gTIs, {from: accounts[5]});
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		await NALWuNk5o0.onlyAdmin.call({from: accounts[2]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressvLHcCYn, addressv2Y6Zq, uintZ6L5txJ, {from: accounts[4]});

		assert.equal(uint256hmyrgs, BigInt("2000000000000000000000000000"))
		assert.equal(uint256uywqGew, BigInt("0"))
		await expect(NALWuNk5o0.transferFrom.call(addresstHVON5s, addressYCrswM0, uintScABmuL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintxUhrT9 = BigInt("339")
		const uintq9t37ep = BigInt("408")
		const addressABdpS6 = accounts[5]
		const addressCKVg2WH = accounts[3]
		const uinthbdbur1 = BigInt("205")
		const addressOQHBPip = accounts[5]
		const addressbfG0bJo = accounts[2]
		const uint256hmyrgs = await NALWuNk5o0.totalSupply.call({from: accounts[1]});
		await NALWuNk5o0.onlyAdmin.call({from: accounts[4]});
		const boolwY6XBxP = await NALWuNk5o0.lock.call(addressABdpS6, uintq9t37ep, uintxUhrT9, {from: accounts[4]});
		const uint256swh8RT = await NALWuNk5o0.balanceOf.call(addressCKVg2WH, {from: accounts[5]});
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressbfG0bJo, addressOQHBPip, uinthbdbur1, {from: accounts[4]});

		assert.equal(uint256hmyrgs, BigInt("2000000000000000000000000000"))
		await expect(NALWuNk5o0.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintwQuJLtr = BigInt("1576")
		const uintXzGVAD = BigInt("755")
		const addressLGrSgD = accounts[4]
		const uintdSJlYEM = BigInt("205")
		const addressXk2xPrf = accounts[6]
		const addresstvQaWVA = accounts[2]
		const boolWWJNJCC = await NALWuNk5o0.lock.call(addressLGrSgD, uintXzGVAD, uintwQuJLtr, {from: accounts[3]});
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addresstvQaWVA, addressXk2xPrf, uintdSJlYEM, {from: accounts[4]});

		await expect(NALWuNk5o0.lock.call(addressLGrSgD, uintXzGVAD, uintwQuJLtr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintJeZjd0o = BigInt("1657")
		const addresslg99SEx = accounts[2]
		const addressb6otXQ = accounts[1]
		const addressHMOdRTq = accounts[3]
		const uintPfxeJCD = BigInt("710")
		const addressBqqhprR = accounts[1]
		const uintYKZQ6DC = BigInt("205")
		const addressVrNfJBy = accounts[6]
		const addressXaY2AUn = accounts[2]
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const boolAfmNHE7 = await NALWuNk5o0.approve.call(addresslg99SEx, uintJeZjd0o, {from: accounts[3]});
		const uint256T5YypCH = await NALWuNk5o0.allowance.call(addressHMOdRTq, addressb6otXQ, {from: accounts[2]});
		const booluz5x7x = await NALWuNk5o0.transfer.call(addressBqqhprR, uintPfxeJCD, {from: accounts[0]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressXaY2AUn, addressVrNfJBy, uintYKZQ6DC, {from: accounts[4]});

		assert.equal(boolAfmNHE7, true)
		assert.equal(uint256IhPpJio, BigInt("2000000000000000000000000000"))
		assert.equal(uint256T5YypCH, BigInt("0"))
		await expect(NALWuNk5o0.transfer.call(addressBqqhprR, uintPfxeJCD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintcClNFS1 = BigInt("1538")
		const uintTh9aS2J = BigInt("766")
		const addressbvPFQY = accounts[4]
		const stringVB5on1 = await NALWuNk5o0.symbol.call({from: accounts[3]});
		const boolG9frhEQ = await NALWuNk5o0.transferWithLock.call(addressbvPFQY, uintTh9aS2J, uintcClNFS1, {from: accounts[4]});
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});

		assert.equal(stringVB5on1, "NAL")
		await expect(NALWuNk5o0.transferWithLock.call(addressbvPFQY, uintTh9aS2J, uintcClNFS1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintuNVH4Ou = BigInt("1427")
		const addressySLgWIN = accounts[1]
		const addressyw6xRBq = accounts[4]
		const uintZ4wdmOT = BigInt("205")
		const addressl8e9L2x = accounts[6]
		const addressNRAovjn = accounts[2]
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const boolBWq2DZP = await NALWuNk5o0.transfer.call(addressySLgWIN, uintuNVH4Ou, {from: accounts[3]});
		const uint256xQnOc7k = await NALWuNk5o0.balanceOf.call(addressyw6xRBq, {from: accounts[1]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressNRAovjn, addressl8e9L2x, uintZ4wdmOT, {from: accounts[4]});

		assert.equal(boolBWq2DZP, true)
		assert.equal(uint256IhPpJio, BigInt("2000000000000000000000000000"))
		assert.equal(uint256xQnOc7k, BigInt("0"))
		await expect(NALWuNk5o0.transferFrom.call(addressNRAovjn, addressl8e9L2x, uintZ4wdmOT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintVeeuqLn = BigInt("1916")
		const addressEhCWk4C = accounts[3]
		const uintGL8aQ5E = BigInt("205")
		const addressId3qf46 = accounts[6]
		const addresszVZDPIn = accounts[2]
		const boolU5wYMLV = await NALWuNk5o0.increaseAllowance.call(addressEhCWk4C, uintVeeuqLn, {from: accounts[0]});
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addresszVZDPIn, addressId3qf46, uintGL8aQ5E, {from: accounts[4]});

		assert.equal(boolU5wYMLV, true)
		assert.equal(uint256IhPpJio, BigInt("2000000000000000000000000000"))
		await expect(NALWuNk5o0.transferFrom.call(addresszVZDPIn, addressId3qf46, uintGL8aQ5E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const addressUcqFW4N = accounts[3]
		const uintnjBWDdV = BigInt("608")
		const addresssQdYuXa = accounts[5]
		const uintHEBQgB3 = BigInt("205")
		const addressVoxz7x6 = accounts[6]
		const addressVLbBxx4 = accounts[2]
		const addressFqk78i2 = await NALWuNk5o0.addAdmin.call(addressUcqFW4N, {from: accounts[3]});
		const boolZACYvAv = await NALWuNk5o0.transfer.call(addresssQdYuXa, uintnjBWDdV, {from: accounts[0]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressVLbBxx4, addressVoxz7x6, uintHEBQgB3, {from: accounts[4]});

		await expect(NALWuNk5o0.addAdmin.call(addressUcqFW4N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintGWhoWNh = BigInt("752")
		const uintJfjOIG7 = BigInt("88")
		const addressucYACM = accounts[3]
		const uintnoV3rEe = BigInt("205")
		const addressihP4Wu = accounts[6]
		const addressRDoRf1h = accounts[2]
		const addresskSTPlqT = accounts[2]
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const uint256tTkCY7y = await NALWuNk5o0.burn.call(uintGWhoWNh, {from: accounts[1]});
		const boolYL2scpX = await NALWuNk5o0.transfer.call(addressucYACM, uintJfjOIG7, {from: accounts[5]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressRDoRf1h, addressihP4Wu, uintnoV3rEe, {from: accounts[4]});
		const addressggycbed = await NALWuNk5o0.removeAdmin.call(addresskSTPlqT, {from: accounts[4]});

		assert.equal(uint256IhPpJio, BigInt("2000000000000000000000000000"))
		await expect(NALWuNk5o0.burn.call(uintGWhoWNh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintJbUxo1K = BigInt("205")
		const addressxTjHaV8 = accounts[6]
		const addressNfUfNlO = accounts[2]
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const boolhOuNPb6 = await NALWuNk5o0.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressNfUfNlO, addressxTjHaV8, uintJbUxo1K, {from: accounts[4]});

		assert.equal(boolhOuNPb6, false)
		assert.equal(uint256IhPpJio, BigInt("2000000000000000000000000000"))
		await expect(NALWuNk5o0.transferFrom.call(addressNfUfNlO, addressxTjHaV8, uintJbUxo1K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintktvoMgA = BigInt("205")
		const addressDZwPIcC = accounts[7]
		const addressjoJPtEd = accounts[2]
		const uint8cay2ssx = await NALWuNk5o0.decimals.call({from: accounts[4]});
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressjoJPtEd, addressDZwPIcC, uintktvoMgA, {from: accounts[4]});

		assert.equal(uint256IhPpJio, BigInt("2000000000000000000000000000"))
		assert.equal(uint8cay2ssx, BigInt("18"))
		await expect(NALWuNk5o0.transferFrom.call(addressjoJPtEd, addressDZwPIcC, uintktvoMgA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const uintIQXpcFF = BigInt("1985")
		const addressNpKkwHs = "0x0000000000000000000000000000000000000001"
		const uintVR00kUr = BigInt("607")
		const uintZ6v33hX = BigInt("205")
		const addressvEUe21p = accounts[6]
		const addressxqEnam = accounts[2]
		const addressy3T4BAm = accounts[3]
		await NALWuNk5o0.renounceAdmin.call({from: accounts[4]});
		const boolrKUDMJM = await NALWuNk5o0.unlock.call(addressNpKkwHs, uintIQXpcFF, {from: accounts[3]});
		const uint256IhPpJio = await NALWuNk5o0.totalSupply.call({from: accounts[2]});
		const uint256SoRSN9v = await NALWuNk5o0.burn.call(uintVR00kUr, {from: accounts[2]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressxqEnam, addressvEUe21p, uintZ6v33hX, {from: accounts[4]});
		const uint256c8MsSkH = await NALWuNk5o0.balanceOf.call(addressy3T4BAm, {from: accounts[0]});

		await expect(NALWuNk5o0.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwKC15XC = await NAL.new({from: accounts[2]});
		const uintnLUdn6L = BigInt("1445")
		const addressxLDp4g = accounts[3]
		const addressKzYvFJq = accounts[4]
		const addressiADHGvn = accounts[3]
		const addressZB8KvGy = await NALwKC15XC.burnFrom.call(addressxLDp4g, uintnLUdn6L, {from: accounts[0]});
		const boolpKM2Ief = await NALwKC15XC.isAdmin.call(addressKzYvFJq, {from: accounts[2]});
		const boolxiOJYc5 = await NALwKC15XC.isAdmin.call(addressiADHGvn, {from: accounts[1]});

		await expect(NALwKC15XC.burnFrom.call(addressxLDp4g, uintnLUdn6L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALiTwydk = await NAL.new({from: accounts[4]});
		const uintARlh7hS = BigInt("1488")
		const addressER8amOi = accounts[4]
		const boolIQvzJeF = await NALiTwydk.unlock.call(addressER8amOi, uintARlh7hS, {from: accounts[4]});
		await NALiTwydk.unpause.call({from: accounts[3]});
		await NALiTwydk.onlyAdmin.call({from: accounts[2]});

		await expect(NALiTwydk.unlock.call(addressER8amOi, uintARlh7hS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const addressLHvzLDb = accounts[3]
		const uintsaYKD2A = BigInt("646")
		const addressuvCTXDA = accounts[1]
		const uintqsvboJW = BigInt("1117")
		const addressV8P1arQ = accounts[4]
		const uintYHg6dS8 = BigInt("949")
		const uintyrJfs0s = BigInt("1620")
		const addresslkHLTh1 = accounts[3]
		const uint256aJm4Lwt = await NALWuNk5o0.balanceOf.call(addressLHvzLDb, {from: accounts[1]});
		const boolPSYbUH = await NALWuNk5o0.approve.call(addressuvCTXDA, uintsaYKD2A, {from: accounts[0]});
		const boolDeCL2i6 = await NALWuNk5o0.approve.call(addressV8P1arQ, uintqsvboJW, {from: accounts[5]});
		const bool6E7s9z = await NALWuNk5o0.lock.call(addresslkHLTh1, uintyrJfs0s, uintYHg6dS8, {from: accounts[3]});

		assert.equal(bool6E7s9z, true)
		assert.equal(boolDeCL2i6, true)
		assert.equal(boolPSYbUH, true)
		assert.equal(uint256aJm4Lwt, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const addressDDn47oi = accounts[2]
		const addressRr6XeZz = accounts[3]
		const uintXUN6aMn = BigInt("625")
		const addressHeD0oPG = accounts[5]
		const boolMMmyVXz = await NALWuNk5o0.unfreezeAccount.call(addressDDn47oi, {from: accounts[3]});
		const boolVpcTzFH = await NALWuNk5o0.isAdmin.call(addressRr6XeZz, {from: "0x0000000000000000000000000000000000000001"});
		const boolZACYvAv = await NALWuNk5o0.transfer.call(addressHeD0oPG, uintXUN6aMn, {from: accounts[0]});
		const stringcmIAhLg = await NALWuNk5o0.symbol.call({from: accounts[3]});

		await expect(NALWuNk5o0.unfreezeAccount.call(addressDDn47oi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWuNk5o0 = await NAL.new({from: accounts[3]});
		const addressJKXGZmq = accounts[0]
		const uintk4cdJeG = BigInt("1804")
		const addresshAPxaQs = accounts[3]
		const uintrCnPFE0 = BigInt("215")
		const addresscIL7t3b = accounts[7]
		const addressvWYi9wh = accounts[2]
		const addressDP9EDU0 = await NALWuNk5o0.removeAdmin.call(addressJKXGZmq, {from: accounts[3]});
		const boolQJeGrJk = await NALWuNk5o0.decreaseAllowance.call(addresshAPxaQs, uintk4cdJeG, {from: accounts[0]});
		const boollIOUBRN = await NALWuNk5o0.transferFrom.call(addressvWYi9wh, addresscIL7t3b, uintrCnPFE0, {from: accounts[4]});
		const stringyZo4SPW = await NALWuNk5o0.symbol.call({from: accounts[1]});

		await expect(NALWuNk5o0.removeAdmin.call(addressJKXGZmq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALoCWF7FH = await NAL.new({from: accounts[4]});
		const uinthBbhz37 = BigInt("1333")
		const uintVQeRLUA = BigInt("868")
		const addressh7SBkLt = accounts[0]
		const addresse94I9E7 = accounts[3]
		const addressUXZphOk = accounts[1]
		const addressRSadgUi = accounts[1]
		const booleYS3to1 = await NALoCWF7FH.transferWithLock.call(addressh7SBkLt, uintVQeRLUA, uinthBbhz37, {from: accounts[4]});
		const addressAmCwqzh = await NALoCWF7FH.transferOwnership.call(addresse94I9E7, {from: "0x0000000000000000000000000000000000000001"});
		const boolO808hXQ = await NALoCWF7FH.isAdmin.call(addressUXZphOk, {from: "0x0000000000000000000000000000000000000001"});
		const boolQJdDBdO = await NALoCWF7FH.unfreezeAccount.call(addressRSadgUi, {from: accounts[1]});

		assert.equal(booleYS3to1, true)
		await expect(NALoCWF7FH.transferOwnership.call(addresse94I9E7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})