const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletqQmwz5m = await Wallet.new({from: accounts[2]});
		const uintQe2BxIh = BigInt("1963")
		const uinty8DxMbb = BigInt("550")
		const uinto7hY7Ye = BigInt("741")
		const uintfZRsnlX = BigInt("1447")
		const uintEgWPze = await WalletqQmwz5m.withdraw.call(uintQe2BxIh, {from: accounts[3]});
		const uintxSQ1Bj0 = await WalletqQmwz5m.deposit.call(uinty8DxMbb, {from: accounts[0]});
		const uintTvPOMsy = await WalletqQmwz5m.deposit.call(uinto7hY7Ye, {from: accounts[2]});
		const uintP5gf4YD = await WalletqQmwz5m.withdraw.call(uintfZRsnlX, {from: accounts[3]});

		await expect(WalletqQmwz5m.withdraw.call(uintQe2BxIh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Walletd4Zvb9O = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPqJxjgi = BigInt("523")
		const uintBUJHtK = BigInt("844")
		const uintVJn4phG = BigInt("1980")
		const uint2TvnNp = BigInt("1758")
		const uintzRChJYJ = await Walletd4Zvb9O.deposit.call(uintPqJxjgi, {from: accounts[1]});
		const uintulCuvmM = await Walletd4Zvb9O.deposit.call(uintBUJHtK, {from: accounts[0]});
		const uintAB9L25D = await Walletd4Zvb9O.deposit.call(uintVJn4phG, {from: accounts[2]});
		const uinttfHKcWB = await Walletd4Zvb9O.deposit.call(uint2TvnNp, {from: accounts[0]});
	});

	it('test for Wallet', async () => {
		const WalletdWzpZJ = await Wallet.new({from: accounts[1]});
		const uintIHUvASD = BigInt("258")
		const uintfkTGpi = BigInt("1764")
		const uintn7s65es = BigInt("556")
		const uintixIwg1v = BigInt("578")
		const uintAT2VfQJ = BigInt("370")
		const uintG2wYIqT = await WalletdWzpZJ.deposit.call(uintIHUvASD, {from: accounts[0]});
		const uintTsURLuz = await WalletdWzpZJ.withdraw.call(uintfkTGpi, {from: "0x0000000000000000000000000000000000000001"});
		const uintRPK9ieN = await WalletdWzpZJ.withdraw.call(uintn7s65es, {from: accounts[5]});
		const uintT9XPuAb = await WalletdWzpZJ.deposit.call(uintixIwg1v, {from: accounts[0]});
		const uintjVIOvRA = await WalletdWzpZJ.deposit.call(uintAT2VfQJ, {from: accounts[4]});

		await expect(WalletdWzpZJ.deposit.call(uintIHUvASD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})