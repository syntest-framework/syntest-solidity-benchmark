const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletU41TAM = await Wallet.new({from: accounts[0]});
		const uintqR3qKXB = BigInt("1292")
		const uintWKUfVSA = BigInt("788")
		const uintDCPX32p = BigInt("1546")
		const uintQqjgrE4 = BigInt("1892")
		const uintMPueFM = BigInt("1294")
		const uintRUpsBZ = await WalletU41TAM.withdraw.call(uintqR3qKXB, {from: accounts[1]});
		const uintMbktrtX = await WalletU41TAM.withdraw.call(uintWKUfVSA, {from: accounts[2]});
		const uintSoX5lVF = await WalletU41TAM.deposit.call(uintDCPX32p, {from: accounts[1]});
		const uintoPOOdVs = await WalletU41TAM.withdraw.call(uintQqjgrE4, {from: accounts[3]});
		const uintJwLuH1J = await WalletU41TAM.deposit.call(uintMPueFM, {from: accounts[1]});

		await expect(WalletU41TAM.withdraw.call(uintqR3qKXB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletLLMAIZd = await Wallet.new({from: accounts[3]});
		const uintsExpMxD = BigInt("1277")
		const uintglF5jj = BigInt("1704")
		const uintoycX3U6 = BigInt("197")
		const uintxkTkT6c = await WalletLLMAIZd.deposit.call(uintsExpMxD, {from: accounts[2]});
		const uintKeyDKof = await WalletLLMAIZd.withdraw.call(uintglF5jj, {from: accounts[2]});
		const uintjEgIyND = await WalletLLMAIZd.withdraw.call(uintoycX3U6, {from: accounts[5]});

		await expect(WalletLLMAIZd.deposit.call(uintsExpMxD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})