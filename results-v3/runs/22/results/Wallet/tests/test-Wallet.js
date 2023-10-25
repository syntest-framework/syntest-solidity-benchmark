const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletvBi5HaP = await Wallet.new({from: accounts[2]});
		const uintkwEDbqC = BigInt("420")
		const uintvIvuLFW = BigInt("1002")
		const uintJD14zq = BigInt("619")
		const uintmdSysk3 = await WalletvBi5HaP.deposit.call(uintkwEDbqC, {from: accounts[3]});
		const uintzkdrTej = await WalletvBi5HaP.deposit.call(uintvIvuLFW, {from: accounts[1]});
		const uintXHx0QHI = await WalletvBi5HaP.deposit.call(uintJD14zq, {from: accounts[3]});

		await expect(WalletvBi5HaP.deposit.call(uintkwEDbqC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Wallet7DSGxr = await Wallet.new({from: accounts[3]});
		const uintOP08Lz = BigInt("1458")
		const uintyg69csA = BigInt("1802")
		const uintYckALEg = BigInt("851")
		const uintgWBG0UH = BigInt("1213")
		const uintNR9c2pH = BigInt("153")
		const uintpot0AYz = await Wallet7DSGxr.withdraw.call(uintOP08Lz, {from: accounts[0]});
		const uintjvP50cZ = await Wallet7DSGxr.deposit.call(uintyg69csA, {from: accounts[3]});
		const uintihnE6mo = await Wallet7DSGxr.deposit.call(uintYckALEg, {from: accounts[4]});
		const uintvV72lU = await Wallet7DSGxr.deposit.call(uintgWBG0UH, {from: accounts[0]});
		const uintRGhxlpQ = await Wallet7DSGxr.deposit.call(uintNR9c2pH, {from: accounts[1]});

		await expect(Wallet7DSGxr.withdraw.call(uintOP08Lz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})