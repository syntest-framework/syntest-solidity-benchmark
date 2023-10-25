const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const Walletcxjn3Y = await Wallet.new({from: accounts[3]});
		const uintCs5dFs1 = BigInt("96")
		const uinteoek2Bw = BigInt("1826")
		const uintN8rcwqh = BigInt("1151")
		const uintmFAGHrg = BigInt("429")
		const uintVCl1AE9 = BigInt("1085")
//		const uintltvQdhJ = await Walletcxjn3Y.withdraw.call(uintCs5dFs1, {from: "0x0000000000000000000000000000000000000001"});
//		const uints4jPLb9 = await Walletcxjn3Y.withdraw.call(uinteoek2Bw, {from: accounts[3]});
//		const uintCPh0zX = await Walletcxjn3Y.deposit.call(uintN8rcwqh, {from: accounts[1]});
//		const uintEPlSsv = await Walletcxjn3Y.withdraw.call(uintmFAGHrg, {from: accounts[1]});
//		const uintyXS8GVr = await Walletcxjn3Y.deposit.call(uintVCl1AE9, {from: accounts[1]});

		await expect(Walletcxjn3Y.withdraw.call(uintCs5dFs1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletZtZtits = await Wallet.new({from: accounts[0]});
		const uintoqU1eOo = BigInt("1661")
		const uintxrGCiUS = BigInt("375")
		const uinttC3ElxC = BigInt("1921")
		const uintlS5Rowp = BigInt("1940")
		const uintDAvbtzl = BigInt("2020")
//		const uintgB3ro2L = await WalletZtZtits.deposit.call(uintoqU1eOo, {from: accounts[3]});
//		const uintAZTUzJv = await WalletZtZtits.deposit.call(uintxrGCiUS, {from: accounts[4]});
//		const uintzFOzb1p = await WalletZtZtits.withdraw.call(uinttC3ElxC, {from: accounts[4]});
//		const uintmIynXmn = await WalletZtZtits.withdraw.call(uintlS5Rowp, {from: accounts[2]});
//		const uintegJkPvr = await WalletZtZtits.deposit.call(uintDAvbtzl, {from: accounts[1]});

		await expect(WalletZtZtits.deposit.call(uintoqU1eOo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})