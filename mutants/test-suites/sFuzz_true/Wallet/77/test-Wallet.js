const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletgyT1Z3R = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfaryCkf = BigInt("2045")
		const uintxRdsCLG = BigInt("813")
		const uintcNndlmS = await WalletgyT1Z3R.deposit.call(uintfaryCkf, {from: accounts[1]});
		const uintgiZMahh = await WalletgyT1Z3R.deposit.call(uintxRdsCLG, {from: accounts[0]});
	});

	it('test for Wallet', async () => {
		const WalletrEf4pfu = await Wallet.new({from: accounts[0]});
		const uintaeVMQJT = BigInt("1657")
		const uintPx0BXf = BigInt("298")
		const uint3Nup4S = BigInt("492")
//		const uintmNiUl6M = await WalletrEf4pfu.withdraw.call(uintaeVMQJT, {from: accounts[2]});
//		const uintx9CheC3 = await WalletrEf4pfu.deposit.call(uintPx0BXf, {from: accounts[5]});
//		const uintpgIByOc = await WalletrEf4pfu.deposit.call(uint3Nup4S, {from: accounts[5]});

		await expect(WalletrEf4pfu.withdraw.call(uintaeVMQJT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletPjSsknb = await Wallet.new({from: accounts[0]});
		const uintKpiSdYr = BigInt("957")
		const uintxlm1fIM = BigInt("1838")
		const uintQCbNVpW = BigInt("510")
		const uintP2NdynM = BigInt("1075")
		const uintMW8CfZl = BigInt("321")
		const uintjk7Rq8D = BigInt("1054")
//		const uintvGCf9Cs = await WalletPjSsknb.deposit.call(uintKpiSdYr, {from: accounts[0]});
//		const uintBE8QZs5 = await WalletPjSsknb.deposit.call(uintxlm1fIM, {from: accounts[1]});
//		const uintIFv5KXa = await WalletPjSsknb.withdraw.call(uintQCbNVpW, {from: accounts[3]});
//		const uintRXYTvnw = await WalletPjSsknb.withdraw.call(uintP2NdynM, {from: accounts[5]});
//		const uintOWqbfXp = await WalletPjSsknb.deposit.call(uintMW8CfZl, {from: accounts[2]});
//		const uintvNiy2Z = await WalletPjSsknb.deposit.call(uintjk7Rq8D, {from: accounts[2]});

		await expect(WalletPjSsknb.deposit.call(uintKpiSdYr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})