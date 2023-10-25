const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressarO11qj = accounts[3]
		const addressmbirpG8 = accounts[2]
		const SpiritCoinZFWHcY = await SpiritCoin.new(addressarO11qj, addressmbirpG8, {from: accounts[1]});
		const addressMVTE6P4 = accounts[3]
		const addressGIcMZYV = accounts[3]
		const addresslfuXyGh = accounts[3]
		const uintYQ6p4p = await SpiritCoinZFWHcY.allowance.call(addressGIcMZYV, addressMVTE6P4, {from: accounts[0]});
		const addresscSF6sE = await SpiritCoinZFWHcY.setMinter.call(addresslfuXyGh, {from: accounts[0]});

		assert.equal(uintYQ6p4p, BigInt("0"))
		await expect(SpiritCoinZFWHcY.setMinter.call(addresslfuXyGh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressG1lfcLG = accounts[3]
		const addresswzRN4dh = accounts[3]
		const SpiritCoinuZcLyLc = await SpiritCoin.new(addressG1lfcLG, addresswzRN4dh, {from: accounts[0]});
		const uintqittxvq = BigInt("270")
		const addressxI41wsw = accounts[2]
		const addressBevm31b = accounts[4]
		const addressldySnsH = accounts[4]
		const addressdj0sxGo = accounts[0]
		const addressJkA57lV = await SpiritCoinuZcLyLc.mint.call(addressxI41wsw, uintqittxvq, {from: accounts[0]});
		const uintZ69Pbgu = await SpiritCoinuZcLyLc.balanceOf.call(addressBevm31b, {from: "0x0000000000000000000000000000000000000001"});
		const uintxjf4Oll = await SpiritCoinuZcLyLc.allowance.call(addressdj0sxGo, addressldySnsH, {from: accounts[4]});

		await expect(SpiritCoinuZcLyLc.mint.call(addressxI41wsw, uintqittxvq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressiNG8ftz = accounts[2]
		const addressFPX8eFr = accounts[4]
		const SpiritCoiniJ8qENZ = await SpiritCoin.new(addressiNG8ftz, addressFPX8eFr, {from: accounts[4]});
		const uintaUi37z = BigInt("725")
		const addressCA6rGiX = accounts[0]
		const addressm3h1jQc = accounts[3]
		const addresshntVN00 = accounts[4]
		const boolmKkbfPJ = await SpiritCoiniJ8qENZ.transfer.call(addressCA6rGiX, uintaUi37z, {from: accounts[2]});
		const uintIcz9iA = await SpiritCoiniJ8qENZ.allowance.call(addresshntVN00, addressm3h1jQc, {from: accounts[2]});

		assert.equal(boolmKkbfPJ, true)
		assert.equal(uintIcz9iA, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressrwoOIJe = accounts[1]
		const addressjVjKrXQ = accounts[0]
		const SpiritCoineziSoH = await SpiritCoin.new(addressrwoOIJe, addressjVjKrXQ, {from: "0x0000000000000000000000000000000000000001"});
		const uinteRYAXg = BigInt("1098")
		const addressOx90aC = accounts[3]
		const uintJbyiLsL = BigInt("1575")
		const addressdi382xZ = accounts[3]
		const addressNdUoI45 = accounts[2]
		const addresswMOO55t = "0x0000000000000000000000000000000000000001"
		const addressgOjml8b = accounts[1]
		const addressoDPz4xl = accounts[2]
		const uintq72KR1 = BigInt("255")
		const addresszyf4nqD = accounts[4]
		const addressTQCyuxD = accounts[2]
		const boolDaEBoSF = await SpiritCoineziSoH.transfer.call(addressOx90aC, uinteRYAXg, {from: accounts[4]});
		const boolgS0ADe2 = await SpiritCoineziSoH.approve.call(addressdi382xZ, uintJbyiLsL, {from: accounts[4]});
		const uintiQvuX2 = await SpiritCoineziSoH.allowance.call(addresswMOO55t, addressNdUoI45, {from: accounts[3]});
		const uintN1vy83w = await SpiritCoineziSoH.allowance.call(addressoDPz4xl, addressgOjml8b, {from: accounts[4]});
		const boolABbdoLg = await SpiritCoineziSoH.transferFrom.call(addressTQCyuxD, addresszyf4nqD, uintq72KR1, {from: accounts[3]});
	});

	it('test for SpiritCoin', async () => {
		const addressAbKnmoK = "0x0000000000000000000000000000000000000001"
		const addresshtK8dHF = accounts[4]
		const SpiritCoinF7OOR8 = await SpiritCoin.new(addressAbKnmoK, addresshtK8dHF, {from: accounts[1]});
		const uintXAM2oub = BigInt("2039")
		const addressnu95HEJ = accounts[3]
		const uintIQukTrq = BigInt("692")
		const addressQN84tD4 = accounts[0]
		const uintJA8bC4o = BigInt("1285")
		const addressEE6rj8h = accounts[3]
		const addressQLAQaZU = accounts[2]
		const addresskSopGj1 = accounts[2]
		const boolYsSBFq8 = await SpiritCoinF7OOR8.approve.call(addressnu95HEJ, uintXAM2oub, {from: accounts[3]});
		const addressyoVLNxu = await SpiritCoinF7OOR8.mint.call(addressQN84tD4, uintIQukTrq, {from: accounts[0]});
		const booly8Hnxh5 = await SpiritCoinF7OOR8.transferFrom.call(addressQLAQaZU, addressEE6rj8h, uintJA8bC4o, {from: accounts[3]});
		const uintabfjp5V = await SpiritCoinF7OOR8.balanceOf.call(addresskSopGj1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYsSBFq8, true)
		await expect(SpiritCoinF7OOR8.mint.call(addressQN84tD4, uintIQukTrq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressFy4lH33 = accounts[3]
		const addressxDOTwQK = "0x0000000000000000000000000000000000000001"
		const SpiritCoincVEBihB = await SpiritCoin.new(addressFy4lH33, addressxDOTwQK, {from: accounts[1]});
		const addressmTyE62P = accounts[2]
		const uintuyE2kpk = BigInt("806")
		const addressUAEMRCM = accounts[2]
		const addresshLVYnjq = accounts[1]
		const uintYxLmTOK = BigInt("1893")
		const addresslmxVmIQ = accounts[3]
		const uintWZ7mPN0 = await SpiritCoincVEBihB.balanceOf.call(addressmTyE62P, {from: accounts[0]});
		const boolVAJLjLg = await SpiritCoincVEBihB.transferFrom.call(addresshLVYnjq, addressUAEMRCM, uintuyE2kpk, {from: accounts[1]});
		const addressWWHkYNr = await SpiritCoincVEBihB.mint.call(addresslmxVmIQ, uintYxLmTOK, {from: accounts[3]});

		assert.equal(uintWZ7mPN0, BigInt("0"))
		await expect(SpiritCoincVEBihB.transferFrom.call(addresshLVYnjq, addressUAEMRCM, uintuyE2kpk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresst3E92EW = accounts[1]
		const addressJQIFyDj = accounts[1]
		const SpiritCoinank59b0 = await SpiritCoin.new(addresst3E92EW, addressJQIFyDj, {from: accounts[2]});
		const addresscRzBehq = accounts[3]
		const uintxX93NUZ = BigInt("1149")
		const addressCAAyoa5 = accounts[1]
		const addressyKMeUZB = accounts[4]
		const uintgTW8FwS = BigInt("198")
		const addressAJso9gN = accounts[2]
		const uintWv9vnFH = await SpiritCoinank59b0.balanceOf.call(addresscRzBehq, {from: accounts[1]});
		const boolnTM4kYc = await SpiritCoinank59b0.transferFrom.call(addressyKMeUZB, addressCAAyoa5, uintxX93NUZ, {from: accounts[1]});
		const addressHFi6HtW = await SpiritCoinank59b0.mint.call(addressAJso9gN, uintgTW8FwS, {from: accounts[3]});

		assert.equal(uintWv9vnFH, BigInt("0"))
		await expect(SpiritCoinank59b0.transferFrom.call(addressyKMeUZB, addressCAAyoa5, uintxX93NUZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresslXdS2Ya = accounts[1]
		const addresslsqVQT = accounts[1]
		const SpiritCoino6OKT30 = await SpiritCoin.new(addresslXdS2Ya, addresslsqVQT, {from: accounts[2]});
		const uintVOq2Yax = BigInt("2031")
		const addressEqYbLH4 = accounts[4]
		const uintYXwZPr = BigInt("1576")
		const addresshGPWvhJ = accounts[3]
		const uintdC5RNu6 = BigInt("329")
		const addressWJblMVf = accounts[2]
		const booljmfB2I2 = await SpiritCoino6OKT30.approve.call(addressEqYbLH4, uintVOq2Yax, {from: accounts[1]});
		const addressxGWP7bi = await SpiritCoino6OKT30.mint.call(addresshGPWvhJ, uintYXwZPr, {from: accounts[1]});
		const addressx9ePfy = await SpiritCoino6OKT30.mint.call(addressWJblMVf, uintdC5RNu6, {from: accounts[3]});

		assert.equal(booljmfB2I2, true)
		await expect(SpiritCoino6OKT30.mint.call(addressWJblMVf, uintdC5RNu6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})