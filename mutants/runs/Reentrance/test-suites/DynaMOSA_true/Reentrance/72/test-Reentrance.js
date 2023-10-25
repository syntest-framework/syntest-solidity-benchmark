const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const Reentrance6JmcAc = await Reentrance.new({from: accounts[3]});
		const uintmLNh4L7 = BigInt("205")
		const uintHPDG7fg = BigInt("1285")
		const addressg2J7HQ0 = accounts[2]
		const uintKZroDUj = await Reentrance6JmcAc.withdraw.call(uintmLNh4L7, {from: accounts[1]});
		const uintyczpgOh = await Reentrance6JmcAc.withdraw.call(uintHPDG7fg, {from: accounts[0]});
		const uintiSrueS0 = await Reentrance6JmcAc.balanceOf.call(addressg2J7HQ0, {from: accounts[5]});

		assert.equal(uintiSrueS0, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceuzuU8GB = await Reentrance.new({from: accounts[1]});
		const uinteBn2589 = BigInt("1404")
		const uintc1jddbn = BigInt("1006")
		const uintwDtRSiX = BigInt("627")
		const uintkAswuMK = await ReentranceuzuU8GB.withdraw.call(uinteBn2589, {from: accounts[2]});
		const uintlxq7iSQ = await ReentranceuzuU8GB.withdraw.call(uintc1jddbn, {from: accounts[4]});
		const uintPIhHJ82 = await ReentranceuzuU8GB.withdraw.call(uintwDtRSiX, {from: accounts[4]});
		await ReentranceuzuU8GB.topup.call({from: accounts[5]});

		await expect(ReentranceuzuU8GB.topup.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceLv0v5jK = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjb97pYp = BigInt("231")
		const addressSxkrJLG = accounts[4]
		const uintPoqrjoA = BigInt("1033")
		const uintg5A7TC = BigInt("373")
		const uintrbIlf0M = await ReentranceLv0v5jK.withdraw.call(uintjb97pYp, {from: accounts[3]});
		const uinthGfhdsX = await ReentranceLv0v5jK.balanceOf.call(addressSxkrJLG, {from: accounts[3]});
		const uintxsm1Ne = await ReentranceLv0v5jK.withdraw.call(uintPoqrjoA, {from: "0x0000000000000000000000000000000000000001"});
		const uintIRnFYjb = await ReentranceLv0v5jK.withdraw.call(uintg5A7TC, {from: accounts[0]});
	});
})