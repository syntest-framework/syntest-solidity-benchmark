const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairdwR6Iw = await PlasmaswapPair.new({from: accounts[2]});
		const addresshW1Yhx = accounts[4]
		const addressZpP9wyW = accounts[3]
		const addressX6EFJkU = accounts[3]
		const addressiKFC6fv = accounts[2]
		const addressIGwAt8o = await PlasmaswapPairdwR6Iw.initialize.call(addressZpP9wyW, addresshW1Yhx, {from: accounts[5]});
		const uintjH8MJ4U = await PlasmaswapPairdwR6Iw.mint.call(addressX6EFJkU, {from: accounts[0]});
		const uintcSsrRoE = await PlasmaswapPairdwR6Iw.burn.call(addressiKFC6fv, {from: accounts[2]});

		await expect(PlasmaswapPairdwR6Iw.initialize.call(addressZpP9wyW, addresshW1Yhx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairAeSDrYa = await PlasmaswapPair.new({from: accounts[0]});
		const addressZ4UmxJ3 = "0x0000000000000000000000000000000000000001"
		const byteqCPGYG = "0x1319171320"
		const addressymT1xcF = accounts[0]
		const uintaNSal8W = BigInt("111")
		const uintY5Rl2Pt = BigInt("1112")
		const addressq6B1aR8 = accounts[1]
		const addressuxTXhX = accounts[1]
		const uinthbVfzZk = await PlasmaswapPairAeSDrYa.burn.call(addressZ4UmxJ3, {from: accounts[3]});
		const uintNjnldXN = await PlasmaswapPairAeSDrYa.swap.call(uintY5Rl2Pt, uintaNSal8W, addressymT1xcF, byteqCPGYG, {from: accounts[0]});
		const uintGlyMuSP = await PlasmaswapPairAeSDrYa.mint.call(addressq6B1aR8, {from: accounts[1]});
		const uintmlj1V85 = await PlasmaswapPairAeSDrYa.mint.call(addressuxTXhX, {from: accounts[0]});

		await expect(PlasmaswapPairAeSDrYa.burn.call(addressZ4UmxJ3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairTyBtNdx = await PlasmaswapPair.new({from: accounts[0]});
		const byteib4brXy = "0x0f1803081003070d1d131f1c08180819060b110d110d0d121600"
		const addressQWSoRLO = accounts[4]
		const uintKNQk1GH = BigInt("517")
		const uintxWEGd6 = BigInt("1422")
		const addressOvtQ4Cj = accounts[2]
		const uintW4WCn0Q = await PlasmaswapPairTyBtNdx.swap.call(uintxWEGd6, uintKNQk1GH, addressQWSoRLO, byteib4brXy, {from: accounts[1]});
		const uintOqlYakY = await PlasmaswapPairTyBtNdx.burn.call(addressOvtQ4Cj, {from: accounts[0]});

		await expect(PlasmaswapPairTyBtNdx.swap.call(uintxWEGd6, uintKNQk1GH, addressQWSoRLO, byteib4brXy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairCxoKCf2 = await PlasmaswapPair.new({from: accounts[4]});
		const addressXlmaD2I = accounts[2]
		const addresss9RIFI = accounts[3]
		const bytebZiI1fk = "0x0c1f0c0a091711011f1c"
		const addressDKVfujK = accounts[1]
		const uintlAHJwlk = BigInt("1489")
		const uintyBl75t = BigInt("1357")
		await PlasmaswapPairCxoKCf2.lock.call({from: accounts[0]});
		const address1AIc78 = await PlasmaswapPairCxoKCf2.skim.call(addressXlmaD2I, {from: accounts[3]});
		const uint112e9cZK4x = await PlasmaswapPairCxoKCf2.getReserves.call({from: accounts[3]});
		const uint3VmsT1 = await PlasmaswapPairCxoKCf2.mint.call(addresss9RIFI, {from: accounts[4]});
		const uintDaswUSv = await PlasmaswapPairCxoKCf2.swap.call(uintyBl75t, uintlAHJwlk, addressDKVfujK, bytebZiI1fk, {from: accounts[0]});
		const uint112n5JuDrE = await PlasmaswapPairCxoKCf2.getReserves.call({from: accounts[0]});

		await expect(PlasmaswapPairCxoKCf2.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairooXbcpG = await PlasmaswapPair.new({from: accounts[0]});
		const addressj6eUHNE = accounts[5]
		const addressP6XIXpp = accounts[2]
		const addresssdnEiYD = accounts[3]
		const addresslBvM62k = await PlasmaswapPairooXbcpG.skim.call(addressj6eUHNE, {from: "0x0000000000000000000000000000000000000001"});
		const addressGVgJ6t1 = await PlasmaswapPairooXbcpG.initialize.call(addresssdnEiYD, addressP6XIXpp, {from: accounts[0]});
		await PlasmaswapPairooXbcpG.sync.call({from: accounts[5]});
		await PlasmaswapPairooXbcpG.sync.call({from: accounts[0]});

		await expect(PlasmaswapPairooXbcpG.skim.call(addressj6eUHNE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairrcLsNXO = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBGxlxAK = accounts[1]
		const addressrfodJ1I = accounts[3]
		const addressBe9Vff8 = accounts[4]
		const uintvYUcKs = await PlasmaswapPairrcLsNXO.burn.call(addressBGxlxAK, {from: accounts[2]});
		const addressfndOTaF = await PlasmaswapPairrcLsNXO.skim.call(addressrfodJ1I, {from: accounts[0]});
		await PlasmaswapPairrcLsNXO.lock.call({from: accounts[0]});
		const uintFefDbYD = await PlasmaswapPairrcLsNXO.mint.call(addressBe9Vff8, {from: accounts[3]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairTyBtNdx = await PlasmaswapPair.new({from: accounts[0]});
		const addressgRg85GT = accounts[3]
		const byteTkMiEF5 = "0x0f1803081003070d1d131f1c08180819060b110d110d0d121600"
		const addresszYtXOmW = accounts[4]
		const uintS8Uwyx = BigInt("517")
		const uintaXfdjZI = BigInt("1456")
		const addressqqzR0l8 = accounts[0]
		const byteKCa2pJo = "0x110b13170d100f0a070e1f0a050411011f16"
		const addressNe6RkCP = accounts[2]
		const uintgFAgMrE = BigInt("410")
		const uintKYm7PdI = BigInt("344")
		const uintxW75P1 = await PlasmaswapPairTyBtNdx.mint.call(addressgRg85GT, {from: accounts[3]});
		const uintW4WCn0Q = await PlasmaswapPairTyBtNdx.swap.call(uintaXfdjZI, uintS8Uwyx, addresszYtXOmW, byteTkMiEF5, {from: accounts[1]});
		const uintisgCVqn = await PlasmaswapPairTyBtNdx.burn.call(addressqqzR0l8, {from: accounts[5]});
		const uintSMZz30x = await PlasmaswapPairTyBtNdx.swap.call(uintKYm7PdI, uintgFAgMrE, addressNe6RkCP, byteKCa2pJo, {from: accounts[5]});

		await expect(PlasmaswapPairTyBtNdx.mint.call(addressgRg85GT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairTyBtNdx = await PlasmaswapPair.new({from: accounts[0]});
		const byteulLmBRQ = "0x02101a180e0a15140c05140e061f1f0106011d171417071d0914"
		const addressoaVbWxI = accounts[4]
		const uintALt7CP8 = BigInt("517")
		const uintytqA2Ji = BigInt("1422")
		const addresslQWWVzk = accounts[0]
		await PlasmaswapPairTyBtNdx.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const uintW4WCn0Q = await PlasmaswapPairTyBtNdx.swap.call(uintytqA2Ji, uintALt7CP8, addressoaVbWxI, byteulLmBRQ, {from: accounts[1]});
		const addressqQR92H = await PlasmaswapPairTyBtNdx.skim.call(addresslQWWVzk, {from: accounts[3]});

		await expect(PlasmaswapPairTyBtNdx.sync.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})