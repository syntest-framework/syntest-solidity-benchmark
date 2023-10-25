const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletL82tiUQ = await Wallet.new({from: accounts[0]});
		const uintqLjb222 = BigInt("716")
		const uintHQmjDdT = BigInt("699")
		const uintBB9s2xe = BigInt("1441")
		const uintmhLIxku = BigInt("317")
		const uintCwwtQxA = BigInt("2037")
		const uintGgQTu6G = await WalletL82tiUQ.withdraw.call(uintqLjb222, {from: accounts[1]});
		const uintAyu0rb = await WalletL82tiUQ.withdraw.call(uintHQmjDdT, {from: accounts[3]});
		const uintuv2rCBZ = await WalletL82tiUQ.withdraw.call(uintBB9s2xe, {from: accounts[4]});
		const uintRI7hlPM = await WalletL82tiUQ.withdraw.call(uintmhLIxku, {from: "0x0000000000000000000000000000000000000001"});
		const uintmEHSEl8 = await WalletL82tiUQ.withdraw.call(uintCwwtQxA, {from: accounts[2]});

		await expect(WalletL82tiUQ.withdraw.call(uintqLjb222, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletPiRqaKx = await Wallet.new({from: accounts[1]});
		const uintAFNlq6h = BigInt("1638")
		const uintlGSMSV = BigInt("1919")
		const uintIVPQg1i = BigInt("94")
		const uintNEAuTZN = BigInt("1265")
		const uintiScHzoT = await WalletPiRqaKx.deposit.call(uintAFNlq6h, {from: accounts[5]});
		const uintbUXqgGt = await WalletPiRqaKx.withdraw.call(uintlGSMSV, {from: accounts[2]});
		const uintYrXk1FR = await WalletPiRqaKx.withdraw.call(uintIVPQg1i, {from: accounts[5]});
		const uintgyCYjKO = await WalletPiRqaKx.deposit.call(uintNEAuTZN, {from: accounts[0]});

		await expect(WalletPiRqaKx.deposit.call(uintAFNlq6h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletU0TBR64 = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintK2VBPY8 = BigInt("1278")
		const uintXR9uvRM = BigInt("846")
		const uintW82AsvM = BigInt("625")
		const uintU6cRZT = BigInt("1276")
		const uinttgmQKG5 = BigInt("1631")
		const uintm3WKR0m = await WalletU0TBR64.deposit.call(uintK2VBPY8, {from: accounts[0]});
		const uintPS5z2mW = await WalletU0TBR64.withdraw.call(uintXR9uvRM, {from: accounts[2]});
		const uinttkPoaWZ = await WalletU0TBR64.withdraw.call(uintW82AsvM, {from: accounts[4]});
		const uinttjhicbr = await WalletU0TBR64.deposit.call(uintU6cRZT, {from: accounts[4]});
		const uintL1pZsHq = await WalletU0TBR64.deposit.call(uinttgmQKG5, {from: accounts[4]});
	});
})