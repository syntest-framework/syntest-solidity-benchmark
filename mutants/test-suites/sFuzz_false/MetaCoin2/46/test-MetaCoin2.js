const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2DqyASL6 = await MetaCoin2.new({from: accounts[5]});
		const uintbec9xPm = BigInt("412")
		const addressgnhgy6q = accounts[4]
		const addressCrNhwgh = accounts[3]
		const boolIKCb2bI = await MetaCoin2DqyASL6.sendCoin.call(addressgnhgy6q, uintbec9xPm, {from: "0x0000000000000000000000000000000000000001"});
		const uintyNm4XdK = await MetaCoin2DqyASL6.getBalanceInEth.call(addressCrNhwgh, {from: accounts[3]});

		assert.equal(boolIKCb2bI, false)
		assert.equal(uintyNm4XdK, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2bZOAXW7 = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxKov5E = accounts[3]
		const addressiphGLe = accounts[5]
		const uintqK6UvFo = BigInt("144")
		const addresseslua1E = accounts[0]
		const addressLOgGnx = accounts[5]
		const uinteSmIuC8 = BigInt("836")
		const addresss8UrDQ0 = accounts[3]
		const uintPM5Bfji = await MetaCoin2bZOAXW7.getBalance.call(addressxKov5E, {from: accounts[0]});
		const uintMNZJqDS = await MetaCoin2bZOAXW7.getBalanceInEth.call(addressiphGLe, {from: accounts[4]});
		const boolGY33T25 = await MetaCoin2bZOAXW7.sendCoin.call(addresseslua1E, uintqK6UvFo, {from: accounts[4]});
		const uintFgUMjO7 = await MetaCoin2bZOAXW7.getBalanceInEth.call(addressLOgGnx, {from: accounts[3]});
		const boolNbNWfK1 = await MetaCoin2bZOAXW7.sendCoin.call(addresss8UrDQ0, uinteSmIuC8, {from: accounts[0]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2GFd8G9I = await MetaCoin2.new({from: accounts[1]});
		const addressQWkdT50 = accounts[3]
		const addressh7kXcv5 = accounts[0]
		const addressgqrQyUt = accounts[1]
		const uintQwk42Ms = BigInt("507")
		const addressB3W8LjJ = accounts[1]
		const uintlSiZFUj = BigInt("343")
		const addressNc8lfiw = accounts[4]
		const uintB6z2sbw = BigInt("644")
		const addressyTEAJcA = accounts[4]
		const addressRIQbdap = accounts[4]
		const uintco161Xa = await MetaCoin2GFd8G9I.getBalance.call(addressQWkdT50, {from: accounts[1]});
		const uintRukN8ii = await MetaCoin2GFd8G9I.getBalanceInEth.call(addressh7kXcv5, {from: accounts[3]});
		const uintbvTwXq3 = await MetaCoin2GFd8G9I.getBalanceInEth.call(addressgqrQyUt, {from: accounts[1]});
		const boolCIYcK6 = await MetaCoin2GFd8G9I.sendCoin.call(addressB3W8LjJ, uintQwk42Ms, {from: accounts[1]});
		const boolw1t04D4 = await MetaCoin2GFd8G9I.sendCoin.call(addressNc8lfiw, uintlSiZFUj, {from: "0x0000000000000000000000000000000000000001"});
		const boolIBviwJK = await MetaCoin2GFd8G9I.sendCoin.call(addressyTEAJcA, uintB6z2sbw, {from: accounts[4]});
		const uintjT0OJIv = await MetaCoin2GFd8G9I.getBalanceInEth.call(addressRIQbdap, {from: accounts[4]});

		assert.equal(boolCIYcK6, true)
		assert.equal(boolIBviwJK, false)
		assert.equal(boolw1t04D4, false)
		assert.equal(uintRukN8ii, BigInt("0"))
		assert.equal(uintbvTwXq3, BigInt("20000"))
		assert.equal(uintco161Xa, BigInt("0"))
		assert.equal(uintjT0OJIv, BigInt("0"))
	});
})