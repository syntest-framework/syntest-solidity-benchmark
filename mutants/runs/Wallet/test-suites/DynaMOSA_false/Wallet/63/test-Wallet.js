const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletTGfQGmY = await Wallet.new({from: accounts[4]});
		const uintjNs3DJ7 = BigInt("542")
		const uintRFc4tlf = BigInt("573")
		const uinty4oYZdC = BigInt("16")
		const uintrePOYZC = BigInt("1829")
		const uintF6IdxgL = await WalletTGfQGmY.withdraw.call(uintjNs3DJ7, {from: "0x0000000000000000000000000000000000000001"});
		const uintUb40Tr = await WalletTGfQGmY.withdraw.call(uintRFc4tlf, {from: accounts[5]});
		const uintnWwS5V = await WalletTGfQGmY.withdraw.call(uinty4oYZdC, {from: accounts[0]});
		const uintNYYWbKk = await WalletTGfQGmY.withdraw.call(uintrePOYZC, {from: accounts[4]});

		await expect(WalletTGfQGmY.withdraw.call(uintjNs3DJ7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletYG8jVHG = await Wallet.new({from: accounts[2]});
		const uintCLmPDpf = BigInt("1105")
		const uintNtsyn1k = BigInt("186")
		const uintjFvcTHk = BigInt("1842")
		const uintwGJVzn2 = BigInt("919")
		const uintAKgfN4 = await WalletYG8jVHG.deposit.call(uintCLmPDpf, {from: accounts[4]});
		const uintbrTBtVV = await WalletYG8jVHG.deposit.call(uintNtsyn1k, {from: accounts[2]});
		const uintMUnLsIE = await WalletYG8jVHG.withdraw.call(uintjFvcTHk, {from: accounts[2]});
		const uintadMQej = await WalletYG8jVHG.withdraw.call(uintwGJVzn2, {from: accounts[3]});

		await expect(WalletYG8jVHG.deposit.call(uintCLmPDpf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WallethZ2pQHl = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAfDHp4 = BigInt("1289")
		const uintVXvKVW = BigInt("875")
		const uinttP3uP3l = BigInt("563")
		const uintwPvQIXX = BigInt("1967")
		const uintfYgKJY = BigInt("706")
		const uintwbVJ6m = BigInt("737")
		const uintjg47cqJ = await WallethZ2pQHl.deposit.call(uintAfDHp4, {from: accounts[0]});
		const uintO6vQoR = await WallethZ2pQHl.deposit.call(uintVXvKVW, {from: accounts[0]});
		const uintRYVRKab = await WallethZ2pQHl.withdraw.call(uinttP3uP3l, {from: accounts[1]});
		const uintkSqgQim = await WallethZ2pQHl.deposit.call(uintwPvQIXX, {from: "0x0000000000000000000000000000000000000001"});
		const uintVfj3VP4 = await WallethZ2pQHl.deposit.call(uintfYgKJY, {from: accounts[2]});
		const uintG6UnsEy = await WallethZ2pQHl.deposit.call(uintwbVJ6m, {from: accounts[5]});
	});
})