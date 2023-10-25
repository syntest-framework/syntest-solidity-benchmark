const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const Walletwp6fqU2 = await Wallet.new({from: accounts[4]});
		const uintW3OQ2OJ = BigInt("1608")
		const uintIiWkEv = BigInt("1075")
		const uinteLWL0Lg = BigInt("597")
		const uintAcXzyXz = BigInt("270")
//		const uintGzZg7l = await Walletwp6fqU2.withdraw.call(uintW3OQ2OJ, {from: accounts[4]});
//		const uintHAZHZuJ = await Walletwp6fqU2.deposit.call(uintIiWkEv, {from: accounts[4]});
//		const uintDbsd5hj = await Walletwp6fqU2.withdraw.call(uinteLWL0Lg, {from: accounts[4]});
//		const uintx0k4upk = await Walletwp6fqU2.deposit.call(uintAcXzyXz, {from: accounts[5]});

		await expect(Walletwp6fqU2.withdraw.call(uintW3OQ2OJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WallettsNT3mm = await Wallet.new({from: accounts[1]});
		const uint8kFEou = BigInt("687")
		const uintQK3xVwP = BigInt("1090")
//		const uintKYxZdU = await WallettsNT3mm.deposit.call(uint8kFEou, {from: accounts[0]});
//		const uintrpU2VxI = await WallettsNT3mm.deposit.call(uintQK3xVwP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WallettsNT3mm.deposit.call(uint8kFEou, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})