const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20S5ysqBF = await GAZ_ERC20.new({from: accounts[3]});
		const addressyr2bVW8 = accounts[2]
		const uintZLlEEEE = BigInt("1851")
		const addressKHsJU0k = accounts[2]
//		const boolFjNkfPh = await GAZ_ERC20S5ysqBF.approve.call(addressyr2bVW8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAJhANAa = await GAZ_ERC20S5ysqBF.transfer.call(addressKHsJU0k, uintZLlEEEE, {from: accounts[0]});

		await expect(GAZ_ERC20S5ysqBF.approve.call(addressyr2bVW8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20WHvYGXD = await GAZ_ERC20.new({from: accounts[0]});
		const addressENXxCCE = accounts[4]
		const addresst1qVC6C = accounts[1]
		const addressq5DjTPD = accounts[0]
//		const boolkRo5ehd = await GAZ_ERC20WHvYGXD.approve.call(addressENXxCCE, {from: accounts[5]});
//		const boolc7KCpp = await GAZ_ERC20WHvYGXD.approve.call(addresst1qVC6C, {from: accounts[2]});
//		const bool9uHPzf = await GAZ_ERC20WHvYGXD.approve.call(addressq5DjTPD, {from: accounts[4]});

		await expect(GAZ_ERC20WHvYGXD.approve.call(addressENXxCCE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20mLxBWJn = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const address9tkLhf = accounts[4]
		const uintH3qJ9c3 = BigInt("1920")
		const addressX73ZFV2 = accounts[0]
		const uintrG0uj0t = BigInt("297")
		const addressETUBYnE = accounts[2]
		const uintP0s2yec = BigInt("157")
		const addressmVNTmrX = accounts[0]
		const addressfxfMBF1 = accounts[1]
		const uintrWl99Yg = BigInt("1421")
		const addressxFCTYpg = accounts[3]
		const uintBLetzMK = BigInt("560")
		const addressdk8iJqa = accounts[0]
		const boolAbFAtfo = await GAZ_ERC20mLxBWJn.approve.call(address9tkLhf, {from: accounts[2]});
		const boolGjmQYFx = await GAZ_ERC20mLxBWJn.approve.call(addressX73ZFV2, uintH3qJ9c3, {from: accounts[2]});
		const boolEYbnWOZ = await GAZ_ERC20mLxBWJn.approve.call(addressETUBYnE, uintrG0uj0t, {from: accounts[4]});
		const booliWDWiJa = await GAZ_ERC20mLxBWJn.transferFrom.call(addressfxfMBF1, addressmVNTmrX, uintP0s2yec, {from: accounts[3]});
		const boolIPiw8b = await GAZ_ERC20mLxBWJn.approve.call(addressxFCTYpg, uintrWl99Yg, {from: "0x0000000000000000000000000000000000000001"});
		const boolLGLnvRI = await GAZ_ERC20mLxBWJn.transfer.call(addressdk8iJqa, uintBLetzMK, {from: accounts[3]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Og6eAlw = await GAZ_ERC20.new({from: accounts[1]});
		const uintyEPSgea = BigInt("118")
		const addressJLFaMOC = accounts[1]
		const addresscbN1oes = accounts[0]
		const uintByjvwL8 = BigInt("670")
		const addressgnWoZX9 = accounts[5]
//		const boolCwLaGUJ = await GAZ_ERC20Og6eAlw.transfer.call(addressJLFaMOC, uintyEPSgea, {from: accounts[2]});
//		const boolYYdpwVX = await GAZ_ERC20Og6eAlw.approve.call(addresscbN1oes, {from: accounts[3]});
//		const boolKQ4u5T6 = await GAZ_ERC20Og6eAlw.approve.call(addressgnWoZX9, uintByjvwL8, {from: accounts[3]});

		await expect(GAZ_ERC20Og6eAlw.transfer.call(addressJLFaMOC, uintyEPSgea, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20i7EpvMC = await GAZ_ERC20.new({from: accounts[2]});
		const uintPvXD2J = BigInt("807")
		const addressyEVo4q = accounts[3]
		const addressyP1Y29 = accounts[5]
		const uintJOVzHa = BigInt("625")
		const addressCuGdVja = accounts[5]
		const addressSPHZii6 = accounts[3]
		const addresspm8mwC2 = accounts[0]
		const uintwXI7lSW = BigInt("1506")
		const addressVeBODd9 = accounts[0]
		const addressU05dEro = accounts[2]
//		const boolleiuH4G = await GAZ_ERC20i7EpvMC.transferFrom.call(addressyP1Y29, addressyEVo4q, uintPvXD2J, {from: accounts[3]});
//		const boolEP5kICN = await GAZ_ERC20i7EpvMC.transferFrom.call(addressSPHZii6, addressCuGdVja, uintJOVzHa, {from: accounts[3]});
//		const boolA2vHkNF = await GAZ_ERC20i7EpvMC.approve.call(addresspm8mwC2, {from: accounts[2]});
//		const boolAiKAxbR = await GAZ_ERC20i7EpvMC.approve.call(addressVeBODd9, uintwXI7lSW, {from: accounts[5]});
//		const booldrzLI8b = await GAZ_ERC20i7EpvMC.approve.call(addressU05dEro, {from: accounts[0]});

		await expect(GAZ_ERC20i7EpvMC.transferFrom.call(addressyP1Y29, addressyEVo4q, uintPvXD2J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20cbsfdg = await GAZ_ERC20.new({from: accounts[1]});
		const uintFcKJ2Lg = BigInt("283")
		const address7mWW63 = accounts[5]
		const uintIYaJRkI = BigInt("1395")
		const addressQN0P9Dp = "0x0000000000000000000000000000000000000001"
		const addressIiE1wrM = accounts[1]
		const uintUJJmi9q = BigInt("124")
		const addressTQHAUyf = accounts[2]
		const addressIxnaR04 = accounts[4]
		const uintLwRtRuH = BigInt("785")
		const addressU99U8sj = accounts[5]
		const boolRpVlTWl = await GAZ_ERC20cbsfdg.approve.call(address7mWW63, uintFcKJ2Lg, {from: "0x0000000000000000000000000000000000000001"});
//		const booleQk3Tcu = await GAZ_ERC20cbsfdg.transferFrom.call(addressIiE1wrM, addressQN0P9Dp, uintIYaJRkI, {from: accounts[3]});
//		const boolUnRTbtA = await GAZ_ERC20cbsfdg.transfer.call(addressTQHAUyf, uintUJJmi9q, {from: accounts[4]});
//		const boolcm2cFiW = await GAZ_ERC20cbsfdg.approve.call(addressIxnaR04, {from: accounts[4]});
//		const boolyDR77dH = await GAZ_ERC20cbsfdg.approve.call(addressU99U8sj, uintLwRtRuH, {from: accounts[0]});

		assert.equal(boolRpVlTWl, true)
		await expect(GAZ_ERC20cbsfdg.transferFrom.call(addressIiE1wrM, addressQN0P9Dp, uintIYaJRkI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20S5ysqBF = await GAZ_ERC20.new({from: accounts[3]});
		const addressGeK6OeN = accounts[0]
		const addressGK6OxR = accounts[2]
		const uintBLUu93M = BigInt("1735")
		const addressSwlSLUn = accounts[2]
		const uintGLJ7vXU = BigInt("691")
		const addressGJ8bVV4 = accounts[0]
		const uintBRouCxb = BigInt("1851")
		const addressE59AU03 = accounts[2]
//		const boolncbEjwa = await GAZ_ERC20S5ysqBF.approve.call(addressGeK6OeN, {from: accounts[3]});
//		const boolFjNkfPh = await GAZ_ERC20S5ysqBF.approve.call(addressGK6OxR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHCHL0d9 = await GAZ_ERC20S5ysqBF.approve.call(addressSwlSLUn, uintBLUu93M, {from: accounts[1]});
//		const boolaRx8t9x = await GAZ_ERC20S5ysqBF.transfer.call(addressGJ8bVV4, uintGLJ7vXU, {from: accounts[1]});
//		const boolAJhANAa = await GAZ_ERC20S5ysqBF.transfer.call(addressE59AU03, uintBRouCxb, {from: accounts[0]});

		await expect(GAZ_ERC20S5ysqBF.approve.call(addressGeK6OeN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20TcOebcO = await GAZ_ERC20.new({from: accounts[1]});
		const uintfNzhoWN = BigInt("249")
		const addressfa2TGbz = accounts[3]
		const uintmb1xUBL = BigInt("687")
		const addressRaA0hsj = "0x0000000000000000000000000000000000000001"
		const addressjuVFUG8 = accounts[1]
		const boolxWHnCIQ = await GAZ_ERC20TcOebcO.approve.call(addressfa2TGbz, uintfNzhoWN, {from: accounts[0]});
		const boolETbt9hE = await GAZ_ERC20TcOebcO.transferFrom.call(addressjuVFUG8, addressRaA0hsj, uintmb1xUBL, {from: accounts[1]});

		assert.equal(boolETbt9hE, true)
		assert.equal(boolxWHnCIQ, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20S5ysqBF = await GAZ_ERC20.new({from: accounts[3]});
		const addressrflBrbD = "0x0000000000000000000000000000000000000001"
		const addressczt3p6T = accounts[4]
//		const boolS0yIxLc = await GAZ_ERC20S5ysqBF.approve.call(addressrflBrbD, {from: accounts[1]});
//		const boolFjNkfPh = await GAZ_ERC20S5ysqBF.approve.call(addressczt3p6T, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20S5ysqBF.approve.call(addressrflBrbD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20S5ysqBF = await GAZ_ERC20.new({from: accounts[3]});
		const addressn0hrorU = accounts[5]
		const addressTmkTVYQ = accounts[3]
		const uintmXsZqqp = BigInt("1611")
		const addressAAH0xge = accounts[0]
//		const boolF5aiOvs = await GAZ_ERC20S5ysqBF.approve.call(addressn0hrorU, {from: accounts[0]});
//		const boolFjNkfPh = await GAZ_ERC20S5ysqBF.approve.call(addressTmkTVYQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNnqWEc = await GAZ_ERC20S5ysqBF.transfer.call(addressAAH0xge, uintmXsZqqp, {from: accounts[3]});

		await expect(GAZ_ERC20S5ysqBF.approve.call(addressn0hrorU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20TcOebcO = await GAZ_ERC20.new({from: accounts[1]});
		const addressSmQk60x = "0x0000000000000000000000000000000000000001"
		const uintXOqjZUr = BigInt("659")
		const addressK59m2G0 = "0x0000000000000000000000000000000000000001"
		const addressEjgfWGt = accounts[2]
//		const boolc9Df0OJ = await GAZ_ERC20TcOebcO.approve.call(addressSmQk60x, {from: accounts[4]});
//		const boolETbt9hE = await GAZ_ERC20TcOebcO.transferFrom.call(addressEjgfWGt, addressK59m2G0, uintXOqjZUr, {from: accounts[1]});

		await expect(GAZ_ERC20TcOebcO.approve.call(addressSmQk60x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20S5ysqBF = await GAZ_ERC20.new({from: accounts[3]});
		const uintFvBqnLm = BigInt("1910")
		const addressudIthVp = accounts[0]
		const addressqcL4xp = accounts[1]
		const addressZ6CAuQZ = accounts[4]
		const boolNzgnJ9h = await GAZ_ERC20S5ysqBF.approve.call(addressudIthVp, uintFvBqnLm, {from: accounts[1]});
//		const boolJsl4JpS = await GAZ_ERC20S5ysqBF.approve.call(addressqcL4xp, {from: accounts[2]});
//		const boolFjNkfPh = await GAZ_ERC20S5ysqBF.approve.call(addressZ6CAuQZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNzgnJ9h, true)
		await expect(GAZ_ERC20S5ysqBF.approve.call(addressqcL4xp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})