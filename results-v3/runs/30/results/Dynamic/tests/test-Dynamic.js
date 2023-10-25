const Dynamic = artifacts.require("Dynamic");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dynamic', (accounts) => {
	it('test for Dynamic', async () => {
		const DynamicrcJcoL = await Dynamic.new({from: accounts[2]});
		const boolrdRqLOn = await DynamicrcJcoL.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});
		const boolNvm95KY = await DynamicrcJcoL.echidna_test.call({from: accounts[3]});
		const boolaMHPTaN = await DynamicrcJcoL.echidna_test.call({from: accounts[4]});
		const boolKsM8qaP = await DynamicrcJcoL.echidna_test.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKsM8qaP, true)
		assert.equal(boolNvm95KY, true)
		assert.equal(boolaMHPTaN, true)
		assert.equal(boolrdRqLOn, true)
	});

	it('test for Dynamic', async () => {
		const DynamicD4mZ2X6 = await Dynamic.new({from: accounts[4]});
		const uintOvmcYH5 = BigInt("699")
		const stringTMnRuA = "3IYmXRxvnzY3RPnbuUWbCYrZOw3dEg7MleQghnMtywyM"
		const uintWKQdXeT = BigInt("411")
		const uintSntCxcM = BigInt("138")
		const stringXDeuy3m = "m9w"
		const uintWgHI5p4 = BigInt("2006")
		const boolVpO0MOY = await DynamicD4mZ2X6.echidna_test.call({from: accounts[1]});
		const boolxLwxFko = await DynamicD4mZ2X6.yolo.call(uintWKQdXeT, stringTMnRuA, uintOvmcYH5, {from: accounts[0]});
		const boolZrnu4uc = await DynamicD4mZ2X6.yolo.call(uintWgHI5p4, stringXDeuy3m, uintSntCxcM, {from: accounts[1]});

		assert.equal(boolVpO0MOY, true)
		assert.equal(boolZrnu4uc, true)
		assert.equal(boolxLwxFko, true)
	});

	it('test for Dynamic', async () => {
		const DynamicsfkICX = await Dynamic.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxH8NI53 = BigInt("573")
		const stringxlezHco = "Dl602GFnyo0EjYq"
		const uintGrN0OwT = BigInt("732")
		const boolmlfC4ir = await DynamicsfkICX.yolo.call(uintGrN0OwT, stringxlezHco, uintxH8NI53, {from: accounts[4]});
		const boolY9vpi5S = await DynamicsfkICX.echidna_test.call({from: accounts[3]});
	});
})