const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairNS2pr3z = await PlasmaswapPair.new({from: accounts[4]});
		const addresslOkgrtL = accounts[3]
		const addresslsWkbLg = accounts[2]
		const addressl7n6VGO = accounts[2]
		const addressta5aiU1 = accounts[1]
		const addressLyBHBZA = await PlasmaswapPairNS2pr3z.initialize.call(addresslsWkbLg, addresslOkgrtL, {from: accounts[0]});
		const addressrXKSJJc = await PlasmaswapPairNS2pr3z.initialize.call(addressta5aiU1, addressl7n6VGO, {from: accounts[3]});
		await PlasmaswapPairNS2pr3z.lock.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairNS2pr3z.initialize.call(addresslsWkbLg, addresslOkgrtL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairy9Tw6Jr = await PlasmaswapPair.new({from: accounts[2]});
		const addressoA8LYDM = accounts[1]
		await PlasmaswapPairy9Tw6Jr.sync.call({from: accounts[0]});
		const addressQdyHevM = await PlasmaswapPairy9Tw6Jr.skim.call(addressoA8LYDM, {from: accounts[0]});
		await PlasmaswapPairy9Tw6Jr.lock.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairy9Tw6Jr.sync.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair9haI1l = await PlasmaswapPair.new({from: accounts[4]});
		const addressGnxL0R5 = accounts[0]
		const addressq6A0DpS = accounts[2]
		const addressWXGAtDb = await PlasmaswapPair9haI1l.skim.call(addressGnxL0R5, {from: accounts[1]});
		const uint112Ab0JADR = await PlasmaswapPair9haI1l.getReserves.call({from: accounts[3]});
		const uintXtpVNT9 = await PlasmaswapPair9haI1l.burn.call(addressq6A0DpS, {from: accounts[4]});

		await expect(PlasmaswapPair9haI1l.skim.call(addressGnxL0R5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairvCzQQ3R = await PlasmaswapPair.new({from: accounts[3]});
		const addressMzaT9Lj = accounts[4]
		const addressjhWmcKS = accounts[1]
		const addresstp52Nro = accounts[3]
		const uintPWmGN2n = await PlasmaswapPairvCzQQ3R.mint.call(addressMzaT9Lj, {from: accounts[4]});
		const addresshBPdEjc = await PlasmaswapPairvCzQQ3R.skim.call(addressjhWmcKS, {from: "0x0000000000000000000000000000000000000001"});
		const addressZMB7yuq = await PlasmaswapPairvCzQQ3R.skim.call(addresstp52Nro, {from: accounts[1]});

		await expect(PlasmaswapPairvCzQQ3R.mint.call(addressMzaT9Lj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair6cxVva = await PlasmaswapPair.new({from: accounts[2]});
		const addressFG7rrm = accounts[1]
		const addressWClYXgD = accounts[4]
		await PlasmaswapPair6cxVva.lock.call({from: accounts[4]});
		const uint112SBnM85 = await PlasmaswapPair6cxVva.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
		const uintVIC9Zlg = await PlasmaswapPair6cxVva.mint.call(addressFG7rrm, {from: accounts[0]});
		const uint112oFGHMV1 = await PlasmaswapPair6cxVva.getReserves.call({from: accounts[5]});
		const uintLnAPVZ = await PlasmaswapPair6cxVva.burn.call(addressWClYXgD, {from: accounts[1]});
		await PlasmaswapPair6cxVva.lock.call({from: accounts[2]});

		await expect(PlasmaswapPair6cxVva.lock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairYLkiO8L = await PlasmaswapPair.new({from: accounts[0]});
		const addressKrwhJho = accounts[1]
		const addressXWIN5i = accounts[4]
		const uintZS0Gdy1 = await PlasmaswapPairYLkiO8L.burn.call(addressKrwhJho, {from: accounts[2]});
		const addressN0lOcuL = await PlasmaswapPairYLkiO8L.skim.call(addressXWIN5i, {from: accounts[3]});
		const uint112v3uUdzv = await PlasmaswapPairYLkiO8L.getReserves.call({from: accounts[2]});
		await PlasmaswapPairYLkiO8L.sync.call({from: accounts[0]});

		await expect(PlasmaswapPairYLkiO8L.burn.call(addressKrwhJho, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhqWk4oK = await PlasmaswapPair.new({from: accounts[5]});
		const byteVnSQIbb = "0x0c14151a050d1f000a1f101105081e11061209"
		const addressJx8HDiw = accounts[4]
		const uintXxPHCdi = BigInt("1156")
		const uintUWaghTy = BigInt("1441")
		const addressZpHwNPu = accounts[5]
		const addressL76e7lm = accounts[0]
		const uintF0KCZlJ = await PlasmaswapPairhqWk4oK.swap.call(uintUWaghTy, uintXxPHCdi, addressJx8HDiw, byteVnSQIbb, {from: accounts[3]});
		const uintV7r3oZv = await PlasmaswapPairhqWk4oK.burn.call(addressZpHwNPu, {from: accounts[1]});
		await PlasmaswapPairhqWk4oK.lock.call({from: accounts[4]});
		const uintIMbFEq0 = await PlasmaswapPairhqWk4oK.mint.call(addressL76e7lm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairhqWk4oK.swap.call(uintUWaghTy, uintXxPHCdi, addressJx8HDiw, byteVnSQIbb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaircOv5lYm = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqT8DJmv = accounts[1]
		const byteYLuE3Ar = "0x10101310111c1b0100041f0f05071d050c1c0b18"
		const addressVrZrtmp = accounts[4]
		const uintux697wF = BigInt("377")
		const uintnovsW48 = BigInt("1119")
		const byteBN19sN = "0x15171c0615140c191d02151d031119110b1f1818191d0c02060a19010d181d"
		const addressVyGlz3o = accounts[2]
		const uintrldptaY = BigInt("1130")
		const uintxge8hlD = BigInt("512")
		const addressvTTW2wQ = accounts[4]
		const addressXmOc0dO = accounts[4]
		const addresspslmxfI = "0x0000000000000000000000000000000000000001"
		const addresshX5FShH = await PlasmaswapPaircOv5lYm.skim.call(addressqT8DJmv, {from: accounts[5]});
		const uintDUREBtf = await PlasmaswapPaircOv5lYm.swap.call(uintnovsW48, uintux697wF, addressVrZrtmp, byteYLuE3Ar, {from: accounts[3]});
		const uintk9vPrL6 = await PlasmaswapPaircOv5lYm.swap.call(uintxge8hlD, uintrldptaY, addressVyGlz3o, byteBN19sN, {from: accounts[3]});
		const uintoM5Xxrc = await PlasmaswapPaircOv5lYm.mint.call(addressvTTW2wQ, {from: accounts[0]});
		const addressx8JYeQK = await PlasmaswapPaircOv5lYm.initialize.call(addresspslmxfI, addressXmOc0dO, {from: "0x0000000000000000000000000000000000000001"});
	});
})