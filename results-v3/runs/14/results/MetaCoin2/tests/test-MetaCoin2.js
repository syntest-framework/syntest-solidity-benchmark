const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2tegmofJ = await MetaCoin2.new({from: accounts[3]});
		const addressYy93ExT = accounts[1]
		const addressgBu5FYc = accounts[4]
		const addressNH2sLdt = accounts[5]
		const addressnte2SOS = accounts[4]
		const addressRPMCog1 = accounts[0]
		const addressrSseXPo = accounts[3]
		const uint1si54N = await MetaCoin2tegmofJ.getBalanceInEth.call(addressYy93ExT, {from: accounts[4]});
		const uintmFJy2lj = await MetaCoin2tegmofJ.getBalance.call(addressgBu5FYc, {from: accounts[0]});
		const uintf0fM9e0 = await MetaCoin2tegmofJ.getBalanceInEth.call(addressNH2sLdt, {from: accounts[0]});
		const uintcs8Id15 = await MetaCoin2tegmofJ.getBalanceInEth.call(addressnte2SOS, {from: accounts[3]});
		const uintAPuuGRc = await MetaCoin2tegmofJ.getBalanceInEth.call(addressRPMCog1, {from: accounts[0]});
		const uintERFVNkw = await MetaCoin2tegmofJ.getBalanceInEth.call(addressrSseXPo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint1si54N, BigInt("0"))
		assert.equal(uintAPuuGRc, BigInt("0"))
		assert.equal(uintERFVNkw, BigInt("20000"))
		assert.equal(uintcs8Id15, BigInt("0"))
		assert.equal(uintf0fM9e0, BigInt("0"))
		assert.equal(uintmFJy2lj, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2O35bf9n = await MetaCoin2.new({from: accounts[4]});
		const addressvOrzrQM = accounts[1]
		const uintQK7z8hQ = BigInt("1601")
		const addressVR4K42s = accounts[1]
		const addresskYqDP3l = accounts[0]
		const addresszNQJyV = accounts[4]
		const addressPJbTqxY = accounts[2]
		const uintVrp7Dra = await MetaCoin2O35bf9n.getBalanceInEth.call(addressvOrzrQM, {from: accounts[4]});
		const boolE6MPtHl = await MetaCoin2O35bf9n.sendCoin.call(addressVR4K42s, uintQK7z8hQ, {from: accounts[2]});
		const uintXoKWQef = await MetaCoin2O35bf9n.getBalanceInEth.call(addresskYqDP3l, {from: accounts[0]});
		const uintmJpdOcX = await MetaCoin2O35bf9n.getBalance.call(addresszNQJyV, {from: accounts[0]});
		const uintLPG2wn = await MetaCoin2O35bf9n.getBalanceInEth.call(addressPJbTqxY, {from: accounts[4]});

		assert.equal(boolE6MPtHl, false)
		assert.equal(uintLPG2wn, BigInt("0"))
		assert.equal(uintVrp7Dra, BigInt("0"))
		assert.equal(uintXoKWQef, BigInt("0"))
		assert.equal(uintmJpdOcX, BigInt("10000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2uauEIpi = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRrZ17C1 = accounts[5]
		const addressL8hFmuG = accounts[4]
		const addressBzYFXxn = "0x0000000000000000000000000000000000000001"
		const addresszg4eheR = accounts[4]
		const uintlFWuqb = await MetaCoin2uauEIpi.getBalance.call(addressRrZ17C1, {from: accounts[3]});
		const uintu8yil7L = await MetaCoin2uauEIpi.getBalanceInEth.call(addressL8hFmuG, {from: accounts[1]});
		const uintyJXRx3 = await MetaCoin2uauEIpi.getBalanceInEth.call(addressBzYFXxn, {from: accounts[0]});
		const uintujxSfiF = await MetaCoin2uauEIpi.getBalanceInEth.call(addresszg4eheR, {from: accounts[2]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2ET2BsSh = await MetaCoin2.new({from: accounts[0]});
		const addresst9WZbYT = accounts[4]
		const uintg7Ofpu = BigInt("138")
		const addressFrUtUeE = accounts[1]
		const uintXzy9mLS = await MetaCoin2ET2BsSh.getBalance.call(addresst9WZbYT, {from: accounts[4]});
		const boolft1dbZy = await MetaCoin2ET2BsSh.sendCoin.call(addressFrUtUeE, uintg7Ofpu, {from: accounts[0]});

		assert.equal(boolft1dbZy, true)
		assert.equal(uintXzy9mLS, BigInt("0"))
	});
})