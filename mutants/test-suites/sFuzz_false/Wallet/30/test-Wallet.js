const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const Walleti6ojSi = await Wallet.new({from: accounts[4]});
		const uintiuETfOH = BigInt("1371")
		const uintejYsTNN = BigInt("1687")
		const uintQlWUO30 = BigInt("2003")
		const uintwwNHsx5 = BigInt("1021")
//		const uintWElpxjY = await Walleti6ojSi.deposit.call(uintiuETfOH, {from: accounts[2]});
//		const uintH68PNDL = await Walleti6ojSi.deposit.call(uintejYsTNN, {from: accounts[2]});
//		const uintpIyzk1H = await Walleti6ojSi.deposit.call(uintQlWUO30, {from: accounts[0]});
//		const uintjkswLe = await Walleti6ojSi.withdraw.call(uintwwNHsx5, {from: accounts[1]});

		await expect(Walleti6ojSi.deposit.call(uintiuETfOH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletcF8MIhD = await Wallet.new({from: accounts[1]});
		const uintaLwc0Sd = BigInt("2037")
		const uintSk9AMAj = BigInt("962")
		const uintQ7RBsHS = BigInt("457")
		const uintArDXvu4 = BigInt("1637")
		const uintZpSJhmi = BigInt("203")
//		const uintVaky5FV = await WalletcF8MIhD.withdraw.call(uintaLwc0Sd, {from: accounts[4]});
//		const uintHDB8gbv = await WalletcF8MIhD.deposit.call(uintSk9AMAj, {from: accounts[5]});
//		const uintfGjMb9 = await WalletcF8MIhD.deposit.call(uintQ7RBsHS, {from: accounts[3]});
//		const uintbOvepbo = await WalletcF8MIhD.deposit.call(uintArDXvu4, {from: accounts[1]});
//		const uintwcHR9b = await WalletcF8MIhD.deposit.call(uintZpSJhmi, {from: accounts[1]});

		await expect(WalletcF8MIhD.withdraw.call(uintaLwc0Sd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletCUTcRyd = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uinti6zeytR = BigInt("1271")
		const uintIMrzkJ = BigInt("784")
		const uint46wylQ = BigInt("727")
		const uinttAJE8SM = BigInt("921")
		const uintHUeRjB1 = await WalletCUTcRyd.deposit.call(uinti6zeytR, {from: accounts[1]});
		const uints2FT05A = await WalletCUTcRyd.withdraw.call(uintIMrzkJ, {from: accounts[0]});
		const uint3w3zM0 = await WalletCUTcRyd.deposit.call(uint46wylQ, {from: accounts[1]});
		const uintx0Ckym2 = await WalletCUTcRyd.withdraw.call(uinttAJE8SM, {from: accounts[4]});
	});
})