const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletyGPbIAn = await Wallet.new({from: accounts[4]});
		const uintJSR0ejW = BigInt("1844")
		const uintKcKJ6d3 = BigInt("1612")
		const uintUPEWv59 = BigInt("546")
		const uintQY9O176 = BigInt("949")
		const uintxYaMPK1 = await WalletyGPbIAn.deposit.call(uintJSR0ejW, {from: accounts[3]});
		const uintQ7LB0e = await WalletyGPbIAn.withdraw.call(uintKcKJ6d3, {from: accounts[1]});
		const uintAAEoXg = await WalletyGPbIAn.deposit.call(uintUPEWv59, {from: accounts[0]});
		const uintfSue9NR = await WalletyGPbIAn.deposit.call(uintQY9O176, {from: accounts[3]});

		await expect(WalletyGPbIAn.deposit.call(uintJSR0ejW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WallettCazPJ = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintE28zktr = BigInt("1492")
		const uintJRPW92s = BigInt("1393")
		const uintX7H21aj = BigInt("1649")
		const uintdp7Or23 = BigInt("1366")
		const uintjlQbwH = BigInt("1458")
		const uintFc6gxiv = BigInt("1990")
		const uint7izmaY = await WallettCazPJ.deposit.call(uintE28zktr, {from: accounts[2]});
		const uintQpLME8C = await WallettCazPJ.withdraw.call(uintJRPW92s, {from: accounts[3]});
		const uint7OOvDJ = await WallettCazPJ.withdraw.call(uintX7H21aj, {from: accounts[3]});
		const uintQ3JAan = await WallettCazPJ.withdraw.call(uintdp7Or23, {from: "0x0000000000000000000000000000000000000001"});
		const uintbuwrZtz = await WallettCazPJ.deposit.call(uintjlQbwH, {from: accounts[3]});
		const uintfqHWGo = await WallettCazPJ.deposit.call(uintFc6gxiv, {from: accounts[3]});
	});

	it('test for Wallet', async () => {
		const WalletOxBMQ8c = await Wallet.new({from: accounts[0]});
		const uintbei3Tz = BigInt("1528")
		const uintPCkFJ1U = BigInt("1715")
		const uintxgL6fIu = BigInt("560")
		const uintCpZfZ7j = BigInt("1109")
		const uintEuruW8u = await WalletOxBMQ8c.withdraw.call(uintbei3Tz, {from: accounts[0]});
		const uintJTAC8su = await WalletOxBMQ8c.deposit.call(uintPCkFJ1U, {from: accounts[1]});
		const uintv4KkXFJ = await WalletOxBMQ8c.withdraw.call(uintxgL6fIu, {from: accounts[1]});
		const uintUx4a63d = await WalletOxBMQ8c.deposit.call(uintCpZfZ7j, {from: accounts[0]});

		await expect(WalletOxBMQ8c.withdraw.call(uintbei3Tz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})