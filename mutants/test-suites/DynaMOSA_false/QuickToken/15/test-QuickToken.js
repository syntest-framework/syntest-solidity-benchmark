const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressYMPJaiD = accounts[2]
		const addressF99se9G = accounts[5]
		const QuickTokenODfdHGi = await QuickToken.new(addressYMPJaiD, addressF99se9G, {from: accounts[1]});
		const uintkw5br0P = BigInt("680")
		const addressqKQ5AaI = "0x0000000000000000000000000000000000000001"
		const addresspTLvovG = accounts[2]
		const uintY6Uskkr = BigInt("447")
		const addresspGWpKao = accounts[4]
		const addressWxmyFYr = accounts[1]
		const uintSu1YNTE = BigInt("1136")
		const addressLa54DA = accounts[3]
		const addressbhZvKvL = await QuickTokenODfdHGi.mint.call(addressqKQ5AaI, uintkw5br0P, {from: accounts[5]});
		const uintk2oOLfN = await QuickTokenODfdHGi.balanceOf.call(addresspTLvovG, {from: accounts[3]});
//		const addressg2cOsm = await QuickTokenODfdHGi.mint.call(addresspGWpKao, uintY6Uskkr, {from: accounts[2]});
//		const uintnxNan7Q = await QuickTokenODfdHGi.balanceOf.call(addressWxmyFYr, {from: accounts[4]});
//		const addressXce9mc = await QuickTokenODfdHGi.mint.call(addressLa54DA, uintSu1YNTE, {from: accounts[1]});

		assert.equal(uintk2oOLfN, BigInt("2000000000000"))
		await expect(QuickTokenODfdHGi.mint.call(addresspGWpKao, uintY6Uskkr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressp6nZZw4 = accounts[5]
		const addressRqKI0ju = accounts[3]
		const QuickTokenI40plaT = await QuickToken.new(addressp6nZZw4, addressRqKI0ju, {from: "0x0000000000000000000000000000000000000001"});
		const uintkO0Cec = BigInt("1241")
		const addresshTtdHo = accounts[5]
		const addressb81IS7z = accounts[2]
		const uintb2NVGTu = BigInt("2045")
		const addressjethvvP = accounts[4]
		const boolDcLivsJ = await QuickTokenI40plaT.approve.call(addresshTtdHo, uintkO0Cec, {from: accounts[1]});
		const uintfg7J3wx = await QuickTokenI40plaT.balanceOf.call(addressb81IS7z, {from: accounts[1]});
		const booltXBKoJ7 = await QuickTokenI40plaT.approve.call(addressjethvvP, uintb2NVGTu, {from: accounts[5]});
	});

	it('test for QuickToken', async () => {
		const addressmnEDCGt = accounts[1]
		const addressUVJ6Exo = accounts[2]
		const QuickTokenWSXvVOc = await QuickToken.new(addressmnEDCGt, addressUVJ6Exo, {from: accounts[0]});
		const addressq8nAzS2 = accounts[0]
		const addresssJtqLii = accounts[0]
		const addressgsgNFzT = accounts[5]
		const addressa9NeaNJ = accounts[0]
		const uintmKg4vDB = await QuickTokenWSXvVOc.allowance.call(addresssJtqLii, addressq8nAzS2, {from: accounts[0]});
//		const addressCg5K6kn = await QuickTokenWSXvVOc.setMinter.call(addressgsgNFzT, {from: accounts[0]});
//		const uinthnWB9kU = await QuickTokenWSXvVOc.balanceOf.call(addressa9NeaNJ, {from: accounts[1]});

		assert.equal(uintmKg4vDB, BigInt("0"))
		await expect(QuickTokenWSXvVOc.setMinter.call(addressgsgNFzT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressG6GzFdY = "0x0000000000000000000000000000000000000001"
		const addressNznHpH = accounts[4]
		const QuickTokeniL4IzPB = await QuickToken.new(addressG6GzFdY, addressNznHpH, {from: accounts[0]});
		const addressbne6OtW = accounts[0]
		const uintX6u3zMk = BigInt("1983")
		const addressReWN6b4 = accounts[4]
		const uint8DoC3V = BigInt("1175")
		const addressSz250N4 = accounts[0]
		const uintDtoOnWl = BigInt("63")
		const addressRUscLQL = accounts[2]
		const addressg3qg7Q4 = accounts[1]
		const uintIIOnNOh = BigInt("787")
		const addressJWz0L9B = accounts[5]
		const addressdFzTMzV = accounts[0]
		const uintvJREHPs = await QuickTokeniL4IzPB.balanceOf.call(addressbne6OtW, {from: "0x0000000000000000000000000000000000000001"});
		const boolrEpHMSl = await QuickTokeniL4IzPB.approve.call(addressReWN6b4, uintX6u3zMk, {from: "0x0000000000000000000000000000000000000001"});
		const boolCFoydvo = await QuickTokeniL4IzPB.approve.call(addressSz250N4, uint8DoC3V, {from: accounts[2]});
//		const boolxWL8SMo = await QuickTokeniL4IzPB.transferFrom.call(addressg3qg7Q4, addressRUscLQL, uintDtoOnWl, {from: accounts[2]});
//		const boollR8jOjg = await QuickTokeniL4IzPB.transferFrom.call(addressdFzTMzV, addressJWz0L9B, uintIIOnNOh, {from: accounts[3]});

		assert.equal(boolCFoydvo, true)
		assert.equal(boolrEpHMSl, true)
		assert.equal(uintvJREHPs, BigInt("0"))
		await expect(QuickTokeniL4IzPB.transferFrom.call(addressg3qg7Q4, addressRUscLQL, uintDtoOnWl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressDSfwxpG = accounts[2]
		const addresscjxIbFq = accounts[5]
		const QuickTokenODfdHGi = await QuickToken.new(addressDSfwxpG, addresscjxIbFq, {from: accounts[1]});
		const uintSqkoB07 = BigInt("518")
		const addressg6ojuhu = accounts[1]
		const uintM7MSedX = BigInt("680")
		const addressePqilDx = "0x0000000000000000000000000000000000000001"
		const addresstP2QetY = accounts[2]
		const uintjNLtQa = BigInt("447")
		const addressbnhOXQY = accounts[4]
		const addressz0FK9z7 = accounts[1]
		const uintX7VuBb5 = BigInt("1136")
		const addressQbtLH2 = accounts[4]
//		const boolMhz2T1T = await QuickTokenODfdHGi.transfer.call(addressg6ojuhu, uintSqkoB07, {from: accounts[3]});
//		const addressbhZvKvL = await QuickTokenODfdHGi.mint.call(addressePqilDx, uintM7MSedX, {from: accounts[5]});
//		const uintk2oOLfN = await QuickTokenODfdHGi.balanceOf.call(addresstP2QetY, {from: accounts[3]});
//		const addressg2cOsm = await QuickTokenODfdHGi.mint.call(addressbnhOXQY, uintjNLtQa, {from: accounts[2]});
//		const uintnxNan7Q = await QuickTokenODfdHGi.balanceOf.call(addressz0FK9z7, {from: accounts[4]});
//		const addressXce9mc = await QuickTokenODfdHGi.mint.call(addressQbtLH2, uintX7VuBb5, {from: accounts[1]});

		await expect(QuickTokenODfdHGi.transfer.call(addressg6ojuhu, uintSqkoB07, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresshkrRBDU = accounts[3]
		const addressUWFaTjW = accounts[3]
		const QuickTokenEoqxsIE = await QuickToken.new(addresshkrRBDU, addressUWFaTjW, {from: accounts[3]});
		const addressiT6WLnK = accounts[3]
		const addressllTGD3n = accounts[4]
		const uintjNQGj39 = BigInt("1387")
		const addresshDF0JZL = "0x0000000000000000000000000000000000000000"
		const uintacQpdp = BigInt("117")
		const addressLXAabfE = accounts[5]
		const uintSnuMq92 = BigInt("0")
		const addressm45wrCL = accounts[4]
		const uintaIzDSaD = BigInt("816")
		const addressxXhiHDp = accounts[1]
		const addressPezNIR0 = accounts[4]
		const addressJl8DzUx = accounts[5]
		const uintymehHFP = await QuickTokenEoqxsIE.allowance.call(addressllTGD3n, addressiT6WLnK, {from: accounts[0]});
//		const addressuPgPpz9 = await QuickTokenEoqxsIE.mint.call(addresshDF0JZL, uintjNQGj39, {from: accounts[3]});
//		const boolvL9whKe = await QuickTokenEoqxsIE.transfer.call(addressLXAabfE, uintacQpdp, {from: accounts[3]});
//		const boolmpofsyW = await QuickTokenEoqxsIE.approve.call(addressm45wrCL, uintSnuMq92, {from: accounts[3]});
//		const bool8EA98I = await QuickTokenEoqxsIE.approve.call(addressxXhiHDp, uintaIzDSaD, {from: "0x0000000000000000000000000000000000000001"});
//		const uinthNcvhex = await QuickTokenEoqxsIE.allowance.call(addressJl8DzUx, addressPezNIR0, {from: accounts[0]});

		assert.equal(uintymehHFP, BigInt("0"))
		await expect(QuickTokenEoqxsIE.mint.call(addresshDF0JZL, uintjNQGj39, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})