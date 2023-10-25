const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinKSLFNHi = await MetaCoin.new({from: accounts[3]});
		const uintGah8f9 = BigInt("979")
		const addressNtwsU8 = accounts[5]
		const uintePMBMjL = BigInt("647")
		const addressUN7SyMo = accounts[0]
		const uintpiJm42R = BigInt("1926")
		const addressfNKVsI0 = accounts[5]
		const uintfiMnceq = BigInt("797")
		const addresshlHd6ZV = accounts[3]
		const boolMpb9Q1 = await MetaCoinKSLFNHi.sendCoin.call(addressNtwsU8, uintGah8f9, {from: accounts[1]});
		const boolGUaUK0R = await MetaCoinKSLFNHi.sendCoin.call(addressUN7SyMo, uintePMBMjL, {from: accounts[3]});
		const boolpM2GEWr = await MetaCoinKSLFNHi.sendCoin.call(addressfNKVsI0, uintpiJm42R, {from: accounts[3]});
		const boolUa24Dpo = await MetaCoinKSLFNHi.sendCoin.call(addresshlHd6ZV, uintfiMnceq, {from: accounts[3]});

		assert.equal(boolGUaUK0R, true)
		assert.equal(boolMpb9Q1, false)
		assert.equal(boolUa24Dpo, true)
		assert.equal(boolpM2GEWr, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinT1o9rAx = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttuNDnzv = BigInt("1965")
		const addresshbcbca = accounts[3]
		const uintmHIzt4x = BigInt("1773")
		const addressiY2IHm = accounts[0]
		const uintdesgAkx = BigInt("481")
		const address6o8WUD = accounts[3]
		const uintAYcAXQH = BigInt("1595")
		const addressEMjawfv = accounts[3]
		const boolIIoBQT0 = await MetaCoinT1o9rAx.sendCoin.call(addresshbcbca, uinttuNDnzv, {from: accounts[3]});
		const boolVk74zFs = await MetaCoinT1o9rAx.sendCoin.call(addressiY2IHm, uintmHIzt4x, {from: accounts[3]});
		const boolS1HaK3z = await MetaCoinT1o9rAx.sendCoin.call(address6o8WUD, uintdesgAkx, {from: accounts[1]});
		const boolCyw0MuF = await MetaCoinT1o9rAx.sendCoin.call(addressEMjawfv, uintAYcAXQH, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinsZahKGq = await MetaCoin.new({from: accounts[2]});
		const uintjL5HdJr = BigInt("1686")
		const addressCqo98YA = accounts[4]
		const uintfXGupD = BigInt("32")
		const addressojBFfpI = accounts[0]
		const uintKGqksMm = BigInt("0")
		const addressY3Etjq8 = accounts[4]
		const uinttIWA86C = BigInt("1137")
		const addressZGWv3ux = accounts[2]
		const boolQu0DKaf = await MetaCoinsZahKGq.sendCoin.call(addressCqo98YA, uintjL5HdJr, {from: accounts[4]});
		const boolQnswnjx = await MetaCoinsZahKGq.sendCoin.call(addressojBFfpI, uintfXGupD, {from: accounts[2]});
		const boolbHiMf8n = await MetaCoinsZahKGq.sendCoin.call(addressY3Etjq8, uintKGqksMm, {from: accounts[2]});
		const bool9p4DZr = await MetaCoinsZahKGq.sendCoin.call(addressZGWv3ux, uinttIWA86C, {from: accounts[1]});

		assert.equal(bool9p4DZr, false)
		assert.equal(boolQnswnjx, true)
		assert.equal(boolQu0DKaf, false)
		assert.equal(boolbHiMf8n, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinTP1Qjt0 = await MetaCoin.new({from: accounts[4]});
		const uintkGCj8NV = BigInt("3034")
		const addressImdeO1p = accounts[10]
		const uintyHILsUI = BigInt("1275")
		const addressDTTffUh = accounts[3]
//		const bool45mRjk = await MetaCoinTP1Qjt0.sendCoin.call(addressImdeO1p, uintkGCj8NV, {from: accounts[4]});
//		const boolJ1pdD8h = await MetaCoinTP1Qjt0.sendCoin.call(addressDTTffUh, uintyHILsUI, {from: accounts[0]});

		await expect(MetaCoinTP1Qjt0.sendCoin.call(addressImdeO1p, uintkGCj8NV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})