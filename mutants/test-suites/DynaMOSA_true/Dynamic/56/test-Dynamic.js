const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicRrS3174 = await Dynamic.new({from: accounts[3]});
		const uinty3pVeLh = BigInt("1808")
		const stringrJ9SYxQ = "YpGsAgC7rV0PgagnUvQ9ouGklm2FOc56"
		const uintFSJjSl1 = BigInt("1228")
		const boolTUTuo6a = await DynamicRrS3174.echidna_test.call({from: accounts[0]});
		const boolVqjgNKP = await DynamicRrS3174.echidna_test.call({from: accounts[4]});
		const boolISco4In = await DynamicRrS3174.yolo.call(uintFSJjSl1, stringrJ9SYxQ, uinty3pVeLh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolISco4In, true)
		assert.equal(boolTUTuo6a, true)
		assert.equal(boolVqjgNKP, true)
	});

	it('test for Dynamic', async () => {
		const Dynamicvtpu1ZE = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintR3swQkF = BigInt("1933")
		const stringxAMO4Oo = "hR1V0uOztQ5ujiGchl4pNkyQsLBARLLonRK8Q1z3L85DO6AJM"
		const uintBpbMmnJ = BigInt("2028")
		const uintCPxe7E2 = BigInt("2010")
		const string1KvnMk = "IHuouQQE1zWcKVlDg"
		const uintdYEvLiY = BigInt("1519")
		const boolqS0Cbem = await Dynamicvtpu1ZE.echidna_test.call({from: accounts[3]});
		const boolkAXfkSG = await Dynamicvtpu1ZE.yolo.call(uintBpbMmnJ, stringxAMO4Oo, uintR3swQkF, {from: accounts[5]});
		const boolXigGkYm = await Dynamicvtpu1ZE.yolo.call(uintdYEvLiY, string1KvnMk, uintCPxe7E2, {from: "0x0000000000000000000000000000000000000001"});
		const boolngvP2kC = await Dynamicvtpu1ZE.echidna_test.call({from: accounts[4]});
	});
})