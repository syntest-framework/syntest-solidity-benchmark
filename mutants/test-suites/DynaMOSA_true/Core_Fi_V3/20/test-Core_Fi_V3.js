const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3sHgZl6Z = await Core_Fi_V3.new({from: accounts[1]});
		const addressREHrT9n = accounts[0]
		const addressaha9hky = accounts[1]
		const addressRn4gCPk = accounts[1]
		const addressRcbhRkO = "0x0000000000000000000000000000000000000001"
		const addressw2pU4LX = accounts[0]
		const uintTfxiQVE = BigInt("300")
		const addressJ0FqFe = accounts[3]
		const uintTjzq3Dq = await Core_Fi_V3sHgZl6Z.allowance.call(addressaha9hky, addressREHrT9n, {from: accounts[1]});
		const uint256rrXOn7 = await Core_Fi_V3sHgZl6Z.balanceOf.call(addressRn4gCPk, {from: accounts[2]});
		const uintfp7LK79 = await Core_Fi_V3sHgZl6Z.allowance.call(addressw2pU4LX, addressRcbhRkO, {from: accounts[4]});
		const boolV08Z1t0 = await Core_Fi_V3sHgZl6Z.approve.call(addressJ0FqFe, uintTfxiQVE, {from: accounts[4]});

		assert.equal(boolV08Z1t0, true)
		assert.equal(uint256rrXOn7, BigInt("84000000000000000000000"))
		assert.equal(uintTjzq3Dq, BigInt("0"))
		assert.equal(uintfp7LK79, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3dx1tNwG = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVDeoia6 = accounts[3]
		const uintzYjbqg = BigInt("50")
		const addressrcLcasP = accounts[0]
		const uint256IWxkXzJ = await Core_Fi_V3dx1tNwG.balanceOf.call(addressVDeoia6, {from: accounts[4]});
		const boolesx0YU0 = await Core_Fi_V3dx1tNwG.approve.call(addressrcLcasP, uintzYjbqg, {from: accounts[4]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V34L42SW = await Core_Fi_V3.new({from: accounts[4]});
		const uintXoLNpGK = BigInt("1919")
		const addressfXYEFm = accounts[2]
		const addressipqen2 = accounts[3]
		const uintGwXWnDF = BigInt("1553")
		const addressGx43nC7 = accounts[3]
		const addresssjZ1gBm = "0x0000000000000000000000000000000000000001"
		const addressfCaazWp = "0x0000000000000000000000000000000000000001"
		const booloNC6xVN = await Core_Fi_V34L42SW.transferFrom.call(addressipqen2, addressfXYEFm, uintXoLNpGK, {from: "0x0000000000000000000000000000000000000001"});
		const boolJj3fwfa = await Core_Fi_V34L42SW.transferFrom.call(addresssjZ1gBm, addressGx43nC7, uintGwXWnDF, {from: accounts[1]});
		const uint256MGFDdwD = await Core_Fi_V34L42SW.balanceOf.call(addressfCaazWp, {from: accounts[0]});

		assert.equal(boolJj3fwfa, false)
		assert.equal(booloNC6xVN, false)
		assert.equal(uint256MGFDdwD, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3BBaHxA7 = await Core_Fi_V3.new({from: accounts[1]});
		const uintm9NiJ9 = BigInt("1923")
		const addressK5IErcl = accounts[1]
		const addressYJnwjxZ = accounts[1]
		const addressKH8vwJb = accounts[5]
		const addressJKR8IVD = accounts[3]
		const uintCbPPSyG = BigInt("290")
		const addressFQwdRJ3 = accounts[2]
		const addressTkMMVtg = accounts[4]
		const uint256iItjAJQ = await Core_Fi_V3BBaHxA7.totalSupply.call({from: accounts[4]});
		const uint256osgmKee = await Core_Fi_V3BBaHxA7.totalSupply.call({from: accounts[3]});
		const booljNTxXje = await Core_Fi_V3BBaHxA7.transferFrom.call(addressYJnwjxZ, addressK5IErcl, uintm9NiJ9, {from: accounts[1]});
		const uintkSpEdye = await Core_Fi_V3BBaHxA7.allowance.call(addressJKR8IVD, addressKH8vwJb, {from: accounts[0]});
		const boolHgM8WWH = await Core_Fi_V3BBaHxA7.transferFrom.call(addressTkMMVtg, addressFQwdRJ3, uintCbPPSyG, {from: accounts[5]});
		const uint256lhLnXMK = await Core_Fi_V3BBaHxA7.totalSupply.call({from: accounts[4]});

		assert.equal(boolHgM8WWH, false)
		assert.equal(booljNTxXje, false)
		assert.equal(uint256iItjAJQ, BigInt("84000000000000000000000"))
		assert.equal(uint256lhLnXMK, BigInt("84000000000000000000000"))
		assert.equal(uint256osgmKee, BigInt("84000000000000000000000"))
		assert.equal(uintkSpEdye, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3ug4OWL8 = await Core_Fi_V3.new({from: accounts[4]});
		const uintN1A95pX = BigInt("403")
		const addressU97FBzs = accounts[1]
		const addressrLGNdbE = accounts[2]
		const uintxHioA0q = BigInt("2007")
		const addressgn1154I = accounts[1]
		const addressEoyNFtd = accounts[1]
		const uint4WNPJl = BigInt("1030")
		const addressqjVE2SY = accounts[2]
		const booljU75jcA = await Core_Fi_V3ug4OWL8.transferFrom.call(addressrLGNdbE, addressU97FBzs, uintN1A95pX, {from: accounts[0]});
		const uint256o2VJ5p = await Core_Fi_V3ug4OWL8.totalSupply.call({from: accounts[0]});
		const booln5bNhAg = await Core_Fi_V3ug4OWL8.transferFrom.call(addressEoyNFtd, addressgn1154I, uintxHioA0q, {from: accounts[1]});
		const boolFP3FKw1 = await Core_Fi_V3ug4OWL8.transfer.call(addressqjVE2SY, uint4WNPJl, {from: accounts[0]});

		assert.equal(boolFP3FKw1, false)
		assert.equal(booljU75jcA, false)
		assert.equal(booln5bNhAg, false)
		assert.equal(uint256o2VJ5p, BigInt("84000000000000000000000"))
	});
})