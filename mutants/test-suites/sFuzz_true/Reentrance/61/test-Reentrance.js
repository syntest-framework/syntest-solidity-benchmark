const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const Reentrancefc4PL6F = await Reentrance.new({from: accounts[3]});
		const address38zI4Z = accounts[2]
		const addressacg0QHp = accounts[5]
		const uintR8hL6T = await Reentrancefc4PL6F.balanceOf.call(address38zI4Z, {from: "0x0000000000000000000000000000000000000001"});
		const uintFliNC6d = await Reentrancefc4PL6F.balanceOf.call(addressacg0QHp, {from: "0x0000000000000000000000000000000000000001"});
//		await Reentrancefc4PL6F.topup.call({from: accounts[1]});
//		await Reentrancefc4PL6F.topup.call({from: accounts[2]});

		assert.equal(uintFliNC6d, BigInt("0"))
		assert.equal(uintR8hL6T, BigInt("0"))
		await expect(Reentrancefc4PL6F.topup.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceKmLrb5Z = await Reentrance.new({from: accounts[4]});
		const uintmISHfta = BigInt("81")
		const addressXsKBS20 = accounts[1]
//		await ReentranceKmLrb5Z.topup.call({from: accounts[4]});
//		await ReentranceKmLrb5Z.topup.call({from: accounts[0]});
//		const uintPnxcQ7I = await ReentranceKmLrb5Z.withdraw.call(uintmISHfta, {from: "0x0000000000000000000000000000000000000001"});
//		const uintZQGvffz = await ReentranceKmLrb5Z.balanceOf.call(addressXsKBS20, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReentranceKmLrb5Z.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceFDrbGOa = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfnmm0wx = BigInt("1614")
		const uintOvTA38R = BigInt("1341")
		const addressdsjyNyr = "0x0000000000000000000000000000000000000001"
		await ReentranceFDrbGOa.topup.call({from: accounts[2]});
		const uintKW6HbIG = await ReentranceFDrbGOa.withdraw.call(uintfnmm0wx, {from: accounts[4]});
		const uintmeQgjq = await ReentranceFDrbGOa.withdraw.call(uintOvTA38R, {from: accounts[5]});
		const uintsGq0D2P = await ReentranceFDrbGOa.balanceOf.call(addressdsjyNyr, {from: accounts[0]});
	});
})