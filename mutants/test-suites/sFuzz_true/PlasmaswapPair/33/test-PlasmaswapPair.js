const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairLNJibqc = await PlasmaswapPair.new({from: accounts[2]});
		const addressyptgxjJ = accounts[5]
		const addressUXs5u0F = accounts[0]
		const addressOeLgNpO = accounts[3]
		const addressneF3jHP = "0x0000000000000000000000000000000000000001"
		const addressZxTa6nK = accounts[1]
		const byteK88NOe9 = "0x1905071417121f03"
		const addressUnX5Rv6 = accounts[4]
		const uintJzwUk3 = BigInt("1966")
		const uintEcruazM = BigInt("647")
//		const uintXsHcUxD = await PlasmaswapPairLNJibqc.burn.call(addressyptgxjJ, {from: accounts[3]});
//		const addressNao66d = await PlasmaswapPairLNJibqc.initialize.call(addressOeLgNpO, addressUXs5u0F, {from: accounts[0]});
//		const uintyQD2yA8 = await PlasmaswapPairLNJibqc.mint.call(addressneF3jHP, {from: accounts[1]});
//		const addressYLuiHwq = await PlasmaswapPairLNJibqc.skim.call(addressZxTa6nK, {from: accounts[0]});
//		const uintvxoFiCl = await PlasmaswapPairLNJibqc.swap.call(uintEcruazM, uintJzwUk3, addressUnX5Rv6, byteK88NOe9, {from: accounts[1]});

		await expect(PlasmaswapPairLNJibqc.burn.call(addressyptgxjJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJ1LsmfI = await PlasmaswapPair.new({from: accounts[3]});
		const byteTRSPuGT = "0x1913"
		const addressY3UlyHF = accounts[4]
		const uintAQOdlkO = BigInt("562")
		const uintJQTHJ0V = BigInt("514")
		const uint112w5y8l6R = await PlasmaswapPairJ1LsmfI.getReserves.call({from: accounts[3]});
		const uint112pH0IX3l = await PlasmaswapPairJ1LsmfI.getReserves.call({from: accounts[0]});
//		const uinteHU7Kl7 = await PlasmaswapPairJ1LsmfI.swap.call(uintJQTHJ0V, uintAQOdlkO, addressY3UlyHF, byteTRSPuGT, {from: accounts[2]});

		await expect(PlasmaswapPairJ1LsmfI.swap.call(uintJQTHJ0V, uintAQOdlkO, addressY3UlyHF, byteTRSPuGT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairAGd9GHd = await PlasmaswapPair.new({from: accounts[0]});
		const addressG7O03G = accounts[3]
		const bytemjcB54q = "0x00040714091d0111141e1409071103"
		const address840JQo = accounts[0]
		const uintfkoTWt = BigInt("1208")
		const uintbdUMzSI = BigInt("615")
//		await PlasmaswapPairAGd9GHd.lock.call({from: accounts[3]});
//		await PlasmaswapPairAGd9GHd.lock.call({from: accounts[0]});
//		const uintTv0x9Hx = await PlasmaswapPairAGd9GHd.burn.call(addressG7O03G, {from: accounts[3]});
//		const uint1AgrZd = await PlasmaswapPairAGd9GHd.swap.call(uintbdUMzSI, uintfkoTWt, address840JQo, bytemjcB54q, {from: accounts[1]});
//		const uint112aWKhnrB = await PlasmaswapPairAGd9GHd.getReserves.call({from: accounts[1]});
//		const uint112CFy25pK = await PlasmaswapPairAGd9GHd.getReserves.call({from: accounts[2]});

		await expect(PlasmaswapPairAGd9GHd.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairNZ1LcAI = await PlasmaswapPair.new({from: accounts[0]});
		const addresspOf7EFE = accounts[4]
		const addressEUJdWXl = accounts[2]
		const uint112CPYWr60 = await PlasmaswapPairNZ1LcAI.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressw4LRlOv = await PlasmaswapPairNZ1LcAI.initialize.call(addressEUJdWXl, addresspOf7EFE, {from: accounts[3]});

		await expect(PlasmaswapPairNZ1LcAI.initialize.call(addressEUJdWXl, addresspOf7EFE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairoxEunZd = await PlasmaswapPair.new({from: accounts[0]});
		const addressp2qd5P6 = "0x0000000000000000000000000000000000000001"
		const addresskJ9HTJE = accounts[2]
		const addressypZIZFL = accounts[2]
//		const uintalmCqbG = await PlasmaswapPairoxEunZd.mint.call(addressp2qd5P6, {from: accounts[3]});
//		const addressqEbdtAc = await PlasmaswapPairoxEunZd.initialize.call(addressypZIZFL, addresskJ9HTJE, {from: accounts[4]});
//		const uint112Tsd661V = await PlasmaswapPairoxEunZd.getReserves.call({from: accounts[5]});

		await expect(PlasmaswapPairoxEunZd.mint.call(addressp2qd5P6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairu9fWG19 = await PlasmaswapPair.new({from: accounts[1]});
		const addresskNPDIz3 = accounts[0]
		const addresstp0gmFJ = accounts[0]
		const addressPK2PtC7 = accounts[5]
		const addressGVahqog = accounts[3]
		const addressfg50MQ0 = accounts[5]
		const addressTFJmdrr = accounts[1]
//		const addressZm8cxYx = await PlasmaswapPairu9fWG19.skim.call(addresskNPDIz3, {from: accounts[4]});
//		const addressOxhTevb = await PlasmaswapPairu9fWG19.initialize.call(addressPK2PtC7, addresstp0gmFJ, {from: accounts[4]});
//		await PlasmaswapPairu9fWG19.lock.call({from: accounts[2]});
//		const uint112cKE1AlZ = await PlasmaswapPairu9fWG19.getReserves.call({from: accounts[0]});
//		const addressvN6sNpW = await PlasmaswapPairu9fWG19.initialize.call(addressfg50MQ0, addressGVahqog, {from: accounts[0]});
//		const addressOfYsPmp = await PlasmaswapPairu9fWG19.skim.call(addressTFJmdrr, {from: accounts[0]});

		await expect(PlasmaswapPairu9fWG19.skim.call(addresskNPDIz3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairNZ1LcAI = await PlasmaswapPair.new({from: accounts[0]});
		const addressOjxpLnK = "0x0000000000000000000000000000000000000001"
		const addressycNzmXt = accounts[4]
		const addresslr8PjHd = accounts[5]
		const addressDJmWjq9 = accounts[3]
		const addressjXanKYa = await PlasmaswapPairNZ1LcAI.initialize.call(addressycNzmXt, addressOjxpLnK, {from: accounts[0]});
		const uint112BjzLwm2 = await PlasmaswapPairNZ1LcAI.getReserves.call({from: accounts[5]});
//		const addressw4LRlOv = await PlasmaswapPairNZ1LcAI.initialize.call(addressDJmWjq9, addresslr8PjHd, {from: accounts[3]});

		await expect(PlasmaswapPairNZ1LcAI.initialize.call(addressDJmWjq9, addresslr8PjHd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairLSi2KOB = await PlasmaswapPair.new({from: accounts[4]});
		const addresswrGXW4C = accounts[2]
		const byteLVG2Z3k = "0x1c1f0c100b1e1708040e"
		const addressbxl09jE = "0x0000000000000000000000000000000000000001"
		const uintJ8xXbdp = BigInt("512")
		const uintFZPNwX = BigInt("487")
//		await PlasmaswapPairLSi2KOB.sync.call({from: accounts[0]});
//		const uintQsw2o7r = await PlasmaswapPairLSi2KOB.burn.call(addresswrGXW4C, {from: accounts[3]});
//		const uintw1KUov = await PlasmaswapPairLSi2KOB.swap.call(uintFZPNwX, uintJ8xXbdp, addressbxl09jE, byteLVG2Z3k, {from: accounts[2]});

		await expect(PlasmaswapPairLSi2KOB.sync.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairQ1nznRA = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTkA57LC = accounts[4]
		const addressjVmLAJE = "0x0000000000000000000000000000000000000001"
		const byteKQjPsW4 = "0x1d0d0b120414180b180d0b0f1d060e1c15070b"
		const addressTKBHqxp = accounts[2]
		const uintDxnelGz = BigInt("1072")
		const uintiM11LmC = BigInt("1351")
		const addressKuNAKnd = await PlasmaswapPairQ1nznRA.skim.call(addressTkA57LC, {from: accounts[4]});
		const uintxIQyVEY = await PlasmaswapPairQ1nznRA.burn.call(addressjVmLAJE, {from: accounts[1]});
		await PlasmaswapPairQ1nznRA.sync.call({from: accounts[1]});
		const uintIKVg0aL = await PlasmaswapPairQ1nznRA.swap.call(uintiM11LmC, uintDxnelGz, addressTKBHqxp, byteKQjPsW4, {from: "0x0000000000000000000000000000000000000001"});
		await PlasmaswapPairQ1nznRA.sync.call({from: accounts[2]});
	});
})