const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceBpkrO11 = await Reentrance.new({from: accounts[3]});
		const uintZFWHcY = BigInt("738")
//		await ReentranceBpkrO11.topup.call({from: "0x0000000000000000000000000000000000000001"});
//		const uinthhgqYL = await ReentranceBpkrO11.withdraw.call(uintZFWHcY, {from: accounts[0]});

		await expect(ReentranceBpkrO11.topup.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceG6p4pNR = await Reentrance.new({from: accounts[3]});
		const addressE5tc9vD = accounts[0]
		const uintr8784Od = BigInt("1125")
		const uintCSFnj0s = await ReentranceG6p4pNR.balanceOf.call(addressE5tc9vD, {from: accounts[4]});
//		await ReentranceG6p4pNR.topup.call({from: accounts[2]});
//		const uintchAqcF3 = await ReentranceG6p4pNR.withdraw.call(uintr8784Od, {from: accounts[5]});

		assert.equal(uintCSFnj0s, BigInt("0"))
		await expect(ReentranceG6p4pNR.topup.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancexZPQ6oP = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqXcqzPe = accounts[5]
		const uintZacygwl = BigInt("195")
		const uintjmnss0J = BigInt("304")
		const uintEaOxZ4 = await ReentrancexZPQ6oP.balanceOf.call(addressqXcqzPe, {from: accounts[1]});
		const uintUABv6XE = await ReentrancexZPQ6oP.withdraw.call(uintZacygwl, {from: accounts[1]});
		await ReentrancexZPQ6oP.topup.call({from: "0x0000000000000000000000000000000000000001"});
		await ReentrancexZPQ6oP.topup.call({from: accounts[5]});
		await ReentrancexZPQ6oP.topup.call({from: "0x0000000000000000000000000000000000000001"});
		const uintLXtV84 = await ReentrancexZPQ6oP.withdraw.call(uintjmnss0J, {from: accounts[4]});
	});

	it('test for Reentrance', async () => {
		const ReentranceBevm31b = await Reentrance.new({from: accounts[2]});
		const addresspWoJ6Y6 = accounts[3]
		const addressoUatPJo = "0x0000000000000000000000000000000000000002"
		const uintBxz6y2U = BigInt("0")
		const addressJfoJxnZ = accounts[0]
		const uintrsJ8qE = await ReentranceBevm31b.balanceOf.call(addresspWoJ6Y6, {from: accounts[0]});
//		await ReentranceBevm31b.topup.call({from: accounts[0]});
//		const uintawLnkW = await ReentranceBevm31b.balanceOf.call(addressoUatPJo, {from: accounts[1]});
//		const uintntxr2hR = await ReentranceBevm31b.withdraw.call(uintBxz6y2U, {from: accounts[2]});
//		const uint41wsw0 = await ReentranceBevm31b.balanceOf.call(addressJfoJxnZ, {from: accounts[2]});

		assert.equal(uintrsJ8qE, BigInt("0"))
		await expect(ReentranceBevm31b.topup.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})