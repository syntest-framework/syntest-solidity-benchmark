const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3RqbpRhX = await Core_Fi_V3.new({from: accounts[5]});
		const addressc0KwiqB = accounts[4]
		const addressOyGd9M2 = accounts[2]
		const addressa2KNVUD = accounts[4]
		const uintW7qnp2 = BigInt("945")
		const addressSzMJV5I = accounts[3]
		const uintze5I32e = BigInt("855")
		const addressHZX9kAR = accounts[0]
		const addressHhM9GN = accounts[0]
		const uint256mIGWJIA = await Core_Fi_V3RqbpRhX.balanceOf.call(addressc0KwiqB, {from: accounts[0]});
		const uint3X3hMv = await Core_Fi_V3RqbpRhX.allowance.call(addressa2KNVUD, addressOyGd9M2, {from: "0x0000000000000000000000000000000000000001"});
		const boolnkGtY6j = await Core_Fi_V3RqbpRhX.transfer.call(addressSzMJV5I, uintW7qnp2, {from: accounts[2]});
		const boolWij8p0 = await Core_Fi_V3RqbpRhX.approve.call(addressHZX9kAR, uintze5I32e, {from: accounts[2]});
		const uint256OWjpGh6 = await Core_Fi_V3RqbpRhX.totalSupply.call({from: accounts[3]});
		const uint256xQ4R8eU = await Core_Fi_V3RqbpRhX.balanceOf.call(addressHhM9GN, {from: accounts[2]});

		assert.equal(boolWij8p0, true)
		assert.equal(boolnkGtY6j, false)
		assert.equal(uint256OWjpGh6, BigInt("84000000000000000000000"))
		assert.equal(uint256mIGWJIA, BigInt("0"))
		assert.equal(uint256xQ4R8eU, BigInt("0"))
		assert.equal(uint3X3hMv, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3M4oFy4s = await Core_Fi_V3.new({from: accounts[4]});
		const uintsSUxpmW = BigInt("1696")
		const address87mAma = accounts[1]
		const uintw4kR6A3 = BigInt("2044")
		const addressQDzOPLL = accounts[3]
		const uintgCoEdLJ = BigInt("336")
		const addressyh1SMR9 = accounts[2]
		const uinthA8DEPm = BigInt("933")
		const addressFTNJMPu = accounts[2]
		const addressU8RRjiw = accounts[0]
		const uintVwQ6byu = BigInt("964")
		const addressHBqyc0d = accounts[5]
		const addressplvvrJN = accounts[0]
		const addressz9tQfaT = accounts[1]
		const boolFSxbVrm = await Core_Fi_V3M4oFy4s.transfer.call(address87mAma, uintsSUxpmW, {from: accounts[2]});
		const boolbMbVp9l = await Core_Fi_V3M4oFy4s.transfer.call(addressQDzOPLL, uintw4kR6A3, {from: accounts[1]});
		const boolBmFN22i = await Core_Fi_V3M4oFy4s.approve.call(addressyh1SMR9, uintgCoEdLJ, {from: accounts[1]});
		const boolv3ZTOLt = await Core_Fi_V3M4oFy4s.transferFrom.call(addressU8RRjiw, addressFTNJMPu, uinthA8DEPm, {from: accounts[4]});
		const booltw3NBNc = await Core_Fi_V3M4oFy4s.transfer.call(addressHBqyc0d, uintVwQ6byu, {from: accounts[4]});
		const uintJIyYYkn = await Core_Fi_V3M4oFy4s.allowance.call(addressz9tQfaT, addressplvvrJN, {from: accounts[3]});

		assert.equal(boolBmFN22i, true)
		assert.equal(boolFSxbVrm, false)
		assert.equal(boolbMbVp9l, false)
		assert.equal(booltw3NBNc, true)
		assert.equal(boolv3ZTOLt, false)
		assert.equal(uintJIyYYkn, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3fDiONzb = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdCPHD71 = BigInt("473")
		const addressi17iz0Y = accounts[3]
		const uintGLl7b3b = BigInt("1856")
		const addressEXvwm5 = accounts[1]
		const addressDUfOTkj = accounts[4]
		const addressEBvGYcM = accounts[0]
		const addresswqRpPyO = accounts[2]
		const boolZAp6tKN = await Core_Fi_V3fDiONzb.approve.call(addressi17iz0Y, uintdCPHD71, {from: accounts[3]});
		const boollfD3cHS = await Core_Fi_V3fDiONzb.transferFrom.call(addressDUfOTkj, addressEXvwm5, uintGLl7b3b, {from: "0x0000000000000000000000000000000000000001"});
		const uintnrtstiJ = await Core_Fi_V3fDiONzb.allowance.call(addresswqRpPyO, addressEBvGYcM, {from: accounts[3]});
	});
})