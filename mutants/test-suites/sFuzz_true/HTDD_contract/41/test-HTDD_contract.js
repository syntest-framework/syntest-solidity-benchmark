const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractzQJ2U6x = await HTDD_contract.new({from: accounts[0]});
		const uinteJHOPVu = BigInt("904")
		const addressYzLnJK = accounts[2]
		const uintVJaQtH = BigInt("531")
		const address0gVCnh = accounts[0]
		const addressGE8Vbda = accounts[5]
//		const boolGnAU3pj = await HTDD_contractzQJ2U6x.transfer.call(addressYzLnJK, uinteJHOPVu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolE8xqORc = await HTDD_contractzQJ2U6x.transferFrom.call(addressGE8Vbda, address0gVCnh, uintVJaQtH, {from: accounts[5]});

		await expect(HTDD_contractzQJ2U6x.transfer.call(addressYzLnJK, uinteJHOPVu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractVdskm6c = await HTDD_contract.new({from: accounts[0]});
		const uintKbA0O6n = BigInt("721")
		const addressYeuyOw = accounts[3]
		const uintqhib1LA = BigInt("716")
		const addressRenTGHM = accounts[1]
		const addressAxnOKdf = accounts[4]
		const uintobcqGni = BigInt("1177")
		const addresspY43yH = accounts[3]
		const boolZ8yCyHU = await HTDD_contractVdskm6c.approve.call(addressYeuyOw, uintKbA0O6n, {from: accounts[4]});
//		const boolh69io0 = await HTDD_contractVdskm6c.transferFrom.call(addressAxnOKdf, addressRenTGHM, uintqhib1LA, {from: accounts[3]});
//		const boolg3KtB0 = await HTDD_contractVdskm6c.transfer.call(addresspY43yH, uintobcqGni, {from: accounts[0]});

		assert.equal(boolZ8yCyHU, true)
		await expect(HTDD_contractVdskm6c.transferFrom.call(addressAxnOKdf, addressRenTGHM, uintqhib1LA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractTMVPlmi = await HTDD_contract.new({from: accounts[4]});
		const uintu424gjC = BigInt("811")
		const address95QfFL = accounts[1]
		const addressqLayDU = accounts[4]
		const addressfaZ1qGF = accounts[0]
		const addressprqbiQI = "0x0000000000000000000000000000000000000001"
		const addressPNn3Gz1 = accounts[0]
		const addressdw3LqfB = accounts[4]
		const uintljpmHtr = BigInt("1773")
		const addressJnnxdUz = accounts[0]
		const addressVwMI1Ci = accounts[4]
		const addressrA8X9WN = accounts[4]
		const addressazImner = accounts[0]
		const uintPe9H6dJ = BigInt("1223")
		const addressq5nN80 = accounts[5]
//		const boolbIyuYRf = await HTDD_contractTMVPlmi.transferFrom.call(addressqLayDU, address95QfFL, uintu424gjC, {from: accounts[4]});
//		const uint256M7D3URY = await HTDD_contractTMVPlmi.allowance.call(addressprqbiQI, addressfaZ1qGF, {from: accounts[1]});
//		const uint256bhXf8ci = await HTDD_contractTMVPlmi.allowance.call(addressdw3LqfB, addressPNn3Gz1, {from: accounts[5]});
//		const boolQBe04Y3 = await HTDD_contractTMVPlmi.transferFrom.call(addressVwMI1Ci, addressJnnxdUz, uintljpmHtr, {from: accounts[2]});
//		const uint256OT1laWU = await HTDD_contractTMVPlmi.allowance.call(addressazImner, addressrA8X9WN, {from: accounts[0]});
//		const boolFBB8BaE = await HTDD_contractTMVPlmi.transfer.call(addressq5nN80, uintPe9H6dJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(HTDD_contractTMVPlmi.transferFrom.call(addressqLayDU, address95QfFL, uintu424gjC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractbKBMVJZ = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRDkXUR7 = accounts[5]
		const addressWDVdoJa = accounts[0]
		const uintRCxJ9bU = BigInt("472")
		const addressRVEQMue = accounts[5]
		const uintkDKgkju = BigInt("1508")
		const addressEhinYwO = accounts[4]
		const addressLhN22H1 = accounts[0]
		const uintr9mxjjX = BigInt("1003")
		const addressbCKzNd = accounts[2]
		const addressokMkTLN = accounts[2]
		const uint256HXXh9n = await HTDD_contractbKBMVJZ.allowance.call(addressWDVdoJa, addressRDkXUR7, {from: accounts[1]});
		const boolkgCdSr = await HTDD_contractbKBMVJZ.approve.call(addressRVEQMue, uintRCxJ9bU, {from: accounts[2]});
		const boolV85dyw = await HTDD_contractbKBMVJZ.transferFrom.call(addressLhN22H1, addressEhinYwO, uintkDKgkju, {from: accounts[2]});
		const boolZAwqjD = await HTDD_contractbKBMVJZ.transferFrom.call(addressokMkTLN, addressbCKzNd, uintr9mxjjX, {from: accounts[0]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractqkG5svj = await HTDD_contract.new({from: accounts[3]});
		const address8lkNMC = accounts[3]
		const addressxS2pVrt = accounts[0]
		const uintCP2KzSi = BigInt("536")
		const addressRtzYQY = accounts[3]
		const uintP1XbGBk = BigInt("2001")
		const addressG1SEAox = accounts[1]
		const addresswMcXjZB = accounts[3]
		const uinty46fuxO = BigInt("1914")
		const addressTIkuMlv = accounts[2]
		const addressDT9MZQW = accounts[1]
		const uintNf6WWFm = BigInt("592")
		const addressh92u9eg = accounts[5]
		const uint2563JjN6G = await HTDD_contractqkG5svj.allowance.call(addressxS2pVrt, address8lkNMC, {from: accounts[2]});
		const boolsq5w37E = await HTDD_contractqkG5svj.approve.call(addressRtzYQY, uintCP2KzSi, {from: accounts[4]});
//		const boolTkLk3ay = await HTDD_contractqkG5svj.transferFrom.call(addresswMcXjZB, addressG1SEAox, uintP1XbGBk, {from: accounts[1]});
//		const boolzxvNSQL = await HTDD_contractqkG5svj.transferFrom.call(addressDT9MZQW, addressTIkuMlv, uinty46fuxO, {from: accounts[1]});
//		const boollQXXMBG = await HTDD_contractqkG5svj.approve.call(addressh92u9eg, uintNf6WWFm, {from: accounts[4]});

		assert.equal(boolsq5w37E, true)
		assert.equal(uint2563JjN6G, BigInt("0"))
		await expect(HTDD_contractqkG5svj.transferFrom.call(addresswMcXjZB, addressG1SEAox, uintP1XbGBk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractj2dLEto = await HTDD_contract.new({from: accounts[2]});
		const uintkieUy3M = BigInt("131")
		const addressc2t7X8g = accounts[1]
		const uintBamKITe = BigInt("1359")
		const addressM1U4Fgl = "0x0000000000000000000000000000000000000001"
		const addressX2d16yN = accounts[5]
		const addressdWcNb1q = "0x0000000000000000000000000000000000000001"
		const addressr7Gj0YF = accounts[1]
		const uintIB5bVN = BigInt("1047")
		const addresspiby8hX = accounts[3]
		const addressbPepPNY = accounts[4]
		const uintsJ5tXVV = BigInt("1492")
		const addresspDde7sw = accounts[1]
		const boolDoJ48Pd = await HTDD_contractj2dLEto.transfer.call(addressc2t7X8g, uintkieUy3M, {from: accounts[2]});
//		const boolwbG7vTb = await HTDD_contractj2dLEto.transferFrom.call(addressX2d16yN, addressM1U4Fgl, uintBamKITe, {from: accounts[4]});
//		const uint256KuRd0bZ = await HTDD_contractj2dLEto.allowance.call(addressr7Gj0YF, addressdWcNb1q, {from: accounts[5]});
//		const booliyyncVX = await HTDD_contractj2dLEto.transferFrom.call(addressbPepPNY, addresspiby8hX, uintIB5bVN, {from: accounts[5]});
//		const boolgxq86MY = await HTDD_contractj2dLEto.transfer.call(addresspDde7sw, uintsJ5tXVV, {from: accounts[4]});

		assert.equal(boolDoJ48Pd, true)
		await expect(HTDD_contractj2dLEto.transferFrom.call(addressX2d16yN, addressM1U4Fgl, uintBamKITe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractzQJ2U6x = await HTDD_contract.new({from: accounts[0]});
		const uinthEFZZwL = BigInt("1651")
		const addresstcx8diV = accounts[1]
		const uintSjFE8Dt = BigInt("0")
		const addresscgvixdW = accounts[0]
		const addressKUBOpdC = accounts[6]
		const boolVE2GsK2 = await HTDD_contractzQJ2U6x.approve.call(addresstcx8diV, uinthEFZZwL, {from: accounts[2]});
		const boolE8xqORc = await HTDD_contractzQJ2U6x.transferFrom.call(addressKUBOpdC, addresscgvixdW, uintSjFE8Dt, {from: accounts[5]});

		assert.equal(boolE8xqORc, true)
		assert.equal(boolVE2GsK2, true)
	});
})