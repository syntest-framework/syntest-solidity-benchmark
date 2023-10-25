const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletvWBm4a3 = await Wallet.new({from: accounts[3]});
		const uintGYsFr0 = BigInt("842")
		const uintJMSNFj0 = BigInt("103")
		const uintfc30plZ = BigInt("1882")
		const uintOLUfcx4 = BigInt("913")
//		const uintDRwqLeN = await WalletvWBm4a3.deposit.call(uintGYsFr0, {from: accounts[3]});
//		const uintVCaCsWk = await WalletvWBm4a3.deposit.call(uintJMSNFj0, {from: accounts[3]});
//		const uintYnEfT4P = await WalletvWBm4a3.withdraw.call(uintfc30plZ, {from: accounts[4]});
//		const uintlBPOBg = await WalletvWBm4a3.withdraw.call(uintOLUfcx4, {from: accounts[4]});

		await expect(WalletvWBm4a3.deposit.call(uintGYsFr0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletouyuqrM = await Wallet.new({from: accounts[2]});
		const uintjFVBVib = BigInt("1521")
		const uintMK6lIF0 = BigInt("1229")
		const uintKIAoNVH = BigInt("1386")
		const uintStQf9Aq = BigInt("1473")
		const uintXgUML51 = BigInt("1903")
//		const uintDgSvRhK = await WalletouyuqrM.withdraw.call(uintjFVBVib, {from: accounts[2]});
//		const uintt7z7sn = await WalletouyuqrM.withdraw.call(uintMK6lIF0, {from: accounts[3]});
//		const uintHqZXQFt = await WalletouyuqrM.deposit.call(uintKIAoNVH, {from: accounts[1]});
//		const uintJYByDGg = await WalletouyuqrM.withdraw.call(uintStQf9Aq, {from: "0x0000000000000000000000000000000000000001"});
//		const uintTpH0pnl = await WalletouyuqrM.withdraw.call(uintXgUML51, {from: accounts[0]});

		await expect(WalletouyuqrM.withdraw.call(uintjFVBVib, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletFmZ9MK9 = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWyWCDSl = BigInt("468")
		const uintO6DEBwn = BigInt("252")
		const uintAn7IlE = BigInt("648")
		const uintI3AfCpy = await WalletFmZ9MK9.deposit.call(uintWyWCDSl, {from: accounts[2]});
		const uintKMmXTJj = await WalletFmZ9MK9.withdraw.call(uintO6DEBwn, {from: accounts[2]});
		const uintFrJe8K = await WalletFmZ9MK9.withdraw.call(uintAn7IlE, {from: accounts[3]});
	});

	it('test for Wallet', async () => {
		const WalletW1MT7iu = await Wallet.new({from: accounts[1]});
		const uintRsJrVH = BigInt("0")
		const uintuQrMCR = BigInt("1866")
		const uintTrYYXHQ = BigInt("494")
		const uintjrIh8lw = await WalletW1MT7iu.withdraw.call(uintRsJrVH, {from: accounts[0]});
//		const uintwxp4n2T = await WalletW1MT7iu.withdraw.call(uintuQrMCR, {from: accounts[0]});
//		const uinteGmX8HC = await WalletW1MT7iu.deposit.call(uintTrYYXHQ, {from: accounts[1]});

		await expect(WalletW1MT7iu.withdraw.call(uintuQrMCR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})