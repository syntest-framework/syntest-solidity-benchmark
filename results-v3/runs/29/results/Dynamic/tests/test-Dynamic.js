const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicBI3ddtx = await Dynamic.new({from: accounts[4]});
		const uintQ5Wmwhb = BigInt("627")
		const stringf2ye08X = "KYjn4GjjvmgzqFWgMXJL2Uv5QiOSu7RUMDj"
		const uintdxELEh = BigInt("434")
		const uintN6Fs8Hu = BigInt("348")
		const stringS3oyyOO = "T5hWyNIqh2hn2Xgu54bHNiKrrm4RQ4UVOYgtc49Sq71fLSPN4wapECvw2ULGZrkbOUoaRuQl7MnQNbMU1hD4Rfb"
		const uintdAiohX = BigInt("539")
		const boolAXe7kWj = await DynamicBI3ddtx.echidna_test.call({from: accounts[1]});
		const boolHVUuqsR = await DynamicBI3ddtx.yolo.call(uintdxELEh, stringf2ye08X, uintQ5Wmwhb, {from: accounts[2]});
		const boolmpT4XWG = await DynamicBI3ddtx.echidna_test.call({from: accounts[3]});
		const boolrKWRZtT = await DynamicBI3ddtx.yolo.call(uintdAiohX, stringS3oyyOO, uintN6Fs8Hu, {from: accounts[4]});

		assert.equal(boolAXe7kWj, true)
		assert.equal(boolHVUuqsR, true)
		assert.equal(boolmpT4XWG, true)
		assert.equal(boolrKWRZtT, true)
	});

	it('test for Dynamic', async () => {
		const DynamicvYttpae = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsmTq6TX = BigInt("1047")
		const stringRYcOoOy = "F9zUzaGK"
		const uintNXSZOx = BigInt("1586")
		const uintAWESaBx = BigInt("1108")
		const stringviqQhRW = "GS4aovW34oY7OuheD1m7d0RyLHBp6YVPQaTbeMeH5UW9EW1Fntz"
		const uintRh872tG = BigInt("602")
		const boolQuACioZ = await DynamicvYttpae.echidna_test.call({from: accounts[4]});
		const boolNQHEo0L = await DynamicvYttpae.yolo.call(uintNXSZOx, stringRYcOoOy, uintsmTq6TX, {from: accounts[0]});
		const boolTQz7qe = await DynamicvYttpae.yolo.call(uintRh872tG, stringviqQhRW, uintAWESaBx, {from: accounts[4]});
	});
})