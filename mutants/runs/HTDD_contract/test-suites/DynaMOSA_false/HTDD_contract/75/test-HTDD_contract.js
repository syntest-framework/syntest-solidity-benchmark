const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractujH01jG = await HTDD_contract.new({from: accounts[4]});
		const addressJvvpxwZ = accounts[3]
		const addressHuEUNAB = accounts[0]
		const uintQuGIucr = BigInt("308")
		const addressTfjjk1u = accounts[1]
		const addressZVzfSqH = accounts[2]
		const addresssFJjsAx = accounts[5]
		const uintkH4zoEH = BigInt("1996")
		const addressctQ8iUD = "0x0000000000000000000000000000000000000001"
		const uint256HNYWJm = await HTDD_contractujH01jG.allowance.call(addressHuEUNAB, addressJvvpxwZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolEGgHfWT = await HTDD_contractujH01jG.approve.call(addressTfjjk1u, uintQuGIucr, {from: accounts[2]});
		const uint256mIXI5dc = await HTDD_contractujH01jG.allowance.call(addresssFJjsAx, addressZVzfSqH, {from: accounts[1]});
		const boolYe0V6i = await HTDD_contractujH01jG.approve.call(addressctQ8iUD, uintkH4zoEH, {from: accounts[5]});

		assert.equal(boolEGgHfWT, true)
		assert.equal(boolYe0V6i, true)
		assert.equal(uint256HNYWJm, BigInt("0"))
		assert.equal(uint256mIXI5dc, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractG8EQoGw = await HTDD_contract.new({from: accounts[5]});
		const uintX9AoV2r = BigInt("175")
		const addressofUarN = accounts[4]
		const uintKPxaAmn = BigInt("1438")
		const addressB13G9kM = accounts[1]
		const addressRtyYMY = accounts[1]
		const uintdZ6AXsd = BigInt("976")
		const addressgZ3G0oZ = accounts[4]
		const uintaSEl5fI = BigInt("744")
		const addressJqX0gBr = accounts[4]
		const addressscLmaFQ = "0x0000000000000000000000000000000000000001"
		const uintStutqiu = BigInt("217")
		const addressqPsIrKR = accounts[3]
		const uintZ80Y2ci = BigInt("447")
		const addressoJkVDeD = accounts[0]
		const boolR1PAe8o = await HTDD_contractG8EQoGw.approve.call(addressofUarN, uintX9AoV2r, {from: accounts[4]});
		const boolBQrVqxA = await HTDD_contractG8EQoGw.transferFrom.call(addressRtyYMY, addressB13G9kM, uintKPxaAmn, {from: accounts[5]});
		const boolClS5pOm = await HTDD_contractG8EQoGw.transfer.call(addressgZ3G0oZ, uintdZ6AXsd, {from: accounts[1]});
		const boolIyo1Tw = await HTDD_contractG8EQoGw.transferFrom.call(addressscLmaFQ, addressJqX0gBr, uintaSEl5fI, {from: accounts[2]});
		const boolGEsic6v = await HTDD_contractG8EQoGw.approve.call(addressqPsIrKR, uintStutqiu, {from: accounts[3]});
		const boolzVAyER3 = await HTDD_contractG8EQoGw.approve.call(addressoJkVDeD, uintZ80Y2ci, {from: accounts[2]});

		assert.equal(boolR1PAe8o, true)
		await expect(HTDD_contractG8EQoGw.transferFrom.call(addressRtyYMY, addressB13G9kM, uintKPxaAmn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractXDZtqDr = await HTDD_contract.new({from: accounts[5]});
		const uintjfa4sOi = BigInt("434")
		const addressqYBgfw7 = accounts[2]
		const uintEOSTXVC = BigInt("747")
		const address8xmCZa = accounts[3]
		const addressOEdxPf = accounts[1]
		const addresseZtrWEN = accounts[3]
		const boolNtFGMLl = await HTDD_contractXDZtqDr.transfer.call(addressqYBgfw7, uintjfa4sOi, {from: accounts[4]});
		const boolcByDGre = await HTDD_contractXDZtqDr.approve.call(address8xmCZa, uintEOSTXVC, {from: accounts[4]});
		const uint256fFF3R46 = await HTDD_contractXDZtqDr.allowance.call(addresseZtrWEN, addressOEdxPf, {from: accounts[0]});

		await expect(HTDD_contractXDZtqDr.transfer.call(addressqYBgfw7, uintjfa4sOi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractn4gOOOZ = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqgPCMlw = BigInt("1340")
		const addressbP6d2d = accounts[2]
		const uintMIq5bSe = BigInt("496")
		const addressve4F07s = accounts[0]
		const uintpOtlI1p = BigInt("1903")
		const addressNaomxFK = accounts[3]
		const uinth0n3hTK = BigInt("1849")
		const addressxGyGfFB = accounts[5]
		const addresshWfIIR0 = accounts[1]
		const uintMUy0eLD = BigInt("20")
		const addressjn4gfCY = accounts[3]
		const addressLJJjCbz = accounts[3]
		const boolK7E1Yu4 = await HTDD_contractn4gOOOZ.approve.call(addressbP6d2d, uintqgPCMlw, {from: accounts[4]});
		const boolqYRpyyl = await HTDD_contractn4gOOOZ.approve.call(addressve4F07s, uintMIq5bSe, {from: accounts[0]});
		const boolPKB85V2 = await HTDD_contractn4gOOOZ.transfer.call(addressNaomxFK, uintpOtlI1p, {from: accounts[1]});
		const boolV1TuMWQ = await HTDD_contractn4gOOOZ.transferFrom.call(addresshWfIIR0, addressxGyGfFB, uinth0n3hTK, {from: accounts[2]});
		const boolZt2HwvY = await HTDD_contractn4gOOOZ.transferFrom.call(addressLJJjCbz, addressjn4gfCY, uintMUy0eLD, {from: accounts[1]});
	});
})