const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITNS2pr3z = await RIT.new({from: accounts[4]});
		const uint256rXKSJJc = await RITNS2pr3z.totalSupply.call({from: accounts[3]});
		const uint256K3a5aiU = await RITNS2pr3z.totalSupply.call({from: accounts[4]});
		const stringcbtfe9J = await RITNS2pr3z.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringcbtfe9J, "RIT 2.0")
		assert.equal(uint256K3a5aiU, BigInt("500000000000000000000000000"))
		assert.equal(uint256rXKSJJc, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITZAMYPi = await RIT.new({from: accounts[0]});
		const uint0DpSht = BigInt("1359")
		const addressHpTib06 = accounts[2]
		const uintbhQIbp = BigInt("1083")
		const uintQdyHevM = BigInt("185")
		const addressoA8LYDM = accounts[1]
		const addressBghi08 = accounts[0]
		const addressQgEZW1G = accounts[5]
		const boolLNT92eB = await RITZAMYPi.approve.call(addressHpTib06, uint0DpSht, {from: accounts[0]});
		const uint256FNhYC9h = await RITZAMYPi._burn.call(uintbhQIbp, {from: accounts[2]});
		const uint8d52CGk2 = await RITZAMYPi.decimals.call({from: accounts[2]});
		const boolN58mLgN = await RITZAMYPi.decreaseAllowance.call(addressoA8LYDM, uintQdyHevM, {from: accounts[5]});
		const stringEjzEZxj = await RITZAMYPi.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zTw6Jrd = await RITZAMYPi.allowance.call(addressQgEZW1G, addressBghi08, {from: accounts[2]});

		assert.equal(boolLNT92eB, true)
		await expect(RITZAMYPi._burn.call(uintbhQIbp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITvgXGAtD = await RIT.new({from: accounts[2]});
		const uint8u9HL5Cz = await RITvgXGAtD.decimals.call({from: accounts[1]});
		const stringcvCbKcu = await RITvgXGAtD.symbol.call({from: accounts[1]});

		assert.equal(stringcvCbKcu, "RIT 2.0")
		assert.equal(uint8u9HL5Cz, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITMTAoKVa = await RIT.new({from: accounts[3]});
		const addressuFgIeBv = accounts[4]
		const addresseixIC1a = accounts[4]
		const addressMzaT9Lj = accounts[4]
		const uint256B12dxJ3 = await RITMTAoKVa.allowance.call(addresseixIC1a, addressuFgIeBv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PWmGN2n = await RITMTAoKVa.balanceOf.call(addressMzaT9Lj, {from: accounts[4]});
		const uint256hBPdEjc = await RITMTAoKVa.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256B12dxJ3, BigInt("0"))
		assert.equal(uint256PWmGN2n, BigInt("0"))
		assert.equal(uint256hBPdEjc, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITqx0U09G = await RIT.new({from: accounts[5]});
		const uintrEI3EyF = BigInt("206")
		const addressFVZQsWy = "0x0000000000000000000000000000000000000001"
		const addressT7RbBxg = accounts[2]
		const uintwLSJH6c = BigInt("1626")
		const addressUBZAXXG = accounts[3]
		const uintoLOFyXy = BigInt("217")
		const addressGh1sF8t = accounts[1]
		const addresswChYEQb = accounts[5]
		const string7rrmfI = await RITqx0U09G.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolMV160e = await RITqx0U09G.approve.call(addressFVZQsWy, uintrEI3EyF, {from: accounts[5]});
		const uint256aEaEmvg = await RITqx0U09G.balanceOf.call(addressT7RbBxg, {from: "0x0000000000000000000000000000000000000001"});
		const boolLvagSRJ = await RITqx0U09G.transfer.call(addressUBZAXXG, uintwLSJH6c, {from: accounts[0]});
		const boolJoEDaqs = await RITqx0U09G.transfer.call(addressGh1sF8t, uintoLOFyXy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iVkLACA = await RITqx0U09G.balanceOf.call(addresswChYEQb, {from: accounts[0]});

		assert.equal(boolMV160e, true)
		assert.equal(string7rrmfI, "RIT 2.0")
		assert.equal(uint256aEaEmvg, BigInt("0"))
		await expect(RITqx0U09G.transfer.call(addressUBZAXXG, uintwLSJH6c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITBM7As8 = await RIT.new({from: accounts[2]});
		const address3eWdab = accounts[3]
		const addressBkiO8LH = accounts[2]
		const uintQaF3fTH = BigInt("977")
		const addressqQ2QxUS = accounts[3]
		const uintllpWV1 = BigInt("1231")
		const addressnYIIM3Z = accounts[0]
		const uint256wHolZTQ = await RITBM7As8.allowance.call(addressBkiO8LH, address3eWdab, {from: accounts[2]});
		const boolxlWkNab = await RITBM7As8.approve.call(addressqQ2QxUS, uintQaF3fTH, {from: accounts[4]});
		const boolfySQjgK = await RITBM7As8.increaseAllowance.call(addressnYIIM3Z, uintllpWV1, {from: accounts[0]});
		const stringitmZAD = await RITBM7As8.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfySQjgK, true)
		assert.equal(boolxlWkNab, true)
		assert.equal(stringitmZAD, "RIT 2.0")
		assert.equal(uint256wHolZTQ, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITq4hgRjD = await RIT.new({from: accounts[1]});
		const addressGMu3lwB = accounts[3]
		const addresskKuLifo = accounts[0]
		const addressFkI4M6i = accounts[4]
		const addressgudTmIT = accounts[1]
		const uint256Y6WBLSm = await RITq4hgRjD.allowance.call(addresskKuLifo, addressGMu3lwB, {from: accounts[3]});
		const stringIaJZN6 = await RITq4hgRjD.name.call({from: accounts[0]});
		const uint256T640rp = await RITq4hgRjD.allowance.call(addressgudTmIT, addressFkI4M6i, {from: accounts[1]});

		assert.equal(stringIaJZN6, "Real Estate Investment Token")
		assert.equal(uint256T640rp, BigInt("0"))
		assert.equal(uint256Y6WBLSm, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITvgXGAtD = await RIT.new({from: accounts[2]});
		const uintthDUSXO = BigInt("280")
		const addresshNUw3q = accounts[0]
		const boolwSPyqVm = await RITvgXGAtD.decreaseAllowance.call(addresshNUw3q, uintthDUSXO, {from: accounts[0]});
		const uint8u9HL5Cz = await RITvgXGAtD.decimals.call({from: accounts[1]});
		const stringcvCbKcu = await RITvgXGAtD.symbol.call({from: accounts[1]});

		await expect(RITvgXGAtD.decreaseAllowance.call(addresshNUw3q, uintthDUSXO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITuoK8XQe = await RIT.new({from: accounts[2]});
		const uintMXrEwkd = BigInt("1871")
		const addressVw9RFOi = accounts[0]
		const addressCQYnoRZ = accounts[4]
		const uintvcFFSTA = BigInt("290")
		const addressSwz73Gj = accounts[2]
		const addressUAre1Qm = accounts[2]
		const addresshC6BTjO = "0x0000000000000000000000000000000000000001"
		const addressgHCwc4K = accounts[2]
		const addresst9mF7iE = accounts[5]
		const addressO1f6jeG = accounts[5]
		const uintWMwpqfS = BigInt("1432")
		const addressThcNo6z = accounts[2]
		const uint256N52rIx = await RITuoK8XQe.totalSupply.call({from: accounts[5]});
		const boolndXXvmw = await RITuoK8XQe.transferFrom.call(addressCQYnoRZ, addressVw9RFOi, uintMXrEwkd, {from: accounts[0]});
		const uint256Qvd9jJ = await RITuoK8XQe._burn.call(uintvcFFSTA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qKCZlJt = await RITuoK8XQe.allowance.call(addressUAre1Qm, addressSwz73Gj, {from: accounts[2]});
		const uint256DiwkXm = await RITuoK8XQe.allowance.call(addressgHCwc4K, addresshC6BTjO, {from: accounts[3]});
		const uint256eZvSUqd = await RITuoK8XQe.allowance.call(addressO1f6jeG, addresst9mF7iE, {from: accounts[0]});
		const boolVu4Cnqy = await RITuoK8XQe.decreaseAllowance.call(addressThcNo6z, uintWMwpqfS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256N52rIx, BigInt("500000000000000000000000000"))
		await expect(RITuoK8XQe.transferFrom.call(addressCQYnoRZ, addressVw9RFOi, uintMXrEwkd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITJiEhHRH = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVhpPu0d = BigInt("1033")
		const uintugChndL = BigInt("1784")
		const addresszcgaPje = accounts[3]
		const uint256v5H7JzU = await RITJiEhHRH._burn.call(uintVhpPu0d, {from: accounts[4]});
		const boolnvsjlqZ = await RITJiEhHRH.approve.call(addresszcgaPje, uintugChndL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256A7SEaiE = await RITJiEhHRH.totalSupply.call({from: accounts[4]});
	});
})