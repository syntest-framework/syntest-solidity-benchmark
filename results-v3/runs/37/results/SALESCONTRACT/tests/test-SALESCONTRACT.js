const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTsQR44q8 = await SALESCONTRACT.new({from: accounts[1]});
		await SALESCONTRACTsQR44q8.ff.call({from: accounts[3]});
		await SALESCONTRACTsQR44q8.ff.call({from: accounts[3]});

		await expect(SALESCONTRACTsQR44q8.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTbj5EoL = await SALESCONTRACT.new({from: accounts[3]});
		const addressFxHWQ9l = accounts[3]
		const addresszC71uXt = await SALESCONTRACTbj5EoL.setToken.call(addressFxHWQ9l, {from: accounts[0]});
		await SALESCONTRACTbj5EoL.ff.call({from: accounts[3]});
		await SALESCONTRACTbj5EoL.clearTokens.call({from: accounts[1]});

		await expect(SALESCONTRACTbj5EoL.setToken.call(addressFxHWQ9l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTA7XL7i3 = await SALESCONTRACT.new({from: accounts[3]});
		const addressXI4yhfx = accounts[2]
		const uintbWJL6kW = BigInt("1315")
		const addressLZBp4wX = accounts[0]
		const boolFRFf9f = await SALESCONTRACTA7XL7i3.tokenSale.call(addressXI4yhfx, {from: accounts[2]});
		await SALESCONTRACTA7XL7i3.ff.call({from: accounts[2]});
		const addresslEliibk = await SALESCONTRACTA7XL7i3._setSalesPool.call(addressLZBp4wX, uintbWJL6kW, {from: accounts[3]});

		await expect(SALESCONTRACTA7XL7i3.tokenSale.call(addressXI4yhfx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTosRuFhY = await SALESCONTRACT.new({from: accounts[0]});
		const uintbVZoUsU = BigInt("1270")
		const addresstjtTcP = "0x0000000000000000000000000000000000000001"
		await SALESCONTRACTosRuFhY.clearTokens.call({from: accounts[0]});
		const uintfv3PAhN = await SALESCONTRACTosRuFhY._setStage.call(uintbVZoUsU, {from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTosRuFhY.clearTokens.call({from: accounts[0]});
		const addressqUPRMmi = await SALESCONTRACTosRuFhY.setToken.call(addresstjtTcP, {from: accounts[5]});

		await expect(SALESCONTRACTosRuFhY.clearTokens.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTrGfwViO = await SALESCONTRACT.new({from: accounts[3]});
		const uintnxau8C = BigInt("877")
		const addressfEbzmXz = accounts[4]
		const addressbA8Pa2R = accounts[1]
		const uintglVGb4R = BigInt("206")
		const addressX76dgSX = accounts[2]
		const addresshYvhdIK = accounts[1]
		const addressCuvKeUZ = await SALESCONTRACTrGfwViO._setSalesPool.call(addressfEbzmXz, uintnxau8C, {from: accounts[3]});
		const boolK0HBr1y = await SALESCONTRACTrGfwViO.tokenSale.call(addressbA8Pa2R, {from: accounts[4]});
		const addressQg8r3Pp = await SALESCONTRACTrGfwViO._setSalesPool.call(addressX76dgSX, uintglVGb4R, {from: accounts[2]});
		await SALESCONTRACTrGfwViO.clearTokens.call({from: accounts[4]});
		const boolVzB2MQf = await SALESCONTRACTrGfwViO.tokenSale.call(addresshYvhdIK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTrGfwViO.tokenSale.call(addressbA8Pa2R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTA7XL7i3 = await SALESCONTRACT.new({from: accounts[3]});
		const addresssirwuT = accounts[3]
		const addressdmDk1aC = accounts[1]
		const addressFQ5OhAl = accounts[4]
		const uintftzZT55 = BigInt("1315")
		const addressTyU8wa = accounts[0]
		const addressQdFCnWR = accounts[0]
		const addressGMaSQwB = await SALESCONTRACTA7XL7i3.setToken.call(addresssirwuT, {from: accounts[3]});
		const addressrII1w57 = await SALESCONTRACTA7XL7i3.setToken.call(addressdmDk1aC, {from: accounts[1]});
		const boolFRFf9f = await SALESCONTRACTA7XL7i3.tokenSale.call(addressFQ5OhAl, {from: accounts[2]});
		const addresslEliibk = await SALESCONTRACTA7XL7i3._setSalesPool.call(addressTyU8wa, uintftzZT55, {from: accounts[3]});
		const boolxsNQXvs = await SALESCONTRACTA7XL7i3.tokenSale.call(addressQdFCnWR, {from: accounts[2]});

		await expect(SALESCONTRACTA7XL7i3.setToken.call(addressdmDk1aC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTXB3H72t = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrFX2B5 = accounts[3]
		const uintRY9k494 = BigInt("1242")
		await SALESCONTRACTXB3H72t.clearETH.call({from: accounts[2]});
		const addressMs1gaBO = await SALESCONTRACTXB3H72t.setToken.call(addressrFX2B5, {from: accounts[0]});
		await SALESCONTRACTXB3H72t.ff.call({from: accounts[4]});
		const uintSBWRqIo = await SALESCONTRACTXB3H72t._setStage.call(uintRY9k494, {from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTA7XL7i3 = await SALESCONTRACT.new({from: accounts[3]});
		const uintmJbJF15 = BigInt("1313")
		const addressEm9ipe4 = accounts[0]
		await SALESCONTRACTA7XL7i3.clearETH.call({from: accounts[3]});
		const addresslEliibk = await SALESCONTRACTA7XL7i3._setSalesPool.call(addressEm9ipe4, uintmJbJF15, {from: accounts[3]});
		await SALESCONTRACTA7XL7i3.clearETH.call({from: accounts[1]});

		await expect(SALESCONTRACTA7XL7i3.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTCpud4RB = await SALESCONTRACT.new({from: accounts[2]});
		const uintziXnIQF = BigInt("1134")
		const addressLonNVG5 = accounts[0]
		const uintpbByn1T = BigInt("145")
		const uintc5qnBhE = BigInt("273")
		const addressSs28qmJ = accounts[0]
		const uintNeEJdbZ = await SALESCONTRACTCpud4RB._setStage.call(uintziXnIQF, {from: accounts[2]});
		await SALESCONTRACTCpud4RB.ff.call({from: accounts[0]});
		const addressNX4aifk = await SALESCONTRACTCpud4RB.setToken.call(addressLonNVG5, {from: accounts[4]});
		const uintHHnxBWW = await SALESCONTRACTCpud4RB._setStage.call(uintpbByn1T, {from: accounts[1]});
		await SALESCONTRACTCpud4RB.ff.call({from: accounts[0]});
		const addressljOLw6J = await SALESCONTRACTCpud4RB._setSalesPool.call(addressSs28qmJ, uintc5qnBhE, {from: accounts[0]});

		await expect(SALESCONTRACTCpud4RB.ff.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})