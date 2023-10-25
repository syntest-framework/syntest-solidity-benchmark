const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringbzTxBct = "AY9Njl9oWMESgLO3qNIgVmPWRm2PnzTWV6k8hDS2Rhk3vRYsYodcaaCPV0Rx832L3oAWevVwgmam2Ttlaymvk0Uw1sp2RurMa"
		const stringSXCDQNF = "hnGwI4rYdEu1bFxl8RULfd58XPIoC1cZXr94TQ60hNJ3KeYoh2WxItL4MPV7hkFBEEQcyj0AVIZUUXCTMoFzVmSQ5fo"
		const uintCls0Yzp = BigInt("169")
		const OnXFinanceANrIa6Q = await OnXFinance.new(stringbzTxBct, stringSXCDQNF, uintCls0Yzp, {from: "0x0000000000000000000000000000000000000001"});
		const uintowI96vu = BigInt("1904")
		const addressdtxTDm7 = accounts[0]
		const uintNTaVtTL = BigInt("1228")
		const addressALaaQZ9 = accounts[2]
		const uintJYG4hMb = BigInt("2027")
		const addressXiPqcz9 = accounts[3]
		const uintRwLruQW = BigInt("269")
		const addressjuXKBLn = accounts[2]
		const addresslp1ae7W = accounts[2]
		const addressWKETPtH = accounts[1]
		const boolPzA8tfy = await OnXFinanceANrIa6Q.decreaseAllowance.call(addressdtxTDm7, uintowI96vu, {from: accounts[0]});
		const bool4UvYvR = await OnXFinanceANrIa6Q.transfer.call(addressALaaQZ9, uintNTaVtTL, {from: accounts[3]});
		const boolVaGOVp3 = await OnXFinanceANrIa6Q.increaseAllowance.call(addressXiPqcz9, uintJYG4hMb, {from: accounts[0]});
		const booliiDEc3 = await OnXFinanceANrIa6Q.approve.call(addressjuXKBLn, uintRwLruQW, {from: accounts[5]});
		const uintVHXvOwY = await OnXFinanceANrIa6Q.allowance.call(addressWKETPtH, addresslp1ae7W, {from: accounts[0]});
		const stringaEu8PU = await OnXFinanceANrIa6Q.name.call({from: accounts[1]});
	});

	it('test for OnXFinance', async () => {
		const string13af3h = "iVXLTQVWh6YQPCcqtdpk9StyEFp4qlrpk6WeQjXlfkStpOzQ2ouao8HbQwPctxmBsRQvXUPT2"
		const stringKE0mGS8 = "kJcbrIJTtW21qN"
		const uintZF3mTs9 = BigInt("135")
		const OnXFinancesFrweJi = await OnXFinance.new(string13af3h, stringKE0mGS8, uintZF3mTs9, {from: accounts[1]});
		const uintZVKq0zY = BigInt("485")
		const addressBkYA1I7 = accounts[3]
		const addresseiZ7OOI = accounts[1]
		const uintJicplyJ = BigInt("545")
		const address3aSWTn = accounts[2]
		const addressm5oO5v2 = "0x0000000000000000000000000000000000000001"
		const addressw1jUlw = accounts[4]
		const uinttwVU9Sm = BigInt("1589")
		const addressCXU7NHD = accounts[4]
//		const boollRL0PMK = await OnXFinancesFrweJi.transferFrom.call(addresseiZ7OOI, addressBkYA1I7, uintZVKq0zY, {from: accounts[3]});
//		const stringzAv6seS = await OnXFinancesFrweJi.name.call({from: accounts[2]});
//		const boolb646fnv = await OnXFinancesFrweJi.transferFrom.call(addressm5oO5v2, address3aSWTn, uintJicplyJ, {from: accounts[3]});
//		const boolMIAZIRa = await OnXFinancesFrweJi.transferownership.call(addressw1jUlw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWq9Sppb = await OnXFinancesFrweJi.approve.call(addressCXU7NHD, uinttwVU9Sm, {from: accounts[0]});

		await expect(OnXFinancesFrweJi.transferFrom.call(addresseiZ7OOI, addressBkYA1I7, uintZVKq0zY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const string0xTCux = "vl64kg12zuw2JpBQz3GvjUl5h1z9bmE716qen2yNqB2nwxip2KU96ob8xOIlWEbvKiUKgLFU8W7HqlOsGbKdkNvZfmnBF9nNG0z"
		const stringBeCuebg = "jFvIRQlNkAibRa0ck5kZpCscVPyrBN"
		const uintsgz0Ccn = BigInt("115")
		const OnXFinanceofUpKAy = await OnXFinance.new(string0xTCux, stringBeCuebg, uintsgz0Ccn, {from: accounts[0]});
		const uintqjDYVnl = BigInt("1841")
		const addressK2D9vFX = accounts[0]
		const uintx5NbO2r = BigInt("1596")
		const addressVLeyYgX = accounts[0]
//		const booluz0TRWs = await OnXFinanceofUpKAy.transfer.call(addressK2D9vFX, uintqjDYVnl, {from: accounts[1]});
//		const boolIWvPKng = await OnXFinanceofUpKAy.transfer.call(addressVLeyYgX, uintx5NbO2r, {from: "0x0000000000000000000000000000000000000001"});
//		const uintSvly5pp = await OnXFinanceofUpKAy.totalSupply.call({from: accounts[4]});

		await expect(OnXFinanceofUpKAy.transfer.call(addressK2D9vFX, uintqjDYVnl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringYlxERES = "J8bRdH4QU3TGc5RXzimc25ssoeSihlzC3xb0hbdT"
		const stringCcWau8 = "hT4o84t8rOvW3ajTMaIdmpmaG7eLaFBlgmVRO4v5c83M5sP5iXo7agGB1sp6OfO6ygy"
		const uintE2y7hi = BigInt("98")
		const OnXFinanceLKEOC0N = await OnXFinance.new(stringYlxERES, stringCcWau8, uintE2y7hi, {from: accounts[2]});
		const uintikgdZo9 = BigInt("1576")
		const addressheLETDL = accounts[2]
		const uintrvqNvSu = BigInt("70")
		const addressBi06e9V = accounts[2]
		const addressVUhO8iP = accounts[1]
		const stringeHx14O4 = await OnXFinanceLKEOC0N.symbol.call({from: accounts[4]});
//		const boolkYaFcsY = await OnXFinanceLKEOC0N.increaseAllowance.call(addressheLETDL, uintikgdZo9, {from: accounts[4]});
//		const boolFTdkxhd = await OnXFinanceLKEOC0N.transfer.call(addressBi06e9V, uintrvqNvSu, {from: accounts[0]});
//		const uintASf8rh = await OnXFinanceLKEOC0N.balanceOf.call(addressVUhO8iP, {from: accounts[2]});
//		const stringB0x8ro5 = await OnXFinanceLKEOC0N.symbol.call({from: accounts[2]});

		assert.equal(stringeHx14O4, "hT4o84t8rOvW3ajTMaIdmpmaG7eLaFBlgmVRO4v5c83M5sP5iXo7agGB1sp6OfO6ygy")
		await expect(OnXFinanceLKEOC0N.increaseAllowance.call(addressheLETDL, uintikgdZo9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringnfgRUvX = "4ipNNqGJZ7OnG86nvO6f6J436agqJoePfSTr7bn4CI43nIsTfMQ"
		const stringnlEcQUP = "v6L6otJMzinnBVzOwGNl2DVE"
		const uintc3MkgyO = BigInt("52")
		const OnXFinance4VVNea = await OnXFinance.new(stringnfgRUvX, stringnlEcQUP, uintc3MkgyO, {from: accounts[0]});
		const addresslqGGSma = accounts[2]
		const uintLw3Tyd8 = BigInt("1236")
		const addressWFTN1dW = accounts[4]
		const addressfe0Mt7Q = accounts[4]
//		const boolc5rzmz = await OnXFinance4VVNea.transferownership.call(addresslqGGSma, {from: accounts[1]});
//		const boolOKISOPY = await OnXFinance4VVNea.transferFrom.call(addressfe0Mt7Q, addressWFTN1dW, uintLw3Tyd8, {from: accounts[2]});
//		const stringAEqD0Mm = await OnXFinance4VVNea.name.call({from: accounts[5]});

		await expect(OnXFinance4VVNea.transferownership.call(addresslqGGSma, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringeFlnhDx = "rTbeaciNoCrVOM5srn14k3zcaINM9r4wdnikb2"
		const stringPrb7Jmi = "IrMM3bTScr2nCearWPekxvhqce7sSgKY4gI2sY19XhCOe1XM9PBrO9Hex2cm8DHrT5oRLXIE1J861BR8X8Qonj8Mz"
		const uintejCW9z = BigInt("2041")
		const OnXFinanceCfTWK7K = await OnXFinance.new(stringeFlnhDx, stringPrb7Jmi, uintejCW9z, {from: accounts[3]});
		const uinthwzcaXo = BigInt("1052")
		const addressu4XbJsw = accounts[5]
		const uintU9tOzyl = BigInt("391")
		const addressxCfPVjM = accounts[1]
		const uintd6CwpuH = await OnXFinanceCfTWK7K.totalSupply.call({from: accounts[2]});
//		const boolWEUun8H = await OnXFinanceCfTWK7K.approveAndCall.call(addressu4XbJsw, uinthwzcaXo, {from: accounts[1]});
//		const boolM6tHRZ1 = await OnXFinanceCfTWK7K.transfer.call(addressxCfPVjM, uintU9tOzyl, {from: accounts[2]});

		assert.equal(uintd6CwpuH, BigInt("2041000000000000000000"))
		await expect(OnXFinanceCfTWK7K.approveAndCall.call(addressu4XbJsw, uinthwzcaXo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXnbRg4i = "NQbICQ13aXWtFflti9zDxoHASooNyktqhGlPUufXoCyUMRtOHgKWlGXC3TXaPR"
		const stringeBvblPj = "vj36D8TU9N1CtnUFndVoVf6Dn1v4Z"
		const uintIuDG2k2 = BigInt("26")
		const OnXFinancezDGenZs = await OnXFinance.new(stringXnbRg4i, stringeBvblPj, uintIuDG2k2, {from: accounts[0]});
		const uintXvJRlLE = BigInt("1453")
		const addressKIP3Ky = accounts[3]
		const uinth9xVMlI = BigInt("1270")
		const addressRbwrgRh = accounts[2]
		const uintSdXPbfp = BigInt("1722")
		const addresspi2FuC6 = accounts[2]
		const booleFRBiDJ = await OnXFinancezDGenZs.approve.call(addressKIP3Ky, uintXvJRlLE, {from: accounts[2]});
//		const boolFpU6mtI = await OnXFinancezDGenZs.transfer.call(addressRbwrgRh, uinth9xVMlI, {from: accounts[4]});
//		const boolJl9J7R6 = await OnXFinancezDGenZs.transfer.call(addresspi2FuC6, uintSdXPbfp, {from: accounts[4]});

		assert.equal(booleFRBiDJ, true)
		await expect(OnXFinancezDGenZs.transfer.call(addressRbwrgRh, uinth9xVMlI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringeFlnhDx = "rTbeaciNoCrVOM5srn14k3zcaINM9r4wdnikb2"
		const stringPrb7Jmi = "IrMM3bTScr2nCearWPekxvhqce7sSgKY4gI2sY19XhCOe1XM9PBrO9Hex2cm8DHrT5oRLXIE1J861BR8X8Qonj8Mz"
		const uintwvvVYgH = BigInt("2041")
		const OnXFinanceCfTWK7K = await OnXFinance.new(stringeFlnhDx, stringPrb7Jmi, uintwvvVYgH, {from: accounts[3]});
		const uintVag3Ou2 = BigInt("26")
		const addressXk72aZE = accounts[0]
		const address14tZlM = accounts[3]
		const uintOvH8M1E = BigInt("974")
		const addressMs992LK = accounts[2]
		const uintwwImu6u = BigInt("0")
		const addresswQ3qd4W = accounts[2]
		const addressUoFmiyG = accounts[3]
		const addressTz2Wls = accounts[2]
		const uintCaqtG9M = BigInt("391")
		const addressaYztpaN = accounts[1]
		const uintd6CwpuH = await OnXFinanceCfTWK7K.totalSupply.call({from: accounts[2]});
		const stringk1aQj1 = await OnXFinanceCfTWK7K.name.call({from: accounts[4]});
		const boolZtLSIJ = await OnXFinanceCfTWK7K.transferFrom.call(address14tZlM, addressXk72aZE, uintVag3Ou2, {from: accounts[3]});
		const boolinh1jTO = await OnXFinanceCfTWK7K.approve.call(addressMs992LK, uintOvH8M1E, {from: accounts[3]});
		const stringUDfEpbw = await OnXFinanceCfTWK7K.name.call({from: accounts[5]});
		const boolw8LA4mV = await OnXFinanceCfTWK7K.transfer.call(addresswQ3qd4W, uintwwImu6u, {from: accounts[2]});
		const uintMn7ynY = await OnXFinanceCfTWK7K.allowance.call(addressTz2Wls, addressUoFmiyG, {from: "0x0000000000000000000000000000000000000001"});
		const stringT8aj0gu = await OnXFinanceCfTWK7K.symbol.call({from: accounts[2]});
		const uint8ixhNRlb = await OnXFinanceCfTWK7K.decimals.call({from: accounts[1]});
//		const boolM6tHRZ1 = await OnXFinanceCfTWK7K.transfer.call(addressaYztpaN, uintCaqtG9M, {from: accounts[2]});

		assert.equal(boolZtLSIJ, true)
		assert.equal(boolinh1jTO, true)
		assert.equal(boolw8LA4mV, true)
		assert.equal(stringT8aj0gu, "IrMM3bTScr2nCearWPekxvhqce7sSgKY4gI2sY19XhCOe1XM9PBrO9Hex2cm8DHrT5oRLXIE1J861BR8X8Qonj8Mz")
		assert.equal(stringUDfEpbw, "rTbeaciNoCrVOM5srn14k3zcaINM9r4wdnikb2")
		assert.equal(stringk1aQj1, "rTbeaciNoCrVOM5srn14k3zcaINM9r4wdnikb2")
		assert.equal(uint8ixhNRlb, BigInt("18"))
		assert.equal(uintMn7ynY, BigInt("0"))
		assert.equal(uintd6CwpuH, BigInt("2041000000000000000000"))
		await expect(OnXFinanceCfTWK7K.transfer.call(addressaYztpaN, uintCaqtG9M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringeFlnhDx = "rTbeaciNoCrVOM5srn14k3zcaINM9r4wdnikb2"
		const stringPrb7Jmi = "IrMM3bTScr2nCearWPekxvhqce7sSgKY4gI2sY19XhCOe1XM9PBrO9Hex2cm8DHrT5oRLXIE1J861BR8X8Qonj8Mz"
		const uintTOuB8C = BigInt("2041")
		const OnXFinanceCfTWK7K = await OnXFinance.new(stringeFlnhDx, stringPrb7Jmi, uintTOuB8C, {from: accounts[3]});
		const uintAoqhKRB = BigInt("1751")
		const addressphtiN52 = accounts[0]
		const uintUkIPeXX = BigInt("26")
		const addressy1U7IzU = accounts[0]
		const addressfeF0ScX = accounts[3]
		const uintSrS2s7 = BigInt("974")
		const addressE4H5fdX = accounts[2]
		const uintfEhtKLT = BigInt("168")
		const addressw5ZosXu = accounts[2]
		const uintH5tLZ1P = BigInt("17")
		const addressPdf56Th = accounts[2]
		const uintG64RriX = BigInt("1391")
		const addressBjHwu6 = accounts[1]
		const addressJNwizu = accounts[0]
		const uintnbOWd7U = BigInt("391")
		const addressR1RvLeC = accounts[1]
		const boolhJeXhd6 = await OnXFinanceCfTWK7K.approveAndCall.call(addressphtiN52, uintAoqhKRB, {from: accounts[3]});
		const uintd6CwpuH = await OnXFinanceCfTWK7K.totalSupply.call({from: accounts[2]});
		const stringk1aQj1 = await OnXFinanceCfTWK7K.name.call({from: accounts[4]});
		const boolZtLSIJ = await OnXFinanceCfTWK7K.transferFrom.call(addressfeF0ScX, addressy1U7IzU, uintUkIPeXX, {from: accounts[3]});
		const boolinh1jTO = await OnXFinanceCfTWK7K.approve.call(addressE4H5fdX, uintSrS2s7, {from: accounts[3]});
		const stringUDfEpbw = await OnXFinanceCfTWK7K.name.call({from: accounts[5]});
		const boolewrMIO8 = await OnXFinanceCfTWK7K.transfer.call(addressw5ZosXu, uintfEhtKLT, {from: accounts[3]});
//		const boolw8LA4mV = await OnXFinanceCfTWK7K.transfer.call(addressPdf56Th, uintH5tLZ1P, {from: accounts[2]});
//		const stringT8aj0gu = await OnXFinanceCfTWK7K.symbol.call({from: accounts[2]});
//		const boolBqQkae5 = await OnXFinanceCfTWK7K.transferFrom.call(addressJNwizu, addressBjHwu6, uintG64RriX, {from: accounts[4]});
//		const boolM6tHRZ1 = await OnXFinanceCfTWK7K.transfer.call(addressR1RvLeC, uintnbOWd7U, {from: accounts[2]});

		assert.equal(boolZtLSIJ, true)
		assert.equal(boolewrMIO8, true)
		assert.equal(boolhJeXhd6, true)
		assert.equal(boolinh1jTO, true)
		assert.equal(stringUDfEpbw, "rTbeaciNoCrVOM5srn14k3zcaINM9r4wdnikb2")
		assert.equal(stringk1aQj1, "rTbeaciNoCrVOM5srn14k3zcaINM9r4wdnikb2")
		assert.equal(uintd6CwpuH, BigInt("2041000000000000000000"))
		await expect(OnXFinanceCfTWK7K.transfer.call(addressPdf56Th, uintH5tLZ1P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})