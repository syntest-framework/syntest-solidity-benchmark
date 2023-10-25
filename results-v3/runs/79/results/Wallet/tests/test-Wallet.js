const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WallettxEg0aX = await Wallet.new({from: accounts[0]});
		const uintYseqKfP = BigInt("390")
		const uintPqAdh6C = BigInt("1708")
		const uintBwHDB5 = BigInt("355")
		const uintStHruEz = BigInt("1948")
		const uintjLXUNIl = BigInt("575")
		const uintSgPTqV = await WallettxEg0aX.deposit.call(uintYseqKfP, {from: accounts[4]});
		const uintXvsbXp = await WallettxEg0aX.deposit.call(uintPqAdh6C, {from: accounts[5]});
		const uintD5Y5dcO = await WallettxEg0aX.withdraw.call(uintBwHDB5, {from: accounts[3]});
		const uintkIW825t = await WallettxEg0aX.withdraw.call(uintStHruEz, {from: "0x0000000000000000000000000000000000000001"});
		const uintgqg0Nsc = await WallettxEg0aX.withdraw.call(uintjLXUNIl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WallettxEg0aX.deposit.call(uintYseqKfP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletLXtJqfY = await Wallet.new({from: accounts[2]});
		const uintQb9GtUL = BigInt("1335")
		const uintpN2QoM = BigInt("6")
		const uintmj3E6l3 = BigInt("678")
		const uintIfo5Upk = BigInt("1316")
		const uintG1XFHhD = BigInt("1667")
		const uintdUmhS5 = await WalletLXtJqfY.withdraw.call(uintQb9GtUL, {from: accounts[1]});
		const uintZeV9srB = await WalletLXtJqfY.deposit.call(uintpN2QoM, {from: accounts[0]});
		const uintkAdBUSb = await WalletLXtJqfY.deposit.call(uintmj3E6l3, {from: accounts[1]});
		const uintFU6b7yI = await WalletLXtJqfY.deposit.call(uintIfo5Upk, {from: accounts[2]});
		const uintOwc2IKN = await WalletLXtJqfY.withdraw.call(uintG1XFHhD, {from: accounts[2]});

		await expect(WalletLXtJqfY.withdraw.call(uintQb9GtUL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})