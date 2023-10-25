const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentrancejBxK6cF = await Reentrance.new({from: accounts[1]});
		const uintmctCmTw = BigInt("1098")
		const uintyVn7YMz = await ReentrancejBxK6cF.withdraw.call(uintmctCmTw, {from: accounts[1]});
		await ReentrancejBxK6cF.topup.call({from: accounts[1]});
		await ReentrancejBxK6cF.topup.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ReentrancejBxK6cF.topup.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceWkRUveM = await Reentrance.new({from: accounts[3]});
		const addressvjSGcqW = "0x0000000000000000000000000000000000000001"
		const uintXy5OKqk = BigInt("1181")
		const uintsFEV26 = BigInt("1148")
		const uintKIKlhxL = await ReentranceWkRUveM.balanceOf.call(addressvjSGcqW, {from: accounts[4]});
		await ReentranceWkRUveM.topup.call({from: accounts[0]});
		await ReentranceWkRUveM.topup.call({from: accounts[5]});
		await ReentranceWkRUveM.topup.call({from: accounts[0]});
		const uintPVDu4SV = await ReentranceWkRUveM.withdraw.call(uintXy5OKqk, {from: accounts[0]});
		const uintadcNjQx = await ReentranceWkRUveM.withdraw.call(uintsFEV26, {from: accounts[2]});

		assert.equal(uintKIKlhxL, BigInt("0"))
		await expect(ReentranceWkRUveM.topup.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancefAjcxku = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdJfGn9j = BigInt("1242")
		const uintMOp5rp4 = BigInt("1586")
		const addressiKjGops = accounts[1]
		const uintDCdX7g1 = await ReentrancefAjcxku.withdraw.call(uintdJfGn9j, {from: accounts[1]});
		const uintETqxMVX = await ReentrancefAjcxku.withdraw.call(uintMOp5rp4, {from: accounts[4]});
		const uintBSJmvP = await ReentrancefAjcxku.balanceOf.call(addressiKjGops, {from: "0x0000000000000000000000000000000000000001"});
		await ReentrancefAjcxku.topup.call({from: accounts[0]});
	});

	it('test for Reentrance', async () => {
		const ReentrancejBxK6cF = await Reentrance.new({from: accounts[1]});
		const uintbw4aYJ1 = BigInt("0")
		const uintdHRJOOU = BigInt("1726")
		const uintvGRhDg3 = await ReentrancejBxK6cF.withdraw.call(uintbw4aYJ1, {from: accounts[3]});
		await ReentrancejBxK6cF.topup.call({from: accounts[0]});
		const uintY3Sc81e = await ReentrancejBxK6cF.withdraw.call(uintdHRJOOU, {from: accounts[2]});
		await ReentrancejBxK6cF.topup.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ReentrancejBxK6cF.topup.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})