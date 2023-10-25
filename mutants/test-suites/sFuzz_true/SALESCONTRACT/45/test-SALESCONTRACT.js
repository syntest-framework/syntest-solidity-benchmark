const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTANe70JP = await SALESCONTRACT.new({from: accounts[0]});
		const uintVdcvMiJ = BigInt("1069")
		const addressP4BkxrC = accounts[2]
		const uintZji51XQ = BigInt("385")
		const addressrygwzx4 = accounts[4]
		const uintJiQSBYE = await SALESCONTRACTANe70JP._setStage.call(uintVdcvMiJ, {from: accounts[0]});
//		const addressqEosu4X = await SALESCONTRACTANe70JP.setToken.call(addressP4BkxrC, {from: accounts[1]});
//		await SALESCONTRACTANe70JP.ff.call({from: accounts[2]});
//		await SALESCONTRACTANe70JP.clearETH.call({from: accounts[0]});
//		const uintvcYO0Vy = await SALESCONTRACTANe70JP._setStage.call(uintZji51XQ, {from: accounts[1]});
//		const addressdcQVxS = await SALESCONTRACTANe70JP.setToken.call(addressrygwzx4, {from: accounts[3]});

		await expect(SALESCONTRACTANe70JP.setToken.call(addressP4BkxrC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTKIaYFWT = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgTZXJA8 = BigInt("920")
		const addresshFwYzZC = "0x0000000000000000000000000000000000000001"
		const uint208Fj3 = BigInt("1530")
		const addresspSDcy9i = accounts[2]
		const addresswNuMcno = await SALESCONTRACTKIaYFWT._setSalesPool.call(addresshFwYzZC, uintgTZXJA8, {from: accounts[3]});
		const addressiCqIIu = await SALESCONTRACTKIaYFWT._setSalesPool.call(addresspSDcy9i, uint208Fj3, {from: accounts[5]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTyJKT6k2 = await SALESCONTRACT.new({from: accounts[3]});
		const uintJMnewJr = BigInt("1053")
		const addressTgE7iRp = accounts[0]
		const addressZtJmfRs = accounts[2]
		const uintt7K9BvJ = BigInt("392")
		const addressRoLu2HS = accounts[1]
		const addressxzMhFY = await SALESCONTRACTyJKT6k2._setSalesPool.call(addressTgE7iRp, uintJMnewJr, {from: accounts[3]});
//		const addressknDZ82b = await SALESCONTRACTyJKT6k2.setToken.call(addressZtJmfRs, {from: accounts[5]});
//		const addressHSy5VBg = await SALESCONTRACTyJKT6k2._setSalesPool.call(addressRoLu2HS, uintt7K9BvJ, {from: accounts[2]});
//		await SALESCONTRACTyJKT6k2.clearTokens.call({from: accounts[2]});
//		await SALESCONTRACTyJKT6k2.ff.call({from: accounts[1]});
//		await SALESCONTRACTyJKT6k2.clearETH.call({from: accounts[5]});

		await expect(SALESCONTRACTyJKT6k2.setToken.call(addressZtJmfRs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTunyKdJg = await SALESCONTRACT.new({from: accounts[1]});
		const addressMO4yFLf = "0x0000000000000000000000000000000000000001"
		const address3atNqB = accounts[4]
		const addressTs09EQi = "0x0000000000000000000000000000000000000001"
//		const booltpoDyvl = await SALESCONTRACTunyKdJg.tokenSale.call(addressMO4yFLf, {from: "0x0000000000000000000000000000000000000001"});
//		const addressIzi820F = await SALESCONTRACTunyKdJg.setToken.call(address3atNqB, {from: accounts[4]});
//		const boolJbQBQx = await SALESCONTRACTunyKdJg.tokenSale.call(addressTs09EQi, {from: accounts[4]});
//		await SALESCONTRACTunyKdJg.ff.call({from: accounts[2]});
//		await SALESCONTRACTunyKdJg.ff.call({from: accounts[3]});

		await expect(SALESCONTRACTunyKdJg.tokenSale.call(addressMO4yFLf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTQj0PrKR = await SALESCONTRACT.new({from: accounts[5]});
		const addresszO7apmT = accounts[1]
		const addresskaDRj5G = accounts[4]
//		await SALESCONTRACTQj0PrKR.clearTokens.call({from: accounts[5]});
//		const boolYbSural = await SALESCONTRACTQj0PrKR.tokenSale.call(addresszO7apmT, {from: accounts[4]});
//		const addressiiYlk5I = await SALESCONTRACTQj0PrKR.setToken.call(addresskaDRj5G, {from: accounts[5]});
//		await SALESCONTRACTQj0PrKR.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTQj0PrKR.clearTokens.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTkFNwM2a = await SALESCONTRACT.new({from: accounts[0]});
		const addresshQgs7w2 = accounts[3]
//		await SALESCONTRACTkFNwM2a.clearETH.call({from: accounts[0]});
//		const boolsSjP3b5 = await SALESCONTRACTkFNwM2a.tokenSale.call(addresshQgs7w2, {from: "0x0000000000000000000000000000000000000001"});
//		await SALESCONTRACTkFNwM2a.clearTokens.call({from: accounts[0]});

		await expect(SALESCONTRACTkFNwM2a.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTWhfTfd1 = await SALESCONTRACT.new({from: accounts[4]});
		const uintQsgZAhh = BigInt("628")
//		await SALESCONTRACTWhfTfd1.ff.call({from: accounts[1]});
//		await SALESCONTRACTWhfTfd1.clearTokens.call({from: accounts[3]});
//		await SALESCONTRACTWhfTfd1.clearTokens.call({from: accounts[1]});
//		const uintqtOZx0H = await SALESCONTRACTWhfTfd1._setStage.call(uintQsgZAhh, {from: accounts[0]});

		await expect(SALESCONTRACTWhfTfd1.ff.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTTiCyw4 = await SALESCONTRACT.new({from: accounts[0]});
		const addresslHsQbah = accounts[1]
		const addressKyAI1xY = accounts[0]
		const uintvVgid5 = BigInt("664")
		const addressiHHg77t = accounts[0]
		const addressFrFpsih = accounts[4]
		const addressNOJacP = await SALESCONTRACTTiCyw4.setToken.call(addresslHsQbah, {from: accounts[0]});
//		const addresshX6l37F = await SALESCONTRACTTiCyw4.setToken.call(addressKyAI1xY, {from: accounts[1]});
//		const addresssWWI2TF = await SALESCONTRACTTiCyw4._setSalesPool.call(addressiHHg77t, uintvVgid5, {from: accounts[5]});
//		const addressadqEjOz = await SALESCONTRACTTiCyw4.setToken.call(addressFrFpsih, {from: accounts[3]});

		await expect(SALESCONTRACTTiCyw4.setToken.call(addressKyAI1xY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})