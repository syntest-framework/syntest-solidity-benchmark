const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2I6AC7JW = await MetaCoin2.new({from: accounts[2]});
		const addressMUXzH4 = accounts[2]
		const addressRib8VFY = accounts[0]
		const addressRBv0x6e = accounts[2]
		const uintO3woRYv = BigInt("1325")
		const addressHQf6D1 = accounts[2]
		const uintzdVh2Ze = BigInt("1046")
		const addressaD7eu2B = accounts[0]
		const uinthyiNGr8 = await MetaCoin2I6AC7JW.getBalanceInEth.call(addressMUXzH4, {from: accounts[5]});
		const uintc4n58p = await MetaCoin2I6AC7JW.getBalanceInEth.call(addressRib8VFY, {from: "0x0000000000000000000000000000000000000001"});
		const uinttP90iVm = await MetaCoin2I6AC7JW.getBalance.call(addressRBv0x6e, {from: accounts[3]});
		const bools6nIapo = await MetaCoin2I6AC7JW.sendCoin.call(addressHQf6D1, uintO3woRYv, {from: accounts[3]});
		const boolm9nXSbf = await MetaCoin2I6AC7JW.sendCoin.call(addressaD7eu2B, uintzdVh2Ze, {from: accounts[1]});

		assert.equal(boolm9nXSbf, false)
		assert.equal(bools6nIapo, false)
		assert.equal(uintc4n58p, BigInt("0"))
		assert.equal(uinthyiNGr8, BigInt("20000"))
		assert.equal(uinttP90iVm, BigInt("10000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2qJc7rgs = await MetaCoin2.new({from: accounts[4]});
		const uintjFI4wo = BigInt("1537")
		const addressIGz4AaX = accounts[1]
		const addressdHW6Gx = accounts[0]
		const boolhDNDs5X = await MetaCoin2qJc7rgs.sendCoin.call(addressIGz4AaX, uintjFI4wo, {from: accounts[4]});
		const uintzrwkFo9 = await MetaCoin2qJc7rgs.getBalance.call(addressdHW6Gx, {from: accounts[4]});

		assert.equal(boolhDNDs5X, true)
		assert.equal(uintzrwkFo9, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2kp9WzTJ = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscIkTGr9 = accounts[4]
		const addresshGU2je = accounts[3]
		const addressetmh8Cn = accounts[0]
		const uintkVAagIi = await MetaCoin2kp9WzTJ.getBalance.call(addresscIkTGr9, {from: accounts[0]});
		const uintxOambxe = await MetaCoin2kp9WzTJ.getBalanceInEth.call(addresshGU2je, {from: accounts[5]});
		const uintPPMbkIf = await MetaCoin2kp9WzTJ.getBalance.call(addressetmh8Cn, {from: accounts[5]});
	});
})