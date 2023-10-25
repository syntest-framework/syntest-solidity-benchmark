const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceKq8K0wC = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDAIi99B = BigInt("1711")
		const addressVdbwwCI = accounts[0]
		const uintu4g1lQz = BigInt("530")
		const uintKGUgr3V = await ReentranceKq8K0wC.withdraw.call(uintDAIi99B, {from: accounts[3]});
		const uintEsWiUlP = await ReentranceKq8K0wC.balanceOf.call(addressVdbwwCI, {from: accounts[2]});
		await ReentranceKq8K0wC.topup.call({from: accounts[5]});
		const uintHfgRDS = await ReentranceKq8K0wC.withdraw.call(uintu4g1lQz, {from: accounts[1]});
		await ReentranceKq8K0wC.topup.call({from: accounts[2]});
	});

	it('test for Reentrance', async () => {
		const ReentranceKTVEnl2 = await Reentrance.new({from: accounts[1]});
		const uint8o1n0j = BigInt("944")
		const addressZYQFKIc = "0x0000000000000000000000000000000000000001"
		const addressUkNRQRl = accounts[0]
		const addressNf3CIVg = accounts[4]
		const uintq2z81DJ = await ReentranceKTVEnl2.withdraw.call(uint8o1n0j, {from: accounts[4]});
		const uintKBTtvc = await ReentranceKTVEnl2.balanceOf.call(addressZYQFKIc, {from: accounts[5]});
		const uintuqjtrLy = await ReentranceKTVEnl2.balanceOf.call(addressUkNRQRl, {from: accounts[4]});
		await ReentranceKTVEnl2.topup.call({from: accounts[4]});
		const uintRJcvYLW = await ReentranceKTVEnl2.balanceOf.call(addressNf3CIVg, {from: accounts[1]});

		assert.equal(uintKBTtvc, BigInt("0"))
		assert.equal(uintuqjtrLy, BigInt("0"))
		await expect(ReentranceKTVEnl2.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})