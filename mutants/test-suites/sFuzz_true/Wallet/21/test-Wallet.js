const Wallet = artifacts.require("Wallet");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Wallet', (accounts) => {
	it('test for Wallet', async () => {
		const WalletrmcQzn6 = await Wallet.new({from: accounts[2]});
		const uintjDRIDmR = BigInt("384")
		const uintg8IIiUb = BigInt("1315")
		const uintUHJ9KyJ = BigInt("468")
		const uintREHZH2H = BigInt("985")
		const uintvfLsrob = BigInt("1347")
//		const uintXjVrBXK = await WalletrmcQzn6.withdraw.call(uintjDRIDmR, {from: accounts[2]});
//		const uintZdm9cRu = await WalletrmcQzn6.withdraw.call(uintg8IIiUb, {from: "0x0000000000000000000000000000000000000001"});
//		const uintbi8ZrUf = await WalletrmcQzn6.deposit.call(uintUHJ9KyJ, {from: accounts[2]});
//		const uintcWFpd9o = await WalletrmcQzn6.withdraw.call(uintREHZH2H, {from: accounts[3]});
//		const uintMIopo27 = await WalletrmcQzn6.withdraw.call(uintvfLsrob, {from: accounts[1]});

		await expect(WalletrmcQzn6.withdraw.call(uintjDRIDmR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WalletcsCtSUV = await Wallet.new({from: accounts[4]});
		const uintL6a7gjS = BigInt("486")
		const uintAELnREW = BigInt("1844")
		const uintkC69Bui = BigInt("1816")
		const uintxzNBmYQ = BigInt("1472")
//		const uintc0bNk96 = await WalletcsCtSUV.deposit.call(uintL6a7gjS, {from: accounts[4]});
//		const uinthHqCfe = await WalletcsCtSUV.deposit.call(uintAELnREW, {from: accounts[4]});
//		const uintOzvFm9L = await WalletcsCtSUV.withdraw.call(uintkC69Bui, {from: accounts[2]});
//		const uinteTAPLqn = await WalletcsCtSUV.deposit.call(uintxzNBmYQ, {from: accounts[2]});

		await expect(WalletcsCtSUV.deposit.call(uintL6a7gjS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Wallet', async () => {
		const WallettKqnsgi = await Wallet.new({from: "0x0000000000000000000000000000000000000001"});
		const uintOqbMVZ2 = BigInt("434")
		const uintBWaB75 = BigInt("398")
		const uintT71EoF9 = BigInt("1094")
		const uintEQpPtU0 = BigInt("1255")
		const uinttWkywaO = await WallettKqnsgi.withdraw.call(uintOqbMVZ2, {from: accounts[2]});
		const uintqms5DdU = await WallettKqnsgi.withdraw.call(uintBWaB75, {from: accounts[0]});
		const uintHvHlAfU = await WallettKqnsgi.withdraw.call(uintT71EoF9, {from: accounts[0]});
		const uintJvGzuy1 = await WallettKqnsgi.withdraw.call(uintEQpPtU0, {from: accounts[3]});
	});
})