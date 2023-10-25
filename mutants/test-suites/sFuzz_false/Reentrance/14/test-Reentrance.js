const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const Reentrance7DmtsN = await Reentrance.new({from: accounts[4]});
		const uintUr8WnO3 = BigInt("9")
		const uintX93XpLY = BigInt("1673")
		const uintgJAEHTH = BigInt("1150")
		const uintQQxPJXc = await Reentrance7DmtsN.withdraw.call(uintUr8WnO3, {from: accounts[4]});
		const uintkiyRNBz = await Reentrance7DmtsN.withdraw.call(uintX93XpLY, {from: accounts[4]});
		const uinthnqyeLM = await Reentrance7DmtsN.withdraw.call(uintgJAEHTH, {from: accounts[0]});
//		await Reentrance7DmtsN.topup.call({from: accounts[1]});

		await expect(Reentrance7DmtsN.topup.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancedLHuxo = await Reentrance.new({from: accounts[2]});
		const address5LTu8s = accounts[2]
		const addressF0vEp6Z = accounts[1]
		const addressOWQPIpK = accounts[0]
		const uintg1BVyKq = await ReentrancedLHuxo.balanceOf.call(address5LTu8s, {from: accounts[1]});
//		await ReentrancedLHuxo.topup.call({from: accounts[3]});
//		const uintCuq3Y88 = await ReentrancedLHuxo.balanceOf.call(addressF0vEp6Z, {from: accounts[5]});
//		const uintxvtO42E = await ReentrancedLHuxo.balanceOf.call(addressOWQPIpK, {from: accounts[0]});

		assert.equal(uintg1BVyKq, BigInt("0"))
		await expect(ReentrancedLHuxo.topup.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceYJ9H07d = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGIs4wTH = accounts[1]
		const addresscVBtFeo = accounts[0]
		const addressohI9dt = accounts[0]
		const uintZUwmTUo = await ReentranceYJ9H07d.balanceOf.call(addressGIs4wTH, {from: accounts[3]});
		const uintuUMBqB2 = await ReentranceYJ9H07d.balanceOf.call(addresscVBtFeo, {from: accounts[2]});
		const uintH4jfP0v = await ReentranceYJ9H07d.balanceOf.call(addressohI9dt, {from: accounts[1]});
	});
})