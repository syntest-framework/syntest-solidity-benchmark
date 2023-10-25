const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOf4XPG9t = await FrogDAO.new({from: accounts[0]});
		const addressLWJ1z9d = accounts[0]
		const addressF1L44P = accounts[4]
		const addressX4P2pV = accounts[0]
		const uintsTDXxAw = BigInt("262")
		const uintZ2ckZ0 = BigInt("417")
		const uinthGI9hQ3 = await FrogDAOf4XPG9t.allowance.call(addressF1L44P, addressLWJ1z9d, {from: accounts[0]});
		const uintnBoqaIG = await FrogDAOf4XPG9t.balanceOf.call(addressX4P2pV, {from: accounts[1]});
		const uintZPJzqgi = await FrogDAOf4XPG9t.safeMul.call(uintZ2ckZ0, uintsTDXxAw, {from: accounts[1]});

		assert.equal(uintZPJzqgi, BigInt("109254"))
		assert.equal(uinthGI9hQ3, BigInt("0"))
		assert.equal(uintnBoqaIG, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOQ4np05p = await FrogDAO.new({from: accounts[3]});
		const uintBqeLsvw = BigInt("143")
		const addressut3GhzD = accounts[1]
		const uinth9FxMc9 = BigInt("1369")
		const uinthpgwhXd = BigInt("630")
		const uintyzzMaMj = BigInt("1375")
		const uintAPMW4Pj = BigInt("198")
		const uintxx9mN57 = BigInt("1186")
		const uintRFXURdJ = BigInt("2016")
//		const boolRGfEZeN = await FrogDAOQ4np05p.transfer.call(addressut3GhzD, uintBqeLsvw, {from: accounts[0]});
//		const uintd6ndZ2M = await FrogDAOQ4np05p.safeMul.call(uinthpgwhXd, uinth9FxMc9, {from: accounts[0]});
//		const uintaqBgeXB = await FrogDAOQ4np05p.totalSupply.call({from: accounts[0]});
//		const uintR7rxduI = await FrogDAOQ4np05p.safeMul.call(uintAPMW4Pj, uintyzzMaMj, {from: accounts[5]});
//		const uintBCLb2sd = await FrogDAOQ4np05p.safeAdd.call(uintRFXURdJ, uintxx9mN57, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOQ4np05p.transfer.call(addressut3GhzD, uintBqeLsvw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOrsRWCGD = await FrogDAO.new({from: accounts[0]});
		const uintjOMPWy5 = BigInt("1161")
		const addressLzFvfw8 = accounts[0]
		const addresszvSSFmP = accounts[0]
		const addressQ6NjLO8 = accounts[3]
		const boolaHwFq9L = await FrogDAOrsRWCGD.transfer.call(addressLzFvfw8, uintjOMPWy5, {from: accounts[0]});
		const uintyiLrL56 = await FrogDAOrsRWCGD.allowance.call(addressQ6NjLO8, addresszvSSFmP, {from: accounts[3]});
		const uintzxcBoEi = await FrogDAOrsRWCGD.totalSupply.call({from: accounts[0]});
		const uintRQiLxBo = await FrogDAOrsRWCGD.totalSupply.call({from: accounts[4]});

		assert.equal(boolaHwFq9L, true)
		assert.equal(uintRQiLxBo, BigInt("1000000000000000000000000"))
		assert.equal(uintyiLrL56, BigInt("0"))
		assert.equal(uintzxcBoEi, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOM3LofEb = await FrogDAO.new({from: accounts[3]});
		const uintkwY8fz1 = BigInt("1861")
		const addressH9pjDEA = accounts[2]
		const uintbSaTGN2 = BigInt("1445")
		const uintIEWV0vb = BigInt("687")
		const uintFmJbWu2 = BigInt("255")
		const uintce6Xa3K = BigInt("1235")
		const boolKvfBWaW = await FrogDAOM3LofEb.approve.call(addressH9pjDEA, uintkwY8fz1, {from: accounts[1]});
		const uintWBYjaq = await FrogDAOM3LofEb.totalSupply.call({from: accounts[1]});
		const uint6UfiyN = await FrogDAOM3LofEb.safeDiv.call(uintIEWV0vb, uintbSaTGN2, {from: accounts[3]});
		const uintagmZmuG = await FrogDAOM3LofEb.safeDiv.call(uintce6Xa3K, uintFmJbWu2, {from: accounts[2]});

		assert.equal(boolKvfBWaW, true)
		assert.equal(uint6UfiyN, BigInt("0"))
		assert.equal(uintWBYjaq, BigInt("1000000000000000000000000"))
		assert.equal(uintagmZmuG, BigInt("4"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOmj8uLem = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIbRbyx3 = BigInt("925")
		const uintsurXTgO = BigInt("1354")
		const uintvCGyoS = BigInt("602")
		const uintjaYlAHb = BigInt("477")
		const uintonuvga = await FrogDAOmj8uLem.totalSupply.call({from: accounts[0]});
		const uinttn2hbl5 = await FrogDAOmj8uLem.safeSub.call(uintsurXTgO, uintIbRbyx3, {from: accounts[5]});
		const uintpVDYUpP = await FrogDAOmj8uLem.safeDiv.call(uintjaYlAHb, uintvCGyoS, {from: accounts[0]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOf4XPG9t = await FrogDAO.new({from: accounts[0]});
		const uintLBsC08s = BigInt("1466")
		const uintmP4ul2f = BigInt("308")
		const addressPoLzMLu = accounts[0]
		const addressFu8oXjr = accounts[4]
		const uintiqjwIBR = BigInt("880")
		const addresss0X2xR4 = accounts[5]
		const addressct8Dzee = accounts[0]
		const addressjTggsrD = accounts[0]
		const uintws99gLq = BigInt("262")
		const uinthv4GBq = BigInt("417")
		const uint571azA = BigInt("272")
		const uintK1YlqL2 = BigInt("1084")
		const uintsXHXgW5 = await FrogDAOf4XPG9t.safeAdd.call(uintmP4ul2f, uintLBsC08s, {from: accounts[0]});
		const uinthGI9hQ3 = await FrogDAOf4XPG9t.allowance.call(addressFu8oXjr, addressPoLzMLu, {from: accounts[0]});
//		const boolVF8SUhb = await FrogDAOf4XPG9t.transferFrom.call(addressct8Dzee, addresss0X2xR4, uintiqjwIBR, {from: accounts[5]});
//		const uintnBoqaIG = await FrogDAOf4XPG9t.balanceOf.call(addressjTggsrD, {from: accounts[1]});
//		const uintZPJzqgi = await FrogDAOf4XPG9t.safeMul.call(uinthv4GBq, uintws99gLq, {from: accounts[1]});
//		const uintNWvUbpe = await FrogDAOf4XPG9t.safeSub.call(uintK1YlqL2, uint571azA, {from: accounts[4]});

		assert.equal(uinthGI9hQ3, BigInt("0"))
		assert.equal(uintsXHXgW5, BigInt("1774"))
		await expect(FrogDAOf4XPG9t.transferFrom.call(addressct8Dzee, addresss0X2xR4, uintiqjwIBR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})