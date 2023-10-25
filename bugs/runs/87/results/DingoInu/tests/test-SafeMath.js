const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractqXdS5Ge = await SafeMath.new({from: accounts[0]});
		const btV7yeTz = BigInt("885")
		const aBDkw0FT = BigInt("1963")
		const bruXPQR = BigInt("674")
		const aELXF5t = BigInt("1726")
		const b9uiuRN = BigInt("1052")
		const aTIpNt7e = BigInt("648")
		const cJ3UgMD6 = await contractqXdS5Ge.safeDiv.call(aBDkw0FT, btV7yeTz, {from: accounts[5]});
		const ce79pyM9 = await contractqXdS5Ge.safeSub.call(aELXF5t, bruXPQR, {from: accounts[3]});
		const cOMZlDVg = await contractqXdS5Ge.safeSub.call(aTIpNt7e, b9uiuRN, {from: accounts[3]});

		assert.equal(cJ3UgMD6, 2)
		assert.equal(ce79pyM9, 1052)
		await expect(contractqXdS5Ge.safeSub.call(aTIpNt7e, b9uiuRN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractktdTg7d = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bLAmZsY2 = BigInt("2001")
		const akG6Ix69 = BigInt("1448")
		const bMmVwplQ = BigInt("1219")
		const aGFu2Ey = BigInt("380")
		const bDFPa8cX = BigInt("1335")
		const aJ1tshTe = BigInt("861")
		const biXiiiOq = BigInt("1428")
		const ah517XCN = BigInt("1773")
		const cRgkJucH = await contractktdTg7d.safeMul.call(akG6Ix69, bLAmZsY2, {from: "0x0000000000000000000000000000000000000001"});
		const c6BYRDr = await contractktdTg7d.safeAdd.call(aGFu2Ey, bMmVwplQ, {from: accounts[3]});
		const cTs6gyIc = await contractktdTg7d.safeMul.call(aJ1tshTe, bDFPa8cX, {from: accounts[0]});
		const cminxzSF = await contractktdTg7d.safeSub.call(ah517XCN, biXiiiOq, {from: "0x0000000000000000000000000000000000000001"});
	});
})