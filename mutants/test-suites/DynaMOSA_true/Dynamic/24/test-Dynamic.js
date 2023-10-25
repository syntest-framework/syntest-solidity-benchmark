const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicU02G5Ac = await Dynamic.new({from: accounts[2]});
		const boolRwTbJf = await DynamicU02G5Ac.echidna_test.call({from: accounts[1]});
		const boolhfsEsq0 = await DynamicU02G5Ac.echidna_test.call({from: accounts[4]});
		const boolYPfoRBq = await DynamicU02G5Ac.echidna_test.call({from: accounts[4]});

		assert.equal(boolRwTbJf, true)
		assert.equal(boolYPfoRBq, true)
		assert.equal(boolhfsEsq0, true)
	});

	it('test for Dynamic', async () => {
		const DynamicGutgRd3 = await Dynamic.new({from: accounts[5]});
		const uintmtBmGve = BigInt("507")
		const stringJqe0iAG = "SgmAYTX7s1FF7bXWhjqPwsQys5HsjG6MlBhLGDNjV9NKjanlJNMFnM8fiNTPIwor6dU3Xin"
		const uintF9urL8k = BigInt("354")
		const uintB6MEBTD = BigInt("501")
		const stringz0uHkKj = "8Dvp6scJ7z7MzxyCsUKvVOLmeESHJbapzckdqH9YaWiVVqljpvsus8Ho1G925i3DnetaVph2sbYtt9"
		const uintkfTu2F3 = BigInt("743")
		const booldJMAd8f = await DynamicGutgRd3.echidna_test.call({from: accounts[3]});
		const boolJagSRo9 = await DynamicGutgRd3.yolo.call(uintF9urL8k, stringJqe0iAG, uintmtBmGve, {from: accounts[1]});
		const boolCWFLiXR = await DynamicGutgRd3.echidna_test.call({from: accounts[0]});
		const boolyfAgGC0 = await DynamicGutgRd3.yolo.call(uintkfTu2F3, stringz0uHkKj, uintB6MEBTD, {from: "0x0000000000000000000000000000000000000001"});
		const boolKitLQ2I = await DynamicGutgRd3.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWIT2YRV = await DynamicGutgRd3.echidna_test.call({from: accounts[5]});

		assert.equal(boolCWFLiXR, true)
		assert.equal(boolJagSRo9, true)
		assert.equal(boolKitLQ2I, true)
		assert.equal(boolWIT2YRV, true)
		assert.equal(booldJMAd8f, true)
		assert.equal(boolyfAgGC0, true)
	});

	it('test for Dynamic', async () => {
		const DynamicNpJvkmK = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkYEYN5j = BigInt("1343")
		const stringFbEFgtn = "iD6Ui9qsON8Jw9OqFJJgRPt7B3TWhx3LQ6Z2Orv"
		const uintw0SnrZ = BigInt("1084")
		const boolGYu9EMP = await DynamicNpJvkmK.echidna_test.call({from: accounts[0]});
		const boolmyqDnI9 = await DynamicNpJvkmK.yolo.call(uintw0SnrZ, stringFbEFgtn, uintkYEYN5j, {from: accounts[0]});
	});
})