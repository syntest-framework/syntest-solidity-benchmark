const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairK67ccTb = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const byteWTqY3Nf = "0x00111b1211132009020e160f170c0916080f1a19032008190915011801"
		const addresse5XtMHQ = accounts[2]
		const uintecuuJF = BigInt("1392")
		const uintQ5q4DDR = BigInt("696")
		const addressmTOyQZ = accounts[2]
		const uintVxXEVf = await PlasmaswapPairK67ccTb.swap.call(uintQ5q4DDR, uintecuuJF, addresse5XtMHQ, byteWTqY3Nf, {from: "0x0000000000000000000000000000000000000001"});
		const uint1120qXjCp = await PlasmaswapPairK67ccTb.getReserves.call({from: accounts[1]});
		const uintutaqNCd = await PlasmaswapPairK67ccTb.mint.call(addressmTOyQZ, {from: accounts[5]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairlk7VcMt = await PlasmaswapPair.new({from: accounts[3]});
		const address3VLeeo = accounts[4]
		const addressB3omtzg = accounts[0]
		const addressNANOtvq = "0x0000000000000000000000000000000000000001"
		const byteROHzveJ = "0x02150104070b1f1f1a0f0f131e1e15000a0416100f0409020d09"
		const addresstjU5njN = accounts[5]
		const uinteBhO1Q4 = BigInt("1863")
		const uintoB1th3i = BigInt("593")
		const addresspdpGfke = accounts[5]
//		const addressUftBp3O = await PlasmaswapPairlk7VcMt.skim.call(address3VLeeo, {from: accounts[5]});
//		const addresscobdgG = await PlasmaswapPairlk7VcMt.initialize.call(addressNANOtvq, addressB3omtzg, {from: accounts[2]});
//		const uint112TPaoeiL = await PlasmaswapPairlk7VcMt.getReserves.call({from: accounts[5]});
//		const uinttb2o01x = await PlasmaswapPairlk7VcMt.swap.call(uintoB1th3i, uinteBhO1Q4, addresstjU5njN, byteROHzveJ, {from: "0x0000000000000000000000000000000000000001"});
//		const uintS6pcTkY = await PlasmaswapPairlk7VcMt.burn.call(addresspdpGfke, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairlk7VcMt.skim.call(address3VLeeo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairSNruyvj = await PlasmaswapPair.new({from: accounts[2]});
		const addressNFiy3X2 = "0x0000000000000000000000000000000000000001"
		const addressPbY6Sl4 = accounts[1]
		const bytetx0laUk = "0x0f090a081e06170508050c02100f"
		const addressrkArjjY = accounts[4]
		const uintj9xPnl2 = BigInt("888")
		const uintHBlVcav = BigInt("1073")
		const addressjA3sawj = accounts[2]
		const addressJwYjNDu = accounts[3]
//		const uintHBnwPGm = await PlasmaswapPairSNruyvj.burn.call(addressNFiy3X2, {from: accounts[1]});
//		const addressYm58kxD = await PlasmaswapPairSNruyvj.skim.call(addressPbY6Sl4, {from: accounts[1]});
//		const uintbKtXtZy = await PlasmaswapPairSNruyvj.swap.call(uintHBlVcav, uintj9xPnl2, addressrkArjjY, bytetx0laUk, {from: accounts[3]});
//		const uint112UOWHCP1 = await PlasmaswapPairSNruyvj.getReserves.call({from: accounts[2]});
//		const addressXnRZwY9 = await PlasmaswapPairSNruyvj.initialize.call(addressJwYjNDu, addressjA3sawj, {from: accounts[3]});

		await expect(PlasmaswapPairSNruyvj.burn.call(addressNFiy3X2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairkF89cKU = await PlasmaswapPair.new({from: accounts[3]});
		const addressGiibqbl = "0x0000000000000000000000000000000000000001"
		const address4JCb3H = accounts[2]
//		const uintsEyzwCP = await PlasmaswapPairkF89cKU.mint.call(addressGiibqbl, {from: accounts[0]});
//		const addressnLUFbRY = await PlasmaswapPairkF89cKU.skim.call(address4JCb3H, {from: accounts[2]});

		await expect(PlasmaswapPairkF89cKU.mint.call(addressGiibqbl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairm4JlDjj = await PlasmaswapPair.new({from: accounts[3]});
		const addressH0Xf0hT = accounts[0]
		const addresspC8cVx = "0x0000000000000000000000000000000000000001"
		const byteCehEvtN = "0x1218190c1d0e0f190e0714030500081a041f00041f11"
		const addressAWnGzr7 = accounts[0]
		const uintNCRI3Zf = BigInt("1148")
		const uintc40YQPV = BigInt("796")
		const byteYN6O8VE = "0x0b1e040a160811040b06191e0a0e0a120d151f03050f1b021a1d161d040a"
		const addressY0Pbdw = accounts[3]
		const uinti9SmiGq = BigInt("943")
		const uintZVh4uxQ = BigInt("1481")
		const addressOOTd7p4 = accounts[2]
		const addressTTImVQ = await PlasmaswapPairm4JlDjj.initialize.call(addresspC8cVx, addressH0Xf0hT, {from: accounts[3]});
		const uint112YF3Kw8j = await PlasmaswapPairm4JlDjj.getReserves.call({from: accounts[0]});
//		const uintvjPyHqu = await PlasmaswapPairm4JlDjj.swap.call(uintc40YQPV, uintNCRI3Zf, addressAWnGzr7, byteCehEvtN, {from: accounts[2]});
//		const uintwCX4Vym = await PlasmaswapPairm4JlDjj.swap.call(uintZVh4uxQ, uinti9SmiGq, addressY0Pbdw, byteYN6O8VE, {from: accounts[0]});
//		const uintqHCip9 = await PlasmaswapPairm4JlDjj.burn.call(addressOOTd7p4, {from: accounts[0]});

		await expect(PlasmaswapPairm4JlDjj.swap.call(uintc40YQPV, uintNCRI3Zf, addressAWnGzr7, byteCehEvtN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairJaoutLZ = await PlasmaswapPair.new({from: accounts[4]});
		const addressgsGciE3 = accounts[3]
		const addressnusCget = accounts[3]
		const addressKn8WtR1 = accounts[1]
//		await PlasmaswapPairJaoutLZ.lock.call({from: accounts[3]});
//		const uintqQruzPX = await PlasmaswapPairJaoutLZ.mint.call(addressgsGciE3, {from: accounts[1]});
//		const addressf2CJO8d = await PlasmaswapPairJaoutLZ.skim.call(addressnusCget, {from: accounts[2]});
//		const addressQK0O3Og = await PlasmaswapPairJaoutLZ.skim.call(addressKn8WtR1, {from: accounts[0]});
//		const uint112bdUznXT = await PlasmaswapPairJaoutLZ.getReserves.call({from: accounts[0]});

		await expect(PlasmaswapPairJaoutLZ.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairjIpaanL = await PlasmaswapPair.new({from: accounts[4]});
		const addresscq3TOgb = "0x0000000000000000000000000000000000000001"
		const addressdXXhvGe = accounts[0]
		const addresslB4tP3w = accounts[0]
		const uint112D3xq2J = await PlasmaswapPairjIpaanL.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
		const uint112jVs2tEG = await PlasmaswapPairjIpaanL.getReserves.call({from: accounts[3]});
		const uint112SWzeSuP = await PlasmaswapPairjIpaanL.getReserves.call({from: accounts[2]});
//		const addressigYOtdp = await PlasmaswapPairjIpaanL.initialize.call(addressdXXhvGe, addresscq3TOgb, {from: accounts[3]});
//		const uintY49mKS = await PlasmaswapPairjIpaanL.mint.call(addresslB4tP3w, {from: accounts[2]});

		await expect(PlasmaswapPairjIpaanL.initialize.call(addressdXXhvGe, addresscq3TOgb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaire0z7esB = await PlasmaswapPair.new({from: accounts[4]});
		const bytexpOdKhm = "0x010a0a0a0a151a1500061f1403051d0b03"
		const addressg9kcfdQ = accounts[2]
		const uintsYhtFC = BigInt("1206")
		const uintKgLjGk = BigInt("1694")
		const addressfaRBRQ = "0x0000000000000000000000000000000000000001"
		const addressrcuR7LH = accounts[5]
		const addressEAfAtm = accounts[4]
//		await PlasmaswapPaire0z7esB.sync.call({from: accounts[3]});
//		const uint112x0zyzzz = await PlasmaswapPaire0z7esB.getReserves.call({from: accounts[0]});
//		await PlasmaswapPaire0z7esB.sync.call({from: accounts[5]});
//		const uintCalimqK = await PlasmaswapPaire0z7esB.swap.call(uintKgLjGk, uintsYhtFC, addressg9kcfdQ, bytexpOdKhm, {from: accounts[2]});
//		const addressRCU02c = await PlasmaswapPaire0z7esB.initialize.call(addressrcuR7LH, addressfaRBRQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uintjApNAIX = await PlasmaswapPaire0z7esB.mint.call(addressEAfAtm, {from: accounts[2]});

		await expect(PlasmaswapPaire0z7esB.sync.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})