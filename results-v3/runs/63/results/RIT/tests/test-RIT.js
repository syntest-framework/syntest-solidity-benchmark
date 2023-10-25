const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITXZjpz1t = await RIT.new({from: accounts[1]});
		const uintLT13F9 = BigInt("1223")
		const addressI2Rgzsi = accounts[1]
		const addresskNS1Inn = accounts[4]
		const addressK91zaC0 = accounts[2]
		const addressCBXZFK4 = accounts[3]
		const uintHeijdpf = BigInt("594")
		const addressqxXSbpv = accounts[0]
		const addressBFCiXX1 = accounts[0]
		const boolwysYHg0 = await RITXZjpz1t.transferFrom.call(addresskNS1Inn, addressI2Rgzsi, uintLT13F9, {from: accounts[1]});
		const uint256OsRlznX = await RITXZjpz1t.allowance.call(addressCBXZFK4, addressK91zaC0, {from: accounts[1]});
		const boolL3QPaaY = await RITXZjpz1t.approve.call(addressqxXSbpv, uintHeijdpf, {from: accounts[2]});
		const uint256S7hTlc = await RITXZjpz1t.balanceOf.call(addressBFCiXX1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RITXZjpz1t.transferFrom.call(addresskNS1Inn, addressI2Rgzsi, uintLT13F9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITydiHFgt = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLlJPiI = BigInt("1380")
		const addressPkqovMl = accounts[4]
		const addressItATv2J = accounts[4]
		const stringMsC9UFo = await RITydiHFgt.symbol.call({from: accounts[3]});
		const boolFUnWzch = await RITydiHFgt.transferFrom.call(addressItATv2J, addressPkqovMl, uintLlJPiI, {from: accounts[3]});
		const uint256Lk8WZRa = await RITydiHFgt.totalSupply.call({from: accounts[5]});
		const uint8hmA21mu = await RITydiHFgt.decimals.call({from: accounts[5]});
	});

	it('test for RIT', async () => {
		const RITtIYuqQg = await RIT.new({from: accounts[3]});
		const addressH7knIB8 = accounts[1]
		const addressRUgrTzN = accounts[2]
		const uintaMUhI6k = BigInt("1069")
		const addressISvhcoj = accounts[4]
		const addressMcbpCF = accounts[0]
		const uintavUK3MI = BigInt("806")
		const addressBr28hQ = accounts[3]
		const uint256jdyY2jm = await RITtIYuqQg.allowance.call(addressRUgrTzN, addressH7knIB8, {from: accounts[2]});
		const boolltoYyAY = await RITtIYuqQg.approve.call(addressISvhcoj, uintaMUhI6k, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BSSLYrO = await RITtIYuqQg.balanceOf.call(addressMcbpCF, {from: accounts[0]});
		const boolGCOHBCj = await RITtIYuqQg.increaseAllowance.call(addressBr28hQ, uintavUK3MI, {from: accounts[0]});

		assert.equal(boolGCOHBCj, true)
		assert.equal(boolltoYyAY, true)
		assert.equal(uint256BSSLYrO, BigInt("0"))
		assert.equal(uint256jdyY2jm, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITv95F1yz = await RIT.new({from: accounts[5]});
		const addressyQQJUva = "0x0000000000000000000000000000000000000001"
		const uint256AstNtZ9 = await RITv95F1yz.balanceOf.call(addressyQQJUva, {from: accounts[5]});
		const uint8yUB3OgH = await RITv95F1yz.decimals.call({from: accounts[3]});

		assert.equal(uint256AstNtZ9, BigInt("0"))
		assert.equal(uint8yUB3OgH, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITUOAuxqR = await RIT.new({from: accounts[0]});
		const uintcBVHLcW = BigInt("1356")
		const addresskGzNv9V = accounts[2]
		const uintfpNpUyk = BigInt("287")
		const addressa9j7vNg = accounts[3]
		const uintsiZkJN9 = BigInt("449")
		const addresswTG91gv = accounts[4]
		const addressI9Ndb1m = accounts[3]
		const uintYjypC3f = BigInt("2016")
		const addressmifWVe3 = "0x0000000000000000000000000000000000000001"
		const boolb77Goq = await RITUOAuxqR.transfer.call(addresskGzNv9V, uintcBVHLcW, {from: accounts[0]});
		const boolPcbInF8 = await RITUOAuxqR.decreaseAllowance.call(addressa9j7vNg, uintfpNpUyk, {from: accounts[3]});
		const boolK0KZidm = await RITUOAuxqR.transferFrom.call(addressI9Ndb1m, addresswTG91gv, uintsiZkJN9, {from: accounts[2]});
		const stringZAmcKvh = await RITUOAuxqR.symbol.call({from: accounts[0]});
		const boolDGsafJ = await RITUOAuxqR.transfer.call(addressmifWVe3, uintYjypC3f, {from: accounts[0]});

		await expect(RITUOAuxqR.transfer.call(addresskGzNv9V, uintcBVHLcW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITC9ewo3h = await RIT.new({from: accounts[4]});
		const uintjTkwtGJ = BigInt("742")
		const uint256Vmu6RKF = await RITC9ewo3h.totalSupply.call({from: accounts[2]});
		const stringJe9YaTp = await RITC9ewo3h.symbol.call({from: accounts[5]});
		const uint8tIb90Uy = await RITC9ewo3h.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rzEdjd = await RITC9ewo3h._burn.call(uintjTkwtGJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringJe9YaTp, "RIT 2.0")
		assert.equal(uint256Vmu6RKF, BigInt("500000000000000000000000000"))
		assert.equal(uint8tIb90Uy, BigInt("18"))
		await expect(RITC9ewo3h._burn.call(uintjTkwtGJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITUOAuxqR = await RIT.new({from: accounts[0]});
		const uintoOfK2ax = BigInt("287")
		const addressYlCqtzt = accounts[3]
		const uintkCPy2XN = BigInt("449")
		const addresstfrxlYJ = accounts[4]
		const addresszaKHT9 = accounts[3]
		const uintJfndU5G = BigInt("1456")
		const addressItef7ls = accounts[0]
		const uintJCycZa = BigInt("2016")
		const addresspEKNzK = "0x0000000000000000000000000000000000000001"
		const boolPcbInF8 = await RITUOAuxqR.decreaseAllowance.call(addressYlCqtzt, uintoOfK2ax, {from: accounts[3]});
		const boolK0KZidm = await RITUOAuxqR.transferFrom.call(addresszaKHT9, addresstfrxlYJ, uintkCPy2XN, {from: accounts[2]});
		const boolMhLDtgg = await RITUOAuxqR.transfer.call(addressItef7ls, uintJfndU5G, {from: accounts[5]});
		const stringZAmcKvh = await RITUOAuxqR.symbol.call({from: accounts[0]});
		const boolDGsafJ = await RITUOAuxqR.transfer.call(addresspEKNzK, uintJCycZa, {from: accounts[0]});

		await expect(RITUOAuxqR.decreaseAllowance.call(addressYlCqtzt, uintoOfK2ax, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITv95F1yz = await RIT.new({from: accounts[5]});
		const stringaajX3Y = await RITv95F1yz.name.call({from: accounts[4]});
		const uint8yUB3OgH = await RITv95F1yz.decimals.call({from: accounts[3]});

		assert.equal(stringaajX3Y, "Real Estate Investment Token")
		assert.equal(uint8yUB3OgH, BigInt("18"))
	});
})