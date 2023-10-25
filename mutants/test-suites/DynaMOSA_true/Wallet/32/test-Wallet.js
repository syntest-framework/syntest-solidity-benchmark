const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletIDCDwmf = await Wallet.new({from: accounts[3]});
		const uintV8ylp9E = BigInt("1048")
		const uintWiywtuB = BigInt("1039")
		const uintfVTYClm = BigInt("582")
//		const uintqayr1VQ = await WalletIDCDwmf.deposit.call(uintV8ylp9E, {from: accounts[3]});
//		const uinthqYsE9v = await WalletIDCDwmf.deposit.call(uintWiywtuB, {from: accounts[2]});
//		const uintXrTAo2m = await WalletIDCDwmf.withdraw.call(uintfVTYClm, {from: accounts[1]});

		await expect(WalletIDCDwmf.deposit.call(uintV8ylp9E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Walletw0RwVEh = await Wallet.new({from: accounts[4]});
		const uintBn7znpy = BigInt("281")
		const uintMFV0ag4 = BigInt("1895")
		const uintQHuw22Z = BigInt("895")
//		const uintOBOmT3p = await Walletw0RwVEh.withdraw.call(uintBn7znpy, {from: accounts[4]});
//		const uintaw75MmT = await Walletw0RwVEh.withdraw.call(uintMFV0ag4, {from: accounts[3]});
//		const uintwQOaWJB = await Walletw0RwVEh.deposit.call(uintQHuw22Z, {from: accounts[0]});

		await expect(Walletw0RwVEh.withdraw.call(uintBn7znpy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Walletl8umoNL = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintaSB60Am = BigInt("343")
		const uintcxS9yb4 = BigInt("595")
		const uinty4gIBYn = BigInt("849")
		const uintUqgok8N = await Walletl8umoNL.withdraw.call(uintaSB60Am, {from: accounts[2]});
		const uintBbUa5kU = await Walletl8umoNL.deposit.call(uintcxS9yb4, {from: accounts[1]});
		const uintCoAWwCM = await Walletl8umoNL.deposit.call(uinty4gIBYn, {from: accounts[4]});
	});
})