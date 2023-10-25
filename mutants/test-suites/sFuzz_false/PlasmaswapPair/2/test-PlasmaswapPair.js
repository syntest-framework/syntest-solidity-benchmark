const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairLCLJobh = await PlasmaswapPair.new({from: accounts[4]});
		const addressbvwCRAW = accounts[5]
		const byteVozGBUC = "0x18030c19050a171f1c0d1c041211000a0103110a1e021e1817"
		const addressvEqx3i6 = accounts[0]
		const uintBE3dCw = BigInt("1937")
		const uintFKqanh0 = BigInt("1993")
		const addressdNuZK4P = accounts[2]
//		const uintJBYl5O = await PlasmaswapPairLCLJobh.mint.call(addressbvwCRAW, {from: accounts[4]});
//		const uintu3AHnbj = await PlasmaswapPairLCLJobh.swap.call(uintFKqanh0, uintBE3dCw, addressvEqx3i6, byteVozGBUC, {from: accounts[0]});
//		const uintmEBSL9E = await PlasmaswapPairLCLJobh.mint.call(addressdNuZK4P, {from: accounts[0]});

		await expect(PlasmaswapPairLCLJobh.mint.call(addressbvwCRAW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairW5VVVcZ = await PlasmaswapPair.new({from: accounts[4]});
		const byteMwHgQuG = "0x1e031817120b0e1c130f0214170e0916030b031e1317071c0700000e130d09"
		const addressBcsFLdp = accounts[5]
		const uintdjN2asA = BigInt("565")
		const uintfb9Yw4 = BigInt("1023")
		const addresshmwO2jm = accounts[3]
		const addressiYE99tn = accounts[0]
		const bytehvOx0n = "0x17021e0a11170d071412190d0604190807041d1c16150b1401070c"
		const addressBE5x82x = accounts[4]
		const uintpA76umA = BigInt("1411")
		const uintkhVVEV = BigInt("1625")
//		await PlasmaswapPairW5VVVcZ.sync.call({from: accounts[2]});
//		const uintPqAB7W0 = await PlasmaswapPairW5VVVcZ.swap.call(uintfb9Yw4, uintdjN2asA, addressBcsFLdp, byteMwHgQuG, {from: accounts[3]});
//		const addresslyD2U9j = await PlasmaswapPairW5VVVcZ.skim.call(addresshmwO2jm, {from: accounts[3]});
//		const addresssZv63sO = await PlasmaswapPairW5VVVcZ.skim.call(addressiYE99tn, {from: accounts[0]});
//		const uinteO1pW1 = await PlasmaswapPairW5VVVcZ.swap.call(uintkhVVEV, uintpA76umA, addressBE5x82x, bytehvOx0n, {from: accounts[4]});

		await expect(PlasmaswapPairW5VVVcZ.sync.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairPaw2ANI = await PlasmaswapPair.new({from: accounts[2]});
		const byteHGTlKrl = "0x101020090d0f"
		const addressDK9Li5 = accounts[4]
		const uinttkbuCck = BigInt("390")
		const uintFBFckVu = BigInt("1878")
		const addresskjWNV5u = accounts[2]
		const addressEMj1rty = accounts[1]
		const addressm7lAlgt = accounts[3]
//		const uintvcIUuFa = await PlasmaswapPairPaw2ANI.swap.call(uintFBFckVu, uinttkbuCck, addressDK9Li5, byteHGTlKrl, {from: accounts[1]});
//		const uintx9TLvX4 = await PlasmaswapPairPaw2ANI.burn.call(addresskjWNV5u, {from: "0x0000000000000000000000000000000000000001"});
//		const uintCizCQNe = await PlasmaswapPairPaw2ANI.mint.call(addressEMj1rty, {from: accounts[2]});
//		const uintDYJnnwF = await PlasmaswapPairPaw2ANI.burn.call(addressm7lAlgt, {from: accounts[2]});
//		await PlasmaswapPairPaw2ANI.lock.call({from: accounts[0]});

		await expect(PlasmaswapPairPaw2ANI.swap.call(uintFBFckVu, uinttkbuCck, addressDK9Li5, byteHGTlKrl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairs5mIJ07 = await PlasmaswapPair.new({from: accounts[0]});
		const addressugGSzGa = "0x0000000000000000000000000000000000000001"
		const addressHhL42W = "0x0000000000000000000000000000000000000001"
		const addressV9jYMsA = accounts[5]
//		const addresssrFXVA = await PlasmaswapPairs5mIJ07.skim.call(addressugGSzGa, {from: accounts[5]});
//		const addressOKgaiWE = await PlasmaswapPairs5mIJ07.skim.call(addressHhL42W, {from: accounts[5]});
//		const uintQDNXrGI = await PlasmaswapPairs5mIJ07.burn.call(addressV9jYMsA, {from: accounts[0]});
//		const uint112KeMwJc = await PlasmaswapPairs5mIJ07.getReserves.call({from: accounts[2]});

		await expect(PlasmaswapPairs5mIJ07.skim.call(addressugGSzGa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhzcKmSl = await PlasmaswapPair.new({from: accounts[2]});
		const addressZFqbsKn = accounts[5]
		const uint112sasRlx5 = await PlasmaswapPairhzcKmSl.getReserves.call({from: accounts[0]});
//		const uintNJUAUtB = await PlasmaswapPairhzcKmSl.burn.call(addressZFqbsKn, {from: accounts[4]});

		await expect(PlasmaswapPairhzcKmSl.burn.call(addressZFqbsKn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairrWs1zxD = await PlasmaswapPair.new({from: accounts[0]});
		const addresseyiYhuS = accounts[5]
		const addressMhyalTa = accounts[3]
//		await PlasmaswapPairrWs1zxD.lock.call({from: accounts[1]});
//		const addressPuR5BcX = await PlasmaswapPairrWs1zxD.initialize.call(addressMhyalTa, addresseyiYhuS, {from: accounts[5]});

		await expect(PlasmaswapPairrWs1zxD.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairhzcKmSl = await PlasmaswapPair.new({from: accounts[2]});
		const addressOug8cQ = accounts[1]
		const addressa0smddb = accounts[4]
		const addressvsyIqg = accounts[5]
//		const addressnCYwMZJ = await PlasmaswapPairhzcKmSl.initialize.call(addressa0smddb, addressOug8cQ, {from: accounts[4]});
//		const uint112sasRlx5 = await PlasmaswapPairhzcKmSl.getReserves.call({from: accounts[0]});
//		const uintNJUAUtB = await PlasmaswapPairhzcKmSl.burn.call(addressvsyIqg, {from: accounts[4]});

		await expect(PlasmaswapPairhzcKmSl.initialize.call(addressa0smddb, addressOug8cQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairTali5L = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressU7TsiNt = accounts[3]
		const byteBiDbwU1 = "0x0818131f170c190900170f191e"
		const addressYcdcdIy = accounts[0]
		const uintTEOFbii = BigInt("1271")
		const uintgvFrIxN = BigInt("475")
		const uint112V4RmxGm = await PlasmaswapPairTali5L.getReserves.call({from: accounts[4]});
		const uintJL2k8F9 = await PlasmaswapPairTali5L.mint.call(addressU7TsiNt, {from: accounts[1]});
		const uintpQN4fqz = await PlasmaswapPairTali5L.swap.call(uintgvFrIxN, uintTEOFbii, addressYcdcdIy, byteBiDbwU1, {from: accounts[1]});
	});
})