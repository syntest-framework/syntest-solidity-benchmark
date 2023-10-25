const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WallettPBnfqP = await Wallet.new({from: accounts[3]});
		const uintI0pOFR6 = BigInt("396")
		const uintGEEamN7 = BigInt("1745")
		const uintYaDehxc = BigInt("704")
		const uintOgmF2im = await WallettPBnfqP.deposit.call(uintI0pOFR6, {from: accounts[1]});
		const uintzEcP1di = await WallettPBnfqP.deposit.call(uintGEEamN7, {from: accounts[1]});
		const uintvXmBhtY = await WallettPBnfqP.deposit.call(uintYaDehxc, {from: accounts[4]});

		await expect(WallettPBnfqP.deposit.call(uintI0pOFR6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletLBzJFTZ = await Wallet.new({from: accounts[1]});
		const uintHVND2dH = BigInt("1989")
		const uintm1bPQco = BigInt("1903")
		const uintTtFG9fZ = BigInt("1689")
		const uintVp0WFy9 = await WalletLBzJFTZ.withdraw.call(uintHVND2dH, {from: accounts[1]});
		const uintkGfb5dC = await WalletLBzJFTZ.withdraw.call(uintm1bPQco, {from: accounts[4]});
		const uintdVXFWMy = await WalletLBzJFTZ.deposit.call(uintTtFG9fZ, {from: accounts[2]});

		await expect(WalletLBzJFTZ.withdraw.call(uintHVND2dH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Walletib6Ozpt = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBsmGyj1 = BigInt("478")
		const uintvUBQvBk = BigInt("927")
		const uintgwdGlPT = BigInt("702")
		const uintrcS5dco = BigInt("564")
		const uintJAlux4K = BigInt("88")
		const uintb7kn9iN = await Walletib6Ozpt.deposit.call(uintBsmGyj1, {from: accounts[1]});
		const uintxBFszA = await Walletib6Ozpt.withdraw.call(uintvUBQvBk, {from: accounts[2]});
		const uintFiFnMZ = await Walletib6Ozpt.deposit.call(uintgwdGlPT, {from: accounts[2]});
		const uintGEk2uq9 = await Walletib6Ozpt.deposit.call(uintrcS5dco, {from: accounts[2]});
		const uintWmjm4a4 = await Walletib6Ozpt.withdraw.call(uintJAlux4K, {from: accounts[5]});
	});
})