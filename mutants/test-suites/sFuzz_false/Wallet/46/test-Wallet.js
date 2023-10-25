const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletBIbxU0e = await Wallet.new({from: accounts[5]});
		const uintN85UrdZ = BigInt("1665")
		const uintrWsgvJp = BigInt("1698")
		const uintjOETnyk = BigInt("1022")
//		const uintk35y5Gv = await WalletBIbxU0e.withdraw.call(uintN85UrdZ, {from: accounts[0]});
//		const uintCTddfP6 = await WalletBIbxU0e.deposit.call(uintrWsgvJp, {from: accounts[0]});
//		const uintZ2HeSYn = await WalletBIbxU0e.withdraw.call(uintjOETnyk, {from: accounts[2]});

		await expect(WalletBIbxU0e.withdraw.call(uintN85UrdZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletHEt7eGZ = await Wallet.new({from: accounts[1]});
		const uintBVUvJ4m = BigInt("157")
		const uinth0ywzNS = BigInt("154")
		const uintDaueuIT = BigInt("1962")
		const uintfguWPYk = BigInt("1511")
//		const uintdjgdWce = await WalletHEt7eGZ.deposit.call(uintBVUvJ4m, {from: accounts[0]});
//		const uintXkWwSs = await WalletHEt7eGZ.deposit.call(uinth0ywzNS, {from: "0x0000000000000000000000000000000000000001"});
//		const uintMvVYp5c = await WalletHEt7eGZ.withdraw.call(uintDaueuIT, {from: accounts[1]});
//		const uintilhtxIF = await WalletHEt7eGZ.deposit.call(uintfguWPYk, {from: accounts[2]});

		await expect(WalletHEt7eGZ.deposit.call(uintBVUvJ4m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletX8UOnVK = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrfB0zvU = BigInt("1989")
		const uintDOFCjMe = BigInt("448")
		const uintILwETHz = BigInt("984")
		const uintSFY1jEx = BigInt("231")
		const uinty96HbD = BigInt("1037")
		const uintKbmLxvg = await WalletX8UOnVK.withdraw.call(uintrfB0zvU, {from: accounts[0]});
		const uintRGim5J1 = await WalletX8UOnVK.withdraw.call(uintDOFCjMe, {from: accounts[2]});
		const uintEub9o59 = await WalletX8UOnVK.deposit.call(uintILwETHz, {from: accounts[2]});
		const uintlmRjzw = await WalletX8UOnVK.deposit.call(uintSFY1jEx, {from: accounts[1]});
		const uintXglEBh = await WalletX8UOnVK.withdraw.call(uinty96HbD, {from: accounts[1]});
	});
})