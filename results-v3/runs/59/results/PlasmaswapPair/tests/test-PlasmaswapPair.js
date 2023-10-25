const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairccQzn6f = await PlasmaswapPair.new({from: accounts[1]});
		const addressrinW6lD = accounts[2]
		const addressRotDRI = accounts[0]
		const byteoJOli8Z = "0x181319070b071004052006"
		const addresspd9ot3 = accounts[1]
		const uintHZH2Hd = BigInt("1284")
		const uintjMFNXz = BigInt("922")
		const uintfPjbLIa = await PlasmaswapPairccQzn6f.mint.call(addressrinW6lD, {from: accounts[4]});
		const addressmRLhjV = await PlasmaswapPairccQzn6f.skim.call(addressRotDRI, {from: accounts[3]});
		const uint112YUbnjdm = await PlasmaswapPairccQzn6f.getReserves.call({from: accounts[5]});
		const uinthUfafKh = await PlasmaswapPairccQzn6f.swap.call(uintjMFNXz, uintHZH2Hd, addresspd9ot3, byteoJOli8Z, {from: accounts[4]});
		await PlasmaswapPairccQzn6f.sync.call({from: accounts[1]});

		await expect(PlasmaswapPairccQzn6f.mint.call(addressrinW6lD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhsDzbPp = await PlasmaswapPair.new({from: accounts[5]});
		const addressxFOnrNq = accounts[3]
		const addressyWpLAJj = accounts[2]
		const addressfss5z7I = accounts[2]
		const addressXioGT1 = accounts[5]
		const byteK0ZCzIv = "0x05060706120c1614061102"
		const addressLrCp8Uj = "0x0000000000000000000000000000000000000001"
		const uintOYKKD8i = BigInt("1016")
		const uintkoqMpWa = BigInt("1934")
		const addressT2hCuRo = accounts[5]
		const address7kIODY = accounts[1]
		await PlasmaswapPairhsDzbPp.sync.call({from: accounts[3]});
		const uintWRsWviy = await PlasmaswapPairhsDzbPp.mint.call(addressxFOnrNq, {from: accounts[5]});
		const uint8KtqXJ = await PlasmaswapPairhsDzbPp.mint.call(addressyWpLAJj, {from: accounts[0]});
		const addresskIrSfwi = await PlasmaswapPairhsDzbPp.initialize.call(addressXioGT1, addressfss5z7I, {from: accounts[5]});
		const uintsX2i9mm = await PlasmaswapPairhsDzbPp.swap.call(uintkoqMpWa, uintOYKKD8i, addressLrCp8Uj, byteK0ZCzIv, {from: accounts[5]});
		const addressWR7nXqM = await PlasmaswapPairhsDzbPp.initialize.call(address7kIODY, addressT2hCuRo, {from: accounts[4]});

		await expect(PlasmaswapPairhsDzbPp.sync.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairIYHYNiB = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressa0NFf05 = "0x0000000000000000000000000000000000000001"
		const addressnjih9y1 = accounts[2]
		await PlasmaswapPairIYHYNiB.lock.call({from: accounts[1]});
		const uintnPSek2O = await PlasmaswapPairIYHYNiB.mint.call(addressa0NFf05, {from: accounts[2]});
		const addressqZYYcHc = await PlasmaswapPairIYHYNiB.skim.call(addressnjih9y1, {from: accounts[5]});
		await PlasmaswapPairIYHYNiB.lock.call({from: accounts[1]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairPLqnfr = await PlasmaswapPair.new({from: accounts[1]});
		await PlasmaswapPairPLqnfr.lock.call({from: accounts[0]});
		await PlasmaswapPairPLqnfr.sync.call({from: accounts[4]});

		await expect(PlasmaswapPairPLqnfr.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairEm0bNk9 = await PlasmaswapPair.new({from: accounts[5]});
		const addressDQja0GS = accounts[3]
		const uintjJPPhSs = await PlasmaswapPairEm0bNk9.burn.call(addressDQja0GS, {from: accounts[0]});
		const uint112OKbqqdl = await PlasmaswapPairEm0bNk9.getReserves.call({from: accounts[2]});
		await PlasmaswapPairEm0bNk9.lock.call({from: accounts[0]});

		await expect(PlasmaswapPairEm0bNk9.burn.call(addressDQja0GS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairlnX8ZF = await PlasmaswapPair.new({from: accounts[3]});
		const addresshY7tu48 = accounts[4]
		const addressk4McHeP = "0x0000000000000000000000000000000000000001"
		const addressZ1d71Eo = await PlasmaswapPairlnX8ZF.skim.call(addresshY7tu48, {from: "0x0000000000000000000000000000000000000001"});
		const uintV5OQpPt = await PlasmaswapPairlnX8ZF.burn.call(addressk4McHeP, {from: accounts[1]});
		await PlasmaswapPairlnX8ZF.sync.call({from: accounts[3]});

		await expect(PlasmaswapPairlnX8ZF.skim.call(addresshY7tu48, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairkmHByY5 = await PlasmaswapPair.new({from: accounts[2]});
		const bytegrYTQg = "0x011e0d1f070c06191a1f0d1314040d02121600150d1b1b0d1304011408"
		const addresszg0X3z = accounts[4]
		const uintjiGiWJ = BigInt("639")
		const uintlwsf5cG = BigInt("959")
		const addressC2MkbTv = accounts[0]
		const addressMV8yQf7 = accounts[0]
		const addressuSnsKR = accounts[3]
		const addressUFBjnNR = accounts[3]
		const addressTEPjF9U = accounts[3]
		const addressfHrh9zX = accounts[1]
		const uintAeyLc9 = await PlasmaswapPairkmHByY5.swap.call(uintlwsf5cG, uintjiGiWJ, addresszg0X3z, bytegrYTQg, {from: accounts[2]});
		const addressR8mC6rF = await PlasmaswapPairkmHByY5.initialize.call(addressMV8yQf7, addressC2MkbTv, {from: accounts[4]});
		const uintPXqTdQR = await PlasmaswapPairkmHByY5.mint.call(addressuSnsKR, {from: accounts[1]});
		const uintB6Jy3a = await PlasmaswapPairkmHByY5.burn.call(addressUFBjnNR, {from: accounts[3]});
		const uintesVxIZe = await PlasmaswapPairkmHByY5.mint.call(addressTEPjF9U, {from: accounts[3]});
		const uintXIGcm2D = await PlasmaswapPairkmHByY5.burn.call(addressfHrh9zX, {from: accounts[3]});

		await expect(PlasmaswapPairkmHByY5.swap.call(uintlwsf5cG, uintjiGiWJ, addresszg0X3z, bytegrYTQg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairkmHByY5 = await PlasmaswapPair.new({from: accounts[2]});
		const addresszBkGq70 = accounts[0]
		const addressrKCw73 = accounts[0]
		const addresszq3HVYw = accounts[3]
		const addresstNZzAz = accounts[4]
		const addressbPXh8aZ = accounts[3]
		const addresswA5bTp = accounts[1]
		const addressR8mC6rF = await PlasmaswapPairkmHByY5.initialize.call(addressrKCw73, addresszBkGq70, {from: accounts[4]});
		const uintPXqTdQR = await PlasmaswapPairkmHByY5.mint.call(addresszq3HVYw, {from: accounts[1]});
		const uintB6Jy3a = await PlasmaswapPairkmHByY5.burn.call(addresstNZzAz, {from: accounts[3]});
		const uintesVxIZe = await PlasmaswapPairkmHByY5.mint.call(addressbPXh8aZ, {from: accounts[3]});
		const uintXIGcm2D = await PlasmaswapPairkmHByY5.burn.call(addresswA5bTp, {from: accounts[3]});

		await expect(PlasmaswapPairkmHByY5.initialize.call(addressrKCw73, addresszBkGq70, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})