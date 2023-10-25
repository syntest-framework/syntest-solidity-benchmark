const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2u0GHQFB = await MetaCoin2.new({from: accounts[0]});
		const addressLwmRx8i = accounts[0]
		const addressceoO5St = accounts[4]
		const addressrK4Wlmf = accounts[0]
		const addressz96lOt8 = accounts[1]
		const uintqeH94LI = BigInt("676")
		const addressyB58mYu = "0x0000000000000000000000000000000000000001"
		const uintz2khth6 = BigInt("76")
		const addressWpziag2 = accounts[3]
		const uintQV427Ag = await MetaCoin2u0GHQFB.getBalanceInEth.call(addressLwmRx8i, {from: accounts[0]});
		const uintNMv9OE4 = await MetaCoin2u0GHQFB.getBalance.call(addressceoO5St, {from: accounts[0]});
		const uintgsionE = await MetaCoin2u0GHQFB.getBalanceInEth.call(addressrK4Wlmf, {from: accounts[2]});
		const uintAZe2N5o = await MetaCoin2u0GHQFB.getBalanceInEth.call(addressz96lOt8, {from: accounts[0]});
		const boolhVQG4oO = await MetaCoin2u0GHQFB.sendCoin.call(addressyB58mYu, uintqeH94LI, {from: accounts[4]});
		const boolfBi8DFK = await MetaCoin2u0GHQFB.sendCoin.call(addressWpziag2, uintz2khth6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfBi8DFK, false)
		assert.equal(boolhVQG4oO, false)
		assert.equal(uintAZe2N5o, BigInt("0"))
		assert.equal(uintNMv9OE4, BigInt("0"))
		assert.equal(uintQV427Ag, BigInt("20000"))
		assert.equal(uintgsionE, BigInt("20000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2NTTtQIJ = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressstM9Vvl = accounts[4]
		const addressdr3JL5l = accounts[0]
		const addressbjM22zH = accounts[5]
		const uintzzvGOsS = BigInt("190")
		const addressuNgG2BO = accounts[0]
		const addressJq5Sl8 = accounts[0]
		const addressMaUBEOe = accounts[0]
		const uintC1ETfDC = await MetaCoin2NTTtQIJ.getBalanceInEth.call(addressstM9Vvl, {from: accounts[3]});
		const uintQHyDLtS = await MetaCoin2NTTtQIJ.getBalance.call(addressdr3JL5l, {from: accounts[1]});
		const uintbE4MDSK = await MetaCoin2NTTtQIJ.getBalance.call(addressbjM22zH, {from: accounts[0]});
		const boolq3aHgG6 = await MetaCoin2NTTtQIJ.sendCoin.call(addressuNgG2BO, uintzzvGOsS, {from: accounts[4]});
		const uintHlp2lJk = await MetaCoin2NTTtQIJ.getBalanceInEth.call(addressJq5Sl8, {from: accounts[4]});
		const uintMsDZ9nL = await MetaCoin2NTTtQIJ.getBalanceInEth.call(addressMaUBEOe, {from: accounts[3]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2u0GHQFB = await MetaCoin2.new({from: accounts[0]});
		const addressqBCgQDT = accounts[0]
		const addressylx7tP7 = accounts[4]
		const addressJowdRDR = accounts[0]
		const addressTXPAiON = accounts[1]
		const uint6ALzFz = BigInt("1206")
		const addressBggJzui = accounts[1]
		const uintjlnZqb1 = BigInt("676")
		const addressKHVT7y2 = "0x0000000000000000000000000000000000000001"
		const uintJA852Gg = BigInt("914")
		const addresscsQeG82 = accounts[3]
		const uintIWnaRXs = BigInt("1657")
		const addressiq18jsP = accounts[5]
		const uintQV427Ag = await MetaCoin2u0GHQFB.getBalanceInEth.call(addressqBCgQDT, {from: accounts[0]});
		const uintNMv9OE4 = await MetaCoin2u0GHQFB.getBalance.call(addressylx7tP7, {from: accounts[0]});
		const uintgsionE = await MetaCoin2u0GHQFB.getBalanceInEth.call(addressJowdRDR, {from: accounts[2]});
		const uintAZe2N5o = await MetaCoin2u0GHQFB.getBalanceInEth.call(addressTXPAiON, {from: accounts[0]});
		const boolrHHqZuX = await MetaCoin2u0GHQFB.sendCoin.call(addressBggJzui, uint6ALzFz, {from: accounts[5]});
		const boolhVQG4oO = await MetaCoin2u0GHQFB.sendCoin.call(addressKHVT7y2, uintjlnZqb1, {from: accounts[4]});
		const boolfBi8DFK = await MetaCoin2u0GHQFB.sendCoin.call(addresscsQeG82, uintJA852Gg, {from: "0x0000000000000000000000000000000000000001"});
		const boolieiu878 = await MetaCoin2u0GHQFB.sendCoin.call(addressiq18jsP, uintIWnaRXs, {from: accounts[0]});

		assert.equal(boolfBi8DFK, false)
		assert.equal(boolhVQG4oO, false)
		assert.equal(boolieiu878, true)
		assert.equal(boolrHHqZuX, false)
		assert.equal(uintAZe2N5o, BigInt("0"))
		assert.equal(uintNMv9OE4, BigInt("0"))
		assert.equal(uintQV427Ag, BigInt("20000"))
		assert.equal(uintgsionE, BigInt("20000"))
	});
})