const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeUvoVjzA = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVNNYLBW = BigInt("1530")
		const addressAFJ3Sf1 = "0x0000000000000000000000000000000000000001"
		const addressDtiqnjP = accounts[0]
		const uintdrhDXHW = BigInt("726")
		const addressfU2AXHt = accounts[4]
		const addressRHljsY = accounts[3]
		const addressLytWdG8 = accounts[1]
		const uintfrHkfx1 = BigInt("1033")
		const addresshkMmw5z = accounts[1]
		const addressG0Dwgo = accounts[1]
		const addresshY1JiT3 = accounts[4]
		const addressZuZPtK = accounts[0]
		const boolxxILtXL = await Rootkit_financeUvoVjzA.transferFrom.call(addressDtiqnjP, addressAFJ3Sf1, uintVNNYLBW, {from: accounts[0]});
		const boolwQQvnY = await Rootkit_financeUvoVjzA.transferFrom.call(addressRHljsY, addressfU2AXHt, uintdrhDXHW, {from: accounts[1]});
		const uint256fXr2La1 = await Rootkit_financeUvoVjzA.balanceOf.call(addressLytWdG8, {from: accounts[2]});
		const boolUN2tBOg = await Rootkit_financeUvoVjzA.transferFrom.call(addressG0Dwgo, addresshkMmw5z, uintfrHkfx1, {from: accounts[4]});
		const uint256Da9P6M = await Rootkit_financeUvoVjzA.balanceOf.call(addresshY1JiT3, {from: accounts[3]});
		const uint256ZYK8M6w = await Rootkit_financeUvoVjzA.balanceOf.call(addressZuZPtK, {from: accounts[2]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeAySFBua = await Rootkit_finance.new({from: accounts[0]});
		const addressXW7UxBk = "0x0000000000000000000000000000000000000001"
		const uintMr0eQw = BigInt("906")
		const addressP2qSezn = accounts[3]
		const uint256lxQklnU = await Rootkit_financeAySFBua.totalSupply.call({from: accounts[1]});
		const uint256PgAyYHy = await Rootkit_financeAySFBua.balanceOf.call(addressXW7UxBk, {from: accounts[3]});
		const booltFjrZ3h = await Rootkit_financeAySFBua.transfer.call(addressP2qSezn, uintMr0eQw, {from: accounts[4]});

		assert.equal(booltFjrZ3h, false)
		assert.equal(uint256PgAyYHy, BigInt("0"))
		assert.equal(uint256lxQklnU, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financen6EhKHP = await Rootkit_finance.new({from: accounts[5]});
		const addressWaGD63s = accounts[1]
		const addressIXHC0CN = accounts[1]
		const uintitc21FD = BigInt("979")
		const addressmCsgPEK = accounts[5]
		const addressTTjWzmV = accounts[4]
		const uinti9SK24i = await Rootkit_financen6EhKHP.allowance.call(addressIXHC0CN, addressWaGD63s, {from: accounts[2]});
		const boolTtjd8tN = await Rootkit_financen6EhKHP.transfer.call(addressmCsgPEK, uintitc21FD, {from: accounts[1]});
		const uint256JCH3lrs = await Rootkit_financen6EhKHP.balanceOf.call(addressTTjWzmV, {from: accounts[4]});

		assert.equal(boolTtjd8tN, false)
		assert.equal(uint256JCH3lrs, BigInt("0"))
		assert.equal(uinti9SK24i, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeD6cLkj = await Rootkit_finance.new({from: accounts[4]});
		const uintpc0m9rH = BigInt("527")
		const addressTEPx8N7 = accounts[4]
		const addressGFjaf3A = accounts[2]
		const addressiv6U0PN = accounts[2]
		const addressdGXxFwW = accounts[1]
		const uinta5jc5v8 = BigInt("825")
		const addresssttSRE = accounts[2]
		const boolpwZGulF = await Rootkit_financeD6cLkj.transferFrom.call(addressGFjaf3A, addressTEPx8N7, uintpc0m9rH, {from: "0x0000000000000000000000000000000000000001"});
		const uintqedISQh = await Rootkit_financeD6cLkj.allowance.call(addressdGXxFwW, addressiv6U0PN, {from: accounts[2]});
		const uint256aCv21Cn = await Rootkit_financeD6cLkj.totalSupply.call({from: accounts[1]});
		const boolrJQ63ud = await Rootkit_financeD6cLkj.transfer.call(addresssttSRE, uinta5jc5v8, {from: accounts[4]});

		assert.equal(boolpwZGulF, false)
		assert.equal(boolrJQ63ud, true)
		assert.equal(uint256aCv21Cn, BigInt("10000000000000000000000"))
		assert.equal(uintqedISQh, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeHPO5Nbp = await Rootkit_finance.new({from: accounts[2]});
		const uintJwNpgCG = BigInt("871")
		const addressKNPGT4G = accounts[4]
		const addressTxilik7 = accounts[2]
		const uintHoCLSk = BigInt("1721")
		const addressmdbIGwZ = accounts[2]
		const uintNvClZ7 = BigInt("1440")
		const addressbFv16nO = accounts[5]
		const addressC8KkNdC = accounts[2]
		const booll5eDx54 = await Rootkit_financeHPO5Nbp.approve.call(addressKNPGT4G, uintJwNpgCG, {from: accounts[5]});
		const uint256NQXCyKs = await Rootkit_financeHPO5Nbp.balanceOf.call(addressTxilik7, {from: accounts[4]});
		const boolMf6M2M = await Rootkit_financeHPO5Nbp.transfer.call(addressmdbIGwZ, uintHoCLSk, {from: accounts[1]});
		const boolpEereNu = await Rootkit_financeHPO5Nbp.transferFrom.call(addressC8KkNdC, addressbFv16nO, uintNvClZ7, {from: accounts[4]});

		assert.equal(boolMf6M2M, false)
		assert.equal(booll5eDx54, true)
		assert.equal(boolpEereNu, false)
		assert.equal(uint256NQXCyKs, BigInt("10000000000000000000000"))
	});
})