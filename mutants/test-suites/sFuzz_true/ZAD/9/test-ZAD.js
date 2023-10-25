const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADwO17BmA = await ZAD.new({from: accounts[5]});
		const uintib0G3vm = BigInt("991")
		const addressWMkk6fQ = accounts[4]
		const addresszpSITmH = accounts[3]
		const uintPApbs06 = BigInt("722")
		const addressP6LZBYt = accounts[5]
		const uints0H4kUe = BigInt("1413")
		const addressVHoGFP = accounts[2]
		const addresst5OjPDE = accounts[4]
		const uintBJY0mQ = BigInt("1464")
		const addressIHquaMJ = accounts[5]
//		const boolDYTNRwm = await ZADwO17BmA.transferFrom.call(addresszpSITmH, addressWMkk6fQ, uintib0G3vm, {from: accounts[1]});
//		const boolHQPELVc = await ZADwO17BmA.transfer.call(addressP6LZBYt, uintPApbs06, {from: accounts[0]});
//		const bool0rwYL5 = await ZADwO17BmA.transferFrom.call(addresst5OjPDE, addressVHoGFP, uints0H4kUe, {from: accounts[2]});
//		const booljAwPH9Q = await ZADwO17BmA.approve.call(addressIHquaMJ, uintBJY0mQ, {from: accounts[2]});
//		const string8fo72w = await ZADwO17BmA.symbol.call({from: accounts[0]});
//		const stringQF8mZFT = await ZADwO17BmA.symbol.call({from: accounts[2]});

		await expect(ZADwO17BmA.transferFrom.call(addresszpSITmH, addressWMkk6fQ, uintib0G3vm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADprqro0Z = await ZAD.new({from: accounts[0]});
		const addressnDSOypd = "0x0000000000000000000000000000000000000001"
		const uintquYbbgD = BigInt("1343")
		const addressp63SPCr = accounts[2]
		const uint256fF7AkcH = await ZADprqro0Z.balanceOf.call(addressnDSOypd, {from: accounts[2]});
		const stringFhJcA4y = await ZADprqro0Z.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8gwLVEkI = await ZADprqro0Z.decimals.call({from: accounts[2]});
		const boolp4Q3ABb = await ZADprqro0Z.increaseAllowance.call(addressp63SPCr, uintquYbbgD, {from: accounts[0]});

		assert.equal(boolp4Q3ABb, true)
		assert.equal(stringFhJcA4y, "ZAD")
		assert.equal(uint256fF7AkcH, BigInt("0"))
		assert.equal(uint8gwLVEkI, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADmSaOFU = await ZAD.new({from: accounts[1]});
		const uintLrV0MDb = BigInt("1129")
		const addressHeMORfw = accounts[1]
		const uintf0qmKMp = BigInt("1910")
		const addressgohXRa = accounts[0]
		const addressa2C4t3f = accounts[1]
		const uintwgRwUpf = BigInt("745")
		const addressUuXWGnw = accounts[1]
		const uinttgwh9NH = BigInt("860")
		const addressUrJN9Sy = accounts[3]
		const addressiObl3fG = accounts[0]
//		const boolnDr2Q28 = await ZADmSaOFU.transfer.call(addressHeMORfw, uintLrV0MDb, {from: accounts[0]});
//		const boolw3vaI05 = await ZADmSaOFU.transferFrom.call(addressa2C4t3f, addressgohXRa, uintf0qmKMp, {from: accounts[3]});
//		const uint8B9B4fnw = await ZADmSaOFU.decimals.call({from: accounts[5]});
//		const stringDfr0xV = await ZADmSaOFU.name.call({from: accounts[0]});
//		const boolDQMRuS1 = await ZADmSaOFU.transfer.call(addressUuXWGnw, uintwgRwUpf, {from: accounts[2]});
//		const bools9JB6Ly = await ZADmSaOFU.transferFrom.call(addressiObl3fG, addressUrJN9Sy, uinttgwh9NH, {from: accounts[4]});

		await expect(ZADmSaOFU.transfer.call(addressHeMORfw, uintLrV0MDb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADuML9GDD = await ZAD.new({from: accounts[3]});
		const addressydTDzgl = accounts[2]
		const addressMNgPYfs = accounts[2]
		const uinthnd1nmi = BigInt("1213")
		const addressivdaT9 = accounts[0]
		const uintJcZlvcB = BigInt("317")
		const addressBhYqAoJ = accounts[0]
		const uint256rz8wC78 = await ZADuML9GDD.allowance.call(addressMNgPYfs, addressydTDzgl, {from: accounts[2]});
		const stringxmhimT9 = await ZADuML9GDD.symbol.call({from: accounts[3]});
//		const bool1Nsv94 = await ZADuML9GDD.decreaseAllowance.call(addressivdaT9, uinthnd1nmi, {from: accounts[0]});
//		const uint256sXQie6w = await ZADuML9GDD.totalSupply.call({from: accounts[5]});
//		const boolzJmsV3J = await ZADuML9GDD.decreaseAllowance.call(addressBhYqAoJ, uintJcZlvcB, {from: accounts[4]});
//		const uint256slGvyI = await ZADuML9GDD.totalSupply.call({from: accounts[0]});

		assert.equal(stringxmhimT9, "ZAD")
		assert.equal(uint256rz8wC78, BigInt("0"))
		await expect(ZADuML9GDD.decreaseAllowance.call(addressivdaT9, uinthnd1nmi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADGORkbzX = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const addressk9CHABN = accounts[1]
		const uintFUL62a = BigInt("639")
		const uint256Bv1EZ22 = await ZADGORkbzX.balanceOf.call(addressk9CHABN, {from: accounts[1]});
		const uint256zpYdrHU = await ZADGORkbzX._burn.call(uintFUL62a, {from: accounts[3]});
		const uint8kcaUcPs = await ZADGORkbzX.decimals.call({from: accounts[5]});
		const uint256d8fXhH0 = await ZADGORkbzX.totalSupply.call({from: accounts[0]});
	});

	it('test for ZAD', async () => {
		const ZADAAXmndL = await ZAD.new({from: accounts[4]});
		const uintiP2zhvn = BigInt("448")
		const addressKW94YpD = accounts[3]
		const uintKY181PD = BigInt("163")
		const addressHhgBJrR = accounts[2]
		const addressbDzrp7x = accounts[0]
		const boolFIrs78 = await ZADAAXmndL.approve.call(addressKW94YpD, uintiP2zhvn, {from: accounts[0]});
//		const boola3vRw9k = await ZADAAXmndL.decreaseAllowance.call(addressHhgBJrR, uintKY181PD, {from: accounts[4]});
//		const uint256zaNeUVR = await ZADAAXmndL.balanceOf.call(addressbDzrp7x, {from: accounts[3]});

		assert.equal(boolFIrs78, true)
		await expect(ZADAAXmndL.decreaseAllowance.call(addressHhgBJrR, uintKY181PD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADWedA8GC = await ZAD.new({from: accounts[0]});
		const addressKwlr3RY = accounts[1]
		const addresszIIgek = accounts[1]
		const addresskSLzHjn = accounts[0]
		const addresscxJTsEh = accounts[2]
		const uint256IaEOLXO = await ZADWedA8GC.balanceOf.call(addressKwlr3RY, {from: accounts[3]});
		const uint256WNHMnYL = await ZADWedA8GC.totalSupply.call({from: accounts[4]});
		const stringLxJwFR = await ZADWedA8GC.name.call({from: accounts[0]});
		const uint256Mrf0R0h = await ZADWedA8GC.allowance.call(addresskSLzHjn, addresszIIgek, {from: accounts[1]});
		const uint256rAn0lOi = await ZADWedA8GC.balanceOf.call(addresscxJTsEh, {from: accounts[0]});

		assert.equal(stringLxJwFR, "Zadkiel")
		assert.equal(uint256IaEOLXO, BigInt("0"))
		assert.equal(uint256Mrf0R0h, BigInt("0"))
		assert.equal(uint256WNHMnYL, BigInt("100000000000000000000000000"))
		assert.equal(uint256rAn0lOi, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADU7uIkfe = await ZAD.new({from: accounts[0]});
		const uintVcwsjqu = BigInt("752")
		const addressVanUFob = accounts[5]
		const addressf9H0172 = accounts[3]
		const uintI9Tc0Ku = BigInt("1080")
		const uintDybnZSy = BigInt("1965")
		const addresslOEvNh4 = accounts[1]
		const stringieVNwx = await ZADU7uIkfe.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolZpE9XTh = await ZADU7uIkfe.approve.call(addressVanUFob, uintVcwsjqu, {from: accounts[5]});
		const uint256OeXkCGS = await ZADU7uIkfe.balanceOf.call(addressf9H0172, {from: accounts[4]});
//		const uint256axwcrME = await ZADU7uIkfe._burn.call(uintI9Tc0Ku, {from: accounts[3]});
//		const boolZY6lih0 = await ZADU7uIkfe.transfer.call(addresslOEvNh4, uintDybnZSy, {from: accounts[5]});

		assert.equal(boolZpE9XTh, true)
		assert.equal(stringieVNwx, "ZAD")
		assert.equal(uint256OeXkCGS, BigInt("0"))
		await expect(ZADU7uIkfe._burn.call(uintI9Tc0Ku, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})