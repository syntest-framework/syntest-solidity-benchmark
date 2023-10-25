const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeGf0g3ZU = await Rootkit_finance.new({from: accounts[5]});
		const uintyt4DWiV = BigInt("461")
		const addressyy9He5S = accounts[4]
		const addressNEowiF8 = accounts[1]
		const uintBFZk3L = BigInt("1798")
		const addressQsm5Vqr = accounts[0]
		const addressIGBRi7b = accounts[0]
		const addressR4hGMcG = accounts[3]
		const boolse15yOq = await Rootkit_financeGf0g3ZU.approve.call(addressyy9He5S, uintyt4DWiV, {from: accounts[3]});
		const uint256lPt5iuT = await Rootkit_financeGf0g3ZU.balanceOf.call(addressNEowiF8, {from: accounts[1]});
		const boolq6XuKuD = await Rootkit_financeGf0g3ZU.transferFrom.call(addressIGBRi7b, addressQsm5Vqr, uintBFZk3L, {from: accounts[5]});
		const uint256RhFwu8e = await Rootkit_financeGf0g3ZU.balanceOf.call(addressR4hGMcG, {from: accounts[2]});

		assert.equal(boolq6XuKuD, false)
		assert.equal(boolse15yOq, true)
		assert.equal(uint256RhFwu8e, BigInt("0"))
		assert.equal(uint256lPt5iuT, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeNQ7bF5q = await Rootkit_finance.new({from: accounts[0]});
		const addresslyTDAxi = accounts[1]
		const addresskuj9J0o = accounts[0]
		const addressTMtFF7F = accounts[2]
		const addressHlGQwQz = accounts[3]
		const uintiEeK1Cq = BigInt("596")
		const addresscviFWKl = accounts[2]
		const addressOeVdphX = accounts[3]
		const uintwAcmlUD = await Rootkit_financeNQ7bF5q.allowance.call(addresskuj9J0o, addresslyTDAxi, {from: accounts[5]});
		const uintW2ABeLR = await Rootkit_financeNQ7bF5q.allowance.call(addressHlGQwQz, addressTMtFF7F, {from: accounts[4]});
		const boolXVWiIHU = await Rootkit_financeNQ7bF5q.transferFrom.call(addressOeVdphX, addresscviFWKl, uintiEeK1Cq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXVWiIHU, false)
		assert.equal(uintW2ABeLR, BigInt("0"))
		assert.equal(uintwAcmlUD, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeS7ZRNSy = await Rootkit_finance.new({from: accounts[3]});
		const uintdKKdnB6 = BigInt("83")
		const addressEsjdC6 = accounts[1]
		const addressgtsuOu5 = accounts[2]
		const uintDqOaJye = BigInt("1083")
		const addresszEnec0G = accounts[1]
		const boolwzlpdFy = await Rootkit_financeS7ZRNSy.transferFrom.call(addressgtsuOu5, addressEsjdC6, uintdKKdnB6, {from: accounts[2]});
		const boolFFS3Ae = await Rootkit_financeS7ZRNSy.transfer.call(addresszEnec0G, uintDqOaJye, {from: accounts[2]});

		assert.equal(boolFFS3Ae, false)
		assert.equal(boolwzlpdFy, false)
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financekmjskp = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJtPUn4l = accounts[3]
		const uintqEV0Ahx = BigInt("1264")
		const addressIATmjzP = accounts[4]
		const addressqyiv8b9 = accounts[4]
		const uint256v9hHQsS = await Rootkit_financekmjskp.balanceOf.call(addressJtPUn4l, {from: accounts[0]});
		const booljR4UKFI = await Rootkit_financekmjskp.transferFrom.call(addressqyiv8b9, addressIATmjzP, uintqEV0Ahx, {from: accounts[0]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeS7ZRNSy = await Rootkit_finance.new({from: accounts[3]});
		const addresscZipTt0 = accounts[0]
		const addresskaKVpHI = accounts[0]
		const uintEAz7KJu = BigInt("1041")
		const addressMsrrYun = accounts[4]
		const uintmBOvPCJ = BigInt("83")
		const addressSbKnPP = accounts[1]
		const addressf3fPyH = accounts[2]
		const uintFzGGeGu = await Rootkit_financeS7ZRNSy.allowance.call(addresskaKVpHI, addresscZipTt0, {from: accounts[0]});
		const uint256zW69awU = await Rootkit_financeS7ZRNSy.totalSupply.call({from: accounts[1]});
		const booly8tLl3g = await Rootkit_financeS7ZRNSy.approve.call(addressMsrrYun, uintEAz7KJu, {from: accounts[2]});
		const boolwzlpdFy = await Rootkit_financeS7ZRNSy.transferFrom.call(addressf3fPyH, addressSbKnPP, uintmBOvPCJ, {from: accounts[2]});

		assert.equal(boolwzlpdFy, false)
		assert.equal(booly8tLl3g, true)
		assert.equal(uint256zW69awU, BigInt("10000000000000000000000"))
		assert.equal(uintFzGGeGu, BigInt("0"))
	});
})