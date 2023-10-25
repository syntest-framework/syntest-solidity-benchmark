const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOZ8oJ1AV = await FrogDAO.new({from: accounts[3]});
		const uintbcG5VyA = BigInt("1102")
		const uintH36SDRJ = BigInt("1141")
		const uinteJHLsVj = BigInt("1262")
		const uintN3pTOIZ = BigInt("840")
		const uintNqPMD1j = BigInt("1499")
		const addresstm7tLcE = accounts[2]
		const uintLvPKBeh = BigInt("896")
		const uintlLPj6jI = BigInt("332")
		const uintcB2VQmi = BigInt("684")
		const uintVOunst = BigInt("3")
		const uintBDLpFQ = await FrogDAOZ8oJ1AV.safeSub.call(uintH36SDRJ, uintbcG5VyA, {from: accounts[1]});
		const uintuqUkvWI = await FrogDAOZ8oJ1AV.safeMul.call(uintN3pTOIZ, uinteJHLsVj, {from: accounts[2]});
//		const boolEpmfkVM = await FrogDAOZ8oJ1AV.transfer.call(addresstm7tLcE, uintNqPMD1j, {from: accounts[1]});
//		const uintFAANYt8 = await FrogDAOZ8oJ1AV.safeMul.call(uintlLPj6jI, uintLvPKBeh, {from: accounts[1]});
//		const uintXUR6O2W = await FrogDAOZ8oJ1AV.safeDiv.call(uintVOunst, uintcB2VQmi, {from: accounts[4]});

		assert.equal(uintBDLpFQ, BigInt("39"))
		assert.equal(uintuqUkvWI, BigInt("1060080"))
		await expect(FrogDAOZ8oJ1AV.transfer.call(addresstm7tLcE, uintNqPMD1j, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOWbRBV8O = await FrogDAO.new({from: accounts[1]});
		const addressFlp9zXz = accounts[1]
		const uintnx0UL53 = BigInt("1934")
		const addresshaeajvz = accounts[2]
		const uintBI7IyOd = BigInt("537")
		const uintEz7WAbD = BigInt("618")
		const uinttQqivhp = BigInt("158")
		const uintTIk7yST = BigInt("1793")
		const uintRo0MxpC = await FrogDAOWbRBV8O.balanceOf.call(addressFlp9zXz, {from: accounts[1]});
//		const boolUSanWu = await FrogDAOWbRBV8O.transfer.call(addresshaeajvz, uintnx0UL53, {from: accounts[2]});
//		const uint8DH5Kh = await FrogDAOWbRBV8O.safeDiv.call(uintEz7WAbD, uintBI7IyOd, {from: accounts[3]});
//		const uintIRIzPyh = await FrogDAOWbRBV8O.safeDiv.call(uintTIk7yST, uinttQqivhp, {from: accounts[2]});

		assert.equal(uintRo0MxpC, BigInt("1000000000000000000000000"))
		await expect(FrogDAOWbRBV8O.transfer.call(addresshaeajvz, uintnx0UL53, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOc1cYhhb = await FrogDAO.new({from: accounts[5]});
		const addressbB45Joh = accounts[0]
		const addressTezUvT3 = accounts[1]
		const uintr1hXiu7 = BigInt("1406")
		const addressPpSm9Rj = accounts[1]
		const uintJIKjZLY = await FrogDAOc1cYhhb.allowance.call(addressTezUvT3, addressbB45Joh, {from: "0x0000000000000000000000000000000000000001"});
//		const boollnvAn1G = await FrogDAOc1cYhhb.transfer.call(addressPpSm9Rj, uintr1hXiu7, {from: accounts[3]});

		assert.equal(uintJIKjZLY, BigInt("0"))
		await expect(FrogDAOc1cYhhb.transfer.call(addressPpSm9Rj, uintr1hXiu7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOVQa6ut8 = await FrogDAO.new({from: accounts[4]});
		const uintI0l7vIJ = BigInt("985")
		const uintNucTSFk = BigInt("1130")
		const addressqwx99lL = accounts[0]
		const addressDbAVU50 = accounts[3]
		const uintdrOYJxK = BigInt("601")
		const addressBSsF7ZT = accounts[1]
		const uintyq1Pa4R = await FrogDAOVQa6ut8.safeSub.call(uintNucTSFk, uintI0l7vIJ, {from: accounts[0]});
		const uintQl5MEC = await FrogDAOVQa6ut8.allowance.call(addressDbAVU50, addressqwx99lL, {from: accounts[5]});
		const boolHIGUdSW = await FrogDAOVQa6ut8.approve.call(addressBSsF7ZT, uintdrOYJxK, {from: accounts[4]});

		assert.equal(boolHIGUdSW, true)
		assert.equal(uintQl5MEC, BigInt("0"))
		assert.equal(uintyq1Pa4R, BigInt("145"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOJk40v0Y = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDQngvfn = BigInt("800")
		const uintCe3Vqns = BigInt("899")
		const uintG12z0A1 = BigInt("495")
		const uintSBx4G8g = BigInt("1503")
		const uintDeg9t7v = BigInt("1412")
		const uintwisusQo = BigInt("16")
		const uintvOSPXF = await FrogDAOJk40v0Y.safeDiv.call(uintCe3Vqns, uintDQngvfn, {from: accounts[1]});
		const uintcO5i3kl = await FrogDAOJk40v0Y.safeSub.call(uintSBx4G8g, uintG12z0A1, {from: accounts[1]});
		const uintNtwhsB = await FrogDAOJk40v0Y.totalSupply.call({from: accounts[0]});
		const uintPTiYbNx = await FrogDAOJk40v0Y.safeDiv.call(uintwisusQo, uintDeg9t7v, {from: accounts[3]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOSKKQTqw = await FrogDAO.new({from: accounts[4]});
		const uintQy7mLys = BigInt("1570")
		const uintGLkQhnw = BigInt("865")
		const uintK6Ifo3X = BigInt("1589")
		const uintyB9MX8m = BigInt("1507")
		const uintlGOr17O = await FrogDAOSKKQTqw.safeMul.call(uintGLkQhnw, uintQy7mLys, {from: accounts[0]});
		const uint9cf9ew = await FrogDAOSKKQTqw.totalSupply.call({from: accounts[0]});
		const uintem78Kfc = await FrogDAOSKKQTqw.safeDiv.call(uintyB9MX8m, uintK6Ifo3X, {from: accounts[0]});

		assert.equal(uint9cf9ew, BigInt("1000000000000000000000000"))
		assert.equal(uintem78Kfc, BigInt("0"))
		assert.equal(uintlGOr17O, BigInt("1358050"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOCPD6FHY = await FrogDAO.new({from: accounts[3]});
		const uintDM2uPPQ = BigInt("1086")
		const uintuyVzFL7 = BigInt("127")
		const addressUxvJvpj = accounts[5]
		const uintpoZuAes = await FrogDAOCPD6FHY.safeAdd.call(uintuyVzFL7, uintDM2uPPQ, {from: accounts[0]});
		const uint3UbpxX = await FrogDAOCPD6FHY.balanceOf.call(addressUxvJvpj, {from: accounts[3]});

		assert.equal(uint3UbpxX, BigInt("0"))
		assert.equal(uintpoZuAes, BigInt("1213"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOc1cYhhb = await FrogDAO.new({from: accounts[5]});
		const uintnNpD941 = BigInt("560")
		const uintmusQ4LH = BigInt("1207")
		const uintmxAx9Xj = BigInt("1304")
		const addressnPaGDM = accounts[4]
		const addressKH9JUyN = accounts[5]
		const uintCFCGjDs = BigInt("1151")
		const addressGmCi0LO = accounts[1]
		const uintETQ1FVe = await FrogDAOc1cYhhb.safeDiv.call(uintmusQ4LH, uintnNpD941, {from: accounts[1]});
//		const boolS9KnFoC = await FrogDAOc1cYhhb.transferFrom.call(addressKH9JUyN, addressnPaGDM, uintmxAx9Xj, {from: accounts[3]});
//		const boollnvAn1G = await FrogDAOc1cYhhb.transfer.call(addressGmCi0LO, uintCFCGjDs, {from: accounts[3]});

		assert.equal(uintETQ1FVe, BigInt("2"))
		await expect(FrogDAOc1cYhhb.transferFrom.call(addressKH9JUyN, addressnPaGDM, uintmxAx9Xj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})