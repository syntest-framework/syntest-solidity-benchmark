const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceDYvtsgI = await Reentrance.new({from: accounts[2]});
		const addressjpFWZCw = accounts[1]
		const uintW7jyifS = BigInt("1419")
		const addressMmJWqxo = accounts[4]
//		await ReentranceDYvtsgI.topup.call({from: accounts[3]});
//		const uinttJwL11l = await ReentranceDYvtsgI.balanceOf.call(addressjpFWZCw, {from: accounts[3]});
//		const uintW5Zefvn = await ReentranceDYvtsgI.withdraw.call(uintW7jyifS, {from: accounts[0]});
//		const uintZGid9AJ = await ReentranceDYvtsgI.balanceOf.call(addressMmJWqxo, {from: accounts[3]});
//		await ReentranceDYvtsgI.topup.call({from: accounts[4]});

		await expect(ReentranceDYvtsgI.topup.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentrancetgbfSNc = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintf8Oyx7u = BigInt("1997")
		const addressQE4ZkBm = accounts[4]
		await ReentrancetgbfSNc.topup.call({from: accounts[1]});
		const uintF7RdCJ0 = await ReentrancetgbfSNc.withdraw.call(uintf8Oyx7u, {from: accounts[1]});
		const uintgi5PlD9 = await ReentrancetgbfSNc.balanceOf.call(addressQE4ZkBm, {from: accounts[3]});
	});
})