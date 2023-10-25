const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V39cuUxb = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintprHfPi4 = BigInt("1322")
		const addresszBhiZBW = accounts[1]
		const uintlHjr6Sa = BigInt("1215")
		const addresssh2w0Vg = accounts[0]
		const addressbpfWg0M = accounts[1]
		const address6dy2nL = accounts[2]
		const uint1p5ZSo = BigInt("1598")
		const addressBKYIuwN = accounts[1]
		const addresscJFll0p = accounts[0]
		const boolZhJe41V = await Core_Fi_V39cuUxb.approve.call(addresszBhiZBW, uintprHfPi4, {from: accounts[0]});
		const uint256sbyxtsG = await Core_Fi_V39cuUxb.totalSupply.call({from: accounts[1]});
		const boolPxnbO1q = await Core_Fi_V39cuUxb.transfer.call(addresssh2w0Vg, uintlHjr6Sa, {from: accounts[0]});
		const uintehfxXi = await Core_Fi_V39cuUxb.allowance.call(address6dy2nL, addressbpfWg0M, {from: accounts[2]});
		const boolRr3wcJR = await Core_Fi_V39cuUxb.transferFrom.call(addresscJFll0p, addressBKYIuwN, uint1p5ZSo, {from: accounts[1]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3rVbqstg = await Core_Fi_V3.new({from: accounts[1]});
		const addressaQTGsTa = "0x0000000000000000000000000000000000000001"
		const addressSBLYK7g = accounts[2]
		const uintKqPnV5G = BigInt("2015")
		const addressuWQyHUE = accounts[3]
		const addressTJ1Ygde = accounts[2]
		const addresse7WsWAM = accounts[4]
		const addressETyXlHr = accounts[4]
		const addressfj8bb9E = accounts[4]
		const uintkRz8MyK = await Core_Fi_V3rVbqstg.allowance.call(addressSBLYK7g, addressaQTGsTa, {from: accounts[3]});
		const boolF03viDZ = await Core_Fi_V3rVbqstg.transferFrom.call(addressTJ1Ygde, addressuWQyHUE, uintKqPnV5G, {from: accounts[1]});
		const uint256cGPJity = await Core_Fi_V3rVbqstg.balanceOf.call(addresse7WsWAM, {from: accounts[2]});
		const uintjta4sv = await Core_Fi_V3rVbqstg.allowance.call(addressfj8bb9E, addressETyXlHr, {from: accounts[2]});

		assert.equal(boolF03viDZ, false)
		assert.equal(uint256cGPJity, BigInt("0"))
		assert.equal(uintjta4sv, BigInt("0"))
		assert.equal(uintkRz8MyK, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3dcKSmfz = await Core_Fi_V3.new({from: accounts[1]});
		const uintgqPueE = BigInt("884")
		const addresskFu0mCr = accounts[0]
		const addressiKDSH9o = accounts[1]
		const uintyrKopDe = BigInt("529")
		const addressy1gA1ae = accounts[0]
		const uintdZ2ZINM = BigInt("1753")
		const addressWE7oRNf = accounts[3]
		const uintjP9TZsd = BigInt("1792")
		const addressde4uk2O = accounts[5]
		const boolxhO8uPM = await Core_Fi_V3dcKSmfz.transferFrom.call(addressiKDSH9o, addresskFu0mCr, uintgqPueE, {from: accounts[5]});
		const boolIxiRaX = await Core_Fi_V3dcKSmfz.transfer.call(addressy1gA1ae, uintyrKopDe, {from: accounts[3]});
		const boolGzzg8BM = await Core_Fi_V3dcKSmfz.approve.call(addressWE7oRNf, uintdZ2ZINM, {from: accounts[4]});
		const uint256GSdUkkK = await Core_Fi_V3dcKSmfz.totalSupply.call({from: accounts[2]});
		const boolqO3V2MF = await Core_Fi_V3dcKSmfz.transfer.call(addressde4uk2O, uintjP9TZsd, {from: accounts[0]});

		assert.equal(boolGzzg8BM, true)
		assert.equal(boolIxiRaX, false)
		assert.equal(boolqO3V2MF, false)
		assert.equal(boolxhO8uPM, false)
		assert.equal(uint256GSdUkkK, BigInt("84000000000000000000000"))
	});
})