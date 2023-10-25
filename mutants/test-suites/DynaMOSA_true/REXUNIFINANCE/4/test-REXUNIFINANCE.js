const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEhdz3ZNb = await REXUNIFINANCE.new({from: accounts[1]});
		const address4iatUm = "0x0000000000000000000000000000000000000001"
		const uintfLQsA4z = BigInt("661")
		const addressSItUIou = accounts[3]
		const addresswVKfR4q = accounts[1]
		const addressXoy0Pnd = accounts[4]
		const addressjUNoxQ8 = accounts[5]
		const addressb4iinAe = accounts[0]
		const addressVIs59ko = accounts[3]
//		const addressVDJOtEa = await REXUNIFINANCEhdz3ZNb.transferOwnership.call(address4iatUm, {from: accounts[3]});
//		const boolzzmT2zg = await REXUNIFINANCEhdz3ZNb.transferFrom.call(addresswVKfR4q, addressSItUIou, uintfLQsA4z, {from: accounts[1]});
//		const uint256ALYu50Z = await REXUNIFINANCEhdz3ZNb.allowance.call(addressjUNoxQ8, addressXoy0Pnd, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256arCy81M = await REXUNIFINANCEhdz3ZNb.allowance.call(addressVIs59ko, addressb4iinAe, {from: accounts[4]});

		await expect(REXUNIFINANCEhdz3ZNb.transferOwnership.call(address4iatUm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEpeCT5H7 = await REXUNIFINANCE.new({from: accounts[3]});
		const uinthMPVlqY = BigInt("695")
		const addressLfjZe3k = accounts[5]
		const addressfiAlbx = accounts[1]
//		const boolPQfga4D = await REXUNIFINANCEpeCT5H7.transfer.call(addressLfjZe3k, uinthMPVlqY, {from: accounts[1]});
//		const uint256uwS5wyg = await REXUNIFINANCEpeCT5H7.balanceOf.call(addressfiAlbx, {from: accounts[4]});

		await expect(REXUNIFINANCEpeCT5H7.transfer.call(addressLfjZe3k, uinthMPVlqY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEU4ZzaAV = await REXUNIFINANCE.new({from: accounts[0]});
		const uintZngdkYI = BigInt("1283")
		const addressxFGdzAh = accounts[1]
		const addressGfvukza = "0x0000000000000000000000000000000000000001"
		const addresstbX0I8C = accounts[2]
		const uintPnHaFjK = BigInt("413")
		const addresslbrWsFJ = accounts[3]
		const addressOPaL3C = accounts[4]
		const addressZHUjIVJ = accounts[4]
		const uintFxfXfL3 = BigInt("1274")
		const addressOi66sC6 = accounts[4]
		const uintyaOaQdV = BigInt("1341")
		const addressWAK5894 = accounts[1]
//		const boolYUXOON4 = await REXUNIFINANCEU4ZzaAV.transferFrom.call(addressGfvukza, addressxFGdzAh, uintZngdkYI, {from: accounts[1]});
//		const uint256AKEfmdo = await REXUNIFINANCEU4ZzaAV.balanceOf.call(addresstbX0I8C, {from: accounts[5]});
//		const boolY37ZPCZ = await REXUNIFINANCEU4ZzaAV.transferFrom.call(addressOPaL3C, addresslbrWsFJ, uintPnHaFjK, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256v8IS6xK = await REXUNIFINANCEU4ZzaAV.balanceOf.call(addressZHUjIVJ, {from: accounts[4]});
//		const boolg3lU0II = await REXUNIFINANCEU4ZzaAV.decreaseApproval.call(addressOi66sC6, uintFxfXfL3, {from: accounts[5]});
//		const boolgtTji26 = await REXUNIFINANCEU4ZzaAV.approve.call(addressWAK5894, uintyaOaQdV, {from: accounts[2]});

		await expect(REXUNIFINANCEU4ZzaAV.transferFrom.call(addressGfvukza, addressxFGdzAh, uintZngdkYI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEdlvR9cb = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressIrUPuKl = accounts[3]
		const uintEYB50iI = BigInt("1485")
		const addressroUfOt5 = "0x0000000000000000000000000000000000000001"
		const addresszhP5oF = "0x0000000000000000000000000000000000000001"
		const uintdwX3tww = BigInt("1718")
		const addressvZVlqc5 = "0x0000000000000000000000000000000000000001"
		const addresslqcW6Dk = accounts[0]
		const addressgjuTmQ3 = await REXUNIFINANCEdlvR9cb.transferOwnership.call(addressIrUPuKl, {from: accounts[2]});
		const boolppO1geE = await REXUNIFINANCEdlvR9cb.increaseApproval.call(addressroUfOt5, uintEYB50iI, {from: accounts[3]});
		const uint256r8sc6pQ = await REXUNIFINANCEdlvR9cb.balanceOf.call(addresszhP5oF, {from: accounts[2]});
		const boolYPWXUyK = await REXUNIFINANCEdlvR9cb.transferFrom.call(addresslqcW6Dk, addressvZVlqc5, uintdwX3tww, {from: accounts[4]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEVxpa6Bv = await REXUNIFINANCE.new({from: accounts[1]});
		const addressK5hwwTw = accounts[0]
		const uintnQ1kIJ8 = BigInt("916")
		const addressZaNdVBR = accounts[5]
		const addressOPcnvUf = accounts[1]
		const addressXcV7l8 = await REXUNIFINANCEVxpa6Bv.transferOwnership.call(addressK5hwwTw, {from: accounts[1]});
		const boolLdjOUZy = await REXUNIFINANCEVxpa6Bv.increaseApproval.call(addressZaNdVBR, uintnQ1kIJ8, {from: accounts[0]});
		const uint256ar9aig2 = await REXUNIFINANCEVxpa6Bv.balanceOf.call(addressOPcnvUf, {from: accounts[4]});

		assert.equal(boolLdjOUZy, true)
		assert.equal(uint256ar9aig2, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEsGkEkhl = await REXUNIFINANCE.new({from: accounts[0]});
		const addressSCK6ltg = accounts[1]
		const uintEf5RlsT = BigInt("1761")
		const addressmX4Doz5 = "0x0000000000000000000000000000000000000001"
		const addressVze2Nbj = accounts[2]
		const addressskoJyF = accounts[5]
		const uinto0Vm7nF = BigInt("1850")
		const addresscDS9tnt = accounts[2]
		const uint256ZEitkUK = await REXUNIFINANCEsGkEkhl.transferableTokens.call(addressSCK6ltg, {from: accounts[4]});
		const boolEso0FB7 = await REXUNIFINANCEsGkEkhl.approve.call(addressmX4Doz5, uintEf5RlsT, {from: accounts[1]});
		const uint256U44XQdr = await REXUNIFINANCEsGkEkhl.balanceOf.call(addressVze2Nbj, {from: accounts[2]});
		const uint256vnn6dZR = await REXUNIFINANCEsGkEkhl.balanceOf.call(addressskoJyF, {from: accounts[1]});
		const boolBvyVfnv = await REXUNIFINANCEsGkEkhl.increaseApproval.call(addresscDS9tnt, uinto0Vm7nF, {from: accounts[1]});

		assert.equal(boolBvyVfnv, true)
		assert.equal(boolEso0FB7, true)
		assert.equal(uint256U44XQdr, BigInt("0"))
		assert.equal(uint256ZEitkUK, BigInt("0"))
		assert.equal(uint256vnn6dZR, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEpeCT5H7 = await REXUNIFINANCE.new({from: accounts[3]});
		const addresstoplexX = accounts[3]
		const uinta1qYwmQ = BigInt("647")
		const addressBUEfjxf = "0x0000000000000000000000000000000000000001"
		const uint256uwS5wyg = await REXUNIFINANCEpeCT5H7.balanceOf.call(addresstoplexX, {from: accounts[4]});
		const boolDyjDQzO = await REXUNIFINANCEpeCT5H7.decreaseApproval.call(addressBUEfjxf, uinta1qYwmQ, {from: accounts[3]});

		assert.equal(boolDyjDQzO, true)
		assert.equal(uint256uwS5wyg, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCERblXtrn = await REXUNIFINANCE.new({from: accounts[3]});
		const addressCXDeTmj = accounts[2]
		const addressf0oYe7p = accounts[1]
		const uintqMNCo2I = BigInt("334")
		const addressVa0HdeC = accounts[2]
		const uintMf60JK = BigInt("1175")
		const addressGDzboCW = "0x0000000000000000000000000000000000000001"
		const uintoCjjL0 = BigInt("1865")
		const addressj4WaaWg = accounts[1]
		const uintctBDB80 = BigInt("1586")
		const addressJCqU1M = accounts[3]
		const addressGA21J5G = "0x0000000000000000000000000000000000000001"
		const uint256p33c6oc = await REXUNIFINANCERblXtrn.allowance.call(addressf0oYe7p, addressCXDeTmj, {from: accounts[0]});
		const boolTvZqlbc = await REXUNIFINANCERblXtrn.approve.call(addressVa0HdeC, uintqMNCo2I, {from: accounts[0]});
		const booltUDbNaI = await REXUNIFINANCERblXtrn.approve.call(addressGDzboCW, uintMf60JK, {from: accounts[1]});
//		const booljHhWSVT = await REXUNIFINANCERblXtrn.transfer.call(addressj4WaaWg, uintoCjjL0, {from: accounts[0]});
//		const boolOYV8wE = await REXUNIFINANCERblXtrn.transfer.call(addressJCqU1M, uintctBDB80, {from: accounts[2]});
//		const uint256EyldtjK = await REXUNIFINANCERblXtrn.balanceOf.call(addressGA21J5G, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTvZqlbc, true)
		assert.equal(booltUDbNaI, true)
		assert.equal(uint256p33c6oc, BigInt("0"))
		await expect(REXUNIFINANCERblXtrn.transfer.call(addressj4WaaWg, uintoCjjL0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})