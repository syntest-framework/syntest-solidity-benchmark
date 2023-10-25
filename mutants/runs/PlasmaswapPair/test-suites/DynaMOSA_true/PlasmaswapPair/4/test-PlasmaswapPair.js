const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairU3EG2d5 = await PlasmaswapPair.new({from: accounts[3]});
		await PlasmaswapPairU3EG2d5.lock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint112JOfIR2I = await PlasmaswapPairU3EG2d5.getReserves.call({from: accounts[2]});

		await expect(PlasmaswapPairU3EG2d5.lock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairRUCB1np = await PlasmaswapPair.new({from: accounts[3]});
		const addressIY0pZgw = accounts[4]
		const addressEFSKDUo = accounts[0]
		const addressYWCmAJ = accounts[4]
		const addressCuhyPlC = accounts[2]
		const uintmkSzfWM = await PlasmaswapPairRUCB1np.burn.call(addressIY0pZgw, {from: accounts[2]});
		const uintN2m3nTo = await PlasmaswapPairRUCB1np.mint.call(addressEFSKDUo, {from: accounts[1]});
		const uintmmITzJr = await PlasmaswapPairRUCB1np.burn.call(addressYWCmAJ, {from: accounts[4]});
		await PlasmaswapPairRUCB1np.lock.call({from: accounts[2]});
		const uintv3UaMef = await PlasmaswapPairRUCB1np.burn.call(addressCuhyPlC, {from: accounts[4]});
		await PlasmaswapPairRUCB1np.sync.call({from: accounts[3]});

		await expect(PlasmaswapPairRUCB1np.burn.call(addressIY0pZgw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairqDsP2wb = await PlasmaswapPair.new({from: accounts[4]});
		const addressOpNpBfu = accounts[1]
		const address22B62V = "0x0000000000000000000000000000000000000001"
		const addressYd2ZGB7 = accounts[2]
		const addressxxhRd6O = await PlasmaswapPairqDsP2wb.skim.call(addressOpNpBfu, {from: accounts[4]});
		const uint112WcophUX = await PlasmaswapPairqDsP2wb.getReserves.call({from: accounts[3]});
		const addressM6tBd97 = await PlasmaswapPairqDsP2wb.initialize.call(addressYd2ZGB7, address22B62V, {from: accounts[0]});
		const uint112cI0UCRQ = await PlasmaswapPairqDsP2wb.getReserves.call({from: accounts[5]});

		await expect(PlasmaswapPairqDsP2wb.skim.call(addressOpNpBfu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairA43kYE = await PlasmaswapPair.new({from: accounts[0]});
		const addressqGGvH2c = accounts[0]
		const bytedkMb1IZ = "0x06130e0a1809101f0f15041c0a19020b081b030707150d0a0c1a171a1d"
		const addressHjdtI2 = accounts[3]
		const uintcRgWFon = BigInt("2023")
		const uintINwkqpf = BigInt("321")
		const addresssMelPD = accounts[2]
		const uintbarndLC = await PlasmaswapPairA43kYE.mint.call(addressqGGvH2c, {from: accounts[0]});
		const uintIOCmrY6 = await PlasmaswapPairA43kYE.swap.call(uintINwkqpf, uintcRgWFon, addressHjdtI2, bytedkMb1IZ, {from: accounts[4]});
		const uint112PUnjLXq = await PlasmaswapPairA43kYE.getReserves.call({from: accounts[3]});
		const addressBElnQyW = await PlasmaswapPairA43kYE.skim.call(addresssMelPD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairA43kYE.mint.call(addressqGGvH2c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairm84GT4n = await PlasmaswapPair.new({from: accounts[2]});
		const bytelAy1xt7 = "0x03090f141e15111e0b051e1c1d07120a1d071e1a0b0d060117111c061c"
		const addressaSz7ayb = accounts[0]
		const uintmBf8Qig = BigInt("1365")
		const uintIw4GOHo = BigInt("313")
		const addressBfZrjMb = accounts[1]
		const uintFP2SM08 = await PlasmaswapPairm84GT4n.swap.call(uintIw4GOHo, uintmBf8Qig, addressaSz7ayb, bytelAy1xt7, {from: accounts[2]});
		const uint112bBpdimq = await PlasmaswapPairm84GT4n.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
		const uint112NaiIZd = await PlasmaswapPairm84GT4n.getReserves.call({from: accounts[3]});
		await PlasmaswapPairm84GT4n.lock.call({from: accounts[1]});
		const addressYyLmK2u = await PlasmaswapPairm84GT4n.skim.call(addressBfZrjMb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairm84GT4n.swap.call(uintIw4GOHo, uintmBf8Qig, addressaSz7ayb, bytelAy1xt7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairRo0U6K0 = await PlasmaswapPair.new({from: accounts[2]});
		const addressbNFe8uf = "0x0000000000000000000000000000000000000001"
		const addressRl2KNG = accounts[1]
		const addressBpseHml = accounts[1]
		await PlasmaswapPairRo0U6K0.sync.call({from: accounts[5]});
		const addressF6mMFYB = await PlasmaswapPairRo0U6K0.initialize.call(addressRl2KNG, addressbNFe8uf, {from: accounts[1]});
		const uint112wiTfcoF = await PlasmaswapPairRo0U6K0.getReserves.call({from: accounts[1]});
		const uintUlUkbyZ = await PlasmaswapPairRo0U6K0.mint.call(addressBpseHml, {from: accounts[1]});
		const uint112dwgsUn6 = await PlasmaswapPairRo0U6K0.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairRo0U6K0.sync.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairYpoWz48 = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressoZ7wdk = accounts[5]
		const addressrwkVUCi = accounts[3]
		const addressC4ob9xU = accounts[3]
		const addressK5wFcOR = accounts[2]
		const byteX5ur1zn = "0x110711061f091d1d18"
		const addressaz63yts = accounts[5]
		const uintma06rqt = BigInt("1716")
		const uintdXzvijZ = BigInt("865")
		const uintKtgOfA = await PlasmaswapPairYpoWz48.mint.call(addressoZ7wdk, {from: accounts[3]});
		const uintUi4r6qv = await PlasmaswapPairYpoWz48.burn.call(addressrwkVUCi, {from: "0x0000000000000000000000000000000000000001"});
		const addresso7Pb3Ip = await PlasmaswapPairYpoWz48.initialize.call(addressK5wFcOR, addressC4ob9xU, {from: accounts[3]});
		const uintvb1ataK = await PlasmaswapPairYpoWz48.swap.call(uintdXzvijZ, uintma06rqt, addressaz63yts, byteX5ur1zn, {from: accounts[2]});
		await PlasmaswapPairYpoWz48.lock.call({from: accounts[2]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairb6S6XBM = await PlasmaswapPair.new({from: accounts[2]});
		const addressJqdYREW = accounts[3]
		const addressYEZEhgP = accounts[2]
		const addressyVfTVk = "0x0000000000000000000000000000000000000001"
		const bytep2De9k6 = "0x13101f1d0e02041b15180d1105071203160e05"
		const addresszcTYMwT = accounts[0]
		const uintS5cwNBF = BigInt("656")
		const uintUvMjmDu = BigInt("1619")
		const bytemHwQPP = "0x101c031b0e1a040f1206061617100e0b1f1b130d0a031e1c0e1210"
		const addressbXBGL1q = accounts[3]
		const uintVl7Cn1X = BigInt("720")
		const uintW61oARq = BigInt("1586")
		const addressa3EV7Y = accounts[3]
		const addressKxTKOum = accounts[1]
		const addressywrP5K = await PlasmaswapPairb6S6XBM.initialize.call(addressYEZEhgP, addressJqdYREW, {from: accounts[1]});
		const uintSWHwEP = await PlasmaswapPairb6S6XBM.burn.call(addressyVfTVk, {from: accounts[0]});
		const uintBiw7k2i = await PlasmaswapPairb6S6XBM.swap.call(uintUvMjmDu, uintS5cwNBF, addresszcTYMwT, bytep2De9k6, {from: accounts[4]});
		const uintiazyCFT = await PlasmaswapPairb6S6XBM.swap.call(uintW61oARq, uintVl7Cn1X, addressbXBGL1q, bytemHwQPP, {from: accounts[5]});
		const uintw1d57dU = await PlasmaswapPairb6S6XBM.mint.call(addressa3EV7Y, {from: accounts[0]});
		const uintGCsNxyS = await PlasmaswapPairb6S6XBM.burn.call(addressKxTKOum, {from: accounts[0]});

		await expect(PlasmaswapPairb6S6XBM.initialize.call(addressYEZEhgP, addressJqdYREW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairU3EG2d5 = await PlasmaswapPair.new({from: accounts[3]});
		const addressWVyz8K = accounts[3]
		const addressUIaaPcV = accounts[0]
		const addressEwW9H1i = await PlasmaswapPairU3EG2d5.initialize.call(addressUIaaPcV, addressWVyz8K, {from: accounts[3]});
		await PlasmaswapPairU3EG2d5.lock.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairU3EG2d5.lock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})