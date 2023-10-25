const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const Wallet20hB19 = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJRBBWX3 = BigInt("1286")
		const uintdrestb6 = BigInt("95")
		const uintKHsr01i = BigInt("1537")
		const uintkUj3A6L = await Wallet20hB19.deposit.call(uintJRBBWX3, {from: accounts[0]});
		const uintROqH1Yp = await Wallet20hB19.withdraw.call(uintdrestb6, {from: accounts[1]});
		const uintvK4gvqf = await Wallet20hB19.deposit.call(uintKHsr01i, {from: accounts[0]});
	});

	it('test for Wallet', async () => {
		const WalletSYhGePi = await Wallet.new({from: accounts[5]});
		const uinti1uol16 = BigInt("1384")
		const uintNI71hH = BigInt("1852")
		const uintNHP6Zyw = BigInt("1978")
		const uintNlcLMfs = BigInt("412")
		const uintBmI8Urw = BigInt("1321")
		const uintRyMqjB = await WalletSYhGePi.withdraw.call(uinti1uol16, {from: accounts[2]});
		const uintlmWY0P = await WalletSYhGePi.deposit.call(uintNI71hH, {from: accounts[4]});
		const uintTxtilkV = await WalletSYhGePi.withdraw.call(uintNHP6Zyw, {from: accounts[1]});
		const uintMNMC1U7 = await WalletSYhGePi.withdraw.call(uintNlcLMfs, {from: accounts[1]});
		const uintQSymILa = await WalletSYhGePi.withdraw.call(uintBmI8Urw, {from: accounts[5]});

		await expect(WalletSYhGePi.withdraw.call(uinti1uol16, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletWB6CMyt = await Wallet.new({from: accounts[0]});
		const uintVksy7V5 = BigInt("1698")
		const uintiTYproB = BigInt("1175")
		const uint8IAtRq = BigInt("1592")
		const uintElYCc6G = BigInt("481")
		const uintMqGL3fA = BigInt("957")
		const uintR0gX92 = BigInt("180")
		const uintCW1Ptka = await WalletWB6CMyt.deposit.call(uintVksy7V5, {from: "0x0000000000000000000000000000000000000001"});
		const uintGVibYWi = await WalletWB6CMyt.deposit.call(uintiTYproB, {from: accounts[3]});
		const uintzMsPugq = await WalletWB6CMyt.deposit.call(uint8IAtRq, {from: accounts[3]});
		const uintBXjZDh8 = await WalletWB6CMyt.deposit.call(uintElYCc6G, {from: accounts[2]});
		const uintsMWb0Ya = await WalletWB6CMyt.deposit.call(uintMqGL3fA, {from: "0x0000000000000000000000000000000000000001"});
		const uintG1Ns1Pv = await WalletWB6CMyt.deposit.call(uintR0gX92, {from: accounts[3]});

		await expect(WalletWB6CMyt.deposit.call(uintVksy7V5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})