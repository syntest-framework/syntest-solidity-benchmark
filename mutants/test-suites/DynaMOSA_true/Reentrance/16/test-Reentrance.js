const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceFdwR6I = await Reentrance.new({from: accounts[4]});
		const addressTaUy2pU = accounts[5]
		const addressijpP9wy = accounts[1]
		const addressdh6EFJk = accounts[2]
		const addressWsKFC6f = accounts[2]
		const uintBuHiYw = await ReentranceFdwR6I.balanceOf.call(addressTaUy2pU, {from: accounts[1]});
		const uintMwFhW1Y = await ReentranceFdwR6I.balanceOf.call(addressijpP9wy, {from: accounts[2]});
		const uintKtH8MJ4 = await ReentranceFdwR6I.balanceOf.call(addressdh6EFJk, {from: accounts[1]});
		const uintlmSsrRo = await ReentranceFdwR6I.balanceOf.call(addressWsKFC6f, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintBuHiYw, BigInt("0"))
		assert.equal(uintKtH8MJ4, BigInt("0"))
		assert.equal(uintMwFhW1Y, BigInt("0"))
		assert.equal(uintlmSsrRo, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentranceaZTIux = await Reentrance.new({from: accounts[1]});
		const uintMDL8mT1 = BigInt("1638")
		const addressKvRATil = accounts[1]
		const uintvHRVUbL = BigInt("1965")
		const uintSFIlxsl = await ReentranceaZTIux.withdraw.call(uintMDL8mT1, {from: accounts[5]});
		const uintqsi5Rl2 = await ReentranceaZTIux.balanceOf.call(addressKvRATil, {from: accounts[0]});
		const uintsXU06B1 = await ReentranceaZTIux.withdraw.call(uintvHRVUbL, {from: accounts[2]});

		assert.equal(uintqsi5Rl2, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentrancecxJ3rbV = await Reentrance.new({from: accounts[2]});
		const addressOvtQ4Cj = accounts[2]
		const uintMDTcFf8 = BigInt("968")
		const uintOqlYakY = await ReentrancecxJ3rbV.balanceOf.call(addressOvtQ4Cj, {from: accounts[0]});
		const uintoBtNdxJ = await ReentrancecxJ3rbV.withdraw.call(uintMDTcFf8, {from: "0x0000000000000000000000000000000000000001"});
//		await ReentrancecxJ3rbV.topup.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintOqlYakY, BigInt("0"))
		await expect(ReentrancecxJ3rbV.topup.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const ReentranceG5XP2CG = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshvhbExU = accounts[2]
		const addressH5pC4sq = accounts[4]
		const addressaFQCkTD = accounts[4]
		const uintAk7f9MR = BigInt("1664")
		const uinthj7wIXT = await ReentranceG5XP2CG.balanceOf.call(addresshvhbExU, {from: accounts[4]});
		await ReentranceG5XP2CG.topup.call({from: accounts[1]});
		const uintCF2fjy = await ReentranceG5XP2CG.balanceOf.call(addressH5pC4sq, {from: accounts[2]});
		const uintwKWhMFw = await ReentranceG5XP2CG.balanceOf.call(addressaFQCkTD, {from: accounts[1]});
		const uintvdjVpj5 = await ReentranceG5XP2CG.withdraw.call(uintAk7f9MR, {from: accounts[1]});
	});
})