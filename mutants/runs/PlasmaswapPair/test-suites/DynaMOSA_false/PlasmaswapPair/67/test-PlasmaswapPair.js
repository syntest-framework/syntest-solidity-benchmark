const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairNYa6pgV = await PlasmaswapPair.new({from: accounts[4]});
		const addressaLcFub3 = accounts[3]
		const addressAV4het = accounts[2]
		const byteCoztJiI = "0x031d1b091b1b011308"
		const addressiq4eXd0 = accounts[5]
		const uintdU7VSI4 = BigInt("894")
		const uintA7b3NPY = BigInt("1515")
		const bytekQn9pgO = "0x162003091c0d0d030a1d1c14150a14090f101d1a052011171a"
		const addressKfWjsG4 = accounts[3]
		const uintqrt0nH6 = BigInt("514")
		const uintIGzSHOK = BigInt("1447")
		const addressUQg3TAM = accounts[1]
		const addressBIxdpSk = accounts[2]
		const addressago44lh = accounts[5]
		const addressQBrPcM3 = await PlasmaswapPairNYa6pgV.initialize.call(addressAV4het, addressaLcFub3, {from: accounts[5]});
		const uintFJsRp6L = await PlasmaswapPairNYa6pgV.swap.call(uintA7b3NPY, uintdU7VSI4, addressiq4eXd0, byteCoztJiI, {from: accounts[4]});
		const uintjBt5o0E = await PlasmaswapPairNYa6pgV.swap.call(uintIGzSHOK, uintqrt0nH6, addressKfWjsG4, bytekQn9pgO, {from: accounts[1]});
		const uinta8S0Ei4 = await PlasmaswapPairNYa6pgV.mint.call(addressUQg3TAM, {from: accounts[0]});
		const addressqc1SSIs = await PlasmaswapPairNYa6pgV.initialize.call(addressago44lh, addressBIxdpSk, {from: accounts[2]});

		await expect(PlasmaswapPairNYa6pgV.initialize.call(addressAV4het, addressaLcFub3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairGthkLk2 = await PlasmaswapPair.new({from: accounts[1]});
		const addresshcs4Ajh = accounts[2]
		const addresspIEEuTX = accounts[2]
		const uinttuEK4D3 = await PlasmaswapPairGthkLk2.burn.call(addresshcs4Ajh, {from: "0x0000000000000000000000000000000000000001"});
		await PlasmaswapPairGthkLk2.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const uintvSJF5ZD = await PlasmaswapPairGthkLk2.mint.call(addresspIEEuTX, {from: accounts[2]});
		await PlasmaswapPairGthkLk2.sync.call({from: accounts[2]});

		await expect(PlasmaswapPairGthkLk2.burn.call(addresshcs4Ajh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaircPsrVrr = await PlasmaswapPair.new({from: accounts[4]});
		const addressHAWUvq = accounts[2]
		const addressbUANHUS = accounts[1]
		const addressbP2nCn = accounts[5]
		const uintPThezdI = await PlasmaswapPaircPsrVrr.mint.call(addressHAWUvq, {from: accounts[5]});
		const uintfWRaDti = await PlasmaswapPaircPsrVrr.burn.call(addressbUANHUS, {from: accounts[1]});
		const uintmQxH5nN = await PlasmaswapPaircPsrVrr.mint.call(addressbP2nCn, {from: accounts[3]});

		await expect(PlasmaswapPaircPsrVrr.mint.call(addressHAWUvq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairiXp419G = await PlasmaswapPair.new({from: accounts[2]});
		const addressse5n2dp = accounts[4]
		const addressEu9SpHI = accounts[1]
		const addressOvZUQDS = accounts[4]
		const addressqH36Esr = accounts[4]
		const addressEM4UAL6 = accounts[2]
		await PlasmaswapPairiXp419G.sync.call({from: accounts[4]});
		const addresscY9zNJc = await PlasmaswapPairiXp419G.skim.call(addressse5n2dp, {from: accounts[3]});
		const addressA8PCLqt = await PlasmaswapPairiXp419G.skim.call(addressEu9SpHI, {from: accounts[0]});
		const addressax7tp8 = await PlasmaswapPairiXp419G.skim.call(addressOvZUQDS, {from: accounts[1]});
		const addressOMzwBzW = await PlasmaswapPairiXp419G.initialize.call(addressEM4UAL6, addressqH36Esr, {from: accounts[0]});
		await PlasmaswapPairiXp419G.sync.call({from: accounts[5]});

		await expect(PlasmaswapPairiXp419G.sync.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairQ0EeKhF = await PlasmaswapPair.new({from: accounts[5]});
		const addressIemEbU5 = accounts[5]
		const uint112FHqnlEZ = await PlasmaswapPairQ0EeKhF.getReserves.call({from: accounts[4]});
		const uint112V0c1NPy = await PlasmaswapPairQ0EeKhF.getReserves.call({from: accounts[0]});
		const addressuCm5Z7 = await PlasmaswapPairQ0EeKhF.skim.call(addressIemEbU5, {from: accounts[2]});
		const uint112n3kD8r = await PlasmaswapPairQ0EeKhF.getReserves.call({from: accounts[1]});

		await expect(PlasmaswapPairQ0EeKhF.skim.call(addressIemEbU5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairyocWkyi = await PlasmaswapPair.new({from: accounts[0]});
		const byteGRF8Nnr = "0x2002110a05120308051c0f0913"
		const addressLWsVRa = accounts[0]
		const uintZAtKEMK = BigInt("779")
		const uintaB7mtRC = BigInt("1727")
		const addressTwsW71 = accounts[2]
		const addressolxf5Gp = accounts[3]
		const uintcJJJYV7 = await PlasmaswapPairyocWkyi.swap.call(uintaB7mtRC, uintZAtKEMK, addressLWsVRa, byteGRF8Nnr, {from: "0x0000000000000000000000000000000000000001"});
		const uint112uCy4ryh = await PlasmaswapPairyocWkyi.getReserves.call({from: accounts[0]});
		const addressgaSbIxM = await PlasmaswapPairyocWkyi.initialize.call(addressolxf5Gp, addressTwsW71, {from: accounts[2]});

		await expect(PlasmaswapPairyocWkyi.swap.call(uintaB7mtRC, uintZAtKEMK, addressLWsVRa, byteGRF8Nnr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairynOLPGC = await PlasmaswapPair.new({from: accounts[3]});
		const addresswYK92ho = accounts[1]
		const addressSBNyU9H = "0x0000000000000000000000000000000000000001"
		const addressukZ0Kqa = "0x0000000000000000000000000000000000000001"
		const addressMjoURth = accounts[1]
		const addressuE4QYVc = accounts[5]
		await PlasmaswapPairynOLPGC.lock.call({from: accounts[0]});
		const addressHGop2KA = await PlasmaswapPairynOLPGC.initialize.call(addressSBNyU9H, addresswYK92ho, {from: accounts[1]});
		const uintzvkD4pb = await PlasmaswapPairynOLPGC.mint.call(addressukZ0Kqa, {from: accounts[1]});
		const addressOjS1nvU = await PlasmaswapPairynOLPGC.skim.call(addressMjoURth, {from: accounts[3]});
		const uintmLiZ9a7 = await PlasmaswapPairynOLPGC.mint.call(addressuE4QYVc, {from: accounts[0]});

		await expect(PlasmaswapPairynOLPGC.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairtOssu4h = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const byteq6aGVI1 = "0x06120f0a160804170f1d101c081e1a1a"
		const addresscbHPLg5 = accounts[0]
		const uintLPKAbCZ = BigInt("63")
		const uintoLC568m = BigInt("1335")
		const byteD72m87D = "0x050d091d1e140b01080f101c101f06050d06070a1d14070d0201071c0a"
		const addresslhxQ5Vj = "0x0000000000000000000000000000000000000001"
		const uintmhAfUJ = BigInt("1480")
		const uintcyMg5Tz = BigInt("1244")
		const addresswrKoqGf = accounts[2]
		const uintSYIUYBd = await PlasmaswapPairtOssu4h.swap.call(uintoLC568m, uintLPKAbCZ, addresscbHPLg5, byteq6aGVI1, {from: accounts[2]});
		const uintYR8GewT = await PlasmaswapPairtOssu4h.swap.call(uintcyMg5Tz, uintmhAfUJ, addresslhxQ5Vj, byteD72m87D, {from: accounts[4]});
		const addressqBeSKk = await PlasmaswapPairtOssu4h.skim.call(addresswrKoqGf, {from: accounts[1]});
	});
})