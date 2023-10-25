const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicGYBBmpZ = await Dynamic.new({from: accounts[2]});
		const uintfKxP5oL = BigInt("51")
		const stringOTLDrnb = "W6ptmQOJLn"
		const uintgWBcdhT = BigInt("761")
		const boolNCxy2SJ = await DynamicGYBBmpZ.echidna_test.call({from: accounts[0]});
		const boolswVVxm = await DynamicGYBBmpZ.yolo.call(uintgWBcdhT, stringOTLDrnb, uintfKxP5oL, {from: accounts[5]});
		const boolwpuQijY = await DynamicGYBBmpZ.echidna_test.call({from: accounts[4]});
		const boolQXDa9sn = await DynamicGYBBmpZ.echidna_test.call({from: accounts[2]});
		const booldsvFOBr = await DynamicGYBBmpZ.echidna_test.call({from: accounts[3]});

		assert.equal(boolNCxy2SJ, true)
		assert.equal(boolQXDa9sn, true)
		assert.equal(booldsvFOBr, true)
		assert.equal(boolswVVxm, true)
		assert.equal(boolwpuQijY, true)
	});

	it('test for Dynamic', async () => {
		const DynamicJC2kP6t = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWkBQhgc = BigInt("1786")
		const stringaO8PBim = "glPrxnbh4v6v0mSLPCVBz9FDPZa43F9zn4MsaKrTMNSo8C"
		const uintiwUoqGX = BigInt("713")
		const uint24GVuD = BigInt("379")
		const string04hqei = "1wwp"
		const uintSJSi8Pt = BigInt("683")
		const boolTiGNyNk = await DynamicJC2kP6t.yolo.call(uintiwUoqGX, stringaO8PBim, uintWkBQhgc, {from: accounts[3]});
		const boolsglKQhx = await DynamicJC2kP6t.yolo.call(uintSJSi8Pt, string04hqei, uint24GVuD, {from: accounts[2]});
		const boolCfCYKJ8 = await DynamicJC2kP6t.echidna_test.call({from: accounts[1]});
	});
})