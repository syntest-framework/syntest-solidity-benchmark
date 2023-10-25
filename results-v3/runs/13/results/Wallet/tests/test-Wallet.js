const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletK7Z5w2 = await Wallet.new({from: accounts[3]});
		const uintILgMhj = BigInt("1753")
		const uintBRqnVzD = BigInt("1444")
		const uintjYRSBId = BigInt("1135")
		const uintksDygZO = BigInt("550")
		const uintj5STPWY = BigInt("604")
		const uintZd2JssC = BigInt("1412")
		const uinthWj7ipm = await WalletK7Z5w2.withdraw.call(uintILgMhj, {from: accounts[3]});
		const uinttftWi1I = await WalletK7Z5w2.deposit.call(uintBRqnVzD, {from: accounts[0]});
		const uintFnnKxR = await WalletK7Z5w2.withdraw.call(uintjYRSBId, {from: accounts[0]});
		const uintjHI81bC = await WalletK7Z5w2.withdraw.call(uintksDygZO, {from: accounts[2]});
		const uintIGm41Lf = await WalletK7Z5w2.withdraw.call(uintj5STPWY, {from: accounts[2]});
		const uintc4vm5yw = await WalletK7Z5w2.deposit.call(uintZd2JssC, {from: accounts[4]});

		await expect(WalletK7Z5w2.withdraw.call(uintILgMhj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletDnWPPmZ = await Wallet.new({from: accounts[3]});
		const uintTUYCA4 = BigInt("810")
		const uintrOQrbvp = BigInt("1721")
		const uintc6azggb = await WalletDnWPPmZ.deposit.call(uintTUYCA4, {from: accounts[4]});
		const uintTkmNI5a = await WalletDnWPPmZ.withdraw.call(uintrOQrbvp, {from: accounts[2]});

		await expect(WalletDnWPPmZ.deposit.call(uintTUYCA4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletBL8WkQi = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzz82iKv = BigInt("936")
		const uintYE257OI = BigInt("439")
		const uintIpxrU9n = BigInt("306")
		const uintI6p6VPH = await WalletBL8WkQi.deposit.call(uintzz82iKv, {from: accounts[5]});
		const uintq1VidVk = await WalletBL8WkQi.deposit.call(uintYE257OI, {from: accounts[3]});
		const uintuk1ZoEp = await WalletBL8WkQi.withdraw.call(uintIpxrU9n, {from: "0x0000000000000000000000000000000000000001"});
	});
})