const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOWIPtRD7 = await FrogDAO.new({from: accounts[4]});
		const addressfHJhRwN = accounts[4]
		const uintnoueM5H = BigInt("689")
		const uintMqvN8u4 = BigInt("921")
		const uintLENKeTL = BigInt("951")
		const addresspiuzlJ = accounts[0]
		const addressUjITj9m = accounts[1]
		const uintS8CO9yZ = BigInt("368")
		const uintg3AHuGF = BigInt("709")
		const uintgfHEiJ6 = await FrogDAOWIPtRD7.balanceOf.call(addressfHJhRwN, {from: accounts[2]});
		const uintb2XJJB6 = await FrogDAOWIPtRD7.safeMul.call(uintMqvN8u4, uintnoueM5H, {from: accounts[1]});
		const boolKwDlsXZ = await FrogDAOWIPtRD7.transfer.call(addresspiuzlJ, uintLENKeTL, {from: accounts[1]});
		const uintJ4Dw2w8 = await FrogDAOWIPtRD7.balanceOf.call(addressUjITj9m, {from: accounts[3]});
		const uintIV5WfEk = await FrogDAOWIPtRD7.safeAdd.call(uintg3AHuGF, uintS8CO9yZ, {from: accounts[2]});

		assert.equal(uintb2XJJB6, BigInt("634569"))
		assert.equal(uintgfHEiJ6, BigInt("1000000000000000000000000"))
		await expect(FrogDAOWIPtRD7.transfer.call(addresspiuzlJ, uintLENKeTL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOO8ABQA = await FrogDAO.new({from: accounts[3]});
		const uintSGx3ZX = BigInt("1248")
		const uintC4hPtzS = BigInt("368")
		const uintAcgV9cM = BigInt("602")
		const uintrYdBDo9 = BigInt("1839")
		const uintiyGne3x = BigInt("812")
		const uintpN84iV7 = BigInt("1121")
		const uintqjU731 = await FrogDAOO8ABQA.safeAdd.call(uintC4hPtzS, uintSGx3ZX, {from: accounts[0]});
		const uintzVDjcWo = await FrogDAOO8ABQA.safeAdd.call(uintrYdBDo9, uintAcgV9cM, {from: accounts[4]});
		const uintKdnomgu = await FrogDAOO8ABQA.safeDiv.call(uintpN84iV7, uintiyGne3x, {from: accounts[0]});

		assert.equal(uintKdnomgu, BigInt("1"))
		assert.equal(uintqjU731, BigInt("1616"))
		assert.equal(uintzVDjcWo, BigInt("2441"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOVpQfM0i = await FrogDAO.new({from: accounts[0]});
		const uintigfco97 = BigInt("922")
		const uintVY7bgPR = BigInt("1109")
		const addressl1PTddU = accounts[5]
		const addressp0Sb78h = accounts[4]
		const addressJPRxvG = "0x0000000000000000000000000000000000000001"
		const addressJfsB1bX = accounts[0]
		const uintrXApgCV = await FrogDAOVpQfM0i.safeMul.call(uintVY7bgPR, uintigfco97, {from: accounts[4]});
		const uintcUtACy5 = await FrogDAOVpQfM0i.allowance.call(addressp0Sb78h, addressl1PTddU, {from: accounts[0]});
		const uintwiPdwd = await FrogDAOVpQfM0i.allowance.call(addressJfsB1bX, addressJPRxvG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintcUtACy5, BigInt("0"))
		assert.equal(uintrXApgCV, BigInt("1022498"))
		assert.equal(uintwiPdwd, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOOeXjPUA = await FrogDAO.new({from: accounts[1]});
		const addressGXQmGis = accounts[2]
		const addressF4HE2lD = "0x0000000000000000000000000000000000000001"
		const uinthHV35pi = BigInt("1320")
		const addressan92QqB = accounts[2]
		const uintC55Zv4 = BigInt("972")
		const uintgoBcSzo = BigInt("1207")
		const addressUnTq8Ec = accounts[3]
		const addresscM0RoRP = accounts[2]
		const uintD06bYKn = BigInt("1876")
		const uintM4M2J7d = BigInt("1866")
		const uintO6P8zbx = await FrogDAOOeXjPUA.allowance.call(addressF4HE2lD, addressGXQmGis, {from: accounts[1]});
		const boolfeodWzp = await FrogDAOOeXjPUA.approve.call(addressan92QqB, uinthHV35pi, {from: accounts[4]});
		const uintgQW4E2 = await FrogDAOOeXjPUA.safeMul.call(uintgoBcSzo, uintC55Zv4, {from: accounts[2]});
		const uintbQw2h89 = await FrogDAOOeXjPUA.allowance.call(addresscM0RoRP, addressUnTq8Ec, {from: accounts[3]});
		const uintPadLMPk = await FrogDAOOeXjPUA.safeDiv.call(uintM4M2J7d, uintD06bYKn, {from: accounts[4]});

		assert.equal(boolfeodWzp, true)
		assert.equal(uintO6P8zbx, BigInt("0"))
		assert.equal(uintPadLMPk, BigInt("0"))
		assert.equal(uintbQw2h89, BigInt("0"))
		assert.equal(uintgQW4E2, BigInt("1173204"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOKHnhNn = await FrogDAO.new({from: accounts[0]});
		const uintVfTtQT9 = BigInt("192")
		const uintON24ESY = BigInt("1881")
		const addressN6xpmOS = accounts[5]
		const addressqSd65z = accounts[0]
		const uintDeC5ahd = BigInt("1395")
		const addressTokr7Zb = accounts[3]
		const addressywCXo83 = accounts[2]
		const uintiDetjwj = await FrogDAOKHnhNn.safeDiv.call(uintON24ESY, uintVfTtQT9, {from: "0x0000000000000000000000000000000000000001"});
		const uintUUR9zw = await FrogDAOKHnhNn.allowance.call(addressqSd65z, addressN6xpmOS, {from: accounts[1]});
		const boolel8vJC = await FrogDAOKHnhNn.transferFrom.call(addressywCXo83, addressTokr7Zb, uintDeC5ahd, {from: accounts[3]});

		assert.equal(uintUUR9zw, BigInt("0"))
		assert.equal(uintiDetjwj, BigInt("9"))
		await expect(FrogDAOKHnhNn.transferFrom.call(addressywCXo83, addressTokr7Zb, uintDeC5ahd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOwiN2AZb = await FrogDAO.new({from: accounts[0]});
		const uintwBuC1KA = BigInt("1613")
		const uintMxr98Pv = BigInt("1342")
		const uintEfmeEJW = await FrogDAOwiN2AZb.totalSupply.call({from: accounts[4]});
		const uintF7iafA3 = await FrogDAOwiN2AZb.safeAdd.call(uintMxr98Pv, uintwBuC1KA, {from: accounts[1]});

		assert.equal(uintEfmeEJW, BigInt("1000000000000000000000000"))
		assert.equal(uintF7iafA3, BigInt("2955"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOqNg9XGU = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmuoIHtx = accounts[0]
		const addresshkD9Oer = accounts[1]
		const addressfNu7SNT = accounts[5]
		const uinti069vHW = BigInt("1852")
		const addressfZY69YF = accounts[3]
		const uintcV1kTgH = BigInt("1299")
		const addressxIGjZ46 = accounts[0]
		const uintR3n1FKZ = BigInt("1135")
		const uintys8SOYh = BigInt("1481")
		const uintpzfTjGV = await FrogDAOqNg9XGU.allowance.call(addresshkD9Oer, addressmuoIHtx, {from: accounts[4]});
		const uintZZwEMoh = await FrogDAOqNg9XGU.balanceOf.call(addressfNu7SNT, {from: accounts[0]});
		const boolHUrcibl = await FrogDAOqNg9XGU.approve.call(addressfZY69YF, uinti069vHW, {from: accounts[0]});
		const boolv4QMbg = await FrogDAOqNg9XGU.transfer.call(addressxIGjZ46, uintcV1kTgH, {from: accounts[4]});
		const uintUU8eDWn = await FrogDAOqNg9XGU.safeDiv.call(uintys8SOYh, uintR3n1FKZ, {from: accounts[2]});
	});
})