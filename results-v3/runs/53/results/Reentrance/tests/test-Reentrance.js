const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceFMNjmgs = await Reentrance.new({from: accounts[3]});
		const uintSAqGSjl = BigInt("1909")
		const uintStzK2tv = BigInt("1776")
		const uintoZlBbgq = await ReentranceFMNjmgs.withdraw.call(uintSAqGSjl, {from: accounts[4]});
		const uintrtAwfO = await ReentranceFMNjmgs.withdraw.call(uintStzK2tv, {from: accounts[2]});
		await ReentranceFMNjmgs.topup.call({from: accounts[2]});

		await expect(ReentranceFMNjmgs.topup.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancexXrEaUs = await Reentrance.new({from: accounts[1]});
		const addressTNoUxH9 = accounts[3]
		const addressZ3KT5W0 = accounts[1]
		const uintyTz8jDJ = BigInt("793")
		const addressYvjnVUe = accounts[2]
		const uintGigE1N = await ReentrancexXrEaUs.balanceOf.call(addressTNoUxH9, {from: accounts[5]});
		const uintCFuDzon = await ReentrancexXrEaUs.balanceOf.call(addressZ3KT5W0, {from: accounts[2]});
		const uintg5XDKHt = await ReentrancexXrEaUs.withdraw.call(uintyTz8jDJ, {from: accounts[0]});
		const uintVYVRNx = await ReentrancexXrEaUs.balanceOf.call(addressYvjnVUe, {from: accounts[3]});

		assert.equal(uintCFuDzon, BigInt("0"))
		assert.equal(uintGigE1N, BigInt("0"))
		assert.equal(uintVYVRNx, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceFe6ucs1 = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstNpjcIf = accounts[2]
		const uintoCDhIDn = BigInt("939")
		const uintwgEDcjp = BigInt("1781")
		const addressUhnp7Jl = accounts[1]
		const uintNb3gfze = BigInt("1848")
		const uintsiElICI = await ReentranceFe6ucs1.balanceOf.call(addresstNpjcIf, {from: accounts[2]});
		const uintfFt3Oof = await ReentranceFe6ucs1.withdraw.call(uintoCDhIDn, {from: accounts[0]});
		const uintVhcSc72 = await ReentranceFe6ucs1.withdraw.call(uintwgEDcjp, {from: accounts[1]});
		const uintTZaCK6X = await ReentranceFe6ucs1.balanceOf.call(addressUhnp7Jl, {from: accounts[2]});
		const uintTeilWHQ = await ReentranceFe6ucs1.withdraw.call(uintNb3gfze, {from: accounts[2]});
	});

	it('test for Reentrance', async () => {
		const ReentrancedX6SKlw = await Reentrance.new({from: accounts[2]});
		const uintCKAMUNa = BigInt("0")
		const uintsGb6DPc = await ReentrancedX6SKlw.withdraw.call(uintCKAMUNa, {from: "0x0000000000000000000000000000000000000001"});
		await ReentrancedX6SKlw.topup.call({from: accounts[3]});

		await expect(ReentrancedX6SKlw.topup.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})