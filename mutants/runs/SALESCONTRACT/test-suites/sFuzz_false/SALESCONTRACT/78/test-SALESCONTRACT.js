const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTHq2ZII0 = await SALESCONTRACT.new({from: accounts[4]});
		const uintLOPwxF3 = BigInt("1314")
		const uintsega7K = await SALESCONTRACTHq2ZII0._setStage.call(uintLOPwxF3, {from: accounts[1]});
		await SALESCONTRACTHq2ZII0.clearETH.call({from: accounts[1]});
		await SALESCONTRACTHq2ZII0.clearETH.call({from: accounts[4]});

		await expect(SALESCONTRACTHq2ZII0._setStage.call(uintLOPwxF3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTOqVOeJ = await SALESCONTRACT.new({from: accounts[2]});
		const uintd3q64EX = BigInt("1308")
		const addressRILPWC = accounts[3]
		const addressyy6ReF2 = accounts[3]
		const addressebCtRCY = await SALESCONTRACTOqVOeJ._setSalesPool.call(addressRILPWC, uintd3q64EX, {from: accounts[2]});
		const boolvAKjYEk = await SALESCONTRACTOqVOeJ.tokenSale.call(addressyy6ReF2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTOqVOeJ.tokenSale.call(addressyy6ReF2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTwDj5heA = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBgOJkeL = accounts[0]
		const uintscdP3Sp = BigInt("1199")
		const addresssAHdY8W = accounts[4]
		const addressrIafedS = await SALESCONTRACTwDj5heA.setToken.call(addressBgOJkeL, {from: accounts[0]});
		await SALESCONTRACTwDj5heA.ff.call({from: accounts[1]});
		const uintmSKwQdx = await SALESCONTRACTwDj5heA._setStage.call(uintscdP3Sp, {from: accounts[4]});
		await SALESCONTRACTwDj5heA.ff.call({from: accounts[1]});
		const addressxP2fa3f = await SALESCONTRACTwDj5heA.setToken.call(addresssAHdY8W, {from: accounts[0]});
		await SALESCONTRACTwDj5heA.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTOqVOeJ = await SALESCONTRACT.new({from: accounts[2]});
		const uintdTHn2T1 = BigInt("1308")
		const addressoMlpw1W = accounts[4]
		const addressjsxZxxy = accounts[3]
		const addressebCtRCY = await SALESCONTRACTOqVOeJ._setSalesPool.call(addressoMlpw1W, uintdTHn2T1, {from: accounts[2]});
		await SALESCONTRACTOqVOeJ.clearTokens.call({from: accounts[2]});
		const boolvAKjYEk = await SALESCONTRACTOqVOeJ.tokenSale.call(addressjsxZxxy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTOqVOeJ.clearTokens.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTOqVOeJ = await SALESCONTRACT.new({from: accounts[2]});
		const uintMOR9VLr = BigInt("1593")
		const uintm0s7XBv = BigInt("1324")
		const address9SCJdQ = accounts[3]
		await SALESCONTRACTOqVOeJ.ff.call({from: accounts[2]});
		const uintEpvF6Cb = await SALESCONTRACTOqVOeJ._setStage.call(uintMOR9VLr, {from: accounts[4]});
		const addressebCtRCY = await SALESCONTRACTOqVOeJ._setSalesPool.call(address9SCJdQ, uintm0s7XBv, {from: accounts[2]});

		await expect(SALESCONTRACTOqVOeJ.ff.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTVaHdbOF = await SALESCONTRACT.new({from: accounts[4]});
		const addressR5O9cE = accounts[1]
		const addressKHmMvJG = accounts[5]
		const addresspKmJwQN = accounts[5]
		const addresswlnOd4n = accounts[0]
		const addressDi8kC5o = await SALESCONTRACTVaHdbOF.setToken.call(addressR5O9cE, {from: accounts[4]});
		const addressDqZC2Hf = await SALESCONTRACTVaHdbOF.setToken.call(addressKHmMvJG, {from: accounts[4]});
		await SALESCONTRACTVaHdbOF.ff.call({from: accounts[4]});
		await SALESCONTRACTVaHdbOF.ff.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWP9IvYr = await SALESCONTRACTVaHdbOF.tokenSale.call(addresspKmJwQN, {from: accounts[4]});
		const addressC9NaR6H = await SALESCONTRACTVaHdbOF.setToken.call(addresswlnOd4n, {from: accounts[3]});

		await expect(SALESCONTRACTVaHdbOF.ff.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTOqVOeJ = await SALESCONTRACT.new({from: accounts[2]});
		const uintPMVbXBo = BigInt("1305")
		const addresszlgmZKJ = accounts[4]
		const addressebCtRCY = await SALESCONTRACTOqVOeJ._setSalesPool.call(addresszlgmZKJ, uintPMVbXBo, {from: accounts[2]});
		await SALESCONTRACTOqVOeJ.clearETH.call({from: accounts[2]});

		await expect(SALESCONTRACTOqVOeJ.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTOqVOeJ = await SALESCONTRACT.new({from: accounts[2]});
		const uintSpzKQGf = BigInt("1861")
		const uintw8SC9ZH = BigInt("1305")
		const addressYuVs6kL = accounts[4]
		const uintLwnbKbS = await SALESCONTRACTOqVOeJ._setStage.call(uintSpzKQGf, {from: accounts[2]});
		await SALESCONTRACTOqVOeJ.ff.call({from: accounts[2]});
		const addressebCtRCY = await SALESCONTRACTOqVOeJ._setSalesPool.call(addressYuVs6kL, uintw8SC9ZH, {from: accounts[2]});

		await expect(SALESCONTRACTOqVOeJ.ff.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})