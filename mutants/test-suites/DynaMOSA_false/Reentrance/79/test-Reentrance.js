const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceQOKV35 = await Reentrance.new({from: accounts[0]});
		const uintRSQQQt = BigInt("262")
		const addressH2I4ml = accounts[2]
		const uintvdGUx89 = BigInt("1785")
//		await ReentranceQOKV35.topup.call({from: accounts[5]});
//		const uintug31FKC = await ReentranceQOKV35.withdraw.call(uintRSQQQt, {from: accounts[2]});
//		const uintXcEJIaN = await ReentranceQOKV35.balanceOf.call(addressH2I4ml, {from: accounts[0]});
//		const uintSLOrjyy = await ReentranceQOKV35.withdraw.call(uintvdGUx89, {from: accounts[3]});

		await expect(ReentranceQOKV35.topup.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const Reentrances2JBGUe = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIEk499X = BigInt("396")
		const addressL85dU6q = "0x0000000000000000000000000000000000000001"
		const uint6WK8kV = await Reentrances2JBGUe.withdraw.call(uintIEk499X, {from: "0x0000000000000000000000000000000000000001"});
		const uintycMFXkn = await Reentrances2JBGUe.balanceOf.call(addressL85dU6q, {from: accounts[4]});
	});
})