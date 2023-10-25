const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyQYrxiab = await HungryHoody.new({from: accounts[3]});
		const uint2mxGZQ = BigInt("1199")
		const uintYpcLz8a = BigInt("312")
		const addressdypUiv8 = accounts[2]
		const addressRDT61FX = accounts[0]
		const addressdCvYk91 = accounts[3]
		const uintpn6iCSN = BigInt("1777")
		const addressq9DK0VS = accounts[2]
		const addressmiR7zZg = accounts[2]
		const uintnIaLKGL = await HungryHoodyQYrxiab.safeMul.call(uintYpcLz8a, uint2mxGZQ, {from: accounts[0]});
		const uintlOEoQpL = await HungryHoodyQYrxiab.allowance.call(addressRDT61FX, addressdypUiv8, {from: accounts[1]});
		const uintqKzOccC = await HungryHoodyQYrxiab.totalSupply.call({from: accounts[4]});
		const uintTklifSM = await HungryHoodyQYrxiab.balanceOf.call(addressdCvYk91, {from: accounts[5]});
//		const boolLyTuosj = await HungryHoodyQYrxiab.transferFrom.call(addressmiR7zZg, addressq9DK0VS, uintpn6iCSN, {from: accounts[3]});

		assert.equal(uintTklifSM, BigInt("25000000000000000000"))
		assert.equal(uintlOEoQpL, BigInt("0"))
		assert.equal(uintnIaLKGL, BigInt("374088"))
		assert.equal(uintqKzOccC, BigInt("25000000000000000000"))
		await expect(HungryHoodyQYrxiab.transferFrom.call(addressmiR7zZg, addressq9DK0VS, uintpn6iCSN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyJpgRT1x = await HungryHoody.new({from: accounts[4]});
		const uintaZvszY = BigInt("1931")
		const uintI91Lj5 = BigInt("189")
		const uinttSwUikW = BigInt("163")
		const uintcbBZPbd = BigInt("982")
		const uintt8iWXqB = BigInt("561")
		const addressEZoWlzD = accounts[1]
		const uintAXKXW9 = BigInt("580")
		const addressIDOy3WR = accounts[5]
		const uintRHXPJ3l = await HungryHoodyJpgRT1x.safeMul.call(uintI91Lj5, uintaZvszY, {from: accounts[3]});
		const uintS70TwcG = await HungryHoodyJpgRT1x.safeAdd.call(uintcbBZPbd, uinttSwUikW, {from: accounts[4]});
		const boollQGiAQP = await HungryHoodyJpgRT1x.transfer.call(addressEZoWlzD, uintt8iWXqB, {from: accounts[4]});
//		const boolEjJtfvP = await HungryHoodyJpgRT1x.transfer.call(addressIDOy3WR, uintAXKXW9, {from: accounts[1]});

		assert.equal(boollQGiAQP, true)
		assert.equal(uintRHXPJ3l, BigInt("364959"))
		assert.equal(uintS70TwcG, BigInt("1145"))
		await expect(HungryHoodyJpgRT1x.transfer.call(addressIDOy3WR, uintAXKXW9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyVZOglBt = await HungryHoody.new({from: accounts[3]});
		const uintSaza8SB = BigInt("541")
		const addressyKZNvP5 = accounts[5]
		const uintfgqHVSF = BigInt("1587")
		const addressdpqgoMZ = accounts[4]
		const addressWr669w4 = "0x0000000000000000000000000000000000000001"
		const uintXG4ESIA = BigInt("184")
		const uintQzfwIxP = BigInt("1428")
		const uintqCS3bXL = BigInt("800")
		const uintZ0f77H = BigInt("1844")
		const uintRxbEBFN = BigInt("854")
		const uintxYt4Uth = BigInt("2041")
		const boolSrvbSjs = await HungryHoodyVZOglBt.approve.call(addressyKZNvP5, uintSaza8SB, {from: accounts[1]});
//		const boollmzylB = await HungryHoodyVZOglBt.transferFrom.call(addressWr669w4, addressdpqgoMZ, uintfgqHVSF, {from: accounts[0]});
//		const uintIMBmHfF = await HungryHoodyVZOglBt.safeAdd.call(uintQzfwIxP, uintXG4ESIA, {from: accounts[0]});
//		const uintz5OaNob = await HungryHoodyVZOglBt.totalSupply.call({from: accounts[1]});
//		const uintsxBq92d = await HungryHoodyVZOglBt.safeDiv.call(uintZ0f77H, uintqCS3bXL, {from: accounts[1]});
//		const uintN4xG9Ul = await HungryHoodyVZOglBt.safeAdd.call(uintxYt4Uth, uintRxbEBFN, {from: accounts[0]});

		assert.equal(boolSrvbSjs, true)
		await expect(HungryHoodyVZOglBt.transferFrom.call(addressWr669w4, addressdpqgoMZ, uintfgqHVSF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyrtII48x = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyEE4kjA = BigInt("156")
		const addressvPsdBxL = accounts[3]
		const address8ZJWsh = accounts[1]
		const addressRZYfruk = accounts[2]
		const uintmTYbKRI = BigInt("1702")
		const uintmrtdm1b = BigInt("795")
		const uinthhPzAgm = BigInt("568")
		const uintfxQ5GGU = BigInt("45")
		const boollR6kere = await HungryHoodyrtII48x.approve.call(addressvPsdBxL, uintyEE4kjA, {from: accounts[4]});
		const uintTBRaIFO = await HungryHoodyrtII48x.allowance.call(addressRZYfruk, address8ZJWsh, {from: accounts[4]});
		const uintlyxniqH = await HungryHoodyrtII48x.totalSupply.call({from: accounts[0]});
		const uintRBvI1VP = await HungryHoodyrtII48x.safeDiv.call(uintmrtdm1b, uintmTYbKRI, {from: accounts[5]});
		const uintMN2Hlzc = await HungryHoodyrtII48x.safeAdd.call(uintfxQ5GGU, uinthhPzAgm, {from: "0x0000000000000000000000000000000000000001"});
	});
})