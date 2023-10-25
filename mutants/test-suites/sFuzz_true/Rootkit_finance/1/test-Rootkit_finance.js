const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeE1TyV9B = await Rootkit_finance.new({from: accounts[0]});
		const addressnIoGmht = accounts[3]
		const addressvnIPuhn = "0x0000000000000000000000000000000000000001"
		const addressZWhhZf = accounts[5]
		const addressFsWr9SC = accounts[4]
		const uintwqbfAmV = BigInt("632")
		const addressgwHr3X = accounts[0]
		const addressQ2if4K2 = accounts[0]
		const addresscHXlLdu = accounts[4]
		const uintfpMBGPw = BigInt("1309")
		const addressLO01zp = accounts[3]
		const uintrs8Udno = await Rootkit_financeE1TyV9B.allowance.call(addressvnIPuhn, addressnIoGmht, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jXp74OF = await Rootkit_financeE1TyV9B.balanceOf.call(addressZWhhZf, {from: accounts[2]});
		const uint256cF757us = await Rootkit_financeE1TyV9B.balanceOf.call(addressFsWr9SC, {from: accounts[3]});
		const booli2QLEy9 = await Rootkit_financeE1TyV9B.transferFrom.call(addressQ2if4K2, addressgwHr3X, uintwqbfAmV, {from: accounts[5]});
		const uint256esMc78h = await Rootkit_financeE1TyV9B.balanceOf.call(addresscHXlLdu, {from: accounts[0]});
		const boolEa1KdBC = await Rootkit_financeE1TyV9B.transfer.call(addressLO01zp, uintfpMBGPw, {from: accounts[4]});

		assert.equal(boolEa1KdBC, false)
		assert.equal(booli2QLEy9, false)
		assert.equal(uint256cF757us, BigInt("0"))
		assert.equal(uint256esMc78h, BigInt("0"))
		assert.equal(uint256jXp74OF, BigInt("0"))
		assert.equal(uintrs8Udno, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeX2zyaa6 = await Rootkit_finance.new({from: accounts[5]});
		const addressCbtRLBM = accounts[4]
		const addresstnsbMcW = accounts[4]
		const address4kqalP = "0x0000000000000000000000000000000000000001"
		const addressayvRz9e = accounts[5]
		const uinttNyQLDQ = BigInt("878")
		const addressiuuAZa = "0x0000000000000000000000000000000000000001"
		const uintRa6P51p = await Rootkit_financeX2zyaa6.allowance.call(addresstnsbMcW, addressCbtRLBM, {from: accounts[3]});
		const uintBuCj0yx = await Rootkit_financeX2zyaa6.allowance.call(addressayvRz9e, address4kqalP, {from: accounts[2]});
		const boolDmaQRY = await Rootkit_financeX2zyaa6.approve.call(addressiuuAZa, uinttNyQLDQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDmaQRY, true)
		assert.equal(uintBuCj0yx, BigInt("0"))
		assert.equal(uintRa6P51p, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financedRcmBTK = await Rootkit_finance.new({from: accounts[0]});
		const addressCZBKlU = accounts[0]
		const addressaZyWjCc = accounts[3]
		const addressVixcQvE = accounts[1]
		const uint256Uq8UIET = await Rootkit_financedRcmBTK.totalSupply.call({from: accounts[3]});
		const uint256LTK4Uqq = await Rootkit_financedRcmBTK.balanceOf.call(addressCZBKlU, {from: accounts[2]});
		const uint256zcDLxQO = await Rootkit_financedRcmBTK.balanceOf.call(addressaZyWjCc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GMFmabM = await Rootkit_financedRcmBTK.balanceOf.call(addressVixcQvE, {from: accounts[1]});

		assert.equal(uint256GMFmabM, BigInt("0"))
		assert.equal(uint256LTK4Uqq, BigInt("10000000000000000000000"))
		assert.equal(uint256Uq8UIET, BigInt("10000000000000000000000"))
		assert.equal(uint256zcDLxQO, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeafSwLC = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintk4FZSWj = BigInt("1650")
		const addressxM8NEwr = accounts[2]
		const uintet8Rhj = BigInt("1540")
		const addressvhUrVOo = accounts[0]
		const uintpCRk1F4 = BigInt("21")
		const addressLcaY5ZS = accounts[0]
		const addressQj9on6L = accounts[1]
		const boolsc38ybG = await Rootkit_financeafSwLC.transfer.call(addressxM8NEwr, uintk4FZSWj, {from: accounts[4]});
		const boolkTUqUG = await Rootkit_financeafSwLC.transfer.call(addressvhUrVOo, uintet8Rhj, {from: accounts[3]});
		const boolyp0cfDq = await Rootkit_financeafSwLC.transferFrom.call(addressQj9on6L, addressLcaY5ZS, uintpCRk1F4, {from: accounts[0]});
	});
})