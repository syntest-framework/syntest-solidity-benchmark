const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletkcoHC35 = await Wallet.new({from: accounts[2]});
		const uintfM19rd7 = BigInt("1323")
		const uintGKN5Zwz = BigInt("742")
		const uintUgjRu7 = BigInt("1283")
		const uintlgCQno = await WalletkcoHC35.withdraw.call(uintfM19rd7, {from: accounts[0]});
		const uintUvYksru = await WalletkcoHC35.withdraw.call(uintGKN5Zwz, {from: "0x0000000000000000000000000000000000000001"});
		const uintMevEVbu = await WalletkcoHC35.deposit.call(uintUgjRu7, {from: accounts[3]});

		await expect(WalletkcoHC35.withdraw.call(uintfM19rd7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Walletkk153ge = await Wallet.new({from: accounts[5]});
		const uintJb7qhoJ = BigInt("1492")
		const uintStJSP7Q = BigInt("1565")
		const uintAlsFkv3 = BigInt("331")
		const uintO0docQP = await Walletkk153ge.deposit.call(uintJb7qhoJ, {from: accounts[5]});
		const uintvsFXBbm = await Walletkk153ge.withdraw.call(uintStJSP7Q, {from: accounts[1]});
		const uintzV0V1Gt = await Walletkk153ge.deposit.call(uintAlsFkv3, {from: accounts[1]});

		await expect(Walletkk153ge.deposit.call(uintJb7qhoJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const Wallety1whreN = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgAiSqw3 = BigInt("1049")
		const uintHxibOz = BigInt("549")
		const uintaDfG4J7 = BigInt("603")
		const uintfrsjdd = BigInt("1435")
		const uintKc7ufAp = BigInt("1923")
		const uinth2p9igc = BigInt("498")
		const uintxbUma09 = await Wallety1whreN.deposit.call(uintgAiSqw3, {from: accounts[5]});
		const uint7RqqQ1 = await Wallety1whreN.deposit.call(uintHxibOz, {from: accounts[4]});
		const uintrVx1Wc5 = await Wallety1whreN.deposit.call(uintaDfG4J7, {from: accounts[1]});
		const uintK40OFWR = await Wallety1whreN.withdraw.call(uintfrsjdd, {from: accounts[2]});
		const uintQJS011Y = await Wallety1whreN.deposit.call(uintKc7ufAp, {from: "0x0000000000000000000000000000000000000001"});
		const uintyeQN0zG = await Wallety1whreN.deposit.call(uinth2p9igc, {from: accounts[0]});
	});

	it('test for Wallet', async () => {
		const Walletkk153ge = await Wallet.new({from: accounts[5]});
		const uintiw2wG8i = BigInt("0")
		const uinttUeQjYd = BigInt("1038")
		const uintkvPgwlf = BigInt("1092")
		const uintM7ymtSb = BigInt("1545")
		const uintbV3Xyq = await Walletkk153ge.deposit.call(uintiw2wG8i, {from: accounts[1]});
		const uintMKV5N0 = await Walletkk153ge.deposit.call(uinttUeQjYd, {from: accounts[3]});
		const uintGfsI5PO = await Walletkk153ge.withdraw.call(uintkvPgwlf, {from: accounts[3]});
		const uintvsFXBbm = await Walletkk153ge.withdraw.call(uintM7ymtSb, {from: accounts[1]});

		await expect(Walletkk153ge.deposit.call(uinttUeQjYd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})