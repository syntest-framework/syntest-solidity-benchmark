const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const Walletc0wxOt = await Wallet.new({from: accounts[2]});
		const uintBFJvhtu = BigInt("551")
		const uinthVUx2pB = BigInt("341")
		const uintPaLnhCx = BigInt("1414")
		const uintEPLMWgI = await Walletc0wxOt.withdraw.call(uintBFJvhtu, {from: accounts[0]});
		const uintgXTmEDN = await Walletc0wxOt.withdraw.call(uinthVUx2pB, {from: "0x0000000000000000000000000000000000000001"});
		const uintYhESij = await Walletc0wxOt.deposit.call(uintPaLnhCx, {from: accounts[1]});

		await expect(Walletc0wxOt.withdraw.call(uintBFJvhtu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletWjf5cEo = await Wallet.new({from: accounts[4]});
		const uintxdT7LJH = BigInt("1288")
		const uintFOEhvPu = BigInt("1508")
		const uintriDttOI = BigInt("1455")
		const uintz2Rf6D = BigInt("1644")
		const uintvX6bC62 = BigInt("1663")
		const uintorL8R9h = await WalletWjf5cEo.deposit.call(uintxdT7LJH, {from: accounts[3]});
		const uintXaUM2H6 = await WalletWjf5cEo.withdraw.call(uintFOEhvPu, {from: accounts[2]});
		const uintUlVkmWY = await WalletWjf5cEo.withdraw.call(uintriDttOI, {from: accounts[0]});
		const uint27EAoC = await WalletWjf5cEo.withdraw.call(uintz2Rf6D, {from: accounts[0]});
		const uintq1Telt = await WalletWjf5cEo.deposit.call(uintvX6bC62, {from: accounts[3]});

		await expect(WalletWjf5cEo.deposit.call(uintxdT7LJH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletM3VJ8Q5 = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRH41X0e = BigInt("1082")
		const uintv0n7KeC = BigInt("702")
		const uintQ36mpaW = BigInt("976")
		const uintLLKWigC = await WalletM3VJ8Q5.withdraw.call(uintRH41X0e, {from: accounts[2]});
		const uintsOQPw0Q = await WalletM3VJ8Q5.withdraw.call(uintv0n7KeC, {from: accounts[4]});
		const uintYrH9HPY = await WalletM3VJ8Q5.deposit.call(uintQ36mpaW, {from: accounts[5]});
	});
})