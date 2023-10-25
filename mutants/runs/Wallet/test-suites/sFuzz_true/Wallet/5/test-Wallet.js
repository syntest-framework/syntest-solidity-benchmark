const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletoHNES6z = await Wallet.new({from: accounts[3]});
		const uintN2wOYxw = BigInt("1589")
		const uintP97mTNB = BigInt("5")
		const uintqHCbRav = BigInt("1712")
		const uintxBd43QR = BigInt("638")
		const uintd5RbI3 = await WalletoHNES6z.deposit.call(uintN2wOYxw, {from: accounts[3]});
		const uint5iYGg5 = await WalletoHNES6z.withdraw.call(uintP97mTNB, {from: accounts[1]});
		const uintqeB5P7O = await WalletoHNES6z.deposit.call(uintqHCbRav, {from: accounts[4]});
		const uintc2hIXpy = await WalletoHNES6z.deposit.call(uintxBd43QR, {from: accounts[4]});

		await expect(WalletoHNES6z.deposit.call(uintN2wOYxw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletApfMWAw = await Wallet.new({from: accounts[4]});
		const uintKmf8wcH = BigInt("190")
		const uintcwzazsV = BigInt("108")
		const uintfblX91h = BigInt("709")
		const uintQDN6zBr = await WalletApfMWAw.withdraw.call(uintKmf8wcH, {from: accounts[3]});
		const uinttBu1r8T = await WalletApfMWAw.deposit.call(uintcwzazsV, {from: accounts[3]});
		const uintsXqyr1 = await WalletApfMWAw.withdraw.call(uintfblX91h, {from: accounts[4]});

		await expect(WalletApfMWAw.withdraw.call(uintKmf8wcH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletYOuiVJ7 = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqHFrdnI = BigInt("156")
		const uintxLRsVt = BigInt("700")
		const uintBzun4zs = BigInt("702")
		const uintwbhwoIF = BigInt("1053")
		const uintHa5q58i = await WalletYOuiVJ7.deposit.call(uintqHFrdnI, {from: accounts[3]});
		const uintr0mjObK = await WalletYOuiVJ7.deposit.call(uintxLRsVt, {from: accounts[3]});
		const uintijXSFaV = await WalletYOuiVJ7.withdraw.call(uintBzun4zs, {from: accounts[0]});
		const uintf7yMQd9 = await WalletYOuiVJ7.deposit.call(uintwbhwoIF, {from: accounts[5]});
	});
})