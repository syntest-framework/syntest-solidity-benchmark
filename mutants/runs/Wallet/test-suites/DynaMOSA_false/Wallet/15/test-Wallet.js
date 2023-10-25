const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletOkoZvlF = await Wallet.new({from: accounts[2]});
		const uintMVMx6bv = BigInt("1807")
		const uintz3JSNLk = BigInt("1107")
		const uintLROXegs = await WalletOkoZvlF.deposit.call(uintMVMx6bv, {from: accounts[3]});
		const uintqW2DBAq = await WalletOkoZvlF.withdraw.call(uintz3JSNLk, {from: accounts[4]});

		await expect(WalletOkoZvlF.deposit.call(uintMVMx6bv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletfkutJg5 = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrNq5ddy = BigInt("345")
		const uintU8hT6p = BigInt("1493")
		const uintJynxpff = await WalletfkutJg5.deposit.call(uintrNq5ddy, {from: accounts[2]});
		const uintVZoNRFE = await WalletfkutJg5.deposit.call(uintU8hT6p, {from: accounts[0]});
	});

	it('test for Wallet', async () => {
		const WalletS4Sqcwd = await Wallet.new({from: accounts[0]});
		const uintmvtIpra = BigInt("456")
		const uintRndCcAK = BigInt("1445")
		const uintd64dUOe = await WalletS4Sqcwd.withdraw.call(uintmvtIpra, {from: accounts[3]});
		const uintizau9DH = await WalletS4Sqcwd.withdraw.call(uintRndCcAK, {from: accounts[5]});

		await expect(WalletS4Sqcwd.withdraw.call(uintmvtIpra, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})