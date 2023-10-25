const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADNfy7fn0 = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzSoBxai = BigInt("38")
		const addresslrXauRu = accounts[0]
		const uintdygBzgZ = BigInt("1749")
		const addressDZa6S4Z = accounts[1]
		const addresszM5qroV = accounts[5]
		const addresswyHlyZ = accounts[1]
		const addressDL5gNds = accounts[1]
		const addressb4vC161 = accounts[3]
		const boolYoPghRN = await ZADNfy7fn0.approve.call(addresslrXauRu, uintzSoBxai, {from: accounts[3]});
		const boolE03K68S = await ZADNfy7fn0.transferFrom.call(addresszM5qroV, addressDZa6S4Z, uintdygBzgZ, {from: accounts[1]});
		const uint256vNIxwyP = await ZADNfy7fn0.balanceOf.call(addresswyHlyZ, {from: accounts[5]});
		const uint8ZTTZvjA = await ZADNfy7fn0.decimals.call({from: accounts[4]});
		const uint256X5JF3tV = await ZADNfy7fn0.allowance.call(addressb4vC161, addressDL5gNds, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ZAD', async () => {
		const ZADPpRdo3 = await ZAD.new({from: accounts[0]});
		const uintalJE1X = BigInt("22")
		const addressl2D5uPM = accounts[3]
		const uintQJskskF = BigInt("793")
		const addressstKYl3b = accounts[4]
		const addressBNs5Ior = accounts[4]
		const uintxuIVdow = BigInt("1412")
		const addressp7mi3Q0 = accounts[3]
		const addressuTEfCpN = accounts[0]
		const booli11Q7GV = await ZADPpRdo3.increaseAllowance.call(addressl2D5uPM, uintalJE1X, {from: accounts[1]});
		const stringcHexVgJ = await ZADPpRdo3.symbol.call({from: accounts[1]});
		const boolyKyU8uh = await ZADPpRdo3.transfer.call(addressstKYl3b, uintQJskskF, {from: accounts[2]});
		const uint256ipdPH5e = await ZADPpRdo3.balanceOf.call(addressBNs5Ior, {from: accounts[0]});
		const boolshozmO1 = await ZADPpRdo3.transferFrom.call(addressuTEfCpN, addressp7mi3Q0, uintxuIVdow, {from: accounts[0]});

		assert.equal(booli11Q7GV, true)
		assert.equal(stringcHexVgJ, "ZAD")
		await expect(ZADPpRdo3.transfer.call(addressstKYl3b, uintQJskskF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADZsJNCkk = await ZAD.new({from: accounts[3]});
		const addressx3KZncc = accounts[2]
		const uintZmWtGZ = BigInt("97")
		const addressewoT1ip = accounts[2]
		const uintUhZghYv = BigInt("1366")
		const addresscYLlVlI = "0x0000000000000000000000000000000000000001"
		const stringrGwTyu6 = await ZADZsJNCkk.name.call({from: accounts[0]});
		const uint8Y6v1nQY = await ZADZsJNCkk.decimals.call({from: accounts[1]});
		const uint256SFiS39 = await ZADZsJNCkk.balanceOf.call(addressx3KZncc, {from: accounts[4]});
		const uint8wlv5m6 = await ZADZsJNCkk.decimals.call({from: accounts[4]});
		const boolIUOkQSr = await ZADZsJNCkk.decreaseAllowance.call(addressewoT1ip, uintZmWtGZ, {from: accounts[5]});
		const boolhBxiaT = await ZADZsJNCkk.increaseAllowance.call(addresscYLlVlI, uintUhZghYv, {from: accounts[1]});

		assert.equal(stringrGwTyu6, "Zadkiel")
		assert.equal(uint256SFiS39, BigInt("0"))
		assert.equal(uint8Y6v1nQY, BigInt("18"))
		assert.equal(uint8wlv5m6, BigInt("18"))
		await expect(ZADZsJNCkk.decreaseAllowance.call(addressewoT1ip, uintZmWtGZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADiHAdCR = await ZAD.new({from: accounts[2]});
		const uint256HlDhYum = await ZADiHAdCR.totalSupply.call({from: accounts[2]});
		const uint8Qh56D5T = await ZADiHAdCR.decimals.call({from: accounts[3]});
		const uint256Y4wjPlF = await ZADiHAdCR.totalSupply.call({from: accounts[4]});

		assert.equal(uint256HlDhYum, BigInt("100000000000000000000000000"))
		assert.equal(uint256Y4wjPlF, BigInt("100000000000000000000000000"))
		assert.equal(uint8Qh56D5T, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADrudKeF = await ZAD.new({from: accounts[5]});
		const uintSvMC4M5 = BigInt("798")
		const stringv1BxEj = await ZADrudKeF.symbol.call({from: accounts[0]});
		const stringFvyzwp5 = await ZADrudKeF.name.call({from: accounts[1]});
		const uint256Ph639MA = await ZADrudKeF._burn.call(uintSvMC4M5, {from: accounts[3]});
		const stringFLugGg = await ZADrudKeF.name.call({from: accounts[5]});

		assert.equal(stringFvyzwp5, "Zadkiel")
		assert.equal(stringv1BxEj, "ZAD")
		await expect(ZADrudKeF._burn.call(uintSvMC4M5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADxN5Qm66 = await ZAD.new({from: accounts[4]});
		const addressEkxkux6 = accounts[0]
		const addressBXaNVxs = "0x0000000000000000000000000000000000000001"
		const addressOEERAvD = accounts[2]
		const uint256T8K35bc = await ZADxN5Qm66.balanceOf.call(addressEkxkux6, {from: accounts[2]});
		const uint2561Zl7jq = await ZADxN5Qm66.allowance.call(addressOEERAvD, addressBXaNVxs, {from: accounts[2]});
		const stringh6LWnO3 = await ZADxN5Qm66.symbol.call({from: accounts[1]});
		const uint256tfHfsYY = await ZADxN5Qm66.totalSupply.call({from: accounts[1]});
		const uint256PBzSclR = await ZADxN5Qm66.totalSupply.call({from: accounts[2]});

		assert.equal(stringh6LWnO3, "ZAD")
		assert.equal(uint2561Zl7jq, BigInt("0"))
		assert.equal(uint256PBzSclR, BigInt("100000000000000000000000000"))
		assert.equal(uint256T8K35bc, BigInt("0"))
		assert.equal(uint256tfHfsYY, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADDHq88y = await ZAD.new({from: accounts[5]});
		const uintBzGtYR2 = BigInt("953")
		const addressD34cllu = accounts[5]
		const addressrCtKeu = accounts[4]
		const uintrBlJpkD = BigInt("255")
		const addresssEx6ExC = accounts[3]
		const bool7AbUdi = await ZADDHq88y.transferFrom.call(addressrCtKeu, addressD34cllu, uintBzGtYR2, {from: accounts[2]});
		const boolw9L3ORU = await ZADDHq88y.decreaseAllowance.call(addresssEx6ExC, uintrBlJpkD, {from: accounts[0]});

		await expect(ZADDHq88y.transferFrom.call(addressrCtKeu, addressD34cllu, uintBzGtYR2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADZsJNCkk = await ZAD.new({from: accounts[3]});
		const uintq3jVZEd = BigInt("436")
		const addressGkJF92j = accounts[2]
		const addressBRztQYq = accounts[2]
		const uintN27Lukl = BigInt("1130")
		const addressUkA57J5 = accounts[4]
		const uintxH0P1by = BigInt("113")
		const addressM5b6uOp = accounts[2]
		const uintU3FHeCJ = BigInt("1366")
		const addressKJ63W9L = "0x0000000000000000000000000000000000000001"
		const stringrGwTyu6 = await ZADZsJNCkk.name.call({from: accounts[0]});
		const uint8Y6v1nQY = await ZADZsJNCkk.decimals.call({from: accounts[1]});
		const booltL0MSD9 = await ZADZsJNCkk.approve.call(addressGkJF92j, uintq3jVZEd, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SFiS39 = await ZADZsJNCkk.balanceOf.call(addressBRztQYq, {from: accounts[4]});
		const boolyub94QU = await ZADZsJNCkk.decreaseAllowance.call(addressUkA57J5, uintN27Lukl, {from: accounts[4]});
		const uint8wlv5m6 = await ZADZsJNCkk.decimals.call({from: accounts[4]});
		const boolIUOkQSr = await ZADZsJNCkk.decreaseAllowance.call(addressM5b6uOp, uintxH0P1by, {from: accounts[5]});
		const boolhBxiaT = await ZADZsJNCkk.increaseAllowance.call(addressKJ63W9L, uintU3FHeCJ, {from: accounts[1]});

		assert.equal(booltL0MSD9, true)
		assert.equal(stringrGwTyu6, "Zadkiel")
		assert.equal(uint256SFiS39, BigInt("0"))
		assert.equal(uint8Y6v1nQY, BigInt("18"))
		await expect(ZADZsJNCkk.decreaseAllowance.call(addressUkA57J5, uintN27Lukl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADW1Mpb7s = await ZAD.new({from: accounts[0]});
		const uintqmjoHz = BigInt("557")
		const addressMGmq5Yh = "0x0000000000000000000000000000000000000000"
		const boolIjf5Xdl = await ZADW1Mpb7s.transfer.call(addressMGmq5Yh, uintqmjoHz, {from: accounts[4]});

		await expect(ZADW1Mpb7s.transfer.call(addressMGmq5Yh, uintqmjoHz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})