const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletXsGT2F = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyNmvn18 = BigInt("225")
		const uintewbNQzF = BigInt("1099")
		const uinteYoTw08 = BigInt("1592")
		const uintjZ2ckJM = await WalletXsGT2F.deposit.call(uintyNmvn18, {from: accounts[2]});
		const uintfE1u6yq = await WalletXsGT2F.withdraw.call(uintewbNQzF, {from: accounts[0]});
		const uintMImGNLA = await WalletXsGT2F.withdraw.call(uinteYoTw08, {from: accounts[3]});
	});

	it('test for Wallet', async () => {
		const Walletg085ba = await Wallet.new({from: accounts[4]});
		const uintHaWdaZ5 = BigInt("154")
		const uintsup85Eo = BigInt("851")
		const uintcQf9ZW = BigInt("1924")
		const uintarFIadu = await Walletg085ba.withdraw.call(uintHaWdaZ5, {from: accounts[3]});
		const uintQXdzqbR = await Walletg085ba.deposit.call(uintsup85Eo, {from: "0x0000000000000000000000000000000000000001"});
		const uintEHjZpOf = await Walletg085ba.deposit.call(uintcQf9ZW, {from: accounts[0]});

		await expect(Walletg085ba.withdraw.call(uintHaWdaZ5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletMlVnC0 = await Wallet.new({from: accounts[2]});
		const uintfQmGIPc = BigInt("254")
		const uintTzA6I3r = BigInt("1828")
		const uintkdnPhDQ = await WalletMlVnC0.deposit.call(uintfQmGIPc, {from: accounts[2]});
		const uintUaWhgw6 = await WalletMlVnC0.withdraw.call(uintTzA6I3r, {from: accounts[1]});

		await expect(WalletMlVnC0.deposit.call(uintfQmGIPc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})