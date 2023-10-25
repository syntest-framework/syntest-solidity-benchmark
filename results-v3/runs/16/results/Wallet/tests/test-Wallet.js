const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletiXS2pr3 = await Wallet.new({from: accounts[4]});
		const uintEbvsWkb = BigInt("386")
		const uintrcv7n6V = BigInt("228")
		const uintmbtfe9 = BigInt("310")
		const uintWmvOkgr = await WalletiXS2pr3.withdraw.call(uintEbvsWkb, {from: accounts[3]});
		const uintE1XKSJJ = await WalletiXS2pr3.deposit.call(uintrcv7n6V, {from: accounts[2]});
		const uintjeIh0x = await WalletiXS2pr3.deposit.call(uintmbtfe9, {from: accounts[2]});

		await expect(WalletiXS2pr3.withdraw.call(uintEbvsWkb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Walletrl0k2Nn = await Wallet.new({from: accounts[2]});
		const uintRp5HCm = BigInt("13")
		const uintpShtpV = BigInt("451")
		const uintVzyLQnx = await Walletrl0k2Nn.deposit.call(uintRp5HCm, {from: accounts[0]});
		const uintJ92eBIW = await Walletrl0k2Nn.withdraw.call(uintpShtpV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Walletrl0k2Nn.deposit.call(uintRp5HCm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletQy4FgIe = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWSRJNSU = BigInt("1676")
		const uintMRdEbne = BigInt("49")
		const uintrsF8tyL = BigInt("482")
		const uintXYEQbsV = BigInt("1192")
		const uintrMFQ0x0 = BigInt("675")
		const uintjnT6cr0 = BigInt("453")
		const uintuDu1Zhd = await WalletQy4FgIe.deposit.call(uintWSRJNSU, {from: accounts[5]});
		const uintPAXXG6L = await WalletQy4FgIe.withdraw.call(uintMRdEbne, {from: accounts[1]});
		const uintyXyGTo = await WalletQy4FgIe.withdraw.call(uintrsF8tyL, {from: "0x0000000000000000000000000000000000000001"});
		const uintBACAN6I = await WalletQy4FgIe.deposit.call(uintXYEQbsV, {from: accounts[3]});
		const uintq9G7SXh = await WalletQy4FgIe.deposit.call(uintrMFQ0x0, {from: "0x0000000000000000000000000000000000000001"});
		const uintQwYVn9n = await WalletQy4FgIe.deposit.call(uintjnT6cr0, {from: accounts[2]});
	});

	it('test for Wallet', async () => {
		const Walletrl0k2Nn = await Wallet.new({from: accounts[2]});
		const uintiXIseAg = BigInt("0")
		const uintQJJTy5Z = BigInt("451")
		const uintVzyLQnx = await Walletrl0k2Nn.deposit.call(uintiXIseAg, {from: accounts[0]});
		const uintJ92eBIW = await Walletrl0k2Nn.withdraw.call(uintQJJTy5Z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Walletrl0k2Nn.withdraw.call(uintQJJTy5Z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})