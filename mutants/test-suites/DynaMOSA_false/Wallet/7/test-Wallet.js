const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletBAJVwqa = await Wallet.new({from: accounts[0]});
		const uintlpKNq4Q = BigInt("1411")
		const uintzNI3rs = BigInt("1242")
		const uintL581dbc = BigInt("180")
//		const uintxGLEXYR = await WalletBAJVwqa.withdraw.call(uintlpKNq4Q, {from: accounts[5]});
//		const uintHSxHur2 = await WalletBAJVwqa.withdraw.call(uintzNI3rs, {from: accounts[4]});
//		const uintsYdjPh5 = await WalletBAJVwqa.withdraw.call(uintL581dbc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WalletBAJVwqa.withdraw.call(uintlpKNq4Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletTyubqed = await Wallet.new({from: accounts[2]});
		const uintvAxJvNO = BigInt("229")
		const uintBrlbr2U = BigInt("1338")
		const uintVdglgKq = BigInt("760")
		const uintwBf31gm = BigInt("2001")
//		const uintRzRN6q6 = await WalletTyubqed.deposit.call(uintvAxJvNO, {from: accounts[3]});
//		const uint6lZXnA = await WalletTyubqed.withdraw.call(uintBrlbr2U, {from: accounts[5]});
//		const uintf3h9cUV = await WalletTyubqed.withdraw.call(uintVdglgKq, {from: accounts[0]});
//		const uintFcFPuZs = await WalletTyubqed.withdraw.call(uintwBf31gm, {from: accounts[2]});

		await expect(WalletTyubqed.deposit.call(uintvAxJvNO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})