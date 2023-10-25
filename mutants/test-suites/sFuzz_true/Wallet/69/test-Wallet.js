const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const Walletwxjjheb = await Wallet.new({from: accounts[2]});
		const uintCvEmfGM = BigInt("904")
		const uintqsRqt99 = BigInt("961")
//		const uintDV4sxwH = await Walletwxjjheb.withdraw.call(uintCvEmfGM, {from: accounts[4]});
//		const uintOyBT347 = await Walletwxjjheb.withdraw.call(uintqsRqt99, {from: accounts[1]});

		await expect(Walletwxjjheb.withdraw.call(uintCvEmfGM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WallethHUxRW = await Wallet.new({from: accounts[4]});
		const uintlBL3XYB = BigInt("6")
		const uinttj2GNhg = BigInt("1562")
		const uintknOIjRE = BigInt("118")
//		const uintRAvmbPh = await WallethHUxRW.deposit.call(uintlBL3XYB, {from: accounts[4]});
//		const uint845KLz = await WallethHUxRW.withdraw.call(uinttj2GNhg, {from: accounts[1]});
//		const uintlgjuIzL = await WallethHUxRW.withdraw.call(uintknOIjRE, {from: accounts[2]});

		await expect(WallethHUxRW.deposit.call(uintlBL3XYB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WallethHUxRW = await Wallet.new({from: accounts[4]});
		const uintjbPeIoj = BigInt("0")
		const uint3EAr6k = BigInt("1562")
		const uintFEU73qZ = BigInt("118")
		const uintY3dtgG = BigInt("1052")
		const uintRAvmbPh = await WallethHUxRW.deposit.call(uintjbPeIoj, {from: accounts[4]});
//		const uint845KLz = await WallethHUxRW.withdraw.call(uint3EAr6k, {from: accounts[1]});
//		const uintlgjuIzL = await WallethHUxRW.withdraw.call(uintFEU73qZ, {from: accounts[2]});
//		const uintfJkPxm5 = await WallethHUxRW.deposit.call(uintY3dtgG, {from: accounts[2]});

		await expect(WallethHUxRW.withdraw.call(uint3EAr6k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WallethDCoPIW = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uinteWB3Err = BigInt("874")
		const uintrmCAExz = BigInt("661")
		const uinty3TODe = BigInt("192")
		const uintW1VR5Aa = await WallethDCoPIW.withdraw.call(uinteWB3Err, {from: accounts[1]});
		const uintSvasWZk = await WallethDCoPIW.deposit.call(uintrmCAExz, {from: accounts[3]});
		const uintCMZQ4g7 = await WallethDCoPIW.deposit.call(uinty3TODe, {from: accounts[4]});
	});
})