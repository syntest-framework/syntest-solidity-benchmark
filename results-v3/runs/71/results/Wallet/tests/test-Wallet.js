const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletB0JXIzJ = await Wallet.new({from: accounts[0]});
		const uintqNjek4G = BigInt("1596")
		const uintpuHFvNj = BigInt("1923")
		const uintdlquwT = BigInt("1634")
		const uintCRkCM7J = BigInt("958")
		const uintUh748x = BigInt("803")
		const uintT3McvLb = await WalletB0JXIzJ.deposit.call(uintqNjek4G, {from: accounts[1]});
		const uintb2sarLW = await WalletB0JXIzJ.deposit.call(uintpuHFvNj, {from: accounts[2]});
		const uintqxwuLUW = await WalletB0JXIzJ.withdraw.call(uintdlquwT, {from: accounts[2]});
		const uintryC14DC = await WalletB0JXIzJ.withdraw.call(uintCRkCM7J, {from: "0x0000000000000000000000000000000000000001"});
		const uintpeEAXrS = await WalletB0JXIzJ.withdraw.call(uintUh748x, {from: accounts[1]});

		await expect(WalletB0JXIzJ.deposit.call(uintqNjek4G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletTgomWl = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvL5cMAt = BigInt("1672")
		const uinttfeQxWP = BigInt("18")
		const uintEOMNjtA = BigInt("111")
		const uintIOyLFJ = BigInt("457")
		const uintF7cbFWY = await WalletTgomWl.deposit.call(uintvL5cMAt, {from: accounts[0]});
		const uintB5DmmMP = await WalletTgomWl.withdraw.call(uinttfeQxWP, {from: accounts[2]});
		const uintmbpgGM2 = await WalletTgomWl.withdraw.call(uintEOMNjtA, {from: accounts[4]});
		const uintfR2pw02 = await WalletTgomWl.deposit.call(uintIOyLFJ, {from: accounts[3]});
	});

	it('test for Wallet', async () => {
		const WalletBbCYwpt = await Wallet.new({from: accounts[0]});
		const uintVxghmwe = BigInt("1181")
		const uinthw6uKsE = BigInt("1286")
		const uintgGmwEaR = BigInt("303")
		const uintxf0I75 = BigInt("1283")
		const uintTZy1JeG = BigInt("1013")
		const uintt7J4IaX = BigInt("938")
		const uintzZrK8x9 = await WalletBbCYwpt.withdraw.call(uintVxghmwe, {from: accounts[3]});
		const uintYIXk9tG = await WalletBbCYwpt.deposit.call(uinthw6uKsE, {from: accounts[2]});
		const uintbu7mqz = await WalletBbCYwpt.withdraw.call(uintgGmwEaR, {from: accounts[0]});
		const uintR7bKR0J = await WalletBbCYwpt.deposit.call(uintxf0I75, {from: accounts[0]});
		const uintYxvCs6L = await WalletBbCYwpt.deposit.call(uintTZy1JeG, {from: accounts[3]});
		const uintN4lAZWJ = await WalletBbCYwpt.deposit.call(uintt7J4IaX, {from: accounts[2]});

		await expect(WalletBbCYwpt.withdraw.call(uintVxghmwe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})