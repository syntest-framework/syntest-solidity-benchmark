const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEmD0qkqO = await REXUNIFINANCE.new({from: accounts[3]});
		const addressPyFVHzB = accounts[0]
		const uintP5EjFKz = BigInt("1290")
		const addressE6SjKGv = accounts[4]
		const addresspAV3N6E = accounts[1]
		const uint256bn02h4m = await REXUNIFINANCEmD0qkqO.transferableTokens.call(addressPyFVHzB, {from: accounts[0]});
		const boolxaeMm7s = await REXUNIFINANCEmD0qkqO.decreaseApproval.call(addressE6SjKGv, uintP5EjFKz, {from: accounts[1]});
		const uint256bYcHAp = await REXUNIFINANCEmD0qkqO.balanceOf.call(addresspAV3N6E, {from: accounts[0]});

		assert.equal(boolxaeMm7s, true)
		assert.equal(uint256bYcHAp, BigInt("0"))
		assert.equal(uint256bn02h4m, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEEVLeXsc = await REXUNIFINANCE.new({from: accounts[2]});
		const addressabvasXk = accounts[5]
		const addressT7n2wi = accounts[0]
		const uintnfl0Rrw = BigInt("1393")
		const addressDMjscFv = accounts[3]
		const addressYaT6ebr = accounts[5]
		const uintLLH4jfJ = BigInt("2025")
		const addresszXXUTjy = accounts[2]
		const uint256gJpPejf = await REXUNIFINANCEEVLeXsc.allowance.call(addressT7n2wi, addressabvasXk, {from: accounts[4]});
//		const boolF4D6SeO = await REXUNIFINANCEEVLeXsc.transferFrom.call(addressYaT6ebr, addressDMjscFv, uintnfl0Rrw, {from: accounts[5]});
//		const boolV5EuCvj = await REXUNIFINANCEEVLeXsc.transfer.call(addresszXXUTjy, uintLLH4jfJ, {from: accounts[2]});

		assert.equal(uint256gJpPejf, BigInt("0"))
		await expect(REXUNIFINANCEEVLeXsc.transferFrom.call(addressYaT6ebr, addressDMjscFv, uintnfl0Rrw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCELWN1ZAX = await REXUNIFINANCE.new({from: accounts[0]});
		const uintABVTIJk = BigInt("1176")
		const addresslwAkrLp = accounts[1]
		const uintNRy5uFO = BigInt("1109")
		const addressnEsShB = accounts[1]
		const uinttFfL45p = BigInt("1006")
		const addressV4T2qYX = accounts[1]
		const addressN2HNddv = accounts[1]
		const addressd02LBf5 = accounts[4]
		const boolg5WAcZ = await REXUNIFINANCELWN1ZAX.decreaseApproval.call(addresslwAkrLp, uintABVTIJk, {from: accounts[3]});
		const boolhumG2qH = await REXUNIFINANCELWN1ZAX.decreaseApproval.call(addressnEsShB, uintNRy5uFO, {from: accounts[3]});
		const boolcw5EQW = await REXUNIFINANCELWN1ZAX.increaseApproval.call(addressV4T2qYX, uinttFfL45p, {from: accounts[5]});
		const uint256ohhbypr = await REXUNIFINANCELWN1ZAX.allowance.call(addressd02LBf5, addressN2HNddv, {from: accounts[2]});

		assert.equal(boolcw5EQW, true)
		assert.equal(boolg5WAcZ, true)
		assert.equal(boolhumG2qH, true)
		assert.equal(uint256ohhbypr, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEJS629Qm = await REXUNIFINANCE.new({from: accounts[1]});
		const uintBjsLovZ = BigInt("1662")
		const addressWgUvSNW = accounts[2]
		const uintSMvfy2r = BigInt("966")
		const addressQSqPAUM = accounts[1]
		const uintjrcjmf = BigInt("503")
		const addressANYmcEu = accounts[1]
//		const boolbKJVQyM = await REXUNIFINANCEJS629Qm.transfer.call(addressWgUvSNW, uintBjsLovZ, {from: accounts[4]});
//		const boolJgKbDrv = await REXUNIFINANCEJS629Qm.increaseApproval.call(addressQSqPAUM, uintSMvfy2r, {from: accounts[2]});
//		const booldJVT1O8 = await REXUNIFINANCEJS629Qm.increaseApproval.call(addressANYmcEu, uintjrcjmf, {from: accounts[4]});

		await expect(REXUNIFINANCEJS629Qm.transfer.call(addressWgUvSNW, uintBjsLovZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEDZKcjMm = await REXUNIFINANCE.new({from: accounts[2]});
		const uintrI73P76 = BigInt("2024")
		const addressGXF6QEN = accounts[2]
		const addressEXXHE6d = accounts[1]
		const uintTgYl4w2 = BigInt("675")
		const addressCow17wL = accounts[4]
		const uintqLszzd1 = BigInt("672")
		const addressDQyz4H3 = accounts[2]
		const addressApx1F9M = accounts[0]
		const boolHGnlkYw = await REXUNIFINANCEDZKcjMm.approve.call(addressGXF6QEN, uintrI73P76, {from: accounts[4]});
		const addressIrYtbKa = await REXUNIFINANCEDZKcjMm.transferOwnership.call(addressEXXHE6d, {from: accounts[2]});
//		const boolM3efv1m = await REXUNIFINANCEDZKcjMm.transfer.call(addressCow17wL, uintTgYl4w2, {from: accounts[4]});
//		const boolDnvcMgq = await REXUNIFINANCEDZKcjMm.decreaseApproval.call(addressDQyz4H3, uintqLszzd1, {from: accounts[1]});
//		const uint256jYxhB6G = await REXUNIFINANCEDZKcjMm.transferableTokens.call(addressApx1F9M, {from: accounts[0]});

		assert.equal(boolHGnlkYw, true)
		await expect(REXUNIFINANCEDZKcjMm.transfer.call(addressCow17wL, uintTgYl4w2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCE8PBraY = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJFmIC9H = accounts[3]
		const addressUJTzri = accounts[0]
		const addresscGBJlRd = accounts[4]
		const addresszaofNAs = "0x0000000000000000000000000000000000000001"
		const uint256wPKRfvS = await REXUNIFINANCE8PBraY.allowance.call(addressUJTzri, addressJFmIC9H, {from: accounts[4]});
		const uint256DzHDHm = await REXUNIFINANCE8PBraY.allowance.call(addresszaofNAs, addresscGBJlRd, {from: accounts[0]});
	});
})