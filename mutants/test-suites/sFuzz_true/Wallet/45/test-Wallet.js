const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletQxHorAf = await Wallet.new({from: accounts[4]});
		const uintWPuEIWl = BigInt("1718")
		const uintSWwYMce = BigInt("1127")
		const uintfMEaRx = BigInt("507")
		const uintaBdXG1J = BigInt("1092")
//		const uintDUWBT8G = await WalletQxHorAf.deposit.call(uintWPuEIWl, {from: accounts[5]});
//		const uintu2etWt = await WalletQxHorAf.deposit.call(uintSWwYMce, {from: accounts[0]});
//		const uintxtOORKg = await WalletQxHorAf.withdraw.call(uintfMEaRx, {from: accounts[3]});
//		const uinthKgvfEB = await WalletQxHorAf.deposit.call(uintaBdXG1J, {from: accounts[3]});

		await expect(WalletQxHorAf.deposit.call(uintWPuEIWl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Wallet5foxIZ = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZisLktq = BigInt("550")
		const uinthlnXEPT = BigInt("702")
		const uintD28cQhP = BigInt("1839")
		const uintnEiXXV9 = await Wallet5foxIZ.withdraw.call(uintZisLktq, {from: accounts[4]});
		const uintvGAtia2 = await Wallet5foxIZ.deposit.call(uinthlnXEPT, {from: accounts[0]});
		const uintwuowdod = await Wallet5foxIZ.withdraw.call(uintD28cQhP, {from: accounts[1]});
	});

	it('test for Wallet', async () => {
		const WalletKCEJda = await Wallet.new({from: accounts[5]});
		const uintnUwf7tf = BigInt("1627")
		const uintPIVfDqB = BigInt("525")
		const uint4Q3COe = BigInt("1396")
		const uintqix7h4j = BigInt("1845")
		const uintz6SSdZf = BigInt("80")
//		const uint532VGW = await WalletKCEJda.withdraw.call(uintnUwf7tf, {from: accounts[2]});
//		const uintFV6upSy = await WalletKCEJda.withdraw.call(uintPIVfDqB, {from: accounts[1]});
//		const uinte3616IC = await WalletKCEJda.deposit.call(uint4Q3COe, {from: accounts[3]});
//		const uintFNrk3rf = await WalletKCEJda.deposit.call(uintqix7h4j, {from: accounts[2]});
//		const uintKPx6m1Q = await WalletKCEJda.deposit.call(uintz6SSdZf, {from: accounts[3]});

		await expect(WalletKCEJda.withdraw.call(uintnUwf7tf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})