const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicZjW8pH8 = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzjtueDW = BigInt("526")
		const stringqx28Dp8 = "FlrGVrHCjxbkWdEC2i9mlcezocro6apc6sK8V7sOSml8jM8mnh3qydtHUjxkHD4hHgxAfeW5ROAupbKLq0AXi7cgOJtaj7YVq3J"
		const uintgFaRpV = BigInt("1788")
		const boolHhoHD1U = await DynamicZjW8pH8.echidna_test.call({from: accounts[0]});
		const boolgVJxRsu = await DynamicZjW8pH8.echidna_test.call({from: accounts[0]});
		const boolX74Phc0 = await DynamicZjW8pH8.yolo.call(uintgFaRpV, stringqx28Dp8, uintzjtueDW, {from: accounts[3]});
	});

	it('test for Dynamic', async () => {
		const DynamicgtWuNSw = await Dynamic.new({from: accounts[0]});
		const uintBYbg2g = BigInt("1297")
		const stringxioF7Jw = "USWtTmSBwEC4zd3TdMhqABA"
		const uinteMt2td3 = BigInt("140")
		const uintcnKkeiN = BigInt("1874")
		const stringIs2PEnK = "cYcoaT33l"
		const uintgoJnPBY = BigInt("879")
		const boolwf1uDE5 = await DynamicgtWuNSw.yolo.call(uinteMt2td3, stringxioF7Jw, uintBYbg2g, {from: accounts[1]});
		const booli3xikKQ = await DynamicgtWuNSw.yolo.call(uintgoJnPBY, stringIs2PEnK, uintcnKkeiN, {from: accounts[1]});
		const boolgZC72LC = await DynamicgtWuNSw.echidna_test.call({from: accounts[4]});

		assert.equal(boolgZC72LC, true)
		assert.equal(booli3xikKQ, true)
		assert.equal(boolwf1uDE5, true)
	});
})