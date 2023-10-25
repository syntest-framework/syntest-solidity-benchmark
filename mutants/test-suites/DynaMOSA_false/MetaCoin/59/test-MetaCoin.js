const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinmwU8Nd0 = await MetaCoin.new({from: accounts[3]});
		const uintxqC7rpl = BigInt("405")
		const addressym6eYZJ = accounts[3]
		const uintXgybuK0 = BigInt("217")
		const addressuw18MV1 = accounts[0]
		const uintUamsLab = BigInt("1601")
		const addressWA6gRLk = accounts[5]
		const uintxNMlbPv = BigInt("2034")
		const addressGyjEbTM = accounts[2]
		const boolAN62MY = await MetaCoinmwU8Nd0.sendCoin.call(addressym6eYZJ, uintxqC7rpl, {from: accounts[1]});
		const boolJW0ozI6 = await MetaCoinmwU8Nd0.sendCoin.call(addressuw18MV1, uintXgybuK0, {from: accounts[5]});
		const boolUaSeBi8 = await MetaCoinmwU8Nd0.sendCoin.call(addressWA6gRLk, uintUamsLab, {from: accounts[3]});
		const boold2HKkNY = await MetaCoinmwU8Nd0.sendCoin.call(addressGyjEbTM, uintxNMlbPv, {from: accounts[0]});

		assert.equal(boolAN62MY, false)
		assert.equal(boolJW0ozI6, false)
		assert.equal(boolUaSeBi8, true)
		assert.equal(boold2HKkNY, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinTOij4Qi = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmFjOzR2 = BigInt("1912")
		const addressJ50EIwk = accounts[5]
		const uintB9wuMlQ = BigInt("372")
		const addresspCQ18h = accounts[4]
		const uintEqiLMF = BigInt("1370")
		const addressMJucw2H = accounts[5]
		const uintBVsF9Kk = BigInt("1421")
		const addresseDszRsI = "0x0000000000000000000000000000000000000001"
		const boolPgUq7cQ = await MetaCoinTOij4Qi.sendCoin.call(addressJ50EIwk, uintmFjOzR2, {from: accounts[3]});
		const boolKNoywhK = await MetaCoinTOij4Qi.sendCoin.call(addresspCQ18h, uintB9wuMlQ, {from: accounts[1]});
		const boolWu3pT2W = await MetaCoinTOij4Qi.sendCoin.call(addressMJucw2H, uintEqiLMF, {from: accounts[4]});
		const boolkVCuQY3 = await MetaCoinTOij4Qi.sendCoin.call(addresseDszRsI, uintBVsF9Kk, {from: accounts[3]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinE7l6Rq7 = await MetaCoin.new({from: accounts[4]});
		const uintyGR6IHR = BigInt("279")
		const addresszAyrmIj = "0x0000000000000000000000000000000000000001"
		const uintTRh0oQR = BigInt("2041")
		const addressPDzlH6b = "0x00000000000000000000000000000000000000-1"
		const uintIxJHRT9 = BigInt("703")
		const addressLm1qMaj = accounts[5]
		const uintCDVJQJ = BigInt("1561")
		const addressDHFnI9n = accounts[1]
		const uintU4DVyB = BigInt("2046")
		const addressNQyClHS = accounts[1]
		const uintqqVOS9v = BigInt("1565")
		const addressUffSXzV = accounts[1]
		const uintx37vsjb = BigInt("1716")
		const addressJ6hz0se = accounts[2]
		const uinty05kXR = BigInt("267")
		const addressdspGCrx = accounts[2]
		const uint7wkIxh = BigInt("1953")
		const addressHEQzxi = accounts[3]
		const uintvmi8ML4 = BigInt("1595")
		const addressnB1PeIG = accounts[4]
		const uintUURZjoK = BigInt("927")
		const addressrnWF1BW = accounts[0]
		const uintuyQ2rUE = BigInt("798")
		const addressEOYGh46 = accounts[5]
		const uintWJpN9Br = BigInt("1530")
		const addressqsOQUAY = accounts[1]
		const boolue3F5hQ = await MetaCoinE7l6Rq7.sendCoin.call(addresszAyrmIj, uintyGR6IHR, {from: accounts[2]});
//		const boolXCb3nz = await MetaCoinE7l6Rq7.sendCoin.call(addressPDzlH6b, uintTRh0oQR, {from: accounts[5]});
//		const boolFhGJa54 = await MetaCoinE7l6Rq7.sendCoin.call(addressLm1qMaj, uintIxJHRT9, {from: accounts[1]});
//		const booleqJjwGU = await MetaCoinE7l6Rq7.sendCoin.call(addressDHFnI9n, uintCDVJQJ, {from: accounts[2]});
//		const boolHRfbTLv = await MetaCoinE7l6Rq7.sendCoin.call(addressNQyClHS, uintU4DVyB, {from: accounts[4]});
//		const boolNvv0pHl = await MetaCoinE7l6Rq7.sendCoin.call(addressUffSXzV, uintqqVOS9v, {from: accounts[5]});
//		const boolRqgc0fB = await MetaCoinE7l6Rq7.sendCoin.call(addressJ6hz0se, uintx37vsjb, {from: accounts[4]});
//		const boolrBOH9A = await MetaCoinE7l6Rq7.sendCoin.call(addressdspGCrx, uinty05kXR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfLWNj1y = await MetaCoinE7l6Rq7.sendCoin.call(addressHEQzxi, uint7wkIxh, {from: accounts[4]});
//		const boolfn14TXJ = await MetaCoinE7l6Rq7.sendCoin.call(addressnB1PeIG, uintvmi8ML4, {from: accounts[4]});
//		const boolrybCNYD = await MetaCoinE7l6Rq7.sendCoin.call(addressrnWF1BW, uintUURZjoK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolxpu9DXD = await MetaCoinE7l6Rq7.sendCoin.call(addressEOYGh46, uintuyQ2rUE, {from: accounts[5]});
//		const boolmRB5SWk = await MetaCoinE7l6Rq7.sendCoin.call(addressqsOQUAY, uintWJpN9Br, {from: accounts[3]});

		assert.equal(boolue3F5hQ, false)
		await expect(MetaCoinE7l6Rq7.sendCoin.call(addressPDzlH6b, uintTRh0oQR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MetaCoin', async () => {
		const MetaCoinbjxPk5L = await MetaCoin.new({from: accounts[4]});
		const uintUvvmxrQ = BigInt("832")
		const addresseShz1k = accounts[5]
		const uintc8PHg34 = BigInt("708")
		const addressfTIf4ri = accounts[1]
		const uintVd3pzom = BigInt("411")
		const addresszXSjyB0 = accounts[0]
		const uintAFAIrFe = BigInt("4")
		const addresswRsQDsh = accounts[1]
		const boolefpgwlf = await MetaCoinbjxPk5L.sendCoin.call(addresseShz1k, uintUvvmxrQ, {from: accounts[0]});
		const boolMvGc7Hv = await MetaCoinbjxPk5L.sendCoin.call(addressfTIf4ri, uintc8PHg34, {from: accounts[3]});
		const boolUMIBFdr = await MetaCoinbjxPk5L.sendCoin.call(addresszXSjyB0, uintVd3pzom, {from: accounts[1]});
		const booldkVA04 = await MetaCoinbjxPk5L.sendCoin.call(addresswRsQDsh, uintAFAIrFe, {from: accounts[4]});

		assert.equal(boolMvGc7Hv, false)
		assert.equal(boolUMIBFdr, false)
		assert.equal(booldkVA04, true)
		assert.equal(boolefpgwlf, false)
	});
})