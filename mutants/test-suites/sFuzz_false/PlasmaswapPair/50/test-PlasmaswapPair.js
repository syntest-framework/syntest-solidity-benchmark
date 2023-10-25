const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairnHorAfu = await PlasmaswapPair.new({from: accounts[3]});
		const addressF9OGEg = "0x0000000000000000000000000000000000000001"
		const addresskJB5cMc = accounts[0]
		const addressTXG1Jhr = "0x0000000000000000000000000000000000000001"
//		const uintFuEIWl0 = await PlasmaswapPairnHorAfu.mint.call(addressF9OGEg, {from: accounts[0]});
//		const uintMwYMcei = await PlasmaswapPairnHorAfu.mint.call(addresskJB5cMc, {from: accounts[0]});
//		const uint112VMEaRxP = await PlasmaswapPairnHorAfu.getReserves.call({from: accounts[5]});
//		const uintAgvfEBk = await PlasmaswapPairnHorAfu.burn.call(addressTXG1Jhr, {from: accounts[5]});

		await expect(PlasmaswapPairnHorAfu.mint.call(addressF9OGEg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairSjQKaSC = await PlasmaswapPair.new({from: accounts[5]});
		const addresswHAmV6W = accounts[4]
		const addressBktqQxE = accounts[3]
		const addressNEPTV5G = accounts[3]
		const addressSQhP36u = accounts[5]
		const address9dMqN2 = accounts[4]
//		const uintNDDm0SS = await PlasmaswapPairSjQKaSC.burn.call(addresswHAmV6W, {from: accounts[0]});
//		const uintYXXV93f = await PlasmaswapPairSjQKaSC.burn.call(addressBktqQxE, {from: accounts[0]});
//		const uinttia2IU = await PlasmaswapPairSjQKaSC.burn.call(addressNEPTV5G, {from: accounts[4]});
//		const addressewdodTL = await PlasmaswapPairSjQKaSC.initialize.call(address9dMqN2, addressSQhP36u, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairSjQKaSC.burn.call(addresswHAmV6W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairn6m1Qom = await PlasmaswapPair.new({from: accounts[4]});
		const bytedKybNqO = "0x120d1f01031811111e201a0309191b0d1603120301"
		const addressVKpo5Oy = accounts[5]
		const uintsVGWaTP = BigInt("194")
		const uintV7tfxH5 = BigInt("1848")
		const addresswICrzxa = accounts[4]
		const addressOeqo36 = accounts[4]
		const addressX4j3PNr = accounts[5]
//		const uintkPlVvEx = await PlasmaswapPairn6m1Qom.swap.call(uintV7tfxH5, uintsVGWaTP, addressVKpo5Oy, bytedKybNqO, {from: accounts[1]});
//		await PlasmaswapPairn6m1Qom.sync.call({from: accounts[0]});
//		const addressjMoRmZI = await PlasmaswapPairn6m1Qom.initialize.call(addressOeqo36, addresswICrzxa, {from: accounts[1]});
//		const addressa3rfcU9 = await PlasmaswapPairn6m1Qom.skim.call(addressX4j3PNr, {from: accounts[3]});

		await expect(PlasmaswapPairn6m1Qom.swap.call(uintV7tfxH5, uintsVGWaTP, addressVKpo5Oy, bytedKybNqO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairpzWxNpe = await PlasmaswapPair.new({from: accounts[1]});
		const addressQeBYQiy = accounts[3]
		const addressgRp8L3v = accounts[4]
		const addressQoseQjf = accounts[1]
//		const addressfj1P5tU = await PlasmaswapPairpzWxNpe.skim.call(addressQeBYQiy, {from: accounts[1]});
//		const uintaZRuTDn = await PlasmaswapPairpzWxNpe.burn.call(addressgRp8L3v, {from: accounts[1]});
//		const addressnsa1UHs = await PlasmaswapPairpzWxNpe.skim.call(addressQoseQjf, {from: accounts[4]});

		await expect(PlasmaswapPairpzWxNpe.skim.call(addressQeBYQiy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZUfm0Cv = await PlasmaswapPair.new({from: accounts[1]});
		const addressAWuyfm = accounts[1]
		const addressIjOhP8g = accounts[3]
		const addressOX7Evk = accounts[3]
		const addressrcAonNA = accounts[2]
		const addressAnj9ycc = "0x0000000000000000000000000000000000000001"
		const addressDoAvrGi = await PlasmaswapPairZUfm0Cv.initialize.call(addressIjOhP8g, addressAWuyfm, {from: accounts[1]});
		const uint112ivUmOmU = await PlasmaswapPairZUfm0Cv.getReserves.call({from: accounts[5]});
//		const addressEHp0UXs = await PlasmaswapPairZUfm0Cv.skim.call(addressOX7Evk, {from: accounts[2]});
//		const addressCCdLUx = await PlasmaswapPairZUfm0Cv.initialize.call(addressAnj9ycc, addressrcAonNA, {from: accounts[0]});

		await expect(PlasmaswapPairZUfm0Cv.skim.call(addressOX7Evk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairV024Xvl = await PlasmaswapPair.new({from: accounts[3]});
		const byteTSQLCSf = "0x0a1d031c0e0e1e0b1c17041a03121009151c07081e0813070f08"
		const addresshmNSrKX = accounts[0]
		const uintdvoB0D = BigInt("215")
		const uintuvQWIUQ = BigInt("490")
		const address5YGkVc = accounts[4]
//		await PlasmaswapPairV024Xvl.lock.call({from: accounts[0]});
//		const uintKCORKiv = await PlasmaswapPairV024Xvl.swap.call(uintuvQWIUQ, uintdvoB0D, addresshmNSrKX, byteTSQLCSf, {from: accounts[2]});
//		await PlasmaswapPairV024Xvl.lock.call({from: accounts[5]});
//		const uintfSqrU0a = await PlasmaswapPairV024Xvl.mint.call(address5YGkVc, {from: accounts[0]});
//		const uint112MxoDjNC = await PlasmaswapPairV024Xvl.getReserves.call({from: accounts[1]});

		await expect(PlasmaswapPairV024Xvl.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairWA9BFf0 = await PlasmaswapPair.new({from: accounts[1]});
		const addressVZ1bRO = accounts[0]
		const addressgLK1CRA = accounts[1]
		const addressaJp0ln = accounts[1]
		const addressBL8zH3D = accounts[2]
//		const addressyPV7cTr = await PlasmaswapPairWA9BFf0.initialize.call(addressgLK1CRA, addressVZ1bRO, {from: accounts[0]});
//		const addresselaJQn4 = await PlasmaswapPairWA9BFf0.skim.call(addressaJp0ln, {from: accounts[1]});
//		const addresszdD1Sc8 = await PlasmaswapPairWA9BFf0.skim.call(addressBL8zH3D, {from: accounts[0]});

		await expect(PlasmaswapPairWA9BFf0.initialize.call(addressgLK1CRA, addressVZ1bRO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairyEgEEB4 = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const bytedfdSwW = "0x1d16181f1917181b0e08171e1509"
		const addressf8FzkbM = accounts[1]
		const uintRL8Kzii = BigInt("1610")
		const uintBTtcZzt = BigInt("1647")
		await PlasmaswapPairyEgEEB4.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const uint112dTQbTd = await PlasmaswapPairyEgEEB4.getReserves.call({from: accounts[1]});
		await PlasmaswapPairyEgEEB4.lock.call({from: accounts[4]});
		const uintWcdxOYn = await PlasmaswapPairyEgEEB4.swap.call(uintBTtcZzt, uintRL8Kzii, addressf8FzkbM, bytedfdSwW, {from: accounts[0]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairstBUVfw = await PlasmaswapPair.new({from: accounts[5]});
		const bytefbVwzem = "0x171f0a040a0b071a08121d030c090a02"
		const addressvXCprmk = accounts[5]
		const uintscL9vh3 = BigInt("1013")
		const uintMzfxnZp = BigInt("997")
		const uint112ofK2l6c = await PlasmaswapPairstBUVfw.getReserves.call({from: accounts[2]});
//		await PlasmaswapPairstBUVfw.sync.call({from: accounts[2]});
//		const uintO5Avplo = await PlasmaswapPairstBUVfw.swap.call(uintMzfxnZp, uintscL9vh3, addressvXCprmk, bytefbVwzem, {from: accounts[3]});

		await expect(PlasmaswapPairstBUVfw.sync.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})