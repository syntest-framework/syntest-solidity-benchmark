const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceiXS2pr3 = await Reentrance.new({from: accounts[4]});
		const addressRvsWkbL = accounts[0]
		const addressSv7n6VG = accounts[4]
		const addresscbtfe9J = "0x0000000000000000000000000000000000000001"
		const uintWmvOkgr = await ReentranceiXS2pr3.balanceOf.call(addressRvsWkbL, {from: accounts[3]});
		const uintE1XKSJJ = await ReentranceiXS2pr3.balanceOf.call(addressSv7n6VG, {from: accounts[2]});
		const uintjeIh0x = await ReentranceiXS2pr3.balanceOf.call(addresscbtfe9J, {from: accounts[2]});

		assert.equal(uintE1XKSJJ, BigInt("0"))
		assert.equal(uintWmvOkgr, BigInt("0"))
		assert.equal(uintjeIh0x, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceM1GOIBg = await Reentrance.new({from: accounts[2]});
		const addressxnVaFPn = accounts[0]
		const uinti1WyA8L = BigInt("824")
		const addressTxH0Pz2 = accounts[2]
		const uintMIn52CG = await ReentranceM1GOIBg.balanceOf.call(addressxnVaFPn, {from: accounts[2]});
		const uintMadyHe = await ReentranceM1GOIBg.withdraw.call(uinti1WyA8L, {from: accounts[4]});
		const uintEOjzEZ = await ReentranceM1GOIBg.balanceOf.call(addressTxH0Pz2, {from: accounts[4]});

		assert.equal(uintEOjzEZ, BigInt("0"))
		assert.equal(uintMIn52CG, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const Reentrancerl0k2Nn = await Reentrance.new({from: accounts[2]});
		const uintpShtpV = BigInt("451")
		await Reentrancerl0k2Nn.topup.call({from: "0x0000000000000000000000000000000000000001"});
		const uintJ92eBIW = await Reentrancerl0k2Nn.withdraw.call(uintpShtpV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Reentrancerl0k2Nn.topup.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceN6Itsm = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjyLOFyX = BigInt("1679")
		await ReentranceN6Itsm.topup.call({from: accounts[1]});
		const uintToEDaq = await ReentranceN6Itsm.withdraw.call(uintjyLOFyX, {from: accounts[3]});
	});
})