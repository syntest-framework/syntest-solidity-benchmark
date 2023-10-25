const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceU02G5Ac = await Reentrance.new({from: accounts[2]});
		const addressZvEv6Kg = accounts[1]
		const uints8gkPPF = BigInt("1123")
		const uintYPfoRBq = BigInt("1760")
		const uintapvlXfI = await ReentranceU02G5Ac.balanceOf.call(addressZvEv6Kg, {from: accounts[4]});
		const uintRwTbJf = await ReentranceU02G5Ac.withdraw.call(uints8gkPPF, {from: accounts[1]});
		const uintngABBE = await ReentranceU02G5Ac.withdraw.call(uintYPfoRBq, {from: accounts[5]});

		assert.equal(uintapvlXfI, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceyvgARvs = await Reentrance.new({from: accounts[0]});
		const uintLOo2rtK = BigInt("338")
		const addressnfYGcM = accounts[4]
		const uintPjMUNar = await ReentranceyvgARvs.withdraw.call(uintLOo2rtK, {from: accounts[0]});
		const uintjHjHwjh = await ReentranceyvgARvs.balanceOf.call(addressnfYGcM, {from: accounts[2]});
		await ReentranceyvgARvs.topup.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintjHjHwjh, BigInt("0"))
		await expect(ReentranceyvgARvs.topup.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const Reentranceb2Bggq4 = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uint98uhtj = BigInt("1273")
		await Reentranceb2Bggq4.topup.call({from: accounts[3]});
		await Reentranceb2Bggq4.topup.call({from: accounts[2]});
		await Reentranceb2Bggq4.topup.call({from: accounts[1]});
		const uintr8C3Los = await Reentranceb2Bggq4.withdraw.call(uint98uhtj, {from: accounts[3]});
	});
})