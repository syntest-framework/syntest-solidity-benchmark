const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyBUfAPO0 = await HungryHoody.new({from: accounts[4]});
		const uintSuvRqgt = BigInt("1944")
		const addressSjzKiPN = accounts[0]
		const uintf33GRSn = BigInt("578")
		const uintiVSr3R = BigInt("1254")
//		const boolLhHCnrX = await HungryHoodyBUfAPO0.transfer.call(addressSjzKiPN, uintSuvRqgt, {from: accounts[5]});
//		const uintR6pT1a = await HungryHoodyBUfAPO0.safeMul.call(uintiVSr3R, uintf33GRSn, {from: accounts[2]});

		await expect(HungryHoodyBUfAPO0.transfer.call(addressSjzKiPN, uintSuvRqgt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyudlY6EH = await HungryHoody.new({from: accounts[1]});
		const uintajVfAn9 = BigInt("919")
		const uintbuDSa5B = BigInt("1082")
		const addresskWKnzKG = accounts[5]
		const addressRtHWWRr = accounts[2]
		const uint6TFVx8 = await HungryHoodyudlY6EH.totalSupply.call({from: accounts[4]});
		const uintxHT0i3Y = await HungryHoodyudlY6EH.safeDiv.call(uintbuDSa5B, uintajVfAn9, {from: accounts[3]});
		const uint8w6x6N = await HungryHoodyudlY6EH.balanceOf.call(addresskWKnzKG, {from: accounts[2]});
		const uintbAjS4xS = await HungryHoodyudlY6EH.balanceOf.call(addressRtHWWRr, {from: accounts[4]});

		assert.equal(uint6TFVx8, BigInt("25000000000000000000"))
		assert.equal(uint8w6x6N, BigInt("0"))
		assert.equal(uintbAjS4xS, BigInt("0"))
		assert.equal(uintxHT0i3Y, BigInt("1"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyaFaPYm6 = await HungryHoody.new({from: accounts[1]});
		const uintFn1tt8D = BigInt("547")
		const addressELTF5Hq = "0x0000000000000000000000000000000000000001"
		const uintHURkrDj = BigInt("2038")
		const uint261VHm = BigInt("308")
		const uint21w9lX = BigInt("1134")
		const uintldvxoqe = BigInt("1526")
		const boolmHvO0tr = await HungryHoodyaFaPYm6.transfer.call(addressELTF5Hq, uintFn1tt8D, {from: accounts[1]});
		const uintmrOxDM6 = await HungryHoodyaFaPYm6.safeAdd.call(uint261VHm, uintHURkrDj, {from: accounts[3]});
		const uintUYgvVgH = await HungryHoodyaFaPYm6.safeDiv.call(uintldvxoqe, uint21w9lX, {from: accounts[0]});

		assert.equal(boolmHvO0tr, true)
		assert.equal(uintUYgvVgH, BigInt("1"))
		assert.equal(uintmrOxDM6, BigInt("2346"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoody1cxiBh = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzuGHLts = BigInt("447")
		const addressIjd6lGp = accounts[0]
		const uintUtgtPj = BigInt("1028")
		const addressDu6GKGK = accounts[2]
		const boolit1kD3Q = await HungryHoody1cxiBh.approve.call(addressIjd6lGp, uintzuGHLts, {from: accounts[0]});
		const booljETCKdA = await HungryHoody1cxiBh.approve.call(addressDu6GKGK, uintUtgtPj, {from: accounts[0]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyV6pade1 = await HungryHoody.new({from: accounts[3]});
		const addressbE595DD = accounts[4]
		const uintgAC5bZR = BigInt("1347")
		const addressFgPNOwx = accounts[1]
		const uintubIsWeW = await HungryHoodyV6pade1.balanceOf.call(addressbE595DD, {from: accounts[2]});
		const boolkmzKHj6 = await HungryHoodyV6pade1.approve.call(addressFgPNOwx, uintgAC5bZR, {from: accounts[2]});

		assert.equal(boolkmzKHj6, true)
		assert.equal(uintubIsWeW, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyuXu6MZ6 = await HungryHoody.new({from: accounts[3]});
		const uinttvOQEiE = BigInt("585")
		const uintyq84zt = BigInt("2026")
		const uintKag20Sy = BigInt("377")
		const uintjQ3Q1Sv = BigInt("1623")
		const uintD8J34fL = BigInt("60")
		const addressEZIlaz9 = accounts[3]
		const addressU1R9Ayf = accounts[2]
		const uintfyLvLgr = await HungryHoodyuXu6MZ6.safeMul.call(uintyq84zt, uinttvOQEiE, {from: accounts[5]});
		const uintwRby35Z = await HungryHoodyuXu6MZ6.safeSub.call(uintjQ3Q1Sv, uintKag20Sy, {from: accounts[1]});
//		const boollDJkApF = await HungryHoodyuXu6MZ6.transferFrom.call(addressU1R9Ayf, addressEZIlaz9, uintD8J34fL, {from: accounts[4]});

		assert.equal(uintfyLvLgr, BigInt("1185210"))
		assert.equal(uintwRby35Z, BigInt("1246"))
		await expect(HungryHoodyuXu6MZ6.transferFrom.call(addressU1R9Ayf, addressEZIlaz9, uintD8J34fL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyWFl2AIQ = await HungryHoody.new({from: accounts[4]});
		const addresspsdtFj4 = accounts[4]
		const addressg80kJBS = accounts[3]
		const uintmPVVphL = await HungryHoodyWFl2AIQ.totalSupply.call({from: accounts[1]});
		const uintap0ewnm = await HungryHoodyWFl2AIQ.allowance.call(addressg80kJBS, addresspsdtFj4, {from: accounts[0]});

		assert.equal(uintap0ewnm, BigInt("0"))
		assert.equal(uintmPVVphL, BigInt("25000000000000000000"))
	});
})