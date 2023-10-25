const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletNXNeDp4 = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdjtVqKW = BigInt("1292")
		const uintbRlMMbY = BigInt("1388")
		const uintOQa9ydU = BigInt("2047")
		const uintk8DTaiQ = await WalletNXNeDp4.withdraw.call(uintdjtVqKW, {from: accounts[1]});
		const uintJwqouR = await WalletNXNeDp4.deposit.call(uintbRlMMbY, {from: accounts[1]});
		const uintc5eFCMt = await WalletNXNeDp4.withdraw.call(uintOQa9ydU, {from: accounts[1]});
	});

	it('test for Wallet', async () => {
		const WalletTagM19M = await Wallet.new({from: accounts[5]});
		const uintUipYLOF = BigInt("527")
		const uintTooTL1O = BigInt("1563")
		const uintoRQdWb8 = BigInt("1173")
		const uintxqthpO = BigInt("230")
		const uintHCriEQA = BigInt("1268")
		const uintFZdgDbk = await WalletTagM19M.deposit.call(uintUipYLOF, {from: accounts[1]});
		const uintMxL00n = await WalletTagM19M.deposit.call(uintTooTL1O, {from: accounts[2]});
		const uintzDkId9x = await WalletTagM19M.withdraw.call(uintoRQdWb8, {from: accounts[1]});
		const uintADo6lFo = await WalletTagM19M.deposit.call(uintxqthpO, {from: accounts[0]});
		const uintR3Ah1gd = await WalletTagM19M.withdraw.call(uintHCriEQA, {from: accounts[0]});

		await expect(WalletTagM19M.deposit.call(uintUipYLOF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Walleti4UXhpu = await Wallet.new({from: accounts[2]});
		const uintcGFZv2H = BigInt("1060")
		const uintHXhV5bt = BigInt("1682")
		const uintXu8voq3 = await Walleti4UXhpu.withdraw.call(uintcGFZv2H, {from: accounts[2]});
		const uintRZH5o9Y = await Walleti4UXhpu.withdraw.call(uintHXhV5bt, {from: accounts[0]});

		await expect(Walleti4UXhpu.withdraw.call(uintcGFZv2H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})