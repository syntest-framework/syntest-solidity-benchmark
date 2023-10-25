const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTUvoVjzA = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmQQvnYX = accounts[0]
		const addressRHljsY = accounts[3]
		const addressa7wiZ9u = accounts[1]
		const uinte0pDWmm = BigInt("528")
		const addressD2tBOg0 = accounts[2]
		const addressG0Dwgo = accounts[1]
		const addresshY1JiT3 = accounts[4]
		const addressIvTKvGJ = accounts[5]
		const uintIVTqxp1 = await PACTUvoVjzA.balanceOf.call(addressmQQvnYX, {from: accounts[4]});
		const uintqpU2AXH = await PACTUvoVjzA.allowance.call(addressa7wiZ9u, addressRHljsY, {from: accounts[3]});
		const boolGVytWdG = await PACTUvoVjzA.approve.call(addressD2tBOg0, uinte0pDWmm, {from: accounts[5]});
		const boolKrkMmw5 = await PACTUvoVjzA.setupTeam.call(addressG0Dwgo, {from: accounts[4]});
		const uintDa9P6M = await PACTUvoVjzA.allowance.call(addressIvTKvGJ, addresshY1JiT3, {from: accounts[3]});
		const stringFZuZPt = await PACTUvoVjzA.symbol.call({from: accounts[0]});
	});

	it('test for PACT', async () => {
		const PACTjXLLynK = await PACT.new({from: accounts[2]});
		const uintlxQklnU = BigInt("713")
		const addressDAO8rCE = accounts[3]
		const addressEYgQk7N = accounts[2]
		const addressP2qSezn = accounts[3]
//		const boolNYUWG3J = await PACTjXLLynK.transfer.call(addressDAO8rCE, uintlxQklnU, {from: accounts[2]});
//		const boolhW7UxB = await PACTjXLLynK.setupTeam.call(addressEYgQk7N, {from: accounts[3]});
//		const boolMr0eQw = await PACTjXLLynK.setupBasePool.call(addressP2qSezn, {from: accounts[2]});
//		const stringoSFBuaL = await PACTjXLLynK.symbol.call({from: accounts[3]});
//		const uintce6fQ5h = await PACTjXLLynK.totalSupply.call({from: accounts[3]});

		await expect(PACTjXLLynK.transfer.call(addressDAO8rCE, uintlxQklnU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTj4LOw9 = await PACT.new({from: accounts[1]});
		const addresszSK24ie = accounts[3]
		const addressMfm4cXY = accounts[0]
		const addressH3lrs2 = accounts[1]
//		const boolpP2aVSM = await PACTj4LOw9.setupBasePool.call(addresszSK24ie, {from: "0x0000000000000000000000000000000000000001"});
//		const uintHSXHC0C = await PACTj4LOw9.balanceOf.call(addressMfm4cXY, {from: accounts[0]});
//		const stringitc21FD = await PACTj4LOw9.symbol.call({from: accounts[2]});
//		const uintPIsfYa0 = await PACTj4LOw9.balanceOf.call(addressH3lrs2, {from: accounts[3]});

		await expect(PACTj4LOw9.setupBasePool.call(addresszSK24ie, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTJw0u4ou = await PACT.new({from: accounts[2]});
		const addressiv6U0PN = accounts[2]
		const addressdGXxFwW = accounts[1]
		const addressAn3qWB = accounts[3]
		const uintqedISQh = await PACTJw0u4ou.allowance.call(addressdGXxFwW, addressiv6U0PN, {from: accounts[2]});
//		const boolaCv21Cn = await PACTJw0u4ou.setupRewards.call(addressAn3qWB, {from: accounts[1]});
//		const stringa5jc5v8 = await PACTJw0u4ou.name.call({from: accounts[1]});

		assert.equal(uintqedISQh, BigInt("0"))
		await expect(PACTJw0u4ou.setupRewards.call(addressAn3qWB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzrHPzwZ = await PACT.new({from: accounts[0]});
		const uintFO5Nbpi = BigInt("1709")
		const addressusehIHR = accounts[4]
		const booliGjHtuf = await PACTzrHPzwZ.approve.call(addressusehIHR, uintFO5Nbpi, {from: accounts[4]});
		const uint8YY5NI0W = await PACTzrHPzwZ.decimals.call({from: accounts[4]});

		assert.equal(booliGjHtuf, true)
		assert.equal(uint8YY5NI0W, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACTcU5U4Mz = await PACT.new({from: accounts[4]});
		const addressvbmjAsO = accounts[0]
		const addressTwNUr1Q = accounts[4]
		const address3BN0DG = accounts[1]
		const addressaRMkoDG = accounts[2]
		const uintpd06ROK = BigInt("1471")
		const addresscD5Ixs6 = accounts[1]
		const addresseswjbT2 = accounts[1]
		const uintxTtvze = await PACTcU5U4Mz.allowance.call(addressTwNUr1Q, addressvbmjAsO, {from: accounts[1]});
		const uintdD6KCwg = await PACTcU5U4Mz.balanceOf.call(address3BN0DG, {from: accounts[5]});
//		const boolqxxbzyc = await PACTcU5U4Mz.setupTeam.call(addressaRMkoDG, {from: accounts[5]});
//		const boolowPwMl0 = await PACTcU5U4Mz.transferFrom.call(addresseswjbT2, addresscD5Ixs6, uintpd06ROK, {from: accounts[2]});

		assert.equal(uintdD6KCwg, BigInt("0"))
		assert.equal(uintxTtvze, BigInt("0"))
		await expect(PACTcU5U4Mz.setupTeam.call(addressaRMkoDG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTVI53I5Z = await PACT.new({from: accounts[1]});
		const uintQJ0gxIM = BigInt("1558")
		const addressEBTJivy = accounts[1]
		const addressC7ZbaR4 = accounts[1]
		const uint35s8gI = BigInt("1310")
		const addressYIYa6Fi = accounts[3]
//		const bool9eG3WX = await PACTVI53I5Z.transferFrom.call(addressC7ZbaR4, addressEBTJivy, uintQJ0gxIM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8uOw24T5 = await PACTVI53I5Z.decimals.call({from: accounts[2]});
//		const boolvcECRZ9 = await PACTVI53I5Z.burn.call(addressYIYa6Fi, uint35s8gI, {from: accounts[1]});

		await expect(PACTVI53I5Z.transferFrom.call(addressC7ZbaR4, addressEBTJivy, uintQJ0gxIM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTvn9W8Ms = await PACT.new({from: accounts[4]});
		const uintt11Pu2n = BigInt("1230")
		const addressorDslhI = "0x0000000000000000000000000000000000000001"
		const uintwoFKk1 = await PACTvn9W8Ms.totalSupply.call({from: accounts[4]});
		const uintgAQWqO4 = await PACTvn9W8Ms.totalSupply.call({from: accounts[4]});
//		const boolrpHXuyq = await PACTvn9W8Ms.transfer.call(addressorDslhI, uintt11Pu2n, {from: accounts[4]});
//		const uintkL9Jdnf = await PACTvn9W8Ms.totalSupply.call({from: accounts[1]});
//		const stringFQYmIuf = await PACTvn9W8Ms.symbol.call({from: accounts[2]});

		assert.equal(uintgAQWqO4, BigInt("1000000000000000000000000000"))
		assert.equal(uintwoFKk1, BigInt("1000000000000000000000000000"))
		await expect(PACTvn9W8Ms.transfer.call(addressorDslhI, uintt11Pu2n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzrHPzwZ = await PACT.new({from: accounts[0]});
		const addressmb9u4d = accounts[1]
		const addressqeVci8X = accounts[4]
		const uintddAGnXb = await PACTzrHPzwZ.allowance.call(addressqeVci8X, addressmb9u4d, {from: accounts[3]});
		const stringhHjLoqb = await PACTzrHPzwZ.symbol.call({from: accounts[0]});
		const uint8YY5NI0W = await PACTzrHPzwZ.decimals.call({from: accounts[4]});

		assert.equal(stringhHjLoqb, "PACT")
		assert.equal(uint8YY5NI0W, BigInt("18"))
		assert.equal(uintddAGnXb, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTzrHPzwZ = await PACT.new({from: accounts[0]});
		const uintQNeKuLp = BigInt("1709")
		const addressTXWJvK = accounts[5]
		const addressKBL9u7C = accounts[0]
		const booliGjHtuf = await PACTzrHPzwZ.approve.call(addressTXWJvK, uintQNeKuLp, {from: accounts[4]});
		const uint8YY5NI0W = await PACTzrHPzwZ.decimals.call({from: accounts[4]});
//		const boolxDZmQuy = await PACTzrHPzwZ.setupReserve.call(addressKBL9u7C, {from: accounts[2]});

		assert.equal(booliGjHtuf, true)
		assert.equal(uint8YY5NI0W, BigInt("18"))
		await expect(PACTzrHPzwZ.setupReserve.call(addressKBL9u7C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzrHPzwZ = await PACT.new({from: accounts[0]});
		const uintov1HbBB = BigInt("1709")
		const addressid37iy3 = accounts[4]
		const addresssnWGat8 = accounts[5]
		const addressOGcyU6R = accounts[0]
		const booliGjHtuf = await PACTzrHPzwZ.approve.call(addressid37iy3, uintov1HbBB, {from: accounts[4]});
//		const boolU8spPPc = await PACTzrHPzwZ.setupFarming.call(addresssnWGat8, {from: accounts[1]});
//		const uint8YY5NI0W = await PACTzrHPzwZ.decimals.call({from: accounts[4]});
//		const booluI6MqWS = await PACTzrHPzwZ.setupReserve.call(addressOGcyU6R, {from: accounts[2]});

		assert.equal(booliGjHtuf, true)
		await expect(PACTzrHPzwZ.setupFarming.call(addresssnWGat8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzrHPzwZ = await PACT.new({from: accounts[0]});
		const uintbPCeEdz = BigInt("1709")
		const addressqfMvFfY = accounts[5]
		const addresslMNnh6x = accounts[2]
		const addressUBr5IZ = accounts[1]
		const booliGjHtuf = await PACTzrHPzwZ.approve.call(addressqfMvFfY, uintbPCeEdz, {from: accounts[4]});
		const stringWsnhPHC = await PACTzrHPzwZ.name.call({from: accounts[2]});
		const uintbksL2L = await PACTzrHPzwZ.allowance.call(addressUBr5IZ, addresslMNnh6x, {from: accounts[1]});
		const uint8YY5NI0W = await PACTzrHPzwZ.decimals.call({from: accounts[4]});

		assert.equal(booliGjHtuf, true)
		assert.equal(stringWsnhPHC, "P2PB2B community token")
		assert.equal(uint8YY5NI0W, BigInt("18"))
		assert.equal(uintbksL2L, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTCW3zxDv = await PACT.new({from: accounts[2]});
		const addressAifLfpn = accounts[1]
		const uintPvI9Svt = BigInt("1814")
		const addressAKaxTxD = accounts[0]
		const uintg1NfnxW = BigInt("617")
		const addresssnafbcr = accounts[2]
		const addressUR7Q2H = accounts[0]
		const uintIbDe36 = await PACTCW3zxDv.balanceOf.call(addressAifLfpn, {from: accounts[0]});
		const stringuMbLve3 = await PACTCW3zxDv.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolZRURTSK = await PACTCW3zxDv.burn.call(addressAKaxTxD, uintPvI9Svt, {from: accounts[0]});
//		const boolf23edkI = await PACTCW3zxDv.transferFrom.call(addressUR7Q2H, addresssnafbcr, uintg1NfnxW, {from: accounts[4]});

		assert.equal(stringuMbLve3, "PACT")
		assert.equal(uintIbDe36, BigInt("0"))
		await expect(PACTCW3zxDv.burn.call(addressAKaxTxD, uintPvI9Svt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})