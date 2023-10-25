const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringuauibl1 = "4iVUf"
		const stringalSpo9c = "gT3ysS6Y5pgVDpIYppVsksI7I94JKfic1jGf5"
		const uintnHr1r3I = BigInt("129")
		const Weedburnomd8loq = await Weedburn.new(stringuauibl1, stringalSpo9c, uintnHr1r3I, {from: accounts[2]});
		const uintgjOufky = BigInt("1013")
		const addressJLyGAkr = accounts[2]
		const uintauLxRV = BigInt("1210")
		const addressFnikR3 = accounts[2]
		const uint256ndyA2kh = await Weedburnomd8loq.totalSupply.call({from: accounts[2]});
		const booly5aykol = await Weedburnomd8loq.decreaseAllowance.call(addressJLyGAkr, uintgjOufky, {from: accounts[4]});
		const addresszbFU17x = await Weedburnomd8loq.burnFrom.call(addressFnikR3, uintauLxRV, {from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburnzocBasl = await Weedburn.new({from: accounts[3]});
		const uintSRpEcEI = BigInt("1081")
		const addressdvYV8BI = accounts[3]
		const uintmN8F2ht = BigInt("299")
		const addresssOycrR1 = accounts[0]
		const addresstFfua7U = accounts[4]
		const addressxs1KBO = "0x0000000000000000000000000000000000000001"
		const uinthdocmet = BigInt("598")
//		await WeedburnzocBasl.enableDevMode.call({from: accounts[2]});
//		const boolqZaOXHE = await WeedburnzocBasl.decreaseAllowance.call(addressdvYV8BI, uintSRpEcEI, {from: accounts[4]});
//		const boolkHrRCs8 = await WeedburnzocBasl.increaseAllowance.call(addresssOycrR1, uintmN8F2ht, {from: accounts[3]});
//		const stringyy0oPPn = await WeedburnzocBasl.name.call({from: accounts[2]});
//		const uint256E9LOy1 = await WeedburnzocBasl.allowance.call(addressxs1KBO, addresstFfua7U, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256SSUQSmT = await WeedburnzocBasl.burn.call(uinthdocmet, {from: accounts[5]});

		await expect(WeedburnzocBasl.enableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnRQtLVxM = await Weedburn.new({from: accounts[3]});
		const uinto8avAqR = BigInt("1854")
		const addresswkJ5OJU = accounts[0]
		const uintm8uJz8n = BigInt("1768")
		const addressN32eL5L = "0x0000000000000000000000000000000000000001"
//		const booluSlV8fW = await WeedburnRQtLVxM.decreaseAllowance.call(addresswkJ5OJU, uinto8avAqR, {from: accounts[1]});
//		const stringQOoO6M = await WeedburnRQtLVxM.name.call({from: accounts[4]});
//		const boolnitLNXV = await WeedburnRQtLVxM.transfer.call(addressN32eL5L, uintm8uJz8n, {from: accounts[1]});

		await expect(WeedburnRQtLVxM.decreaseAllowance.call(addresswkJ5OJU, uinto8avAqR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnNXISM8V = await Weedburn.new({from: accounts[1]});
		const uintN4IPK9C = BigInt("1524")
		const addressyPMy5k7 = "0x0000000000000000000000000000000000000001"
		const uinthWfUE9N = BigInt("974")
		const uintlwAa15v = BigInt("1344")
		const addressx4tpbjy = accounts[1]
		const stringamuE2fr = await WeedburnNXISM8V.symbol.call({from: accounts[1]});
//		const booljHSnqfP = await WeedburnNXISM8V.transfer.call(addressyPMy5k7, uintN4IPK9C, {from: accounts[5]});
//		const uint256DuGm2lL = await WeedburnNXISM8V.totalSupply.call({from: accounts[2]});
//		const uint256QLnbWkO = await WeedburnNXISM8V.burn.call(uinthWfUE9N, {from: accounts[1]});
//		const boolHCaN9Ot = await WeedburnNXISM8V.increaseAllowance.call(addressx4tpbjy, uintlwAa15v, {from: accounts[0]});

		assert.equal(stringamuE2fr, "Weedburn")
		await expect(WeedburnNXISM8V.transfer.call(addressyPMy5k7, uintN4IPK9C, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnog92vD = await Weedburn.new({from: accounts[3]});
		const addressWMtZECZ = accounts[5]
		const addressaLa3OBo = accounts[2]
		const uintsvwikod = BigInt("1310")
		const addressbJGfu1D = "0x0000000000000000000000000000000000000001"
		const uint8NKw730 = await Weedburnog92vD.decimals.call({from: accounts[0]});
		const uint256BfBRJQ = await Weedburnog92vD.allowance.call(addressaLa3OBo, addressWMtZECZ, {from: accounts[3]});
//		const boolOlP7LS = await Weedburnog92vD.transfer.call(addressbJGfu1D, uintsvwikod, {from: accounts[0]});

		assert.equal(uint256BfBRJQ, BigInt("0"))
		assert.equal(uint8NKw730, BigInt("18"))
		await expect(Weedburnog92vD.transfer.call(addressbJGfu1D, uintsvwikod, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnog92vD = await Weedburn.new({from: accounts[3]});
		const uintF3dGoNi = BigInt("352")
		const addressjSAdBG9 = accounts[4]
		const addressQ0DWxw = accounts[5]
		const addressatQ4QoD = accounts[2]
		const uintv1YIYNp = BigInt("1310")
		const addressYxms0w = "0x0000000000000000000000000000000000000001"
//		const addresskKGXFLR = await Weedburnog92vD.burnFrom.call(addressjSAdBG9, uintF3dGoNi, {from: accounts[2]});
//		const uint8NKw730 = await Weedburnog92vD.decimals.call({from: accounts[0]});
//		const uint256BfBRJQ = await Weedburnog92vD.allowance.call(addressatQ4QoD, addressQ0DWxw, {from: accounts[3]});
//		const boolOlP7LS = await Weedburnog92vD.transfer.call(addressYxms0w, uintv1YIYNp, {from: accounts[0]});

		await expect(Weedburnog92vD.burnFrom.call(addressjSAdBG9, uintF3dGoNi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnog92vD = await Weedburn.new({from: accounts[3]});
		const addressoGxeFxY = accounts[5]
		const addressP0VBEcN = accounts[2]
		const uints8B2Xeq = BigInt("1310")
		const addressuJ6vrb = "0x0000000000000000000000000000000000000001"
		const uint8NKw730 = await Weedburnog92vD.decimals.call({from: accounts[0]});
		const uint256BfBRJQ = await Weedburnog92vD.allowance.call(addressP0VBEcN, addressoGxeFxY, {from: accounts[3]});
		const stringiV8XvCp = await Weedburnog92vD.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolOlP7LS = await Weedburnog92vD.transfer.call(addressuJ6vrb, uints8B2Xeq, {from: accounts[0]});

		assert.equal(stringiV8XvCp, "t.me/burnweed1")
		assert.equal(uint256BfBRJQ, BigInt("0"))
		assert.equal(uint8NKw730, BigInt("18"))
		await expect(Weedburnog92vD.transfer.call(addressuJ6vrb, uints8B2Xeq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnaumlxh0 = await Weedburn.new({from: accounts[5]});
//		await Weedburnaumlxh0.enableLimitMode.call({from: accounts[4]});
//		await Weedburnaumlxh0.enableDevMode.call({from: accounts[0]});
//		await Weedburnaumlxh0.disableLimitMode.call({from: accounts[2]});
//		await Weedburnaumlxh0.disableLimitMode.call({from: accounts[4]});

		await expect(Weedburnaumlxh0.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnhA14WHc = await Weedburn.new({from: accounts[2]});
		const uintnenQ3N = BigInt("505")
//		const uint256S4izpsi = await WeedburnhA14WHc.burn.call(uintnenQ3N, {from: "0x0000000000000000000000000000000000000001"});
//		const stringNPptaZR = await WeedburnhA14WHc.symbol.call({from: accounts[4]});
//		const uint256YHfosSU = await WeedburnhA14WHc.totalSupply.call({from: accounts[1]});
//		const uint8qOFj0k = await WeedburnhA14WHc.decimals.call({from: accounts[5]});
//		await WeedburnhA14WHc.disableLimitMode.call({from: accounts[3]});

		await expect(WeedburnhA14WHc.burn.call(uintnenQ3N, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnFQjiw5 = await Weedburn.new({from: accounts[0]});
		const uintyLKCfEp = BigInt("492")
		const addressYdacDXC = accounts[3]
		const addressWGE2A6G = accounts[4]
		const addressbEoRHSE = accounts[0]
		const uinthB7Jhpk = BigInt("1837")
		const stringU74Yxz9 = await WeedburnFQjiw5.symbol.call({from: accounts[4]});
//		const boolxDlhuqP = await WeedburnFQjiw5.transferFrom.call(addressWGE2A6G, addressYdacDXC, uintyLKCfEp, {from: accounts[3]});
//		const uint256KMvV97N = await WeedburnFQjiw5.balanceOf.call(addressbEoRHSE, {from: accounts[4]});
//		const uint256ENx3DJ8 = await WeedburnFQjiw5.burn.call(uinthB7Jhpk, {from: accounts[3]});

		assert.equal(stringU74Yxz9, "Weedburn")
		await expect(WeedburnFQjiw5.transferFrom.call(addressWGE2A6G, addressYdacDXC, uintyLKCfEp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnlUYHmzm = await Weedburn.new({from: accounts[3]});
		const addressSmIStl = accounts[3]
		const uintdAQByFO = BigInt("496")
		const addressBsUvEpa = accounts[2]
		const addressI6P95NQ = accounts[1]
		const uintLvYFKe5 = BigInt("158")
		const addressczfEQ1w = accounts[2]
		const uint256iwDCP6z = await WeedburnlUYHmzm.balanceOf.call(addressSmIStl, {from: accounts[3]});
		const uint8cWhjrU = await WeedburnlUYHmzm.decimals.call({from: accounts[4]});
//		const boolOnAshYh = await WeedburnlUYHmzm.transferFrom.call(addressI6P95NQ, addressBsUvEpa, uintdAQByFO, {from: accounts[2]});
//		const boolGCOBdSM = await WeedburnlUYHmzm.approve.call(addressczfEQ1w, uintLvYFKe5, {from: accounts[2]});

		assert.equal(uint256iwDCP6z, BigInt("100000000000000000000000"))
		assert.equal(uint8cWhjrU, BigInt("18"))
		await expect(WeedburnlUYHmzm.transferFrom.call(addressI6P95NQ, addressBsUvEpa, uintdAQByFO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburniThgchC = await Weedburn.new({from: accounts[2]});
		const addresstLhf5hG = accounts[4]
		const uint256ENU1ZSL = await WeedburniThgchC.totalSupply.call({from: accounts[0]});
		const uint25660dJTQ = await WeedburniThgchC.balanceOf.call(addresstLhf5hG, {from: accounts[0]});
//		await WeedburniThgchC.disableLimitMode.call({from: accounts[1]});

		assert.equal(uint25660dJTQ, BigInt("0"))
		assert.equal(uint256ENU1ZSL, BigInt("100000000000000000000000"))
		await expect(WeedburniThgchC.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnLwgciS5 = await Weedburn.new({from: accounts[2]});
		const uintmcBQ0RM = BigInt("1885")
		const addressdBpMHPr = accounts[0]
		const uintYmAyK4 = BigInt("512")
		const addressqF7D4K = accounts[0]
		const boolOWi8CiG = await WeedburnLwgciS5.increaseAllowance.call(addressdBpMHPr, uintmcBQ0RM, {from: accounts[3]});
//		await WeedburnLwgciS5.enableDevMode.call({from: accounts[3]});
//		await WeedburnLwgciS5.enableLimitMode.call({from: accounts[2]});
//		const addressK1gRfiP = await WeedburnLwgciS5.burnFrom.call(addressqF7D4K, uintYmAyK4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOWi8CiG, true)
		await expect(WeedburnLwgciS5.enableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnlVCIu6n = await Weedburn.new({from: accounts[1]});
		const uintHwaxypO = BigInt("949")
		const addressjjb1ihw = accounts[0]
		const addressMRgDhFG = accounts[2]
		const addressvcDV5BV = accounts[2]
		const booldFqYHW = await WeedburnlVCIu6n.approve.call(addressjjb1ihw, uintHwaxypO, {from: accounts[2]});
		const uint256hv3M1Xk = await WeedburnlVCIu6n.totalSupply.call({from: accounts[4]});
//		await WeedburnlVCIu6n.disableLimitMode.call({from: accounts[1]});
//		const uint256Uca30Lh = await WeedburnlVCIu6n.allowance.call(addressvcDV5BV, addressMRgDhFG, {from: accounts[5]});

		assert.equal(booldFqYHW, true)
		assert.equal(uint256hv3M1Xk, BigInt("100000000000000000000000"))
		await expect(WeedburnlVCIu6n.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnnm8eBzp = await Weedburn.new({from: accounts[3]});
//		await Weedburnnm8eBzp.enableLimitMode.call({from: accounts[3]});
//		await Weedburnnm8eBzp.disableDevMode.call({from: accounts[1]});

		await expect(Weedburnnm8eBzp.enableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnVrZ1KDp = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintY6ssOh = BigInt("361")
		const addressWhygPHF = accounts[0]
		const uint256Z1mKnM2 = await WeedburnVrZ1KDp.totalSupply.call({from: accounts[3]});
		const addressSRrvW0d = await WeedburnVrZ1KDp.burnFrom.call(addressWhygPHF, uintY6ssOh, {from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburneimPkkT = await Weedburn.new({from: accounts[1]});
		const addressMoHAtZO = accounts[2]
		const uintdGplRLw = BigInt("501")
		const addressj0v4sLn = accounts[1]
		const uintdP08nGc = BigInt("809")
		const uint256npR0mix = await WeedburneimPkkT.balanceOf.call(addressMoHAtZO, {from: accounts[0]});
		const boolryjIbxU = await WeedburneimPkkT.transfer.call(addressj0v4sLn, uintdGplRLw, {from: accounts[1]});
//		const uint256GtM14MU = await WeedburneimPkkT.burn.call(uintdP08nGc, {from: accounts[5]});

		assert.equal(boolryjIbxU, true)
		assert.equal(uint256npR0mix, BigInt("0"))
		await expect(WeedburneimPkkT.burn.call(uintdP08nGc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})