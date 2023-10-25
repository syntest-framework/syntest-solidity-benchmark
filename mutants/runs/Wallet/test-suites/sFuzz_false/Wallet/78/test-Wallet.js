const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletWkDVU4i = await Wallet.new({from: accounts[2]});
		const uintj8u4f0T = BigInt("1235")
		const uintwsukpDL = BigInt("2010")
		const uintAQjnkiE = BigInt("75")
		const uintjvWbvG2 = BigInt("1384")
		const uintwe1cBtx = BigInt("1703")
		const uintoQlrAnr = await WalletWkDVU4i.withdraw.call(uintj8u4f0T, {from: accounts[0]});
		const uintmHGrRvl = await WalletWkDVU4i.deposit.call(uintwsukpDL, {from: accounts[1]});
		const uintHtV1XOd = await WalletWkDVU4i.deposit.call(uintAQjnkiE, {from: accounts[3]});
		const uintV08frUE = await WalletWkDVU4i.withdraw.call(uintjvWbvG2, {from: accounts[3]});
		const uintXIR1hm7 = await WalletWkDVU4i.withdraw.call(uintwe1cBtx, {from: accounts[2]});

		await expect(WalletWkDVU4i.withdraw.call(uintj8u4f0T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletjFPzmog = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUiljk3i = BigInt("1578")
		const uintkZNzlb7 = BigInt("1136")
		const uintPo7tlEi = BigInt("1388")
		const uintKdI5wR7 = await WalletjFPzmog.deposit.call(uintUiljk3i, {from: accounts[5]});
		const uintKnszeWN = await WalletjFPzmog.withdraw.call(uintkZNzlb7, {from: accounts[2]});
		const uintGnB6DCM = await WalletjFPzmog.withdraw.call(uintPo7tlEi, {from: accounts[5]});
	});

	it('test for Wallet', async () => {
		const WalletTufYZMT = await Wallet.new({from: accounts[4]});
		const uinteMbpndU = BigInt("737")
		const uintOCQqLv = BigInt("776")
		const uinta7q7iu1 = await WalletTufYZMT.deposit.call(uinteMbpndU, {from: accounts[4]});
		const uintTii0i5r = await WalletTufYZMT.deposit.call(uintOCQqLv, {from: accounts[3]});

		await expect(WalletTufYZMT.deposit.call(uinteMbpndU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})