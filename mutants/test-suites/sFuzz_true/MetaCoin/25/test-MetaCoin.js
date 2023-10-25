const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoin0gZoMh = await MetaCoin.new({from: accounts[2]});
		const uintAWiEyA0 = BigInt("49")
		const addressuEkNtRM = accounts[5]
		const uintJhPOn2w = BigInt("705")
		const address4kJe8Z = accounts[0]
		const uintPDdCfl3 = BigInt("1624")
		const addressb5mK7fI = accounts[0]
		const uintHfsPxry = BigInt("824")
		const addressSJvCW85 = accounts[2]
		const boolFB54L9y = await MetaCoin0gZoMh.sendCoin.call(addressuEkNtRM, uintAWiEyA0, {from: accounts[3]});
		const boolCr3q7G = await MetaCoin0gZoMh.sendCoin.call(address4kJe8Z, uintJhPOn2w, {from: accounts[2]});
		const booljxphJ3l = await MetaCoin0gZoMh.sendCoin.call(addressb5mK7fI, uintPDdCfl3, {from: accounts[0]});
		const boolaUFDd77 = await MetaCoin0gZoMh.sendCoin.call(addressSJvCW85, uintHfsPxry, {from: accounts[3]});

		assert.equal(boolCr3q7G, true)
		assert.equal(boolFB54L9y, false)
		assert.equal(boolaUFDd77, false)
		assert.equal(booljxphJ3l, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinX1u4r4Y = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcGNZo8L = BigInt("182")
		const addressmGmjwCT = accounts[5]
		const uintnSLfXkd = BigInt("1335")
		const addressIfJJkxW = accounts[0]
		const uintptKpKVa = BigInt("429")
		const addressDYoQrOx = accounts[0]
		const boolBnIuTX = await MetaCoinX1u4r4Y.sendCoin.call(addressmGmjwCT, uintcGNZo8L, {from: accounts[4]});
		const boolnLzQgxu = await MetaCoinX1u4r4Y.sendCoin.call(addressIfJJkxW, uintnSLfXkd, {from: accounts[4]});
		const boolWu55yXi = await MetaCoinX1u4r4Y.sendCoin.call(addressDYoQrOx, uintptKpKVa, {from: accounts[0]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinzk12Uat = await MetaCoin.new({from: accounts[1]});
		const uintjBl72qx = BigInt("3")
		const addressPjVKdCh = accounts[4]
		const uinto8XKMn9 = BigInt("66")
		const addressBxtE2Qj = accounts[3]
		const uintkqsS2nw = BigInt("890")
		const addressG2i8GV5 = accounts[0]
		const boolUsPEzK = await MetaCoinzk12Uat.sendCoin.call(addressPjVKdCh, uintjBl72qx, {from: accounts[1]});
		const boolhkXIMi = await MetaCoinzk12Uat.sendCoin.call(addressBxtE2Qj, uinto8XKMn9, {from: accounts[1]});
		const boolFzb5rXx = await MetaCoinzk12Uat.sendCoin.call(addressG2i8GV5, uintkqsS2nw, {from: accounts[0]});

		assert.equal(boolFzb5rXx, false)
		assert.equal(boolUsPEzK, true)
		assert.equal(boolhkXIMi, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinzk12Uat = await MetaCoin.new({from: accounts[1]});
		const uintBtouFxi = BigInt("1917")
		const address2rg4gr = "0x00000000000000000000000000000000000000-1"
//		const boolkImbUgI = await MetaCoinzk12Uat.sendCoin.call(address2rg4gr, uintBtouFxi, {from: accounts[2]});

		await expect(MetaCoinzk12Uat.sendCoin.call(address2rg4gr, uintBtouFxi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})