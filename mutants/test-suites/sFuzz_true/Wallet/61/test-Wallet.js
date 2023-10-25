const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const Walletcj8oJ1A = await Wallet.new({from: accounts[1]});
		const uintRPAANYt = BigInt("1993")
		const uintqZ3qtqC = BigInt("1419")
		const uintLAVOuns = BigInt("1508")
//		const uintLChHvFZ = await Walletcj8oJ1A.withdraw.call(uintRPAANYt, {from: accounts[0]});
//		const uintCvLPj6j = await Walletcj8oJ1A.deposit.call(uintqZ3qtqC, {from: accounts[0]});
//		const uintmB2VQm = await Walletcj8oJ1A.withdraw.call(uintLAVOuns, {from: accounts[2]});

		await expect(Walletcj8oJ1A.withdraw.call(uintRPAANYt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletfCZXZRS = await Wallet.new({from: accounts[5]});
		const uinty9Sr1cT = BigInt("1942")
		const uintbB45Joh = BigInt("649")
		const uintdvAn1Gs = BigInt("886")
		const uintOWVxE2 = BigInt("541")
		const uintjHNubBn = BigInt("934")
//		const uint2A6O6v = await WalletfCZXZRS.deposit.call(uinty9Sr1cT, {from: accounts[1]});
//		const uintKjZLYA = await WalletfCZXZRS.deposit.call(uintbB45Joh, {from: accounts[0]});
//		const uintF2EyyQn = await WalletfCZXZRS.withdraw.call(uintdvAn1Gs, {from: accounts[1]});
//		const uintPpSm9Rj = await WalletfCZXZRS.deposit.call(uintOWVxE2, {from: accounts[4]});
//		const uintYJ2E88m = await WalletfCZXZRS.deposit.call(uintjHNubBn, {from: accounts[4]});

		await expect(WalletfCZXZRS.deposit.call(uinty9Sr1cT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletKTk40v0 = await Wallet.new({from: accounts[1]});
		const uintsA7Lel = BigInt("0")
		const uintQGZL2pQ = BigInt("1347")
		const uintOHNtwhs = await WalletKTk40v0.withdraw.call(uintsA7Lel, {from: "0x0000000000000000000000000000000000000001"});
//		const uintNeg9t7 = await WalletKTk40v0.withdraw.call(uintQGZL2pQ, {from: accounts[4]});

		await expect(WalletKTk40v0.withdraw.call(uintQGZL2pQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletSRLQXV1 = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUU70rXK = BigInt("454")
		const uintzciyfW = BigInt("1829")
		const uintgaXZoz0 = BigInt("1896")
		const uintSP3Vms = await WalletSRLQXV1.withdraw.call(uintUU70rXK, {from: accounts[1]});
		const uintfyvc5zE = await WalletSRLQXV1.withdraw.call(uintzciyfW, {from: accounts[2]});
		const uintiTKMNrP = await WalletSRLQXV1.deposit.call(uintgaXZoz0, {from: accounts[4]});
	});
})