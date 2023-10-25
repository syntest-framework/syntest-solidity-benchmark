const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletsdHy7Xs = await Wallet.new({from: accounts[0]});
		const uintm9BTWsF = BigInt("629")
		const uintJDzBUmk = BigInt("55")
		const uintTYULfTl = BigInt("1302")
		const uintcKngrDR = BigInt("226")
		const uintkEpY3qr = await WalletsdHy7Xs.deposit.call(uintm9BTWsF, {from: accounts[1]});
		const uintPJ6EWn = await WalletsdHy7Xs.withdraw.call(uintJDzBUmk, {from: accounts[1]});
		const uintmw5Nubo = await WalletsdHy7Xs.withdraw.call(uintTYULfTl, {from: accounts[2]});
		const uintilBhIKt = await WalletsdHy7Xs.deposit.call(uintcKngrDR, {from: accounts[4]});

		await expect(WalletsdHy7Xs.deposit.call(uintm9BTWsF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Walletj5aFiWJ = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZ1fjMEA = BigInt("854")
		const uintGxBzcrF = BigInt("761")
		const uintOy7H8L3 = BigInt("500")
		const uintuwQDiaZ = BigInt("154")
		const uintTcDAkVv = await Walletj5aFiWJ.withdraw.call(uintZ1fjMEA, {from: "0x0000000000000000000000000000000000000001"});
		const uintxW0pPiz = await Walletj5aFiWJ.withdraw.call(uintGxBzcrF, {from: accounts[1]});
		const uintk3jooW = await Walletj5aFiWJ.deposit.call(uintOy7H8L3, {from: accounts[2]});
		const uintmKeREpJ = await Walletj5aFiWJ.withdraw.call(uintuwQDiaZ, {from: accounts[4]});
	});

	it('test for Wallet', async () => {
		const WalletV384U87 = await Wallet.new({from: accounts[3]});
		const uintBEY0GRD = BigInt("1037")
		const uintsIOnNk3 = BigInt("821")
		const uintifdtnj4 = BigInt("1012")
		const uintHJJBWm = BigInt("744")
		const uintaehbAG = BigInt("187")
		const uintGPVMjs2 = await WalletV384U87.withdraw.call(uintBEY0GRD, {from: accounts[2]});
		const uintdU48yd2 = await WalletV384U87.deposit.call(uintsIOnNk3, {from: accounts[1]});
		const uintO3zWkYL = await WalletV384U87.deposit.call(uintifdtnj4, {from: "0x0000000000000000000000000000000000000001"});
		const uintUr2l0IF = await WalletV384U87.withdraw.call(uintHJJBWm, {from: accounts[4]});
		const uinttYOgpGl = await WalletV384U87.withdraw.call(uintaehbAG, {from: accounts[3]});

		await expect(WalletV384U87.withdraw.call(uintBEY0GRD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletMuih8H = await Wallet.new({from: accounts[0]});
		const uintRYUiD6Q = BigInt("0")
		const uintA23Fhq9 = await WalletMuih8H.deposit.call(uintRYUiD6Q, {from: "0x0000000000000000000000000000000000000001"});
	});
})