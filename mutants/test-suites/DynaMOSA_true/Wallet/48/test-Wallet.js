const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletRq2ZII = await Wallet.new({from: accounts[4]});
		const uintHILPWCn = BigInt("1821")
		const uinto6ReF25 = BigInt("15")
		const uintBDifdIO = BigInt("1414")
		const uintLttpcRT = BigInt("587")
		const uintJSAnB3R = BigInt("1777")
		const uintw4JuYlN = BigInt("120")
//		const uintg64EXno = await WalletRq2ZII.deposit.call(uintHILPWCn, {from: accounts[2]});
//		const uintAjYEkCR = await WalletRq2ZII.withdraw.call(uinto6ReF25, {from: accounts[3]});
//		const uintLOeJgb9 = await WalletRq2ZII.deposit.call(uintBDifdIO, {from: accounts[2]});
//		const uintMtsjpBc = await WalletRq2ZII.deposit.call(uintLttpcRT, {from: accounts[3]});
//		const uintVOPwxF = await WalletRq2ZII.withdraw.call(uintJSAnB3R, {from: accounts[4]});
//		const uinttnf0jSF = await WalletRq2ZII.deposit.call(uintw4JuYlN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WalletRq2ZII.deposit.call(uintHILPWCn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletmPUSRFu = await Wallet.new({from: accounts[5]});
		const uintIKwQdx0 = BigInt("1328")
		const uinthfqJJT = BigInt("1901")
		const uintsAHdY8W = BigInt("1953")
		const uintzqvH50 = BigInt("1428")
//		const uintwbm1GNf = await WalletmPUSRFu.withdraw.call(uintIKwQdx0, {from: accounts[0]});
//		const uintCBclrB = await WalletmPUSRFu.deposit.call(uinthfqJJT, {from: accounts[4]});
//		const uintF2fa3fI = await WalletmPUSRFu.withdraw.call(uintsAHdY8W, {from: accounts[1]});
//		const uintoKg86CE = await WalletmPUSRFu.withdraw.call(uintzqvH50, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WalletmPUSRFu.withdraw.call(uintIKwQdx0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletE8haHEP = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthhibVF = BigInt("196")
		const uintBKrF9kq = BigInt("370")
		const uintOybwbDt = BigInt("2004")
		const uintIGQcWv = BigInt("1047")
		const uintM5HA5LG = BigInt("1265")
		const uintOlBBmBG = await WalletE8haHEP.deposit.call(uinthhibVF, {from: accounts[4]});
		const uintEAdQkIT = await WalletE8haHEP.deposit.call(uintBKrF9kq, {from: accounts[4]});
		const uintPqnrn8l = await WalletE8haHEP.deposit.call(uintOybwbDt, {from: accounts[3]});
		const uintzn7d0lQ = await WalletE8haHEP.deposit.call(uintIGQcWv, {from: accounts[2]});
		const uintxUzILC1 = await WalletE8haHEP.deposit.call(uintM5HA5LG, {from: accounts[2]});
	});

	it('test for Wallet', async () => {
		const WalletZ3SYZu = await Wallet.new({from: accounts[4]});
		const uintmC7dfPn = BigInt("0")
		const uintLakAEpu = BigInt("1991")
		const uintzvedUP3 = BigInt("1368")
		const uintjKrW3YH = await WalletZ3SYZu.deposit.call(uintmC7dfPn, {from: accounts[1]});
//		const uintYceTYay = await WalletZ3SYZu.deposit.call(uintLakAEpu, {from: accounts[4]});
//		const uintyNGj3lc = await WalletZ3SYZu.withdraw.call(uintzvedUP3, {from: accounts[1]});

		await expect(WalletZ3SYZu.deposit.call(uintLakAEpu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})