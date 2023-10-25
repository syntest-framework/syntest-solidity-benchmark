const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair9cuUxb = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPxnbO1q = accounts[3]
		const addressVdJzgXJ = accounts[2]
		const byteTE6dy2n = "0x161d190f05090919130e0c12151b0c"
		const addressrp5ZSow = "0x0000000000000000000000000000000000000001"
		const uintHLKYIuw = BigInt("450")
		const uintmJFll0 = BigInt("1382")
		await PlasmaswapPair9cuUxb.lock.call({from: accounts[5]});
		const uint112PzSSC01 = await PlasmaswapPair9cuUxb.getReserves.call({from: accounts[2]});
		const uintNsqwNl = await PlasmaswapPair9cuUxb.mint.call(addressPxnbO1q, {from: accounts[0]});
		const uintXF2h2w0 = await PlasmaswapPair9cuUxb.burn.call(addressVdJzgXJ, {from: accounts[1]});
		const uintBRlpfWg = await PlasmaswapPair9cuUxb.swap.call(uintmJFll0, uintHLKYIuw, addressrp5ZSow, byteTE6dy2n, {from: accounts[4]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair58N7RP = await PlasmaswapPair.new({from: accounts[2]});
		const addressHz8MyKq = accounts[4]
		const addresse89oBqT = accounts[4]
		const byteuWQyHUE = "0x0307140b0f18051b100f051b0d110f1013"
		const addresscGPJity = accounts[0]
		const uintFyo7WsW = BigInt("9")
		const uintVa1rLJl = BigInt("885")
		const addressmpj8bb9 = accounts[2]
		const addresslguKfzg = "0x0000000000000000000000000000000000000001"
		const uintgjEgWc7 = await PlasmaswapPair58N7RP.mint.call(addressHz8MyKq, {from: accounts[0]});
		const uintRcBLYK7 = await PlasmaswapPair58N7RP.mint.call(addresse89oBqT, {from: accounts[2]});
		const uintKqPnV5G = await PlasmaswapPair58N7RP.swap.call(uintVa1rLJl, uintFyo7WsW, addresscGPJity, byteuWQyHUE, {from: accounts[5]});
		const addressuOTyXl = await PlasmaswapPair58N7RP.initialize.call(addresslguKfzg, addressmpj8bb9, {from: accounts[0]});

		await expect(PlasmaswapPair58N7RP.mint.call(addressHz8MyKq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhSWnwh = await PlasmaswapPair.new({from: accounts[3]});
		const addressgBJSAL = accounts[4]
		const addressXOEzNp7 = accounts[0]
		const addressKKvcxTG = accounts[3]
		const addresskPyXipc = accounts[0]
		const addressSgIcw5M = accounts[1]
		const addressb08L1bW = accounts[3]
		const addressRUKVURp = await PlasmaswapPairhSWnwh.initialize.call(addressXOEzNp7, addressgBJSAL, {from: accounts[1]});
		const uint112O0k68J6 = await PlasmaswapPairhSWnwh.getReserves.call({from: accounts[4]});
		const addressIdU6PhM = await PlasmaswapPairhSWnwh.initialize.call(addresskPyXipc, addressKKvcxTG, {from: accounts[3]});
		const addressWG9d2Tc = await PlasmaswapPairhSWnwh.initialize.call(addressb08L1bW, addressSgIcw5M, {from: accounts[0]});

		await expect(PlasmaswapPairhSWnwh.initialize.call(addressXOEzNp7, addressgBJSAL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairkeEa7hO = await PlasmaswapPair.new({from: accounts[5]});
		const addressi36RUQZ = accounts[2]
		const uint112O3daHe = await PlasmaswapPairkeEa7hO.getReserves.call({from: accounts[3]});
		const addressFOLy98y = await PlasmaswapPairkeEa7hO.skim.call(addressi36RUQZ, {from: accounts[5]});

		await expect(PlasmaswapPairkeEa7hO.skim.call(addressi36RUQZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairsX8Dkb = await PlasmaswapPair.new({from: accounts[1]});
		const addressxmT4By5 = accounts[4]
		const addressvIzDnsJ = accounts[0]
		const addressfLcO8V3 = accounts[2]
		const byteKFmg4R1 = "0x0c080a0813110a1f1d120909010c11141d021504190220201c1f17"
		const addressjmMkOSc = accounts[5]
		const uintXAxPr4g = BigInt("1524")
		const uintbEnR3hB = BigInt("942")
		const addressBh3C5l = accounts[3]
		const addresshYiK97g = accounts[5]
		const addressMO4y5Td = accounts[3]
		const uintY9fNSR = await PlasmaswapPairsX8Dkb.burn.call(addressxmT4By5, {from: accounts[0]});
		const addressUynSSYF = await PlasmaswapPairsX8Dkb.skim.call(addressvIzDnsJ, {from: accounts[0]});
		const addressYsZhGbm = await PlasmaswapPairsX8Dkb.skim.call(addressfLcO8V3, {from: accounts[3]});
		const uintfOyKLX8 = await PlasmaswapPairsX8Dkb.swap.call(uintbEnR3hB, uintXAxPr4g, addressjmMkOSc, byteKFmg4R1, {from: accounts[4]});
		const addresspysgQKa = await PlasmaswapPairsX8Dkb.initialize.call(addresshYiK97g, addressBh3C5l, {from: accounts[3]});
		const address4TD19k = await PlasmaswapPairsX8Dkb.skim.call(addressMO4y5Td, {from: accounts[0]});

		await expect(PlasmaswapPairsX8Dkb.burn.call(addressxmT4By5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairNjTG9pJ = await PlasmaswapPair.new({from: accounts[0]});
		const byteviPXjXw = "0x0b0c141915161f0007000615101e"
		const addressNnE67x8 = accounts[4]
		const uintRQkepfU = BigInt("1565")
		const uinttLMrLDe = BigInt("1429")
		const addressE9B7fgv = accounts[3]
		const bytewkxUpkY = "0x0d0d1815101b0b120b1f0e04051d061209"
		const addressC8i2RLl = accounts[0]
		const uinty6vsEVH = BigInt("1228")
		const uintClaL6o = BigInt("1343")
		const uintSk9b3Iy = await PlasmaswapPairNjTG9pJ.swap.call(uinttLMrLDe, uintRQkepfU, addressNnE67x8, byteviPXjXw, {from: accounts[2]});
		const addressL9ig9aw = await PlasmaswapPairNjTG9pJ.skim.call(addressE9B7fgv, {from: accounts[3]});
		const uint112ZnX4O1x = await PlasmaswapPairNjTG9pJ.getReserves.call({from: accounts[4]});
		const uintjvxEXBA = await PlasmaswapPairNjTG9pJ.swap.call(uintClaL6o, uinty6vsEVH, addressC8i2RLl, bytewkxUpkY, {from: accounts[3]});

		await expect(PlasmaswapPairNjTG9pJ.swap.call(uinttLMrLDe, uintRQkepfU, addressNnE67x8, byteviPXjXw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairiAKVBpL = await PlasmaswapPair.new({from: accounts[0]});
		const uint112JTTmtf0 = await PlasmaswapPairiAKVBpL.getReserves.call({from: accounts[1]});
		await PlasmaswapPairiAKVBpL.lock.call({from: accounts[0]});

		await expect(PlasmaswapPairiAKVBpL.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair58N7RP = await PlasmaswapPair.new({from: accounts[2]});
		const byteNkz9Pkw = "0x13201d1c06131f200f19170a111e0b0b09"
		const addressaPOTT4Y = accounts[0]
		const uintny8q9eV = BigInt("1996")
		const uintoHeDTxZ = BigInt("170")
		const addressr2MkqgY = accounts[6]
		await PlasmaswapPair58N7RP.sync.call({from: accounts[1]});
		const uintGZejh7s = await PlasmaswapPair58N7RP.swap.call(uintoHeDTxZ, uintny8q9eV, addressaPOTT4Y, byteNkz9Pkw, {from: accounts[4]});
		const uintRcBLYK7 = await PlasmaswapPair58N7RP.mint.call(addressr2MkqgY, {from: accounts[2]});

		await expect(PlasmaswapPair58N7RP.sync.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})