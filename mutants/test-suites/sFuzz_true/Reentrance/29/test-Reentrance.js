const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentrancezbH0xOv = await Reentrance.new({from: accounts[0]});
		const address5QARUt = accounts[4]
		const addressB8JvEvh = accounts[4]
		const uintNdis5YC = BigInt("130")
		const uintualzMpT = await ReentrancezbH0xOv.balanceOf.call(address5QARUt, {from: accounts[5]});
//		await ReentrancezbH0xOv.topup.call({from: accounts[4]});
//		const uintZl4UNWB = await ReentrancezbH0xOv.balanceOf.call(addressB8JvEvh, {from: accounts[0]});
//		const uintF5qEF9W = await ReentrancezbH0xOv.withdraw.call(uintNdis5YC, {from: accounts[4]});

		assert.equal(uintualzMpT, BigInt("0"))
		await expect(ReentrancezbH0xOv.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancedwuYlXm = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEJUxeAu = BigInt("230")
		const uintHpLtlHG = await ReentrancedwuYlXm.withdraw.call(uintEJUxeAu, {from: "0x0000000000000000000000000000000000000001"});
		await ReentrancedwuYlXm.topup.call({from: accounts[1]});
		await ReentrancedwuYlXm.topup.call({from: accounts[2]});
		await ReentrancedwuYlXm.topup.call({from: accounts[4]});
	});
})