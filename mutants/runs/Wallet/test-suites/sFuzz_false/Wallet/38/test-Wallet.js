const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletR7bUExg = await Wallet.new({from: accounts[0]});
		const uintECuKCwD = BigInt("2000")
		const uintaid953R = BigInt("982")
		const uintoA8OCB0 = BigInt("2023")
		const uintOWSERbO = BigInt("906")
		const uintSTOzSK2 = BigInt("423")
		const uintODHOgOQ = BigInt("143")
		const uinthCAoj0c = await WalletR7bUExg.deposit.call(uintECuKCwD, {from: "0x0000000000000000000000000000000000000001"});
		const uintG7QJG8m = await WalletR7bUExg.withdraw.call(uintaid953R, {from: accounts[4]});
		const uinttZCM1Io = await WalletR7bUExg.deposit.call(uintoA8OCB0, {from: accounts[3]});
		const uintqLVfSlb = await WalletR7bUExg.deposit.call(uintOWSERbO, {from: accounts[0]});
		const uintoK4Si1 = await WalletR7bUExg.deposit.call(uintSTOzSK2, {from: accounts[5]});
		const uintslmsQ6 = await WalletR7bUExg.withdraw.call(uintODHOgOQ, {from: accounts[0]});

		await expect(WalletR7bUExg.deposit.call(uintECuKCwD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletBu0Re9z = await Wallet.new({from: accounts[1]});
		const uintI9hFkg = BigInt("1953")
		const uintkpAvq4r = BigInt("512")
		const uintLUAK6HD = BigInt("1554")
		const uintvbp23XM = await WalletBu0Re9z.withdraw.call(uintI9hFkg, {from: accounts[1]});
		const uintPiNiO6Q = await WalletBu0Re9z.deposit.call(uintkpAvq4r, {from: accounts[4]});
		const uintIwMeOep = await WalletBu0Re9z.withdraw.call(uintLUAK6HD, {from: accounts[3]});

		await expect(WalletBu0Re9z.withdraw.call(uintI9hFkg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})