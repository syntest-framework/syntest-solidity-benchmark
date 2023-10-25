const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100d32AN1U = await Token50X100.new({from: accounts[1]});
		const boolPZLTI5L = false
		const addressjS95Ab6 = accounts[2]
		const uintwONhY9q = BigInt("132")
		const addressyQJ7vzJ = accounts[4]
		const addressNY5iOTG = accounts[0]
		await Token50X100d32AN1U.setWhiteListReceivers.call(addressjS95Ab6, boolPZLTI5L, {from: "0x0000000000000000000000000000000000000001"});
		const boolWVfs9v9 = await Token50X100d32AN1U.transferFrom.call(addressNY5iOTG, addressyQJ7vzJ, uintwONhY9q, {from: accounts[2]});

		await expect(Token50X100d32AN1U.setWhiteListReceivers.call(addressjS95Ab6, boolPZLTI5L, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100nc2WUao = await Token50X100.new({from: accounts[4]});
		const addressZUSkrqT = accounts[1]
		const boolKX6Hrsn = true
		const address7D2BoJ = accounts[1]
		const uintvQo5iB = BigInt("154")
		const addressZtjmVaO = accounts[5]
		const addressKqQhgs = "0x0000000000000000000000000000000000000001"
		const addresseyVrHWF = accounts[0]
		const addressA8djvdq = await Token50X100nc2WUao.setOriginalContract.call(addressZUSkrqT, {from: accounts[3]});
		await Token50X100nc2WUao.lock.call({from: accounts[5]});
		await Token50X100nc2WUao.setWhiteListReceivers.call(address7D2BoJ, boolKX6Hrsn, {from: accounts[4]});
		const boolkD2E6Ee = await Token50X100nc2WUao.decreaseApproval.call(addressZtjmVaO, uintvQo5iB, {from: accounts[4]});
		await Token50X100nc2WUao.setLinkingAddresses.call(addresseyVrHWF, addressKqQhgs, {from: accounts[3]});

		await expect(Token50X100nc2WUao.setOriginalContract.call(addressZUSkrqT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100VH1XB7C = await Token50X100.new({from: accounts[2]});
		const addresslbcp2Hb = accounts[0]
		const uintl0KHdHV = BigInt("226")
		const stringTVZcjTi = "jDVWMv1EucUXtbJBdSOzWEmOdcfY0AdTCw3rXcKykjrsiZdpZn"
		const stringMANX3iR = "krCnfp3jBxYY6vjJzAVfICxlcnufq1EoXOEtNVGTy37gPt5h"
		const uintuUkLNU = BigInt("1863")
		const uintQv9MOH = BigInt("1774")
		const uintpA2Regt = BigInt("223")
		const addressxjvWyJS = accounts[0]
		const addressV1mmfxu = await Token50X100VH1XB7C.transferOwnership.call(addresslbcp2Hb, {from: accounts[2]});
		const boolXaLR0lA = await Token50X100VH1XB7C.setSymbolNameDecimals.call(stringMANX3iR, stringTVZcjTi, uintl0KHdHV, {from: accounts[1]});
		const boolEh5b7x8 = await Token50X100VH1XB7C.safeLock.call(uintQv9MOH, uintuUkLNU, {from: accounts[5]});
		const boolSo1g3YU = await Token50X100VH1XB7C.increaseApproval.call(addressxjvWyJS, uintpA2Regt, {from: accounts[3]});

		await expect(Token50X100VH1XB7C.setSymbolNameDecimals.call(stringMANX3iR, stringTVZcjTi, uintl0KHdHV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X1008Oe3eK = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKsDazro = BigInt("54")
		const stringA7V50NQ = "x"
		const stringTNaBy3E = "C0VGOG9TCdV1IiggyYfBkbJ9EUms813VULjdzHFp5n"
		const uintioVTGa = BigInt("1928")
		const addressKTEzmL = accounts[0]
		const address2PAKMa = accounts[0]
		const uint256UKcWmT = await Token50X1008Oe3eK.totalSupply.call({from: accounts[2]});
		await Token50X1008Oe3eK.setSymbolNameDecimals.call(stringTNaBy3E, stringA7V50NQ, uintKsDazro, {from: accounts[5]});
		const boolmYJT3YE = await Token50X1008Oe3eK.transferFrom.call(address2PAKMa, addressKTEzmL, uintioVTGa, {from: accounts[1]});
	});

	it('test for Token50X100', async () => {
		const Token50X100EVrOfVp = await Token50X100.new({from: accounts[5]});
		const addressiLZBoeL = accounts[5]
		const addressWlJiVP = "0x0000000000000000000000000000000000000001"
		const uintn4AXgpn = BigInt("691")
		const addressX4NT6Vn = accounts[5]
		const addressL5IQaxE = accounts[0]
		const uintHwfvufR = BigInt("1467")
		const uintNyKa1St = BigInt("1587")
		const uint256i6yZUo = await Token50X100EVrOfVp.allowance.call(addressWlJiVP, addressiLZBoeL, {from: "0x0000000000000000000000000000000000000001"});
		const boolKQNr5p6 = await Token50X100EVrOfVp.transferFrom.call(addressL5IQaxE, addressX4NT6Vn, uintn4AXgpn, {from: accounts[3]});
		const boolpCzSJ5w = await Token50X100EVrOfVp.safeLock.call(uintNyKa1St, uintHwfvufR, {from: accounts[4]});

		assert.equal(uint256i6yZUo, BigInt("0"))
		await expect(Token50X100EVrOfVp.transferFrom.call(addressL5IQaxE, addressX4NT6Vn, uintn4AXgpn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100nc2WUao = await Token50X100.new({from: accounts[4]});
		const uintRpzR8vM = BigInt("1153")
		const addressHVzxpyk = "0x0000000000000000000000000000000000000001"
		const addressUuyQcX6 = accounts[1]
		const boolKX6Hrsn = true
		const addressrgz9DlL = accounts[1]
		const uintnrl3O2z = BigInt("154")
		const addresslhQf8Hk = accounts[6]
		const addressPqdj52I = "0x0000000000000000000000000000000000000001"
		const addresse6r5tP6 = accounts[0]
		const boolLkJbKy7 = true
		const addressYJjaOCv = accounts[4]
		const boolYjKTnPP = await Token50X100nc2WUao.transfer.call(addressHVzxpyk, uintRpzR8vM, {from: accounts[3]});
		const addressA8djvdq = await Token50X100nc2WUao.setOriginalContract.call(addressUuyQcX6, {from: accounts[3]});
		await Token50X100nc2WUao.lock.call({from: accounts[5]});
		await Token50X100nc2WUao.setWhiteListReceivers.call(addressrgz9DlL, boolKX6Hrsn, {from: accounts[4]});
		const boolkD2E6Ee = await Token50X100nc2WUao.decreaseApproval.call(addresslhQf8Hk, uintnrl3O2z, {from: accounts[4]});
		await Token50X100nc2WUao.setLinkingAddresses.call(addresse6r5tP6, addressPqdj52I, {from: accounts[3]});
		await Token50X100nc2WUao.setWhiteListReceivers.call(addressYJjaOCv, boolLkJbKy7, {from: accounts[1]});

		await expect(Token50X100nc2WUao.transfer.call(addressHVzxpyk, uintRpzR8vM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100EVrOfVp = await Token50X100.new({from: accounts[5]});
		const addressYzAs7jT = accounts[5]
		const addresslineBMa = "0x0000000000000000000000000000000000000001"
		const uintnSj0h5S = BigInt("737")
		const uintjcdSWEM = BigInt("691")
		const addressPS5FEBe = accounts[5]
		const addressB6lDGLE = accounts[0]
		const uintPX9F7iC = BigInt("1467")
		const uintv2CXzfm = BigInt("1587")
		const uint256i6yZUo = await Token50X100EVrOfVp.allowance.call(addresslineBMa, addressYzAs7jT, {from: "0x0000000000000000000000000000000000000001"});
		const boolQK0MZA3 = await Token50X100EVrOfVp.setMaxLockPeriod.call(uintnSj0h5S, {from: accounts[4]});
		const boolKQNr5p6 = await Token50X100EVrOfVp.transferFrom.call(addressB6lDGLE, addressPS5FEBe, uintjcdSWEM, {from: accounts[3]});
		const boolpCzSJ5w = await Token50X100EVrOfVp.safeLock.call(uintv2CXzfm, uintPX9F7iC, {from: accounts[4]});

		assert.equal(boolQK0MZA3, false)
		assert.equal(uint256i6yZUo, BigInt("0"))
		await expect(Token50X100EVrOfVp.transferFrom.call(addressB6lDGLE, addressPS5FEBe, uintjcdSWEM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100EVrOfVp = await Token50X100.new({from: accounts[5]});
		const addressV2aMLZV = accounts[6]
		const addresswG5juE = "0x0000000000000000000000000000000000000001"
		const uintehjfDJB = BigInt("1467")
		const uintBJqVa5U = BigInt("1587")
		const uint256i6yZUo = await Token50X100EVrOfVp.allowance.call(addresswG5juE, addressV2aMLZV, {from: "0x0000000000000000000000000000000000000001"});
		const boolpCzSJ5w = await Token50X100EVrOfVp.safeLock.call(uintBJqVa5U, uintehjfDJB, {from: accounts[4]});

		assert.equal(uint256i6yZUo, BigInt("0"))
		await expect(Token50X100EVrOfVp.safeLock.call(uintBJqVa5U, uintehjfDJB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100m3z1WS1 = await Token50X100.new({from: accounts[2]});
		const uintd32mJQJ = BigInt("1697")
		const addresscW0Irhj = accounts[4]
		const addresslxuGkqN = accounts[0]
		const uintnlrLPoN = BigInt("467")
		const uintQOlpPTn = BigInt("1784")
		const addressuwXfLuI = accounts[5]
		const booljyYFv5q = true
		const addressQPhEra = accounts[1]
		const boolYlJgu4J = await Token50X100m3z1WS1.decreaseApproval.call(addresscW0Irhj, uintd32mJQJ, {from: accounts[5]});
		const addressK1KRysB = await Token50X100m3z1WS1.transferOwnership.call(addresslxuGkqN, {from: accounts[3]});
		const boolu338CUP = await Token50X100m3z1WS1.setVesting.call(addressuwXfLuI, uintQOlpPTn, uintnlrLPoN, {from: accounts[0]});
		await Token50X100m3z1WS1.setWhiteList.call(addressQPhEra, booljyYFv5q, {from: accounts[3]});
		await Token50X100m3z1WS1.release.call({from: accounts[3]});

		assert.equal(boolYlJgu4J, true)
		await expect(Token50X100m3z1WS1.transferOwnership.call(addresslxuGkqN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100nc2WUao = await Token50X100.new({from: accounts[4]});
		const uintaQpNtAa = BigInt("708")
		const addressupJeih2 = accounts[4]
		const uintCf3lmN2 = BigInt("1853")
		const address0AnOR8 = accounts[3]
		const uintgp30FIW = BigInt("1153")
		const addresszJShDLK = "0x0000000000000000000000000000000000000001"
		const addressUakTgPg = accounts[1]
		const boolKX6Hrsn = true
		const addresslM3wPLO = accounts[1]
		const uintfmIeUX0 = BigInt("168")
		const addressfPUM9QW = accounts[6]
		const uintsYp9MUM = BigInt("852")
		const uintsV6O36H = BigInt("1205")
		const addressruVCayi = accounts[3]
		const addresswL9DNcx = accounts[4]
		const addressYM2Mlln = "0x0000000000000000000000000000000000000001"
		const addressPZTYYTo = accounts[0]
		const boolLkJbKy7 = true
		const addressSOvwyW0 = accounts[4]
		const boolAcBDr7F = await Token50X100nc2WUao.approve.call(addressupJeih2, uintaQpNtAa, {from: accounts[3]});
		const boolcjZB3Km = await Token50X100nc2WUao.transfer.call(address0AnOR8, uintCf3lmN2, {from: accounts[2]});
		const boolYjKTnPP = await Token50X100nc2WUao.transfer.call(addresszJShDLK, uintgp30FIW, {from: accounts[3]});
		const addressA8djvdq = await Token50X100nc2WUao.setOriginalContract.call(addressUakTgPg, {from: accounts[3]});
		await Token50X100nc2WUao.lock.call({from: accounts[5]});
		await Token50X100nc2WUao.setWhiteListReceivers.call(addresslM3wPLO, boolKX6Hrsn, {from: accounts[4]});
		const boolkD2E6Ee = await Token50X100nc2WUao.decreaseApproval.call(addressfPUM9QW, uintfmIeUX0, {from: accounts[4]});
		const boolShlSTMR = await Token50X100nc2WUao._transfer.call(addresswL9DNcx, addressruVCayi, uintsV6O36H, uintsYp9MUM, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100nc2WUao.setLinkingAddresses.call(addressPZTYYTo, addressYM2Mlln, {from: accounts[3]});
		await Token50X100nc2WUao.setWhiteListReceivers.call(addressSOvwyW0, boolLkJbKy7, {from: accounts[1]});

		assert.equal(boolAcBDr7F, true)
		await expect(Token50X100nc2WUao.transfer.call(address0AnOR8, uintCf3lmN2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100m3z1WS1 = await Token50X100.new({from: accounts[2]});
		const uint45DeRj = BigInt("1697")
		const addresshJiKiu6 = accounts[4]
		const boolWeeAEQR = true
		const addressDFksgZu = "0x0000000000000000000000000000000000000001"
		const addressBpZoV0E = accounts[0]
		const booljyYFv5q = true
		const addressDKQTXLv = accounts[2]
		const boolYlJgu4J = await Token50X100m3z1WS1.decreaseApproval.call(addresshJiKiu6, uint45DeRj, {from: accounts[5]});
		await Token50X100m3z1WS1.setWhiteListReceivers.call(addressDFksgZu, boolWeeAEQR, {from: accounts[2]});
		const addressK1KRysB = await Token50X100m3z1WS1.transferOwnership.call(addressBpZoV0E, {from: accounts[3]});
		await Token50X100m3z1WS1.setWhiteList.call(addressDKQTXLv, booljyYFv5q, {from: accounts[3]});
		await Token50X100m3z1WS1.release.call({from: accounts[3]});

		assert.equal(boolYlJgu4J, true)
		await expect(Token50X100m3z1WS1.setWhiteListReceivers.call(addressDFksgZu, boolWeeAEQR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100m3z1WS1 = await Token50X100.new({from: accounts[2]});
		const addressGWfl6i = accounts[1]
		const addressOhpVyKh = accounts[2]
		const uinto9drmY9 = BigInt("1697")
		const addressVg8fLLv = accounts[2]
		const addresscD9KuzV = accounts[1]
		const uintCIBdQW1 = BigInt("467")
		const uintPujswX0 = BigInt("1784")
		const addresss4d1Qwx = accounts[5]
		const uinthehEbne = BigInt("700")
		const addressBZSmYwG = accounts[3]
		const booljyYFv5q = false
		const addressCLBGhi = accounts[1]
		const uint256TvJOaYT = await Token50X100m3z1WS1.allowance.call(addressOhpVyKh, addressGWfl6i, {from: "0x0000000000000000000000000000000000000001"});
		const boolYlJgu4J = await Token50X100m3z1WS1.decreaseApproval.call(addressVg8fLLv, uinto9drmY9, {from: accounts[5]});
		const uint256d2LV2wf = await Token50X100m3z1WS1.totalSupply.call({from: accounts[1]});
		const addressK1KRysB = await Token50X100m3z1WS1.transferOwnership.call(addresscD9KuzV, {from: accounts[3]});
		const boolu338CUP = await Token50X100m3z1WS1.setVesting.call(addresss4d1Qwx, uintPujswX0, uintCIBdQW1, {from: accounts[0]});
		const boolLfIphX9 = await Token50X100m3z1WS1.transfer.call(addressBZSmYwG, uinthehEbne, {from: accounts[4]});
		await Token50X100m3z1WS1.setWhiteList.call(addressCLBGhi, booljyYFv5q, {from: accounts[3]});
		await Token50X100m3z1WS1.release.call({from: accounts[3]});

		assert.equal(boolYlJgu4J, true)
		assert.equal(uint256TvJOaYT, BigInt("0"))
		assert.equal(uint256d2LV2wf, BigInt("4714285714285710"))
		await expect(Token50X100m3z1WS1.transferOwnership.call(addresscD9KuzV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wWDlemg = await Token50X100.new({from: accounts[0]});
		const uintWZaQjRP = BigInt("117")
		const stringq4uC4Sv = ""
		const stringKVcmpPk = "HfYdc0cd"
		const uintcZ9C3jH = BigInt("881")
		const addressgoXAS2P = accounts[4]
		await Token50X100wWDlemg.setSymbolNameDecimals.call(stringKVcmpPk, stringq4uC4Sv, uintWZaQjRP, {from: accounts[0]});
		const boolTutReMY = await Token50X100wWDlemg.transfer.call(addressgoXAS2P, uintcZ9C3jH, {from: accounts[0]});

		await expect(Token50X100wWDlemg.setSymbolNameDecimals.call(stringKVcmpPk, stringq4uC4Sv, uintWZaQjRP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100grb2wuA = await Token50X100.new({from: accounts[5]});
		const uintdIRprwL = BigInt("1473")
		const addressLje57N5 = accounts[3]
		const boolP2CFcrV = true
		const address1LZJQr = "0x0000000000000000000000000000000000000001"
		const uintkD7K9Yw = BigInt("163")
		const addressQPd4X97 = accounts[0]
		const uint256gu3DU1p = await Token50X100grb2wuA.totalSupply.call({from: accounts[4]});
		const boolls4Nvj = await Token50X100grb2wuA.increaseApproval.call(addressLje57N5, uintdIRprwL, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100grb2wuA.setWhiteList.call(address1LZJQr, boolP2CFcrV, {from: accounts[3]});
		const booljzCy57b = await Token50X100grb2wuA.transfer.call(addressQPd4X97, uintkD7K9Yw, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100grb2wuA.onlyOwner.call({from: accounts[0]});

		assert.equal(boolls4Nvj, true)
		assert.equal(uint256gu3DU1p, BigInt("4714285714285710"))
		await expect(Token50X100grb2wuA.setWhiteList.call(address1LZJQr, boolP2CFcrV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X1006LjXoV = await Token50X100.new({from: accounts[2]});
		const addressHpdgaO9 = "0x0000000000000000000000000000000000000001"
		const addressv09vyFY = "0x0000000000000000000000000000000000000001"
		const addressy1eCWI = "0x0000000000000000000000000000000000000001"
		const uint256y6AGWVO = await Token50X1006LjXoV.balanceOf.call(addressHpdgaO9, {from: accounts[2]});
		const uint256C8PXvZM = await Token50X1006LjXoV.allowance.call(addressy1eCWI, addressv09vyFY, {from: accounts[0]});
		await Token50X1006LjXoV.release.call({from: accounts[1]});

		assert.equal(uint256C8PXvZM, BigInt("0"))
		assert.equal(uint256y6AGWVO, BigInt("0"))
		await expect(Token50X1006LjXoV.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100m3z1WS1 = await Token50X100.new({from: accounts[2]});
		const addresskWRnEzq = accounts[1]
		const addresstoFrMXy = accounts[2]
		const uintitOIcb = BigInt("1679")
		const addressNERDKca = accounts[5]
		const uintSM52dmz = BigInt("58")
		const uintBKctPnv = BigInt("469")
		const addressDgK9sB = accounts[1]
		const addressJVw3uYg = accounts[3]
		const addresspX1mTam = accounts[1]
		const uintsRkTk5k = BigInt("1931")
		const uintzcD3jAB = BigInt("129")
		const addressnoNb4VD = accounts[3]
		const uint256TvJOaYT = await Token50X100m3z1WS1.allowance.call(addresstoFrMXy, addresskWRnEzq, {from: "0x0000000000000000000000000000000000000001"});
		const boolYlJgu4J = await Token50X100m3z1WS1.decreaseApproval.call(addressNERDKca, uintitOIcb, {from: accounts[5]});
		await Token50X100m3z1WS1.lock.call({from: accounts[2]});
		const boolcsmlVP1 = await Token50X100m3z1WS1._transfer.call(addressJVw3uYg, addressDgK9sB, uintBKctPnv, uintSM52dmz, {from: accounts[0]});
		const addressK1KRysB = await Token50X100m3z1WS1.transferOwnership.call(addresspX1mTam, {from: accounts[3]});
		await Token50X100m3z1WS1.release.call({from: accounts[3]});
		await Token50X100m3z1WS1.release.call({from: accounts[3]});
		const boolPesim0g = await Token50X100m3z1WS1.setVesting.call(addressnoNb4VD, uintzcD3jAB, uintsRkTk5k, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYlJgu4J, true)
		assert.equal(uint256TvJOaYT, BigInt("0"))
		await expect(Token50X100m3z1WS1.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100nc2WUao = await Token50X100.new({from: accounts[4]});
		const boolJzXmmZC = false
		const addresshGXkE7 = accounts[1]
		const uintfwMwyIL = BigInt("940")
		const uintnD9pOm9 = BigInt("817")
		const addressD0ekjFU = accounts[4]
		const uinttAddYwr = BigInt("1134")
		const addressGZHxHF3 = "0x0000000000000000000000000000000000000001"
		const addressEc0VKnl = "0x0000000000000000000000000000000000000001"
		const addresseJagg0w = accounts[0]
		const boolLkJbKy7 = true
		const addressuT6sGv6 = accounts[5]
		await Token50X100nc2WUao.setWhiteList.call(addresshGXkE7, boolJzXmmZC, {from: accounts[4]});
		const boolFtLC1z = await Token50X100nc2WUao.setVesting.call(addressD0ekjFU, uintnD9pOm9, uintfwMwyIL, {from: accounts[2]});
		const boolYjKTnPP = await Token50X100nc2WUao.transfer.call(addressGZHxHF3, uinttAddYwr, {from: accounts[3]});
		await Token50X100nc2WUao.setLinkingAddresses.call(addresseJagg0w, addressEc0VKnl, {from: accounts[3]});
		await Token50X100nc2WUao.setWhiteListReceivers.call(addressuT6sGv6, boolLkJbKy7, {from: accounts[1]});

		await expect(Token50X100nc2WUao.setWhiteList.call(addresshGXkE7, boolJzXmmZC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PBZumAP = await Token50X100.new({from: accounts[2]});
		const uintLPQ7ol6 = BigInt("809")
		const addresspLWz91K = accounts[3]
		const addresszPCuutM = accounts[3]
		const addressn2yql3A = accounts[3]
		const uintwVnND7E = BigInt("1243")
		const uintfQgHPUK = BigInt("703")
		const uintgnCVpQR = BigInt("1967")
		const uintfB3ZVx7 = BigInt("258")
		const uintSt3LBmK = BigInt("1310")
		const addresslVlScbG = accounts[1]
		const uintdAVisuG = BigInt("195")
		const stringSD7ZKA = "kXU0bNmm1xCv2xm5hgENds499EX2FUi22dmRGfjSkrR5ajeok1y9BSR7MW8EMG7fXsjsYT4XcPJTRSLfqQLOEsoYI959bSj"
		const stringAXHrzhb = "2Ca7nFnKCy4VCkXznLHhuFF4tjwJ8"
		const boolzLOuu1 = await Token50X100PBZumAP.decreaseApproval.call(addresspLWz91K, uintLPQ7ol6, {from: accounts[3]});
		await Token50X100PBZumAP.setLinkingAddresses.call(addressn2yql3A, addresszPCuutM, {from: accounts[2]});
		const boolVhmF0HA = await Token50X100PBZumAP.safeLock.call(uintfQgHPUK, uintwVnND7E, {from: accounts[3]});
		const boolsW7wTrX = await Token50X100PBZumAP.safeLock.call(uintfB3ZVx7, uintgnCVpQR, {from: accounts[4]});
		const booluZVN11 = await Token50X100PBZumAP.decreaseApproval.call(addresslVlScbG, uintSt3LBmK, {from: accounts[4]});
		await Token50X100PBZumAP.setSymbolNameDecimals.call(stringAXHrzhb, stringSD7ZKA, uintdAVisuG, {from: accounts[2]});

		assert.equal(boolzLOuu1, true)
		await expect(Token50X100PBZumAP.setLinkingAddresses.call(addressn2yql3A, addresszPCuutM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PBZumAP = await Token50X100.new({from: accounts[2]});
		const uintG2ICkw = BigInt("809")
		const addressvNH13gA = accounts[3]
		const uintRC4dO8 = BigInt("1178")
		const uintGDLxJh7 = BigInt("753")
		const addressdxBnbL6 = accounts[0]
		const addressvQbBPHn = accounts[4]
		const addresspASjEZo = accounts[3]
		const addresstd1LCWB = accounts[3]
		const uintDYvKoc3 = BigInt("1664")
		const addressYlgveZh = accounts[2]
		const uintLquRUVl = BigInt("1243")
		const uintNWU2Eko = BigInt("703")
		const uintA9oJ00O = BigInt("1967")
		const uintrViaAX4 = BigInt("258")
		const uintJz3VKxq = BigInt("1310")
		const addresssFE58zS = accounts[1]
		const uintv6nQzMO = BigInt("195")
		const stringSD7ZKA = "kXU0bNmm1xCv2xm5hgENds499EX2FUi22dmRGfjSkr5ajeok1y9BSR7MW8EMG7fXsjsYT4XcPJTRSLfqQLOEsoYI959bSj"
		const stringAXHrzhb = "2Ca7nFnKCy4VCkXznLHhuFF4tjwJ8"
		const boolzLOuu1 = await Token50X100PBZumAP.decreaseApproval.call(addressvNH13gA, uintG2ICkw, {from: accounts[3]});
		const boolQB77B61 = await Token50X100PBZumAP._transfer.call(addressvQbBPHn, addressdxBnbL6, uintGDLxJh7, uintRC4dO8, {from: accounts[2]});
		await Token50X100PBZumAP.setLinkingAddresses.call(addresstd1LCWB, addresspASjEZo, {from: accounts[2]});
		const boolIkwjpOF = await Token50X100PBZumAP.transfer.call(addressYlgveZh, uintDYvKoc3, {from: accounts[1]});
		const boolVhmF0HA = await Token50X100PBZumAP.safeLock.call(uintNWU2Eko, uintLquRUVl, {from: accounts[3]});
		await Token50X100PBZumAP.release.call({from: accounts[4]});
		const boolsW7wTrX = await Token50X100PBZumAP.safeLock.call(uintrViaAX4, uintA9oJ00O, {from: accounts[4]});
		const booluZVN11 = await Token50X100PBZumAP.decreaseApproval.call(addresssFE58zS, uintJz3VKxq, {from: accounts[4]});
		await Token50X100PBZumAP.setSymbolNameDecimals.call(stringAXHrzhb, stringSD7ZKA, uintv6nQzMO, {from: accounts[2]});

		assert.equal(boolzLOuu1, true)
		await expect(Token50X100PBZumAP._transfer.call(addressvQbBPHn, addressdxBnbL6, uintGDLxJh7, uintRC4dO8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100nc2WUao = await Token50X100.new({from: accounts[4]});
		const uintFb4LMxv = BigInt("1958")
		const uintCBtmBkV = BigInt("744")
		const addressSqd4clR = accounts[4]
		const uintxjxqo1b = BigInt("102")
		const uint1PxwUo = BigInt("527")
		const addressOuG0OBL = accounts[1]
		const uintTT4CZWU = BigInt("1134")
		const addressYclWOIj = "0x0000000000000000000000000000000000000001"
		const boolMLRZjYd = await Token50X100nc2WUao.setVesting.call(addressSqd4clR, uintCBtmBkV, uintFb4LMxv, {from: accounts[4]});
		const boolL4ogxIa = await Token50X100nc2WUao.setVesting.call(addressOuG0OBL, uint1PxwUo, uintxjxqo1b, {from: accounts[4]});
		const boolYjKTnPP = await Token50X100nc2WUao.transfer.call(addressYclWOIj, uintTT4CZWU, {from: accounts[3]});

		assert.equal(boolL4ogxIa, true)
		assert.equal(boolMLRZjYd, true)
		await expect(Token50X100nc2WUao.transfer.call(addressYclWOIj, uintTT4CZWU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wWDlemg = await Token50X100.new({from: accounts[0]});
		const uintLQjcVVb = BigInt("881")
		const addressdOyCCM = accounts[4]
		const uintzTW7JZj = BigInt("998")
		const uinttmHpCXt = BigInt("1902")
		const uintvGyIyTw = BigInt("38")
		const addressaldVY2Q = accounts[5]
		const addressld4e3tH = "0x0000000000000000000000000000000000000001"
		await Token50X100wWDlemg.release.call({from: accounts[0]});
		const boolTutReMY = await Token50X100wWDlemg.transfer.call(addressdOyCCM, uintLQjcVVb, {from: accounts[0]});
		const booll0TMtlk = await Token50X100wWDlemg.safeLock.call(uinttmHpCXt, uintzTW7JZj, {from: accounts[1]});
		const boolROXi5Sz = await Token50X100wWDlemg.issueTokens.call(addressld4e3tH, addressaldVY2Q, uintvGyIyTw, {from: accounts[2]});

		await expect(Token50X100wWDlemg.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100nc2WUao = await Token50X100.new({from: accounts[4]});
		const uintcDYNNLD = BigInt("1134")
		const addressEIvZmo = "0x0000000000000000000000000000000000000000"
		const addressW57COqL = "0x0000000000000000000000000000000000000001"
		const addresskMUXGGa = accounts[1]
		const addresseWcGaXR = accounts[1]
		const boolYjKTnPP = await Token50X100nc2WUao.transfer.call(addressEIvZmo, uintcDYNNLD, {from: accounts[3]});
		await Token50X100nc2WUao.setLinkingAddresses.call(addresskMUXGGa, addressW57COqL, {from: accounts[3]});
		await Token50X100nc2WUao.setTokenContract.call(addresseWcGaXR, {from: accounts[4]});

		await expect(Token50X100nc2WUao.transfer.call(addressEIvZmo, uintcDYNNLD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100nc2WUao = await Token50X100.new({from: accounts[4]});
		const uintuuqDSrF = BigInt("1064")
		const addressfH2EBjt = accounts[1]
		const addressHlcqP1x = accounts[4]
		const addressDfQbtsh = accounts[1]
		const uintZLrFqpg = BigInt("1134")
		const addressQuTciP = "0x0000000000000000000000000000000000000001"
		const addressXXQukpG = "0x0000000000000000000000000000000000000003"
		const addressXYwmWvq = accounts[1]
		const boolKNGDiAt = await Token50X100nc2WUao.decreaseApproval.call(addressfH2EBjt, uintuuqDSrF, {from: accounts[1]});
		await Token50X100nc2WUao.setTokenContract.call(addressHlcqP1x, {from: accounts[4]});
		const addresskYbfh5e = await Token50X100nc2WUao.setOriginalContract.call(addressDfQbtsh, {from: accounts[1]});
		const boolYjKTnPP = await Token50X100nc2WUao.transfer.call(addressQuTciP, uintZLrFqpg, {from: accounts[3]});
		await Token50X100nc2WUao.setLinkingAddresses.call(addressXYwmWvq, addressXXQukpG, {from: accounts[3]});

		assert.equal(boolKNGDiAt, true)
		await expect(Token50X100nc2WUao.setTokenContract.call(addressHlcqP1x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100nc2WUao = await Token50X100.new({from: accounts[4]});
		const uintjAgpbQn = BigInt("0")
		const addressr02LlnF = accounts[1]
		const uintG3L3SlY = BigInt("978")
		const addressIBHjTqj = accounts[2]
		const uintFr63QR5 = BigInt("1134")
		const addressLmTIvB3 = "0x0000000000000000000000000000000000000000"
		const addresswySUE7Q = accounts[1]
		const addressc0EIjMd = accounts[2]
		const addressDpVkm0q = "0x0000000000000000000000000000000000000002"
		const addressTxEPEG0 = accounts[1]
		const uintEqa7wLn = BigInt("956")
		const addresssEbEo7z = accounts[4]
		const addressSUePxdm = accounts[0]
		const boolQKVVYe4 = await Token50X100nc2WUao.decreaseApproval.call(addressr02LlnF, uintjAgpbQn, {from: accounts[0]});
		const booluoEQmLB = await Token50X100nc2WUao.approve.call(addressIBHjTqj, uintG3L3SlY, {from: accounts[1]});
		const boolYjKTnPP = await Token50X100nc2WUao.transfer.call(addressLmTIvB3, uintFr63QR5, {from: accounts[3]});
		const uint256YkEQHw = await Token50X100nc2WUao.allowance.call(addressc0EIjMd, addresswySUE7Q, {from: accounts[1]});
		await Token50X100nc2WUao.setLinkingAddresses.call(addressTxEPEG0, addressDpVkm0q, {from: accounts[3]});
		await Token50X100nc2WUao.lock.call({from: accounts[0]});
		const boolYcfvhn6 = await Token50X100nc2WUao.issueTokens.call(addressSUePxdm, addresssEbEo7z, uintEqa7wLn, {from: accounts[2]});

		assert.equal(boolQKVVYe4, true)
		assert.equal(booluoEQmLB, true)
		await expect(Token50X100nc2WUao.transfer.call(addressLmTIvB3, uintFr63QR5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})