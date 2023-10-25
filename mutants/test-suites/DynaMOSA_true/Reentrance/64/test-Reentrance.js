const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceX7CjY2t = await Reentrance.new({from: accounts[3]});
		const addressWksa9Es = accounts[2]
		const uintyooV1z6 = BigInt("156")
		const addressjixaEZC = accounts[3]
		const uintUWJbcuF = await ReentranceX7CjY2t.balanceOf.call(addressWksa9Es, {from: accounts[5]});
		const uintdvqX83T = await ReentranceX7CjY2t.withdraw.call(uintyooV1z6, {from: accounts[2]});
//		await ReentranceX7CjY2t.topup.call({from: accounts[4]});
//		await ReentranceX7CjY2t.topup.call({from: accounts[5]});
//		const uintfZJqOSR = await ReentranceX7CjY2t.balanceOf.call(addressjixaEZC, {from: accounts[0]});

		assert.equal(uintUWJbcuF, BigInt("0"))
		await expect(ReentranceX7CjY2t.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceRhLsVD9 = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgcQaHwe = accounts[0]
		const uintPPqdCMG = BigInt("1234")
		await ReentranceRhLsVD9.topup.call({from: accounts[5]});
		const uintLbnmELu = await ReentranceRhLsVD9.balanceOf.call(addressgcQaHwe, {from: accounts[3]});
		const uintV5dOx5o = await ReentranceRhLsVD9.withdraw.call(uintPPqdCMG, {from: accounts[1]});
		await ReentranceRhLsVD9.topup.call({from: accounts[1]});
	});
})