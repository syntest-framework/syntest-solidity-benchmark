const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairtvT980Z = await PlasmaswapPair.new({from: accounts[3]});
		const addressbbnwBq8 = accounts[0]
		const addressID5CVs4 = accounts[3]
		const addressurNWxua = accounts[5]
		const byteSpg803D = "0x0b171f021c170b0f0a030b121d081d0d0e04151b171e1511020619"
		const addressNNQFcYP = accounts[1]
		const uintuZhBqD1 = BigInt("961")
		const uintPVTq53t = BigInt("25")
//		const addressaymzAJ = await PlasmaswapPairtvT980Z.skim.call(addressbbnwBq8, {from: accounts[0]});
//		const uint112hSeSBDm = await PlasmaswapPairtvT980Z.getReserves.call({from: accounts[1]});
//		const uintNs9p13P = await PlasmaswapPairtvT980Z.burn.call(addressID5CVs4, {from: accounts[3]});
//		const uintxHMyK0K = await PlasmaswapPairtvT980Z.burn.call(addressurNWxua, {from: accounts[4]});
//		const uintWy5N5P7 = await PlasmaswapPairtvT980Z.swap.call(uintPVTq53t, uintuZhBqD1, addressNNQFcYP, byteSpg803D, {from: accounts[3]});

		await expect(PlasmaswapPairtvT980Z.skim.call(addressbbnwBq8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairFmjCAT = await PlasmaswapPair.new({from: accounts[0]});
		const byteyQb6M6d = "0x1d160d100c10170d14021d0f1b1f1f"
		const addressfN5wLqa = accounts[1]
		const uintePLYOv1 = BigInt("542")
		const uintE6UBB2q = BigInt("1174")
		const addressf81Z1yA = accounts[3]
		const addressmbZd3Jy = "0x0000000000000000000000000000000000000001"
		const uint112OrBWC9B = await PlasmaswapPairFmjCAT.getReserves.call({from: accounts[4]});
//		const uintuHEej2r = await PlasmaswapPairFmjCAT.swap.call(uintE6UBB2q, uintePLYOv1, addressfN5wLqa, byteyQb6M6d, {from: accounts[1]});
//		const addressETVVb6E = await PlasmaswapPairFmjCAT.skim.call(addressf81Z1yA, {from: accounts[1]});
//		const uint112UtOOaDV = await PlasmaswapPairFmjCAT.getReserves.call({from: accounts[0]});
//		const uintdeBKxwa = await PlasmaswapPairFmjCAT.burn.call(addressmbZd3Jy, {from: accounts[3]});

		await expect(PlasmaswapPairFmjCAT.swap.call(uintE6UBB2q, uintePLYOv1, addressfN5wLqa, byteyQb6M6d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairWQP7hzA = await PlasmaswapPair.new({from: accounts[4]});
		const addresss95vYxj = accounts[1]
		const addressFKMos4v = accounts[4]
		const byteALs6BVe = "0x1c"
		const addressTjpUBM = accounts[1]
		const uintiwhuF6 = BigInt("222")
		const uintZN12c97 = BigInt("343")
		const addressXRZInLy = accounts[4]
//		const uintR4qSNgG = await PlasmaswapPairWQP7hzA.burn.call(addresss95vYxj, {from: accounts[0]});
//		const addressxg4EbGX = await PlasmaswapPairWQP7hzA.skim.call(addressFKMos4v, {from: accounts[3]});
//		const uint112EvAlbCW = await PlasmaswapPairWQP7hzA.getReserves.call({from: accounts[0]});
//		const uintI8ZUWFV = await PlasmaswapPairWQP7hzA.swap.call(uintZN12c97, uintiwhuF6, addressTjpUBM, byteALs6BVe, {from: accounts[5]});
//		const addressEp7Ijbp = await PlasmaswapPairWQP7hzA.skim.call(addressXRZInLy, {from: accounts[3]});

		await expect(PlasmaswapPairWQP7hzA.burn.call(addresss95vYxj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairsA4aRE = await PlasmaswapPair.new({from: accounts[4]});
		const addressIMol9F = "0x0000000000000000000000000000000000000001"
//		await PlasmaswapPairsA4aRE.lock.call({from: accounts[0]});
//		await PlasmaswapPairsA4aRE.lock.call({from: accounts[3]});
//		await PlasmaswapPairsA4aRE.sync.call({from: accounts[0]});
//		const addressaRGSPM3 = await PlasmaswapPairsA4aRE.skim.call(addressIMol9F, {from: accounts[1]});
//		await PlasmaswapPairsA4aRE.sync.call({from: accounts[3]});

		await expect(PlasmaswapPairsA4aRE.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJeYNUs3 = await PlasmaswapPair.new({from: accounts[2]});
		const addressjvRZxyg = accounts[1]
		const addressjLTVeek = accounts[3]
		const byteOfhTeds = "0x071f02131a060218190d1d17080909111e1e0904"
		const addressLPHMZBk = accounts[0]
		const uintwUwW1un = BigInt("1997")
		const uint79JtjB = BigInt("1652")
		const addressK8QPV7G = accounts[5]
		const addressnBIjOFn = "0x0000000000000000000000000000000000000001"
//		const uintdYdYdOx = await PlasmaswapPairJeYNUs3.mint.call(addressjvRZxyg, {from: accounts[0]});
//		const addressiPdzBNM = await PlasmaswapPairJeYNUs3.skim.call(addressjLTVeek, {from: accounts[1]});
//		const uintDooqrgu = await PlasmaswapPairJeYNUs3.swap.call(uint79JtjB, uintwUwW1un, addressLPHMZBk, byteOfhTeds, {from: accounts[5]});
//		const addresscF48ywf = await PlasmaswapPairJeYNUs3.initialize.call(addressnBIjOFn, addressK8QPV7G, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairJeYNUs3.mint.call(addressjvRZxyg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairX0RARAO = await PlasmaswapPair.new({from: accounts[2]});
		const byteaoiF28L = "0x2009171f1a1d0a1a15131e13011a061c08020d091011"
		const addressCKiywAE = accounts[3]
		const uintS8tj50o = BigInt("1309")
		const uintPvXgnsF = BigInt("726")
//		await PlasmaswapPairX0RARAO.sync.call({from: accounts[5]});
//		const uintpw1plJk = await PlasmaswapPairX0RARAO.swap.call(uintPvXgnsF, uintS8tj50o, addressCKiywAE, byteaoiF28L, {from: accounts[0]});

		await expect(PlasmaswapPairX0RARAO.sync.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZrtm5b = await PlasmaswapPair.new({from: accounts[2]});
		const addressKggK0OP = accounts[0]
		const addressm4Cnqbx = accounts[0]
		const addressOIfoFyr = accounts[0]
		const byteUQK1iqI = "0x1c201e1b0310111e0506131e11101204"
		const addressFq2Ah1i = accounts[0]
		const uintBPtEtUp = BigInt("680")
		const uintD7K10Ay = BigInt("2030")
		const addressUYQBYtj = accounts[5]
		const addressxxwTFS7 = await PlasmaswapPairZrtm5b.initialize.call(addressm4Cnqbx, addressKggK0OP, {from: accounts[2]});
//		const uintHOw9c8v = await PlasmaswapPairZrtm5b.burn.call(addressOIfoFyr, {from: accounts[3]});
//		const uintPHTzoM4 = await PlasmaswapPairZrtm5b.swap.call(uintD7K10Ay, uintBPtEtUp, addressFq2Ah1i, byteUQK1iqI, {from: accounts[5]});
//		const addressQYk4wNP = await PlasmaswapPairZrtm5b.skim.call(addressUYQBYtj, {from: accounts[4]});

		await expect(PlasmaswapPairZrtm5b.burn.call(addressOIfoFyr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairDBIiejF = await PlasmaswapPair.new({from: accounts[2]});
		const addressqci1sV8 = accounts[4]
		const addressGD6r1em = accounts[1]
//		const addressRdrUoqf = await PlasmaswapPairDBIiejF.initialize.call(addressGD6r1em, addressqci1sV8, {from: accounts[4]});
//		await PlasmaswapPairDBIiejF.sync.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairDBIiejF.initialize.call(addressGD6r1em, addressqci1sV8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairztchYXY = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const byteO9mnkpJ = "0x201307080e101b120b191b03060d1f09131f09"
		const addresszg8lJw = accounts[3]
		const uintiZmrXA0 = BigInt("1402")
		const uintiR9FcTB = BigInt("57")
		const byteEUlt27 = "0x1a010402021002050b111e161c151e1b1d10060704"
		const addressFF9ER79 = accounts[1]
		const uintqqKkM4C = BigInt("1113")
		const uintRTj3uqI = BigInt("1286")
		const uintnNzP4Wt = await PlasmaswapPairztchYXY.swap.call(uintiR9FcTB, uintiZmrXA0, addresszg8lJw, byteO9mnkpJ, {from: accounts[1]});
		const uintN64kOvM = await PlasmaswapPairztchYXY.swap.call(uintRTj3uqI, uintqqKkM4C, addressFF9ER79, byteEUlt27, {from: accounts[2]});
	});
})