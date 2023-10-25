const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletRag9AT0 = await Wallet.new({from: accounts[4]});
		const uintHwI6jmg = BigInt("246")
		const uintRNAgON8 = BigInt("1242")
		const uintIdoQsEs = BigInt("653")
		const uintu7cjr95 = BigInt("371")
		const uintElqt7kp = BigInt("237")
		const uintegqhLc = await WalletRag9AT0.deposit.call(uintHwI6jmg, {from: accounts[2]});
		const uintvZahQmT = await WalletRag9AT0.deposit.call(uintRNAgON8, {from: accounts[5]});
		const uintbinZpfS = await WalletRag9AT0.withdraw.call(uintIdoQsEs, {from: accounts[0]});
		const uintWBGXb6L = await WalletRag9AT0.deposit.call(uintu7cjr95, {from: accounts[4]});
		const uintOWfSrzn = await WalletRag9AT0.withdraw.call(uintElqt7kp, {from: accounts[3]});

		await expect(WalletRag9AT0.deposit.call(uintHwI6jmg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletFx4vuqA = await Wallet.new({from: accounts[4]});
		const uinteoJ5YEf = BigInt("1851")
		const uintap9ltSj = BigInt("859")
		const uintUJpGIc = await WalletFx4vuqA.withdraw.call(uinteoJ5YEf, {from: accounts[4]});
		const uintt0gd2V = await WalletFx4vuqA.withdraw.call(uintap9ltSj, {from: accounts[0]});

		await expect(WalletFx4vuqA.withdraw.call(uinteoJ5YEf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletqY743X7 = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintP38zw4k = BigInt("1013")
		const uintIYerS4O = BigInt("1069")
		const uintdcj0RL7 = BigInt("823")
		const uintzhBXTgS = BigInt("1601")
		const uintADIBEHA = await WalletqY743X7.withdraw.call(uintP38zw4k, {from: accounts[4]});
		const uintrblDWTT = await WalletqY743X7.deposit.call(uintIYerS4O, {from: accounts[5]});
		const uintUOcq5iZ = await WalletqY743X7.deposit.call(uintdcj0RL7, {from: accounts[0]});
		const uintnzFyzsQ = await WalletqY743X7.withdraw.call(uintzhBXTgS, {from: accounts[5]});
	});
})