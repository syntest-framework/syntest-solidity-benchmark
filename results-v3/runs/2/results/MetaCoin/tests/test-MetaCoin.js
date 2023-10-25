const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinVTK4Q1 = await MetaCoin.new({from: accounts[3]});
		const uintn7jlUk = BigInt("188")
		const addressXzPAums = accounts[4]
		const uintFqBgGRm = BigInt("980")
		const addressG8qZxwp = accounts[2]
		const boolernD4yp = await MetaCoinVTK4Q1.sendCoin.call(addressXzPAums, uintn7jlUk, {from: accounts[1]});
		const boold1cWA31 = await MetaCoinVTK4Q1.sendCoin.call(addressG8qZxwp, uintFqBgGRm, {from: accounts[4]});

		assert.equal(boold1cWA31, false)
		assert.equal(boolernD4yp, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinmuj6jEb = await MetaCoin.new({from: accounts[2]});
		const uintHf6Tdop = BigInt("87")
		const addressI0QlU7W = accounts[2]
		const uintHMhxSr4 = BigInt("1929")
		const addressOMPM6hZ = accounts[1]
		const uint9i1Sx4 = BigInt("1703")
		const addressOCoxb4J = accounts[3]
		const uintO1IZk9G = BigInt("942")
		const addressfqHxznJ = accounts[0]
		const booldZTbf6j = await MetaCoinmuj6jEb.sendCoin.call(addressI0QlU7W, uintHf6Tdop, {from: "0x0000000000000000000000000000000000000001"});
		const boolLYFC2GE = await MetaCoinmuj6jEb.sendCoin.call(addressOMPM6hZ, uintHMhxSr4, {from: accounts[5]});
		const boolmMCNqg1 = await MetaCoinmuj6jEb.sendCoin.call(addressOCoxb4J, uint9i1Sx4, {from: accounts[4]});
		const boolmZbzZZX = await MetaCoinmuj6jEb.sendCoin.call(addressfqHxznJ, uintO1IZk9G, {from: accounts[2]});

		assert.equal(boolLYFC2GE, false)
		assert.equal(booldZTbf6j, false)
		assert.equal(boolmMCNqg1, false)
		assert.equal(boolmZbzZZX, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinvLPCWJ = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttCrCGrH = BigInt("1315")
		const addressU1r8Gtg = accounts[2]
		const uintg6wMCu4 = BigInt("754")
		const addressO8Qkiaf = accounts[4]
		const uintQwuOGLz = BigInt("1588")
		const addressZft1SRc = "0x0000000000000000000000000000000000000001"
		const uint7RPwz1 = BigInt("1234")
		const addresstQhXFUS = "0x0000000000000000000000000000000000000001"
		const uinttlSCEfk = BigInt("2021")
		const addressJ4CiDU = accounts[2]
		const uintCzLNRYe = BigInt("230")
		const addresslrpGrhI = accounts[3]
		const booleibQsX6 = await MetaCoinvLPCWJ.sendCoin.call(addressU1r8Gtg, uinttCrCGrH, {from: accounts[4]});
		const boolxTqgWN2 = await MetaCoinvLPCWJ.sendCoin.call(addressO8Qkiaf, uintg6wMCu4, {from: accounts[4]});
		const boola52pt0 = await MetaCoinvLPCWJ.sendCoin.call(addressZft1SRc, uintQwuOGLz, {from: accounts[4]});
		const boolTsCOPHa = await MetaCoinvLPCWJ.sendCoin.call(addresstQhXFUS, uint7RPwz1, {from: accounts[2]});
		const boolXjqaw7f = await MetaCoinvLPCWJ.sendCoin.call(addressJ4CiDU, uinttlSCEfk, {from: "0x0000000000000000000000000000000000000001"});
		const booly06eDHb = await MetaCoinvLPCWJ.sendCoin.call(addresslrpGrhI, uintCzLNRYe, {from: accounts[0]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinQjcYpef = await MetaCoin.new({from: accounts[0]});
		const uintpFUFQhz = BigInt("1830")
		const addresseZfTF9Z = accounts[2]
		const uintd5OYouB = BigInt("4")
		const addressXzsBUFb = accounts[4]
		const uintOhB6rrO = BigInt("458")
		const addressRj8FVl4 = accounts[2]
		const uintj50mXmZ = BigInt("575")
		const addressNksL7N9 = accounts[4]
		const uintwrMsAO4 = BigInt("113")
		const addressBOen5Sx = accounts[3]
		const uintMO8h0F9 = BigInt("1273")
		const address273Rms = "0x0000000000000000000000000000000000000001"
		const boolEYaeaqw = await MetaCoinQjcYpef.sendCoin.call(addresseZfTF9Z, uintpFUFQhz, {from: accounts[2]});
		const boolRygCcmL = await MetaCoinQjcYpef.sendCoin.call(addressXzsBUFb, uintd5OYouB, {from: accounts[0]});
		const boolp9tnVPj = await MetaCoinQjcYpef.sendCoin.call(addressRj8FVl4, uintOhB6rrO, {from: accounts[0]});
		const boolVYa0JhA = await MetaCoinQjcYpef.sendCoin.call(addressNksL7N9, uintj50mXmZ, {from: accounts[5]});
		const boolgxN3qlB = await MetaCoinQjcYpef.sendCoin.call(addressBOen5Sx, uintwrMsAO4, {from: accounts[1]});
		const boolYAWBIqr = await MetaCoinQjcYpef.sendCoin.call(address273Rms, uintMO8h0F9, {from: accounts[3]});

		assert.equal(boolEYaeaqw, false)
		assert.equal(boolRygCcmL, true)
		assert.equal(boolVYa0JhA, false)
		assert.equal(boolYAWBIqr, false)
		assert.equal(boolgxN3qlB, false)
		assert.equal(boolp9tnVPj, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinQjcYpef = await MetaCoin.new({from: accounts[0]});
		const uintmmOm2mC = BigInt("2200")
		const addressYCGqPYj = "0x00000000000000000000000000000000000000-1"
		const uintZnXgAtM = BigInt("1650")
		const addressauqLyvW = accounts[3]
		const boolM5jzs1r = await MetaCoinQjcYpef.sendCoin.call(addressYCGqPYj, uintmmOm2mC, {from: accounts[0]});
		const boolTaU2bY2 = await MetaCoinQjcYpef.sendCoin.call(addressauqLyvW, uintZnXgAtM, {from: accounts[4]});

		await expect(MetaCoinQjcYpef.sendCoin.call(addressYCGqPYj, uintmmOm2mC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})