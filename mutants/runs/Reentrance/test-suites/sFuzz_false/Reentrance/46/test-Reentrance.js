const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const Reentrancenp4XPG9 = await Reentrance.new({from: accounts[3]});
		const uintFPVWJ1z = BigInt("2024")
		const addressG6XUFVS = accounts[1]
		const addressZ2ckZ0 = accounts[0]
		const uintTrGI9hQ = await Reentrancenp4XPG9.withdraw.call(uintFPVWJ1z, {from: accounts[4]});
		await Reentrancenp4XPG9.topup.call({from: "0x0000000000000000000000000000000000000001"});
		const uintYOGX4P2 = await Reentrancenp4XPG9.balanceOf.call(addressG6XUFVS, {from: accounts[3]});
		const uintC2TDXxA = await Reentrancenp4XPG9.balanceOf.call(addressZ2ckZ0, {from: accounts[4]});

		await expect(Reentrancenp4XPG9.topup.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceoTNqr0d = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKk8bsoO = accounts[1]
		const uintORH8s6u = BigInt("859")
		const addresscw1Za7h = accounts[2]
		const uintVfTjf8o = await ReentranceoTNqr0d.balanceOf.call(addressKk8bsoO, {from: accounts[4]});
		const uintEmT4p4M = await ReentranceoTNqr0d.withdraw.call(uintORH8s6u, {from: accounts[1]});
		await ReentranceoTNqr0d.topup.call({from: accounts[4]});
		const uintBQH3QJ4 = await ReentranceoTNqr0d.balanceOf.call(addresscw1Za7h, {from: accounts[3]});
	});
})